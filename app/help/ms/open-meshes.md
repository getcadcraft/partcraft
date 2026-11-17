---
title: Buka STL, OBJ atau 3MF sebagai jasad pepejal
summary: Tukar mesh daripada pengimbas, laman cetakan 3D atau program lain kepada pepejal yang boleh dipotong, ditambah dan dilakar; apa yang PartCraft baiki semasa proses, dan apa yang tidak dapat dibaiki.
keywords: stl, obj, 3mf, mesh, mesh ke pepejal, tukar mesh, imbasan, kedap air, baiki, lubang, jurang, unit, paksi atas, jasad diimport, muka rata
from: 7b948471
---

PartCraft membuka mesh STL, OBJ dan 3MF sebagai **jasad pepejal**. Jasad itu berfungsi seperti mana-mana pepejal lain: potong, tambah, gerudi, corakkan, gunakan dalam himpunan atau untuk pemesinan, dan lakar pada muka rata. Ia tidak mempunyai sejarah sendiri: mesh hanyalah segitiga, jadi saiznya tidak boleh diubah, hanya boleh ditambah atau dipotong.

## Buka mesh

1. Pilih {{ui:Buka}} atau tekan {{key:Mod+O}}, dan pilih fail `.stl`, `.obj` atau `.3mf`. Atau lepaskannya pada paparan 3D.
2. PartCraft membacanya, membaiki apa yang selamat untuk dibaiki, dan menunjukkan apa yang ditemuinya: berapa banyak segitiga dan titik, setiap pembaikan, dan sama ada mesh kini **tertutup**.
3. Semak **Unit dalam fail** dan **Atas dalam fail**. STL dan OBJ tidak menyatakan unitnya, jadi milimeter ialah tekaan; fail 3MF menyatakan miliknya sendiri. Baris **Saiz di sini** menunjukkan saiz jasad dengan pilihan anda, supaya bahagian yang masuk 25.4 kali terlalu kecil mudah dikesan (ia dalam inci).
4. Jika bahagian di skrin kosong, pilih {{ui:Buka sebagai jasad}}. Jika ia sudah mempunyai ciri, pilih **Gunakannya untuk** (tambah kepada bahagian, potong daripadanya, atau kekalkan hanya bahagian bertindih), kemudian {{ui:Tambah ke bahagian ini}}, atau {{ui:Bahagian baharu}} untuk bermula semula dengan mesh.

Ciri **Imported1** muncul dalam sejarah. Bar status menyatakan, sebagai contoh, "bracket.stl ialah jasad pepejal: 15200.512 mm³, 14 muka rata untuk dilakar."

## Apa yang PartCraft baiki

| Pembaikan | Maksudnya |
|---|---|
| Bucu berganda dicantumkan | STL mengulang setiap bucu bagi setiap segitiganya; ia dicantumkan menjadi satu titik |
| Segitiga tanpa luas dibuang | Kepingan yang bucunya terletak pada satu garisan |
| Segitiga berganda dibuang | Segitiga yang ditulis dua kali disimpan sekali; dua yang menghadap arah bertentangan (dinding dalam) kedua-duanya dibuang |
| Jurang kecil ditutup | Tepi yang hampir bertemu (dalam seperseribu saiz bahagian) dicantumkan |
| Lubang diisi | Bukaan yang sempadannya terletak rata diisi tanpa mengira saiznya; yang melengkung hanya jika kecil |
| Segitiga dipusingkan menghadap ke luar | Segitiga yang menghadap arah salah dipusingkan supaya sepadan dengan jirannya, dan seluruh permukaan menghadap ke luar |

## Apabila mesh tidak tertutup

Pepejal memerlukan permukaan tanpa bukaan. Apabila PartCraft tidak dapat menutupnya, dialog menyatakan berapa banyak bukaan dan tepi terbuka yang tinggal, dan tiada jasad untuk ditambah. Tutup bukaan dalam program yang membuat mesh, atau eksport semula sebagai mesh tertutup (kedap air), dan buka semula.

PartCraft membiarkan bukaan begitu sahaja apabila mengisinya mungkin membuat tekaan yang salah: lubang melengkung yang besar, atau dua bukaan pada satah yang sama (muka berbentuk cincin yang hilang, di mana mengisi setiap sempadan akan menutup lubang di tengah). Tepi yang dikongsi lebih daripada dua segitiga juga dilaporkan: permukaan sedemikian tidak mempunyai bahagian dalam yang jelas.

## Lakar pada muka rata

Kawasan rata yang terdiri daripada banyak segitiga digabungkan menjadi satu **muka rata** setiap satu, supaya lakaran boleh berada di atasnya: klik muka dan pilih {{ui:Lakaran pada muka ini}}. Muka yang kemudian dipotong atau ditambah kekal sebagai muka. Kawasan bulat (lubang, fillet) kekal sebagai segitiga: ia bukan muka yang boleh anda pilih, dan paparan melukis garis luarnya daripada sudut antara segitiga.

## Tukar kemudian

Pilih **Imported1** untuk melihat fail asalnya, berapa banyak segitiga yang dimilikinya dan apa yang dibaiki. **Unit dalam fail**, **Atas dalam fail** dan **Gunakannya untuk** boleh ditukar di sana; setiap perubahan ialah satu langkah buat asal.

## Tempat ia disimpan

Mesh yang sudah dibaiki disimpan **di dalam** fail `.partcraft.json`, jadi anda tidak perlu lagi fail mesh itu. Fail bahagian dengan jasad mesh ialah versi 5: PartCraft yang lebih lama menolaknya mengikut versinya. Mesh 200,000 segitiga menambah kira-kira 1.2 MB.

## Had

- Paling banyak 3 juta segitiga dan 200 MB dalam satu fail.
- Jasad daripada mesh dibina oleh kernel jejaring. Dengan kernel tepat dihidupkan (untuk pembangun sahaja), ia menyatakannya dan tidak dibina.
- Bahan OBJ, koordinat tekstur dan lengkung bentuk bebas ditinggalkan; warna, bahan dan objek sokongan 3MF ditinggalkan (dialog menyatakan berapa objek yang dilangkau).
- Jasad sama halus seperti mesh: STL yang kasar memberi muka bulat yang kasar. Lubang yang anda gerudi ke dalamnya sebulat ciri anda sendiri.
