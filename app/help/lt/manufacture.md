---
title: Įrankių trajektorijų ir G-kodo kūrimas (Gamyba)
summary: Nustatykite ruošinį ir darbinį nulinį tašką, pasirinkite įrankius, pridėkite paviršiaus, kišenės, kontūro, gręžimo ir nuožulninimo operacijas pasirinkdami paviršius, apdailinkite visą modelį 3D (lygiagrečiai, banguotumas), imituokite ruošinį prieš modelį dėl įpjovų ir ciklo trukmės, ir atsisiųskite G-kodą iš vieno iš trijų įmontuotų postprocesorių arba iš savo redaguoto.
keywords: tiksli step, step dirbtuvėms, darbinės koordinatės, cam perdavimas, lygiagrečiai, banguotumas, 3d apdaila, apdaila, rutulinis frezas, įrankių biblioteka, redaguoti postprocesorių, pasirinktinis postprocesorius, postprocesoriaus redaktorius, adaptyvus, adaptyvusis valymas, pastovus įsitraukimas, trochoidinis, hsm, didelio greičio apdirbimas, gamyba, CAM, įrankio trajektorija, G-kodas, NC, CNC, frezavimas, kišenė, kontūras, profilis, paviršiaus frezavimas, gręžimas, pertraukomis, G83, G81, G73, nuožulninimas, ruošinys, darbinis poslinkis, G54, postprocesorius, GRBL, LinuxCNC, padavimai ir apsukos, imitavimas, įpjova, ciklo trukmė
from: f8a03be8
---

Gamyba darbo sritis paverčia detalę įrankių trajektorijomis ir jas įrašo kaip G-kodą. Dauguma operacijų yra **2.5 ašies** frezavimas: įrankis lieka vertikalus, sienos išpjaunamos tiesiai žemyn, o dugnai – lygūs. **3D šiurkštinimas** ir **Likutis** išvalo kreivas detales 3D ([3D šiurkštinimas ir likučio apdirbimas](topic:rough-3d)); **Lygiagretumas** ir **Banguotumas** jas apdailina ([3D apdaila](topic:finish-3d)). Staklėse su sukamosiomis ašimis bet kuri operacija gali turėti pasvirusį įrankį, o dvi operacijos perkelia sukamąsias ašis pjaudamos ([4 ir 5 ašių apdirbimas](topic:multi-axis)). Yra operacijos tekinimo staklėms ([Tekinimas](topic:turning)) ir zondui ([Zondavimas](topic:probing)). Ji dirba su įvardytais paviršiais, kuriuos tinklo branduolys suteikia detalei (žr. [Tinklo branduolys](topic:solid-kernels)).

Laboratorinė versija: kiekvieną programą patikrinkite savo valdiklio imitatoriuje ir pirmiausia paleiskite ją ore virš ruošinio.

## Paruošimas

1. Pasirinkite **Gamyba** darbo srities perjungiklyje, tada spauskite {{ui:Nauja paruoša}}.
2. Skirtuke **Paruoša** pasirinkite:
   - **Įrankio ašis (+Z)**: kuria kryptimi įrankis nukreiptas į detalę. Pasaulio +Y (PartCraft viršus) yra numatytoji; tada staklių X yra pasaulio X, o staklių Y yra pasaulio −Z.
   - **Darbinis nulinis taškas (G54)**: ruošinio kampas arba centras, viršus arba apačia, modelio viršaus centras arba modelio pradžia.
   - **Ruošinys**: dėžė arba cilindras, arba modelis su poslinkiais (šonai, viršus, apačia), arba fiksuotas dydis.
   - **Medžiaga** (nustato pradinius padavimus ir apsukas), **postprocesorius** (valdiklis), didžiausios staklių veleno apsukos, greitojo judesio greitis ir įrankio keitimo laikas, aušinimas ir programos numeris.

## Įrankiai

Skirtuke **Įrankiai** yra biblioteka: plokšti, rutuliniai ir pusapvaliai galiniai frezai, grąžtai, nuožulninimo frezai ir paviršiaus frezai, kiekvienas su T numeriu, skersmeniu, rievių skaičiumi ir rievės ilgiu (taip pat kampo spinduliu, viršūnės arba nuožulninimo kampu ten, kur tai taikoma).

