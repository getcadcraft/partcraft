---
title: Ikki oʻlchamda magnit maydonlar (qoʻllanma)
summary: Tahlil kutubxonasi yordamida elektromagnit yoki doimiy magnitning magnit maydonini hisoblang: misollarni ishga tushiring, magnit oqim zichligi, tirqish maydoni, induktivlik va tortishish kuchini oʻqing, loyihani oʻzgartiring va oʻz gʻaltak, magnit va temir modelingizni yarating.
keywords: magnit, magnitostatika, magnit maydon, magnit oqim zichligi, tesla, elektromagnit, solenoid, gʻaltak, amper-oʻram, temir oʻzak, havo tirqishi, magnit oʻtkazuvchanlik, induktivlik, magnit kuchi, reluktans, magnit zanjir, vektor potensiali, elektromagnetika, chekli elementlar, fem, motor, aktuator, transformator, magnitostatic2d, doimiy magnit, neodim, ndfeb, ferrit, qoldiq magnitlanish, ish nuqtasi, qaytish, oqish, ushlab turuvchi magnit
from: 215f6601
---

PartCraft ning tahlil kutubxonasi gʻaltak va temirning magnit maydonini 2-D da hisoblashi mumkin: uzun va butun uzunligi boʻylab bir xil boʻlgan narsaning kesimi, masalan elektromagnit, transformator oʻzagi, shina yoki motor kesimi. Ushbu qoʻllanma kutubxonaning elektromagnit misolini ishga tushiradi, uning nima deganini oʻqiydi, uni oʻzgartiradi, oʻz shaklingizni qanday modellashtirishni koʻrsatadi va soʻng doimiy magnit qoʻshadi.

U Skript ish maydonidan va [tahlil kutubxonasidan](topic:craftscript-library) foydalanadi. Uni kuzatish uchun CraftScript tilini bilish shart emas; misol har bir qatorning nima qilishini aytadi.

## Modellashtiriladigan narsa

Tashqi oʻlchami 100 × 80 mm, qalinligi 20 mm boʻlgan C shaklidagi temir oʻzak, oʻng oyogʻida 2 mm havo tirqishi bilan. Chap oyogʻiga 10 A tok oqadigan 100 oʻram gʻaltak oʻralgan (1000 amper-oʻram). Hamma narsa ekrandan chiqish yoʻnalishida uzun, shuning uchun javoblar **chuqurlikning har metri uchun**: haqiqiy magnit uchun haqiqiy chuqurlikka koʻpaytiring.

Kutubxonaning `magnetostatic2d` funksiyasi magnit atrofidagi havo qutisida 1 mm kvadratlar toʻrida magnit vektor potensialini yechadi, soʻng undan magnit oqim zichligi **B** ni (teslada) hisoblaydi.

## Misolni ishga tushirish

1. Asboblar panelining chap tomonidagi **Ish maydoni** qutisida **Skript** ni tanlang.
2. Skript panelidagi **Kutubxona** yorligʻini oching, soʻng **Misollar** › **Elektromagnit: maydon, tirqish, induktivlik**.
3. {{ui:Ochish (faqat oʻqish)}} ni bosing, soʻng {{key:F5}} ni bosing.

Bir-ikki soniyada kanvada magnit oqim zichligi koʻrinadi va konsol chop etadi:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Kanvaning pastidagi grafik oʻzakning oʻrta chizigʻi boʻylab chapdan oʻngga vertikal magnit oqim zichligi B_y ni koʻrsatadi: chap oyoqda taxminan −0.55 T (oqim pastga oqadi), derazada deyarli hech narsa, oʻng oyoqda va tirqish boʻylab +0.55 T (oqim yuqoriga qaytadi). Bir xil oqim temir va tirqish orqali oʻtadi, shuning uchun ikki oyoq va tirqish deyarli bir xil qiymatni koʻrsatadi.

## Natijalarni oʻqish

