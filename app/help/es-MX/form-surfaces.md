---
title: Formas libres con Forma y operaciones de superficie
summary: Empuje y jale una jaula de control suave en el espacio de trabajo Forma, marque aristas como pliegues, use simetría, compruebe y termine la forma como un sólido o una superficie exacta, y luego aplique parches, solevación, coser, engrosar, desfasar, extender y recortar superficies en Diseño. Qué es exacto y qué es aproximado.
keywords: forma, forma libre, T-spline, subdivisión, Catmull-Clark, jaula, bola cuadrangular, pliegue, simetría, cebra, curvatura, superficie, parche, rellenar, superficie por solevación, coser, engrosar, superficie desfasada, extender, recortar
from: 0d326ef4
---

:::note
**Todavía no incluido en esta versión.** Terminar una forma dentro de la pieza y las operaciones de superficie necesitan un núcleo geométrico exacto, que esta versión de PartCraft no tiene: construye cada pieza con el núcleo de malla. [Lo que aún no está incluido](topic:not-built-yet) explica qué hacer en su lugar. El resto de esta página describe su funcionamiento con un núcleo exacto.
:::

El espacio de trabajo **Forma** crea formas orgánicas. Edita una **jaula**, una malla gruesa de vértices, aristas y caras. La forma es la superficie suave que controla la jaula (su superficie límite de Catmull–Clark), así que al mover un vértice la superficie se curva suavemente a su alrededor. Cuando se ve bien, **Terminar** agrega la forma al historial de la pieza como una operación *Forma*, y el núcleo exacto la convierte en superficies B-spline verdaderas. Después puede redondearla, cortarla, unirla con otras operaciones y exportarla como STEP.

Elija **Forma** en la lista **Espacio de trabajo**, a la izquierda de la barra de herramientas.

## Iniciar una jaula

1. Establezca **Tamaño** y **Divisiones** en el panel derecho. Divisiones es cuántas caras tiene cada lado.
2. Haga clic en {{ui:Caja}}, {{ui:Bola cuadrangular}} o {{ui:Plano}} en la barra de herramientas. El panel también tiene **Cilindro**, **Toro** y **Caras por clics**.

- Una **bola cuadrangular** es una jaula de caja ajustada para que sus puntos de esquina queden sobre una esfera. Entre esos puntos la superficie queda un poco dentro de la esfera: alrededor de un 0.4 % menos de volumen con 2 divisiones.
- Un **plano** está abierto, así que se convierte en un cuerpo de superficie (véase "Operaciones de superficie en Diseño" más abajo).
- **Caras por clics**: haga clic en 4 puntos del plano superior (de suelo) o en esquinas de la jaula para crear una cara. Las caras que comparten vértices se unen. Pulse {{key:Enter}} después de 3 puntos para un triángulo, o {{key:Esc}} para detenerse.

Su jaula sin terminar se guarda con el archivo de la pieza, así que puede cerrar el archivo y continuar más tarde.

## Designar y mover

- Haga clic en un vértice, una arista o una cara de la jaula. {{key:Shift}}+clic agrega o quita elementos. {{key:Esc}} borra la selección.
- Un manipulador aparece en el centro de la selección. Arrastre una flecha para mover a lo largo de ella, o un cuadrado para mover en ese plano. Pulse {{key:W}} para mover, {{key:E}} para girar y {{key:R}} para escalar, o use los botones del panel. {{ui:Manipulador}} en la barra de herramientas recorre esas opciones.
- **Caída suave** (mm) también arrastra los vértices que están a esa distancia, desvaneciéndose suavemente hasta cero en el borde de esa distancia.
- Cada arrastre es un paso de deshacer: {{key:Ctrl+Z}} y {{key:Ctrl+Y}} funcionan como de costumbre.

## Cambiar la jaula

Los botones **Modificar** del panel actúan sobre la selección:

| Botón | Qué hace |
|---|---|
| {{ui:Extruir}} | Las caras elegidas se desplazan una **Distancia de extrusión**, a lo largo de sus normales, con nuevas caras laterales. Las aristas abiertas elegidas generan nuevas caras hacia afuera. |
| {{ui:Bucle de aristas}} / Insertar bucle de aristas | Divide el anillo de caras de cuatro lados que cruza la arista elegida, a la mitad. Más bucles dan curvas más ajustadas. |
| Insertar punto | Agrega un vértice en medio de la arista elegida. |
| Subdividir | Divide cada cara elegida en cuatro caras de cuatro lados alrededor de su centro. |
| Puente | Une dos caras elegidas, o dos aberturas (elija una arista abierta en cada una), con un tubo de caras. Ambas deben tener el mismo número de aristas. |
| Rellenar agujero | Cierra la abertura a través de la arista abierta elegida con una cara. |
| Soldar | Une los vértices elegidos en uno, en su punto medio. |
| Aplanar | Mueve los vértices elegidos sobre el plano que mejor se ajusta a ellos. |
| Borrar | Elimina las caras, aristas (dos caras se unen) o vértices elegidos. |

## Aristas vivas, simetría y visualización

