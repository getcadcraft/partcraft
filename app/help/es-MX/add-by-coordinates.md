---
title: Agregar geometría de croquis escribiendo coordenadas
summary: Use Agregar por coordenadas en el panel de croquis para colocar líneas, líneas constructivas, rectángulos, círculos y puntos en posiciones exactas, solo con el teclado.
keywords: coordenadas, entrada escrita, entrada por teclado, entrada numérica, posición exacta, x y, coordenadas absolutas, accesibilidad, sin ratón
from: 5e6c1656
---

Cuando conoce los números, escribirlos es más rápido que hacer clic y acotar. **Agregar por coordenadas** está en el panel derecho siempre que hay un croquis abierto. También le permite construir un croquis sin usar un puntero.

Las coordenadas están en milímetros, en los ejes propios del croquis: x hacia la derecha y y hacia arriba, según se ve el croquis, con (0, 0) en el origen (el círculo rojo con una cruz).

## Agregar una forma

1. Abra un croquis (vea [Dibuje su primer croquis](topic:sketch-basics)).
2. En el panel derecho, desplácese hasta **Agregar por coordenadas**.
3. Elija la forma en **Agregar**: Línea, Línea constructiva, Rectángulo, Círculo o Punto.
4. Complete los cuadros:

| Forma | Cuadros |
|---|---|
| Línea | **Desde x, y** y **Hasta x, y** |
| Línea constructiva | **Desde x, y** y **Hasta x, y** |
| Rectángulo | **Esquina x, y** y **Esquina opuesta x, y** |
| Círculo | **Centro x, y** y **Radio** |
| Punto | **En x, y** |

5. Elija {{ui:Agregar}} o pulse {{key:Enter}} en cualquier cuadro.

La forma aparece y la barra de estado dice, por ejemplo, "Se agregó un rectángulo." Los cuadros se vacían, listos para la siguiente. Cada adición es un paso de {{ui:Deshacer}}.

Escriba un par como dos números separados por una coma o un espacio: `0, 0`, `25 -10` o `12.5,40`. Los números negativos y los decimales son válidos. Un radio debe ser mayor que cero. Si algo no se lee como número, la barra de estado dice: "Escriba las coordenadas como "x, y" y un radio mayor que cero."

## Ejemplo: contorno de una placa con ranura, escrito

1. Abra un croquis en **Plano frontal**.
2. **Agregar**: Rectángulo. **Esquina x, y**: `-50, -30`. **Esquina opuesta x, y**: `50, 30`. {{key:Enter}}.
3. **Agregar**: Círculo. **Centro x, y**: `-30, 0`. **Radio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Radio**: `5`. {{key:Enter}}.
5. Elija {{ui:Salir del croquis}} y luego {{ui:Extruir}}: una placa de 100 × 60 con dos taladros de 10 mm.

## La geometría escrita se coloca, no se fija

La geometría escrita queda en el lugar correcto, pero **no son relaciones**. Las formas siguen en azul (con definición insuficiente) y podrían moverse si las arrastra o si cambia otra cota:

- un rectángulo escrito trae sus propias relaciones de esquina, horizontales y verticales, como uno dibujado, pero nada lo vincula al origen;
- una línea escrita no tiene relación horizontal ni vertical, aunque sus coordenadas formen una línea horizontal;
- el centro de un círculo escrito queda libre.

Para que el croquis quede totalmente definido, agregue cotas y relaciones después (vea [Defina totalmente un croquis](topic:relations-dimensions)). Por ejemplo, seleccione una esquina del rectángulo y el origen, y elija {{ui:• Coincidente}}, o acote los centros de los círculos desde el origen.

:::note
Sin puntero puede llegar hasta aquí: muévase a una fila de plano del historial con {{key:Tab}} y las teclas de flecha, pulse {{key:Enter}} para seleccionarla, pulse {{key:S}} para dibujar un croquis, agregue formas aquí, y llegue a **Editar** junto a cada cota y use {{ui:Salir del croquis}} con {{key:Tab}}. Seleccionar geometría, y por lo tanto agregar relaciones o cotas nuevas, todavía requiere un clic o un toque en esta versión.
:::

## Límites

- Los arcos todavía no se pueden escribir. Dibújelos con la herramienta Arco, o escriba un círculo y use relaciones.
- No hay coordenadas relativas (desde el último punto) ni polares (longitud y ángulo) en este cuadro.
- La geometría escrita no se ajusta automáticamente a puntos existentes. Escriba las mismas coordenadas que un punto existente y luego agregue una relación {{ui:• Coincidente}} entre ellos si deben quedar unidos.
