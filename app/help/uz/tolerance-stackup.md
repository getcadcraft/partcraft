---
title: Toleranslar zanjirlari
summary: Yigʻmadagi detallar orqali yoʻnalgan zanjirni tanlang va uning oxiridagi boʻshliq qanchaga oʻzgarishi mumkinligini koʻring: eng yomon holat va RSS, eng muhim oʻlchamlar birinchi oʻrinda.
keywords: toleranslar zanjiri, stackup, tolerantlik tahlili, tolerantlik zanjiri, oʻlchamlar zanjiri, halqa, boʻshliq, tirqish, eng yomon holat, rss, root sum square, statistik tolerantlash, hissa qoʻshuvchilar, sezgirlik, gd&t, umumiy tolerantlik, iso 2768
from: cbdb3159
---

**Toleranslar zanjiri** (stack-up) bir nechta detal orqali oʻtuvchi zanjir boʻylab oʻlchamlarni qoʻshadi, bu odatda boʻshliq boʻlgan natija har bir detal oʻz tolerantligi ichida qilinganda qanchaga oʻzgarishini koʻrsatadi.

## Zanjirni tanlash

1. Yigʻmani oching va Assembly guruhidagi {{ui:Stack-up}} ni tanlang. Koʻrinish ustida kartochka ochiladi.
2. Zanjir **boʻylab** oʻlchanishini tanlang: yigʻmaning X, Y yoki Z si, yoki {{ui:The first face's normal}}.
3. {{ui:Pick the chain}} ni bosing va zanjir oʻtadigan yuzalarni **tartib bilan** bosing: boʻshliqning bir tomonidan boshlang, detallar orqali oʻting va boʻshliqning boshqa tomonida tugating.
4. {{ui:Done}} yoki Enter ni bosing. Backspace oxirgi bosishni qaytaradi; Esc bekor qiladi.

Bir detaldagi ikki bosish shu detalning oʻlchamini (zanjir boʻylab masofasini) beradi. Boshqa detaldagi bosish ular tegadigan joyda ularning **interfeysini** hosil qiladi; u tolerantlikka ega emas, agar siz uni kiritmasangiz. Havolalar zanjir yoʻnalishiga qarab qoʻshadi yoki ayiradi va halqani yopadi: nominal boʻshliq model koʻrsatgan narsa.

Qoʻlda ham {{ui:Add a link}} ni bosib, uning nominalini, tolerantligini va qoʻshadimi (+) yoki ayiradimi (−) ekanini kiritishingiz mumkin.

## Har bir havolaga tolerantlik bering

Har bir havolada **yuqori** va **past** chetlanish bor (masalan, +0.1 va −0.05). **Tolerantlik manbai** ularni detaldan toʻldiradi:

- **Umumiy tolerantlik**: detal chizmasi shtampidagi Tolerance maydoni (qarang [Chizmani PDF ga](topic:drawing-pdf)), u ±0.1, +0.2/-0.1 yoki ISO 2768-f, -m, -c yoki -v (ISO 2768-1 chiziqli tolerantliklar, havolaning oʻlchamiga koʻra) boʻlganda oʻqiladi. Detalning umumiy tolerantligi zanjir tanlanganda darhol qoʻllanadi.
- **GD&T**: detal chizmasidagi istalgan shakl-nazorat ramkasi. Joylashuv, profil va yugurish zonalari tolerantlikning yarmini ± beradi. Orientatsiya yoki shakl tolerantligi odatda oʻlcham tolerantligi ichida boʻladi: uni faqat zanjir nazorat qilinadigan yuzaga tegadigan joyda qoʻshing. Ⓜ yoki Ⓛ bilan zona oʻz koʻrsatilgan oʻlchamida olinadi; bonus tolerantlik hisobga olinmaydi.
- **Kiritilgan**: siz yozgan istalgan raqamlar.

## Natijalarni oʻqish

- **Nominal boʻshliq** va tolerantliklar teng boʻlmaganda **oʻrtacha boʻshliq**: +0.2/−0 va +0/−0.1 diapazon oʻrtasini siljitadi.
- **Eng yomon holat**: hamma tolerantliklar bir vaqtda chegarasida. Boʻshliq bundan tashqariga hech qachon chiqmaydi.
- **RSS** (ildiz kvadratlar yigʻindisi): har bir tolerantlik normal taqsimotning uch standart chetlanishi sifatida olinadi va ularning kvadratlari yigʻindisining kvadrat ildizi sifatida qoʻshiladi. Koʻpgina yigʻmalar eng yomon holat ichida yaxshi joylashadi; bu seriyali ishlab chiqariladigan detallar uchun odatiy baho.
- **Boʻshliq kamida** va **Boʻshliq koʻpi bilan** ni bering: eng yomon holat har doim chegarada qolishini va RSS bir million yigʻmadan nechtasi tashqarida boʻlishini koʻrish uchun.
- **#** ustuni havolalarni RSS dagi **ulushi** boʻyicha tartiblaydi: eng katta farqni berish uchun birinchilarini qattiqroq qiling.

{{ui:Save CSV}} havolalarni, ularning ulushlarini va natijalarni yozadi. Toleranslar zanjirlari yigʻma faylida saqlanadi va har bir oʻzgarish {{key:Mod+Z}} uchun bir qadam.

:::note
Toleranslar zanjiri bir yoʻnalishli. U zanjir boʻylab burchaklar yoki burilishlarni kuzatmaydi va eskizlardan oʻlchamli tolerantliklarni oʻqimaydi: ularni kiritilgan tolerantlik sifatida yoki shtamp orqali bering.
:::
