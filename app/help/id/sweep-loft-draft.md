---
title: Sweep, loft dan draf
summary: Sweep sebuah profil tertutup sepanjang jalur kurva sketsa atau tepi model, loft melalui penampang pada bidang berbeda, dan tambahkan draf ke muka; dengan opsinya, hasil yang tepat, dan pesannya.
keywords: sweep, boss sweep, potongan sweep, pipa, jalur, loft, boss loft, penampang campuran, berbidang lurus, draf, sudut draf, muka tirus, bidang netral, arah tarik, pencetakan
from: 9d637981
---

:::note
**Dalam versi ini** sweep dan loft belum dibuat: keduanya memerlukan kernel geometri yang tepat, yang tidak dimiliki versi PartCraft ini. [Yang belum dibuat](topic:not-built-yet) menjelaskan apa yang harus dilakukan sebagai gantinya; bagian Sweep dan Loft menjelaskan cara kerjanya dengan kernel yang tepat. **Draf berfungsi** pada muka datar: kernel mesh yang membuatnya, dengan hasil yang sama seperti yang diberikan kernel yang tepat.
:::

Ketiganya ada di menu {{ui:Lainnya}} grup Fitur (lihat [Kernel mesh](topic:solid-kernels)). Masing-masing dapat menambah material, memotongnya, hanya menyimpan bagian yang saling tumpang tindih (**Irisan**), atau membuat **Bodi baru** (sweep dan loft: **Operasi** di panel).

## Sweep

Sweep menggerakkan profil tertutup sepanjang jalur: pipa, pegangan, pegas kawat, rel.

1. Gambar **jalur** dalam satu sketsa: garis dan busur yang disambung ujung ke ujung (atau gunakan tepi model, di bawah).
2. Gambar **profil** dalam sketsa lain yang bidangnya melewati salah satu ujung jalur, misalnya lingkaran pada bidang atas di awal jalur yang digambar pada bidang depan.
3. Pilih sketsa profil, lalu pilih {{ui:Lainnya}}, kemudian {{ui:Sweep}}. Sketsa lain yang paling baru menjadi jalur.

Di panel:

| Pengaturan | Fungsinya |
|---|---|
| **Jalur** | Centang sketsa yang membentuk jalur (beberapa sketsa disambung ujung ke ujung menjadi satu jalur 3D); **Pilih tepi model** menambahkan tepi part |
| **Orientasi** | Ikuti jalur (bawaan), Frenet, Tetap (penampang tetap sejajar dengan profil), Pertahankan arah, Sepanjang kurva panduan |
| **Skala akhir** | Profil membesar atau mengecil secara linear hingga ukuran ini di ujung (1 = tetap) |

Sudut tajam pada jalur dipotong miring (miter). Lingkaran berjari-jari 5 yang disapu sepanjang garis 100 mm adalah silinder dengan volume tepat 2500π mm³; sepanjang busur seperempat berjari-jari 50, adalah torus seperempat dengan 625π² mm³.

## Loft

Loft menyatu melalui dua atau lebih penampang pada bidang berbeda.

1. Gambar setiap penampang dalam sketsanya sendiri (satu loop tertutup masing-masing), pada bidang dasar, bidang referensi (lihat [Bidang, sumbu, dan titik referensi](topic:reference-geometry)) atau muka.
2. Pilih {{ui:Lainnya}}, lalu {{ui:Loft}}. Setiap sketsa satu-loop yang belum dipakai menjadi penampang, sesuai urutan riwayat.

Panel mendaftar penampang sesuai urutan (**Naik** mengatur ulang urutan, **Hapus** membuang satu); **Tambah sketsa** menambah yang lain, **Pilih muka** menambah muka datar part. **Berbidang lurus** membuat muka datar di antara penampang alih-alih menyatu halus. Di antara dua persegi, keduanya adalah frustum yang sama (persegi 40 mm ke persegi 20 mm sepanjang 30 mm: tepat 28000 mm³).

