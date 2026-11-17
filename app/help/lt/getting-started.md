---
title: Pradėkite su PartCraft
summary: Ką šiuo metu daro PartCraft, ko reikia naršyklei ir pirmoji detalė per dešimt minučių – nuo eskizo iki įrašyto failo.
keywords: pradžia, pirmasis paleidimas, greitas startas, įvadas, pamoka, pirmoji detalė, plokštė, parametrinis, detalių modeliatorius
from: 7d43283f
---

PartCraft yra CadCraft šeimos parametrinė detalių ir surinkimų programa. Nubraižote 2D eskizą, susiejate jį ryšiais ir matmenimis, paverčiate kietuoju kūnu elementais, tokiais kaip ištempimas, sukimas ir skylė, o bet kurį skaičių vėliau galite pakeisti: detalė perskaičiuojama pagal savo istoriją. Tuomet detalės patenka į surinkimus, kur jungtys jas išdėsto ir leidžia patikrinti judesį.

Šios versijos galimybės:

| Darbas | Ką gausite |
|---|---|
| Eskizai | Linijos, stačiakampiai, apskritimai, lankai, taškai ir centrinės linijos su ryšiais bei matmenimis ir gyva būsena: nepilnai, visiškai ar perteklinai apibrėžta |
| Kieti elementai | Ištempimas, išpjova, sukimas, sukimo išpjova, paprastos ir įgilintos skylės, tiesiniai ir apskritiminiai masyvai, veidrodinis atspindys, suapvalinimai ir nuožulnos tiesiose briaunose tarp plokščių paviršių, bei apvalkalai ir nuolydžiai plokščiuose paviršiuose. Vedimai, lofto formos ir kiti elementai, kuriems reikia tikslaus branduolio, šioje versijoje dar neįgyvendinti: žr. [Kas dar neįgyvendinta](topic:not-built-yet) |
| Istorija | Redaguokite bet kurio elemento skaičius, slopinkite, grąžinkite atgal, keiskite tvarką ir naikinkite, su anuliavimu |
| Surinkimai | Detalės, sujungtos standžiomis, sukamosiomis ir slankiklio jungtimis, susikirtimų tikrinimas ir judesio tikrinimas |
| Brėžiniai | A3 lapas su trimis vaizdais, izometrija, pjūviu, detalės vaizdu, bendraisiais matmenimis, bazėmis, elementų valdymo rėmeliais ir paviršiaus apdailos simboliais, eksportuojamas kaip PDF |
| Failai | Savi detalių ir surinkimų failai; išvedimas į STL, 3MF, tikslųjį STEP, DXF ir PDF |

Viskas veikia jūsų naršyklėje, jūsų kompiuteryje. **Niekas neįkeliama.** Kur keliauja failai – žr. [Failai: atidarymas, įrašymas ir eksportas](topic:files).

## Ko jums reikia

- Naujausia Chrome, Edge, Firefox ar Safari naršyklė, kurioje įjungtas **WebGL** (3D grafika) ir **WebAssembly**. Abu įjungti pagal numatytuosius nustatymus. Kietojo kūno geometriją kuria WebAssembly tinklo branduolys, kuris įkeliamas kartu su programa: žr. [Tinklo branduolys](topic:solid-kernels).
- Geriausiai tinka pelė. Jutiklinė dalis taip pat veikia, o jutikliniai ekranai tinka peržiūrai ir paprastam eskizavimui: žr. [Jutiklinė dalis, lietimas ir maži ekranai](topic:trackpad-and-touch).
- Ekranas, bent 1280 taškų pločio, rodo visą įrankių juostą vienoje eilutėje. Siauresni langai slenka įrankių juostą į šoną; telefone skydeliai atsiveria kaip lapai iš apatinės juostos.

Daugiau apie naršykles: [Naršyklės ir kompiuteriai](common:browsers).

:::note
PartCraft veikia naršyklėje, o darbalaukyje – CadCraft Studio viduje. Įrašymas į debesį dar negalimas: detales atidarote iš savo kompiuterio ir įrašote atgal į jį kaip failus.
:::

## Atidarykite PartCraft

1. Atidarykite PartCraft.
2. Palaukite, kol ekrane rodoma „Įkeliamas kieto kūno branduolys…“. Pirmą kartą tai užtrunka šiek tiek laiko.
3. Matote tuščią 3D vaizdą su trimis pagrindinėmis plokštumomis, kairėje – istoriją („Part1“, tuomet Priekinė plokštuma, Viršutinė plokštuma, Dešinioji plokštuma), o vaizde – dėžutę su antrašte „Pradėti detalę“.
4. Būsenos juostos dešinėje esanti žymė rodo „Tinklo branduolys“: šioje versijoje PartCraft kiekvieną detalę kuria su tinklo branduoliu, todėl apvalūs paviršiai yra plokšti fasetai. Galite iš karto pradėti modeliuoti.

