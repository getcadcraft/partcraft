---
title: Splaynlar, qirqish, siljitish va boshqa eskiz asboblari
summary: Nuqta orqali va boshqaruv nuqtali splaynlarni chizing, egri chiziqlarni qirqing va choʻzing, zanjirni siljiting, markaziy chiziq boʻylab aks ettiring, koʻpburchak va yoriq qoʻshing, eskiz geometriyasini massivlang va model qirralarini proyeksiyalang.
keywords: splayn, nuqta orqali, boshqaruv nuqtasi, b-spline, nurbs, egri chiziq, qirqish, choʻzish, siljitish, aks ettirish, simmetrik, koʻpburchak, olti burchak, yoriq, massiv, chiziqli massiv, doiraviy massiv, proyeksiya, qirrani proyeksiyalash, kiritish, elementlarni aylantirish
from: 3ecb166a
---

Bu asboblar ochiq eskizda ishlaydi. {{ui:Splayn}} va {{ui:Qirqish}} asboblar panelida joylashgan. Qolganlari eskiz asboblarining oxirida, {{ui:Koʻproq}} ostida. Har bir asbob bitta bekor qilish qadamini tashkil etadi va {{key:Esc}} uni toʻxtatadi. Asosiy chizish asboblari uchun qarang: [Birinchi eskizingizni chizing](topic:sketch-basics).

## Splaynlar

Splayn silliq egri chiziq. Ikki turi bor.

| Asbob | Klavisha | Qanday chizish |
|---|---|---|
| {{ui:Splayn}} | {{key:B}} | Egri chiziq oʻtadigan nuqtalarni bosing. {{key:Enter}}, {{key:Esc}}, oʻng tugma yoki ikki marta bosish bilan tugating. Birinchi nuqtani yana bosib yoping |
| {{ui:Boshqaruv nuqtali splayn}} ({{ui:Koʻproq}} ostida) | | Boshqaruv nuqtalarini bosing. Egri chiziq ularga tortiladi, lekin faqat birinchi va oxirgi nuqtaga tegadi. Punktir boshqaruv koʻpburchagi chizish vaqtida va undan keyin koʻrinadi |

- **Nuqtalar eskiz nuqtalaridir.** Ularni sudrang yoki boshqa nuqtalar kabi munosabat va oʻlchamlar bering. Splaynning birinchi nuqtasi chiziqning uchiga tutilishi mumkin; bu ularni ustma-ust munosabat bilan ulaydi.
- **Uchida urinma.** Splaynning bir uchiga tutashadigan chiziq, yoy yoki splaynni va splaynning oʻzini tanlang, soʻng {{ui:T Urinma}} ni tanlang. Shunda splaynning uch yoʻnalishi chiziqqa ergashadi. Splayn uchlaridan uzoqdagi urinma rad etiladi: “Splaynga urinma uchun chiziq, yoy yoki splayn uning uchlaridan biriga tutashishi kerak.”
- **Uchlar.** Urinma munosabatisiz, nuqta orqali oʻtuvchi splaynning uchlari tabiiy boʻladi (eng oxirida egrilik yoʻq). Egri chiziq kubik boʻlib, har bir nuqtadan oʻtadi; nuqtalar orasidagi masofalar bilan oraliqlari belgilanadi.
- **Yopiq splaynlar** oʻzi profil hosil qiladi. Ochiq splaynlar esa boshqa egri chiziqlar kabi chiziqlar va yoylarni yopiq halqaga ulaydi.
- Splayn ichidagi nuqtani oʻchirish oʻsha nuqtani olib tashlaydi va splaynni saqlab qoladi, agar unda hali kamida ikkita nuqta boʻlsa (yopiq boʻlsa uchta).

Ekstruziya va aylantirish splaynni mesh yadrosi bilan qisqa toʻgʻri boʻlaklardan quradi (haqiqiy egri chiziqlar aniq yadroni talab qiladi: bu versiyada hali qurilmagan). DXF eksporti splaynni egri chiziqdan 0.01 mm dan oshmaydigan polilinia sifatida yozadi, chunki DXF R12 da splayn elementi yoʻq.

## Qirqish va choʻzish

| Asbob | Klavisha | Qanday |
|---|---|---|
| {{ui:Qirqish}} | {{key:T}} | Egri chiziqqa nuqta qoʻying: oʻchiriladigan boʻlak eng yaqin kesishmagacha qizil boʻladi. Olib tashlash uchun bosing. Hech narsani kesmaydigan egri chiziq butunlay olib tashlanadi |
| {{ui:Choʻzish}} ({{ui:Koʻproq}} ostida) | {{key:E}} | Choʻzish uchun uchiga yaqin chiziq yoki yoyni bosing. U bilan uchrashadigan keyingi egri chiziqqacha oʻsadi. “Bu uch yetib boradigan joy yoʻq.” — agar hech narsa toʻsqinlik qilmasa |

Qirqish va Choʻzish chiziqlar, yoylar, aylanalar va splaynlarda ishlaydi (Choʻzish: faqat chiziqlar va yoylar).

- Qirqilgan **aylana** yoyga aylanadi. Uning radius yoki diametr oʻlchami yoyga koʻchadi.
- Chiziqning oʻrtasini qirqish bir toʻgʻri chiziqda qoladigan ikki chiziq qoldiradi. Yoyning oʻrtasini qirqish bir xil markazli va teng munosabatli ikki yoy qoldiradi.
- Qirqilgan **splayn** eski egri chiziqni aniq kuzatadigan boshqaruv nuqtali splaynga aylanadi. Saqlanib qolgan uchdagi urinma munosabat ham qoladi.
- Yangi uch uni kesgan egri chiziqqa joylashtiriladi (chiziq, yoy yoki aylanada, yoki uning uchi bilan ustma-ust). Splaynlar nuqtani ushlay olmaydi, shuning uchun kesadigan splayn munosabat qoʻshmaydi.

