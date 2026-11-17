---
title: Naqsh va aks ettirish elementlari
summary: Elementlarni qator boʻylab Chiziqli bilan takrorlang, oʻq atrofida Doiraviy bilan aylantiring, Aks ettirish bilan elementlarni yoki butun jismni tekislik orqali nusxalang.
keywords: naqsh, chiziqli naqsh, doiraviy naqsh, qutbli massiv, massiv, aks ettirish, simmetrik, elementlarni nusxalash, bolt aylanasi, urugʻ, jismni aks ettirish
from: 702e9edb
---

Naqsh va aks ettirishlar allaqachon yaratilgan elementlarni nusxalaydi. Nusxalar tarixning bir qismi: asl elementni oʻzgartirsangiz, nusxalar ham unga ergashadi.

Nusxalanadigan narsa elementning vazifasiga bogʻliq: boss naqshi material qoʻshadi, kesish yoki teshik naqshi esa materialni olib tashlaydi. Naqshlarni yana naqshlash va aks ettirish mumkin. Import qilingan STEP qattiq jismini ham nusxalash mumkin; yumaloqlash, faska va qobiqlar esa nusxalanmaydi.

## Chiziqli naqsh

1. Tarixda nusxalanadigan elementni tanlang (masalan, Teshik yoki Kesim). Hech narsa tanlanmagan boʻlsa, oxirgi qattiq element olinadi.
2. {{ui:Chiziqli}} ni tanlang. X boʻylab bir-biridan 20 mm masofada uchta nusxa paydo boʻladi.
3. Oʻng paneldagi sozlamalarni oʻrnating:

| Parametr | Vazifasi | Odatiy |
|---|---|---|
| **Nusxalanadigan elementlar** | Nusxalanadigan barcha elementlarni belgilang. Faqat naqshdan yuqorida turgan elementlar roʻyxatda koʻrinadi | Tanlangan element |
| **Yoʻnalish** | X oʻqi, Y oʻqi, Z oʻqi, istalgan oldingi eskizdagi chiziq yoki markaziy chiziq, aylantirish oʻqi yoki tanlangan qirra | X oʻqi |
| **Masofa (mm)** | Qoʻshni nusxalar orasidagi masofa | 20 |
| **Soni** | Umumiy soni, **asl nusxani ham hisobga olgan holda** (1 dan 1000 gacha) | 3 |
| **Teskari yoʻnalish** | Nusxalar teskari tomonga joylashadi | Oʻchirilgan |

### Qirrani yoʻnalish sifatida ishlatish

1. Koʻrinishda detalning toʻgʻri qirrasini bosing. Oʻng panelda **Qirra** deb yoziladi va uning uzunligi koʻrsatiladi.
2. {{ui:Chiziqli}} ni tanlang: naqsh shu qirra boʻylab boradi.

Yoki naqshni tanlang, qirrani belgilang va **Yoʻnalish** boʻlimida "Tanlangan qirra (hozir tanlanganidan foydalanish)" variantini tanlang. Tanlangan qirra fazoda qotib qoladi: keyingi oʻzgarishlarga ergashmaydi. Eskiz chizigʻi esa oʻz eskiziga ergashadi.

## Doiraviy naqsh

1. Nusxalanadigan elementni tanlang (masalan, diskning chetidagi bitta teshik).
2. {{ui:Doiraviy}} ni tanlang. Aylana boʻylab teng masofada oltita nusxa paydo boʻladi.
3. Quyidagilarni oʻrnating:

| Parametr | Vazifasi | Odatiy |
|---|---|---|
| **Nusxalanadigan elementlar** | Chiziqli naqshdagidek | Tanlangan element |
| **Oʻq** | X, Y yoki Z oʻqi, eskiz chizigʻi, aylantirish oʻqi yoki tanlangan qirra | Mavjud boʻlsa, oxirgi aylantirish oʻqi, aks holda Y oʻqi |
| **Burchak (°)** | 360 nusxalarni aylana boʻylab teng taqsimlaydi. Kichikroq qiymat ularni shu burchak boʻylab tarqatadi, birinchisi va oxirgisi chetlarda boʻladi | 360 |
| **Soni** | Umumiy soni, asl nusxa bilan birga | 6 |
| **Teskari yoʻnalish** | Teskari tomonga aylantiradi | Oʻchirilgan |

