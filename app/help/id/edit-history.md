---
title: Ubah part melalui riwayatnya
summary: Edit fitur dan sketsa setelah dibuat, nonaktifkan, kembalikan (rollback), sisipkan fitur lebih awal, atur ulang urutan, ganti nama dan hapus, serta urungkan semua itu.
keywords: riwayat, pohon fitur, pohon desain, edit fitur, edit sketsa, nonaktifkan, aktifkan, rollback, kembalikan, maju kembali, atur ulang urutan, pindahkan fitur, hapus, ganti nama, urungkan, ulangi, bangun ulang, regenerasi, induk anak, part besar, banyak fitur, bangun ulang lambat, 750 fitur
from: 6f75aef4
---

Part PartCraft adalah riwayatnya: daftar bidang, sketsa, dan fitur di sebelah kiri. PartCraft membangun ulang solid dari bagian atas daftar itu setiap kali ada yang berubah. Mengubah angka di bagian awal daftar akan mengubah semua yang dibangun di atasnya.

## Edit fitur

1. Klik fitur di riwayat (atau sketsa yang menjorok di bawahnya).
2. Ubah pengaturannya di panel kanan. Setiap perubahan langsung membangun ulang.

Tidak ada OK atau Batal: setiap perubahan langsung diterapkan. Jika Anda tidak menyukainya, tekan {{key:Mod+Z}}.

## Ubah tepi atau muka yang digunakan fillet, chamfer, atau shell

Klik dua kali fitur di riwayat, atau pilih lalu pilih {{ui:Pilih tepi}} (atau {{ui:Pilih muka}}). Klik tepi atau muka untuk menambahkan atau membuangnya, lalu {{ui:Selesai}} atau {{key:Esc}}. Lihat [Fillet, chamfer dan shell](topic:fillet-chamfer-shell).

## Edit sketsa

1. Klik dua kali sketsa di riwayat, atau pilih lalu pilih {{ui:Edit sketsa}} di panel kanan (atau {{ui:Sketsa}} di bilah alat).
2. Part kembali ke kondisi saat sketsa dibuat: fitur setelahnya disembunyikan selama Anda mengedit.
3. Ubah geometri, relasi, atau dimensi.
4. Tutup sketsa. Seluruh part dibangun ulang dengan perubahan itu.

Untuk mengubah ukuran saja, Anda tidak perlu membuka sketsa. Pilih fitur atau sketsa dan ubah angka di bawah **Dimensi sketsa** (atau **Dimensi penggerak**) di panel kanan. Lihat [Ubah ukuran tanpa membuka sketsa](topic:change-sizes).

## Saat fitur gagal

Jika perubahan membuat sebuah fitur tidak mungkin, PartCraft membangun semua yang lain dan menandai masalahnya:

- fitur menampilkan **⚠ kesalahan** di riwayat, dan pesannya ada di bagian atas panel kanannya (arahkan kursor ke baris untuk membacanya juga);
- fitur yang membutuhkannya menampilkan **⚠ belum dibuat**, dengan "Membutuhkan Extrude2, yang gagal.";
- chip di bilah status berbunyi "1 fitur gagal".

Perbaiki penyebabnya (atau urungkan), dan part akan dibangun lagi. Pesan umum dan cara mengatasinya ada di [Pemecahan masalah](topic:troubleshooting).

## Nonaktifkan fitur

Menonaktifkan berarti mematikan fitur tanpa menghapusnya: berguna untuk mencoba part tanpa lubang atau pola.

1. Pilih fitur.
2. Pilih {{ui:Nonaktifkan}}. Barisnya menampilkan **mati**. Fitur yang membutuhkannya juga tidak dibangun.
3. Pilih {{ui:Aktifkan}} untuk menyalakannya kembali.

## Rollback

Rollback membangun part hanya sampai titik tertentu, sehingga Anda dapat melihatnya seperti dulu, atau menambahkan fitur lebih awal dalam riwayat.

1. Pilih fitur lalu pilih {{ui:Kembalikan ke sini}}. Fitur itu dan semua fitur di bawahnya diredupkan dan tidak dibangun. Baris **Bilah rollback · lanjutkan maju** menandai posisinya.
2. Fitur apa pun yang Anda tambahkan sekarang masuk **di bilah**, sebelum fitur yang diredupkan.
3. Klik **Bilah rollback · lanjutkan maju** untuk membangun semuanya lagi.

