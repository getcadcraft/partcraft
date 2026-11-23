---
title: 4 va 5 oʻqli ishlov berish
summary: PartCraft ga stanokda qanday aylanma oʻqlar borligini ayting, har qanday oddiy operatsiya uchun asbobni egib qoʻying, sirtni kesish paytida egiladigan shar uchli freza bilan pardozlang yoki 4-oʻqda detalni asbob ostida aylantiring. G-code ga nima yozilishi va nima isbotlanmagani.
keywords: 5 oʻq, besh oʻq, 4 oʻq, toʻrtinchi oʻq, koʻp oʻqli, multiaxis, 3+2, indekslangan, pozitsion, egish, egilgan asbob, aylanma, trunnion, stol, bosh, A oʻqi, B oʻqi, C oʻqi, TCP, RTCP, asbob uchi markazi, G43.4, teskari vaqt, G93, kinematika, oʻq atrofi, swarf, yetaklash burchagi
from: c4f1c491
---

Ishlab chiqarish asbobni burchak ostida ushlab turishi va kesish paytida aylanma oʻqlarni harakatlantirishi mumkin. Uchta narsa buni bajaradi, eng oddiydan boshlab.

**Bu yerdagi hech narsa stanokda ishga tushirilmagan.** Yoʻllar testlar orqali geometriya bilan tekshirilgan va G-code oʻqib qaytarilgan, ammo oʻrnatilgan postlar boshqaruvlarning hujjatlashtirilgan kodlariga mos keladi, biz oldimizdagi hech qanday stanokka emas. Dasturni boshqaruvingizning oʻz simulyatorida va metallga tegishidan oldin havoda isbotlang.

## Stanokning aylanma oʻqlari

**Sozlash** yorligʻida {{ui:Aylanma oʻqlar}} stanokda nima borligini koʻrsatadi:

| Tanlov | Stanok |
|---|---|
| Yoʻq (3 oʻq) | Oddiy freza. Asbob egilishi kerak boʻlgan har qanday operatsiya ogohlantiradi, post uni yozishdan bosh tortadi. |
| A (X atrofida aylanadi) | X boʻylab bitta aylanma oʻq: 4-oʻq stoli yoki indekser. Asbob faqat Y–Z tekisligida egilishi mumkin. |
| B (Y atrofida aylanadi) | Y boʻylab bitta aylanma oʻq. Asbob faqat X–Z tekisligida egilishi mumkin. |
| A va C | X atrofidagi egiluvchi oʻq, Z atrofidagi burilishni olib yuruvchi yoki olib yuruvchi: trunnion stol yoki bosh. |
| B va C | Xuddi shu, egilish Y atrofida. |

Shuningdek:

- **Olib yuriladi**: {{ui:Stol (detal aylanadi)}} yoki {{ui:Bosh (asbob aylanadi)}}. Stol teskari yoʻnalishda aylanadi, bir xil yuzni asbob ostiga keltirish uchun, shuning uchun har bir burchakning ishorasi shundan kelib chiqadi.
- **Boshqaruv asbob uchini yoʻlda ushlab turadi (TCP)**: yoqilgan boʻlsa, dasturdagi X Y Z detalning oʻz koordinatalaridagi asbob uchi boʻladi va qolgan ishni boshqaruv bajaradi (oʻrnatilgan Fanuc uslubidagi va LinuxCNC postlari asbob uzunligi uchun `G43.4` yozadi). Oʻchirilgan boʻlsa, stol turadigan stanokda PartCraft X Y Z ni aylanuvchi stol detalni olib yurgan holda yozadi, siz bergan **aylanish markazi** atrofida (ishchi koordinatalarda; ishchi boshlangʻich nuqta markazda boʻlsa 0, 0, 0). Bosh stanokka TCP yoqilgan boʻlishi kerak: aks holda dasturga stanokning oʻq uzunligi kerak boʻladi, PartCraft esa uni bilmaydi.
- **Egilish chegarasi**: egiluvchi oʻq qancha yurishi mumkin.

Stanoklar musbat deb hisoblash yoʻnalishida farq qiladi. Agar sizda oʻq notoʻgʻri tomonga aylansa, postning nusxasida ishorani oʻzgartiring ([Tahrirlanadigan postprotsessorlar](topic:post-processors)).

## Oddiy operatsiya uchun egilgan asbob

Har bir frezalash operatsiyasi (yuza, oyma, moslashuvchan, kontur, burgʻilash, faska, parallel, scallop, 3D qoʻpol, qoldiq) **Asbob egilishi** va **Egilish yoʻnalishi** ga ega: faqat shu operatsiya uchun asbob yoʻnalishi, sozlashning asbob oʻqidan oʻlchanadi. Bu 3+2 ishlov: aylanma oʻqlar bir holatga boradi va uch oʻq kesayotgan paytda shu yerda qoladi.

- Ikki burchakni kiriting yoki {{ui:Asbobni tekislikka rostlash}} ni bosing va yassi yuzni bosing: asbob unga toʻgʻridan-toʻgʻri qaraydi.
- Operatsiyaning yuzlari va qirralarini odatdagidek tanlang. Taglik yoki teshik deb nimani hisoblash egilgan asbob boʻylab baholanadi.
- Shu yoʻnalish uchun zaxira aylantirilgan zaxirani ushlab turadigan quti boʻladi, shuning uchun balandliklar va xavfsiz masofalar shu tomondan xavfsiz boʻladi.

