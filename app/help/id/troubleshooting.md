---
title: Pemecahan masalah
summary: Masalah yang mungkin Anda temui di PartCraft, dari aplikasi yang tidak mau mulai hingga fitur yang gagal, sketsa yang tidak mau terselesaikan, file yang tidak bisa dibuka, dan sambungan yang berperilaku aneh, dengan pesan yang Anda lihat dan perbaikannya.
keywords: masalah, galat, bantuan, tidak berfungsi, gagal, kegagalan, crash, kosong, webgl, webassembly, kernel, belum dibuat, terlalu terdefinisi, profil terbuka, tidak dapat dibuka, tidak terjadi apa-apa, arah salah, lambat
from: 7728542c
---

Saat sesuatu tidak berfungsi, baca dulu **bilah status** di bagian bawah: PartCraft menjelaskan di sana mengapa ia menolak atau apa yang diharapkannya berikutnya. Fitur yang gagal juga menampilkan pesannya di bagian atas panel kanannya dan saat Anda mengarahkan kursor ke barisnya di riwayat.

## Aplikasi tidak mulai

### "This browser cannot show 3D (WebGL is off or missing), so PartCraft cannot run here."

"Browser ini tidak dapat menampilkan 3D (WebGL mati atau tidak ada), sehingga PartCraft tidak dapat berjalan di sini."

**Penyebab:** browser mematikan, memblokir, atau tidak mendukung grafis 3D (WebGL), atau driver grafis tidak mendukungnya.

**Perbaikan:**

:::chromium
Buka `chrome://settings/system` (atau `edge://settings/system` di Edge) dan aktifkan "Gunakan akselerasi grafis jika tersedia", lalu mulai ulang browser. Jika sudah aktif, periksa `chrome://gpu` untuk status WebGL, dan perbarui driver grafis Anda.
:::

:::firefox
Buka `about:support` dan lihat Grafis, WebGL. Jika diblokir, perbarui driver grafis. Di `about:config`, `webgl.disabled` harus `false`.
:::

:::safari
WebGL selalu aktif di Safari terbaru. Perbarui macOS (Safari ikut diperbarui). Jika masih gagal, coba Chrome atau Firefox di Mac yang sama untuk menyingkirkan perangkat keras grafis sebagai penyebabnya.
:::

Remote desktop dan beberapa mesin virtual tidak memiliki WebGL. Coba di komputer itu sendiri.

### "The solid kernel did not load: …"

"Kernel solid tidak termuat: …"

**Penyebab:** kernel geometri (program WebAssembly) tidak dapat diunduh atau dijalankan. Biasanya koneksi terputus saat aplikasi dimuat, WebAssembly dimatikan oleh kebijakan perusahaan atau pengaturan keamanan browser, atau browsernya sangat lama.

**Perbaikan:** muat ulang halaman saat online. Jika terus gagal, coba browser terbaru lainnya. Di Firefox, `javascript.options.wasm` di `about:config` harus `true`. Saat offline, aplikasi dan kernelnya hanya termuat jika bilah aplikasi menyatakan **Offline ready** sebelum koneksi hilang ({{ui:Simpan untuk offline}} saat online; lihat [Bekerja offline](common:offline)).

### Tombol offline menampilkan "Gagal menyimpan" atau "Offline tidak tersedia"

**Gagal menyimpan**: beberapa file tidak terunduh. Klik untuk mencoba lagi saat online; koneksi lambat atau berbayar mungkin memerlukan percobaan kedua. **Offline tidak tersedia**: jendela browser ini tidak dapat menyimpan salinan offline (jendela privat dan beberapa komputer terkelola memblokirnya). Gunakan jendela biasa, atau biarkan tab tetap terbuka.

### PartCraft offline tetapi sudah usang

Klik **Offline ready** saat online dan pilih {{ui:Simpan lagi (ambil versi terbaru)}}.

### "Sweep: not built yet. It needs an exact kernel, …"

Pesan lengkapnya adalah "<Name>: belum dibuat. Ia memerlukan kernel yang tepat, yang tidak dimiliki versi PartCraft ini. Bantuan › Yang belum dibuat menjelaskan apa yang harus dilakukan sebagai gantinya." Anda melihatnya saat memilih Sweep, Loft, Rib, flens lembaran logam, fitur permukaan, Gabungkan, Pindahkan bodi, Skala bodi, atau Pola jalur, dan untuk hal lain yang hanya dapat dilakukan kernel yang tepat. Tidak ada yang salah dengan browser atau part Anda: versi PartCraft ini membangun setiap part dengan kernel mesh. Lihat [Yang belum dibuat](topic:not-built-yet) untuk apa yang harus dilakukan sebagai gantinya, dan [Kernel mesh](topic:solid-kernels).

