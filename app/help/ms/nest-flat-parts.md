---
title: Susun bahagian rata pada helaian
summary: Letakkan bahagian rata pada plat atau gulungan dengan sisa seminimum yang boleh dicari PartCraft, tidak pernah lebih rapat daripada jarak yang anda tetapkan, dan simpan susunan sebagai DXF untuk laser, plasma, waterjet atau router.
keywords: nesting, susun, helaian, plat, gulungan, laser, plasma, waterjet, router, pemotongan, hasil, penggunaan bahan, sisa buangan, pembaziran, jarak, kerf, bijian, arah gulungan, dxf, corak rata, garis luar
from: 8dcce1a6
---

**Nesting** meletakkan banyak bahagian rata pada satu helaian supaya bahan yang tertinggal adalah seminimum yang mungkin. PartCraft meletakkan bahagian satu demi satu, setiap satu di tempat yang memendekkan panjang helaian yang digunakan, mencuba beberapa susunan dan selesai dalam beberapa saat, dan menyimpan yang terbaik. Bahagian boleh diletakkan di dalam lubang bahagian lain dan dalam rongga huruf L atau U.

## Buka

- {{ui:Eksport}} › {{ui:Susun bahagian rata pada helaian…}} membuka tetingkap ini dengan corak rata bahagian itu, atau — dalam himpunan — dengan corak rata setiap bahagian kepingan logam, sebanyak bilangan salinannya.
- Pada bahagian kepingan logam, {{ui:Ratakan}} dan kemudian {{ui:Susun pada helaian…}} di bawah corak rata.
- {{ui:Tambah garis luar daripada DXF…}} menambah setiap garis luar tertutup dalam fail DXF sebagai bahagian: lukisan daripada CadCraft yang disimpan sebagai DXF, atau fail daripada perisian pemotong anda sendiri. Garis luar di dalam garis luar lain ialah lubang di dalamnya. Garisan dan lengkok yang bersambung hujung ke hujung dikira sebagai satu garis luar. Fail dalam inci, sentimeter atau meter ditukar kepada milimeter.

:::note
Meratakan kepingan logam memerlukan kernel geometri tepat (lihat [Kepingan logam](topic:sheet-metal)). Garis luar daripada fail DXF sentiasa berfungsi.
:::

## Tetapkan

Untuk setiap bahagian, beri **berapa** yang anda perlukan dan **arah bijiannya**: {{ui:Mana-mana arah}}, {{ui:Sepanjang helaian (seperti dilukis)}} untuk helaian berus atau digulung yang mesti berjalan satu arah, atau {{ui:Melintang helaian}}.

Di bawah **Helaian**:

- **Stok**: {{ui:Plat}} dengan panjang dan lebar tertentu (dan berapa banyak yang anda ada; 0 = sebanyak yang diperlukan), atau {{ui:Gulungan}} dengan lebar tertentu, sepanjang yang diperlukan.
- **Margin tepi** dikekalkan kosong di setiap tepi helaian (untuk pengapit, atau tepi yang tidak rata).
- **Jarak antara bahagian** ialah jarak terkecil antara dua garis potong: sekurang-kurangnya kerf pemotong anda, ditambah apa yang diperlukan oleh bahan.
- **Pusingan**: sudut yang boleh dipusingkan oleh bahagian, setiap 90° secara lalai. Lebih sedikit pusingan berjalan lebih pantas; lebih banyak boleh menggunakan helaian dengan lebih baik.
- **Bahagian boleh diterbalikkan** membenarkan bahagian diletakkan terbalik. Biarkan ia tidak ditanda untuk kepingan logam: corak rata yang diterbalikkan akan membengkok ke arah yang bertentangan.

Tekan {{ui:Susun}}. Pratonton menunjukkan setiap helaian; fakta menyatakan berapa plat (atau berapa banyak gulungan) yang digunakan dan berapa banyak bahan yang diambil oleh bahagian. Mana-mana bahagian yang tidak muat akan dinamakan.

## Simpan

{{ui:Simpan DXF}} menulis susunan sebagai DXF (R12, milimeter), satu helaian di bawah helaian yang lain: garis luar helaian pada lapisan SHEET, bahagian pada PARTS (lengkok dikekalkan sebagai lengkok), dan nama setiap bahagian pada LABELS.

:::tip
Mencampurkan beberapa bahagian biasanya memberi susunan yang lebih baik daripada banyak salinan satu bahagian: bahagian kecil mengisi ruang di antara yang besar.
:::

## Potong helaian (G-code)

**Eksport › Helaian tersusun ke G-code** membaca DXF tersusun (yang ini, atau helaian add-on Cabinets dalam CadCraft) dan menghasilkan satu program bagi setiap helaian melalui pos yang anda pilih: lubang dan potongan dahulu, kemudian garis luar, setiap potongan pada jejari alat di luar bahagian, menembusi helaian dan 1 mm lagi, dengan tab jika anda memintanya. Senarai pos ialah pos terbina dalam serta pos kajian Pembuatan anda sendiri. Semak setiap program dalam simulator sebelum anda menjalankannya: penggerudian dan poket tidak dihasilkan.

## Apa yang perlu disemak

PartCraft menyemak setiap susunan sekali lagi pada bentuk sebenar (bukan grid yang digunakan untuk mencari): tiada dua bahagian lebih rapat daripada jarak, dan tiada apa-apa dalam margin. Ia tidak merancang potongan: lead-in, susunan pemotongan, memotong tepi yang dikongsi sekali sahaja dan mengekalkan helaian sisa ialah tugas perisian pemotong anda. Semak DXF di sana sebelum memotong.
