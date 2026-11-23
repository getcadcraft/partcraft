---
title: Post processor yang dapat Anda sunting
summary: Post adalah file teks pendek yang mengubah jalur pahat menjadi G-code untuk kontrol Anda. Salin salah satu post bawaan, ubah baris yang Anda perlukan (nomor baris, pergantian alat, gerakan homing, kode akhir), lihat G-code yang ditulisnya saat Anda mengetik, dan simpan bersama benda.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, edit post, post kustom, cpost, ganti alat, M6, G43, siklus baku, nomor baris, modal, event, variabel
from: c78d0cae
---

Jalur pahat yang sama harus ditulis secara berbeda untuk kontrol yang berbeda: nomor baris atau tidak, `M6` atau jeda, `G28` atau `G53`, `M30` atau `M2`. Sebuah **post** adalah teks pendek yang menyatakan caranya. Tiga post bawaan PartCraft (gaya Fanuc, GRBL, dan LinuxCNC) ditulis dalam format ini, sehingga post milik Anda dapat dimulai dari salinan salah satunya.

Periksa keluaran di simulator mesin Anda sendiri sebelum memotong, dan jalankan lebih dulu di udara di atas stok. Post bawaan menulis persis apa yang mereka tulis sebelum format ini ada (tes membandingkan keluarannya byte demi byte pada ratusan program), tetapi tidak ada di sini yang terbukti pada mesin Anda, dan post yang Anda ubah menjadi tanggung jawab Anda untuk dibuktikan.

## Membuat post

Di Manufaktur, di bawah **Post**:

- {{ui:Edit post…}} pada kontrol bawaan membuka **salinan milik Anda** dari post tersebut. Pada post milik Anda sendiri, perintah ini membuka post itu.
- {{ui:Post baru…}} memulai dari post kosong kecil dengan setiap event di dalamnya.
- {{ui:Impor file post…}} membaca file teks `.cpost` (file yang Anda dapatkan dari **Simpan sebagai file…** di editor).

Editor menampilkan teks, baris yang menyatakan apakah post dapat dibaca (dan baris mana yang salah), serta G-code yang ditulis post saat Anda mengetik. **Pratinjau dengan** memilih program contoh kecil yang menjalankan setiap event, atau program milik benda ini. {{ui:Simpan}} menyimpan post di file benda (hingga 20 post) dan memilihnya sebagai kontrol. Post ikut berpindah bersama benda; untuk memakainya di benda lain, simpan sebagai file dan impor di sana.

## Seperti apa sebuah post

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

Baris yang diawali `//` dan baris kosong diabaikan. Di bagian atas terdapat pengaturan; lalu satu blok `on <event>` untuk setiap event, ditutup dengan `end`. Event yang Anda tinggalkan tidak menulis apa pun.

| Pengaturan | Artinya |
|---|---|
| `post <id>` | Id post: huruf, angka, `-` dan `_` |
| `name <text>` | Yang ditampilkan dalam daftar Kontrol |
| `extension <ext>` | Ekstensi file: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … pada setiap baris `emit`, atau tidak sama sekali |
| `decimal-point yes` / `no` | `10.` alih-alih `10` (komentar tidak pernah memuat titik) |
| `canned-cycles yes` / `no` | `no`: lubang ditulis sebagai gerakan G0/G1 yang diwakilinya |
| `modal <group> <words>` | Kata dari suatu grup (`modal motion G0 G1 G2 G3`) yang hanya ditulis saat berubah |

## Event

Event berjalan dalam urutan ini untuk sebuah program: `start`; lalu untuk setiap operasi `operation`, `tool-change` (saat alat berganti), `spindle` (saat kecepatan berubah), `approach` (gerakan ke titik pertama, sebelum rapid pertama), `coolant-on`, lalu gerakannya sebagai `rapid`, `feed`, dan `arc`, dan setiap siklus baku sebagai `cycle-start`, satu `cycle-hole` untuk setiap lubang, dan `cycle-end`; terakhir `end`.

Event lain, untuk hal-hal yang melampaui tiga sumbu (post tanpa event itu menolak program semacam ini dan menyebut event yang tidak dimilikinya):

