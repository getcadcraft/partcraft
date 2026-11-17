---
title: Skripty v Lua
summary: Psaní skriptů pracovního prostoru Skript v Lua 5.4: tabulka cs s vestavěnými funkcemi, pole jako hodnoty s indexováním a aritmetikou, sdílený prostor ws, tisk a zobrazení výsledků a co je vypnuto.
keywords: Lua, Lua 5.4, skript, jazyk, tabulka cs, ws, pracovní prostor, userdata, tenzor, pole, matice, tisk, zobrazení, sandbox
from: 82c668b3
---

Lua je druhý jazyk [pracovního prostoru Skript](topic:craftscript). Zvolte **Lua** v poli jazyka nad editorem (soubor `.lua` se otevře v Lua sám). Lua a CraftScript sdílejí tytéž proměnné a tytéž vestavěné funkce, takže skript v Lua může použít to, co vytvořil skript CraftScript, a naopak.

## Základy

```
-- každá vestavěná funkce je v tabulce cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- od 1, jako CraftScript
print(K(1, 1), #K)             -- prvek; počet prvků

-- pracovní prostor: tytéž proměnné, které vidí každý skript
ws.total = K(1, 1) * 2
print(ws.total)

-- více výsledků z jedné funkce
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` zavolá libovolnou vestavěnou funkci a vrátí její první výsledek; `cs.call(name, n, …)` vrátí `n` výsledků.
- `cs.tensor({1, 2, 3})` udělá řádek, `cs.tensor({{1, 2}, {3, 4}})` matici.
- Pole, řídké matice, sítě a pole veličin jsou hodnoty s metodami: `t(i, j)` nebo `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpozice), `t:totable()`. `+ - * / ^` znamenají totéž co v CraftScriptu (`*` je maticový součin); `t:times(u)` násobí po prvcích.
- Pole 1×1 přijde jako prosté číslo Lua.
- `ws.name` čte a zapisuje sdílený pracovní prostor. Globální proměnné, které skript po sobě nechá, se tam také uloží po jeho skončení.
- `print(…)` píše do konzole; `cs.show(f)`, `cs.plot(y)` a ostatní zobrazovací funkce fungují jako v CraftScriptu.

## Volání knihovny analýz

Funkce knihovny analýz (karta Knihovna) a funkce CraftScriptu, které definují skripty vašeho dílu, se také volají přes `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dva výstupy
```

Jsou nalezeny dříve, než skript začne, takže jméno napište do skriptu: `cs.static_tet(` nebo `cs.call('static_tet', …)`. Jméno sestavené až za běhu skriptu dosáhne jen vestavěných funkcí. Struktura vytvořená `cs.struct({ … })` je struktura CraftScriptu a seznam takových struktur v Lua (`{ cs.struct(…), … }`) je buňka, kterou nastavení knihovny očekávají. Když se uvnitř funkce knihovny něco pokazí, zpráva uvede funkci a její řádek a ukáže na váš řádek, který ji volal.

## Vypnuto

Skripty nemohou dosáhnout na soubory, síť ani stránku: `io`, `os` (kromě hodin), `require`, `dofile`, `loadfile` a `debug` jsou odstraněny. Data načtěte přes Otevřít v pracovním prostoru Skript a přes proměnné. Limit kroků a Zastavit fungují jako u CraftScriptu.
