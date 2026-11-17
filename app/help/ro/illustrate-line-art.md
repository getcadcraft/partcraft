---
title: Ilustrații tehnice: desen în linii, imagini și foi
summary: Exportați orice vizualizare ca desen vectorial în linii (SVG sau PDF) cu trei grosimi de linie, linii ascunse punctate sau omise, fețe de secțiune cu hașură și umpleri opționale, sau ca PNG; puneți mai multe vizualizări pe o singură foaie.
keywords: ilustrare, desen în linii, ilustrație tehnică, svg, pdf, png, linii ascunse, siluetă, hașură, foaie, export
from: 0e9bea63
---

{{ui:Export}} din grupul {{ui:Ieșire}} deschide caseta de dialog de export:

- {{ui:Ce}}: scena așa cum este acum, o vizualizare sau toate vizualizările.
- {{ui:Ca}}: **PDF** sau **SVG** (desen vectorial în linii; ambele sunt scrise din același desen), **PNG al desenului în linii** sau **imagine PNG a vizualizării 3D** (până la 4096 de pixeli lățime), și [fișierul 3D interactiv](topic:illustrate-interactive).
- {{ui:Pagini}}: o vizualizare pe pagină sau toate vizualizările pe o foaie, cu numele fiecăreia sub ea. {{ui:Hârtie}}: A4, A3, Letter sau Tabloid.
- {{ui:Linii ascunse}}: punctate sau omise. {{ui:Umpleri}}: cum arată vizualizarea, fără umpleri, culori plane sau umbrit. {{ui:Desenare și muchii netede}} adaugă linii de detaliu.

Desenul în linii are trei grosimi: contururi (siluete, muchii deschise și contururile secțiunilor), muchii ascuțite și linii de detaliu. Fețele tăiate ale unei secțiuni sau ale unui decupaj în cub sunt hașurate. Vederile explodate primesc trasee cu linie-punct de la locul fiecărei piese; baloanele, adnotările, lista de piese și lupa sunt desenate și ele.

Desenul în linii se calculează din formele pieselor prin metoda rețelei (aceeași pe care o folosește foaia de desen a PartCraft fără nucleul exact), deci suprafețele curbe sunt desenate prin fațetele lor, așa cum le ține modelul.

## Încă nerealizat

- Imaginile de calitatea trasorului de cale (randorului din ModelCraft) nu sunt oferite aici; imaginile PNG sunt aspectul propriu al vizualizării 3D.
