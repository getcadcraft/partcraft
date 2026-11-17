---
title: Añadir geometría de croquis escribiendo coordenadas
summary: Utilice Añadir por coordenadas en el panel del croquis para colocar líneas, líneas constructivas, rectángulos, círculos y puntos en posiciones exactas, solo con el teclado.
keywords: coordenadas, entrada escrita, entrada por teclado, entrada numérica, posición exacta, x y, coordenadas absolutas, accesibilidad, sin ratón
from: 5e6c1656
---

Cuando conoce los valores, escribirlos es más rápido que hacer clic y acotar. **Añadir por coordenadas** está en el panel derecho siempre que hay un croquis abierto. También permite crear un croquis sin puntero.

Las coordenadas están en milímetros, en los ejes propios del croquis: x hacia la derecha e y hacia arriba, según se mira el croquis, con (0, 0) en el origen (el círculo rojo con una cruz).

## Añadir una forma

1. Abra un croquis (véase [Dibuje su primer croquis](topic:sketch-basics)).
2. En el panel derecho, desplácese hasta **Añadir por coordenadas**.
3. Elija la forma en **Añadir**: Línea, Línea constructiva, Rectángulo, Círculo o Punto.
4. Rellene las casillas:

| Forma | Casillas |
|---|---|
| Línea | **Desde x, y** y **Hasta x, y** |
| Línea constructiva | **Desde x, y** y **Hasta x, y** |
| Rectángulo | **Esquina x, y** y **Esquina opuesta x, y** |
| Círculo | **Centro x, y** y **Radio** |
| Punto | **En x, y** |

5. Elija {{ui:Añadir}}, o pulse {{key:Enter}} en cualquier casilla.

La forma aparece y la barra de estado indica, por ejemplo, "Se ha añadido un rectángulo." Las casillas se vacían, listas para la siguiente. Cada adición es un paso de deshacer.

Escriba un par como dos números separados por coma o espacio: `0, 0`, `25 -10` o `12.5,40`. Los números negativos y los decimales son válidos. Un radio debe ser mayor que cero. Si algo no se reconoce como número, la barra de estado indica: 'Escriba las coordenadas como "x, y" y un radio mayor que cero.'

## Ejemplo: contorno de una placa con ranura, escrito

1. Abra un croquis en el **Plano alzado**.
2. **Añadir**: Rectángulo. **Esquina x, y**: `-50, -30`. **Esquina opuesta x, y**: `50, 30`. {{key:Enter}}.
3. **Añadir**: Círculo. **Centro x, y**: `-30, 0`. **Radio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Radio**: `5`. {{key:Enter}}.
5. Elija {{ui:Salir del croquis}}, después {{ui:Extruir}}: una placa de 100 × 60 con dos taladros de 10 mm.

## La geometría escrita queda colocada, no fijada

Las coordenadas escritas colocan la geometría en su sitio, pero **no son relaciones**. Las formas siguen azules (no totalmente definidas) y podrían moverse si las arrastra o si cambia otra cota:

- un rectángulo escrito trae sus propias relaciones de esquina, horizontales y verticales, como uno dibujado, pero nada lo liga al origen;
- una línea escrita no tiene relación horizontal ni vertical, aunque la haya escrito horizontal;
- el centro de un círculo escrito es libre.

Para que el croquis quede completamente definido, añada cotas y relaciones después (véase [Defina completamente un croquis](topic:relations-dimensions)). Por ejemplo, seleccione una esquina del rectángulo y el origen, y elija {{ui:• Coincidente}}, o acote los centros de los círculos desde el origen.

:::note
Sin puntero puede llegar hasta aquí: lleve el cursor a una fila de plano del historial con {{key:Tab}} y las teclas de flecha, pulse {{key:Enter}} para seleccionarla, pulse {{key:S}} para croquizar, añada formas aquí, y llegue a **Editar** junto a cada cota y salga con {{key:Tab}} hasta {{ui:Salir del croquis}}. Seleccionar geometría, y por tanto añadir relaciones o nuevas cotas, sigue necesitando un clic o un toque en esta versión.
:::

## Limitaciones

- Los arcos todavía no se pueden escribir. Dibújelos con la herramienta Arco, o escriba un círculo y use relaciones.
- No hay coordenadas relativas (desde el último punto) ni polares (longitud y ángulo) en este cuadro.
- La geometría escrita no se ajusta a puntos existentes. Escriba las mismas coordenadas que un punto existente y añada después una relación {{ui:• Coincidente}} entre ellos si deben quedar unidos.
