---
title: PartCraft bilan boshlash
summary: PartCraft hozir nimani qiladi, brauzeringizga nima kerak va oʻn daqiqada birinchi detal: eskizdan saqlangan faylgacha.
keywords: boshlash, birinchi ishga tushirish, tezkor boshlash, kirish, qoʻllanma, birinchi detal, plastina, parametrik, detal modelleri
from: 5f0a668d
---

PartCraft CadCraft oilasining parametrik detal va yigʻma ilovasi. Siz 2D eskiz chizasiz, uni bogʻlanishlar va oʻlchamlar bilan mahkamlaysiz, ekstruziya, aylantirish va teshik kabi elementlar bilan yaxlit jismga aylantirasiz va istalgan vaqtda istalgan sonni oʻzgartirasiz: detal oʻz tarixidan qayta quriladi. Keyin detallar yigʻmalarga joylanadi, u yerda birikmalar ularni joylashtiradi va harakatni tekshirish imkonini beradi.

Bu versiya quyidagilarni bajaradi:

| Vazifa | Nima olasiz |
|---|---|
| Eskizlar | Chiziqlar, toʻrtburchaklar, aylanalar, yoylar, nuqtalar va markaziy chiziqlar, bogʻlanishlar va oʻlchamlar bilan va jonli holat: aniqlanmagan, toʻliq aniqlangan yoki ortiqcha aniqlangan |
| Yaxlit elementlar | Ekstruziya, kesish, aylantirish, aylantirib kesish, oddiy va qarshi teshikli teshiklar, chiziqli va doiraviy takrorlashlar, aks ettirish, tekis yuzalar orasidagi toʻgʻri qirralardagi yumaloqlash va faskalar, hamda tekis yuzalardagi qobiq va qiyalik. Sveep, loft va aniq yadroni talab qiladigan boshqa elementlar bu versiyada hali qurilmagan: qarang [Hali qurilmagan narsalar](topic:not-built-yet) |
| Tarix | Har qanday element raqamlarini tahrirlash, bosqichini oʻchirish, orqaga qaytarish, tartibini oʻzgartirish va oʻchirish, bekor qilish bilan |
| Yigʻmalar | Qattiq, aylanuvchi va sirpanuvchi birikmalar bilan ulangan detallar, toʻqnashuvni tekshirish va harakatni tekshirish |
| Chizmalar | A3 varagi: uchta koʻrinish, izometrik, kesim, detal koʻrinishi, umumiy oʻlchamlar, bazalar, element boshqaruv ramkalari va sirt pardozi belgilari, PDF sifatida eksport qilinadi |
| Fayllar | Oʻzining detal va yigʻma fayllari; chiqishda STL, 3MF, faset STEP, DXF va PDF |

Hammasi brauzeringizda, kompyuteringizda ishlaydi. **Hech narsa yuklanmaydi.** Fayllar qayerga borishi haqida: [Fayllar: ochish, saqlash va eksport](topic:files).

## Sizga nima kerak

- **WebGL** (3D grafika) va **WebAssembly** yoqilgan joriy Chrome, Edge, Firefox yoki Safari. Ikkalasi ham standart holatda yoqilgan. Yaxlit geometriyani ilova bilan birga yuklanadigan WebAssembly mesh yadrosi quradi: qarang [Mesh yadrosi](topic:solid-kernels).
- Sichqoncha eng qulay. Sensorli panel ham ishlaydi, sensorli ekranlar esa koʻrish va oddiy eskizlash uchun ishlaydi: qarang [Sensorli panel, sensorli ekran va kichik ekranlar](topic:trackpad-and-touch).
- Kengligi kamida 1280 piksel boʻlgan ekran butun asboblar panelini bir qatorda koʻrsatadi. Torroq oynalarda asboblar paneli yon tomonga suriladi; telefonda panellar pastki panel orqali varaq sifatida ochiladi.

Brauzerlar haqida koʻproq: [Brauzerlar va kompyuterlar](common:browsers).

:::note
PartCraft brauzerda ishlaydi va CadCraft Studio ichida ish stolida ham. Bulutli saqlash hali mavjud emas: detallarni kompyuteringizdan ochasiz va ularni fayl sifatida qayta saqlaysiz.
:::

## PartCraft ni oching

1. PartCraft ni oching.
2. Ekranda "Yadro yuklanmoqda…" yozilgan holatda kuting. Birinchi marta bu biroz vaqt oladi.
3. Boʻsh 3D koʻrinishni koʻrasiz: uchta asosiy tekislik, chapda tarix ("Part1", keyin Old tekislik, Yuqori tekislik, Oʻng tekislik) va koʻrinishda "Detal boshlang" sarlavhali quti.
4. Holat satrining oʻng chetidagi "Mesh yadrosi" belgisi: bu versiyada PartCraft har bir detalni mesh yadrosi bilan quradi, shuning uchun dumaloq yuzalar tekis faset boʻladi. Modellashtirishni darhol boshlashingiz mumkin.

