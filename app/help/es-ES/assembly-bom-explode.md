---
title: Lista de piezas, vistas descompuestas y piezas móviles
summary: Asigne a las piezas de un ensamblaje un número, una descripción y un material; consulte y descargue la lista de materiales; cree vistas descompuestas con pasos o automáticamente; mueva a mano las piezas no unidas; defina límites de uniones y exporte todo el ensamblaje como STL, 3MF o lista de materiales.
keywords: lista de materiales, bom, lista de piezas, número de pieza, material, densidad, csv, vista descompuesta, descomponer, contraer, líneas de trayectoria, mover pieza, arrastrar, gizmo, trasladar, girar, límites de unión, exportación del ensamblaje, paso de ensamblaje, plano de ensamblaje, globos
from: ebc9f6f3
---

Estas herramientas están en el panel derecho de un ensamblaje (véase [Crear un ensamblaje con uniones](topic:build-assembly)).

## Propiedades de la pieza

Seleccione una pieza en la lista de la izquierda. En **Propiedades de la pieza** defina:

- **Número de pieza** (hasta 40 caracteres) y **Descripción** (hasta 200).
- **Material**: un material habitual con su densidad, o **Densidad personalizada…** para escribirla en g/cm³. El panel muestra entonces la masa de la pieza.

Las propiedades pertenecen a la pieza, así que todas sus copias las comparten. Se guardan en el archivo del ensamblaje.

## Lista de materiales

Con nada seleccionado ({{key:Esc}}), el panel muestra la **Lista de materiales**: una fila por pieza con su número de elemento, cantidad (cuántas copias), número de pieza, nombre, material y masa. Los números de elemento siguen el orden en que las piezas aparecen por primera vez en la lista. Las masas usan el volumen de cada pieza (del sólido facetado que construye el núcleo de malla, algo bajo en piezas redondas) y su material; una pieza sin material no tiene masa y, entonces, no hay total.

{{ui:Descargar CSV}} guarda la lista como archivo CSV (también **Exportar › Lista de materiales (CSV)**). Se abre en cualquier hoja de cálculo; el texto que empieza por = o + recibe un apóstrofo inicial para que la hoja de cálculo no lo ejecute como fórmula.

## Vistas descompuestas

Una vista descompuesta separa las piezas para las imágenes. Nunca cambia las uniones ni la posición real de las piezas: al guardar, en las comprobaciones de interferencias y en las exportaciones se usan las posiciones reales.

1. Con nada seleccionado, elija {{ui:Vista nueva}} en **Vistas descompuestas**.
2. En **Añadir un paso**, marque las piezas que mueve el paso, elija una **Dirección** (+X … −Z, la normal de una cara que pulse, o **Arrastrar una flecha en la vista**) y una **Distancia**, y después {{ui:Añadir paso}}. Con **Arrastrar**, arrastre la flecha y suelte: el paso toma la dirección y la distancia que arrastró.
3. Añada más pasos. Se reproducen uno tras otro.
4. Arrastre el control deslizante entre **Ensamblado** y **Descompuesto** para animar la vista. Líneas de trayectoria discontinuas van desde la posición de reposo de cada pieza hasta donde está ahora.

{{ui:Automática (radial)}} mueve todas las piezas, salvo la fija, alejándolas del centro del ensamblaje. {{ui:Automática (uniones)}} mueve cada pieza unida (con todo lo que cuelga de ella) a lo largo de la normal de la cara de su unión. Puede conservar varias vistas con nombre; elija una en **Vista**, o **Ensamblado** para volver a colocar las piezas. Las vistas se guardan en el archivo del ensamblaje.

## Mover una pieza a mano

Solo se mueve a mano una pieza sin unión con la pieza fija (la pieza fija no se mueve; las uniones colocan el resto). Selecciónela y, en **Mover a mano**:

- Escriba **ΔX, ΔY, ΔZ** y elija {{ui:Desplazamiento}}, o elija un eje y un **Ángulo** y {{ui:Girar}} (alrededor del centro de la pieza).
- {{ui:Arrastrar para desplazar}} muestra flechas en la pieza: arrastre una flecha para desplazarla por ese eje, o un cuadrado para desplazarla en un plano. {{ui:Arrastrar para girar}} muestra anillos para girarla. Cada arrastre es un paso de deshacer. {{key:Esc}} oculta las flechas.

## Límites de uniones

Seleccione una unión que se mueva y, en **Límites**, marque **Mantener … entre límites** para cualquiera de sus valores, y después defina su **Mínimo** y su **Máximo**. Cada valor se mantiene dentro de sus propios límites, su control deslizante cubre solo ese intervalo, y {{ui:Comprobar interferencias en el movimiento}} barre solo entre ellos. Una unión cilíndrica puede limitar su ángulo, su desplazamiento o ambos. Al cambiar el tipo de unión se eliminan los límites de los valores que el nuevo tipo no tiene.

## Exportar todo el ensamblaje

En un ensamblaje, el menú **Exportar** escribe todo el ensamblaje con cada pieza en el lugar donde está colocada:

- **STEP AP242 / AP214** y **Plano (PDF)** todavía no están disponibles en esta versión: necesitan un núcleo exacto, así que aparecen en gris. Exporte el STEP de cada pieza (sólido exacto) desde la pieza.
- **STL**: una malla con todas las piezas. **3MF**: cada pieza una vez, colocada una vez por copia.
- **Lista de materiales (CSV)**.

## Limitaciones

- El plano del ensamblaje y el STEP del ensamblaje todavía no están disponibles en esta versión (necesitan un núcleo exacto). Las vistas descompuestas sirven para imágenes en pantalla.
