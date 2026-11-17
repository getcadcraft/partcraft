---
title: Ukur jarak, sudut dan jisim
summary: Klik dua perkara dalam paparan untuk jarak minimum, sudut dan ΔX ΔY ΔZ; baca panjang tepi, diameter lubang, luas muka atau koordinat titik; dapatkan isipadu, jisim, pusat jisim dan inersia bagi bahagian atau himpunan.
keywords: ukur, jarak, jarak minimum, sudut, panjang, jejari, diameter, luas, koordinat, delta, periksa, sifat jisim, jisim, berat, pusat jisim, inersia, momen inersia, ketumpatan, bahan
from: 20bda0b7
---

**Ukur** berfungsi pada model dalam setiap ruang kerja (Design, Form, Simulation, Generative, Manufacture) dan dalam himpunan. Ia terdapat dalam menu {{ui:Pandangan}} kumpulan **Pandangan**, atau tekan {{key:M}}. Kad dibuka di atas sudut kiri atas paparan.

## Ukur satu perkara

Klik bucu, tepi atau muka. Kad menunjukkan:

- **Satu titik** (bucu, titik tengah tepi atau pusat bulatan): X, Y, Z-nya.
- **Satu tepi**: lurus, bulatan atau lengkung, dan panjangnya; bagi bulatan juga jejari, diameter dan pusatnya.
- **Satu muka**: rata, silinder, kon dan sebagainya, dan luasnya; normal muka rata; jejari dan diameter silinder (saiz lubang). Luas ialah bagi faset yang dibina oleh kernel mesh.
- **Keseluruhan jasad**: tahan {{key:Shift}} dan klik bahagian. Anda mendapat isipadu, luas, jisim dan inersianya (lihat di bawah).

Penunjuk melekap pada bucu, titik tengah tepi dan pusat bulatan dalam jarak 10 piksel; titik biru kecil menunjukkan lekapan sebelum anda klik. Untuk memilih pusat lubang, tunjuk ke tengah lubang; untuk memilih tepinya (bulatan), tunjuk ke tepi.

## Ukur antara dua perkara

Klik item kedua. Kad menambah:

- **Jarak minimum** dan dua titik terdekat, dilukis dalam paparan dengan garisan di antara keduanya.
- **ΔX, ΔY, ΔZ** dari titik terdekat pertama ke yang kedua.
- **Sudut** antara dua muka rata (antara normalnya, 0–180°), antara dua tepi lurus atau paksi (0–90°), atau antara tepi dan muka.
- **Jurang antara satah** bagi dua muka rata selari, **Pusat ke pusat** bagi dua bulatan atau lubang, **Paksi ke paksi** bagi dua lubang atau silinder selari.

Klik ketiga memulakan pasangan baharu. {{key:Esc}} mengosongkan pilihan; {{key:Esc}} sekali lagi (atau {{ui:Tutup}}) menutup Ukur. {{ui:Salin}} meletakkan keputusan pada papan keratan sebagai teks dipisahkan tab, sedia untuk ditampal ke dalam hamparan.

### Sejauh mana ketepatannya

PartCraft membina bahagian dengan kernel mesh, jadi jarak dikira pada faset mesh, dan kad menyatakan **anggaran: mengikut faset**: betul untuk muka rata dan antara bucu, sedikit tersasar untuk permukaan melengkung. Tetapan **Lengkung** yang lebih halus mendekatkannya. Pengukuran tepat pada permukaan sebenar memerlukan kernel tepat: belum dibina dalam versi ini.

## Sifat jisim

Pilih {{ui:Sifat jisim}} dalam kad atau dalam menu {{ui:Pandangan}}. Pada bahagian, pilih **Bahan** dalam kad (keluli, aluminium, plastik dan lain-lain dengan ketumpatan biasanya). Dalam himpunan setiap bahagian menggunakan bahan yang ditetapkan dalam sifatnya (pilih bahagian, kemudian **Bahan**), dan hasilnya ialah bagi semua bahagian bersama.

Kad menunjukkan jisim, isipadu, luas, pusat jisim, tensor inersia (Ixx, Iyy, Izz dan hasil darab Ixy, Iyz, Ixz, dalam kg·mm², mengelilingi pusat jisim sepanjang paksi world) serta momen utama. Tanpa bahan ia menunjukkan nilai yang sama bagi setiap unit ketumpatan (mm⁵) dan tiada jisim.

Nombor tepat bagi pepejal bertesel yang dibina oleh kernel mesh (lengkung sebagai faset), jadi bahagian bulat keluar sedikit rendah, dan kad menyatakannya. Ketumpatan bahan ialah nilai biasa daripada buku panduan; aloi atau gred sebenar boleh berbeza beberapa peratus.

## Had

- Lekapan boleh mencari titik yang tersembunyi di belakang geometri lain; semak kad menunjukkan apa yang anda maksudkan.
- Ukur ditutup apabila anda membuka lakaran atau helaian lukisan, atau menukar ruang kerja.
