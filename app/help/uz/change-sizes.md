---
title: Eskizni ochmasdan oʻlchamlarni oʻzgartirish
summary: Detalni oʻng paneldagi raqamlar bilan boshqaring: eskiz oʻlchamlari, chuqurliklar, sonlar va burchaklar, qaysi raqamlar detalni boshqarishi uchun detalni qanday rejalashtirish, va parametrlar hamda tenglamalar qayerda ustunlik qilishi.
keywords: parametrlar, boshqaruvchi oʻlchamlar, loyiha niyati, oʻlchamni oʻzgartirish, tenglamalar, global oʻzgaruvchilar, dizayn jadvali, konfiguratsiyalar, qayta oʻlchamlash, oʻlchamni tahrirlash
from: c2ae1a32
---

PartCraft detalidagi har bir oʻlcham keyinroq oʻzgartirilishi mumkin boʻlgan son: uning eskizlaridagi oʻlchamlar va xususiyatlarining sozlamalari. Oʻlchamlarini oʻzgartirish uchun eskizni ochish shart emas.

## Eskiz oʻlchamini paneldan oʻzgartirish

1. Tarixda xususiyatni bosing, masalan "Extrude1".
2. Ekstruziyaning oʻz sozlamalari ostida **Eskiz oʻlchamlari (Sketch1)** oʻz eskizining har bir oʻlchamini koʻrsatadi: "Masofa", "Diametr", "Burchak (°)" va hokazo.
3. Bitta katakchaga yangi qiymat yozing va {{key:Enter}} yoki {{key:Tab}} ni bosing.

Eskiz yangi qiymat bilan yechiladi va butun detal qayta quriladi. Eskizning oʻzini tanlasangiz, xuddi shu roʻyxat **Boshqaruvchi oʻlchamlar** deb koʻrsatiladi.

Radius yoki diametr noldan katta boʻlishi kerak, burchak esa 0 va 180 daraja orasida boʻladi; aks holda holat satrida shu aytiladi.

:::tip
Qaysi katakcha qaysi oʻlcham? Katakchalar oʻlchamlar yaratilgan tartibda joylashgan. Ishonchingiz komil boʻlmasa, eskizni oching (ikki marta bosing), kanvasdagi oʻlchamni ikki marta bosing va uni shu yerda oʻzgartiring.
:::

## Asosiy sonni darhol kiriting

Tarixda xususiyatni tanlang (yoki uni qoʻshing) va son yozing: u xususiyatning asosiy katakchasiga tushadi, eng koʻp oʻzgartiriladigan katakchaga (Ekstruziyada **Chuqurlik**, Aylantirishda **Burchak**, Teshikda **Diametr**, massivda **Soni**, Yumaloqlashda **Radius**, Qobiqda devor). Uni belgilash uchun {{key:Enter}} ni, eskisini saqlash uchun {{key:Esc}} ni bosing. Ekstruziya qoʻshilganda holat satrida shunday yoziladi: "Extrude1 qoʻshildi. Uning raqamlarini oʻngdan oʻzgartiring yoki hozir chuqurligi uchun son kiriting."

## Tarixdagi sonni oʻzgartirish

Tarixdagi har bir xususiyat qatori asosiy sonini nomi yonida koʻrsatadi: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Sonni ikki marta bosing (yoki qatorni tanlab {{key:F2}} ni bosing) va shu joyda katakcha ochiladi. Yangi qiymat yozing va {{key:Enter}} ni bosing; {{key:Esc}} eskisini saqlaydi. Bu oʻngdagi xususiyat katakchasi kabi ishlaydi: bir xil chegaralar, `=` bilan tenglama yozish, masalan `=width/2`, va bitta ortga qaytarish qadami.

Ekstruziya, teshik yoki massivda qator ustidagi istalgan joyni ikki marta bosish katakchani ochadi. Yumaloqlash, Faska, Qobiq, Qoralama yoki Rezba da nomni ikki marta bosish hali ham qirralar yoki yuzlarni tanlashga olib boradi, shuning uchun sonning oʻzini ikki marta bosing. Eskizlarning qatorida son yoʻq: ikki marta bosish eskizni ochadi.

## Ekranda sudrash

