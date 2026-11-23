---
title: Co ještě není hotovo
summary: Vše, co tato verze PartCraftu zatím nedělá, od kroucených tažení po zobrazení v palcích, kótování výkresů a podsestavy, s tím, co dělat místo toho dnes.
keywords: chybějící, zatím ne, omezení, plán, přesné jádro, zaoblení, sražení hrany, skořepina, tažení po dráze, lofting, import STEP, simulace, výroba, kroucené tažení, tečna na konci lofting, zaoblení ploch, rovnice, palce, kótování výkresů, podsestavy, cloud, tablet, telefon
from: 97b10a29
---

PartCraft je raná verze. Tato stránka uvádí, co zatím nedělá, abyste to nehledali, a co místo toho dělat dnes. Žádná položka zde nemá termín.

## Potřebuje přesné jádro

Tato verze staví každý díl síťovým jádrem (viz [Síťové jádro](topic:solid-kernels)). Vše níže potřebuje přesné geometrické jádro, které tato verze zatím nemá. Díly uložené s těmito prvky se stále otevřou: prvky zůstanou v historii, označené jako ještě nehotové, a při uložení se zachovají.

| Ještě není hotovo | Místo toho dnes |
|---|---|
| {{ui:Fillet}} a {{ui:Chamfer}} na zaoblených hranách; zaoblení, jejichž poloměr se mění podél hrany; zaoblení plynule navázaná tam, kde se setkávají (síťové jádro je spojí zkosením) | Zaoblení a sražení fungují na přímých hranách mezi rovnými plochami; jiné rohy zaoblete ve skice před vytažením ({{ui:Fillet}} ve skice, {{key:F}}) |
| {{ui:Shell}} otevírající zakřivené plochy; stěny různých tlouštěk | Otevřete rovné plochy; přidejte materiál vytažením tam, kde má být stěna silnější |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} na zakřivených plochách; vytažení až k ploše, k následující ploše nebo k vrcholu; kuželovitá vytažení | Vytáhněte nebo rotujte, případně po krocích; vytáhněte do hloubky, kterou změříte |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} a rozvinutí do roviny | Vytáhněte desku nebo profil žebra |
| Plochy: dokončení {{ui:Form}} do dílu, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Není k dispozici |
| Více těles: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, prvky, které vytvoří nové těleso | Jedno těleso; vzory a zrcadlo kopírují prvky |
| Skici, roviny, osy a body na plochách, které najde jen přesné jádro (plocha vzniklá zaoblením, stěna otvoru, plocha importovaného tělesa) | Skicujte na základních rovinách, referenčních rovinách a rovných plochách vytažení a rotací |
| Výsledek generativního návrhu otevřený jako díl nebo do něj přidaný (stane se importovaným tělesem) | Stáhněte výsledek jako STL nebo STEP |
| Úprava zakřivených ploch otevřeného souboru STEP jako přesných ploch; přesný STEP splajnových, tažených a rotovaných ploch ze souboru STEP, boky splajnů, modelované závity, tělesa STL / OBJ / 3MF a sestavy; STEP pro jiné modeláře dílů | {{ui:Open}} čte STEP jako trojúhelníky a zachovává rovné plochy, válce, kužely, koule a tori souboru pro export ([Otevřít soubor STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} zapíše každou analytickou plochu přesně a ponechá je jako fasety ([Export](topic:export-files#for-other-cad-programs-step)); makro pro jiný modelář dílů stále zapisuje |
| Skutečné oblouky v pohledech výkresu | Pohledy a řezy se kreslí z fasetů |
| Přesné objemy, plochy a vzdálenosti | {{ui:Measure}} dá čísla fasetového tělesa, u kulatých dílů trochu nízká; jemnější nastavení **Křivky** je přiblíží |

Některé řádky v tabulkách níže navrhují jednu z těchto funkcí jako řešení něčeho jiného. Tyto návrhy platí, jakmile se přesné jádro vrátí.

## Prvky

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Plochy zaoblení, plná zaoblení, zaoblení s poloměry nastavenými v bodech podél hrany | Konstantní nebo lineárně proměnné {{ui:Fillet}}; několik prvků zaoblení |
| Skořepiny s různými tloušťkami stěn | Jedna tloušťka {{ui:Shell}}; přidejte materiál vytažením tam, kde má být stěna silnější |
| {{ui:Draft}} na volných (splajnových) plochách | {{ui:Draft}} funguje na rovných, válcových a kuželových plochách |
| Kroucená tažení, tenkostěnná a plošná tažení; tečnost na konci u prvku Loft; lofting s jednou vodicí kolejnicí; splajnové dráhy | {{ui:Sweep}} s pevnou orientací nebo měřítkem na konci; lofting se dvěma nebo více vodicími kolejnicemi: viz [Tažení, lofting a úkos](topic:sweep-loft-draft) |
| Žebra z oblouků nebo splajnů; žebra narostlá čtvercově ke skice (z pohledu shora); úkos na žebrech; několik žeber z jedné skici | {{ui:Rib}} z jednoho řetězce čar v rovině žebra: viz [Žebra a výztuhy](topic:rib) |
| „Až k“ zakřivené ploše, „až k následující“ zastavené na zakřivené ploše | Až k rovné ploše nebo referenční rovině |
| Protisražené otvory, palcové a trubkové závity, kuželové závity, výběhy závitů a sražené začátky závitů | Zahloubení s malou hloubkou; metrické ISO a lichoběžníkové závity, kosmetické nebo modelované: viz [Závity na hřídelích a v dírách, nakreslené nebo modelované](topic:threads) |
| Tenkostěnné vytažení prvků | Nakreslete obě stěny profilu |
| Kopie vzoru přeskakované jednotlivě, výplňové vzory | Použijte samostatné prvky; vzory podél křivky: {{ui:Path pattern}} |
| Kopírované vzory, zrcadla, zaoblení, sražení, skořepiny a importovaná tělesa | Zkopírujte skicu nebo prvek, na kterém jsou postaveny, nebo je vzorujte |
| Přesná (G1) tečnost u mimořádných bodů tvaru; sloučení záplat tvaru do větších ploch | Zvyšte **Úroveň** tvaru: aproximované záplaty budou menší; viz [Tvarované plochy s Tvarem](topic:form-surfaces) |
| Tvar z několika oddělených uzavřených kusů v jednom prvku; mosty mezi tvary | Jeden uzavřený kus na prvek Tvar; spojte je pomocí {{ui:Join}} |
| Výběr plošných těles v pohledu (kromě bodů ořezu a záplaty); plošná zaoblení; zrušení ořezu; záplaty G2; Gordonovy plochy tečné ke zakřiveným sousedům (tečné k rovinám a rovným plochám je hotovo) | Vyberte je podle názvu v panelu prvku; nejprve ztlušťte, pak zaoblete těleso |
| Seznam těles v historii; vynechání skrytých těles z exportů | Přejmenujte a skryjte tělesa v seznamu těles v panelu dílu; odstraňte nebo potlačte prvek, který těleso vytvořil, abyste je vynechali |
| Nerovnoměrné měřítko, které zachová válce a kužely analytické; nerovnoměrné měřítko odsazených ploch | {{ui:Scale body}} udělá zakřivené plochy uzavřenými B-splajny (do 0,0000004 mm); jednotné měřítko zůstává přesné |
| Spojování plošných těles; Minkowského součty | Nejprve {{ui:Stitch}} nebo {{ui:Thicken}}, pak {{ui:Combine}} |
| Analýza tolerancí: řetězce, které zatáčejí (2D a 3D vektorové smyčky), citlivosti odvozené z geometrie, Monte Carlo s jinými rozděleními, tolerance velikostí na kótách skici, bonusová tolerance z materiálových podmínek | {{ui:Stack-up}} v sestavě: jeden směr, nejhorší případ a RSS, tolerance zadané ručně, z všeobecné tolerance razítka nebo z rámečků GD&T: viz [Řetězce tolerancí](topic:tolerance-stackup) |
| Hnízdění: pořadí řezání a nájezdy, řezání sdílených hran jednou, díly, které mají zůstat pohromadě; zbytky svitků, materiál sdílený mezi projekty | {{ui:Nest flat parts on sheets…}} s roztečí, okraji, otáčením a směrem vlákna: viz [Rozmístění plochých dílů na listy](topic:nest-flat-parts); zbylé desky se uchovají a použijí jako první: viz [Uchování a opětovné použití odřezků](topic:nest-offcuts); řez plánujte v software vaší řezačky |
| Plech: lemy, zlomy, zkosené a obrysové příruby; příruby na zakřivených hranách nebo na plochách ohnuté základní příruby; kreslené ohyby; uzavření rohů; tvářecí nástroje; převod tělesa na plech; rozvinutí ohnuté základní příruby s výřezy; tabulky ohybů | {{ui:Base flange}} (deska nebo ohnutý profil), {{ui:Edge flange}} na rovných hranách desky s odlehčením ohybů a rozvinutí s K-faktorem: viz [Plech](topic:sheet-metal) |
| Analýza úkosů na sestavách; hledání dělicí roviny; analýza tloušťky stěn | {{ui:Draft analysis}} na dílu v Návrhu: viz [Kontrola úkosu pro lisování a odlévání](topic:draft-analysis); otevřete každý díl sestavy a zkontrolujte jej |

## Skici

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Elipsy, tečné oblouky, kuželosečky, splajny s nastaveným stupněm nebo váhami (NURBS) | Splajny (kubické), oblouky a kružnice s vazbami Tečna |
| Bod na splajnu (vazba), vazby zakřivení (G2) | Umístěte bod splajnu tam, kde má procházet |
| Ofsetové kopie splajnů, které sledují pozdější změny; ofsety řetězců s ostrými rohy splajnů | Ofsetujte znovu po změně; nejprve zaoblete roh |
| Kopie vzoru zůstávající propojené s originálem; vzory podél křivky | Vzorujte znovu po změně |
| Promítání volných nebo nakloněných kruhových hran, promítnutá geometrie, která sleduje díl | Promítněte rovné a rovnoběžné kruhové hrany, pak kótujte |
| Řízené (referenční) kóty | Čtěte velikosti z panelu nebo z údajů o dílu |
| Kolineární vazby | Rovnoběžné s nulovou vzdáleností |
| Vložení do jiného programu (systémová schránka) | Exportujte DXF, STEP, STL nebo 3MF |
| Psaní oblouků, relativních nebo polárních souřadnic | Pište čáry a kružnice; oblouky kreslete nástrojem {{ui:Arc}} |
| Výběr geometrie bez ukazovátka | Vyžaduje kliknutí nebo dotyk |

## Parametry a jednotky

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Konfigurace, které mění materiály; tabulka návrhu v CSV, která vypíná prvky | Konfigurace nastavují parametry a zapínají a vypínají prvky: viz [Konfigurace a tabulky návrhu](topic:design-tables); `partcraft variants` sestaví uložené konfigurace podle názvu, včetně vypnutých prvků: viz [Vytvořte balíček variant z konfigurací](topic:variant-pack) |
| Rovnice na číslech panelů nejnovějších prvků (rovina, tažení, úkos a podobně) | Napište je ve skriptu nebo pomocí `partcraft set` ([Skripty a příkazový řádek](topic:scripts-and-cli)) |
| Díl zobrazený v palcích | Velikosti se zobrazují v milimetrech; napište `2in` do číselného pole nebo výrazu a bude to 50.8 |

## Soubory

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Úprava vlastních prvků importovaného tělesa STEP (přichází bez historie) | Přidejte nebo odeberte materiál vlastními prvky |
| Čtení barev, názvů, struktury sestavy a PMI ze STEP | Není k dispozici |
| Export glTF, OBJ, IGES, Parasolid; DWG 3D dílu (jen balíček variant zapisuje DWG: výkresový list) | STL nebo 3MF pro sítě; STEP pro tělesa; DXF pro 2D |
| Otevření IGES, DXF nebo vlastních souborů jiných programů (soubory `.3dm` se otevřou jako jedno těleso: [Otevřít model .3dm jako plné těleso](topic:open-3dm-files)) | Požádejte o STEP, nebo o uzavřenou síť STL, OBJ nebo 3MF: [Otevřít STL, OBJ nebo 3MF](topic:open-meshes) |
| Struktura sestavy (strom s názvy dílů) v exportovaném STEP | STEP sestavy je jeden složený celek umístěných těles |
| Ukládání do složky dle vlastní volby bez stažení v prohlížeči | Zapněte „zeptat se, kam uložit“ v nastavení stahování prohlížeče |

## Výkresy

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Kóty kromě tří celkových rozměrů (velikosti děr, polohy, tolerance velikostí) | Označte PDF nebo exportujte DXF a okótujte jej v 2D CAD programu |
| Více než jeden řez nebo detail; zarovnané, vylomené a pomocné pohledy | Jeden řez a jeden detail na výkres |
| Volný text, poznámky a tabulky na listu (kromě bloků názvu a revizí) | Poznámka o povrchu nebo text přidaný do PDF |
| Projekce v prvním úhlu, pohybující se pohledy, svislé listy | Třetí úhel, automatické rozvržení, vodorovné listy A4–A0 a ANSI A–E |
| Živý řez: několik rovin nebo řezný box najednou, obrys kolem řezu, uložení řezu do souboru | Jedna rovina najednou z {{ui:Views}} › {{ui:Section view}}; viz [Podívejte se dovnitř řezovým pohledem](topic:section-view) |
| Výkresy sestav s více pohledy, kótami nebo bublinami, které lze posouvat | Jeden izometrický (nebo rozložený) pohled s automatickými bublinami a seznamem dílů |
| Kopírování a vkládání symbolů GD&T a povrchu | Umístěte každý pomocí Datum, Rámeček nebo Povrch |
| Návody: soubory STEP v Illustrate {{ui:From another file…}}, model předaný přímo z ModelCraftu nebo BimCraftu, obrázky v kvalitě path traceru, interaktivní 3D v PDF | Otevřete STEP v Návrhu a spusťte návod {{ui:From the open part}}; uložte model jako glTF (.glb); PNG obrázky 3D pohledu; interaktivní 3D soubor: viz [Spusťte návod v Illustrate](topic:illustrate) |

## Sestavy

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Ozubená, hřebenová, vačková a šroubová spojení; kulový kloub omezený na kužel; spojení na zakřivených plochách nebo mezi body | Tuhá, rotační, posuvná, válcová, rovinná, kulová a kolíková spojení v drážce na rovných plochách, každé s vlastními mezemi: viz [Sestavte sestavu](topic:build-assembly) |
| Kroky rozložení, které otáčejí díly, a tažení dílů, které spojení umisťují | Přímé kroky rozložení; odstraňte spojení, abyste díl posunuli rukou |
| Podsestavy | Jen jedna úroveň dílů |
| Ozubená kola, vačky, kontakt | Není k dispozici |

## Výroba

| Ještě není hotovo | Místo toho dnes |
|---|---|
| 3D adaptivní vyčištění a ofsetové hrubování ve 3D; dokončování po vodorovné vrstvě, tužkou, radiálně a spirálově; adaptivní průchody zapsané jako oblouky | 3D hrubování v přímých řadách a obrábění zbytků: viz [3D hrubování a obrábění zbytků](topic:rough-3d); dokončování {{ui:Parallel}} a {{ui:Scallop}}: viz [3D dokončování](topic:finish-3d); 2,5osé plochy, kapsy, 2D adaptivní, obrys, vrtání a sražení hran: viz [Vytvořte dráhy nástroje a G-kód](topic:manufacture) |
| Řezání bočním nástrojem (swarf), proudové dráhy a vícenápravové hrubování, kódy nakloněné pracovní roviny (G68.2), kontroly kolize držáku a stroje; simulace 5osých a rotačních řezů | Nakloněný nástroj pro libovolnou operaci, 5osé dokončování kulovou frézou a dokončování 4. osou: viz [4- a 5osé obrábění](topic:multi-axis) |
| Vyvrtávání a vnitřní závity na soustruhu, cykly G71/G76, oblouky v drahách soustružení, živé nástroje, podvřeteno | Vnější soustružení: plocha, hrubování, dokončení, zapichování, upichnutí, závit, vrtání na středu: viz [Soustružení na soustruhu](topic:turning) |
| Snímání úhlu nebo rohu, nastavovač nástroje, měření velikosti proti toleranci | Snímání plochy, boku, otvoru nebo čepu pro nastavení posunutí obrobku: viz [Snímání](topic:probing) |
| Kontroly kolize držáku a stopky | Sledujte varování o délce zubů a kontrolujte v simulátoru řídicího systému |
| Životnost nástroje a cykly podprogramů v postprocesoru; načítání souborů postprocesorů jiných programů | Napište nebo změňte postprocesor ve formátu PartCraftu: viz [Upravitelné postprocesory](topic:post-processors) |
| G-kód v palcích (G20) | Pouze milimetry (G21) |

## Simulace a generativní návrh

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Nelineární výpočty: plastické tečení, velké průhyby, kontakt mezi díly, únava | Lineární statika a vlastní frekvence: viz [Ověřte pevnost a průhyb](topic:simulation); udržujte bezpečnostní faktor výrazně nad 1 |
| Nelineární vzpěr (imperfekce, poklesy po vzpěru, skokové přeskoky) | Lineární součinitele zatížení vzpěrem s velkou rezervou: viz [Teplo, tepelné napětí a vzpěr](topic:thermal-and-buckling) |
| Záření mezi plochami (faktory tvaru), kontaktní odpor, materiály závislé na teplotě, setrvačnost v tepelném napětí (rázové tepelné vlny) | Záření do okolí, ustálené nebo kvazistatické tepelné napětí v čase, konstantní vlastnosti: viz [Teplo, tepelné napětí a vzpěr](topic:thermal-and-buckling) |
| Automatické zjemnění pro přechodné teplo a výpočty s tepelným zatížením; hrubší síť tam, kde je chyba malá; cíl na lokální veličině (špičkové napětí v jednom místě) | **Zjemnit automaticky** pro statické, vzpěrné, vlastní frekvence a ustálené tepelné výpočty, podle chyby na celém dílu: viz [Ověřte pevnost a průhyb](topic:simulation); jinak zmenšete velikost prvku |
| Ložiskové a šroubové zatížení, vzdálené síly, momenty, pružiny, předepsané posuvy | Síly a tlaky na plochách, gravitace; pevné a bezztrátové plochy |
| Simulace sestav; materiály, které se liší podle směru (tištěné vrstvy, kompozity) | Jeden díl, jeden izotropní materiál |
| Několik vláken řešiče pro tetrahedrální výpočty, přenos tepla a generativní návrh; jakákoli vlákna na stránce, která není izolovaná mezi zdroji | Výpočty voxelů, vzpěr, napětí v čase a laminární proudění používají vlákna, kde to stránka dovolí: viz [Nastavení PartCraftu](topic:settings) |
| Turbulentní proudění s konstrukční přesností (model Spalart–Allmaras je zařazen jako experimentální: tření v potrubí o 30 až 34 % vyšší, znovupřipojení za zpětným schodem o 21 až 39 % kratší; plánováno: jemnější buňky u stěn), teplo v proudění, nestacionární (časově přesné) proudění, volné hladiny, nenewtonské kapaliny, rotující části | Laminární, ustálené, izotermické proudění newtonské kapaliny, nebo experimentální turbulentní model pro kvalitativní vzorce: viz [Simulace proudění tekutin](topic:flow-simulation); panel varuje, když je Reynoldsovo číslo nad laminárním |
| Mezní napětí a výrobní pravidla (převisy, směry frézování) v generativním návrhu; několik materiálů v jednom tvaru | Nejtuhější tvar pro daný objem; zkontrolujte výsledek ve Výpočtu: viz [Vyrůstání tvaru ze zatížení](topic:generative-design) |
| Výsledek jako upravitelné (hladké, parametrické) těleso | STL, STEP s fasetami nebo díl s výsledkem jako importované fasetové těleso |
| Konstrukce elektrických strojů: rotor otáčející se ve statoru, točivý moment proti úhlu, nasycená ocel, magnety ztrácející sílu za kolenem, vířivé proudy a ztráty v železe a mědi; magnetická pole ve 3D nebo na zakřivených sítích | Lineární 2D magnetostatika na mřížce v knihovně analýz: cívky, železo, permanentní magnety na jejich zpětné přímce, mezery, indukčnost a přitažlivost: viz [Magnetická pole ve 2D](topic:magnetic-fields-2d) |

## Skripty

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Nápověda při najetí, zarážky a krokování ve skriptovém editoru | Hledání, sbalení a doplňování jsou k dispozici (viz [Psaní a spouštění skriptů](topic:craftscript)); pro zbytek použijte svůj editor: {{ui:Save}} a {{ui:Open}} ve skupině Skript přesouvají skripty dovnitř a ven; vestavěné funkce jsou uvedeny v [Jazyk CraftScript](topic:craftscript-language) |
| Zarážky a krokování skriptem | `disp` a `fprintf` průběžně; {{key:Mod+Enter}} spustí několik vybraných řádků najednou |
| Pole a grafy, které skript zobrazuje, kreslené v pracovním prostoru Návrh; skripty měnící parametry dílu | Zobrazují se v pracovním prostoru Skript; skripty čtou parametry pomocí `param` (viz [Psaní a spouštění skriptů](topic:craftscript)), mění je na kartě {{ui:Parametry}} |
| Obrázky a tabulky vedle grafů; úprava grafu (zoom, meze os) před uložením | Vedle sebe zobrazuje grafy; uložte graf jako PNG, SVG nebo CSV a dokončete jej jinde |
| numpy a jiné balíčky Pythonu; Python offline; skládání Pythonu v editoru; Pascal Script | Standardní knihovna Pythonu, CraftScript a Lua: viz [Skripty v Pythonu](topic:craftscript-python) |
| Předávání funkcí Lua vestavěným funkcím; volání knihovní funkce z Lua podle názvu sestaveného za běhu skriptu | Napište název knihovní funkce do skriptu (`cs.static_tet(…)`), nebo ji volejte ze skriptu CraftScript |

## Aplikace

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Cloudové ukládání, sdílení a historie verzí | Zatím není k dispozici. Ukládejte soubory do počítače a verze držte podle názvu |
| PartCraft jako nainstalovaná aplikace na iPadu a iPhonu | Používejte PartCraft v prohlížeči zařízení; na Androidu a na počítači běží také v CadCraft Studiu (getcadcraft.com/download) |
| Kontextové (pravým tlačítkem) nabídky | Panel nástrojů a pravý panel |
| Plná práce offline od čistého spuštění | Jen když byla aplikace uložena pro offline použití: viz [Práce offline](common:offline) |

Napište, co vám nejvíc chybí, přes stránku podpory na webu: ovlivní to, co bude dál.

## Inženýrství (generátory a pole)

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Hlavice, porty a armatury na generovaném výměníku tepla; křivky teploty pro pevnost materiálu; ztráty v T-kusu v rozdělovači | Generátory vytvoří jádro a trubky; armatury přidejte v Návrhu; použijte údaje materiálu při pokojové teplotě s bezpečnostním faktorem |
| Přidávání generátorů z adresáře doplňků jedním kliknutím | {{ui:Open}} v pracovním prostoru Inženýrství přidá generátor ze souboru |
| Soubor polí jemnější než vlastní velikost voxelu generátoru; čtení souborů `.vdb` | Uložte jemnější pole ze skriptu; `.vdb` se zapisuje, nečte se |
| Výpočty tlakových nádob podle norem | Učebnicové vzorce pro tenkou a tlustou stěnu s bezpečnostním faktorem, který zvolíte; není to normová rezerva |
| Generátory pro ostatní aplikace | Jen PartCraft v této verzi |
