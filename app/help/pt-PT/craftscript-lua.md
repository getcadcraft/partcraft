---
title: Scripts em Lua
summary: Escreva scripts da área de trabalho Script em Lua 5.4: a tabela cs de funções incorporadas, arrays como valores com indexação e aritmética, a área de trabalho partilhada ws, impressão e apresentação de resultados, e o que está desligado.
keywords: Lua, Lua 5.4, script, linguagem, tabela cs, ws, área de trabalho, userdata, tensor, array, matriz, print, display, sandbox
from: 82c668b3
---

Lua é a segunda linguagem da [área de trabalho Script](topic:craftscript). Escolha **Lua** na caixa de linguagem acima do editor (um ficheiro `.lua` abre em Lua automaticamente). Lua e CraftScript partilham as mesmas variáveis e as mesmas funções incorporadas, por isso um script Lua pode usar o que um script CraftScript criou, e vice-versa.

## O essencial

```
-- cada função incorporada está na tabela cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- a partir de 1, como no CraftScript
print(K(1, 1), #K)             -- um elemento; o número de elementos

-- a área de trabalho: as mesmas variáveis que todos os scripts veem
ws.total = K(1, 1) * 2
print(ws.total)

-- vários resultados de uma função
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` chama qualquer função incorporada e devolve o seu primeiro resultado; `cs.call(name, n, …)` devolve `n` resultados.
- `cs.tensor({1, 2, 3})` cria uma linha, `cs.tensor({{1, 2}, {3, 4}})` uma matriz.
- Arrays, matrizes esparsas, malhas e campos são valores com métodos: `t(i, j)` ou `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transposta), `t:totable()`. `+ - * / ^` significam o que significam no CraftScript (`*` é o produto de matrizes); `t:times(u)` multiplica elemento a elemento.
- Um número que é um array de 1×1 chega como um número Lua normal.
- `ws.name` lê e escreve a área de trabalho partilhada. As variáveis globais que o script deixa também vão para lá quando termina.
- `print(…)` escreve na consola; `cs.show(f)`, `cs.plot(y)` e as outras funções de visualização funcionam como no CraftScript.

## Chamar a biblioteca de análise

As funções da biblioteca de análise (separador Biblioteca) e as funções CraftScript que os scripts da sua peça definem também são acedidas através de `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- two outputs
```

São encontradas antes de o script começar, por isso escreva o nome no script: `cs.static_tet(` ou `cs.call('static_tet', …)`. Um nome montado enquanto o script corre só chega às funções incorporadas. Uma estrutura criada com `cs.struct({ … })` é uma estrutura CraftScript, e uma lista Lua delas (`{ cs.struct(…), … }`) é uma célula, que é o que as definições da biblioteca esperam. Se algo correr mal dentro de uma função da biblioteca, a mensagem indica a função e a sua linha, e aponta a linha do seu script que a chamou.

## Desligado

Os scripts não conseguem chegar a ficheiros, à rede nem à página: `io`, `os` (exceto o relógio), `require`, `dofile`, `loadfile` e `debug` são removidos. Use Abrir da área de trabalho Script e as variáveis para trazer dados. O limite de passos e Parar funcionam como no CraftScript.
