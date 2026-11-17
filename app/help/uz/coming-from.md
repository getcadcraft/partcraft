---
title: Boshqa parametrik modelerdan kelish
summary: Ish stoli parametrik detal modelerlarining odatlari PartCraft ga qanday mos kelishi va birinchi soatda tajribali foydalanuvchilarni chalgʻitadigan farqlar.
keywords: oʻtish, koʻchirish, tanish, xususiyatlar menejeri, dizayn daraxti, aqlli oʻlcham, boss ekstruziya, kesish ekstruziya, teshik ustasi, birikmalar, toʻqnashuv aniqlash, ortga qaytarish paneli, xususiyatlar paneli, sichqoncha, farqlar
from: fbacaee1
---

Agar siz SolidWorks da detal loyihalasangiz, PartCraft gʻoyalarining aksariyati tanish boʻladi: Old, Yuqori va Oʻng tekisliklardagi eskizlar, munosabatlar va aqlli oʻlchamlar, ortga qaytarish paneli bilan xususiyatlar tarixi va birikmalar bilan joylashtirilgan yigʻmalar. Ularga yetish usuli ba'zi joylarda boshqacha, va bu birinchi versiya kamroq ishlaydi. Bu sahifa odatlaringizni solishtiradi va kutilmagan holatlarni sanab oʻtadi.

## Odatlar, moslashtirilgan

