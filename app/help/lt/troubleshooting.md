---
title: Trikčių šalinimas
summary: Problemos, su kuriomis galite susidurti PartCraft, nuo programos, kuri neprasideda, iki elementų, kurie nepavyksta, eskizų, kurie neišsprendžiami, failų, kurie neatsidaro, ir jungčių, kurios elgiasi netinkamai, su pranešimu, kurį matote, ir sprendimu.
keywords: problema, klaida, pagalba, neveikia, nepavyksta, gedimas, tuščias, webgl, webassembly, branduolys, dar neįgyvendinta, per daug apibrėžta, atviras profilis, nepavyksta atidaryti, nieko neįvyksta, neteisinga kryptis, lėta
from: 7728542c
---

Kai kas nors neveikia, pirmiausia perskaitykite **būsenos juostą** apačioje: PartCraft joje nurodo, kodėl atsisakė ar ko tikisi toliau. Nepavykęs elementas taip pat rodo pranešimą savo dešiniojo skydelio viršuje ir tada, kai užvedate žymeklį ant jo eilutės istorijoje.

## Programa nepasileidžia

### „Ši naršyklė negali rodyti 3D (WebGL išjungtas arba trūksta), todėl PartCraft čia neveikia.“

**Priežastis:** naršyklėje 3D grafika (WebGL) išjungta, užblokuota arba nepalaikoma grafikos tvarkyklės.

**Sprendimas:**

:::chromium
Atidarykite `chrome://settings/system` (arba `edge://settings/system` Edge) ir įjunkite „Naudoti grafikos greitinimą, kai galima“, tada paleiskite naršyklę iš naujo. Jei jis jau įjungtas, patikrinkite `chrome://gpu`, ar WebGL būsena, ir atnaujinkite grafikos tvarkyklę.
:::

:::firefox
Atidarykite `about:support` ir pažiūrėkite Graphics, WebGL. Jei jis užblokuotas, atnaujinkite grafikos tvarkyklę. `about:config` `webgl.disabled` turi būti `false`.
:::

:::safari
WebGL dabartiniame Safari visada įjungtas. Atnaujinkite macOS (Safari atnaujinasi kartu). Jei vis tiek nepavyksta, išbandykite Chrome ar Firefox tame pačiame Mac, kad atmestumėte grafinės įrangos problemą.
:::

Nuotolinio darbalaukio ir kai kurios virtualiosios mašinos WebGL neturi. Bandykite pačiame kompiuteryje.

### „Sprendiklio branduolys neįkeltas: …“

**Priežastis:** geometrijos branduolio (WebAssembly programos) nepavyko gauti ar paleisti. Dažniausiai nutrūko ryšys įkeliant programą, WebAssembly išjungė įmonės politika ar naršyklės saugumo nustatymas, arba naršyklė labai sena.

**Sprendimas:** perkraukite puslapį prisijungę prie interneto. Jei vis nepavyksta, išbandykite kitą dabartinę naršyklę. Firefox `about:config` `javascript.options.wasm` turi būti `true`. Neprisijungus programa ir jos branduolys įsikrauna tik tada, jei programos juostoje prieš prarandant ryšį rodėsi **Paruošta darbui neprisijungus** ({{ui:Įrašyti neprisijungus}} prisijungus; žr. [Darbas neprisijungus](common:offline)).

### Neprisijungimo mygtukas rodo „Nepavyko įrašyti“ arba „Neprisijungus nepasiekiama“

**Nepavyko įrašyti**: kai kurie failai neatsisiųsti. Spustelėkite, kad bandytumėte iš naujo prisijungę; lėtas ar mokamas ryšys gali reikalauti antro bandymo. **Neprisijungus nepasiekiama**: šis naršyklės langas negali išsaugoti neprisijungimo kopijos (privatūs langai ir kai kurie valdomi kompiuteriai tai blokuoja). Naudokite įprastą langą arba palikite skirtuką atvirą.

### PartCraft neprisijungęs, bet pasenęs

Prisijungę paspauskite **Paruošta darbui neprisijungus** ir pasirinkite {{ui:Įrašyti dar kartą (gauti naujausią versiją)}}.

### „Perstūmimas išilgai kelio: dar neįgyvendinta. Reikia tikslaus branduolio, kurio šiai PartCraft versijai nėra, …“

