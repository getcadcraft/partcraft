---
title: Riadenie súčiastky parametrami
summary: Pomenujte rozmery, na ktorých záleží (šírka, hrúbka, veľkosť skrutky), prepojte ľubovoľné číslo prvku alebo kótu náčrtu s nimi pomocou =, a zmeňte celú súčiastku z jednej tabuľky.
keywords: parametre, kde sa používa, používa, globálne premenné, premenné, rovnice, zámer návrhu, riadiace kóty, prepojenie, výraz, vzorec, pomenovanie kóty, prepojené hodnoty
from: 58c646ea
---

Parameter je pomenované číslo, napríklad `width = 120` alebo `margin = bolt * 1.5`. Prepojte hĺbku, priemer diery, počet vzoru alebo kótu náčrtu s ním a zmena parametra zmení všetky naraz v jednom kroku. Takto si zámer návrhu uchováte v súčiastke, a nie len v hlave.

## Pridanie parametrov

1. V pravom paneli kliknite na kartu {{ui:Parametre}}.
2. V časti **Premenné** napíšte názov do poľa „name“, napríklad `width`.
3. Do ďalšieho poľa napíšte jeho hodnotu, napríklad `120`, a stlačte {{key:Enter}} (alebo kliknite na {{ui:Pridať}}).

Hodnota môže byť číslo alebo výraz z iných parametrov: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Stĺpec **Hodnota** ukáže, koľko to vyjde. Názov začína písmenom alebo `_` a obsahuje len písmená, číslice a `_`; názvy funkcií a jednotiek (`sin`, `mm`, `pi`) sa odmietnu, rovnako ako slučka, napríklad `a = b` pri `b = a`.

## Prepojenie čísla s parametrom

1. Kliknite na prvok v histórii, napríklad „Extrude1“. Jeho nastavenia sa zobrazia na karte {{ui:Vlastnosti}}.
2. Do políčka s číslom, napríklad **Hĺbka (mm)**, napíšte `=` a výraz: `=thick` alebo `=width / 4`.
3. Stlačte {{key:Enter}}.

Políčko teraz ukazuje výsledok a vedľa jeho popisu sa objaví tlačidlo **ƒ**. Ukážte na neho a uvidíte rovnicu. Kóty náčrtu fungujú rovnako, a to tak v zozname **Kóty náčrtu** prvku, ako aj v políčku kóty otvoreného náčrtu (dvakrát kliknite na kótu, napíšte `=width` a stlačte {{key:Enter}}).

Čísla, ktoré možno prepojiť: hĺbka vytiahnutia, uhol rotácie, priemer diery, hĺbka a rozmery zápustky, počet vzoru, rozostup a uhol, polomer zaoblenia, vzdialenosť skosenia, hrúbka steny škrupiny, každá kóta náčrtu a veľkosti novších prvkov (druhá hĺbka, zúženie, zápustka, vzdialenosť referenčnej roviny, uhol úkosu a ďalšie).

## Zmena parametra

Na karte {{ui:Parametre}} napíšte novú hodnotu alebo výraz do stĺpca **Výraz** a stlačte {{key:Enter}}. Všetko, čo je naň prepojené, sa zmení a súčiastka sa prebuduje ako jeden krok: {{key:Mod+Z}} to vráti späť.

Ak chcete číslo zmeniť z opačného konca, pozri [Rovnice oboma smermi](topic:equations-two-way).

## Kde sa parameter používa

Pod každým parametrom na karte {{ui:Parametre}} je riadok, ktorý hovorí, čo ho používa:

- čísla, ktoré riadi, napríklad **Extrude1 hĺbka** alebo **Sketch1 D2 (vzdialenosť)**. Kliknutím na jedno vyberiete jeho prvok a zobrazíte jeho vlastnosti;
- čísla, ktoré riadi **cez** iné parametre, napríklad **Hole1 priemer (cez h, d)**, keď `d = h + 2` a `h = w / 2`;
- **parametre**, ktorých výrazy ho používajú, **konfigurácie**, ktoré ho nastavujú, a **skripty**, ktoré ho čítajú (pozri [Písanie a spúšťanie skriptov](topic:craftscript)).

„Zatiaľ nepoužité.“ znamená, že ho nič nepoužíva: môžete ho zmazať bez opýtania.

## Odpojenie, premenovanie, zmazanie

- **Odpojenie čísla:** kliknite na jeho tlačidlo **ƒ** alebo na {{ui:Odpojiť}} v zozname **Rovnice**. Číslo si zachová aktuálnu hodnotu a žiadny parameter ho už nemení.
- **Premenovanie parametra:** napíšte nový názov do jeho poľa **Názov**. Každý výraz, ktorý ho používa, sa prepíše.
- **Zmazanie parametra:** kliknite na × v jeho riadku. Ak ho niečo používa, PartCraft sa opýta, či má najprv zapísať jeho aktuálnu hodnotu do týchto výrazov.
- **Zmazanie prvku** odstráni rovnice jeho čísel; stavový riadok povie, ktoré.

:::note
Parametre sa ukladajú do súboru `.partcraft.json` (ako verzia súboru 3). Súčiastka bez parametrov sa uloží presne ako predtým.
:::

## Výrazy

| Zapíšete | Znamená |
|---|---|
| `120`, `12.5`, `1e3` | číslo (milimetre, alebo stupne pri uhle) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | dĺžka v iných jednotkách, prevedená na milimetre |
| `30deg`, `0.5rad` | uhol, prevedený na stupne |
| `+ - * / %` a `^` | aritmetika; `^` je mocnina, `-2^2` je −4 |
| `sin cos tan asin acos atan atan2` | goniometria v stupňoch |
| `sqrt pow exp ln log abs sign` | ďalšie funkcie |
| `ceil floor int round(x, digits) min max` | zaokrúhľovanie a limity |
| `if(test, a, b)` s `< <= > >= == !=` | voľba: `if(bolt >= 16, 6, 8)` |
| `pi` | 3,14159… |

Názvy rozlišujú veľkosť písmen: `Width` a `width` sú dva rôzne parametre.

Pozri aj [Konfigurácie a tabuľky návrhu](topic:design-tables) a [Skripty a príkazový riadok](topic:scripts-and-cli).
