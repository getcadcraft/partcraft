---
title: Eksport untuk percetakan, STEP dan DXF
summary: Eksport bahagian sebagai STL atau 3MF untuk percetakan 3D, sebagai pepejal STEP tepat untuk program CAD dan CAM lain, dan lakaran atau muka rata sebagai DXF untuk pemotongan laser dan waterjet.
keywords: eksport, simpan sebagai, ifc, bim, set sifat, stl, 3mf, percetakan 3d, slicer, step, stp, step tepat, b-rep, ap242, ap214, cam, bengkel mesin, pengisaran, dxf, laser, waterjet, cnc, corak rata, profil, jejaring, berfaset
from: e1de71d5
---

Eksport ialah salinan dalam format lain. Simpan juga fail `.partcraft.json`: ia ialah satu-satunya fail yang boleh dibuka semula dan disunting oleh PartCraft.

Semua eksport berfungsi pada bahagian di skrin, dalam milimeter. Dalam himpunan, STL, 3MF, STEP dan Lukisan (PDF) mengeksport keseluruhan himpunan: lihat [Senarai bahagian, paparan letupan dan bahagian bergerak](topic:assembly-bom-explode). Jika belum ada pepejal: "Tiada pepejal untuk dieksport lagi."

## Untuk percetakan 3D: STL atau 3MF

1. Pilihan: untuk permukaan bulat yang licin, klik ruang kosong supaya tiada apa dipilih, dan tetapkan **Lengkung** kepada **Halus (128 setiap pusingan)** atau **Sangat halus (256 setiap pusingan)** dalam panel kanan. STL dan 3MF sentiasa terdiri daripada segi tiga.
2. Pilih {{ui:Eksport}}, kemudian {{ui:STL, untuk percetakan 3D}} atau {{ui:3MF, untuk percetakan 3D}}.
3. Fail dimuat turun. Bar status menyatakan, contohnya, "Dieksport Part1.stl (binari, mm, Z ke atas, 1536 segi tiga)."

Kedua-dua format ialah **Z ke atas**, seperti yang dijangka oleh pencetak dan slicer. Dunia PartCraft sendiri ialah Y ke atas, jadi eksport memusingkan bahagian: apa yang menghala ke atas dalam PartCraft (tegak lurus dengan satah Top) menghala ke atas dalam slicer, dan bahagian yang dilakar pada satah Top terbaring rata di atas katil. Tetapkan orientasi akhir dalam slicer anda jika perlu.

3MF ialah format yang lebih baharu dan lebih kecil, yang dibaca oleh slicer bersama unit. Gunakan STL jika sesuatu program tidak menerima 3MF.

Untuk menyemak dahulu bahawa bahagian itu tertutup, muat dalam katil pencetak anda dan berdiri di atas muka rata, gunakan {{ui:Eksport}} › {{ui:Semak untuk percetakan 3D (STL atau 3MF)…}}: lihat [Sedia bahagian untuk percetakan 3D](topic:print-3d).

## Untuk program CAD lain: STEP

Pilih {{ui:Eksport}}, kemudian {{ui:STEP AP242 (pepejal tepat)}}. Ia menulis bahagian sebagai satu pepejal tepat, dalam milimeter, diputar ke Z ke atas. Muka bulat ditulis sebagai silinder, kon, sfera dan torus yang benar, dengan bulatan benar untuk tepinya, supaya program lain boleh memilih lubang sebagai lubang. Jasad yang dibuka daripada fail STEP mengekalkan muka rata, silinder, kon, sfera dan torus fail itu, jadi ia turut dieksport dengan tepat. Muka tanpa permukaan sebegitu (sisi splin, benang yang dimodelkan, jasad daripada jejaring STL, OBJ atau 3MF, splin fail STEP, muka yang disapu dan diputar) kekal sebagai fasetan rata dalam pepejal yang sama, dan bar status menyatakan berapa banyak. Bar status menyebut, contohnya, "Dieksport Flange.step (AP242, pepejal tepat, mm, Z ke atas): 14 muka pada permukaan benar mereka (10 silinder, 1 kon, 0 sfera, 0 torus), 0 lengkung tepi dipasang." Ia hanya memuatkan pepejal: tiada sejarah, tiada lakaran, tiada lukisan. Jika program lain hanya membaca AP214, pilih {{ui:STEP AP214 (pepejal tepat)}}: pepejal yang sama dalam skema lama itu.

Apa yang tepat dan apa yang tidak:

- Muka rata, silinder (lubang, tonjolan, fillet pada tepi lurus), kon (lubang kon, cerun tarik), sfera dan torus adalah tepat, begitu juga tepi lurus, bulat dan elipsnya. Tetapan **Lengkung** tidak mengubahnya.
- Di tempat dua muka bulat bersilang (lubang yang digerudi merentasi aci), tepi ialah lengkung licin yang dipasang pada kedua-dua permukaan dalam lingkungan 0.00001 mm; "lengkung tepi dipasang" mengiranya.
- Rongga tertutup di dalam bahagian ditulis sebagai rongga pepejal. Beberapa jasad berasingan ditulis sebagai beberapa pepejal.
- Himpunan belum ditulis sebagai STEP tepat: eksport setiap bahagian.

