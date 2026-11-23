---
title: Acabado 3D: paralelo y festón
summary: Acabe toda la superficie curva del modelo con una fresa de punta esférica, de radio de esquina o plana, en líneas paralelas a cualquier ángulo o en pasadas separadas una distancia fija, para que las crestas entre ellas mantengan la altura que pida. Qué garantizan las trayectorias y qué no.
keywords: acabado 3d, acabado, paralelo, trama, festón, festón constante, cúspide, punta esférica, radio de esquina, superficie, tolerancia, paso lateral, pendiente, material a dejar, fresa de proyección vertical, rebaje
from: 942d2341
---

Dos operaciones de Fabricación mecanizan la **superficie completa del modelo** con la herramienta mantenida vertical (tres ejes). No requieren selección: trabajan sobre todo el modelo que se ve desde arriba. Desbaste antes la pieza (adaptativo o cajera); una pasada de acabado sobre material sin mecanizar avisa de que cortaría en profundidad.

## Paralela

Líneas rectas sobre el modelo con el **ángulo** que fije, separadas un **paso lateral** (una fracción del diámetro de la herramienta). Cada línea sigue la superficie: la punta de la herramienta queda tan alta como sea necesario para que ninguna parte de la fresa baje del modelo, y la línea se corta con más detalle donde la superficie se curva. Con **Zigzag** activado, la herramienta permanece en contacto entre líneas donde puede hacerlo con seguridad (comprobado a lo largo del movimiento); en caso contrario, se levanta.

- **Tolerancia**: cuánto puede alejarse un tramo recto de una línea de la altura real de la punta (se usa la mitad como límite en el centro de cada tramo). Por defecto, 0.01 mm.
- **Solo donde la superficie sea al menos … y como máximo … (°)**: acabe solo las zonas poco inclinadas o solo las empinadas. Donde la superficie esté fuera del intervalo, la línea se omite y la herramienta se levanta.
- **Material a dejar**: el modelo desplazado esa distancia (la fresa aumentada en esa cantidad: exacto para herramientas de punta esférica y de radio de esquina; una herramienta plana deja al menos esa cantidad).
- **Fondo**: no se mecaniza nada por debajo de esta z.

## Festón

Pasadas que mantienen una distancia constante sobre la superficie entre sí, de modo que la cresta (el festón) que queda entre dos pasadas vecinas tiene la **altura** que pida. La distancia se deduce de la altura y del radio de la bola: s = 2·√(2·R·h − h²); por ejemplo, unos 0.69 mm entre pasadas para una bola Ø6 y una cresta de 0.02 mm. Una herramienta de radio de esquina usa su radio de esquina. Una fresa plana se rechaza: no tiene cresta que dimensionar.

Las pasadas empiezan **desde el borde del modelo, hacia dentro**, o **desde su parte superior, hacia abajo**. Son contornos de la distancia sobre la superficie (no de la altura), así que en una pendiente quedan próximas en planta y en una superficie plana quedan muy separadas. La distancia se mide sobre una malla de la superficie y tiene una precisión de alrededor del 1 %; la altura de la cresta es exacta donde la superficie es plana o se curva suavemente, y aproximada donde se curva deprisa. **Concordancia** mantiene el lado más alto de la superficie a la derecha de la fresa.

## Calidad de las trayectorias

Lo que comprueban las pruebas, con fórmulas cerradas o con una búsqueda independiente por fuerza bruta de la huella de la fresa:

- La altura de la punta bajo la herramienta es exacta para una herramienta de punta esférica, de radio de esquina y plana, en caras, aristas y esquinas de la malla, y nunca está por encima de la altura real; en líneas paralelas la trayectoria se mantiene dentro de la tolerancia respecto a ella, sin rebajes más profundos que eso.
- Las longitudes de trayectoria sobre un plano inclinado coinciden con la fórmula cerrada; las pasadas de festón sobre un plano están separadas la distancia pedida y la cresta entre ellas sale a la altura pedida.
- La simulación del material no muestra rebajes tras una pasada y muestra las crestas que quedan.

Estas trayectorias no son todo lo que ofrece un sistema de producción: son pasadas básicas de acabado.

- No implementado: acabado a z constante, limpieza con lápiz y de esquinas, pasadas radiales y en espiral, proyección de una curva sobre la superficie, detección de zonas planas, comprobaciones de colisión del portaherramientas y del vástago. El desbaste y el mecanizado de restos son operaciones propias ([Desbaste 3D y mecanizado de restos](topic:rough-3d)); una herramienta inclinada se trata en [Acabado de 5 ejes](topic:multi-axis#5-axis-finishing).
- El centro de la herramienta permanece sobre el modelo: las trayectorias se detienen en el borde del modelo en lugar de salirse de él, así que una pared vertical justo en el borde no se acaba hasta su pie.
- Los socavados no se ven (la superficie es lo que la herramienta encuentra desde arriba).
- El modelo es la malla del núcleo, así que las trayectorias siguen la malla (su tolerancia de cuerda es de unas 0.0002 veces la diagonal de la pieza), no la superficie exacta.
- Acabar un modelo grande con una tolerancia fina produce un programa largo con muchos movimientos cortos. Compruebe la salida en el simulador de su máquina antes de mecanizar.
