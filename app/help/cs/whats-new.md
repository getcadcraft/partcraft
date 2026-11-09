---
title: Co je nového ve verzi 0.8 a 0.8.1
summary: PartCraft 0.8 přidává průběžnou analýzu během úprav, kontrolu Co se zlomí první, studie pružení a kontaktu s vstupními soubory pro externí řešitel, studie pohybu pro sestavy, pracovní prostor Plochy pro volné plochy, díly dimenzované podle fyziky v pracovním prostoru Inženýr, skicu z fotografie, exporty pro tisk, rozmístěné listy do G-kódu a výkresy, které okótují své otvory. Verze 0.8.1 opravuje zamrznutí kurzoru při režimu celé obrazovky.
keywords: novinky, co je nového, poznámky k vydání, changelog, změny, 0.8, 0.8.1, verze, nové funkce, průběžná analýza, aktualizace během úprav, rozbij to, co se zlomí první, součinitel zatížení, nelineární, mez kluzu, plastická deformace, kontakt, calculix, studie pohybu, vůle, plochy, nurbs, vyhladit, trup, zebra, inženýr, generátor, generovaný díl, skica z fotografie, měřítko pro tisk, rozdělení pro tisk, smrštění, rozmístěné listy, g-code, výkres, okótování otvorů, asistent, mcp, jazyky, řádky panelu nástrojů
from: 62e4dce2
---

Toto je přehled změn v PartCraft 0.8 a 0.8.1 oproti verzi 0.7. Simulace odpovídá během úprav a říká, co se zlomí první, sestavy dostávají studie pohybu a nové pracovní prostory vytvářejí volné plochy a díly dimenzované podle fyziky. Verze 0.8.1 je malá opravná verze.

## Nové

### Simulace

