---
title: PartCraft ekranas
summary: Kiekvienos juostos ir skydelio apžvalga: įrankių juosta ir jos kitimas, istorija, detalės faktai, 3D vaizdas, savybių skydelis ir būsenos juosta.
keywords: ekranas, išdėstymas, įrankių juosta, istorija, elementų medis, savybės, skydelis, būsenos juosta, sąsaja, ui, apžvalga, visas ekranas
from: 5b5bb843
---

Ekrane yra penkios dalys: įrankių juosta viršuje, istorija kairėje, 3D vaizdas viduryje, savybių skydelis dešinėje ir būsenos juosta apačioje. Virš jų visų yra CadCraft programos juosta.

## Programos juosta

Plona juosta viršuje priklauso CadCraft svetainei, o ne pačiam PartCraft. Ji rodo programos pavadinimą ir kur ji veikia, versijos meniu, **Apie PartCraft**, ekrano režimo mygtuką ir Paper / Model temos jungiklį.

- **Paper** – tamsios linijos ant šviesaus lapo. **Model** – šviesios linijos tamsiame fone. Eskizų spalvos seka temą.
- {{ui:Parametrai}} (krumpliaratis arba {{key:Mod+,}}) turi skirtuką {{ui:PartCraft}}: kuris pelės mygtukas sukasi vaizdą, pelės ratukas ar jutiklinis paviršius ir ryšiai eskizuojant. Žr. [PartCraft nustatymai](topic:settings).
- Ekrano režimo mygtukas arba {{key:Ctrl+Shift+F}} pereina per įprastą, visą ekraną ir visą ekraną su paslėptomis juostomis. Su paslėptomis juostomis perkelkite žymeklį į viršutinį kraštą (arba palieskite ten), kad jos grįžtų. {{key:Esc}} grąžina į įprastą režimą. Šis klavišas yra {{key:Ctrl+Shift+F}} ir Mac, o ne ⌘.

## Įrankių juosta

Įrankių juosta sugrupuota. Ji keičiasi priklausomai nuo to, ką darote, kad tilptų vienoje eilutėje:

| Grupė | Mygtukai | Rodoma |
|---|---|---|
| Failas | {{ui:Naujas}}, {{ui:Atidaryti}}, {{ui:Įrašyti}}, {{ui:Eksportuoti}} (meniu) | Visada |
| Eskizas | {{ui:Eskizas}} | Kai nėra atidaryto eskizo |
| Eskizas | {{ui:Baigti}}, {{ui:Linija}}, {{ui:Stačiakampis}}, {{ui:Apskritimas}}, {{ui:Lankas}}, {{ui:Taškas}}, {{ui:Ašinė linija}}, {{ui:Suapvalinti}}, {{ui:Matmuo}}, {{ui:Konstrukcija}} | Tik kai eskizas atidarytas |
| Elementai | {{ui:Ištempti}}, {{ui:Iškirpti}}, {{ui:Sukti}}, {{ui:Skylė}}, {{ui:Tiesinis}}, {{ui:Apskritiminis}}, {{ui:Veidrodis}}, {{ui:Suapvalinti}}, {{ui:Nuožulninti}}, {{ui:Išdrožti}}, {{ui:Daugiau}} (meniu: Sukimo pjūvis, Plokštuma, Ašis, Taškas, Perstūmimas išilgai kelio, Sujungimas (loft), Nuolydis) | Detalėje, ne kai atidarytas eskizas ar brėžinys. Suapvalinti ir Nuožulninti veikia su tiesiomis briaunomis tarp dviejų plokščių paviršių; Išdrožti ir Nuolydis – ant plokščių paviršių. Perstūmimas išilgai kelio ir Sujungimas (loft) šioje versijoje dar neįdiegti (jiems reikia tikslaus branduolio); spustelėjus vieną, tai nurodoma |
| Elementai | {{ui:Atlikta}} | Tik kai pasirenkate briaunas ar paviršius suapvalinimui, nuožulninimui, išdrožimui ar nuolydžiui |
| Brėžinys | {{ui:Brėžinys}} | Detalėje (galima, kai detalė turi kietąjį kūną) |
| Brėžinys | {{ui:Bazė}}, {{ui:Rėmelis}}, {{ui:Apdaila}}, {{ui:Detalė}}, {{ui:PDF}}, {{ui:Atgal}} | Tik brėžinio lape |
| Surinkimas | {{ui:Surinkimas}} | Detalėje (galima, kai detalė turi kietąjį kūną) |
| Surinkimas | {{ui:Pridėti kopiją}}, {{ui:Įterpti}}, {{ui:Jungtis}}, {{ui:Susikirtimai}}, {{ui:Redaguoti detalę}}, {{ui:Uždaryti}} | Tik surinkime |
| Surinkimas | {{ui:Atgal}} | Kai redaguojate detalę iš surinkimo |
| Redagavimas | {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Daugiau}} (meniu: Iškirpti, Kopijuoti, Įklijuoti, Įklijuoti vietoje, Dubliuoti, Naikinti, Pasirinkti viską, Nieko nepasirinkti) | Visada; kiekvienas punktas veikia eskizą, istoriją ar surinkimą, kuriame esate |
| Vaizdas | {{ui:Pritaikyti}}, {{ui:Statmenai į}}, {{ui:Vaizdai}} (meniu: Matavimas, Masės savybės, Pjūvis, Nuolydis, Zebra, Kreivumas, {{ui:Bazinės plokštumos}}, tada Izometrija, Priekis, Atgal, Viršus, Apačia, Dešinė, Kairė) | Visada |

