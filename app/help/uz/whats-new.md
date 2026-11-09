---
title: 0.8 va 0.8.1 versiyalaridagi yangiliklar
summary: PartCraft 0.8 tahrirlash vaqtida jonli tahlil, "Nima birinchi buziladi?" tekshiruvi, tashqi yechuvchi uchun fayllar bilan oqish va kontakt tadqiqotlari, yigʻmalar uchun harakat tadqiqotlari, erkin sirtlar uchun Sirtlar ish maydoni, Muhandis ish maydonida fizikadan oʻlchangan detallar, fotodan eskiz, chop etish eksporti, G-code ga joylashtirilgan varaqlar va teshiklari oʻlchamlanadigan chizmalarni qoʻshadi. 0.8.1 esa butun ekran rejimidagi kursor muzlashini tuzatadi.
keywords: yangiliklar, nima yangi, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, jonli tahlil, tahrirlash vaqtida yangilash, buzish, nima birinchi buziladi, yuklama koeffitsienti, chiziqli emas, oqish, plastik deformatsiya, kontakt, calculix, harakat tadqiqoti, klirens, sirtlar, nurbs, silliqlash, korpus, zebra, muhandis, generator, generatsiya qilingan jism, fotodan eskiz, chop etish uchun masshtab, chop etish uchun boʻlish, qisqarish, joylashtirilgan varaqlar, g-code, chizma, teshiklar oʻlchami, yordamchi, mcp, tillar, asboblar paneli qatorlari
from: 62e4dce2
---

Bu PartCraft 0.8 va 0.8.1 versiyalarida 0.7 bilan solishtirganda nima oʻzgarganini koʻrsatadi. Simulyatsiya tahrirlash vaqtida javob beradi va qaysi narsa birinchi buzilishini aytadi, yigʻmalarga harakat tadqiqotlari qoʻshiladi, yangi ish maydonlari esa erkin sirtlar va fizikadan oʻlchangan detallar yaratadi. 0.8.1 kichik tuzatish relizidir.

## Yangi

### Simulyatsiya

- **Tahrirlash vaqtida yangilash.** Yechish blokida {{ui:Update while I edit}} ni belgilang, shunda javoblar tahrirlaringizga ergashadi. Oʻlchamni, yuklamani yoki materialni oʻzgartiring — elementlari toʻrt marta katta boʻlgan tez javob darhol paydo boʻladi; taxminan bir soniya toʻxtasangiz, tadqiqotning oʻz aniqlashtirilgan javobi uni almashtiradi. Natijalar qaysi javobni koʻrayotganingizni aytadi. Poʻlat konsolda tez javob egilishda aniqlashtirilgan javobdan 1 % ichida, kuchlanishda esa taxminan 4 % ichida boʻldi. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#update-while-you-edit-live).
- **Nima birinchi buziladi.** Statik yoki buklanish tadqiqoti uchun **Buzib koʻring** blokidagi {{ui:What breaks first?}} yuklamalarni detal taslim boʻlguncha oshiradi. U eng yomondan boshlab koʻrsatadi: birinchi oqishgacha boʻlgan yuklama koeffitsienti (kuchlanish eng yuqori boʻlgan joyda qizil belgi bilan) va buklanishgacha boʻlgan yuklama koeffitsienti. 1 dan kichik koeffitsient detal yuklangan holatda allaqachon taslim boʻlishini bildiradi va Muammolarda xato koʻrsatiladi. Koeffitsientlar chiziqli tadqiqotdan olinadi, shuning uchun ular uning sifatiga teng boʻladi. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#find-out-what-breaks-first-break-it).
- **Oqish va kontakt.** Yana ikki tadqiqot turi: chiziqli boʻlmagan tadqiqot, unda material oqish kuchlanishigacha toʻgʻri chizigʻiga, soʻngra yassiroq qiyalikka ergashadi va plastik deformatsiya chiziladi; hamda kontakt tadqiqoti, unda alohida qismlar bir-birini itaradi (ishqalanishsiz) yoki yopishib qoladi (bogʻlangan). Yechilmaydigan yuklama bosqichi yoki bir-biriga juda chuqur kirib ketgan qismlar Muammolar panelida koʻrinadi. Ishqalanish, katta siljish, katta aylanish, katta egilish va charchash hisoblanmaydi. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX uchun fayllar.** {{ui:Export}} › {{ui:CalculiX fayli (.inp)}} tadqiqotni CalculiX uchun saqlaydi — bu siz oʻzingiz oʻrnatib ishga tushiradigan alohida dastur. {{ui:Export}} › {{ui:CalculiX natijalari (.frd)}} uning natija faylini xuddi shu toʻrga qaytarib oʻqiydi. PartCraft bu dasturni hech qachon ishga tushirmaydi va detal fayl saqlangandan keyin oʻzgargan boʻlsa, buni aytadi.