Pilnas pranešimas yra „<Pavadinimas>: dar neįgyvendinta. Reikia tikslaus branduolio, kurio šiai PartCraft versijai nėra. Pagalba › Kas dar neįgyvendinta nurodo, ką daryti vietoje.“ Jį matote, kai pasirenkate Perstūmimą išilgai kelio, Sujungimą (loft), Šonkaulį, lakšto metalo flanšą, paviršiaus elementą, Sujungti, Perkelti kūną, Keisti kūno mastelį ar Kelio raštą, ir kitiems dalykams, kuriems reikia tik tikslaus branduolio. Jūsų naršyklė ar detalė čia nekalta: ši PartCraft versija kiekvieną detalę sukuria tinklo branduoliu. Žr. [Kas dar neįgyvendinta](topic:not-built-yet), ką daryti vietoje, ir [Tinklo branduolys](topic:solid-kernels).

### „Įkeliamas sprendiklio branduolys…“ nedingsta

Palaukite šiek tiek lėtame ryšyje: branduolys ir 3D biblioteka atsisiunčiami pirmą kartą. Tuomet perkraukite. Jei pats puslapis rodo klaidą, žr. aukščiau.

## Nieko nevyksta, kai paspaudžiu klavišą

- Klavišai neveikia, kol žymeklis yra laukelyje skydelyje. Spustelėkite 3D vaizde arba paspauskite {{key:Esc}} po įvedimo (arba {{key:Tab}}, kad išeitumėte).
- Rodyklių klavišai ir {{key:Plus}}/{{key:Minus}} pasuka ir keičia vaizdo mastelį tik tada, kai spustelėjote vaizde.
- Atidarytas dialogas: pirmiausia atsakykite į jį.
- Eskize {{key:F}} yra Apvalinimo įrankis, o ne Pritaikyti. Naudokite {{ui:Pritaikyti}} mygtuką.

## Įrankių juostos mygtukas pilkas

- Elementų mygtukai pilki, kol atidarytas eskizas. Pirmiausia uždarykite eskizą.
- Eskizo įrankiai veikia tik eskizo viduje.
- {{ui:Anuliuoti}} ir {{ui:Perdaryti}} pilki, kai nėra ką anuliuoti ar perdaryti.
- {{ui:Surinkimas}} reikia detalės su kietuoju kūnu. {{ui:Jungtis}} reikia dviejų detalių surinkime. {{ui:Redaguoti detalę}} reikia pasirinktos detalės.
- {{ui:STEP AP242 (tikslus kietasis kūnas)}} ir {{ui:STEP AP214 (tikslus kietasis kūnas)}} pilki surinkime: eksportuokite kiekvieną detalę atskirai. Kita programa atmeta tikslų failą: išbandykite {{ui:STEP AP214 (tikslus kietasis kūnas)}}, tada {{ui:STEP (paviršiais, tinklo branduolys)}}, ir praneškite per {{ui:Žinynas}} › {{ui:Pranešti apie problemą}}.
- {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungimas (loft)}} ir kiti elementai, kuriems reikia tikslaus branduolio, nepilki: jie lieka paspaudžiami, jų patarimai baigiasi „dar neįgyvendinta (reikia tikslaus branduolio)“, o paspaudus būsenos juostoje tai nurodoma. Žr. [Kas dar neįgyvendinta](topic:not-built-yet).
- {{ui:Brėžinys}} reikia detalės su kietuoju kūnu, ir jis pilkas, kol atidarytas eskizas.
- {{ui:Eksportuoti}} punktai surinkime pilki: surinkimų dar negalima eksportuoti. Uždarykite jį arba redaguokite detalę, kad eksportuotumėte.

## Eskizo problemos

### Eskizas neleidžia pridėti ryšio

„Šiam pasirinkimui nėra tinkamo ryšio. Pasirinkite vieną ar du elementus (Shift+spustelėjimas prideda).“ Ryšiui reikia kito pasirinkimo. Žr. [Eskizo ryšiai ir matmenys](topic:sketch-relations), ko reikia kiekvienam.

### „Per daug apibrėžta: … negali būti įvykdyta visa. Anuliuokite arba ištrinkite vieną iš jų.“

**Priežastis:** naujas ryšys ar matmuo prieštarauja jau esantiems. Eskizas nepajudėjo.

**Sprendimas:** {{key:Mod+Z}} arba ištrinkite vieną raudonų elementų dešiniojo skydelio sąraše (šalia jo pasirinkite **Ištrinti**).

### „Per daug apibrėžta: … jau išplaukia. Ištrinkite jį.“

