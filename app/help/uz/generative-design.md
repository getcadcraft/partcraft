---
title: Yuklamalardan shakl oʻstirish (Generative)
summary: Ushlab turilgan va yuklangan yuzalarni, saqlanadigan va boʻsh turadigan sohalarni, maqsadli hajmlar va materiallarni tanlang, natijalarni yarating: har bir hajm uchun topilgan eng qattiq shakllar, ularni qayta qattiq jism sifatida tekshirish, jadvalda solishtirish va STL, STEP yoki yangi detal sifatida yuklab olish.
keywords: generativ loyihalash, topologik optimallashtirish, SIMP, yengil, panjara, organik shakl, natijalar, solishtirish, massa, hajm ulushi, saqlash, ichkarida saqlash, toʻsiq, tashqarida saqlash, loyihalash sohasi, minimal element oʻlchami, STL, 3D bosib chiqarish
from: 5b91fa8e
---

**Generative** ishchi maydoni yuklar kerak boʻlmagan materialni olib tashlaydi. Siz detal qayerda ushlanishi va yuklanishi, nima qolishi va nima boʻsh turishi kerakligini aytasiz; PartCraft har bir maqsadli hajm uchun eng qattiq shaklni topadi (**topologik optimallashtirish**), har birini haqiqiy material bilan qayta jism sifatida tekshiradi va natijalarni yonma-yon koʻrsatadi. U detal uchun mesh yadrosi bergan nomlangan yuzalarda ishlaydi (qarang: [Mesh yadrosi](topic:solid-kernels)).

**Ish maydoni** qutisidan **Generative** ni tanlang. Detalingiz oʻzgarmaydi; tadqiqot detal faylining ichida saqlanadi.

## Tadqiqotni sozlash

1. Oʻng panelda **Yangi tadqiqot** ni bosing.
2. **Fazo**: *Detal qanday boʻlsa* — detaldan material olib tashlaydi; *Detal atrofidagi quti* — detaldan katta qutining ichida, **Quti zaxirasi** masofasiga, shakl oʻstiradi.
3. **Element oʻlchami**: avtomatik oʻlcham uchun boʻsh qoldiring (taxminan 8,000 kub), yoki oʻzingiz kiriting. Mayda oʻlchamlar nozikroq shakl beradi va koʻproq vaqt oladi.
4. **Minimal element**: bu qiymatning taxminan ikki barobaridan ingichka elementlar hosil boʻlmaydi. Boʻsh qoldirilsa, bir yarim kub.
5. Bir dan oltitagacha **Maqsadli hajmlar** (shakl egallashi mumkin boʻlgan loyihalash fazosi ulushi) va bir dan toʻrtgacha **Materiallar** ni belgilang. Har bir hajm bir marta yaratiladi; har bir material shu shaklda tekshiriladi (eng qattiq shakl materialga bogʻliq emas, lekin uning massasi, kuchlanishi va xavfsizlik koeffitsiyenti bogʻliq).

## Maqsadlar

- {{ui:Qoʻzgʻalmas}}: ushlab turiladigan yuzalarni bosing. Panelning **Qoʻshish** roʻyxatidagi **Ishqalanishsiz yuza** yuzani faqat oʻz tekisligi boʻylab ushlaydi (simmetriya tekisliklari uchun ishlating).
- {{ui:Kuch}}: yuklangan yuzalarni bosing, soʻng umumiy kuchni kiriting va panelda uning yoʻnalishini tanlang. **Bosim** **Qoʻshish** roʻyxatida.
- {{ui:Saqlash}}: atrofi qattiq qolishi kerak boʻlgan yuzalarni bosing va qanchalik chuqur ekanini belgilang (**Qattiq saqlash chegarasi**) — masalan, bolt teshiklari atrofida. Siz ushlagan yoki yuklagan yuzalar doim saqlanadi.
- {{ui:Toʻsiq}}: atrofi boʻsh qolishi kerak boʻlgan yuzalarni bosing va qanchalik uzoqligini belgilang (**Boʻsh saqlash chegarasi**) — val yoki asbob uchun joy.

Yuzalarni bosgandan keyin **Tanlashni tugatish** yoki {{key:Esc}} ni bosing. Yashil va qizil ranglar sohalarni koʻrsatadi.

## Yaratish va solishtirish

{{ui:Yaratish}} tugmasini bosing. Panelda jarayon va qolgan vaqt koʻrsatiladi; **Toʻxtatish** bekor qiladi. Har bir natija **Natijalar** jadvalida chiqadi: maqsadli hajm, material, **massa**, **eng katta kuchlanish**, **eng katta siljish** va **xavfsizlik koeffitsiyenti** (oquvchanlik ÷ kuchlanish). Bularning hammasi tayyor shaklni haqiqiy material bilan kub jism sifatida qayta yechishdan olinadi.

Natijani koʻrinishda koʻrish uchun uni tanlang (detal yashirinadi; ikkalasini koʻrish uchun **Detalni uning orqali koʻrsatish** ni belgilang). Jadval ostida: necha iteratsiya ketgani va barqarorlashdimi, uning qattiqligi jism sifatida optimallashtiruvchining oʻz koʻrsatkichiga nisbatan va uning sirti.

## Natijadan foydalanish

- **STL**: yopiq uchburchakli mesh, 3D bosib chiqarishga tayyor.
- **STEP (faset)**: bir xil sirt, tekis yuzalardan iborat STEP jismi sifatida.
- **Yangi detal fayli**: bitta xususiyati import qilingan jism sifatida natija boʻlgan PartCraft detali. Uning ustida eskiz chizish, teshik kesish yoki Simulyatsiyada tekshirish uchun oching. U faset (minglab tekis yuzalar), tahrirlanadigan shakl emas.
- **Bu detalga qoʻshish** natijani detalga birlashtiradi; u faqat quti loyihalash fazosi uchun yoqiladi (detalning oʻzi fazo boʻlganda natija detal ichida yotadi).

**Yangi detal fayli** va **Bu detalga qoʻshish** bu versiyada hali yaratilmagan: natija import qilingan jismga aylanadi, bunga aniq yadro kerak. STL va STEP (faset) yuklab olish ishlaydi.

## Unga qanchalik ishonish mumkin

- U berilgan hajm uchun **qattiqlikni** optimallashtiradi. Hozircha kuchlanish chegaralari va ishlab chiqarish qoidalari yoʻq (osilgan qismlar, frezalash yoʻnalishlari, teshiklarning minimal oʻlchamlari): tanlangan natijani [Simulyatsiya](topic:simulation) da tekshiring va sozlang.
- Bir yoki ikki kub kenglikdagi ingichka elementlar taxminiy: nozik detallar uchun kichikroq element oʻlchamidan foydalaning.
- Usul — zichlik filtri, chegaraviy proyeksiya va optimallik mezonlarini yangilash bilan SIMP; koʻrsatilgan kuchlanish va egilish natijaning kublar sifatidagi qiymatlari boʻlib, bu halol, lekin oʻtkir burchaklarda aniq emas.

## Tegishli

- [Kuchlanish va egilishni tekshirish (Simulyatsiya)](topic:simulation)
- [Bosib chiqarish, STEP va DXF uchun eksport](topic:export-files)
- [Hali yaratilmagan narsalar](topic:not-built-yet)
