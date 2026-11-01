---
title: Fayllar: ochish, saqlash va eksport
summary: PartCraft ochadigan va saqlaydigan detal hamda yigʻma fayllari, har bir eksport formati va u nimani saqlashi, fayllar qayerga boradi, hamda oflayn rejimda va brauzerlar oʻrtasida nima oʻzgarishi.
keywords: ochish, saqlash, eksport, yuklab olish, fayl, partcraft.json, yigʻma fayli, stl, 3mf, step, dxf, pdf, fayllarim qayerda, oflayn, boshqacha saqlash
from: c15c2c48
---

PartCraft kompyuteringizdagi fayllar bilan ishlaydi. U hech qachon detalni yuklab yubormaydi, hisob ham, bulutli xotira ham ishtirok etmaydi. Bulutli saqlash hozircha mavjud emas.

## PartCraft nimalarni ochadi

| Fayl | Kengaytma | Qanday |
|---|---|---|
| PartCraft detali | `.partcraft.json` | {{ui:Ochish}}, {{key:Mod+O}} yoki uni 3D koʻrinishga tashlang |
| PartCraft yigʻmasi | `.partcraft-asm.json` | Xuddi shunday: PartCraft qaysi tur ekanini oʻzi aniqlaydi |
| STEP yaxlit jismi | `.step`, `.stp` | Uchburchaklar sifatida oʻqiladigan yaxlit jism: [STEP faylini oching va unga qurish](topic:import-step) |

STL, OBJ va 3MF mesh fayllari ham yaxlit jism sifatida ochiladi ([STL, OBJ yoki 3MF ni oching](topic:open-meshes)), `.3dm` fayllari ham shunday ([.3dm modelini oching](topic:open-3dm-files)). DXF, IGES va boshqa dasturlarning oʻz detal fayllarini ochib boʻlmaydi (qarang: [Hali qurilmagan narsalar](topic:not-built-yet)).

Ochishdagi qoidalar:

- Detal yoki yigʻma fayl nomi `.json` bilan tugashi kerak, fayl hajmi 50 MB dan oshmasligi kerak.
- Fayl koʻrsatilishidan oldin tekshiriladi. Buzilgan yoki tahrirlangan fayl sabab bilan rad etiladi, masalan: "Bu PartCraft fayli emas."
- Yangiroq PartCraft bilan saqlangan fayl rad etiladi: "Bu fayl yangiroq PartCraft bilan saqlangan (fayl versiyasi 3); bu esa 2-versiyani oʻqiydi." Eskiroq fayllar ochiladi.
- Ekrandagi detalda saqlanmagan oʻzgarishlar boʻlsa, PartCraft avval soʻraydi: {{ui:Bekor qilish}}, {{ui:Oʻzgarishlarni bekor qilish}} yoki {{ui:Avval saqlash}}.

## Saqlash

{{ui:Saqlash}} yoki {{key:Mod+S}} ekrandagilarni saqlaydi:

- Detalda: `<detal nomi>.partcraft.json`, toʻliq tarix (eskizlar, bogʻlanishlar, oʻlchamlar, elementlar, orqaga qaytarish holati), chizma varagining kesim, detal va GD&T izohlari hamda oldingi versiyada import qilingan STEP yaxlit jismining toʻliq matni. Bu versiya qura olmaydigan elementlar oʻzgartirilmasdan saqlanadi. Yaxlit jismning oʻzi saqlanmaydi; fayl ochilganda PartCraft uni tarixdan qayta quradi.
- Yigʻmada: `<yigʻma nomi>.partcraft-asm.json`, ichida **har bir detal** bilan. Bitta fayl butun yigʻmani oʻz ichiga oladi, shuning uchun uni alohida yuborish mumkin.

Saqlash **yuklab olish** hisoblanadi. Brauzeringiz faylni yuklab olishlar jildiga joylaydi yoki agar shunday sozlangan boʻlsa, qayerga joylash kerakligini soʻraydi. Qayta saqlash yangi yuklab olishni yaratadi; brauzer eski faylni almashtirmasdan, uni `Part1 (1).partcraft.json` deb nomlashi mumkin. Fayllarni xohlaganingizcha {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} ichida qayta nomlashingiz yoki koʻchirishingiz mumkin.

