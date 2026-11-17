---
title: Ukur jarak, sudut, dan massa
summary: Klik dua hal di tampilan untuk jarak minimum, sudut, dan ΔX ΔY ΔZ; baca panjang tepi, diameter lubang, luas muka, atau koordinat titik; dapatkan volume, massa, pusat massa, dan inersia part atau rakitan.
keywords: ukur, jarak, jarak minimum, sudut, panjang, radius, diameter, luas, koordinat, delta, inspeksi, properti massa, massa, berat, pusat massa, inersia, momen inersia, kepadatan, material
from: 20bda0b7
---

**Ukur** bekerja pada model di setiap ruang kerja (Design, Form, Simulation, Generative, Manufacture) dan di rakitan. Tombolnya ada di menu {{ui:Tampilan}} pada grup {{ui:Tampilan}}, atau tekan {{key:M}}. Sebuah kartu terbuka di atas sudut kiri atas tampilan.

## Ukur satu hal

Klik titik sudut, tepi, atau muka. Kartu menampilkan:

- **Titik** (titik sudut, titik tengah tepi, atau pusat lingkaran): X, Y, Z-nya.
- **Tepi**: lurus, lingkaran, atau kurva, dan panjangnya; untuk lingkaran juga radius, diameter, dan pusatnya.
- **Muka**: datar, silinder, kerucut, dan sebagainya, serta luasnya; normal dari muka datar; radius dan diameter silinder (ukuran lubang). Luas dihitung dari facet yang dibangun kernel mesh.
- **Seluruh body**: tahan {{key:Shift}} dan klik part. Anda mendapat volume, luas, massa, dan inersianya (lihat di bawah).

Penunjuk menempel ke titik sudut, titik tengah tepi, dan pusat lingkaran dalam jarak 10 piksel; titik biru kecil menunjukkan tempelan sebelum Anda mengklik. Untuk memilih pusat lubang, arahkan ke tengah lubang; untuk memilih tepinya (lingkaran), arahkan ke tepinya.

## Ukur di antara dua hal

Klik item kedua. Kartu menambahkan:

- **Jarak minimum** dan dua titik terdekat, digambar di tampilan dengan garis di antaranya.
- **ΔX, ΔY, ΔZ** dari titik terdekat pertama ke yang kedua.
- **Sudut** di antara dua muka datar (antara normalnya, 0–180°), di antara dua tepi lurus atau sumbu (0–90°), atau di antara tepi dan muka.
- **Celah antar bidang** untuk dua muka datar sejajar, **Pusat ke pusat** untuk dua lingkaran atau lubang, **Sumbu ke sumbu** untuk dua lubang atau silinder sejajar.

Klik ketiga memulai pasangan baru. {{key:Esc}} menghapus pilihan; {{key:Esc}} lagi (atau {{ui:Tutup}}) menutup Ukur. {{ui:Salin}} menaruh hasil di papan klip sebagai teks yang dipisahkan tab, siap ditempel ke spreadsheet.

### Seberapa tepat

PartCraft membangun part dengan kernel mesh, sehingga jarak dihitung pada facet mesh dan kartu menyatakan **perkiraan: dari facet**: benar untuk muka datar dan di antara titik sudut, sedikit meleset untuk yang melengkung. Pengaturan **Kurva** yang lebih halus membuatnya lebih dekat. Pengukuran tepat pada permukaan sebenarnya memerlukan kernel presisi: belum tersedia di versi ini.

## Properti massa

Pilih {{ui:Properti massa}} di kartu atau di menu {{ui:Tampilan}}. Pada part, pilih **Material** di kartu (baja, aluminium, plastik, dan lainnya dengan kepadatan lazimnya). Di rakitan, setiap part menggunakan material yang diatur di propertinya (pilih part, lalu **Material**), dan hasilnya berlaku untuk semua part bersama-sama.

Kartu menampilkan massa, volume, luas, pusat massa, tensor inersia (Ixx, Iyy, Izz dan produk Ixy, Iyz, Ixz, dalam kg·mm², terhadap pusat massa sepanjang sumbu world), serta momen utama. Tanpa material, ia menampilkan hal yang sama per satuan kepadatan (mm⁵) dan tanpa massa.

Angkanya tepat untuk solid tessellated yang dibangun kernel mesh (muka melengkung sebagai facet), sehingga part bulat sedikit lebih rendah, dan kartu menyatakannya. Kepadatan material adalah nilai buku pegangan yang lazim; paduan atau kelas nyata dapat berbeda beberapa persen.

## Batasan

- Snap dapat menemukan titik yang tersembunyi di balik geometri lain; periksa bahwa kartu menunjukkan apa yang Anda maksud.
- Ukur ditutup saat Anda membuka sketsa atau lembar gambar, atau berpindah ruang kerja.
