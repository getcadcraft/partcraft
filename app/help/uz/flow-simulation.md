---
title: Suyuqlik oqimini simulyatsiya qilish (Flow study)
summary: Detal ichidagi kanallar orqali yoki uning atrofidagi quti ichida oqim: kirish va chiqish teshiklari, havo, suv yoki oʻzingiz kiritgan suyuqlik, keyin harakatlanuvchi kesuvchi tekislikda tezlik va bosim, oqim chiziqlari, sirt bosimi, bosim pasayishi, massa balansi, qarshilik va koʻtarish kuchi, shuningdek laminar usul nimani koʻrsata olishi va nimani koʻrsata olmasligi.
keywords: oqim, CFD, suyuqlik, hisoblash suyuqlik dinamikasi, oqim simulyatsiyasi, havo, suv, qovushqoqlik, zichlik, Reynolds soni, laminar, turbulent, bosim pasayishi, bosim yoʻqotishi, kirish, chiqish, qopqoq, tiqin, tezlik, oqim tezligi, hajmiy oqim, litr daqiqada, statik bosim, oqim chiziqlari, kesuvchi tekislik, qarshilik, koʻtarish kuchi, qarshilik koeffitsiyenti, koʻtarish koeffitsiyenti, frontal maydon, tashqi oqim, ichki oqim, quvur, kanal, kollektor, soplo, Lattice Boltzmann, qoldiq, yaqinlashish
from: 7dc75f29
---

**Flow** tadqiqoti detalingiz ichidagi kanallar orqali (**ichki**) yoki uning atrofidagi (**tashqi**) suyuqlik qanday harakatlanishini hisoblaydi. Standart holda u **laminar, siqilmaydigan, izotermik va Nyuton** boʻladi: zichligi va qovushqoqligi oʻzgarmas suyuqlikning silliq oqimi, issiqliksiz, turbulentliksiz va gravitatsiyasiz. **Tajribaviy** turbulent model ham mavjud, faqat sifat jihatidan naqshlar uchun (quyiga qarang). U detal uchun mesh yadrosi bergan nomlangan yuzalarda ishlaydi (qarang: [Mesh yadrosi](topic:solid-kernels)).

**Ish maydoni** qutisidan **Simulyatsiya** ni tanlang, tadqiqot boʻlmasa **Yangi tadqiqot** tugmasini bosing va **Turi** ni **Oqim (CFD)** ga oʻrnating. **Oqim modeli** — **Laminar** (standart) yoki **Turbulent (Spalart–Allmaras, tajribaviy)**: quyidagi **Turbulent oqim (tajribaviy)** boʻlimiga qarang. Tadqiqotning mustahkamlik sozlamalari saqlanadi, shuning uchun orqaga qaytish mumkin. Oqim sozlamalari detal faylida saqlanadi va har bir oʻzgarishni bekor qilish mumkin.

## Suyuqlik va katakchalarni tanlash

- **Suyuqlik**: 20 °C da havo yoki suv, yoki **Maxsus** — oʻzingizning zichligingiz (kg/m³) va dinamik qovushqoqligingiz (Pa·s) bilan. Havo ideal gaz qonuni va Sutherland qonunidan foydalanadi (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); suv IAPWS qiymatlaridan foydalanadi (998.21 kg/m³, 1.0016 mPa·s).
- **Katakcha oʻlchami**: suyuqlik boʻshligʻi teng kublar bilan toʻldiriladi. Avtomatik oʻlcham uchun boʻsh qoldiring; panelda panjara koʻrsatiladi. Har bir teshik va kanal foydali natijalar uchun **kamida 8 dan 10 gacha katakcha** kenglikda boʻlishi kerak. Mayda katakchalar aniqroq, lekin sekinroq (ikki barobar mayda — taxminan 16 barobar ish).
- **Devorlar**: **Interpolyatsiya** egri devorlarni katakchalar orasida kuzatadi (standart); **Bounce-back** devorlarni kub pogʻonasi sifatida qabul qiladi.

## Detal ichidagi oqim

Suyuqlik boʻshligʻi yopiq boʻlishi kerak. Panelda **Kirish** va **Chiqish** qoʻshing, soʻngra koʻrinishda ularning yuzalarini bosing:

