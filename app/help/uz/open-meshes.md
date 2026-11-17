---
title: STL, OBJ yoki 3MF ni qattiq jism sifatida ochish
summary: Skanerdan, 3D bosib chiqarish saytidan yoki boshqa dasturdan kelgan meshni kesishingiz, qo‘shishingiz va eskizlashingiz mumkin bo‘lgan qattiq jismga aylantiring; PartCraft yo‘lda nimalarni tuzatadi va nimalarni tuzata olmaydi.
keywords: stl, obj, 3mf, mesh, meshdan qattiq jismga, meshni aylantirish, skaner, yopiq, tuzatish, teshiklar, bo‘shliqlar, birliklar, yuqori o‘q, import qilingan jism, yassi yuzlar
from: 7b948471
---

PartCraft STL, OBJ va 3MF meshlarini **qattiq jismlar** sifatida ochadi. Jism har qanday qattiq jism kabi ishlaydi: uni kesing, unga qo‘shing, teshik oching, naqshlang, yig‘mada yoki ishlov berish uchun ishlating va uning tekis yuzlarida eskiz chizing. O‘z tarixi yo‘q: mesh faqat uchburchaklardan iborat, shuning uchun uning o‘lchamlarini o‘zgartirib bo‘lmaydi, faqat unga qo‘shish yoki undan kesish mumkin.

## Meshni ochish

1. {{ui:Ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing va `.stl`, `.obj` yoki `.3mf` faylni tanlang. Yoki uni 3D ko‘rinishga tashlang.
2. PartCraft uni o‘qiydi, xavfsiz tuzatishi mumkin bo‘lganini tuzatadi va nima topganini ko‘rsatadi: nechta uchburchak va nuqta, har bir tuzatish va mesh endi **yopiladimi**.
3. **Fayldagi birliklar** va **Fayldagi yuqori** ni tekshiring. STL va OBJ o‘z birliklarini aytmaydi, shuning uchun millimetr taxmin qilinadi; 3MF fayl o‘zinikini aytadi. **Bu yerdagi o‘lcham** satri tanlovingiz bilan jismning o‘lchamini ko‘rsatadi, shuning uchun 25.4 marta kichik kelgan detal (dyuymda bo‘lgan) osongina ko‘rinadi.
4. Ekrandagi detal bo‘sh bo‘lsa, {{ui:Jism sifatida ochish}} ni tanlang. Detalda allaqachon xususiyatlar bo‘lsa, **Foydalanish** ni tanlang (detalga qo‘shish, undan kesish yoki faqat kesishmani saqlash), so‘ng {{ui:Shu detalga qo‘shish}}, yoki meshdan yangidan boshlash uchun {{ui:Yangi detal}}.

Tarixda **Imported1** xususiyati paydo bo‘ladi. Holat satri, masalan, shunday aytadi: "bracket.stl qattiq jism: 15200.512 mm³, eskizlash uchun 14 ta tekis yuz."

## PartCraft nimani tuzatadi

| Tuzatish | Bu nimani anglatadi |
|---|---|
| Qo‘shilgan dublikat burchaklar | STL har bir uchburchak uchun har bir burchakni takrorlaydi; ular bitta nuqtaga birlashtiriladi |
| Maydoni bo‘lmagan uchburchaklar olib tashlanadi | Burchaklari bitta chiziqda yotgan ingichka bo‘laklar |
| Dublikat uchburchaklar olib tashlanadi | Ikki marta yozilgan uchburchak bir marta saqlanadi; qarama-qarshi tomonga qaragan ikkitasi (ichki devor) ikkalasi ham olib tashlanadi |
| Kichik bo‘shliqlar yopiladi | Deyarli uchrashadigan qirralar (detal o‘lchamining mingdan bir qismi ichida) birlashtiriladi |
| Teshiklar to‘ldiriladi | Chegarasi tekis yotgan ochilish har qanday o‘lchamda to‘ldiriladi; buralgan bo‘lsa faqat kichik bo‘lsa |
| Uchburchaklar tashqariga qarash uchun aylantiriladi | Noto‘g‘ri tomonga qaragan uchburchaklar qo‘shnilari bilan kelishish uchun aylantiriladi va butun sirt tashqariga qaraydi |

## Mesh yopilmasa

Qattiq jismga ochiqliksiz sirt kerak. PartCraft yopa olmasa, dialog nechta ochilish va ochiq qirra qolganini aytadi va qo‘shish uchun jism yo‘q. Ochilishlarni meshni yaratgan dasturda yoping yoki uni yopiq (watertight) mesh sifatida qayta eksport qiling va qayta oching.

PartCraft ochilishni qoldiradi, agar uni to‘ldirish xato taxmin qilishi mumkin bo‘lsa: katta buralgan teshik yoki bir tekislikdagi ikki ochilish (yetishmayotgan halqasimon yuz, bunda har bir chegarani to‘ldirish o‘rtadagi teshikni yopib qo‘yadi). Uchburchaklardan ko‘pi bilan chegaralangan qirra ham xabar qilinadi: bunday sirtning aniq ichkarisi yo‘q.

## Tekis yuzlarda eskizlash

Ko‘p uchburchakdan iborat tekis sohalar har biri bitta **tekis yuz** bo‘lib birlashtiriladi, shuning uchun ularda eskiz chizish mumkin: yuzni bosing va {{ui:Bu yuzda eskiz}} ni tanlang. Keyin kesilgan yoki qo‘shilgan yuz yuz bo‘lib qoladi. Dumaloq sohalar (teshik, yumaloqlash) uchburchak bo‘lib qoladi: ular tanlanadigan yuz emas, ko‘rinish ularning konturini uchburchaklar orasidagi burchakdan chizadi.

## Keyin o‘zgartirish

**Imported1** ni tanlang: u qayerdan kelganini, nechta uchburchagi borligini va nima tuzatilganini ko‘rish uchun. **Fayldagi birliklar**, **Fayldagi yuqori** va **Foydalanish** shu yerda o‘zgartirilishi mumkin; har bir o‘zgarish bitta Ortga qaytarish qadami.

## Qayerda saqlanadi

Tuzatilgan mesh `.partcraft.json` faylning **ichida** saqlanadi, shuning uchun mesh faylini yana kerak emas. Mesh jismli detal fayli versiya 5 bo‘ladi: eski PartCraft uni versiyasi bo‘yicha rad etadi. 200 000 uchburchakli mesh taxminan 1.2 MB qo‘shadi.

## Chegaralar

- Bir faylda eng ko‘pi 3 million uchburchak va 200 MB.
- Meshdan yasalgan jism mesh yadrosi bilan quriladi. Aniq yadro yoqilganda (faqat ishlab chiquvchilar uchun), buni aytadi va u qurilmaydi.
- OBJ materiallari, tekstura koordinatalari va erkin shakldagi egri chiziqlar chiqarib tashlanadi; 3MF ranglari, materiallari va tayanch obyektlari chiqarib tashlanadi (dialog nechta obyekt o‘tkazib yuborilganini aytadi).
- Jism mesh kabi nozik: qo‘pol STL dumaloq yuzlarni qo‘pol qiladi. Unga burg‘ulagan teshiklar o‘zingiz yaratgan xususiyatlar kabi dumaloq bo‘ladi.
