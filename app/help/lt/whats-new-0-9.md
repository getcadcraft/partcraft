---
title: Kas naujo 0.9 (ankstesnė)
summary: PartCraft 0.9 prideda suapvalinimus tarp paviršių ir sustorinimą į kietuosius kūnus, tūkstančių detalių surinkimus, Dokumentų saugyklą su versijomis, Solid FEM įtempių priedą, dešimt lankų metodų, JK plieno profilius, spausdinimo etapą ir dervos spausdinimo priedus.
keywords: kas naujo 0.9, ankstesnė versija, kas naujo, pakeitimų žurnalas, išleidimo pastabos, 0.9, suapvalinimas tarp paviršių, riedantis rutulys, suapvalinti kelias briaunas, sustorinti, kietasis kūnas iš paviršių, STEP apvalkalas, IGES kietasis kūnas, suapvalinimai skenavimuose, didelis surinkimas, supaprastintas rodymas, 20000 detalių, dokumentai, saugykla, paimti, versija, kur naudojama, Rhino nuoroda, Grasshopper, 3dm, žymekliai, gamyklos aikštelė, darbų eilė, Solid FEM, baigtinių elementų, von Mises, natūralusis dažnis, lankų metodai, 3 taškų lankas, JK plieno profiliai, mėlynoji knyga, spausdinimo etapas, derva, goo, ctb, stalas, išklioti plokštumoje, kas pirmiausia sulūš, apkrovos koeficientas, netiesinis, takumas, plastinė deformacija, kontaktas, CalculiX, judesio tyrimas, tarpas, paviršiai, nurbs, išlyginti, korpusas, zebra, inžinierius, generatorius, sugeneruotas kūnas, eskizas iš nuotraukos, mastelis spausdinimui, padalyti spausdinimui, susitraukimas, išdėstyti lakštai, g-code, brėžinys, pamatuoti skyles, asistentas, mcp, kalbos, įrankių juostos eilutės
from: 1dafd7c8
---

Tai, kas pasikeitė PartCraft 0.9, palyginus su 0.8.1. Paviršiai dabar susijungia į kietuosius kūnus, tūkstančių detalių surinkimai lieka naudojami, Dokumentų saugykla saugo versijas, o Solid FEM priedas tikrina įtempius detalėje. Kiekvienas punktas nurodo, kur tai rasti.

## Nauja 0.9.1

