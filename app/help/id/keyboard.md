---
title: Tombol dan mouse
summary: Setiap pintasan keyboard dan aksi mouse di PartCraft, dikelompokkan menurut tempat kerjanya: di mana saja, salin dan tempel, pada part, di tampilan 3D, di sketsa, di riwayat, dan di rakitan.
keywords: keyboard, pintasan, tombol pintas, tombol, mouse, orbit, putar, geser, zoom, roda, klik kanan, urungkan, ulangi, simpan, buka, escape, hapus, alt panah, salin, tempel, potong, duplikat, pilih semua, tombol tengah
from: 3a59c3a3
---

Tombol tidak berfungsi saat Anda mengetik di kotak pada panel, kecuali {{key:Mod+S}} dan {{key:Mod+O}}, yang selalu berfungsi. Tombol huruf bekerja tanpa tombol pengubah.

Catatan umum tentang tombol di peramban dan pada keyboard tanpa tombol fungsi: [Tombol, mouse, dan trackpad](common:keys).

## Di mana saja

| Tombol | Aksi |
|---|---|
| {{key:Mod+S}} | Simpan part (dalam rakitan: rakitannya). Menutup sketsa yang sedang terbuka terlebih dahulu |
| {{key:Mod+O}} | Buka file part atau rakitan (bertanya dulu jika ada perubahan yang belum disimpan) |
| {{key:Mod+Z}} | Urungkan |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Ulangi |
| {{key:F1}} | Buka atau tutup bantuan ini (juga {{ui:Bantuan}} di bilah aplikasi). {{key:Esc}} juga menutupnya. Pada banyak laptop dan keyboard Mac, tahan Fn |
| {{key:Ctrl+Shift+F}} | Mode layar: normal, layar penuh, layar penuh dengan bilah disembunyikan. Control juga di Mac, bukan ⌘ |
| {{key:Esc}} | Keluar dari layar penuh (saat dalam layar penuh) |
| {{key:Mod+,}} | Pengaturan, termasuk tab PartCraft (lihat [Pengaturan PartCraft](topic:settings)) |

Di kotak angka pada panel, {{key:Mod+Z}} adalah urungkan teks bawaan peramban. Di kotak angka di atas dimensi sketsa, tombol ini mengurungkan di PartCraft.

## Salin, tempel, dan duplikat

Tombol ini bekerja pada apa yang sedang Anda kerjakan: geometri yang dipilih di sketsa yang terbuka, fitur yang dipilih di riwayat, atau part yang dipilih di rakitan. Rincian di [Salin, tempel, dan duplikat](topic:copy-paste).

| Tombol | Aksi |
|---|---|
| {{key:Mod+C}} | Salin pilihan |
| {{key:Mod+X}} | Potong: salin, lalu hapus |
| {{key:Mod+V}} | Tempel. Di sketsa, salinan mengikuti penunjuk: klik di tempat yang dituju |
| {{key:Mod+Shift+V}} | Tempel di tempat yang sama: koordinat sama (di rakitan, di tempat yang sama) |
| {{key:Mod+D}} | Duplikat: salin dan tempel dalam satu langkah, tanpa mengubah papan klip |
| {{key:Mod+A}} | Pilih semua (di sketsa) |
| {{key:Esc}} | Batalkan semua pilihan (dan batalkan tempel yang mengikuti penunjuk) |

Di kotak angka, tombol ini menyalin dan menempel teks seperti biasa. Teks yang dipilih di panel disalin oleh peramban.

## Pada part (tanpa sketsa terbuka)

| Tombol | Aksi |
|---|---|
| {{key:S}} | Sketsa pada bidang atau muka datar yang dipilih; jika belum ada yang dipilih, pilih tempatnya dengan mengklik |
| {{key:F}} | Paskan part di tampilan |
| {{key:M}} | Ukur, di setiap ruang kerja dan di rakitan; {{key:Esc}} menghapus titik yang dipilih, {{key:Esc}} lagi menutupnya (lihat [Ukur jarak, sudut, dan massa](topic:measure)) |
| {{key:X}} | Tampilan potongan aktif atau nonaktif, di setiap ruang kerja dan di rakitan; {{key:Esc}} menutupnya (lihat [Melihat ke dalam dengan tampilan potongan](topic:section-view)) |
| {{key:Delete}} | Hapus fitur yang dipilih (bertanya jika fitur lain memakainya) |
| {{key:0}} … {{key:9}}, {{key:.}} | Dengan fitur dipilih: ketik angka utamanya (kedalaman ekstrusi, diameter lubang, jumlah pola, radius fillet …), lalu {{key:Enter}}. {{key:Esc}} mempertahankan nilai lama |
| {{key:Backspace}} | Hapus fitur yang dipilih, jika ada yang dipilih |
| {{key:Esc}} | Berhenti memilih bidang sketsa, atau batalkan pilihan (termasuk tepi atau muka yang dipilih dengan {{key:Shift}}) |

## Di tampilan 3D

Klik di dalam tampilan terlebih dahulu agar tampilan memiliki fokus keyboard.

