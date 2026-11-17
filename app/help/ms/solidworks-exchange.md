---
title: Pindahkan bahagian ke dan dari pemodel bahagian lain
summary: Hantar bahagian ke pemodel bahagian lain sebagai makro yang membinanya semula dengan pepohon ciri hidup. STEP dinamakan dan membuka senarai ciri yang ditulis oleh pemodel lain belum dibina dalam versi ini.
keywords: makro, belum dibina, swb, vba, pepohon ciri, pusingan penuh, makro eksport, cadcraft-sw.json, STEP dinamakan, ap214, pembolehubah global, persamaan, bahagian asal
from: 97ca61da
---

PartCraft menukar bahagian dengan SolidWorks kedua-dua hala, tanpa format fail yang tiada siapa lain boleh baca:

- **Keluar:** makro (`.swb`, teks biasa) yang SolidWorks jalankan untuk membina bahagian itu sendiri, ciri demi ciri, dengan lakaran, kekangan, dimensi, pembolehubah global dan persamaannya. Anda mendapat bahagian asal dengan pepohon ciri hidup, bukan pepejal mati.
- **Balik:** makro yang anda jalankan dalam SolidWorks menulis ciri dan persamaan bahagian ke fail `.cadcraft-sw.json`. Membuka fail itu dalam PartCraft belum dibina dalam versi ini (ia memerlukan kernel tepat).

:::warning
Tiada satu pun daripada ini telah diuji dalam SolidWorks lagi. SolidWorks hanya berjalan pada Windows dengan lesen, dan PartCraft tidak pernah menjalankan makro ini di dalamnya. Makro ditulis daripada dokumentasi API SolidWorks dan diperiksa strukturnya di sini. Sediakan diri untuk melaporkan masalah; log yang ditulis makro memberitahu langkah mana yang gagal.
:::

PartCraft tidak boleh menulis fail `.sldprt`: format itu tertutup. Makro ialah cara untuk mendapatkan bahagian asal.

## Hantar bahagian sebagai makro

1. Buka bahagian.
2. Pilih {{ui:Eksport}}, kemudian {{ui:Makro untuk SolidWorks (.swb)}}. PartCraft memuat turun `<part>.swb`; bar status memberitahu ia "ditulis tanpa kernel tepat".
3. Kotak dialog memberitahu berapa banyak ciri, pembolehubah global dan persamaan yang dibina makro, dan menyenaraikan apa-apa yang ditinggalkannya. Tiada STEP disertakan di sebelahnya dalam versi ini: gunakan {{ui:Eksport}}, kemudian {{ui:STEP (berfaset, kernel jejaring)}} jika anda memerlukannya.
4. Dalam SolidWorks, pilih **Tools > Macro > Run**, pilih fail `.swb` dan tunggu. Ia membuat bahagian baharu daripada templat bahagian lalai anda, menetapkan milimeter dan membina setiap ciri.
5. Pada akhirnya mesej memberitahu berapa langkah yang selesai, berapa yang gagal dan berapa yang sepadan dengan badan PartCraft. Log penuh, `<part> macro log.txt`, ditulis di sebelah makro.

Apa yang dibina makro:

| PartCraft | Dalam bahagian baharu |
|---|---|
| Lakaran pada satah Depan, Atas atau Kanan | Lakaran pada satah itu, dengan garisan, lengkok, bulatan, titik, kekangan dan dimensinya (dinamakan seperti dalam PartCraft, seperti `k7`) |
| Lakaran pada muka | Lakaran pada muka yang sama, dipilih dengan satu titik padanya |
| Lakaran pada satah tetap | Satah rujukan melalui tiga titik, dan lakaran padanya |
| Ekstrud, potong (buta, tembus semua, satah tengah, dua arah, tirus) | Boss-extrude atau cut-extrude |
| Putar, potongan berputar | Putar tentang garis pusat yang sama |
| Lubang (mudah, counterbore, countersink, bertap) | Satu atau dua potongan dengan lakaran sendiri (lubang bertap ialah lubang gerudi tapnya; tiada benang) |
| Corak linear dan bulatan, cermin | Corak linear, corak bulatan, cermin (ciri atau badan) |
| Fillet, chamfer, shell | Fillet, chamfer dan shell pada tepi dan muka yang sama, dipilih mengikut titik |
| Parameter dan persamaan | Pembolehubah global dan persamaan pada dimensi yang dinamakan semula |
| Ciri yang dilumpuhkan, bar gulung balik | Dilumpuhkan dengan cara yang sama; bar gulung balik pada tempat yang sama |