Detal nomidagi harf, raqam, boʻshliq, `_`, `.` va `-` dan boshqa belgilar fayl nomida `_` ga almashtiriladi.

:::tip
Koʻpchilik brauzerlarda har bir yuklab olishda qayerga saqlashni soʻrash sozlamasi bor. Har safar "Boshqacha saqlash" tanlovini xohlasangiz, uni yoqing: Chrome va Edge da sozlamalardagi Yuklab olishlar boʻlimida; Firefox da Umumiy, Fayllar va ilovalar boʻlimida; Safari da Umumiy, Fayl yuklab olish joyi boʻlimida.
:::

Yuklab olishlar qayerga borishi va fayllarni qanday xavfsiz saqlash haqida koʻproq: [Fayllaringiz qayerga boradi](common:your-files).

## Eksport

{{ui:Eksport}} menyusi boshqa formatlarni yozadi. Har biri yuklab olish boʻlib, detal nomi bilan ataladi.

| Menyu elementi | Fayl | Ichida nima bor |
|---|---|---|
| {{ui:STL, 3D bosma uchun}} | `<nom>.stl` | Yaxlit jism uchburchaklarining ikkilik STL shakli, millimetrda, **Z yuqoriga** |
| {{ui:3MF, 3D bosma uchun}} | `<nom>.3mf` | Yaxlit jism bitta obyekt sifatida, 3MF, millimetrda, **Z yuqoriga** |
| {{ui:STEP AP242 (aniq yaxlit jism)}} | `<nom>.step` | Bu versiyada hali qurilmagan (xira): aniq yadro kerak |
| {{ui:STEP AP214 (aniq yaxlit jism)}} | `<nom>.step` | Bu versiyada hali qurilmagan (xira) |
| {{ui:STEP (faset, mesh yadrosi)}} | `<nom>.step` | Mesh dan olingan tekis yuzalardan iborat yaxlit jism: **dumaloq yuzalar koʻp mayda faset boʻladi**. Millimetrda, PartCraft oʻz oʻqlarida (Y yuqoriga). Bu versiyada boshqa CAD dasturlari uchun ishlatiladigan STEP |
| {{ui:Eskiz yoki tekis yuzning DXF fayli}} | `<nom> - <eskiz>.dxf` yoki `<nom> - face.dxf` | DXF R12. Eskiz uchun: chiziqlar, yoylar, aylanalar va nuqtalar eskizning oʻz koordinatalarida, PROFILE, CONSTRUCTION va POINTS qatlamlarida. Tanlangan tekis yuza uchun: uning konturlari yopiq polichiziqlar sifatida (dumaloq qirralar fasetlari bilan) |
| {{ui:Chizma (PDF): koʻrinishlar, kesim, detal, GD&T}} | `<nom> - drawing.pdf` | A3 chizma varagi: uchta koʻrinish, izometrik, kesim va detal (agar belgilangan boʻlsa), umumiy oʻlchamlar, GD&T belgilari, sarlavha bloki |

:::note
{{ui:STEP AP242 (aniq yaxlit jism)}} va {{ui:STEP AP214 (aniq yaxlit jism)}} bu versiyada hali qurilmagan: {{ui:STEP (faset, mesh yadrosi)}} dan foydalaning. Shakli va hajmi toʻgʻri, lekin har bir dumaloq yuza koʻp mayda tekis fasetdan iborat boʻladi, shuning uchun boshqa dasturlar teshikni silindr sifatida tanlay olmaydi. Bu muhim boʻlsa, avval **Egri chiziqlar** ni yanada mayda qilib sozlang.
:::

- Eksport ekrandagi detal haqida boʻladi. Yigʻmada eksport oʻchirilgan; hozircha yigʻma eksporti yoʻq.
- STL, 3MF, faset STEP va yuza DXF har doim fasetlardan tuziladi. **Egri chiziqlar** sozlamasi (hech narsa tanlanmagan holatda oʻng panelda) ularning qanchalik mayda ekanini belgilaydi: bir aylanishda 32 dan 256 gacha faset. STL yoki 3MF ni silliq chop etish uchun eksportdan oldin Yaxshi yoki Juda yaxshi ni tanlang.
- PDF chizma oʻqish dasturining oʻrnatilgan Helvetica shriftidan foydalanadi. Koʻrsata olmaydigan belgilar "?" bilan chop etiladi.

