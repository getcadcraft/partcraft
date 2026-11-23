---
title: Mecanizado de 4 y 5 ejes
summary: Indicá a PartCraft qué ejes rotativos tiene la máquina, incliná la herramienta para cualquier operación común, acabá una superficie con una fresa de punta esférica que se inclina mientras corta, o girá la pieza bajo la herramienta en un 4º eje. Qué se escribe en el G-code, y qué no se probó.
keywords: 5 ejes, cinco ejes, 4 ejes, cuarto eje, multieje, multi eje, 3+2, indexado, posicional, inclinación, herramienta inclinada, rotativo, trunnion, mesa, cabezal, eje A, eje B, eje C, tcp, rtcp, punto central de herramienta, G43.4, tiempo inverso, G93, cinemática, pivote, swarf, ángulo de avance
from: c4f1c491
---

Fabricación puede mantener la herramienta en un ángulo, y puede mover los ejes rotativos mientras corta. Tres cosas lo hacen, de la más simple a la más compleja.

**Nada de esto se ejecutó todavía en una máquina.** Las trayectorias se revisan contra la geometría con las pruebas, y el G-code se vuelve a leer, pero los postprocesadores integrados siguen los códigos documentados de los controles, no una máquina que tengamos delante. Probá el programa en el simulador propio de tu control y en el aire antes de que toque metal.

## Los ejes rotativos de la máquina

En la pestaña **Setup**, {{ui:Rotary axes}} dice qué tiene la máquina:

| Opción | La máquina |
|---|---|
| Ninguno (3 ejes) | Una fresadora simple. Cualquier operación que necesite la herramienta inclinada avisa, y el postprocesador se niega a escribirla. |
| A (gira alrededor de X) | Un eje rotativo sobre X: una mesa de 4º eje o un indexador. La herramienta solo puede inclinarse en el plano Y–Z. |
| B (gira alrededor de Y) | Un eje rotativo sobre Y. La herramienta solo puede inclinarse en el plano X–Z. |
| A y C | Un eje de inclinación alrededor de X llevado por, o que lleva, un giro alrededor de Z: una mesa trunnion, o un cabezal. |
| B y C | Lo mismo con la inclinación alrededor de Y. |

Después:

- **Llevado por**: {{ui:The table (the part turns)}} o {{ui:The head (the tool turns)}}. Una mesa gira en sentido contrario para poner la misma cara bajo la herramienta, así que el signo de cada ángulo sale de esto.
- **El control mantiene la punta de la herramienta sobre la trayectoria (TCP)**: activado, X Y Z del programa son la punta de la herramienta en las coordenadas propias de la pieza y el control hace el resto (los postprocesadores integrados estilo Fanuc y LinuxCNC escriben `G43.4` para el largo de la herramienta). Desactivado, en una máquina de mesa, PartCraft escribe X Y Z según lo que lleva la mesa girada de la pieza, alrededor del **centro de rotación** que indiques (en coordenadas de trabajo; 0, 0, 0 cuando el origen de trabajo está en el centro). Una máquina con cabezal necesita TCP activado: sin él, el programa necesitaría la longitud de pivote de la máquina, que PartCraft no conoce.
- **Límite de inclinación**: hasta dónde llega el eje de inclinación.

Las máquinas difieren en qué sentido cuentan como positivo. Si un eje gira al revés en la tuya, cambiá el signo en una copia del postprocesador ([Postprocesadores que podés editar](topic:post-processors)).

## Herramienta inclinada para una operación común

Cada operación de fresado (cara, pocket, adaptativo, contorno, taladro, chaflán, paralela, scallop, 3D desbaste, resto) tiene una **Inclinación de herramienta** y una **Inclinar hacia**: la dirección de la herramienta solo para esa operación, medida desde el eje de herramienta de la preparación. Esto es mecanizado 3+2: los ejes rotativos van a una posición y se quedan allí mientras tres ejes cortan.

