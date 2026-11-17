---
title: Simpan dan pakai ulang sisa potongan
summary: Setelah nesting, sisa setiap pelat menjadi sisa potongan bernomor dalam daftar stok; nesting berikutnya memakai sisa potongan terlebih dahulu, lalu pelat utuh.
keywords: nesting, sisa potongan, remnant, stok, sisa, pelat, lembaran, pakai ulang, material, ketebalan, CSV
from: 7a68d4b8
---

Saat Anda menata part di atas pelat, sisa pakai setiap pelat (bukan serpihan) dapat disimpan sebagai **sisa potongan**: garis luar bernomor (R-0001, R-0002 …) dengan material, ketebalan, ukurannya, dan pekerjaan asalnya. Daftar disimpan bersama file dan dapat disimpan sebagai CSV.

## Pakai lagi

Isi **material** dan **ketebalan**, biarkan {{ui:Use remnants first}} aktif, lalu lakukan nesting. Sisa potongan dengan material dan ketebalan yang sama dicoba dari yang terkecil; part yang muat ditempatkan di atasnya, di dalam garis luar sisa potongan dan jauh dari tepinya; yang tidak muat ditempatkan di pelat baru. Laporan pekerjaan menyebutkan sisa potongan mana yang dipakai dan apa yang tersisa. Dengan {{ui:Save the leftovers as remnants}} aktif, {{ui:Add this job to the stock}} lalu menuliskannya ke daftar stok: sisa potongan yang dipakai ditandai **Terpakai** (beserta pekerjaannya) dan tidak ditawarkan lagi; sisanya menjadi sisa potongan baru yang mengingat induknya.

## Yang dihitung sebagai sisa potongan

Sisa diukur dengan jarak yang Anda atur (tidak ada part yang lebih dekat dari jarak itu ke potongan). Strip yang lebih sempit dari seperduapuluh pelat dan potongan yang lebih kecil dari 2 % pelat dianggap limbah; ubah kedua batas ini jika bengkel Anda menyimpan potongan yang lebih kecil. Lubang di dalam part adalah milik part itu dan tidak disimpan. Gulungan tidak memiliki sisa potongan.

## Dalam gambar

DXF hasil nesting menggambar garis luar setiap sisa potongan pada layer REMNANTS dengan nomornya di tengah, sehingga potongan dapat diberi tanda saat dipotong.

Belum dibuat: arah serat sisa potongan, lembar kode batang atau label, sisa potongan dari gulungan, stok yang dipakai bersama antar proyek.
