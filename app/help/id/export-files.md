---
title: Ekspor untuk cetak, STEP, dan DXF
summary: Ekspor part sebagai STL atau 3MF untuk cetak 3D, sebagai solid STEP eksak untuk program CAD dan CAM lain, serta sketsa atau muka datar sebagai DXF untuk pemotongan laser dan waterjet.
keywords: ekspor, simpan sebagai, ifc, bim, set properti, stl, 3mf, cetak 3d, slicer, step, stp, step eksak, b-rep, ap242, ap214, cam, bengkel mesin, frais, dxf, laser, waterjet, cnc, pola bentangan, profil, mesh, berfaset
from: e1de71d5
---

Ekspor adalah salinan dalam format lain. Simpan juga file `.partcraft.json`: itu satu-satunya file yang dapat dibuka dan disunting kembali oleh PartCraft.

Semua ekspor bekerja pada part yang tampil di layar, dalam milimeter. Dalam rakitan, STL, 3MF, STEP, dan Gambar (PDF) mengekspor seluruh rakitan: lihat [Daftar part, tampilan terurai, dan part yang dapat digerakkan](topic:assembly-bom-explode). Jika belum ada solid: "Belum ada solid untuk diekspor."

## Untuk cetak 3D: STL atau 3MF

1. Opsional: untuk permukaan bulat yang halus, klik ruang kosong agar tidak ada yang dipilih, lalu atur **Kurva** ke **Halus (128 per putaran)** atau **Sangat halus (256 per putaran)** di panel kanan. STL dan 3MF selalu tersusun dari segitiga.
2. Pilih {{ui:Ekspor}}, lalu {{ui:STL, untuk cetak 3D}} atau {{ui:3MF, untuk cetak 3D}}.
3. File diunduh. Bilah status menampilkan, misalnya, "Diekspor Part1.stl (binary, mm, Z ke atas, 1536 segitiga)."

Kedua format bersifat **Z ke atas**, seperti yang diharapkan printer dan slicer. Ruang PartCraft sendiri menggunakan Y ke atas, sehingga ekspor memutar part: apa yang menghadap ke atas di PartCraft (tegak lurus bidang Top) menghadap ke atas di slicer, dan part yang disketsa pada bidang Top terletak datar di alas cetak. Atur orientasi akhir di slicer Anda jika perlu.

3MF adalah format yang lebih baru dan lebih kecil, yang dibaca slicer beserta satuannya. Gunakan STL jika sebuah program tidak menerima 3MF.

Untuk memeriksa lebih dulu bahwa part tertutup, muat di alas printer Anda, dan berdiri di muka yang datar, gunakan {{ui:Ekspor}} › {{ui:Periksa untuk cetak 3D (STL atau 3MF)…}}: lihat [Siapkan part untuk cetak 3D](topic:print-3d).

## Untuk program CAD lain: STEP

Pilih {{ui:Ekspor}}, lalu {{ui:STEP AP242 (solid eksak)}}. Format ini menulis part sebagai satu solid eksak, dalam milimeter, dengan Z ke atas. Permukaan bulat ditulis sebagai silinder, kerucut, bola, dan torus yang sebenarnya, dengan lingkaran sejati untuk tepinya, sehingga program lain dapat mengenali lubang sebagai lubang. Body yang dibuka dari file STEP mempertahankan muka datar, silinder, kerucut, bola, dan torus dari file tersebut, sehingga ikut keluar secara eksak. Muka tanpa permukaan seperti itu (sisi spline, ulir yang dimodelkan, body dari mesh STL, OBJ, atau 3MF, spline pada file STEP, serta muka hasil sweep dan revolusi) tetap berupa facet datar dalam solid yang sama, dan bilah status menyebutkan jumlahnya. Bilah status menampilkan, misalnya, "Diekspor Flange.step (AP242, solid eksak, mm, Z ke atas): 14 muka pada permukaan sebenarnya (10 silinder, 1 kerucut, 0 bola, 0 torus), 0 kurva tepi terpasang." Solid saja: tanpa riwayat, tanpa sketsa, tanpa gambar. Jika program lain hanya membaca AP214, pilih {{ui:STEP AP214 (solid eksak)}}: solid yang sama dalam skema yang lebih lama.

Yang eksak dan yang tidak:

- Muka datar, silinder (lubang, boss, fillet pada tepi lurus), kerucut (countersink, taper), bola, dan torus bersifat eksak, begitu pula tepi lurus, melingkar, dan elipsnya. Pengaturan **Kurva** tidak mengubahnya.
- Jika dua muka bulat saling berpotongan (lubang yang dibor melintang pada poros), tepinya adalah kurva halus yang dipasang pada kedua permukaan dalam toleransi 0,00001 mm; "kurva tepi terpasang" menghitungnya.
- Rongga tertutup di dalam part ditulis sebagai void pada solid. Beberapa body terpisah ditulis sebagai beberapa solid.
- Rakitan belum ditulis sebagai STEP eksak: ekspor setiap part.

