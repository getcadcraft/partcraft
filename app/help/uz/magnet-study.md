---
title: Eskizning magnit tahlili
summary: Eskizlaringizning yopiq konturlarini yassi magnit modelga aylantiring (temir, magnitlar, gʻaltaklar), maydonni koʻring va jismdagi kuch hamda momentni oʻqing.
keywords: magnit, magnitli, magnitostatik, maydon, magnit oqim zichligi, kuch, moment, gʻaltak, boʻyinturuq, temir, B-H egri chizigʻi, doimiy magnit, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Eskizlari boʻlgan detalda {{ui:Elementlar}} asboblar panelidagi {{ui:Koʻproq}} › {{ui:Eskizlarni magnit tahlili…}} dan foydalaning. Siz belgilagan eskizlardagi har bir yopiq shakl yassi model sohasining bir qismi boʻladi; tahlil magnit maydon B, tanlangan jismdagi kuch va momentni hisoblaydi.

## Qadamlar

1. Jismlarni eskizlarda yopiq shakl sifatida chizing: temir boʻyinturuq, magnit, gʻaltak. Bir-biriga tegib turgan jismlar qirrani ulashadi, shuning uchun ularni turli eskizlarga joylashtiring; bir-biridan ajralib turgan yoki bir-birining ichida joylashgan jismlar (boʻyinturuqdagi oyna) bitta eskizda boʻlishi mumkin. Eskizlarni bir tekislikda saqlang.
2. Tahlilni oching va ishlatiladigan eskizlarni belgilang. Har bir yopiq profil raqamlangan qatorni oladi. U nima ekanligini koʻrsating: {{ui:Havo}}, {{ui:Temir}} (magnit oʻtkazuvchanlik yoki B–H egri chizigʻi, B ni teslada va H ni A/m da juftliklar qilib yozilgan holda), {{ui:Doimiy magnit}} (teslada Br, eskiz x oʻqidan burchak sifatida yoʻnalishi va uning qaytish magnit oʻtkazuvchanligi) yoki {{ui:Gʻaltak}} (profili orqali umumiy tok, oʻramlar soni koʻpaytirilgan amper; ishorasi qaysi yoʻnalishda oqishini bildiradi).
3. Kerakli jismlar uchun {{ui:Bu jismdagi kuch va moment}} ni belgilang. Eskizdan chiqadigan detal chuqurligini kiriting.
4. Toʻrni va model atrofidagi havoni tanlang, soʻng {{ui:Ishga tushirish}}.

## Nimani koʻrishingiz kerak

- Model ustidagi magnit oqim zichligi |B|, past qiymatlar toʻq koʻkdan, yuqori qiymatlar qizilgacha rangda, profillar raqamlangan.
- Eng kuchli maydon va uning joyi, uchburchaklar soni hamda belgilagan har bir jism uchun, kiritilgan chuqurlik uchun x va y boʻylab kuch va oʻrtasi atrofidagi moment.
- {{ui:Natijalarni saqlash (CSV)}} raqamlarni yozadi.

## Bilish foydali

- Bu yassi, barqaror model: hamma narsa chuqurlikning har metriga, girdob toklarisiz va gisterezissiz, magnit esa toʻgʻri qaytish chizigʻi (uni magnitsizlantirib boʻlmaydi).
- Model chetlari devor boʻlgan havo qutisida turadi. Havo qutisining ikki oʻlchamini hamda Normal va Fine toʻrlarni solishtiring: jism atrofidagi maydondan olingan kuch faqat oʻsha yerdagi toʻr darajasida ishonchli boʻladi.
- Faqat magnit oʻtkazuvchanlikka ega temir hech qachon toʻyinmaydi. Maydon 2 T dan oshganda tahlil **Muammolar** roʻyxatida ⚠ belgisini koʻtaradi: temirga B–H egri chizigʻini bering. Yangi qatordagi raqamlar namunaviy (temir μr 2000, 1.2 T magnit), material texnik varaqasi emas.
- Jism kuchni qabul qilishi uchun atrofida joy kerak: boshqa jism juda yaqin boʻlsa, tahlil buni aytadi.
- Loyihalash uchun yordamchi vosita, muhandislik tasdiqlovi emas.

## Keyingisi

- [Ikki oʻlchamli magnit maydonlar (qoʻllanma)](topic:magnetic-fields-2d)
