---
title: Pemesinan pada larik
summary: Muka, kasar, kemas, alur, potong bahagian, benang dan gerudi bahagian yang dipusingkan, daripada garis luar yang dibentuk bahagian apabila ia berpusing. Alat larik, suapan per pusingan, pasca larik, dan apa yang belum dibuktikan.
keywords: pemesinan, larik, pusing, muka, pengasaran, kemasan, alur, mengalur, potong bahagian, memisahkan, potong, benang, menguliran, g32, g33, g96, kelajuan permukaan malar, css, jejari hujung, mata, bar, cekam, diameter, suapan per pusingan, g71, g76
from: d8cc53b0
---

Pembuatan mempunyai tujuh operasi untuk larik. Ia berfungsi pada mana-mana bahagian: yang dipotong ialah **garis luar yang dibentuk bahagian apabila ia berpusing** tentang pusat bahan mentah, jadi bahagian yang tidak bulat dikisar kepada bentuk bulat yang boleh memegangnya.

**Tiada apa di sini telah dijalankan pada larik.** Laluan disemak terhadap geometri oleh ujian; dua pasca larik mengikuti kod yang didokumentasikan oleh kawalan. Buktikan program dalam simulator kawalan anda sendiri dan di udara dahulu.

## Persediaan

Pada tab **Persediaan**:

- **Paksi alat** ialah paksi gelendong, iaitu Z larik. Bahagian depan bahagian berada di +Z; cekam memegang hujung yang satu lagi.
- **Bahan mentah**: pilih {{ui:Cylinder}}, iaitu bar. Ofset atasnya ialah apa yang dibuang oleh potongan muka.
- **Asal kerja**: pusat atas bahan mentah atau atas model meletakkan Z0 pada muka hadapan, tempat yang biasa.
- **Kawalan**: {{ui:Fanuc-style lathe (.nc)}} atau {{ui:LinuxCNC lathe (.ngc)}}. Pasca pengisaran enggan program larik dan memberitahu anda begitu.
- **Kelajuan gelendong maksimum**: had yang kelajuan permukaan dikekalkan di bawahnya.

{{ui:More}} dalam bar alat Pembuatan menyenaraikan tujuh operasi larik di bahagian atas tab **Operasi**. Operasi pertama yang anda tambah membawa alatnya sendiri: **mata larik** (jejari hujung, sudut mata, sudut tepi pemotong) atau **bilah alur** (lebar, jejari bucu, sejauh mana ia sampai). Tukar mereka pada tab **Alat**. Suapan adalah per pusingan, dan kelajuan ialah kelajuan permukaan dalam m/min yang dikekalkan oleh kawalan apabila diameter berubah; beri alat rpm sendiri untuk menetapkan kelajuan sebaliknya.

## Operasi

| Operasi | Apa yang dilakukannya |
|---|---|
| {{ui:Face}} | Muka hadapan bar ke bawah ke bahagian, satu langkah turun pada satu masa, dari luar hingga sedikit melepasi pusat. |
| {{ui:Rough}} | Laluan sepanjang Z berjarak **kedalaman potongan** antara satu sama lain, ke bawah ke garis luar tambah **bahan untuk ditinggalkan**; kemudian sekali sepanjang garis luar untuk membuang anak tangga. Lembah antara dua bahu dimasuki dengan tebuk sedalam satu kedalaman potongan. |
| {{ui:Finish}} | Satu laluan sepanjang garis luar pada sebahagian kecil suapan alat. |
| {{ui:Groove}} | Menebuk bilah bersebelahan di mana sahaja ia boleh mengambil lebih daripada had bahan yang masih tinggal: alur yang tidak dapat dicapai oleh mata larik. **Dari / Ke Z** mempersempitkannya. |
| {{ui:Part off}} | Memotong bahagian di belakang muka belakangnya, hingga sedikit melepasi pusat, dengan peck jika anda tetapkan satu. |
| {{ui:Thread}} | Benang luar: diameter utama, pic, panjang, bilangan laluan. Kedalaman 0 bermakna 0.6134 × pic (benang 60°). Setiap laluan mengambil luas cip yang sama; laluan pegas mengulang yang terakhir. |
| {{ui:Drill}} | Gerudi pada garisan pusat ke kedalaman, dengan peck. |

## Bagaimana alat dijauhkan daripada bahagian

Mata diperlakukan sebagai apa adanya: bulatan hujungnya, dan di belakangnya tepi belakang, iaitu garisan lurus yang sudutnya ialah 180° tolak sudut tepi pemotong dan sudut mata. Bentuk itu diturunkan ke atas garis luar pada setiap titik sepanjang Z, dan laluan ialah tempat ia berhenti. Jadi:

- **Jejari hujung sudah ada dalam laluan.** Pasca tidak menulis `G41` atau `G42`; koordinatnya ialah titik terprogram alat (bucu segi empat sama di sekeliling hujung).
- Mata **tidak dapat mengikuti dinding yang lebih curam daripada tepi belakangnya**. Alur di belakang bahu dibiarkan, dan operasi kemas memberitahu berapa banyak garis luar yang tidak dapat dicapainya. Operasi {{ui:Groove}} mengambilnya.
- Bahan mentah dijejak sepanjang Z selepas setiap potongan, jadi pengasaran tidak memotong udara, pengalur mencari apa yang tinggal, dan setiap operasi menunjukkan isipadu yang dibuangnya dan sama ada ia memotong ke dalam bahagian.

## Had

- **Pemesinan luar sahaja**: tiada bar gerudi, tiada alur dalam atau benang dalam, tiada alur muka.
- Satu gelendong, bahagian dipegang pada −Z. Tiada sub-gelendong, tiada alat hidup, tiada paksi C atau Y, tiada pergerakan rehat tetap atau tailstock.
- Laluan ialah pergerakan lurus: lengkung ialah garisan pendek dalam toleransi (tiada `G2`/`G3`), dan pengasaran serta penguliran ditulis laluan demi laluan (tiada kitaran `G71` atau `G76`).
- Penguliran ialah laluan lurus dengan penarikan keluar lurus pada hujungnya; beri benang satu alur kelegaan. Benang tidak ditunjukkan dalam bahan mentah.
- Penggerudian pada pusat tidak mengubah model bahan mentah.
- Pemegang, menara dan cekam tidak diperiksa. Tetapkan **Berhenti pada Z** untuk menjauhkan alat dari rahang.
- Suapan dan kelajuan ialah nilai permulaan, sama seperti untuk pengisaran.
