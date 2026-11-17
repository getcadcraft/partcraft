---
title: Pos pemproses yang boleh anda sunting
summary: Pos ialah fail teks ringkas yang menukar laluan alat kepada G-code untuk kawalan anda. Salin salah satu pos terbina dalam, tukar baris yang anda perlukan (nombor baris, tukar alat, gerakan rumah, kod tamat), lihat G-code yang ditulisnya semasa anda menaip, dan simpannya bersama bahagian.
keywords: pos, pos pemproses, postprocessor, G-code, NC, GRBL, LinuxCNC, sunting pos, pos tersuai, cpost, tukar alat, M6, G43, kitaran tetap, nombor baris, modal, peristiwa, pembolehubah
from: 36ab8a38
---

Laluan alat yang sama perlu ditulis secara berbeza untuk kawalan yang berbeza: nombor baris atau tiada, `M6` atau jeda, `G28` atau `G53`, `M30` atau `M2`. **Pos** ialah teks ringkas yang menyatakan caranya. Tiga pos terbina dalam PartCraft (gaya Fanuc, GRBL dan LinuxCNC) ditulis dalam format ini, jadi pos anda sendiri boleh bermula sebagai salinan salah satu daripadanya.

Semak output dalam simulator mesin anda sendiri sebelum memotong, dan jalankan dahulu di udara di atas bahan. Pos terbina dalam menulis tepat apa yang ditulisnya sebelum format ini wujud (ujian membandingkan output mereka bait demi bait pada ratusan program), tetapi tiada apa di sini telah dibuktikan pada mesin anda, dan pos yang anda ubah menjadi tanggungjawab anda untuk dibuktikan.

## Buat satu

Dalam Manufacture, di bawah **Pos**:

- {{ui:Sunting pos…}} pada kawalan terbina dalam membuka **salinan anda sendiri**. Pada pos anda sendiri, ia membuka pos itu.
- {{ui:Pos baharu…}} bermula daripada pos kosong kecil dengan setiap peristiwa di dalamnya.
- {{ui:Import fail pos…}} membaca fail teks `.cpost` (fail yang anda dapat daripada **Simpan sebagai fail…** dalam penyunting).

Penyunting memaparkan teks, satu baris yang menyatakan sama ada ia boleh dibaca (dan baris mana yang salah), serta G-code yang ditulis pos, semasa anda menaip. **Pratonton dengan** memilih program sampel kecil yang menjalankan setiap peristiwa, atau program bahagian ini sendiri. {{ui:Simpan}} menyimpan pos dalam fail bahagian (sehingga 20 pos) dan memilihnya sebagai kawalan. Pos bergerak bersama bahagian; untuk guna dalam bahagian lain, simpan sebagai fail dan import di sana.

## Rupa pos

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

Baris yang bermula dengan `//` dan baris kosong diabaikan. Di bahagian atas ialah tetapan; kemudian satu blok `on <event>` untuk setiap peristiwa, ditutup dengan `end`. Peristiwa yang anda tinggalkan tidak menulis apa-apa.

| Tetapan | Maksud |
|---|---|
| `post <id>` | ID pos: huruf, digit, `-` dan `_` |
| `name <text>` | Apa yang ditunjukkan dalam senarai Kawalan |
| `extension <ext>` | Sambungan fail: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … pada setiap baris `emit`, atau tiada |
| `decimal-point yes` / `no` | `10.` dan bukannya `10` (ulasan tidak pernah membawa titik) |
| `canned-cycles yes` / `no` | `no`: lubang ditulis sebagai gerakan G0/G1 yang diwakilinya |
| `modal <group> <words>` | Perkataan bagi satu kumpulan (`modal motion G0 G1 G2 G3`) yang hanya ditulis apabila ia berubah |

## Peristiwa

Ia berjalan mengikut susunan ini bagi satu program: `start`; kemudian untuk setiap operasi `operation`, `tool-change` (apabila alat bertukar), `spindle` (apabila kelajuan berubah), `approach` (gerakan naik ke titik pertama, sebelum `rapid` pertama), `coolant-on`, kemudian gerakannya sebagai `rapid`, `feed` dan `arc`, dan setiap kitaran tetap sebagai `cycle-start`, satu `cycle-hole` bagi setiap lubang dan `cycle-end`; akhir sekali `end`.

Setiap peristiwa boleh guna pembolehubah jenis gerakannya sendiri, ditulis `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), stok (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operasi (`op.name`, `op.type`), `rpm`, titik bagi satu gerakan (`x`, `y`, `z`, `f`, dan `moved`: benar apabila satu paksi berubah), lengkok (`arc.g` 2 atau 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) dan lubang (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Senarai **Peristiwa dan pembolehubah** dalam penyunting menunjukkan peristiwa mana yang nampak apa. Keadaan yang boleh dibaca dan ditetapkan: `cool`, `offset`, dan `at.x`, `at.y`, `at.z`, `at.f` (nilai terakhir yang ditulis).

## Pernyataan

| Pernyataan | Fungsi |
|---|---|
| `raw TEXT` | Baris tepat seperti yang ditaip (tanpa nombor baris) |
| `comment TEXT` | `(TEXT)` dengan aksara bukan ASCII dan kurungan dikeluarkan |
| `emit WORD WORD …` | Baris perkataan; perkataan yang keluar kosong dibuang; tiada perkataan, tiada baris |
| `word WORD …` | Tambah perkataan pada baris yang sedang dibina; `emit` kosong menamatkannya |
| `if EXPR` … `else` … `end` | Syarat: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, jika tidak b) |
| `for tool in tools` … `end` | Sekali untuk setiap alat yang digunakan oleh program |
| `set NAME EXPR` | Ingat satu nilai (`set offset tool.number`) |
| `reset NAME …` | Lupakan perkataan modal (satu kumpulan, huruf alamat seperti `Z`, atau `at.z`) |
| `do rapid X Y Z` | Jalankan peristiwa `rapid` untuk satu titik |

Perkataan ialah teks yang ditaip dengan tempat `{variable|filter}`. Penapis ialah `upper`, `lower`, `pad:N` (isi dengan sifar), `cut:N` (N aksara pertama), `safe` (ASCII selamat untuk ulasan) dan `int`. Perkataan yang berakhir `~` ialah **modal**: ia hanya ditulis apabila berbeza daripada apa yang terakhir ditulis (`G1~`, `X{x}~`). Perkataan yang berakhir `~!` ditulis setiap kali dan masih diingati. Nama yang bukan pembolehubah ialah teks biasa (`G81`, `mist`). Nombor dibundarkan kepada 0.001 mm dan ditulis tanpa sifar di hujung.

## Perkara yang pos tidak boleh buat

Ia menentukan cara gerakan ditulis, tidak lebih. Ia tidak boleh mengubah laluan alat, menyusun semula operasi, memecahkan lengkok, menambah paksi, mengetahui julat gerakan atau kinematik mesin anda, atau mengira koordinat (tiada `+`). Probing, kitaran hayat alat dan subprogram, output paksi ke-4 dan ke-5, serta kod larik belum dibina. Fail pos gaya `.cps` daripada program lain tidak boleh dimuatkan: ini format yang berbeza dan lebih ringkas.
