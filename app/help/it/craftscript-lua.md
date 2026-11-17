---
title: Script in Lua
summary: Scrivere script dell'area di lavoro Script in Lua 5.4: la tabella cs delle funzioni integrate, array come valori con indicizzazione e aritmetica, l'area di lavoro condivisa ws, stampa e visualizzazione dei risultati, e ciò che è disattivato.
keywords: Lua, Lua 5.4, script, linguaggio, tabella cs, ws, area di lavoro, userdata, tensore, array, matrice, print, display, sandbox
from: 82c668b3
---

Lua è il secondo linguaggio dell'[area di lavoro Script](topic:craftscript). Scegliere **Lua** nella casella della lingua sopra l'editor (un file `.lua` si apre in Lua da solo). Lua e CraftScript condividono le stesse variabili e le stesse funzioni integrate, quindi uno script Lua può usare ciò che ha creato uno script CraftScript, e viceversa.

## Le basi

```
-- ogni funzione integrata è nella tabella cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- da 1, come in CraftScript
print(K(1, 1), #K)             -- un elemento; il numero di elementi

-- l'area di lavoro: le stesse variabili che vede ogni script
ws.total = K(1, 1) * 2
print(ws.total)

-- più risultati da una stessa funzione
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nome>(…)` chiama una qualsiasi funzione integrata e restituisce il suo primo risultato; `cs.call(nome, n, …)` restituisce `n` risultati.
- `cs.tensor({1, 2, 3})` crea una riga, `cs.tensor({{1, 2}, {3, 4}})` una matrice.
- Array, matrici sparse, mesh e campi sono valori con metodi: `t(i, j)` o `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (trasposta), `t:totable()`. `+ - * / ^` significano ciò che significano in CraftScript (`*` è il prodotto matriciale); `t:times(u)` moltiplica elemento per elemento.
- Un numero che è un array 1×1 arriva come semplice numero Lua.
- `ws.name` legge e scrive l'area di lavoro condivisa. Anche le variabili globali che lo script lascia alla fine finiscono lì quando termina.
- `print(…)` scrive sulla console; `cs.show(f)`, `cs.plot(y)` e le altre funzioni di visualizzazione funzionano come in CraftScript.

## Chiamare la libreria di analisi

Le funzioni della libreria di analisi (la scheda Libreria) e le funzioni CraftScript che definiscono gli script della parte si raggiungono anche tramite `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- due uscite
```

Vengono trovate prima che lo script parta, quindi scrivere il nome nello script: `cs.static_tet(` oppure `cs.call('static_tet', …)`. Un nome composto durante l'esecuzione dello script raggiunge solo le funzioni integrate. Una struct costruita con `cs.struct({ … })` è una struct CraftScript, e una lista Lua di queste (`{ cs.struct(…), … }`) è una cella, che è ciò che si aspettano le impostazioni della libreria. Se qualcosa va storto dentro una funzione della libreria, il messaggio indica la funzione e la sua riga, e rimanda alla riga dello script che l'ha chiamata.

## Disattivato

Gli script non possono raggiungere file, rete o la pagina: `io`, `os` (tranne l'orologio), `require`, `dofile`, `loadfile` e `debug` sono rimossi. Usare {{ui:Apri}} dell'area di lavoro Script e le variabili per portare dentro i dati. Il limite di passi e {{ui:Ferma}} funzionano come per CraftScript.
