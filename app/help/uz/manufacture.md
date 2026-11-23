---
title: Asbob yoʻllari va G-code yaratish (Ishlab chiqarish)
summary: Zaxira va ishchi boshlangʻich nuqtani sozlang, asboblarni tanlang, yuzlar, oyma, kontur, teshik va faska operatsiyalarini yuzlarni tanlash orqali qoʻshing, modelni 3D da butunlay pardozlang (parallel, scallop), zaxirani modelga qarshi simulyatsiya qilib ortiqcha kesish va sikl vaqtini tekshiring hamda uchta oʻrnatilgan postdan yoki oʻzingiz tahrirlagan postdan G-code yuklab oling.
keywords: aniq STEP, sex uchun STEP, ishchi koordinatalari, CAM uzatish, parallel, scallop, 3D pardozlash, pardozlash, shar uchi, asboblar kutubxonasi, postni tahrirlash, maxsus post, post muharriri, moslashuvchan, moslashuvchan tozalash, doimiy ilashish, trokoidal, hsm, yuqori tezlikda ishlov, ishlab chiqarish, CAM, asbob yoʻli, G-code, NC, CNC, frezalash, oyma, kontur, profil, yuzalash, teshik, peck, G83, G81, G73, faska, zaxira, ishchi siljish, G54, postprotsessor, GRBL, LinuxCNC, berilish va tezliklar, simulyatsiya, ortiqcha kesish, sikl vaqti
from: f8a03be8
---

Ishlab chiqarish ish maydoni detalni asbob yoʻllariga aylantiradi va ularni G-code sifatida yozadi. Aksariyat operatsiyalar **2.5 oʻqli** frezalash: asbob vertikal turadi, devorlar toʻgʻri pastga, tagliklar tekis kesiladi. **3D qoʻpol** va **Qoldiq** egri detallarni 3D da tozalaydi ([3D qoʻpol va qoldiq ishlov berish](topic:rough-3d)); **Parallel** va **Scallop** ularni pardozlaydi ([3D pardozlash](topic:finish-3d)). Aylanma oʻqli stanokda har qanday operatsiyada asbob egilishi mumkin, ikkita operatsiya esa kesish paytida aylanma oʻqlarni harakatlantiradi ([4 va 5 oʻqli ishlov berish](topic:multi-axis)). Tokarlik uchun operatsiyalar bor ([Tokarlik](topic:turning)), tegish zondi uchun ham ([Zondlash](topic:probing)). U detalga toʻr yadrosi bergan nomlangan yuzlar bilan ishlaydi (qarang: [Toʻr yadrosi](topic:solid-kernels)).

Laboratoriya versiyasi: har bir dasturni boshqaruvingizning oʻz simulyatorida tekshiring va avval uni zaxira ustida havoda ishga tushiring.

## Sozlash

1. Ish maydoni almashtirgichida **Ishlab chiqarish** ni tanlang, soʻng {{ui:Yangi sozlash}} tugmasini bosing.
2. **Sozlash** yorligʻida tanlang:
   - **Asbob oʻqi (+Z)**: asbob detalga qaysi tomonga qaratilgan. Standart: dunyo +Y (PartCraft yuqorisi); bunda stanok X dunyo X ga, stanok Y esa dunyo −Z ga toʻgʻri keladi.
   - **Ishchi boshlangʻich nuqtasi (G54)**: zaxira burchagi yoki markazi, yuqori yoki past, modelning yuqori markazi yoki model boshlangʻich nuqtasi.
   - **Zaxira**: quti yoki silindr, modelning oʻzi va qoʻshimchalari bilan (yon tomonlar, yuqori, past) yoki belgilangan oʻlcham.
   - **Material** (boshlangʻich berilish va tezliklarni belgilaydi), **post** (boshqaruv), stanokning shpindel tezligi maksimumi, tez yurish tezligi va asbobni almashtirish vaqti, sovutish suyuqligi va dastur raqami.

## Asboblar

**Asboblar** yorligʻida kutubxona: yassi, shar va yarim-dumaloq uchli frezalar, burgʻular, faska frezalari va yuza frezalari; har biri T raqami, diametri, tishlari va tish uzunligi bilan (qoʻllanadigan joylarda burchak radiusi, uchi yoki faska burchagi bilan birga).

