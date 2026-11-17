---
title: Bahasa CraftScript
summary: CraftScript dalam satu halaman: matriks, julat dan pengindeksan, operator, aliran kawalan, fungsi, struktur dan sel, komen, gema, ralat dan bajet langkah, serta perbezaannya daripada MATLAB.
keywords: CraftScript, bahasa, sintaks, matriks, tatasusunan, vektor, tensor, indeks, end, titik bertindih, julat, operator, unsur demi unsur, transpos, if, for, while, switch, try, catch, fungsi, fungsi tanpa nama, struktur, sel, komen, gema, titik koma, MATLAB, Octave, port
from: d072b7d5
---

CraftScript ialah bahasa matriks yang ditulis supaya mudah dibaca seperti MATLAB, jadi kebanyakan kod berangka klasik (contohnya kod pengoptimuman topologi 88 baris) berjalan dengan sedikit perubahan sahaja. Ia berjalan dalam [ruang kerja Skrip](topic:craftscript) dan dari baris arahan.

## Nilai

| Jenis | Contoh | Nota |
|---|---|---|
| Nombor, tatasusunan | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Setiap nombor ialah tatasusunan (satu 1×1). Tatasusunan disimpan lajur demi lajur, sehingga 8 dimensi |
| Logik | `A > 2`, `true` | Tatasusunan benar/palsu; boleh digunakan sebagai indeks |
| Teks | `'beam'`, `"beam"` | |
| Matriks jarang | `sparse(i, j, v, n, n)` | Untuk matriks kekukuhan |
| Jejaring, medan, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Apa yang dilukis oleh `show` |
| Struktur | `s.E = 210e3` | Medan bernama |
| Sel | `c = {1, 'two', [3 4]}` | Senarai mana-mana nilai |
| Pemegang fungsi | `f = @(x) x.^2` | |

## Tatasusunan dan pengindeksan

- Julat: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Pengindeksan bermula pada 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (satu lajur penuh), `A(:)` (semua sebagai satu lajur), `v(v > 0)` (pengindeksan logik).
- Memberi nilai melepasi hujung akan membesarkan tatasusunan, seperti dalam MATLAB: `v(10) = 1`.

## Operator

- `+ - * / \ ^` ialah operasi matriks (`A \ b` menyelesaikan); `.* ./ .^` berfungsi unsur demi unsur. `'` mentranspos.
- Perbandingan `== ~= < <= > >=`; logik `& | ~` (unsur demi unsur) dan `&& ||` (litar pintas).

## Aliran kawalan dan fungsi

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

Fungsi diletakkan dalam skrip selepas arahannya, atau dalam tab skripnya sendiri yang dinamakan sempena fungsi itu:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nama dicari mengikut susunan ini: pembolehubah, skrip dalam bahagian ini dengan nama itu, fungsi pustaka, fungsi terbina dalam.

## Gema, komen, output

- Penyataan tanpa `;` mencetak nilainya; `;` menyenyapkannya.
- `%` memulakan komen; `%{` dan `%}` pada baris tersendiri mengkomenkan baris di antara keduanya.
- `disp(x)`, `fprintf('%g\n', x)` dan `display(x)` mencetak ke konsol.

## Ralat dan had

- Ralat menerangkan apa yang salah dengan perkataan mudah dan memberi baris (serta rantai panggilan fungsi).
- Setiap larian mempunyai bajet langkah (Pilihan larian dalam panel); gelung tanpa henti akan berhenti dengan mesej, atau tekan {{ui:Henti}}.
- Tatasusunan memuatkan sehingga 134 juta nilai setiap satu.

## Tidak seperti MATLAB

- Arahan plot meletakkan pilihannya dalam panggilan: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` dan yang serupa diterima dan tidak melakukan apa-apa.
- `input` dan `keyboard` tidak disokong: skrip tidak boleh berhenti untuk bertanya soalan.
- Tiada kotak alat; [pustaka analisis](topic:craftscript-library) dan fungsi terbina dalam ialah apa yang ada.
