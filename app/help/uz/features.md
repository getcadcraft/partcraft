---
title: Elementlar va ularning parametrlari
summary: Asboblar panelidagi har bir element, sozlamalari, standart qiymatlari va chegaralari bilan: ekstruziyadan yumaloqlashgacha, qobiqgacha va import qilingan STEP jismlargacha, barcha elementlarga umumiy amallar va detal sozlamalari.
keywords: elementlar, imkoniyatlar, ekstruziya, kesish, aylantirish, aylantirib oyish, teshik, zenkovka, chiziqli naqsh, doiraviy naqsh, simmetriya, yumaloqlash, faska, qobiq, import, parametrlar, standartlar, sozlamalar, aniqlik, egri chiziqlar, faset, vaqtincha oʻchirish, qaytarish
from: ab3a598e
---

Elementlar tarixda yaratilgan tartibda roʻyxatlanadi va yuqoridan pastga qayta quriladi. Har biri turi nomi va raqami bilan ataladi: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft har bir elementni mesh yadrosi bilan quradi. Yumaloqlash va Faska ikki tekis yuza orasidagi toʻgʻri qirralarda ishlaydi, Qobiq esa tekis yuzalarni ochadi. Import qilingan jismlar aniq yadroni talab qiladi, bu versiyada esa u yoʻq: ular hali qurilmagan, va quyidagi boʻlimda ular oldingi versiyada yaratilgan detal sifatida tasvirlangan. Qarang: [Mesh yadrosi](topic:solid-kernels) va [Hali qurilmagan narsalar](topic:not-built-yet).

## Eskiz

| Sozlama | Izoh |
|---|---|
| Tekislik | Old, Yuqori yoki Oʻng tekislik, yoki tekis yuza. Faqat koʻrsatiladi, oʻzgartirilmaydi: eskizni koʻchirish uchun yangisini yarating |
| Holat | Toʻliq aniqlangan, Qisman aniqlangan (erkinlik darajalari bilan), Ortiqcha aniqlangan yoki Boʻsh |
| Geometriya, Bogʻlanishlar | Nechta egri chiziq, nuqta va bogʻlanish |
| Boshqaruvchi oʻlchamlar | Eskizning har bir oʻlchami, tahrirlanadigan |

Tugmalar: {{ui:Eskizni tahrirlash}}, {{ui:DXF sifatida eksport qilish}}.

## Ekstruziya va Kesish

{{ui:Ekstruziya}} va {{ui:Kesish}} bir xil elementni yaratadi, faqat turli sozlamalar bilan boshlanadi.

| Sozlama | Tanlovlar | Ekstruziya boshlanadi | Kesish boshlanadi |
|---|---|---|---|
| Amal | Boss (material qoʻshish), Kesish (material olib tashlash), Kesishma (ustma-ust qismni saqlash), Yangi jism (bu versiyada hali qurilmagan) | Boss | Kesish |
| Tugash | Chuqurlik boʻyicha (chuqurlik), Oʻrta tekislik (ikki tomonga), Hammasini kesib oʻtish | Chuqurlik boʻyicha | Hammasini kesib oʻtish |
| Chuqurlik (mm) | 0 dan katta, 1,000,000 gacha | 10 | 10 |
| Yoʻnalishni teskari qilish | Oʻchiq / yoqiq | Oʻchiq | Oʻchiq |

- Profil: eskizdagi qattiq chiziqlar, aylanalar va yoylarning har bir yopiq halqasi. Halqa ichidagi halqalar teshik boʻladi.
- Hammasini kesib oʻtish faqat kesishlar uchun ishlaydi. U tanlangan tomonda detal orqali toʻliq oʻtadi.
- Kesish materialga kiradi, eskiz tekisligining tashqi tomonidan uzoqlashib; Yoʻnalishni teskari qilish uni aylantiradi.

