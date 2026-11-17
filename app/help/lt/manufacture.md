---
title: Įrankių trajektorijos ir G-code (Gamyba)
summary: Nustatykite ruošinį ir darbo pradžios tašką, parinkite įrankius, pridėkite paviršiaus, kišenės, kontūro, gręžimo ir nuožulninimo operacijas spragtelėdami paviršius, baikite visą modelį 3D (lygiagrečiai, banguotumas), modeliuokite ruošinį prieš modelį dėl įpjovų ir ciklo laiko bei atsisiųskite G-code iš vieno iš trijų įmontuotų postprocesorių ar iš savo redaguojamo.
keywords: tikslus STEP, STEP gamyklai, darbo koordinatės, CAM perdavimas, lygiagretus, banguotumas, 3D apdaila, apdaila, rutulinis frezas, įrankių biblioteka, redaguoti postprocesorių, pritaikytas postprocesorius, adaptyvus, adaptyvus valymas, pastovus įsitraukimas, trochoidinis, hsm, didelės spartos frezavimas, gamyba, CAM, įrankio trajektorija, G-code, NC, CNC, frezavimo staklės, frezavimas, kišenė, kontūras, profilis, paviršiaus išlyginimas, gręžimas, periodinis gręžimas, G83, G81, G73, nuožulninimas, ruošinys, darbo poslinkis, G54, postprocesorius, GRBL, LinuxCNC, padavimas ir greičiai, modeliavimas, įpjova, ciklo laikas
from: beeb29aa
---

Gamybos darbo sritis paverčia detalę įrankių trajektorijomis 3 ašių frezavimo staklėms ir jas įrašo kaip G-code. Dauguma operacijų yra **2.5 ašies**: įrankis laikosi vertikaliai, sienos išpjaunamos tiesiai žemyn, o dugnai lygūs. **Lygiagrečiai** ir **Banguotumas** apdirba išlenktus paviršius 3D (žr. [3D apdaila](topic:finish-3d)); įrankis vis tiek laikosi vertikaliai (trys ašys, be pasvirimo). Jis dirba su pavadintais paviršiais, kuriuos tinklelio branduolys pateikia detalei (žr. [Tinklelio branduolys](topic:solid-kernels)).

Laboratorinė versija: kiekvieną programą patikrinkite savo valdiklio simuliatoriuje ir pirmiausia paleiskite ją ore virš ruošinio.

## Paruoša

1. Darbo srities perjungiklyje pasirinkite **Gamyba**, tada {{ui:Nauja paruoša}}.
2. Skirtuke **Paruoša** pasirinkite:
   - **Įrankio ašis (+Z)**: kuria kryptimi įrankis nukreiptas į detalę. Numatytoji – pasaulio +Y (PartCraft „aukštyn“); tada staklių X yra pasaulio X, o staklių Y – pasaulio −Z.
   - **Darbo pradžia (G54)**: ruošinio kampas ar centras, viršus ar apačia, modelio viršutinis centras arba modelio pradžia.
   - **Ruošinys**: dėžė arba cilindras, arba modelis su poslinkiais (šonai, viršus, apačia), arba fiksuotas dydis.
   - **Medžiaga** (nustato pradinį padavimą ir greičius), **postprocesorius** (valdiklis), didžiausias staklių verpstės greitis, greitasis eigos greitis ir įrankio keitimo laikas, aušinimo skystis ir programos numeris.

## Įrankiai

Skirtuke **Įrankiai** yra biblioteka: plokštieji, rutuliniai ir bulnosiniai galiniai frezai, grąžtai, nuožulninimo frezai ir paviršių frezai, kiekvienas su T numeriu, skersmeniu, rievių skaičiumi ir rievių ilgiu (taip pat kampo spindulys, viršūnės ar nuožulnos kampas, kur tai taikoma).

Mano įrankius galima įrašyti naršyklėje ir perkelti tarp kompiuterių kaip failą: žr. [Įrankių biblioteka](topic:tool-library).

Verpstės greitį ir padavimą lemia medžiaga: n = 1000 × pjovimo greitis / (π × skersmuo), padavimas = n × rievės × drožlės storis (grąžtams: n × padavimas per apsisukimą). Skaičiai yra konservatyvios pradinės reikšmės iš paskelbtų intervalų, nepritaikytos jūsų staklėms; įrankio gamintojo pjovimo greitį, drožlės storį, aps./min. ar padavimą įveskite, kad jas pakeistumėte. Kai greitis viršija didžiausią staklių reikšmę, jis lieka toje ribose, o padavimas seka jį, išlaikydamas drožlės storį.

## Pridėkite operacijas

Kiekvienas įrankių juostos mygtukas prideda operaciją, o kur reikia geometrijos, pradeda rinktis: spragtelėkite paviršius ar kraštines vaizde (dar kartą spragtelėkite, kad pašalintumėte), tada {{ui:Pasirinkimas baigtas}} arba {{key:Esc}}.

