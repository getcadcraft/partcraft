---
title: Palpado: encontrar la pieza y fijar el desplazamiento de trabajo
summary: Tocar una cara superior, un lado, un agujero o un resalto con un palpador, y dejar que el control mueva el desplazamiento de trabajo hasta donde está realmente la pieza, o solo medir. Qué puede hacer cada control, y qué no se probó.
keywords: palpado, palpador, palpador de contacto, poner a cero, desplazamiento de trabajo, g54, g31, g38.2, salto, referencia, buscar centro, agujero, resalto, borde, poner cero, medir, inspección, g10
from: 1f718b82
---

{{ui:Probe}} en Fabricación escribe un ciclo de palpado en el programa: el palpador toca la pieza, y el control mueve el desplazamiento de trabajo (G54) según la diferencia entre donde se halló la superficie y donde dice el modelo que está. Las operaciones posteriores cortan entonces donde la pieza está de verdad.

**Nada de esto se ejecutó todavía en una máquina.** Los movimientos antes de un toque son movimientos comunes: el palpador no se vigila hasta el propio movimiento de palpado. Corrélo despacio, primero en el aire, con la mano sobre la parada de avance.

## Cómo se usa

1. En la pestaña **Tools**, la primera operación de palpado agrega un **palpador de contacto**: su diámetro de bola, y el avance de palpado (100 mm/min salvo que fijes otro).
2. Apretá {{ui:More}} en la barra de Fabricación, después {{ui:Probe}}, y hacé clic en lo que vas a tocar. Cada elección es un ciclo, en el orden en que hacés clic:

| Elección | El ciclo | Qué se fija |
|---|---|---|
| Una cara plana que mira hacia el eje de herramienta | Un toque bajando | Z |
| Una cara lateral plana, perpendicular a X o a Y | Un toque yendo hacia la cara, un poco por debajo de su parte superior | X o Y |
| Un agujero o un resalto a lo largo del eje de herramienta | Cuatro toques (+X, −X, +Y, −Y) | X e Y de su centro |

3. **Con el resultado**: {{ui:Set the work offset}} o {{ui:Measure only}}.
4. **Empezar a esta distancia** y **Buscar hasta esta distancia más allá** son cuánto antes de la superficie esperada empieza el movimiento de palpado y cuánto más allá puede viajar el palpador antes de que el control se rinda. **Profundidad** es cuánto por debajo de la parte superior de un agujero, un resalto o una cara lateral baja la bola.

Poné la operación de palpado primero, antes de que corte cualquier cosa.

## Qué escribe cada control

| Control | Toque | Resultado |
|---|---|---|
| Estilo Fanuc | `G31`, la posición guardada en `#101` a `#104` | Las variables de desplazamiento (`#5221` a `#5223`) se mueven según encontrado − esperado. Solo medir: la diferencia queda en `#110` (y `#111`). |
| LinuxCNC | `G38.2`, la posición guardada en parámetros con nombre | `G10 L2 P1` con el nuevo desplazamiento. Solo medir: un mensaje `(DEBUG, …)`. |
| GRBL | `G38.2` | Un toque fija el eje con `G10 L20 P1`. GRBL no tiene variables, así que **no puede calcular un centro**: el archivo lo dice en un comentario y no fija nada. |

La aritmética es la del postprocesador, así que podés cambiarla: los eventos son `probe-move` y `probe-set` ([Postprocesadores que podés editar](topic:post-processors)).

## Límites

- Un solo desplazamiento de trabajo (G54). Solo caras perpendiculares a los ejes: sin ángulo, sin ciclo de esquina, sin rotación del trabajo.
- Sin calibrador de herramienta, sin control de herramienta rota, sin medir un tamaño contra una tolerancia, sin informe.
- El husillo no arranca para un palpado y el refrigerante queda apagado; nada verifica que la herramienta en el husillo sea un palpador.
- La simulación de material no corre una trayectoria de palpado.
- La calibración propia del palpador (desplazamiento de la bola, deflexión del vástago, dirección de disparo) es del control.