## Aylantirish va aylantirib oyish

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Amal | Boss, Kesish | Boss ({{ui:Aylantirish}}), Kesish ({{ui:Koʻproq}} › {{ui:Aylantirib oyish}}) |
| Burchak (°) | 0 dan katta, 360 gacha | 360 |
| Oʻq | Birinchi markaz chizigʻi, eskizning istalgan chizigʻi yoki markaz chizigʻi, yoki eskiz tekisligida yotgan oʻq elementi | Birinchi markaz chizigʻi |

- Profil oʻq bir tomonida qolishi kerak. U oʻqqa tegishi mumkin.
- Aylantirishning oʻqidan Doiraviy naqshlar va yigʻma birikmalari foydalanishi mumkin.

## Teshik

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Tur | Oddiy, Zenkovka | Oddiy |
| Diametr (mm) | 0 dan katta | 6 |
| Hammasini kesib oʻtish | Yoqiq / oʻchiq | Yoqiq |
| Chuqurlik (mm) | Hammasini kesib oʻtish oʻchiq boʻlganda | 10 |
| Zenkovka ⌀ | Teshikdan keng | 11 |
| Zenkovka chuqurligi | Koʻr teshikdan sayozroq | 6 |
| Yoʻnalishni teskari qilish | Oʻchiq / yoqiq | Oʻchiq |

- Eskizning har bir erkin nuqtasiga bitta teshik (Nuqta asbobi bilan yaratilgan nuqtalar). Panelda nechtasi borligi koʻrsatiladi.
- Teshiklar eskiz tekisligiga perpendikulyar, materialga burgʻulanadi.
- Har bir teshikning oʻqidan yigʻma birikmalari foydalanishi mumkin ("Hole1, teshik 2").

## Chiziqli naqsh

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Nusxalanadigan elementlar | Undan yuqoridagi istalgan qattiq elementlar | Tanlangan element, aks holda oxirgi qattiq element |
| Yoʻnalish | X oʻqi, Y oʻqi, Z oʻqi; oldingi eskizning chizigʻi; aylantirishning oʻqi; tanlangan qirra | X oʻqi (yoki qoʻshganingizda tanlangan qirra) |
| Oraliq (mm) | Istalgan son | 20 |
| Soni | 1 dan 1000 gacha, asl nusxani ham hisobga olgan holda | 3 |
| Yoʻnalishni teskari qilish | Oʻchiq / yoqiq | Oʻchiq |

## Doiraviy naqsh

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Nusxalanadigan elementlar | Chiziqlidagidek | Chiziqlidagidek |
| Oʻq | Yuqoridagi Yoʻnalish kabi | Oxirgi aylantirishning oʻqi, aks holda Y oʻqi (yoki tanlangan qirra) |
| Burchak (°) | 0 dan katta, 360 gacha. 360 nusxalarni hammasi boʻylab teng joylashtiradi; kamroq boʻlsa, ularni burchak boʻylab yoyadi | 360 |
| Soni | 1 dan 1000 gacha, asl nusxani ham hisobga olgan holda | 6 |
| Yoʻnalishni teskari qilish | Oʻchiq / yoqiq | Oʻchiq |

## Simmetriya

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Simmetriya | Butun jism (hozirgacha qurilgan holda), yoki tanlangan elementlar | Tanlangan element, aks holda butun jism |
| Simmetriya tekisligi | Old, Yuqori yoki Oʻng tekislik; tekis yuza | Oʻng tekislik, yoki qoʻshganingizda tanlangan tekis yuza |

## Yumaloqlash va Faska