| Operacija | Pasirinkimas | Ką daro |
|---|---|---|
| {{ui:Paviršius}} | nieko | Zigzago perėjimai per visą ruošinį, už jo kraštų, iki modelio viršaus |
| {{ui:Kišenė}} | plokščią dugno paviršių, apvalią skylę arba uždarą kraštinių grandinę | Išvalo sritį poslinkio perėjimais iš vidaus į išorę, kiekviename gylio žingsnyje; salos (paviršiai, iškylantys dugno viduje) paliekamos; dugnas, atviras aplinkui (išorėje nieko aukštesnio), išvalomas iki ruošinio krašto |
| {{ui:Adaptyvus}} | tą patį, kaip {{ui:Kišenė}} | Išvalo tą pačią sritį perėjimais, kurių kiekvienas nupjauna nustatytą plotį (**Įsitraukimas**, skersmens dalis), todėl frezas niekada nepjauna pilno pločio griovio, net kampuose; įeina spirale ir kiekviename lygyje apdirba sienas. Siauri pjūviai leidžia gilesnį gylio žingsnį ir didesnį padavimą |
| {{ui:Kontūras}} | plokščią paviršių (jo kontūrą), apvalų paviršių arba kraštines | Seka kontūrą, poslinktą per įrankio spindulį, išorėje ar viduje, su įvedimo ir išvedimo lankais bei neprivalomais tilteliais |
| {{ui:Gręžimas}} | skyles (spragtelėkite skylės sieną ar kraštą) | Gręžia kiekvieną skylę įdėtiniu ciklu: periodinis gręžimas (G83), gręžimas (G81) arba drožlės lūžimas (G73); arba nurodykite skersmenį, kad išgręžtumėte visas to dydžio skyles |
| {{ui:Nuožulninti}} | paviršiaus kontūrą ar kraštines | Veda nuožulninimo frezą išilgai kraštinės, kad nupjautų nustatytą plotį |
| {{ui:Lygiagretumas}} | nieko (visas modelis) | 3D apdaila lygiagrečiomis linijomis bet kuriuo kampu, sekant paviršių rutuliniu, bulnosiniu ar plokščiu galiniu frezu. Žr. [3D apdaila](topic:finish-3d) |
| {{ui:Banguotumas}} | nieko (visas modelis) | 3D apdaila perėjimais, nutolusiais nustatytu atstumu vienas nuo kito per paviršių, kad kyšulys tarp jų turėtų nurodytą aukštį |

Pasirinkite operaciją sąraše, kad pakeistumėte jos įrankį, aukščius (atitraukimo, grįžimo, padavimo, viršaus, apačios), gylio žingsnį, žingsnį šone, paliekamą ruošinio sluoksnį, apdailos perėjimą, įvedimą (spirale, nuoža ar įleidimu), frezavimą pjovimo kryptimi, tiltelius ar ciklą. {{ui:Aukštyn}} ir {{ui:Žemyn}} keičia tvarką, {{ui:Blokuoti}} ją praleidžia, {{ui:Naikinti}} pašalina. Viskas yra anuliavimo istorijoje ir įrašoma detalės faile.

Kišenės žingsnis šone ne didesnis nei pusė įrankio skersmens, todėl kiekvienas jos dugno taškas yra per vieną įrankio spindulį nuo perėjimo. Vidiniai kampai išlaiko įrankio spindulį.

**Adaptyvus valymas** palaiko frezo įsitraukimą arti vienos reikšmės. 0.15 skersmens įsitraukimas yra maždaug 46° įsitraukimo kampas: frezo kraštinės lankas medžiagoje. Poslinkio kišenė, priešingai, pirmu perėjimu pjauna visu pločiu ir kiekviename vidiniame kampe labiau apsisuka. Tarp perėjimų įrankis lieka nuleistas, kai juda per išpjautą orą, o kitur pakyla ir nusileidžia išpjautame ore. Perėjimai apskaičiuojami smulkiame tinklelyje per sritį (langeliai maždaug dvyliktadalis įrankio spindulio), todėl įsitraukimas gali būti iki maždaug vieno langelio platesnis nei nustatyta; sienos apdirbamos tiksliai. Didelė atvira sritis sukuria ilgą programą su daugybe trumpų judesių.

## Modeliuokite

Įrankių trajektorijos perskaičiuojamos po kiekvieno pakeitimo (ir detalės). {{ui:Modeliuoti}} taip pat parodo ruošinį, likusį po visos programos. Skydelyje rodoma:

- **Ciklo laikas**: padavimo judesiai su savo padavimu, greitieji judesiai kaip tiesios linijos paruošos greitasis eigos greičiu, pridėjus įrankio keitimo laiką. Tikros staklės greitėja, todėl užtrunka ilgiau.
- **Įpjovos**: vietos, kur įrankis nuėjo giliau nei 0.02 mm žemiau detalės paviršiaus. Raudonos žymės rodo jas vaizde.
- **Ruošinys, likęs ant detalės**.

Ruošinys yra viršaus aukščių žemėlapis (Z žemėlapis), todėl negali rodyti įpjovimų po viršumi. Vilkite **Atkūrimas**, perkeldami įrankį palei programą. Vaizde padavimo judesiai rodomi ištisine linija, greitieji – brūkšniuota, po vieną spalvą kiekvienai operacijai.

