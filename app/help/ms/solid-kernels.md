---
title: Kernel jejaring
summary: Versi PartCraft ini membina setiap bahagian dengan kernel jejaring yang berjalan dalam pelayar anda. Apa maksudnya bagi muka bulat, isipadu dan fail, cara tahu ia berfungsi, dan ciri mana yang menunggu kernel tepat.
keywords: kernel, jejaring, manifold, tepat, b-rep, berfaset, lengkung, opencascade, occt, fillet perlu kernel tepat, belum dibina, luar talian, webassembly
from: 68d32d16
---

Kernel geometri ialah enjin yang menukar sejarah anda kepada pepejal. Versi PartCraft ini mempunyai satu: **kernel jejaring** (manifold-3d). Ia berjalan pada komputer anda sebagai program WebAssembly kecil dan sedia sebentar selepas aplikasi dibuka. Tiada apa tentang bahagian anda dihantar ke mana-mana.

| | Kernel jejaring |
|---|---|
| Bentuk bulat | Faset rata. **Lengkung** dalam panel bahagian menetapkan betapa halusnya |
| Isipadu dan luas | Bagi pepejal berfaset, sedikit rendah pada bahagian bulat |
| Lakaran, ekstrud, potong, putar, lubang, corak, cermin, satah rujukan | Ya |
| Fillet dan Chamfer | Pada tepi lurus antara muka rata; bulatan yang bertemu dipotong serong |
| Cangkerang dan Cerun tarik | Cangkerang membuka muka rata (ketebalan dinding tepat); Cerun tarik mencondongkan muka rata |
| Eksport | STL, 3MF, STEP (berfaset), PDF lukisan dan DXF |
| Paparan lukisan | Dilukis daripada faset, termasuk paparan keratan |
| Muka dan tepi | Dinamakan dan dikenali mengikut jenis (rata, silinder, kon, sfera, torus; lurus, bulatan), diambil daripada lakaran: ruang kerja Simulasi, Generatif dan Pembuatan, Ukur, pemilihan dan jadual lubang menggunakannya |

Cip di hujung kanan bar status berkata **Kernel jejaring** semasa ia membina bahagian anda.

## Apa yang menunggu kernel tepat

Kernel tepat (B-rep) menyimpan bulatan, silinder dan kon yang benar, serta fillet licin pada mana-mana tepi, sweep, loft, permukaan, kepingan logam, rib, beberapa jasad, import STEP dan eksport STEP tepat dibina di atasnya. Binaan makmal PartCraft yang lebih awal menggunakan OpenCascade untuk itu. Lesennya (LGPL) tidak sesuai dengan keluaran ini, di mana setiap aplikasi ialah Apache-2.0 dan hanya menggunakan perpustakaan berlesen permisif, jadi ia tidak disertakan. Tiada tarikh untuk ini.

Sehingga itu, ciri tersebut menunjukkan **Belum dibina** apabila anda memilihnya: bar status memberi sebabnya, dan tooltip butangnya berakhir dengan "belum dibina (memerlukan kernel tepat)". [Apa yang belum dibina](topic:not-built-yet) menyenaraikan setiap satu dengan apa yang perlu dilakukan sebagai gantinya.

Bahagian yang dibuat dengan ciri-ciri ini dalam binaan terdahulu masih dibuka. Ciri tersebut kekal dalam sejarah, ditandakan sebagai belum dibina (letakkan penunjuk pada satu untuk sebabnya); bahagian yang lain dibina, dan penyimpanan mengekalkannya tanpa perubahan.

## Muka bulat dan Lengkung

Kernel jejaring melukis bulatan sebagai poligon. **Lengkung** dalam panel bahagian menetapkan berapa banyak sisi bagi bulatan penuh; lebih banyak sisi kelihatan lebih licin dan lebih hampir dengan nilai sebenar, dan mengambil masa lebih lama untuk dibina. Isipadu, luas dan jarak daripada {{ui:Ukur}} ialah bagi pepejal berfaset ini: untuk lubang atau bonjolan ia sedikit lebih kecil daripada bentuk bulat sebenar.

## Dalam talian dan luar talian

Kernel jejaring ialah sebahagian daripada muat turun aplikasi itu sendiri. Untuk bekerja tanpa sambungan, simpan PartCraft untuk kegunaan luar talian semasa anda dalam talian: pilih {{ui:Simpan untuk luar talian}} dalam bar aplikasi dan tunggu sehingga ia berkata **Sedia untuk luar talian**. Butiran: [Bekerja luar talian](common:offline).
