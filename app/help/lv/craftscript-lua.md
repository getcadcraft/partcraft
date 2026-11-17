---
title: Skripti Lua valodā
summary: Rakstiet Skripta darbvietas skriptus Lua 5.4 — cs tabula ar iebūvētajām funkcijām, masīvi kā vērtības ar indeksēšanu un aritmētiku, kopīgā darbvieta ws, rezultātu drukāšana un rādīšana, un tas, kas ir izslēgts.
keywords: Lua, Lua 5.4, skripts, valoda, cs tabula, ws, darbvieta, lietotāja dati, tenzors, masīvs, matrica, drukāt, rādīt, smilškaste
from: 82c668b3
---

Lua ir otrā valoda [Skripta darbvietā](topic:craftscript). Izvēlieties **Lua** valodas lodziņā virs redaktora (`.lua` fails atveras Lua automātiski). Lua un CraftScript dalās ar tiem pašiem mainīgajiem un tām pašām iebūvētajām funkcijām, tāpēc Lua skripts var izmantot to, ko CraftScript skripts izveidoja, un otrādi.

## Pamati

```
-- katra iebūvētā funkcija ir cs tabulā
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-based, kā CraftScript
print(K(1, 1), #K)             -- elements; elementu skaits

-- darbvieta: tie paši mainīgie, ko redz katrs skripts
ws.total = K(1, 1) * 2
print(ws.total)

-- vairāki rezultāti no vienas funkcijas
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` izsauc jebkuru iebūvēto funkciju un atgriež tās pirmo rezultātu; `cs.call(name, n, …)` atgriež `n` rezultātus.
- `cs.tensor({1, 2, 3})` veido rindu, `cs.tensor({{1, 2}, {3, 4}})` — matricu.
- Masīvi, retās matricas, tīkli un lauki ir vērtības ar metodēm: `t(i, j)` vai `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponēšana), `t:totable()`. `+ - * / ^` nozīmē to, ko tie nozīmē CraftScript (`*` ir matricu reizinājums); `t:times(u)` reizina pa elementam.
- Skaitlis, kas ir 1×1 masīvs, nonāk kā parasts Lua skaitlis.
- `ws.name` lasa un raksta kopīgo darbvietu. Globālie mainīgie, ko jūsu skripts atstāj aiz sevis, arī nonāk tur, kad tas beidzas.
- `print(…)` raksta konsolē; `cs.show(f)`, `cs.plot(y)` un citas attēlošanas funkcijas darbojas kā CraftScript.

## Analīzes bibliotēkas izsaukšana

Analīzes bibliotēkas funkcijas (cilne Bibliotēka) un CraftScript funkcijas, ko jūsu daļas skripti definē, arī sasniedzamas caur `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- divi rezultāti
```

Tās tiek atrastas pirms skripta sākuma, tāpēc nosaukums jāraksta skriptā: `cs.static_tet(` vai `cs.call('static_tet', …)`. Nosaukums, kas tiek salikts skripta darbības laikā, sasniedz tikai iebūvētās funkcijas. Struktūra, kas veidota ar `cs.struct({ … })`, ir CraftScript struktūra, un Lua saraksts no tām (`{ cs.struct(…), … }`) ir šūna, ko bibliotēkas iestatījumi sagaida. Ja bibliotēkas funkcijas iekšienē kaut kas noiet greizi, ziņojums nosauc funkciju un tās rindu un norāda uz jūsu rindu, kas to izsauca.

## Izslēgts

Skripti nevar piekļūt failiem, tīklam vai lapai: `io`, `os` (izņemot pulksteni), `require`, `dofile`, `loadfile` un `debug` ir noņemti. Datus ievadiet ar Skripta darbvietas {{ui:Atvērt}} un mainīgajiem. Soļu budžets un Apturēt darbojas kā CraftScript gadījumā.
