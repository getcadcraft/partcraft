---
title: Eskiz nuqtalarida teshik va zenkerlar burish
summary: Eskizda yuzaga nuqtalar qoʻyish, har bir nuqtada oddiy, zenkerli, konusli yoki rezbali (ISO metrik) teshiklar yasash, diametr va chuqurlikni belgilash, notoʻgʻri yoʻnalishda burilgan teshiklarni tuzatish.
keywords: teshik, teshik ustasi, burgʻulash, modellashtirilgan rezba, 3D bosib chiqarish, zenker, cbore, konus, csink, rezbali teshik, rezba, metchik, M6, teshib oʻtish, koʻr teshik, bolt teshigi, nuqtalar, teshik markazlari
from: 8e1eef83
---

{{ui:Teshik}} eskizning har bir erkin nuqtasida bitta teshik burgʻulaydi. Erkin nuqta — Nuqta asbobi bilan yasalgan nuqta, chiziq uchi yoki aylana markazi emas.

## Yuzada teshiklar burgʻulash

1. Burgʻulanadigan tekis yuzani bosing, soʻng {{ui:Bu yuzada eskiz}} ni tanlang.
2. {{key:P}} ni bosing va har bir teshik joylashadigan joyni bosing. Agar ularning oʻrni muhim boʻlsa, nuqtalarni qirralardan yoki koordinata boshidan oʻlchang ([Eskizni toʻliq aniqlash](topic:relations-dimensions) ga qarang).
3. {{ui:Chiqish}} ni tanlang.
4. {{ui:Teshik}} ni tanlang.

Teshiklar detal orqali oʻtadi, diametri 6 mm. Oʻng panelda **Teshiklar** koʻrsatiladi: nechta yasalgani, "har bir eskiz nuqtasiga bittadan".

**Bitta teshik, tez:** teshik joylashadigan tekis yuzani bosing va oʻng panelda {{ui:Bu yerda teshik}} ni tanlang. PartCraft yuzada bosgan joyingizda bitta nuqtali eskiz va detal orqali teshik qoʻshadi, bir qadamda. Darhol raqam kiriting va diametri uchun {{key:Enter}} ni bosing. Aniq joylashtirish uchun yangi eskizni oching va nuqtani oʻlchang.

**Qaysi eskiz ishlatiladi:** hozir yopgan yoki tanlangan eskiz; aks holda erkin nuqtalari boʻlgan eng soʻnggi ishlatilmagan eskiz. Agar bunday boʻlmasa: "Avval teshiklar joylashadigan joyda nuqtali eskiz yasang (Yuzada eskiz, soʻng Nuqta)."

## Sozlamalar

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| **Turi** | Oddiy, Zenkerli, Konusli, Rezbali (ISO metrik) | Oddiy |
| **Diametr (mm)** | Teshik diametri | 6 |
| **Hammasini kesib oʻtish** | Belgilangan: detal orqali butunlay. Koʻr teshik uchun belgini olib tashlang | Belgilangan |
| **Chuqurlik (mm)** | "Hammasini kesib oʻtish" belgilanmaganda koʻrinadi | 10 |
| **Zenker ⌀** | Zenkerli uchun koʻrinadi: kengroq chuqurchaning diametri | 11 |
| **Zenker chuqurligi** | Zenkerli uchun koʻrinadi | 6 |
| **Teskari yoʻnalish** | Eskiz tekisligining boshqa tomoniga burgʻulaydi | Oʻchiq |

Teshiklar materialga eskiz tekisligiga perpendikulyar burgʻulanadi. Koʻr teshikning chuqurligi eskiz tekisligidan oʻlchanadi; uning tagi tekis.

## Zenkerli bolt teshigi

1. Teshiklarni yuqoridagidek yasang.
2. **Turi** ni **Zenkerli** ga oʻrnating.
3. **Diametr (mm)** ni `6.6` (M6 bolt uchun boʻshliq), **Zenker ⌀** ni `11` va **Zenker chuqurligi** ni `6.5` ga oʻrnating.

