---
title: Magneettikentät 2D:ssä (opas)
summary: Laske sähkömagneetin tai kestomagneetin magneettikenttä analyysikirjastolla: aja esimerkit, lue vuon tiheys, raon kenttä, induktanssi ja veto, muuta suunnittelua ja mallinna oma muoto kelojen, magneettien ja raudan avulla.
keywords: magneettinen, magnetostatiikka, magneettikenttä, vuon tiheys, tesla, sähkömagneetti, solenoidi, kela, ampeerikierrokset, rautasydän, ilmarako, läpäisevyys, induktanssi, magneettinen voima, reluktanssi, magneettipiiri, vektoripotentiaali, elektromagnetiikka, elementtimenetelmä, fem, moottori, toimilaite, muuntaja, magnetostatic2d, kestomagneetti, neodyymi, ndfeb, ferriitti, remanenssi, toimintapiste, palautus, vuoto, pitomagneetti
from: 215f6601
---

PartCraftin analyysikirjasto voi laskea kelojen ja raudan magneettikentän 2D:ssä: poikkileikkauksen asiasta, joka on pitkä ja samanlainen koko pituudeltaan, kuten sähkömagneetti, muuntajan sydän, kiskojohdin tai moottorin poikkileikkaus. Tämä opas ajaa kirjaston sähkömagneettiesimerkin, lukee, mitä se sanoo, muuttaa sitä, näyttää, miten oma muoto mallinnetaan, ja lisää sitten kestomagneetin.

Se käyttää Script-työtilaa ja [analyysikirjastoa](topic:craftscript-library). CraftScript-kielen tuntemista ei tarvita oppaan seuraamiseen: esimerkki kertoo, mitä kukin rivi tekee.

## Mitä mallinnetaan

C-muotoinen rautasydän, 100 × 80 mm ulkomitoilla ja 20 mm paksuudella, jossa on 2 mm ilmarako oikeassa jalassa. Kela, jossa on 100 kierrosta ja 10 A virta (1000 ampeerikierrosta), on kääritty vasemman jalan ympärille. Kaikki on pitkää ruudusta ulospäin, joten vastaukset ovat **metriä syvyyttä kohden**: kerro todellisella syvyydellä todellista magneettia varten.

Kirjaston `magnetostatic2d` ratkaisee magneettisen vektoripotentiaalin 1 mm:n neliöistä koostuvalla ruudukolla magneetin ympärillä olevassa ilmalaatikossa ja laskee siitä vuon tiheyden **B** (teslassa).

## Aja esimerkki

1. Valitse **Script** **Työtila**-kentästä työkalupalkin vasemmassa reunassa.
2. Avaa skriptipaneelin **Kirjasto**-välilehti, sitten **Esimerkit** › **Sähkömagneetti: kenttä, rako, induktanssi**.
3. Napsauta {{ui:Open (read-only)}} ja paina {{key:F5}}.

Muutaman sekunnin kuluttua kanvaassa näkyy vuon tiheys, ja konsoli tulostaa:

```
B raossa 0.5427 T; magneettipiiri 0.5516 T (-1.6 %: reunavuoto ja vuoto)
induktanssi 0.1539 H metriä syvyyttä kohden; piiri antaa 0.1103 H/m, koska siitä puuttuu raon ohi vuotava vuo
varastoitu energia 7.694 J/m; |B| huippu 1.97 T ikkunan sisänurkissa (todellinen teräs kyllästyisi siinä)
veto raon yli noin 2343 N metriä syvyyttä kohden (117.2 N 50 mm syvyydellä)
```

Kanvaan alla oleva kuvaaja on pystysuuntainen vuon tiheys B_y sydämen keskiviivaa pitkin vasemmalta oikealle: noin −0.55 T vasemmassa jalassa (vuo kulkee sitä alas), lähes ei mitään ikkunassa ja +0.55 T oikeassa jalassa ja raon yli (vuo palaa ylös). Sama vuo kulkee raudan ja raon läpi, joten kaksi jalkaa ja rako näyttävät lähes saman arvon.

## Lue tulokset

