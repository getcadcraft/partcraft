---
title: Fayl formatlari
summary: PartCraft oʻqiydigan va yozadigan har bir fayl, kengaytmalari, birliklari, oʻqlari va nimani saqlab qolishi yoki yoʻqotishi bilan.
keywords: formatlar, fayl turlari, kengaytmalar, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, birliklar, z yuqoriga
from: 4d0ecbee
---

| Format | Kengaytma | Ochish | Saqlash yoki eksport | Birliklar | Yuqori oʻq | Saqlaydi |
|---|---|---|---|---|---|---|
| PartCraft detali | `.partcraft.json` | Ha | {{ui:Saqlash}} | mm | Y | Toʻliq tarix: eskizlar, bogʻlanishlar, oʻlchamlar, elementlar, vaqtincha oʻchirish, qaytarish, egri chiziqlar sozlamasi, chizma sozlamalari va GD&T, oldingi versiyada import qilingan STEP matni |
| PartCraft yigʻmasi | `.partcraft-asm.json` | Ha | yigʻmada {{ui:Saqlash}} | mm | Y | Har bir detal (ichiga joylashtirilgan), nusxalar va ularning joylashuvi, birikmalar |
| STL (ikkilik yoki matn) | `.stl` | Ha, qattiq jism sifatida: [STL, OBJ yoki 3MF ni ochish](topic:open-meshes) | {{ui:STL, 3D bosma uchun}} | mm (ochilganda soʻraladi) | Z | Faqat jismning uchburchaklari |
| 3MF | `.3mf` | Ha, qattiq jism sifatida | {{ui:3MF, 3D bosma uchun}} | mm (faylda koʻrsatilgan) | Z | Jism bitta mesh obyekti sifatida |
| OBJ | `.obj` | Ha, qattiq jism sifatida (faqat yuzalar) | Yoʻq | ochilganda soʻraladi | Z yoki Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ha, qattiq jism sifatida uchburchaklar boʻyicha oʻqiladi (egri yuzalar fasetlar sifatida chiziladi; faylning tekis yuzalari, silindrlari, konuslari, sferalari va torusları aniq eksport uchun saqlanadi): [STEP faylini ochish](topic:import-step) | | mm (fayl birligidan) | Z, yoki siz shunday desangiz Y | Jismlar va sirt jismlari, har bir detali oʻz joyida boʻlgan yigʻmalar; ranglar, nomlar, yigʻma daraxti yoki PMI yoʻq |
| `.3dm` | `.3dm` | Ha, bitta qattiq jism sifatida meshlari va sirtlaridan (saqlangan render meshlari, aks holda tessellyatsiya qilingan): [.3dm modelini ochish](topic:open-3dm-files) | | Fayl birligidan | Z, yoki siz shunday desangiz Y | Meshlar, polisirtlar, ekstruziyalar va blok joylashuvlari bitta jism sifatida; egri chiziqlar, ranglar, qatlamlar yoki nomlar yoʻq |
| STEP AP242, aniq | `.step` | | {{ui:STEP AP242 (aniq yaxlit jism)}} | mm | Z | Bitta aniq jism: tekis yuzalar, silindrlar, konuslar, sferalar va torus oʻzlarining haqiqiy sirtlarida, haqiqiy aylanalar va chiziqlar qirra sifatida; splayn yon tomonlari, modellashtirilgan rezba, mesh fayllaridan olingan jismlar va STEP faylining splayn yuzlari fasetlar boʻlib qoladi. Boshqa CAD va CAM dasturlari uchun STEP |
| STEP AP214, aniq | `.step` | | {{ui:STEP AP214 (aniq yaxlit jism)}} | mm | Z | Xuddi shu aniq jism eski AP214 sxemasida, faqat uni oʻqiydigan dasturlar uchun |
| STEP AP242, faset | `.step` | | {{ui:STEP (faset, mesh yadrosi)}} | mm | Y | Tekis yuzalardan iborat yopiq jism: dumaloq sirtlar fasetlar sifatida. Aniq faylni qabul qilmaydigan dastur uchun |
| STEP AP214, faset | `.step` | | {{ui:STEP AP214 (fasetli, mesh yadrosi)}} | mm | Y | Xuddi shu jism eski AP214 sxemasida, faqat uni oʻqiydigan dasturlar uchun |
| USD paket | `.usdz` | Yoʻq | {{ui:USD paket (.usdz)}} | m | Z | Jism materiali, hajmi va massasi bilan; yigʻma har bir detal bir marta va har bir nusxa joylashtirilgan holda: [USD sifatida eksport](topic:usd) |
| IFC 4 | `.ifc` | Yoʻq | {{ui:IFC 4 (barcha xususiyatlar bilan)}} | mm | Z | Shakl uchburchaklar sifatida, material, har bir parametr, sarlavha bloki, miqdorlar; yigʻmaning detallari turlar sifatida va nusxalari joylashtirilgan holda |
| DXF R12, eskiz | `.dxf` | Yoʻq | {{ui:Eskiz yoki tekis yuzning DXF fayli}} eskiz tanlangan holda | mm | Eskizning oʻz x, y | Chiziqlar, haqiqiy yoylar va aylanalar, nuqtalar; qatlamlar PROFILE, CONSTRUCTION, POINTS |
| DXF R12, yuza | `.dxf` | Yoʻq | {{ui:Eskiz yoki tekis yuzning DXF fayli}} tekis yuza tanlangan holda | mm | Yuzaning oʻz x, y | Yuzaning konturlari: dumaloq teshiklar haqiqiy aylana sifatida, qolganlari yopiq polilinyalar (dumaloq qirralar fasetlar sifatida) |
| PDF chizma | `.pdf` | Yoʻq | {{ui:Chizma (PDF): koʻrinishlar, kesim, detal, GD&T}} | mm A3 varagida | | Old, yuqori, oʻng, izometrik, kesim va detal koʻrinishlari fasetlardan chizilgan, yashirin chiziqlar, umumiy oʻlchamlar, GD&T belgilari, sarlavha bloki |

