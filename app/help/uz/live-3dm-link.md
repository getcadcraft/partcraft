---
title: Jonli .3dm modelini saqlash
summary: Modelni uni yaratgan dasturda oʻzgartiring va Rhino 8 yoki Grasshopper taʼrifidan PartCraft jismi qanday ergashishini kuzating; elementlaringiz yangi shakl asosida qayta quriladi.
keywords: rhino, grasshopper, jonli bogʻlanish, jonli ulanish, 3dm, nurbs, parametrik, bogʻlanish, sinxronlash, skript, yuborish, import qilingan jism
from: cf4dc9b2
---

Modelni uni yaratgan joyda shakllantirishda davom eting, uni esa bu yerda ishlov bering, tekshiring va hujjatlashtiring. Boshqa dasturdagi har bir oʻzgarish PartCraft dagi bitta import qilingan jismni almashtiradi, undan keyingi elementlar esa yangi shakl asosida qayta quriladi.

:::note
Bogʻlanish uchun shu kompyuterda **CadCraft Studio** kerak. Brauzer yorligʻi ulanishni qabul qila olmaydi. Internet orqali hech narsa yuborilmaydi: skript Studio bilan shu kompyuterning oʻz manzili orqali, token bilan gaplashadi.
:::

:::warning
Bu bogʻlanish skriptning fayl yozuvchisi va boshqa dastur oʻrnida turuvchi modul bilan sinovdan oʻtkazilgan, hali Rhino yoki Grasshopper ichida emas. U yerda biror narsa ishlamasa, nima degani haqida bizga xabar bering.
:::

## Sozlash

1. Studio da PartCraft ni oching. {{ui:Sozlamalar}} › {{ui:PartCraft}} › {{ui:Yordamchilar}} da **Sunʼiy intellekt yordamchilari va skriptlarga PartCraft dan foydalanishga ruxsat berish** ni belgilang, soʻng **Tahrirlash**.
2. Studio da {{ui:Yordamchini ulash}} ni tanlang. U manzil va quyida qoʻyadigan tokenni koʻrsatadi.
3. Skriptni yuklab oling: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino dan

1. `cadcraft_link.py` ni Rhino skript tahrirlovchisida ishga tushiring (Rhino 8 da Python 3).
2. Birinchi marta manzil va tokenni qoʻying. Ular bosh papkangizdagi `.cadcraft-link.json` da saqlanadi, hech qachon modelda emas. Studio har safar ishga tushganda yangi token yaratadi, shuning uchun skript shu paytda yana soʻraydi.

Toʻxtatish uchun skriptni yana bir marta ishga tushiring.

## Grasshopper dan

Avval skriptni Rhino da bir marta ishga tushiring, shunda manzil va token saqlanadi.

1. Skript komponentini (Python 3) qoʻshing va unga `cadcraft_link.py` ning butun matnini qoʻying.
2. Unga quyidagi kirishlarni bering: `G` (geometriya, roʻyxat kirishi bilan), `N` (nom, ixtiyoriy), `On` (mantiqiy kalit) va `Target` (ixtiyoriy: `model` yoki `part`, ikkala ilova ochiq boʻlsa).
3. `On` ni true ga oʻrnating.

Har bir hisoblash `G` ni yuboradi va komponent oldin yuborgan narsani almashtiradi.

## Bu yerda qanday ishlaydi

- **Bitta jism.** Modeldagi hamma koʻrinadigan narsa bitta import qilingan elementga aylanadi, xuddi [.3dm faylini ochganingizdagidek](topic:open-3dm-files).
- **U yopilishi kerak.** PartCraft kichik teshiklar va tekis ochiqliklarni toʻldiradi, boshqa dastur esa ularning sonini biladi. Agar model hali ham yopilmasa, PartCraft oldingi jismni saqlab qoladi va holat satri buni koʻrsatadi. Yopiladigan keyingi oʻzgarish uni yangilaydi.
- **Hozirgi ishni tugating.** Eskiz yoki chizmada yangilanishlar rad etiladi va qayta urinib koʻriladi; siz modelga qaytganingizdan keyin yetib boradi.
- **Ortga qaytarish.** Bir-biridan ikki soniya ichidagi yangilanishlar bitta ortga qaytarish qadamini ulashadi.
- **Saqlash.** Detal fayli bogʻlanishni saqlaydi. Uni qayta ochganingizdan keyin skriptni yana ishga tushiring, shunda oʻsha element yangilanadi.

**Faqat bir tomonlama.** Bu yerdagi oʻzgarishlar boshqa dasturga qaytmaydi.

## Agar nimadir notoʻgʻri ketsa

- **"Hech bir ModelCraft yoki PartCraft oynasi bunga ruxsat bermaydi":** sozlashning 1-qadamini bajaring.
- **"Studio tokenni rad etdi":** Studio qayta ishga tushgan. Yangi tokenni nusxalang va skriptni yana ishga tushiring. Grasshopper uchun uni avval Rhino da ishga tushiring.
- **"CadCraft Studio ga ulanib boʻlmadi":** Studio ishlamayapti yoki manzil oʻzgargan.
