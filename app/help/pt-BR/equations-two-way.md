---
title: Equações nos dois sentidos
summary: Altere um parâmetro e a peça acompanha; digite um novo tamanho em um número dirigido e o PartCraft calcula o parâmetro por trás dele, perguntando qual quando vários podem mudar.
keywords: equações, resolver para trás, cota dirigida, dois sentidos, reverso, busca de meta, parâmetros, valores vinculados, qual parâmetro
from: 82dc0269
---

Uma equação como **Extrude1 depth = thick + extra** funciona nos dois sentidos.

## Para frente: altere o parâmetro

Na guia {{ui:Parâmetros}}, altere `thick` de 20 para 30. A profundidade de Extrude1 passa a ser 30 + extra, e a peça é reconstruída.

## Para trás: altere o número dirigido

1. Clique em "Extrude1" no histórico. A caixa **Profundidade (mm)** mostra **ƒ**: uma equação a controla.
2. Digite a medida desejada, por exemplo `40`, e pressione {{key:Enter}}.

A PartCraft resolve o parâmetro por trás da equação, por quantas etapas forem necessárias (`depth = hub_h`, `hub_h = disc_t + 50`: digitar uma altura altera `disc_t`). A barra de status informa o que mudou, por exemplo que extra passou de 5 para 15.

Quando dois ou mais parâmetros controlam o número, uma caixa pergunta **Qual parâmetro deve mudar?** e lista-os. Clique em um; os outros mantêm os seus valores. {{ui:Cancelar}} não altera nada.

O mesmo vale em um esboço: clique duas vezes em uma cota dirigida, digite um valor e pressione {{key:Enter}}. Também funciona na coluna **Valor** da tabela de parâmetros, para um parâmetro que é ele mesmo uma expressão.

## Quando não é possível

- Um número que precisa ser inteiro (a contagem de uma matriz) ou ficar dentro de uma faixa (um ângulo até 360°) é recusado antes de qualquer alteração.
- Uma equação só com números fixos (`=40`) não tem parâmetro a alterar: o número que você digitar a substitui.
- Se nenhum valor do parâmetro produz a medida digitada, a barra de status informa isso e nada muda.
- Um esboço que não pode ser resolvido com o novo valor mantém os valores anteriores, e a barra de status indica o esboço.

Cada alteração, em qualquer sentido, é uma etapa para {{key:Mod+Z}} e {{key:Mod+Y}}.
