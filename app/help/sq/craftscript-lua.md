---
title: Skriptet në Lua
summary: Shkruani skripte të Hapësirës së skriptit në Lua 5.4: tabela cs me funksionet e integruara, vargjet si vlera me indeksim dhe aritmetikë, hapësira e përbashkët ws, shfaqja e rezultateve, dhe çfarë është çaktivizuar.
keywords: Lua, Lua 5.4, skript, gjuhë, tabela cs, ws, hapësirë pune, userdata, tensor, varg, matricë, print, display, kuti e izoluar
from: 82c668b3
---

Lua është gjuha e dytë e [Hapësirës së skriptit](topic:craftscript). Zgjidhni **Lua** te kutia e gjuhës mbi redaktuesin (një skedar `.lua` hapet në Lua vetë). Lua dhe CraftScript ndajnë të njëjtat variabla dhe të njëjtat funksione të integruara, kështu që një skript Lua mund të përdorë atë që ka bërë një skript CraftScript, dhe anasjelltas.

## Bazat

```
-- çdo funksion i integruar është në tabelën cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-bazuar, si në CraftScript
print(K(1, 1), #K)             -- një element; numri i elementeve

-- hapësira e punës: të njëjtat variabla që shikon çdo skript
ws.total = K(1, 1) * 2
print(ws.total)

-- disa rezultate nga një funksion
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<emri>(…)` thërret çdo funksion të integruar dhe kthen rezultatin e parë; `cs.call(emri, n, …)` kthen `n` rezultate.
- `cs.tensor({1, 2, 3})` bën një rresht, `cs.tensor({{1, 2}, {3, 4}})` një matricë.
- Vargjet, matricat e rralla, rrjetat dhe fushat janë vlera me metoda: `t(i, j)` ose `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpozim), `t:totable()`. `+ - * / ^` kanë kuptimin që kanë në CraftScript (`*` është prodhimi i matricave); `t:times(u)` shumëzon element pas elementi.
- Një numër që është varg 1×1 arrin si numër i thjeshtë Lua.
- `ws.emri` lexon dhe shkruan hapësirën e përbashkët të punës. Variablat globale që skripti lë pas arrijnë edhe atje kur mbaron.
- `print(…)` shkruan në konsolë; `cs.show(f)`, `cs.plot(y)` dhe funksionet e tjera të shfaqjes punojnë si në CraftScript.

## Thirrni bibliotekën e analizës

Funksionet e bibliotekës së analizës (skeda Bibliotekë) dhe funksionet CraftScript që përcaktojnë skriptet e pjesës suaj arrihen gjithashtu përmes `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dy dalje
```

Ato gjenden përpara se të fillojë skripti, kështu që shkruajeni emrin në skript: `cs.static_tet(` ose `cs.call('static_tet', …)`. Një emër i ndërtuar gjatë ekzekutimit të skriptit arrin vetëm funksionet e integruara. Një strukturë e bërë me `cs.struct({ … })` është një strukturë CraftScript, dhe një listë Lua prej tyre (`{ cs.struct(…), … }`) është një qelizë, që është ajo që presin cilësimet e bibliotekës. Nëse diçka shkon keq brenda një funksioni bibliotekë, mesazhi emëron funksionin dhe rreshtin e tij, dhe tregon rreshtin tuaj që e thirri.

## Të çaktivizuara

Skriptet nuk mund të arrijnë skedarët, rrjetin ose faqen: `io`, `os` (përveç orës), `require`, `dofile`, `loadfile` dhe `debug` hiqen. Përdorni Hap të Hapësirës së skriptit dhe variablat për të sjellë të dhëna brenda. Buxheti i hapave dhe Ndalo punojnë si për CraftScript.
