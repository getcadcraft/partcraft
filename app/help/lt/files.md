---
title: Failai: atidarymas, įrašymas ir eksportavimas
summary: Detalių ir surinkimų failai, kuriuos PartCraft atidaro ir įrašo, kiekvienas eksporto formatas ir tai, ką jis išsaugo, kur keliauja failai ir kas keičiasi neprisijungus bei tarp naršyklių.
keywords: atidaryti, įrašyti, eksportuoti, atsisiųsti, failas, partcraft.json, surinkimo failas, stl, 3mf, step, dxf, pdf, kur mano failai, neprisijungus, įrašyti kaip
from: c15c2c48
---

PartCraft dirba su failais jūsų kompiuteryje. Detalės niekada neįkeliamos, paskyros ir debesies saugyklos nėra. Įrašymas debesyje dar nepasiekiamas.

## Ką atidaro PartCraft

| Failas | Plėtinys | Kaip |
|---|---|---|
| PartCraft detalė | `.partcraft.json` | {{ui:Atidaryti}}, {{key:Mod+O}} arba nuvilkite ją į 3D vaizdą |
| PartCraft surinkimas | `.partcraft-asm.json` | Tas pats: PartCraft pats atpažįsta, koks tai failas |
| STEP kietasis kūnas | `.step`, `.stp` | Kietasis kūnas, nuskaitomas kaip trikampiai: [Atidaryti STEP failą ir kurti toliau](topic:import-step) |

STL, OBJ ir 3MF tinklai taip pat atsidaro kaip kietieji kūnai ([Atidaryti STL, OBJ ar 3MF](topic:open-meshes)), taip pat ir `.3dm` failai ([Atidaryti .3dm modelį](topic:open-3dm-files)). DXF, IGES ir kitų programų detalių failai atidaryti negali (žr. [Kas dar nepadaryta](topic:not-built-yet)).

Atidarant taikomos taisyklės:

- Detalės arba surinkimo failo pavadinimas turi baigtis `.json`, o failas turi būti ne didesnis nei 50 MB.
- Failai patikrinami prieš ką nors parodant. Sugadintas arba pakeistas failas atmetamas, ir pateikiama paprasta priežastis, pavyzdžiui: „Tai nėra PartCraft failas.“
- Failas, įrašytas naujesne PartCraft versija, atmetamas: „Šis failas įrašytas naujesne PartCraft versija (failo versija 3); ši versija skaito versiją 2.“ Senesni failai atsidaro.
- Jei ekrane esanti detalė turi neįrašytų pakeitimų, PartCraft pirmiausia paklaus: {{ui:Atšaukti}}, {{ui:Atmesti pakeitimus}} arba {{ui:Pirmiausia įrašyti}}.

## Įrašymas

{{ui:Įrašyti}} arba {{key:Mod+S}} įrašo tai, kas rodoma ekrane:

- Detalė: `<detalės pavadinimas>.partcraft.json` – visa istorija (eskizai, ryšiai, matmenys, elementai, grąžinimo iki čia padėtis), brėžinio lapo pjūvis, detalės ir GD&T pastabos bei visas bet kurio STEP kietojo kūno, importuoto ankstesnėje versijoje, tekstas. Elementai, kurių ši versija negali sukurti, išsaugomi nepakeisti. Pats kietasis kūnas neįrašomas; PartCraft jį atkuria iš istorijos, kai failas atidaromas.
- Surinkime: `<surinkimo pavadinimas>.partcraft-asm.json`, su **visomis jame esančiomis detalėmis**. Vienas failas talpina visą surinkimą, todėl jį galima siųsti atskirai.

Įrašymas yra **atsisiuntimas**. Naršyklė failą įrašo į savo atsisiuntimų aplanką arba, jei nustatyta klausti, paklaus, kur jį įrašyti. Įrašius dar kartą, sukuriamas naujas atsisiuntimas; naršyklė gali pavadinti jį `Part1 (1).partcraft.json`, o ne pakeisti senąjį. Failus galite pervadinti ar perkelti {{pick:mac=Finder|windows=Failų naršykle|linux=jūsų failų tvarkykle}} pagal savo norą.

