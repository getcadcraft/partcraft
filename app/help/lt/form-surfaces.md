---
title: Laisvos formos su Forma ir paviršiaus elementai
summary: Stumkite ir traukite lygų valdymo karkasą Formos darbo srityje, aštrinkite briaunas, naudokite simetriją, patikrinkite ir užbaikite jį tiksliu kietuoju kūnu ar paviršiumi, tuomet Projektavime užkloti, apkraukite, sujunkite, sustorinkite, nuleiskite, pratęskite ir apkirpkite paviršius. Kas tiksliai ir kas aproksimuota.
keywords: forma, laisva forma, T-spline, poskaidymas, Catmull–Clark, karkasas, kvadrarutulys, aštri briauna, simetrija, zebras, kreivumas, paviršius, lopas, užpildymas, lofto paviršius, siūti, storinti, poslinkio paviršius, pratęsti, apkirpti
from: 0d326ef4
---

:::note
**Dar neįgyvendinta šioje versijoje.** Formos įdėjimui į detalę ir paviršiaus elementams reikia tikslaus geometrijos branduolio, kurio šioje PartCraft versijoje nėra: ji kiekvieną detalę kuria su tinklo branduoliu. [Kas dar neįgyvendinta](topic:not-built-yet) nurodo, ką daryti vietoj to. Likusioje šio puslapio dalyje aprašoma, kaip tai veikia su tiksliu branduoliu.
:::

**Forma** darbo sritis kuria organiškas formas. Redaguojate **karkasą** – grubų kampų, briaunų ir paviršių tinklą. Forma yra lygus paviršius, kurį valdo karkasas (jo Catmull–Clark ribinis paviršius), todėl perkėlus vieną kampą paviršius švelniai išlinksta aplink jį. Kai atrodo gerai, **Apdaila** prideda ją prie detalės istorijos kaip *Formos* elementą, o tikslusis branduolys paverčia ją tikrais B-spline paviršiais. Vėliau ją galite suapvalinti, nupjauti, sujungti su kitais elementais ir eksportuoti kaip STEP.

Įrankių juostos kairėje esančiame **Darbo sritis** sąraše pasirinkite **Forma**.

## Pradėkite karkasą

1. Dešiniame skydelyje nustatykite **Dydis** ir **Padalijimai**. Padalijimai – kiek paviršių tenka kiekvienai pusei.
2. Įrankių juostoje spustelėkite {{ui:Dėžė}}, {{ui:Kvadrarutulys}} arba {{ui:Plokštuma}}. Skydelyje taip pat yra **Cilindras**, **Toras** ir **Paviršiai spustelėjimais**.

- **Kvadrarutulys** – dėžės karkasas, pritaikytas taip, kad jo kampų taškai būtų ant sferos. Tarp tų taškų paviršius šiek tiek įsiremia į sferą: apie 0.4 % mažesnis tūris, esant 2 padalijimams.
- **Plokštuma** atvira, todėl tampa paviršiaus kūnu (žr. toliau „Paviršiaus elementai Projektavime“).
- **Paviršiai spustelėjimais**: spustelėkite 4 taškus viršutinėje (pagrindo) plokštumoje arba ant karkaso kampų, kad sudarytumėte vieną paviršių. Paviršiai, turintys bendrų kampų, susijungia. Po 3 taškų, kad gautumėte trikampį, spauskite {{key:Enter}}, arba {{key:Esc}}, kad baigtumėte.

Nebaigtas karkasas įrašomas kartu su detalės failu, todėl galite uždaryti failą ir tęsti vėliau.

## Pasirinkite ir perkelkite

