---
title: Combinar, mover y escalar cuerpos; matrices por trayectoria
summary: Cree cuerpos separados y después únalos, córtelos o intersecte, muévalos, gírelos, alinéelos o cópielos, escálelos de forma uniforme o por X, Y y Z, y copie operaciones o cuerpos a lo largo de una curva.
keywords: cuerpo, cuerpos, multicuerpo, nuevo cuerpo, combinar, booleana, unir, cortar, intersecar, restar, unión, conservar herramientas, mover cuerpo, copiar cuerpo, girar cuerpo, alinear, trasladar, escalar, escala no uniforme, estirar, afín, matriz por trayectoria, matriz a lo largo de curva, matriz guiada por curva
from: 6b1ea820
---

:::note
**Todavía no disponible en esta versión.** Trabajar con varios cuerpos necesita un núcleo de geometría exacto, que esta versión de PartCraft no tiene: construye cada pieza con el núcleo de malla. [Lo que todavía no está disponible](topic:not-built-yet) indica qué hacer en su lugar. El resto de esta página describe el funcionamiento con un núcleo exacto.
:::

Una pieza puede tener más de un sólido. Cada sólido separado es un **cuerpo**. La mayoría de las operaciones añaden o quitan material de cada cuerpo que tocan; las herramientas de esta página trabajan con cuerpos completos que usted elige. Están en el menú {{ui:Más}} del grupo Operaciones: {{ui:Combinar}}, {{ui:Mover cuerpo}}, {{ui:Escalar cuerpo}} y {{ui:Matriz por trayecto}}. Todas necesitan el núcleo exacto (OpenCascade).

## Crear un cuerpo separado

Ponga la **Operación** de una extrusión o de una revolución en **Nuevo cuerpo** en su panel derecho (los barridos y las solevaciones también lo tienen). El nuevo sólido queda separado incluso donde se solapa con los demás. **Intersecar** conserva solo el solape de la nueva forma con lo que ya hay.

Los cuerpos llevan el nombre de la operación que los creó: "Extrude2". Una copia lleva el nombre de su original y de la operación que la copió: "Extrude2, copia 1 de Move1". Los nombres se mantienen al cambiar tamaños aguas arriba, así que las operaciones que usan un cuerpo siguen encontrándolo. Con dos o más cuerpos, el panel de la pieza (haga clic en un espacio vacío) los lista con sus volúmenes.

## Renombrar u ocultar un cuerpo

Haga clic en un espacio vacío de la vista para ver el panel de la pieza. Su lista de cuerpos (que aparece cuando la pieza tiene dos o más) tiene un cuadro de nombre y un botón {{ui:Ocultar}} en cada fila.

- **Renombrar:** escriba un nombre nuevo en el cuadro y pulse {{key:Enter}} o haga clic fuera. Todos los paneles lo usan entonces: Combinar, Mover cuerpo, las matrices. Borre el cuadro para volver al nombre de la operación que creó el cuerpo.
- **Ocultar:** haga clic en {{ui:Ocultar}} en su fila. El cuerpo sale de la vista y los clics lo atraviesan, así que puede elegir caras que quedan detrás. {{ui:Mostrar}} lo devuelve; {{ui:Mostrar todos}} devuelve todos los cuerpos ocultos.

Ocultar solo cambia la vista. Un cuerpo oculto se sigue construyendo, cuenta en el volumen y en las mediciones, y se guarda en las exportaciones STL, 3MF y STEP. Los nombres y los cuerpos ocultos se guardan en el archivo de la pieza, y cada cambio es un paso de {{ui:Deshacer}}.

## Combinar cuerpos

1. Haga {{key:Shift}}+clic en una cara del cuerpo **objetivo**, y después en una cara de cada cuerpo **herramienta**.
2. Elija {{ui:Más}} y después {{ui:Combinar}}.
3. En el panel derecho, elija la **Operación**:

| Operación | Resultado |
|---|---|
| Unir | El objetivo y las herramientas forman un solo cuerpo |
| Cortar | Las herramientas se quitan del objetivo |
| Intersecar | Solo se conserva lo que comparten el objetivo y todas las herramientas |