Užveskite pelę ant mygtuko, kad pamatytumėte, ką jis daro ir kokį klavišą turi. Pilkai pažymėto mygtuko dabar negalima naudoti: pavyzdžiui, elementų mygtukai, kai eskizas atidarytas, arba {{ui:Jungtis}} prieš tai, kai surinkime yra dvi detalės.

{{ui:Daugiau}} meniu redagavimo grupėje išvardija kiekvieną redagavimo veiksmą su jo klavišu. Kas veikia kopijuojant ir įklijuojant, priklauso nuo to, kur esate; žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste). Pilkai pažymėto punkto patarimas nurodo, kodėl dabar jis neveikia.

{{ui:Eksportuoti}} meniu yra {{ui:STL, spausdinimui 3D}}, {{ui:3MF, spausdinimui 3D}}, {{ui:STEP AP242 (tikslus kietasis kūnas)}}, {{ui:STEP AP214 (tikslus kietasis kūnas)}}, {{ui:STEP (paviršiais, tinklo branduolys)}}, {{ui:STEP AP214 (facetuotas, tinklelio branduolys)}}, {{ui:DXF eskizo arba plokščio paviršiaus}} ir {{ui:Brėžinys (PDF): vaizdai, pjūvis, detalė, GD&T}}. Tikslieji STEP elementai rašo apvalius paviršius tikrais paviršiais; facetiniai rašo juos kaip plokščius facetus.

## Istorija (kairėje)

Skydelis kairėje yra detalės elementų istorija – sąrašas, kurį PartCraft perstato iš viršaus į apačią.

- Antraštė yra detalės pavadinimas („Part1“, kol jį pervadinsite).
- **Priekio plokštuma**, **Viršaus plokštuma** ir **Dešinės plokštuma** eina pirmos. Spustelėkite vieną, kad ją pasirinktumėte; ji paryškinama vaizde.
- Žemiau jų yra jūsų elementai tokia tvarka, kuria buvo sukurti. Eskizas, kurį elementas naudoja, įtraukiamas po tuo elementu.
- Vėliavėlė eilutės dešinėje pasako jos būseną:

| Vėliavėlė | Reikšmė |
|---|---|
| (nėra) | Sukurta, ir eskizas visiškai apibrėžtas |
| − | Eskizas, kuris nepilnai apibrėžtas (dar gali judėti) |
| + | Eskizas, kuris per daug apibrėžtas |
| ⚠ | Sukurta su įspėjimu (užveskite, kad perskaitytumėte) |
| ⚠ klaida | Elementas nepavyko. Užveskite, kad perskaitytumėte kodėl, arba spustelėkite |
| ⚠ nesukurta | Elementui reikalingas kitas, kuris nepavyko arba išjungtas |
| išjungta | Užblokuotas |

- Kiekvienas elementas rodo savo pagrindinį skaičių po pavadinimu, pavyzdžiui „25 mm“ ištempimui ar „Ø6.6 thru“ skylei. Du kartus spustelėkite skaičių arba paspauskite {{key:F2}} eilutėje, kad pakeistumėte jį tiesiai ten. Žr. [Keiskite dydžius](topic:change-sizes).
- Spustelėkite elementą, kad redaguotumėte jį dešinėje. Du kartus spustelėkite eskizą, kad jį atidarytumėte.
- Kai grįžtate atgal, eilių sąraše atsiranda **Atsukimo juosta · grąžinti pirmyn**. Žemiau jos esantys elementai pilki ir nesukurti.
- Kai eilutė fokusuota, {{key:Up}} ir {{key:Down}} juda tarp eilučių, o {{key:Alt+Up}} / {{key:Alt+Down}} perkelia patį elementą, kur istorija leidžia.

