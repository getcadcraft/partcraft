---
title: Bordák és sarokbordák
summary: Merevítsen egy alkatrészt egy egy vonalként rajzolt bordával: a vonaltól a falakig tölt ki, a vázlatsík meghatározott vastagságában, a választott oldalon.
keywords: borda, sarokborda, bordázat, merevítés, támasz, konzol, tartó, sarki támasz, vékony fal, megerősítés
from: 5c218881
---

:::note
**Ebben a verzióban még nincs elkészítve.** A borda pontos geometriai kernelt igényel, amellyel ez a PartCraft-verzió nem rendelkezik: minden alkatrészt a hálós kernellel épít. [Mi még nincs elkészítve](topic:not-built-yet) leírja, mit tegyen helyette. Az oldal többi része azt írja le, ahogy pontos kernellel működne.
:::

A **borda** (vagy sarokborda) egy vékony fal, amely merevít egy alkatrészt, például az L alakú konzol sarkában lévő háromszög. Csak a szabad élét rajzolja meg: a PartCraft kitölti a vonal és a falak közötti teret. Ehhez a **pontos kernel** kell (lásd [A hálós kernel](topic:solid-kernels)).

## Borda hozzáadása

1. Készítsen egy síkot, amely a borda helye közepén halad át (egy 40 mély L-konzolnál a vázlata előtt 20-szal: lásd [Referenciasíkok, tengelyek és pontok](topic:reference-geometry)).
2. Rajzoljon rá **egy vonalat** faltól falig — vagy néhány vonalat végétől végéig egy hajlított bordaélhez. A vonal megállhat a falak előtt: a végeit addig vezeti tovább, amíg el nem érik őket.
3. Jelölje ki a vázlatot, és válassza a {{ui:Továbbiak}} › {{ui:Borda}} gombot.

A borda a vonaltól a falakig tölt, az alkatrész közepe felé eső oldalon, így a sarokborda a belső sarokba kerül. Ha ez az oldal nyitott, a másik pedig zárt, a PartCraft megfordítja, és ezt jelzi.

## Beállítások

- **Vastagság (mm)**: a borda vastagsága a vázlatsíkon keresztül. Paraméter is vezérelheti.
- **Vastagság** (az alatta lévő választás): **A vázlatsík közepén**, **A sík előtt** (a normálisa mentén) vagy **A sík mögött**.
- **Átfordítás**: a vonal másik oldalát tölti ki.

## Üzenetek

- **Ezen az oldalon a borda széle sosem találkozik a testtel**: itt semmi nem zárul le. Jelölje be vagy törölje az **Átfordítás** jelölést, vagy mozgassa a vonalat úgy, hogy falak határolják.
- **A bordának egy nyitott vonallánc kell a vázlatában**: a vázlatban zárt alakzat, ív vagy spline van, vagy olyan vonalak, amelyek nem kapcsolódnak végponttól végpontig.
- **A borda éle ott a test belsejében fut**: a vonal a tömör test belsejében van; a falak közötti nyitott térben rajzolja meg.