Ia telah disemak dengan membaca semula fail dalam OpenCascade, yang melaporkan pepejal yang sah dengan isipadu yang dikira secara manual. Ia belum dibuka dalam setiap program CAD atau CAM; jika satu program menolak fail, {{ui:STEP (berfaset, kernel jejaring)}} menulis bentuk yang sama sebagai muka rata (dalam paksi PartCraft sendiri, Y ke atas), dan sila beritahu kami melalui {{ui:Bantuan}} › {{ui:Laporkan masalah}}.

Untuk pemesinan, ruang kerja Manufacture juga menulis pepejal tepat dalam koordinat kerja persediaan itu sendiri: lihat [Buat laluan alat dan G-code](topic:manufacture#exact-step-for-the-shop).

## Untuk program BIM: IFC dengan setiap sifat

Pilih {{ui:Eksport}}, kemudian {{ui:IFC 4 (dengan setiap sifat)}}. Ia menulis bahagian sebagai elemen IFC 4 untuk model bangunan dan loji, bentuknya sebagai segi tiga (Z ke atas, milimeter), dengan maklumat yang diketahui PartCraft tentangnya sebagai set sifat:

| Set sifat | Mengandungi |
|---|---|
| **PartCraft_Part** | Nama, bahan dan ketumpatannya, konfigurasi aktif, berapa banyak jasad; dalam himpunan juga nombor bahagian dan huraian |
| **PartCraft_Parameters** | Setiap parameter bahagian dengan nilainya; ungkapan formula dan nota ada dalam huraian sifat |
| **PartCraft_TitleBlock** | Medan blok tajuk lukisan yang anda isi (tajuk, nombor lukisan, semakan, syarikat, dilukis oleh, disemak dan diluluskan oleh, tarikh, kemasan, toleransi am) dan saiz helaian |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Isipadu, luas permukaan, jisim (dengan bahan) dan saiz keseluruhan |

Bahan dilampirkan sebagai bahan IFC, dan nombor lukisan ialah tag elemen. Dalam himpunan, setiap bahagian ditulis sekali sebagai jenis yang memegang sifatnya, dan setiap salinan diletakkan di tempat himpunan meletakkannya, dengan nilai sendiri dalam **PartCraft_Instance**: namanya, nombor item dalam senarai bahan, dan sama ada ia bahagian yang dibumikan.

## Untuk profil laser, waterjet atau CNC: DXF

Dua jenis DXF, kedua-duanya versi R12, yang dibuka oleh setiap program CAD dan CAM:

### Satu lakaran

1. Pilih lakaran dalam sejarah (atau biarkan ia terbuka).
2. Pilih {{ui:Eksport}}, kemudian {{ui:DXF bagi lakaran atau muka rata}}. (Panel kanan lakaran juga mempunyai {{ui:Eksport sebagai DXF}}.)

Anda mendapat `<part> - <sketch>.dxf` dalam koordinat lakaran itu sendiri: garisan, lengkok dan bulatan benar pada lapisan **PROFILE**, geometri pembinaan pada **CONSTRUCTION**, dan titik longgar pada **POINTS**.

### Muka rata pepejal

1. Klik muka rata dalam paparan (contohnya bahagian atas plat yang berlubang).
2. Pilih {{ui:Eksport muka sebagai DXF}} dalam panel kanan, atau {{ui:Eksport}}, kemudian {{ui:DXF bagi lakaran atau muka rata}}.

Anda mendapat `<part> - face.dxf`: garis luar muka dan setiap lubang di dalamnya. Lubang bulat (bulatan penuh di tempat silinder bertemu muka: lubang yang digerudi, atau lubang fail STEP yang dibuka) ditulis sebagai bulatan benar dengan pusat dan jejari lubang itu sendiri. Setiap garis luar lain ialah polilgaris tertutup, dan tepi bulatnya (sudut fillet, slot, lengkok) ialah fasetnya, jadi tetapkan **Lengkung** kepada Halus dahulu jika pemotong mengikutinya dengan rapat. Bar status menyatakan berapa banyak garis luar, berapa daripadanya bulatan benar, dan luas muka.

Jika tiada lakaran atau muka rata dipilih: "Buka atau pilih lakaran, atau pilih muka rata, untuk mengeksport DXF."

## Satu lukisan

Lukisan PDF mempunyai panduan sendiri: [Buat helaian lukisan](topic:drawing-pdf).

## Format yang tidak tersedia

glTF, OBJ, IGES dan Parasolid tidak dieksport dalam binaan ini. DWG hanya ditulis oleh pek varian, sebagai helaian lukisan: lihat [Buat pek varian daripada konfigurasi anda](topic:variant-pack). Lihat [Format fail](topic:file-formats).
