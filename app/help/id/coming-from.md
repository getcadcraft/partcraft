---
title: Datang dari pemodel parametrik lain
summary: Bagaimana kebiasaan pemodel part parametrik desktop dipetakan ke PartCraft, dan perbedaan yang membuat pengguna berpengalaman tersandung pada jam pertama.
keywords: berpindah, migrasi, familiar, feature manager, design tree, smart dimension, ekstrusi boss, cut extrude, hole wizard, mate, deteksi interferensi, rollback bar, property manager, mouse, perbedaan
from: fbacaee1
---

Jika Anda merancang part di SolidWorks, sebagian besar ide PartCraft akan terasa familiar: sketsa pada bidang Front, Top, dan Right, relasi dan smart dimension, riwayat fitur dengan rollback bar, dan rakitan yang ditempatkan dengan mate. Cara Anda mencapainya berbeda di beberapa tempat, dan build pertama ini melakukan lebih sedikit. Halaman ini memetakan kebiasaan Anda dan mencantumkan kejutannya.

## Kebiasaan, dipetakan

| Yang biasa Anda pakai | Di PartCraft |
|---|---|
| Pohon desain di sebelah kiri | Riwayat di sebelah kiri: bidang, lalu fitur, dengan sketsa menjorok di bawah fitur yang memakainya |
| Bidang Front, Top, dan Right | Ketiganya sama, melalui titik asal. Front adalah bidang XY, Top adalah XZ, Right adalah YZ; Y mengarah ke atas |
| Sketsa pada bidang atau muka, lalu sudut konfirmasi untuk keluar | {{ui:Sketsa}} ({{key:S}}) pada bidang atau muka datar yang dipilih; {{ui:Keluar}} atau {{key:Esc}} sampai tertutup |
| Smart Dimension | {{ui:Dimensi}} ({{key:D}}). Klik satu atau dua item, lalu tempat angkanya diletakkan. Tempat Anda meletakkannya menentukan horizontal, vertikal, atau sejajar |
| Tambah relasi di panel properti | Pilih item, lalu tombol relasi di panel kanan (Berimpit, Horizontal, Sejajar, Singgung, Sama, dan seterusnya) |
| Relasi otomatis saat membuat sketsa | Snap menambahkan relasi berimpit, titik-pada-kurva, horizontal, dan vertikal |
| Warna sketsa biru / hitam / merah | Ide yang sama: biru saat belum terdefinisi, hitam saat terdefinisi penuh, merah saat terlalu terdefinisi. Chip menampilkan derajat kebebasan yang tersisa |
| Garis tengah untuk revolusi | {{ui:Garis tengah}} ({{key:N}}); {{ui:Revolusi}} memakai garis tengah pertama kecuali Anda memilih sumbu lain |
| Fillet sketsa | {{ui:Fillet}} ({{key:F}}) di sketsa: klik sudut, ketik radius |
| Sakelar geometri konstruksi | {{ui:Konstruksi}} ({{key:Q}}) |
| Boss ekstrusi | {{ui:Ekstrusi}}: Buta, Tengah bidang, Sampai muka / berikutnya / verteks, Offset dari muka, arah kedua, tirus, satu kontur (Pilih wilayah) |
| Potongan ekstrusi | {{ui:Potong}}: mulai sebagai Tembus semua; ganti ke Buta untuk kantong |
| Boss / potongan revolusi | {{ui:Revolusi}} / {{ui:Lainnya}} › {{ui:Potongan revolusi}} |
| Bidang / sumbu / titik referensi | {{ui:Lainnya}} › {{ui:Bidang}}, {{ui:Sumbu}}, {{ui:Titik}} (lihat [Bidang, sumbu, dan titik referensi](topic:reference-geometry)) |
| Boss atau potongan sapuan / loft, draft | {{ui:Lainnya}} › {{ui:Draft}} pada muka datar (lihat [Sapuan, loft, dan draft](topic:sweep-loft-draft)). {{ui:Sweep}} dan {{ui:Loft}} belum dibuat di versi ini (keduanya memerlukan kernel eksak) |
| Hole Wizard | {{ui:Lubang}} di setiap titik sketsa yang lepas: sederhana, counterbore, countersink (90° / 82°), atau ulir ISO metrik M2–M24 yang diketap, tembus atau buta |
| Pola linear / melingkar, cermin | {{ui:Linear}}, {{ui:Melingkar}}, {{ui:Cerminkan}} (fitur atau seluruh bodi) |
| Fillet dan chamfer pada tepi | {{ui:Fillet}} / {{ui:Chamfer}}: klik tepi, {{key:Shift}}+klik lagi, lalu tombolnya. Satu radius; chamfer sama, dua jarak, atau jarak-sudut. Pada versi ini hanya tepi lurus di antara dua muka datar, dan pembulatan yang bertemu di sudut dipotong miring. Bulatkan atau miringkan tepi melengkung di sketsa ({{ui:Fillet}} di sketsa, {{key:F}}) |
| Shell | {{ui:Shell}}: klik muka datar untuk dibuka, lalu tombolnya. Satu ketebalan dinding |
| Buka file STEP | {{ui:Buka}}: dibaca sebagai segitiga, sebuah bodi solid untuk dibangun ([Buka file STEP](topic:import-step)) |
| Sunting fitur, lalu OK | Klik fitur; ubah angka di kanan; ia dibangun ulang saat Anda mengetik. Tidak ada OK, tidak ada Batal: gunakan {{key:Mod+Z}} |
| Sunting sketsa | Klik dua kali sketsa di riwayat |
| Bangun ulang | Otomatis setelah setiap perubahan. Tidak ada tombol bangun ulang |
| Nonaktifkan / aktifkan | {{ui:Nonaktifkan}} / {{ui:Aktifkan}} di panel kanan |
| Seret bilah rollback | {{ui:Kembalikan ke sini}} pada fitur; klik "Bilah rollback · maju" untuk kembali |
| Seret fitur di pohon untuk mengurutkan ulang | {{ui:Pindahkan ke atas}} / {{ui:Pindahkan ke bawah}} atau {{key:Alt+Up}} / {{key:Alt+Down}}; ditolak dengan alasannya ketika itu akan merusak dependensi |
| Sunting dimensi dengan mengklik dua kali pada model | Pilih fitur: dimensi sketsanya tercantum di panel kanan |
| Mate: berimpit, konsentris, jarak, sudut | {{ui:Sambungan}} ({{key:J}}): pilih muka datar pada setiap part; sambungan menempatkannya muka ke muka. **Pusatkan pada** sebuah sumbu berperilaku seperti konsentris; **Offset** seperti jarak; **Sudut** seperti sudut |
| Komponen tetap | Part pertama ditetapkan sebagai tetap; {{ui:Jadikan part tetap}} mengubahnya |
| Sisipkan komponen | {{ui:Tambah salinan}} atau {{ui:Duplikat}} (salinan lain) atau {{ui:Sisipkan}} (dari file part) |
| Sunting part di rakitan | {{ui:Edit part}}, lalu {{ui:Kembali}} |
| Deteksi interferensi | {{ui:Benturan}} |
| Menggerakkan komponen untuk melihat gerakannya | Seret penggeser sudut atau offset dari sambungan engsel atau geser; {{ui:Periksa benturan pada gerakan}} menyapunya. Part tanpa sambungan: **Pindahkan dengan tangan** (panah untuk diseret, atau nilai yang diketik) |
| Ukur / Inspeksi | {{ui:Tampilan}}, lalu {{ui:Ukur}} ({{key:M}}): jarak, sudut, radius, luas; {{ui:Properti massa}} |
| Tampilan terurai, daftar material | Di rakitan dengan tidak ada yang dipilih: **Tampilan terurai** dan **Daftar material** di panel kanan |
| Properti massa | Kotak **Part**: volume, luas permukaan, ukuran, dari solid berfaset (sedikit lebih rendah pada part bulat). Tidak ada massa: belum ada material |
| Simpan, Simpan sebagai STEP | {{ui:Simpan}} mengunduh `.partcraft.json`; {{ui:Ekspor}} memiliki STL, 3MF, STEP eksak (AP242 atau AP214), STEP berfaset, DXF, dan gambar PDF |
| Buat gambar dari part | {{ui:Gambar}}: lembar A3 otomatis dengan tiga tampilan, isometrik, satu potongan, satu detail, datum, bingkai kontrol fitur, dan simbol finishing. Hanya ukuran keseluruhan yang diberi dimensi |
| Seret tombol tengah untuk memutar | **Seret kiri** memutar di sini. Seret tengah atau kanan untuk menggeser. Roda memperbesar di penunjuk |
| Orientasi tampilan, Tegak lurus ke | Menu {{ui:Tampilan}}; {{ui:Tegak lurus ke}} untuk muka, bidang, atau sketsa yang dipilih |
| Zoom agar pas (F) | {{key:F}}, atau {{ui:Paskan}} (di sketsa, {{key:F}} adalah alat Fillet) |
| Menu klik kanan | Tidak ada. Seret kanan menggeser; di sketsa, klik kanan mengakhiri rantai garis |