| Siz odatlangansiz | PartCraft da |
|---|---|
| Chapdagi dizayn daraxti | Chapdagi tarix: tekisliklar, soʻng xususiyatlar, ularni ishlatadigan xususiyat ostida chekinib yozilgan eskizlar |
| Old, Yuqori va Oʻng tekisliklar | Xuddi shu uchtasi, koordinata boshi orqali. Old — XY tekisligi, Yuqori — XZ, Oʻng — YZ; Y yuqoriga qaraydi |
| Tekislik yoki yuzdagi eskiz, soʻng chiqish uchun tasdiqlash burchagi | {{ui:Eskiz}} ({{key:S}}) tanlangan tekislik yoki tekis yuzda; {{ui:Chiqish}} yoki yopilguncha {{key:Esc}} |
| Aqlli oʻlchamlash | {{ui:Oʻlcham}} ({{key:D}}). Bir yoki ikki narsani bosing, soʻng raqam qayerga tushishini tanlang. Qayerga qoʻyganingizga qarab gorizontal, vertikal yoki yoʻnalishli boʻladi |
| Xususiyatlar panelidagi munosabatlarni qoʻshish | Narsalarni tanlang, soʻng oʻng paneldagi munosabat tugmalari (Ustma-ust tushish, Gorizontal, Parallel, Urinma, Teng va hokazo) |
| Eskiz chizish paytidagi avtomatik munosabatlar | Tutib olish (snap) ustma-ust tushish, nuqta-egri chiziqda, gorizontal va vertikal munosabatlarni qoʻshadi |
| Koʻk / qora / qizil eskiz ranglari | Xuddi shu gʻoya: koʻk qisman aniqlangan, qora toʻliq aniqlangan, qizil ortiqcha aniqlangan. Chipda qolgan erkinlik darajalari koʻrsatiladi |
| Aylantirishlar uchun markaziy chiziq | {{ui:Markaziy chiziq}} ({{key:N}}); {{ui:Aylantirish}} boshqa oʻqni tanlamasangiz, birinchi markaziy chiziqdan foydalanadi |
| Eskiz yumaloqlash | Eskizda {{ui:Yumaloqlash}} ({{key:F}}): burchakni bosing, radiusni yozing |
| Qurilish geometriyasi almashtirgichi | {{ui:Qurilish}} ({{key:Q}}) |
| Ekstruziyali boss | {{ui:Ekstruziya}}: Koʻr, Oʻrta tekislik, Yuzgacha / keyingisigacha / uchigacha, Yuzdan ofset, ikkinchi yoʻnalish, konus va bitta kontur (Mintaqalarni tanlash) |
| Ekstruziyali kesish | {{ui:Kesish}}: avval Hammasidan oʻtish boʻladi; chuqur uchun Koʻrga oʻting |
| Aylantirilgan boss / kesish | {{ui:Aylantirish}} / {{ui:Koʻproq}} › {{ui:Aylantirib oyish}} |
| Yordamchi tekislik / oʻq / nuqta | {{ui:Koʻproq}} › {{ui:Tekislik}}, {{ui:Oʻq}}, {{ui:Nuqta}} (qarang: [Yordamchi tekisliklar, oʻqlar va nuqtalar](topic:reference-geometry)) |
| Surilgan yoki qoʻyilgan boss yoki kesish, qiyshaytirish | {{ui:Koʻproq}} › {{ui:Qoralama}} tekis yuzlarda (qarang: [Surish, qoʻyish va qoralama](topic:sweep-loft-draft)). {{ui:Sweep}} va {{ui:Loft}} bu versiyada hali tayyor emas (ularga aniq yadro kerak) |
| Teshik ustasi | {{ui:Teshik}} har bir boʻsh eskiz nuqtasida: oddiy, qoʻyma, konusli qoʻyma (90° / 82°) yoki ISO metrik M2–M24 rezba, oʻtib ketadigan yoki koʻr |
| Chiziqli / doiraviy massiv, aks ettirish | {{ui:Chiziqli}}, {{ui:Doiraviy}}, {{ui:Aks ettirish}} (xususiyatlar yoki butun jism) |
| Qirralarda yumaloqlash va faska | {{ui:Yumaloqlash}} / {{ui:Faska}}: qirrani bosing, {{key:Shift}}+bosish bilan yana qoʻshing, soʻng tugmani bosing. Bitta radius; teng, ikki masofali yoki masofa-burchak faskalar. Bu versiyada faqat ikki tekis yuz orasidagi toʻgʻri qirralar, va burchakda uchrashgan yumaloqlashlar qiyshiq kesiladi. Eskizda egri qirralarni yumaloqlang yoki faska qiling ({{ui:Yumaloqlash}} eskizda, {{key:F}}) |
| Qobiq | {{ui:Qobiq}}: ochish uchun tekis yuzlarni bosing, soʻng tugmani bosing. Bitta devor qalinligi |
| STEP faylini ochish | {{ui:Ochish}}: uchburchaklar sifatida oʻqiladi, qurish uchun qattiq jism ([STEP faylini ochish](topic:import-step)) |
| Xususiyatni tahrirlash, soʻng OK | Xususiyatni bosing; oʻngdagi raqamlarni oʻzgartiring; yozganingizda qayta quriladi. OK ham, Bekor qilish ham yoʻq: {{key:Mod+Z}} dan foydalaning |
| Eskizni tahrirlash | Tarixdagi eskizni ikki marta bosing |
| Qayta qurish | Har bir oʻzgarishdan keyin avtomatik. Qayta qurish tugmasi yoʻq |
| Bostirish / bostirishni bekor qilish | Oʻng paneldagi {{ui:Vaqtincha oʻchirish}} / {{ui:Qayta yoqish}} |
| Ortga qaytarish panelini surish | Xususiyatda {{ui:Shu yergacha qaytarish}}; "Ortga qaytarish paneli · oldinga qaytarish" ni bosib qaytarasiz |
| Daraxtda xususiyatni surib tartiblash | {{ui:Yuqoriga siljitish}} / {{ui:Pastga siljitish}} yoki {{key:Alt+Up}} / {{key:Alt+Down}}; bogʻliqlikni buzsa, sababi bilan rad etiladi |
| Modelda ikki marta bosib oʻlchamlarni tahrirlash | Xususiyatni tanlang: uning eskizining oʻlchamlari oʻng panelda koʻrsatiladi |
| Munosabatlar: ustma-ust tushish, konsentrik, masofa, burchak | {{ui:Joint}} ({{key:J}}): har bir detalda tekis yuzni tanlang; birikma ularni yuzma-yuz qoʻyadi. Oʻqda **Markazlash** konsentrik kabi ishlaydi; **Ofset** masofa kabi; **Burchak** burchak kabi |
| Mahkamlangan komponent | Birinchi detal mahkamlangan; {{ui:Uni mahkamlangan detal qilish}} uni oʻzgartiradi |
| Komponent kiritish | {{ui:Nusxa qoʻshish}} yoki {{ui:Nusxa}} (yana nusxa) yoki {{ui:Qoʻshish}} (detal faylidan) |
| Yigʻmada detalni tahrirlash | {{ui:Detalni tahrirlash}}, soʻng {{ui:Orqaga}} |
| Interferensiyani aniqlash | {{ui:Toʻqnashuv}} |
| Komponentning harakatini koʻrish uchun siljitish | Aylanuvchi yoki surgichli birikmaning burchak yoki ofset surgichini suring; {{ui:Harakat davomida toʻqnashuvlarni tekshirish}} uni surib koʻradi. Birikmasi boʻlmagan detal: **Qoʻlda siljitish** (sudrash uchun strelkalar yoki kiritilgan qiymatlar) |
| Oʻlchash / tekshirish | {{ui:Koʻrinishlar}}, soʻng {{ui:Oʻlchash}} ({{key:M}}): masofalar, burchaklar, radiuslar, maydonlar; {{ui:Massa xususiyatlari}} |
| Yoyilgan koʻrinish, materiallar roʻyxati | Yigʻmada hech narsa tanlanmagan boʻlsa: oʻng panelda **Yoyilgan koʻrinishlar** va **Materiallar roʻyxati** |
| Massa xususiyatlari | **Detal** qutisi: hajm, sirt maydoni, oʻlcham, qirrali jismniki (dumaloq detallarda biroz kam). Massa yoʻq: hali materiallar yoʻq |
| Saqlash, STEP sifatida saqlash | {{ui:Saqlash}} `.partcraft.json` ni yuklab oladi; {{ui:Eksport}} da STL, 3MF, aniq STEP (AP242 yoki AP214), qirrali STEP, DXF va PDF chizma bor |
| Chizmani detaldan yaratish | {{ui:Chizma}}: avtomatik A3 varaq, uchta koʻrinish, izometrik, bitta kesim, bitta detal, datumlar, shakl boshqaruv ramkalari va pardozlash belgilari. Faqat umumiy oʻlchamlar qoʻyiladi |
| Oʻrta tugma bilan aylantirish | Bu yerda **chap tugma bilan surish** aylantiradi. Oʻrta yoki oʻng tugma bilan surish. Gʻildirak koʻrsatkichda kattalashtiradi |
| Koʻrinish yoʻnalishi, Normal boʻylab | {{ui:Koʻrinishlar}} menyusi; tanlangan yuz, tekislik yoki eskiz uchun {{ui:Normal boʻylab}} |
| Butun koʻrinishga kattalashtirish (F) | {{key:F}}, yoki {{ui:Moslash}} (eskizda {{key:F}} Yumaloqlash asbobi) |
| Oʻng tugma menyulari | Yoʻq. Oʻng tugma bilan surish; eskizda oʻng tugma chiziq zanjirini tugatadi |

