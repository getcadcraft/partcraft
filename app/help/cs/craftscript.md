---
title: Napište a spusťte skripty (pracovní prostor Skript)
summary: Pracovní prostor Skript krok za krokem: napište skript CraftScript nebo Lua, spusťte jej klávesou F5, čtěte konzoli, uchovávejte výsledky v proměnných pro další skript, zobrazujte sítě, pole a grafy, zastavte běh a ukládejte skripty s dílem.
keywords: skript, skriptování, skriptování při modelování, oddělit, druhá obrazovka, druhý monitor, param, params, parametry ve skriptech, CraftScript, Lua, kód, program, editor, konzole, REPL, příkazový řádek, spustit, F5, spustit výběr, zastavit, proměnné, pracovní prostor, graf, pole, síť, legenda, vedlejší zobrazení, analýza, automatizace, matice, numerický
from: d0003e89
---

**Náhled.** Skriptování je nové v PartCraft 0.3 a je v náhledu: jazyk, knihovna i způsob ukládání skriptů se ještě mohou změnit a skripty napsané teď možná budou později potřebovat drobné úpravy. Řekněte nám, co přestane fungovat.

Pracovní prostor Skript spouští vaše vlastní výpočty vedle dílu: malé součty, celé analýzy, nebo skripty z [knihovny analýz](topic:craftscript-library). Skripty se píší v **CraftScriptu** (maticový jazyk velmi podobný MATLABu, viz [Jazyk CraftScript](topic:craftscript-language)), nebo v **Lua** (viz [Skripty v Lua](topic:craftscript-lua)), nebo v **Pythonu** (viz [Skripty v Pythonu](topic:craftscript-python)).

Vyberte **Skript** v poli **Pracovní prostor** vlevo na panelu nástrojů. Díl se nemění. Pravý panel se stane panelem skriptů (širší než obvykle; chytněte jeho hranu a změňte šířku, nebo jej přesuňte na druhou obrazovku pomocí jeho nabídky {{ui:⋯}}, viz [Uspořádání panelů](common:arrange-panels)).

## Skript při modelování

Nemusíte opouštět pracovní prostor Inženýr, abyste napsali skript. V Návrhu drží pravý panel karta {{ui:Skript}} stejný editor, konzoli, proměnné a knihovnu, se stejnými skripty. Strom prvků a zobrazení dál fungují: kliknutím vyberte prvek, dvojklikem upravte skicu, otočte zobrazení, pak se vraťte na kartu {{ui:Skript}} a stiskněte {{key:F5}}.

Co skript **zobrazí** (sítě, pole, grafy, tabulky), se v Návrhu nekreslí přes váš model: konzole to řekne a pracovní prostor Skript to všechno ukáže, až přepnete.

{{ui:Oddělit}} vedle {{ui:Spustit}} přesune celý panel do vlastního okna, třeba na druhou obrazovku, aby editor a celé zobrazení byly vedle sebe. {{ui:Vrátit zpět}} jej zase zadokuje. Viz [Uspořádání panelů](common:arrange-panels).

## Spusťte první skript

