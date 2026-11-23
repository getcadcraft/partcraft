---
title: 3D pardozlash — parallel va scallop
summary: Butun model egri sirtini shar, yarim-dumaloq yoki yassi freza uchi bilan pardozlang: istalgan burchakdagi parallel chiziqlar yoki bir-biridan belgilangan masofadagi oʻtishlar bilan, shunda ular orasidagi qirralar siz soʻragan balandlikni saqlaydi. Yoʻllar nimani kafolatlaydi va nimani kafolatlamaydi.
keywords: 3D pardozlash, pardozlash, parallel, raster, scallop, doimiy scallop, tishcha, shar uchi, yarim-dumaloq uchi, sirt, tolerantlik, qadam, nishablik, qoldiriladigan zaxira, tushirish freza, ortiqcha kesish
from: 942d2341
---

Ishlab chiqarishdagi ikki operatsiya **butun model sirtini** asbob vertikal holatda ushlanganda (uch oʻq) kesadi. Ular tanlov talab qilmaydi: yuqoridan koʻrinadigan modelning hammasi bilan ishlaydi. Avval detalni qoʻpol ishlang (moslashuvchan yoki oyma); kesilmagan zaxira ustidagi pardozlash oʻtishi chuqur kesishini ogohlantiradi.

## Parallel

Modelning ustidan siz belgilagan **burchak** boʻyicha toʻgʻri chiziqlar, bir-biridan **qadam** masofasida (asbob diametrining bir boʻlagi). Har bir chiziq sirtga ergashadi: asbob uchi shunday balandlikda boʻladiki, frezaning hech bir qismi model ostiga tushmaydi, va sirt egilgan joyda chiziq yanada mayda kesiladi. **Zig-zag** yoqilgan boʻlsa, asbob chiziqlar orasida xavfsiz boʻlgan joylarda pastda qoladi (harakat boʻylab tekshiriladi); aks holda koʻtariladi.

- **Tolerantlik**: toʻgʻri chiziq boʻlagi haqiqiy uchi balandligidan qanchaga chetga chiqishi mumkin (yarmi har bir boʻlak oʻrtasidagi chegara sifatida ishlatiladi). Standart: 0.01 mm.
- **Faqat sirt kamida … va eng koʻpi … (°) boʻlgan joyda**: faqat yassi yoki faqat tik joylarni pardozlang. Sirt diapazondan tashqarida boʻlsa, chiziq tashlab ketiladi va asbob koʻtariladi.
- **Qoldiriladigan zaxira**: model shu masofaga siljitiladi (frezaning oʻzi shuncha kattalashtirilgan: shar va yarim-dumaloq asboblar uchun aniq; yassi asbob kamida shuncha qoldiradi).
- **Pastki chegara**: bu z dan pastda hech narsa kesilmaydi.

## Scallop

Sirt boʻylab bir-biridan doimiy masofada turadigan oʻtishlar, shunda ikki qoʻshni oʻtish orasida qolgan qirra (scallop) siz soʻragan **balandlik**ka ega boʻladi. Masofa balandlik va shar radiusidan kelib chiqadi: s = 2·√(2·R·h − h²); masalan, Ø6 shar va 0.02 mm qirra uchun oʻtishlar orasida taxminan 0.69 mm. Yarim-dumaloq asbob oʻzining burchak radiusidan foydalanadi. Yassi tishli freza rad etiladi: uning oʻlchanadigan qirrasi yoʻq.

Oʻtishlar **model chetidan, ichkariga** yoki **uning yuqorisidan, pastga** boshlanadi. Ular sirt boʻylab masofaning konturlari (balandlik emas), shuning uchun nishablikda reja boʻyicha yaqin, yassi joyda esa keng oraliqda boʻladi. Masofa sirt ustidagi toʻr boʻyicha oʻlchanadi va taxminan 1 % aniq; qirra balandligi sirt yassi yoki asta egilgan joyda aniq, tez egilgan joyda taxminiy. **Climb** sirtning balandroq tomonini frezaning oʻng tomonida saqlaydi.

## Yoʻllar qanchalik yaxshi

Testlar nimani tekshiradi, yopiq formulalar yoki frezaning izi boʻyicha mustaqil toʻliq qidiruv bilan:

- Asbob ostidagi uch balandligi shar, yarim-dumaloq va yassi asbob uchun toʻr yuzlari, qirralari va burchaklarida aniq va hech qachon haqiqiy balandlikdan yuqori emas; parallel chiziqlar uchun yoʻl uning tolerantligi ichida qoladi, undan chuqurroq ortiqcha kesish boʻlmaydi.
- Qiya tekislikdagi yoʻl uzunliklari yopiq formula bilan mos keladi; tekislikdagi scallop oʻtishlari soʻralgan masofada boʻladi va ular orasidagi qirra soʻralgan balandlikda chiqadi.
- Zaxira simulyatsiyasi oʻtishdan keyin ortiqcha kesish koʻrsatmaydi va qolgan qirralarni koʻrsatadi.

Bu yoʻllar nima emas: ular asosiy pardozlash oʻtishlari, ishlab chiqarish tizimi taklif qiladigan hammasi emas.

- Hali yoʻq: waterline (doimiy z) pardozlash, qalam va burchak tozalash, radial va spiral oʻtishlar, egri chiziqni sirtga proyeksiyalash, yassi maydonni aniqlash, tutgich va dastak toʻqnashuvini tekshirish. Qoʻpol va qoldiq ishlov alohida operatsiyalar ([3D qoʻpol va qoldiq ishlov berish](topic:rough-3d)); egilgan asbob — [5 oʻqli pardozlash](topic:multi-axis#5-axis-finishing).
- Asbob markazi model ustida qoladi: yoʻllar modelning chetida toʻxtaydi, undan tashqariga chiqib ketmaydi, shuning uchun chetdagi tik devor oʻz tagigacha pardozlanmaydi.
- Ostki kesiklar koʻrinmaydi (asbob yuqoridan uchraydigan sirt koʻriladi).
- Model toʻr yadrosidan olingan, shuning uchun yoʻllar toʻrga ergashadi (uning vatar tolerantligi detal diagonalining taxminan 0.0002 qismi), aniq sirtga emas.
- Katta modelni mayda tolerantlikda pardozlash koʻp qisqa harakatli uzun dastur hosil qiladi. Kesishdan oldin chiqishni oʻz stanokingizning simulyatorida tekshiring.
