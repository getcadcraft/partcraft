---
title: Torneado en torno
summary: Refrente, desbaste, acabe, ranure, tronce, roscar y taladre una pieza torneada, a partir del perfil que forma la pieza al girar. Herramientas de torno, avances por vuelta, posprocesadores de torno y lo que no está probado.
keywords: torneado, torno, tornear, refrentado, desbaste, acabado, ranurado, ranurar, tronzado, tronzar, corte, rosca, roscar, G32, G33, G96, velocidad de corte constante, CSS, radio de punta, plaquita, barra, mandril, diámetro, avance por vuelta, G71, G76
from: d8cc53b0
---

Fabricación tiene siete operaciones para torno. Funcionan en cualquier pieza: lo que se corta es el **contorno que forma la pieza al girar** alrededor del centro del material en bruto, de modo que una pieza que no es redonda se tornea hasta la forma redonda que la contiene.

**Nada de esto se ha ejecutado en un torno.** Las pruebas comprueban las trayectorias frente a la geometría; los dos posprocesadores de torno siguen los códigos documentados de los controles. Pruebe un programa primero en el simulador de su control y en el aire.

## Configuración

En la pestaña **Configuración**:

- **Eje de herramienta** es el eje del husillo, la Z del torno. La cara frontal de la pieza está en +Z; el mandril sujeta el otro extremo.
- **Material en bruto**: elija {{ui:Cilindro}}, la barra. Su desplazamiento superior es lo que retira el refrentado.
- **Origen de trabajo**: un centro en la parte superior del material en bruto o del modelo sitúa Z0 en la cara frontal, el lugar habitual.
- **Control**: {{ui:Torno tipo Fanuc (.nc)}} o {{ui:Torno LinuxCNC (.ngc)}}. Un posprocesador de fresado rechaza un programa de torneado y lo indica.
- **Velocidad máxima del husillo**: el límite por debajo del cual se mantiene la velocidad de superficie.

{{ui:Más}} en la barra de herramientas de Fabricación enumera las siete operaciones de torneado en la parte superior de la pestaña **Operaciones**. La primera que añada trae su propia herramienta: una **plaquita de torneado** (radio de punta, ángulo de plaquita, ángulo del filo de corte) o una **cuchilla de ranurar** (anchura, radio de esquina, hasta dónde llega). Cámbielas en la pestaña **Herramientas**. Los avances son por vuelta, y la velocidad es una velocidad de superficie en m/min que el control mantiene al cambiar el diámetro; dé a una herramienta sus propias rpm para fijar la velocidad en su lugar.

## Las operaciones

| Operación | Qué hace |
|---|---|
| {{ui:Cara}} | Refrenta el frente de la barra hasta la pieza, una profundidad de paso cada vez, desde fuera hasta justo pasado el centro. |
| {{ui:Desbastar}} | Pasadas a lo largo de Z separadas una **profundidad de corte**, hasta el contorno más el **material a dejar**; después una vez a lo largo del contorno para quitar los escalones. Un valle entre dos resaltos se entra con una inmersión de una profundidad de corte. |
| {{ui:Acabado}} | Una pasada a lo largo del contorno a una fracción del avance de la herramienta. |
| {{ui:Ranurar}} | Hunde la cuchilla en paralelo donde pueda tomar más que el límite de material que todavía queda: las ranuras a las que no llegó la plaquita de torneado. **Desde / Hasta Z** lo restringe. |
| {{ui:Tronzar}} | Corta la pieza justo detrás de su cara posterior, hasta un poco más allá del centro, con picoteos si los indica. |
| {{ui:Rosca}} | Una rosca exterior: diámetro mayor, paso, longitud, número de pasadas. Profundidad 0 significa 0.6134 × paso (una rosca de 60°). Cada pasada retira la misma área de viruta; las pasadas en vacío repiten la última. |
| {{ui:Taladrado}} | Un taladro sobre la línea de centro hasta una profundidad, con picoteos. |

## Cómo se mantiene la herramienta fuera de la pieza

La plaquita se trata como lo que es: su círculo de punta y, detrás, el filo trasero, una línea recta cuyo ángulo es 180° menos el ángulo del filo de corte y el ángulo de la plaquita. Esa forma se baja sobre el contorno en cada punto a lo largo de Z, y la trayectoria es el lugar donde queda apoyada. Así:

- **El radio de punta ya está en la trayectoria.** Los posprocesadores no escriben `G41` ni `G42`; las coordenadas son el punto programado de la herramienta (la esquina del cuadrado alrededor de la punta).
- La plaquita **no puede seguir una pared más empinada que su filo trasero**. Una ranura detrás de un resalto se deja, y la operación de acabado indica cuánto del contorno no pudo alcanzar. Una operación {{ui:Ranurar}} la retira.
- El material se sigue a lo largo de Z después de cada corte, de modo que el desbaste no corta aire, el ranurado encuentra lo que queda, y cada operación muestra el volumen que retiró y si cortó en la pieza.

## Límites

- **Solo torneado exterior**: sin barra de mandrinar, sin ranuras ni roscas interiores, sin ranuras frontales.
- Un husillo, con la pieza sujeta en −Z. Sin contrahusillo, sin herramientas motorizadas, sin eje C ni Y, sin lunetas ni movimientos del contrapunto.
- Las trayectorias son movimientos rectos: las curvas son líneas cortas dentro de la tolerancia (sin `G2`/`G3`), y el desbaste y el roscado se escriben pasada a pasada (sin ciclos `G71` ni `G76`).
- El roscado son pasadas rectas con una salida recta al final; dé a la rosca una ranura de alivio. La rosca no se muestra en el material en bruto.
- El taladrado sobre centro no cambia el modelo del material en bruto.
- El portaherramientas, la torreta y el mandril no se comprueban. Indique **Parar en Z** para mantener la herramienta lejos de las mordazas.
- Los avances y las velocidades son valores de partida, igual que en el fresado.
