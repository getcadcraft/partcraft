---
title: Kasar 3D dan pemesinan baki
summary: Kosongkan bahan mentah di sekeliling keseluruhan model aras demi aras dengan mata pengisar rata, hujung lebar atau bulat, dengan meninggalkan bahan untuk kemasan, kemudian biarkan alat yang lebih kecil memotong hanya di tempat alat pertama meninggalkan bahan. Apa yang dijamin oleh laluan ini, dan apa yang tidak.
keywords: kasar 3d, kasar, pengasaran, pemesinan baki, pengasaran baki, bahan yang tinggal, bahan untuk ditinggalkan, langkah turun, aras, aras z, garis air, landai, tebuk, gouge, alat yang lebih kecil
from: 29ddc266
---

Dua operasi dalam Pembuatan, di bawah {{ui:More}} dalam bar alatnya, mengosongkan bahan mentah daripada **seluruh model** dalam 3D, dengan alat dikekalkan tegak (atau sepanjang [arah alat](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operasi itu sendiri). Ia tidak memerlukan pemilihan.

## Kasar 3D

{{ui:3D rough}} bergerak ke bawah dari atas bahan mentah satu **langkah turun** pada satu masa. Pada setiap aras ia mengosongkan semua yang boleh dicapai oleh alat tanpa menyentuh model: baris lurus berjarak **stepover** (sebahagian daripada diameter alat), kemudian sekali mengelilingi tepi kawasan yang boleh dicapainya, supaya dinding diikuti dan tidak ditinggalkan sebagai deretan anak tangga dalam pelan.

- **Bahan untuk ditinggalkan**: sejauh mana alat kekal dari model di mana-mana, untuk laluan kemasan (lalai 0.5 mm).
- **Satu aras di setiap muka rata**: aras tambahan pada ketinggian setiap muka rata model (ditambah bahan untuk ditinggalkan), supaya lantai tidak ditinggalkan hampir keseluruhan satu langkah turun tinggi.
- **Abaikan bahan mentah yang lebih nipis daripada**: bahan yang lebih nipis daripada ini, ke atas atau ke sisi, tidak berbaloi untuk satu laluan (0.05 mm untuk kasar, 0.5 mm untuk pemesinan baki, supaya sehelai rambut yang tertinggal sepanjang dinding tidak menghantar alat yang lebih kecil mengelilingi setiap dinding).
- **Bawah**: tiada apa dipotong di bawah ketinggian ini. Kosong bermakna bahagian bawah model.

Ia bermula daripada bahan mentah **seperti yang ditinggalkan oleh operasi sebelumnya**: selepas laluan muka, ia tidak memotong udara di tempat mata muka telah melalui.

Turun ke bawah: di tempat alat akan bertemu bahan mentah dalam perjalanan turun, ia landai di sepanjang laluannya sendiri pada **sudut landai**, ke belakang dan ke hadapan melebihi paling banyak dua diameter alat. Laluan yang terlalu pendek untuk itu ditebuk lurus ke bawah pada suapan tebuk; operasi mengira laluan sedemikian dan memberi amaran, kerana alat yang tidak memotong di pusatnya tidak sepatutnya berbuat demikian.

## Pemesinan baki

{{ui:Rest}} ialah strategi yang sama untuk **alat yang lebih kecil selepas yang lebih besar**. Ia membaca simulasi bahan mentah dan hanya memotong di tempat bahan masih tertinggal: sudut dalam yang alat besar tidak dapat dipusingkan, slot yang tidak muat untuknya, anak tangga yang ditinggalkannya pada cerun. Di tempat lain ia tidak buat apa-apa, jadi laluannya ialah sebahagian kecil daripada apa yang akan diambil oleh alat yang sama pada bahan mentah baharu.

Letakkannya selepas operasi pengasaran dan pilih alat yang lebih kecil. Ia memerlukan simulasi bahan mentah bagi operasi sebelumnya, yang sentiasa dijalankan oleh ruang kerja.

## Betapa baiknya laluan

- **Tiada gouge.** Kedudukan alat dikira pada grid, dengan pemotong diambil sedikit lebih besar daripada saiz sebenarnya (sebanyak 1.4 sel grid ke sisi, dan sebanyak bahan untuk ditinggalkan), supaya di mana sahaja ia berdiri ia bersih daripada model. Ujian menyemak setiap titik potongan terhadap alat tepat pada jaringan tepat, dan simulasi bahan mentah selepas setiap larian: tiada gouge, tiada pergerakan pantas melalui bahan.
- **Harga untuk itu**: dinding kekal sedikit lebih daripada bahan untuk ditinggalkan, sehingga jumlah yang ditunjukkan sebagai "Extra stock on walls" pada operasi (kira-kira 0.5 mm untuk alat Ø6, kurang untuk yang lebih kecil). Laluan kemasan mengambilnya.

Apa yang tidak dibuat oleh laluan ini:

- Baris ialah garisan lurus, bukan ofset bentuk bahagian atau lengkung penglibatan malar. Ia membuat lebih banyak angkatan dan pergerakan udara daripada strategi ofset atau adaptif, dan baris pertama di setiap aras memotong lebar penuh alat. Bagi poket berlantai rata, [Adaptif](topic:manufacture) ialah pengasaran yang lebih baik.
- Batang dan pemegang alat tidak diperiksa. Amaran memberitahu apabila potongan lebih dalam daripada panjang alur.
- Undercut tidak dilihat: model ialah apa yang ditemui alat semasa turun sepanjang paksinya. Untuk mengasarkan sisi, beri operasi kedua [arah alat condong](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Pemesinan baki hanya mengetahui bahan setakat grid simulasi (sel 0.1 hingga 2 mm, mengikut saiz bahagian).
- Pada bahagian besar, program itu panjang (lebih 100,000 pergerakan untuk flens 200 mm dengan alat Ø6) dan mengambil masa kira-kira seminit untuk dikira, dan setiap perubahan dalam ruang kerja mengira semula keseluruhan program. Gunakan alat terbesar yang muat untuk pengasaran.
- Semak output dalam simulator mesin anda sendiri sebelum memotong.
