---
title: Koʻrinishlar, kesim va GD&T bilan chizma yaratish
summary: Chizma varagʻini oching, kesim va detal koʻrinishini qoʻshing, baza, shakl nazorati ramkalari va sirt pardozi belgilarini joylashtiring, varaq oʻlchamini tanlang, sarlavha blokini va revizyalarni toʻldiring hamda varaqni PDF sifatida eksport qiling.
keywords: teshiklar jadvali, teshiklar diagrammasi, teshik joylari, teglar, chizma, 2D chizma, varaq, varaq oʻlchami, a4, a3, a2, a1, a0, ansi, sarlavha bloki, revizya, revizya bloki, chizma raqami, material, pdf, koʻrinishlar, ortografik, uchinchi burchak, izometrik, kesim koʻrinishi, detal koʻrinishi, gd&t, baza, shakl nazorati ramkasi, tolerans, joylashuv, tekislik, sirt pardozi, gʻadirlik, chop etish
from: 39e944c0
---

PartCraft detaldan chizma varagʻini yaratadi: uchinchi burchak proyeksiyasida old, yuqori va oʻng koʻrinishlar, izometrik koʻrinish, umumiy oʻlchamlar va A4 dan A0 gacha yoki ANSI A dan E gacha varaqdagi sarlavha bloki. Buning ustiga kesim, detal koʻrinishi va GD&T belgilarini qoʻshishingiz mumkin. Varaq detal oʻzgarganda yangilanadi va uning sozlamalari detal faylida saqlanadi.

## Chizma varagʻini oching

1. Detalni quring. (Hech narsa qurilmagan boʻlsa: "Avval qattiq jismni quring, keyin uning chizmasini yarating.")
2. Asboblar panelida {{ui:Chizma}} ni tanlang.

3D koʻrinish oʻrniga varaq chiqadi. Asboblar panelida {{ui:Baza}}, {{ui:Ramka}}, {{ui:Ishlov}}, {{ui:Detal}}, {{ui:PDF}} va {{ui:Orqaga}} koʻrinadi, oʻng panelning sarlavhasi esa **Chizma**. Holat satri koʻrinishlar qanday yaratilganini aytadi: "Chizma (egri chiziqlar faset sifatida chiziladi). Baza, Ramka va Ishlov GD&T ni koʻrinishga joylaydi; panel kesim va detal koʻrinishini belgilaydi." Koʻrinishlar mesh yadrosining faset (qirrali) elementlaridan chiziladi, shuning uchun yumaloq qirralar qisqa toʻgʻri boʻlaklardan iborat; haqiqiy yoylar aniq yadroni talab qiladi, bu versiyada esa u yoʻq.

Varaq boʻylab harakatlaning: gʻildirakchani aylantirib kattalashtiring, oʻng yoki oʻrta tugma bilan sudrab suring, varaqni sigʻdirish uchun {{key:F}} bosing. Varaq fokusda boʻlganda {{key:Plus}} va {{key:Minus}} kattalashtiradi, {{key:Shift}} bilan birga strelka tugmalari esa suradi.

3D modelga qaytish uchun {{ui:Orqaga}}, {{ui:Modelga qaytish}} ni tanlang yoki (hech narsa tanlanmagan va faol asbob boʻlmaganda) {{key:Esc}} bosing.

## Varaqda nima bor

- **Siz tanlagan varaq**, gorizontal (boshqasini tanlamasangiz A3), ramka va **sarlavha bloki** bilan: sarlavha, kompaniya, chizma raqami, revizya, material, kim chizgan, tekshirgan va tasdiqlagan, sana, masshtab, varaq oʻlchami, "Oʻlchov birliklari: millimetr · Uchinchi burchak proyeksiyasi" va koʻrinishlar aniqmi yoki faset (qirrali)mi.
- Revizya qoʻshganingizdan keyin yuqori oʻng burchakda **revizya bloki**.
- **Old, yuqori va oʻng koʻrinishlar**: yuqori koʻrinish old koʻrinish ustida, oʻng koʻrinish uning oʻngida. Yashirin qirralar punktir bilan chiziladi.
- Joy boʻlsa, **izometrik koʻrinish**.
- **Umumiy oʻlchamlar**: old koʻrinishda kenglik va balandlik, yuqori koʻrinishda chuqurlik.
- Asosiy koʻrinishlar uchun bitta **masshtab** ISO seriyasidan (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), ular sigʻishi uchun tanlanadi.

