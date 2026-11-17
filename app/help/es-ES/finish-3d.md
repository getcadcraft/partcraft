---
title: Acabado 3D: paralelo y scallop
summary: Acabe toda la superficie curva del modelo con una fresa de punta esférica, de radio de esquina o plana, en líneas paralelas a cualquier ángulo o en pasadas separadas una distancia fija, para que las crestas entre ellas mantengan la altura que pide. Qué garantizan las trayectorias y qué no.
keywords: acabado 3d, acabado, paralelo, raster, scallop, scallop constante, cúspide, punta esférica, radio de esquina, superficie, tolerancia, paso, pendiente, sobrante a dejar, cortador de caída, entalladura
from: e1587d0a
---

Dos operaciones de Fabricación cortan **toda la superficie del modelo** con la herramienta mantenida vertical (tres ejes). No necesitan selecciones: trabajan sobre todo el modelo que se ve desde arriba. Desbaste la pieza antes (adaptativo o cajera); un acabado sobre material sin cortar avisa de que cortaría profundo.

## Paralelo

Líneas rectas a través del modelo con el **ángulo** que ajuste, separadas **paso** (una fracción del diámetro de la herramienta). Cada línea sigue la superficie: la punta de la herramienta está tan alta como debe para que ninguna parte del cortador baje del modelo, y la línea se corta más fina donde la superficie se dobla. Con **Zig-zag** activado, la herramienta permanece bajada entre líneas donde puede hacerlo con seguridad (comprobado a lo largo del movimiento); si no, se levanta.

- **Tolerancia**: cuánto puede alejarse un trozo recto de una línea de la altura real de la punta (se usa la mitad como límite en el centro de cada trozo). Predeterminado 0.01 mm.
- **Solo donde la superficie esté al menos en … y como máximo en … (°)**: acabe solo las zonas poco inclinadas o solo las empinadas. Donde la superficie queda fuera del intervalo, la línea se omite y la herramienta se levanta.
- **Sobrante a dejar**: el modelo desplazado esa distancia (el cortador agrandado en esa cantidad: exacto para herramientas de punta esférica y de radio de esquina; una herramienta plana deja al menos esa cantidad).
- **Fondo**: nada se corta por debajo de esta z.

## Scallop

Pasadas que mantienen una distancia constante sobre la superficie entre sí, de modo que la cresta (el scallop) que queda entre dos pasadas vecinas tiene la **altura** que pida. La distancia se deduce de la altura y del radio de la bola: s = 2·√(2·R·h − h²); por ejemplo, unos 0.69 mm entre pasadas para una bola Ø6 y una cresta de 0.02 mm. Una herramienta de radio de esquina usa su radio de esquina. Una fresa plana se rechaza: no tiene cresta que dimensionar.

Las pasadas empiezan **desde el borde del modelo, hacia dentro**, o **desde su parte superior, hacia abajo**. Son contornos de la distancia sobre la superficie (no de altura), así que en una pendiente están juntas en planta y en una superficie plana quedan muy separadas. La distancia se mide en una rejilla sobre la superficie y es precisa hasta cerca de un 1 %; la altura de la cresta es exacta donde la superficie es plana o se curva suavemente, y aproximada donde se curva deprisa. **Concordancia** mantiene el lado más alto de la superficie a la derecha del cortador.

## Calidad de las trayectorias

Lo que comprueban las pruebas, con fórmulas cerradas o con una búsqueda exhaustiva independiente de la huella del cortador:

- La altura de la punta bajo la herramienta es exacta para una herramienta esférica, de radio de esquina y plana sobre caras, aristas y esquinas de la malla, y nunca está por encima de la altura real; para las líneas paralelas la trayectoria se mantiene dentro de la tolerancia, sin entalladuras más profundas que eso.
- Las longitudes de trayectoria sobre un plano inclinado coinciden con la fórmula cerrada; las pasadas de scallop sobre un plano están separadas la distancia pedida y la cresta entre ellas sale a la altura pedida.
- La simulación de material no muestra entalladuras tras una pasada y muestra las crestas que quedan.

Lo que estas trayectorias no son: son pasadas básicas de acabado, no todo lo que ofrece un sistema de producción.

- No construidos: contorno a z constante (waterline), limpieza de esquinas (pencil), pasadas radiales y en espiral, proyección de una curva sobre la superficie, detección de zonas planas, mecanizado de restos, comprobación de colisiones del portaherramientas y del mango, y cualquier inclinación de la herramienta.
- El centro de la herramienta se mantiene sobre el modelo: las trayectorias se detienen en el borde del modelo en lugar de salirse de él, así que una pared vertical justo en el borde no se acaba hasta su pie.
- Las socavaduras no se ven (la superficie es lo que la herramienta encuentra desde arriba).
- El modelo es la malla del núcleo, así que las trayectorias siguen la malla (su tolerancia de cuerda es de unos 0.0002 de la diagonal de la pieza), no la superficie exacta.
- Acabar un modelo grande con una tolerancia fina produce un programa largo con muchos movimientos cortos. Revise la salida en el simulador de su máquina antes de cortar.
