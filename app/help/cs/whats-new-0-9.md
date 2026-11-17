---
title: Novinky ve verzi 0.9
summary: PartCraft 0.9 přidává zaoblení mezi plochami a ztlouštění na tělesa, sestavy tisíců dílů, trezor dokumentů s revizemi, doplněk Solid FEM pro napětí, deset metod oblouku, britské ocelové profily, fázi tisku a doplňky pro tisk na pryskyřici.
keywords: co je nového, novinky, poznámky k vydání, changelog, 0.9, zaoblení mezi plochami, valící se koule, zaoblení více hran, ztloustit, těleso z ploch, step skořepina, iges těleso, zaoblení ve skenech, velká sestava, odlehčené zobrazení, 20000 dílů, dokumenty, trezor, vyzvednutí, revize, vydání, kde se používá, propojení s Rhinem, grasshopper, 3dm, kurzory, výrobní hala, fronta úloh, solid fem, konečné prvky, von mises, vlastní frekvence, metody oblouku, 3bodový oblouk, britské ocelové profily, modrá kniha, fáze tisku, pryskyřice, goo, ctb, lože, rozložit do roviny, co se zlomí první, nelineární, mez kluzu, plastická deformace, kontakt, calculix, studie pohybu, vůle, plochy, nurbs, vyhladit, trup, zebra, inženýr, generátor, generované těleso, skica z fotografie, měřítko pro tisk, rozdělit pro tisk, smršťování, rozmístěné listy, g-kód, výkres, okótovat otvory, asistent, mcp, jazyky, řádky panelu nástrojů
from: 96d9fbfa
---

Toto je, co se změnilo v PartCraftu 0.9 oproti 0.8.1. Volné plochy se nyní uzavírají do těles, sestavy tisíců dílů zůstávají použitelné, trezor dokumentů uchovává revize a doplněk Solid FEM kontroluje napětí v dílu. Každá položka říká, kde ji najít.

## Nové ve verzi 0.9.1

