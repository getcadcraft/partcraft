---
title: 3D pardozlash: parallel va skallop
summary: Butun model yuzasini shar uchli, yumaloq burunli yoki tekis frez bilan, istalgan burchakdagi parallel chiziqlar yoki bir-biridan belgilangan masofadagi oʻtishlar bilan pardozlang, shunda ular orasidagi tizmalar soʻralgan balandlikni saqlaydi. Yoʻllar nimani kafolatlashi va nimani kafolatlamasligi.
keywords: 3d pardozlash, pardozlash, parallel, raster, skallop, doimiy skallop, cusp, shar uchli frez, yumaloq burunli, yuza, tolerans, qadam, qiyalik, qoldirish, tushuvchi kesgich, ortiqcha kesish
from: e1587d0a
---

Ishlab chiqarish ichidagi ikkita amal **butun model yuzasini** kesadi, asbob vertikal (uch oʻq) holatda saqlanadi. Ular tanlov talab qilmaydi: yuqoridan koʻrinadigan modelning barcha qismida ishlaydi. Avval detalni qoʻpol kesing (adaptiv yoki choʻntak); kesilmagan qoldiq ustidagi pardoz oʻtishi chuqur kesishini ogohlantiradi.

## Parallel

Modelda **burchak** boʻyicha sozlangan toʻgʻri chiziqlar, **qadam** bilan ajratilgan (asbob diametrining kasri). Har bir chiziq yuzaga ergashadi: asbob uchi shunday balandlikda boʻladiki, kesgichning hech bir qismi model ostiga tushmaydi, va chiziq yuza egilgan joyda nozikroq kesiladi. **Zigzag** yoqilgan boʻlsa, asbob chiziqlar orasida xavfsiz boʻlgan joyda pastda qoladi (harakat boʻylab tekshiriladi); aks holda koʻtariladi.

- **Tolerans**: chiziqning toʻgʻri qismi haqiqiy uch balandligidan qanchaga chetga chiqishi mumkin (uning yarmi har bir qismning oʻrtasidagi chegara sifatida ishlatiladi). Standart 0.01 mm.
- **Faqat yuza kamida … va eng koʻpi … (°) boʻlgan joyda**: faqat yassi yoki faqat tik joylarni pardozlash. Yuza diapazondan tashqarida boʻlsa, chiziq tashlab ketiladi va asbob koʻtariladi.
- **Qoldirish**: modelni shu masofaga offset qilingan holda (kesgich shuncha kattalashgan: shar uchli va yumaloq burunli asboblar uchun aniq; tekis asbob kamida shuncha qoldiradi).
- **Pastki chegara**: bu z dan pastda hech narsa kesilmaydi.

## Skallop

Bir-biridan sirt boʻylab doimiy masofada joylashgan oʻtishlar, shunda ikki qoʻshni oʻtish orasida qolgan tizma (skallop) siz soʻragan **balandlik** boʻladi. Masofa balandlik va shar radiusidan kelib chiqadi: s = 2·√(2·R·h − h²), masalan Ø6 shar va 0.02 mm tizma uchun oʻtishlar orasida taxminan 0.69 mm. Yumaloq burunli asbob oʻz burchak radiusidan foydalanadi. Tekis frezni rad etiladi: uning oʻlchanadigan tizmasi yoʻq.

Oʻtishlar **modelning chetidan, ichkariga** yoki **uning tepasidan, pastga** boshlanadi. Ular sirt boʻylab masofa konturlari (balandlik emas), shuning uchun qiyalikda ular rejada yaqin, tekisda esa keng oraliqda boʻladi. Masofa sirt ustidagi toʻrda oʻlchanadi va 1 % atrofida aniq; tizma balandligi tekis yoki sekin egilgan joyda aniq, tez egiladigan joyda taxminiy. **Climb** yoqilsa, kesgich oʻngida sirtning yuqori tomoni qoladi.

## Yoʻllar qanchalik yaxshi

Testlar nimani tekshiradi, yopiq shakllar yoki kesgich izi boʻyicha mustaqil brute-force qidiruv bilan:

- Asbob ostidagi uch balandligi shar, yumaloq burun va tekis asbob uchun yuzalar, qirralar va burchaklarda aniq, va haqiqiy balandlikdan hech qachon yuqori emas; parallel chiziqlar uchun yoʻl uning tolerans ichida qoladi, undan chuqurroq ortiqcha kesish yoʻq.
- Qiya tekislikdagi yoʻl uzunliklari yopiq shakl bilan mos; tekisdagi skallop oʻtishlari soʻralgan masofada va tizma soʻralgan balandlikda.
- Oʻtishdan keyin material simulyatsiyasi ortiqcha kesishni koʻrsatmaydi va qolgan tizmalarni koʻrsatadi.

Bu yoʻllar nimalar emas: ular asosiy pardoz oʻtishlari, ishlab chiqarish tizimi taklif qiladigan hammasi emas.

- Hali qurilmagan: doimiy z (waterline), qalam va burchak tozalash, radial va spiral oʻtishlar, egri chiziqni sirtga proyeksiyalash, tekis maydonlarni aniqlash, qolgan materialni kesish (rest machining), tutqich va dastaning toʻqnashuvini tekshirish, hamda asbobni egish.
- Asbob markazi model ustida qoladi: yoʻllar modelning chetida toʻxtaydi, undan tashqariga chiqmaydi, shuning uchun chetdagi vertikal devor pastigacha pardozlanmaydi.
- Ostki kesimlar koʻrinmaydi (yuza yuqoridan asbob tegadigan narsa).
- Model yadrodagi mesh: yoʻllar mesh ni kuzatadi (uning akkord toleransi detal diagonalining taxminan 0.0002 qismi), aniq sirtni emas.
- Katta modelni nozik tolerans bilan pardozlash koʻp qisqa harakatli uzun dastur beradi. Chiqishni dastgohingizning oʻz simulyatorida tekshiring, keyin kesing.
