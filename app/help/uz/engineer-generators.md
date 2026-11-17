---
title: Fizikadan detallar: generatorlar
summary: Engineer ish maydoni va Yaratilgan jism elementi: generator tanlang, uning kirishlarini (oqim, bosim, haroratlar, material, printer) belgilang va darslik formulalari bilan oʻlchangan detalni, uning maʼlumot varagʻi, ishlab chiqarish tekshiruvlari va tahlil vositalari uchun fayllari bilan oling. Bir xil kirishlar doim bir xil detalni beradi.
keywords: engineer, generator, yaratilgan jism, fizika, qoidalar, issiqlik almashtirgich, kollektor, shtutser, panjara, giroid, maʼlumot varagʻi, kirishlar, deterministik, bir xil kirish bir xil detal, ishlab chiqarish tekshiruvlari, 3D chop etish, kukunli yotqizish
from: 5a387dc0
---

**Generator** — bu talablaringizdan detalni oʻlchaydigan va uni quradigan skript. Issiqlik almashtirgich generatori uzatiladigan issiqlikni, ikki oqimni va ularning haroratlarini, bosim va materialni oladi; yadroning qanchalik katta boʻlishi va devorining qanchalik qalin boʻlishi kerakligini hisoblaydi, uni quradi va ishlatgan raqamlaringizni hamda ularning qayerdan olinganini aytadi. Kirishni oʻzgartiring — detal ortidan oʻzgaradi.

Natija detaldagi oddiy jism: u element roʻyxatida, chop etiladi, eksport qilinadi. Generatorning oʻzi ham detalda saqlanadi, shuning uchun fayl generator oʻrnatilmagan istalgan kompyuterda ochiladi va **faylni ochish hech qachon skriptni ishga tushirmaydi**.

## Jism yaratish

1. Ish maydonlari almashtirgichida {{ui:Engineer}} ish maydonini tanlang.
2. Roʻyxatdan generatorni tanlang (PartCraft bilan birga keladiganlar, soʻng fayldan ochganlaringiz) va {{ui:Yangi}} ni bosing.
3. Skript ishga tushadi. Tugagach, jism koʻrinishda boʻladi, panelda esa uning kirishlari, **maʼlumot varagʻi** va **tekshiruvlari** koʻrinadi.

Uni Dizayn ichidan ham qoʻshishingiz mumkin: {{ui:Elementlar}} › {{ui:Koʻproq}} › {{ui:Yaratilgan jism}}.

## Uni oʻzgartirish

Istalgan kirishni oʻzgartiring — yozishni toʻxtatganingizdan bir oz keyin jism qayta yaratiladi. Panel uchta holatdan qaysi biri toʻgʻri ekanini aytadi:

- **Yangilangan**: jism skript va uning kirishlariga mos.
- **Kirishlar oʻzgargan**: detaldagi jism avvalgi kirishlardan; u qayta yaratilmoqda yoki {{ui:Ishga tushirish}} ni bosing.
- **Hali ishga tushirilmagan** yoki **Oxirgi ishga tushirish muvaffaqiyatsiz boʻldi**: skript xatosi uning qatori bilan koʻrsatiladi.

{{ui:Toʻxtatish}} juda uzoq davom etayotgan ishga tushirishni tugatadi. Ortga qaytarish bir vaqtda bir qadam orqaga qaytaradi: bitta ishga tushirish bir qadam, bitta kirish bir qadam.

## Maʼlumot varagʻi

Generator hisoblagan har bir raqam uning **birligi** va **qayerdan olinganligi** (darslik tenglamasi, standart, maʼlumot varagʻi) bilan roʻyxatlanadi. Hech narsa yashirin doimiy emas. Varaq fayl ichida boʻladi, shuning uchun keyingi kompyuterda ham bir xil koʻrinadi. [Maʼlumotni chiqarish](topic:data-out) uni JSON yoki PDF sifatida qanday saqlashni aytadi.

## Tekshiruvlar

Generator oʻz detalini chop etish jarayoni bilan tekshira oladi: jarayon ushlab tura oladigan darajadan yupqa devorlar va boʻshliqlar, erkin boʻlaklar, kukun yoki smolani ushlab qoladigan boʻshliqlar, ularni tozalash uchun juda tor teshiklar va qoʻllab-quvvatlashni talab qiladigan osilgan qismlar. Topilmalar panelda va {{ui:Muammolar}} roʻyxatida (⚠ tugmasi) boʻladi hamda detal bilan birga saqlanadi.

Jarayon raqamlari — jarayon uchun umumiy dizayn qoʻllanmalari beradigan yaxlit raqamlar (FDM, SLA, SLS, metall kukunli yotqizish). Ular **sizning mashinangizning spetsifikatsiyasi emas**: tekshiruvga tayanishdan oldin ularni sexingizning raqamlari bilan almashtiring. Tekshiruv voksellar setkasida ishlaydi, shuning uchun u taxminan bitta vokselgacha aniq: devor faqat chegaradan bir vokseldan koʻproq yupqa boʻlsa xabar qilinadi.

## Nima yetkazib beriladi

| Generator | Nima yaratadi |
|---|---|
| Giroid bloki | Giroid, Shvarts P yoki olmos varaq bilan toʻldirilgan blok: eng oddiy panjara |
| Giroid issiqlik almashtirgichi | Ikki suyuqlikli almashtirgichning yadrosi, yukka qarab effektivlik-NTU usuli bilan oʻlchangan, devori bosimga qarab; bitta katakcha ustida oqim tahlili bilan bosim pasayishini tekshirishi mumkin |
| Taqsimlash kollektori | Sarlavha va tarmoqlar, har bir quvur oqib oʻtadigan oqimga qarab oʻlchanadi |
| Darajalangan panjara nuri | Topologiya optimallashtirishi material kerak deb koʻrsatgan joyda devori qalinlashadigan panjara |

Hammasi darslik formulalariga asoslangan dastlabki baholashlar. [Muhandislik kutubxonasi](topic:engineering-library) formulalar va ularning chegaralarini sanab beradi. Natijaga tayanishdan oldin unga Simulation, Thermal yoki Flow ni ishga tushiring.

## Eksport nazorati

Engineer generatorlari va maʼlumot varaqlari eksport nazorati hamda sanksiyalar haqidagi bildirishnoma bilan keladi. Uni [Engineer va eksport nazorati](topic:engineer-export-notice) da oʻqing; u har bir maʼlumot varagʻining pastida ham bor.

## Hali qurilmagan

- Issiqlik almashtirgich yadrosidagi sarlavhalar, portlar va ulagichlar: u faqat yadro.
- Material mustahkamligi uchun harorat egri chiziqlari: materiallar xona haroratida.
- Kollektorda tirsak yoʻqotishlari va chiqishlar orasida oqimning taqsimlanishi.
- Qoʻshimcha katalogidan bir bosishda generatorlar qoʻshish; faylni ochish uni shu brauzerga qoʻshadi.
- Boshqa ilovalar uchun generatorlar.
