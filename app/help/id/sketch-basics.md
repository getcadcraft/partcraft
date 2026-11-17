---
title: Buat sketsa pertama Anda
summary: Buka sketsa pada bidang atau muka datar, gambar garis, persegi panjang, lingkaran, busur, titik dan garis tengah, bulatkan sudut, pilih, seret dan hapus.
keywords: sketsa, gambar, garis, persegi panjang, lingkaran, busur, titik, garis tengah, konstruksi, fillet, fillet sketsa, bulatkan sudut, snap, pilih, jendela, seret, profil
from: 28be7436
---

Setiap solid dimulai sebagai sketsa: gambar datar pada sebuah bidang. Panduan ini membahas alat-alat menggambar. Mengikat sketsa dengan relasi dan dimensi dijelaskan di [Definisikan sketsa sepenuhnya](topic:relations-dimensions).

## Memulai sketsa

Anda dapat membuat sketsa pada bidang dasar atau pada muka datar mana pun dari part.

1. Pilih tempat untuk membuat sketsa:
   - bidang dasar: klik **Bidang depan**, **Bidang atas** atau **Bidang kanan** di riwayat, atau klik bidangnya di tampilan;
   - muka datar: klik muka di tampilan. Seluruh muka akan disorot.
2. Pilih {{ui:Sketsa}} di bilah alat atau tekan {{key:S}}. (Jika muka sudah dipilih, Anda juga dapat memilih {{ui:Buat sketsa pada muka ini}} di panel kanan; jika bidang, {{ui:Buat sketsa di sini}}.)

Tampilan akan berubah menjadi tegak lurus terhadap bidang, alat sketsa muncul di bilah alat, dan alat Garis siap digunakan. Jika Anda menekan {{ui:Sketsa}} tanpa ada yang dipilih, bidang dasar akan ditampilkan dan bilah status berkata "Klik bidang atau muka datar untuk membuat sketsa. Esc menghentikan."

:::note
Muka melengkung tidak dapat menampung sketsa: "Muka itu melengkung. Pilih muka datar atau bidang untuk membuat sketsa."
:::

**Sketsa pada muka mengikuti muka itu.** Jika muka dibuat oleh tepi sketsa atau ujung ekstrusi, sketsa baru akan berpindah ketika fitur berubah (lubang yang lebih dalam membawa sketsa di lantainya ikut serta). Jika panel menyatakan muka "Tetap di tempat dipilih", sketsa tetap berada di posisi muka saat ini.

## Alat-alat menggambar

Setiap alat memiliki tombol di bilah alat dan tombol pintasan. Pilih tombol yang sama lagi, tekan {{key:S}}, atau tekan {{key:Esc}} untuk kembali ke Pilih.

