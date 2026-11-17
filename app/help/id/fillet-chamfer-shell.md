---
title: Bulatkan, miringkan, dan berongga dengan Fillet, Chamfer, dan Shell
summary: Pilih tepi dan tambahkan fillet dengan radius tetap atau variabel serta chamfer dengan jarak sama, dua jarak, atau jarak dan sudut; buat part berongga dengan Shell dengan memilih muka yang akan dibuka; ubah tepi atau muka yang dipakai suatu fitur; dan perbaiki kegagalan yang umum terjadi.
keywords: fillet, bulatkan, blend, chamfer, miringkan, shell, berongga, ketebalan dinding, tepi, muka, pilih tepi, shift klik, muka terbuka, kernel eksak, kernel mesh, belum dibuat
from: e41c1c12
---

:::note
**Pada versi ini** PartCraft membangun fillet dan chamfer dengan kernel mesh, hanya pada **tepi lurus di antara dua muka datar**: tepi kotak serta tepi lurus dari ekstrusi dan potongan, sudut luar atau dalam (sudut dalam mendapat material tambahan). Tepi bulat seperti bibir lubang, dan radius yang berubah sepanjang tepi, belum dibuat. Jika dua tepi bulat bertemu di sudut, pembulatannya disambung miring (bertemu pada lipatan tajam), bukan dicampur. **Shell** juga berfungsi, dibangun oleh kernel mesh: hanya membuka muka datar, shell dengan ketebalan dinding yang berbeda belum dibuat, dan lambat pada part dengan banyak muka bulat. Lihat [Yang belum dibuat](topic:not-built-yet).
:::

{{ui:Fillet}} membulatkan tepi, {{ui:Chamfer}} memiringkannya, dan {{ui:Shell}} membuat part berongga. Ketiganya bekerja pada tepi dan muka solid, dan dibangun oleh kernel mesh. Pembulatannya berfaset seperti setiap muka bulat lainnya (**Kurva** mengatur seberapa halus); muka bulatnya berupa silinder yang dapat Anda pilih dan ukur (lihat [Kernel mesh](topic:solid-kernels)).

## Bulatkan atau miringkan tepi

### Pilih tepinya dulu

1. Klik tepi part. Seluruh tepi disorot, dan panel kanan menampilkan **Tepi**: jenisnya (Lurus, Lingkaran atau busur, Kurva), panjang, dan muka tempat tepi itu berada.
2. Untuk menambah tepi, {{key:Shift}}+klik. Setiap tepi ditandai; {{key:Shift}}+klik tepi yang ditandai untuk membuangnya. Judul panel menghitungnya ("4 tepi") dan bilah status menampilkan "4 tepi dipilih. Fillet atau Chamfer membulatkannya; Shift+klik memilih lagi, Esc menghapus pilihan."
3. Pilih {{ui:Fillet}} atau {{ui:Chamfer}} di bilah alat, atau tombol yang sama di panel kanan.

Fitur ditambahkan dengan semua tepi yang dipilih: fillet 2 mm, atau chamfer 1 mm. Bilah status menampilkan, misalnya, "Fillet1 ditambahkan (4 tepi). Ubah ukurannya di sebelah kanan; Pilih tepi mengubah tepi mana."

### Atau tambahkan fitur dulu

1. Tanpa ada yang dipilih, pilih {{ui:Fillet}} atau {{ui:Chamfer}}.
2. PartCraft masuk ke mode pemilihan: judul panel kanan menampilkan "Fillet1: memilih", part tampil seperti sebelum fillet (panel menyatakannya), dan bilah alat menampilkan {{ui:Selesai}}.
3. Klik setiap tepi untuk menambahkannya; klik lagi untuk membuangnya. Bilah status menghitungnya.
4. Pilih {{ui:Selesai}} (atau {{ui:Selesai memilih}} di panel), atau tekan {{key:Esc}} atau {{key:Enter}}.

### Pengaturan

| Pengaturan | Fillet | Chamfer |
|---|---|---|
| Ukuran | **Radius (mm)**, bawaan 2 | **Jarak (mm)** dari tepi di kedua muka, bawaan 1 |
| **Tepi** | Berapa banyak | Berapa banyak |

Daftar di bawah menamai setiap tepi dengan dua muka yang menyambungnya, misalnya "Tepi 1: Extrude1 muka ujung × Extrude1 sisi". **Buang** menghapus satu tepi. {{ui:Pilih tepi}} kembali ke pemilihan. Klik dua kali fitur di riwayat melakukan hal yang sama.

Tepi diingat berdasarkan dua muka yang menyambungnya, sehingga tetap berada di tepi yang benar saat Anda mengubah dimensi di bagian atas riwayat.

### Radius variabel dan jenis chamfer

- **Radius variabel** (fillet): belum dibuat pada versi ini ("Fillet yang radiusnya berubah sepanjang tepi: belum dibuat (memerlukan kernel eksak). Berikan satu radius."). Dengan kernel eksak: centang dan atur **Radius akhir (mm)**. Radius berubah secara linear dari **Radius** di satu ujung setiap tepi ke **Radius akhir** di ujung lainnya; **Tukar ujung** membaliknya.
- **Jenis** (chamfer): **Jarak sama**, **Dua jarak** (dengan **Jarak kedua** pada muka lainnya), atau **Jarak dan sudut** (jarak pada satu muka, serong pada **Sudut (°)** terhadap muka itu). **Balik sisi** menempatkan jarak pertama pada muka lainnya.

## Shell pada part

