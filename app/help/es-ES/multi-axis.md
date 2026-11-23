---
title: Mecanizado de 4 y 5 ejes
summary: Indique a PartCraft qué ejes rotativos tiene la máquina, incline la herramienta en cualquier operación habitual, acabe una superficie con una fresa de punta esférica que se inclina mientras corta, o gire la pieza bajo la herramienta con un cuarto eje. Qué se escribe en el código G y qué no está probado.
keywords: 5 ejes, cinco ejes, 4 ejes, cuarto eje, multieje, multi eje, 3+2, indexado, posicional, inclinación, herramienta inclinada, rotativo, mesa basculante, mesa, cabezal, eje A, eje B, eje C, TCP, RTCP, punto central de la herramienta, G43.4, tiempo inverso, G93, cinemática, pivote, corte de flanco, ángulo de avance
from: c4f1c491
---

Fabricación puede mantener la herramienta con un ángulo, y puede mover los ejes rotativos durante el corte. Tres cosas lo hacen, de la más sencilla a la más avanzada.

**Nada de esto se ha ejecutado en una máquina.** Las pruebas comprueban las trayectorias frente a la geometría y el código G se lee de vuelta, pero los posprocesadores integrados siguen los códigos documentados de los controles, no una máquina concreta que tengamos delante. Pruebe un programa en el simulador de su control y en el aire antes de que toque el metal.

## Los ejes rotativos de la máquina

En la pestaña **Configuración**, {{ui:Ejes rotativos}} indica qué tiene la máquina:

| Opción | La máquina |
|---|---|
| Ninguno (3 ejes) | Una fresadora sencilla. Cualquier operación que necesite la herramienta inclinada avisa, y el posprocesador se niega a escribirla. |
| A (gira alrededor de X) | Un eje rotativo a lo largo de X: una mesa de cuarto eje o un divisor. La herramienta solo puede inclinarse en el plano Y–Z. |
| B (gira alrededor de Y) | Un eje rotativo a lo largo de Y. La herramienta solo puede inclinarse en el plano X–Z. |
| A y C | Un eje de inclinación alrededor de X soportado por, o que soporta, un giro alrededor de Z: una mesa basculante o un cabezal. |
| B y C | Lo mismo con la inclinación alrededor de Y. |

Después:

- **Montado en**: {{ui:La mesa (gira la pieza)}} o {{ui:El cabezal (gira la herramienta)}}. Una mesa gira en sentido contrario para llevar la misma cara bajo la herramienta, así que el signo de cada ángulo depende de esto.
- **El control mantiene la punta de la herramienta en la trayectoria (TCP)**: activado, X Y Z del programa son la punta de la herramienta en las coordenadas propias de la pieza y el control hace el resto (los posprocesadores integrados estilo Fanuc y LinuxCNC escriben `G43.4` para la longitud de herramienta). Desactivado, en una máquina con mesa, PartCraft escribe X Y Z según la mesa gira la pieza, alrededor del **centro de rotación** que indique (en coordenadas de trabajo; 0, 0, 0 cuando el origen de trabajo está en el centro). Una máquina con cabezal necesita TCP activado: sin él, el programa necesitaría la longitud de pivote de la máquina, que PartCraft no conoce.
- **Límite de inclinación**: hasta dónde llega el eje de inclinación.

Las máquinas difieren en el sentido que consideran positivo. Si un eje gira al revés en la suya, cambie el signo en una copia del posprocesador ([Posprocesadores que puede editar](topic:post-processors)).

## Herramienta inclinada para una operación habitual

Cada operación de fresado (cara, cajera, adaptativo, contorno, taladrado, chaflán, paralela, festón, desbaste 3D, restos) tiene una **Inclinación de la herramienta** y **Inclinar hacia**: la dirección de la herramienta solo para esa operación, medida desde el eje de herramienta de la configuración. Es mecanizado 3+2: los ejes rotativos van a una posición y permanecen allí mientras tres ejes cortan.

