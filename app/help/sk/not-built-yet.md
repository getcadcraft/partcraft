---
title: Čo ešte nie je hotové
summary: Všetko, čo táto verzia PartCraft ešte nerobí, od krútených ťahaní po zobrazenie v palcoch, kótovanie výkresov a podzostavy, s tým, čo robiť namiesto toho dnes.
keywords: chýbajúce, ešte nie, obmedzenia, limity, plán, presné jadro, zaoblenie, skosenie, škrupina, ťahanie po dráhe, loft, import STEP, simulácia, výroba, krútené ťahanie, dotyčnica na konci lofta, zaoblenie plochy, rovnice, palce, kótovanie výkresov, podzostavy, cloud, tablet, telefón
from: 9b868162
---

PartCraft je skorá verzia. Táto stránka uvádza, čo ešte nerobí, aby ste to nehľadali, a čo robiť namiesto toho dnes. Nič tu nemá dátum.

## Potrebuje presné jadro

Táto verzia stavia každú súčiastku sieťovým jadrom (pozri [Sieťové jadro](topic:solid-kernels)). Všetko nižšie potrebuje presné geometrické jadro, ktoré táto verzia zatiaľ nemá. Súčiastky uložené s týmito prvkami sa stále otvoria: prvky zostanú v histórii, označené ako nehotové, a pri uložení sa zachovajú.

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| {{ui:Zaoblenie}} a {{ui:Skosenie}} na zaoblených hranách; zaoblenia, ktorých polomer sa mení pozdĺž hrany; zaoblenia plynulo spojené tam, kde sa stretnú (sieťové jadro ich zrezáva na skosenie) | Zaoblenie a Skosenie fungujú na rovných hranách medzi plochými plochami; ostatné rohy zaoblite v náčrte pred vytiahnutím ({{ui:Zaoblenie}} v náčrte, {{key:F}}) |
| {{ui:Škrupina}} otvárajúca zakrivené plochy; steny rôznej hrúbky | Otvorte ploché plochy; materiál pridajte vytiahnutiami tam, kde má byť stena hrubšia |
| {{ui:Ťahanie po dráhe}}, {{ui:Loft}}, {{ui:Úkos}} na zakrivených plochách; vytiahnutie po plochu, ďalšiu plochu alebo vrchol; zúžené vytiahnutia | Vytiahnite alebo rotujte, v krokoch tam, kde treba; vytiahnite do hĺbky, ktorú odmeriate |
| {{ui:Rebro}}, {{ui:Základná príruba}}, {{ui:Hranová príruba}} a rozvinuté tvary | Vytiahnite dosku alebo profil rebra |
| Plochy: dokončenie {{ui:Tvar}} do súčiastky, {{ui:Záplata}}, {{ui:Loft plocha}}, {{ui:Plocha Gordon}}, {{ui:Zošiť}}, {{ui:Zhrubiť}}, {{ui:Odsadená plocha}}, {{ui:Predĺžiť plochu}}, {{ui:Orezať plochu}} | Nie je k dispozícii |
| Viac telies: {{ui:Spojiť}}, {{ui:Presunúť teleso}}, {{ui:Mierka telesa}}, {{ui:Pole po dráhe}}, prvky, ktoré vytvárajú nové teleso | Jedno teleso; vzory a zrkadlenie kopírujú prvky |
| Náčrty, roviny, osi a body na plochách, ktoré nájde len presné jadro (plocha vytvorená zaoblením, stena diery, plocha importovaného telesa) | Náčrty na základných rovinách, referenčných rovinách a plochých plochách vytiahnutí a rotácií |
| Výsledok generatívneho návrhu otvorený ako súčiastka alebo do nej pridaný (stane sa importovaným telesom) | Výsledok stiahnite ako STL alebo STEP |
| Úprava zakrivených plôch otvoreného súboru STEP ako presných plôch; presný STEP spline, zametaných a rotovaných plôch zo súboru STEP, bočných strán spline, modelovaných závitov; telesá a zostavy STL / OBJ / 3MF; STEP pre iných modelárov súčiastok | {{ui:Otvoriť}} načíta STEP ako trojuholníky a pre export zachová ploché plochy, valce, kužele, gule a tóry súboru ([Otvoriť súbor STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} zapíše každú analytickú plochu presne a zachová ich ako fasety ([Export](topic:export-files#for-other-cad-programs-step)); makro pre iného modelára súčiastok stále zapisuje |
| Skutočné oblúky v pohľadoch výkresu | Pohľady a rezy sa kreslia z fasiet |
| Presné objemy, plochy a vzdialenosti | {{ui:Merať}} dá čísla fasetovaného telesa, pri okrúhlych súčiastkach o niečo nižšie; jemnejšie nastavenie **Krivky** ich priblíži |

Niektoré riadky v tabuľkách nižšie navrhujú jeden z týchto prvkov ako spôsob, ako obísť niečo iné. Tieto návrhy platia, keď sa presné jadro vráti.

## Prvky

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Plošné zaoblenia, úplné zaoblenia, zaoblenia s polomermi nastavenými v bodoch pozdĺž hrany | Konštantné alebo lineárne premenlivé {{ui:Zaoblenie}}; viac zaoblení |
| Škrupiny s rôznymi hrúbkami stien | Jedna hrúbka {{ui:Škrupina}}; materiál pridajte vytiahnutiami tam, kde má byť stena hrubšia |
| Úkos na voľných (spline) plochách | {{ui:Úkos}} funguje na plochých, valcových a kuželových plochách |
| Krútené ťahania, tenkostenné a plošné ťahania; dotyčnica na konci prvku {{ui:Loft}}; loft s jednou vodiacou koľajnicou; cesty spline | {{ui:Ťahanie po dráhe}} s pevnou orientáciou alebo koncovým mierkovaním; loft s dvoma alebo viacerými vodiacimi koľajnicami: pozri [Ťahanie, loft a úkos](topic:sweep-loft-draft) |
| Rebrá z oblúkov alebo spline; rebrá narastené štvorcovo k náčrtu (z pohľadu zhora); úkos na rebrách; viac rebier z jedného náčrtu | {{ui:Rebro}} z jedného reťazca čiar v rovine samotného rebra: pozri [Rebrá a výstuhy](topic:rib) |
| „Až po“ zakrivenú plochu, „až po ďalšiu“ zastavenú na zakrivenej ploche | Až po plochú plochu alebo referenčnú rovinu |
| Zapustené diery, palcové a rúrkové závity, kužeľové závity, výbehy závitov a zrezané začiatky závitov | Zápustná diera s malou hĺbkou; závity ISO metrické a lichobežníkové, kozmetické alebo modelované: pozri [Závity na hriadeľoch a dierach, nakreslené alebo modelované](topic:threads) |
| Vytiahnutia tenkých prvkov | Nakreslite obe steny profilu |
| Kopírovanie vzorov po jednom, vzory výplne | Použite samostatné prvky; vzory pozdĺž krivky: {{ui:Pole po dráhe}} |
| Kopírovanie vzorov, zrkadlá, zaoblenia, skosenia, škrupiny a importované telesá | Skopírujte náčrt alebo prvok, na ktorom sú postavené, alebo ho vzorujte |
| Presná (G1) dotyčnica v mimoriadnych bodoch tvaru; zlúčenie záplat tvaru do väčších plôch | Zvýšte úroveň tvaru: aproximované záplaty sa zmenšia; pozri [Voľné tvary s Tvar](topic:form-surfaces) |
| Tvar zložený z viacerých samostatných uzavretých kusov v jednom prvku; mosty medzi tvarmi | Jeden uzavretý kus na prvok Tvar; spojte ich nástrojom Spojiť |
| Výber plôch telies v pohľade (okrem orezania a bodov záplaty); plošné zaoblenia; zrušenie orezania; záplaty G2; Gordonove plochy dotyčné zakriveným susedom (dotyčné k rovinám a plochým plochám sú hotové) | Vyberte ich podľa názvu v paneli prvku; najprv zhrubnite, potom zaoblite teleso |
| Zoznam telies v histórii; vynechanie skrytých telies z exportov | Premenujte a skryte telesá v zozname telies v paneli súčiastky; na vynechanie vymažte alebo potlačte prvok, ktorý teleso vytvoril |
| Nerovnomerná mierka, ktorá zachová valce a kužele analytické; nerovnomerné škálovanie posunutých plôch | {{ui:Mierka telesa}} urobí zakrivené plochy blízke B-spline (v rámci 0,0000004 mm); rovnomerná mierka zostane presná |
| Kombinovanie plošných telies; Minkowského súčty | Najprv {{ui:Zošiť}} alebo {{ui:Zhrubiť}}, potom {{ui:Spojiť}} |
| Analýza tolerancií: reťazce tolerancií, ktoré zatáčajú (2D a 3D vektorové slučky), citlivosti vypočítané z geometrie, Monte Carlo s inými rozdeleniami, tolerancie veľkostí na kótach náčrtu, bonusová tolerancia z podmienky materiálu | {{ui:Reťazec}} v zostave: jeden smer, najhorší prípad a RSS, tolerancie zadané ručne, z všeobecnej tolerancie popisového poľa alebo z rámčekov GD&T: pozri [Reťazce tolerancií](topic:tolerance-stackup) |
| Rozmiestňovanie: poradie rezania a nábehy, rezanie spoločných hrán raz, súčiastky, ktoré musia zostať pohromade; zvyšky kotúčov, zásoby zdieľané medzi projektmi | {{ui:Rozmiestniť ploché súčiastky na tabule…}} s rozostupom, okrajmi, otočeniami a smerom zrna: pozri [Rozmiestniť ploché súčiastky na tabule](topic:nest-flat-parts); zostatky tabúľ sa uchovávajú a najprv použijú: pozri [Uchovanie a opätovné použitie zvyškov](topic:nest-offcuts); plán rezu urobte v softvéri vašej rezačky |
| Plechové diely: lemy, zlomy, skosené a obrysové príruby; príruby na zakrivených hranách alebo na plochách ohnutej základnej príruby; nakreslené ohyby; uzávery rohov; tvárniace nástroje; prevod telesa na plech; plochý tvar ohnutej základnej príruby s výrezmi; tabuľky ohybov | {{ui:Základná príruba}} (doska alebo ohnutý profil), {{ui:Hranová príruba}} na priamych hranách dosky s odľahčeniami ohybu a plochý tvar s K-faktorom: pozri [Plechové diely](topic:sheet-metal) |
| Analýza úkosu na zostavách; hľadanie deliacej čiary; analýza hrúbky stien | {{ui:Analýza úkosov}} na súčiastke v Návrhu: pozri [Kontrola úkosu pre lisovanie a odlievanie](topic:draft-analysis); každú súčiastku zostavy otvorte a skontrolujte zvlášť |

## Náčrty

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Elipsy, dotyčné oblúky, kužeľosečky, spline s nastaveným stupňom alebo váhami (NURBS) | Spline (kubické), oblúky a kružnice so vzťahmi Dotyčnica |
| Bod na spline (vzťah), vzťahy krivosti (G2) | Nastavte vlastný bod spline tam, kde musí prechádzať |
| Odsadené kópie spline, ktoré sledujú neskoršie zmeny; odsadenia reťazcov s ostrými rohmi spline | Odsaďte znovu po zmene; najprv zaoblite roh |
| Kopie vzorov, ktoré zostanú prepojené s originálom; vzory pozdĺž krivky | Vzorujte znovu po zmene |
| Premietanie voľných alebo naklonených kruhových hrán, premietnutá geometria, ktorá sleduje súčiastku | Premietnite rovné a rovnobežné kruhové hrany, potom kótujte |
| Riadené (referenčné) kóty | Čítajte veľkosti z panela alebo z údajov súčiastky |
| Vzťah kolineárnosti | Rovnobežnosť so vzdialenosťou 0 |
| Vloženie do iného programu (systémová schránka) | Exportujte DXF, STEP, STL alebo 3MF |
| Písanie oblúkov, relatívnych alebo polárnych súradníc | Píšte čiary a kružnice; oblúky kreslite nástrojom Oblúk |
| Výber geometrie bez ukazovateľa | Potrebuje kliknutie alebo dotyk |

## Parametre a jednotky

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Konfigurácie, ktoré menia materiály; tabuľka návrhu CSV, ktorá vypína prvky | Konfigurácie nastavujú parametre a zapínajú a vypínajú prvky: pozri [Konfigurácie a tabuľky návrhu](topic:design-tables); `partcraft variants` zostaví uložené konfigurácie podľa názvu vrátane vypnutých prvkov: pozri [Vytvorenie balíka variantov z konfigurácií](topic:variant-pack) |
| Rovnice na číslach panelov najnovších prvkov (rovina, ťahanie, úkos a podobne) | Napíšte ich do skriptu alebo pomocou `partcraft set` ([Skripty a príkazový riadok](topic:scripts-and-cli)) |
| Súčiastka zobrazená v palcoch | Veľkosti sa zobrazujú v milimetroch; zadajte `2in` do políčka s číslom alebo do výrazu a dostanete 50.8 |

## Súbory

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Úprava vlastných prvkov importovaného telesa STEP (prichádza bez histórie) | Pridajte alebo odoberte materiál vlastnými prvkami |
| Čítanie farieb, názvov, štruktúry zostavy a PMI zo STEP | Nie je k dispozícii |
| Export glTF, OBJ, IGES, Parasolid; DWG 3D súčiastky (DWG zapisuje len balík variantov: výkresový list) | STL alebo 3MF pre siete; STEP pre telesá; DXF pre 2D |
| Otváranie IGES, DXF alebo vlastných súborov iných programov (súbory `.3dm` sa otvoria ako jedno teleso: [Otvorenie modelu .3dm ako telesa](topic:open-3dm-files)) | Požiadajte o STEP alebo uzavretú sieť STL, OBJ alebo 3MF: [Otvorenie STL, OBJ alebo 3MF](topic:open-meshes) |
| Štruktúra zostavy (strom s názvami súčiastok) v exportovanom STEP | STEP zostavy je jeden zložený útvar umiestnených telies |
| Ukladanie do priečinka podľa vlastného výberu bez dialógu prehliadača | Zapnite „opýtať sa, kam uložiť“ v nastaveniach sťahovania prehliadača |

## Výkresy

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Kóty nad tri celkové rozmery (veľkosti dier, polohy, tolerancie veľkostí) | Označte PDF alebo exportujte DXF a okótujte ho v 2D CAD programe |
| Viac než jeden rez alebo detail; zarovnané, odlomené a pomocné pohľady | Jeden rez a jeden detail na výkres |
| Voľný text, poznámky a tabuľky na liste (okrem popisových polí názvu a revízie) | Poznámka o povrchovej úprave alebo text pridaný do PDF |
| Projekcia podľa prvého uhla, pohybujúce sa pohľady, zvislé listy | Projekcia podľa tretieho uhla, automatické rozloženie, vodorovné listy A4–A0 a ANSI A–E |
| Živý rez: viac rovín alebo rezný box naraz, obrys okolo rezu, uloženie rezu do súboru | Jedna rovina naraz z {{ui:Pohľady}} › {{ui:Rez}}; pozri [Pozrite sa dovnútra pomocou rezu](topic:section-view) |
| Montážne výkresy s ďalšími pohľadmi, kótami alebo bublinami, ktoré môžete posúvať | Jeden izometrický (alebo rozložený) pohľad s automatickými bublinami a zoznamom súčiastok |
| Kopírovanie a vkladanie značiek GD&T a povrchových úprav | Umiestnite každú nástrojom Referencia, Rámček alebo Povrch |
| Návody: súbory STEP v {{ui:Z iného súboru…}} programu Illustrate, model priamo z ModelCraft alebo BimCraft, obrázky v kvalite sledovania lúčov, interaktívne 3D v PDF | Otvorte STEP v Návrhu a spustite návod {{ui:Z otvorenej súčiastky}}; uložte model ako glTF (.glb); obrázky PNG 3D pohľadu; interaktívny 3D súbor: pozri [Spustenie návodu v Illustrate](topic:illustrate) |

## Zostavy

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Kĺby ozubených kolies, ozubených tyčí, vačiek a skrutiek; guľový kĺb obmedzený na kužeľ; kĺby na zakrivených plochách alebo medzi bodmi | Tuhé, otočné, posuvné, valcové, rovinné, guľové a kolíkové kĺby v štrbine na plochých plochách, každá hodnota s vlastnými limitmi: pozri [Zostavenie zostavy](topic:build-assembly) |
| Kroky rozloženia, ktoré otáčajú súčiastky, a ťahanie súčiastok, ktoré umiestňujú kĺby | Priame kroky rozloženia; odstráňte kĺb, ak chcete súčiastku posunúť rukou |
| Podzostavy | Len jedna úroveň súčiastok |
| Ozubené kolesá, vačky, kontakt | Nie je k dispozícii |

## Výroba

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| 3D hrubovanie zakrivených plôch, 3D adaptívne obrábanie, dočisťovanie zvyšku; dokončovanie vodnou čiarou, ceruzkou, radiálne a špirálové; adaptívne prechody zapísané ako oblúky | Čelo, vyhĺbenie, 2D adaptívne, obrys, vŕtanie a skosenie v 2,5 osi: pozri [Vytvorenie dráh nástroja a G-kódu](topic:manufacture); paralelné a skalopové dokončovanie celého modelu: pozri [3D dokončovanie](topic:finish-3d) |
| Dráhy nástroja v 4 a 5 osiach, sústruženie, snímanie | Nastavte jednu stranu naraz s osou nástroja na karte Nastavenie |
| Kontrola kolízií držiaka a stopky | Sledujte upozornenia na dĺžku drážok a skontrolujte v simulátore vášho riadiaceho systému |
| Snímanie, cykly životnosti nástroja a podprogramy; 4. a 5. os a kódy sústruhu v postprocesore; načítanie postprocesorov iných programov | Napíšte alebo zmeňte postprocesor vo formáte PartCraft: pozri [Postprocesory, ktoré môžete upraviť](topic:post-processors) |
| Palcový G-kód (G20) | Len milimetre (G21) |

## Simulácia a generatívny návrh

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Nelineárne štúdie: plastické tečenie, veľké deformácie, kontakt medzi súčiastkami, únava | Lineárna statika a vlastné frekvencie: pozri [Kontrola napätia a priehybu](topic:simulation); bezpečnostný faktor nechajte výrazne nad 1 |
| Nelineárne vzperanie (nedokonalosti, po vzpernom stave, preskok) | Faktory zaťaženia lineárnym vzperaním s veľkou rezervou: pozri [Teplo, tepelné napätie a vzperanie](topic:thermal-and-buckling) |
| Žiarenie medzi plochami (faktory pohľadu), kontaktný odpor, materiály závislé od teploty, zotrvačnosť v tepelnom napätí (tepelné rázové vlny) | Žiarenie do okolia, ustálené alebo kvázistatické tepelné napätie v čase, konštantné vlastnosti: pozri [Teplo, tepelné napätie a vzperanie](topic:thermal-and-buckling) |
| Automatické spresnenie pre prechodné teplo a štúdie s tepelným zaťažením; hrubšia sieť tam, kde je chyba malá; cieľ na lokálnu veličinu (špičkové napätie v jednom bode) | **Spresniť automaticky** pre statické, vzperné, vlastnofrekvenčné a ustálené tepelné štúdie, na chybe celej súčiastky: pozri [Kontrola napätia a priehybu](topic:simulation); inak zmenšite veľkosť prvku |
| Zaťaženia ložísk a skrutiek, vzdialené sily, momenty, pružiny, predpísané posuny | Sily a tlaky na plochách, gravitácia; pevné a bezfrikčné plochy |
| Simulácia zostáv; materiály, ktoré sa líšia podľa smeru (tlačené vrstvy, kompozity) | Jedna súčiastka, jeden izotropný materiál |
| Viac vláken riešiča pre štúdie tetraédrov, prenos tepla a generatívny návrh; ľubovoľné vlákna na stránke, ktorá nie je izolovaná medzi zdrojmi | Štúdie voxelov, vzperanie, napätie v čase a laminárne prúdenie využívajú vlákna, kde to stránka dovolí: pozri [Nastavenia PartCraft](topic:settings) |
| Turbulentné prúdenie s projektovou presnosťou (model Spalart–Allmaras je len ako experimentálny: trenie v potrubí o 30 až 34 % vyššie, znovupripojenie za krokom o 21 až 39 % kratšie; plánované: jemnejšie bunky pri stenách), teplo v prúdení, nestacionárne (časovo presné) prúdenie, voľné povrchy, nenewtonovské kvapaliny, rotujúce súčiastky | Laminárne, ustálené, izotermné prúdenie newtonovskej kvapaliny alebo experimentálny turbulentný model pre kvalitatívne vzory: pozri [Simulácia prúdenia kvapalín](topic:flow-simulation); panel upozorní, keď Reynoldsovo číslo prekročí laminárnu oblasť |
| Limity napätia a výrobné pravidlá (previsy, smery frézovania) v generatívnom návrhu; viac materiálov v jednom tvare | Najtuhší tvar pre objem; výsledok skontrolujte v Simulácii: pozri [Vytvorenie tvaru z zaťažení](topic:generative-design) |
| Výsledok ako upraviteľné (hladké, parametrické) teleso | STL, STEP s fasetami alebo súčiastka s výsledkom ako importované fasetované teleso |
| Návrh elektrických strojov: rotor otáčajúci sa v statore, krútiaci moment voči uhlu, nasýtená oceľ, magnety, ktoré strácajú silu za kolenom, vírivé prúdy a straty v železe a medi; magnetické polia v 3D alebo na zakrivených sieťach | Lineárna 2D magnetostatika na mriežke v knižnici analýz: cievky, železo, permanentné magnety na ich čiare vratu, medzery, indukčnosť a sila: pozri [Magnetické polia v 2D](topic:magnetic-fields-2d) |

## Skripty

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Nápoveda pri prechode myšou, zarážky a krokovanie v editore skriptov | Hľadanie, zbalenie a dopĺňanie sú k dispozícii (pozri [Písanie a spúšťanie skriptov](topic:craftscript)); ostatné cez váš vlastný editor: {{ui:Uložiť}} a {{ui:Otvoriť}} v skupine Skript presúvajú skripty dnu a von; vstavané funkcie sú v [Jazyk CraftScript](topic:craftscript-language) |
| Zarážky a krokovanie skriptom | `disp` a `fprintf` po ceste; {{key:Mod+Enter}} spustí niekoľko vybraných riadkov naraz |
| Polia a grafy, ktoré skript zobrazuje, sa kreslia v pracovnom priestore Návrh; skripty, ktoré menia parametre súčiastky | Zobrazujú sa v pracovnom priestore Skript; skripty čítajú parametre pomocou `param` (pozri [Písanie a spúšťanie skriptov](topic:craftscript)) a menia ich na karte {{ui:Parametre}} |
| Obrázky a tabuľky vedľa grafov; úprava grafu (zväčšenie, limity osí) pred uložením | Vedľa seba zobrazuje grafy; uložte graf ako PNG, SVG alebo CSV a dokončite ho inde |
| numpy a iné balíky Pythonu; Python offline; skladanie Pythonu v editore; Pascal Script | Štandardná knižnica Pythonu, CraftScript a Lua: pozri [Skripty v Pythone](topic:craftscript-python) |
| Odovzdávanie funkcií Lua vstavaným funkciám; volanie knižničnej funkcie z Lua menom vytvoreným počas behu skriptu | Napíšte názov knižničnej funkcie do skriptu (`cs.static_tet(…)`) alebo ju zavolajte zo skriptu CraftScript |

## Aplikácia

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Ukladanie do cloudu, zdieľanie a história verzií | Zatiaľ nie je k dispozícii. Ukladajte súbory do počítača a verzie si uchovávajte podľa názvu |
| PartCraft ako nainštalovaná aplikácia na iPade a iPhone | Používajte PartCraft v prehliadači zariadenia; na Androide a na počítači beží aj v CadCraft Studio (getcadcraft.com/download) |
| Kontextové ponuky (pravé tlačidlo) | Panel nástrojov a pravý panel |
| Plná práca offline od čistého štartu | Len ak bola aplikácia uložená na používanie offline: pozri [Práca offline](common:offline) |

Napíšte, čo vám najviac chýba, cez stránku podpory na webe: od toho sa odvíja, čo príde ďalej.

## Engineer (generátory a polia)

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Hrdlá, prípojky a armatúry na vygenerovanom výmenníku tepla; krivky teploty pre pevnosť materiálu; straty v odbočke rozdeľovača | Generátory vytvoria jadro a trubky; armatúry pridajte v Návrhu; použite údaje materiálu pri izbovej teplote s bezpečnostným faktorom |
| Pridávanie generátorov z adresára doplnkov jedným kliknutím | {{ui:Otvoriť}} v pracovnom priestore Engineer pridá generátor zo súboru |
| Súbor poľa jemnejší než vlastná veľkosť voxelu generátora; čítanie súborov `.vdb` | Uložte jemnejšie pole zo skriptu; `.vdb` sa zapisuje, nečíta sa |
| Výpočty tlakových nádob podľa normy | Učebnicové vzorce pre tenké a hrubé steny s bezpečnostným faktorom, ktorý zvolíte; nie normová rezerva |
| Generátory pre ostatné aplikácie | V tejto verzii len PartCraft |
