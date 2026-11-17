---
title: STEP faylini ochish va unga qurish
summary: Yetkazib beruvchining yoki boshqa CAD dasturining STEP modelini PartCraft ga qattiq jism sifatida olib keling: yangi detal sifatida yoki joriy detalga qoʻshib, qaysi tomoni yuqoriga qarashini belgilang va unga eskiz hamda elementlar qoʻshing.
keywords: step, stp, import, step ochish, ap203, ap214, ap242, yetkazib beruvchi modeli, qattiq jism, import qilingan jism, yuqori oʻq, z yuqoriga, y yuqoriga, uchburchaklar, faset, yigʻma step
from: ca0eca5f
---

PartCraft `.step` yoki `.stp` fayllarini (AP203, AP214 va AP242) eskiz chizish, kesish, teshish va oʻz elementlaringiz bilan birlashtirish mumkin boʻlgan **qattiq jismlar** sifatida ochadi. Jismning oʻz tarixi yoʻq: uni yaratilgan oʻlchamlari bilan oʻzgartirib boʻlmaydi, faqat unga qoʻshish yoki undan kesish mumkin.

Bu versiya har bir detalni mesh yadrosi bilan quradi, shuning uchun STEP fayl **uchburchaklar** sifatida oʻqiladi: tekis yuzalar tekis qoladi, egri yuzalar (silindrlar, konuslar, sferalar, torlar, B-spline yuzalar) koʻp kichik tekis yuzalarga aylanadi. Uning hajmi aniq hajmdan bir foizning kasridan kam farq qiladi. Egri yuzalarni aniq saqlash uchun aniq yadro kerak, bu versiyada u yoʻq.

## STEP faylini ochish

