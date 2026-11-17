---
title: Bosma, STEP va DXF uchun eksport
summary: Detalni 3D bosma uchun STL yoki 3MF sifatida, boshqa CAD va CAM dasturlari uchun aniq STEP jism sifatida, eskizni yoki tekis yuzni lazer va suv oqimli kesish uchun DXF sifatida eksport qiling.
keywords: eksport, boshqacha saqlash, ifc, bim, xususiyatlar toʻplamlari, stl, 3mf, 3d bosma, slayser, step, stp, aniq step, b-rep, ap242, ap214, cam, mashinasozlik sexi, frezalash, dxf, lazer, suv oqimi, cnc, tekis yoyilma, profil, mesh, faset
from: e1de71d5
---

Eksportlar boshqa formatdagi nusxalardir. `.partcraft.json` faylini ham saqlab qoling: u PartCraft qayta ochib tahrirlay oladigan yagona fayl.

Barcha eksportlar ekrandagi detal bilan ishlaydi, millimetrda. Yigʻmada STL, 3MF, STEP va Chizma (PDF) buning oʻrniga butun yigʻmani eksport qiladi: [Detallar roʻyxati, yoyilgan koʻrinishlar va harakatlanuvchi qismlar](topic:assembly-bom-explode) boʻlimiga qarang. Hali qattiq jism yoʻq boʻlsa: "Eksport qilish uchun hali qattiq jism yoʻq."

## 3D bosma uchun: STL yoki 3MF

1. Ixtiyoriy: silliq dumaloq yuzalar uchun boʻsh joyni bosing, shunda hech narsa tanlanmaydi, va oʻng panelda **Egri chiziqlar** ni **Nozik (aylanishiga 128 ta)** yoki **Juda nozik (aylanishiga 256 ta)** ga qoʻying. STL va 3MF doim uchburchaklardan iborat boʻladi.
2. {{ui:Eksport}} ni tanlang, soʻng {{ui:STL, 3D bosma uchun}} yoki {{ui:3MF, 3D bosma uchun}} ni tanlang.
3. Fayl yuklab olinadi. Holat satrida masalan shunday yoziladi: "Part1.stl eksport qilindi (binary, mm, Z yuqoriga, 1536 ta uchburchak)."

Ikkala format ham **Z yuqoriga** qaratilgan, chunki printerlar va slayserlar shunday kutadi. PartCraft ning oʻz dunyosi Y yuqoriga qaratilgan, shuning uchun eksport detalni buradi: PartCraft da yuqoriga qaragan narsa (Top tekisligiga perpendikulyar) slayserda ham yuqoriga qaraydi, va Top tekisligida chizilgan detal stol ustida tekis yotadi. Kerak boʻlsa, yakuniy yoʻnalishni slayserda sozlang.

3MF yangiroq, ixchamroq formatdir, slayserlar uni birliklari bilan birga oʻqiydi. Agar dastur 3MF ni qabul qilmasa, STL dan foydalaning.

Detal yopiq ekanini, printer stoliga sigʻishini va tekis yuzga turishini avval tekshirish uchun {{ui:Eksport}} › {{ui:3D bosma uchun tekshirish (STL yoki 3MF)…}} ni tanlang: [Detalni 3D bosmaga tayyorlash](topic:print-3d) boʻlimiga qarang.

## Boshqa CAD dasturlari uchun: STEP

{{ui:Eksport}} ni tanlang, soʻng {{ui:STEP AP242 (aniq yaxlit jism)}} ni tanlang. U detalni millimetrda, Z yuqoriga qaratilgan bitta aniq jism sifatida yozadi. Dumaloq yuzalar haqiqiy silindr, konus, sfera va torus sifatida yoziladi, ularning qirralari esa haqiqiy aylanalar boʻladi, shuning uchun boshqa dastur teshikni teshik sifatida tanlay oladi. STEP faylidan ochilgan jism oʻsha fayldagi tekis yuzalar, silindrlar, konuslar, sferalar va toruslarni saqlab qoladi, shuning uchun ular ham aniq eksport qilinadi. Bunday sirti boʻlmagan yuzalar (splayn yon tomoni, modellashtirilgan rezba, STL, OBJ yoki 3MF mesh faylidan olingan jism, STEP faylining splayni, sirtma-sirt va aylantirilgan yuzalar) oʻsha yaxlit jism ichida tekis faset boʻlib qoladi, va holat satri ularning sonini aytadi. Holat satri masalan shunday yozadi: "Flange.step eksport qilindi (AP242, aniq yaxlit jism, mm, Z yuqoriga): 14 ta yuza haqiqiy sirtlarida (10 silindrik, 1 konusli, 0 sferik, 0 torusli), 0 ta moslashtirilgan qirra egri chizigʻi." U faqat jismni saqlaydi: tarix, eskizlar yoki chizma yoʻq. Agar boshqa dastur faqat AP214 ni oʻqisa, {{ui:STEP AP214 (aniq yaxlit jism)}} ni tanlang: oʻsha jism eski sxemada.

Nima aniq va nima emas:

- Tekis yuzalar, silindrlar (teshiklar, buriqlar, toʻgʻri qirralardagi yumaloqlashlar), konuslar (zenkovkalar, qiyaliklar), sferalar va torus aniq, shuningdek ularning toʻgʻri, aylana va ellips qirralari ham. **Egri chiziqlar** sozlamasi ularni oʻzgartirmaydi.
- Ikki dumaloq yuza kesishgan joyda (valni kesib oʻtgan teshik), qirra ikkala sirtga 0.00001 mm aniqlikda moslashtirilgan silliq egri chiziq boʻladi; "moslashtirilgan qirra egri chiziqlari" ularni sanaydi.
- Detal ichidagi yopiq boʻshliq jismning boʻshligi sifatida yoziladi. Bir nechta alohida jism bir nechta yaxlit jism sifatida yoziladi.
- Yigʻma hali aniq STEP sifatida yozilmaydi: har bir detalni alohida eksport qiling.

