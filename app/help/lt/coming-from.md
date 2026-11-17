---
title: Ateinant iš kitos parametrinės modeliavimo programos
summary: Kaip stalinių parametrinių detalių modeliavimo programų darbo įpročiai atitinka PartCraft ir skirtumai, dėl kurių patyrę naudotojai painiojasi pirmąją valandą.
keywords: perėjimas, perkėlimas, pažįstamas, elementų medis, išmanusis matmuo, išsikišimas, išpjova, skylių vedlys, sąsajos, persidengimų aptikimas, atsukimo juosta, savybių skydelis, pelė, skirtumai
from: fbacaee1
---

Jei detales projektuojate SolidWorks, daugelis PartCraft idėjų bus pažįstamos: eskizai ant plokštumų Priekinė, Viršutinė ir Dešinė, ryšiai ir išmanieji matmenys, elementų istorija su atsukimo juosta ir surinkimai, sudaryti sąsajomis. Kaip į jas patenkama, kai kur skiriasi, o ši pirmoji versija atlieka mažiau. Šiame puslapyje susieti jūsų įpročiai ir išvardyti netikėtumai.

## Įpročiai, susieti

| Įpratęs esate | PartCraft'e |
|---|---|
| Projektavimo medis kairėje | Istorija kairėje: plokštumos, tada elementai; eskizai įtraukti po elementu, kuris juos naudoja |
| Priekinė, Viršutinė ir Dešinė plokštumos | Tos pačios trys, per pradžios tašką. Priekinė yra XY plokštuma, Viršutinė – XZ, Dešinė – YZ; Y rodo aukštyn |
| Eskizas ant plokštumos ar paviršiaus, tada patvirtinimo kampelis išėjimui | {{ui:Eskizas}} ({{key:S}}) pasirinktoje plokštumoje ar plokščiame paviršiuje; {{ui:Baigti}} arba {{key:Esc}}, kol uždaroma |
| Išmanusis matmuo | {{ui:Matmuo}} ({{key:D}}). Spustelėkite vieną ar du objektus, tada vietą, kur eis skaičius. Vieta, kurią pasirinkote, nustato horizontalų, vertikalų ar lygiuojamą matmenį |
| Pridėti ryšius savybių skydelyje | Pasirinkite objektus, tada ryšių mygtukus dešiniajame skydelyje (Sutampa, Horizontalus, Lygiagretus, Liestinis, Lygus ir t. t.) |
| Automatiniai ryšiai braižant eskizą | Prisitraukimai prideda sutapimo, taško ant kreivės, horizontalius ir vertikalius ryšius |
| Mėlyna / juoda / raudona eskizo spalvos | Ta pati idėja: mėlyna – nepilnai apibrėžta, juoda – visiškai apibrėžta, raudona – perteklinai apibrėžta. Žetonas rodo likusius laisvės laipsnius |
| Ašinė linija sukimams | {{ui:Ašinė linija}} ({{key:N}}); {{ui:Sukti}} naudoja pirmą ašinę liniją, nebent pasirinksite kitą ašį |
| Eskizo suapvalinimas | {{ui:Suapvalinti}} ({{key:F}}) eskize: spustelėkite kampą, įveskite spindulį |
| Konstrukcinės geometrijos perjungimas | {{ui:Konstrukcija}} ({{key:Q}}) |
| Ištemptas išsikišimas | {{ui:Ištempti}}: Aklas, Vidurio plokštuma, Iki paviršiaus / kito / viršūnės, Poslinkis nuo paviršiaus, antroji kryptis, nuolydis, vienas kontūras (Pasirinkti sritis) |
| Ištempta išpjova | {{ui:Iškirpti}}: prasideda kaip Per visą; perjunkite į Aklas, kad padarytumėte įdubą |
| Sukto išsikišimas / išpjova | {{ui:Sukti}} / {{ui:Daugiau}} › {{ui:Sukta išpjova}} |
| Pagalbinė plokštuma / ašis / taškas | {{ui:Daugiau}} › {{ui:Plokštuma}}, {{ui:Ašis}}, {{ui:Taškas}} (žr. [Pagalbinės plokštumos, ašys ir taškai](topic:reference-geometry)) |
| Perstūmimo / sujungimo išsikišimas ar išpjova, nuolydis | {{ui:Daugiau}} › {{ui:Nuolydis}} plokščiuose paviršiuose (žr. [Perstūmimas, sujungimas ir nuolydis](topic:sweep-loft-draft)). {{ui:Perstūmimas išilgai kelio}} ir {{ui:Sujungimas (loft)}} šioje versijoje dar nesukurti (jiems reikalingas tikslusis branduolys) |
| Skylių vedlys | {{ui:Skylė}} kiekviename laisvame eskizo taške: paprasta, įleidimas, įgilinimas (90° / 82°) arba išsriegta ISO metrinė M2–M24, per visą arba akla |
| Tiesinis / apskritiminis masyvas, veidrodis | {{ui:Tiesinis}}, {{ui:Apskritiminis}}, {{ui:Veidrodis}} (elementai arba visas kūnas) |
| Suapvalinimas ir nuožulninimas ant briaunų | {{ui:Suapvalinti}} / {{ui:Nuožulninti}}: spustelėkite briauną, {{key:Shift}}+spustelėkite daugiau, tada mygtuką. Vienas spindulys; lygūs, dviejų atstumų ar atstumo-kampo nuožulninimai. Šioje versijoje tik tiesios briaunos tarp dviejų plokščių paviršių, o suapvalinimai, susitinkantys kampe, sujungiami įstrižai. Išlenktas briaunas suapvalinkite arba nuožulninkite eskize ({{ui:Suapvalinti}} eskize, {{key:F}}) |
| Išdrožimas | {{ui:Išdrožti}}: spustelėkite plokščius paviršius, kuriuos atverti, tada mygtuką. Viena sienelės storis |
| Atverti STEP failą | {{ui:Atidaryti}}: nuskaitomas kaip trikampiai, kietasis kūnas, ant kurio galima kurti ([Atverti STEP failą](topic:import-step)) |
| Redaguoti elementą, tada Gerai | Spustelėkite elementą; keiskite skaičius dešinėje; jis perstatomas rašant. Nėra „Gerai“, nėra „Atšaukti“: naudokite {{key:Mod+Z}} |
| Redaguoti eskizą | Dukart spustelėkite eskizą istorijoje |
| Perstatymas | Automatinis po kiekvieno pakeitimo. Perstatymo klavišo nėra |
| Blokuoti / atblokuoti | {{ui:Blokuoti}} / {{ui:Atkurti}} dešiniajame skydelyje |
| Vilkti atsukimo juostą | {{ui:Grąžinti iki čia}} ant elemento; spustelėkite „Atsukimo juosta · pirmyn“, kad grįžtumėte |
| Vilkti elementą medyje, kad pertvarkytumėte | {{ui:Perkelti aukštyn}} / {{ui:Perkelti žemyn}} arba {{key:Alt+Up}} / {{key:Alt+Down}}; atsisakoma nurodant priežastį, kai tai pažeistų priklausomybę |
| Matmenų redagavimas dukart spustelėjus modelį | Pasirinkite elementą: jo eskizo matmenys išvardijami dešiniajame skydelyje |
| Sąsajos: sutapimas, koncentriškumas, atstumas, kampas | {{ui:Jungtis}} ({{key:J}}): pasirinkite plokščią paviršių kiekvienoje detalėje; jungtis sudeda juos paviršius prie paviršiaus. **Centras** ant ašies veikia kaip koncentriškumas; **Poslinkis** – kaip atstumas; **Kampas** – kaip kampas |
| Fiksuotas komponentas | Pirmoji detalė įtvirtinta; {{ui:Padaryti įtvirtinta detale}} ją pakeičia |
| Įterpti komponentą | {{ui:Pridėti kopiją}} arba {{ui:Dubliuoti}} (dar viena kopija) arba {{ui:Įterpti}} (iš detalės failo) |
| Redaguoti detalę surinkime | {{ui:Redaguoti detalę}}, tada {{ui:Atgal}} |
| Persidengimų aptikimas | {{ui:Susikirtimai}} |
| Komponento judesio stebėjimas perkeliant | Vilkite sukamosios ar slankiosios jungties kampo ar poslinkio slankiklį; {{ui:Patikrinti judesį dėl susikirtimų}} jį perbraukia. Detalei be jungties: **Perkelti ranka** (rodyklės tempimui arba įvestos reikšmės) |
| Matuoti / tikrinti | {{ui:Vaizdai}}, tada {{ui:Matuoti}} ({{key:M}}): atstumai, kampai, spinduliai, plotai; {{ui:Masės savybės}} |
| Išskleista peržiūra, BOM | Surinkime, kai nieko nepasirinkta: **Išskleistos peržiūros** ir **Medžiagų specifikacija** dešiniajame skydelyje |
| Masės savybės | **Detalė** laukelis: tūris, paviršiaus plotas, dydis, briaunotojo kieto kūno (apvaliosiose detalėse šiek tiek mažiau). Masės nėra: medžiagų dar nėra |
| Įrašyti, Įrašyti kaip STEP | {{ui:Įrašyti}} atsisiunčia `.partcraft.json`; {{ui:Eksportuoti}} turi STL, 3MF, tikslųjį STEP (AP242 arba AP214), briaunotąjį STEP, DXF ir PDF brėžinį |
| Padaryti brėžinį iš detalės | {{ui:Brėžinys}}: automatinis A3 lapas su trimis vaizdais, izometrija, vienu pjūviu, viena detale, bazėmis, elementų valdymo rėmeliais ir apdailos simboliais. Matuojami tik bendri dydžiai |
| Vidurinio mygtuko vilkimas sukimui | **Vilkimas kairiuoju** čia sukasi. Vilkimas vidurio ar dešiniuoju slenka. Ratukas keičia mastelį žymeklio vietoje |
| Vaizdo orientacija, Statmenai į | {{ui:Vaizdai}} meniu; {{ui:Statmenai į}} pasirinktam paviršiui, plokštumai ar eskizui |
| Keisti mastelį pagal dydį (F) | {{key:F}}, arba {{ui:Pritaikyti}} (eskize {{key:F}} yra suapvalinimo įrankis) |
| Dešiniojo mygtuko meniu | Nėra. Vilkimas dešiniuoju slenka; eskize dešiniu mygtuku baigiama linijų grandinė |

