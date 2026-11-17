---
title: Kuchlanish va egilishni tekshirish (Simulyatsiya)
summary: Material tanlang, yuzalarni mahkamlang, kuch, bosim yoki detalning oʻz ogʻirligini qoʻshing, yeching va modelda von Mises kuchlanishi, siljish, xavfsizlik koeffitsienti, reaksiyalar va tabiiy chastotalarni oʻqing, usul nimani ayta olishi va ayta olmasligi bilan.
keywords: simulyatsiya, FEA, jonli tahlil, tahrirlash paytida yangilash, sindirish, birinchi nima sinadi, yuklama koeffitsienti, nochiziqli, plastiklik, oqish, oqish chegarasi, plastik deformatsiya, bilineyr, kontakt, kontakt juftligi, penalti, bogʻlangan, ishqalanishsiz kontakt, CalculiX, .inp, .frd, chekli elementlar, kuchlanish, deformatsiya, von Mises, siljish, egilish, xavfsizlik koeffitsienti, oqish chegarasi, reaksiya, yuklama, kuch, bosim, ogʻirlik, oʻz ogʻirligi, mahkamlangan, ishqalanishsiz, tayanch, cheklov, material, poʻlat, alyuminiy, titan, ABS, PLA, neylon, tabiiy chastota, modal, tebranish, toʻr, element oʻlchami, tetraedr, tetraedrlar, tetraedrik toʻr, voksel, toʻr sifati, asosiy kuchlanish, ekvivalent deformatsiya, xato bahosi, egri yuzalar, teshiklar, yumaloqlashlar, moslashuvchan, avtomatik aniqlashtirish, h-moslashuvchan, yaqinlashish, toʻr yaqinlashishi, aniq sirt, sfera, konus, torus, spline, erkin shakl
from: 6f2fdec1
---

Simulyatsiya ishchi maydoni modellashtirayotgan detal uchun "bu yuk ostida egiladimi yoki sinadimi?" savoliga javob beradi. U **chiziqli statik** tadqiqot (kichik deformatsiyalar, material elastik qoladi) yoki **tabiiy chastota** tadqiqoti boʻlib, detal yuzalariga mos keladigan kvadratik tetraedrlar toʻrida yechiladi (yoki, agar tanlasangiz, teng kichik kublar toʻrida). U toʻr yadrosi detalga bergan nomlangan yuzalarda ishlaydi (qarang [Toʻr yadrosi](topic:solid-kernels)).

Asboblar panelining chap tomonidagi **Ish maydoni** qutisidan **Simulyatsiya** ni tanlang. Detalingiz oʻzgarmaydi; tadqiqot detal faylining ichida saqlanadi va unga kiritilgan har bir oʻzgarishni bekor qilish mumkin.

## Tadqiqot sozlash

1. Oʻng paneldagi **Yangi tadqiqot** ni bosing.
2. **Material** ni tanlang. Panelda uning bikrligi (E), Puasson koeffitsienti, zichligi va oqish chegarasi koʻrsatiladi. Qiymatlar odatiy spravochnik raqamlari; yetkazib beruvchingizning sertifikatlangan qiymatlari boshqacha boʻlishi mumkin.
3. **Toʻr** ni tanlang:
   - **Tetraedrik (aniq)**, standart: tashqi yuzalari detal yuzalarida yotadigan 10 tugunli tetraedrlar, teshiklar, yumaloqlashlar va boshqa dumaloq yuzalarda egri qirralar bilan. Tekis, silindrik, konussimon, sferik va torussimon yuzalar, aylantirilgan va ekstrudlangan yuzalar hamda erkin shakldagi (B-spline) yuzalardagi tugunlar aniq sirtda turadi; boshqa turdagi yuzalar oʻz ekran toʻriga ergashadi va natijalar jadvali nechta yuza shunday qilganini koʻrsatadi. Egri yuzalar, nozik devorlar va oʻtkir qirralar yaqinida toʻr oʻz-oʻzidan mayinroq qilinadi.
   - **Voksel kublar (tez)**: detal teng kublar bilan toʻldiriladi. Tez, lekin egri yuzalar pogʻonalarga aylanadi. Tetraedrik toʻr mavjud boʻlmasdan oldin saqlangan tadqiqotlar buni saqlab qoladi.
