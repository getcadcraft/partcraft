---
title: Finishing 3D: sejajar dan scallop
summary: Selesaikan permukaan lengkung seluruh model dengan end mill bola, bull-nose, atau datar, dalam garis sejajar pada sudut apa pun atau dalam lintasan dengan jarak tertentu, sehingga punggungan di antaranya mempertahankan tinggi yang Anda minta. Apa yang dijamin lintasan dan apa yang tidak.
keywords: finishing 3d, finishing, sejajar, raster, scallop, scallop konstan, cusp, ball nose, bull nose, permukaan, toleransi, stepover, kemiringan, sisa stok, drop cutter, gouge
from: 942d2341
---

Dua operasi di Manufaktur memotong **seluruh permukaan model** dengan alat yang dijaga tegak (tiga sumbu). Keduanya tidak memerlukan pemilihan: keduanya bekerja pada seluruh bagian model yang dapat terlihat dari atas. Lakukan pengasaran pada benda terlebih dahulu (adaptif atau kantong); pass finishing di atas stok yang belum terpotong akan memberi peringatan bahwa alat akan memotong terlalu dalam.

## Sejajar

Garis lurus melintasi model pada **sudut** yang Anda atur, dengan **stepover** di antara garis (sebagian dari diameter alat). Setiap garis mengikuti permukaan: ujung alat berada setinggi yang diperlukan agar tidak ada bagian pemotong yang turun di bawah model, dan garis dipotong lebih halus di mana pun permukaan menekuk. Dengan **Zig-zag** aktif, alat tetap turun di antara garis jika aman (diperiksa sepanjang gerakan); jika tidak, alat naik.

- **Tolerance**: seberapa jauh bagian lurus dari garis boleh menyimpang dari tinggi ujung alat yang sebenarnya (setengahnya dipakai sebagai batas di tengah setiap bagian). Default 0.01 mm.
- **Only where the surface is at least … and at most … (°)**: selesaikan hanya area yang landai atau hanya area yang curam. Di tempat permukaan berada di luar rentang, garis dilewati dan alat naik.
- **Sisa stok**: model yang diofset sejauh jarak itu (pemotong diperbesar sebesar itu: tepat untuk alat bola dan bull-nose; alat datar menyisakan setidaknya sebesar itu).
- **Dasar**: tidak ada yang dipotong di bawah z ini.

## Scallop

Lintasan yang menjaga jarak konstan di atas permukaan dari satu sama lain, sehingga punggungan (scallop) yang tertinggal di antara dua lintasan yang bersebelahan memiliki **tinggi** yang Anda minta. Jaraknya diperoleh dari tinggi dan jari-jari bola: s = 2·√(2·R·h − h²), misalnya sekitar 0.69 mm antar lintasan untuk bola Ø6 dan punggungan 0.02 mm. Bull-nose memakai jari-jari sudutnya. End mill datar ditolak: tidak ada punggungan yang dapat diukur.

Lintasan dimulai **dari tepi model, masuk ke dalam** atau **dari atas model, turun**. Lintasan ini adalah kontur jarak di atas permukaan (bukan kontur tinggi), sehingga pada lereng lintasannya berdekatan dalam denah, dan pada area datar lintasannya berjauhan. Jarak diukur pada grid di atas permukaan dan akurat hingga sekitar 1 %; tinggi punggungan tepat di tempat permukaan datar atau melengkung landai, dan perkiraan di tempat permukaan melengkung cepat. **Climb** menjaga sisi permukaan yang lebih tinggi berada di sebelah kanan pemotong.

## Seberapa baik lintasannya

Yang diperiksa oleh tes, dengan rumus tertutup atau pencarian brute-force independen pada jejak pemotong:

- Tinggi ujung di bawah alat tepat untuk alat bola, bull-nose, dan datar pada muka, tepi, dan sudut mesh, dan tidak pernah di atas tinggi sebenarnya; untuk garis sejajar, lintasan tetap dalam toleransinya, tanpa gouge yang lebih dalam dari itu.
- Panjang lintasan pada bidang miring sesuai dengan rumus tertutup; lintasan scallop pada bidang berjarak sesuai yang diminta dan punggungan di antaranya muncul pada tinggi yang diminta.
- Simulasi stok tidak menunjukkan gouge setelah suatu pass dan menampilkan punggungan yang tersisa.

Yang bukan termasuk lintasan ini: ini adalah lintasan finishing dasar, bukan seluruh yang ditawarkan sistem produksi.

- Belum dibuat: finishing waterline (z konstan), pembersihan pensil dan sudut, lintasan radial dan spiral, memproyeksikan kurva ke permukaan, deteksi area datar, pemeriksaan tabrakan holder dan shank. Pengasaran dan pemesinan sisa adalah operasi tersendiri ([Pengasaran 3D dan pemesinan sisa](topic:rough-3d)); alat yang miring adalah [finishing 5 sumbu](topic:multi-axis#5-axis-finishing).
- Pusat alat tetap di atas model: lintasan berhenti di tepi model alih-alih melewatinya, sehingga dinding vertikal tepat di tepi tidak diselesaikan sampai ke kakinya.
- Undercut tidak terlihat (yang terlihat adalah permukaan yang ditemui alat dari atas).
- Model adalah mesh dari kernel, sehingga lintasan mengikuti mesh (toleransi chord-nya sekitar 0.0002 dari diagonal benda), bukan permukaan eksak.
- Finishing model besar dengan toleransi halus menghasilkan program panjang dengan banyak gerakan pendek. Periksa keluaran di simulator mesin Anda sendiri sebelum memotong.
