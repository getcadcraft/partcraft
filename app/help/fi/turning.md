---
title: Sorvaus sorvilla
summary: Pinnan, karkeistuksen, viimeistelyn, uran, katkaisun, kierteen ja poraamisen tekeminen sorvatulle osalle sen ääriviivasta, jonka osa muodostaa pyöriessään. Sorvatyökalut, kierrosta kohti annetut syötöt, sorvipostprosessorit ja mitä ei ole todistettu.
keywords: sorvaus, sorvi, sorvata, pinnan sorvaus, karkeistus, viimeistely, ura, uritus, katkaisu, kierre, kierteitys, G32, G33, G96, vakiopinnannopeus, css, kärkisäde, vaihtoterä, tanko, istukka, halkaisija, syöttö kierrosta kohti, G71, G76
from: d8cc53b0
---

Manufacturessa on seitsemän toimenpidettä sorvia varten. Ne toimivat millä tahansa osalla: leikattava on **ääriviiva, jonka osa muodostaa pyöriessään** raaka-aihion keskilinjan ympäri, joten osa, joka ei ole pyöreä, sorvataan alas pyöreään muotoon, joka pitää sen kiinni.

**Mitään tässä ei ole ajettu sorvilla.** Radat tarkistetaan geometriaa vasten testeillä; kaksi sorvipostprosessoria seuraavat ohjainten dokumentoituja koodeja. Todista ohjelma ohjaimesi omassa simulaattorissa ja ilmassa ensin.

## Asetus

**Asetus**-välilehdellä:

- **Työkaluakseli** on karan akseli, sorvin Z. Osan etuosa on +Z:ssa; istukka pitää toista päätä.
- **Raaka-aihio**: valitse {{ui:Cylinder}}, tanko. Sen yläosan ylimäärä on se, minkä pinnan sorvaus poistaa.
- **Työnollapiste**: raaka-aihion yläosan tai mallin yläosan keskipiste asettaa Z0:n etuosalle, tavallisen paikan.
- **Ohjain**: {{ui:Fanuc-style lathe (.nc)}} tai {{ui:LinuxCNC lathe (.ngc)}}. Jyrsintäpostprosessori kieltäytyy sorvausohjelmasta ja kertoo sen.
- **Karan enimmäisnopeus**: raja, jonka alle pinnan nopeus pidetään.

Manufacturen työkalurivin {{ui:More}}-valikko listaa seitsemän sorvaustoimenpidettä **Toimenpiteet**-välilehden yläosassa. Ensimmäinen, jonka lisäät, tuo oman työkalunsa: **vaihtoterän** (kärkisäde, terän kulma, leikkuureunan kulma) tai **uritusterän** (leveys, kulmasäde, kuinka syvälle se ulottuu). Muuta niitä **Työkalut**-välilehdellä. Syötöt ovat kierrosta kohti, ja nopeus on pinnan nopeus m/min, jonka ohjain pitää, kun halkaisija muuttuu; anna työkalulle oma kierrosluku, jos haluat kiinteän nopeuden.

## Toimenpiteet

| Toimenpide | Mitä se tekee |
|---|---|
| {{ui:Face}} | Pinnoittaa tangon etupuolen osaan asti, yksi syvyysaskel kerrallaan, ulkoa keskikohdan ohi. |
| {{ui:Rough}} | Ajot Z:n suunnassa **leikkaussyvyyden** päässä toisistaan, alas ääriviivaan plus **jätettävä ylimäärä**; sitten kerran ääriviivaa pitkin askelmien poistamiseksi. Kahden olkapään välinen laakso otetaan sisään yhden leikkaussyvyyden upotuksella. |
| {{ui:Finish}} | Yksi ajo ääriviivaa pitkin työkalun syötön murto-osalla. |
| {{ui:Groove}} | Upottaa terän vierekkäin aina, kun se voi ottaa enemmän kuin jäljellä olevan materiaalin raja: urat, joihin vaihtoterä ei yltänyt. **Alusta / Loppuun Z** kaventaa sitä. |
| {{ui:Part off}} | Katkaisee osan takapinnan takaa keskikohdan ohi, pecki-poraus mukana, jos asetat sen. |
| {{ui:Thread}} | Ulkokierre: suuri halkaisija, nousu, pituus, ajojen määrä. Syvyys 0 tarkoittaa 0,6134 × nousua (60° kierre). Jokainen ajo ottaa saman lastun pinta-alan; jousiajot toistavat viimeisen. |
| {{ui:Drill}} | Pora keskiviivalle syvyyteen, pecki-poraus mukana. |

## Miten työkalu pidetään irti osasta

Terä käsitellään sellaisena kuin se on: sen kärkiympyrä ja sen takana takareuna, suora viiva, jonka kulma on 180° miinus leikkuureunan kulma ja terän kulma. Tämä muoto lasketaan ääriviivalle jokaisessa Z:n pisteessä, ja rata on kohta, johon se jää lepäämään. Siis:

- **Kärkisäde on jo radassa.** Postprosessorit eivät kirjoita `G41`:tä tai `G42`:ta; koordinaatit ovat työkalun ohjelmoitu piste (neliön kulma kärkikaaren ympärillä).
- Terä **ei voi seurata seinää, joka on jyrkempi kuin sen takareuna**. Olkapään takana oleva ura jää rauhaan, ja viimeistelytoimenpide kertoo, kuinka suuren osan ääriviivasta se ei voinut saavuttaa. {{ui:Groove}}-toimenpide ottaa sen.
- Raaka-aihiota seurataan Z:n suunnassa jokaisen leikkauksen jälkeen, joten karkeistus ei leikkaa ilmaa, uritus löytää jäljelle jääneen, ja jokainen toimenpide näyttää, kuinka paljon tilavuutta se poisti ja leikkasiko se osaan.

## Rajoitukset

- **Vain ulkosorvaus**: ei sisäpuolista sorvausvartta, ei sisäuria eikä kierteitä, ei päätyuria.
- Yksi kara, osa pidettynä −Z:ssa. Ei apukaraa, ei elävää työkalua, ei C- tai Y-akselia, ei lünettiä eikä vastakaran liikkeitä.
- Radat ovat suoria liikkeitä: käyrät ovat lyhyitä viivoja toleranssin sisällä (ei `G2`/`G3`), ja karkeistus ja kierteitys kirjoitetaan ajo kerrallaan (ei `G71`- tai `G76`-syklejä).
- Kierteitys on suoria ajoja suoralla irtoamisella lopussa; anna kierteelle vapautusura. Kierrettä ei näytetä raaka-aihiossa.
- Keskiöön poraus ei muuta raaka-aihiomallia.
- Pidikettä, revolveria ja istukkaa ei tarkisteta. Aseta **Pysäytä Z-kohdassa** pitämään työkalu poissa leuoista.
- Syötöt ja nopeudet ovat lähtöarvoja, kuten jyrsinnässä.
