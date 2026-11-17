---
title: El cubo de vistas
summary: Haga clic en una cara, arista o esquina del cubo, en la esquina de la vista, para mirar desde ahí; arrástrelo para orbitar, gire el anillo de la brújula, dé la vuelta alrededor de una vista de cara y regrese al inicio.
keywords: cubo de vistas, viewcube, cubo, brújula, norte, vista de inicio, vistas estándar, superior, frontal, derecha, iso, esquina, arista, órbita, girar vista, icono de ejes, indicador de esquina, navegación
from: afc33dc7
---

El cubo de vistas está en la esquina superior derecha de la vista 3D (no mientras dibuja un croquis ni en la hoja de dibujo). Gira con la vista, así que siempre muestra hacia dónde mira: {{ui:Superior}} es el lado +Y de la pieza (el plano Superior), {{ui:Frontal}} el lado +Z (el plano Frontal le queda de frente cuando lo mira), {{ui:Derecha}} el lado +X. Permanece translúcido hasta que apunte hacia él.

## Mirar desde un lado, una arista o una esquina

1. Apunte al cubo. La pieza bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que comparte) o una esquina (en las tres caras).
2. Haga clic. La vista gira para mirar desde ahí, conservando el mismo centro y zoom.

Hay 26 lugares en que hacer clic: 6 caras ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Volver}}, {{ui:Izquierda}}, {{ui:Derecha}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista a tres cuartos; una arista se ve a medio camino entre dos caras.

Hacer clic en {{ui:Frontal}}, {{ui:Superior}} o {{ui:Derecha}} da las mismas vistas que {{ui:Vistas}} en la barra de herramientas, sin el zoom para ajustar.

## Orbitar arrastrando el cubo

Arrastre el cubo para girar la vista, igual que orbitar en la propia vista. Un arrastre nunca se toma como clic, así que puede tomar el cubo por cualquier parte.

## El anillo de la brújula

El anillo bajo el cubo lleva N, E, S y O.

- **Arrastre el anillo** para girar el modelo sobre el eje vertical, como si estuviera en una mesa giratoria. El anillo sigue al puntero.
- **Haga clic en una letra** para mirar desde ese lado, conservando qué tan inclinada es la mirada hacia abajo. En una vista desde arriba, la letra en la que hace clic va a la parte inferior de la pantalla.

## Vistas de cara: flechas

Cuando mira de frente a una cara, aparecen flechas pequeñas alrededor del cubo:

- Los cuatro **triángulos** llevan al frente la cara de ese lado: el triángulo sobre el cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** en la parte superior derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar la cara que mira. Úselas para girar una planta de modo que un muro largo cruce la pantalla.

## Inicio

El botón de casa en la parte superior izquierda del cubo vuelve a la vista a tres cuartos y ajusta la pieza. {{key:Home}} hace lo mismo mientras el cubo tiene el foco del teclado.

## Con el teclado

{{key:Tab}} hasta el cubo, luego:

| Tecla | Hace |
|---|---|
| {{key:left}} / {{key:right}} | elige un lado, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla dicen cuál) |
| {{key:up}} / {{key:down}} | elige una más alta o más baja, hasta {{ui:Superior}} o hasta {{ui:Inferior}} |
| {{key:Enter}} o {{key:Space}} | mira desde la elegida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta sobre el eje vertical |
| {{key:Home}} | la vista de inicio |
| {{key:Esc}} | sale del cubo |

Las teclas pulsadas en el cubo se quedan con el cubo: no inician herramientas de PartCraft.

## Icono de ejes o nada en su lugar

Abra {{ui:Configuración}} ({{key:Mod+,}}), la pestaña {{ui:PartCraft}}, y ponga **Indicador de esquina** en {{ui:Cubo de vistas}} (el valor inicial), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z en la parte inferior izquierda: X rojo, Y verde, Z azul) o {{ui:Ninguno}}. Este navegador recuerda la elección. Vea [Configuración de PartCraft](topic:settings#corner-indicator).

:::note
El cubo muestra la pieza como PartCraft la construye: Y hacia arriba, así que el {{ui:Superior}} del cubo es el plano Superior. Las letras de la brújula sirven solo para girar; una pieza no tiene norte.
:::
