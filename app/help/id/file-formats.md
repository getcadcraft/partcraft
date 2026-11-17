---
title: Format file
summary: Setiap file yang dibaca dan ditulis PartCraft, dengan ekstensi, satuan, sumbu, dan apa yang dipertahankan atau hilang pada setiap file.
keywords: format, jenis file, ekstensi, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, satuan, z ke atas
from: 4d0ecbee
---

| Format | Ekstensi | Buka | Simpan atau ekspor | Satuan | Sumbu atas | Mempertahankan |
|---|---|---|---|---|---|---|
| File part PartCraft | `.partcraft.json` | Ya | {{ui:Simpan}} | mm | Y | Riwayat lengkap: sketsa, relasi, dimensi, fitur, penonaktifan, rollback, pengaturan kurva, pengaturan gambar dan GD&T, teks STEP yang diimpor pada build sebelumnya |
| Rakitan PartCraft | `.partcraft-asm.json` | Ya | {{ui:Simpan}} di rakitan | mm | Y | Setiap part (tertanam), salinan dan posisinya, sambungannya |
| STL (biner atau teks) | `.stl` | Ya, sebagai body solid: [Buka STL, OBJ, atau 3MF](topic:open-meshes) | {{ui:STL, untuk cetak 3D}} | mm (ditanyakan saat dibuka) | Z | Hanya segitiga solid |
| 3MF | `.3mf` | Ya, sebagai body solid | {{ui:3MF, untuk cetak 3D}} | mm (dinyatakan dalam file) | Z | Solid sebagai satu objek mesh |
| OBJ | `.obj` | Ya, sebagai body solid (hanya muka) | Tidak | ditanyakan saat dibuka | Z atau Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ya, sebagai body solid yang dibaca sebagai segitiga (muka melengkung digambar sebagai facet; muka datar, silinder, kerucut, bola, dan torus dari file dipertahankan untuk ekspor eksak): [Buka file STEP](topic:import-step) | | mm (dari satuan file) | Z, atau Y jika Anda menyatakannya | Solid dan body permukaan, rakitan dengan setiap part di tempatnya; tanpa warna, nama, pohon rakitan, atau PMI |
| `.3dm` | `.3dm` | Ya, sebagai satu body solid dari mesh dan permukaannya (mesh render yang tersimpan, jika tidak, ditesselasi): [Buka model .3dm](topic:open-3dm-files) | | Dari satuan file | Z, atau Y jika Anda menyatakannya | Mesh, polysurface, ekstrusi, dan penempatan blok sebagai satu body; tanpa kurva, warna, layer, atau nama |
| STEP AP242, eksak | `.step` | | {{ui:STEP AP242 (solid eksak)}} | mm | Z | Satu solid eksak: muka datar, silinder, kerucut, bola, dan torus pada permukaan sebenarnya, lingkaran dan garis sejati sebagai tepi; sisi spline, ulir yang dimodelkan, body dari file mesh, dan muka spline file STEP tetap berupa facet. STEP yang digunakan untuk program CAD dan CAM lain |
| STEP AP214, eksak | `.step` | | {{ui:STEP AP214 (solid eksak)}} | mm | Z | Solid eksak yang sama dalam skema AP214 yang lebih lama, untuk program yang hanya membaca itu |
| STEP AP242, berfaset | `.step` | | {{ui:STEP (berfaset, kernel mesh)}} | mm | Y | Solid tertutup dari muka datar: permukaan bulat sebagai facet. Untuk program yang menolak file eksak |
| STEP AP214, berfaset | `.step` | | {{ui:STEP AP214 (berfaset, kernel mesh)}} | mm | Y | Solid yang sama dalam skema AP214 yang lebih lama, untuk program yang hanya membaca itu |
| Paket USD | `.usdz` | Tidak | {{ui:Paket USD (.usdz)}} | m | Z | Solid dengan material, volume, dan massanya; rakitan dengan setiap part sekali dan setiap salinan ditempatkan: [Ekspor sebagai USD](topic:usd) |
| IFC 4 | `.ifc` | Tidak | {{ui:IFC 4 (dengan setiap properti)}} | mm | Z | Bentuk sebagai segitiga, material, setiap parameter, kepala gambar, kuantitas; part rakitan sebagai tipe dan salinannya ditempatkan |
| DXF R12, sketsa | `.dxf` | Tidak | {{ui:DXF sketsa atau muka datar}} dengan sketsa dipilih | mm | x, y milik sketsa | Garis, busur dan lingkaran sejati, titik; layer PROFILE, CONSTRUCTION, POINTS |
| DXF R12, muka | `.dxf` | Tidak | {{ui:DXF sketsa atau muka datar}} dengan muka datar dipilih | mm | x, y milik muka | Garis tepi muka: lubang bulat sebagai lingkaran sejati, sisanya sebagai polyline tertutup (tepi bulat sebagai facet) |
| PDF gambar | `.pdf` | Tidak | {{ui:Gambar (PDF): tampilan, potongan, detail, GD&T}} | mm pada lembar A3 | | Tampilan depan, atas, kanan, isometrik, potongan, dan detail yang digambar dari facet; garis tersembunyi, ukuran keseluruhan, simbol GD&T, kepala gambar |

