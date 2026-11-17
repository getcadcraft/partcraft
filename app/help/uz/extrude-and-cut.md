---
title: Ekstruziya bilan boss yaratish va uni kesib oʻtish
summary: Eskizni Ekstruziya bilan qattiq jismga aylantiring, chuqurlikni chuqurlik boʻyicha, oʻrta tekislik, yuzagacha, ikki yoʻnalish yoki konus qilib sozlang, yoki eskizning bitta konturini oling, keyin yuzda eskiz chizib Kesish orqali choʻkma yoki oʻtkazuvchi tirqish oching.
keywords: ekstruziya, boss, ekstruziya qilingan boss, kesish, ekstruziya qilingan kesish, choʻkma, hammasini kesib oʻtish, chuqurlik boʻyicha, oʻrta tekislik, teskari, chuqurlik, kesib ekstruziya, boss ekstruziya, pad, yuzagacha, keyingi yuzagacha, uchigacha, yuzadan siljish, ikkinchi yoʻnalish, ikki yoʻnalish, ekstruziya paytida konuslash, qiyalik, kontur, mintaqa, tanlangan konturlar
from: 3b13ff10
---

{{ui:Ekstruziya}} eskizning yopiq profilini tekisligidan toʻgʻri tashqariga itaradi va material hosil qiladi. {{ui:Kesish}} xuddi shunday ishlaydi, lekin materialni olib tashlaydi. Ikkalasi ham ostida bir xil element; keyinroq birini ikkinchisiga almashtirish mumkin.

## Boss ekstruziya qilish

1. Yopiq profil chizing va eskizni yoping (qarang: [Birinchi eskizingizni chizing](topic:sketch-basics)). U tanlangan holda qoladi.
2. {{ui:Ekstruziya}} ni tanlang.

10 mm qattiq jism paydo boʻladi, "Extrude1" tarixga qoʻshiladi, eskizi uning ostida chekinib joylashadi va holat satri shunday deydi: "Extrude1 qoʻshildi. Raqamlarini oʻngdan oʻzgartiring."

**Qaysi eskiz ishlatiladi:** siz hozir yopgan eskiz yoki tarixda tanlangan eskiz. Hech narsa tanlanmagan boʻlsa, PartCraft hali hech bir element ishlatmagan eng soʻnggi eskizni oladi. Bunday eskiz boʻlmasa: "Avval eskiz yarating: tekislik tanlang, {{ui:Eskiz}}, yopiq profil chizing, {{ui:Chiqish}}."

### Chuqurlik va yoʻnalishni sozlash

Oʻng panelda:

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| **Amal** | Boss (material qoʻshish), Kesish (material olib tashlash), Kesishma (ustma-ust tushgan qismni saqlash), Yangi jism (bu versiyada hali qurilmagan: aniq yadro kerak) | Boss |
| **Tugash** | Chuqurlik boʻyicha (chuqurlik), Oʻrta tekislik (ikki tomonga), Hammasini kesib oʻtish, Yuzagacha yoki tekislikkacha, Keyingi yuzagacha, Uchigacha, Yuzadan siljish | Chuqurlik boʻyicha |
| **Chuqurlik (mm)** | Noldan katta istalgan oʻlcham (Chuqurlik boʻyicha va Oʻrta tekislik uchun koʻrsatiladi) | 10 |
| **Yoʻnalishni teskari qilish** | Eskiz tekisligining boshqa tomoniga oʻsadi (Oʻrta tekislik uchun koʻrsatilmaydi) | Oʻchiq |

Raqam kiriting va {{key:Enter}} yoki {{key:Tab}} ni bosing: detal darhol qayta quriladi. **Oʻrta tekislik** chuqurlikning yarmini eskiz tekisligining har ikki tomoniga beradi.

### Yuzagacha, keyingi yuzagacha yoki uchigacha

Bu versiyada hali qurilmagan: har bir "gacha" tugashi aniq yadroni talab qiladi, va element shunday deydi: "Yuzagacha, keyingi yuzagacha yoki uchigacha ekstruziya: hali qurilmagan (aniq yadro kerak)." Oʻlchagan Chuqurlik boʻyicha qiymatdan foydalaning. Aniq yadro bilan tugashlar shunday ishlaydi:

- **Yuzagacha yoki tekislikkacha**: **Gacha** tekis yuzni oladi (Tanlash, soʻng uni bosing) yoki tayanch tekislikni. Eskizga parallel yuza aniq chuqurlik beradi; qiya yuza tugashni qiyalikda kesadi. Agar yuza eskiz ortida boʻlsa: "… Yoʻnalishni teskari qilishni sinab koʻring."
- **Keyingi yuzagacha**: ekstruziya uchrashgan jismning birinchi tekis yuzida toʻxtaydi (egri yuzalar bu yerda qoʻllab-quvvatlanmaydi: buni u aytadi).
- **Uchigacha**: qirra uchi yaqinida bosilgan uchning yoki nuqta elementining darajasida toʻxtaydi.
- **Yuzadan siljish**: Yuzagacha ga oʻxshash, lekin undan **Siljish (mm)** masofasi qadar qisqaroq toʻxtaydi (yuzaga perpendikulyar oʻlchanadi).

### Ikki yoʻnalish, konus, bitta kontur

