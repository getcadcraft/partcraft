---
title: Failai: atidarymas, įrašymas ir eksportavimas
summary: PartCraft atidaromi ir įrašomi detalės bei surinkimo failai, kiekvienas eksporto formatas ir tai, ką jis išsaugo, kur keliauja failai ir kas keičiasi neprisijungus ar tarp naršyklių.
keywords: atidaryti, įrašyti, eksportuoti, atsisiuntimas, failas, partcraft.json, surinkimo failas, stl, 3mf, step, dxf, pdf, kur mano failai, neprisijungus, įrašyti kaip
from: e5fbc7e3
---

PartCraft veikia su failais jūsų kompiuteryje. Jis niekada neįkelia detalės, ir čia nedalyvauja paskyra ar debesies saugykla. Įrašymas į debesį dar neprieinamas.

## Ką PartCraft atidaro

| Failas | Plėtinys | Kaip |
|---|---|---|
| PartCraft detalė | `.partcraft.json` | {{ui:Atidaryti}}, {{key:Mod+O}} arba numeskite ant 3D vaizdo |
| PartCraft surinkimas | `.partcraft-asm.json` | Tas pats: PartCraft pats atpažįsta rūšį |
| STEP kietasis kūnas | `.step`, `.stp` | Kietasis kūnas, nuskaitytas kaip trikampiai: [Atidarykite STEP failą ir kurkite toliau](topic:import-step) |

STL, OBJ ir 3MF tinklai taip pat atidaromi kaip kietieji kūnai ([Atidarykite STL, OBJ ar 3MF](topic:open-meshes)), taip pat ir `.3dm` failai ([Atidarykite .3dm modelį](topic:open-3dm-files)). DXF, IGES ir kitų programų savi detalių failai neatidaromi (žr. [Kas dar nesukurta](topic:not-built-yet)).

Taisyklės atidarant:

- Detalės ar surinkimo failo pavadinimas turi baigtis `.json`, o failas turi būti mažesnis nei 50 MB.
- Failai patikrinami prieš rodant ką nors. Sugadintas ar redaguotas failas atmetamas su paprastu paaiškinimu, pavyzdžiui: „Tai nėra PartCraft failas.“
- Failas, įrašytas naujesnio PartCraft, atmetamas: „Šis failas įrašytas naujesnio PartCraft (failo versija 3); ši versija skaito versiją 2.“ Senesni failai atidaromi.
- Jei ekrane esanti detalė turi neįrašytų pakeitimų, PartCraft pirmiausia klausia: {{ui:Atšaukti}}, {{ui:Atmesti pakeitimus}} arba {{ui:Pirmiausia įrašyti}}.

## Įrašymas

{{ui:Įrašyti}} arba {{key:Mod+S}} įrašo tai, kas rodoma ekrane:

- Detalėje: `<part name>.partcraft.json`, visa istorija (eskizai, ryšiai, matmenys, elementai, grąžinimo padėtis), brėžinio lapo pjūvio, detalės ir GD&T pastabos bei visas bet kokio ankstesne versija importuoto STEP kietojo kūno tekstas. Elementai, kurių ši versija negali sukurti, įrašomi nepakeisti. Pats kietasis kūnas neįrašomas; PartCraft jį perkuria iš istorijos atidarant failą.
- Surinkime: `<assembly name>.partcraft-asm.json`, **su kiekviena detale viduje**. Vienas failas talpina visą surinkimą, todėl jį galima siųsti atskirai.

Įrašymas yra **atsisiuntimas**. Naršyklė deda failą į savo atsisiuntimų aplanką arba klausia, kur jį dėti, jei tai nustatėte. Įrašius dar kartą sukuriamas naujas atsisiuntimas; naršyklė gali pavadinti jį `Part1 (1).partcraft.json`, o ne pakeisti seną. Failus pervardinkite ar perkelkite {{pick:mac=Finder|windows=Failų naršyklė|linux=jūsų failų tvarkyklė}} pagal savo nuožiūrą.

