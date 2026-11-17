---
title: List metall: flanetslar va yassi yoyilma
summary: List metall detalni eskizdan boshlang (yassi plastina yoki egilgan profil), qalinligini, egilish radiusini va K-koeffitsientini bir marta belgilang, qirralaridan flanetslarni egilish qirqimlari bilan koʻtaring va uni kesish uchun DXF sifatida yassi yoying.
keywords: yassi yoyilma, yoyish, ishlab chiqilgan uzunlik, egilish zaxirasi, egilish chizigʻi, lazer uchun DXF, lazerda kesish, list metall, asosiy flanets, qirra flanetsi, flanets, egilish, egilish radiusi, K-koeffitsient, K koeffitsient, qalinlik, oʻlchagich, qirqim, egilish qirqimi, kanal, kronshteyn, korpus, egilgan list
from: 144bd0f6
---

:::note
**Bu versiyada hali qurilmagan.** List metall aniq geometriya yadrosini talab qiladi, PartCraft ning bu versiyasida esa u yoʻq: u har bir detalni toʻr yadrosi bilan quradi. [Hali qurilmagan narsalar](topic:not-built-yet) nima qilish kerakligini tushuntiradi. Sahifaning qolgan qismi uni aniq yadro bilan qanday ishlashini tavsiflaydi.
:::

List metall detallari **Asosiy flanets** bilan boshlanadi. U butun detal uchun varaqni belgilaydi: uning **qalinligi**, **ichki egilish radiusi** va **K-koeffitsienti**. Undan keyingi har bir **Qirra flanetsi** shu raqamlar bilan egiladi, shuning uchun detal yoyilishi mumkin boʻlgan bitta varaq boʻlib qoladi. Ikkalasi ham **aniq yadro**ni talab qiladi (qarang [Toʻr yadrosi](topic:solid-kernels)).

## Asosiy flanets bilan boshlash

1. Eskiz chizing. Yassi plastina uchun **yopiq kontur** ishlating (toʻrtburchak yoki teshiklari bilan har qanday yopiq kontur). Egilgan varaq uchun, masalan L, U yoki Z shaklini varaqning yon koʻrinishi sifatida chizgan boʻlsangiz, **bitta ochiq chiziqlar zanjiri** ishlating.
2. Xususiyatlar tarixida eskizni tanlang.
3. Xususiyatlar guruhidagi {{ui:Koʻproq}} ni oching va {{ui:Asosiy flanets}} ni tanlang.

Oʻng paneldə:

- **Qalinlik (mm)** — varaqning oʻlchagichi.
- **Egilish radiusi (mm)** — har bir egilishning ichki radiusi. 0 oʻtkir ichki burchak beradi; tashqi tomon baribir bir qalinlik radiusi bilan buriladi.
- **K-koeffitsient** — neytral qatlam varaq ichida qayerda turishini 0 (ichki yuz) dan 0.5 (oʻrta) gacha koʻrsatadi. U varaq yassi yoyilganda qanchalik uzun boʻlishini belgilaydi. Standarti 0.44; sexingiz yoki material yetkazib beruvchingiz oʻzinikini berishi mumkin.
- **Chuqurlik (mm)** — egilgan profil eskiz tekisligidan qanchalik chiqishi. Plastina uchun e'tiborga olinmaydi.
- **Egilishlardan tashqaridagi qalinlik**: ochiq profil varaqning bitta yuzidir. Odatda qalinlik birinchi egilishning ichki tomoniga qoʻyiladi, shuning uchun chizgan chiziqlaringiz kanalning tashqi tomoni boʻladi. Chiziqlarni ichkariga qoʻyish uchun belgilang. Javob qaysi uchidan chizganingizdan qat'i nazar bir xil.

Ochiq zanjirning har bir burchagi egilishga aylanadi. Egilishlarini ushlab turishga yetmaydigan juda qisqa chiziq buni aytadi va kerakli uzunlikni koʻrsatadi.

## Qirra flanetsini egish

1. Varaqning yuqori yoki pastki yuzasining toʻgʻri qirrasini bosing (uzun qirralar, yupqalari emas).
2. {{ui:Koʻproq}} › {{ui:Qirra flanetsi}} ni tanlang. Hech qanday qirra tanlanmagan boʻlsa, PartCraft uni bosishingizni kutadi; Esc bekor qiladi.

Flanets shu qirraning yuzasidan ichki radius atrofida tik koʻtariladi, soʻng toʻgʻri davom etadi. Panelda:

