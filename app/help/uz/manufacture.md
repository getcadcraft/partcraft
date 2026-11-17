---
title: Asbob yoʻllari va G-code yaratish (Ishlab chiqarish)
summary: Zagotovka va ish koordinatasini sozlang, asboblarni tanlang, yuzalarni tanlab yuza, oyma, kontur, teshik burgʻilash va faska amallarini qoʻshing, butun modelni 3D da yakunlang (parallel, scallop), zagotovkani model bilan solishtirib oʻyilishlar va ishlov vaqtini simulyatsiya qiling va uchta tayyor postprotsessordan yoki oʻzingiz tahrirlagan postdan G-code yuklab oling.
keywords: aniq STEP, ishlab chiqarish uchun step, ish koordinatalari, CAM uzatish, parallel, scallop, 3D pardozlash, pardozlash, sharsimon uchli, asboblar kutubxonasi, amallarni tahrirlash, postprotsessor, moslashuvchan, moslashuvchan tozalash, doimiy ishtirok, trochoidal, hsm, yuqori tezlikda ishlov berish, ishlab chiqarish, CAM, asbob yoʻli, G-code, NC, CNC, frezalash, oyma, kontur, profil, tekislash, burgʻilash, peck, G83, G81, G73, faska, zagotovka, ish ofseti, G54, GRBL, LinuxCNC, surish va tezliklar, simulyatsiya, oʻyilish, ishlov vaqti
from: beeb29aa
---

Ishlab chiqarish ish maydoni detalni 3 oʻqli frezalash stanogi uchun asbob yoʻllariga aylantiradi va ularni G-code sifatida yozadi. Koʻpchilik amallar **2.5 oʻqli**: asbob vertikal turadi, devorlar toʻgʻri pastga, tagliklar tekis kesiladi. **Parallel** va **Scallop** egri yuzalarni 3D da pardozlaydi (qarang: [3D pardozlash](topic:finish-3d)); asbob baribir vertikal turadi (uch oʻq, egilmasdan). U detalga mesh yadrosi bergan nomlangan yuzalar bilan ishlaydi (qarang: [Mesh yadrosi](topic:solid-kernels)).

Laboratoriya versiyasi: har bir dasturni boshqaruvchining oʻz simulyatorida tekshiring va avval zagotovka ustida havoda ishga tushiring.

## Sozlash

1. Ish maydoni almashtirgichida **Ishlab chiqarish** ni tanlang, soʻng {{ui:Yangi sozlash}}.
2. **Sozlash** yorligʻida tanlang:
   - **Asbob oʻqi (+Z)**: asbob detalga qaysi yoʻnalishda qaraydi. Standart boʻlib dunyo +Y (PartCraft ning yuqorisi); shunda stanok X si dunyo X i va stanok Y si dunyo −Z boʻladi.
   - **Ish koordinatasi boshi (G54)**: zagotovka burchagi yoki markazi, yuqori yoki past, modelning yuqori markazi yoki model koordinata boshi.
   - **Zagotovka**: quti yoki silindr, yo model va ofsetlar (yon, yuqori, past) yoki qatʼiy oʻlcham.
   - **Material** (boshlangʻich surish va tezliklarni belgilaydi), **postprotsessor** (boshqaruvchi), stanokning shpindel tezligining maksimumi, tez harakat tezligi va asbobni almashtirish vaqti, sovutish suyuqligi va dastur raqami.

## Asboblar

**Asboblar** yorligʻida kutubxona joylashgan: tekis, sharsimon va yarim sharsimon uchli frezalar, burgʻilar, faska frezalar va yuza frezalar, har biri T raqami, diametri, tishlari va tish uzunligi bilan (qoʻllanadigan joyida burchak radiusi, uchi yoki faska burchagi bilan birga).

Mening asboblarim brauzerda saqlanishi va fayl sifatida kompyuterlar orasida koʻchirilishi mumkin: qarang: [Asboblar kutubxonasi](topic:tool-library).