4. **Element oʻlchami** ni avtomatik oʻlcham uchun boʻsh qoldiring (taxminan 12 000 tetraedr yoki 20 000 kub), yoki millimetrda kiriting. Panel mayda nuqtalar qoʻshilishidan oldin taxminan qancha element hosil boʻlishini koʻrsatadi. Tetraedrlar bilan **Egri yuzalarda mayda elementlar** (standart yoqilgan) teshiklar va yumaloqlashlarni aniqlashtiradi, bu yerda kuchlanish odatda eng yuqori boʻladi.

### Avtomatik aniqlashtirish

Tetraedrlar bilan statik yoki buralish tadqiqoti (termik yuklamasiz), tabiiy chastota tadqiqoti va barqaror termik tadqiqot **Avtomatik aniqlashtirish (moslashuvchan)** ni taklif qiladi. Uni belgilang va sozlang:

- **Maqsadli xato (%)**: taxminiy xato undan kichik boʻlganda yechish toʻxtaydi (dastlab 1 %).
- **Eng koʻp oʻtish**: u ishga tushira oladigan eng koʻp yechish (dastlab 5, koʻpi bilan 10).

Har bir oʻtish yechadi, eng katta taxminiy xatoga ega elementlarni topadi, ularni boʻladi (va toʻrni butun saqlash uchun kerak boʻlgancha qoʻshni elementlarni ham) va yana yechadi. Egri yuzalardagi yangi tugunlar aniq sirtga qoʻyiladi. Natijalar jadval va grafik koʻrsatadi: har bir oʻtish uchun elementlar, noma'lumlar, taxminiy xato va eng yuqori kuchlanish (yoki harorat) hamda siljish (yoki issiqlik oqimi), va nima uchun toʻxtaganini aytadigan qator: maqsad bajarildi, oʻtishlar tugadi, keyingi toʻr juda katta boʻladi yoki oʻtish muvaffaqiyatsiz boʻldi (keyin oxirgi yaxshi oʻtishni koʻrasiz).

Taxminni taxmin sifatida oʻqing. U (Zienkiewicz–Zhu, aniq javoblar bilan solishtirganda haqiqiy xatoning taxminan 0.6 dan 0.95 gacha qismini koʻrsatadi) butun **detal** boʻyicha xatoni oʻlchaydi, shuning uchun teshik yoki yumaloqlashdagi eng yuqori kuchlanish odatda taxmin kichik koʻringanda ham biroz noaniq boʻladi: kuchlanish konsentratsiyasi uchun maqsadni 1 % dan past qoʻying va eng yuqori qiymat oʻtishdan oʻtishga qanday barqarorlashishini kuzating. Oʻtkir ichki burchakda yoki mahkamlangan yuza chetida haqiqiy kuchlanish cheksiz, shuning uchun taxmin unga hech qachon yetmaydi: oʻtishlar tugaydi.

**Tabiiy chastotalar va buralish.** Tabiiy chastota tadqiqoti uchun taxmin siz soʻragan har bir rejimni hisobga oladi, hammasi teng; jadval va grafik birinchi ikki chastotani kuzatadi. Faqat tekis yuzali detalda chastota oʻtishdan oʻtishga faqat pasayishi mumkin (har bir toʻr oldingisini saqlaydi); egri yuzalar ham haqiqiy shaklga yaqinlashadi, bu chastotani bir oz har ikki tomonga siljitishi mumkin. Buralish uchun taxmin oldindan kuchlanish va buralish rejimlarini qamraydi, jadval esa yuklama koeffitsientlarini kuzatadi. 100 × 10 × 10 mm poʻlat tayoqda tekshirilganda: birinchi chastota toʻrt oʻtish davomida 812.4 dan 811.9 Hz gacha barqarorlashdi, Euler–Bernoulli (siljishni eʼtiborsiz qoldiradi) dan 0.4 % past, ustunning yuklama koeffitsienti esa Eulerdan 0.5 % ichida.

## Ushlab turish va yuklash

Har bir tadqiqotga kamida bitta tayanch va kuchlanish uchun bitta yuklama kerak.