### Yigʻmalar

- **Harakat tadqiqotlari.** {{ui:Assembly}} › {{ui:Motion}} bitta birikmaning qiymatini siz bergan vaqt davomida boshqaradi (doimiy tezlik, yumshatilgan, sinusoidal yoki borib-qaytish), har bir bosqichda yigʻmani uning birikmalari va yopiq halqalari bilan joylashtiradi hamda qaysi qismlar toʻqnashishi va qanchalik yaqinlashishini xabar qiladi. {{ui:Add a point}} nuqtaning oʻrnini, tezligini va tezlanishini, birikma qiymatini va klirensni vaqtga qarab chizadi; {{ui:Save CSV}} va {{ui:Save plot}} ularni yozib chiqaradi. {{ui:Run}} dan keyin ishga tushirish panelidagi Bosqich tugmasi yigʻmani istalgan bosqichga olib boradi. Tadqiqot sozlamalari yigʻma faylida saqlanadi. Tezlik va tezlanish yozib olingan oʻrinlardan hisoblanadi, shuning uchun oʻtkir choʻqqi past chiqsa, koʻproq bosqich oling. Qarang: [Yigʻmani toʻqnashuv va harakat uchun tekshirish](topic:check-assembly#a-motion-study).

### Sirtlar va fizikadan olingan detallar

- **Sirtlar ish maydoni.** {{ui:Workspace}} qutisida {{ui:Surfaces}} ni tanlang — detal yonida NURBS egri chiziqlari va sirtlari uchun: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} va {{ui:Zebra}}. Uzluksizlik (G0, G1 yoki G2) aniq sirtlarda oʻlchanadi, kerakligidan yomonroq chekka esa Muammolarda {{ui:Match}} tuzatmasi bilan roʻyxatlanadi. {{ui:Fair}} korpus chiziqlarini egilish nuqtalari va egrilik sakrashlari uchun oʻlchaydi va notekis joylarini sizning chegaralaringiz ichida qayta quradi. Sirtlar detal faylida saqlanadi va detalning elementlarini oʻzgartirmaydi. Qarang: [Erkin sirtlar (NURBS)](topic:nurbs-surfaces).
- **Muhandis ish maydoni.** Ish maydoni almashtirgichida {{ui:Engineer}} ni tanlang, generatorni tanlang va {{ui:New}} ni bosing: skript detal nima qilishi kerakligidan (issiqlikni koʻchirish, oqimlar, bosim, material, chop etish jarayoni) darslik formulalari bilan oʻlchaydi va uni quradi, soʻngra ishlatilgan raqamlarni ularning manbalari, ishlab chiqarish tekshiruvlari hamda tahlil vositalari uchun fayllar bilan qaytaradi. Bir xil kiritmalar istalgan kompyuterda bir xil detal beradi. Generator detalda saqlanadi va detalni ochish hech qachon skriptni ishga tushirmaydi. Qarang: [Fizikadan detallar: generatorlar](topic:engineer-generators) va [Generator yozish](topic:write-a-generator).

### Eskiz, chizmalar va ishlab chiqarish