- Escribí los dos ángulos, o apretá {{ui:Tool square to a face}} y hacé clic en una cara plana: la herramienta apuntará directamente hacia ella.
- Elegí las caras y aristas de la operación como siempre. Lo que cuenta como fondo o agujero se juzga a lo largo de la herramienta inclinada.
- El material para esa dirección es la caja que contiene el material girado, así que las alturas y los libramientos son seguros desde ese lado.

En el G-code, antes de la operación la herramienta sube, los ejes rotativos giran, y la herramienta baja sobre su primer punto. En una máquina de mesa sin TCP, los arcos siguen siendo arcos y los ciclos de taladrado fijos siguen siendo ciclos (el marco escrito solo gira alrededor de Z). Con TCP en un plano inclinado, los arcos se vuelven líneas cortas y los ciclos, los movimientos que representan.

La simulación de material corre una dirección inclinada **por separado**: muestra lo que esa operación corta del material entero visto desde su lado, y encuentra cortes excesivos allí, pero los cortes hechos desde otras direcciones no se trasladan.

## Acabado de 5 ejes

{{ui:More}} en la barra de Fabricación lista esta operación y la siguiente al principio de la pestaña **Operations**.

{{ui:5-axis}} es la [pasada de acabado paralela](topic:finish-3d) con una **fresa de punta esférica que se inclina mientras avanza**. Una bola corta con una esfera, y la esfera es la misma sin importar hacia dónde se incline la herramienta alrededor de su centro, así que la bola sigue exactamente la trayectoria que daría la pasada de 3 ejes y solo cambia la dirección de la herramienta:

- **Hacia la superficie**: 1 = perpendicular a la superficie, 0 = vertical, cualquier valor entre medio.
- **Inclinación hacia adelante**: grados a lo largo de la dirección del corte, para que el centro quieto de la bola no sea lo que corta.
- **Inclinación máxima**: la herramienta nunca se inclina más que esto desde el eje de la preparación.

Donde el mango tocaría el modelo, la inclinación se recorta hasta que quede libre, y la operación dice en cuántos puntos pasó. Cada pasada entra y sale con un levante recto.

## Acabado rotativo (4º eje)

{{ui:Rotary}} es para una pieza sujeta a lo largo de **X de trabajo** en un eje rotativo. La pieza gira y una fresa de punta esférica, siempre apuntando al eje, sigue su superficie:

- **Pasadas**: {{ui:Along the axis}} (líneas a lo largo de X, separadas un paso de giro) o {{ui:Round the part}} (anillos, separados un paso de X).
- **Eje en Y / Z**: dónde está el eje. Vacío significa el centro del material. En una máquina de mesa sin TCP tiene que ser el centro de rotación de Setup; la operación avisa cuando no lo es.
- **Desde / Hasta X** y **Desde / Hasta ángulo**: la parte del largo y del giro que se corta.

La altura de la bola sobre el eje en cada punto es la caída exacta de una esfera sobre la malla de la pieza, desde ese lado.

## Límites

- El acabado de 5 ejes y el rotativo toman **solo fresa de punta esférica**. No hay corte de viruta lateral (el costado de la herramienta en una pared reglada), ni líneas de flujo a lo largo de las direcciones propias de una superficie, ni desbaste multieje, ni elección automática de la inclinación para evitar colisiones.
- Las trayectorias de 5 ejes y rotativas **no pasan por la simulación de material**, que es un mapa de alturas y no puede contener un corte inclinado.
- En el acabado de 5 ejes el mango se revisa contra el modelo visto desde arriba; el portaherramientas, el husillo y la propia máquina no se revisan en ningún lado.
- El acabado rotativo corta solo lo que la herramienta ve mirando hacia el eje.
- El acabado de 5 ejes tarda un minuto o más en calcularse en una pieza grande: el mango se revisa en cada punto de cada pasada.
- Cuando los ejes rotativos se mueven junto con los lineales y el TCP está desactivado, los postprocesadores integrados escriben el avance como tiempo inverso (`G93`) y después vuelven a `G94`.
- No se escribe ningún código de plano de trabajo inclinado (`G68.2` y similares), y no se conocen límites específicos de la máquina, desenrollado ni zonas de colisión.