## File PartCraft

Keduanya berupa teks biasa (JSON). Solid tidak pernah disimpan: PartCraft membangunnya kembali dari riwayat, sehingga file tetap kecil dan selalu cocok dengan riwayat.

- Setiap file memiliki nomor versi. Build ini menulis setiap file part dengan versi terendah yang dapat memuat apa yang dipakainya (2 hingga 5; body yang dibuat dari mesh memerlukan 5) dan membuka setiap versi yang lebih lama. File dari PartCraft yang lebih baru ditolak dengan pesan yang menyebutkan kedua versi.
- Setiap nilai diperiksa saat file dibuka. Nama kehilangan karakter kontrol; angka di luar rentang, referensi ke fitur yang hilang, dan jenis fitur yang tidak dikenal ditolak dengan alasan sederhana.
- Jangan sunting file ini dengan tangan kecuali Anda memahami formatnya. File yang tidak lolos pemeriksaan tidak akan terbuka.
- Part dengan solid STEP besar yang diimpor pada build sebelumnya dapat melebihi 50 MB, batas terbesar yang dibuka PartCraft sebagai file part (lihat [Pemecahan masalah](topic:troubleshooting#file-problems)).

## Facet dan keeksakan

STL dan 3MF selalu tersusun dari facet, pada pengaturan **Kurva**, begitu pula DXF muka kecuali lubang bulat, yang berupa lingkaran sejati. DXF sketsa memiliki busur dan lingkaran sejati, karena langsung berasal dari sketsa. Versi ini membangun setiap part dengan kernel mesh, sehingga tampilan gambar (termasuk potongan) juga berupa facet. Ekspor STEP eksak adalah pengecualian: kernel mengetahui permukaan sebenarnya setiap muka dari sketsa (atau dari file STEP tempat body dibuka), sehingga muka bulat ditulis sebagai silinder, kerucut, bola, dan torus sebenarnya, apa pun pengaturan **Kurva** (lihat [Ekspor untuk cetak, STEP, dan DXF](topic:export-files#for-other-cad-programs-step)).

## Tidak didukung pada build ini

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (masuk atau keluar); ekspor OBJ | Belum dibuat |
| DWG | Ditulis hanya oleh [paket varian](topic:variant-pack), sebagai lembar gambar setiap konfigurasi. Tidak dibaca, dan tidak ada ekspor lain. Ekspor DXF; setiap program CAD membuka DXF R12 |
| STEP rakitan dan gambar rakitan | Belum dibuat. Ekspor setiap part sebagai STEP eksak; STL, 3MF, dan daftar material diekspor dari rakitan |
| File part dan rakitan asli program lain (kecuali `.3dm`, yang dibuka sebagai satu body) | Belum dibuat |

Lihat [Yang belum dibuat](topic:not-built-yet).
