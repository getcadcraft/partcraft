---
title: Membuat jalur pahat dan G-code (Manufacture)
summary: Atur stok dan titik asal kerja, pilih pahat, tambahkan operasi muka, kantong, kontur, bor, dan chamfer dengan memilih muka, selesaikan seluruh model dalam 3D (sejajar, scallop), simulasikan stok terhadap model untuk gouge dan waktu siklus, lalu unduh G-code dari salah satu dari tiga post bawaan atau yang Anda sunting sendiri.
keywords: exact step, step untuk bengkel, koordinat kerja, serah terima cam, sejajar, scallop, finishing 3D, finishing, ball nose, pustaka pahat, edit post, post kustom, editor post, adaptif, pembersihan adaptif, keterlibatan konstan, trochoidal, hsm, high speed machining, manufacture, CAM, jalur pahat, G-code, NC, CNC, frais, pemfraisan, kantong, kontur, profil, facing, bor, peck, G83, G81, G73, chamfer, stok, offset kerja, G54, post processor, GRBL, LinuxCNC, feed dan kecepatan, simulasi, gouge, waktu siklus
from: beeb29aa
---

Ruang kerja Manufacture mengubah part menjadi jalur pahat untuk mesin frais 3 sumbu dan menuliskannya sebagai G-code. Sebagian besar operasi adalah **2.5-sumbu**: pahat tetap tegak, dinding dipotong lurus ke bawah dan lantai datar. **Sejajar** dan **Scallop** menyelesaikan permukaan melengkung dalam 3D (lihat [Finishing 3D](topic:finish-3d)); pahat tetap tegak (tiga sumbu, tanpa memiringkan). Ia bekerja pada muka bernama yang diberikan kernel mesh pada part (lihat [Kernel mesh](topic:solid-kernels)).

Build laboratorium: periksa setiap program di simulator kontrol Anda sendiri, dan jalankan di udara di atas stok terlebih dahulu.

## Atur

1. Pilih **Manufacture** di pengalih ruang kerja, lalu {{ui:Setup baru}}.
2. Di tab **Setup**, pilih:
   - **Sumbu pahat (+Z)**: arah pahat menunjuk ke dalam part. World +Y (ke atas PartCraft) adalah default; sumbu X mesin kemudian sama dengan world X dan sumbu Y mesin sama dengan world −Z.
   - **Titik nol kerja (G54)**: sudut atau pusat stok, atas atau bawah, pusat atas model, atau titik asal model.
   - **Stok**: kotak atau silinder, baik model ditambah offset (sisi, atas, bawah) atau ukuran tetap.
   - **Material** (mengatur feed dan kecepatan awal), **post** (kontrol), kecepatan spindel maksimum mesin, laju rapid dan waktu ganti pahat, pendingin, serta nomor program.

## Pahat

Tab **Pahat** menyimpan pustaka: end mill datar, bola, dan bull nose, bor, chamfer mill, serta face mill, masing-masing dengan nomor T, diameter, jumlah flute, dan panjang flute (ditambah radius sudut, sudut titik, atau sudut chamfer jika berlaku).

Pahat saya dapat disimpan di peramban dan dipindahkan antar komputer sebagai file: lihat [Pustaka pahat](topic:tool-library).

Kecepatan spindel dan feed berasal dari material: n = 1000 × kecepatan potong / (π × diameter), feed = n × jumlah flute × chip load (bor: n × feed per putaran). Angkanya adalah nilai awal yang konservatif dari rentang yang dipublikasikan, bukan disetel untuk mesin Anda; ketik kecepatan potong, chip load, rpm, atau feed dari pembuat pahat Anda untuk menggantikannya. Ketika kecepatan melampaui maksimum mesin, kecepatan ditahan di sana dan feed mengikutinya, menjaga chip load.

## Tambah operasi

Setiap tombol bilah alat menambahkan operasi dan, jika memerlukan geometri, mulai memilih: klik muka atau tepi di tampilan (klik lagi untuk melepaskannya), lalu {{ui:Selesai memilih}} atau {{key:Esc}}.

