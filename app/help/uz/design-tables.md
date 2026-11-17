---
title: Konfiguratsiyalar va loyiha jadvallari
summary: Detalning bir necha oʻlchamlari va versiyalarini detal faylida saqlanadigan nomlangan konfiguratsiyalar sifatida saqlang, har birida funksiyalar yoqilgan yoki oʻchirilgan holda, bir marta bosish bilan almashtiring, ularni CSV loyiha jadvali sifatida olib kiring yoki chiqaring, yoki hammasini buyruq satridan yarating.
keywords: loyiha jadvali, konfiguratsiyalar, konfiguratsiya, oʻlchamlar, detallar oilasi, csv, elektron jadval, variantlar, jadvalga asoslangan, vaqtincha oʻchirish, oʻchirilgan, funksiyani oʻchirish, bilan yoki bilansiz, konfigurator
from: 17249afb
---

**Konfiguratsiya** — detalning bir oʻlchami: uning parametrlari uchun nomlangan qiymatlar toʻplami. Detal konfiguratsiyalarini oʻz faylida saqlaydi, shuning uchun ular u bilan birga koʻchadi. **Loyiha jadvali** xuddi shu narsa, faqat CSV fayl shaklida, har bir konfiguratsiya uchun bitta qator bilan.

Konfiguratsiyalar **parametrlarni** belgilaydi, shuning uchun avval ularni qoʻshing ([Parametrlar bilan detalni boshqarish](topic:parameters) ga qarang). Konfiguratsiya oddiy son boʻlgan parametrlarni saqlaydi; boshqalardan hisoblangan parametrlar (masalan, `area = w * d`) oʻzidan kuzatib boradi.

## Konfiguratsiyani saqlash

1. {{ui:Parametrlar}} yorligʻida bitta oʻlcham uchun parametrlarni sozlang.
2. **Konfiguratsiyalar** ostida nom yozing (masalan `Katta`) va {{ui:Joriy qiymatlarni saqlash}} tugmasini yoki {{key:Enter}} ni bosing.

Yangi konfiguratsiya **faol** deb belgilanadi. Keyin parametrni oʻzgartirsangiz, u **faol, shundan beri oʻzgartirilgan** deydi, shunda detal endi unga mos emasligini bilasiz.

## Almashtirish, yangilash, qayta nomlash, oʻchirish

- {{ui:Qoʻllash}} parametrlarni shu konfiguratsiya qiymatlariga oʻrnatadi va detalni qayta quradi.
- {{ui:Yangilash}} joriy qiymatlarni shu konfiguratsiyaga saqlaydi.
- Uni qayta nomlash uchun yangi nomni uning katagiga yozing va {{key:Enter}} ni bosing.
- {{ui:Oʻchirish}} konfiguratsiyani olib tashlaydi. Parametrlar oʻz qiymatlarini saqlaydi.

Bularning har biri bitta qadam: {{key:Mod+Z}} ortga qaytaradi. Agar parametrni qayta nomlasangiz, har bir konfiguratsiya yangi nomga ergashadi; agar birortasini oʻchirsangiz, u ulardan chiqib ketadi.

## Konfiguratsiyada funksiyalarni yoqish va oʻchirish

Konfiguratsiya qaysi funksiyalar oʻchirilganini ham saqlaydi, shuning uchun bitta detalning biror narsasi **bilan** va **bilansiz** versiyalari boʻlishi mumkin: montaj teshiklari, fas, boʻrtma.

1. Funksiyani oʻchiring: uni tarixda bosing, soʻng {{ui:Xususiyatlar}} ichidagi {{ui:Vaqtincha oʻchirish}} tugmasini bosing.
2. Konfiguratsiyani odatdagidek saqlang, masalan `Teshiksiz`. Uning qatori nimani oʻchirishini sanab beradi.
3. Funksiyani {{ui:Qayta yoqish}} bilan qayta yoqing va boshqa konfiguratsiyani saqlang, masalan `Teshikli`.

Biror konfiguratsiya funksiyani oʻchirgach, konfiguratsiyani qoʻllash uning funksiyalarini oʻchiradi va **boshqa barcha funksiyalarni yoqadi**, parametr qiymatlari bilan birga, bitta qadamda. Funksiyalar oʻchirilishidan oldin saqlangan konfiguratsiya "hammasi yoqilgan" deb hisoblanadi. {{ui:Yangilash}} funksiyalarni hozirgi holatida, qiymatlar bilan saqlaydi.

Konfiguratsiyalari funksiyalarni oʻchiradigan detal yangiroq fayl versiyasi sifatida saqlanadi: eskiroq PartCraft uni ularsiz ochish oʻrniga fayl yangiroq versiyadan ekanini aytadi.

:::note
CSV loyiha jadvali faqat parametr qiymatlarini olib yuradi. Jadvalni konfiguratsiya ustiga import qilish uning qiymatlarini oʻzgartiradi va oʻchirgan funksiyalarini saqlab qoladi; buyruq satridagi `--table` faqat qiymatlarni yaratadi.
:::

Detal fayli konfiguratsiyalar bilan va qaysi biri faol boʻlgan boʻlsa, oʻsha bilan saqlanadi. Detal oʻzi saqlangan qiymatlar bilan ochiladi.

## Loyiha jadvalini olib kirish yoki chiqarish

Loyiha jadvali har bir parametr uchun ustun va har bir konfiguratsiya uchun qator bilan CSV fayl:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Birinchi ustun `name`, `config` yoki `configuration` deb atalishi mumkin; boshqa har bir ustun detalning parametri nomi boʻlishi shart. Katakchalar sonlar, xohlasangiz birliklar bilan (`8in`). Boʻsh katak bu parametrni qatordan chiqarib tashlaydi.

- {{ui:CSV import}} har bir qatorni konfiguratsiya sifatida qoʻshadi. Mavjud konfiguratsiya nomli qator uni almashtiradi. Import bitta qadam.
- {{ui:CSV eksport}} konfiguratsiyalarni yozib chiqaradi. Hali yoʻq boʻlsa, joriy qiymatlar bitta qator qilib yoziladi — elektron jadval uchun boshlangʻich nuqta.

Elektron jadval formula deb oʻqiydigan konfiguratsiya nomi (`=`, `+`, `-` yoki `@` bilan boshlangan) boshida `'` belgisi bilan yoziladi.

## Barcha oʻlchamlar bir vaqtda

{{ui:Variantlar toʻplami…}} **Konfiguratsiyalar** ostida barcha konfiguratsiyalarni yoki tanlanganlarni bitta zip faylda STEP, IFC, DWG va oldindan koʻrish sifatida, ularning parametrlari jadvali bilan yaratadi: qarang [Konfiguratsiyalaringizdan variantlar toʻplamini yasash](topic:variant-pack).

Buyruq satri vositasi CSV loyiha jadvalining har bir qatori uchun bitta fayl yaratadi:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Avval konfiguratsiyalarni CSV sifatida eksport qiling, soʻng oʻsha faylni `--table` bilan uzating. Qarang: [Skriptlar va buyruq satri](topic:scripts-and-cli). Skript sifatida saqlangan detal oʻz konfiguratsiyalarini `configs json …` qatorida saqlaydi.
