---
title: Čuvanje i ponovna upotreba otpadaka
summary: Nakon raspoređivanja, ono što ostane od svakog lima postaje numerisani ostatak u listi zaliha; sljedeće raspoređivanje prvo koristi ostatke, pa tek onda cijele limove.
keywords: raspoređivanje, otpadak, ostatak, zaliha, lim, list, ponovna upotreba, materijal, debljina, CSV
from: 7a68d4b8
---

Kad raspoređuješ dijelove na limovima, upotrebljiv ostatak svakog lima (ne sitni komadi) može se sačuvati kao **ostatak**: numerisana kontura (R-0001, R-0002 …) s materijalom, debljinom, svojom veličinom i poslom iz kojeg potiče. Lista se čuva uz datoteku i može se sačuvati kao CSV.

## Ponovna upotreba

Unesi **materijal** i **debljinu**, ostavi uključeno {{ui:Use remnants first}}, i raspoređuj. Ostaci istog materijala i debljine isprobavaju se od najmanjeg; dijelovi koji stanu idu na njih, unutar sopstvene konture ostatka i dalje od njegove ivice; ono što ne stane ide na nove limove. Izvještaj o poslu kaže koji su ostaci iskorišteni i šta je ostalo. Kad je uključeno {{ui:Save the leftovers as remnants}}, {{ui:Add this job to the stock}} zatim to upisuje u listu zaliha: iskorišteni ostatak je označen **Iskorišteno** (uz posao) i ne nudi se ponovo; ono što je ostalo od njega postaje novi ostatak koji pamti svog roditelja.

## Šta se računa kao ostatak

Ostatak se mjeri uz razmak koji si postavio (nijedan dio nije bliže tom razmaku od reza). Trake uže od dvadesetine lima i komadi manji od 2 % njega su otpad; promijeni obje granice ako tvoj pogon čuva manje komade. Rupe unutar dijelova pripadaju dijelovima i ne čuvaju se. Rola nema ostataka.

## Na crtežu

DXF rasporeda crta konturu svakog ostatka na sloju REMNANTS s njegovim brojem u sredini, da se komadi mogu označiti kad se režu.

Još nije izrađeno: smjer vlakana ostatka, lista s crtičnim kodom ili naljepnicama, ostaci rola, zalihe zajedničke među projektima.
