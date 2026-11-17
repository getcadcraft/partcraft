---
title: Estudi magnètic d'un croquis
summary: Converteix els perfils tancats dels croquis en un model magnètic pla (ferro, imants, bobines), veu el camp i llegeix la força i el parell sobre un cos.
keywords: imant, magnètic, magnetostàtic, camp, densitat de flux, força, parell, bobina, culata, ferro, corba B-H, imant permanent, actuador, motor, solenoide, maxwell
from: 604efc3b
---

Utilitzeu {{ui:Més}} a la barra d'Operacions › {{ui:Estudi magnètic de croquis…}} en una peça que tingui croquis. Cada forma tancada dels croquis que marqueu és una regió d'un model pla; l'estudi calcula el camp magnètic B, la força i el parell sobre un cos que trieu.

## Passos

1. Dibuixeu els cossos com a formes tancades en croquis: una culata de ferro, un imant, una bobina. Els cossos que es toquen comparteixen una aresta, així que poseu-los en croquis diferents; els cossos separats, o els que estan dins d'un altre (una finestra en una culata), poden compartir-ne un. Mantingueu els croquis sobre el mateix pla.
2. Obriu l'estudi i marqueu els croquis a utilitzar. Cada perfil tancat rep una fila, numerada. Indiqueu què és: {{ui:Aire}}, {{ui:Ferro}} (una permeabilitat, o una corba B–H escrita com a parells de B en tesla i H en A/m), un {{ui:Imant permanent}} (Br en tesla, la seva direcció com a angle respecte de l'eix x del croquis, i la seva permeabilitat de retorn) o una {{ui:Bobina}} (el corrent total que travessa el seu perfil, espires per ampers; el signe indica en quin sentit circula).
3. Marqueu {{ui:Força i parell sobre aquest cos}} per als cossos on els vulgueu. Indiqueu la profunditat de la peça fora del croquis.
4. Trieu la malla i l'aire al voltant del model, i després {{ui:Executa}}.

## Què veureu

- La densitat de flux |B| sobre el model, de blau fosc (baixa) a vermell (alta), amb els perfils numerats.
- El camp més intens i on és, el nombre de triangles i, per a cada cos que heu marcat, la força al llarg de x i y i el parell respecte al seu centre, per a la profunditat que heu indicat.
- {{ui:Desa els resultats (CSV)}} escriu els valors.

## Cal saber

- És un model pla i estacionari: tot és per metre de profunditat, sense corrents parasites ni histèresi, i un imant és una recta de retorn (no es pot desmagnetitzar).
- El model es troba dins d'una caixa d'aire la vora de la qual és una paret. Compareu dues mides de la caixa d'aire, i les malles Normal i Fina: una força obtinguda del camp al voltant d'un cos només és tan bona com la malla en aquest punt.
- El ferro amb només una permeabilitat mai se satura. Quan el camp superi 2 T, l'estudi mostra un ⚠ a la llista Problemes: doneu al ferro una corba B–H. Els valors d'una fila nova són exemples (ferro μr 2000, un imant de 1.2 T), no la fitxa tècnica d'un material.
- Un cos necessita espai al voltant per rebre la força: si un altre cos és massa a prop, l'estudi ho indica.
- Una ajuda per al dibuix, no una aprovació d'enginyeria.

## Següent

- [Camps magnètics en 2-D (tutorial)](topic:magnetic-fields-2d)