**Endi mos kelmaydigan munosabatlar olib tashlanadi**, va holat satrida nechta ekanligi aytiladi. Masalan, qirqilgan chiziqdagi uzunlik oʻlchami olib tashlanadi, lekin gorizontal yoki parallel munosabatlar qoladi.

## Siljitish

1. {{ui:Koʻproq}} ostidagi {{ui:Siljitish}} ni tanlang yoki {{key:O}} ni bosing.
2. Chiziq, yoy, aylana yoki splaynni bosing. Uning butun zanjiri ajratib koʻrsatiladi: uchma-uch ulangan barcha egri chiziqlar, uchta yoki undan koʻp chiziq uchrashgan nuqtagacha. Zanjirning faqat bir qismini siljitish uchun avval oʻsha egri chiziqlarni tanlang, keyin Siljitish ni tanlang va ulardan birini bosing.
3. Kursorni nusxa qayerga borishi kerak boʻlgan tomonga suring. Punktir oldindan koʻrinish unga ergashadi. Ikki tomon uchun {{key:B}} ni bosing.
4. Bosing, masofani kiriting va {{key:Enter}} ni bosing.

Chiziqlar va yoylar aniq siljitiladi. Burchaklar uchrashguncha choʻziladi yoki qirqiladi. Nusxada bitta **Siljitish** oʻlchami bor, qolgan boʻlaklar unga ergashadi: butun nusxani oʻzgartirish uchun oʻlchamni ikki marta bosing. Zanjir uchun juda katta masofa rad etiladi, masalan: “Bu zanjir uchun masofa juda katta: bir tomon ichkariga aylanib ketadi.”

**Splayn** yangi nuqta orqali splayn bilan siljitiladi, haqiqiy siljishdan 0.001 mm ichida. Bu nusxa qotirilgan: keyingi oʻzgarishlarga ergashmaydi va Siljitish oʻlchamiga ega emas. Zanjirdagi splaynning uchlarida silliq (urinma) ulanish kerak.

## Aks ettirish

1. Tanlash bilan aks ettiriladigan narsani tanlang.
2. {{ui:Koʻproq}} ostidagi {{ui:Aks ettirish}} ni tanlang yoki {{key:M}} ni bosing.
3. Aks ettirish uchun chiziq yoki markaziy chiziqni bosing.

Aks ettirilgan har bir nuqta asli bilan **Simmetrik** munosabat oladi, shuning uchun asl oʻzgarganda nusxa ergashadi. Aks ettirish chizigʻida yotgan nuqtalar umumiy boʻladi, aks ettirilgan aylanalar esa Teng munosabat oladi. Hech narsa tanlanmagan boʻlsa, aks ettiriladigan elementlarni bosing, {{key:Enter}} ni bosing, keyin aks ettirish chizigʻini bosing.

## Koʻpburchaklar va yoriqlar

| Asbob | Qanday |
|---|---|
| {{ui:Koʻpburchak}} | Markazni, keyin burchakni bosing, keyin tomonlar sonini kiriting (3 dan 64 gacha). Tomonlar teng, burchaklar yordamchi aylanada joylashadi. Koʻpburchak oʻlchamini aylanaga oʻlchamlab belgilang |
| {{ui:Yoriq}} | Bir uchining markazini, keyin ikkinchi uchining markazini bosing, keyin kenglikni belgilash uchun bosing. Ikki chiziq, ikkita teng yarim aylanaga urinadi |

## Eskiz massivlari

Avval geometriyani tanlang, keyin:

- {{ui:Chiziqli massiv}}: boshlanish nuqtasini bosing, keyin birinchi nusxa qayerga borishini bosing, keyin nusxalar sonini kiriting (asl nusxa bilan birga).
- {{ui:Doiraviy massiv}}: markazni bosing, keyin nusxalar sonini kiriting; ular toʻliq aylana boʻylab teng taqsimlanadi.

Nusxalar tanlangan geometriya orasidagi munosabatlarni oʻzi bilan olib boradi (doiraviy massiv gorizontal va vertikal munosabatlarni tashlab ketadi). Nusxalar asl nusxaga bogʻlanmagan: birini oʻzgartirsangiz, qolganlari oʻz holicha qoladi.

## Detal qirralarini proyeksiyalash

1. {{ui:Koʻproq}} ostidagi {{ui:Qirrani proyeksiyalash}} ni tanlang.
2. Eskiz orqasidagi detalning toʻgʻri yoki aylana qirrasini bosing.

Qirra eskiz tekisligiga aniq nusxalanadi va qotiriladi ({{ui:Qotirish}} munosabati). Detaldagi keyingi oʻzgarishlarga ergashmaydi. Uni yordamchi geometriyaga aylantirish uchun {{key:Q}} ni bosing. Eskiz tekisligiga egilgan aylana ellipsga proyeksiyalanadi, shuning uchun u rad etiladi. Erkin shakldagi qirralar va eskizdan toʻgʻridan chiqib turgan qirralar ham shunday. Proyeksiyalash aniq yadroni talab qiladi: bu versiyada hali qurilmagan.
