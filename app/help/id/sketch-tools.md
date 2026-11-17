---
title: Spline, pangkas, offset dan alat sketsa lainnya
summary: Gambar spline titik lewat dan spline titik kontrol, pangkas dan perpanjang kurva, offset sebuah rangkaian, cerminkan terhadap garis tengah, tambahkan poligon dan alur, pola geometri sketsa, dan proyeksikan tepi model.
keywords: spline, titik lewat, titik kontrol, b-spline, nurbs, kurva, pangkas, perpanjang, offset, cerminkan, simetris, poligon, heksagon, alur, pola, pola linear, pola melingkar, proyeksi, proyeksikan tepi, sertakan, konversi entitas
from: 3ecb166a
---

Alat-alat ini bekerja pada sketsa yang terbuka. {{ui:Spline}} dan {{ui:Pangkas}} ada di bilah alat. Yang lain ada di bawah {{ui:Lainnya}} di akhir alat sketsa. Setiap alat adalah satu langkah undo, dan {{key:Esc}} menghentikannya. Untuk alat menggambar dasar lihat [Buat sketsa pertama Anda](topic:sketch-basics).

## Spline

Spline adalah kurva yang halus. Ada dua jenis.

| Alat | Tombol | Cara menggambar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klik titik-titik yang dilalui kurva. Akhiri dengan {{key:Enter}}, {{key:Esc}}, klik kanan atau klik dua kali. Klik titik pertama lagi untuk menutup spline |
| {{ui:Spline titik kontrol}} (di bawah {{ui:Lainnya}}) | | Klik titik-titik kontrol. Kurva ditarik ke arahnya tetapi hanya menyentuh titik pertama dan terakhir. Poligon kontrol putus-putus tampil saat Anda menggambar dan sesudahnya |

- **Titik-titiknya adalah titik sketsa.** Seret, atau beri relasi dan dimensi seperti titik lainnya. Titik pertama spline dapat di-snap ke ujung garis, yang menyambungkannya dengan relasi berimpit.
- **Singgung di ujung.** Pilih garis, busur atau spline yang bertemu salah satu ujung spline, lalu pilih spline itu, dan pilih {{ui:T Singgung}}. Arah ujung spline kemudian mengikuti garis itu. Singgung yang jauh dari ujung spline ditolak: "Singgung ke spline memerlukan garis, busur atau spline yang bertemu salah satu ujungnya."
- **Ujung.** Tanpa relasi singgung, ujung spline titik lewat bersifat alami (tanpa kelengkungan di ujung paling akhir). Kurva berderajat tiga dan melewati setiap titik, dengan jaraknya ditentukan oleh jarak antar titik.
- **Spline tertutup** membentuk profilnya sendiri. Spline terbuka menyambungkan garis dan busur menjadi loop tertutup seperti kurva lainnya.
- Menghapus titik di dalam spline menghapus titik itu dan mempertahankan spline, selama masih memiliki setidaknya dua titik (tiga jika tertutup).

Ekstrusi dan revolusi membangun spline dengan kernel mesh dari potongan garis lurus pendek (kurva sejati memerlukan kernel eksak: belum dibuat pada versi ini). Ekspor DXF menulis spline sebagai polyline yang tetap dalam 0.01 mm dari kurva, karena DXF R12 tidak memiliki entitas spline.

## Pangkas dan perpanjang

| Alat | Tombol | Cara |
|---|---|---|
| {{ui:Pangkas}} | {{key:T}} | Tunjuk kurva: bagian yang akan hilang tampil merah, sampai ke perpotongan terdekat. Klik untuk menghapusnya. Kurva yang tidak memotong apa pun dihapus seluruhnya |
| {{ui:Perpanjang}} (di bawah {{ui:Lainnya}}) | {{key:E}} | Klik garis atau busur dekat ujungnya untuk memperpanjangnya. Ia tumbuh sampai ke kurva berikutnya yang ditemui. "Tidak ada yang dapat dijangkau ujung itu." jika tidak ada yang menghalangi |

Pangkas dan Perpanjang bekerja pada garis, busur, lingkaran dan spline (Perpanjang: garis dan busur).

- **Lingkaran** yang dipangkas menjadi busur. Dimensi radius atau diameternya pindah ke busur.
- Memangkas bagian tengah garis menyisakan dua garis yang tetap pada garis lurus yang sama. Memangkas bagian tengah busur menyisakan dua busur dengan pusat yang sama dan relasi sama.
- **Spline** yang dipangkas menjadi spline titik kontrol yang mengikuti kurva lama secara persis. Relasi singgung di ujung yang dipertahankan tetap.
- Ujung baru ditempatkan pada kurva yang memangkasnya (pada garis, busur atau lingkaran, atau berimpit dengan ujungnya). Spline tidak dapat menampung titik, sehingga spline yang memotong tidak menambah relasi.

