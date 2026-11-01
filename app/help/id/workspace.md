---
title: Layar PartCraft
summary: Tur setiap bilah dan panel: bilah alat dan cara ia berubah, riwayat, data part, tampilan 3D, panel properti, dan bilah status.
keywords: layar, tata letak, bilah alat, riwayat, pohon fitur, properti, panel, bilah status, antarmuka, ui, tur, layar penuh
from: 7394fc49
---

Layar punya lima bagian: bilah alat di sepanjang atas, riwayat di kiri, tampilan 3D di tengah, panel properti di kanan, dan bilah status di sepanjang bawah. Di atas semuanya ada bilah aplikasi CadCraft.

## Bilah aplikasi

Bilah tipis di paling atas milik situs CadCraft, bukan PartCraft sendiri. Isinya nama aplikasi dan tempat ia berjalan, menu versi, **Tentang PartCraft**, tombol mode layar, dan sakelar tema Kertas / Model.

- **Kertas** adalah garis gelap di lembar terang. **Model** adalah garis terang di latar gelap. Warna sketsa mengikuti tema.
- {{ui:Pengaturan}} (roda gigi, atau {{key:Mod+,}}) punya tab {{ui:PartCraft}}: tombol mouse mana yang memutar tampilan, roda mouse atau trackpad, dan relasi saat membuat sketsa. Lihat [Pengaturan PartCraft](topic:settings).
- Tombol mode layar, atau {{key:Ctrl+Shift+F}}, bergantian melewati normal, layar penuh, dan layar penuh dengan bilah disembunyikan. Saat bilah disembunyikan, gerakkan penunjuk ke tepi atas (atau ketuk di sana) untuk memunculkannya kembali. {{key:Esc}} kembali ke normal. Tombol ini adalah {{key:Ctrl+Shift+F}} di Mac juga, bukan ⌘.

## Bilah alat

Bilah alat dikelompokkan. Ia berubah menurut apa yang sedang Anda lakukan, sehingga muat dalam satu baris:

| Grup | Tombol | Ditampilkan |
|---|---|---|
| File | {{ui:Baru}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Ekspor}} (menu) | Selalu |
| Sketsa | {{ui:Sketsa}} | Saat tidak ada sketsa terbuka |
| Sketsa | {{ui:Keluar}}, {{ui:Garis}}, {{ui:Persegi panjang}}, {{ui:Lingkaran}}, {{ui:Busur}}, {{ui:Titik}}, {{ui:Garis tengah}}, {{ui:Fillet}}, {{ui:Dimensi}}, {{ui:Konstruksi}} | Hanya saat sketsa terbuka |
| Fitur | {{ui:Ekstrusi}}, {{ui:Potong}}, {{ui:Revolusi}}, {{ui:Lubang}}, {{ui:Linear}}, {{ui:Melingkar}}, {{ui:Cerminan}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Lainnya}} (menu: Potongan revolusi, Bidang, Sumbu, Titik, Sweep, Loft, Draft) | Pada part, tidak saat sketsa atau gambar terbuka. Fillet dan Chamfer bekerja pada tepi lurus di antara dua muka datar; Shell dan Draft pada muka datar. Sweep dan Loft belum dibuat di versi ini (memerlukan kernel eksak); mengkliknya menyebutkan hal itu |
| Fitur | {{ui:Selesai}} | Hanya saat Anda memilih tepi atau muka untuk fillet, chamfer, shell, atau draft |
| Gambar | {{ui:Gambar}} | Pada part (dapat dipakai setelah part punya solid) |
| Gambar | {{ui:Datum}}, {{ui:Bingkai}}, {{ui:Finishing}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Belakang}} | Hanya di lembar gambar |
| Rakitan | {{ui:Rakitan}} | Pada part (dapat dipakai setelah part punya solid) |
| Rakitan | {{ui:Tambah salinan}}, {{ui:Sisipkan}}, {{ui:Sambungan}}, {{ui:Benturan}}, {{ui:Edit part}}, {{ui:Tutup}} | Hanya dalam rakitan |
| Rakitan | {{ui:Belakang}} | Saat Anda mengedit part dari rakitan |
| Edit | {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Lainnya}} (menu: Potong, Salin, Tempel, Tempel di tempat yang sama, Duplikat, Hapus, Pilih semua, Batalkan pilihan) | Selalu; setiap item bekerja pada sketsa, riwayat, atau rakitan tempat Anda berada |
| Tampilan | {{ui:Paskan}}, {{ui:Tegak lurus ke}}, {{ui:Tampilan}} (menu: Ukur, Properti massa, Potongan, Draft, Zebra, Kelengkungan, {{ui:Bidang dasar}}, lalu Isometrik, Depan, Belakang, Atas, Bawah, Kanan, Kiri) | Selalu |

