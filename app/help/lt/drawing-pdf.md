---
title: Nubraižyti brėžinį su vaizdais, pjūviu ir GD&T
summary: Atverkite brėžinio lapą, pridėkite pjūvį ir detalės vaizdą, įdėkite bazes, GD&T rėmelius ir paviršiaus apdorojimo žymas, pasirinkite lapo dydį, užpildykite antraštės bloką ir revizijas bei eksportuokite lapą kaip PDF.
keywords: skylių lentelė, skylių sąrašas, skylių padėtys, žymos, brėžinys, 2D brėžinys, lapas, lapo dydis, a4, a3, a2, a1, a0, ansi, antraštės blokas, revizija, revizijos blokas, brėžinio numeris, medžiaga, pdf, vaizdai, ortografinis, trečiasis kampas, izometrinis, pjūvio vaizdas, detalės vaizdas, gd&t, bazė, valdymo rėmelis, tolerancija, padėtis, plokštumas, paviršiaus apdorojimas, šiurkštumas, spausdinimas
from: 39e944c0
---

PartCraft sukuria detalės brėžinio lapą: priekinį, viršutinį ir dešinįjį vaizdus trečiojo kampo projekcijoje, izometrinį vaizdą, bendrus matmenis ir antraštės bloką ant lapo nuo A4 iki A0 arba nuo ANSI A iki E. Be to, galite pridėti pjūvį, detalės vaizdą ir GD&T simbolius. Lapas atsinaujina pasikeitus detalei, o jo nustatymai įrašomi detalės faile.

## Atverti brėžinio lapą

1. Pastatykite detalę. (Jei nieko nepastatyta: „Pirmiausia sukurkite kietąjį kūną, tada jo brėžinį.“)
2. Įrankių juostoje pasirinkite {{ui:Drawing}}.

3D vaizdas pakeičiamas lapu. Įrankių juostoje rodomi {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} ir {{ui:Back}}, o dešinysis skydelis vadinasi **Brėžinys**. Statusinėje juostoje rašoma, kaip sudaryti vaizdai: „Brėžinys (kreivės nubrėžtos kaip facetos). Bazė, Rėmelis ir Apdaila deda GD&T ant vaizdo; skydelis nustato pjūvį ir detalės vaizdą.“ Vaizdai sudaromi iš tinklelio branduolio facetų, todėl apvalūs kraštai yra trumpos tiesios atkarpos; tikri lankai reikalauja tikslaus branduolio, kurio šioje versijoje nėra.

Judėkite lapu: sukite ratuką priartinimui, vilkite dešiniuoju arba vidurio mygtuku, kad slinktumėte. Paspauskite {{key:F}}, kad lapas tilptų. Kai lapas aktyvus, {{key:Plus}} ir {{key:Minus}} keičia mastelį, o {{key:Shift}} su rodyklių klavišais slenka.

Pasirinkite {{ui:Back}}, {{ui:Back to the model}} arba paspauskite {{key:Esc}} (kai nieko nepažymėta ir neaktyvus joks įrankis), kad grįžtumėte į 3D modelį.

## Ką turi lapas

- **Pasirinktas lapas**, gulsčias (A3, jei nepasirinksite kito), su rėmeliu ir **antraštės bloku**: pavadinimas, įmonė, brėžinio numeris, revizija, medžiaga, nubrėžė / patikrino / patvirtino, data, mastelis, lapo dydis, „Units: millimetres · Third-angle projection“ (Vienetai: milimetrai · Trečiojo kampo projekcija) ir ar vaizdai tikslūs, ar sudaryti iš facetų.
- **Revizijų blokas** viršutiniame dešiniajame kampe, kai pridedate reviziją.
- **Priekinis, viršutinis ir dešinysis vaizdai**: viršutinis vaizdas virš priekinio, dešinysis – dešinėje. Paslėpti kraštai brėžiami punktyrais.
- **Izometrinis vaizdas**, kai yra vietos.
- **Bendri matmenys**: plotis ir aukštis priekiniame vaizde, gylis viršutiniame vaizde.
- Vienas **mastelis** pagrindiniams vaizdams iš ISO eilės (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), parenkamas taip, kad tilptų.

## Pasirinkite lapo dydį

Brėžinio lape, kai nieko nepažymėta, dešiniajame skydelyje pasirinkite {{ui:Sheet}}: **A4, A3, A2, A1, A0** (ISO 216) arba **ANSI A, B, C, D, E** (nuo 11 × 8.5 iki 44 × 34 colių). Vaizdai išdėstomi iš naujo didžiausiu tinkamu ISO mastelių, todėl didesnis lapas gali parodyti detalę didesnę.

## Užpildykite antraštės bloką

