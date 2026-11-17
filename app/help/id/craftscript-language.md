---
title: Bahasa CraftScript
summary: CraftScript dalam satu halaman: matriks, rentang dan pengindeksan, operator, alur kontrol, fungsi, struct dan cell, komentar, echo, galat dan anggaran langkah, serta perbedaannya dengan MATLAB.
keywords: CraftScript, bahasa, sintaks, matriks, array, vektor, tensor, indeks, end, titik dua, rentang, operator, per elemen, transpos, if, for, while, switch, try, catch, fungsi, fungsi anonim, struct, cell, komentar, echo, titik koma, MATLAB, Octave, porting
from: d072b7d5
---

CraftScript adalah bahasa matriks yang ditulis agar terbaca seperti MATLAB, sehingga sebagian besar kode numerik klasik (misalnya kode optimasi topologi 88 baris) berjalan dengan sedikit perubahan saja. Bahasa ini dijalankan di [ruang kerja Skrip](topic:craftscript) dan dari baris perintah.

## Nilai

| Tipe | Contoh | Catatan |
|---|---|---|
| Angka, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Setiap angka adalah array (berukuran 1×1). Array disimpan kolom demi kolom, hingga 8 dimensi |
| Logis | `A > 2`, `true` | Array berisi true/false; dapat dipakai sebagai indeks |
| Teks | `'beam'`, `"beam"` | |
| Matriks jarang | `sparse(i, j, v, n, n)` | Untuk matriks kekakuan |
| Mesh, field, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Yang digambar oleh `show` |
| Struct | `s.E = 210e3` | Field bernama |
| Cell | `c = {1, 'two', [3 4]}` | Daftar nilai apa pun |
| Handle fungsi | `f = @(x) x.^2` | |

## Array dan pengindeksan

- Rentang: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Pengindeksan dimulai dari 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (seluruh kolom), `A(:)` (semuanya sebagai satu kolom), `v(v > 0)` (pengindeksan logis).
- Menugaskan nilai melewati akhir akan memperbesar array, seperti di MATLAB: `v(10) = 1`.

## Operator

- `+ - * / \ ^` adalah operasi matriks (`A \ b` menyelesaikan); `.* ./ .^` bekerja elemen demi elemen. `'` melakukan transpos.
- Perbandingan `== ~= < <= > >=`; logika `& | ~` (elemen demi elemen) dan `&& ||` (hubung singkat).

## Alur kontrol dan fungsi

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Fungsi ditulis di dalam skrip setelah perintahnya, atau di tab skrip tersendiri yang dinamai sesuai fungsinya:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Sebuah nama dicari dalam urutan ini: variabel, skrip di bagian ini dengan nama tersebut, fungsi pustaka, lalu fungsi bawaan.

## Echo, komentar, keluaran

- Pernyataan tanpa `;` mencetak nilainya; `;` membuatnya tetap senyap.
- `%` memulai komentar; `%{` dan `%}` pada baris tersendiri memberi komentar pada baris di antaranya.
- `disp(x)`, `fprintf('%g\n', x)` dan `display(x)` mencetak ke konsol.

## Galat dan batas

- Galat menjelaskan apa yang salah dengan kata-kata biasa dan memberi baris (serta rantai pemanggilan fungsi).
- Setiap eksekusi memiliki anggaran langkah (opsi Jalankan di panel); loop tanpa akhir berhenti dengan pesan, atau tekan Hentikan.
- Setiap array menampung hingga 134 juta nilai.

## Yang berbeda dari MATLAB

- Perintah plot menaruh opsinya dalam pemanggilan: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` dan sejenisnya diterima tetapi tidak melakukan apa-apa.
- `input` dan `keyboard` tidak didukung: skrip tidak dapat berhenti untuk mengajukan pertanyaan.
- Tidak ada toolbox; yang tersedia adalah [pustaka analisis](topic:craftscript-library) dan fungsi bawaan.
