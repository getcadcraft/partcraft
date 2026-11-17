---
title: Formas libres con Forma y elementos de superficie
summary: Empuje y tire de una jaula de control suave en el espacio de trabajo Forma, marque aristas como pliegues, use la simetría, compruebe y acabe la forma en un sólido o una superficie exacta, y después aplique parches, lofts, costuras, engrosamientos, superficies desplazadas, extensiones y recortes en Diseño. Qué es exacto y qué está aproximado.
keywords: forma, forma libre, spline en T, subdivisión, Catmull-Clark, jaula, bola cuadrangular, pliegue, simetría, cebra, curvatura, superficie, parche, rellenar, superficie de loft, coser, engrosar, superficie desplazada, extender, recortar
from: 0d326ef4
---

:::note
**Aún no disponible en esta versión.** Acabar una forma en la pieza y los elementos de superficie requieren un núcleo geométrico exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que aún no está disponible](topic:not-built-yet) explica qué hacer en su lugar. El resto de esta página describe cómo funcionan con un núcleo exacto.
:::

El espacio de trabajo **Forma** crea formas orgánicas. Edita una **jaula**, una malla gruesa de esquinas, aristas y caras. La forma es la superficie suave que controla la jaula (su superficie límite de Catmull–Clark), así que mover una esquina curva la superficie suavemente a su alrededor. Cuando tenga buen aspecto, **Acabado** añade la forma al historial de la pieza como una característica *Forma*, y el núcleo exacto la convierte en superficies B-spline verdaderas. Después puede redondearla, cortarla, unirla a otras características y exportarla como STEP.

Elija **Forma** en la lista **Espacio de trabajo**, a la izquierda de la barra de herramientas.

## Crear una jaula

1. Ajuste **Tamaño** y **Divisiones** en el panel derecho. Divisiones es el número de caras por lado.
2. Haga clic en {{ui:Caja}}, {{ui:Bola cuadrangular}} o {{ui:Plano}} en la barra de herramientas. El panel también tiene **Cilindro**, **Toro** y **Caras por clics**.

- Una **bola cuadrangular** es una jaula de caja ajustada de modo que sus puntos de esquina quedan sobre una esfera. Entre esos puntos la superficie queda un poco dentro de la esfera: unos 0.4 % menos de volumen con 2 divisiones.
- Un **plano** está abierto, así que se convierte en un cuerpo de superficie (véase «Elementos de superficie en Diseño» más abajo).
- **Caras por clics**: haga clic en 4 puntos del plano superior (de suelo) o en esquinas de la jaula para crear una cara. Las caras que comparten esquinas se unen. Pulse {{key:Enter}} tras 3 puntos para un triángulo, o {{key:Esc}} para detenerse.

Su jaula sin terminar se guarda con el archivo de pieza, así que puede cerrar el archivo y continuar más tarde.

## Seleccionar y mover

- Haga clic en una esquina, una arista o una cara de la jaula. {{key:Shift}}+clic añade o quita elementos. {{key:Esc}} borra la selección.
- Aparece un manipulador en el centro de la selección. Arrastre una flecha para mover a lo largo de ella, o un cuadrado para mover en ese plano. Pulse {{key:W}} para mover, {{key:E}} para girar y {{key:R}} para escalar, o use los botones del panel. {{ui:Manipulador}} en la barra de herramientas recorre estos modos.
- **Caída suave** (mm) también arrastra las esquinas dentro de esa distancia, desvaneciéndose suavemente hasta cero en el borde de esa distancia.
- Cada arrastre es un solo paso de deshacer: {{key:Ctrl+Z}} y {{key:Ctrl+Y}} funcionan como de costumbre.

## Modificar la jaula

Los botones **Modificar** del panel actúan sobre la selección:

| Botón | Qué hace |
|---|---|
| {{ui:Extruir}} | Las caras seleccionadas se desplazan una **Distancia de extrusión** a lo largo de sus normales, con nuevas caras laterales. Las aristas abiertas seleccionadas crean nuevas caras hacia fuera. |
| {{ui:Bucle de aristas}} / Insertar bucle de aristas | Divide el anillo de caras de cuatro lados que cruza la arista seleccionada, a mitad de camino. Más bucles dan curvas más ajustadas. |
| Insertar punto | Añade una esquina en el centro de la arista seleccionada. |
| Subdividir | Divide cada cara seleccionada en caras de cuatro lados alrededor de su centro. |
| Puente | Une dos caras seleccionadas, o dos aberturas (seleccione una arista abierta en cada una), con un tubo de caras. Ambas necesitan el mismo número de aristas. |
| Rellenar agujero | Cierra la abertura a través de la arista abierta seleccionada con una cara. |
| Soldar | Fusiona las esquinas seleccionadas en una, en su centro. |
| Aplanar | Mueve las esquinas seleccionadas al plano que mejor se ajusta a ellas. |
| Eliminar | Quita las caras, aristas (dos caras se fusionan) o esquinas seleccionadas. |

## Aristas vivas, simetría y visualización