Arahkan penunjuk ke tombol untuk melihat fungsinya dan tombol pintasnya. Tombol berwarna abu-abu tidak dapat dipakai saat ini: misalnya tombol fitur saat sketsa terbuka, atau {{ui:Sambungan}} sebelum rakitan punya dua part.

Menu {{ui:Lainnya}} di grup Edit mendaftar setiap tindakan edit beserta tombolnya. Apa yang dikenai salin dan tempel mengikuti tempat Anda berada; lihat [Salin, tempel, dan duplikat](topic:copy-paste). Tooltip item berwarna abu-abu menjelaskan mengapa ia tidak dapat bekerja sekarang.

Menu {{ui:Ekspor}} berisi {{ui:STL, untuk cetak 3D}}, {{ui:3MF, untuk cetak 3D}}, {{ui:STEP AP242 (solid eksak)}}, {{ui:STEP AP214 (solid eksak)}}, {{ui:STEP (berfaset, kernel mesh)}}, {{ui:STEP AP214 (berfaset, kernel mesh)}}, {{ui:DXF sketsa atau muka datar}} dan {{ui:Gambar (PDF): tampilan, potongan, detail, GD&T}}. Dua item STEP eksak berwarna abu-abu: keduanya belum dibuat di versi ini, jadi pakai {{ui:STEP (berfaset, kernel mesh)}}.

## Riwayat (kiri)

Panel di kiri adalah riwayat fitur part, daftar yang dibangun ulang PartCraft dari atas ke bawah.

- Judulnya adalah nama part ("Part1" sampai Anda menggantinya).
- **Bidang depan**, **Bidang atas** dan **Bidang kanan** ada di urutan pertama. Klik salah satu untuk memilihnya; ia menyala di tampilan.
- Di bawahnya adalah fitur Anda menurut urutan pembuatan. Sketsa yang dipakai sebuah fitur menjorok di bawah fitur itu.
- Bendera di ujung kanan baris memberi tahu statusnya:

| Bendera | Artinya |
|---|---|
| (tidak ada) | Dibangun, dan sketsa terdefinisi penuh |
| − | Sketsa yang kurang terdefinisi (masih dapat bergerak) |
| + | Sketsa yang berlebih terdefinisi |
| ⚠ | Dibangun, dengan peringatan (arahkan penunjuk untuk membacanya) |
| ⚠ error | Fitur gagal. Arahkan penunjuk untuk membaca alasannya, atau klik |
| ⚠ tidak dibuat | Fitur memerlukan fitur lain yang gagal atau mati |
| mati | Dinonaktifkan |

- Setiap fitur menunjukkan angka utamanya setelah namanya, seperti "25 mm" untuk Ekstrusi atau "Ø6.6 tembus" untuk lubang. Klik dua kali angka itu, atau tekan {{key:F2}} pada baris, untuk mengubahnya di tempat. Lihat [Ubah ukuran](topic:change-sizes).
- Klik fitur untuk mengeditnya di kanan. Klik dua kali sketsa untuk membukanya.
- Saat Anda melakukan rollback, baris **Bilah rollback · maju** muncul di daftar. Fitur di bawahnya berwarna abu-abu dan tidak dibangun.
- Dengan baris terfokus, {{key:Up}} dan {{key:Down}} berpindah antarbaris, dan {{key:Alt+Up}} / {{key:Alt+Down}} memindahkan fitur itu sendiri, jika riwayat mengizinkan.