### "Loading the solid kernel…" tidak pernah hilang

Tunggu sebentar pada koneksi lambat: kernel dan pustaka 3D diunduh pada pertama kali. Setelah itu, muat ulang. Jika halaman sendiri menampilkan galat, lihat di atas.

## Tidak terjadi apa-apa saat saya menekan tombol

- Tombol tidak berfungsi saat kursor berada di dalam kotak di panel. Klik di tampilan 3D atau tekan {{key:Esc}} setelah mengetik (atau {{key:Tab}} untuk keluar).
- Tombol panah dan {{key:Plus}}/{{key:Minus}} memutar dan memperbesar tampilan hanya setelah Anda mengklik di dalam tampilan.
- Sebuah dialog terbuka: jawab dulu.
- Dalam sketsa, {{key:F}} adalah alat Fillet, bukan Paskan. Gunakan tombol {{ui:Paskan}}.

## Tombol bilah alat berwarna abu-abu

- Tombol fitur berwarna abu-abu saat sketsa terbuka. Tutup sketsa terlebih dahulu.
- Alat sketsa hanya berfungsi di dalam sketsa.
- {{ui:Urungkan}} dan {{ui:Ulangi}} berwarna abu-abu saat tidak ada yang dapat diurungkan atau diulangi.
- {{ui:Rakitan}} memerlukan part dengan solid. {{ui:Sambungan}} memerlukan dua part dalam rakitan. {{ui:Edit part}} memerlukan part yang dipilih.
- {{ui:STEP AP242 (solid eksak)}} dan {{ui:STEP AP214 (solid eksak)}} berwarna abu-abu dalam rakitan: ekspor setiap part. Jika program lain menolak file yang tepat, coba {{ui:STEP AP214 (solid eksak)}}, lalu {{ui:STEP (berfaset, kernel mesh)}}, dan beri tahu kami melalui {{ui:Bantuan}} › {{ui:Laporkan masalah}}.
- {{ui:Sweep}}, {{ui:Loft}}, dan fitur lain yang memerlukan kernel tepat tidak berwarna abu-abu: mereka tetap dapat diklik, tooltip-nya diakhiri dengan "belum dibuat (memerlukan kernel tepat)", dan saat diklik, bilah status akan menyatakannya. Lihat [Yang belum dibuat](topic:not-built-yet).
- {{ui:Gambar}} memerlukan part dengan solid, dan berwarna abu-abu saat sketsa terbuka.
- Item {{ui:Ekspor}} berwarna abu-abu dalam rakitan: rakitan belum dapat diekspor. Tutup, atau edit part, untuk mengekspor.

## Masalah sketsa

### Sketsa tidak mau menambahkan relasi

"Tidak ada relasi yang cocok dengan pilihan ini. Pilih satu atau dua item (Shift+klik menambahkan)." Relasi memerlukan pilihan yang berbeda. Lihat [Relasi dan dimensi sketsa](topic:sketch-relations) untuk apa yang dibutuhkan setiap relasi.

### "Over defined: … cannot all be met. Undo, or delete one of them."

"Terlalu terdefinisi: … tidak dapat semuanya dipenuhi. Urungkan, atau hapus salah satunya."

**Penyebab:** relasi atau dimensi baru bertentangan dengan yang sudah ada. Sketsa tidak bergerak.

**Perbaikan:** {{key:Mod+Z}}, atau hapus salah satu item merah dalam daftar panel kanan (pilih **Hapus** di sebelahnya).

### "Over defined: … is already implied. Delete it."

"Terlalu terdefinisi: … sudah tersirat. Hapus."

**Penyebab:** relasi itu tidak menambah apa pun: yang lain sudah memaksanya (misalnya Parallel pada dua sisi persegi panjang, atau dimensi yang sudah tetap). Tidak ada dimensi tergerak (driven) dalam build ini.

**Perbaikan:** hapus. Fitur tetap dibangun, dengan peringatan.

### "Those items cannot be dimensioned together."

"Item-item itu tidak dapat diberi dimensi bersama." Anda mengklik, misalnya, titik dan lingkaran. Berikan dimensi ke titik pusat lingkaran sebagai gantinya.

### "A fillet needs a corner where exactly two lines meet." / "That radius is too big for these lines."

"Fillet memerlukan sudut tempat tepat dua garis bertemu." / "Radius itu terlalu besar untuk garis-garis ini."

