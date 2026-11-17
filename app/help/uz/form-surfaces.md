---
title: Form bilan erkin shakllar va sirt xususiyatlari
summary: Forma ishchi maydonida silliq boshqaruv qafasini itarish va tortish, qirralarni burmalash, simmetriyadan foydalanish, tekshirish va uni aniq jism yoki sirtga tugatish, soʻng Dizaynda yamoq, loft, tikish, qalinlashtirish, ofset, kengaytirish va qirqish. Nima aniq va nima taxminiy ekanligi.
keywords: forma, erkin shakl, t-spline, subdivision, catmull-clark, qafas, quadball, burma, simmetriya, zebra, egrilik, sirt, yamoq, toʻldirish, loft sirti, tikish, qalinlashtirish, ofset sirti, kengaytirish, qirqish
from: 0d326ef4
---

:::note
**Bu versiyada hali yaratilmagan.** Formani detalga tugatish va sirt xususiyatlari aniq geometriya yadrosini talab qiladi, bu PartCraft versiyasida yoʻq: u har bir detalni mesh yadrosi bilan quradi. [Hali yaratilmagan narsalar](topic:not-built-yet) nima qilish kerakligini aytadi. Sahifaning qolgan qismi ularni aniq yadro bilan ishlashini tasvirlaydi.
:::

**Forma** ishchi maydoni organik shakllar yaratadi. Siz **qafas** ni tahrirlaysiz — burchaklar, qirralar va yuzalardan iborat yirik mesh. Shakl qafas boshqaradigan silliq sirt (uning Catmull–Clark chegaraviy sirti), shuning uchun bitta burchakni siljitish sirtni uning atrofida yumshoq egadi. Koʻrinishi toʻgʻri boʻlganda, **Tugatish** uni detal tarixiga *Forma* xususiyati sifatida qoʻshadi va aniq yadro uni haqiqiy B-spline sirtlariga aylantiradi. Keyin uni yumaloqlashtirish, kesish, boshqa xususiyatlarga birlashtirish va STEP sifatida eksport qilish mumkin.

Asboblar panelining chap tomonidagi **Ish maydoni** roʻyxatidan **Forma** ni tanlang.

## Qafasni boshlash

1. Oʻng panelda **Oʻlcham** va **Boʻlinmalar** ni belgilang. Boʻlinmalar — har bir tomonga nechta yuza toʻgʻri kelishi.
2. Asboblar panelidagi {{ui:Quti}}, {{ui:Quadball}} yoki {{ui:Tekislik}} ni bosing. Panelda yana **Silindr**, **Torus** va **Bosishlar boʻyicha yuzalar** bor.

- **Quadball** — burchak nuqtalari sferada yotadigan qilib joylashtirilgan quti qafasi. Bu nuqtalar orasida sirt sferaning biroz ichida boʻladi: 2 boʻlinmada taxminan 0.4 % kam hajm.
- **Tekislik** ochiq boʻladi, shuning uchun u sirt jismiga aylanadi (quyidagi "Dizaynda sirt xususiyatlari" ga qarang).
- **Bosishlar boʻyicha yuzalar**: yuqori (yer) tekisligida yoki qafas burchaklarida 4 ta nuqtani bosing, bitta yuza hosil boʻladi. Umumiy burchaklari boʻlgan yuzalar birlashadi. Uchburchak uchun 3 nuqtadan keyin {{key:Enter}} ni, yoki toʻxtatish uchun {{key:Esc}} ni bosing.

Tugallanmagan qafasingiz detal fayli bilan birga saqlanadi, shuning uchun faylni yopib, keyinroq davom etishingiz mumkin.

## Tanlash va siljitish

- Qafasning burchagi, qirrasi yoki yuzasini bosing. {{key:Shift}}+bosish elementlarni qoʻshadi yoki chiqaradi. {{key:Esc}} tanlovni tozalaydi.
- Tanlovning oʻrtasida gizmo paydo boʻladi. Undagi oʻqni suring — boʻylab siljiydi, kvadratni suring — shu tekislikda siljiydi. {{key:W}} — siljitish, {{key:E}} — aylantirish, {{key:R}} — masshtablash uchun; yoki panel tugmalaridan foydalaning. Asboblar panelidagi {{ui:Gizmo}} ularni navbatma-navbat almashtiradi.
- **Yumshoq pasayish** (mm) shu masofa ichidagi burchaklarni ham tortadi va bu masofa chegarasida silliq ravishda yoʻqoladi.
- Har bir surish bitta bekor qilish qadami: {{key:Ctrl+Z}} va {{key:Ctrl+Y}} odatdagidek ishlaydi.

