---
title: Detalni parametrlar bilan boshqarish
summary: Muhim o‘lchamlarni (kenglik, qalinlik, bolt o‘lchami) nomlang, har qanday xususiyat raqamini yoki eskiz o‘lchamini ular bilan = orqali bog‘lang va butun detalni bitta jadvaldan o‘zgartiring.
keywords: parametrlar, qayerda ishlatilgan, kim ishlatgan, global o‘zgaruvchilar, o‘zgaruvchilar, tenglamalar, dizayn maqsadi, boshqaruvchi o‘lchamlar, bog‘lash, ifoda, formula, o‘lchamni nomlash, bog‘langan qiymatlar
from: 58c646ea
---

**Parametr** — bu nomlangan son, masalan `width = 120` yoki `margin = bolt * 1.5`. Chuqurlik, teshik diametri, naqsh soni yoki eskiz o‘lchamini unga bog‘lang, parametrni o‘zgartirsangiz, ularning hammasi bir qadamda o‘zgaradi. Shunday qilib dizayn maqsadini boshingizda emas, detalda saqlaysiz.

## Parametr qo‘shish

1. O‘ng panelda {{ui:Parametrlar}} yorlig‘ini bosing.
2. **O‘zgaruvchilar** ostida "name" maydoniga nom yozing, masalan `width`.
3. Keyingi maydonga qiymatini yozing, masalan `120`, va {{key:Enter}} ni bosing (yoki {{ui:Qo‘shish}} ni bosing).

Qiymat son yoki boshqa parametrlarning ifodasi bo‘lishi mumkin: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. **Qiymat** ustuni u nimaga teng bo‘lishini ko‘rsatadi. Nom harf yoki `_` bilan boshlanadi va faqat harflar, raqamlar va `_` dan iborat bo‘ladi; funksiya va birlik nomlari (`sin`, `mm`, `pi`) rad etiladi, shuningdek `a = b` va `b = a` kabi aylanma bog‘lanish ham.

## Raqamni parametrga bog‘lash

1. Tarixdan xususiyatni tanlang, masalan "Extrude1". Uning sozlamalari {{ui:Xususiyatlar}} yorlig‘ida ko‘rinadi.
2. **Chuqurlik (mm)** kabi raqam maydoniga `=` va ifoda yozing: `=thick` yoki `=width / 4`.
3. {{key:Enter}} ni bosing.

Maydonda endi natija ko‘rinadi va yorlig‘i yonida **ƒ** tugmasi paydo bo‘ladi. Tenglamani ko‘rish uchun ustiga olib boring. Eskiz o‘lchamlari ham xuddi shunday ishlaydi: xususiyatning **Eskiz o‘lchamlari** ro‘yxatida ham, ochiq eskizning o‘lchamlar maydonida ham (o‘lchamni ikki marta bosing, `=width` yozing, {{key:Enter}} ni bosing).

Bog‘lash mumkin bo‘lgan raqamlar: ekstrudirlash chuqurligi, aylantirish burchagi, teshik diametri, chuqurlik va kengaytirilgan teshik o‘lchamlari, naqsh soni, oraliq va burchak, yumaloqlash radiusi, faska masofasi, qobiq devor qalinligi, har bir eskiz o‘lchami va yangi xususiyatlarning o‘lchamlari (ikkinchi chuqurlik, konuslik, zenkovka, referens tekislik masofasi, qiyalik burchagi va boshqalar).

## Parametrni o‘zgartirish

{{ui:Parametrlar}} yorlig‘ida **Ifoda** ustunida yangi qiymat yoki ifoda yozing va {{key:Enter}} ni bosing. Unga bog‘langan hamma narsa o‘zgaradi va detal bir qadam sifatida qayta quriladi: {{key:Mod+Z}} uni bekor qiladi.

Raqamni teskari tomondan o‘zgartirish uchun qarang: [Ikki tomonlama tenglamalar](topic:equations-two-way).

## Parametr qayerda ishlatilganini ko‘rish

{{ui:Parametrlar}} yorlig‘ida har bir parametr ostida qator uni kim ishlatayotganini aytadi:

- u boshqaradigan raqamlar, masalan **Extrude1 depth** yoki **Sketch1 D2 (distance)**. Birini bossangiz, uning xususiyati tanlanadi va xususiyatlari ko‘rinadi;
- boshqa parametrlar **orqali** boshqaradigan raqamlar, masalan `d = h + 2` va `h = w / 2` bo‘lganda **Hole1 diameter (through h, d)**;
- ifodalari uni ishlatadigan **parametrlar**, uni o‘rnatadigan **konfiguratsiyalar** va uni o‘qiydigan **skriptlar** (qarang: [Skriptlar yozish va ishga tushirish](topic:craftscript)).

"Hali ishlatilmagan." degani hech narsa uni ishlatmaydi: uni so‘ramasdan o‘chirishingiz mumkin.

## Uzish, qayta nomlash, o‘chirish

- **Raqamni uzish:** uning **ƒ** tugmasini bosing yoki **Tenglamalar** ro‘yxatida {{ui:Uzish}}. U joriy qiymatini saqlaydi va hech bir parametr uni endi o‘zgartirmaydi.
- **Parametrni qayta nomlash:** uning **Nomi** maydoniga yangi nom yozing. Uni ishlatadigan har bir ifoda qayta yoziladi.
- **Parametrni o‘chirish:** uning qatoridagi × ni bosing. Agar biror narsa uni ishlatsa, PartCraft avval uning joriy qiymatini o‘sha ifodalarga yozishni so‘raydi.
- **Xususiyatni o‘chirish** uning raqamlarining tenglamalarini o‘chiradi; holat satri qaysilarini aytadi.

:::note
Parametrlar `.partcraft.json` faylida saqlanadi (3-versiya fayl sifatida). Parametrlari bo‘lmagan detal avvalgidek aynan saqlanadi.
:::

## Ifodalar

| Yozing | Bu nimani anglatadi |
|---|---|
| `120`, `12.5`, `1e3` | son (millimetr yoki burchak uchun gradus) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | boshqa birliklardagi uzunlik, millimetrga aylantiriladi |
| `30deg`, `0.5rad` | burchak, gradusga aylantiriladi |
| `+ - * / %` va `^` | arifmetika; `^` darajadir, `-2^2` bu −4 |
| `sin cos tan asin acos atan atan2` | gradusdagi trigonometriya |
| `sqrt pow exp ln log abs sign` | boshqa funksiyalar |
| `ceil floor int round(x, digits) min max` | yaxlitlash va chegaralar |
| `if(test, a, b)` bilan `< <= > >= == !=` | tanlov: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nomlar katta-kichik harfga sezgir: `Width` va `width` ikki xil parametr.

Shuningdek qarang: [Konfiguratsiyalar va dizayn jadvallari](topic:design-tables) va [Skriptlar va buyruq satri](topic:scripts-and-cli).
