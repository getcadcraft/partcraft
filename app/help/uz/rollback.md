---
title: Tarix boʻylab orqaga va oldinga qaytarish
summary: Qaytarish chizigʻini bir elementdan bir qadam yuqoriga va pastga surib, detal qanday qurilayotganini kuzating, oʻrtaga element qoʻshing va oxiriga qayting.
keywords: qaytarish, orqaga qaytarish, oldinga qaytarish, qaytarish chizigʻi, tarix boʻylab qadamlash, element qoʻshish, muzlatish, tarix
from: 9a366cae
---

Qaytarish chizigʻi tarixning qancha qismi qurilishini belgilaydi. Undan pastdagi elementlar boʻzrang va qurilmagan boʻladi; yangi elementlar chiziqqa qoʻshiladi.

## Bir elementdan bir qadam

Detal ekranda boʻlganda (eskiz yoki chizma ochiq boʻlmasa):

| Bajaring | Natija |
|---|---|
| {{key:[}} yoki detal nomi yonidagi yuqoriga oʻq tugmasi | Chiziq bir element yuqoriga siljiydi |
| {{key:]}} yoki pastga oʻq tugmasi | Chiziq bir element pastga siljiydi |
| {{key:End}} yoki chiziqni oxirigacha surish tugmasi | Har bir element yana quriladi |

Holat satri chiziq qayerdaligini aytadi, masalan: "Qaytarish chizigʻi Sketch1 dan keyin: 2 ta elementning 1 tasi qurilgan". Tugmalar chiziq shu yoʻnalishda boshqa siljiy olmasa oʻchiq boʻladi.

Shuningdek, istalgan elementda {{ui:Shu yergacha qaytarish}} ni tanlashingiz yoki tarixda **Qaytarish chizigʻi · oldinga qaytarish** ni bosishingiz mumkin.

## Oʻrtaga element qoʻshish

1. Chiziqni orqaga surib, u yangi element joylashishi kerak boʻlgan joyga kelguncha qadamlang.
2. Elementni qoʻshing: u chiziqqa qoʻshiladi.
3. Qolgan tarixni uning ustiga qurish uchun {{key:End}} ni bosing.

Chiziqning har bir siljishi {{key:Mod+Z}} bilan bekor qilinadigan qadam. Chiziqning oʻrni faylda saqlanadi, shuning uchun detal orqaga qaytarilgan holda yuborilishi mumkin. Buyruq satri vositasi ham uni siljitadi: `partcraft rollback part.json` va `partcraft forward part.json --end`.
