---
title: Detallarni boshqa detal modellash dasturlariga va ulardan koʻchirish
summary: Detalni jonli xususiyatlar daraxti bilan qayta quruvchi makros sifatida boshqa detal modelovchiga yuboring. Nomlangan STEP va boshqa modelovchi yozgan xususiyatlar roʻyxatini ochish bu versiyada hali qurilmagan.
keywords: makros, qurilmagan, swb, vba, xususiyatlar daraxti, ikki tomonlama, eksport makrosi, cadcraft-sw.json, nomlangan step, ap214, global oʻzgaruvchilar, tenglamalar, mahalliy detal
from: 97ca61da
---

PartCraft detallarni SolidWorks bilan ikki tomonlama almashadi, hech kim oʻqiy olmaydigan fayl formatisiz:

- **Chiqish:** SolidWorks detalning oʻzini qurish uchun ishga tushiradigan makros (`.swb`, oddiy matn), xususiyat-xususiyat boʻlib, eskizlari, munosabatlari, oʻlchamlari, global oʻzgaruvchilari va tenglamalari bilan. Siz jonli xususiyatlar daraxtiga ega mahalliy detalni olasiz, oʻlik jism emas.
- **Qaytish:** SolidWorks ichida ishga tushiradigan makros detalning xususiyatlari va tenglamalarini `.cadcraft-sw.json` fayliga yozadi. Bu faylni PartCraftda ochish bu versiyada hali qurilmagan (aniq yadro kerak).

:::warning
Bularning hech biri hali SolidWorksda sinovdan oʻtmagan. SolidWorks faqat Windowsda litsenziya bilan ishlaydi va PartCraft bu makroslarni u yerda hech qachon ishga tushirmagan. Makroslar SolidWorks API hujjatlari asosida yozilgan va bu yerda tuzilishi tekshirilgan. Muammolar haqida xabar berishingiz mumkin; makros yozgan jurnal qaysi qadam xato boʻlganini koʻrsatadi.
:::

PartCraft `.sldprt` faylini yoza olmaydi: bu format yopiq. Mahalliy detalni olish yoʻli — makros.

## Detalni makros sifatida yuborish

1. Detalni oching.
2. {{ui:Eksport}} ni tanlang, keyin {{ui:SolidWorks uchun makros (.swb)}} ni tanlang. PartCraft `<part>.swb` ni yuklab oladi; holat satrida u “aniq yadrosiz yozildi” deyiladi.
3. Muloqot oynasi makros nechta xususiyat, global oʻzgaruvchi va tenglama qurishini aytadi va qoldirilgan narsalarni roʻyxatlaydi. Bu versiyada yoniga STEP yozilmaydi: kerak boʻlsa {{ui:Eksport}}, keyin {{ui:STEP (faset, mesh yadrosi)}} dan foydalaning.
4. SolidWorksda **Tools > Macro > Run** ni tanlang, `.swb` faylini tanlang va kuting. U standart detal shablonidan yangi detal yaratadi, millimetrlarni oʻrnatadi va har bir xususiyatni quradi.
5. Oxirida xabar nechta qadam bajarilganini, nechtasi muvaffaqiyatsiz boʻlganini va nechtasi PartCraft jismiga mos kelganini aytadi. Toʻliq jurnal, `<part> macro log.txt`, makros yonida yoziladi.

Makros nimalarni quradi:

| PartCraft | Yangi detalda |
|---|---|
| Front, Top yoki Right tekisligidagi eskiz | Oʻsha tekislikdagi eskiz, uning chiziqlari, yoylari, aylanalari, nuqtalari, munosabatlari va oʻlchamlari (PartCraftdagidek nomlangan, masalan `k7`) |
| Yuzadagi eskiz | Xuddi shu yuzadagi eskiz, uning nuqtasi bilan tanlangan |
| Qotirilgan tekislikdagi eskiz | Uchta nuqta orqali oʻtuvchi malumot tekisligi va unda eskiz |
| Ekstruziya, kesish (koʻrluk, hammasi orqali, oʻrta tekislik, ikki yoʻnalish, konuslik) | Boss-extrude yoki cut-extrude |
| Aylantirish, aylantirilgan kesish | Xuddi shu markaziy chiziq atrofida aylantirish |
| Teshik (oddiy, zenkerli, konusli, rezbali) | Oʻz eskizlari bilan bitta yoki ikkita kesish (rezbali teshik — uning metchik uchun burgʻusi; rezba yoʻq) |
| Chiziqli va doiraviy massiv, aks ettirish | Linear pattern, circular pattern, mirror (xususiyatlar yoki jism) |
| Yumaloqlash, qiyalatish, boʻshlatish | Xuddi shu qirra va yuzalarda Fillet, chamfer va shell, nuqtalar bilan tanlangan |
| Parametrlar va tenglamalar | Nomi oʻzgartirilgan oʻlchamlardagi global oʻzgaruvchilar va tenglamalar |
| Bostirilgan xususiyatlar, orqaga qaytarish chizigʻi | Xuddi shunday bostirilgan; orqaga qaytarish chizigʻi oʻz joyida |

