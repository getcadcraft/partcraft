---
title: Hujjatlar va revizyalar (ombor)
summary: Bitta haqiqiy ish boʻyicha qadamma-qadam qoʻllanma: detal va yigʻmalardan iborat loyiha jildini nazoratga olish, detalni olish, oʻzgartirish va izoh bilan qaytarib joylash, chiqarish, uni kim ishlatayotgani va materiallar roʻyxatini koʻrish, faylni ushlab turganingizda ikkinchi shaxs nimani koʻrishi hamda bulut jildlari bilan qanday ishlashi.
keywords: ombor, hujjatlar, qoʻllanma, oʻquv qoʻllanma, olish, qaytarib joylash, revizya, chiqarish, tasdiqlash, qulf, tarix, qayerda ishlatilgan, materiallar roʻyxati, bom, yigʻma, bulut jildi, loyiha jildi, ikki kishi, umumiy jild
from: 0a5e6983
---

## Nima qilasiz

Siz Ana boʻlib, hamkasbingiz Ben bilan Riverside Clinic loyihasida ishlayapsiz. Loyihaning detallari va yigʻmalari ikkalangiz ham kira oladigan bitta jildda turadi (umumiy disk, sinxronlanadigan jild yoki bulut jildi). Yakunida bitta fayl birinchi nusxasidan revizya **A** gacha chiqariladi, soʻng **B.1** sifatida yana oʻzgartiriladi, siz kim nima qilganini koʻrasiz va faylni ushlab turganingizda Ben nimani koʻrishini bilasiz.

Hammasi fayllaringiz yonidagi yashirin `.ccvault` jildida saqlanadi: server yoʻq, hech narsa yuklanmaydi (bulut jildi istisno, oxirgi qadamga qarang). Har bir tugma va qoida uchun ilovangizda bor boʻlgan *Hujjatlar: olish, revizyalar va chiqarish* mavzusiga qarang.

## 1. Loyiha jildini sozlang

1. Asboblar panelining **Fayl** guruhidan {{ui:Hujjatlar…}} ni tanlang.
2. {{ui:Loyiha jildini tanlang}} ni tanlang va loyihaning detallari hamda yigʻmalarini saqlaydigan jildni belgilang. (Loyiha jildlari Studio’da va jildni ochishga ruxsat beradigan brauzerlarda, masalan Chrome va Edge’da ishlaydi. Boshqa brauzerlarda panel buni aytadi.)
3. **Siz:** yonidagi {{ui:Oʻzgartirish}} ni tanlang va ismingizni kiriting: `Ana` (agar soʻrasa, shu kompyuterning nomini ham). Panelda endi *Siz: Ana kompyuterida* va kompyuteringiz koʻrinadi. Ismingiz siz qiladigan hamma ishga yoziladi.
4. {{ui:Bu jildda hujjatlar omborini boshlash}} ni tanlang va loyiha nomini kiriting: `Riverside clinic`. Panelda *Riverside clinic uchun ombor boshlandi.* deb yoziladi.

## 2. Faylni nazorat ostiga oling

1. **Omborda boʻlmagan fayllar** ro'yxatini oching va `plates/Bracket.partcraft.json` yonidagi {{ui:Qoʻshish}} ni tanlang.
2. U **Ombordagi fayllar** ostida, **A.1** revizyasi va **Ishlanmoqda** holati bilan paydo boʻladi. A.1 — uning birinchi nusxasi; ombor har bir revizyaning nusxasini saqlaydi.

## 3. Olish, oʻzgartirish, qaytarib joylash

