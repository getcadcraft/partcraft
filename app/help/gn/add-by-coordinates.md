---
title: Agregar geometría del boceto escribiendo coordenadas
summary: Eipuru **Agregar por coordenadas** panel de boceto-pe, línea, línea de eje, rectángulo, círculo ha punto posición exacta-pe ombohasa haguã, teclado rupive añoite.
keywords: coordenadas, entrada escrita, entrada por teclado, entrada numérica, posición exacta, x y, coordenadas absolutas, accesibilidad, sin mouse
from: 5e6c1656
---

Umi número reikuaáramo, escribirlos ojapo rápido clic ha cota rehe. **Agregar por coordenadas** oĩ panel derecho-pe cada vez boceto abierto oĩvare. Pointer ndaipurúvo mo'ã boceto ojapo haguã avei.

Coordenadas milímetro-pe oĩ, boceto propio ejes-pe: x derecha-pe ha y arriba-pe boceto ohecha'ỹre, (0, 0) origen-pe (círculo rojo cruz-hápe).

## Agregar forma

1. Emoañete boceto (ver [Mbojoaja primer boceto](topic:sketch-basics)).
2. Panel derecho-pe, eñembyaty **Agregar por coordenadas** peve.
3. Elegí forma **Agregar**-pe: Línea, Línea de eje, Rectángulo, Círculo térã Punto.
4. Completá casillas:

| Forma | Casillas |
|---|---|
| Línea | **Desde x, y** ha **Hasta x, y** |
| Línea de eje | **Desde x, y** ha **Hasta x, y** |
| Rectángulo | **Esquina x, y** ha **Esquina opuesta x, y** |
| Círculo | **Centro x, y** ha **Radio** |
| Punto | **En x, y** |

5. Elegí {{ui:Agregar}}, térã {{key:Enter}} casilla-pe.

Forma ohechaukáta ha barra de estado ohechauka, por ejemplo: "Rectángulo agregado." Casillas oñemboty próxima-pe. Cada agregado oiko un paso de {{ui:Deshacer}}.

Escribí par número dos gotyo coma térã espacio ndive: `0, 0`, `25 -10` térã `12.5,40`. Número negativo ha decimal oĩ porã. Radio ituvéva cero. Ndaha'éi número-pe, barra de estado ohechauka: 'Escribí coordenadas como "x, y" ha radio cero ituvéva.'

## Ejemplo: placa con ranura, escrita

1. Emoañete boceto **plano Front**-pe.
2. **Agregar**: Rectángulo. **Esquina x, y**: `-50, -30`. **Esquina opuesta x, y**: `50, 30`. {{key:Enter}}.
3. **Agregar**: Círculo. **Centro x, y**: `-30, 0`. **Radio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Radio**: `5`. {{key:Enter}}.
5. Elegí {{ui:Salir del boceto}}, upe rire {{ui:Extruir}}: placa 100 × 60 mm, mokõi agujero 10 mm ha.

## Geometría escrita oñeñote, ndaipóri atadura

Coordenadas escritas geometría porã-pe ombohasa, pero **ndaha'éi relaciones**. Forma kuatiañe-pe azul oĩta (subdefinido) ha ojemoveha ikatu eñeme'ẽ térã otro cota ojeporavo ramo:

- rectángulo escrito oguereko iñakã, horizontal ha vertical relaciones, mbojoaja-icha, pero nada ndohasái origen-pe;
- línea escrita ndoguerekói horizontal térã vertical relación, aunque nivel línea escribiste;
- círculo escrito centro libre.

Boceto completo definido ojapo haguã, cota ha relaciones agregá upe rire (ver [Definí completamente un boceto](topic:relations-dimensions)). Ejemplo: escogé rectángulo esquina ha origen, elegí {{ui:• Coincidente}}, térã cotá círculo centro origen-gui.

:::note
Mouse ndive ndaipurihái, ndeikatu ko'ẽrõ: movete plano fila historial-pe {{key:Tab}} ha flechas rupive, presioná {{key:Enter}} eleccionar haguã, presioná {{key:S}} boceto ojapo haguã, agregá formas, ha {{ui:Editar}} cota cada uno-pe ha {{ui:Salir del boceto}} {{key:Tab}} ndive. Geometría eleccionar, relaciones térã cota nueva agregar, todavía clic térã toque ojerure esta versión-pe.
:::

## Límites

- Arco ndaikatúi escribirse ko'ẽrõ. Arco herramienta ndive dibujá, térã círculo escribí ha relaciones eipuru.
- Ndaiporiveí coordenadas relativas (último punto gotyo) térã polares (largo ha ángulo) ko casilla-pe.
- Geometría escrita ndoguatái punto ojoavape. Mismo coordenadas escribí punto ojoavape-gui, upe rire relación {{ui:• Coincidente}} ojuntar haguã, umi ojuntáva ojerure.
