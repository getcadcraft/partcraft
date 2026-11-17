---
title: Buka model .3dm sebagai jasad pepejal
summary: Bawa mesh, polipermukaan dan blok bagi fail .3dm ke dalam PartCraft sebagai satu jasad pepejal yang boleh dipotong, ditambah dan dilakar; dari mana segitiga datang, dan apa yang ditinggalkan.
keywords: 3dm, nurbs, polipermukaan, brep, permukaan, mesh pemaparan, ekstrusi, blok, import, mesh ke pepejal, unit, jasad diimport
from: 8ae9571b
---

PartCraft membuka fail `.3dm` sebagai **jasad pepejal**, sama seperti ia membuka [mesh STL, OBJ atau 3MF](topic:open-meshes). Jasad itu berfungsi seperti mana-mana pepejal lain: potong, tambah, gerudi, corakkan, dan lakar pada muka rata. Ia tidak mempunyai sejarahnya sendiri.

## Buka fail

1. Pilih {{ui:Buka}} atau tekan {{key:Mod+O}}, dan pilih fail `.3dm`. Atau lepaskannya pada paparan 3D.
2. PartCraft membacanya dan menunjukkan apa yang ditemuinya: berapa banyak objek dengan muka yang masuk, berapa banyak muka datang daripada mesh yang disimpan dalam fail dan berapa banyak yang PartCraft tessellate sendiri, setiap pembaikan, dan sama ada hasilnya **tertutup**.
3. Semak **Unit dalam fail** (fail menyatakan miliknya sendiri; unit yang tidak disenaraikan PartCraft, seperti yard, ditukar kepada milimeter) dan **Atas dalam fail**.
4. Pilih {{ui:Buka sebagai jasad}}, atau **Gunakannya untuk** dan {{ui:Tambah ke bahagian ini}} apabila bahagian itu sudah mempunyai ciri.

## Dari mana segitiga datang

PartCraft membina jasad daripada segitiga dalam versi ini, jadi setiap permukaan dalam fail menjadi muka rata kecil. Bagi setiap muka polipermukaan (dan setiap ekstrusi) ia mengambil **mesh pemaparan yang disimpan dalam fail** apabila ada, jika tidak ia **men-tessellate sendiri** (satah, permukaan NURBS, permukaan putaran, lengkung yang diekstrud dan ekstrusi, dipangkas oleh tepinya). Muka polipermukaan yang sama berkongsi titik tepinya, jadi polipermukaan tertutup datang sebagai tertutup. Muka pada jenis permukaan yang PartCraft belum baca ditinggalkan, dan dialog menyatakan berapa banyak dan jenisnya; hasilnya biasanya tidak tertutup.

## Semua dalam fail menjadi satu jasad

Setiap mesh, polipermukaan dan ekstrusi yang kelihatan, dan setiap kedudukan blok, masuk ke dalam **satu** jasad di tempat fail meletakkannya. Objek yang tersembunyi, atau pada lapisan yang dimatikan, ditinggalkan. Apabila fail mengandungi beberapa pepejal berasingan, jasad itu mempunyai beberapa keping; buka setiap satu daripada failnya sendiri jika anda mahu sebagai jasad berasingan.

## Apa yang ditinggalkan (dan dinyatakan)

Lengkung, titik, awan titik, teks, dimensi, hatch dan lampu ditinggalkan: jasad hanya mengambil muka. Begitu juga objek SubD (tukarkan kepada mesh atau polipermukaan dalam program yang membuat fail itu dahulu), blok yang dipautkan daripada fail lain, serta warna, lapisan dan nama (jasad PartCraft tidak mempunyai nama sendiri di sini).

## Apabila ia tidak tertutup

Polipermukaan terbuka dan permukaan (satu permukaan terpangkas tunggal, atau bentuk dengan muka yang hilang) tidak mempunyai bahagian dalam, jadi ia tidak boleh menjadi pepejal. Dialog menyatakan berapa banyak bukaan yang tinggal dan tidak menambah apa-apa. Cantumkan atau tutup bentuk itu dalam program yang membuatnya, simpan, dan buka semula. Lihat [Apabila mesh tidak tertutup](topic:open-meshes#when-a-mesh-does-not-close).
