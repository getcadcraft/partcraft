---
title: Erkin shakldagi sirtlar (NURBS)
summary: Detal yonidagi silliq egri chiziqlar va sirtlar — loft, sweep, egri chiziqlar tarmog‘i, to‘rt qirrali yamalar, aralashtirmalar, qirqishlar; aniq sirtlarda o‘lchangan G0, G1 va G2 uzluksizligi, birlashtirish, ayirish va kesishish bilan qattiq jismlar detalga qotiriladi, zebra va egrilik ko‘rinishlari, skanerlangan yuzlar o‘lchangan xato bilan moslanadi, STEP yoki IGES fayllar. Detal faylida saqlanadi.
keywords: nurbs, skanerlash, teskari muhandislik, moslash, mesh dan sirt, nuqtalar buluti, stl, qirqish, qirqilgan, teshik, kesish, qattiq jism, qattiq jismlar, bul, birlashtirish, ayirish, kesishish, farq, tikish, yopiq, qotirish, erkin shakl, b-spline, bspline, egri chiziq, spline, loft, sweep, rels, tarmoq, coons, yama, aralashtirish, uzluksizlik, g0, g1, g2, tangens, egrilik, zebra, nazorat nuqtalari, tugunlar, daraja, step, iges, A sinf, korpus, silliqlash
from: 64ed5196
---

**Sirtlar** ish maydoni mahsulot qobiqlari, avtomobil kuzovlari va qayiq korpuslari uchun ishlatiladigan silliq egri chiziqlar va sirtlar yasaydi: NURBS, boshqa sirt modelyorlari ishlatadigan o‘sha matematika. Hamma narsa aniq sirtlarda o‘lchanadi, siz ko‘rayotgan uchburchaklarda emas. O‘lchamlar PartCraft ning qolgan qismidagi kabi millimetrda.

**Ish maydoni** qutisida **Sirtlar** ni tanlang. Asboblar panelida {{ui:Egri chiziq}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Moslash}} va {{ui:Zebra}} bor; har bir buyruq o‘ng panelda. Buyruq nima kerakligini aytadi: ko‘rinishda egri chiziqlar yoki sirtlarni bosing (qirra yoki uchiga yaqin, so‘ralganda) yoki ro‘yxatdan tanlang; nuqtalarni yozing yoki detalning yuzlarida bosing (detaldan tashqarida ular yer tekisligiga tushadi), so‘ng Enter bosing.

Egri chiziqlar va sirtlar detal faylida solid yonida saqlanadi. Ular detalning xususiyatlarini o‘zgartirmaydi: panelda o‘zining **Ortga qaytarish** va **Qayta bajarish** bor, har bir buyruq uchun bir qadam.

## Egri chiziqlar

- **Nuqtalar orqali egri chiziq** bosgan har bir nuqtadan o‘tadi. **Nazorat nuqtalari bilan egri chiziq** o‘rniga nuqtalar qafasini kuzatadi.
- **Tugun qo‘shish**, **Darajani oshirish** va **Darajani pasaytirish** egri chiziqni siljitmasdan tavsifini o‘zgartiradi (pasaytirish, egri chiziq tolerantlikdan ko‘proq siljiydigan bo‘lsa, rad etadi). **Egri chiziqni qayta qurish** unga yangi nazorat nuqtalari sonini beradi va qancha siljiganini aytadi.
- **Egri chiziqni moslash** bir egri chiziqning uchini boshqasining uchi bilan G0 (tegish), G1 (bir yo‘nalish) yoki G2 (egrilik ham bir xil) bilan uchrashtiradi. **Egri chiziqni aralashtirish** ikki uch orasida yangi egri chiziq qo‘shadi, G1 yoki G2.

## Sirtlar

- Ikki yoki undan ko‘p egri chiziq bo‘ylab **Loft**, ikki orasida **Chiziqli sirt**, **Egri chiziqni ekstrudirlash**, **Egri chiziqni aylantirish**.
- **Bitta relsda sweep** profilni buralmasdan yo‘l bo‘ylab olib yuradi; **Ikki relsda sweep** profil uchlarini ikkala relsda ushlab turadi. Sweeplar moslanadi: natija haqiqiy sweepdan qanchalik yaqin qolganini aytadi.
- **Egri chiziqlar tarmog‘idan sirt** egri chiziqlar setkasidan o‘tadi (har biri boshqalarning har biri bilan bir marta kesishadi). **To‘rt qirradan yama** burchaklarida uchrashgan to‘rtta egri chiziqni to‘ldiradi.
- **Sirtni moslash** sirt qirrasini qo‘shni bilan G0, G1 yoki G2 bilan uchrashtiradi; **Sirtni aralashtirish** ikki qirra orasiga sirt qo‘shadi.
- **Sirtni siljitish**, **Sirtni cho‘zish** (sirt oldingi yo‘nalishda davom etadi), **Sirtni qayta qurish**.

