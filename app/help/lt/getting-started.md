---
title: Pradėkite darbą su PartCraft
summary: Ką šiuo metu daro PartCraft, ko reikia naršyklei ir pirmoji detalė per dešimt minučių – nuo eskizo iki įrašyto failo.
keywords: pradžia, pirmas paleidimas, greitas startas, įvadas, pamoka, pirmoji detalė, plokštė, parametrinis, detalių modeliavimas
from: 5f0a668d
---

PartCraft – tai CadCraft šeimos parametrinė detalių ir surinkimų programa. Nubrėžiate 2D eskizą, jį apribojate ryšiais ir matmenimis, paverčiate kietuoju kūnu naudodami elementus, pavyzdžiui, ištempimą, sukimą ir skylę, o bet kurį skaičių vėliau galite pakeisti: detalė perskaičiuojama pagal savo istoriją. Tada detalės dedamos į surinkimus, kur jungtys jas išdėsto ir leidžia patikrinti judėjimą.

Ką daro ši versija:

| Darbas | Ką gaunate |
|---|---|
| Eskizai | Linijos, stačiakampiai, apskritimai, lankai, taškai ir ašinės linijos su ryšiais ir matmenimis bei tiesioginė būsena: nepilnai, visiškai arba perteklinai apibrėžta |
| Kietojo kūno elementai | Ištempimas, iškirpimas, sukimas, sukimo iškirpimas, paprastos ir įleistinės skylės, tiesiniai ir apskritiminiai kartojimai, veidrodis, suapvalinimai ir nuožulninimai tiesiose briaunose tarp plokščių paviršių, bei išdrožimai ir nuolydžiai plokščiuose paviršiuose. Kreivinis ištempimas, kontūrų jungimas ir kiti elementai, kuriems reikia tikslaus branduolio, šioje versijoje dar nepadaryti: žr. [Kas dar nepadaryta](topic:not-built-yet) |
| Istorija | Redaguoti bet kurio elemento skaičius, blokuoti, grąžinti, perrikiuoti ir naikinti, su anuliavimu |
| Surinkimai | Detalės, sujungtos standžiomis, sukamosiomis ir slankiklio jungtimis, susikirtimų tikrinimas ir judesio tikrinimas |
| Brėžiniai | A3 lapas su trimis vaizdais, izometrija, pjūviu, detalės vaizdu, bendraisiais matmenimis, bazėmis, GD&T rėmeliais ir paviršiaus šiurkštumo simboliais, eksportuojamas kaip PDF |
| Failai | Savi detalių ir surinkimų failai; išvedami STL, 3MF, facetuotas STEP, DXF ir PDF |

Viskas veikia jūsų naršyklėje, jūsų kompiuteryje. **Niekas neįkeliama.** Kur keliauja failai, žr. [Failai: atidarymas, įrašymas ir eksportavimas](topic:files).

## Ko jums reikia

- Naujausia Chrome, Edge, Firefox ar Safari naršyklė, kurioje įjungti **WebGL** (3D grafika) ir **WebAssembly**. Abu įjungti pagal numatytuosius nustatymus. Kietojo kūno geometriją sudaro WebAssembly tinklo branduolys, įkeliamas kartu su programa: žr. [Tinklo branduolys](topic:solid-kernels).
- Patogiausia pelė. Veikia jutiklinė dalis, o jutikliniai ekranai tinka vaizdui peržiūrėti ir paprastiems eskizams: žr. [Jutiklinė dalis, lietimas ir maži ekranai](topic:trackpad-and-touch).
- Ekranas, bent 1280 taškų pločio, visą įrankių juostą rodo vienoje eilėje. Siauresni langai įrankių juostą slenka į šonus; telefone skydeliai atsidaro kaip lapai iš juostos apačioje.

Daugiau apie naršykles: [Naršyklės ir kompiuteriai](common:browsers).

:::note
PartCraft veikia naršyklėje ir darbalaukyje CadCraft Studio viduje. Įrašymas debesyje dar nepasiekiamas: detales atidarote iš kompiuterio ir įrašote atgal į jį kaip failus.
:::

## Atidarykite PartCraft

1. Atidarykite PartCraft.
2. Palaukite, kol ekrane bus rodoma „Kraunamas kietojo kūno branduolys…“. Pirmą kartą tai užtrunka šiek tiek.
3. Matote tuščią 3D vaizdą su trimis bazinėmis plokštumomis, istoriją kairėje („Part1“, tada Priekinė plokštuma, Viršutinė plokštuma, Dešinioji plokštuma) ir vaizde langelį su antrašte „Pradėti detalę“.
4. Žymė būsenos juostos dešiniajame gale rodo „Tinklo branduolys“: šioje versijoje PartCraft visas detales kuria tinklo branduoliu, todėl apvalūs paviršiai – plokšti facetai. Galite iš karto pradėti modeliuoti.