Dešiniojo skydelio **Title block** laukai tiesiogiai patenka į lapą: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (metai-mėnuo-diena), {{ui:General tolerance}} ir {{ui:Finish}} (pastarieji du spausdinami tiesiai virš antraštės bloko). Įrašykite langelyje ir paspauskite {{key:Enter}} arba spustelėkite šalia. Tuščias langelis palieka savo katakę tuščią, išskyrus:

- **Title** rodo detalės pavadinimą, kol įrašysite savo.
- **Date** rodo šiandieninę datą, kol įrašysite savo.
- **Revision** rodo naujausią revizijų sąrašo revizją, kol įrašysite savo.

**Material** imamas iš detalės: spustelėkite tuščią modelio vietą, tada Detalės skydelyje pasirinkite {{ui:Material}}. Ta pati medžiaga suteikia Measure masės savybėms tankį.

## Pridėkite revizijas

Skyriuje **Revizijos** spustelėkite {{ui:Add revision}}. Kiekviena nauja eilutė gauna kitą raidę (A, B, C …, po Z eina AA) ir šiandieninę datą. Įrašykite, kas pakeista ir kas pakeitė. {{ui:Delete}} pašalina eilutę. Revizijų blokas viršutiniame dešiniajame lapo kampe išvardija jas, seniausias pirmas, iki 20.

Lapo dydis, antraštės blokas, revizijos ir medžiaga įrašomi detalės faile, o kiekvienas pakeitimas yra vienas {{ui:Undo}} žingsnis.

## Pridėkite pjūvio vaizdą

Detalė pjaunama plokštuma, o pjūvis užbrūkšniuojamas. Kaip ir kiti vaizdai, pjūvis braižomas iš facetų, todėl apvalūs kraštai yra trumpos tiesios atkarpos.

1. Dešiniajame skydelyje nustatykite **Section A-A** į **Nuo priekinio vaizdo**, **Nuo viršutinio vaizdo** arba **Nuo dešiniojo vaizdo**.
2. Pjūvis atsiranda lape, užbrūkšniuotas ten, kur pjūvis eina per medžiagą, su pjovimo linija ir jos „A“ rodyklėmis ant vaizdo, iš kurio jis paimtas.
3. Nustatykite **Cut at (mm)**, kad perkeltumėte pjovimo plokštumą. Ji prasideda per detalės vidurį.

Nustatykite **Section A-A** atgal į **None**, kad pašalintumėte pjūvį.

## Pridėkite detalės vaizdą

1. Nustatykite **Detail B** į vaizdą, kurį norite padidinti (arba įrankių juostoje pasirinkite {{ui:Detail}}).
2. Spustelėkite padidinamos srities centrą tame vaizde. Apskritimas, pažymėtas „B“, ją žymi, o padidintas **Detail B** atsiranda lape su savo mastelių, pavyzdžiui, „Detail B (2:1)“.
3. Nustatykite **Detail radius (mm)** apskritimo dydžiui ir **Detail scale** padidinimui: 2, 4, 5 arba 10 × lapo.

Detalę galima paimti iš priekinio, viršutinio, dešiniojo arba pjūvio vaizdo, bet ne iš izometrinio. Jei nėra vietos visiems vaizdams, skydelyje rašoma: „No room on the sheet for: detail. Make the detail smaller or drop a view.“ (Lape nėra vietos: detalė. Padarykite detalę mažesnę arba atsisakykite vaizdo.)

## Pridėkite skylių lentelę

Skylių lentelė išvardija detalės skyles su jų padėtimis, gręžimui ar CNC: skydelyje pasirinkite **Hole table** › **Of the top view** (arba priekinį, dešinįjį).

- Kiekviena skylė, matoma tame vaizde iš galo, gauna žymą šalia: **A1**, **A2** … pirmam dydžiui, **B1** … kitam.
- Lentelėje išvardijama kiekviena žyma, jos **X** ir **Y** milimetrais, ir jos dydis: „Ø14 THRU“, „Ø6.6 × 10 DEEP“, įleista ar įgilinta skylė, arba sriegtos skylės sriegio žymėjimas.
- X ir Y matuojami nuo apatinio kairiojo vaizdo kontūro kampo, pažymėto lape **X0 Y0**.
- Įtrauktos ir šablonų padarytos skylės. Skylės, nestatmenos vaizdui, suskaičiuojamos skydelyje ir nepatenka į lentelę.

Lentelė įdedama į laisvą lapo vietą ir į PDF.

## Įdėkite GD&T ir paviršiaus apdorojimo simbolius

1. Pasirinkite {{ui:Datum}}, {{ui:Frame}} (savybių valdymo rėmelis) arba {{ui:Finish}} (paviršiaus apdorojimo simbolis).
2. Spustelėkite vaizdo tašką, kuriame jis prisitvirtina. Jis prisitraukia prie artimiausios nubrėžtos linijos per 2.5 mm.
3. Simbolis atsiranda su rodykle, pažymėtas, o dešinysis skydelis rodo jo nustatymus.