## Sifatni tekshirish

**Umumiy qirralar** jadvali ikki sirt bo‘lishadigan har bir qirrani sanaydi: oraliq (mm), ular orasidagi burchak (°) va egrilik sakrashi (1/mm), va bu uni G0, G1 yoki G2 qiladimi. So‘raganingizdan yomonroq qirra **Muammolar** da **Moslash** tuzatish bilan chiqadi. **Zebra** chiziqlari va **egrilik** ranglari aniq sirtdan keladi: qirra orqali uzilmasdan davom etadigan chiziqlar G1 degani; kengligini ham saqlaydigan chiziqlar G2 degani.

G0–G2 har bir qirrada 33 nuqtada o‘lchanadi. **G3 va "A sinf" sifati o‘lchanmaydi**, ularning sifati haqida hech narsa tasdiqlanmaydi.

## Sirtni qirqish

**Qirqish** guruhi sirtni shaklini o‘zgartirmasdan kesadi: sirt barcha nazorat nuqtalarini saqlaydi va faqat kontur ichidagi qism ko‘rsatiladi, hisoblanadi va yoziladi. **To‘g‘ri to‘rtburchakka qirqish** va **Aylanaga qirqish** har bir yo‘nalishdagi sirtning ulushi (0 dan 1 gacha) bo‘yicha ishlaydi, shuning uchun ko‘rinishda tanlash talab qilinmaydi; **Egri chiziq bilan qirqish** sirtda yotgan yopiq egri chiziqni oladi (u sirtga proyeksiyalanadi va ochiq yoki tolerantlikdan uzoq bo‘lsa, so‘zlar bilan rad etiladi). **Teshik kesish** katakchasini belgilang, kontur ichini olib tashlash uchun; uni qoldirsangiz faqat ichkarisi qoladi. Sirtda bitta saqlangan kontur va istalgancha teshik bo‘lishi mumkin; boshqasini kesib o‘tadigan kontur rad etiladi. **Qirqishni olib tashlash** butun sirtni qayta ko‘rsatadi. Panelning Ortga qaytarish tugmasi qirqishni boshqa qadamlar kabi qaytaradi.

STEP qirqishni yuz chegarasi sifatida, IGES esa qirqilgan sirt sifatida (obyekt 144) saqlaydi; ikkalasi ham qaytaradi.

## Qattiq jismlar va Bul amallari

**Qattiq jismlar** guruhi sirtlarni yopiq jismlarga aylantiradi va ularni birlashtiradi. Bu yerda qattiq jism — panelning o‘z sirtlari to‘plami, ular birgalikda hajmni yopadi; uning yuzlari qirqishlari bilan aniq NURBS sirtlari bo‘lib qoladi.

- **Quti qattiq jismi**, **Silindr qattiq jismi** va **Sfera qattiq jismi** kiritilgan o‘lchamlardan (mm) yasaydi: oltita tekis yuzli quti, yumaloq yon va aylanaga kesilgan ikki tekis uchli silindr, bitta aylantirilgan sirtli sfera.
- **Sirtlardan qattiq jism** o‘zingiz yasagan sirtlarni guruhlaydi. Ularni tanlang yoki hech birini tanlamasdan ko‘rinib turgan, hali qattiq jismda bo‘lmagan hamma sirtni ishlating. Ular tolerantlik ichida tikiladi: yopilmasa, hech narsa o‘zgarmaydi va panel nechta qirra ochiq qolganini va ular qanchalik yaqin uchrashishi kerakligini aytadi.
- **Birlashtirish**, **Ayirish** (ikkinchi qattiq jism birinchisidan olib tashlanadi) va **Kesishish** (ikkalasi umumiy bo‘lgan narsa) ikki qattiq jismni oladi: ko‘rinishda har birining yuzini bosing yoki **Qattiq jismlar** ro‘yxatida **Tanlash** tugmasini bosing. **Ikki qattiq jismni saqlash** katagini belgilang, ularni natija yonida qoldirish uchun.

