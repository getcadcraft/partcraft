---
title: Torneado en torno
summary: Refrentar, desbastar, acabar, ranurar, tronzar, roscar y taladrar una pieza torneada, a partir del contorno que forma la pieza al girar. Herramientas de torno, avances por vuelta, postprocesadores de torno, y qué no se probó.
keywords: torneado, torno, tornear, refrentado, desbaste, acabado, ranurado, ranura, tronzado, corte, rosca, roscado, g32, g33, g96, velocidad de corte constante, css, radio de punta, plaquita, barra, mandril, diámetro, avance por vuelta, g71, g76
from: d8cc53b0
---

Fabricación tiene siete operaciones para torno. Trabajan sobre cualquier pieza: lo que se corta es el **contorno que forma la pieza al girar** alrededor del centro del material, así que una pieza que no es redonda se tornea hasta la forma redonda que la sostiene.

**Nada de esto se ejecutó todavía en un torno.** Las trayectorias se revisan contra la geometría con las pruebas; los dos postprocesadores de torno siguen los códigos documentados de los controles. Probá el programa en el simulador propio de tu control y en el aire primero.

## Preparación

En la pestaña **Setup**:

- **Eje de herramienta** es el eje del husillo, la Z del torno. El frente de la pieza está en +Z; el mandril sujeta el otro extremo.
- **Material bruto**: elegí {{ui:Cylinder}}, la barra. Su desplazamiento superior es lo que quita la operación de refrentado.
- **Origen de trabajo**: un centro en la parte superior del material o del modelo pone Z0 en la cara frontal, el lugar habitual.
- **Control**: {{ui:Fanuc-style lathe (.nc)}} o {{ui:LinuxCNC lathe (.ngc)}}. Un postprocesador de fresado rechaza un programa de torneado y lo dice.
- **Velocidad máxima del husillo**: el límite bajo el cual se mantiene la velocidad de superficie.

{{ui:More}} en la barra de Fabricación lista las siete operaciones de torneado al principio de la pestaña **Operations**. La primera que agregues trae su propia herramienta: una **plaquita de torneado** (radio de punta, ángulo de plaquita, ángulo del filo de corte) o una **hoja de ranurado** (ancho, radio de esquina, hasta dónde llega). Cambialas en la pestaña **Tools**. Los avances son por vuelta, y la velocidad es una velocidad de superficie en m/min que el control mantiene a medida que cambia el diámetro; dale a una herramienta sus propias rpm para fijar la velocidad.

## Las operaciones

| Operación | Qué hace |
|---|---|
| {{ui:Face}} | Refrenta el frente de la barra hasta la pieza, una profundidad por pasada, de afuera hacia adentro hasta justo pasado el centro. |
| {{ui:Rough}} | Pasadas a lo largo de Z separadas una **profundidad de corte**, hasta el contorno más el **material a dejar**; después una vez a lo largo del contorno para quitar los escalones. Un valle entre dos hombros se entra con una inmersión de una profundidad de corte. |
| {{ui:Finish}} | Una pasada a lo largo del contorno a una fracción del avance de la herramienta. |
| {{ui:Groove}} | Hunde la hoja lado a lado donde puede tomar más que el límite de material que todavía queda: las ranuras que la plaquita no pudo alcanzar. **Desde / Hasta Z** la reducen. |
| {{ui:Part off}} | Corta la pieza justo detrás de su cara trasera, hasta un poco pasado el centro, con picoteos si fijaste uno. |
| {{ui:Thread}} | Una rosca exterior: diámetro mayor, paso, largo, número de pasadas. Profundidad 0 significa 0,6134 × paso (una rosca de 60°). Cada pasada toma la misma área de viruta; las pasadas de rebote repiten la última. |
| {{ui:Drill}} | Un taladro sobre la línea de centro hasta una profundidad, con picoteos. |

## Cómo se mantiene la herramienta fuera de la pieza

La plaquita se trata como lo que es: su círculo de punta, y detrás el borde de salida, una línea recta cuyo ángulo es 180° menos el ángulo del filo de corte y el ángulo de la plaquita. Esa forma se baja sobre el contorno en cada punto a lo largo de Z, y la trayectoria es donde queda apoyada. Entonces:

- **El radio de punta ya está en la trayectoria.** Los postprocesadores no escriben `G41` ni `G42`; las coordenadas son el punto programado de la herramienta (la esquina del cuadrado alrededor de la punta).
- La plaquita **no puede seguir una pared más empinada que su borde de salida**. Una ranura detrás de un hombro se deja, y la operación de acabado dice cuánto del contorno no pudo alcanzar. Una operación {{ui:Groove}} lo toma.
- El material se sigue a lo largo de Z después de cada corte, así el desbaste no corta aire, el ranurado encuentra lo que queda, y cada operación muestra el volumen que quitó y si cortó dentro de la pieza.

## Límites

- **Solo torneado exterior**: sin barra de mandrinar, sin ranuras ni roscas interiores, sin ranuras de cara.
- Un husillo, la pieza sujeta en −Z. Sin contrahusillo, sin herramientas motrices, sin eje C ni Y, sin luneta fija ni movimientos del contrapunto.
- Las trayectorias son movimientos rectos: las curvas son líneas cortas dentro de la tolerancia (sin `G2`/`G3`), y el desbaste y el roscado se escriben pasada por pasada (sin ciclos `G71` ni `G76`).
- El roscado son pasadas rectas con una salida recta al final; dale a la rosca una ranura de alivio. La rosca no se muestra en el material.
- El taladrado sobre centro no cambia el modelo del material.
- El portaherramientas, la torreta y el mandril no se revisan. Fijá **Stop at Z** para mantener la herramienta lejos de las mordazas.
- Los avances y velocidades son valores iniciales, igual que en el fresado.
