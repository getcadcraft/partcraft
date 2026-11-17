---
title: Tekniske illustrasjoner: linjetegninger, bilder og ark
summary: Eksporter enhver visning som vektor-linjetegning (SVG eller PDF) med tre linjevekter, skjulte linjer stiplet eller utelatt, skraverte snittflater og valgfrie fyll, eller som PNG; plasser flere visninger på ett ark.
keywords: illustrate, linjetegning, teknisk illustrasjon, svg, pdf, png, skjulte linjer, silhuett, skravur, ark, eksport
from: 0e9bea63
---

{{ui:Eksporter}} i gruppen {{ui:Ut}} åpner eksportdialogen:

- {{ui:Hva}}: scenen slik den er nå, én visning, eller alle visninger.
- {{ui:Som}}: **PDF** eller **SVG** (vektor-linjetegning; begge skrives fra samme tegning), **PNG av linjetegningen**, eller **PNG-bilde av 3D-visningen** (opptil 4096 piksler bredt), og [den interaktive 3D-filen](topic:illustrate-interactive).
- {{ui:Sider}}: én visning per side, eller alle visninger på ett ark med navnet under. {{ui:Papir}}: A4, A3, Letter eller Tabloid.
- {{ui:Skjulte linjer}}: stiplet eller utelatt. {{ui:Fyll}}: slik visningen ser ut, ingen, flate farger eller skygget. Tegn også myke kanter legger til detaljlinjer.

Linjetegningen har tre vekter: ytterlinjer (silhuetter, åpne kanter og snittkonturer), skarpe kanter og detaljlinjer. Snittflater fra et snitt eller et boksutsnitt er skravert. Eksplosjonsvisninger får kjedestreker fra der hver del sitter; posisjonsballonger, merknader, stykklisten og forstørrelsesglasset tegnes også.

Linjetegningen beregnes fra delenes former med maskemetoden (den samme som PartCraft-tegningsarket bruker uten den eksakte kjernen), så buede flater tegnes med sine fasetter, slik modellen holder dem.

## Ikke bygget ennå

- Bilder i samme kvalitet som path tracer-renderingen i ModelCraft tilbys ikke her; PNG-bilder har 3D-visningens eget utseende.
