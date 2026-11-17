---
title: Planos, ejes y puntos de referencia
summary: Haga planos desplazados de una cara, en ángulo, por tres puntos, a mitad de camino, tangentes a un cilindro, perpendiculares a una arista o por una arista y un punto; ejes; puntos en el centro de aristas, cruces y esquinas de planos; dibuje sobre ellos y úselos como ejes de revolución, direcciones de patrón y planos de simetría.
keywords: datum, entre objetos, punto medio, punto de intersección, plano por arista y punto, plano de referencia, plano de trabajo, plano de construcción, plano datum, plano desplazado, plano en ángulo, plano medio, plano tangente, eje de referencia, eje de construcción, punto de referencia, punto de trabajo, boceto sobre plano
from: e7eb6fc1
---

La geometría de referencia es el andamiaje sobre el que construye los elementos: un **plano** sobre el que dibujar donde no hay cara, un **eje** para revolucionar o hacer un patrón, un **punto** donde detener una extrusión. No tiene material propio. Los planos se ven en la vista como cuadrados pálidos, los ejes como líneas punteadas y los puntos como pequeñas cruces; los tres entran en el historial y siguen lo que se usó para crearlos cuando cambia una medida anterior.

Están en el menú {{ui:Más}} del grupo Elementos: {{ui:Plano}}, {{ui:Eje}}, {{ui:Punto}}.

## Crear un plano

1. Haga clic en una cara plana, o en un plano base del historial, para partir de él (opcional).
2. Elija {{ui:Más}}, luego {{ui:Plano}}. Empieza como plano desplazado un 20 % del tamaño de la pieza respecto de lo que eligió (o del plano superior).
3. En el panel derecho elija el **Tipo** y sus referencias:

| Tipo | Referencias | Números |
|---|---|---|
| Desplazado de un plano o cara | **Desde plano** | **Distancia (mm)**, negativa para el otro lado |
| En ángulo, por una arista o eje | **Desde plano**, **Girar alrededor de** (un eje del mundo, un elemento de eje o una arista recta elegida) | **Ángulo (°)** |
| Por tres puntos | **Punto 1**, **Punto 2**, **Punto 3** | — |
| Plano medio entre dos | **Primer plano**, **Segundo plano** (paralelos: a mitad de camino; que se cruzan: el plano que divide el ángulo) | — |
| Tangente a un cilindro | **Cilindro** (una cara cilíndrica), **Punto cercano** (de qué lado) | — |
| Perpendicular a una arista, en un punto | **Arista**, **En punto** (el plano pasa por el punto de la arista más cercano a él, y también por ese punto) | — |
| Por una arista y un punto | **Arista recta** (o un eje), **Punto de paso** | — |
| Perpendicular a una arista en su medio | **Arista** (a mitad de su longitud, perpendicular allí), o sin arista **Punto 1** y **Punto 2** (el plano a mitad de camino entre ellos) | — |

Cada referencia tiene un botón **Elegir**: púlselo y luego haga clic en la vista. Un espacio de plano acepta un plano base, un plano de referencia o una cara plana; un espacio de punto acepta el extremo de una arista (haga clic cerca de ese extremo), un elemento de punto o un lugar de una cara; un espacio de arista acepta una arista. {{key:Esc}} cancela una elección. **Invertir normal** da vuelta el plano (hacia qué lado mira un boceto sobre él).

En esta versión, un espacio que necesita una arista o una cara cilíndrica (Tangente a un cilindro, y los espacios de Arista) responde "todavía no construido": use puntos o un eje.

## Dibujar sobre un plano

Seleccione el plano (en el historial o haciendo clic en su cuadrado en la vista) y elija {{ui:Boceto}}, o **Dibujar sobre él** en su panel. El boceto sigue al plano: si cambia la distancia del plano, el boceto y todos los elementos sobre él también se mueven.

## Ejes y puntos

- {{ui:Eje}}: por dos puntos, el eje de un cilindro o cono, donde se cruzan dos planos, a lo largo de una arista recta (o el eje de una arista circular), o perpendicular a una cara por un punto.
- {{ui:Punto}}: en coordenadas, en un vértice o punto de boceto, o en el centro de una arista circular, y los puntos "entre objetos":

| Tipo de punto | Referencias |
|---|---|
| Medio de una arista (o entre dos puntos) | **Arista** (a mitad de su longitud, también para arcos y curvas), o sin arista **Punto 1** y **Punto 2** |
| Donde una arista o un eje cruza una cara o un plano | **Arista** (recta o curva) o un eje, y **Cruza plano** (un plano o cara plana) o **O una cara** (una cara plana o un cilindro). Un círculo cruza un plano dos veces, y una línea atraviesa un cilindro dos veces: **El otro cruce** toma el segundo |
| Donde se cruzan tres planos | **Primer**, **Segundo** y **Tercer plano** (planos o caras planas) |

Cada uno falla con un mensaje claro cuando sus referencias no encajan: una línea paralela al plano, una línea que no toca el cilindro, una arista que no llega al plano, tres planos que no se cruzan en un punto, o un punto sobre la línea que debía fijar un plano.

Úselos en otros elementos:

| Dónde | Cómo |
|---|---|
| Revolución | **Eje**: elija el elemento de eje de la lista (debe estar en el plano del boceto) |
| Patrón circular | **Eje**: el elemento de eje |
| Patrón lineal | **Dirección**: un elemento de eje, o un plano (su normal) |
| Simetría | **Plano de simetría**: un plano de referencia |
| Extrusión | **Fin**: Hasta cara o plano, Hasta vértice (un elemento de punto). Todavía no construido en esta versión (necesita un núcleo exacto) |
| Salida de molde | **Plano neutro** |

## Cuando una referencia desaparece

Un plano hecho desde una cara que ya no existe falla con un mensaje que la nombra, como "La cara sobre la que está ya no existe en Extrude1." Nunca se mueve a otra cara. Los bocetos y elementos sobre él se marcan "no construido" hasta que elija una nueva referencia; el resto de la pieza queda como estaba.

:::note
Esta versión construye todas las piezas con el núcleo de malla, que crea planos, ejes y puntos a partir de planos base, caras planas hechas por una Extrusión o Revolución, puntos de boceto, coordenadas y otros elementos de referencia. Todo lo que necesite una arista, el extremo de una arista o una cara curva necesita un núcleo exacto: todavía no construido en esta versión ("Usa una cara o arista del sólido, que solo un núcleo exacto puede encontrar: todavía no construido en esta versión.").
:::
