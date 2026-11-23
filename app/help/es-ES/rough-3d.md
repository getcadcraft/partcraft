---
title: Desbaste 3D y mecanizado de restos
summary: Retire el material alrededor de toda la pieza nivel a nivel con una fresa plana, de radio de esquina o de punta esférica, dejando material para el acabado, y después deje que una herramienta más pequeña corte solo donde la primera dejó material. Qué garantizan las trayectorias y qué no.
keywords: desbaste 3d, desbaste, desbastar, mecanizado de restos, desbaste de restos, material restante, material a dejar, profundidad de paso, niveles, nivel z, altura constante, rampa, inmersión, rebaje, herramienta más pequeña
from: 29ddc266
---

Dos operaciones de Fabricación, bajo {{ui:Más}} en su barra de herramientas, retiran material de todo el **modelo completo** en 3D, con la herramienta mantenida vertical (o según la [dirección de herramienta](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) propia de la operación). No requieren selección.

## Desbaste 3D

{{ui:Desbaste 3D}} baja desde la parte superior del material en bruto una **profundidad de paso** cada vez. En cada nivel retira todo lo que la herramienta puede alcanzar sin tocar el modelo: filas rectas separadas un **paso lateral** (una fracción del diámetro de la herramienta), y después una vuelta alrededor del borde de lo que puede alcanzar, de modo que las paredes se siguen y no quedan como una fila de escalones en planta.

- **Material a dejar**: a qué distancia se mantiene la herramienta del modelo en todas partes, para la pasada de acabado (por defecto 0.5 mm).
- **Un nivel en cada cara plana**: un nivel adicional a la altura de cada cara plana del modelo (más el material a dejar), de modo que un fondo no quede casi a una profundidad de paso entera de altura.
- **Ignorar material más fino que**: el material más fino que esto, hacia arriba o de lado, no merece una pasada (0.05 mm para desbaste, 0.5 mm para mecanizado de restos, para que un resto fino a lo largo de una pared no obligue a la herramienta pequeña a recorrer todas las paredes).
- **Fondo**: no se corta nada por debajo de esta altura. Vacío significa el fondo del modelo.

Parte del material en bruto **tal como lo dejaron las operaciones anteriores**: tras una pasada de refrentado no corta el aire donde ya ha pasado la fresa de refrentar.

Bajada: donde la herramienta encontraría material durante el descenso, desciende en rampa a lo largo de su propia pasada con el **ángulo de rampa**, de ida y vuelta sobre como máximo dos diámetros de herramienta. Una pasada demasiado corta para eso se hunde en vertical con el avance de inmersión; la operación las cuenta y avisa, porque una herramienta que no corta por su centro no debería hacerlo.

## Mecanizado de restos

{{ui:Restos}} es la misma estrategia para una **herramienta más pequeña después de una más grande**. Lee la simulación del material y corta solo donde todavía queda material: en esquinas interiores en las que la herramienta grande no pudo entrar, en ranuras en las que no cabía, y en los escalones que dejó en las pendientes. En el resto de zonas no hace nada, así que su trayectoria es una pequeña parte de lo que tomaría la misma herramienta sobre material en bruto nuevo.

Colóquela tras la operación de desbaste y elija la herramienta más pequeña. Necesita la simulación del material de las operaciones anteriores, que el espacio de trabajo siempre ejecuta.

## Calidad de las trayectorias

- **Sin rebajes.** Las posiciones de la herramienta se calculan sobre una malla, con la fresa tomada un poco más grande de lo que es (en 1.4 celdas de malla lateralmente, y en el material a dejar), de modo que en cualquier punto donde esté queda libre del modelo. Las pruebas comprueban cada punto de corte frente a la herramienta exacta sobre la malla exacta, y la simulación del material tras cada ejecución: sin rebajes, sin movimiento rápido a través del material.
- **El precio de eso**: las paredes conservan algo más que el material a dejar, hasta la cantidad indicada como «Material adicional en paredes» en la operación (unos 0.5 mm para una herramienta Ø6, menos para una más pequeña). La pasada de acabado lo retira.

Estas trayectorias no son:

- Las filas son líneas rectas, no desfases de la forma de la pieza ni curvas de compromiso constante. Hacen más elevaciones y movimientos en el aire que una estrategia de desfase o adaptativa, y la primera fila de cada nivel corta todo el ancho de la herramienta. Para cajeras con fondo plano, [Adaptativo](topic:manufacture) es el mejor desbaste.
- El vástago y el portaherramientas no se comprueban. Un aviso indica cuándo el corte es más profundo que la longitud de la parte acanalada.
- Los socavados no se ven: el modelo es lo que la herramienta encuentra al bajar por su eje. Para desbastar un lateral, dé a una segunda operación una [dirección de herramienta inclinada](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- El mecanizado de restos conoce el material solo con la precisión de la malla de la simulación (celdas de 0.1 a 2 mm, según el tamaño de la pieza).
- En una pieza grande el programa es largo (más de 100,000 movimientos para una brida de 200 mm con una herramienta Ø6) y tarda un minuto aproximadamente en calcularse, y cada cambio en el espacio de trabajo vuelve a calcular todo el programa. Para el desbaste, use la herramienta más grande que quepa.
- Compruebe la salida en el simulador de su máquina antes de mecanizar.