Shpindel tezligi va surish materialdan olinadi: n = 1000 × kesish tezligi / (π × diametr), surish = n × tishlar × tish yuki (burgʻilar: n × aylanishga surish). Raqamlar eʼlon qilingan diapazonlardan olingan ehtiyotkor boshlangʻich qiymatlar, sizning stanokingiz uchun sozlanmagan; ularni bekor qilish uchun asbob ishlab chiqaruvchisining kesish tezligi, tish yuki, aylanish soni yoki surishini kiriting. Tezlik stanokning maksimumidan oshsa, u shu darajada ushlanadi va surish unga ergashadi, tish yukini saqlaydi.

## Amallar qoʻshish

Har bir asboblar paneli tugmasi amal qoʻshadi va geometriya kerak boʻlsa, tanlashni boshlaydi: koʻrinishda yuzalar yoki qirralarni bosing (bittasini olib tashlash uchun yana bosing), soʻng {{ui:Tanlashni tugatish}} yoki {{key:Esc}}.

| Amal | Tanlash | Nima qiladi |
|---|---|---|
| {{ui:Yuza}} | hech narsa | Zagotovka boʻylab butun, uning chetlaridan oʻtib, model yuqorisigacha zigzag oʻtishlar |
| {{ui:Oyma}} | tekis taglik yuzasi, dumaloq teshik yoki yopiq qirralar zanjiri | Sohani har bir pogʻonada ichkaridan tashqariga ofset oʻtishlari bilan tozalaydi; orollar (taglik ichida koʻtarilgan yuzalar) qoldiriladi; hamma tomondan ochiq taglik (tashqarida undan baland narsa yoʻq) zagotovka chetigacha tozalanadi |
| {{ui:Moslashuvchan}} | Oyma bilan bir xil | Bir xil sohani shunday oʻtishlarda tozalaydi, ularning har biri belgilangan kenglikni kesadi (**Ilashish**, diametrning kasr qismi), shuning uchun kesgich hatto burchaklarda ham toʻliq kenglikdagi yoʻlakni olmaydi; spiral boʻylab kiradi va har bir sathda devorlarni pardozlaydi. Tor kesimlar chuqurroq pogʻona va yuqoriroq surishga imkon beradi |
| {{ui:Kontur}} | tekis yuza (uning konturi), dumaloq yuza yoki qirralar | Konturni asbob radiusiga ofset qilib, tashqi yoki ichki tomonda, kirish va chiqish yoylari hamda ixtiyoriy ushlagichlar bilan kuzatadi |
| {{ui:Burgʻilash}} | teshiklar (teshik devorini yoki chetini bosing) | Har bir teshikni tayyor sikl bilan burgʻilaydi: peck (G83), burgʻilash (G81) yoki talaşni uzish (G73); yoki shu oʻlchamdagi har bir teshikni burgʻilash uchun diametr bering |
| {{ui:Faska}} | yuzaning konturi yoki qirralar | Qirra boʻylab faska frezani yuritadi, shunda u siz belgilagan kenglikni kesadi |
| {{ui:Parallel}} | hech narsa (butun model) | Istalgan burchak ostida parallel chiziqlar boʻylab 3D pardozlash, sharsimon, yarim sharsimon yoki tekis uchli frezada yuzani kuzatadi. Qarang: [3D pardozlash](topic:finish-3d) |
| {{ui:Scallop}} | hech narsa (butun model) | Yuza boʻylab belgilangan masofada oʻtishlar bilan 3D pardozlash, shunda ular orasidagi qirra siz soʻragan balandlikda boʻladi |

Oʻzgartirish uchun roʻyxatdan amalni tanlang: uning asbobi, balandliklari (boʻsh joy, qaytish, surish balandligi, yuqori, past), pogʻona chuqurligi, surish qadami, qoldiriladigan zagotovka, pardozlash oʻtishi, kirish (spiral, pandus yoki sanchish), tegirmon frezalash, ushlagichlar yoki sikl. {{ui:Yuqoriga}} va {{ui:Pastga}} tartibni oʻzgartiradi, {{ui:Vaqtincha oʻchirish}} uni chiqarib tashlaydi, {{ui:Oʻchirish}} uni oʻchiradi. Hammasi ortga qaytarish tarixida va detal faylida saqlanadi.