## Qafasni oʻzgartirish

Panelning **Oʻzgartirish** tugmalari tanlovda ishlaydi:

| Tugma | Nima qiladi |
|---|---|
| {{ui:Ekstruziya}} | Tanlangan yuzalar **Ekstruziya masofasi** ga normallari boʻylab tashqariga siljiydi, yangi yon yuzalar bilan. Tanlangan ochiq qirralar tashqariga yangi yuzalar oʻstiradi. |
| {{ui:Qirralar halqasi}} / Qirralar halqasini qoʻshish | Tanlangan qirrani kesib oʻtadigan toʻrtburchak yuzalar halqasini oʻrtasidan boʻladi. Koʻproq halqa zichroq egri chiziqlar beradi. |
| Nuqta qoʻshish | Tanlangan qirraning oʻrtasiga burchak qoʻshadi. |
| Boʻlish | Har bir tanlangan yuzani oʻrtasi atrofida toʻrtburchak yuzalarga boʻladi. |
| Koʻprik | Ikkita tanlangan yuzani yoki ikkita teshikni (har birida bitta ochiq qirra tanlang) yuzalar trubkasi bilan birlashtiradi. Ikkalasida ham qirralar soni bir xil boʻlishi kerak. |
| Teshikni toʻldirish | Tanlangan ochiq qirra orqali teshikni bitta yuza bilan yopadi. |
| Payvandlash | Tanlangan burchaklarni oʻrtasida bittaga birlashtiradi. |
| Tekislash | Tanlangan burchaklarni ularga eng mos keladigan tekislikka siljitadi. |
| Oʻchirish | Tanlangan yuzalar, qirralar (ikki yuza birlashadi) yoki burchaklarni oʻchiradi. |

## Oʻtkir qirralar, simmetriya va koʻrinish

- {{ui:Burmalash}} tanlangan qirralarni oʻtkir qiladi. **Burmalash ogʻirligi** 10 — toʻliq oʻtkir. Kichikroq ogʻirlik shuncha aniqlash qadami davomida oʻtkir qoladi, soʻng yumshaydi — qattiq burmaning oʻrniga zich yumaloq chiziq beradi. **Burmalashni bekor qilish** ularni yana silliq qiladi. **Oʻtkir uchi** burchakni mahkamlaydi, shunda sirt undan nuqta bilan oʻtadi.
- **Simmetriya** qafasni X, Y yoki Z = 0 boʻylab aks ettiradi. U musbat tomonni saqlaydi, uni aks ettiradi va ikki yarmini birlashtiradi. Shundan keyin istalgan tomondagi tahrir ikkalasida ham bajariladi. Aks ettirish tekisligidagi burchaklar shu tekislikda qoladi.
- {{ui:Koʻrinish}} **Silliq** (xususiyat boʻladigan sirt) va **Quti** (qafasning oʻz yuzalari) oʻrtasida almashtiradi.
- **Tahlil**: **Zebra chiziqlari** joriy koʻrinishdan chiziqli yorugʻlikni aks ettiradi. Ular silliq sirt boʻylab silliq egiladi va burmada uziladi. **Oʻrtacha egrilik** qavariq sohalarni qizil, botiq sohalarni koʻk, tekis sohalarni oq rangda boʻyaydi. U koʻrsatilgan mesh boʻyicha kotangens formulasi bilan oʻlchanadi, shuning uchun u aniq oʻlchov emas, balki yoʻriqnoma.

## Tekshirish va tugatish

- **Aniq tekshirish** qafasni aniq yadroda detalingizni oʻzgartirmasdan aylantiradi. U qafas nechta B-spline yamoq hosil qilishini, ulardan nechtasi aniqligini va natijaning yopiq, toʻgʻri jism ekanligini hamda uning hajmini xabar qiladi.
- {{ui:Tugatish}} tarixga *Forma* xususiyatini qoʻshadi yoki tahrirlayotgan formani yangilaydi va sizni Dizaynga qaytaradi. Yopiq qafas jismga aylanadi. Dizayn panelidagi **Amal** — Yangi jism, Birlashtirish, Kesish yoki Kesishtirish boʻlishi mumkin. Ochiq qafas sirt jismiga aylanadi.
- Formani keyinroq oʻzgartirish uchun uni tarixda tanlang va **Formada tahrirlash** ni bosing. Qafasni tahrirlayotganingizda tayyor jism yashirinadi.
- **Rad etish** qafasni tarixga tegmasdan tashlab yuboradi.

