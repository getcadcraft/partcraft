---
title: Buat laluan alat dan G-code (Manufacture)
summary: Sediakan bahan mentah dan asal kerja, pilih alat, tambah operasi muka, poket, kontur, gerudi dan chamfer dengan memilih muka, siapkan keseluruhan model dalam 3D (selari, scallop), simulasikan bahan mentah berbanding model untuk gouge dan masa kitaran, dan muat turun G-code daripada salah satu daripada tiga pos terbina dalam atau pos yang anda sunting sendiri.
keywords: step tepat, step untuk bengkel, koordinat kerja, serahan CAM, selari, scallop, kemasan 3D, kemasan, hujung bola, pustaka alat, sunting pos, pos tersuai, penyunting pos, adaptif, pembersihan adaptif, penglibatan malar, trokoidal, hsm, pemesinan kelajuan tinggi, manufacture, CAM, laluan alat, G-code, NC, CNC, mesin, pengisaran, poket, kontur, profil, muka, gerudi, peck, G83, G81, G73, chamfer, bahan mentah, ofset kerja, G54, pemproses pasca, GRBL, LinuxCNC, suapan dan kelajuan, simulasi, gouge, masa kitaran
from: beeb29aa
---

Ruang kerja Manufacture menukar bahagian kepada laluan alat untuk mesin pengisar 3 paksi dan menulisnya sebagai G-code. Kebanyakan operasi ialah **2.5-paksi**: alat kekal menegak, dinding dipotong lurus ke bawah dan lantai rata. **Selari** dan **Scallop** menyiapkan permukaan melengkung dalam 3D (lihat [Kemasan 3D](topic:finish-3d)); alat tetap menegak (tiga paksi, tanpa condong). Ia berfungsi pada muka bernama yang diberikan oleh kernel mesh kepada bahagian (lihat [Kernel mesh](topic:solid-kernels)).

Binaan makmal: semak setiap program dalam simulator kawalan anda sendiri, dan jalankannya di udara di atas bahan mentah dahulu.

## Sediakan

1. Pilih **Manufacture** dalam penukar ruang kerja, kemudian {{ui:Persediaan baharu}}.
2. Pada tab **Persediaan**, pilih:
   - **Paksi alat (+Z)**: arah alat menghala ke dalam bahagian. World +Y (ke atas PartCraft) ialah lalai; mesin X kemudian ialah world X dan mesin Y ialah world −Z.
   - **Asal kerja (G54)**: sudut atau pusat bahan mentah, atas atau bawah, pusat atas model, atau asal model.
   - **Bahan mentah**: kotak atau silinder, sama ada model ditambah ofset (sisi, atas, bawah) atau saiz tetap.
   - **Bahan** (menetapkan suapan dan kelajuan permulaan), **Pasca-proses** (kawalan), kelajuan gelendong maksimum mesin, kadar pantas dan masa pertukaran alat, penyejuk serta nombor program.

## Alat

Tab **Alat** memegang pustaka: pengisar hujung rata, bola dan bull nose, gerudi, pengisar chamfer dan pengisar muka, setiap satu dengan nombor T, diameter, alur dan panjang alur (serta jejari bucu, sudut hujung atau sudut chamfer di mana ia berkenaan).

Alat saya boleh disimpan dalam pelayar dan dipindahkan antara komputer sebagai fail: lihat [Pustaka alat](topic:tool-library).

Kelajuan gelendong dan suapan datang daripada bahan: n = 1000 × kelajuan pemotongan / (π × diameter), suapan = n × alur × beban cip (gerudi: n × suapan setiap pusingan). Nombor ialah nilai permulaan konservatif daripada julat yang diterbitkan, bukan ditala untuk mesin anda; taip kelajuan pemotongan, beban cip, rpm atau suapan pengilang alat anda untuk menggantikannya. Apabila kelajuan melebihi maksimum mesin, ia dikekalkan di situ dan suapan mengikutinya, mengekalkan beban cip.

## Tambah operasi

Setiap butang bar alat menambah operasi dan, di mana ia memerlukan geometri, mula memilih: klik muka atau tepi dalam paparan (klik sekali lagi untuk membuang satu), kemudian {{ui:Selesai memilih}} atau {{key:Esc}}.