Bul har bir yuzni o‘z aniq sirtida saqlaydi va uni kesishish bo‘ylab yangi kontur bilan kesadi. Natija qatori o‘lchangan raqamlarni beradi: qattiq jism dvigatelining nuqtalari aniq sirtlarga o‘tirishi uchun qancha siljishi kerak bo‘lgani (hech qachon tolerantlikdan ko‘p emas), kesishish nuqtalari ikkala sirtga qanchalik yaqin (odatda millionning bir necha qismi mm), hajm, va yangi yuzlar aniq sirtlaridan qayta tikilganda yana yopilishi. Hajmlar tolerantlik ichidagi uchburchaklarda o‘lchanadi (o‘zingiz boshqasini qo‘ymasangiz 0,05 mm), shuning uchun sfera yoki silindr hajmi aniq hajmdan biroz past chiqadi: kichikroq tolerantlik yaqinroq qiladi. Toza bajarib bo‘lmaydigan Bul (qattiq jismlarda umumiy hech narsa yo‘q, kontur o‘z-o‘zini kesadi) so‘zlar bilan rad etiladi va hech narsa o‘zgarmaydi. Bitta Bul panelning **Ortga qaytarish**ining bitta qadami.

**Qattiq jismlar** ro‘yxatida **Guruhdan chiqarish** yuzlarni oddiy sirt sifatida saqlaydi; chiqindi qutisi qattiq jismni va uning yuzlarini o‘chiradi.

## Yumaloqlash va qalinlashtirish

**Yuzlar orasida yumaloqlash** bitta qattiq jismning ikki yuzi uchrashadigan qirrani yumaloqlaydi: ikki yuzni tanlang (ko‘rinishda yoki ro‘yxatdagi **Tanlash** bilan), **radius** ni va qirra bo‘ylab o‘zgaradigan radius uchun **oxirdagi radius** ni yozing (0 bitta radiusni saqlaydi). Shu radiusli shar qirra bo‘ylab ikkala yuzga tegib yumaladi; yumaloqlash har bir nuqtada qoldiradigan aniq aylana yoy, bitta sirtga birlashtirilgan, va ikki yuz shar tegadigan joyda kesiladi. Tashqi qirra materialni yo‘qotadi, ichki burchak esa qo‘shadi. Natija qatori o‘lchanganlarni beradi: yumaloqlash sirti sharning yumalashidan qanchalik uzoq (nuqtalar tolerantlikning chorakidan kichik bo‘lguncha qo‘shiladi), har bir yuz bilan tegish chiziqlari bo‘ylab eng katta burchak va Birlashtirish bilan bir xil raqamlar. Mos kelmaydigan radius (shar yuzdan chiqib ketadi yoki yuz radiusdan qattiqroq egiladi) yuz nomi bilan rad etiladi va hech narsa o‘zgarmaydi.

**Bir nechta qirrani yumaloqlash** bir qadamda ko‘p qirrani yumaloqlaydi: birinchi qirraning ikki yuzini, so‘ng keyingi qirraning ikki yuzini tanlang va hokazo (yuz bir nechta juftlikda bo‘lishi mumkin, masalan quti usti to‘rtta juftlikda); hamma qirralar siz yozgan radiusni oladi. Har bir yumaloqlash o‘sha qattiq jismda hisoblanadi, so‘ng ketma-ket kesiladi, shuning uchun tartib ahamiyatga ega emas. Yumaloqlangan ikki qirra burchakda uchrashib, uning boshqa qirralari o‘tkir qolsa, ikki yumaloqlash kesishish egri chizig‘i bo‘ylab bir-biriga kiradi (burma). Bir radiusli uchta yumaloqlangan tashqi qirra uchta tekis yuzdan o‘zaro perpendikulyar uchrashsa, burchak uchala yumaloqlashga tegadigan bitta **sfera yamasi** bo‘ladi (burchaklarni burma qilish uchun **Burchaklar** katagini olib tashlang); qirra ikki uchi ham shunday burchak bo‘lsa, uzunligi kamida radiusning ikki baravari bo‘lishi kerak. Natija qatorida nechta qirra yumaloqlangani va burchaklar qanday chiqqani aytiladi. Ichki qirralarni ham birga yumaloqlash mumkin, lekin qayta yopilmaydigan natija faqat xabar qilinadi (qator buni aytadi), shuning uchun uni tekshiring.

**Qattiq jismga qalinlashtirish** sirtga qalinlik beradi: uni tanlang, **qalinlik** ni yozing va boshqa tomonga o‘stirish uchun **Boshqa tomon** ni belgilang. Ofset yuz sirtga moslanadi va unga qarshi o‘lchanadi (natija qatori qalinlikdan eng katta farqni beradi); devorlar har bir qirra va har bir kesish konturiga ergashadi. Agar sirt shu tomonda qalinlikdan qattiqroq egilsa yoki sirtning boshqa qismi qalinlikdan yaqinroq yotsa, joy va sirt nomi bilan rad etiladi va hech narsa o‘zgarmaydi.