1. Asboblar panelida {{ui:Qoʻzgʻalmas}} ni bosing. Yangi tayanch tanlanadi va yuzalarni kutadi: qoʻzgʻalmas ushlab turiladigan yuzalarni bosing (yuzani qayta bosish uni olib tashlaydi). Tugatganda **Tanlashni tugatish** yoki {{key:Esc}} ni bosing. Koʻk konuslar ushlab turilgan yuzalarni belgilaydi.
2. {{ui:Kuch}} ni bosing va kuch taʼsir qiladigan yuzalarni bosing. Panelda **Umumiy kuch** ni nyutonda kiriting va uning **Yoʻnalishi** ni tanlang: yuzaga kirib yoki oʻq boʻylab. Kuch tanlangan yuzalar boʻyicha maydonga qarab taqsimlanadi. Toʻq sariq strelkalar uni koʻrsatadi.
3. Yuzalarga kiruvchi bosim uchun MPa (N/mm²) da {{ui:Bosim}} ni bosing; manfiy bosim tortadi.

Panelning **Qoʻshish** roʻyxatida yana turlari bor: **Ishqalanishsiz yuz** (yuz oʻzi boʻylab siljishi mumkin, lekin undan uzoqlashmaydi — simmetriya tekisliklari va silliq tayanchlar uchun ishlating) va **Ogʻirlik** (detalning oʻz ogʻirligi, 9.81 m/s², siz tanlagan yoʻnalishda).

Detalni siljishi yoki aylanishiga imkon beradigan tayanch rad etiladi, qaysi harakat qolib ketganini aytadi.

## Yechish va natijalarni oʻqish

{{ui:Yechish}} ni bosing. Ish fonda bajariladi; **Toʻxtatish** uni bekor qiladi. Keyin:

- Detal **von Mises kuchlanishi** bilan rangli boʻladi; **Koʻrsatish** da **Siljish** yoki **Xavfsizlik koeffitsienti** ni tanlang. Legenda shkalani beradi.
- Kursorni detalga olib boring — kursor ostidagi qiymatlar koʻrinadi.
- Detalning egilganini koʻrish uchun **Deformatsiyalangan shakl** ni belgilang (harakat **Masshtab** bilan kattalashtiriladi; haqiqiysi jadvalda).
- Jadvalda eng katta kuchlanish va uning joyi, eng katta siljish, eng kichik **xavfsizlik koeffitsienti** (oqish chegarasi ÷ von Mises kuchlanishi; 1 dan past boʻlsa material oqadi), qoʻllanilgan yuklama va tayanchlardagi **reaksiyalar** (ular yuklamani muvozanatlaydi) hamda ishlatilgan toʻr koʻrsatiladi.

Tabiiy chastotalar uchun **Turi** ni oʻsha turga qoʻying, **Rejimlar** sonini belgilang va yeching. Har bir rejim oʻz chastotasi va shaklini koʻrsatadi (shakllar eng katta harakatida 1 ga masshtablanadi).

Agar detalni oʻzgartirsangiz, natijalar eskirgan deb belgilanadi: qayta yeching.

## Oqish va kontakt (nochiziqli tadqiqotlar)

Yana ikki tadqiqot turi "material elastik qoladi" degan chegaradan oʻtadi:

- **Nochiziqli (material oqadi)** materialning toʻgʻri chizigʻini oqish kuchlanishigacha, soʻng yassiroq qiyalikka (**Oqishdan keyingi qiyalik**, boʻsh qoldirilsa E ning 1 %) ergashtiradi. Yuklama **Yuklama bosqichlari** da beriladi; oʻrnashmagan bosqich oʻz-oʻzidan ikkiga boʻlinadi. Natijalar grafiklarga **Plastik deformatsiya** ni qoʻshadi va yuklamaning qanchasi koʻtarilganini aytadi. Agar bosqich hali ham oʻrnashmasa, tadqiqot oxirgi yaxshi bosqichda toʻxtaydi va ⚠ Muammolar paneli qayerda ekanini koʻrsatadi: u yerda detal kuchini tugatgan (buzilish) yoki bosqichlar juda katta.
- **Detal boʻlaklari orasidagi kontakt** alohida boʻlaklarga bir-birini itarishga imkon beradi. **Kontakt juftligi** qoʻshing, **A tomon** yuzalarini (bosadigan yuzalar) {{ui:Yuzalarni tanlash}} bilan, soʻng **B tomon** yuzalarini {{ui:B tomon yuzalarini tanlash}} bilan tanlang. **Ishqalanishsiz** boʻlaklar itaradi, sirpanadi va ajraladi; **bogʻlangan** boʻlaklar yopishib turadi. Har bir boʻlak oʻz-oʻzicha toʻrlanadi, shuning uchun ular orasidagi kichik boʻshliq yaxshi. Kontakt penalti usuli: boʻlaklar bir-biriga biroz botadi (**penalti koeffitsienti** × E ÷ element oʻlchami kontakt qanchalik qattiqligini belgilaydi). Jadvalda eng chuqur botish koʻrsatiladi, Muammolar paneli esa u element oʻlchamining 1 % dan oshganda ogohlantiradi: koeffitsientni oshiring yoki mayda elementlar ishlating.

