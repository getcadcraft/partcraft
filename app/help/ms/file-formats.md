---
title: Format fail
summary: Setiap fail yang dibaca dan ditulis PartCraft, dengan sambungan, unit, paksi dan apa yang dikekalkan atau hilang bagi setiap satu.
keywords: format, jenis fail, sambungan, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, jejaring, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unit, Z ke atas
from: 4d0ecbee
---

| Format | Sambungan | Buka | Simpan atau eksport | Unit | Paksi ke atas | Mengekalkan |
|---|---|---|---|---|---|---|
| Bahagian PartCraft | `.partcraft.json` | Ya | {{ui:Simpan}} | mm | Y | Sejarah penuh: lakaran, hubungan, dimensi, ciri, penggantungan, gulung balik, tetapan lengkung, tetapan lukisan dan GD&T, teks STEP yang diimport dalam binaan terdahulu |
| Himpunan PartCraft | `.partcraft-asm.json` | Ya | {{ui:Simpan}} dalam himpunan | mm | Y | Setiap bahagian (dibenamkan), salinan dan kedudukannya, sambungan |
| STL (binari atau teks) | `.stl` | Ya, sebagai jasad pepejal: [Buka STL, OBJ atau 3MF](topic:open-meshes) | {{ui:STL, untuk percetakan 3D}} | mm (ditanya semasa dibuka) | Z | Segi tiga pepejal sahaja |
| 3MF | `.3mf` | Ya, sebagai jasad pepejal | {{ui:3MF, untuk percetakan 3D}} | mm (dinyatakan dalam fail) | Z | Pepejal sebagai satu objek jejaring |
| OBJ | `.obj` | Ya, sebagai jasad pepejal (muka sahaja) | Tidak | ditanya semasa dibuka | Z atau Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ya, sebagai jasad pepejal yang dibaca sebagai segi tiga (muka melengkung dilukis sebagai fasetan; muka rata, silinder, kon, sfera dan torus fail itu dikekalkan untuk eksport tepat): [Buka fail STEP](topic:import-step) | | mm (daripada unit fail) | Z, atau Y jika anda nyatakan | Pepejal dan jasad permukaan, himpunan dengan setiap bahagian di tempatnya; tiada warna, nama, pokok himpunan atau PMI |
| `.3dm` | `.3dm` | Ya, sebagai satu jasad pepejal daripada jejaring dan permukaannya (jejaring pemaparan yang disimpan, jika tidak ditesselasi): [Buka model .3dm](topic:open-3dm-files) | | Daripada unit fail | Z, atau Y jika anda nyatakan | Jejaring, poli-permukaan, ekstrusi dan penempatan blok sebagai satu jasad; tiada lengkung, warna, lapisan atau nama |
| STEP AP242, tepat | `.step` | | {{ui:STEP AP242 (pepejal tepat)}} | mm | Z | Satu pepejal tepat: muka rata, silinder, kon, sfera dan torus pada permukaan benarnya, bulatan dan garisan benar sebagai tepi; sisi splin, benang yang dimodelkan, jasad daripada fail jejaring dan muka splin fail STEP kekal sebagai fasetan. STEP untuk digunakan dengan program CAD dan CAM lain |
| STEP AP214, tepat | `.step` | | {{ui:STEP AP214 (pepejal tepat)}} | mm | Z | Pepejal tepat yang sama dalam skema AP214 yang lebih lama, untuk program yang hanya membaca skema itu |
| STEP AP242, berfaset | `.step` | | {{ui:STEP (berfaset, kernel jejaring)}} | mm | Y | Pepejal tertutup muka rata: permukaan bulat sebagai fasetan. Untuk program yang menolak fail tepat |
| STEP AP214, berfaset | `.step` | | {{ui:STEP AP214 (berfaset, kernel jejaring)}} | mm | Y | Pepejal yang sama dalam skema AP214 yang lebih lama, untuk program yang hanya membaca skema itu |
| Pakej USD | `.usdz` | Tidak | {{ui:Pakej USD (.usdz)}} | m | Z | Pepejal dengan bahannya, isipadu dan jisim; himpunan dengan setiap bahagian sekali dan setiap salinan diletakkan: [Eksport sebagai USD](topic:usd) |
| IFC 4 | `.ifc` | Tidak | {{ui:IFC 4 (dengan setiap sifat)}} | mm | Z | Bentuk sebagai segi tiga, bahan, setiap parameter, blok tajuk, kuantiti; bahagian himpunan sebagai jenis dan salinannya diletakkan |
| DXF R12, lakaran | `.dxf` | Tidak | {{ui:DXF bagi lakaran atau muka rata}} dengan lakaran dipilih | mm | x, y lakaran sendiri | Garisan, lengkok dan bulatan benar, titik; lapisan PROFILE, CONSTRUCTION, POINTS |
| DXF R12, muka | `.dxf` | Tidak | {{ui:DXF bagi lakaran atau muka rata}} dengan muka rata dipilih | mm | x, y muka sendiri | Garis luar muka: lubang bulat sebagai bulatan benar, yang lain sebagai polilgaris tertutup (tepi bulat sebagai fasetan) |
| Lukisan PDF | `.pdf` | Tidak | {{ui:Lukisan (PDF): paparan, keratan, perincian, GD&T}} | mm pada helaian A3 | | Paparan depan, atas, kanan, isometrik, keratan dan perincian dilukis daripada fasetan, garisan tersembunyi, saiz keseluruhan, simbol GD&T, blok tajuk |

