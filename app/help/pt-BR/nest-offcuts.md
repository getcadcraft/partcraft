---
title: Guardar e reutilizar sobras
summary: Depois de um encaixe, o que sobra de cada chapa vira um retalho numerado em uma lista de estoque; o próximo encaixe usa primeiro os retalhos e depois as chapas inteiras.
keywords: encaixe, sobra, retalho, estoque, chapa, reutilizar, material, espessura, CSV
from: 7a68d4b8
---

Ao encaixar peças em chapas, a sobra útil de cada chapa (sem lascas) pode ser guardada como um **retalho**: um contorno numerado (R-0001, R-0002 …) com o material, a espessura, o tamanho e o trabalho de origem. A lista é salva com o arquivo e pode ser salva como CSV.

## Usar de novo

Informe o **material** e a **espessura**, deixe {{ui:Usar retalhos primeiro}} ligado e encaixe. Retalhos do mesmo material e da mesma espessura são testados do menor para o maior; as peças que cabem vão para eles, dentro do próprio contorno do retalho e longe da borda; o que não cabe vai para chapas novas. O relatório do trabalho diz quais retalhos foram usados e o que sobrou. Com {{ui:Guardar as sobras como retalhos}} ligado, {{ui:Adicionar este trabalho ao estoque}} grava isso na lista de estoque: um retalho usado fica marcado como **Usado** (com o trabalho) e não é oferecido de novo; o que sobrou dele vira um novo retalho que registra o retalho de origem.

## O que conta como retalho

A sobra é medida com o espaçamento que você definiu (nenhuma peça fica mais perto do que isso de um corte). Tiras mais estreitas que um vigésimo da chapa e pedaços menores que 2 % dela são sucata; altere os dois limites se sua oficina guarda peças menores. Furos dentro das peças são das próprias peças e não são guardados. Um rolo não tem retalhos.

## No desenho

O DXF de um encaixe desenha o contorno de cada retalho na camada REMNANTS, com o número no centro, para que as peças possam ser marcadas quando forem cortadas.

Ainda não implementado: direção do grão de um retalho, uma folha de código de barras ou de etiquetas, retalhos de rolos, estoque compartilhado entre projetos.
