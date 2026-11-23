---
title: Kontrollér denne ramme
summary: Tag stålprofilerne i en svejset konstruktion (et skid, et stativ, en ramme af rør og profiler), sæt udstyret på fødderne og understøtningerne på gulvet, og se, hvor meget af hvert profil og hver svejsning der udnyttes efter AISC 360-16 eller EN 1993. Et hjælpemiddel, indtil en ingeniør har gennemgået det.
keywords: ramme, svejset konstruktion, skid, pumpeskid, stålprofil, svejsning, svejsninger, kontrol, AISC 360, EN 1993, udnyttelse, udnyttelse, understøtning, udstyr, last, hulprofil, HSS, RHS, CHS, ingeniør
from: 032e34ee
---

{{ui:Kontrollér denne ramme}} tager de lige stålprofiler i en svejset konstruktion, bygger en ramme af dem, løser den under vægten af stålet og det udstyr, du sætter på den, og tester hvert profil og hver svejsning, hvor profiler mødes. Én kørsel, én tabel.

:::warning
Det er et **hjælpemiddel, indtil en ingeniør har gennemgået det**. Det er ikke et godkendelsesstempel, og en bestået kontrol er ikke et design. Det bruger profilernes centerlinjer, som de er tegnet, regner hver samling som svejst hele vejen rundt om profilet, tager svejsens benlængde fra profilets væg (op til 8 mm), medmindre du sætter den, og kontrollerer ikke bolte, plader, fodplader, ankre, understøtningstryk, blokforskydning, udmattelse eller løft.
:::

## Kør den

1. Tegn profilerne med {{ui:Stålprofil}} (profilerne kommer fra profiltabellen).
2. Åbn {{ui:Visninger}} › {{ui:Kontrollér denne ramme}}. Angiv, hvor rammen står (en **understøtning** ved hver fod: ledet, fast eller rulle, og {{ui:Ledede understøtninger ved fødderne}} sætter en ved hver nederste profilende), og hvad der står på den (**udstyr**: masse, tyngdepunkt, punkterne hvor det er boltet fast, og et valgfrit vandret skub).
3. Vælg normen: **ASCE 7 + AISC 360-16** eller **EN 1990 + EN 1993**. Angiv stålkvaliteten og, for AISC, svejsemetallets styrke (482.6 MPa er E70).
4. Tryk på {{ui:Kontrollér}}. {{ui:Gem rapporten som CSV}} skriver hver tabel, med linjen om ikke-gennemgået først.

Rammen læses i millimeter med delens lodrette akse op. Understøtninger og udstyrspunkter angives som x y z i samme ramme, med z som højden.

Et profilende, der lander på midten af et andet profil, deler det der, ligesom en fod eller et boltepunkt på et profils linje gør. En vægt fordeles over boltepunkterne som et stift legeme; et tyngdepunkt uden for fødderne eller en løftekraft i en fod siges, aldrig skjules.

## Hvad du får

- Den mest brugte post og om noget fejler. Poster, kontrollen ikke kan bedømme (et profil der ikke er i tabellen, et stål uden en faktor i normen), tælles og navngives, og tælles aldrig som bestået.
- Én række pr. profil og pr. svejsegruppe: hvor meget der udnyttes, den styrende kontrol og paragraf, og lastkombinationen, der var styrende.
- De samme tabeller i rapporten.

## Hvad der kontrolleres

Hulprofiler (RHS, SHS, CHS, rør) og I-profiler for træk, tryk, bøjning, forskydning og deres vekselvirkning; kehl- og gennemsvejsede samlinger med den elastiske vektormetode. Kompakte vægge kontrolleres kun i bøjning for hulprofiler; slanke vægge siges som ikke kontrolleret. Nogle konstanter er skrevet ud fra normerne og endnu ikke sammenlignet med en trykt kopi; rapporten lister hver kilde.

Se [Rammer af stålprofiler](topic:structural-members) for at tegne profilerne og deres skæreliste.