## Varaq oʻlchamini tanlang

Chizma varagʻida hech narsa tanlanmagan holda oʻng panelda **Varaq** ni tanlang: **A4, A3, A2, A1, A0** (ISO 216) yoki **ANSI A, B, C, D, E** (11 × 8.5 dan 44 × 34 in gacha). Koʻrinishlar eng katta ISO masshtabda qayta joylashtiriladi, shuning uchun kattaroq varaq detalni kattaroq koʻrsatishi mumkin.

## Sarlavha blokini toʻldiring

Oʻng paneldagi **Sarlavha bloki** maydonlari toʻgʻridan-toʻgʻri varaqqa chiqadi: {{ui:Sarlavha}}, {{ui:Chizma raqami}}, {{ui:Revizya}}, {{ui:Kompaniya}}, {{ui:Chizdi}}, {{ui:Tekshirdi}}, {{ui:Tasdiqladi}}, {{ui:Sana}} (yil-oy-kun), {{ui:Umumiy tolerans}} va {{ui:Ishlov}} (oxirgi ikkitasi sarlavha blokidan yuqorida chop etiladi). Quti ichiga yozing va {{key:Enter}} bosing yoki boshqa joyni bosing. Boʻsh quti katakchani boʻsh qoldiradi, quyidagilardan tashqari:

- **Sarlavha** siz yozmaguncha detalning nomini koʻrsatadi.
- **Sana** siz yozmaguncha bugungi sanani koʻrsatadi.
- **Revizya** siz yozmaguncha roʻyxatdagi eng yangi revizyani koʻrsatadi.

**Material** detaldan olinadi: modelda boʻsh joyni bosing, keyin Detal panelida {{ui:Material}} ni tanlang. Bir xil material Oʻlchash massa xususiyatlariga zichlik beradi.

## Revizyalar qoʻshing

**Revizyalar** ostida {{ui:Revizya qoʻshish}} ni bosing. Har bir yangi qator keyingi harfni oladi (A, B, C …, Z dan keyin AA) va bugungi sanani. Nima oʻzgarganini va kim oʻzgartirganini yozing. {{ui:Oʻchirish}} qatorni oʻchiradi. Varaqning yuqori oʻng burchagidagi revizya bloki ularni eng eskisidan boshlab, 20 tagacha koʻrsatadi.

Varaq oʻlchami, sarlavha bloki, revizyalar va material detal faylida saqlanadi va har bir oʻzgarish {{ui:Ortga qaytarish}} ning bir qadami boʻladi.

## Kesim koʻrinishini qoʻshing

Detal tekislik bilan kesiladi va kesim shtrixlanadi. Boshqa koʻrinishlar kabi kesim ham faset (qirrali) asosida chiziladi, shuning uchun yumaloq qirralar qisqa toʻgʻri boʻlaklar boʻladi.

1. Oʻng panelda **Kesim A-A** ni **Old koʻrinishdan**, **Yuqori koʻrinishdan** yoki **Oʻng koʻrinishdan** ga oʻrnating.
2. Kesim varaqda paydo boʻladi: material kesib oʻtgan joyda shtrixlangan, kesish chizigʻi va uning "A" strelkalari esa olingan koʻrinishda boʻladi.
3. **Kesish joyi (mm)** ni oʻzgartirib kesish tekisligini suring. U detalning oʻrtasidan boshlanadi.

Kesimni olib tashlash uchun **Kesim A-A** ni yana **Yoʻq** ga oʻrnating.

## Detal koʻrinishini qoʻshing

