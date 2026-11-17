---
title: Birikmalar bilan yigʻma qurish
summary: Yigʻmani detaldan boshlang, nusxalar va boshqa detal fayllarini kiriting, ularni tekis yuzlardagi qattiq, aylanuvchi, surgichli, silindrsimon, tekis, sharsimon va pin-tirqish birikmalari bilan bogʻlang, oʻqlardagi birikmalarni markazlashtiring, detalni joyida tahrirlang va yigʻmani saqlang.
keywords: yigʻma, munosabat, munosabatlar, birikma, halqa, yopiq halqa, bogʻlanish, toʻrt boʻgʻinli, mexanizm, qattiq, aylanuvchi, surgichli, silindrsimon, tekis, shar, sharsimon, pin tirqish, tirqishdagi pin, komponent kiritish, mahkamlangan, qoʻzgʻalmas, konsentrik, ustma-ust, detalni tahrirlash, kontekstda, partcraft-asm
from: a53bbfef
---

Yigʻma detallarni birlashtiradi. PartCraft da **birikmalar** detallarni joylashtiradi: har bir birikma ikki detalning har birining tekis yuzida turadi va ularni yuzma-yuz qoʻyadi. Aylanuvchi birikma bitta detalni buraydi, surgich uni siljitadi, qattiq birikma uni mahkam ushlab turadi.

## Yigʻma boshlash

1. Qattiq jismli detal yarating (boʻsh detal yigʻmaga kira olmaydi: "Avval qattiq jism yarating, soʻng uni yigʻmaga qoʻying.").
2. Asboblar panelida {{ui:Yigʻma}} ni tanlang.

Holat satri "Yigʻma Part1 mahkamlangan detal sifatida boshlandi. Yana detallar qoʻshing ({{ui:Nusxa qoʻshish}}, {{ui:Qoʻshish}} yoki {{ui:Tahrirlash}} › {{ui:Nusxa}}), soʻng ularni {{ui:Joint}} bilan bogʻlang." deb yozadi. Chap panelda endi **Detallar** va **Birikmalar** koʻrinadi, asboblar panelida yigʻma asboblari paydo boʻladi. Eskiz va xususiyat asboblari yashirinadi.

Birinchi detal **mahkamlangan**: u hech qachon siljimaydi, qolgan hamma narsa unga nisbatan joylashtiriladi.

## Detallarni kiritish

- {{ui:Nusxa qoʻshish}} tanlangan detalning (yoki oxirgisining) yana bir nusxasini kiritadi. Nusxalar bitta detalni birgalikda ishlatadi: uni tahrirlasangiz, har bir nusxa oʻzgaradi.
- {{ui:Nusxa}} ({{key:Mod+D}}) Tahrirlash guruhida tanlangan detal uchun xuddi shunday ish qiladi. {{key:Mod+C}} va {{key:Mod+V}} detalni nusxalab, boshqalarning yoniga qoʻyadi, shu yigʻmada yoki boshqasida; {{key:Mod+Shift+V}} uni xuddi shu joyga qoʻyadi. Qarang: [Nusxalash, qoʻyish va nusxa olish](topic:copy-paste).
- {{ui:Qoʻshish}} kompyuteringizdagi `.partcraft.json` faylidan detalni kiritadi. Detal yigʻmaga nusxalanadi.

Yangi detallar hamma mavjud narsalardan 20 mm oʻngda paydo boʻladi va birikma ularni joylashtirmaguncha shu yerda qoladi. Birikmasi boʻlmagan detalni qoʻlda ham siljitish mumkin: kiritilgan qiymatlar yoki sudragan strelkalar bilan (qarang: [Detallar roʻyxati, yoyilgan koʻrinishlar va harakatlanuvchi detallar](topic:assembly-bom-explode)).

## Ikki detalni birlashtirish

1. {{ui:Joint}} ni tanlang yoki {{key:J}} ni bosing. Oʻng panelda **Yangi birikma** yoziladi.
2. Birinchi detalning tekis yuzini bosing. U yoritiladi.
3. Ikkinchi detalning tekis yuzini bosing.

Ikkinchi detal shunday siljiydiki, uning yuzi birinchisining yuziga qarab tegib turadi. Birikma **Birikmalar** ostida paydo boʻladi, masalan "Revolute1", oʻng panelda esa uning sozlamalari koʻrinadi.

- Agar ikkala yuz ham aylantirish orqali yaratilgan boʻlsa, birikma **aylanuvchi** boʻlib boshlanadi; aks holda **qattiq**. Keyin oʻzgartirishingiz mumkin.
- Egri yuzlarni tanlab boʻlmaydi: "Bu yuz egri. Tekis yuzni tanlang (teshik yoki aylantirish oʻqi atrofida burish uchun uni keyin birikmada tanlang)."
- {{key:Esc}} boshlangan birikmani bekor qiladi (yoki chapdagi roʻyxatdagi detalni bosing).

### Birikma sozlamalari

