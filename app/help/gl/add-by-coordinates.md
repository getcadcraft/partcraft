---
title: Engadir xeometría ao esbozo escribindo coordenadas
summary: Use Engadir por coordenadas no panel do esbozo para colocar liñas, liñas de centro, rectángulos, círculos e puntos en posicións exactas, só co teclado.
keywords: coordenadas, entrada escrita, entrada por teclado, entrada numérica, posición exacta, x y, coordenadas absolutas, accesibilidade, sen rato
from: 5e6c1656
---

Cando coñece os números, escribilos é máis rápido que premer e acoutar. **Engadir por coordenadas** está no panel dereito sempre que hai un esbozo aberto. Tamén lle permite construír un esbozo sen ningún punteiro.

As coordenadas están en milímetros, nos eixos propios do esbozo: x cara á dereita e y cara arriba segundo o mira o esbozo, con (0, 0) na orixe (o círculo vermello cunha cruz).

## Engadir unha forma

1. Abra un esbozo (vexa [Debuxar o primeiro esbozo](topic:sketch-basics)).
2. No panel dereito, desprácese ata **Engadir por coordenadas**.
3. Escolla a forma en **Engadir**: Liña, Liña de centro, Rectángulo, Círculo ou Punto.
4. Complete as caixas:

| Forma | Caixas |
|---|---|
| Liña | **De x, y** e **A x, y** |
| Liña de centro | **De x, y** e **A x, y** |
| Rectángulo | **Esquina x, y** e **Esquina oposta x, y** |
| Círculo | **Centro x, y** e **Raio** |
| Punto | **En x, y** |

5. Escolla {{ui:Engadir}}, ou prema {{key:Enter}} en calquera caixa.

A forma aparece e a barra de estado di, por exemplo, « Engadiuse un rectángulo. » As caixas baleiranse, listas para a seguinte. Cada engadido é un paso para desfacer.

Escriba un par como dous números separados por unha coma ou un espazo: `0, 0`, `25 -10` ou `12.5,40`. Os números negativos e os decimais son válidos. Un raio ten que ser maior que cero. Se algo non se le como número, a barra de estado di: « Escriba as coordenadas como "x, y" e un raio maior que cero. »

## Exemplo: contorno dunha placa con ranura, escrito

1. Abra un esbozo sobre o **Plano frontal**.
2. **Engadir**: Rectángulo. **Esquina x, y**: `-50, -30`. **Esquina oposta x, y**: `50, 30`. {{key:Enter}}.
3. **Engadir**: Círculo. **Centro x, y**: `-30, 0`. **Raio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Raio**: `5`. {{key:Enter}}.
5. Escolla {{ui:Saír do esbozo}}, despois {{ui:Extruír}}: unha placa de 100 × 60 con dous buratos de 10 mm.

## A xeometría escrita colócase, pero non se fixa

As coordenadas escritas colocan a xeometría no lugar correcto, pero **non son relacións**. As formas quedan en azul (subdefinidas) e poden moverse se as arrastra ou se cambia outra cota:

- un rectángulo escrito trae as súas propias relacións de esquina, horizontais e verticais, como un debuxado, pero nada o une á orixe;
- unha liña escrita non ten relación horizontal ou vertical, aínda que escribise unha liña nivelada;
- o centro dun círculo escrito é libre.

Para deixar o esbozo totalmente definido, engada cotas e relacións despois (vexa [Definir por completo un esbozo](topic:relations-dimensions)). Por exemplo, seleccione unha esquina do rectángulo e a orixe e escolla {{ui:• Coincidente}}, ou acote os centros dos círculos desde a orixe.

:::note
Sen punteiro pode chegar ata aquí: mova ata unha fila de plano no historial con {{key:Tab}} e as teclas de frecha, prema {{key:Enter}} para seleccionala, prema {{key:S}} para facer un esbozo, engada formas aquí e chegue a **Editar** xunto a cada cota e a {{ui:Saír do esbozo}} con {{key:Tab}}. Seleccionar xeometría, e así engadir relacións ou cotas novas, aínda precisa un clic ou un toque nesta versión.
:::

## Limits

- Os arcos aínda non se poden escribir. Debúxeos coa ferramenta Arco, ou escriba un círculo e use relacións.
- Non hai coordenadas relativas (desde o último punto) nin polares (lonxitude e ángulo) nesta caixa.
- A xeometría escrita non se axusta aos puntos existentes. Escriba as mesmas coordenadas que un punto existente e engada despois unha relación {{ui:• Coincidente}} entre eles se teñen que quedar unidos.
