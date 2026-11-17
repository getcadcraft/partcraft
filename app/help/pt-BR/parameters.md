---
title: Dirigir uma peça com parâmetros
summary: Dê nomes às medidas que importam (largura, espessura, tamanho do parafuso), ligue qualquer número de recurso ou cota de esboço a eles com =, e mude a peça inteira a partir de uma tabela.
keywords: parâmetros, onde é usado, usado por, variáveis globais, variáveis, equações, intenção de projeto, cotas dirigidas, ligação, expressão, fórmula, nomear uma cota, valores ligados
from: 58c646ea
---

Um parâmetro é um número com nome, como `width = 120` ou `margin = bolt * 1.5`. Ligue uma profundidade, um diâmetro de furo, uma contagem de matriz ou uma cota de esboço a ele, e mudar o parâmetro muda todos de uma vez. É assim que você mantém a intenção de projeto na peça, em vez de na sua cabeça.

## Adicionar parâmetros

1. No painel da direita, clique na aba {{ui:Parâmetros}}.
2. Em **Variáveis**, digite um nome na caixa "nome", por exemplo `width`.
3. Digite o valor na caixa seguinte, por exemplo `120`, e pressione {{key:Enter}} (ou clique em {{ui:Adicionar}}).

Um valor pode ser um número ou uma expressão de outros parâmetros: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. A coluna **Valor** mostra o resultado do cálculo. Um nome começa com uma letra ou `_` e tem só letras, dígitos e `_`; nomes de funções e de unidades (`sin`, `mm`, `pi`) são recusados, e também um laço como `a = b` com `b = a`.

## Ligar um número a um parâmetro

1. Clique em um recurso no histórico, por exemplo "Extrude1". Suas configurações aparecem na aba {{ui:Propriedades}}.
2. Em uma caixa de número, como **Profundidade (mm)**, digite `=` e uma expressão: `=thick` ou `=width / 4`.
3. Pressione {{key:Enter}}.

A caixa agora mostra o resultado, e um botão **ƒ** aparece ao lado do seu rótulo. Aponte para ele para ver a equação. Cotas de esboço funcionam do mesmo jeito, tanto na lista **Cotas do esboço** de um recurso quanto na caixa de cota de um esboço aberto (dê duplo clique em uma cota, digite `=width` e pressione {{key:Enter}}).

Números que você pode ligar: profundidade de extrusão, ângulo de revolução, diâmetro de furo, profundidade e medidas de rebaixo, contagem de matriz, espaçamento e ângulo, raio de arredondamento, distância de chanfro, espessura de parede de casca, cada cota de esboço, e as medidas dos recursos mais novos (segunda profundidade, afilamento, escareado, distância de plano de referência, ângulo de saída e outros).

## Alterar um parâmetro

Na aba {{ui:Parâmetros}}, digite um novo valor ou expressão na coluna **Expressão** e pressione {{key:Enter}}. Tudo o que está ligado a ele muda e a peça é reconstruída, como um único passo: {{key:Mod+Z}} desfaz.

Para alterar um número pela outra ponta, veja [Equações nos dois sentidos](topic:equations-two-way).

## Ver onde um parâmetro é usado

Sob cada parâmetro na aba {{ui:Parâmetros}}, uma linha diz o que o usa:

- os números que ele dirige, como **Extrude1 profundidade** ou **Sketch1 D2 (distância)**. Clique em um para selecionar seu recurso e mostrar suas propriedades;
- os números que ele dirige **através de** outros parâmetros, como **Hole1 diâmetro (através de h, d)** quando `d = h + 2` e `h = w / 2`;
- os **parâmetros** cujas expressões o usam, as **configurações** que o definem, e os **scripts** que o leem (veja [Escrever e executar scripts](topic:craftscript)).

"Ainda não usado." significa que nada o usa: você pode excluí-lo sem perguntar.

## Desvincular, renomear, excluir

- **Desvincular um número:** clique no botão **ƒ** dele, ou em {{ui:Desvincular}} na lista **Equações**. Ele mantém o valor atual e nenhum parâmetro o altera mais.
- **Renomear um parâmetro:** digite um novo nome na caixa **Nome**. Toda expressão que o usa é reescrita.
- **Excluir um parâmetro:** clique em × na sua linha. Se algo o usa, o PartCraft pergunta se deve escrever o valor atual nessas expressões antes.
- **Excluir um recurso** remove as equações dos seus números; a barra de status diz quais.

:::note
Parâmetros são salvos no arquivo `.partcraft.json` (como versão de arquivo 3). Uma peça sem parâmetros é salva exatamente como antes.
:::

## Expressões

| Escreva | Significa |
|---|---|
| `120`, `12.5`, `1e3` | um número (milímetros, ou graus para um ângulo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | um comprimento em outras unidades, convertido para milímetros |
| `30deg`, `0.5rad` | um ângulo, convertido para graus |
| `+ - * / %` e `^` | aritmética; `^` é uma potência, `-2^2` é −4 |
| `sin cos tan asin acos atan atan2` | trigonometria em graus |
| `sqrt pow exp ln log abs sign` | outras funções |
| `ceil floor int round(x, digits) min max` | arredondamento e limites |
| `if(test, a, b)` com `< <= > >= == !=` | uma escolha: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Os nomes diferenciam maiúsculas de minúsculas: `Width` e `width` são dois parâmetros.

Veja também [Configurações e tabelas de projeto](topic:design-tables) e [Scripts e linha de comando](topic:scripts-and-cli).