Zenker teshikdan kengroq boʻlishi kerak ("Zenker teshikdan kengroq boʻlishi kerak."), va koʻr teshik uchun undan sayozroq boʻlishi kerak ("Zenker teshikdan sayozroq boʻlishi kerak.").

## Bolt aylanasi

Markaz atrofida teng oraliqda joylashgan teshiklar uchun **bitta** teshik yasang va uni naqshga soling: Teshik xususiyatini tanlang, soʻng {{ui:Doiraviy}} ni tanlang ([Naqsh va aks ettirish xususiyatlari](topic:patterns-mirror) ga qarang). Teshik oʻlchamini oʻzgartirganingizda naqsh ham unga ergashadi.

## Teshiklar notoʻgʻri yoʻnalishda ketganda

- "Eskizning bu tomonida burgʻulash uchun hech narsa yoʻq. Yoʻnalishni teskari qilib koʻring." Eskiz materialning uzoq tomonida turibdi. **Teskari yoʻnalish** ni belgilang.
- "Teshiklar joylashadigan joyga eskiz nuqtalarini qoʻying (Nuqta asbobi), soʻng teshik yasang." Eskizda erkin nuqtalar yoʻq. Chiziq uchlari va aylana markazlari hisobga olinmaydi.
- "Hali burgʻulash uchun hech narsa yoʻq." Teshikka jism kerak. Avval boʻrtma yasang.

## Yigʻmalardagi teshiklar

Har bir teshikning oʻqi bor. Yigʻmada **Markazga joylash** teshik oʻqiga birikmani qoʻyishi mumkin, u "Hole1, hole 2" sifatida roʻyxatlanadi, shunda shtift yoki bolt detali u bilan tekislanadi. [Yigʻma yasash](topic:build-assembly) ga qarang.

## Konusli teshiklar

**Turi** ni **Konusli** ga oʻrnating, soʻng **Konus ⌀** (yuzada) va **Konus burchagi**: 90° (ISO metrik yassi kallakli vintlar uchun) yoki 82° (dyuymli vintlar uchun). Konus diametrini vint ishlab chiqaruvchisi maʼlumotlaridan oling (vint kallagi diametridan biroz katta). Konusning yuzasi panellarda "countersink" deb nomlanadi.

## Rezbali teshiklar

**Turi** ni **Rezbali (ISO metrik)** ga oʻrnating va **Rezba** ni tanlang, M2 dan M24 gacha, yirik qadam. Teshik quyidagi jadvaldagi metchik burgʻusi oʻlchamida burgʻulanadi (nominal diametr minus qadam, burgʻu qatoriga qarab, ISO 2306 6H rezba uchun koʻrsatganidek); **Diametr (mm)** maydoni ishlatilmaydi. Koʻr teshik uchun **Rezba chuqurligi (mm)** rezba qanchalik chuqur borishini belgilaydi.

| Rezba | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Qadam | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Metchik burgʻusi ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Rezba dastlab **kosmetik**: modelda burgʻulangan teshik boʻladi, koʻrinishda rezbaning katta diametri shtrixli aylanalar bilan chiziladi, chizma varaqida esa izoh sifatida chiqadi, masalan "4× M8×1.25 - 6H, teshib oʻtuvchi rezba". STEP faqat burgʻulangan teshikni eksport qiladi.

3D bosib chiqarish uchun haqiqiy spiral rezbani teshikka kesish uchun **Modellashtirilgan** ni belgilang. **Boʻshliq (mm)** uni shuncha atrofga kattalashtiradi, shunda bosib chiqarilgan bolt sigʻadi: koʻpchilik printerlar uchun 0.1 dan 0.2 mm gacha mos keladi. Izoh soʻng "(modellashtirilgan)" bilan tugaydi. Valdagi va teshiklardagi rezbalar haqida [Val va teshiklardagi rezbalar, chizilgan yoki modellashtirilgan](topic:threads) ga qarang; u valga ham rezba qoʻyadi.

:::note
Qarshi tomondan burgʻulangan teshiklar, dyuym rezbalar va quvur rezbalari hali yaratilmagan.
:::
