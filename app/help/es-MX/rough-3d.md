---
title: Desbaste 3D y mecanizado de resto
summary: Retire el material alrededor de todo el modelo nivel por nivel con una fresa plana, de punta redondeada o de punta esférica, dejando material para el acabado, y luego deje que una herramienta más pequeña corte solo donde la primera dejó material. Qué garantizan las trayectorias y qué no.
keywords: desbaste 3D, desbaste, mecanizado de resto, desbaste de resto, material restante, material a dejar, paso de profundidad, niveles, nivel Z, nivel de cota constante, rampa, inmersión, sobrecorte, herramienta más pequeña
from: 29ddc266
---

Dos operaciones de Fabricación, bajo {{ui:Más}} en su barra de herramientas, retiran material en bruto de todo el modelo en 3D, con la herramienta mantenida vertical (o a lo largo de la [dirección de herramienta](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) propia de la operación). No requieren selecciones.

## Desbaste 3D

{{ui:Desbaste 3D}} baja desde la parte superior del material en bruto **una profundidad de paso** a la vez. En cada nivel retira todo lo que la herramienta puede alcanzar sin tocar el modelo: filas rectas separadas un **paso lateral** (una fracción del diámetro de la herramienta), y luego una vuelta por el borde de lo que puede alcanzar, para que las paredes se sigan y no queden como una fila de escalones en planta.

- **Material a dejar**: qué tan lejos se mantiene la herramienta del modelo en todas partes, para la pasada de acabado (predeterminado 0.5 mm).
- **Un nivel en cada cara plana**: un nivel adicional a la altura de cada cara plana del modelo (más el material a dejar), para que un fondo no quede casi a una profundidad de paso completa de altura.
- **Ignorar material más delgado que**: el material más delgado que esto, hacia arriba o de lado, no vale una pasada (0.05 mm para desbaste, 0.5 mm para mecanizado de resto, para que un hilo de material a lo largo de una pared no mande a la herramienta más pequeña a recorrer cada pared).
- **Fondo**: no se corta nada por debajo de esta altura. Vacío significa el fondo del modelo.

Parte del material en bruto **tal como lo dejaron las operaciones anteriores**: después de una pasada de cara no corta el aire donde ya pasó la fresa de refrentar.

Para bajar: donde la herramienta encontraría material en el descenso, baja en rampa a lo largo de su propia pasada con el **ángulo de rampa**, de ida y vuelta sobre como máximo dos diámetros de herramienta. Una pasada demasiado corta para eso se hunde en vertical con el avance de inmersión; la operación las cuenta y avisa, porque una herramienta que no corta por su centro no debería hacerlo.

## Mecanizado de resto

{{ui:Resto}} es la misma estrategia para **una herramienta más pequeña después de una más grande**. Lee la simulación del material y corta solo donde todavía hay material: esquinas interiores en las que la herramienta grande no pudo girar, ranuras en las que no cabía, los escalones que dejó en las pendientes. En todo lo demás no hace nada, así que su trayectoria es una pequeña parte de lo que la misma herramienta recorrería sobre material nuevo.

Colóquela después de la operación de desbaste y elija la herramienta más pequeña. Necesita la simulación del material de las operaciones anteriores, que el espacio de trabajo siempre ejecuta.

## Calidad de las trayectorias

- **Sin sobrecortes.** Las posiciones de la herramienta se calculan sobre una malla, con la fresa tomada un poco más grande de lo que es (1.4 celdas de malla de lado, y el material a dejar), de modo que en cualquier punto donde esté se mantenga libre del modelo. Las pruebas comparan cada punto de corte con la herramienta exacta sobre la malla exacta, y la simulación del material después de cada corrida: sin sobrecortes, sin movimiento rápido a través del material.
- **El costo de eso**: las paredes conservan un poco más que el material a dejar, hasta la cantidad que se muestra como "Material extra en paredes" en la operación (unos 0.5 mm para una herramienta Ø6, menos para una más pequeña). La pasada de acabado lo retira.

Lo que estas trayectorias no son:

- Las filas son líneas rectas, no desfases de la forma de la pieza ni curvas de compromiso constante. Hacen más levantamientos y movimientos en el aire que una estrategia de desfase o adaptativa, y la primera fila de cada nivel corta el ancho completo de la herramienta. Para cajeras con fondo plano, [Adaptativo](topic:manufacture) es el mejor desbaste.
- El vástago y el portaherramientas de la herramienta no se revisan. Una advertencia indica cuándo el corte es más profundo que la longitud de filo.
- No se ven los socavados: el modelo es lo que la herramienta encuentra al bajar por su eje. Para desbastar un lado, dé a una segunda operación una [dirección de herramienta inclinada](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- El mecanizado de resto conoce el material solo tan bien como la malla de la simulación (celdas de 0.1 a 2 mm, según el tamaño de la pieza).
- En una pieza grande el programa es largo (más de 100,000 movimientos para una brida de 200 mm con una herramienta Ø6) y tarda cerca de un minuto en calcularse, y cada cambio en el espacio de trabajo vuelve a calcular todo el programa. Use para el desbaste la herramienta más grande que quepa.
- Revise la salida en el simulador de su máquina antes de cortar.