- {{ui:Plegar}} hace vivas las aristas elegidas. **Peso del pliegue** 10 es totalmente viva. Un peso menor se mantiene viva durante esa cantidad de pasos de refinamiento y luego se suaviza, lo que da un redondeo cerrado en lugar de un pliegue duro. **Desplegar** las vuelve suaves otra vez. **Vértice vivo** fija un vértice para que la superficie pase por él con un punto.
- **Simetría** refleja la jaula en X, Y o Z = 0. Mantiene el lado positivo, lo refleja y une las dos mitades. Después, una edición en cualquiera de los lados se aplica a ambos. Los vértices sobre el plano de simetría permanecen en él.
- {{ui:Visualización}} alterna entre **Suave** (la superficie que será la operación) y **Caja** (las caras de la propia jaula).
- **Análisis**: las **Rayas de cebra** reflejan una luz con rayas desde la vista actual. Se curvan suavemente sobre una superficie suave y se cortan en un pliegue. La **Curvatura media** sombrea las zonas convexas en rojo, las cóncavas en azul y las planas en blanco. Se mide sobre la malla mostrada con la fórmula de la cotangente, así que es una guía, no una medición.

## Comprobar y terminar

- **Comprobar exacto** convierte la jaula en el núcleo exacto sin cambiar su pieza. Informa cuántos parches B-spline forma la jaula, cuántos son exactos y si el resultado es un sólido cerrado y válido, y su volumen.
- {{ui:Acabado}} agrega una operación *Forma* al historial, o actualiza la forma que editaba, y lo devuelve a Diseño. Una jaula cerrada se convierte en un sólido. Su **Operación** en el panel de Diseño puede ser Cuerpo nuevo, Unir, Cortar o Intersecar. Una jaula abierta se convierte en un cuerpo de superficie.
- Para cambiar una forma más tarde, selecciónela en el historial y haga clic en **Editar en Forma**. El cuerpo construido se oculta mientras edita su jaula.
- **Descartar** tira la jaula sin tocar el historial.

## Qué es exacto y qué es aproximado

Cada cara de cuatro lados de la jaula, refinada cuando hace falta, se convierte en un parche B-spline bicúbico.

- Donde cada vértice de una cara es *regular* (cuatro aristas se encuentran dentro de la superficie, o tres en una arista abierta o a lo largo de un pliegue), el parche es **exactamente** la superficie de subdivisión. Las pruebas lo verifican con una tolerancia de 1e-9 mm.
- Alrededor de un **punto extraordinario** (tres, cinco o más aristas que se encuentran, un vértice de una cara de tres o cinco lados, o el extremo de un pliegue) no existe un parche polinomial exacto. Allí el parche toma el punto exacto y el plano tangente en ese vértice y las curvas de arista de los vecinos, así que los parches siguen uniéndose sin hueco. La continuidad tangente a través de las aristas que se encuentran en ese punto es aproximada. El panel de Forma y el panel de la operación muestran el ángulo mayor, normalmente menor de 2°. Un **Nivel** más alto en el panel de la operación hace estos parches más pequeños y más cercanos.
- Los pliegues vivos son aristas reales del sólido, así que puede redondearlos.
- Cada parche es su propia cara, así que una forma tiene muchas caras y se dibujan líneas entre ellas.

## Operaciones de superficie en Diseño

Los comandos de superficie están en el menú {{ui:Más}} de Diseño, dentro de las operaciones. Necesitan el núcleo exacto. Los cuerpos de superficie se dibujan transparentes en azul. No forman parte del sólido hasta que los engrosa o los cose.

| Comando | Qué hace |
|---|---|
| Parche | Rellena un bucle cerrado de aristas. Primero haga {{key:Shift}}+clic en las aristas del sólido, o seleccione un cuerpo de superficie para rellenar su abertura. **Tangente (G1)** hace que el parche se una a esa superficie de forma suave. |
| Superficie por solevación | Una superficie a través de una cadena de curvas por croquis (abiertas o cerradas), en el orden del historial. |
| Coser | Cose cuerpos de superficie a lo largo de sus aristas compartidas. Si se cierran, el resultado es un sólido, con una Operación como las demás operaciones. |
| Engrosar | Da a un cuerpo de superficie un espesor: a lo largo de su normal, en contra de ella o la mitad en cada sentido. El resultado es un sólido. |
| Superficie desfasada | Una copia de un cuerpo de superficie desplazada a lo largo de sus normales. El original se conserva. |
| Extender superficie | Hace crecer una superficie de una sola cara más allá de las aristas que elija. |
| {{ui:Recortar superficie}} | Corta un cuerpo de superficie donde otro cuerpo de superficie, o el sólido, la atraviesa. Haga clic en **Elegir un punto en la pieza** para decidir qué pieza conservar, o conserve todo lo demás. |

Coser, Engrosar, Extender y Recortar usan el cuerpo de superficie desde el que empiezan. Las operaciones posteriores usan el nuevo.

Límites actuales: las formas con varias piezas cerradas separadas no se convierten en un solo sólido; las zonas regulares no se unen en superficies más grandes; y véase [Lo que aún no está incluido](topic:not-built-yet).
