---
title: Bingkai daripada keratan keluli
summary: Letakkan keratan keluli sepanjang garisan satu atau lebih lakaran untuk membuat bingkai dikimpal: sudut dipotong serong atau hujung ke hujung, ahli dipotong supaya muat di tempat ia bertemu, penutup hujung, gusset dan senarai potongan dengan panjang dan sudut hujung.
keywords: kimpalan, ahli struktur, bingkai, bingkai keluli, tiub, tiub persegi, hss, rhs, shs, paip, chs, sayap lebar, rasuk-I, ipe, hea, heb, saluran, upn, sudut, potong serong, sambungan hujung, potong, penutup hujung, gusset, senarai potongan
from: 59071e5a
---

**Ahli struktur** meletakkan keratan keluli sepanjang setiap garisan lakaran yang anda pilih. Lukis bingkai sebagai garisan (setiap garisan ialah satu ahli), kemudian pilih keratan: ahli dibina, sudut mereka dipangkas dan dipanjangkan, dan senarai potongan memberitahu berapa panjang untuk memotong setiap kepingan dan pada sudut apa.

## Buat bingkai

1. Lukis bingkai sebagai garisan dalam lakaran, contohnya segi empat tepat pada satah atas. Garisan yang ditandakan sebagai binaan ditinggalkan.
2. Dengan lakaran dipilih, pilih {{ui:Lagi}} › {{ui:Ahli struktur}}. Setiap garisan lakaran mendapat satu ahli.
3. Dalam panel, pilih **Famili** dan **Saiz** keratan. Famili ialah jadual AISC (W, S, C, L, tiub HSS, Paip) dan EN 10365 (IPE, HEA, HEB, UPN).

### Bingkai dalam 3D

Garisan daripada beberapa lakaran membentuk satu bingkai: segi empat tepat atas dilakar pada satah di atas, dan kaki dilakar pada satah yang berdiri tegak, bertemu di hujung mereka dalam 3D. Di bawah **Sepanjang garisan bagi** dalam panel, tandakan setiap lakaran yang garisannya diikuti ahli. Hujung yang bertemu dalam lingkungan satu mikrometer dicantumkan.

## Tetapkan keratan pada garisnya

- **Putar (°)** memusingkan keratan tentang garisannya. Rasuk berdiri dengan kedalamannya tegak (pada ahli tegak, kedalamannya menghala ke depan).
- **Pada garisan** memilih titik keratan yang berada pada garisan: pusat, atau bucu atau tengah sisi garis luar keratan. "Bawah tengah" meletakkan bingkai di atas satah lakaran bukan melaluinya.

## Sudut dan sambungan

| Tempat ahli bertemu | Apa yang berlaku |
|---|---|
| Dua ahli hujung ke hujung, **Sudut: Dipotong serong** | Kedua-duanya dipotong pada satah separuh jalan antara mereka, seperti bingkai gambar |
| Dua ahli hujung ke hujung, **Sudut: Hujung ke hujung** | Ahli pertama berjalan terus ke muka jauh ahli kedua; ahli kedua dipotong tegak pada muka dekat ahli pertama |
| Ahli berakhir di tengah ahli lain (T) | Ia dipotong supaya muat terhadap bahagian luar ahli lain |
| Tiga atau lebih berakhir pada satu titik | Yang pertama berjalan tegak melepasi yang lain; yang lain dipotong supaya muat terhadapnya |

Ahli pertama ialah yang garisannya datang dahulu: garisan mengekalkan susunan ia dilukis, lakaran demi lakaran mengikut susunan lakaran ditandakan.

## Penutup hujung dan gusset

- **Penutup hujung** menutup setiap hujung bebas dengan plat garis luar keratan, ketebalan yang anda tetapkan, di luar hujung.
- **Gusset** meletakkan plat segi tiga di setiap sudut tempat dua ahli bertemu pada sudut: **Saiz gusset** sepanjang setiap ahli dari sudut, **Ketebalan gusset** merentasi, berpusat pada satah sudut.

## Senarai potongan

Panel menyenaraikan setiap kepingan, dengan kepingan yang sama dikumpulkan: keratan, panjang (titik panjang ke titik panjang, seperti yang anda tanda untuk gergaji), cara setiap hujung dipotong (tegak, sudut daripada tegak, atau dipotong supaya muat), dan ahli yang mana. Penutup hujung dan gusset disenaraikan dengan saiznya. {{ui:Simpan senarai potongan (CSV)}} menyimpannya untuk hamparan.

Ahli yang dipotong supaya muat terhadap tiub berbucu bulat mencapai sedikit ke dalam jejari bucu tiub itu, jadi panjang titik panjangnya ialah beberapa milimeter lebih daripada jurang antara muka.

## Had

- Ahli hanya mengikuti garisan lurus; lengkok dan splin dalam lakaran ditinggalkan.
- Sambungan dipotong, bukan dikimpal: tiada manik kimpalan dilukis, dan bingkai ialah satu pepejal.
- Keratan dilukis daripada dimensi jadual: bentuk W dengan fillet akarnya, S dan saluran dengan sayap selari, tiub dengan jejari bucu; lubang, penyediaan hujung dan jurang kimpalan tidak dibuat untuk anda.
- Ahli struktur dibina oleh kernel jejaring. Dengan kernel tepat dihidupkan (pembangun sahaja), ia menyatakannya dan tidak dibina.
