---
title: Standart detalni ochish
summary: Boltdan, vintdan, gaykadan, shaybadan, pinadan, podshipnikdan yoki shponkadan uning standarti boʻyicha oʻlchangan detalni boshlang; standart jadvalining har bir oʻlchami konfiguratsiya sifatida.
keywords: standart detal, standart detallar, bolt, vint, olti burchakli, gayka, shayba, pina, dowel, podshipnik, sharikli podshipnik, shponka, parallel shponka, mahkamlagich, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, shablon, kutubxona
from: b9e2811f
---

PartCraft oddiy mexanik detallarni tayyor holda ochadi: oʻlchamlar standartlar jadvallaridan olinadi, jadvaldagi har bir oʻlcham esa oʻtishingiz mumkin boʻlgan konfiguratsiya.

## Birini ochish

1. Fayl guruhidagi {{ui:Standart detal}} ni bosing.
2. {{ui:Detal}} ichida turni tanlang, masalan {{ui:Olti burchakli kallakli vint (ISO 4017)}}.
3. {{ui:Format}} ichida oʻlchamni tanlang, masalan `M10 × 40`.
4. {{ui:Ochish}} ni bosing.

Detal yangi, saqlanmagan detal sifatida ochiladi. Uni saqlab qolish uchun {{key:Mod+S}} ni bosing.

| Detal | Standart | Parametrlar |
|---|---|---|
| Olti burchakli kallakli vint, olti burchakli bolt | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` rezba oʻlchami, `s` yassi tomonlar orasi, `k` kallak balandligi, `l` uzunlik |
| Olti burchakli gayka | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Oddiy shayba | ISO 7089 | `d1` ichki, `d2` tashqi, `h` qalinlik |
| Parallel pina | ISO 2338 | `d`, `l` |
| Chuqur egatli sharikli podshipnik | ISO 15 | `d` teshik, `D` tashqi, `B` kenglik |
| Parallel shponka | DIN 6885-1, form A | `b` kenglik, `h` balandlik, `l` uzunlik |

## Oʻlchamni oʻzgartirish

Har bir oʻlcham konfiguratsiya (qarang: [Konfiguratsiyalar va loyiha jadvallari](topic:design-tables)): {{ui:Parametrlar}} ni oching va boshqasini tanlang, yoki parametrni oʻzgartiring, masalan uzunroq vint uchun `l`, va uni oʻzingizning konfiguratsiyangiz sifatida saqlang.

## Nima modellashtiriladi

- Vintlar va boltlar: olti burchakli kallak va oddiy tanasi. Gaykalar: rezbaning nominal oʻlchamidagi teshigi bor olti burchak. Rezba modellashtirilmaydi; kerak boʻlsa {{ui:Rezba}} bilan qoʻshing (qarang: [Rezbalar](topic:threads)).
- Pinalar: oddiy silindr; uchlaridagi qiyalatmalar qoldiriladi.
- Podshipniklar: faqat tashqi gabarit (teshik halqasi, tashqi diametr va kenglik), uni joylashtirish uchun kerak boʻlgani shu.
- Shponkalar: dumaloq uchli shponka.

Detalning materiali poʻlat, shuning uchun massa panelida uning vazni koʻrsatiladi. Tishli gʻildiraklar hali bu yerda yoʻq: PartCraftda tish xususiyati yoʻq va disk tishli gʻildirak emas. CadCraft tishli gʻildiraklarni chizma konventsiyasi boʻyicha chizadi, kutubxonada ular chizma sifatida bor.
