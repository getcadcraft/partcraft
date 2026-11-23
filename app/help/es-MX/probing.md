---
title: Palpado: encontrar la pieza y establecer el desfase de trabajo
summary: Toque una cara superior, un lado, un agujero o un resalto con un palpador y deje que el control mueva el desfase de trabajo a donde la pieza está realmente, o solo mida. Qué puede hacer cada control, y qué no se ha probado.
keywords: palpado, palpador, palpador de contacto, preajuste, desfase de trabajo, G54, G31, G38.2, salto, referencia, buscar centro, taladro, resalto, borde, poner en cero, medir, inspección, G10
from: 1f718b82
---

{{ui:Palpado}} en Fabricación escribe un ciclo de palpado en el programa: el palpador toca la pieza, y el control mueve el desfase de trabajo (G54) por la diferencia entre donde se encontró la superficie y donde el modelo dice que está. Las operaciones posteriores cortan entonces donde la pieza realmente está.

**Nada de lo que aquí se describe se ha ejecutado en una máquina.** Los movimientos previos a un toque son movimientos ordinarios: el palpador no se vigila hasta el movimiento de palpado en sí. Ejecútelo despacio, primero en el aire, con la mano en el paro de avance.

## Cómo usarlo

1. En la pestaña **Herramientas**, la primera operación de palpado agrega un **palpador de contacto**: su diámetro de bola y el avance de palpado (100 mm/min a menos que defina otro).
2. Pulse {{ui:Más}} en la barra de Fabricación, luego {{ui:Palpado}}, y haga clic en lo que va a tocar. Cada selección es un ciclo, en el orden en que haga clic:

| Selección | El ciclo | Qué se establece |
|---|---|---|
| Una cara plana que mira hacia el eje de la herramienta | Un toque bajando | Z |
| Una cara lateral plana perpendicular a X o a Y | Un toque hacia la cara, un poco por debajo de su parte superior | X o Y |
| Un agujero o un resalto a lo largo del eje de la herramienta | Cuatro toques (+X, −X, +Y, −Y) | X e Y de su centro |

3. **Con el resultado**: {{ui:Establecer el desfase de trabajo}} o {{ui:Solo medir}}.
4. **Empezar a esta distancia** y **Buscar hasta esta distancia más allá** son qué tan lejos de la superficie esperada empieza el movimiento de palpado y qué tanto más allá puede recorrer el palpador antes de que el control se rinda. **Profundidad** es qué tanto por debajo de la parte superior de un agujero, resalto o cara lateral baja la bola.

Coloque la operación de palpado primero, antes de cualquier corte.

## Lo que escribe cada control

| Control | Toque | Resultado |
|---|---|---|
| Estilo Fanuc | `G31`, la posición se guarda en `#101` a `#104` | Las variables de desfase (`#5221` a `#5223`) se mueven por encontrado − esperado. Solo medir: la diferencia queda en `#110` (y `#111`). |
| LinuxCNC | `G38.2`, la posición se guarda en parámetros con nombre | `G10 L2 P1` con el nuevo desfase. Solo medir: un mensaje `(DEBUG, …)`. |
| GRBL | `G38.2` | Un toque establece el eje con `G10 L20 P1`. GRBL no tiene variables, así que **no puede calcular un centro**: el archivo lo indica en un comentario y no establece nada. |

La aritmética es del posprocesador, así que puede cambiarla: los eventos son `probe-move` y `probe-set` ([Posprocesadores que puede editar](topic:post-processors)).

## Límites

- Un solo desfase de trabajo (G54). Solo caras perpendiculares a los ejes: sin ángulo, sin ciclo de esquina, sin rotación del trabajo.
- Sin preajustador de herramientas, sin revisión de herramienta rota, sin medición de una medida contra una tolerancia, sin informe.
- El husillo no se arranca para un palpado y el refrigerante permanece apagado; nada verifica que la herramienta en el husillo sea un palpador.
- La simulación del material no ejecuta una trayectoria de palpado.
- La calibración propia del palpador (desfase de la bola, deflexión del vástago, dirección de disparo) corresponde al control.