Mening asboblarim brauzerda saqlanishi va fayl sifatida kompyuterlar orasida koʻchirilishi mumkin: qarang: [Asboblar kutubxonasi](topic:tool-library).

Shpindel tezligi va berilish materialdan olinadi: n = 1000 × kesish tezligi / (π × diametr), berilish = n × tishlar × tish yuki (burgʻular: n × aylanishga berilish). Raqamlar eʼlon qilingan diapazonlardan olingan muhofazakor boshlangʻich qiymatlar, sizning stanokingizga sozlanmagan; ularni bekor qilish uchun asbob ishlab chiqaruvchingizning kesish tezligi, tish yuki, rpm yoki berilishini kiriting. Tezlik stanokning maksimumidan oshsa, u shu darajada ushlanadi va berilish unga ergashadi, tish yukini saqlab qolgan holda.

## Operatsiyalar qoʻshish

Har bir asboblar paneli tugmasi operatsiya qoʻshadi va geometriya kerak boʻlgan joyda tanlashni boshlaydi: koʻrinishda yuzlar yoki qirralarni bosing (bittasini tashlash uchun yana bosing), soʻng {{ui:Tanlashni tugatish}} yoki {{key:Esc}}.

| Operatsiya | Tanlash | Nima qiladi |
|---|---|---|
| {{ui:Yuza}} | hech narsa | Butun zaxira boʻylab, uning chetlaridan oʻtib, modelning yuqorisigacha zigzag oʻtishlar |
| {{ui:Oyma}} | yassi tubi yuzi, dumaloq teshik yoki yopiq qirralar zanjiri | Hududni har bir qadamda ichkaridan tashqariga siljitilgan oʻtishlar bilan tozalaydi; orollar (tubining ichida tik turgan yuzlar) qoldiriladi; atrofi ochiq tub (tashqarida undan baland hech narsa yoʻq) zaxira chetigacha tozalanadi |
| {{ui:Moslashuvchan}} | Oyma bilan bir xil | Xuddi shu hududni, har biri belgilangan kenglikni kesadigan oʻtishlar bilan tozalaydi (**Ilashish**, diametrning bir boʻlagi), shunda frez hatto burchaklarda ham toʻliq kenglikdagi ariqchani olmaydi; spiral boʻylab kiradi va har bir sathda devorlarni pardozlaydi. Tor kesishlar chuqurroq qadam va yuqoriroq berilishga imkon beradi |
| {{ui:Kontur}} | yassi yuz (uning konturi), dumaloq yuz yoki qirralar | Asbob radiusiga siljitilgan kontur boʻylab, tashqaridan yoki ichkaridan, kirish va chiqish yoylari hamda ixtiyoriy ushlab turuvchi boʻlaklar bilan boradi |
| {{ui:Burgʻilash}} | teshiklar (teshik devorini yoki chetini bosing) | Har bir teshikni tayyor sikl bilan burgʻilaydi: peck (G83), burgʻilash (G81) yoki talaşni sindirish (G73); yoki shu oʻlchamdagi barcha teshiklarni burgʻilash uchun diametr bering |
| {{ui:Faska}} | yuz konturi yoki qirralar | Qirra boʻylab faska frezasini yuritadi, shunda u siz belgilagan kenglikni kesadi |
| {{ui:Parallel}} | hech narsa (butun model) | Istalgan burchakdagi parallel chiziqlar boʻylab 3D pardozlash, shar, yarim-dumaloq yoki yassi uchli freza bilan sirtga ergashadi. Qarang: [3D pardozlash](topic:finish-3d) |
| {{ui:Scallop}} | hech narsa (butun model) | Sirt boʻylab belgilangan masofadagi oʻtishlar bilan 3D pardozlash, shunda ular orasidagi qirra siz soʻragan balandlikda boʻladi |

Roʻyxatdan operatsiyani tanlab, uning asbobini, balandliklarini (xavfsiz masofa, qaytish, berilish balandligi, yuqori, past), qadamini, qadam masofasini, qoldiriladigan zaxirani, pardozlash oʻtishini, kirish usulini (spiral, qiyalik yoki tik kirish), Climb frezalashni, ushlab turuvchi boʻlaklarni yoki siklni oʻzgartiring. {{ui:Yuqoriga}} va {{ui:Pastga}} tartibni oʻzgartiradi, {{ui:Vaqtincha oʻchirish}} operatsiyani chiqarib tashlaydi, {{ui:Oʻchirish}} uni olib tashlaydi. Hammasi bekor qilish tarixida va detal faylida saqlanadi.