1. **Detal B** ni kattalashtiriladigan koʻrinishga oʻrnating (yoki asboblar panelida {{ui:Detal}} ni tanlang).
2. Kattalashtiriladigan soha markazini oʻsha koʻrinishda bosing. "B" bilan belgilangan aylana paydo boʻladi va kattalashtirilgan **Detal B** oʻz masshtabi bilan varaqda chiqadi, masalan "Detal B (2:1)".
3. Aylana oʻlchami uchun **Detal radiusi (mm)** ni va kattalashtirish uchun **Detal masshtabi** ni belgilang: varaqqa nisbatan 2, 4, 5 yoki 10 ×.

Detal old, yuqori, oʻng yoki kesim koʻrinishidan olinishi mumkin, izometrikdan emas. Har bir koʻrinish uchun joy boʻlmasa, panel shunday deydi: "Varaqda detal uchun joy yoʻq: detalni kichraytiring yoki koʻrinishni olib tashlang."

## Teshiklar jadvali qoʻshing

Teshiklar jadvali detalning teshiklarini ularning joylari bilan sanaydi, parmalash yoki CNC uchun: panelda **Teshiklar jadvali** › **Yuqori koʻrinishdan** (yoki old, yoki oʻng) ni tanlang.

- Shu koʻrinishda uchidan koʻrinadigan har bir teshik yonida tag oladi: birinchi oʻlcham uchun **A1**, **A2** …, keyingisi uchun **B1** …
- Jadvalda har bir tag, uning **X** va **Y** qiymati millimetrda va oʻlchami chiqadi: "Ø14 THRU", "Ø6.6 × 10 DEEP", zenkovka, konik zenkovka yoki rezbali teshikning rezba izohi.
- X va Y koʻrinish konturining pastki-chap burchagidan oʻlchanadi, varaqda u **X0 Y0** deb belgilanadi.
- Naqshlar yaratgan teshiklar kiritiladi. Koʻrinishga perpendikulyar boʻlmagan teshiklar panelda sanaladi va jadvaldan chiqarib qoldiriladi.

Jadval varaqning boʻsh joyiga va PDF ga joylashtiriladi.

## GD&T va sirt pardozi belgilarini joylashtiring

1. {{ui:Baza}}, {{ui:Ramka}} (shakl nazorati ramkasi) yoki {{ui:Ishlov}} (sirt pardozi belgisi) ni tanlang.
2. Koʻrinishda biriktiriladigan nuqtani bosing. U 2.5 mm ichidagi eng yaqin chizilgan chiziqqa tutiladi.
3. Belgi yoʻnaltiruvchi chiziq bilan paydo boʻladi, tanlangan holda, oʻng panelda uning sozlamalari koʻrinadi.

Belgini sudrab koʻchiring; yoʻnaltiruvchi chiziq nuqtada qoladi. Belgi tanlangan boʻlsa, strelka tugmalari uni 1 mm ga suradi. {{key:Delete}} yoki {{key:Backspace}} (yoki paneldagi {{ui:Oʻchirish}}) uni olib tashlaydi; {{ui:Tayyor}} yoki {{key:Esc}} tanlovni bekor qiladi. Har bir oʻzgarish ortga qaytarish roʻyxatida boʻladi.

### Baza

**Harf**: A dan Z gacha, I, O va Q siz (ular 1, 0 va O kabi oʻqiladi). Har bir yangi baza keyingi boʻsh harfni oladi.

### Shakl nazorati ramkasi

| Sozlama | Tanlovlar |
|---|---|
| **Tolerans** | Toʻgʻrilik, Tekislik, Doiraviylik, Silindriklik, Chiziq profili, Sirt profili, Perpendikulyarlik, Burchaklilik, Parallellik, Joylashuv, Konsentriklik va Simmetriklik (ikkalasi ham Y14.5-2018 da olib tashlangan va shunday belgilangan), Doiraviy urilish, Toʻliq urilish |
| **Zona (mm)** | Tolerans qiymati, standart 0.1 |
| **Diametr zonasi (⌀)** | Silindrsimon zonali xususiyatlar uchun; Joylashuv uchun standart holda yoqilgan |
| **Material** | RFS (yoʻq), MMC (Ⓜ), LMC (Ⓛ), xususiyat ruxsat bergan joyda |
| **Birinchi / Ikkinchi / Uchinchi baza** | Uchtagacha baza harfi, har biri ruxsat etilgan joyda **modifikator** (MMB, LMB) bilan |

