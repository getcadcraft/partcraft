---
title: Layar PartCraft
summary: Tur setiap bilah dan panel: bilah alat dan cara perubahannya, riwayat, fakta part, tampilan 3D, panel properti, dan bilah status.
keywords: layar, tata letak, bilah alat, riwayat, pohon fitur, properti, panel, bilah status, antarmuka, ui, tur, layar penuh
from: 5b5bb843
---

Layar memiliki lima bagian: bilah alat di atas, riwayat di kiri, tampilan 3D di tengah, panel properti di kanan, dan bilah status di bawah. Di atas semuanya terdapat bilah aplikasi CadCraft.

## Bilah aplikasi

Bilah tipis di paling atas milik situs CadCraft, bukan PartCraft itu sendiri. Bilah ini menampilkan nama aplikasi dan tempat ia berjalan, menu versi, **Tentang PartCraft**, tombol mode layar, dan sakelar tema Kertas / Model.

- **Kertas** berupa garis gelap di atas lembar terang. **Model** berupa garis terang di atas latar gelap. Warna sketsa mengikuti tema.
- {{ui:Pengaturan}} (roda gigi, atau {{key:Mod+,}}) memiliki tab {{ui:PartCraft}}: tombol mouse mana yang memutar tampilan, roda mouse atau trackpad, dan relasi saat membuat sketsa. Lihat [Pengaturan PartCraft](topic:settings).
- Tombol mode layar, atau {{key:Ctrl+Shift+F}}, bergantian antara normal, layar penuh, dan layar penuh dengan bilah tersembunyi. Dengan bilah tersembunyi, gerakkan penunjuk ke tepi atas (atau ketuk di sana) untuk memunculkannya kembali. {{key:Esc}} kembali ke normal. Tombol ini adalah {{key:Ctrl+Shift+F}} juga di Mac, bukan ⌘.

## Bilah alat

Bilah alat dikelompokkan. Ia berubah sesuai apa yang sedang Anda kerjakan, sehingga muat dalam satu baris:

| Grup | Tombol | Ditampilkan |
|---|---|---|
| File | {{ui:Baru}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Ekspor}} (sebuah menu) | Selalu |
| Sketsa | {{ui:Sketsa}} | Saat tidak ada sketsa yang terbuka |
| Sketsa | {{ui:Keluar}}, {{ui:Garis}}, {{ui:Persegi panjang}}, {{ui:Lingkaran}}, {{ui:Busur}}, {{ui:Titik}}, {{ui:Garis tengah}}, {{ui:Fillet}}, {{ui:Dimensi}}, {{ui:Konstruksi}} | Hanya saat sketsa terbuka |
| Fitur | {{ui:Ekstrusi}}, {{ui:Potong}}, {{ui:Revolusi}}, {{ui:Lubang}}, {{ui:Linear}}, {{ui:Melingkar}}, {{ui:Cerminkan}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Lainnya}} (menu: Potong berputar, Bidang, Sumbu, Titik, Sweep, Loft, Draft) | Pada part, tidak saat sketsa atau gambar terbuka. Fillet dan Chamfer bekerja pada tepi lurus di antara dua muka datar; Shell dan Draft pada muka datar. Sweep dan Loft belum dibuat di versi ini (memerlukan kernel eksak); mengklik salah satunya memberi tahu hal itu |
| Fitur | {{ui:Selesai}} | Hanya saat Anda memilih tepi atau muka untuk fillet, chamfer, shell, atau draft |
| Gambar | {{ui:Gambar}} | Pada part (dapat dipakai setelah part memiliki solid) |
| Gambar | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finishing}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Kembali}} | Hanya di lembar gambar |
| Rakitan | {{ui:Rakitan}} | Pada part (dapat dipakai setelah part memiliki solid) |
| Rakitan | {{ui:Tambah salinan}}, {{ui:Sisipkan}}, {{ui:Sambungan}}, {{ui:Benturan}}, {{ui:Edit part}}, {{ui:Tutup}} | Hanya di dalam rakitan |
| Rakitan | {{ui:Kembali}} | Saat Anda menyunting part dari rakitan |
| Edit | {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Lainnya}} (menu: Potong, Salin, Tempel, Tempel di tempat yang sama, Duplikat, Hapus, Pilih semua, Batalkan pilihan) | Selalu; setiap item bekerja pada sketsa, riwayat, atau rakitan yang sedang Anda buka |
| Tampilan | {{ui:Paskan}}, {{ui:Tegak lurus ke}}, {{ui:Tampilan}} (menu: Ukur, Sifat massa, Potongan, Draft, Zebra, Kelengkungan, {{ui:Bidang dasar}}, lalu Isometrik, Depan, Belakang, Atas, Bawah, Kanan, Kiri) | Selalu |

