---
title: Klávesy a myš
summary: Každá klávesová zkratka a akce myši v PartCraftu, seskupené podle místa, kde fungují: všude, kopírování a vkládání, na dílu, ve 3D pohledu, ve skice, v historii a v sestavě.
keywords: klávesnice, klávesy, zkratky, klávesové zkratky, myš, otáčení, otočit, posun, zoom, kolečko, pravé tlačítko, zpět, znovu, uložit, otevřít, escape, smazat, alt šipka, kopírovat, vložit, vyjmout, duplikovat, vybrat vše, prostřední tlačítko
from: 3a59c3a3
---

Klávesy nic neudělají, když píšete do pole v panelu, kromě {{key:Mod+S}} a {{key:Mod+O}}, které fungují vždy. Klávesy písmen fungují bez modifikátoru.

Obecné poznámky ke klávesám v prohlížeči a na klávesnicích bez funkčních kláves: [Klávesy, myši a touchpady](common:keys).

## Všude

| Klávesa | Akce |
|---|---|
| {{key:Mod+S}} | Uloží díl (v sestavě: sestavu). Nejprve zavře otevřenou skicu |
| {{key:Mod+O}} | Otevře soubor dílu nebo sestavy (když jsou neuložené změny, nejprve se zeptá) |
| {{key:Mod+Z}} | Zpět |
| {{key:Mod+Y}} nebo {{key:Mod+Shift+Z}} | Znovu |
| {{key:F1}} | Otevře nebo zavře tuto nápovědu (také {{ui:Help}} v panelu aplikace). Zavře ji i {{key:Esc}}. Na mnoha noteboocích a klávesnicích Mac podržte Fn |
| {{key:Ctrl+Shift+F}} | Režim obrazovky: normální, celá obrazovka, celá obrazovka se skrytými lištami. Na Macu také Control, ne ⌘ |
| {{key:Esc}} | Ukončí celou obrazovku (když je zapnutá) |
| {{key:Mod+,}} | Nastavení, včetně karty PartCraft (viz [Nastavení PartCraftu](topic:settings)) |

V číselném poli panelu je {{key:Mod+Z}} vlastní zpět prohlížeče pro text. V číselném poli nad kótou skici zpět funguje v PartCraftu.

## Kopírování, vkládání a duplikování

Působí na to, s čím právě pracujete: na vybranou geometrii v otevřené skice, na vybraný prvek v historii, nebo na vybraný díl v sestavě. Podrobnosti v [Kopírování, vkládání a duplikování](topic:copy-paste).

| Klávesa | Akce |
|---|---|
| {{key:Mod+C}} | Zkopíruje výběr |
| {{key:Mod+X}} | Vyjmout: zkopíruje a pak smaže |
| {{key:Mod+V}} | Vloží. Ve skice kopie následuje ukazatel: klikněte, kam ji umístit |
| {{key:Mod+Shift+V}} | Vložit na stejné místo: stejné souřadnice (v sestavě na stejné místo) |
| {{key:Mod+D}} | Duplikovat: kopíruje a vloží v jednom kroku, schránka zůstane beze změny |
| {{key:Mod+A}} | Vybrat vše (ve skice) |
| {{key:Esc}} | Zrušit výběr (a zrušit vkládání, které následuje ukazatel) |

V číselném poli tyto klávesy kopírují a vkládají text obvyklým způsobem. Vybraný text v panelu kopíruje prohlížeč.

## Na dílu (bez otevřené skici)

| Klávesa | Akce |
|---|---|
| {{key:S}} | Skica na vybrané rovině nebo ploché ploše; když nic nevyberete, zvolte místo kliknutím |
| {{key:F}} | Přizpůsobí díl pohledu |
| {{key:M}} | Měřit, ve všech pracovních prostorech a v sestavě; {{key:Esc}} zruší výběr, dalším {{key:Esc}} se měření zavře (viz [Měření vzdáleností, úhlů a hmotnosti](topic:measure)) |
| {{key:X}} | Pohled do řezu zapnout nebo vypnout, ve všech pracovních prostorech a v sestavě; {{key:Esc}} ho zavře (viz [Pohled do řezu](topic:section-view)) |
| {{key:Delete}} | Smaže vybraný prvek (zeptá se, pokud ho používají jiné) |
| {{key:0}} … {{key:9}}, {{key:.}} | S vybraným prvkem zadejte jeho hlavní číslo (hloubku vytažení, průměr díry, počet opakování, poloměr zaoblení …) a potvrďte {{key:Enter}}. {{key:Esc}} ponechá původní hodnotu |
| {{key:Backspace}} | Smaže vybraný prvek, je-li vybrán |
| {{key:Esc}} | Přestane vybírat rovinu skici, nebo zruší výběr (včetně hran nebo ploch vybraných s {{key:Shift}}) |

## Ve 3D pohledu

Nejprve klikněte do pohledu, aby měl klávesnici v zaměření.