1. `plates/Bracket.partcraft.json` yonidagi {{ui:Ochish}} ni tanlang. Detal PartCraft’da ochiladi va panel yopiladi, shunda uni koʻrishingiz mumkin. Panelni {{ui:Hujjatlar…}} orqali yana oching.
2. Panelni yana oching va {{ui:Olish}} ni tanlang. Qator endi **Sizga olingan** deb koʻrsatadi. `.ccvault/locks` ichida qulf fayli yaratiladi; siz uni qaytarib joylamaguncha boshqa hech kim bu faylni ola olmaydi.
3. Detalni oʻzgartiring: oʻlchamni tahrirlang, teshik qoʻshing. Fayl sizga olingan boʻlmasa, Saqlashga ruxsat berilmaydi va sababi aytiladi; Boshqacha saqlash esa har doim ishlaydi — oʻzingizning nusxangiz uchun.
4. Panelni oching, {{ui:Qaytarib joylash}} ni tanlang va nima oʻzgarganini yozing (`Moved the door`). Panel *A.2 sifatida qaytarib joylandi.* deydi. Loyiha jildidagi fayl endi siz ochgan detal boʻladi va qulf olib tashlanadi. Hech narsa oʻzgartirilmay qaytarib joylansa, revizya oʻzgarmaydi.

Fikringiz oʻzgarsa, {{ui:Olishni bekor qilish}} faylni yangi revizyasiz qaytaradi.

## 4. Koʻrib chiqish va chiqarish

1. {{ui:Koʻrib chiqishga yuborish}} ni tanlang. Holat **Koʻrib chiqishda** boʻladi va fayl faqat oʻqish uchun boʻladi.
2. Tasdiqlashdan oldin {{ui:Loyiha sozlamalari}} ni tanlang va kim tasdiqlay olishini roʻyxatlang (har qatorda bitta ism), masalan `Ben` va `Carla`, hamda tasdiqlovchi muallifdan boshqa boʻlishi kerakligi qoidasini belgilang. {{ui:Sozlamalarni saqlash}} ni tanlang. Endi ombor oʻzi boshqa hech kimga ruxsat bermaydi.
3. Ben (yoki Carla) {{ui:Tasdiqlash}} ni tanlaydi va tasdiqlovchining ismini yozadi. Holat **Chiqarilgan** boʻladi va revizya **A** boʻladi, *tasdiqlagan* va ism bilan. Chiqarilgan fayl faqat oʻqish uchun boʻladi. {{ui:Qaytarib yuborish}} uni sabab koʻrsatilgan holda **Ishlanmoqda** holatiga qaytargan boʻlardi.

Tasdiqlovchining ismi panelga yozilgan ism; bu kim tasdiqlaganining yozuvi, shaxsning isboti emas.

## 5. Yangi revizya

1. Chiqarilgan faylda {{ui:Yangi qayta koʻrib chiqish}} ni tanlang. Siz uni keyingi harf uchun band qilasiz.
2. Uni oʻzgartiring, keyin {{ui:Qaytarib joylash}}. Revizya **B.1**, ishlanmoqda boʻladi. Xuddi shunday chiqarsangiz, u **B** boʻladi. Birinchi qaytarib joylashdan oldin {{ui:Olishni bekor qilish}} uni **A** da qoldiradi.

Revizya harflari A, B … Z, AA, AB tartibida boradi. Agar standartingiz baʼzi harflarni tashlab ketsa, loyiha sozlamasi *ASME Y14.35 ketma-ketligidan foydalanish* keyingi revizyalar uchun I, O, Q, S, X va Z harflarini oʻtkazib yuboradi.

## 6. Nima boʻlganini koʻring

Fayl nomini tanlab, uning tafsilotlarini oching:

- **{{ui:Tarix}}**: har bir voqea, eng yangisi birinchi, kim, qaysi kompyuter va qachon bilan: *A.2 qaytarib joylangan* — Ana tomonidan, *Chiqarilgan* — Ben tomonidan va hokazo.
- **{{ui:Revizyalar}}**: revizyalar jadvali: saqlangan har bir revizya, uning sanasi, uni kim qaytarib joylagani, izohi va kim tasdiqlagani. Ombor har birining nusxasini `.ccvault/revs` ichida saqlaydi.
- **{{ui:Ishlatiladi}}**: yigʻmaning detallari.
- **{{ui:Kim ishlatadi}}**: roʻyxatda shu detalni saqlaydigan ombordagi har bir yigʻma koʻrsatiladi: qisqichni oʻzgartirsangiz, qaysi yigʻmalarni tekshirish kerakligini bilasiz.

