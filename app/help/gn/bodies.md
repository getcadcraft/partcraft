---
title: Combinar, mover y escalar cuerpos; patrones de trayectoria
summary: Hacé cuerpos separados, después unilos, cortalos o intersecalos, movelos, girarlos, alinearlos o copiarlos, escalarlos parejo o por X, Y y Z, y copiá elementos o cuerpos a lo largo de una curva.
keywords: cuerpo, cuerpos, multicuerpo, nuevo cuerpo, combinar, booleano, unir, cortar, intersecar, restar, unión, mantener herramientas, mover cuerpo, copiar cuerpo, girar cuerpo, alinear, trasladar, escalar, escala no uniforme, estirar, afín, patrón de trayectoria, patrón a lo largo de curva, matriz a lo largo de trayectoria, patrón guiado por curva
from: 6b1ea820
---

:::note
**Todavía no construido en esta versión.** Trabajar con varios cuerpos necesita un núcleo geométrico exacto, que esta versión de PartCraft no tiene: construye cada pieza con el núcleo de malla. [Qué todavía no está construido](topic:not-built-yet) dice qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Una pieza puede tener más de un sólido. Cada sólido separado es un **cuerpo**. La mayoría de los elementos agregan o cortan de cada cuerpo que tocan; las herramientas de esta página trabajan con cuerpos completos que elegís. Están en el menú {{ui:Más}} del grupo Elementos: {{ui:Combinar}}, {{ui:Mover cuerpo}}, {{ui:Escalar cuerpo}} y {{ui:Patrón de trayectoria}}. Todas necesitan el núcleo exacto (OpenCascade).

## Hacer un cuerpo separado

Poné **Operación** de una extrusión o revolución en **Nuevo cuerpo** en su panel derecho (barridos y lofts también lo tienen). El nuevo sólido queda separado aun donde se superpone con los demás. **Intersecar** mantiene solo la superposición de la forma nueva con lo que ya hay.

Los cuerpos reciben el nombre del elemento que los empezó: "Extrude2". Una copia recibe el nombre de su original y del elemento que la copió: "Extrude2, copia 1 de Move1". Los nombres quedan iguales cuando cambiás tamaños arriba, así los elementos que usan un cuerpo siguen encontrándolo. Con dos o más cuerpos, el panel de pieza (hacé clic en espacio vacío) los lista con sus volúmenes.

## Renombrar u ocultar un cuerpo

Hacé clic en espacio vacío de la vista para ver el panel de pieza. Su lista de cuerpos (se muestra cuando la pieza tiene dos o más cuerpos) tiene una casilla de nombre y un botón {{ui:Ocultar}} en cada fila.

- **Renombrar:** escribí un nombre nuevo en la casilla y presioná {{key:Enter}} o hacé clic afuera. Todos los paneles lo usan entonces: Combinar, Mover cuerpo, los patrones. Vaciá la casilla para volver al nombre del elemento que hizo el cuerpo.
- **Ocultar:** hacé clic en {{ui:Ocultar}} en su fila. El cuerpo sale de la vista y los clics lo atraviesan, así podés elegir caras detrás. {{ui:Mostrar}} lo devuelve; {{ui:Mostrar todo}} devuelve todos los cuerpos ocultos.

Ocultar solo cambia la vista. Un cuerpo oculto igual se construye, se cuenta en el volumen y las mediciones, y se guarda en exportaciones STL, 3MF y STEP. Nombres y cuerpos ocultos se guardan en el archivo de pieza, y cada cambio es un paso de {{ui:Deshacer}}.

## Combinar cuerpos

1. Shift+clic en una cara del cuerpo **objetivo**, después en una cara de cada cuerpo **herramienta**.
2. Elegí {{ui:Más}}, después {{ui:Combinar}}.
3. En el panel derecho elegí la **Operación**:

| Operación | Resultado |
|---|---|
| Unir | El objetivo y las herramientas quedan como un solo cuerpo |
| Cortar | Las herramientas se quitan del objetivo |
| Intersecar | Solo se mantiene lo que comparten el objetivo y todas las herramientas |

**Cuerpo objetivo** es el que conserva su nombre. Marcá o desmarcá **Cuerpos herramienta**, o usá **Elegir en la vista** y hacé clic en sus caras. **Mantener los cuerpos herramienta** deja también las herramientas en su lugar (útil para un molde y su macho). Si un cuerpo herramienta ya se usó en un Combinar anterior, el panel lo dice en vez de elegir otro cuerpo.