| Klávesa | Akce |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Otočí pohled o 15 stupňů |
| {{key:Shift+Left}} a ostatní šipky | Posun |
| {{key:Plus}} nebo {{key:=}} | Přiblížit |
| {{key:Minus}} | Oddálit |

| Myš | Akce |
|---|---|
| Tažení levým tlačítkem | Otočí (orbit) pohled |
| Tažení pravým nebo prostředním tlačítkem | Posun |
| Podržení {{key:Shift}}, {{key:Ctrl}} nebo ⌘ při tažení levým tlačítkem | Posun |
| Otočení kolečka | Zoom k ukazateli (směrem od vás přibližuje) |
| Tah dvěma prsty na touchpadu | Otočí pohled; s {{key:Shift}} posune. Roztažení prsty zoomuje. Nastavuje se volbou **Posouvání** v [nastavení PartCraftu](topic:settings) |

Při volbě **Otáčení pohledu: prostřední tlačítko** v [nastavení PartCraftu](topic:settings) otáčí prostřední tlačítko pohled, {{key:Shift}} s prostředním nebo pravým tlačítkem posouvá a levé tlačítko jen vybírá.
| Klik | Vybere plochu (zvýrazní se celá), hranu nebo rovinu |
| {{key:Shift}}+klik na hranu nebo plochu | Sbírá více hran nebo ploch |
| Klik do prázdného prostoru | Zruší výběr |

## Při výběru hran nebo ploch pro zaoblení, sražení hrany nebo skořepinu


| Klávesa nebo myš | Akce |
|---|---|
| Klik na hranu nebo plochu | Přidá ji, nebo ji odebere, pokud už je ve výběru |
| {{key:Esc}} nebo {{key:Enter}} | Ukončí výběr (stejné jako {{ui:Done}}) |
| {{key:F}} | Přizpůsobit |
| Šipky, když je pohled v zaměření | Otáčení; s {{key:Shift}} posun |

## Na listu výkresu

| Klávesa | Akce |
|---|---|
| {{key:F}} | Přizpůsobí list |
| {{key:Plus}} / {{key:Minus}} | Zoom (když je list v zaměření) |
| {{key:Shift+Left}} a ostatní šipky | Posun (když je list v zaměření) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Posune vybraný symbol GD&T o 1 mm |
| {{key:Delete}} nebo {{key:Backspace}} | Smaže vybraný symbol |
| {{key:Esc}} | Přestane umisťovat symbol; jinak zruší výběr; jinak zpět na model |

| Myš | Akce |
|---|---|
| Klik na pohled, když je zvoleno Základna, Rámeček, Povrch nebo Detail | Umístí jej tam (přichytí se k nejbližší čáře) |
| Klik na symbol | Vybere jej |
| Tažení symbolu | Přesune jej (výnoska zůstane u svého bodu) |
| Otočení kolečka | Zoom k ukazateli |
| Tažení pravým nebo prostředním tlačítkem | Posun |

## Ve skice

| Klávesa | Akce |
|---|---|
| {{key:L}} | Úsečka |
| {{key:R}} | Obdélník |
| {{key:C}} | Kružnice |
| {{key:A}} | Oblouk (střed, začátek, konec) |
| {{key:P}} | Bod |
| {{key:N}} | Osová čára |
| {{key:F}} | Zaoblí roh |
| {{key:D}} | Kóta |
| {{key:B}} | Spline (body proložení) |
| {{key:T}} | Oříznout |
| {{key:E}} | Prodloužit |
| {{key:O}} | Odsazení ({{key:B}} při odsazení: oba směry) |
| {{key:M}} | Zrcadlit |
| {{key:S}} | Vybrat |
| {{key:Q}} | Přepne vybrané křivky na konstrukční a zpět |
| {{key:Enter}} | Ukončí řetěz úseček nebo spline |
| {{key:Delete}} nebo {{key:Backspace}} | Smaže výběr |
| {{key:Mod+A}} | Vybere vše ve skice |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopíruje, vyjme, vloží geometrii (vložení následuje ukazatel) |
| {{key:Mod+Shift+V}} | Vloží na stejné souřadnice |
| {{key:Mod+D}} | Duplikuje výběr a umístí jej klikem |
| {{key:Esc}} | Krok zpět: zruší číselné pole nebo vložení, ukončí řetěz úseček, vrátí se na Vybrat, zruší výběr a pak zavře skicu |

| Myš | Akce |
|---|---|
| Klik | Umístí body nástrojem kreslení; vybírá nástrojem Vybrat |
| {{key:Shift}}+klik | Přidá do výběru nebo z něj odebere ({{key:Ctrl}}+klik ve Windows a Linuxu, ⌘+klik na Macu, stejně) |
| Tažení v prázdném prostoru (Vybrat) | Okno: vybere vše, co je celé uvnitř |
| Tažení bodu, čáry nebo hrany kružnice (Vybrat) | Přesune ji; vazby zůstanou zachovány |
| Tažení čísla kóty (Vybrat) | Přesune popisek |
| Dvojklik na kótu | Změní její hodnotu |
| Dvojklik nebo pravý klik při kreslení úseček | Ukončí řetěz |
| Tažení pravým nebo prostředním tlačítkem | Posun |
| Otočení kolečka | Zoom k ukazateli |

