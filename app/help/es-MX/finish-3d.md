---
title: Acabado 3D: paralelo y festoneado
summary: Acabe toda la superficie curva del modelo con una fresa de punta esférica, redonda o plana, en líneas paralelas a cualquier ángulo o en pasadas separadas una distancia fija, para que las crestas entre ellas mantengan la altura que usted pida. Qué garantizan las trayectorias y qué no.
keywords: acabado 3d, acabado, paralelo, trama, festoneado, festón constante, cúspide, punta esférica, punta redonda, superficie, tolerancia, paso lateral, pendiente, material a dejar, fresa de caída, rayado
from: e1587d0a
---

Dos operaciones de Fabricación cortan **toda la superficie del modelo** con la herramienta mantenida vertical (tres ejes). No piden selección: trabajan sobre todo el modelo que se puede ver desde arriba. Desbaste la pieza primero (adaptativo o cajera); una pasada de acabado sobre material sin cortar avisa de que cortaría demasiado profundo.

## Paralelo

Líneas rectas a través del modelo en el **ángulo** que usted fije, separadas **paso lateral** (una fracción del diámetro de la herramienta). Cada línea sigue la superficie: la punta de la herramienta queda tan alta como debe estar para que ninguna parte del cortador baje del modelo, y la línea se corta más fina donde la superficie se dobla. Con **Zig-zag** activado, la herramienta permanece abajo entre líneas donde puede hacerlo con seguridad (se verifica a lo largo del movimiento); si no, se levanta.

- **Tolerancia**: cuánto puede alejarse un trozo recto de una línea de la altura real de la punta (la mitad se usa como límite en el centro de cada trozo). Predeterminado 0.01 mm.
- **Solo donde la superficie esté entre … y … (°)**: acabe solo las zonas poco inclinadas o solo las empinadas. Donde la superficie esté fuera del rango, la línea se omite y la herramienta se levanta.
- **Material a dejar**: el modelo desplazado esa distancia (el cortador agrandado en esa medida: exacto para herramientas de punta esférica y redonda; una herramienta plana deja al menos esa cantidad).
- **Fondo**: no se corta nada por debajo de esta z.

## Festoneado

Pasadas que mantienen una distancia constante sobre la superficie entre sí, de modo que la cresta (el festón) que queda entre dos pasadas vecinas tiene la **altura** que usted pida. La distancia sale de la altura y del radio de la bola: s = 2·√(2·R·h − h²); por ejemplo, unos 0.69 mm entre pasadas para una bola Ø6 y una cresta de 0.02 mm. Una herramienta de punta redonda usa su radio de esquina. Una fresa plana se rechaza: no tiene cresta que dimensionar.

Las pasadas empiezan **desde el borde del modelo, hacia dentro**, o **desde su parte superior, hacia abajo**. Son contornos de la distancia sobre la superficie (no de altura), así que en una pendiente quedan cerca en planta y en una zona plana quedan muy separadas. La distancia se mide en una malla sobre la superficie y es buena hasta alrededor de un 1 %; la altura de la cresta es exacta donde la superficie es plana o suavemente curva, y aproximada donde se curva rápidamente. **Concordancia** mantiene el lado más alto de la superficie a la derecha del cortador.

## Qué tan buenas son las trayectorias

Lo que comprueban las pruebas, con fórmulas cerradas o una búsqueda independiente por fuerza bruta de la huella del cortador:

- La altura de la punta bajo la herramienta es exacta para una herramienta esférica, redonda y plana en caras, aristas y esquinas de la malla, y nunca queda por encima de la altura real. En líneas paralelas, la trayectoria se mantiene dentro de la tolerancia, sin clavados más profundos que eso.
- Las longitudes de trayectoria en un plano inclinado coinciden con la fórmula cerrada; las pasadas de festoneado en un plano están separadas la distancia pedida, y la cresta entre ellas sale a la altura pedida.
- La simulación de material no muestra clavados después de una pasada, y muestra las crestas que quedan.

Lo que estas trayectorias no son: son pasadas básicas de acabado, no todo lo que ofrece un sistema de producción.

- No construido: contorno a z constante, limpieza de esquinas y de lápiz, pasadas radiales y en espiral, proyección de una curva sobre la superficie, detección de zonas planas, mecanizado de restos, comprobación de colisiones del portaherramientas y del vástago, e inclinación de la herramienta.
- El centro de la herramienta se mantiene sobre el modelo: las trayectorias se detienen en el borde del modelo en lugar de salirse, así que una pared vertical justo en el borde no se acaba hasta su pie.
- No se ven los socavados (la superficie es lo que la herramienta toca desde arriba).
- El modelo es la malla del núcleo, así que las trayectorias siguen la malla (su tolerancia de cuerda es de unas 0.0002 de la diagonal de la pieza), no la superficie exacta.
- Acabar un modelo grande con una tolerancia fina produce un programa largo con muchos movimientos cortos. Revise la salida en el simulador de su máquina antes de cortar.