Klik tepat pada titik sudut dua garis solid. Gunakan radius yang lebih kecil dari yang diizinkan garis terpendek.

### Geometri melompat kembali saat saya menyeretnya

Seretan itu akan memutus relasi atau dimensi, sehingga PartCraft mengembalikannya. Hanya geometri biru (belum terdefinisi penuh) yang dapat digerakkan.

### "This sketch cannot open: Needs Extrude2, which is failing."

"Sketsa ini tidak dapat dibuka: Memerlukan Extrude2, yang gagal."

Sketsa berada di atas muka fitur yang belum dibuat. Perbaiki fitur itu dahulu, atau aktifkan kembali, atau majukan (roll forward).

## Masalah fitur

| Pesan | Penyebab | Perbaikan |
|---|---|---|
| "Buat sketsa dulu: pilih bidang, Sketsa, gambar profil tertutup, Keluar." | Tidak ada sketsa tak terpakai dengan kurva, dan tidak ada yang dipilih | Gambar sketsa, atau pilih sketsa yang akan dipakai di riwayat |
| "The sketch has no closed profile to extrude." (atau "to revolve") | Tidak ada loop tertutup dari garis solid | Tutup celahnya; kembalikan garis konstruksi dengan {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Celah di titik itu | Buka sketsa, seret ujung ke tetangganya agar menempel |
| "The profile branches at (x, y): more than two ends meet there." | Tiga garis atau lebih bertemu di satu titik | Hapus garis tambahan, atau ubah menjadi konstruksi |
| "A closed loop needs at least three sides or a curve." | Dua garis bolak-balik | Gambar ulang loop |
| "Through all is for cuts. Use a depth for a boss." | Boss diatur ke Through all | Atur **Akhir** ke Blind atau Mid-plane |
| "There is nothing to cut on that side of the sketch. Try the other direction." | Potongan mengarah menjauhi material | Centang **Balik arah** |
| "There is nothing to cut yet." / "There is nothing to drill yet." | Belum ada solid sebelum fitur ini | Buat boss dahulu, atau pindahkan fitur ke bawah |
| "Draw a centerline (a construction line) in the sketch to revolve about." | Revolve tanpa sumbu | Tambahkan garis sumbu, atau pilih garis di **Sumbu** |
| "The profile crosses the axis. Keep it on one side of the centerline." | Profil berada di kedua sisi sumbu | Gambar ulang setengah profil |
| "Put sketch points where the holes go (Point tool), then make the hole." | Tidak ada titik lepas dalam sketsa | Tambahkan titik dengan {{key:P}} |
| "The counterbore must be wider than the hole." | Ø counterbore tidak lebih besar dari Diameter | Buat counterbore lebih lebar |
| "The counterbore must be shallower than the hole." | Counterbore lebih dalam dari lubang buta | Buat lebih dangkal, atau buat lubangnya lebih dalam |
| "Choose the features to copy." | Pola atau cermin tanpa centang | Centang fitur di bawah **Fitur yang disalin** |
| "Extrude2 has no solid to copy." | Fitur yang disalin gagal atau nonaktif | Perbaiki atau aktifkan kembali |
| "Needs Sketch3, which is failing." | Fitur yang diandalkannya belum dibuat | Perbaiki fitur yang disebutkan |
| "The face it sits on is gone (Extrude1 is not built)." | Muka sketsa tidak ada lagi | Perbaiki fitur itu, atau hapus sketsa dan sketsa ulang |
| "Nothing is left of the part after this." | Sebuah potongan menghapus semua material | Periksa ukuran dan arah potongan |
| "The solid kernel could not build this (…)." atau "The solid kernel could not combine this with the body." | Kernel menolak geometri | Urungkan, atau ubah ukurannya sedikit; muka yang bersentuhan persis dapat menyebabkannya |
| "Sweep: not built yet. It needs an exact kernel, which this version of PartCraft does not have." (juga Loft, Rib, dan lainnya) | Fitur yang dibuat di build sebelumnya yang hanya dapat dibangun kernel tepat. Ia tetap ada di riwayat dan disimpan kembali tanpa perubahan | Nonaktifkan atau hapus; lihat [Yang belum dibuat](topic:not-built-yet) untuk apa yang harus dilakukan sebagai gantinya |
| "A 5 mm round does not fit here (…)." / "A 2 mm chamfer …" | Ukurannya terlalu besar untuk muka di dekat tepi, atau sudut tidak dapat dihaluskan | Ukuran lebih kecil, atau lebih sedikit tepi per fitur |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (juga Chamfer) | Tepi yang dipilih bundar, seperti bibir lubang, atau terletak pada muka melengkung | {{ui:Pilih tepi}} dan hapus; bulatkan atau miringkan sudut itu dalam sketsa sebagai gantinya |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | **Radius variabel** dicentang | Hapus centangnya dan beri satu radius |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠, peringatan) | Tepi yang dipilih bertemu di sudut; pembulatan bertemu di sana menjadi lipatan tajam | Tidak ada yang perlu diperbaiki: part sudah dibangun. Fillet lebih sedikit tepi jika lipatan itu penting |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Perubahan sebelumnya menghapus tepi | {{ui:Pilih tepi}}, hapus tepi merah, pilih yang baru |
| "Pick the edges in the view, then add them." | Fillet atau chamfer tidak memiliki tepi | {{ui:Pilih tepi}} |
| "Pick the faces to remove (open), then shell." | Shell tidak memiliki muka terbuka | {{ui:Pilih muka}} |
| "The shell could not be made with this thickness (…)." | Dinding lebih tebal dari bagian tipis model atau radius fillet | Dinding lebih tipis, atau fillet lebih besar |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Muka terbuka melengkung | {{ui:Pilih muka}} dan hapus; buka hanya muka datar |
| "Draft: in this version flat faces only (the mesh kernel builds it)." | Muka yang didraf adalah silinder, kerucut, atau bentuk bebas | Hapus; draf hanya muka datar |
| "A face it opens is gone (…)." | Perubahan sebelumnya menghapus muka | {{ui:Pilih muka}} lagi |
| "Fillet1 changes the body's edges or walls; it cannot be copied. …" | Pola atau cermin menyalin fillet, chamfer, atau shell | Hapus centangnya; pola potongan dahulu, lalu fillet |
| "It sits on a face only an exact kernel can find: not built yet in this version." | Sketsa pada muka yang tidak dapat ditemukan kernel mesh, seperti yang dibuat di build sebelumnya | Sketsa pada bidang dasar atau muka datar dari ekstrusi, lalu posisikan dengan dimensi |
| "It uses a face or edge of the solid, which only an exact kernel can find: not built yet in this version." | Bidang, sumbu, atau titik referensi pada muka atau tepi solid | Buat dari bidang dasar, titik sketsa, atau koordinat sebagai gantinya |
| "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." / "A taper: not built yet (it needs an exact kernel)." | Kondisi akhir atau kemiringan yang hanya dibangun kernel tepat | Gunakan kedalaman Blind atau Mid-plane yang Anda ukur; biarkan Taper 0 |

