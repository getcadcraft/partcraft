---
title: Buat laluan alat dan G-code (Pembuatan)
summary: Tetapkan bahan mentah dan asal kerja, pilih alat, tambah operasi muka, poket, kontur, gerudi dan chamfer dengan memilih muka, kemas seluruh model secara 3D (selari, scallop), simulasikan bahan mentah berbanding model untuk gouge dan masa kitaran, dan muat turun G-code daripada salah satu daripada tiga pasca terbina atau pasca yang anda sunting sendiri.
keywords: step tepat, step untuk bengkel, koordinat kerja, serahan cam, selari, scallop, kemasan 3d, kemasan, mata bulat, perpustakaan alat, sunting pos, pos tersuai, penyunting pos, adaptif, pembersihan adaptif, penglibatan malar, trochoidal, hsm, pemesinan kelajuan tinggi, pembuatan, CAM, laluan alat, G-code, NC, CNC, mesin pengisar, pengisaran, poket, kontur, profil, muka, gerudi, peck, G83, G81, G73, chamfer, bahan mentah, ofset kerja, G54, pasca-proses, GRBL, LinuxCNC, suapan dan kelajuan, simulasi, gouge, masa kitaran
from: f8a03be8
---

Ruang kerja Pembuatan menukar bahagian kepada laluan alat dan menulisnya sebagai G-code. Kebanyakan operasi ialah pengisaran **2.5-paksi**: alat kekal tegak, dinding dipotong lurus ke bawah dan lantai dibuat rata. **Kasar 3D** dan **Baki** mengosongkan bahagian melengkung dalam 3D ([Kasar 3D dan pemesinan baki](topic:rough-3d)); **Selari** dan **Scallop** mengemasnya ([Kemasan 3D](topic:finish-3d)). Pada mesin dengan paksi putaran, mana-mana operasi boleh menggunakan alat yang condong, dan dua operasi menggerakkan paksi putaran semasa memotong ([pemesinan 4- dan 5-paksi](topic:multi-axis)). Terdapat operasi untuk larik ([Pemesinan pada larik](topic:turning)) dan untuk probe sentuhan ([Probing](topic:probing)). Ia berfungsi pada muka bernama yang diberikan oleh kernel jaringan kepada bahagian (lihat [Kernel jaringan](topic:solid-kernels)).

Binaan makmal: semak setiap program dalam simulator kawalan anda sendiri, dan jalankan di udara di atas bahan mentah dahulu.

## Persediaan

1. Pilih **Pembuatan** dalam penukar ruang kerja, kemudian {{ui:New setup}}.
2. Pada tab **Persediaan**, pilih:
   - **Paksi alat (+Z)**: arah alat menuju ke dalam bahagian. +Y dunia (ke atas PartCraft) ialah lalai; X mesin ialah X dunia dan Y mesin ialah −Z dunia.
   - **Asal kerja (G54)**: sudut atau pusat bahan mentah, atas atau bawah, pusat atas model, atau asal model.
   - **Bahan mentah**: kotak atau silinder, sama ada model ditambah ofset (sisi, atas, bawah) atau saiz tetap.
   - **Bahan** (menetapkan suapan dan kelajuan permulaan), **pasca** (kawalan), kelajuan gelendong maksimum mesin, kadar pantas dan masa tukar alat, penyejuk, dan nombor program.

## Alat

Tab **Alat** memegang perpustakaan: mata pengisar hujung rata, bulat dan lebar, gerudi, pengisar chamfer dan pengisar muka, setiap satu dengan nombor T, diameter, bilangan alur dan panjang alur (ditambah jejari bucu, sudut mata atau sudut chamfer di mana ia berkenaan).

Alat saya boleh disimpan dalam pelayar dan dipindahkan antara komputer sebagai fail: lihat [Perpustakaan alat](topic:tool-library).

Kelajuan gelendong dan suapan datang daripada bahan: n = 1000 × kelajuan potong / (π × diameter), suapan = n × bilangan alur × beban cip (gerudi: n × suapan per pusingan). Nilai ini ialah nilai permulaan konservatif daripada julat yang diterbitkan, bukan ditala untuk mesin anda; taip kelajuan potong, beban cip, rpm atau suapan pembuat alat anda untuk menggantikannya. Apabila kelajuan melebihi maksimum mesin, ia ditahan pada tahap itu dan suapan mengikutinya, supaya beban cip dikekalkan.

## Tambah operasi

Setiap butang bar alat menambah satu operasi dan, jika ia memerlukan geometri, mula memilih: klik muka atau tepi dalam paparan (klik sekali lagi untuk menyingkirkan satu), kemudian {{ui:Done picking}} atau {{key:Esc}}.