:::tip
Agar qoʻllaringiz SolidWorks ni bilsa, {{ui:Sozlamalar}} › {{ui:PartCraft}} › {{ui:Menyular, tugmalar va sichqoncha}} da {{ui:Xususiyatlar daraxti}} menyu uslubini tanlang: Xususiyatlar, Eskiz, Sirtlar, Baholash, Chizma, Yigʻma va Koʻrinish yorliqlaridan iborat ribbon chiqadi, oʻrta tugma aylantiradi, {{key:Shift}} va oʻrta tugma suradi, chap tugma esa faqat tanlaydi. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).
:::

## Kutilmagan farqlar

**Butun eskiz profil hisoblanadi.** Ekstruziya va aylantirish eskizdagi har bir yopiq halqani ishlatadi. Xususiyat uchun eskizning bitta mintaqasini yoki bitta konturini tanlay olmaysiz. Har bir xususiyat uchun bitta eskizdan foydalaning.

**Qaysi eskizni xususiyat oladi.** Xususiyat siz hozir yopgan yoki tarixda tanlangan eskizni oladi. Hech narsa tanlanmagan boʻlsa, hali hech bir xususiyat ishlatmagan eng yangi eskizni oladi. Notoʻgʻri eskizni olsa, toʻgʻri eskizni tanlang va xususiyatni qayta tanlang.

**Oʻzgarishlar yozganingizda qoʻllanadi.** OK va Bekor qilish bilan xususiyat oynasi yoʻq. Har bir raqam darhol qayta quriladi, orqaga qaytish yoʻli esa {{key:Mod+Z}}. Ortga qaytarish roʻyxati eskiz tahrirlari, xususiyatlar va sozlamalarni birga qamraydi.

