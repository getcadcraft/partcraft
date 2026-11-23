---
title: Buat jalur pahat dan G-code (Manufaktur)
summary: Atur stok dan titik asal benda kerja, pilih alat, tambahkan operasi muka, kantong, kontur, bor, dan chamfer dengan memilih muka, selesaikan seluruh model secara 3D (sejajar, scallop), simulasikan stok terhadap model untuk gouge dan waktu siklus, dan unduh G-code dari salah satu dari tiga post bawaan atau dari post yang Anda sunting sendiri.
keywords: exact step, step untuk bengkel, koordinat kerja, serah terima cam, sejajar, scallop, finishing 3d, finishing, ball nose, pustaka alat, edit post, post kustom, editor post, adaptif, adaptive clearing, engagement konstan, trochoidal, hsm, high speed machining, manufaktur, CAM, jalur pahat, G-code, NC, CNC, frais, pemesinan frais, kantong, kontur, profil, facing, bor, peck, G83, G81, G73, chamfer, stok, offset benda kerja, G54, post processor, GRBL, LinuxCNC, feed dan kecepatan, simulasi, gouge, waktu siklus
from: f8a03be8
---

Workspace Manufaktur mengubah benda menjadi jalur pahat dan menuliskannya sebagai G-code. Sebagian besar operasi adalah frais **2.5 sumbu**: alat dijaga tegak, dinding dipotong lurus ke bawah, dan lantai dibuat datar. **Kasar 3D** dan **Sisa** mengosongkan benda lengkung secara 3D ([Pengasaran 3D dan pemesinan sisa](topic:rough-3d)); **Sejajar** dan **Scallop** menyelesaikannya ([Finishing 3D](topic:finish-3d)). Pada mesin dengan sumbu rotari, operasi apa pun dapat memakai alat yang miring, dan dua operasi menggerakkan sumbu rotari saat memotong ([Pemesinan 4 dan 5 sumbu](topic:multi-axis)). Ada operasi untuk mesin bubut ([Bubut](topic:turning)) dan untuk probe sentuh ([Probing](topic:probing)). Ia bekerja pada muka bernama yang diberikan kernel mesh pada benda (lihat [Kernel mesh](topic:solid-kernels)).

Build laboratorium: periksa setiap program di simulator kontrol Anda sendiri, dan jalankan lebih dulu di udara di atas stok.

## Atur

1. Pilih **Manufaktur** di pengalih workspace, lalu {{ui:Setup baru}}.
2. Pada tab **Setup**, pilih:
   - **Sumbu alat (+Z)**: arah alat menunjuk ke dalam benda. World +Y (atas PartCraft) adalah default; sumbu X mesin kemudian adalah X dunia, dan sumbu Y mesin adalah −Z dunia.
   - **Titik asal benda kerja (G54)**: sudut atau pusat stok, atas atau bawah, pusat atas model, atau titik asal model.
   - **Stok**: kotak atau silinder, baik model ditambah offset (sisi, atas, bawah) maupun ukuran tetap.
   - **Material** (mengatur feed dan kecepatan awal), **post** (kontrol), kecepatan spindel maksimum mesin, laju rapid dan waktu ganti alat, coolant, dan nomor program.

## Alat

Tab **Alat** berisi pustaka: end mill datar, bola, dan bull-nose, bor, chamfer mill, dan face mill, masing-masing dengan nomor T, diameter, jumlah flute, dan panjang flute (ditambah radius sudut, sudut titik, atau sudut chamfer bila berlaku).

Alat saya dapat disimpan di peramban dan dipindahkan antarkomputer sebagai file: lihat [Pustaka alat](topic:tool-library).

Kecepatan spindel dan feed berasal dari material: n = 1000 × kecepatan potong / (π × diameter), feed = n × jumlah flute × chip load (bor: n × feed per putaran). Angka-angka ini adalah nilai awal konservatif dari rentang yang dipublikasikan, belum disetel untuk mesin Anda; ketik kecepatan potong, chip load, rpm, atau feed dari pabrik alat Anda untuk menimpanya. Jika kecepatan melampaui maksimum mesin, kecepatan ditahan di batas itu dan feed mengikutinya, sehingga chip load tetap terjaga.

## Tambahkan operasi

Setiap tombol bilah alat menambahkan operasi dan, bila memerlukan geometri, memulai pemilihan: klik muka atau tepi di tampilan (klik lagi untuk menjatuhkan satu), lalu {{ui:Selesai memilih}} atau {{key:Esc}}.

