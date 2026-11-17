---
title: Rangka dari profil baja
summary: Pasang profil baja di sepanjang garis satu atau lebih sketsa untuk membuat rangka las: sudut miter atau tumpul, batang yang dipotong pas di tempat bertemu, tutup ujung, pelat buhul, dan daftar potong dengan panjang dan sudut ujung.
keywords: weldment, batang struktur, rangka, rangka baja, pipa, pipa persegi, hss, rhs, shs, chs, balok lebar, balok I, balok W, ipe, hea, heb, kanal, upn, siku, miter, sambungan tumpul, coak, tutup ujung, pelat buhul, daftar potong
from: 59071e5a
---

**Batang struktur** memasang profil baja di sepanjang setiap garis dari sketsa yang Anda pilih. Gambar rangka sebagai garis (setiap garis adalah satu batang), lalu pilih profilnya: batang dibangun, sudutnya dipangkas dan diperpanjang, dan daftar potong menyatakan berapa panjang setiap potongan dan pada sudut berapa.

## Membuat rangka

1. Gambar rangka sebagai garis dalam sketsa, misalnya persegi panjang pada bidang atas. Garis yang ditandai sebagai konstruksi ditinggalkan.
2. Dengan sketsa terpilih, pilih {{ui:Lainnya}} › {{ui:Batang struktur}}. Setiap garis sketsa mendapat satu batang.
3. Di panel, pilih **Keluarga** dan **Ukuran** profil. Keluarganya adalah tabel AISC (W, S, C, L, tabung HSS, Pipa) dan EN 10365 (IPE, HEA, HEB, UPN).

### Rangka dalam 3D

Garis dari beberapa sketsa membentuk satu rangka: persegi panjang atas yang digambar pada bidang di atas, dan kaki-kaki yang digambar pada bidang yang tegak, bertemu di ujung-ujungnya dalam 3D. Di bawah **Sepanjang garis** di panel, centang setiap sketsa yang garisnya diikuti oleh batang. Ujung yang bertemu dalam satu mikrometer akan disambung.

## Mengatur profil pada garisnya

- **Putar (°)** memutar profil di sekitar garisnya. Balok berdiri dengan kedalamannya tegak (pada batang vertikal, kedalamannya menghadap ke depan).
- **Pada garis** memilih titik profil yang berada pada garis: pusat, atau sudut atau titik tengah sisi dari garis besar profil. "Tengah bawah" menempatkan rangka di atas bidang sketsa, bukan menembusnya.

## Sudut dan sambungan

| Tempat batang bertemu | Yang terjadi |
|---|---|
| Dua batang bertemu ujung ke ujung, **Sudut: Miter** | Keduanya dipotong pada bidang di tengah, seperti bingkai foto |
| Dua batang bertemu ujung ke ujung, **Sudut: Tumpul** | Batang pertama berlanjut sampai muka jauh batang kedua; batang kedua dipotong tegak lurus pada muka dekat batang pertama |
| Sebuah batang berakhir di tengah batang lain (T) | Ia dipotong pas di luar batang lainnya |
| Tiga atau lebih berakhir pada satu titik | Yang pertama berlanjut tegak lurus melewati yang lain; yang lain dipotong pas terhadapnya |

Batang pertama adalah yang garisnya datang lebih dulu: garis mempertahankan urutan saat digambar, sketsa demi sketsa, sesuai urutan sketsa dicentang.

## Tutup ujung dan pelat buhul

- **Tutup ujung** menutup setiap ujung bebas dengan pelat berbentuk garis besar profil, dengan ketebalan yang Anda atur, di luar ujung.
- **Pelat buhul** memasang pelat segitiga di setiap sudut tempat dua batang bertemu dengan sudut: **Ukuran pelat buhul** sepanjang setiap batang dari sudut, **Tebal pelat buhul** melintang, berpusat pada bidang sudut.

## Daftar potong

Panel mencantumkan setiap potongan, dengan potongan identik dikelompokkan: profilnya, panjangnya (titik panjang ke titik panjang, seperti yang Anda tandai untuk gergaji), cara setiap ujung dipotong (tegak lurus, sudut dari tegak lurus, atau dipotong pas), dan batang mana yang dimilikinya. Tutup ujung dan pelat buhul dicantumkan dengan ukurannya. {{ui:Simpan daftar potong (CSV)}} menyimpannya untuk spreadsheet.

Batang yang dipotong pas pada tabung dengan sudut membulat menjorok sedikit ke dalam radius sudut tabung itu, sehingga panjang titik-panjangnya beberapa mm lebih dari jarak di antara muka-muka.

## Batasan

- Batang hanya mengikuti garis lurus; busur dan spline dalam sketsa ditinggalkan.
- Sambungannya dipotong, bukan dilas: tidak ada manik las yang digambar, dan rangka adalah satu solid.
- Profil digambar dari dimensi tabel: profil W dengan fillet akarnya, S dan kanal dengan sayap sejajar, tabung dengan radius sudut; lubang, persiapan ujung dan celah las tidak dibuat untuk Anda.
- Batang struktur dibangun oleh kernel mesh. Dengan kernel eksak aktif (hanya pengembang), ia menyatakan hal itu dan tidak dibangun.