Mano įrankius galima išsaugoti naršyklėje ir perkelti tarp kompiuterių kaip failą: žr. [Įrankių biblioteka](topic:tool-library).

Veleno apsukos ir padavimas priklauso nuo medžiagos: n = 1000 × pjovimo greitis / (π × skersmuo), padavimas = n × rievių skaičius × dantelio apkrova (grąžtams: n × padavimas per apsisukimą). Skaičiai yra atsargūs pradiniai parametrai iš paskelbtų intervalų, nederinti jūsų staklėms; norėdami juos pakeisti, įveskite savo įrankio gamintojo pjovimo greitį, dantelio apkrovą, apsukas arba padavimą. Kai greitis viršija didžiausią staklių leidžiamą, jis tenai ir laikomas, o padavimas seka jį, išlaikydamas dantelio apkrovą.

## Operacijų pridėjimas

Kiekvienas įrankių juostos mygtukas prideda operaciją, o jei jai reikia geometrijos, pradeda pasirinkimą: spustelėkite paviršius arba briaunas vaizde (dar kartą spustelėkite, kad vieną atmestumėte), tada spauskite {{ui:Pasirinkimas baigtas}} arba {{key:Esc}}.

| Operacija | Pasirinkimas | Ką daro |
|---|---|---|
| {{ui:Paviršius}} | nieko | Zigzago perėjimai per visą ruošinį, už jo kraštų, žemyn iki modelio viršaus |
| {{ui:Kišenė}} | lygus dugno paviršius, apvali skylė arba uždara briaunų grandinė | Išvalo sritį poslinkio perėjimais iš vidaus į išorę, kiekviename gylio žingsnyje; salelės (paviršiai, stovintys dugne) paliekamos; dugnas, atviras aplink (nieko aukštesnio už jį), išvalomas iki ruošinio krašto |
| {{ui:Adaptyvus}} | tas pats kaip Kišenė | Išvalo tą pačią sritį perėjimais, kurių kiekvienas pjauna nustatytą plotį (**Įsitraukimas**, skersmens dalis), todėl frezas niekada nepjauna pilno pločio griovio, net kampuose; įeina spirale ir kiekviename lygyje apdailina sienas. Siauri pjūviai leidžia gilesnį gylio žingsnį ir didesnį padavimą |
| {{ui:Kontūras}} | lygus paviršius (jo kontūras), apvalus paviršius arba briaunos | Seka kontūrą, paslinktą per frezo spindulį, išorėje arba viduje, su įvedimo ir išvedimo lankais ir pasirinktinais laikikliais |
| {{ui:Gręžimas}} | skylės (spustelėkite skylės sienelę arba kraštą) | Gręžia kiekvieną skylę pastoviu ciklu: pertraukomis (G83), gręžimas (G81) arba drožlių lūžimas (G73); arba nurodykite skersmenį, kad išgręžtumėte visas to dydžio skyles |
| {{ui:Nuožulninti}} | paviršiaus kontūras arba briaunos | Vedžioja nuožulninimo frezą išilgai briaunos taip, kad nupjautų nustatyto pločio nuožulnią |
| {{ui:Lygiagretumas}} | nieko (visas modelis) | 3D apdaila lygiagrečiomis linijomis bet kuriuo kampu, sekant paviršių rutuliniu, pusapvaliu arba plokščiu galiniu frezu. Žr. [3D apdaila](topic:finish-3d) |
| {{ui:Banguotumas}} | nieko (visas modelis) | 3D apdaila perėjimais, nutolusiais per nustatytą atstumą paviršiumi, kad tarp jų likusi keterė turėtų nurodytą aukštį |

Pasirinkite operaciją sąraše, kad pakeistumėte jos įrankį, aukščius (saugos, atitraukimo, padavimo aukštis, viršus, apačia), gylio žingsnį, žingsnį tarp eilių, paliekamą ruošinį, apdailos perėjimą, įėjimą (spirale, nuožulniai arba įsmeigimu), sinchroninį frezavimą, laikiklius ar ciklą. {{ui:Aukštyn}} ir {{ui:Žemyn}} keičia tvarką, {{ui:Blokuoti}} ją palieka iš programos, {{ui:Naikinti}} pašalina. Viskas yra atšaukimo istorijoje ir įrašoma į detalės failą.