| Tombol | Aksi |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Putar tampilan 15 derajat |
| {{key:Shift+Left}} dan panah lainnya | Geser |
| {{key:Plus}} atau {{key:=}} | Perbesar |
| {{key:Minus}} | Perkecil |

| Mouse | Aksi |
|---|---|
| Seret dengan tombol kiri | Putar (orbit) tampilan |
| Seret dengan tombol kanan atau tengah | Geser |
| {{key:Shift}}, {{key:Ctrl}} atau ⌘ ditahan saat menyeret dengan tombol kiri | Geser |
| Putar roda | Zoom di posisi penunjuk (menjauh dari Anda untuk memperbesar) |
| Gesek dua jari di trackpad | Putar tampilan; dengan {{key:Shift}}, geser. Cubit untuk zoom. Diatur oleh **Gulir** di [Pengaturan PartCraft](topic:settings) |

Dengan **Memutar tampilan: Tombol tengah** di [Pengaturan PartCraft](topic:settings), tombol tengah memutar tampilan, {{key:Shift}} dengan tombol tengah atau tombol kanan menggeser, dan tombol kiri hanya memilih.
| Klik | Pilih muka (akan tersorot seluruhnya), tepi, atau bidang |
| {{key:Shift}}+klik tepi atau muka | Kumpulkan beberapa tepi atau muka |
| Klik ruang kosong | Hapus pilihan |

## Saat memilih tepi atau muka untuk fillet, chamfer, atau shell


| Tombol atau mouse | Aksi |
|---|---|
| Klik tepi atau muka | Tambahkan, atau keluarkan jika sudah ada |
| {{key:Esc}} atau {{key:Enter}} | Selesai memilih (sama dengan {{ui:Selesai}}) |
| {{key:F}} | Paskan |
| Tombol panah, saat tampilan dalam fokus | Putar; dengan {{key:Shift}}, geser |

## Di lembar gambar

| Tombol | Aksi |
|---|---|
| {{key:F}} | Paskan lembar |
| {{key:Plus}} / {{key:Minus}} | Zoom (saat lembar dalam fokus) |
| {{key:Shift+Left}} dan panah lainnya | Geser (saat lembar dalam fokus) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Geser simbol GD&T yang dipilih 1 mm |
| {{key:Delete}} atau {{key:Backspace}} | Hapus simbol yang dipilih |
| {{key:Esc}} | Berhenti menempatkan simbol; jika tidak, batalkan pilihan; jika tidak, kembali ke model |

| Mouse | Aksi |
|---|---|
| Klik pada tampilan, dengan Datum, Frame, Finish, atau Detail dipilih | Tempatkan di sana (menempel ke garis terdekat) |
| Klik simbol | Pilih simbol |
| Seret simbol | Pindahkan (garis pemandu tetap pada titiknya) |
| Putar roda | Zoom di posisi penunjuk |
| Seret dengan tombol kanan atau tengah | Geser |

## Di sketsa

| Tombol | Aksi |
|---|---|
| {{key:L}} | Garis |
| {{key:R}} | Persegi panjang |
| {{key:C}} | Lingkaran |
| {{key:A}} | Busur (pusat, awal, akhir) |
| {{key:P}} | Titik |
| {{key:N}} | Garis sumbu |
| {{key:F}} | Fillet sudut |
| {{key:D}} | Dimensi |
| {{key:B}} | Spline (titik fit) |
| {{key:T}} | Pangkas |
| {{key:E}} | Perpanjang |
| {{key:O}} | Offset ({{key:B}} saat offset: kedua sisi) |
| {{key:M}} | Cerminkan |
| {{key:S}} | Pilih |
| {{key:Q}} | Ubah kurva yang dipilih menjadi konstruksi dan sebaliknya |
| {{key:Enter}} | Akhiri rantai garis atau spline |
| {{key:Delete}} atau {{key:Backspace}} | Hapus pilihan |
| {{key:Mod+A}} | Pilih semua di sketsa |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Salin, potong, tempel geometri (tempel mengikuti penunjuk) |
| {{key:Mod+Shift+V}} | Tempel di koordinat yang sama |
| {{key:Mod+D}} | Duplikat pilihan dan tempatkan dengan klik |
| {{key:Esc}} | Mundur selangkah: batalkan kotak angka atau tempel, akhiri rantai garis, kembali ke Pilih, hapus pilihan, lalu tutup sketsa |

| Mouse | Aksi |
|---|---|
| Klik | Tempatkan titik dengan alat gambar; pilih dengan Pilih |
| {{key:Shift}}+klik | Tambah ke atau kurangi dari pilihan ({{key:Ctrl}}+klik di Windows dan Linux, ⌘+klik di Mac, lakukan hal yang sama) |
| Seret di ruang kosong (Pilih) | Jendela: pilih semua yang berada sepenuhnya di dalam |
| Seret titik, garis, atau tepi lingkaran (Pilih) | Pindahkan; relasi tetap berlaku |
| Seret angka dimensi (Pilih) | Pindahkan label |
| Klik dua kali dimensi | Ubah nilainya |
| Klik dua kali atau klik kanan saat menggambar garis | Akhiri rantai |
| Seret dengan tombol kanan atau tengah | Geser |
| Putar roda | Zoom di posisi penunjuk |

