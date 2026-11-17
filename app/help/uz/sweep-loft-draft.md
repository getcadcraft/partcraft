---
title: Sweep, loft va qoralama
summary: Yopiq profilni eskiz egri chiziqlari yoki model qirralaridan iborat yoʻl boʻylab surish, turli tekisliklardagi kesimlar orqali loft qilish va yuzalarga qoralama qoʻshish; parametrlar, aniq natijalar va xabarlar bilan.
keywords: sweep, sweep boss, sweep cut, quvur, yoʻl, loft, loft boss, kesimlarni birlashtirish, ruled, qoralama, qoralama burchagi, konus yuzalar, neytral tekislik, tortish yoʻnalishi, quyish
from: 9d637981
---

:::note
**Bu versiyada** sweep va loft hali qurilmagan: ularga aniq geometriya yadrosi kerak, PartCraft ning bu versiyasida esa u yoʻq. [Hali qurilmagan](topic:not-built-yet) boshqa usulni koʻrsatadi; Sweep va Loft boʻlimlari ularni aniq yadro bilan qanday ishlashini tavsiflaydi. **Qoralama ishlaydi** tekis yuzalarda: mesh yadrosi uni quradi, natija aniq yadro bergan natija bilan bir xil.
:::

Uchalasi ham Features guruhining {{ui:More}} menyusida (qarang [Mesh yadrosi](topic:solid-kernels)). Ularning har biri materialni qoʻshishi, kesishi, faqat umumiy qismni saqlab qolishi (**Kesishish**) yoki **Yangi jism** yaratishi mumkin (sweep va loft uchun: panelda **Amal**).

## Sweep

Sweep yopiq profilni yoʻl boʻylab suradi: quvurlar, tutqichlar, simdan prujinalar, relslar.

1. Yoʻlni bitta eskizda chizing: uchma-uch ulangan toʻgʻri chiziqlar va yoylar (yoki pastda koʻrsatilgan model qirralaridan foydalaning).
2. **Profil**ni boshqa eskizda chizing, uning tekisligi yoʻlning bir uchidan oʻtsin, masalan, old tekislikda chizilgan yoʻlning boshida yuqori tekislikdagi aylana.
3. Profil eskizini tanlang va {{ui:More}}, soʻng {{ui:Sweep}} ni tanlang. Eng oxirgi boshqa eskiz yoʻlga aylanadi.

Panelda:

| Parametr | Vazifasi |
|---|---|
| **Yoʻl** | Yoʻlni tashkil etuvchi eskizlarni belgilang (bir nechta eskiz uchma-uch ulanib yagona 3D yoʻl hosil qiladi); **Model qirralarini tanlash** modelning qirralarini qoʻshadi |
| **Yoʻnalish** | Yoʻlga ergashish (standart), Frenet, Qoʻzgʻalmas (kesimlar profilga parallel qoladi), Yoʻnalishni saqlash, Yoʻriq egri chizigʻi boʻylab |
| **Oxirgi masshtab** | Profil oxirida ushbu oʻlchamgacha chiziqli ravishda kattalashadi yoki kichrayadi (1 = oʻzgarmas) |

Yoʻldagi oʻtkir burchaklar mitra bilan kesiladi. Radiusi 5 boʻlgan aylana 100 mm chiziq boʻylab surilsa, aniq 2500π mm³ hajmli silindr hosil boʻladi; radiusi 50 boʻlgan chorak yoy boʻylab surilsa, 625π² mm³ hajmli chorak torus.

## Loft

Loft ikki yoki undan ortiq turli tekisliklardagi kesimlar orqali birlashtiradi.

1. Har bir kesimni oʻz eskizida chizing (bitta yopiq kontur), asosiy tekisliklarda, yordamchi tekisliklarda (qarang [Yordamchi geometriya: tekisliklar, oʻqlar va nuqtalar](topic:reference-geometry)) yoki yuzalarda.
2. {{ui:More}} ni, soʻng {{ui:Loft}} ni tanlang. Ishlatilmagan har bir bitta konturli eskiz tarix tartibida kesimga aylanadi.

Panelda kesimlar tartib bilan roʻyxatlanadi (**Yuqoriga** tartibni oʻzgartiradi, **Olib tashlash** birini oʻchiradi); **Eskiz qoʻshish** yana bitta eskiz qoʻshadi, **Yuzani tanlash** detalning tekis yuzasini qoʻshadi. **Chiziqli** kesimlar orasida silliq aralashma oʻrniga tekis yuzalar hosil qiladi. Ikki kvadrat orasida ikkala rejim ham bir xil kesik piramidani beradi (30 mm balandlikda 40 mm kvadratdan 20 mm kvadratgacha: aniq 28000 mm³).