Surinkime tame pačiame skydelyje vietoj to rodomos **Detalės** (pirmoji pažymėta „įtvirtinta“) ir **Jungtys**.

### Detalės faktai

Po istorija **Detalė** laukelis išvardija kietojo kūno **Tūris**, **Paviršiaus plotas**, **Dydis (X × Y × Z)**, **Skersinės skylės**, **Kūnai**, **Trikampiai**, elementų skaičių **Elementai** ir kiek jų **Nepavyksta**. Tūriai ir plotai yra facetuoto kietojo kūno, sukurto tinklelio branduolio, o apvalioms formoms šiek tiek mažesni nei tikroji vertė (žr. [Elementai ir jų parinktys](topic:features#curves-resolution)).

Surinkime laukelio antraštė yra **Surinkimas**: Detalės, Egzemplioriai, Jungtys, Nesujungta ir Interferencija.

## 3D vaizdas (viduryje)

Vaizde rodomas kietasis kūnas, bazinės plokštumos ir bet kuris eskizas, kurio dar nenaudoja elementas.

Bazinės plokštumos piešiamos pilnai, kol detalė tuščia. Kai ji turi kietąjį kūną, jos atsitraukia: nupieštos blankiai, kad nedengtų detalės, o paspaudimai praeina pro jas į detalę. Jos vėl pilnai rodomos, kai pasirenkate, kur eskizuoti ({{ui:Eskizas}} nieko nepasirinkus), ir kai pasirenkate vieną iš istorijos. {{ui:Vaizdai}} › {{ui:Bazinės plokštumos}} jas visiškai paslepia; jos vis tiek rodomos, kol pasirenkate, kur eskizuoti. PartCraft prisimena šį pasirinkimą.

- Vilkite, kad pasuktumėte detalę; dešiniuoju ar vidurinio mygtuko vilkimas – perstumti; ratuku priartinkite prie žymeklio. Išsamiau – [Klavišai ir pelė](topic:keyboard).
- Užveskite ant paviršiaus, briaunos ar plokštumos, kad ji nušviestų. Spustelėkite, kad pasirinktumėte. Paviršiai paryškinami visi, o briaunos nubraižomos ir pasirenkamos visos. {{key:Shift}}+spustelėjimas renka kelias briaunas ar paviršius. Jos lieka pažymėtos.
- Vaizdo kubas viršutiniame dešiniajame kampe sukasi kartu su detale: spustelėkite paviršių, briauną ar kampą, kad žiūrėtumėte iš ten, vilkite, kad pasuktumėte; namelio mygtukas grąžina į pradžią. Žr. [Vaizdo kubas](topic:view-cube).
- Pasirinkus ištempimą, jo galo paviršiuje rodoma oranžinė rodyklė, o sukimo – išlenkta rodyklė jo sukimo gale: vilkite ją, kad pakeistumėte gylį ar kampą, arba įveskite skaičių šalia jos. Žr. [Keiskite dydžius](topic:change-sizes#drag-it-in-the-view).
- Kai detalė tuščia, lange, pavadintame **Pradėti detalę**, išvardyti pirmieji žingsniai.
- Numeskite `.partcraft.json` ar `.partcraft-asm.json` failą bet kur ant vaizdo, kad jį atidarytumėte. `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ar `.3dm` failas, numestas ten, atsidaro kaip kietasis kūnas.

### Kol pasirenkate briaunas ar paviršius

Po {{ui:Suapvalinti}}, {{ui:Nuožulninti}} ar {{ui:Išdrožti}}, nieko nepasirinkus (arba {{ui:Pasirinkti briaunas}} tame elemente), detalė rodoma tokia, kokia buvo prieš tą elementą. Spustelėkite briaunas ar paviršius, kad pridėtumėte ar atmestumėte; jų žymės rodo, kas pasirinkta. {{ui:Atlikta}} arba {{key:Esc}} baigia. Žr. [Suapvalinkite, nuožulninkite ir išdrožkite](topic:fillet-chamfer-shell).

### Brėžinio lape

{{ui:Brėžinys}} pakeičia 3D vaizdą A3 brėžinio lapu. Ratukas priartina, dešinysis ar vidurinio mygtuko vilkimas perstumia, {{key:F}} pritaiko. Žr. [Sukurkite brėžinį](topic:drawing-pdf).

### Kai eskizas atidarytas

Vaizdas pasisuka tiesiai į eskizo plokštumą, o viršuje atsiranda 2D eskizo sluoksnis. Detalė rodo tik elementus, sukurtus prieš šį eskizą. Viršutiniame kairiajame kampe juosta rodo eskizo būsenos žymę („Visiškai apibrėžtas“, „Nepilnai apibrėžtas · 3 laisvės laipsniai“ ir pan.) ir jo pavadinimą, pavyzdžiui „Sketch2 ant Extrude1 paviršiaus“.

## Savybių skydelis (dešinėje)

Dešiniajame skydelyje rodoma tai, kas pasirinkta, o antraštė tai nurodo:

- **Detalė** (nieko nepasirinkta): detalės **Pavadinimas** ir **Kreivės** nustatymas.
- Plokštuma: mygtukas {{ui:Eskizas ant jo}}.
- **Paviršius**: kokios jis rūšies (Plokščias paviršius, Cilindras su spinduliu ir ašimi, Kūgis, Sfera ar Toras), jo plotas, kuris elementas jį sukūrė, o plokščiam paviršiui – {{ui:Eskizas ant šio paviršiaus}}, {{ui:Statmenai į}}, {{ui:Eksportuoti paviršių kaip DXF}}, {{ui:Ištempti iš jo}}, {{ui:Įpjauti į jį}} ir {{ui:Skylė čia}} (žr. [Traukite ar stumkite visą paviršių](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Briauna**: jos rūšis (tiesi, apskritimas su centru ir spinduliu ar kreivė), ilgis ir du paviršiai, tarp kurių ji yra (pavyzdžiui, „Extrude1 galo paviršius ir Extrude1 šonas“), su mygtukais {{ui:Suapvalinti}} ir {{ui:Nuožulninti}}.
- Keli su {{key:Shift}} pasirinkti briaunos ar paviršiai: kiek jų, su {{ui:Suapvalinti}} ir {{ui:Nuožulninti}} briaunoms, ir {{ui:Išvalyti}}.
- Elementas: jo skaičiai ir parinktys, jo eskizo matmenys, tada {{ui:Blokuoti}}, {{ui:Grąžinti iki čia}}, {{ui:Perkelti aukštyn}}, {{ui:Perkelti žemyn}}, {{ui:Naikinti}} ir jo **Pavadinimas**.
- Atidarytas eskizas: jo būsena, ryšiai, kuriuos galite pridėti prie pasirinkimo, ryšių ir matmenų sąrašas, **Pridėti pagal koordinates**, ir {{ui:Išeiti iš eskizo}}, {{ui:Pritaikyti}} ir {{ui:Eksportuoti kaip DXF}}.
- Brėžinio lape: pjūvio ir detalės nustatymai arba pasirinktas GD&T simbolis.
- Surinkime: surinkimas, pasirinkta detalė ar pasirinkta jungtis.

Kiekvienas skaičiaus laukelis įsigalioja paspaudus {{key:Enter}} ar {{key:Tab}}, arba spustelėjus kitur. Detalė perstatoma iš karto; OK mygtuko nėra. Naudokite {{key:Mod+Z}}, kad grįžtumėte.

## Būsenos juosta (apačioje)

- Kairėje – žymeklio koordinatės eskize (tik kai eskizas atidarytas).
- Viduryje – pranešimai: ką daryti toliau ir kodėl kažkas atmesta. Skaitykite, kai atrodo, kad nieko nevyksta.
- Dešinėje prie krašto – branduolio žymė: šioje versijoje visada „tinklelio branduolys“. Užveskite, kad pamatytumėte, ką tai reiškia. Žr. [Tinklelio branduolys](topic:solid-kernels).
- Dešinėje – žymė: „Perstatoma…“, kol detalė perstatoma, tada „Perstatyta per … ms“, kai viskas gerai, arba „1 elementas nepavyksta“. Surinkime rodoma „Išdėstyta per … ms“ arba suskaičiuojamos jungčių problemos.

Taip pat žr. [Pradėkite vadovą Iliustracijoje](topic:illustrate): darbo sritį, kuri iš jūsų detalių ir surinkimų kuria surinkimo vadovus.

## Siaurame ekrane

Iki 760 pikselių pločio, pavyzdžiui telefone, vaizdas išlaiko ekraną: įrankių juosta yra viena eilutė, kuri slenka į šoną, o skydeliai atsiveria kaip lapai iš juostos apačioje. {{ui:Įrankiai}} paslepia įrankių juostą, o {{ui:Perkelti}} ją padeda apačioje. Žr. [Jutiklinis ekranas ir maži ekranai](topic:trackpad-and-touch).
