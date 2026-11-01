---
title: PartCraft ekranas
summary: Visų juostų ir skydelių apžvalga: įrankių juosta ir jos kitimas, istorija, detalės faktai, 3D vaizdas, savybių skydelis ir būsenos juosta.
keywords: ekranas, išdėstymas, įrankių juosta, istorija, elementų medis, savybės, skydelis, būsenos juosta, sąsaja, ui, apžvalga, visas ekranas
from: 7394fc49
---

Ekranas turi penkias dalis: įrankių juostą viršuje, istoriją kairėje, 3D vaizdą viduryje, savybių skydelį dešinėje ir būsenos juostą apačioje. Virš jų visų yra CadCraft programos juosta.

## Programos juosta

Plona juosta visiškai viršuje priklauso CadCraft svetainei, o ne pačiam PartCraft. Ji rodo programos pavadinimą ir kur ji veikia, versijų meniu, **Apie PartCraft**, ekrano režimo mygtuką ir temos perjungiklį Paper / Model.

- **Paper** – tamsios linijos šviesiame lape. **Model** – šviesios linijos tamsiame fone. Eskizų spalvos seka temą.
- {{ui:Parametrai}} (krumpliaratis arba {{key:Mod+,}}) turi skirtuką {{ui:PartCraft}}: kuris pelės mygtukas pasuka vaizdą, pelės ratukas ar jutiklinė dalis, ir ryšiai eskizuojant. Žr. [PartCraft parametrai](topic:settings).
- Ekrano režimo mygtukas arba {{key:Ctrl+Shift+F}} perjungia tarp įprasto, viso ekrano ir viso ekrano su paslėptomis juostomis režimų. Kai juostos paslėptos, pelę perkelkite prie viršutinio krašto (arba palieskite ten), kad jos vėl pasirodytų. {{key:Esc}} grąžina į įprastą režimą. Šis klavišas yra {{key:Ctrl+Shift+F}} ir Mac kompiuteryje, o ne ⌘.

## Įrankių juosta

Įrankių juosta sugrupuota. Ji keičiasi pagal tai, ką darote, todėl telpa vienoje eilėje:

| Grupė | Mygtukai | Rodoma |
|---|---|---|
| Failas | {{ui:Naujas}}, {{ui:Atidaryti}}, {{ui:Įrašyti}}, {{ui:Eksportuoti}} (meniu) | Visada |
| Eskizas | {{ui:Eskizas}} | Kai nėra atidaryto eskizo |
| Eskizas | {{ui:Baigti}}, {{ui:Linija}}, {{ui:Stačiakampis}}, {{ui:Apskritimas}}, {{ui:Lankas}}, {{ui:Taškas}}, {{ui:Ašinė linija}}, {{ui:Suapvalinti}}, {{ui:Matmuo}}, {{ui:Konstrukcija}} | Tik kai atidarytas eskizas |
| Elementai | {{ui:Ištempti}}, {{ui:Iškirpti}}, {{ui:Sukti}}, {{ui:Skylė}}, {{ui:Tiesinis}}, {{ui:Apskritiminis}}, {{ui:Veidrodis}}, {{ui:Suapvalinti}}, {{ui:Nuožulninti}}, {{ui:Išdrožti}}, {{ui:Daugiau}} (meniu: Sukimo iškirpimas, Plokštuma, Ašis, Taškas, Sweep, Loft, Nuolydis) | Ant detalės, ne kai atidarytas eskizas ar brėžinys. Suapvalinti ir Nuožulninti veikia tiesiose briaunose tarp dviejų plokščių paviršių; Išdrožti ir Nuolydis – plokščiuose paviršiuose. Kreivinis ištempimas (Sweep) ir kontūrų jungimas (Loft) šioje versijoje dar nepadaryti (reikia tikslaus branduolio); paspaudus vieną iš jų, tai pasakoma |
| Elementai | {{ui:Atlikta}} | Tik kai pasirenkate briaunas ar paviršius suapvalinimui, nuožulninimui, išdrožimui ar nuolydžiui |
| Brėžinys | {{ui:Brėžinys}} | Detalėje (galima, kai detalė turi kietąjį kūną) |
| Brėžinys | {{ui:Bazė}}, {{ui:Rėmelis}}, {{ui:Apdaila}}, {{ui:Detalė}}, {{ui:PDF}}, {{ui:Atgal}} | Tik brėžinio lape |
| Surinkimas | {{ui:Surinkimas}} | Detalėje (galima, kai detalė turi kietąjį kūną) |
| Surinkimas | {{ui:Pridėti kopiją}}, {{ui:Įterpti}}, {{ui:Jungtis}}, {{ui:Susikirtimai}}, {{ui:Redaguoti detalę}}, {{ui:Uždaryti}} | Tik surinkime |
| Surinkimas | {{ui:Atgal}} | Kai redaguojate detalę iš surinkimo |
| Redagavimas | {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Daugiau}} (meniu: Iškirpti, Kopijuoti, Įklijuoti, Įklijuoti vietoje, Dubliuoti, Naikinti, Pasirinkti viską, Nieko nepasirinkti) | Visada; kiekvienas punktas veikia eskize, istorijoje ar surinkime, kuriame esate |
| Vaizdas | {{ui:Pritaikyti}}, {{ui:Statmenai į}}, {{ui:Vaizdai}} (meniu: {{ui:Matuoti}}, Masės savybės, Pjūvis, Nuolydis, Zebra, Kreivumas, {{ui:Bazinės plokštumos}}, tada Izometrija, Iš priekio, Iš galo, Iš viršaus, Iš apačios, Iš dešinės, Iš kairės) | Visada |

