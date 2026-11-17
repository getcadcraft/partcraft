---
title: PartCraft ni AI yordamchi bilan ishlatish
summary: Oʻzingizning AI yordamchingiz yoki skriptingiz ochiq detal bilan ishlashiga ruxsat bering: elementlari, parametrlari va massasini oʻqish, parametrni oʻzgartirib qayta qurish, skript ishga tushirish, eksport va saqlash. Siz yoqmaguningizcha oʻchiq turadi.
keywords: ai, yordamchi, agent, mcp, model context protocol, skript, avtomatlashtirish, parametrlar, massa xossalari, stl, step, 3mf, ruxsatlar, uzish, faollik, jildlar
from: e66d3470
---

## Nimalarni oʻrganasiz

AI yordamchi (yoki siz yozgan skript) ochiq detalingizni qanday koʻrishi, parametrlarini qanday oʻzgartirishi, skriptni ishga tushirib eksport qilishi va nimalarga tegishi mumkinligini qanday belgilashingizni bilib olasiz.

PartCraftʼda **oʻz AI yoʻq** va u hech narsani hech qayerga yubormaydi. Yordamchini siz olib kelasiz: Model Context Protocol (MCP) tilini tushunadigan istalgan dastur. PartCraft unga faqat vositalar beradi, qaysilarini berishni esa siz tanlaysiz.

## Yoqish

1. {{ui:Sozlamalar}} ni oching (ilova panelidagi tishli belgi yoki {{key:Mod+,}}) va {{ui:PartCraft}} yorligʻiga oʻting.
2. {{ui:Yordamchilar}} boʻlimida **AI yordamchilar va skriptlarga PartCraftʼdan foydalanishga ruxsat berish** katakchasini belgilang. Siz buni qilmaguningizcha u oʻchiq turadi.
3. Unga nima qilishga ruxsat berilishini tanlang. **Oʻqish** boshidan belgilangan; boshqalarini faqat kerak boʻlganda belgilang.
4. Eksport qilish va jildga saqlashga ruxsat berish uchun **Foydalanishi mumkin boʻlgan jildlar** ostida {{ui:Jild qoʻshish…}} ni tanlang va Studio dialogida jildni tanlang.

Yordamchilar kompyuteringizdagi **CadCraft Studio** orqali ulanadi: Studio manzil va yordamchiga joylashtiriladigan tokenni koʻrsatadi. Brauzer oynasi yordamchi uchun ulanish ocha olmaydi.

## Yordamchi nimalarni soʻrashi mumkin

| Vosita | Ruxsat | Nima qiladi |
|---|---|---|
| `part_describe`, `features_list` | Oʻqish | Elementlar ketma-ketligi, qaysilari qurilgani va qaysilari xato bergani, material, jismning hajmi va oʻlchami |
| `params_list` | Oʻqish | Parametrlar va tenglama boshqara oladigan har bir son, qiymatlari bilan |
| `mass_properties` | Oʻqish | Hajm, yuza, massa markazi, unga nisbatan inersiya; detalda material boʻlsa massa |
| `param_set` | Tahrirlash | Parametr yoki elementning sonini belgilaydi va qayta quradi. Bekor qilish mumkin boʻlgan bitta qadam |
| `script_run` | Tahrirlash | CraftScript, Lua yoki Python skriptini {{ui:Skript}} ish maydoni kabi ishga tushiradi: yopiq, fayllarsiz va tarmoqsiz. Detal oʻzgarmaydi |
| `part_export` | Eksport | STL, 3MF, STEP yoki OpenUSD (.usdz, .usda, .usdc) fayllari, {{ui:Fayl}} › {{ui:Eksport}} ularni yozadigandek |
| `link_push` | Tahrirlash | Boshqa dasturdan bogʻlangan modelni yangilaydi (qarang: [.3dm modelini jonli saqlash](topic:live-3dm-link)) |
| `link_status` | Oʻqish | Bogʻlangan model hali mavjudligini va oxirgi marta qachon yangilanganini koʻrsatadi |
| `part_save` | Saqlash | PartCraftʼning oʻz {{ui:Saqlash}} |
| `illustrate_export` | Eksport | {{ui:Illustrate}} ish maydonidagi qoʻllanmani uning koʻrinishlarining PDF yoki SVG chiziqli rasmi sifatida, interaktiv 3D fayl sifatida yoki koʻrsatmalarini PDF yoki veb-sahifa sifatida, ish maydonining {{ui:Eksport}} va {{ui:Koʻrsatmalar}} menyulari yozadigandek ([Qoʻllanmalar](topic:illustrate)) |

:::note
Bu versiya mesh yadrosidan foydalanadi: hajmlar uchburchaklardan olinadi (haqiqiy egri jismdan biroz kam), STEP esa aniq sirtlar oʻrniga uchburchaklar bilan, faset koʻrinishda yoziladi.
:::

## Nazorat siz qoʻlingizda

- **Har bir oʻzgarish bitta bekor qilish qadami**, yordamchi uchun belgilangan, masalan "Assistant: set l = 45". Uni qaytarish uchun {{key:Mod+Z}} tugmasini bosing.
- **Ulanganini bilasiz.** Ilova panelidagi tugma ulanish paytida yordamchi nomini koʻrsatadi. Unga nima ruxsat berilganini koʻrish yoki uni **Uzish** uchun bosing.
- **Faollik.** {{ui:Sozlamalar}} › {{ui:PartCraft}} › {{ui:Yordamchilar}} › {{ui:Faollik}} har bir chaqiruvni sanab beradi; {{ui:Jurnalni saqlash}} nusxasini saqlaydi.
- **Jildlar.** U faqat siz qoʻshgan jildlardagi fayllarni oʻqiydi va yozadi; {{ui:Olib tashlash}} jildni darhol qaytarib oladi.

## PartCraftʼni ochmasdan

Yordamchilar uchun CadCraft fayl serveri (`npx @getcadcraft/mcp`) va `cadcraft` buyruq satri `.partcraft.json` detallarini oynasiz ochadi, PartCraftʼning oʻz kodi va mesh yadrosi bilan: xuddi shu oʻqish vositalari, parametrlarni oʻrnatish, CraftScript skriptlari, eksport (shu jumladan OpenUSD) va saqlash. `cadcraft convert bracket.partcraft.json bracket.stl` buyrugʻi detalni quradi va buyruq satridan yozadi. Qoʻllanmalar (`.partcraft-manual.json`) ham u yerda eksport qilinadi: `illustrate_export`, yoki `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (koʻrsatmalar uchun `--instructions` qoʻshing).

## Agar biror narsa ishlamasa

- **"needs the edit permission":** {{ui:Yordamchilar}} ostida **Tahrirlash** katakchasini belgilang, keyin qayta soʻrang.
- **"driven by the equation":** bu son parametrga bogʻliq; yordamchidan buning oʻrniga parametrni belgilashni soʻrang.
- **Oʻzgarishi notoʻgʻri boʻldi:** {{key:Mod+Z}} tugmasini bosing.

## Shuningdek qarang

- [AI yordamchilar uchun retseptlar](common:assistants-recipes): har biri chaqiradigan vositalar bilan ishlangan misollar.