- **Fotodan eskiz.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} oddiy yerdagi yassi detal rasmini (kontur va teshiklar) yoki qalam chizmasini chiziqlar, yoylar va aylanalarga koʻchiradi. Siz bitta uzunlik kiritasiz, oldindan koʻrinishni tekshirasiz va eskizni yaratasiz. Qarang: [Eskiz asoslari](topic:sketch-basics#a-sketch-from-a-photo).
- **Chop etish uchun masshtab va boʻlish.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} detalni oʻzgartirmasdan oʻqlar boʻyicha masshtablaydi, masalan qisqarish zaxirasi bilan. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} stolingizga sigʻmaydigan katta detalni raqamlangan boʻlaklarga boʻladi; ular qoziqchalar, kalitlar, dumchalar, dovel teshiklari yoki magnit choʻntaklar bilan birlashtiriladi. Qarang: [3D da chop etish](topic:print-3d).
- **Joylashtirilgan varaqlar G-code ga.** {{ui:Export}} › {{ui:Nested sheets to G-code}} joylashtirilgan DXF ni oʻqiydi va tanlagan postprotsessoringiz orqali har bir varaq uchun bittadan dastur yaratadi: avval teshiklar va kesmalar, soʻngra konturlar. U kirish chiziqlarini, kesish tartibini yoki umumiy chekkalarni rejalashtirmaydi. Qarang: [Tekis detallarni varaqlarga joylashtirish](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Chizmalar oʻzi koʻproq ishlaydi.** {{ui:Sheet}} › {{ui:Automatic}} koʻrinishlarni eng katta standart masshtabda, 1:1 gacha, ushlab turadigan eng kichik A oʻlchamli varaqni tanlaydi. {{ui:Dimension the holes}} har bir teshikka markaz belgisini, har bir oʻlcham uchun bitta izohni va koʻrinishning chap pastki burchagidan joylashuvni qoʻyadi. Qarang: [Chizma yasash](topic:drawing-pdf).

### Har bir ilovada

- **Tillar.** Ilovalar 54 tilda mavjud. Ingliz tilidan tashqari tillar ona tilida soʻzlovchi uni oʻqib chiqmaguncha mashina qoralamasi hisoblanadi.
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ni tanlaydi: Oʻrash (oldingidek), 2 qator yoki 1 qator. Sigʻmaydigan panel gorizontal ravishda suriladi. PartCraft ning {{ui:Features}} lentasi eng koʻp ishlatiladigan asbobni katta koʻrsatadi va variantlarni boʻlinadigan tugma ortiga yashiradi.
- **AI yordamchingizni ulang.** Studio barcha sakkizta ilovaga oʻzingizning yordamchingizni ulash markazi boʻlib, har bir ilova uchun faqat oʻqish, taklif yoki tahrirlash ruxsatini beradi. Ulangan yordamchi bir gapdan, masalan yuklama uchun kronshteyn, detalning oʻlchamini hisoblab, ishini va har bir tekshiruvini koʻrsatgan holda uni qura oladi. U tekshirmagan narsalarni (kuchlanish konsentratsiyasi, charchash, plastiklardagi krip) xabar qiladi. Qarang: [PartCraft ni AI yordamchi bilan ishlatish](topic:use-with-ai-assistants).

## 0.8.1 da tuzatildi

- **Butun ekran rejimida kursor muzlashi.** Hover tanlovi endi tezlik bilan cheklangan. Sababi bizning eng yaxshi talqinimiz, lekin uni xabar bergan shaxs bilan tasdiqlanmagan.
- **Ishlash vaqtida til.** Studio va qadoqlangan nashrlar ishlayotganda tilni almashtirishi mumkin; avval faqat ingliz tilida edi. Bu hali barcha platformalarda sinovdan oʻtmagan: til oʻzgarmasa, bizga xabar bering.

## Bu versiyada hali yoʻq

- AI ni ulash tugallanmagan: Studio ichida bir bosishda ulanish, brauzer AI uchun xostlangan ulagich, Studio ichida oʻzingizning API kalitingiz va nashr etilgan MCP paketi va'da qilinmagan. Studioning oʻz AI yoʻq.
- Studio kod bilan imzolanmagan: Windows ogohlantirishi mumkin, macOS esa oʻng tugmani, soʻngra Ochish ni soʻraydi. Qarang: [Muammolarni bartaraf etish](topic:troubleshooting).
- Tolerans yigʻmalari hali bir yoʻnalishli: qarang [Tolerans yigʻmalari](topic:tolerance-stackup).
- Qolgani [Hali qurilmagan narsalar](topic:not-built-yet) roʻyxatida.

Oldingi oʻzgarishlar [0.7 dagi yangiliklar](topic:whats-new-0-7) da.
