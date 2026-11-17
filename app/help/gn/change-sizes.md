---
title: Cambiar tamaños sin abrir el boceto
summary: Manejá una pieza desde los números del panel derecho: cotas de boceto, profundidades, cantidades y ángulos; cómo planificar una pieza para que los números correctos la controlen, y dónde toman el control los parámetros y las ecuaciones.
keywords: parámetros, cotas de control, intención de diseño, cambiar tamaño, ecuaciones, variables globales, tabla de diseño, configuraciones, redimensionar, modificar cota
from: c2ae1a32
---

Cada tamaño de una pieza de PartCraft es un número que podés cambiar después: las cotas de sus bocetos y los ajustes de sus elementos. No hace falta abrir un boceto para cambiar sus cotas.

## Cambiar una cota de boceto desde el panel

1. Hacé clic en un elemento del historial, por ejemplo "Extrude1".
2. Debajo de los ajustes propios de la extrusión, **Cotas del boceto (Sketch1)** lista cada cota de su boceto: "Distancia", "Diámetro", "Ángulo (°)" y así sucesivamente.
3. Escribí un valor nuevo en una casilla y presioná {{key:Enter}} o {{key:Tab}}.

El boceto se resuelve con el valor nuevo, y toda la pieza se reconstruye. Elegir el boceto en sí muestra la misma lista como **Cotas de control**.

Un radio o diámetro tiene que ser mayor que cero, y un ángulo está entre 0 y 180 grados; la barra de estado lo avisa si no.

:::tip
¿Qué casilla es cuál? Las casillas se listan en el orden en que se hicieron las cotas. Si no estás seguro, abrí el boceto (doble clic), hacé doble clic en la cota del lienzo y cambiala ahí.
:::

## Escribir el número principal enseguida

Elegí un elemento en el historial (o simplemente agregalo) y escribí un número: va a la casilla principal del elemento, la que más cambiás (la **Profundidad** de una Extrusión, el **Ángulo** de una Revolución, el **Diámetro** de un Agujero, la **Cantidad** de un patrón, el **Radio** de un Redondeo, el espesor de un Vaciado). Presioná {{key:Enter}} para fijarlo, o {{key:Esc}} para mantener el anterior. Al agregar una Extrusión, la barra de estado lo dice: "Extrude1 agregado. Cambiá sus números a la derecha, o escribí un número ahora para su profundidad."

## Cambiar el número en el historial

La fila de cada elemento en el historial muestra su número principal junto a su nombre: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Hacé doble clic en el número (o seleccioná la fila y presioná {{key:F2}}) y se abre una casilla ahí mismo. Escribí el valor nuevo y presioná {{key:Enter}}; {{key:Esc}} mantiene el anterior. Funciona exactamente como la casilla del elemento a la derecha: los mismos límites, `=` para escribir una ecuación como `=width/2`, y un paso para deshacer.

En una Extrusión, un Agujero o un patrón, un doble clic en cualquier parte de la fila abre la casilla. En un Redondeo, Chaflán, Vaciado, Desmoldeo o Rosca, un doble clic en el nombre sigue yendo a elegir aristas o caras, así que hacé doble clic en el número mismo. Los bocetos no tienen número en la fila: un doble clic abre el boceto.

## Arrastrar en la vista

Elegí una Extrusión en el historial (o hacé clic en ella en la vista, y después en su fila) y aparece una flecha naranja sobre su cara final, con la profundidad en una casilla al lado. Arrastrá la flecha: la pieza sigue el arrastre, y al soltar se fija la nueva profundidad como un paso ({{key:Mod+Z}} la devuelve). Presioná {{key:Esc}} mientras arrastrás para volver al punto de partida. La profundidad se mueve en pasos de una décima de su tamaño: 1 mm en una extrusión de 25 mm, 0.1 mm en una de 3 mm.

Una Revolución tiene una flecha curva al final de su giro: arrastrala alrededor del eje para cambiar el ángulo, en grados enteros de 1° a 360°.

O hacé clic en la casilla al lado de la flecha, escribí un valor (o `=` y una ecuación) y presioná {{key:Enter}}. No hay flecha en una Extrusión que va **Pasante total** o hasta una cara, ni en un valor que maneja una ecuación: cambiá esos en el panel derecho.

## Los números que controlan una pieza

| Dónde | Qué podés cambiar |
|---|---|
| Boceto | Cada cota: longitudes, distancias, radios, diámetros, ángulos |
| Extrusión y Corte | Profundidad, condición de fin, dirección, saliente o corte |
| Revolución y corte por revolución | Ángulo, eje, saliente o corte |
| Agujero | Diámetro, profundidad, pasante total, diámetro y profundidad del avellanado |
| Redondeo, Chaflán, Vaciado | Radio, distancia, espesor de pared y dirección, y qué aristas o caras |
| Lineal y Circular | Cantidad, espaciado o ángulo, dirección o eje |
| Pieza | Curvas (qué tan fino se facetan las formas redondas) |
| Plano | Dónde corta la sección, tamaño y escala del detalle, valores GD&T |

## Planificar la pieza para que los números correctos la controlen

Los números que das son los que podés cambiar. Algunos hábitos hacen que los cambios posteriores se comporten bien:

- **Acotá lo que importa para el trabajo.** Si un agujero tiene que quedar a 15 mm de un borde, acotalo desde ese borde, no desde el origen.
- **Definí completamente los bocetos.** Así un cambio mueve solo lo que debe (ver [Definí completamente un boceto](topic:relations-dimensions)).
- **Usá relaciones para la intención.** Igual en dos agujeros significa que un diámetro controla los dos. Formas simétricas: poné el origen sobre la línea central, o usá Punto medio.
- **Hacé bocetos sobre caras creadas por elementos.** Un boceto sobre la cara final de una extrusión se mueve cuando cambia la profundidad.
- **Usá patrones en vez de copiar.** Un agujero repetido ocho veces con patrón tiene un solo diámetro para cambiar.

## Más allá de números sueltos

- **Un número que controla varios:** usá parámetros y ecuaciones: [Controlar una pieza con parámetros](topic:parameters).
- **Varios tamaños de una pieza:** guardá cada uno como una [configuración](topic:design-tables); se guardan en el archivo de pieza.
- **Aritmética en una casilla de número:** escribí `=40/2` o `=width / 2`. Eso crea una ecuación; ver [Ecuaciones en ambos sentidos](topic:equations-two-way).
- **Unidades en pulgadas:** la pieza muestra milímetros. En una casilla de número con `=`, o en un parámetro, `2in` se convierte en 50.8.

Ver [Qué todavía no está construido](topic:not-built-yet).
