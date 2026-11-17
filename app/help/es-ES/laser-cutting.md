---
title: Enviar un dibujo a un láser
summary: Elija qué hace cada capa (cortar, rayar, grabar, rellenar, imagen), vea una vista previa de los movimientos del cabezal, guarde el G-code en modo láser de GRBL o envíelo desde el navegador tras enmarcar el trabajo.
keywords: láser, cortadora láser, grabadora láser, GRBL, G-code, grabar, rellenar, tramado, grabado de imagen, rayar, cortar, Web Serial, Linux, enmarcar el trabajo, potencia, velocidad, pasadas
from: 327b3c46
---

El panel {{ui:Láser}} convierte las capas de un dibujo en un programa para un láser que funciona con GRBL (la mayoría de los controladores de diodo y de CO2 de aficionados y de talleres pequeños). En PartCraft, elija {{ui:Exportar}} › {{ui:Programa láser…}} y después {{ui:Añadir contornos de un DXF…}}: los contornos y los agujeros entran en la capa CUT. Los desarrollos de chapa metálica (con sus líneas de plegado en la capa BEND) necesitan el núcleo exacto, que esta versión no tiene. Los ajustes se guardan en el archivo de la pieza o del ensamblaje.

:::warning
Pruebe cada ajuste primero en material de desecho, use gafas de protección adecuadas para su láser, mantenga la tapa cerrada allí donde la haya y no deje nunca un láser en marcha sin vigilancia. Los números con los que empieza una capa son marcadores de posición, no recomendaciones para ningún material.
:::

## Elija qué hace cada capa

Cada capa del dibujo es una fila. {{ui:Hace}} la define como **Cortar**, **Rayar**, **Grabar líneas**, **Rellenar formas**, **Grabar imagen** o **No enviar**, con una {{ui:Potencia %}}, una {{ui:Velocidad mm/min}} y un número de {{ui:Pasadas}}.

- **Rellenar** quema el interior de las formas cerradas con líneas separadas {{ui:Separación de líneas}}, con un {{ui:Ángulo}}, en ambos sentidos o en uno; el relleno cruzado añade una segunda pasada a 90°. Con un sobrerrecorrido, el cabezal ya va a velocidad cuando el láser se enciende. Una forma con un agujero queda abierta en el agujero.
- **Grabar imagen** convierte una imagen en puntos (Floyd–Steinberg, Atkinson, ordenado, o blanco y negro simple con un umbral) o, con *Niveles de gris*, en potencia variable.
- Orden: primero imágenes y rellenos, después grabado de líneas, luego rayados y por último cortes, para que una pieza cortada no se mueva mientras se graba. Dentro de una capa, las trayectorias van **de dentro afuera** (un agujero antes que la placa en la que está), siempre con la más cercana a continuación.

## Vista previa y guardado

La vista previa dibuja lo que hace el cabezal: las líneas de quemado en color, los movimientos rápidos en gris y un recuadro verde alrededor de todo lo que quema. Debajo aparecen el tamaño, la longitud de quemado y una estimación de tiempo (sin aceleración; una máquina real tarda más). {{ui:Guardar G-code…}} escribe G-code en modo láser de GRBL: `$32=1`, `M4` (o `M3`) con valores S, movimientos `G0` y `G1`, y `M5` al final. X0 Y0 es la esquina inferior izquierda del trabajo, salvo que elija el origen del dibujo: sitúe ahí el cero de trabajo de su máquina. El G-code sigue el modo láser documentado de GRBL; todavía no se ha probado en un láser real.

## Envío desde el navegador

En Chrome y Edge, {{ui:Conectar…}} le pide que elija el puerto USB del láser. Nada se conecta ni se envía hasta que pulse un botón. Pulse primero {{ui:Enmarcar el trabajo}}: el cabezal recorre el recuadro del trabajo con el láser **apagado** (o con la potencia baja que haya fijado para un puntero), para que vea dónde quemará. Solo entonces se activa {{ui:Enviar trabajo}}, y vuelve a desactivarse si cambia algo. {{ui:Pausar}} detiene el cabezal; {{ui:Detener}} también lo detiene, reinicia el controlador (el láser se apaga) y envía `M5`. Donde falte Web Serial (Firefox, Safari y CadCraft Studio, cuya vista web aún no lo tiene), guarde el G-code y envíelo con el programa propio de su láser.

## Pendiente de implementar

Formatos de otros controladores (Ruida, láseres Marlin, archivos de fabricantes), pestañas y entradas de aproximación, compensación de anchura de corte, bibliotecas de materiales, ejes rotativos y de Z, alineación con cámara.
