---
title: Bidang, sumbu, dan titik referensi
summary: Buat bidang yang berjarak dari muka, membentuk sudut, melalui tiga titik, di tengah, bersinggungan dengan silinder, tegak lurus terhadap tepi, atau melalui sebuah tepi dan sebuah titik; sumbu; titik di tengah tepi, perpotongan, dan sudut bidang; sketsa di atasnya dan gunakan sebagai sumbu revolusi, arah pola, dan bidang cermin.
keywords: datum, di antara objek, titik tengah, titik perpotongan, bidang melalui tepi dan titik, bidang referensi, bidang kerja, bidang konstruksi, bidang datum, bidang offset, bidang pada sudut, bidang tengah, bidang singgung, sumbu referensi, sumbu konstruksi, sumbu datum, titik referensi, titik kerja, sketsa pada bidang
from: e7eb6fc1
---

Geometri referensi adalah perancah tempat Anda membangun fitur: **bidang** untuk membuat sketsa di tempat tidak ada muka, **sumbu** untuk direvolusi atau dipola, **titik** untuk menghentikan ekstrusi. Ia tidak memiliki material sendiri. Bidang ditampilkan di tampilan sebagai persegi pucat, sumbu sebagai garis putus-putus, dan titik sebagai tanda silang kecil; ketiganya bergabung ke riwayat dan mengikuti asal-usulnya saat Anda mengubah ukuran di bagian atas riwayat.

Ketiganya ada di menu {{ui:Lainnya}} pada grup Fitur: {{ui:Bidang}}, {{ui:Sumbu}}, {{ui:Titik}}.

## Buat bidang

1. Klik muka datar, atau bidang dasar di riwayat, untuk memulai darinya (opsional).
2. Pilih {{ui:Lainnya}}, lalu {{ui:Bidang}}. Bidang mulai sebagai bidang offset yang berjarak 20 % dari ukuran part dari yang Anda pilih (atau dari bidang atas).
3. Di panel kanan pilih **Tipe** dan referensinya:

| Tipe | Referensi | Angka |
|---|---|---|
| Offset dari bidang atau muka | **Dari bidang** | **Jarak (mm)**, negatif untuk sisi lainnya |
| Pada sudut, melalui tepi atau sumbu | **Dari bidang**, **Putar terhadap** (sumbu dunia, fitur sumbu, atau tepi lurus yang dipilih) | **Sudut (°)** |
| Melalui tiga titik | **Titik 1**, **Titik 2**, **Titik 3** | — |
| Bidang tengah di antara dua | **Bidang pertama**, **Bidang kedua** (sejajar: di tengah; bertemu: bidang yang membagi sudut menjadi dua) | — |
| Singgung silinder | **Silinder** (muka silinder), **Titik terdekat** (sisi mana) | — |
| Tegak lurus tepi, di sebuah titik | **Tepi**, **Di titik** (bidang melalui titik tepi yang paling dekat dengannya, dan juga melalui titik itu) | — |
| Melalui sebuah tepi dan sebuah titik | **Tepi lurus** (atau sumbu), **Melalui titik** | — |
| Tegak lurus tepi di tengahnya | **Tepi** (di tengah panjangnya, tegak lurus di situ), atau tanpa tepi **Titik 1** dan **Titik 2** (bidang di tengah keduanya) | — |

Setiap referensi memiliki tombol **Pilih**: pilih, lalu klik di tampilan. Slot bidang menerima bidang dasar, bidang referensi, atau muka datar; slot titik menerima ujung sebuah tepi (klik dekat ujung itu), fitur titik, atau sebuah titik pada muka; slot tepi menerima sebuah tepi. {{key:Esc}} membatalkan pemilihan. **Balik normal** membalik bidang (menentukan arah sketsa di atasnya menghadap).

Pada versi ini, slot yang membutuhkan tepi atau muka silinder (Singgung silinder, dan slot Tepi) menjawab "belum dibuat": gunakan titik atau sumbu sebagai gantinya.

## Sketsa pada bidang

Pilih bidang (di riwayat atau dengan mengklik perseginya di tampilan) lalu pilih {{ui:Sketsa}}, atau **Sketsa di atasnya** di panelnya. Sketsa mengikuti bidang: ubah jarak bidang dan sketsa, serta setiap fitur di atasnya, ikut berpindah.

## Sumbu dan titik

- {{ui:Sumbu}}: melalui dua titik, sumbu silinder atau kerucut, tempat dua bidang bertemu, sepanjang tepi lurus (atau sumbu tepi melingkar), atau tegak lurus terhadap muka melalui sebuah titik.
- {{ui:Titik}}: pada koordinat, pada simpul atau titik sketsa, atau di pusat tepi melingkar, serta titik "di antara objek":

| Jenis titik | Referensi |
|---|---|
| Tengah sebuah tepi (atau di antara dua titik) | **Tepi** (di tengah panjangnya, juga untuk busur dan kurva), atau tanpa tepi **Titik 1** dan **Titik 2** |
| Tempat tepi atau sumbu bertemu muka atau bidang | **Tepi** (lurus atau melengkung) atau sumbu, dan **Bertemu bidang** (bidang atau muka datar) atau **Atau muka** (muka datar atau silinder). Lingkaran memotong bidang dua kali dan garis menembus silinder dua kali: **Perpotongan lainnya** mengambil yang kedua |
| Tempat tiga bidang bertemu | **Pertama**, **Kedua**, dan **Bidang ketiga** (bidang atau muka datar) |

Setiap jenis gagal dengan pesan sederhana jika referensinya tidak cocok: garis sejajar dengan bidang, garis yang tidak mengenai silinder, tepi yang tidak mencapai bidang, tiga bidang yang tidak bertemu di satu titik, atau titik pada garis yang seharusnya menetapkan bidang.

Gunakan di fitur lain:

| Tempat | Cara |
|---|---|
| Revolusi | **Sumbu**: pilih fitur sumbu dari daftar (harus berada di bidang sketsa) |
| Pola melingkar | **Sumbu**: fitur sumbu |
| Pola linear | **Arah**: fitur sumbu, atau bidang (normalnya) |
| Cerminkan | **Bidang cermin**: bidang referensi |
| Ekstrusi | **Akhir**: Sampai muka atau bidang, Sampai simpul (fitur titik). Belum dibuat pada versi ini (membutuhkan kernel eksak) |
| Draft (kemiringan cetak) | **Bidang netral** |

## Saat referensi hilang

Bidang yang dibuat dari muka yang sudah tidak ada akan gagal dengan pesan yang menyebutkannya, seperti "Muka tempat ia berada sudah hilang dari Extrude1." Bidang tidak pernah dipindahkan ke muka lain. Sketsa dan fitur di atasnya ditandai "belum dibuat" sampai Anda memilih referensi baru; bagian lain part tetap seperti semula.

:::note
Versi ini membangun setiap part dengan kernel mesh, yang membuat bidang, sumbu, dan titik dari bidang dasar, muka datar yang dibuat oleh Ekstrusi atau Revolusi, titik sketsa, koordinat, dan fitur referensi lainnya. Apa pun yang membutuhkan tepi, ujung sebuah tepi, atau muka melengkung membutuhkan kernel eksak: belum dibuat pada versi ini ("Ini menggunakan muka atau tepi dari solid, yang hanya dapat ditemukan oleh kernel eksak: belum dibuat pada versi ini.").
:::
