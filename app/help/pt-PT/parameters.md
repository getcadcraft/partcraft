---
title: Controlar uma peça com parâmetros
summary: Dê nome às dimensões que importam (largura, espessura, tamanho do parafuso), ligue qualquer número de operação ou cota de esboço a elas com =, e altere a peça inteira a partir de uma só tabela.
keywords: parâmetros, onde é usado, usado por, variáveis globais, variáveis, equações, intenção de projeto, cotas acionadoras, ligação, expressão, fórmula, dar nome a uma cota, valores ligados
from: 58c646ea
---

Um parâmetro é um número com nome, como `width = 120` ou `margin = bolt * 1.5`. Ligue uma profundidade, o diâmetro de um furo, o número de uma matriz ou uma cota de esboço a ele, e alterar o parâmetro altera todos num só passo. É assim que a intenção de projeto fica na peça e não na sua cabeça.

## Acrescentar parâmetros

1. No painel da direita, clique no separador {{ui:Parâmetros}}.
2. Em **Variáveis**, escreva um nome na caixa "nome", por exemplo `width`.
3. Escreva o seu valor na caixa seguinte, por exemplo `120`, e prima {{key:Enter}} (ou clique em {{ui:Adicionar}}).

Um valor pode ser um número ou uma expressão de outros parâmetros: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. A coluna **Valor** mostra o resultado do cálculo. Um nome começa por uma letra ou `_` e tem apenas letras, algarismos e `_`; nomes de funções e unidades (`sin`, `mm`, `pi`) são recusados, e também um ciclo como `a = b` com `b = a`.

## Ligar um número a um parâmetro

1. Clique numa operação no histórico, por exemplo "Extrude1". As suas definições aparecem no separador {{ui:Propriedades}}.
2. Numa caixa de número, como **Profundidade (mm)**, escreva `=` e uma expressão: `=thick` ou `=width / 4`.
3. Prima {{key:Enter}}.

A caixa passa a mostrar o resultado, e aparece um botão **ƒ** ao lado da etiqueta. Aponte para ele para ver a equação. As cotas de esboço funcionam da mesma forma, tanto na lista **Cotas do esboço** de uma operação como na caixa de cota de um esboço aberto (faça duplo clique numa cota, escreva `=width` e prima {{key:Enter}}).

Números que pode ligar: profundidade de extrusão, ângulo de revolução, diâmetro de furo, profundidade e dimensões de escareado, número de uma matriz, espaçamento e ângulo, raio de boleado, distância de chanfro, espessura de parede de casca, cada cota de esboço, e as dimensões das operações mais recentes (segunda profundidade, conicidade, contrafuro, distância de um plano de referência, ângulo de saída e outras).

## Alterar um parâmetro

No separador {{ui:Parâmetros}}, escreva um novo valor ou expressão na coluna **Expressão** e prima {{key:Enter}}. Tudo o que está ligado a ele muda e a peça é reconstruída, num só passo: {{key:Mod+Z}} desfaz.

Para alterar um número a partir do outro lado, veja [Equações nos dois sentidos](topic:equations-two-way).

## Ver onde um parâmetro é usado

Sob cada parâmetro no separador {{ui:Parâmetros}}, uma linha indica o que o usa:

- os números que ele controla, como **Extrude1 depth** ou **Sketch1 D2 (distance)**. Clique num para selecionar a sua operação e mostrar as suas propriedades;
- os números que ele controla **através** de outros parâmetros, como **Hole1 diameter (through h, d)** quando `d = h + 2` e `h = w / 2`;
- os **parâmetros** cujas expressões o usam, as **configurações** que o definem, e os **scripts** que o leem (ver [Escrever e executar scripts](topic:craftscript)).

"Ainda não usado." significa que nada o usa: pode eliminá-lo sem pedir confirmação.

## Desligar, mudar o nome, eliminar

- **Desligar um número:** clique no seu botão **ƒ**, ou em {{ui:Desligar}} na lista **Equações**. Mantém o valor atual e nenhum parâmetro o altera mais.
- **Mudar o nome de um parâmetro:** escreva um novo nome na sua caixa **Nome**. Cada expressão que o usa é reescrita.
- **Eliminar um parâmetro:** clique em × na sua linha. Se algo o usar, a PartCraft pergunta se deve escrever primeiro o seu valor atual nessas expressões.
- **Eliminar uma operação** remove as equações dos seus números; a barra de estado indica quais.

:::note
Os parâmetros são guardados no ficheiro `.partcraft.json` (como versão 3 do ficheiro). Uma peça sem parâmetros é guardada exatamente como antes.
:::

## Expressões

| Escrever | Significa |
|---|---|
| `120`, `12.5`, `1e3` | um número (milímetros, ou graus para um ângulo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | um comprimento noutras unidades, convertido para milímetros |
| `30deg`, `0.5rad` | um ângulo, convertido para graus |
| `+ - * / %` e `^` | aritmética; `^` é uma potência, `-2^2` é −4 |
| `sin cos tan asin acos atan atan2` | trigonometria em graus |
| `sqrt pow exp ln log abs sign` | outras funções |
| `ceil floor int round(x, digits) min max` | arredondamentos e limites |
| `if(test, a, b)` com `< <= > >= == !=` | uma escolha: `if(bolt >= 16, 6, 8)` |
| `pi` | 3,14159… |

Os nomes diferenciam maiúsculas de minúsculas: `Width` e `width` são dois parâmetros.

Ver também [Configurações e tabelas de desenho](topic:design-tables) e [Scripts e linha de comandos](topic:scripts-and-cli).
