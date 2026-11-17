---
title: Scripts em Python
summary: Escreva scripts da área de trabalho Script em Python 3: o objeto cs de funções embutidas, arrays semelhantes ao numpy com indexação baseada em 0, a área de trabalho compartilhada, impressão, o que ainda não existe e como o Python é isolado, como o CraftScript e o Lua.
keywords: Python, Python 3, CPython, WebAssembly, isolado, seguro, script, linguagem, cs, ws, área de trabalho, numpy, array, matriz, indexação, print, display, confiança
from: 66eab56d
---

Python é a terceira linguagem da [área de trabalho Script](topic:craftscript). Escolha **Python** na caixa de linguagem acima do editor (um arquivo `.py` abre em Python automaticamente). Python, Lua e CraftScript compartilham as mesmas variáveis e as mesmas funções embutidas, então um script em Python pode usar o que um script em CraftScript criou, e o contrário também.

A primeira execução de Python em uma visita carrega o próprio Python (CPython 3.14, cerca de 7 MB) deste site, o que leva alguns segundos. O Python ainda não faz parte de {{ui:Salvar para uso offline}}: execute antes um script em Python enquanto estiver online.

## O Python é isolado

Os scripts em Python são isolados como os scripts em CraftScript e Lua: acessam a peça, as variáveis e as funções embutidas, e mais nada. Cada execução é um Python novo, em seu próprio ambiente isolado (sandbox), com uma pequena árvore de arquivos na memória (a biblioteca padrão e uma pasta `/tmp` que some após a execução). Ele não consegue acessar a rede, os seus arquivos nem o resto da página, tanto no navegador quanto na linha de comando. Um script de outra pessoa ainda pode consumir muito tempo ou memória: {{ui:Parar}} o encerra.

## O essencial

```
A = cs.magic(3)              # toda função embutida é cs.<nome>
B = A @ A.T                  # @ é o produto matricial, .T a transposta
C = A * 2 + 1                # + - * / ** são elemento a elemento, como no numpy
print(A[0, 1], A[-1, -1])    # baseado em 0; negativo conta a partir do fim
row = A[1]                   # um índice em uma matriz: uma linha
big = A[A > 4]               # uma máscara lógica escolhe elementos
A[0, 0] = -5                 # atribuindo em um array
V, D = cs.call('eig', 2, A)  # vários resultados: cs.call(nome, quantos, …)
```

- Um array de 1 × 1 chega como um número simples; os demais arrays, matrizes esparsas, malhas, campos e modelos são **Values**.
- Um Value tem `shape` (uma tupla), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (suas linhas), e `float()`, `int()` e `bool()` para um único elemento.
- As comparações (`<`, `==`, …) são elemento a elemento, como no numpy: produzem um Value lógico.
- Listas de números passadas a uma função embutida viram arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` cria uma matriz.
- Um dict vira um struct, e uma lista de itens misturados vira uma célula, e vice-versa.

Toda variável global que o seu script cria (um número, um Value, um dict, uma lista…) vai para a guia **Variáveis** quando a execução termina, mesmo após um erro. Nomes que começam com `_`, funções, classes e módulos ficam no Python. `ws.name` lê ou define uma variável diretamente, e `ws_names()` as lista.

`print(…)` escreve no console. `display(…)` (ou `cs.display`) mostra uma malha, um campo ou um gráfico, como no CraftScript.

## Chamar a biblioteca de análise

As funções da biblioteca são chamadas como as embutidas: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Escreva o nome no script exatamente como ele é: o PartCraft encontra as funções da biblioteca que um script usa antes de executá-lo.

## Ainda não disponível

- numpy, scipy e outros pacotes: aqui está disponível apenas a biblioteca padrão do próprio Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), sem as partes de janelas, terminal e banco de dados (`tkinter`, `curses`, `sqlite3`).
- Sockets e tudo o que alcançaria o exterior: aqui o Python não tem rede.
- `time.sleep` retorna imediatamente.
- Recolhimento de trechos no editor, e chamada de uma função Python a partir de um script em CraftScript.
- Uma execução verifica o limite de instruções e o Stop a cada 1000 linhas; um cálculo longo dentro de uma função embutida termina antes.
