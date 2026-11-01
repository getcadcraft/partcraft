---
title: Mesh yadrosi
summary: Bu versiya PartCraft har bir detalni brauzeringizda ishlaydigan mesh yadrosi bilan quradi. Bu dumaloq yuzalar, hajmlar va fayllar uchun nimani anglatadi, u ishlayotganini qanday bilish mumkin va qaysi elementlar aniq yadroni kutadi.
keywords: yadro, mesh, manifold, aniq, b-rep, faset, egri chiziqlar, opencascade, occt, yumaloqlash aniq yadro talab qiladi, hali qurilmagan, oflayn, webassembly
from: 68d32d16
---

Geometriya yadrosi tarixingizni yaxlit jismga aylantiradigan dvigatel. Bu versiyada PartCraft ning bitta yadrosi bor: **mesh yadrosi** (manifold-3d). U kompyuteringizda kichik WebAssembly dasturi sifatida ishlaydi va ilova ochilgandan bir zum keyin tayyor boʻladi. Detalingiz haqidagi hech narsa hech qayerga yuborilmaydi.

| | Mesh yadrosi |
|---|---|
| Dumaloq shakllar | Tekis fasetlar. **Egri chiziqlar** detal panelida qanchalik mayda ekanini belgilaydi |
| Hajmlar va maydonlar | Faset yaxlit jism boʻyicha, dumaloq detallarda biroz kam |
| Eskizlar, ekstruziya, kesish, aylantirish, teshiklar, takrorlashlar, aks ettirish, yordamchi tekisliklar | Ha |
| Yumaloqlash va faska | Tekis yuzalar orasidagi toʻgʻri qirralarda; uchrashadigan yumaloqlar tekis kesiladi |
| Qobiq va qiyalik | Qobiq tekis yuzalarni ochadi (aniq devor qalinligi); Qiyalik tekis yuzalarni egadi |
| Eksportlar | STL, 3MF, STEP (faset), chizma PDF va DXF |
| Chizma koʻrinishlari | Fasetlardan chiziladi, kesim koʻrinishlari ham kiradi |
| Yuzalar va qirralar | Turi boʻyicha nomlangan va tanilgan (tekis, silindr, konus, sfera, torus; toʻgʻri, aylana): eskizlardan olinadi. Simulyatsiya, Generativ va Ishlab chiqarish ish maydonlari, Oʻlchash, tanlash va teshiklar jadvali ulardan foydalanadi |

Holat satrining oʻng chetidagi belgi detalni qurayotganda **Mesh yadrosi** deydi.

## Aniq yadroni kutayotgan narsalar

Aniq (B-rep) yadro haqiqiy aylanalar, silindrlar va konuslarni, har qanday qirraga silliq yumaloqlashni, sveep, loft, sirtlar, list metall, qovurgʻalar, bir nechta jism, STEP import va aniq STEP eksportni saqlaydi va ular aynan shunga qurilgan. PartCraft ning oldingi laboratoriya versiyalari buning uchun OpenCascade ishlatgan. Uning litsenziyasi (LGPL) bu relizga mos emas, chunki bu relizdagi har bir ilova Apache-2.0 va faqat ruxsatnomali kutubxonalardan foydalanadi, shuning uchun u kiritilmagan. Bu uchun hech qanday sana belgilanmagan.

Shunga qadar bu elementlar tanlanganda **Hali qurilmagan** deydi: holat satri sababini koʻrsatadi, ularning tugmalari maslahatlari "hali qurilmagan (aniq yadro kerak)" bilan tugaydi. [Hali qurilmagan narsalar](topic:not-built-yet) ularning har birini va oʻrniga nima qilish kerakligini sanab beradi.

Oldingi versiyada ular bilan yaratilgan detal baribir ochiladi. Bu elementlar tarixda "qurilmagan" deb belgilangan holda qoladi (sababini koʻrish uchun ustiga oʻting), qolgan detal quriladi va saqlash ularni oʻzgartirmasdan saqlab qoladi.

## Dumaloq yuzalar va Egri chiziqlar

Mesh yadrosi aylanani koʻpburchak sifatida chizadi. Detal panelidagi **Egri chiziqlar** toʻliq aylana necha tomonga ega boʻlishini belgilaydi: tomonlar qancha koʻp boʻlsa, shunchalik silliq koʻrinadi va haqiqiy qiymatga yaqinroq oʻlchanadi, lekin qurilishi uzoqroq davom etadi. {{ui:Oʻlchash}} dan olingan hajmlar, maydonlar va masofalar bu faset yaxlit jism boʻyicha: teshik yoki qoʻshilgan qism uchun ular dumaloq shakldagidan biroz kichik boʻladi.

## Onlayn va oflayn

Mesh yadrosi ilovaning oʻz yuklab olinadigan qismi. Ulanishsiz ishlash uchun onlayn boʻlganingizda PartCraft ni oflayn ishlash uchun saqlang: ilova panelida {{ui:Oflayn uchun saqlash}} ni tanlang va **Oflayn tayyor** deguncha kuting. Batafsil: [Oflaynda ishlash](common:offline).
