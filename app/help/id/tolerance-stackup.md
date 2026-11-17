---
title: Stack-up toleransi
summary: Pilih rantai muka melalui part-part sebuah rakitan dan lihat seberapa besar celah di ujungnya dapat bervariasi, kasus terburuk dan RSS, dengan dimensi yang paling berpengaruh diurutkan di depan.
keywords: stack-up toleransi, stackup, analisis toleransi, rantai toleransi, rantai dimensi, loop, celah, kelonggaran, kasus terburuk, rss, root sum square, toleransi statistik, kontributor, sensitivitas, gd&t, toleransi umum, iso 2768
from: cbdb3159
---

Sebuah **stack-up** menjumlahkan dimensi sepanjang rantai melalui beberapa part untuk melihat seberapa besar hasil, biasanya celah, dapat bervariasi ketika setiap part dibuat di mana pun di dalam toleransinya.

## Pilih rantai

1. Buka rakitan dan pilih {{ui:Stack-up}} di grup Rakitan. Sebuah kartu terbuka di atas tampilan.
2. Pilih apa yang diukur **sepanjang**: X, Y, atau Z rakitan, atau {{ui:Normal muka pertama}}.
3. Tekan {{ui:Pilih rantai}} lalu klik muka-muka yang dilalui rantai, **berurutan**: mulai dari satu sisi celah, lewati part-part, dan akhiri di sisi celah lainnya.
4. Tekan {{ui:Selesai}} atau Enter. Backspace membatalkan klik terakhir; Esc membatalkan.

Dua klik pada part yang sama membuat dimensi part itu (jaraknya sepanjang rantai). Klik pada part lain membuat **antarmuka** di antara keduanya, tempat part bertemu; ia tidak memiliki toleransi kecuali Anda mengetikkannya. Mata rantai menambah atau mengurangi menurut arah rantai, dan mereka menutup loop: celah nominal adalah yang ditampilkan model.

Anda juga dapat {{ui:Tambah mata rantai}} secara manual dan mengetik nominalnya, toleransinya, serta apakah ia menambah (+) atau mengurangi (−).

## Beri toleransi setiap mata rantai

Setiap mata rantai memiliki deviasi **atas** dan **bawah** (misalnya +0.1 dan −0.05). **Toleransi dari** mengisinya dari part:

- **Toleransi umum**: kolom Toleransi pada blok judul part (lihat [Gambar ke PDF](topic:drawing-pdf)), saat membaca ±0.1, +0.2/-0.1, atau ISO 2768-f, -m, -c, atau -v (toleransi linear ISO 2768-1, menurut ukuran mata rantai). Toleransi umum sebuah part langsung dipakai saat rantai dipilih.
- **GD&T**: setiap kerangka kontrol fitur pada gambar part. Zona posisi, profil, dan runout memberi ± setengah toleransi. Toleransi orientasi atau bentuk biasanya sudah berada di dalam toleransi ukuran: tambahkan hanya di tempat rantai bertemu permukaan yang dikontrol. Dengan Ⓜ atau Ⓛ, zona diambil pada ukuran yang dinyatakan; toleransi bonus tidak dihitung.
- **Diketik**: angka apa pun yang Anda ketik.

## Membaca hasil

- **Celah, nominal** dan, saat toleransinya tidak sama, **Celah, rata-rata**: +0.2/−0 dan +0/−0.1 menggeser tengah rentang.
- **Kasus terburuk**: setiap toleransi pada batasnya sekaligus. Celah tidak akan pernah berada di luar ini.
- **RSS** (root sum square): setiap toleransi diambil sebagai tiga simpangan baku dari sebaran normal, lalu dijumlahkan sebagai akar dari jumlah kuadratnya. Sebagian besar rakitan berada jauh di dalam kasus terburuk; ini adalah perkiraan yang lazim untuk part yang dibuat secara massal.
- Isi **Celah minimal** dan **Celah maksimal** untuk melihat apakah kasus terburuk selalu berada di dalam rentang, dan berapa banyak rakitan dari sejuta yang diperkirakan RSS berada di luar.
- Kolom **#** mengurutkan mata rantai menurut **bagiannya** dari RSS: kencangkan yang pertama untuk membuat perbedaan terbesar.

{{ui:Simpan CSV}} menulis mata rantai, bagiannya, dan hasilnya. Stack-up disimpan dalam file rakitan, dan setiap perubahan adalah satu langkah untuk {{key:Mod+Z}}.

:::note
Stack-up berlaku satu arah. Ia tidak mengikuti sudut atau belokan sepanjang rantai, dan tidak membaca toleransi ukuran dari sketsa: berikan itu sebagai toleransi yang diketik atau melalui blok judul.
:::
