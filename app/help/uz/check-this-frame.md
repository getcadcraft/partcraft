---
title: Bu ramani tekshirish
summary: Payvandlangan konstruksiyaning poʻlat elementlarini (salazka, stend, quvur va profillardan yigʻilgan rama) oling, uskunani oyoqlariga va tayanchlarni polga qoʻying hamda AISC 360-16 yoki EN 1993 boʻyicha har bir element va har bir payvand chokining qanchasi ishlatilayotganini koʻring. Muhandis koʻrib chiqquncha yordamchi vosita.
keywords: rama, payvandlangan konstruksiya, salazka, nasos salazkasi, konstruktiv element, payvand, payvandlar, tekshirish, AISC 360, EN 1993, ishlatilish darajasi, tayanch, uskuna, yuklama, berk profil, HSS, RHS, CHS, muhandis
from: 032e34ee
---

{{ui:Bu ramani tekshirish}} payvandlangan konstruksiyaning toʻgʻri poʻlat elementlarini oladi, ulardan rama quradi, poʻlat va unga qoʻyilgan uskunaning ogʻirligi ostida uni hisoblaydi hamda elementlar tutashgan joydagi har bir elementni va har bir payvand chokini sinaydi. Bir yurish, bitta jadval.

:::warning
Bu **muhandis koʻrib chiqquncha yordamchi vosita**. U muhr emas va oʻtish natijasi loyiha emas. U elementlarning chizilgan oʻq chiziqlarini oladi, har bir tutashuvni kesim boʻylab toʻliq payvandlangan deb hisoblaydi, burchak choki katakchasini kesim devoridan oladi (8 mm gacha), agar siz boshqacha qoʻymasangiz, va boltlarni, plastinalarni, tayanch plitalarini, ankerlarni, tiralishni, blok kesilishini, charchashni yoki koʻtarishni tekshirmaydi.
:::

## Ishga tushirish

1. {{ui:Structural member}} bilan elementlarni chizing (kesimlar kesimlar jadvalidan olinadi).
2. Oching: {{ui:Koʻrinishlar}} › {{ui:Bu ramani tekshirish}}. Ramaning qayerda turishini belgilang (har bir oyoqda **tayanch**: sharnirli, qotirilgan yoki gʻildirakli; {{ui:Oyoqlarga sharnirli tayanchlar}} har bir eng past element uchiga bittadan qoʻyadi) va uning ustida nima turishini (**uskuna**: massa, ogʻirlik markazi, pastga bolt qilingan nuqtalar va ixtiyoriy gorizontal itarish).
3. Kodni tanlang: **ASCE 7 + AISC 360-16** yoki **EN 1990 + EN 1993**. Poʻlat markasini va AISC uchun payvand metall mustahkamligini belgilang (482.6 MPa — E70).
4. {{ui:Tekshirish}} tugmasini bosing. {{ui:Hisobotni CSV sifatida saqlash}} har bir jadvalni yozadi, birinchi qatorda esa koʻrib chiqilmagan degan yozuv boʻladi.

Rama millimetrda oʻqiladi, detalning vertikal oʻqi yuqoriga qaragan holda. Tayanch va uskuna nuqtalari shu ramada x y z koʻrinishida yoziladi, bunda z — balandlik.

Element uchi boshqa elementning oʻrtasiga tushsa, u oʻsha yerda boʻlinadi; xuddi shunday oyoq yoki bolt nuqtasi elementning chizigʻida boʻlsa ham. Ogʻirlik bolt nuqtalari boʻylab qattiq jism sifatida taqsimlanadi; oyoqlardan tashqaridagi ogʻirlik markazi yoki oyoqdagi koʻtarish kuchi aytiladi, hech qachon yashirilmaydi.

## Nima olasiz

- Eng koʻp ishlatilgan element va biror narsa buzilishi yoki buzilmasligi. Tekshiruv baholay olmaydigan elementlar (jadvalda yoʻq kesim, kodda koeffitsienti yoʻq poʻlat) sanaladi va nomi aytiladi, hech qachon oʻtgan deb hisoblanmaydi.
- Har bir element va payvand guruhi uchun bitta qator: qancha ishlatilgan, belgilovchi tekshiruv va band, hamda belgilovchi yuklama birikmasi.
- Xuddi shu jadvallar hisobotda.

## Nima tekshiriladi

Berk kesimlar (RHS, SHS, CHS, quvur) va I-kesimlar choʻzilish, siqilish, egilish, kesilish va ularning oʻzaro taʼsiri uchun; burchak va toʻliq kirishli payvandlar elastik vektor usuli bilan. Ixcham devorlar faqat berk kesimlarning egilishida; ingichka devorlar tekshirilmagan deb aytiladi. Baʼzi doimiylar standartlardan yozilgan va hali bosma nusxa bilan solishtirilmagan; hisobotda har bir manba sanab oʻtilgan.

Elementlarni chizish va ularning kesish roʻyxati uchun qarang: [Poʻlat kesimlardan ramalar](topic:structural-members).
