---
title: Kemasan 3D: selari dan scallop
summary: Kemaskan seluruh permukaan lengkung model dengan mata pengisar bulat, hujung lebar atau rata, dalam garisan selari pada sebarang sudut atau dalam laluan yang berjarak tertentu supaya rabung di antaranya kekal pada ketinggian yang anda minta. Apa yang dijamin oleh laluan ini, dan apa yang tidak.
keywords: kemasan 3d, kemasan, selari, raster, scallop, scallop malar, cusp, mata bulat, mata hujung lebar, permukaan, toleransi, stepover, cerun, bahan untuk ditinggalkan, drop cutter, gouge
from: 942d2341
---

Dua operasi dalam Pembuatan memotong **seluruh permukaan model** dengan alat dikekalkan tegak (tiga paksi). Kedua-duanya tidak memerlukan pemilihan: ia bekerja pada semua bahagian model yang boleh dilihat dari atas. Kasarkan bahagian dahulu (adaptif atau poket); laluan kemasan ke atas bahan mentah yang belum dipotong akan memberi amaran bahawa ia akan memotong dalam.

## Selari

Garisan lurus merentasi model pada **sudut** yang anda tetapkan, berjarak **stepover** (sebahagian daripada diameter alat). Setiap garisan mengikut permukaan: hujung alat berada setinggi yang perlu supaya tiada bahagian pemotong turun di bawah model, dan garisan dipotong lebih halus di mana sahaja permukaan melengkung. Dengan **Zig-zag** dihidupkan, alat kekal di bawah antara garisan di tempat ia selamat berbuat demikian (diperiksa sepanjang pergerakan); jika tidak, ia naik.

- **Toleransi**: sejauh mana sebahagian lurus garisan boleh tersasar daripada ketinggian hujung sebenar (separuhnya digunakan sebagai had di tengah setiap bahagian). Lalai 0.01 mm.
- **Hanya di tempat permukaan sekurang-kurangnya … dan paling banyak … (°)**: kemas hanya kawasan landai atau hanya kawasan curam. Di tempat permukaan berada di luar julat, garisan itu ditinggalkan dan alat naik.
- **Bahan untuk ditinggalkan**: model diimbangi dengan jarak itu (alat dibesarkan dengannya: tepat untuk alat bulat dan hujung lebar; alat rata meninggalkan sekurang-kurangnya sebanyak itu).
- **Bawah**: tiada apa dipotong di bawah z ini.

## Scallop

Laluan yang mengekalkan jarak malar antara satu sama lain di atas permukaan, supaya rabung (scallop) yang tinggal antara dua laluan bersebelahan mempunyai **ketinggian** yang anda minta. Jarak diperoleh daripada ketinggian dan jejari bola: s = 2·√(2·R·h − h²), contohnya kira-kira 0.69 mm antara laluan bagi bola Ø6 dan rabung 0.02 mm. Alat hujung lebar menggunakan jejari bucunya. Alat hujung rata ditolak: ia tiada rabung untuk disaiz.

Laluan bermula dari **tepi model, bergerak ke dalam**, atau dari **bahagian atas model, bergerak ke bawah**. Ia ialah kontur jarak di atas permukaan (bukan kontur ketinggian), jadi pada cerun ia rapat dalam pelan dan pada permukaan rata ia berjauhan. Jarak diukur pada grid di atas permukaan dan tepat kepada kira-kira 1 %; ketinggian rabung adalah tepat di tempat permukaan rata atau melengkung perlahan, dan anggaran di tempat ia melengkung dengan cepat. **Pengisaran naik** mengekalkan sisi permukaan yang lebih tinggi di sebelah kanan pemotong.

## Betapa baiknya laluan

Apa yang diuji, dengan bentuk tertutup atau carian kasar bebas pada tapak pemotong:

- Ketinggian hujung di bawah alat adalah tepat untuk alat bola, hujung lebar dan rata pada muka, tepi dan bucu jaringan, dan tidak sekali-kali melebihi ketinggian sebenar; bagi garisan selari, laluan kekal dalam toleransi daripadanya, tanpa gouge yang lebih dalam daripada itu.
- Panjang laluan pada satah condong sepadan dengan bentuk tertutup; laluan scallop pada satah berjarak seperti yang diminta, dan rabung di antaranya keluar pada ketinggian yang diminta.
- Simulasi bahan mentah tidak menunjukkan gouge selepas laluan dan menunjukkan rabung yang tinggal.

Apa yang tidak dibuat oleh laluan ini: ia ialah laluan kemasan asas, bukan keseluruhan apa yang ditawarkan oleh sistem pengeluaran.

- Belum dibina: kemasan garis air (z malar), pembersihan pensel dan sudut, laluan jejari dan spiral, unjuran lengkung ke atas permukaan, pengesanan kawasan rata, semakan perlanggaran pemegang dan batang. Pemotongan kasar dan pemesinan baki ialah operasi tersendiri ([Kasar 3D dan pemesinan baki](topic:rough-3d)); alat yang condong ialah [kemasan 5-paksi](topic:multi-axis#5-axis-finishing).
- Pusat alat kekal di atas model: laluan berhenti di tepi model dan tidak terus melepasinya, jadi dinding menegak tepat di tepi tidak dikemas hingga ke pangkalnya.
- Undercut tidak dilihat (permukaan ialah apa yang ditemui alat dari atas).
- Model ialah jaringan daripada kernel, jadi laluan mengikut jaringan (toleransi kordnya kira-kira 0.0002 daripada pepenjuru bahagian), bukan permukaan tepat.
- Kemasan model besar pada toleransi halus menghasilkan program yang panjang dengan banyak pergerakan pendek. Semak output dalam simulator mesin anda sebelum memotong.
