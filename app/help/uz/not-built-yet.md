---
title: Hali qurilmagan imkoniyatlar
summary: Ushbu PartCraft versiyasi hali bajarmaydigan hamma narsa — buralgan sweeplardan dyuym ko‘rinishigacha, chizma o‘lchamlari va yig‘ma ichidagi yig‘malargacha — va hozir o‘rniga nima qilish kerakligi.
keywords: yo‘q, hali emas, cheklovlar, reja, aniq yadro, yumaloqlash, faska, qobiq, sweep, loft, STEP import, simulyatsiya, ishlab chiqarish, buralgan sweep, loft uchi tangensi, yuz yumaloqlash, tenglamalar, dyuym, chizma o‘lchamlari, yig‘ma ichidagi yig‘malar, bulut, planshet, telefon
from: 9b868162
---

PartCraft erta versiya. Bu sahifa u hali bajarmaydigan narsalarni sanab beradi, shunda siz ularni qidirmaysiz, va bugun o‘rniga nima qilish kerakligini. Bularning hech biri uchun sana belgilanmagan.

## Aniq yadro talab qilinadi

Bu versiya hamma detallarni mesh yadrosi bilan quradi (qarang: [Mesh yadrosi](topic:solid-kernels)). Quyidagi hamma narsa aniq geometriya yadrosini talab qiladi, bu versiyada hali yo‘q. Ushbu xususiyatlar bilan saqlangan detallar baribir ochiladi: xususiyatlar tarixda qoladi, "qurilmagan" deb belgilanadi va saqlashda saqlanadi.

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| {{ui:Fillet}} va {{ui:Chamfer}} dumaloq qirralarda; qirra bo‘ylab radiusi o‘zgaradigan yumaloqlashlar; uchrashgan joyida silliq aralashtirilgan yumaloqlashlar (mesh yadrosi ularni qiya kesadi) | Yumaloqlash va faska yassi yuzlar orasidagi to‘g‘ri qirralarda ishlaydi; boshqa burchaklarni ekstrudirlashdan oldin eskizda yumaloqlang ({{ui:Fillet}} eskizda, {{key:F}}) |
| {{ui:Shell}} egri yuzlarni ochish; turli qalinlikdagi devorlar | Tekis yuzlarni oching; devor qalinroq bo‘lishi kerak bo‘lgan joyda ekstrudirlash bilan material qo‘shing |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Qoralama}} egri yuzlarda; ekstrudirlashni yuzgacha, keyingi yuzgacha yoki uchigacha; konusli ekstrudirlar | Ekstrudirlash yoki aylantirish, kerak bo‘lsa bosqichlarda; o‘lchagan chuqurligigacha ekstrudirlang |
| {{ui:Qovurg‘a}}, {{ui:Asosiy flanets}}, {{ui:Qirra flanetsi}} va yassi shakllar | Plastinani yoki qovurg‘a profilini ekstrudirlang |
| Sirtlar: {{ui:Forma}} ni detalga yakunlash, {{ui:Yama}}, {{ui:Sirtni loft qilish}}, {{ui:Gordon sirti}}, {{ui:Tikish}}, {{ui:Qalinlashtirish}}, {{ui:Sirtni siljitish}}, {{ui:Sirtni cho‘zish}}, {{ui:Sirtni qirqish}} | Mavjud emas |
| Bir nechta jism: {{ui:Birlashtirish}}, {{ui:Jismni ko‘chirish}}, {{ui:Jismni masshtablash}}, {{ui:Yo‘l massivi}}, yangi jism yaratadigan xususiyatlar | Bitta qattiq jism; massivlar va aks ettirish nusxa xususiyatlari |
| Eskizlar, tekisliklar, o‘qlar va nuqtalar faqat aniq yadro topa oladigan yuzlarda (yumaloqlash bilan yasalgan yuz, teshik devori, import qilingan qattiq jismning yuzi) | Asosiy tekisliklarda, referens tekisliklarda va ekstrudirlash va aylantirishning tekis yuzlarida eskiz chizing |
| Generativ dizayn natijasini detal sifatida ochish yoki unga qo‘shish (u import qilingan qattiq jismga aylanadi) | Natijani STL yoki STEP sifatida yuklab oling |
| Ochilgan STEP fayl egri yuzlarini aniq sirt sifatida tahrirlash; spline, buralgan va aylantirilgan yuzlarning aniq STEP i (STEP fayldan); spline tomonlar; modellashtirilgan rezba; STL / OBJ / 3MF jismlar va yig‘malar; boshqa detal modelyorlari uchun STEP | {{ui:Ochish}} STEP ni uchburchaklar sifatida o‘qiydi va fayldagi tekis yuzlar, silindrlar, konuslar, sferalar va torlarni eksport uchun saqlaydi ([STEP faylini ochish](topic:import-step)); {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} har bir analitik yuzni aniq yozadi va ularni faset sifatida saqlaydi ([Eksport](topic:export-files#for-other-cad-programs-step)); boshqa detal modelyori uchun makros hali ham yozadi |
| Chizma ko‘rinishlarida haqiqiy yoylar | Ko‘rinishlar va kesim ko‘rinishlari faset bo‘yicha chiziladi |
| Aniq hajmlar, maydonlar va masofalar | {{ui:Measure}} faset qattiq jismning raqamlarini beradi, dumaloq detallarda biroz past; aniqroq **Egri chiziqlar** sozlamasi ularni yaqinlashtiradi |

Quyidagi jadvallarning ba’zi qatorlari bu xususiyatlardan birini nimanidir boshqacha hal qilish usuli sifatida taklif qiladi. Bu takliflar aniq yadro qaytgandan keyin amal qiladi.

## Xususiyatlar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Yuz yumaloqlashlari, to‘liq yumaloqlashlar, qirra bo‘ylab nuqtalarda belgilangan radiusli yumaloqlashlar | Doimiy yoki chiziqli o‘zgaruvchan {{ui:Fillet}}; bir nechta yumaloqlash xususiyatlari |
| Turli devor qalinliklari bilan qobiqlar | Bitta {{ui:Shell}} qalinligi; devor qalinroq bo‘lishi kerak bo‘lgan joyda ekstrudirlash bilan material qo‘shing |
| Erkin shakldagi (spline) yuzlarda qiyalik | {{ui:Qoralama}} tekis, silindrik va konus yuzlarda ishlaydi |
| Buralgan sweeplar, yupqa devorli va sirt sweeplari; Loft xususiyatida uchdagi tangens; bitta yo‘naltiruvchi relsli loft; spline yo‘llari | Belgilangan yo‘nalishli yoki uchi masshtabli {{ui:Sweep}}; ikki yoki undan ko‘p yo‘naltiruvchi relsli loft: qarang: [Sweep, loft va qoralama](topic:sweep-loft-draft) |
| Yoylardan yoki splinelardan qovurg‘alar; eskizga kvadrat o‘sgan qovurg‘alar (yuqoridan ko‘rinishdan); qovurg‘alarda qiyalik; bitta eskizdan bir nechta qovurg‘a | {{ui:Qovurg‘a}} qovurg‘aning o‘z tekisligidagi bitta zanjir chiziqdan: qarang: [Qovurg‘alar va gussetlar](topic:rib) |
| "Gacha" egri sirtgacha; egri yuzda to‘xtaydigan "keyingi yuzgacha" | Tekis yuzgacha yoki referens tekislikkacha |
| Qarama-qarshi teshiklar, dyuym va quvur rezbalari, konusli rezbalar, rezba oxiri va faskalangan rezba boshlanishi | Kichik chuqurlik bilan kengaytirilgan teshik; ISO metrik va trapetsiya rezbalar, bezak yoki modellashtirilgan: qarang: [Val va teshiklardagi rezbalar](topic:threads) |
| Yupqa xususiyatli ekstrudirlar | Profilning ikkala devorini chizing |
| Naqsh nusxalari bittadan o‘tkazib yuborilgan, to‘ldirish naqshlari | Alohida xususiyatlardan foydalaning; egri chiziq bo‘ylab naqshlar: {{ui:Yo‘l massivi}} |
| Nusxa naqshlari, aks ettirishlar, yumaloqlashlar, faskalar, qobiqlar va import qilingan qattiq jismlarni nusxalash | Ular asoslangan eskiz yoki xususiyatni nusxalang yoki uni naqshlang |
| Forma yuqori nuqtalarida aniq (G1) tangens; forma yamalarini kattaroq yuzlarga birlashtirish | Forma Darajasini oshiring: taxminiy yamalar kichrayadi; qarang: [Forma bilan erkin shakllar](topic:form-surfaces) |
| Bitta xususiyatda bir nechta alohida yopiq bo‘laklardan iborat forma; formalar orasidagi ko‘priklar | Har bir Forma xususiyatida bitta yopiq bo‘lak; ularni {{ui:Ulash}} bilan ulang |
| Ko‘rinishda sirt jismlarini tanlash (trim va yama nuqtalaridan tashqari); sirt yumaloqlashlari; untrim; G2 yamalar; egri qo‘shnilarga tangens Gordon sirtlari (tekisliklar va tekis yuzlarga tangens qurilgan) | Xususiyat panelidagi ro‘yxatdan nomi bo‘yicha tanlang; avval {{ui:Qalinlashtirish}}, so‘ng qattiq jismni yumaloqlang |
| Tarixdagi jismlar ro‘yxati; yashirin jismlarni eksportdan chiqarib tashlash | Detal panelidagi jismlar ro‘yxatida jismlarni qayta nomlang va yashiring; jismni chiqarish uchun uni yaratgan xususiyatni o‘chiring yoki bostiring |
| Silindr va konuslarni analitik saqlaydigan notekis masshtab; ofset sirtlarning notekis masshtabi | {{ui:Jismni masshtablash}} egri yuzlarni yopiq B-splinelarga aylantiradi (0,0000004 mm aniqlikda); bir tekis masshtab aniq qoladi |
| Sirt jismlarini birlashtirish; Minkowski yig‘indilari | Avval {{ui:Tikish}} yoki {{ui:Qalinlashtirish}}, so‘ng {{ui:Birlashtirish}} |
| Tolerantlik tahlili: burchaklarni buradigan stek-aplar (2D va 3D vektor halqalari), geometriyadan hisoblangan sezgirliklar, boshqa taqsimotli Monte Carlo, eskizdagi o‘lchamlardagi o‘lcham tolerantliklari, material holatidan bonus tolerantlik | Yig‘madagi {{ui:Toleranslar zanjiri}}: bitta yo‘nalish, eng yomon holat va RSS, tolerantliklar qo‘lda kiritiladi, sarlavha blokining umumiy toleranslaridan yoki GD&T ramkalaridan: qarang: [Tolerantlik zanjirlari](topic:tolerance-stackup) |
| Joylashtirish: kesish tartibi va kirish chiziqlari, umumiy qirralarni bir marta kesish, birga saqlanishi kerak bo‘lgan detallar; rulon qoldiqlari, loyihalar orasida umumiy zaxira | {{ui:Varaqlarda yassi detallarni joylashtirish…}} oraliq, chekka chegaralari, burilishlar va tola bilan: qarang: [Yassi detallarni varaqlarda joylashtirish](topic:nest-flat-parts); qolgan plastinalar saqlanadi va avval ishlatiladi: qarang: [Qoldiqlarni saqlash va qayta ishlatish](topic:nest-offcuts); kesish rejasini kesish dasturingizda tuzing |
| Listli metall: bukilgan qirralar, pog‘onalar, miter va kontur flanetslar; egri qirralardagi flanetslar yoki egilgan asosiy flanets yuzlarida; eskizdagi bukilmalar; burchak yopilmalari; shakllantiruvchi asboblar; qattiq jismni listli metallga aylantirish; kesmalari bor egilgan asosiy flanetsning yassi shakli; bukish jadvallari | {{ui:Asosiy flanets}} (plastina yoki egilgan profil), plastinaning to‘g‘ri qirralarida {{ui:Qirra flanetsi}} bukish bo‘shatishlari bilan, va K-faktorli yassi shakl: qarang: [Listli metall](topic:sheet-metal) |
| Yig‘malarda qoralama tahlili; ajratish chizig‘ini topish; devor qalinligi tahlili | Loyihalash ish maydonida detaldagi {{ui:Qoralama tahlili}}: qarang: [Qolip va quyish uchun qoralamani tekshirish](topic:draft-analysis); yig‘madagi har bir detalni tekshirish uchun uni oching |

## Eskizlar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Ellipslar, urinma yoylar, konik kesimlar, daraja yoki og‘irliklari belgilangan splinelar (NURBS) | Splinelar (kubik), yoylar va aylanalar Urinma bog‘lanishlari bilan |
| Splinedagi nuqta (bog‘lanish), egrilik (G2) bog‘lanishlari | Spline o‘zining nuqtasini o‘tishi kerak bo‘lgan joyga qo‘ying |
| Keyingi o‘zgarishlarni kuzatadigan splinelar ofset nusxalari; o‘tkir spline burchakli zanjirlarning ofseti | O‘zgarishdan keyin yana ofset qiling; avval burchakni yumaloqlang |
| Asl nusxaga bog‘langan naqsh nusxalari; egri chiziq bo‘ylab naqshlar | O‘zgarishdan keyin yana naqshlang |
| Erkin shakl yoki qiyshiq aylana qirralarni proeksiyalash; detal bilan o‘zgaradigan proeksiyalangan geometriya | To‘g‘ri va parallel aylana qirralarni proeksiyalang, so‘ng o‘lchamlang |
| Haydovchi (referens) o‘lchamlar | O‘lchamlarni panel yoki detal faktlaridan o‘qing |
| Kollinear bog‘lanishlar | 0 masofali parallel |
| Boshqa dasturga joylash (tizim buferi) | DXF, STEP, STL yoki 3MF eksport qiling |
| Yoylarni, nisbiy yoki qutb koordinatalarini yozish | Chiziqlar va aylanalarni yozing; yoylarni Yoy asbobi bilan chizing |
| Ko‘rsatkichsiz geometriyani tanlash | Bosish yoki teginish kerak |

## Parametrlar va birliklar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Materiallarni o‘zgartiruvchi konfiguratsiyalar; xususiyatlarni o‘chiradigan CSV dizayn jadvali | Konfiguratsiyalar parametrlarni o‘rnatadi va xususiyatlarni yoqadi/o‘chiradi: qarang: [Konfiguratsiyalar va dizayn jadvallari](topic:design-tables); `partcraft variants` saqlangan konfiguratsiyalarni nomi bo‘yicha quradi, o‘chirilgan xususiyatlar bilan: qarang: [Konfiguratsiyalaringizdan variant paketi yarating](topic:variant-pack) |
| Eng yangi xususiyatlarning o‘z panellaridagi tenglamalar (tekislik, sweep, qoralama va shunga o‘xshash) | Ularni skriptda yoki `partcraft set` bilan yozing ([Skriptlar va buyruq satri](topic:scripts-and-cli)) |
| Dyuymdagi detal | O‘lchamlar millimetrda ko‘rsatiladi; raqam maydoniga yoki ifodaga `2in` yozing, u 50.8 bo‘ladi |

## Fayllar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Import qilingan STEP qattiq jismning o‘z xususiyatlarini tahrirlash (tarixsiz keladi) | O‘z xususiyatlaringiz bilan material qo‘shing yoki kesing |
| STEP dan ranglar, nomlar, yig‘ma tuzilmasi va PMI ni o‘qish | Mavjud emas |
| glTF, OBJ, IGES, Parasolid eksporti; 3D detalning DWG si (faqat variant paketi DWG yozadi: chizma varaqi) | Meshlar uchun STL yoki 3MF; qattiq jismlar uchun STEP; 2D uchun DXF |
| Boshqa dasturlarning o‘z fayllarini ochish (`.3dm` fayllar bitta jism sifatida ochiladi: [.3dm modelini qattiq jism sifatida ochish](topic:open-3dm-files)) | STEP yoki yopiq STL, OBJ yoki 3MF meshini so‘rang: [STL, OBJ yoki 3MF ni ochish](topic:open-meshes) |
| Eksport qilingan STEP dagi yig‘ma tuzilmasi (detal nomlari bilan daraxt) | Yig‘ma STEP joylashgan qattiq jismlarning bitta kompaundi |
| Brauzer yuklab olishisiz o‘zingiz tanlagan jildga saqlash | Brauzerning yuklab olish sozlamalarida "saqlash joyini so‘rash"ni yoqing |

## Chizmalar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Uchta umumiy o‘lcham chegarasidan tashqari o‘lchamlar (teshik o‘lchamlari, joylashuvi, o‘lchamlardagi tolerantliklar) | PDF ni belgilang yoki DXF eksport qilib 2D CAD dasturida o‘lchang |
| Bittadan ko‘p kesim yoki detal; tekislangan, uzilgan va yordamchi ko‘rinishlar | Bir chizmada bitta kesim va bitta detal |
| Varaqda erkin matn, izohlar va jadvallar (sarlavha va revizion bloklardan tashqari) | Yakuniy pardozlash izohi yoki PDF ga qo‘shilgan matn |
| Birinchi burchakli proyeksiya, harakatlanuvchi ko‘rinishlar, portret varaqlar | Uchinchi burchak, avtomatik joylashuv, A4–A0 va ANSI A–E gorizontal varaqlar |
| Jonli kesim ko‘rinishi: bir vaqtning o‘zida bir nechta tekislik yoki kesim qutisi, kesim atrofidagi kontur, kesimni faylda saqlash | Bir tekislik bir vaqtda {{ui:Ko‘rinishlar}} › {{ui:Kesim ko‘rinishi}} dan; qarang: [Kesim ko‘rinishi bilan ichkariga qarash](topic:section-view) |
| Yig‘ma chizmalari: ko‘proq ko‘rinishlar, siljitiladigan o‘lchamlar yoki ballonlar | Avtomatik ballonlar va detallar ro‘yxati bilan bitta izometrik (yoki yoyilgan) ko‘rinish |
| GD&T va pardoz belgilarini nusxalash va joylashtirish | Har birini Datum, Frame yoki Finish bilan joylashtiring |
| Qo‘llanmalar: Illustrate ning {{ui:Boshqa fayldan…}} dagi STEP fayllar, ModelCraft yoki BimCraft dan to‘g‘ridan-to‘g‘ri uzatilgan model, path tracer sifatidagi rasmlar, PDF ichidagi interaktiv 3D | STEP ni Loyihalash da oching va {{ui:Ochiq detaldan}} qo‘llanmani boshlang; modelni glTF (.glb) sifatida saqlang; 3D ko‘rinishning PNG rasmlari; interaktiv 3D fayl: qarang: [Illustrate da qo‘llanma boshlash](topic:illustrate) |

## Yig‘malar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Gear, rack, cam va vint bog‘lanishlari; konus bilan chegaralangan sharsimon bog‘lanish; egri yuzlardagi yoki nuqtalar orasidagi bog‘lanishlar | Qattiq, aylanuvchi, slayder, silindrik, tekis, sharsimon va pin-in-slot bog‘lanishlari tekis yuzlarda, har bir qiymat o‘z chegaralari bilan: qarang: [Yig‘ma yasash](topic:build-assembly) |
| Detallarni buradigan yoyilish bosqichlari va bog‘lanishlar joylashtiradigan detallarni sudrash | To‘g‘ri yoyilish bosqichlari; detalni qo‘lda siljitish uchun bog‘lanishni o‘chiring |
| Yig‘ma ichidagi yig‘malar | Faqat bir daraja detal |
| Tishli g‘ildiraklar, kulachoklar, kontakt | Mavjud emas |

## Ishlab chiqarish

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| 3D qo‘pol ishlov berish egri yuzlarda, 3D adaptiv tozalash, qoldiq ishlov; suv chizig‘i, qalam, radial va spiral pardozlash; adaptiv yo‘llar yoylar sifatida | 2,5 o‘q yuz, cho‘ntak, 2D adaptiv, kontur, burg‘u va faska: qarang: [Asbob yo‘llari va G-kod yarating](topic:manufacture); butun model uchun Parallel va Scallop pardozlash: qarang: [3D pardozlash](topic:finish-3d) |
| 4 va 5 o‘qli asbob yo‘llari, tokarlik, zondlash | Bir tomonni bir vaqtda sozlang, Sozlash yorlig‘ida asbob o‘qi bilan |
| Ushlagich va dastaning to‘qnashuvini tekshirish | Tishlar uzunligi ogohlantirishlarini kuzating va boshqaruvingizning simulyatorida tekshiring |
| Zondlash, asbob muddati va kichik dastur sikllari; post ichidagi 4- va 5-o‘q hamda tokarlik kodlari; boshqa dasturlarning post fayllarini yuklash | Postni PartCraft ning o‘z formatida yozing yoki o‘zgartiring: qarang: [Tahrir qilinadigan post protsessorlari](topic:post-processors) |
| Dyuymli G-kod (G20) | Faqat millimetr (G21) |

## Simulyatsiya va generativ dizayn

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Chiziqsiz tadqiqotlar: oqish, katta egilishlar, detallar orasidagi kontakt, charchash | Chiziqli statik va tabiiy chastotalar: qarang: [Kuchlanish va egilishni tekshirish](topic:simulation); xavfsizlik koeffitsientini 1 dan ancha katta saqlang |
| Chiziqsiz buklanish (nomukammalliklar, buklanishdan keyin, snap-through) | Yetarli zaxira bilan chiziqli buklanish yuk koeffitsientlari: qarang: [Issiqlik, termik kuchlanish va buklanish](topic:thermal-and-buckling) |
| Yuzlar orasidagi nurlanish (ko‘rinish omillari), kontakt qarshiligi, haroratga bog‘liq materiallar, termik kuchlanishdagi inersiya (termik zarba to‘lqinlari) | Atrofga nurlanish, vaqt bo‘yicha barqaror yoki kvazi-statik termik kuchlanish, doimiy xususiyatlar: qarang: [Issiqlik, termik kuchlanish va buklanish](topic:thermal-and-buckling) |
| O‘tkinchi issiqlik va termik yuklamali tadqiqotlar uchun avtomatik tozalash; xato kichik bo‘lganda meshni kattalashtirish; mahalliy miqdorga maqsad (bir joydagi eng yuqori kuchlanish) | **Avtomatik tozalash** statik, buklanish, tabiiy chastota va barqaror issiqlik tadqiqotlari uchun, butun detaldagi xato bo‘yicha: qarang: [Kuchlanish va egilishni tekshirish](topic:simulation); aks holda element o‘lchamini kamaytiring |
| Bearing va bolt yuklari, masofaviy kuchlar, momentlar, prujinalar, belgilangan siljishlar | Yuzlardagi kuchlar va bosimlar, gravitatsiya; mahkamlangan va ishqalanishsiz yuzlar |
| Yig‘malarni simulyatsiya qilish; yo‘nalishga qarab farq qiladigan materiallar (bosma qatlamlar, kompozitlar) | Bitta detal, bitta izotrop material |
| Tetraedrik tadqiqotlar, issiqlik uzatish va generativ dizayn uchun bir nechta yechuvchi oqimlari; sahifa krossorigin izolyatsiya qilinmagan bo‘lsa, istalgan oqim | Voksel tadqiqotlari, buklanish, vaqt bo‘yicha kuchlanish va laminar oqim sahifa ruxsat bergan joyda oqimlardan foydalanadi: qarang: [PartCraft sozlamalari](topic:settings) |
| Turbulent oqim loyiha aniqligi bilan (Spalart–Allmaras modeli eksperimental sifatida mavjud: quvur ishqalanishi 30 dan 34 % gacha yuqori, orqaga qadam qayta tegishi 21 dan 39 % gacha qisqa; rejalashtirilgan: devorlar yaqinida nozikroq katakchalar), oqimda issiqlik, vaqtga bog‘liq (vaqt aniq) oqim, erkin sirtlar, Nyuton bo‘lmagan suyuqliklar, aylanuvchi detallar | Laminar, barqaror, izotermik Nyuton suyuqligi oqimi yoki sifat naqshlari uchun eksperimental turbulent model: qarang: [Suyuqlik oqimini simulyatsiya qilish](topic:flow-simulation); Reynolds soni laminardan oshsa, panel ogohlantiradi |
| Generativ dizaynda kuchlanish chegaralari va ishlab chiqarish qoidalari (osilishlar, frezalash yo‘nalishlari); bitta shaklda bir nechta material | Hajm uchun eng qattiq shakl; natijani Simulyatsiya da tekshiring: qarang: [Yuklamalardan shakl o‘stiring](topic:generative-design) |
| Natija tahrirlanadigan (silliq, parametrik) qattiq jism sifatida | STL, faset STEP yoki natija import qilingan faset qattiq jism sifatida bo‘lgan detal |
| Elektr mashinasi loyihasi: statorda aylanadigan rotor, burchakka qarshi moment, to‘yingan po‘lat, egilish nuqtasidan keyin kuchini yo‘qotadigan magnitlar, Fuko toklari va temir hamda mis yo‘qotishlari; 3-D yoki egri meshlarda magnit maydonlari | Analiz kutubxonasidagi setkada chiziqli 2-D magnitostatika: g‘altaklar, temir, meros chizig‘idagi doimiy magnitlar, bo‘shliqlar, induktivlik va tortish: qarang: [2-D magnit maydonlari](topic:magnetic-fields-2d) |

## Skriptlar

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Skript muharririda hover yordami, breakpointlar va qadamma-qadam | Topish, buklash va to‘ldirish mavjud (qarang: [Skriptlar yozish va ishga tushirish](topic:craftscript)); qolganlari uchun o‘z muharriringiz: Skriptlar guruhidagi {{ui:Saqlash}} va {{ui:Ochish}} skriptlarni ichkariga va tashqariga olib chiqadi; o‘rnatilgan funksiyalar ro‘yxati: [CraftScript tili](topic:craftscript-language) |
| Breakpointlar va skript bo‘ylab qadamlash | Yo‘l davomida `disp` va `fprintf`; {{key:Mod+Enter}} bir vaqtda bir nechta tanlangan qatorni ishga tushiradi |
| Skript ko‘rsatadigan grafiklar va jadvallar Loyihalash ish maydonida chiziladi; skriptlar detalning parametrlarini o‘zgartiradi | Ular Skript ish maydonida ko‘rsatiladi; skriptlar `param` bilan parametrlarni o‘qiydi (qarang: [Skriptlar yozish va ishga tushirish](topic:craftscript)), ularni {{ui:Parametrlar}} yorlig‘ida o‘zgartiradi |
| Grafiklar bilan yonma-yon rasmlar va jadvallar; saqlashdan oldin grafikni tahrirlash (zoom, o‘q chegaralari) | Yonma-yon grafiklar ko‘rsatiladi; grafikni PNG, SVG yoki CSV sifatida saqlang va boshqa joyda tugating |
| numpy va boshqa Python paketlari; Python oflayn; muharrirda Python ni buklash; Pascal Script | Python ning standart kutubxonasi, CraftScript va Lua: qarang: [Python da skriptlar](topic:craftscript-python) |
| Lua funksiyalarini o‘rnatilgan funksiyalarga uzatish; skript ishlayotganda qurilgan nom bilan Lua dan kutubxona funksiyasini chaqirish | Kutubxona funksiyasining nomini skriptga yozing (`cs.static_tet(…)`) yoki uni CraftScript skriptidan chaqiring |

## Ilova

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Bulutda saqlash, ulashish va versiyalar tarixi | Hali mavjud emas. Fayllarni kompyuteringizga saqlang va versiyalarni nom bo‘yicha saqlang |
| PartCraft iPad va iPhone da o‘rnatilgan ilova sifatida | Qurilmaning brauzerida PartCraft dan foydalaning; Android va kompyuterda u CadCraft Studio da ham ishlaydi (getcadcraft.com/download) |
| Kontekst (o‘ng tugma) menyulari | Asboblar paneli va o‘ng panel |
| Yangi holatdan to‘liq oflaynda ishlash | Faqat ilova oflayn foydalanish uchun saqlangan bo‘lsa: qarang: [Oflaynda ishlash](common:offline) |

Eng ko‘p nimani sog‘inayotganingizni sayt yordam sahifasi orqali yuboring: bu keyingi rejalarni belgilaydi.

## Engineer (generatorlar va maydonlar)

| Hali qurilmagan | Hozir o‘rniga |
|---|---|
| Yaratilgan issiqlik almashtirgichdagi sarlavhalar, portlar va fitinglar; material mustahkamligi uchun harorat egri chiziqlari; kollektordagi tee yo‘qotishlari | Generatorlar yadro va quvurlarni quradi; Loyihalash da fitinglar qo‘shing; materialning xona harorati ko‘rsatkichlaridan xavfsizlik koeffitsienti bilan foydalaning |
| Qo‘shimchalar katalogidan bir bosishda generatorlar qo‘shish | Engineer ish maydonidagi {{ui:Ochish}} fayldan generator qo‘shadi |
| Generatorning o‘z voksel o‘lchamidan nozikroq maydon fayli; `.vdb` fayllarini o‘qish | Nozikroq maydonni skriptdan saqlang; `.vdb` faqat yoziladi, o‘qilmaydi |
| Bosim idishlari kodi hisoblari | Darslikdagi yupqa va qalin devor formulalari, tanlangan xavfsizlik koeffitsienti bilan; kod marjasi emas |
| Boshqa ilovalar uchun generatorlar | Bu versiyada faqat PartCraft |