1. {{ui:Ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing va `.step` yoki `.stp` faylni tanlang. Yoki uni 3D koʻrinishga tashlang.
2. PartCraft faylni oʻqiydi va topganini koʻrsatadi, masalan: "AP214 fayl: 1 ta jism, 10 ta yuza, uchburchaklar sifatida oʻqildi." Quyida uchburchaklar soni, tashlab ketilgan yoki birlashtirilgan narsalar va natija yopiq-yopiqmasligi koʻrsatiladi.
3. **Fayldagi yuqori** ni tekshiring. STEP fayl oʻz birligini aytadi (millimetr, dyuym, metr…); PartCraft uni millimetrga aylantiradi, shuning uchun **Fayldagi birliklar** "Millimetr" deb koʻrsatadi, "fayl shuni aytadi". **Bu yerdagi oʻlcham** natijaning qanchalik katta boʻlishini koʻrsatadi.
4. Boʻsh detal uchun {{ui:Jism sifatida ochish}} ni, detalda elementlar allaqachon boʻlsa {{ui:Shu detalga qoʻshish}} yoki {{ui:Yangi detal}} ni tanlang. Qoʻshishda **Undan foydalanish** nimani bajarishni soʻraydi: qoʻshish, kesish yoki faqat kesishgan qismni saqlash.

Tarixda **Imported1** elementi paydo boʻladi va holat satrida masalan shunday xabar chiqadi: "plate.step qattiq jism: 57995.937 mm³, eskiz chizish uchun 6 ta tekis yuza."

## STEP yigʻma sifatida

Yigʻma bitta jism sifatida keladi, uning barcha detallari fayl ularni joylashtirgan joyida boʻladi ("fayldagi 3 ta detal oʻz turgan joyiga keladi"). Ikki marta ishlatilgan detal ikki marta keladi. Detallarning nomlari va yigʻma daraxti saqlanmaydi.

## Qaysi tomoni yuqoriga qarashini belgilash

Koʻpchilik CAD dasturlari Z yuqoriga qarab ishlaydi; PartCraft esa Y yuqoriga. Standart holatda PartCraft faylni shunday aylantiradiki, uning Z yoʻnalishi bu yerda yuqoriga qaraydi. Agar detal yonboshiga yotib kelsa, **Imported1** ni tanlang va **Fayldagi yuqori** ni **Y yuqoriga** qiling. **Fayldagi birliklar** va **Undan foydalanish** ham shu yerda oʻzgartirilishi mumkin; har bir oʻzgarish bitta qaytarish bosqichi.

## Unga qurish

- Jismning tekis yuzasini bosing va {{ui:Bu yuzada eskiz}} ni tanlang. STEP modelning tekis yuzalari jism qayta qurilganda oʻz oʻrnini saqlaydi.
- Boshqa detalda boʻlgani kabi kesiklar, teshiklar, boʻrtmalar, namunalar va simmetriyalar qoʻshing.
- **Detal** oynasida hajmini, sirt maydonini va oʻlchamini tekshiring.

Filetlar, fasklar va qobiqlar aniq yadroni talab qiladi, bu versiyada esa har qanday detal kabi ishlamaydi ([Mesh yadrosi](topic:solid-kernels)).

## Qayerda saqlanadi

Uchburchaklar `.partcraft.json` faylning **ichida** saqlanadi, shuning uchun detal fayli oʻz-oʻzidan toʻliq: STEP faylga qayta ehtiyoj yoʻq.

## Xabarlar

| Xabar | Nima degani |
|---|---|
| '"part.stp" STEP fayl emas (u ISO-10303-21 bilan boshlanmaydi).' | Fayl oddiy STEP matni emas. Jonatuvchidan AP203, AP214 yoki AP242 STEP fayl soʻrang |
| "STEP faylni oʻqib boʻlmadi: uning maʼlumotlar qismi yoʻq yoki buzilgan." | Fayl kesilgan yoki buzilgan. Uning nusxasini qayta koʻchiring |
| "STEP faylda na qattiq jism, na sirt jismi bor: olib kelinadigan hech narsa yoʻq." | Faylda faqat chizmalar, nuqtalar yoki maʼlumotlar bor. Qattiq jism soʻrang |
| "Bu STEP fayl import qilish uchun juda katta (60 MB dan ortiq)." va oʻqish dasturining boshqa chegaralari (yozuvlar, yuzalar, uchburchaklar) | Modelni manbada soddalashtiring yoki detallarni birma-bir yuboring |
| "… faylning buzilgan satrlari oʻtkazib yuborildi." | Ba'zi satrlarni oʻqib boʻlmadi; qolgani olib kelindi. Jismni tekshiring |
| "… yuzalarni uchburchaklarga aylantirib boʻlmadi va ular chiqarib tashlandi." | Bu yuzalar teshiklar qoldiradi, PartCraft ularni toʻldirishga harakat qiladi; jism yopilmasa, u qoʻshilmaydi |
| "… oʻqilmaydigan turdagi yuzalar (…) oʻtkazib yuborildi." | Kamdan-kam uchraydigan yuza turi. Oddiy yoki B-spline yuzali modelni soʻrang |
| "U yopilmaydi …" | Yuzalar yopiq qattiq jism hosil qilmaydi (sirt modeli yoki tushib qolgan yuzalar). PartCraft teshiklarni koʻrsatadi va hech narsa qoʻshmaydi |

## Chegaralar

- Egri yuzalar bu versiyada har qanday detal kabi tekis faset sifatida chiziladi va oʻlchanadi. PartCraft fayldagi tekis yuzalarni, silindrlarni, konuslarni, sferalar va torlarni jism bilan birga saqlaydi, shuning uchun {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} ularni haqiqiy sirtlar sifatida qaytaradi: teshiklar teshik boʻlib qoladi, siz qoʻshgan elementlar bilan birga. Fayl splayn, sweep yoki aylanish sirti sifatida bergan yuzalar eksportda faset boʻlib qoladi. 0.9.1 versiyasidan oldin saqlangan detalda saqlangan yuzalar yoʻq: ularni olish uchun STEP faylni qayta oching.
- Tekis yuza tanlanganda {{ui:Eksport}} › {{ui:Eskiz yoki tekis yuzning DXF fayli}} faylning dumaloq teshigini haqiqiy aylana sifatida yozadi.
- Ranglar, jism nomlari, yigʻma tuzilmasi va PMI (fayldagi toleranslar) oʻqilmaydi.
- STEPdan tashqari PartCraft STL, OBJ va 3MF meshlarini ([STL, OBJ yoki 3MF ni ochish](topic:open-meshes)) hamda `.3dm` fayllarini ([.3dm modelini ochish](topic:open-3dm-files)) qattiq jism sifatida ochadi. IGES va boshqa dasturlarning mahalliy fayllari qoʻllab-quvvatlanmaydi.
- Aniq yadroli versiya bilan import qilingan STEP qattiq jismli detal STEP matnini saqlaydi; bu versiya bu elementni oʻtkazib yuboradi ("tayyor emas"). Uni uchburchaklar sifatida olib kelish uchun STEP faylni qayta oching.
