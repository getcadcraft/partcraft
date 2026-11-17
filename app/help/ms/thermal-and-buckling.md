---
title: Haba, tegasan haba dan lengkokan
summary: Cari suhu dalam bahagian daripada suhu tetap, fluks haba, kuasa haba, perolakan dan sinaran (mantap atau mengikut masa), beban kajian tegasan dengan kenaikan suhu, dan cari beban yang menyebabkan bahagian langsing melengkok, dengan apa yang setiap kaedah boleh dan tidak boleh beritahu anda.
keywords: haba, pemindahan haba, haba, suhu, konduksi, perolakan, pekali filem, sinaran, pemancaran, fluks haba, kuasa haba, penjanaan haba, sink haba, fana, masa, penyejukan, pemanasan, Crank-Nicolson, Euler tersirat, imbangan haba, tegasan haba, tegasan haba mengikut masa, tegasan haba fana, pelindapkejutan, sejarah tegasan, masa terburuk, pengembangan haba, pekali pengembangan, lengkokan, lengkokan Euler, faktor beban, beban kritikal, tiang, langsing, eigenvalue
from: 1a1b7545
---

Kajian ini terdapat dalam ruang kerja Simulation di sebelah tegasan statik dan frekuensi semula jadi (lihat [Semak tegasan dan pesongan](topic:simulation)). Pilihnya dalam kotak **Jenis** panel. Ia menggunakan mesh kiub kecil yang sama dan senarai bahan yang sama; setiap bahan dalam pustaka mempunyai kekonduksian haba, haba tentu dan pekali pengembangan (nilai buku rujukan biasa, ditunjukkan di bawah **Sifat**).

## Haba: ke mana haba pergi?

1. Pilih **Haba (pemindahan haba)** sebagai **Jenis**.
2. Tambah syarat haba dari senarai **Tambah** panel, kemudian klik mukanya (seperti untuk penyokong dan beban):
   - **Suhu tetap**: muka dikekalkan pada suhu, dalam °C.
   - **Fluks haba**: W/m² yang mengalir masuk ke muka (nilai negatif bermaksud keluar). Ia bertindak ke atas luas sebenar muka, walaupun di tempat kiub membentuk anak tangga.
   - **Kuasa haba**: jumlah dalam watt, dikongsi ke atas muka yang dipilih mengikut luas. Gunakannya untuk pemanas atau cip yang diketahui kuasanya.
   - **Perolakan**: udara atau cecair pada suhu tertentu membawa haba pergi pada h W/(m²·K). Nilai h biasa: udara pegun 5–10, kipas 25–100, air 500–10,000. PartCraft tidak mengira h: tiada aliran bendalir dalam kajian ini.
   - **Sinaran**: muka memancarkan haba ke persekitaran pada suhu tertentu, dengan pemancaran dari 0 hingga 1. Ia **dilinearkan** (sinaran ditulis sebagai pekali yang bergantung pada suhu dan diselesaikan semula sehingga stabil) dan hanya pergi ke persekitaran: muka tidak bertukar haba antara satu sama lain.
3. **Penjanaan haba** (W/m³) memanaskan seluruh bahagian dari dalam, contohnya bahagian yang beroperasi secara rintangan.
4. Tekan **Selesaikan**. Bahagian diwarnai mengikut suhu; pilih **Fluks haba** dalam **Tunjuk** untuk melihat ke mana haba mengalir. Halakan kursor ke bahagian untuk membaca kedua-duanya.

Aliran haba mantap memerlukan tempat untuk haba pergi: sekurang-kurangnya satu suhu tetap, perolakan atau sinaran. Bahagian yang hanya menerima haba tidak mempunyai keadaan mantap; jadikannya fana.

Jadual menyenaraikan suhu terendah dan tertinggi serta tempatnya, fluks haba terbesar, dan **imbangan haba**: haba yang masuk atau keluar bagi setiap syarat (suhu tetap mengira apa yang mesti dibekalkan atau diserapnya), haba yang dijana, jumlah masuk dan keluar, dan **ketidakseimbangan**. Ketidakseimbangan sepatutnya hanya sebahagian kecil daripada haba masuk; jika besar, keputusannya tidak boleh dipercayai.

### Mengikut masa (fana)

Tandakan **Fana** dan berikan **Suhu permulaan** (seluruh bahagian bermula di situ), **Tempoh masa** dan bilangan **Langkah masa**. **Euler tersirat** adalah teguh; **Crank–Nicolson** lebih tepat untuk langkah yang sama tetapi boleh beralun selepas perubahan mendadak. Selepas diselesaikan, seret peluncur **Masa** untuk melihat suhu pada setiap saat (skala warna kekal sama untuk setiap saat). Imbangan haba kemudian termasuk haba yang disimpan.

## Tegasan haba: apa yang perubahan suhu lakukan kepada bahagian?

Dalam kajian **Tegasan statik** (atau **Lengkokan**), tetapkan **Beban haba**:

- **Perubahan suhu seragam**: seluruh bahagian memanas (atau menyejuk, dengan nombor negatif) sebanyak kelvin tersebut.
- **Suhu daripada syarat haba**: tambah syarat haba ke dalam kajian yang sama; suhu mantap diselesaikan dahulu pada mesh yang sama, kemudian bahagian mengembang sebanyak α·(T − **suhu bebas tegasan**).
- **Suhu mengikut masa (jalan fana)**: tambah syarat haba, kemudian berikan **Suhu permulaan**, **Tempoh masa**, **Langkah masa** dan **Penetapan langkah masa** seperti kajian haba fana. Suhu diselesaikan mengikut masa pada mesh yang sama (kiub atau tetrahedron), dan penyelesaian statik pada suhu setiap saat memberi tegasan bagi saat itu. **Tegasan pada**:
  - **Masa terburuk** (permulaan): **Penyelesaian tegasan** menyelesaikan saat yang tersebar sama rata sepanjang jalan, termasuk permulaan (21 melainkan anda menukarnya, paling banyak 51). Keputusan dibuka pada saat yang mempunyai tegasan von Mises terbesar; jadual menamakannya, carta kecil menunjukkan tegasan puncak terhadap masa, dan peluncur **Masa** menunjukkan tegasan pada setiap saat yang diselesaikan (skala warna kekal mengikut saat terburuk).
  - **Satu masa yang dipilih**: satu saat, langkah masa yang paling hampir dengan **Masa (s)** yang anda berikan. Kajian lengkokan sentiasa mengambil satu masa yang dipilih (akhir jalan melainkan anda menetapkan yang lain).

Bahagian yang dilindapkan (dicelup dari panas ke sejuk) atau dipanaskan secara mendadak paling tertekan ketika bahagian dalam dan permukaan paling berbeza: selalunya tepat di permulaan. Suhu tetap digunakan dari saat pertama, sebagai perubahan mendadak, jadi tegasan pada permulaan sangat bergantung pada saiz elemen (hanya beberapa elemen yang melihat perubahan itu). Bacalah sebagai "sangat tinggi", dan lihat saat seterusnya pada peluncur untuk nilai yang dapat diselesaikan oleh mesh. Tegasan ini kuasi-statik: tiada inersia, tiada getaran akibat perubahan mendadak.

Bahagian yang bebas mengembang tidak mempunyai tegasan haba: tahan sekadar cukup untuk menghalangnya bergerak (contohnya tiga muka tanpa geseran pada sudut tegak). Jika diapit di antara dua dinding, ia dimampatkan: palang keluli yang dipanaskan 50 K di antara dinding tegar membawa kira-kira 117 MPa. Beban haba mengimbangi dirinya sendiri, jadi tindak balas tetap hanya mengimbangi beban mekanikal.

## Lengkokan: bila bahagian langsing akan tumbang?

1. Pilih **Lengkokan (linear)** sebagai **Jenis**, dan tambah penyokong dan beban seperti kajian statik.
2. Tetapkan **Faktor beban untuk dicari** (berapa banyak mod lengkokan).
3. Tekan **Selesaikan**. Setiap mod mempunyai **faktor beban**: gandaan beban anda pada mana bahagian ideal akan melengkok. Faktor beban 3 bermaksud tiga kali beban anda; **faktor beban di bawah 1 bermaksud ia melengkok di bawah beban yang anda gunakan**. Jadual juga memberikan jumlah beban pada setiap faktor. Bentuk mod menunjukkan bagaimana ia melengkok (saiznya tidak bermakna apa-apa).

**Lengkokan linear melebihkan beban lengkokan sebenar.** Ia menganggap bahagian yang sempurna: lurus sempurna, tiada tegasan baki dan kenyal. Bahagian sebenar mempunyai ketidaksempurnaan kecil dan boleh mengalah dahulu, dan cangkerang berdinding nipis boleh melengkok pada sebahagian kecil nilai linear. Gunakan margin yang lebih, dan anggap faktor beban hampir atau di bawah 3 untuk cangkerang nipis sebagai amaran.

## Sejauh mana boleh dipercayai

PartCraft menyemak penyelesai ini terhadap formula manual: bar di antara dua suhu (tepat), sirip penyejukan (dalam 0.3 K), plat yang memanaskan dirinya (tepat), kiub yang menyejuk mengikut masa (dalam 0.1 % dengan Crank–Nicolson), bar yang dipanaskan secara mendadak di satu hujung, bar bebas yang dipanaskan (tiada tegasan, ΔL = αLΔT), bar yang diapit di antara dinding (σ = −EαΔT), plat yang dilindapkan mengikut masa berbanding penyelesaian siri klasik (dalam 1 % pada kiub, 2.1 % pada tetrahedron di tengah plat; 0.5 % pada permukaannya), saat terakhir larian panjang berbanding tegasan haba mantap (sama hingga sejuta), dan tiang Euler (dalam 1 % tetap–bebas, 1.5 % pin–pin). Ingat:

- **Nilai bahan malar.** Kekonduksian, haba tentu dan pengembangan tidak berubah mengikut suhu di sini; pada beberapa ratus darjah ia boleh berubah 10–30 %. Kekukuhan juga tidak berubah.
- **Tegasan mengikut masa adalah kuasi-statik dan kenyal**: setiap saat ialah penyelesaian statik (tanpa inersia), dan tiada alah, jadi pelindapan yang sepatutnya membuat permukaan alah akan menunjukkan tegasan melebihi had alah.
- **Pekali perolakan ialah input anda**, bukan dikira daripada aliran udara atau air.
- **Tiada rintangan sentuhan**: bahagian ialah satu pepejal.
- **Lengkokan linear sahaja**: tiada ketidaksempurnaan, tiada alah, tiada kelakuan selepas lengkokan.
- Anak tangga kiub dan sudut dalam yang tajam mempengaruhi tegasan haba sama seperti tegasan lain (lihat [Semak tegasan dan pesongan](topic:simulation)).
- Ini ialah binaan makmal: semak bahagian yang penting dengan cara lain.

## Berkaitan

- [Semak tegasan dan pesongan (Simulation)](topic:simulation)
- [Apa yang belum dibina](topic:not-built-yet)