**Priežastis:** ryšys nieko nepridės: kiti jau jį nulemia (pavyzdžiui, Lygiagretumas dviems stačiakampio kraštinėms arba matmuo, kuris jau fiksuotas). Šioje versijoje nėra valdomų matmenų.

**Sprendimas:** ištrinkite jį. Elementas vis tiek sukuriamas, su įspėjimu.

### „Tų elementų negalima pamatuoti kartu.“

Pavyzdžiui, spustelėjote tašką ir apskritimą. Vietoje to matuokite iki apskritimo centro taško.

### „Apvalinimui reikia kampo, kuriame tiksliai susitinka dvi linijos.“ / „Tas spindulys per didelis šioms linijoms.“

Spustelėkite tiksliai ant dviejų kietų linijų kampo taško. Naudokite mažesnį spindulį nei leidžia trumpesnė linija.

### Geometrija grįžta atgal, kai ją vilkate

Vilkimas nutrauktų ryšį ar matmenį, todėl PartCraft ją grąžina. Judėti gali tik mėlyna (nepakankamai apibrėžta) geometrija.

### „Šio eskizo negalima atidaryti: reikia Extrude2, kuris nepavyksta.“

Eskizas guli ant elemento paviršiaus, kuris nėra įgyvendintas. Pirmiausia pataisykite tą elementą, arba atšaukite jo išjungimą, arba perkelkite istoriją pirmyn.

## Elementų problemos