Arahkan kursor ke tombol untuk melihat fungsinya dan tombol pintasannya. Tombol yang abu-abu belum dapat dipakai: misalnya tombol fitur saat sketsa terbuka, atau {{ui:Sambungan}} sebelum rakitan memiliki dua part.

Menu {{ui:Lainnya}} di grup Edit mencantumkan setiap aksi penyuntingan beserta tombol pintasannya. Objek yang disalin dan ditempel mengikuti posisi Anda; lihat [Salin, tempel, dan duplikat](topic:copy-paste). Tooltip item yang abu-abu menyatakan mengapa ia tidak dapat bekerja sekarang.

Menu {{ui:Ekspor}} memuat {{ui:STL, untuk cetak 3D}}, {{ui:3MF, untuk cetak 3D}}, {{ui:STEP AP242 (solid eksak)}}, {{ui:STEP AP214 (solid eksak)}}, {{ui:STEP (berfaset, kernel mesh)}}, {{ui:STEP AP214 (berfaset, kernel mesh)}}, {{ui:DXF sketsa atau muka datar}}, dan {{ui:Gambar (PDF): tampilan, potongan, detail, GD&T}}. Item STEP eksak menulis muka bulat pada permukaan sejatinya; yang berfaset menulisnya sebagai facet datar.

## Riwayat (kiri)

Panel di kiri adalah riwayat fitur part, daftar yang dibangun ulang PartCraft dari atas ke bawah.

- Judulnya adalah nama part ("Part1" sampai Anda mengganti namanya).
- **Bidang Depan**, **Bidang Atas**, dan **Bidang Kanan** berada di urutan pertama. Klik salah satu untuk memilihnya; ia menyorot di tampilan.
- Di bawahnya adalah fitur Anda sesuai urutan dibuatnya. Sketsa yang dipakai fitur menjorok di bawah fitur itu.
- Tanda di ujung kanan baris menunjukkan statusnya:

| Tanda | Arti |
|---|---|
| (tidak ada) | Dibangun, dan sketsa sudah terdefinisi penuh |
| − | Sketsa yang belum terdefinisi penuh (masih bisa bergerak) |
| + | Sketsa yang terdefinisi berlebih |
| ⚠ | Dibangun, dengan peringatan (arahkan kursor untuk membacanya) |
| ⚠ error | Fitur gagal. Arahkan kursor untuk membaca alasannya, atau klik |
| ⚠ not built | Fitur memerlukan fitur lain yang gagal atau nonaktif |
| mati | Dinonaktifkan |

- Setiap fitur menampilkan angka utamanya setelah namanya, misalnya "25 mm" untuk Ekstrusi atau "Ø6.6 thru" untuk lubang. Klik dua kali angka itu, atau tekan {{key:F2}} pada baris, untuk mengubahnya langsung di sana. Lihat [Ubah ukuran](topic:change-sizes).
- Klik fitur untuk menyuntingnya di kanan. Klik dua kali sketsa untuk membukanya.
- Saat Anda mengembalikan (roll back), baris **Bilah rollback · roll forward** berada di daftar. Fitur di bawahnya berwarna abu-abu dan tidak dibangun.
- Saat baris dipilih, {{key:Up}} dan {{key:Down}} berpindah antarbaris, dan {{key:Alt+Up}} / {{key:Alt+Down}} memindahkan fiturnya sendiri, selama riwayat mengizinkan.

