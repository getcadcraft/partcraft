---
title: Guardar e reutilizar sobras
summary: Depois de um nesting, o que sobra de cada chapa torna-se uma sobra numerada numa lista de stock; o nesting seguinte usa primeiro as sobras e depois as chapas inteiras.
keywords: nesting, sobra, sobras, stock, resto, chapa, reutilizar, material, espessura, CSV
from: 7a68d4b8
---

Quando dispõe peças em chapas, o que sobra utilizável de cada chapa (sem lascas) pode ser guardado como **sobra**: um contorno numerado (R-0001, R-0002 …) com o material, a espessura, as dimensões e o trabalho de origem. A lista fica guardada com o ficheiro e pode ser guardada como CSV.

## Reutilizar

Indique o **material** e a **espessura**, deixe {{ui:Usar primeiro as sobras}} ligado, e faça o nesting. As sobras do mesmo material e espessura são experimentadas da menor para a maior; as peças que cabem vão para elas, dentro do próprio contorno da sobra e afastadas do seu bordo; o que não cabe vai para chapas novas. O relatório do trabalho indica as sobras usadas e o que ficou. Com {{ui:Guardar o que sobra como sobras}} ligado, {{ui:Adicionar este trabalho ao stock}} escreve-o então na lista de stock: uma sobra usada fica marcada como **Usada** (com o trabalho) e não volta a ser oferecida; o que dela sobra torna-se uma nova sobra que se lembra da sua origem.

## O que conta como sobra

O que sobra é medido com o espaçamento que definiu (nenhuma peça fica mais perto disso de um corte). As tiras mais estreitas do que um vigésimo da chapa e as peças menores do que 2 % dela são sucata; altere os dois limites se a sua oficina aproveita peças menores. Os furos dentro das peças pertencem às peças e não são guardados. Um rolo não tem sobras.

## No desenho

O DXF de um nesting desenha o contorno de cada sobra na camada REMNANTS, com o seu número ao centro, para que as peças possam ser marcadas quando forem cortadas.

Ainda não implementado: direção do fio de uma sobra, folha de códigos de barras ou etiquetas, sobras de rolos, stock partilhado entre projetos.