## Mover o copiar un cuerpo

1. Elegí {{ui:Más}}, después {{ui:Mover cuerpo}}. El cuerpo más nuevo está marcado; marcá los que querés mover.
2. Elegí el tipo de **Mover**:

| Mover | Qué ajustás |
|---|---|
| Trasladar | **ΔX**, **ΔY**, **ΔZ** en milímetros |
| Punto a punto | **Desde** y **Hasta**: hacé clic cerca del extremo de una arista, un elemento de punto, o un lugar de una cara |
| Girar alrededor de un eje | **Eje** (X, Y, Z, un elemento de eje, o **Elegir**: una arista recta, un círculo o un cilindro) y **Ángulo (°)** |
| Alinear una cara con una cara o plano | **Cara a mover** (una cara plana del cuerpo), **Sobre** (una cara plana o un plano) |

Alinear gira el cuerpo para que su cara quede sobre la otra cara, cara a cara, y después lo desliza solo a lo largo de la normal de esa cara. **Misma dirección** lo gira al otro lado. **Copiar** mantiene el original y agrega la copia movida como cuerpo nuevo.

## Escalar un cuerpo

1. Elegí {{ui:Más}}, después {{ui:Escalar cuerpo}}, y marcá los cuerpos.
2. Escribí una **Escala**, o desmarcá **Uniforme** y escribí **Escala X**, **Escala Y** y **Escala Z** (a lo largo de los ejes del mundo).
3. **Alrededor de** es el punto que queda fijo: el centro de la caja de los cuerpos, o un punto que elijas.

Una escala uniforme es exacta. Una escala no uniforme convierte círculos en elipses: un cilindro pasa a ser un cilindro elíptico, que ninguna superficie analítica sostiene, así que las caras curvas pasan a ser superficies B-spline que quedan dentro de 0.0000004 mm de la forma exacta; las caras planas y las aristas rectas quedan exactas. El panel dice qué pasó. Los factores de escala tienen que ser mayores que cero (para reflejar usá {{ui:Espejo}}).

## Copiar a lo largo de una trayectoria

1. Seleccioná el elemento a copiar en el historial, o no selecciones nada para copiar el cuerpo más nuevo.
2. Elegí {{ui:Más}}, después {{ui:Patrón de trayectoria}}. El boceto sin usar más nuevo se toma como trayectoria.
3. En el panel derecho ajustá:

| Ajuste | Qué hace |
|---|---|
| **Copiar** | Cuerpos (cada copia un cuerpo nuevo) o Elementos (unidos o cortados como el original) |
| **Trayectoria** | Marcá bocetos, o **Elegir aristas del modelo**; las partes tienen que unirse de punta a punta |
| **Cantidad** | Número total, incluido el original |
| **Espaciado** | Igual (repartido hasta el final de una trayectoria abierta, o todo alrededor de una cerrada) o una distancia fija |
| **Orientación** | Seguir la trayectoria (cada copia gira con ella) o Fija (las copias quedan paralelas) |
| **Invertir dirección** | Recorre la trayectoria en sentido contrario |

Las copias empiezan donde la trayectoria pasa más cerca del original y se separan por longitud a lo largo de la curva.

Los patrones lineales y circulares también pueden copiar cuerpos: marcá **Copiar cuerpos** en su panel y elegí los cuerpos; cada copia es un cuerpo nuevo.

## Límites

- Los cuerpos necesitan el núcleo exacto; el núcleo de malla mantiene un solo sólido y lo dice.
- Una escala no uniforme convierte caras curvas en aproximaciones B-spline cercanas (ver arriba), no cilindros ni conos exactos; las superficies desplazadas todavía no se pueden escalar así.
- Seguir la trayectoria en una curva 3D retorcida lleva la copia sin retorcerla; en trayectorias planas el giro es exacto.
- Combinar funciona solo con sólidos. Los cuerpos de superficie se unen con {{ui:Coser}}.

Ver también [Planos, ejes y puntos de referencia](topic:reference-geometry) para puntos y planos "entre objetos", y [Patrones y reflejo](topic:patterns-mirror).