Ikkalasi ham tetraedrik toʻrdan foydalanadi. Ishqalanish, katta sirpanish va katta aylanishlar bu yerda yechilmaydi.

## CalculiX bilan ishga tushirish

**Eksport › CalculiX fayl toʻplami (.inp)** (yoki paneldagi {{ui:CalculiX fayl toʻplamini (.inp) saqlash}}) tadqiqotni CalculiX uchun kiritish fayl toʻplami sifatida saqlaydi — bu siz oʻrnatib, oʻzingiz ishga tushiradigan alohida dastur: bir xil toʻr, material, tayanchlar, yuklamalar va kontakt juftliklari, mm, N va MPa birliklarida. Uni ishga tushiring, soʻng **Eksport › CalculiX natijalari (.frd)** uning natija faylini xuddi shu toʻrga qaytarib oʻqiydi va siljishni (fayl kuchlanishlarni oʻz ichiga olsa, von Mises kuchlanishini ham) koʻrsatadi. Agar oraliqda detalni yoki element oʻlchamini oʻzgartirgan boʻlsangiz, toʻr bir xil emas va PartCraft buni aytadi: yangi fayl toʻplamini saqlang.

## Unga qanchalik ishonish mumkin

PartCraft yechuvchisini qoʻlda formulalar bilan tekshiradi (konsol uchining egilishi PL³/3EI 1 % ichida, tayoqning choʻzilishi PL/AE aniq, konsolning birinchi chastotasi 3 % ichida, plastinadagi teshik atrofidagi kuchlanish). Shunga qaramay, bu chegaralarni eslang:

- **Toʻr.** Tetraedrlar bilan PartCraft konsolning egilishi va egilish kuchlanishini (0.3 % ichida), plastinadagi teshikdagi kuchlanishni (Kt, taxminan 1 % ichida), bosim ostidagi qalin quvurni (Lamé, 0.3 % ichida) va birinchi chastotani (0.4 % ichida) tekshiradi. Jadval **toʻr sifatini** (element yuzlari orasidagi eng kichik va eng katta burchaklar; taxminan 10° dan past boʻlsa element yomon) va **taxminiy kuchlanish xatosini** koʻrsatadi: agar u bir necha foizdan oshsa, kichikroq element oʻlchami bilan qayta yeching yoki buni **Avtomatik aniqlashtirish** ga bering. Teshikli plastinada va ikki chetida kesigi bor tayoqda avtomatik aniqlashtirish butun toʻrni mayda qilishga kerak boʻlgan noma'lumlarning taxminan oltidan birida darslikdagi Kt dan 1 % ichida chiqdi. Voksel kublar bilan teshik yoki yumaloqlash kub oʻlchamida pogʻona boʻladi, shuning uchun u yerdagi kuchlanish taxminiy boʻladi.
- **Oʻtkir ichki burchaklar va mahkamlangan yuzalar chetlarida haqiqiy eng yuqori kuchlanish yoʻq.** Bu yerdagi qiymat elementlar kichraygan sari oʻsishda davom etadi. Kuchlanishni bunday joylardan biroz uzoqda oʻqing yoki modelda burchakni yumaloqlang.
- **Oʻqish uchun natijalar.** Von Mises kuchlanishi, siljish va xavfsizlik koeffitsientidan tashqari, tetraedrik tadqiqot **eng katta va eng kichik asosiy kuchlanishni** (choʻzilish va siqilish) hamda **ekvivalent deformatsiyani** koʻrsatadi. Elementlarni koʻrish uchun **Toʻrni koʻrsatish** ni belgilang.
- **Statik tadqiqotlar chiziqli va elastik.** Oqish va kontakt uchun yuqoridagi nochiziqli tadqiqot turlaridan foydalaning; katta deformatsiyalar va charchash yechilmaydi. Issiqlik, termik kuchlanish va chiziqli buralish oʻz tadqiqot turlari: qarang [Issiqlik, termik kuchlanish va buralish](topic:thermal-and-buckling).
- **Har bir material barcha yoʻnalishlarda bir xil.** 3D-bosilgan plastmassalar qatlamlari boʻylab zaifroq, koʻpincha uchdan bir yoki undan koʻproq.
- Bu laboratoriya versiyasi: muhim detallarni boshqa yoʻl bilan tekshiring.

