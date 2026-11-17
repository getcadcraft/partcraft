---
title: Ver el interior con una vista de corte
summary: Cortar la pieza o un conjunto con un plano para ver su interior, con las caras cortadas rellenas. Mover el plano con un deslizador, cortar sobre una cara plana que se elija con clic, invertir qué lado se corta.
keywords: sección, vista de sección, corte, recorte, sección transversal, recorte por plano, interior, rebanada, plano, tapas, sombreado, sección de conjunto
from: a7555f7c
---

La **vista de corte** corta el modelo con un plano para ver el interior: agujeros, cavidades, espesores de pared y cómo encajan las piezas de un conjunto. Funciona en todos los espacios de trabajo y en un conjunto. Ábrala desde el menú {{ui:Vistas}} del grupo **Vista**, con {{ui:Vista de corte}}, o presionando {{key:X}}. Se abre una tarjeta en la esquina inferior izquierda de la vista.

Solo se corta la vista. La pieza, su volumen, las medidas y las exportaciones quedan completas, y no se guarda nada en el archivo.

## Corte por el medio

1. Presione {{key:X}}. La pieza se corta con el plano frontal por su medio, y las caras cortadas se rellenan con un color tintado.
2. Arrastre el deslizador {{ui:Posición}}, o escriba una distancia en mm, para mover el corte.
3. Elija otro {{ui:Plano}}: {{ui:Frontal (XY)}}, {{ui:Superior (XZ)}} o {{ui:Derecha (YZ)}}.
4. Marque {{ui:Cortar el otro lado}} para conservar la mitad que se había cortado.

## Corte sobre una cara

1. Haga clic en {{ui:Elegir una cara}} en la tarjeta.
2. Haga clic en una cara plana de la vista. El corte empieza a ras de ella, con el plano sobre esa cara.
3. Mueva {{ui:Posición}} para ir más profundo. El número es la distancia a lo largo de la dirección hacia afuera de la cara.

## Clics y el corte

Los clics en la vista van a lo que queda después del corte, así que puede elegir una cara o una arista dentro de la pieza, iniciar un boceto en ella o medir a través de ella. Desmarque {{ui:Rellenar las caras cortadas}} para ver a través del corte hacia las partes huecas.

## Cerrarla

Presione {{key:Esc}}, presione {{key:X}} de nuevo, o haga clic en {{ui:Cerrar}}. Abrir un boceto o la hoja de plano también la cierra.

:::tip
Para un corte en la hoja de plano (con sombreado y su línea de plano de corte), use {{ui:Plano}}: vea [Hacer un plano (PDF)](topic:drawing-pdf).
:::