| Operasi | Pilih | Fungsi |
|---|---|---|
| {{ui:Muka}} | tiada | Laluan zig-zag merentasi seluruh bahan mentah, melepasi tepinya, turun ke bahagian atas model |
| {{ui:Poket}} | muka lantai rata, lubang bulat, atau rantai tepi tertutup | Membersihkan kawasan dalam laluan ofset dari dalam ke luar, pada setiap langkah turun; pulau (muka yang berdiri tegak dalam lantai) dibiarkan; lantai terbuka di semua sisi (tiada apa yang lebih tinggi di luarnya) dibersihkan hingga ke tepi bahan mentah |
| {{ui:Adaptif}} | sama seperti Poket | Membersihkan kawasan yang sama dalam laluan yang setiap satunya memotong lebar tertentu (**Penglibatan**, pecahan diameter), supaya pemotong tidak pernah mengambil alur lebar penuh, walaupun di sudut; ia masuk melalui heliks dan menyiapkan dinding pada setiap aras. Potongan sempit membenarkan langkah turun yang lebih dalam dan suapan yang lebih tinggi |
| {{ui:Kontur}} | muka rata (garis luarnya), muka bulat, atau tepi | Mengikuti garis luar yang diofset oleh jejari alat, di luar atau di dalam, dengan lengkok lead-in dan lead-out serta tab pilihan |
| {{ui:Gerudi}} | lubang (klik dinding lubang atau tepinya) | Menggerudi setiap lubang dengan kitaran tetap: peck (G83), gerudi (G81) atau pemecahan cip (G73); atau berikan diameter untuk menggerudi setiap lubang bersaiz itu |
| {{ui:Chamfer}} | garis luar muka atau tepi | Menjalankan pengisar chamfer sepanjang tepi supaya ia memotong lebar yang anda tetapkan |
| {{ui:Selari}} | tiada (keseluruhan model) | Kemasan 3D dalam garisan selari pada sebarang sudut, mengikuti permukaan dengan pengisar hujung bola, bull nose atau rata. Lihat [Kemasan 3D](topic:finish-3d) |
| {{ui:Scallop}} | tiada (keseluruhan model) | Kemasan 3D dalam laluan berjarak tetap di atas permukaan, supaya rabung antaranya mempunyai ketinggian yang anda minta |

Pilih operasi dalam senarai untuk menukar alatnya, ketinggian (kelegaan, tarik balik, ketinggian suapan, atas, bawah), langkah turun, langkah sisi, bahan mentah yang ditinggalkan, laluan kemasan, kemasukan (heliks, landai atau tikam), pengisaran naik, tab atau kitaran. {{ui:Naik}} dan {{ui:Turun}} menyusun semula, {{ui:Gantung}} membiarkannya keluar, {{ui:Padam}} membuangnya. Semuanya ada dalam sejarah buat asal dan disimpan dalam fail bahagian.

Laluan langkah sisi poket paling banyak separuh diameter alat, jadi setiap titik lantainya berada dalam satu jejari alat daripada satu laluan. Sudut dalam mengekalkan jejari alat.

**Pembersihan adaptif** mengekalkan penglibatan pemotong hampir pada satu nilai. Penglibatan 0.15 daripada diameter ialah sudut penglibatan kira-kira 46°: lengkok tepi pemotong dalam bahan. Poket ofset, sebaliknya, memotong lebar penuh pada laluan pertamanya dan membungkus lebih jauh di setiap sudut dalam. Antara laluan, alat kekal turun apabila ia bergerak melalui udara yang sudah dipotong, dan naik serta turun dalam udara yang sudah dipotong di tempat lain. Laluan dikira pada grid halus di atas kawasan (sel kira-kira satu per dua belas jejari alat), jadi penglibatan boleh melebihi sedikit, sehingga kira-kira satu sel lebih lebar daripada yang ditetapkan; dinding disiapkan dengan tepat. Kawasan terbuka yang besar menghasilkan program yang panjang dengan banyak pergerakan pendek.

## Simulasi

Laluan alat dibuat semula selepas setiap perubahan (bahagian juga). {{ui:Simulasi}} juga menunjukkan bahan mentah yang tinggal selepas keseluruhan program. Panel menunjukkan:

- **Masa kitaran**: pergerakan suapan pada suapannya, pergerakan pantas sebagai garisan lurus pada kadar pantas persediaan, ditambah masa pertukaran alat. Mesin sebenar memecut, jadi ia mengambil masa lebih lama.
- **Gouge**: tempat alat pergi lebih 0.02 mm di bawah permukaan bahagian. Tanda merah menunjukkannya dalam paparan.
- **Bahan mentah yang tinggal pada bahagian**.

Bahan mentah ialah peta ketinggian bahagian atas (peta Z), jadi ia tidak dapat menunjukkan undercut. Seret **Main balik** untuk menggerakkan alat sepanjang program. Dalam paparan, pergerakan suapan ialah pepejal dan pergerakan pantas putus-putus, satu warna bagi setiap operasi.

