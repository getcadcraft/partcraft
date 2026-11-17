---
title: Eksportas spausdinimui, STEP ir DXF
summary: Eksportuokite detalę kaip STL arba 3MF spausdinimui 3D, kaip tikslų STEP kietąjį kūną kitoms CAD ir CAM programoms, o eskizą ar plokščią paviršių – kaip DXF lazeriniam ir vandens srovės pjovimui.
keywords: eksportas, įrašyti kaip, ifc, bim, savybių rinkiniai, stl, 3mf, 3d spausdinimas, pjaustyklė, step, stp, tikslus step, b-rep, ap242, ap214, cam, mechaninis cechas, frezavimas, dxf, lazeris, vandens srovė, cnc, plokščias raštas, profilis, tinklas, facetai
from: e1de71d5
---

Eksportai yra kopijos kitais formatais. Taip pat išsaugokite `.partcraft.json` failą: tai vienintelis failas, kurį PartCraft gali vėl atidaryti ir redaguoti.

Visi eksportai veikia su detale, rodoma ekrane, milimetrais. Surinkime STL, 3MF, STEP ir Brėžinys (PDF) eksportuoja visą surinkimą: žr. [Detalių sąrašas, suskleisti vaizdai ir judančios dalys](topic:assembly-bom-explode). Jei kietojo kūno dar nėra: „Kietojo kūno eksportuoti dar nėra.“

## Spausdinimui 3D: STL arba 3MF

1. Neprivaloma: lygiems apvaliems paviršiams spustelėkite tuščią sritį, kad nieko nebūtų pasirinkta, ir dešiniajame skydelyje nustatykite **Kreivės** į **Smulkus (128 per apsisukimą)** arba **Labai smulkus (256 per apsisukimą)**. STL ir 3MF visada sudaryti iš trikampių.
2. Pasirinkite {{ui:Eksportuoti}}, tada {{ui:STL, spausdinimui 3D}} arba {{ui:3MF, spausdinimui 3D}}.
3. Failas atsisiunčiamas. Būsenos juostoje rašoma, pavyzdžiui: „Eksportuotas Part1.stl (dvejetainis, mm, Z aukštyn, 1536 trikampiai).“

Abu formatai yra **Z aukštyn**, nes spausdintuvai ir pjaustyklės to tikisi. PartCraft pasaulis yra Y aukštyn, todėl eksportas pasuka detalę: tai, kas PartCraft rodo aukštyn (statmena Viršutinei plokštumai), pjaustyklėje rodoma aukštyn, o detalė, nubrėžta Viršutinėje plokštumoje, guli plokščiai ant stalo. Prireikus galutinę orientaciją nustatykite pjaustyklėje.

3MF yra naujesnis, mažesnis formatas, kurį pjaustyklės skaito kartu su matavimo vienetais. Jei programa nepriima 3MF, naudokite STL.

Norėdami pirmiausia patikrinti, ar detalė uždara, telpa į spausdintuvo stalą ir stovi ant plokščio paviršiaus, naudokite {{ui:Eksportuoti}} › {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}: žr. [Paruoškite detalę 3D spausdinimui](topic:print-3d).

## Kitoms CAD programoms: STEP

Pasirinkite {{ui:Eksportuoti}}, tada {{ui:STEP AP242 (tikslus kietasis kūnas)}}. Ji įrašo detalę kaip vieną tikslų kietąjį kūną milimetrais, pasuktą Z aukštyn. Apvalūs paviršiai įrašomi kaip tikri cilindrai, kūgiai, sferos ir toroidai, o jų briaunos – kaip tikri apskritimai, kad kita programa skylę galėtų pasirinkti kaip skylę. Kūnas, atidarytas iš STEP failo, išlaiko to failo plokščius paviršius, cilindrus, kūgius, sferas ir toroidus, todėl jie taip pat išeina tikslūs. Paviršiai be tokio paviršiaus (splaino šonas, modeliuotas sriegis, kūnas iš STL, OBJ ar 3MF tinklo, STEP failo splaino paviršius, perstumti ir sukti paviršiai) lieka plokščiomis facetomis tame pačiame kietajame kūne, o būsenos juostoje nurodoma, kiek jų. Būsenos juostoje rašoma, pavyzdžiui: „Eksportuotas Flange.step (AP242, tikslus kietasis kūnas, mm, Z aukštyn): 14 paviršių su tikrais paviršiais (10 cilindrinių, 1 kūginis, 0 sferinių, 0 toroidinių), 0 briaunų kreivių pritaikyta.“ Jame yra tik kietasis kūnas: be istorijos, be eskizų, be brėžinio. Jei kita programa skaito tik AP214, pasirinkite {{ui:STEP AP214 (tikslus kietasis kūnas)}}: tas pats kietasis kūnas senesnėje schemoje.

Kas tikslu ir kas ne:

- Plokšti paviršiai, cilindrai (skylės, iškilimai, suapvalinimai ties tiesiomis briaunomis), kūgiai (įleidimai, nuolydžiai), sferos ir toroidai yra tikri, taip pat ir jų tiesios, apskritiminės ir elipsinės briaunos. **Kreivės** nustatymas jų nekeičia.
- Ten, kur susikerta du apvalūs paviršiai (skylė, išgręžta per veleną), briauna yra sklandi kreivė, pritaikyta abiem paviršiams iki 0.00001 mm; „briaunų kreivės pritaikyta“ jas suskaičiuoja.
- Uždara ertmė detalės viduje įrašoma kaip kietojo kūno tuštuma. Keli atskiri kūnai įrašomi kaip keli kietieji kūnai.
- Surinkimas kaip tikslus STEP dar neįrašomas: eksportuokite kiekvieną detalę.