Visi detalės pavadinimo simboliai, išskyrus raides, skaitmenis, tarpus, `_`, `.` ir `-`, failo pavadinime pakeičiami į `_`.

:::tip
Daugumoje naršyklių yra nustatymas, kuris kiekvieną kartą klausia, kur įrašyti atsisiuntimą. Jei norite, kad kiekvieną kartą būtų rodomas pasirinkimas „Įrašyti kaip“, įjunkite jį: Chrome ir Edge – nustatymuose, skiltyje Downloads (Atsisiuntimai); Firefox – skiltyje General (Bendra), Files and Applications (Failai ir programos); Safari – skiltyje General (Bendra), File download location (Failo atsisiuntimo vieta).
:::

Daugiau apie tai, kur keliauja atsisiuntimai ir kaip saugoti failus: [Kur keliauja jūsų failai](common:your-files).

## Eksportavimas

Meniu {{ui:Eksportuoti}} įrašo kitus formatus. Kiekvienas jų yra atsisiuntimas, pavadintas pagal detalę.

| Meniu punktas | Failas | Kas jame |
|---|---|---|
| {{ui:STL, spausdinimui 3D}} | `<name>.stl` | Dvejetainis STL kietojo kūno trikampiai, milimetrais, **Z aukštyn** |
| {{ui:3MF, spausdinimui 3D}} | `<name>.3mf` | 3MF su kietuoju kūnu kaip vienu objektu, milimetrais, **Z aukštyn** |
| {{ui:STEP AP242 (tikslus kietasis kūnas)}} | `<name>.step` | Šioje versijoje dar nepadaryta (pilkai pažymėta): reikia tikslaus branduolio |
| {{ui:STEP AP214 (tikslus kietasis kūnas)}} | `<name>.step` | Šioje versijoje dar nepadaryta (pilkai pažymėta) |
| {{ui:STEP (paviršiais, tinklo branduolys)}} | `<name>.step` | Kietasis kūnas iš plokščių paviršių pagal tinklą: **apvalūs paviršiai – daug mažų plokščių facetų**. Milimetrais, PartCraft savo ašimis (Y aukštyn). Šioje versijoje tinkamiausias STEP kitoms CAD programoms |
| {{ui:DXF eskizo arba plokščio paviršiaus}} | `<name> - <sketch>.dxf` arba `<name> - face.dxf` | DXF R12. Eskizas: linijos, lankai, apskritimai ir taškai pagal eskizo koordinates, sluoksniuose PROFILE, CONSTRUCTION ir POINTS. Pasirinktas plokščias paviršius: jo kontūrai kaip uždarosios polilinijos (apvalios briaunos – kaip jų facetai) |
| {{ui:Brėžinys (PDF): vaizdai, pjūvis, detalė, GD&T}} | `<name> - drawing.pdf` | A3 brėžinio lapas: trys vaizdai, izometrija, pjūvis ir detalė (jei nustatyti), bendrieji matmenys, GD&T simboliai, antraštės blokas |

:::note
{{ui:STEP AP242 (tikslus kietasis kūnas)}} ir {{ui:STEP AP214 (tikslus kietasis kūnas)}} šioje versijoje dar nepadaryti: naudokite {{ui:STEP (paviršiais, tinklo branduolys)}}. Forma ir tūris teisingi, bet kiekvienas apvalus paviršius – daug plokščių facetų, todėl kitos programos negali pasirinkti skylės kaip cilindro. Jei tai svarbu, pirmiausia nustatykite **Kreives** smulkiau.
:::

- Eksportuojama detalė, rodoma ekrane. Surinkime eksportas išjungtas; surinkimo eksporto dar nėra.
- STL, 3MF, facetuotas STEP ir paviršiaus DXF visada sudaryti iš facetų. Nustatymas **Kreivės** (dešiniajame skydelyje, kai nieko nepasirinkta) nustato, kiek jie smulkūs – nuo 32 iki 256 facetų per apsisukimą. Prieš eksportuodami STL ar 3MF lygiam spausdinimui pasirinkite Smulkiai arba Labai smulkiai.
- PDF brėžinys naudoja skaitytuvo įdiegtą Helvetica šriftą. Simboliai, kurių jis negali rodyti, spausdinami kaip „?“.

