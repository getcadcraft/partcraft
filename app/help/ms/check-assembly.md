---
title: Semak himpunan untuk pertembungan dan pergerakan
summary: Cari bahagian yang bertindih dengan Pertembungan, seret sebarang nilai sambungan untuk melihat pergerakan, dan sapu sambungan melalui julatnya untuk mencari tempat bahagian berlanggar.
keywords: gangguan, pengesanan gangguan, pertembungan, perlanggaran, bertindih, lubang, muat benang, ketidakpadanan kedalaman benang, muka bersentuh, sembunyi, tapis, pergerakan, kajian pergerakan, sapu, julat pergerakan, semak
from: 9c98db46
---

Dua semakan dijalankan pada bahagian seperti yang diletakkan: **Pertembungan** mencari bahan yang bertindih sekarang, dan **semakan pergerakan** menggerakkan satu sambungan melalui julatnya dan mencari pertindihan sepanjang jalan.

## Semak gangguan

1. Buka atau bina himpunan (lihat [Bina himpunan](topic:build-assembly)).
2. Pilih {{ui:Pertembungan}}.

Bar status melaporkan hasilnya:

- "Tiada gangguan antara 3 bahagian (… ms)." Tiada yang bertindih.
- "Gangguan: Flange1 dan Flange2: Bertindih, 2.5 mm³." Setiap pasangan, jenis hasilnya dan isipadu yang dikongsi.

Kotak **Himpunan** di sebelah kiri menunjukkan **Gangguan**: "Tiada", "2 hasil" (yang ditunjukkan), atau "Belum disemak". Dengan tiada apa dipilih, panel kanan menyenaraikan setiap hasil di bawah **Gangguan**.

Hasil dikosongkan setiap kali himpunan berubah. Jalankan {{ui:Pertembungan}} semula selepas mengalihkan sambungan. Setiap pasangan bahagian disemak dengan setiap bahagian lain, jadi himpunan besar mengambil masa lebih lama.

### Jenis hasil

| Jenis | Maksudnya |
|---|---|
| **Bertindih** | Bahagian berkongsi isipadu: pertembungan sebenar. |
| **Ketidakpadanan kedalaman benang** | Isipadu yang dikongsi berada dalam benang satu bahagian tetapi melampaui benang yang lain: baut yang berbenang lebih dalam daripada lubangnya, atau batang licin dalam lubang berbenang. |
| **Muat benang (benang kosmetik)** | Isipadu yang dikongsi berada dalam benang kedua-dua bahagian: baut dalam lubang berbenang. Benang kosmetik dilukis pada saiz penuh benang, jadi ia sentiasa bertindih sedikit. |
| **Muka bersentuh** | Tiada isipadu dikongsi, tetapi muka bersentuh (dalam 0.001 mm). |

Benang termodel (lihat [Benang pada aci dan lubang, dilukis atau dimodelkan](topic:threads)) ialah geometri sebenar: apa yang mereka kongsi ialah **Bertindih**.

### Sembunyikan apa yang tidak perlu anda lihat

Di bawah **Gangguan**, **Tunjuk** mempunyai kotak bagi setiap jenis: nyahtandakan **Muat benang** dan **Muka bersentuh** untuk hanya melihat pertembungan yang penting. **Sembunyi pasangan ini** di sebelah hasil menyembunyikan pasangan bahagian itu apa pun jenisnya. Hasil tersembunyi dikira ("2 hasil disembunyikan oleh tapis ini"), dan **Tunjuk semula pasangan tersembunyi** membawa pasangan kembali. Bar status turut mengira hasil tersembunyi.

Tapis disimpan bersama himpunan, dan setiap perubahan ialah satu langkah {{key:Mod+Z}}. **Sapu sambungan untuk pertembungan** (di bawah) turut menggunakannya. Himpunan dengan tapis disimpan sebagai versi 4, yang enggan dibuka oleh versi PartCraft yang lebih lama, bukannya kehilangan tapis.

## Tonton pergerakan

1. Pilih sambungan yang bergerak (apa-apa kecuali tegar) dalam senarai di sebelah kiri.
2. Seret peluncur di bawah salah satu nilainya, seperti **Sudut (°)** atau **Ofset (mm)**. Bahagian bergerak semasa anda menyeret.
3. Lepaskan. Kedudukan baharu dikekalkan dan boleh dibuat asal dengan {{key:Mod+Z}}.

Anda juga boleh menaip sudut atau ofset dalam kotak dan menekan {{key:Enter}}.

