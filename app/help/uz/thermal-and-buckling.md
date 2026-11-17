---
title: Issiqlik, termik kuchlanish va buklanish
summary: Qoʻzgʻalmas harorat, issiqlik oqimi, issiqlik quvvati, konveksiya va nurlanishdan (barqaror yoki vaqt boʻyicha) detaldagi haroratni toping, harorat oʻzgarishi bilan kuchlanish hisobini yuklang va ingichka detal qaysi yuklamada buklanishini toping, har bir usul nimani koʻrsata olishi va nimani koʻrsata olmasligi bilan.
keywords: termik, issiqlik oʻtkazuvchanligi, issiqlik, harorat, konduksiya, konveksiya, issiqlik berish koeffitsiyenti, nurlanish, emissivlik, issiqlik oqimi, issiqlik quvvati, issiqlik hosil qilish, issiqlik qabul qilgich, oʻtish jarayoni, vaqt, sovitish, isitish, Crank-Nicolson, implicit Euler, issiqlik balansi, termik kuchlanish, vaqt boʻyicha termik kuchlanish, oʻtish termik kuchlanishi, suvda sovitish, termik zarba, kuchlanish tarixi, eng yomon vaqt, termik kengayish, kengayish koeffitsiyenti, buklanish, Eyler buklanishi, yuklama koeffitsiyenti, kritik yuklama, ustun, ingichka, xos qiymat
from: 1a1b7545
---

Bu tahlillar Simulation ish maydonida statik kuchlanish va tabiiy chastotalar yonida joylashgan (qarang [Kuchlanish va egilishni tekshirish](topic:simulation)). Ularni panelning **Turi** maydonida tanlang. Ular bir xil kub tarmogʻini va bir xil material roʻyxatini ishlatadi; har bir kutubxona materialida issiqlik oʻtkazuvchanligi, solishtirma issiqlik sigʻimi va kengayish koeffitsiyenti bor (taxminiy qiymatlar, **Xususiyatlar** ostida koʻrsatilgan).

## Termik: issiqlik qayerga ketadi?

1. **Turi** sifatida **Termik (issiqlik uzatish)** ni tanlang.
2. Panelning **Qoʻshish** roʻyxatidan termik shartlarni qoʻshing, soʻng ularning yuzlarini bosing (tayanch va yuklamalardagi kabi):
   - **Qoʻzgʻalmas harorat**: yuz °C da belgilangan haroratda ushlanadi.
   - **Issiqlik oqimi**: yuzga kiruvchi W/m² (manfiy qiymat chiquvchi oqim). U yuzaning haqiqiy maydoniga taalluqli, hatto kublar pogʻonali shakl hosil qilgan joyda ham.
   - **Issiqlik quvvati**: tanlangan yuzalar boʻyicha maydoniga qarab taqsimlangan vattlardagi umumiy qiymat. Isitgich yoki maʼlum quvvatli chip uchun ishlating.
   - **Konveksiya**: harorati berilgan havo yoki suyuqlik issiqlikni h W/(m²·K) bilan olib ketadi. Odatiy h: harakatsiz havo 5–10, ventilyator 25–100, suv 500–10,000. PartCraft h ni hisoblamaydi: bu tahlilda suyuqlik oqimi yoʻq.
   - **Nurlanish**: yuz atrof-muhitga harorati boʻyicha nurlanadi, emissivlik 0 dan 1 gacha. U **chiziqlashtirilgan** (nurlanish haroratga bogʻliq koeffitsiyent sifatida yoziladi va barqarorlashguncha qayta yechiladi) va faqat atrof-muhitga yoʻnaladi: yuzalar bir-biriga issiqlik almashmaydi.
3. **Issiqlik hosil qilish** (W/m³) detalni ichkaridan butunlay isitadi, masalan, qarshilikli detal.
4. **Hisoblash** tugmasini bosing. Detal harorat boʻyicha rangga boʻyaladi; issiqlik qayerga oqishini koʻrish uchun **Koʻrsatish** da **Issiqlik oqimi** ni tanlang. Ikkalasini oʻqish uchun detal ustiga koʻrsatkich olib boring.

Barqaror issiqlik oqimi uchun issiqlik ketadigan joy kerak: kamida bitta qoʻzgʻalmas harorat, konveksiya yoki nurlanish. Faqat issiqlik qabul qiladigan detalning barqaror holati yoʻq; uni oʻrniga vaqt boʻyicha hisoblang.

