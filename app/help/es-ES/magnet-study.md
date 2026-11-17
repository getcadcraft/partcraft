---
title: Estudio magnético de un croquis
summary: Convierta los perfiles cerrados de sus croquis en un modelo magnético plano (hierro, imanes, bobinas), vea el campo y lea la fuerza y el par sobre un cuerpo.
keywords: imán, magnético, magnetostático, campo, densidad de flujo, fuerza, par, bobina, culata, hierro, curva B-H, imán permanente, actuador, motor, solenoide, maxwell
from: 604efc3b
---

Use {{ui:Más}} en la barra de Operaciones › {{ui:Estudio magnético de croquis…}} sobre una pieza que tenga croquis. Cada forma cerrada de los croquis que marque es una región de un modelo plano; el estudio calcula el campo magnético B, y la fuerza y el par sobre un cuerpo que elija.

## Pasos

1. Dibuje los cuerpos como formas cerradas en croquis: una culata de hierro, un imán, una bobina. Los cuerpos que se tocan comparten una arista, así que colóquelos en croquis distintos; los cuerpos separados, o los que están uno dentro de otro (una ventana en una culata), pueden compartir croquis. Mantenga los croquis en el mismo plano.
2. Abra el estudio y marque los croquis que va a usar. Cada perfil cerrado recibe una fila, numerada. Indique qué es: {{ui:Aire}}, {{ui:Hierro}} (una permeabilidad, o una curva B–H escrita como pares de B en teslas y H en A/m), un {{ui:Imán permanente}} (Br en teslas, su dirección como ángulo respecto al eje x del croquis, y su permeabilidad de retroceso) o una {{ui:Bobina}} (la corriente total que atraviesa su perfil, vueltas por amperios; el signo indica en qué sentido circula).
3. Marque {{ui:Fuerza y par sobre este cuerpo}} para los cuerpos que lo necesiten. Indique la profundidad de la pieza fuera del croquis.
4. Elija la malla y el aire alrededor del modelo, y después {{ui:Ejecutar}}.

## Lo que debe ver

- La densidad de flujo |B| sobre el modelo, de azul oscuro (bajo) a rojo (alto), con los perfiles numerados.
- El campo más intenso y dónde está, el número de triángulos y, para cada cuerpo que marcó, la fuerza según x e y y el par respecto a su centro, para la profundidad que indicó.
- {{ui:Guardar resultados (CSV)}} escribe los números.

## Conviene saber

- Es un modelo plano y estacionario: todo está por metro de profundidad, sin corrientes de Foucault ni histéresis, y un imán es una recta de retroceso (no puede desmagnetizarse).
- El modelo se sitúa en una caja de aire cuyo borde es una pared. Compare dos tamaños de la caja de aire y las mallas Normal y Fina: una fuerza calculada a partir del campo alrededor de un cuerpo solo es tan buena como la malla en esa zona.
- El hierro con solo una permeabilidad nunca se satura. Cuando el campo supera 2 T, el estudio muestra un ⚠ en la lista de Problemas: dé al hierro una curva B–H. Los números de una fila nueva son ejemplos (hierro μr 2000, un imán de 1.2 T), no datos de una hoja de características de un material.
- Un cuerpo necesita espacio alrededor para recibir la fuerza: si otro cuerpo está demasiado cerca, el estudio lo indica.
- Es una ayuda para el dibujo, no una aprobación de ingeniería.

## Siguiente

- [Campos magnéticos en 2D (tutorial)](topic:magnetic-fields-2d)
