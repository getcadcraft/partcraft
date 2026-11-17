---
title: Permukaan lewat jaringan kurva (permukaan Gordon)
summary: Buat satu permukaan halus yang melewati kisi kurva profil dan pemandu yang digambar dalam sketsa atau diambil dari tepi model, tutup menjadi solid saat profil tertutup, serta apa yang eksak, apa yang dicocokkan, dan pesan saat jaringan tidak cocok.
keywords: tangen, g1, kontinuitas tangen, bidang cermin, permukaan gordon, jaringan kurva, permukaan batas, permukaan jaringan, profil, pemandu, kurva pemandu, loft dengan pemandu, rel pemandu, kulit, transfinite, coons, permukaan b-spline, permukaan bentuk bebas
from: ada3cb8b
---

:::note
**Belum dibuat dalam versi ini.** Permukaan Gordon memerlukan kernel geometri eksak, yang tidak dimiliki versi PartCraft ini: ia membangun setiap part dengan kernel mesh. [Yang belum dibuat](topic:not-built-yet) menjelaskan apa yang harus dilakukan sebagai gantinya. Sisa halaman ini menjelaskannya sebagaimana cara kerjanya dengan kernel eksak.
:::

**Permukaan Gordon** adalah satu permukaan yang melewati setiap kurva dalam jaringan: sekumpulan **profil** yang berjalan ke satu arah dan sekumpulan **pemandu** yang berjalan ke arah lain, saling bersilangan seperti benang jaring. Dengan cara inilah Anda membentuk lambung, spatbor, atau pegangan dari beberapa kurva penampang yang Anda kendalikan langsung. Fitur ini memerlukan **kernel eksak** (lihat [Kernel mesh](topic:solid-kernels)).

## Gambar jaringan

1. Gambar **profil**: dua kurva atau lebih yang berjalan sejajar, misalnya penampang pada bidang yang sejajar. Garis, busur, lingkaran, dan spline semuanya berfungsi, dan rangkaian kurva yang disambung ujung ke ujung dihitung sebagai satu kurva.
2. Gambar **pemandu**: dua kurva atau lebih yang berjalan melintang terhadap profil. Setiap pemandu harus memotong setiap profil satu kali, dan setiap profil memotong setiap pemandu satu kali.
3. Pastikan kurva benar-benar bertemu. Gambar sketsa pemandu agar kurvanya melewati titik-titik profil (snap ke titik proyeksi, atau ketik koordinatnya). Jaringan menerima celah hingga **Toleransi** (0.01 mm untuk awal).

Satu sketsa dapat memuat beberapa kurva: setiap rangkaian terpisah di dalamnya adalah kurva tersendiri. Jadi Anda dapat menggambar semua pemandu dalam satu sketsa pada bidang atas, misalnya.

## Buat permukaan

1. Pilih {{ui:Lainnya}} di grup Fitur, lalu {{ui:Permukaan Gordon}}.
2. PartCraft mengambil sketsa yang belum dipakai siapa pun: yang berada pada bidang sejajar dengan yang pertama menjadi **profil**, yang lain menjadi **pemandu**. Periksa daftar di kanan dan atur setiap sketsa ke **Profil**, **Pemandu**, atau **Tidak dipakai**.
3. Untuk memakai tepi part, klik **Pilih tepi sebagai profil** (atau **sebagai pemandu**), klik tepi di tampilan, lalu tekan Esc.

Hasilnya adalah **badan permukaan**. {{ui:Pertebal}} mengubahnya menjadi solid, {{ui:Jahit}} menjahitnya ke permukaan lain, dan {{ui:Pangkas permukaan}} memotongnya.

### Tutup menjadi solid

Saat profil berupa kurva tertutup (lingkaran, spline tertutup, rangkaian tertutup) dan profil pertama serta terakhir masing-masing rata pada satu bidang, centang **Tutup menjadi solid**. Ujung-ujungnya ditutup dengan muka datar, dan bentuk tertutup itu bergabung, dipotong, diiriskan, atau menjadi bodi baru seperti fitur lainnya. Begini cara membuat loft yang mengikuti kurva pemandu. Hal yang sama berlaku untuk pemandu tertutup.

## Tangen terhadap bidang di sepanjang tepi

Permukaan Gordon melewati kurvanya, tetapi dengan sendirinya ia tidak menyesuaikan kemiringan dari apa yang ditemuinya. Agar ia meninggalkan tepi secara **tangen** terhadap bidang (G1), misalnya bidang cermin, sehingga salinan cerminnya menyambung tanpa lipatan, atau muka datar tempat ia tumbuh:

1. Pilih fitur Gordon. Di bawah **Tangen terhadap**, pilih bidang di {{ui:Tambah bidang…}} (Depan, Atas, Kanan, atau bidang referensi), atau pilih muka datar di tampilan dan tekan {{ui:Tambahkan muka datar yang dipilih}}.
2. PartCraft menemukan kurva batas jaringan yang berada pada bidang itu, dan permukaan meninggalkannya secara tangen terhadap bidang.

Jika satu bidang memuat dua kurva batas (lantai di bawah kedua ujung), tambahkan dua kali: setiap salinan mengambil kurva berikutnya. Maksimal empat bidang, satu per tepi.

Laporan menyebutkan di sepanjang kurva mana setiap bidang membuatnya tangen dan sudut paling curam yang ditemui permukaan terhadap bidang itu sebelumnya. Pemandu yang sudah meninggalkan kurva itu secara tangen terhadap bidang akan diikuti secara eksak. Pemandu yang naik menjauhi kurva akan dilengkungkan dalam pita sempit dekat tepi, dan angka "mengikuti setiap kurva dalam" di laporan menunjukkan seberapa besar: gambar pemandu yang meninggalkan tepi secara datar untuk kecocokan eksak.

## Apa yang eksak dan apa yang dicocokkan

Panel menyebutkan mana dari ini yang berlaku, dan seberapa jauh permukaan menyimpang dari kurva Anda.

- **Eksak**: ketika setiap kurva berbentuk polinomial (garis, spline, dan rangkaiannya) dan pemandu memotong semua profil pada parameter yang sama, permukaan tepat merupakan permukaan Gordon dari kurva-kurva itu. Jaringan kurva iso yang dipotong dari permukaan bikubik mengembalikan permukaan itu, dan empat garis lurus menghasilkan tambalan datar atau terpuntir (bilinear).
- **Dicocokkan**: busur, lingkaran, dan tepi part tidak berbentuk polinomial, dan kurva yang saling memotong pada parameter berbeda harus diatur ulang waktunya agar titik potongnya sejajar. Kurva-kurva itu dicocokkan dengan B-spline kubik dalam sepersepuluh juta ukuran jaringan (sekitar 0.00001 mm untuk part 100 mm). Tambalan silinder yang dibuat dari busur dan garis tetap berada dalam 0.00001 mm dari silinder sebenarnya.

Di antara kurva, permukaan mengikuti apa yang diberikan metodenya: profil yang dicampur melintang, ditambah pemandu yang dicampur melintang, dikurangi campuran titik potong mereka. Permukaan halus di mana-mana kecuali di tempat kurva memiliki sudut tajam. Jika dua permukaan Gordon berbagi kurva batas, keduanya bertemu tepi ke tepi (G0), bukan tangen.

## Saat jaringan tidak cocok

| Pesan | Yang harus dilakukan |
|---|---|
| "… tidak bertemu: jaraknya 0.4 mm" | Buat profil dan pemandu itu saling memotong, atau naikkan Toleransi |
| "… bertemu … 2 kali" | Pemandu hanya boleh memotong setiap profil satu kali: pisah kurva yang berputar, atau gunakan lebih sedikit profil |
| "… dalam urutan berbeda" atau "terlipat pada dirinya sendiri" | Dua pemandu saling memotong (atau dua profil). Kedua keluarga harus berjalan sejajar |
| "minimal dua profil dan dua pemandu" | Tambahkan kurva, atau atur lebih banyak sketsa ke Profil atau Pemandu |
| "mencampur kurva terbuka dan tertutup" | Buat semua profil terbuka atau semua tertutup (sama untuk pemandu) |
| "Ujung … tidak rata, sehingga tidak dapat ditutup" | Gambar profil tertutup pertama dan terakhir masing-masing pada satu bidang, atau biarkan Tutup menjadi solid tidak aktif |

## Batasan

- Satu muka B-spline per jaringan: tidak ada tangen G1 atau G2 ke permukaan tetangga.
- Sambungan jaringan tertutup, pada pemandu pertama, tersambung tepi ke tepi tetapi tidak tangen.
- Fitur Loft sendiri tidak memiliki rel pemandu; gunakan permukaan Gordon yang ditutup menjadi solid sebagai gantinya.
- Kurva yang sangat bergelombang, atau titik potong yang berjarak sangat tidak merata di sepanjang satu kurva dibanding kurva lain, mungkin memerlukan terlalu banyak titik untuk dicocokkan; fitur akan menyatakannya.
