---
title: Patrones y espejo
summary: Ojepeteĩ elementos fila-pe Lineal rupi, ojeru eje rehe Circular rupi, ha ojecopia elemento térã pieza entero plano ári Espejo rupi.
keywords: patrón, patrón lineal, patrón circular, matriz polar, matriz, espejo, simétrico, copiar elementos, círculo de agujeros, semilla, espejo de cuerpo
from: 702e9edb
---

Patrones ha espejos ojecopia elementos ojapo va'ekue. Copias oiko historial-pe: original ojecambia jave, copias avei oñemoambue.

Ojecopia ha'e elemento ojapóva: saliente patrón ojapo material; corte térã agujero patrón ojepe'a material. Patrones oñemboguejy jey ha oñemboespeja jey. Sólido STEP importado avei ojecopia karai; redondeo, chaflán ha vaciado ndojecopiavéi.

## Patrón lineal

1. Eiporavo elemento historial-pe ojecopiava (por ejemplo agujero térã corte). Ndojeporavo'ỹre, último sólido elemento ojeporu.
2. Eiporavo {{ui:Lineal}}. Mbohapy copia ojehechauka 20 mm X ryepy.
3. Panel derecho-pe emoĩ:

| Ajuste | Ojapóva | Predeterminado |
|---|---|---|
| **Elementos a copiar** | Marcá elemento opaite ojecopiáva. Solo ojehechauka elementos patrón hymba | El elemento seleccionado |
| **Dirección** | Eje X, Eje Y, Eje Z, línea térã línea de eje boceto anterior-gui, eje de revolución, térã arista ojeporavo | Eje X |
| **Espaciado (mm)** | Distancia vecino ha vecino apytépe | 20 |
| **Cantidad** | Total, **original ndive** (1 aja 1000) | 3 |
| **Invertir dirección** | Copias oho ambue tape | Desactivado |

### Usar arista como dirección

1. Ojapo clic arista recta pieza-pe vista-pe. Panel derecho ohechauka **Arista** ha iku'ã.
2. Eiporavo {{ui:Lineal}}: patrón oho arista rehe.

Térã seleccioná el patrón, escogé una arista, y eiporavo "Arista ojeporavo (usa la ojeporavo ko'ẽrõ)" **Dirección**-pe. Arista ojeporavo oñeñandu ndoho; ndojecambiái mboyve. Línea de boceto oho boceto rehe.

## Patrón circular

1. Eiporavo elemento ojecopiava (por ejemplo un agujero cerca del borde de un disco).
2. Eiporavo {{ui:Circular}}. Seis copias ojehechauka iguales hete'i.
3. Ajuste:

| Ajuste | Ojapóva | Predeterminado |
|---|---|---|
| **Elementos a copiar** | Como en Lineal | El elemento seleccionado |
| **Eje** | Eje X, Y térã Z, línea de boceto, eje de revolución, térã arista ojeporavo | Eje de la última revolución si hay; si no, eje Y |
| **Ángulo (°)** | 360 espacia copias iguales. Menos ojeporavo ángulo rupi; primera ha última tuichaiterei | 360 |
| **Cantidad** | Total, incluido el original | 6 |
| **Invertir dirección** | Oho ambue tape | Desactivado |

Ejes del mundo pasan por el origen. Para un disco no centrado en el origen, usá línea de eje de boceto o eje de una revolución.

### Ejemplo: los ocho agujeros de una brida

1. Revolucioná la brida (ver [Revolución de una pieza torneada](topic:revolve)) sobre el eje Y.
2. Bosquejá en la cara plana superior de la brida, poné un punto en el círculo de pernos, y hacé un agujero.
3. Con el agujero seleccionado, eiporavo {{ui:Circular}}. El eje ya es "Eje de Revolve1".
4. Ajustá **Cantidad** a `8`.

## Espejo

1. Seleccioná el elemento a espejar en el historial, o no seleccionés nada para espejar **el cuerpo entero hasta ahora**.
2. Eiporavo {{ui:Espejo}}. Espeja por el **plano Derecho**.

Para espejar el cuerpo entero por una cara de la pieza, ojapo clic primero en esa cara plana, después eiporavo {{ui:Espejo}}. (Ojapo clic en cara borra la selección del historial, así que siempre espeja el cuerpo entero.)

Ajustes en el panel derecho:

- **Espejo**: marcá **El cuerpo entero (hasta ahora)**, o desmarcá y marcá los elementos a copiar.
- **Plano del espejo**: Plano Frontal, Plano Superior, Plano Derecho, la cara que usa ahora ("Una cara de Extrude1" o "Un plano fijo"), o "La cara elegida ahora". Para espejar elementos elegidos por una cara: seleccioná Espejo en el historial, ojapo clic en la cara en la vista, y eiporavo "La cara elegida ahora".

Espejar el cuerpo entero por una cara duplica la pieza, por ejemplo de un soporte medio a uno completo.

## Mensajes

- "Construí un elemento para copiar primero." o "Construí un sólido primero." Todavía no hay nada sólido para copiar.
- "Elegí los elementos a copiar." Todas las casillas **Elementos a copiar** están vacías.
- "Extrude2 no tiene sólido para copiar." Ese elemento falló o está suprimido.
- "Fillet1 cambia las aristas o paredes del cuerpo; no se puede copiar. Copiá los elementos que hacen sólidos (extrusiones, revoluciones, agujeros, importaciones)." Los redondeos, chaflanes y vaciados no se pueden patronar ni espejar; hacé primero el patrón, después el redondeo.
- "Todavía no hay cuerpo para espejar."

:::note
Las copias de un patrón no se pueden saltear una por una, y un patrón no puede seguir una curva de boceto. Los patrones y espejos de boceto todavía no están hechos: dibujá la geometría repetida a mano o con **Agregar por coordenadas**.
:::