| Event | Kapan | Variabelnya |
|---|---|---|
| `index` | Sebelum operasi yang arah alatnya berbeda dari yang terakhir, dan sebelum operasi pertama pada mesin dengan sumbu rotari | `rot.a`, `rot.b`, `rot.c` (posisi yang dituju; kosong untuk sumbu yang tidak dimiliki mesin), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Gerakan operasi yang sumbu rotarinya bergerak saat memotong | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes bila feed harus berwaktu invers), `invf` (1/menit) |
| `rotary-end` | Setelah operasi seperti itu | |
| `probe-move` | Gerakan yang berhenti saat probe tersentuh | `x`, `y`, `z`, `f`, `probe.n` (1 sampai 4), `probe.axis` (x, y, atau z), `probe.k` (1, 2, atau 3) |
| `probe-set` | Setelah sentuhan dari satu siklus probing | `probe.kind` (`"z"`, `"x"`, `"y"` atau `centre`), `probe.action` (`set` atau `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Gerakan ulir pada mesin bubut | `x`, `z`, `thread.lead` |

Juga untuk setiap event: `kin` (none, a, b, ac, bc), `rotary` dan `tcp` (yes atau no, dari mesin di Setup), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` dan `op.turn` dari operasi, dan pada mesin bubut `spin.mode` (css atau rpm), `spin.css`, `spin.max`, dan `tool.nose`. Kata huruf yang nilainya kosong, seperti `A{rot.a}` pada mesin tanpa sumbu A, dihilangkan dari baris. Bandingkan x, y, dan z sebagai teks dalam tanda kutip (`if probe.kind == "z"`): tanpa kutip, mereka adalah koordinat gerakan.

Dua baris lagi di bagian atas post menjadikannya post mesin bubut: `machine lathe` (ia kemudian hanya menulis X dan Z, dan menolak jalur frais seperti post frais menolak jalur bubut) dan `lathe-x diameter` atau `lathe-x radius`.

Setiap event dapat memakai variabel dari jenis gerakannya sendiri, ditulis `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), stok (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operasi (`op.name`, `op.type`), `rpm`, titik sebuah gerakan (`x`, `y`, `z`, `f`, dan `moved`: true bila sebuah sumbu berubah), busur (`arc.g` 2 atau 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`), dan lubang (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Daftar **Event dan variabel** di editor menunjukkan event mana yang melihat apa. Keadaan yang dapat Anda baca dan atur: `cool`, `offset`, serta `at.x`, `at.y`, `at.z`, `at.f` (nilai terakhir yang ditulis).

## Pernyataan

| Pernyataan | Apa yang dilakukannya |
|---|---|
| `raw TEXT` | Satu baris persis seperti yang diketik (tanpa nomor baris) |
| `comment TEXT` | `(TEXT)` dengan karakter non-ASCII dan kurung dihapus |
| `emit WORD WORD …` | Satu baris kata; kata yang keluar kosong dilewati; tanpa kata, tanpa baris |
| `word WORD …` | Menambah kata ke baris yang sedang dibangun; `emit` kosong mengakhirinya |
| `if EXPR` … `else` … `end` | Kondisi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, atau b jika a kosong) |
| `for tool in tools` … `end` | Sekali untuk setiap alat yang dipakai program |
| `set NAME EXPR` | Mengingat sebuah nilai (`set offset tool.number`) |
| `reset NAME …` | Melupakan kata modal (sebuah grup, huruf alamat seperti `Z`, atau `at.z`) |
| `do rapid X Y Z` | Menjalankan event `rapid` untuk sebuah titik |

Sebuah kata adalah teks yang diketik dengan lubang `{variable|filter}`. Filternya adalah `upper`, `lower`, `pad:N` (isi nol), `cut:N` (N karakter pertama), `safe` (ASCII aman untuk komentar), dan `int`. Kata yang diakhiri `~` bersifat **modal**: hanya ditulis bila berbeda dari yang terakhir ditulis (`G1~`, `X{x}~`). Kata yang diakhiri `~!` ditulis setiap kali dan tetap diingat. Nama yang bukan variabel adalah teks biasa (`G81`, `mist`). Angka dibulatkan ke 0.001 mm dan ditulis tanpa nol di belakang.

## Yang tidak dapat dilakukan post

Post hanya menentukan cara gerakan ditulis, tidak lebih. Ia tidak dapat mengubah jalur pahat, mengurutkan operasi, membagi busur, menambah sumbu, mengetahui jangkauan atau kinematika mesin Anda, atau melakukan aritmetika pada koordinat (tidak ada `+`). Posisi rotari berasal dari mesin yang dijelaskan di Setup, bukan dari post: post dapat mengubah tandanya atau hurufnya, tetapi bukan kinematikanya. Siklus umur alat dan subprogram belum dibuat. File post bergaya `.cps` dari program lain tidak dapat dimuat: ini format yang berbeda dan lebih sederhana.
