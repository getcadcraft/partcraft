---
title: Zondlash — detalni topish va ishchi siljishni oʻrnatish
summary: Zond bilan yuqori yuzni, yonni, teshikni yoki boʻrtiqni tegizing va boshqaruv ishchi siljishni detal haqiqatda turgan joyga siljitsin yoki faqat oʻlchasin. Har bir boshqaruv nimani qila oladi va nima isbotlanmagan.
keywords: zond, zondlash, tekshiruv zondi, tegish, ishchi siljish, g54, g31, g38.2, oʻtkazib yuborish, bazis, markazni topish, teshik, boʻrtiq, qirra, nolni oʻrnatish, oʻlchash, tekshirish, g10
from: 1f718b82
---

{{ui:Zondlash}} Ishlab chiqarishda zondlash siklini dasturga yozadi: zond detalga tegadi va boshqaruv ishchi siljishni (G54) yuzaning topilgan joyi bilan model qayerda deb aytgan joy orasidagi farqqa siljitadi. Keyingi operatsiyalar detal haqiqatda turgan joyda kesadi.

**Bu yerdagi hech narsa stanokda ishga tushirilmagan.** Zond tegishidan oldingi harakatlar oddiy harakatlar: zond oʻzi zondlash harakatiga qadar kuzatilmaydi. Uni sekin, avval havoda, qoʻlingiz feed hold ustida turgan holda ishga tushiring.

## Foydalanish

1. **Asboblar** yorligʻida birinchi zondlash operatsiyasi **tegish zondi** qoʻshadi: uning shar diametri va zondlash berilishi (belgilamasangiz 100 mm/min).
2. Ishlab chiqarish asboblar panelidagi {{ui:Koʻproq}} ni bosing, soʻng {{ui:Zondlash}} ni va tegiladigan narsani bosing. Har bir tanlash bitta sikl, siz bosgan tartibda:

| Tanlash | Sikl | Nima oʻrnatiladi |
|---|---|---|
| Asbob oʻqiga qaragan yassi yuz | Bir marta pastga tegish | Z |
| X yoki Y ga perpendikulyar yassi yon yuz | Yuzga qarab bir marta tegish, uning yuqorisidan biroz pastda | X yoki Y |
| Asbob oʻqi boʻylab teshik yoki boʻrtiq | Toʻrt marta tegish (+X, −X, +Y, −Y) | Uning markazining X va Y si |

3. **Natija bilan**: {{ui:Ishchi siljishni oʻrnatish}} yoki {{ui:Faqat oʻlchash}}.
4. **Shu masofadan boshlash** va **Shu masofadan oʻtib qidirish** — zondlash harakati kutilgan sirtdan qanchaga boshlanishi va boshqaruv taslim boʻlishidan oldin zond qanchagacha oʻtishi mumkinligi. **Chuqurlik** — shar teshik, boʻrtiq yoki yon yuzning yuqorisidan qanchaga pastga ketishi.

Zondlash operatsiyasini birinchi qoʻying, hech narsa kesilishidan oldin.

## Har bir boshqaruv nimani yozadi

| Boshqaruv | Tegish | Natija |
|---|---|---|
| Fanuc uslubidagi | `G31`, pozitsiya `#101` dan `#104` gacha saqlanadi | Siljish oʻzgaruvchilari (`#5221` dan `#5223` gacha) topilgan − kutilgan qiymatga siljitiladi. Faqat oʻlchash: farq `#110` (va `#111`) da qoldiriladi. |
| LinuxCNC | `G38.2`, pozitsiya nomlangan parametrlarda saqlanadi | Yangi siljish bilan `G10 L2 P1`. Faqat oʻlchash: `(DEBUG, …)` xabari. |
| GRBL | `G38.2` | Bitta tegish oʻqni `G10 L20 P1` bilan oʻrnatadi. GRBL oʻzgaruvchilarga ega emas, shuning uchun u **markazni hisoblay olmaydi**: fayl buni izohda aytadi va hech narsa oʻrnatmaydi. |

Hisob-kitob postniki, shuning uchun uni oʻzgartirishingiz mumkin: hodisalar `probe-move` va `probe-set` ([Tahrirlanadigan postprotsessorlar](topic:post-processors)).

## Cheklovlar

- Bitta ishchi siljish (G54). Faqat oʻqlarga perpendikulyar yuzlar: burchak yoʻq, burchak sikli yoʻq, ishni aylantirish yoʻq.
- Asbob oʻrnatgich yoʻq, singan asbobni tekshirish yoʻq, oʻlchamni tolerantlik bilan solishtirish yoʻq, hisobot yoʻq.
- Zond uchun shpindel ishga tushirilmaydi va sovutish suyuqligi oʻchiq qoladi; shpindeldagi asbob zond ekanligini hech narsa tekshirmaydi.
- Zaxira simulyatsiyasi zondlash yoʻlini ishga tushirmaydi.
- Zondning oʻz kalibrlashi (shar siljishi, igna egilishi, ishga tushish yoʻnalishi) boshqaruvniki.
