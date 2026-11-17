---
title: Ekstrusi boss dan potong tembus
summary: Ubah sketsa menjadi solid dengan Ekstrusi, atur kedalaman buta, tengah bidang, sampai, atau dua arah, taper, atau satu kontur sketsa, lalu buat sketsa pada muka dan Potong kantong atau slot tembus.
keywords: ekstrusi, boss, ekstrusi boss, potong, potongan ekstrusi, kantong, tembus semua, buta, tengah bidang, balik, kedalaman, potong-ekstrusi, boss-ekstrusi, pad, sampai muka, sampai berikutnya, sampai verteks, offset dari muka, arah 2, dua arah, draft saat ekstrusi, taper, kontur, region, kontur terpilih
from: 3b13ff10
---

{{ui:Ekstrusi}} mendorong profil tertutup sketsa keluar dari bidangnya untuk membuat material. {{ui:Potong}} melakukan hal yang sama tetapi menghapus material. Keduanya adalah fitur yang sama di bawahnya; Anda dapat mengubah salah satunya menjadi yang lain nanti.

## Ekstrusi boss

1. Gambar profil tertutup dan tutup sketsa (lihat [Buat sketsa pertama Anda](topic:sketch-basics)). Sketsa tetap terpilih.
2. Pilih {{ui:Ekstrusi}}.

Solid 10 mm muncul, "Extrude1" masuk ke riwayat dengan sketsanya menjorok di bawahnya, dan bilah status menampilkan "Extrude1 ditambahkan. Ubah angkanya di sebelah kanan."

**Sketsa yang dipakai:** sketsa yang baru saja Anda tutup, atau sketsa yang dipilih di riwayat. Jika tidak ada yang dipilih, PartCraft mengambil sketsa terbaru yang belum dipakai fitur mana pun. Jika tidak ada, tampilkan: "Buat sketsa dulu: pilih bidang, Sketsa, gambar profil tertutup, Keluar."

### Atur kedalaman dan arah

Di panel kanan:

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| **Operasi** | Boss (tambah material), Potong (buang material), Intersect (simpan irisan), Body baru (belum dibuat pada versi ini: memerlukan kernel eksak) | Boss |
| **Akhir** | Buta (kedalaman), Tengah bidang (kedua arah), Tembus semua, Sampai muka atau bidang, Sampai muka berikutnya, Sampai verteks, Offset dari muka | Buta |
| **Kedalaman (mm)** | Ukuran apa pun di atas nol (ditampilkan untuk Buta dan Tengah bidang) | 10 |
| **Balik arah** | Tumbuh ke sisi lain dari bidang sketsa (tidak ditampilkan untuk Tengah bidang) | Mati |

Ketik angka lalu tekan {{key:Enter}} atau {{key:Tab}}: part langsung dibangun ulang. **Tengah bidang** menempatkan setengah kedalaman di setiap sisi sketsa.

### Sampai muka, muka berikutnya, atau verteks

Belum dibuat pada versi ini: setiap ujung "sampai" memerlukan kernel eksak, dan fitur menampilkan "Mengekstrusi sampai muka, muka berikutnya, atau verteks: belum dibuat (memerlukan kernel eksak)." Gunakan kedalaman Buta yang Anda ukur. Dengan kernel eksak, ujung-ujung ini bekerja seperti berikut:

- **Sampai muka atau bidang**: **Sampai** mengambil muka datar (Pilih, lalu klik) atau bidang referensi. Muka yang sejajar dengan sketsa memberi kedalaman eksak; muka yang miring memotong ujungnya pada lereng. Jika muka berada di belakang sketsa: "… Coba Balik arah."
- **Sampai muka berikutnya**: berhenti pada muka datar pertama dari body yang ditemui ekstrusi (muka melengkung tidak didukung di sini, dan fitur menyatakannya).
- **Sampai verteks**: berhenti sejajar dengan sebuah verteks (klik dekat ujung tepi) atau fitur titik.
- **Offset dari muka**: seperti Sampai muka, berhenti **Offset (mm)** sebelum muka itu (diukur tegak lurus terhadap muka).

### Dua arah, taper, satu kontur

- **Arah kedua** (Buta): juga mengekstrusi **Kedalaman kedua (mm)** ke sisi lain dari sketsa.
- **Taper (°)**: sisi-sisinya miring saat bergerak, seperti draft; (negatif: keluar); hanya satu arah. Belum dibuat pada versi ini (memerlukan kernel eksak): biarkan di 0.
- **Region**: **Pilih region**, lalu klik di dalam loop yang akan diekstrusi; hanya region itu yang dipakai (lingkaran di dalam persegi: klik di dalam lingkaran untuk silinder, di antara keduanya untuk pelat dengan lubang). **Semua** kembali ke setiap loop.

