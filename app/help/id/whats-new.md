---
title: Yang baru di 0.8 dan 0.8.1
summary: PartCraft 0.8 menambahkan analisis langsung saat Anda mengedit, pemeriksaan Apa yang rusak lebih dulu, studi luluh dan kontak dengan file deck untuk solver luar, studi gerak untuk rakitan, ruang kerja Permukaan untuk permukaan bebas, part berukuran dari fisika di ruang kerja Engineer, sketsa dari foto, ekspor untuk pencetakan, lembar nesting ke G-code, dan gambar yang memberi dimensi pada lubangnya. 0.8.1 memperbaiki kebekuan kursor pada layar penuh.
keywords: yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, analisis langsung, perbarui saat mengedit, patahkan, apa yang rusak lebih dulu, faktor beban, nonlinear, luluh, regangan plastis, kontak, calculix, studi gerak, kelonggaran, permukaan, nurbs, haluskan, lambung, zebra, engineer, generator, bodi hasil generator, sketsa dari foto, skala untuk dicetak, pisahkan untuk dicetak, penyusutan, lembar nesting, g-code, gambar, dimensi lubang, asisten, mcp, bahasa, baris bilah alat
from: 62e4dce2
---

Ini yang berubah di PartCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. Simulasi memberi jawaban saat Anda mengedit dan memberi tahu apa yang rusak lebih dulu, rakitan mendapat studi gerak, dan ruang kerja baru membuat permukaan bebas serta part berukuran dari fisika. 0.8.1 adalah rilis perbaikan kecil.

## Baru

### Simulasi

