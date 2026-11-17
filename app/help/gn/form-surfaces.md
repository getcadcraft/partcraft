---
title: Formas libres con Form y funciones de superficie
summary: Empujá y tirá de una jaula de control suave en el espacio de trabajo Form, plegá aristas, usá simetría, verificá y terminá en un sólido o superficie exacta, y después aplicá parche, loft, coser, engrosar, desplazar, extender y recortar superficies en Design. Qué es exacto y qué está aproximado.
keywords: form, forma libre, t-spline, subdivisión, catmull-clark, jaula, quadball, pliegue, simetría, cebra, curvatura, superficie, parche, relleno, superficie loft, coser, engrosar, superficie desplazada, extender, recortar
from: 0d326ef4
---

:::note
**Todavía no construido en esta versión.** Terminar una forma dentro de la pieza, y las funciones de superficie, necesitan un kernel geométrico exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el kernel de malla. [Lo que todavía no está construido](topic:not-built-yet) explica qué hacer en cambio. El resto de esta página describe cómo funcionan con un kernel exacto.
:::

El espacio de trabajo **Form** hace formas orgánicas. Editás una **jaula**, una malla gruesa de esquinas, aristas y caras. La forma es la superficie suave que controla la jaula (su superficie límite de Catmull–Clark), así que mover una esquina dobla la superficie suavemente a su alrededor. Cuando se ve bien, **Terminar** la agrega al historial de la pieza como una función *Form*, y el kernel exacto la convierte en superficies B-spline verdaderas. Después podés redondearla, cortarla, unirla a otras funciones y exportarla como STEP.

Elegí **Form** en la lista **Espacio de trabajo** a la izquierda de la barra de herramientas.

## Empezá una jaula

1. Poné **Tamaño** y **Divisiones** en el panel derecho. Divisiones es cuántas caras tiene cada lado.
2. Hacé clic en {{ui:Caja}}, {{ui:Quadball}} o {{ui:Plano}} en la barra de herramientas. El panel también tiene **Cilindro**, **Toro** y **Caras por clics**.

- Un **quadball** es una jaula de caja ajustada para que sus puntos de esquina queden sobre una esfera. Entre esos puntos la superficie queda un poco dentro de la esfera: unos 0,4 % menos de volumen con 2 divisiones.
- Un **plano** es abierto, así que se convierte en un cuerpo de superficie (ver "Funciones de superficie en Design" más abajo).
- **Caras por clics**: hacé clic en 4 puntos sobre el plano superior (de suelo) o en esquinas de la jaula para crear una cara. Las caras que comparten esquinas se unen. Apretá {{key:Enter}} después de 3 puntos para un triángulo, o {{key:Esc}} para parar.

Tu jaula sin terminar se guarda con el archivo de la pieza, así que podés cerrar el archivo y seguir más tarde.

## Elegir y mover

- Hacé clic en una esquina, una arista o una cara de la jaula. {{key:Shift}}+clic agrega o quita elementos. {{key:Esc}} borra la selección.
- Un gizmo aparece en el medio de la selección. Arrastrá una flecha para moverte a lo largo de ella, o un cuadrado para moverte en ese plano. Apretá {{key:W}} para mover, {{key:E}} para rotar y {{key:R}} para escalar, o usá los botones del panel. {{ui:Gizmo}} en la barra de herramientas recorre esos modos.
- **Caída suave** (mm) también arrastra las esquinas dentro de esa distancia, desvaneciéndose suavemente hasta cero en el borde de esa distancia.
- Cada arrastre es un paso de deshacer: {{key:Ctrl+Z}} y {{key:Ctrl+Y}} funcionan como siempre.

## Cambiar la jaula

Los botones **Modificar** del panel actúan sobre la selección:

| Botón | Qué hace |
|---|---|
| {{ui:Extruir}} | Las caras elegidas se mueven hacia afuera según **Distancia de extrusión**, a lo largo de sus normales, con nuevas caras laterales. Las aristas abiertas elegidas crean nuevas caras hacia afuera. |
| {{ui:Arista loop}} / Insertar arista loop | Divide el anillo de caras de cuatro lados que cruza la arista elegida, a mitad de camino. Más lazos dan curvas más ajustadas. |
| Insertar punto | Agrega una esquina en el medio de la arista elegida. |
| Subdividir | Divide cada cara elegida en caras de cuatro lados alrededor de su centro. |
| Puente | Une dos caras elegidas, o dos aberturas (elegí una arista abierta en cada una), con un tubo de caras. Ambas necesitan la misma cantidad de aristas. |
| Rellenar agujero | Cierra la abertura a través de la arista abierta elegida con una cara. |
| Soldar | Une las esquinas elegidas en una, en su medio. |
| Aplanar | Mueve las esquinas elegidas al plano que mejor se ajusta a ellas. |
| Eliminar | Quita las caras, aristas (dos caras se unen) o esquinas elegidas. |

## Aristas vivas, simetría y visualización