- **Kenttä raossa** on 0.543 T. Käsilaskenta käsittelee sydämen yhtenä magneettipiirinä, B = μ0 N I / (g + l / μr), missä g on rako, l raudan läpi kulkevan reitin pituus ja μr raudan suhteellinen läpäisevyys; se antaa 0.552 T. Kenttä on hieman käsilaskentaa alhaisempi, koska vuo pullistuu raon ympärillä (reunavuoto) ja osa vuosta oikaisee ikkunan poikki (vuoto). Pienemmällä raolla tai hienommalla ruudukolla tulokset lähenevät.
- **Induktanssi** 100 kierroksen kelalle on 0.154 H metriä syvyyttä kohden, laskettuna kenttään varastoidusta energiasta. Piirikaava antaa vähemmän (0.110 H/m), koska se laskee vain raon läpi kulkevan vuon, ei raon ohi vuotavaa vuota.
- **Veto**, joka sulkee raon, on B² w / (2 μ0) raon pinnalle, jonka leveys on w: noin 2300 N metriä kohden, tai 117 N 50 mm syvälle magneetille.
- **Huippu** 1.97 T sijaitsee ikkunan sisänurkissa, missä vuo kääntyy jyrkästi. Malli käsittelee rautaa lineaarisena; todellinen sähköteräs kyllästyy noin 1.5–2 T:ssa, joten arvot sen yläpuolella ovat varoitus, ei vastaus.

:::note
Kirjaston omat testit ajavat tämän esimerkin ja tarkistavat raon kentän magneettipiirin kaavaa vastaan jokaisella PartCraft-muutoksella. Menetelmä, sen lähteet ja muut tarkistukset (pitkä solenoidi, rautasydämellinen solenoidi) ovat `magnetostatic2d`:n otsikossa: napsauta sitä kirjastossa.
:::

## Muuta suunnittelua

1. Napsauta {{ui:Make a copy}} vain luettavan skriptin yläpuolella. Kopio tallennetaan kappaleen mukana.
2. Muuta arvoa lähellä ylhäällä ja paina {{key:F5}} uudelleen. Kokeile:
   - `g = 0.001;` — puolet raosta: raon kenttä lähes kaksinkertaistuu, ja samoin veto (se seuraa B²:ta).
   - `mur = 200;` — huonompi sydän: suurempi osa ampeerikierroksista kuluu raudassa.
   - `N = 200;` — kaksinkertainen kierrosmäärä: kaksinkertainen kenttä, nelinkertainen induktanssi.
   - `h = 0.0005;` — hienompi ruudukko: tarkemmat vastaukset, noin nelinkertainen aika.

Jokainen ajo korvaa kanvaan. Skriptin tekemät muuttujat (kuten `Bgap`, `L`, `F`) pysyvät **Muuttujat**-luettelossa omiin laskelmiin.

## Mallinna oma muoto

Esimerkki rakentaa kaiken kolmesta listasta, yksi arvo ruutua kohden. Näitä listoja voi tehdä mille tahansa muodolle, joka on piirretty suorin viivoin ruudukkoa pitkin:

- **Missä rauta on:** `iron` on tosi sydämen sisällä olevissa ruuduissa. Esimerkki rakentaa sen suorakulmioista: `frame & ~window & ~gap` tarkoittaa ”kehyksessä, ei ikkunassa, ei raossa”.
- **Läpäisevyys:** `1 + (mur - 1) * iron` on 1 ilmassa ja `mur` raudassa. Useille materiaaleille annetaan omat arvonsa samalla tavalla.
- **Virta:** `J` on virrantiheys ampeereina neliömetriä kohden, positiivinen ulos ruudusta, negatiivinen sisään. Kelalla on kaksi puolta, joilla on vastakkaiset etumerkit; esimerkki laskee `J0`:n niin, että toinen puoli kuljettaa N I:n.

Sitten `r = magnetostatic2d(m, permeability, J)` ratkaisee sen. `r.B` on vuon tiheys kussakin ruudussa (kaksi saraketta, x ja y), `r.Bmag` sen koko ja `r.energy` varastoitu energia metriä kohden. `plot(x, y)` piirtää viivan.

Kirjasto toimii metreissä ja näkymä millimetreissä, joten kenttä, joka näytettäisiin sellaisenaan, piirtyisi tuhat kertaa liian pieneksi. Esimerkki näyttää sen ruudukon kopiolla millimetreissä (`mm = quadGrid(…)`, sitten `show(field(mm, …))`): kopioi nuo kaksi riviä.

Oletuksena laatikon reuna pitää kentän sisällään: vuota ei poistu siitä. Tee laatikosta vähintään kaksi tai kolme kertaa magneetin kokoinen, ettei tämä puristaisi kenttää. Symmetriselle magneetille voi mallintaa puolet siitä: `magnetostatic2d`:n otsikko kertoo, mitä reunaehtoa käytetään symmetriaviivalla.

