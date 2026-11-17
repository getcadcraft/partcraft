---
title: Muhandislik kutubxonasi
summary: Darslik formulalari oʻqilishi oson skriptlar koʻrinishida, SI birliklarida, har bir natija manbasi bilan: quvur va kanal oqimi, issiqlik uzatish va issiqlik almashtirgichlar, bosim qismlari, gaz dinamikasi, suv va havo xossalari, materiallar hamda tekshiriladigan birliklar. Har biri nimaga yaroqli va qayerda toʻxtashi.
keywords: muhandislik, kutubxona, birliklar, Darcy-Weisbach, Colebrook, Reynolds, ishqalanish koeffitsienti, Dittus-Boelter, Gnielinski, NTU, effektivlik, LMTD, qanot, Barlow, Lamé, shtutser, izentropik, Mach, boʻgʻilgan oqim, suv, havo, xossalar, material, manbalar
from: 786ef967
---

Muhandislik kutubxonasi — Script ish maydonining kutubxonasida (`craftlib/eng`) joylashgan skriptlar toʻplami. Har biri yuqoridan pastga oʻqiladigan funksiya boʻlib, sarlavhasida **usuli**, **birliklari**, **chegaralari**, **adabiyot havolalari** va ishlangan raqami bilan **tekshiruvi** bor. Ular butunlay SI birliklaridan foydalanadi va **birlik** hamda **manba** bilan keladigan kattaliklarni qaytaradi, shuning uchun maʼlumot varagʻi har bir raqam qayerdan olinganini chop eta oladi.

## Tekshiriladigan birliklar

`to_si(10, 'bar', 'Pa')` qiymatni aylantiradi va boshqa narsani oʻlchaydigan birlikni rad etadi (bosim kutilganda uzunlik). `from_si`, `unit_convert(1, 'bar', 'psi')` va `unit_kind('W/(m K)')` ("issiqlik oʻtkazuvchanligi") xuddi shunday ishlaydi. `temp_k(25, 'C')` va `temp_from_k` haroratlarni aylantiradi, chunki ularda siljish bor.

## Xossalar

- `fluid('water', T)` va `fluid('air', T, p)`: zichlik, qovushqoqlik, oʻtkazuvchanlik, solishtirma issiqlik sigʻimi, Prandtl soni. Suv 0 dan 100 °C gacha, havo 250 dan 600 K gacha; undan tashqarida u ekstrapolyatsiya qilmasdan toʻxtaydi.
- `material('ss304')`: Yung moduli, Puasson koeffitsienti, zichlik, oqish chegarasi, oʻtkazuvchanlik, solishtirma issiqlik sigʻimi, kengayish: Simulation bilan bir xil maʼlumot varaqlaridan olingan xona harorati qiymatlari. Haqiqiy loyiha yetkazib beruvchining sertifikatlangan raqamlaridan foydalanadi. Harorat egri chiziqlari hali qurilmagan.

## Quvur va kanallardagi oqim

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, soʻng turbulent oqim uchun Colebrook tenglamasi; 2300 dan 4000 gacha diapazonda ishonchli formula yoʻq va buni aytadi), `darcy_weisbach`, `minor_loss`, `pipe_flow` (dumaloq quvur, hammasi bir vaqtda) va `rect_channel` (Shah va London moslashuvi boʻyicha laminar toʻrtburchak kanallar).

## Issiqlik uzatish

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (laminar yoki turbulentni tanlaydi va korrelyatsiyani nomlaydi), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` va `ntu_for` (qarama-qarshi oqim, parallel, qobiqli-quvurli, kesishgan oqim va bitta oʻzgaruvchan oqim uchun effektivlik-NTU munosabatlari) va `hx_size` (yuk talab qiladigan UA oʻlchamini; yuk bajarib boʻlmaydigan boʻlsa, qancha mumkinligini aytadi).

## Bosim qismlari

`allowable_stress` (oqish chegarasi xavfsizlik koeffitsientiga boʻlingan), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, halqa yoki siljish mezoni boʻyicha) va `wall_sphere`. Bular darslik zaxiralari, **bosim idishi kodi boʻyicha hisob emas**: korroziya zaxirasi, birikma samaradorligi yoki kod koeffitsientlari yoʻq.

## Gaz dinamikasi

`isentropic` (Mach soni boʻyicha nisbatlar), `mach_from_area`, `choked_flow`, `throat_area` va `exit_mach` — ishqalanishsiz, issiqliksiz va zarbalarsiz ideal gaz uchun.

## Natijani tekshirish

`check_stress`, `check_thermal` va `check_flow` skriptdan yaratilgan detalda PartCraft’ning oʻz kuchlanish, issiqlik oʻtkazuvchanlik va oqim yechuvchilarini ishga tushiradi hamda maksimal kuchlanish va siljishni, haroratlar va issiqlik oqimini, kanal tarmogʻining oʻtkazuvchanligini qaytaradi. Ular yechuvchilarning oʻzini hech narsa bilan oʻzgartirmaydi. Kuchlanish va harorat tekshiruvlari vokseldan foydalanadi, shuning uchun egri yuza pogʻonali boʻladi va oʻtkir ichki burchakdagi yoki nuqtaviy yuk ostidagi kuchlanish voksel oʻlchamiga bogʻliq boʻladi.
