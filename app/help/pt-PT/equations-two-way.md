---
title: Equações nos dois sentidos
summary: Altere um parâmetro e a peça acompanha; escreva um novo tamanho numa cota dependente e o PartCraft calcula o parâmetro por trás dela, perguntando qual quando vários podem mudar.
keywords: equações, resolver ao contrário, cota dependente, dois sentidos, inverso, procura de objetivo, parâmetros, valores ligados, que parâmetro
from: 82dc0269
---

Uma equação como **Extrude1 profundidade = thick + extra** funciona nos dois sentidos.

## Para a frente: alterar o parâmetro

No separador {{ui:Parâmetros}}, altere `thick` de 20 para 30. A profundidade de Extrude1 passa a ser 30 + extra, e a peça é reconstruída.

## Para trás: alterar a cota dependente

1. Clique em « Extrude1 » no histórico. A caixa **Profundidade (mm)** mostra **ƒ**: uma equação a controla.
2. Escreva o tamanho que quer, por exemplo `40`, e prima {{key:Enter}}.

O PartCraft resolve o parâmetro por trás da equação, em quantos passos forem precisos (`depth = hub_h`, `hub_h = disc_t + 50`: escrever uma altura altera `disc_t`). A barra de estado indica o que mudou, por exemplo que extra passou de 5 para 15.

Quando dois ou mais parâmetros controlam o número, uma caixa pergunta **Que parâmetro deve mudar?** e lista-os. Clique num; os outros mantêm os seus valores. {{ui:Cancelar}} não altera nada.

O mesmo funciona num esboço: faça duplo clique numa cota dependente, escreva um valor e prima {{key:Enter}}. Funciona também na coluna **Valor** da tabela de parâmetros, para um parâmetro que é ele próprio uma expressão.

## Quando não é possível

- Um número que tem de ser inteiro (uma contagem de matriz) ou que tem de ficar dentro de um intervalo (um ângulo até 360°) é recusado antes de qualquer alteração.
- Uma equação só com números fixos (`=40`) não tem parâmetro a alterar: o número que escrever substitui-a.
- Se nenhum valor do parâmetro der o tamanho escrito, a barra de estado diz isso e nada muda.
- Um esboço que não possa ser resolvido com o novo valor mantém os valores anteriores, e a barra de estado indica o esboço.

Cada alteração, em qualquer dos sentidos, é um passo de {{key:Mod+Z}} e {{key:Mod+Y}}.
