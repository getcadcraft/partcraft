---
title: Pemesinan 4 dan 5 sumbu
summary: Beri tahu PartCraft sumbu rotari apa yang dimiliki mesin, miringkan alat untuk operasi frais biasa apa pun, selesaikan permukaan dengan end mill bola yang miring saat memotong, atau putar benda di bawah alat pada sumbu ke-4. Apa yang ditulis ke G-code, dan apa yang belum terbukti.
keywords: 5 sumbu, lima sumbu, 4 sumbu, sumbu keempat, multi sumbu, multiaxis, 3+2, indexed, positional, miring, alat miring, rotari, trunnion, meja, kepala, sumbu a, sumbu b, sumbu c, tcp, rtcp, titik pusat alat, g43.4, waktu invers, g93, kinematika, pivot, swarf, sudut lead
from: c4f1c491
---

Manufaktur dapat menahan alat pada sudut, dan dapat menggerakkan sumbu rotari saat memotong. Tiga hal melakukannya, dari yang paling sederhana ke atas.

**Tidak ada di sini yang pernah dijalankan pada mesin.** Lintasannya diperiksa terhadap geometri oleh tes dan G-code dibaca kembali, tetapi post bawaan mengikuti kode dokumentasi kontrol, bukan mesin apa pun di depan kami. Buktikan program di simulator kontrol Anda sendiri dan di udara sebelum ia menyentuh logam.

## Sumbu rotari mesin

Pada tab **Setup**, {{ui:Sumbu rotari}} menyatakan apa yang dimiliki mesin:

| Pilihan | Mesinnya |
|---|---|
| Tidak ada (3 sumbu) | Mesin frais biasa. Operasi apa pun yang memerlukan alat miring memberi peringatan, dan post menolak menuliskannya. |
| A (berputar terhadap X) | Satu sumbu rotari sepanjang X: meja sumbu ke-4 atau indexer. Alat hanya dapat miring di bidang Y–Z. |
| B (berputar terhadap Y) | Satu sumbu rotari sepanjang Y. Alat hanya dapat miring di bidang X–Z. |
| A dan C | Sumbu miring terhadap X yang dibawa, atau membawa, putaran terhadap Z: meja trunnion, atau kepala. |
| B dan C | Sama seperti di atas dengan kemiringan terhadap Y. |

Lalu:

- **Dibawa oleh**: {{ui:Meja (benda kerja berputar)}} atau {{ui:Kepala (alat berputar)}}. Meja berputar ke arah yang berlawanan untuk membawa muka yang sama di bawah alat, sehingga tanda setiap sudut mengikuti pilihan ini.
- **Kontrol menjaga ujung alat tetap di lintasan (TCP)**: bila aktif, X Y Z dalam program adalah ujung alat dalam koordinat benda itu sendiri dan kontrol melakukan sisanya (post bawaan gaya Fanuc dan LinuxCNC menulis `G43.4` untuk panjang alat). Bila mati, pada mesin meja, PartCraft menulis X Y Z sebagaimana meja yang berputar membawa benda, terhadap **pusat rotari** yang Anda berikan (dalam koordinat kerja; 0, 0, 0 bila titik asal benda kerja berada di pusat). Mesin dengan kepala memerlukan TCP aktif: tanpanya program membutuhkan panjang pivot mesin, yang tidak diketahui PartCraft.
- **Batas kemiringan**: seberapa jauh sumbu miring bergerak.

Mesin berbeda dalam menganggap arah mana yang positif. Bila sebuah sumbu berputar ke arah yang salah pada mesin Anda, ubah tandanya di salinan post ([Post processor yang dapat Anda sunting](topic:post-processors)).

## Alat miring untuk operasi biasa

Setiap operasi frais (muka, kantong, adaptif, kontur, bor, chamfer, sejajar, scallop, kasar 3D, sisa) memiliki **Kemiringan alat** dan **Miring ke arah**: arah alat untuk operasi itu saja, diukur dari sumbu alat setup. Ini adalah pemesinan 3+2: sumbu rotari pergi ke suatu posisi dan tetap di sana sementara tiga sumbu memotong.

- Ketik kedua sudut, atau tekan {{ui:Alat tegak lurus ke muka}} dan klik sebuah muka datar: alat akan menunjuk lurus ke arahnya.
- Pilih muka dan tepi operasi seperti biasa. Apa yang dihitung sebagai lantai atau lubang dinilai sepanjang alat yang miring.
- Stok untuk arah itu adalah kotak yang memuat stok yang sudah diputar, sehingga tinggi dan clearance aman dari sisi itu.

