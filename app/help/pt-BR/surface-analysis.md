---
title: Listras zebra e curvatura
summary: Verifique o quanto suavemente as faces de qualquer peça se unem, com listras zebra que seguem a vista ou um mapa de cores da curvatura média, no menu Vistas.
keywords: zebra, listras zebra, linhas de reflexão, curvatura, mapa de curvatura, curvatura média, qualidade de superfície, continuidade, tangente, g1, g2, suave, vinco, linhas de destaque
from: 78fed4c3
---

Duas visualizações rápidas de quão suaves são as faces de uma peça, em qualquer peça na área de trabalho Desenho (a área de trabalho Form tem a sua própria, para a forma que você está editando: veja [Formas livres com Form](topic:form-surfaces)).

## Listras zebra

Abra {{ui:Vistas}} e escolha {{ui:Listras zebra}}. A peça mostra o reflexo de uma luz listrada, como uma superfície polida mostraria:

- Onde duas faces se unem **tangencialmente** (um arredondamento numa face plana, uma superfície Gordon suave), as listras continuam através da união, com uma curvatura.
- Onde elas se encontram num **vinco**, as listras se quebram e saltam.
- Onde a curvatura também coincide (G2), as listras fluem sem nem mesmo uma quebra.

Gire a vista (arraste, ou uma face do cubo de vista): as listras são desenhadas de novo a partir da nova direção. **Listras** define quantas são.

## Curvatura

Escolha {{ui:Curvatura}} no mesmo menu. A peça é colorida pela sua **curvatura média**: azul onde é côncava, clara onde é plana, vermelha onde é convexa. O cartão informa em que curvatura as cores atingem a intensidade total, em 1/mm e como raio. Arestas vivas contam como muito curvas, por isso aparecem com força; observe as faces entre elas.

## O cartão

Ambas abrem o cartão de análise no canto inferior esquerdo da vista, que também contém a [análise de ângulo de saída](topic:draft-analysis). Alterne entre elas com **Mostrar**. Escolher de novo a que está aberta em {{ui:Vistas}}, {{ui:Fechar}} ou {{key:Esc}} a desliga. As cores acompanham a peça conforme você a altera; nada é salvo na peça.
