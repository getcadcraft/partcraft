---
title: Tekniska illustrationer: linjeteckningar, bilder och blad
summary: Exportera valfri vy som vektorlinjeteckning (SVG eller PDF) med tre linjetjocklekar, dolda linjer streckade eller utelämnade, skrafferade snittytor och valfria fyllningar, eller som PNG; lägg flera vyer på ett blad.
keywords: illustrera, linjeteckning, teknisk illustration, svg, pdf, png, dolda linjer, siluett, skraffering, blad, export
from: 0e9bea63
---

{{ui:Export}} i gruppen {{ui:Out}} öppnar exportdialogen:

- {{ui:What}}: scenen som den är nu, en vy, eller alla vyer.
- {{ui:As}}: **PDF** eller **SVG** (vektorlinjeteckning; båda skrivs från samma ritning), **PNG av linjeteckningen**, eller en **PNG-bild av 3D-vyn** (upp till 4096 pixlar bred), samt den [interaktiva 3D-filen](topic:illustrate-interactive).
- {{ui:Pages}}: en vy per sida, eller alla vyer på ett blad med sitt namn under. {{ui:Paper}}: A4, A3, Letter eller Tabloid.
- {{ui:Hidden lines}}: streckade eller utelämnade. {{ui:Fills}}: som vyn ser ut, ingen, platta färger eller skuggad. {{ui:Also draw soft edges}} lägger till detaljlinjer.

Linjeteckningen har tre tjocklekar: konturer (silhuetter, öppna kanter och snittkonturer), skarpa kanter och detaljlinjer. Snittytor från ett snitt eller en {{ui:Box cut-away}} skrafferas. Sprängvyer får kedjestreckade spår från där varje del sitter; ballonger, annoteringar, dellistan och förstoringsglaset ritas också.

Linjeteckningen beräknas utifrån delarnas former med nätmetoden (samma som PartCraft:s ritblad använder utan den exakta kärnan), så krökta ytor ritas av sina facetter, precis som modellen håller dem.

## Finns inte ännu

- Bilder med path tracer-kvalitet (ModelCraft:s renderare) erbjuds inte här; PNG-bilder har 3D-vyns egna utseende.
