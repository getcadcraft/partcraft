---
title: Eskiz munosabatlari va oʻlchamlari
summary: PartCraft eskizining har bir munosabati va oʻlchami, ularning har biri uchun nimani tanlash kerakligi, belgisi va yechish paytidagi xulqi.
keywords: munosabatlar, cheklovlar, ustma-ust, gorizontal, vertikal, parallel, perpendikulyar, urinma, teng, konsentrik, oʻrta nuqta, qotirish, masofa, gorizontal masofa, vertikal masofa, radius, diametr, burchak, belgilar, glif
from: 9831e7be
---

Munosabatlar geometriyaning boshqa geometriyaga nisbatan qanday joylashishini belgilaydi. Oʻlchamlar esa oʻlchamlarni belgilaydi. Munosabat qoʻshish uchun Tanlash asbobi ({{key:S}}) bilan elementlarni tanlang va oʻng paneldagi tugmasini tanlang; oʻlcham qoʻshish uchun Oʻlcham asbobidan ({{key:D}}) yoki oʻng paneldagi oʻlcham tugmalaridan foydalaning. Ular bilan qanday ishlash: [Eskizni toʻliq aniqlash](topic:relations-dimensions).

Quyida “egri chiziq” aylana yoki yoyni anglatadi. Koordinata boshi nuqta hisoblanadi.

## Munosabatlar

| Tugma | Belgi | Tanlash | Natija |
|---|---|---|---|
| {{ui:• Ustma-ust}} | • (faqat tanlanganda yoki muammo boʻlganda koʻrinadi) | Ikki nuqta | Nuqtalar uchrashadi |
| {{ui:• Ustma-ust}} | • | Nuqta va chiziq | Nuqta chiziqda (yoki uning davomida) yotadi |
| {{ui:• Ustma-ust}} | • | Nuqta va egri chiziq | Nuqta aylana yoki yoy ustida yotadi |
| {{ui:H Gorizontal}} | H | Chiziq, yoki ikki nuqta | Chiziq tekis, yoki ikki nuqta bir xil balandlikda |
| {{ui:V Vertikal}} | V | Chiziq, yoki ikki nuqta | Chiziq tik, yoki nuqtalar biri ikkinchisining ustida |
| {{ui:∥ Parallel}} | ∥ | Ikki chiziq | Chiziqlar bir xil yoʻnalishda boradi |
| {{ui:⊥ Perpendikulyar}} | ⊥ | Ikki chiziq | Chiziqlar toʻgʻri burchak hosil qilib tutashadi |
| {{ui:T Urinma}} | T | Chiziq va egri chiziq | Chiziq egri chiziqni kesmasdan tegadi |
| {{ui:T Urinma}} | T | Ikki egri chiziq | Ular chizilganidek, tashqaridan yoki ichkaridan tegadi |
| {{ui:T Urinma}} | T | Splayn va chiziq, yoy yoki splayn, uning uchlaridan biriga tutashgan | Splayn oʻsha uchdan boshqa egri chiziq yoʻnalishida chiqadi |
| {{ui:= Teng}} | = | Ikki chiziq | Bir xil uzunlik |
| {{ui:= Teng}} | = | Ikki egri chiziq | Bir xil radius |
| {{ui:◎ Konsentrik}} | ◎ | Ikki egri chiziq | Bir xil markaz |
| {{ui:◎ Konsentrik}} | ◎ | Nuqta va egri chiziq | Nuqta egri chiziq markazida turadi |
| {{ui:M Oʻrta nuqta}} | M | Nuqta va chiziq | Nuqta chiziqning oʻrtasida turadi |
| {{ui:↔ Simmetrik}} | ↔ | Ikki nuqta va chiziq | Nuqtalar chiziqqa nisbatan koʻzgu aksi (Aks ettirish buni qoʻshadi) |
| {{ui:⚓ Qotirish}} | ⚓ | Nuqta, chiziq, egri chiziq yoki splayn | Uni hozir turgan joyda aniq ushlaydi (splayn uchun: uning nuqtalari) |

Bu yerda chiziqlarga markaziy chiziqlar ham kiradi. Chizish ba’zi munosabatlarni oʻzi qoʻshadi: nuqtaga tutish uni ustma-ust qiladi, egri chiziqqa tutish nuqtani unga joylashtiradi, deyarli tekis yoki tik chiziqlar H yoki V oladi, toʻrtburchak esa toʻrtta burchagi ulangan holda keladi: ikkitasi H, ikkitasi V.

**Qotirish** biror narsaning siljishini tezda toʻxtatishning qulay yoʻli, lekin shunda detal boshqa joydagi oʻlcham oʻzgarishiga ergashmaydi. Koordinata boshiga nisbatan oʻlchamlarni afzal koʻring.

## Oʻlchamlar

