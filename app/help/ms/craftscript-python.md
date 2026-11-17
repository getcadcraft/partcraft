---
title: Skrip dalam Python
summary: Tulis skrip ruang kerja Skrip dalam Python 3: objek cs bagi fungsi terbina dalam, tatasusunan sebagai nilai seperti numpy dengan pengindeksan berasaskan 0, ruang kerja yang dikongsi, mencetak, perkara yang belum ada, dan cara Python dikurung seperti CraftScript dan Lua.
keywords: Python, Python 3, CPython, WebAssembly, dikurung, selamat, skrip, bahasa, cs, ws, ruang kerja, numpy, tatasusunan, matriks, pengindeksan, cetak, paparan, amanah
from: 66eab56d
---

Python ialah bahasa ketiga [ruang kerja Skrip](topic:craftscript). Pilih **Python** dalam kotak bahasa di atas penyunting (fail `.py` dibuka dalam Python dengan sendirinya). Python, Lua dan CraftScript berkongsi pembolehubah dan fungsi terbina dalam yang sama, jadi skrip Python boleh menggunakan apa yang dibuat oleh skrip CraftScript, dan sebaliknya.

Larian Python pertama dalam satu lawatan memuatkan Python sendiri (CPython 3.14, kira-kira 7 MB) dari tapak ini, yang mengambil masa beberapa saat. Python belum menjadi sebahagian daripada {{ui:Simpan untuk luar talian}}: jalankan satu skrip Python dalam talian dahulu.

## Python dikurung

Skrip Python dikurung seperti skrip CraftScript dan Lua: ia mencapai bahagian, pembolehubah dan fungsi terbina dalam, dan tiada apa lain. Setiap larian ialah Python baharu dalam kotak pasir sendiri dengan pokok fail kecil dalam memori (pustaka piawainya dan folder `/tmp` yang hilang selepas larian). Ia tidak boleh mencapai rangkaian, fail anda atau selebihnya halaman, sama ada dalam pelayar atau pada baris arahan. Skrip daripada orang lain masih boleh menggunakan banyak masa atau memori: {{ui:Henti}} menamatkannya.

## Asas

```
A = cs.magic(3)              # setiap fungsi terbina dalam ialah cs.<name>
B = A @ A.T                  # @ ialah hasil darab matriks, .T ialah transpos
C = A * 2 + 1                # + - * / ** ialah unsur demi unsur, seperti numpy
print(A[0, 1], A[-1, -1])    # berasaskan 0; negatif dikira dari hujung
row = A[1]                   # satu indeks pada matriks: satu baris
big = A[A > 4]               # topeng logik memilih unsur
A[0, 0] = -5                 # memberi nilai kepada tatasusunan
V, D = cs.call('eig', 2, A)  # beberapa hasil: cs.call(name, berapa banyak, …)
```

- Tatasusunan 1 × 1 tiba sebagai nombor biasa; tatasusunan lain, matriks jarang, jejaring, medan dan model ialah **Nilai**.
- Nilai mempunyai `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (bilangan barisnya), dan `float()`, `int()` serta `bool()` untuk satu unsur.
- Perbandingan (`<`, `==`, …) adalah unsur demi unsur, seperti numpy: ia memberi Nilai logik.
- Senarai nombor yang dihantar kepada fungsi terbina dalam menjadi tatasusunan: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` membuat matriks.
- Dict menjadi struktur dan senarai pelbagai jenis menjadi sel, dan sebaliknya.

Setiap global yang dibuat skrip anda (nombor, Nilai, dict, senarai…) masuk ke tab **Pembolehubah** apabila larian tamat, walaupun selepas ralat. Nama yang bermula dengan `_`, fungsi, kelas dan modul kekal dalam Python. `ws.name` membaca atau menetapkan pembolehubah secara langsung, dan `ws_names()` menyenaraikannya.

`print(…)` menulis ke konsol. `display(…)` (atau `cs.display`) memaparkan jejaring, medan atau plot, seperti dalam CraftScript.

## Panggil pustaka analisis

Fungsi pustaka dipanggil seperti yang terbina dalam: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Tulis nama dalam skrip seperti asalnya: PartCraft mencari fungsi pustaka yang digunakan oleh skrip sebelum ia berjalan.

## Belum ada lagi

- numpy, scipy dan pakej lain: hanya pustaka piawai Python sendiri (`math`, `json`, `itertools`, `decimal`, `statistics`…) yang ada di sini, tanpa bahagian tetingkap, terminal dan pangkalan data (`tkinter`, `curses`, `sqlite3`).
- Soket dan apa-apa lagi yang akan mencapai luar: Python tiada rangkaian di sini.
- `time.sleep` kembali serta-merta.
- Lipatan dalam penyunting, dan memanggil fungsi Python daripada skrip CraftScript.
- Satu larian menyemak bajet arahan dan {{ui:Henti}} setiap 1000 baris; pengiraan panjang dalam satu fungsi terbina dalam akan selesai dahulu.
