---
title: Torneado en torno
summary: Refrente, desbaste, acabe, ranure, tronce, rosque y taladre una pieza torneada, a partir del contorno que la pieza forma al girar. Herramientas de torno, avances por revolución, posprocesadores de torno y lo que no se ha probado.
keywords: torneado, torno, tornear, refrentado, desbaste, acabado, ranurado, ranura, tronzado, rosca, roscado, G32, G33, G96, velocidad de corte constante, css, radio de punta, inserto, barra, mandril, diámetro, avance por revolución, G71, G76
from: d8cc53b0
---

Fabricación tiene siete operaciones para torno. Funcionan en cualquier pieza: lo que se corta es el **contorno que la pieza forma al girar** alrededor del centro del material en bruto, así que una pieza que no es redonda se tornea hasta la forma redonda que la sostiene.

**Nada de lo que aquí se describe se ha ejecutado en un torno.** Las pruebas comprueban las trayectorias contra la geometría; los dos posprocesadores de torno siguen los códigos documentados de los controles. Pruebe primero un programa en el simulador de su control y en el aire.

## Configuración

En la pestaña **Configuración**:

- **Eje de herramienta** es el eje del husillo, la Z del torno. El frente de la pieza está en +Z; el mandril sostiene el otro extremo.
- **Material en bruto**: elija {{ui:Cilindro}}, la barra. Su desfase superior es lo que retira el corte de refrentado.
- **Origen de trabajo**: un centro en la parte superior del material en bruto o del modelo pone Z0 en la cara frontal, el lugar habitual.
- **Control**: {{ui:Torno estilo Fanuc (.nc)}} o {{ui:Torno LinuxCNC (.ngc)}}. Un posprocesador de fresado rechaza un programa de torneado y lo indica.
- **Velocidad máxima del husillo**: el límite bajo el cual se mantiene la velocidad de superficie.

{{ui:Más}} en la barra de Fabricación enumera las siete operaciones de torneado en la parte superior de la pestaña **Operaciones**. La primera que agregue trae su propia herramienta: un **inserto de torneado** (radio de punta, ángulo del inserto, ángulo del filo de corte) o una **cuchilla de ranurado** (ancho, radio de esquina, hasta qué profundidad llega). Cámbielos en la pestaña **Herramientas**. Los avances son por revolución, y la velocidad es una velocidad de superficie en m/min que el control mantiene a medida que cambia el diámetro; dé a una herramienta sus propias rpm para fijar la velocidad en su lugar.

## Las operaciones

| Operación | Qué hace |
|---|---|
| {{ui:Cara}} | Refrenta el frente de la barra hasta la pieza, una profundidad de paso a la vez, de fuera hacia adentro hasta un poco más allá del centro. |
| {{ui:Desbastar}} | Pasadas a lo largo de Z separadas una **profundidad de corte**, hasta el contorno más el **material a dejar**; luego una vuelta por el contorno para quitar los escalones. Un valle entre dos resaltos se entra con una inmersión de una profundidad de corte. |
| {{ui:Acabado}} | Una pasada a lo largo del contorno con una fracción del avance de la herramienta. |
| {{ui:Ranurar}} | Hunde la cuchilla lado a lado donde pueda tomar más que el límite de material que todavía queda: las ranuras a las que no llegó el inserto de torneado. **Desde / Hasta Z** la limitan. |
| {{ui:Tronzar}} | Corta la pieza justo detrás de su cara posterior, hasta un poco más allá del centro, con picoteos si define uno. |
| {{ui:Rosca}} | Una rosca exterior: diámetro mayor, paso, longitud, número de pasadas. Profundidad 0 significa 0.6134 × paso (una rosca de 60°). Cada pasada toma la misma área de viruta; las pasadas de limpieza repiten la última. |
| {{ui:Taladrado}} | Un taladro sobre la línea de centro hasta una profundidad, con picoteos. |

## Cómo se mantiene la herramienta fuera de la pieza

El inserto se trata como lo que es: su círculo de punta y, detrás, el filo de salida, una línea recta cuyo ángulo es 180° menos el ángulo del filo de corte y el ángulo del inserto. Esa forma se baja sobre el contorno en cada punto a lo largo de Z, y la trayectoria es donde queda apoyada. Así que:

- **El radio de punta ya está en la trayectoria.** Los posprocesadores no escriben `G41` ni `G42`; las coordenadas son el punto programado de la herramienta (la esquina del cuadrado alrededor de la punta).
- El inserto **no puede seguir una pared más empinada que su filo de salida**. Una ranura detrás de un resalto se deja, y la operación de acabado indica cuánto del contorno no pudo alcanzar. Una operación de {{ui:Ranurar}} la toma.
- El material se sigue a lo largo de Z después de cada corte, así que el desbaste no corta aire, el ranurado encuentra lo que queda, y cada operación muestra el volumen que retiró y si cortó la pieza.

## Límites

- **Solo torneado exterior**: sin barra de mandrinar, sin ranuras ni roscas interiores, sin ranuras en cara.
- Un solo husillo, la pieza sujeta en −Z. Sin contrahusillo, sin herramientas motorizadas, sin eje C ni Y, sin luneta ni movimientos del contrapunto.
- Las trayectorias son movimientos rectos: las curvas son líneas cortas dentro de la tolerancia (sin `G2`/`G3`), y el desbaste y el roscado se escriben pasada por pasada (sin ciclos `G71` ni `G76`).
- El roscado son pasadas rectas con una salida recta al final; dé a la rosca una ranura de alivio. La rosca no se muestra en el material en bruto.
- El taladrado sobre el centro no cambia el modelo del material en bruto.
- El portaherramientas, la torreta y el mandril no se revisan. Defina **Detener en Z** para mantener la herramienta lejos de las mordazas.
- Los avances y velocidades son valores iniciales, igual que en fresado.
