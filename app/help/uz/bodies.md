---
title: Jismlarni birlashtirish, koʻchirish va masshtablash; yoʻl boʻyicha massivlar
summary: Alohida jismlar yarating, soʻng ularni birlashtiring, kesing yoki kesishtiring, koʻchiring, aylantiring, tekislang yoki nusxa oling, ularni teng yoki X, Y va Z boʻyicha masshtablang, xususiyatlar yoki jismlarni egri chiziq boʻylab nusxalang.
keywords: jism, jismlar, koʻp jismli, yangi jism, birlashtirish, boolean, qoʻshish, kesish, kesishtirish, ayirish, union, asboblarni saqlash, jismni koʻchirish, jism nusxasi, jismni aylantirish, tekislash, koʻchirish, masshtablash, notekis masshtab, choʻzish, affin, yoʻl massivi, egri chiziq boʻylab massiv, egri chiziq boshqaradigan massiv
from: 6b1ea820
---

:::note
**Bu versiyada hali tayyor emas.** Bir nechta jism bilan ishlash aniq geometriya yadrosini talab qiladi, PartCraft bu versiyada uni tutmaydi: u har bir detalni mesh yadrosi bilan yasaydi. [Hali tayyor emas](topic:not-built-yet) boʻlimida nima qilish kerakligi aytilgan. Ushbu sahifaning qolgan qismi uni aniq yadro bilan ishlashi boʻyicha tasvirlaydi.
:::

Detal bir nechta qattiq jismdan iborat boʻlishi mumkin. Har bir alohida qattiq jism **jism** deb ataladi. Koʻpchilik xususiyatlar ular tegadigan har bir jismga qoʻshadi yoki undan kesadi; bu sahifadagi asboblar siz tanlagan butun jismlar bilan ishlaydi. Ular Xususiyatlar guruhining {{ui:Koʻproq}} menyusida: {{ui:Birlashtirish}}, {{ui:Jismni koʻchirish}}, {{ui:Jismni masshtablash}} va {{ui:Yoʻl massivi}}. Ularning hammasiga aniq yadro (OpenCascade) kerak.

## Alohida jism yaratish

Oʻng panelda ekstruziya yoki aylantirishning **Amal** ini **Yangi jism** ga qoʻying (surish va qoʻyishlarda ham bor). Yangi qattiq jism boshqalar bilan ustma-ust tushsa ham alohida qoladi. **Kesishtirish** yangi shakl bilan mavjud narsaning faqat kesishgan qismini saqlaydi.

Jismlar ularni boshlagan xususiyat nomi bilan ataladi: "Extrude2". Nusxa asli va uni nusxalagan xususiyat nomi bilan ataladi: "Extrude2, copy 1 of Move1". Yuqoridagi oʻlchamlarni oʻzgartirganda nomlar oʻzgarmaydi, shuning uchun jismdan foydalanadigan xususiyatlar uni topishda davom etadi. Ikki yoki undan ortiq jism boʻlganda, detal paneli (boʻsh joyni bosing) ularni hajmlari bilan koʻrsatadi.

## Jismni qayta nomlash yoki yashirish

Koʻrinishda boʻsh joyni bosing va detal panelini koʻring. Uning jismlar roʻyxatida (detalda ikki yoki undan ortiq jism boʻlganda koʻrinadi) har bir qatorda nom maydoni va {{ui:Yashirish}} tugmasi bor.

- **Qayta nomlash:** maydonga yangi nom yozing va {{key:Enter}} ni bosing yoki boshqa joyni bosing. Shundan keyin har bir panel uni ishlatadi: Birlashtirish, Jismni koʻchirish, massivlar. Maydonni tozalasangiz, jism uni yaratgan xususiyat nomiga qaytadi.
- **Yashirish:** uning qatoridagi {{ui:Yashirish}} ni bosing. Jism koʻrinishdan chiqadi va bosishlar undan oʻtib ketadi, shuning uchun orqadagi yuzlarni tanlash mumkin. {{ui:Koʻrsatish}} uni qaytaradi; {{ui:Hammasini koʻrsatish}} barcha yashirilgan jismlarni qaytaradi.

Yashirish faqat koʻrinishni oʻzgartiradi. Yashirilgan jism baribir yasaladi, hajm va oʻlchovlarda hisobga olinadi va STL, 3MF va STEP eksportlarida saqlanadi. Nomlar va yashirilgan jismlar detal faylida saqlanadi, har bir oʻzgarish {{ui:Ortga qaytarish}} ning bir qadami.

## Jismlarni birlashtirish

1. **Maqsad** jismning yuzini {{key:Shift}}+bosing, soʻng har bir **asbob** jismning yuzini bosing.
2. {{ui:Koʻproq}} ni, soʻng {{ui:Birlashtirish}} ni tanlang.
3. Oʻng panelda **Amal** ni tanlang:

| Amal | Natija |
|---|---|
| Qoʻshib birlashtirish | Maqsad va asboblar bitta jismga aylanadi |
| Kesish | Asboblar maqsaddan olib tashlanadi |
| Kesishtirish | Maqsad va barcha asboblar umumiy boʻlgan qism saqlanadi |

**Maqsad jism** — oʻz nomini saqlab qoladigan jism. **Asbob jismlar** ni belgilang yoki belgisini olib tashlang, yoki **Koʻrinishda tanlash** dan foydalanib ularning yuzlarini bosing. **Asbob jismlarni saqlash** asboblarni ham joyida qoldiradi (qolip va uning yadrosi uchun qulay). Agar asbob jism oldingi Birlashtirish bilan allaqachon ishlatilgan boʻlsa, panel buni aytadi va boshqa jismni tanlamaydi.