| Operasi | Pilih | Yang dilakukannya |
|---|---|---|
| {{ui:Muka}} | tidak ada | Lintasan zig-zag di atas seluruh stok, melewati tepinya, sampai ke atas model |
| {{ui:Kantong}} | muka lantai datar, lubang bulat, atau rantai tepi tertutup | Membersihkan wilayah dengan lintasan offset dari dalam ke luar, di setiap langkah turun; pulau (muka yang berdiri tegak di dalam lantai) dibiarkan; lantai yang terbuka di sekelilingnya (tidak ada yang lebih tinggi di luarnya) dibersihkan sampai tepi stok |
| {{ui:Adaptif}} | sama seperti Kantong | Membersihkan wilayah yang sama dalam lintasan yang masing-masing memotong lebar tertentu (**Keterlibatan**, pecahan diameter), sehingga pahat tidak pernah memotong alur selebar penuh, bahkan di sudut; ia masuk dengan heliks dan menyelesaikan dinding di setiap level. Potongan sempit memungkinkan langkah turun lebih dalam dan feed lebih tinggi |
| {{ui:Kontur}} | muka datar (garis luarnya), muka bulat, atau tepi | Mengikuti garis luar yang di-offset sebesar radius pahat, di luar atau di dalam, dengan busur lead-in dan lead-out serta tab opsional |
| {{ui:Bor}} | lubang (klik dinding lubang atau tepinya) | Mengebor setiap lubang dengan siklus baku: peck (G83), bor (G81), atau chip break (G73); atau berikan diameter untuk mengebor setiap lubang berukuran itu |
| {{ui:Chamfer}} | garis luar atau tepi muka | Menjalankan chamfer mill sepanjang tepi sehingga memotong lebar yang Anda atur |
| {{ui:Sejajar}} | tidak ada (seluruh model) | Finishing 3D dalam garis sejajar pada sudut apa pun, mengikuti permukaan dengan end mill bola, bull nose, atau datar. Lihat [Finishing 3D](topic:finish-3d) |
| {{ui:Scallop}} | tidak ada (seluruh model) | Finishing 3D dalam lintasan yang berjarak tertentu di atas permukaan, sehingga punggungan di antaranya memiliki ketinggian yang Anda minta |

Pilih operasi di daftar untuk mengubah pahatnya, ketinggiannya (clearance, retract, feed height, top, bottom), langkah turun (step-down), langkah samping (stepover), stok yang ditinggalkan, lintasan finishing, masuk (heliks, rampa, atau tusukan), climb milling, tab, atau siklus. {{ui:Naik}} dan {{ui:Turun}} mengurutkan ulang, {{ui:Nonaktifkan}} mengeluarkannya dari program, {{ui:Hapus}} menghapusnya. Semuanya ada di riwayat urungkan dan disimpan dalam file part.

Stepover kantong paling banyak setengah diameter pahat, sehingga setiap titik pada lantainya berada dalam satu radius pahat dari sebuah lintasan. Sudut dalam tetap mempertahankan radius pahat.

**Pembersihan adaptif** menjaga keterlibatan pahat tetap dekat satu nilai. Keterlibatan 0.15 dari diameter adalah sudut keterlibatan sekitar 46°: busur tepi pahat di dalam material. Sebaliknya, kantong offset memotong selebar penuh pada lintasan pertamanya dan membungkus lebih jauh di setiap sudut dalam. Di antara lintasan, pahat tetap turun di tempat ia bergerak melalui udara potong, dan naik serta turun di udara potong di tempat lain. Lintasan dihitung pada kisi halus di atas wilayah (sel sekitar seperduabelas radius pahat), sehingga keterlibatan dapat melebihi satu sel dari yang diatur; dinding diselesaikan secara tepat. Area terbuka yang besar menghasilkan program yang panjang dengan banyak gerakan pendek.

## Simulasikan

Jalur pahat dibuat ulang setelah setiap perubahan (part juga). {{ui:Simulasikan}} juga menampilkan stok yang tersisa setelah seluruh program. Panel menampilkan:

- **Waktu siklus**: gerakan feed pada feed-nya, rapid sebagai garis lurus pada laju rapid dari setup, ditambah waktu ganti pahat. Mesin sungguhan berakselerasi, sehingga membutuhkan waktu lebih lama.
- **Gouge**: tempat pahat masuk lebih dari 0.02 mm di bawah permukaan part. Tanda merah menunjukkannya di tampilan.
- **Stok yang tersisa pada part**.

Stok adalah peta ketinggian dari atas (Z-map), sehingga tidak dapat menampilkan undercut. Seret **Pemutaran** untuk memindahkan pahat sepanjang program. Di tampilan, gerakan feed berupa garis padat dan rapid berupa garis putus-putus, satu warna per operasi.

