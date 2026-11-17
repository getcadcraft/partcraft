---
title: Ecuacións en ambos sentidos
summary: Cambie un parámetro e a peza segue; escriba un novo tamaño nun número dirixido e PartCraft calcula o parámetro que está detrás, preguntando cal cando varios poderían cambiar.
keywords: ecuacións, resolver cara atrás, cota dirixida, bidireccional, inverso, buscar obxectivo, parámetros, valores ligados, cal parámetro
from: 82dc0269
---

Unha ecuación como **Extrude1 depth = thick + extra** funciona en ambos sentidos.

## Cara adiante: cambiar o parámetro

Na lapela {{ui:Parámetros}}, cambie `thick` de 20 a 30. A profundidade de Extrude1 pasa a ser 30 + extra, e a peza reconstrúese.

## Cara atrás: cambiar o número dirixido

1. Faga clic en «Extrude1» no historial. A súa caixa **Profundidade (mm)** mostra **ƒ**: unha ecuación dirixe o valor.
2. Escriba o tamaño que quere, por exemplo `40`, e prema {{key:Enter}}.

PartCraft resolve o parámetro que está detrás da ecuación, en tantos pasos como faga falta (`depth = hub_h`, `hub_h = disc_t + 50`: escribir unha altura cambia `disc_t`). A barra de estado indica o que cambiou, por exemplo que extra pasou de 5 a 15.

Cando dous ou máis parámetros dirixen o número, unha caixa pregunta **«Que parámetro debería cambiar?»** e enumérao. Faga clic nun; os outros conservan os seus valores. {{ui:Cancelar}} non cambia nada.

O mesmo funciona nun esbozo: faga dobre clic nunha cota dirixida, escriba un valor e prema {{key:Enter}}. Tamén funciona na columna **Valor** da táboa de parámetros, para un parámetro que é en si mesmo unha expresión.

## Cando non pode

- Un número que debe ser enteiro (un número de elementos dun patrón) ou que debe quedar dentro dun rango (un ángulo ata 360°) rexéitase antes de que cambie nada.
- Unha ecuación só de números fixos (`=40`) non ten parámetro que cambiar: o número que escriba substitúe a ecuación.
- Se ningún valor do parámetro dá o tamaño que escribiu, a barra de estado di iso e non cambia nada.
- Un esbozo que non se pode resolver co novo valor conserva os seus valores anteriores, e a barra de estado nomea o esbozo.

Cada cambio, nun sentido ou noutro, é un paso para {{key:Mod+Z}} e {{key:Mod+Y}}.