| Sozlama | Nima qiladi |
|---|---|
| **Tur** | Quyidagi jadvaldagi birikmalardan biri |
| **Burchak (°)** | Ikkinchi detalni birikma oʻqi atrofida buradi (yuzlarga perpendikulyar) |
| **Ofset (mm)** | Ikkinchi detalni oʻq boʻylab yuzdan uzoqlashtiradi (manfiy qiymatlar uni ichkariga suradi) |
| **X boʻylab**, **Y boʻylab**, **X atrofida egish**, **Y atrofida egish**, **Tirqish boʻylab**, **Tirqish yoʻnalishi** | Boshqa qiymatlar, ularni ishlatadigan birikmalar uchun koʻrsatiladi |
| **Markazlash** (har bir tomon uchun) | Birikma oʻqi yuzni qayerda kesib oʻtadi: "Yuzning oʻz koordinata boshi", aylantirish oʻqi ("Revolve1 oʻqi") yoki bitta teshik oʻqi ("Hole1, teshik 2") |

Har bir harakatlanadigan qiymat katakchasi ostida surish surgichi bor; qolganlari bir marta belgilanadi.

| Birikma | Nima harakatlanadi | Bir marta belgilanadi |
|---|---|---|
| **Qattiq** | hech narsa | Burchak, Ofset |
| **Aylanuvchi** | Burchak (menteşa) | Ofset |
| **Surgichli** | Ofset (tortma) | Burchak |
| **Silindrsimon** | Burchak va Ofset (oddiy podshipnikdagi val) | |
| **Tekis** | X boʻylab, Y boʻylab yuz ustida va Burchak (stolda suriladigan detal) | |
| **Shar** | Burchak (aylanish) va X va Y atrofida egish, birikma markazi atrofida (sharnirli birikma) | |
| **Pin tirqishda** | Tirqish boʻylab va Burchak (toʻgʻri tirqishdagi pin) | Tirqish yoʻnalishi: tirqishning yuzdagi X dan burchagi |

Yuzning X va Y lari birinchi detal yuzining X va Y lari; birikma markazi **Markazlash** bilan belgilanadi.

"Yuzning oʻz koordinata boshi" — bu detalning koordinata boshi yuzga proyeksiya qilingan nuqta boʻlib, koʻpincha detallarni tekislamoqchi boʻlgan joyingiz emas. Dumaloq detallar va pinlar uchun ikki tomonda ham **Markazlash** ni aylantirish yoki teshik oʻqiga qoʻying: oʻqlar tekislanadi, xuddi konsentrik bogʻlanish kabi.

### Misol: ikki flanetsni yuzma-yuz boltlash

1. Flanets detalini oching (aylantirish va teshiklarning aylana massivi) va {{ui:Yigʻma}} ni tanlang.
2. {{ui:Nusxa qoʻshish}} ni tanlang.
3. {{key:J}} ni bosing, birinchi flanets diskining tekis yuzini bosing (bolt teshiklari boshlanadigan yuz), soʻng ikkinchi flanetsning shu yuzini. Yuzlar aylantirish bilan yaratilgan, shuning uchun birikma aylanuvchi.
4. Ikkala tomon uchun **Markazlash** ni "Revolve1 oʻqi" ga qoʻying. Endi flanetslarning oʻqi bir.
5. **Burchak (°)** ga `22.5` yozing, bolt teshiklarini tekislash uchun, yoki surgichni suring.

## Yopiq halqalar: bogʻlanishlar

Halqada bogʻlangan detallar (toʻrt boʻgʻinli bogʻlanish, krivoship va surgich, ikki tomondan mustahkamlangan ramka) **halqa** hosil qiladi. PartCraft har bir halqani yopiladigan qilib yechadi: unga kiruvchi birikmalar halqani tutashtiradigan qiymatlarni oladi va imkon qadar kam joyini oʻzgartiradi.

- Halqadagi birikmaning qiymatini **belgilang yoki suring**: qolgan halqa unga ergashadi. Toʻrt boʻgʻinli bogʻlanish uchun krivoshipning **Burchagini** suring: shatun va chayqalgich u bilan birga harakatlanadi. Siz belgilagan qiymat saqlanadi; qolganlari undan hisoblanadi.
- Roʻyxatda hali harakatlanishi mumkin boʻlgan halqadagi birikma **koʻk** rangda: boshqa qiymatni hali belgilash mumkin. Harakatlanmaydigan halqa (mustahkamlangan ramka) qora qoladi. Yopilmaydigan halqa **qizil** boʻladi.
- **Detal** qutisi **Halqalar** ni koʻrsatadi: nechtasi yopiq va nechta qiymat hali harakatlanishi mumkin, masalan "1 ta yopiq; 1 ta qiymat hali harakatlanishi mumkin".
- {{ui:Harakat davomida toʻqnashuvlarni tekshirish}} halqadagi birikmani halqa unga ergashgan holda, qadamma-qadam tekshiradi (qarang: [Yigʻmani toʻqnashuv va harakat uchun tekshirish](topic:check-assembly)).

Yassi boʻgʻinlar tekis tayoqchalardan yigʻilgan boʻlsa, chuqurlik boʻyicha mos kelishi kerak: halqaning ikki tomonida yuzma-yuz bogʻlangan ikki detal ikki yoʻnalishda ham bir xil qatlam balandligiga ega boʻlishi kerak. Qatlam yigʻilmasa, detalni koʻtarish uchun birikmaning **Ofset** idan foydalaning, aks holda halqa yopilmaydi.

