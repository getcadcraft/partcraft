---
title: A linguagem CraftScript
summary: O CraftScript numa página: matrizes, intervalos e indexação, operadores, controlo de fluxo, funções, estruturas e células, comentários, eco, erros e o limite de passos, e em que difere do MATLAB.
keywords: CraftScript, linguagem, sintaxe, matriz, array, vetor, tensor, índice, end, dois-pontos, intervalo, operador, elemento a elemento, transposta, if, for, while, switch, try, catch, função, função anónima, estrutura, célula, comentário, eco, ponto e vírgula, MATLAB, Octave, portar
from: d072b7d5
---

CraftScript é uma linguagem de matrizes escrita para se ler como o MATLAB, pelo que a maioria dos códigos numéricos clássicos (o código de otimização topológica de 88 linhas, por exemplo) corre com apenas pequenas alterações. Corre na [área de trabalho Script](topic:craftscript) e a partir da linha de comandos.

## Valores

| Tipo | Exemplo | Notas |
|---|---|---|
| Número, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Todo o número é um array (de 1×1). Os arrays são guardados coluna a coluna, até 8 dimensões |
| Lógico | `A > 2`, `true` | Arrays de verdadeiro/falso; utilizáveis como índices |
| Texto | `'beam'`, `"beam"` | |
| Matriz esparsa | `sparse(i, j, v, n, n)` | Para matrizes de rigidez |
| Malha, campo, modelo | `hexGrid(…)`, `part()`, `load('part.stl')` | O que `show` desenha |
| Estrutura | `s.E = 210e3` | Campos com nome |
| Célula | `c = {1, 'two', [3 4]}` | Uma lista de valores de qualquer tipo |
| Referência de função | `f = @(x) x.^2` | |

## Arrays e indexação

- Intervalos: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- A indexação começa em 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (uma coluna inteira), `A(:)` (tudo como uma só coluna), `v(v > 0)` (indexação lógica).
- Atribuir além do fim aumenta o array, como no MATLAB: `v(10) = 1`.

## Operadores

- `+ - * / \ ^` são operações de matrizes (`A \ b` resolve); `.* ./ .^` funcionam elemento a elemento. `'` transpõe.
- Comparações `== ~= < <= > >=`; lógica `& | ~` (elemento a elemento) e `&& ||` (com curto-circuito).

## Controlo de fluxo e funções

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

As funções vão num script depois dos seus comandos, ou no seu próprio separador de script com o nome da função:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Um nome é procurado por esta ordem: uma variável, um script nesta peça com esse nome, uma função da biblioteca, uma função incorporada.

## Eco, comentários, saída

- Uma instrução sem `;` mostra o seu valor; `;` mantém-na em silêncio.
- `%` inicia um comentário; `%{` e `%}` em linhas próprias comentam as linhas entre elas.
- `disp(x)`, `fprintf('%g\n', x)` e `display(x)` escrevem na consola.

## Erros e limites

- Os erros dizem o que correu mal em palavras simples e indicam a linha (e a cadeia de chamadas de funções).
- Cada execução tem um orçamento de passos (Opções de execução no painel); um ciclo sem fim para com uma mensagem, ou prima {{ui:Parar}}.
- Os arrays guardam até 134 milhões de valores cada um.

## Diferenças em relação ao MATLAB

- Os comandos de gráfico põem as opções na chamada: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` e semelhantes são aceites e não fazem nada.
- `input` e `keyboard` não são suportados: um script não pode parar para fazer uma pergunta.
- Não existem conjuntos de ferramentas adicionais; a [biblioteca de análise](topic:craftscript-library) e as funções incorporadas são o que existe.
