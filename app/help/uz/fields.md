---
title: Maydonlar: shakllar masofa sifatida
summary: Maydon nima (shakl sirtigacha masofa sifatida saqlanadi), uni skriptda primitivlardan, boolean amallardan, panjaralar va minimal sirtlardan qanday yasash, u qanday jismga aylanishi va nega bir xil skript doim bir xil baytlarni berishi.
keywords: maydon, imzoli masofa, sdf, voksel, gyroid, tpms, panjara, boolean, offset, qobiq, aralashtirish, ikki tomonlama kontur, deterministik, yopiq, manifold, gʻisht
from: faab7480
---

**Maydon** shaklni har qanday nuqtadan uning sirtigacha boʻlgan masofa orqali tasvirlaydi: ichkarida manfiy, sirtda nol, tashqarida musbat. Radiusi 5 boʻlgan sfera bu "markazgacha masofa minus 5". Shakllarni birlashtirish masofalar ustida arifmetika: birlashma ikkitadan kichigi, kesishma kattasi, bir shakldan ikkinchisini ayirish esa birinchisi va ikkinchisining manfiysi orasidagi kattasi. Shaklni 1 mm kattalashtirish masofadan 1 ni ayirishdir; devor ichi boʻsh shakl masofaning oʻzi, qayta buklangan holda.

Shuning uchun maydonlar panjaralar, kanallar va gradiyentli devorlar uchun yaxshi: gyroid sirti "sinuslar yigʻindisi nolga teng" shartidir, detal boʻylab 1 dan 3 mm gacha qalinlashadigan devor esa detal boʻylab oʻzgaradigan son.

## Maydondan jismgacha

`to_body(field, h)` maydonni `h` millimetr qadamli nuqtalar toʻrida namuna qiladi, faqat sirt yaqinidagi nuqtalarni saqlaydi (8 × 8 × 8 gʻishtli siyrak toʻr), va sirtni **ikki tomonlama kontur** bilan quradi: har bir sirt katakchasida bitta uch, sirt tekisliklari uchrashgan joyda, shuning uchun oʻtkir qirra bir voksel aniqlikda oʻtkir qoladi. Sirt yopiq va har bir qirra aynan ikki uchburchak bilan ulashgan; hisobot buni aytadi. Voksel oʻlchamidan taxminan uch vokseldan ingichka element qisilib qolishi mumkin, va shunda hisobot jismni yopiq qattiq emas deb aytadi, buni yashirmaydi.

Voksel oʻlchami aniqlikdir: 25 voksel kenglikdagi sferaning hajmi bir necha yuzdan bir foiz ichida; devor faqat oʻz voksellari kabi aniq. Toʻr qanchalik yirik boʻlsa, shunchalik tez ishlaydi.

## Doim bir xil baytlar

Maydonda soat yoʻq va tasodifiy son yoʻq. Gyroidning sinus va kosinuslari hamda kutubxonadagi har bir eksponenta, logarifm va daraja oddiy arifmetikadan hisoblanadi, shuning uchun Node, Chrome, Firefox va Safari bir xil bitlarni beradi; toʻr doimiy tartibda aylanib chiqiladi, shuning uchun bir xil skript bir xil kiritmalar bilan istalgan kompyuterda va istalgan sonli ishchi oqimda bayt-bayt bir xil mesh va maʼlumot varaqlarini beradi. Bu sinovdan oʻtgan, shu jumladan brauzer va Node oʻrtasida ham.

## Keyingi qadam

[Generator yozish](topic:write-a-generator) maydonlar bilan detal quradi; [Muhandislik kutubxonasi](topic:engineering-library) uni oʻlchaydi.