Oymaning surish qadami asbob diametrining yarmidan oshmaydi, shuning uchun uning tagligidagi har bir nuqta bitta oʻtishdan asbob radiusi ichida boʻladi. Ichki burchaklar asbob radiusini saqlaydi.

**Moslashuvchan tozalash** kesgichning ilashishini bitta qiymat yaqinida ushlab turadi. Diametrning 0.15 ilashishi taxminan 46° ilashish burchagiga teng: materialdagi kesgich qirrasi yoyi. Aksincha, ofset oyma birinchi oʻtishda toʻliq kenglikda kesadi va har bir ichki burchakda yana koʻproq aylanadi. Oʻtishlar orasida asbob kesilmagan havo boʻylab harakatlanganda pastda qoladi, boshqa joyda esa kesilmagan havoda koʻtariladi va tushadi. Oʻtishlar sohada nozik toʻr ustida hisoblanadi (katakchalar asbob radiusining taxminan oʻn ikkidan biri), shuning uchun ilashish belgilangandan bir katakcha kengroq boʻlishi mumkin; devorlar aniq pardozlanadi. Katta ochiq soha koʻp qisqa harakatli uzun dastur hosil qiladi.

## Simulyatsiya

Asbob yoʻllari har bir oʻzgarishdan keyin qayta yaratiladi (detal ham). {{ui:Simulyatsiya}} shuningdek butun dasturdan keyin qolgan zagotovkani koʻrsatadi. Panelda koʻrsatiladi:

- **Ishlov vaqti**: surish harakatlari oʻz surishi bilan, tez harakatlar sozlashdagi tez harakat tezligida toʻgʻri chiziqlar sifatida, va asbob almashtirish vaqti qoʻshilgan. Haqiqiy stanoklar tezlanadi, shuning uchun koʻproq vaqt oladi.
- **Oʻyilishlar**: asbob detal yuzasidan 0.02 mm dan chuqurroq oʻtgan joylar. Qizil belgilar ularni koʻrinishda koʻrsatadi.
- **Detalda qolgan zagotovka**.

Zagotovka yuqorining balandlik xaritasi (Z-xarita), shuning uchun u ostki kesmalarni koʻrsata olmaydi. Asbobni dastur boʻylab harakatlantirish uchun **Ijro** ni suring. Koʻrinishda surish harakatlari yaxlit, tez harakatlar esa shtrixli, har bir amal uchun bitta rang.

**Simulyatsiya qilingan zagotovkani koʻrsatish** yoqilgan boʻlsa, zagotovka modelga nisbatan katakma-katak boʻyaladi: modelda boʻlgan joyda **yashil** (0.02 mm ichida), asbob modelga kirgan joyda **qizil**, va modelda zagotovka qolgan joyda ingichka qatlam uchun **sariq**, koʻproq uchun **toʻq sariq**, 1 mm yoki undan koʻp boʻlganda kesilmagan zagotovkaning **kulrang** rangiga oʻtadi. Ranglar har bir oʻzgarishda panel raqamlari bilan bir xil balandlik xaritasidan qayta yaratiladi, shuning uchun yashil va qizil **Oʻyilishlar** qatoriga mos keladi. Faska ataylab modelga kiradi va qirrasi boʻylab qizil koʻrsatadi.

## G-code ni chiqarish

**Postprotsessor** ostida boshqaruvchini tanlang va {{ui:G-kodni yuklab olish}} ni bosing (yoki asboblar panelidagi {{ui:Postprotsessor}}):