Hasilnya diperiksa dengan membaca kembali file di OpenCascade, yang melaporkan solid yang valid dengan volume yang dihitung manual. Belum semua program CAD atau CAM membukanya; jika ada yang menolak file, {{ui:STEP (berfaset, kernel mesh)}} menulis bentuk yang sama sebagai muka datar (dalam sumbu PartCraft sendiri, Y ke atas), dan mohon beri tahu kami melalui {{ui:Bantuan}} › {{ui:Laporkan masalah}}.

Untuk pemesinan, ruang kerja Manufacture juga menulis solid eksak dalam koordinat kerja setup: lihat [Buat jalur pahat dan G-code](topic:manufacture#exact-step-for-the-shop).

## Untuk program BIM: IFC dengan setiap properti

Pilih {{ui:Ekspor}}, lalu {{ui:IFC 4 (dengan setiap properti)}}. Format ini menulis part sebagai elemen IFC 4 untuk model bangunan dan pabrik, dengan bentuknya sebagai segitiga (Z ke atas, milimeter) dan apa yang diketahui PartCraft tentangnya sebagai set properti:

| Set properti | Berisi |
|---|---|
| **PartCraft_Part** | Nama, material dan kepadatannya, konfigurasi yang aktif, jumlah bodi; dalam rakitan juga nomor part dan deskripsi |
| **PartCraft_Parameters** | Setiap parameter part dengan nilainya; ekspresi rumus dan catatan ada di deskripsi properti |
| **PartCraft_TitleBlock** | Isian kepala gambar yang Anda isi (judul, nomor gambar, revisi, perusahaan, digambar, diperiksa dan disetujui oleh, tanggal, finish, toleransi umum) dan ukuran lembar |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, luas permukaan, massa (dengan material), dan ukuran keseluruhan |

Material dilampirkan sebagai material IFC, dan nomor gambar menjadi tag elemen. Dalam rakitan, setiap part ditulis sekali sebagai tipe yang memuat propertinya, dan setiap salinan ditempatkan di posisi yang diberikan rakitan dengan nilainya sendiri dalam **PartCraft_Instance**: namanya, nomor item dalam daftar material, dan apakah ia part yang diam.

## Untuk profil laser, waterjet, atau CNC: DXF

Ada dua jenis DXF, keduanya versi R12, yang dibuka oleh setiap program CAD dan CAM:

### Sebuah sketsa

1. Pilih sketsa di riwayat (atau pastikan sudah terbuka).
2. Pilih {{ui:Ekspor}}, lalu {{ui:DXF sketsa atau muka datar}}. (Panel kanan sketsa juga memiliki {{ui:Ekspor sebagai DXF}}.)

Anda mendapatkan `<part> - <sketch>.dxf` dalam koordinat sketsa itu sendiri: garis, busur, dan lingkaran sejati pada layer **PROFILE**, geometri konstruksi pada **CONSTRUCTION**, dan titik lepas pada **POINTS**.

### Muka datar dari solid

1. Klik muka datar di tampilan (misalnya bagian atas pelat dengan lubang).
2. Pilih {{ui:Ekspor muka sebagai DXF}} di panel kanan, atau {{ui:Ekspor}}, lalu {{ui:DXF sketsa atau muka datar}}.

Anda mendapatkan `<part> - face.dxf`: garis tepi muka dan setiap lubang di dalamnya. Lubang bulat (lingkaran penuh di tempat silinder bertemu muka: lubang yang dibor, atau lubang dari file STEP yang dibuka) ditulis sebagai lingkaran sejati dengan pusat dan radius lubang itu sendiri. Setiap garis tepi lainnya berupa polyline tertutup, dan tepi bulatnya (sudut fillet, slot, busur) berupa facet-nya, jadi atur **Kurva** ke Halus terlebih dahulu jika pisau mengikutinya dengan rapat. Bilah status menyebutkan berapa banyak garis tepi, berapa yang berupa lingkaran sejati, dan luas muka itu.

Jika tidak ada sketsa maupun muka datar yang dipilih: "Buka atau pilih sketsa, atau pilih muka datar, untuk mengekspor DXF."

## Gambar

Panduan gambar PDF tersedia di: [Buat lembar gambar](topic:drawing-pdf).

## Format yang tidak tersedia

glTF, OBJ, IGES, dan Parasolid belum diekspor pada build ini. DWG hanya ditulis oleh paket varian, sebagai lembar gambar: lihat [Buat paket varian dari konfigurasi Anda](topic:variant-pack). Lihat [Format file](topic:file-formats).
