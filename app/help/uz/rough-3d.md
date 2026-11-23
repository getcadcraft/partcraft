---
title: 3D qoʻpol ishlov va qoldiq ishlov berish
summary: Butun model atrofidagi zaxirani tekis, yarim-dumaloq yoki shar uchli freza bilan sathma-sath tozalang, pardozlash uchun zaxira qoldirib, soʻng kichikroq asbob faqat birinchisi material qoldirgan joyda kessin. Yoʻllar nimani kafolatlaydi va nimani kafolatlamaydi.
keywords: 3D qoʻpol ishlov, qoʻpol ishlov, qoʻpol, qoldiq ishlov, qolgan zaxira, qoldiriladigan zaxira, qadam, sathlar, z sathi, waterline, qiyalik boʻylab tushish, tik botirish, ortiqcha kesish, kichikroq asbob
from: 29ddc266
---

Ishlab chiqarishdagi ikki operatsiya, asboblar panelidagi {{ui:Koʻproq}} ostida, zaxirani **butun model** boʻylab 3D da tozalaydi, asbob vertikal holatda (yoki operatsiyaning oʻz [asbob yoʻnalishi](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) boʻyicha). Ular tanlov talab qilmaydi.

## 3D qoʻpol ishlov

{{ui:3D qoʻpol}} zaxiraning yuqorisidan **qadam** bilan pastga ishlaydi. Har bir sathda u modelga tegmasdan asbob yeta oladigan hamma narsani tozalaydi: bir-biridan **qadam masofasi** (asbob diametrining bir boʻlagi) bilan toʻgʻri qatorlar, soʻng yetishi mumkin boʻlgan hudud chetini bir marta aylanib oʻtadi, shunda devorlar kuzatiladi va reja boʻyicha pogʻonalar qatori qolmaydi.

- **Qoldiriladigan zaxira**: pardozlash uchun asbob modeldan hamma joyda qanchaga uzoqda turadi (standart 0.5 mm).
- **Har bir yassi yuzda sath**: model har bir yassi yuzi balandligida qoʻshimcha sath (qoldiriladigan zaxira bilan birga), shunda tagliklar deyarli bir butun qadam balandlikda qolmaydi.
- **Bundan yupqa zaxirani eʼtiborsiz qoldirish**: bundan yupqa material, yuqoriga yoki yon tomonga, oʻtishga arzimaydi (qoʻpol ishlovda 0.05 mm, qoldiq ishlovda 0.5 mm; shunda devor boʻylab qolgan tola kichikroq asbobni har bir devor atrofida yurgizmaydi).
- **Pastki chegara**: bu balandlikdan pastda hech narsa kesilmaydi. Boʻsh qolsa — modelning pastki qismi.

U zaxiradan **oldingi operatsiyalar qoldirgan holatda** boshlaydi: yuzlash oʻtishidan keyin yuzlash frezasi oʻtgan havoni kesmaydi.

Pastga tushish: pastga tushayotganda asbob zaxiraga duch kelgan joyda oʻz oʻtishi boʻylab **qiyalik burchagi** bilan tushadi, ikki asbob diametridan oshmagan masofada oldinga-orqaga. Bunga yetarli boʻlmagan oʻtish berilishda toʻgʻridan-toʻgʻri pastga botiriladi; operatsiya ularni sanaydi va ogohlantiradi, chunki markazida kesmaydigan asbob buni qilmasligi kerak.

## Qoldiq ishlov berish

{{ui:Qoldiq}} — **kattaroq asbobdan keyin kichikroq asbob** uchun xuddi shu strategiya. U zaxira simulyatsiyasini oʻqiydi va faqat material hali turgan joylarda kesadi: katta asbob burilib kira olmagan ichki burchaklar, u sigʻmagan ariqchalar, u qiyaliklarda qoldirgan pogʻonalar. Qolgan joyda u hech narsa qilmaydi, shuning uchun uning yoʻli xuddi shu asbob yangi zaxirada olgan narsaning kichik qismi.

Uni qoʻpol ishlovdan keyin qoʻying va kichikroq asbobni tanlang. Unga oldingi operatsiyalarning zaxira simulyatsiyasi kerak, uni ish maydoni doim ishga tushiradi.

## Yoʻllar qanchalik yaxshi

- **Ortiqcha kesish yoʻq.** Asbob holatlari toʻrda hisoblanadi, frez oʻzidan biroz kattaroq olinadi (yon tomonga 1.4 toʻr katakchasi va qoldiriladigan zaxira bilan), shuning uchun u qayerda tursa ham modeldan xoli boʻladi. Testlar har bir kesish nuqtasini aniq toʻrdagi aniq asbob bilan va har bir yurishdan keyin zaxira simulyatsiyasi bilan tekshiradi: ortiqcha kesish yoʻq, zaxira orqali tez harakat yoʻq.
- **Buning narxi**: devorlar qoldiriladigan zaxiradan biroz koʻproq qoldiradi, operatsiyada «Devorlardagi qoʻshimcha zaxira» deb koʻrsatilgan miqdorgacha (Ø6 asbob uchun taxminan 0.5 mm, kichikroq uchun kamroq). Pardozlash oʻtishi uni olib tashlaydi.

Bu yoʻllar nima emas:

- Qatorlar toʻgʻri chiziqlar, detal shaklining siljitilgan konturi yoki doimiy ilashish egri chiziqlari emas. Ular siljitilgan yoki moslashuvchan strategiyaga qaraganda koʻproq koʻtarish va havodagi harakatlar qiladi, va har bir sathdagi birinchi qator asbobning toʻliq kengligini kesadi. Yassi tubli oymalar uchun yaxshiroq qoʻpol ishlov — [Moslashuvchan](topic:manufacture).
- Asbobning dastagi va tutgichi tekshirilmaydi. Kesish tish uzunligidan chuqurroq boʻlganda ogohlantirish chiqadi.
- Ostki kesiklar koʻrinmaydi: model — asbob oʻqi boʻylab pastga tushganda uchraydigan narsa. Yonni qoʻpol ishlash uchun ikkinchi operatsiyaga [egilgan asbob yoʻnalishi](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) bering.
- Qoldiq ishlov zaxirani faqat simulyatsiya toʻri darajasida biladi (detal oʻlchamiga qarab 0.1 dan 2 mm gacha katakchalar).
- Katta detalda dastur uzun boʻladi (Ø6 asbob bilan 200 mm flanets uchun 100 000 dan ortiq harakat), hisoblash taxminan bir daqiqa oladi va ish maydonidagi har bir oʻzgarish butun dasturni qayta hisoblaydi. Qoʻpol ishlov uchun sigʻadigan eng katta asbobni ishlating.
- Kesishdan oldin chiqishni oʻz stanokingizning simulyatorida tekshiring.
