---
title: Splines, recortar, desfase y otras herramientas de croquis
summary: Dibuje splines por puntos de ajuste y por puntos de control, recorte y alargue curvas, desfase una cadena, cree simetrías respecto de una línea constructiva, agregue polígonos y ranuras, haga matrices de la geometría del croquis y proyecte aristas del modelo.
keywords: spline, punto de ajuste, punto de control, b-spline, nurbs, curva, recortar, alargar, desfase, simetría, simétrica, polígono, hexágono, ranura, matriz, matriz lineal, matriz circular, proyectar, proyectar arista, incluir, convertir entidades
from: 3ecb166a
---

Estas herramientas funcionan en un croquis abierto. {{ui:Spline}} y {{ui:Recortar}} están en la barra de herramientas. Las demás están en {{ui:Más}}, al final de las herramientas de croquis. Cada herramienta es un paso de deshacer, y {{key:Esc}} la detiene. Para las herramientas básicas de dibujo, vea [Dibuje su primer croquis](topic:sketch-basics).

## Splines

Un spline es una curva suave. Hay dos tipos.

| Herramienta | Tecla | Cómo dibujar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Haga clic en los puntos por los que pasa la curva. Termine con {{key:Enter}}, {{key:Esc}}, un clic derecho o un doble clic. Haga clic de nuevo en el primer punto para cerrar el spline |
| {{ui:Spline por puntos de control}} (en {{ui:Más}}) | | Haga clic en los puntos de control. La curva se atrae hacia ellos, pero sólo toca el primero y el último. El polígono de control discontinuo se muestra mientras dibuja y después |

- **Los puntos son puntos de croquis.** Arrástrelos, o asígneles relaciones y cotas como a cualquier otro punto. El primer punto de un spline puede forzarse sobre el extremo de una línea, lo que las une con una relación coincidente.
- **Tangente en un extremo.** Seleccione una línea, arco o spline que se una a un extremo del spline, luego el spline, y elija {{ui:T Tangente}}. La dirección del extremo del spline sigue entonces a la línea. Una tangente lejos de los extremos del spline se rechaza: "Una tangente a un spline necesita que la línea, arco o spline se una a uno de sus extremos."
- **Extremos.** Sin una relación de tangencia, los extremos de un spline por puntos de ajuste son naturales (sin curvatura en el extremo mismo). La curva es cúbica y pasa por cada punto, con su espaciado definido por las distancias entre los puntos.
- **Los splines cerrados** forman un perfil por sí mismos. Los splines abiertos unen líneas y arcos en un bucle cerrado como cualquier otra curva.
- Al borrar un punto dentro de un spline se elimina ese punto y se conserva el spline, mientras tenga al menos dos puntos (tres si está cerrado).

Extruir y revolucionar construyen el spline con el núcleo de malla, a partir de tramos rectos cortos (las curvas verdaderas requieren un núcleo exacto, todavía no disponible en esta versión). La exportación DXF escribe un spline como una polilínea que se mantiene a 0.01 mm de la curva, porque DXF R12 no tiene entidad spline.

## Recortar y alargar

| Herramienta | Tecla | Cómo |
|---|---|---|
| {{ui:Recortar}} | {{key:T}} | Señale una curva: el tramo que se iría se muestra en rojo, hasta los cruces más cercanos. Haga clic para quitarlo. Una curva que no cruza nada se elimina completa |
| {{ui:Alargar}} (en {{ui:Más}}) | {{key:E}} | Haga clic en una línea o arco cerca del extremo para alargarlo. Crece hasta la siguiente curva que encuentra. "No hay nada que ese extremo pueda alcanzar." cuando no hay nada en el camino |

Recortar y alargar funcionan en líneas, arcos, círculos y splines (alargar: líneas y arcos).

- Un **círculo** recortado se convierte en un arco. Su cota de radio o de diámetro pasa al arco.
- Recortar el centro de una línea deja dos líneas que siguen en la misma recta. Recortar el centro de un arco deja dos arcos con el mismo centro y una relación igual.
- Un **spline** recortado se convierte en un spline por puntos de control que sigue exactamente la curva original. Una relación de tangencia en un extremo que se conserva, se mantiene.
- El nuevo extremo se coloca sobre la curva que lo cortó (sobre la línea, arco o círculo, o coincidente con su extremo). Los splines no pueden contener un punto, así que un spline que corta no agrega ninguna relación.

