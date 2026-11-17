---
title: Il·lustracions tècniques: dibuix de línies, imatges i fulls
summary: Exporta qualsevol vista com a dibuix vectorial de línies (SVG o PDF) amb tres gruixos de línia, les línies ocultes en traç discontinu o omeses, les cares de tall amb trama i farcits opcionals, o com a PNG; col·loca diverses vistes en un mateix full.
keywords: il·lustra, dibuix de línies, il·lustració tècnica, svg, pdf, png, línies ocultes, silueta, trama, full, exporta
from: 0e9bea63
---

{{ui:Exporta}} dins del grup {{ui:Sortida}} obre el diàleg d'exportació:

- {{ui:Què}}: l'escena tal com és ara, una vista o totes les vistes.
- {{ui:Com a}}: **PDF** o **SVG** (dibuix vectorial de línies; els dos es generen a partir del mateix dibuix), **PNG del dibuix de línies** o una **imatge PNG de la vista 3D** (fins a 4096 píxels d'amplada), i el [fitxer 3D interactiu](topic:illustrate-interactive).
- {{ui:Pàgines}}: una vista per pàgina, o totes les vistes en un sol full amb el seu nom a sota. {{ui:Paper}}: A4, A3, Letter o Tabloid.
- {{ui:Línies ocultes}}: en traç discontinu o omeses. {{ui:Farcits}}: tal com es veu la vista, cap, colors plans o ombrejat. {{ui:Dibuixa també les arestes suaus}} afegeix línies de detall.

El dibuix de línies té tres gruixos: contorns (siluetes, arestes obertes i contorns de tall), arestes vives i línies de detall. Les cares de tall d'una secció o d'un retall amb caixa van amb trama. Les vistes explosionades reben traçats de línia de punt i guió des del lloc on és cada peça; també es dibuixen els globus, les anotacions, la llista de peces i la lupa.

El dibuix de línies es calcula a partir de la forma de les peces pel mètode de malla (el mateix que fa servir el full de dibuix de PartCraft sense el nucli exacte), de manera que les cares corbes es dibuixen per les seves facetes, tal com les conté el model.

## Encara no implementat

- Les imatges amb la qualitat del traçador de camins (el renderitzador de ModelCraft) no s'ofereixen aquí; les imatges PNG tenen l'aspecte propi de la vista 3D.
