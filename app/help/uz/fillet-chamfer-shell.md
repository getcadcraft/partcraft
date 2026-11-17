---
title: Yumaloqlash, faska va ichini boʻshatish
summary: Qirralarni tanlang va doimiy yoki oʻzgaruvchan radiusli yumaloqlashlar, teng, ikki masofali yoki masofa-burchakli faskalar qoʻshing, Qobiq bilan ochiladigan yuzalarni tanlab detalni boʻshating, element qaysi qirra yoki yuzalardan foydalanishini oʻzgartiring va odatiy xatolarni tuzating.
keywords: yumaloqlash, dumaloq, aralashtirish, faska, qiyalash, qobiq, boʻshatish, devor qalinligi, qirralar, yuzalar, qirralarni tanlash, shift bosish, ochiq yuz, aniq yadro, mesh yadrosi, qurilmagan
from: e41c1c12
---

:::note
**Bu versiyada** PartCraft yumaloqlash va faskalarni mesh yadrosi bilan faqat **ikki tekis yuza orasidagi toʻgʻri qirralarda** quradi: quti qirralari va ekstruziya hamda kesishlarning toʻgʻri qirralari, tashqi yoki ichki burchaklarda (ichki burchakka material qoʻshiladi). Teshik qirralari kabi dumaloq qirralar va qirra boʻylab oʻzgaradigan radius hali qurilmagan. Ikki yumaloqlangan qirra burchakda uchrashsa, yumaloqlar qiyshiq kesiladi (oʻtkir burma hosil qiladi), aralashtirilmaydi. **Qobiq** ham mesh yadrosi bilan quriladi: u faqat tekis yuzalarni ochadi, turli qalinlikdagi devorli qobiqlar hali qurilmagan va koʻp dumaloq yuzali detallarda sekin ishlaydi. Qarang: [Hali qurilmagan narsalar](topic:not-built-yet).
:::

{{ui:Yumaloqlash}} qirralarni yumaloqlaydi, {{ui:Faska}} ularni qiyalaydi va {{ui:Qobiq}} detalni ichi boʻsh qiladi. Uchalasi ham jismning qirra va yuzalarida ishlaydi va mesh yadrosi bilan quriladi. Ularning yumaloqlari har bir dumaloq yuza kabi fasetlangan (**Egri chiziqlar** qanchalik nozik boʻlishini belgilaydi); dumaloq yuzalar tanlash va oʻlchash mumkin boʻlgan silindrlar (qarang: [Mesh yadrosi](topic:solid-kernels)).

## Qirralarni yumaloqlash yoki qiyalash

### Avval qirralarni tanlang

1. Detalning qirrasini bosing. Butun qirra ajraladi va oʻng panelda **Qirra** deyiladi: uning turi (Toʻgʻri, Aylana yoki yoy, Egri), uzunligi va u orasida joylashgan yuzalar.
2. Yana qirra qoʻshish uchun ularni {{key:Shift}}+bosing. Har biri belgilanadi; belgilangan qirrani olib tashlash uchun uni {{key:Shift}}+bosing. Panel sarlavhasi ularni sanaydi ("4 ta qirra") va holat satri shunday deydi: "4 ta qirra tanlandi. Yumaloqlash yoki Faska ularni yumaloqlaydi; Shift+bosish yana tanlaydi, Esc tozalaydi."
3. Asboblar panelidagi {{ui:Yumaloqlash}} yoki {{ui:Faska}} ni, yoki oʻng paneldagi xuddi shu tugmalarni tanlang.

Element barcha tanlangan qirralar bilan qoʻshiladi: 2 mm yumaloq yoki 1 mm faska. Holat satri masalan shunday deydi: "Fillet1 qoʻshildi (4 ta qirra). Oʻlchamini oʻngdan oʻzgartiring; Qirralarni tanlash qaysilarini oʻzgartiradi."

### Yoki avval elementni qoʻshing

1. Hech narsa tanlanmagan holda {{ui:Yumaloqlash}} yoki {{ui:Faska}} ni tanlang.
2. PartCraft tanlash rejimiga oʻtadi: oʻng panel sarlavhasi "Fillet1: tanlanmoqda" deydi, detal yumaloqlashdan oldingi holatda koʻrinadi (panel buni aytadi) va asboblar panelida {{ui:Tayyor}} koʻrinadi.
3. Har bir qirrani qoʻshish uchun uni bosing; olib tashlash uchun yana bosing. Holat satri ularni sanaydi.
4. {{ui:Tayyor}} (yoki panelda {{ui:Tanlashni tugatish}}) ni tanlang, yoki {{key:Esc}} yoki {{key:Enter}} ni bosing.

