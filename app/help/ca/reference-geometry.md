---
title: Plans, eixos i punts de referència
summary: Feu plans desplaçats d'una cara, amb un angle, per tres punts, a mig camí, tangents a un cilindre, perpendiculars a una aresta o per una aresta i un punt; eixos; punts al mig d'arestes, en creuaments i a les cantonades de plans; croquis sobre ells i usar-los com a eixos de revolució, direccions de patró i plans de simetria.
keywords: datum, entre objectes, punt mitjà, punt d'intersecció, pla per aresta i punt, pla de referència, pla de treball, pla de construcció, pla datum, pla desplaçat, pla amb angle, pla mitjà, pla tangent, eix de referència, eix de construcció, eix datum, punt de referència, punt de treball, croquis sobre pla
from: e7eb6fc1
---

La geometria de referència és l'estructura sobre la qual construïu les funcions: un **pla** on dibuixar el croquis quan no hi ha cap cara, un **eix** on fer una revolució o un patró, un **punt** on aturar una extrusió. No té material propi. Els plans es veuen a la vista com a quadrats pàl·lids, els eixos com a línies discontínues i els punts com a petites creus; els tres s'afegeixen a l'historial i segueixen allò que els ha generat quan canvieu una mida anterior.

Són al menú {{ui:Més}} del grup Funcions: {{ui:Pla}}, {{ui:Eix}}, {{ui:Punt}}.

## Crea un pla

1. Feu clic en una cara plana, o en un pla base de l'historial, per partir-ne (opcional).
2. Trieu {{ui:Més}} i després {{ui:Pla}}. Comença com un pla desplaçat un 20 % de la mida de la peça respecte a l'element que heu triat (o respecte al pla superior).
3. Al panell de la dreta trieu el **Tipus** i les seves referències:

| Tipus | Referències | Valors |
|---|---|---|
| Desplaçat d'un pla o una cara | **Des del pla** | **Distància (mm)**, negativa per a l'altre costat |
| Amb un angle, per una aresta o un eix | **Des del pla**, **Gira al voltant de** (un eix del món, una funció d'eix o una aresta recta triada) | **Angle (°)** |
| Per tres punts | **Punt 1**, **Punt 2**, **Punt 3** | — |
| Pla mitjà entre dos | **Primer pla**, **Segon pla** (paral·lels: a mig camí; secants: el pla que divideix l'angle per la meitat) | — |
| Tangent a un cilindre | **Cilindre** (una cara cilíndrica), **Punt proper** (quin costat) | — |
| Perpendicular a una aresta, en un punt | **Aresta**, **En el punt** (el pla passa pel punt de l'aresta més proper a ell, i també pel punt) | — |
| Per una aresta i un punt | **Aresta recta** (o un eix), **Pel punt** | — |
| Perpendicular a una aresta pel seu mig | **Aresta** (a mig camí al llarg seu, perpendicular en aquell punt), o sense aresta **Punt 1** i **Punt 2** (el pla a mig camí entre tots dos) | — |

Cada referència té un botó **Selecciona**: premeu-lo i després feu clic a la vista. Una ranura de pla accepta un pla base, un pla de referència o una cara plana; una ranura de punt accepta l'extrem d'una aresta (feu clic a prop d'aquell extrem), una funció de punt o un punt d'una cara; una ranura d'aresta accepta una aresta. {{key:Esc}} cancel·la una selecció. **Inverteix la normal** gira el pla (com mira un croquis que hi estigui sobre).

En aquesta versió, una ranura que necessita una aresta o una cara cilíndrica (Tangent a un cilindre, i les ranures d'aresta) respon "encara no implementat": useu punts o un eix.

## Croquis sobre un pla

Seleccioneu el pla (a l'historial o fent clic al seu quadrat a la vista) i trieu {{ui:Croquis}}, o **Croquis sobre el pla** al seu panell. El croquis segueix el pla: si canvieu la distància del pla, també es mouen el croquis i totes les funcions que hi ha sobre.

## Eixos i punts

- {{ui:Eix}}: per dos punts, l'eix d'un cilindre o d'un con, on es troben dos plans, al llarg d'una aresta recta (o de l'eix d'una aresta circular), o perpendicular a una cara per un punt.
- {{ui:Punt}}: a unes coordenades, en un vèrtex o un punt de croquis, o al centre d'una aresta circular, a més dels punts "entre objectes":

| Tipus de punt | Referències |
|---|---|
| Mig d'una aresta (o entre dos punts) | **Aresta** (a mig camí de la seva longitud, també per a arcs i corbes), o sense aresta **Punt 1** i **Punt 2** |
| On una aresta o un eix troba una cara o un pla | **Aresta** (recta o corba) o un eix, i **Troba el pla** (un pla o una cara plana) o **O una cara** (una cara plana o un cilindre). Un cercle travessa un pla dues vegades, i una línia travessa un cilindre dues vegades: **L'altre creuament** pren el segon |
| On es troben tres plans | **Primer**, **Segon** i **Tercer pla** (plans o cares planes) |

Cadascun falla amb un missatge clar quan les seves referències no encaixen: una línia paral·lela al pla, una línia que no toca el cilindre, una aresta que no arriba al pla, tres plans que no es troben en un sol punt, o un punt sobre la línia que hauria de fixar un pla.

Useu-los en altres funcions:

| On | Com |
|---|---|
| Revolució | **Eix**: trieu la funció d'eix de la llista (ha d'estar al pla del croquis) |
| Patró circular | **Eix**: la funció d'eix |
| Patró lineal | **Direcció**: una funció d'eix, o un pla (la seva normal) |
| Simetria | **Pla de simetria**: un pla de referència |
| Extrudeix | **Final**: Fins a cara o pla, Fins a vèrtex (una funció de punt). Encara no implementat en aquesta versió (necessita un nucli exacte) |
| Desmotllament | **Pla neutre** |

## Quan una referència ha desaparegut

Un pla fet a partir d'una cara que ja no existeix falla amb un missatge que la nomena, com ara "La cara on es recolza ja no existeix a Extrude1." Mai no es mou a una altra cara. Els croquis i les funcions que hi ha sobre es marquen com a "no construïdes" fins que trieu una referència nova; la resta de la peça es manté com era.

:::note
Aquesta versió construeix totes les peces amb el nucli de malla, que fa plans, eixos i punts a partir de plans base, cares planes fetes per una extrusió o una revolució, punts de croquis, coordenades i altres funcions de referència. Tot el que necessita una aresta, l'extrem d'una aresta o una cara corba necessita un nucli exacte: encara no implementat en aquesta versió ("Usa una cara o aresta del sòlid, que només un nucli exacte pot trobar: encara no implementat en aquesta versió.").
:::
