---
title: Trackpad, sentuh, dan layar kecil
summary: Cara memutar, menggeser, dan memperbesar dengan trackpad Mac atau laptop, apa yang berfungsi pada layar sentuh dan apa yang masih memerlukan keyboard, serta cara layar menyusun ulang pada ponsel atau jendela sempit.
keywords: trackpad, touchpad, magic mouse, mac, sentuh, tablet, ipad, ponsel, cubit, dua jari, klik kanan, klik sekunder, gestur, layar kecil, seluler
from: 0e764fd8
---

PartCraft dibuat untuk mouse dengan roda dan tombol tengah, tetapi trackpad bekerja baik setelah Anda mengenal gesturnya, dan layar sentuh cocok untuk melihat part serta membuat sketsa sederhana.

## Trackpad

:::mac
| Untuk | Lakukan ini |
|---|---|
| Memutar part (3D) | Klik dan seret dengan satu jari (atau seret dengan tiga jari, jika Anda mengaktifkan seret tiga jari) |
| Geser (3D) | Tahan {{key:Shift}} (atau ⌘) lalu klik-seret, atau klik-seret dengan dua jari yang ditekan (seret klik sekunder) |
| Memutar part dengan usapan | Usap dengan dua jari; dengan {{key:Shift}}, usapan menggeser. Memerlukan **Scrolling** diatur ke "Deteksi otomatis" (bawaan) atau "Trackpad" |
| Perbesar (3D dan sketsa) | Cubit. Zoom menuju penunjuk. Dengan **Scrolling** diatur ke "Roda mouse", gulir dua jari juga memperbesar |
| Klik kanan | Klik dengan dua jari, atau {{key:Ctrl}}+klik |
| Geser dalam sketsa | Usap dengan dua jari ("Deteksi otomatis" atau "Trackpad"), atau klik-seret dengan dua jari yang ditekan. {{key:Shift}}+seret tidak menggeser dalam sketsa (ia menggambar jendela pilihan) |
| Tambah ke pilihan dalam sketsa | {{key:Shift}}+klik atau ⌘+klik |

Aktifkan klik sekunder di **System Settings, Trackpad, Point & Click** jika klik dua jari tidak berfungsi.
:::

:::windows linux
| Untuk | Lakukan ini |
|---|---|
| Memutar part (3D) | Tekan touchpad (atau ketuk dan tahan) lalu seret |
| Geser (3D) | Tahan {{key:Shift}} atau {{key:Ctrl}} lalu seret, atau seret dengan area tombol kanan yang ditekan |
| Memutar part dengan usapan | Usap dengan dua jari; dengan {{key:Shift}}, usapan menggeser. Memerlukan **Scrolling** diatur ke "Deteksi otomatis" (bawaan) atau "Trackpad" |
| Perbesar (3D dan sketsa) | Cubit jika touchpad mendukungnya. Zoom menuju penunjuk. Dengan **Scrolling** diatur ke "Roda mouse", gulir dua jari memperbesar |
| Klik kanan | Ketuk dengan dua jari, atau sudut kanan bawah touchpad |
| Geser dalam sketsa | Usap dengan dua jari ("Deteksi otomatis" atau "Trackpad"), atau seret dengan area tombol kanan yang ditekan. {{key:Shift}}+seret tidak menggeser dalam sketsa |
| Tambah ke pilihan dalam sketsa | {{key:Shift}}+klik atau {{key:Ctrl}}+klik |
:::

**Scrolling** ada di [Pengaturan PartCraft](topic:settings): "Deteksi otomatis" (bawaan) memperlakukan gulir ke samping atau gulir halus sebagai trackpad, "Trackpad" selalu melakukannya, dan "Roda mouse" tidak pernah. Cubit memperbesar di ketiganya.

Tombol panah memutar tampilan 3D, dan {{key:Shift}} dengan panah menggeser, setelah Anda mengklik di dalam tampilan: berguna pada trackpad. {{key:Plus}} dan {{key:Minus}} memperbesar.

## Layar sentuh

PartCraft membaca input sentuh, sehingga tablet, laptop layar sentuh, dan ponsel dapat digunakan, dengan batasan.

:::touch
**Tombol sentuh**

