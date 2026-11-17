---
title: Splines, recorte, desfase y otras herramientas de croquis
summary: Dibuje splines por puntos de paso y por puntos de control, recorte y alargue curvas, desfase una cadena, cree simetrías respecto a una línea constructiva, añada polígonos y ranuras, cree matrices de geometría de croquis y proyecte aristas del modelo.
keywords: spline, punto de paso, punto de control, b-spline, nurbs, curva, recortar, alargar, desfase, simetría, simétrica, polígono, hexágono, ranura, matriz, matriz lineal, matriz circular, proyectar, proyectar arista, incluir, convertir entidades
from: 3ecb166a
---

Estas herramientas funcionan en un croquis abierto. {{ui:Spline}} y {{ui:Recortar}} están en la barra de herramientas. Las demás están en {{ui:Más}}, al final de las herramientas de croquis. Cada herramienta es un paso de deshacer, y {{key:Esc}} la detiene. Para las herramientas básicas de dibujo consulte [Dibujar su primer croquis](topic:sketch-basics).

## Splines

Una spline es una curva suave. Hay dos tipos.

| Herramienta | Tecla | Cómo dibujar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Haga clic en los puntos por los que pasa la curva. Termine con {{key:Enter}}, {{key:Esc}}, un clic derecho o un doble clic. Haga clic de nuevo en el primer punto para cerrar la spline |
| {{ui:Spline por puntos de control}} (en {{ui:Más}}) | | Haga clic en los puntos de control. La curva se atrae hacia ellos, pero solo toca el primero y el último. El polígono de control discontinuo se muestra mientras dibuja y después |

- **Los puntos son puntos de croquis.** Arrástrelos o asígneles relaciones y cotas como a cualquier otro punto. El primer punto de una spline puede ajustarse al extremo de una línea, lo que las une con una relación coincidente.
- **Tangente en un extremo.** Seleccione una línea, arco o spline que llegue a un extremo de una spline, después la spline, y elija {{ui:T Tangente}}. La dirección del extremo de la spline sigue entonces a la línea. Una tangente lejos de los extremos de la spline se rechaza: "Una tangente a una spline necesita que la línea, arco o spline llegue a uno de sus extremos."
- **Extremos.** Sin relación tangente, los extremos de una spline por puntos de paso son naturales (sin curvatura en el extremo mismo). La curva es cúbica y pasa por todos los puntos, con su espaciado determinado por las distancias entre los puntos.
- **Las splines cerradas** forman un perfil por sí solas. Las splines abiertas unen líneas y arcos en un contorno cerrado como cualquier otra curva.
- Al eliminar un punto dentro de una spline se quita ese punto y la spline se conserva, mientras tenga al menos dos puntos (tres si está cerrada).

La extrusión y la revolución construyen la spline con el núcleo de malla a partir de tramos rectos cortos (las curvas verdaderas necesitan un núcleo exacto: no incluido todavía en esta versión). La exportación a DXF escribe una spline como polilínea que se mantiene a 0.01 mm de la curva, porque DXF R12 no tiene entidad spline.

## Recortar y alargar

| Herramienta | Tecla | Cómo |
|---|---|---|
| {{ui:Recortar}} | {{key:T}} | Señale una curva: el tramo que se eliminaría se muestra en rojo, hasta los cruces más cercanos. Haga clic para quitarlo. Una curva que no cruza nada se elimina entera |
| {{ui:Alargar}} (en {{ui:Más}}) | {{key:E}} | Haga clic en una línea o arco cerca del extremo para alargarlo. Crece hasta la siguiente curva que encuentre. "No hay nada que ese extremo pueda alcanzar." cuando no hay obstáculo |

Recortar y Alargar funcionan con líneas, arcos, círculos y splines (Alargar: solo con líneas y arcos).

- Un **círculo** recortado se convierte en un arco. Su cota de radio o diámetro pasa al arco.
- Al recortar el centro de una línea quedan dos líneas que siguen sobre la misma recta. Al recortar el centro de un arco quedan dos arcos con el mismo centro y una relación Igual.
- Una **spline** recortada se convierte en una spline por puntos de control que sigue exactamente la curva anterior. Una relación tangente en un extremo que se conserve se mantiene.
- El nuevo extremo se sitúa sobre la curva que lo cortó (sobre la línea, arco o círculo, o coincidente con su extremo). Las splines no pueden contener un punto, así que una spline que corta no añade ninguna relación.

