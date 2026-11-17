---
title: Egri chiziqlar tarmogʻi orqali sirtlar (Gordon sirti)
summary: Eskizlarda chizilgan yoki detal qirralaridan olingan profil va yoʻnaltiruvchi egri chiziqlar tarmogʻi orqali bitta silliq sirt yasash; profillar yopiq boʻlganda uni qattiq jismga yopish, nima aniq, nima moslashtirilgan va tarmoq mos kelmaganda chiqadigan xabarlar.
keywords: urinma, g1, urinmalik, urinma uzluksizligi, simmetriya tekisligi, gordon sirti, egri chiziqlar tarmogʻi, chegaraviy sirt, tarmoq sirti, profillar, yoʻnaltiruvchilar, yoʻnaltiruvchi egri chiziqlar, yoʻnaltiruvchi relslar bilan loft, qobiq, transfinite, coons, b-spline sirt, erkin shakl sirti
from: ada3cb8b
---

:::note
**Bu versiyada hali yaratilmagan.** Gordon sirti aniq geometriya yadrosini talab qiladi, PartCraft bu versiyada uni yoʻq: u har bir detalni mesh yadrosi bilan quradi. [Hali yaratilmagan narsalar](topic:not-built-yet) nima qilish kerakligini aytadi. Sahifaning qolgan qismi uni aniq yadro bilan qanday ishlashini tasvirlaydi.
:::

**Gordon sirti** — bu tarmoqning har bir egri chizigʻidan oʻtadigan bitta sirt: bir yoʻnalishda ketadigan **profillar** toʻplami va boshqa yoʻnalishda ketadigan **yoʻnaltiruvchilar** toʻplami, tarmoq iplari kabi kesishadi. Bu sizning toʻgʻridan-toʻgʻri boshqaradigan bir necha kesim egri chiziqlaridan korpus, qanot yoki dastani shakllantirish usuli. U **aniq yadro** ni talab qiladi (qarang: [Mesh yadrosi](topic:solid-kernels)).

## Tarmoqni chizish

1. **Profillarni** chizing: yonma-yon ketadigan ikki yoki undan ortiq egri chiziq, masalan parallel tekisliklardagi kesimlar. Chiziqlar, yoylar, aylanalar va splaynlarning hammasi ishlaydi, uchma-uchga ulangan egri chiziqlar zanjiri esa bitta egri chiziq hisoblanadi.
2. **Yoʻnaltiruvchilarni** chizing: profillar boʻylab kesib oʻtadigan ikki yoki undan ortiq egri chiziq. Har bir yoʻnaltiruvchi har bir profilni bir marta kesishi kerak va har bir profil har bir yoʻnaltiruvchini bir marta.
3. Egri chiziqlar haqiqatan uchrashishini taʼminlang. Yoʻnaltiruvchi eskizini shunday chizingki, uning egri chizigʻi profillar nuqtalaridan oʻtsin (proyeksiyalangan nuqtalarga tutashtiring yoki koordinatalarni kiriting). Tarmoq **Tolerantlik** gacha boʻshliqlarni qabul qiladi (boshlanishda 0.01 mm).

Bitta eskizda bir nechta egri chiziq boʻlishi mumkin: undagi har bir alohida zanjir oʻz egri chizigʻi hisoblanadi. Masalan, barcha yoʻnaltiruvchilarni yuqori tekislikdagi bitta eskizda chizishingiz mumkin.

## Sirtni yasash

1. Xususiyatlar guruhida {{ui:Koʻproq}} ni tanlang, soʻng {{ui:Gordon sirti}}.
2. PartCraft hali hech kim ishlatmagan eskizlarni oladi: birinchisiga parallel tekisliklardagilari **profillar** boʻladi, qolganlari **yoʻnaltiruvchilar**. Oʻngdagi roʻyxatni tekshiring va har bir eskizni **Profillar**, **Yoʻnaltiruvchilar** yoki **Ishlatilmaydi** ga oʻrnating.
3. Detal qirralaridan foydalanish uchun **Qirralarni profil sifatida tanlash** (yoki **yoʻnaltiruvchi sifatida**) ni bosing, koʻrinishda qirralarni bosing, soʻng Esc ni bosing.

Natija **sirt jismi** boʻladi. {{ui:Qalinlashtirish}} uni jismga aylantiradi, {{ui:Tikish}} uni boshqa sirtlarga tikadi va {{ui:Sirtni qirqish}} uni kesadi.

### Uni jismga yopish

Agar profillar yopiq egri chiziqlar boʻlsa (aylanalar, yopiq splaynlar, yopiq zanjirlar) va birinchi hamda oxirgi profil har biri tekislikda yotsa, **Jismga yopish** ni belgilang. Uchlari tekis yuzalar bilan yopiladi va yopiq shakl boshqa xususiyatlar kabi birlashadi, kesadi, kesishtiradi yoki yangi jism boʻladi. Bu yoʻnaltiruvchi egri chiziqlarni kuzatadigan loft yasashning usuli. Yopiq yoʻnaltiruvchilar bilan ham xuddi shunday ishlaydi.

## Qirra boʻylab tekislikka urinma

Gordon sirti oʻz egri chiziqlaridan oʻtadi, lekin oʻzicha u uchrashgan narsaning qiyaligiga mos kelmaydi. Uni qirradan tekislikka **urinma** (G1) holda chiqarish uchun, masalan, aks ettirish tekisligi — shunda aks ettirilgan nusxa burmasiz qoʻshiladi — yoki u oʻsadigan tekis yuza:

