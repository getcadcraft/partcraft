---
title: Operacions de matriu i de simetria
summary: Repeteix operacions en fila amb Lineal, al voltant d'un eix amb Circular, i copia operacions o tot el cos a través d'un pla amb Simetria.
keywords: matriu, matriu lineal, matriu circular, matriu polar, simetria, simètric, copia d'operacions, cercle de cargols, llavor, simetria del cos
from: 702e9edb
---

Les matrius i les simetries copien operacions que ja has construït. Les còpies formen part de l'historial: si canvies l'original, les còpies el segueixen.

Allò que es copia és el que fa l'operació: una matriu de cos afegeix material, i una matriu de tall o de forat n'elimina. Es poden tornar a fer matrius i simetries de les matrius. Un sòlid STEP importat també es pot copiar; els arrodoniments, els xamfrans i les buides no.

## Matriu lineal

1. Selecciona a l'historial l'operació a copiar (per exemple un Forat o un Tall). Si no hi ha res seleccionat, s'usa l'última operació sòlida.
2. Trieu {{ui:Lineal}}. Apareixen tres còpies separades 20 mm al llarg de X.
3. Al panell de la dreta, definiu:

| Configuració | Què fa | Per defecte |
|---|---|---|
| **Operacions a copiar** | Marqueu totes les operacions a copiar. Només apareixen les operacions per sobre de la matriu | L'operació seleccionada |
| **Direcció** | Eix X, eix Y, eix Z, una línia o una línia de centre de qualsevol croquis anterior, l'eix d'una revolució o una aresta escollida | Eix X |
| **Espaiat (mm)** | Distància entre veïns | 20 |
| **Recompte** | Nombre total, **incloent-hi l'original** (de 1 a 1000) | 3 |
| **Inverteix la direcció** | Les còpies van en sentit contrari | Desactivat |

### Usa una aresta com a direcció

1. Feu clic sobre una aresta recta de la peça a la vista. El panell de la dreta diu **Aresta** i en mostra la longitud.
2. Trieu {{ui:Lineal}}: la matriu segueix aquesta aresta.

O bé, selecciona la matriu, escull una aresta i tria "Aresta escollida (usa la que s'ha escollit ara)" a **Direcció**. Una aresta escollida queda fixa a l'espai: no segueix els canvis posteriors. Una línia de croquis segueix el seu croquis.

## Matriu circular

1. Selecciona l'operació a copiar (per exemple un forat a prop de la vora d'un disc).
2. Trieu {{ui:Circular}}. Apareixen sis còpies repartides equitativament en tot el voltant.
3. Definiu:

| Configuració | Què fa | Per defecte |
|---|---|---|
| **Operacions a copiar** | Com a la matriu lineal | L'operació seleccionada |
| **Eix** | Eix X, Y o Z, una línia de croquis, l'eix d'una revolució o una aresta escollida | L'eix de l'última revolució si n'hi ha, si no l'eix Y |
| **Angle (°)** | 360 reparteix les còpies equitativament en tot el voltant. Un valor més petit les reparteix dins d'aquest angle, amb la primera i l'última als extrems | 360 |
| **Recompte** | Nombre total, incloent-hi l'original | 6 |
| **Inverteix la direcció** | Gira en sentit contrari | Desactivat |

Els eixos del món passen per l'origen. Per a un disc que no està centrat a l'origen, usa una línia de centre de croquis o l'eix d'una revolució.

### Exemple: els vuit forats de cargol d'una brida

1. Fes una revolució de la brida (vegeu [Revolució d'una peça torneada](topic:revolve)) sobre l'eix Y.
2. Fes un croquis a la cara superior plana de la brida, posa un punt sobre el cercle de cargols i fes un forat.
3. Amb el Forat seleccionat, trieu {{ui:Circular}}. L'eix ja és "Eix de Revolve1".
4. Poseu **Recompte** a `8`.

## Simetria

1. Selecciona a l'historial l'operació a simetritzar, o no seleccionis res per simetritzar **tot el cos tal com està construït fins ara**.
2. Trieu {{ui:Simetria}}. La simetria es fa respecte del **pla Dret**.

Per simetritzar tota la peça respecte d'una cara, primer feu clic sobre aquesta cara plana i després trieu {{ui:Simetria}}. (En fer clic en una cara es buida la selecció de l'historial, així que això sempre simetritza tot el cos.)

Configuració al panell de la dreta:

- **Simetria**: marca **El cos complet (tal com està construït fins ara)**, o desmarca'l i marca les operacions a copiar.
- **Pla de simetria**: pla Front, pla Superior, pla Dret, la cara que fa servir ara ("Una cara de Extrude1" o "Un pla fix"), o "La cara escollida ara". Per simetritzar operacions escollides respecte d'una cara: selecciona la Simetria a l'historial, fes clic a la cara a la vista i tria "La cara escollida ara".

Simetritzar tot el cos respecte d'una cara duplica la peça; per exemple, passa d'un suport mig a un de complet.

## Missatges

- "Construeix primer una operació per copiar." o "Construeix primer un sòlid." Encara no hi ha res de sòlid per copiar.
- "Trieu les operacions a copiar." Totes les caselles **Operacions a copiar** estan desmarcades.
- "Extrude2 no té cap sòlid per copiar." Aquesta operació ha fallat o està suprimida.
- "Fillet1 canvia les arestes o les parets del cos; no es pot copiar. Copieu les operacions que fan sòlids (extrusions, revolucions, forats, importacions)." Els arrodoniments, els xamfrans i les buides no es poden fer en matriu ni en simetria; primer fes la matriu i després l'arrodoniment.
- "Encara no hi ha cap cos per simetritzar."

:::note
Les còpies d'una matriu no es poden saltar una a una, i una matriu no pot seguir una corba de croquis. Les matrius i les simetries de croquis encara no estan implementades: dibuixeu a mà la geometria repetida del croquis o useu **Afegeix per coordenades**.
:::
