---
title: Poganjajte del s parametri
summary: Poimenujte velikosti, ki so pomembne (širina, debelina, velikost vijaka), jih povežite s katerim koli številom značilke ali dimenzijo skice z =, in spremenite cel del iz ene tabele.
keywords: parametri, kje se uporablja, uporablja, globalne spremenljivke, spremenljivke, enačbe, namen oblikovanja, gonilne mere, povezava, izraz, formula, poimenovanje dimenzije, povezane vrednosti
from: 58c646ea
---

Parameter je poimenovano število, na primer `width = 120` ali `margin = bolt * 1.5`. Povežite globino, premer luknje, število vzorcev ali dimenzijo skice nanj, in ko spremenite parameter, se spremenijo vsi v enem koraku. Tako ohranite namen oblikovanja v delu, ne v vaši glavi.

## Dodajte parametre

1. Na desni plošči kliknite zavihek {{ui:Parametri}}.
2. Pod **Spremenljivke** vpišite ime v polje „ime“, na primer `width`.
3. V naslednje polje vpišite njegovo vrednost, na primer `120`, in pritisnite {{key:Enter}} (ali kliknite {{ui:Dodaj}}).

Vrednost je lahko število ali izraz drugih parametrov: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Stolpec **Vrednost** pokaže, kaj to izračuna. Ime se začne s črko ali `_` in ima samo črke, številke in `_`; imena funkcij in enot (`sin`, `mm`, `pi`) so zavrnjena, prav tako zanka, kot je `a = b` z `b = a`.

## Povežite število s parametrom

1. Kliknite značilko v zgodovini, na primer „Extrude1“. Njene nastavitve so prikazane na zavihku {{ui:Lastnosti}}.
2. V polje za število, na primer **Globina (mm)**, vpišite `=` in izraz: `=thick` ali `=width / 4`.
3. Pritisnite {{key:Enter}}.

Polje zdaj prikazuje rezultat, ob oznaki pa se pojavi gumb **ƒ**. Kažite nanj, da vidite enačbo. Dimenzije skice delujejo enako, tako na seznamu **Dimenzije skice** značilke kot v polju dimenzije odprte skice (dvokliknite dimenzijo, vpišite `=width`, pritisnite {{key:Enter}}).

Števila, ki jih lahko povežete: globina izvleka, kot zasuka, premer luknje, globina in velikosti razširitve za glavo in protivrtanja, število vzorcev, razmik in kot, polmer zaobljenja, razdalja skosanja, debelina stene lupine, vsaka dimenzija skice ter velikosti novejših značilk (druga globina, zožitev, protivrtanje, razdalja referenčne ravnine, kot nagiba in druge).

## Spremenite parameter

Na zavihku {{ui:Parametri}} vpišite novo vrednost ali izraz v stolpec **Izraz** in pritisnite {{key:Enter}}. Vse, kar je povezano z njim, se spremeni in del se obnovi kot en korak: {{key:Mod+Z}} to razveljavi.

Za spremembo števila z drugega konca glejte [Enačbe v obe smeri](topic:equations-two-way).

## Poglejte, kje se parameter uporablja

Pod vsakim parametrom na zavihku {{ui:Parametri}} vrstica pove, kaj ga uporablja:

- števila, ki jih poganja, na primer **Extrude1 depth** ali **Sketch1 D2 (distance)**. Kliknite eno, da izberete njeno značilko in pokažete njene lastnosti;
- števila, ki jih poganja **prek** drugih parametrov, na primer **Hole1 diameter (through h, d)**, ko je `d = h + 2` in `h = w / 2`;
- **parametri**, katerih izrazi ga uporabljajo, **konfiguracije**, ki ga nastavljajo, in **skripti**, ki ga berejo (glejte [Pišite in zaganjajte skripte](topic:craftscript)).

„Not used yet.“ pomeni, da ga nihče ne uporablja: lahko ga izbrišete brez vprašanja.

## Odklopite, preimenujte, izbrišite

- **Odklopite število:** kliknite njegov gumb **ƒ** ali {{ui:Loči}} na seznamu **Enačbe**. Obdrži trenutno vrednost in noben parameter je ne spreminja več.
- **Preimenujte parameter:** vpišite novo ime v njegovo polje **Ime**. Vsak izraz, ki ga uporablja, se prepiše.
- **Izbrišite parameter:** kliknite × v njegovi vrstici. Če ga kaj uporablja, PartCraft vpraša, ali naj najprej zapiše njegovo trenutno vrednost v te izraze.
- **Brisanje značilke** izbriše enačbe njenih števil; vrstica stanja pove, katere.

:::note
Parametri so shranjeni v datoteki `.partcraft.json` (kot različica datoteke 3). Del brez parametrov je shranjen točno kot prej.
:::

## Izrazi

| Zapišite | Pomeni |
|---|---|
| `120`, `12.5`, `1e3` | število (milimetri ali stopinje za kot) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | dolžina v drugih enotah, pretvorjena v milimetre |
| `30deg`, `0.5rad` | kot, pretvorjen v stopinje |
| `+ - * / %` in `^` | aritmetika; `^` je potenca, `-2^2` je −4 |
| `sin cos tan asin acos atan atan2` | trigonometrija v stopinjah |
| `sqrt pow exp ln log abs sign` | druge funkcije |
| `ceil floor int round(x, digits) min max` | zaokroževanje in meje |
| `if(test, a, b)` z `< <= > >= == !=` | izbira: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Imena so občutljiva na velike in male črke: `Width` in `width` sta dva parametra.

Glejte tudi [Konfiguracije in tabele oblikovanja](topic:design-tables) in [Skripti in ukazna vrstica](topic:scripts-and-cli).