Vilkite simbolį, kad perkeltumėte; rodyklė lieka ant taško. Kai simbolis pažymėtas, rodyklių klavišai pastumia jį 1 mm. {{key:Delete}} arba {{key:Backspace}} (arba {{ui:Delete}} skydelyje) jį pašalina; {{ui:Done}} arba {{key:Esc}} panaikina pažymėjimą. Kiekvienas pakeitimas yra anuliavimo sąraše.

### Bazė

**Raidė**: nuo A iki Z, be I, O ir Q (jos atrodo kaip 1, 0 ir O). Kiekviena nauja bazė gauna kitą laisvą raidę.

### Savybių valdymo rėmelis

| Nustatymas | Pasirinkimai |
|---|---|
| **Tolerancija** | Tiesumas, Plokštumas, Apskritumas, Cilindriškumas, Linijos profilis, Paviršiaus profilis, Statmenumas, Kampiškumas, Lygiagretumas, Padėtis, Koncentriškumas ir Simetriškumas (abu pašalinti Y14.5-2018, ir tai pažymėta), Apskritiminis bėgimas, Bendras bėgimas |
| **Zona (mm)** | Tolerancijos reikšmė, numatytoji 0.1 |
| **Skersmens zona (⌀)** | Charakteristikoms su cilindrine zona; pagal numatymą įjungta Padėčiai |
| **Medžiaga** | RFS (nėra), MMC (Ⓜ), LMC (Ⓛ), kai charakteristika tai leidžia |
| **Pirmoji / Antroji / Trečioji bazė** | Iki trijų bazių raidžių, kiekviena su **… modifikatoriumi** (MMB, LMB), kur leidžiama |

PartCraft tikrina rėmelį pagal ASME Y14.5 taisykles ir skydelio viršuje nurodo, kas netinkama, pavyzdžiui: „Plokštumas – tai formos tolerancija: bazių nuorodų ji neturi.“ arba „Padėčiai reikia bent vienos bazės nuorodos.“ Eilutėje **Skaitoma** išrašoma rėmelio prasmė.

### Paviršiaus apdorojimas

| Nustatymas | Pasirinkimai | Numatytoji |
|---|---|---|
| **Ra (µm)** | Vidutinis šiurkštumas | 1.6 |
| **Procesas** | bet koks procesas, apdirbta, medžiaga nepašalinama | apdirbta |
| **Pastaba** | Iki 40 simbolių, pavyzdžiui, krypties žymė ar procesas | |

Kai nieko nepažymėta, skydelyje išvardijamos **Pastabos lape**, kiekviena su **Pasirinkti**.

## Eksportuokite PDF

Pasirinkite {{ui:PDF}} įrankių juostoje, {{ui:Export PDF}} skydelyje arba {{ui:Export}}, tada {{ui:Drawing (PDF): views, section, detail, GD&T}} iš modelio. PDF atsisiunčiamas kaip `<part name> - drawing.pdf`, o statusinėje juostoje išvardijama, kas yra PDF.

Spausdinkite su „Tikras dydis“ ant lapo, kurio dydis atitinka brėžinio lapą, kad mastelis išliktų tikras.

## Apribojimai

| Dar neįgyvendinta | Ką daryti šiandien |
|---|---|
| Matmenys, kitokie nei trys bendri matmenys | Įdėkite juos į PDF su žymėjimo programa arba eksportuokite eskizą ar paviršių kaip DXF ir pažymėkite 2D CAD programoje |
| Daugiau nei vienas pjūvis ar detalė; lūžio, papildomi ir projekciniai vaizdai | Neprieinama |
| Pirmojo kampo projekcija, perkeliami vaizdai, stačio formato lapai | Trečiasis kampas, automatinis išdėstymas, gulsčias |
| Laisvo teksto pastabos ir lentelės lape (be antraštės ir revizijų blokų) | Naudokite paviršiaus apdorojimo pastabą arba pridėkite tekstą PDF |
| Surinkimų brėžiniai | Neprieinama |

Simboliai už Vakarų Europos rinkinio ribų spausdinami kaip „?“ (PDF naudoja skaitytuvo įmontuotą Helvetica šriftą). GD&T simboliai nubrėžti linijomis, todėl spausdinami bet kuriame skaitytuve.

## Leiskite lapui tai padaryti

- **Lapas › Automatinis** parenka popierių jums: didžiausią standartinį mastelį iki 1:1, ant mažiausio A dydžio lapo, kuris telpa vaizdus tame mastelyje (sąraše rodoma, kurį jis pasirinko).
- **Pažymėti skyles** pažymi skyles vaizde, kuriame matoma daugiausia jų iš galo: centro žymė kiekvienai, vienas žymėjimas kiekvienam dydžiui („2× Ø6 THRU“ su rodykle), o jų padėtys matuojamos nuo vaizdo apatinio kairiojo kampo. Bendras plotis, aukštis ir gylis visada yra.
