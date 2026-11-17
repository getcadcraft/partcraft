---
title: Val va teshiklardagi rezbalar, chizilgan yoki modellangan
summary: Istalgan dumaloq yuzaga, valga yoki teshikka ISO metrik yoki trapetsiyasimon rezba qoʻying. Chizmalar uchun uni kosmetik qiling yoki 3D bosib chiqarish uchun haqiqiy spiral rezbani modellang, bosilgan detallar mos kelishi uchun tirqish bilan.
keywords: rezba, rezbalar, modellangan rezba, spiral, vint, bolt, gayka, val, teshik, tashqi rezba, ichki rezba, kosmetik rezba, metrik rezba, trapetsiyasimon, acme, yetaklovchi vint, Tr16x4, M10, 3D bosib chiqarish, bosish, tirqish, moslik, chap burilish, ochilgan teshik
from: 4f6401cc
---

{{ui:Thread}} dumaloq yuzalarga rezba qoʻyadi: valning tashqarisiga (tashqi rezba) yoki teshikning ichkarisiga (ichki rezba). PartCraft qaysi biri ekanini yuzaning oʻzidan aniqlaydi.

Rezba dastlab **kosmetik**: yuza silliq qoladi, koʻrinishda rezba punktir aylanalar bilan chiziladi va chizma varagida "M10×1.5 - 6g, rezba uzunligi 20" kabi izohlanadi. Haqiqiy spiral rezbani detalga kesish uchun **Modellangan** ni belgilang (3D bosib chiqarish yoki toʻgʻri koʻrinishi kerak boʻlgan model uchun).

## Val yoki teshikka rezba qoʻyish

1. Rezba oʻlchamida val yoki teshik yarating: M10 bolt uchun Ø10 val, M10 gayka uchun Ø8.5 teshik (ochish burgisi).
2. Dumaloq yuzani bosing, soʻng {{ui:More}} › {{ui:Thread}} ni tanlang. Hech qanday dumaloq yuza tanlanmagan boʻlsa, PartCraft yuzalarni bosishni soʻraydi, soʻng {{ui:Done}}.
3. Oʻng panelda **Oʻlcham** ni tekshiring. **Yuzaga moslash** oʻlchamni oʻzi tanlaydi: val uchun asosiy diametri valniki boʻlgan oʻlcham; teshik uchun kichik diametri unga mos keladigan oʻlcham.

Rezba yuzaning ochiq uchidan boshlanadi, yaʼni detal oʻq boʻylab davom etmaydigan joydan: valning erkin uchi, teshikning ogʻzi. **Boshqa uchidan boshlash** buni teskari qiladi.

## Sozlamalar

| Parametr | Tanlovlar | Standart |
|---|---|---|
| **Shakl** | ISO metrik (60°), M1.6 dan M64 gacha (katta qadam); trapetsiyasimon (Tr, 30°), Tr8×1.5 dan Tr60×9 gacha | ISO metrik |
| **Oʻlcham** | Yuzaga moslash, yoki roʻyxatdan bitta oʻlcham | Yuzaga moslash |
| **Yuzaning hammasi** | Belgisini olib tashlab, **Uzunlik (mm)** ni bering, u boshidan oʻlchanadi | Belgilangan |
| **Boshqa uchidan boshlash** | Rezba yuzaning boshqa uchidan boshlanadi | Oʻchiq |
| **Burilish** | Oʻng qoʻl yoki chap qoʻl | Oʻng qoʻl |
| **Modellangan** | Haqiqiy spiral rezbani kesadi | Oʻchiq |
| **Tirqish (mm)** | Modellangan belgilanganda koʻrsatiladi: val rezbasi qancha kichik, teshiklariki qancha katta boʻlishi (hamma tomonda) | 0.1 |

Yuzaga mos kelmaydigan oʻlcham ham baribir quriladi, yuzaga moslab kesiladi va panel buni aytadi, masalan: "Ø12 mm val M10 ning Ø10 mm si emas". Bir nechta yuza bitta Rezba xususiyatini ulashishi mumkin; **Yuzaga moslash** bilan har biri oʻz oʻlchamini oladi.

## 3D bosib chiqarish uchun modellangan rezbalar

Modellangan rezba standart asosiy profilga amal qiladi: metrik rezbalar uchun ISO 68-1 (tekis choʻqqilar va ildizlar, 60° yonlar), trapetsiyasimonlar uchun ISO 2901 (30° yonlar). **Tirqish** butun profilni ichkariga (val) yoki tashqariga (teshik) siljitadi, shunda bosilgan detallar bir-biriga burilib kiradi:

- **0.1 dan 0.2 mm gacha** koʻpchilik printerlarga mos. Avval sinov boltini va gaykani bosing.
- **0** standart profil: ishlov berilgan detallar yoki mosligini tekshirish uchun.

Bir xil tirqishli bolt va gayka yonlari boʻylab hech qachon tegmaydi: ular orasidagi boʻshliq tirqishning ikki barobari, hamma tomonda.

:::tip
Mayda qadamlar yomon bosiladi: M3 va undan kichik yoki 0.5 mm dan kichik qadam 0.4 mm soplo chizishi mumkin boʻlgan chegarada. Kattaroq rezbalarni modellang, kichiklari uchun issiqlik bilan oʻrnatiladigan vstavka yoki ochilgan teshikdan foydalaning.
:::

Modellangan rezba qattiq jismning bir qismi: STL, 3MF va STEP eksportlarida ham boʻladi, Measure uni oʻlchaydi. U detalni qayta qurishni ogʻirlashtiradi: 20 uzunlikdagi M10 rezba taxminan 150,000 uchburchak.

## Ochilgan teshiklar

**Ochilgan (ISO metrik)** teshikda ham **Modellangan** kaliti bor, bir xil **Tirqish** bilan. Qarang [Eskiz nuqtalarida teshik ochish va zenkovka](topic:holes).

## Rezba qurilmasa

- "Rezba dumaloq yuzaga (silindrga) qoʻyiladi: val yoki teshik." Tanlangan yuza tekis yoki boshqacha egri.
- "Ø0.6 mm dumaloq yuza uchun mos standart oʻlcham yoʻq: oʻlcham tanlang." Yuzaga moslash yuzaning 12 % ichida hech narsa topmadi. **Oʻlcham** ni tanlang yoki yuzani oʻzgartiring.
- "Bu rezba turgan yuza yoʻq (…). Uni qayta tanlang." Oldingi oʻzgarish yuzani olib tashladi. {{ui:Pick faces}} ni bosing va yuzani qayta bosing.

:::note
Dyuym rezbalari (UNC, UNF), trubka rezbalari, konussimon rezbalar, rezba chiqishlari va faskalangan rezba boshlanishlari hali qurilmagan. Aniq yadro modellangan rezbani kosmetik sifatida koʻrsatadi.
:::
