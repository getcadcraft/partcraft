---
title: Yigʻmani toʻqnashuv va harakat uchun tekshirish
summary: Joylashgan detallarning kesishishini Toʻqnashuv bilan toping, har qanday birikma qiymatlarini surib harakatni kuzating va birikmani chegaragacha yurgizib, detallar qayerda urilishini aniqlang.
keywords: interferensiya, interferensiyani aniqlash, toʻqnashuv, urilish, ustma-ust tushish, rezba mosligi, rezba chuqurligi nomuvofiqligi, tegib turgan yuzlar, yashirish, filtr, harakat, harakat tahlili, yurgizish, harakat diapazoni, tekshirish
from: 9c98db46
---

Joylashtirilgan detallar ustida ikki tekshiruv bajariladi: **Toʻqnashuv** hozir ustma-ust tushgan materialni qidiradi, **harakat tekshiruvi** esa bitta birikmani uning diapazoni boʻylab suradi va yoʻlda ustma-ust tushishlarni qidiradi.

## Interferensiyani tekshirish

1. Yigʻmani oching yoki quring (qarang: [Birikmalar bilan yigʻma qurish](topic:build-assembly)).
2. {{ui:Toʻqnashuv}} ni tanlang.

Holat satri natijani koʻrsatadi:

- "3 ta detal oʻrtasida interferensiya yoʻq (… ms)." Hech narsa ustma-ust tushmaydi.
- "Interferensiya: Flange1 va Flange2: Ustma-ust tushish, 2.5 mm³." Har bir juftlik, natija turi va ular birgalikda egallagan hajm.

Chapdagi **Yigʻma** qutisi **Interferensiya** ni koʻrsatadi: "Yoʻq", "2 ta natija" (koʻrsatilganlar) yoki "Tekshirilmagan". Hech narsa tanlanmagan boʻlsa, oʻng panel har bir natijani **Interferensiya** ostida koʻrsatadi.

Natija yigʻma oʻzgarganda har doim tozalanadi. Birikmani siljitgandan keyin {{ui:Toʻqnashuv}} ni qayta ishga tushiring. Har bir detal jufti boshqa har bir detal bilan tekshiriladi, shuning uchun katta yigʻmalar koʻproq vaqt oladi.

### Natija turlari

| Turi | Nimani bildiradi |
|---|---|
| **Ustma-ust tushish** | Detallar hajmni boʻlishadi: haqiqiy toʻqnashuv. |
| **Rezba chuqurligi nomuvofiqligi** | Umumiy hajm bir detalning rezbasi ichida, lekin ikkinchisidan tashqarida: boltning teshikdagidan chuqurroq rezbasi, yoki rezbali teshikdagi silliq boʻyin. |
| **Rezba mosligi (soxta rezba)** | Umumiy hajm ikkala detalning rezbasi ichida: rezbali teshikdagi bolt. Soxta rezbalar rezbaning toʻliq oʻlchamida chiziladi, shuning uchun ular doim biroz ustma-ust tushadi. |
| **Tegib turgan yuzlar** | Umumiy hajm yoʻq, lekin yuzlar tegib turibdi (0.001 mm ichida). |

Modellashtirilgan rezbalar (qarang: [Vallar va teshiklardagi rezbalar, chizilgan yoki modellashtirilgan](topic:threads)) haqiqiy geometriya: ular bilan oʻrtoqlashgan hajm **Ustma-ust tushish** boʻladi.

### Keraksiz narsalarni yashirish

**Interferensiya** ostida **Koʻrsatish** har bir tur uchun katakchaga ega: faqat muhim toʻqnashuvlarni koʻrish uchun **Rezba mosligi** va **Tegib turgan yuzlar** ni belgisini olib tashlang. Natija yonidagi **Bu juftlikni yashirish** shu juft detallarni qaysi turda boʻlishidan qat'i nazar yashiradi. Yashirilgan natijalar sanaladi ("2 ta natija bu filtrlar bilan yashirilgan"), va **Yashirilgan juftliklarni yana koʻrsatish** ularni qaytaradi. Holat satri yashirilgan natijalarni ham sanaydi.

Filtrlar yigʻma bilan birga saqlanadi, har bir oʻzgarish bitta {{key:Mod+Z}} qadami. **Birikmani toʻqnashuv uchun surish** (quyida) ham ulardan foydalanadi. Filtrli yigʻma 4-versiya sifatida saqlanadi; eski PartCraft versiyalari uni filtrlarni yoʻqotmaslik uchun ochishdan bosh tortadi.

## Harakatni kuzatish

1. Chapdagi roʻyxatda harakatlanadigan birikmani tanlang (qattiqdan boshqa har qanday).
2. **Burchak (°)** yoki **Ofset (mm)** kabi qiymatlaridan birining ostidagi surgichni suring. Siz surganingizda detal siljiydi.
3. Qoʻyib yuboring. Yangi holat saqlanadi va {{key:Mod+Z}} bilan qaytarilishi mumkin.

Katakchaga burchak yoki ofset yozib, {{key:Enter}} ni ham bosishingiz mumkin.