| Operasi | Pilih | Apa yang dilakukannya |
|---|---|---|
| {{ui:Face}} | tiada | Laluan zigzag ke atas seluruh bahan mentah, melepasi tepinya, turun ke bahagian atas model |
| {{ui:Pocket}} | muka lantai rata, lubang bulat, atau rantai tepi tertutup | Mengosongkan kawasan dengan laluan ofset dari dalam ke luar, pada setiap langkah turun; pulau (muka yang berdiri tegak di dalam lantai) dibiarkan; lantai yang terbuka di sekelilingnya (tiada apa yang lebih tinggi di luarnya) dikosongkan hingga ke tepi bahan mentah |
| {{ui:Adaptive}} | sama seperti Poket | Mengosongkan kawasan yang sama dalam laluan yang setiap satunya memotong lebar yang ditetapkan (**Penglibatan**, sebahagian daripada diameter), jadi pemotong tidak pernah mengambil alur lebar penuh, walaupun di sudut; ia masuk dengan heliks dan mengemas dinding pada setiap aras. Potongan sempit membenarkan langkah turun yang lebih dalam dan suapan yang lebih tinggi |
| {{ui:Contour}} | muka rata (garis luarnya), muka bulat, atau tepi | Mengikuti garis luar yang diimbangi dengan jejari alat, di luar atau di dalam, dengan lengkok masuk dan keluar serta tab pilihan |
| {{ui:Drill}} | lubang (klik dinding lubang atau tepinya) | Menggerudi setiap lubang dengan kitaran terbina: peck (G83), gerudi (G81) atau pemecahan cip (G73); atau berikan diameter untuk menggerudi setiap lubang bersaiz itu |
| {{ui:Chamfer}} | garis luar atau tepi muka | Menjalankan pengisar chamfer di sepanjang tepi supaya ia memotong lebar yang anda tetapkan |
| {{ui:Parallel}} | tiada (seluruh model) | Kemasan 3D dalam garisan selari pada sebarang sudut, mengikut permukaan dengan mata pengisar bulat, hujung lebar atau rata. Lihat [Kemasan 3D](topic:finish-3d) |
| {{ui:Scallop}} | tiada (seluruh model) | Kemasan 3D dalam laluan yang berjarak tertentu ke atas permukaan, supaya rabung di antaranya mempunyai ketinggian yang anda minta |

Pilih satu operasi dalam senarai untuk menukar alatnya, ketinggiannya (kelegaan, tarik balik, ketinggian suapan, atas, bawah), langkah turun, stepover, bahan untuk ditinggalkan, laluan kemasan, kemasukan (heliks, landai atau tebuk), pengisaran naik, tab atau kitaran. {{ui:Up}} dan {{ui:Down}} menyusun semula, {{ui:Suppress}} mengecualikannya, dan {{ui:Delete}} membuangnya. Semuanya masuk dalam sejarah buat asal dan disimpan dalam fail bahagian.

Stepover poket ialah paling banyak separuh diameter alat, supaya setiap titik pada lantainya berada dalam satu jejari alat daripada satu laluan. Sudut dalam mengekalkan jejari alat.

**Pembersihan adaptif** mengekalkan penglibatan pemotong hampir pada satu nilai. Penglibatan 0.15 daripada diameter ialah sudut penglibatan kira-kira 46°: lengkok tepi pemotong dalam bahan. Poket berofset pula memotong lebar penuh pada laluan pertamanya dan melilit lebih jauh di setiap sudut dalam. Antara laluan, alat kekal di bawah di tempat ia bergerak melalui udara yang sudah dipotong, dan naik serta turun semula dalam udara yang sudah dipotong di tempat lain. Laluan dikira pada grid halus ke atas kawasan (sel kira-kira satu per dua belas jejari alat), jadi penglibatan boleh melebihi sehingga kira-kira satu sel lebih lebar daripada yang ditetapkan; dinding dikemas dengan tepat. Kawasan terbuka yang besar menghasilkan program yang panjang dengan banyak pergerakan pendek.

## Simulasi

Laluan alat dibuat semula selepas setiap perubahan (bahagian juga). {{ui:Simulate}} turut menunjukkan bahan mentah yang tinggal selepas keseluruhan program. Panel menunjukkan:

- **Masa kitaran**: pergerakan suapan pada suapannya, pergerakan pantas sebagai garis lurus pada kadar pantas persediaan, ditambah masa tukar alat. Mesin sebenar memecut, jadi ia mengambil lebih masa.
- **Gouge**: tempat alat pergi lebih daripada 0.02 mm di bawah permukaan bahagian. Tanda merah menunjukkannya dalam paparan.
- **Bahan mentah yang tinggal pada bahagian**.

Bahan mentah ialah peta ketinggian bahagian atas (peta Z), jadi ia tidak dapat menunjukkan undercut. Seret **Main semula** untuk menggerakkan alat sepanjang program. Dalam paparan, pergerakan suapan ialah pepejal dan pergerakan pantas ialah putus-putus, dengan satu warna bagi setiap operasi.

