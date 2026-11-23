---
title: Čo ešte nie je hotové
summary: Všetko, čo tento build PartCraft ešte nerobí, od krútených ťahaní po zobrazenie v palcoch, kótovanie výkresov a podzostavy, s tým, čo robiť dnes namiesto toho.
keywords: chýbajúce, ešte nie, obmedzenia, limity, plán, presné jadro, zaoblenie, skosenie, škrupina, ťahanie po dráhe, loft, import STEP, simulácia, výroba, krútené ťahanie, dotyčnica na konci lofta, zaoblenie plochy, rovnice, palce, kóty výkresu, podzostavy, cloud, tablet, telefón
from: 97b10a29
---

PartCraft je skorá verzia. Táto stránka uvádza, čo ešte nerobí, aby ste to nemuseli hľadať, a čo robiť namiesto toho dnes. Nič tu nemá termín.

## Vyžaduje presné jadro

Táto verzia stavia každú súčiastku s jadrom siete (pozri [Sieťové jadro](topic:solid-kernels)). Všetko nižšie vyžaduje presné geometrické jadro, ktoré táto verzia zatiaľ nemá. Súčiastky uložené s týmito prvkami sa stále otvoria: prvky zostanú v histórii, označené ako nehotové, a pri uložení sa zachovajú.

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| {{ui:Zaoblenie}} a {{ui:Skosenie}} na okrúhlych hranách; zaoblenia, ktorých polomer sa mení pozdĺž hrany; zaoblenia plynulo spojené tam, kde sa stretávajú (sieťové jadro ich zrezáva na skos) | Zaoblenie a skosenie fungujú na rovných hranách medzi plochými plochami; ostatné rohy zaoblite v náčrte pred vytiahnutím ({{ui:Zaoblenie}} v náčrte, {{key:F}}) |
| {{ui:Škrupina}} otvárajúce zakrivené plochy; steny rôznych hrúbok | Otvorte rovné plochy; pridajte materiál vytiahnutiami tam, kde má byť stena hrubšia |
| {{ui:Ťahanie po dráhe}}, {{ui:Loft}}, {{ui:Úkos}} na zakrivených plochách; vytiahnutie po plochu, nasledujúcu plochu alebo vrchol; zúžené vytiahnutia | Vytiahnite alebo otočte, v krokoch tam, kde treba; vytiahnite do hĺbky, ktorú odmeriate |
| {{ui:Rebro}}, {{ui:Základná príruba}}, {{ui:Hranová príruba}} a rozvinuté tvary | Vytiahnite plech alebo profil rebra |
| Plochy: dokončenie {{ui:Tvar}} do súčiastky, {{ui:Záplata}}, {{ui:Loft plocha}}, {{ui:Plocha Gordon}}, {{ui:Zošiť}}, {{ui:Zhrubiť}}, {{ui:Odsadená plocha}}, {{ui:Predĺžiť plochu}}, {{ui:Orezať plochu}} | Nie je k dispozícii |
| Viac telies: {{ui:Spojiť}}, {{ui:Presunúť teleso}}, {{ui:Mierka telesa}}, {{ui:Pole po dráhe}}, prvky, ktoré vytvárajú nové teleso | Jedno teleso; vzory a zrkadlá kopírujú prvky |
| Náčrty, roviny, osi a body na plochách, ktoré nájde len presné jadro (plocha vytvorená zaoblením, stena otvoru, plocha importovaného telesa) | Náčrt na základných rovinách, referenčných rovinách a rovných plochách vytiahnutí a otočení |
| Výsledok generatívneho návrhu otvorený ako súčiastka alebo do nej pridaný (stane sa importovaným telesom) | Stiahnite výsledok ako STL alebo STEP |
| Úprava zakrivených plôch otvoreného súboru STEP ako presných plôch; presný STEP splajnových, zametaných a otáčaných plôch zo súboru STEP, bočné splajny, modelované závity, telesá STL / OBJ / 3MF a zostavy; STEP pre iné modelovacie programy | {{ui:Otvoriť}} číta STEP ako trojuholníky a zachováva rovné plochy, valce, kužele, gule a torusy súboru pre export ([Otvoriť súbor STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} zapíše každú analytickú plochu presne a ponechá ich ako facety ([Export](topic:export-files#for-other-cad-programs-step)); makro pre iný modelovací program stále zapisuje |
| Skutočné oblúky v pohľadoch výkresu | Pohľady a rezy sa kreslia z facetov |
| Presné objemy, plochy a vzdialenosti | {{ui:Merať}} dáva čísla faceted telesa, o niečo nižšie pri okrúhlych súčiastkach; jemnejšie nastavenie **Krivky** ich priblíži |

Niektoré riadky v tabuľkách nižšie navrhujú jeden z týchto prvkov ako spôsob, ako obísť niečo iné. Tieto návrhy platia, keď sa presné jadro vráti.

## Prvky

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Zaoblenia plôch, plné zaoblenia, zaoblenia s polomermi nastavenými v bodoch pozdĺž hrany | Konštantný alebo lineárne premenný {{ui:Zaoblenie}}; viac prvkov zaoblenia |
| Škrupiny s rôznymi hrúbkami steny | Jedna hrúbka {{ui:Škrupina}}; pridajte materiál vytiahnutiami tam, kde má byť stena hrubšia |
| Sklon na voľných (splajnových) plochách | {{ui:Úkos}} funguje na rovných, valcových a kužeľových plochách |
| Krútené ťahania, tenkostenné a plošné ťahania; koncová dotyčnica na prvku loft; loft s jednou vodiacou lištou; splajnové dráhy | {{ui:Ťahanie po dráhe}} s pevnou orientáciou alebo koncovým mierkovaním; loft s dvoma alebo viacerými vodiacimi lištami: pozri [Ťahanie, loft a sklon](topic:sweep-loft-draft) |
| Rebrá z oblúkov alebo splajnov; rebrá narastené štvorcovo k náčrtu (z pohľadu zhora); sklon na rebrách; viac rebier z jedného náčrtu | {{ui:Rebro}} z jednej reťaze čiar v rovine rebra: pozri [Rebrá a výstuhy](topic:rib) |
| „Až k“ zakrivenej ploche, „až k nasledujúcej“ zastavujúcej sa na zakrivenej ploche | Až k rovnej ploche alebo referenčnej rovine |
| Protiotvory vŕtané zvrchu, palcové a rúrkové závity, kužeľové závity, ukončenia závitu a skosené začiatky závitu | Zahĺbenie s malou hĺbkou; metrické ISO a lichobežníkové závity, kozmetické alebo modelované: pozri [Závity na hriadeľoch a v dierach, nakreslené alebo modelované](topic:threads) |
| Vytiahnutia tenkých prvkov | Nakreslite obe steny profilu |
| Kópie vzoru preskakované jednotlivo, vzory výplne | Použite samostatné prvky; vzory pozdĺž krivky: {{ui:Pole po dráhe}} |
| Kopírovanie vzorov, zrkadlá, zaoblenia, skosenia, škrupiny a importované telesá | Skopírujte náčrt alebo prvok, na ktorom sú postavené, alebo ho vzorujte |
| Presná (G1) dotyčnica v mimoriadnych bodoch tvaru {{ui:Tvar}}; zlúčenie záplat tvaru do väčších plôch | Zvýšte úroveň tvaru: približované záplaty sa zmenšia; pozri [Voľné tvary pomocou Tvar](topic:form-surfaces) |
| Tvar zložený z viacerých oddelených uzavretých kusov v jednom prvku; mosty medzi tvarmi | Jeden uzavretý kus na prvok tvaru; spojte ich pomocou {{ui:Spojiť}} |
| Výber telies plôch vo pohľade (okrem bodov orezania a záplaty); povrchové zaoblenia; odorezanie; G2 záplaty; Gordonove plochy dotyčné k zakriveným susedom (dotyčné k rovinám a rovným plochám je hotové) | Vyberte ich menom v paneli prvku; najprv zhrubnite, potom zaoblite teleso |
| Zoznam telies v histórii; vynechanie skrytých telies z exportov | Premenujte a skryte telesá v zozname telies v paneli súčiastky; zmažte alebo potlačte prvok, ktorý vytvoril teleso, aby ste ho vynechali |
| Neuniformná mierka, ktorá zachováva valce a kužele ako analytické; neuniformné škálovanie ofsetových plôch | {{ui:Mierka telesa}} urobí zakrivené plochy uzavretými B-splajnami (v rámci 0.0000004 mm); uniformná mierka zostáva presná |
| Kombinovanie telies plôch; Minkowského súčty | Najprv {{ui:Zošiť}} alebo {{ui:Zhrubiť}}, potom {{ui:Spojiť}} |
| Analýza tolerancií: reťazce tolerancií, ktoré sa otáčajú za rohy (2D a 3D vektorové slučky), citlivosti vypočítané z geometrie, Monte Carlo s inými rozloženiami, tolerancie veľkostí na kótach náčrtu, bonusová tolerancia z podmienky materiálu | {{ui:Reťazec}} v zostave: jeden smer, najhorší prípad a RSS, tolerancie zadané ručne, z všeobecnej tolerancie popisového poľa alebo z rámov GD&T: pozri [Reťazce tolerancií](topic:tolerance-stackup) |
| Rozmiestnenie: poradie rezania a zavedenie, rezanie spoločných hrán raz, súčiastky, ktoré musia zostať spolu; zvyšky z rolí, zásoby zdieľané medzi projektmi | {{ui:Rozmiestniť ploché súčiastky na tabule…}} s rozstupmi, okrajmi, otáčaním a smerom vlákna: pozri [Rozmiestniť ploché súčiastky na tabule](topic:nest-flat-parts); zostávajúce plechy sa uchovajú a použijú ako prvé: pozri [Uchovať a znovu použiť odrezky](topic:nest-offcuts); plán rezu naplánujte v softvéri vašej rezačky |
| Plechové diely: lemy, zlomy, zrezané a obrysové príruby; príruby na zakrivených hranách alebo na plochách ohnutej základnej príruby; ohyby z náčrtu; uzávery rohov; tvárniace nástroje; prevod telesa na plech; rozvinutý tvar ohnutej základnej príruby s výrezmi; tabuľky ohybov | {{ui:Základná príruba}} (plech alebo ohnutý profil), {{ui:Hranová príruba}} na rovných hranách plechu s odľahčením ohybov a rozvinutý tvar s K-faktorom: pozri [Plechy](topic:sheet-metal) |
| Analýza sklonu na zostavách; hľadanie deliacej čiary; analýza hrúbky steny | {{ui:Analýza úkosov}} na súčiastke v Návrh: pozri [Kontrola sklonu pre lisovanie a odlievanie](topic:draft-analysis); otvorte každú súčiastku zostavy na kontrolu |

## Náčrty

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Elipsy, dotyčné oblúky, kužeľosečky, splajny so zadaným stupňom alebo váhami (NURBS) | Splajny (kubické), oblúky a kružnice so vzťahmi Dotyčnica |
| Bod na splajne (vzťah), vzťahy krivosti (G2) | Umiestnite vlastný bod splajnu tam, kde musí prechádzať |
| Ofsetové kópie splajnov, ktoré sledujú neskoršie zmeny; ofsety reťazí s ostrými rohmi splajnov | Ofsetujte znova po zmene; najprv zaoblite roh |
| Kópie vzorov, ktoré zostávajú prepojené s originálom; vzory pozdĺž krivky | Vzorujte znova po zmene |
| Premietanie voľných alebo naklonených kruhových hrán, premietnutá geometria, ktorá sleduje súčiastku | Premietnite priame a rovnobežné kruhové hrany, potom okótujte |
| Riadené (referenčné) kóty | Čítajte veľkosti z panela alebo z údajov súčiastky |
| Kolineárne vzťahy | Rovnobežné so vzdialenosťou 0 |
| Vkladanie do iného programu (systémová schránka) | Exportujte DXF, STEP, STL alebo 3MF |
| Písanie oblúkov, relatívne alebo polárne súradnice | Pište čiary a kružnice; kreslite oblúky nástrojom {{ui:Oblúk}} |
| Výber geometrie bez ukazovateľa | Potrebuje kliknutie alebo ťuknutie |

## Parametre a jednotky

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Konfigurácie, ktoré menia materiály; CSV tabuľka návrhu, ktorá vypína prvky | Konfigurácie nastavujú parametre a zapínajú a vypínajú prvky: pozri [Konfigurácie a tabuľky návrhu](topic:design-tables); `partcraft variants` zostaví uložené konfigurácie podľa mena, vrátane vypnutých prvkov: pozri [Vytvoriť balík variantov z vašich konfigurácií](topic:variant-pack) |
| Rovnice na číslach vlastných panelov najnovších prvkov (rovina, ťahanie, sklon a podobne) | Napíšte ich do skriptu alebo pomocou `partcraft set` ([Skripty a príkazový riadok](topic:scripts-and-cli)) |
| Súčiastka zobrazená v palcoch | Veľkosti sa zobrazujú v milimetroch; napíšte `2in` do políčka čísla alebo do výrazu a bude to 50.8 |

## Súbory

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Úprava vlastných prvkov importovaného telesa STEP (prichádza bez histórie) | Pridajte alebo odrežte materiál vlastnými prvkami |
| Čítanie farieb, názvov, štruktúry zostavy a PMI zo STEP | Nie je k dispozícii |
| glTF, OBJ, IGES, export Parasolid; DWG 3D súčiastky (len balík variantov zapisuje DWG: list výkresu) | STL alebo 3MF pre siete; STEP pre telesá; DXF pre 2D |
| Otváranie IGES, DXF alebo vlastných súborov iných programov (súbory `.3dm` sa otvoria ako jedno teleso: [Otvoriť model .3dm ako pevné teleso](topic:open-3dm-files)) | Požiadajte o STEP alebo uzavretú sieť STL, OBJ alebo 3MF: [Otvoriť STL, OBJ alebo 3MF](topic:open-meshes) |
| Štruktúra zostavy (strom s názvami súčiastok) v exportovanom STEP | Zostava STEP je jeden zložený útvar umiestnených telies |
| Uloženie do priečinka podľa vášho výberu bez sťahovania prehliadača | Zapnite "opýtať sa, kam uložiť" v nastaveniach sťahovania prehliadača |

## Výkresy

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Kóty nad tri celkové rozmery (veľkosti otvorov, polohy, tolerancie veľkostí) | Označte PDF alebo exportujte DXF a okótujte ho v 2D CAD programe |
| Viac než jeden rez alebo detail; zarovnané, odlomené a pomocné pohľady | Jeden rez a jeden detail na výkres |
| Voľný text, poznámky a tabuľky na {{ui:List}} (okrem bloku názvu a revízie) | Poznámka k úprave povrchu alebo text pridaný do PDF |
| Projekcia v prvom uhle, pohyblivé pohľady, zvislé listy | Tretí uhol, automatické rozloženie, vodorovné listy A4–A0 a ANSI A–E |
| Živý rez: viac rovín alebo rezný box naraz, obrys okolo rezu, uloženie rezu do súboru | Jedna rovina naraz z {{ui:Pohľady}} › {{ui:Rez}}; pozri [Pozrieť dovnútra pomocou rezu](topic:section-view) |
| Zostavné výkresy s viacerými pohľadmi, kótami alebo bublinami, ktoré môžete posúvať | Jeden izometrický (alebo rozložený) pohľad s automatickými bublinami a zoznamom častí |
| Kopírovanie a vkladanie GD&T a symbolov povrchu | Umiestnite každý pomocou Báza, Rám alebo {{ui:Povrchová úprava}} |
| Návody: súbory STEP v {{ui:Z iného súboru…}} v Illustrate, model priamo z ModelCraft alebo BimCraft, obrázky v kvalite sledovania lúča, interaktívne 3D v PDF | Otvorte STEP v Návrh a spustite návod {{ui:Z otvorenej súčiastky}}; uložte model ako glTF (.glb); PNG obrázky 3D pohľadu; interaktívny 3D súbor: pozri [Spustiť návod v Illustrate](topic:illustrate) |

## Zostavy

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Ozubené, zubové, vačkové a skrutkové spoje; guľový kĺb obmedzený na kužeľ; spoje na zakrivených plochách alebo medzi bodmi | Tuhé, otočné, posuvné, valcové, rovinné, guľové a čapové v drážke spoje na rovných plochách, každá hodnota s vlastnými limitmi: pozri [Zostavenie](topic:build-assembly) |
| Rozložené kroky, ktoré otáčajú súčiastky, a presúvanie súčiastok, ktoré umiestňujú spoje | Priame rozložené kroky; odstráňte spoj na ručné presunutie súčiastky |
| Podzostavy | Len jedna úroveň súčiastok |
| Ozubenia, vačky, kontakt | Nie je k dispozícii |

## Výroba

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| 3D adaptívne vyčistenie a ofsetové hrubovanie v 3D; dokončovanie vodnou čiarou, ceruzkou, radiálne a špirálové; adaptívne prechody zapísané ako oblúky | 3D hrubovanie v priamych radoch a obrábanie zvyškov: pozri [3D hrubovanie a obrábanie zvyškov](topic:rough-3d); dokončovanie {{ui:Rovnobežnosť}} a {{ui:Hrebienkové}}: pozri [3D dokončovanie](topic:finish-3d); 2.5-osové čelo, kapsa, 2D adaptívne, kontúra, vŕtanie a skosenie: pozri [Vytvoriť dráhy nástroja a G-kód](topic:manufacture) |
| Rezanie swarf, prúdové dráhy a viacosé hrubovanie dráh; kódy naklonenej pracovnej roviny (G68.2); kontrola kolízie držiaka a stroja; simulácia 5-osových a otočných rezov | Naklonený nástroj pre ľubovoľnú operáciu, 5-osové dokončovanie guľovou frézou a otočné dokončovanie 4. osou: pozri [4- a 5-osové obrábanie](topic:multi-axis) |
| Vŕtanie a vnútorné závity na sústruhu, cykly G71/G76, oblúky v dráhach sústruženia, živé nástroje, podvreteno | Vonkajšie sústruženie: čelo, hrubovanie, dokončenie, zapichovanie, odrezanie, závit, vŕtanie na strede: pozri [Sústruženie na sústruhu](topic:turning) |
| Snímanie uhla alebo rohu, nastavovač nástroja, meranie veľkosti voči tolerancii | Snímanie plochy, strany, otvoru alebo výstupku na nastavenie posunu nulového bodu: pozri [Snímanie sondou](topic:probing) |
| Kontrola kolízie držiaka a stopky | Sledujte upozornenia na dĺžku zubov a kontrolujte v simulátore vášho riadiaceho systému |
| Dĺžka života nástroja a cykly podprogramov v postprocesore; načítanie postprocesorových súborov iných programov | Napíšte alebo zmeňte postprocesor vo vlastnom formáte PartCraft: pozri [Postprocesory, ktoré môžete upraviť](topic:post-processors) |
| G-kód v palcoch (G20) | Len milimetre (G21) |

## Simulácia a generatívny návrh

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Nelineárne štúdie: plastické tečenie, veľké priehyby, kontakt medzi súčiastkami, únava | Lineárna statika a vlastné frekvencie: pozri [Kontrola napätia a priehybu](topic:simulation); udržiavajte bezpečnostný faktor výrazne nad 1 |
| Nelineárne vzpernie (nedokonalosti, za vzperom, preskok) | Lineárne faktory zaťaženia vzpernutím s veľkou rezervou: pozri [Teplo, tepelné napätie a vzpernie](topic:thermal-and-buckling) |
| Žiarenie medzi plochami (faktory pohľadu), kontaktný odpor, materiály závislé od teploty, zotrvačnosť v tepelnom napätí (tepelné rázové vlny) | Žiarenie do okolia, ustálené alebo kvázistatické tepelné napätie v čase, konštantné vlastnosti: pozri [Teplo, tepelné napätie a vzpernie](topic:thermal-and-buckling) |
| Automatické spresnenie pre prechodné teplo a štúdie s tepelným zaťažením; hrubšia sieť tam, kde je chyba malá; cieľ na lokálnej veličine (špičkové napätie v jednom mieste) | **Spresniť automaticky** pre statické, vzpernie, vlastné frekvencie a ustálené tepelné štúdie, založené na chybe v celej súčiastke: pozri [Kontrola napätia a priehybu](topic:simulation); inak znížte veľkosť prvku |
| Ložiskové a skrutkové zaťaženia, vzdialené sily, momenty, pružiny, predpísané posuny | Sily a tlaky na plochy, gravitácia; pevné a bezfrikčné plochy |
| Simulácia zostáv; materiály, ktoré sa líšia podľa smeru (tlačené vrstvy, kompozity) | Jedna súčiastka, jeden izotropný materiál |
| Viac vlákien riešiča pre tetraedrické štúdie, prenos tepla a generatívny návrh; akékoľvek vlákna na stránke, ktorá nie je cross-origin izolovaná | Štúdie voxelov, vzpernie, napätie v čase a laminárne prúdenie používajú vlákna, kde to stránka dovolí: pozri [Nastavenia PartCraft](topic:settings) |
| Turbulentné prúdenie s konštrukčnou presnosťou (model Spalart–Allmaras je zahrnutý ako experimentálny: trenie v potrubí o 30 až 34 % vyššie, znovupripojenie za spätným schodom o 21 až 39 % kratšie; plánované: jemnejšie bunky pri stenách), prenos tepla v prúdení, nestacionárne prúdenie, voľné povrchy, nenewtonovské tekutiny, rotujúce súčiastky | Laminárne, ustálené, izotermné prúdenie newtonovskej tekutiny, alebo experimentálny turbulentný model pre kvalitatívne vzory: pozri [Simulovať prúdenie tekutín](topic:flow-simulation); panel upozorní, keď je Reynoldsovo číslo nad laminárnou hranicou |
| Obmedzenia napätia a výrobné pravidlá (previsy, smery frézovania) v generatívnom návrhu; viac materiálov v jednom tvare | Najtuhší tvar pre objem; výsledok skontrolujte v Simulácii: pozri [Vytvorenie tvaru zo zaťažení](topic:generative-design) |
| Výsledok ako upraviteľné (hladké, parametrické) teleso | STL, STEP s facetmi alebo súčiastka s výsledkom ako importované teleso s facetmi |
| Elektrický stroj: rotor otáčajúci sa v statore, krútiaci moment voči uhlu, nasýtená oceľ, magnety strácajúce silu za kolenom, vírivé prúdy a straty v železe a medi; magnetické polia v 3D alebo na zakrivených sieťach | Lineárna 2D magnetostatika na mriežke v knižnici analýz: cievky, železo, permanentné magnety na ich čiare spätného chodu, medzery, indukčnosť a príťažlivá sila: pozri [Magnetické polia v 2D](topic:magnetic-fields-2d) |

## Skripty

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Nápoveda pri prejdení myšou, zarážky a krokovanie v editore skriptov | Nájsť, zbaliť a dopĺňanie sú k dispozícii (pozri [Písanie a spúšťanie skriptov](topic:craftscript)); inak váš vlastný editor: {{ui:Uložiť}} a {{ui:Otvoriť}} v skupine Skript presúvajú skripty dnu a von; vstavané funkcie sú vypísané v [Jazyk CraftScript](topic:craftscript-language) |
| Zarážky a krokovanie cez skript | `disp` a `fprintf` cestou; {{key:Mod+Enter}} spúšťa niekoľko vybraných riadkov naraz |
| Polia a grafy, ktoré skript zobrazuje, nakreslené v pracovnom priestore Návrh; skripty meniace parametre súčiastky | Zobrazia sa v pracovnom priestore Skript; skripty čítajú parametre pomocou `param` (pozri [Písanie a spúšťanie skriptov](topic:craftscript)), menia ich na karte {{ui:Parametre}} |
| Obrázky a tabuľky vedľa grafov; úprava grafu (zoom, limity osí) pred uložením | Vedľa seba zobrazuje grafy; uložte graf ako PNG, SVG alebo CSV a dokončite ho inde |
| numpy a iné balíky Pythonu; Python offline; skladanie Pythonu v editore; Pascal Script | Štandardná knižnica Pythonu, CraftScript a Lua: pozri [Skripty v Pythone](topic:craftscript-python) |
| Odovzdávanie funkcií Lua vstavaným funkciám; volanie knižničnej funkcie z Lua menom vytvoreným počas behu skriptu | Napíšte meno knižničnej funkcie do skriptu (`cs.static_tet(…)`) alebo ju zavolajte zo skriptu CraftScript |

## Aplikácia

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Ukladanie do cloudu, zdieľanie a história verzií | Zatiaľ nie je k dispozícii. Ukladajte súbory do počítača a verzie si uchovávajte podľa názvu |
| PartCraft ako nainštalovaná aplikácia na iPad a iPhone | Používajte PartCraft v prehliadači zariadenia; na Androide a na počítači beží aj v CadCraft Studio (getcadcraft.com/download) |
| Kontextové ponuky (pravé tlačidlo) | Panel nástrojov a pravý panel |
| Plná práca offline od čistého štartu | Len keď bola aplikácia uložená na offline použitie: pozri [Práca offline](common:offline) |

Nahláste, čo vám najviac chýba, cez stránku podpory na webe: ovplyvní to, čo príde ďalej.

## Engineer (generátory a polia)

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Hlavice, prípojky a armatúry na vygenerovanom výmenníku tepla; krivky teploty pre pevnosť materiálu; straty v T-kuse v rozdeľovači | Generátory vytvoria jadro a trubice; pridajte armatúry v Návrhu; použite údaje o materiáli pri izbovej teplote s bezpečnostným faktorom |
| Pridávanie generátorov z adresára doplnkov jedným kliknutím | {{ui:Otvoriť}} v pracovnom priestore Engineer pridá generátor zo súboru |
| Súbor poľa jemnejší než vlastná voxelová veľkosť generátora; čítanie súborov `.vdb` | Uložte jemnejšie pole zo skriptu; `.vdb` sa zapisuje, nečíta sa |
| Výpočty tlakových nádob podľa normy | Učebnicové vzorce pre tenké a hrubé steny s bezpečnostným faktorom, ktorý zvolíte; nie je to normová rezerva |
| Generátory pre ostatné aplikácie | PartCraft len v tejto verzii |
