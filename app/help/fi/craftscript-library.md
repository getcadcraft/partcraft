---
title: Analyysikirjasto
summary: Analyysikirjasto Skripti-työtilassa: luettavat analyysiskriptit, mitä kukin ryhmä sisältää, funktion avaaminen vain luku -tilassa, sen otsikko menetelmineen, lähteineen ja tarkistuksineen, oman kopion tekeminen ja se, miten kopio korvaa kirjastofunktion.
keywords: kirjasto, craftlib, analyysi, sähkömagneetti, staattinen, modaalinen, lämpö, topologian optimointi, top88, SIMP, sähkömagnetiikka, sähköstatiikka, magnetostatiikka, neste, hilaboltzmann, LBM, verkko, voksel, tetraedrit, lähteet, tarkistus, varmennus, kopio, varjo
from: bf993859
---

Analyysikirjasto on joukko skriptejä, joista kukin on funktio, jonka voi lukea alusta loppuun: miten jäykkyysmatriisi kootaan, minne reunaehdot menevät, mikä ratkaisija ajetaan, miten tulokset lasketaan. Mikään siinä ei ole piilossa mustana laatikkona; vain nopeat sisäiset silmukat (elementtimatriisit, harvat ratkaisijat, verkotus) ovat sisäänrakennettuja.

## Aloita esimerkistä

**Esimerkit**-ryhmässä on viisi lyhyttä skriptiä, jotka käyttävät kirjastoa alusta loppuun. Napsauta yhtä, paina {{ui:Avaa (vain luku)}} ja sitten {{key:F5}}: kukin tyhjentää näkymän, näyttää tuloksen kankaalla ja kuvaajan alinäkymissä.

