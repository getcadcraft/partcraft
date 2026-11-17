---
title: Fitur dan opsinya
summary: Setiap fitur di bilah alat dengan pengaturan, nilai bawaan, dan batasnya, dari ekstrusi hingga fillet, shell, dan solid STEP yang diimpor, tindakan yang dimiliki semua fitur, serta pengaturan part.
keywords: fitur, belum dibuat, ekstrusi, potong, revolusi, potongan revolusi, lubang, counterbore, pola linier, pola sirkular, cermin, fillet, chamfer, shell, impor, opsi, bawaan, pengaturan, resolusi, kurva, facet, nonaktifkan, rollback
from: ab3a598e
---

Fitur tercantum di riwayat sesuai urutan pembuatannya dan dibangun ulang dari atas ke bawah. Setiap fitur dinamai sesuai jenisnya dengan sebuah angka: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft membangun setiap fitur dengan kernel mesh. Fillet dan Chamfer bekerja pada tepi lurus di antara dua muka datar, dan Shell membuka muka datar. Solid yang diimpor memerlukan kernel eksak, yang tidak dimiliki versi ini: solid tersebut belum dibuat, dan bagian di bawah menjelaskannya sebagai part yang dibuat pada build sebelumnya dan tetap mempertahankannya. Lihat [Kernel mesh](topic:solid-kernels) dan [Yang belum dibuat](topic:not-built-yet).

## Sketsa

| Pengaturan | Catatan |
|---|---|
| Bidang | Bidang Front, Top, atau Right, atau muka datar. Ditampilkan, tidak diubah: untuk memindahkan sketsa, buat yang baru |
| Status | Terdefinisi penuh, Belum terdefinisi penuh (dengan derajat kebebasan), Terdefinisi berlebih, atau Kosong |
| Geometri, Relasi | Berapa banyak kurva, titik, dan relasi |
| Dimensi penggerak | Setiap dimensi sketsa, dapat diedit |

Tombol: {{ui:Edit sketsa}}, {{ui:Ekspor sebagai DXF}}.

## Ekstrusi dan Potong

{{ui:Ekstrusi}} dan {{ui:Potong}} membuat fitur yang sama, dimulai dengan pengaturan yang berbeda.

| Pengaturan | Pilihan | Ekstrusi dimulai pada | Potong dimulai pada |
|---|---|---|---|
| Operasi | Boss (tambah material), Potong (buang material), Intersect (simpan irisan), Body baru (belum dibuat pada versi ini) | Boss | Potong |
| Akhir | Buta (kedalaman), Tengah bidang (kedua arah), Tembus semua | Buta | Tembus semua |
| Kedalaman (mm) | Di atas 0, hingga 1,000,000 | 10 | 10 |
| Balik arah | Mati / nyala | Mati | Mati |

- Profil: setiap loop tertutup dari garis solid, lingkaran, dan busur dalam sketsa. Loop di dalam loop adalah lubang.
- Tembus semua hanya bekerja untuk potongan. Ia menjangkau tembus seluruh part pada sisi yang dipilih.
- Potongan masuk ke dalam material, menjauhi sisi luar bidang sketsa; Balik arah membaliknya.

## Revolusi dan potongan revolusi

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Operasi | Boss, Potong | Boss ({{ui:Revolusi}}), Potong ({{ui:Lainnya}} › {{ui:Potongan revolusi}}) |
| Sudut (°) | Di atas 0, hingga 360 | 360 |
| Sumbu | Garis tengah pertama, garis atau garis tengah mana pun dari sketsa, atau fitur sumbu yang berada di bidang sketsa | Garis tengah pertama |

- Profil harus tetap berada di satu sisi sumbu. Boleh menyentuhnya.
- Sumbu revolusi dapat dipakai oleh Pola sirkular dan oleh sambungan rakitan.

## Lubang

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Tipe | Sederhana, Counterbore | Sederhana |
| Diameter (mm) | Di atas 0 | 6 |
| Tembus semua | Nyala / mati | Nyala |
| Kedalaman (mm) | Saat Tembus semua mati | 10 |
| Counterbore ⌀ | Lebih lebar dari lubang | 11 |
| Kedalaman counterbore | Lebih dangkal dari lubang buta | 6 |
| Balik arah | Mati / nyala | Mati |

