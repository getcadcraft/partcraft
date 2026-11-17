---
title: Retroceder y avanzar por el historial
summary: Mueva la barra de retroceso hacia arriba y hacia abajo, un elemento cada vez, para ver cómo se construye la pieza, inserte elementos en medio y vuelva al final.
keywords: retroceso, retroceder, avanzar, barra de retroceso, recorrer el historial, insertar elemento, congelar, historial
from: 9a366cae
---

La barra de retroceso decide cuánto del historial se construye. Los elementos por debajo de ella aparecen en gris y no se construyen; los nuevos elementos se añaden en la barra.

## Avanzar un elemento cada vez

Con la pieza en pantalla (sin croquis ni plano abierto):

| Acción | Resultado |
|---|---|
| {{key:[}} o el botón de flecha hacia arriba junto al nombre de la pieza | La barra sube un elemento |
| {{key:]}} o el botón de flecha hacia abajo | La barra baja un elemento |
| {{key:End}} o el botón de llevar la barra al final | Se vuelven a construir todos los elementos |

La barra de estado indica dónde está la barra, por ejemplo "Barra de retroceso tras Sketch1: 1 de 2 elementos construidos". Los botones se desactivan cuando la barra no puede moverse más en esa dirección.

También puede elegir {{ui:Retroceder hasta aquí}} en cualquier elemento, o hacer clic en **Barra de retroceso · avanzar** en el historial.

## Insertar un elemento en medio

1. Mueva la barra hacia atrás hasta el punto donde debe ir el nuevo elemento.
2. Añada el elemento: entra en la barra.
3. Pulse {{key:End}} para construir el resto del historial encima de él.

Cada movimiento de la barra es un paso que puede deshacer con Mod+Z. La posición de la barra se guarda en el archivo, así que una pieza puede enviarse con el retroceso aplicado. La herramienta de línea de comandos también la mueve: `partcraft rollback part.json` y `partcraft forward part.json --end`.
