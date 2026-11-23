---
title: Co je nového ve verzi 0.9 (dříve)
summary: PartCraft 0.9 přidává zaoblení mezi plochami a ztlušťování na tělesa, sestavy tisíců dílů, trezor dokumentů s revizemi, doplněk Solid FEM pro pevnost, deset metod oblouku, britské ocelové profily, fázi tisku a doplňky pro tisk pryskyřicí. Každá položka říká, kde ji najít.
keywords: co je nového 0.9, starší vydání, co je nového, poznámky k vydání, changelog, 0.9, zaoblení mezi plochami, kutálející se kulička, zaoblení více hran, ztlušťování, těleso z ploch, STEP skořepina, IGES těleso, zaoblení ze skenů, velká sestava, odlehčené zobrazení, 20000 dílů, dokumenty, trezor, převzetí k úpravě, revize, vydání, kde použito, propojení Rhino, Grasshopper, 3dm, kurzory, výrobní hala, fronta úloh, solid fem, konečné prvky, von Mises, vlastní frekvence, metody oblouků, 3bodový oblouk, britské ocelové profily, fáze tisku, pryskyřice, goo, ctb, podložka, rozložit do roviny, 0.8, 0.8.1, verze, nové funkce, živá analýza, aktualizovat během úprav, zlom, co se zlomí první, součinitel zatížení, nelineární, tečení, plastická deformace, kontakt, calculix, studie pohybu, vůle, plochy, NURBS, vyhladit, trup, zebra, inženýrství, generátor, generované těleso, skica z fotografie, měřítko pro tisk, rozdělení pro tisk, smrštění, hnízdění listů, G-kód, výkres, okótovat otvory, asistent, mcp, jazyky, řádky panelu nástrojů
from: 1dafd7c8
---

Toto je to, co se změnilo v PartCraftu 0.9 ve srovnání s 0.8.1. Tvarované plochy se nyní uzavírají do těles, sestavy tisíců dílů zůstávají použitelné, trezor dokumentů uchovává revize a doplněk Solid FEM kontroluje pevnost v dílu. Každá položka říká, kde ji najít.

## Nové v 0.9.1