:::tip
Jika tangan Anda sudah terbiasa dengan SolidWorks, pilih gaya menu {{ui:Feature tree}} di {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}: pita tab Fitur, Sketsa, Permukaan, Evaluasi, Gambar, Rakitan, dan Tampilan; tombol tengah mengorbit, {{key:Shift}} dan tombol tengah menggeser, dan tombol kiri hanya memilih. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).
:::

## Perbedaan yang membuat orang tersandung

**Seluruh sketsa adalah profil.** Ekstrusi dan Revolusi menggunakan setiap loop tertutup di sketsa. Anda tidak bisa memilih satu wilayah atau satu kontur sketsa untuk sebuah fitur. Gunakan satu sketsa per fitur.

**Sketsa mana yang diambil fitur.** Fitur menggunakan sketsa yang baru saja Anda tutup atau yang dipilih di riwayat. Jika tidak ada yang dipilih, ia mengambil sketsa terbaru yang belum dipakai fitur mana pun. Jika Anda mendapat yang salah, pilih sketsa yang benar dan pilih fitur lagi.

**Perubahan berlaku saat Anda mengetik.** Tidak ada dialog fitur dengan OK dan Batal. Setiap angka langsung membangun ulang, dan {{key:Mod+Z}} adalah jalan kembali. Daftar urungkan mencakup pengeditan sketsa, fitur, dan pengaturan sekaligus.