Dengan **Tampilkan stok yang disimulasikan** aktif, stok diwarnai terhadap model, sel demi sel: **hijau** di tempat ia berada pada model (dalam 0.02 mm), **merah** di tempat pahat memotong ke dalam model, dan di tempat stok tersisa pada model **kuning** untuk kulit tipis, **oranye** untuk lebih banyak, memudar ke **abu-abu** stok yang belum terpotong pada 1 mm atau lebih. Warna dibuat ulang dengan setiap perubahan, dari peta ketinggian yang sama dengan angka di panel, sehingga hijau dan merah sesuai dengan baris Gouge. Chamfer sengaja memotong ke dalam model dan menampilkan merah di sepanjang tepinya.

## Posting G-code

Pilih kontrol di bawah **Post** dan tekan {{ui:Unduh G-code}} (atau {{ui:Post}} di bilah alat):

| Kontrol | File | Catatan |
|---|---|---|
| Fanuc-style ISO | .nc | %, nomor O, nomor baris, T M6 dengan G43 H, siklus baku |
| GRBL | .nc | Tanpa pengganti pahat atau siklus baku: penggantian pahat berhenti dengan M0, pengeboran ditulis sebagai gerakan biasa |
| LinuxCNC | .ngc | T M6 dengan G43 H, siklus baku, M2 |
| Buatan Anda | apa pun | Post yang Anda tulis atau ubah: {{ui:Edit post…}}, {{ui:Post baru…}}, {{ui:Impor file post…}} |

Setiap file dimulai dengan komentar untuk program, stok, offset kerja, dan pahat. Koordinat dalam milimeter dengan 3 desimal. {{ui:CSV jalur pahat}} dan {{ui:JSON jalur pahat}} mengekspor gerakannya sendiri.

**Periksa keluarannya di simulator mesin Anda sendiri sebelum memotong, dan jalankan di udara di atas stok terlebih dahulu.** Ketiga post bawaan adalah titik awal yang mengikuti perilaku kontrol yang terdokumentasi; belum dibuktikan pada mesin tertentu mana pun. Post yang Anda ubah adalah tanggung jawab Anda untuk dibuktikan. Cara menulisnya: [Post processor](topic:post-processors).

## Exact STEP untuk bengkel

Di bawah tombol G-code pada tab **Operations**, {{ui:Exact STEP (koordinat kerja)}} mengunduh `<part>-work.step`: part sebagai solid eksak (silinder sungguhan untuk lubang dan boss, lingkaran sungguhan untuk tepinya) dengan titik asalnya di titik nol kerja setup ini dan Z sepanjang sumbu pahat. Itulah koordinat yang digunakan G-code, sehingga program CAM atau pemeriksa bengkel memposisikan model sejajar dengan program tanpa memindahkannya. File hanya berisi part, bukan stok atau jalur pahat.

{{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} menulis solid yang sama pada posisi part itu sendiri (Z ke atas): lihat [Ekspor untuk pencetakan, STEP, dan DXF](topic:export-files#for-other-cad-programs-step).

## Batasan

- Kantong, kontur, pengeboran, dan chamfer adalah 2.5-sumbu. Muka melengkung dapat diselesaikan dalam 3D ([sejajar dan scallop](topic:finish-3d)) tetapi tidak dapat dikasarkan dalam 3D (kerucut dibiarkan sebagai tangga sampai Anda menyelesaikannya), dan tidak ada machining sisa. Pembersihan adaptif adalah 2D (lantai datar).
- Hanya tiga sumbu: tanpa memiringkan, tanpa bubut, tanpa inspeksi.
- Pemegang dan shank tidak diperiksa tabrakannya; peringatan muncul ketika potongan lebih dalam daripada panjang flute.
- Feed dan kecepatan adalah nilai awal. Post adalah teks yang dapat Anda sunting, tetapi hanya menentukan cara gerakan dituliskan; ia tidak dapat mengubah jalur pahat, menambah sumbu, atau mengetahui mesin Anda ([Post processor](topic:post-processors) mencantumkan apa yang tidak dapat dilakukannya).

## Kirim program ke mesin

Di CadCraft Studio di desktop, dengan mesin yang sudah diatur di Studio, **Kirim ke mesin…** muncul di sebelah **Unduh G-code** dan mengunggah program yang sama ke mesin di jaringan Anda. Tidak pernah dimulai dari PartCraft: mulai di mesin ketika sudah jelas. Di peramban tombol ini tidak ditampilkan (halaman web tidak dapat menjangkau mesin di jaringan Anda): unduh programnya sebagai gantinya.