- **Tirqishdagi maydon** 0.543 T. Qoʻlda hisoblashda oʻzak bitta magnit zanjir deb olinadi, B = μ0 N I / (g + l / μr), bu yerda g tirqish, l temir boʻylab yoʻlning uzunligi va μr temirning nisbiy magnit oʻtkazuvchanligi; u 0.552 T beradi. Maydon qoʻlda hisoblashdan biroz past, chunki oqim tirqish atrofida kengayadi (chetga oqish) va bir qismi derazani kesib oʻtib qisqa yoʻl topadi (oqish). Kichikroq tirqish yoki nozikroq toʻr bilan ikkalasi yaqinlashadi.
- **Induktivlik** 100 oʻramli gʻaltak uchun chuqurlikning har metriga 0.154 H, maydonda toʻplangan energiyadan. Zanjir formulasi undan kamroq (0.110 H/m) beradi, chunki u faqat tirqish orqali oqimni hisoblaydi, undan oʻtib ketadigan oqimni emas.
- **Tortishish kuchi**, tirqishni yopadigan, tirqish yuzi w kenglikda boʻlganda B² w / (2 μ0): metriga taxminan 2300 N, yoki 50 mm chuqurlikdagi magnit uchun 117 N.
- **Eng yuqori qiymat** 1.97 T derazaning ichki burchaklarida, oqim keskin burilgan joyda. Model temirni chiziqli deb hisoblaydi; haqiqiy elektr poʻlat taxminan 1.5 dan 2 T gacha toʻyinadi, shuning uchun undan yuqori qiymatlarni javob emas, ogohlantirish deb qabul qiling.

:::note
Kutubxonaning oʻz sinovlari bu misolni ishga tushiradi va PartCraft ga har bir oʻzgarishda tirqish maydonini magnit zanjir formulasi bilan tekshiradi. Usuli, manbalari va boshqa tekshiruvlari (uzun solenoid, temir oʻzakli solenoid) `magnetostatic2d` sarlavhasida: uni kutubxonada bosing.
:::

## Loyihani oʻzgartirish

1. Faqat oʻqish skriptining ustidagi {{ui:Nusxasini yaratish}} ni bosing. Nusxa detal bilan birga saqlanadi.
2. Yuqoridagi qiymatlardan birini oʻzgartiring va yana {{key:F5}} ni bosing. Sinab koʻring:
   - `g = 0.001;` — tirqish yarmi: tirqish maydoni deyarli ikki barobar ortadi, tortishish kuchi ham shunday (u B² bilan oʻzgaradi).
   - `mur = 200;` — yomonroq oʻzak: amper-oʻramlarning koʻproq qismi temirda sarflanadi.
   - `N = 200;` — oʻramlar ikki barobar: maydon ikki barobar, induktivlik toʻrt barobar.
   - `h = 0.0005;` — nozikroq toʻr: javoblar yaqinroq, vaqt taxminan toʻrt barobar.

Har bir ishga tushirish kanvani almashtiradi. Skript yaratgan oʻzgaruvchilar (masalan `Bgap`, `L`, `F`) oʻz hisoblaringiz uchun **Oʻzgaruvchilar** roʻyxatida qoladi.

## Oʻz shaklingizni modellashtirish

Misol hamma narsani uchta roʻyxatdan quradi, har bir toʻr kvadratiga bitta qiymat, ularni toʻr boʻylab toʻgʻri chiziqlar bilan chizilgan har qanday shakl uchun tuzish mumkin:

- **Temir qayerda:** `iron` oʻzak ichidagi kvadratlar uchun rost. Misol uni toʻgʻri toʻrtburchaklardan quradi: `frame & ~window & ~gap` degani: "ramkada, derazada emas, tirqishda emas".
- **Magnit oʻtkazuvchanlik:** `1 + (mur - 1) * iron` havoda 1, temirda `mur`. Bir nechta materialga xuddi shunday usulda oʻz qiymatlarini bering.
- **Tok:** `J` kvadrat metrga amperlarda tok zichligi, ekrandan chiqsa musbat, kirsa manfiy. Gʻaltakning ikki tomoni qarama-qarshi ishorali boʻladi; misol `J0` ni shunday hisoblaydiki, bir tomon N I ni olib yursin.

Soʻng `r = magnetostatic2d(m, permeability, J)` uni yechadi. `r.B` har bir kvadratdagi magnit oqim zichligi (ikki ustun, x va y), `r.Bmag` uning kattaligi, `r.energy` esa metriga toʻplangan energiya. `plot(x, y)` chiziq chizadi.

Kutubxona metrda ishlaydi, koʻrinish esa millimetrda, shuning uchun maydon oʻz holicha chizilsa, u ming marta kichik boʻlib koʻrinardi. Misol uni toʻrning millimetrdagi nusxasida koʻrsatadi (`mm = quadGrid(…)`, soʻng `show(field(mm, …))`): shu ikki qatorni nusxalang.