Oymaning qadam masofasi asbob diametrining yarmidan oshmaydi, shunda tubining har bir nuqtasi oʻtishdan bitta asbob radiusi ichida boʻladi. Ichki burchaklarda asbob radiusi saqlanadi.

**Moslashuvchan tozalash** frezaning ilashishini bitta qiymat yaqinida ushlab turadi. Diametrning 0.15 qismidagi ilashish taxminan 46° ilashish burchagiga teng: materialdagi frez qirrasining yoyi. Aksincha, siljitilgan oyma birinchi oʻtishda toʻliq kenglikda kesadi va har bir ichki burchakda yana koʻproq oʻraladi. Oʻtishlar orasida asbob kesilgan boʻshliqda oʻtayotganda pastda qoladi, boshqa joyda esa kesilmagan boʻshliqda koʻtarilib, qaytadan tushadi. Oʻtishlar hudud ustidagi mayda toʻrda hisoblanadi (katakchalar asbob radiusining taxminan oʻn ikkidan biri), shuning uchun ilashish belgilangandan taxminan bir katakcha kengroq boʻlishi mumkin; devorlar aniq pardozlanadi. Katta ochiq hudud koʻp qisqa harakatli uzun dastur hosil qiladi.

## Simulyatsiya

Asbob yoʻllari har bir oʻzgarishdan keyin qayta yaratiladi (detalniki ham). {{ui:Simulyatsiya}} shuningdek butun dasturdan keyin qolgan zaxirani koʻrsatadi. Panelda:

- **Sikl vaqti**: berilish harakatlari oʻz berilishida, tez harakatlar sozlashning tez yurish tezligida toʻgʻri chiziqlar sifatida, asbobni almashtirish vaqti bilan birga. Haqiqiy stanoklar tezlanadi, shuning uchun koʻproq vaqt oladi.
- **Ortiqcha kesish**: asbob detal sirtidan 0.02 mm dan chuqurroq ketgan joylar. Qizil belgilar ularni koʻrinishda koʻrsatadi.
- **Detalda qolgan zaxira**.

Zaxira yuqoridan balandlik xaritasi (Z-xarita), shuning uchun ostki kesiklarni koʻrsata olmaydi. Asbobni dastur boʻylab siljitish uchun **Ijro**ni torting. Koʻrinishda berilish harakatlari uzluksiz, tez harakatlar uzuq chiziq bilan, har bir operatsiya uchun bitta rang.

**Simulyatsiya qilingan zaxirani koʻrsatish** yoqilgan boʻlsa, zaxira modelga nisbatan katakcha-katakcha boʻyaladi: **yashil** — model ustida (0.02 mm ichida), **qizil** — asbob modelga kirgan joy, va modelda zaxira qolgan joyda — yupqa qatlam uchun **sariq**, koʻproq uchun **toʻq sariq**, 1 mm va undan koʻp uchun kesilmagan zaxiraning **kulrang** rangiga oʻtadi. Ranglar har bir oʻzgarishda qayta yaratiladi, panel raqamlari bilan bir xil balandlik xaritasidan, shuning uchun yashil va qizil ranglar Ortiqcha kesish qatoriga mos keladi. Faska modelga ataylab kiradi va uning chetida qizil koʻrsatadi.

## G-code ni postlash

**Postprotsessor** ostida boshqaruvni tanlang va {{ui:G-kodni yuklab olish}} tugmasini bosing (yoki asboblar panelidagi {{ui:Postprotsessor}}):

| Boshqaruv | Fayl | Izohlar |
|---|---|---|
| Fanuc uslubidagi ISO | .nc | %, O raqami, qator raqamlari, T M6 G43 H bilan, tayyor sikllar |
| GRBL | .nc | Asbob almashtirgich va tayyor sikllar yoʻq: asbobni almashtirish M0 bilan toʻxtaydi, burgʻulash oddiy harakatlar sifatida yoziladi |
| LinuxCNC | .ngc | T M6 G43 H bilan, tayyor sikllar, M2 |
| Fanuc uslubidagi tokar | .nc | Tokarlik dasturlari uchun: X diametr sifatida, aylanishga berilish, G50 chegarasi ostida G96, G32 rezba |
| LinuxCNC tokar | .ngc | Tokarlik dasturlari uchun: G7 diametrlar, G95, G96, G33 rezba; bosh nuqtaga qaytish harakatini yozmaydi |
| Oʻzingiznikisi | istalgan | Siz yozgan yoki oʻzgartirgan post: {{ui:Postni tahrirlash…}}, {{ui:Yangi post…}}, {{ui:Post faylini import qilish…}} |

