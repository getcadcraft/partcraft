---
title: Kas naujo 0.9 versijoje
summary: PartCraft 0.9 prideda suapvalinimus tarp paviršių ir sustorinimą į kietuosius kūnus, tūkstančių detalių surinkimus, Dokumentų saugyklą su revizijomis, Solid FEM įtempių priedą, dešimt lankų metodų, JK plieno profilius, Spausdinimo etapą ir dervos spausdinimo priedus.
keywords: kas naujo, versijų pastabos, keitimų žurnalas, 0.9, suapvalinimas tarp paviršių, riedantis rutulys, kelių briaunų suapvalinimas, sustorinti, kietasis kūnas iš paviršių, step apvalkalas, iges kietasis kūnas, skenavimo suapvalinimai, didelis surinkimas, supaprastintas rodymas, 20000 detalių, dokumentai, saugykla, paėmimas, revizija, išleidimas, Rhino ryšys, grasshopper, 3dm, žymekliai, gamyklos aikštelė, darbų eilė, solid fem, baigtinių elementų, von mises, natūralus dažnis, lankų metodai, 3 taškų lankas, JK plieno profiliai, Blue Book, spausdinimo etapas, derva, goo, ctb, pagrindas, plokščiai, 0.8, 0.8.1, versija, nauji elementai, gyvoji analizė, redaguojant atnaujinti, sulaužyk, kas pirmiausia sulūš, apkrovos koeficientas, netiesiškumas, takumas, plastinė deformacija, kontaktas, calculix, judesio tyrimas, tarpas, paviršiai, nurbs, išlyginti, korpusas, zebra, inžinierius, generatorius, sugeneruotas kūnas, eskizas iš nuotraukos, mastelis spausdinimui, padalijimas spausdinimui, susitraukimas, išdėstyti lakštai, g kodas, brėžinys, matmenys skylėms, asistentas, mcp, kalbos, įrankių juostos eilutės
from: 96d9fbfa
---

Tai, kas pasikeitė PartCraft 0.9 versijoje, palyginti su 0.8.1. Laisvos formos paviršiai dabar susiglaudžia į kietuosius kūnus, tūkstančių detalių surinkimai lieka naudojami, Dokumentų saugykla saugo revizijas, o Solid FEM priedas tikrina įtempius detalėje. Kiekvienas punktas nurodo, kur jį rasti.

## Nauja 0.9.1