- **Perbarui saat saya mengedit.** Centang {{ui:Perbarui saat saya mengedit}} di blok Solve, maka jawabannya mengikuti suntingan Anda. Ubah dimensi, beban, atau material, dan jawaban cepat, dibuat dengan elemen empat kali lebih besar, langsung muncul; saat Anda berhenti sekitar satu detik, jawaban halus dari studi itu sendiri menggantikannya. Hasilnya menunjukkan jawaban mana yang sedang Anda lihat. Pada kantilever baja, jawaban cepat berada dalam 1 % untuk defleksi dan sekitar 4 % untuk tegangan dibandingkan jawaban halusnya. Lihat [Periksa tegangan dan defleksi](topic:simulation#update-while-you-edit-live).
- **Apa yang rusak lebih dulu.** Untuk studi statis atau tekuk, {{ui:Apa yang rusak lebih dulu?}} di blok **Patahkan** menskalakan beban sampai part menyerah. Hasilnya mendaftar, dari yang terburuk, faktor beban menuju luluh pertama (dengan penanda merah di tempat tegangan memuncak) dan faktor beban menuju tekuk. Faktor di bawah 1 berarti part sudah menyerah saat dibebani, dan panel Masalah menampilkan kesalahan. Faktor-faktor ini berasal dari studi linear, jadi kualitasnya sama dengan studi itu. Lihat [Periksa tegangan dan defleksi](topic:simulation#find-out-what-breaks-first-break-it).
- **Luluh dan kontak.** Dua jenis studi lagi: studi nonlinear, tempat material mengikuti garis lurusnya sampai tegangan luluh lalu lereng yang lebih landai, dengan regangan plastis diplot; dan studi kontak, tempat bagian-bagian terpisah saling mendorong (tanpa gesekan) atau tetap menempel (terikat). Langkah beban yang tidak bisa mencapai keseimbangan, atau bagian yang masuk terlalu dalam satu sama lain, ditampilkan di panel Masalah. Gesekan, geseran besar, rotasi besar, defleksi besar, dan kelelahan tidak dihitung. Lihat [Periksa tegangan dan defleksi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck untuk CalculiX.** {{ui:Ekspor}} › {{ui:Deck CalculiX (.inp)}} menyimpan studi untuk CalculiX, program terpisah yang Anda pasang dan jalankan sendiri; {{ui:Ekspor}} › {{ui:Hasil CalculiX (.frd)}} membaca file hasilnya kembali ke mesh yang sama. PartCraft tidak pernah menjalankan program itu, dan PartCraft memberi tahu jika part berubah sejak deck disimpan.

### Rakitan

- **Studi gerak.** {{ui:Rakitan}} › {{ui:Gerak}} menggerakkan nilai satu sambungan selama waktu yang Anda tentukan (kecepatan konstan, dilonggarkan, sinus, atau maju lalu mundur), menempatkan rakitan pada setiap langkah dengan sambungan dan loop tertutupnya, serta melaporkan apa yang berbenturan dan seberapa dekat part-part mendekat. {{ui:Tambahkan titik}} memplot posisi, kecepatan, dan percepatan sebuah titik, nilai sambungan, serta kelonggaran terhadap waktu; {{ui:Simpan CSV}} dan {{ui:Simpan plot}} menuliskannya. Setelah {{ui:Jalankan}}, Langkah melalui bilah jalankan memindahkan rakitan ke langkah mana pun. Pengaturan studi disimpan dalam file rakitan. Kecepatan dan percepatan dihitung dari posisi yang direkam, jadi gunakan lebih banyak langkah jika puncak tajam terbaca rendah. Lihat [Periksa rakitan untuk benturan dan gerak](topic:check-assembly#a-motion-study).

### Permukaan dan part dari fisika

- **Ruang kerja Permukaan.** Pilih {{ui:Permukaan}} di kotak {{ui:Ruang kerja}} untuk kurva dan permukaan NURBS di samping part: {{ui:Kurva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Cocokkan}} dan {{ui:Zebra}}, dengan kontinuitas (G0, G1, atau G2) diukur pada permukaan yang tepat, dan tepi yang lebih buruk dari yang Anda minta didaftar di Masalah dengan perbaikan Cocokkan. {{ui:Haluskan}} mengukur garis lambung untuk titik belok dan lompatan kelengkungan, lalu membangun ulang yang tidak mulus dalam toleransi Anda. Permukaan disimpan dalam file part dan tidak mengubah fitur part. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Ruang kerja Engineer.** Pilih {{ui:Engineer}} di pengalih ruang kerja, pilih generator, lalu klik {{ui:Baru}}: sebuah skrip menentukan ukuran part dari apa yang harus dilakukannya (memanaskan untuk memindahkan, aliran, tekanan, material, proses cetak) dengan rumus buku teks lalu membangunnya, kemudian mengembalikan angka yang dipakai beserta sumbernya, pemeriksaan manufakturnya, dan file untuk alat analisis. Input yang sama menghasilkan part yang sama di komputer mana pun. Generator disimpan dalam part, dan membuka part tidak pernah menjalankan skrip. Lihat [Part dari fisika: generator](topic:engineer-generators) dan [Tulis generator](topic:write-a-generator).

### Sketsa, gambar, dan pembuatan

- **Sketsa dari foto.** {{ui:Fitur}} › {{ui:Lainnya}} › {{ui:Sketsa dari foto…}} menelusuri gambar part datar di atas dasar polos (garis luar dan lubang) atau gambar pena menjadi garis, busur, dan lingkaran. Anda memberikan satu panjang, memeriksa pratinjau, lalu membuat sketsa. Lihat [Dasar sketsa](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala dan pisahkan untuk dicetak.** {{ui:Ekspor}} › {{ui:Skala untuk dicetak (STL atau 3MF)…}} menskalakan per sumbu tanpa mengubah part, misalnya dengan toleransi penyusutan. {{ui:Ekspor}} › {{ui:Pisahkan untuk dicetak (zip berisi potongan)…}} memotong part yang terlalu besar untuk meja cetak Anda menjadi potongan bernomor yang disambung dengan pasak, kunci, ekor burung, lubang dowel, atau kantong magnet. Lihat [Cetak dalam 3D](topic:print-3d).
- **Lembar nesting ke G-code.** {{ui:Ekspor}} › {{ui:Lembar nesting ke G-code}} membaca DXF yang sudah di-nesting dan membuat satu program per lembar melalui post yang Anda pilih: lubang dan potongan dulu, lalu garis luarnya. Program tidak merencanakan lead-in, urutan pemotongan, atau tepi bersama. Lihat [Susun part datar pada lembar](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Gambar yang mengerjakan lebih banyak sendiri.** {{ui:Lembar}} › {{ui:Otomatis}} memilih lembar ukuran A terkecil yang memuat tampilan pada skala standar terbesar hingga 1:1. {{ui:Beri dimensi pada lubang}} menaruh tanda pusat pada setiap lubang, satu callout per ukuran, dan posisi dari sudut kiri bawah tampilan. Lihat [Buat gambar](topic:drawing-pdf).

### Di setiap aplikasi

- **Bahasa.** Aplikasi tersedia dalam 54 bahasa. Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memilih Bungkus (seperti sebelumnya), 2 baris, atau 1 baris; bilah yang tidak muat akan digulir ke samping. Pita Fitur PartCraft menampilkan alat yang paling sering dipakai dalam ukuran besar dan menyembunyikan varian di balik tombol terbagi.
- **Hubungkan AI Anda.** Studio adalah hub untuk menghubungkan asisten milik Anda sendiri ke kedelapan aplikasi, dengan izin hanya baca, sarankan, atau sunting untuk setiap aplikasi. Asisten yang terhubung dapat menentukan ukuran part dari sebuah kalimat, misalnya braket untuk beban, menunjukkan perhitungannya dan setiap pemeriksaan, lalu membangunnya; asisten melaporkan apa yang tidak diperiksanya (konsentrasi tegangan, kelelahan, rangkak pada plastik). Lihat [Gunakan PartCraft dengan asisten AI](topic:use-with-ai-assistants).

## Diperbaiki di 0.8.1

- **Kebekuan kursor pada layar penuh.** Pemilihan saat melayang kini dibatasi frekuensinya. Penyebabnya adalah pembacaan terbaik kami dan belum dikonfirmasi dengan orang yang melaporkannya.
- **Bahasa saat dijalankan.** Studio dan edisi kemasan dapat berganti bahasa saat berjalan; sebelumnya hanya bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.

## Belum ada di versi ini

- Hubungkan AI Anda belum selesai: hubungkan dengan satu klik di dalam Studio, konektor hosted untuk AI peramban, API key sendiri di dalam Studio, dan paket MCP yang diterbitkan belum dijanjikan. Studio tidak punya AI sendiri.
- Studio tidak ditandatangani kode: Windows mungkin memberi peringatan, dan macOS meminta klik kanan lalu Buka. Lihat [Pemecahan masalah](topic:troubleshooting).
- Tumpukan toleransi masih satu arah: lihat [Tumpukan toleransi](topic:tolerance-stackup).
- Sisanya tercantum di [Apa yang belum dibuat](topic:not-built-yet).

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