1. Gordon xususiyatini tanlang. **Urinma** boʻlim ostida {{ui:Tekislik qoʻshish…}} dan tekislikni tanlang (Front, Top, Right yoki yordamchi tekislik), yoki koʻrinishda tekis yuzani tanlang va {{ui:Tanlangan tekis yuzani qoʻshish}} ni bosing.
2. PartCraft tarmoqning shu tekislikda yotgan chegaraviy egri chizigʻini topadi va sirt uni tekislikka urinma holda tark etadi.

Agar tekislikda ikkita chegaraviy egri chiziq boʻlsa (ikki uchi ostidagi pol), uni ikki marta qoʻshing: har bir nusxa keyingisini oladi. Toʻrttagacha tekislik, har bir qirra uchun bittadan.

Hisobotda har bir tekislik qaysi egri chiziq boʻylab urinma qilgani va sirt oldin shu tekislikka qaysi eng dik burchak bilan uchrashgani aytiladi. Egri chiziqni allaqachon tekislikka urinma holda tark etadigan yoʻnaltiruvchilar aniq kuzatiladi. Undan koʻtarilib ketadigan yoʻnaltiruvchilar qirra yonidagi tor sohada egiladi, hisobotdagi "har bir egri chiziqni shu chegarada kuzatadi" koʻrsatkichi esa qancha ekanini aytadi: aniq moslash uchun qirradan tekis chiqadigan yoʻnaltiruvchilar chizing.

## Nima aniq va nima moslashtirilgan

Panel qaysi biri qoʻllanishini va sirt egri chiziqlaringizdan qanchalik chetga chiqishini aytadi.

- **Aniq**: har bir egri chiziq koʻphad boʻlsa (chiziqlar, splaynlar va ularning zanjirlari) va yoʻnaltiruvchilar barcha profillarni bir xil parametrlarda kesib oʻtsa, sirt aynan shu egri chiziqlarning Gordon sirti boʻladi. Bikubik sirtdan kesilgan iso egri chiziqlar tarmogʻi oʻsha sirtni qaytaradi, toʻrtta toʻgʻri chiziq esa tekis yoki buralgan (bilinear) yamoq beradi.
- **Moslashtirilgan**: yoylar, aylanalar va detal qirralari koʻphad emas, va turli parametrlarda kesishadigan egri chiziqlar kesishmalar mos kelishi uchun vaqt boʻyicha qayta sozlanishi kerak. Bu egri chiziqlar tarmoq oʻlchamining oʻn milliondan bir qismi ichida kubik B-splaynlar bilan moslashtiriladi (100 mm detal uchun taxminan 0.00001 mm). Yoylar va chiziqlardan yasalgan silindr yamogʻi haqiqiy silindrdan 0.00001 mm ichida qoladi.

Egri chiziqlar orasida sirt usul bergan narsa boʻladi: profillar kesib aralashtirilgan, yoʻnaltiruvchilar kesib aralashtirilgan, minus ularning kesishish nuqtalari aralashmasi. Egri chiziqda oʻtkir burchak boʻlgan joydan tashqari hamma joyda silliq. Ikki Gordon sirti chegaraviy egri chiziqni umumiy qilsa, ular qirra bilan qirraga tutashadi (G0), urinma emas.

## Tarmoq mos kelmasa

| Xabar | Nima qilish kerak |
|---|---|
| "… tutashmaydi: ular 0.4 mm masofada oʻtadi" | Oʻsha profil va yoʻnaltiruvchini kesishtiring yoki Tolerantlikni oshiring |
| "… 2 marta uchrashadi" | Yoʻnaltiruvchi har bir profilni faqat bir marta kesishi mumkin: aylanuvchi egri chiziqni boʻling yoki kamroq profil ishlating |
| "… tartibi boshqacha" yoki "oʻz ustiga buklanadi" | Ikki yoʻnaltiruvchi bir-birini kesadi (yoki ikki profil). Oilalar yonma-yon ketishi kerak |
| "kamida ikkita profil va ikkita yoʻnaltiruvchi" | Egri chiziq qoʻshing yoki koʻproq eskizni Profillar yoki Yoʻnaltiruvchilar ga belgilang |
| "ochiq va yopiq egri chiziqlarni aralashtirish" | Hamma profillarni ochiq yoki hammasini yopiq qiling (yoʻnaltiruvchilar uchun ham shunday) |
| "Uchi … tekis emas, shuning uchun yopib boʻlmaydi" | Birinchi va oxirgi yopiq profilni har birini bitta tekislikda chizing, yoki Jismga yopish ni oʻchirib qoʻying |

## Cheklovlar

- Har bir tarmoq uchun bitta B-spline yuza: qoʻshni sirtlarga G1 yoki G2 urinmalik yoʻq.
- Yopiq tarmoqning chogʻi, birinchi yoʻnaltiruvchida, qirra bilan qirraga ulangan, lekin urinma emas.
- Loft xususiyatining oʻzida yoʻnaltiruvchi relslar yoʻq; buning oʻrniga jismga yopilgan Gordon sirtidan foydalaning.
- Juda egri-bugri egri chiziqlar yoki bir egri chiziq boʻylab kesishmalar boshqasiga nisbatan juda notekis joylashgan boʻlsa, moslash uchun juda koʻp nuqta kerak boʻlishi mumkin; xususiyat buni aytadi.