Kišenės žingsnis tarp eilių yra ne daugiau kaip pusė įrankio skersmens, todėl kiekvienas jos dugno taškas yra per vieną įrankio spindulį nuo bet kurios eilės. Vidiniai kampai išlaiko įrankio spindulį.

**Adaptyvusis valymas** palaiko frezo įsitraukimą artimą vienai reikšmei. 0.15 skersmens įsitraukimas yra maždaug 46° įsitraukimo kampas: frezo briaunos lankas medžiagoje. Perėjimas su poslinkiu, priešingai, pirmu perėjimu pjauna visu pločiu ir kiekviename vidiniame kampe apsisuka toliau. Tarp perėjimų įrankis lieka įleistas ten, kur juda per pjaunamą orą, o kitur pakyla ir nusileidžia pjaunamame ore. Perėjimai skaičiuojami smulkiame tinklelyje virš srities (langeliai apie vieną dvylikttąją frezo spindulio), todėl įsitraukimas gali būti iki maždaug vieno langelio platesnis nei nustatyta; sienos apdailinamos tiksliai. Didelė atvira sritis sukuria ilgą programą su daugybe trumpų judesių.

## Imitavimas

Įrankių trajektorijos perskaičiuojamos po kiekvieno pakeitimo (ir detalės). {{ui:Modeliuoti}} taip pat parodo ruošinį, likusį po visos programos. Skydelyje rodoma:

- **Ciklo trukmė**: padavimo judesiai pagal savo padavimą, greitieji judesiai kaip tiesios linijos pagal sąrankos greitojo judesio greitį, pridėjus įrankio keitimo laiką. Tikros staklės greitėja, todėl trunka ilgiau.
- **Įpjovos**: vietos, kur įrankis nuėjo daugiau nei 0.02 mm žemiau detalės paviršiaus. Raudonos žymės rodo jas vaizde.
- **Ruošinys, likęs ant detalės**.

Ruošinys yra viršaus aukščio žemėlapis (Z žemėlapis), todėl negali rodyti įpjovų. Vilkite **Atkūrimas**, kad perkeltumėte įrankį išilgai programos. Vaizde padavimo judesiai rodomi ištisine linija, greitieji – brūkšniuota, po vieną spalvą kiekvienai operacijai.

Įjungus **Rodyti imituojamą ruošinį**, ruošinys nuspalvinamas palyginus su modeliu, langelis po langelio: **žalia** tam, kur jis yra ant modelio (0.02 mm tikslumu), **raudona** ten, kur įrankis įsipjovė į modelį, o kur ruošinio liko ant modelio: **geltona** plonam sluoksniui, **oranžinė** – daugiau, išblunkant iki **pilkos** nepjauto ruošinio spalvos, kai yra 1 mm ar daugiau. Spalvos perskaičiuojamos su kiekvienu pakeitimu iš to paties aukščio žemėlapio kaip skydelio skaičiai, todėl žalia ir raudona sutampa su eilute **Įpjovos**. Nuožulnumas tyčia pjauna į modelį ir palei savo kraštą rodomas raudonai.

## Išvedimas į G-kodą

Pasirinkite valdiklį skiltyje **Postprocesorius** ir spauskite {{ui:Atsisiųsti G-code}} (arba {{ui:Postprocesorius}} įrankių juostoje):

| Valdiklis | Failas | Pastabos |
|---|---|---|
| Fanuc tipo ISO | .nc | %, O numeris, eilučių numeriai, T M6 su G43 H, pastovūs ciklai |
| GRBL | .nc | Nėra įrankių keitiklio ar pastovių ciklų: įrankio keitimas sustabdomas su M0, gręžimas rašomas kaip paprasti judesiai |
| LinuxCNC | .ngc | T M6 su G43 H, pastovūs ciklai, M2 |
| Fanuc tipo tekinimo staklės | .nc | Tekinimo programoms: X kaip skersmuo, padavimas per apsisukimą, G96 su G50 riba, G32 sriegimas |
| LinuxCNC tekinimo staklės | .ngc | Tekinimo programoms: G7 skersmenys, G95, G96, G33 sriegimas; nerašo nulinio judesio |
| Jūsų pasirinktinis | bet koks | Jūsų parašytas arba pakeistas postprocesorius: {{ui:Redaguoti postprocesorių…}}, {{ui:Naujas postprocesorius…}}, {{ui:Importuoti postprocesoriaus failą…}} |

