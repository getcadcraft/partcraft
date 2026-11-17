---
title: Mula manual dalam Ilustrasi
summary: Ruang kerja Ilustrasi menghasilkan manual daripada reka bentuk anda: pandangan, lukisan garisan letupan dengan belon dan senarai bahagian, arahan langkah demi langkah, animasi dan fail 3D yang boleh dibuka pelanggan tanpa CAD. Manual ialah fail tersendiri.
keywords: ilustrasi, manual, ilustrasi teknikal, dokumentasi, pandangan letupan, senarai bahagian, arahan, partcraft-manual
from: e447e0ab
---

**Ilustrasi** ialah ruang kerja untuk dokumen yang diperlukan orang di sekeliling reka bentuk: pandangan letupan dengan belon dan senarai bahagian, lukisan garisan untuk manual, arahan langkah demi langkah, animasi dan fail 3D yang boleh dibuka pelanggan tanpa CAD. Pilih {{ui:Ilustrasi}} dalam penukar {{ui:Ruang kerja}} di awal bar alat.

**Manual** ialah fail tersendiri (`<name>.partcraft-manual.json`). Ia menyimpan salinan bentuk setiap bahagian, pepohon produk dan sifat bahagian, serta pautan kembali ke tempat ia datang, supaya anda boleh bekerja pada manual sementara reka bentuk diteruskan. Apabila reka bentuk berubah, [Kemas kini daripada reka bentuk](topic:illustrate-update) membawa perubahan itu masuk.

## Mulakan satu

Klik {{ui:Baharu}} dalam kumpulan {{ui:Manual}}, kemudian:

- {{ui:Daripada bahagian yang terbuka}}: bahagian yang dibuka dalam Reka bentuk.
- {{ui:Daripada himpunan yang terbuka}}: ditunjukkan sebaliknya apabila himpunan dibuka; bahagiannya, kedudukannya, nombor bahagian, bahan dan pandangan letupan turut dibawa.
- {{ui:Daripada fail himpunan…}}: `.partcraft-asm.json` yang disimpan; PartCraft membina bahagiannya dahulu.
- {{ui:Daripada fail lain…}}: glTF (.glb, .gltf), OBJ, STL atau 3MF. Pepohon dan nama fail dikekalkan, dan salinan satu bahagian (bentuk yang sama diletakkan dua kali) menjadi satu bahagian dengan kuantiti. Fail STL dan OBJ tidak menyatakan unitnya, jadi anda akan ditanya. Fail STL dibaca dengan Z ke atas; glTF dan 3MF menyatakan sendiri.

Semasa manual dibuka, Ilustrasi menunjukkan salinan bahagian milik manual itu; bahagian atau himpunan yang terbuka dalam Reka bentuk disembunyikan sehingga anda kembali ke Reka bentuk.

## Simpan dan buka

{{ui:Simpan}} dalam kumpulan {{ui:Manual}} (atau {{key:Mod+S}}) menyimpan manual; {{ui:Buka}} membuka satu. Setiap perubahan dalam Ilustrasi ialah satu langkah dalam sejarah manual itu sendiri: {{ui:Buat asal}} dan {{ui:Buat semula}} bertindak ke atas manual semasa Ilustrasi dibuka.

## Belum dibina

- Fail STEP belum dibuka dalam {{ui:Daripada fail lain…}}. Buka STEP dalam Reka bentuk sebaliknya (ia masuk sebagai jasad pepejal: lihat [Buka fail STEP](topic:import-step)) dan mulakan manual {{ui:Daripada bahagian yang terbuka}}, atau simpannya sebagai glTF, 3MF, OBJ atau STL.
- ModelCraft dan BimCraft belum boleh menghantar model terus kepada Ilustrasi: simpannya sebagai glTF (.glb) dan gunakan {{ui:Daripada fail lain…}}.

Seterusnya: [Pandangan dan paparan](topic:illustrate-views).