:::tip
Jei rankos jau įpratusios prie SolidWorks, pasirinkite meniu stilių {{ui:Elementų medis}} skiltyje {{ui:Parametrai}} › {{ui:PartCraft}} › {{ui:Meniu, klavišai ir pelė}}: juostelė su skirtukais Elementai, Eskizas, Paviršiai, Įvertinimas, Brėžinys, Surinkimas ir Vaizdas; vidurinis mygtukas sukasi aplink, {{key:Shift}} ir vidurinis mygtukas slenka, o kairysis tik pasirenka. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).
:::

## Skirtumai, dėl kurių žmonės klysta

**Visas eskizas yra profilis.** Ištempimas ir sukimas naudoja kiekvieną uždarą kilpą eskize. Elementui negalima pasirinkti vieno eskizo ploto ar vieno kontūro. Naudokite po vieną eskizą kiekvienam elementui.

**Kurį eskizą naudoja elementas.** Elementas naudoja eskizą, kurį ką tik uždarėte, arba istorijoje pasirinktą. Kai nieko nepasirinkta, imamas naujausias eskizas, kurio dar nenaudoja joks elementas. Jei gavote ne tą, pasirinkite tinkamą eskizą ir vėl pasirinkite elementą.

**Pakeitimai taikomi rašant.** Nėra elemento dialogo su Gerai ir Atšaukti. Kiekvienas skaičius perstatomas iš karto, o atgal grįžtama su {{key:Mod+Z}}. Anuliavimo sąrašas apima eskizų redagavimą, elementus ir nustatymus vienodai.