**Cuerpo objetivo** es el que conserva su nombre. Marque o desmarque **Cuerpos herramienta**, o use **Elegir en la vista** y haga clic en sus caras. **Conservar los cuerpos herramienta** deja también las herramientas en su sitio (útil para un molde y su macho). Si un cuerpo herramienta ya se gastó en una combinación anterior, el panel lo indica en lugar de elegir otro cuerpo.

## Mover o copiar un cuerpo

1. Elija {{ui:Más}} y después {{ui:Mover cuerpo}}. El cuerpo más reciente está marcado; marque los que quiera mover.
2. Elija el tipo de **Movimiento**:

| Movimiento | Qué define |
|---|---|
| Trasladar | **ΔX**, **ΔY**, **ΔZ** en milímetros |
| Punto a punto | **Desde** y **Hasta**: haga clic cerca del extremo de una arista, en un punto creado o en un lugar de una cara |
| Girar alrededor de un eje | **Eje** (X, Y, Z, un eje creado, o **Elegir**: una arista recta, un círculo o un cilindro) y **Ángulo (°)** |
| Alinear una cara con una cara o un plano | **Cara a mover** (una cara plana del cuerpo), **Sobre** (una cara plana o un plano) |

Alinear gira el cuerpo para que su cara quede sobre la otra cara, cara con cara, y después lo desliza solo a lo largo de la normal de esa cara. **Mismo sentido** lo gira al revés. **Copiar** conserva el original y añade la copia movida como cuerpo nuevo.

## Escalar un cuerpo

1. Elija {{ui:Más}} y después {{ui:Escalar cuerpo}}, y marque los cuerpos.
2. Escriba una **Escala**, o desmarque **Uniforme** y escriba **Escala X**, **Escala Y** y **Escala Z** (a lo largo de los ejes del mundo).
3. **Alrededor de** es el punto que no se mueve: el centro de la caja de los cuerpos, o un punto que elija.

Una escala uniforme es exacta. Una escala no uniforme convierte los círculos en elipses: un cilindro se convierte en un cilindro elíptico, que ninguna superficie analítica puede representar, así que las caras curvas pasan a ser superficies B-spline que se mantienen a menos de 0.0000004 mm de la forma exacta; las caras planas y las aristas rectas siguen siendo exactas. El panel indica qué ocurrió. Los factores de escala deben ser mayores que cero (para reflejar, use {{ui:Simetría}}).

## Copiar a lo largo de una trayectoria

1. Seleccione en el historial la operación que quiere copiar, o no seleccione nada para copiar el cuerpo más reciente.
2. Elija {{ui:Más}} y después {{ui:Matriz por trayecto}}. Se toma como trayectoria el croquis más reciente sin usar.
3. En el panel derecho defina:

| Ajuste | Qué hace |
|---|---|
| **Copiar** | Cuerpos (cada copia es un cuerpo nuevo) o Operaciones (unidas o cortadas como el original) |
| **Trayectoria** | Marque croquis, o **Elegir aristas del modelo**; las piezas deben unirse de extremo a extremo |
| **Cantidad** | Número total, incluido el original |
| **Separación** | Igual (repartida hasta el final de una trayectoria abierta, o por todo el recorrido de una cerrada) o una distancia fija |
| **Orientación** | Seguir la trayectoria (cada copia gira con ella) o Fija (las copias quedan paralelas) |
| **Invertir sentido** | Recorre la trayectoria en sentido contrario |

Las copias empiezan donde la trayectoria pasa más cerca del original y se separan según la longitud a lo largo de la curva.

Las matrices lineales y circulares también pueden copiar cuerpos: marque **Copiar cuerpos** en su panel y elija los cuerpos; cada copia es un cuerpo nuevo.

## Limitaciones

- Los cuerpos necesitan el núcleo exacto; el núcleo de malla conserva un solo sólido y lo indica.
- Una escala no uniforme convierte las caras curvas en aproximaciones B-spline cercanas (véase arriba), no en cilindros o conos exactos; las superficies de desfase todavía no se pueden escalar así.
- Seguir la trayectoria sobre una curva 3D que se retuerce lleva la copia sin retorcerla; en trayectorias planas el giro es exacto.
- Combinar funciona solo con sólidos. Los cuerpos de superficie se unen con {{ui:Coser}}.

Véase también [Planos, ejes y puntos de referencia](topic:reference-geometry) para puntos y planos "entre objetos", y [Operaciones de matriz y simetría](topic:patterns-mirror).