**Las relaciones que ya no encajan se eliminan**, y la barra de estado indica cuántas. Por ejemplo, una cota de longitud en una línea recortada se elimina, pero las relaciones horizontal o paralela se conservan.

## Desfase

1. Elija {{ui:Desfase}} en {{ui:Más}} o pulse {{key:O}}.
2. Haga clic en una línea, arco, círculo o spline. Se resalta toda su cadena: todas las curvas unidas extremo con extremo, hasta un punto donde se encuentran tres o más. Para desfasar solo parte de una cadena, seleccione antes esas curvas, luego elija Desfase y haga clic en una de ellas.
3. Mueva el puntero hacia el lado donde va la copia. Aparece una vista previa discontinua. Pulse {{key:B}} para ambos lados.
4. Haga clic, escriba la distancia y pulse {{key:Enter}}.

Las líneas y los arcos se desfasan exactamente. Las esquinas se alargan o se recortan hasta encontrarse. La copia tiene una cota **Desfase**, y las demás piezas la siguen: haga doble clic en la cota para cambiar la copia completa. Una distancia demasiado grande para la cadena se rechaza, por ejemplo: "Esa distancia es demasiado grande para esta cadena: un lado se invertiría."

Una **spline** se desfasa mediante una nueva spline por puntos de paso dentro de 0.001 mm del desfase real. Esta copia queda fija: no sigue los cambios posteriores y no tiene cota de Desfase. Una spline en una cadena necesita uniones suaves (tangentes) en sus extremos.

## Simetría

1. Con Seleccionar, elija lo que quiere simetrizar.
2. Elija {{ui:Simetría}} en {{ui:Más}} o pulse {{key:M}}.
3. Haga clic en la línea o línea constructiva respecto a la que se hace la simetría.

Cada punto simétrico recibe una relación **Simétrica** con su original, de modo que la copia sigue al original cuando este cambia. Los puntos situados sobre la línea de simetría se comparten, y los círculos simétricos reciben una relación Igual. Si no había nada seleccionado, haga clic en los elementos a simetrizar, pulse {{key:Enter}} y luego haga clic en la línea de simetría.

## Polígonos y ranuras

| Herramienta | Cómo |
|---|---|
| {{ui:Polígono}} | Haga clic en el centro, luego en un vértice, y escriba el número de lados (de 3 a 64). Los lados son iguales y los vértices se sitúan sobre un círculo de construcción. Acote el círculo para dar tamaño al polígono |
| {{ui:Ranura}} | Haga clic en el centro de un extremo, luego en el centro del otro extremo, y después haga clic para fijar el ancho. Dos líneas, tangentes a dos semicírculos iguales |

## Matrices de croquis

Seleccione primero la geometría y después:

- {{ui:Matriz lineal}}: haga clic en un punto inicial, luego donde va la primera copia, y escriba el número de copias (incluido el original).
- {{ui:Matriz circular}}: haga clic en el centro, luego escriba el número de copias, repartidas uniformemente en una vuelta completa.

Las copias llevan consigo las relaciones entre la geometría seleccionada (una matriz circular omite las horizontales y verticales). Las copias no están vinculadas con el original: si cambia una, las demás se quedan como están.

## Proyectar aristas de la pieza

1. Elija {{ui:Proyectar arista}} en {{ui:Más}}.
2. Haga clic en una arista recta o circular de la pieza situada detrás del croquis.

La arista se copia exactamente sobre el plano del croquis y queda fija (relación Fijar). No sigue los cambios posteriores de la pieza. Pulse {{key:Q}} para convertirla en geometría de construcción. Un círculo inclinado respecto al plano del croquis se proyectaría como una elipse, así que se rechaza. También se rechazan las aristas de forma libre y las que apuntan directamente fuera del croquis. Proyectar necesita un núcleo exacto: todavía no está incluido en esta versión.