**Perteklinis apibrėžimas niekada neleidžiamas likti tyliai.** Nėra valdomų (informacinių) matmenų. Matmuo, kurį jau nustato kiti ryšiai, pranešamas kaip perteklinis („jau numanomas. Ištrinkite jį.“). Prieštaraujantis palieka geometriją nepaliestą ir tampa raudonas. Ištrinkite vieną arba anuliuokite.

**Perstūmimai ir sujungimai dar nesukurti; suapvalinimai, nuožulninimai, išdrožimai ir nuolydžiai turi apribojimų.** Ši PartCraft versija visas detales kuria su tinklelio branduoliu; būsenos juostos žetonas visada rodo „Tinklelio branduolys“. Suapvalinimai ir nuožulninimai veikia su tiesiomis briaunomis tarp dviejų plokščių paviršių, o kur suapvalinimai susitinka kampe, jie sujungiami įstrižai, o ne susilieja. Išdrožimai atidaromi, o nuolydžiai pasvirę tik ties plokščiais paviršiais. Elementai, kuriems reikalingas tikslusis branduolys, lieka paspaudžiami, bet pasirinkus rodo „dar nesukurta“. Žr. [Tinklelio branduolys](topic:solid-kernels) ir [Kas dar nesukurta](topic:not-built-yet).