Jei vaizde rašoma, kad naršyklė negali rodyti 3D, arba branduolys neįsikėlė, žr. [Trikčių šalinimas](topic:troubleshooting#the-app-does-not-start).

## Pirmoji detalė: plokštė su skyle

Sukursite 60 × 40 mm plokštę, 10 mm storio, su 6 mm skyle per ją. Vienetai – milimetrai.

### Nubrėžkite kontūrą

1. Kairėje istorijoje spustelėkite **Priekinė plokštuma**. Plokštuma vaizde paryškinama.
2. Įrankių juostoje pasirinkite {{ui:Eskizas}} arba paspauskite {{key:S}}. Vaizdas pasisuka tiesiai į plokštumą, o aktyvus yra linijos įrankis.
3. Paspauskite {{key:R}}, kad pasirinktumėte stačiakampio įrankį.
4. Perkelkite žymeklį ant pradžios taško (mažas raudonas apskritimas su kryžiumi). Mažas kvadratėlis parodo, kad taškas prisitraukia. Spustelėkite.
5. Perkelkite aukštyn ir dešinėn ir vėl spustelėkite. Turite stačiakampį. Jo linijos mėlynos: mėlyna reiškia, kad jas dar galima perkelti.

### Nustatykite matmenis

1. Paspauskite {{key:D}}, kad pasirinktumėte matmenų įrankį.
2. Spustelėkite viršutinę liniją, tada šiek tiek virš jos. Atsidaro skaičiaus langelis su dabartiniu ilgiu.
3. Įveskite `60` ir paspauskite {{key:Enter}}. Stačiakampis tampa 60 mm pločio.
4. Spustelėkite kairiąją liniją, tada šiek tiek kairiau nuo jos. Įveskite `40` ir paspauskite {{key:Enter}}.

Žymė vaizdo viršutiniame kairiajame kampe dabar rodo **Visiškai apibrėžta**, o linijos tampa tušinės (juodos „Paper“ temoje, šviesios „Model“ temoje). Kiekvienas taškas ir matmuo fiksuoti.

:::tip
Jei stačiakampį pradėjote ne nuo pradžios taško, žymė vis tiek rodo „Nepilnai apibrėžta · 2 laisvės laipsniai“. Paspauskite {{key:S}}, kad įjungtumėte pasirinkimo įrankį, spustelėkite vieną kampą, {{key:Shift}}+spustelėkite pradžios tašką, tada dešiniajame skydelyje pasirinkite {{ui:• Sutapimas}}.
:::

### Ištempkite

1. Įrankių juostoje pasirinkite {{ui:Baigti}} arba spauskite {{key:Esc}}, kol eskizas užsidarys (paprastai du kartus).
2. Pasirinkite {{ui:Ištempti}}. Atsiranda 10 mm kietasis kūnas. Istorijoje pridedamas „Extrude1“, o po juo įtrauktas „Sketch1“.
3. Dešiniajame skydelyje rodomi ištempimo parametrai. Norėdami pakeisti storį, įveskite naują skaičių lauke **Gylis (mm)** ir paspauskite {{key:Enter}} arba {{key:Tab}}. Detalė iš karto perskaičiuojama.

### Pridėkite skylę

1. Spustelėkite didelį plokščią plokštės priekinį paviršių (ištempimo galą). Visas paviršius paryškinamas, o dešiniajame skydelyje rodoma **Paviršius**.
2. Dešiniajame skydelyje pasirinkite {{ui:Eskizas ant šio paviršiaus}}.
3. Paspauskite {{key:P}}, kad pasirinktumėte taško įrankį, ir spustelėkite netoli paviršiaus vidurio.
4. Pasirinkite {{ui:Baigti}}.
5. Pasirinkite {{ui:Skylė}}. Per plokštę praeina 6 mm skylė. Jei norite, dešiniajame skydelyje pakeiskite **Skersmuo (mm)**.

Apatiniame kairiajame kampe esantis langelis **Detalė** dabar rodo tūrį, paviršiaus plotą, dydį (60 × 40 × 10 mm) ir „Skylės per: 1“.

### Įrašykite

1. Paspauskite {{key:Mod+S}} arba pasirinkite {{ui:Įrašyti}}.
2. Naršyklė atsisiunčia `Part1.partcraft.json` į savo atsisiuntimų aplanką. Failas talpina visą istoriją: norėdami toliau redaguoti, atidarykite jį iš naujo su {{ui:Atidaryti}}.

Norėdami pirma pervardyti detalę, spustelėkite tuščią vietą vaizde, kad nieko nebūtų pasirinkta, ir dešiniajame skydelyje įveskite naują **Pavadinimą**.

## Kur eiti toliau

- [Nubrėžkite pirmąjį eskizą](topic:sketch-basics) ir [Visiškai apibrėžkite eskizą](topic:relations-dimensions) išsamiai paaiškina eskizų įrankį.
- [Keiskite detalę per jos istoriją](topic:edit-history) rodo, kaip redaguoti tai, ką sukūrėte.
- [Suapvalinimas, nuožulninimas ir išdrožimas](topic:fillet-chamfer-shell) bei [Brėžinio sudarymas](topic:drawing-pdf) užbaigia detalę. [Kas dar nepadaryta](topic:not-built-yet) išvardija, ko ši versija nedaro, pavyzdžiui, kreivinį ištempimą ir kontūrų jungimą.
- [Atėjus iš kito parametrinio modeliavimo įrankio](topic:coming-from) išvardyti įpročiai, kurie čia veikia kitaip.
- [Klavišai ir pelė](topic:keyboard) – visas sparčiųjų klavišų sąrašas.
- [Kaip naudotis žinynu](common:help).
