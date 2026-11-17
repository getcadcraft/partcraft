---
title: Skrip dengan Lua
summary: Menulis skrip ruang kerja Skrip dengan Lua 5.4: tabel cs berisi fungsi bawaan, array sebagai nilai dengan pengindeksan dan aritmetika, ruang kerja ws bersama, mencetak dan menampilkan hasil, serta apa yang dimatikan.
keywords: Lua, Lua 5.4, skrip, bahasa, tabel cs, ws, ruang kerja, userdata, tensor, array, matriks, print, display, sandbox
from: 82c668b3
---

Lua adalah bahasa kedua dari [ruang kerja Skrip](topic:craftscript). Pilih **Lua** pada kotak bahasa di atas editor (file `.lua` terbuka dalam Lua dengan sendirinya). Lua dan CraftScript berbagi variabel yang sama dan fungsi bawaan yang sama, sehingga skrip Lua dapat menggunakan apa yang dibuat skrip CraftScript, dan sebaliknya.

## Dasar-dasar

```
-- setiap fungsi bawaan ada di dalam tabel cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- berbasis 1, seperti CraftScript
print(K(1, 1), #K)             -- sebuah elemen; jumlah elemen

-- ruang kerja: variabel yang sama yang dilihat setiap skrip
ws.total = K(1, 1) * 2
print(ws.total)

-- beberapa hasil dari satu fungsi
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` memanggil fungsi bawaan apa pun dan mengembalikan hasil pertamanya; `cs.call(name, n, …)` mengembalikan `n` hasil.
- `cs.tensor({1, 2, 3})` membuat baris, `cs.tensor({{1, 2}, {3, 4}})` membuat matriks.
- Array, matriks jarang, mesh, dan field adalah nilai dengan metode: `t(i, j)` atau `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpos), `t:totable()`. `+ - * / ^` memiliki arti yang sama seperti di CraftScript (`*` adalah perkalian matriks); `t:times(u)` mengalikan elemen demi elemen.
- Angka yang berupa array 1×1 diterima sebagai angka Lua biasa.
- `ws.name` membaca dan menulis ruang kerja bersama. Variabel global yang ditinggalkan skrip Anda juga masuk ke sana ketika skrip selesai.
- `print(…)` menulis ke konsol; `cs.show(f)`, `cs.plot(y)` dan fungsi tampilan lainnya bekerja seperti di CraftScript.

## Memanggil pustaka analisis

Fungsi pustaka analisis (tab Pustaka) dan fungsi CraftScript yang didefinisikan oleh skrip milik bagian Anda juga dijangkau melalui `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dua keluaran
```

Fungsi-fungsi ini ditemukan sebelum skrip dimulai, jadi tulis namanya langsung di dalam skrip: `cs.static_tet(` atau `cs.call('static_tet', …)`. Nama yang dibentuk saat skrip berjalan hanya mencapai fungsi bawaan. Struct yang dibuat dengan `cs.struct({ … })` adalah struct CraftScript, dan daftar Lua berisi struct tersebut (`{ cs.struct(…), … }`) adalah cell, yang diharapkan oleh pengaturan pustaka. Jika terjadi kesalahan di dalam fungsi pustaka, pesan menyebut fungsi beserta barisnya, dan menunjuk ke baris Anda yang memanggilnya.

## Yang dimatikan

Skrip tidak dapat mengakses berkas, jaringan, atau halaman: `io`, `os` (kecuali jam), `require`, `dofile`, `loadfile`, dan `debug` dihapus. Gunakan Buka pada ruang kerja Skrip dan variabel untuk memasukkan data. Anggaran langkah dan Hentikan bekerja seperti pada CraftScript.
