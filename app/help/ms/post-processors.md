---
title: Pasca-proses yang boleh disunting
summary: Pasca ialah fail teks pendek yang menukar laluan alat kepada G-code untuk kawalan anda. Salin salah satu pasca terbina, ubah baris yang anda perlukan (nombor baris, tukar alat, gerakan rumah, kod tamat), lihat G-code yang ditulisnya semasa anda menaip, dan simpannya bersama bahagian.
keywords: pasca, pasca-proses, postprocessor, G-code, NC, GRBL, LinuxCNC, sunting pos, pos tersuai, cpost, tukar alat, M6, G43, kitaran terbina, nombor baris, modal, peristiwa, pemboleh ubah
from: c78d0cae
---

Laluan alat yang sama mesti ditulis secara berbeza untuk kawalan yang berlainan: nombor baris atau tiada, `M6` atau henti, `G28` atau `G53`, `M30` atau `M2`. **Pasca** ialah teks pendek yang menyatakan caranya. Tiga pasca terbina PartCraft (gaya Fanuc, GRBL dan LinuxCNC) ditulis dalam format ini, jadi pasca milik anda boleh bermula sebagai salinan salah satu daripadanya.

Semak output dalam simulator mesin anda sendiri sebelum memotong, dan jalankan di udara di atas bahan mentah dahulu. Pasca terbina menulis tepat apa yang ditulisnya sebelum format ini wujud (ujian membandingkan outputnya bait demi bait pada ratusan program), tetapi tiada apa di sini telah dibuktikan pada mesin anda, dan pasca yang anda ubah ialah tanggungjawab anda untuk dibuktikan.

## Cipta satu

Dalam Pembuatan, di bawah **Pasca**:

- {{ui:Edit post…}} pada kawalan terbina membuka **salinan anda sendiri** daripadanya. Pada pasca milik anda, ia membuka pasca itu.
- {{ui:New post…}} bermula daripada pasca kosong kecil dengan setiap peristiwa di dalamnya.
- {{ui:Import post file…}} membaca fail teks `.cpost` (fail yang anda dapat daripada **Simpan sebagai fail…** dalam penyunting).

Penyunting menunjukkan teks, satu baris yang menyatakan sama ada ia boleh dibaca (dan baris mana yang salah), serta G-code yang ditulis pasca itu, semasa anda menaip. **Pratonton dengan** memilih program sampel kecil yang menjalankan setiap peristiwa, atau program bahagian ini sendiri. {{ui:Save}} menyimpan pasca dalam fail bahagian (sehingga 20 pasca) dan memilihnya sebagai kawalan. Pasca bergerak bersama bahagian; untuk menggunakannya dalam bahagian lain, simpan sebagai fail dan import di sana.

## Rupa pasca

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

Baris yang bermula dengan `//` dan baris kosong diabaikan. Di bahagian atas ialah tetapan; kemudian satu blok `on <event>` bagi setiap peristiwa, ditutup dengan `end`. Peristiwa yang anda tinggalkan tidak menulis apa-apa.

| Tetapan | Maksud |
|---|---|
| `post <id>` | ID pasca: huruf, digit, `-` dan `_` |
| `name <text>` | Apa yang ditunjukkan oleh senarai Kawalan |
| `extension <ext>` | Sambungan fail: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … pada setiap baris `emit`, atau tiada |
| `decimal-point yes` / `no` | `10.` dan bukannya `10` (ulasan tidak pernah membawa titik) |
| `canned-cycles yes` / `no` | `no`: lubang ditulis sebagai pergerakan G0/G1 yang diwakilinya |
| `modal <group> <words>` | Perkataan bagi satu kumpulan (`modal motion G0 G1 G2 G3`) yang hanya ditulis apabila ia berubah |

## Peristiwa

Ia berjalan mengikut susunan ini bagi satu program: `start`; kemudian bagi setiap operasi `operation`, `tool-change` (apabila alat bertukar), `spindle` (apabila kelajuan bertukar), `approach` (pergerakan naik ke titik pertama, sebelum pergerakan pantas pertama), `coolant-on`, kemudian pergerakannya sebagai `rapid`, `feed` dan `arc`, dan setiap kitaran terbina sebagai `cycle-start`, satu `cycle-hole` bagi setiap lubang dan `cycle-end`; akhir sekali `end`.

Lebih banyak peristiwa, untuk apa yang melampaui tiga paksi (pasca tanpa peristiwa itu menolak program sedemikian dan menamakan peristiwa yang tiada):