Dalam rakitan, panel yang sama mendaftar **Part** (yang pertama ditandai "tetap") dan **Sambungan** sebagai gantinya.

### Data part

Di bawah riwayat, kotak **Part** mendaftar **Volume**, **Luas permukaan**, **Ukuran (X × Y × Z)**, **Lubang tembus**, **Bodi**, **Segitiga**, jumlah **Fitur**, dan berapa yang **Gagal**. Volume dan luas adalah dari solid berfaset yang dibangun kernel mesh, sedikit di bawah nilai sebenarnya untuk bentuk bulat (lihat [Fitur dan opsinya](topic:features#curves-resolution)).

Dalam rakitan kotak berjudul **Rakitan**: Part, Instans, Sambungan, Tidak tersambung, dan Interferensi.

## Tampilan 3D (tengah)

Tampilan menunjukkan solid, bidang dasar, dan sketsa apa pun yang belum dipakai fitur.

Bidang dasar digambar penuh saat part kosong. Setelah part punya solid, bidang itu mundur: digambar samar agar tidak menutupi part, dan klik menembusnya ke part. Bidang kembali penuh saat Anda memilih tempat membuat sketsa ({{ui:Sketsa}} tanpa pilihan) dan saat Anda memilih salah satunya di riwayat. {{ui:Tampilan}} › {{ui:Bidang dasar}} menyembunyikannya sama sekali; bidang tetap tampil saat Anda memilih tempat membuat sketsa. PartCraft mengingat pilihan itu.

- Seret untuk memutar part, seret kanan atau seret tengah untuk menggeser, putar roda untuk zoom di penunjuk. Rincian di [Tombol dan mouse](topic:keyboard).
- Arahkan penunjuk ke muka, tepi, atau bidang untuk melihatnya menyala. Klik untuk memilihnya. Muka menyala utuh dan tepi digambar serta dipilih utuh. {{key:Shift}}+klik mengumpulkan beberapa tepi atau muka. Semuanya tetap bertanda.
- Kubus tampilan di kanan atas berputar bersama part: klik muka, tepi, atau sudut untuk melihat dari sana, seret untuk memutar, tombol rumah kembali ke awal. Lihat [Kubus tampilan](topic:view-cube).
- Ekstrusi yang dipilih menunjukkan panah oranye pada muka ujungnya, Revolusi panah melengkung di ujung putarannya: seret untuk mengubah kedalaman atau sudut, atau ketik di kotak di sebelahnya. Lihat [Ubah ukuran](topic:change-sizes#drag-it-in-the-view).
- Saat part kosong, kotak berjudul **Mulai part** mendaftar langkah pertama.
- Jatuhkan file `.partcraft.json` atau `.partcraft-asm.json` di mana saja pada tampilan untuk membukanya. File `.step`, `.stp`, `.stl`, `.obj`, `.3mf` atau `.3dm` yang dijatuhkan di sana terbuka sebagai bodi solid.

### Saat Anda memilih tepi atau muka

Setelah {{ui:Fillet}}, {{ui:Chamfer}} atau {{ui:Shell}} tanpa pilihan (atau {{ui:Pilih tepi}} pada fitur seperti itu), part ditampilkan seperti sebelum fitur itu. Klik tepi atau muka untuk menambah atau membuangnya; tandanya menunjukkan apa yang termasuk. {{ui:Selesai}} atau {{key:Esc}} mengakhiri. Lihat [Membulatkan, memiringkan, dan melubangi](topic:fillet-chamfer-shell).

### Di lembar gambar

{{ui:Gambar}} menggantikan tampilan 3D dengan lembar gambar A3. Roda melakukan zoom, seret kanan atau tengah menggeser, {{key:F}} memaskan. Lihat [Buat gambar](topic:drawing-pdf).

### Saat sketsa terbuka

Tampilan berputar menghadap lurus ke bidang sketsa dan lapisan sketsa 2D muncul di atasnya. Part hanya menampilkan fitur yang dibuat sebelum sketsa ini. Strip di kiri atas menunjukkan chip status sketsa ("Terdefinisi penuh", "Kurang terdefinisi · 3 derajat kebebasan" dan seterusnya) dan namanya, seperti "Sketch2 pada muka Extrude1".

## Panel properti (kanan)

Panel di kanan menunjukkan apa pun yang dipilih, dan judulnya menyebutkannya:

- **Part** (tidak ada yang dipilih): **Nama** part dan pengaturan **Kurva**.
- Bidang: tombol {{ui:Buat sketsa di sini}}.
- **Muka**: jenisnya (Muka datar, Silinder dengan radius dan sumbunya, Kerucut, Bola, atau Torus), luasnya, fitur mana yang membuatnya, dan untuk muka datar {{ui:Buat sketsa pada muka ini}}, {{ui:Tegak lurus ke}}, {{ui:Ekspor muka sebagai DXF}}, {{ui:Ekstrusi dari muka ini}}, {{ui:Potong ke dalamnya}} dan {{ui:Lubang di sini}} (lihat [Tarik atau dorong seluruh muka](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Tepi**: jenisnya (lurus, lingkaran dengan pusat dan radiusnya, atau kurva), panjangnya, dan dua muka tempatnya berada di antaranya (seperti "muka ujung Extrude1 dan sisi Extrude1"), dengan tombol {{ui:Fillet}} dan {{ui:Chamfer}}.
- Beberapa tepi atau muka yang dipilih dengan {{key:Shift}}: berapa banyak, dengan {{ui:Fillet}} dan {{ui:Chamfer}} untuk tepi, dan {{ui:Kosongkan}}.
- Fitur: angka dan opsinya, dimensi sketsanya, lalu {{ui:Nonaktifkan}}, {{ui:Kembalikan ke sini}}, {{ui:Pindahkan ke atas}}, {{ui:Pindahkan ke bawah}}, {{ui:Hapus}} dan **Nama**-nya.
- Sketsa yang terbuka: statusnya, relasi yang dapat Anda tambahkan ke pilihan, daftar relasi dan dimensi, **Tambah dengan koordinat**, dan {{ui:Keluar dari sketsa}}, {{ui:Paskan}} dan {{ui:Ekspor sebagai DXF}}.
- Di lembar gambar: pengaturan potongan dan detail, atau simbol GD&T yang dipilih.
- Dalam rakitan: rakitan, part yang dipilih, atau sambungan yang dipilih.

Setiap kotak angka berlaku saat Anda menekan {{key:Enter}} atau {{key:Tab}}, atau mengklik di luarnya. Part dibangun ulang seketika; tidak ada tombol OK. Gunakan {{key:Mod+Z}} untuk kembali.

## Bilah status (bawah)

- Di kiri, koordinat penunjuk di sketsa (hanya saat sketsa terbuka).
- Di tengah, pesan: apa yang dilakukan selanjutnya, dan mengapa sesuatu ditolak. Bacalah saat tidak ada yang tampak terjadi.
- Di dekat kanan, chip kernel: selalu "Kernel mesh" di versi ini. Arahkan penunjuk untuk melihat artinya. Lihat [Kernel mesh](topic:solid-kernels).
- Di kanan, chip: "Membuat ulang…" selagi part dibangun ulang, lalu "Dibuat ulang dalam … ms" jika semua baik, atau "1 fitur gagal". Dalam rakitan berbunyi "Ditempatkan dalam … ms" atau menghitung masalah sambungan.

Lihat juga [Mulai manual di Illustrate](topic:illustrate): ruang kerja yang membuat manual rakitan dari part dan rakitan Anda.

## Di layar sempit

Hingga lebar 760 piksel, seperti di ponsel, tampilan menguasai layar: bilah alat adalah satu baris yang bergulir ke samping, dan panel terbuka sebagai lembar dari bilah di bagian bawah. {{ui:Alat}} menyembunyikan bilah alat dan {{ui:Pindahkan}} menaruhnya di bawah. Lihat [Trackpad, sentuhan, dan layar kecil](topic:trackpad-and-touch).