| Pranešimas | Priežastis | Sprendimas |
|---|---|---|
| „Pirmiausia sukurkite eskizą: pasirinkite plokštumą, Eskizas, nubrėžkite uždarą profilį, Išeiti.“ | Nėra nenaudoto eskizo su kreivėmis ir nepasirinkto | Nubrėžkite eskizą arba pasirinkite eskizą, kurį naudoti, istorijoje |
| „Eskizas neturi uždaro profilio, kurį išspausti.“ (ar „kurį apsukti“) | Nėra uždaro kietų linijų kontūro | Uždarykite tarpus; grąžinkite konstrukcines linijas su {{key:Q}} |
| „Profilis atviras: galas taške (x, y) nieko nejungia.“ | Tarpas tame taške | Atidarykite eskizą, vilkite galą prie kaimyno, kad prisitrauktų |
| „Profilis išsišakoja taške (x, y): ten susitinka daugiau nei du galai.“ | Trys ar daugiau linijų susitinka viename taške | Ištrinkite papildomą liniją arba perjunkite ją į konstrukcinę |
| „Uždaras kontūras turi turėti bent tris kraštines ar kreivę.“ | Dvi linijos eina pirmyn ir atgal | Nubrėžkite kontūrą iš naujo |
| „Per visą tinka tik išpjovoms. Iškilimui naudokite gylį.“ | Iškilimas nustatytas į Per visą | Nustatykite Pabaigą į Ribotą arba Vidurio plokštuma |
| „Išpjauti eskizo pusėje nieko nėra. Pabandykite kitą kryptį.“ | Išpjova nukreipta nuo medžiagos | Pažymėkite Atvirkštinė kryptis |
| „Dar nėra ko išpjauti.“ / „Dar nėra ko gręžti.“ | Prieš šį elementą nėra kieto kūno | Pirmiausia padarykite iškilimą arba perkelkite elementą žemyn |
| „Nubrėžkite konstrukcinę liniją (ašį) eskize, apie kurią sukti.“ | Sukimas be ašies | Pridėkite ašį arba pasirinkite liniją Ašyje |
| „Profilis kerta ašį. Laikykite jį vienoje ašies pusėje.“ | Profilis abiejose ašies pusėse | Nubrėžkite pusę profilio iš naujo |
| „Padėkite eskizo taškus, kur bus skylės (Taško įrankis), tada padarykite skylę.“ | Eskize nėra laisvų taškų | Pridėkite taškus su {{key:P}} |
| „Įleidimas turi būti platesnis nei skylė.“ | Įleidimo ⌀ nėra didesnis už Skersmenį | Padarykite įleidimą platesnį |
| „Įleidimas turi būti negilesnis nei skylė.“ | Įleidimas gilesnis nei aklą skylė | Padarykite jį negilesnį arba skylę gilesnę |
| „Pasirinkite elementus, kuriuos kopijuoti.“ | Raštas ar veidrodis be pažymėtų elementų | Pažymėkite elementą Kopijuojami elementai |
| „Extrude2 neturi kieto kūno kopijuoti.“ | Kopijuojamas elementas nepavyko arba išjungtas | Pataisykite ar atblokuokite jį |
| „Reikia Sketch3, kuris nepavyksta.“ | Elementas, nuo kurio jis priklauso, neįgyvendintas | Pataisykite nurodytą elementą |
| „Paviršius, ant kurio jis guli, dingo (Extrude1 neįgyvendintas).“ | Eskizo paviršiaus nebėra | Pataisykite tą elementą arba ištrinkite eskizą ir braižykite iš naujo |
| „Po to nieko neliko iš detalės.“ | Išpjova pašalino visą medžiagą | Patikrinkite išpjovos dydį ir kryptį |
| „Kietojo kūno branduolys negalėjo to sukurti (…).“ arba „Kietojo kūno branduolys negalėjo sujungti to su kūnu.“ | Branduolys atmetė geometriją | Anuliuokite arba šiek tiek pakeiskite dydžius; tiksliai besiliečiantys paviršiai gali tai sukelti |
| „Perstūmimas išilgai kelio: dar neįgyvendinta. Reikia tikslaus branduolio, kurio šiai PartCraft versijai nėra.“ (taip pat Sujungimas, Šonkaulis ir kiti) | Elementas, sukurtas ankstesnėje versijoje, kurį gali sukurti tik tikslus branduolys. Jis lieka istorijoje ir išsaugomas nepakeistas | Išjunkite arba ištrinkite; žr. [Kas dar neįgyvendinta](topic:not-built-yet), ką daryti vietoje |
| „5 mm apvalinimas čia netinka (…).“ / „2 mm nuožulnė …“ | Dydis per didelis paviršiui šalia briaunos arba kampo negalima suapvalinti | Mažesnis dydis arba mažiau briaunų viename elemente |
| „Apvalinimas: šioje versijoje tik tiesios briaunos tarp dviejų plokščių paviršių (tinklo branduolys jas sukuria). Apvalinkite arba nuožulninkite lenktas briaunas eskize.“ (taip pat Nuožulnė) | Pasirinkta briauna yra apvali, pavyzdžiui skylės kraštas, arba guli ant išlenkto paviršiaus | {{ui:Pasirinkti briaunas}} ir pašalinkite ją; vietoj to apvalinkite tą kampą eskize |
| „Apvalinimas, kurio spindulys keičiasi išilgai briaunos: dar neįgyvendinta (reikia tikslaus branduolio). Nurodykite vieną spindulį.“ | Pažymėtas **Kintamas spindulys** | Nuimkite žymą ir nurodykite vieną spindulį |
| „Apvalinimas tinklo branduoliu: kur susitinka suapvalintos briaunos, jos nupjaunamos įstrižai, o ne sujungiamos.“ (⚠, įspėjimas) | Pasirinktos briaunos susitinka kampe; apvalinimai susitinka aštriu įtrūkiu | Nieko taisyti nereikia: detalė sukurta. Apvalinkite mažiau briaunų, jei įtrūkis svarbus |
| „Briauna, kurią apvalinate, dingo: briauna tarp Extrude1 ir Cut2.“ | Ankstesnis pakeitimas pašalino briauną | {{ui:Pasirinkti briaunas}}, pašalinkite raudoną briauną, pasirinkite naują |
| „Pasirinkite briaunas ekrane, tada jas pridėkite.“ | Apvalinimas ar nuožulnė neturi briaunų | {{ui:Pasirinkti briaunas}} |
| „Pasirinkite paviršius, kuriuos pašalinti (atidaryti), tada padarykite apvalkalą.“ | Apvalkalui nėra atvirų paviršių | {{ui:Pasirinkti paviršius}} |
| „Apvalkalo negalima padaryti su šiuo storiu (…).“ | Sienelė storesnė nei plonos modelio dalies ar apvalinimo spindulys | Plonesnė sienelė arba didesni apvalinimai |
| „Apvalkalas: šioje versijoje atidaro tik plokščius paviršius (tinklo branduolys jį sukuria).“ | Atidaromas paviršius išlenktas | {{ui:Pasirinkti paviršius}} ir pašalinkite; atidarykite tik plokščius paviršius |
| „Nuolydis: šioje versijoje tik plokšti paviršiai (tinklo branduolys jį sukuria).“ | Nuolydžio paviršius yra cilindras, kūgis ar laisvosios formos paviršius | Pašalinkite; pasvirkite tik plokščius paviršius |
| „Elemento, kurį atidaro, paviršius dingo (…).“ | Ankstesnis pakeitimas pašalino paviršių | Dar kartą {{ui:Pasirinkti paviršius}} |
| „Apvalinimas1 keičia kūno briaunas ar sienas; jo negalima kopijuoti. …“ | Raštas ar veidrodis kopijuoja apvalinimą, nuožulnę ar apvalkalą | Nuimkite žymę; pirmiausia kopijuokite išpjovas, tada apvalinkite |
| „Šis eskizas guli ant paviršiaus, kurį gali rasti tik tikslus branduolys: šioje versijoje dar neįgyvendinta.“ | Eskizas ant paviršiaus, kurio tinklo branduolys neranda, pavyzdžiui sukurto ankstesnėje versijoje | Braižykite ant bazinės plokštumos ar plokščio išspausto paviršiaus ir išdėstykite matmenimis |
| „Jis naudoja kieto kūno paviršių ar briauną, kurią gali rasti tik tikslus branduolys: šioje versijoje dar neįgyvendinta.“ | Pagalbinė plokštuma, ašis ar taškas ant kieto kūno paviršiaus ar briaunos | Padarykite ją iš bazinių plokštumų, eskizo taškų ar koordinačių |
| „Išspaudimas iki paviršiaus, kito paviršiaus ar viršūnės: dar neįgyvendinta (reikia tikslaus branduolio).“ / „Nuolydis (kūginis): dar neįgyvendinta (reikia tikslaus branduolio).“ | Galinė sąlyga ar kūginis nuolydis, kuriuos gali sukurti tik tikslus branduolys | Naudokite Ribotą arba Vidurio plokštumą su išmatuotu gyliu; palikite Nuolydį 0 |