## Fail PartCraft

Kedua-duanya ialah teks biasa (JSON). Pepejal tidak pernah disimpan: PartCraft membinanya semula daripada sejarah, jadi fail kekal kecil dan sentiasa sepadan dengan sejarah.

- Setiap fail mempunyai nombor versi. Binaan ini menulis setiap fail bahagian dengan versi terendah yang memuatkan apa yang digunakannya (2 hingga 5; jasad yang dibuat daripada jejaring memerlukan 5) dan membuka setiap versi lama. Fail daripada PartCraft yang lebih baharu ditolak dengan mesej yang menamakan kedua-dua versi.
- Setiap nilai disemak apabila fail dibuka. Nama kehilangan aksara kawalan; nombor di luar julat, rujukan kepada ciri yang hilang dan jenis ciri yang tidak diketahui ditolak dengan sebab yang jelas.
- Jangan sunting fail ini dengan tangan melainkan anda tahu formatnya. Fail yang gagal semakan tidak akan dibuka.
- Bahagian dengan pepejal STEP besar yang diimport dalam binaan terdahulu boleh melebihi 50 MB, saiz paling besar yang PartCraft buka sebagai fail bahagian (lihat [Penyelesaian masalah](topic:troubleshooting#file-problems)).

## Fasetan dan ketepatan

STL dan 3MF sentiasa terdiri daripada fasetan, pada tetapan **Lengkung**, dan begitu juga DXF muka kecuali lubang bulat, yang merupakan bulatan benar. DXF lakaran mempunyai lengkok dan bulatan benar, kerana ia datang terus daripada lakaran. Versi ini membina setiap bahagian dengan kernel jejaring, jadi paparan lukisan (termasuk keratan) turut berfasetan. Eksport STEP tepat ialah pengecualian: kernel mengetahui permukaan benar setiap muka daripada lakaran (atau daripada fail STEP tempat jasad dibuka), jadi muka bulat ditulis sebagai silinder, kon, sfera dan torus yang benar tanpa mengira tetapan **Lengkung** (lihat [Eksport untuk percetakan, STEP dan DXF](topic:export-files#for-other-cad-programs-step)).

## Tidak disokong dalam binaan ini

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (masuk atau keluar); eksport OBJ | Belum dibina |
| DWG | Ditulis hanya oleh [pek varian](topic:variant-pack), sebagai helaian lukisan bagi setiap konfigurasi. Tidak dibaca, dan tiada eksport lain. Eksport DXF; setiap program CAD membuka DXF R12 |
| STEP himpunan dan lukisan himpunan | Belum dibina lagi. Eksport setiap bahagian sebagai STEP tepat; STL, 3MF dan senarai bahan dieksport daripada himpunan |
| Fail bahagian dan himpunan asal program lain (kecuali `.3dm`, yang dibuka sebagai satu jasad) | Belum dibina |

Lihat [Apa yang belum dibina](topic:not-built-yet).