- Spustelėkite karkaso kampą, briauną ar paviršių. {{key:Shift}}+spustelėjimas prideda arba pašalina elementus. {{key:Esc}} panaikina pasirinkimą.
- Pasirinkimo viduryje atsiranda valdiklis. Vilkite rodyklę, kad perkeltumėte išilgai jos, arba kvadratą, kad perkeltumėte toje plokštumoje. Spauskite {{key:W}}, kad perkeltumėte, {{key:E}}, kad pasuktumėte, ir {{key:R}}, kad keistumėte mastelį, arba naudokite skydelio mygtukus. {{ui:Valdiklis}} įrankių juostoje perjungia jas.
- **Švelnus nykimas** (mm) taip pat traukia kampus per tą atstumą, sklandžiai silpnėdamas iki nulio to atstumo ribos.
- Kiekvienas vilkimas – vienas anuliavimo žingsnis: {{key:Ctrl+Z}} ir {{key:Ctrl+Y}} veikia įprastai.

## Keiskite karkasą

Skydelio mygtukai **Keisti** veikia pasirinkimą:

| Mygtukas | Ką daro |
|---|---|
| {{ui:Ištempti}} | Pasirinkti paviršiai išsistumia per **Ištempimo atstumą** pagal savo normales, susidarant naujiems šoniniams paviršiams. Pasirinktos atviros briaunos išaugina naujus paviršius į išorę. |
| {{ui:Briaunų ciklas}} / Įterpti briaunų ciklą | Padalija keturkampių paviršių žiedą, kertantį pasirinktą briauną, per vidurį. Daugiau ciklų duoda glaudesnes kreives. |
| Įterpti tašką | Prideda kampą pasirinktos briaunos viduryje. |
| Poskaidyti | Kiekvieną pasirinktą paviršių padalija į keturkampius paviršius aplink jo vidurį. |
| Tiltas | Sujungia du pasirinktus paviršius arba dvi angas (pasirinkite po vieną atvirą briauną kiekvienoje) paviršių vamzdžiu. Abiem reikia vienodo briaunų skaičiaus. |
| Užpildyti skylę | Uždaro angą per pasirinktą atvirą briauną vienu paviršiumi. |
| Suvirinti | Sujungia pasirinktus kampus į vieną, jų viduryje. |
| Išlyginti | Perkelia pasirinktus kampus į plokštumą, geriausiai jiems tinkančią. |
| Naikinti | Pašalina pasirinktus paviršius, briaunas (du paviršiai susilieja) arba kampus. |

## Aštrios briaunos, simetrija ir rodinys

- {{ui:Aštrinti briaunas}} padaro pasirinktas briaunas aštrias. **Briaunos svoris** 10 – visiškai aštru. Mažesnis svoris išlieka aštrus tiek tikslinimo žingsnių, o paskui suminkštėja, todėl gaunamas glaudus apvalumas vietoj kietos sulenkimo linijos. **Nebeaštrinti** padaro jas vėl lygias. **Aštri viršūnė** fiksuoja kampą, kad paviršius per jį eitų per tašką.
- **Simetrija** atspindi karkasą per X, Y arba Z = 0. Ji išlaiko teigiamą pusę, ją atspindi ir sujungia dvi puses. Po to pakeitimas bet kurioje pusėje atliekamas abiejose. Kampai veidrodinėje plokštumoje lieka joje.
- {{ui:Rodinys}} perjungia tarp **Lygus** (paviršiaus, kuris bus elementas) ir **Dėžė** (paties karkaso paviršių).
- **Analizė**: **Zebro juostos** atspindi juostotą šviesą iš dabartinio vaizdo. Jos sklandžiai lenkiasi per lygų paviršių ir nutrūksta ties aštria briauna. **Vidutinis kreivumas** iškilias sritis nuspalvina raudonai, įgaubtas – mėlynai, plokščias – baltai. Jis matuojamas rodomame tinkle kotangentų formule, todėl tai orientyras, o ne matavimas.

## Patikrinkite ir baikite

- **Tiksliai patikrinti** konvertuoja karkasą tiksliajame branduolyje, nekeisdamas detalės. Pateikiama, kiek B-spline lopų sudaro karkasas, kiek jų tikslūs ir ar rezultatas yra uždaras, galiojantis kietasis kūnas bei koks jo tūris.
- {{ui:Apdaila}} prideda *Formos* elementą prie istorijos arba atnaujina formą, kurią redagavote, ir grąžina į Projektavimą. Uždaras karkasas tampa kietuoju kūnu. Jo **Veiksmas** Projektavimo skydelyje gali būti Naujas kūnas, Sujungti, Išpjauti arba Susikirtimas. Atviras karkasas tampa paviršiaus kūnu.
- Vėliau formą pakeisti galite pasirinkę ją istorijoje ir spustelėję **Redaguoti Formoje**. Pastatytas kūnas paslepiamas, kol redaguojate jo karkasą.
- **Atmesti** išmeta karkasą nepaliesdamas istorijos.