Har bir fayl dastur, zaxira, ishchi siljish va asboblar haqida izohlar bilan boshlanadi. Koordinatalar millimetrda, 3 kasr raqami bilan. {{ui:Asbob yoʻli CSV}} va {{ui:Asbob yoʻli JSON}} harakatlarning oʻzini eksport qiladi.

**Kesishdan oldin chiqishni oʻz stanokingizning simulyatorida tekshiring va avval uni zaxira ustida havoda ishga tushiring.** Uchta oʻrnatilgan post boshqaruvlarning hujjatlashtirilgan xatti-harakatiga mos boshlangʻich nuqtalar; ular hech qanday aniq stanokda isbotlanmagan. Siz oʻzgartirgan post — uni isbotlash sizning vazifangiz. Qanday yozish: [Postprotsessorlar](topic:post-processors).

## Sex uchun aniq STEP

**Operatsiyalar** yorligʻidagi G-code tugmalari ostida {{ui:Aniq STEP (ishchi koordinatalari)}} `<part>-work.step` faylini yuklab oladi: detal aniq yaxlit jism sifatida (teshiklar va boʻrtiqlar uchun haqiqiy silindrlar, ularning qirralari uchun haqiqiy aylanalar), boshlangʻich nuqtasi shu sozlashning ishchi boshlangʻich nuqtasida, Z esa asbob oʻqi boʻylab. Bular G-code ishlatadigan koordinatalar, shuning uchun sexning oʻz CAM dasturi yoki tekshiruvchisi modelni dasturga harakatlantirmasdan moslashtiradi. Faylda faqat detal, zaxira yoki asbob yoʻllari emas.

{{ui:Eksport}} › {{ui:STEP AP242 (aniq yaxlit jism)}} xuddi shu jismni detalning oʻz holatida (Z yuqoriga) yozadi: qarang: [Bosib chiqarish, STEP va DXF uchun eksport](topic:export-files#for-other-cad-programs-step).

## Cheklovlar

- Oymalar, konturlar, burgʻulash va faskalar 2.5 oʻqli. Egri detallar 3D da oʻzining operatsiyalari bilan qoʻpol va pardozlanadi ([3D qoʻpol va qoldiq ishlov berish](topic:rough-3d), [3D pardozlash](topic:finish-3d)). Moslashuvchan tozalash 2D (yassi tagliklar).
- Egilgan asboblar, 5 oʻqli va 4-oʻqli pardozlash, tokarlik va zondlash mavjud, har birining oʻz cheklovlari bilan, va **ulardan hech biri stanokda ishga tushirilmagan**: qarang: [4 va 5 oʻqli ishlov berish](topic:multi-axis), [Tokarlik](topic:turning) va [Zondlash](topic:probing).
- Tutgichlar va dastaklar toʻqnashuvga tekshirilmaydi; kesish tish uzunligidan chuqurroq boʻlganda ogohlantirish chiqadi.
- Berilish va tezliklar boshlangʻich qiymatlar. Post tahrirlanadigan matn, lekin u faqat harakatlar qanday yozilishini hal qiladi; u asbob yoʻlini oʻzgartira olmaydi, oʻqlar qoʻsha olmaydi yoki stanokingizni bilmaydi ([Postprotsessorlar](topic:post-processors) nima qila olmasligini sanab oʻtadi).

## Dasturni stanokka yuborish

Studio oʻrnatilgan stanok bilan ishchi stoldagi CadCraft Studio da **Stanokka yuborish…** **G-kodni yuklab olish** yonida paydo boʻladi va xuddi shu dasturni tarmogʻingizdagi stanokka yuklaydi. U PartCraft dan hech qachon ishga tushirilmaydi: uni stanokning oʻzida aniq boʻlganda ishga tushiring. Brauzerda tugma koʻrinmaydi (veb-sahifa tarmogʻingizdagi stanokka yetib bora olmaydi): buning oʻrniga dasturni yuklab oling.
