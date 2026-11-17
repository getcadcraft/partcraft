---
title: Post processor yang bisa Anda sunting
summary: Post adalah file teks singkat yang mengubah jalur pahat menjadi G-code untuk kontrol Anda. Salin salah satu post bawaan, ubah baris yang Anda perlukan (nomor baris, pergantian pahat, gerakan home, kode akhir), lihat G-code yang ditulisnya saat Anda mengetik, dan simpan bersama part.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, sunting post, post kustom, cpost, pergantian pahat, M6, G43, canned cycle, nomor baris, modal, event, variabel
from: 36ab8a38
---

Jalur pahat yang sama harus ditulis berbeda untuk kontrol yang berbeda: nomor baris atau tanpanya, `M6` atau jeda, `G28` atau `G53`, `M30` atau `M2`. **Post** adalah teks singkat yang menjelaskan caranya. Tiga post bawaan PartCraft (gaya Fanuc, GRBL, dan LinuxCNC) ditulis dalam format ini, sehingga post milik Anda bisa dimulai dari salinan salah satunya.

Periksa keluaran di simulator mesin Anda sebelum memotong, dan jalankan di udara di atas stok lebih dulu. Post bawaan menulis persis seperti yang ditulisnya sebelum format ini ada (pengujian membandingkan keluarannya byte demi byte pada ratusan program), tetapi belum ada yang dibuktikan di mesin Anda, dan post yang Anda ubah menjadi tanggung jawab Anda untuk dibuktikan.

## Membuat post

Di Manufaktur, di bawah **Post**:

- {{ui:Edit post…}} pada kontrol bawaan membuka **salinan milik Anda** darinya. Pada post milik Anda sendiri, perintah ini membuka post tersebut.
- {{ui:Post baru…}} memulai dari post kosong kecil yang berisi setiap event.
- {{ui:Impor file post…}} membaca file teks `.cpost` (file yang Anda dapat dari **Simpan sebagai file…** di editor).

Editor menampilkan teks, baris yang menyatakan apakah teks terbaca (dan baris mana yang salah), serta G-code yang ditulis post saat Anda mengetik. **Pratinjau dengan** memilih program contoh kecil yang menjalankan setiap event, atau program milik part ini. {{ui:Simpan}} menyimpan post di file part (hingga 20 post) dan memilihnya sebagai kontrol. Post ikut dengan part; untuk memakai post di part lain, simpan sebagai file lalu impor di sana.

## Bentuk sebuah post

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Baris yang diawali `//` dan baris kosong diabaikan. Di bagian atas ada pengaturan; lalu satu blok `on <event>` untuk setiap event, ditutup dengan `end`. Event yang Anda hilangkan tidak menulis apa pun.

| Pengaturan | Arti |
|---|---|
| `post <id>` | Id post: huruf, angka, `-` dan `_` |
| `name <text>` | Yang ditampilkan di daftar Kontrol |
| `extension <ext>` | Ekstensi file: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … di setiap baris `emit`, atau tidak ada |
| `decimal-point yes` / `no` | `10.` alih-alih `10` (komentar tidak pernah memakai titik) |
| `canned-cycles yes` / `no` | `no`: lubang ditulis sebagai gerakan G0/G1 yang diwakilinya |
| `modal <group> <words>` | Kata dari satu grup (`modal motion G0 G1 G2 G3`) yang hanya ditulis saat berubah |

## Event

Event berjalan dalam urutan ini untuk sebuah program: `start`; lalu untuk setiap operasi `operation`, `tool-change` (saat pahat berganti), `spindle` (saat kecepatan berubah), `approach` (gerakan ke titik pertama, sebelum rapid pertama), `coolant-on`, lalu gerakannya sebagai `rapid`, `feed` dan `arc`, dan setiap siklus tetap sebagai `cycle-start`, satu `cycle-hole` untuk setiap lubang, dan `cycle-end`; terakhir `end`.

Setiap event dapat memakai variabel dari jenis gerakannya sendiri, ditulis `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), stok (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), pahat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operasi (`op.name`, `op.type`), `rpm`, titik sebuah gerakan (`x`, `y`, `z`, `f`, dan `moved`: true saat sebuah sumbu berubah), busur (`arc.g` 2 atau 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) dan lubang (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Daftar **Event dan variabel** di editor menampilkan event mana yang melihat apa. Status yang bisa dibaca dan diatur: `cool`, `offset`, dan `at.x`, `at.y`, `at.z`, `at.f` (nilai terakhir yang ditulis).

## Pernyataan

| Pernyataan | Fungsi |
|---|---|
| `raw TEXT` | Satu baris persis seperti diketik (tanpa nomor baris) |
| `comment TEXT` | `(TEXT)` dengan karakter non-ASCII dan tanda kurung dibuang |
| `emit WORD WORD …` | Satu baris kata; kata yang hasilnya kosong dilewati; tanpa kata, tanpa baris |
| `word WORD …` | Menambahkan kata ke baris yang sedang disusun; `emit` tanpa kata mengakhirinya |
| `if EXPR` … `else` … `end` | Kondisi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, jika tidak b) |
| `for tool in tools` … `end` | Sekali untuk setiap pahat yang dipakai program |
| `set NAME EXPR` | Mengingat sebuah nilai (`set offset tool.number`) |
| `reset NAME …` | Melupakan kata modal (satu grup, huruf alamat seperti `Z`, atau `at.z`) |
| `do rapid X Y Z` | Menjalankan event `rapid` untuk sebuah titik |

Kata adalah teks yang diketik dengan lubang `{variable|filter}`. Filternya adalah `upper`, `lower`, `pad:N` (isi nol), `cut:N` (N karakter pertama), `safe` (ASCII aman untuk komentar), dan `int`. Kata yang diakhiri `~` adalah **modal**: ia hanya ditulis saat berbeda dari yang terakhir ditulis (`G1~`, `X{x}~`). Kata yang diakhiri `~!` ditulis setiap kali dan tetap diingat. Nama yang bukan variabel adalah teks biasa (`G81`, `mist`). Angka dibulatkan ke 0.001 mm dan ditulis tanpa angka nol di belakang.

## Yang tidak bisa dilakukan post

Post hanya menentukan cara gerakan ditulis, tidak lebih. Post tidak dapat mengubah jalur pahat, mengurutkan operasi, memecah busur, menambah sumbu, mengetahui jangkauan atau kinematika mesin Anda, atau melakukan aritmatika pada koordinat (tidak ada `+`). Probing, siklus umur pahat dan subprogram, keluaran sumbu ke-4 dan ke-5, serta kode mesin bubut belum dibuat. File post bergaya `.cps` dari program lain tidak dapat dimuat: ini format yang berbeda dan lebih sederhana.
