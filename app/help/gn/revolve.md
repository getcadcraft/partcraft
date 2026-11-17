---
title: Revolución de una pieza torneada
summary: Bosquejá medio perfil al lado de una línea de eje, revolucionalo para formar una pieza redonda, elegí el eje y el ángulo, y usá un corte de revolución para las ranuras.
keywords: revolución, saliente de revolución, corte de revolución, pieza torneada, torno, eje, flecha, línea de eje, ranura, ángulo, corte de revolución
from: 593b6929
---

{{ui:Revolución}} gira un perfil alrededor de un eje, como una pieza hecha en un torno: ejes, poleas, bridas, perillas. {{ui:Corte de revolución}} (en el menú {{ui:Más}} del grupo Elementos) gira un perfil para quitar material, para ranuras y rebajes.

## Revolucionar un eje escalonado

1. Bosquejá en el **plano Frontal**.
2. Presioná {{key:N}} para {{ui:Línea de eje}}. Empezá en el origen y hacé clic en un punto recto hacia la derecha, por ejemplo a 100 mm. Este es el eje. Es de trazos: la geometría de construcción no forma parte del perfil.
3. Presioná {{key:L}} para Línea. Dibujá el **medio** perfil arriba de la línea de eje como un solo bucle cerrado: empezá en la línea de eje, subí, avanzá, y bajá de nuevo a la línea de eje, después seguí por ella hasta el inicio. Sus extremos tienen que encontrarse: el bucle tiene que estar cerrado.
4. Acotá los radios (alturas sobre la línea de eje) y las longitudes. Una altura de 10 sobre la línea de eje da un diámetro de 20.
5. Eiporavo {{ui:Salir}}.
6. Eiporavo {{ui:Revolución}}. El eje aparece, una vuelta completa.

El perfil tiene que quedar de un solo lado del eje. Si lo cruza: "El perfil cruza el eje. Mantenelo de un lado de la línea de eje." Un borde del perfil puede estar sobre el eje.

## Ajustes

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Operación** | Saliente (agrega material), Corte (quita material), Intersección (mantiene la superposición) o Cuerpo nuevo | Saliente para {{ui:Revolución}}, Corte para {{ui:Más}} › {{ui:Corte de revolución}} |
| **Ángulo (°)** | Cuánto girar, desde justo arriba de 0 hasta 360 | 360 |
| **Eje** | Primera línea de eje, o cualquier línea o línea de eje del boceto, listada como "Línea de eje 1 (l1)" o "Línea 3 (l3)" | Primera línea de eje |

Un ángulo parcial hace una cuña, girada desde el plano del boceto en una dirección.

Si el boceto no tiene línea de eje y dejás **Eje** en Primera línea de eje: "Dibujá una línea de eje (una línea de construcción) en el boceto para revolucionar alrededor." También podés elegir una línea sólida del perfil como eje.

## Cortar una ranura

1. Con el eje construido, abrí un boceto nuevo en el **plano Frontal** (el mismo plano del boceto del eje).
2. Dibujá una línea de eje sobre el mismo eje: empezá en el origen y mantenela horizontal para que reciba una H, o escribila con **Agregar por coordenadas** (por ejemplo desde `0, 0` hasta `100, 0`). Un boceto nuevo no puede encajar en las líneas de otro boceto.
3. Dibujá un rectángulo cerrado pequeño que se superponga con el borde del eje donde va la ranura.
4. Eiporavo {{ui:Salir}}, después {{ui:Más}} › {{ui:Corte de revolución}}.

## Revoluciones en conjuntos

Una revolución tiene un eje que otros elementos y conjuntos pueden usar:

- un patrón **Circular** usa el eje de la última revolución por defecto (ver [Patrones y espejo](topic:patterns-mirror));
- en un conjunto, una unión entre caras hechas por revoluciones empieza como unión **de revolución**, y **Centrar en** ofrece "Eje de Revolve1" (ver [Armar un conjunto](topic:build-assembly)).

## Curvas verdaderas y facetas

PartCraft construye una revolución con el núcleo de malla (la etiqueta de la barra de estado dice "Núcleo de malla"): las formas redondas son facetas planas, 64 por vuelta por defecto, y los volúmenes quedan un poco por debajo del valor real (alrededor de 0,16 % con 64). La vista y las exportaciones STL, 3MF y STEP están hechas de esas facetas: poné **Curvas** (hacé clic en un espacio vacío, después en el panel derecho) en Fina (128) o Muy fina (256) para unas más suaves. Los cilindros, conos y toros verdaderos necesitan un núcleo exacto: todavía no están hechos en esta versión. Mirá [El núcleo de malla](topic:solid-kernels).