| Alat | Tombol | Cara menggambar |
|---|---|---|
| {{ui:Garis}} | {{key:L}} | Klik titik awal, lalu klik setiap titik berikutnya. Garis tersambung ujung ke ujung. Akhiri rangkaian dengan {{key:Esc}}, {{key:Enter}}, klik kanan atau klik dua kali. Mengklik titik yang sudah ada juga mengakhirinya |
| {{ui:Persegi panjang}} | {{key:R}} | Klik satu sudut, lalu sudut yang berseberangan. Anda mendapat empat garis yang tersambung di sudut, dua horizontal dan dua vertikal |
| {{ui:Lingkaran}} | {{key:C}} | Klik pusat, lalu satu titik pada lingkaran |
| {{ui:Busur}} | {{key:A}} | Klik pusat, lalu titik awal, lalu titik akhir. Busur berjalan searah dengan gerakan penunjuk mengelilingi pusat |
| {{ui:Titik}} | {{key:P}} | Klik. Titik tersendiri menandai pusat lubang untuk {{ui:Lubang}} |
| {{ui:Garis tengah}} | {{key:N}} | Seperti garis, satu segmen setiap kali. Digambar putus-putus; ini geometri konstruksi, dipakai sebagai sumbu revolusi atau referensi |
| {{ui:Fillet}} | {{key:F}} | Klik sudut tempat dua garis bertemu, ketik radius, lalu tekan {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klik titik-titik yang dilalui kurva; {{key:Enter}} mengakhiri, klik pada titik pertama akan menutupnya. Lihat [Spline, pangkas, offset dan alat sketsa lainnya](topic:sketch-tools) |
| {{ui:Pangkas}} | {{key:T}} | Klik bagian kurva yang akan dihapus, sampai ke perpotongan terdekat |
| {{ui:Dimensi}} | {{key:D}} | Lihat [Definisikan sketsa sepenuhnya](topic:relations-dimensions) |

Saat menggambar, sebuah kotak kecil di dekat penunjuk menampilkan panjang, ukuran, diameter atau radius.

### Ketik ukuran saat menggambar

Setelah klik pertama pada garis, persegi panjang, lingkaran atau busur, Anda dapat mengetik ukuran alih-alih mengkliknya. Mengetik angka membuka kotak di samping penunjuk dengan angka tersebut:

| Alat | Kotak ({{key:Tab}} pindah ke berikutnya) | Yang terjadi saat {{key:Enter}} |
|---|---|---|
| {{ui:Garis}}, {{ui:Garis tengah}} | Panjang, lalu Sudut (°) dari sumbu X sketsa | Garis digambar sepanjang itu, menuju penunjuk atau pada sudut yang diketik; rangkaian berlanjut dari ujungnya |
| {{ui:Persegi panjang}} | Lebar, lalu Tinggi | Persegi panjang digambar dari sudut pertama menuju penunjuk; ukuran yang tidak Anda ketik diambil dari penunjuk |
| {{ui:Lingkaran}} | Diameter | Lingkaran digambar dengan diameter itu |
| {{ui:Busur}} | Radius setelah pusat, lalu Sudut busur (°) setelah titik awal | Titik awal berjarak sebesar itu dari pusat; lalu busur berputar sejauh itu, searah dengan gerakan penunjuk |

Setiap ukuran yang Anda ketik menjadi **dimensi penggerak** dalam langkah yang sama, sehingga sketsa keluar sudah berukuran: {{key:Mod+Z}} menghapus bentuk beserta dimensinya sekaligus. Mengklik alih-alih menekan {{key:Enter}} menyimpan apa yang sudah diketik dan mengambil sisanya dari klik. {{key:Esc}} menutup kotak dan kembali ke penunjuk.

Matikan ini di {{ui:Pengaturan}} › {{ui:PartCraft}} › **Dimensi saat menggambar** jika Anda hanya ingin menggambar dengan klik. Lihat [Pengaturan PartCraft](topic:settings).

{{ui:Lainnya}}, di akhir alat sketsa, berisi spline titik kontrol, {{ui:Perpanjang}}, {{ui:Offset}}, {{ui:Cerminkan}}, {{ui:Poligon}}, {{ui:Alur}}, pola sketsa dan {{ui:Proyeksikan tepi}}: lihat [Spline, pangkas, offset dan alat sketsa lainnya](topic:sketch-tools).

### Snap

Snap menambahkan relasi untuk Anda, sehingga sketsa tetap tersambung saat digerakkan:

- Pada **titik ujung atau titik asal**, sebuah kotak kecil muncul. Titik baru dibuat berimpit dengannya.
- Pada **garis, lingkaran atau busur**, sebuah tanda silang muncul. Titik baru ditempatkan pada kurva itu.
- Garis dalam jarak 3 derajat dari horizontal atau vertikal akan di-snap ke sana dan mendapat relasi horizontal atau vertikal. Label menampilkan "H" atau "V".

Untuk menghindari snap, perbesar tampilan agar Anda mengklik lebih jauh dari titik atau kurva.

## Membulatkan sudut

1. Tekan {{key:F}} atau pilih {{ui:Fillet}}.
2. Klik titik sudut tempat dua garis bertemu.
3. Sebuah kotak terbuka dengan radius yang disarankan. Ketik radius, lalu tekan {{key:Enter}}.

Kedua garis dipangkas dan disambung dengan busur singgung yang memiliki dimensi radius. Pesan yang mungkin muncul: "Fillet memerlukan sudut tempat tepat dua garis bertemu." dan "Radius itu terlalu besar untuk garis-garis ini."

:::tip
Fillet sketsa membulatkan sudut profil, sehingga ekstrusi mendapat tepi vertikal yang membulat. Untuk membulatkan tepi solid itu sendiri (misalnya tepi atas pelat), gunakan fitur {{ui:Fillet}} pada part: lihat [Fillet, chamfer dan shell](topic:fillet-chamfer-shell). Di sketsa, Fillet pada bilah alat adalah alat sketsa; pada part, itu fitur.
:::

## Geometri konstruksi

Garis, lingkaran dan busur konstruksi digambar putus-putus dan abu-abu. Garis itu memandu sketsa tetapi bukan bagian dari profil yang diekstrusi atau direvolusi.

1. Pilih garis, lingkaran atau busur.
2. Tekan {{key:Q}} atau pilih {{ui:Konstruksi}}. Tekan lagi untuk mengembalikannya.

## Pilih, seret dan hapus

Tekan {{key:S}} (atau {{key:Esc}} sampai tidak ada alat aktif) untuk Pilih.

- Klik titik, garis, lingkaran, busur, simbol relasi atau dimensi untuk memilihnya. {{key:Shift}}+klik menambah atau mengurangi pilihan. Di Windows dan Linux, {{key:Ctrl}}+klik melakukan hal yang sama; di Mac, ⌘+klik.
- Seret pada ruang kosong untuk membuat jendela: semua yang berada sepenuhnya di dalamnya akan dipilih.
- Seret titik atau garis untuk memindahkannya. Solver menjaga setiap relasi dan dimensi saat bergerak, sehingga hanya geometri bebas yang bergerak. Seret tepi lingkaran untuk mengubah radiusnya.
- Seret angka dimensi untuk memindahkan label.
- Tekan {{key:Delete}} atau {{key:Backspace}}, atau pilih {{ui:Delete}} di panel kanan, untuk menghapus pilihan. Menghapus geometri juga menghapus relasi yang melekat padanya.

## Zoom dan geser di sketsa

- Putar roda untuk memperbesar di posisi penunjuk.
- Seret dengan tombol tengah atau kanan untuk menggeser.
- {{ui:Fit}} di bilah alat atau panel kanan memaskan sketsa ke dalam tampilan. Di sketsa, tombol {{key:F}} adalah alat Fillet, bukan Fit.

## Menutup sketsa

Pilih {{ui:Exit}} di bilah alat atau {{ui:Exit sketch}} di panel kanan, atau tekan {{key:Esc}} sampai sketsa tertutup. Setiap {{key:Esc}} pertama-tama membatalkan yang sedang berjalan, lalu kembali ke Pilih, lalu menghapus pilihan, dan yang berikutnya menutup sketsa.

Sketsa tetap terpilih, sehingga {{ui:Extrude}} atau {{ui:Revolve}} berikutnya akan menggunakannya.

## Profil yang baik

{{ui:Extrude}} dan {{ui:Revolve}} menggunakan **setiap loop tertutup** dari garis, lingkaran, busur dan spline (yang bukan konstruksi) pada sketsa. Loop di dalam loop menjadi lubang.

- Setiap ujung harus bertemu tepat satu ujung lain. "Profil terbuka: ujung di (12.5, 40) tidak tersambung ke apa pun." menunjukkan lokasinya.
- Tidak boleh ada tiga ujung yang bertemu di satu titik: "Profil bercabang di (0, 20): lebih dari dua ujung bertemu di sana."
- Titik dan geometri konstruksi diabaikan oleh profil.

Berikutnya: [Definisikan sketsa sepenuhnya dengan relasi dan dimensi](topic:relations-dimensions).

## Sketsa dari foto

**Fitur › Lainnya › Sketsa dari foto…** (atau grup Sketsa pada pita pohon fitur) menelusuri gambar part datar di atas latar polos — garis tepinya dan lubang-lubangnya — atau gambar pena, menjadi sketsa berisi garis, busur dan lingkaran. Masukkan satu panjang (lebar, tinggi atau sisi terpanjang) agar sketsa memiliki ukuran yang benar, periksa apa yang ditemukan di pratinjau, lalu pilih **Buat sketsa**; sketsa itu juga dapat diekstrusi, dalam langkah undo yang sama. Penelusuran dilakukan di komputer ini. Radius sudut kembali dalam sekitar 5 %, detail sebesar satu atau dua piksel hilang, dan foto yang diambil miring atau dengan bayangan di atas part tidak diluruskan: fotolah part tegak lurus dengan cahaya yang merata.
