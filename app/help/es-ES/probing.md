---
title: Palpado: localizar la pieza y fijar el desfase de origen
summary: Toque una cara superior, un lateral, un agujero o un resalto con un palpador y deje que el control mueva el desfase de origen a donde está realmente la pieza, o solo mida. Qué puede hacer cada control y qué no está probado.
keywords: palpado, palpador, palpador de contacto, palpar, desfase de origen, G54, G31, G38.2, salto, referencia, buscar centro, taladro, resalto, borde, poner a cero, medir, inspección, G10
from: 1f718b82
---

{{ui:Palpado}} en Fabricación escribe un ciclo de palpado en el programa: el palpador toca la pieza, y el control mueve el desfase de origen (G54) según la diferencia entre donde se encontró la superficie y donde indica el modelo. Las operaciones posteriores cortan entonces donde está realmente la pieza.

**Nada de esto se ha ejecutado en una máquina.** Los movimientos antes de un contacto son movimientos normales: el palpador no se vigila hasta el propio movimiento de palpado. Ejecútelo despacio, primero en el aire, con la mano sobre la pausa de avance.

## Cómo se usa

1. En la pestaña **Herramientas**, la primera operación de palpado añade un **palpador de contacto**: su diámetro de bola y el avance de palpado (100 mm/min salvo que indique otro).
2. Pulse {{ui:Más}} en la barra de herramientas de Fabricación, después {{ui:Palpado}}, y haga clic en lo que debe tocar. Cada selección es un ciclo, en el orden en que haga clic:

| Selección | El ciclo | Qué se fija |
|---|---|---|
| Una cara plana que mira a lo largo del eje de herramienta | Un contacto bajando | Z |
| Una cara lateral plana perpendicular a X o a Y | Un contacto hacia la cara, algo por debajo de su parte superior | X o Y |
| Un agujero o un resalto a lo largo del eje de herramienta | Cuatro contactos (+X, −X, +Y, −Y) | X e Y de su centro |

3. **Con el resultado**: {{ui:Fijar el desfase de origen}} o {{ui:Solo medir}}.
4. **Empezar a esta distancia** y **Buscar hasta esta distancia más allá** son la distancia desde la superficie esperada a la que empieza el movimiento de palpado y hasta dónde más allá puede recorrer el palpador antes de que el control se rinda. **Profundidad** es lo que baja la bola por debajo de la parte superior de un agujero, un resalto o una cara lateral.

Coloque la operación de palpado la primera, antes de cualquier corte.

## Qué escribe cada control

| Control | Contacto | Resultado |
|---|---|---|
| Estilo Fanuc | `G31`, la posición guardada en `#101` a `#104` | Las variables de desfase (`#5221` a `#5223`) se mueven según encontrado − esperado. Solo medir: la diferencia queda en `#110` (y `#111`). |
| LinuxCNC | `G38.2`, la posición guardada en parámetros con nombre | `G10 L2 P1` con el nuevo desfase. Solo medir: un mensaje `(DEBUG, …)`. |
| GRBL | `G38.2` | Un contacto fija el eje con `G10 L20 P1`. GRBL no tiene variables, así que **no puede calcular un centro**: el archivo lo indica en un comentario y no fija nada. |

Los cálculos son del posprocesador, así que puede cambiarlos: los eventos son `probe-move` y `probe-set` ([Posprocesadores que puede editar](topic:post-processors)).

## Límites

- Un solo desfase de origen (G54). Solo caras perpendiculares a los ejes: sin ángulo, sin ciclo de esquina, sin giro de la pieza.
- Sin preajustador de herramientas, sin comprobación de herramienta rota, sin medir una cota frente a una tolerancia, sin informe.
- El husillo no se arranca para un palpado y el refrigerante permanece apagado; nada comprueba que la herramienta del husillo sea un palpador.
- La simulación del material no ejecuta una trayectoria de palpado.
- La calibración propia del palpador (desfase de la bola, deflexión del palpador, dirección de disparo) corresponde al control.