- **Burchak (°)** — qanchalik egilishi, 1 dan 180 gacha. 90 kvadrat flanets.
- **Uzunlik (mm)** — egilishdan keyingi toʻgʻri qism.
- **Boshqa tomonga egish** — uni boshqa yuzadan egadi (yuqoriga emas, pastga).
- **Boshidagi siljish** va **Oxiridagi siljish** — flanetsni qirraning har bir uchidan qisqartiradi.
- **Egilish qirqimi**: uchi siljitilganda, yonida varaqqa kesik kiritiladi, shunda egilish u yerda metallni yirtmaydi. **Qirqim kengligi** kesikning kengligini belgilaydi; uning chuqurligi egilish radiusi bilan qalinlikning yigʻindisi. Burchakni kesilmagan qoldirish uchun **Yoʻq** ni tanlang.

Qirrani keyinroq oʻzgartirish uchun paneldagi {{ui:Tanlash}} ni bosing va boshqasini bosing.

:::tip
Qalinlik va radius uchun parametrlardan foydalaning (qarang [Parametrlar va tenglamalar](topic:parameters)), shunda oʻlchagich oʻzgarganda barcha flanetslar bir vaqtda yangilanadi.
:::

## Yassi yoyish

Ikkala panel ham **Yassi naqsh** bilan tugaydi. {{ui:Yoyish}} ni bosing:

- Koʻrinish varaqni yoyilgan holda koʻrsatadi, har bir egilishning markaziy chizigʻi punktir bilan.
- **Oʻlcham** va **Maydon** — yassi zagotovkaniki.
- Har bir egilish yoʻnalishi (**yuqoriga** yoki **pastga**, asosiy flanets eskizi tomondan qaraganda), burchagi va ichki radiusi bilan roʻyxatlanadi.

Har bir egilish uning orqali varaq neytral qatlamining uzunligini oladi, **egilish zaxirasi**: burchak (radianda) × (ichki radius + K-koeffitsient × qalinlik). Shunday qilib, 2 mm varaqning 90° egilishi 2 mm radius va K-koeffitsient 0.44 bilan 4.52 mm yassi varaq qoʻshadi.

Yassi plastinada teshiklar, kesimlar va egilish qirqimlari ular haqiqatda joylashgan yerda yassi shaklda koʻrinadi, shu jumladan flanets orqali oʻtadigan teshiklar.

Koʻp narsani kesish uchun yassi yoyilma ostidagi {{ui:Varaqlarga joylashtirish…}} ni bosing: qarang [Yassi detallarni varaqlarga joylashtirish](topic:nest-flat-parts). Egilgan asosiy flanets bitta toʻgʻri toʻrtburchak boʻlib yoyiladi: uning ishlab chiqilgan uzunligi × chuqurligi, har bir burchakda egilish chizigʻi bilan.

{{ui:DXF saqlash}} lazer, pres yoki suv oqimli kesish uchun yassi yoyilmani millimetrda saqlaydi:

- kontur **OUTLINE** qatlamida, chiziq, yoy va aylana sifatida;
- egilish chiziqlari **BEND** qatlamida, punktir;
- har bir egilish haqida izoh **BEND_NOTES** qatlamida, masalan "UP 90° R2".

Biror narsani oʻzgartirsangiz, yassi yoyilma yoʻqoladi; yangisi uchun yana {{ui:Yoyish}} ni bosing.

:::note
Kesishdan oldin K-koeffitsientni sexingiz bilan tekshiring: yoyilmaning uzunligi unga bogʻliq va u material, qalinlik hamda asbobga qarab oʻzgaradi.
:::

## Xabarlar

- **List metallga oldin asosiy flanets kerak** — qirra flanetsi biror asosiy flanetsdan oldin qoʻshilgan. Uni biridan pastga siljiting yoki avval asosiy flanets qoʻshing.
- **Qirra flanetsiga toʻgʻri qirra kerak** — flanetslar faqat chiziqlar boʻylab egiladi; egri qirralar hali qabul qila olmaydi.
- **Bu qirra varaq qalinligi yuzasida emas** — qirra boshqa yuzaga tegishli, u varaqning yuqori yoki pastki yuzasi emas (masalan teshik devori). Yuqori yoki pastki yuzaning qirrasini tanlang.
- **Siljishlar qirradan hech narsa qoldirmaydi** — ikkala siljish yigʻindisi butun qirraga teng yoki undan katta.
- **Egilgan asosiy flanetsdagi qirra flanetslarini hali yassi yoyib boʻlmaydi** — yassi plastinadan boshlang va hammasini qirra flanetslari bilan koʻtaring, ular yoyiladi.
- **Egilgan asosiy flanetsdan keyin qilingan kesim va teshiklar hali uning yassi shaklida koʻrinmaydi** — egilgan profilning yassi shakli faqat uning ishlab chiqilgan toʻrtburchagidir.