Har bir qattiq xususiyatdan keyin makros jismning hajmi va oʻlchamini PartCraftnikiga solishtiradi. Farq boʻlsa, u xususiyat yoʻnalishini bir marta aylantiradi va yana tekshiradi; agar bundan yaxshilanmasa, uni qaytarib, jurnalga “Check” deb yozadi.

### Qoldirilganlar

Muloqot oynasi va makros boshi koʻchirilmagan hamma narsani sababi bilan roʻyxatlaydi. Hozircha bular: import qilingan jismlar (oʻrniga STEP qoʻying), sweep, loft, draft, malumot oʻqlari va nuqtalari, “gacha” tugash shartlari, faqat ayrim konturlarni ekstruziya qilish va ularga bogʻliq boʻlgan hamma narsa. Splaynlar nuqtalari orqali oʻtuvchi egri chiziqlarga aylanadi. Bu versiyada aniq yadro yoʻq, shuning uchun yuzalardagi eskizlar va qirra yoki yuzalarni tanlaydigan xususiyatlar ham qoldiriladi.

## Nomlangan STEP yuborish

Bu versiyada hali qurilmagan: {{ui:SolidWorks uchun STEP (nomlangan, AP214)}} aniq yadroni talab qiladi va uni tanlaganda “SolidWorks uchun STEP: hali qurilmagan. …” deyiladi. Aniq yadro bilan fayl detalning nomini, millimetrlarni va detal rangini oʻz ichiga oladi hamda Y oʻqini yuqoriga qaratib turadi, xuddi SolidWorks detallarni koʻrsatgandek (oddiy {{ui:STEP AP214 (aniq yaxlit jism)}} eksporti Z oʻqini yuqoriga qaratadi). Nomda aksentli harflar aksentini yoʻqotadi, oddiy ASCII dan tashqaridagi boshqa belgilar esa `_` ga aylanadi.

## Detalni qaytarib olish

Faylni PartCraftda ochish (3-qadam) bu versiyada hali qurilmagan: u “SolidWorks eksportini ochish: hali qurilmagan. …” deydi. CadCraft chizmachilik ilovasi hali ham faylni ochadi va undan eskizlarni oladi.

1. `CadCraftExport.swb` ni yuklab olish uchun {{ui:Fayl}} > {{ui:Eksport}} > {{ui:Detallarni qaytarish uchun eksport makrosi (.swb)}} ni tanlang va uni detallaringiz yoniga qoʻying.
2. SolidWorksda detalni oching, **Tools > Macro > Run** ni tanlang va `CadCraftExport.swb` ni tanlang. U detal yoniga `<part>.cadcraft-sw.json` ni yozadi va detalning oʻzini oʻzgartirmaydi.
3. PartCraftda {{ui:Ochish}} ni tanlang va oʻsha faylni tanlang yoki uni 3D koʻrinishga tashlang.
4. Aniq yadro bilan PartCraft detalni xususiyat-xususiyat qayta quradi va nima qilganini koʻrsatadi: masalan, “SolidWorksdan 5 tadan 5 ta xususiyat koʻchirildi (Flange.SLDPRT)”, koʻchira olmagan har bir xususiyat (“Koʻchirilmadi: Sweep1 (Sweep).”) va hajm SolidWorks yozgan hajmga mos keladimi.
5. Uni {{ui:Saqlash}} bilan PartCraft detali sifatida saqlang.

Eskizlar asosiy tekislikda boʻlsa oʻsha tekislikka, detalda mos yassi yuza boʻlsa oʻsha yuzaga (shunda keyingi tahrirlarga ergashadi), aks holda qotirilgan tekislikka tushadi. Fillet, chamfer va shell qirralari va yuzalari nuqtalar orqali topiladi va nomlangan malumotnomalar sifatida saqlanadi. Global oʻzgaruvchilar parametrga aylanadi (boʻshliqli nomlar pastki chiziq bilan almashadi: “Bolt count” `Bolt_count` boʻladi), tenglamalar esa oʻsha oʻlchamlardagi tenglamalar boʻladi. Hech narsa taxmin qilinmaydi: mos kelmaydigan narsalar roʻyxatlanadi.

CadCraft chizmachilik ilovasi xuddi shu faylni ochadi va undan eskizlarni oladi.

:::note
Format `cadcraft-sw-export`, 1-versiya, millimetr va gradusdagi oddiy JSON. Yangiroq makrosdan olingan yoki yaroqsiz fayl sababi bilan rad etiladi.
:::
