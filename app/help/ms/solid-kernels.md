---
title: Kernel jejaring
summary: Versi PartCraft ini membina setiap bahagian dengan kernel jejaring yang berjalan dalam pelayar anda. Maksudnya untuk bentuk bulat, isipadu dan fail, cara mengetahui ia berfungsi, dan ciri mana yang menunggu kernel tepat.
keywords: kernel, jejaring, manifold, tepat, b-rep, berfaset, lengkung, opencascade, occt, fillet perlu tepat, belum dibina, luar talian, webassembly
from: f931645c
---

Kernel geometri ialah enjin yang menukar sejarah anda menjadi pepejal. Versi PartCraft ini mempunyai satu: **kernel jejaring** (manifold-3d). Ia berjalan pada komputer anda sebagai program WebAssembly kecil dan sedia sebentar selepas aplikasi dibuka. Tiada apa tentang bahagian anda dihantar ke mana-mana.

| | Kernel jejaring |
|---|---|
| Bentuk bulat | Muka rata berfaset. **Lengkung** dalam panel bahagian menetapkan betapa halusnya |
| Isipadu dan luas | Bagi pepejal berfaset, sedikit rendah pada bahagian bulat |
| Lakaran, ekstrud, potong, putar, lubang, corak, cermin, satah rujukan | Ya |
| Fillet dan Chamfer | Pada tepi lurus antara muka rata; pembundaran yang bertemu dipotong serong |
| Cangkerang dan Cerun tarik | Cangkerang membuka muka rata (ketebalan dinding tepat); Cerun tarik mencondongkan muka rata |
| Eksport | STL, 3MF, STEP (tepat: muka bulat ditulis pada permukaan sebenar mereka; atau berfaset), lukisan PDF dan DXF |
| Paparan lukisan | Dilukis daripada fasetnya, termasuk paparan keratan |
| Muka dan tepi | Dinamakan dan dikenali mengikut jenis (rata, silinder, kon, sfera, torus; lurus, bulatan), diambil daripada lakaran: ruang kerja Simulasi, Generatif dan Pembuatan, Ukur, pemilihan dan jadual lubang menggunakannya |

Cip berhampiran hujung kanan bar status menyatakan **Kernel jejaring** semasa ia membina bahagian anda.

## Apa yang menunggu kernel tepat

Kernel tepat (B-rep) mengekalkan bulatan, silinder dan kon yang benar, dan fillet licin pada mana-mana tepi, sweep, loft, permukaan, kepingan logam, rusuk, beberapa jasad dan import STEP dengan muka melengkung yang dikekalkan tepat dibina atasnya. (Eksport STEP tepat tidak menunggunya: kernel jejaring mengetahui permukaan sebenar setiap muka daripada lakaran, dan eksport menulisnya.) Versi makmal PartCraft terdahulu menggunakan OpenCascade untuk itu. Lesennya (LGPL) tidak sesuai dengan keluaran ini, di mana setiap aplikasi ialah Apache-2.0 dan hanya menggunakan perpustakaan berlesen permisif, jadi ia tidak disertakan. Tiada tarikh untuk perkara ini.

Sehingga itu ciri-ciri tersebut menyatakan **Belum dibina** apabila anda memilihnya: bar status memberi sebabnya, dan tooltip butangnya berakhir dengan "belum dibina (perlukan kernel tepat)". [Apa yang belum dibina](topic:not-built-yet) menyenaraikan setiap satu dengan apa yang perlu dilakukan sebaliknya.

Bahagian yang dibuat dengannya dalam versi terdahulu masih dibuka. Ciri-ciri itu kekal dalam sejarah ditandakan sebagai belum dibina (letakkan penunjuk pada satu untuk mengetahui sebabnya), bahagian yang lain dibina, dan menyimpan membiarkannya tidak berubah.

## Bentuk bulat dan Lengkung

Kernel jejaring melukis bulatan sebagai poligon. **Lengkung** dalam panel bahagian menetapkan berapa banyak sisi bagi bulatan penuh; lebih banyak sisi kelihatan lebih licin dan mengukur lebih dekat dengan nilai sebenar, serta mengambil masa lebih lama untuk dibina. Isipadu, luas dan jarak daripada {{ui:Ukur}} ialah bagi pepejal berfaset ini: untuk lubang atau bonjol, ia sedikit lebih kecil daripada bentuk bulat.

## Dalam talian dan luar talian

Kernel jejaring ialah sebahagian daripada muat turun aplikasi itu sendiri. Untuk bekerja tanpa sambungan, simpan PartCraft untuk kegunaan luar talian semasa anda dalam talian: pilih {{ui:Simpan untuk luar talian}} dalam bar aplikasi dan tunggu sehingga ia berkata **Sedia luar talian**. Butiran: [Bekerja luar talian](common:offline).