- Escriba los dos ángulos, o pulse {{ui:Herramienta perpendicular a una cara}} y haga clic en una cara plana: la herramienta apuntará directamente hacia ella.
- Seleccione las caras y aristas de la operación como de costumbre. Lo que se considera fondo o agujero se juzga a lo largo de la herramienta inclinada.
- El material en bruto para esa dirección es la caja que contiene el material girado, de modo que las alturas y las holguras son seguras desde ese lado.

En el código G, antes de la operación la herramienta sube, los ejes rotativos giran y la herramienta baja sobre su primer punto. En una máquina con mesa sin TCP, los arcos siguen siendo arcos y los ciclos de taladrado fijos siguen siendo ciclos (el sistema escrito solo gira alrededor de Z). Con TCP en un plano inclinado, los arcos se convierten en líneas cortas y los ciclos en los movimientos que representan.

La simulación del material ejecuta una dirección inclinada **por separado**: muestra lo que corta esa operación sobre todo el material visto desde su lado, y detecta rebajes allí, pero los cortes hechos desde otras direcciones no se trasladan.

## Acabado de 5 ejes

{{ui:Más}} en la barra de herramientas de Fabricación enumera esta operación y la siguiente en la parte superior de la pestaña **Operaciones**.

{{ui:5 ejes}} es la [pasada de acabado paralela](topic:finish-3d) con una **fresa de punta esférica que se inclina mientras avanza**. Una bola corta con una esfera, y la esfera es la misma sea cual sea la inclinación de la herramienta alrededor de su centro, así que la bola sigue exactamente la trayectoria que daría la pasada de 3 ejes y solo cambia la dirección de la herramienta:

- **Hacia la superficie**: 1 = perpendicular a la superficie, 0 = vertical, cualquier valor intermedio.
- **Inclinación hacia delante**: grados en la dirección del corte, de modo que el centro inmóvil de la bola no sea el que corta.
- **Inclinación máxima**: la herramienta nunca se inclina más que esto respecto al eje de la configuración.

Donde el vástago tocaría el modelo, la inclinación se reduce hasta que quede libre, y la operación indica en cuántos puntos ocurre. Cada pasada se inicia y se abandona con una elevación recta.

## Acabado rotativo (cuarto eje)

{{ui:Rotativo}} sirve para una pieza sujeta a lo largo de **X de trabajo** en un eje rotativo. La pieza gira y una fresa de punta esférica, siempre apuntando al eje, sigue su superficie:

- **Pasadas**: {{ui:A lo largo del eje}} (líneas a lo largo de X, separadas un paso lateral de giro) o {{ui:Alrededor de la pieza}} (anillos, separados un paso lateral de X).
- **Eje en Y / Z**: dónde está el eje. Vacío significa el centro del material en bruto. En una máquina con mesa sin TCP debe ser el centro de rotación de Configuración; la operación avisa cuando no lo es.
- **Desde / Hasta X** y **Desde / Hasta ángulo**: la parte de la longitud y del giro que se va a cortar.

La altura de la bola sobre el eje en cada punto es la caída exacta de una esfera sobre la malla de la pieza, desde ese lado.

## Límites

- El acabado de 5 ejes y el rotativo admiten solo una **fresa de punta esférica**. No hay corte de flanco (el lateral de la herramienta en una pared reglada), ni líneas de flujo según las direcciones propias de una superficie, ni desbaste multieje, ni elección automática de la inclinación para evitar una colisión.
- Las trayectorias de 5 ejes y rotativas **no pasan por la simulación del material**, que es un mapa de alturas y no puede representar un corte inclinado.
- El vástago se comprueba en el acabado de 5 ejes frente al modelo visto desde arriba; el portaherramientas, el husillo y la propia máquina no se comprueban en ningún caso.
- El acabado rotativo corta solo lo que la herramienta puede ver mirando al eje.
- El acabado de 5 ejes tarda un minuto o más en calcularse en una pieza grande: el vástago se comprueba en cada punto de cada pasada.
- Cuando los ejes rotativos se mueven junto con los lineales y TCP está desactivado, los posprocesadores integrados escriben el avance en tiempo inverso (`G93`) y después vuelven a `G94`.
- No se escribe ningún código de plano de trabajo inclinado (`G68.2` y similares), y no se conocen límites específicos de máquina, desenrollado ni zonas de colisión.