Dalam G-code, sebelum operasi alat naik, sumbu rotari berputar, dan alat turun di atas titik pertamanya. Pada mesin meja tanpa TCP, busur tetap busur dan siklus bor baku tetap siklus (bingkai yang ditulis hanya berputar terhadap Z). Dengan TCP pada bidang miring, busur menjadi garis pendek dan siklus menjadi gerakan yang diwakilinya.

Simulasi stok menjalankan arah miring **secara mandiri**: ia menunjukkan apa yang dipotong operasi itu dari seluruh stok yang terlihat dari sisinya, dan menemukan gouge di sana, tetapi potongan dari arah lain tidak dibawa.

## Finishing 5 sumbu

{{ui:Lainnya}} di bilah alat Manufaktur mencantumkan operasi ini dan operasi berikutnya di bagian atas tab **Operasi**.

{{ui:5 sumbu}} adalah [pass finishing sejajar](topic:finish-3d) dengan **end mill bola yang miring saat bergerak**. Bola memotong dengan bidang bola, dan bidang itu sama ke arah mana pun alat miring terhadap pusatnya, sehingga bola mengikuti jalur persis seperti yang diberikan pass 3 sumbu dan hanya arah alat yang berubah:

- **Ke arah permukaan**: 1 = tegak lurus terhadap permukaan, 0 = tegak, atau di antaranya.
- **Miring ke depan**: derajat sepanjang arah pemotongan, sehingga pusat diam bola bukanlah yang memotong.
- **Kemiringan maksimum**: alat tidak pernah miring lebih jauh dari ini terhadap sumbu setup.

Di tempat batang akan menyentuh model, kemiringan dikurangi sampai bersih, dan operasi memberi tahu di berapa titik. Setiap pass dimasuki dan ditinggalkan dengan angkatan lurus.

## Finishing rotari (sumbu ke-4)

{{ui:Rotari}} dipakai untuk benda yang dipegang sepanjang **X kerja** pada sumbu rotari. Benda berputar dan end mill bola, yang selalu menunjuk ke sumbu, mengikuti permukaannya:

- **Pass**: {{ui:Sepanjang sumbu}} (garis sepanjang X, berjarak satu stepover putaran) atau {{ui:Mengelilingi benda kerja}} (cincin, berjarak satu stepover X).
- **Sumbu di Y / Z**: di mana sumbu berada. Kosong berarti tengah stok. Pada mesin meja tanpa TCP ini harus pusat rotari di Setup; operasi memberi peringatan bila tidak.
- **Dari / Sampai X** dan **Dari / Sampai sudut**: bagian panjang dan putaran yang dipotong.

Tinggi bola di atas sumbu di setiap titik adalah jatuh sebuah bola yang tepat pada mesh benda, dari sisi itu.

## Batasan

- Finishing 5 sumbu dan rotari hanya menerima **end mill bola**. Tidak ada pemotongan swarf (sisi alat pada dinding bergaris), tidak ada flow line sepanjang arah permukaan itu sendiri, tidak ada pengasaran multi-sumbu, dan tidak ada pemilihan kemiringan otomatis untuk menghindari tabrakan.
- Lintasan 5 sumbu dan rotari **tidak dijalankan melalui simulasi stok**, yang berupa peta tinggi dan tidak dapat memuat potongan yang miring.
- Holder pada finishing 5 sumbu diperiksa terhadap model yang terlihat dari atas; holder, spindel, dan mesin itu sendiri tidak diperiksa di mana pun.
- Finishing rotari hanya memotong apa yang dapat dilihat alat saat memandang ke sumbu.
- Finishing 5 sumbu memerlukan waktu satu menit atau lebih untuk dihitung pada benda besar: shank diperiksa di setiap titik setiap pass.
- Saat sumbu rotari bergerak bersama sumbu linear dan TCP mati, post bawaan menulis feed sebagai waktu invers (`G93`), lalu kembali ke `G94`.
- Tidak ada kode bidang kerja miring (`G68.2` dan sejenisnya) yang ditulis, dan tidak ada batas khusus mesin, unwinding, atau zona tabrakan yang diketahui.