**Relasi yang tidak lagi cocok dihapus**, dan bilah status menyatakan berapa banyak. Misalnya, dimensi panjang pada garis yang dipangkas dihapus, tetapi relasi horizontal atau sejajar tetap ada.

## Offset

1. Pilih {{ui:Offset}} di bawah {{ui:Lainnya}} atau tekan {{key:O}}.
2. Klik sebuah garis, busur, lingkaran atau spline. Seluruh rangkaiannya akan disorot: semua kurva yang tersambung ujung ke ujung, sampai titik tempat tiga atau lebih bertemu. Untuk meng-offset hanya sebagian rangkaian, pilih dulu kurva-kurva itu, lalu pilih Offset dan klik salah satunya.
3. Gerakkan penunjuk ke sisi tempat salinan akan dibuat. Pratinjau putus-putus akan mengikuti. Tekan {{key:B}} untuk kedua sisi.
4. Klik, ketik jarak, lalu tekan {{key:Enter}}.

Garis dan busur di-offset secara persis. Sudut diperpanjang atau dipangkas sampai bertemu. Salinan memiliki satu dimensi **Offset**, dan bagian lainnya mengikutinya: klik dua kali dimensi itu untuk mengubah seluruh salinan. Jarak yang terlalu besar untuk rangkaian ditolak, misalnya "Jarak itu terlalu besar untuk rangkaian ini: satu sisi akan terbalik ke dalam."

Spline di-offset dengan spline titik lewat baru dalam 0.001 mm dari offset sejati. Salinan ini tetap: ia tidak mengikuti perubahan berikutnya, dan tidak memiliki dimensi Offset. Spline dalam rangkaian memerlukan sambungan halus (singgung) di ujungnya.

## Cerminkan

1. Dengan Pilih, pilih apa yang akan dicerminkan.
2. Pilih {{ui:Cerminkan}} di bawah {{ui:Lainnya}} atau tekan {{key:M}}.
3. Klik garis atau garis tengah tempat pencerminan dilakukan.

Setiap titik yang dicerminkan mendapat relasi **Simetris** dengan aslinya, sehingga salinannya mengikuti saat aslinya berubah. Titik yang berada pada garis cermin dipakai bersama, dan lingkaran yang dicerminkan mendapat relasi Sama. Jika tidak ada yang dipilih, klik item yang akan dicerminkan, tekan {{key:Enter}}, lalu klik garis cermin.

## Poligon dan alur

| Alat | Cara |
|---|---|
| {{ui:Poligon}} | Klik pusat, lalu sudut, lalu ketik jumlah sisi (3 sampai 64). Sisi-sisinya sama dan sudutnya berada pada lingkaran konstruksi. Beri dimensi pada lingkaran untuk menentukan ukuran poligon |
| {{ui:Alur}} | Klik pusat satu ujung, lalu pusat ujung lainnya, lalu klik untuk menentukan lebar. Dua garis, bersinggungan dengan dua setengah lingkaran yang sama |

## Pola sketsa

Pilih geometrinya terlebih dahulu, lalu:

- {{ui:Pola linear}}: klik titik awal, lalu tempat salinan pertama, lalu ketik jumlah salinan (termasuk yang asli).
- {{ui:Pola melingkar}}: klik pusat, lalu ketik jumlah salinan, yang tersebar merata dalam satu putaran penuh.

Salinan membawa relasi di antara geometri yang dipilih (pola melingkar tidak menyertakan relasi horizontal dan vertikal). Salinan tidak terhubung dengan aslinya: ubah satu, dan yang lain tetap seperti semula.

## Proyeksikan tepi part

1. Pilih {{ui:Proyeksikan tepi}} di bawah {{ui:Lainnya}}.
2. Klik tepi lurus atau melingkar dari part yang berada di belakang sketsa.

Tepi disalin ke bidang sketsa secara persis dan dibekukan (relasi Tetap). Tepi tidak mengikuti perubahan berikutnya pada part. Tekan {{key:Q}} untuk menjadikannya geometri konstruksi. Lingkaran yang miring terhadap bidang sketsa akan terproyeksi menjadi elips, sehingga ditolak. Demikian pula tepi bebas dan tepi yang mengarah lurus keluar dari sketsa. Proyeksi memerlukan kernel eksak: belum dibuat pada versi ini.
