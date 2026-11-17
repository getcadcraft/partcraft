---
title: Detallar roʻyxati, yoyilgan koʻrinishlar va harakatlanuvchi detallar
summary: Yigʻma detallariga raqam, tavsif va material bering, materiallar roʻyxatini oʻqing va yuklab oling, bosqichlar bilan yoki avtomatik ravishda yoyilgan koʻrinishlar yarating, birikmalanmagan detallarni qoʻlda siljiting, birikma chegaralarini belgilang va butun yigʻmani STL, 3MF yoki materiallar roʻyxati sifatida eksport qiling.
keywords: bom, materiallar roʻyxati, detallar roʻyxati, detal raqami, material, zichlik, csv, yoyilgan koʻrinish, yoyish, yigʻilgan holat, iz chiziqlari, detalni siljitish, sudrash, gizmo, koʻchirish, aylantirish, birikma chegaralari, yigʻma eksporti, yigʻma chizmasi, balonlar
from: ebc9f6f3
---

Bu asboblar yigʻmaning oʻng panelida joylashgan (qarang: [Yigʻmani qurish](topic:build-assembly)).

## Detal xususiyatlari

Chap tomondagi roʻyxatdan detalni tanlang. **Detal xususiyatlari** ostida quyidagilarni belgilang:

- **Detal raqami** (40 belgigacha) va **Tavsif** (200 belgigacha).
- **Material**: zichligi bilan birga umumiy material yoki g/cm³ da kiritish uchun **Maxsus zichlik…**. Shundan soʻng panelda detalning massasi koʻrsatiladi.

Xususiyatlar detalga tegishli, shuning uchun uning har bir nusxasi ularni birgalikda ishlatadi. Ular yigʻma faylida saqlanadi.

## Materiallar roʻyxati

Hech narsa tanlanmagan boʻlsa ({{key:Esc}}), panelda **Materiallar roʻyxati** koʻrsatiladi: har bir detal uchun bitta qator, unda tartib raqami, miqdori (nechta nusxa), detal raqami, nomi, materiali va massasi bor. Tartib raqamlari detallar roʻyxatda birinchi marta paydo boʻlgan tartibda beriladi. Massalar har bir detalning hajmi (mesh yadrosi yasagan qirrali jismniki, dumaloq detallarda biroz kam) va materialidan hisoblanadi; materiali boʻlmagan detalning massasi boʻlmaydi va shunda umumiy yigʻindi ham chiqmaydi.

{{ui:CSV yuklab olish}} roʻyxatni CSV fayl sifatida saqlaydi (shuningdek **Eksport › Materiallar roʻyxati (CSV)**). U istalgan elektron jadvalda ochiladi; = yoki + bilan boshlanadigan matn oldiga apostrof qoʻyiladi, shunda elektron jadval uni formula sifatida bajarmaydi.

## Yoyilgan koʻrinishlar

Yoyilgan koʻrinish rasmlar uchun detallarni bir-biridan ajratadi. U birikmalarni yoki detallarning haqiqiy joylashuvini hech qachon oʻzgartirmaydi: saqlash, toʻqnashuv tekshiruvi va eksport haqiqiy joylashuvlardan foydalanadi.

1. Hech narsa tanlanmagan holda, **Yoyilgan koʻrinishlar** ostida {{ui:Yangi koʻrinish}} ni tanlang.
2. **Bosqich qoʻshish** ostida bosqich harakatlantiradigan detallarni belgilang, **Yoʻnalish** ni (+X … −Z, bosilgan yuzning normali yoki **Koʻrinishda strelkani sudrash**) va **Masofa** ni tanlang, soʻng {{ui:Bosqich qoʻshish}} ni bosing. **Sudrash** bilan strelkani torting va qoʻyib yuboring: bosqich siz sudragan yoʻnalish va masofani oladi.
3. Yana bosqichlar qoʻshing. Ular bir-birining ketidan bajariladi.
4. Koʻrinishni animatsiya qilish uchun **Yigʻilgan** va **Yoyilgan** oraligʻidagi surgichni suring. Shtrix iz chiziqlari har bir detalning dam olish holatidan hozirgi joyigacha boradi.

{{ui:Avtomatik (radial)}} yigʻmaning oʻrtasidan, mahkamlangan detaldan tashqari, har bir detalni uzoqlashtiradi. {{ui:Avtomatik (birikmalar)}} har bir birikkan detalni (uning ostidagi hamma narsa bilan birga) birikmasining yuz normali boʻylab chiqaradi. Bir nechta nomlangan koʻrinishni saqlab qolishingiz mumkin; **Koʻrinish** dan birini tanlang yoki detallarni joyiga qaytarish uchun **Yigʻilgan** ni tanlang. Koʻrinishlar yigʻma faylida saqlanadi.

## Detalni qoʻlda siljitish

Qoʻlda faqat mahkamlangan detalga birikmasi boʻlmagan detal siljiydi (mahkamlangan detal qoʻzgʻalmas; qolganlarini birikmalar joylashtiradi). Uni tanlang va **Qoʻlda siljitish** ostida:

- **ΔX, ΔY, ΔZ** ni kiriting va {{ui:Siljitish}} ni tanlang, yoki oʻqni va **Burchak** ni tanlab {{ui:Aylantirish}} ni bosing (detalning oʻrtasi atrofida).
- {{ui:Surish uchun sudrang}} detalda strelkalarni koʻrsatadi: bitta oʻq boʻylab siljitish uchun strelkani, tekislikda siljitish uchun kvadratni torting. {{ui:Aylantirish uchun sudrang}} uni burish uchun halqalarni koʻrsatadi. Har bir sudrash bitta ortga qaytarish qadami. {{key:Esc}} strelkalarni yashiradi.

## Birikma chegaralari

Harakatlanadigan birikmani tanlang va **Chegaralar** ostida, qiymatlaridan biri uchun **… chegaralar orasida ushlab turish** ni belgilang, soʻng uning **Minimum** va **Maksimum** ini oʻrnating. Har bir qiymat oʻz chegaralari ichida ushlab turiladi, uning surgichi faqat shu oraliqni qamraydi va {{ui:Harakat davomida toʻqnashuvlarni tekshirish}} faqat shu chegaralar orasida oʻtadi. Silindrsimon birikma burchagini, siljishini yoki ikkalasini ham chegaralashi mumkin. Birikma turini oʻzgartirsangiz, yangi turda boʻlmagan qiymatlardagi chegaralar olib tashlanadi.

## Butun yigʻmani eksport qilish

Yigʻmada **Eksport** menyusi butun yigʻmani har bir detali joylashgan holatida yozadi:

- **STEP AP242 / AP214** va **Chizma (PDF)** bu versiyada hali tayyor emas: ularga aniq yadro kerak, shuning uchun ular faol emas. Buning oʻrniga har bir detalning STEP (aniq jism) faylini detalning oʻzidan eksport qiling.
- **STL**: barcha detallarning bitta mesh. **3MF**: har bir detal bir marta, har bir nusxasi oʻz joyida bir marta.
- **Materiallar roʻyxati (CSV)**.

## Chegaralar

- Yigʻma chizmasi va yigʻma STEP bu versiyada hali tayyor emas (ularga aniq yadro kerak). Yoyilgan koʻrinishlar faqat ekrandagi rasmlar uchun.
