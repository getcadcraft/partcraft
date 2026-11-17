---
title: Bentuk bebas dengan Form, dan fitur permukaan
summary: Dorong dan tarik sangkar kontrol halus di ruang kerja Form, lipat tepi, gunakan simetri, periksa dan selesaikan menjadi solid atau permukaan yang eksak, lalu tambal, loft, jahit, pertebal, offset, perpanjang, dan pangkas permukaan di Design. Mana yang eksak dan mana yang didekati.
keywords: form, bentuk bebas, t-spline, subdivisi, catmull-clark, sangkar, quadball, lipatan, simetri, zebra, kelengkungan, permukaan, patch, isi, permukaan loft, jahit, pertebal, offset permukaan, perpanjang, pangkas
from: 0d326ef4
---

:::note
**Belum dibuat dalam versi ini.** Menyelesaikan bentuk menjadi bagian dari part, dan fitur permukaan, memerlukan kernel geometri eksak, yang tidak dimiliki versi PartCraft ini: ia membangun setiap part dengan kernel mesh. [Yang belum dibuat](topic:not-built-yet) menjelaskan apa yang harus dilakukan sebagai gantinya. Sisa halaman ini menjelaskannya sebagaimana cara kerjanya dengan kernel eksak.
:::

Ruang kerja **Form** membuat bentuk organik. Anda menyunting **sangkar**, mesh kasar dari sudut, tepi, dan muka. Bentuknya adalah permukaan halus yang dikendalikan sangkar (permukaan batas Catmull–Clark-nya), sehingga menggeser satu sudut melengkungkan permukaan secara lembut di sekitarnya. Saat sudah sesuai, **Finishing** menambahkannya ke riwayat part sebagai fitur *Form*, dan kernel eksak mengubahnya menjadi permukaan B-spline sejati. Anda kemudian dapat memberinya fillet, memotongnya, menggabungkannya dengan fitur lain, dan mengekspornya sebagai STEP.

Pilih **Form** di daftar **Ruang kerja** di sebelah kiri bilah alat.

## Mulai sangkar

1. Atur **Ukuran** dan **Pembagian** di panel kanan. Pembagian adalah berapa banyak muka pada setiap sisi.
2. Klik {{ui:Kotak}}, {{ui:Quadball}}, atau {{ui:Bidang}} di bilah alat. Panel juga memiliki **Silinder**, **Torus**, dan **Muka dengan klik**.

- **Quadball** adalah sangkar kotak yang dipas sehingga titik sudutnya berada pada bola. Di antara titik-titik itu permukaan berada sedikit di dalam bola: sekitar 0.4 % lebih sedikit volumenya dengan 2 pembagian.
- **Bidang** terbuka, sehingga menjadi badan permukaan (lihat "Fitur permukaan di Design" di bawah).
- **Muka dengan klik**: klik 4 titik pada bidang atas (tanah) atau pada sudut sangkar untuk membuat satu muka. Muka yang berbagi sudut akan tersambung. Tekan {{key:Enter}} setelah 3 titik untuk segitiga, atau {{key:Esc}} untuk berhenti.

Sangkar Anda yang belum selesai disimpan bersama file part, sehingga Anda dapat menutup file dan melanjutkan nanti.

## Pilih dan pindahkan

- Klik sudut, tepi, atau muka sangkar. {{key:Shift}}+klik menambah atau mengeluarkan item. {{key:Esc}} menghapus pilihan.
- Gizmo muncul di tengah pilihan. Seret panah untuk bergerak di sepanjangnya, atau kotak untuk bergerak di bidangnya. Tekan {{key:W}} untuk pindah, {{key:E}} untuk putar, dan {{key:R}} untuk skala, atau gunakan tombol di panel. {{ui:Gizmo}} di bilah alat berpindah di antara mode-mode ini.
- **Peluruhan lunak** (mm) juga menarik sudut-sudut dalam jarak itu, memudar halus hingga nol di tepi jarak tersebut.
- Setiap seretan adalah satu langkah urungkan: {{key:Ctrl+Z}} dan {{key:Ctrl+Y}} bekerja seperti biasa.

## Ubah sangkar

Tombol **Ubah** di panel bekerja pada pilihan:

| Tombol | Fungsinya |
|---|---|
| {{ui:Ekstrusi}} | Muka yang dipilih bergerak keluar sejauh **Jarak ekstrusi**, sepanjang normalnya, dengan muka sisi baru. Tepi terbuka yang dipilih menumbuhkan muka baru ke luar. |
| {{ui:Loop tepi}} / Sisipkan loop tepi | Membagi cincin muka segi empat yang memotong tepi yang dipilih, di tengah jalannya. Lebih banyak loop memberi kurva yang lebih ketat. |
| Sisipkan titik | Menambahkan sudut di tengah tepi yang dipilih. |
| Subdivisi | Membagi setiap muka yang dipilih menjadi muka segi empat di sekitar tengahnya. |
| Jembatan | Menyambung dua muka yang dipilih, atau dua bukaan (pilih satu tepi terbuka di masing-masing), dengan tabung muka. Keduanya harus memiliki jumlah tepi yang sama. |
| Isi lubang | Menutup bukaan melalui tepi terbuka yang dipilih dengan satu muka. |
| Las | Menggabungkan sudut yang dipilih menjadi satu, di tengahnya. |
| Ratakan | Memindahkan sudut yang dipilih ke bidang yang paling sesuai dengannya. |
| Hapus | Menghapus muka, tepi (dua muka menyatu), atau sudut yang dipilih. |

## Tepi tajam, simetri, dan tampilan

