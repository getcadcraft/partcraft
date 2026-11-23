---
title: 0.9 versiyasida yangi (oldingi)
summary: PartCraft 0.9 ga sirtlar orasidagi yumaloqlash va qattiq jismga qalinlashtirish, minglab detallardan iborat yigʻmalar, revizyalar bilan hujjatlar ombori, Solid FEM kuchlanish qoʻshimchasi, oʻnta yoy usuli, Buyuk Britaniya poʻlat oʻlchamlari, chop etish bosqichi va qatronli printer qoʻshimchalari qoʻshilgan.
keywords: yangi versiya 0.9, oldingi reliz, yangi nima, nima yangi, reliz eslatmalari, oʻzgarishlar jurnali, 0.9, sirtlar orasidagi yumaloqlash, dumaloq shar, bir nechta qirrani yumaloqlash, qalinlashtirish, sirtdan qattiq jism, STEP qobiq, IGES qattiq jism, skan yumaloqlashlari, katta yigʻma, yengil koʻrinish, 20000 detal, hujjatlar, ombor, check out, revizya, reliz, qayerda ishlatilgan, Rhino havolasi, grasshopper, 3dm, kursorlar, sex maydoni, ish navbati, solid fem, chekli elementlar, von mises, xos chastota, yoy usullari, 3 nuqtali yoy, Buyuk Britaniya poʻlat kesimlari, blue book, chop etish bosqichi, qatron, goo, ctb, stol, yoyish, 0.8, 0.8.1, versiya, yangi xususiyatlar, jonli tahlil, tahrirlayotganda yangilash, buzib koʻrish, nima birinchi buziladi, yuklama koeffitsienti, nochiziqli, oqish, plastik deformatsiya, kontakt, calculix, harakat tadqiqoti, tirqish, sirtlar, nurbs, silliqlash, qavariq, zebra, engineer, generator, generatsiyalangan jism, fotodan eskiz, chop etish uchun masshtab, chop etish uchun boʻlish, qisqarish, joylashtirilgan varaqlar, g-code, chizma, teshiklar oʻlchami, yordamchi, mcp, tillar, asboblar paneli qatorlari
from: 1dafd7c8
---

Bu PartCraft 0.9 da 0.8.1 bilan solishtirganda nima oʻzgargani. Sirtlar endi qattiq jismlarga yopiladi, minglab detallardan iborat yigʻmalar foydalanishga yaroqli boʻlib qoladi, hujjatlar ombori revizyalarni saqlaydi va Solid FEM qoʻshimchasi detalda kuchlanishni tekshiradi. Har bir band qayerdan topishni aytadi.

## 0.9.1 da yangi

