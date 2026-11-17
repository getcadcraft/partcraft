---
title: Relasi dan dimensi sketsa
summary: Setiap relasi dan dimensi yang dimiliki sketsa PartCraft, apa yang harus dipilih untuk masing-masing, simbolnya, dan perilakunya saat diselesaikan.
keywords: relasi, batasan, berimpit, horizontal, vertikal, sejajar, tegak lurus, singgung, sama, sepusat, titik tengah, tetap, jarak, jarak horizontal, jarak vertikal, radius, diameter, sudut, simbol, glif
from: 9831e7be
---

Relasi menetapkan bagaimana geometri berada terhadap geometri lain. Dimensi menetapkan ukuran. Untuk menambah relasi, pilih item dengan alat Pilih ({{key:S}}) dan pilih tombolnya di panel kanan; untuk menambah dimensi, gunakan alat Dimensi ({{key:D}}) atau tombol dimensi di panel kanan. Cara bekerja dengannya: [Definisikan sketsa sepenuhnya](topic:relations-dimensions).

"Kurva" di bawah berarti lingkaran atau busur. Titik asal dihitung sebagai titik.

## Relasi

| Tombol | Simbol | Pilih | Efek |
|---|---|---|---|
| {{ui:• Berimpit}} | • (hanya tampil saat dipilih atau bermasalah) | Dua titik | Titik-titik bertemu |
| {{ui:• Berimpit}} | • | Sebuah titik dan garis | Titik terletak pada garis (atau perpanjangannya) |
| {{ui:• Berimpit}} | • | Sebuah titik dan kurva | Titik terletak pada lingkaran atau busur |
| {{ui:H Horizontal}} | H | Sebuah garis, atau dua titik | Garis mendatar, atau kedua titik berada pada tinggi yang sama |
| {{ui:V Vertikal}} | V | Sebuah garis, atau dua titik | Garis tegak, atau titik-titik berada satu di atas yang lain |
| {{ui:∥ Sejajar}} | ∥ | Dua garis | Garis-garis memiliki arah yang sama |
| {{ui:⊥ Tegak lurus}} | ⊥ | Dua garis | Garis-garis bertemu pada sudut siku-siku |
| {{ui:T Singgung}} | T | Sebuah garis dan kurva | Garis menyentuh kurva tanpa memotongnya |
| {{ui:T Singgung}} | T | Dua kurva | Keduanya bersinggungan, di luar atau di dalam, sesuai gambar |
| {{ui:T Singgung}} | T | Spline dan garis, busur atau spline yang bertemu salah satu ujungnya | Spline meninggalkan ujung itu searah dengan kurva lainnya |
| {{ui:= Sama}} | = | Dua garis | Panjang sama |
| {{ui:= Sama}} | = | Dua kurva | Radius sama |
| {{ui:◎ Sepusat}} | ◎ | Dua kurva | Pusat sama |
| {{ui:◎ Sepusat}} | ◎ | Sebuah titik dan kurva | Titik berada di pusat kurva |
| {{ui:M Titik tengah}} | M | Sebuah titik dan garis | Titik berada di tengah garis |
| {{ui:↔ Simetris}} | ↔ | Dua titik dan sebuah garis | Titik-titiknya adalah bayangan cermin terhadap garis (Cerminkan menambahkan ini) |
| {{ui:⚓ Tetap}} | ⚓ | Sebuah titik, garis, kurva atau spline | Menahannya tepat di posisinya sekarang (spline: titik-titiknya) |

Garis di sini termasuk garis tengah. Menggambar menambahkan beberapa relasi untuk Anda: men-snap ke titik membuatnya berimpit, men-snap ke kurva menempatkan titik di atasnya, garis yang hampir mendatar atau tegak mendapat H atau V, dan persegi panjang datang dengan keempat sudutnya tersambung, dua H dan dua V.

**Tetap** adalah cara cepat untuk menghentikan sesuatu bergerak, tetapi part kemudian tidak dapat mengikuti perubahan dimensi di tempat lain. Lebih baik pakai dimensi terhadap titik asal.

## Dimensi