## Qattiq jismni detalga qotirish

**Qotirish** (Sirtlar asboblar panelida) yoki **Detalga qotirish** **Qattiq jismlar** ro‘yxatida qattiq jismni detalning jismiga aylantiradi, xuddi ochilgan STL kabi: qattiq jismni tanlang, u detalga **qo‘shiladimi**, undan **kesiladimi** yoki unga **kesishadimi**, va tolerantlikni (uchburchaklar aniq sirtlardan qancha uzoq bo‘lishi mumkin). Bu detalning Ortga qaytarishining bitta qadami va xususiyatlar ro‘yxatida qattiq jism nomi bilan import sifatida chiqadi. Detal uchburchaklarni saqlaydi, shuning uchun sirtlarsiz ochiladi va qayta quriladi; aniq qattiq jism Sirtlar da qoladi, o‘zgarishdan keyin uni yana qotirishingiz mumkin.

## Fayllar

Eksport **STEP** (AP242) yoki **IGES** egri chiziqlar va sirtlarni aynan shunday holda (B-spline egri chiziqlar va sirtlar, uchburchakka aylantirilmasdan) yozadi. Har bir sirt o‘z chegarasi bilan o‘z yuzi bo‘ladi; qattiq jism bitta yopiq qobiq sifatida yoziladi, har bir qirra ikki yuz tomonidan umumiy, boshqa CAD dasturlari kutganidek (holat qatori necha qattiq jism shu yo‘l bilan chiqqanini aytadi). IGES da xuddi shu qattiq jism bitta manifold qattiq B-rep (yopiq qobiq 514 ustida obyekt 186, yuzlar 510, halqalar 508, bitta qirra ro‘yxati 504 va bitta uchlar ro‘yxati 502); yuzlari qirra-qirra juftlashmaydigan qattiq jism alohida yuzlar sifatida yoziladi va qator buni aytadi. **Import…** bunday qattiq jismni STEP va IGES dan qattiq jism sifatida qaytaradi.

## Silliq korpus chiziqlari

**Silliqlash** (Sirtlar asboblar panelida) har bir egri chiziqni aniq shaklida o‘lchaydi — egilish yo‘nalishini o‘zgartiradigan burilish nuqtalari (inflexion), eng katta egrilik, tugunlaridagi egrilik sakrashlari va uning notekisligi — va burilish nuqtasi yoki sakrashi bo‘lganlarni, berilgan tolerantlik ichida qoladigan va burilish nuqtasi qo‘shmaydigan, eng kam nazorat nuqtalari bilan qayta quradi. Stansiyalar, suv chiziqlari va buttock chiziqlarini egri chiziq sifatida chizing, ularni silliqlang, so‘ng korpusni stansiyalar orqali **Loft** qiling va **Zebra** bilan tekshiring. Silliqlanmagan egri chiziqlar ham **Muammolar** da **Bu egri chiziqni silliqlash** tuzatishi bilan chiqadi. Yo‘nalishni o‘zgartirishi kerak bo‘lgan chiziq (S shaklidagi kesim) o‘sha bitta burilish nuqtasini saqlaydi. Korpusning siljishi, markazlari va tiklovchi yelkalari qattiq detaldan keladi: qarang: gidrostatika asbobi.

## Skanerdan sirtlar (teskari muhandislik)

Skanerlangan mesh bor detalni oching (ochilgan STL yoki qotirilgan jism), **Ish maydoni** qutisida **Sirtlar** ni tanlang va **Skanerlash** guruhida **Sirtlarni skanerga moslash** ni tanlang; detalning yasalgan meshi skanerdir. Asbob **tekisliklar**, **silindrlar**, **sferalar** va **konuslar** ni qidiradi (ishlangan detal aynan shulardan iborat; har bir qator topgan radiusi yoki yarim burchagini ko‘rsatadi), **yumaloqlashlarni** topadi (dumaloq qirralar va burchaklar: boshqa bir yoki undan ko‘p yuzga urinma kiruvchi kichik silindr yoki sfera, radiusi va ulagan yuzlari bilan), **halqali yumaloqlashlar** (tor: tekis yuz silindr yoki konus bilan uchrashadigan dumaloq qirra, radiusi va halqa radiusi bilan) va **o‘zgaruvchan yumaloqlashlar** (radiusi bo‘ylab o‘zgaradigan dumaloq qirra, har bir uchidagi radius bilan), **silliq, sekin egilgan bo‘lakka bitta erkin shakldagi yama** moslaydi va har bir yuzni u kelgan skan qismining konturiga kesadi, shuning uchun teshiklar va burchaklar saqlanadi. Variantlar: **tolerantlik** (mm da skanerlash nuqtasi tekislik yoki silindrdan qanchaga uzoq bo‘lib hali unga tegishli bo‘lishi mumkin va erkin shakldagi yama uchun maqsad), **eng kichik bo‘lak** (sirt maydonining ulushi) va **eng ko‘p yuzlar**. Bir xil skan va variantlar har doim bir xil yuzlarni beradi.