## Pasirinkimo problemos

- „Tas paviršius išlenktas. Pasirinkite plokščią paviršių ar plokštumą eskizui.“ Eskizams reikia plokščio paviršiaus. Braižykite ant bazinės plokštumos ir išdėstykite eskizą matmenimis.
- Paviršius sako „Fiksuota, kur pasirinkta“: jis nesukurtas eskizo briauna (pavyzdžiui, raštų kopijos paviršius), todėl eskizas ant jo lieka vietoje, kai detalė keičiasi.
- Briaunas sunku pataikyti: priartinkite. Briauna laimi prieš gretimą paviršių, kai žymeklis yra tiksliai ant jos.

## Failų problemos

| Pranešimas | Sprendimas |
|---|---|
| „PartCraft atidaro savo .partcraft.json failus, eksportus iš CadCraft makro SolidWorks (.cadcraft-sw.json) ir STEP failus. „bracket.igs“ nėra nė vienas iš jų.“ | Atpažįstami tik šie failai (ir STL, OBJ bei 3MF tinklai bei `.3dm` failai) |
| „part.stp“ nėra STEP failas (jis nepradeda ISO-10303-21). | Failas nėra STEP tekstas |
| „Šis STEP failas per didelis (daugiau nei 60 MB) importuoti čia.“ | Supaprastinkite jį šaltinyje |
| „Šis failas per didelis, kad būtų PartCraft detalė.“ savo išsaugotoje detalėje | Didelis STEP kietasis kūnas, importuotas ankstesnėje versijoje, padarė detalės failą didesnį nei 50 MB. Naudokite ankstesnę kopiją be jo |
| „Šis failas per didelis, kad būtų PartCraft detalė.“ | Failas didesnis nei 50 MB; tai nėra PartCraft failas |
| „Tai nėra PartCraft failas (tai ne JSON).“ / „Tai nėra PartCraft failas.“ | Failas pažeistas arba priklauso kitai programai |
| „Šį failą išsaugojo naujesnė PartCraft (failo versija …); ši skaito versiją …“ | Atidarykite jį naujesnėje PartCraft |
| „Extrude2: gylis neteisingas.“ (ar kita reikšmė) | Failas redaguotas ranka arba sugadintas. Naudokite ankstesnę kopiją |
| Įterpimas surinkime sako „Part1.partcraft.json neturi kieto kūno įterpimui.“ | Detalės faile nėra kieto kūno. Atidarykite, sukurkite kietą kūną, įrašykite ir įterpkite iš naujo |

**Mano išsaugotas failas nėra ten, kur tikėjausi.** Įrašymas yra atsisiuntimas: ieškokite naršyklės atsisiuntimų aplanke arba atidarykite atsisiuntimų sąrašą iš naršyklės įrankių juostos. Žr. [Kur keliauja jūsų failai](common:your-files).

