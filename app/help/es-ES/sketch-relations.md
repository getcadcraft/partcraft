---
title: Relaciones y cotas de croquis
summary: Cada relación y cota que tiene un croquis de PartCraft, qué seleccionar en cada caso, su símbolo y cómo se comporta al resolver.
keywords: relaciones, restricciones, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concéntrica, punto medio, fijar, distancia, distancia horizontal, distancia vertical, radio, diámetro, ángulo, símbolos, glifos
from: 9831e7be
---

Las relaciones fijan cómo está la geometría respecto a otra geometría. Las cotas fijan tamaños. Para añadir una relación, seleccione elementos con la herramienta Seleccionar ({{key:S}}) y elija su botón en el panel derecho; para añadir una cota, use la herramienta Cota ({{key:D}}) o los botones de cota del panel derecho. Cómo trabajar con ellas: [Definir por completo un croquis](topic:relations-dimensions).

«Curva» en lo que sigue significa un círculo o un arco. El origen cuenta como punto.

## Relaciones

| Botón | Símbolo | Seleccionar | Efecto |
|---|---|---|---|
| {{ui:• Coincidente}} | • (se muestra solo al seleccionarla o si hay un problema) | Dos puntos | Los puntos coinciden |
| {{ui:• Coincidente}} | • | Un punto y una línea | El punto queda sobre la línea (o sobre su prolongación) |
| {{ui:• Coincidente}} | • | Un punto y una curva | El punto queda sobre el círculo o arco |
| {{ui:H Horizontal}} | H | Una línea, o dos puntos | La línea queda nivelada, o los dos puntos están a la misma altura |
| {{ui:V Vertical}} | V | Una línea, o dos puntos | La línea queda vertical, o los puntos están uno encima del otro |
| {{ui:∥ Paralela}} | ∥ | Dos líneas | Las líneas van en el mismo sentido |
| {{ui:⊥ Perpendicular}} | ⊥ | Dos líneas | Las líneas se cruzan en ángulo recto |
| {{ui:T Tangente}} | T | Una línea y una curva | La línea toca la curva sin cruzarla |
| {{ui:T Tangente}} | T | Dos curvas | Se tocan, por fuera o por dentro, como se dibujaron |
| {{ui:T Tangente}} | T | Una spline y una línea, arco o spline que llega a uno de sus extremos | La spline sale de ese extremo en la dirección de la otra curva |
| {{ui:= Igual}} | = | Dos líneas | Misma longitud |
| {{ui:= Igual}} | = | Dos curvas | Mismo radio |
| {{ui:◎ Concéntrica}} | ◎ | Dos curvas | Mismo centro |
| {{ui:◎ Concéntrica}} | ◎ | Un punto y una curva | El punto queda en el centro de la curva |
| {{ui:M Punto medio}} | M | Un punto y una línea | El punto queda en el punto medio de la línea |
| {{ui:↔ Simétrica}} | ↔ | Dos puntos y una línea | Los puntos son imágenes especulares respecto a la línea (Simetría las añade) |
| {{ui:⚓ Fijar}} | ⚓ | Un punto, una línea, una curva o una spline | Lo mantiene exactamente donde está ahora (en una spline, sus puntos) |

Aquí las líneas incluyen las líneas constructivas. Al dibujar se añaden algunas relaciones por usted: ajustar a un punto lo hace coincidente, ajustar a una curva coloca el punto sobre ella, las líneas casi horizontales o verticales reciben H o V, y un rectángulo viene con sus cuatro esquinas unidas, dos H y dos V.

**Fijar** es una forma rápida de impedir que algo se mueva, pero entonces la pieza no puede seguir un cambio de cota en otro lugar. Prefiera cotas respecto al origen.

## Cotas

| Botón | Seleccionar | Mide | Se muestra como |
|---|---|---|---|
| {{ui:Distancia}} | Una línea | Su longitud | Distancia 40 |
| {{ui:Distancia}} | Dos puntos | La distancia en línea recta entre ellos | Distancia 40 |
| {{ui:Distancia}} | Un punto y una línea | La distancia del punto a la línea, perpendicular a ella | Distancia 40 |
| {{ui:Distancia}} | Dos líneas paralelas | La separación entre ellas | Distancia 40 |
| {{ui:Distancia horizontal}} | Dos puntos, o una línea | Solo la distancia izquierda-derecha | Distancia horizontal 40 |
| {{ui:Distancia vertical}} | Dos puntos, o una línea | Solo la distancia arriba-abajo | Distancia vertical 40 |
| {{ui:Radio}} | Un círculo o arco | Su radio | Radio R10 |
| {{ui:Diámetro}} | Un círculo o arco | Su diámetro | Diámetro ⌀20 |
| {{ui:Ángulo}} | Dos líneas que no sean paralelas | El ángulo entre ellas, de 0 a 180 grados | Ángulo 30° |

Con la herramienta Cota, PartCraft elige el tipo según lo que haga clic y dónde coloque el número:

| Usted hace clic en | Obtiene |
|---|---|
| Una línea | Su longitud; para una línea inclinada, horizontal si el número va por encima o por debajo, vertical si va al costado |
| Un círculo | Diámetro |
| Un arco | Radio |
| Dos puntos | Distancia; horizontal o vertical como con una línea inclinada |
| Un punto y una línea | Distancia del punto a la línea |
| Dos líneas | Ángulo, o la distancia si son paralelas |
| Un punto y un círculo | Nada: "Estos elementos no pueden acotarse juntos." Acote en su lugar al punto central del círculo |

**Desfase** (se muestra como distancia) lo crea la herramienta Desfase: mantiene una línea copiada paralela a esa distancia, o un arco o círculo copiado concéntrico con un radio mayor o menor en esa cantidad. Las demás piezas del mismo desfase llevan una relación **O** y siguen a la única cota de Desfase. Consulte [Splines, recorte, desfase y otras herramientas de croquis](topic:sketch-tools).

Los valores de cota son milímetros (o grados), nunca negativos. El radio y el diámetro deben ser mayores que cero. Para las distancias se admite un valor de 0: dos puntos a distancia 0 son coincidentes.

## Cómo se comporta la resolución

- **Mínimo movimiento.** Cuando cambia un valor, el solucionador mueve la geometría lo menos posible. Una línea cuya longitud cambia crece por igual en sus dos extremos si ninguno está fijado.
- **Sin volteos.** Las distancias de un punto a una línea, las distancias horizontales y verticales, los ángulos y las tangencias recuerdan el lado en que se hicieron. Cambiar un valor nunca traslada la geometría al otro lado.
- **Los conflictos no tocan nada.** Si las relaciones se contradicen, el croquis queda exactamente como estaba y las relaciones en conflicto se vuelven rojas.
- **Las relaciones redundantes** (implicadas por otras) se indican en la barra de estado ("ya está implícita. Elimínela.") y el elemento se construye igualmente, con una advertencia.
- **Uniones tangentes.** Cuando un arco de redondeo se une a sus líneas en un punto extremo común, la tangencia se resuelve de forma que queda bien definida allí, de modo que los redondeos de croquis no se leen como sobredefinidos.

## No disponible todavía

Relaciones colineal, coradial y de atravesamiento; un punto sobre una spline; cotas de referencia (conducidas); cotas de ordenada y de longitud de arco; ecuaciones entre cotas. Para líneas colineales use Paralela más una distancia 0.
