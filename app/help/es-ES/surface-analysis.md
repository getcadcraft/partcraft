---
title: Franjas de cebra y curvatura
summary: Compruebe lo suavemente que se unen las caras de cualquier pieza, con franjas de cebra que siguen la vista o un mapa de colores de la curvatura media, desde el menú Vistas.
keywords: cebra, franjas de cebra, líneas de reflexión, curvatura, mapa de curvatura, curvatura media, calidad de superficie, continuidad, tangente, g1, g2, suave, quiebro, arista viva, líneas de realce
from: 78fed4c3
---

Dos vistazos rápidos a lo suaves que son las caras de una pieza, en cualquier pieza del espacio de trabajo Diseño (el espacio Forma tiene el suyo, para la forma que está editando: vea [Formas de superficie libre con Forma](topic:form-surfaces)).

## Franjas de cebra

Abra {{ui:Vistas}} y elija {{ui:Franjas de cebra}}. La pieza muestra el reflejo de una luz con franjas, como lo haría una superficie pulida:

- Donde dos caras se unen **tangencialmente** (un redondeo sobre una cara plana, una superficie de Gordon suave), las franjas continúan a través de la unión con un ligero desvío.
- Donde se encuentran en un **quiebro**, las franjas se cortan y saltan.
- Donde la curvatura también coincide (G2), las franjas fluyen sin ni siquiera un codo.

Gire la vista (arrastrando, o con una cara del cubo de vistas): las franjas se vuelven a dibujar desde la nueva dirección. **Franjas** fija cuántas hay.

## Curvatura

Elija {{ui:Curvatura}} en el mismo menú. La pieza se colorea según su **curvatura media**: azul donde es hueca (cóncava), pálido donde es plana, rojo donde abomba (convexa). La tarjeta indica con qué curvatura los colores alcanzan su intensidad máxima, en 1/mm y como radio. Los bordes vivos cuentan como muy curvados, así que se ven con fuerza; fíjese en las caras entre ellos.

## La tarjeta

Ambas opciones abren la tarjeta de análisis en la parte inferior izquierda de la vista, que también contiene el [análisis de ángulo de salida](topic:draft-analysis). Cambie entre ellas con **Mostrar**. Si elige de nuevo la que está abierta en {{ui:Vistas}}, {{ui:Cerrar}} o {{key:Esc}}, se desactiva. Los colores siguen a la pieza a medida que la cambia; no se guarda nada en la pieza.