**Atidariau detalę, bet surinkimas vis dar ekrane.** Detalė įkelta už surinkimo. Pasirinkite {{ui:Uždaryti}}, kad uždarytumėte surinkimą ir pamatytumėte detalę. Prieš atidarydami detalės failus uždarykite surinkimus.

## Brėžinio problemos

| Pranešimas | Sprendimas |
|---|---|
| „Pirmiausia sukurkite kietąjį kūną, tada padarykite jo brėžinį.“ | Pirmiausia pagaminkite detalę |
| „Lape nėra vietos detalei: … Padarykite detalę mažesnę arba pašalinkite vaizdą.“ | Mažesnis **Detalės spindulys** arba **Detalės mastelis**, arba pašalinkite pjūvį |
| „Detalė imama iš priekinio, viršutinio, dešinio ar pjūvio vaizdo.“ | Spustelėkite ant vieno iš tų vaizdų |
| „Spustelėkite ant vieno iš vaizdų.“ | Spustelėjimas buvo tuščiame lape |
| „Padėčiai reikia bent vienos bazinės nuorodos.“ ir kiti rėmelio pranešimai | Nustatykite bazes, kurių prašo skydelis, arba pasirinkite kitą charakteristiką |
| „Brėžinio vaizdų nepavyko sukurti: …“ | Anuliuokite paskutinį pakeitimą. Jei kartojasi, išsaugokite, perkraukite ir iš naujo atidarykite detalę |

## Surinkimo problemos

| Pranešimas | Sprendimas |
|---|---|
| „Pirmiausia sukurkite kietą kūną, tada įdėkite jį į surinkimą.“ | Detalė dar neturi kieto kūno |
| „Pirmiausia įdėkite antrą detalę (Pridėti kopiją, Įterpti ar Redaguoti › Dubliuoti).“ | Jungčiai reikia dviejų detalių |
| „Pasirinkite paviršių kitoje detalėje.“ | Abu jungties paviršiai turi būti skirtingose detalėse |
| „Tas paviršius išlenktas. Pasirinkite plokščią paviršių …“ | Jungtys prasideda nuo plokščių paviršių. Tada naudokite **Centruoti ant** skylei ar sukimo ašiai |
| „Bracket2 nėra sujungtas su įtvirtinta detale, todėl lieka ten, kur buvo padėtas.“ | Pridėkite jungtį nuo jo prie detalės, kuri jau padėta |
| „Revolute3 uždaro kilpą, kuri negali užsidaryti: nukrypsta 2.000 mm. Patikrinkite kilpos jungčių paviršius, poslinkius ir ribas.“ | Detalės negali visos susitikti: patikrinkite ilgius, kiekvienos jungties paviršius, poslinkius (detalės, sukrautos paviršius su paviršiumi, turi sutapti gyliu) ir ribas; arba pašalinkite vieną kilpos jungtį |
| „Šios jungties paviršius dingo iš Bracket.“ / „Šios jungties ašis dingo iš Bracket.“ | Detalė redaguota. Pašalinkite jungtį ir padarykite iš naujo |
| „Ašis eina palei paviršių, todėl negali nustatyti jungties centro.“ | Pasirinkite ašį, kertančią paviršių, arba „Paviršiaus savo pradžia“ |
| „Surinkime lieka bent viena detalė. Uždarykite jį vietoj to.“ | Naudokite {{ui:Uždaryti}} |

**Detalės sujungtos, bet neteisingoje vietoje.** Nustatykite **Centruoti ant** abiejose jungties pusėse į skyles ar sukimo ašis, kurios turėtų sutapti, tada sureguliuokite **Kampas (°)** ir **Poslinkis (mm)**.

## Lėta

- Modeliuodami nustatykite **Kreives** į Įprastas arba Grubias; prieš eksportuodami perjunkite į Smulkias.
- Dideli rašto skaičiai (šimtai kopijų) lėtai perskaičiuojami kiekvieno pakeitimo metu. Išjunkite raštą, kol dirbate su kitais elementais.
- Susidūrimo ir judesio tikrinimas lygina kiekvieną detalių porą; dideli surinkimai užtrunka ilgiau.
- Uždarykite kitas sunkias korteles. PartCraft veikia jūsų kompiuterio procesoriumi ir grafika.

## Vis dar įstrigote

Pirmiausia įrašykite failą ({{key:Mod+S}}), tada perkraukite puslapį ir atidarykite iš naujo. Jei elementas vis tiek nepavyksta, pasirinkite jį, perskaitykite pranešimą ir bandykite {{key:Mod+Z}}, kad grįžtumėte prie paskutinės tinkamos būsenos.
