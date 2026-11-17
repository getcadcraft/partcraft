---
title: Relaciones y cotas del croquis
summary: Cada relación y cota que puede tener un croquis de PartCraft, qué seleccionar para cada una, su símbolo y cómo se comporta al resolver.
keywords: relaciones, restricciones, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concéntrica, punto medio, fijar, distancia, distancia horizontal, distancia vertical, radio, diámetro, ángulo, símbolos, glifos
from: 9831e7be
---

Las relaciones fijan cómo se ubica una geometría respecto de otra. Las cotas fijan tamaños. Para agregar una relación, seleccione elementos con la herramienta Seleccionar ({{key:S}}) y elija su botón en el panel derecho; para agregar una cota, use la herramienta Cota ({{key:D}}) o los botones de cota del panel derecho. Cómo trabajar con ellas: [Definir completamente un croquis](topic:relations-dimensions).

En lo siguiente, "curva" significa un círculo o un arco. El origen cuenta como un punto.

## Relaciones

| Botón | Símbolo | Seleccionar | Efecto |
|---|---|---|---|
| {{ui:• Coincidente}} | • (se muestra sólo cuando está seleccionada o hay un problema) | Dos puntos | Los puntos coinciden |
| {{ui:• Coincidente}} | • | Un punto y una línea | El punto queda sobre la línea (o sobre su prolongación) |
| {{ui:• Coincidente}} | • | Un punto y una curva | El punto queda sobre el círculo o arco |
| {{ui:H Horizontal}} | H | Una línea, o dos puntos | La línea queda nivelada, o los dos puntos quedan a la misma altura |
| {{ui:V Vertical}} | V | Una línea, o dos puntos | La línea queda vertical, o los puntos quedan uno encima del otro |
| {{ui:∥ Paralela}} | ∥ | Dos líneas | Las líneas van en la misma dirección |
| {{ui:⊥ Perpendicular}} | ⊥ | Dos líneas | Las líneas se cortan en ángulo recto |
| {{ui:T Tangente}} | T | Una línea y una curva | La línea toca la curva sin cruzarla |
| {{ui:T Tangente}} | T | Dos curvas | Se tocan, por fuera o por dentro, como se dibujaron |
| {{ui:T Tangente}} | T | Un spline y una línea, arco o spline que se une a uno de sus extremos | El spline sale de ese extremo en la dirección de la otra curva |
| {{ui:= Igual}} | = | Dos líneas | Misma longitud |
| {{ui:= Igual}} | = | Dos curvas | Mismo radio |
| {{ui:◎ Concéntrica}} | ◎ | Dos curvas | Mismo centro |
| {{ui:◎ Concéntrica}} | ◎ | Un punto y una curva | El punto queda en el centro de la curva |
| {{ui:M Punto medio}} | M | Un punto y una línea | El punto queda en el punto medio de la línea |
| {{ui:↔ Simétrica}} | ↔ | Dos puntos y una línea | Los puntos son imágenes especulares respecto de la línea (Simetría las agrega) |
| {{ui:⚓ Fijar}} | ⚓ | Un punto, una línea, una curva o un spline | Lo mantiene exactamente donde está ahora (en un spline: sus puntos) |

Aquí, las líneas incluyen las líneas constructivas. Al dibujar se agregan algunas relaciones por usted: al forzcursor a un punto, este queda coincidente; al forzcursor a una curva, el punto queda sobre ella; las líneas casi niveladas o verticales reciben H o V; y un rectángulo viene con sus cuatro esquinas unidas, dos H y dos V.

**Fijar** es una forma rápida de impedir que algo se mueva, pero entonces la pieza no puede seguir un cambio de cota en otro lugar. Prefiera cotas respecto del origen.

## Cotas

| Botón | Seleccionar | Mide | Se muestra como |
|---|---|---|---|
| {{ui:Distancia}} | Una línea | Su longitud | Distancia 40 |
| {{ui:Distancia}} | Dos puntos | La distancia recta entre ellos | Distancia 40 |
| {{ui:Distancia}} | Un punto y una línea | La distancia del punto a la línea, perpendicular a ella | Distancia 40 |
| {{ui:Distancia}} | Dos líneas paralelas | La separación entre ellas | Distancia 40 |
| {{ui:Distancia horizontal}} | Dos puntos, o una línea | Sólo la distancia izquierda-derecha | Distancia horizontal 40 |
| {{ui:Distancia vertical}} | Dos puntos, o una línea | Sólo la distancia arriba-abajo | Distancia vertical 40 |
| {{ui:Radio}} | Un círculo o arco | Su radio | Radio R10 |
| {{ui:Diámetro}} | Un círculo o arco | Su diámetro | Diámetro ⌀20 |
| {{ui:Ángulo}} | Dos líneas que no son paralelas | El ángulo entre ellas, de 0 a 180 grados | Ángulo 30° |

Con la herramienta Cota, PartCraft elige el tipo según lo que haga clic y dónde coloque el número:

| Usted hace clic en | Obtiene |
|---|---|
| Una línea | Su longitud; para una línea inclinada, horizontal si el número queda encima o debajo de ella, vertical si queda al costado |
| Un círculo | Diámetro |
| Un arco | Radio |
| Dos puntos | Distancia; horizontal o vertical como con una línea inclinada |
| Un punto y una línea | Distancia del punto a la línea |
| Dos líneas | Ángulo, o la distancia si son paralelas |
| Un punto y un círculo | Nada: "Esos elementos no pueden acotarse juntos." Acote en cambio al punto central del círculo |

**Desfase** (se muestra como distancia) lo hace la herramienta Desfase: mantiene una línea copiada paralela a esa distancia, o un arco o círculo copiado concéntrico con un radio mayor o menor en esa magnitud. Las demás piezas del mismo desfase llevan una relación **O** y siguen a la única cota de Desfase. Vea [Splines, recortar, desfase y otras herramientas de croquis](topic:sketch-tools).

Los valores de cota son milímetros (o grados), nunca negativos. El radio y el diámetro deben ser mayores que cero. Se permite un valor de 0 para distancias: dos puntos separados 0 quedan coincidentes.

## Cómo se comporta la resolución

- **Mínimo movimiento.** Cuando cambia un valor, el solucionador mueve la geometría lo menos posible. Una línea cuya longitud cambia crece por igual en ambos extremos si nada sujeta ninguno.
- **Sin voltear.** Las distancias de un punto a una línea, las distancias horizontales y verticales, los ángulos y las tangencias recuerdan de qué lado se hicieron. Cambiar un valor nunca voltea la geometría al otro lado.
- **Los conflictos no tocan nada.** Si las relaciones se contradicen, el croquis queda exactamente como estaba y las conflictivas se vuelven rojas.
- **Las relaciones redundantes** (implicadas por otras) se indican en la barra de estado ("ya está implícita. Elimínela.") y la operación se construye igual, con una advertencia.
- **Uniones tangentes.** Donde un arco de redondeo se une a sus líneas en un punto final compartido, la tangencia se resuelve en una forma que queda bien definida allí, así que los redondeos de croquis no se leen como sobredefinidos.

## Todavía no disponible

Relaciones de colinealidad, coradialidad y atravesamiento; un punto sobre un spline; cotas de referencia; cotas de ordenada y de longitud de arco; ecuaciones entre cotas. Use Paralela más una distancia de 0 para líneas colineales.
