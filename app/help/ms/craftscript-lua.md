---
title: Skrip dalam Lua
summary: Tulis skrip ruang kerja Skrip dalam Lua 5.4: jadual cs bagi fungsi terbina dalam, tatasusunan sebagai nilai dengan pengindeksan dan aritmetik, ruang kerja ws yang dikongsi, mencetak dan memaparkan keputusan, serta perkara yang dimatikan.
keywords: Lua, Lua 5.4, skrip, bahasa, jadual cs, ws, ruang kerja, userdata, tensor, tatasusunan, matriks, cetak, paparan, sandbox
from: 82c668b3
---

Lua ialah bahasa kedua [ruang kerja Skrip](topic:craftscript). Pilih **Lua** dalam kotak bahasa di atas penyunting (fail `.lua` dibuka dalam Lua dengan sendirinya). Lua dan CraftScript berkongsi pembolehubah dan fungsi terbina dalam yang sama, jadi skrip Lua boleh menggunakan apa yang dibuat oleh skrip CraftScript, dan sebaliknya.

## Asas

```
-- setiap fungsi terbina dalam ada dalam jadual cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-berasaskan, seperti CraftScript
print(K(1, 1), #K)             -- satu unsur; bilangan unsur

-- ruang kerja: pembolehubah yang sama yang dilihat oleh setiap skrip
ws.total = K(1, 1) * 2
print(ws.total)

-- beberapa hasil daripada satu fungsi
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` memanggil mana-mana fungsi terbina dalam dan memulangkan hasil pertamanya; `cs.call(name, n, …)` memulangkan `n` hasil.
- `cs.tensor({1, 2, 3})` membuat baris, `cs.tensor({{1, 2}, {3, 4}})` membuat matriks.
- Tatasusunan, matriks jarang, jejaring dan medan ialah nilai dengan kaedah: `t(i, j)` atau `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpos), `t:totable()`. `+ - * / ^` membawa maksud yang sama seperti dalam CraftScript (`*` ialah hasil darab matriks); `t:times(u)` mendarab unsur demi unsur.
- Nombor yang merupakan tatasusunan 1×1 tiba sebagai nombor Lua biasa.
- `ws.name` membaca dan menulis ruang kerja yang dikongsi. Pembolehubah global yang ditinggalkan skrip anda juga akan masuk ke sana apabila ia tamat.
- `print(…)` menulis ke konsol; `cs.show(f)`, `cs.plot(y)` dan fungsi paparan lain berfungsi seperti dalam CraftScript.

## Panggil pustaka analisis

Fungsi pustaka analisis (tab Pustaka) dan fungsi CraftScript yang ditakrifkan oleh skrip bahagian anda juga dicapai melalui `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dua output
```

Ia ditemui sebelum skrip bermula, jadi tulis nama dalam skrip: `cs.static_tet(` atau `cs.call('static_tet', …)`. Nama yang dibina semasa skrip berjalan hanya sampai kepada fungsi terbina dalam. Struktur yang dibina dengan `cs.struct({ … })` ialah struktur CraftScript, dan senarai Lua daripadanya (`{ cs.struct(…), … }`) ialah sel, iaitu apa yang diperlukan oleh tetapan pustaka. Jika sesuatu tidak kena dalam fungsi pustaka, mesej itu menamakan fungsi dan barisnya, serta menunjuk kepada baris anda yang memanggilnya.

## Dimatikan

Skrip tidak boleh mencapai fail, rangkaian atau halaman: `io`, `os` (kecuali jam), `require`, `dofile`, `loadfile` dan `debug` dikeluarkan. Gunakan {{ui:Buka}} dan pembolehubah untuk membawa data masuk. Bajet langkah dan {{ui:Henti}} berfungsi seperti dalam CraftScript.
