---
title: USB diskdan ishga tushirish
summary: Muhandislik vositalari nimani qayerga yozishi va CadCraft Studio oʻrnatuvchisiz hamda administrator huquqisiz USB diskdan yoki istalgan jilddan qanday ishlashi: sozlamalar, generatorlar, keshlar va detal fayllari hamda diskda nima qolishi.
keywords: usb, portativ, oʻrnatuvchisiz, administrator, admin, sozlamalar, data jildi, generatorlar, fayllar qayerga yoziladi, oflayn, maxfiylik, xost tizimga kirish
from: 263efc79
---

Muhandislik vositalari (generatorlar, muhandislik kutubxonasi, tekshiruvlar va maʼlumot fayllari) **administrator huquqlarini talab qilmaydi** va **oʻrnatuvchini talab qilmaydi**. Ular faqat shu yerda sanab oʻtilganlarni yozadi, boshqa hech narsani emas.

| Nima | Qayerda saqlanadi |
|---|---|
| Detallaringiz, ularning yaratilgan jismlari, maʼlumot varaqlari va tekshiruvlar | Saqlagan detal fayli (`.partcraft.json`), uni qayerga saqlagan boʻlsangiz shu yerda. |
| Fayllardan ochilgan generatorlar | Ilova ichki xotirasida: veb-sahifada brauzerning mahalliy xotirasida, portativ Studio'da esa dastur yonidagi `data` jildida. Koʻpi bilan 20 ta. |
| Sozlamalar (oʻrnatgan voksel oʻlchamlari, yechuvchi oqimlari, joylashuv) | Oʻsha ilova xotirasi. |
| Maʼlumot varaqlari, maydonlar, toʻrlar | Faqat ularni saqlaganingizda: yuklab olish siz tanlagan joyga boradi. |

Vositalar **oʻz tarmoq chaqiruvlarini amalga oshirmaydi**: ilova bilan birga keladigan generatorlar ilova jildidagi fayllardir, kutubxona va tekshiruvlar esa kompyuteringizda, tarmoqqa ulana olmaydigan ishchi jarayonda ishlaydi, muhandislik maʼlumotlari (suv va havo xossalari, materiallar) ilova ichida. Siz fayldan ochgan generator kompyuteringizda oʻqiladi va hech qayerga yuborilmaydi.

## Portativ Windows zip va Linux

Windows uchun portativ Studio sozlamalari, keshlari va qoʻshimchalarini dastur yonidagi `data` jildida saqlaydi. Linux AppImage esa, yonida `portable` nomli fayl boʻlsa, ularni oʻz yonida saqlaydi; aks holda uy jildingizdan foydalanadi. Portativ Mac shakli yoʻq: tizim yuklab olingan ilovaning oʻz yoniga yozishiga ruxsat bermaydi. Qobiqning portativ eslatmalari (`Studio` yordami) dastur nimani yozishini sanab oʻtadi.

## Xost tizimga kirish

Bu yerda hech narsa xost tizimga kirishni soʻramaydi. Printerlar, ketma-ket ulangan mashinalar va USB qurilmalar alohida: ular ish talab qilganda, har bir qurilma uchun bir marta soʻraydi, generatorlar yoki tekshiruvlar esa ularga tegmaydi.