1. **Teshik atrofidagi tekis yuza** — quvur uchidagi halqa, port yuzasi. PartCraft u yerdagi teshikni qopqoq bilan yopadi. Shu yuzadagi har bir teshik oʻsha teshikka tegishli, shuning uchun kirish va chiqish bir yuzada ochilsa, ulardan birining ustiga yupqa qopqoq modellashtiring.
2. **Qopqoqning ichki yuzasi** — boshqa CAD vositalaridagi kabi: teshik ustida yupqa plastina (ekstruziya) modellashtiring va suyuqlikka tegib turgan yuzasini tanlang.

Kirish uchun **tezlik** (m/s, teshik boʻylab bir xil, detal ichiga) yoki **hajmiy oqim** (L/min) belgilang. Chiqish uchun **statik bosim** (Pa, oʻlchov) belgilang. Agar teshik ochiq qolsa yoki devor katakchadan yupqa boʻlsa, ichki qism tashqi bilan birlashadi va yechim "Yopiq suyuqlik boʻshligʻi yoʻq" xabari bilan toʻxtaydi.

## Detal atrofidagi oqim

**Oqim** ni **Tashqi** ga, **Tezlik** ni, oqim yoʻnalishini va quti oqim yuqorisiga, pastiga va yonlariga qancha yetishini belgilang (boʻsh: detal eng katta oʻlchamining 1, 3 va 1 barobari). Oqim kirgan quti yuzasi kirish oqimi, undan chiqqan yuza 0 Pa da chiqish oqimi, oqim boʻylab yotgan yuzalar esa sirpanadi. Juda kichik quti oqimni detal yonidan siqib oʻtkazadi va qarshilikni oshiradi. **Hisobiy yuza** — qarshilik va koʻtarish koeffitsiyentlari ishlatadigan yuza (boʻsh: oqim boʻylab koʻrinadigan detalning frontal yuzasi). Boshqa yoʻnalish tanlamasangiz, koʻtarish +Y boʻylab oʻlchanadi.

## Yechish va natijalarni oʻqish

**Yechish** tugmasini bosing. Yechim fonda ishlaydi, qadamlar soni, qoldiq va qoldiq grafigi bilan; **Toʻxtatish** uni tugatadi. U qoldiq (har bir qadamda tezlik maydoni qancha oʻzgarayotgani) maqsadli qiymatdan past boʻlib, bosim pasayishi yoki qarshilik barqarorlashganda toʻxtaydi. Agar avval qadamlar chegarasiga yetsa, panelda qizil rangda **Yakunlanmadi** deyiladi: raqamlar oxirgi holat, barqaror javob emas.

- **Kesuvchi tekislik**: model orqali oʻtgan tekislikdagi tezlik yoki statik bosim; normalini (X, Y yoki Z) tanlang va siljitish uchun surgichni suring. Qiymatlarni koʻrish uchun kursorni ustiga olib boring.
- **Oqim chiziqlari**: kirishlardan (ichki) yoki kesuvchi tekislikdagi quti kirish oqimi uchi boʻylab taroqdan (tashqi).
- **Detal**: toʻliq, shaffof (ichidagi tekislikni koʻrish uchun), sirt bosimi yoki yashirin.
- **Jadval**: Reynolds soni, bosim pasayishi (kirishlardagi oʻrtacha statik bosim minus chiqishlardagi), har bir teshikning oqimi va oʻrtacha bosimi, detalga taʼsir etuvchi kuch, qarshilik va koʻtarish hamda ularning koeffitsiyentlari va hisobiy yuza (tashqi), massa balansi (kirish va chiqish oqimi solishtirilgan holda), mesh va yechuvchi.

## Turbulent oqim (tajribaviy)

**Oqim modeli › Turbulent (Spalart–Allmaras, tajribaviy)** vaqt boʻyicha oʻrtacha turbulent oqimni (barqaror RANS) yechadi: Spalart–Allmaras modeli har bir katakchada girdob qovushqoqligini beradi, devorlar yonidagi katakchalar esa yupqa qatlamni hal qilish oʻrniga Spalding devor qonunidan foydalanadi. U hamma joyda toʻliq turbulent (laminar sohalar va oʻtish yoʻq).

**U aniqlik tekshiruvlaridan oʻtmadi.** Har bir turbulent tadqiqotda panel, natijalar va jadval buni aytadi va ogohlantirishni yopib boʻlmaydi. Uni **sifat jihatidan oqim naqshlari** uchun ishlating — oqim qayerda ajraladi, aylanadi yoki tezlashadi — **loyihaviy raqamlar uchun emas**.