Bu versiyada mesh yadrosi ularni ikki tekis yuza orasidagi toʻgʻri qirralarda (tashqi yoki ichki burchaklarda), bitta radius bilan quradi. Dumaloq qirra "Yumaloqlash: bu versiyada faqat ikki tekis yuza orasidagi toʻgʻri qirralar (mesh yadrosi ularni quradi). Egri qirralarni eskizda yumaloqlang yoki qiyalang." deydi; yumaloq qirralar burchakda uchrashsa, ular qiyshiq kesiladi va element ogohlantiradi: "Mesh yadrosi bilan yumaloqlash: yumaloq qirralar uchrashgan joyda ular qiyshiq kesiladi, aralashtirilmaydi." Faska turlari (teng masofa, ikki masofa, masofa va burchak, **Tomonlarni almashtirish** bilan) hammasi ishlaydi. Qarang: [Yumaloqlash, faska va ichini boʻshatish](topic:fillet-chamfer-shell).

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Radius (mm) (Yumaloqlash) | 0 dan katta | 2 |
| Masofa (mm) (Faska) | 0 dan katta, ikkala yuzda bir xil | 1 |
| Qirralar | Tanlangan qirralar, har biri ulagan ikki yuzi bilan roʻyxatlanadi ("Extrude1 oxirgi yuzi × Extrude1 yon tomoni"), **Olib tashlash** bilan | Element qoʻshilganda tanlangan qirralar |

- Tugmani tanlashdan oldin qirralarni tanlang ({{key:Shift}}+bosish bir nechtasi uchun), yoki hech narsa tanlamasdan tugmani tanlang va keyin qirralarni bosing.
- {{ui:Qirralarni tanlash}} (yoki elementni ikki marta bosish) qirralarni oʻzgartiradi.
- Qirralar ular ulagan ikki yuza boʻyicha saqlanadi, shuning uchun yuqoridagi oʻlchamlar oʻzgarganda ham saqlanib qoladi.

## Qobiq

Mesh yadrosi uni quradi. Faqat tekis yuzalarni ochish mumkin ("Qobiq: bu versiyada faqat tekis yuzalarni ochadi (mesh yadrosi uni quradi)."); turli qalinlikdagi devorlar hali qurilmagan. Qarang: [Yumaloqlash, faska va ichini boʻshatish](topic:fillet-chamfer-shell).

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Devor (mm) | 0 dan katta | 2 |
| Devorlar tashqariga oʻsadi (yuzalar ichkarida qoladi) | Oʻchiq: devorlar ichkariga. Yoqiq: devorlar tashqariga | Oʻchiq |
| Ochiq yuzalar | Olib tashlanadigan yuzalar, kamida bittasi, **Olib tashlash** bilan | Element qoʻshilganda tanlangan yuzalar |

{{ui:Yuzalarni tanlash}} ochiq yuzalarni oʻzgartiradi.

## Import qilingan jism

STEP, STL, OBJ yoki 3MF faylini ochish orqali yaratiladi: oʻzining tarixisiz uchburchaklardan iborat qattiq jism ([STEP faylini ochish](topic:import-step), [STL, OBJ yoki 3MF ni ochish](topic:open-meshes)). U qaysi fayldan kelganini va import nimani tuzatganini koʻrsatadi; **Fayldagi birliklar**, **Fayldagi yuqori yoʻnalish** va **Foydalanish maqsadi** tahrirlanadigan boʻlib qoladi. Eski, aniq yadroli versiya import qilgan STEP jismi tarixda "qurilmagan" deb belgilangan holda qoladi; uni uchburchaklar sifatida qayta olish uchun STEP faylini qayta oching.

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| Fayldagi yuqori yoʻnalish | Z yuqoriga (koʻp CAD), Y yuqoriga | Z yuqoriga |

Naqshlar va simmetriyalar import qilingan jismni nusxalashi mumkin, lekin yumaloqlash, faska yoki qobiqni emas.

## Har bir elementda boʻladigan narsalar

Har bir element panelining pastida:

| Tugma | Vazifasi |
|---|---|
| {{ui:Vaqtincha oʻchirish}} / {{ui:Qayta yoqish}} | Oʻchirish yoki yoqish. Shunga muhtoj elementlar oʻchiq boʻlganda qurilmaydi |
| {{ui:Shu yergacha qaytarish}} | Faqat shu elementdan yuqoridagilarni quradi. Yangi elementlar qaytarish chizigʻiga qoʻshiladi |
| {{ui:Yuqoriga siljitish}} / {{ui:Pastga siljitish}} | Tartibini oʻzgartirish, agar u ishlatadigan narsalar pastda qolib ketmasa. Aks holda sababi bilan kulrang boʻladi |
| {{ui:Oʻchirish}} | Oʻchirish va (soʻraganingizdan keyin) undan foydalanadigan har bir elementni oʻchirish |
| Nomi | Nomini oʻzgartirish (60 tagacha belgi) |

Eskizli elementlar ham **Eskiz oʻlchamlari** roʻyxatini koʻrsatadi, ularni joyida tahrirlash mumkin.

## Tarixdagi holatlar

| Holat | Qanday koʻrinadi | Maʼnosi |
|---|---|---|
| Qurilgan | Oddiy | Hammasi yaxshi |
| Ogohlantirish | ⚠ | Qurilgan, lekin tekshirish kerak: "Ortiqcha aniqlangan: 1 ta bogʻlanish kerak emas." yoki "Bundan keyin detaldan hech narsa qolmadi." |
| Xato | ⚠ xato, qizil | Qurilmadi; xabar sababini aytadi |
| Qurilmagan | ⚠ qurilmagan | Muvaffaqiyatsiz boʻlgan, vaqtincha oʻchirilgan yoki qaytarilgan elementga muhtoj, yoki aniq yadroga muhtoj, bu versiyada esa yoʻq ("Sweep: hali qurilmagan. …") |
| Vaqtincha oʻchirilgan | oʻchiq | Oʻchirilgan |
| Qaytarilgan | kulrang, qaytarish chizigʻi ostida | Oldinga qaytarmaguningizcha qurilmaydi |

## Detal sozlamalari

Hech narsa tanlanmasligi uchun boʻsh joyni bosing. Oʻng panelda **Detal** koʻrinadi:

- **Nomi**: detal nomi, fayl nomlari va chizma sarlavha blokida ishlatiladi (120 tagacha belgi).
- **Egri chiziqlar**: quyida qarang.

### Egri chiziqlar aniqligi

Mesh yadrosi jismni tekis fasetlardan oʻzi quradi, shuning uchun koʻrinish, STL, 3MF, faset STEP, hajm va chizma koʻrinishlari hammasi **Egri chiziqlar** ga boʻysunadi: bir toʻliq aylanishda nechta faset.

| Sozlama | Aylanishdagi fasetlar | Dumaloq shakl hajmi |
|---|---|---|
| Qoʻpol (aylanishiga 32 ta) | 32 | Haqiqiy qiymatdan taxminan 0.64 % kam |
| Oʻrtacha (aylanishiga 64 ta) | 64 | Taxminan 0.16 % kam (standart) |
| Nozik (aylanishiga 128 ta) | 128 | Taxminan 0.04 % kam |
| Juda nozik (aylanishiga 256 ta) | 256 | Taxminan 0.01 % kam |

Nozikroq egri chiziqlar silliqroq eksport va koʻrinishlar, lekin sekinroq qayta qurish beradi. Sozlama detal faylida saqlanadi.

## Hali qurilmagan

Oʻzgaruvchan radiusli yumaloqlashlar, dumaloq qirralardagi yumaloqlash va faskalar, egri yuzalarni ochadigan qobiqlar, egri yuzalarda draft, sweep, loft, rib, aniq egri yuzali STEP jismlar, yangi jismlar, konuslik, "gacha" yuza yoki uchi, va jism yuzalari va qirralaridagi havolalar aniq yadroni talab qiladi, bu versiyada esa yoʻq. Shuningdek hali qurilmagan: rezbali va konusli zenkovkali teshiklar. Qarang: [Hali qurilmagan narsalar](topic:not-built-yet).