PartCraft ramkani ASME Y14.5 qoidalari boʻyicha tekshiradi va panelning yuqorisida nima notoʻgʻriligini aytadi, masalan "Tekislik shakl toleransi hisoblanadi: unda baza havolalari boʻlmaydi." yoki "Joylashuv kamida bitta baza havolasini talab qiladi." Qator **Oʻqiladi** ramkani soʻzma-soʻz tushuntiradi.

### Sirt pardozi

| Sozlama | Tanlovlar | Standart |
|---|---|---|
| **Ra (µm)** | Oʻrtacha gʻadirlik | 1.6 |
| **Jarayon** | istalgan jarayon, ishlov berilgan, material olinmagan | ishlov berilgan |
| **Izoh** | 40 belgigacha, masalan yoʻnalish yoki jarayon | |

Hech narsa tanlanmaganda panel **Varaqdagi izohlar** roʻyxatini koʻrsatadi, har biri **Tanlash** bilan.

## PDF eksport

Asboblar panelida {{ui:PDF}} ni, panelda {{ui:PDF eksport}} ni yoki modeldan {{ui:Eksport}}, soʻng {{ui:Chizma (PDF): koʻrinishlar, kesim, detal, GD&T}} ni tanlang. PDF `<part name> - drawing.pdf` nomi bilan yuklanadi, holat satri unda nima borligini sanab beradi.

Masshtabni saqlash uchun varaq oʻlchamidagi qogʻozga "Haqiqiy oʻlcham" rejimida chop eting.

## Cheklovlar

| Hali qurilmagan | Buni hozir qiling |
|---|---|
| Uchta umumiy oʻlchamdan boshqa oʻlchamlar | Ularni PDF da belgilash dasturi bilan qoʻshing yoki eskiz yoki yuzani DXF sifatida eksport qilib, 2D CAD dasturida oʻlchamlang |
| Bittadan koʻp kesim yoki detal; sinib chiqarilgan, qoʻshimcha va proyeksiyalangan koʻrinishlar | Mavjud emas |
| Birinchi burchak proyeksiyasi, harakatlanuvchi koʻrinishlar, portret varaqlar | Uchinchi burchak, avtomatik joylashuv, gorizontal |
| Varaqdagi erkin matn izohlari va jadvallar (sarlavha va revizya bloklaridan tashqari) | Pardoz izohidan foydalaning yoki PDF da matn qoʻshing |
| Yigʻmalarning chizmalari | Mavjud emas |

Gʻarbiy Yevropa toʻplamidan tashqari belgilar "?" sifatida chop etiladi (PDF oʻquvchining oʻrnatilgan Helvetica shriftidan foydalanadi). GD&T belgilari chiziq sifatida chiziladi, shuning uchun ularni har qanday oʻquvchida chop etish mumkin.

## Varaqqa ishni topshiring

- **Varaq › Avtomatik** qogʻozni oʻzi tanlaydi: 1:1 gacha boʻlgan eng katta standart masshtab va shu masshtabda koʻrinishlarni sigʻdiradigan eng kichik A-oʻlchamli varaq (roʻyxatda qaysi biri olinganini koʻrsatadi).
- **Teshiklarga oʻlcham qoʻyish** teshiklarga oʻlcham qoʻyadi: eng koʻp teshikni uchidan koʻradigan koʻrinishda har biriga markaziy belgi, har bir oʻlcham uchun bitta izoh ("2× Ø6 THRU" yoʻnaltiruvchi chiziq bilan) va ularning joylari koʻrinishning pastki-chap burchagidan oʻlchanadi. Umumiy kenglik, balandlik va chuqurlik doim boʻladi.
