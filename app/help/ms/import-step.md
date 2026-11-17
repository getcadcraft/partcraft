---
title: Buka fail STEP dan bina di atasnya
summary: Bawa model STEP pembekal atau program CAD lain ke dalam PartCraft sebagai jasad pepejal, sebagai bahagian baharu atau ditambah pada yang sedia ada, tetapkan arah atas, dan tambah lakaran serta ciri padanya.
keywords: step, stp, import, buka step, ap203, ap214, ap242, model pembekal, jasad pepejal mudah, jasad pepejal yang diimport, paksi atas, z up, y up, segi tiga, berfaset, langkah himpunan
from: ca0eca5f
---

PartCraft membuka fail STEP (`.step` atau `.stp`, AP203, AP214 dan AP242) sebagai **jasad pepejal** yang boleh anda lakar, potong, gerudi dan gabungkan dengan ciri anda sendiri. Jasad itu tidak mempunyai sejarahnya sendiri: anda tidak boleh menukar dimensi yang digunakan untuk menghasilkannya, hanya menambah padanya atau memotong daripadanya.

Versi ini membina setiap bahagian dengan kernel mesh, jadi fail STEP **dibaca sebagai segi tiga**: muka rata kekal rata, dan muka melengkung (silinder, kon, sfera, torus, permukaan B-spline) menjadi banyak muka rata kecil. Isipadunya berada dalam sebahagian kecil peratus daripada isipadu tepat. Mengekalkan muka melengkung dengan tepat memerlukan kernel tepat, yang tidak ada dalam versi ini.

## Buka fail STEP

1. Pilih {{ui:Buka}} atau tekan {{key:Mod+O}}, dan pilih fail `.step` atau `.stp`. Atau lepaskannya pada paparan 3D.
2. PartCraft membaca fail dan menunjukkan apa yang ditemuinya, contohnya: "Fail AP214: 1 pepejal, 10 muka, dibaca sebagai segi tiga." Di bawahnya ialah bilangan segi tiga, apa-apa yang terpaksa ditinggalkan atau digabungkan, dan sama ada hasilnya tertutup.
3. Semak **Arah atas dalam fail**. Fail STEP menyatakan unitnya sendiri (milimeter, inci, meter…); PartCraft menukarnya kepada milimeter, jadi **Unit dalam fail** menunjukkan Milimeter, "fail menyatakannya". **Saiz di sini** menunjukkan betapa besarnya ia nanti.
4. Pilih {{ui:Buka sebagai jasad}} untuk bahagian kosong, atau {{ui:Tambah ke bahagian ini}} / {{ui:Bahagian baharu}} apabila bahagian sudah mempunyai ciri. Menambah akan bertanya apa yang hendak **Gunakannya untuk** lakukan: tambah, potong atau simpan hanya bahagian yang bertindih.

Ciri **Imported1** muncul dalam sejarah, dan bar status menyatakan, contohnya, "plate.step ialah jasad pepejal: 57995.937 mm³, 6 muka rata untuk dilakar."

## Himpunan STEP

Himpunan masuk sebagai **satu jasad** dengan setiap bahagian di tempat fail meletakkannya ("3 bahagian yang diletakkan dalam fail masuk di tempat mereka berdiri"). Bahagian yang digunakan dua kali masuk dua kali. Nama bahagian dan pepohon himpunan tidak dikekalkan.

## Tetapkan arah atas

Kebanyakan program CAD menggunakan Z ke atas; PartCraft menggunakan Y ke atas. Secara lalai PartCraft memusingkan fail supaya Z-nya menunjuk ke atas di sini. Jika bahagian tiba dalam keadaan berbaring, pilih **Imported1** dan tetapkan **Arah atas dalam fail** kepada **Y ke atas**. **Unit dalam fail** dan **Gunakannya untuk** juga boleh diubah di sana; setiap perubahan ialah satu langkah buat asal.

## Bina di atasnya

