---
title: Lista de piezas, vistas explosionadas y piezas en movimiento
summary: Asigne a las piezas del ensamblaje un número, una descripción y un material; lea y descargue la lista de materiales; cree vistas explosionadas con pasos o automáticamente; mueva a mano las piezas que no están unidas; defina límites de unión; y exporte todo el ensamblaje como STL, 3MF o lista de materiales.
keywords: bom, lista de materiales, lista de piezas, número de pieza, material, densidad, csv, vista explosionada, descomponer, contraer, líneas de rastro, mover pieza, arrastrar, gizmo, traslación, girar, límites de unión, exportar ensamblaje, paso de ensamblaje, dibujo de ensamblaje, globos
from: ebc9f6f3
---

Estas herramientas están en el panel derecho de un ensamblaje (vea [Construir un ensamblaje](topic:build-assembly)).

## Propiedades de la pieza

Seleccione una pieza en la lista de la izquierda. En **Propiedades de la pieza** defina:

- **Número de pieza** (hasta 40 caracteres) y **Descripción** (hasta 200).
- **Material**: un material común con su densidad, o **Densidad personalizada…** para escribir una en g/cm³. El panel muestra entonces la masa de la pieza.

Las propiedades pertenecen a la pieza, así que todas las copias las comparten. Se guardan en el archivo del ensamblaje.

## Lista de materiales

Sin nada seleccionado ({{key:Esc}}), el panel muestra la **Lista de materiales**: una fila por pieza con su número de elemento, cantidad (cuántas copias), número de pieza, nombre, material y masa. Los números de elemento siguen el orden en que las piezas aparecen por primera vez en la lista. Las masas usan el volumen de cada pieza (del sólido facetado que construye el núcleo de malla, algo bajo en piezas redondas) y su material; una pieza sin material no tiene masa y, entonces, no hay total.

{{ui:Descargar CSV}} guarda la lista como archivo CSV (también **Exportar › Lista de materiales (CSV)**). Se abre en cualquier hoja de cálculo; el texto que empieza con = o + recibe un apóstrofo al inicio para que la hoja de cálculo no lo ejecute como fórmula.

## Vistas explosionadas

Una vista explosionada separa las piezas para las imágenes. Nunca cambia las uniones ni la posición real de las piezas: al guardar, en las comprobaciones de interferencias y en las exportaciones se usan las posiciones reales.

1. Sin nada seleccionado, elija {{ui:Vista nueva}} en **Vistas explosionadas**.
2. En **Agregar un paso**, marque las piezas que mueve el paso, elija una **Dirección** (+X … −Z, la normal de una cara en la que haga clic, o **Arrastrar una flecha en la vista**) y una **Distancia**, y luego {{ui:Agregar paso}}. Con **Arrastrar**, arrastre la flecha y suelte: el paso toma la dirección y la distancia que arrastró.
3. Agregue más pasos. Se reproducen uno tras otro.
4. Arrastre el control deslizante entre **Ensamblado** y **Explosionado** para animar la vista. Líneas de rastro discontinuas van desde la posición de reposo de cada pieza hasta donde está ahora.

{{ui:Automática (radial)}} aleja de la parte media del ensamblaje todas las piezas, excepto la pieza fija. {{ui:Automática (uniones)}} aleja cada pieza unida (con todo lo que esté unido debajo de ella) a lo largo de la normal de la cara de su unión. Puede guardar varias vistas con nombre; elija una en **Vista**, o **Ensamblado** para volver a colocar las piezas. Las vistas se guardan en el archivo del ensamblaje.

## Mover una pieza a mano

Solo una pieza sin unión con la pieza fija se mueve a mano (la pieza fija está fija; las uniones colocan el resto). Selecciónela y, en **Mover a mano**:

- Escriba **ΔX, ΔY, ΔZ** y elija {{ui:Desplazamiento}}, o elija un eje y un **Ángulo** y {{ui:Girar}} (alrededor del centro de la pieza).
- {{ui:Arrastrar para desplazar}} muestra flechas en la pieza: arrastre una flecha para desplazarla sobre ese eje, o un cuadrado para desplazarla en un plano. {{ui:Arrastrar para girar}} muestra anillos para girarla. Cada arrastre es un paso de {{ui:Deshacer}}. {{key:Esc}} oculta las flechas.

## Límites de unión

Seleccione una unión que se mueva y, en **Límites**, marque **Mantener … entre límites** para cualquiera de sus valores; luego defina su **Mínimo** y su **Máximo**. Cada valor se mantiene dentro de sus propios límites, su control deslizante cubre solo ese rango, y {{ui:Comprobar interferencias en el movimiento}} barre solo entre ellos. Una unión cilíndrica puede limitar su ángulo, su desfase o ambos. Al cambiar el tipo de unión se eliminan los límites de los valores que el nuevo tipo no tiene.

## Exportar todo el ensamblaje

En un ensamblaje, el menú **Exportar** escribe todo el ensamblaje con cada pieza donde está colocada:

- **STEP AP242 / AP214** y **Dibujo (PDF)** todavía no están construidos en esta versión: necesitan un núcleo exacto, por eso aparecen en gris. Exporte el STEP de cada pieza (sólido exacto) desde la pieza.
- **STL**: una sola malla con todas las piezas. **3MF**: cada pieza una vez, colocada una vez por copia.
- **Lista de materiales (CSV)**.

## Límites

- El dibujo del ensamblaje y el STEP del ensamblaje todavía no están construidos en esta versión (necesitan un núcleo exacto). Las vistas explosionadas son para imágenes en pantalla.
