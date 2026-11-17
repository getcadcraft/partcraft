---
title: Skrip dan baris perintah
summary: Format skrip PartCraft (.pcscript) yang menulis seluruh part sebagai teks yang bisa dibaca, dan alat baris perintah partcraft yang membangun, mengubah, mengembalikan dan memeriksa part tanpa layar.
keywords: skrip, pcscript, teks, baris perintah, cli, terminal, batch, otomatisasi, periksa, lint, bangun, ekspor, kontrol versi, diff, skrip parametrik
from: c56df222
---

Pemodelan yang cermat lebih soal disiplin daripada soal tombol. Part yang ditulis sebagai teks bisa dibaca, ditinjau, dibandingkan baris per baris, dan dibangun ulang oleh skrip. PartCraft mendukung keduanya: part apa pun bisa ditulis sebagai skrip, dan skrip membangun part.

## Di dalam app

Di tab {{ui:Parameter}}, di bawah **Skrip**:

- {{ui:Simpan sebagai skrip}} mengunduh part yang terbuka sebagai `<nama>.pcscript`.
- {{ui:Buka skrip}} membangun part dari file `.pcscript`. Kesalahan dilaporkan beserta nomor barisnya, dan tidak ada yang diganti.

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

Aturannya:

- Baris di tepi kiri memulai sebuah pernyataan: `pcscript`, `part`, `param`, jenis fitur (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` dan jenis yang lebih baru) yang diikuti namanya, atau `rollback <fitur>`.
- Baris yang menjorok adalah pengaturan dari pernyataan di atasnya. Pengaturan yang berdiri sendiri (`through`, `reverse`, `suppressed`) berarti ya.
- Pengaturan angka adalah angka, atau `=` dan sebuah ekspresi, yang membuat persamaan: `depth = thick`.
- Dalam sketsa: `on` menamai bidang (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometri adalah `point <nama> x, y`, `line <nama> <titik> <titik>`, `circle <nama> <pusat> <radius>`, `arc <nama> <pusat> <awal> <akhir>` (berlawanan arah jarum jam) atau `spline <nama> fit|control <titik>`; relasi adalah jenisnya dan nama-nama yang dihubungkannya (`O` adalah titik asal); dimensi diakhiri dengan nilainya atau `= ekspresi`.
- Pengaturan opsional dari baris geometri atau relasi ditulis dalam kurung siku di akhir, dipisahkan `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` memulai komentar (di awal baris atau setelah spasi). Nama yang berisi spasi ditulis dalam "tanda kutip ganda".
- Nomor id fitur dihitung dari f1 sesuai urutan penulisan. Referensi tepi dan muka memakainya, misalnya `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Pengaturan yang tidak punya kata dalam format ditulis `json` lalu nilainya; keduanya dibaca kembali apa adanya.

Disimpan dari app, skrip menyertakan setiap pengaturan, sehingga terbuka sebagai part yang sama. Solid STEP impor ditulis di dalam skrip dari app, dan sebagai file `.step` terpisah yang dinamai oleh `step-file` dari baris perintah.

## Alat baris perintah

Alat ini berjalan di komputer dengan Node.js 24, dari salinan sumber CadCraft: `node tools/partcraft-cli/partcraft.mjs <perintah>`. Ini alat pengembang dan memakai modul yang sama dengan app. Part berupa file `.partcraft.json` atau skrip `.pcscript`.

| Perintah | Apa yang dilakukan |
|---|---|
| `info <part>` | Fitur, parameter, bilah rollback, volume dan ukuran solid yang dibangun |
| `params <part>` | Setiap parameter dan persamaan beserta nilainya |
| `set <part> width=150 Base.depth==thick` | Maju: ubah parameter, tautkan angka (`==` atau ekspresi), atur angka biasa |
| `drive <part> Base.depth=12` | Mundur: selesaikan parameter di balik angka yang digerakkan (`--prefer width` memilih salah satu) |
| `build <part> --out x.step` | Menulis `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` atau makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Satu file per baris tabel desain |
| `variants <part> --out-dir d` atau `--zip f.zip` | Setiap konfigurasi sebagai STEP, IFC, DWG dan pratinjau, tabel varian dan item pustaka (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); lihat [Membuat paket varian](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skrip menjadi part |
| `to-script <part> -o part.pcscript` | Part menjadi skrip |
| `rollback <part> [<fitur>]`, `forward <part> [--end]` | Menggeser bilah rollback di dalam file |
| `check <part> [--strict]` | Pemeriksaan disiplin (di bawah) |

`build` juga menerima `--set nama=nilai` (hanya untuk build ini) dan `--upto <fitur>`. Setiap perintah menerima `--json`. Kode keluar: 0 baik, 1 ditemukan masalah, 2 perintah salah ketik. Skrip tidak pernah ditulis ulang di tempat: berikan `-o` untuk menyimpan salinan yang sudah diubah.

## Pemeriksaan

`check` melaporkan hal-hal yang membuat part sulit diubah nanti:

| Temuan | Dihitung sebagai |
|---|---|
| Sketsa yang terdefinisi berlebih (relasi yang bertentangan atau berulang) | kesalahan |
| Fitur yang tidak bisa dibangun | kesalahan |
| Parameter atau persamaan dengan kesalahan, atau parameter yang saling memakai | kesalahan |
| Sketsa yang kurang terdefinisi, beserta derajat kebebasannya | peringatan |
| Angka yang diketik langsung ke fitur dan dimensi yang tidak digerakkan parameter mana pun | peringatan |
| Parameter yang tidak dipakai apa pun | peringatan |
| Fitur yang dinonaktifkan; bilah rollback tidak berada di akhir | peringatan |

`--strict` membuat setiap peringatan menjadi kesalahan, sehingga skrip pembangunan dapat menolak part yang belum digerakkan sepenuhnya oleh parameter.

:::note
Keluaran makro `.swb` ditujukan untuk pemodel part yang dipakai kebanyakan bengkel: dijalankan di dalam program itu, makro membangun part di sana. Makro belum dijalankan di program itu di sini (program itu tidak tersedia di server kami), jadi anggap belum teruji.
:::
