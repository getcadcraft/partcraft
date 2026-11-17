---
title: Planos, ejes y puntos de referencia
summary: Cree planos desfasados de una cara, con ángulo, por tres puntos, a mitad de camino, tangentes a un cilindro, perpendiculares a una arista o por una arista y un punto; ejes; puntos en el medio de aristas, cruces y esquinas de planos; dibuje croquis sobre ellos y úselos como ejes de revolución, direcciones de patrón y planos de simetría.
keywords: referencia, entre objetos, punto medio, punto de intersección, plano por arista y punto, plano de referencia, plano de trabajo, plano de construcción, plano de referencia, plano desfasado, plano con ángulo, plano medio, plano tangente, eje de referencia, eje de construcción, eje de referencia, punto de referencia, punto de trabajo, croquis sobre plano
from: e7eb6fc1
---

La geometría de referencia es el andamio sobre el que construye operaciones: un **plano** donde dibujar un croquis si no hay cara, un **eje** para revolucionar o hacer patrones, un **punto** donde detener una extrusión. No tiene material propio. Los planos se muestran en la vista como cuadrados pálidos, los ejes como líneas discontinuas y los puntos como pequeñas cruces; los tres forman parte del historial y siguen a lo que los originó cuando cambia una medida anterior.

Están en el menú {{ui:Más}} del grupo Operaciones: {{ui:Plano}}, {{ui:Eje}}, {{ui:Punto}}.

## Crear un plano

1. Haga clic en una cara plana, o en un plano base del historial, para partir de él (opcional).
2. Elija {{ui:Más}} y luego {{ui:Plano}}. Empieza como un plano desfasado a 20 % del tamaño de la pieza del elemento elegido (o del plano superior).
3. En el panel derecho elija el **Tipo** y sus referencias:

| Tipo | Referencias | Números |
|---|---|---|
| Desfase desde un plano o cara | **Desde plano** | **Distancia (mm)**, negativa para el otro lado |
| Con ángulo, por una arista o eje | **Desde plano**, **Girar alrededor de** (un eje del mundo, una operación de eje o una arista recta elegida) | **Ángulo (°)** |
| Por tres puntos | **Punto 1**, **Punto 2**, **Punto 3** | — |
| Plano medio entre dos | **Primer plano**, **Segundo plano** (paralelos: a mitad de camino; concurrentes: el plano que divide el ángulo en dos) | — |
| Tangente a un cilindro | **Cilindro** (una cara cilíndrica), **Punto cercano** (qué lado) | — |
| Perpendicular a una arista, en un punto | **Arista**, **En punto** (el plano pasa por el punto de la arista más cercano a él, y también por el punto) | — |
| Por una arista y un punto | **Arista recta** (o un eje), **Por punto** | — |
| Perpendicular a una arista en su punto medio | **Arista** (a mitad de su longitud, perpendicular a ella en ese punto), o sin arista **Punto 1** y **Punto 2** (el plano a mitad de camino entre ellos) | — |

Cada referencia tiene un botón **Seleccionar**: elíjalo y luego haga clic en la vista. Un campo de plano acepta un plano base, un plano de referencia o una cara plana; un campo de punto acepta el extremo de una arista (haga clic cerca de ese extremo), una operación de punto o un lugar de una cara; un campo de arista acepta una arista. {{key:Esc}} cancela una selección. **Invertir normal** da la vuelta al plano (hacia dónde mira un croquis sobre él).

En esta versión, un campo que necesita una arista o una cara cilíndrica (Tangente a un cilindro, y los campos de arista) responde "todavía no construido": use puntos o un eje en su lugar.

## Dibujar un croquis sobre un plano

Seleccione el plano (en el historial o haciendo clic en su cuadrado en la vista) y elija {{ui:Croquis}}, o **Croquis sobre él** en su panel. El croquis sigue al plano: si cambia la distancia del plano, el croquis y todas las operaciones sobre él también se desplazan.

## Ejes y puntos

- {{ui:Eje}}: por dos puntos, el eje de un cilindro o cono, donde se cruzan dos planos, a lo largo de una arista recta (o el eje de una arista circular), o perpendicular a una cara por un punto.
- {{ui:Punto}}: en coordenadas, en un vértice o punto de croquis, o en el centro de una arista circular, además de los puntos "entre objetos":

| Tipo de punto | Referencias |
|---|---|
| Punto medio de una arista (o entre dos puntos) | **Arista** (a mitad de su longitud, también para arcos y curvas), o sin arista **Punto 1** y **Punto 2** |
| Donde una arista o eje se encuentra con una cara o plano | **Arista** (recta o curva) o un eje, y **Cruza plano** (un plano o cara plana) o **O una cara** (una cara plana o un cilindro). Un círculo cruza un plano dos veces y una línea atraviesa un cilindro dos veces: **El otro cruce** toma el segundo |
| Donde se encuentran tres planos | **Primer**, **Segundo** y **Tercer plano** (planos o caras planas) |

Cada uno falla con un mensaje claro cuando sus referencias no encajan: una línea paralela al plano, una línea que no toca el cilindro, una arista que no llega al plano, tres planos que no se encuentran en un punto, un punto sobre la línea con la que debería fijar un plano.

Úselos en otras operaciones:

| Dónde | Cómo |
|---|---|
| Revolución | **Eje**: elija la operación de eje de la lista (debe estar en el plano del croquis) |
| Patrón circular | **Eje**: la operación de eje |
| Patrón lineal | **Dirección**: una operación de eje, o un plano (su normal) |
| Simetría | **Plano de simetría**: un plano de referencia |
| Extrusión | **Fin**: Hasta cara o plano, Hasta vértice (una operación de punto). Todavía no construido en esta versión (requiere un núcleo exacto) |
| Ángulo de salida | **Plano neutro** |

## Cuando una referencia desaparece

Un plano creado a partir de una cara que ya no existe falla con un mensaje que la nombra, por ejemplo "La cara sobre la que se apoya ya no está en Extrude1." Nunca se mueve a otra cara. Los croquis y operaciones sobre él se marcan como "no construidos" hasta que elija una nueva referencia; el resto de la pieza sigue como estaba.

:::note
Esta versión construye cada pieza con el núcleo de malla, que crea planos, ejes y puntos a partir de planos base, caras planas creadas por una Extrusión o Revolución, puntos de croquis, coordenadas y otras operaciones de referencia. Todo lo que necesita una arista, el extremo de una arista o una cara curva necesita un núcleo exacto: todavía no construido en esta versión ("Usa una cara o arista del sólido, que solo un núcleo exacto puede encontrar: todavía no construido en esta versión.").
:::