Sambungan pada gelung tertutup (pautan) menggerakkan keseluruhan gelung: nilai yang anda seret dikekalkan dan sambungan lain dalam gelung mengikut (lihat [Gelung tertutup](topic:build-assembly#closed-loops-linkages)).

## Sapu sambungan untuk pertembungan

1. Pilih sambungan yang bergerak.
2. Bagi sambungan dengan beberapa nilai (silinder, satah, bola, pin dalam slot), pilih yang mana hendak disapu dalam **Semak pergerakan**.
3. Pilih {{ui:Semak pergerakan untuk pertembungan}}.

PartCraft menggerakkan nilai itu melalui 25 kedudukan dalam 24 langkah sama, yang lain kekal seperti sedia ada: sudut dari −180° hingga 180° (condongan dari −90° hingga 90°), panjang dari tolak hingga tambah saiz bahagian terbesar. Ia melaporkan:

- "Tiada pertembungan di mana-mana untuk Sudut (°) dari -180 hingga 180 (25 kedudukan disemak)."
- "6 daripada 25 kedudukan bertembung, pertama pada Sudut (°) 45 (12.4 mm³)." Kedudukan pertama yang bertembung dan pertindihannya di situ.

Butang itu dimalapkan untuk sambungan tegar, yang tidak bergerak. Sapuan hanya menyemak kedudukan, bukan laluan antara keduanya: bahagian nipis boleh melepasi yang lain antara dua langkah.

:::note
Sentuhan dan graviti belum dibina. Tanpa had, sapuan meliputi keseluruhan julat; beri nilai **Had** (lihat [Senarai bahagian, pandangan letupan dan alih bahagian](topic:assembly-bom-explode)) dan sapuan hanya meliputi itu, jadi engsel yang terbuka 90° disemak sepanjang 90°.
:::

## Kajian pergerakan

**Himpunan › Pergerakan** memacu nilai satu sambungan dari permulaan ke pengakhiran sepanjang masa yang anda berikan (kelajuan malar, dilonggarkan, sinus, atau keluar dan kembali), meletakkan himpunan pada setiap langkah dengan sambungan dan gelung tertutupnya, dan melaporkan apa yang bertembung dan sejauh mana bahagian menghampiri. **Tambah titik** mengikuti tengah bahagian atau titik yang anda klik padanya, dan kad memplot kedudukannya, kelajuan dan pecutan, nilai sambungan serta kelegaan terhadap masa; **Simpan CSV** dan **Simpan plot** menulisnya. Kelajuan dan pecutan diperoleh daripada kedudukan yang direkod, jadi puncak tajam antara langkah dibaca rendah: gunakan lebih banyak langkah.

Selepas **Jalankan**, bar **Langkah melalui larian** menggerakkan himpunan ke mana-mana langkah (masa, nilai dan sama ada bahagian bertembung di situ dipaparkan di sebelahnya); sambungan mengekalkan nilainya sendiri, dan **Kembali ke model** meletakkan himpunan semula. Tetapan kajian disimpan dalam fail himpunan; hasilnya dijana semula oleh **Jalankan**.

## Kajian sentuhan

**Himpunan › Sentuhan** menunjukkan bagaimana himpunan membawa bebannya di tempat bahagian menekan antara satu sama lain. Setiap bahagian membawa sokongan, beban dan bahannya sendiri daripada kajian **Simulasi**-nya sendiri (muka tetap pada satu bahagian, daya pada yang lain); di sini anda memilih pasangan. **Tambah pasangan**, kemudian **Pilih sisi A** dan klik muka satu bahagian, **Pilih sisi B** dan klik muka bahagian lain yang berbeza (klik pada muka yang dipilih membuangnya; Esc atau **Selesai** menamatkan pemilihan). Pasangan ialah **Tanpa geseran** (bahagian menekan tetapi menggelongsor) atau **Terikat** (ia kekal bersama); faktor kekukuhan menetapkan betapa keras sentuhan menentang tenggelam (20 ialah permulaan yang munasabah, 1000 untuk timbunan keluli yang kaku).

**Selesaikan** menjalankan beban dalam langkah dan menunjukkan daya sentuhan, tenggelam terdalam, pergerakan terbesar dan tegasan terbesar. Bahagian tanpa pasangan ditinggalkan dan kad memberitahu anda. Sentuhan tanpa geseran tidak menahan bahagian ke sisi: beri setiap bahagian sokongan dalam kajian Simulasinya sendiri, atau ikatkannya, jika tidak langkah mungkin tidak stabil. Pasangan dan tetapan disimpan dalam fail himpunan.

**Eksport deck CalculiX** menulis model yang sama sebagai fail input CalculiX (.inp). CalculiX ialah program berasingan yang anda pasang dan jalankan sendiri; **Baca hasil CalculiX (.frd)** kemudian membaca semula sesaran pada jejaring himpunan ini dan menolak fail yang dibuat untuk jejaring lain. Penyelesai di sini mampu plastik tetapi bukan dinamik eksplisit, dan tiada apa di sini ialah analisis yang diperakui: minta jurutera menyemak apa-apa yang penting.