**Ortiqcha aniqlangan hech qachon jim qolmaydi.** Mos yozuvdagi (reference) oʻlchamlar yoʻq. Boshqa munosabatlar allaqachon belgilab qoʻygan oʻlcham ortiqcha aniqlangan deb xabar qilinadi ("allaqachon nazarda tutilgan. Uni oʻchiring."). Bir-biriga zid oʻlcham geometriyani oʻzgartirmaydi va qizil rangga aylanadi. Birini oʻchiring yoki ortga qaytaring.

**Sirtlar va yoyib-qoʻyishlar hali tayyor emas; yumaloqlash, faska, qobiq va qoralamada cheklovlar bor.** Bu PartCraft versiyasi har bir detalni mesh yadrosi bilan yasaydi; holat satridagi chip doim "Mesh kernel" deydi. Yumaloqlash va faska faqat ikki tekis yuz orasidagi toʻgʻri qirralarda ishlaydi, burchakda uchrashgan yumaloqlashlar esa qiyshiq kesiladi, aralashtirilmaydi. Qobiqlar ochiladi, qiyshaytirishlar faqat tekis yuzlarda ishlaydi. Aniq yadroni talab qiladigan xususiyatlar bosiladigan boʻlib qoladi, lekin tanlanganda "hali tayyor emas" deydi. Qarang: [Mesh yadrosi](topic:solid-kernels) va [Hali tayyor emas](topic:not-built-yet).

**Ikki tugma Yumaloqlash deb ataladi.** Eskizda {{ui:Yumaloqlash}} ({{key:F}}) eskiz burchagini yumaloqlaydi. Detalda guruhdagi {{ui:Yumaloqlash}} qattiq jism qirralarini yumaloqlaydi (bu versiyada tekis yuzlar orasidagi toʻgʻri qirralar). Bu versiyada yoyib-qoʻyish yoʻq: qarang [Hali tayyor emas](topic:not-built-yet).

**Teshiklar boʻsh nuqtalarni talab qiladi.** {{ui:Teshik}} Nuqta asbobi bilan yaratilgan nuqtalarda teshik ochadi. Aylana markazlari va chiziq uchlari hisoblanmaydi.

**Hammasidan oʻtish faqat kesishlar uchun.** Boss uchun chuqurlik kerak. "Uchigacha / sirtgacha / keyingisigacha" tugash shartlari hali yoʻq.

**Qattiq jism qirrali.** Mesh yadrosi dumaloq yuzlarni tekis qirralardan yasaydi, shuning uchun koʻrinish, hajmlar, STL va 3MF eksportlari ulardan iborat: detal panelidagi **Egrilar** ularni nozikroq qiladi. Aniq STEP eksporti unday emas: u dumaloq yuzlarni ularning haqiqiy sirtlarida yozadi.

**Faqat millimetrlar.** Hali dyuym sozlamasi yoʻq. Dyuym oʻlchamlarini kiritganda 25.4 ga koʻpaytiring.

**Y yuqoriga qaraydi.** Old tekislik sizga qaraydi va Yuqori detalga tepadan qaraydi, siz kutganingizdek, lekin dunyo yuqori oʻqi — Y. STL, 3MF va aniq STEP eksportlari Z yuqoriga qaratiladi; qirrali STEP esa Y yuqorida qoladi.

**Birikmalar geometriya juftliklari emas, yuzlar.** Birikma doim ikki tekis yuzdan boshlanadi, ular yuzma-yuz qoʻyiladi. Teshikdagi pin uchun teshik atrofidagi tekis yuzni va pinning elkasini tanlang, soʻng **Markazlash** ni teshik oʻqi va pinning aylantirish oʻqiga qoʻying. Birikmalar yetmagan detallar qoʻyilgan joyida qoladi; ularni sudrab boʻlmaydi. Halqadagi birikmalar yechilmaydi.

**Saqlash bu yuklab olish.** Doim qayta yoziladigan fayl yoʻq. Har bir saqlash yuklab olish papkangizda yangi fayl boʻladi. Avval detalga nom bering va fayllaringizni loyiha papkasida saqlang.

**Eskizda tugmalar bitta harf.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} va {{key:S}} modifikatorsiz asboblarni tanlaydi. Qarang: [Tugmalar va sichqoncha](topic:keyboard).
