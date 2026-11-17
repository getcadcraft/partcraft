---
title: Dibuixa un arc amb deu mètodes
summary: Trieu com es descriu un arc (tres punts, inici i final amb un radi, centre i inici amb un angle, i més), feu clic o escriviu els valors, i continueu des de l'última línia o arc.
keywords: arc, arc de 3 punts, arc de tres punts, inici centre final, inici final radi, arc tangent, continua, corda, angle inclòs, arc de croquis, mètodes d'arc
from: 647f7dce
---

## Què hi fareu

Dibuixeu un arc en un croquis amb el mètode que correspon al que sabeu: tres punts sobre ell, el seu centre, el seu radi, l'angle que descriu o la direcció en què surt. Els valors es poden fer clic o escriure.

## Passos

1. Obriu un croquis (vegeu [Conceptes bàsics de croquis](topic:sketch-basics)).
2. A la barra d'eines del croquis, obriu la llista al costat de {{ui:Arc}} i trieu un mètode, per exemple {{ui:Arc: inici, final, radi}}. Els mètodes són: 3 punts; Inici, centre, final; Inici, centre, angle; Inici, centre, longitud; Inici, final, angle; Inici, final, direcció; Inici, final, radi; Centre, inici, final; Centre, inici, angle; Centre, inici, longitud; i Continua.
3. Seguiu la barra d'estat, que indica el mètode i què donar a continuació: feu clic al punt inicial, al punt central, a un segon punt de l'arc o al punt final.
4. Quan la indicació diu "o escriviu", escriviu un número i premeu {{key:Enter}}: l'angle inclòs en graus (negatiu és en sentit horari), la longitud de la corda, la direcció tangent inicial en graus, o el radi (negatiu és la volta més llarga).
5. L'arc es dibuixa. {{ui:Arc: continua}} comença el següent arc des del final de l'última línia o arc.

## Notes

- Els arcs mantenen el seu centre, inici i final, així que les relacions i les cotes hi funcionen com abans.
- La barra d'estat rebutja les dades impossibles i diu per què, per exemple tres punts en línia recta, o un radi massa petit per arribar entre els dos punts finals.
- {{ui:Arc: continua}} sense res dibuixat diu "No hi ha res per continuar: dibuixeu primer una línia o un arc."
