---
title: Roscas en ejes y barrenos, dibujadas o modeladas
summary: Coloque una rosca métrica ISO o trapecial en cualquier cara redonda, un eje o un barreno. Manténgala cosmética para planos, o modele la rosca helicoidal real para impresión 3D, con una holgura para que las piezas impresas encajen.
keywords: rosca, roscas, rosca modelada, helicoidal, hélice, tornillo, perno, tuerca, eje, barreno, rosca externa, rosca interna, rosca cosmética, rosca métrica, trapecial, acme, husillo, Tr16x4, M10, impresión 3D, imprimir, holgura, ajuste, mano izquierda, roscado con macho
from: 4f6401cc
---

{{ui:Rosca}} pone una rosca en caras redondas: el exterior de un eje (una rosca externa) o el interior de un barreno (una rosca interna). PartCraft distingue cuál según la cara.

Al principio la rosca es **cosmética**: la cara queda lisa, la vista dibuja la rosca con círculos discontinuos y la hoja de dibujo la anota, por ejemplo "M10×1.5 - 6g, rosca de 20 de largo". Marque **Modelada** para cortar la rosca helicoidal real en la pieza, para impresión 3D o para un modelo que debe verse bien.

## Roscar un eje o un barreno

1. Construya el eje o el barreno con el tamaño de la rosca: un eje Ø10 para un perno M10, o un barreno Ø8.5 (la broca de roscado) para una tuerca M10.
2. Haga clic en la cara redonda y luego elija {{ui:Más}} › {{ui:Rosca}}. Sin cara redonda seleccionada, PartCraft le pide que haga clic en las caras y luego en {{ui:Listo}}.
3. En el panel derecho, revise el **Tamaño**. **Ajustar a la cara** elige el tamaño por sí solo: para un eje, el tamaño cuyo diámetro mayor es el del eje; para un barreno, el tamaño cuyo diámetro menor le queda.

La rosca empieza en el extremo abierto de la cara, donde la pieza no continúa a lo largo del eje: el extremo libre de un eje, la boca de un barreno. **Empezar en el otro extremo** invierte eso.

## Ajustes

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| **Forma** | Métrica ISO (60°), M1.6 a M64 de paso grueso; trapecial (Tr, 30°), Tr8×1.5 a Tr60×9 | Métrica ISO |
| **Tamaño** | Ajustar a la cara, o un tamaño de la lista | Ajustar a la cara |
| **Toda la cara** | Desmárquela para dar una **Longitud (mm)**, medida desde el inicio | Marcada |
| **Empezar en el otro extremo** | La rosca va desde el otro extremo de la cara | Desactivado |
| **Sentido** | Mano derecha o mano izquierda | Mano derecha |
| **Modelada** | Corta la rosca helicoidal real | Desactivado |
| **Holgura (mm)** | Se muestra al marcar Modelada: cuánto más pequeña es la rosca de un eje, y cuánto más grande la de un barreno, en todo el contorno | 0.1 |

Un tamaño que no conviene a la cara se construye de todos modos, recortado a la cara, y el panel lo indica, por ejemplo "Un eje de Ø12 mm no es el Ø10 mm de M10". Varias caras pueden compartir una misma operación de Rosca; con **Ajustar a la cara**, cada una recibe su propio tamaño.

## Roscas modeladas para impresión 3D

Una rosca modelada sigue el perfil básico estándar: ISO 68-1 para roscas métricas (crestas y fondos planos, flancos de 60°), e ISO 2901 para las trapeciales (flancos de 30°). La **Holgura** desplaza todo el perfil hacia adentro (un eje) o hacia afuera (un barreno) para que las piezas impresas enrosquen:

- **0.1 a 0.2 mm** sirve para la mayoría de las impresoras. Imprima primero un perno y una tuerca de prueba.
- **0** es el perfil estándar, para piezas maquinadas o para revisar un ajuste.

Un perno y una tuerca con la misma holgura nunca se tocan por sus flancos: la separación entre ellos es el doble de la holgura, en todo el contorno.

:::tip
Los pasos finos imprimen mal: M3 y menores, o un paso menor a 0.5 mm, están cerca de lo que una boquilla de 0.4 mm puede dibujar. Modele roscas más grandes, y use un inserto termofijado o un agujero roscado para las pequeñas.
:::

Una rosca modelada es parte del sólido: las exportaciones STL, 3MF y STEP la incluyen, y Medir la mide. Hace más pesado recalcular la pieza: una rosca M10 de 20 de largo son unos 150,000 triángulos.

## Agujeros roscados

Un agujero **Roscado (ISO métrico)** también tiene un interruptor **Modelada**, con la misma **Holgura**. Vea [Taladrar agujeros y avellanados en puntos de croquis](topic:holes).

## Cuando una rosca no se construye

- "Una rosca va en una cara redonda (un cilindro): un eje o un barreno." La cara elegida es plana o curva de otra forma.
- "Ningún tamaño estándar encaja en una cara redonda de Ø0.6 mm: elija un tamaño." Ajustar a la cara no encontró nada a menos de 12 % de la cara. Elija un **Tamaño**, o cambie la cara.
- "Una cara en la que estaba esta rosca ya no existe (…). Vuelva a elegirla." Un cambio anterior eliminó la cara. Haga clic en {{ui:Seleccionar caras}} y vuelva a hacer clic en la cara.

:::note
Las roscas en pulgadas (UNC, UNF), las roscas de tubería, las roscas cónicas, las terminaciones de rosca y los inicios de rosca biselados todavía no están construidos. El núcleo exacto muestra una rosca modelada como cosmética.
:::
