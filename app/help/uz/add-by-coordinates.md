---
title: Eskiz geometriyasini koordinatalarni terish orqali qoʻshish
summary: Eskiz panelidagi Koordinatalar boʻyicha qoʻshish boʻlimi yordamida chiziq, markaziy chiziq, toʻrtburchak, aylana va nuqtalarni aniq joylarga qoʻying, faqat klaviatura bilan.
keywords: koordinatalar, matn bilan kiritish, klaviatura orqali kiritish, raqamli kiritish, aniq joylashuv, x y, mutlaq koordinatalar, qulaylik, sichqonchasiz
from: 5e6c1656
---

Raqamlarni bilsangiz, ularni terish bosish va oʻlchamlash orqali qilishdan tezroq. **Koordinatalar boʻyicha qoʻshish** eskiz ochiq boʻlganda oʻng panelda turadi. U, shuningdek, sichqonchasiz ham eskiz qurishga imkon beradi.

Koordinatalar millimetrda beriladi, eskizning oʻz oʻqlarida: x oʻngga, y esa eskizga qarasangiz yuqoriga yoʻnalgan, (0, 0) koordinata boshida (xoch belgili qizil aylana).

## Shakl qoʻshish

1. Eskiz oching (qarang: [Birinchi eskizni chizish](topic:sketch-basics)).
2. Oʻng panelda **Koordinatalar boʻyicha qoʻshish** qismiga aylantiring.
3. **Qoʻshish** ichida shaklni tanlang: Chiziq, Markaziy chiziq, Toʻrtburchak, Aylana yoki Nuqta.
4. Katakchalarni toʻldiring:

| Shakl | Katakchalar |
|---|---|
| Chiziq | **Boshlanish x, y** va **Tugash x, y** |
| Markaziy chiziq | **Boshlanish x, y** va **Tugash x, y** |
| Toʻrtburchak | **Burchak x, y** va **Qarama-qarshi burchak x, y** |
| Aylana | **Markaz x, y** va **Radius** |
| Nuqta | **Joyi x, y** |

5. {{ui:Qoʻshish}} ni tanlang yoki istalgan katakchada {{key:Enter}} ni bosing.

Shakl paydo boʻladi, holat satrida esa masalan "Toʻrtburchak qoʻshildi." deb chiqadi. Katakchalar boʻshaydi, keyingisi uchun tayyor. Har bir qoʻshish bitta ortga qaytarish qadami boʻladi.

Juftlikni ikki son bilan, vergul yoki boʻsh joy orqali yozing: `0, 0`, `25 -10` yoki `12.5,40`. Manfiy sonlar va oʻnlik kasrlar ham mumkin. Radius noldan katta boʻlishi kerak. Biror narsa son sifatida oʻqilmasa, holat satrida shunday yoziladi: "Koordinatalarni "x, y" shaklida va noldan katta radius bilan kiriting."

## Misol: teshikli plastina konturi, terib kiritilgan

1. **Old tekislik** da eskiz oching.
2. **Qoʻshish**: Toʻrtburchak. **Burchak x, y**: `-50, -30`. **Qarama-qarshi burchak x, y**: `50, 30`. {{key:Enter}}.
3. **Qoʻshish**: Aylana. **Markaz x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Markaz x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. {{ui:Eskizdan chiqish}} ni, soʻng {{ui:Ekstruziya}} ni tanlang: ikkita 10 mm teshikli 100 × 60 plastina.

## Terib kiritilgan geometriya joylashtiriladi, bogʻlanmaydi

Terib kiritilgan koordinatalar geometriyani toʻgʻri joyga qoʻyadi, lekin ular **munosabatlar** emas. Shakllar koʻk rangda qoladi (qisman aniqlangan) va siz ularni sudrasangiz yoki boshqa oʻlchamni oʻzgartirsangiz siljishi mumkin:

- terib kiritilgan toʻrtburchak oʻz burchagi, gorizontal va vertikal munosabatlariga ega, xuddi chizilgan kabi, lekin uni koordinata boshiga hech narsa bogʻlamaydi;
- terib kiritilgan chiziqda gorizontal yoki vertikal munosabat yoʻq, hatto tekis chiziq terilgan boʻlsa ham;
- terib kiritilgan aylana markazi erkin.

Eskizni toʻliq aniqlash uchun keyinroq oʻlchamlar va munosabatlar qoʻshing (qarang: [Eskizni toʻliq aniqlash](topic:relations-dimensions)). Masalan, toʻrtburchak burchagini va koordinata boshini tanlab, {{ui:• Ustma-ust tushish}} ni tanlang yoki aylana markazlarini koordinata boshidan oʻlchang.

:::note
Kursorsiz ham shu nuqtagacha borish mumkin: tarixdagi tekislik qatoriga {{key:Tab}} va strelka tugmalari bilan oʻting, {{key:Enter}} bilan uni tanlang, eskiz chizish uchun {{key:S}} ni bosing, shakllarni shu yerda qoʻshing, soʻng har bir oʻlchamning yonidagi **Tahrirlash** ga yetib boring va {{key:Tab}} bilan {{ui:Eskizdan chiqish}} ni tanlang. Geometriyani tanlash, shuningdek munosabatlar yoki yangi oʻlchamlar qoʻshish, bu versiyada hali ham bosish yoki teginishni talab qiladi.
:::

## Chegaralar

- Yoylarni hozircha terib boʻlmaydi. Ularni Yoy vositasi bilan chizing yoki aylanani terib, munosabatlardan foydalaning.
- Bu katakchada nisbiy koordinatalar (oxirgi nuqtadan) yoki qutb koordinatalari (uzunlik va burchak) yoʻq.
- Terib kiritilgan geometriya mavjud nuqtalarga tortilmaydi. Ular birlashgan boʻlishi kerak boʻlsa, mavjud nuqta bilan bir xil koordinatalarni teringan, soʻng ular orasiga {{ui:• Ustma-ust tushish}} munosabatini qoʻshing.
