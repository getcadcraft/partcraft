---
title: Skrip dengan Python
summary: Menulis skrip ruang kerja Skrip dengan Python 3: objek cs berisi fungsi bawaan, array sebagai nilai mirip numpy dengan pengindeksan berbasis 0, ruang kerja bersama, pencetakan, hal yang belum tersedia, dan cara Python diisolasi seperti CraftScript dan Lua.
keywords: Python, Python 3, CPython, WebAssembly, tersegel, aman, skrip, bahasa, cs, ws, ruang kerja, numpy, array, matriks, pengindeksan, print, display, kepercayaan
from: 66eab56d
---

Python adalah bahasa ketiga dari [ruang kerja Skrip](topic:craftscript). Pilih **Python** pada kotak bahasa di atas editor (file `.py` terbuka dalam Python dengan sendirinya). Python, Lua, dan CraftScript berbagi variabel yang sama dan fungsi bawaan yang sama, sehingga skrip Python dapat menggunakan apa yang dibuat skrip CraftScript, dan sebaliknya.

Eksekusi Python pertama dalam sebuah kunjungan memuat Python itu sendiri (CPython 3.14, sekitar 7 MB) dari situs ini, yang memakan waktu beberapa detik. Python belum termasuk dalam {{ui:Simpan untuk offline}}: jalankan satu skrip Python saat daring terlebih dahulu.

## Python diisolasi

Skrip Python diisolasi seperti skrip CraftScript dan Lua: skrip hanya mencapai bagian, variabel, dan fungsi bawaan, dan tidak ada yang lain. Setiap eksekusi adalah Python baru di sandbox sendiri dengan pohon berkas kecil di memori (pustaka standarnya dan folder `/tmp` yang hilang setelah eksekusi). Skrip tidak dapat mengakses jaringan, berkas Anda, atau bagian halaman lainnya, baik di peramban maupun di baris perintah. Skrip dari orang lain tetap dapat memakan banyak waktu atau memori: {{ui:Hentikan}} mengakhirinya.

## Dasar-dasar

```
A = cs.magic(3)              # setiap fungsi bawaan adalah cs.<name>
B = A @ A.T                  # @ adalah perkalian matriks, .T transposnya
C = A * 2 + 1                # + - * / ** bekerja per elemen, seperti di numpy
print(A[0, 1], A[-1, -1])    # berbasis 0; negatif dihitung dari akhir
row = A[1]                   # satu indeks pada matriks: sebuah baris
big = A[A > 4]               # topeng logis memilih elemen
A[0, 0] = -5                 # menugaskan nilai ke dalam array
V, D = cs.call('eig', 2, A)  # beberapa hasil: cs.call(name, berapa banyak, …)
```

- Array 1 × 1 diterima sebagai angka biasa; array lain, matriks jarang, mesh, field, dan model adalah **Value**.
- Value memiliki `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (jumlah barisnya), serta `float()`, `int()`, dan `bool()` untuk satu elemen.
- Perbandingan (`<`, `==`, …) bekerja per elemen, seperti di numpy: hasilnya adalah Value logis.
- Daftar angka yang diberikan ke fungsi bawaan menjadi array: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` membuat matriks.
- Dict menjadi struct dan daftar berisi campuran menjadi cell, dan sebaliknya.

Setiap global yang dibuat skrip Anda (angka, Value, dict, daftar…) masuk ke tab **Variabel** saat eksekusi berakhir, bahkan setelah galat. Nama yang diawali `_`, fungsi, kelas, dan modul tetap berada di Python. `ws.name` membaca atau menetapkan variabel secara langsung, dan `ws_names()` mencantumkannya.

`print(…)` menulis ke konsol. `display(…)` (atau `cs.display`) menampilkan mesh, field, atau plot, seperti di CraftScript.

## Memanggil pustaka analisis

Fungsi pustaka dipanggil seperti fungsi bawaan: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Tulis namanya di dalam skrip apa adanya: PartCraft menemukan fungsi pustaka yang digunakan skrip sebelum skrip dijalankan.

## Belum tersedia

- numpy, scipy, dan paket lainnya: hanya pustaka standar Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) yang tersedia di sini, tanpa bagian jendela, terminal, dan basis data (`tkinter`, `curses`, `sqlite3`).
- Soket dan apa pun yang akan menjangkau luar: Python tidak memiliki jaringan di sini.
- `time.sleep` langsung kembali.
- Pelipatan di editor, dan memanggil fungsi Python dari skrip CraftScript.
- Eksekusi memeriksa anggaran instruksi dan Hentikan setiap 1000 baris; perhitungan panjang di dalam satu fungsi bawaan selesai lebih dulu.
