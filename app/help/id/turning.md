---
title: Bubut pada mesin bubut
summary: Muka, kasar, finishing, alur, potong benda, ulir, dan bor pada benda bubut, dari garis luar yang dibentuk benda saat berputar. Alat bubut, feed per putaran, post mesin bubut, dan apa yang belum terbukti.
keywords: bubut, mesin bubut, membubut, facing, pengasaran, finishing, alur, grooving, potong benda, parting, cut off, ulir, threading, g32, g33, g96, kecepatan permukaan konstan, css, radius ujung, insert, batang, chuck, diameter, feed per putaran, g71, g76
from: d8cc53b0
---

Manufaktur memiliki tujuh operasi untuk mesin bubut. Mereka bekerja pada benda apa pun: yang dipotong adalah **garis luar yang dibentuk benda saat berputar** terhadap pusat stok, sehingga benda yang tidak bulat dibubut turun ke bentuk bulat yang menahannya.

**Tidak ada di sini yang pernah dijalankan pada mesin bubut.** Lintasannya diperiksa terhadap geometri oleh tes; kedua post mesin bubut mengikuti kode dokumentasi kontrol. Buktikan program di simulator kontrol Anda sendiri dan di udara lebih dulu.

## Atur

Pada tab **Setup**:

- **Sumbu alat** adalah sumbu spindel, yaitu Z mesin bubut. Bagian depan benda berada di +Z; chuck memegang ujung lainnya.
- **Stok**: pilih {{ui:Silinder}}, batangnya. Offset atasnya adalah yang dihapus oleh potongan muka.
- **Titik asal benda kerja**: pusat di atas stok atau atas model menempatkan Z0 di muka depan, tempat yang biasa.
- **Kontrol**: {{ui:Mesin bubut gaya Fanuc (.nc)}} atau {{ui:Mesin bubut LinuxCNC (.ngc)}}. Post frais menolak program bubut dan menyatakannya.
- **Kecepatan spindel maks**: batas yang dipertahankan oleh kecepatan permukaan.

{{ui:Lainnya}} di bilah alat Manufaktur mencantumkan ketujuh operasi bubut di bagian atas tab **Operasi**. Operasi pertama yang Anda tambahkan membawa alatnya sendiri: sebuah **insert bubut** (radius ujung, sudut insert, sudut tepi potong) atau **bilah alur** (lebar, radius sudut, seberapa dalam ia mencapai). Ubah di tab **Alat**. Feed adalah per putaran, dan kecepatannya adalah kecepatan permukaan dalam m/menit yang dipertahankan kontrol saat diameter berubah; beri alat rpm sendiri untuk mengunci kecepatannya.

## Operasi

| Operasi | Yang dilakukannya |
|---|---|
| {{ui:Muka}} | Memuka bagian depan batang sampai ke benda, satu step down setiap kali, dari luar sampai sedikit melewati pusat. |
| {{ui:Kasar}} | Pass sepanjang Z berjarak **kedalaman potong**, turun sampai garis luar ditambah **sisa stok**; lalu sekali sepanjang garis luar untuk menghilangkan anak tangga. Lembah di antara dua bahu dimasuki dengan plunge sebesar satu kedalaman potong. |
| {{ui:Finishing}} | Satu pass sepanjang garis luar pada sebagian feed alat. |
| {{ui:Alur}} | Menusuk bilah berdampingan di tempat ia dapat mengambil lebih banyak daripada batas stok yang masih tersisa: alur yang tidak dapat dijangkau insert bubut. **Dari / Sampai Z** mempersempitnya. |
| {{ui:Potong benda}} | Memotong benda tepat di belakang muka belakangnya, sampai sedikit melewati pusat, dengan peck bila Anda mengaturnya. |
| {{ui:Ulir}} | Ulir luar: diameter mayor, pitch, panjang, jumlah pass. Kedalaman 0 berarti 0.6134 × pitch (ulir 60°). Setiap pass mengambil luas serpihan yang sama; pass pegas mengulang yang terakhir. |
| {{ui:Bor}} | Bor pada garis pusat sampai kedalaman, dengan peck. |

## Bagaimana alat dijaga tidak menyentuh benda

Insert diperlakukan sebagaimana adanya: lingkaran ujungnya, dan di belakangnya tepi belakang, sebuah garis lurus yang sudutnya 180° dikurangi sudut tepi potong dan sudut insert. Bentuk itu diturunkan ke garis luar di setiap titik sepanjang Z, dan lintasannya adalah tempat ia berhenti. Jadi:

- **Radius ujung sudah termasuk dalam lintasan.** Post tidak menulis `G41` atau `G42`; koordinatnya adalah titik terprogram alat (sudut persegi di sekeliling ujung).
- Insert **tidak dapat mengikuti dinding yang lebih curam dari tepi belakangnya**. Alur di belakang bahu dibiarkan, dan operasi finishing menyatakan berapa banyak yang tidak dapat dijangkaunya. Operasi {{ui:Alur}} mengambilnya.
- Stok dilacak sepanjang Z setelah setiap potongan, sehingga pengasaran tidak memotong udara, alur memeriksa apa yang tersisa, dan setiap operasi menampilkan volume yang dibuangnya dan apakah ia memotong ke dalam benda.

## Batasan

- **Hanya bubut luar**: tidak ada batang bor, tidak ada alur atau ulir dalam, tidak ada alur muka.
- Satu spindel, benda dipegang di −Z. Tidak ada sub-spindel, tidak ada alat hidup, tidak ada sumbu C atau Y, tidak ada gerakan steady rest atau tailstock.
- Lintasan adalah gerakan lurus: kurva adalah garis pendek dalam toleransi (tanpa `G2`/`G3`), dan pengasaran serta ulir ditulis pass demi pass (tanpa siklus `G71` atau `G76`).
- Ulir adalah pass lurus dengan penarikan lurus di ujungnya; beri ulir alur pelepas. Ulir tidak ditampilkan dalam stok.
- Pengeboran di pusat tidak mengubah model stok.
- Holder, turret, dan chuck tidak diperiksa. Atur **Berhenti di Z** untuk menjaga alat tetap jauh dari rahang.
- Feed dan kecepatan adalah nilai awal, seperti pada frais.