## Jismni koʻchirish yoki nusxalash

1. {{ui:Koʻproq}} ni, soʻng {{ui:Jismni koʻchirish}} ni tanlang. Eng yangi jism belgilangan boʻladi; koʻchirmoqchi boʻlganlarini belgilang.
2. **Siljitish** turini tanlang:

| Siljitish | Nimani belgilaysiz |
|---|---|
| Parallel koʻchirish | **ΔX**, **ΔY**, **ΔZ** millimetrda |
| Nuqtadan nuqtaga | **Dan** va **Gacha**: qirra oxiriga, nuqta xususiyatiga yoki yuzdagi nuqtaga yaqin bosing |
| Oʻq atrofida aylantirish | **Oʻq** (X, Y, Z, oʻq xususiyati yoki **Tanlash**: toʻgʻri qirra, aylana yoki silindr) va **Burchak (°)** |
| Yuzni yuzga yoki tekislikka tekislash | **Koʻchiriladigan yuz** (jismning tekis yuzi), **Ustiga** (tekis yuz yoki tekislik) |

Tekislash jismni shunday aylantiradiki, uning yuzi boshqa yuzga yotadi, yuzma-yuz, soʻngra faqat shu yuzning normali boʻylab suriladi. **Bir xil yoʻnalish** uni teskari buradi. **Nusxalash** asl jismni saqlaydi va koʻchirilgan nusxani yangi jism sifatida qoʻshadi.

## Jismni masshtablash

1. {{ui:Koʻproq}} ni, soʻng {{ui:Jismni masshtablash}} ni tanlang va jismlarni belgilang.
2. **Masshtab** kiriting yoki **Teng** ni olib tashlab **Masshtab X**, **Masshtab Y** va **Masshtab Z** ni kiriting (dunyo oʻqlari boʻyicha).
3. **Atrofida** — joyida qoladigan nuqta: jismlar qutisining markazi yoki siz tanlagan nuqta.

Teng masshtab aniq. Notekis masshtab doiralarni ellipsga aylantiradi: silindr elliptik silindrga aylanadi, uni hech qanday analitik sirt ushlab turmaydi, shuning uchun egri yuzlar aniq shakldan 0.0000004 mm ichida qoladigan B-spline sirtlarga aylanadi; tekis yuzlar va toʻgʻri qirralar aniq qoladi. Panelda qaysi holat boʻlgani aytiladi. Masshtab koeffitsientlari noldan katta boʻlishi kerak (uni {{ui:Aks ettirish}} yordamida aks ettiring).

## Yoʻl boʻyicha nusxalash

1. Tarixda nusxalanadigan xususiyatni tanlang yoki eng yangi jismni nusxalash uchun hech narsa tanlamang.
2. {{ui:Koʻproq}} ni, soʻng {{ui:Yoʻl massivi}} ni tanlang. Eng yangi ishlatilmagan eskiz yoʻl sifatida olinadi.
3. Oʻng panelda sozlang:

| Sozlash | Nima qiladi |
|---|---|
| **Nusxalash** | Jismlar (har bir nusxa yangi jism) yoki Xususiyatlar (asl kabi qoʻshiladi yoki kesiladi) |
| **Yoʻl** | Eskizlarni belgilang yoki **Model qirralarini tanlang**; boʻlaklar uchma-uch ulanishi kerak |
| **Soni** | Umumiy son, asl nusxa bilan birga |
| **Oraliq** | Teng (ochiq yoʻlning oxirigacha yoki yopiq yoʻl boʻylab hammasi yoyiladi) yoki belgilangan masofa |
| **Yoʻnalish** | Yoʻl boʻylab kuzatish (har bir nusxa u bilan birga buriladi) yoki Qoʻzgʻalmas (nusxalar parallel qoladi) |
| **Teskari yoʻnalish** | Yoʻl boʻylab teskari tomonga yurish |

Nusxalar asl nusxaga eng yaqin nuqtadan boshlanadi va egri chiziq boʻylab uzunligi boʻyicha joylashtiriladi.

Chiziqli va doiraviy massivlar ham jismlarni nusxalashi mumkin: ularning panelida **Jismlarni nusxalash** ni belgilang va jismlarni tanlang; har bir nusxa yangi jism boʻladi.

## Chegaralar

- Jismlarga aniq yadro kerak; mesh yadrosi bitta qattiq jismni saqlaydi va buni aytadi.
- Notekis masshtab egri yuzlarni yaqin B-spline taxminlariga aylantiradi (yuqorida aytilgan), aniq silindr yoki konuslarga emas; ofset sirtlarni hozircha bunday masshtablab boʻlmaydi.
- Egilgan 3D egri chiziq boʻylab yoʻlni kuzatish nusxani buralmasdan olib yuradi; tekis yoʻllarda burilish aniq boʻladi.
- Birlashtirish faqat qattiq jismlarda ishlaydi. Sirt jismlari {{ui:Tikish}} bilan birlashtiriladi.

Qarang: [Yordamchi tekisliklar, oʻqlar va nuqtalar](topic:reference-geometry) — "obyektlar orasidagi" nuqta va tekisliklar uchun, hamda [Massiv va aks ettirish xususiyatlari](topic:patterns-mirror).
