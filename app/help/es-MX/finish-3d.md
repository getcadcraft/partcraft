---
title: Acabado 3D: paralelo y festón
summary: Acabe toda la superficie curva del modelo con una fresa de punta esférica, redondeada o plana, en líneas paralelas a cualquier ángulo o en pasadas separadas una distancia fija para que las crestas entre ellas tengan la altura que pida. Qué garantizan las trayectorias y qué no.
keywords: acabado 3D, acabado, paralelo, barrido por líneas, festón, festón constante, cresta, punta esférica, punta redondeada, superficie, tolerancia, paso lateral, pendiente, material a dejar, cortador de caída, sobrecorte
from: 942d2341
---

Dos operaciones de Fabricación cortan la **superficie completa del modelo** con la herramienta mantenida vertical (tres ejes). No requieren selecciones: trabajan sobre todo lo que se puede ver desde arriba. Desbaste primero la pieza (adaptativo o cajera); una pasada de acabado sobre material sin cortar avisa de que cortaría profundo.

## Paralela

Líneas rectas sobre el modelo con el **ángulo** que defina, separadas un **paso lateral** (una fracción del diámetro de la herramienta). Cada línea sigue la superficie: la punta de la herramienta queda a la altura necesaria para que ninguna parte de la fresa baje del modelo, y la línea se corta más fina donde la superficie se dobla. Con **Zigzag** activado, la herramienta permanece abajo entre líneas donde puede hacerlo con seguridad (se comprueba a lo largo del movimiento); si no, se eleva.

- **Tolerancia**: qué tan lejos puede estar un tramo recto de una línea de la altura real de la punta (se usa la mitad como límite en el centro de cada tramo). Predeterminado 0.01 mm.
- **Solo donde la superficie sea de al menos … y como máximo … (°)**: acabe solo zonas poco inclinadas o solo las empinadas. Donde la superficie esté fuera del intervalo, la línea se omite y la herramienta se eleva.
- **Material a dejar**: el modelo desplazado esa distancia (la fresa agrandada en esa cantidad: exacto para herramientas de punta esférica y redondeada; una herramienta plana deja al menos esa cantidad).
- **Fondo**: no se corta nada por debajo de esta z.

## Festón

Pasadas que mantienen entre sí una distancia constante sobre la superficie, de modo que la cresta (el festón) que queda entre dos pasadas vecinas tenga la **altura** que pida. La distancia se calcula a partir de la altura y del radio de la bola: s = 2·√(2·R·h − h²); por ejemplo, unos 0.69 mm entre pasadas para una bola Ø6 y una cresta de 0.02 mm. Una herramienta de punta redondeada usa el radio de su esquina. Una fresa plana se rechaza: no tiene cresta que dimensionar.

Las pasadas empiezan **desde el borde del modelo, hacia dentro**, o **desde su parte superior, hacia abajo**. Son contornos de la distancia sobre la superficie (no de altura), así que en una pendiente quedan juntas en planta y en una zona plana quedan muy separadas. La distancia se mide sobre una malla de la superficie y tiene una precisión de alrededor del 1 %; la altura de la cresta es exacta donde la superficie es plana o suavemente curva, y aproximada donde se curva rápidamente. **Concordancia** mantiene el lado más alto de la superficie a la derecha de la fresa.

## Calidad de las trayectorias

Lo que comprueban las pruebas, con fórmulas cerradas o con una búsqueda independiente por fuerza bruta de la huella de la fresa:

- La altura de la punta bajo la herramienta es exacta para una herramienta de punta esférica, redondeada y plana, en caras, aristas y esquinas de la malla, y nunca está por encima de la altura real; en líneas paralelas la trayectoria se mantiene dentro de la tolerancia, sin sobrecortes más profundos que ella.
- Las longitudes de trayectoria en un plano inclinado coinciden con la fórmula cerrada; las pasadas de festón en un plano están separadas la distancia pedida y la cresta entre ellas sale a la altura pedida.
- La simulación del material no muestra sobrecortes tras una pasada y muestra las crestas que quedan.

Estas trayectorias no son todo lo que ofrece un sistema de producción: son pasadas de acabado básicas.

- No construido: acabado por cota constante (waterline), limpieza de esquinas y con lápiz, pasadas radiales y en espiral, proyección de una curva sobre la superficie, detección de zonas planas, comprobaciones de colisión del portaherramientas y del vástago. El desbaste y el mecanizado de resto son operaciones propias ([Desbaste 3D y mecanizado de resto](topic:rough-3d)); una herramienta inclinada es [acabado de 5 ejes](topic:multi-axis#5-axis-finishing).
- La punta de la fresa se mantiene sobre el modelo: las trayectorias se detienen en el borde del modelo en lugar de salirse de él, así que una pared vertical justo en el borde no se acaba hasta su pie.
- No se ven los socavados (la superficie es lo que la herramienta encuentra desde arriba).
- El modelo es la malla del núcleo, así que las trayectorias siguen la malla (su tolerancia de cuerda es de alrededor de 0.0002 de la diagonal de la pieza), no la superficie exacta.
- Acabar un modelo grande con una tolerancia fina genera un programa largo con muchos movimientos cortos. Revise la salida en el simulador de su máquina antes de cortar.
