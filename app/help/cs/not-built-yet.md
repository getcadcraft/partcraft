---
title: Co ještě není hotovo
summary: Vše, co tato verze PartCraft zatím nedělá, od kroucených tažení po palcové zobrazení, kóty výkresů a podsestavy, a co dělat místo toho dnes.
keywords: chybějící, ještě ne, omezení, limity, plán vývoje, přesné jádro, zaoblení, sražení hrany, skořepina, tažení, lofting, import STEP, simulace, výroba, kroucené tažení, tečnost konce loftu, zaoblení plochy, rovnice, palce, kóty výkresu, podsestavy, cloud, tablet, telefon
from: 9b868162
---

PartCraft je rané sestavení. Tato stránka uvádí, co zatím nedělá, abyste to nehledali, a co dělat místo toho dnes. Žádná z těchto položek nemá termín.

## Potřebuje přesné jádro

Tato verze staví každý díl sítěovým jádrem (viz [Sítěové jádro](topic:solid-kernels)). Vše níže potřebuje přesné geometrické jádro, které tato verze zatím nemá. Díly uložené s těmito prvky se stále otevřou: prvky zůstanou v historii, označené jako neprovedené, a při uložení se zachovají.

| Ještě není hotovo | Místo toho dnes |
|---|---|
| {{ui:Zaoblení}} a {{ui:Sražení hrany}} na kulatých hranách; zaoblení, jejichž poloměr se mění podél hrany; zaoblení plynule navazující v místech styku (sítěové jádro je seká na zkos) | Zaoblení a sražení hrany fungují na rovných hranách mezi rovinnými plochami; ostatní rohy zaoblete v náčrtu před vytažením ({{ui:Zaoblení}} v náčrtu, {{key:F}}) |
| {{ui:Skořepina}} s otevřenými zakřivenými plochami; stěny různých tlouštěk | Otevřete rovinné plochy; přidejte materiál vytažením tam, kde má být stěna silnější |
| {{ui:Tažení po dráze}}, {{ui:Lofting}}, {{ui:Úkos}} na zakřivených plochách; vytažení až k ploše, k následující ploše nebo k vrcholu; kuželovitá vytažení | Vytáhněte nebo rotujte, v krocích, kde je to třeba; vytáhněte do hloubky, kterou změříte |
| {{ui:Výztuha}}, {{ui:Základní příruba}}, {{ui:Hranová příruba}} a ploché rozvinutí | Vytáhněte desku nebo profil výztuhy |
| Plochy: dokončení {{ui:Tvar}} do dílu, {{ui:Záplata}}, {{ui:Lofting plochy}}, {{ui:Gordonova plocha}}, {{ui:Sešít}}, {{ui:Ztloustnout}}, {{ui:Odsazená plocha}}, {{ui:Prodloužit plochu}}, {{ui:Oříznout plochu}} | Není k dispozici |
| Více těles: {{ui:Sloučit}}, {{ui:Přesunout těleso}}, {{ui:Změnit měřítko tělesa}}, {{ui:Vzor po dráze}}, prvky, které vytvoří nové těleso | Jedno těleso; vzory a zrcadlo kopírují prvky |
| Náčrty, roviny, osy a body na plochách, které najde jen přesné jádro (plocha vytvořená zaoblením, stěna díry, plocha importovaného tělesa) | Náčrt na základních rovinách, referenčních rovinách a rovinných plochách vytažení a rotací |
| Výsledek generativního návrhu otevřený jako díl nebo do něj přidaný (stane se importovaným tělesem) | Stáhněte výsledek jako STL nebo STEP |
| Úprava zakřivených ploch otevřeného souboru STEP jako přesných ploch; přesný STEP splajnových, tažených a rotačních ploch ze souboru STEP, splajnové strany, modelované závity, těla STL / OBJ / 3MF a sestavy; STEP pro jiné modeláře dílů | {{ui:Otevřít}} čte STEP jako trojúhelníky a zachová rovné plochy, válce, kužele, koule a torusy souboru pro export ([Otevřít soubor STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} zapíše každou analytickou plochu přesně a ponechá ji jako fazety ([Export](topic:export-files#for-other-cad-programs-step)); makro pro jiného modeláře dílů stále zapisuje |
| Skutečné oblouky v pohledech výkresu | Pohledy a řezy se kreslí z fazet |
| Přesné objemy, plochy a vzdálenosti | {{ui:Měřit}} dává čísla fazetovaného tělesa, u kulatých dílů lehce nízko; jemnější nastavení **Křivky** je přiblíží |

Některé řádky v tabulkách níže navrhují jeden z těchto prvků jako způsob, jak něco obejít. Tyto návrhy platí, až se přesné jádro vrátí.

## Prvky

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Zaoblení ploch, plné zaoblení, zaoblení s poloměry nastavenými v bodech podél hrany | Konstantní nebo lineárně proměnné {{ui:Zaoblení}}; více prvků zaoblení |
| Skořepiny s různými tloušťkami stěn | Jedna tloušťka {{ui:Skořepina}}; přidejte materiál vytažením tam, kde má být stěna silnější |
| Úkos na volných (splajnových) plochách | {{ui:Úkos}} funguje na rovných, válcových a kuželových plochách |
| Kroucená tažení, tenkostěnná a plošná tažení; tečnost konce u prvku Lofting; lofting s jednou vodicí kolejnicí; splajnové dráhy | {{ui:Tažení po dráze}} s pevnou orientací nebo koncovým měřítkem; lofting se dvěma a více vodícími kolejnicemi: viz [Tažení, lofting a úkos](topic:sweep-loft-draft) |
| Žebra z oblouků nebo splajnů; žebra narostlá čtvercově k náčrtu (z pohledu shora); úkos na žebrech; více žeber z jednoho náčrtu | {{ui:Výztuha}} z jednoho řetězce čar v rovině samotné výztuhy: viz [Výztuhy a příložky](topic:rib) |
| „Až k“ zakřivené ploše, „až k následující“ zastavující se na zakřivené ploše | Až k rovné ploše nebo referenční rovině |
| Protivrtané díry, palcové a trubkové závity, kuželovité závity, doběhy závitů a zkosené začátky závitů | Zahloubení s malou hloubkou; metrické ISO a lichoběžníkové závity, kosmetické nebo modelované: viz [Závity na hřídelích a dírách, kreslené nebo modelované](topic:threads) |
| Vytažení tenkého prvku | Nakreslete obě stěny profilu |
| Vzorové kopie přeskakované po jedné, výplňové vzory | Používejte samostatné prvky; vzory podél křivky: {{ui:Vzor po dráze}} |
| Kopírované vzory, zrcadla, zaoblení, sražení hran, skořepiny a importovaná tělesa | Zkopírujte náčrt nebo prvek, na kterém jsou postaveny, nebo jej vzorujte |
| Přesná (G1) tečnost v mimořádných bodech tvaru; slučování záplat tvaru do větších ploch | Zvyšte **Úroveň** tvaru: aproximované záplaty se zmenší; viz [Volné tvary s Tvarem](topic:form-surfaces) |
| Tvar složený z několika oddělených uzavřených kusů v jednom prvku; mosty mezi tvary | Jeden uzavřený kus na prvek Tvar; spojte je příkazem Spojit |
| Výběr plochových těles v pohledu (kromě bodů ořezu a záplaty); plochová zaoblení; zrušení ořezu; záplaty G2; Gordonovy plochy tečné k zakřiveným sousedům (tečnost k rovinám a rovným plochám je hotova) | Vyberte je podle názvu v panelu prvku; nejprve ztloustněte, pak zaoblete těleso |
| Seznam těles v historii; vynechání skrytých těles z exportů | Přejmenujte a skryjte tělesa v seznamu těles v panelu dílu; smažte nebo potlačte prvek, který těleso vytvořil, aby z exportu vypadlo |
| Neuniformní měřítko, které zachová válce a kužele analytické; neuniformní měřítko odsazených ploch | {{ui:Změnit měřítko tělesa}} udělá zakřivené plochy uzavřenými B-splajny (do 0,0000004 mm); jednotné měřítko zůstává přesné |
| Kombinace plochových těles; Minkowského součty | {{ui:Sešít}} nebo {{ui:Ztloustnout}} nejprve, poté {{ui:Sloučit}} |
| Analýza tolerancí: toleranční řetězce, které se lámou do rohů (2D a 3D vektorové smyčky), citlivosti počítané z geometrie, Monte Carlo s jinými rozděleními, tolerance rozměrů na kótách náčrtu, bonusová tolerance z podmínky materiálu | {{ui:Toleranční řetězec}} v sestavě: jeden směr, nejhorší případ a RSS, tolerance zadané ručně, z obecné tolerance rámečku výkresu nebo z rámečků GD&T: viz [Toleranční řetězce](topic:tolerance-stackup) |
| Rozmísťování: pořadí řezání a náběhy, společné hrany řezané jednou, díly, které mají zůstat pohromadě; zbytky svitků, zásoby sdílené mezi projekty | {{ui:Rozmístit ploché díly na listy…}} s rozestupem, okraji, otočeními a směrem zrna: viz [Rozmístění plochých dílů na listy](topic:nest-flat-parts); zbylé desky se uchovávají a použijí se nejdřív: viz [Uchování a opětovné použití odřezků](topic:nest-offcuts); řez naplánujte v softwaru vaší řezačky |
| Plech: lemy, zalomení, zkosené a obrysové příruby; příruby na zakřivených hranách nebo na plochách ohnuté základní příruby; nakreslené ohyby; uzavření rohů; tvářecí nástroje; převod tělesa na plech; rozvinutí ohnuté základní příruby s výřezy; tabulky ohybů | {{ui:Základní příruba}} (deska nebo ohnutý profil), {{ui:Hranová příruba}} na rovných hranách desky s odlehčením ohybů a ploché rozvinutí s K-faktorem: viz [Plechy](topic:sheet-metal) |
| Analýza úkosů na sestavách; hledání dělicí čáry; analýza tloušťky stěn | {{ui:Analýza úkosů}} na dílu v Návrhu: viz [Kontrola úkosů pro lisování a odlévání](topic:draft-analysis); otevřete každý díl sestavy a zkontrolujte jej |

## Náčrty

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Elipsy, tečné oblouky, kuželosečky, splajny s pevným stupněm nebo váhami (NURBS) | Splajny (kubické), oblouky a kružnice s tečnými vazbami |
| Bod na splajnu (vazba), vazby křivosti (G2) | Umístěte bod splajnu tam, kde má procházet |
| Odsazené kopie splajnů, které sledují pozdější změny; odsazení řetězců s ostrými splajnovými rohy | Odsaďte znovu po změně; nejprve zaoblete roh |
| Vzorové kopie, které zůstávají propojené s originálem; vzory podél křivky | Vzorujte znovu po změně |
| Promítání volných nebo nakloněných kruhových hran, promítnutá geometrie, která sleduje díl | Promítněte přímé a rovnoběžné kruhové hrany, pak kótujte |
| Řízené (referenční) kóty | Čtěte velikosti z panelu nebo z vlastností dílu |
| Kolineární vazby | Rovnoběžnost se vzdáleností 0 |
| Vložení do jiného programu (systémová schránka) | Exportujte DXF, STEP, STL nebo 3MF |
| Psaní oblouků, relativních nebo polárních souřadnic | Zadávejte čáry a kružnice; oblouky kreslete nástrojem Oblouk |
| Výběr geometrie bez ukazovacího zařízení | Potřebuje klik nebo dotyk |

## Parametry a jednotky

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Konfigurace měnící materiály; CSV návrhová tabulka vypínající prvky | Konfigurace nastavují parametry a zapínají a vypínají prvky: viz [Konfigurace a návrhové tabulky](topic:design-tables); `partcraft variants` sestaví uložené konfigurace podle názvu, včetně vypnutých prvků: viz [Vytvoření balíku variant z konfigurací](topic:variant-pack) |
| Rovnice na číslech v panelech nejnovějších prvků (rovina, tažení, úkos a podobně) | Napište je do skriptu nebo příkazem `partcraft set` ([Skripty a příkazový řádek](topic:scripts-and-cli)) |
| Díl zobrazený v palcích | Velikosti se zobrazují v milimetrech; napište `2in` do číselného pole nebo do výrazu a bude to 50.8 |

## Soubory

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Úprava vlastních prvků importovaného tělesa STEP (přichází bez historie) | Přidejte nebo odeberte materiál vlastními prvky |
| Čtení barev, názvů, struktury sestavy a PMI ze souboru STEP | Není k dispozici |
| Export glTF, OBJ, IGES, Parasolid; DWG 3D dílu (jen balík variant zapisuje DWG: list výkresu) | STL nebo 3MF pro sítě; STEP pro tělesa; DXF pro 2D |
| Otevření IGES, DXF nebo souborů jiných programů (soubory `.3dm` se otevřou jako jedno těleso: [Otevřít model .3dm jako plné těleso](topic:open-3dm-files)) | Požádejte o STEP, nebo o uzavřenou síť STL, OBJ nebo 3MF: [Otevřít STL, OBJ nebo 3MF](topic:open-meshes) |
| Struktura sestavy (strom s názvy dílů) v exportovaném STEP | STEP sestavy je jeden složený útvar umístěných těles |
| Ukládání do složky dle vašeho výběru bez stahování prohlížečem | Zapněte „zeptat se, kam uložit“ v nastavení stahování prohlížeče |

## Výkresy

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Kóty nad rámec tří celkových rozměrů (velikosti děr, polohy, tolerance rozměrů) | Označte PDF, nebo exportujte DXF a okótujte jej v 2D CAD programu |
| Více než jeden řez nebo detail; zarovnané, vylomené a pomocné pohledy | Jeden řez a jeden detail na výkres |
| Volný text, poznámky a tabulky na listu (kromě bloků názvu a revizí) | Poznámka o povrchové úpravě nebo text přidaný do PDF |
| Projekce podle první úhlu, pohyblivé pohledy, svislé listy | Třetí úhel, automatické rozvržení, vodorovné listy A4–A0 a ANSI A–E |
| Živý řez: více rovin nebo řezný box najednou, obrys kolem řezu, uložení řezu do souboru | Jedna rovina najednou z {{ui:Pohledy}} › {{ui:Řez}}; viz [Podívejte se dovnitř řezovým pohledem](topic:section-view) |
| Sestavné výkresy s více pohledy, kótami nebo bublinami, které lze přesouvat | Jeden izometrický (nebo rozložený) pohled s automatickými bublinami a seznamem dílů |
| Kopírování a vkládání symbolů GD&T a povrchových úprav | Umístěte každý pomocí Datum, Rámeček nebo Povrch |
| Manuály: soubory STEP v {{ui:Z jiného souboru…}} v Illustrate, model předaný přímo z ModelCraft nebo BimCraft, obrázky v kvalitě sledování cesty (path tracer), interaktivní 3D uvnitř PDF | Otevřete STEP v Návrhu a spusťte manuál {{ui:Z otevřeného dílu}}; uložte model jako glTF (.glb); PNG obrázky 3D pohledu; interaktivní soubor 3D: viz [Spuštění manuálu v Illustrate](topic:illustrate) |

## Sestavy

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Ozubená, hřebenová, vačková a šroubová spojení; kulový kloub omezený na kužel; spojení na zakřivených plochách nebo mezi body | Tuhá, rotační, posuvná, válcová, rovinná, kulová a kolíková spojení v drážce na rovných plochách, každá hodnota s vlastními mezemi: viz [Sestavení sestavy](topic:build-assembly) |
| Rozložené kroky, které otáčejí díly, a tažení dílů, které umísťují spojení | Přímé kroky rozložení; odeberte spojení, chcete-li díl posunout ručně |
| Podsestavy | Jen jedna úroveň dílů |
| Ozubená kola, vačky, kontakt | Není k dispozici |

## Výroba

| Ještě není hotovo | Místo toho dnes |
|---|---|
| 3D hrubování zakřivených ploch, 3D adaptivní vybírání, dohrubování; dokončování waterline, pencil, radial a spiral; adaptivní průchody zapsané jako oblouky | Čelo 2,5osé, kapsa, 2D adaptivní, kontura, vrtání a sražení hrany: viz [Vytvoření drah nástroje a G-code](topic:manufacture); Parallel a Scallop dokončování celého modelu: viz [3D dokončování](topic:finish-3d) |
| 4osé a 5osé dráhy nástroje, soustružení, dotykové měření | Nastavte jednu stranu najednou s osou nástroje na kartě Nastavení |
| Kontrola kolizí držáku a stopky | Sledujte varování o délce drážky a kontrolujte v simulátoru vašeho řídicího systému |
| Dotykové měření, cykly životnosti nástroje a podprogramy; 4. a 5. osa a kódy soustruhu v postprocesoru; načítání postprocesorových souborů jiných programů | Napište nebo změňte postprocesor ve formátu PartCraft: viz [Postprocesory, které můžete upravit](topic:post-processors) |
| Palcový G-code (G20) | Jen milimetry (G21) |

## Simulace a generativní návrh

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Nelineární studie: plastická deformace, velké průhyby, kontakt mezi díly, únava | Lineární statika a vlastní frekvence: viz [Kontrola napětí a průhybu](topic:simulation); bezpečnostní součinitel udržujte výrazně nad 1 |
| Nelineární vzpěr (imperfekce, pobuklení, skokové přeskočení) | Lineární součinitele zatížení vzpěrem s velkou rezervou: viz [Teplo, tepelné napětí a vzpěr](topic:thermal-and-buckling) |
| Záření mezi plochami (faktory tvaru), kontaktní odpor, materiály závislé na teplotě, setrvačnost v tepelném napětí (rázové tepelné vlny) | Záření do okolí, ustálené nebo kvazistatické tepelné napětí v čase, konstantní vlastnosti: viz [Teplo, tepelné napětí a vzpěr](topic:thermal-and-buckling) |
| Automatické zjemnění pro přechodné vedení tepla a studie s tepelným zatížením; zhrubnutí sítě tam, kde je chyba malá; cíl na lokální veličině (špičkové napětí v jednom místě) | **Automaticky zjemnit** pro statické, vzpěrové, vlastní frekvence a ustálené tepelné studie, podle chyby přes celý díl: viz [Kontrola napětí a průhybu](topic:simulation); jinak zmenšete velikost prvku |
| Ložiskové a šroubové zatížení, vzdálené síly, momenty, pružiny, předepsané posuvy | Síly a tlaky na plochách, gravitace; pevné a bezetřecí plochy |
| Simulace sestav; materiály, které se liší podle směru (tištěné vrstvy, kompozity) | Jeden díl, jeden izotropní materiál |
| Více vláken řešiče pro tetraedrické studie, přenos tepla a generativní návrh; jakákoli vlákna na stránce, která není izolovaná mezi zdroji | Voxelové studie, vzpěr, napětí v čase a laminární proudění používají vlákna, kde to stránka dovolí: viz [Nastavení PartCraft](topic:settings) |
| Turbulentní proudění s konstrukční přesností (model Spalart–Allmaras je zařazen jako experimentální: tření v potrubí o 30 až 34 % vysoko, znovupřipojení za zpětným schodem o 21 až 39 % krátko; plánováno: jemnější buňky u stěn), teplo v proudění, nestacionární (časově přesné) proudění, volné hladiny, nenewtonovské kapaliny, rotující díly | Laminární, ustálené, izotermní proudění newtonovské kapaliny, nebo experimentální turbulentní model pro kvalitativní vzory: viz [Simulace proudění kapalin](topic:flow-simulation); panel varuje, když je Reynoldsovo číslo za laminárním |
| Meze napětí a výrobní pravidla (převisy, směry frézování) v generativním návrhu; více materiálů v jednom tvaru | Nejtužší tvar pro daný objem; výsledek zkontrolujte v Simulaci: viz [Růst tvaru ze zatížení](topic:generative-design) |
| Výsledek jako upravitelné (hladké, parametrické) těleso | STL, fazetový STEP nebo díl s výsledkem jako importované fazetové těleso |
| Návrh elektrických strojů: rotor otáčející se ve statoru, moment proti úhlu, saturovaná ocel, magnety ztrácející sílu za kolenem, vířivé proudy a ztráty v železe a mědi; magnetická pole ve 3D nebo na zakřivených sítích | Lineární 2D magnetostatika na mřížce v analytické knihovně: cívky, železo, permanentní magnety na jejich zpětné přímce, vzduchové mezery, indukčnost a přítažlivost: viz [Magnetická pole ve 2D](topic:magnetic-fields-2d) |

## Skripty

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Nápověda při najetí, zarážky a krokování v editoru skriptů | Hledání, sbalení a doplňování jsou k dispozici (viz [Psaní a spouštění skriptů](topic:craftscript)); pro zbytek váš vlastní editor: {{ui:Uložit}} a {{ui:Otevřít}} ve skupině Skript přesouvají skripty dovnitř a ven; vestavěné funkce jsou uvedeny v [Jazyk CraftScript](topic:craftscript-language) |
| Zarážky a krokování skriptem | `disp` a `fprintf` cestou; {{key:Mod+Enter}} spustí několik vybraných řádků najednou |
| Pole a grafy, které skript zobrazuje, vykreslené v pracovním prostoru Návrh; skripty měnící parametry dílu | Zobrazují se v pracovním prostoru Skript; skripty čtou parametry příkazem `param` (viz [Psaní a spouštění skriptů](topic:craftscript)) a mění je na kartě {{ui:Parametry}} |
| Obrázky a tabulky vedle grafů; úprava grafu (zoom, meze os) před uložením | Vedle sebe zobrazí grafy; uložte graf jako PNG, SVG nebo CSV a dokončete jej jinde |
| numpy a jiné balíčky Pythonu; Python offline; skládání Pythonu v editoru; Pascal Script | Standardní knihovna Pythonu, CraftScript a Lua: viz [Skripty v Pythonu](topic:craftscript-python) |
| Předávání funkcí Lua vestavěným funkcím; volání knihovní funkce z Lua podle názvu sestaveného za běhu skriptu | Napište název knihovní funkce do skriptu (`cs.static_tet(…)`), nebo ji volejte ze skriptu CraftScript |

## Aplikace

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Cloudové ukládání, sdílení a historie verzí | Zatím není k dispozici. Ukládejte soubory do počítače a verze si držte podle názvu |
| PartCraft jako nainstalovaná aplikace na iPadu a iPhonu | Používejte PartCraft v prohlížeči zařízení; na Androidu a v počítači běží také v CadCraft Studio (getcadcraft.com/download) |
| Kontextové nabídky (pravé tlačítko) | Panel nástrojů a pravý panel |
| Plná práce offline od čistého startu | Jen tehdy, když byla aplikace uložena pro offline použití: viz [Práce offline](common:offline) |

Napište, co vám nejvíc chybí, přes stránku podpory webu: ovlivní to, co přijde dál.

## Engineer (generátory a pole)

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Hlavičky, přípojky a tvarovky na vygenerovaném výměníku tepla; teplotní křivky pevnosti materiálu; ztráty v T-kusech v rozdělovači | Generátory vytvoří jádro a trubky; tvarovky přidejte v Návrhu; použijte hodnoty materiálu za pokojové teploty s bezpečnostním součinitelem |
| Přidávání generátorů z adresáře doplňků jedním kliknutím | {{ui:Otevřít}} v pracovním prostoru Engineer přidá generátor ze souboru |
| Pole jemnější než vlastní velikost voxelu generátoru; čtení souborů `.vdb` | Uložte jemnější pole ze skriptu; `.vdb` se zapisuje, nečte se |
| Výpočty tlakových nádob podle norem | Učebnicové vzorce pro tenkou a tlustou stěnu s bezpečnostním součinitelem, který zvolíte; nejde o normovou rezervu |
| Generátory pro ostatní aplikace | V této verzi jen PartCraft |