- **Aktualizovat během úprav.** Zaškrtněte {{ui:Aktualizovat během úprav}} v bloku Řešit a odpovědi se budou řídit vašimi úpravami. Změníte-li kótu, zatížení nebo materiál, okamžitě se objeví rychlá odpověď spočítaná s prvky čtyřikrát většími; když přestanete asi na jednu sekundu, nahradí ji zpřesněná odpověď vlastní studie. Výsledky říkají, která z odpovědí se zobrazuje. U ocelové konzoly byla rychlá odpověď v rámci 1 % u průhybu a asi 4 % u napětí oproti zpřesněné. Viz [Kontrola napětí a průhybu](topic:simulation#update-while-you-edit-live).
- **Co se zlomí první.** U statické nebo vzpěrné studie nastaví {{ui:Co se zlomí první?}} v bloku **Rozbij to** zatížení tak, aby díl povolil. Seřadí od nejhoršího: součinitel zatížení do první meze kluzu (s červenou značkou tam, kde napětí vrcholí) a součinitel zatížení do vzpěru. Součinitel menší než 1 znamená, že díl již při zadaném zatížení povoluje, a panel Problémy zobrazí chybu. Součinitele vycházejí z lineární studie, takže jsou jen tak dobré, jak dobrá je ona. Viz [Kontrola napětí a průhybu](topic:simulation#find-out-what-breaks-first-break-it).
- **Kluzení a kontakt.** Přibyly dva typy studií: nelineární, kde materiál sleduje přímku až k mezi kluzu a poté pozvolnější sklon, s vykreslenou plastickou deformací, a kontaktní, kde se oddělené díly tlačí (bez tření) nebo drží pevně (spojené). Krok zatížení, který se neustálí, nebo díly, které se do sebe zabořují příliš hluboko, se zobrazí v panelu Problémy. Tření, velké posuvy, velké rotace, velké průhyby a únava se neřeší. Viz [Kontrola napětí a průhybu](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Vstupní soubory pro CalculiX.** {{ui:Export}} › {{ui:Vstupní soubor CalculiX (.inp)}} uloží studii pro CalculiX, samostatný program, který nainstalujete a spustíte sami; {{ui:Export}} › {{ui:Výsledky CalculiX (.frd)}} načte jeho výsledkový soubor zpět na stejnou síť. PartCraft tento program nikdy nespouští a upozorní vás, pokud se díl změnil od uložení vstupního souboru.

### Sestavy

- **Studie pohybu.** {{ui:Sestava}} › {{ui:Pohyb}} řídí hodnotu jednoho spoje během zadaného času (konstantní rychlost, zvolněně, sinusově nebo tam a zpět), v každém kroku umístí sestavu se spoji a uzavřenými smyčkami a hlásí, které díly kolidují a jak blízko se k sobě dostávají. {{ui:Přidat bod}} vykreslí polohu bodu, rychlost a zrychlení, hodnotu spoje a vůli v čase; {{ui:Uložit CSV}} a {{ui:Uložit graf}} je zapíšou ven. Po {{ui:Spustit}} přesune krokování lištou spuštění sestavu na libovolný krok. Nastavení studie se uloží do souboru sestavy. Rychlost a zrychlení se počítají z zaznamenaných poloh, takže pokud ostrý vrchol vychází nízko, použijte více kroků. Viz [Kontrola sestavy na kolize a pohyb](topic:check-assembly#a-motion-study).

### Plochy a díly podle fyziky

- **Pracovní prostor Plochy.** Zvolte {{ui:Plochy}} v poli {{ui:Pracovní prostor}} pro NURBS křivky a plochy vedle dílu: {{ui:Křivka}}, {{ui:Lofting}}, {{ui:Tažení po dráze}}, {{ui:Přizpůsobit}} a {{ui:Zebra}}, se spojitostí (G0, G1 nebo G2) měřenou na přesných plochách a hranou, která je horší, než jste požadovali, uvedenou v Problémech s opravou Přizpůsobit. {{ui:Vyhladit}} měří linie trupu na inflexe a skoky křivosti a přestaví nehladké části v rámci vaší tolerance. Plochy se ukládají do souboru dílu a nemění prvky dílu. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).
- **Pracovní prostor Inženýr.** Zvolte {{ui:Inženýr}} v přepínači pracovních prostorů, vyberte generátor a klikněte na {{ui:Nový}}: skript podle toho, co má díl dělat (přenos tepla, proudění, tlak, materiál, způsob tisku), díl pomocí učebnicových vzorců dimenzuje a sestaví, a potom vrátí použitá čísla se zdroji, kontroly výroby a soubory pro analytické nástroje. Stejné vstupy dají stejný díl na libovolném počítači. Generátor se uchovává v dílu a otevření dílu nikdy nespustí skript. Viz [Díly z fyziky: generátory](topic:engineer-generators) a [Napsat generátor](topic:write-a-generator).

### Skicování, výkresy a výroba

- **Skica z fotografie.** {{ui:Prvky}} › {{ui:Více}} › {{ui:Skica z fotografie…}} obkreslí obrázek plochého dílu na jednoduchém podkladu (obrys a otvory) nebo kresbu perem na čáry, oblouky a kružnice. Zadáte jednu délku, zkontrolujete náhled a skicu vytvoříte. Viz [Základy skicování](topic:sketch-basics#a-sketch-from-a-photo).
- **Měřítko a rozdělení pro tisk.** {{ui:Export}} › {{ui:Měřítko pro tisk (STL nebo 3MF)…}} mění měřítko po jednotlivých osách bez změny dílu, například o toleranci smrštění. {{ui:Export}} › {{ui:Rozdělit pro tisk (zip s kusy)…}} rozdělí díl, který je na vaši podložku příliš velký, na očíslované kusy spojené kolíky, klíči, vlaštovčími ocasy, kolíkovými otvory nebo kapsami pro magnety. Viz [Tisk ve 3D](topic:print-3d).
- **Rozmístěné listy do G-kódu.** {{ui:Export}} › {{ui:Rozmístěné listy do G-kódu}} načte rozmístěné DXF a vytvoří jeden program na list přes postprocesor, který zvolíte: nejdřív otvory a výřezy, potom obrysy. Nepočítá náběhy, pořadí řezání ani společné hrany. Viz [Rozmístění plochých dílů na listech](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Výkresy, které dělají víc samy.** {{ui:List}} › {{ui:Automaticky}} vybere nejmenší list formátu A, který pojme pohledy při největším standardním měřítku až do 1:1. {{ui:Okótovat otvory}} umístí střední značku na každý otvor, jednu výnosku na každou velikost a polohy od levého dolního rohu pohledu. Viz [Vytvoření výkresu](topic:drawing-pdf).

### Ve všech aplikacích

- **Jazyky.** Aplikace jsou ve 54 jazycích. Jazyky kromě angličtiny jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} volí Zalamovat (jako dříve), 2 řádky nebo 1 řádek; lišta, která se nevejde, se posouvá do stran. Pás Prvky v PartCraftu zobrazuje nejpoužívanější nástroj velký a varianty schovává za dělicí tlačítko.
- **Připojte svou AI.** Studio je centrum pro připojení vlastního asistenta ke všem osmi aplikacím, s oprávněním jen ke čtení, k navrhování nebo k úpravám u každé aplikace. Připojený asistent může navrhnout díl z jedné věty, například držák pro zatížení, ukázat svůj postup a všechny kontroly a díl sestavit; hlásí, co nezkontroloval (koncentrace napětí, únava, dotvarování plastů). Viz [Použití PartCraftu s AI asistentem](topic:use-with-ai-assistants).

## Opraveno ve verzi 0.8.1

- **Zamrznutí kurzoru při celé obrazovce.** Výběr najetím je nyní omezen na určitou frekvenci. Příčina je náš nejlepší odhad a nebyla potvrzena s osobou, která problém nahlásila.
- **Jazyk za běhu.** Studio a balené verze mohou přepínat jazyk za běhu; dříve byly jen v angličtině. Není to zatím otestováno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.

## Ve verzi zatím není

- Připojení AI není hotové: připojení jedním kliknutím uvnitř Studia, hostovaný konektor pro AI v prohlížeči, vlastní klíč API uvnitř Studia a zveřejněný balíček MCP nejsou zaslíbeny. Studio nemá vlastní AI.
- Studio není podepsáno kódem: Windows může varovat a macOS vyžaduje pravé tlačítko a poté Otevřít. Viz [Řešení potíží](topic:troubleshooting).
- Sestavy tolerancí jsou stále jednosměrné: viz [Sestavy tolerancí](topic:tolerance-stackup).
- Ostatní je uvedeno v [Co ještě není hotovo](topic:not-built-yet).

Starší změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
