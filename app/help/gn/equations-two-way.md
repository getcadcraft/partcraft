---
title: Ecuaciones en ambas direcciones
summary: Peteĩ parámetro emoambue, pieza oñemoĩ; número conducido-pe tamaño emoĩ, PartCraft parámetro oipe'a, peteĩ mboyve ojemoambue ikatu jave ohenda.
keywords: ecuaciones, resolver hacia atrás, dimensión conducida, dos direcciones, inverso, buscar objetivo, parámetros, valores vinculados, qué parámetro
from: 82dc0269
---

Ecuación **Extrude1 profundidad = grosor + extra** ambas direcciones ojapo.

## Adelante: parámetro emoambue

**{{ui:Parámetros}}** pestaña-pe `grosor` 20 gui 30 emoambue. Extrude1 profundidad 30 + extra oñemoambue, pieza ojejapo.

## Atrás: conducido número emoambue

1. Historia-pe "Extrude1" eklikea. **Profundidad (mm)** caja **ƒ** ohechauka: ecuación conduce.
2. Tamaño emoĩ, ejemplo `40`, ha {{key:Enter}} eprensa.

PartCraft ecuación atrás parámetro ohechaséva, pasos ojeikoséva ojapo (`profundidad = altura_núcleo`, `altura_núcleo = espesor_disco + 50`: altura emoĩ jave `espesor_disco` oñemoambue). Barra de estado mba'e ojemoambue ohechauka, ejemplo extra 5 gui 15.

Número ojeporuhaʼe mboyve mokõi térã heta parámetro conducen jave, caja ohenda **¿Qué parámetro debe cambiar?** ha lista ohechauka. Peteĩ eklikea; ambue valor oñongatu. {{ui:Cancelar}} mba'e ndojemoambui.

Boceto-pe avei ojapo: conducido cota doble eklikea, valor emoĩ, {{key:Enter}} eprensa. Parámetro tabla **Valor** columna-pe avei, parámetro ecuación mismo jave.

## Mba'eve ndojapóiva

- Número entero oikotevẽva (patrón cantidad) térã rango-pe oikotevẽva (ángulo 360° peve) ojemoambue ántes refrenda.
- Número fijo ecuación (`=40`) ndaipóri parámetro emoambue: emoĩ número ndive oñemboguejy.
- Emoĩva valor ndaipóri parámetro ndive tamaño ombojoguáicha, barra de estado ohechauka ha ndojemoambuéi.
- Boceto valor pyahu ndive ndojejapói jave, valor ántes oñongatu, barra de estado boceto réra ohechauka.

Cambio mba'eichagua, mokõiicha, {{key:Mod+Z}} ha {{key:Mod+Y}} peteĩ paso.