### Di kotak angka

| Tombol | Aksi |
|---|---|
| {{key:Enter}} | Terapkan nilai |
| {{key:Esc}} | Tutup tanpa mengubah |

Klik di luar kotak juga menerapkan nilai.

## Di daftar riwayat

| Tombol | Aksi |
|---|---|
| {{key:Tab}} | Masuk ke daftar |
| {{key:Up}} / {{key:Down}} | Pindah antar baris |
| {{key:Enter}} atau {{key:Space}} | Pilih baris |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Pindahkan fitur yang dipilih ke atas atau ke bawah, jika riwayat mengizinkan |
| {{key:F2}} | Ubah angka utama fitur di barisnya; {{key:Enter}} menyimpannya, {{key:Esc}} mempertahankan nilai lama |

| Mouse | Aksi |
|---|---|
| Klik | Pilih bidang atau fitur |
| Klik dua kali sketsa | Buka |
| Klik dua kali angka fitur | Ubah di dalam baris |

## Di rakitan

| Tombol | Aksi |
|---|---|
| {{key:J}} | Mulai sambungan: lalu klik muka datar pada masing-masing dari dua part |
| {{key:F}} | Paskan |
| {{key:Esc}} | Batalkan sambungan yang Anda mulai, atau batalkan pilihan |
| {{key:Delete}} | Buang part atau sambungan yang dipilih |
| {{key:Backspace}} | Buang part atau sambungan yang dipilih |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Urungkan dan ulangi dalam daftar rakitan itu sendiri |
| {{key:Mod+D}} | Duplikat part yang dipilih (part yang sama, di samping yang lain) |
| {{key:Mod+C}}, lalu {{key:Mod+V}} atau {{key:Mod+Shift+V}} | Salin part, tempel di samping yang lain atau di tempat yang sama |

Mouse di tampilan: sama seperti di tampilan 3D di atas. Klik part untuk memilihnya. Klik dua kali part di dalam daftar untuk menyuntingnya.

## Di ruang kerja Script

| Tombol | Aksi |
|---|---|
| {{key:F5}} | Jalankan skrip (di editor, panel, atau tampilan) |
| {{key:Mod+Enter}} | Jalankan baris yang dipilih, atau baris tempat kursor berada |
| {{key:Tab}} / {{key:Shift+Tab}} | Beri indentasi / hapus indentasi baris yang dipilih. Untuk keluar dari editor dengan keyboard, tekan {{key:Esc}}, lalu {{key:Tab}} |
| {{key:Mod+/}} | Beri komentar pada baris yang dipilih, atau batalkan komentar |
| {{key:Mod+F}} / {{key:Mod+H}} | Cari / cari dan ganti di dalam skrip; {{key:Enter}} atau {{key:F3}} untuk kecocokan berikutnya, {{key:Shift+Enter}} atau {{key:Shift+F3}} untuk sebelumnya, {{key:Esc}} menutup |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Lipat / buka lipatan blok tempat kursor berada (fungsi, if, for, while … end) |
| {{key:Mod+Space}} | Tampilkan pelengkapan untuk nama yang sedang Anda ketik (juga muncul setelah dua huruf); {{key:Up}} / {{key:Down}} memilih, {{key:Enter}} atau {{key:Tab}} mengambil satu, {{key:Esc}} menutup |
| {{key:Enter}} di baris di bawah konsol | Jalankan pernyataan itu saja; {{key:Up}} dan {{key:Down}} memunculkan yang sebelumnya |
| {{key:F}} | Paskan tampilan ke apa yang ditampilkan skrip |

Lihat [Tulis dan jalankan skrip](topic:craftscript).

## Pintasan yang mungkin diambil peramban

- {{key:Mod+Y}} di Safari mungkin membuka riwayat: gunakan {{key:Mod+Shift+Z}} untuk mengulang.
- {{key:Mod+D}} adalah tombol bookmark peramban: PartCraft mengambilnya saat aplikasi dalam fokus, dan membiarkannya saat Anda mengetik di kotak.
- {{key:F11}} dan {{key:Mod+Plus}} / {{key:Mod+Minus}} adalah layar penuh dan zoom halaman milik peramban, bukan milik PartCraft. Gunakan {{key:Ctrl+Shift+F}} untuk layar penuh dan roda untuk model.
- Tombol fungsi di banyak laptop dan Mac memerlukan tombol Fn: tekan Fn+{{key:F1}} untuk bantuan, atau gunakan tombol {{ui:Bantuan}}.

Gestur sentuh dan trackpad: [Trackpad, sentuh, dan layar kecil](topic:trackpad-and-touch).

## Di mana Pindahkan berada

Pindahkan ada di menu {{ui:Lainnya}} pada grup {{ui:Fitur}} sebagai {{ui:Pindahkan bodi}}, di kotak {{ui:Pindahkan}} tempat Anda mengetik ΔX, ΔY, dan ΔZ, dan sebagai panah {{ui:Seret untuk memindahkan}} pada part.