Įjungus **Rodyti modeliuojamą ruošinį**, ruošinys nuspalvinamas pagal modelį langelis po langelio: **žalia**, kur jis yra ant modelio (0.02 mm tikslumu), **raudona**, kur įrankis įpjovė į modelį. Ruošinys, likęs ant modelio, rodomas **geltonai**, jei tai plona plėvelė, ir **oranžiškai**, jei daugiau, pereinant į **pilką** nepjauto ruošinio spalvą, kai yra 1 mm ar daugiau. Spalvos perskaičiuojamos su kiekvienu pakeitimu iš to paties aukščių žemėlapio kaip skydelio skaičiai, todėl žalia ir raudona sutampa su eilute Įpjovos. Nuožulninimas tyčia įpjauna į modelį ir rodo raudoną palei savo kraštą.

## Postprocesuokite G-code

Pasirinkite valdiklį skirtuke **Postprocesorius** ir paspauskite {{ui:Atsisiųsti G-code}} (arba {{ui:Postprocesorius}} įrankių juostoje):

| Valdiklis | Failas | Pastabos |
|---|---|---|
| Fanuc tipo ISO | .nc | %, O numeris, eilučių numeriai, T M6 su G43 H, įdėtiniai ciklai |
| GRBL | .nc | Nėra įrankių keitiklio ar įdėtinių ciklų: įrankio keitimas sustabdomas su M0, gręžimas rašomas kaip paprasti judesiai |
| LinuxCNC | .ngc | T M6 su G43 H, įdėtiniai ciklai, M2 |
| Jūsų pačių | bet koks | Jūsų parašytas ar pakeistas postprocesorius: {{ui:Redaguoti postprocesorių…}}, {{ui:Naujas postprocesorius…}}, {{ui:Importuoti postprocesoriaus failą…}} |

Kiekvienas failas prasideda komentarais apie programą, ruošinį, darbo poslinkį ir įrankius. Koordinatės pateikiamos milimetrais su 3 skaitmenimis po kablelio. {{ui:Įrankio trajektorija (CSV)}} ir {{ui:Įrankio trajektorija (JSON)}} eksportuoja pačius judesius.

**Prieš pjaudami patikrinkite išvestį savo staklių simuliatoriuje ir pirmiausia paleiskite ją ore virš ruošinio.** Trys įmontuoti postprocesoriai yra pradiniai taškai, atitinkantys valdiklių dokumentuotą elgseną; jie niekada neįrodyti jokiose konkrečiose staklėse. Postprocesorių, kurį pakeitėte, patikrinti tenka jums. Kaip parašyti: [Postprocesoriai](topic:post-processors).

## Tikslus STEP gamyklai

Po G-code mygtukais skirtuke **Operacijos** {{ui:Tikslus STEP (darbo koordinatės)}} atsisiunčia `<part>-work.step`: detalę kaip tikslų kietąjį kūną (tikri cilindrai skylėms ir iškyšoms, tikri apskritimai jų kraštams), kurios pradžia – šios paruošos darbo pradžia, o Z – išilgai įrankio ašies. Tai koordinatės, kurias naudoja G-code, todėl gamyklos CAM programa ar tikrintojas sulygina modelį su programa nejudindamas jo. Failas talpina tik detalę, be ruošinio ir įrankių trajektorijų.

{{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo tą patį kietąjį kūną pagal paties detalės padėtį (Z aukštyn): žr. [Eksportas spausdinimui, STEP ir DXF](topic:export-files#for-other-cad-programs-step).

## Apribojimai

- Kišenės, kontūrai, gręžimas ir nuožulninimas yra 2.5 ašies. Išlenkti paviršiai gali būti apdirbti 3D apdaila ([lygiagrečiai ir banguotumas](topic:finish-3d)), bet ne 3D šiurkštiniu apdirbimu (kūgis lieka laiptais, kol jo neapdirbsite apdaila), ir nėra likučio apdirbimo. Adaptyvus valymas yra 2D (plokšti dugnai).
- Tik trys ašys: be pasvirimo, be tekinimo, be matavimo kontrolės.
- Laikikliai ir kotai nėra tikrinami dėl susidūrimų; įspėjimas pasirodo, kai pjūvis gilesnis nei rievės ilgis.
- Padavimai ir greičiai yra pradinės reikšmės. Postprocesorius yra tekstas, kurį galite redaguoti, bet jis nulemia tik tai, kaip rašomi judesiai; jis negali pakeisti įrankio trajektorijos, pridėti ašių ar žinoti jūsų staklių ([Postprocesoriai](topic:post-processors) išvardija, ko negali).

## Siųsti programą į staklę

CadCraft Studio darbalaukio versijoje, su staklėmis, nustatytomis Studio, **Siųsti į staklę…** rodomas šalia **Atsisiųsti G-code** ir įkelia tą pačią programą į jūsų tinkle esančias stakles. Ji niekada nepaleidžiama iš PartCraft: paleiskite ją prie staklių, kai aišku. Naršyklėje mygtukas nerodomas (tinklalapis nepasiekia jūsų tinklo staklių): atsisiųskite programą.