Užvedę pelę ant mygtuko, pamatysite, ką jis daro, ir jo klavišą. Pilkai pažymėto mygtuko dabar naudoti negalima: pavyzdžiui, elementų mygtukai, kai atidarytas eskizas, arba {{ui:Jungtis}}, kol surinkime nėra dviejų detalių.

{{ui:Daugiau}} meniu grupėje Redagavimas išvardija kiekvieną redagavimo veiksmą su jo klavišu. Tai, ką veikia kopijavimas ir įklijavimas, priklauso nuo to, kur esate; žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste). Pilkai pažymėto punkto patarime nurodoma, kodėl jis dabar neveikia.

Meniu {{ui:Eksportuoti}} yra {{ui:STL, spausdinimui 3D}}, {{ui:3MF, spausdinimui 3D}}, {{ui:STEP AP242 (tikslus kietasis kūnas)}}, {{ui:STEP AP214 (tikslus kietasis kūnas)}}, {{ui:STEP (paviršiais, tinklo branduolys)}}, {{ui:STEP AP214 (facetuotas, tinklelio branduolys)}}, {{ui:DXF eskizo arba plokščio paviršiaus}} ir {{ui:Brėžinys (PDF): vaizdai, pjūvis, detalė, GD&T}}. Du tikslūs STEP punktai pilkai pažymėti: šioje versijoje jie dar nepadaryti, todėl naudokite {{ui:STEP (paviršiais, tinklo branduolys)}}.

## Istorija (kairėje)

Kairysis skydelis yra detalės elementų istorija – sąrašas, kurį PartCraft perskaičiuoja iš viršaus į apačią.

- Antraštė – detalės pavadinimas („Part1“, kol jį pervadinsite).
- Pirmiausia rodomos **Priekinė plokštuma**, **Viršutinė plokštuma** ir **Dešinioji plokštuma**. Spustelėkite vieną, kad ją pasirinktumėte; ji paryškinama vaizde.
- Po jomis – jūsų elementai sukūrimo tvarka. Eskizas, kurį naudoja elementas, įtraukiamas po tuo elementu.
- Vėliavėlė eilutės dešiniajame gale parodo jos būseną:

| Vėliavėlė | Reikšmė |
|---|---|
| (nėra) | Sukurta, o eskizas visiškai apibrėžtas |
| − | Eskizas nepilnai apibrėžtas (dar gali judėti) |
| + | Eskizas perteklinai apibrėžtas |
| ⚠ | Sukurta, su įspėjimu (užveskite pelę, kad perskaitytumėte) |
| ⚠ klaida | Elementas nepavyko. Užveskite pelę, kad perskaitytumėte priežastį, arba spustelėkite |
| ⚠ nepadaryta | Elementui reikia kito, kuris nepavyko arba išjungtas |
| išjungta | Blokuotas |

- Kiekvienas elementas rodo savo pagrindinį skaičių po pavadinimo, pavyzdžiui, „25 mm“ ištempimui arba „Ø6.6 thru“ skylei. Dukart spustelėkite skaičių arba paspauskite eilutėje {{key:F2}}, kad jį pakeistumėte ten pat. Žr. [Keiskite matmenis](topic:change-sizes).
- Spustelėkite elementą, kad jį redaguotumėte dešinėje. Dukart spustelėkite eskizą, kad jį atidarytumėte.
- Kai grąžinate iki ankstesnės būsenos, sąraše atsiranda eilutė **Grąžinimo juosta · pirmyn**. Po ja esantys elementai pilkai pažymėti ir nesukurti.
- Kai eilutė pažymėta, {{key:Up}} ir {{key:Down}} perkelia tarp eilučių, o {{key:Alt+Up}} / {{key:Alt+Down}} perkelia patį elementą, kiek leidžia istorija.