### V číselném poli

| Klávesa | Akce |
|---|---|
| {{key:Enter}} | Použije hodnotu |
| {{key:Esc}} | Zavře bez změny |

Kliknutí mimo pole hodnotu také použije.

## V seznamu historie

| Klávesa | Akce |
|---|---|
| {{key:Tab}} | Dostane se na seznam |
| {{key:Up}} / {{key:Down}} | Přesun mezi řádky |
| {{key:Enter}} nebo {{key:Space}} | Vybere řádek |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Přesune vybraný prvek nahoru nebo dolů, kde to historie dovoluje |
| {{key:F2}} | Změní hlavní číslo prvku v jeho řádku; {{key:Enter}} ho nastaví, {{key:Esc}} ponechá původní |

| Myš | Akce |
|---|---|
| Klik | Vybere rovinu nebo prvek |
| Dvojklik na skicu | Otevře ji |
| Dvojklik na číslo prvku | Změní je v řádku |

## V sestavě

| Klávesa | Akce |
|---|---|
| {{key:J}} | Zahájí spoj: pak klikněte na ploché plochy na každém ze dvou dílů |
| {{key:F}} | Přizpůsobit |
| {{key:Esc}} | Zruší zahájený spoj, nebo zruší výběr |
| {{key:Delete}} | Odebere vybraný díl nebo spoj |
| {{key:Backspace}} | Odebere vybraný díl nebo spoj |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Zpět a znovu v seznamu sestavy |
| {{key:Mod+D}} | Duplikuje vybraný díl (stejný díl vedle ostatních) |
| {{key:Mod+C}}, pak {{key:Mod+V}} nebo {{key:Mod+Shift+V}} | Kopíruje díl, vloží jej vedle ostatních nebo na stejné místo |

Myš v pohledu: jako ve 3D pohledu výše. Klikem vyberete díl. Dvojklikem na díl v seznamu jej upravíte.

## V pracovním prostoru Script

| Klávesa | Akce |
|---|---|
| {{key:F5}} | Spustí skript (v editoru, v panelu nebo v pohledu) |
| {{key:Mod+Enter}} | Spustí vybrané řádky, nebo řádek s kurzorem |
| {{key:Tab}} / {{key:Shift+Tab}} | Odsadí / zruší odsazení vybraných řádků. Chcete-li opustit editor klávesnicí, stiskněte {{key:Esc}}, pak {{key:Tab}} |
| {{key:Mod+/}} | Zakomentuje vybrané řádky, nebo je odkomentuje |
| {{key:Mod+F}} / {{key:Mod+H}} | Hledat / hledat a nahradit ve skriptu; {{key:Enter}} nebo {{key:F3}} další shoda, {{key:Shift+Enter}} nebo {{key:Shift+F3}} předchozí, {{key:Esc}} zavře |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Sbalí / rozbalí blok, na kterém je kurzor (funkce, if, for, while … end) |
| {{key:Mod+Space}} | Nabídne doplnění názvu, který píšete (otevře se i po dvou písmenech); {{key:Up}} / {{key:Down}} vybírají, {{key:Enter}} nebo {{key:Tab}} převezme, {{key:Esc}} zavře |
| {{key:Enter}} v řádku pod konzolí | Spustí jeden příkaz; {{key:Up}} a {{key:Down}} vrátí dřívější |
| {{key:F}} | Přizpůsobí pohled tomu, co skripty zobrazují |

Viz [Psaní a spouštění skriptů](topic:craftscript).

## Zkratky, které může prohlížeč převzít

- {{key:Mod+Y}} v Safari může otevřít historii: pro znovu použijte {{key:Mod+Shift+Z}}.
- {{key:Mod+D}} je v prohlížeči klávesa záložek: PartCraft ji převezme, když má aplikace zaměření, a když píšete do pole, nechá ji být.
- {{key:F11}} a {{key:Mod+Plus}} / {{key:Mod+Minus}} jsou celá obrazovka a zoom stránky prohlížeče, ne PartCraftu. Celou obrazovku ovládejte pomocí {{key:Ctrl+Shift+F}} a model kolečkem.
- Funkční klávesy na mnoha noteboocích a Macech vyžadují Fn: pro nápovědu stiskněte Fn+{{key:F1}}, nebo použijte tlačítko {{ui:Help}}.

Gesta dotykem a touchpadem: [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).

## Kde najdete Přesun

Přesun najdete v nabídce {{ui:More}} skupiny {{ui:Prvky}} jako {{ui:Přesunout těleso}}, v poli {{ui:Přesun}}, kam zadáte ΔX, ΔY a ΔZ, a jako šipky {{ui:Tažením přesunout}} na dílu.
