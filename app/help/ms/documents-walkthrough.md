---
title: Dokumen dan semakan (peti simpanan)
summary: Panduan langkah demi langkah untuk satu kerja sebenar: letakkan folder projek bahagian dan himpunan di bawah kawalan, daftar keluar satu bahagian, ubahnya, daftar masuk dengan nota, keluarkannya, lihat apa yang menggunakannya dan senarai bahan, apa yang dilihat orang kedua semasa fail dikunci, dan cara ia berfungsi dengan folder awan.
keywords: peti simpanan, dokumen, panduan, tutorial, daftar keluar, daftar masuk, semakan, keluaran, luluskan, kunci, sejarah, di mana digunakan, senarai bahan, bom, himpunan, folder awan, folder projek, dua orang, folder dikongsi
from: 0a5e6983
---

## Apa yang akan anda lakukan

Anda ialah Ana, bekerja pada Riverside Clinic bersama rakan sekerja, Ben. Bahagian dan himpunan projek disimpan dalam satu folder yang anda berdua boleh capai (pemacu dikongsi, folder yang diselaraskan, atau folder awan). Menjelang akhir, satu fail telah bergerak daripada salinan pertamanya kepada semakan **A** yang dikeluarkan, telah diubah semula sebagai **B.1**, anda telah melihat siapa yang melakukan apa, dan anda telah melihat apa yang Ben lihat apabila anda memegang fail itu.

Semua disimpan dalam folder tersembunyi `.ccvault` di sebelah fail anda: tiada pelayan, tiada muat naik (folder awan ialah pengecualian, lihat langkah terakhir). Untuk setiap butang dan peraturan di satu tempat, lihat topik *Dokumen: daftar keluar, semakan dan keluaran* jika aplikasi anda memilikinya.

## 1. Sediakan folder projek

1. Pilih {{ui:Documents…}} dalam kumpulan **File** pada bar alat.
2. Pilih {{ui:Choose the project folder}} dan pilih folder yang mengandungi bahagian dan himpunan projek. (Folder projek berfungsi dalam Studio dan dalam pelayar yang boleh membuka folder, seperti Chrome dan Edge. Dalam pelayar lain, panel akan memaklumkannya.)
3. Pilih {{ui:Change}} di sebelah **Anda:** dan taip nama anda, `Ana` (jika diminta, juga nama komputer ini). Panel kini memaparkan *Anda: Ana pada* dan komputer anda. Nama anda disertakan pada setiap perkara yang anda lakukan.
4. Pilih {{ui:Start a vault in this folder}} dan taip nama projek, `Riverside clinic`. Panel memaparkan *Peti simpanan dimulakan untuk Riverside clinic.*

## 2. Letakkan fail di bawah kawalan

1. Buka **Fail tidak dalam peti simpanan** dan pilih {{ui:Add}} di sebelah `plates/Bracket.partcraft.json`.
2. Ia muncul di bawah **Fail dalam peti simpanan** pada semakan **A.1**, keadaan **Kerja sedang dijalankan**. A.1 ialah salinan pertamanya; peti simpanan menyimpan salinan bagi setiap semakan.

## 3. Daftar keluar, ubah, daftar masuk

1. Pilih {{ui:Open}} di sebelah `plates/Bracket.partcraft.json`. Bahagian itu dibuka dalam PartCraft dan panel tertutup supaya anda dapat melihatnya. Buka semula panel daripada {{ui:Documents…}}.
2. Buka semula panel dan pilih {{ui:Check out}}. Baris itu kini memaparkan **Didaftar keluar kepada anda**. Fail kunci telah dibuat dalam `.ccvault/locks`; tiada sesiapa yang lain boleh mendaftar keluar fail ini sehingga anda mendaftar masuknya.
3. Ubah bahagian itu: sunting satu dimensi, tambah satu lubang. Simpan ditolak melainkan fail didaftar keluar kepada anda, dan ia memberitahu sebabnya; Simpan sebagai sentiasa berfungsi untuk salinan milik anda sendiri.
4. Buka panel, pilih {{ui:Check in}} dan taip apa yang berubah (`Alih pintu`). Panel memaparkan *didaftar masuk sebagai A.2*. Fail dalam folder projek kini ialah bahagian yang anda buka, dan kunci telah hilang. Mendaftar masuk tanpa sebarang perubahan mengekalkan semakan.

Jika anda berubah fikiran, {{ui:Undo check-out}} mengembalikan fail tanpa semakan baharu.

## 4. Semak dan keluarkan

1. Pilih {{ui:Send for review}}. Keadaan menjadi **Untuk semakan** dan fail menjadi baca sahaja.
2. Sebelum meluluskan, pilih {{ui:Project settings}} dan senaraikan siapa yang boleh meluluskan (satu nama setiap baris), contohnya `Ben` dan `Carla`, dan tandakan peraturan bahawa pelulus mesti seseorang selain pengarang. Pilih {{ui:Save settings}}. Kini peti simpanan itu sendiri menolak sesiapa yang lain.
3. Ben (atau Carla) pilih {{ui:Approve}} dan taip nama pelulus. Keadaan menjadi **Dikeluarkan** dan semakan menjadi **A**, dengan *diluluskan oleh* dan nama. Fail yang dikeluarkan ialah baca sahaja. {{ui:Send back}} akan mengembalikannya kepada Kerja sedang dijalankan, dengan sebab.

