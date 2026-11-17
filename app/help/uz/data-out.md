---
title: Chiqarish: maʼlumotlar varagʻi, maydonlar va toʻrlar
summary: Yaratilgan jismning maʼlumotlar varagʻini JSON yoki PDF sifatida, uning maydonini VTK tasvir (.vti) yoki OpenVDB sath toʻplami (.vdb) sifatida va sirtini ParaView va boshqa tahlil vositalari uchun VTK toʻri (.vtu) sifatida, toʻrni esa generator maʼlumotlarini olib yuradigan 3MF sifatida saqlash. Bir xil detal har doim bir xil fayllarni yozadi.
keywords: eksport, maʼlumotlar varagʻi, json, pdf, vti, vtu, vtk, paraview, 3mf, maydon, imzolangan masofa, fea, cfd, metamaʼlumot, openvdb
from: 817b4579
---

{{ui:Engineer}} ishchi maydonida yoki Yaratilgan jismning xususiyatlarida **Maʼlumotlarni chiqarish** ni oching:

| Tugma | Fayl | Uchun |
|---|---|---|
| Maʼlumotlar varagʻi (JSON) | `.json` | Har bir kiritma, har bir son birligi va manbai bilan, tekshiruvlar, toʻr barmoq izi. Tartiblangan, vaqtlarsiz: bir xil detal bir xil faylni beradi. |
| Maʼlumotlar varagʻi (PDF) | `.pdf` | Xuddi shu qogʻozda, kerak boʻlgancha sahifalarda. |
| Maydon (.vti) | `.vti` | Detal imzolangan masofa sifatida (ichkarisi manfiy) va nuqtalar toʻrida ichki niqob sifatida: ParaView va VTK asosidagi vositalar uchun VTK tasvir fayli. U jismning sirtidan generator kiritmalarining voksel oʻlchamida yasaladi, shuning uchun bir oz vaqt oladi va 400 000 dan ortiq uchburchakli jism sahifa uchun juda katta: maydonni oʻrniga skriptdan saqlang (`field_bake`). |
| Sath toʻplami (.vdb) | `.vdb` | Xuddi shu maydon OpenVDB sath toʻplami sifatida: sirt atrofidagi yupqa qatlam voksellarinigina saqlaydigan siyrak daraxt, OpenVDB ni oʻqiydigan vositalar uchun (renderlar, simulyatsiya va 3D dasturlar). Voksel oʻlchami va birliklar generatorniki (millimetr), tor qatlam faol qism, ichkarisi manfiy. `.vti` kabi sirtdan yasaladi, xuddi shu 400 000 uchburchak chegarasi bilan; 1.5 GB dan katta fayl rad etiladi (kattaroq voksel oʻlchamini ishlating). Fayl OpenVDB formati 224 da, OpenVDB ning oʻz faol-qiymat qadoqlashidan tashqari siqilmagan, shuning uchun har qanday OpenVDB oʻqigich uni ochadi. |
| Sirt (.vtu) | `.vtu` | Uchburchaklar, har birining maydoni va normali bilan. |
| 3MF generator maʼlumotlari bilan | `.3mf` | Toʻr millimetrda slicer uchun, generator, uning kiritmalari va (panjarali panjara uchun) devor diapazoni fayldagi metamaʼlumot sifatida. |

Bu fayllarda hech narsa soatdan yoki mashinadan kelmaydi, shuning uchun ikki faylni bayt-bayt solishtirish mumkin: oʻzgargan bayt oʻzgargan detalni bildiradi.

## Hali qurilmagan

- Generatorniki boʻlmagan voksel oʻlchamidagi maydonning `.vti` yoki `.vdb` fayli.
- `.vdb` fayllarini oʻqish (faqat yozish amalga oshirilgan).