## Detallar bilan ishlash

Koʻrinishda yoki roʻyxatda detalni bosib uni tanlang. Oʻng panel uning detal nomini, nechta nusxasi borligini, hajmini, birikmalarini va u mahkamlanganmi, birikmalar bilan belgilanganmi yoki "Birikmasi yoʻq: qoʻyilgan joyida qoladi" ekanini koʻrsatadi. Tugmalar:

- {{ui:Bu detalni tahrirlash}} (yoki asboblar panelidagi {{ui:Detalni tahrirlash}}, yoki roʻyxatdagi detalni ikki marta bosing): detalni tahrirlash uchun ochadi;
- {{ui:Nusxa kiritish}};
- {{ui:Uni mahkamlangan detal qilish}};
- {{ui:Olib tashlash}}: birikmalarini ham olib tashlaydi, soʻraganidan keyin.

Yigʻmada kamida bitta detal qoladi: "Yigʻmada kamida bitta detal boʻlishi kerak. Buning oʻrniga uni yoping."

### Detalni joyida tahrirlash

1. Detalni tanlang va {{ui:Detalni tahrirlash}} ni tanlang. Detal oʻz tarixi bilan ochiladi; sarlavhada "Bracket (Bracket yigʻmasida)" yoziladi.
2. Uni xuddi har qanday detal kabi oʻzgartiring.
3. Asboblar panelidagi {{ui:Orqaga}} ni tanlang. Yigʻma yangilanadi: shu detalning har bir nusxasi oʻzgaradi va eskiz qirralaridan yasalgan yuzlardagi birikmalar ularga ergashadi.

Oʻzgarishni qaytarib keltirish yigʻmaning ortga qaytarish roʻyxatida bitta qadam boʻladi.

## Ortga qaytarish, saqlash va yopish

- Yigʻmaning oʻz ortga qaytarish roʻyxati bor: {{key:Mod+Z}} va {{key:Mod+Y}} birikmalar, kiritishlar va sozlamalar bilan ishlaydi.
- {{ui:Saqlash}} yoki {{key:Mod+S}} `<yigʻma nomi>.partcraft-asm.json` faylini yuklab oladi, ichida har bir detal bilan. Keyinroq uni {{ui:Ochish}} bilan oching.
- {{ui:Yopish}} yigʻmani yopadi va siz boshlagan detalga qaytaradi. Agar yigʻma saqlanmagan boʻlsa, soʻraydi: {{ui:Bekor qilish}}, {{ui:Yigʻmadagi oʻzgarishlarni bekor qilish}} yoki {{ui:Avval saqlash}}.
- Yigʻma nomini oʻzgartirish uchun hech narsa tanlanmagan holda boʻsh joyni bosing va oʻng paneldagi **Nomi** ni oʻzgartiring.

## Katta yigʻmalar

Yigʻmada bir necha detalning minglab nusxalari boʻlishi mumkin. Bitta detalning nusxalari birga chiziladi, siz buradigan birikma faqat ortidagi detallarni joylashtiradi, detallar roʻyxati esa birinchi qatorlarini koʻrsatadi va ularning ostida "Yana koʻrsatish" tugmasi bor (tanlangan detal har doim roʻyxatda).

- Koʻrinishni buraganda yoki kattalashtirganingizda, taxminan 300 000 dan ortiq uchburchakli yigʻma har bir detal uchun bitta qutida chiziladi, bir oz vaqtdan soʻng esa toʻliq holda chiziladi.
- {{ui:Koʻrinishlar}} › {{ui:Yengil koʻrinish}} qutilarni doim saqlab turadi. Detalni va birikmalarni tanlash hali ham haqiqiy detallardan foydalanadi.
- Qanchalik tez aylanishi grafik kartangizga ham bogʻliq. PartCraft oʻlchagan raqamlar ularni olingan qurilma bilan birga reliz eslatmalarida berilgan.

## Birikma muammolari

- Hech qanday birikma yetmaydigan detal **erkin** deb roʻyxatda koʻrsatiladi va panelda: "Bracket2 mahkamlangan detalga birikmagan, shuning uchun qoʻyilgan joyida qoladi." deyiladi.
- Yopilmaydigan halqa (uzunliklar yetmaydi, chegara birikmani toʻxtatadi, yuzlar chuqurlik boʻyicha mos kelmaydi): "Revolute3 yopilmaydigan halqa bilan bogʻlangan: u 2.000 mm ga siljigan. Halqa birikmalarining yuzlarini, ofsetlarini va chegaralarini tekshiring." Uning birikmalari qizil rangga aylanadi.
- Agar tahrirlashdan keyin birikma ishlatadigan yuz yoki oʻq yoʻqolsa: "Bu birikma ishlatadigan yuz Bracket dan yoʻqolgan." Birikmani oʻchiring va qaytadan yarating.

Keyingisi: [Yigʻmani toʻqnashuv va harakat uchun tekshirish](topic:check-assembly).
