---
title: Kemasan 3D: selari dan scallop
summary: Kemaskan seluruh permukaan melengkung model dengan mata alat hujung bola, hujung bull-nose atau rata, dalam garisan selari pada sebarang sudut atau dalam laluan yang berjarak tetap supaya rabung di antaranya mengekalkan ketinggian yang anda minta. Apa yang dijamin laluan, dan apa yang tidak.
keywords: kemasan 3d, kemasan, selari, raster, scallop, scallop malar, cusp, hujung bola, bull nose, permukaan, toleransi, stepover, cerun, stok untuk ditinggalkan, drop cutter, gouge
from: e1587d0a
---

Dua operasi dalam Manufacture memotong **seluruh permukaan model** dengan alat kekal tegak (tiga paksi). Ia tidak memerlukan pilihan; ia berfungsi pada semua bahagian model yang boleh dilihat dari atas. Kasarkan bahagian dahulu (adaptif atau poket); laluan kemasan ke atas stok yang belum dipotong akan memberi amaran bahawa ia akan memotong dalam.

## Selari

Garisan lurus merentasi model pada **sudut** yang anda tetapkan, berjarak **stepover** (pecahan diameter alat). Setiap garisan mengikut permukaan: hujung alat berada pada ketinggian yang perlu supaya tiada bahagian pemotong turun di bawah model, dan garisan dipotong lebih halus di mana sahaja permukaan melengkung. Dengan **Zig-zag** dihidupkan, alat kekal turun di antara garisan di tempat ia boleh berbuat demikian dengan selamat (disemak sepanjang pergerakan); jika tidak, ia terangkat.

- **Toleransi**: sejauh mana sebahagian lurus garisan boleh berada daripada ketinggian hujung alat yang benar (separuhnya digunakan sebagai had di tengah setiap bahagian). Lalai 0.01 mm.
- **Hanya di mana permukaan sekurang-kurangnya … dan paling banyak … (°)**: kemaskan hanya kawasan landai atau hanya kawasan curam. Di mana permukaan berada di luar julat, garisan ditinggalkan dan alat terangkat.
- **Stok untuk ditinggalkan**: model diofsetkan sejauh jarak itu (pemotong dibesarkan olehnya: tepat untuk alat bola dan bull-nose; alat rata meninggalkan sekurang-kurangnya jumlah itu).
- **Bawah**: tiada apa dipotong di bawah z ini.

## Scallop

Laluan yang mengekalkan jarak malar antara satu sama lain di atas permukaan, supaya rabung (scallop) yang ditinggalkan di antara dua laluan jiran mempunyai **ketinggian** yang anda minta. Jaraknya diperoleh daripada ketinggian dan jejari bola: s = 2·√(2·R·h − h²), contohnya kira-kira 0.69 mm antara laluan untuk bola Ø6 dan rabung 0.02 mm. Alat bull-nose menggunakan jejari penjurunya. Alat hujung rata ditolak: ia tiada rabung untuk disaizkan.

Laluan bermula **dari tepi model, masuk ke dalam** atau **dari atas model, turun**. Ia ialah kontur jarak di atas permukaan (bukan kontur ketinggian), jadi pada cerun ia rapat dalam pelan dan pada rata ia berjauhan. Jarak diukur pada grid di atas permukaan dan tepat kepada kira-kira 1 %; ketinggian rabung tepat di mana permukaan rata atau melengkung perlahan, dan anggaran di mana ia melengkung dengan cepat. **Climb** mengekalkan sisi permukaan yang lebih tinggi di sebelah kanan pemotong.

## Sejauh mana baiknya laluan

Apa yang diuji, dengan bentuk tertutup atau carian kasar bebas bagi tapak pemotong:

- Ketinggian hujung di bawah alat tepat untuk alat bola, bull-nose dan rata pada muka, tepi dan sudut mesh, dan tidak pernah lebih tinggi daripada ketinggian benar; bagi garisan selari, laluan kekal dalam toleransi daripadanya, tanpa gouge yang lebih dalam daripada itu.
- Panjang laluan pada satah condong sepadan dengan bentuk tertutup; laluan scallop pada satah berjarak seperti yang diminta dan rabung di antaranya keluar pada ketinggian yang diminta.
- Simulasi stok tidak menunjukkan gouge selepas laluan dan menunjukkan rabung yang tinggal.

Laluan ini bukan: ia ialah laluan kemasan asas, bukan keseluruhan apa yang ditawarkan sistem pengeluaran.

- Belum dibina: garis air (z malar), pembersihan pensel dan sudut, laluan jejari dan spiral, unjuran lengkung ke atas permukaan, pengesanan kawasan rata, pemesinan baki, semakan perlanggaran pemegang dan batang, serta sebarang pengetulan alat.
- Pusat alat kekal di atas model: laluan berhenti di tepi model dan tidak berlanjutan melampauinya, jadi dinding menegak tepat di tepi tidak dikemaskan hingga ke tapaknya.
- Undercut tidak dikesan (permukaan ialah apa yang dijumpai alat dari atas).
- Model ialah mesh daripada kernel, jadi laluan mengikut mesh (toleransi kord kira-kira 0.0002 daripada pepenjuru bahagian), bukan permukaan tepat.
- Kemasan model besar pada toleransi halus menghasilkan program panjang dengan banyak gerakan pendek. Semak output dalam simulator mesin anda sendiri sebelum memotong.