- {{ui:Pliegue}} vuelve vivas las aristas elegidas. **Peso del pliegue** 10 es totalmente vivo. Un peso menor se mantiene vivo durante esa cantidad de pasos de refinamiento y después se suaviza, lo que da un redondeo cerrado en vez de un doblez duro. **Desplegar** las vuelve suaves otra vez. **Vértice vivo** fija una esquina para que la superficie pase por ella con un punto.
- **Simetría** refleja la jaula en X, Y o Z = 0. Mantiene el lado positivo, lo refleja y une las dos mitades. Después de eso, una edición en cualquiera de los lados se aplica en ambos. Las esquinas sobre el plano de reflejo se quedan en él.
- {{ui:Visualización}} alterna entre **Suave** (la superficie que será la función) y **Caja** (las caras de la jaula en sí).
- **Análisis**: **Rayas cebra** reflejan una luz rayada desde la vista actual. Se doblan suavemente sobre una superficie suave y se cortan en un pliegue. **Curvatura media** sombrea las zonas convexas en rojo, las cóncavas en azul y las planas en blanco. Se mide sobre la malla mostrada con la fórmula de la cotangente, así que es una guía, no una medición.

## Verificar y terminar

- **Verificar exacto** convierte la jaula en el kernel exacto sin cambiar tu pieza. Informa cuántos parches B-spline forma la jaula, cuántos son exactos, y si el resultado es un sólido cerrado y válido y su volumen.
- {{ui:Acabado}} agrega una función *Form* al historial, o actualiza la forma que estabas editando, y te lleva de vuelta a Design. Una jaula cerrada se convierte en un sólido. Su **Operación** en el panel de Design puede ser Cuerpo nuevo, Unir, Cortar o Intersectar. Una jaula abierta se convierte en un cuerpo de superficie.
- Para cambiar una forma después, seleccionala en el historial y hacé clic en **Editar en Form**. El cuerpo construido queda oculto mientras editás su jaula.
- **Descartar** tira la jaula sin tocar el historial.

## Qué es exacto y qué está aproximado

Cada cara de cuatro lados de la jaula, refinada cuando hace falta, se convierte en un parche bicúbico B-spline.

- Donde cada esquina de una cara es *regular* (cuatro aristas se encuentran dentro de la superficie, o tres en una arista abierta o a lo largo de un pliegue), el parche es **exactamente** la superficie de subdivisión. Las pruebas lo verifican con una precisión de 1e-9 mm.
- Alrededor de un **punto extraordinario** (tres, cinco o más aristas que se encuentran, una esquina de una cara de tres o cinco lados, o el extremo de un pliegue) no hay un parche polinómico exacto. Allí el parche toma el punto exacto y el plano tangente en esa esquina y las curvas de arista de los vecinos, así que los parches igual se encuentran sin hueco. La continuidad tangencial a lo largo de las aristas que se encuentran en el punto es aproximada. El panel de Form y el panel de la función dan el ángulo mayor, normalmente menor a 2°. Un **Nivel** más alto en el panel de la función hace estos parches más chicos y más cercanos.
- Los pliegues vivos son aristas reales del sólido, así que podés redondearlos.
- Cada parche es su propia cara, así que una forma tiene muchas caras y se dibujan líneas entre ellas.

## Funciones de superficie en Design

Los comandos de superficie están en el menú {{ui:Más}} de Design, dentro de las funciones. Necesitan el kernel exacto. Los cuerpos de superficie se dibujan transparentes en azul. No forman parte del sólido hasta que los engrosés o los cosas.

| Comando | Qué hace |
|---|---|
| Parche | Rellena un bucle cerrado de aristas. Primero hacé {{key:Shift}}+clic en las aristas del sólido, o elegí un cuerpo de superficie para rellenar su abertura. **Tangente (G1)** hace que el parche se una suavemente a esa superficie. |
| Superficie loft | Una superficie a través de una cadena de curvas por boceto (abiertas o cerradas), en el orden del historial. |
| Coser | Cose cuerpos de superficie a lo largo de sus aristas compartidas. Si se cierran, el resultado es un sólido, con una Operación como las demás funciones. |
| Engrosar | Le da a un cuerpo de superficie un espesor: a lo largo de su normal, en contra de ella, o la mitad hacia cada lado. El resultado es un sólido. |
| Superficie desplazada | Una copia de un cuerpo de superficie movida a lo largo de sus normales. La original se mantiene. |
| Extender superficie | Hace crecer una superficie de una cara más allá de las aristas que elijas. |
| Recortar superficie | Corta un cuerpo de superficie donde otro cuerpo de superficie, o el sólido, la cruza. Hacé clic en **Elegir un punto en la pieza** para elegir qué pieza mantener, o mantené todo lo demás. |

Coser, Engrosar, Extender y Recortar usan el cuerpo de superficie desde el que empiezan. Las funciones posteriores usan el nuevo.

Límites actuales: las formas con varias piezas cerradas separadas no se convierten en un solo sólido; las zonas regulares no se unen en superficies más grandes; y ver [Lo que todavía no está construido](topic:not-built-yet).