## Masalah pemilihan

- "That face is curved. Pick a flat face or a plane to sketch on." Sketsa memerlukan muka datar. Sketsa pada bidang dasar dan posisikan sketsa dengan dimensi sebagai gantinya.
- Muka yang bertuliskan "Fixed where picked": ia tidak dibuat oleh tepi sketsa (misalnya muka salinan pola), sehingga sketsa di atasnya tetap diam saat part berubah.
- Tepi sulit dikenai: perbesar. Tepi mengalahkan muka di sebelahnya saat kursor tepat di atasnya.

## Masalah file

| Pesan | Perbaikan |
|---|---|
| 'PartCraft membuka file .partcraft.json miliknya sendiri, ekspor dari makro CadCraft untuk SolidWorks (.cadcraft-sw.json), dan file STEP. "bracket.igs" bukan salah satu dari ini.' | Hanya file tersebut yang dikenali (serta mesh STL, OBJ, dan 3MF, dan file `.3dm`) |
| '"part.stp" bukan file STEP (tidak diawali dengan ISO-10303-21).' | File bukan teks STEP |
| "File STEP itu terlalu besar (lebih dari 60 MB) untuk diimpor di sini." | Sederhanakan di sumbernya |
| "That file is too big to be a PartCraft part." pada part yang Anda simpan sendiri | Sebuah solid STEP besar yang diimpor di build sebelumnya membuat file part lebih dari 50 MB. Gunakan salinan lama tanpanya |
| "That file is too big to be a PartCraft part." | File lebih dari 50 MB; ia bukan file PartCraft |
| "Ini bukan file PartCraft (bukan JSON)." / "Ini bukan file PartCraft." | File rusak, atau milik program lain |
| "File ini disimpan oleh PartCraft yang lebih baru (versi file …); yang ini membaca versi …" | Buka di PartCraft yang lebih baru |
| "Extrude2: kedalamannya salah." (atau nilai lain) | File diedit dengan tangan atau rusak. Gunakan salinan lama |
| Sisipkan dalam rakitan menyatakan "Part1.partcraft.json tidak memiliki solid untuk disisipkan." | File part tidak memiliki solid. Buka, buat solid, simpan, lalu sisipkan lagi |