Simboliai, kurie nėra raidės, skaitmenys, tarpai, `_`, `.` ar `-`, detalės pavadinime failo vardui pakeičiami į `_`.

:::tip
Dauguma naršyklių turi nustatymą klausti, kur įrašyti kiekvieną atsisiuntimą. Įjunkite, jei norite kiekvieną kartą matyti „Įrašyti kaip“: Chrome ir Edge – nustatymuose skiltyje Atsisiuntimai; Firefox – Bendrieji, Failai ir programos; Safari – Bendrieji, failų atsisiuntimo vieta.
:::

Daugiau apie tai, kur keliauja atsisiuntimai ir kaip saugoti failus: [Kur keliauja jūsų failai](common:your-files).

## Eksportavimas

Meniu {{ui:Eksportuoti}} įrašo kitus formatus. Kiekvienas yra atsisiuntimas, pavadintas pagal detalę.

| Meniu punktas | Failas | Kas jame yra |
|---|---|---|
| {{ui:STL, spausdinimui 3D}} | `<name>.stl` | Dvejetainis STL su kietojo kūno trikampiais, milimetrais, **Z aukštyn** |
| {{ui:3MF, spausdinimui 3D}} | `<name>.3mf` | 3MF su kietuoju kūnu kaip vienu objektu, milimetrais, **Z aukštyn** |
| {{ui:STEP AP242 (tikslus kietasis kūnas)}} | `<name>.step` | Vienas tikslus kietasis kūnas, milimetrais, Z aukštyn: apvalūs paviršiai kaip tikri cilindrai, kūgiai, sferos ir toroidai. STEP, kurį naudoti kitoms CAD ir CAM programoms |
| {{ui:STEP AP214 (tikslus kietasis kūnas)}} | `<name>.step` | Tas pats tikslus kietasis kūnas senesnėje AP214 schemoje |
| {{ui:STEP (paviršiais, tinklo branduolys)}} | `<name>.step` | Kietasis kūnas iš plokščių paviršių iš tinklo: **apvalūs paviršiai yra daug mažų plokščių facetų**. Milimetrais, PartCraft savo ašyse (Y aukštyn). Programai, kuri atsisako tikslaus failo |
| {{ui:DXF eskizo arba plokščio paviršiaus}} | `<name> - <sketch>.dxf` arba `<name> - face.dxf` | DXF R12. Eskizas: linijos, lankai, apskritimai ir taškai eskizo koordinatėmis, sluoksniuose PROFILE, CONSTRUCTION ir POINTS. Pasirinktas plokščias paviršius: jo kontūrai kaip uždaros polilinijos (apvalios briaunos kaip jų facetos) |
| {{ui:Brėžinys (PDF): vaizdai, pjūvis, detalė, GD&T}} | `<name> - drawing.pdf` | A3 brėžinio lapas: trys vaizdai, izometrija, pjūvis ir detalė, jei nustatyta, bendri matmenys, GD&T simboliai, antraštės blokas |

