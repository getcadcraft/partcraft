---
title: Pustaka pahat
summary: Simpan pahat yang Anda gunakan di browser agar setiap part dapat memilikinya, dan pindahkan pustaka pahat antar komputer sebagai file JSON.
keywords: pustaka pahat, pahat, ekspor, impor, JSON, simpan pahat, nomor T, end mill, pahat bengkel
from: 8b9f2483
---

Tab **Pahat** milik Manufaktur mendaftar pahat dari part tersebut. Di bawah **Pustaka pahat**, Anda dapat menyimpan pahat sendiri melampaui satu part:

- {{ui:Simpan pahat ini}} menambahkan pahat yang dipilih ke **Pahat tersimpan saya**; {{ui:Simpan semua pahat part ini}} menambahkan semuanya. Pahat tersimpan saya disimpan di browser ini dan tersedia untuk setiap part. Pahat yang sudah pernah Anda simpan (jenis, ukuran, jumlah mata potong, dan nilai timpa yang sama) tidak disimpan dua kali.
- {{ui:Tambahkan ke part ini}} memasukkan pahat tersimpan yang dipilih ke dalam part. Jika nomor T-nya sudah dipakai pahat lain dalam part, ia mendapat nomor bebas berikutnya dan panel menyatakannya. {{ui:Buang dari pustaka saya}} menghapusnya dari daftar tersimpan (bukan dari part yang sudah memilikinya).
- {{ui:Ekspor pahat…}} menulis pahat part sebagai file `.json`; {{ui:Impor pahat…}} menambahkan pahat dari file seperti itu ke part, dengan aturan yang sama (pahat yang sudah ada dilewati, dan nomor T yang terpakai berpindah). File menyimpan ukuran, jumlah mata potong, bahan, serta nilai pengumpanan dan kecepatan yang Anda ketik; ia tidak memiliki id. Gunakan untuk memindahkan pahat bengkel ke komputer lain atau memberikannya kepada rekan.

Jika browser tidak dapat menyimpan pustaka (penyimpanan dimatikan, atau penuh), penyimpanan akan memberi tahu, dan **Ekspor pahat** adalah cara untuk menyimpan file. File harus berupa pustaka pahat PartCraft versi ini atau yang lebih lama, dengan paling banyak 500 pahat berukuran valid; selain itu akan ditolak beserta alasannya.

Kecepatan potong dan beban serpih yang datang bersama pahat adalah nilai awal; lihat [Membuat toolpath dan G-code](topic:manufacture).
