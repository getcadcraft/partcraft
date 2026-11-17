---
title: Putar bahagian berpusing
summary: Lakar separuh profil di sebelah garis pusat, putarkannya menjadi bahagian bulat, pilih paksi dan sudut, dan guna potongan putar untuk alur.
keywords: putar, boss putar, potongan putar, bahagian berpusing, larik, aci, paksi, garis pusat, alur, sudut, potong putar
from: 593b6929
---

{{ui:Putar}} memusingkan profil mengelilingi paksi, seperti bahagian yang dibuat pada larik: aci, takal, flens, tombol. {{ui:Potongan putar}} (dalam menu {{ui:Lagi}} kumpulan Ciri) memusingkan profil untuk mengeluarkan bahan, bagi alur dan lekukan.

## Putar aci berperingkat

1. Lakar pada **Satah depan**.
2. Tekan {{key:N}} untuk {{ui:Garis pusat}}. Mulakan pada asalan dan klik satu titik lurus ke kanan, contohnya 100 mm jauhnya. Ini ialah paksi. Ia putus-putus: geometri pembinaan bukan sebahagian daripada profil.
3. Tekan {{key:L}} untuk Garisan. Lukis **separuh** profil di atas garis pusat sebagai satu gelung tertutup: mulakan pada garis pusat, naik, melangkah, dan turun semula ke garis pusat, kemudian sepanjangnya ke titik mula. Hujungnya mesti bertemu: gelung mesti tertutup.
4. Dimensikan jejari (ketinggian di atas garis pusat) dan panjangnya. Ketinggian 10 di atas garis pusat menghasilkan diameter 20.
5. Pilih {{ui:Keluar}}.
6. Pilih {{ui:Putar}}. Aci muncul, satu pusingan penuh.

Profil mesti kekal di satu sisi paksi. Jika ia menyilang: "Profil menyilang paksi. Kekalkannya di satu sisi garis pusat." Tepi profil boleh terletak pada paksi.

## Tetapan

| Tetapan | Fungsi | Lalai |
|---|---|---|
| **Operasi** | Boss (tambah bahan), Potong (keluarkan bahan), Persilangan (kekalkan pertindihan) atau Jasad baharu | Boss untuk {{ui:Putar}}, Potong untuk {{ui:Lagi}} › {{ui:Potongan putar}} |
| **Sudut (°)** | Sejauh mana untuk memusing, dari sedikit melebihi 0 hingga 360 | 360 |
| **Paksi** | Garis pusat pertama, atau mana-mana garisan atau garis pusat dalam lakaran, disenaraikan sebagai "Garis pusat 1 (l1)" atau "Garisan 3 (l3)" | Garis pusat pertama |

Sudut separa membentuk baji, diputar dari satah lakaran ke satu arah.

Jika lakaran tiada garis pusat dan anda biarkan **Paksi** pada Garis pusat pertama: "Lukis garis pusat (garisan pembinaan) dalam lakaran untuk diputar sekitarnya." Anda juga boleh memilih garisan pepejal profil sebagai paksi.

## Potong alur

1. Dengan aci sudah dibina, buka lakaran baharu pada **Satah depan** (satah yang sama dengan lakaran aci).
2. Lukis garis pusat pada paksi yang sama: mulakan di asalan dan kekalkannya mendatar supaya ia mendapat H, atau taipkannya dengan **Tambah mengikut koordinat** (contohnya dari `0, 0` ke `100, 0`). Lakaran baharu tidak boleh melekat pada garisan lakaran lain.
3. Lukis segi empat tepat kecil tertutup yang bertindih dengan tepi aci di tempat alur itu.
4. Pilih {{ui:Keluar}}, kemudian {{ui:Lagi}} › {{ui:Potongan putar}}.

## Muka berputar dalam himpunan

Putaran mempunyai paksi yang boleh digunakan oleh ciri dan himpunan lain:

- corak **Bulatan** menggunakan paksi putaran terakhir secara lalai (lihat [Ciri corak dan cermin](topic:patterns-mirror));
- dalam himpunan, sambungan antara muka yang dibuat oleh putaran bermula sebagai sambungan **berputar**, dan **Pusatkan pada** menawarkan "Paksi bagi Revolve1" (lihat [Bina himpunan](topic:build-assembly)).

## Lengkung benar dan faset

PartCraft membina putaran dengan kernel mesh (cip bar status menyatakan "Kernel mesh"): bentuk bulat ialah faset rata, 64 setiap pusingan secara lalai, dan isipadu sedikit kurang daripada nilai sebenar (kira-kira 0.16 % pada 64). Paparan serta eksport STL, 3MF dan STEP dibuat daripada faset itu: tetapkan **Lengkung** (klik ruang kosong, kemudian panel kanan) kepada Halus (128) atau Sangat halus (256) untuk yang lebih licin. Silinder, kon dan torus benar memerlukan kernel tepat: belum dibina dalam versi ini. Lihat [Kernel mesh](topic:solid-kernels).