Dengan **Tunjukkan bahan mentah yang disimulasi** dihidupkan, bahan mentah diwarnakan berbanding model, sel demi sel: **hijau** di mana ia berada pada model (dalam 0.02 mm), **merah** di mana alat memotong ke dalam model, dan di mana bahan mentah tinggal pada model **kuning** untuk kulit nipis, **jingga** untuk lebih banyak, beransur ke **kelabu** bahan mentah yang belum dipotong pada 1 mm atau lebih. Warna dibuat semula dengan setiap perubahan, daripada peta ketinggian yang sama dengan nombor dalam panel, jadi hijau dan merah sepadan dengan baris Gouge. Chamfer memotong ke dalam model dengan sengaja dan menunjukkan merah di sepanjang tepinya.

## Pasca G-code

Pilih kawalan di bawah **Pasca-proses** dan tekan {{ui:Muat turun kod G}} (atau {{ui:Pasca-proses}} pada bar alat):

| Kawalan | Fail | Nota |
|---|---|---|
| Fanuc-style ISO | .nc | %, nombor O, nombor baris, T M6 dengan G43 H, kitaran tetap |
| GRBL | .nc | Tiada penukar alat atau kitaran tetap: pertukaran alat berhenti dengan M0, penggerudian ditulis sebagai pergerakan biasa |
| LinuxCNC | .ngc | T M6 dengan G43 H, kitaran tetap, M2 |
| Tersuai | mana-mana | Pos yang anda tulis atau ubah: {{ui:Sunting pos…}}, {{ui:Pos baharu…}}, {{ui:Import fail pos…}} |

Setiap fail bermula dengan komen untuk program, bahan mentah, ofset kerja dan alat. Koordinat dalam milimeter dengan 3 titik perpuluhan. {{ui:CSV laluan alat}} dan {{ui:JSON laluan alat}} mengeksport pergerakan itu sendiri.

**Semak output dalam simulator mesin anda sendiri sebelum memotong, dan jalankannya di udara di atas bahan mentah dahulu.** Tiga pos terbina dalam ialah titik permulaan yang mengikut kelakuan yang didokumenkan oleh kawalan; ia belum dibuktikan pada mana-mana mesin tertentu. Pos yang anda ubah adalah tanggungjawab anda untuk dibuktikan. Cara menulisnya: [Pemproses pasca](topic:post-processors).

## STEP tepat untuk bengkel

Di bawah butang G-code pada tab **Operasi**, {{ui:STEP tepat (koordinat kerja)}} memuat turun `<part>-work.step`: bahagian sebagai pepejal tepat (silinder sebenar untuk lubang dan bos, bulatan sebenar untuk tepinya) dengan asalnya pada asal kerja persediaan ini dan Z sepanjang paksi alat. Itulah koordinat yang digunakan oleh G-code, jadi program CAM atau penyemak bengkel memadankan model dengan program tanpa mengalihkannya. Fail itu hanya memegang bahagian, bukan bahan mentah atau laluan alat.

{{ui:Eksport}} › {{ui:STEP AP242 (pepejal tepat)}} menulis pepejal yang sama pada kedudukan bahagian itu sendiri (Z ke atas): lihat [Eksport untuk cetakan, STEP dan DXF](topic:export-files#for-other-cad-programs-step).

## Had

- Poket, kontur, penggerudian dan chamfer ialah 2.5-paksi. Permukaan melengkung boleh disiapkan dalam 3D ([selari dan scallop](topic:finish-3d)) tetapi tidak dikasarkan dalam 3D (kon dibiarkan sebagai tangga sehingga anda menyiapkannya), dan tiada pemesinan rehat. Pembersihan adaptif ialah 2D (lantai rata).
- Tiga paksi sahaja: tiada condong, tiada pelarikan, tiada pemeriksaan.
- Pemegang dan batang tidak diperiksa untuk perlanggaran; amaran muncul apabila potongan lebih dalam daripada panjang alur.
- Suapan dan kelajuan ialah nilai permulaan. Pos ialah teks yang boleh anda sunting, tetapi ia hanya menentukan cara pergerakan ditulis; ia tidak boleh menukar laluan alat, menambah paksi atau mengetahui mesin anda ([Pemproses pasca](topic:post-processors) menyenaraikan apa yang tidak dapat dilakukannya).

## Hantar program ke mesin

Dalam CadCraft Studio di desktop, dengan mesin disediakan dalam Studio, **Hantar ke mesin…** muncul di sebelah **Muat turun kod G** dan memuat naik program yang sama ke mesin pada rangkaian anda. Ia tidak sekali-kali dimulakan dari PartCraft: mulakannya di mesin apabila sudah jelas. Dalam pelayar butang itu tidak ditunjukkan (halaman web tidak boleh mencapai mesin pada rangkaian anda): muat turun program sebaliknya.