- **Ikkinchi yoʻnalish** (Chuqurlik boʻyicha): eskizning boshqa tomoniga ham **Ikkinchi chuqurlik (mm)** qadar ekstruziya qiladi.
- **Konuslik (°)**: yon tomonlar harakat davomida ichkariga egiladi (manfiy boʻlsa: tashqariga), draft kabi; faqat bitta yoʻnalishda. Bu versiyada hali qurilmagan (aniq yadro kerak): 0 da qoldiring.
- **Mintaqalar**: **Mintaqalarni tanlash**, soʻng ekstruziya qilinadigan konturlar ichini bosing; faqat oʻsha mintaqalar ishlatiladi (kvadrat ichidagi doira: silindr uchun doira ichini, teshikli plastina uchun ularning oraligʻini bosing). **Hammasi** barcha konturlarga qaytaradi.

Bularning pastida **Eskiz oʻlchamlari** eskizning boshqaruvchi oʻlchamlarini koʻrsatadi, shuning uchun eskizni ochmasdan profil oʻlchamlarini oʻzgartirishingiz mumkin.

:::note
**Hammasini kesib oʻtish faqat kesishlar uchun.** Boss uchun qoʻyilgan Hammasini kesib oʻtish "Hammasini kesib oʻtish faqat kesishlar uchun. Boss uchun chuqurlikdan foydalaning." xatosini beradi. Elementni Kesish dan Boss ga qaytarsangiz, Hammasini kesib oʻtish sizning uchun Chuqurlik boʻyicha ga oʻzgaradi.
:::

## Choʻkma kesish

1. Kesmoqchi boʻlgan tekis yuzni bosing. U ajralib turadi va oʻng panelda **Yuza** deyiladi.
2. {{ui:Bu yuzada eskiz}} ni tanlang (yoki asboblar panelidagi {{ui:Eskiz}}).
3. Choʻkmaning konturini chizing, masalan toʻgʻri toʻrtburchak, va oʻlchamini belgilang.
4. {{ui:Chiqish}} ni tanlang.
5. {{ui:Kesish}} ni tanlang. U **Hammasini kesib oʻtish** bilan boshlanadi: detal orqali toʻliq material olib tashlaydi.
6. Choʻkma uchun **Tugash** ni **Chuqurlik boʻyicha (chuqurlik)** ga qoʻying va **Chuqurlik (mm)** ni kiriting.

Kesish materialga kiradi, eskiz chizilgan yuzdan uzoqlashib. Agar holat satrida "Eskizning bu tomonida kesadigan hech narsa yoʻq. Boshqa yoʻnalishni sinab koʻring." deyilsa, **Yoʻnalishni teskari qilish** ni belgilang.

Choʻkma tagidagi eskiz tagga ergashadi: choʻkma chuqurligini oʻzgartirsangiz, eskiz u bilan birga siljiydi.

## Butun yuzani tortish yoki itarish

Yuzaning konturini chizish shart emas. Tekis yuzni bosing, soʻng oʻng panelda:

- {{ui:Undan ekstruziya}} yuzani tortib chiqaradi: PartCraft yuzada konturi bilan eskiz qoʻshadi (yuzadagi teshiklar teshik boʻlib qoladi) va 10 mm Ekstruziya.
- {{ui:Uning ichiga kesish}} yuzani ichkariga itaradi: xuddi shu eskiz va detalga yarmigacha kiradigan Kesish.

Ikkalasi bir qadam: {{key:Mod+Z}} eskiz va elementni birga olib tashlaydi. Yangi element tanlangan boʻladi, shuning uchun darhol raqam kiriting va chuqurligi uchun {{key:Enter}} ni bosing. Kontur qat'iy chiziqlar va yoylar sifatida nusxalanadi: u yuzaning keyingi oʻzgarishlariga ergashmaydi. Agar konturning bir qismi nusxalanmasa (erkin egri chiziq), eskiz oʻrniga nusxalangan qismi bilan ochiladi; uni tugallang, soʻng {{ui:Chiqish}} va {{ui:Ekstruziya}} yoki {{ui:Kesish}} ni tanlang.

## Orollari bor profillar

Eskizda bir nechta yopiq halqa boʻlishi mumkin. Yonma-yon halqalar alohida bosslar (yoki kesishlar) boʻladi; boshqa halqa ichidagi halqa boss orqali teshik boʻladi. Masalan, ichida ikki doira bor toʻrtburchak ikki teshikli plastina sifatida ekstruziya qilinadi.

Faqat ba'zi halqalardan foydalanish uchun ularni yuqorida aytilgan **Mintaqalar** bilan tanlang; boshqa element oʻsha eskizning boshqa halqalaridan foydalanishi mumkin.

## Keyinroq tahrirlash

- Tarixda "Extrude1" ni bosing: uning sozlamalari qaytadan chiqadi.
- Uning eskizini (ostida chekinib turgan) ikki marta bosing, eskizni oching; yopib qayta quring.
- Oʻchirish, qayta tiklash, tartibini oʻzgartirish uchun [Detalni tarix orqali oʻzgartirish](topic:edit-history) ga qarang.

## Umumiy xabarlar

| Xabar | Nima qilish kerak |
|---|---|
| "The sketch has no closed profile to extrude." | Eskizda qattiq chiziqlardan iborat yopiq halqa yoʻq. Boʻshliqlarni yoping yoki qurilish chiziqlarini {{key:Q}} bilan qaytadan almashtiring |
| "The profile is open: an end at (x, y) is not joined to anything." | Eskizni oching va oʻsha uchni keyingi chiziqqa ulang |
| "There is nothing to cut yet." | Kesish uchun kesiladigan jism kerak. Avval boss yarating |
| "Nothing is left of the part after this." | Kesish hammasini olib tashladi. Oʻlchami va yoʻnalishini tekshiring |

Yana: [Muammolarni bartaraf etish](topic:troubleshooting).