Nama pelulus ialah nama yang ditaip dalam panel; ia ialah rekod siapa yang meluluskan, bukan bukti identiti.

## 5. Semakan baharu

1. Pada fail yang dikeluarkan, pilih {{ui:New revision}}. Anda memegangnya untuk huruf seterusnya.
2. Ubahnya, kemudian {{ui:Check in}}. Semakannya ialah **B.1**, kerja sedang dijalankan. Keluarkannya dengan cara yang sama dan ia menjadi **B**. {{ui:Undo check-out}} sebelum daftar masuk pertama membiarkannya kekal pada **A**.

Huruf semakan berjalan A, B … Z, AA, AB. Jika piawaian anda meninggalkan sesetengah huruf, tetapan projek *Guna urutan ASME Y14.35* melangkau I, O, Q, S, X dan Z untuk semakan seterusnya.

## 6. Lihat apa yang berlaku

Pilih nama fail untuk membuka butirannya:

- **{{ui:History}}**: setiap peristiwa, yang terbaharu dahulu, dengan siapa, komputer mana dan bila: *Didaftar masuk A.2* oleh Ana, *Dikeluarkan* oleh Ben, dan seterusnya.
- **{{ui:Revisions}}**: jadual semakan: setiap semakan yang disimpan, dengan tarikhnya, siapa yang mendaftar masuknya, nota, dan siapa yang meluluskannya. Peti simpanan menyimpan salinan setiap satu dalam `.ccvault/revs`.
- **{{ui:Uses}}**: bahagian bagi sesuatu himpunan.
- **{{ui:Used by}}**: **Digunakan oleh** menyenaraikan setiap himpunan dalam peti simpanan yang memegang bahagian ini: ubah satu braket dan anda tahu himpunan mana yang perlu diperiksa.

## Himpunan: apa yang digunakannya dan senarai bahan

Letakkan satu himpunan (`.partcraft.json`, disimpan daripada mod Himpunan) dalam folder dan tambahkannya. Pilih namanya: **Menggunakan** menyenaraikan bahagian yang dipegangnya, dengan semakan dan keadaan setiap bahagian; **Digunakan oleh** pada satu bahagian menyenaraikan setiap himpunan yang memegangnya. {{ui:Bill of materials (CSV)}} menyimpan keseluruhan senarai bahagian, peringkat demi peringkat, dengan kuantiti, semakan dan keadaan, untuk hamparan. Ubah satu braket, dan **Digunakan oleh** memberitahu anda himpunan mana yang perlu dilihat.

## 7. Apa yang Ben lihat semasa anda memegang fail

Sekarang daftar keluar fail itu semula, dan minta Ben membuka folder projek yang sama pada komputernya dan membuka panel. Pada baris fail itu dia melihat **Didaftar keluar oleh Ana pada** komputer anda **sejak** masa itu, dan tiada butang {{ui:Check out}}. Jika dia cuba juga, peti simpanan menolaknya: kunci ialah fail yang sistem tidak akan buat dua kali, jadi dua orang tidak boleh kedua-duanya memegang fail, walaupun dalam saat yang sama, apabila folder itu berada pada cakera dalam Studio. (Dalam pelayar, folder hanya membenarkan usaha terbaik, dan panel memaklumkannya di bawah **Folder**.)

Jika Ana tiada dan Ben memerlukan fail itu, {{ui:Break check-out}} membebaskannya. Dia mesti menaip sebab; ia masuk ke dalam log bersama nama siapa pendaftaran keluar itu. Apabila projek menyenaraikan pentadbir, hanya mereka yang boleh. Pendaftaran keluar yang lebih lama daripada had lapuk (14 hari secara lalai) ditandakan *sudah lama*. Selepas pemecahan, daftar masuk lewat Ana ditolak, supaya anda berdua tidak dapat menulis ganti antara satu sama lain.

## 8. Folder awan

Folder awan ialah folder projek yang disimpan dalam storan awan pasukan anda, jadi pasukan tidak memerlukan pemacu dikongsi. Dalam Studio, selepas log masuk ke akaun CadCraft anda, panel memaparkan {{ui:Buka folder awan}} di sebelah {{ui:Choose the project folder}}. Pilih dan pilih folder itu, disenaraikan sebagai ruang kerja / folder. Pemilik ruang kerja membuat folder dahulu, dan storan awan pasukan mesti sedang berkuat kuasa. Semua yang di atas berfungsi sama; pelayan membuat kunci, dan ia ketat merentasi orang. Jika anda tidak log masuk, panel meminta anda log masuk. Dalam tab pelayar biasa, butang awan tidak ditawarkan; gunakan Studio.

## Cuba

Lakukan lapan langkah di atas dengan salinan fail sebenar. Untuk langkah dua orang, anda memerlukan orang lain, atau dua tetingkap dengan dua nama. Jika anda mencubanya dengan folder dikongsi sebenar, halaman Ujian komuniti menyenaraikan semakan yang meminta tepat perkara ini, dan ia menerima keputusan.
