---
title: Scenarijai Lua kalba
summary: Rašykite Scenarijų darbo srities scenarijus Lua 5.4 kalba: įmontuotų funkcijų lentelė cs, masyvai kaip reikšmės su indeksavimu ir aritmetika, bendra darbo sritis ws, rezultatų spausdinimas ir rodymas bei tai, kas išjungta.
keywords: Lua, Lua 5.4, scenarijus, kalba, cs lentelė, ws, darbo sritis, userdata, tenzorius, masyvas, matrica, spausdinimas, rodymas, smėlio dėžė
from: 82c668b3
---

Lua yra antroji [Scenarijų darbo srities](topic:craftscript) kalba. Pasirinkite **Lua** kalbos laukelyje virš redaktoriaus (`.lua` failas atsidaro Lua savaime). Lua ir CraftScript naudoja tuos pačius kintamuosius ir tas pačias įmontuotas funkcijas, todėl Lua scenarijus gali naudoti tai, ką sukūrė CraftScript scenarijus, ir atvirkščiai.

## Pagrindai

```
-- kiekviena įmontuota funkcija yra cs lentelėje
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- nuo 1, kaip CraftScript
print(K(1, 1), #K)             -- elementas; elementų skaičius

-- darbo sritis: tie patys kintamieji, kuriuos mato kiekvienas scenarijus
ws.total = K(1, 1) * 2
print(ws.total)

-- keli rezultatai iš vienos funkcijos
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` kviečia bet kurią įmontuotą funkciją ir grąžina jos pirmą rezultatą; `cs.call(name, n, …)` grąžina `n` rezultatų.
- `cs.tensor({1, 2, 3})` sukuria eilutę, `cs.tensor({{1, 2}, {3, 4}})` – matricą.
- Masyvai, retosios matricos, tinkleliai ir laukai yra reikšmės su metodais: `t(i, j)` arba `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponavimas), `t:totable()`. `+ - * / ^` reiškia tai, ką reiškia CraftScript (`*` yra matricų sandauga); `t:times(u)` daugina elementas po elemento.
- 1×1 masyvas tampa paprastu Lua skaičiumi.
- `ws.name` skaito ir rašo bendrą darbo sritį. Globalūs kintamieji, kuriuos jūsų scenarijus palieka pasibaigus, taip pat patenka į ją.
- `print(…)` rašo į konsolę; `cs.show(f)`, `cs.plot(y)` ir kitos rodymo funkcijos veikia kaip CraftScript.

## Iškvieskite analizės biblioteką

Analizės bibliotekos funkcijos (skirtukas Biblioteka) ir jūsų detalės scenarijų apibrėžtos CraftScript funkcijos taip pat pasiekiamos per `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- du rezultatai
```

Jos randamos prieš scenarijui pradedant, todėl vardą scenarijuje rašykite tiksliai: `cs.static_tet(` arba `cs.call('static_tet', …)`. Vardas, sudarytas scenarijui veikiant, pasiekia tik įmontuotas funkcijas. Struktūra, sukurta su `cs.struct({ … })`, yra CraftScript struktūra, o Lua sąrašas iš jų (`{ cs.struct(…), … }`) yra langelis – būtent to laukia bibliotekos nustatymai. Jei bibliotekos funkcijoje kas nors nutinka, pranešime nurodoma funkcija ir jos eilutė, o taip pat jūsų eilutė, kuri ją iškvietė.

## Išjungta

Scenarijai negali pasiekti failų, tinklo ar puslapio: `io`, `os` (išskyrus laikrodį), `require`, `dofile`, `loadfile` ir `debug` yra pašalinti. Duomenis įkelkite naudodami scenarijų darbo srities {{ui:Atidaryti}} ir kintamuosius. Žingsnių biudžetas ir {{ui:Sustabdyti}} veikia kaip CraftScript.
