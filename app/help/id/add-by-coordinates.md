---
title: Tambahkan geometri sketsa dengan mengetik koordinat
summary: Gunakan Tambah dengan koordinat di panel sketsa untuk menempatkan garis, garis tengah, persegi panjang, lingkaran, dan titik pada posisi yang tepat, hanya dengan keyboard.
keywords: koordinat, input mengetik, entri keyboard, entri numerik, posisi tepat, x y, koordinat absolut, aksesibilitas, tanpa mouse
from: 5e6c1656
---

Jika Anda sudah tahu angkanya, mengetiknya lebih cepat daripada mengklik dan memberi dimensi. **Tambah dengan koordinat** ada di panel kanan setiap kali sketsa terbuka. Fitur ini juga memungkinkan Anda membangun sketsa tanpa penunjuk sama sekali.

Koordinat dalam milimeter, pada sumbu sketsa itu sendiri: x ke kanan dan y ke atas saat Anda melihat sketsa, dengan (0, 0) di titik asal (lingkaran merah dengan silang).

## Tambahkan bentuk

1. Buka sketsa (lihat [Gambar sketsa pertama Anda](topic:sketch-basics)).
2. Di panel kanan, gulir ke **Tambah dengan koordinat**.
3. Pilih bentuk di **Tambah**: Garis, Garis tengah, Persegi panjang, Lingkaran, atau Titik.
4. Isi kotak-kotaknya:

| Bentuk | Kotak |
|---|---|
| Garis | **Dari x, y** dan **Ke x, y** |
| Garis tengah | **Dari x, y** dan **Ke x, y** |
| Persegi panjang | **Sudut x, y** dan **Sudut seberang x, y** |
| Lingkaran | **Pusat x, y** dan **Radius** |
| Titik | **Di x, y** |

5. Pilih {{ui:Tambah}}, atau tekan {{key:Enter}} di kotak mana pun.

Bentuk muncul dan bilah status menampilkan, misalnya, "Persegi panjang ditambahkan." Kotak-kotak kosong, siap untuk berikutnya. Setiap penambahan adalah satu langkah urungkan.

Ketik pasangan sebagai dua angka yang dipisahkan koma atau spasi: `0, 0`, `25 -10`, atau `12.5,40`. Angka negatif dan desimal diperbolehkan. Radius harus lebih dari nol. Jika ada yang tidak terbaca sebagai angka, bilah status menampilkan: 'Ketik koordinat sebagai "x, y" dan radius di atas nol.'

## Contoh: kontur pelat berlubang, diketik

1. Buka sketsa di **bidang Front**.
2. **Tambah**: Persegi panjang. **Sudut x, y**: `-50, -30`. **Sudut seberang x, y**: `50, 30`. {{key:Enter}}.
3. **Tambah**: Lingkaran. **Pusat x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Pusat x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Pilih {{ui:Keluar dari sketsa}}, lalu {{ui:Ekstrusi}}: pelat 100 × 60 dengan dua lubang 10 mm.

## Geometri yang diketik ditempatkan, tidak dikunci

Koordinat yang diketik menempatkan geometri di tempat yang benar, tetapi koordinat itu **bukan relasi**. Bentuknya tetap biru (di bawah terdefinisi) dan bisa bergerak jika Anda menyeretnya atau mengubah dimensi lain:

- persegi panjang yang diketik memiliki sudutnya sendiri, serta relasi horizontal dan vertikal, seperti yang digambar, tetapi tidak ada yang mengikatnya ke titik asal;
- garis yang diketik tidak memiliki relasi horizontal atau vertikal, meskipun Anda mengetik garis datar;
- pusat lingkaran yang diketik bebas.

Untuk membuat sketsa terdefinisi penuh, tambahkan dimensi dan relasi setelahnya (lihat [Definisikan sketsa sepenuhnya](topic:relations-dimensions)). Misalnya, pilih sudut persegi panjang dan titik asal, lalu pilih {{ui:• Berimpit}}, atau beri dimensi pada pusat lingkaran dari titik asal.

:::note
Tanpa penunjuk, Anda bisa sampai sejauh ini: pindah ke baris bidang di riwayat dengan {{key:Tab}} dan tombol panah, tekan {{key:Enter}} untuk memilihnya, tekan {{key:S}} untuk membuat sketsa, tambahkan bentuk di sini, dan capai **Edit** di sebelah setiap dimensi dan {{ui:Keluar dari sketsa}} dengan {{key:Tab}}. Memilih geometri, dan karena itu menambahkan relasi atau dimensi baru, masih memerlukan klik atau ketukan pada build ini.
:::

## Batasan

- Busur belum bisa diketik. Gambar dengan alat Busur, atau ketik lingkaran dan gunakan relasi.
- Tidak ada koordinat relatif (dari titik terakhir) atau koordinat polar (panjang dan sudut) di kotak ini.
- Geometri yang diketik tidak melakukan snap ke titik yang sudah ada. Ketik koordinat yang sama dengan titik yang ada, lalu tambahkan relasi {{ui:• Berimpit}} di antara keduanya jika harus tetap tersambung.
