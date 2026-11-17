---
title: Salin, tempel, dan duplikat
summary: Salin geometri sketsa, fitur, dan part rakitan; tempel di tempat yang Anda klik atau di tempat yang sama; duplikat dalam satu langkah; dan apa yang ikut dengan salinan serta apa yang tidak.
keywords: salin, tempel, potong, duplikat, papan klip, tempel di tempat yang sama, pilih semua, batalkan pilihan, hapus, ctrl c, ctrl v, ctrl d, instance, komponen, salin sketsa, salin fitur, salin part
from: 611307d7
---

Grup {{ui:Edit}} di bilah alat berisi {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, dan menu {{ui:Lainnya}} dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Pilih semua}}, dan {{ui:Batalkan pilihan}}, masing-masing dengan tombolnya. Apa yang disalin bergantung di mana Anda berada: geometri dalam sketsa yang terbuka, fitur di riwayat, atau part dalam rakitan.

Item yang abu-abu tidak bisa dijalankan saat ini. Arahkan kursor di atasnya: tooltip-nya menjelaskan alasannya, misalnya "Pilih geometri sketsa dulu" atau "Papan klip berisi Sketch2 dan Extrude2: fitur ditempel ke riwayat, jadi keluar dari sketsa dulu".

| Tindakan | Tombol | Dalam sketsa | Di riwayat | Dalam rakitan |
|---|---|---|---|---|
| Salin | {{key:Mod+C}} | Titik dan kurva yang dipilih | Sketsa, ekstrusi, revolusi, atau lubang yang dipilih (beserta sketsanya) | Part yang dipilih |
| Potong | {{key:Mod+X}} | Salin, lalu hapus | Salin, lalu hapus fitur | Salin, lalu buang part |
| Tempel | {{key:Mod+V}} | Salinan mengikuti penunjuk; klik tempat ia akan diletakkan | Menambahkan salinan di akhir riwayat | Salinan baru di sebelah part lain |
| Tempel di tempat yang sama | {{key:Mod+Shift+V}} | Pada koordinat yang sama | Sama seperti Tempel | Di tempat yang sama dengan part yang disalin |
| Duplikat | {{key:Mod+D}} | Salin dan pindahkan sekaligus; papan klip tidak diubah | Salinan kedua tepat setelah Anda | Salinan kedua di sebelah part lain |
| Hapus | {{key:Delete}} | Pilihan | Fitur (bertanya jika fitur lain memakainya) | Part atau sambungan |
| Pilih semua | {{key:Mod+A}} | Semua di sketsa | Tidak tersedia | Tidak tersedia |
| Batalkan pilihan | {{key:Esc}} | Menghapus pilihan | Menghapus pilihan dan mode pemilihan | Menghapus pilihan |

Setiap tempel, duplikat, dan potong adalah satu langkah di daftar urungkan: {{key:Mod+Z}} membatalkannya, {{key:Mod+Y}} mengembalikannya.

## Dalam sketsa

1. Pilih apa yang akan disalin: klik, {{key:Shift}}+klik untuk lebih banyak, seret jendela, atau tekan {{key:Mod+A}} untuk semuanya.
2. Tekan {{key:Mod+C}} atau pilih {{ui:Salin}}. Bilah status menampilkan apa yang disalin.
3. Tekan {{key:Mod+V}} atau pilih {{ui:Tempel}}. Salinan putus-putus mengikuti penunjuk, dipegang di tengahnya. Ia melakukan snap ke titik: letakkan pusat lingkaran yang disalin di atas titik dengan mengkliknya.
4. Klik tempat ia akan diletakkan. Geometri yang ditempel tetap terpilih, sehingga Anda bisa menyeretnya atau langsung menambahkan relasi. {{key:Esc}} membatalkan tempel.

Yang ikut:

- Garis, lingkaran, atau busur yang disalin membawa titik ujung dan pusatnya sendiri.
- Relasi dan dimensi **di antara item yang disalin** ikut: persegi panjang yang disalin tetap persegi panjang, dengan ukurannya.
- Relasi **ke geometri yang tidak Anda salin**, dan ke titik asal, dihapus. Bilah status menghitungnya: "2 relasi ke geometri di luar salinan tidak akan ikut". Jadi salinan yang ditempel bebas bergerak sampai Anda mengikatnya dengan relasi atau dimensi.
- Titik tetap tetap terkunci, di posisi barunya.