| Tekshiruv | Manba | Natija |
|---|---|---|
| Tekis kanal ishqalanishi, birinchi katakcha y⁺ 49 / 98 da | Dean korrelyatsiyasi | +3.3 % / +4.7 % |
| Devori hal qilingan kanal (y⁺ ≈ 3), Re_τ 180: hajmiy tezlik | Moser, Kim & Mansour DNS | −1 % |
| Tekis kanal, y⁺ 7–15 yoki 190–380 | Dean korrelyatsiyasi | +9 dan +22 % gacha |
| Kub katakchalar orqali quvur ishqalanishi, toʻliq rivojlangan, 10–30 katakcha kenglikda | Colebrook | 30 dan 34 % gacha yuqori |
| Orqaga qaragan pogʻona ortida qayta birikish, pogʻona balandligida 6–14 katakcha | Driver & Seegmiller, 6.26 pogʻona balandligi | 21 dan 39 % gacha qisqa |

Natijalar mayda katakchalar bilan faqat sekin yaxshilanadi. Yechimdan keyin jadvalda **birinchi katakcha y⁺** (devor katakchalari boʻyicha minimal, oʻrtacha va maksimal) koʻrsatiladi va tekshirilgan 1 dan 400 gacha boʻlgan diapazondan tashqarida ogohlantiradi; taxminan 30 dan 300 gacha moʻljallang. **Ishlash vaqti:** avtomatik katakchalar bir laptop yadrosida koʻpi bilan bir necha daqiqaga moslangan (panelda panjara va qadamlar chegarasi boʻyicha eng yomon holat koʻrsatiladi; kichik quvur 20 soniyadan kamda barqarorlashadi). Katakcha oʻlchamini ikki barobar kamaytirish taxminan 16 barobar koʻproq vaqt talab qiladi. Detalga taʼsir etuvchi kuchlar teshiklar yoki quti boʻyicha impuls balansidan olinadi.

**Hozirgacha ishlanmoqda:** devor katakchalari endi oʻzining kesish kuchlanishini devor qonuniga moslaydi, bu quvur va pogʻona xatolarini yuqoridagi raqamlargacha tushirdi va tekis kanal natijalarini oʻzgartirmadi. Bu loyihaviy raqamlar uchun yetarli emas edi. Keyingi qadam — devorlar yonida mayda katakchalar.

## Nimani koʻrsata oladi va nimani koʻrsata olmaydi

- **Laminar model** faqat laminar. Quvurlarda oqim Reynolds soni taxminan 2,000 dan 4,000 gacha boʻlganda turbulentga aylanadi; oʻtmas jismlar ortidagi iz taxminan 50 dan yuqorida girdoblarni tarqata boshlaydi. Panel shu nuqtalarda ogohlantiradi. Turbulent oqim uchun laminar natija bosim pasayishini kam baholaydi va qarshilikni notoʻgʻri hisoblaydi. Tajribaviy turbulent model (yuqorida) turbulent oqimni sifat jihatidan qamrab oladi; uning raqamlari hali ishonchli emas.
- **Usul:** lattice Boltzmann usuli (D3Q19, ikki relaksatsiya vaqtli toʻqnashuv) barqaror holatgacha hisoblanadi. Ichida biroz siqiladi; PartCraft zichlik oʻzgarishini bir necha foizgacha saqlaydi. Agar oqim katakchalar uchun juda tez boʻlsa, boshlashdan bosh tortadi va katakchalar qancha kichik boʻlishi kerakligini aytadi.
- **Tekshirilgan:** detal orqali quvurdagi Hagen–Poiseuille oqimi (bosim gradiyenti 20 katakcha kenglikda 1 % ichida), Ghia va boshqalarning qopqoq bilan harakatlanuvchi boʻshligʻi (qopqoq tezligining 0.75 % ichida) va Schäfer–Turek silindr benchmarki (qarshilik diametrga 10 katakchada 1 % ichida).
- Modellashtirilmagan: issiqlik almashinuvi, loyihaviy aniqlikdagi turbulentlik (turbulent model tajribaviy), erkin sirtlar, kavitatsiya, gravitatsiya, harakatlanuvchi qismlar, Nyuton boʻlmagan suyuqliklar, gʻadir-budur devorlar. Laboratoriya versiyasi: muhim natijalarni boshqa usulda tekshiring.
