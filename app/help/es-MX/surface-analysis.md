---
title: Franjas de cebra y curvatura
summary: Compruebe qué tan suavemente se unen las caras de cualquier pieza, con franjas de cebra que siguen la vista o un mapa de color de la curvatura media, desde el menú Vistas.
keywords: cebra, franjas de cebra, líneas de reflexión, curvatura, mapa de curvatura, curvatura media, calidad de superficie, continuidad, tangente, g1, g2, suave, pliegue, líneas de resaltado
from: 78fed4c3
---

Dos vistas rápidas de qué tan suaves son las caras de una pieza, en cualquier pieza del espacio de trabajo Diseño (el espacio de trabajo Form tiene las suyas, para la forma que está editando: vea [Formas libres con Form](topic:form-surfaces)).

## Franjas de cebra

Abra {{ui:Vistas}} y elija {{ui:Franjas de cebra}}. La pieza muestra el reflejo de una luz con franjas, como lo haría una superficie pulida:

- Donde dos caras se unen **tangencialmente** (un redondeo sobre una cara plana, una superficie Gordon suave), las franjas continúan a través de la unión con un quiebre.
- Donde se encuentran en un **pliegue**, las franjas se cortan y saltan.
- Donde la curvatura también coincide (G2), las franjas fluyen sin siquiera un quiebre.

Gire la vista (arrastrando, o con una cara del cubo de vistas): las franjas se vuelven a dibujar desde la nueva dirección. **Franjas** define cuántas son.

## Curvatura

Elija {{ui:Curvatura}} en el mismo menú. La pieza se colorea según su **curvatura media**: azul donde es hueca (cóncava), pálido donde es plana, rojo donde se abomba (convexa). La tarjeta indica con qué curvatura los colores alcanzan su intensidad máxima, en 1/mm y como radio. Los bordes vivos cuentan como muy curvos, así que se muestran con fuerza; observe las caras que hay entre ellos.

## La tarjeta

Ambas opciones abren la tarjeta de análisis en la esquina inferior izquierda de la vista, que también contiene el [análisis de ángulo de salida](topic:draft-analysis). Cambie entre ellas con **Mostrar**. Al elegir de nuevo la activa en {{ui:Vistas}}, {{ui:Cerrar}} o {{key:Esc}}, se desactiva. Los colores siguen a la pieza conforme la cambia; nada se guarda en la pieza.