- Satu lubang pada setiap titik lepas sketsa (titik yang dibuat dengan alat Titik). Panel menampilkan jumlahnya.
- Lubang dibor tegak lurus terhadap bidang sketsa, masuk ke dalam material.
- Sumbu setiap lubang dapat dipakai oleh sambungan rakitan ("Hole1, lubang 2").

## Pola linier

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Fitur yang disalin | Setiap fitur solid di atasnya | Fitur yang dipilih, jika tidak, fitur solid terakhir |
| Arah | Sumbu X, sumbu Y, sumbu Z; garis dari sketsa sebelumnya; sumbu dari revolusi; tepi yang dipilih | Sumbu X (atau tepi yang dipilih saat Anda menambahkannya) |
| Jarak (mm) | Angka apa pun | 20 |
| Jumlah | 1 hingga 1000, termasuk yang asli | 3 |
| Balik arah | Mati / nyala | Mati |

## Pola sirkular

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Fitur yang disalin | Seperti pada Linier | Seperti pada Linier |
| Sumbu | Seperti Arah di atas | Sumbu revolusi terakhir, jika tidak, sumbu Y (atau tepi yang dipilih) |
| Sudut (°) | Di atas 0, hingga 360. 360 menyebar salinan secara merata ke seluruh sisi; kurang dari itu menyebarkannya dalam sudut tersebut | 360 |
| Jumlah | 1 hingga 1000, termasuk yang asli | 6 |
| Balik arah | Mati / nyala | Mati |

## Cermin

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Cermin | Seluruh body (seperti yang sudah dibangun), atau fitur yang dipilih | Fitur yang dipilih, jika tidak, seluruh body |
| Bidang cermin | Bidang Front, Top, atau Right; muka datar | Bidang Right, atau muka datar yang dipilih saat Anda menambahkannya |

## Fillet dan Chamfer

Pada versi ini kernel mesh membangunnya pada tepi lurus di antara dua muka datar (sudut luar atau dalam), dengan satu radius. Tepi bulat menampilkan "Fillet: pada versi ini hanya tepi lurus di antara dua muka datar (kernel mesh yang membangunnya). Bulatkan atau miringkan tepi melengkung di sketsa."; jika tepi yang dibulatkan bertemu di sudut, keduanya disambung miring, dan fitur memberi peringatan "Fillet oleh kernel mesh: jika tepi yang dibulatkan bertemu, keduanya disambung miring, tidak dicampur." Semua jenis chamfer (jarak sama, dua jarak, jarak dan sudut, dengan **Balik sisi**) berfungsi. Lihat [Bulatkan, miringkan, dan berongga](topic:fillet-chamfer-shell).

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Radius (mm) (Fillet) | Di atas 0 | 2 |
| Jarak (mm) (Chamfer) | Di atas 0, sama pada kedua muka | 1 |
| Tepi | Tepi yang dipilih, masing-masing didaftar dengan dua muka yang menyambungnya ("Extrude1 muka ujung × Extrude1 sisi"), dengan **Buang** | Tepi yang dipilih saat Anda menambahkannya |

- Pilih tepi sebelum memilih tombol ({{key:Shift}}+klik untuk beberapa), atau pilih tombolnya tanpa ada yang dipilih lalu klik tepi setelahnya.
- {{ui:Pilih tepi}} (atau klik dua kali fitur) mengubah tepinya.
- Tepi diingat berdasarkan dua muka yang menyambungnya, sehingga tetap bertahan saat ukurannya diubah di bagian atas riwayat.

## Shell

Kernel mesh yang membangunnya. Hanya muka datar yang dapat dibuka ("Shell: pada versi ini hanya membuka muka datar (kernel mesh yang membangunnya)."); dinding dengan ketebalan berbeda belum dibuat. Lihat [Bulatkan, miringkan, dan berongga](topic:fillet-chamfer-shell).

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Dinding (mm) | Di atas 0 | 2 |
| Dinding tumbuh ke luar (muka tetap di dalam) | Mati: dinding masuk ke dalam. Nyala: dinding keluar | Mati |
| Muka terbuka | Muka yang dibuang, minimal satu, dengan **Buang** | Muka yang dipilih saat Anda menambahkannya |

{{ui:Pilih muka}} mengubah muka yang terbuka.

## Solid yang diimpor

