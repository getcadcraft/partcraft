---
title: Roscas en ejes y taladros, dibujadas o modeladas
summary: Ponga una rosca métrica ISO o trapezoidal en cualquier cara redonda, un eje o un taladro. Manténgala cosmética para planos, o modele la rosca helicoidal real para impresión 3D, con una holgura para que las piezas impresas encajen.
keywords: rosca, roscas, rosca modelada, helicoidal, hélice, tornillo, perno, tuerca, eje, taladro, rosca exterior, rosca interior, rosca cosmética, rosca métrica, trapezoidal, acme, tornillo de avance, Tr16x4, M10, impresión 3D, imprimir, holgura, ajuste, mano izquierda, roscado
from: 4f6401cc
---

{{ui:Rosca}} pone una rosca en caras redondas: el exterior de un eje (rosca exterior) o el interior de un taladro (rosca interior). PartCraft distingue cuál es por la cara.

Una rosca es **cosmética** al principio: la cara sigue lisa, la vista dibuja la rosca con círculos de trazos y la hoja de planos la anota, como "M10×1.5 - 6g, rosca de 20 de longitud". Marque **Modelada** para cortar la rosca helicoidal real en la pieza, para impresión 3D o para un modelo que deba verse bien.

## Roscar un eje o un taladro

1. Construya el eje o el taladro con el tamaño de la rosca: un eje Ø10 para un tornillo M10, o un taladro Ø8.5 (la broca de roscar) para una tuerca M10.
2. Haga clic en la cara redonda y elija {{ui:Más}} › {{ui:Rosca}}. Si no hay ninguna cara redonda seleccionada, PartCraft le pide que haga clic en las caras y después en {{ui:Listo}}.
3. En el panel derecho, compruebe el **Tamaño**. **Ajustar a la cara** elige el tamaño por sí solo: en un eje, el tamaño cuyo diámetro mayor es el del eje; en un taladro, el tamaño cuyo diámetro menor le encaja.

La rosca empieza en el extremo abierto de la cara, donde la pieza no continúa a lo largo del eje: el extremo libre de un eje, la boca de un taladro. **Empezar por el otro extremo** lo invierte.

## Ajustes

| Ajuste | Opciones | Por defecto |
|---|---|---|
| **Forma** | ISO métrica (60°), M1.6 a M64 de paso grueso; trapezoidal (Tr, 30°), Tr8×1.5 a Tr60×9 | ISO métrica |
| **Tamaño** | Ajustar a la cara, o un tamaño de la lista | Ajustar a la cara |
| **Toda la cara** | Desmárquela para dar una **Longitud (mm)**, medida desde el inicio | Marcada |
| **Empezar por el otro extremo** | La rosca va desde el otro extremo de la cara | Desactivada |
| **Sentido** | Mano derecha o mano izquierda | Mano derecha |
| **Modelada** | Corta la rosca helicoidal real | Desactivada |
| **Holgura (mm)** | Visible cuando Modelada está marcada: cuánto más pequeña es la rosca de un eje, y cuánto más grande la de un taladro, por todos lados | 0.1 |

Un tamaño que no encaje con la cara se construye igualmente, recortado a la cara, y el panel lo indica, por ejemplo "Un eje de Ø12 mm no es el Ø10 mm de M10". Varias caras pueden compartir un único elemento Rosca; con **Ajustar a la cara**, cada una tiene su propio tamaño.

## Roscas modeladas para impresión 3D

Una rosca modelada sigue el perfil básico estándar: ISO 68-1 para roscas métricas (crestas y fondos planos, flancos de 60°), e ISO 2901 para las trapezoidales (flancos de 30°). La **Holgura** desplaza todo el perfil hacia dentro (un eje) o hacia fuera (un taladro) para que las piezas impresas se enrosquen entre sí:

- **0.1 a 0.2 mm** sirve para la mayoría de impresoras. Imprima primero un tornillo y una tuerca de prueba.
- **0** es el perfil estándar, para piezas mecanizadas o para comprobar un ajuste.

Un tornillo y una tuerca con la misma holgura nunca se tocan por los flancos: el espacio entre ellos es el doble de la holgura, por todos lados.

:::tip
Los pasos finos imprimen mal: M3 y menores, o un paso inferior a 0.5 mm, están cerca de lo que una boquilla de 0.4 mm puede dibujar. Modele roscas más grandes, y use un inserto termoinsertado o un agujero roscado para las pequeñas.
:::

Una rosca modelada forma parte del sólido: las exportaciones STL, 3MF y STEP la incluyen, y Medir la mide. Hace más pesada la reconstrucción: una rosca M10 de 20 de longitud son unos 150,000 triángulos.

## Agujeros roscados

Un agujero **Roscado (ISO métrica)** también tiene un interruptor **Modelada**, con la misma **Holgura**. Vea [Taladrar agujeros y avellanados en puntos de boceto](topic:holes).

## Cuando una rosca no se construye

- "Una rosca va en una cara redonda (un cilindro): un eje o un taladro." La cara elegida es plana o curva de otra forma.
- "No hay ningún tamaño estándar para una cara redonda de Ø0.6 mm: elija un tamaño." Ajustar a la cara no encontró nada a menos del 12 % de la cara. Elija un **Tamaño**, o cambie la cara.
- "Una cara en la que estaba esta rosca ya no existe (…). Vuelva a elegirla." Un cambio anterior eliminó la cara. Haga clic en {{ui:Seleccionar caras}} y vuelva a hacer clic en la cara.

:::note
Las roscas en pulgadas (UNC, UNF), las roscas de tubería, las roscas cónicas, las salidas de rosca y los inicios de rosca achaflanados todavía no están construidos. El núcleo exacto muestra una rosca modelada como cosmética.
:::