## Yigʻmalar: ular nimani ishlatadi va materiallar roʻyxati

Yigʻmani (`.partcraft.json`, Yigʻma rejimidan saqlangan) jildga joylang va qoʻshing. Uning nomini tanlang: **Ishlatiladi** unda saqlangan detallarni, har bir detalning revizyasi va holati bilan koʻrsatadi; detalda **Kim ishlatadi** esa shu detalni saqlovchi har bir yigʻmani koʻrsatadi. {{ui:Materiallar roʻyxati (CSV)}} butun detallar roʻyxatini daraja-daraja, miqdorlari, revizyalari va holatlari bilan elektron jadvalga saqlaydi. Qisqichni oʻzgartiring — **Kim ishlatadi** qaysi yigʻmalarga qarash kerakligini koʻrsatadi.

## 7. Siz faylni ushlab turganingizda Ben nimani koʻradi

Endi faylni yana oling va Benga shu loyiha jildini oʻz kompyuterida ochib, panelni ochishni ayting. Fayl qatorida u **Ana tomonidan, uning kompyuterida olingan** va **shundan beri** vaqtini koʻradi hamda {{ui:Olish}} tugmasini koʻrmaydi. Baribir urinsa, ombor rad etadi: qulf tizim ikki marta yarata olmaydigan fayl boʻlgani uchun, jild Studio’da diskda boʻlganda, ikki kishi bir xil soniyada ham faylni birgalikda ushlay olmaydi. (Brauzerda jild faqat taxminiy ishlaydi va panel buni **Jild** ostida aytadi.)

Agar Ana uzoqda boʻlsa va Benga fayl kerak boʻlsa, {{ui:Olishni buzish}} uni boʻshatadi. U sabab yozishi shart; sabab kimning olishi ekani bilan birga jurnalga yoziladi. Loyihada adminlar roʻyxati boʻlsa, faqat ular buzishi mumkin. Eskirish chegarasidan (standart boʻyicha 14 kun) eski boʻlgan olish *juda uzoq* deb belgilanadi. Buzilgandan keyin Ananing kechikkan qaytarib joylashi rad etiladi, shunda ikkalangiz bir-biringizning ustiga yozib yubormaysiz.

## 8. Bulut jildlari

Bulut jildi — bu jamoangizning bulut saqlagichida turadigan loyiha jildi, shuning uchun jamoaga umumiy disk kerak emas. Studio’da CadCraft hisobingizga kirganingizda panelda {{ui:Bulut jildini ochish}} tugmasi {{ui:Loyiha jildini tanlang}} yonida koʻrinadi. Uni tanlang va jildni belgilang; u ish joyi / jild koʻrinishida roʻyxatlanadi. Ish joyi egasi jildni avval yaratadi va jamoaning bulut saqlagichi faol boʻlishi kerak. Yuqoridagi hamma narsa bir xil ishlaydi; qulfni server yaratadi va u odamlar orasida qat’iy boʻladi. Hisobga kirmagan boʻlsangiz, panel kirishni soʻraydi. Oddiy brauzer varagʻida bulut tugmasi taklif qilinmaydi; Studio’dan foydalaning.

## Sinab koʻring

Yuqoridagi sakkiz qadamni haqiqiy faylning nusxasi bilan bajaring. Ikki kishilik qadamlar uchun yana bir odam kerak, yoki ikki nom bilan ikkita oyna. Haqiqiy umumiy jild bilan sinasangiz, Hamjamiyat sinovi sahifasida aynan shuni soʻraydigan tekshiruv bor va natijalarni qabul qiladi.