Tomonlari soni turlicha boʻlgan kesimlar (masalan, kvadrat va uchburchak) OpenCascade tomonidan moslashtiriladi, bu yon yuzalarni buralishga olib kelishi mumkin; bunda xabar chiqadi. Eng toza natija uchun bir xil tomonlar soniga ega kesimlarni mos burchaklardan boshlab chizing.

### Yoʻriq relslari

Yoʻriq relslari loftning yon tomonlari birinchi kesimdan oxirgisigacha ergashishi kerak boʻlgan egri chiziqlardir: boʻrtma, bel yoki kengayish uchun, uni siz oʻzingiz chizasiz.

1. Ikki yoki undan ortiq rels chizing: ochiq egri chiziqlar (toʻgʻri chiziqlar, yoylar, splaynlar), ular birinchi kesimdan oxirgisigacha yoʻnalgan va har bir kesimni bir marta kesib oʻtadi. Bitta eskizda bir nechta rels boʻlishi mumkin: undagi har bir alohida zanjir oʻz relsi hisoblanadi. Relsni kesimlar bilan haqiqatan uchrashtiring: uning uchlarini kesimlarning nuqtalariga tortib keling.
2. Loft panelida **Yoʻriq relslari** ostida ularni saqlovchi eskizlarni belgilang yoki {{ui:Pick model edges as rails}} ni bosib, detalning qirralarini bosing ({{key:Esc}} tugatadi).

Relslar bilan loft kesimlar va relslar orqali oʻtuvchi Gordon yuzasi boʻladi (qarang [Egri chiziqlar tarmogʻi orqali yuzalar](topic:gordon-surfaces)), u ikki uchida tekis yopilib qattiq jismga aylanadi. Panel relslarga qanchalik aniq ergashishini koʻrsatadi. Bunda har bir kesim eskiz boʻlishi kerak (nuqta yoki yuza rels qabul qila olmaydi) va **Chiziqli** qoʻllanmaydi. Relsning kesimdan 0.01 mm dan koʻproq chetda qolishi rad etiladi va boʻshliq koʻrsatiladi.

Tekshirilgan: 40 mm oraligʻida 20 mm va 10 mm diametrli ikki aylana va toʻrtta toʻgʻri rels konus kesigʻi hajmini 0.000002 % aniqlik bilan beradi; 5 mm boʻrtib chiqqan yoylar relslarning har biriga 0.00001 mm aniqlik bilan ergashadigan baraban shaklini beradi.

## Qoralama

Qoralama yuzalarni egib, detalni qolipdan chiqarish imkonini beradi.

1. {{ui:More}} ni, soʻng {{ui:Draft}} ni tanlang (yoki avval {{key:Shift}}+bosib yuzalarni tanlang). Hech narsa tanlanmagan boʻlsa, tanlash rejimiga oʻtasiz: egish uchun har bir yuzani bosing, soʻng {{ui:Done}}.
2. **Burchak (°)** ni, **Neytral tekislik** (yuzalar oʻlchamini saqlaydigan joy) va **Tortish yoʻnalishi** (standart boʻyicha neytral tekislikning normali) ni belgilang.

Musbat burchak yuzani tortish boʻylab ichkariga egadi va materialni olib tashlaydi; manfiy burchak uni qoʻshadi. Neytral tekislik dastlab Yuqori tekislik boʻladi. Bu versiyada faqat tekis yuzalarga qoralama berish mumkin: silindr, konus yoki erkin shakl yuzasi "Qoralama: bu versiyada faqat tekis yuzalar (mesh yadrosi quradi)." deydi. 100 × 100 × 50 blokning pastki tomonidan 5° ga qoralangan toʻrt yon tomoni aniq h/3·(a² + b² + ab) hajmli kesik piramidaga aylanadi, bunda b = a − 2h·tan 5°.

## Xabarlar

| Xabar | Nima qilish kerak |
|---|---|
| "Profil tekisligi yoʻlning bir uchidan (boshi yoki oxiridan) oʻtishi kerak …" | Profil eskizini yoʻlning boshiga (yoki oxiriga) suring |
| "Yoʻlda boʻshliq bor: uning egri chiziqlari uchma-uch ulanmaydi …" | Yoʻl egri chiziqlarini ulang; alohida eskizlarda ularning uchlari aniq tutashishi kerak |
| "Loft kesimiga aynan bitta yopiq kontur kerak" | Eskizni boʻling yoki ortiqcha konturni olib tashlang |
| "… bu neytral tekislik atrofida qoralanmaydi …" | Yuza neytral tekislikka parallel yoki unga tegmaydi |
| "Qoralama: bu versiyada faqat tekis yuzalar (mesh yadrosi quradi)." | Tanlangan yuza egri. Uni olib tashlang; faqat tekis yuzalarni qoralang |

:::note
Hali qurilmagan: buralgan sweep, yupqa devorli va sirt sweep, loft yoʻriq relslari va uchidagi tangens, silindr, konus va erkin shakl yuzalarida qoralama.
:::