1. Klik muka datar yang akan dibiarkan terbuka, misalnya bagian atas kotak. Atau {{key:Shift}}+klik beberapa muka.
2. Pilih {{ui:Shell}} di bilah alat, atau {{ui:Shell, membuka muka ini}} di panel muka.

Part menjadi dinding 2 mm dengan muka yang dipilih terbuka. Pengaturannya:

| Pengaturan | Fungsinya | Bawaan |
|---|---|---|
| **Dinding (mm)** | Ketebalan dinding | 2 |
| **Dinding tumbuh ke luar (muka tetap di dalam)** | Dicentang: dinding ditambahkan di luar, sehingga bagian dalam mempertahankan ukuran part | Mati: dinding masuk ke dalam dan bagian luar mempertahankan ukurannya |
| **Muka terbuka** | Berapa banyak muka yang dibuang | |

Ke dalam, dinding setebal dinding itu: sudut luar tetap tajam, sudut dalam menjadi membulat (radius = dinding), dan lubang tembus pada part mendapat tabung dinding di sekelilingnya. Ke luar, dinding ditambahkan di luar permukaan asli, yang menjadi rongga, dan tepi luarnya menjadi membulat. Muka bagian dalam dinamai sesuai muka yang di-offset, sehingga Anda dapat memilihnya.

Hanya muka datar yang dapat dibuka: memilih muka melengkung menampilkan "Shell: pada versi ini hanya membuka muka datar (kernel mesh yang membangunnya)." Shell lambat pada part dengan banyak muka bulat (beberapa detik per seribu segitiga): gunakan pengaturan **Kurva** yang lebih kasar saat Anda merancang.

{{ui:Pilih muka}} mengubah muka mana yang terbuka, dengan cara yang sama seperti memilih tepi. Daftar menamai setiap muka, misalnya "Muka 1: Extrude1 muka ujung". Shell tanpa muka terbuka tidak diizinkan: "Pilih muka yang akan dibuang (dibuka), lalu shell."

## Urutan itu penting

Fitur dibangun dari atas ke bawah. Fillet sebelum shell akan ikut di-shell bersama part, sehingga bagian dalamnya juga mendapat sudut membulat. Fillet setelah shell hanya membulatkan tepi yang Anda pilih. Pindahkan fitur dengan {{ui:Pindahkan ke atas}} dan {{ui:Pindahkan ke bawah}} (lihat [Ubah part melalui riwayatnya](topic:edit-history)).

Pola dan cermin tidak dapat menyalin fillet, chamfer, atau shell: "Fillet1 mengubah tepi atau dinding body; ia tidak dapat disalin. Salin fitur yang membuat solid (ekstrusi, revolusi, lubang, impor)." Buat pola lubang atau potongan terlebih dahulu, lalu bulatkan tepi semua salinan dalam satu fillet.

## Saat gagal

| Pesan | Yang harus dilakukan |
|---|---|
| "Pembulatan 5 mm tidak muat di sini (terlalu besar untuk muka di sebelah salah satu tepi, atau tepi bertemu di sudut yang tidak dapat dicampur oleh kernel)." | Gunakan radius yang lebih kecil, atau bulatkan lebih sedikit tepi sekaligus (beberapa fitur fillet, yang terkecil terakhir) |
| "Sebuah tepi yang dibulatkannya sudah hilang: tepi di antara Extrude1 dan Cut2." | Perubahan sebelumnya menghapus tepi itu. Pilih {{ui:Pilih tepi}}, buang tepi merah, dan pilih yang baru |
| "Shell tidak dapat dibuat dengan ketebalan ini (…)." | Dinding lebih tebal dari bagian model yang sempit, atau dari radius fillet. Buat dinding lebih tipis, atau fillet lebih besar dari dinding |
| "Muka itu tidak memiliki nama yang dapat diikuti riwayat; pilih yang lain." | Pilih muka yang dibuat oleh sebuah fitur (kebanyakan muka demikian) |
| "Fillet: pada versi ini hanya tepi lurus di antara dua muka datar (kernel mesh yang membangunnya). Bulatkan atau miringkan tepi melengkung di sketsa." (juga Chamfer) | Tepi yang dipilih berbentuk bulat, seperti bibir lubang, atau berada pada muka melengkung. Buang dengan {{ui:Pilih tepi}}, lalu bulatkan atau miringkan sudut itu di sketsa |
| "Fillet yang radiusnya berubah sepanjang tepi: belum dibuat (memerlukan kernel eksak). Berikan satu radius." | Hapus centang **Radius variabel** |
| "Fillet oleh kernel mesh: jika tepi yang dibulatkan bertemu, keduanya disambung miring, tidak dicampur." (⚠ di riwayat) | Peringatan, bukan galat: part tetap dibangun. Tepi yang dipilih bertemu di sudut, dan pembulatannya bertemu di sana sebagai lipatan tajam. Bulatkan lebih sedikit tepi, atau terima lipatannya |
| "Shell: pada versi ini hanya membuka muka datar (kernel mesh yang membangunnya)." | Muka yang terbuka melengkung. {{ui:Pilih muka}} dan buang; buka hanya muka datar |

## Batas

Pada versi ini fillet dan chamfer hanya bekerja pada tepi lurus di antara dua muka datar, dengan satu radius, dan pembulatan yang bertemu di sudut disambung miring. Shell hanya membuka muka datar. Dengan kernel eksak, fillet variabel berubah secara linear sepanjang setiap tepi (satu aturan per fitur; tidak ada radius pada titik-titik sepanjangnya). Fillet muka, fillet bulat penuh, dan shell dengan ketebalan dinding yang berbeda belum dibuat.
