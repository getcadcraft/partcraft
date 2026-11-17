---
title: Saqlash, qayta ochish va ishni davom ettirish
summary: Detallar va yigʻmalarni kompyuteringizga saqlang, nomlang, tugma, tugmalar birikmasi yoki sudrash orqali qayta oching, versiyalarni saqlang va brauzer yorligʻida ishni yoʻqotmang.
keywords: saqlash, ochish, qayta ochish, yuklash, yuklab olish, versiyalar, zaxira nusxa, nomini oʻzgartirish, fayl nomi, yoʻqolgan ish, saytdan chiqish, partcraft.json, partcraft-asm.json, yangi detal
from: c18a5abc
---

PartCraft tashriflar orasida hech narsani saqlamaydi. Detalingiz uni fayl sifatida saqlamaguningizcha brauzer yorligʻida turadi va siz oʻsha faylni ochganingizda qaytib keladi.

## Detalni saqlash

1. Detalga nom bering: koʻrinish maydonidagi boʻsh joyni bosing, shunda hech narsa tanlanmaydi, soʻng oʻng panelga **Nom** kiriting va {{key:Enter}} ni bosing. Tarix sarlavhasi shunga mos ravishda oʻzgaradi.
2. {{key:Mod+S}} ni bosing yoki {{ui:Saqlash}} ni tanlang.
3. Brauzer `<nom>.partcraft.json` faylini yuklab oladi. Holat satrida "Saqlandi: Bracket.partcraft.json (toʻliq tarix; tahrirlashni davom ettirish uchun uni shu yerda qayta oching)." yozuvi chiqadi.

Agar eskiz ochiq boʻlsa, saqlash avval uni yopadi.

Fayl har bir eskizni, bogʻlanishni, oʻlchamni va xususiyatni, shuningdek vaqtincha oʻchirilgan xususiyatlarni, qaytarish panelining joylashuvini, chizma varagʻi sozlamalarini va GD&T izohlarini hamda import qilingan STEP jismining toʻliq matnini saqlaydi. Ortga qaytarish tarixingiz saqlanmaydi.

## Yigʻmani saqlash

Yigʻmada xuddi shu {{ui:Saqlash}} yoki {{key:Mod+S}} `<yigʻma nomi>.partcraft-asm.json` faylini yuklab oladi. Har bir detal uning ichida saqlanadi: uni qayta ochish uchun alohida detal fayllari kerak emas.

Yigʻma ichidan detalni tahrirlayotganingizda {{key:Mod+S}} shu detalning oʻzini `.partcraft.json` sifatida saqlaydi. Butun yigʻmani saqlash uchun avval {{ui:Orqaga}} ni tanlang, soʻng saqlang.

## Qayta ochish

Quyidagilardan birini bajaring:

- {{ui:Ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing, soʻng faylni tanlang;
- faylni {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} dan 3D koʻrinishga sudrab tashlang ("PartCraft detalini ochish uchun shu yerga tashlang" paydo boʻladi).

PartCraft detal va yigʻmani ichidagi narsaga qarab farqlaydi, shuning uchun ikkalasi ham bir xil tarzda ochiladi. `.step` yoki `.stp` fayl import qilingan jism sifatida ochiladi: qarang [STEP faylini ochish va u asosida davom ettirish](topic:import-step). Holat satri tasdiqlaydi: "Ochildi: Bracket.partcraft.json: 7 ta xususiyat." yoki "Ochildi: Hinge.partcraft-asm.json: 3 ta detal, 2 ta bogʻlanish."

Agar ekrandagi detalda saqlanmagan oʻzgarishlar boʻlsa, PartCraft avval soʻraydi: {{ui:Bekor qilish}}, {{ui:Oʻzgarishlarni bekor qilish}} yoki {{ui:Avval saqlash}}.

:::warning
Detal faylini ochishdan oldin yigʻmani ({{ui:Yopish}}) yoping. Agar yigʻma ekranda turganda detalni ochsangiz, detal yigʻma orqasiga yuklanadi va uni faqat yigʻmani yopgandan keyin koʻrasiz. Yigʻma faylini ochish saqlanmagan yigʻmani soʻramasdan almashtiradi, shuning uchun avval uni saqlang.
:::

## Boshidan boshlash

{{ui:Yangi}} boʻsh "Part1" yaratadi. Agar saqlanmagan oʻzgarishlar boʻlsa, avval soʻraydi, ochiq yigʻma boʻlsa uni yopadi (saqlanmagan boʻlsa, soʻraydi).

## Versiyalarni saqlash

Har bir saqlash yangi yuklab olishdir, shuning uchun fayllarni saqlab qoʻyib versiyalarni saqlashingiz mumkin:

- Saqlashdan oldin nomga versiya yoki sanani qoʻying: "Bracket B revizi".
- Brauzer yuklab olishlar jildida xuddi shu nomli fayl allaqachon boʻlsa " (1)", " (2)" qoʻshishi mumkin. Eng yangisi eng katta raqamli, yoki sanani {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} da tekshiring.
- Tayyor fayllarni yuklab olishlar jildidan loyiha jildingizga koʻchiring.

Har bir tizimda yuklab olishlar qayerga borishi uchun [Fayllaringiz qayerga boradi](common:your-files) ga qarang.

## Ishni yoʻqotmaslik

- Brauzer yorligʻini yopishdan, sahifani qayta yuklashdan yoki kompyuter uzoq vaqt uyquga ketishidan oldin saqlang. Saqlanmagan oʻzgarishlar bilan yopishga urinsangiz, brauzer "Saytdan chiqilsinmi?" deb soʻraydi, ammo nosozlik yoki yopilgan noutbuk hech qanday ogohlantirish bermaydi.
- Maxfiy yoki inkognito oynalar ishlaydi, lekin boshqa hech narsa farq qilmaydi: fayl hali ham yagona nusxa boʻlib qoladi.
- Bulutli saqlash va versiyalar tarixi hali mavjud emas.