| Tugma | Tanlash | Oʻlchaydi | Koʻrinishi |
|---|---|---|---|
| {{ui:Masofa}} | Chiziq | Uning uzunligi | Masofa 40 |
| {{ui:Masofa}} | Ikki nuqta | Ular orasidagi toʻgʻri masofa | Masofa 40 |
| {{ui:Masofa}} | Nuqta va chiziq | Nuqtadan chiziqqacha masofa, unga perpendikulyar | Masofa 40 |
| {{ui:Masofa}} | Ikki parallel chiziq | Ular orasidagi boʻshliq | Masofa 40 |
| {{ui:Gorizontal masofa}} | Ikki nuqta, yoki chiziq | Faqat chapdan oʻngga masofa | Gorizontal masofa 40 |
| {{ui:Vertikal masofa}} | Ikki nuqta, yoki chiziq | Faqat yuqoridan pastga masofa | Vertikal masofa 40 |
| {{ui:Radius}} | Aylana yoki yoy | Uning radiusi | Radius R10 |
| {{ui:Diametr}} | Aylana yoki yoy | Uning diametri | Diametr ⌀20 |
| {{ui:Burchak}} | Ikki parallel boʻlmagan chiziq | Ular orasidagi burchak, 0 dan 180 gradusgacha | Burchak 30° |

Oʻlchamlash asbobi bilan PartCraft nimani bosganingizga va raqamni qayerga qoʻyganingizga qarab turini tanlaydi:

| Bosasiz | Olasiz |
|---|---|
| Bitta chiziq | Uning uzunligi; qiya chiziq uchun raqam uning yuqorisida yoki pastida boʻlsa gorizontal, yon tomonida boʻlsa vertikal |
| Bitta aylana | Diametr |
| Bitta yoy | Radius |
| Ikki nuqta | Masofa; qiya chiziq kabi gorizontal yoki vertikal |
| Nuqta va chiziq | Nuqtadan chiziqqacha masofa |
| Ikki chiziq | Burchak, yoki agar ular parallel boʻlsa, masofa |
| Nuqta va aylana | Hech narsa: “Bu elementlarni birga oʻlchab boʻlmaydi.” Oʻrniga aylananing markaziy nuqtasigacha oʻlchang |

**Siljitish** (masofa sifatida koʻrsatiladi) Siljitish asbobi bilan hosil qilinadi: u nusxalangan chiziqni shu masofada parallel ushlab turadi, yoki nusxalangan yoy yoki aylanani xuddi shuncha katta yoki kichik radiusli konsentrik ushlab turadi. Bir xil siljitishning boshqa boʻlaklari **O** munosabatini oladi va bitta Siljitish oʻlchamiga ergashadi. Qarang: [Splaynlar, qirqish, siljitish va boshqa eskiz asboblari](topic:sketch-tools).

Oʻlcham qiymatlari millimetrda (yoki gradusda), hech qachon manfiy emas. Radius va diametr noldan katta boʻlishi kerak. Masofalar uchun 0 qiymatiga ruxsat beriladi: bir-biridan 0 masofada turgan ikki nuqta ustma-ust boʻladi.

## Yechish qanday ishlaydi

- **Eng kam siljish.** Qiymat oʻzgarganda yechuvchi geometriyani imkon qadar kam siljitadi. Uzunligi oʻzgaradigan chiziq, agar uning hech bir uchi ushlanmagan boʻlsa, ikki uchida teng oʻsadi.
- **Aylantirilmaydi.** Nuqtadan chiziqqacha masofalar, gorizontal va vertikal masofalar, burchaklar va urinma qaysi tomonda hosil qilinganini eslab qoladi. Qiymatni oʻzgartirish geometriyani hech qachon boshqa tomonga aylantirmaydi.
- **Ziddiyatlar hech narsani oʻzgartirmaydi.** Agar munosabatlar bir-biriga zid boʻlsa, eskiz aynan avvalgidek qoladi va ziddiyatli munosabatlar qizil boʻladi.
- **Ortiqcha munosabatlar** (boshqalardan kelib chiqadigan) holat satrida nomlanadi (“allaqachon nazarda tutilgan. Uni oʻchiring.”), xususiyat esa ogohlantirish bilan baribir quriladi.
- **Urinma tutashuvlar.** Yumaloqlash yoyi chiziqlari bilan umumiy uchi nuqtada tutashganda, urinma shunday shaklda yechiladiki, u yerda aniq aniqlangan boʻlib qoladi, shuning uchun eskiz yumaloqlashlari ortiqcha aniqlangan deb hisoblanmaydi.

## Hali mavjud emas

Bir chiziqdagi, bir aylanadagi va kesishish munosabatlari; splayn ustidagi nuqta; boshqariladigan (ma’lumot uchun) oʻlchamlar; koordinata va yoy uzunligi oʻlchamlari; oʻlchamlar orasidagi tenglamalar. Bir chiziqdagi chiziqlar uchun ∥ munosabati va 0 masofadan foydalaning.
