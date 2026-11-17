---
title: Periksa rakitan untuk benturan dan gerakan
summary: Temukan part yang tumpang tindih dengan Benturan, seret nilai sambungan mana pun untuk melihat gerakannya, dan sapu sambungan melalui rentangnya untuk menemukan tempat part bertabrakan.
keywords: interferensi, deteksi interferensi, benturan, tabrakan, tumpang tindih, kecocokan ulir, ketidakcocokan kedalaman ulir, muka bersentuhan, sembunyikan, filter, gerakan, studi gerakan, sapu, rentang gerak, periksa
from: 9c98db46
---

Dua pemeriksaan dijalankan pada part sebagaimana ditempatkan: **Benturan** mencari material yang tumpang tindih saat ini, dan **pemeriksaan gerakan** menggerakkan satu sambungan melalui rentangnya dan mencari tumpang tindih di sepanjang jalan.

## Periksa interferensi

1. Buka atau bangun rakitan (lihat [Bangun rakitan dengan sambungan](topic:build-assembly)).
2. Pilih {{ui:Benturan}}.

Bilah status melaporkan hasilnya:

- "Tidak ada interferensi antara 3 part (… ms)." Tidak ada yang tumpang tindih.
- "Interferensi: Flange1 dan Flange2: Tumpang tindih, 2.5 mm³." Setiap pasangan, jenis hasilnya, dan volume yang mereka bagi.

Kotak **Rakitan** di sebelah kiri menampilkan **Interferensi**: "Tidak ada", "2 hasil" (yang ditampilkan), atau "Belum diperiksa". Jika tidak ada yang dipilih, panel kanan mencantumkan setiap hasil di bawah **Interferensi**.

Hasil dihapus setiap kali rakitan berubah. Jalankan {{ui:Benturan}} lagi setelah memindahkan sambungan. Setiap pasangan part diperiksa terhadap setiap pasangan lain, jadi rakitan besar membutuhkan waktu lebih lama.

### Jenis hasil

| Jenis | Artinya |
|---|---|
| **Tumpang tindih** | Part berbagi volume: benturan nyata. |
| **Ketidakcocokan kedalaman ulir** | Volume yang dibagi berada di dalam ulir satu part tetapi melewati ulir part lain: baut yang berulir lebih dalam dari lubangnya, atau batang polos di lubang yang diketap. |
| **Kecocokan ulir (ulir kosmetik)** | Volume yang dibagi berada di dalam ulir kedua part: baut di lubang yang diketap. Ulir kosmetik digambar pada ukuran penuh ulir, jadi selalu tumpang tindih sedikit. |
| **Muka bersentuhan** | Tidak ada volume yang dibagi, tetapi muka bersentuhan (dalam 0.001 mm). |

Ulir yang dimodelkan (lihat [Ulir pada poros dan lubang, digambar atau dimodelkan](topic:threads)) adalah geometri nyata: apa yang mereka bagi adalah **Tumpang tindih**.

### Sembunyikan yang tidak perlu dilihat

Di bawah **Interferensi**, **Tampilkan** memiliki kotak untuk setiap jenis: hapus centang **Kecocokan ulir** dan **Muka bersentuhan** untuk hanya melihat benturan yang penting. **Sembunyikan pasangan ini** di sebelah hasil menyembunyikan pasangan part itu apa pun jenisnya. Hasil tersembunyi dihitung ("2 hasil disembunyikan oleh filter ini"), dan **Tampilkan lagi pasangan tersembunyi** memunculkan pasangan kembali. Bilah status juga menghitung hasil tersembunyi.

Filter disimpan bersama rakitan, dan setiap perubahan adalah satu langkah {{key:Mod+Z}}. **Sapu sambungan untuk benturan** (di bawah) juga memakainya. Rakitan dengan filter disimpan sebagai versi 4, yang ditolak oleh versi PartCraft sebelumnya alih-alih kehilangan filternya.

## Tonton gerakannya

1. Pilih sambungan yang bergerak (apa pun selain kaku) di daftar sebelah kiri.
2. Seret penggeser di bawah salah satu nilainya, seperti **Sudut (°)** atau **Offset (mm)**. Part bergerak saat Anda menyeret.
3. Lepaskan. Posisi baru disimpan dan bisa dibatalkan dengan {{key:Mod+Z}}.

Anda juga bisa mengetik sudut atau offset di kotak dan menekan {{key:Enter}}.

