---
title: Technische Illustrationen: Linienzeichnungen, Bilder und Blätter
summary: Exportieren Sie jede Ansicht als vektorielle Linienzeichnung (SVG oder PDF) mit drei Linienstärken, verdeckten Linien gestrichelt oder weggelassen, schraffierten Schnittflächen und optionalen Füllungen, oder als PNG. Mehrere Ansichten lassen sich auf einem Blatt zusammenfassen.
keywords: illustrate, Linienzeichnung, technische Illustration, svg, pdf, png, verdeckte Linien, Silhouette, Schraffur, Blatt, Export
from: 0e9bea63
---

{{ui:Exportieren}} in der Gruppe {{ui:Ausgabe}} öffnet den Exportdialog:

- {{ui:Was}}: die Szene, wie sie jetzt ist, eine Ansicht oder alle Ansichten.
- {{ui:Als}}: **PDF** oder **SVG** (vektorielle Linienzeichnung; beide werden aus derselben Zeichnung geschrieben), **PNG der Linienzeichnung** oder ein **PNG-Bild der 3D-Ansicht** (bis zu 4096 Pixel breit) sowie die [interaktive 3D-Datei](topic:illustrate-interactive).
- {{ui:Seiten}}: eine Ansicht pro Seite oder alle Ansichten auf einem Blatt, jeweils mit ihrem Namen darunter. {{ui:Papier}}: A4, A3, Letter oder Tabloid.
- {{ui:Verdeckte Linien}}: gestrichelt oder weggelassen. {{ui:Füllungen}}: wie die Ansicht aussieht, keine, Volltonfarben oder schattiert. {{ui:Weiche Kanten auch zeichnen}} fügt Detaillinien hinzu.

Die Linienzeichnung hat drei Linienstärken: Konturen (Silhouetten, offene Kanten und Schnittkonturen), scharfe Kanten und Detaillinien. Schnittflächen eines Schnitts oder Boxausschnitts werden schraffiert. Explosionsansichten erhalten Strichpunktspuren von der Stelle, an der jedes Bauteil sitzt; Ballons, Beschriftungen, die Stückliste und die Lupe werden ebenfalls gezeichnet.

Die Linienzeichnung wird aus den Formen der Bauteile nach dem Netzverfahren berechnet (demselben, das das Zeichenblatt von PartCraft ohne den exakten Kern verwendet). Gekrümmte Flächen werden daher aus ihren Facetten gezeichnet, so wie das Modell sie enthält.

## Noch nicht umgesetzt

- Bilder in der Qualität des Pfadtracers (dem Renderer von ModelCraft) werden hier nicht angeboten; PNG-Bilder zeigen das eigene Aussehen der 3D-Ansicht.