Natija jadval, har bir yuz uchun bitta qator: turi, qaysi uchburchaklardan kelgani va **skandan yuzga** o‘lchangan xato (rms, eng katta va tolerantlik ichidagi nuqtalar ulushi). O‘lchanadigan nuqtalar skanning uchlari va har bir uchburchakning o‘rtasi. Xato teskari yo‘nalishda o‘lchanmaydi (yuzdan skanga), shuning uchun skandan tashqariga cho‘zilgan yuz ko‘rinmaydi. Jadval ostidagi izoh moslash uchun juda kichik bo‘lgan maydon ulushini ham aytadi. Ko‘rinishda skan nuqtalari **chetlanish xaritasi** bo‘yicha ranglanadi: yuzda ko‘k, yarmigacha yashil, tolerantlikda yoki undan ko‘p qizil (**Chetlanish xaritasini ko‘rsatish** ni olib tashlab yashiring). O‘z ustiga qaytadigan bo‘laklar (masalan, erkin shakldagi yamalar bilan moslangan yopiq quvur) ro‘yxatda moslanmagan deb ko‘rsatiladi, hech qachon bitta sirtga majburlanmaydi.

**Sirtlarni qattiq jismga tikish** qattiq jismda bo‘lmagan har bir ko‘rinib turgan sirtni bitta yopiq qattiq jismga tikadi. Skan yuzlari faqat skanning o‘z xatosi ichida uchrashadi, shuning uchun u yopiladigan eng kichik ulanish masofasini sinaydi (siz o‘rnatgan **tikish masofasi** dan hech qachon katta emas) va yuzlar yopilmasa, so‘zlar bilan rad etadi. Hech qachon bo‘shliqni yamamaydi. Yumaloqlangan qirralari bor quti, yumaloqlashlar o‘z yuzlari sifatida topilgan bo‘lsa, tikiladi; yopilgan ulanish masofasi natijada ko‘rsatiladi. Qattiq jism so‘ngra Birlashtirish, Ayirish, Kesishish va **Detalga qotirish** bilan ishlaydi.

Bu nimani qilmaydi: **halqali yumaloqlash** (tor) faqat topilgan silindr yoki konusning o‘qi atrofida qidiriladi, **o‘zgaruvchan yumaloqlash** esa faqat ancha to‘g‘ri qirra bo‘ylab (uning kesimlari bir yo‘nalishga perpendikulyar kesiladi); boshqa joylarda ular yetarlicha silliq bo‘lsa erkin shakldagi yamalar sifatida chiqadi, aks holda tashlab yuboriladi; sferalar, konuslar va yumaloqlashlar tasodifiy namuna olish bilan topiladi, shuning uchun juda kichigi (bir necha uchburchak) o‘tkazib yuborilishi mumkin; chetlanish xaritasi skandan yuzlargacha masofani ko‘rsatadi, teskarisini emas; juda katta skanlar (300 000 uchburchakdan ko‘p) bu yerda rad etiladi. To‘liq aylanishli silindrning yuzlari teshiklar atrofida kesiladi, chok esa teshik yo‘q joyga qo‘yiladi. Unga ishonishdan oldin har bir yuzni skaningizga qarshi tekshiring.

## Hali qurilmagan

Uchrashadigan qirralarni egri yuzlarning burchagida yoki turli radiusli holda yumaloqlash (uchi aralashtirmasi), uchrashmaydigan yuzlar orasidagi yumaloqlash, qiya yoki egri yuzda tugaydigan ichki yumaloqlash, Bul va yumaloqlashlar uchburchaksiz sirtlarda hisoblangan (bu yerda qattiq jism dvigateli tolerantlik ichidagi uchburchaklarda ishlaydi va har bir nuqta keyin aniq sirtlarga qaytariladi), sirtlar o‘zgarganda ularga ergashadigan qotirilgan jism, sirtni Bul tashqarisida boshqa sirt bilan qirqish, to‘rtdan ortiq tomonli teshiklarni to‘ldirish, egri chiziqlarni sirtlarga proyeksiyalash.
