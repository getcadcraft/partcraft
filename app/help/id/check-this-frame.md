---
title: Periksa rangka ini
summary: Ambil bagian baja lurus dari konstruksi las (skid, dudukan, rangka dari tabung dan profil), letakkan peralatan di kakinya dan tumpuan di lantai, lalu lihat seberapa besar setiap bagian dan setiap las terpakai menurut AISC 360-16 atau EN 1993. Alat bantu sampai insinyur meninjaunya.
keywords: rangka, konstruksi las, skid, skid pompa, batang struktur, las, lasan, periksa, AISC 360, EN 1993, utilisasi, utilization, tumpuan, peralatan, beban, profil berongga, HSS, RHS, CHS, insinyur
from: 032e34ee
---

{{ui:Periksa rangka ini}} mengambil batang baja lurus dari konstruksi las, membangun rangka dari batang-batang itu, menyelesaikannya di bawah berat baja dan peralatan yang Anda letakkan di atasnya, lalu menguji setiap batang dan setiap las tempat batang bertemu. Satu kali jalan, satu tabel.

:::warning
Ini adalah **alat bantu sampai insinyur meninjaunya**. Ini bukan stempel, dan lulus bukan berarti desain. Ia menggunakan garis tengah batang seperti yang digambar, menganggap setiap sambungan dilas di seluruh penampang, mengambil kaki las dari dinding profil (hingga 8 mm) kecuali Anda mengaturnya, dan tidak memeriksa baut, pelat, pelat dasar, angkur, tumpuan, block shear, kelelahan, atau pengangkatan.
:::

## Jalankan

1. Gambar batang dengan {{ui:Batang struktur}} (profilnya berasal dari tabel profil).
2. Buka {{ui:Tampilan}} › {{ui:Periksa rangka ini}}. Nyatakan di mana rangka berdiri (sebuah **tumpuan** di setiap kaki: sendi, jepit, atau rol; {{ui:Tumpuan sendi di kaki}} menempatkan satu di setiap ujung batang terendah) dan apa yang berada di atasnya (**peralatan**: massa, pusat gravitasi, titik tempat ia dibaut ke bawah, dan dorongan horizontal opsional).
3. Pilih kode: **ASCE 7 + AISC 360-16** atau **EN 1990 + EN 1993**. Atur mutu baja dan, untuk AISC, kekuatan logam las (482.6 MPa adalah E70).
4. Tekan {{ui:Periksa}}. {{ui:Simpan laporan sebagai CSV}} menulis setiap tabel, dengan baris bukan-ditinjau di paling atas.

Rangka dibaca dalam milimeter dengan sumbu vertikal benda ke atas. Tumpuan dan titik peralatan diketik sebagai x y z dalam bingkai yang sama, dengan z sebagai ketinggian.

Ujung batang yang jatuh di tengah batang lain membagi batang itu di sana, begitu pula kaki atau titik baut-bawah di garis batang. Beban dibagi di atas titik baut-bawah sebagai benda kaku; pusat gravitasi di luar kaki, atau gaya angkat di sebuah kaki, dinyatakan, tidak pernah disembunyikan.

## Yang Anda dapatkan

- Item yang paling banyak terpakai dan apakah ada yang gagal. Item yang tidak dapat dinilai pemeriksaan (profil yang tidak ada di tabel, atau baja tanpa faktor dalam kode) dihitung dan disebutkan namanya, tidak pernah dihitung sebagai lulus.
- Satu baris per batang dan per kelompok las: seberapa besar yang terpakai, pemeriksaan dan klausul yang mengatur, serta kombinasi beban yang mengatur.
- Tabel yang sama di dalam laporan.

## Yang diperiksa

Penampang berongga (RHS, SHS, CHS, pipa) dan penampang I untuk tarik, tekan, lentur, geser, dan interaksinya; las sudut dan las penetrasi penuh dengan metode vektor elastis. Dinding kompak hanya untuk lentur pada penampang berongga; dinding langsing dinyatakan sebagai tidak diperiksa. Beberapa konstanta ditulis dari standar dan belum dibandingkan dengan salinan cetak; laporan mencantumkan setiap sumbernya.

Lihat [Rangka dari profil baja](topic:structural-members) untuk menggambar batang dan daftar potongnya.