Begitu Anda menyentuh layar, sebuah bilah kecil muncul di kanan bawah tampilan dengan tombol-tombol yang tidak dimiliki jari. Bilah itu hilang saat Anda menggunakan mouse.

- {{ui:Esc}}: tombol Esc. Ia membatalkan yang sudah Anda mulai atau kembali selangkah, persis seperti tombolnya.
- {{ui:Tambah}} (dalam sketsa, dengan Pilih): selama aktif, setiap ketukan menambahkan item ke pilihan atau mengeluarkannya, seperti {{key:Shift}}+klik. Ketuk lagi untuk kembali memilih satu item setiap kali.
- {{ui:Selesai}} (saat Anda menggambar rantai garis, spline, atau poligon): menyelesaikannya, seperti klik kanan.

Menahan jari diam sekitar setengah detik melakukan hal yang sama untuk satu ketukan: dengan alat gambar ia menyelesaikan apa yang digambar, dan dengan Pilih ia menambahkan item di bawah jari ke pilihan atau mengeluarkannya. Titik dan garis lebih mudah dikenai dengan jari: PartCraft mencari sekitar dua kali lebih jauh di sekitar ketukan dibanding di sekitar klik.

**Dalam tampilan 3D**

- Satu jari: memutar part.
- Dua jari: cubit untuk memperbesar, gerakkan bersama untuk menggeser.
- Ketuk: pilih muka, tepi, atau bidang. Tidak ada sorotan kursor sebelum Anda mengetuk.

**Dalam sketsa**

- Ketuk dengan alat gambar untuk menempatkan setiap titik: ketuk awal, lalu ketuk akhir. Penempelan (snap) terjadi di tempat Anda mengangkat jari.
- Dua jari mencubit dan menggeser. Meletakkan jari kedua membatalkan seretan yang dimulai jari pertama.
- Untuk mengakhiri rantai garis, ketuk {{ui:Selesai}}, tahan jari diam, atau ketuk {{ui:Garis}} lagi (atau alat lain) di bilah alat.
- Dengan Pilih, ketuk untuk memilih; seret titik atau garis untuk memindahkannya; seret di ruang kosong untuk jendela. Ketukan kedua menggantikan pilihan kecuali {{ui:Tambah}} aktif (atau Anda menahan jari diam pada item kedua).
- Untuk mengubah dimensi, gunakan **Edit** di sebelahnya pada panel kanan.

**Lembar gambar**

Ketuk untuk menempatkan dan memilih simbol, dan seret simbol untuk memindahkannya. Cubit untuk memperbesar, gerakkan dua jari untuk menggeser, atau seret satu jari di atas kertas kosong. Jari kedua menghentikan simbol yang sedang Anda seret, dan simbol itu kembali.

**Yang masih memerlukan keyboard**

- Mengetik angka: keyboard layar muncul di kotak angka dan kolom dimensi.
- Pintasan keyboard untuk alat: gunakan bilah alat.
:::

## Layar kecil dan ponsel

- Pada lebar 1280 piksel atau lebih, bilah alat muat dalam satu baris.
- Antara sekitar 760 dan 1100 piksel, panel samping menjadi lebih sempit.
- Di bawah sekitar 760 piksel (ponsel, atau jendela sempit), layar tersusun bertumpuk: bilah alat (usap ke samping untuk tombol lain), tampilan 3D, bilah status, lalu panel properti dan riwayat. Gulir halaman untuk mencapai panel.
- Menu ({{ui:Ekspor}}, {{ui:Tampilan}}) terbuka di seluruh lebar layar.

:::note
Di iPhone tidak ada mode layar penuh di browser; {{key:Ctrl+Shift+F}} dan tombol mode layar hanya beralih antara normal dan bilah yang disembunyikan.
:::

Ponsel cocok untuk membuka part, memutarnya, dan memeriksa datanya. Pemodelan sungguhan memerlukan layar yang lebih besar serta mouse atau trackpad.

## Browser

Chrome, Edge, Firefox, dan Safari terbaru menjalankan PartCraft di Windows, macOS, dan Linux, serta di tablet dan ponsel, selama WebGL dan WebAssembly tersedia. Lihat [Browser dan komputer](common:browsers).
