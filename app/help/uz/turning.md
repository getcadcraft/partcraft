---
title: Tokarlik stanokida tokarlik
summary: Aylanayotganda hosil qiladigan kontur boʻyicha detalni yuzlash, qoʻpol ishlov, pardozlash, ariqcha ochish, ajratish, rezba ochish va burgʻulash. Tokarlik asboblari, aylanishga berilish, tokarlik postlari va nima isbotlanmagani.
keywords: tokarlik, tokar, aylantirish, yuzlash, qoʻpol ishlov, pardozlash, ariqcha, ajratish, kesib olish, rezba, rezba ochish, g32, g33, g96, doimiy sirt tezligi, css, uch radiusi, plastina, sterjen, patron, diametr, aylanishga berilish, g71, g76
from: d8cc53b0
---

Ishlab chiqarishda tokarlik uchun yettita operatsiya bor. Ular istalgan detalda ishlaydi: kesiladigan narsa detal markaz atrofida aylanganda hosil qiladigan **kontur**, shuning uchun aylanmaydigan detal ushlab turuvchi aylana shakligacha tokarlanadi.

**Bu yerdagi hech narsa tokarlik stanokida ishga tushirilmagan.** Yoʻllar testlar bilan geometriyaga qarshi tekshirilgan; ikki tokarlik posti boshqaruvlarning hujjatlashtirilgan kodlariga amal qiladi. Dasturni avval boshqaruvingizning oʻz simulyatorida va havoda isbotlang.

## Sozlash

**Sozlash** yorligʻida:

- **Asbob oʻqi** shpindel oʻqi, tokarning Z i. Detalning oldi +Z da; patron ikkinchi uchini ushlaydi.
- **Zaxira**: {{ui:Silindr}} ni tanlang — sterjen. Uning yuqori siljishi yuzlash kesimi olib tashlaydigan narsadir.
- **Ishchi boshlangʻich nuqtasi**: zaxira yuqorisi yoki model yuqorisi markazi Z0 ni oldingi yuzga qoʻyadi — odatiy joy.
- **Boshqaruv**: {{ui:Fanuc uslubidagi tokar (.nc)}} yoki {{ui:LinuxCNC tokar (.ngc)}}. Frezalash posti tokarlik dasturini rad etadi va buni aytadi.
- **Shpindelning maksimal tezligi**: sirt tezligi ostida ushlab turiladigan chegara.

Ishlab chiqarish asboblar panelidagi {{ui:Koʻproq}} **Operatsiyalar** yorligʻining yuqorisida yettita tokarlik operatsiyasini sanab oʻtadi. Birinchi qoʻshgan operatsiyangiz oʻz asbobini olib keladi: **tokarlik plastinasi** (uch radiusi, plastina burchagi, kesuvchi qirra burchagi) yoki **ariqcha asbobi** (kengligi, burchak radiusi, qanchagacha yetishi). Ularni **Asboblar** yorligʻida oʻzgartiring. Berilish aylanishga, tezlik esa m/min da sirt tezligi boʻladi, diametr oʻzgarganda boshqaruv uni ushlab turadi; tezlikni qatʼiy qoʻyish uchun asbobga oʻz rpm ini bering.

## Operatsiyalar

| Operatsiya | Nima qiladi |
|---|---|
| {{ui:Yuza}} | Sterjenning oldini detalgacha yuzlaydi, qadam bilan, tashqaridan markazdan biroz oʻtgunchagacha. |
| {{ui:Qoʻpol}} | Z boʻylab **kesish chuqurligi** bilan ajratilgan oʻtishlar, kontur va **qoldiriladigan zaxira** gacha; soʻng pogʻonalarni olib tashlash uchun kontur boʻylab bir marta. Ikki pogʻona orasidagi chuqurlikka bir kesish chuqurligiga teng botirish bilan kiriladi. |
| {{ui:Ishlov}} | Kontur boʻylab bitta oʻtish, asbob berilishining bir boʻlagida. |
| {{ui:Ariqcha}} | Plastinani yonma-yon botiradi, qaerda u hali qolgan zaxiraning chegarasidan koʻprogʻini ololsa: tokarlik plastinasi yeta olmagan ariqchalar. **Z dan / Z gacha** uni toraytiradi. |
| {{ui:Detalni ajratish}} | Detalni orqa yuzining orqasidan kesib ajratadi, markazdan biroz oʻtgunchagacha, belgilasangiz peck lar bilan. |
| {{ui:Rezba}} | Tashqi rezba: tashqi diametr, qadam, uzunlik, oʻtishlar soni. Chuqurlik 0 — 0.6134 × qadam degani (60° rezba). Har bir oʻtish bir xil talaş yuzasini oladi; silliqlovchi oʻtishlar oxirgisini takrorlaydi. |
| {{ui:Burgʻilash}} | Markaz chizigʻida chuqurlikkacha burgʻu, peck lar bilan. |

## Asbob detalga qanday tegmay turadi

Plastina oʻzi boʻlgani kabi hisoblanadi: uning uchi aylanasi va undan orqada orqa qirra, toʻgʻri chiziq, burchagi 180° dan kesuvchi qirra burchagi va plastina burchagini ayirganga teng. Bu shakl Z boʻylab har bir nuqtada konturga tushiriladi va yoʻl uning tinch turgan joyidir. Shunday:

- **Uch radiusi yoʻlga allaqachon kiritilgan.** Postlar `G41` yoki `G42` yozmaydi; koordinatalar asbobning dasturlangan nuqtasi (uch atrofidagi kvadratning burchagi).
- Plastina **orqa qirrasidan tikroq devorga ergasha olmaydi**. Pogʻona ortidagi ariqcha tegilmaydi, va pardozlash operatsiyasi konturning qancha qismiga yeta olmaganini aytadi. {{ui:Ariqcha}} operatsiyasi uni oladi.
- Zaxira har bir kesishdan keyin Z boʻylab kuzatiladi, shuning uchun qoʻpol ishlov havoni kesmaydi, ariqcha qolganini topadi va har bir operatsiya olib tashlagan hajmni hamda detalga kirgan-kirmaganini koʻrsatadi.

## Cheklovlar

- **Faqat tashqi tokarlik**: teshish sterjeni yoʻq, ichki ariqchalar yoki rezbalar yoʻq, yuzdagi ariqchalar yoʻq.
- Bitta shpindel, detal −Z da ushlanadi. Qoʻshimcha shpindel yoʻq, jonli asboblar yoʻq, C yoki Y oʻqi yoʻq, turgʻun tayanch yoki orqa babka harakatlari yoʻq.
- Yoʻllar toʻgʻri harakatlar: egri chiziqlar tolerantlik ichida qisqa chiziqlar (`G2`/`G3` yoʻq), qoʻpol ishlov va rezba oʻtishma-oʻtish yoziladi (`G71` yoki `G76` sikllari yoʻq).
- Rezba toʻgʻri oʻtishlar va oxirida toʻgʻri chiqish bilan; rezbaga boʻshatish ariqchasi bering. Rezba zaxirada koʻrsatilmaydi.
- Markazda burgʻulash zaxira modelini oʻzgartirmaydi.
- Tutgich, burilma kallak va patron tekshirilmaydi. Asbobni jagʻlardan uzoqda tutish uchun **Z da toʻxtatish** ni belgilang.
- Berilish va tezliklar boshlangʻich qiymatlar, frezalashdagidek.
