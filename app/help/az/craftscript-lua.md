---
title: Lua ilə skriptlər
summary: Skript iş sahəsinin skriptlərini Lua 5.4-də yazın: daxili funksiyaların `cs` cədvəli, indeksləmə və hesab əməliyyatları ilə dəyər kimi massivlər, paylaşılan `ws` iş sahəsi, nəticələrin çap və göstərilməsi və hansı şeylərin söndürüldüyü.
keywords: Lua, Lua 5.4, skript, dil, cs cədvəli, ws, iş sahəsi, userdata, tenzor, massiv, matris, çap, göstərmə, qum qutusu
from: 82c668b3
---

Lua [Skript iş sahəsinin](topic:craftscript) ikinci dilidir. Redaktorun üstündəki dil qutusunda **Lua** seçin (`.lua` faylı özü Lua-da açılır). Lua və CraftScript eyni dəyişənləri və eyni daxili funksiyaları paylaşır, ona görə Lua skripti CraftScript skriptinin yaratdığını istifadə edə bilər və əksinə.

## Əsaslar

```
-- hər daxili funksiya cs cədvəlindədir
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-əsaslı, CraftScript kimi
print(K(1, 1), #K)             -- bir element; elementlərin sayı

-- iş sahəsi: hər skriptin gördüyü eyni dəyişənlər
ws.total = K(1, 1) * 2
print(ws.total)

-- bir funksiyadan bir neçə nəticə
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<ad>(…)` istənilən daxili funksiyanı çağırır və onun birinci nəticəsini qaytarır; `cs.call(ad, n, …)` `n` nəticə qaytarır.
- `cs.tensor({1, 2, 3})` sətir, `cs.tensor({{1, 2}, {3, 4}})` matris yaradır.
- Massivlər, seyrək matrislər, torlar və sahələr metodları olan dəyərlərdir: `t(i, j)` və ya `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponirləmə), `t:totable()`. `+ - * / ^` CraftScript-dəkini bildirir (`*` matris hasilidir); `t:times(u)` elementbaşına vurur.
- 1 × 1 massiv adi Lua ədədi kimi gəlir.
- `ws.name` paylaşılan iş sahəsini oxuyur və yazır. Skriptin qoyub getdiyi qlobal dəyişənlər də skript bitəndə oraya düşür.
- `print(…)` konsola yazır; `cs.show(f)`, `cs.plot(y)` və digər göstərmə funksiyaları CraftScript-dəki kimi işləyir.

## Analiz kitabxanasını çağırın

Analiz kitabxanasının funksiyaları (Kitabxana sekmesi) və hissənin öz skriptlərinin təyin etdiyi CraftScript funksiyaları da `cs` vasitəsilə çatılır:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- iki çıxış
```

Onlar skript başlamazdan əvvəl tapılır, ona görə adı skriptdə yazın: `cs.static_tet(` və ya `cs.call('static_tet', …)`. İşə salma zamanı qurulan ad yalnız daxili funksiyalara çatır. `cs.struct({ … })` ilə qurulan struktur CraftScript strukturudur; Lua siyahısı onlardan (`{ cs.struct(…), … }`) hüceyrədir, kitabxananın parametrləri belə gözləyir. Kitabxana funksiyasının içində nəsə pis olsa, mesaj funksiyanı və onun sətirini göstərir və çağıran sətrinizə işarə edir.

## Söndürülüb

Skriptlər fayllara, şəbəkəyə və ya səhifəyə çata bilmir: `io`, `os` (saatdan başqa), `require`, `dofile`, `loadfile` və `debug` silinib. Məlumatları gətirmək üçün skriptin Aç-ından və dəyişənlərdən istifadə edin. Addım büdcəsi və Dayandır CraftScript-dəki kimi işləyir.