Dengan **Tunjukkan bahan mentah yang disimulasikan** dihidupkan, bahan mentah diwarnakan berbanding model, sel demi sel: **hijau** di tempat ia berada pada model (dalam 0.02 mm), **merah** di tempat alat memotong masuk ke dalam model, dan di tempat bahan mentah tinggal pada model, **kuning** untuk kulit nipis, **oren** untuk lebih banyak, memudar kepada **kelabu** bahan yang belum dipotong pada 1 mm atau lebih. Warna dibuat semula dengan setiap perubahan, daripada peta ketinggian yang sama seperti nombor dalam panel, jadi hijau dan merah sepadan dengan baris Gouge. Chamfer sengaja memotong masuk ke dalam model dan menunjukkan merah di sepanjang tepinya.

## Pasca G-code

Pilih kawalan di bawah **Pasca** dan tekan {{ui:Download G-code}} (atau {{ui:Post}} pada bar alat):

| Kawalan | Fail | Nota |
|---|---|---|
| ISO gaya Fanuc | .nc | %, nombor O, nombor baris, T M6 dengan G43 H, kitaran terbina |
| GRBL | .nc | Tiada penukar alat atau kitaran terbina: penukaran alat berhenti dengan M0, penggerudian ditulis sebagai pergerakan biasa |
| LinuxCNC | .ngc | T M6 dengan G43 H, kitaran terbina, M2 |
| Larik gaya Fanuc | .nc | Untuk program pemesinan larik: X sebagai diameter, suapan per pusingan, G96 di bawah had G50, penguliran G32 |
| Larik LinuxCNC | .ngc | Untuk program pemesinan larik: diameter G7, G95, G96, penguliran G33; tidak menulis pergerakan rujukan |
| Milik anda | mana-mana | Pasca yang anda tulis atau ubah: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Setiap fail bermula dengan ulasan untuk program, bahan mentah, ofset kerja dan alat. Koordinat dalam milimeter dengan 3 titik perpuluhan. {{ui:Toolpath CSV}} dan {{ui:Toolpath JSON}} mengeksport pergerakan itu sendiri.

**Semak output dalam simulator mesin anda sendiri sebelum memotong, dan jalankan di udara di atas bahan mentah dahulu.** Tiga pasca terbina ialah titik permulaan yang mengikuti kelakuan kawalan yang didokumentasikan; ia belum dibuktikan pada mana-mana mesin tertentu. Pasca yang anda ubah ialah tanggungjawab anda untuk dibuktikan. Cara menulisnya: [Pasca-proses yang boleh disunting](topic:post-processors).

## STEP tepat untuk bengkel

Di bawah butang G-code pada tab **Operasi**, {{ui:Exact STEP (work coordinates)}} memuat turun `<part>-work.step`: bahagian sebagai pepejal tepat (silinder sebenar untuk lubang dan bos, bulatan sebenar untuk tepinya) dengan asalnya di asal kerja persediaan ini dan Z sepanjang paksi alat. Itulah koordinat yang digunakan oleh G-code, jadi program CAM atau pemeriksa bengkel sendiri menjajarkan model dengan program tanpa mengalihkannya. Fail itu hanya mengandungi bahagian, bukan bahan mentah atau laluan alat.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} menulis pepejal yang sama pada kedudukan bahagian itu sendiri (Z ke atas): lihat [Eksport untuk cetakan, STEP dan DXF](topic:export-files#for-other-cad-programs-step).

## Had

- Poket, kontur, penggerudian dan chamfer ialah 2.5-paksi. Bahagian melengkung dikasarkan dan dikemas dalam 3D oleh operasi mereka sendiri ([Kasar 3D dan pemesinan baki](topic:rough-3d), [Kemasan 3D](topic:finish-3d)). Pembersihan adaptif ialah 2D (lantai rata).
- Alat condong, pemesinan 5-paksi dan kemasan paksi-4, pemesinan larik dan probing wujud, setiap satu dengan had tersendiri, dan **tiada satu pun daripadanya telah dijalankan pada mesin**: lihat [Pemesinan 4- dan 5-paksi](topic:multi-axis), [Pemesinan pada larik](topic:turning) dan [Probing](topic:probing).
- Pemegang dan batang tidak diperiksa untuk perlanggaran; amaran muncul apabila potongan lebih dalam daripada panjang alur.
- Suapan dan kelajuan ialah nilai permulaan. Pasca ialah teks yang boleh anda sunting, tetapi ia hanya menentukan cara pergerakan ditulis; ia tidak boleh mengubah laluan alat, menambah paksi atau mengetahui mesin anda ([Pasca-proses yang boleh disunting](topic:post-processors) menyenaraikan apa yang tidak boleh dilakukannya).

## Hantar program ke mesin

Dalam CadCraft Studio pada desktop, dengan mesin disediakan dalam Studio, **Hantar ke mesin…** muncul di sebelah **Muat turun G-code** dan memuat naik program yang sama ke mesin dalam rangkaian anda. Ia tidak pernah dimulakan daripada PartCraft: mulakannya di mesin apabila keadaannya jelas. Dalam pelayar, butang itu tidak ditunjukkan (halaman web tidak dapat mencapai mesin dalam rangkaian anda): muat turun program sebaliknya.
