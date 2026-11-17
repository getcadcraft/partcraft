---
title: Kas dar neįgyvendinta
summary: Viskas, ko ši PartCraft versija dar nedaro — nuo sukimo perstūmimų iki colių rodymo, brėžinio matmenų ir subsurinkimų — ir ką šiandien daryti vietoj to.
keywords: trūksta, dar ne, ribos, apribojimai, planas, tiksli branduolys, suapvalinimas, nuožulninimas, kevalas, perstūmimas, sujungimas, STEP importas, imitavimas, gamyba, sukimo perstūmimas, galo liestinumas, paviršiaus suapvalinimas, lygtys, coliai, brėžinio matmenys, subsurinkimai, debesis, planšetė, telefonas
from: 9b868162
---

PartCraft yra ankstyva versija. Šis puslapis išvardija, ko ji dar nedaro, kad neieškotumėte to, ir ką daryti šiandien vietoj to. Čia nė vienas punktas nėra datuotas.

## Reikia tikslaus branduolio

Šioje versijoje visas detales kuria tinklinis branduolys (žr. [Tinklinis branduolys](topic:solid-kernels)). Viskas toliau reikalauja tikslaus geometrijos branduolio, kurio ši versija dar neturi. Detalės, išsaugotos su šiais elementais, vis tiek atsidaro: elementai lieka istorijoje, pažymėti kaip neįgyvendinti, ir išsaugant jie išlieka.

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| {{ui:Suapvalinti}} ir {{ui:Nuožulninti}} ant apvalių kraštų; suapvalinimai, kurių spindulys kinta palei kraštą; suapvalinimai, glotniai susiliejantys ten, kur susitinka (tinklinis branduolys juos nupjauna įstrižai) | Suapvalinimas ir nuožulninimas veikia ant tiesių kraštų tarp plokščių paviršių; kitus kampus suapvalinkite eskize prieš ištraukdami ({{ui:Suapvalinti}} eskize, {{key:F}}) |
| {{ui:Išdrožti}} atveriant išlenktus paviršius; sienos skirtingo storio | Atverkite plokščius paviršius; medžiagą pridėkite ištraukimais ten, kur siena turi būti storesnė |
| {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungimas (loft)}}, {{ui:Nuolydis}} ant išlenktų paviršių; ištraukimas iki paviršiaus, kito paviršiaus ar viršūnės; kūginiai ištraukimai | Ištraukite arba apsukite, kur reikia, žingsniais; ištraukite iki gylio, kurį išmatavote |
| {{ui:Briauna}}, {{ui:Pagrindinė atlenkta briauna}}, {{ui:Briaunos atlenkimas}} ir plokščios išklotinės | Ištraukite plokštę arba briaunos profilį |
| Paviršiai: {{ui:Forma}} baigimas į detalę, {{ui:Lopas}}, {{ui:Paviršiaus perėjimas}}, {{ui:Gordono paviršius}}, {{ui:Siūti}}, {{ui:Storinti}}, {{ui:Paviršiaus poslinkis}}, {{ui:Pratęsti paviršių}}, {{ui:Apkirpti paviršių}} | Nėra |
| Keli kūnai: {{ui:Sujungti}}, {{ui:Perkelti kūną}}, {{ui:Keisti kūno mastelį}}, {{ui:Kelio masyvas}}, elementai, kurie sukuria naują kūną | Vienas kietasis kūnas; šablonai ir veidrodinės kopijos elementai |
| Eskizai, plokštumos, ašys ir taškai ant paviršių, kuriuos gali rasti tik tikslus branduolys (paviršius, sukurtas suapvalinimu, skylės siena, importuoto kietojo kūno paviršius) | Eskizai ant pagrindinių plokštumų, pagalbinių plokštumų ir ištraukimų bei apsukimų plokščių paviršių |
| Generatyvaus projektavimo rezultatas, atidarytas kaip detalė arba pridėtas prie jos (tampa importuotu kietuoju kūnu) | Atsisiųskite rezultatą kaip STL arba STEP |
| Atidarytų STEP failų išlenktų paviršių redagavimas kaip tikslių paviršių; tikslus STEP splainų, perstūmimu ir apsukimu sukurtų paviršių skaitymas iš STEP failo; splainų šonai; modeliuojami sriegiai; STL / OBJ / 3MF kūnai ir surinkimai; STEP kitiems detalių modeliavimo įrankiams | {{ui:Atidaryti}} skaito STEP kaip trikampius ir eksportui išlaiko failo plokščius paviršius, cilindrus, kūgius, sferas ir toro paviršius ([Atidaryti STEP failą](topic:import-step)); {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo kiekvieną analitinį paviršių tiksliai ir palieka juos kaip facetes ([Eksportas](topic:export-files#for-other-cad-programs-step)); makro kitam detalių modeliavimo įrankiui vis dar įrašo |
| Lankai brėžinio vaizduose nėra tikri | Vaizdai ir pjūvių vaizdai piešiami pagal facetes |
| Tikri tūriai, plotai ir atstumai | {{ui:Matuoti}} duoda facetinio kietojo kūno skaičius, apvaliose detalėse šiek tiek mažesnius; smulkesnis nustatymas **Kreivės** priartina juos prie tikrų |

Kai kurios žemiau esančių lentelių eilutės siūlo vieną iš šių elementų kaip būdą apeiti kažką kita. Tie pasiūlymai galios, kai grįš tikslus branduolys.

## Elementai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Paviršių suapvalinimai, pilnai apvalūs suapvalinimai, suapvalinimai, kurių spinduliai nustatyti taškuose palei kraštą | Pastovus arba tiesinis kintamas {{ui:Suapvalinti}}; keli suapvalinimo elementai |
| Kevalai su skirtingo storio sienomis | Vienas {{ui:Išdrožti}} storis; medžiagą pridėkite ištraukimais ten, kur siena turi būti storesnė |
| {{ui:Nuolydis}} ant laisvos formos (splainų) paviršių | {{ui:Nuolydis}} veikia plokštiems, cilindriniams ir kūginiams paviršiams |
| Perstūmimai sukant, plonasieniai ir paviršių perstūmimai; {{ui:Sujungimas (loft)}} elemento galo liestinumas; sujungimas su vienu vadovaujančiu bėgiu; splainų keliai | {{ui:Perstūmimas išilgai kelio}} su fiksuota orientacija arba galo mastelio keitimu; sujungimas su dviem ar daugiau vadovaujančių bėgių: žr. [Perstūmimas, sujungimas ir nuolydis](topic:sweep-loft-draft) |
| Briaunos iš lankų ar splainų; briaunos, išaugintos statmenai eskizui (iš viršutinio vaizdo); nuolydis ant briaunų; kelios briaunos iš vieno eskizo | {{ui:Briauna}} iš vienos linijų grandinės briaunos plokštumoje: žr. [Briaunos ir sutvirtinimai](topic:rib) |
| „Iki“ išlenkto paviršiaus, „iki kito“ sustojantis ant išlenkto paviršiaus | Iki plokščio paviršiaus arba pagalbinės plokštumos |
| Įleistos skylės, coliniai ir vamzdiniai sriegiai, kūginiai sriegiai, sriegių išėjimai ir nuskiltos sriegio pradžios | Įleidimas su nedideliu gyliu; ISO metriniai ir trapecijos sriegiai, kosmetiniai ar modeliuoti: žr. [Sriegiai velenuose ir angose, nubrėžti ar modeliuoti](topic:threads) |
| Plonų elementų ištraukimai | Nubrėžkite abi profilio sienas |
| Kopijos šablone praleidžiamos po vieną; užpildymo šablonai | Naudokite atskirus elementus; šablonai palei kreivę: {{ui:Kelio masyvas}} |
| Šablonų kopijavimas, veidrodžiai, suapvalinimai, nuožulninimai, kevalai ir importuoti kietieji kūnai | Nukopijuokite eskizą ar elementą, ant kurio jie sukurti, arba padarykite jo šabloną |
| Tikslus (G1) liestinumas ypatinguose formos taškuose; formos plokštelių sujungimas į didesnius paviršius | Padidinkite formos lygį: aproksimuotos plokštelės taps mažesnės; žr. [Laisvos formos su Forma](topic:form-surfaces) |
| Forma iš kelių atskirų uždarų dalių viename elemente; tiltai tarp formų | Viena uždara dalis viename {{ui:Forma}} elemente; jungti jas su Sujungti |
| Kūnų paviršių pasirinkimas vaizde (išskyrus apkirpimo ir lopo taškus); paviršių suapvalinimai; atkirpimas; G2 lopai; Gordono paviršiai, liečiantys išlenktus kaimynus (liečiantys plokštumas ir plokščius paviršius įgyvendinti) | Pasirinkite juos pagal vardą elemento skydelyje; pirma {{ui:Storinti}}, tada suapvalinkite kietąjį kūną |
| Kūnų sąrašas istorijoje; paslėptų kūnų išskyrimas iš eksporto | Pervadinkite ir slėpkite kūnus detalės skydelio kūnų sąraše; ištrinkite arba išjunkite elementą, sukūrusį kūną, kad jis būtų išskirtas |
| Ne vienodas mastelio keitimas, išlaikantis cilindrus ir kūgius analitinius; ne vienodas paviršių poslinkių mastelio keitimas | {{ui:Keisti kūno mastelį}} padaro išlenktus paviršius uždarais B-splainais (0.0000004 mm tikslumu); vienodas mastelio keitimas lieka tikslus |
| Paviršių kūnų jungimas; Minkovskio sumos | Pirma {{ui:Siūti}} arba {{ui:Storinti}}, tada {{ui:Sujungti}} |
| Tolerancijų analizė: nuokrypių grandinės, kurios sukasi kampais (2D ir 3D vektorių kilpos), jautrumai, apskaičiuoti iš geometrijos, Monte Carlo su kitais skirstiniais, dydžių tolerancijos eskizo matmenims, papildoma tolerancija pagal medžiagos būklę | {{ui:Nuokrypių grandinė}} surinkime: viena kryptis, blogiausias atvejis ir RSS, tolerancijos įvedamos rankiniu būdu, iš antraštės lentelės bendrosios tolerancijos arba iš GD&T rėmelių: žr. [Tolerancijų grandinės](topic:tolerance-stackup) |
| Išdėstymas: pjovimo tvarka ir įvedimo linijos, bendrų kraštų pjovimas vieną kartą, detalės, kurios turi būti laikomos kartu; ritinių likučiai, atsargos, bendros keliems projektams | {{ui:Išdėstyti plokščias detales lakštuose…}} su tarpais, paraštėmis, pasukimais ir kryptimi: žr. [Plokščių detalių išdėstymas lakštuose](topic:nest-flat-parts); likutinės plokštės išsaugomos ir naudojamos pirma: žr. [Likučių išsaugojimas ir pakartotinis naudojimas](topic:nest-offcuts); pjovimo planą sudarykite savo pjovimo įrangos programoje |
| Lakštinis metalas: kilpos, pakopos, įstrižos ir kontūrinės briaunos; atlenktos briaunos ant išlenktų kraštų ar atlenktos pagrindinės briaunos paviršių; eskizo lenkimai; kampų uždarymai; formavimo įrankiai; kieto kūno vertimas į lakštinį metalą; atlenktos pagrindinės briaunos išklotinė su joje esančiais pjūviais; lenkimo lentelės | {{ui:Pagrindinė atlenkta briauna}} (plokštė arba atlenktas profilis), {{ui:Briaunos atlenkimas}} ant tiesių plokštės kraštų su lenkimo išlaisvinimais ir plokščia išklotinė su K koeficientu: žr. [Lakštinis metalas](topic:sheet-metal) |
| {{ui:Nuolydžio analizė}} surinkimuose; skyrimo linijos paieška; sienelių storio analizė | {{ui:Nuolydžio analizė}} detalei Projektavime: žr. [Nuolydžio tikrinimas liejimui ir formavimui](topic:draft-analysis); kiekvieną surinkimo detalę atidarykite ir patikrinkite |

## Eskizai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Elipsės, liestiniai lankai, kūgiai, splainai su nustatytu laipsniu ar svoriais (NURBS) | Splainai (kubiniai), lankai ir apskritimai su Liestinės ryšiais |
| Taškas ant splaino (ryšys), kreivumo (G2) ryšiai | Įdėkite paties splaino tašką ten, kur jis turi praeiti |
| Splainų poslinkio kopijos, kurios seka vėlesnius pakeitimus; grandinių poslinkiai su aštriais splaino kampais | Atlikite poslinkį iš naujo po pakeitimo; pirma suapvalinkite kampą |
| Šablonų kopijos, likusios susietos su originalu; šablonai palei kreivę | Vėl sukurkite šabloną po pakeitimo |
| Projektuojami laisvos formos arba pasvirę apskritiminiai kraštai; projektuota geometrija, kuri seka detalės pokyčius | Projektuokite tiesius ir lygiagrečius apskritiminius kraštus, tada matuokite |
| Valdomieji (informaciniai) matmenys | Skaitykite dydžius iš skydelio arba detalės savybių |
| Kolinearinės ryšiai | Lygiagretumas su 0 atstumu |
| Įklijavimas į kitą programą (sistemos iškarpinė) | Eksportuokite DXF, STEP, STL arba 3MF |
| Lankų, santykinių ar polinių koordinačių įvedimas | Įveskite linijas ir apskritimus; lankus braižykite Lanko įrankiu |
| Geometrijos pasirinkimas be žymeklio | Reikia spragtelėjimo ar palietimo |

## Parametrai ir vienetai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Konfigūracijos, keičiančios medžiagas; CSV projektavimo lentelė, išjungianti elementus | Konfigūracijos nustato parametrus ir įjungia bei išjungia elementus: žr. [Konfigūracijos ir projektavimo lentelės](topic:design-tables); `partcraft variants` sukuria išsaugotas konfigūracijas pagal pavadinimą, įskaitant išjungtus elementus: žr. [Variantų paketo sukūrimas iš konfigūracijų](topic:variant-pack) |
| Lygtys naujausių elementų skydelių skaičiuose (plokštuma, perstūmimas, nuolydis ir pan.) | Rašykite jas scenarijuje arba su `partcraft set` ([Scenarijai ir komandinė eilutė](topic:scripts-and-cli)) |
| Detalė, rodoma coliais | Dydžiai rodomi milimetrais; įveskite `2in` skaičių langelyje arba išraiškoje, ir jis taps 50.8 |

## Failai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Importuoto STEP kietojo kūno savo elementų redagavimas (jis atkeliauja be istorijos) | Pridėkite arba išpjaukite medžiagą savo elementais |
| Spalvų, pavadinimų, surinkimo struktūros ir PMI skaitymas iš STEP | Nėra |
| glTF, OBJ, IGES, Parasolid eksportas; 3D detalės DWG (tik variantų paketas rašo DWG: brėžinio lapą) | STL arba 3MF tinkliniams; STEP kietiesiems kūnams; DXF 2D |
| IGES, DXF ar kitų programų failų atidarymas (`.3dm` failai atsidaro kaip vienas kūnas: [Atidaryti .3dm modelį kaip kietąjį kūną](topic:open-3dm-files)) | Prašykite STEP arba uždaro STL, OBJ ar 3MF tinklo: [Atidaryti STL, OBJ ar 3MF](topic:open-meshes) |
| Surinkimo struktūra (medis su detalių pavadinimais) eksportuotame STEP | Surinkimo STEP yra vienas sudėtinis kūnas iš išdėstytų kietųjų kūnų |
| Įrašymas į jūsų pasirinktą aplanką be naršyklės atsisiuntimo | Naršyklės atsisiuntimo nustatymuose įjunkite „klausti, kur įrašyti“ |

## Brėžiniai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Matmenys, be trijų bendrųjų dydžių (skylių dydžiai, padėtys, dydžių tolerancijos) | Pažymėkite PDF arba eksportuokite DXF ir pažymėkite matmenis 2D CAD programoje |
| Daugiau nei vienas pjūvis ar detalė; sulygiuoti, išlaužti ir pagalbiniai vaizdai | Vienas pjūvis ir viena detalė viename brėžinyje |
| Laisvas tekstas, pastabos ir lentelės lape (išskyrus antraštės ir revizijos blokus) | Apdailos pastaba arba tekstas, pridėtas PDF |
| Pirmojo kampo projekcija, judantys vaizdai, portretiniai lapai | Trečiojo kampo projekcija, automatinis išdėstymas, albumo lapai A4–A0 ir ANSI A–E |
| Tiesioginis pjūvio vaizdas: keli pjūviai ar pjūvio dėžė vienu metu, kontūras aplink pjūvį, pjūvio išsaugojimas faile | Viena plokštuma vienu metu iš {{ui:Vaizdai}} › {{ui:Pjūvio vaizdas}}; žr. [Pažvelkite į vidų su pjūvio vaizdu](topic:section-view) |
| Surinkimo brėžiniai su daugiau vaizdų, matmenų ar judinamų nuorodų | Vienas izometrinis (ar išskleistas) vaizdas su automatinėmis nuorodomis ir detalių sąrašu |
| Kopijavimas ir įklijavimas GD&T bei apdailos simbolių | Kiekvieną dedami su Bazė, Rėmelis arba Apdaila |
| Instrukcijos: STEP failai iš Iliustravimo {{ui:Iš kito failo…}}, modelis tiesiogiai iš ModelCraft ar BimCraft, paveikslėliai kelio sekimo kokybe, interaktyvus 3D PDF viduje | Atidarykite STEP Projektavime ir pradėkite instrukciją su {{ui:Iš atidarytos detalės}}; išsaugokite modelį kaip glTF (.glb); PNG 3D vaizdo paveikslėliai; interaktyvus 3D failas: žr. [Instrukcijos pradžia Iliustravime](topic:illustrate) |

## Surinkimai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Krumpliaračių, rėžių, kumštelių ir sraigtų sujungimai; rutulinis sujungimas, ribotas kūgiu; sujungimai ant išlenktų paviršių ar tarp taškų | Standieji, sukamieji, slankikliniai, cilindriniai, plokštumos, rutuliniai ir kaiščio-griovelio sujungimai ant plokščių paviršių, kiekvieno su savo ribomis: žr. [Surinkimo kūrimas](topic:build-assembly) |
| Išskleidimo žingsniai, kurie sukasi detales, ir detalių vilkimas, kurį atlieka sujungimai | Tiesūs išskleidimo žingsniai; pašalinkite sujungimą, kad detalę pajudintumėte ranka |
| Subsurinkimai | Tik vienas detalių lygis |
| Krumpliaračiai, kumšteliai, kontaktas | Nėra |

## Gamyba

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| 3D šiurkštus apdirbimas išlenktų paviršių, 3D adaptyvus valymas, likučių apdirbimas; vandens linijos, pieštuko, radialinis ir spiralinis apdailymas; adaptyvūs praėjimai kaip lankai | Paviršiaus, kišenės, 2D adaptyvus, kontūro, gręžimo ir nuožulninimo 2,5 ašies apdirbimas: žr. [Kelių ir G-kodo kūrimas](topic:manufacture); Parallel ir Scallop apdailymas viso modelio: žr. [3D apdailymas](topic:finish-3d) |
| 4 ir 5 ašių keliai, tekinimas, zondavimas | Ruoškite po vieną pusę su įrankio ašimi skirtuke Paruošimas |
| Laikiklio ir įrankio kotelio susidūrimų tikrinimas | Stebėkite griovelių ilgio įspėjimus ir tikrinkite valdiklio imitatoriuje |
| Zondavimas, įrankio tarnavimo laikas ir subprogramų ciklai; 4-os ir 5-os ašies bei tekinimo kodai postprocesoriuje; kitų programų postprocesorių failų įkėlimas | Rašykite arba keiskite postprocesorių savo PartCraft formatu: žr. [Redaguojami postprocesoriai](topic:post-processors) |
| Coliniai G-kodai (G20) | Tik milimetrai (G21) |

## Modeliavimas ir generatyvus projektavimas

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Netiesiniai tyrimai: tekėjimas, dideli nuokrypiai, kontaktas tarp detalių, nuovargis | Tiesinė statinė ir natūralieji dažniai: žr. [Įtempių ir nuokrypių tikrinimas](topic:simulation); saugos koeficientą laikykite gerokai virš 1 |
| Netiesinis išlinkimas (netobulumai, po išlinkimo, staigus perėjimas) | Tiesiniai išlinkimo apkrovos koeficientai su didele atsarga: žr. [Šiluma, šiluminiai įtempiai ir išlinkimas](topic:thermal-and-buckling) |
| Spinduliuotė tarp paviršių (vaizdo faktoriai), kontaktinė varža, nuo temperatūros priklausančios medžiagos, inercija šiluminiuose įtempiuose (šiluminio smūgio bangos) | Spinduliuotė į aplinką, stacionarūs arba kvazistatiniai šiluminiai įtempiai laikui bėgant, pastovios savybės: žr. [Šiluma, šiluminiai įtempiai ir išlinkimas](topic:thermal-and-buckling) |
| Automatinis patobulinimas pereinamiesiems šilumos ir tyrimams su šilumine apkrova; tinklo grubinimas, kur paklaida maža; tikslas lokaliam dydžiui (didžiausias įtempis vienoje vietoje) | **Tobulinti automatiškai** statiniams, išlinkimo, natūraliųjų dažnių ir stacionariems šiluminiams tyrimams, pagal paklaidą visoje detalėje: žr. [Įtempių ir nuokrypių tikrinimas](topic:simulation); kitu atveju sumažinkite elemento dydį |
| Guolių ir varžtų apkrovos, nuotolinės jėgos, momentai, spyruoklės, nustatyti poslinkiai | Jėgos ir slėgiai ant paviršių, gravitacija; fiksuoti ir be trinties paviršiai |
| Surinkimų modeliavimas; medžiagos, kurių savybės priklauso nuo krypties (spausdinti sluoksniai, kompozitai) | Viena detalė, viena izotropinė medžiaga |
| Keli sprendiklio srautai tetraedriniams tyrimams, šilumos perdavimui ir generatyviam projektavimui; bet kokie srautai puslapyje, kuris nėra kryžminės kilmės izoliuotas | Vokselių tyrimai, išlinkimas, įtempiai laikui bėgant ir laminarinis tekėjimas naudoja srautus, kur puslapis leidžia: žr. [PartCraft nustatymai](topic:settings) |
| Turbulentinis tekėjimas su projektavimo tikslumu (Spalart–Allmaras modelis yra eksperimentinis: vamzdžio trintis 30–34 % per didelė, atgalinio žingsnio prisijungimas 21–39 % per trumpas; planuojama: smulkesnės ląstelės prie sienelių), šiluma tekėjime, nestacionarus (laiko atžvilgiu tikslus) tekėjimas, laisvi paviršiai, ne Niutono skysčiai, besisukančios detalės | Laminarinis, stacionarus, izoterminis Niutono skysčio tekėjimas arba eksperimentinis turbulentinis modelis kokybiniams modeliams: žr. [Skysčio tekėjimo modeliavimas](topic:flow-simulation); skydelis įspėja, kai Reinoldso skaičius viršija laminarinę ribą |
| Įtempių ribos ir gamybos taisyklės (nuolydžiai, frezavimo kryptys) generatyviame projektavime; keli medžiagos viename formoje | Standžiausia forma tūriui; rezultatą patikrinkite Modeliavime: žr. [Formos augimas nuo apkrovų](topic:generative-design) |
| Rezultatas kaip redaguojamas (lygus, parametrinis) kietasis kūnas | STL, facetinis STEP arba detalė su rezultatu kaip importuotu facetiniu kietuoju kūnu |
| Elektros mašinų projektavimas: rotorius sukasi statoriuje, sukimo momentas nuo kampo, įsisotinantis plienas, magnetai, prarandantys stiprumą už lūžio taško, sūkuriniai srovės ir geležies bei vario nuostoliai; magnetiniai laukai 3D ar išlenktuose tinkluose | Tiesinė 2D magnetostatika tinkle analizės bibliotekoje: ritės, geležis, nuolatiniai magnetai ant grįžtamosios linijos, tarpai, induktyvumas ir trauka: žr. [Magnetiniai laukai 2D](topic:magnetic-fields-2d) |

## Scenarijai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Užvedimo pagalba, sustojimo taškai ir žingsniavimas scenarijų redaktoriuje | Paieška, sulankstymas ir užbaigimas jau veikia (žr. [Rašykite ir vykdykite scenarijus](topic:craftscript)); kitam naudokite savo redaktorių: {{ui:Įrašyti}} ir {{ui:Atidaryti}} Scenarijaus grupėje perkelia scenarijus į redaktorių ir iš jo; įmontuotos funkcijos išvardytos [CraftScript kalboje](topic:craftscript-language) |
| Sustojimo taškai ir žingsniavimas per scenarijų | `disp` ir `fprintf` kelyje; {{key:Mod+Enter}} vykdo kelias pažymėtas eilutes vienu metu |
| Laukai ir grafikai, rodomi scenarijaus Projektavimo darbo srityje; scenarijai, keičiantys detalės parametrus | Jie rodomi Scenarijaus darbo srityje; scenarijai nuskaito parametrus su `param` (žr. [Rašykite ir vykdykite scenarijus](topic:craftscript)), keičia juos skirtuke {{ui:Parametrai}} |
| Paveikslėliai ir lentelės šalia grafikų; grafiko redagavimas (mastelis, ašių ribos) prieš įrašant | Šalia rodomi grafikai; grafiką įrašykite kaip PNG, SVG ar CSV ir baikite kitur |
| numpy ir kiti Python paketai; Python neprisijungus; Python sulankstymas redaktoriuje; Pascal Script | Python standartinė biblioteka, CraftScript ir Lua: žr. [Scenarijai Python](topic:craftscript-python) |
| Lua funkcijų perdavimas įmontuotoms funkcijoms; bibliotekos funkcijos iškvietimas iš Lua pagal vardą, sukurtą vykdant scenarijų | Parašykite bibliotekos funkcijos vardą scenarijuje (`cs.static_tet(…)`) arba kvieskite ją iš CraftScript scenarijaus |

## Programa

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Debesies įrašymas, bendrinimas ir versijų istorija | Dar nepasiekiama. Įrašykite failus į kompiuterį ir saugokite versijas pagal pavadinimą |
| PartCraft kaip įdiegta programa iPad ir iPhone | Naudokite PartCraft įrenginio naršyklėje; Android ir darbalaukyje ji veikia ir CadCraft Studio (getcadcraft.com/download) |
| Kontekstiniai (dešiniojo pelės klavišo) meniu | Įrankių juosta ir dešinysis skydelis |
| Visiškas darbas neprisijungus nuo švaraus starto | Tik kai programa išsaugota darbui neprisijungus: žr. [Darbas neprisijungus](common:offline) |

Praneškite, ko labiausiai trūksta, per svetainės palaikymo puslapį: tai lemia, kas bus toliau.

## Inžinierius (generatoriai ir laukai)

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Antgaliai, jungtys ir detalės generuojamame šilumokaityje; temperatūros kreivės medžiagos stiprumui; tee nuostoliai kolektoriuje | Generatoriai sukuria šerdį ir vamzdžius; detales pridėkite Projektavime; naudokite medžiagos kambario temperatūros duomenis su saugos koeficientu |
| Generatorių pridėjimas iš priedų katalogo vienu spustelėjimu | {{ui:Atidaryti}} Inžinerijos darbo srityje prideda generatorių iš failo |
| Lauko failas smulkesnis nei generatoriaus vokselio dydis; `.vdb` failų skaitymas | Įrašykite smulkesnį lauką iš scenarijaus; `.vdb` tik rašomas, neskaitomas |
| Slėginių indų kodo skaičiavimai | Vadovėliniai plonųjų ir storųjų sienelių formulės su jūsų pasirinktu saugos koeficientu; ne kodo atsarga |
| Generatoriai kitoms programoms | Šioje versijoje tik PartCraft |
