---
title: Acabado 3D: paralelo y festoneado
summary: Terminá la superficie curva de todo el modelo con una fresa de punta esférica, de punta redondeada o plana, en líneas paralelas a cualquier ángulo o en pasadas separadas una distancia fija, para que las crestas entre ellas tengan la altura que pedís. Qué garantizan las trayectorias, y qué no.
keywords: acabado 3d, acabado, paralelo, barrido, festoneado, festoneado constante, cúspide, punta esférica, punta redondeada, superficie, tolerancia, paso, pendiente, material a dejar, cortador de caída, rayado
from: e1587d0a
---

Dos operaciones en Manufacture cortan la **superficie completa del modelo** con la herramienta mantenida vertical (tres ejes). No toman picks: trabajan sobre todo el modelo que se ve desde arriba. Desbastá primero la pieza (adaptativo o cavidad); una pasada de acabado sobre material sin cortar avisa que cortaría profundo.

## Paralelo

Líneas rectas a través del modelo en el **ángulo** que fijes, separadas un **paso** (una fracción del diámetro de la herramienta). Cada línea sigue la superficie: la punta de la herramienta queda tan alta como debe para que ninguna parte de la fresa baje debajo del modelo, y la línea se corta más fina donde la superficie se dobla. Con **Zig-zag** activado, la herramienta queda apoyada entre líneas donde puede hacerlo con seguridad (verificado a lo largo del movimiento); si no, se levanta.

- **Tolerance**: cuánto puede alejarse de la altura verdadera de la punta un trozo recto de línea (se usa la mitad como límite en el medio de cada trozo). Predeterminado 0,01 mm.
- **Only where the surface is at least … and at most … (°)**: termina sólo zonas planas o sólo zonas empinadas. Donde la superficie queda fuera del rango, la línea se omite y la herramienta se levanta.
- **Stock to leave**: el modelo desplazado esa distancia (la fresa agrandada por ella: exacto para herramientas de punta esférica y redondeada; una herramienta plana deja al menos esa cantidad).
- **Bottom**: nada se corta por debajo de esta z.

## Festoneado

Pasadas que mantienen una distancia constante sobre la superficie entre sí, de modo que la cresta (el festón) que queda entre dos pasadas vecinas tiene la **altura** que pedís. La distancia sale de la altura y el radio de la bola: s = 2·√(2·R·h − h²), por ejemplo unos 0,69 mm entre pasadas para una bola Ø6 y una cresta de 0,02 mm. Una herramienta de punta redondeada usa el radio de su esquina. Una fresa plana se rechaza: no tiene cresta que dimensionar.

Las pasadas empiezan **desde el borde del modelo, hacia adentro** o **desde su parte superior, hacia abajo**. Son contornos de la distancia sobre la superficie (no de altura), así que en una pendiente están cerca en planta y en una zona plana están muy separadas. La distancia se mide sobre una grilla de la superficie y tiene una precisión de alrededor del 1 %; la altura de la cresta es exacta donde la superficie es plana o suavemente curva, y aproximada donde se curva rápido. **Climb** mantiene el lado más alto de la superficie a la derecha del cortador.

## Qué tan buenas son las trayectorias

Lo que verifican las pruebas, con formas cerradas o una búsqueda de fuerza bruta independiente sobre la huella del cortador:

- La altura de la punta bajo la herramienta es exacta para una herramienta esférica, redondeada y plana sobre caras, aristas y esquinas de la malla, y nunca está por encima de la altura verdadera; para líneas paralelas la trayectoria queda dentro de la tolerancia, sin ninguna entalla más profunda que eso.
- Los largos de trayectoria sobre un plano inclinado coinciden con la forma cerrada; las pasadas de festoneado sobre un plano están a la distancia pedida, y la cresta entre ellas sale a la altura pedida.
- La simulación de material muestra ninguna entalla después de una pasada y muestra las crestas que quedan.

Lo que estas trayectorias no son: son pasadas básicas de acabado, no todo lo que ofrece un sistema de producción.

- Sin hacer: contorno a z constante (waterline), limpieza de esquinas y de rincones, pasadas radiales y en espiral, proyección de una curva sobre la superficie, detección de zonas planas, mecanizado de remanente, verificación de colisión de porta-herramientas y vástago, e inclinación de la herramienta.
- El centro de la herramienta queda sobre el modelo: las trayectorias se detienen en el borde del modelo en lugar de seguir afuera, así que una pared vertical justo en el borde no se acaba hasta su pie.
- Las socavaduras no se ven (la superficie es lo que la herramienta encuentra desde arriba).
- El modelo es la malla del núcleo, así que las trayectorias siguen la malla (su tolerancia de cuerda es de alrededor de 0,0002 de la diagonal de la pieza), no la superficie exacta.
- Acabar un modelo grande con una tolerancia fina produce un programa largo con muchos movimientos cortos. Revisá la salida en el simulador de tu máquina antes de cortar.