Yopiq halqadagi birikma (bogʻlanish) butun halqani siljitadi: siz surgan qiymat saqlanadi va halqaning boshqa birikmalari unga ergashadi (qarang: [Yopiq halqalar](topic:build-assembly#closed-loops-linkages)).

## Birikmani toʻqnashuv uchun surish

1. Harakatlanadigan birikmani tanlang.
2. Bir necha qiymatli birikma uchun (silindrsimon, tekis, shar, pin tirqishda) **Harakatlarni tekshirish** da qaysi qiymatni surishni tanlang.
3. {{ui:Harakat davomida toʻqnashuvlarni tekshirish}} ni tanlang.

PartCraft oʻsha qiymatni 24 teng qadamda 25 holat orqali suradi, boshqalari oʻz holatida qoladi: burchak −180° dan 180° gacha (egilish −90° dan 90° gacha), uzunlik esa eng katta detal oʻlchamining minusdan plyusigacha. U quyidagilarni xabar qiladi:

- "Burchak (°) -180 dan 180 gacha hech qayerda toʻqnashuv yoʻq (25 ta holat tekshirildi)."
- "25 tadan 6 tasi toʻqnashadi, birinchisi Burchak (°) 45 da (12.4 mm³)." Birinchi toʻqnashgan holat va u yerdagi ustma-ust tushish.

Tugma qattiq birikmalar uchun kulrang, chunki ular harakat qilmaydi. Surish faqat holatlarni tekshiradi, ular orasidagi yoʻlni emas: yupqa detal ikki qadam orasida boshqasidan oʻtib ketishi mumkin.

:::note
Kontakt va gravitatsiya hali tayyor emas. Chegarasiz surish butun diapazonni qamraydi; qiymatga **Chegaralar** bering (qarang: [Detallar roʻyxati, yoyilgan koʻrinishlar va harakatlanuvchi detallar](topic:assembly-bom-explode)) va surish faqat ularni qamraydi, shuning uchun 90° ochiladigan menteşa 90° oraligʻida tekshiriladi.
:::

## Harakat tahlili

**Yigʻma › Harakat** bitta birikma qiymatini siz bergan vaqt davomida boshlangʻichdan oxirgacha boshqaradi (doimiy tezlik, yumshoq, sinus yoki oldinga-orqaga), har bir qadamda yigʻmani uning birikmalari va yopiq halqalari bilan joylashtiradi va qaysi detallar toʻqnashishini hamda ular qanchalik yaqinlashishini xabar qiladi. **Nuqta qoʻshish** detalning oʻrtasini yoki siz uning ustida bosgan nuqtani kuzatadi; kartochka uning oʻrnini, tezligini, tezlanishini, birikma qiymatini va vaqt boʻyicha oraligʻini chizadi. **CSV saqlash** va **Grafikni saqlash** ularni yozadi. Tezlik va tezlanish yozilgan oʻrinlardan hisoblanadi, shuning uchun qadamlar orasidagi oʻtkir choʻqqi past koʻrinadi: koʻproq qadam ishlating.

**Yurgizish** dan keyin **Yurgizishni bosqichma-bosqich koʻrish** paneli yigʻmani istalgan qadamga oʻtkazadi (vaqt, qiymat va u yerda detallar toʻqnashadimi, yonida koʻrsatiladi); birikma oʻz qiymatini saqlaydi va **Modelga qaytish** yigʻmani qaytaradi. Tahlil sozlamalari yigʻma faylida saqlanadi; natijalari **Yurgizish** bilan qayta hisoblanadi.

## Kontakt tahlili

**Yigʻma › Kontakt** detallar bir-birini bosganda yigʻma yuklarni qanday koʻtarishini koʻrsatadi. Har bir detal oʻz **Simulyatsiya** tahlilidan oʻz tayanchlarini, yuklarini va materialini olib keladi (bir detalda qoʻzgʻalmas yuz, boshqasida kuch); bu yerda siz juftliklarni tanlaysiz. **Juftlik qoʻshish**, soʻng **A tomonni tanlash** va bitta detalning yuzlarini bosing, **B tomonni tanlash** va boshqa detalning yuzlarini bosing (tanlangan yuzni bosish uni olib tashlaydi; Esc yoki Tayyor tanlashni tugatadi). Juftlik **Ishqalanishsiz** (detallar bosadi, lekin siljiydi) yoki **Bogʻlangan** (ular birga qoladi); bikrlik koeffitsienti botib kirishga qarshiligini belgilaydi (20 yaxshi boshlanish, qattiq poʻlat qatlamlar uchun 1000).

**Yechish** yukni qadamlar bilan bajaradi va kontakt kuchini, eng chuqur botishni, eng katta siljishni va eng katta kuchlanishni koʻrsatadi. Juftligi boʻlmagan detal chiqarib tashlanadi va kartochka buni aytadi. Ishqalanishsiz kontakt detalni yonga qarab ushlab turmaydi: har bir detalga oʻz Simulyatsiya tahlilida tayanch bering yoki uni bogʻlang, aks holda qadamlar yakunlanmasligi mumkin. Juftliklar va sozlamalar yigʻma faylida saqlanadi.

**CalculiX kiritishni eksport qilish** xuddi shu modelni CalculiX kiritish fayli (.inp) sifatida yozadi. CalculiX — sizning oʻrnatadigan va oʻzingiz ishga tushiradigan alohida dastur; **CalculiX natijalarini oʻqish (.frd)** keyin siljishlarni shu yigʻmaning meshi boʻyicha qaytaradi va boshqa mesh uchun yaratilgan faylni rad etadi. Bu yerdagi yechuvchi plastikni hisobga oladi, lekin portlovchi dinamikani emas, va bu yerdagi hech narsa sertifikatlangan tahlil emas: muhim narsalarni muhandis tekshirsin.
