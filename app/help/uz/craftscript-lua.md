---
title: Lua skriptlari
summary: Skript ishchi maydonida Lua 5.4 da skriptlar yozish: oʻrnatilgan funksiyalar cs jadvali, qiymat sifatida massivlar (indekslash va arifmetika bilan), umumiy ws ish maydoni, natijalarni chop etish va koʻrsatish, hamda oʻchirilgan narsalar.
keywords: Lua, Lua 5.4, skript, til, cs jadvali, ws, ish maydoni, userdata, tenzor, massiv, matritsa, print, display, qumloq
from: 82c668b3
---

Lua — [Skript ishchi maydonining](topic:craftscript) ikkinchi tili. Tahrirlovchi ustidagi til qutisidan **Lua** ni tanlang (`.lua` fayli oʻzi Lua da ochiladi). Lua va CraftScript bir xil oʻzgaruvchilar va bir xil oʻrnatilgan funksiyalardan foydalanadi, shuning uchun Lua skripti CraftScript skripti yaratgan narsadan foydalanishi mumkin va aksincha.

## Asoslar

```
-- har bir oʻrnatilgan funksiya cs jadvalida
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1 dan boshlanadi, CraftScript kabi
print(K(1, 1), #K)             -- element; elementlar soni

-- ish maydoni: har bir skript koʻradigan bir xil oʻzgaruvchilar
ws.total = K(1, 1) * 2
print(ws.total)

-- bitta funksiyadan bir necha natija
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nom>(…)` har qanday oʻrnatilgan funksiyani chaqiradi va uning birinchi natijasini qaytaradi; `cs.call(nom, n, …)` `n` ta natija qaytaradi.
- `cs.tensor({1, 2, 3})` qator, `cs.tensor({{1, 2}, {3, 4}})` matritsa yaratadi.
- Massivlar, siyrak matritsalar, toʻrlar va maydonlar metodli qiymatlar: `t(i, j)` yoki `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponirlash), `t:totable()`. `+ - * / ^` CraftScript da qanday anglatsa, shunday anglatadi (`*` matritsa koʻpaytmasi); `t:times(u)` elementma-element koʻpaytiradi.
- 1×1 massiv boʻlgan son oddiy Lua soni sifatida keladi.
- `ws.name` umumiy ish maydonini oʻqiydi va yozadi. Skript tugaganda qoldirgan global oʻzgaruvchilar ham u yerga tushadi.
- `print(…)` konsolga yozadi; `cs.show(f)`, `cs.plot(y)` va boshqa koʻrsatish funksiyalari CraftScript dagidek ishlaydi.

## Tahlil kutubxonasini chaqirish

Tahlil kutubxonasi funksiyalari (Kutubxona yorligʻi) va detalning oʻz skriptlari aniqlagan CraftScript funksiyalari ham `cs` orqali chaqiriladi:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- ikkita chiqish
```

Ular skript boshlanishidan oldin topiladi, shuning uchun nomni skriptda aynan shunday yozing: `cs.static_tet(` yoki `cs.call('static_tet', …)`. Skript ishlash paytida yigʻilgan nom faqat oʻrnatilgan funksiyalarga yetadi. `cs.struct({ … })` bilan tuzilgan struktura CraftScript strukturasi hisoblanadi, ularning Lua roʻyxati (`{ cs.struct(…), … }`) esa katak boʻladi — kutubxona sozlamalari shuni kutadi. Kutubxona funksiyasi ichida nimadir notoʻgʻri ketsa, xabar funksiya va uning qatorini nomlaydi hamda uni chaqirgan qatoringizga ishora qiladi.

## Oʻchirilgan

Skriptlar fayllarga, tarmoqqa yoki sahifaga yeta olmaydi: `io`, `os` (soat bundan mustasno), `require`, `dofile`, `loadfile` va `debug` olib tashlangan. Maʼlumotni kiritish uchun Skript ishchi maydonidagi {{ui:Ochish}} dan va oʻzgaruvchilardan foydalaning. Qadamlar chegarasi va Toʻxtatish CraftScript dagidek ishlaydi.