Patikrinta perskaitant failus OpenCascade, kuris praneša apie galiojančius kietuosius kūnus su rankiniu būdu apskaičiuotais tūriais. Jis dar nebuvo atidarytas visose CAD ar CAM programose; jei kuri nors failą atmeta, {{ui:STEP (paviršiais, tinklo branduolys)}} įrašo tą pačią formą kaip plokščius paviršius (PartCraft savo ašyse, Y aukštyn). Tada prašome pranešti per {{ui:Žinynas}} › {{ui:Pranešti apie problemą}}.

Mechaniniam apdirbimui darbo sritis Gamyba taip pat įrašo tikslų kietąjį kūną paruošimo darbo koordinatėse: žr. [Sukurkite įrankių trajektorijas ir G-kodą](topic:manufacture#exact-step-for-the-shop).

## Kitoms BIM programoms: IFC su visomis savybėmis

Pasirinkite {{ui:Eksportuoti}}, tada {{ui:IFC 4 (su visomis savybėmis)}}. Ji įrašo detalę kaip IFC 4 elementą pastatų ir įrenginių modeliams: jos forma – kaip trikampiai (Z aukštyn, milimetrais), o tai, ką PartCraft apie ją žino, – kaip savybių rinkiniai:

| Savybių rinkinys | Apima |
|---|---|
| **PartCraft_Part** | Pavadinimą, medžiagą ir jos tankį, aktyvią konfigūraciją, kiek kūnų; surinkime – dar detalės numerį ir aprašymą |
| **PartCraft_Parameters** | Visus detalės parametrus su jų reikšmėmis; formulės išraiška ir pastaba yra savybės aprašyme |
| **PartCraft_TitleBlock** | Jūsų užpildytus brėžinio antraštės laukus (pavadinimas, brėžinio numeris, revizija, įmonė, nubrėžė, patikrino ir patvirtino, data, apdaila, bendroji tolerancija) ir lapo dydį |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Tūrį, paviršiaus plotą, masę (su medžiaga) ir bendrą dydį |

Medžiaga pridedama kaip IFC medžiaga, o brėžinio numeris yra elemento žymė. Surinkime kiekviena detalė įrašoma vieną kartą kaip tipas, turintis savo savybes, o kiekviena kopija įdedama ten, kur ją padeda surinkimas, su savo reikšmėmis **PartCraft_Instance**: pavadinimu, pozicijos numeriu komplektacijos sąraše ir tuo, ar tai įtvirtinta detalė.

## Lazeriui, vandens srovei ar CNC profiliams: DXF

Yra du DXF tipai, abu R12 versijos, kuriuos atidaro kiekviena CAD ir CAM programa:

### Eskizas

1. Pasirinkite eskizą istorijoje (arba jį atidarykite).
2. Pasirinkite {{ui:Eksportuoti}}, tada {{ui:DXF eskizo arba plokščio paviršiaus}}. (Eskizo dešiniajame skydelyje taip pat yra {{ui:Eksportuoti kaip DXF}}.)

Gausite `<part> - <sketch>.dxf` eskizo koordinatėmis: linijos, tikri lankai ir apskritimai sluoksnyje **PROFILE**, konstrukcinė geometrija – sluoksnyje **CONSTRUCTION**, laisvi taškai – sluoksnyje **POINTS**.

### Plokščias kietojo kūno paviršius

1. Spustelėkite plokščią paviršių vaizde (pavyzdžiui, plokštės viršų su skylėmis).
2. Pasirinkite {{ui:Eksportuoti paviršių kaip DXF}} dešiniajame skydelyje arba {{ui:Eksportuoti}}, tada {{ui:DXF eskizo arba plokščio paviršiaus}}.

Gausite `<part> - face.dxf`: paviršiaus kontūrą ir visas jame esančias skyles. Apvali skylė (visas apskritimas ten, kur cilindras susitinka su paviršiumi: išgręžta skylė arba atidaryto STEP failo skylė) įrašoma kaip tikras apskritimas su savo centru ir spinduliu. Kiekvienas kitas kontūras yra uždara polilinija, o jos apvalios briaunos (suapvalinimų kampai, angos, lankai) yra facetos, todėl, jei freza turi jas tiksliai sekti, pirmiausia nustatykite **Kreivės** į Smulkus. Būsenos juostoje nurodoma, kiek yra kontūrų, kiek iš jų yra tikri apskritimai ir koks paviršiaus plotas.

Jei nepasirinktas nei eskizas, nei plokščias paviršius: „Atidarykite arba pasirinkite eskizą, arba pasirinkite plokščią paviršių, kad eksportuotumėte DXF.“

## Brėžinys

PDF brėžinys turi savo instrukciją: [Sukurkite brėžinio lapą](topic:drawing-pdf).

## Nepasiekiami formatai

glTF, OBJ, IGES ir Parasolid šioje versijoje neeksportuojami. DWG įrašomas tik per [variantų paketą](topic:variant-pack) kaip brėžinio lapas. Žr. [Failų formatai](topic:file-formats).
