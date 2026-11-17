---
title: Tehniskās ilustrācijas: līniju zīmējumi, attēli un lapas
summary: Eksportēt jebkuru skatu kā vektoru līniju zīmējumu (SVG vai PDF) ar trim līniju biezumiem, slēptās līnijas punktētas vai izlaistas, griezuma virsmas šķautas un pēc izvēles ar aizpildījumiem, vai kā PNG; novietot vairākus skatus vienā lapā.
keywords: ilustrēt, līniju zīmējums, tehniskā ilustrācija, svg, pdf, png, slēptās līnijas, siluete, svītrojums, lapa, eksportēt
from: 0e9bea63
---

{{ui:Eksportēt}} grupā {{ui:Izvade}} atver eksporta dialogu:

- {{ui:Ko}}: pašreizējā aina, viens skats vai visi skati.
- {{ui:Kā}}: **PDF** vai **SVG** (vektoru līniju zīmējums; abi tiek veidoti no viena rasējuma), **līniju zīmējuma PNG** vai **3D skata PNG attēls** (līdz 4096 pikseļiem platumā), un [interaktīvais 3D fails](topic:illustrate-interactive).
- {{ui:Lappuses}}: viens skats vienā lappusē vai visi skati vienā lapā ar to nosaukumu zem tā. {{ui:Papīrs}}: A4, A3, Letter vai Tabloid.
- {{ui:Paslēptās līnijas}}: punktētas vai izlaistas. {{ui:Aizpildījumi}}: kā skats izskatās, nav, plakanas krāsas vai ēnots. {{ui:Zīmēt arī mīkstās malas}} pievieno detalizētas līnijas.

Līniju zīmējumam ir trīs biezumi: kontūras (siluetus un atvērtās malas, kā arī griezuma kontūras), asās malas un detalizētās līnijas. Griezuma plaknes vai kastes griezuma virsmas ir šķautas. Izvērstajiem skatiem tiek zīmētas strihpunktu trajektorijas no katras detaļas vietas; zīmējas arī baloni, anotācijas, detaļu saraksts un palielinātājs.

Līniju zīmējumus aprēķina no detaļu formām ar tīkla metodi (tādu pašu, ko PartCraft rasējuma lapa izmanto bez precīzā kodola), tāpēc līklīnijas virsmas tiek zīmētas pēc to facetēm, kā tās glabā modelis.

## Vēl nav pieejams

- Attēli ar ceļa izsekotāja kvalitāti (ModelCraft renderētājs) šeit nav piedāvāti; PNG attēli ir paša 3D skata izskats.
