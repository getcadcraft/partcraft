---
title: 0.9 versiyadagi yangiliklar
summary: PartCraft 0.9 sirtlar orasini yumaloqlash va qattiq jismga aylantirishni, minglab detallardan iborat yigʻmalarni, revizilarga ega Hujjatlar omborini, Solid FEM kuchlanish qoʻshimchasini, yoyning oʻn usulini, Buyuk Britaniya poʻlat oʻlchamlarini, Chop etish bosqichi va smola bilan chop etish qoʻshimchalarini qoʻshadi.
keywords: yangiliklar, nima yangi, relizlar, oʻzgarishlar jurnali, 0.9, yuzalar orasini yumaloqlash, dumaloq shar, bir nechta qirrani yumaloqlash, qalinlashtirish, sirtlardan qattiq jismlar, step qobigʻi, iges qattiq jism, skaner yumaloqlashlari, katta yigʻma, yengil koʻrinish, 20000 detal, hujjatlar, ombor, check out, revizia, reliz, qayerda ishlatilgan, rhino havolasi, grasshopper, 3dm, kursorlar, zavod sexi, ish navbati, solid fem, chekli elementlar, von Mises, xos chastota, yoy usullari, 3 nuqtali yoy, buyuk britaniya poʻlat profillari, blue book, chop etish bosqichi, smola, goo, ctb, stol, yotqizish, varaq, 0.8, 0.8.1, versiya, yangi imkoniyatlar, jonli tahlil, tahrirlash paytida yangilash, nima buziladi, yuklama koeffitsiyenti, nochiziqli, oqish, plastik deformatsiya, kontakt, calculix, harakat tahlili, tirqish, sirtlar, nurbs, silliqlash, korpus, zebra, muhandis, generator, generatsiya qilingan jism, fotodan eskiz, chop etish uchun masshtab, chop etish uchun boʻlish, qisqarish, joylashtirilgan varaqlar, g-code, chizma, teshiklar oʻlchami, yordamchi, mcp, tillar, asboblar paneli qatorlari
from: 96d9fbfa
---

Bu PartCraft 0.9 da 0.8.1 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. Erkin shakldagi sirtlar endi yaxlit jismlarga yopiladi, minglab detallardan iborat yigʻmalar foydalanishga yaroqli boʻlib qoladi, Hujjatlar ombori revizilarni saqlaydi va Solid FEM qoʻshimchasi detaldagi kuchlanishni tekshiradi. Har bir bandda uni qayerdan topish koʻrsatilgan.

## 0.9.1 da yangi

