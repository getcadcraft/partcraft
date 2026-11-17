---
title: Afegeix geometria de croquis escrivint coordenades
summary: Fes servir Afegeix per coordenades al tauler del croquis per col·locar línies, línies de centre, rectangles, cercles i punts en posicions exactes, només amb el teclat.
keywords: coordenades, entrada escrita, entrada des del teclat, entrada numèrica, posició exacta, x y, coordenades absolutes, accessibilitat, sense ratolí
from: 5e6c1656
---

Quan en saps els números, escriure'ls és més ràpid que fer clic i acotar. **Afegeix per coordenades** és al tauler de la dreta sempre que hi ha un croquis obert. També permet construir un croquis sense cap punter.

Les coordenades són en mil·límetres, als eixos propis del croquis: x cap a la dreta i y cap amunt tal com el veus, amb (0, 0) a l'origen (el cercle vermell amb una creu).

## Afegeix una forma

1. Obre un croquis (vegeu [Dibuixa el primer croquis](topic:sketch-basics)).
2. Al tauler de la dreta, desplaça't fins a **Afegeix per coordenades**.
3. Tria la forma a **Afegeix**: Línia, Línia de centre, Rectangle, Cercle o Punt.
4. Omple els camps:

| Forma | Camps |
|---|---|
| Línia | **Des de x, y** i **Fins a x, y** |
| Línia de centre | **Des de x, y** i **Fins a x, y** |
| Rectangle | **Cantonada x, y** i **Cantonada oposada x, y** |
| Cercle | **Centre x, y** i **Radi** |
| Punt | **A x, y** |

5. Tria {{ui:Afegeix}} o prem {{key:Enter}} en qualsevol camp.

La forma apareix i la barra d'estat diu, per exemple, "S'ha afegit un rectangle." Els camps es buiden, a punt per a la següent. Cada addició és un pas de {{ui:Desfés}}.

Escriu un parell com dos números separats per una coma o un espai: `0, 0`, `25 -10` o `12.5,40`. Els nombres negatius i els decimals són correctes. Un radi ha de ser més gran que zero. Si alguna cosa no es llegeix com a número, la barra d'estat diu: 'Escriu les coordenades com a "x, y" i un radi superior a zero.'

## Exemple: contorn d'una placa amb ranures, escrit

1. Obre un croquis al **pla Front**.
2. **Afegeix**: Rectangle. **Cantonada x, y**: `-50, -30`. **Cantonada oposada x, y**: `50, 30`. {{key:Enter}}.
3. **Afegeix**: Cercle. **Centre x, y**: `-30, 0`. **Radi**: `5`. {{key:Enter}}.
4. **Centre x, y**: `30, 0`. **Radi**: `5`. {{key:Enter}}.
5. Tria {{ui:Surt del croquis}} i després {{ui:Extrudeix}}: una placa de 100 × 60 amb dos forats de 10 mm.

## La geometria escrita es col·loca, però no queda fixada

Les coordenades escrites col·loquen la geometria al lloc correcte, però **no són relacions**. Les formes queden en blau (subdefinides) i es poden moure si les arrossegues o si canvies una altra cota:

- un rectangle escrit té les seves pròpies relacions de cantonada, horitzontals i verticals, com un de dibuixat, però res no el lliga a l'origen;
- una línia escrita no té relació horitzontal ni vertical, encara que n'hagis escrit una de nivell;
- el centre d'un cercle escrit és lliure.

Per fer el croquis totalment definit, afegeix cotes i relacions després (vegeu [Defineix del tot un croquis](topic:relations-dimensions)). Per exemple, selecciona una cantonada del rectangle i l'origen i tria {{ui:• Coincident}}, o acota els centres dels cercles des de l'origen.

:::note
Sense punter pots arribar fins aquí: mou-te a una fila de pla de l'historial amb {{key:Tab}} i les tecles de fletxa, prem {{key:Enter}} per seleccionar-la, prem {{key:S}} per fer el croquis, afegeix formes aquí, i arriba a **Edita** al costat de cada cota i fes {{ui:Surt del croquis}} amb {{key:Tab}}. Seleccionar geometria, i per tant afegir relacions o cotes noves, encara necessita un clic o un toc en aquesta versió.
:::

## Límits

- Els arcs encara no es poden escriure. Dibuixa'ls amb l'eina d'arc, o escriu un cercle i fes servir relacions.
- No hi ha coordenades relatives (des de l'últim punt) ni polars (longitud i angle) en aquest camp.
- La geometria escrita no s'ajusta als punts existents. Escriu les mateixes coordenades que un punt existent i després afegeix una relació {{ui:• Coincident}} entre tots dos si han de quedar units.
