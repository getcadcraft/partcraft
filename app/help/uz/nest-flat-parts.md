---
title: Yassi detallarni varaqlarda joylashtirish
summary: Detallarni plastinalar yoki rulonga imkon qadar kam chiqindi bilan joylashtiring; PartCraft topa oladigan eng kam chiqindi bilan, siz bergan oraliqdan kam bo‘lmasligi bilan, va joylashuvni lazer, plazma, suv oqimi yoki frezer uchun DXF sifatida saqlang.
keywords: joylashtirish, varaq, plastina, rulon, lazer, plazma, suv oqimi, frezer, kesish, unumdorlik, material sarfi, chiqindi, oraliq, kesim kengligi, tola, prokat yo‘nalishi, dxf, yassi shakl, konturlar
from: 8dcce1a6
---

**Joylashtirish** ko‘p yassi detallarni varaqqa shunday joylashtiradiki, undan iloji boricha kam material qoladi. PartCraft detallarni birma-bir joylashtiradi, har birini varaqning ishlatilgan uzunligi eng qisqa bo‘ladigan joyga qo‘yadi, bir necha tartibni sinab ko‘radi va bir necha soniyada hisoblab, eng yaxshisini saqlaydi. Detallar bir-birining teshiklariga va L yoki U harfi shaklidagi bo‘shliqqa joylasha oladi.

## Ochish

- {{ui:Eksport}} › {{ui:Varaqlarda yassi detallarni joylashtirish…}} ni tanlang. U detalning yassi shakli bilan ochiladi; yig‘mada esa har bir listli metall detalning yassi shakli bilan, nusxalar soniga teng ravishda ochiladi.
- Listli metall detalda {{ui:Yoyish}} ni, so‘ng yassi shakl ostidagi {{ui:Varaqlarga joylashtirish…}} ni tanlang.
- {{ui:DXF dan konturlar qo‘shish…}} DXF faylidagi har bir yopiq konturni detal sifatida qo‘shadi: CadCraft da DXF sifatida saqlangan chizma yoki kesish dasturingizning o‘z fayli. Boshqa kontur ichidagi kontur — unda teshik. Bir-biriga uchma-uch tutashgan chiziqlar va yoylar bitta kontur hisoblanadi. Dyuym, santimetr yoki metrdagi fayllar millimetrga aylantiriladi.

:::note
Listli metallni yoyish aniq geometriya yadrosini talab qiladi (qarang: [Listli metall](topic:sheet-metal)). DXF faylidagi konturlar doim ishlaydi.
:::

## Sozlash

Har bir detal uchun **nechta** kerakligini va uning **tolasi**ni kiriting: {{ui:Istalgan yo‘nalish}}, {{ui:Varaq bo‘ylab (chizilganidek)}} — bir yo‘nalishda ketishi kerak bo‘lgan cho‘tkalangan yoki prokatlangan list uchun, yoki {{ui:Varaq bo‘ylab ko‘ndalang}}.

**Varaqlar** bo‘limida:

- **Zaxira**: berilgan uzunlik va kenglikdagi {{ui:Plastinalar}} (va sizda nechtasi borligi; 0 = kerak bo‘lgancha), yoki berilgan kenglikdagi {{ui:Rulon}} — kerak bo‘lgancha uzunlikda.
- **Chekka chegarasi** — varaqning har bir chetida bo‘sh qoladigan joy (qisqichlar uchun yoki notekis chekka uchun).
- **Detallar orasidagi masofa** — ikki kesish chizig‘i orasidagi eng kichik masofa: kamida kesish dasturingizning kesim kengligi, plus material talab qiladigan miqdor.
- **Burilishlar**: detal buriladigan burchaklar, standart bo‘yicha har 90°. Kam burilish tezroq ishlaydi; ko‘p burilish varaqdan yaxshiroq foydalanadi.
- **Detallarni aylantirish mumkin** detalni teskari qo‘yish imkonini beradi. Listli metall uchun o‘chirib qo‘ying: aylantirilgan yassi shakl boshqa tomonga egiladi.

{{ui:Joylashtirish}} ni bosing. Oldindan ko‘rinishda har bir varaq ko‘rsatiladi; faktlarda nechta plastina (yoki rulonning qancha qismi) ishlatilgani va detallar materialning qancha qismini egallagani aytiladi. Sig‘masa, nomi bilan ko‘rsatiladi.

## Saqlash

{{ui:DXF saqlash}} joylashuvni DXF (R12, millimetrda) sifatida yozadi, varaqlar birin-ketin: varaq konturlari SHEET qatlamida, detallar PARTS da (yoylar yoy sifatida saqlanadi), har bir detal nomi LABELS da.

:::tip
Bir nechta turli detallarni aralashtirish odatda bitta detalning ko‘p nusxasiga qaraganda yaxshiroq joylashtiradi: kichik detallar katta detallar orasidagi bo‘shliqlarni to‘ldiradi.
:::

## G-kod bilan kesish

**Eksport › Joylashtirilgan varaqlar G-kodiga** joylashtirilgan DXF ni o‘qiydi (bu yoki CadCraft dagi Cabinets qo‘shimchasi varaqlari) va tanlagan post orqali har bir varaq uchun bitta dastur yaratadi: avval teshiklar va kesmalar, so‘ng konturlar; har biri asbob radiusi qadar detaldan tashqarida, varaq orqali va yana 1 mm, agar so‘rasangiz — ushlagichlar bilan. Post ro‘yxati o‘rnatilgan postlar va Ishlab chiqarish bo‘limingizning postlaridan iborat. Har bir dasturni ishga tushirishdan oldin simulyatorda tekshiring: burg‘ulash va cho‘ntaklar bajarilmaydi.

## Nimani tekshirish

PartCraft har bir joylashuvni haqiqiy shakllarda qayta tekshiradi (qidirgan setkasida emas): ikki detal oraliqdan yaqinroq emas, hech narsa chekka chegarasiga tushmaydi. U kesish rejasini tuzmaydi: kirish chiziqlari, kesish tartibi, umumiy qirralarni bir marta kesish va qolgan varaqni saqlash — kesish dasturingizning ishi. Kesishdan oldin DXF ni o‘sha yerda tekshiring.
