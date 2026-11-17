---
title: Valikot, näppäimet ja hiiri
summary: Valitse valikkotyyli, joka sopii siihen tapaan, jolla jo työskennellään, anna mille tahansa komennolle oma näppäin, siirrä komentoja valintanauhan välilehtien välillä ja aseta, mitä rulla ja kukin hiiren painike tekevät 3D-näkymässä.
keywords: valikkotyyli, valikot, valintanauha, työkalupalkki, muotoelementtipuu, pikanäppäimet, näppäimet, mukauta, uudelleenmääritä, hiiri, rulla, käännä, zoomauksen suunta, keskipainike, kierto, panorointi, vienti, tuonti, vaihto, tutut
from: 8445b06c
---

PartCraftin komennot ovat samat, mistä tahansa niihin pääsee. **Valikkotyyli** päättää vain, missä ne ovat näytöllä, miten ne on nimetty siellä ja mitkä näppäimet ne suorittavat. Tyyli valitaan kohdasta {{ui:Settings}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}; muutos on heti voimassa ja tämä selain muistaa sen.

## Kaksi tyyliä

| Tyyli | Mitä saat |
|---|---|
| {{ui:PartCraft}} | PartCraftin oma työkalupalkki: työtilan vaihtaja, Tiedosto, Luonnos, Muotoelementit, Piirustus, Kokoonpano, Muokkaa ja Näytä. Näppäimet {{key:S}} luonnos, {{key:F}} sovita, {{key:M}} mittaa, {{key:X}} leikkausnäkymä. Lähtökohta. |
| {{ui:Feature tree}} | Valintanauha, asetettuna kuten muotoelementtipohjaiset mekaniikkaohjelmat asettavat omansa: {{ui:File}}-valikko (jossa kaikki viennit), pikapainikkeet ja välilehdet {{ui:Features}}, {{ui:Sketch}}, {{ui:Surfaces}}, {{ui:Evaluate}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Studies}} (työtilat ja niiden työkalut), {{ui:Illustrate}} (Havainnollista-työtilan manuaaliset työkalut; ne vaihtavat ensin Havainnollista-tilaan) ja {{ui:View}}. {{ui:Features}} alkaa kohdasta {{ui:Sketch}}, koska kappale alkaa luonnoksesta. Lisänäppäimet: {{key:E}} pursota, {{key:H}} reikä ja {{key:V}} sitten kirjain näkymälle: {{key:V}} {{key:F}} edestä, {{key:V}} {{key:B}} takaa, {{key:V}} {{key:T}} päältä, {{key:V}} {{key:O}} alta, {{key:V}} {{key:R}} oikealta, {{key:V}} {{key:L}} vasemmalta, {{key:V}} {{key:I}} isometrinen, {{key:V}} {{key:N}} normaali kohteeseen. 3D-näkymässä keskipainike kiertää, {{key:Shift}} ja keskipainike panoroi, oikea painike panoroi ja vasen painike vain valitsee. |

Jokainen tyyli säilyttää {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} ja {{key:Mod+A}}.

Toisen työtilan työkalu vaihtaa ensin siihen; Suunnittelun työkalu, joka valitaan toisesta työtilasta, palaa ensin Suunnitteluun. Luonnostyökalut odottavat luonnosta, piirustustyökalut piirustusarkkia ja kokoonpanotyökalut kokoonpanoa: tilarivi kertoo, mitä tehdä ensin.

:::tip
Luonnoksessa, piirustusarkilla, kokoonpanossa ja muissa työtiloissa kirjaimet säilyttävät merkityksensä siellä ({{key:L}} viiva, {{key:R}} suorakulmio, {{key:J}} liitos …) kaikissa tyyleissä. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolet säilyttävät aina omansa. PartCraftin oman asettelun näppäin, jonka tyyli on antanut toiselle komennolle, ei tee mitään, ja tilarivi kertoo, minne sen komento on siirtynyt.
:::

## Tee siitä oma

1. Valitse lähin tyyli haluttuun ja napsauta {{ui:Customize…}}.
2. Kohdassa {{ui:Keys and menus}} etsi komento (hakukenttä auttaa). Napsauta {{ui:Add a key}} ja paina näppäintä tai kahta peräkkäin. Napsauttamalla näppäintä sen voi poistaa.
3. Valintanauhalla {{ui:Where it sits}} siirtää komennon toiseen välilehteen ja paneeliin, {{ui:File}}-valikkoon tai kohtaan {{ui:Keys only}}.
4. Kohdassa {{ui:Mouse}} aseta rulla, painikkeet, jotka panoroivat luonnosta, ja mitä kukin painike tekee 3D-näkymässä.
5. Anna sille nimi ja napsauta {{ui:Save}}.

Sisäänrakennetun tyylin tallentaminen luo oman kopion (”Oma muotoelementtipuu”); sisäänrakennettu ei koskaan muutu. Näppäin, joka on annettu kahdelle komennolle, tai näppäin, joka estäisi kaksikirjaimisen näppäimen kirjoittamisen, näkyy punaisena, ja se on korjattava ennen tallentamista.

## Hiiri

- **Hiiren rulla**: {{ui:Scroll up zooms in}} (lähtökohta) tai {{ui:Scroll up zooms out}}, ja kuinka nopeasti. Kosketuslevyn nipistys zoomaa aina sormien liikkeen suuntaan.
- **Panoroi luonnosta**: keskipainikkeella, oikealla painikkeella tai molemmilla. Oikea napsautus luonnoksessa lopettaa edelleen työkalun vaiheen.
- **Vedä 3D-näkymässä**: {{ui:Each view's own}} säilyttää PartCraftin asetuksen ({{ui:Settings}} › {{ui:PartCraft}}: vasen kiertää tai keskimmäinen kiertää). Tai aseta kukin painike kiertämään, panoroimaan, zoomaamaan tai ei tekemään mitään; {{key:Shift}} kiertopainikkeen kanssa panoroi. Napsautus ilman vetämistä valitsee silti.

## Ota mukaasi

{{ui:Export}} tallentaa käytössä olevan tyylin pieneen `.ccinput.json`-tiedostoon; {{ui:Import…}} lisää sellaisen toiselta tietokoneelta tai kollegalta. Tuotu tiedosto voi osoittaa vain PartCraftin omiin komentoihin: muu siinä jätetään pois ja lasketaan tilarivillä. {{ui:Delete this style}} poistaa yhden omista tyyleistä.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Use this style in every app}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissä (sen oma työkalupalkki tai valintanauha), muutoksineen kussakin sovelluksessa. Toisen tyylin valitseminen yhdessä sovelluksessa muuttaa vain sitä.
:::

Aiheeseen liittyvää: [Näppäimet ja hiiri](topic:keyboard) · [PartCraftin asetukset](topic:settings) · [Siirtyminen toisesta parametrisesta mallintajasta](topic:coming-from)