- **Export přesného STEP.** {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} a {{ui:STEP AP214 (přesné těleso)}} nyní fungují. Otvory, čepy, zaoblení, kužely, koule a tori se zapisují na svých skutečných plochách se skutečnými kružnicemi jako hranami, takže jiný CAD nebo CAM program může vybrat otvor jako otvor. Splajnové strany, modelované závity a importované sítě zůstávají rovnými fasetami ve stejném tělese. Viz [Export pro tisk, STEP a DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dovnitř, přesný STEP ven.** Soubor STEP, který otevřete, si zachová své rovné plochy, válce, kužely, koule a tori, takže {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} je zapíše zpět jako skutečné plochy místo fasetů: nosník dodavatele s šroubovými otvory odejde se stejnými plochami, s jakými přišel, plus cokoli do něj vyříznete. Splajnové, tažené a rotované plochy souboru zůstávají fasetami, stejně jako tělesa z STL, OBJ a 3MF. Soubor STEP pro díl uložený dříve otevřete znovu. Viz [Otevřít soubor STEP a stavět na něm](topic:import-step).
- **Skutečné kružnice v DXF plochy.** {{ui:Export}} › {{ui:DXF skici nebo rovné plochy}} s vybranou rovnou plochou nyní zapisuje kulaté otvory jako kružnice, se středem a poloměrem každého otvoru, pro stůl laseru, plazmy nebo vodního paprsku. Ostatní kulaté hrany zůstávají fasetami.
- **Přesný STEP pro dílnu.** Ve {{ui:Výroba}} zapíše {{ui:Přesné STEP (souřadnice obrobku)}} díl s počátkem v počátku obrobku upnutí a Z podél osy nástroje, tedy v souřadnicích, které G-kód používá. Viz [Vytvořte dráhy nástroje a G-kód](topic:manufacture#exact-step-for-the-shop).

## Nové

### Plochy a tělesa

- **Zaoblení mezi plochami.** Zvolte {{ui:Plochy}} v poli {{ui:Pracovní prostor}}, pak {{ui:Zaoblení mezi plochami}}. Vyberte dvě plochy jednoho tělesa a zadejte poloměr ({{ui:Radius at the end (mm, 0 = the same)}} pro poloměr, který se mění podél hrany). Výsledkový řádek říká, jak daleko je zaoblení od ideální kutálející se kuličky, a poloměr, který se nehodí, je odmítnut s pojmenovanou plochou. {{ui:Zaoblení více hran}} zaoblí mnoho hran najednou; zatrhněte {{ui:Corners (sphere patch where three meet)}} pro kulový roh, kde se setkají tři zaoblené hrany rovných ploch. Viz [Tvarované plochy (NURBS)](topic:nurbs-surfaces).
- **Ztlušťování na těleso.** {{ui:Ztloustit na těleso}} ve stejném pracovním prostoru dá ploše tloušťku; {{ui:Opačná strana}} ji zvětší na druhou stranu. Přeložení nebo křížení je odmítnuto s pojmenovanou plochou a místem.
- **Tělesa z ploch.** Oříznuté plochy lze spojit sjednocením, odečtením a průnikem a zapéct do dílu jako jeden krok zpět. STEP zapisuje těleso jako jednu uzavřenou skořepinu a IGES jako jedno těleso; obě se načtou zpět jako těleso. Pokud se plochy nespárují hranu po hraně, soubor dostane samostatné plochy a stavový řádek to řekne. Tělesa lze vytvářet také v editoru uzlů; viz [Editor uzlů](topic:nodes).
- **Zaoblení hran a proměnná zaoblení ve skenech.** Když přizpůsobujete plochy skenu, hledají se i zaoblení hran (tori) a zaoblení s proměnným poloměrem podél zhruba přímé hrany a jsou vypsána s poloměrem. Testováno jen na vytvořených skenech.

### Sestavy, dokumenty a odkazy

- **Velké sestavy.** Díly, které jsou kopiemi, sdílejí jednu síť a {{ui:Views}} › {{ui:Lightweight display}} kreslí krabice, takže pohled se hýbe dál (zapne se sám u velmi velkých sestav; výběr a spojení stále používají skutečné díly). Strom dílů ukazuje své první řádky a tlačítko {{ui:Zobrazit dalších 700}} pro zbytek. Soubory sestav mohou obsahovat až 50 000 instancí a 100 000 spojení. Viz [Sestavte sestavu](topic:build-assembly).
- **Dokumenty.** {{ui:Dokumenty…}} ve skupině **Soubor** otevře dialog nad složkou projektu: převzetí k úpravě a vrácení, písmena revizí, stavy (rozpracováno, k posouzení, uvolněno, zastaralé), historie, kde použito a kusovník. Viz [Dokumenty a revize (trezor)](topic:documents-walkthrough).
- **Živé propojení s Rhinem.** Jeden skript, `cadcraft_link.py`, sleduje dokument Rhina nebo Grasshopperu a posílá do PartCraftu jen to, co se změnilo; importovaný prvek se pak přestaví na nový tvar. Je jednosměrné a potřebuje Studio. Viz [Živý odkaz .3dm](topic:live-3dm-link).
- **Vidět navzájem své kurzory.** Ve sdílené relaci se kurzor každého člověka zobrazí s jeho jménem a prvkem, který má vybraný. Viz [Pracujte živě s ostatními](topic:work-live).
- **Výrobní hala.** Zapněte doplněk Výrobní hala v {{ui:Nastavení}} › {{ui:Doplňky}}. Poté, co odešlete program ve {{ui:Výroba}}, jeho karta může {{ui:Přidat do fronty úloh výroby}} nebo {{ui:Uložit jako soubor úlohy}}. Nikdy neodesílá ani nespouští stroj.

### Analýza a díly

- **Doplněk Solid FEM.** Zapněte {{ui:Solid FEM}} v {{ui:Nastavení}} › {{ui:Doplňky}} (je vypnutý, dokud to neuděláte) a na pravém panelu se objeví karta {{ui:Solid FEM}}. {{ui:Vytvořit síť dílu}}, vyberte pevné plochy a zatížení ve 3D pohledu, {{ui:Řešit}} a nakreslete posuv, napětí podle von Mises nebo tvar kmitu tlačítkem {{ui:Zobrazit na modelu}}. Viz [Solid FEM: kontrola pevnosti](topic:solid-fem-check).
- **Oblouk ve skicách, deseti způsoby.** Šipka vedle {{ui:Oblouk}} na panelu nástrojů skici vypíše 3 body, Začátek Střed Konec, Začátek Střed Úhel, Začátek Střed Délka, Začátek Konec Úhel, Začátek Konec Směr, Začátek Konec Poloměr, Střed Začátek Konec, Střed Začátek Úhel, Střed Začátek Délka a Pokračovat. Viz [Nakreslete oblouk deseti metodami](topic:sketch-arc-methods).
- **Britské ocelové profily.** Svařence mohou používat 976 britských profilů (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); napište rozměr, například `305x165x40 UB`. Viz [Konstrukční prvky](topic:structural-members).

### Tisk

- **Fáze tisku.** Tlačítko {{ui:Fáze tisku}} na panelu nástrojů (doplněk 3D tisk, ve výchozím stavu zapnutý) položí tělesa vašeho dílu na čárkovanou podložku: {{ui:Rozložit do roviny}}, {{ui:Otočit o 90°}}, {{ui:Rozmístit na podložku}}, {{ui:Vejít vše na podložku}}, {{ui:Náhled vrstev}}, pak {{ui:Odeslat na 3D tiskárnu}} přes USB, Klipper (Moonraker), OctoPrint nebo PrusaLink. Nic se neodešle, dokud nepotvrdíte, a váš díl se nikdy nezmění. Pro soubor STL nebo 3MF viz [Připravte díl na 3D tisk](topic:print-3d).
- **Tisk pryskyřicí.** Doplňky v {{ui:Nastavení}} › {{ui:Doplňky}}, všechny vypnuté, dokud je nezapnete: slicer pro pryskyřici, test expozice a formáty souborů Elegoo GOO, SL1, Chitubox CBDDLP/CTB a Anycubic. Slicování běží ve vlákně na pozadí, takže stránka zůstává odezvná.

## Ve všech aplikacích

- Každý nápovědný tip při najetí je tooltip Bootstrap.
- Startovní tip má zavírací tlačítko; zůstane zavřený.
- Řada karet panelu, která se nevejde, se posouvá do strany místo toho, aby byla oříznuta.
- Záložka prohlížeče ukazuje název otevřeného dokumentu před PartCraft | CadCraft.
- {{ui:Nastavení}} ukazuje {{ui:Rozložení}} pracovního prostoru jako rozbalovací seznam a pole jazyka vypisuje všechny jazyky, které sestavení obsahuje.
- Hmotnost a teplota jsou druhy jednotek v nastavení jednotek.

## Opraveno

- Nabídka Oblouk ve skice nyní vypisuje všechny metody.
- Panel doplňků a název záložky prohlížeče byly opraveny 2026-11-09.

## Upřímná omezení

- Přesný STEP byl přečten zpět v OpenCascade (platná tělesa, objemy rovné těm, které byly spočítány ručně). Dosud nebyl otevřen v každém CAD nebo CAM programu a sestava se nezapisuje jako přesný STEP.
- Nic nebylo vytištěno na skutečné tiskárně. Slicování, G-kód a soubory pryskyřice byly přečteny zpět našimi programy nebo náhradní tiskárnou; žádný z formátů pryskyřice nebyl nahrán na tiskárnu a velikosti tiskáren a expozice jsou výchozí hodnoty.
- Solid FEM je lineární, izotropní a pružný, jeden materiál na díl, bez kontaktu, plastického tečení nebo vzpěru. Napětí u pevných ploch a ostrých rohů závisí na síti. Je to pomůcka ke kontrole, ne přezkoumaná inženýrem.
- Časy u velkých sestav pocházejí ze serveru bez GPU; snímek s plným detailem 20 000 dílů tam stále trvá sekundy.
- Zaoblení fungují na dvojicích ploch; neexistuje obecné splynutí vrcholů ani zaoblení mezi plochami, které se nesetkávají.
- Odkaz na Rhino nikdy neběžel uvnitř skutečného Rhina nebo Grasshopperu. Dokumenty byly vyzkoušeny dvěma programy na jedné složce, ne dvěma lidmi na síťovém úložišti.
- Přizpůsobení ploch skutečnému skenu nebylo ručně zkontrolováno. Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- Instalátory pro Windows nejsou podepsány kódem a obraz disku pro macOS není notarizován. Viz [Řešení potíží](topic:troubleshooting).

Starší změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).

## Dříve: 0.8 a 0.8.1

Toto je to, co se změnilo v PartCraftu 0.8 a 0.8.1 ve srovnání s 0.7. Simulace odpovídá během úprav a říká, co se zlomí první, sestavy dostanou studie pohybu a nové pracovní prostory vytvářejí tvarované plochy a díly dimenzované podle fyziky. 0.8.1 je malé opravné vydání.

### Nové

**Simulace**

- **Aktualizovat během úprav.** Zatrhněte {{ui:Aktualizovat během úprav}} v bloku {{ui:Řešit}} a odpovědi se budou řídit vašimi úpravami. Změníte-li kótu, zatížení nebo materiál, rychlá odpověď, vypočítaná na prvcích čtyřikrát větších, se objeví okamžitě; když přestanete asi na sekundu, vlastní zpřesněná odpověď studie ji nahradí. Výsledky říkají, na kterou se díváte. U ocelového konzolového nosníku byla rychlá odpověď do 1 % na průhybu a asi 4 % na napětí oproti zpřesněné. Viz [Ověřte pevnost a průhyb](topic:simulation#update-while-you-edit-live).
- **Co se zlomí první.** U statické nebo vzpěrné studie {{ui:What breaks first?}} v bloku **Zlom** škáluje zatížení, dokud díl nepovolí. Vypíše od nejhoršího součinitel zatížení k prvnímu průtahu (s červeným značkou, kde napětí vrcholí) a součinitel k vzpěru. Součinitel pod 1 znamená, že díl se při zatížení již poddává, a Problémy ukážou chybu. Součinitele pocházejí z lineární studie, takže jsou jen tak dobré, jak dobrá je ona. Viz [Ověřte pevnost a průhyb](topic:simulation#find-out-what-breaks-first-break-it).
- **Plastičnost a kontakt.** Dva další typy studií: nelineární, kde materiál sleduje svou přímku až do meze kluzu a pak mírnější sklon, s vykreslenou plastickou deformací, a kontaktní, kde se oddělené kusy tlačí (bez tření) nebo drží (slepené). Krok zatížení, který se neusadí, nebo kusy, které se do sebe zabořují příliš hluboko, se ukážou v panelu Problémy. Tření, velké klouzání, velké otáčení, velké průhyby a únava se neřeší. Viz [Ověřte pevnost a průhyb](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Balíčky pro CalculiX.** {{ui:Export}} › {{ui:Balíček pro CalculiX (.inp)}} uloží studii pro CalculiX, samostatný program, který si nainstalujete a spustíte sami; {{ui:Export}} › {{ui:Výsledky CalculiX (.frd)}} načte jeho výsledkový soubor zpět na stejnou síť. PartCraft ten program nikdy nespustí a řekne to, pokud se díl od uložení balíčku změnil.

**Sestavy**

- **Studie pohybu.** {{ui:Sestava}} › {{ui:Pohyb}} řídí hodnotu jednoho spojení během času, který zadáte (konstantní rychlost, zmírněně, sinusově nebo tam a zpět), umísťuje sestavu v každém kroku s jejími spojeními a uzavřenými smyčkami a hlásí, co se srazí a jak blízko se díly přiblíží. {{ui:Přidat bod}} vykreslí polohu bodu, rychlost a zrychlení, hodnotu spojení a vůli v čase; {{ui:Uložit CSV}} a {{ui:Uložit graf}} je zapíšou ven. Po {{ui:Spustit}} přesune lišta krokování běhu sestavu do libovolného kroku. Nastavení studie se uloží do souboru sestavy. Rychlost a zrychlení se počítají ze zaznamenaných poloh, takže použijte více kroků, pokud ostrý vrchol vychází nízko. Viz [Zkontrolujte sestavu na kolize a pohyb](topic:check-assembly#a-motion-study).

**Plochy a díly z fyziky**

- **Pracovní prostor Plochy.** Zvolte {{ui:Plochy}} v poli {{ui:Pracovní prostor}} pro křivky a plochy NURBS vedle dílu: {{ui:Křivka}}, {{ui:Lofting}}, {{ui:Tažení po dráze}}, {{ui:Přizpůsobit}} a {{ui:Zebra}}, se spojitostí (G0, G1 nebo G2) měřenou na přesných plochách a hranou, která je horší, než jste chtěli, vypsanou v Problémech s opravou Přizpůsobit. {{ui:Vyhladit}} měří obrysy trupu na inflexe a skoky křivosti a přestaví nehladké části v rámci vaší tolerance. Plochy se ukládají do souboru dílu a nemění prvky dílu. Viz [Tvarované plochy (NURBS)](topic:nurbs-surfaces).
- **Pracovní prostor Inženýrství.** Zvolte {{ui:Inženýrství}} v přepínači pracovního prostoru, vyberte generátor a klikněte na {{ui:Nový}}: skript dimenzuje díl podle toho, co musí dělat (přenést teplo, průtoky, tlak, materiál, způsob tisku), učebnicovými vzorci jej postaví a pak vrátí čísla, která použil, s jejich zdroji, své výrobní kontroly a soubory pro analytické nástroje. Stejné vstupy dají stejný díl na jakémkoli počítači. Generátor je uložen v díle a otevření dílu nikdy nespustí skript. Viz [Díly z fyziky: generátory](topic:engineer-generators) a [Napište generátor](topic:write-a-generator).

**Skicování, výkresy a výroba**

- **Skica z fotografie.** {{ui:Prvky}} › {{ui:Více}} › {{ui:Skica z fotografie…}} obkreslí obrázek plochého dílu na jednoduchém podkladu (obrys a otvory) nebo kresbu tuží do čar, oblouků a kružnic. Zadáte jednu délku, zkontrolujete náhled a vytvoříte skicu. Viz [Základy skicování](topic:sketch-basics#a-sketch-from-a-photo).
- **Měřítko a rozdělení pro tisk.** {{ui:Export}} › {{ui:Měřítko pro tisk (STL nebo 3MF)…}} škáluje podle os bez změny dílu, například o přídavek na smrštění. {{ui:Export}} › {{ui:Rozdělit pro tisk (zip s kusy)…}} rozřeže díl, který je pro vaši podložku příliš velký, na očíslované kusy spojené kolíky, klíči, vlaštovčími ocasy, kolíkovými dírami nebo magnetickými kapsami. Viz [Tiskněte v 3D](topic:print-3d).
- **Hnízdění listů do G-kódu.** {{ui:Export}} › {{ui:Rozmístěné listy do G-kódu}} načte vnořený DXF a vytvoří jeden program na list přes postprocesor, který zvolíte: nejdřív díry a výřezy, pak obrysy. Neplánuje nájezdy, pořadí řezání ani sdílené hrany. Viz [Rozmístění plochých dílů na listy](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Výkresy, které víc dělají samy.** {{ui:List}} › {{ui:Automaticky}} vybere nejmenší list formátu A, který pojme pohledy v největším standardním měřítku až do 1:1. {{ui:Okótovat otvory}} dá na každý otvor značku středu, jeden popisek na velikost a polohy od levého dolního rohu pohledu. Viz [Vytvořte výkres](topic:drawing-pdf).

**Ve všech aplikacích**

- **Jazyky.** Aplikace přicházejí ve 54 jazycích. Ty kromě angličtiny jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} vybere Zalamovat (jako dřív), 2 řádky nebo 1 řádek; lišta, která se nevejde, se posouvá do strany. Pás prvků PartCraftu ukazuje nejpoužívanější nástroj velký a varianty schovává za dělené tlačítko.
- **Připojte vlastní AI.** Studio je centrum pro připojení vlastního asistenta ke všem osmi aplikacím, s oprávněním jen ke čtení, k navrhování nebo k úpravám pro každou aplikaci. Připojený asistent může dimenzovat díl z věty, například držák pro zatížení, ukázat svůj postup a každou kontrolu a postavit jej; hlásí, co nezkontroloval (koncentrace napětí, únava, tečení plastů). Viz [Použijte PartCraft s AI asistentem](topic:use-with-ai-assistants).

### Opraveno v 0.8.1

- **Zamrznutí kurzoru na celé obrazovce.** Výběr najetím je nyní omezen. Příčina je naše nejlepší čtení a nebyla potvrzena s člověkem, který ji nahlásil.
- **Jazyk za běhu.** Studio a balené edice mohou přepínat jazyk za běhu; dříve byly jen v angličtině. Není to zatím otestováno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.

### Není v této verzi zatím

- Připojení AI není hotovo: připojení jedním kliknutím uvnitř Studia, hostovaný konektor pro AI v prohlížeči, vlastní API klíč uvnitř Studia a publikovaný balíček MCP nejsou slíbeny. Studio nemá vlastní AI.
- Studio není podepsáno kódem: Windows může varovat, macOS žádá pravé tlačítko a pak Otevřít. Viz [Řešení potíží](topic:troubleshooting).
- Řetězce tolerancí jsou stále jednosměrné: viz [Řetězce tolerancí](topic:tolerance-stackup).
- Zbytek je uveden v [Co ještě není hotovo](topic:not-built-yet).

Starší změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