- Klik muka rata jasad dan pilih {{ui:Lakaran pada muka ini}}. Muka rata model STEP mengekalkan kedudukannya apabila jasad dibina semula.
- Tambah potongan, lubang, boss, corak dan pencerminan seperti pada mana-mana bahagian.
- Semak saiznya dalam kotak **Bahagian**: isipadu, luas permukaan, saiz.

Fillet, chamfer dan cangkerang memerlukan kernel tepat, seperti pada mana-mana bahagian dalam versi ini ([Kernel mesh](topic:solid-kernels)).

## Tempat ia disimpan

Segi tiga disimpan **di dalam** fail `.partcraft.json`, jadi fail bahagian itu berdiri sendiri: anda tidak memerlukan fail STEP lagi.

## Mesej

| Mesej | Maksudnya |
|---|---|
| '"part.stp" bukan fail STEP (ia tidak bermula dengan ISO-10303-21).' | Fail itu bukan teks STEP biasa. Minta pengirim fail STEP AP203, AP214 atau AP242 |
| "Fail STEP tidak dapat dibaca: bahagian datanya hilang atau rosak." | Fail terpotong atau rosak. Salin semula |
| "Fail STEP tidak mengandungi jasad pepejal atau permukaan: tiada apa untuk dibawa masuk." | Fail hanya mengandungi lukisan, titik atau data. Minta pepejal |
| "Fail STEP itu terlalu besar (melebihi 60 MB) untuk diimport di sini." dan had pembaca yang lain (entri, muka, segi tiga) | Permudahkan model di sumbernya, atau hantar bahagian satu demi satu |
| "… baris rosak dalam fail telah dilangkau." | Sesetengah baris tidak dapat dibaca; selebihnya masuk. Semak jasad |
| "… muka tidak dapat dijadikan segi tiga dan telah dibuang." | Muka itu meninggalkan lubang, yang PartCraft cuba isi; jika jasad tidak tertutup, ia tidak ditambah |
| "… muka jenis yang tidak dibaca (…) telah dilangkau." | Jenis permukaan yang jarang. Minta model dengan permukaan biasa atau B-spline |
| "Ia tidak tertutup …" | Muka tidak membentuk pepejal tertutup (model permukaan, atau muka yang tertinggal). PartCraft menunjukkan bukaan dan tidak menambah apa-apa |

## Had

- Muka melengkung dilukis dan diukur sebagai faset rata, seperti dalam setiap bahagian yang dibina oleh versi ini. PartCraft mengekalkan muka rata, silinder, kon, sfera dan torus fail itu bersama jasad, supaya {{ui:Eksport}} › {{ui:STEP AP242 (pepejal tepat)}} menulisnya semula sebagai permukaan sebenar, lubang kekal sebagai lubang, bersama ciri yang anda tambah. Muka yang diberikan fail sebagai spline, sapuan atau permukaan putaran kekal sebagai faset dalam eksport. Bahagian yang disimpan sebelum 0.9.1 tidak mempunyai permukaan tersimpan: buka semula fail STEP untuk mendapatkannya.
- {{ui:Eksport}} › {{ui:DXF bagi lakaran atau muka rata}} dengan muka rata dipilih menulis lubang bulat fail sebagai bulatan sebenar.
- Warna, nama jasad, struktur himpunan dan PMI (toleransi dalam fail) tidak dibaca.
- Selain STEP, PartCraft membuka mesh STL, OBJ dan 3MF ([Buka STL, OBJ atau 3MF](topic:open-meshes)) dan fail `.3dm` ([Buka model .3dm](topic:open-3dm-files)) sebagai jasad pepejal. Fail IGES dan fail asal program lain tidak disokong.
- Bahagian dengan pepejal STEP yang diimport oleh binaan yang mempunyai kernel tepat menyimpan teks STEP; versi ini melangkau ciri itu ("belum dibina"). Buka semula fail STEP untuk membawanya masuk sebagai segi tiga.