Di bawah pengaturan ini, **Dimensi sketsa** mencantumkan dimensi penggerak sketsa, sehingga Anda dapat mengubah ukuran profil tanpa membuka sketsa.

:::note
**Tembus semua hanya untuk potongan.** Boss yang diatur ke Tembus semua gagal dengan "Tembus semua hanya untuk potongan. Gunakan kedalaman untuk boss." Memindahkan fitur dari Potong kembali ke Boss mengubah Tembus semua menjadi Buta untuk Anda.
:::

## Potong kantong

1. Klik muka datar tempat Anda ingin memotong. Muka itu disorot, dan panel kanan menampilkan **Muka**.
2. Pilih {{ui:Buat sketsa pada muka ini}} (atau {{ui:Sketsa}} di bilah alat).
3. Gambar garis tepi kantong, misalnya persegi panjang, lalu beri dimensinya.
4. Pilih {{ui:Keluar}}.
5. Pilih {{ui:Potong}}. Awalnya **Tembus semua**: menghapus material hingga menembus part.
6. Untuk kantong, atur **Akhir** ke **Buta (kedalaman)** dan ketik **Kedalaman (mm)**.

Potongan masuk ke dalam material, menjauhi muka tempat Anda membuat sketsa. Jika bilah status menampilkan "Tidak ada yang bisa dipotong di sisi sketsa itu. Coba arah lainnya.", centang **Balik arah**.

Sketsa di lantai kantong mengikuti lantainya: ubah kedalaman kantong dan sketsa ikut bergerak.

## Tarik atau dorong seluruh muka

Untuk membuat muka menonjol lebih jauh atau masuk ke dalam, Anda tidak perlu menggambar garis tepinya. Klik muka datar, lalu di panel kanan:

- {{ui:Ekstrusi dari muka ini}} menarik muka keluar: PartCraft menambahkan sketsa pada muka yang memuat garis tepinya (lubang pada muka tetap menjadi lubang) dan Ekstrusi 10 mm.
- {{ui:Potong ke dalamnya}} mendorong muka masuk: sketsa yang sama dan Potong sejauh setengah bagian part.

Keduanya adalah satu langkah: {{key:Mod+Z}} menghapus sketsa dan fitur sekaligus. Fitur baru dipilih, jadi ketik angka segera dan tekan {{key:Enter}} untuk kedalamannya. Garis tepi disalin sebagai garis dan busur tetap: tidak mengikuti perubahan muka berikutnya. Jika sebagian garis tepi tidak dapat disalin (kurva bebas), sketsa terbuka dengan bagian yang berhasil disalin; selesaikan, lalu pilih {{ui:Keluar}} dan {{ui:Ekstrusi}} atau {{ui:Potong}}.

## Profil dengan pulau

Sebuah sketsa dapat memuat beberapa loop tertutup. Loop yang berdampingan menjadi boss (atau potongan) yang terpisah; loop di dalam loop lain menjadi lubang yang menembus boss. Misalnya, persegi panjang dengan dua lingkaran di dalamnya diekstrusi sebagai pelat dengan dua lubang.

Untuk memakai hanya sebagian loop, pilih dengan **Region** (di atas); fitur lain dapat memakai loop lain dari sketsa yang sama.

## Sunting nanti

- Klik "Extrude1" di riwayat untuk memunculkan kembali pengaturannya.
- Klik dua kali sketsanya (menjorok di bawahnya) untuk membuka sketsa; tutup untuk membangun ulang.
- Lihat [Ubah part melalui riwayatnya](topic:edit-history) untuk menangguhkan, kembali ke titik, mengurutkan ulang, dan menghapus.

## Pesan umum

| Pesan | Yang harus dilakukan |
|---|---|
| "Sketsa tidak memiliki profil tertutup untuk diekstrusi." | Sketsa tidak memiliki loop tertutup dari garis solid. Tutup celahnya, atau ubah kembali garis konstruksi dengan {{key:Q}} |
| "Profil terbuka: ujung di (x, y) tidak tersambung ke apa pun." | Buka sketsa dan sambungkan ujung itu ke garis berikutnya |
| "Belum ada yang bisa dipotong." | Potong memerlukan solid untuk dipotong. Buat boss terlebih dahulu |
| "Tidak ada yang tersisa dari part setelah ini." | Potongan menghapus semuanya. Periksa ukuran dan arahnya |

Selengkapnya di [Pemecahan masalah](topic:troubleshooting).