Agar koʻrinish 3D ni koʻrsata olmasligini yoki yadro yuklanmaganini aytsa, qarang: [Muammolarni bartaraf etish](topic:troubleshooting#the-app-does-not-start).

## Birinchi detalingiz: teshikli plastina

Siz 60 × 40 mm, 10 mm qalinlikdagi plastina yasaysiz, unda 6 mm teshik boʻladi. Oʻlchov birligi millimetr.

### Konturni eskizlang

1. Chapdagi tarixda **Oldingi tekislik** ni bosing. Tekislik koʻrinishda ajralib turadi.
2. Asboblar panelida {{ui:Eskiz}} ni tanlang yoki {{key:S}} ni bosing. Koʻrinish tekislikka toʻgʻridan-toʻgʻri qaraydi va Chiziq asbobi faol boʻladi.
3. {{key:R}} ni bosing: Toʻrtburchak asbobi.
4. Koordinatalar boshiga (kichik qizil doira bilan belgilangan) kursorni olib boring. Kichik kvadrat ilashishini koʻrsatadi. Bosing.
5. Yuqoriga va oʻngga siljitib, yana bosing. Sizda toʻrtburchak bor. Uning chiziqlari koʻk: koʻk demak ular hali siljishi mumkin.

### Oʻlchamlar bering

1. {{key:D}} ni bosing: Oʻlcham asbobi.
2. Yuqori chiziqni bosing, keyin uning ustida biroz bosing. Joriy uzunlik bilan raqam kiritish oynasi ochiladi.
3. `60` ni yozing va {{key:Enter}} ni bosing. Toʻrtburchak 60 mm kenglikka oʻzgaradi.
4. Chap chiziqni bosing, keyin uning chap tomonida biroz bosing. `40` ni yozing va {{key:Enter}} ni bosing.

Koʻrinishning yuqori chap burchagidagi belgi endi **Toʻliq aniqlangan** deydi va chiziqlar qora boʻladi (Qogʻoz mavzusida qora, Model mavzusida ochiq). Har bir nuqta va oʻlcham belgilangan.

:::tip
Agar toʻrtburchakni koordinatalar boshidan tashqarida boshlagan boʻlsangiz, belgi baribir "Aniqlanmagan · 2 erkinlik darajasi" deydi. {{key:S}} ni bosing (Tanlash), bitta burchakni bosing, {{key:Shift}} bilan koordinatalar boshini bosing, keyin oʻng panelda {{ui:• Ustma-ust tushish}} ni tanlang.
:::

### Ekstruziya qiling

1. Asboblar panelida {{ui:Chiqish}} ni tanlang yoki eskiz yopilguncha {{key:Esc}} ni bosing (odatda ikki marta).
2. {{ui:Ekstruziya}} ni tanlang. 10 mm yaxlit jism paydo boʻladi. Tarixga "Extrude1" qoʻshiladi, uning ostida "Sketch1" chekinib joylashadi.
3. Oʻng panelda ekstruziya sozlamalari koʻrinadi. Qalinlikni oʻzgartirish uchun **Chuqurlik (mm)** maydoniga yangi raqam yozing va {{key:Enter}} yoki {{key:Tab}} ni bosing. Detal darhol qayta quriladi.

### Teshik qoʻshing

1. Plastinaning oldidagi katta tekis yuzani bosing (ekstruziyaning oxiri). Butun yuza ajralib turadi va oʻng panel **Yuza** deydi.
2. Oʻng panelda {{ui:Bu yuzada eskiz}} ni tanlang.
3. {{key:P}} ni bosing: Nuqta asbobi, va yuza oʻrtasi yaqinida bosing.
4. {{ui:Chiqish}} ni tanlang.
5. {{ui:Teshik}} ni tanlang. Plastinadan oʻtadigan 6 mm teshik paydo boʻladi. Xohlasangiz oʻng paneldagi **Diametr (mm)** ni oʻzgartiring.

Chap pastdagi **Detal** qutisida endi hajm, sirt maydoni, oʻlcham (60 × 40 × 10 mm) va "Teshiklar: 1" koʻrsatiladi.

### Saqlang

1. {{key:Mod+S}} ni bosing yoki {{ui:Saqlash}} ni tanlang.
2. Brauzeringiz `Part1.partcraft.json` ni yuklab oladi. Fayl butun tarixni saqlaydi: tahrirlashda davom etish uchun uni {{ui:Ochish}} bilan qayta oching.

Avval detalni qayta nomlash uchun koʻrinishdagi boʻsh joyni bosing, shunda hech narsa tanlanmaydi, keyin oʻng paneldagi **Nomi** maydoniga yangi nom yozing.

## Keyingi qadamlar

- [Birinchi eskizingizni chizing](topic:sketch-basics) va [Eskizni toʻliq aniqlang](topic:relations-dimensions) eskizlashni batafsil tushuntiradi.
- [Detalni tarix orqali oʻzgartiring](topic:edit-history) yasaganingizni qanday tahrirlashni koʻrsatadi.
- [Yumaloqlash, qiyalatish va boʻshatish](topic:fillet-chamfer-shell) va [Chizma yasash](topic:drawing-pdf) detalni yakunlaydi. [Hali qurilmagan narsalar](topic:not-built-yet) bu versiya qila olmaydigan narsalarni, masalan, sveep va loftlarni, sanab beradi.
- [Boshqa parametrik modeldan kelish](topic:coming-from) bu yerda boshqacha ishlaydigan odatlarni sanab beradi.
- [Klaviatura va sichqoncha](topic:keyboard) tezkor tugmalarning toʻliq roʻyxati.
- [Bu yordamdan foydalanish](common:help).