| Boshqaruvchi | Fayl | Izohlar |
|---|---|---|
| Fanuc uslubidagi ISO | .nc | %, O raqami, qator raqamlari, T M6 G43 H bilan, tayyor sikllar |
| GRBL | .nc | Asbob almashtirgich va tayyor sikllar yoʻq: asbob almashtirish M0 bilan toʻxtaydi, burgʻilash oddiy harakatlar sifatida yoziladi |
| LinuxCNC | .ngc | T M6 G43 H bilan, tayyor sikllar, M2 |
| Oʻzingizniki | istalgan | Oʻzingiz yozgan yoki oʻzgartirgan postprotsessor: {{ui:Postni tahrirlash…}}, {{ui:Yangi post…}}, {{ui:Post faylini import qilish…}} |

Har bir fayl dastur, zagotovka, ish ofseti va asboblar haqidagi izohlar bilan boshlanadi. Koordinatalar millimetrda, 3 ta oʻnlik raqam bilan. {{ui:Asbob yoʻli CSV}} va {{ui:Asbob yoʻli JSON}} harakatlarning oʻzini eksport qiladi.

**Kesishdan oldin chiqishni stanokingizning oʻz simulyatorida tekshiring va avval zagotovka ustida havoda ishga tushiring.** Oʻrnatilgan uchta postprotsessor boshqaruvchilarning hujjatlashtirilgan xatti-harakatiga mos keladigan boshlangʻich nuqtalar; ular hech qanday aniq stanokda isbotlanmagan. Oʻzgartirgan postprotsessor sizning isbotingizdir. Qanday yozish: [Postprotsessorlar](topic:post-processors).

## Sex uchun aniq STEP

**Amallar** yorligʻidagi G-code tugmalari ostida {{ui:Aniq STEP (ish koordinatalari)}} `<part>-work.step` ni yuklab oladi: detal aniq yaxlit jism sifatida (teshiklar va chiqiqlar uchun haqiqiy silindrlar, qirralari uchun haqiqiy aylanalar), koordinata boshi shu sozlashning ish koordinata boshida va Z asbob oʻqi boʻylab. Bular G-code ishlatadigan koordinatalar, shuning uchun sexning oʻz CAM dasturi yoki tekshiruvchisi modelni dastur bilan koʻchirmasdan tekislaydi. Faylda faqat detal boʻladi, zagotovka yoki asbob yoʻllari yoʻq.

{{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} xuddi shu jismni detalning oʻz holatida (Z yuqoriga) yozadi: qarang: [Chop etish, STEP va DXF uchun eksport](topic:export-files#for-other-cad-programs-step).

## Cheklovlar

- Oymalar, konturlar, burgʻilash va faskalar 2.5 oʻqli. Egri yuzalarni 3D da pardozlash mumkin ([parallel va scallop](topic:finish-3d)), lekin 3D da qoʻpol ishlov berib boʻlmaydi (konus pardozlamaguncha pogʻonalar bilan qoladi) va qoldiq ishlov berish yoʻq. Moslashuvchan tozalash 2D (tekis tagliklar).
- Faqat uch oʻq: egilish yoʻq, tokarlik yoʻq, tekshirish yoʻq.
- Ushlagichlar va dastalar toʻqnashuvga tekshirilmaydi; kesish tish uzunligidan chuqurroq boʻlsa, ogohlantirish chiqadi.
- Surishlar va tezliklar boshlangʻich qiymatlar. Postprotsessor tahrirlashingiz mumkin boʻlgan matn, lekin u faqat harakatlar qanday yozilishini hal qiladi; u asbob yoʻlini oʻzgartira olmaydi, oʻq qoʻsha olmaydi va sizning stanokingizni bilmaydi ([Postprotsessorlar](topic:post-processors) nima qila olmasligini sanab beradi).

## Dasturni stanokka yuborish

Ish stoli CadCraft Studio da, Studio da sozlangan stanok bilan, **Stanokka yuborish…** **G-kodni yuklab olish** yonida paydo boʻladi va xuddi shu dasturni tarmogʻingizdagi stanokka yuklaydi. U hech qachon PartCraft dan ishga tushirilmaydi: hamma narsa tayyor boʻlganda stanokning oʻzida ishga tushiring. Brauzerda tugma koʻrsatilmaydi (veb sahifa tarmogʻingizdagi stanokka yetib bora olmaydi): oʻrniga dasturni yuklab oling.