Jei vaizde rašoma, kad naršyklė negali rodyti 3D, arba branduolys neįkeltas, žr. [Trikčių šalinimas](topic:troubleshooting#the-app-does-not-start).

## Pirmoji detalė: plokštė su skyle

Sukursite 60 × 40 mm plokštę, 10 mm storio, su 6 mm skyle per ją. Vienetai – milimetrai.

### Nubraižykite kontūrą

1. Kairėje istorijoje spustelėkite **Priekinė plokštuma**. Plokštuma vaizde paryškinama.
2. Įrankių juostoje pasirinkite {{ui:Eskizas}} arba spauskite {{key:S}}. Vaizdas pasisuka tiesiai į plokštumą, o aktyvus yra linijos įrankis.
3. Spauskite {{key:R}}, kad pasirinktumėte stačiakampio įrankį.
4. Perkelkite žymeklį ant pradžios taško (mažas raudonas apskritimas su kryžiumi). Mažas kvadratas parodo, kad jis prisitraukia. Spustelėkite.
5. Perkelkite aukštyn ir dešinėn bei spustelėkite dar kartą. Turite stačiakampį. Jo linijos mėlynos: mėlyna reiškia, kad jos dar gali judėti.

### Nustatykite dydžius

1. Spauskite {{key:D}}, kad pasirinktumėte matmenų įrankį.
2. Spustelėkite viršutinę liniją, tuomet šiek tiek virš jos. Atsidaro skaičių langelis su dabartiniu ilgiu.
3. Įveskite `60` ir spauskite {{key:Enter}}. Stačiakampis pakeičia plotį į 60 mm.
4. Spustelėkite kairiąją liniją, tuomet šiek tiek kairėje nuo jos. Įveskite `40` ir spauskite {{key:Enter}}.

Žymė viršutiniame kairiajame vaizdo kampe dabar rodo **Visiškai apibrėžta**, o linijos tampa tušinukinės (juodos Paper teme, šviesios Model teme). Kiekvienas taškas ir dydis fiksuotas.

:::tip
Jei stačiakampį pradėjote ne nuo pradžios taško, žymė vis dar rodo „Nepilnai apibrėžta · 2 laisvės laipsniai“. Spauskite {{key:S}} pasirinkimui, spustelėkite vieną kampą, {{key:Shift}}+spustelėkite pradžios tašką, tuomet dešiniame skydelyje pasirinkite {{ui:• Sutapimas}}.
:::

### Ištempkite

1. Įrankių juostoje pasirinkite {{ui:Baigti}} arba spauskite {{key:Esc}}, kol eskizas užsidarys (paprastai du kartus).
2. Pasirinkite {{ui:Ištempti}}. Atsiranda 10 mm kietasis kūnas. Istorijoje pridedamas „Extrude1“, o po juo įtrauktas „Sketch1“.
3. Dešiniame skydelyje rodomi ištempimo nustatymai. Norėdami pakeisti storį, įveskite naują skaičių lauke **Gylis (mm)** ir spauskite {{key:Enter}} arba {{key:Tab}}. Detalė iš karto perskaičiuojama.

### Įdėkite skylę

1. Spustelėkite didelį plokščią paviršių plokštės priekyje (ištempimo galą). Visas paviršius paryškinamas, o dešiniame skydelyje rašoma **Paviršius**.
2. Dešiniame skydelyje pasirinkite {{ui:Eskizas ant šio paviršiaus}}.
3. Spauskite {{key:P}}, kad pasirinktumėte taško įrankį, ir spustelėkite arti paviršiaus vidurio.
4. Pasirinkite {{ui:Baigti}}.
5. Pasirinkite {{ui:Skylė}}. Per plokštę praeina 6 mm skylė. Jei norite, pakeiskite **Skersmuo (mm)** dešiniame skydelyje.

Apatiniame kairiajame kampe esantis langelis **Detalė** dabar rodo tūrį, paviršiaus plotą, dydį (60 × 40 × 10 mm) ir „Praėjimo skylės: 1“.

### Įrašykite

1. Spauskite {{key:Mod+S}} arba pasirinkite {{ui:Įrašyti}}.
2. Naršyklė atsisiunčia `Part1.partcraft.json` į atsisiuntimų aplanką. Faile yra visa istorija: atidarykite jį iš naujo su {{ui:Atidaryti}}, kad tęstumėte redagavimą.

Norėdami pirma pervardyti detalę, spustelėkite tuščią vietą vaizde, kad nieko nebūtų pasirinkta, ir dešiniame skydelyje įveskite naują **Pavadinimą**.

## Kur eiti toliau

- [Nubraižykite pirmąjį eskizą](topic:sketch-basics) ir [Visiškai apibrėžkite eskizą](topic:relations-dimensions) tiksliai paaiškina eskizavimo įrankį.
- [Keiskite detalę per jos istoriją](topic:edit-history) rodo, kaip redaguoti tai, ką sukūrėte.
- [Suapvalinkite, nuožulninkite ir išdrožkite](topic:fillet-chamfer-shell) bei [Sukurkite brėžinį](topic:drawing-pdf) užbaigia detalę. [Kas dar neįgyvendinta](topic:not-built-yet) išvardija, ko ši versija nedaro, pavyzdžiui, vedimų ir lofto formų.
- [Ateinate iš kito parametrinio modeliavimo įrankio](topic:coming-from) išvardija įpročius, kurie čia veikia kitaip.
- [Klavišai ir pelė](topic:keyboard) – pilnas spartiesiems klavišams sąrašas.
- [Kaip naudotis šia pagalba](common:help).