Žingsnis po žingsnio: [Eksportavimas spausdinimui, STEP ir DXF](topic:export-files) ir [Brėžinio lapo sudarymas](topic:drawing-pdf).

## Neįrašytas darbas

- Po kiekvieno pakeitimo PartCraft šioje naršyklėje trumpam išsaugo atidarytos detalės ar surinkimo atkūrimo kopiją, todėl sugedus programai ar uždarius skirtuką darbas nepražūva: kitą kartą atidarius PartCraft, programa paklaus „Atkurti jūsų darbą?“. Tai nėra įrašymas: kad išsaugotumėte darbą, įrašykite jį į failą. Žr. [Atkurti neįrašytą darbą](common:recover).
- Jei bandysite uždaryti skirtuką arba perkrauti puslapį su neįrašytais pakeitimais, naršyklė paklaus „Palikti svetainę?“. Tai naršyklės pačios langas; PartCraft negali pakeisti jo teksto.
- {{ui:Naujas}}, {{ui:Atidaryti}} ir surinkimo uždarymas prieš atmesdami neįrašytus pakeitimus paklaus.

## Prisijungus ir neprisijungus

Viskas vyksta jūsų kompiuteryje: tinklo branduolys (WebAssembly programa) atsisiunčiamas kartu su programa ir geometriją sudaro vietoje, o failai skaitomi iš disko ir į jį rašomi. Jokie detalės duomenys tinklu nesiunčiami. Žr. [Tinklo branduolys](topic:solid-kernels).

Kad galėtumėte dirbti visiškai be ryšio, prisijungę įrašykite PartCraft darbui neprisijungus: programos viršutinėje juostoje pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol bus rodoma eiga („Įrašoma 40 iš 212“), kol pasirodys **Paruošta darbui neprisijungus**. Įrašytą kopiją sudaro 3D biblioteka ir tinklo branduolys, todėl vėliau modeliavimas, įrašymas, visi eksportai ir brėžiniai veikia neprisijungus. Jei rodoma **Nepavyko įrašyti**, prisijunkite ir spustelėkite dar kartą; **Neprisijungus nepasiekiama** reiškia, kad šis naršyklės langas negali išsaugoti kopijos (privatūs langai ir kai kurie valdomi kompiuteriai). Kai kopija įrašyta, spustelėjus **Paruošta darbui neprisijungus**, siūloma {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} ir {{ui:Pašalinti kopiją neprisijungus}}. Išsamiau: [Darbas neprisijungus](common:offline).

:::online
Esate prisijungę. Net jei neįrašėte darbui neprisijungus, kai PartCraft įsikėlė ir būsenos juostos žymė rodo „Tinklo branduolys“, galite toliau dirbti nutrūkus ryšiui. Tik nekraukite puslapio iš naujo, kol vėl nebūsite prisijungę.
:::

:::offline
Esate neprisijungę. Jei PartCraft jau atidarytas, toliau dirbkite: įrašymas ir eksportavimas veikia. Jei programos juostoje rodoma **Paruošta darbui neprisijungus**, PartCraft atsidaro iš naujo ir be ryšio; priešingu atveju neperkraukite šio skirtuko.
:::

## Skirtumai tarp naršyklių

- **Atsisiuntimai.** Kiekviena naršyklė turi savo atsisiuntimų aplanką ir savą klausimo būdą. Jei naršyklė klausia, ar šiai svetainei leidžiama atsisiųsti failus, leiskite, kitaip įrašymas ir eksportavimas neveiks.
- **Nuvilkimas** failo į vaizdą veikia Chrome, Edge, Firefox ir Safari naršyklėse.
- **Failai iš telefono ar planšetės.** iPhone ir iPad įrenginiuose {{ui:Atidaryti}} rodo programą Files; įrašyti failai keliauja į Files, Downloads. Android įrenginiuose jie keliauja į aplanką Atsisiuntimai.

Failuose esantis turinys nesiskiria tarp naršyklių ar operacinių sistemų.
