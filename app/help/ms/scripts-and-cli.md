---
title: Skrip dan baris arahan
summary: Format skrip PartCraft (.pcscript) yang menulis keseluruhan bahagian sebagai teks yang boleh dibaca, dan alat baris arahan partcraft yang membina, menukar, mengundurkan dan menyemak bahagian tanpa skrin.
keywords: skrip, pcscript, teks, baris arahan, cli, terminal, kelompok, automasi, semak, lint, bina, eksport, kawalan versi, beza, skrip berparameter
from: c56df222
---

Pemodelan yang teliti lebih bergantung pada disiplin daripada butang. Bahagian yang ditulis sebagai teks boleh dibaca, disemak, dibandingkan baris demi baris dan dibina semula oleh skrip. PartCraft berfungsi dua hala: mana-mana bahagian boleh ditulis sebagai skrip, dan skrip membina bahagian.

## Dalam aplikasi

Pada tab {{ui:Parameter}}, di bawah **Skrip**:

- {{ui:Simpan sebagai skrip}} memuat turun bahagian yang terbuka sebagai `<nama>.pcscript`.
- {{ui:Buka skrip}} membina bahagian dari fail `.pcscript`. Kesilapan dilaporkan dengan nombor barisnya dan tiada apa yang digantikan.

## Format skrip

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Peraturannya:

- Baris di tepi kiri memulakan satu pernyataan: `pcscript`, `part`, `param`, jenis ciri (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` dan jenis yang lebih baharu) diikuti namanya, atau `rollback <ciri>`.
- Baris yang diinden ialah tetapan bagi pernyataan di atasnya. Tetapan yang berdiri sendiri (`through`, `reverse`, `suppressed`) bermaksud ya.
- Tetapan nombor ialah nombor, atau `=` dan ungkapan, yang menjadikannya persamaan: `depth = thick`.
- Dalam lakaran: `on` menamakan satah (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometri ialah `point <nama> x, y`, `line <nama> <titik> <titik>`, `circle <nama> <pusat> <jejari>`, `arc <nama> <pusat> <mula> <tamat>` (lawan arah jam) atau `spline <nama> fit|control <titik>`; kekangan ialah jenisnya dan nama yang disambungkannya (`O` ialah asalan); dimensi berakhir dengan nilainya atau `= ungkapan`.
- Tetapan pilihan bagi baris geometri atau kekangan diletakkan dalam kurungan segi di hujung, dipisahkan dengan `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` memulakan ulasan (di awal baris atau selepas ruang). Nama dengan ruang diletakkan dalam "tanda petikan berganda".
- ID ciri dikira dari f1 mengikut susunan ditulis. Rujukan tepi dan muka menggunakannya, contohnya `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Tetapan yang format tidak mempunyai perkataan untuknya ditulis `json` dan nilai; ia dibaca semula sebagaimana adanya.

Apabila disimpan dari aplikasi, skrip merangkumi setiap tetapan, jadi ia dibuka sebagai bahagian yang sama. Pepejal STEP yang diimport ditulis di dalam skrip dari aplikasi, dan sebagai fail `.step` berasingan yang dinamakan oleh `step-file` dari baris arahan.

## Alat baris arahan

Alat ini berjalan pada komputer dengan Node.js 24, dari salinan sumber CadCraft: `node tools/partcraft-cli/partcraft.mjs <arahan>`. Ia alat pembangun dan menggunakan modul yang sama dengan aplikasi. Bahagian ialah fail `.partcraft.json` atau skrip `.pcscript`.

| Arahan | Apa yang dilakukannya |
|---|---|
| `info <part>` | Ciri, parameter, bar rollback, isipadu dan saiz pepejal yang dibina |
| `params <part>` | Setiap parameter dan persamaan dengan nilainya |
| `set <part> width=150 Base.depth==thick` | Ke hadapan: tukar parameter, pautkan nombor (`==` atau ungkapan), tetapkan nombor biasa |
| `drive <part> Base.depth=12` | Ke belakang: selesaikan parameter di sebalik nombor yang dipacu (`--prefer width` memilih satu) |
| `build <part> --out x.step` | Tulis `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` atau makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Satu fail bagi setiap baris jadual reka bentuk |
| `variants <part> --out-dir d` atau `--zip f.zip` | Setiap konfigurasi sebagai STEP, IFC, DWG dan pratonton, jadual varian dan item pustaka (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); lihat [Buat pek varian](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skrip ke bahagian |
| `to-script <part> -o part.pcscript` | Bahagian ke skrip |
| `rollback <part> [<ciri>]`, `forward <part> [--end]` | Gerakkan bar rollback dalam fail |
| `check <part> [--strict]` | Semakan disiplin (di bawah) |

`build` juga menerima `--set name=value` (untuk binaan ini sahaja) dan `--upto <ciri>`. Setiap arahan menerima `--json`. Kod keluar: 0 baik, 1 masalah dijumpai, 2 arahan ditaip dengan salah. Skrip tidak pernah ditulis semula di tempatnya: berikan `-o` untuk menyimpan salinan yang diubah.

## Semakan

`check` melaporkan apa yang menyukarkan bahagian diubah kemudian:

| Penemuan | Dikira sebagai |
|---|---|
| Lakaran yang ditakrifkan berlebihan (kekangan bercanggah atau berulang) | ralat |
| Ciri yang tidak dapat dibina | ralat |
| Parameter atau persamaan dengan ralat, atau parameter yang saling bergantung | ralat |
| Lakaran yang kurang ditakrifkan, dengan darjah kebebasannya | amaran |
| Nombor yang ditaip terus ke dalam ciri dan dimensi yang tiada parameter memacunya | amaran |
| Parameter yang tiada apa gunakan | amaran |
| Ciri yang digantung; bar rollback tidak berada di hujung | amaran |

`--strict` menjadikan setiap amaran sebagai ralat, supaya skrip binaan boleh menolak bahagian yang tidak dipacu sepenuhnya.

:::note
Output makro `.swb` adalah untuk pemodel bahagian yang kebanyakan bengkel gunakan: apabila dijalankan di dalam program itu, ia membina bahagian di sana. Ia belum dijalankan di dalam program itu di sini (ia tidak tersedia pada pelayan kami), jadi anggapkannya belum diuji.
:::
