---
title: Reka bentuk elemen BimCraft dan simpan semula
summary: Bahagian yang dihantar dari BimCraft dibuka dengan bangunan di sekelilingnya, dalam kelabu dan hanya boleh dibaca. Ubahnya, kemudian simpan semula supaya BimCraft boleh menerima bentuk baharu.
keywords: bimcraft, bim, elemen, hantar, simpan semula, pautan, bangunan, konteks, jiran, sokongan, braket, ifc, terima
from: 0978fe53
---

## Apa yang anda akan lakukan

Kerjakan bahagian yang berasal daripada model BimCraft, di tempatnya dalam bangunan, dan hantar bentuk baharu balik.

## Langkah

1. Dalam BimCraft, pilih elemen dan pilih {{ui:Pautan bahagian}} › {{ui:Hantar ke PartCraft}}. PartCraft membukanya sebagai bahagian baharu. Bar status menyatakan ia ialah elemen BIM.
2. Elemen di sekelilingnya (dalam jarak 3 m) dilukis dalam kelabu. Ia ada untuk dijadikan rujukan reka bentuk. Anda tidak boleh memilih atau mengubahnya, dan ia tidak disimpan dalam fail bahagian.
3. Ubah bahagian seperti biasa: potong, tambah, gerudi, cermin. Asalan dan paksinya ialah milik elemen itu sendiri, jadi bahagian itu kembali ke kedudukan asalnya.
4. Pilih {{ui:Fail}} › {{ui:Eksport}} › {{ui:Simpan semula ke BimCraft}}. Bar status menyatakan semakan yang anda hantar.
5. Dalam BimCraft, elemen dipaparkan sebagai berubah sehingga orang di sana menerimanya.

## Apa yang anda patut lihat

- Bahagian itu mengekalkan pautannya dalam fail. Buka kemudian dan bar status masih menyatakan ia ialah elemen BIM. Bangunan kelabu kembali selagi pelayar masih menyimpan pakej yang dihantar bersamanya.
- Menyimpan semula lagi menghantar semakan 2, 3 dan seterusnya. BimCraft mengekalkan yang terbaharu.

## Perkara yang perlu diketahui

- Bentuk dihantar balik sebagai jejaring dalam milimeter, mengikut paksi elemen itu sendiri. Ciri-ciri kekal dalam PartCraft.
- {{ui:Simpan semula ke BimCraft}} tidak melakukan apa-apa untuk bahagian yang tidak berasal daripada BimCraft.
- Bahagian yang belum mempunyai pepejal tidak mempunyai apa-apa untuk dihantar.
- Kedua-dua aplikasi mesti dibuka dalam pelayar yang sama: tiada apa-apa dimuat naik, kedua-dua halaman memindahkan elemen antara mereka.
