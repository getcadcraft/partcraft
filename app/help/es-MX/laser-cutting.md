---
title: Enviar un dibujo a un láser
summary: Elija qué hace cada capa (cortar, marcar, grabar, rellenar, imagen), vea la vista previa de los movimientos del cabezal, guarde el G-code de modo láser GRBL o envíelo desde el navegador tras enmarcar el trabajo.
keywords: láser, cortadora láser, grabadora láser, GRBL, G-code, grabar, rellenar, tramado, grabado de imagen, marcar, cortar, Web Serial, Linux, enmarcar el trabajo, potencia, velocidad, pasadas
from: 327b3c46
---

El panel {{ui:Láser}} convierte las capas de un dibujo en un programa para un láser que funciona con GRBL (la mayoría de los controladores de diodo y CO2 de uso aficionado y de talleres pequeños). En PartCraft, elija {{ui:Exportar}} › {{ui:Programa para láser…}} y luego {{ui:Agregar contornos de un DXF…}}: los contornos y agujeros entran en la capa CUT. Las piezas planas de lámina metálica (con sus líneas de doblez en la capa BEND) necesitan el núcleo exacto, que esta versión no tiene. La configuración se guarda en el archivo de la pieza o del ensamblaje.

:::warning
Pruebe cada configuración primero en material de desecho, use gafas de protección adecuadas para su láser, mantenga la tapa cerrada cuando la haya y nunca deje un láser en funcionamiento sin vigilancia. Los valores iniciales de cada capa son marcadores de posición, no recomendaciones para ningún material.
:::

## Elija qué hace cada capa

Cada capa del dibujo es una fila. {{ui:Hace}} la pone en **Cortar**, **Marcar**, **Grabar líneas**, **Rellenar formas**, **Grabar imagen** o **No enviar**, con una {{ui:Potencia %}}, una {{ui:Velocidad mm/min}} y un número de {{ui:Pasadas}}.

- **Rellenar** quema el interior de las formas cerradas con líneas separadas {{ui:Separación de líneas}}, con un {{ui:Ángulo}}, en ambos sentidos o en uno, con un sobrerrecorrido para que el cabezal ya vaya a velocidad cuando el láser se enciende; el entrecruzado añade una segunda pasada a 90°. Una forma con agujero queda abierta en el agujero.
- **Grabar imagen** convierte una imagen en puntos (Floyd–Steinberg, Atkinson, ordenado, o simplemente blanco y negro con un umbral) o, con *Niveles de gris*, en potencia variable.
- Orden: primero imágenes y rellenos, luego grabado de líneas, luego marcas y por último cortes, para que una pieza cortada no se mueva mientras se graba. Dentro de una capa, las trayectorias van **de dentro hacia afuera** (un agujero antes de la placa en la que está), siempre con la más cercana a continuación.

## Vista previa y guardado

La vista previa dibuja lo que hace el cabezal: las líneas de quemado en color, los movimientos rápidos en gris y un recuadro verde alrededor de todo lo que se quema. Debajo están el tamaño, la longitud de quemado y una estimación de tiempo (sin aceleración; una máquina real tarda más). {{ui:Guardar G-code…}} escribe G-code de modo láser GRBL: `$32=1`, `M4` (o `M3`) con valores S, movimientos `G0` y `G1`, y `M5` al final. X0 Y0 es la esquina inferior izquierda del trabajo, salvo que elija el origen del dibujo: ponga allí el cero de trabajo de su máquina. El G-code sigue el modo láser documentado de GRBL; todavía no se ha probado en un láser real.

## Enviar desde el navegador

En Chrome y Edge, {{ui:Conectar…}} le pide elegir el puerto USB del láser. Nada se conecta ni envía hasta que pulse un botón. Pulse primero {{ui:Enmarcar el trabajo}}: el cabezal recorre el recuadro del trabajo con el láser **apagado** (o con la potencia baja que configure para un puntero), para que vea dónde quemará. Solo entonces se activa {{ui:Enviar trabajo}}, y se desactiva de nuevo si cambia algo. {{ui:Pausa}} detiene el cabezal; {{ui:Detener}} también lo detiene, reinicia el controlador (el láser se apaga) y envía `M5`. Donde falte Web Serial (Firefox, Safari y CadCraft Studio, cuya vista web aún no lo tiene), guarde el G-code y envíelo con el programa propio de su láser.

## Aún no implementado

Formatos de otros controladores (Ruida, láseres Marlin, archivos de fabricante), pestañas y entradas de aproximación, compensación de kerf, bibliotecas de materiales, ejes rotativos y Z, alineación con cámara.
