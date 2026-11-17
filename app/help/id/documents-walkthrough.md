---
title: Dokumen dan revisi (vault)
summary: Panduan langkah demi langkah untuk satu pekerjaan nyata: menempatkan folder proyek berisi part dan rakitan di bawah kendali, men-check out sebuah part, mengubahnya, men-check in dengan catatan, merilisnya, melihat apa yang memakainya dan daftar material, apa yang dilihat orang kedua saat file terkunci, dan cara kerjanya dengan folder cloud.
keywords: vault, dokumen, panduan, tutorial, check out, check in, revisi, rilis, setujui, kunci, riwayat, di mana dipakai, daftar material, bom, rakitan, folder cloud, folder proyek, dua orang, folder bersama
from: 0a5e6983
---

## Yang akan Anda lakukan

Anda adalah Ana, yang mengerjakan Klinik Riverside bersama rekan, Ben. Part dan rakitan proyek berada dalam satu folder yang bisa Anda berdua akses (drive bersama, folder yang disinkronkan, atau folder cloud). Pada akhirnya, satu file telah berpindah dari salinan pertamanya menjadi revisi **A** yang dirilis, diubah lagi sebagai **B.1**, Anda telah melihat siapa melakukan apa, dan Anda telah melihat apa yang dilihat Ben saat Anda memegang file tersebut.

Semuanya disimpan dalam folder tersembunyi `.ccvault` di sebelah file Anda: tanpa server, tidak ada yang diunggah (folder cloud adalah pengecualian, lihat langkah terakhir). Untuk setiap tombol dan aturan dalam satu tempat, lihat topik *Dokumen: check out, revisi dan rilis* di aplikasi Anda jika tersedia.

## 1. Siapkan folder proyek

1. Pilih {{ui:Dokumen…}} di grup **File** pada bilah alat.
2. Pilih {{ui:Pilih folder proyek}} lalu pilih folder yang berisi part dan rakitan proyek. (Folder proyek berfungsi di Studio dan di peramban yang dapat membuka folder, seperti Chrome dan Edge. Di peramban lain, panel akan menyatakannya.)
3. Pilih {{ui:Ubah}} di samping **You:** dan ketik nama Anda, `Ana` (jika diminta, juga nama komputer ini). Panel sekarang menampilkan *You: Ana on* dan komputer Anda. Nama Anda tercantum pada semua yang Anda lakukan.
4. Pilih {{ui:Mulai vault di folder ini}} dan ketik nama proyek, `Riverside clinic`. Panel menampilkan *Vault dimulai untuk Riverside clinic.*

## 2. Tempatkan file di bawah kendali

1. Buka **Files not in the vault** (**File di luar vault**) dan pilih {{ui:Tambah}} di samping `plates/Bracket.partcraft.json`.
2. File muncul di bawah **Files in the vault** (**File di dalam vault**) pada revisi **A.1**, status **Work in progress** (**Sedang dikerjakan**). A.1 adalah salinan pertamanya; vault menyimpan salinan setiap revisi.

## 3. Check out, ubah, check in

1. Pilih {{ui:Buka}} di samping `plates/Bracket.partcraft.json`. Part terbuka di PartCraft dan panel tertutup agar Anda dapat melihatnya. Buka panel lagi dari {{ui:Dokumen…}}.
2. Buka panel lagi dan pilih {{ui:Check out}}. Baris kini menampilkan **Checked out to you** (**Di-check out ke Anda**). Sebuah file kunci dibuat di `.ccvault/locks`; tidak seorang pun dapat men-check out file ini sampai Anda men-check in-nya.
3. Ubah part: edit sebuah dimensi, tambahkan lubang. Simpan ditolak kecuali file di-check out ke Anda, dan pesan menjelaskan alasannya; Simpan sebagai selalu berhasil untuk salinan milik Anda sendiri.
4. Buka panel, pilih {{ui:Check in}} dan ketik apa yang berubah (`Memindahkan pintu`). Panel menampilkan *di-check in sebagai A.2*. File di folder proyek kini adalah part yang Anda buka, dan kuncinya hilang. Check in tanpa perubahan mempertahankan revisi.

Jika Anda berubah pikiran, {{ui:Batalkan check-out}} mengembalikan file tanpa revisi baru.

## 4. Tinjau dan rilis

1. Pilih {{ui:Kirim untuk ditinjau}}. Status menjadi **For review** (**Untuk ditinjau**) dan file menjadi hanya-baca.
2. Sebelum menyetujui, pilih {{ui:Pengaturan proyek}} dan daftar siapa yang boleh menyetujui (satu nama per baris), misalnya `Ben` dan `Carla`, serta centang aturan bahwa penyetuju harus orang lain selain penulis. Pilih {{ui:Simpan pengaturan}}. Sekarang vault itu sendiri menolak siapa pun selain mereka.
3. Ben (atau Carla) memilih {{ui:Setujui}} dan mengetik nama penyetuju. Status menjadi **Released** (**Dirilis**) dan revisi menjadi **A**, dengan *disetujui oleh* dan namanya. File yang dirilis menjadi hanya-baca. {{ui:Kembalikan}} akan mengembalikannya ke Work in progress (Sedang dikerjakan), dengan alasan.

