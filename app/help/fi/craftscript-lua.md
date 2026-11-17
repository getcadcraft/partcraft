---
title: Skriptit Lua-kielellä
summary: Kirjoita Skripti-työtilan skriptejä Lua 5.4:llä: cs-taulukko sisäänrakennetuista funktioista, taulukot arvoina indeksoinnin ja aritmetiikan kanssa, jaettu ws-työtila, tulostus ja tulosten näyttäminen sekä pois kytketyt toiminnot.
keywords: Lua, Lua 5.4, skripti, kieli, cs-taulukko, ws, työtila, userdata, tensori, taulukko, matriisi, tulostus, näyttö, hiekkalaatikko
from: 82c668b3
---

Lua on [Skripti-työtilan](topic:craftscript) toinen kieli. Valitse **Lua** editorin yläpuolella olevasta kielilaatikosta (`.lua`-tiedosto avautuu Luassa itsestään). Lua ja CraftScript jakavat samat muuttujat ja samat sisäänrakennetut funktiot, joten Lua-skripti voi käyttää CraftScript-skriptin tekemiä asioita ja päinvastoin.

## Olennaiset asiat

```
-- jokainen sisäänrakennettu funktio on cs-taulukossa
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-pohjainen, kuten CraftScriptissä
print(K(1, 1), #K)             -- alkio; alkioiden lukumäärä

-- työtila: samat muuttujat, jotka jokainen skripti näkee
ws.total = K(1, 1) * 2
print(ws.total)

-- useita tuloksia yhdestä funktiosta
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` kutsuu mitä tahansa sisäänrakennettua funktiota ja palauttaa sen ensimmäisen tuloksen; `cs.call(name, n, …)` palauttaa `n` tulosta.
- `cs.tensor({1, 2, 3})` tekee rivin, `cs.tensor({{1, 2}, {3, 4}})` matriisin.
- Taulukot, harvat matriisit, verkot ja kentät ovat arvoja, joilla on metodeja: `t(i, j)` tai `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponointi), `t:totable()`. `+ - * / ^` tarkoittavat samaa kuin CraftScriptissä (`*` on matriisitulo); `t:times(u)` kertoo alkio kerrallaan.
- Luku, joka on 1×1-taulukko, saapuu tavallisena Lua-lukuna.
- `ws.name` lukee ja kirjoittaa jaettua työtilaa. Skriptin jättämät yleiset muuttujat päätyvät sinne myös, kun se päättyy.
- `print(…)` kirjoittaa konsoliin; `cs.show(f)`, `cs.plot(y)` ja muut näyttöfunktiot toimivat kuten CraftScriptissä.

## Kutsu analyysikirjastoa

Analyysikirjaston funktiot (Kirjasto-välilehti) ja osan omien skriptien määrittelemät CraftScript-funktiot saavutetaan myös `cs`:n kautta:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- two outputs
```

Ne löydetään ennen skriptin alkua, joten kirjoita nimi skriptiin sellaisenaan: `cs.static_tet(` tai `cs.call('static_tet', …)`. Ajon aikana koottu nimi tavoittaa vain sisäänrakennetut funktiot. `cs.struct({ … })`:llä tehty struct on CraftScript-struct, ja niiden Lua-lista (`{ cs.struct(…), … }`) on solu, jota kirjaston asetukset odottavat. Jos kirjastofunktion sisällä menee jotain pieleen, viesti nimeää funktion ja sen rivin sekä osoittaa sinun rivisi, joka sitä kutsui.

## Pois kytketty

Skriptit eivät pääse tiedostoihin, verkkoon tai sivuun: `io`, `os` (paitsi kello), `require`, `dofile`, `loadfile` ja `debug` on poistettu. Tuo data Skripti-työtilan Avaa-toiminnolla ja muuttujien kautta. Vaiheraja ja Pysäytä toimivat kuten CraftScriptissä.