Penampang dengan jumlah sisi berbeda (persegi ke segitiga) dicocokkan oleh OpenCascade, yang dapat memuntir muka samping; fitur akan memberi peringatan. Gambar penampang dengan jumlah sisi yang sama, mulai dari sudut yang berpadanan, untuk hasil paling bersih.

### Rel panduan

Rel panduan adalah kurva yang harus diikuti sisi loft dari penampang pertama ke yang terakhir, untuk tonjolan, pinggang, atau pelebaran yang Anda gambar sendiri.

1. Gambar dua rel atau lebih: kurva terbuka (garis, busur, spline) yang berjalan dari penampang pertama ke yang terakhir dan memotong setiap penampang sekali. Satu sketsa dapat memuat beberapa rel: setiap rantai terpisah di dalamnya adalah rel tersendiri. Gambar rel agar benar-benar bertemu setiap penampang: tempelkan ujungnya ke titik penampang.
2. Di panel Loft, di bawah **Rel panduan**, centang sketsa yang memuatnya, atau klik {{ui:Pilih tepi model sebagai rel}} lalu klik tepi part (Esc mengakhiri).

Dengan rel, loft adalah permukaan Gordon melalui penampang dan rel (lihat [Permukaan melalui jaringan kurva](topic:gordon-surfaces)), yang ditutup datar di kedua ujungnya menjadi solid. Panel menyatakan seberapa dekat ia mengikutinya. Setiap penampang harus berupa sketsa (titik atau muka tidak dapat menerima rel), dan **Berbidang lurus** tidak berlaku. Rel yang meleset dari penampang lebih dari 0.01 mm akan ditolak, beserta celahnya.

Diperiksa: dua lingkaran (lebar 20 mm dan 10 mm dengan jarak 40 mm) dengan empat rel lurus memberi volume frustum kerucut dalam 0.000002 %; busur yang menggembung 5 mm memberi tong yang mengikuti setiap rel dalam 0.00001 mm.

## Draf

Draf memiringkan muka sehingga part dapat keluar dari cetakan.

1. Pilih {{ui:Lainnya}}, lalu {{ui:Draft}} (atau tahan {{key:Shift}}+klik muka lebih dahulu). Tanpa ada yang dipilih, Anda berada dalam mode pilih: klik setiap muka yang akan dimiringkan, lalu {{ui:Selesai}}.
2. Atur **Sudut (°)**, **Bidang netral** (tempat muka mempertahankan ukurannya), dan **Arah tarik** (normal bidang netral secara bawaan).

Sudut positif memiringkan muka ke dalam sepanjang arah tarik dan menghapus material; sudut negatif menambahkannya. Bidang netral awalnya adalah bidang Atas. Dalam versi ini hanya muka datar yang dapat didraf: muka silinder, kerucut, atau bentuk bebas akan menampilkan "Draf: dalam versi ini hanya muka datar (kernel mesh yang membuatnya)." Empat sisi balok 100 × 100 × 50 yang didraf 5° terhadap alasnya menjadi frustum dengan tepat h/3·(a² + b² + ab), dengan b = a − 2h·tan 5°.

## Pesan

| Pesan | Yang harus dilakukan |
|---|---|
| "Bidang profil harus melewati salah satu ujung jalur …" | Pindahkan sketsa profil ke awal (atau akhir) jalur |
| "Jalur memiliki celah: kurvanya tidak tersambung ujung ke ujung …" | Sambungkan kurva jalur; pada sketsa terpisah, ujungnya harus bertemu tepat |
| "Penampang loft memerlukan tepat satu loop tertutup" | Pisahkan sketsa, atau hapus loop tambahan |
| "… tidak dapat didraf terhadap bidang netral ini …" | Muka sejajar dengan bidang netral atau tidak memotongnya |
| "Draf: dalam versi ini hanya muka datar (kernel mesh yang membuatnya)." | Muka yang dipilih melengkung. Hapus, dan draf hanya muka datar |

:::note
Belum dibuat: sweep yang memuntir, sweep berdinding tipis dan sweep permukaan, rel panduan loft dan singgung ujung, draf pada silinder, kerucut, dan muka bentuk bebas.
:::
