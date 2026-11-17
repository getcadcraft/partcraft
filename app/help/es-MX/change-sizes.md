---
title: Cambiar medidas sin abrir el croquis
summary: Controle una pieza con los números del panel derecho: cotas de croquis, profundidades, cantidades y ángulos; cómo planear una pieza para que los números correctos la controlen; y dónde toman el control los parámetros y las ecuaciones.
keywords: parámetros, cotas de control, intención de diseño, cambiar medida, ecuaciones, variables globales, tabla de diseño, configuraciones, redimensionar, modificar cota
from: c2ae1a32
---

Toda medida de una pieza de PartCraft es un número que puede cambiar después: las cotas de sus croquis y los ajustes de sus operaciones. No necesita abrir un croquis para cambiar sus cotas.

## Cambiar una cota de croquis desde el panel

1. Haga clic en una operación del historial, por ejemplo "Extrude1".
2. Bajo los ajustes propios de la extrusión, **Cotas de croquis (Sketch1)** enumera cada cota de su croquis: "Distancia", "Diámetro", "Ángulo (°)" y así sucesivamente.
3. Escriba un nuevo valor en un cuadro y pulse {{key:Enter}} o {{key:Tab}}.

El croquis se resuelve con el nuevo valor y la pieza completa se reconstruye. Al seleccionar el propio croquis se muestra la misma lista como **Cotas de control**.

El radio o el diámetro deben ser mayores que cero, y un ángulo está entre 0 y 180 grados; la barra de estado lo indica si no es así.

:::tip
¿Cuál cuadro es cuál? Los cuadros aparecen en el orden en que se crearon las cotas. Si no está seguro, abra el croquis (haga doble clic en él), haga doble clic en la cota del lienzo y cámbiela ahí.
:::

## Escriba el número principal de inmediato

Seleccione una operación en el historial (o acabe de agregarla) y escriba un número: va al cuadro principal de la operación, el que más cambia (la **Profundidad** de una extrusión, el **Ángulo** de una revolución, el **Diámetro** de un taladro, la **Cantidad** de una matriz, el **Radio** de un redondeo, el espesor de pared de un vaciado). Pulse {{key:Enter}} para definirlo, o {{key:Esc}} para conservar el anterior. Al agregar una extrusión, la barra de estado lo indica: "Se agregó Extrude1. Cambie sus números a la derecha, o escriba ahora un número para su profundidad."

## Cambiar el número en el historial

Cada fila de operación en el historial muestra su número principal junto a su nombre: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Haga doble clic en el número (o seleccione la fila y pulse {{key:F2}}) y se abre un cuadro en ese mismo lugar. Escriba el nuevo valor y pulse {{key:Enter}}; {{key:Esc}} conserva el anterior. Funciona exactamente como el cuadro de la operación a la derecha: los mismos límites, `=` para escribir una ecuación como `=width/2`, y un paso para deshacer.

En una extrusión, un taladro o una matriz, un doble clic en cualquier parte de la fila abre el cuadro. En un redondeo, un chaflán, un vaciado, un ángulo de salida o una rosca, un doble clic en el nombre sigue llevando a elegir sus aristas o caras, así que haga doble clic en el número. Los croquis no tienen número en la fila: un doble clic abre el croquis.

## Arrástrela en la vista

Seleccione una extrusión en el historial (o haga clic en ella en la vista y luego en su fila) y aparece una flecha naranja sobre su cara final, con la profundidad en un cuadro junto a ella. Arrastre la flecha: la pieza sigue el arrastre, y al soltar se define la nueva profundidad como un solo paso ({{key:Mod+Z}} la devuelve). Pulse {{key:Esc}} mientras arrastra para regresar al punto de partida. La profundidad se mueve en pasos de una décima de su tamaño: 1 mm en una extrusión de 25 mm, 0.1 mm en una de 3 mm.

Una revolución tiene una flecha curva al final de su giro: arrástrela alrededor del eje para cambiar el ángulo, en grados enteros de 1° a 360°.

O haga clic en el cuadro junto a la flecha, escriba un valor (o `=` y una ecuación) y pulse {{key:Enter}}. No hay flecha en una extrusión que sea **Atravesar todo** o que llegue hasta una cara, ni en un valor que controla una ecuación: cámbielos en el panel derecho.

## Los números que controlan una pieza

| Dónde | Qué puede cambiar |
|---|---|
| Croquis | Cada cota: longitudes, distancias, radios, diámetros, ángulos |
| Extrusión y corte | Profundidad, condición final, dirección, saliente o corte |
| Revolución y corte de revolución | Ángulo, eje, saliente o corte |
| Taladro | Diámetro, profundidad, atravesar todo, diámetro y profundidad del avellanado |
| Redondeo, chaflán, vaciado | Radio, distancia, espesor de pared y dirección, y qué aristas o caras |
| Lineal y circular | Cantidad, espaciado o ángulo, dirección o eje |
| Pieza | Curvas (qué tan finas son las facetas de las formas redondas) |
| Dibujo | Dónde corta la sección, el tamaño y la escala del detalle, valores GD&T |

## Planee la pieza para que los números correctos la controlen

Los números que da son los que puede cambiar. Algunos hábitos hacen que los cambios se comporten bien:

- **Acote lo que importa para el trabajo.** Si un agujero debe quedar a 15 mm de un borde, acótelo desde ese borde, no desde el origen.
- **Defina totalmente los croquis.** Así, un cambio mueve solo lo que debe (vea [Defina totalmente un croquis](topic:relations-dimensions)).
- **Use relaciones para la intención.** Igual en dos agujeros significa que un diámetro controla ambos. En formas simétricas, ponga el origen en la línea central, o use Punto medio.
- **Dibuje sobre caras creadas por operaciones.** Un croquis sobre la cara final de una extrusión se mueve cuando cambia la profundidad.
- **Use matrices en lugar de copiar.** Un agujero repetido ocho veces en una matriz tiene un solo diámetro que cambiar.

## Más allá de números sueltos

- **Un número que controla varios:** use parámetros y ecuaciones: [Controle una pieza con parámetros](topic:parameters).
- **Varias medidas de una pieza:** guarde cada una como una [configuración](topic:design-tables); se conservan en el archivo de la pieza.
- **Aritmética en un cuadro de número:** escriba `=40/2` o `=width / 2`. Eso crea una ecuación; vea [Ecuaciones en ambos sentidos](topic:equations-two-way).
- **Unidades en pulgadas:** la pieza muestra milímetros. En un cuadro de número con `=`, o en un parámetro, `2in` se convierte en 50.8.

Vea [Lo que todavía no está disponible](topic:not-built-yet).