1. Napište do editoru například:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Sinusoida')
   disp(max(y))
   ```

2. Stiskněte {{key:F5}} (nebo {{ui:Spustit}}). Konzole pod editorem ukáže, co skript vypsal, a „Hotovo za … s“. Graf se objeví ve **vedlejších zobrazeních** podél spodku 3D zobrazení.
3. Řádek bez středníku vypíše svou hodnotu, jako v MATLABu: `a = 3` vypíše `a = 3`; `a = 3;` nevypíše nic.
4. Chcete-li spustit jen část skriptu, vyberte řádky a stiskněte {{key:Mod+Enter}} ({{ui:Výběr}}). Bez výběru se spustí řádek, na kterém je kurzor.
5. Řádek na spodku konzole (za `>>`) spustí jeden příkaz, když stisknete {{key:Enter}}. {{key:Up}} a {{key:Down}} vrátí dřívější řádky.

## Hledání, sbalení a doplňování

- **Hledání a nahrazení.** Stiskněte {{key:Mod+F}} (nebo {{key:Mod+H}}, pro nahrazení také). Nad kódem se otevře lišta: napište, co hledat; shody se zvýrazní a počet říká, kde jste. Tlačítka vedle pole rozlišují velká a malá písmena (**Aa**), hledají jen celá slova (**W**) a používají regulární výraz (**.\***; v náhradě `$1` vloží to, co odpovídalo první skupině). {{ui:Nahradit}} nahradí aktuální shodu, {{ui:Vše}} nahradí všechny shody jako jeden krok {{key:Mod+Z}}.
- **Sbalení.** Klikněte na ▾ vedle čísla řádku, nebo stiskněte {{key:Mod+Shift+[}} s kurzorem na řádku `function`, `if`, `for`, `while`, `switch` nebo `try` (Lua: `function`, `do`, `if`, `repeat`), aby se jeho vnitřní řádky schovaly; řádek řekne, kolik jich je. ▸ nebo {{key:Mod+Shift+]}} jej opět rozbalí. Sbalení jen skrývá řádky: Spustit, Uložit, kopírování i čísla řádků se pořád počítají všechny, a psaní na sbaleném řádku jej nejprve rozbalí.
- **Doplňování.** Napište dvě písmena jména, nebo stiskněte {{key:Mod+Space}}: seznam ukáže vaše proměnné, funkce jazyka (s jejich argumenty), klíčová slova a jména už použitá ve skriptu. Vyberte šipkami a potvrďte {{key:Enter}} nebo {{key:Tab}}.

## Když se něco pokazí

- Chyba pojmenuje problém a jeho řádek: řádek je v editoru označen červeně a **Řádek n** v konzoli vás tam přenese.
- Smyčka, která nikdy nekončí: stiskněte {{ui:Zastavit}} (na panelu nástrojů nebo v panelu). Skript se hned zastaví; proměnné si ponechají hodnoty, které měly před tím během.
- Každý běh má také limit kroků (výchozích 2 miliardy kroků; změníte jej v **Možnosti spuštění** v panelu). Běh, který jej překročí, se zastaví se zprávou.

## Proměnné putují od skriptu ke skriptu

Každá proměnná nejvyšší úrovně, kterou skript vytvoří, se objeví na kartě **Proměnné** (název, typ, velikost, nejmenší a největší hodnota) a zůstane tam pro další skript, v kterémkoli jazyce. Tak jeden skript vytvoří síť, další ji vyřeší a třetí vykreslí graf.

- Kliknutím na proměnnou ji zobrazíte: sítě, pole a modely ve 3D zobrazení, pole jako tabulku (plus čárový graf u vektoru nebo barevnou mapu u matice) ve vedlejších zobrazeních.
- {{ui:Uložit jako JSON}}, {{ui:Uložit jako CSV}} (tabulka čísel) a {{ui:Uložit jako HDF5}} ji stáhnou; {{ui:Smazat}} ji odstraní; {{ui:Vymazat vše}} vyprázdní pracovní prostor.
- Zaškrtněte **Uložit proměnné s dílem**, abyste je uchovali v souboru dílu (až 32 MB; větší zůstanou jen pro tuto návštěvu). Když otevřete takový díl, panel nabídne jejich načtení.

## Sítě, pole a grafy

- `show(m)` vykreslí síť; `show(f)` obarví pole na své síti s legendou. Seznam **Zobrazeno** vlevo nahoře v zobrazení skryje ({{ui:oko}}) nebo odstraní každou položku a skryje nebo ukáže samotný díl. Pod legendou napište rozsah (**Od**, **do**) nebo stiskněte {{ui:Auto}}; u vektoru nebo napěťového pole nabízí i to, která složka se má ukázat.
- `show(f, 'deform', u, 'scale', 50)` vykreslí síť posunutou posunovým polem `u`, zvětšenou 50×  (bez `scale` zhruba o 8 % velikosti modelu).
- Klikněte na zobrazenou síť: nejbližší uzel, prvek a hodnoty pole tam se objeví ve vedlejších zobrazeních (**Vybráno**).
- `plot`, `imagesc` a `table` dají do vedlejších zobrazení čárový graf, barevnou mapu dvourozměrného pole nebo tabulku. Graf se stejným `'id'` (nebo názvem) jako dřívější jej nahradí, takže smyčka může aktualizovat jeden graf konvergence; `'append', true` k němu přidá křivku. {{ui:Vymazat}} vyprázdní vedlejší zobrazení; šipka je sbalí.
- Při dvou nebo více grafech {{ui:Vedle sebe}} ukáže všechny najednou (nejnovějších šest); kliknutí na kartu tabulky nebo obrázku ukáže jen ji.
- Pod každým grafem jsou {{ui:PNG}}, {{ui:SVG}} a {{ui:CSV}}. PNG a SVG jej vytisknou na bílé v barvách papíru, bez ohledu na motiv (PNG 1600 × 1000 pixelů; SVG se škáluje bez rozmazání); CSV obsahuje jeho čísla se všemi číslicemi: jeden sloupec x a sloupec pro každou křivku, když křivky sdílejí x, jinak jeden řádek na bod se jménem křivky.
- {{key:F}} nebo {{ui:Přizpůsobit}} přizpůsobí zobrazení tomu, co je vidět.

## Soubory

- {{ui:Otevřít}} ve skupině Skript (nebo přetažení souborů na zobrazení či panel): soubory `.craft`, `.lua` a `.py` se otevřou jako nové skripty (nespustí se); datové soubory (STL, OBJ, CSV, JSON, NPY, HDF5) se načtou do proměnných pod svým názvem souboru.
- {{ui:Uložit}} ve skupině Skript stáhne aktuální skript jako soubor.
- {{ui:Nový}} ve skupině Skript (nebo {{ui:+}} vedle karet) začne další skript. Dvojklikem na kartu ji přejmenujete; jejím {{ui:×}} ji odstraníte (lze to vrátit zpět).

## Čtení parametrů dílu

Skript čte parametry dílu (viz [Ovládání dílu pomocí parametrů](topic:parameters)) podle jména:

```
w = param('width');     % hodnota jednoho parametru v mm (nebo ve stupních, nebo prosté číslo)
p = params();           % všechny jako struktura: p.width, p.height
```

V Lua a Pythonu jsou to `cs.param('width')` a `cs.params()`. Skripty jen čtou parametry: měňte je na kartě {{ui:Parametry}}. Pod kartou skriptu řádek vypisuje parametry, které čte pomocí `param('…')`, a označí ty, které díl nemá; karta {{ui:Parametry}} uvede skript pod každým z nich. Jméno sestavené až za běhu, jako `param(name)`, se nevypisuje.

## Skripty se ukládají v dílu

Každý skript na kartách se uchovává v dílu, takže {{ui:Uložit}} ve skupině Soubor je uloží spolu s ním a změny v nich lze vrátit zpět. Otevření dílu **nikdy nespustí jeho skripty**: konzole řekne, kolik jich díl nese, a běží, až stisknete Spustit. Díl od někoho jiného může obsahovat libovolný skript: přečtěte si jej, než jej spustíte. Skripty běží na tomto počítači na pozadí bez přístupu k síti a nemohou se dotknout stránky.

## Související

- [Jazyk CraftScript](topic:craftscript-language)
- [Skripty v Lua](topic:craftscript-lua)
- [Skripty v Pythonu](topic:craftscript-python)
- [Knihovna analýz](topic:craftscript-library)
- [Napište vlastní analýzu](topic:craftscript-own-analysis)
