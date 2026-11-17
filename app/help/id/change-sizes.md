---
title: Ubah ukuran tanpa membuka sketsa
summary: Kendalikan part dari angka di panel kanan: dimensi sketsa, kedalaman, jumlah, dan sudut; cara merencanakan part agar angka yang tepat mengendalikannya; dan di mana parameter serta persamaan mengambil alih.
keywords: parameter, dimensi penggerak, maksud desain, ubah ukuran, persamaan, variabel global, tabel desain, konfigurasi, ubah ukuran, ubah dimensi
from: c2ae1a32
---

Setiap ukuran di part PartCraft adalah angka yang bisa Anda ubah nanti: dimensi di sketsanya dan pengaturan fiturnya. Anda tidak perlu membuka sketsa untuk mengubah dimensinya.

## Ubah dimensi sketsa dari panel

1. Klik sebuah fitur di riwayat, misalnya "Extrude1".
2. Di bawah pengaturan ekstrusi itu sendiri, **Dimensi sketsa (Sketch1)** mencantumkan setiap dimensi dari sketsanya: "Jarak", "Diameter", "Sudut (°)", dan seterusnya.
3. Ketik nilai baru di satu kotak dan tekan {{key:Enter}} atau {{key:Tab}}.

Sketsa dihitung ulang dengan nilai baru, dan seluruh part dibangun ulang. Memilih sketsanya sendiri menampilkan daftar yang sama sebagai **Dimensi penggerak**.

Radius atau diameter harus lebih dari nol, dan sudut berada di antara 0 dan 180 derajat; bilah status akan memberi tahu jika tidak.

:::tip
Kotak mana yang mana? Kotak tercantum sesuai urutan dimensi dibuat. Jika Anda tidak yakin, buka sketsa (klik dua kali), klik dua kali dimensi di kanvas, dan ubah di sana.
:::

## Ketik angka utama langsung

Pilih fitur di riwayat (atau baru menambahkannya) dan ketik angka: angka itu masuk ke kotak utama fitur, yaitu kotak yang paling sering Anda ubah (**Kedalaman** ekstrusi, **Sudut** revolusi, **Diameter** lubang, **Jumlah** pola, **Radius** fillet, atau dinding shell). Tekan {{key:Enter}} untuk mengatur, atau {{key:Esc}} untuk mempertahankan nilai lama. Menambahkan ekstrusi memberi tahu di bilah status: "Extrude1 ditambahkan. Ubah angkanya di sebelah kanan, atau ketik angka sekarang untuk kedalamannya."

## Ubah angka di riwayat

Baris setiap fitur di riwayat menampilkan angka utamanya di samping namanya: "Extrude1 25 mm", "Hole1 Ø6.6 tembus", "Fillet1 R2", "LPattern1 4 × 20 mm". Klik dua kali angka itu (atau pilih baris dan tekan {{key:F2}}), dan kotak terbuka di sana. Ketik nilai baru dan tekan {{key:Enter}}; {{key:Esc}} mempertahankan nilai lama. Cara kerjanya sama seperti kotak fitur di kanan: batas yang sama, `=` untuk mengetik persamaan seperti `=width/2`, dan satu langkah untuk dibatalkan.

Pada ekstrusi, lubang, atau pola, klik dua kali di mana saja pada baris membuka kotak. Pada fillet, chamfer, shell, draft, atau ulir, klik dua kali pada nama masih menuju ke pemilihan tepi atau muka, jadi klik dua kali pada angkanya sendiri. Sketsa tidak memiliki angka di baris; klik dua kali membuka sketsa.

## Seret di tampilan

Pilih ekstrusi di riwayat (atau klik di tampilan, lalu barisnya) dan panah oranye berdiri di muka ujungnya, dengan kedalaman dalam kotak di sebelahnya. Seret panah: part mengikuti saat Anda menyeret, dan saat dilepas, kedalaman baru diatur sebagai satu langkah ({{key:Mod+Z}} mengembalikannya). Tekan {{key:Esc}} saat menyeret untuk kembali ke tempat awal. Kedalaman bergerak dalam langkah sepersepuluh ukurannya: 1 mm pada ekstrusi 25 mm, 0.1 mm pada ekstrusi 3 mm.

Revolusi mendapat panah melengkung di ujung putarannya: seret melingkar terhadap sumbu untuk mengubah sudut, dalam derajat utuh dari 1° hingga 360°.

Atau klik ke dalam kotak di sebelah panah, ketik nilai (atau `=` dan persamaan), lalu tekan {{key:Enter}}. Tidak ada panah pada ekstrusi yang berjenis **Tembus semua** atau sampai ke muka, atau pada nilai yang digerakkan persamaan: ubah itu di sebelah kanan.

## Angka yang menggerakkan part

| Di mana | Yang bisa Anda ubah |
|---|---|
| Sketsa | Setiap dimensi: panjang, jarak, radius, diameter, sudut |
| Ekstrusi dan Potong | Kedalaman, kondisi akhir, arah, tonjolan atau potongan |
| Revolusi dan potongan revolusi | Sudut, sumbu, tonjolan atau potongan |
| Lubang | Diameter, kedalaman, tembus semua, diameter dan kedalaman counterbore |
| Fillet, Chamfer, Shell | Radius, jarak, ketebalan dan arah dinding, dan tepi atau muka mana |
| Linear dan Melingkar | Jumlah, jarak atau sudut, arah atau sumbu |
| Part | Kurva (seberapa halus bentuk bulat difaset) |
| Gambar | Tempat potongan membelah, ukuran dan skala detail, nilai GD&T |

## Rencanakan part agar angka yang tepat menggerakkannya

Angka yang Anda berikan adalah yang bisa Anda ubah. Beberapa kebiasaan membuat perubahan berikutnya berperilaku baik:

- **Beri dimensi pada yang penting untuk pekerjaan.** Jika lubang harus tetap 15 mm dari tepi, beri dimensi dari tepi itu, bukan dari titik asal.
- **Definisikan sketsa sepenuhnya.** Dengan begitu, perubahan hanya menggerakkan yang seharusnya (lihat [Definisikan sketsa sepenuhnya](topic:relations-dimensions)).
- **Gunakan relasi untuk maksud.** Sama pada dua lubang berarti satu diameter menggerakkan keduanya. Bentuk simetris: letakkan titik asal pada garis tengah, atau gunakan Titik tengah.
- **Sketsa pada muka yang dibuat oleh fitur.** Sketsa pada muka ujung ekstrusi bergerak saat kedalamannya berubah.
- **Pola daripada menyalin.** Satu lubang yang dipola delapan kali hanya memiliki satu diameter untuk diubah.

## Lebih dari angka tunggal

- **Satu angka menggerakkan beberapa:** gunakan parameter dan persamaan: [Gerakkan part dengan parameter](topic:parameters).
- **Beberapa ukuran dari satu part:** simpan masing-masing sebagai [konfigurasi](topic:design-tables); disimpan di file part.
- **Aritmetika di kotak angka:** ketik `=40/2` atau `=width / 2`. Itu membuat persamaan; lihat [Persamaan dua arah](topic:equations-two-way).
- **Satuan inci:** part menampilkan milimeter. Di kotak angka dengan `=`, atau di parameter, `2in` diubah menjadi 50.8.

Lihat [Yang belum dibuat](topic:not-built-yet).
