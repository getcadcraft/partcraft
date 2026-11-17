---
title: Tenglamalar ikki tomonlama
summary: Parametrni oʻzgartiring — detal ortidan oʻzgaradi; boshqariladigan raqamga yangi oʻlcham kiriting, PartCraft bu ortidagi parametrni topadi va bir nechtasi oʻzgarishi mumkin boʻlsa, qaysi birini soʻraydi.
keywords: tenglamalar, teskari yechish, boshqariladigan oʻlcham, ikki tomonlama, teskari, maqsadli qidiruv, parametrlar, bogʻlangan qiymatlar, qaysi parametr
from: 82dc0269
---

Ikki yoʻnalishda ishlaydigan tenglama misoli: **Extrude1 chuqurligi = thick + extra**.

## Oldinga: parametrni oʻzgartiring

{{ui:Parametrlar}} yorigʻida `thick` ni 20 dan 30 ga oʻzgartiring. Extrude1 ning chuqurligi 30 + extra boʻladi va detal qayta quriladi.

## Orqaga: boshqariladigan raqamni oʻzgartiring

1. Tarixda "Extrude1" ni bosing. Uning **Chuqurlik (mm)** katakchasi **ƒ** koʻrsatadi: tenglama uni boshqaradi.
2. Kerakli oʻlchamni kiriting, masalan `40`, va {{key:Enter}} bosing.

PartCraft tenglama ortidagi parametrni kerak boʻlsa bir necha qadam orqali yechadi (`depth = hub_h`, `hub_h = disc_t + 50`: balandlikni kiritish `disc_t` ni oʻzgartiradi). Holat satri nima oʻzgarganini aytadi, masalan extra 5 dan 15 ga oʻzgargan.

Ikki yoki undan ortiq parametr raqamni boshqarganda, **Qaysi parametr oʻzgarishi kerak?** deb soʻraydigan quti chiqadi va ularni roʻyxatlaydi. Birini bosing; boshqalari oʻz qiymatlarini saqlaydi. {{ui:Bekor qilish}} hech narsani oʻzgartirmaydi.

Xuddi shu narsa eskizda ham ishlaydi: boshqariladigan oʻlchamni ikki marta bosing, qiymat kiriting va {{key:Enter}} bosing. U parametrlar jadvalining **Qiymat** ustunida ham ishlaydi, agar parametrning oʻzi ifoda boʻlsa.

## Qachon ishlamaydi

- Butun boʻlishi kerak boʻlgan raqam (naqsh soni) yoki diapazonda turishi kerak boʻlgan burchak (360° gacha) hech narsa oʻzgarmasdan oldin rad etiladi.
- Faqat qat’iy raqamlardan iborat tenglama (`=40`) oʻzgartiriladigan parametrga ega emas: siz kiritgan raqam uni almashtiradi.
- Kiritgan oʻlchamni beradigan parametr qiymati boʻlmasa, holat satri buni aytadi va hech narsa oʻzgarmaydi.
- Yangi qiymat bilan yechib boʻlmaydigan eskiz oldingi qiymatlarini saqlaydi va holat satri eskizni nomlaydi.

Har bir oʻzgarish, qaysi yoʻnalishda boʻlishidan qat’iy nazar, {{key:Mod+Z}} va {{key:Mod+Y}} uchun bir qadam boʻladi.