{{ui:Tempel di tempat yang sama}} menempatkan salinan tepat di koordinat asli, di sketsa ini atau di sketsa lain: berguna untuk membawa profil dari satu sketsa ke sketsa lain. Di sketsa yang sama, salinan berada di atas aslinya; seret menjauh.

{{ui:Duplikat}} ({{key:Mod+D}}) menyalin pilihan dan mulai menempatkannya seketika, tanpa mengubah isi papan klip.

:::tip
Untuk mengulang pusat lubang atau slot beberapa kali, salin sekali dan tempel beberapa kali: setiap {{key:Mod+V}} memulai salinan baru yang mengikuti penunjuk.
:::

## Di riwayat

1. Klik sketsa, ekstrusi, revolusi, atau lubang di riwayat.
2. {{key:Mod+C}} menyalinnya. Fitur berbasis sketsa disalin bersama sketsanya.
3. {{key:Mod+V}} menambahkan salinan di akhir riwayat (di bilah rollback jika Anda sudah rollback), dengan nama baru seperti Sketch3 dan Extrude2.

Salinan berada di bidang atau muka yang sama dengan aslinya, sehingga ia dibangun di atasnya dan part tampak sama. Pilih sketsa baru dan ubah bidangnya di panel kanan, atau buka dan seret atau dimensikan ulang profilnya, untuk memindahkan salinan.

- Tempel ke **part lain**: buka part itu dan tekan {{key:Mod+V}}. Jika sketsa salinan berada di muka yang tidak dimiliki part itu, ia masuk ke bidang Front, dan bilah status memberi tahu.
- {{ui:Duplikat}} menyalin dan menempel dalam satu langkah, di dalam part yang sama.
- {{ui:Potong}} menyalin fitur, lalu menghapusnya (bertanya dulu jika fitur lain memakainya).

Pola, cermin, fillet, chamfer, shell, dan solid impor tidak bisa disalin: mereka menggantung pada tepi, muka, atau fitur yang dipilih di part ini. Salin sketsa atau fitur tempat mereka dibangun, atau polakan dengan {{ui:Linear}} atau {{ui:Melingkar}}.

## Dalam rakitan

1. Klik part di tampilan atau di daftar sebelah kiri.
2. Pilih {{ui:Duplikat}} ({{key:Mod+D}}), atau {{key:Mod+C}} lalu {{key:Mod+V}}.

Salinan baru adalah **part yang sama**: sunting satu dan setiap salinan berubah. Ia muncul 20 mm di kanan semua yang sudah ada di rakitan, diputar dengan cara yang sama seperti salinan, dan tetap di sana sampai sambungan menempatkannya. {{ui:Tempel di tempat yang sama}} ({{key:Mod+Shift+V}}) menempatkannya tepat di tempat part yang disalin; sambungkan untuk memindahkannya (offset sambungan geser mendorongnya sepanjang arah geser).

Menempel part yang disalin dari rakitan lain membawa part itu juga, sama seperti {{ui:Sisipkan}} dari filenya. {{ui:Tambah salinan}} di grup Rakitan melakukan hal yang sama seperti {{ui:Duplikat}}, dan berfungsi dengan tidak ada yang dipilih (ia menyalin part terakhir).

## Papan klip

- Ini papan klip milik PartCraft, bukan milik komputer: Anda tidak bisa menempel geometri PartCraft ke program lain, atau teks ke tampilan PartCraft.
- Disimpan di peramban ini, sehingga tab PartCraft lain bisa menempel apa yang Anda salin. Ia dibaca dan diperiksa seperti file yang dibuka; apa pun yang rusak atau berasal dari versi lain ditolak.
- Part dengan file STEP impor yang besar mungkin terlalu besar untuk disimpan peramban: ia kemudian hanya bisa ditempel di tab ini.
- Di kotak angka atau pencarian bantuan, {{key:Mod+C}} dan {{key:Mod+V}} menyalin dan menempel teks seperti biasa.

Di lembar gambar, salin dan tempel belum tersedia; {{ui:Hapus}} dan {{ui:Batalkan pilihan}} bekerja pada simbol yang dipilih. Lihat [Yang belum dibuat](topic:not-built-yet).
