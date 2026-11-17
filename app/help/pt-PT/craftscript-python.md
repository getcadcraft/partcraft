---
title: Scripts em Python
summary: Escreva scripts da área de trabalho Script em Python 3: o objeto cs de funções incorporadas, arrays como valores tipo numpy com indexação a partir de 0, a área de trabalho partilhada, impressão, o que ainda não existe, e como o Python está isolado, tal como o CraftScript e o Lua.
keywords: Python, Python 3, CPython, WebAssembly, isolado, seguro, script, linguagem, cs, ws, área de trabalho, numpy, array, matriz, indexação, print, display, confiança
from: 66eab56d
---

Python é a terceira linguagem da [área de trabalho Script](topic:craftscript). Escolha **Python** na caixa de linguagem acima do editor (um ficheiro `.py` abre em Python automaticamente). Python, Lua e CraftScript partilham as mesmas variáveis e as mesmas funções incorporadas, por isso um script Python pode usar o que um script CraftScript criou, e vice-versa.

A primeira execução de Python numa visita carrega o próprio Python (CPython 3.14, cerca de 7 MB) a partir deste site, o que leva alguns segundos. Python ainda não faz parte de {{ui:Guardar para offline}}: execute primeiro um script Python estando com ligação.

## Python está isolado

Os scripts Python estão isolados, tal como os scripts CraftScript e Lua: chegam à peça, às variáveis e às funções incorporadas, e nada mais. Cada execução é um interpretador Python novo, num próprio sandbox, com uma pequena árvore de ficheiros em memória (a sua biblioteca padrão e uma pasta `/tmp` que desaparece após a execução). Não consegue chegar à rede, aos seus ficheiros nem ao resto da página, tanto no navegador como na linha de comandos. Um script de outra pessoa pode ainda usar muito tempo ou memória: {{ui:Parar}} termina-o.

## O essencial

```
A = cs.magic(3)              # cada função incorporada é cs.<name>
B = A @ A.T                  # @ é o produto de matrizes, .T a transposta
C = A * 2 + 1                # + - * / ** são elemento a elemento, como no numpy
print(A[0, 1], A[-1, -1])    # a partir de 0; negativos contam a partir do fim
row = A[1]                   # um índice numa matriz: uma linha
big = A[A > 4]               # uma máscara lógica escolhe elementos
A[0, 0] = -5                 # atribuir num array
V, D = cs.call('eig', 2, A)  # vários resultados: cs.call(nome, quantos, …)
```

- Um array de 1 × 1 chega como um número simples; outros arrays, matrizes esparsas, malhas, campos e modelos são **Valores**.
- Um Valor tem `shape` (um tuplo), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (as suas linhas), e `float()`, `int()` e `bool()` para um único elemento.
- As comparações (`<`, `==`, …) são elemento a elemento, como no numpy: dão um Valor lógico.
- Listas de números passadas a uma função incorporada tornam-se arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` cria uma matriz.
- Um dicionário torna-se uma estrutura e uma lista de coisas mistas uma célula, e vice-versa.

Toda a variável global que o script cria (um número, um Valor, um dicionário, uma lista…) vai para o separador **Variáveis** quando a execução termina, mesmo após um erro. Nomes que começam por `_`, funções, classes e módulos ficam em Python. `ws.name` lê ou define uma variável diretamente, e `ws_names()` lista-as.

`print(…)` escreve na consola. `display(…)` (ou `cs.display`) mostra uma malha, um campo ou um gráfico, como no CraftScript.

## Chamar a biblioteca de análise

As funções da biblioteca chamam-se como as incorporadas: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Escreva o nome no script tal como é: o PartCraft encontra as funções da biblioteca que um script usa antes de ele correr.

## Ainda não existe

- numpy, scipy e outros pacotes: só a biblioteca padrão do próprio Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) está aqui, sem as suas partes de janelas, terminal e bases de dados (`tkinter`, `curses`, `sqlite3`).
- Sockets e tudo o que chegue ao exterior: o Python não tem rede aqui.
- `time.sleep` devolve logo.
- Dobragem no editor, e chamar uma função Python a partir de um script CraftScript.
- Uma execução verifica o orçamento de instruções e Parar a cada 1000 linhas; um cálculo longo dentro de uma função incorporada termina primeiro.