**Las relaciones que ya no encajan se eliminan**, y la barra de estado indica cuántas. Por ejemplo, una cota de longitud en una línea recortada se elimina, pero las relaciones horizontal o paralela se conservan.

## Desfase

1. Elija {{ui:Desfase}} en {{ui:Más}} o pulse {{key:O}}.
2. Haga clic en una línea, arco, círculo o spline. Toda su cadena se resalta: todas las curvas unidas de extremo a extremo, hasta un punto donde se encuentran tres o más. Para desfasar sólo una parte de una cadena, seleccione primero esas curvas, luego elija Desfase y haga clic en una de ellas.
3. Mueva el puntero hacia el lado donde irá la copia. Aparece una vista previa discontinua. Pulse {{key:B}} para ambos lados.
4. Haga clic, escriba la distancia y pulse {{key:Enter}}.

Las líneas y arcos se desfasan con exactitud. Las esquinas se alargan o recortan hasta encontrarse. La copia tiene una cota de **Desfase**, y las demás piezas la siguen: haga doble clic en la cota para cambiar toda la copia. Una distancia demasiado grande para la cadena se rechaza, por ejemplo: "Esa distancia es demasiado grande para esta cadena: un lado se volvería hacia adentro."

Un **spline** se desfasa con un nuevo spline por puntos de ajuste, dentro de 0.001 mm del desfase verdadero. Esta copia queda fija: no sigue cambios posteriores y no tiene cota de Desfase. Un spline en una cadena necesita uniones suaves (tangentes) en sus extremos.

## Simetría

1. Con Seleccionar, elija lo que va a reflejar.
2. Elija {{ui:Simetría}} en {{ui:Más}} o pulse {{key:M}}.
3. Haga clic en la línea o línea constructiva respecto de la cual reflejar.

Cada punto reflejado recibe una relación **Simétrica** con su original, de modo que la copia sigue al original cuando éste cambia. Los puntos que están sobre la línea de simetría se comparten, y los círculos reflejados reciben una relación Igual. Si no había nada seleccionado, haga clic en los elementos a reflejar, pulse {{key:Enter}} y luego haga clic en la línea de simetría.

## Polígonos y ranuras

| Herramienta | Cómo |
|---|---|
| {{ui:Polígono}} | Haga clic en el centro, luego en una esquina, y escriba el número de lados (de 3 a 64). Los lados son iguales y las esquinas se apoyan en un círculo de construcción. Acote el círculo para dimensionar el polígono |
| {{ui:Ranura}} | Haga clic en el centro de un extremo, luego en el centro del otro extremo, y luego haga clic para fijar el ancho. Dos líneas, tangentes a dos semicírculos iguales |

## Matrices de croquis

Seleccione primero la geometría, luego:

- {{ui:Matriz lineal}}: haga clic en un punto de inicio, luego donde va la primera copia, y escriba el número de copias (incluido el original).
- {{ui:Matriz circular}}: haga clic en el centro, luego escriba el número de copias, distribuidas de forma uniforme en una vuelta completa.

Las copias llevan consigo las relaciones entre la geometría seleccionada (una matriz circular deja fuera las horizontales y verticales). Las copias no están vinculadas al original: si cambia una, las demás permanecen como están.

## Proyectar aristas de la pieza

1. Elija {{ui:Proyectar arista}} en {{ui:Más}}.
2. Haga clic en una arista recta o circular de la pieza detrás del croquis.

La arista se copia sobre el plano del croquis con exactitud y queda fija (relación Fijar). No sigue cambios posteriores en la pieza. Pulse {{key:Q}} para convertirla en geometría de construcción. Un círculo inclinado respecto del plano del croquis se proyectaría como una elipse, así que se rechaza. También se rechazan las aristas de forma libre y las que apuntan directamente hacia fuera del croquis. Proyectar requiere un núcleo exacto: todavía no está implementado en esta versión.