| Tombol | Pilih | Mengukur | Ditampilkan sebagai |
|---|---|---|---|
| {{ui:Jarak}} | Sebuah garis | Panjangnya | Jarak 40 |
| {{ui:Jarak}} | Dua titik | Jarak lurus di antara keduanya | Jarak 40 |
| {{ui:Jarak}} | Sebuah titik dan garis | Jarak dari titik ke garis, tegak lurus terhadapnya | Jarak 40 |
| {{ui:Jarak}} | Dua garis sejajar | Celah di antara keduanya | Jarak 40 |
| {{ui:Jarak horizontal}} | Dua titik, atau sebuah garis | Jarak kiri-kanan saja | Jarak horizontal 40 |
| {{ui:Jarak vertikal}} | Dua titik, atau sebuah garis | Jarak atas-bawah saja | Jarak vertikal 40 |
| {{ui:Radius}} | Sebuah lingkaran atau busur | Radiusnya | Radius R10 |
| {{ui:Diameter}} | Sebuah lingkaran atau busur | Diameternya | Diameter ⌀20 |
| {{ui:Sudut}} | Dua garis yang tidak sejajar | Sudut di antara keduanya, 0 sampai 180 derajat | Sudut 30° |

Dengan alat Dimensi, PartCraft memilih jenisnya dari apa yang Anda klik dan di mana Anda meletakkan angka:

| Yang Anda klik | Yang Anda dapatkan |
|---|---|
| Satu garis | Panjangnya; untuk garis miring, horizontal jika angka diletakkan di atas atau di bawahnya, vertikal jika di sampingnya |
| Satu lingkaran | Diameter |
| Satu busur | Radius |
| Dua titik | Jarak; horizontal atau vertikal seperti untuk garis miring |
| Sebuah titik dan garis | Jarak dari titik ke garis |
| Dua garis | Sudut, atau jaraknya jika sejajar |
| Sebuah titik dan lingkaran | Tidak ada: "Item-item itu tidak dapat diberi dimensi bersama." Berikan dimensi ke titik pusat lingkaran sebagai gantinya |

**Offset** (ditampilkan sebagai jarak) dibuat oleh alat Offset: alat itu menahan garis salinan sejajar pada jarak tersebut, atau busur atau lingkaran salinan yang sepusat dengan radius yang lebih besar atau lebih kecil sebesar itu. Bagian lain dari offset yang sama membawa relasi **O** dan mengikuti satu dimensi Offset itu. Lihat [Spline, pangkas, offset dan alat sketsa lainnya](topic:sketch-tools).

Nilai dimensi dalam mm (atau derajat), tidak pernah negatif. Radius dan diameter harus lebih dari nol. Nilai 0 diizinkan untuk jarak: dua titik yang berjarak 0 adalah berimpit.

## Cara solver bekerja

- **Gerakan paling sedikit.** Saat sebuah nilai berubah, solver memindahkan geometri sesedikit mungkin. Garis yang panjangnya berubah akan tumbuh sama panjang di kedua ujung jika tidak ada yang menahan salah satu ujungnya.
- **Tidak membalik.** Jarak dari titik ke garis, jarak horizontal dan vertikal, sudut dan singgung mengingat sisi tempat mereka dibuat. Mengubah nilai tidak pernah membalik geometri ke sisi lain.
- **Konflik membiarkan segalanya.** Jika relasi saling bertentangan, sketsa tetap seperti semula dan relasi yang bertentangan berubah merah.
- **Relasi berlebih** (sudah tersirat oleh yang lain) disebutkan di bilah status ("sudah tersirat. Hapus.") dan fitur tetap dibangun, dengan peringatan.
- **Sambungan singgung.** Jika busur fillet bertemu garisnya di titik ujung bersama, singgung diselesaikan dalam bentuk yang tetap terdefinisi dengan baik di sana, sehingga fillet sketsa tidak dibaca sebagai terdefinisi berlebih.

## Belum tersedia

Relasi kolinear, koradial dan tembus; titik pada spline; dimensi tergerak (referensi); dimensi ordinat dan panjang busur; persamaan antar dimensi. Gunakan Sejajar ditambah jarak 0 untuk garis kolinear.