- **Tikslus STEP eksportas.** {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} ir {{ui:STEP AP214 (tikslus kietasis kūnas)}} dabar veikia. Skylės, iškyšos, suapvalinimai, kūgiai, sferos ir toroidai įrašomi tikruose paviršiuose, o tikri apskritimai – kaip briaunos, kad kita CAD ar CAM programa skylę galėtų atpažinti kaip skylę. Splaininiai šonai, modeliuoti sriegiai ir importuoti tinkleliai tame pačiame kietajame kūne lieka plokštieji facetai. Žr. [Eksportas spausdinimui, STEP ir DXF](topic:export-files#for-other-cad-programs-step).
- **STEP įeina, tikslus STEP išeina.** STEP failas, kurį atidarote, išlaiko savo plokščius paviršius, cilindrus, kūgius, sferas ir toroidus, todėl {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} rašo juos atgal kaip tikrus paviršius, o ne facetus: tiekėjo sija su varžtų skylėmis išeina su tais pačiais paviršiais, kuriais įėjo, pridėjus viską, ką įpjovėte. Splainiai, išvedžioti ir apsisukimu sukurti failo paviršiai lieka facetais, kaip ir korpusai iš STL, OBJ ir 3MF. Atidarykite STEP failą iš naujo detalėms, įrašytoms anksčiau. Žr. [Atidarykite STEP failą ir kurkite ant jo](topic:import-step).
- **Tikri apskritimai paviršiaus DXF.** {{ui:Eksportuoti}} › {{ui:DXF eskizo arba plokščio paviršiaus}} su pasirinktu plokščiu paviršiumi dabar rašo apvalias skyles kaip apskritimus su skylės centru ir spinduliu lazerio, plazmos ar vandens srovės pjovimo stalui. Kiti apvalūs kraštai vis dar yra facetai.
- **Tikslus STEP gamyklai.** {{ui:Gamyba}} skiltyje {{ui:Tikslus STEP (darbinės koordinatės)}} įrašo detalę su pradžia darbo nulinio taško vietoje, nustatytoje darbo nustatyme, ir Z ašimi išilgai įrankio ašies – koordinatėmis, kurias naudoja G kodas. Žr. [Kurkite įrankių kelius ir G kodą](topic:manufacture#exact-step-for-the-shop).

## Nauja

### Paviršiai ir kietieji kūnai

- **Suapvalinimas tarp paviršių.** Pasirinkite {{ui:Paviršiai}} {{ui:Darbo sritis}} laukelyje, tada {{ui:Suapvalinimas tarp paviršių}}. Pasirinkite du vieno kietojo kūno paviršius, įveskite spindulį ({{ui:Spindulys gale (mm, 0 = tas pats)}} – spinduliui, kuris keičiasi išilgai briaunos). Rezultato eilutė nurodo, kiek suapvalinimas nuo idealaus riedančio rutulio, o spindulys, kuris netinka, atmetamas, nurodant paviršių. {{ui:Kelių briaunų suapvalinimas}} suapvalina daug briaunų vienu žingsniu; pažymėkite {{ui:Kampai (sferinis lopas, kur susitinka trys)}} sferiniam kampui, kur susitinka trys suapvalintos plokščių paviršių briaunos. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).
- **Sustorinti iki kietojo kūno.** {{ui:Sustorinti iki tūrinio kūno}} toje pačioje darbo srityje suteikia paviršiui storį; {{ui:Kita pusė}} jį padidina kita kryptimi. Lankstas ar savęs kirtimasis atmetami, nurodant paviršių ir vietą.
- **Kietieji kūnai iš paviršių.** Apkarpyti paviršiai gali būti sujungiami sąjunga, atimtimi ir sankirta bei įdedami į detalę kaip vienas anuliavimo žingsnis. STEP rašo kietąjį kūną kaip vieną uždarą apvalkalą, o IGES – kaip vieną kietąjį kūną; abu skaitomi atgal kaip kietasis kūnas. Jei paviršiai nesutampa briauna su briauna, failas gauna atskirus paviršius, o būsenos eilutė tai nurodo. Kietuosius kūnus taip pat galima sukurti mazgų redaktoriuje; žr. [Mazgų redaktorius](topic:nodes).
- **Krašto ir kintamo spindulio suapvalinimai skenavimuose.** Kai pritaikote paviršius skenavimui, ieškoma ir krašto suapvalinimų (toroidų) bei kintamo spindulio suapvalinimų išilgai beveik tiesios briaunos, ir jie išvardijami su savo spinduliu. Išbandyta tik su sugalvotais skenavimais.

### Surinkimai, dokumentai ir ryšiai

- **Dideli surinkimai.** Detalės, kurios yra kopijos, dalijasi vienu tinkleliu, o {{ui:Vaizdai}} › {{ui:Supaprastintas rodymas}} piešia dėžutes, kad vaizdas judėtų (jis įsijungia pats labai dideliems surinkimams; pasirinkimas ir jungtys vis tiek naudoja tikras detales). Detalių medis rodo pirmas eilutes ir mygtuką {{ui:Rodyti dar 700}} likusioms. Surinkimo failai gali turėti iki 50 000 egzempliorių ir 100 000 jungčių. Žr. [Kurkite surinkimą](topic:build-assembly).
- **Dokumentai.** {{ui:Dokumentai…}} grupėje **Failas** atveria dialogą virš projekto aplanko: paimti ir grąžinti, revizijų raidės, būsenos (darbas vyksta, peržiūrai, išleista, pasenusi), istorija, kur naudojama, ir medžiagų sąrašas. Žr. [Dokumentai ir revizijos (saugykla)](topic:documents-walkthrough).
- **Tiesioginis Rhino ryšys.** Vienas scenarijus, `cadcraft_link.py`, stebi Rhino ar Grasshopper dokumentą ir į PartCraft siunčia tik tai, kas pasikeitė; ten importuota detalė perstatoma pagal naują formą. Ryšys vienpusis ir reikalauja Studio. Žr. [Tiesioginis .3dm ryšys](topic:live-3dm-link).
- **Matykite kitų žymeklius.** Bendroje sesijoje kiekvieno asmens žymeklis rodomas su vardu ir elementu, kurį jis pasirinko. Žr. [Dirbkite kartu tiesiogiai](topic:work-live).
- **Gamyklos aikštelė.** Įjunkite Gamyklos aikštelės priedą {{ui:Parametrai}} › {{ui:Priedai}}. Kai paskelbiate programą {{ui:Gamyba}} skirtuke, ji gali {{ui:Pridėti prie gamyklos darbų eilės}} arba {{ui:Įrašyti kaip darbo failą}}. Ji niekada nesiunčia ir nepaleidžia mašinos.

### Analizė ir detalės

- **Solid FEM priedas.** Įjunkite {{ui:Solid FEM}} {{ui:Parametrai}} › {{ui:Priedai}} (jis išjungtas, kol neįjungsite), ir dešiniajame skydelyje atsiranda skirtukas {{ui:Solid FEM}}. {{ui:Sudaryti detalės tinklelį}}, 3D vaizde pasirinkite fiksuotus paviršius ir apkrovas, {{ui:Skaičiuoti}}, o poslinkius, von Mises įtempius ar formos režimą nubraižykite su {{ui:Rodyti ant modelio}}. Žr. [Solid FEM: įtempių patikra](topic:solid-fem-check).
- **Lankas eskizuose, dešimt būdų.** Rodyklė šalia {{ui:Lankas}} eskizo įrankių juostoje išvardija: 3 taškai, Pradžia Centras Pabaiga, Pradžia Centras Kampas, Pradžia Centras Ilgis, Pradžia Pabaiga Kampas, Pradžia Pabaiga Kryptis, Pradžia Pabaiga Spindulys, Centras Pradžia Pabaiga, Centras Pradžia Kampas, Centras Pradžia Ilgis ir Tęsti. Žr. [Lankas dešimčia būdų](topic:sketch-arc-methods).
- **JK plieno profiliai.** Suvirinimo konstrukcijos gali naudoti 976 JK profilius (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); įveskite dydį, pavyzdžiui, `305x165x40 UB`. Žr. [Konstrukciniai elementai](topic:structural-members).

### Spausdinimas

- **Spausdinimo etapas.** Įrankių juostos mygtukas {{ui:Spausdinimo etapas}} (priedas 3D spausdinimas, įjungtas pagal numatytuosius nustatymus) padeda detalės kūnus ant punktyrinės lovos: {{ui:Išklioti plokštumoje}}, {{ui:Pasukti 90°}}, {{ui:Išdėstyti ant lovos}}, {{ui:Sutalpinti visus ant lovos}}, {{ui:Peržiūrėti sluoksnius}}, tada {{ui:Siųsti į 3D spausdintuvą}} per USB, Klipper (Moonraker), OctoPrint ar PrusaLink. Niekas nesiunčiama, kol nepatvirtinsite, o detalė niekada nekeičiama. STL ar 3MF failui žr. [Paruoškite detalę 3D spausdinimui](topic:print-3d).
- **Dervos spausdinimas.** Priedai {{ui:Parametrai}} › {{ui:Priedai}} – visi išjungti, kol juos įjungsite: dervos pjaustyklė, ekspozicijos bandymas ir failų formatai Elegoo GOO, SL1, Chitubox CBDDLP/CTB ir Anycubic. Pjaustymas vyksta atskirame darbo sraute, todėl puslapis lieka jautrus.

## Visose programose

- Kiekvienas užvedimo patarimas yra Bootstrap įrankinė užuomina.
- Pradžios patarime yra uždarymo mygtukas; jis lieka uždarytas.
- Skirtukų eilutė skydelyje, kuri netelpa, slenka į šalį, o ne yra nukerpama.
- Naršyklės skirtukas rodo atidaryto dokumento pavadinimą prieš PartCraft | CadCraft.
- {{ui:Parametrai}} rodo darbo srities {{ui:Išdėstymas}} kaip išskleidžiamąjį sąrašą, o kalbos laukelis rodo visas kalbas, kurias palaiko versija.
- Svoris ir temperatūra yra vienetų tipai vienetų nustatymuose.

## Pataisyta

- Eskizo lanko meniu dabar rodo kiekvieną metodą.
- Priedų įrankių juosta ir naršyklės skirtuko pavadinimas ištaisyti 2026-11-09.

## Nuoširdūs apribojimai

- Tikslusis STEP buvo perskaitytas OpenCascade (galiojantys kietieji kūnai, tūriai lygūs rankiniu būdu apskaičiuotiems). Jis dar neatidarytas kiekvienoje CAD ar CAM programoje, o surinkimas nerašomas kaip tikslusis STEP.
- Niekas nebuvo atspausdinta tikru spausdintuvu. Pjaustymas, G kodas ir dervos failai buvo nuskaityti mūsų pačių programų ar pakaitinio spausdintuvo; nė vienas dervos formatas nebuvo įkeltas į spausdintuvą, o spausdintuvų dydžiai ir ekspozicijos yra pradiniai orientyrai.
- Solid FEM yra tiesinis, izotropinis, elastingas, su viena medžiaga detalei, be kontakto, takumo ar išlinkimo. Įtempiai ties fiksuotais paviršiais ir aštriais kampais priklauso nuo tinklelio. Tai patikros pagalbinė priemonė, neperžiūrėta inžinieriaus.
- Didelių surinkimų laikai gauti serveryje be GPU; pilnos detalizacijos kadras su 20 000 detalių vis dar užtrunka sekundes.
- Suapvalinimai veikia porose paviršių; bendro viršūnės mišinio nėra, o nėra suapvalinimo tarp paviršių, kurie nesusitinka.
- Rhino ryšys niekada neveikė tikrame Rhino ar Grasshopper. Dokumentai išbandyti dviem programomis viename aplanke, o ne dviem žmonėmis tinklo diske.
- Paviršių pritaikymas tikram skenavimui dar nebuvo rankiniu būdu patikrintas. Kalbos, išskyrus anglų, yra mašininiai juodraščiai.
- Windows diegimo programos nepasirašytos kodu, o macOS disko vaizdas nėra notarizuotas. Žr. [Trikčių šalinimas](topic:troubleshooting).

Ankstesni pakeitimai yra [Kas naujo 0.7](topic:whats-new-0-7).

## Ankstesnė: 0.8 ir 0.8.1

Tai, kas pasikeitė PartCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. Simuliacija atsako redaguojant ir pasako, kas pirmiausia sulūš, surinkimams atsiranda judesio tyrimai, o naujos darbo sritys kuria laisvos formos paviršius ir detales pagal fiziką. 0.8.1 yra nedidelis taisymų leidimas.

### Nauja

**Simuliacija**

- **Atnaujinti, kol redaguoju.** Pažymėkite {{ui:Atnaujinti, kol redaguoju}} bloke {{ui:Skaičiuoti}}, ir atsakymai seka jūsų pakeitimus. Pakeiskite matmenį, apkrovą ar medžiagą – greitas atsakymas, padarytas su elementais keturis kartus didesniais, iš karto pasirodo; kai sustojate maždaug sekundei, tyrimo patikslintas atsakymas jį pakeičia. Rezultatai nurodo, kurį žiūrite. Plieninėje konsolėje greitas atsakymas buvo 1 % tikslumu išlinkimo ir apie 4 % įtempių atžvilgiu patikslinto. Žr. [Tikrinkite įtempius ir išlinkimą](topic:simulation#update-while-you-edit-live).
- **Kas pirmiausia sulūš.** Statiniam ar lenkimo tyrimui {{ui:Kas pirmiausia sulūš?}} bloke **Sulaužyk** keičia apkrovas, kol detalė pasiduoda. Ji išvardija, nuo blogiausio, apkrovos koeficientą iki pirmojo takumo (su raudonu žymekliu, kur įtempiai didžiausi) ir apkrovos koeficientą iki lenkimo. Koeficientas žemiau 1 reiškia, kad detalė jau pasiduoda pagal apkrovą, o Problemos rodo klaidą. Koeficientai gaunami iš tiesinio tyrimo, todėl jie tiek pat geri, kiek geras pats tyrimas. Žr. [Tikrinkite įtempius ir išlinkimą](topic:simulation#find-out-what-breaks-first-break-it).
- **Takumas ir kontaktas.** Dar du tyrimų tipai: netiesinis, kai medžiaga seka savo tiesią liniją iki takumo įtempio, o paskui plokštesnį nuolydį, su nubraižyta plastine deformacija, ir kontakto, kai atskiros dalys spaudžia viena kitą (be trinties) arba lieka prilipusios (sujungtos). Apkrovos žingsnis, kuris neįsitvirtina, arba dalys, kurios per daug įsiremia viena į kitą, rodomi Problemų skydelyje. Trintis, didelis slydimas, dideli sukimai, dideli poslinkiai ir nuovargis neskaičiuojami. Žr. [Tikrinkite įtempius ir išlinkimą](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX failai.** {{ui:Eksportuoti}} › {{ui:CalculiX failas (.inp)}} išsaugo tyrimą CalculiX – atskirai programai, kurią įdiegiate ir paleidžiate patys; {{ui:Eksportuoti}} › {{ui:CalculiX rezultatai (.frd)}} nuskaito jos rezultatų failą atgal ant to paties tinklelio. PartCraft niekada nepaleidžia tos programos ir praneša, jei detalė pasikeitė nuo failo įrašymo.

**Surinkimai**

- **Judesio tyrimai.** {{ui:Surinkimas}} › {{ui:Judėjimas}} valdo vienos jungties reikšmę per jūsų nurodytą laiką (pastovus greitis, sušvelninimas, sinusas arba pirmyn ir atgal), padeda surinkimą kiekviename žingsnyje su jungtimis ir uždarais ciklais bei praneša, kas susikerta ir kaip arti prisiartina detalės. {{ui:Pridėti tašką}} braižo taško padėtį, greitį ir pagreitį, jungties reikšmę ir tarpą laike; {{ui:Įrašyti CSV}} ir {{ui:Įrašyti grafiką}} juos įrašo. Po {{ui:Paleisti}} žingsnis per paleidimo juostą perkelia surinkimą į bet kurį žingsnį. Tyrimo nustatymai įrašomi surinkimo faile. Greitis ir pagreitis skaičiuojami iš užfiksuotų padėčių, todėl naudokite daugiau žingsnių, jei aštri viršūnė rodoma per mažai. Žr. [Tikrinkite surinkimą dėl susikirtimų ir judesio](topic:check-assembly#a-motion-study).

**Paviršiai ir detalės iš fizikos**

- **Paviršių darbo sritis.** Pasirinkite {{ui:Paviršiai}} {{ui:Darbo sritis}} laukelyje NURBS kreivėms ir paviršiams šalia detalės: {{ui:Kreivė}}, {{ui:Sujungimas (loft)}}, {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungti}} ir {{ui:Zebra}}, su tęstinumu (G0, G1 ar G2), išmatuotu tiksliuose paviršiuose, ir briauna, blogesnė nei prašėte, išvardijama Problemose su {{ui:Pataisyti sujungimą}}. {{ui:Išlyginti}} matuoja korpuso linijas ieškodama perlinkių ir kreivumo šuolių ir perstato nelygius, jūsų nuokrypio ribose. Paviršiai įrašomi detalės faile ir nekeičia detalės elementų. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).
- **Inžinieriaus darbo sritis.** Pasirinkite {{ui:Inžinierius}} darbo srities perjungiklyje, pasirinkite generatorių ir spustelėkite {{ui:Naujas}}: scenarijus nustato detalės matmenis pagal tai, ką ji turi atlikti (šilumos perdavimas, srautai, slėgis, medžiaga, spausdinimo procesas), naudodamas vadovėlines formules, ją sukuria, o tada grąžina skaičius, kuriuos panaudojo, su šaltiniais, gamybos patikrinimus ir failus analizės įrankiams. Tos pačios įvestys duoda tą pačią detalę bet kuriame kompiuteryje. Generatorius laikomas detalėje, o detalės atidarymas niekada nepaleidžia scenarijaus. Žr. [Detalės iš fizikos: generatoriai](topic:engineer-generators) ir [Rašykite generatorių](topic:write-a-generator).

**Eskizai, brėžiniai ir gamyba**

- **Eskizas iš nuotraukos.** {{ui:Elementai}} › {{ui:Daugiau}} › {{ui:Eskizas iš nuotraukos…}} nubraižo plokščios detalės nuotrauką paprastame fone (kontūras ir skylės) arba pieštuko brėžinį į linijas, lankus ir apskritimus. Įvedate vieną ilgį, patikrinate peržiūrą ir sukuriate eskizą. Žr. [Eskizavimo pagrindai](topic:sketch-basics#a-sketch-from-a-photo).
- **Mastelis ir padalijimas spausdinimui.** {{ui:Eksportuoti}} › {{ui:Mastelis spausdinimui (STL arba 3MF)…}} keičia mastelį pagal ašis nekeisdamas detalės, pavyzdžiui, pagal susitraukimo leidimą. {{ui:Eksportuoti}} › {{ui:Padalyti spausdinimui (dalių zip archyvas)…}} supjausto detalę, per didelę jūsų lovai, į numeruotas dalis, sujungtas kaiščiais, raktais, uodeginėmis jungtimis, kaiščių skylėmis ar magnetų lizdais. Žr. [Spausdinkite 3D](topic:print-3d).
- **Išdėstyti lakštai į G kodą.** {{ui:Eksportuoti}} › {{ui:Išdėstytus lakštus į G-kodą}} nuskaito išdėstytą DXF ir sukuria po programą kiekvienam lakštui per jūsų pasirinktą postprocesorių: pirma skylės ir išpjovos, tada kontūrai. Ji neplanuoja įvedimo linijų, pjovimo tvarkos ar bendrų briaunų. Žr. [Išdėstykite plokščias detales ant lakštų](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Brėžiniai, kurie daro daugiau patys.** {{ui:Lapas}} › {{ui:Automatinis}} parenka mažiausią A formato lapą, kuris telpa vaizdus didžiausiu standartiniu mastu iki 1:1. {{ui:Pamatuoti skyles}} kiekvienai skylei uždeda centro žymę, po vieną iškvietimą kiekvienam dydžiui ir padėtis nuo vaizdo apatinio kairiojo kampo. Žr. [Sukurkite brėžinį](topic:drawing-pdf).

**Visose programose**

- **Kalbos.** Programos ateina 54 kalbomis. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jas perskaitys gimtoji kalba.
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} pasirenka Apvynioti (kaip anksčiau), 2 eilutes ar 1 eilutę; juosta, kuri netelpa, slenka į šoną. PartCraft elementų juostoje dažniausiai naudojamas įrankis rodomas didelis, o variantai paslėpti už padalyto mygtuko.
- **Prijunkite savo DI.** Studio yra centras, kuris prijungia jūsų asistentą prie visų aštuonių programų, su tik skaitymo, siūlymo ar redagavimo leidimu kiekvienai programai. Prijungtas asistentas gali sukurti detalę iš sakinio, pavyzdžiui, laikiklį apkrovai, parodyti savo darbą ir kiekvieną patikrą bei ją sukurti; jis praneša, ką nepatikrino (įtempių koncentracija, nuovargis, plastikų šliaužimas). Žr. [Naudoti PartCraft su DI asistentu](topic:use-with-ai-assistants).

### Pataisyta 0.8.1

- **Viso ekrano žymeklio užšalimas.** Žymeklio atrinkimas dabar ribojamas. Priežastis yra mūsų geriausias supratimas ir nebuvo patvirtinta su pranešusiu asmeniu.
- **Kalba vykdymo metu.** Studio ir supakuoti leidimai gali perjungti kalbą veikdami; anksčiau buvo tik anglų. Tai dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.

### Dar neįdiegta šioje versijoje

- Prijungimas prie DI dar nebaigtas: vieno paspaudimo prijungimas Studio viduje, talpinamas naršyklės DI jungtis, jūsų paties API raktas Studio viduje ir paskelbtas MCP paketas nėra pažadėti. Studio neturi savo DI.
- Studio nepasirašytas kodu: Windows gali įspėti, o macOS prašo dešiniojo pelės klavišo, tada Atidaryti. Žr. [Trikčių šalinimas](topic:troubleshooting).
- Tolerancijų sumos vis dar tik vienos krypties: žr. [Tolerancijų sumos](topic:tolerance-stackup).
- Kita išvardyta [Kas dar neįgyvendinta](topic:not-built-yet).

Ankstesni pakeitimai yra [Kas naujo 0.7](topic:whats-new-0-7).
