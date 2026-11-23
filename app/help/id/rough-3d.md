---
title: Pengasaran 3D dan pemesinan sisa
summary: Kosongkan stok di sekeliling seluruh model level demi level dengan end mill datar, bull-nose, atau bola, dengan meninggalkan stok untuk finishing, lalu biarkan alat yang lebih kecil memotong hanya di tempat alat pertama menyisakan material. Apa yang dijamin lintasan, dan apa yang tidak.
keywords: pengasaran 3d, pengasaran, kasar, pemesinan sisa, pengasaran sisa, stok yang tersisa, sisa stok, step down, level, level z, waterline, rampa, plunge, gouge, alat yang lebih kecil
from: 29ddc266
---

Dua operasi di Manufaktur, di bawah {{ui:Lainnya}} pada bilah alatnya, mengosongkan stok dari **seluruh model** secara 3D, dengan alat dijaga tegak (atau sepanjang [arah alat miring](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operasi itu sendiri). Keduanya tidak memerlukan pemilihan.

## Kasar 3D

{{ui:Kasar 3D}} bekerja turun dari atas stok, satu **step down** setiap kali. Di setiap level ia membersihkan semua yang dapat dijangkau alat tanpa menyentuh model: baris lurus yang berjarak satu **stepover** (sebagian dari diameter alat), lalu sekali mengelilingi tepi area yang boleh dijangkau, sehingga dinding diikuti dan tidak ditinggalkan sebagai deretan anak tangga di denah.

- **Sisa stok**: seberapa jauh alat tetap dari model di mana saja, untuk pass finishing (default 0.5 mm).
- **Satu level di setiap muka datar**: level tambahan di ketinggian setiap muka datar model (ditambah sisa stok), sehingga sebuah lantai tidak ditinggalkan hampir satu step down tingginya.
- **Abaikan stok yang lebih tipis dari**: material yang lebih tipis dari ini, ke atas atau ke samping, tidak layak satu pass (0.05 mm untuk pengasaran, 0.5 mm untuk pemesinan sisa, agar sehelai rambut yang tertinggal di sepanjang dinding tidak membuat alat kecil berkeliling setiap dinding).
- **Dasar**: tidak ada yang dipotong di bawah ketinggian ini. Kosong berarti dasar model.

Ia mulai dari stok **sebagaimana operasi sebelumnya meninggalkannya**: setelah pass muka, ia tidak memotong udara di tempat end mill muka sudah lewat.

Untuk turun: di tempat alat akan bertemu stok dalam perjalanan turun, ia membuat rampa di sepanjang lintasannya sendiri pada **sudut rampa**, maju mundur sejauh paling banyak dua diameter alat. Lintasan yang terlalu pendek untuk itu di-plunge lurus ke bawah pada feed plunge; operasi menghitung jumlahnya dan memberi peringatan, karena alat yang tidak memotong di pusatnya seharusnya tidak melakukannya.

## Pemesinan sisa

{{ui:Sisa}} adalah strategi yang sama untuk **alat yang lebih kecil setelah alat yang lebih besar**. Ia membaca simulasi stok dan hanya memotong di tempat material masih berdiri: sudut dalam yang tidak dapat dimasuki alat besar, celah yang tidak muat untuknya, dan anak tangga yang ditinggalkannya pada lereng. Di tempat lain ia tidak melakukan apa-apa, sehingga lintasannya hanya sebagian kecil dari apa yang akan diambil alat yang sama pada stok baru.

Letakkan setelah operasi pengasaran dan pilih alat yang lebih kecil. Ia memerlukan simulasi stok dari operasi sebelumnya, yang selalu dijalankan oleh workspace.

## Seberapa baik lintasannya

- **Tanpa gouge.** Posisi alat dihitung pada grid, dengan pemotong dibuat sedikit lebih besar dari aslinya (sebesar 1.4 sel grid ke samping, dan sebesar sisa stok), sehingga di mana pun ia berdiri ia bersih dari model. Tes memeriksa setiap titik potong terhadap alat yang tepat pada mesh yang tepat, dan simulasi stok setelah setiap run: tidak ada gouge, tidak ada gerakan rapid yang menembus stok.
- **Harga dari itu**: dinding menyisakan sedikit lebih dari sisa stok, hingga jumlah yang ditampilkan sebagai "Stok ekstra pada dinding" pada operasi (sekitar 0.5 mm untuk alat Ø6, lebih sedikit untuk alat yang lebih kecil). Pass finishing mengambilnya.

Yang bukan termasuk lintasan ini:

- Baris adalah garis lurus, bukan offset dari bentuk benda atau kurva engagement konstan. Mereka membuat lebih banyak angkatan dan gerakan udara daripada strategi offset atau adaptif, dan baris pertama di setiap level memotong lebar penuh alat. Untuk kantong berlantai datar, [Adaptif](topic:manufacture) adalah pengasaran yang lebih baik.
- Badan dan pemegang alat tidak diperiksa. Peringatan muncul bila potongan lebih dalam dari panjang flute.
- Undercut tidak terlihat: model adalah apa yang ditemui alat saat turun sepanjang sumbunya. Untuk mengasarkan sisi, berikan operasi kedua [arah alat miring](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Pemesinan sisa hanya mengetahui stok sebaik grid simulasi (sel 0.1 sampai 2 mm, menurut ukuran benda).
- Pada benda besar, programnya panjang (lebih dari 100.000 gerakan untuk flens 200 mm dengan alat Ø6) dan memerlukan sekitar satu menit untuk dihitung, dan setiap perubahan di workspace menghitung ulang seluruh program. Gunakan alat terbesar yang muat untuk pengasaran.
- Periksa keluaran di simulator mesin Anda sendiri sebelum memotong.