Asosiy oʻqlar koordinatalar boshidan oʻtadi. Koordinatalar boshida markazlashmagan disk uchun eskizning markaziy chizigʻini yoki aylantirish oʻqini ishlating.

### Misol: flanetsning sakkizta bolt teshigi

1. Flanetsni Y oʻqi atrofida aylantiring (qarang: [Tokarlik detalini aylantirish](topic:revolve)).
2. Flanetsning tekis yuqori yuzida eskiz oching, bolt aylanasiga bitta nuqta qoʻying va Teshik yarating.
3. Teshik tanlangan holda {{ui:Doiraviy}} ni tanlang. Oʻq allaqachon "Revolve1 oʻqi" boʻladi.
4. **Soni** ni `8` ga oʻrnating.

## Aks ettirish

1. Tarixda aks ettiriladigan elementni tanlang yoki hech narsa tanlamang, shunda **hozirgacha yaratilgan butun jism** aks ettiriladi.
2. {{ui:Aks ettirish}} ni tanlang. U **Oʻng tekislik** orqali aks ettiradi.

Buning oʻrniga butun jismni detalning biror yuzi orqali aks ettirish uchun avval oʻsha tekis yuzni bosing, soʻng {{ui:Aks ettirish}} ni tanlang. (Yuzni bosish tarixdagi tanlovni bekor qiladi, shuning uchun bu har doim butun jismni aks ettiradi.)

Oʻng paneldagi sozlamalar:

- **Aks ettirish**: **Hozirgacha yaratilgan butun jism** ni belgilang yoki belgini olib tashlab, nusxalanadigan elementlarni belgilang.
- **Aks ettirish tekisligi**: Old tekislik, Yuqori tekislik, Oʻng tekislik, hozir ishlatilayotgan yuz ("Extrude1 ning yuzi" yoki "Qoʻzgʻalmas tekislik") yoki "Hozir tanlangan yuz". Tanlangan elementlarni yuz orqali aks ettirish uchun: tarixda Aks ettirishni tanlang, koʻrinishda yuzni bosing va "Hozir tanlangan yuz" ni tanlang.

Butun jismni yuz orqali aks ettirish detalni ikki baravar koʻpaytiradi, masalan, yarim kronshteynni toʻliq kronshteynga aylantiradi.

## Xabarlar

- "Avval nusxalanadigan element yarating." yoki "Avval qattiq jism yarating." Hali nusxalanadigan qattiq jism yoʻq.
- "Nusxalanadigan elementlarni tanlang." Barcha **Nusxalanadigan elementlar** katakchalari tozalangan.
- "Extrude2 da nusxalanadigan qattiq jism yoʻq." Bu element xato berdi yoki bostirilgan.
- "Fillet1 jismning qirralarini yoki devorlarini oʻzgartiradi; uni nusxalab boʻlmaydi. Qattiq jism yaratadigan elementlarni nusxalang (ekstrudlash, aylantirish, teshiklar, importlar)." Yumaloqlash, faska va qobiqlarni naqshlab yoki aks ettirib boʻlmaydi: avval naqsh yarating, keyin yumaloqlang.
- "Hali aks ettiriladigan jism yoʻq."

:::note
Naqsh nusxalarini bittalab oʻtkazib yuborib boʻlmaydi va naqsh eskiz egri chizigʻiga ergasha olmaydi. Eskiz naqshlari va aks ettirishlari ham hali yaratilmagan: takrorlanuvchi eskiz geometriyasini qoʻlda yoki **Koordinatalar boʻyicha qoʻshish** orqali chizing.
:::
