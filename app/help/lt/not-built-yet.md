---
title: Kas dar nėra įgyvendinta
summary: Viskas, ko ši PartCraft versija dar nedaro – nuo sukamųjų perstūmimų iki colių rodymo, brėžinio matmenų ir subsurinkimų – ir ką daryti vietoje šiandien.
keywords: trūksta, dar ne, ribos, apribojimai, veiklos planas, tikslus branduolys, suapvalinimas, nuožulninimas, apvalkalas, perstūmimas, sujungimas, STEP importas, imitavimas, gamyba, sukamasis perstūmimas, galo liestinė, lygtys, coliai, brėžinio matmenys, subsurinkimai, debesis, planšetė, telefonas
from: 97b10a29
---

PartCraft yra ankstyvoji versija. Šis puslapis išvardija, ko ji dar nedaro, kad neieškotumėte, ir ką daryti šiandien. Datų čia nėra.

## Reikia tikslaus branduolio

Ši versija visas detales kuria su tinklo branduoliu (žr. [Tinklo branduolys](topic:solid-kernels)). Viskas žemiau reikalauja tikslaus geometrijos branduolio, kurio ši versija dar neturi. Detalės, išsaugotos su šiomis funkcijomis, atsidaro: funkcijos lieka istorijoje, pažymėtos kaip neįgyvendintos, ir išsaugomos įrašant.

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| {{ui:Suapvalinti}} ir {{ui:Nuožulninti}} ant apvalių briaunų; suapvalinimai, kurių spindulys kinta palei briauną; suapvalinimai, glotniai sujungti ten, kur susitinka (tinklo branduolys juos nupjauna įstrižai) | Suapvalinimas ir nuožulninimas veikia su tiesiomis briaunomis tarp plokščių paviršių; kitus kampus suapvalinkite eskize prieš išspaudžiant ({{ui:Suapvalinti}} eskize, {{key:F}}) |
| {{ui:Išdrožti}} išlenktų paviršių atidarymas; sienelės skirtingų storių | Atidarykite plokščius paviršius; pridėkite medžiagos išspaudimais ten, kur siena turi būti storesnė |
| {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungimas (loft)}}, {{ui:Nuolydis}} ant išlenktų paviršių; išspaudimas iki paviršiaus, kito paviršiaus arba viršūnės; nuolaidūs išspaudimai | Išspauskite arba apsukite, prireikus žingsniais; išspauskite iki gylio, kurį išmatuojate |
| {{ui:Briauna}}, {{ui:Pagrindinė atlenkta briauna}}, {{ui:Briaunos atlenkimas}} ir plokščios išklotinės | Išspauskite plokštę arba briaunos profilį |
| Paviršiai: {{ui:Forma}} įdėjimas į detalę, {{ui:Lopas}}, {{ui:Paviršiaus perėjimas}}, {{ui:Gordono paviršius}}, {{ui:Siūti}}, {{ui:Storinti}}, {{ui:Paviršiaus poslinkis}}, {{ui:Pratęsti paviršių}}, {{ui:Apkirpti paviršių}} | Nepasiekiama |
| Keli kūnai: {{ui:Sujungti}}, {{ui:Perkelti kūną}}, {{ui:Keisti kūno mastelį}}, {{ui:Kelio masyvas}}, elementai, kurie kuria naują kūną | Vienas kietasis kūnas; masyvai ir veidrodinio kopijavimo funkcijos |
| Eskizai, plokštumos, ašys ir taškai ant paviršių, kuriuos gali rasti tik tikslus branduolys (paviršius, sukurtas suapvalinimu, skylės siena, importuoto kieto kūno paviršius) | Eskizuokite ant pagrindinių plokštumų, atskaitos plokštumų ir plokščių išspaudimų bei apsukimų paviršių |
| Sugeneruoto dizaino rezultatas, atidarytas kaip detalė arba pridėtas prie jos (tampa importuotu kietuoju kūnu) | Atsisiųskite rezultatą kaip STL arba STEP |
| Redaguoti atidaryto STEP failo kreivius paviršius kaip tikslius paviršius; tikslus STEP splainų, perstūmimo ir apsukimo paviršių iš STEP failo; splainų šonai, modeliuoti sriegiai, STL / OBJ / 3MF kūnai ir surinkimai; STEP kitiems detalių modeliavimo įrankiams | {{ui:Atidaryti}} nuskaito STEP kaip trikampius ir išlaiko failo plokščius paviršius, cilindrus, kūgius, sferas ir tórus eksportui ([Atidaryti STEP failą](topic:import-step)); {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo kiekvieną analitinį paviršių tiksliai ir laiko juos facetomis ([Eksportas](topic:export-files#for-other-cad-programs-step)); makrokomanda kitam detalių modeliavimo įrankiui vis dar įrašo |
| Tikri lankai brėžinio vaizduose | Vaizdai ir pjūvio vaizdai nubraižomi iš facetų |
| Tikri tūriai, plotai ir atstumai | {{ui:Matuoti}} rodo facetuoto kieto kūno skaičius, šiek tiek mažesnius apvaliose detalėse; smulkesnis nustatymas **Kreivės** priartina juos |

Kai kurios toliau pateiktų lentelių eilutės siūlo vieną iš šių funkcijų kaip būdą apeiti ką nors kita. Tie pasiūlymai taikomi, kai grįš tikslus branduolys.

## Elementai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Paviršių suapvalinimai, pilni apvalinimai, suapvalinimai su spinduliais, nustatytais taškuose palei briauną | Pastovus arba tiesiškai kintantis {{ui:Suapvalinti}}; keli suapvalinimo elementai |
| Sienelės su skirtingais storiais | Vienas {{ui:Išdrožti}} storis; pridėkite medžiagos išspaudimais ten, kur siena turi būti storesnė |
| Nuolydis ant laisvos formos (splainų) paviršių | {{ui:Nuolydis}} veikia plokščiuose, cilindriniuose ir kūginiuose paviršiuose |
| Sukamieji perstūmimai, plonasienis ir paviršių perstūmimai; galo liestinumas {{ui:Sujungimas (loft)}} elemente; sujungimas su viena vedančia linija; splainų takai | {{ui:Perstūmimas išilgai kelio}} su fiksuota orientacija arba galo mastelio keitimu; sujungimas su dviem ar daugiau vedančiųjų linijų: žr. [Perstūmimas, sujungimas ir nuolydis](topic:sweep-loft-draft) |
| Briaunos iš lankų arba splainų; briaunos, išaugusios kvadratu eskizo atžvilgiu (iš vaizdo iš viršaus); nuolydis briaunose; kelios briaunos iš vieno eskizo | {{ui:Briauna}} iš vienos linijų grandinės jos plokštumoje: žr. [Briaunos ir kampinės atramos](topic:rib) |
| „Iki“ iki išlenkto paviršiaus, „iki kito“ sustojant ant išlenkto paviršiaus | Iki plokščio paviršiaus arba atskaitos plokštumos |
| Pagilintos (kontrgręžtos) skylės, coliniai ir vamzdžių sriegiai, konusiniai sriegiai, sriegių išbėgimai ir nuskurdintos sriegių pradžios | Pagilinimas su nedideliu gyliu; ISO metriniai ir trapecijiniai sriegiai, kosmetiniai arba modeliuoti: žr. [Sriegiai ant velenų ir skylių, nubraižyti arba modeliuoti](topic:threads) |
| Plonų sienelių išspaudimai | Nubraižykite abi profilio sienas |
| Kopijos pasikartojimų praleidžiamos po vieną, užpildymo masyvai | Naudokite atskirus elementus; masyvai palei kreivę: {{ui:Kelio masyvas}} |
| Kopijavimo masyvai, veidrodžiai, suapvalinimai, nuožulninimai, paviršiai ir importuoti kietieji kūnai | Nukopijuokite eskizą arba elementą, ant kurio jie pagrįsti, arba padarykite jam masyvą |
| Tikslus (G1) liestinumas formos ypatingais taškais; formos plokštelių sujungimas į didesnius paviršius | Padidinkite formos **Lygį**: aproksimuotos plokštelės tampa mažesnės; žr. [Laisvos formos su Forma](topic:form-surfaces) |
| Kelios atskiros uždaros formos dalys viename elemente; tiltai tarp formų | Viena uždara dalis kiekvienam Forma elementui; jungti jas su {{ui:Sujungti}} |
| Paviršinių kūnų pasirinkimas vaizde (išskyrus apkirpimo ir lopo taškus); paviršių suapvalinimai; atvirkštinis apkirpimas; G2 lopai; Gordono paviršiai, liečiantys išlenktus kaimynus (liečiantys plokštumas ir plokščius paviršius įgyvendinti) | Pasirinkite juos pagal pavadinimą elemento skydelyje; pirmiausia sustorinkite, tada suapvalinkite kietąjį kūną |
| Kūnų sąrašas istorijoje; paslėptų kūnų paliekimas iš eksportų | Pervardykite ir slėpkite kūnus detalės skydelio kūnų sąraše; ištrinkite arba blokuokite elementą, kuris sukūrė kūną, kad jis būtų paliktas |
| Ne vienodas mastelis, kuris išlaiko cilindrus ir kūgius analitinius; ne vienodas paviršių poslinkių mastelio keitimas | {{ui:Keisti kūno mastelį}} padaro išlenktus paviršius uždarais B-splainais (0.0000004 mm tikslumu); vienodas mastelis išlieka tikslus |
| Paviršinių kūnų sujungimas; Minkovskio sumos | Pirmiausia {{ui:Siūti}} arba {{ui:Storinti}}, tada {{ui:Sujungti}} |
| Tolerancijų analizė: grandinės su posūkiais kampuose (2D ir 3D vektorių ciklai), jautrumai, apskaičiuoti iš geometrijos, Monte Karlo su kitais pasiskirstymais, dydžio tolerancijos eskizo matmenims, papildoma tolerancija pagal medžiagos sąlygą | {{ui:Nuokrypių grandinė}} surinkime: viena kryptimi, blogiausias atvejis ir RSS, įvestos tolerancijos, paimtos iš antraštės bendrosios tolerancijos arba iš GD&T rėmelių: žr. [Tolerancijų grandinės](topic:tolerance-stackup) |
| Išdėstymas: pjovimo tvarka ir įvedimo linijos, bendrų briaunų pjovimas kartą, detalės, kurias reikia laikyti kartu; ritinių likučiai, ruošiniai, bendrai naudojami projektuose | {{ui:Išdėstyti plokščias detales lakštuose…}} su tarpais, paraštėmis, pasukimais ir pluošto kryptimi: žr. [Išdėstyti plokščias detales lakštuose](topic:nest-flat-parts); likę lakštai išsaugomi ir naudojami pirmiausia: žr. [Išsaugoti ir naudoti atraižas](topic:nest-offcuts); planuokite pjūvį savo pjovimo įrangos programinėje įrangoje |
| Lankstinis metalas: užlankstymai, pastumimai, įstrižos ir kontūro briaunos; briaunos ant išlenktų kraštų arba ant lenkto pagrindinio atlenkimo paviršių; eskizuoti lenkimai; kampų uždarymai; formavimo įrankiai; kieto kūno vertimas į lankstinį metalą; lenkto pagrindinio atlenkimo plokštė su pjūviais; lenkimo lentelės | {{ui:Pagrindinė atlenkta briauna}} (plokštė arba lenktas profilis), {{ui:Briaunos atlenkimas}} ant tiesių plokštės briaunų su lenkimo atleidimais ir plokščia išklotinė su K faktoriumi: žr. [Lankstinis metalas](topic:sheet-metal) |
| Nuolydžio analizė surinkimams; skiriamosios linijos paieška; sienelių storio analizė | {{ui:Nuolydžio analizė}} detalei Dizaino darbo srityje: žr. [Nuolydžio tikrinimas liejimui](topic:draft-analysis); atidarykite kiekvieną surinkimo detalę, kad patikrintumėte |

## Eskizai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Elipsės, liestiniai lankai, konikos, splainai su nustatytu laipsniu arba svoriais (NURBS) | Splainai (kubiniai), lankai ir apskritimai su liestinės ryšiais |
| Splaino taškas (ryšys), kreivumo (G2) ryšiai | Padėkite paties splaino tašką ten, kur jis turi praeiti |
| Splainų poslinkio kopijos, kurios seka vėlesnius pakeitimus; poslinkiai grandinių su aštriais splaino kampais | Poslinkite dar kartą po pakeitimo; pirmiausia suapvalinkite kampą |
| Kopijų masyvai, išlikę susieti su originalu; masyvai palei kreivę | Padarykite masyvą dar kartą po pakeitimo |
| Laisvųjų formų arba pasvirusių apskritiminių briaunų projektavimas; projektuota geometrija, kuri seka detalę | Projektuokite tiesias ir lygiagrečias apskritimines briaunas, tada matuokite |
| Varomi (atskaitos) matmenys | Nuskaitykite dydžius iš skydelio arba detalės duomenų |
| Kolinearūs ryšiai | Lygiagretumas su 0 atstumu |
| Įklijavimas į kitą programą (sistemos iškarpinė) | Eksportuokite DXF, STEP, STL arba 3MF |
| Lankų, santykinių ar polinių koordinačių įvedimas | Įveskite linijas ir apskritimus; lankus braižykite įrankiu {{ui:Lankas}} |
| Geometrijos pasirinkimas be žymeklio | Reikia spustelėjimo arba palietimo |

## Parametrai ir vienetai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Konfigūracijos, keičiančios medžiagas; CSV projektavimo lentelė, išjungianti elementus | Konfigūracijos nustato parametrus ir įjungia bei išjungia elementus: žr. [Konfigūracijos ir projektavimo lentelės](topic:design-tables); `partcraft variants` sukuria išsaugotas konfigūracijas pagal pavadinimą, įskaitant išjungtus elementus: žr. [Variantų paketo sukūrimas iš konfigūracijų](topic:variant-pack) |
| Naujausių elementų savo skydelių lygtys (plokštuma, perstūmimas, nuolydis ir panašūs) | Rašykite jas scenarijuje arba su `partcraft set` ([Scenarijai ir komandinė eilutė](topic:scripts-and-cli)) |
| Detalė, rodoma coliais | Dydžiai rodomi milimetrais; įveskite `2in` skaičių lauke arba išraiškoje, ir tai taps 50.8 |

## Failai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Importuoto STEP kieto kūno savo elementų redagavimas (jis ateina be istorijos) | Pridėkite arba išpjaukite medžiagą savo elementais |
| Spalvų, pavadinimų, surinkimo struktūros ir PMI nuskaitymas iš STEP | Nepasiekiama |
| glTF, OBJ, IGES, Parasolid eksportas; 3D detalės DWG (tik variantų paketas įrašo DWG: brėžinio lapą) | STL arba 3MF tinkleliams; STEP kietiesiems kūnams; DXF 2D |
| IGES, DXF arba kitų programų failų atidarymas (`.3dm` failai atsidaro kaip vienas kūnas: [Atidaryti .3dm modelį kaip kietąjį kūną](topic:open-3dm-files)) | Prašykite STEP arba uždaro STL, OBJ ar 3MF tinklelio: [Atidaryti STL, OBJ arba 3MF](topic:open-meshes) |
| Surinkimo struktūra (medis su detalių pavadinimais) eksportuotame STEP | Surinkimo STEP yra vienas sudėtinis kūnas iš išdėstytų kietųjų kūnų |
| Įrašymas į pasirinktą aplanką be naršyklės atsisiuntimo | Įjunkite „klausti, kur įrašyti“ naršyklės atsisiuntimo nustatymuose |

## Brėžiniai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Matmenys, išeinantys už trijų bendrųjų dydžių (skylių dydžiai, padėtys, dydžių tolerancijos) | Pažymėkite PDF arba eksportuokite DXF ir pamatuokite 2D CAD programoje |
| Daugiau nei vienas pjūvis arba viena detalė; suderinti, išlaužti ir pagalbiniai vaizdai | Vienas pjūvis ir viena detalė kiekviename brėžinyje |
| Laisvas tekstas, pastabos ir lentelės lape (išskyrus antraštės ir peržiūros blokus) | Apdailos pastaba arba tekstas, pridėtas PDF |
| Pirmo kampo projekcija, judantys vaizdai, portretiniai lapai | Trečias kampas, automatinis išdėstymas, gulsčiai lapai A4–A0 ir ANSI A–E |
| Gyvas pjūvio vaizdas: keli planai arba pjūvio dėžė vienu metu, pjūvio kontūras, pjūvio išsaugojimas faile | Vienas planas vienu metu iš {{ui:Vaizdai}} › {{ui:Pjūvio vaizdas}}; žr. [Pažvelkite į vidų su pjūvio vaizdu](topic:section-view) |
| Surinkimo brėžiniai su daugiau vaizdų, matmenimis arba judinamomis žymomis | Vienas izometrinis (arba išskleistas) vaizdas su automatiniais numeriais ir detalių sąrašu |
| GD&T ir apdailos simbolių kopijavimas bei įklijavimas | Kiekvieną dėkite su {{ui:Bazė}}, {{ui:Rėmelis}} arba {{ui:Apdaila}} |
| Vadovai: STEP failai iš Illustrate {{ui:Iš kito failo…}}, modelis, perduotas tiesiai iš ModelCraft ar BimCraft, paveikslėliai kelių spindulių sekimo kokybe, interaktyvus 3D PDF viduje | Atidarykite STEP Dizaino darbo srityje ir pradėkite vadovą {{ui:Iš atidarytos detalės}}; įrašykite modelį kaip glTF (.glb); PNG 3D vaizdo paveikslėliai; interaktyvus 3D failas: žr. [Pradėkite vadovą Illustrate](topic:illustrate) |

## Surinkimai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Dantračių, dantinės juostos (rack), kulačių ir sraigtų jungtys; rutulinė jungtis, ribota kūgiu; jungtys ant išlenktų paviršių arba tarp taškų | Standžios, sukamosios, slankiklio, cilindrinės, plokščios, rutulinės ir kaištis-angos jungtys ant plokščių paviršių, kiekviena reikšmė su savomis ribomis: žr. [Surinkimo sudarymas](topic:build-assembly) |
| Išskleidimo žingsniai, kurie sukasi detales, ir detalių vilkimas, kurį nustato jungtys | Tiesūs išskleidimo žingsniai; pašalinkite jungtį, kad detalę perkeltumėte ranka |
| Subsurinkimai | Tik vienas detalių lygis |
| Dantračiai, kulačiai, kontaktas | Nepasiekiama |

## Gamyba

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| 3D adaptyvusis valymas ir poslinkio šiurkštinimas 3D; apdaila pagal vandens liniją, pieštuką, spindulius ir spiralę; adaptyvūs perėjimai, parašyti kaip lankai | 3D šiurkštinimas tiesiomis eilėmis ir likučio apdirbimas: žr. [3D šiurkštinimas ir likučio apdirbimas](topic:rough-3d); Lygiagretumas ir Banguotumas apdaila: žr. [3D apdaila](topic:finish-3d); 2.5 ašies paviršius, kišenė, 2D adaptyvusis, kontūras, gręžimas ir nuožulninimas: žr. [Įrankių trajektorijos ir G-kodas](topic:manufacture) |
| Šoninis pjovimas (swarf), srautinių linijų ir daugiaašio šiurkštinimo takai, pasvirusios darbo plokštumos kodai (G68.2), laikiklio ir staklių susidūrimų tikrinimas; 5 ašių ir sukamųjų pjūvių imitavimas | Pasviręs įrankis bet kuriai operacijai, 5 ašių apdaila rutuliniu galiniu frezu ir 4 ašies sukamoji apdaila: žr. [4 ir 5 ašių apdirbimas](topic:multi-axis) |
| Vidinis tekinimas ir vidiniai sriegiai staklėse, G71/G76 ciklai, lankai tekinimo takuose, gyvieji įrankiai, papildomas špindelis | Išorinis tekinimas: nuvalyti, šiurkštinti, apdailinti, griovelis, atskirti, sriegis, gręžti centre: žr. [Tekinimas tekinimo staklėse](topic:turning) |
| Kampo arba kampinio taško zondavimas, įrankio nustatymo prietaisas, dydžio matavimas pagal toleranciją | Paviršiaus, šono, skylės arba išsikišimo zondavimas darbinio poslinkio nustatymui: žr. [Zondavimas](topic:probing) |
| Laikiklio ir kočio susidūrimų tikrinimas | Stebėkite rievių ilgio įspėjimus ir tikrinkite valdiklio imitatoriuje |
| Įrankio tarnavimo laiko ir subprogramų ciklai postprocesoriuje; kitų programų postprocesorių failų įkėlimas | Rašykite arba keiskite postprocesorių PartCraft savo formatu: žr. [Redaguojami postprocesoriai](topic:post-processors) |
| Coliniai G-kodai (G20) | Tik milimetrai (G21) |

## Imitavimas ir generatyvinis projektavimas

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Netiesiniai tyrimai: takumas, dideli nuokrypiai, kontaktas tarp detalių, nuovargis | Tiesinė statinė ir natūralieji dažniai: žr. [Stiprumo ir nuokrypio tikrinimas](topic:simulation); išlaikykite saugos koeficientą gerokai virš 1 |
| Netiesinis išlinkimas (nelygumai, poišlinkiniai, staigus persijungimas) | Tiesiniai išlinkimo apkrovos koeficientai su didele riba: žr. [Šiluma, terminis įtempis ir išlinkimas](topic:thermal-and-buckling) |
| Spinduliavimas tarp paviršių (vaizdo koeficientai), kontaktinė varža, nuo temperatūros priklausančios medžiagos, inercija terminiame įtempyje (terminio smūgio bangos) | Spinduliavimas į aplinką, stacionarus arba kvazistatinis terminis įtempis laikui bėgant, pastovios savybės: žr. [Šiluma, terminis įtempis ir išlinkimas](topic:thermal-and-buckling) |
| Automatinis tinklelio patobulinimas pereinamiesiems šilumos ir terminės apkrovos tyrimams; tinklelio grublinimas, kur paklaida maža; tikslas lokaliam dydžiui (didžiausias įtempis viename taške) | **Patobulinti automatiškai** statiniams, išlinkimo, natūraliųjų dažnių ir stacionarios šilumos tyrimams, pagal paklaidą visoje detalėje: žr. [Stiprumo ir nuokrypio tikrinimas](topic:simulation); kitu atveju sumažinkite elemento dydį |
| Ramsčio ir varžtų apkrovos, nuotolinės jėgos, momentai, spyruoklės, nustatyti poslinkiai | Jėgos ir slėgiai paviršiuose, gravitacija; fiksuoti ir be trinties paviršiai |
| Surinkimų modeliavimas; medžiagos, kurių savybės skiriasi pagal kryptį (spausdinimo sluoksniai, kompozitai) | Viena detalė, viena izotropinė medžiaga |
| Keli sprendiklio srautai tetraedriniams tyrimams, šilumos perdavimui ir generatyviniam projektavimui; srautai puslapyje, kuris nėra kryžminės kilmės izoliuotas | Vokselių tyrimai, išlinkimas, įtempis laikui bėgant ir laminarinis srautas naudoja srautus, kur tai leidžia puslapis: žr. [PartCraft nustatymai](topic:settings) |
| Turbulentinis srautas projektiniu tikslumu (Spalart–Allmaras modelis įtrauktas kaip eksperimentinis: vamzdžio trintis 30–34 % per aukšta, atgalinio žingsnio prisijungimas 21–39 % per trumpas; planuojama: smulkesni langeliai prie sienelių), šiluma sraute, nestacionarus (laiko tikslus) srautas, laisvieji paviršiai, nenewtoniški skysčiai, sukamosios detalės | Laminarinis, stacionarus, izoterminis Niutono skysčio srautas arba eksperimentinis turbulentinis modelis kokybiniams vaizdams: žr. [Srauto modeliavimas](topic:flow-simulation); skydelis įspėja, kai Reinoldso skaičius viršija laminarinę ribą |
| Įtempių ribos ir gamybos taisyklės (nuokalnės, frezavimo kryptys) generatyviniame projektavime; keli medžiagos vienoje formoje | Standžiausia forma tūriui; patikrinkite rezultatą modeliavime: žr. [Formos augimas iš apkrovų](topic:generative-design) |
| Rezultatas kaip redaguojamas (lygus, parametrinis) kietasis kūnas | STL, facetuotas STEP arba detalė su rezultatu kaip importuotu facetuotu kietuoju kūnu |
| Elektros mašinų projektavimas: rotorius sukasi statoriuje, sukimo momentas nuo kampo, įsisotinantis plienas, magnetai, prarandantys stiprumą už lūžio taško, sūkuriniai srovės ir geležies bei vario nuostoliai; magnetiniai laukai 3D arba išlenktuose tinkluose | Tiesinė 2D magnetostatika tinkle analizės bibliotekoje: ritės, geležis, nuolatiniai magnetai ant savo atsitraukimo tiesės, tarpai, induktyvumas ir trauka: žr. [Magnetiniai laukai 2D](topic:magnetic-fields-2d) |

## Scenarijai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Pagalba užvedus pelę, stabdymo taškai ir žingsniavimas scenarijų redaktoriuje | Paieška, sulankstymas ir užbaigimas yra (žr. [Rašykite ir vykdykite scenarijus](topic:craftscript)); likusiam – savas redaktorius: {{ui:Įrašyti}} ir {{ui:Atidaryti}} Scenarijų grupėje perkelia scenarijus į vidų ir iš jo; įmontuotos funkcijos išvardytos [CraftScript kalboje](topic:craftscript-language) |
| Stabdymo taškai ir žingsniavimas per scenarijų | `disp` ir `fprintf` kelyje; {{key:Mod+Enter}} paleidžia kelias pažymėtas eilutes vienu metu |
| Laukai ir grafikai, kuriuos scenarijus rodo, nupiešti Dizaino darbo srityje; scenarijai, keičiantys detalės parametrus | Jie rodomi Scenarijų darbo srityje; scenarijai nuskaito parametrus su `param` (žr. [Rašykite ir vykdykite scenarijus](topic:craftscript)) ir keičia juos skirtuke {{ui:Parametrai}} |
| Paveikslėliai ir lentelės šalia grafikų; grafiko redagavimas (mastelis, ašių ribos) prieš įrašant | Šalia rodomi grafikai; išsaugokite grafiką kaip PNG, SVG arba CSV ir baikite kitur |
| numpy ir kiti Python paketai; Python neprisijungus; Python sulankstymas redaktoriuje; Pascal Script | Python standartinė biblioteka, CraftScript ir Lua: žr. [Scenarijai Python](topic:craftscript-python) |
| Lua funkcijų perdavimas įmontuotoms funkcijoms; bibliotekos funkcijos kvietimas iš Lua pagal vardą, sudarytą scenarijui vykdant | Parašykite bibliotekos funkcijos vardą scenarijuje (`cs.static_tet(…)`) arba kvieskite ją iš CraftScript scenarijaus |

## Programėlė

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Debesies įrašymas, bendrinimas ir versijų istorija | Dar nepasiekiama. Įrašykite failus į kompiuterį ir laikykite versijas pagal pavadinimą |
| PartCraft kaip įdiegta programa iPad ir iPhone | Naudokite PartCraft įrenginio naršyklėje; Android ir darbalaukyje ji taip pat veikia CadCraft Studio (getcadcraft.com/download) |
| Kontekstiniai (dešiniuoju pelės klavišu) meniu | Įrankių juosta ir dešinysis skydelis |
| Visiškai neprisijungus nuo švaraus paleidimo | Tik tada, kai programa įrašyta naudoti neprisijungus: žr. [Darbas neprisijungus](common:offline) |

Apie tai, ko labiausiai pasigendate, praneškite per svetainės palaikymo puslapį: tai lemia, kas bus toliau.

## Inžinierius (generatoriai ir laukai)

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Antgaliai, jungtys ir fitingai ant sugeneruoto šilumokaičio; temperatūros kreivės medžiagos stiprumui; vamzdžių nuostoliai kolektoriuje | Generatoriai sukuria branduolį ir vamzdžius; pridėkite fitingus Dizaine; naudokite medžiagos kambario temperatūros duomenis su saugos koeficientu |
| Generatorių pridėjimas iš priedų katalogo vienu paspaudimu | {{ui:Atidaryti}} Inžinieriaus darbo srityje prideda generatorių iš failo |
| Lauko failas smulkesnis nei generatoriaus vokselio dydis; `.vdb` failų nuskaitymas | Išsaugokite smulkesnį lauką iš scenarijaus; `.vdb` yra rašomas, bet ne skaitomas |
| Slėginių indų kodo skaičiavimai | Vadovėlinės plono ir storo sienelės formulės su pasirinktu saugos koeficientu; ne kodo riba |
| Generatoriai kitoms programoms | Šioje versijoje tik PartCraft |