Standart holatda qutining chetlari maydonni ichida ushlab turadi: hech qanday oqim undan chiqmaydi. Qutini magnitdan kamida ikki-uch barobar katta qiling, shunda bu maydonni siqib qoʻymaydi. Simmetrik magnit uchun uning yarmini modellashtirishingiz mumkin: `magnetostatic2d` sarlavhasida simmetriya chizigʻida qaysi chegara shartini ishlatish kerakligi aytilgan.

## Doimiy magnitlar

Ikkinchi misol, **Misollar** › **Temir oʻzakdagi doimiy magnit: ish nuqtasi, oqish, tortish**, xuddi shu oʻzak, faqat gʻaltak olib tashlangan va chap oyoqning 10 mm boʻlagi yuqoriga magnitlangan magnit bilan almashtirilgan. Uni {{key:F5}} bilan ishga tushiring. U chop etadi:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Ish nuqtasi.** Magnit **qoldiq magnitlanish** Br (temir bilan qisqa tutashtirilganda saqlab qoladigan maydon: sinterlangan NdFeB magnit uchun taxminan 1.2 T, ferrit uchun 0.4 T) va qaytish magnit oʻtkazuvchanligi (taxminan 1.05 va 1.1) bilan tavsiflanadi. Tirqish ochilishi uni qaytish chizigʻi boʻylab pastga suradi: bu yerda 1.04 T gacha, uning ichida H esa B ga qarama-qarshi yoʻnalgan holda.
- **Oqish.** Oqishsiz qoʻlda hisoblash tirqishda 0.97 T beradi; model 0.68 T beradi. Magnit oqimini qisqa uzunlikda kuchli turtki bilan haydaydi, shuning uchun uning koʻp qismi tirqish orqali emas, balki toʻgʻridan-toʻgʻri derazani kesib qaytadi. Oqish koeffitsiyenti qancha ekanini aytadi: bu yerda 1.53. Yopiq ushlagich uchun `g = 0;` qoʻying: keyin magnit qoʻlda hisoblashdan yarim foizdan kam farq bilan ishlaydi.
- **Oʻz modelingizdagi magnitlar.** `magnetostatic2d` ga magnitlarni `struct('Br', Br)` sifatida bering, bu yerda `Br` har bir toʻr kvadratiga bitta qator, x va y boʻylab teslada qoldiq magnitlanish bilan (magnitlardan tashqarida nol), va magnit kvadratlariga magnit oʻtkazuvchanlik roʻyxatida qaytish magnit oʻtkazuvchanligini bering:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % mag rost boʻlgan kvadratlarda yuqoriga 1.2 T
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Burchak ostida magnitlangan magnit uchun ikki ustunga `Br·cos(angle)` va `Br·sin(angle)` qoʻying; tashqariga magnitlangan halqa uchun har bir kvadratning yoʻnalishini uning joylashuvidan hisoblang. `r.H` har bir kvadratdagi H maydon kuchini beradi.

Model magnitni qanchalik kuchli haydalmasin, uni toʻgʻri qaytish chizigʻida ushlab turadi. Haqiqiy magnit tizza nuqtasidan oʻtib ketsa (katta tirqish, kuchli gʻaltak yoki issiqlik tufayli) kuchining bir qismini abadiy yoʻqotadi; ish nuqtasini navi va harorati uchun ishlab chiqaruvchi egri chizigʻi bilan tekshiring.

Kutubxona sinovlari magnitlarni ikki qoʻlda hisoblash natijasi bilan tekshiradi: ochiq havodagi dumaloq magnit (ichida B = Br / (1 + μr)) va temir ushlagich bilan yopilgan magnit (magnit zanjir), ikkalasi 1 % ichida.

## Hali nima qilmaydi

- **Toʻyinish.** Temir chiziqli: tokni ikki barobar oshiring, maydon ikki barobar oshadi, chegarasiz.
- **Magnitsizlanish.** Magnitlar toʻgʻri qaytish chizigʻida qoladi (yuqoriga qarang).
- **Girdob toklari** va **yoʻqotishlar** (temir yoʻqotishi, mis yoʻqotishi).
- **Harakatlanuvchi qismlar va moment.** Statorda aylanadigan rotor yoʻq, burchakka qarshi moment yoʻq.
- **Dumaloq shakllar.** Toʻr teng kvadratlardan iborat, shuning uchun egri konturlar pogʻonali chiqadi.
- **3-D.** Hamma narsa uzun narsaning kesimi.

Motor loyihalash (aylanuvchi rotor, 2-D da moment va yoʻqotishlar) keyingi versiya uchun koʻrib chiqilmoqda. Qarang: [Hali qurilmagan](topic:not-built-yet).
