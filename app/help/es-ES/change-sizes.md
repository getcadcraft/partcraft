---
title: Cambiar tamaños sin abrir el croquis
summary: Controle una pieza desde los números del panel derecho: cotas de croquis, profundidades, cantidades y ángulos; cómo planificar una pieza para que los números correctos la controlen, y dónde toman el relevo los parámetros y las ecuaciones.
keywords: parámetros, cotas de control, intención de diseño, cambiar tamaño, ecuaciones, variables globales, tabla de diseño, configuraciones, redimensionar, modificar cota
from: c2ae1a32
---

Todo tamaño de una pieza de PartCraft es un número que puede cambiar más tarde: las cotas de sus croquis y los ajustes de sus operaciones. No necesita abrir un croquis para cambiar sus cotas.

## Cambiar una cota de croquis desde el panel

1. Haga clic en una operación del historial, por ejemplo "Extrude1".
2. Bajo los ajustes propios de la extrusión, **Cotas del croquis (Sketch1)** lista cada cota de su croquis: "Distancia", "Diámetro", "Ángulo (°)" y así sucesivamente.
3. Escriba un valor nuevo en un cuadro y pulse {{key:Enter}} o {{key:Tab}}.

El croquis se resuelve con el valor nuevo, y toda la pieza se reconstruye. Si selecciona el croquis en sí, aparece la misma lista como **Cotas de control**.

Un radio o diámetro debe ser mayor que cero, y un ángulo está entre 0 y 180 grados; la barra de estado lo indica si no es así.

:::tip
¿Qué cuadro es cuál? Los cuadros aparecen en el orden en que se crearon las cotas. Si no está seguro, abra el croquis (haga doble clic en él), haga doble clic en la cota del lienzo y cámbiela allí.
:::

## Escribir el número principal de inmediato

Seleccione una operación en el historial (o acabe de añadirla) y escriba un número: va al cuadro principal de la operación, el que más cambia (la **Profundidad** de una extrusión, el **Ángulo** de una revolución, el **Diámetro** de un taladro, la **Cantidad** de una matriz, el **Radio** de un redondeo, el espesor de pared de un vaciado). Pulse {{key:Enter}} para fijarlo, o {{key:Esc}} para conservar el anterior. Al añadir una extrusión, la barra de estado lo indica: "Extrude1 añadida. Cambie sus números a la derecha, o escriba ahora un número para su profundidad."

## Cambiar el número en el historial

Cada fila del historial muestra su número principal junto a su nombre: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Haga doble clic en el número (o seleccione la fila y pulse {{key:F2}}) y se abre un cuadro en ese mismo lugar. Escriba el valor nuevo y pulse {{key:Enter}}; {{key:Esc}} conserva el anterior. Funciona exactamente igual que el cuadro de la operación a la derecha: los mismos límites, `=` para escribir una ecuación como `=width/2`, y un paso para deshacer.

En una extrusión, un taladro o una matriz, un doble clic en cualquier punto de la fila abre el cuadro. En un redondeo, un chaflán, un vaciado, un ángulo de salida o una rosca, un doble clic sobre el nombre sigue llevando a elegir aristas o caras, así que haga doble clic en el número en sí. Los croquis no tienen número en la fila: un doble clic abre el croquis.

## Arrastrar en la vista

Seleccione una extrusión en el historial (o haga clic en ella en la vista y luego en su fila) y aparece una flecha naranja sobre su cara final, con la profundidad en un cuadro junto a ella. Arrastre la flecha: la pieza sigue su movimiento mientras arrastra, y al soltar fija la nueva profundidad como un paso ({{key:Mod+Z}} la devuelve). Pulse {{key:Esc}} mientras arrastra para volver al punto de partida. La profundidad avanza en pasos de una décima parte de su tamaño: 1 mm en una extrusión de 25 mm, 0.1 mm en una de 3 mm.

Una revolución tiene una flecha curva al final de su giro: arrástrela alrededor del eje para cambiar el ángulo, en grados enteros de 1° a 360°.

O haga clic en el cuadro junto a la flecha, escriba un valor (o `=` y una ecuación) y pulse {{key:Enter}}. No hay flecha en una extrusión que sea **Atravesar todo** o que llegue hasta una cara, ni en un valor que controla una ecuación: cámbielos a la derecha.

## Los números que controlan una pieza

| Dónde | Qué puede cambiar |
|---|---|
| Croquis | Cada cota: longitudes, distancias, radios, diámetros, ángulos |
| Extrusión y corte | Profundidad, condición final, dirección, saliente o corte |
| Revolución y corte por revolución | Ángulo, eje, saliente o corte |
| Taladro | Diámetro, profundidad, atravesar todo, diámetro y profundidad del avellanado |
| Redondeo, chaflán, vaciado | Radio, distancia, espesor de pared y dirección, y qué aristas o caras |
| Lineal y circular | Cantidad, separación o ángulo, dirección o eje |
| Pieza | Curvas (lo fino que se facetan las formas redondas) |
| Dibujo | Dónde corta la sección, el tamaño y la escala del detalle, valores GD&T |

## Planifique la pieza para que los números correctos la controlen

Los números que da son los que puede cambiar. Algunos hábitos hacen que los cambios se comporten bien:

- **Acote lo que importa para el trabajo.** Si un taladro debe quedar a 15 mm de una arista, acótelo desde esa arista, no desde el origen.
- **Defina completamente los croquis.** Así un cambio mueve solo lo que debe (véase [Defina completamente un croquis](topic:relations-dimensions)).
- **Use relaciones para la intención.** Igual en dos taladros significa que un diámetro controla los dos. En formas simétricas: ponga el origen en la línea central, o use Punto medio.
- **Croquice sobre caras creadas por operaciones.** Un croquis sobre la cara final de una extrusión se mueve cuando cambia la profundidad.
- **Use matrices en lugar de copiar.** Un taladro repetido ocho veces mediante matriz tiene un único diámetro que cambiar.

## Más allá de los números sueltos

- **Un número que controla varios:** use parámetros y ecuaciones: [Controle una pieza con parámetros](topic:parameters).
- **Varios tamaños de una pieza:** guarde cada uno como una [configuración](topic:design-tables); se guardan en el archivo de la pieza.
- **Aritmética en un cuadro numérico:** escriba `=40/2` o `=width / 2`. Eso crea una ecuación; véase [Ecuaciones en ambos sentidos](topic:equations-two-way).
- **Unidades en pulgadas:** la pieza muestra milímetros. En un cuadro numérico con `=`, o en un parámetro, `2in` se convierte en 50.8.

Véase [Lo que todavía no está disponible](topic:not-built-yet).