- **Tikslus STEP eksportas.** {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} ir {{ui:STEP AP214 (tikslus kietasis kūnas)}} dabar veikia. Skylės, išsikišimai, suapvalinimai, kūgiai, sferos ir tórai įrašomi savo tikruosiuose paviršiuose, o briaunos – tikri apskritimai, todėl kita CAD arba CAM programa gali skylę atpažinti kaip skylę. Splainų šonai, modeliuoti sriegiai ir importuoti tinkleliai lieka plokščiomis facetomis tame pačiame kietame kūne. Žr. [Eksportas spausdinimui, STEP ir DXF](topic:export-files#for-other-cad-programs-step).
- **STEP įeina, tikslus STEP išeina.** Atidarytas STEP failas išlaiko savo plokščius paviršius, cilindrus, kūgius, sferas ir tórus, todėl {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo juos atgal kaip tikrus paviršius, o ne facetes: tiekėjo sija su varžtų skylėmis išeina su tais pačiais paviršiais, su kuriais atėjo, plius viskas, ką į ją įpjovėte. Splainų, perstūmimo ir apsukimo paviršiai lieka facetomis, taip pat ir kūnai iš STL, OBJ ir 3MF. Detalei, išsaugotai anksčiau, atidarykite STEP failą iš naujo. Žr. [Atidaryti STEP failą ir kurti ant jo](topic:import-step).
- **Tikri apskritimai DXF iš paviršiaus.** {{ui:Eksportuoti}} › {{ui:DXF eskizo arba plokščio paviršiaus}} su pasirinktu plokščiu paviršiumi dabar įrašo apvalias skyles kaip apskritimus, su skylės centru ir spinduliu, lazeriniam, plazminiam arba vandens srovės stalui. Kiti apvalūs kraštai lieka facetomis.
- **Tikras STEP dirbtuvėms.** Gamyboje {{ui:Tikslus STEP (darbinės koordinatės)}} įrašo detalę su pradžia sąrankos darbiniame nulyje ir Z pagal įrankio ašį – koordinatės, kurias naudoja G-kodas. Žr. [Įrankių trajektorijos ir G-kodas](topic:manufacture#exact-step-for-the-shop).

## Nauja

### Paviršiai ir kietieji kūnai

- **Suapvalinimas tarp paviršių.** Pasirinkite {{ui:Paviršiai}} {{ui:Darbo sritis}} lauke, tada {{ui:Suapvalinimas tarp paviršių}}. Pasirinkite du vieno kieto kūno paviršius, įveskite spindulį (ir {{ui:Spindulys gale (mm, 0 = tas pats)}} spinduliui, kuris kinta palei briauną). Rezultato eilutėje nurodoma, kiek suapvalinimas nukrypsta nuo idealaus riedančio rutulio, o spindulys, kuris netinka, atmetamas su nurodytu paviršiumi. {{ui:Kelių briaunų suapvalinimas}} suapvalina daug briaunų vienu žingsniu; pažymėkite {{ui:Kampai (sferinis lopas, kur susitinka trys)}} sferiniam kampui, kur susitinka trys suapvalintos plokščių paviršių briaunos. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).
- **Sustorinti į kietą kūną.** {{ui:Sustorinti iki tūrinio kūno}} toje pačioje darbo srityje suteikia paviršiui storį; {{ui:Kita pusė}} auga į kitą pusę. Sulinkimas arba susikirtimas su savimi atmetamas, o paviršius ir vieta nurodomi.
- **Kietieji kūnai iš paviršių.** Apkirpti paviršiai gali būti sujungti jungimu, atimtimi ir sankirta bei įdėti į detalę kaip vienas atšaukiamas žingsnis. STEP įrašo kietąjį kūną kaip vieną uždarą apvalkalą, o IGES – kaip vieną kietąjį kūną; abu nuskaitomi atgal kaip kietasis kūnas. Jei paviršiai nesutampa briauna su briauna, failas gauna atskirus paviršius, o būsenos eilutė tai nurodo. Kietuosius kūnus taip pat galima sukurti mazgų redaktoriuje; žr. [Mazgų redaktorius](topic:nodes).
- **Kraštiniai suapvalinimai (tórai) ir kintamo spindulio suapvalinimai skenavimuose.** Kai pritaikote paviršius prie skenavimo, ieškoma ir kraštinių suapvalinimų (tórų), ir kintamo spindulio suapvalinimų palei gana tiesią briauną, jie išvardijami su savo spinduliu. Patikrinta tik su sugalvotais skenavimais.

### Surinkimai, dokumentai ir ryšiai

- **Dideli surinkimai.** Detalės, kurios yra kopijos, dalijasi vienu tinkleliu, o {{ui:Vaizdai}} › {{ui:Supaprastintas rodymas}} piešia dėžes, kad vaizdas judėtų (jis įsijungia pats labai dideliems surinkimams; pasirinkimas ir jungtys vis dar naudoja tikras detales). Detalių medis rodo pirmąsias eilutes ir mygtuką {{ui:Rodyti dar 700}} likusioms. Surinkimų failai gali turėti iki 50 000 egzempliorių ir 100 000 jungčių. Žr. [Surinkimo sudarymas](topic:build-assembly).
- **Dokumentai.** {{ui:Dokumentai…}} **Failas** grupėje atveria dialogą virš projekto aplanko: paimti ir grąžinti, versijų raidės, būsenos (darbas vyksta, peržiūrai, paleista, nebegalioja), istorija, kur naudojama ir medžiagų sąrašas. Žr. [Dokumentai ir versijos (saugykla)](topic:documents-walkthrough).
- **Tiesioginė Rhino nuoroda.** Vienas scenarijus, `cadcraft_link.py`, stebi Rhino arba Grasshopper dokumentą ir į PartCraft siunčia tik tai, kas pasikeitė; ten importuotas elementas perstatomas pagal naują formą. Ji vienpusė ir reikalauja Studio. Žr. [Tiesioginė .3dm nuoroda](topic:live-3dm-link).
- **Matyti kitų žymeklius.** Bendroje sesijoje kiekvieno žmogaus žymeklis rodomas su vardu ir elementu, kurį jis pasirinko. Žr. [Dirbti tiesiogiai su kitais](topic:work-live).
- **Gamyklos aikštelė.** Įjunkite Gamyklos aikštelės priedą {{ui:Parametrai}} › {{ui:Priedai}}. Po to, kai paskelbiate programą Gamyboje, jos skirtukas gali {{ui:Pridėti į gamyklos darbų eilę}} arba {{ui:Įrašyti kaip darbo failą}}. Ji niekada nesiunčia ir nepaleidžia staklių.

### Analizė ir detalės

- **Solid FEM priedas.** Įjunkite {{ui:Solid FEM}} {{ui:Parametrai}} › {{ui:Priedai}} (jis išjungtas, kol neįjungsite), ir dešiniajame skydelyje atsiranda skirtukas {{ui:Solid FEM}}. {{ui:Sudaryti detalės tinklelį}}, 3D vaizde pasirinkite fiksuotus paviršius ir apkrovas, {{ui:Skaičiuoti}}, ir nubraižykite poslinkį, von Mises įtempį arba modos formą su {{ui:Rodyti ant modelio}}. Žr. [Solid FEM: įtempių patikrinimas](topic:solid-fem-check).
- **Lankas eskizuose, dešimt būdų.** Rodyklė šalia {{ui:Lankas}} eskizo įrankių juostoje išvardija: 3 taškais, Pradžia–Centras–Pabaiga, Pradžia–Centras–Kampas, Pradžia–Centras–Ilgis, Pradžia–Pabaiga–Kampas, Pradžia–Pabaiga–Kryptis, Pradžia–Pabaiga–Spindulys, Centras–Pradžia–Pabaiga, Centras–Pradžia–Kampas, Centras–Pradžia–Ilgis ir Tęsti. Žr. [Lankas dešimčia būdų](topic:sketch-arc-methods).
- **JK plieno profiliai.** Konstrukcijose galima naudoti 976 JK profilius (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); įveskite dydį, pavyzdžiui `305x165x40 UB`. Žr. [Konstrukciniai elementai](topic:structural-members).

### Spausdinimas

- **Spausdinimo etapas.** Įrankių juostos mygtukas {{ui:Spausdinimo etapas}} (priedas 3D spausdinimas, pagal numatymą įjungtas) deda jūsų detalės kūnus ant brūkšnuoto stalo: {{ui:Išklioti plokštumoje}}, {{ui:Pasukti 90°}}, {{ui:Išdėstyti ant stalo}}, {{ui:Sutalpinti visus ant stalo}}, {{ui:Peržiūrėti sluoksnius}}, tada {{ui:Siųsti į 3D spausdintuvą}} per USB, Klipper (Moonraker), OctoPrint arba PrusaLink. Nieko neišsiunčiama, kol nepatvirtinsite, o jūsų detalė niekada nekeičiama. STL arba 3MF failui žr. [Paruoškite detalę 3D spausdinimui](topic:print-3d).
- **Dervos spausdinimas.** Priedai {{ui:Parametrai}} › {{ui:Priedai}}, visi išjungti, kol jų neįjungsite: dervos pjaustyklė, ekspozicijos testas ir failų formatai Elegoo GOO, SL1, Chitubox CBDDLP/CTB ir Anycubic. Pjaustymas vyksta darbinėje gijoje, todėl puslapis lieka jautrus.

## Visose programose

- Kiekvienas užvedimo patarimas yra Bootstrap įrankinė užuomina.
- Pradžios patarime yra uždarymo mygtukas; jis lieka uždarytas.
- Skirtukų eilutė, kuri netelpa, slenka į šoną, o ne būna nukirpta.
- Naršyklės skirtukas rodo atidaryto dokumento pavadinimą prieš PartCraft | CadCraft.
- {{ui:Parametrai}} rodo darbo srities {{ui:Išdėstymas}} kaip išskleidžiamąjį pasirinkimų sąrašą, o kalbos laukelyje išvardytos visos versijos kalbos.
- Svoris ir temperatūra yra vienetų rūšys vienetų parametruose.

## Ištaisyta

- Eskizo lankų meniu dabar išvardija visus metodus.
- Priedų įrankių juosta ir naršyklės skirtuko pavadinimas buvo ištaisyti 2026-11-09.

## Sąžiningi apribojimai

- Tikras STEP buvo nuskaitytas OpenCascade (galiojantys kietieji kūnai, tūriai lygūs rankiniu būdu apskaičiuotiems). Jis dar nebuvo atidarytas kiekvienoje CAD ar CAM programoje, o surinkimas nerašomas kaip tikras STEP.
- Niekas nebuvo spausdinta tikru spausdintuvu. Pjaustymas, G-kodas ir dervos failai buvo nuskaityti mūsų programomis arba pakaitiniu spausdintuvu; nė vienas dervos formatas nebuvo įkeltas į spausdintuvą, o spausdintuvų dydžiai ir ekspozicijos yra pradiniai parametrai.
- Solid FEM yra tiesinis, izotropinis ir elastingas, viena medžiaga detalei, be kontakto, takumo ar išlinkimo. Įtempis fiksuotuose paviršiuose ir aštriuose kampuose priklauso nuo tinklelio. Tai patikros pagalba, o ne inžinieriaus peržiūrėta.
- Didelių surinkimų laikai gauti iš serverio be GPU; visas pilnos detalizacijos kadras su 20 000 detalių vis dar trunka kelias sekundes.
- Suapvalinimai veikia su porų paviršių; nėra bendro viršūnių mišinio ir suapvalinimo tarp paviršių, kurie nesusitinka.
- Rhino nuoroda niekada nebuvo paleista tikroje Rhino ar Grasshopper. Dokumentai buvo išbandyti dviem programom viename aplanke, o ne dviem žmonėms tinkle.
- Paviršių pritaikymas prie tikro skenavimo nebuvo rankiniu būdu patikrintas. Kalbos, išskyrus anglų, yra mašininiai juodraščiai.
- Windows diegimo programos nepasirašytos kodu, o macOS diskų vaizdas nėra notarizuotas. Žr. [Trikčių šalinimas](topic:troubleshooting).

Ankstesni pakeitimai yra [Kas naujo 0.7](topic:whats-new-0-7).

## Ankstesnė: 0.8 ir 0.8.1

Tai, kas pasikeitė PartCraft 0.8 ir 0.8.1, palyginus su 0.7. Modeliavimas atsako, kol redaguojate, ir parodo, kas pirmiausia sulūš; surinkimai gauna judesio tyrimus, o naujos darbo sritys kuria laisvus paviršius ir detales pagal fiziką. 0.8.1 yra nedidelis taisymų leidimas.

### Nauja

**Modeliavimas**

- **Atnaujinti, kol redaguoju.** Pažymėkite {{ui:Atnaujinti, kol redaguoju}} Skaičiuoti bloke, ir atsakymai seka jūsų pakeitimus. Pakeiskite matmenį, apkrovą arba medžiagą, ir greitas atsakymas, paskaičiuotas su keturis kartus didesniais elementais, pasirodo iš karto; kai sustojate maždaug sekundei, paties tyrimo patobulintas atsakymas jį pakeičia. Rezultatai nurodo, kurį iš jų žiūrite. Ant plieninės konsolės greitas atsakymas buvo 1 % tikslumu poslinkiui ir apie 4 % įtempiui, palyginus su patobulintu. Žr. [Stiprumo ir nuokrypio tikrinimas](topic:simulation#update-while-you-edit-live).
- **Kas pirmiausia sulūš.** Statiniam arba išlinkimo tyrimui {{ui:Kas pirmiausia sulūš?}} **Suardykite** bloke keičia apkrovas, kol detalė pasiduoda. Ji išvardija, pradedant blogiausiu, apkrovos koeficientą iki pirmojo takumo (raudonas žymeklis, kur įtempis pasiekia piką) ir apkrovos koeficientą iki išlinkimo. Koeficientas, mažesnis nei 1, reiškia, kad detalė jau pasiduoda pagal apkrovą, o Problemos rodo klaidą. Koeficientai gaunami iš tiesinio tyrimo, todėl jie tokie geri, kaip ir jis. Žr. [Stiprumo ir nuokrypio tikrinimas](topic:simulation#find-out-what-breaks-first-break-it).
- **Takumas ir kontaktas.** Dar du tyrimų tipai: netiesinis, kuriame medžiaga seka savo tiesią liniją iki takumo įtempio, o paskui plokštesnį nuolydį, su pavaizduota plastine deformacija, ir kontakto, kuriame atskiros dalys stumia viena kitą (be trinties) arba lieka įstrigusios (sujungtos). Apkrovos žingsnis, kuris nesusitvarko, arba dalys, kurios per daug įsminga viena į kitą, rodomos Problemų skydelyje. Trintis, dideli slydimai, dideli sukimai, dideli nuokrypiai ir nuovargis neskaičiuojami. Žr. [Stiprumo ir nuokrypio tikrinimas](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX rinkiniai.** {{ui:Eksportuoti}} › {{ui:CalculiX deck (.inp)}} įrašo tyrimą CalculiX – atskirai programai, kurią įdiegiate ir paleidžiate patys; {{ui:Eksportuoti}} › {{ui:CalculiX results (.frd)}} nuskaito jos rezultatų failą atgal ant to paties tinklelio. PartCraft niekada nepaleidžia tos programos ir praneša, jei detalė pasikeitė nuo to laiko, kai rinkinys buvo įrašytas.

**Surinkimai**

- **Judesio tyrimai.** {{ui:Surinkimas}} › {{ui:Judėjimas}} valdo vienos jungties reikšmę per nurodytą laiką (pastovus greitis, sušvelnintas, sinusas arba išeina ir grįžta), sustato surinkimą kiekviename žingsnyje su jungtimis ir uždaromis grandinėmis, ir praneša, kas susikerta ir kaip arti priartėja dalys. {{ui:Pridėti tašką}} braižo taško padėtį, greitį ir pagreitį, jungties reikšmę ir tarpą laike; {{ui:Įrašyti CSV}} ir {{ui:Įrašyti grafiką}} juos įrašo. Po {{ui:Paleisti}} žingsniavimo juosta „Žingsniuoti“ perkelia surinkimą į bet kurį žingsnį. Tyrimo nustatymai įrašomi surinkimo faile. Greitis ir pagreitis gaunami iš įrašytų padėčių, todėl, jei aštri viršūnė atrodo maža, naudokite daugiau žingsnių. Žr. [Patikrinkite surinkimą dėl susikirtimų ir judesio](topic:check-assembly#a-motion-study).

**Paviršiai ir detalės pagal fiziką**

- **Paviršių darbo sritis.** Pasirinkite {{ui:Paviršiai}} {{ui:Darbo sritis}} lauke NURBS kreivėms ir paviršiams šalia detalės: {{ui:Kreivė}}, {{ui:Sujungimas (loft)}}, {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungti}}, {{ui:Zebra}}, su tęstinumu (G0, G1 arba G2), išmatuotu tiksliais paviršiais, o kraštas, kuris prastesnis nei prašėte, išvardijamas Problemose su „Sujungti“ taisymu. {{ui:Išlyginti}} matuoja korpuso linijas ieškodamas lūžių ir kreivumo šuolių ir perstato nesklandžias pagal jūsų toleranciją. Paviršiai įrašomi detalės faile ir nekeičia detalės elementų. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).
- **Inžinierius.** Pasirinkite {{ui:Inžinierius}} darbo srities perjungiklyje, pasirinkite generatorių ir spauskite {{ui:Naujas}}: scenarijus nustato detalės dydį pagal tai, ką ji turi atlikti (šilumos perkėlimas, srautai, slėgis, medžiaga, spausdinimo procesas), naudodamas vadovėlines formules, ir ją sukuria; tada grąžina naudotus skaičius su šaltiniais, gamybos patikrinimus ir failus analizės įrankiams. Tos pačios įvestys duoda tą pačią detalę bet kuriame kompiuteryje. Generatorius išsaugomas detalėje, o detalės atidarymas niekada nepaleidžia scenarijaus. Žr. [Detalės iš fizikos: generatoriai](topic:engineer-generators) ir [Parašykite generatorių](topic:write-a-generator).

**Eskizai, brėžiniai ir gamyba**

- **Eskizas iš nuotraukos.** {{ui:Elementai}} › {{ui:Daugiau}} › {{ui:Eskizas iš nuotraukos…}} nubrėžia plokščios detalės nuotrauką paprastame fone (kontūras ir skylės) arba pieštuko brėžinį linijomis, lankais ir apskritimais. Nurodote vieną ilgį, patikrinate peržiūrą ir sukuriate eskizą. Žr. [Eskizavimo pagrindai](topic:sketch-basics#a-sketch-from-a-photo).
- **Mastelis ir padalijimas spausdinimui.** {{ui:Eksportuoti}} › {{ui:Mastelis spausdinimui (STL arba 3MF)…}} keičia mastelį pagal ašis nekeisdamas detalės, pavyzdžiui susitraukimo leidimui. {{ui:Eksportuoti}} › {{ui:Padalyti spausdinimui (dalių zip archyvas)…}} supjausto detalę, per didelę jūsų stalui, į numeruotas dalis, sujungtas kaiščiais, raktais, uodegomis, kaiščių skylėmis ar magnetų lizdais. Žr. [Spausdinkite 3D](topic:print-3d).
- **Išdėstyti lakštai į G-kodą.** {{ui:Eksportuoti}} › {{ui:Išdėstytus lakštus į G-kodą}} nuskaito išdėstytą DXF ir sukuria po programą kiekvienam lakštui per jūsų pasirinktą postprocesorių: pirmiausia skylės ir išpjovos, paskui kontūrai. Įvedimo linijų, pjovimo tvarkos ar bendrų briaunų jis neplanuoja. Žr. [Išdėstyti plokščias detales lakštuose](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Brėžiniai, kurie daugiau padaro patys.** {{ui:Lapas}} › {{ui:Automatinis}} parenka mažiausią A dydžio lapą, kuris telpa vaizdus didžiausiu standartiniu mastelio laipsniu iki 1:1. {{ui:Pamatuoti skyles}} uždeda centro žymę ant kiekvienos skylės, po vieną iškvietimą kiekvienam dydžiui ir pozicijas nuo vaizdo apatinio kairiojo kampo. Žr. [Padarykite brėžinį](topic:drawing-pdf).

**Visose programose**

- **Kalbos.** Programos ateina su 54 kalbomis. Tos, kurios nėra anglų kalba, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaito.
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} pasirenka lūžimą eilutėmis (kaip anksčiau), 2 eilutes arba 1 eilutę; juosta, kuri netelpa, slenka į šoną. PartCraft elementų juosta rodo dažniausiai naudojamą įrankį didelį ir paslepia variantus už padalinto mygtuko.
- **Prijunkite savo DI.** Studio yra centras, kuriuo prijungiate savo asistentą prie visų aštuonių programų, su tik skaitymo, siūlymo arba redagavimo leidimu kiekvienai programai. Prijungtas asistentas gali nustatyti detalės dydį iš sakinio, pavyzdžiui laikiklis apkrovai, parodyti savo darbą ir kiekvieną patikrinimą bei ją sukurti; jis praneša, ką nepatikrino (įtempių koncentraciją, nuovargį, plastikų šliaužimą). Žr. [Naudokite PartCraft su DI asistentu](topic:use-with-ai-assistants).

### Ištaisyta 0.8.1

- **Viso ekrano žymeklio užšalimas.** Žymeklio pasirinkimas užvedant pelę dabar ribojamas dažnumu. Priežastis yra mūsų geriausias skaitymas ir nebuvo patvirtinta su pranešusiu asmeniu.
- **Kalba vykdymo metu.** Studio ir supakuoti leidimai gali perjungti kalbą veikiant; anksčiau buvo tik anglų. Dar neišbandyta visose platformose: pranešk, jei kalba nesikeičia.

### Dar nėra šioje versijoje

- Prijunkite savo DI nebaigtas: prijungimas vienu spustelėjimu Studio viduje, nuotolinis jungiklis naršyklės DI, jūsų API raktas Studio viduje ir paskelbtas MCP paketas nežadami. Studio neturi savo DI.
- Studio nepasirašytas kodu: Windows gali įspėti, o macOS prašo dešiniojo pelės klavišo, tada Atidaryti. Žr. [Trikčių šalinimas](topic:troubleshooting).
- Tolerancijų grandinės vis dar vienakryptės: žr. [Tolerancijų grandinės](topic:tolerance-stackup).
- Likusieji išvardyti [Kas dar nėra įgyvendinta](topic:not-built-yet).

Ankstesni pakeitimai yra [Kas naujo 0.7](topic:whats-new-0-7).