- **Přesný export STEP.** {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} a {{ui:STEP AP214 (přesné těleso)}} nyní fungují. Díry, výstupky, zaoblení, kužele, koule a tori se zapisují na svých skutečných plochách se skutečnými kružnicemi jako hranami, takže jiný CAD nebo CAM program může díru vybrat jako díru. Splajnové strany, modelované závity a importované sítě zůstanou ploché fasety ve stejném tělese. Viz [Export pro tisk, STEP a DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dovnitř, přesný STEP ven.** Soubor STEP, který otevřete, si ponechá své ploché plochy, válce, kužele, koule a tori, takže {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} je zapíše zpět jako skutečné plochy místo fasetů: nosník od dodavatele se šroubovými dírami odchází se stejnými plochami, s jakými přišel, plus cokoli jste do něj vyřízli. Splajnové, tažené a rotované plochy souboru zůstávají fasetami, stejně jako tělesa ze STL, OBJ a 3MF. Otevřete soubor STEP znovu pro díl uložený dříve. Viz [Otevřete soubor STEP a stavte na něm](topic:import-step).
- **Skutečné kružnice v DXF plochy.** {{ui:Export}} › {{ui:DXF skici nebo rovné plochy}} s vybranou rovnou plochou nyní zapisuje kulaté díry jako kružnice, se středem a poloměrem každé díry, pro stůl laseru, plazmy nebo vodního paprsku. Ostatní kulaté hrany zůstávají fasetami.
- **Přesný STEP pro dílnu.** Ve {{ui:Výroba}} zapíše {{ui:Přesné STEP (souřadnice obrobku)}} díl s počátkem v pracovním počátku nastavení a Z podél osy nástroje, v souřadnicích, které používá G-kód. Viz [Vytvořte dráhy nástroje a G-kód](topic:manufacture#exact-step-for-the-shop).

## Nové

### Plochy a tělesa

- **Zaoblení mezi plochami.** Zvolte {{ui:Plochy}} v poli {{ui:Pracovní prostor}}, pak {{ui:Zaoblení mezi plochami}}. Vyberte dvě plochy jednoho tělesa a napište poloměr (a {{ui:Poloměr na konci (mm, 0 = stejný)}} pro poloměr, který se mění podél hrany). Výsledkový řádek říká, jak daleko je zaoblení od ideální valící se koule, a poloměr, který se nevejde, je odmítnut s pojmenovanou plochou. {{ui:Zaoblení více hran}} zaoblí mnoho hran v jednom kroku; zaškrtněte {{ui:Rohy (kulová záplata, kde se stýkají tři)}} pro kulový roh, kde se stýkají tři zaoblené hrany rovných ploch. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).
- **Ztloustit na těleso.** {{ui:Ztloustit na těleso}} ve stejném pracovním prostoru dá ploše tloušťku; {{ui:Opačná strana}} ji zvětší na druhou stranu. Záhyb nebo křížení se sebou samým je odmítnut s pojmenovanou plochou a místem.
- **Tělesa z ploch.** Oříznuté plochy lze spojit sjednocením, odečtením a průnikem a zapéct do dílu jako jeden krok zpět. STEP zapisuje těleso jako jednu uzavřenou skořepinu a IGES jako jedno těleso; obojí se čte zpět jako těleso. Pokud se plochy nespárují hranu po hraně, soubor dostane samostatné plochy a stavový řádek to řekne. Tělesa lze také vytvořit v editoru uzlů; viz [Editor uzlů](topic:nodes).
- **Okrajová zaoblení a proměnná zaoblení ve skenech.** Když přizpůsobujete plochy skenu, hledají se i okrajová zaoblení (tori) a zaoblení proměnného poloměru podél zhruba přímé hrany a uvedou se s poloměrem. Otestováno jen na vytvořených skenech.

### Sestavy, dokumenty a propojení

- **Velké sestavy.** Díly, které jsou kopiemi, sdílejí jednu síť, a {{ui:Pohledy}} › {{ui:Odlehčené zobrazení}} kreslí krabice, takže pohled se hýbe dál (zapne se sám u velmi velkých sestav; výběr a klouby stále používají skutečné díly). Strom dílů ukáže prvních několik řádků a tlačítko {{ui:Zobrazit dalších 700}} zobrazí zbytek. Soubory sestav mohou obsahovat až 50 000 instancí a 100 000 kloubů. Viz [Sestavení sestavy](topic:build-assembly).
- **Dokumenty.** {{ui:Dokumenty…}} ve skupině **Soubor** otevře dialog nad složkou projektu: vyzvednutí a vrácení, písmenové revize, stavy (rozpracováno, k posouzení, uvolněno, zastaralé), historie, kde se používá a kusovník. Viz [Dokumenty a revize (trezor)](topic:documents-walkthrough).
- **Živé propojení s Rhinem.** Jeden skript, `cadcraft_link.py`, sleduje dokument Rhino nebo Grasshopper a do PartCraftu posílá jen to, co se změnilo; tam se importovaný prvek přestaví podle nového tvaru. Je to jednosměrné a vyžaduje Studio. Viz [Živý odkaz .3dm](topic:live-3dm-link).
- **Vidíte navzájem své kurzory.** Ve sdílené relaci se kurzor každého člověka zobrazí se jménem a prvkem, který má vybraný. Viz [Práce živě s ostatními](topic:work-live).
- **Výrobní hala.** Zapněte doplněk Výrobní hala v {{ui:Nastavení}} › {{ui:Doplňky}}. Poté, co odešlete program ve {{ui:Výroba}}, jeho karta může {{ui:Přidat do fronty úloh haly}} nebo {{ui:Uložit jako soubor úlohy}}. Nikdy neodesílá ani nespouští stroj.

### Analýza a díly

- **Doplněk Solid FEM.** Zapněte {{ui:Solid FEM}} v {{ui:Nastavení}} › {{ui:Doplňky}} (je vypnutý, dokud to neuděláte) a v pravém panelu se objeví karta {{ui:Solid FEM}}. {{ui:Vytvořit síť dílu}}, vyberte pevné plochy a zatížení v 3D pohledu, {{ui:Řešit}}, a nakreslete posunutí, napětí podle von Misese nebo tvar kmitu tlačítkem {{ui:Zobrazit na modelu}}. Viz [Solid FEM: kontrola napětí](topic:solid-fem-check).
- **Oblouk ve skicách, deseti způsoby.** Šipka vedle {{ui:Oblouk}} v panelu nástrojů skic vypíše: 3 body, Začátek, střed, konec; Začátek, střed, úhel; Začátek, střed, délka; Začátek, konec, úhel; Začátek, konec, směr; Začátek, konec, poloměr; Střed, začátek, konec; Střed, začátek, úhel; Střed, začátek, délka; a Pokračovat. Viz [Nakreslete oblouk deseti metodami](topic:sketch-arc-methods).
- **Britské ocelové profily.** Konstrukční prvky mohou používat 976 britských profilů (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); napište velikost, například `305x165x40 UB`. Viz [Konstrukční prvky](topic:structural-members).

### Tisk

- **Fáze tisku.** Tlačítko {{ui:Fáze tisku}} v panelu nástrojů (doplněk 3D tisk, ve výchozím stavu zapnutý) položí tělesa vašeho dílu na čárkované lože: {{ui:Rozložit do roviny}}, {{ui:Otočit o 90°}}, {{ui:Uspořádat na loži}}, {{ui:Vejít vše na lože}}, {{ui:Náhled vrstev}}, pak {{ui:Odeslat na 3D tiskárnu}} přes USB, Klipper (Moonraker), OctoPrint nebo PrusaLink. Nic se neodešle, dokud nepotvrdíte, a váš díl se nikdy nezmění. Pro soubor STL nebo 3MF viz [Připravte díl na 3D tisk](topic:print-3d).
- **Tisk na pryskyřici.** Doplňky v {{ui:Nastavení}} › {{ui:Doplňky}}, všechny vypnuté, dokud je nezapnete: slicer pro pryskyřici, test expozice a formáty souborů Elegoo GOO, SL1, Chitubox CBDDLP/CTB a Anycubic. Slicování běží ve vlákně na pozadí, takže stránka zůstává odezvová.

## Ve všech aplikacích

- Každá nápověda při najetí je bublina Bootstrap.
- Úvodní tip má tlačítko zavřít; zůstává zavřený.
- Řádek karet panelu, který se nevejde, se posouvá do strany místo oříznutí.
- Karta prohlížeče ukazuje název otevřeného dokumentu před PartCraft | CadCraft.
- {{ui:Nastavení}} ukazuje {{ui:Rozložení}} pracovního prostoru jako rozbalovací seznam voleb a pole jazyka vypisuje všechny jazyky, které sestavení má.
- Hmotnost a Teplota jsou druhy jednotek v nastavení jednotek.

## Opraveno

- Nabídka Oblouk ve skice nyní vypisuje každou metodu.
- Lišta doplňků a název karty prohlížeče byly opraveny 2026-11-09.

## Upřímná omezení

- Přesný STEP byl znovu načten v OpenCascade (platná tělesa, objemy rovné těm, které se spočítaly ručně). Zatím nebyl otevřen v každém CAD nebo CAM programu a sestava se nezapisuje jako přesný STEP.
- Nic nebylo vytištěno na skutečné tiskárně. Slicování, G-kód a soubory pro pryskyřici četly naše vlastní programy nebo náhradní tiskárna; žádný formát pryskyřice nebyl načten na tiskárně a velikosti tiskáren a expozice jsou výchozí body.
- Solid FEM je lineární, izotropní a pružný, s jedním materiálem na díl, bez kontaktu, plastické deformace ani vzpěru. Napětí u pevných ploch a ostrých rohů závisí na síti. Je to pomůcka pro kontrolu, neprověřená inženýrem.
- Časy pro velké sestavy pochází ze serveru bez GPU; snímek plné detailnosti 20 000 dílů tam stále trvá sekundy.
- Zaoblení funguje na dvojicích ploch; není tu obecný vrcholový přechod ani zaoblení mezi plochami, které se nestýkají.
- Propojení s Rhinem nikdy neběželo uvnitř skutečného Rhina nebo Grasshopperu. Dokumenty vyzkoušely dva programy na jedné složce, ne dva lidé na síťovém sdílení.
- Přizpůsobení ploch skutečnému skenu nebylo ručně zkontrolováno. Jazyky jiné než angličtina jsou strojové koncepty.
- Instalátory pro Windows nejsou podepsány kódem a obraz disku pro macOS není notarizován. Viz [Řešení problémů](topic:troubleshooting).

Dřívější změny jsou v [Novinky ve verzi 0.7](topic:whats-new-0-7).

## Dříve: 0.8 a 0.8.1

Toto je, co se změnilo ve verzi PartCraft 0.8 a 0.8.1 oproti 0.7. Simulace odpovídá během úprav a říká, co se zlomí první, sestavy dostávají studie pohybu a nové pracovní prostory vytvářejí volné plochy a díly dimenzované podle fyziky. 0.8.1 je malé opravné vydání.

### Nové

**Simulace**

- **Aktualizovat během úprav.** Zaškrtněte {{ui:Aktualizovat během úprav}} v bloku {{ui:Řešit}} a odpovědi budou následovat vaše úpravy. Změníte-li kótu, zatížení nebo materiál, objeví se hned rychlá odpověď, spočítaná s prvky čtyřikrát většími; když se zastavíte asi na sekundu, vlastní zpřesněná odpověď studie ji nahradí. Výsledky říkají, kterou z nich právě vidíte. U ocelového konzolového nosníku byla rychlá odpověď v rámci 1 % u průhybu a asi 4 % u napětí oproti zpřesněné. Viz [Kontrola napětí a průhybu](topic:simulation#update-while-you-edit-live).
- **Co se zlomí první.** U statické nebo vzpěrové studie {{ui:Co se zlomí první?}} v bloku **Zlomit to** škáluje zatížení, dokud díl nepovolí. Vypíše od nejhoršího faktor zatížení k první mezi kluzu (s červenou značkou tam, kde napětí vrcholí) a faktor zatížení ke vzpěru. Faktor pod 1 znamená, že díl již při zatížení povoluje a panel Problémy ukáže chybu. Faktory pocházejí z lineární studie, takže jsou jen tak dobré, jak dobrá je ona. Viz [Kontrola napětí a průhybu](topic:simulation#find-out-what-breaks-first-break-it).
- **Plastická deformace a kontakt.** Dva další typy studií: nelineární, kde materiál sleduje svou přímku až k mezi kluzu a pak mírnější sklon, s vykreslenou plastickou deformací, a kontaktní, kde se oddělené kusy tlačí na sebe (bez tření), nebo drží slepené (vázané). Krok zatížení, který se neustálí, nebo kusy, které se do sebe propadnou příliš hluboko, se ukážou v panelu Problémy. Tření, velké klouzání, velké otáčení, velké průhyby a únava se neřeší. Viz [Kontrola napětí a průhybu](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Soubory pro CalculiX.** {{ui:Export}} › {{ui:Vstupní soubor CalculiX (.inp)}} uloží studii pro CalculiX, samostatný program, který si nainstalujete a spustíte sami; {{ui:Export}} › {{ui:Výsledky CalculiX (.frd)}} načte jeho výsledkový soubor zpět na stejnou síť. PartCraft ten program nikdy nespustí a řekne, pokud se díl od uložení souboru změnil.

**Sestavy**

- **Studie pohybu.** {{ui:Sestava}} › {{ui:Pohyb}} řídí hodnotu jednoho kloubu v čase, který zadáte (stálá rychlost, zmírněná, sinusová, nebo tam a zpět), umístí sestavu v každém kroku se svými klouby a uzavřenými smyčkami a hlásí, co se střetává a jak blízko se díly dostávají. {{ui:Přidat bod}} vykreslí polohu, rychlost a zrychlení bodu, hodnotu kloubu a vůli v čase; {{ui:Uložit CSV}} a {{ui:Uložit graf}} je zapíší ven. Po {{ui:Spustit}} přesune lišta Krokování běhu sestavu na libovolný krok. Nastavení studie se ukládá v souboru sestavy. Rychlost a zrychlení se počítají ze zaznamenaných poloh, takže pokud ostrý vrchol vychází nízko, použijte více kroků. Viz [Kontrola sestavy na kolize a pohyb](topic:check-assembly#a-motion-study).

**Plochy a díly z fyziky**

- **Pracovní prostor Plochy.** Zvolte {{ui:Plochy}} v poli {{ui:Pracovní prostor}} pro křivky a plochy NURBS vedle dílu: {{ui:Křivka}}, {{ui:Lofting}}, {{ui:Tažení po dráze}}, {{ui:Přizpůsobit}} a {{ui:Zebra}}, se spojitostí (G0, G1 nebo G2) měřenou na přesných plochách a hranou, která je horší, než jste požadovali, uvedenou v Problémech s opravou Přizpůsobit. {{ui:Vyhladit}} měří čáry trupu na inflexe a skoky křivosti a přestaví nehladké v rámci vaší tolerance. Plochy se ukládají v souboru dílu a nemění prvky dílu. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).
- **Pracovní prostor Inženýr.** Zvolte {{ui:Inženýr}} v přepínači pracovních prostorů, vyberte generátor a klikněte na {{ui:Nový}}: skript podle toho, co díl musí dělat (přenést teplo, průtoky, tlak, materiál, způsob tisku), jej dimenzuje pomocí učebnicových vzorců a postaví, pak vrátí čísla, která použil, s jejich zdroji, své výrobní kontroly a soubory pro analytické nástroje. Stejné vstupy dají stejný díl na kterémkoli počítači. Generátor se drží v dílu a otevření dílu nikdy neběží skript. Viz [Díly z fyziky: generátory](topic:engineer-generators) a [Napište generátor](topic:write-a-generator).

**Skicování, výkresy a výroba**

- **Skica z fotografie.** {{ui:Prvky}} › {{ui:Více}} › {{ui:Skica z fotografie…}} obkreslí obrázek plochého dílu na prostém podkladu (obrys a díry), nebo kresbu tužkou, na čáry, oblouky a kružnice. Zadáte jednu délku, zkontrolujete náhled a vytvoříte skicu. Viz [Základy skicování](topic:sketch-basics#a-sketch-from-a-photo).
- **Měřítko a dělení pro tisk.** {{ui:Export}} › {{ui:Měřítko pro tisk (STL nebo 3MF)…}} škáluje podle os, aniž by se díl změnil, například kvůli přídavku na smrštění. {{ui:Export}} › {{ui:Rozdělit pro tisk (zip s kusy)…}} rozřeže díl, který je na vaše lože příliš velký, na očíslované kusy spojené kolíky, klíči, vlaštovčími ocasy, kolíkovými otvory nebo kapsami na magnety. Viz [Tisk v 3D](topic:print-3d).
- **Rozmístěné listy do G-kódu.** {{ui:Export}} › {{ui:Rozmístěné listy do G-kódu}} načte rozmístěné DXF a vytvoří jeden program na list přes postprocesor, který zvolíte: nejdřív díry a výřezy, pak obrysy. Neplánuje najetí, pořadí řezání ani společné hrany. Viz [Rozmístěte rovné díly na listy](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Výkresy, které dělají víc samy.** {{ui:List}} › {{ui:Automaticky}} zvolí nejmenší list formátu A, který pojme pohledy v největším standardním měřítku až do 1:1. {{ui:Okótovat otvory}} dá na každou díru středovou značku, jeden popisek na velikost a polohy od levého dolního rohu pohledu. Viz [Vytvoření výkresu](topic:drawing-pdf).

**Ve všech aplikacích**

- **Jazyky.** Aplikace přicházejí v 54 jazycích. Ty mimo angličtinu jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} volí Zalomit (jako dříve), 2 řádky nebo 1 řádek; lišta, která se nevejde, se posouvá do strany. Pás {{ui:Prvky}} v PartCraftu ukazuje nejvíce používaný nástroj velký a varianty schovává za rozdělovací tlačítko.
- **Připojte svou AI.** Studio je centrum pro připojení vašeho vlastního asistenta ke všem osmi aplikacím, s oprávněním jen ke čtení, navrhování nebo úpravám pro každou aplikaci. Připojený asistent umí z věty, například nosník pro zatížení, dimenzovat díl, ukázat svůj postup a každou kontrolu a postavit jej; hlásí, co nezkontroloval (koncentraci napětí, únavu, tečení plastů). Viz [Použití PartCraftu s AI asistentem](topic:use-with-ai-assistants).

### Opraveno ve verzi 0.8.1

- **Zamrznutí kurzoru na celou obrazovku.** Výběr při najetí je nyní omezen. Příčina je naše nejlepší odhad a nebyla potvrzena s osobou, která to nahlásila.
- **Jazyk za běhu.** Studio a balíčkované verze mohou přepnout jazyk za běhu; dříve byly jen v angličtině. Ještě není otestováno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.

### Zatím není v této verzi

- Připojení AI není dokončeno: jednoklikové připojení uvnitř Studia, hostovaný konektor pro AI v prohlížeči, váš vlastní klíč API uvnitř Studia a publikovaný balíček MCP nejsou slíbeny. Studio nemá vlastní AI.
- Studio není podepsáno kódem: Windows může varovat a macOS žádá pravé tlačítko, pak Otevřít. Viz [Řešení problémů](topic:troubleshooting).
- Zásobníky tolerancí jsou stále jednosměrné: viz [Zásobníky tolerancí](topic:tolerance-stackup).
- Zbytek je uveden v [Co zatím není hotovo](topic:not-built-yet).

Dřívější změny jsou v [Novinky ve verzi 0.7](topic:whats-new-0-7).
