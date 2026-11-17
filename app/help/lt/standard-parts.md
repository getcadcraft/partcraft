---
title: Atidarykite standartinę detalę
summary: Pradėkite detalę iš varžto, sraigto, veržlės, poveržlės, kaiščio, guolio arba pleišto, kurio dydžiai pagal standartą, o kiekvienas lentelės dydis – kaip konfigūracija.
keywords: standartinė detalė, standartinės detalės, varžtas, sraigtas, šešiakampis, veržlė, poveržlė, kaištis, įtvaras, guolis, rutulinis guolis, pleištas, lygiagretusis pleištas, tvirtinimo elementas, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, šablonas, biblioteka
from: b9e2811f
---

PartCraft atidaro dažniausias mechanines detales paruoštas: matmenys paimti iš standartų lentelių, o kiekvienas lentelės dydis yra konfigūracija, į kurią galite perjungti.

## Atidarykite vieną

1. Spustelėkite {{ui:Standartinė detalė}} Failo grupėje.
2. Lauke {{ui:Detalė}} pasirinkite rūšį, pavyzdžiui, Šešiakampės galvutės sraigtas (ISO 4017).
3. Lauke {{ui:Formatas}} pasirinkite dydį, pavyzdžiui, `M10 × 40`.
4. Spustelėkite {{ui:Atidaryti}}.

Detalė atsidaro kaip nauja, neįrašyta detalė. Įrašykite ją, kad ją išsaugotumėte ({{key:Mod+S}}).

| Detalė | Standartas | Parametrai |
|---|---|---|
| Šešiakampės galvutės sraigtas, šešiakampis varžtas | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` sriegio dydis, `s` plotis tarp plokščių, `k` galvutės aukštis, `l` ilgis |
| Šešiakampė veržlė | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Paprasta poveržlė | ISO 7089 | `d1` vidinis, `d2` išorinis, `h` storis |
| Lygiagretusis kaištis | ISO 2338 | `d`, `l` |
| Gilių griovelių rutulinis guolis | ISO 15 | `d` vidinis skersmuo, `D` išorinis, `B` plotis |
| Lygiagretusis pleištas | DIN 6885-1, A forma | `b` plotis, `h` aukštis, `l` ilgis |

## Keiskite dydį

Kiekvienas dydis yra konfigūracija (žr. [Konfigūracijos ir projektavimo lentelės](topic:design-tables)): atidarykite {{ui:Parametrai}} ir pasirinkite kitą, arba pakeiskite parametrą, pavyzdžiui, `l` ilgesniam sraigtui, ir įrašykite jį kaip savo konfigūraciją.

## Kas modeliuojama

- Sraigtai ir varžtai: šešiakampė galvutė ir paprastas kotas. Veržlės: šešiakampis su skyle, kurios dydis – sriegio nominalus dydis. Sriegiai nemodeliuojami; jei reikia, pridėkite jį su {{ui:Sriegis}} (žr. [Sriegiai](topic:threads)).
- Kaiščiai: paprastas cilindras; galų nuožulnos praleidžiamos.
- Guoliai: tik išorinis apvalkalas (žiedas pagal vidinį skersmenį, išorinis skersmuo ir plotis), to pakanka guoliui išdėstyti.
- Pleištai: pleištas su apvaliais galais.

Detalės medžiaga – plienas, todėl masės skydelyje rodomas jos svoris. Krumpliaračių dar nėra: PartCraft neturi dantų elemento, o diskas nėra krumpliaratis. CadCraft braižo krumpliaračius pagal brėžinių konvenciją, o bibliotekoje jie yra kaip brėžiniai.