- **Aniq STEP eksporti.** {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} va {{ui:STEP AP214 (aniq yaxlit jism)}} endi ishlaydi. Teshiklar, chiqiqlar, yumaloqlashlar, konuslar, sferalar va tor sirtlar oʻz haqiqiy sirtlarida, qirralari haqiqiy aylanalar sifatida yoziladi, shuning uchun boshqa CAD yoki CAM dasturi teshikni teshik sifatida tanlay oladi. Spline qirralari, modellashtirilgan rezbalar va import qilingan toʻrlar oʻsha yaxlit jismda tekis yoqlar boʻlib qoladi. Qarang: [Chop etish, STEP va DXF uchun eksport](topic:export-files#for-other-cad-programs-step).
- **STEP kirishi, aniq STEP chiqishi.** Siz ochgan STEP fayl oʻzining tekis yoqlarini, silindrlarini, konuslarini, sferalarini va tor sirtlarini saqlab qoladi, shuning uchun {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} ularni fasetlar oʻrniga haqiqiy sirtlar sifatida qaytadan yozadi: bolt teshiklari bor yetkazib beruvchining balkasi kirgan yoqlari bilan, unga kesilgan har qanday narsa qoʻshilgan holda chiqadi. Fayldagi spline, surilgan va aylantirilgan yoqlar fasetlar boʻlib qoladi, STL, OBJ va 3MF dagi jismlar ham shunday. Oldin saqlangan detal uchun STEP faylni qayta oching. Qarang: [STEP faylni ochish va unga qurish](topic:import-step).
- **Yuza DXF faylidagi haqiqiy aylanalar.** Tekis yuza tanlangan holda {{ui:Eksport}} › {{ui:Eskiz yoki tekis yuzning DXF fayli}} endi dumaloq teshiklarni aylana sifatida yozadi, har birida teshikning oʻz markazi va radiusi boʻladi, lazer, plazma yoki suv bilan kesish stoli uchun. Boshqa dumaloq qirralar hali ham fasetlar boʻlib qoladi.
- **Ishlab chiqarish uchun aniq STEP.** {{ui:Ishlab chiqarish}} ichida {{ui:Exact STEP (work coordinates)}} detalni, boshlangʻich nuqtasi sozlamaning ish boshlangʻich nuqtasida va Z oʻqi asbob oʻqi boʻylab boʻladigan qilib yozadi, bu G-code ishlatadigan koordinatalar. Qarang: [Asbob yoʻllari va G-code yaratish](topic:manufacture#exact-step-for-the-shop).

## Yangi

### Sirtlar va jismlar

- **Yuzalar orasini yumaloqlash.** {{ui:Ish maydoni}} katagidan {{ui:Sirtlar}} ni tanlang, soʻng {{ui:Fillet between faces}} ni. Bitta jismning ikki yuzasini tanlang, radiusni kiriting ({{ui:Radius at the end (mm, 0 = the same)}} qirra boʻylab oʻzgaradigan radius uchun). Natija qatorida yumaloqlash ideal dumaloq shardan qanchalik uzoqligi aytiladi, sigʻmaydigan radius esa yuza nomi bilan rad etiladi. {{ui:Fillet several edges}} bir qadamda koʻp qirralarni yumaloqlaydi; tekis yuzalarning uchta yumaloqlangan qirrasi uchrashadigan sferik burchak uchun {{ui:Corners (sphere patch where three meet)}} ni belgilang. Qarang: [Erkin shakldagi sirtlar (NURBS)](topic:nurbs-surfaces).
- **Qattiq jismga aylantirib qalinlashtirish.** Xuddi shu ish maydonidagi {{ui:Thicken into a solid}} sirtga qalinlik beradi; {{ui:Other side}} uni teskari tomonga kengaytiradi. Burma yoki oʻzini kesib oʻtish sirt va joy nomi bilan rad etiladi.
- **Sirtlardan qattiq jismlar.** Kesilgan sirtlarni birlashtirish, ayirish va kesishish bilan ulash mumkin, va bu detalga bitta ortga qaytarish qadami sifatida qoʻllanadi. STEP qattiq jismni yopiq bitta qobiq sifatida, IGES esa bitta qattiq jism sifatida yozadi; ikkalasi ham qattiq jism sifatida qayta oʻqiladi. Agar yuzalar qirra boʻyicha juft kelmasa, fayl alohida yuzalarga ega boʻladi va holat qatorida shu aytiladi. Qattiq jismlarni tugun muharririda ham yaratish mumkin; qarang: [Tugun muharriri](topic:nodes).
- **Skanerlardagi chekka va oʻzgaruvchan yumaloqlashlar.** Sirtlarni skanerga moslashtirganingizda, chekka yumaloqlashlar (tor sirtlar) va ancha toʻgʻri qirra boʻylab oʻzgaruvchan radiusli yumaloqlashlar ham izlanadi va ularning radiusi bilan roʻyxatlanadi. Bu faqat oʻylab topilgan skanerlarda sinovdan oʻtkazilgan.

### Yigʻmalar, hujjatlar va havolalar

- **Katta yigʻmalar.** Nusxa boʻlgan detallar bitta toʻrni ulashadi, va {{ui:Koʻrinishlar}} › {{ui:Yengil koʻrinish}} koʻrinish harakatlanishda davom etishi uchun qutilar chizadi (juda katta yigʻmalar uchun u oʻzi yoqiladi; tanlash va birikmalar hali ham haqiqiy detallardan foydalanadi). Detal daraxti birinchi qatorlarini va qolganlari uchun {{ui:Yana 700 tasini koʻrsatish}} tugmasini koʻrsatadi. Yigʻma fayllarda 50 000 tagacha nusxa va 100 000 tagacha birikma boʻlishi mumkin. Qarang: [Yigʻma yaratish](topic:build-assembly).
- **Hujjatlar.** **Fayl** guruhidagi {{ui:Hujjatlar…}} loyiha jildi ustida dialog oynasini ochadi: olish (check out) va topshirish (check in), revizia harflari, holatlar (ishda, koʻrib chiqish uchun, chiqarilgan, eskirgan), tarix, qayerda ishlatilgani va materiallar ruyxati. Qarang: [Hujjatlar va revizilar (ombor)](topic:documents-walkthrough).
- **Jonli Rhino havolasi.** Bitta skript, `cadcraft_link.py`, Rhino yoki Grasshopper hujjatini kuzatadi va faqat oʻzgargan narsalarni PartCraft ga yuboradi, u yerda import qilingan element yangi shaklda qayta quriladi. U bir tomonlama ishlaydi va Studio talab qiladi. Qarang: [Jonli .3dm havolasi](topic:live-3dm-link).
- **Bir-birining kursorlarini koʻrish.** Umumiy seansda har bir kishining kursori uning ismi va tanlagan elementi bilan koʻrinadi. Qarang: [Boshqalar bilan jonli ishlash](topic:work-live).
- **Zavod sexi.** {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} ichida Zavod sexi qoʻshimchasini yoqing. {{ui:Ishlab chiqarish}} ichida dastur joylagandan soʻng, uning yorligʻi {{ui:Zavod ish navbatiga qoʻshish}} yoki {{ui:Ish fayli sifatida saqlash}} ni bajarishi mumkin. U hech qachon mashinani yubormaydi va ishga tushirmaydi.

### Tahlil va detallar

- **Solid FEM qoʻshimchasi.** {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} ichida {{ui:Solid FEM}} ni yoqing (siz yoqmaguningizcha u oʻchiq turadi), shunda oʻng panelda {{ui:Solid FEM}} yorligʻi paydo boʻladi. {{ui:Detalni toʻrlash}} ni bosing, 3D koʻrinishda qotirilgan yoqlar va yuklamalarni tanlang, {{ui:Yechish}} ni bosing va {{ui:Modelda koʻrsatish}} orqali siljish, von Mises kuchlanishi yoki tebranish shaklini chizing. Qarang: [Solid FEM: kuchlanish tekshiruvi](topic:solid-fem-check).
- **Eskizdagi yoy, oʻn usulda.** Eskiz asboblar panelida {{ui:Yoy}} yonidagi strelka quyidagilarni koʻrsatadi: 3 nuqta boʻyicha, Boshi Markazi Oxiri, Boshi Markazi Burchagi, Boshi Markazi Uzunligi, Boshi Oxiri Burchagi, Boshi Oxiri Yoʻnalishi, Boshi Oxiri Radiusi, Markaz Boshi Oxiri, Markaz Boshi Burchagi, Markaz Boshi Uzunligi va Davom ettirish. Qarang: [Yoyni oʻn usulda chizish](topic:sketch-arc-methods).
- **Buyuk Britaniya poʻlat oʻlchamlari.** Payvandlangan konstruksiyalar 976 ta Buyuk Britaniya profilidan (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) foydalanishi mumkin; `305x165x40 UB` kabi oʻlchamni kiriting. Qarang: [Konstruktiv elementlar](topic:structural-members).

### Chop etish

- **Chop etish bosqichi.** Asboblar panelidagi {{ui:Chop etish bosqichi}} tugmasi (3D Print qoʻshimchasi, standart holatda yoqilgan) detalingizning jismlarini punktirli stolga qoʻyadi: {{ui:Yoyish}}, {{ui:90° burish}}, {{ui:Stolga joylashtirish}}, {{ui:Hammasini stolga sigʻdirish}}, {{ui:Qatlamlarni oldindan koʻrish}}, soʻng USB orqali, Klipper (Moonraker), OctoPrint yoki PrusaLink orqali {{ui:3D printerga yuborish}}. Siz tasdiqlamaguningizcha hech narsa yuborilmaydi va detalingiz hech qachon oʻzgartirilmaydi. STL yoki 3MF fayl uchun esa qarang: [Detalni 3D chop etishga tayyorlash](topic:print-3d).
- **Smola bilan chop etish.** {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} ichida qoʻshimchalar, ularni yoqmaguningizcha hammasi oʻchiq: smola slayseri, ekspozitsiya sinovi va fayl formatlari Elegoo GOO, SL1, Chitubox CBDDLP/CTB va Anycubic. Slaysing ishchi oqimda bajariladi, shuning uchun sahifa javob berishda davom etadi.

## Har bir ilovada

- Sichqoncha ustiga olib borilganda chiqadigan har bir maslahat Bootstrap tooltip boʻladi.
- Boshlangʻich maslahatda yopish tugmasi bor; u yopiq holda qoladi.
- Panelning sigʻmaydigan yorliqlar qatori kesilib qolmasdan, yon tomonga suriladi.
- Brauzer yorligʻida ochiq hujjat nomi PartCraft | CadCraft dan oldin koʻrinadi.
- {{ui:Sozlamalar}} ish maydonining {{ui:Joylashuv}} ni tanlovlar ochiladigan roʻyxati sifatida koʻrsatadi, til katagi esa versiyada mavjud boʻlgan barcha tillarni sanab oʻtadi.
- Vazn va Harorat Birliklar sozlamalaridagi birlik turlari hisoblanadi.

## Tuzatilgan

- Eskiz {{ui:Yoy}} menyusi endi barcha usullarni roʻyxatlaydi.
- Qoʻshimcha asboblar paneli va brauzer yorligʻi sarlavhasi 2026-11-09 da tuzatildi.

## Haqiqiy cheklovlar

- Aniq STEP OpenCascade da qayta oʻqildi (yaroqli qattiq jismlar, qoʻlda hisoblangan hajmlarga teng hajmlar). U hali har bir CAD yoki CAM dasturida ochilmagan, va yigʻma aniq STEP sifatida yozilmaydi.
- Haqiqiy printerda hech narsa chop etilmagan. Slaysing, G-code va smola fayllari bizning dasturlarimiz yoki oʻrnini bosuvchi printer tomonidan qayta oʻqilgan; smola formatlarining hech biri printerga yuklanmagan, printer oʻlchamlari va ekspozitsiyalar esa boshlangʻich nuqtalardir.
- Solid FEM chiziqli, izotrop va elastik; har bir detal uchun bitta material, kontakt, oqish yoki egilish (buckling) yoʻq. Qotirilgan yoqlar va oʻtkir burchaklardagi kuchlanish toʻrga bogʻliq. Bu tekshirish yordamchisi boʻlib, muhandis tomonidan koʻrib chiqilmagan.
- Katta yigʻmalar vaqtlari GPU siz serverdan olingan; 20 000 detalning toʻliq tafsilotli kadri u yerda hali ham bir necha soniya oladi.
- Yumaloqlashlar yuzalar juftligida ishlaydi; umumiy uchlarni aralashtirish yoʻq va uchrashmaydigan yuzalar orasida yumaloqlash yoʻq.
- Rhino havolasi haqiqiy Rhino yoki Grasshopper ichida hech qachon ishlamagan. Hujjatlar bir jildda ikkita dastur tomonidan sinab koʻrilgan, tarmoq ulashuvidagi ikki kishi tomonidan emas.
- Sirtlarni haqiqiy skanerga moslashtirish qoʻlda tekshiruvdan oʻtmagan. Ingliz tilidan boshqa tillar mashina qoralamalaridir.
- Windows oʻrnatuvchilari kod bilan imzolanmagan, macOS disk tasviri esa notarizatsiyadan oʻtmagan. Qarang: [Muammolarni bartaraf etish](topic:troubleshooting).

Oldingi oʻzgarishlar: [0.7 dagi yangiliklar](topic:whats-new-0-7).

## Oldinroq: 0.8 va 0.8.1

Bu PartCraft 0.8 va 0.8.1 da 0.7 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. Simulyatsiya siz tahrirlayotganingizda javob beradi va nima birinchi buzilishini aytadi, yigʻmalar harakat tadqiqotlariga ega boʻladi, yangi ish maydonlari esa erkin shakldagi sirtlar va fizikadan oʻlchamlari olingan detallarni yaratadi. 0.8.1 kichik tuzatish relizi.

### Yangi

**Simulyatsiya**

- **Tahrirlash paytida yangilash.** {{ui:Yechish}} blokidagi {{ui:Men tahrirlayotganda yangilash}} ni belgilang, javoblar tahrirlaringizni kuzatadi. Oʻlchamni, yuklamani yoki materialni oʻzgartiring — toʻrt baravar katta elementlar bilan tuzilgan tez javob darhol paydo boʻladi; taxminan bir soniya toʻxtaganingizda, tadqiqotning oʻz aniqroq javobi uning oʻrnini egallaydi. Natijalar qaysi birini koʻrayotganingizni aytadi. Poʻlat konsolda tez javob egilishda 1 % ichida va kuchlanishda aniqroq javobdan taxminan 4 % ichida boʻldi. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#update-while-you-edit-live).
- **Nima birinchi buziladi.** Statik yoki egilish tadqiqoti uchun **Buzib koʻring** blokidagi {{ui:Nima birinchi buziladi?}} yuklamalarni detal taslim boʻlguncha oshiradi. U eng yomondan boshlab roʻyxatlaydi: birinchi oqish uchun yuklama koeffitsiyenti (kuchlanish eng yuqori boʻlgan joyda qizil belgi bilan) va egilish uchun yuklama koeffitsiyenti. 1 dan kichik koeffitsiyent detal yuklangan holatda allaqachon taslim boʻlishini bildiradi va Muammolar xato koʻrsatadi. Koeffitsiyentlar chiziqli tadqiqotdan olinadi, shuning uchun ular uning sifatiga teng. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#find-out-what-breaks-first-break-it).
- **Oqish va kontakt.** Yana ikki tadqiqot turi: nochiziqli tadqiqot, unda material oqish kuchlanishigacha toʻgʻri chiziq boʻylab, soʻng yassiroq nishab boʻylab boradi va plastik deformatsiya chiziladi; kontakt tadqiqoti, unda alohida qismlar bir-birini itaradi (ishqalanishsiz) yoki mahkam turadi (bogʻlangan). Oʻrnashib ololmaydigan yuklama bosqichi yoki bir-biriga haddan tashqari botib ketadigan qismlar Muammolar panelida koʻrinadi. Ishqalanish, katta siljish, katta aylanishlar, katta egilishlar va charchash yechilmagan. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX uchun fayllar.** {{ui:Eksport}} › {{ui:CalculiX fayli (.inp)}} tadqiqotni CalculiX uchun saqlaydi, bu oʻzingiz oʻrnatib ishga tushiradigan alohida dastur; {{ui:Eksport}} › {{ui:CalculiX natijalari (.frd)}} uning natija faylini oʻsha toʻrga qayta oʻqiydi. PartCraft bu dasturni hech qachon ishga tushirmaydi va fayl saqlangandan keyin detal oʻzgargan boʻlsa, buni aytadi.

**Yigʻmalar**

- **Harakat tadqiqotlari.** {{ui:Yigʻma}} › {{ui:Harakat}} bir birikmaning qiymatini siz bergan vaqt davomida boshqaradi (doimiy tezlik, yumshatilgan, sinusoidal yoki oldinga-orqaga), yigʻmani har bir qadamda birikmalari va yopiq halqalari bilan joylashtiradi va qaysi qismlar toʻqnashishi va qanchalik yaqinlashishini xabar qiladi. {{ui:Nuqta qoʻshish}} nuqtaning oʻrnini, tezligini va tezlanishini, birikma qiymatini hamda vaqt boʻyicha tirqishni chizadi; {{ui:CSV ni saqlash}} va {{ui:Grafikni saqlash}} ularni yozib chiqaradi. {{ui:Ishga tushirish}} dan soʻng, ishga tushirish paneli orqali qadamlash yigʻmani istalgan qadamga oʻtkazadi. Tadqiqot sozlamalari yigʻma faylda saqlanadi. Tezlik va tezlanish yozib olingan oʻrinlardan olinadi, shuning uchun oʻtkir choʻqqi past koʻrinsa, koʻproq qadam ishlating. Qarang: [Yigʻmani toʻqnashuv va harakatga tekshirish](topic:check-assembly#a-motion-study).

**Sirtlar va fizikadan olingan detallar**

- **Sirtlar ish maydoni.** Detal yonidagi NURBS egri chiziqlari va sirtlari uchun {{ui:Ish maydoni}} katagidan {{ui:Sirtlar}} ni tanlang: {{ui:Egri chiziq}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Moslash}} va {{ui:Zebra}}. Uzluksizlik (G0, G1 yoki G2) aniq sirtlarda oʻlchanadi, va siz soʻraganingizdan yomonroq qirra Muammolar roʻyxatida {{ui:Moslash}} tuzatishi bilan koʻrsatiladi. {{ui:Silliqlash}} korpus chiziqlarini egilish nuqtalari va egrilik sakrashlari uchun oʻlchaydi va notekis joylarni sizning chegarangiz doirasida qayta quradi. Sirtlar detal faylida saqlanadi va detalning elementlarini oʻzgartirmaydi. Qarang: [Erkin shakldagi sirtlar (NURBS)](topic:nurbs-surfaces).
- **Muhandis ish maydoni.** Ish maydoni almashtirgichidan {{ui:Muhandis}} ni tanlang, generatorni tanlang va {{ui:Yangi}} ni bosing: skript detal qilishi kerak boʻlgan ishdan (harakatlantirish uchun issiqlik, oqimlar, bosim, material, chop etish jarayoni) kelib chiqib, darslik formulalari bilan uning oʻlchamlarini belgilaydi va uni quradi, soʻng ishlatilgan raqamlarni ularning manbalari, ishlab chiqarish tekshiruvlari va tahlil vositalari uchun fayllar bilan qaytaradi. Bir xil kiritmalar istalgan kompyuterda bir xil detalni beradi. Generator detal ichida saqlanadi, va detalni ochish hech qachon skriptni ishga tushirmaydi. Qarang: [Fizikadan olingan detallar: generatorlar](topic:engineer-generators) va [Generator yozish](topic:write-a-generator).

**Eskiz, chizmalar va yaratish**

- **Fotodan eskiz.** {{ui:Elementlar}} › {{ui:Koʻproq}} › {{ui:Fotodan eskiz…}} oddiy fon ustidagi tekis detalning rasmini (kontur va teshiklar) yoki qalam chizmasini chiziqlar, yoylar va aylanalarga koʻchiradi. Siz bitta uzunlikni kiritasiz, oldindan koʻrishni tekshirasiz va eskizni yaratasiz. Qarang: [Eskiz asoslari](topic:sketch-basics#a-sketch-from-a-photo).
- **Chop etish uchun masshtab va boʻlish.** {{ui:Eksport}} › {{ui:Chop etish uchun masshtab (STL yoki 3MF)…}} detalni oʻzgartirmasdan oʻqlar boʻyicha masshtablaydi, masalan qisqarish zaxirasi bilan. {{ui:Eksport}} › {{ui:Chop etish uchun boʻlish (boʻlaklar zip arxivi)…}} stol uchun juda katta detalni tiqinlar, kalitlar, dumchalar, dyuvel teshiklari yoki magnit uyalar bilan birlashtirilgan raqamlangan boʻlaklarga kesadi. Qarang: [3D chop etish](topic:print-3d).
- **Joylashtirilgan varaqlarni G-code ga.** {{ui:Eksport}} › {{ui:Joylashtirilgan varaqlarni G-code ga eksport qilish}} joylashtirilgan DXF ni oʻqiydi va tanlagan post-protsessor orqali har bir varaq uchun bitta dastur yaratadi: avval teshiklar va kesmalar, soʻng konturlar. Kirish chiziqlari, kesish tartibi yoki umumiy qirralarni rejalashtirmaydi. Qarang: [Tekis detallarni varaqlarga joylashtirish](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Oʻzi koʻproq ishlaydigan chizmalar.** {{ui:Varaq}} › {{ui:Avtomatik}} koʻrinishlarni 1:1 gacha boʻlgan eng katta standart masshtabda sigʻdiradigan eng kichik A oʻlchamli varaqni tanlaydi. {{ui:Teshiklarning oʻlchamini qoʻyish}} har bir teshikka markaz belgisini, har bir oʻlcham uchun bitta izohni va koʻrinishning pastki chap burchagidan pozitsiyalarni qoʻyadi. Qarang: [Chizma yaratish](topic:drawing-pdf).

**Har bir ilovada**

- **Tillar.** Ilovalar 54 tilda mavjud. Ingliz tilidan tashqari tillar ona tilida soʻzlovchi tomonidan oʻqib chiqilmaguncha mashina qoralamalari boʻladi.
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} Oʻrash (oldingidek), 2 qator yoki 1 qatorni tanlaydi; sigʻmaydigan panel yon tomonga suriladi. PartCraft ning Elementlar lentasi eng koʻp ishlatiladigan asbobni katta koʻrsatadi va variantlarni boʻlinadigan tugma ortiga yashiradi.
- **Oʻz AI ingizni ulang.** Studio sakkizta ilovaning barchasiga oʻzingizning yordamchingizni ulash markazi boʻlib, har bir ilova uchun faqat oʻqish, taklif qilish yoki tahrirlash ruxsati bilan. Ulangan yordamchi detalni, masalan yuk uchun kronshteyn kabi jumla asosida oʻlchamlashi, ishini va har bir tekshiruvni koʻrsatishi va uni qurishi mumkin; u tekshirmagan narsalarni (kuchlanish konsentratsiyasi, charchash, plastmassalarda sekin deformatsiya) xabar qiladi. Qarang: [PartCraft ni AI yordamchisi bilan ishlatish](topic:use-with-ai-assistants).

### 0.8.1 da tuzatilgan

- **Butun ekran kursorining muzlab qolishi.** Sichqoncha ustida tanlash endi cheklangan. Sababi bizning eng yaxshi taxminimiz, va uni xabar bergan shaxs bilan tasdiqlanmagan.
- **Ishlash vaqtidagi til.** Studio va yigʻilgan nashrlar ishlayotganda tilni almashtira oladi; oldin ular faqat ingliz tilida edi. Bu hali har bir platformada sinovdan oʻtmagan: til oʻzgarmasa, bizga xabar bering.

### Bu versiyada hali yoʻq

- Oʻz AI ingizni ulash tugallanmagan: Studio ichida bir bosishda ulash, brauzer AI uchun xostlangan ulagich, Studio ichida oʻz API kalitingiz va nashr etilgan MCP paketi va'da qilinmagan. Studioning oʻz AI si yoʻq.
- Studio kod bilan imzolanmagan: Windows ogohlantirishi mumkin, macOS esa oʻng tugma bosib, soʻng Ochish ni soʻraydi. Qarang: [Muammolarni bartaraf etish](topic:troubleshooting).
- Toʻplamlar hali bir yoʻnalishda: qarang: [Chidamlilik toʻplamlari](topic:tolerance-stackup).
- Qolganlari [Hali qurilmagan narsalar](topic:not-built-yet) da roʻyxatlangan.

Oldingi oʻzgarishlar: [0.7 dagi yangiliklar](topic:whats-new-0-7).
