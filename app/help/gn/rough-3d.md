---
title: 3D desbaste y mecanizado de resto
summary: Quitar el material alrededor de todo el modelo nivel por nivel con una fresa plana, de punta redonda o de punta esférica, dejando material para el acabado, y después dejar que una herramienta más chica corte solo donde la primera dejó material. Lo que garantizan las trayectorias y lo que no.
keywords: desbaste 3d, desbaste, desbastar, mecanizado de resto, desbaste de resto, material restante, material a dejar, profundidad por pasada, niveles, nivel z, línea de agua, rampa, inmersión, corte excesivo, herramienta más chica
from: 29ddc266
---

Dos operaciones de Fabricación, bajo {{ui:More}} en su barra, quitan material de **todo el modelo** en 3D, con la herramienta mantenida vertical (o a lo largo de la [dirección de herramienta](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) propia de la operación). No piden selección.

## Desbaste 3D

{{ui:3D rough}} baja desde la parte superior del material una **profundidad por pasada** a la vez. En cada nivel quita todo lo que la herramienta puede alcanzar sin tocar el modelo: filas rectas separadas un **paso lateral** (fracción del diámetro de la herramienta), y después una vuelta por el borde de lo que puede alcanzar, así las paredes se siguen y no quedan como una fila de escalones en planta.

- **Material a dejar**: a qué distancia se mantiene la herramienta del modelo en todas partes, para la pasada de acabado (predeterminado 0,5 mm).
- **Un nivel en cada cara plana**: un nivel extra a la altura de cada cara plana del modelo (más el material a dejar), para que un fondo no quede casi una profundidad por pasada más arriba.
- **Ignorar material más fino que**: el material más fino que esto, hacia arriba o a los costados, no vale una pasada (0,05 mm para desbaste, 0,5 mm para mecanizado de resto, para que un pelo de material a lo largo de una pared no mande a la herramienta chica alrededor de cada pared).
- **Fondo**: no se corta nada por debajo de esta altura. Vacío significa el fondo del modelo.

Empieza desde el material **tal como lo dejaron las operaciones anteriores**: después de una pasada de refrentado no corta el aire donde ya pasó la fresa de cara.

Para bajar: donde la herramienta encontraría material en el camino, entra en rampa a lo largo de su propia pasada con el **ángulo de rampa**, de ida y vuelta sobre como máximo dos diámetros de herramienta. Una pasada demasiado corta para eso se hace con inmersión recta hacia abajo al **avance de inmersión**; la operación cuenta esas y avisa, porque una herramienta que no corta en su centro no debería hacerlo.

## Mecanizado de resto

{{ui:Rest}} es la misma estrategia para **una herramienta más chica después de una más grande**. Lee la simulación de material y corta solo donde todavía queda material: en esquinas interiores donde la herramienta grande no pudo entrar, en ranuras en las que no cabía, y en los escalones que dejó en las pendientes. En cualquier otro lugar no hace nada, así que su trayectoria es una pequeña parte de lo que tomaría la misma herramienta sobre material nuevo.

Ponela después de la operación de desbaste y elegí la herramienta más chica. Necesita la simulación de material de las operaciones anteriores, que el espacio de trabajo siempre calcula.

## Cuánto valen las trayectorias

- **Sin corte excesivo.** Las posiciones de la herramienta se calculan sobre una cuadrícula, con la fresa tomada un poco más grande de lo que es (1,4 celdas de la cuadrícula hacia los costados, y el material a dejar), así que en cualquier punto donde esté queda libre del modelo. Las pruebas revisan cada punto de corte contra la herramienta exacta sobre la malla exacta, y la simulación de material después de cada corrida: sin corte excesivo, sin movimiento rápido a través del material.
- **El costo de eso**: las paredes conservan un poco más que el material a dejar, hasta la cantidad que aparece como "Material extra en paredes" en la operación (unos 0,5 mm para una herramienta Ø6, menos para una más chica). La pasada de acabado lo toma.

Lo que estas trayectorias no son:

- Las filas son líneas rectas, no desplazamientos de la forma de la pieza ni curvas de compromiso constante. Hacen más levantes y más movimientos en el aire que una estrategia de desplazamiento o adaptativa, y la primera fila de cada nivel corta el ancho completo de la herramienta. Para pockets de fondo plano, [Adaptativo](topic:manufacture) es un mejor desbaste.
- El mango y el portaherramientas de la herramienta no se revisan. Un aviso dice cuándo el corte es más profundo que el largo de filo.
- Las socavaduras no se ven: el modelo es lo que la herramienta encuentra bajando por su eje. Para desbastar un costado, dale a una segunda operación una [dirección de herramienta inclinada](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- El mecanizado de resto conoce el material solo tan bien como la cuadrícula de la simulación (celdas de 0,1 a 2 mm, según el tamaño de la pieza).
- En una pieza grande el programa es largo (más de 100.000 movimientos para una brida de 200 mm con una herramienta Ø6) y tarda cerca de un minuto en calcularse, y cada cambio en el espacio de trabajo vuelve a calcular todo el programa. Para desbastar, usá la herramienta más grande que entre.
- Revisá la salida en el simulador propio de tu máquina antes de cortar.