| Operasi | Pilih | Yang dilakukannya |
|---|---|---|
| {{ui:Muka}} | tidak ada | Lintasan zig-zag di atas seluruh stok, melewati tepinya, turun ke bagian atas model |
| {{ui:Kantong}} | muka lantai datar, lubang bulat, atau rantai tepi tertutup | Mengosongkan area dengan lintasan offset dari dalam ke luar, pada setiap langkah turun; pulau (muka yang berdiri tegak di dalam lantai) dibiarkan; lantai yang terbuka di semua sisi (tidak ada yang lebih tinggi di luarnya) dikosongkan sampai tepi stok |
| {{ui:Adaptif}} | sama dengan Kantong | Mengosongkan area yang sama dalam lintasan yang masing-masing memotong lebar tertentu (**Engagement**, sebagian dari diameter), sehingga pemotong tidak pernah mengambil alur selebar penuh, bahkan di sudut; ia masuk dengan heliks dan menyelesaikan dinding di setiap level. Potongan sempit memungkinkan langkah turun lebih dalam dan feed lebih tinggi |
| {{ui:Kontur}} | muka datar (garis luarnya), muka bulat, atau tepi | Mengikuti garis luar yang diofset oleh jari-jari alat, di luar atau di dalam, dengan busur masuk dan keluar serta tab opsional |
| {{ui:Bor}} | lubang (klik dinding lubang atau tepinya) | Mengebor setiap lubang dengan siklus baku: peck (G83), bor (G81), atau chip break (G73); atau berikan diameter untuk mengebor setiap lubang berukuran itu |
| {{ui:Chamfer}} | garis luar atau tepi sebuah muka | Menjalankan chamfer mill sepanjang tepi sehingga memotong lebar yang Anda atur |
| {{ui:Sejajar}} | tidak ada (seluruh model) | Finishing 3D dalam garis sejajar pada sudut apa pun, mengikuti permukaan dengan end mill bola, bull-nose, atau datar. Lihat [Finishing 3D](topic:finish-3d) |
| {{ui:Scallop}} | tidak ada (seluruh model) | Finishing 3D dalam lintasan berjarak tertentu di atas permukaan, sehingga punggungan di antaranya memiliki tinggi yang Anda minta |

Pilih operasi di daftar untuk mengubah alatnya, tinggi (clearance, retract, feed height, top, bottom), step-down, stepover, sisa stok, pass finishing, masuk (heliks, rampa, atau plunge), frais climb, tab, atau siklus. {{ui:Naik}} dan {{ui:Turun}} mengurutkan ulang, {{ui:Nonaktifkan}} membiarkannya keluar, dan {{ui:Hapus}} menghapusnya. Semuanya masuk ke riwayat urungkan dan disimpan di file benda.

Stepover kantong paling besar setengah diameter alat, sehingga setiap titik lantainya berada dalam satu jari-jari alat dari sebuah lintasan. Sudut dalam mempertahankan jari-jari alat.

**Pengosongan adaptif** menjaga engagement pemotong mendekati satu nilai. Engagement 0.15 dari diameter adalah sudut engagement sekitar 46°: busur tepi pemotong di dalam material. Kantong offset, sebaliknya, memotong lebar penuh pada pass pertamanya dan melingkar lebih jauh di setiap sudut dalam. Di antara pass, alat tetap turun di tempat ia bergerak melalui udara potong, dan naik serta turun lagi di udara potong di tempat lain. Pass dihitung pada grid halus di atas area (sel sekitar seperduabelas jari-jari alat), sehingga engagement dapat melebihi nilai yang diatur sekitar satu sel; dinding diselesaikan dengan tepat. Area terbuka yang besar menghasilkan program panjang dengan banyak gerakan pendek.

## Simulasikan

Jalur pahat dibuat ulang setiap kali ada perubahan (begitu juga benda). {{ui:Simulasikan}} juga menampilkan stok yang tersisa setelah seluruh program. Panel menampilkan:

- **Waktu siklus**: gerakan feed pada feed-nya, rapid sebagai garis lurus pada laju rapid setup, ditambah waktu ganti alat. Mesin sungguhan melakukan akselerasi, sehingga waktunya lebih lama.
- **Gouge**: tempat alat turun lebih dari 0.02 mm di bawah permukaan benda. Tanda merah menunjukkannya di tampilan.
- **Sisa stok pada benda**.

Stok adalah peta tinggi bagian atas (Z-map), sehingga tidak dapat menampilkan undercut. Seret **Pemutaran** untuk menggerakkan alat sepanjang program. Di tampilan, gerakan feed berupa garis utuh dan rapid berupa garis putus-putus, dengan satu warna per operasi.