### Sozlamalar

| Sozlama | Yumaloqlash | Faska |
|---|---|---|
| Oʻlcham | **Radius (mm)**, standart 2 | Ikkala yuzda qirradan orqaga **Masofa (mm)**, standart 1 |
| **Qirralar** | Nechta | Nechta |

Quyidagi roʻyxat har bir qirrani ulagan ikki yuzi bilan nomlaydi, masalan "Qirra 1: Extrude1 oxirgi yuzi × Extrude1 yon tomoni". **Olib tashlash** birini olib tashlaydi. {{ui:Qirralarni tanlash}} tanlashga qaytaradi. Tarixdagi elementni ikki marta bosish ham xuddi shunday qiladi.

Qirralar ular ulagan ikki yuza boʻyicha eslab qolinadi, shuning uchun tarixdagi oldingi oʻlchamni oʻzgartirsangiz ham ular toʻgʻri qirrada qoladi.

### Oʻzgaruvchan yumaloqlar va faska turlari

- **Oʻzgaruvchan radius** (yumaloqlash): bu versiyada hali qurilmagan ("Qirra boʻylab radiusi oʻzgaradigan yumaloqlash: hali qurilmagan (aniq yadro kerak). Unga bitta radius bering."). Aniq yadro bilan: belgilang va **Oxirgi radius (mm)** ni qoʻying. Radius har bir qirraning bir uchida **Radius** dan ikkinchi uchidagi **Oxirgi radius** gacha chiziqli oʻzgaradi; **Uchlarini almashtirish** uni teskari qiladi.
- **Turi** (faska): **Teng masofa**, **Ikki masofa** (boshqa yuzada **Ikkinchi masofa**) yoki **Masofa va burchak** (bir yuzadagi masofa, shu yuzaga nisbatan **Burchak (°)** dagi qiyalik). **Tomonlarni almashtirish** birinchi masofani boshqa yuzaga qoʻyadi.

## Detalni qobiqlash

1. Ochiq qoldirish uchun tekis yuzni bosing, masalan qutining ustki yuzi. Yoki bir nechta yuzani {{key:Shift}}+bosing.
2. Asboblar panelidagi {{ui:Qobiq}} ni, yoki yuz panelidagi {{ui:Qobiq, bu yuzani ochadi}} ni tanlang.

Detal 2 mm devorli boʻladi, tanlangan yuzalar ochiq. Sozlamalar:

| Sozlama | Nima qiladi | Standart |
|---|---|---|
| **Devor (mm)** | Devor qalinligi | 2 |
| **Devorlar tashqariga oʻsadi (yuzalar ichkarida qoladi)** | Belgilansa: devorlar tashqarida qoʻshiladi va ichki qism oʻlchamini saqlaydi. Oʻchiq: devorlar ichkariga kiradi va tashqi qism oʻlchamini saqlaydi | Oʻchiq |
| **Ochiq yuzalar** | Olib tashlanadigan yuzalar soni | |

Ichkariga qaraganda devorlar aniq devor qalinligida boʻladi: tashqi burchaklar oʻtkir qoladi, ichki burchaklar dumaloq chiqadi (radius = devor), va detal orqali oʻtgan teshik atrofida devor naylari hosil boʻladi. Tashqariga qaraganda devorlar asl sirtdan tashqariga qoʻshiladi, asl sirt esa boʻshliqqa aylanadi va tashqi qirralar dumaloq chiqadi. Ichki yuzalar ularni offset qilgan yuzalar nomi bilan ataladi, shuning uchun ularni tanlash mumkin.

Faqat tekis yuzalarni ochish mumkin: egri birini tanlasangiz "Qobiq: bu versiyada faqat tekis yuzalarni ochadi (mesh yadrosi uni quradi)." deydi. Koʻp dumaloq yuzali detallarda qobiq sekin ishlaydi (har ming uchburchakka bir necha soniya): loyihalash paytida kattaroq **Egri chiziqlar** sozlamasidan foydalaning.

{{ui:Yuzalarni tanlash}} qaysi yuzalar ochiq ekanini oʻzgartiradi, qirralarni tanlash bilan bir xil tarzda. Roʻyxat har birini nomlaydi, masalan "1-yuza: Extrude1 oxirgi yuzi". Ochiq yuzasiz qobiqqa ruxsat yoʻq: "Olib tashlanadigan (ochiq) yuzalarni tanlang, soʻng qobiqlang."

