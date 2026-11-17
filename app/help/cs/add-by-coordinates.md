---
title: Zadání geometrie skici souřadnicemi
summary: Použijte Přidat podle souřadnic na panelu skici k umístění úseček, osových čar, obdélníků, kružnic a bodů přesně na dané pozice, pouze z klávesnice.
keywords: souřadnice, zadávání textem, zadávání z klávesnice, číselné zadání, přesná pozice, x y, absolutní souřadnice, přístupnost, bez myši
from: 5e6c1656
---

Když znáte čísla, je rychlejší je napsat, než klikat a kótovat. **Přidat podle souřadnic** je na pravém panelu, kdykoli je skica otevřená. Umožňuje také vytvářet skicu bez ukazovátka.

Souřadnice jsou v milimetrech, v os samotné skici: x doprava a y nahoru, když se na skicu díváte, s bodem (0, 0) v počátku (červený kruh s křížkem).

## Přidání tvaru

1. Otevřete skicu (viz [Nakreslete první skicu](topic:sketch-basics)).
2. Na pravém panelu přejděte na **Přidat podle souřadnic**.
3. V **Přidat** vyberte tvar: Úsečka, Osová čára, Obdélník, Kružnice nebo Bod.
4. Vyplňte pole:

| Tvar | Pole |
|---|---|
| Úsečka | **Od x, y** a **Do x, y** |
| Osová čára | **Od x, y** a **Do x, y** |
| Obdélník | **Roh x, y** a **Protilehlý roh x, y** |
| Kružnice | **Střed x, y** a **Poloměr** |
| Bod | **V x, y** |

5. Zvolte {{ui:Přidat}}, nebo stiskněte {{key:Enter}} v libovolném poli.

Tvar se objeví a stavový řádek hlásí například „Přidán obdélník." Pole se vyprázdní a jsou připravena pro další. Každé přidání je jeden krok zpět.

Dvojici zadejte jako dvě čísla oddělená čárkou nebo mezerou: `0, 0`, `25 -10` nebo `12.5,40`. Záporná čísla a desetinná čísla jsou v pořádku. Poloměr musí být větší než nula. Pokud něco není číslo, stavový řádek hlásí: 'Zadejte souřadnice ve tvaru "x, y" a poloměr větší než nula.'

## Příklad: obrys desky s otvory, zadaný textem

1. Otevřete skicu na **Přední rovina**.
2. **Přidat**: Obdélník. **Roh x, y**: `-50, -30`. **Protilehlý roh x, y**: `50, 30`. {{key:Enter}}.
3. **Přidat**: Kružnice. **Střed x, y**: `-30, 0`. **Poloměr**: `5`. {{key:Enter}}.
4. **Střed x, y**: `30, 0`. **Poloměr**: `5`. {{key:Enter}}.
5. Zvolte {{ui:Ukončit skicu}}, pak {{ui:Vytáhnout}}: deska 100 × 60 se dvěma otvory o průměru 10 mm.

## Zadaná geometrie je umístěna, ne svázána

Zadané souřadnice umístí geometrii na správné místo, ale **nejsou vazbami**. Tvary zůstanou modré (nedostatečně určené) a mohou se posunout, když je přetáhnete nebo změníte jinou kótu:

- zadaný obdélník má vlastní rohové, vodorovné a svislé vazby jako nakreslený, ale nic ho nespojuje s počátkem;
- zadaná úsečka nemá vodorovnou ani svislou vazbu, i když jste zadali vodorovnou čáru;
- střed zadané kružnice je volný.

Chcete-li skicu plně určit, přidejte později kóty a vazby (viz [Plně určete skicu](topic:relations-dimensions)). Například vyberte roh obdélníku a počátek a zvolte {{ui:• Koincidence}}, nebo okótujte středy kružnic od počátku.

:::note
Bez ukazovátka se dostanete tak daleko: přesuňte se na řádek roviny v historii klávesou {{key:Tab}} a šipkami, stiskněte {{key:Enter}} pro výběr, stiskněte {{key:S}} pro skicu, přidejte zde tvary a klávesou {{key:Tab}} přejděte na **Upravit** u každé kóty a na {{ui:Ukončit skicu}}. Výběr geometrie, a tedy přidání vazeb nebo nových kót, v této verzi stále vyžaduje kliknutí nebo klepnutí.
:::

## Omezení

- Oblouky zatím nelze zadat. Nakreslete je nástrojem Oblouk, nebo zadejte kružnici a použijte vazby.
- V tomto poli nejsou relativní souřadnice (od posledního bodu) ani polární souřadnice (délka a úhel).
- Zadaná geometrie se nepřichytává k existujícím bodům. Zadejte stejné souřadnice jako existující bod a poté přidejte mezi nimi vazbu {{ui:• Koincidence}}, pokud mají zůstat spojené.
