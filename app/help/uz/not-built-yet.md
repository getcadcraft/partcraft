---
title: Hali qurilmagan narsalar
summary: Bu PartCraft qurilmasi hali bajarmaydigan hamma narsa: burama Sweep operatsiyalaridan dyuymli koʻrinishgacha, chizma oʻlchamlari va yigʻma qismlarigacha, bugungi kunda oʻrniga nima qilish kerakligi bilan.
keywords: yoʻq, hali emas, cheklovlar, yoʻl xaritasi, aniq yadro, yumaloqlash, faska, qobiq, sweep, loft, STEP import, simulyatsiya, ishlab chiqarish, burama sweep, loft uchi tangensi, yuz yumaloqlash, tenglamalar, dyuym, chizma oʻlchamlari, yigʻma qismlar, bulut, planshet, telefon
from: 97b10a29
---

PartCraft erta qurilma. Bu sahifa u hali nimani bajarmasligini sanab oʻtadi, shuning uchun uni qidirmaysiz, va bugun oʻrniga nima qilish kerakligini. Hech narsa sanaga ega emas.

## Aniq yadroni talab qiladi

Bu versiya har bir detalni toʻr yadrosi bilan quradi (qarang: [Toʻr yadrosi](topic:solid-kernels)). Quyidagilarning hammasi aniq geometriya yadrosini talab qiladi, bu versiyada hali yoʻq. Bu xususiyatlar bilan saqlangan detallar hali ochiladi: xususiyatlar tarixda qoladi, qurilmagan deb belgilanadi va saqlaganda saqlanadi.

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Dumaloq qirralardagi {{ui:Yumaloqlash}} va {{ui:Faska}}; qirra boʻylab radiusi oʻzgaradigan yumaloqlashlar; uchrashgan joyda silliq aralashgan yumaloqlashlar (toʻr yadrosi ularni qiyshaytiradi) | Yumaloqlash va Faska yassi yuzlar orasidagi toʻgʻri qirralarda ishlaydi; boshqa burchaklarni ekstrudlashdan oldin eskizda yumaloqlang ({{ui:Yumaloqlash}} eskizda, {{key:F}}) |
| {{ui:Qobiq}} egri yuzlarni ochish; turli qalinlikdagi devorlar | Yassi yuzlarni oching; devor qalinroq boʻlishi kerak boʻlgan joyda ekstrudlar bilan material qoʻshing |
| Egri yuzlarda {{ui:Sweep}}, {{ui:Loft}}, {{ui:Qoralama}}; yuzgacha, keyingi yuzgacha yoki uchigacha ekstrudlash; konussimon ekstrudlar | Ekstrudlang yoki aylantiring, kerak boʻlsa bosqichlarda; oʻlchagan chuqurligigacha ekstrudlang |
| {{ui:Qovurgʻa}}, {{ui:Asosiy flanets}}, {{ui:Qirra flanetsi}} va yassi naqshlar | Plastinani yoki qovurgʻaning profilini ekstrudlang |
| Sirtlar: {{ui:Forma}} ni detalga pardozlash, {{ui:Yama}}, {{ui:Sirtni loft qilish}}, {{ui:Gordon sirti}}, {{ui:Tikish}}, {{ui:Qalinlashtirish}}, {{ui:Sirtni siljitish}}, {{ui:Sirtni choʻzish}}, {{ui:Sirtni qirqish}} | Mavjud emas |
| Bir nechta jism: {{ui:Birlashtirish}}, {{ui:Jismni koʻchirish}}, {{ui:Jismni masshtablash}}, {{ui:Yoʻl massivi}}, yangi jism yaratadigan xususiyatlar | Bitta yaxlit jism; massivlar va koʻzgu nusxa xususiyatlari |
| Faqat aniq yadro topa oladigan yuzlardagi eskizlar, tekisliklar, oʻqlar va nuqtalar (yumaloqlash bilan yaratilgan yuz, teshik devori, import qilingan jismning yuzi) | Asosiy tekisliklarda, referens tekisliklarda va ekstrudlar hamda aylantirishlarning yassi yuzlarida eskiz |
| Generativ dizayn natijasi detal sifatida ochilgan yoki unga qoʻshilgan (u import qilingan jismga aylanadi) | Natijani STL yoki STEP sifatida yuklab oling |
| Ochilgan STEP faylining egri yuzlarini aniq sirt sifatida tahrirlash; STEP faylidagi splayn, siljitilgan va aylantirilgan yuzlarning aniq STEP i, splayn tomonlar, modellashtirilgan rezbalar, STL / OBJ / 3MF jismlari va yigʻmalar; boshqa detal modelyorlari uchun STEP | {{ui:Ochish}} STEP ni uchburchaklar sifatida oʻqiydi va eksport uchun faylning yassi yuzlari, silindrlari, konuslari, sferalari va torlarini saqlaydi ([STEP faylini ochish](topic:import-step)); {{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} har bir analitik yuzni aniq yozadi va ularni faset sifatida saqlaydi ([Eksport](topic:export-files#for-other-cad-programs-step)); boshqa detal modelyori uchun makros hali ham yozadi |
| Chizma koʻrinishlardagi haqiqiy yoylar | Koʻrinishlar va kesim koʻrinishlari fasetlardan chiziladi |
| Aniq hajmlar, maydonlar va masofalar | {{ui:Oʻlchash}} faset jismning raqamlarini beradi, dumaloq detallarda biroz past; mayinroq **Egri chiziqlar** sozlamasi ularni yaqinlashtiradi |

Quyidagi jadvallardagi ayrim qatorlar bu xususiyatlardan birini boshqa narsa atrofida yoʻl sifatida taklif qiladi. Bu takliflar aniq yadro qaytgach kuchga kiradi.

## Xususiyatlar

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Yuz yumaloqlashlari, toʻliq dumaloq yumaloqlashlar, qirra boʻylab nuqtalarda radiuslari belgilangan yumaloqlashlar | Doimiy yoki chiziqli oʻzgaruvchan {{ui:Yumaloqlash}}; bir nechta yumaloqlash xususiyatlari |
| Turli devor qalinliklaridagi qobiqlar | Bitta {{ui:Qobiq}} qalinligi; devor qalinroq boʻlishi kerak boʻlgan joyda ekstrudlar bilan material qoʻshing |
| Erkin shakldagi (splayn) yuzlarda qoralama | {{ui:Qoralama}} yassi, silindrsimon va konussimon yuzlarda ishlaydi |
| Buralgan Sweep turlari, yupqa devorli va sirt Sweep turlari; Loft xususiyatidagi oxirgi tangens; bitta yoʻnaltiruvchi relsli loft; splayn yoʻllar | Belgilangan yoʻnalishli yoki oxirgi masshtabli {{ui:Sweep}}; ikki yoki undan ortiq yoʻnaltiruvchi relsli loft: qarang: [Sweep, loft va qoralama](topic:sweep-loft-draft) |
| Yoylar yoki splaynlardan qovurgʻalar; eskizga nisbatan toʻrtburchak oʻsgan qovurgʻalar (yuqori koʻrinishdan); qovurgʻalarda qoralama; bitta eskizdan bir nechta qovurgʻa | Qovurgʻaning oʻz tekisligida bitta chiziqlar zanjiridan {{ui:Qovurgʻa}}: qarang: [Qovurgʻalar va kronshteynlar](topic:rib) |
| Egri sirtgacha "gacha", egri yuzda toʻxtovchi "keyingigacha" | Yassi yuzgacha yoki referens tekislikkacha |
| Qarshi burgʻulangan teshiklar, dyuym va quvur rezbalari, konussimon rezbalar, rezba chiqish joylari va faskalangan rezba boshlanishlari | Kichik chuqurlikdagi qarshi kengaytirish (counterbore); ISO metrik va trapetsiyasimon rezbalar, koʻrinish yoki modellangan: qarang: [Val va teshiklardagi rezbalar, chizilgan yoki modellangan](topic:threads) |
| Yupqa xususiyatli ekstrudlar | Profilning ikkala devorini chizing |
| Massiv nusxalari bir-bir oʻtkazib yuboriladi, toʻldirish massivlari | Alohida xususiyatlardan foydalaning; egri chiziq boʻylab massivlar: {{ui:Yoʻl massivi}} |
| Massivlarni, koʻzgularni, yumaloqlashlarni, faskalarni, qobiqlarni va import qilingan jismlarni nusxalash | Ular qurilgan eskiz yoki xususiyatni nusxalang yoki unga massiv qoʻllang |
| Forma nuqtalarida aniq (G1) tangens; forma yamalarini kattaroq yuzlarga birlashtirish | Formaning Darajasini oshiring: taxminiy yamalar kichrayadi; qarang: [Erkin shakllar Forma bilan](topic:form-surfaces) |
| Bitta xususiyatda bir nechta alohida yopiq boʻlaklardan tuzilgan forma; formalar orasidagi koʻprikler | Har bir Forma xususiyatida bitta yopiq boʻlak; ularni {{ui:Ulash}} bilan ulang |
| Koʻrinishda sirt jismlarini tanlash (qirqish va yama nuqtalaridan tashqari); sirt yumaloqlashlari; qirqishni qaytarish; G2 yamalar; egri qoʻshnilarga tangens Gordon sirtlari (tekisliklar va yassi yuzlarga tangens qurilgan) | Ularni xususiyat panelida nomi boʻyicha tanlang; avval qalinlashtiring, soʻng jismni yumaloqlang |
| Tarixda jismlar roʻyxati; yashirin jismlarni eksportdan chiqarib tashlash | Detal panelidagi jismlar roʻyxatida jismlarni nomlang va yashiring; jismni yaratgan xususiyatni oʻchirib tashlang yoki vaqtincha oʻchiring, shunda u chiqariladi |
| Silindr va konuslarni analitik saqlaydigan notekis masshtab; siljitilgan sirtlarni notekis masshtablash | {{ui:Jismni masshtablash}} egri yuzlarni yaqin B-splaynlarga aylantiradi (0.0000004 mm ichida); tekis masshtab aniq qoladi |
| Sirt jismlarini birlashtirish; Minkowski yigʻindilari | Avval {{ui:Tikish}} yoki {{ui:Qalinlashtirish}}, soʻng {{ui:Birlashtirish}} |
| Tolerantlikni tahlil qilish: burchaklar boʻylab buriladigan toʻplamlar (2D va 3D vektor sirtmoqlari), geometriyadan hisoblangan sezgirliklar, boshqa taqsimotli Monte-Karlo, eskiz oʻlchamlaridagi oʻlcham tolerantliklari, material holatidan bonus tolerantlik | Yigʻmadagi {{ui:Toleranslar zanjiri}}: bir yoʻnalish, eng yomon holat va RSS, tolerantliklar kiritiladi, sarlavha blokining umumiy tolerantligidan yoki GD&T ramalaridan: qarang: [Toleranslar zanjirlari](topic:tolerance-stackup) |
| Joylashtirish: kesish tartibi va kirish chiziqlari, umumiy qirralarni bir marta kesish, birga saqlanishi kerak boʻlgan detallar; rulonlarning qoldiqlari, loyihalar orasida umumiy zaxira | {{ui:Varaqlarda yassi detallarni joylashtirish…}} oraliq, chekka, aylantirish va tola yoʻnalishi bilan: qarang: [Varaqlarda yassi detallarni joylashtirish](topic:nest-flat-parts); qolgan plastinalar saqlanadi va birinchi navbatda ishlatiladi: qarang: [Qirqindilarni saqlash va qayta ishlatish](topic:nest-offcuts); kesishni kesgichingizning oʻz dasturida rejalashtiring |
| List metall: buklar, pogʻonalar, miter va kontur flanetslar; egri qirralardagi yoki egilgan asosiy flanetsning yuzlaridagi flanetslar; eskizli egilishlar; burchak yopilmalari; shakllantiruvchi asboblar; jismni list metallga aylantirish; kesilgan egilgan asosiy flanetsning yassi shakli; egilish jadvallari | {{ui:Asosiy flanets}} (plastina yoki egilgan profil), plastinaning toʻgʻri qirralarida egilish boʻshatishlari bilan {{ui:Qirra flanetsi}} va K-koeffitsiyent bilan yassi naqsh: qarang: [List metall](topic:sheet-metal) |
| Yigʻmalarda {{ui:Qoralama tahlili}}; ajratish chizigʻini topish; devor qalinligini tahlil qilish | Loyihalashda detaldagi {{ui:Qoralama tahlili}}: qarang: [Quyish va shakllantirish uchun qoralamani tekshirish](topic:draft-analysis); yigʻmaning har bir detalini tekshirish uchun oching |

## Eskizlar

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Ellipslar, tangens yoylar, konik kesimlar, belgilangan darajali yoki ogʻirlikli splaynlar (NURBS) | Splaynlar (kubik), yoylar va aylanalar Tangens bogʻliqliklari bilan |
| Splayndagi nuqta (bogʻliqlik), egrilik (G2) bogʻliqliklari | Splaynning oʻz nuqtasini u oʻtishi kerak boʻlgan joyga qoʻying |
| Keyingi oʻzgarishlarga ergashadigan splaynlarning siljitilgan nusxalari; oʻtkir splayn burchakli zanjirlarning siljishi | Oʻzgarishdan keyin yana siljiting; avval burchakni yumaloqlang |
| Asl nusxaga bogʻlangan massiv nusxalari; egri chiziq boʻylab massivlar | Oʻzgarishdan keyin massivni yana qoʻllang |
| Erkin shakldagi yoki egilgan aylana qirralarni proyeksiyalash, detalga ergashadigan proyeksiyalangan geometriya | Toʻgʻri va parallel aylana qirralarni proyeksiyalang, soʻng oʻlchang |
| Boshqariladigan (referens) oʻlchamlar | Oʻlchamlarni paneldan yoki detal maʼlumotlaridan oʻqing |
| Kollinear bogʻliqliklar | 0 masofali Parallel |
| Boshqa dasturga joylashtirish (tizim buferi) | DXF, STEP, STL yoki 3MF ni eksport qiling |
| Yoylarni, nisbiy yoki qutb koordinatalarini kiritish | Chiziqlar va aylanalarni kiriting; yoylarni {{ui:Yoy}} asbobi bilan chizing |
| Geometriyani koʻrsatkichsiz tanlash | Bosish yoki teginish kerak |

## Parametrlar va oʻlchov birliklari

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Materiallarni oʻzgartiradigan konfiguratsiyalar; xususiyatlarni oʻchiradigan CSV loyiha jadvali | Konfiguratsiyalar parametrlarni belgilaydi va xususiyatlarni yoqadi yoki oʻchiradi: qarang: [Konfiguratsiyalar va loyiha jadvallari](topic:design-tables); `partcraft variants` saqlangan konfiguratsiyalarni nomi boʻyicha quradi, oʻchirilgan xususiyatlar bilan birga: qarang: [Konfiguratsiyalardan variant toʻplamini tuzish](topic:variant-pack) |
| Eng yangi xususiyatlarning oʻz panellaridagi raqamlarga tenglamalar (tekislik, sweep, qoralama va shunga oʻxshash) | Ularni skriptda yoki `partcraft set` bilan yozing ([Skriptlar va buyruq qatori](topic:scripts-and-cli)) |
| Detal dyuymda koʻrsatilgan | Oʻlchamlar millimetrda koʻrsatiladi; raqam maydoniga yoki ifodaga `2in` deb yozing, u 50.8 boʻladi |

## Fayllar

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Import qilingan STEP jismining oʻz xususiyatlarini tahrirlash (u tarixsiz keladi) | Oʻz xususiyatlaringiz bilan material qoʻshing yoki kesib oling |
| STEP dan ranglar, nomlar, yigʻma tuzilmasi va PMI ni oʻqish | Mavjud emas |
| glTF, OBJ, IGES, Parasolid eksporti; 3D detalning DWG si (faqat variant toʻplami DWG yozadi: chizma varaq) | Toʻrlar uchun STL yoki 3MF; jismlar uchun STEP; 2D uchun DXF |
| IGES, DXF yoki boshqa dasturlarning oʻz fayllarini ochish (`.3dm` fayllari bitta jism sifatida ochiladi: [.3dm modelini qattiq jism sifatida ochish](topic:open-3dm-files)) | STEP soʻrang yoki yopiq STL, OBJ yoki 3MF toʻr: [STL, OBJ yoki 3MF ni ochish](topic:open-meshes) |
| Eksport qilingan STEP dagi yigʻma tuzilmasi (detal nomlari bilan daraxt) | Yigʻma STEP joylashtirilgan jismlarning bitta kompozitsiyasi |
| Brauzer yuklab olishisiz tanlangan papkaga saqlash | Brauzerning yuklab olish sozlamalarida «saqlash joyini soʻrash» ni yoqing |

## Chizmalar

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Uchta umumiy oʻlchamdan tashqari oʻlchamlar (teshik oʻlchamlari, joylashuvi, oʻlchamlardagi tolerantliklar) | PDF ga belgi qoʻying yoki DXF eksport qilib, uni 2D CAD dasturida oʻlchang |
| Bir nechtadan ortiq kesim yoki detal; tekislangan, uzilgan va yordamchi koʻrinishlar | Har bir chizmada bitta kesim va bitta detal |
| Varaqdagi erkin matn, izohlar va jadvallar (sarlavha va revizya bloklaridan tashqari) | Pardozlash izohi yoki PDF ga qoʻshilgan matn |
| Birinchi burchakli proyeksiya, siljiydigan koʻrinishlar, portret varaqlar | Uchinchi burchak, avtomatik joylashuv, gorizontal A4–A0 varaqlar va ANSI A–E |
| Jonli kesim koʻrinishi: bir vaqtda bir nechta tekislik yoki kesim qutisi, kesim atrofidagi kontur, kesimni faylda saqlash | Bir vaqtda bitta tekislik {{ui:Koʻrinishlar}} › {{ui:Kesim koʻrinishi}} dan; qarang: [Kesim koʻrinishi bilan ichkariga qarash](topic:section-view) |
| Koʻproq koʻrinishli, oʻlchamli yoki siljitiladigan ballonli yigʻma chizmalar | Avtomatik ballonlar va detallar roʻyxati bilan bitta izometrik (yoki yoyilgan) koʻrinish |
| GD&T va pardozlash belgilarini nusxalash va joylashtirish | Har birini Datum, Rama yoki Ishlov bilan joylashtiring |
| Qoʻllanmalar: Illustrate dagi {{ui:Boshqa fayldan…}} dagi STEP fayllar, ModelCraft yoki BimCraft dan toʻgʻridan-toʻgʻri berilgan model, yoʻl kuzatuvchisi sifatidagi rasmlar, PDF ichidagi interaktiv 3D | Loyihalashda STEP ni oching va qoʻllanmani {{ui:Ochiq detaldan}} boshlang; modelni glTF (.glb) sifatida saqlang; 3D koʻrinishning PNG rasmlari; interaktiv 3D fayl: qarang: [Illustrate da qoʻllanma boshlash](topic:illustrate) |

## Yigʻmalar

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Tishli, reyka, kulachok va vint birikmalari; konus bilan chegaralangan shar birikma; egri yuzlardagi yoki nuqtalar orasidagi birikmalar | Yassi yuzlardagi qattiq, aylanuvchi, sirpanuvchi, silindrik, tekis, shar va pin-slot birikmalar, har bir qiymat oʻz chegaralari bilan: qarang: [Yigʻma qurish](topic:build-assembly) |
| Detallarni buruvchi yoyilgan qadamlar va birikmalar joylashtirgan detallarni sudrash | Toʻgʻri yoyish qadamlari; detalni qoʻlda siljitish uchun birikmani olib tashlang |
| Kichik yigʻmalar | Faqat bitta darajadagi detallar |
| Tishlilar, kulachoklar, kontakt | Mavjud emas |

## Ishlab chiqarish

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| 3D da moslashuvchan tozalash va siljitilgan qoʻpol ishlov; waterline, qalam, radial va spiral pardozlash; yoylar sifatida yozilgan moslashuvchan oʻtishlar | Toʻgʻri qatorlarda 3D qoʻpol ishlov va qoldiq ishlov: qarang: [3D qoʻpol va qoldiq ishlov berish](topic:rough-3d); Parallel va Scallop pardozlash: qarang: [3D pardozlash](topic:finish-3d); 2.5 oʻqli yuza, oyma, 2D moslashuvchan, kontur, burgʻulash va faska: qarang: [Asbob yoʻllari va G-code yaratish](topic:manufacture) |
| Swarf kesish, oqim chizigʻi va koʻp oʻqli qoʻpol yoʻllar, egilgan ishchi tekislik kodlari (G68.2), tutgich va stanokning toʻqnashuvni tekshirishi; 5 oʻqli va aylanma kesishlar simulyatsiyasi | Har qanday operatsiya uchun egilgan asbob, shar uchli frez bilan 5 oʻqli pardozlash va 4-oʻq aylanma pardozlash: qarang: [4 va 5 oʻqli ishlov berish](topic:multi-axis) |
| Tokarlikda ichki teshish va rezbalar, G71/G76 sikllari, tokarlik yoʻllaridagi yoylar, jonli asboblar, qoʻshimcha shpindel | Tashqi tokarlik: yuzlash, qoʻpol, pardoz, ariqcha, ajratish, rezba, markazda burgʻulash: qarang: [Tokarlik stanokida tokarlik](topic:turning) |
| Burchak yoki qirrani zondlash, asbob oʻrnatgich, oʻlchamni tolerantlik bilan solishtirish | Ishchi siljishini oʻrnatish uchun yuzni, yonni, teshikni yoki boʻrtiqni zondlash: qarang: [Zondlash](topic:probing) |
| Tutgich va dastak toʻqnashuvini tekshirish | Tish uzunligi ogohlantirishlarini kuzating va boshqaruvingizning simulyatorida tekshiring |
| Postdagi asbob umri va kichik dastur sikllari; boshqa dasturlarning post fayllarini yuklash | Postni PartCraft ning oʻz formatida yozing yoki oʻzgartiring: qarang: [Tahrirlanadigan postprotsessorlar](topic:post-processors) |
| Dyuymli G-code (G20) | Faqat millimetr (G21) |

## Simulyatsiya va generativ dizayn

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Chiziqli boʻlmagan tadqiqotlar: oqish, katta egilishlar, detallar orasidagi kontakt, charchash | Chiziqli statik va xos chastotalar: qarang: [Kuchlanish va egilishni tekshirish](topic:simulation); xavfsizlik koeffitsientini 1 dan ancha yuqori saqlang |
| Chiziqli boʻlmagan buklash (nomukammallik, buklashdan keyin, snap-through) | Keng zaxira bilan chiziqli buklash yuklama koeffitsientlari: qarang: [Issiqlik, termik kuchlanish va buklash](topic:thermal-and-buckling) |
| Yuzlar orasidagi nurlanish (koʻrinish koeffitsientlari), kontakt qarshiligi, harorat bogʻliq materiallar, termik kuchlanishdagi inertsiya (termik zarba toʻlqinlari) | Atrofga nurlanish, vaqt boʻyicha barqaror yoki kvazistatik termik kuchlanish, doimiy xossalar: qarang: [Issiqlik, termik kuchlanish va buklash](topic:thermal-and-buckling) |
| Oʻtkinchi issiqlik va termik yuklamali tadqiqotlar uchun avtomatik aniqlash; xato kichik boʻlgan joyda toʻrni siyraklashtirish; mahalliy kattalik boʻyicha maqsad (bir joydagi eng katta kuchlanish) | Statik, buklash, xos chastota va barqaror termik tadqiqotlar uchun butun detal xatosi boʻyicha **Avtomatik aniqlash**: qarang: [Kuchlanish va egilishni tekshirish](topic:simulation); aks holda elementning oʻlchamini kamaytiring |
| Tayanch va bolt yuklamalari, masofaviy kuchlar, momentlar, prujinalar, belgilangan siljishlar | Yuzlardagi kuchlar va bosimlar, gravitatsiya; qoʻzgʻalmas va ishqalanishsiz yuzlar |
| Yigʻmalarni simulyatsiya qilish; yoʻnalish boʻyicha farq qiladigan materiallar (bosma qatlamlar, kompozitlar) | Bitta detal, bitta izotrop material |
| Tetraedr tadqiqotlari, issiqlik uzatish va generativ dizayn uchun bir nechta yechuvchi oqimlari; sahifa cross-origin izolyatsiya qilinmagan boʻlsa, har qanday oqimlar | Voksel tadqiqotlari, buklash, vaqt boʻyicha kuchlanish va laminar oqim sahifa ruxsat bergan joyda oqimlardan foydalanadi: qarang: [PartCraft sozlamalari](topic:settings) |
| Loyihaviy aniqlikdagi turbulent oqim (Spalart–Allmaras modeli tajribaviy sifatida kiritilgan: quvur ishqalanishi 30 dan 34 % gacha yuqori, orqaga qadam qayta biriktirilishi 21 dan 39 % gacha qisqa; rejalashtirilgan: devorlar yaqinida mayda katakchalar), oqimda issiqlik, nostatsionar (vaqt boʻyicha aniq) oqim, erkin sirtlar, Nyuton boʻlmagan suyuqliklar, aylanuvchi detallar | Nyuton suyuqligining laminar, barqaror, izotermik oqimi yoki sifat andozalari uchun tajribaviy turbulent model: qarang: [Suyuqlik oqimini simulyatsiya qilish](topic:flow-simulation); Reynolds soni laminardan oshganda panel ogohlantiradi |
| Generativ dizaynda kuchlanish chegaralari va ishlab chiqarish qoidalari (osilmalar, frezalash yoʻnalishlari); bitta shakldagi bir nechta materiallar | Hajm uchun eng qattiq shakl; natijani Simulyatsiyada tekshiring: qarang: [Yuklamalardan shakl oʻstirish](topic:generative-design) |
| Tahrirlanadigan (silliq, parametrik) jism sifatida natija | STL, faset STEP yoki natijani import qilingan faset jism sifatida oʻz ichiga olgan detal |
| Elektr mashinasi loyihasi: statorda aylanuvchi rotor, burchakka qarshi moment, toʻyingan poʻlat, tizzasidan oʻtgach kuchini yoʻqotadigan magnitlar, girdob toklari va temir hamda mis yoʻqotishlari; 3D dagi yoki egri toʻrlardagi magnit maydonlar | Tahlil kutubxonasidagi toʻrda chiziqli 2D magnitostatika: gʻaltaklar, temir, qaytish chizigʻidagi doimiy magnitlar, boʻshliqlar, induktivlik va tortish: qarang: [2D dagi magnit maydonlar](topic:magnetic-fields-2d) |

## Skriptlar

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Skript muharririda sichqoncha koʻrsatkichi yordami, toʻxtash nuqtalari va bosqichma-bosqich ijro | Qidirish, yigʻish va toʻldirish mavjud (qarang: [Skriptlarni yozish va ishga tushirish](topic:craftscript)); qolganlari uchun oʻz muharriringiz: Skript guruhidagi {{ui:Saqlash}} va {{ui:Ochish}} skriptlarni ichkariga va tashqariga olib chiqadi; oʻrnatilgan funksiyalar [CraftScript tili](topic:craftscript-language) da sanab oʻtilgan |
| Toʻxtash nuqtalari va skript boʻylab bosqichma-bosqich oʻtish | Yoʻl davomida `disp` va `fprintf`; {{key:Mod+Enter}} bir vaqtning oʻzida bir nechta tanlangan qatorlarni ishga tushiradi |
| Skript koʻrsatadigan maydonlar va grafiklar Loyihalash ish maydonida chiziladi; detal parametrlarini oʻzgartiradigan skriptlar | Ular Skript ish maydonida koʻrsatiladi; skriptlar parametrlarni `param` bilan oʻqiydi (qarang: [Skriptlarni yozish va ishga tushirish](topic:craftscript)), ularni {{ui:Parametrlar}} yorligʻida oʻzgartiring |
| Grafiklar bilan yonma-yon rasmlar va jadvallar; saqlashdan oldin grafikni tahrirlash (kattalashtirish, oʻq chegaralari) | Yonma-yon grafiklarni koʻrsatadi; grafikni PNG, SVG yoki CSV sifatida saqlang va boshqa joyda tugating |
| numpy va boshqa Python paketlari; oflayn Python; muharrirda Python ni yigʻish; Pascal Script | Pythonning standart kutubxonasi, CraftScript va Lua: qarang: [Python da skriptlar](topic:craftscript-python) |
| Lua funksiyalarini oʻrnatilgan funksiyalarga uzatish; skript ishlayotganda qurilgan nom boʻyicha Lua dan kutubxona funksiyasini chaqirish | Kutubxona funksiyasining nomini skriptga yozing (`cs.static_tet(…)`), yoki uni CraftScript skriptidan chaqiring |

## Ilova

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Bulutli saqlash, ulashish va versiyalar tarixi | Hali mavjud emas. Fayllarni kompyuteringizga saqlang va versiyalarni nomi boʻyicha saqlang |
| iPad va iPhone da oʻrnatilgan ilova sifatida PartCraft | Qurilmaning brauzerida PartCraft dan foydalaning; Android va ish stolida u CadCraft Studio da ham ishlaydi (getcadcraft.com/download) |
| Kontekst (oʻng tugma) menyulari | Asboblar paneli va oʻng panel |
| Yangidan toʻliq oflayn ishlash | Faqat ilova oflayn foydalanish uchun saqlangan boʻlsa: qarang: [Oflayn ishlash](common:offline) |

Sizga eng koʻp yetishmaydigan narsani sayt yordam sahifasi orqali xabar bering: u keyingi narsalarni shakllantiradi.

## Engineer (generatorlar va maydonlar)

| Hali qurilmagan | Oʻrniga, bugun |
|---|---|
| Yaratilgan issiqlik almashtirgichda sarlavhalar, portlar va fitinglar; material mustahkamligi uchun harorat egri chiziqlari; kollektordagi tee yoʻqotishlari | Generatorlar yadro va quvurlarni quradi; Loyihalashda fitinglar qoʻshing; xavfsizlik koeffitsienti bilan materialning xona harorati koʻrsatkichlaridan foydalaning |
| Qoʻshimchalar katalogidan generatorlarni bir bosishda qoʻshish | Engineer ish maydonidagi {{ui:Ochish}} fayldan generator qoʻshadi |
| Generatorning oʻz voksel oʻlchamidan mayda maydon fayli; `.vdb` fayllarni oʻqish | Skriptdan mayda maydonni saqlang; `.vdb` yoziladi, oʻqilmaydi |
| Boshqa ilovalar uchun generatorlar | Bu versiyada faqat PartCraft |