Dalam rakitan, panel yang sama menampilkan **Part** (yang pertama ditandai "grounded") dan **Sambungan** sebagai gantinya.

### Fakta part

Di bawah riwayat, kotak **Part** mencantumkan **Volume**, **Luas permukaan**, **Ukuran (X × Y × Z)**, **Lubang tembus**, **Badan**, **Segitiga**, jumlah **Fitur**, dan berapa yang **Gagal**. Volume dan luas adalah milik solid berfaset yang dibangun oleh kernel mesh, sedikit di bawah nilai sebenarnya untuk bentuk bulat (lihat [Fitur dan opsinya](topic:features#curves-resolution)).

Dalam rakitan, kotak diberi judul **Rakitan**: Part, Instance, Sambungan, Belum tersambung, dan Interferensi.

## Tampilan 3D (tengah)

Tampilan menunjukkan solid, bidang dasar, dan sketsa apa pun yang belum dipakai fitur.

Bidang dasar digambar penuh saat part kosong. Setelah part memiliki solid, mereka mundur: digambar samar agar tidak menutupi part, dan klik menembus mereka ke part. Mereka kembali penuh saat Anda memilih tempat membuat sketsa ({{ui:Sketsa}} tanpa pilihan) dan saat Anda memilih salah satunya di riwayat. {{ui:Tampilan}} › {{ui:Bidang dasar}} menyembunyikannya sepenuhnya; mereka tetap tampil saat Anda memilih tempat membuat sketsa. PartCraft mengingat pilihan itu.

- Seret untuk memutar part, seret kanan atau tengah untuk menggeser, dan putar roda untuk zoom di penunjuk. Rinciannya ada di [Tombol dan mouse](topic:keyboard).
- Arahkan kursor ke muka, tepi, atau bidang untuk melihatnya menyala. Klik untuk memilihnya. Muka disorot utuh, dan tepi digambar serta dipilih utuh. {{key:Shift}}+klik mengumpulkan beberapa tepi atau muka. Mereka tetap ditandai.
- Kubus tampilan di kanan atas ikut berputar bersama part: klik muka, tepi, atau sudut untuk melihat dari sana, seret untuk memutar, dan tombol rumah kembali ke awal. Lihat [Kubus tampilan](topic:view-cube).
- Ekstrusi yang dipilih menampilkan panah oranye pada muka ujungnya, dan Revolusi menampilkan panah melengkung di ujung putarannya: seret untuk mengubah kedalaman atau sudut, atau ketik di kotak di sebelahnya. Lihat [Ubah ukuran](topic:change-sizes#drag-it-in-the-view).
- Saat part kosong, kotak berjudul **Mulai part** mencantumkan langkah pertama.
- Seret file `.partcraft.json` atau `.partcraft-asm.json` ke mana saja di tampilan untuk membukanya. File `.step`, `.stp`, `.stl`, `.obj`, `.3mf`, atau `.3dm` yang diseret ke sana terbuka sebagai badan solid.

### Saat Anda memilih tepi atau muka

Setelah {{ui:Fillet}}, {{ui:Chamfer}}, atau {{ui:Shell}} tanpa pilihan (atau {{ui:Pilih tepi}} pada fitur seperti itu), part tampil seperti sebelum fitur tersebut. Klik tepi atau muka untuk menambah atau membuangnya; tandanya menunjukkan apa yang termasuk. {{ui:Selesai}} atau {{key:Esc}} mengakhiri. Lihat [Bulatkan, miringkan, dan kosongkan](topic:fillet-chamfer-shell).

### Di lembar gambar

{{ui:Gambar}} menggantikan tampilan 3D dengan lembar gambar A3. Roda untuk zoom, seret kanan atau tengah untuk menggeser, dan {{key:F}} memaskan. Lihat [Membuat gambar](topic:drawing-pdf).

### Saat sketsa terbuka

Tampilan berputar untuk melihat lurus ke bidang sketsa, dan lapisan sketsa 2D muncul di atasnya. Part hanya menampilkan fitur yang dibuat sebelum sketsa ini. Strip di kiri atas menampilkan chip status sketsa ("Fully defined", "Under defined · 3 degrees of freedom", dan seterusnya) serta namanya, seperti "Sketch2 on a face of Extrude1".

## Panel properti (kanan)

Panel di kanan menampilkan apa pun yang dipilih, dan judulnya menamainya:

- **Part** (tidak ada yang dipilih): **Nama** part dan pengaturan **Kurva**.
- Bidang: tombol {{ui:Buat sketsa di sini}}.
- **Muka**: jenisnya (Muka datar, Silinder dengan radius dan sumbunya, Kerucut, Bola, atau Torus), luasnya, fitur yang membuatnya, dan untuk muka datar {{ui:Buat sketsa pada muka ini}}, {{ui:Tegak lurus ke}}, {{ui:Ekspor muka sebagai DXF}}, {{ui:Ekstrusi dari muka ini}}, {{ui:Potong ke dalamnya}}, dan {{ui:Lubang di sini}} (lihat [Tarik atau dorong seluruh muka](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Tepi**: jenisnya (lurus, lingkaran dengan pusat dan radiusnya, atau kurva), panjangnya, dan dua muka tempat ia berada (seperti "Extrude1 end face and Extrude1 side"), dengan tombol {{ui:Fillet}} dan {{ui:Chamfer}}.
- Beberapa tepi atau muka yang dipilih dengan {{key:Shift}}: jumlahnya, dengan {{ui:Fillet}} dan {{ui:Chamfer}} untuk tepi, serta {{ui:Kosongkan}}.
- Fitur: angka dan opsinya, dimensi sketsanya, lalu {{ui:Nonaktifkan}}, {{ui:Kembalikan ke sini}}, {{ui:Pindahkan ke atas}}, {{ui:Pindahkan ke bawah}}, {{ui:Hapus}}, dan **Nama**-nya.
- Sketsa yang terbuka: statusnya, relasi yang dapat Anda tambahkan ke pilihan, daftar relasi dan dimensi, **Tambah dengan koordinat**, serta {{ui:Keluar dari sketsa}}, {{ui:Paskan}}, dan {{ui:Ekspor sebagai DXF}}.
- Di lembar gambar: pengaturan potongan dan detail, atau simbol GD&T yang dipilih.
- Dalam rakitan: rakitan, part yang dipilih, atau sambungan yang dipilih.

Setiap kotak angka berlaku saat Anda menekan {{key:Enter}} atau {{key:Tab}}, atau klik di luar. Part langsung dibangun ulang; tidak ada tombol OK. Gunakan {{key:Mod+Z}} untuk kembali.

## Bilah status (bawah)

- Di kiri, koordinat penunjuk dalam sketsa (hanya saat sketsa terbuka).
- Di tengah, pesan: apa yang harus dilakukan berikutnya, dan mengapa sesuatu ditolak. Bacalah saat tampaknya tidak ada yang terjadi.
- Di dekat kanan, chip kernel: selalu "Kernel mesh" di versi ini. Arahkan kursor untuk arti hal itu. Lihat [Kernel mesh](topic:solid-kernels).
- Di kanan, sebuah chip: "Membangun ulang…" saat part dibangun ulang, lalu "Dibangun dalam … ms" saat semuanya baik, atau "1 fitur gagal". Dalam rakitan tertulis "Ditempatkan dalam … ms" atau menghitung masalah sambungan.

Lihat juga [Mulai manual di Illustrate](topic:illustrate): ruang kerja yang membuat manual rakitan dari part dan rakitan Anda.

## Di layar sempit

Hingga lebar 760 piksel, seperti di ponsel, tampilan menjaga layar: bilah alat berupa satu baris yang digulir ke samping, dan panel terbuka sebagai lembar dari bilah di bawah. {{ui:Alat}} menyembunyikan bilah alat dan {{ui:Pindahkan}} menempatkannya di bawah. Lihat [Trackpad, sentuh, dan layar kecil](topic:trackpad-and-touch).
