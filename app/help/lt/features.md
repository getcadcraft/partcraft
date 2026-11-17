---
title: Elementai ir jų parinktys
summary: Kiekvienas įrankių juostos elementas su savo nustatymais, numatytosiomis reikšmėmis ir ribomis – nuo ištempimo iki suapvalinimo, išdrožimo ir importuotų STEP kietųjų kūnų, visi bendri veiksmai ir detalės nustatymai.
keywords: elementai, nesukurta, ištempti, iškirpti, sukti, sukta išpjova, skylė, įleista skylė, tiesinis kartojimas, apskritiminis kartojimas, veidrodis, suapvalinti, nuožulninti, išdrožti, importuoti, parinktys, numatytosios reikšmės, nustatymai, skiriamoji geba, kreivės, facetos, blokuoti, grąžinti
from: ab3a598e
---

Elementai istorijoje išvardyti tokia tvarka, kokia buvo sukurti, ir perskaičiuojami iš viršaus į apačią. Kiekvienas pavadinamas pagal savo rūšį su numeriu: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft visus elementus kuria su tinklo branduoliu. {{ui:Suapvalinti}} ir {{ui:Nuožulninti}} veikia tiesiose briaunose tarp dviejų plokščių paviršių, o {{ui:Išdrožti}} atidaro plokščius paviršius. Importuoti kietieji kūnai reikalauja tikslaus branduolio, kurio ši versija neturi: jie dar nesukurti, o jų skyrius žemiau aprašo juos kaip detalę, sukurtą ankstesnėje versijoje, kuri juos išlaiko. Žr. [Tinklo branduolys](topic:solid-kernels) ir [Kas dar nesukurta](topic:not-built-yet).

## Eskizas

| Nustatymas | Pastabos |
|---|---|
| Plokštuma | Priekinė, Viršutinė arba Dešinė plokštuma, arba plokščias paviršius. Rodoma, bet nekeičiama: norėdami perkelti eskizą, sukurkite naują |
| Būsena | Visiškai apibrėžtas, Nepakankamai apibrėžtas (su laisvės laipsniais), Perteklinai apibrėžtas arba Tuščias |
| Geometrija, ryšiai | Kiek kreivių, taškų ir ryšių |
| Valdantieji matmenys | Visi eskizo matmenys, redaguojami |

Mygtukai: {{ui:Redaguoti eskizą}}, {{ui:Eksportuoti kaip DXF}}.

## Ištempti ir Iškirpti

{{ui:Ištempti}} ir {{ui:Iškirpti}} sukuria tą patį elementą, tik pradedant nuo skirtingų nustatymų.

| Nustatymas | Pasirinkimai | Ištempti pradeda nuo | Iškirpti pradeda nuo |
|---|---|---|---|
| Operacija | Iškilimas (pridėti medžiagos), Iškirpti (pašalinti medžiagą), Sankirta (palikti persidengimą), Naujas kūnas (šioje versijoje dar nesukurta) | Iškilimas | Iškirpti |
| Pabaiga | Aklas (gylis), Vidurio plokštuma (abiem pusėmis), Per visą | Aklas | Per visą |
| Gylis (mm) | Didesnis nei 0, iki 1,000,000 | 10 | 10 |
| Atvirkštinė kryptis | Išjungta / įjungta | Išjungta | Išjungta |

- Profilis: kiekviena uždara kilpa iš vientisų linijų, apskritimų ir lankų eskize. Kilpos kilpų viduje yra skylės.
- Per visą veikia tik iškirpimams. Pasiekia visą detalę išreikštoje pusėje.
- Iškirpimas eina į medžiagą, priešinga eskizo plokštumos išorinei pusei; **Atvirkštinė kryptis** ją apverčia.

## Sukti ir sukta išpjova

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Operacija | Iškilimas, Iškirpti | Iškilimas ({{ui:Sukti}}), Iškirpti ({{ui:Daugiau}} › {{ui:Sukta išpjova}}) |
| Kampas (°) | Didesnis nei 0, iki 360 | 360 |
| Ašis | Pirmoji ašies linija, bet kuri eskizo linija ar ašies linija, arba ašies elementas, esantis eskizo plokštumoje | Pirmoji ašies linija |

- Profilis turi likti vienoje ašies pusėje. Jis gali ją liesti.
- Sukimo ašį gali naudoti apskritiminiai kartojimai ir surinkimo jungtys.

## Skylė

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Tipas | Paprasta, Įleista skylė | Paprasta |
| Skersmuo (mm) | Didesnis nei 0 | 6 |
| Per visą | Įjungta / išjungta | Įjungta |
| Gylis (mm) | Kai Per visą išjungta | 10 |
| Įleidimo ⌀ | Platesnis už skylę | 11 |
| Įleidimo gylis | Mažesnis už aklos skylės gylį | 6 |
| Atvirkštinė kryptis | Išjungta / įjungta | Išjungta |

