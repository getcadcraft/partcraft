---
title: Juhendi alustamine tööruumis Illustreeri
summary: Tööruum Illustreeri teeb kujundusest juhendeid: vaated, lahtivõetud joonised koos pallide ja osade loendiga, samm-sammulised juhised, animatsioonid ja 3D-fail, mida klient saab avada ilma CAD-ita. Juhend on eraldi fail.
keywords: illustreeri, juhend, tehniline illustratsioon, dokumentatsioon, lahtivõetud vaade, osade loend, juhised, partcraft-manual
from: e447e0ab
---

**Illustreeri** on tööruum dokumentidele, mida kujunduse ümber on vaja: lahtivõetud vaated koos pallide ja osade loendiga, joonistusillustratsioonid juhendite jaoks, samm-sammulised juhised, animatsioonid ja 3D-fail, mille klient saab avada ilma CAD-ita. Vali {{ui:Illustreeri}} tööriistariba alguses asuvast {{ui:Tööruum}}-lülitist.

**Juhend** on eraldi fail (`<nimi>.partcraft-manual.json`). See hoiab iga detaili kuju koopiat, toote puud ja detailide omadusi ning linki tagasi nende algallikani, nii et saad juhendiga töötada ka siis, kui kujundus edasi areneb. Kui kujundus muutub, toob [Uuenda kujunduselt](topic:illustrate-update) muudatused sisse.

## Juhendi alustamine

Klõpsa jaotises {{ui:Juhend}} nuppu {{ui:Uus}}, seejärel:

- {{ui:Avatud osast}}: Design'is avatud detail.
- {{ui:Avatud koostust}}: näidatakse selle asemel, kui koost on avatud; selle detailid, nende asukohad, detailinumbrid, materjalid ja lahtivõetud vaated tulevad kaasa.
- {{ui:Koostu failist…}}: salvestatud `.partcraft-asm.json`; PartCraft koostab kõigepealt selle detailid.
- {{ui:Teisest failist…}}: glTF (.glb, .gltf), OBJ, STL või 3MF. Faili puu ja nimed säilivad ning ühe detaili koopiad (sama kuju kahes kohas) muutuvad üheks detailiks koos kogusega. STL- ja OBJ-failid ei ütle oma ühikut, seega küsitakse seda. STL-failid loetakse nii, et Z on üleval; glTF ja 3MF ütlevad oma suuna ise.

Kui juhend on avatud, näitab Illustreeri juhendi enda koopiat detailidest; Design'is avatud detail või koost on peidetud, kuni lähed tagasi Design'i.

## Salvestamine ja avamine

{{ui:Salvesta}} jaotises {{ui:Juhend}} (või {{key:Mod+S}}) salvestab juhendi; {{ui:Ava}} avab ühe. Iga muudatus Illustreeris on üks samm juhendi enda ajaloos: {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} toimivad juhendil, kui Illustreeri on avatud.

## Veel pole valmis

- STEP-failid ei avane veel valikus {{ui:Teisest failist…}}. Ava STEP Design'is (see tuleb sisse tahke kehana: vt [STEP-faili avamine](topic:import-step)) ja alusta juhendit valikuga {{ui:Avatud osast}}, või salvesta see glTF-, 3MF-, OBJ- või STL-vormingus.
- ModelCraft ja BimCraft ei saa veel mudelit Illustreerile otse anda: salvesta see glTF-na (.glb) ja kasuta valikut {{ui:Teisest failist…}}.

Järgmine: [Vaated ja välimused](topic:illustrate-views).