**Terlalu terdefinisi tidak pernah dibiarkan begitu saja.** Tidak ada dimensi driven (referensi). Dimensi yang sudah ditetapkan oleh relasi lain dilaporkan sebagai terlalu terdefinisi ("sudah tersirat. Hapus."). Dimensi yang bertentangan membiarkan geometri tidak berubah dan berubah merah. Hapus salah satunya, atau urungkan.

**Sapuan dan loft belum dibuat; fillet, chamfer, shell, dan draft memiliki batas.** Versi PartCraft ini membangun setiap part dengan kernel mesh; chip bilah status selalu menampilkan "Kernel mesh". Fillet dan chamfer bekerja pada tepi lurus di antara dua muka datar, dan jika pembulatan bertemu di sudut, dipotong miring, bukan dicampur. Shell membuka, dan draft memiringkan, hanya muka datar. Fitur yang memerlukan kernel eksak tetap bisa diklik, tetapi menyatakan "belum dibuat" saat dipilih. Lihat [Kernel mesh](topic:solid-kernels) dan [Yang belum dibuat](topic:not-built-yet).

**Dua tombol bernama Fillet.** Di sketsa, {{ui:Fillet}} ({{key:F}}) membulatkan sudut sketsa. Di part, {{ui:Fillet}} di grup Fitur membulatkan tepi solid (tepi lurus di antara muka datar pada versi ini). Tidak ada sapuan atau loft pada versi ini: lihat [Yang belum dibuat](topic:not-built-yet).

**Lubang memerlukan titik lepas.** {{ui:Lubang}} mengebor di titik yang dibuat dengan alat Titik. Pusat lingkaran dan ujung garis tidak dihitung.

**Tembus semua hanya untuk potongan.** Boss memerlukan kedalaman. Belum ada kondisi akhir "sampai verteks / permukaan / berikutnya".

**Solidnya berfaset.** Kernel mesh membangun muka bulat dari faset datar, sehingga tampilan, volume, dan ekspor STL serta 3MF semuanya dibuat dari faset tersebut: **Kurva** di panel part membuatnya lebih halus. Ekspor STEP eksak tidak: ia menulis muka bulat pada permukaan sebenarnya.

**Hanya milimeter.** Belum ada pengaturan inci. Kalikan ukuran inci dengan 25.4 saat Anda mengetiknya.

**Y ke atas.** Bidang Front menghadap Anda dan Top melihat ke bawah pada part, seperti yang Anda harapkan, tetapi sumbu atas dunia adalah Y. Ekspor STL, 3MF, dan STEP eksak diputar ke Z atas; STEP berfaset mempertahankan Y ke atas.

**Mate adalah muka, bukan pasangan geometri.** Sambungan selalu dimulai dari dua muka datar yang diletakkan muka ke muka. Untuk pin di lubang, pilih muka datar di sekitar lubang dan bahu pin, lalu atur **Pusatkan pada** ke sumbu lubang dan sumbu revolusi pin. Part yang tidak dijangkau sambungan tetap di tempat ia disisipkan; Anda tidak bisa menyeretnya. Sambungan dalam loop tidak diselesaikan.

**Menyimpan adalah unduhan.** Tidak ada file yang terus Anda timpa. Setiap simpan adalah file baru di folder unduhan Anda. Beri nama part terlebih dahulu, dan simpan file Anda di folder proyek.

**Tanpa menu klik kanan, tanpa tab command manager.** Semuanya ada di bilah alat dan panel kanan, dan bilah alat berubah sesuai apa yang sedang Anda lakukan: alat sketsa hanya muncul di sketsa, alat rakitan hanya di rakitan.

**Tombol sketsa adalah huruf tunggal di dalam sketsa.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}}, dan {{key:S}} memilih alat tanpa modifier. Lihat [Tombol dan mouse](topic:keyboard).
