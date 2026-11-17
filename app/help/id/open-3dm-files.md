---
title: Buka model .3dm sebagai badan solid
summary: Bawa mesh, polysurface, dan blok dari file .3dm ke PartCraft sebagai satu badan solid yang bisa Anda potong, tambahi, dan beri sketsa; dari mana segitiganya berasal, dan apa yang dibiarkan.
keywords: 3dm, nurbs, polysurface, brep, permukaan, mesh render, ekstrusi, blok, impor, mesh ke solid, satuan, badan impor
from: 8ae9571b
---

PartCraft membuka file `.3dm` sebagai **badan solid**, dengan cara yang sama seperti membuka [mesh STL, OBJ, atau 3MF](topic:open-meshes). Badan itu berfungsi seperti solid lain: potong, tambahi, bor, polakan, dan beri sketsa pada muka datarnya. Badan itu tidak memiliki riwayat sendiri.

## Buka file

1. Pilih {{ui:Open}} atau tekan {{key:Mod+O}}, lalu pilih file `.3dm`. Atau seret ke tampilan 3D.
2. PartCraft membacanya dan menampilkan apa yang ditemukannya: berapa banyak objek dengan muka yang masuk, berapa muka berasal dari mesh yang disimpan dalam file dan berapa yang PartCraft tesselasi sendiri, setiap perbaikan, dan apakah hasilnya **tertutup**.
3. Periksa **Satuan dalam file** (file menyatakan satuannya sendiri; satuan yang tidak didaftar PartCraft, seperti yard, diubah menjadi milimeter) dan **Atas dalam file**.
4. Pilih {{ui:Open as a body}}, atau **Pakai untuk** dan {{ui:Add to this part}} bila part sudah memiliki fitur.

## Dari mana segitiganya berasal

PartCraft membangun badan dari segitiga dalam versi ini, sehingga setiap permukaan dalam file menjadi muka datar kecil. Untuk setiap muka polysurface (dan setiap ekstrusi) ia mengambil **mesh render yang disimpan dalam file** bila ada; jika tidak, ia **men-tesselasi sendiri** (bidang, permukaan NURBS, permukaan revolusi, kurva ekstrusi dan ekstrusi, dipotong oleh tepinya). Muka dari satu polysurface berbagi titik tepinya, sehingga polysurface tertutup masuk dalam keadaan tertutup. Muka pada jenis permukaan yang belum dibaca PartCraft dibiarkan, dan dialog menyebutkan berapa banyak dan jenisnya; hasilnya biasanya tidak tertutup.

## Semuanya menjadi satu badan

Setiap mesh, polysurface, dan ekstrusi yang terlihat, serta setiap penempatan blok, masuk ke **satu** badan di tempat file menaruhnya. Objek yang disembunyikan, atau berada di layer yang mati, dibiarkan. Bila file berisi beberapa solid terpisah, badan memiliki beberapa bagian: buka masing-masing dari file sendiri bila Anda menginginkannya sebagai badan terpisah.

## Yang dibiarkan (dan disebutkan)

Kurva, titik, point cloud, teks, dimensi, hatch, dan lampu dibiarkan: badan hanya mengambil muka. Begitu pula objek SubD (ubah menjadi mesh atau polysurface di program yang membuat file terlebih dahulu), blok yang ditautkan dari file lain, serta warna, layer, dan nama (badan PartCraft tidak memiliki nama sendiri di sini).

## Saat tidak tertutup

Polysurface dan permukaan terbuka (satu permukaan ter-trim, atau bentuk dengan muka yang hilang) tidak memiliki bagian dalam, sehingga tidak bisa menjadi solid. Dialog menyebutkan berapa banyak bukaan yang tersisa dan tidak menambahkan apa pun. Gabungkan atau tutup bentuk itu di program yang membuatnya, simpan, lalu buka lagi. Lihat [Saat mesh tidak tertutup](topic:open-meshes#when-a-mesh-does-not-close).