## Nima aniq va nima taxminiy

Qafasning har bir toʻrtburchak yuzasi, kerak boʻlganda aniqlashtirilib, bitta bikubik B-spline yamogʻiga aylanadi.

- Yuzaning har bir burchagi *muntazam* boʻlgan joyda (sirt ichida toʻrtta qirra uchrashsa, yoki ochiq qirrada yoki burma boʻylab uchta), yamoq **aniq** boʻlinish sirti hisoblanadi. Sinovlar buni 1e-9 mm gacha tekshiradi.
- **Oddiy boʻlmagan nuqta** atrofida (uchta, beshta yoki undan ortiq qirra uchrashadi, uch yoki besh tomonli yuzaning burchagi yoki burmaning uchi) aniq koʻphadli yamoq yoʻq. U yerda yamoq shu burchakdagi aniq nuqta va urinma tekislikni hamda qoʻshni qirra egri chiziqlarini oladi, shuning uchun yamoqlar hali ham boʻshliqsiz tutashadi. Nuqtada uchrashadigan qirralar boʻylab urinma uzluksizligi taxminiy. Forma paneli va xususiyat paneli eng katta burchakni beradi, odatda 2° dan kam. Xususiyat panelidagi yuqoriroq **Daraja** bu yamoqlarni kichikroq va yaqinroq qiladi.
- Oʻtkir burmalar jismning haqiqiy qirralari, shuning uchun ularni yumaloqlashtirish mumkin.
- Har bir yamoq oʻz yuzasiga ega, shuning uchun formada koʻp yuzalar boʻladi va ular orasida chiziqlar chiziladi.

## Dizaynda sirt xususiyatlari

Sirt buyruqlari Dizaynning {{ui:Koʻproq}} menyusida, xususiyatlar ostida. Ularga aniq yadro kerak. Sirt jismlari koʻk rangda shaffof chiziladi. Ular qalinlashtirilmaguncha yoki tikilmaguncha jismning bir qismi emas.

| Buyruq | Nima qiladi |
|---|---|
| Yamoq | Qirralarning yopiq halqasini toʻldiradi. Avval jismning qirralarini {{key:Shift}}+bosing, yoki uning teshigini toʻldirish uchun sirt jismini tanlang. **Urinma (G1)** yamoqni shu sirtga silliq tutashtiradi. |
| Loft sirti | Har bir eskiz uchun bitta egri chiziq zanjiri orqali sirt (ochiq yoki yopiq), tarix tartibida. |
| {{ui:Tikish}} | Sirt jismlarini umumiy qirralari boʻylab tikadi. Agar ular yopilsa, natija jism boʻladi, boshqa xususiyatlar kabi **Amal** bilan. |
| {{ui:Qalinlashtirish}} | Sirt jismiga qalinlik beradi: normali boʻylab, unga qarshi yoki ikki tomonga teng. Natija jism. |
| Ofset sirti | Sirt jismining nusxasi normallari boʻylab siljitiladi. Asl nusxa qoladi. |
| Sirtni kengaytirish | Bitta yuzali sirtni tanlagan qirralaringiz tashqarisiga oʻstiradi. |
| {{ui:Sirtni qirqish}} | Sirt jismini boshqa sirt jismi yoki jism uni kesib oʻtgan joyda kesadi. Qaysi qismni saqlashni tanlash uchun **Qism ustidagi nuqtani tanlang** ni bosing yoki qolgan hammasini saqlang. |

Tikish, Qalinlashtirish, Kengaytirish va Qirqish oʻzi boshlagan sirt jismini ishlatib yuboradi. Keyingi xususiyatlar yangisini ishlatadi.

Hozirgi cheklovlar: bir nechta alohida yopiq qismli formalar bitta jismga aylanmaydi; muntazam sohalar kattaroq sirtlarga birlashtirilmaydi; va [Hali yaratilmagan narsalar](topic:not-built-yet) ga qarang.