- Viena skylė kiekvienam laisvam eskizo taškui (taškams, sukurtiems Taško įrankiu). Skydelis rodo, kiek jų.
- Skylės gręžiamos statmenai eskizo plokštumai, į medžiagą.
- Kiekvienos skylės ašį gali naudoti surinkimo jungtys („Hole1, hole 2“).

## Tiesinis kartojimas

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Elementai kopijuoti | Bet kurie kietieji elementai virš jo | Pasirinktas elementas, kitaip paskutinis kietasis elementas |
| Kryptis | X ašis, Y ašis, Z ašis; ankstesnio eskizo linija; sukimo ašis; pasirinkta briauna | X ašis (arba briauna, pasirinkta pridedant) |
| Žingsnis (mm) | Bet koks skaičius | 20 |
| Skaičius | Nuo 1 iki 1000, įskaitant originalą | 3 |
| Atvirkštinė kryptis | Išjungta / įjungta | Išjungta |

## Apskritiminis kartojimas

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Elementai kopijuoti | Kaip Tiesiniam | Kaip Tiesiniam |
| Ašis | Kaip Kryptis aukščiau | Paskutinio sukimo ašis, kitaip Y ašis (arba pasirinkta briauna) |
| Kampas (°) | Didesnis nei 0, iki 360. 360 išdėsto kopijas lygiai aplink; mažiau išskirsto jas per kampą | 360 |
| Skaičius | Nuo 1 iki 1000, įskaitant originalą | 6 |
| Atvirkštinė kryptis | Išjungta / įjungta | Išjungta |

## Veidrodinis atspindys

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Veidrodis | Visas kūnas (kaip sukurta iki šiol) arba pasirinkti elementai | Pasirinktas elementas, kitaip visas kūnas |
| Veidrodinė plokštuma | Priekinė, Viršutinė arba Dešinė plokštuma; plokščias paviršius | Dešinė plokštuma arba plokščias paviršius, pasirinktas pridedant |

## Suapvalinti ir nuožulninti

Šioje versijoje tinklo branduolys juos kuria tiesiose briaunose tarp dviejų plokščių paviršių (išorinių ar vidinių kampų), su vienu spinduliu. Lenkta briauna praneša: „Suapvalinimas: šioje versijoje tik tiesios briaunos tarp dviejų plokščių paviršių (tinklo branduolys jas kuria). Suapvalinkite arba nuožulninkite lenktas briaunas eskize.“ Kur suapvalintos briaunos susitinka kampe, jos sujungiamos įstrižai, o elementas įspėja: „Suapvalinimas tinklo branduoliu: kur suapvalintos briaunos susitinka, jos sujungiamos įstrižai, o ne susiliejusios.“ Visi nuožulninimo tipai (lygus atstumas, du atstumai, atstumas ir kampas, su **Keisti puses**) veikia. Žr. [Suapvalinkite, nuožulninkite ir padarykite tuščiavidurį](topic:fillet-chamfer-shell).

| Nustatymas | Suapvalinti | Nuožulninti |
|---|---|---|
| Dydis | **Spindulys (mm)** (Suapvalinti), numatyta 2 | **Atstumas (mm)** (Nuožulninti), numatyta 1, abiejuose paviršiuose tas pats |
| Briaunos | Kurios briaunos, kiekviena išvardyta pagal dvi jas jungiančius paviršius („Extrude1 galo paviršius × Extrude1 šonas“), su **Pašalinti** | Tas pats |

- Pasirinkite briaunas prieš spaudžiant mygtuką ({{key:Shift}}+spustelėjimas keliems) arba pasirinkite mygtuką be pasirinkimo ir spustelėkite briaunas vėliau.
- {{ui:Pasirinkti briaunas}} (arba dukart spustelėkite elementą) keičia briaunas.
- Briaunos išlaikomos pagal dvi jas jungiančius paviršius, todėl išlieka pakeitus dydžius aukščiau istorijoje.

## Išdrožti

Tinklo branduolys jį kuria. Atidaryti galima tik plokščius paviršius („Išdrožti: šioje versijoje atidaromi tik plokšti paviršiai (tinklo branduolys jį kuria).“); skirtingo storio sienelės dar nesukurtos. Žr. [Suapvalinkite, nuožulninkite ir padarykite tuščiavidurį](topic:fillet-chamfer-shell).

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Sienelė (mm) | Didesnis nei 0 | 2 |
| Sienelės auga į išorę (paviršiai lieka viduje) | Išjungta: sienelės eina į vidų. Įjungta: sienelės eina į išorę | Išjungta |
| Atviri paviršiai | Pašalinami paviršiai, bent vienas, su **Pašalinti** | Paviršiai, pasirinkti pridedant |

{{ui:Pasirinkti paviršius}} keičia atvirus paviršius.

## Importuotas kietasis kūnas

