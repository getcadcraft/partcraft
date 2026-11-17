---
title: Finishing 3D: paralel dan scallop
summary: Selesaikan seluruh permukaan melengkung model dengan pahat ujung bola, bull nose, atau datar, dalam garis paralel pada sudut apa pun, atau dalam lintasan berjarak tertentu sehingga puncak di antaranya mempertahankan tinggi yang Anda minta. Apa yang dijamin lintasan, dan apa yang tidak.
keywords: finishing 3d, finishing, paralel, raster, scallop, scallop konstan, cusp, ball nose, bull nose, permukaan, toleransi, stepover, lereng, stok yang ditinggalkan, drop cutter, gouge
from: e1587d0a
---

Dua operasi di Manufacture memotong **seluruh permukaan model** dengan pahat yang dijaga tegak (tiga sumbu). Keduanya tidak memerlukan pilihan; mereka bekerja pada seluruh bagian model yang dapat dilihat dari atas. Kasarkan part terlebih dahulu (adaptif atau kantong); lintasan finishing di atas stok yang belum terpotong memberi peringatan bahwa ia akan memotong terlalu dalam.

## Paralel

Garis lurus melintasi model pada **sudut** yang Anda atur, berjarak **stepover** (pecahan dari diameter pahat). Setiap garis mengikuti permukaan: ujung pahat setinggi yang diperlukan agar tidak ada bagian pahat yang berada di bawah model, dan garis dipotong lebih halus di mana permukaan melengkung. Dengan **Zig-zag** menyala, pahat tetap turun di antara garis jika aman dilakukan (diperiksa sepanjang gerakan); jika tidak, ia terangkat.

- **Toleransi**: seberapa jauh bagian lurus sebuah garis boleh berjarak dari ketinggian ujung yang sebenarnya (setengahnya dipakai sebagai batas di tengah setiap bagian). Bawaan 0.01 mm.
- **Hanya di mana permukaan setidaknya … dan paling banyak … (°)**: selesaikan hanya area yang landai atau hanya yang curam. Di mana permukaan berada di luar rentang, garis dilewatkan dan pahat terangkat.
- **Stok yang ditinggalkan**: model di-offset sejauh itu (pahat diperbesar dengan jarak itu: tepat untuk pahat ball dan bull nose; pahat datar meninggalkan minimal sebesar itu).
- **Bawah**: tidak ada yang dipotong di bawah z ini.

## Scallop

Lintasan yang menjaga jarak konstan di atas permukaan satu sama lain, sehingga puncak (scallop) yang tersisa di antara dua lintasan bertetangga memiliki **tinggi** yang Anda minta. Jarak diturunkan dari tinggi dan radius bola: s = 2·√(2·R·h − h²), misalnya sekitar 0.69 mm antar lintasan untuk bola Ø6 dan puncak 0.02 mm. Pahat bull nose menggunakan radius sudutnya. Pahat ujung datar ditolak: ia tidak memiliki puncak untuk diukur.

Lintasan dimulai **dari tepi model, masuk ke dalam** atau **dari atas model, turun ke bawah**. Lintasan ini adalah kontur jarak di atas permukaan (bukan kontur ketinggian), sehingga pada lereng mereka berdekatan di denah dan pada bidang datar mereka berjauhan. Jarak diukur pada kisi di atas permukaan dan akurat hingga sekitar 1 %; tinggi puncak tepat di tempat permukaan datar atau melengkung landai, dan perkiraan di tempat ia melengkung cepat. **Climb** menjaga sisi permukaan yang lebih tinggi di sisi kanan pahat.

## Seberapa bagus lintasannya

Yang diperiksa oleh tes, dengan bentuk tertutup atau pencarian brute-force independen dari jejak pahat:

- Ketinggian ujung di bawah pahat tepat untuk pahat bola, bull nose, dan datar pada muka, tepi, dan sudut mesh, dan tidak pernah di atas ketinggian sebenarnya; untuk garis paralel, lintasan tetap berada dalam toleransi darinya, tanpa gouge yang lebih dalam dari itu.
- Panjang lintasan pada bidang miring sesuai dengan bentuk tertutup; lintasan scallop pada bidang berjarak sesuai yang diminta dan puncak di antaranya keluar pada tinggi yang diminta.
- Simulasi stok tidak menunjukkan gouge setelah suatu lintasan dan menampilkan puncak yang tersisa.

Yang bukan merupakan lintasan ini: ia adalah lintasan finishing dasar, bukan seluruh yang ditawarkan sistem produksi.

- Belum dibuat: waterline (z konstan), pembersihan pensil dan sudut, lintasan radial dan spiral, memproyeksikan kurva ke permukaan, deteksi area datar, rest machining, pemeriksaan tabrakan pemegang dan shank, serta kemiringan apa pun pada pahat.
- Pusat pahat tetap di atas model: lintasan berhenti di tepi model alih-alih berjalan melewatinya, sehingga dinding vertikal tepat di tepi tidak difinis sampai ke kakinya.
- Undercut tidak terlihat (permukaan adalah apa yang ditemui pahat dari atas).
- Model adalah mesh dari kernel, sehingga lintasan mengikuti mesh (toleransi chord-nya sekitar 0.0002 dari diagonal part), bukan permukaan eksak.
- Finishing model besar dengan toleransi halus menghasilkan program panjang dengan banyak gerakan pendek. Periksa keluarannya di simulator mesin Anda sebelum memotong.
