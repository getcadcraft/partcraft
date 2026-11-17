---
title: A linguagem CraftScript
summary: CraftScript em uma página: matrizes, intervalos e indexação, operadores, controle de fluxo, funções, structs e células, comentários, echo, erros e o limite de passos, e como ela difere do MATLAB.
keywords: CraftScript, linguagem, sintaxe, matriz, array, vetor, tensor, índice, end, dois-pontos, intervalo, operador, elemento a elemento, transposta, if, for, while, switch, try, catch, função, função anônima, struct, célula, comentário, echo, ponto e vírgula, MATLAB, Octave, portabilidade
from: d072b7d5
---

CraftScript é uma linguagem de matrizes escrita para ser lida como o MATLAB, por isso a maioria dos códigos numéricos clássicos (o código de otimização topológica de 88 linhas, por exemplo) roda com apenas pequenas mudanças. Ela roda na [área de trabalho Script](topic:craftscript) e na linha de comando.

## Valores

| Tipo | Exemplo | Observações |
|---|---|---|
| Número, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Todo número é um array (de 1×1). Arrays são armazenados coluna por coluna, com até 8 dimensões |
| Lógico | `A > 2`, `true` | Arrays de verdadeiro/falso; podem ser usados como índices |
| Texto | `'beam'`, `"beam"` | |
| Matriz esparsa | `sparse(i, j, v, n, n)` | Para matrizes de rigidez |
| Malha, campo, modelo | `hexGrid(…)`, `part()`, `load('part.stl')` | O que `show` desenha |
| Struct | `s.E = 210e3` | Campos nomeados |
| Célula | `c = {1, 'two', [3 4]}` | Uma lista de valores de qualquer tipo |
| Handle de função | `f = @(x) x.^2` | |

## Arrays e indexação

- Intervalos: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- A indexação começa em 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (uma coluna inteira), `A(:)` (tudo como uma única coluna), `v(v > 0)` (indexação lógica).
- Atribuir além do fim aumenta o array, como no MATLAB: `v(10) = 1`.

## Operadores

- `+ - * / \ ^` são operações matriciais (`A \ b` resolve); `.* ./ .^` funcionam elemento a elemento. `'` transpõe.
- Comparações `== ~= < <= > >=`; lógica `& | ~` (elemento a elemento) e `&& ||` (curto-circuito).

## Controle de fluxo e funções

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

As funções ficam em um script, depois dos seus comandos, ou na própria aba de script, com o nome da função:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Um nome é procurado nesta ordem: uma variável, um script desta peça com esse nome, uma função da biblioteca, uma função embutida.

## Echo, comentários, saída

- Uma instrução sem `;` exibe o seu valor; `;` a mantém em silêncio.
- `%` inicia um comentário; `%{` e `%}` em linhas próprias comentam as linhas entre elas.
- `disp(x)`, `fprintf('%g\n', x)` e `display(x)` imprimem no console.

## Erros e limites

- Os erros dizem o que deu errado em palavras simples e indicam a linha (e a cadeia de chamadas de função).
- Cada execução tem um limite de passos (Opções de execução no painel); um laço sem fim para com uma mensagem, ou pressione Stop.
- Cada array guarda até 134 milhões de valores.

## Diferenças em relação ao MATLAB

- Os comandos de gráfico colocam suas opções na chamada: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` e similares são aceitos e não fazem nada.
- `input` e `keyboard` não são suportados: um script não pode parar para fazer uma pergunta.
- Não há toolboxes; o que existe são a [biblioteca de análise](topic:craftscript-library) e as funções embutidas.