**File yang saya simpan tidak berada di tempat yang saya harapkan.** Menyimpan adalah unduhan: lihat di folder unduhan browser Anda, atau buka daftar unduhan dari bilah alat browser. Lihat [Di mana file Anda disimpan](common:your-files).

**Saya membuka part, tetapi rakitan masih tampil di layar.** Part dimuat di belakang rakitan. Pilih {{ui:Tutup}} untuk menutup rakitan dan melihat part. Tutup rakitan sebelum membuka file part.

## Masalah gambar

| Pesan | Perbaikan |
|---|---|
| "Bangun solid dahulu, lalu buat gambarnya." | Bangun part terlebih dahulu |
| "Tidak ada ruang di lembar untuk: detail. Perkecil detail atau hapus satu tampilan." | Perkecil **Radius detail** atau **Skala detail**, atau hapus potongannya |
| "Detail diambil dari tampilan depan, atas, kanan, atau potongan." | Klik salah satu tampilan itu |
| "Klik salah satu tampilan." | Klik mengenai kertas kosong |
| "Posisi memerlukan setidaknya satu referensi datum." dan pesan bingkai lainnya | Atur datum yang diminta panel, atau pilih karakteristik lain |
| "Tampilan gambar tidak dapat dibuat: …" | Urungkan perubahan terakhir. Jika terus terjadi, simpan, muat ulang, dan buka kembali part |

## Masalah rakitan

| Pesan | Perbaikan |
|---|---|
| "Bangun solid dahulu, lalu masukkan ke dalam rakitan." | Part belum memiliki solid |
| "Sisipkan part kedua dahulu (Tambah salinan, Sisipkan, atau Edit › Duplikat)." | Sambungan memerlukan dua part |
| "Pilih muka pada part yang berbeda." | Kedua muka sambungan harus berada pada part yang berbeda |
| "Muka itu melengkung. Pilih muka datar …" | Sambungan dimulai dari muka datar. Lalu gunakan **Pusat pada** untuk lubang atau sumbu putar |
| "Bracket2 tidak tersambung ke part yang ditanahkan, sehingga tetap di tempatnya." | Tambahkan sambungan dari part itu ke part yang sudah diposisikan |
| "Revolute3 menutup loop yang tidak dapat tertutup: meleset 2.000 mm. Periksa muka, offset, dan batas sambungan loop." | Part-part tidak dapat semuanya bertemu: periksa panjang, muka yang digunakan tiap sambungan, offset (part yang ditumpuk muka ke muka harus sepakat kedalamannya), dan batasnya; atau hapus satu sambungan dari loop |
| "Muka yang digunakan sambungan ini sudah hilang dari Bracket." / "Sumbu yang digunakan sambungan ini sudah hilang dari Bracket." | Part telah diedit. Hapus sambungan dan buat ulang |
| "Sumbu berjalan sepanjang muka, sehingga tidak dapat mengatur pusat sambungan." | Pilih sumbu yang memotong muka, atau "titik asal muka itu sendiri" |
| "Rakitan harus menyimpan setidaknya satu part. Tutup saja sebagai gantinya." | Gunakan {{ui:Tutup}} |

**Part sudah tersambung, tetapi di tempat yang salah.** Atur **Pusat pada** untuk kedua sisi sambungan ke lubang atau sumbu putar yang seharusnya sejajar, lalu sesuaikan **Sudut (°)** dan **Offset (mm)**.

## Lambat

- Atur **Kurva** ke Normal atau Coarse saat memodelkan; ganti ke Fine sebelum mengekspor.
- Jumlah pola yang besar (ratusan salinan) memerlukan waktu untuk dibangun ulang pada setiap perubahan. Nonaktifkan pola saat Anda bekerja pada fitur lain.
- Benturan dan pemeriksaan gerak membandingkan setiap pasang part; rakitan besar memerlukan waktu lebih lama.
- Tutup tab berat lainnya. PartCraft berjalan di prosesor dan grafis komputer Anda sendiri.

## Masih buntu

Simpan file Anda terlebih dahulu ({{key:Mod+S}}), lalu muat ulang halaman dan buka kembali. Jika fitur masih gagal, pilih fitur itu, baca pesannya, dan coba {{key:Mod+Z}} kembali ke keadaan baik terakhir.
