---
title: Planos, ejes y puntos de referencia
summary: Cree planos desplazados de una cara, con un ángulo, por tres puntos, a mitad de camino, tangentes a un cilindro, perpendiculares a una arista o por una arista y un punto; ejes; puntos en el centro de aristas, cruces y esquinas de planos; croquice sobre ellos y úselos como ejes de revolución, direcciones de patrón y planos de simetría.
keywords: referencia, entre objetos, punto medio, punto de intersección, plano por arista y punto, plano de referencia, plano de trabajo, plano de construcción, plano de referencia de datos, plano desplazado, plano con ángulo, plano medio, plano tangente, eje de referencia, eje de construcción, eje de referencia de datos, punto de referencia, punto de trabajo, croquizar sobre plano
from: e7eb6fc1
---

La geometría de referencia es la estructura auxiliar sobre la que construye los elementos: un **plano** en el que croquizar donde no hay ninguna cara, un **eje** alrededor del cual revolucionar o hacer un patrón, y un **punto** en el que detener una extrusión. No tiene material propio. Los planos se muestran en la vista como cuadrados pálidos, los ejes como líneas discontinuas y los puntos como pequeñas cruces; los tres se incorporan al historial y siguen lo que los originó cuando cambia una medida anterior.

Están en el menú {{ui:Más}} del grupo Elementos: {{ui:Plano}}, {{ui:Eje}}, {{ui:Punto}}.

## Crear un plano

1. Haga clic en una cara plana, o en un plano base del historial, para partir de él (opcional).
2. Elija {{ui:Más}} y luego {{ui:Plano}}. Empieza como plano desplazado un 20 % del tamaño de la pieza respecto a lo que haya elegido (o respecto al plano superior).
3. En el panel derecho elija el **Tipo** y sus referencias:

| Tipo | Referencias | Valores |
|---|---|---|
| Desplazado de un plano o cara | **Desde plano** | **Distancia (mm)**, negativa para el otro lado |
| Con ángulo, por una arista o un eje | **Desde plano**, **Girar alrededor de** (un eje del mundo, un elemento de eje o una arista recta elegida) | **Ángulo (°)** |
| Por tres puntos | **Punto 1**, **Punto 2**, **Punto 3** | — |
| Plano medio entre dos | **Primer plano**, **Segundo plano** (paralelos: a mitad de camino; secantes: el plano que divide el ángulo en dos) | — |
| Tangente a un cilindro | **Cilindro** (una cara cilíndrica), **Punto cercano** (qué lado) | — |
| Perpendicular a una arista, en un punto | **Arista**, **En punto** (el plano pasa por el punto de la arista más cercano a él, y también por ese punto) | — |
| Por una arista y un punto | **Arista recta** (o un eje), **Por punto** | — |
| Perpendicular a una arista en su centro | **Arista** (a mitad de su longitud, perpendicular allí), o sin arista **Punto 1** y **Punto 2** (el plano a mitad de camino entre ellos) | — |

Cada referencia tiene un botón **Elegir**: púlselo y haga clic en la vista. Una ranura de plano admite un plano base, un plano de referencia o una cara plana; una ranura de punto admite el extremo de una arista (haga clic cerca de ese extremo), un elemento de punto o un lugar de una cara; una ranura de arista admite una arista. {{key:Esc}} cancela la elección. **Invertir la normal** da la vuelta al plano (hacia dónde mira un croquis sobre él).

En esta versión, una ranura que necesite una arista o una cara cilíndrica (Tangente a un cilindro, y las ranuras de Arista) responde "aún no construido": use puntos o un eje en su lugar.

## Croquizar sobre un plano

Seleccione el plano (en el historial o haciendo clic en su cuadrado en la vista) y elija {{ui:Croquis}}, o **Croquizar sobre él** en su panel. El croquis sigue al plano: si cambia la distancia del plano, el croquis y todos los elementos sobre él también se mueven.

## Ejes y puntos

- {{ui:Eje}}: por dos puntos, el eje de un cilindro o cono, donde se cruzan dos planos, a lo largo de una arista recta (o el eje de una arista circular), o perpendicular a una cara por un punto.
- {{ui:Punto}}: en coordenadas, en un vértice o punto de croquis, o en el centro de una arista circular, además de los puntos "entre objetos":

| Tipo de punto | Referencias |
|---|---|
| Centro de una arista (o entre dos puntos) | **Arista** (a mitad de su longitud, también para arcos y curvas), o sin arista **Punto 1** y **Punto 2** |
| Donde una arista o un eje corta una cara o un plano | **Arista** (recta o curva) o un eje, y **Corta plano** (un plano o cara plana) o **O una cara** (una cara plana o un cilindro). Un círculo corta un plano dos veces y una línea atraviesa un cilindro dos veces: **El otro corte** toma el segundo |
| Donde se cruzan tres planos | **Primer**, **Segundo** y **Tercer plano** (planos o caras planas) |

Cada uno falla con un mensaje claro cuando sus referencias no encajan: una línea paralela al plano, una línea que no toca el cilindro, una arista que no llega al plano, tres planos que no se cortan en un único punto, o un punto sobre la recta que debería fijar un plano.

Úselos en otros elementos:

| Dónde | Cómo |
|---|---|
| Revolución | **Eje**: elija el elemento de eje de la lista (debe estar en el plano del croquis) |
| Patrón circular | **Eje**: el elemento de eje |
| Patrón lineal | **Dirección**: un elemento de eje o un plano (su normal) |
| Simetría | **Plano de simetría**: un plano de referencia |
| Extrusión | **Final**: Hasta cara o plano, Hasta vértice (un elemento de punto). Aún no construido en esta versión (necesita un núcleo exacto) |
| Desmoldeo | **Plano neutro** |

## Cuando una referencia desaparece

Un plano creado a partir de una cara que ya no existe falla con un mensaje que la nombra, como "La cara sobre la que se apoya ya no está en Extrude1." Nunca se traslada a otra cara. Los croquis y elementos sobre él se marcan como "no construidos" hasta que elija una nueva referencia; el resto de la pieza sigue igual.

:::note
Esta versión construye todas las piezas con el núcleo de malla, que crea planos, ejes y puntos a partir de planos base, caras planas creadas por una Extrusión o una Revolución, puntos de croquis, coordenadas y otros elementos de referencia. Todo lo que necesite una arista, el extremo de una arista o una cara curva necesita un núcleo exacto: aún no construido en esta versión ("Usa una cara o arista del sólido, que solo un núcleo exacto puede encontrar: aún no construido en esta versión.").
:::