## Kas tiksliai, o kas aproksimuota

Kiekvienas keturkampis karkaso paviršius, prireikus patikslintas, tampa vienu bikubiniu B-spline lopu.

- Kur kiekvienas paviršiaus kampas yra *įprastas* (paviršiaus viduje susitinka keturios briaunos arba trys ties atvira briauna ar palei aštrią briauną), lopas yra **tiksliai** poskaidymo paviršius. Testai tai tikrina iki 1e-9 mm.
- Aplink **ypatingą tašką** (susitinka trys, penkios ar daugiau briaunų, trijų ar penkių kraštinių paviršiaus kampas arba aštrios briaunos galas) tikslaus polinominio lopo nėra. Ten lopas perima tikslų tašką ir liestinės plokštumą tame kampe bei kaimynų briaunų kreives, todėl lopai vis dar susijungia be tarpo. Liestinis tęstinumas per briaunas, susitinkančias taške, yra apytikslis. Formos skydelis ir elemento skydelis pateikia didžiausią kampą, paprastai mažesnį nei 2°. Didesnis **Lygis** elemento skydelyje padaro šiuos lopus mažesnius ir artimesnius.
- Aštrios briaunos yra tikros kietojo kūno briaunos, todėl jas galite suapvalinti.
- Kiekvienas lopas yra atskiras paviršius, todėl forma turi daug paviršių ir tarp jų braižomos linijos.

## Paviršiaus elementai Projektavime

Paviršiaus komandos yra Projektavimo meniu {{ui:Daugiau}}, po elementais. Joms reikia tikslaus branduolio. Paviršiaus kūnai piešiami mėlynai ir permatomai. Jie nėra kietojo kūno dalis, kol jų nesustorinate ar nesiuvate.

| Komanda | Ką daro |
|---|---|
| Lopas | Užpildo uždarą briaunų kilpą. Pirmiausia {{key:Shift}}+spustelėkite kietojo kūno briaunas arba pasirinkite paviršiaus kūną, kad užpildytumėte jo angą. **Liestinis (G1)** padaro, kad lopas sklandžiai susijungtų su tuo paviršiumi. |
| Lofto paviršius | Paviršius per vieną kreivių grandinę kiekviename eskize (atvirą arba uždarą), istorijos tvarka. |
| Siūti | Susiuva paviršiaus kūnus išilgai jų bendrų briaunų. Jei jie susiglaudžia, rezultatas yra kietasis kūnas su Veiksmu, kaip ir kiti elementai. |
| Storinti | Suteikia paviršiaus kūnui storį: pagal normalę, prieš ją arba po pusę į abi puses. Rezultatas yra kietasis kūnas. |
| Poslinkio paviršius | Paviršiaus kūno kopija, perkelta pagal savo normales. Originalas lieka. |
| Pratęsti paviršių | Išplečia vieno paviršiaus paviršių už pasirinktų briaunų. |
| Apkirpti paviršių | Nupjauna paviršiaus kūną ten, kur jį kerta kitas paviršiaus kūnas arba kietasis kūnas. Spustelėkite **Pasirinkti tašką ant dalies**, kad pasirinktumėte, kurią dalį išlaikyti, arba palikite viską kita. |

Siuvimas, storinimas, pratęsimas ir apkirpimas sunaudoja paviršiaus kūną, iš kurio pradedama. Vėlesni elementai naudoja naują.

Šiuo metu apribojimai: formos su keliomis atskiromis uždaromis dalimis nepaverčiamos į vieną kietąjį kūną; įprastos sritys nesujungiamos į didesnius paviršius; ir žr. [Kas dar neįgyvendinta](topic:not-built-yet).
