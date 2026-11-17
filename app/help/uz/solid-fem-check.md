---
title: Solid FEM: bitta detalning kuchlanish tekshiruvi
summary: Solid FEM qoʻshimchasini yoqing, detalni mesh qiling, 3D koʻrinishda qotirilgan yuzalar va yukni tanlang, yechting va model ustida siljish hamda von Mises kuchlanishini oʻqing.
keywords: solid fem, chekli elementlar, fea, kuchlanish, von mises, siljish, qotirilgan yuza, yuk, bosim, gravitatsiya, xos chastota, tebranish shakli, mesh, qoʻshimcha
from: 8b7e6ba2
---

## Nima qilasiz

Yuk ostida bitta qattiq detalni tekshiring: qayerda siljishi va qayerda kuchlanish eng yuqori ekanligini. Tahlil chiziqli va elastik, shuning uchun u tekshirish vositasi; natijalarni muhandisingiz koʻrib chiqadi.

## Qadamlar

1. {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} ni tanlang va {{ui:Solid FEM}} ni yoqing (siz yoqmaguningizcha u oʻchiq boʻladi). Oʻng paneldagi {{ui:Solid FEM}} yorligʻini oching.
2. {{ui:Material}} ostida birini tanlang yoki {{ui:Maxsus}} ni tanlab, Puasson koeffitsiyenti, zichlik va oqish kuchlanishini kiriting.
3. {{ui:Qotirilgan yuzalarni qoʻshish}} ni bosing, 3D koʻrinishda ushlangan yuzalarni bosing, keyin {{ui:Tanlashni tugatish}} ni bosing.
4. {{ui:Kuch qoʻshish}}, {{ui:Bosim qoʻshish}} yoki {{ui:Gravitatsiya qoʻshish}} bilan yuk qoʻshing va uning yuzalarini xuddi shunday tanlang.
5. {{ui:Detalni mesh qilish}} ni bosing, keyin {{ui:Yechish}}. Chastotalar kerak boʻlsa, avval {{ui:Tahlil}} ostida {{ui:Xos chastotalar}} ni tanlang.
6. {{ui:Natijalar}} va {{ui:Ogohlantirishlar}} ni oʻqing, keyin von Mises kuchlanishi, siljish yoki tebranish shaklini chizish uchun {{ui:Modelda koʻrsatish}} ni bosing; {{ui:Grafikni olib tashlash}} uni olib tashlaydi.

## Izohlar

- Sahifa belgilangan elementlar soniga qadar yechadi; holat satri elementlar oʻlchami juda mayda boʻlganda shuni aytadi.
- Qotirilgan yuzalarda, yuk nuqtalarida va oʻtkir burchaklarda kuchlanish mesh aniqlashtirilganda oshadi. Eng yuqori qiymatga tayanishdan oldin aniqlashtiring va solishtiring.
- Har bir oʻzgarish bitta bekor qilish qadami, sozlamalar esa detal faylida saqlanadi.
- Oqish va kontakt tahlillari uchun qarang: [Kuchlanish va egilishni tekshirish](topic:simulation).
