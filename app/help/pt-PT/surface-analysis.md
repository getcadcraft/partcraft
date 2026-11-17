---
title: Faixas zebra e curvatura
summary: Verifique a suavidade com que as faces de qualquer peça se unem, com faixas zebra que seguem a vista ou um mapa de cores da curvatura média, a partir do menu Vistas.
keywords: zebra, faixas zebra, linhas de reflexão, curvatura, mapa de curvatura, curvatura média, qualidade de superfície, continuidade, tangente, g1, g2, suave, vinco, linhas de realce
from: 78fed4c3
---

Duas vistas rápidas sobre a suavidade das faces de uma peça, em qualquer peça no espaço de trabalho Desenho (o espaço Form tem o seu próprio, para a forma que está a editar: ver [Formas livres com Form](topic:form-surfaces)).

## Faixas zebra

Abra {{ui:Vistas}} e escolha {{ui:Faixas zebra}}. A peça mostra o reflexo de uma luz listrada, como faria uma superfície polida:

- Onde duas faces se unem **tangencialmente** (um boleado numa face plana, uma superfície Gordon suave), as faixas continuam através da união, com uma inflexão.
- Onde se encontram num **vinco**, as faixas quebram e saltam.
- Onde a curvatura também coincide (G2), as faixas fluem sem sequer uma inflexão.

Rode a vista (arrastando, ou com uma face do cubo de vistas): as faixas são desenhadas de novo a partir da nova direção. **Faixas** define quantas existem.

## Curvatura

Escolha {{ui:Curvatura}} no mesmo menu. A peça é colorida pela sua **curvatura média**: azul onde é côncava, clara onde é plana, vermelha onde é convexa. O cartão indica a que curvatura as cores atingem a intensidade total, em 1/mm e como raio. As arestas vivas contam como muito curvas, por isso aparecem com força; observe as faces entre elas.

## O cartão

Ambas abrem o cartão de análise no canto inferior esquerdo da vista, que também contém a [análise de saída](topic:draft-analysis). Alterne entre elas com **Mostrar**. Escolher de novo a que está aberta em {{ui:Vistas}}, {{ui:Fechar}} ou {{ui:Esc}} desliga-a. As cores acompanham a peça à medida que a altera; nada é guardado na peça.
