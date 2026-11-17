---
title: Tekniske illustrationer: linjetegninger, billeder og ark
summary: Eksportér enhver visning som vektor-linjetegning (SVG eller PDF) med tre linjetykkelser, skjulte linjer stiplet eller udeladt, skraverede snitflader og valgfrie udfyldninger, eller som PNG; læg flere visninger på ét ark.
keywords: illustrér, linjetegning, teknisk illustration, svg, pdf, png, skjulte linjer, silhuet, skravering, ark, eksport
from: 0e9bea63
---

{{ui:Eksportér}} i gruppen {{ui:Ud}} åbner eksportdialogen:

- {{ui:Hvad}}: scenen, som den er nu, én visning eller alle visninger.
- {{ui:Som}}: **PDF** eller **SVG** (vektor-linjetegning; begge skrives ud fra den samme tegning), **PNG af linjetegningen** eller **PNG-billede af 3D-visningen** (op til 4096 pixels bred), og den [interaktive 3D-fil](topic:illustrate-interactive).
- {{ui:Sider}}: én visning pr. side, eller alle visninger på ét ark med navnet under. {{ui:Papir}}: A4, A3, Letter eller Tabloid.
- {{ui:Skjulte linjer}}: stiplet eller udeladt. {{ui:Udfyldninger}}: som visningen ser ud, ingen, flade farver eller skygget. {{ui:Tegn også bløde kanter}} tilføjer detaljelinjer.

Linjetegningen har tre tykkelser: konturer (silhuetter og åbne kanter samt snitkonturer), skarpe kanter og detaljelinjer. Snitflader i et snit eller en boksudskæring er skraveret. Eksploderede visninger får kædelinjespor fra det sted, hver del sidder; positionscirkler, noteringer, styklisten og forstørrelsesglasset tegnes også.

Linjetegninger beregnes ud fra delenes former med mesh-metoden (den samme, som PartCrafts tegningsark bruger uden den eksakte kernel), så buede flader tegnes af deres facetter, som modellen holder dem.

## Ikke lavet endnu

- Billeder med path tracer-kvalitet (renderen i ModelCraft) tilbydes ikke her; PNG-billeder er 3D-visningens eget udseende.