:::note
{{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo skyles, iškilimus, suapvalinimus, kūgius, sferas ir toroidus jų tikrais paviršiais, todėl kita programa skylę gali pasirinkti kaip cilindrą; **Kreivės** jo nekeičia. Splaino šonai, modeliuoti sriegiai ir importuoti tinklai neturi tikro paviršiaus ir lieka plokščiomis facetomis tame pačiame kietajame kūne; būsenos juostoje nurodoma, kiek jų. {{ui:STEP (paviršiais, tinklo branduolys)}} įrašo kiekvieną apvalų paviršių kaip facetas.
:::

- Eksportuojama tai, kas rodoma ekrane. Eksportas surinkime išjungtas; surinkimo eksportas dar nesukurtas.
- STL, 3MF, facetinis STEP ir paviršiaus DXF visada sudaryti iš facetų. Nustatymas **Kreivės** (dešiniajame skydelyje, kai nieko nepasirinkta) nustato, kiek jie smulkūs – nuo 32 iki 256 facetų per apsisukimą. Prieš eksportuodami STL ar 3MF glotniam spausdinimui pasirinkite Smulkus arba Labai smulkus.
- PDF brėžinys naudoja skaitytuvo įmontuotą Helvetica šriftą. Simboliai, kurių jis negali parodyti, spausdinami kaip „?“.

Žingsnis po žingsnio: [Eksportas spausdinimui, STEP ir DXF](topic:export-files) ir [Sukurkite brėžinio lapą](topic:drawing-pdf).

## Neįrašytas darbas

- PartCraft kiekvieno pakeitimo po akimirkos saugo šioje naršyklėje atidarytos detalės ar surinkimo atkūrimo kopiją, todėl nukritus programai ar uždarius skirtuką darbas nedingsta: kitą kartą atidarę PartCraft, jis klausia „Atkurti jūsų darbą?“. Tai nėra įrašymas: įrašykite į failą, kad išsaugotumėte darbą. Žr. [Atkurkite neįrašytą darbą](common:recover).
- Jei bandote uždaryti skirtuką ar perkrauti puslapį su neįrašytais pakeitimais, naršyklė klausia: „Palikti svetainę?“. Tai naršyklės langas; PartCraft negali pakeisti jo teksto.
- {{ui:Naujas}}, {{ui:Atidaryti}} ir surinkimo uždarymas klausia prieš atmetant neįrašytus pakeitimus.

## Prisijungus ir neprisijungus

Viskas vyksta jūsų kompiuteryje: tinklo branduolys (WebAssembly programa) atsisiunčiamas kartu su programa ir kuria geometriją vietoje, o failai skaitomi iš jūsų disko ir į jį rašomi. Jokie detalės duomenys nekeliauja tinklu. Žr. [Tinklo branduolys](topic:solid-kernels).

Norėdami dirbti be jokio ryšio, būdami prisijungę įrašykite PartCraft darbui neprisijungus: programos juostoje pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol skaičiuojama („Įrašoma 40 iš 212“), kol rodoma **Paruošta darbui neprisijungus**. Įrašytoje kopijoje yra 3D biblioteka ir tinklo branduolys, todėl vėliau modeliavimas, įrašymas, visi eksportai ir brėžiniai veikia neprisijungus. Jei rodoma **Nepavyko įrašyti**, spustelėkite, kad bandytumėte dar kartą prisijungę; **Neprisijungus nepasiekiama** reiškia, kad šis naršyklės langas negali saugoti kopijos (privatūs langai ir kai kurie valdomi kompiuteriai). Kai kopija įrašyta, spustelėjus **Paruošta darbui neprisijungus**, siūlomi {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} ir {{ui:Pašalinti kopiją neprisijungus}}. Išsamiau: [Darbas neprisijungus](common:offline).

:::online
Esate prisijungę. Net jei neįrašėte darbui neprisijungus, kai PartCraft įsikėlė ir būsenos juostos žymė rodo „Tinklo branduolys“, galite dirbti toliau, jei ryšys nutrūksta. Tik neperkraukite puslapio, kol vėl nebūsite prisijungę.
:::

:::offline
Esate neprisijungę. Jei PartCraft jau atidarytas, dirbkite toliau: įrašymas ir eksportavimas veikia. Jei programos juostoje rodoma **Paruošta darbui neprisijungus**, PartCraft atsidaro ir be ryšio nuo nulio; priešingu atveju neperkraukite šio skirtuko.
:::

## Naršyklių skirtumai

- **Atsisiuntimai.** Kiekviena naršyklė turi savo atsisiuntimų aplanką ir savo klausimo būdą. Jei naršyklė klausia, ar šiai svetainei leisti atsisiųsti failus, leiskite, kitaip įrašyti ir eksportuoti neveiks.
- **Vilkimas ir numetimas** failo į vaizdą veikia Chrome, Edge, Firefox ir Safari.
- **Failai iš telefono ar planšetės.** iPhone ir iPad įrašyti failai keliauja į Failų programą, aplanką Atsisiuntimai; Android įrašyti failai keliauja į Atsisiuntimų aplanką.

Failų turinys nesiskiria tarp naršyklių ar operacinių sistemų.