Jadvalda eng past va eng yuqori harorat hamda ularning joylashuvi, eng katta issiqlik oqimi va **issiqlik balansi** koʻrsatiladi: har bir shartga kirgan yoki chiqqan issiqlik (qoʻzgʻalmas harorat talab qilgan yoki yutgan miqdorni hisoblaydi), hosil boʻlgan issiqlik, kirish va chiqish jami va **nomuvofiqlik**. Nomuvofiqlik kirgan issiqlikning kichik ulushi boʻlishi kerak; katta boʻlsa, natijaga ishonib boʻlmaydi.

### Vaqt boʻyicha (oʻtish jarayoni)

**Oʻtish** ni belgilang va **Boshlangʻich harorat** (butun detal shu haroratdan boshlanadi), **Vaqt oraligʻi** hamda **Vaqt qadamlari** sonini kiriting. **Implicit Euler** barqaror; **Crank–Nicolson** xuddi shu qadamlarda aniqroq, lekin keskin oʻzgarishdan keyin tebranishi mumkin. Hisoblagandan keyin har bir momentdagi haroratni koʻrish uchun **Vaqt** surgichini suring (rang shkalasi har bir moment uchun bir xil qoladi). Shunda issiqlik balansiga toʻplanayotgan issiqlik ham kiradi.

## Termik kuchlanish: harorat oʻzgarishi detalga nima qiladi?

**Statik kuchlanish** (yoki **Buklanish**) tahlilida **Termik yuklama** ni belgilang:

- **Bir xil harorat oʻzgarishi**: butun detal shuncha kelvinga isiydi (yoki sovuydi, manfiy son bilan).
- **Termik shartlardan harorat**: shu tahlilga termik shartlarni qoʻshing; avval barqaror haroratlar bir xil tarmoqda yechiladi, soʻng detal α·(T − **kuchlanishsiz harorat**) qadar kengayadi.
- **Vaqt boʻyicha harorat (oʻtish hisobi)**: termik shartlarni qoʻshing, soʻng **Boshlangʻich harorat**, **Vaqt oraligʻi**, **Vaqt qadamlari** va **Vaqt qadamlash** ni xuddi oʻtish termik tahlilidagidek kiriting. Haroratlar bir xil tarmoqda vaqt boʻyicha yechiladi (kublar yoki tetraedrlar), har bir moment haroratiga statik yechim shu moment kuchlanishini beradi. **Kuchlanish vaqti**:
  - **Eng yomon vaqt** (boshlanish): **Kuchlanish yechimlari** hisob oraligʻida teng taqsimlangan momentlarni hisoblaydi, boshlanish ham kiradi (oʻzgartirmasangiz 21, eng koʻpi 51). Natijalar eng katta von Mises kuchlanishi boʻlgan momentda ochiladi; jadvalda u nomlanadi, kichik diagrammada choʻqqi kuchlanishi vaqtga qarshi koʻrsatiladi va **Vaqt** surgichi hisoblangan har bir momentdagi kuchlanishni koʻrsatadi (rang shkalasi eng yomon moment shkalasi boʻlib qoladi).
  - **Tanlangan bitta vaqt**: bitta moment, siz bergan **Vaqt (s)** ga eng yaqin vaqt qadami. Buklanish tahlili har doim bitta tanlangan vaqtni oladi (oʻzingiz belgilamasangiz, hisob oxiri).

Suvga botirilgan (issiqdan sovuqqa tushirilgan) yoki birdan isitilgan detal ichki va tashqi qismlar eng koʻp farq qilganda eng koʻp kuchlanadi: koʻpincha aynan boshida. Ushlab turilgan harorat birinchi lahzadan boshlab sakrash kabi qoʻllanadi, shuning uchun boshidagi kuchlanish element oʻlchamiga bogʻliq (oʻzgarishni faqat bir necha element sezadi). Uni "juda yuqori" deb oʻqing va surgichning keyingi momentlariga qarang: tarmoq aniq koʻrsatadigan qiymatlar shu yerda. Kuchlanish kvazistatik: inersiya yoʻq, keskin oʻzgarishdan tebranish yoʻq.