| Esimerkki | Mitä se näyttää |
|---|---|
| Konsolin jännitys | Teräspalkki 100 × 10 × 10 mm, jonka kärkeen kohdistuu 100 N kuorma: von Mises -jännitys muodonmuutoksen jälkeen palkissa sekä kärkipoikkeama palkkiteoriaa vastaan neljällä elementtikoolla (piirretty) |
| MBB-palkin topologia | Klassinen 60 × 20 topologian optimointi: suunnitelman muodostuminen, compliancen lasku, lopullinen asettelu (94 iteraatiota, compliance 203.19) |
| Kondensaattorin kenttä | Kaksi 4 mm leveää levyä 1 mm:n välein: potentiaali ja kenttä, kapasitanssi reunavaikutuksineen verrattuna ihanteelliseen arvoon ja Palmerin kaavaan |
| Kanavavirtaus | Hilaboltzmann-virtaus kanavassa olevan pylvään ohi: nopeuskenttä ja lähentymishistoria |
| Sähkömagneetti | C-muotoinen rautasydän ilmaraolla ja käämillä: magneettivuon tiheys, raon kenttä magneettipiirin kaavaa vastaan, induktanssi ja veto raon yli. Käydään läpi aiheessa [Magneettikentät 2D:ssä](topic:magnetic-fields-2d) |
| Kestomagneetti | Sama sydän kestomagneetilla käämin sijaan: magneetin toimintapiste, raon kenttä magneettipiirin kaavaa vastaan, kuinka paljon vuota karkaa, veto. Aiheessa [Magneettikentät 2D:ssä](topic:magnetic-fields-2d#permanent-magnets) |

## Ryhmät

| Ryhmä | Funktiot | Mitä ne tekevät |
|---|---|---|
| Verkotus | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Laatikot ja sylinterit heksaedreina, kuutioina tai tetraedreina; minkä tahansa mallin (osan, kappaleen, ladatun STL:n) kuutiot tai tetraedrit; elementtien tilavuudet ja laatu; solmujen valinta tasolta tai pinnalta |
| Staattinen jännitys | `static_voxel`, `static_tet` | Lineaarinen staattinen jännitys kuutioilla tai 10-solmuisilla tetraedreilla: siirtymät, jännitykset, von Mises, reaktiot |
| Rungot | `frame3d` | 3D-rungot palkeista, pilareista ja jäykisteistä suorajäykkyysmenetelmällä: sauvapäiden vapautukset, tuet ja jouset, kuormat sauvoja pitkin; siirtymät, reaktiot, sauvapäiden voimat. DetailCraftin ja BimCraftin {{ui:Vie CraftScriptinä}} kirjoittaa koko mallin tähän. Analyysiapu, ei mitoitustarkastus |
| Värähtely | `modal_tet` | Luonnolliset taajuudet ja muotomuodot |
| Lämpö | `heat_steady`, `heat_transient`, `heat_system` | Stationäärinen ja transienttinen johtuminen kiinteillä lämpötiloilla, lämmöntuonnilla, lämmöntuotolla, vuolla ja konvektiolla |
| Topologian optimointi | `top88`, `top99`, `topopt3d` | Julkaistut 88- ja 99-rivin 2D-koodit sekä sama menetelmä 3D:nä kuutioilla |
| Sähkömagnetiikka | `poisson2d`, `magnetostatic2d` | 2D-sähköstatiikka (potentiaali, kenttä, kapasitanssi, varaus) ja magnetostatiikka (vektoripotentiaali, vuon tiheys, kestomagneetit) |
| Virtaus | `lbm2d`, `lbm3d` | Hilaboltzmann-virtaus: 2D kirjoitettuna auki skriptiin, 3D PartCraftin omalla virtausytimellä |

Jokaisen funktion otsikko kertoo tarkat argumentit. Yksiköt ovat PartCraftin tutkimusten yksiköt, ellei otsikko sano toisin: millimetrit, newtonit, megapascalit, tonnia per mm³ tiheydelle, watit ja kelvinit lämmölle. Sähkömagneettiset funktiot ja hilaboltzmann-funktiot toimivat missä tahansa yhtenäisissä yksiköissä; niiden otsikot kertovat, miten.

## Kirjaston tarkistus

Jokaisen funktion otsikko päättyy **tarkistukseen**: pieneen tapaukseen, jolla on tunnettu vastaus. PartCraftin testit ajavat jokaisen niistä, ja kun PartCraftilla on oma tutkimus samaan tehtävään, skriptin vastausta verrataan siihen samalla verkolla:

- konsolipalkin kärkipoikkeama palkkiteoriaa vastaan (0.2 %:n tarkkuudella kuutioilla, 0.05 %:n tetraedreilla) ja **Simulointi**-työtilan ratkaisijoita vastaan samalla verkolla (sama useaan numeroon asti);
- konsolipalkin ensimmäinen taajuus palkkiteoriaa vastaan (0.24 % alempi, kuten lyhyelle palkille odotetaan) ja **Simulointi**-työtilan modaalisen ratkaisijan kanssa;
- lämpö: lämmitetty tasaseinä tarkasti, pieni kappale jäähtyy lumped-capacity-kaavan mukaan, laatan lämpötila häviää teorian mukaan;
- topologian optimointi: `top88` toistaa artikkelin 94 iteraatiota ja complianceen 203.1925 (ja 218.8032 tiheyssuodattimella); `topopt3d` päättyy samaan complianceen kuin **Generatiivinen**-työtila samoilla asetuksilla;
- kondensaattorin kapasitanssi ja pitkän solenoidin kenttä oppikirjan arvoja vastaan, sähkömagneetin raon kenttä magneettipiirin kaavaa vastaan ja kestomagneetit pyöreää ilmassa olevaa magneettia ja rautapalalla (keeper) suljettua magneettia vastaan;
- kanavavirtaus tarkkaa paraboliprofiilia vastaan.

## Funktion lukeminen

1. Avaa skriptipaneelin **Kirjasto**-välilehti.
2. Valitse funktio. Sen otsikossa näkyy: mitä se laskee, menetelmä, yksiköt, oletukset ja rajoitukset, **lähteet** (kirja tai artikkeli, yhtälönumeroineen) ja **tarkistus** — pieni tapaus tunnetulla vastauksella, jota PartCraftin omat testit ajavat.
3. {{ui:Avaa (vain luku)}} avaa koko skriptin välilehdessä, jonka reunus on katkoviiva. Voit ajaa sen, valita ja ajaa osia siitä, mutta et muuttaa sitä.

## Funktion muokkaaminen

Paina {{ui:Tee kopio}} (tai **Tee muokattava kopio** vain luku -välilehden yläpuolella). Kopio on osan skripti samalla nimellä, joten se tallennetaan osan mukana, ja **jokainen kyseisen funktion kutsu käyttää nyt kopiotasi** — editori kertoo tämän skriptin yläpuolella. Nimeä kopio uudelleen, jos haluat säilyttää molemmat.

## Funktion käyttäminen

Kutsu kirjastofunktiota mistä tahansa skriptistä sen nimellä, kuten sisäänrakennettua funktiota:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Tulokset palautuvat työtilan arvoina; sen näyttämät kuvaajat ja kentät näkyvät näkymässä ja alinäkymissä.

Avoimen osan staattinen analyysi vie esimerkiksi muutaman rivin:

```
v = voxel_mesh(part(), 2);                   % 2 mm kuutiot
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % pidä alareunasta
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N alas yläreunaan
r = static_voxel(v, 210000, 0.3, bc);       % teräs
```

`r` sisältää siirtymät, jännitykset ja reaktiot; von Mises -jännitys piirretään muodonmuutoksen jälkeen osaan. Kaarevia osia varten käytä `tet_mesh`- ja `static_tet`-funktioita, jotka voivat myös kuormittaa ja tukea kokonaisia pintoja (`face_nodes`).

:::note
Kirjaston funktiot on kirjoitettu CraftScriptillä, ja Lua-skripti kutsuu niitä `cs`:n kautta kuten sisäänrakennettuja funktioita: `cs.static_tet(t, 200000, 0.3, bc)` (katso [Skriptit Lua-kielellä](topic:craftscript-lua)). Jokainen funktio ratkaisee yhden materiaalin ja yhden kuormitustapauksen; otsikot kertovat, mitä muuta ei kata.
:::