Sambungan pada loop tertutup (tautan mekanis) menggerakkan seluruh loop: nilai yang Anda seret dipertahankan, dan sambungan lain di loop mengikuti (lihat [Loop tertutup](topic:build-assembly#closed-loops-linkages)).

## Sapu sambungan untuk benturan

1. Pilih sambungan yang bergerak.
2. Untuk sambungan dengan beberapa nilai (silinder, planar, bola, pin di slot), pilih nilai mana yang akan disapu di **Periksa gerakan**.
3. Pilih {{ui:Periksa benturan pada gerakan}}.

PartCraft menggerakkan nilai itu melalui 25 posisi dalam 24 langkah sama, yang lain tetap seperti semula: sudut dari −180° hingga 180° (kemiringan dari −90° hingga 90°), atau panjang dari minus hingga plus ukuran part terbesar. Hasilnya dilaporkan:

- "Tidak ada benturan di mana pun untuk Sudut (°) dari -180 hingga 180 (25 posisi diperiksa)."
- "6 dari 25 posisi berbenturan, pertama pada Sudut (°) 45 (12.4 mm³)." Posisi pertama yang berbenturan dan volume tumpang tindih di sana.

Tombolnya abu-abu untuk sambungan kaku, yang tidak bergerak. Sapuan hanya memeriksa posisi, bukan jalur di antaranya: part yang tipis bisa menembus part lain di antara dua langkah.

:::note
Kontak dan gravitasi belum dibuat. Tanpa batas, sapuan mencakup seluruh rentang. Beri nilai **Batas** (lihat [Daftar part, tampilan terurai, dan memindahkan part](topic:assembly-bom-explode)) dan sapuan hanya mencakup batas itu, sehingga engsel yang terbuka 90° diperiksa sepanjang 90°.
:::

## Studi gerakan

**Rakitan › Gerak** menggerakkan nilai satu sambungan dari awal ke akhir selama waktu yang Anda berikan (kecepatan konstan, halus, sinus, atau keluar lalu kembali), menempatkan rakitan di setiap langkah dengan sambungan dan loop tertutupnya, lalu melaporkan apa yang berbenturan dan seberapa dekat part mendekat. **Tambah titik** mengikuti tengah sebuah part atau titik yang Anda klik padanya, dan kartu memplot posisinya, kecepatan, dan percepatannya, nilai sambungan, serta jarak bebas terhadap waktu; **Simpan CSV** dan **Simpan plot** menuliskannya. Kecepatan dan percepatan dihitung dari posisi yang direkam, sehingga puncak tajam di antara langkah terbaca rendah: gunakan lebih banyak langkah.

Setelah **Jalankan**, bilah **Langkah melalui jalannya** memindahkan rakitan ke langkah mana pun (waktu, nilai, dan apakah part berbenturan di sana ditampilkan di sebelahnya). Sambungan mempertahankan nilainya sendiri, dan **Kembali ke model** mengembalikan rakitan. Pengaturan studi disimpan di file rakitan; hasilnya dibuat ulang oleh **Jalankan**.

## Studi kontak

**Rakitan › Kontak** menunjukkan bagaimana rakitan memikul beban di tempat part saling menekan. Setiap part membawa tumpuan, beban, dan materialnya sendiri dari studi **Simulasi** masing-masing (muka tetap pada satu part, gaya pada part lain); di sini Anda memilih pasangannya. **Tambah pasangan**, lalu **Pilih sisi A** dan klik muka dari satu part, **Pilih sisi B** dan klik muka dari part yang berbeda (klik pada muka yang sudah dipilih akan melepasnya; Esc atau Selesai mengakhiri pemilihan). Pasangan bisa **Tanpa gesekan** (part saling menekan tetapi meluncur) atau **Terikat** (tetap bersama); faktor kekakuan mengatur seberapa keras kontak menahan tenggelam (20 adalah awal yang wajar, 1000 untuk tumpukan baja yang kaku).

**Selesaikan** menjalankan beban secara bertahap dan menampilkan gaya kontak, kedalaman tenggelam terdalam, pergeseran terbesar, dan tegangan terbesar. Part tanpa pasangan dikeluarkan, dan kartu menyatakannya. Kontak tanpa gesekan tidak menahan part ke samping: beri setiap part tumpuan di studi Simulasinya sendiri, atau ikat, atau langkahnya mungkin tidak stabil. Pasangan dan pengaturan disimpan di file rakitan.

**Ekspor deck CalculiX** menulis model yang sama sebagai file input CalculiX (.inp). CalculiX adalah program terpisah yang Anda pasang dan jalankan sendiri; **Baca hasil CalculiX (.frd)** kemudian membaca kembali perpindahan pada mesh rakitan ini dan menolak file yang dibuat untuk mesh lain. Solver di sini mampu plastis tetapi bukan dinamika eksplisit, dan tidak ada yang di sini merupakan analisis tersertifikasi: minta insinyur memeriksa apa pun yang penting.