Dengan **Tampilkan stok tersimulasi** aktif, stok diwarnai terhadap model, sel demi sel: **hijau** di tempat ia berada pada model (dalam 0.02 mm), **merah** di tempat alat memotong ke dalam model, dan di tempat stok tersisa pada model **kuning** untuk lapisan tipis, **oranye** untuk lebih banyak, memudar menjadi **abu-abu** stok yang belum terpotong pada 1 mm atau lebih. Warna dibuat ulang pada setiap perubahan, dari peta tinggi yang sama dengan angka di panel, sehingga hijau dan merah sesuai dengan baris Gouge. Chamfer memang sengaja memotong ke dalam model dan menampilkan merah di sepanjang tepinya.

## Post G-code

Pilih kontrol di bawah **Post** dan tekan {{ui:Unduh G-code}} (atau {{ui:Post}} di bilah alat):

| Kontrol | File | Catatan |
|---|---|---|
| ISO gaya Fanuc | .nc | %, nomor O, nomor baris, T M6 dengan G43 H, siklus baku |
| GRBL | .nc | Tanpa pengganti alat atau siklus baku: penggantian alat berhenti dengan M0, pengeboran ditulis sebagai gerakan biasa |
| LinuxCNC | .ngc | T M6 dengan G43 H, siklus baku, M2 |
| Mesin bubut gaya Fanuc | .nc | Untuk program bubut: X sebagai diameter, feed per putaran, G96 di bawah batas G50, ulir G32 |
| Mesin bubut LinuxCNC | .ngc | Untuk program bubut: diameter G7, G95, G96, ulir G33; tidak menulis gerakan homing |
| Milik Anda | apa saja | Post yang Anda tulis atau ubah: {{ui:Edit post…}}, {{ui:Post baru…}}, {{ui:Impor file post…}} |

Setiap file dimulai dengan komentar untuk program, stok, offset benda kerja, dan alat. Koordinat dalam milimeter dengan 3 desimal. {{ui:CSV jalur pahat}} dan {{ui:JSON jalur pahat}} mengekspor gerakan itu sendiri.

**Periksa keluaran di simulator mesin Anda sendiri sebelum memotong, dan jalankan lebih dulu di udara di atas stok.** Tiga post bawaan adalah titik awal yang mengikuti perilaku kontrol yang terdokumentasi; belum terbukti pada mesin tertentu mana pun. Post yang Anda ubah menjadi tanggung jawab Anda untuk dibuktikan. Cara menulisnya: [Post processor](topic:post-processors).

## STEP presisi untuk bengkel

Di bawah tombol G-code pada tab **Operasi**, {{ui:STEP presisi (koordinat kerja)}} mengunduh `<part>-work.step`: benda sebagai solid eksak (silinder sejati untuk lubang dan tonjolan, lingkaran sejati untuk tepinya), dengan titik asalnya di titik asal benda kerja setup ini dan Z sepanjang sumbu alat. Itulah koordinat yang dipakai G-code, sehingga program CAM atau pemeriksa milik bengkel dapat menyelaraskan model dengan program tanpa memindahkannya. File hanya berisi benda, bukan stok atau jalur pahat.

{{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} menulis solid yang sama di posisi benda itu sendiri (Z ke atas): lihat [Ekspor untuk pencetakan, STEP, dan DXF](topic:export-files#for-other-cad-programs-step).

## Batasan

- Kantong, kontur, pengeboran, dan chamfer adalah 2.5 sumbu. Benda lengkung dikasarkan dan diselesaikan secara 3D oleh operasinya sendiri ([Pengasaran 3D dan pemesinan sisa](topic:rough-3d), [Finishing 3D](topic:finish-3d)). Pengosongan adaptif adalah 2D (lantai datar).
- Alat miring, finishing 5 sumbu dan sumbu ke-4, bubut, serta probing tersedia, masing-masing dengan batasannya sendiri, dan **tidak satu pun dari itu pernah dijalankan pada mesin**: lihat [Pemesinan 4 dan 5 sumbu](topic:multi-axis), [Bubut](topic:turning), dan [Probing](topic:probing).
- Holder dan shank tidak diperiksa terhadap tabrakan; peringatan muncul bila potongan lebih dalam dari panjang flute.
- Feed dan kecepatan adalah nilai awal. Post adalah teks yang dapat Anda sunting, tetapi ia hanya menentukan cara gerakan ditulis; ia tidak dapat mengubah jalur pahat, menambah sumbu, atau mengenali mesin Anda ([Post processor](topic:post-processors) mencantumkan apa yang tidak dapat dilakukannya).

## Kirim program ke mesin

Di CadCraft Studio pada desktop, dengan mesin yang sudah diatur di Studio, **Kirim ke mesin…** muncul di samping **Unduh G-code** dan mengunggah program yang sama ke mesin di jaringan Anda. Program tidak pernah dimulai dari PartCraft: mulailah di mesin ketika sudah jelas. Di peramban, tombolnya tidak ditampilkan (halaman web tidak dapat menjangkau mesin di jaringan Anda): unduh program saja.