Selepas setiap ciri pepejal, makro membandingkan isipadu dan saiz badan dengan PartCraft. Apabila ia berbeza, ia memusingkan arah ciri itu sekali dan menyemak semula; jika itu tidak lebih baik, ia memusingkannya kembali dan menulis "Semak" dalam log.

### Apa yang ditinggalkan

Kotak dialog dan bahagian atas makro menyenaraikan semua yang tidak dibawa, dengan sebabnya. Setakat ini ia ialah: pepejal yang diimport (masukkan STEP sebaliknya), sweep, loft, cerun tarik, paksi dan titik rujukan, penamatan "sehingga", ekstrud hanya sebahagian kontur, dan apa-apa yang bergantung padanya. Splin menjadi lengkung melalui titiknya. Versi ini tiada kernel tepat, jadi lakaran pada muka dan ciri yang memilih tepi atau muka juga ditinggalkan.

## Hantar STEP dinamakan

Belum dibina dalam versi ini: {{ui:STEP untuk SolidWorks (dinamakan, AP214)}} memerlukan kernel tepat, dan memilihnya berkata "STEP untuk SolidWorks: belum dibina. …". Dengan kernel tepat, fail itu membawa nama bahagian, milimeter dan warna bahagian, dan menegakkan Y, seperti cara SolidWorks memaparkan bahagian (eksport {{ui:STEP AP214 (pepejal tepat)}} biasa menegakkan Z). Huruf dengan aksen kehilangan aksennya dalam nama, dan aksara lain di luar ASCII biasa menjadi `_`.

## Bawa bahagian balik

Membuka fail dalam PartCraft (langkah 3) belum dibina dalam versi ini: ia berkata "Membuka eksport SolidWorks: belum dibina. …". Aplikasi lukisan CadCraft masih membuka fail dan mengambil lakarannya.

1. Pilih {{ui:Fail}} > {{ui:Eksport}} > {{ui:Makro eksport untuk membawa bahagian kembali (.swb)}} untuk memuat turun `CadCraftExport.swb`, dan letakkannya di sebelah bahagian anda.
2. Dalam SolidWorks, buka bahagian, pilih **Tools > Macro > Run** dan pilih `CadCraftExport.swb`. Ia menulis `<part>.cadcraft-sw.json` di sebelah bahagian dan tidak mengubah apa-apa di dalamnya.
3. Dalam PartCraft, pilih {{ui:Buka}} dan pilih fail itu, atau lepaskannya pada paparan 3D.
4. Dengan kernel tepat, PartCraft membina semula bahagian ciri demi ciri dan menunjukkan apa yang dilakukannya: contohnya "5 daripada 5 ciri dibawa dari SolidWorks (Flange.SLDPRT)", setiap ciri yang tidak dapat dibawa ("Tidak dibawa: Sweep1 (Sweep).") dan sama ada isipadu sepadan dengan yang SolidWorks tulis.
5. Simpan sebagai bahagian PartCraft dengan {{ui:Simpan}}.

Lakaran mendarat pada satah asas apabila ia berada di atasnya, pada muka rata yang sepadan bagi bahagian apabila ada (supaya ia mengikut suntingan kemudian), dan pada satah tetap sebaliknya. Tepi dan muka fillet, chamfer dan shell ditemui daripada titik dan disimpan sebagai rujukan bernama. Pembolehubah global menjadi parameter (nama dengan ruang menjadi garis bawah: "Bolt count" menjadi `Bolt_count`) dan persamaan menjadi persamaan pada dimensi yang sama. Tiada apa diteka: apa yang tiada padanan disenaraikan.

Aplikasi lukisan CadCraft membuka fail yang sama dan mengambil lakarannya.

:::note
Formatnya ialah `cadcraft-sw-export` versi 1, JSON biasa dalam milimeter dan darjah. Fail daripada makro yang lebih baharu, atau yang tidak sah, ditolak dengan sebabnya.
:::
