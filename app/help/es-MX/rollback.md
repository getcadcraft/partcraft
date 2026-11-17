---
title: Retroceder y avanzar por el historial
summary: Mueva la barra de retroceso hacia arriba y hacia abajo una operación a la vez para ver cómo se construye la pieza, inserte operaciones en medio y regrese al final.
keywords: retroceso, retroceder, avanzar, barra de retroceso, recorrer el historial, insertar operación, congelar, historial
from: 9a366cae
---

La barra de retroceso decide cuánto del historial está construido. Las operaciones debajo de ella aparecen en gris y no están construidas; las nuevas operaciones se insertan en la barra.

## Avanzar una operación a la vez

Con la pieza en pantalla (sin croquis ni dibujo abierto):

| Acción | Resultado |
|---|---|
| {{key:[}} o el botón de flecha hacia arriba junto al nombre de la pieza | La barra sube una operación |
| {{key:]}} o el botón de flecha hacia abajo | La barra baja una operación |
| {{key:End}} o el botón de llevar la barra al final | Todas las operaciones se vuelven a construir |

La barra de estado indica dónde está la barra, por ejemplo "Barra de retroceso después de Sketch1: 1 de 2 operaciones construidas". Los botones se desactivan cuando la barra no puede moverse más en esa dirección.

También puede elegir {{ui:Roll back to here}} › {{ui:Retroceder hasta aquí}} en cualquier operación, o hacer clic en **Barra de retroceso · avanzar** en el historial.

## Insertar una operación en medio

1. Mueva la barra hacia atrás hasta que quede donde debe ir la nueva operación.
2. Añada la operación: se inserta en la barra.
3. Pulse {{key:End}} para construir el resto del historial sobre ella.

Cada movimiento de la barra es un paso que puede deshacer con {{key:Mod+Z}}. La posición de la barra se guarda en el archivo, así que una pieza puede enviarse retrocedida. La herramienta de línea de comandos también la mueve: `partcraft rollback part.json` y `partcraft forward part.json --end`.
