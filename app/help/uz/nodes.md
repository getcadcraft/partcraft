---
title: Tugunlar: ulash orqali model yaratish
summary: Raqamlarni nuqtalarga, nuqtalarni egri chiziqlarga, egri chiziqlarni sirtlarga ulang. Raqamni o‘zgartirsangiz, undan keyingi hammasi qayta quriladi. Har bir tugun ham CraftScript qatori va grafik faylda saqlanadi.
keywords: tugunlar, tugun muharriri, vizual skriptlash, parametrik, grafik, simlar, portlar, erkin shakl, nurbs, loft, ekstrudirlash, aylantirish, aylana, egri chiziq, sirt, ketma-ketlik, diapazon, tasodifiy, ro‘yxat, skript, craftscript, grasshopper
from: 3a4625de
---

**Tugunlar** muharriri geometriyani qutilarni bir-biriga simlar bilan ulash orqali quradi. Har bir quti (tugun) bitta kichik vazifani bajaradi: raqam, nuqta, aylana, loft yasaydi. Bir tugunning natijasini keyingisining kirishiga ulaysiz va boshidagi raqamni o‘zgartirsangiz, model unga ergashadi.

Ochish uchun ish maydonlari ro‘yxatidan {{ui:Tugunlar}} ni tanlang. Bu muharrir oynasini ochadi. Grafigi bor detal ish maydonini ochganda uni ko‘rsatadi. Bu 3D ko‘rinish ustidagi oyna: sarlavha satrini sudrab ko‘chiring, burchagidan sudrab o‘lchamini o‘zgartiring.

## Ulash

1. Chapdagi ro‘yxatdan tugunni tanlang (qidiruv maydoniga yozib torting; <kbd>Enter</kbd> birinchi mosni qo‘shadi). U kanvas o‘rtasida paydo bo‘ladi.
2. Bir tugunning o‘ng tomonidagi yumaloq **chiqish** nuqtasidan boshqa tugunning chap tomonidagi yumaloq **kirish** nuqtasiga torting. Nuqta mos kelsa yashil, mos kelmasa qizil bo‘ladi; sababini ko‘rish uchun ustiga olib boring.
3. Hech narsa ulanmagan kirish uchun yozma qiymat uchun quti chiqadi. Raqam yozing va <kbd>Tab</kbd> bosing: natija qayta quriladi.
4. Tugun sarlavha satridagi kichik doira uning **ko‘zi**. Ko‘zi yoqilgan tugun 3D ko‘rinishda chiziladi: egri chiziqlar chiziq, sirtlar soyalangan, nuqtalar nuqta sifatida.

Tugunni sarlavha satridan sudrang. Fonni sudrab suring, g‘ildirakni aylantirib kattalashtiring. <kbd>Delete</kbd> tanlangan tugunni o‘chiradi. {{ui:Tartibga solish}} tugunlarni ustunlarga joylaydi, {{ui:Moslash}} hammasini ko‘rinishga keltiradi, {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} tahrirlaringiz bo‘ylab yuradi.

## Turlar va birliklar

Portlarning turi bor: son, ha/yo‘q, nuqta, vektor, egri chiziq, sirt, mesh, qattiq jism yoki hammasi uchun "geometriya". Nuqta vektor kirishiga va orqaga uzatilishi mumkin. Sonlarda birlik bor: **uzunlik** millimetrda, **burchak** gradusda. Uzunlik burchakka uzatilmaydi, uzunlikni uzunlikka ko‘paytirish (maydon) rad etiladi, shuning uchun noto‘g‘ri sim ulanganda darhol to‘xtatiladi.

Kvadrat nuqta **ro‘yxat**dir. Ro‘yxat yagona qiymatli kirishga yetganda, tugun har bir element uchun bir marta ishlaydi va natijasi ro‘yxatga aylanadi. Qisqa ro‘yxat oxirgi elementini takrorlaydi. Masalan, **Ketma-ketlik** balandliklari **Siljitish** ga ulansa, nusxalar to‘plami hosil bo‘ladi.

## Qattiq jismlar va Bul amallari tugun sifatida

**Qattiq jismlar** guruhi Sirtlar panelidagi o‘sha aniq sirtlardan yopiq jismlar yasaydi: **Quti qattiq jismi**, **Silindr qattiq jismi** va **Sfera qattiq jismi** (o‘lchamlari mm da), **Birlashtirish**, **Ayirish** va **Kesishish** (ikkinchi qattiq jism birinchisidan olinadi; tolerantlik — qattiq jism dvigateli uchburchaklari aniq sirtlardan qancha uzoqda bo‘lishi mumkinligi), **Yuzlar orasida yumaloqlash** (yuzlar qattiq jismdagi raqami bo‘yicha, 1 — birinchisi; radius va 0 dan katta bo‘lsa, oxirdagi radius), **Qattiq jism hajmi** (mm³) va **Qattiq jismdan mesh** (ko‘rish yoki qotirish uchun). Qattiq jismning o‘z port turi bor: nuqta yoki son qattiq jism kirishiga ulanmaydi, nuqta qizil qoladi. Bul va Yumaloqlash tugunlari dasturning o‘z qattiq jism dvigatelidan foydalanadi, u muharrir birinchi marta ochilganda yuklanadi.

## Xatolar

Tugun o‘z vazifasini bajara olmasa, sababi uning nomi ostida qizil rangda yoziladi ("Radius noldan katta bo‘lishi kerak."), va undan keyingi tugunlar kutadi. Xuddi shu xabar Muammolar panelida ham ko‘rinadi, shuning uchun u yerdan topish mumkin.

## Har bir tugun skript qatori

{{ui:Skript}} ni bosing: grafik CraftScript ko‘rinishida, har bir tugun uchun bitta qator, masalan `n3 = nd_circle(n2, n1, [0 0 1]);`. Matnni tahrirlang va {{ui:Grafikni shu skriptdan yaratish}} ni bosing — u grafik sifatida qaytadi. PartCraft dagi CraftScript ichida ham xuddi shu `nd_` funksiyalari ishlaydi, shuning uchun grafikni u yerda ishga tushirish, takrorlash yoki sinash mumkin. Tasodifiy sonlar doim **urug‘** (seed) talab qiladi, shuning uchun bir grafik har bir kompyuterda bir xil natija beradi.

## Fayl bilan birga saqlanadi

Grafik detal faylida saqlanadi (tarixda emas, shuning uchun muharrirdagi Ortga qaytarish o‘ziga xos). Tugunlar qattiq jism yonida egri chiziqlar, sirtlar va meshlar yasaydi: ular detalning xususiyatlarini o‘zgartirmaydi.