Oʻsishga erkin boʻlgan detalda termik kuchlanish yoʻq: u faqat harakatlanmasligi uchun yetarlicha ushlansin (masalan, toʻgʻri burchak ostidagi uchta ishqalanishsiz yuz). Ikki devor orasida siqilgan boʻlsa, u siqiladi: qattiq devorlar orasida 50 K isitilgan poʻlat sterjen taxminan 117 MPa kuchlanish saqlaydi. Termik yuklamalar oʻzini muvozanatlaydi, shuning uchun reaksiyalar hali ham faqat mexanik yuklamalarni muvozanatlaydi.

## Buklanish: ingichka detal qachon buziladi?

1. **Turi** sifatida **Buklanish (chiziqli)** ni tanlang va statik tahlildagidek tayanch va yuklamalar qoʻshing.
2. **Topiladigan yuklama koeffitsiyentlari** ni belgilang (nechta buklanish rejimi).
3. **Hisoblash** ni bosing. Har bir rejimda **yuklama koeffitsiyenti** bor: ideal detal buklanadigan yuklamalaringiz karrali. 3 koeffitsiyent yuklamalaringizning uch baravari degani; **1 dan kichik yuklama koeffitsiyenti esa u qoʻllangan yuklamalar ostida buklanishini bildiradi**. Jadvalda har bir koeffitsiyentdagi umumiy yuklama ham koʻrsatiladi. Rejim shakli buklanish qanday sodir boʻlishini koʻrsatadi (uning kattaligi maʼnoga ega emas).

**Chiziqli buklanish haqiqiy buklanish yukini oshirib baholaydi.** U ideal detalni nazarda tutadi: mukammal toʻgʻri, qoldiq kuchlanishsiz va elastik. Haqiqiy detallarda kichik nuqsonlar bor va ular avval oqishi mumkin, yupqa devorli qobiqlar esa chiziqli qiymatning bir qismida buklanishi mumkin. Katta zaxira qoldiring va yupqa qobiq uchun 3 ga yaqin yoki undan past yuklama koeffitsiyentini ogohlantirish deb hisoblang.

## Qanchalik ishonish mumkin

PartCraft bu yechuvchilarni qoʻlda hisoblangan formulalar bilan tekshiradi: ikki harorat orasidagi sterjen (aniq), sovitish qanoti (0.3 K ichida), oʻzini isitayotgan plita (aniq), vaqt boʻyicha sovib borayotgan kub (Crank–Nicolson bilan 0.1 % ichida), bir uchidan birdan isitilgan sterjen, erkin isitilgan sterjen (kuchlanish yoʻq, ΔL = αLΔT), devorlar orasidagi sterjen (σ = −EαΔT), vaqt boʻyicha suvda sovitilgan plita klassik qatorli yechimga qarshi (kublarda 1 % ichida, tetraedrlarda plita markazida 2.1 %, sirtida 0.5 %), uzun hisobning oxirgi momenti barqaror termik kuchlanishga qarshi (millionning bir ulushigacha bir xil) va Eyler ustunlari (bir uchi qotirilgan–erkin 1 %, ikki uchi sharnirli 1.5 % ichida). Esda tuting:

- **Doimiy material qiymatlari.** Oʻtkazuvchanlik, solishtirma issiqlik sigʻimi va kengayish bu yerda harorat bilan oʻzgarmaydi; bir necha yuz darajada ular 10–30 % ga oʻzgarishi mumkin. Bikrlik ham oʻzgarmaydi.
- **Vaqt boʻyicha kuchlanish kvazistatik va elastik**: har bir moment statik yechim (inersiyasiz), oqish yoʻq, shuning uchun sirtni oqitadigan suvda sovitish oqish kuchlanishidan yuqori kuchlanish koʻrsatadi.
- **Konveksiya koeffitsiyentlari siz kiritadigan qiymat**, havo yoki suv oqimidan hisoblanmaydi.
- **Kontakt qarshiligi yoʻq**: detal bitta yaxlit jism.
- **Faqat chiziqli buklanish**: nuqsonlar, oqish va buklanishdan keyingi xatti-harakat yoʻq.
- Kub pogʻonasi va ichki oʻtkir burchaklar termik kuchlanishga boshqa kuchlanishlar kabi taʼsir qiladi (qarang [Kuchlanish va egilishni tekshirish](topic:simulation)).
- Bu laboratoriya versiyasi: muhim detallarni boshqa usulda tekshiring.

## Bogʻliq

- [Kuchlanish va egilishni tekshirish (Simulation)](topic:simulation)
- [Hali qurilmagan](topic:not-built-yet)