Tarixda Ekstruziyani tanlang (yoki uni koʻrinishda bosing, soʻng uning qatorini) — uning oxirgi yuzida toʻq sariq strelka turadi va yonida chuqurlik katakchada koʻrsatiladi. Strelkani torting: sudrash davomida detal siz bilan birga oʻzgaradi, qoʻyib yuborganingizda esa yangi chuqurlik bitta qadam sifatida belgilanadi ({{key:Mod+Z}} uni qaytaradi). Sudrash davomida {{key:Esc}} ni bossangiz, boshlangan joyingizga qaytasiz. Chuqurlik oʻz oʻlchamining oʻndan bir qadami bilan oʻzgaradi: 25 mm ekstruziyada 1 mm, 3 mm ekstruziyada 0.1 mm.

Aylantirish uchun egri strelka uning burilish oxirida chiqadi: uni aylana boʻylab suring, burchakni 1° dan 360° gacha butun gradus bilan oʻzgartirish uchun.

Yoki strelka yonidagi katakchaga bosing, qiymat (yoki `=` va tenglama) yozing va {{key:Enter}} ni bosing. **Hammasidan oʻtish** rejimidagi yoki yuzgacha boradigan Ekstruziyada, yoxud tenglama boshqaradigan qiymatda strelka yoʻq: ularni oʻngdan oʻzgartiring.

## Detalni boshqaradigan sonlar

| Qayerda | Nimani oʻzgartirish mumkin |
|---|---|
| Eskiz | Har bir oʻlcham: uzunliklar, masofalar, radiuslar, diametrlar, burchaklar |
| Ekstruziya va Kesish | Chuqurlik, tugash sharti, yoʻnalish, qoʻshish yoki kesish |
| Aylantirish va Aylantirib kesish | Burchak, oʻq, qoʻshish yoki kesish |
| Teshik | Diametr, chuqurlik, hammasidan oʻtish, qoʻyma diametri va chuqurligi |
| Yumaloqlash, Faska, Qobiq | Radius, masofa, devor qalinligi va yoʻnalishi, hamda qaysi qirra yoki yuzlar |
| Chiziqli va Doiraviy | Soni, oraliq yoki burchak, yoʻnalish yoki oʻq |
| Detal | Egrilar (dumaloq shakllar qanchalik nozik qirrali boʻlishi) |
| Chizma | Kesim qayerda kesadi, detal oʻlchami va masshtabi, GD&T qiymatlari |

## Detalni raqamlar bilan shunday rejalashtiring

Bergan raqamlaringiz oʻzgartirishingiz mumkin boʻlgan raqamlardir. Bir necha odat keyingi oʻzgarishlarni toʻgʻri ishlatadi:

- **Ish uchun muhim boʻlgan narsani oʻlchang.** Agar teshik qirradan 15 mm uzoqlikda turishi kerak boʻlsa, uni koordinata boshidan emas, shu qirradan oʻlchang.
- **Eskizlarni toʻliq aniqlang.** Shunda oʻzgarish faqat kerakli narsalarni siljitadi (qarang: [Eskizni toʻliq aniqlash](topic:relations-dimensions)).
- **Maqsad uchun munosabatlardan foydalaning.** Ikki teshikda Teng boʻlsa, bitta diametr ikkalasini boshqaradi. Simmetrik shakllar: koordinata boshini oʻrta chiziqqa qoʻying yoki Oʻrta nuqtadan foydalaning.
- **Xususiyatlar yaratgan yuzlarda eskiz chizing.** Ekstruziyaning oxirgi yuzidagi eskiz chuqurlik oʻzgarganda siljiydi.
- **Nusxalash oʻrniga massivdan foydalaning.** Sakkiz marta massiv qilingan bitta teshikning bitta diametri oʻzgartiriladi.

## Yakka sonlardan tashqari

- **Bitta raqam bir nechtasini boshqarsa:** parametr va tenglamalardan foydalaning: [Detalni parametrlar bilan boshqarish](topic:parameters).
- **Bitta detalning bir necha oʻlchami:** har birini [konfiguratsiya](topic:design-tables) sifatida saqlang; ular detal faylida saqlanadi.
- **Son katakchasida arifmetika:** `=40/2` yoki `=width / 2` yozing. Bu tenglama hisoblanadi; qarang: [Ikki tomonlama tenglamalar](topic:equations-two-way).
- **Dyuym birliklari:** detal millimetrda koʻrsatiladi. `=` bilan son katakchasida yoki parametrda `2in` 50.8 ga aylantiriladi.

Qarang: [Hali tayyor emas](topic:not-built-yet).
