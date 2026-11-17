---
title: Retroceder y avanzar por el historial
summary: Mové la barra de retroceso hacia arriba y abajo de un elemento por vez para ver la pieza construirse, insertá elementos en medio y volvé al final.
keywords: retroceso, retroceder, avanzar, barra de retroceso, recorrer el historial, insertar elemento, congelar, historial
from: 9a366cae
---

La barra de retroceso decide cuánto del historial se construye. Los elementos debajo de ella están en gris y no se construyen; los elementos nuevos entran en la barra.

## Avanzar un elemento por vez

Con la pieza en pantalla (sin boceto ni plano abierto):

| Acción | Resultado |
|---|---|
| {{key:[}} o el botón de flecha hacia arriba junto al nombre de la pieza | La barra sube un elemento |
| {{key:]}} o el botón de flecha hacia abajo | La barra baja un elemento |
| {{key:End}} o el botón de llevar la barra al final | Todos los elementos se vuelven a construir |

La barra de estado indica dónde está la barra, por ejemplo "Barra de retroceso después de Boceto1: 1 de 2 elementos construidos". Los botones están desactivados cuando la barra no puede moverse más en esa dirección.

También podés eiporavo {{ui:Retroceder hasta aquí}} en cualquier elemento, o hacer clic en **Barra de retroceso · avanzar** en el historial.

## Insertar un elemento en medio

1. Retrocedé la barra hasta donde va el nuevo elemento.
2. Agregá el elemento: entra en la barra.
3. Presioná {{key:End}} para construir el resto del historial encima de él.

Cada movimiento de la barra es un paso que podés deshacer con {{key:Mod+Z}}. La posición de la barra se guarda en el archivo, así que una pieza puede enviarse con retroceso. La herramienta de línea de comandos también la mueve: `partcraft rollback part.json` y `partcraft forward part.json --end`.