G-code da operatsiyadan oldin asbob koʻtariladi, aylanma oʻqlar buriladi va asbob birinchi nuqtasi ustiga tushadi. TCP oʻchiq stolli stanokda yoylar yoy boʻlib qoladi va tayyor burgʻulash sikllari sikl boʻlib qoladi (yozilgan ramka faqat Z atrofida buriladi). Egilgan tekislikda TCP bilan yoylar qisqa chiziqlarga, sikllar esa ular ifodalaydigan harakatlarga aylanadi.

Zaxira simulyatsiyasi egilgan yoʻnalishni **alohida** ishga tushiradi: u shu operatsiya butun zaxiradan qanday kesishni uning tomonidan koʻrilganidek koʻrsatadi va u yerda ortiqcha kesishlarni topadi, lekin boshqa yoʻnalishlardan bajarilgan kesishlar koʻchirilmaydi.

## 5 oʻqli pardozlash

Ishlab chiqarish asboblar panelidagi {{ui:Koʻproq}} bu operatsiya va keyingisini **Operatsiyalar** yorligʻining yuqorisida sanab oʻtadi.

{{ui:5 oʻqli}} — [parallel pardozlash oʻtishi](topic:finish-3d) boʻlib, **oʻtish davomida egiladigan shar uchli freza** bilan. Shar sfera bilan kesadi va sfera asbob markazi atrofida qaysi tomonga egilmasin bir xil boʻladi, shuning uchun shar 3 oʻqli oʻtish beradigan yoʻlni aniq kuzatadi va faqat asbobning yoʻnalishi oʻzgaradi:

- **Sirt tomon**: 1 = sirtga perpendikulyar, 0 = tik, oraliqdagi istalgan qiymat.
- **Oldinga egilish**: kesish yoʻnalishi boʻylab gradus, shunda sharning harakatsiz markazi kesmaydi.
- **Eng katta egilish**: asbob sozlashning oʻqidan bundan koʻp egilmaydi.

Dastak model bilan tegadigan joyda egilish kesilib, tozalanguncha orqaga qaytariladi va operatsiya necha nuqtada shunday boʻlganini aytadi. Har bir oʻtish toʻgʻri koʻtarish bilan kiriladi va chiqiladi.

## Aylanma pardozlash (4-oʻq)

{{ui:Aylanma}} aylanma oʻqda **ishchi X** boʻylab ushlangan detal uchun. Detal aylanadi va shar uchli freza, doim oʻqqa qaragan holda, uning sirtiga ergashadi:

- **Oʻtishlar**: {{ui:Oʻq boʻylab}} (X boʻylab chiziqlar, aylanish boʻyicha bir qadam masofasida) yoki {{ui:Detal atrofida}} (halqalar, X boʻyicha bir qadam masofasida).
- **Oʻq Y / Z da**: oʻq qayerda. Boʻsh qolsa — zaxiraning oʻrtasi. TCP oʻchiq stolli stanokda bu Sozlashdagi aylanish markazi boʻlishi kerak; aks holda operatsiya ogohlantiradi.
- **X dan / X gacha** va **burchakdan / burchakkacha**: kesiladigan uzunlik va aylanish qismi.

Har bir nuqtada oʻq ustidagi sharning balandligi shu tomondan detal toʻrida sferaning aniq tushishi boʻladi.

## Cheklovlar

- 5 oʻqli va aylanma pardozlash faqat **shar uchli freza**ni oladi. Swarf kesish yoʻq (chiziqli devordagi asbob yon tomoni), sirtning oʻz yoʻnalishlari boʻylab oqim chiziqlari yoʻq, koʻp oʻqli qoʻpol ishlov yoʻq va toʻqnashuvdan qochish uchun egilishni avtomatik tanlash yoʻq.
- 5 oʻqli va aylanma yoʻllar **zaxira simulyatsiyasidan oʻtkazilmaydi**, u balandlik xaritasi boʻlib, egilgan kesishni ushlay olmaydi.
- 5 oʻqli pardozlashda dastak yuqoridan koʻrinadigan model bilan tekshiriladi; tutgich, shpindel va stanokning oʻzi hech qayerda tekshirilmaydi.
- Aylanma pardozlash faqat oʻqqa qarab asbob koʻra oladigan narsalarni kesadi.
- Katta detalda 5 oʻqli pardozlashni hisoblash bir daqiqa yoki undan koʻproq vaqt oladi: dastak har bir oʻtishning har bir nuqtasida tekshiriladi.
- Aylanma oʻqlar chiziqli oʻqlar bilan birga harakatlanganda va TCP oʻchiq boʻlsa, oʻrnatilgan postlar berilishni teskari vaqt sifatida (`G93`) yozadi, soʻng `G94` ga qaytadi.
- Egilgan ishchi tekislik kodi (`G68.2` va shunga oʻxshash) yozilmaydi, stanokka xos chegaralar, aylantirib yechish yoki toʻqnashuv zonalari maʼlum emas.
