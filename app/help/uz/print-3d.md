---
title: Detalni 3D bosma uchun tayyorlash
summary: Detal yoki yigʻma yopiq ekanini, printeringizga sigʻishini va tagligʻiga tekis turishini tekshiring, soʻng slayseringiz uchun STL yoki 3MF sifatida yuklab oling.
keywords: 3d bosma, 3d bosish, printer, bosma, slayser, stl, 3mf, germetik, yopiq, manifold, stol, stol oʻlchami, bosma platformasi, osilgan qism, tayanchlar, taglik, millimetr, eksport, rezba, boʻshliq
from: 90d81dff
---

Slayserga yopiq shakl kerak: boʻshliqlar boʻlmasligi, har bir yuz tashqariga qaragan boʻlishi va hech narsa oʻz-oʻzidan oʻtmasligi kerak. PartCraft yaratgan detallar qurilishi jihatidan yopiq boʻladi, shuning uchun tekshiruv asosan oʻlchamni, detalning printeringiz stoliga sigʻish-sigʻmasligini, tekis yuzga turish-turmasligini va qancha qismi osilib turishini koʻrsatadi.

## Tekshirish va yuklab olish

1. Ixtiyoriy, bir marta: printeringizning stolini {{ui:Sozlamalar}} › PartCraft › **3D printer** boʻlimida oʻrnating: millimetrlarda kengligi, chuqurligi va balandligi. Bu tekshiruvni oʻtkazib yuborish uchun ularni boʻsh qoldiring.
2. {{ui:Eksport}} ni tanlang, soʻng {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} ni tanlang.

   Muloqot oynasida "Bosishga tayyor" yoki "Bosishga tayyor emas" deb yoziladi, notoʻgʻri narsalar roʻyxatlanadi va stoldagi oʻlcham (X × Y × Z, millimetrda), hajm va uchburchaklar soni koʻrsatiladi.

3. {{ui:3MF yuklab olish}} yoki {{ui:STL yuklab olish}} tugmasini bosing. Fayl {{ui:Eksport}} › {{ui:3MF, 3D bosma uchun}} yoki {{ui:STL, 3D bosma uchun}} bilan bir xil.

Yigʻmada tekshiruv va fayllar butun yigʻmani oladi, joylashtirilgan har bir nusxasi bilan birga.

Detal eksport yozadigan holatda turgan holda tekshiriladi: PartCraftda yuqoriga qaragan narsa (Yuqori tekislikka perpendikulyar) stolda ham yuqoriga qaraydi. Yuqori tekislikda chizilgan detal tekis yotadi.

## Muloqot oynasi nima deyishi mumkin

**Bosishga tayyor emas** (slayser uni rad etishi yoki notoʻgʻri bosishi mumkin): boʻshliqlar (faqat bir tomonida yuzi bor qirralar), uchta yoki undan koʻp yuz bilan umumiy boʻlgan qirralar, qarama-qarshi tomonga qaragan yuzlar, ichki-tashqarisi almashgan jism yoki oʻz-oʻzidan oʻtayotgan jism. PartCraftda yaratilgan detalda bular hech qachon koʻrinmasligi kerak; agar koʻrinsa, [Muammolarni bartaraf etish](topic:troubleshooting) boʻlimiga qarang.

**Ogohlantirishlar** (bosiladi, lekin avval koʻrib chiqing):

- **Printer stolidan katta**, hatto unda 90° burilgan holda ham.
- **Pastda tekis yotadigan yuz yoʻq**: slayserda detalni shunday buring-ki, bir yuz stolga tegsin, aks holda tayanchlar yoki asosiy qatlam (raft) kerak boʻladi.
- **Tik holatdan 45° dan koʻproq ogʻgan**: bu yuzlarga hozirgi holatda tayanch kerak. Boshqa holat kamroq talab qilishi mumkin.
- **Alohida jismlar bir-birini kesib oʻtadi** yoki **yuz bilan yuzga tegadi**: slayserlar odatda ularni birlashtiradi. Elementlar › {{ui:Koʻproq}} ichidagi {{ui:Birlashtirish}} ularni bitta jismga birlashtiradi. Qarang: [Jismlar](topic:bodies).
- **Eni 1 mm dan kichik**: detalning oʻlchamlarini tekshiring.

## Bosiladigan rezbalar

Modellashtirilgan rezba haqiqiy rezba sifatida bosiladi. Bosilgan bolt bosilgan gaykaga kirishi uchun unga bir oz **Boʻshliq** bering: qarang: [Rezbalar](topic:threads).

## Silliq yumaloq yuzlar

STL va 3MF uchburchaklardan tashkil topgan. Yumaloq yuzlar silliqroq boʻlishi uchun boʻsh joyni bosing, shunda hech narsa tanlanmaydi, va eksport qilishdan oldin oʻng panelda **Egri chiziqlar** ni **Nozik (aylanada 128)** yoki **Juda nozik (aylanada 256)** ga oʻrnating. Koʻproq uchburchak katta fayllar yaratadi.

## Kattaroq, kichikroq yoki boʻlaklarda

- **Eksport › Bosma uchun masshtablash (STL yoki 3MF)…** detalni oʻqlar boʻyicha masshtablaydi, uni oʻzgartirmasdan saqlaydi: quyish modeli uchun foizda **kirishish zaxirasi** (oʻlcham × (1 + s) yoki aniq oʻlcham ÷ (1 − s)) yoki oddiy koeffitsiyentlar — oʻrta nuqta, eng past burchak, pastki tekislikning oʻrtasi yoki koordinatalar boshi atrofida masshtablash.
- **Eksport › Bosish uchun boʻlish (boʻlaklar arxivi)…** printeringiz uchun juda katta detalni har biri sizning stolingizga sigʻadigan boʻlaklarga boʻladi; boʻlaklar shtiftlar, shponkalar, dumli qoʻymalar, dyuvel teshiklari yoki magnit kovaklari bilan birlashtiriladi (siz belgilagan boʻshliq bilan), har bir boʻlak va birikma raqamlanadi, boʻlaklar STL yoki 3MF sifatida zip arxivda yigʻma varaqi bilan saqlanadi. Detalning oʻzi oʻzgarmaydi.

## Tekshirilmaydi

Devor qalinligi, soplo chiza oladigan darajadan kichik detallar va slayser tayanchlarni qanday joylashtirishi. Bularni slayseringiz koʻrsatadi.
