---
title: Revolucionar una pieza torneada
summary: Dibuje la mitad de un perfil junto a una línea constructiva, revolúcionelo para obtener una pieza redonda, elija el eje y el ángulo, y use un corte de revolución para las ranuras.
keywords: revolución, saliente de revolución, corte de revolución, pieza torneada, torno, eje, línea constructiva, ranura, ángulo, corte rev.
from: 593b6929
---

{{ui:Revolución}} gira un perfil alrededor de un eje, como una pieza hecha en un torno: ejes, poleas, bridas, pomos. {{ui:Corte de revolución}} (en el menú {{ui:Más}} del grupo Elementos) gira un perfil para quitar material, en ranuras y rebajes.

## Revolucionar un eje escalonado

1. Dibuje un croquis sobre el **plano Alzado**.
2. Pulse {{key:N}} para {{ui:Línea constructiva}}. Empiece en el origen y haga clic en un punto recto hacia la derecha, por ejemplo a 100 mm. Este es el eje. Es discontinuo: la geometría constructiva no forma parte del perfil.
3. Pulse {{key:L}} para Línea. Dibuje la **mitad** del perfil por encima de la línea constructiva como un único bucle cerrado: empiece en la línea constructiva, suba, avance por el escalón, vuelva a bajar a la línea constructiva y recórrala hasta el inicio. Sus extremos deben encontrarse: el bucle debe estar cerrado.
4. Acote los radios (alturas sobre la línea constructiva) y las longitudes. Una altura de 10 sobre la línea constructiva da un diámetro de 20.
5. Elija {{ui:Salir}}.
6. Elija {{ui:Revolución}}. Aparece el eje, con una vuelta completa.

El perfil debe quedar a un solo lado del eje. Si lo cruza: "El perfil cruza el eje. Manténgalo a un lado de la línea constructiva." Una arista del perfil puede estar sobre el eje.

## Ajustes

| Ajuste | Qué hace | Por defecto |
|---|---|---|
| **Operación** | Saliente (añadir material), Corte (quitar material), Intersección (conservar el solape) o Cuerpo nuevo | Saliente para {{ui:Revolución}}, Corte para {{ui:Más}} › {{ui:Corte de revolución}} |
| **Ángulo (°)** | Cuánto girar, desde algo más de 0 hasta 360 | 360 |
| **Eje** | Primera línea constructiva, o cualquier recta o línea constructiva del croquis, listada como "Línea constructiva 1 (l1)" o "Recta 3 (l3)" | Primera línea constructiva |

Un ángulo parcial crea una cuña, girada desde el plano del croquis en un sentido.

Si el croquis no tiene línea constructiva y deja **Eje** en Primera línea constructiva: "Dibuje una línea constructiva en el croquis para revolucionar alrededor de ella." También puede elegir como eje una línea sólida del perfil.

## Hacer una ranura

1. Con el eje ya construido, abra un nuevo croquis sobre el **plano Alzado** (el mismo plano que el croquis del eje).
2. Dibuje una línea constructiva sobre el mismo eje: empiece en el origen y manténgala horizontal para que reciba una H, o escríbala con **Añadir por coordenadas** (por ejemplo, de `0, 0` a `100, 0`). Un croquis nuevo no se ajusta a las líneas de otro croquis.
3. Dibuje un pequeño rectángulo cerrado que se solape con el borde del eje donde va la ranura.
4. Elija {{ui:Salir}} y, después, {{ui:Más}} › {{ui:Corte de revolución}}.

## Revoluciones en ensamblajes

Una revolución tiene un eje que otros elementos y ensamblajes pueden usar:

- una matriz **Circular** usa por defecto el eje de la última revolución (véase [Elementos de matriz y simetría](topic:patterns-mirror));
- en un ensamblaje, una unión entre caras creadas por revoluciones empieza como una unión de revolución, y **Centrar en** ofrece "Eje de Revolve1" (véase [Crear un ensamblaje](topic:build-assembly)).

## Curvas reales y facetas

PartCraft construye una revolución con el núcleo de malla (la etiqueta de la barra de estado dice "Núcleo de malla"): las formas redondas son facetas planas, 64 por vuelta por defecto, y los volúmenes quedan algo por debajo del valor real (alrededor de 0,16 % con 64). La vista y las exportaciones STL, 3MF y STEP se hacen con esas facetas: configure **Curvas** (haga clic en un espacio vacío y después en el panel derecho) en Fina (128) o Muy fina (256) para obtener superficies más suaves. Los cilindros, conos y toros reales necesitan un núcleo exacto: aún no construido en esta versión. Véase [El núcleo de malla](topic:solid-kernels).