## PartCraft fayllari

Ikkalasi ham oddiy matn (JSON). Qattiq jism hech qachon saqlanmaydi: PartCraft uni tarixdan qayta quradi, shuning uchun fayllar kichik va doim tarixga mos boʻladi.

- Har bir faylning versiya raqami bor. Bu versiya har bir detal faylini oʻzida kerakli narsani ushlab turadigan eng past versiya bilan yozadi (2 dan 5 gacha; mesh dan yasalgan jism 5 ni talab qiladi) va barcha eski versiyalarni ochadi. Yangiroq PartCraft dan kelgan fayl ikkala versiya nomi aytilgan xabar bilan rad etiladi.
- Har bir qiymat fayl ochilganda tekshiriladi. Nomlardan boshqaruv belgilari olib tashlanadi; diapazondan tashqari raqamlar, yoʻq elementlarga havolalar va nomaʼlum element turlari sodda sabab bilan rad etiladi.
- Formatni bilmasangiz, fayllarni qoʻlda tahrirlamang. Tekshiruvdan oʻtmagan fayl ochilmaydi.
- Oldingi versiyada import qilingan katta STEP jismi bilan detal 50 MB dan oshishi mumkin: bu PartCraft detal fayli sifatida ochadigan eng katta hajm (qarang: [Muammolarni bartaraf etish](topic:troubleshooting#file-problems)).

## Fasetlar va aniqlik

STL va 3MF doim **Egri chiziqlar** sozlamasi boʻyicha fasetlardan iborat, faset DXF ham shunday, faqat dumaloq teshiklar bundan mustasno, ular haqiqiy aylana. Eskiz DXF da haqiqiy yoylar va aylanalar bor, chunki u toʻgʻridan-toʻgʻri eskizdan keladi. Bu versiya har bir detalni mesh yadrosi bilan quradi, shuning uchun chizmaning koʻrinishlari (kesimlar bilan birga) ham fasetli boʻladi. Aniq STEP eksporti istisno: yadro har bir yuzaning haqiqiy sirtini eskizdan (yoki jism ochilgan STEP faylidan) biladi, shuning uchun dumaloq yuzalar **Egri chiziqlar** qanday qoʻyilganidan qat'i nazar haqiqiy silindr, konus, sfera va torus sifatida yoziladi (qarang: [Bosma, STEP va DXF uchun eksport](topic:export-files#for-other-cad-programs-step)).

## Bu versiyada qoʻllab-quvvatlanmaydi

| Format | Holati |
|---|---|
| glTF, IGES, Parasolid, ACIS (kirish va chiqish); OBJ eksporti | Qurilmagan |
| DWG | Faqat [variant paketi](topic:variant-pack) tomonidan yoziladi, har bir konfiguratsiyaning chizma varagi sifatida. Oʻqilmaydi va boshqa eksport yoʻq. DXF eksport qiling; har bir CAD dasturi R12 DXF ni ochadi |
| Yigʻma STEP va yigʻmaning chizmasi | Hali qurilmagan. Har bir detalni aniq STEP sifatida eksport qiling; STL, 3MF va detallar roʻyxati yigʻmadan eksport qilinadi |
| Boshqa dasturlarning oʻz detal va yigʻma fayllari (`.3dm` dan tashqari, u bitta jism sifatida ochiladi) | Qurilmagan |

Qarang: [Hali qurilmagan narsalar](topic:not-built-yet).
