---
title: Řízení dílu parametry
summary: Pojmenujte rozměry, na kterých záleží (šířka, tloušťka, velikost šroubu), propojte libovolné číslo prvku nebo kótu náčrtu s nimi znakem =, a změňte celý díl z jedné tabulky.
keywords: parametry, kde se používá, používá, globální proměnné, proměnné, rovnice, záměr návrhu, řídicí kóty, propojení, výraz, vzorec, pojmenovat kótu, propojené hodnoty
from: 58c646ea
---

Parametr je pojmenované číslo, například `width = 120` nebo `margin = bolt * 1.5`. Propojte hloubku, průměr díry, počet vzoru nebo kótu náčrtu s ním a změna parametru změní všechny najednou. Tak držíte záměr návrhu v díle, a ne v hlavě.

## Přidání parametrů

1. V pravém panelu klikněte na kartu {{ui:Parametry}}.
2. Pod **Proměnné** napište do pole „název“ jméno, například `width`.
3. Napište jeho hodnotu do dalšího pole, například `120`, a stiskněte {{key:Enter}} (nebo klikněte na {{ui:Přidat}}).

Hodnota může být číslo, nebo výraz z jiných parametrů: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Sloupec **Hodnota** ukazuje, na co se to vypočítá. Název začíná písmenem nebo `_` a obsahuje jen písmena, číslice a `_`; názvy funkcí a jednotek (`sin`, `mm`, `pi`) se odmítnou, stejně jako smyčka, například `a = b` s `b = a`.

## Propojení čísla s parametrem

1. Klikněte na prvek v historii, například „Extrude1“. Jeho nastavení se ukáže na kartě {{ui:Vlastnosti}}.
2. Do číselného pole, například **Hloubka (mm)**, napište `=` a výraz: `=thick` nebo `=width / 4`.
3. Stiskněte {{key:Enter}}.

Pole nyní ukazuje výsledek a vedle jeho popisku se objeví tlačítko **ƒ**. Najetím ukážete rovnici. Kóty náčrtu fungují stejně, jak v seznamu **Kóty náčrtu** prvku, tak v kótovém poli otevřeného náčrtu (dvojklik na kótu, napište `=width` a stiskněte {{key:Enter}}).

Čísla, která lze propojit: hloubka vytažení, úhel rotace, průměr díry, hloubka a rozměry zahloubení, počet vzoru, rozestup a úhel, poloměr zaoblení, vzdálenost sražení hrany, tloušťka stěny skořepiny, každá kóta náčrtu, a rozměry novějších prvků (druhá hloubka, zkosení, záhlubení, vzdálenost referenční roviny, úhel úkosu a další).

## Změna parametru

Na kartě {{ui:Parametry}} napište novou hodnotu nebo výraz do sloupce **Výraz** a stiskněte {{key:Enter}}. Vše, co je s ním propojeno, se změní a díl se přestaví jako jeden krok: {{key:Mod+Z}} to vrátí zpět.

Chcete-li změnit číslo z opačného konce, viz [Rovnice oběma směry](topic:equations-two-way).

## Kde se parametr používá

Pod každým parametrem na kartě {{ui:Parametry}} řádek říká, co ho používá:

- čísla, která řídí, například **Extrude1 depth** nebo **Sketch1 D2 (distance)**. Klikněte na jedno, abyste vybrali jeho prvek a ukázali jeho vlastnosti;
- čísla, která řídí **přes** jiné parametry, například **Hole1 diameter (through h, d)**, když `d = h + 2` a `h = w / 2`;
- **parametry**, jejichž výrazy jej používají, **konfigurace**, které jej nastavují, a **skripty**, které jej čtou (viz [Psaní a spouštění skriptů](topic:craftscript)).

„Zatím nepoužito.“ znamená, že jej nic nepoužívá: můžete jej smazat, aniž byste se ptali.

## Odpojení, přejmenování, smazání

- **Odpojit číslo:** klikněte na jeho tlačítko **ƒ**, nebo na {{ui:Odpojit}} v seznamu **Rovnice**. Zůstane na aktuální hodnotě a žádný parametr jej už nemění.
- **Přejmenovat parametr:** napište nový název do jeho pole **Název**. Každý výraz, který jej používá, se přepíše.
- **Smazat parametr:** klikněte na × u jeho řádku. Pokud jej něco používá, PartCraft se zeptá, zda nejdřív zapsat jeho aktuální hodnotu do těchto výrazů.
- **Smazání prvku** odstraní rovnice jeho čísel; stavový řádek říká, které.

:::note
Parametry se ukládají do souboru `.partcraft.json` (jako verze souboru 3). Díl bez parametrů se uloží přesně jako dřív.
:::

## Výrazy

| Zápis | Význam |
|---|---|
| `120`, `12.5`, `1e3` | číslo (milimetry, nebo stupně u úhlu) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | délka v jiných jednotkách, převedená na milimetry |
| `30deg`, `0.5rad` | úhel, převedený na stupně |
| `+ - * / %` a `^` | aritmetika; `^` je mocnina, `-2^2` je −4 |
| `sin cos tan asin acos atan atan2` | goniometrie ve stupních |
| `sqrt pow exp ln log abs sign` | další funkce |
| `ceil floor int round(x, digits) min max` | zaokrouhlení a meze |
| `if(test, a, b)` s `< <= > >= == !=` | volba: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Názvy rozlišují velká a malá písmena: `Width` a `width` jsou dva různé parametry.

Viz také [Konfigurace a návrhové tabulky](topic:design-tables) a [Skripty a příkazový řádek](topic:scripts-and-cli).