- **Aniq STEP eksporti.** {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} va {{ui:STEP AP214 (aniq yaxlit jism)}} endi ishlaydi. Teshiklar, boʻrtiqlar, yumaloqlashlar, konuslar, sferalar va torlar oʻzining haqiqiy sirtlarida yoziladi, qirralar sifatida haqiqiy aylanalar bilan, shuning uchun boshqa CAD yoki CAM dasturi teshikni teshik sifatida tanlay oladi. Splayn tomonlar, modellashtirilgan rezbalar va import qilingan toʻrlar bir xil jismda yassi faset boʻlib qoladi. Qarang: [Chop etish, STEP va DXF uchun eksport](topic:export-files#for-other-cad-programs-step).
- **STEP kiradi, aniq STEP chiqadi.** Siz ochgan STEP fayli oʻzining yassi yuzlari, silindrlari, konuslari, sferalari va torlarini saqlaydi, shuning uchun {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} ularni faset oʻrniga haqiqiy sirtlar sifatida qaytaradi: boltli teshiklari bor yetkazib beruvchining balkasi kirgan yuzlar bilan chiqadi, ustiga kesgan narsangiz bilan birga. Fayldagi splayn, siljitilgan va aylantirilgan yuzlar faset boʻlib qoladi, STL, OBJ va 3MF dagi jismlar ham shunday. Oldin saqlangan detal uchun STEP faylini qayta oching. Qarang: [STEP faylini ochish va unda qurish](topic:import-step).
- **Yuz DXF da haqiqiy aylanalar.** {{ui:Eksport}} › {{ui:Eskiz yoki tekis yuzning DXF fayli}} tekis yuz tanlanganda endi dumaloq teshiklarni aylana sifatida yozadi, teshikning oʻz markazi va radiusi bilan, lazer, plazma yoki suv oqimi stoli uchun. Boshqa dumaloq qirralar hali faset.
- **Sex uchun aniq STEP.** {{ui:Ishlab chiqarish}} da {{ui:Aniq STEP (ishchi koordinatalari)}} detalni sozlashning ishchi boshlangʻich nuqtasida boshlangʻich nuqtasi va Z asbob oʻqi boʻylab boʻlgan holda yozadi, G-code ishlatadigan koordinatalar. Qarang: [Asbob yoʻllari va G-code yaratish](topic:manufacture#exact-step-for-the-shop).

## Yangi

### Sirtlar va jismlar

- **Yuzlar orasidagi yumaloqlash.** {{ui:Ish maydoni}} qutisida {{ui:Sirtlar}} ni tanlang, soʻng {{ui:Yuzlar orasidagi yumaloqlash}}. Bitta jismning ikki yuzini tanlang, radiusni kiriting ({{ui:Oxiridagi radius (mm, 0 = bir xil)}} qirra boʻylab oʻzgaradigan radius uchun). Natija qatori yumaloqlash ideal dumalovchi shardan qanchaga chetga chiqqanini aytadi, va mos kelmaydigan radius yuz nomi bilan rad etiladi. {{ui:Bir nechta qirrani yumaloqlash}} bir qadamda koʻp qirralarni yumaloqlaydi; uch qirra uchrashadigan joyda sfera burchak uchun {{ui:Burchaklar (uchtasi uchrashgan joyda sferik yama)}} ni belgilang. Qarang: [Erkin sirtlar (NURBS)](topic:nurbs-surfaces).
- **Qattiq jismga qalinlashtirish.** Xuddi shu ish maydonidagi {{ui:Qalinlashtirib qattiq jismga aylantirish}} sirtga qalinlik beradi; {{ui:Boshqa tomon}} uni boshqa tomonga oʻstiradi. Burmalash yoki oʻzini kesib oʻtish sirt va joy nomi bilan rad etiladi.
- **Sirtlardan jismlar.** Qirqilgan sirtlarni birlashtirish, ayirish va kesishish bilan ulash va bitta bekor qilish qadami sifatida detalga kiritish mumkin. STEP jismni bitta yopiq qobiq sifatida, IGES esa bitta jism sifatida yozadi; ikkalasi ham jism sifatida qayta oʻqiladi. Agar yuzlar qirra boʻyicha juftlashmasa, fayl alohida yuzlarni oladi va holat qatori buni aytadi. Jismlarni tugun muharririda ham yaratish mumkin; qarang: [Tugun muharriri](topic:nodes).
- **Skanlardagi chekka va oʻzgaruvchan yumaloqlashlar.** Sirtlarni skanerlashga moslashtirganingizda, chekka yumaloqlashlar (torlar) va ancha toʻgʻri qirra boʻylab oʻzgaruvchan radiusli yumaloqlashlar ham qidiriladi va radiusi bilan roʻyxatga kiritiladi. Bu faqat oʻylab topilgan skanlarda sinovdan oʻtgan.

### Yigʻmalar, hujjatlar va havolalar

- **Katta yigʻmalar.** Nusxa boʻlgan detallar bitta toʻrni ulashadi, va {{ui:Koʻrinishlar}} › {{ui:Yengil koʻrinish}} koʻrinish harakatlanishda davom etishi uchun qutilar chizadi (juda katta yigʻmalar uchun oʻzi yoqiladi; tanlash va birikmalar hali ham haqiqiy detallardan foydalanadi). Detal daraxti birinchi qatorlarini va qolganlari uchun {{ui:Yana 700 ta koʻrsatish}} tugmasini koʻrsatadi. Yigʻma fayllari 50 000 tagacha nusxani va 100 000 tagacha birikmani saqlashi mumkin. Qarang: [Yigʻma qurish](topic:build-assembly).
- **Hujjatlar.** **Fayl** guruhidagi {{ui:Hujjatlar…}} loyiha papkasi ustida dialog ochadi: check out va check in, revizya harflari, holatlar (ishlanmoqda, koʻrib chiqish uchun, chiqarilgan, eskirgan), tarix, qayerda ishlatilgan va materiallar roʻyxati. Qarang: [Hujjatlar va revizyalar (ombor)](topic:documents-walkthrough).
- **Jonli Rhino havolasi.** Bitta skript, `cadcraft_link.py`, Rhino yoki Grasshopper hujjatini kuzatadi va faqat oʻzgargan narsalarni PartCraft ga yuboradi, u yerda import qilingan xususiyat yangi shaklda qayta quriladi. Bu bir tomonlama va Studio talab qiladi. Qarang: [Jonli .3dm havolasi](topic:live-3dm-link).
- **Bir-birining kursorlarini koʻrish.** Umumiy seansda har bir kishining kursori uning nomi va tanlagan xususiyati bilan koʻrinadi. Qarang: [Boshqalar bilan jonli ishlash](topic:work-live).
- **Sex maydoni.** {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} da Factory floor qoʻshimchasini yoqing. {{ui:Ishlab chiqarish}} da dasturni post qilgandan keyin uning yorligʻi {{ui:Sex ish navbatiga qoʻshish}} yoki {{ui:Ish fayli sifatida saqlash}} ni bajarishi mumkin. U hech qachon stanokka yubormaydi yoki ishga tushirmaydi.

### Tahlil va detallar

- **Solid FEM qoʻshimchasi.** {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} da {{ui:Solid FEM}} ni yoqing (siz yoqmaguningizcha u oʻchiq) — oʻngdagi panelda {{ui:Solid FEM}} yorligʻi paydo boʻladi. {{ui:Detalni toʻrlash}} ni bosing, 3D koʻrinishda qoʻzgʻalmas yuzlar va yuklamalarni tanlang, {{ui:Yechish}} ni bosing va siljishni, von Mises kuchlanishini yoki xos shaklni {{ui:Modelda koʻrsatish}} bilan chizing. Qarang: [Solid FEM: kuchlanishni tekshirish](topic:solid-fem-check).
- **Eskizda yoy, oʻn usulda.** Eskiz asboblar panelidagi {{ui:Yoy}} yonidagi kichik oʻq 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length va Continue ni sanab oʻtadi. Qarang: [Yoyni oʻn usulda chizish](topic:sketch-arc-methods).
- **Buyuk Britaniya poʻlat oʻlchamlari.** Payvandlangan konstruksiyalar 976 ta Buyuk Britaniya kesimini ishlatishi mumkin (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); `305x165x40 UB` kabi oʻlcham yozing. Qarang: [Konstruktiv elementlar](topic:structural-members).

### Chop etish

- **Chop etish bosqichi.** Asboblar panelidagi {{ui:Chop etish bosqichi}} tugmasi (3D Print qoʻshimchasi, standart boʻyicha yoqilgan) detalning jismlarini shtrixli stolga qoʻyadi: {{ui:Yoyish}}, {{ui:90° aylantirish}}, {{ui:Stolga joylashtirish}}, {{ui:Hammasini stolga sigʻdirish}}, {{ui:Qatlamlarni koʻrish}}, soʻng USB orqali {{ui:3D printerga yuborish}}, Klipper (Moonraker), OctoPrint yoki PrusaLink. Tasdiqlaguningizgacha hech narsa yuborilmaydi, va detalingiz hech qachon oʻzgarmaydi. STL yoki 3MF fayl uchun qarang: [3D chop etishga tayyorlash](topic:print-3d).
- **Qatronli chop etish.** {{ui:Sozlamalar}} › {{ui:Qoʻshimchalar}} dagi qoʻshimchalar, siz yoqmaguningizcha hammasi oʻchiq: qatron slayseri, ekspozitsiya sinovi, va fayl formatlari Elegoo GOO, SL1, Chitubox CBDDLP/CTB va Anycubic. Slaysing ishchi oqimida ishlaydi, shuning uchun sahifa javob berishda davom etadi.
- **Chop etish uchun masshtab va boʻlish.** {{ui:Eksport}} › {{ui:Chop etish uchun masshtab (STL yoki 3MF)…}} har bir oʻq boʻyicha detalni oʻzgartirmasdan masshtablaydi, masalan, qisqarish ruxsati bilan. {{ui:Eksport}} › {{ui:Chop etish uchun boʻlish (boʻlaklar zip arxivi)…}} stolingiz uchun juda katta detalni raqamlangan boʻlaklarga kesadi, ular qoziqlar, shponkalar, dumlar, dowel teshiklar yoki magnit kovaklari bilan ulanadi. Qarang: [3D chop etish](topic:print-3d).
- **Joylashtirilgan varaqlar G-code ga.** {{ui:Eksport}} › {{ui:Joylashtirilgan varaqlarni G-code ga eksport qilish}} joylashtirilgan DXF ni oʻqiydi va siz tanlagan post orqali har bir varaq uchun bitta dastur yaratadi: avval teshiklar va kesmalar, soʻng konturlar. U kirish chiziqlarini, kesish tartibini yoki umumiy qirralarni rejalashtirmaydi. Qarang: [Varaqlarda yassi detallarni joylashtirish](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Oʻzi koʻproq ishlaydigan chizmalar.** {{ui:Varaq}} › {{ui:Avtomatik}} koʻrinishlarni 1:1 gacha eng katta standart masshtabda ushlaydigan eng kichik A oʻlchamdagi varaqni tanlaydi. {{ui:Teshiklarning oʻlchamini qoʻyish}} har bir teshikka markaz belgisi qoʻyadi, har bir oʻlcham uchun bitta chaqiruv va koʻrinishning chap-pastki burchagidan pozitsiyalar. Qarang: [Chizma yasash](topic:drawing-pdf).

### Har bir ilovada

- **Tillar.** Ilovalar 54 tilda. Ingliz tilidan tashqarilari ona tilida soʻzlovchi oʻqib chiqquncha mashina qoralamalari.
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} Wrap (avvalgidek), 2 qator yoki 1 qator ni tanlaydi; sigʻmaydigan panel yon tomonga aylanadi. PartCraft ning xususiyatlar lentasi eng koʻp ishlatiladigan asbobni katta koʻrsatadi va variantlarni ajratilgan tugma ortiga yashiradi.
- **Sunʼiy intellektni ulang.** Studio barcha sakkiz ilovaga oʻz yordamchingizni ulash markazi boʻlib, har bir ilovaga faqat oʻqish, taklif yoki tahrirlash ruxsati bilan. Ulangan yordamchi yuklama uchun kronshteyn kabi gapdan detal oʻlchamini hisoblab, uning ishini va har bir tekshiruvni koʻrsatib, uni qura oladi; u tekshirmagan narsalarni aytadi (kuchlanish konsentratsiyasi, charchash, plastmassada oquvchanlik). Qarang: [PartCraft ni AI yordamchisi bilan ishlatish](topic:use-with-ai-assistants).

## Tuzatilgan

- Eskizdagi Yoy menyusi endi har bir usulni sanab oʻtadi.
- Qoʻshimcha asboblar paneli va brauzer yorligʻi sarlavhasi 2026-11-09 da tuzatildi.

## Ochiq cheklovlar

- Aniq STEP OpenCascade da qayta oʻqildi (toʻgʻri jismlar, qoʻlda hisoblangan hajmlarga teng hajmlar). U hali har bir CAD yoki CAM dasturida ochilmagan, va yigʻma aniq STEP sifatida yozilmaydi.
- Haqiqiy printerda hech narsa chop etilmagan. Slaysing, G-code va qatron fayllari bizning dasturlarimiz yoki oʻrnini bosuvchi printer tomonidan qayta oʻqilgan; qatron formatlarining hech biri printerga yuklanmagan, printer oʻlchamlari va ekspozitsiyalari boshlangʻich nuqtalar.
- Solid FEM chiziqli, izotrop va elastik; har bir detal uchun bitta material, kontaktsiz, oqishsiz va buklashsiz. Qoʻzgʻalmas yuzlar va oʻtkir burchaklardagi kuchlanish toʻrga bogʻliq. Bu tekshirish yordamchisi, muhandis tomonidan koʻrib chiqilmagan.
- Katta yigʻmalar vaqti GPU siz serverdan olingan; 20 000 detalning toʻliq tafsilotli kadri u yerda hali ham soniyalar oladi.
- Yumaloqlashlar yuzlar juftligida ishlaydi; umumiy uch aralashmasi yoʻq va uchrashmaydigan yuzlar orasida yumaloqlash yoʻq.
- Rhino havolasi hech qachon haqiqiy Rhino yoki Grasshopper ichida ishlamagan. Hujjatlar bir papkada ikkita dastur bilan sinalgan, tarmoq ulashidagi ikki kishi bilan emas.
- Sirtlarni haqiqiy skanerga moslashtirish qoʻl bilan tekshirilmagan. Ingliz tilidan boshqa tillar mashina qoralamalari.
- Windows oʻrnatuvchilari kod bilan imzolanmagan, macOS disk tasviri notarizatsiyadan oʻtmagan. Qarang: [Muammolarni bartaraf etish](topic:troubleshooting).

Oldingi oʻzgarishlar: [0.7 da yangi](topic:whats-new-0-7).

## Oldingi: 0.8 va 0.8.1

PartCraft 0.8 va 0.8.1 da 0.7 bilan solishtirganda nima oʻzgargani. Simulyatsiya tahrirlash davomida javob beradi va avval nima buzilishini aytadi, yigʻmalar harakat tadqiqotlarini oladi, va yangi ish maydonlari erkin sirtlar hamda fizikadan oʻlchangan detallarni yaratadi. 0.8.1 kichik tuzatish reliz.

### Yangi

**Simulyatsiya**

- **Tahrirlayotganda yangilash.** Yechish blokida {{ui:Men tahrirlayotganda yangilash}} ni belgilang, va javoblar tahrirlaringizga ergashadi. Oʻlchamni, yuklamani yoki materialni oʻzgartiring va tezkor javob, elementlari toʻrt marta katta boʻlgan holda, darhol paydo boʻladi; taxminan bir soniya toʻxtaganingizda, tadqiqotning oʻz aniqlashtirilgan javobi uni almashtiradi. Natijalar qaysi birini koʻrayotganingizni aytadi. Poʻlat konsolda tezkor javob egilishda 1 % ichida va kuchlanishda aniqlashtirilgan javobdan taxminan 4 % ichida boʻlgan. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#update-while-you-edit-live).
- **Birinchi nima buziladi.** Statik yoki buklash tadqiqoti uchun, **Buzib koʻring** blokidagi {{ui:Nima birinchi buziladi?}} detal taslim boʻlguncha yuklamalarni masshtablaydi. U eng yomondan boshlab, birinchi oqish uchun yuklama koeffitsientini (kuchlanish eng yuqori boʻlgan joyda qizil belgi bilan) va buklash uchun yuklama koeffitsientini sanab oʻtadi. 1 dan kichik koeffitsient detal yuklangan holda allaqachon taslim boʻlishini bildiradi, va Muammolar xatoni koʻrsatadi. Koeffitsientlar chiziqli tadqiqotdan olinadi, shuning uchun ular u qanchalik yaxshi boʻlsa, shunchalik yaxshi. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#find-out-what-breaks-first-break-it).
- **Oqish va kontakt.** Yana ikki tadqiqot turi: chiziqli boʻlmagan — material oqish kuchigacha oʻz toʻgʻri chizigʻi boʻylab, soʻng tekisroq qiyalik boʻylab boradi, plastik deformatsiya chizilgan holda; va kontakt — alohida boʻlaklar bir-birini itaradi (ishqalanishsiz) yoki yopishib qoladi (mahkam). Yuklama qadami oʻrnashmasa yoki boʻlaklar bir-biriga juda chuqur botsa, Muammolar panelida koʻrinadi. Ishqalanish, katta surilish, katta aylanishlar, katta egilishlar va charchash yechilmaydi. Qarang: [Kuchlanish va egilishni tekshirish](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX uchun paketlar.** {{ui:Eksport}} › {{ui:CalculiX deck (.inp)}} tadqiqotni CalculiX uchun saqlaydi — bu siz oʻzingiz oʻrnatib ishga tushiradigan alohida dastur; {{ui:Eksport}} › {{ui:CalculiX results (.frd)}} uning natija faylini xuddi shu toʻrga qaytarib oʻqiydi. PartCraft bu dasturni hech qachon ishga tushirmaydi va paket saqlangandan keyin detal oʻzgargan boʻlsa, buni aytadi.

**Yigʻmalar**

- **Harakat tadqiqotlari.** {{ui:Yigʻma}} › {{ui:Harakat}} bitta birikmaning qiymatini siz bergan vaqt davomida boshqaradi (doimiy tezlik, yumshoq, sinus yoki oldinga-orqaga), yigʻmani har bir qadamda birikmalari va yopiq halqalari bilan joylashtiradi va qaysi detallar urilishini hamda qanchalik yaqin kelishini xabar qiladi. {{ui:Nuqta qoʻshish}} nuqtaning oʻrnini, tezligini va tezlanishini, birikma qiymatini va vaqtga qarshi tirqishni chizadi; {{ui:CSV ni saqlash}} va {{ui:Grafikni saqlash}} ularni yozib chiqaradi. {{ui:Ishga tushirish}} dan keyin, ishga tushirish panelidagi Step through qadamlar boʻylab yigʻmani istalgan qadamga siljitadi. Tadqiqot sozlamalari yigʻma faylida saqlanadi. Tezlik va tezlanish yozilgan holatlardan olinadi, shuning uchun oʻtkir choʻqqi past koʻrinsa, koʻproq qadam ishlating. Qarang: [Yigʻmani urilish va harakat uchun tekshirish](topic:check-assembly#a-motion-study).

**Sirtlar va fizikadan olingan detallar**

- **Sirtlar ish maydoni.** Detal yonida NURBS egri chiziqlar va sirtlar uchun {{ui:Ish maydoni}} qutisida {{ui:Sirtlar}} ni tanlang: {{ui:Egri chiziq}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Moslash}} va {{ui:Zebra}}, uzluksizlik (G0, G1 yoki G2) aniq sirtlarda oʻlchanadi va siz soʻragandan yomonroq qirra Muammolarda Moslash tuzatishi bilan roʻyxatga olinadi. {{ui:Silliqlash}} qavariq chiziqlarni oʻlchaydi va burilish hamda egrilik sakrashlarini topadi, va sizning tolerantligingiz doirasida notekis qismlarni qayta quradi. Sirtlar detal faylida saqlanadi va detalning xususiyatlarini oʻzgartirmaydi. Qarang: [Erkin sirtlar (NURBS)](topic:nurbs-surfaces).
- **Engineer ish maydoni.** Ish maydoni almashtirgichida {{ui:Engineer}} ni tanlang, generatorni tanlang va {{ui:Yangi}} ni bosing: skript detal qilishi kerak boʻlgan narsadan oʻlchamlarni hisoblaydi (issiqlik koʻchirish, oqimlar, bosim, material, chop etish jarayoni) darslik formulalari bilan va uni quradi, soʻng ishlatilgan raqamlarni ularning manbalari bilan, ishlab chiqarish tekshiruvlari va tahlil asboblari uchun fayllar bilan qaytaradi. Bir xil kiritish har qanday kompyuterda bir xil detalni beradi. Generator detalda saqlanadi va detalni ochish hech qachon skriptni ishga tushirmaydi. Qarang: [Fizikadan detallar: generatorlar](topic:engineer-generators) va [Generator yozish](topic:write-a-generator).

**Eskizlash, chizmalar va ishlab chiqarish**

- **Fotodan eskiz.** {{ui:Xususiyatlar}} › {{ui:Koʻproq}} › {{ui:Fotodan eskiz…}} oddiy fonda yassi detal rasmini (kontur va teshiklar) yoki qalam chizmasini chiziqlar, yoylar va aylanalarga kuzatadi. Siz bitta uzunlikni berasiz, oldindan koʻrishni tekshirasiz va eskizni yaratasiz. Qarang: [Eskizlash asoslari](topic:sketch-basics#a-sketch-from-a-photo).
- **Chop etish uchun masshtab va boʻlish.** {{ui:Eksport}} › {{ui:Chop etish uchun masshtab (STL yoki 3MF)…}} har bir oʻq boʻyicha detalni oʻzgartirmasdan masshtablaydi, masalan, qisqarish ruxsati bilan. {{ui:Eksport}} › {{ui:Chop etish uchun boʻlish (boʻlaklar zip arxivi)…}} stolingiz uchun juda katta detalni raqamlangan boʻlaklarga kesadi, ular qoziqlar, shponkalar, dumlar, dowel teshiklar yoki magnit kovaklari bilan ulanadi. Qarang: [3D chop etish](topic:print-3d).
- **Joylashtirilgan varaqlar G-code ga.** {{ui:Eksport}} › {{ui:Joylashtirilgan varaqlarni G-code ga eksport qilish}} joylashtirilgan DXF ni oʻqiydi va siz tanlagan post orqali har bir varaq uchun bitta dastur yaratadi: avval teshiklar va kesmalar, soʻng konturlar. U kirish chiziqlarini, kesish tartibini yoki umumiy qirralarni rejalashtirmaydi. Qarang: [Varaqlarda yassi detallarni joylashtirish](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Oʻzi koʻproq ishlaydigan chizmalar.** {{ui:Varaq}} › {{ui:Avtomatik}} koʻrinishlarni 1:1 gacha eng katta standart masshtabda ushlaydigan eng kichik A oʻlchamdagi varaqni tanlaydi. {{ui:Teshiklarning oʻlchamini qoʻyish}} har bir teshikka markaz belgisi qoʻyadi, har bir oʻlcham uchun bitta chaqiruv va koʻrinishning chap-pastki burchagidan pozitsiyalar. Qarang: [Chizma yasash](topic:drawing-pdf).

**Har bir ilovada**

- **Tillar.** Ilovalar 54 tilda. Ingliz tilidan tashqarilari ona tilida soʻzlovchi oʻqib chiqquncha mashina qoralamalari.
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} Wrap (avvalgidek), 2 qator yoki 1 qator ni tanlaydi; sigʻmaydigan panel yon tomonga aylanadi. PartCraft ning xususiyatlar lentasi eng koʻp ishlatiladigan asbobni katta koʻrsatadi va variantlarni ajratilgan tugma ortiga yashiradi.
- **Sunʼiy intellektni ulang.** Studio barcha sakkiz ilovaga oʻz yordamchingizni ulash markazi boʻlib, har bir ilovaga faqat oʻqish, taklif yoki tahrirlash ruxsati bilan. Ulangan yordamchi yuklama uchun kronshteyn kabi gapdan detal oʻlchamini hisoblab, uning ishini va har bir tekshiruvni koʻrsatib, uni qura oladi; u tekshirmagan narsalarni aytadi (kuchlanish konsentratsiyasi, charchash, plastmassada oquvchanlik). Qarang: [PartCraft ni AI yordamchisi bilan ishlatish](topic:use-with-ai-assistants).

### 0.8.1 da tuzatilgan

- **Butun ekran kursorining muzlashi.** Ustiga olib borish tanlovi endi tezlik bilan cheklangan. Sababi bizning eng yaxshi oʻqishimiz va xabar bergan kishi bilan tasdiqlanmagan.
- **Ishlash vaqtidagi til.** Studio va qadoqlangan nashrlar ishlayotganda tilni almashtira oladi; oldin faqat ingliz tili edi. Hamma platformada hali sinalmagan: til oʻzgarmasa, bizga xabar bering.

### Bu versiyada hali yoʻq

- Sunʼiy intellektni ulash tugallanmagan: Studio ichida bir bosishda ulash, brauzer AI uchun xostlangan ulagich, Studio ichidagi oʻz API kalitingiz va chop etilgan MCP paketi kafolatlanmagan. Studioning oʻz AI si yoʻq.
- Studio kod bilan imzolanmagan: Windows ogohlantirishi mumkin, macOS oʻng tugma va keyin Ochish soʻraydi. Qarang: [Muammolarni bartaraf etish](topic:troubleshooting).
- Toleranslar zanjirlari hali bir yoʻnalishda: qarang: [Toleranslar zanjirlari](topic:tolerance-stackup).
- Qolgani [Hali qurilmagan narsalar](topic:not-built-yet) da sanab oʻtilgan.

Oldingi oʻzgarishlar: [0.7 da yangi](topic:whats-new-0-7).
