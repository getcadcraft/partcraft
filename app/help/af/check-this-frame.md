---
title: Kontroleer hierdie raamwerk
summary: Neem die staal-lede van 'n sweissamestelling ('n skid, 'n staander, 'n raamwerk van buise en profiele), plaas die toerusting op sy voete en die steune op die vloer, en sien hoeveel van elke lid en elke sweis gebruik word onder AISC 360-16 of EN 1993. 'n Hulpmiddel totdat 'n ingenieur dit hersien het.
keywords: raamwerk, sweissamestelling, skid, pompskid, strukturele lid, sweis, sweise, kontroleer, AISC 360, EN 1993, benutting, gebruik, steun, toerusting, las, holle profiel, HSS, RHS, CHS, ingenieur
from: 032e34ee
---

{{ui:Kontroleer hierdie raamwerk}} neem die reguit staal-lede van 'n sweissamestelling, bou 'n raamwerk daaruit, los dit op onder die gewig van die staal en van die toerusting wat jy daarop plaas, en toets elke lid en elke sweis waar lede ontmoet. Een lopie, een tabel.

:::warning
Dit is **'n hulpmiddel totdat 'n ingenieur dit hersien het**. Dit is nie 'n stempel nie, en 'n slaag is nie 'n ontwerp nie. Dit gebruik die lede se middellyne soos getekend, behandel elke verbinding as rondom gesweis oor die profiel, neem die been van die vulsweis uit die wand van die profiel (tot 8 mm) tensy jy dit stel, en kontroleer nie bouts, plate, basisplate, ankers, lagering, blokskuif, vermoeidheid of hyser nie.
:::

## Loop dit

1. Teken die lede met {{ui:Strukturele lid}} (die profiele kom uit die profieltabel).
2. Maak {{ui:Aansigte}} › {{ui:Kontroleer hierdie raamwerk}} oop. Sê waar die raamwerk staan (een **steun** by elke voet: gepen, vas of rol; {{ui:Gepende steune by die voete}} sit een by elke laagste lidend) en wat daarop sit (**toerusting**: massa, swaartepunt, die punte waar dit vasgebout is, en 'n opsionele horisontale druk).
3. Kies die kode: **ASCE 7 + AISC 360-16** of **EN 1990 + EN 1993**. Stel die staalgraad in en, vir AISC, die sweismetaal se sterkte (482,6 MPa is E70).
4. Druk {{ui:Kontroleer}}. {{ui:Stoor die verslag as CSV}} skryf elke tabel uit, met die reël wat sê dit is nie hersien nie eerste.

Die raamwerk word in millimeter gelees met die onderdeel se vertikale as op. Steun- en toerustingpunte word getik as x y z in dieselfde raamwerk, met z die hoogte.

'n Lidend wat op die middel van 'n ander lid land, verdeel dit daar, net so 'n voet of 'n bout-vas-punt op 'n lid se lyn. 'n Gewig word oor die bout-vas-punte gedeel as 'n starre liggaam; 'n swaartepunt buite die voete, of 'n hyserkrag by 'n voet, word gesê en nooit versteek nie.

## Wat jy kry

- Die item wat die meeste gebruik word en of enigiets faal. Items wat die kontrole nie kan beoordeel nie ('n profiel wat nie in die tabel is nie, 'n staal sonder 'n faktor in die kode) word getel en genoem, nooit as 'n slaag getel nie.
- Een ry per lid en per sweisgroep: hoeveel gebruik word, die bepalende kontrole en klousule, en die laskombinasie wat bepalend was.
- Dieselfde tabelle in die verslag.

## Wat getoets word

Holle profiele (RHS, SHS, CHS, buis) en I-profiele vir trek, druk, buiging, skuif en hul wisselwerking; vulsweise en volledige-deurdringingsweise deur die elastiese vektormetode. Kompakte wande in buiging net vir holle profiele; slanke wande word gesê dat hulle nie getoets is nie. Sommige konstantes is uit die standaarde geskryf en nog nie met 'n gedrukte kopie vergelyk nie; die verslag lys elke bron.

Sien [Raamwerke uit staalprofiele](topic:structural-members) vir die teken van die lede en hul snylys.