- {{ui:Lipat}} membuat tepi yang dipilih menjadi tajam. **Bobot lipatan** 10 berarti sepenuhnya tajam. Bobot yang lebih kecil tetap tajam selama sejumlah langkah penyempurnaan itu lalu melunak, yang memberi lengkung rapat alih-alih lipatan keras. **Hilangkan lipatan** membuatnya halus kembali. **Verteks tajam** mengunci sudut sehingga permukaan melewati titik tersebut dengan sebuah titik.
- **Simetri** mencerminkan sangkar melintasi X, Y, atau Z = 0. Ia menyimpan sisi positif, mencerminkannya, dan menyambung kedua belah. Setelah itu, sebuah penyuntingan pada salah satu sisi berlaku pada kedua sisi. Sudut pada bidang cermin tetap berada di sana.
- {{ui:Tampilan}} berganti antara **Halus** (permukaan yang akan menjadi fitur) dan **Kotak** (muka sangkar itu sendiri).
- **Analisis**: **Garis zebra** memantulkan cahaya bergaris dari tampilan saat ini. Garisnya melengkung halus di permukaan halus dan terputus di lipatan. **Kelengkungan rata-rata** mewarnai area cembung merah, area cekung biru, dan area datar putih. Ia diukur pada mesh yang ditampilkan dengan rumus kotangen, sehingga ia adalah panduan, bukan pengukuran.

## Periksa dan selesaikan

- **Periksa eksak** mengonversi sangkar di kernel eksak tanpa mengubah part Anda. Ia melaporkan berapa banyak patch B-spline yang dibuat sangkar, berapa yang eksak, dan apakah hasilnya solid tertutup yang valid beserta volumenya.
- {{ui:Finishing}} menambahkan fitur *Form* ke riwayat, atau memperbarui form yang sedang Anda sunting, dan membawa Anda kembali ke Design. Sangkar tertutup menjadi solid. **Operasi** di panel Design dapat berupa Bodi baru, Gabung, Potong, atau Irisan. Sangkar terbuka menjadi badan permukaan.
- Untuk mengubah form nanti, pilih form di riwayat lalu klik **Sunting di Form**. Bodi yang sudah dibangun disembunyikan saat Anda menyunting sangkarnya.
- **Buang** membuang sangkar tanpa menyentuh riwayat.

## Apa yang eksak dan apa yang didekati

Setiap muka segi empat pada sangkar, disempurnakan bila perlu, menjadi satu patch B-spline bikubik.

- Jika setiap sudut muka bersifat *reguler* (empat tepi bertemu di dalam permukaan, atau tiga pada tepi terbuka atau di sepanjang lipatan), patch tersebut **eksak** sebagai permukaan subdivisi. Pengujian memeriksanya hingga 1e-9 mm.
- Di sekitar **titik luar biasa** (tiga, lima, atau lebih tepi bertemu, sudut dari muka tiga atau lima sisi, atau ujung lipatan) tidak ada patch polinomial yang eksak. Di sana patch mengambil titik eksak dan bidang tangen di sudut itu serta kurva tepi tetangga, sehingga patch tetap bertemu tanpa celah. Kontinuitas tangen di sepanjang tepi yang bertemu di titik itu bersifat perkiraan. Panel Form dan panel fitur memberi sudut terbesar, biasanya di bawah 2°. **Level** yang lebih tinggi di panel fitur membuat patch-patch ini lebih kecil dan lebih dekat.
- Lipatan tajam adalah tepi nyata dari solid, sehingga Anda dapat memberinya fillet.
- Setiap patch adalah muka tersendiri, sehingga form memiliki banyak muka dan garis digambar di antaranya.

## Fitur permukaan di Design

Perintah permukaan ada di menu {{ui:Lainnya}} Design, di bawah fitur. Perintah ini memerlukan kernel eksak. Badan permukaan digambar tembus pandang berwarna biru. Mereka bukan bagian dari solid sampai Anda mempertebalnya atau menjahitnya.

| Perintah | Fungsinya |
|---|---|
| Patch | Mengisi loop tertutup tepi. Pilih tepi solid dengan {{key:Shift}}+klik terlebih dahulu, atau pilih badan permukaan untuk mengisi bukaannya. **Tangen (G1)** membuat patch bertemu permukaan itu secara halus. |
| Permukaan loft | Permukaan melalui satu rangkaian kurva per sketsa (terbuka atau tertutup), sesuai urutan riwayat. |
| Jahit | Menjahit badan permukaan di sepanjang tepi yang dimiliki bersama. Jika tertutup, hasilnya adalah solid, dengan Operasi seperti fitur lainnya. |
| Pertebal | Memberi badan permukaan ketebalan: sepanjang normalnya, berlawanan dengannya, atau setengah ke masing-masing arah. Hasilnya adalah solid. |
| Permukaan offset | Salinan badan permukaan yang dipindahkan sepanjang normalnya. Aslinya tetap ada. |
| Perpanjang permukaan | Memperpanjang permukaan satu muka melewati tepi yang Anda pilih. |
| Pangkas permukaan | Memotong badan permukaan di tempat badan permukaan lain, atau solid, melintang. Klik **Pilih titik pada bagian** untuk memilih bagian yang dipertahankan, atau pertahankan semuanya. |

Jahit, Pertebal, Perpanjang, dan Pangkas menghabiskan badan permukaan tempat mereka dimulai. Fitur berikutnya menggunakan yang baru.

Batasan saat ini: form dengan beberapa bagian tertutup yang terpisah tidak dapat diubah menjadi satu solid; area reguler tidak digabung menjadi permukaan yang lebih besar; dan lihat [Yang belum dibuat](topic:not-built-yet).