Surinkime tas pats skydelis vietoj to rodo **Detales** (pirmoji pažymėta „įžeminta“) ir **Jungtis**.

### Detalės faktai

Po istorija langelis **Detalė** išvardija kietojo kūno **Tūrį**, **Paviršiaus plotą**, **Dydį (X × Y × Z)**, **Skyles per**, **Kūnus**, **Trikampius**, **Elementų** skaičių ir kiek jų **Nepavyksta**. Tūriai ir plotai yra facetuoto kietojo kūno, sukurto tinklo branduoliu, – apvaliose formose šiek tiek mažesni nei tikroji vertė (žr. [Elementai ir jų parinktys](topic:features#curves-resolution)).

Surinkime langelio antraštė yra **Surinkimas**: Detalės, Egzemplioriai, Jungtys, Nesujungta ir Persidengimas.

## 3D vaizdas (viduryje)

Vaizde rodomas kietasis kūnas, bazinės plokštumos ir bet kuris eskizas, dar nenaudojamas elemento.

Bazinės plokštumos piešiamos visiškai, kol detalė tuščia. Kai detalė turi kietąjį kūną, jos pasitraukia: piešiamos išblukusios, kad neuždengtų detalės, o paspaudimai prasiskverbia per jas į detalę. Jos vėl pasirodo visiškai, kai pasirenkate, kur eskizuoti ({{ui:Eskizas}} be pasirinkimo), ir kai pasirenkate vieną jų istorijoje. {{ui:Vaizdai}} › {{ui:Bazinės plokštumos}} jas visiškai paslepia; vis tiek rodomos, kai pasirenkate, kur eskizuoti. PartCraft prisimena šį pasirinkimą.

- Vilkite, kad pasuktumėte detalę, dešiniuoju arba vidurio mygtuku vilkite, kad slinktumėte, sukite ratuką, kad keistumėte mastelį žymeklio vietoje. Išsamiau: [Klavišai ir pelė](topic:keyboard).
- Užveskite pelę ant paviršiaus, briaunos ar plokštumos, kad ji paryškėtų. Spustelėkite, kad pasirinktumėte. Paviršiai paryškinami visi, o briaunos piešiamos ir pasirenkamos visos. {{key:Shift}}+spustelėjimas renka kelias briaunas ar paviršius. Jie lieka pažymėti.
- Vaizdo kubas viršutiniame dešiniajame kampe sukasi kartu su detale: spustelėkite paviršių, briauną ar kampą, kad žiūrėtumėte iš ten, vilkite, kad pasuktumėte, namelio mygtukas grąžina į pradžią. Žr. [Vaizdo kubas](topic:view-cube).
- Pasirinktas ištempimas rodo oranžinę rodyklę ant savo galinio paviršiaus, sukimas – lenktą rodyklę savo sukimo gale: vilkite ją, kad pakeistumėte gylį ar kampą, arba įveskite langelyje šalia. Žr. [Keiskite matmenis](topic:change-sizes#drag-it-in-the-view).
- Kai detalė tuščia, langelis su antrašte **Pradėti detalę** išvardija pirmuosius žingsnius.
- Nuvilkite `.partcraft.json` ar `.partcraft-asm.json` failą bet kur į vaizdą, kad jį atidarytumėte. Ten nuvilktas `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ar `.3dm` failas atsidaro kaip kietasis kūnas.

### Kol pasirenkate briaunas ar paviršius

Po {{ui:Suapvalinti}}, {{ui:Nuožulninti}} ar {{ui:Išdrožti}} be pasirinkimo (arba {{ui:Pasirinkti briaunas}} ant tokio elemento) detalė rodoma tokia, kokia buvo prieš tą elementą. Spustelėkite briaunas ar paviršius, kad pridėtumėte arba pašalintumėte; jų žymės rodo, kas įtraukta. {{ui:Atlikta}} arba {{key:Esc}} baigia. Žr. [Suapvalinkite, nuožulninkite ir išdrožkite](topic:fillet-chamfer-shell).

### Brėžinio lape

{{ui:Brėžinys}} pakeičia 3D vaizdą A3 brėžinio lapu. Ratukas keičia mastelį, dešinysis arba vidurio mygtukas vilkimas slenka, {{key:F}} pritaiko. Žr. [Sudarykite brėžinį](topic:drawing-pdf).

### Kai atidarytas eskizas

Vaizdas pasisuka tiesiai į eskizo plokštumą, o viršuje atsiranda 2D eskizo sluoksnis. Detalėje rodomi tik elementai, sukurti prieš šį eskizą. Viršutiniame kairiajame kampe juostelėje rodoma eskizo būsenos žymė („Visiškai apibrėžta“, „Nepilnai apibrėžta · 3 laisvės laipsniai“ ir pan.) ir jo pavadinimas, pavyzdžiui, „Sketch2 on a face of Extrude1“.

## Savybių skydelis (dešinėje)

Dešinysis skydelis rodo tai, kas pasirinkta, o antraštėje nurodomas pavadinimas:

- **Detalė** (nieko nepasirinkta): detalės **Pavadinimas** ir **Kreivių** nustatymas.
- Plokštuma: mygtukas {{ui:Eskizas ant jo}}.
- **Paviršius**: kokio jis tipo (Plokščias paviršius, Cilindras su spinduliu ir ašimi, Kūgis, Sfera ar Toras), jo plotas, kuris elementas jį sukūrė, o plokščiam paviršiui – {{ui:Eskizas ant šio paviršiaus}}, {{ui:Statmenai į}}, {{ui:Eksportuoti paviršių kaip DXF}}, {{ui:Ištempti iš jo}}, {{ui:Įpjauti į jį}} ir {{ui:Skylė čia}} (žr. [Vilkite arba stumkite visą paviršių](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Briauna**: jos tipas (tiesi, apskritimas su centru ir spinduliu arba kreivė), ilgis ir du paviršiai, tarp kurių ji yra (pavyzdžiui, „Extrude1 end face and Extrude1 side“), su mygtukais {{ui:Suapvalinti}} ir {{ui:Nuožulninti}}.
- Kelios briaunos ar paviršiai, pasirinkti su {{key:Shift}}: kiek jų, su {{ui:Suapvalinti}} ir {{ui:Nuožulninti}} briaunoms, ir {{ui:Išvalyti}}.
- Elementas: jo skaičiai ir parinktys, jo eskizo matmenys, tada {{ui:Blokuoti}}, {{ui:Grąžinti iki čia}}, {{ui:Perkelti aukštyn}}, {{ui:Perkelti žemyn}}, {{ui:Naikinti}} ir jo **Pavadinimas**.
- Atidarytas eskizas: jo būsena, ryšiai, kuriuos galite pridėti prie pasirinkimo, ryšių ir matmenų sąrašas, **Pridėti pagal koordinates**, ir {{ui:Išeiti iš eskizo}}, {{ui:Pritaikyti}} ir {{ui:Eksportuoti kaip DXF}}.
- Brėžinio lape: pjūvio ir detalės nustatymai arba pasirinktas GD&T simbolis.
- Surinkime: surinkimas, pasirinkta detalė arba pasirinkta jungtis.

Kiekvienas skaičių langelis įsigalioja paspaudus {{key:Enter}} ar {{key:Tab}} arba spustelėjus šalia. Detalė iš karto perskaičiuojama; {{ui:Gerai}} mygtuko nėra. Norėdami grįžti, naudokite {{key:Mod+Z}}.

## Būsenos juosta (apačioje)

- Kairėje – žymeklio koordinatės eskize (tik kai atidarytas eskizas).
- Viduryje – pranešimai: ką daryti toliau ir kodėl kažkas buvo atmesta. Skaitykite, kai atrodo, kad nieko nevyksta.
- Dešinėje arčiau – branduolio žymė: šioje versijoje visada „Tinklo branduolys“. Užveskite pelę, kad sužinotumėte, ką tai reiškia. Žr. [Tinklo branduolys](topic:solid-kernels).
- Dešinėje – žymė: „Perskaičiuojama…“, kol detalė perskaičiuojama, tada „Perskaičiuota per … ms“, kai viskas gerai, arba „1 elementas nepavyksta“. Surinkime rodoma „Išdėstyta per … ms“ arba suskaičiuojamos jungčių problemos.

Taip pat žr. [Pradėkite vadovą Iliustracijoje](topic:illustrate): darbo sritį, kuri sudaro surinkimų vadovus iš jūsų detalių ir surinkimų.

## Siaurame ekrane

Iki 760 taškų pločio, pavyzdžiui, telefone, vaizdas išlaiko ekraną: įrankių juosta yra viena eilė, slenkanti į šonus, o skydeliai atsidaro kaip lapai iš juostos apačioje. {{ui:Įrankiai}} paslepia įrankių juostą, o {{ui:Perkelti}} perkelia ją į apačią. Žr. [Jutiklinė dalis, lietimas ir maži ekranai](topic:trackpad-and-touch).
