---
title: Lua skriptid
summary: Kirjuta Skripti tööruumi skripte Lua 5.4 keeles: sisseehitatud funktsioonide tabel cs, massiivid väärtustena indekseerimise ja aritmeetikaga, jagatud tööruum ws, tulemuste printimine ja kuvamine ning see, mis on välja lülitatud.
keywords: Lua, Lua 5.4, skript, keel, cs-tabel, ws, tööruum, kasutajaandmed, tensor, massiiv, maatriks, print, kuvamine, liivakast
from: 82c668b3
---

Lua on [Skripti tööruumi](topic:craftscript) teine keel. Vali **Lua** redaktori kohal olevast keelekastist (`.lua` fail avaneb Lua-na iseenesest). Lua ja CraftScript jagavad samu muutujaid ja samu sisseehitatud funktsioone, nii et Lua skript saab kasutada seda, mida CraftScripti skript tegi, ja vastupidi.

## Põhitõed

```
-- kõik sisseehitatud funktsioonid on cs-tabelis
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-põhine, nagu CraftScriptis
print(K(1, 1), #K)             -- element; elementide arv

-- tööruum: samad muutujad, mida iga skript näeb
ws.total = K(1, 1) * 2
print(ws.total)

-- mitu tulemust ühest funktsioonist
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nimi>(…)` kutsub mis tahes sisseehitatud funktsiooni ja tagastab selle esimese tulemuse; `cs.call(nimi, n, …)` tagastab `n` tulemust.
- `cs.tensor({1, 2, 3})` teeb rea, `cs.tensor({{1, 2}, {3, 4}})` maatriksi.
- Massiivid, hõredmaatriksid, võrgud ja väljad on väärtused meetoditega: `t(i, j)` või `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponeerimine), `t:totable()`. `+ - * / ^` tähendavad sama, mis CraftScriptis (`*` on maatriksikorrutis); `t:times(u)` korrutab elemendi kaupa.
- 1×1 massiiv jõuab Lua tavalise arvuna.
- `ws.name` loeb ja kirjutab jagatud tööruumi. Globaalsed muutujad, mille skript maha jätab, satuvad sinna samuti, kui skript lõpeb.
- `print(…)` kirjutab konsooli; `cs.show(f)`, `cs.plot(y)` ja muud kuvamisfunktsioonid töötavad nagu CraftScriptis.

## Analüüsiteegi kutsumine

Analüüsiteegi funktsioonid (vahekaart Teek) ja su detaili enda skriptide defineeritud CraftScripti funktsioonid on kättesaadavad samuti läbi `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- kaks väljundit
```

Need leitakse enne skripti käivitamist, seega kirjuta nimi skripti sisse just sellisena: `cs.static_tet(` või `cs.call('static_tet', …)`. Nimi, mis kokku pannakse skripti töötamise ajal, jõuab ainult sisseehitatud funktsioonideni. `cs.struct({ … })`-ga tehtud struktuur on CraftScripti struktuur ja nende Lua loend (`{ cs.struct(…), … }`) on lahter, mida teegi seaded ootavad. Kui teegi funktsiooni sees läheb midagi valesti, nimetab teade funktsiooni ja selle rea ning osutab sinu reale, mis seda kutsus.

## Välja lülitatud

Skriptid ei pääse failidele, võrgule ega lehele: `io`, `os` (välja arvatud kell), `require`, `dofile`, `loadfile` ja `debug` on eemaldatud. Too andmed sisse Ava-funktsiooni ja muutujate abil. Sammueelarve ja {{ui:Peata}} töötavad nagu CraftScriptis.
