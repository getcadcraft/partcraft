---
title: Fitur pola dan cerminan
summary: Ulangi fitur secara berderet dengan Linear, putar mengelilingi sumbu dengan Melingkar, dan salin fitur atau seluruh bodi melintasi bidang dengan Cerminkan.
keywords: pola, pola linear, pola melingkar, array polar, array, cerminkan, simetris, salin fitur, lingkaran baut, seed, cerminkan bodi
from: 702e9edb
---

Pola dan cerminan menyalin fitur yang sudah Anda bangun. Salinannya merupakan bagian dari riwayat: ubah yang asli, dan salinannya ikut berubah.

Yang disalin adalah apa yang dilakukan fitur: pola boss menambah material, pola potongan atau lubang menghapusnya. Pola dapat dipola ulang dan dicerminkan lagi. Solid STEP yang diimpor juga dapat disalin; fillet, chamfer, dan shell tidak bisa.

## Pola linear

1. Pilih fitur yang akan disalin di riwayat (misalnya Lubang atau Potongan). Jika tidak ada yang dipilih, fitur solid terakhir yang dipakai.
2. Pilih {{ui:Linear}}. Tiga salinan muncul berjarak 20 mm sepanjang X.
3. Di panel kanan, atur:

| Pengaturan | Fungsi | Bawaan |
|---|---|---|
| **Fitur yang disalin** | Centang setiap fitur yang akan disalin. Hanya fitur di atas pola yang didaftar | Fitur yang dipilih |
| **Arah** | Sumbu X, sumbu Y, sumbu Z, garis atau garis tengah dari sketsa sebelumnya, sumbu revolusi, atau tepi yang dipilih | Sumbu X |
| **Jarak (mm)** | Jarak antar-tetangga | 20 |
| **Jumlah** | Jumlah total, **termasuk yang asli** (1 sampai 1000) | 3 |
| **Balik arah** | Salinan bergerak ke arah sebaliknya | Mati |

### Gunakan tepi sebagai arah

1. Klik tepi lurus part di tampilan. Panel kanan menampilkan **Tepi** dan panjangnya.
2. Pilih {{ui:Linear}}: pola berjalan sepanjang tepi itu.

Atau pilih pola, pilih tepi, lalu pilih "Tepi yang dipilih (pakai yang baru dipilih)" di **Arah**. Tepi yang dipilih terkunci di ruang: tidak mengikuti perubahan berikutnya. Garis sketsa mengikuti sketsanya.

## Pola melingkar

1. Pilih fitur yang akan disalin (misalnya satu lubang dekat tepi cakram).
2. Pilih {{ui:Melingkar}}. Enam salinan muncul berjarak sama mengelilingi.
3. Atur:

| Pengaturan | Fungsi | Bawaan |
|---|---|---|
| **Fitur yang disalin** | Seperti pada Linear | Fitur yang dipilih |
| **Sumbu** | Sumbu X, Y, atau Z, garis sketsa, sumbu revolusi, atau tepi yang dipilih | Sumbu revolusi terakhir jika ada, jika tidak sumbu Y |
| **Sudut (°)** | 360 menyebar salinan secara merata ke seluruh lingkaran. Kurang dari itu menyebarkannya pada sudut tersebut, yang pertama dan terakhir di ujung | 360 |
| **Jumlah** | Jumlah total, termasuk yang asli | 6 |
| **Balik arah** | Berputar ke arah sebaliknya | Mati |

Sumbu dunia melewati titik asal. Untuk cakram yang tidak berpusat di titik asal, gunakan garis tengah sketsa atau sumbu revolusi.

### Contoh: delapan lubang baut pada flensa

1. Revolusi flensa (lihat [Merevolusi part bubutan](topic:revolve)) terhadap sumbu Y.
2. Buat sketsa di muka atas flensa yang rata, letakkan satu titik pada lingkaran baut, dan buat Lubang.
3. Dengan Lubang terpilih, pilih {{ui:Melingkar}}. Sumbunya sudah "Axis of Revolve1".
4. Atur **Jumlah** ke `8`.

## Cerminan

1. Pilih fitur yang akan dicerminkan di riwayat, atau jangan pilih apa pun untuk mencerminkan **seluruh bodi seperti yang sudah dibangun sejauh ini**.
2. Pilih {{ui:Cerminkan}}. Pencerminan dilakukan terhadap **Bidang kanan**.

Untuk mencerminkan seluruh bodi melalui muka part, klik muka rata itu lebih dulu, lalu pilih {{ui:Cerminkan}}. (Mengklik muka menghapus pilihan riwayat, sehingga ini selalu mencerminkan seluruh bodi.)

Pengaturan di panel kanan:

- **Cerminkan**: centang **Seluruh bodi (seperti yang sudah dibangun sejauh ini)**, atau hapus centangnya dan centang fitur yang akan disalin.
- **Bidang cermin**: Bidang depan, Bidang atas, Bidang kanan, muka yang digunakan sekarang ("Sebuah muka dari Extrude1" atau "Bidang tetap"), atau "Muka yang dipilih sekarang". Untuk mencerminkan fitur terpilih melalui sebuah muka: pilih Cerminkan di riwayat, klik muka di tampilan, lalu pilih "Muka yang dipilih sekarang".

Mencerminkan seluruh bodi melalui sebuah muka menggandakan part, misalnya braket setengah menjadi braket utuh.

## Pesan

- "Bangun fitur untuk disalin lebih dulu." atau "Bangun solid lebih dulu." Belum ada solid untuk disalin.
- "Pilih fitur yang akan disalin." Setiap kotak **Fitur yang disalin** dikosongkan.
- "Extrude2 tidak memiliki solid untuk disalin." Fitur itu gagal atau dinonaktifkan.
- "Fillet1 mengubah tepi atau dinding bodi; fitur ini tidak dapat disalin. Salin fitur yang membuat solid (ekstrusi, revolusi, lubang, impor)." Fillet, chamfer, dan shell tidak dapat dipola atau dicerminkan; buat pola dulu, lalu fillet.
- "Belum ada bodi untuk dicerminkan."

:::note
Salinan pola tidak bisa dilewati satu per satu, dan pola tidak bisa mengikuti kurva sketsa. Pola dan cerminan sketsa juga belum dibuat: gambar geometri sketsa yang berulang secara manual atau dengan **Tambah dengan koordinat**.
:::
