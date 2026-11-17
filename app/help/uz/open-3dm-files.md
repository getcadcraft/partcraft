---
title: .3dm modelini qattiq jism sifatida ochish
summary: .3dm faylining meshlari, polisirtlari va bloklarini PartCraft ga bitta qattiq jism sifatida keltiring, uni kesishingiz, qo‘shishingiz va eskizlashingiz mumkin; uchburchaklar qayerdan keladi va nima chiqarib tashlanadi.
keywords: 3dm, nurbs, polisirt, brep, sirtlar, render mesh, ekstrudirlash, bloklar, import, mesh dan qattiq jismga, birliklar, import qilingan jism
from: 8ae9571b
---

PartCraft `.3dm` fayllarni **qattiq jismlar** sifatida ochadi, xuddi [STL, OBJ yoki 3MF mesh](topic:open-meshes) kabi. Jism har qanday qattiq jism kabi ishlaydi: uni kesing, unga qo‘shing, teshik oching, naqshlang va uning tekis yuzlarida eskiz chizing. O‘z tarixi yo‘q.

## Faylni ochish

1. {{ui:Ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing va `.3dm` faylni tanlang. Yoki uni 3D ko‘rinishga tashlang.
2. PartCraft uni o‘qiydi va nima topganini ko‘rsatadi: yuzlari bor nechta obyekt kiradi, faylda saqlangan meshlardan qancha yuz kelgani va PartCraft nechtasini tessellyatsiya qilgani, har bir tuzatish va natija **yopiladimi**.
3. **Fayldagi birliklar** (fayl o‘zinikini aytadi; PartCraft ro‘yxatga kiritmagan birlik, masalan yard, millimetrga aylantiriladi) va **Fayldagi yuqori** ni tekshiring.
4. {{ui:Jism sifatida ochish}} ni tanlang yoki detalda xususiyatlar bo‘lsa, **Foydalanish** va {{ui:Shu detalga qo‘shish}} ni tanlang.

## Uchburchaklar qayerdan keladi

Bu versiyada PartCraft jismlarni uchburchaklardan yasaydi, shuning uchun fayldagi har bir sirt kichik tekis yuzlarga aylanadi. Polisirtning (va har bir ekstrudirlashning) har bir yuzi uchun u **faylda saqlangan render meshini** oladi, agar bor bo‘lsa; aks holda **uni o‘zi tessellyatsiya qiladi** (tekisliklar, NURBS sirtlari, aylanish sirtlari, ekstrudirlangan egri chiziqlar va ekstrudirlashlar, qirralari bo‘yicha kesilgan). Bir polisirt yuzlari o‘z qirra nuqtalarini ulashadi, shuning uchun yopiq polisirt yopiq holda keladi. PartCraft hali o‘qimaydigan sirt turidagi yuz tashlab yuboriladi va dialog nechta va qanday tur ekanini aytadi; natija odatda yopilmaydi.

## Fayldagi hamma narsa bitta jismga aylanadi

Har bir ko‘rinadigan mesh, polisirt va ekstrudirlash, va blokning har bir joylashuvi fayl qo‘ygan joyda **bitta** jismga kiradi. Yashirin yoki o‘chiq qatlamdagi obyektlar chiqarib tashlanadi. Fayl bir nechta alohida qattiq jismlarni saqlasa, jismda bir nechta bo‘lak bo‘ladi: ularni alohida jism sifatida xohlasangiz, har birini o‘z faylidan oching.

## Nimalar chiqarib tashlanadi (va aytiladi)

Egri chiziqlar, nuqtalar, nuqtalar bulutlari, matn, o‘lchamlar, shtrixlar va yoritkichlar chiqarib tashlanadi: jism faqat yuzlarni oladi. Shuningdek, SubD obyektlar (avval ularni fayl yaratgan dasturda meshlarga yoki polisirtlarga aylantiring), boshqa fayllardan bog‘langan bloklar, va ranglar, qatlamlar va nomlar (PartCraft jismlarida bu yerda o‘z nomlari yo‘q).

## Yopilmasa

Ochiq polisirtlar va sirtlar (bitta kesilgan sirt, yetishmayotgan yuzi bor shakl) ichkarisiga ega emas, shuning uchun qattiq jism bo‘la olmaydi. Dialog nechta teshik qolganini aytadi va hech narsa qo‘shmaydi. Shaklni uni yaratgan dasturda birlashtiring yoki yoping, saqlang va qayta oching. Qarang: [Mesh yopilmasa](topic:open-meshes#when-a-mesh-does-not-close).