Nama penyetuju adalah nama yang diketik di panel; itu merupakan catatan siapa yang menyetujui, bukan bukti identitas.

## 5. Revisi baru

1. Pada file yang sudah dirilis, pilih {{ui:Revisi baru}}. Anda memegangnya untuk huruf berikutnya.
2. Ubah, lalu {{ui:Check in}}. Revisinya adalah **B.1**, sedang dikerjakan. Rilis dengan cara yang sama dan ia menjadi **B**. {{ui:Batalkan check-out}} sebelum check-in pertama membiarkannya tetap **A**.

Huruf revisi berurutan A, B … Z, AA, AB. Jika standar Anda melewatkan beberapa huruf, pengaturan proyek *Gunakan urutan ASME Y14.35* melewati I, O, Q, S, X dan Z untuk revisi berikutnya.

## 6. Lihat apa yang terjadi

Pilih nama file untuk membuka rinciannya:

- **{{ui:Riwayat}}**: setiap kejadian, terbaru di atas, dengan siapa, komputer mana dan kapan: *Di-check in A.2* oleh Ana, *Dirilis* oleh Ben, dan seterusnya.
- **{{ui:Revisi}}**: tabel revisi: setiap revisi yang disimpan, dengan tanggalnya, siapa yang men-check in-nya, catatannya, dan siapa yang menyetujuinya. Vault menyimpan salinan setiap revisi di `.ccvault/revs`.
- **{{ui:Memakai}}**: bagian-bagian rakitan.
- **{{ui:Dipakai oleh}}**: Dipakai oleh mencantumkan setiap rakitan di vault yang memuat part ini: ubah sebuah bracket dan Anda tahu rakitan mana yang perlu diperiksa.

## Rakitan: apa yang dipakainya dan daftar material

Letakkan rakitan (`.partcraft.json`, disimpan dari mode Assembly) di folder dan tambahkan. Pilih namanya: **Memakai** mencantumkan part yang dimuatnya, dengan revisi dan status masing-masing; **Dipakai oleh** pada sebuah part mencantumkan setiap rakitan yang memuatnya. {{ui:Daftar material (CSV)}} menyimpan seluruh daftar part, level demi level, dengan jumlah, revisi dan status, untuk spreadsheet. Ubah sebuah bracket, dan **Dipakai oleh** memberi tahu Anda rakitan mana yang perlu diperiksa.

## 7. Apa yang dilihat Ben saat Anda memegang file

Sekarang check out file lagi, dan minta Ben membuka folder proyek yang sama di komputernya serta membuka panel. Pada baris file, ia melihat **Di-check out oleh Ana di** komputer Anda **sejak** waktu tertentu, dan tidak ada tombol {{ui:Check out}}. Jika ia tetap mencoba, vault menolak: kunci adalah file yang tidak akan dibuat dua kali oleh sistem, sehingga dua orang tidak dapat sama-sama memegang file, bahkan dalam sepersekian detik yang sama, saat folder berada di disk di Studio. (Di peramban, folder hanya memberikan upaya terbaik, dan panel menyatakannya di bawah **Folder**.)

Jika Ana sedang pergi dan Ben memerlukan file, {{ui:Putuskan check-out}} membebaskannya. Ia harus mengetik alasan; alasan itu masuk ke log beserta siapa pemilik check-out tersebut. Saat proyek mencantumkan admin, hanya mereka yang dapat melakukannya. Check-out yang lebih lama dari batas usang (14 hari secara default) ditandai *sudah lama*. Setelah diputus, check-in terlambat dari Ana ditolak, sehingga kalian berdua tidak dapat saling menimpa.

## 8. Folder cloud

Folder cloud adalah folder proyek yang disimpan di penyimpanan cloud tim Anda, sehingga tim tidak memerlukan drive bersama. Di Studio, saat masuk ke akun CadCraft Anda, panel menampilkan {{ui:Buka folder cloud}} di samping {{ui:Pilih folder proyek}}. Pilih dan pilih folder, yang tercantum sebagai workspace / folder. Pemilik workspace membuat folder terlebih dahulu, dan penyimpanan cloud tim harus aktif. Semua di atas bekerja dengan cara yang sama; server yang membuat kunci, dan kuncinya ketat antar orang. Jika Anda belum masuk, panel meminta Anda masuk. Di tab peramban biasa, tombol cloud tidak ditawarkan; gunakan Studio.

## Coba

Lakukan delapan langkah di atas dengan salinan file nyata. Untuk langkah dua orang, Anda memerlukan orang lain, atau dua jendela dengan dua nama. Jika Anda mencobanya dengan folder bersama yang nyata, halaman Pengujian komunitas mencantumkan pemeriksaan yang menanyakan persis ini, dan menerima hasilnya.
