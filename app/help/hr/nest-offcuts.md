---
title: Čuvanje i ponovna upotreba odrezaka
summary: Nakon slaganja, ono što ostane od svake ploče postaje brojčani ostatak na popisu zaliha; sljedeće slaganje prvo koristi ostatke, pa tek onda cijele ploče.
keywords: nesting, odrezak, ostatak, zaliha, otpad, ploča, lim, ponovna upotreba, materijal, debljina, CSV
from: 7a68d4b8
---

Kad slažete dijelove na pločama, upotrebljivi ostatak svake ploče (ne sitnice) može se čuvati kao **ostatak**: brojčani obris (R-0001, R-0002 …) s materijalom, debljinom, veličinom i poslom iz kojeg potječe. Popis se sprema uz datoteku i može se spremiti kao CSV.

## Ponovna upotreba

Upišite **materijal** i **debljinu**, ostavite uključeno {{ui:Use remnants first}} i složite. Ostaci istog materijala i debljine isprobavaju se od najmanjeg; dijelovi koji stanu idu na njih, unutar vlastitog obrisa ostatka i daleko od njegova ruba; što ne stane ide na nove ploče. Izvještaj o poslu kaže koji su ostaci upotrijebljeni i što je ostalo. Uz uključeno {{ui:Save the leftovers as remnants}}, {{ui:Add this job to the stock}} zatim upisuje posao na popis zaliha: upotrijebljeni ostatak označen je kao **Upotrijebljeno** (uz posao) i više se ne nudi. Ono što je ostalo od njega postaje novi ostatak koji pamti svog nadređenog.

## Što se smatra ostatkom

Ostatak se mjeri uz razmak koji ste postavili (nijedan dio nije bliži rezu od toga). Trake uže od dvadesetine ploče i komadi manji od 2 % ploče su otpad; promijenite obje granice ako vaša radionica čuva manje komade. Rupe unutar dijelova pripadaju dijelovima i ne čuvaju se. Rola nema ostataka.

## Na crtežu

DXF slaganja crta obris svakog ostatka na sloju REMNANTS s njegovim brojem u sredini, pa se komadi mogu označiti kad se režu.

Još nije izrađeno: smjer vlakana ostatka, crtični kod ili list naljepnica, ostaci rola, zaliha dijeljena među projektima.