Posisi rollback disimpan di dalam file.

## Atur ulang urutan fitur

1. Pilih fitur.
2. Pilih {{ui:Pindahkan ke atas}} atau {{ui:Pindahkan ke bawah}}, atau, saat baris riwayatnya sedang fokus, tekan {{key:Alt+Up}} atau {{key:Alt+Down}}.

Fitur tidak pernah dapat dipindahkan ke atas sesuatu yang dipakainya. Tombolnya diredupkan, dan jika diarahkan (atau tombol kuncinya dicoba) muncul alasannya, misalnya "Extrude2 menggunakan Sketch2, jadi Sketch2 harus lebih dulu."

Yang dipakai sebuah fitur: sketsanya; muka tempat sketsanya berada; fitur yang disalin oleh pola atau cerminan; garis sketsa atau revolve yang dipakai sebagai arah atau sumbu.

## Hapus fitur

1. Pilih fitur dan pilih {{ui:Hapus}} di panel kanan atau bilah alat, atau tekan {{key:Delete}}.
2. Jika fitur lain menggunakannya, PartCraft bertanya: "Extrude3, Hole1 menggunakan Extrude1 dan juga akan dihapus." Pilih {{ui:Hapus semua}} atau {{ui:Batal}}.

Menghapus fitur tidak menghapus sketsanya: sketsa itu muncul kembali di tampilan sebagai sketsa yang tidak terpakai, siap untuk fitur lain. Hapus sketsa secara terpisah jika tidak Anda perlukan.

## Ganti nama

Pilih fitur lalu ketik **Nama** baru di bagian bawah panel kanan (hingga 60 karakter). Nama part itu sendiri ada di panel kanan saat tidak ada yang dipilih.

## Part dengan ratusan fitur

Part dengan ratusan fitur diuji pada 750 fitur. PartCraft menyimpan solid yang dimilikinya di tengah riwayat, sehingga perubahan di akhir riwayat hanya membangun ulang fitur setelahnya; perubahan dekat bagian atas membangun ulang semua yang dibangun di atasnya, dan ini yang paling lama. Urungkan dan ulangi hanya membangun ulang dari titik tempat kedua keadaan itu berbeda. Untuk bekerja lebih cepat pada part besar, lakukan rollback ke tempat Anda bekerja (lihat Rollback di atas) atau nonaktifkan yang tidak Anda perlukan untuk sementara. Beberapa potongan dan tonjolan yang tidak saling menyentuh diterapkan bersamaan, sehingga part yang terdiri dari banyak lubang dan tonjolan terpisah dibangun lebih cepat daripada jumlah fiturnya.

Part besar dibangun ulang di latar belakang: chip pembangunan di bagian bawah menampilkan **Membangun ulang…** beserta sejauh mana progresnya, dan tampilan, panel, serta menu tetap berfungsi selama proses berjalan. Part di layar adalah versi terakhir yang berhasil dibangun sampai versi baru siap. Jika Anda mengubah sesuatu lagi saat proses berjalan, PartCraft membangun versi terbaru dan membuang yang sedang diproses. Part kecil tetap langsung dibangun ulang.

## Urungkan dan ulangi

- {{key:Mod+Z}} atau {{ui:Urungkan}} mengurungkan perubahan terakhir: fitur, pengaturan, edit sketsa, seretan. Bilah status menyebutkan apa, misalnya "Diurungkan: ubah dimensi."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} atau {{ui:Ulangi}} mengulanginya.
- PartCraft menyimpan 200 langkah terakhir (part sebesar itu sehingga 200 salinan akan memakan banyak memori menyimpan lebih sedikit, tetapi tidak pernah kurang dari 20 yang terbaru). Perubahan pada lembar gambar (potongan, simbol GD&T yang dipindahkan) berada dalam daftar yang sama. Membuka file atau memulai part baru menghapus daftar ini.

:::mac
Di Mac, gunakan ⇧⌘Z untuk mengulangi. Di Safari, ⌘Y mungkin membuka riwayat peramban.
:::