## Tahrirlash paytida yangilash (Jonli)

Yechish blokidagi **Men tahrirlaganimda yangilash** ni belgilang, shunda Simulyatsiya javoblari tahrirlaringizga ergashadi. Oʻlchamni, yuklamani, materialni yoki muhitni oʻzgartiring — darhol **tezkor javob** paydo boʻladi, u tadqiqotnikidan toʻrt marta katta elementlar bilan tuziladi; bir oz (taxminan bir soniya) toʻxtasangiz, tadqiqotning oʻz **aniqlashtirilgan javobi** uni almashtiradi. Natijalar qaysi birini koʻrayotganingizni aytadi ("Tezkor javob" yoki "Aniqlashtirilgan javob") va element oʻlchamini. Tezkor javob yoʻnalish va hajm uchun yaxshi: poʻlat konsolda u egilishda aniqlashtirilgandan 1 % ichida, kuchlanishda taxminan 4 % ichida boʻldi. Foydalanadigan raqamlaringiz uchun aniqlashtirilganiga ishoning. Statik, tabiiy chastota, termik va buralish tadqiqotlari shunday ishlaydi; Jonli koʻrinish sozlamasi va detal ichida saqlanmaydi. Oʻzingiz bosgan Yechish keyingi tahrirgacha oʻz holicha qoladi.

## Birinchi nima sinishini aniqlash (Sindirish)

Statik yoki buralish tadqiqoti uchun **Sindirish** blokidagi **Birinchi nima sinadi?** ni bosing. PartCraft tadqiqot yuklamalarini (kuchlar, bosimlar va ogʻirlik birgalikda) detal taslim boʻlguncha masshtablaydi va eng yomondan boshlab roʻyxatni koʻrsatadi: **birinchi oqishgacha yuklama koeffitsienti** (bugungi yuklamadagi koeffitsient, bunda eng yuqori von Mises kuchlanishi materialning oqish chegarasiga yetadi, qayerda sodir boʻlishi qizil belgi bilan) va xuddi shu tayanch va yuklamalar uchun **buralishgacha yuklama koeffitsienti**. 4.3 koeffitsienti detal oqishdan oldin yuklamasining 4.3 barobarini koʻtarishini bildiradi; **1 dan past koeffitsient uning yuklangan holatida allaqachon taslim boʻlishini bildiradi**, va bu Muammolar roʻyxatida xato sifatida koʻrinadi (eng zaif topilma hamma narsa yaxshi boʻlsa ham eslatma sifatida koʻrsatiladi). Koeffitsientlar elementning oʻlchamingizdagi tetraedrlardagi chiziqli tadqiqotdan olinadi, shuning uchun ular oʻsha tadqiqot qanchalik yaxshi boʻlsa shunchalik yaxshi: mahkamlangan yuzadagi yoki oʻtkir burchakdagi kuchlanishda haqiqiy eng yuqori qiymat yoʻq (yuqoriga qarang), va oqish koeffitsienti u yerda ehtiyotkor tomonda boʻladi. Yordamchingiz bir xil tekshiruvni `break_run` vositasi bilan bajarishi mumkin.

## Aloqador

- [Issiqlik, termik kuchlanish va buralish](topic:thermal-and-buckling)
- [Yuklamalardan shakl oʻstirish (Generativ)](topic:generative-design)
- [Masofa, burchak va massani oʻlchash](topic:measure)
- [Hali qurilmagan narsalar](topic:not-built-yet)