**Du mygtukai, pavadinti Suapvalinti.** Eskize {{ui:Suapvalinti}} ({{key:F}}) suapvalina eskizo kampą. Detalėje {{ui:Suapvalinti}} Elementų grupėje suapvalina kietųjų kūnų briaunas (šioje versijoje – tiesias briaunas tarp plokščių paviršių). Šioje versijoje nėra perstūmimo ar sujungimo: žr. [Kas dar nesukurta](topic:not-built-yet).

**Skylėms reikia laisvų taškų.** {{ui:Skylė}} gręžia taškuose, sukurtuose įrankiu Taškas. Apskritimų centrai ir linijų galai neskaičiuojami.

**Per visą skirta tik išpjovoms.** Išsikišimui reikia gylio. Kol kas nėra galo sąlygų „iki viršūnės / paviršiaus / kito“.

**Kietasis kūnas yra briaunotas.** Tinklelio branduolys apvalius paviršius kuria iš plokščių briaunų, todėl vaizdas, tūriai, STL ir 3MF eksportai visi sudaryti iš jų: **Kreivės** detalės skydelyje padaro juos smulkesnius. Tikslusis STEP eksportas nėra toks: jis įrašo apvalius paviršius jų tikrose formose.

**Tik milimetrai.** Coliams nustatymo kol kas nėra. Įvesdami colių dydžius, dauginkite iš 25.4.

**Y rodo aukštyn.** Priekinė plokštuma žiūri į jus, o Viršutinė žiūri į detalę iš viršaus, kaip ir tikitės, tačiau pasaulio aukštyn rodanti ašis yra Y. STL, 3MF ir tikslieji STEP eksportai pasukami taip, kad Z rodytų aukštyn; briaunotasis STEP išlaiko Y aukštyn.

**Sąsajos yra paviršiai, ne geometrijos poros.** Jungtis visada prasideda nuo dviejų plokščių paviršių, sudėtų paviršius prie paviršiaus. Kaiščiui skylėje pasirinkite plokščią paviršių aplink skylę ir kaiščio petį, tada nustatykite **Centras** į skylės ašį ir kaiščio sukimo ašį. Detalės, nepasiektos jungčių, lieka ten, kur buvo įterptos; jų vilkti negalite. Kilpoje esančios jungtys neišsprendžiamos.

**Įrašymas – tai atsisiuntimas.** Nėra failo, kurį nuolat perrašytumėte. Kiekvienas įrašymas yra naujas failas jūsų atsisiuntimų aplanke. Pirmiausia pavadinkite detalę ir laikykite failus projekto aplanke.

**Nėra kontekstinių meniu, nėra komandų valdymo skirtukų.** Viskas yra įrankių juostoje ir dešiniajame skydelyje, o įrankių juosta keičiasi priklausomai nuo to, ką darote: eskizo įrankiai rodomi tik eskize, surinkimo įrankiai – tik surinkime.

**Eskize klavišai – tai vienos raidės.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} ir {{key:S}} pasirenka įrankius be modifikatoriaus. Žr. [Klavišai ir pelė](topic:keyboard).
