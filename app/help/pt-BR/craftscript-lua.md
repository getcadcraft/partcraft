---
title: Scripts em Lua
summary: Escreva scripts da área de trabalho Script em Lua 5.4: a tabela cs de funções embutidas, arrays como valores com indexação e aritmética, a área de trabalho compartilhada ws, impressão e exibição de resultados, e o que está desativado.
keywords: Lua, Lua 5.4, script, linguagem, tabela cs, ws, área de trabalho, userdata, tensor, array, matriz, print, display, sandbox
from: 82c668b3
---

Lua é a segunda linguagem da [área de trabalho Script](topic:craftscript). Escolha **Lua** na caixa de linguagem acima do editor (um arquivo `.lua` abre em Lua automaticamente). Lua e CraftScript compartilham as mesmas variáveis e as mesmas funções embutidas, então um script em Lua pode usar o que um script em CraftScript criou, e o contrário também.

## O essencial

```
-- toda função embutida está na tabela cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- baseado em 1, como no CraftScript
print(K(1, 1), #K)             -- um elemento; o número de elementos

-- a área de trabalho: as mesmas variáveis que todo script vê
ws.total = K(1, 1) * 2
print(ws.total)

-- vários resultados de uma função
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` chama qualquer função embutida e devolve o primeiro resultado; `cs.call(name, n, …)` devolve `n` resultados.
- `cs.tensor({1, 2, 3})` cria uma linha, `cs.tensor({{1, 2}, {3, 4}})` cria uma matriz.
- Arrays, matrizes esparsas, malhas e campos são valores com métodos: `t(i, j)` ou `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transposta), `t:totable()`. `+ - * / ^` têm o mesmo significado que no CraftScript (`*` é o produto matricial); `t:times(u)` multiplica elemento a elemento.
- Um número que é um array de 1×1 chega como um número Lua simples.
- `ws.name` lê e grava a área de trabalho compartilhada. As variáveis globais que o seu script deixa também vão para lá quando ele termina.
- `print(…)` escreve no console; `cs.show(f)`, `cs.plot(y)` e as demais funções de exibição funcionam como no CraftScript.

## Chamar a biblioteca de análise

As funções da biblioteca de análise (a guia Biblioteca) e as funções em CraftScript que os scripts da sua peça definem também são acessadas por `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- duas saídas
```

Elas são encontradas antes de o script começar, por isso escreva o nome no script: `cs.static_tet(` ou `cs.call('static_tet', …)`. Um nome montado durante a execução do script alcança apenas as funções embutidas. Um struct criado com `cs.struct({ … })` é um struct do CraftScript, e uma lista em Lua deles (`{ cs.struct(…), … }`) é uma célula, que é o que as configurações da biblioteca esperam. Se algo der errado dentro de uma função da biblioteca, a mensagem informa a função e a linha dela e aponta a sua linha que a chamou.

## Desativado

Os scripts não podem acessar arquivos, a rede nem a página: `io`, `os` (exceto o relógio), `require`, `dofile`, `loadfile` e `debug` são removidos. Use a opção Abrir da área de trabalho Script e as variáveis para trazer dados. O limite de passos e o Stop funcionam como no CraftScript.