## Kestomagneetit

Toinen esimerkki, **Esimerkit** › **Kestomagneetti rautasydämessä: toimintapiste, vuoto, veto**, on sama sydän ilman kelaa, ja vasemman jalan 10 mm:n viipale on korvattu ylöspäin magnetoidulla magneetilla. Aja se painamalla {{key:F5}}. Se tulostaa:

```
magneetti toimii B = 1.036 T, H = -124 kA/m (palautusviivallaan B = Br + μ0 μr H)
B raossa 0.6778 T; magneettipiiri ilman vuotoa 0.9692 T (-30.1 %)
vuototekijä 1.53: magneetista lähtevästä vuosta 65 % ylittää napapintojen välisen raon
veto raon yli noin 3656 N metriä syvyyttä kohden (182.8 N 50 mm syvyydellä)
```

- **Toimintapiste.** Magneetti kuvataan **remanenssillaan** Br (kenttä, jonka se säilyttää, kun rauta oikaisee sen: noin 1.2 T sintratulle NdFeB-magneetille, 0.4 T ferriitille) ja palautusläpäisevyydellään (noin 1.05 ja 1.1). Raon avaaminen painaa sen alas palautusviivallaan: tässä 1.04 T:iin, ja H osoittaa magneetin sisällä B:tä vastaan.
- **Vuoto.** Käsilaskenta ilman vuotoa antaa 0.97 T raossa; malli antaa 0.68 T. Magneetti ajaa vuonsa voimakkaalla työntövoimalla lyhyellä matkalla, joten suuri osa siitä kulkee suoraan takaisin ikkunan poikki raon sijaan. Vuototekijä kertoo, kuinka paljon: tässä 1.53. Suljetulle pidikkeelle asetetaan `g = 0;`: silloin magneetti toimii alle puolen prosentin tarkkuudella käsilaskentaan verrattuna.
- **Magneetit omassa mallissa.** Anna `magnetostatic2d`:lle magneetit muodossa `struct('Br', Br)`, missä `Br` sisältää yhden rivin ruutua kohden, remanenssin x- ja y-suunnassa teslassa (nolla magneettien ulkopuolella). Anna magneettiruuduille palautusläpäisevyys läpäisevyyslistassa:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T ylöspäin ruuduissa, joissa mag on tosi
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Kulmassa magnetoidulle magneetille laitetaan `Br·cos(angle)` ja `Br·sin(angle)` kahteen sarakkeeseen; renkaalle, joka on magnetoitu ulospäin, lasketaan kunkin ruudun suunta sen sijainnista. `r.H` antaa kenttävoimakkuuden H kussakin ruudussa.

Malli pitää magneetin suoralla palautusviivallaan riippumatta siitä, kuinka kovaa sitä ajetaan. Oikea magneetti, jota ajetaan polvensa yli (suuren raon, voimakkaan kelan tai lämmön takia), menettää osan vahvuudestaan pysyvästi: tarkista toimintapiste valmistajan käyrästä laadulle ja lämpötilalle.

Kirjaston testit tarkistavat magneetit kahta käsin laskettua tulosta vastaan: pyöreä magneetti avoimessa ilmassa (sen sisällä B = Br / (1 + μr)) ja rautapidikkeellä suljettu magneetti (magneettipiiri), molemmat 1 %:n tarkkuudella.

## Mitä se ei vielä tee

- **Kyllästyminen.** Rauta on lineaarinen: kaksinkertainen virta, kaksinkertainen kenttä, rajatta.
- **Demagnetointi.** Magneetit pysyvät suoralla palautusviivallaan (katso yllä).
- **Pyörrevirrat** ja **häviöt** (raudan häviö, kuparin häviö).
- **Liikkuvat osat ja momentti.** Ei pyörivää roottoria staattorissa, ei momenttia kulmaa vastaan.
- **Pyöreät muodot.** Ruudukko koostuu yhtä suurista neliöistä, joten kaarevat ääriviivat tulevat portaittaisina.
- **3D.** Kaikki on poikkileikkaus jostain pitkästä.

Moottorisuunnittelu (pyörivä roottori, momentti ja häviöt 2D:ssä) on harkinnassa tulevaa versiota varten. Katso [Ei vielä toteutettu](topic:not-built-yet).
