---
title: Tokarlik detalini aylantirish
summary: Yarim profilni markaziy chiziq yonida chizing, uni dumaloq detalga aylantiring, oʻq va burchakni tanlang, egatlar uchun aylantirib oyishdan foydalaning.
keywords: aylantirish, aylantirilgan boss, aylantirib oyish, tokarlik detali, tokarlik stanogi, val, oʻq, markaziy chiziq, egat, burchak, aylantirib kesish
from: 593b6929
---

{{ui:Aylantirish}} profilni oʻq atrofida aylantiradi, xuddi tokarlik stanogida yasalgan detal kabi: vallar, shkivlar, flanetslar, tugmalar. Aylantirib oyish (Elementlar guruhining {{ui:Koʻproq}} menyusida) egatlar va chuqurchalar uchun materialni olib tashlash maqsadida profilni aylantiradi.

## Pogʻonali valni aylantirish

1. **Old tekislik** da eskiz chizing.
2. {{ui:Markaziy chiziq}} uchun {{key:N}} ni bosing. Koordinatalar boshidan boshlang va toʻgʻri oʻngga, masalan 100 mm masofada nuqtani bosing. Bu oʻq. U punktir boʻladi: qurilish geometriyasi profilning bir qismi emas.
3. Chiziq uchun {{key:L}} ni bosing. Yarim profilni markaziy chiziq ustida bitta yopiq halqa sifatida chizing: markaziy chiziqdan boshlang, yuqoriga chiqing, pogʻona boʻylab oʻting va markaziy chiziqqa qaytib tushing, soʻng uning boʻylab boshlangʻich nuqtagacha boring. Uchlari tutashishi kerak: halqa yopiq boʻlishi shart.
4. Radiuslarni (markaziy chiziqdan balandliklar) va uzunliklarni oʻlchang. Markaziy chiziqdan 10 balandlik 20 diametr hosil qiladi.
5. {{ui:Chiqish}} ni tanlang.
6. {{ui:Aylantirish}} ni tanlang. Val paydo boʻladi, toʻliq bir aylanishda.

Profil oʻqning bir tomonida qolishi kerak. Agar kesib oʻtsa: "Profil oʻqni kesib oʻtadi. Uni markaziy chiziqning bir tomonida saqlang." Profil qirrasi oʻqda yotishi mumkin.

## Sozlamalar

| Parametr | Vazifasi | Odatiy |
|---|---|---|
| **Amal** | Boss (material qoʻshish), Cut (materialni olib tashlash), Intersect (umumiy qismni saqlash) yoki New body (yangi jism) | Boss — {{ui:Aylantirish}} uchun, Cut — {{ui:Koʻproq}} › {{ui:Aylantirib oyish}} uchun |
| **Burchak (°)** | Qanchaga aylantirish, 0 dan biroz yuqoridan 360 gacha | 360 |
| **Oʻq** | Birinchi markaziy chiziq yoki eskizdagi istalgan chiziq yoki markaziy chiziq, "Markaziy chiziq 1 (l1)" yoki "Chiziq 3 (l3)" deb roʻyxatga olinadi | Birinchi markaziy chiziq |

Qisman burchak sektor hosil qiladi, eskiz tekisligidan bir yoʻnalishda aylantiriladi.

Agar eskizda markaziy chiziq boʻlmasa va **Oʻq** ni Birinchi markaziy chiziqda qoldirsangiz: "Aylantirish uchun eskizda markaziy chiziq (qurilish chizigʻi) chizing." Shuningdek, oʻq sifatida profilning qattiq chizigʻini ham tanlashingiz mumkin.

## Egat kesish

1. Val qurilgach, **Old tekislik** da yangi eskiz oching (val eskizi bilan bir xil tekislik).
2. Xuddi shu oʻq boʻylab markaziy chiziq chizing: uni koordinatalar boshidan boshlang va gorizontal holatda saqlang, shunda unga H beriladi, yoki **Koordinatalar boʻyicha qoʻshish** orqali kiriting (masalan, `0, 0` dan `100, 0` gacha). Yangi eskiz boshqa eskiz chiziqlariga tutashtirilmaydi.
3. Egat oʻtadigan joyda valning qirrasi bilan kesishadigan kichik yopiq toʻrtburchak chizing.
4. {{ui:Chiqish}} ni tanlang, soʻng {{ui:Koʻproq}} › {{ui:Aylantirib oyish}}.

## Yigʻmalardagi aylantirilgan yuzlar

Aylantirishning shunday oʻqi borki, uni boshqa elementlar va yigʻmalar ishlatishi mumkin:

- **Doiraviy** naqsh standart boʻyicha oxirgi aylantirish oʻqini ishlatadi (qarang: [Naqsh va aks ettirish elementlari](topic:patterns-mirror));
- yigʻmada aylantirishlar yasagan yuzlar orasidagi birikma **aylanma** birikma sifatida boshlanadi, **Markazlash** esa "Revolve1 oʻqi" variantini taklif qiladi (qarang: [Yigʻma qurish](topic:build-assembly)).

## Haqiqiy egri chiziqlar va qirralar

PartCraft aylantirishni mesh yadrosi bilan quradi (holat satridagi chip "Mesh yadrosi" deb yozadi): yumaloq shakllar tekis qirralar boʻladi, standart boʻyicha aylanada 64 ta, hajmlar haqiqiy qiymatdan biroz kam (64 da taxminan 0.16 %). Koʻrinish, STL, 3MF va STEP eksportlari shu qirralardan iborat: silliqroq boʻlishi uchun **Egri chiziqlar** ni (boʻsh joyni bosing, soʻng oʻng panel) Nozik (128) yoki Juda nozik (256) ga oʻrnating. Haqiqiy silindrlar, konuslar va torlar aniq yadroni talab qiladi: bu versiyada hali yaratilmagan. Qarang: [Mesh yadrosi](topic:solid-kernels).