U OpenCascade da qayta oʻqib tekshirilgan, haqiqiy yaxlit jismlar hajmi qoʻlda hisoblangan qiymatlarga mos keladi. Hali har bir CAD yoki CAM dasturida ochilib koʻrilmagan; agar biri faylni qabul qilmasa, {{ui:STEP (faset, mesh yadrosi)}} xuddi shu shaklni tekis yuzalar sifatida yozadi (PartCraft ning oʻz oʻqlarida, Y yuqoriga), va iltimos, {{ui:Yordam}} › {{ui:Muammo haqida xabar berish}} orqali bizga xabar bering.

Ishlab chiqarish boʻlimi ham aniq jismni qurilmaning oʻz ish koordinatalarida yozadi: [Yoʻl trayektoriyalari va G-kod yaratish](topic:manufacture#exact-step-for-the-shop) boʻlimiga qarang.

## BIM dasturlari uchun: barcha xususiyatlar bilan IFC

{{ui:Eksport}} ni tanlang, soʻng {{ui:IFC 4 (barcha xususiyatlar bilan)}} ni tanlang. U detalni bino va qurilma modellari uchun IFC 4 elementi sifatida yozadi, shakli uchburchaklar sifatida (Z yuqoriga, millimetrda), PartCraft biladigan maʼlumotlar esa xususiyatlar toʻplamlari sifatida:

| Xususiyatlar toʻplami | Oʻz ichiga oladi |
|---|---|
| **PartCraft_Part** | Nomi, materiali va uning zichligi, faol konfiguratsiya, jismlar soni; yigʻmada detal raqami va tavsifi ham |
| **PartCraft_Parameters** | Detalning har bir parametri va qiymati; formula ifodasi va izoh xususiyat tavsifida |
| **PartCraft_TitleBlock** | Chizma sarlavha blokida siz toʻldirgan maydonlar (sarlavha, chizma raqami, reviziya, kompaniya, chizgan, tekshirgan va tasdiqlagan, sana, pardozlash, umumiy tolerans) va varaq oʻlchami |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Hajm, sirt maydoni, massa (material bilan) va umumiy oʻlcham |

Material IFC materiali sifatida biriktiriladi, chizma raqami esa elementning tegi boʻladi. Yigʻmada har bir detal bir marta xususiyatlari bilan tur sifatida yoziladi, har bir nusxa esa yigʻma qoʻygan joyiga joylanadi va oʻz qiymatlari bilan **PartCraft_Instance** da yoziladi: nomi, detallar roʻyxatidagi tartib raqami va u mahkamlangan detalmi yoki yoʻqmi.

## Lazer, suv oqimi yoki CNC profillari uchun: DXF

Ikki tur DXF bor, ikkalasi ham R12 versiyasida, uni har bir CAD va CAM dasturi ochadi:

### Eskiz

1. Tarixda eskizni tanlang (yoki u ochiq boʻlsin).
2. {{ui:Eksport}} ni tanlang, soʻng {{ui:Eskiz yoki tekis yuzning DXF fayli}} ni tanlang. (Eskizning oʻng panelida ham {{ui:DXF sifatida eksport qilish}} bor.)

Siz `<part> - <sketch>.dxf` faylini olasiz, eskizning oʻz koordinatalarida: chiziqlar, haqiqiy yoylar va aylanalar **PROFILE** qatlamida, qurilish geometriyasi **CONSTRUCTION** da, erkin nuqtalar **POINTS** da.

### Solidning tekis yuzi

1. Koʻrinishda tekis yuzni bosing (masalan, teshikli plastinaning ustki yuzi).
2. Oʻng panelda {{ui:Yuzani DXF sifatida eksport qilish}} ni tanlang, yoki {{ui:Eksport}} ni, soʻng {{ui:Eskiz yoki tekis yuzning DXF fayli}} ni tanlang.

Siz `<part> - face.dxf` faylini olasiz: yuzaning konturi va undagi har bir teshik. Dumaloq teshik (silindr yuza bilan uchrashgan butun aylana: burgʻulangan teshik yoki ochilgan STEP faylining teshigi) teshikning oʻz markazi va radiusi bilan haqiqiy aylana sifatida yoziladi. Boshqa barcha konturlar yopiq polilinya boʻladi, ularning dumaloq qirralari (yumaloqlash burchaklari, slotlar, yoylar) esa fasetlar sifatida yoziladi, shuning uchun kesgich ularga yaqin ergashishi kerak boʻlsa, avval **Egri chiziqlar** ni Nozik ga qoʻying. Holat satri necha kontur borligini, ulardan nechtasi haqiqiy aylana ekanini va yuzaning maydonini aytadi.

Agar na eskiz, na tekis yuz tanlangan boʻlsa: "DXF eksport qilish uchun eskizni oching yoki tanlang, yoki tekis yuzni tanlang."

## Chizma

PDF chizmaning oʻz qoʻllanmasi bor: [Chizma varagini yaratish](topic:drawing-pdf).

## Mavjud boʻlmagan formatlar

glTF, OBJ, IGES va Parasolid bu versiyada eksport qilinmaydi. DWG faqat variant paketi tomonidan yoziladi, chizma varagi sifatida: [Konfiguratsiyalaringizdan variant paketi yaratish](topic:variant-pack) ga qarang. Qarang: [Fayl formatlari](topic:file-formats).
