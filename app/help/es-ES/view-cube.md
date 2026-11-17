---
title: El cubo de vistas
summary: Haga clic en una cara, arista o esquina del cubo de la esquina de la vista para mirar desde allí, arrástrelo para orbitar, gire el anillo de la brújula, avance alrededor de una vista de frente y vuelva al inicio.
keywords: cubo de vistas, viewcube, cubo, brújula, norte, vista de inicio, vistas estándar, superior, frontal, derecha, isométrica, esquina, arista, orbitar, girar vista, icono de ejes, indicador de esquina, navegación
from: afc33dc7
---

El cubo de vistas se sitúa en la parte superior derecha de la vista 3D (no mientras se hace un croquis ni en la hoja de dibujo). Gira con la vista, así que siempre muestra hacia dónde mira: {{ui:Top}} es el lado +Y de la pieza (el plano Superior), {{ui:Front}} el lado +Z (el plano Frontal le queda de cara cuando lo mira), {{ui:Right}} el lado +X. Permanece translúcido hasta que apunte hacia él.

## Mirar desde un lado, una arista o una esquina

1. Señale el cubo. La pieza bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que comparte) o una esquina (en las tres caras).
2. Haga clic. La vista gira para mirar desde allí, manteniendo el mismo centro y zoom.

Hay 26 puntos en los que hacer clic: 6 caras ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista de tres cuartos; una arista se sitúa a medio camino entre dos caras.

Al hacer clic en {{ui:Front}}, {{ui:Top}} o {{ui:Right}} se obtienen las mismas vistas que {{ui:Views}} de la barra de herramientas, sin el ajuste de zoom.

## Orbitar arrastrando el cubo

Arrastre el cubo para girar la vista, igual que orbitar en la propia vista. Un arrastre nunca se toma como clic, así que puede agarrar el cubo en cualquier punto.

## El anillo de la brújula

El anillo bajo el cubo lleva N, E, S y O.

- **Arrastre el anillo** para girar el modelo alrededor del eje vertical, como si estuviera sobre una mesa giratoria. El anillo sigue al puntero.
- **Haga clic en una letra** para mirar desde ese lado, manteniendo la inclinación con que mira hacia abajo. En una vista desde arriba, la letra en la que hace clic pasa a la parte inferior de la pantalla.

## Vistas de frente: flechas

Cuando mira de frente a una cara, aparecen pequeñas flechas alrededor del cubo:

- Los cuatro **triángulos** llevan al frente la cara de ese lado: el triángulo sobre el cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** de la parte superior derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar la cara que mira. Úselas para girar una planta de modo que una pared larga cruce la pantalla.

## Inicio

El botón de casa en la parte superior izquierda del cubo vuelve a la vista de tres cuartos y ajusta la pieza a la pantalla. {{key:Home}} hace lo mismo mientras el cubo tiene el foco del teclado.

## Con el teclado

{{key:Tab}} hasta el cubo, y después:

| Tecla | Hace |
|---|---|
| {{key:left}} / {{key:right}} | elige un lado, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla indican cuál) |
| {{key:up}} / {{key:down}} | elige una posición más alta o más baja, hasta {{ui:Top}} o hasta {{ui:Bottom}} |
| {{key:Enter}} o {{key:Space}} | mira desde la elegida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta alrededor del eje vertical |
| {{key:Home}} | la vista de inicio |
| {{key:Esc}} | sale del cubo |

Las teclas pulsadas en el cubo se quedan con el cubo: no inician herramientas de PartCraft.

## Indicador de ejes o nada

Abra {{ui:Settings}} ({{key:Mod+,}}), la pestaña {{ui:PartCraft}}, y fije **Indicador de esquina** en {{ui:View cube}} (el valor inicial), {{ui:Axis icon}} (un pequeño marcador X, Y, Z abajo a la izquierda: X rojo, Y verde, Z azul) o {{ui:None}}. Este navegador recuerda la elección. Véase [Configuración de PartCraft](topic:settings#corner-indicator).

:::note
El cubo muestra la pieza tal como la construye PartCraft: Y hacia arriba, así que el {{ui:Top}} del cubo es el plano Superior. Las letras de la brújula sirven solo para girar; una pieza no tiene norte.
:::