## Tartib muhim

Elementlar yuqoridan pastga quriladi. Qobiqdan oldingi yumaloqlash jism bilan birga qobiqlanadi, shuning uchun ichki qismda ham dumaloq burchaklar boʻladi. Qobiqdan keyingi yumaloqlash faqat siz tanlagan qirralarni yumaloqlaydi. Elementlarni {{ui:Yuqoriga siljitish}} va {{ui:Pastga siljitish}} bilan siljiting (qarang: [Detalni tarix orqali oʻzgartirish](topic:edit-history)).

Naqshlar va simmetriyalar yumaloqlash, faska yoki qobiqni nusxalay olmaydi: "Fillet1 jism qirralarini yoki devorlarini oʻzgartiradi; uni nusxalab boʻlmaydi. Jismlarni yaratadigan elementlarni nusxalang (ekstruziyalar, aylantirishlar, teshiklar, importlar)." Avval teshiklar yoki kesishlarni naqshlang, keyin barcha nusxalarning qirralarini bitta yumaloqlash bilan yumaloqlang.

## Muvaffaqiyatsizlik boʻlganda

| Xabar | Nima qilish kerak |
|---|---|
| "A 5 mm round does not fit here (…)." Bu yerga 5 mm yumaloq sigʻmaydi (u qirralardan biri yonidagi yuza uchun juda katta yoki qirralar mesh yadrosi aralashtira olmaydigan burchakda uchrashadi). | Kichikroq radius ishlating yoki bir vaqtda kamroq qirrani yumaloqlang (bir nechta yumaloqlash elementi, eng kichigi oxirgi) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." Yumaloqlanadigan qirra yoʻq: Extrude1 va Cut2 orasidagi qirra. | Oldingi oʻzgarish bu qirrani olib tashladi. {{ui:Qirralarni tanlash}} ni tanlang, qizil qirrani olib tashlang va yangisini tanlang |
| "The shell could not be made with this thickness (…)." Bu qalinlikda qobiq yasab boʻlmadi (…). | Devor modelning tor qismidan yoki yumaloqlash radiusidan qalinroq. Devorni yupqalashtiring yoki yumaloqlarni devordan kattaroq qiling |
| "That face has no name the history can follow; pick another." Bu yuzaning tarix kuzata oladigan nomi yoʻq; boshqasini tanlang. | Element yaratgan yuzani tanlang (koʻpchilik yuzalar shunday) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (Chamfer ham) Yumaloqlash: bu versiyada faqat ikki tekis yuza orasidagi toʻgʻri qirralar (mesh yadrosi ularni quradi). Egri qirralarni eskizda yumaloqlang yoki qiyalang. | Tanlangan qirra dumaloq, masalan teshik qirrasi, yoki egri yuzada. {{ui:Qirralarni tanlash}} bilan uni olib tashlang va oʻsha burchakni eskizda yumaloqlang yoki qiyalang |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." Qirra boʻylab radiusi oʻzgaradigan yumaloqlash: hali qurilmagan (aniq yadro kerak). Unga bitta radius bering. | **Oʻzgaruvchan radius** belgisini olib tashlang |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (tarixda ⚠) Mesh yadrosi bilan yumaloqlash: yumaloq qirralar uchrashgan joyda ular qiyshiq kesiladi, aralashtirilmaydi. | Ogohlantirish, xato emas: detal qurilgan. Tanlangan qirralar burchakda uchrashadi va yumaloqlar u yerda oʻtkir burma hosil qiladi. Kamroq qirrani yumaloqlang yoki burmani qabul qiling |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." Qobiq: bu versiyada faqat tekis yuzalarni ochadi (mesh yadrosi uni quradi). | Ochiq yuza egri. {{ui:Yuzalarni tanlash}} bilan uni olib tashlang; faqat tekis yuzalarni oching |

## Chegaralar

Bu versiyada yumaloqlash va faskalar faqat ikki tekis yuza orasidagi toʻgʻri qirralarda, bitta radius bilan ishlaydi, burchakda uchrashgan yumaloqlar qiyshiq kesiladi. Qobiqlar faqat tekis yuzalarni ochadi. Aniq yadro bilan oʻzgaruvchan yumaloq har bir qirra boʻylab chiziqli oʻzgaradi (har bir element uchun bitta qonun; qirra boʻylab nuqtalarda radiuslar toʻplami yoʻq). Yuza yumaloqlari, toʻliq yarim doiraviy yumaloqlar va turli devor qalinlikdagi qobiqlar hali qurilmagan.