Dibuat dengan membuka file STEP, STL, OBJ, atau 3MF: body solid dari segitiga tanpa riwayat sendiri ([Buka file STEP](topic:import-step), [Buka STL, OBJ, atau 3MF](topic:open-meshes)). Ia menampilkan file asalnya dan apa yang diperbaiki impor; **Satuan dalam file**, **Atas dalam file**, dan **Gunakan untuk** tetap dapat diedit. Solid STEP yang diimpor oleh build lama yang memiliki kernel eksak tetap berada di riwayat dan ditandai belum dibuat; buka kembali file STEP untuk memasukkannya sebagai segitiga.

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| Atas dalam file | Z ke atas (CAD umum), Y ke atas | Z ke atas |

Pola dan cermin dapat menyalin solid yang diimpor, tetapi tidak dapat menyalin fillet, chamfer, atau shell.

## Yang dimiliki setiap fitur

Di bagian bawah panel setiap fitur:

| Tombol | Fungsi |
|---|---|
| {{ui:Nonaktifkan}} / {{ui:Aktifkan}} | Mematikan atau menyalakannya. Fitur yang memerlukannya tidak dibangun saat dimatikan |
| {{ui:Kembalikan ke sini}} | Bangun hanya fitur di atas ini. Fitur baru masuk di bilah rollback |
| {{ui:Pindahkan ke atas}} / {{ui:Pindahkan ke bawah}} | Mengurutkan ulang, jika tidak ada yang dipakainya berakhir di bawahnya. Abu-abu dengan alasannya jika tidak |
| {{ui:Hapus}} | Hapus, dan (setelah bertanya) setiap fitur yang memakainya |
| Nama | Ganti nama (hingga 60 karakter) |

Fitur dengan sketsa juga mencantumkan **Dimensi sketsa**, yang dapat diedit langsung.

## Status di riwayat

| Status | Tampilan | Arti |
|---|---|---|
| Dibangun | Normal | Semua baik |
| Peringatan | ⚠ | Dibangun, dengan sesuatu untuk diperiksa: "Terdefinisi berlebih: 1 relasi tidak diperlukan." atau "Tidak ada yang tersisa dari part setelah ini." |
| Galat | ⚠ galat, merah | Tidak dapat dibangun; pesan menjelaskan alasannya |
| Belum dibuat | ⚠ belum dibuat | Memerlukan fitur yang gagal, dinonaktifkan, atau dikembalikan, atau memerlukan kernel eksak yang tidak dimiliki versi ini ("Sweep: belum dibuat. …") |
| Dinonaktifkan | mati | Dimatikan |
| Dikembalikan | abu-abu, di bawah bilah rollback | Tidak dibangun sampai Anda maju kembali |

## Pengaturan part

Klik ruang kosong agar tidak ada yang dipilih. Panel kanan menampilkan **Part**:

- **Nama**: nama part, dipakai untuk nama file dan kepala gambar (hingga 120 karakter).
- **Kurva**: lihat di bawah.

### Resolusi kurva

Kernel mesh membangun solid dari facet datar, sehingga tampilan, STL, 3MF, STEP berfaset, volume, dan tampilan gambar semuanya mengikuti **Kurva**: berapa banyak facet per putaran penuh.

| Pengaturan | Facet per putaran | Volume bentuk bulat |
|---|---|---|
| Kasar (32 per putaran) | 32 | Sekitar 0.64 % di bawah nilai sebenarnya |
| Normal (64 per putaran) | 64 | Sekitar 0.16 % di bawah (bawaan) |
| Halus (128 per putaran) | 128 | Sekitar 0.04 % di bawah |
| Sangat halus (256 per putaran) | 256 | Sekitar 0.01 % di bawah |

Kurva yang lebih halus menghasilkan ekspor dan tampilan yang lebih mulus, tetapi pembangunan ulang lebih lambat. Pengaturan ini disimpan di dalam file part.

## Yang belum dibuat

Fillet dengan radius variabel, fillet dan chamfer pada tepi bulat, shell yang membuka muka melengkung, draft pada muka melengkung, sweep, loft, rib, solid STEP dengan muka melengkung eksak, body baru, taper, "sampai" muka atau verteks, dan referensi pada muka serta tepi solid memerlukan kernel eksak, yang tidak dimiliki versi ini. Juga belum dibuat: lubang berulir dan lubang countersink. Lihat [Yang belum dibuat](topic:not-built-yet).