Bosqichma-bosqich: [Chop etish, STEP va DXF uchun eksport](topic:export-files) va [Chizma varagini tuzish](topic:drawing-pdf).

## Saqlanmagan ish

- PartCraft har bir oʻzgarishdan bir zum keyin ochiq detal yoki yigʻmaning tiklash nusxasini shu brauzerda saqlaydi, shuning uchun xato yoki yopilgan oyna ishni yoʻqotmaydi: PartCraft keyingi ochilganda "Ishingizni tiklaysizmi?" deb soʻraydi. Bu saqlash emas: ishingizni saqlash uchun faylga saqlang. Qarang: [Saqlanmagan ishni tiklash](common:recover).
- Agar saqlanmagan oʻzgarishlar bilan oynani yopmoqchi yoki qayta yuklamoqchi boʻlsangiz, brauzer "Saytdan chiqilsinmi?" deb soʻraydi. Bu brauzerning oʻz oynasi; PartCraft uning matnini oʻzgartira olmaydi.
- {{ui:Yangi}}, {{ui:Ochish}} va yigʻmani yopish saqlanmagan oʻzgarishlarni tashlashdan oldin soʻraydi.

## Onlayn va oflayn

Hamma narsa kompyuteringizda boʻladi: mesh yadrosi (WebAssembly dasturi) ilova bilan birga yuklab olinadi va geometriyani mahalliy quradi, fayllar esa diskingizdan oʻqiladi va unga yoziladi. Detal maʼlumotlari tarmoq orqali uzatilmaydi. Qarang: [Mesh yadrosi](topic:solid-kernels).

Umuman ulanishsiz ishlash uchun onlayn boʻlganingizda PartCraft ni oflayn ishlash uchun saqlang: ilova panelida {{ui:Oflayn uchun saqlash}} ni tanlang va u hisoblab boʻlguncha kuting ("40 / 212 saqlanmoqda"), u **Oflayn tayyor** deguncha. Saqlangan nusxa 3D kutubxonani va mesh yadrosini oʻz ichiga oladi, shuning uchun keyin modellash, saqlash, barcha eksportlar va chizmalar oflaynda ishlaydi. Agar u **Saqlab boʻlmadi** desa, onlayn holatda uni bosib qayta urinib koʻring; **Oflayn mavjud emas** esa bu brauzer oynasi nusxa saqlay olmasligini bildiradi (maxfiy oynalar va ayrim boshqariladigan kompyuterlar). Nusxa saqlangan boʻlsa, **Oflayn tayyor** ni bosish {{ui:Qayta saqlash (eng yangi versiyani olish)}} va {{ui:Oflayn nusxani oʻchirish}} variantlarini taklif qiladi. Batafsil: [Oflaynda ishlash](common:offline).

:::online
Siz onlaynsiz. Oflayn uchun saqlamagan boʻlsangiz ham, PartCraft yuklanib, holat satridagi "Mesh yadrosi" belgisi paydo boʻlgach, ulanish uzilsa ham ishlashda davom etishingiz mumkin. Faqat ulanish qaytguncha sahifani qayta yuklamang.
:::

:::offline
Siz oflaynsiz. PartCraft allaqachon ochiq boʻlsa, ishlashda davom eting: saqlash va eksport ishlaydi. Ilova panelida **Oflayn tayyor** yozilgan boʻlsa, PartCraft ulanishsiz noldan ham ochiladi; aks holda bu yorliqni qayta yuklamang.
:::

## Brauzerlar oʻrtasidagi farqlar

- **Yuklab olishlar.** Har bir brauzerning oʻz yuklab olishlar jildi va soʻrash usuli bor. Agar brauzer bu sayt fayllarni yuklab olishiga ruxsat berishni soʻrasa, ruxsat bering, aks holda saqlash va eksport ishlamaydi.
- **Faylni koʻrinishga sudrab tashlash** Chrome, Edge, Firefox va Safari da ishlaydi.
- **Telefon yoki planshetdagi fayllar.** iPhone va iPad da Ochish Files ilovasini koʻrsatadi; saqlangan fayllar Files, Downloads ga boradi. Android da ular Yuklab olishlar jildiga boradi.

Brauzer yoki operatsion tizim boʻyicha fayl ichidagi maʼlumotlar farq qilmaydi.
