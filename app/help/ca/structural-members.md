---
title: Bastiments amb perfils d'acer
summary: Posar perfils d'acer al llarg de les línies d'un o més croquis per fer un bastiment soldat: cantonades a inglet o a topall, barres retallades a mida on es troben, tapes d'extrem, cartabons i una llista de talls amb longituds i angles d'extrem.
keywords: estructura soldada, barra estructural, bastiment, bastiment d'acer, tub, tub quadrat, hss, rhs, shs, tub rodó, chs, biga en doble T, perfil en I, w beam, ipe, hea, heb, upn, cantonera, inglet, topall, retall, tapa d'extrem, cartabó, llista de talls
from: 59071e5a
---

Una {{ui:Barra estructural}} posa un perfil d'acer al llarg de cada línia dels croquis que trieu. Dibuixeu el bastiment com a línies (cada línia és una barra) i després trieu el perfil: les barres es construeixen, les cantonades es retallen i s'allarguen, i una llista de talls indica quant ha de mesurar cada peça i en quin angle s'ha de tallar.

## Fer un bastiment

1. Dibuixeu el bastiment com a línies en un croquis, per exemple un rectangle al pla superior. Les línies marcades com a construcció no es tenen en compte.
2. Amb el croquis seleccionat, trieu {{ui:Més}} › {{ui:Barra estructural}}. Cada línia del croquis rep una barra.
3. Al tauler, trieu la **Família** i la **Mida** del perfil. Les famílies són les taules AISC (W, S, C, L, tubs HSS, Pipe) i EN 10365 (IPE, HEA, HEB, UPN).

### Un bastiment en 3D

Les línies de diversos croquis formen un sol bastiment: un rectangle superior dibuixat en un pla per sobre, i les cames dibuixades en plans que estan drets, es troben als seus extrems en 3D. Sota **Al llarg de les línies de** del tauler, marqueu cada croquis les línies del qual han de seguir les barres. Els extrems que es troben a menys d'un micròmetre s'uneixen.

## Posar el perfil sobre la seva línia

- **Gira (°)** fa girar el perfil al voltant de la seva línia. Una biga es posa de peu, amb la seva alçada vertical (en una barra vertical, la seva alçada apunta cap al davant).
- **Sobre la línia** tria quin punt del perfil queda sobre la línia: el centre, o una cantonada, o el punt mig d'un costat del contorn del perfil. "Centre inferior" posa un bastiment damunt del pla del croquis en lloc de travessar-lo.

## Cantonades i unions

| On es troben les barres | Què passa |
|---|---|
| Dues barres una a continuació de l'altra, **Cantonades: A inglet** | Totes dues es tallen al pla a mig camí entre elles, com un marc de quadre |
| Dues barres una a continuació de l'altra, **Cantonades: A topall** | La primera continua fins a la cara llunyana de la segona; la segona es talla recta a la cara propera de la primera |
| Una barra acaba al mig d'una altra (una T) | Es talla per encaixar contra l'exterior de l'altra barra |
| Tres o més acaben en un punt | La primera continua recta més enllà de les altres; les altres es tallen per encaixar contra ella |

La primera barra és la que té la línia que va primer: les línies conserven l'ordre en què es van dibuixar, croquis per croquis, en l'ordre en què es van marcar els croquis.

## Tapes d'extrem i cartabons

- **Tapes d'extrem** tanquen cada extrem lliure amb una placa del contorn del perfil, del gruix que definiu, per fora de l'extrem.
- **Cartabons** posen una placa triangular a cada cantonada on dues barres es troben en angle: **Mida del cartabó** al llarg de cada barra des de la cantonada, i **Gruix del cartabó** a través, centrat sobre el pla de la cantonada.

## La llista de talls

El tauler enumera cada peça, amb les peces idèntiques agrupades: el perfil, la longitud (de punt llarg a punt llarg, tal com es marcaria per serrar), com es talla cada extrem (recte, un angle respecte a recte, o retallat a mida), i a quines barres pertanyen. Les tapes d'extrem i els cartabons es llisten amb les seves mides. {{ui:Desa la llista de talls (CSV)}} la desa per a un full de càlcul.

Una barra retallada a mida contra un tub de cantonades arrodonides arriba una mica dins del radi de cantonada del tub, de manera que la seva longitud de punt llarg a punt llarg és uns quants mil·límetres més que la separació entre les cares.

## Límits

- Les barres només segueixen línies rectes; els arcs i les splines del croquis queden fora.
- Les unions es tallen, no se solden: no es dibuixen cordons de soldadura, i el bastiment és un sol sòlid.
- Els perfils es dibuixen amb les dimensions de la taula: perfils W amb el seu arrodoniment d'arrel, S i canals amb ales paral·leles, tubs amb radis de cantonada; els forats, les preparacions d'extrem i els espais de soldadura no es fan per a vosaltres.
- Les barres estructurals les construeix el nucli de malla. Amb el nucli exacte activat (només desenvolupadors), ho indiquen i no es construeixen.
