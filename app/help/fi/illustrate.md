---
title: Ohjeen aloittaminen Havainnollista-työtilassa
summary: Havainnollista-työtila tekee ohjeita suunnitelmasta: näkymiä, räjäytettyjä viivapiirroksia numerointipalloineen ja osaluetteloineen, vaiheittaisia ohjeita, animaatioita ja 3D-tiedoston, jonka asiakas voi avata ilman CAD-ohjelmaa. Ohje on oma tiedostonsa.
keywords: havainnollista, ohje, tekninen kuvitus, dokumentointi, räjäytysnäkymä, osaluettelo, ohjeet, partcraft-manual
from: e447e0ab
---

**Havainnollista** on työtila asiakirjoille, joita suunnitelman ympärillä tarvitaan: räjäytysnäkymät numerointipalloineen ja osaluetteloineen, viivapiirrokset ohjeisiin, vaiheittaiset ohjeet, animaatiot ja 3D-tiedosto, jonka asiakas voi avata ilman CAD-ohjelmaa. Valitse {{ui:Havainnollista}} {{ui:Työtila}}-valitsimesta työkalurivin alusta.

**Ohje** on oma tiedostonsa (`<name>.partcraft-manual.json`). Se säilyttää kopion jokaisen osan muodosta, tuoterakenteen ja osien ominaisuudet sekä linkin alkuperäänsä, joten ohjetta voi työstää suunnittelun jatkuessa. Kun suunnitelma muuttuu, [Päivitä suunnitelmasta](topic:illustrate-update) tuo muutokset mukaan.

## Aloita ohje

Napsauta {{ui:Uusi}} ryhmässä {{ui:Ohje}}, sitten:

- {{ui:Avoimesta osasta}}: Suunnittelussa avoin osa.
- {{ui:Avoimesta kokoonpanosta}}: näytetään sen sijaan, kun kokoonpano on auki; sen osat, niiden paikat, osanumerot, materiaalit ja räjäytysnäkymät tulevat mukaan.
- {{ui:Kokoonpanotiedostosta…}}: tallennettu `.partcraft-asm.json`; PartCraft rakentaa ensin sen osat.
- {{ui:Toisesta tiedostosta…}}: glTF (.glb, .gltf), OBJ, STL tai 3MF. Tiedoston puurakenne ja nimet säilyvät, ja saman osan kopiot (sama muoto sijoitettuna kahdesti) muuttuvat yhdeksi osaksi määrällä. STL- ja OBJ-tiedostot eivät kerro yksikköään, joten siitä kysytään. STL-tiedostot luetaan Z ylös -suuntaisina; glTF ja 3MF kertovat oman suuntansa.

Kun ohje on auki, Havainnollista näyttää ohjeen oman kopion osista; Suunnittelussa avoin osa tai kokoonpano piilotetaan, kunnes palaat Suunnitteluun.

## Tallennus ja avaaminen

{{ui:Tallenna}} ryhmässä {{ui:Ohje}} (tai {{key:Mod+S}}) tallentaa ohjeen; {{ui:Avaa}} avaa sen. Jokainen muutos Havainnollistassa on yksi vaihe ohjeen omassa historiassa: {{ui:Kumoa}} ja {{ui:Tee uudelleen}} toimivat ohjeeseen, kun Havainnollista on auki.

## Ei vielä toteutettu

- STEP-tiedostot eivät vielä avaudu kohdassa {{ui:Toisesta tiedostosta…}}. Avaa STEP sen sijaan Suunnittelussa (se tulee kiintokappaleena: katso [Avaa STEP-tiedosto](topic:import-step)) ja aloita ohje kohdasta {{ui:Avoimesta osasta}}, tai tallenna se glTF-, 3MF-, OBJ- tai STL-muodossa.
- ModelCraft ja BimCraft eivät vielä voi siirtää mallia suoraan Havainnollistaan: tallenna se glTF-muodossa (.glb) ja käytä kohtaa {{ui:Toisesta tiedostosta…}}.

Seuraavaksi: [Näkymät ja ulkoasu](topic:illustrate-views).