- {{ui:Plegar}} hace vivas las aristas seleccionadas. El **Peso del pliegue** 10 es totalmente vivo. Un peso menor se mantiene vivo durante esos pasos de refinamiento y después se suaviza, lo que da un redondeo cerrado en lugar de un pliegue duro. Desplegar las vuelve suaves de nuevo. **Vértice vivo** fija una esquina para que la superficie pase por ella con un punto.
- **Simetría** refleja la jaula respecto a X, Y o Z = 0. Conserva el lado positivo, lo refleja y une las dos mitades. Después, una edición en cualquiera de los lados se hace en ambos. Las esquinas sobre el plano de simetría permanecen en él.
- {{ui:Visualización}} alterna entre **Suave** (la superficie que será la característica) y **Caja** (las propias caras de la jaula).
- **Análisis**: **Franjas cebra** reflejan una luz con franjas desde la vista actual. Se curvan suavemente sobre una superficie lisa y se rompen en un pliegue. **Curvatura media** sombrea las zonas convexas en rojo, las cóncavas en azul y las planas en blanco. Se mide sobre la malla mostrada con la fórmula de la cotangente, así que es una guía, no una medición.

## Comprobar y acabar

- **Comprobar exacta** convierte la jaula en el núcleo exacto sin cambiar su pieza. Informa de cuántos parches B-spline forma la jaula, cuántos son exactos, y si el resultado es un sólido cerrado y válido, y de su volumen.
- {{ui:Acabado}} añade una característica *Forma* al historial, o actualiza la forma que editaba, y le lleva de vuelta a Diseño. Una jaula cerrada se convierte en un sólido. Su **Operación** en el panel de Diseño puede ser Nuevo cuerpo, Unir, Cortar o Intersecar. Una jaula abierta se convierte en un cuerpo de superficie.
- Para cambiar una forma más tarde, selecciónela en el historial y haga clic en **Editar en Forma**. El cuerpo construido queda oculto mientras edita su jaula.
- **Descartar** elimina la jaula sin tocar el historial.

## Qué es exacto y qué está aproximado

Cada cara de cuatro lados de la jaula, refinada cuando hace falta, se convierte en un parche bicúbico B-spline.

- Donde cada esquina de una cara es *regular* (cuatro aristas se encuentran dentro de la superficie, o tres en una arista abierta o a lo largo de un pliegue), el parche es **exactamente** la superficie de subdivisión. Las pruebas lo comprueban hasta 1e-9 mm.
- Alrededor de un **punto extraordinario** (tres, cinco o más aristas que se encuentran, una esquina de una cara de tres o cinco lados, o el extremo de un pliegue) no hay parche polinómico exacto. Allí el parche toma el punto exacto y el plano tangente en esa esquina y las curvas de arista de los vecinos, así que los parches siguen uniéndose sin hueco. La continuidad tangencial a través de las aristas que se encuentran en el punto es aproximada. El panel de Forma y el de la característica dan el ángulo mayor, normalmente menor de 2°. Un **Nivel** más alto en el panel de la característica hace estos parches más pequeños y más cercanos.
- Las aristas vivas son aristas reales del sólido, así que puede redondearlas.
- Cada parche es su propia cara, así que una forma tiene muchas caras y se dibujan líneas entre ellas.

## Elementos de superficie en Diseño

Los comandos de superficie están en el menú {{ui:Más}} de Diseño, bajo las características. Necesitan el núcleo exacto. Los cuerpos de superficie se dibujan transparentes en azul. No forman parte del sólido hasta que los engrosa o los cose.

| Comando | Qué hace |
|---|---|
| Parche | Rellena un bucle cerrado de aristas. Primero haga {{key:Shift}}+clic en las aristas del sólido, o seleccione un cuerpo de superficie para rellenar su abertura. **Tangente (G1)** hace que el parche se una a esa superficie suavemente. |
| Superficie de loft | Una superficie a través de una cadena de curvas por croquis (abierta o cerrada), en orden del historial. |
| Coser | Cose cuerpos de superficie a lo largo de sus aristas compartidas. Si se cierran, el resultado es un sólido, con una Operación como las demás características. |
| Engrosar | Da a un cuerpo de superficie un grosor: a lo largo de su normal, contra ella o la mitad en cada sentido. El resultado es un sólido. |
| Superficie desplazada | Una copia de un cuerpo de superficie desplazada a lo largo de sus normales. La original se conserva. |
| Extender superficie | Hace crecer una superficie de una cara más allá de las aristas que elija. |
| {{ui:Recortar superficie}} | Corta un cuerpo de superficie donde lo atraviesa otro cuerpo de superficie o el sólido. Haga clic en **Elegir un punto en la pieza** para elegir qué parte conservar, o conservar todo lo demás. |

Coser, Engrosar, Extender y Recortar consumen el cuerpo de superficie del que parten. Las características posteriores usan el nuevo.

Límites actuales: las formas con varias piezas cerradas separadas no se convierten en un solo sólido; las zonas regulares no se fusionan en superficies mayores; y véase [Lo que aún no está disponible](topic:not-built-yet).
