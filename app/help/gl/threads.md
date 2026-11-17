---
title: Roscas en eixos e furos, debuxadas ou modeladas
summary: Poña unha rosca métrica ISO ou trapezoidal en calquera cara redonda, nun eixo ou un furo. Manteña a rosca cosmética para os debuxos, ou modele a rosca helicoidal real para a impresión 3D, cunha folgura para que as pezas impresas encaixen.
keywords: rosca, roscas, rosca modelada, helicoidal, hélice, parafuso, perno, porca, eixo, furo, rosca exterior, rosca interior, rosca cosmética, rosca métrica, trapezoidal, acme, parafuso de avance, Tr16x4, M10, impresión 3D, imprimir, folgura, axuste, rosca á esquerda, roscado
from: 4f6401cc
---

{{ui:Rosca}} pon unha rosca nas caras redondas: o exterior dun eixo (rosca exterior) ou o interior dun furo (rosca interior). PartCraft distingue cal é pola cara.

Ao principio unha rosca é **cosmética**: a cara queda lisa, a vista debuxa a rosca con círculos de trazos e a folla de debuxo anótaa, por exemplo «M10×1.5 - 6g, rosca de lonxitude 20». Marque **Modelada** para cortar a rosca helicoidal real na peza, para a impresión 3D ou para un modelo que deba ter bo aspecto.

## Facer rosca nun eixo ou un furo

1. Cree o eixo ou o furo co tamaño da rosca: un eixo de Ø10 para un perno M10, ou un furo de Ø8,5 (a broca de roscar) para unha porca M10.
2. Prema na cara redonda e escolla {{ui:Máis}} › {{ui:Rosca}}. Sen ningunha cara redonda seleccionada, PartCraft pídelle que prema nas caras e despois en {{ui:Feito}}.
3. No panel dereito, comprobe o **Tamaño**. **Axustar á cara** escolle o tamaño por si mesmo: para un eixo, o tamaño cuxo diámetro maior é o do eixo; para un furo, o tamaño cuxo diámetro menor encaixa nel.

A rosca comeza no extremo aberto da cara, onde a peza non continúa ao longo do eixe: o extremo libre dun eixo, a boca dun furo. **Comezar no outro extremo** inverte iso.

## Opcións

| Opción | Escollas | Predeterminado |
|---|---|---|
| **Forma** | Métrica ISO (60°), M1.6 a M64 de paso groso; trapezoidal (Tr, 30°), Tr8×1.5 a Tr60×9 | Métrica ISO |
| **Tamaño** | Axustar á cara, ou un tamaño da lista | Axustar á cara |
| **Toda a cara** | Desmarque para indicar unha **Lonxitude (mm)**, medida desde o inicio | Marcado |
| **Comezar no outro extremo** | A rosca vai desde o outro extremo da cara | Desactivado |
| **Sentido** | Dereita ou esquerda | Dereita |
| **Modelada** | Cortar a rosca helicoidal real | Desactivado |
| **Folgura (mm)** | Móstrase cando Modelada está marcada: canto máis pequena é a rosca dun eixo, e canto máis grande a dun furo, en todo o contorno | 0,1 |

Un tamaño que non encaixa na cara constrúese igualmente, recortado á cara, e o panel indícao, por exemplo «Un eixo de Ø12 mm non é o Ø10 mm de M10». Varias caras poden compartir un mesmo elemento de Rosca; con **Axustar á cara**, cada unha ten o seu propio tamaño.

## Roscas modeladas para a impresión 3D

Unha rosca modelada segue o perfil básico estándar: ISO 68-1 para as roscas métricas (crestas e fondos planos, flancos de 60°), ISO 2901 para as trapezoidais (flancos de 30°). A **Folgura** move todo o perfil cara a dentro (eixo) ou cara a fóra (furo), para que as pezas impresas se atornillen:

- **0,1 a 0,2 mm** serve para a maioría das impresoras. Imprima primeiro un perno e unha porca de proba.
- **0** é o perfil estándar, para pezas mecanizadas ou para comprobar un axuste.

Un perno e unha porca coa mesma folgura non tocan nunca polos seus flancos: a distancia entre eles é o dobre da folgura, en todo o contorno.

:::tip
Os pasos finos imprímense mal: M3 e menores, ou un paso inferior a 0,5 mm, están preto do que pode debuxar unha boquilla de 0,4 mm. Modele roscas máis grandes e use un inserto termoxustable ou un furo roscado para as pequenas.
:::

Unha rosca modelada forma parte do sólido: as exportacións STL, 3MF e STEP inclúena, e Medir mídea. Fai que a peza sexa máis pesada de recalcular: unha rosca M10 de lonxitude 20 ten uns 150 000 triángulos.

## Furos roscados

Un furo **Roscado (ISO métrica)** tamén ten un interruptor **Modelada**, coa mesma **Folgura**. Vexa [Furar e rebaixar en puntos de esbozo](topic:holes).

## Cando unha rosca non se constrúe

- «Unha rosca vai nunha cara redonda (un cilindro): un eixo ou un furo.» A cara seleccionada é plana ou curva dalgún outro xeito.
- «Ningún tamaño normalizado encaixa nunha cara redonda de Ø0,6 mm: escolla un tamaño.» **Axustar á cara** non atopou nada a menos do 12 % da cara. Escolla un **Tamaño**, ou cambie a cara.
- «Desapareceu a cara na que estaba esta rosca (…). Seleccione de novo.» Un cambio anterior eliminou a cara. Prema en {{ui:Seleccionar caras}} e prema de novo na cara.

:::note
As roscas en polgadas (UNC, UNF), as roscas de tubaxe, as roscas cónicas, as saídas de rosca e os inicios de rosca con chafrán aínda non están construídos. O núcleo exacto mostra unha rosca modelada como cosmética.
:::
