---
title: Illustrate da qoʻllanma yaratishni boshlash
summary: Illustrate ish maydoni loyihangizdan qoʻllanmalar yaratadi: koʻrinishlar, raqamli belgilar va detallar roʻyxatiga ega yoyilgan chiziqli chizmalar, bosqichma-bosqich koʻrsatmalar, animatsiyalar va mijoz CADsiz ochishi mumkin boʻlgan 3D fayl. Qoʻllanma oʻz alohida faylidir.
keywords: illustrate, qoʻllanma, texnik chizma, hujjatlar, yoyilgan koʻrinish, detallar roʻyxati, koʻrsatmalar, partcraft-manual
from: e447e0ab
---

**Illustrate** — loyiha atrofidagi kerakli hujjatlar uchun ish maydoni: raqamli belgilar va detallar roʻyxati bilan yoyilgan koʻrinishlar, qoʻllanmalar uchun chiziqli chizmalar, bosqichma-bosqich koʻrsatmalar, animatsiyalar va mijoz uchun 3D fayl. Ish maydonini asboblar panelining boshidagi {{ui:Ish maydoni}} almashtirgichida {{ui:Illustrate}} ni tanlab oching.

**Qoʻllanma** — bu alohida fayl (`<name>.partcraft-manual.json`). U har bir detalning shakl nusxasini, mahsulot daraxtini va detallarning xususiyatlarini, shuningdek ularning manbasiga havolani saqlaydi, shuning uchun loyiha davom etayotganda qoʻllanma ustida ishlashingiz mumkin. Loyiha oʻzgarsa, [loyihadan yangilash](topic:illustrate-update) oʻzgarishlarni olib keladi.

## Boshlash

{{ui:Qoʻllanma}} guruhida {{ui:Yangi}} tugmasini bosing, soʻng:

- {{ui:Ochiq detaldan}}: Loyihada ochiq turgan detal.
- {{ui:Ochiq yigʻmadan}}: yigʻma ochiq boʻlganda shu koʻrsatiladi; uning detallari, joylashuvi, detal raqamlari, materiallari va yoyilgan koʻrinishlari birga keladi.
- {{ui:Yigʻma faylidan…}}: saqlangan `.partcraft-asm.json`; PartCraft avval uning detallarini quradi.
- {{ui:Boshqa fayldan…}}: glTF (.glb, .gltf), OBJ, STL yoki 3MF. Fayldagi daraxt va nomlar saqlanadi; bir detalning nusxalari (bir shakl ikki marta joylashgan) miqdori bilan bitta detalga aylanadi. STL va OBJ fayllar oʻz birligini aytmaydi, shuning uchun sizdan soʻraladi. STL fayllar Z yuqoriga qarab oʻqiladi; glTF va 3MF esa oʻz yoʻnalishini oʻzi aytadi.

Qoʻllanma ochiq boʻlganda, Illustrate detallarning qoʻllanmaning oʻz nusxasini koʻrsatadi; Loyihada ochiq detal yoki yigʻma Loyihaga qaytmaguningizcha yashirin boʻladi.

## Saqlash va ochish

{{ui:Qoʻllanma}} guruhidagi {{ui:Saqlash}} (yoki {{key:Mod+S}}) qoʻllanmani saqlaydi; {{ui:Ochish}} uni ochadi. Illustrate dagi har bir oʻzgarish qoʻllanmaning oʻz tarixida bitta bosqich boʻladi: Illustrate ochiq turganda {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} qoʻllanmaga taʼsir qiladi.

## Hali tayyor emas

- STEP fayllar {{ui:Boshqa fayldan…}} orqali hali ochilmaydi. STEP faylni Loyihada oching (u qattiq jism sifatida keladi: qarang [STEP faylini ochish](topic:import-step)) va qoʻllanmani {{ui:Ochiq detaldan}} boshlang, yoki uni glTF, 3MF, OBJ yoki STL sifatida saqlang.
- ModelCraft va BimCraft modelni hozircha Illustrate ga toʻgʻridan-toʻgʻri bera olmaydi: uni glTF (.glb) sifatida saqlang va {{ui:Boshqa fayldan…}} dan foydalaning.

Keyingi: [Koʻrinishlar va uslublar](topic:illustrate-views).
