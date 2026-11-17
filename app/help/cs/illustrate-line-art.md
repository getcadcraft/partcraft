---
title: Technické ilustrace: čárová grafika, obrázky a listy
summary: Exportujte libovolný pohled jako vektorovou čárovou grafiku (SVG nebo PDF) se třemi tloušťkami čar, skrytými čárami čárkovanými nebo vynechanými, šrafovanými řeznými plochami a volitelnými výplněmi, nebo jako PNG; několik pohledů umístěte na jeden list.
keywords: illustrate, čárová grafika, technická ilustrace, svg, pdf, png, skryté čáry, silueta, šrafa, list, export
from: 0e9bea63
---

{{ui:Export}} ve skupině {{ui:Výstup}} otevře dialog exportu:

- {{ui:Co}}: scéna tak, jak je nyní, jeden pohled, nebo všechny pohledy.
- {{ui:Jako}}: **PDF** nebo **SVG** (vektorová čárová grafika; obojí se zapisuje ze stejného výkresu), **PNG čárové grafiky**, nebo **PNG obrázek 3D pohledu** (až 4096 pixelů na šířku), a [interaktivní 3D soubor](topic:illustrate-interactive).
- {{ui:Strany}}: jeden pohled na stranu, nebo všechny pohledy na jednom listu s jejich názvem pod nimi. {{ui:Papír}}: A4, A3, Letter nebo Tabloid.
- {{ui:Skryté čáry}}: čárkované, nebo vynechané. {{ui:Výplně}}: jak pohled vypadá, žádné, ploché barvy nebo stínované. {{ui:Také kreslit měkké hrany}} přidá podrobné čáry.

Čárová grafika má tři tloušťky: obrysy (siluety, otevřené hrany a obrysy řezů), ostré hrany a podrobné čáry. Řezné plochy řezu nebo výřezu kvádrem jsou vyšrafovány. Rozložené pohledy dostanou čerchované stopy od místa, kde každý díl sedí; bubliny, anotace, seznam dílů a lupa se také vykreslí.

Čárová grafika se počítá z tvarů dílů metodou sítě (stejnou, jakou list výkresu PartCraftu používá bez přesného jádra), takže zakřivené plochy se kreslí podle svých plošek, tak jak je model drží.

## Ještě není hotovo

- Obrázky v kvalitě path traceru (renderer ModelCraftu) se zde nenabízejí; PNG obrázky mají vlastní vzhled 3D pohledu.