| Peristiwa | Bila | Pemboleh ubahnya |
|---|---|---|
| `index` | Sebelum operasi yang arah alatnya berbeza daripada yang terakhir, dan sebelum operasi pertama pada mesin dengan paksi putaran | `rot.a`, `rot.b`, `rot.c` (kedudukan untuk dituju; kosong bagi paksi yang tiada pada mesin), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Pergerakan satu operasi yang paksi putarannya bergerak semasa ia memotong | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ya apabila suapan mesti masa songsang), `invf` (1/minit) |
| `rotary-end` | Selepas operasi sedemikian | |
| `probe-move` | Pergerakan yang berhenti apabila probe tercetus | `x`, `y`, `z`, `f`, `probe.n` (1 hingga 4), `probe.axis` (x, y atau z), `probe.k` (1, 2 atau 3) |
| `probe-set` | Selepas sentuhan satu kitaran probing | `probe.kind` (`"z"`, `"x"`, `"y"` atau `centre`), `probe.action` (`set` atau `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Pergerakan benang pada larik | `x`, `z`, `thread.lead` |

Juga bagi setiap peristiwa: `kin` (none, a, b, ac, bc), `rotary` dan `tcp` (yes atau no, daripada mesin dalam Persediaan), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` dan `op.turn` operasi, dan pada larik `spin.mode` (css atau rpm), `spin.css`, `spin.max` dan `tool.nose`. Perkataan huruf yang nilainya kosong, seperti `A{rot.a}` pada mesin tanpa paksi A, ditinggalkan daripada baris. Bandingkan dengan x, y dan z sebagai teks dalam tanda petikan (`if probe.kind == "z"`): tanpa tanda petikan, ia ialah koordinat pergerakan.

Dua baris lagi di bahagian atas pasca menjadikannya pasca larik: `machine lathe` (ia kemudian hanya menulis X dan Z, dan menolak laluan pengisaran seperti pasca pengisaran menolak laluan pemesinan) dan `lathe-x diameter` atau `lathe-x radius`.

Setiap peristiwa boleh menggunakan pemboleh ubah jenis pergerakannya sendiri, ditulis `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), bahan mentah (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operasi (`op.name`, `op.type`), `rpm`, titik pergerakan (`x`, `y`, `z`, `f`, dan `moved`: benar apabila satu paksi berubah), lengkok (`arc.g` 2 atau 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) dan lubang (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Senarai **Peristiwa dan pemboleh ubah** dalam penyunting menunjukkan peristiwa mana yang melihat apa. Keadaan yang boleh anda baca dan tetapkan: `cool`, `offset`, dan `at.x`, `at.y`, `at.z`, `at.f` (nilai terakhir yang ditulis).

## Penyataan

| Penyataan | Apa yang dilakukannya |
|---|---|
| `raw TEXT` | Satu baris tepat seperti yang ditaip (tiada nombor baris) |
| `comment TEXT` | `(TEXT)` dengan aksara bukan ASCII dan kurungan dikeluarkan |
| `emit WORD WORD …` | Satu baris perkataan; perkataan yang kosong ditinggalkan; tiada perkataan, tiada baris |
| `word WORD …` | Tambah perkataan pada baris yang sedang dibina; `emit` kosong menamatkannya |
| `if EXPR` … `else` … `end` | Syarat: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, jika tidak b) |
| `for tool in tools` … `end` | Sekali bagi setiap alat yang digunakan oleh program |
| `set NAME EXPR` | Ingat satu nilai (`set offset tool.number`) |
| `reset NAME …` | Lupakan perkataan modal (satu kumpulan, huruf alamat seperti `Z`, atau `at.z`) |
| `do rapid X Y Z` | Jalankan peristiwa `rapid` untuk satu titik |

Perkataan ialah teks yang ditaip dengan lubang `{variable|filter}`. Penapis ialah `upper`, `lower`, `pad:N` (isi sifar), `cut:N` (N aksara pertama), `safe` (ASCII selamat untuk ulasan) dan `int`. Perkataan yang berakhir `~` ialah **modal**: ia hanya ditulis apabila berbeza daripada apa yang terakhir ditulis (`G1~`, `X{x}~`). Perkataan yang berakhir `~!` ditulis setiap kali dan masih diingati. Nama yang bukan pemboleh ubah ialah teks biasa (`G81`, `mist`). Nombor dibundarkan kepada 0.001 mm dan ditulis tanpa sifar di hujung.

## Apa yang tidak boleh dilakukan oleh pasca

Ia hanya menentukan cara pergerakan ditulis, tiada lebih. Ia tidak boleh mengubah laluan alat, menyusun semula operasi, membahagi lengkok, menambah paksi, mengetahui julat gerak atau kinematik mesin anda, atau melakukan pengiraan pada koordinat (tiada `+`). Kedudukan paksi putaran datang daripada mesin yang diterangkan dalam Persediaan, bukan daripada pasca: pasca boleh menukar tandanya atau hurufnya, bukan kinematiknya. Kitaran hayat alat dan kitaran subprogram belum dibina. Fail pasca gaya `.cps` daripada program lain tidak boleh dimuatkan: ini ialah format yang berbeza dan lebih mudah.