Kiekvienas failas prasideda komentarais apie programą, ruošinį, darbinį poslinkį ir įrankius. Koordinatės pateikiamos milimetrais su 3 skaitmenimis po taško. {{ui:Įrankio trajektorija (CSV)}} ir {{ui:Įrankio trajektorija (JSON)}} eksportuoja pačius judesius.

**Prieš pjaudami patikrinkite išvestį savo staklių imitatoriuje ir pirmiausia paleiskite ją ore virš ruošinio.** Trys įmontuoti postprocesoriai yra pradiniai taškai, atitinkantys valdiklių dokumentuotą elgesį; jie nebuvo įrodyti jokiose konkrečiose staklėse. Postprocesorius, kurį pakeitėte, yra jūsų ir jį turite įrodyti. Kaip jį parašyti: [Redaguojami postprocesoriai](topic:post-processors).

## Tikslus STEP dirbtuvėms

Po G-kodo mygtukais skirtuke **Operacijos** {{ui:Tikslus STEP (darbinės koordinatės)}} atsisiunčia `<part>-work.step`: detalę kaip tikslų kietąjį kūną (tikri cilindrai skylėms ir išsikišimams, tikri apskritimai jų kraštams), kurios pradžia yra šios sąrankos darbiniame nulyje, o Z – pagal įrankio ašį. Tai yra koordinatės, kurias naudoja G-kodas, todėl dirbtuvių CAM programa arba tikrintuvas sulygiuoja modelį su programa jo neperkeldami. Failas apima tik detalę, be ruošinio ir įrankių trajektorijų.

{{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo tą patį kietąjį kūną jo paties padėtyje (Z aukštyn): žr. [Eksportas spausdinimui, STEP ir DXF](topic:export-files#for-other-cad-programs-step).

## Apribojimai

- Kišenės, kontūrai, gręžimas ir nuožulninimai yra 2.5 ašies. Išlenktos detalės šiurkštinamos ir apdailinamos 3D jų pačių operacijomis ([3D šiurkštinimas ir likučio apdirbimas](topic:rough-3d), [3D apdaila](topic:finish-3d)). Adaptyvusis valymas yra 2D (plokšti dugnai).
- Pasvirę įrankiai, 5 ašių ir 4 ašies apdaila, tekinimas ir zondavimas yra, kiekvienas su savais apribojimais, ir **nė vienas jų nebuvo paleistas staklėse**: žr. [4 ir 5 ašių apdirbimas](topic:multi-axis), [Tekinimas](topic:turning) ir [Zondavimas](topic:probing).
- Laikikliai ir kotai nepatikrinami dėl susidūrimų; įspėjimas pasirodo, kai pjūvis gilesnis nei rievės ilgis.
- Padavimai ir apsukos yra pradiniai parametrai. Postprocesorius yra redaguojamas tekstas, bet jis nusprendžia tik, kaip rašomi judesiai; jis negali pakeisti įrankio trajektorijos, pridėti ašių ar žinoti jūsų staklių (žr. [Redaguojami postprocesoriai](topic:post-processors), kur išvardyta, ko jis negali).

## Programos siuntimas staklėms

CadCraft Studio darbalaukyje, su staklėmis, nustatytomis Studio, **Siųsti staklėms…** rodomas šalia **Atsisiųsti G-code** ir įkelia tą pačią programą į staklės jūsų tinkle. Ji niekada nepradedama iš PartCraft: paleiskite ją prie staklių, kai aišku. Naršyklėje mygtukas nerodomas (tinklalapis negali pasiekti staklių jūsų tinkle): vietoj to atsisiųskite programą.
