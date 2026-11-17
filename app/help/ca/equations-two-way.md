---
title: Equacions en ambdós sentits
summary: Canvieu un paràmetre i la peça el segueix; escriviu una nova mida en un número dirigit i PartCraft calcula el paràmetre que hi ha darrere, preguntant quin si n'hi ha diversos que poden canviar.
keywords: equacions, resol enrere, cota dirigida, dos sentits, invers, cerca d'objectiu, paràmetres, valors enllaçats, quin paràmetre
from: 82dc0269
---

Una equació com **Extrude1 depth = thick + extra** funciona en les dues direccions.

## Endavant: canvieu el paràmetre

A la pestanya {{ui:Paràmetres}}, canvieu `thick` de 20 a 30. La profunditat d'Extrude1 passa a ser 30 + extra, i la peça es torna a construir.

## Enrere: canvieu el número dirigit

1. Feu clic a «Extrude1» a l'historial. La seva casella **Profunditat (mm)** mostra **ƒ**: una equació la dirigeix.
2. Escriviu la mida que voleu, per exemple `40`, i premeu {{key:Enter}}.

PartCraft resol el paràmetre que hi ha darrere de l'equació, en tants passos com calgui (`depth = hub_h`, `hub_h = disc_t + 50`: escriure una alçada canvia `disc_t`). La barra d'estat diu què ha canviat, per exemple que extra ha passat de 5 a 15.

Quan dos o més paràmetres dirigeixen el número, una caixa pregunta **Quin paràmetre ha de canviar?** i els llista. Feu clic a un; els altres mantenen els seus valors. {{ui:Cancel·la}} no canvia res.

El mateix funciona en un croquis: feu doble clic a una cota dirigida, escriviu un valor i premeu {{key:Enter}}. També funciona a la columna **Valor** de la taula de paràmetres, per a un paràmetre que és ell mateix una expressió.

## Quan no pot

- Un número que ha de ser enter (un recompte de patró) o quedar dins d'un rang (un angle fins a 360°) es rebutja abans de canviar res.
- Una equació només de números fixos (`=40`) no té cap paràmetre a canviar: el número que escriviu la substitueix.
- Si cap valor del paràmetre dona la mida que heu escrit, la barra d'estat ho diu i no canvia res.
- Un croquis que no es pot resoldre amb el valor nou manté els seus valors anteriors, i la barra d'estat n'indica el nom.

Cada canvi, en un sentit o en l'altre, és un pas per a {{key:Mod+Z}} i {{key:Mod+Y}}.
