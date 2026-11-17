---
title: Čuvanje i ponovno korišćenje ostataka
summary: Posle raspoređivanja, ono što ostane od svakog lima postaje numerisani ostatak u listi zaliha; sledeće raspoređivanje prvo koristi ostatke, pa cele limove.
keywords: raspoređivanje, otpadak, ostatak, zaliha, višak, lim, list, ponovna upotreba, materijal, debljina, CSV
from: 7a68d4b8
---

Kad rasporedite delove na limovima, upotrebljiv višak svakog lima (ne sitni komadići) može da se sačuva kao **ostatak**: numerisana kontura (R-0001, R-0002 …) sa materijalom, debljinom, dimenzijama i poslom iz kog potiče. Lista se čuva uz datoteku i može da se sačuva kao CSV.

## Ponovna upotreba

Upišite **materijal** i **debljinu**, ostavite {{ui:Prvo koristi ostatke}} uključeno i rasporedite. Ostaci istog materijala i debljine isprobavaju se od najmanjeg; delovi koji stanu idu na njih, unutar sopstvene konture ostatka i bez dodirivanja njegove ivice; ono što ne stane ide na nove limove. Izveštaj posla kaže koji su ostaci upotrebljeni i šta je ostalo. Sa uključenim {{ui:Sačuvaj preostale komade kao ostatke}}, {{ui:Dodaj ovaj posao u zalihu}} zatim upisuje posao u listu zaliha: upotrebljeni ostatak se označava kao **Iskorišćen** (sa poslom) i ne nudi se ponovo; ono što ostane od njega postaje novi ostatak koji pamti svog roditelja.

## Šta se računa kao ostatak

Višak se meri sa razmakom koji ste zadali (nijedan deo nije bliži od toga nijednom rezu). Trake uže od dvadesetine lima i komadi manji od 2 % lima su otpad; promenite obe granice ako vaša radionica čuva manje komade. Rupe unutar delova su same delova i ne čuvaju se. Rola nema ostatke.

## Na crtežu

DXF rasporeda crta konturu svakog ostatka na sloju REMNANTS sa njegovim brojem u sredini, pa se komadi mogu obeležiti kad se seku.

Još nije urađeno: smer vlakana ostatka, bar-kod ili list sa nalepnicama, ostaci rola, zaliha zajednička za projekte.