Atidarius STEP, STL, OBJ ar 3MF failą: kietasis kūnas iš trikampių be savo istorijos ([Atidarykite STEP failą](topic:import-step), [Atidarykite STL, OBJ ar 3MF](topic:open-meshes)). Rodomas failas, iš kurio jis atėjo, ir tai, ką importavimas pataisė; **Vienetai faile**, **Kryptis aukštyn faile** ir **Naudoti** lieka redaguojami. STEP kietasis kūnas, importuotas ankstesne versija su tiksliu branduoliu, lieka istorijoje pažymėtas kaip nesukurtas; atidarykite STEP failą iš naujo, kad jį įkeltumėte kaip trikampius.

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| Kryptis aukštyn faile | Z aukštyn (dauguma CAD), Y aukštyn | Z aukštyn |

Kartojimai ir veidrodiniai atspindžiai gali kopijuoti importuotą kietąjį kūną, bet ne suapvalinimo, nuožulninimo ar išdrožimo elementą.

## Ką turi kiekvienas elementas

Kiekvieno elemento skydelio apačioje:

| Mygtukas | Ką daro |
|---|---|
| {{ui:Blokuoti}} / {{ui:Atkurti}} | Įjungia arba išjungia. Elementai, kuriems to reikia, nesukuriami, kol išjungta |
| {{ui:Grąžinti iki čia}} | Sukuria tik elementus virš šio. Nauji elementai įdedami ties grąžinimo juosta |
| {{ui:Perkelti aukštyn}} / {{ui:Perkelti žemyn}} | Perrikiuoja, kai nieko, ką jis naudoja, neatsidurtų žemiau. Kitu atveju pilkas, su priežastimi |
| {{ui:Naikinti}} | Ištrina jį ir (paklausus) kiekvieną elementą, kuris jį naudoja |
| Pavadinimas | Pervadina (iki 60 simbolių) |

Elementai su eskizu taip pat išvardija **Eskizo matmenys**, redaguojamus vietoje.

## Būsenos istorijoje

| Būsena | Rodoma kaip | Reikšmė |
|---|---|---|
| Sukurtas | Įprastai | Viskas gerai |
| Įspėjimas | ⚠ | Sukurtas, bet yra ką patikrinti: „Perteklinai apibrėžta: 1 ryšys nereikalingas.“ arba „Po to detalės nebeliko.“ |
| Klaida | ⚠ klaida, raudonai | Nepavyko sukurti; pranešime nurodoma kodėl |
| Nesukurtas | ⚠ nesukurtas | Reikia elemento, kuris nepavyko, yra blokuotas arba grąžintas, arba reikia tikslaus branduolio, kurio ši versija neturi („Sweep: dar nesukurta. …“) |
| Blokuotas | išjungtas | Išjungtas |
| Grąžintas | pilkai, žemiau grąžinimo juostos | Nesukurtas, kol neperžengsite pirmyn |

## Detalės nustatymai

Spustelėkite tuščią sritį, kad nieko nebūtų pasirinkta. Dešiniajame skydelyje rodoma **Detalė**:

- **Pavadinimas**: detalės pavadinimas, naudojamas failų vardams ir brėžinio antraštės laukui (iki 120 simbolių).
- **Kreivės**: žr. žemiau.

### Kreivių skiriamoji geba

Tinklo branduolys pats sukuria kietąjį kūną iš plokščių facetų, todėl vaizdas, STL, 3MF, facetinis STEP, tūris ir brėžinio vaizdai visi seka **Kreivės** nustatymą: kiek facetų per pilną apsisukimą.

| Nustatymas | Facetos per apsisukimą | Apvalios formos tūris |
|---|---|---|
| Šiurkštus (32 per apsisukimą) | 32 | Apie 0.64 % mažesnis už tikrąją reikšmę |
| Įprastas (64 per apsisukimą) | 64 | Apie 0.16 % mažesnis (numatytasis) |
| Smulkus (128 per apsisukimą) | 128 | Apie 0.04 % mažesnis |
| Labai smulkus (256 per apsisukimą) | 256 | Apie 0.01 % mažesnis |

Smulkesnės kreivės duoda glotnesnius eksportus ir vaizdus, bet lėtesnį perskaičiavimą. Nustatymas išsaugomas detalės faile.

## Kas dar nesukurta

Kintamo spindulio suapvalinimai, suapvalinimai ir nuožulninimai apvaliose briaunose, išdrožimai, atidarantys lenktus paviršius, nuolydis lenktuose paviršiuose, Sweep, Loft, Rib, STEP kietieji kūnai su tiksliais lenktais paviršiais, nauji kūnai, nuolydžiai, „iki“ paviršiaus ar viršūnės ir nuorodos į kietojo kūno paviršius bei briaunas reikalauja tikslaus branduolio, kurio ši versija neturi. Taip pat dar nesukurta: sriegtos ir įleidžiamos skylės. Žr. [Kas dar nesukurta](topic:not-built-yet).
