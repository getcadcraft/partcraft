---
title: Pieza torneada por revolución
summary: Croquice la mitad de un perfil junto a una línea constructiva, hágalo girar para obtener una pieza redonda, elija el eje y el ángulo, y use un corte por revolución para las ranuras.
keywords: revolución, saliente por revolución, corte por revolución, pieza torneada, torno, flecha, eje, línea constructiva, ranura, ángulo, corte rev.
from: 593b6929
---

{{ui:Revolve}} › {{ui:Revolución}} gira un perfil alrededor de un eje, como una pieza hecha en un torno: flechas, poleas, bridas, perillas. Corte de revolución (en el menú {{ui:More}} › {{ui:Más}} del grupo Operaciones) gira un perfil para quitar material: para ranuras y rebajes.

## Revolución de una flecha escalonada

1. Croquice en el **Plano frontal**.
2. Pulse {{key:N}} para {{ui:Centerline}} › {{ui:Línea constructiva}}. Empiece en el origen y haga clic en un punto hacia la derecha, por ejemplo a 100 mm. Este es el eje. Aparece discontinuo: la geometría de construcción no forma parte del perfil.
3. Pulse {{key:L}} para Línea. Dibuje la **mitad** del perfil encima de la línea constructiva como un solo circuito cerrado: empiece en la línea constructiva, suba, avance por escalones y regrese a la línea constructiva, y luego siga por ella hasta el inicio. Sus extremos deben encontrarse: el circuito debe estar cerrado.
4. Acote los radios (alturas sobre la línea constructiva) y las longitudes. Una altura de 10 sobre la línea constructiva da un diámetro de 20.
5. Elija {{ui:Exit}} › {{ui:Salir}}.
6. Elija {{ui:Revolve}} › {{ui:Revolución}}. Aparece la flecha, con una vuelta completa.

El perfil debe quedar a un solo lado del eje. Si lo cruza: "El perfil cruza el eje. Manténgalo a un solo lado de la línea constructiva." Una arista del perfil puede quedar sobre el eje.

## Ajustes

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Operación** | Saliente (añade material), Corte (quita material), Intersección (conserva el solapamiento) o Cuerpo nuevo | Saliente para {{ui:Revolve}} › {{ui:Revolución}}; Corte para {{ui:More}} › {{ui:Más}} › {{ui:Revolved cut}} › {{ui:Corte de revolución}} |
| **Ángulo (°)** | Cuánto girar, desde un poco más de 0 hasta 360 | 360 |
| **Eje** | Primera línea constructiva, o cualquier línea o línea constructiva del croquis, listada como "Línea constructiva 1 (l1)" o "Línea 3 (l3)" | Primera línea constructiva |

Un ángulo parcial genera una cuña, girada desde el plano del croquis en un sentido.

Si el croquis no tiene línea constructiva y deja **Eje** en Primera línea constructiva: "Dibuje una línea constructiva en el croquis alrededor de la cual girar." También puede elegir como eje una línea sólida del perfil.

## Cortar una ranura

1. Con la flecha ya construida, abra un croquis nuevo en el **Plano frontal** (el mismo plano del croquis de la flecha).
2. Dibuje una línea constructiva sobre el mismo eje: empiece en el origen y manténgala horizontal para que reciba una H, o escríbala con **Añadir por coordenadas** (por ejemplo, de `0, 0` a `100, 0`). Un croquis nuevo no se ajusta a las líneas de otro croquis.
3. Dibuje un pequeño rectángulo cerrado que se superponga con el borde de la flecha donde va la ranura.
4. Elija {{ui:Exit}} › {{ui:Salir}}, y luego {{ui:More}} › {{ui:Más}} › {{ui:Revolved cut}} › {{ui:Corte de revolución}}.

## Revoluciones en ensamblajes

Una revolución tiene un eje que otras operaciones y ensamblajes pueden usar:

- un patrón **Circular** usa por defecto el eje de la última revolución (vea [Patrones y simetrías de operaciones](topic:patterns-mirror));
- en un ensamblaje, una unión entre caras creadas por revoluciones empieza como una unión de **revolución**, y **Centrar en** ofrece "Eje de Revolve1" (vea [Crear un ensamblaje](topic:build-assembly)).

## Curvas verdaderas y facetas

PartCraft construye una revolución con el núcleo de malla (la etiqueta de la barra de estado dice "Núcleo de malla"): las formas redondas son facetas planas, 64 por vuelta por defecto, y los volúmenes quedan un poco por debajo del valor real (alrededor de 0.16 % con 64). La vista y las exportaciones STL, 3MF y STEP están hechas de esas facetas: establezca **Curvas** (haga clic en un espacio vacío y luego en el panel derecho) en Fina (128) o Muy fina (256) para obtener superficies más suaves. Los cilindros, conos y toros verdaderos requieren un núcleo exacto: todavía no disponible en esta versión. Vea [El núcleo de malla](topic:solid-kernels).
