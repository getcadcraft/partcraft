---
title: Ver el interior con una vista de sección
summary: Corte la pieza o un ensamblaje con un plano para ver su interior, con las caras de corte rellenas. Mueva el plano con un control deslizante, corte sobre una cara plana que seleccione con clic, o invierta el lado que se corta.
keywords: sección, vista de sección, corte, corte lateral, sección transversal, recorte, interior, rebanada, plano, tapas, sombreado, sección de ensamblaje
from: a7555f7c
---

La **vista de sección** corta el modelo con un plano para que pueda ver el interior: agujeros, cavidades, espesores de pared y cómo encajan las piezas en un ensamblaje. Funciona en todos los espacios de trabajo y en un ensamblaje. Ábrala desde el menú {{ui:Views}} del grupo **Vista**, en {{ui:Section view}}, o pulse {{key:X}}. Se abre una tarjeta en la esquina inferior izquierda de la vista.

Solo se corta la vista. La pieza, su volumen, las mediciones y las exportaciones permanecen completos, y no se guarda nada en el archivo.

## Corte por el centro

1. Pulse {{key:X}}. La pieza se corta con el plano frontal por su centro, y las caras de corte se rellenan con un color tenue.
2. Arrastre el control deslizante {{ui:Position}}, o escriba una distancia en mm, para mover el corte.
3. Elija otro {{ui:Plane}}: {{ui:Front (XY)}}, {{ui:Top (XZ)}} o {{ui:Right (YZ)}}.
4. Marque {{ui:Cut away the other side}} para conservar, en cambio, la mitad que se quitó.

## Corte sobre una cara

1. Haga clic en {{ui:Pick a face}} en la tarjeta.
2. Haga clic en una cara plana de la vista. El corte empieza a ras de ella, con el plano sobre esa cara.
3. Mueva {{ui:Position}} para ir más profundo. El número es la distancia en la dirección saliente de la cara.

## Clics y el corte

Los clics en la vista van a lo que queda después del corte, así que puede seleccionar una cara o una arista dentro de la pieza, iniciar un croquis sobre ella o medir a través de ella. Desmarque {{ui:Fill the cut faces}} para ver a través del corte hacia las partes huecas.

## Cerrarla

Pulse {{key:Esc}}, pulse {{key:X}} de nuevo, o haga clic en {{ui:Close}}. Abrir un croquis o la hoja de dibujo también la cierra.

:::tip
Para una sección en la hoja de dibujo (con sombreado y su línea de plano de corte), use {{ui:Drawing}}: vea [Haga un dibujo (PDF)](topic:drawing-pdf).
:::
