---
title: Chizmani lazerga yuborish
summary: Har bir qatlam nima qilishini tanlang (kesish, chizish, gravirovka, toʻldirish, rasm), boshning harakatlarini oldindan koʻring, GRBL lazer rejimi G-code ni saqlang yoki ishni ramkalagandan soʻng brauzerdan yuboring.
keywords: lazer, lazerli kesish, lazer gravirovkasi, GRBL, G-code, gravirovka, toʻldirish, dithering, rasm gravirovkasi, chizish, kesish, Web Serial, Linux, ishni ramkalash, quvvat, tezlik, oʻtishlar
from: 327b3c46
---

{{ui:Lazer}} paneli chizmaning qatlamlarini GRBL ishlaydigan lazer uchun dasturga aylantiradi (koʻpchilik havaskor va kichik sex diod hamda CO2 boshqaruvchilari). PartCraft da {{ui:Eksport}} › {{ui:Lazer dasturi…}} ni tanlang, soʻng {{ui:DXF dan konturlar qoʻshish…}}: konturlar va teshiklar CUT qatlamiga tushadi. List metall detallarning yoyilmalari (BEND qatlamida egilish chiziqlari bilan) aniq yadroni talab qiladi, bu versiyada u yoʻq. Sozlamalar detal yoki yigʻma faylida saqlanadi.

:::warning
Har bir sozlamani avval chiqindi materialda sinab koʻring, lazeringizga mos koʻz himoyasini taqing, boʻlsa qopqogʻini yopiq tuting va ishlayotgan lazerni hech qachon yolgʻiz qoldirmang. Qatlam bilan boshlanadigan raqamlar joy egallovchi qiymatlar, hech qanday material uchun tavsiya emas.
:::

## Har bir qatlam nima qilishini tanlang

Chizmaning har bir qatlami alohida qatordir. {{ui:Bajaradi}} uni **Kesish**, **Chizish**, **Chiziqlarni gravirovka qilish**, **Shakllarni toʻldirish**, **Rasmni gravirovka qilish** yoki **Yuborilmaydi** holatiga oʻrnatadi, shuningdek {{ui:Quvvat %}}, {{ui:Tezlik mm/min}} va {{ui:Oʻtishlar}} soni bilan.

- **Toʻldirish** yopiq shakllarning ichini chiziqlar bilan kuydiradi, chiziqlar orasi {{ui:Chiziqlar oraligʻi}}, {{ui:Burchak}} ostida, ikki yoʻnalishda yoki bir yoʻnalishda, lazer yonganda bosh tezlikda boʻlishi uchun overscan bilan; kesishgan shtrixlash 90° da ikkinchi oʻtishni qoʻshadi. Teshigi bor shakl teshik joyida ochiq qoladi.
- **Rasmni gravirovka qilish** rasmni nuqtalarga aylantiradi (Floyd–Steinberg, Atkinson, tartibli yoki chegara boʻyicha oddiy qora-oq), yoki *Kulrang darajalar* bilan oʻzgaruvchan quvvatga.
- Tartib: avval rasmlar va toʻldirishlar, soʻng chiziqli gravirovka, soʻng chizishlar, keyin kesishlar, shunda kesib olingan detal gravirovka vaqtida siljimaydi. Bitta qatlam ichida yoʻllar **ichki-birinchi** tartibda boradi (teshik oʻz plastinkasidan oldin), eng yaqini keyingi.

## Oldindan koʻring, soʻng saqlang

Oldindan koʻrish bosh nima qilishini chizadi: kuydiradigan chiziqlar rangda, tez harakatlar kulrangda va kuydiriladigan hamma narsa atrofida yashil quti. Uning pastida oʻlcham, kuyish uzunligi va vaqt baholari (tezlanishsiz; haqiqiy stanok koʻproq vaqt oladi). {{ui:G-code ni saqlash…}} GRBL lazer rejimida G-code yozadi: `$32=1`, S qiymatlari bilan `M4` (yoki `M3`), `G0` va `G1` harakatlar, oxirida `M5`. Chizmaning koordinata boshini tanlamasangiz, X0 Y0 ish joyining pastki chap burchagi boʻladi: stanokingizning ish nolini shu yerga qoʻying. G-code GRBL ning hujjatlashtirilgan lazer rejimiga amal qiladi; u hali haqiqiy lazerda sinab koʻrilmagan.

## Brauzerdan yuborish

Chrome va Edge da {{ui:Ulash…}} lazerning USB portini tanlashni soʻraydi. Tugmani bosmaguningizcha hech narsa ulanmaydi va yuborilmaydi. Avval {{ui:Ishni ramkalash}} ni bosing: bosh lazer **oʻchiq** holatda (yoki koʻrsatkich uchun siz belgilagan past quvvatda) ishning quti chizigʻini chizadi, shunda qayerda kuydirishini koʻrasiz. Shundan keyingina {{ui:Ishni yuborish}} yoqiladi va biror narsani oʻzgartirsangiz, yana oʻchadi. {{ui:Toʻxtatib turish}} boshni ushlab turadi, {{ui:Toʻxtatish}} ham uni ushlab turadi, boshqaruvchini qayta oʻrnatadi (lazer oʻchadi) va `M5` yuboradi. Web Serial boʻlmagan joylarda (Firefox, Safari va CadCraft Studio, uning veb koʻrinishida hali yoʻq) G-code ni saqlang va lazeringizning oʻz dasturi bilan yuboring.

## Hali qurilmagan

Boshqa boshqaruvchilarning formatlari (Ruida, Marlin lazerlari, ishlab chiqaruvchi fayllari), ushlagichlar va kirish-chiqish yoylari, kerf ofseti, material kutubxonalari, aylanma va Z oʻqlari, kamera tekislash.
