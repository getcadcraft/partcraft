---
title: Muammolarni bartaraf etish
summary: PartCraft da uchrashingiz mumkin boʻlgan muammolar: ilova ishga tushmasligi, xususiyatlar ishlamay qolishi, eskizlar yechilmasligi, fayllar ochilmasligi va birikmalar notoʻgʻri ishlashi, xabar va yechim bilan.
keywords: muammo, xato, yordam, ishlamayapti, ishlamay qoladi, nosozlik, qulash, boʻsh, webgl, webassembly, yadro, qurilmagan, toʻliq aniqlanmagan, ochiq profil, ochilmaydi, hech narsa boʻlmaydi, notoʻgʻri yoʻnalish, sekin
from: 7728542c
---

Biror narsa ishlamasa, avval pastdagi **holat satri** ni oʻqing: PartCraft u yerda nima uchun rad etganini yoki keyin nima kutayotganini aytadi. Ishlamayotgan xususiyat ham oʻz xabarini oʻng panelining yuqorisida va tarixdagi qatoriga sichqoncha olib borilganda koʻrsatadi.

## Ilova ishga tushmaydi

### "Bu brauzer 3D ni koʻrsata olmaydi (WebGL oʻchiq yoki yoʻq), shuning uchun PartCraft bu yerda ishlay olmaydi."

**Sababi:** brauzerda 3D grafika (WebGL) oʻchirilgan, bloklangan yoki grafik drayver tomonidan qoʻllab-quvvatlanmaydi.

**Yechim:**

:::chromium
`chrome://settings/system` ni (Edge da `edge://settings/system`) oching va "Use graphics acceleration when available" ni yoqing, soʻng brauzerni qayta ishga tushiring. Agar u yoqilgan boʻlsa, WebGL holatini `chrome://gpu` da tekshiring va grafik drayverni yangilang.
:::

:::firefox
`about:support` ni oching va Graphics, WebGL ga qarang. Agar bloklangan boʻlsa, grafik drayverni yangilang. `about:config` da `webgl.disabled` `false` boʻlishi kerak.
:::

:::safari
Joriy Safari da WebGL doim yoqilgan. macOS ni yangilang (Safari u bilan birga yangilanadi). Hali ham ishlamasa, xuddi shu Mac da Chrome yoki Firefox ni sinab koʻring, grafik apparat sababi emasligini tekshirish uchun.
:::

Masofaviy ish stollari va baʼzi virtual mashinalarda WebGL yoʻq. Kompyuterning oʻzida sinab koʻring.

### "Yaxlit jism yadrosi yuklanmadi: …"

**Sababi:** geometriya yadrosi (WebAssembly dasturi) yuklanmadi yoki ishga tushmadi. Odatda ilova yuklanayotganda ulanish uzilgan, WebAssembly kompaniya siyosati yoki brauzer xavfsizlik sozlamasi bilan oʻchirilgan yoki brauzer juda eski.

**Yechim:** onlayn boʻlganda sahifani qayta yuklang. Agar yana ishlamasa, boshqa joriy brauzerni sinab koʻring. Firefox da `about:config` dagi `javascript.options.wasm` `true` boʻlishi kerak. Oflayn holatda ilova va uning yadrosi faqat ulanish uzilishidan oldin ilova paneli **Oflayn tayyor** deb aytgan boʻlsa yuklanadi (onlayn holatda {{ui:Save for offline}}; qarang [Oflayn ishlash](common:offline)).

### Oflayn tugmasi "Saqlab boʻlmadi" yoki "Oflayn mavjud emas" deydi

**Saqlab boʻlmadi**: baʼzi fayllar yuklab olinmadi. Onlayn boʻlganda uni qayta bosib koʻring; sekin yoki oʻlchanadigan ulanish ikkinchi urinishni talab qilishi mumkin. **Oflayn mavjud emas**: bu brauzer oynasi oflayn nusxani saqlay olmaydi (yashirin oynalar va baʼzi boshqariladigan kompyuterlar bunga toʻsqinlik qiladi). Oddiy oynadan foydalaning yoki sahifani ochiq qoldiring.

### PartCraft oflayn, lekin eskirgan

Onlayn boʻlganda **Oflayn tayyor** ni bosing va {{ui:Save again (get the newest version)}} ni tanlang.

### "Sweep: hali qurilmagan. Unga aniq yadro kerak, …"

Toʻliq xabar: "<Name>: hali qurilmagan. Unga aniq yadro kerak, bu PartCraft ning bu versiyasida yoʻq. Yordam › Hali qurilmagan nima qilish kerakligini aytadi." Siz Sweep, Loft, Rib, list metall flanesi, sirt xususiyati, Combine, Move body, Scale body yoki Path pattern ni tanlaganingizda va faqat aniq yadro bajara oladigan boshqa narsalar uchun koʻrasiz. Brauzeringiz yoki detalingizda hech narsa notoʻgʻri emas: PartCraft ning bu versiyasi har bir detalni mesh yadrosi bilan quradi. Oʻrniga nima qilish kerakligi uchun qarang [Hali qurilmagan](topic:not-built-yet) va [Mesh yadrosi](topic:solid-kernels).

### "Yaxlit jism yadrosi yuklanmoqda…" hech qachon yoʻqolmaydi

Sekin ulanishda biroz kuting: yadro va 3D kutubxona birinchi marta yuklanadi. Keyin sahifani qayta yuklang. Agar sahifaning oʻzi xato koʻrsatsa, yuqoriga qarang.

## Klavishani bosganda hech narsa boʻlmaydi

- Kursor panelda katakchada boʻlsa, klavishalar ishlamaydi. Koʻrinishga bosing yoki matn kiritgandan keyin {{key:Esc}} ni bosing (yoki {{key:Tab}} bilan chiqing).
- Oʻq tugmalari va {{key:Plus}}/{{key:Minus}} koʻrinish ichiga bosganingizdan keyingina koʻrinishni buradi va kattalashtiradi.
- Dialog ochiq: avval unga javob bering.
- Eskizda {{key:F}} Fillet asbobi, Fit emas. {{ui:Fit}} tugmasidan foydalaning.

## Asboblar paneli tugmasi xira

- Eskiz ochiq boʻlganda xususiyat tugmalari xira boʻladi. Avval eskizni yoping.
- Eskiz asboblari faqat eskiz ichida ishlaydi.
- {{ui:Undo}} va {{ui:Redo}} bekor qilinadigan yoki qayta bajariladigan hech narsa boʻlmaganda xira boʻladi.
- {{ui:Assembly}} yechimli detal kerak. {{ui:Joint}} yigʻmada ikkita detal kerak. {{ui:Edit part}} tanlangan detal kerak.
- {{ui:STEP AP242 (exact solid)}} va {{ui:STEP AP214 (exact solid)}} yigʻmada xira: har bir detalni alohida eksport qiling. Agar boshqa dastur aniq faylni rad etsa, {{ui:STEP AP214 (exact solid)}} ni, soʻng {{ui:STEP (faceted, mesh kernel)}} ni sinab koʻring va {{ui:Help}} › {{ui:Report a problem}} orqali bizga xabar bering.
- {{ui:Sweep}}, {{ui:Loft}} va aniq yadro talab qiladigan boshqa xususiyatlar xira emas: ular bosiladigan boʻlib qoladi, ularning maslahatlari "hali qurilmagan (aniq yadro kerak)" bilan tugaydi va bosilganda holat satrida shu aytiladi. Qarang [Hali qurilmagan](topic:not-built-yet).
- {{ui:Drawing}} yechimli detal kerak, eskiz ochiq boʻlganda xira.
- {{ui:Export}} elementlari yigʻmada xira: yigʻmalarni hozircha eksport qilib boʻlmaydi. Yigʻmani yoping yoki eksport qilish uchun detalni tahrirlang.

## Eskiz muammolari

### Eskiz bogʻlanish qoʻshishga ruxsat bermaydi

"Bu tanlov uchun bogʻlanish mos emas. Bitta yoki ikkita element tanlang (Shift+bosish qoʻshadi)." Bogʻlanish boshqa tanlovni talab qiladi. Har biriga nima kerakligi uchun [Eskiz bogʻlanishlari va oʻlchamlari](topic:sketch-relations) ga qarang.

### "Over defined: … cannot all be met. Undo, or delete one of them."

"Ortiqcha aniqlangan: … bir vaqtda bajarilmaydi. Bekor qiling yoki ulardan birini oʻchiring."

**Sababi:** yangi bogʻlanish yoki oʻlcham mavjudlari bilan ziddiyat qiladi. Eskiz harakatlanmadi.

**Yechim:** {{key:Mod+Z}}, yoki oʻng panel roʻyxatidagi qizil elementlardan birini oʻchiring (yonidagi **Oʻchirish** ni tanlang).

### "Over defined: … is already implied. Delete it."

**Sababi:** bogʻlanish hech narsa qoʻshmaydi: boshqalari uni allaqachon talab qiladi (masalan, toʻrtburchakning ikki tomonida Parallel, yoki allaqachon belgilangan oʻlcham). Bu versiyada driven oʻlchamlar yoʻq.

**Yechim:** uni oʻchiring. Xususiyat baribir quriladi, ogohlantirish bilan.

### "Those items cannot be dimensioned together."

Masalan, nuqta va aylanani bosdingiz. Oʻrniga aylananing markaz nuqtasigacha oʻlcham qoʻying.

### "A fillet needs a corner where exactly two lines meet." / "That radius is too big for these lines."

Aynan ikkita qattiq chiziqning burchak nuqtasini bosing. Qisqaroq chiziq ruxsat beradiganidan kichikroq radius ishlating.

### Sudrash paytida geometriya orqaga qaytadi

Sudrash bogʻlanish yoki oʻlchamni buzardi, shuning uchun PartCraft uni joyiga qaytaradi. Faqat koʻk (toʻliq aniqlanmagan) geometriya harakatlanishi mumkin.

### "This sketch cannot open: Needs Extrude2, which is failing."

Eskiz hali qurilmagan xususiyat yuzida turadi. Avval oʻsha xususiyatni tuzating, yoki uni bostirishni bekor qiling, yoki oldinga suring.

## Xususiyat muammolari

| Xabar | Sababi | Yechim |
|---|---|---|
| "Avval eskiz yarating: tekislik tanlang, Eskiz, yopiq profil chizing, Chiqish." | Ishlatilmagan, egri chiziqli eskiz yoʻq va tanlanmagan | Eskiz chizing yoki tarixda eskizni tanlang |
| "Eskizda ekstruziya qilinadigan yopiq profil yoʻq." (yoki "… aylantirish uchun …") | Yopiq qattiq chiziqlar konturi yoʻq | Boʻshliqlarni yoping; qurilish chiziqlarini {{key:Q}} bilan qaytaring |
| "Profil ochiq: (x, y) dagi uch hech narsaga ulanmagan." | Oʻsha nuqtada boʻshliq | Eskizni oching, uchini qoʻshnisiga tortib qoʻying, shunda u ushlanadi |
| "Profil (x, y) da tarmoqlanadi: u yerda ikkitadan koʻp uch uchrashadi." | Bir nuqtada uchta yoki undan koʻp chiziq uchrashadi | Ortiqcha chiziqni oʻchiring yoki uni qurilish chizigʻiga oʻtkazing |
| "Yopiq kontur kamida uchta tomon yoki egri chiziq kerak." | Ikki chiziq orqaga-oldinga | Konturni qayta chizing |
| "Through all faqat kesishlar uchun. Boss uchun chuqurlik kerak." | Boss Through all ga oʻrnatilgan | End ni Blind yoki Mid-plane ga oʻzgartiring |
| "Kesish uchun bu tomonda hech narsa yoʻq. Boshqa yoʻnalishni sinab koʻring." | Kesish materialdan uzoqlashadi | **Teskari yoʻnalish** ni belgilang |
| "Kesadigan narsa hali yoʻq." / "Teshik ochadigan narsa hali yoʻq." | Bu xususiyatdan oldin qattiq jism yoʻq | Avval boss yarating yoki xususiyatni pastga suring |
| "Aylantirish uchun oʻq sifatida qurilish chizigʻi (centerline) chizing." | Oʻqsiz aylantirish | Markaziy chiziq qoʻshing yoki **Oʻq** da chiziqni tanlang |
| "Profil oʻqni kesib oʻtadi. Uni markaziy chiziqning bir tomonida saqlang." | Profil oʻqning ikki tomonida | Profilning yarmini qayta chizing |
| "Teshiklar qayerga boʻlishi kerakligini eskizda nuqtalar bilan belgilang (Point asbobi), soʻng teshik yarating." | Eskizda erkin nuqtalar yoʻq | Nuqtalarni {{key:P}} bilan qoʻshing |
| "Zenkovka teshikdan kengroq boʻlishi kerak." | Zenkovka ⌀ Diameter dan katta emas | Zenkovkani kengroq qiling |
| "Zenkovka teshikdan sayozroq boʻlishi kerak." | Zenkovka koʻr teshikdan chuqurroq | Uni sayozroq qiling, yoki teshikni chuqurroq qiling |
| "Nusxalash uchun xususiyatlarni tanlang." | Naqsh yoki aks ettirish, hech narsa belgilanmagan | Nusxalash uchun xususiyatlar ostida xususiyatni belgilang |
| "Extrude2 nusxalash uchun yechim yoʻq." | Nusxalanadigan xususiyat xato yoki oʻchirilgan | Uni tuzating yoki bostirishni bekor qiling |
| "Sketch3 kerak, u xato bermoqda." | Unga bogʻliq xususiyat qurilmagan | Nomi berilgan xususiyatni tuzating |
| "Bu yuza yoʻq (Extrude1 qurilmagan)." | Eskiz turgan yuza endi yoʻq | Oʻsha xususiyatni tuzating, yoki eskizni oʻchirib qayta eskiz qiling |
| "Bundan keyin detaldan hech narsa qolmadi." | Kesish barcha materialni olib tashladi | Kesishning oʻlchami va yoʻnalishini tekshiring |
| "Yaxlit jism yadrosi buni qura olmadi (…)." yoki "Yaxlit jism yadrosi buni jism bilan birlashtira olmadi." | Yadro geometriyani rad etdi | Bekor qiling yoki oʻlchamlarni biroz oʻzgartiring; aynan tegib turgan yuzalar buni keltirib chiqarishi mumkin |
| "Sweep: hali qurilmagan. Unga aniq yadro kerak, bu PartCraft ning bu versiyasida yoʻq." (Loft, Rib va boshqalar ham) | Oldingi versiyada yaratilgan va faqat aniq yadro quradigan xususiyat. U tarixda qoladi va oʻzgarishsiz saqlanadi | Bostiring yoki oʻchiring; oʻrniga nima qilish kerakligi uchun [Hali qurilmagan](topic:not-built-yet) ga qarang |
| "5 mm yumaloqlik bu yerga sigʻmaydi (…)." / "2 mm faska …" | Oʻlcham qirra yonidagi yuz uchun juda katta, yoki burchakni yumshatib boʻlmaydi | Kichikroq oʻlcham, yoki xususiyat boshiga kamroq qirra |
| "Fillet: bu versiyada faqat ikki tekis yuza orasidagi toʻgʻri qirralar (mesh yadrosi ularni quradi). Egri qirralarni eskizda yumaloqlang yoki faskalang." (Chamfer uchun ham) | Tanlangan qirra yumaloq, masalan teshik qirrasi, yoki egri yuzada | {{ui:Pick edges}} ni bosing va uni olib tashlang; oʻsha burchakni eskizda yumaloqlang yoki faskalang |
| "Radiusi qirra boʻylab oʻzgaradigan fillet: hali qurilmagan (aniq yadro kerak). Unga bitta radius bering." | **Oʻzgaruvchan radius** belgilangan | Uni olib tashlang va bitta radius bering |
| "Fillet mesh yadrosi bilan: yumaloqlangan qirralar uchrashgan joyda ular kesilgan, yumshatilmagan." (⚠, ogohlantirish) | Tanlangan qirralar burchakda uchrashadi; yumaloqliklar shu yerda oʻtkir chiziq hosil qiladi | Tuzatish shart emas: detal qurilgan. Chiziq muhim boʻlsa, kamroq qirrani fillet qiling |
| "Qirra, u yumaloqlaydigan, yoʻq: Extrude1 va Cut2 orasidagi qirra." | Oldingi oʻzgarish qirrani olib tashlagan | {{ui:Pick edges}} ni bosing, qizil qirrani olib tashlang va yangisini tanlang |
| "Qirralarni koʻrinishda tanlang, soʻng qoʻshing." | Fillet yoki faskada qirralar yoʻq | {{ui:Pick edges}} |
| "Ochiladigan yuzalarni tanlang (ochiq), soʻng qobiq yarating." | Qobiqda ochiq yuzalar yoʻq | {{ui:Pick faces}} |
| "Qobiqni bu qalinlikda yasab boʻlmadi (…)." | Devor modelning ingichka qismidan yoki fillet radiusidan qalinroq | Yupqaroq devor yoki kattaroq filletlar |
| "Shell: bu versiyada faqat tekis yuzalarni ochadi (mesh yadrosi quradi)." | Ochiladigan yuza egri | {{ui:Pick faces}} ni bosing va uni olib tashlang; faqat tekis yuzalarni oching |
| "Qoralama: bu versiyada faqat tekis yuzalar (mesh yadrosi quradi)." | Qoralanadigan yuza silindr, konus yoki erkin shakl yuzasi | Uni olib tashlang; faqat tekis yuzalarni qoralang |
| "Ochadigan yuza yoʻq (…)." | Oldingi oʻzgarish yuzani olib tashlagan | {{ui:Pick faces}} ni yana bosing |
| "Fillet1 detalning qirralarini yoki devorlarini oʻzgartiradi; nusxalab boʻlmaydi. …" | Naqsh yoki aks ettirish fillet, faska yoki qobiqni nusxalaydi | Belgisini olib tashlang; avval kesishlarni naqshlang, soʻng fillet qiling |
| "Bu yuzada turadi, uni faqat aniq yadro topa oladi: bu versiyada hali qurilmagan." | Yigʻmada oldingi versiyada yaratilgan, mesh yadrosi topa olmaydigan yuzada eskiz | Asosiy tekislikda yoki ekstruziyaning tekis yuzasida eskiz qiling va oʻlchamlar bilan joylashtiring |
| "U detalning yuzasi yoki qirrasidan foydalanadi, uni faqat aniq yadro topa oladi: bu versiyada hali qurilmagan." | Qattiq jismning yuzasi yoki qirrasidagi yordamchi tekislik, oʻq yoki nuqta | Uni asosiy tekisliklardan, eskiz nuqtalaridan yoki koordinatalardan yarating |
| "Ekstruziya yuzagacha, keyingi yuzagacha yoki uchigacha: hali qurilmagan (aniq yadro kerak)." / "Taper: hali qurilmagan (aniq yadro kerak)." | Tugash sharti yoki qiyshaytirish faqat aniq yadro quradi | Oʻlchagan Blind yoki Mid-plane chuqurligidan foydalaning; Taper ni 0 da qoldiring |

## Tanlash muammolari

- "Bu yuza egri. Eskiz uchun tekis yuza yoki tekislik tanlang." Eskizlar tekis yuza talab qiladi. Asosiy tekislikda eskiz qiling va eskizni oʻlchamlar bilan joylashtiring.
- Yuzada "Tanlangan joyda qotirilgan" yozilgan: u eskiz qirrasidan yaratilmagan (masalan, naqsh nusxasining yuzasi), shuning uchun uning ustidagi eskiz detal oʻzgarganda joyida qoladi.
- Qirralarga tegish qiyin: kattalashtiring. Koʻrsatkich aynan ustida boʻlganda qirra yonidagi yuzadan ustun turadi.

## Fayl muammolari

| Xabar | Yechim |
|---|---|
| 'PartCraft oʻzining .partcraft.json fayllarini, SolidWorks uchun CadCraft makrosidan eksportlarni (.cadcraft-sw.json) va STEP fayllarini ochadi. "bracket.igs" bularning hech biri emas.' | Faqat shu fayllar tan olinadi (va STL, OBJ va 3MF mesh fayllari hamda `.3dm` fayllari) |
| '"part.stp" STEP fayl emas (ISO-10303-21 bilan boshlanmaydi).' | Fayl STEP matni emas |
| "Bu STEP fayl juda katta (60 MB dan oshiq), uni bu yerda import qilib boʻlmaydi." | Uni manbada soddalashtiring |
| Oʻz saqlangan detalingizda: "Bu fayl PartCraft detali boʻlish uchun juda katta." | Oldingi versiyada import qilingan katta STEP jism detal faylini 50 MB dan oshirgan. Undan oldingi nusxadan foydalaning |
| "Bu fayl PartCraft detali boʻlish uchun juda katta." | Fayl 50 MB dan katta; bu PartCraft fayli emas |
| "Bu PartCraft fayli emas (JSON emas)." / "Bu PartCraft fayli emas." | Fayl buzilgan yoki boshqa dasturniki |
| "Bu faylni yangiroq PartCraft saqlagan (fayl versiyasi …); bu nusxa versiya … ni oʻqiydi" | Uni yangiroq PartCraft da oching |
| "Extrude2: chuqurlik notoʻgʻri (yoki boshqa qiymat)." | Fayl qoʻlda tahrirlangan yoki buzilgan. Eski nusxadan foydalaning |
| Yigʻmadagi Insert "Part1.partcraft.json da kiritish uchun yaxlit jism yoʻq." deydi. | Detal fayli yaxlit jismga ega emas. Uni oching, jism yarating, saqlang va qayta kiriting |

**Saqlagan faylim kutilgan joyda emas.** Saqlash bu yuklab olish: brauzeringizning yuklab olingan fayllar papkasini yoki brauzer asboblar panelidagi yuklab olishlar roʻyxatini oching. Qarang [Fayllaringiz qayerga boradi](common:your-files).

**Detalni ochdim, lekin yigʻma hali ham ekranda.** Detal yigʻma orqasida yuklangan. {{ui:Close}} ni tanlab yigʻmani yoping va detalni koʻring. Detal fayllarini ochishdan oldin yigʻmalarni yoping.

## Chizma muammolari

| Xabar | Yechim |
|---|---|
| "Avval detalni quring, soʻng uning chizmasini yarating." | Avval detalni quring |
| "Varaqda quyidagi uchun joy yoʻq: detal. Detalni kichikroq qiling yoki koʻrinishni tashlab yuboring." | Kichikroq **Detal radiusi** yoki **Detal masshtabi**, yoki kesimni olib tashlang |
| "Detal old, yuqori, oʻng yoki kesim koʻrinishidan olinadi." | Shu koʻrinishlardan biriga bosing |
| "Koʻrinishlardan biriga bosing." | Bosish boʻsh qogʻozga tushdi |
| "Position uchun kamida bitta datum havolasi kerak." va boshqa ramka xabarlari | Panel soʻragan datumlarni belgilang yoki boshqa xarakteristikani tanlang |
| "Chizma koʻrinishlari yaratilmadi: …" | Oxirgi oʻzgarishni bekor qiling. Takrorlansa, saqlang, sahifani qayta yuklang va detalni qayta oching |

## Yigʻma muammolari

| Xabar | Yechim |
|---|---|
| "Avval yechimli detal yarating, soʻng uni yigʻmaga qoʻying." | Detalda hali yechim yoʻq |
| "Birikma uchun avval ikkinchi detal qoʻying (Add copy, Insert yoki Edit › Duplicate)." | Birikmaga ikkita detal kerak |
| "Boshqa detalda yuza tanlang." | Birikmaning ikkala yuzasi turli detallarda boʻlishi kerak |
| "Bu yuza egri. Tekis yuza tanlang …" | Birikmalar tekis yuzalardan boshlanadi. Teshik yoki aylantirish oʻqi uchun **Markazlash** dan foydalaning |
| "Bracket2 yerdagi detalga ulanmagan, shuning uchun u qoʻyilgan joyda qoladi." | Uni joylashtirilgan detalga birikma bilan ulang |
| "Revolute3 halqani yopadi, u yopilmaydi: 2.000 mm ga chetga chiqadi. Halqa birikmalarining yuzalarini, ofsetlarini va chegaralarini tekshiring." | Detallar hammasi uchrasha olmaydi: uzunliklarni, har bir birikma ishlatgan yuzalarni, ofsetlarni (yuz-yuzga qoʻyilgan detallar chuqurlikda mos kelishi kerak) va chegaralarni tekshiring; yoki halqadagi bitta birikmani olib tashlang |
| "Bu birikma ishlatgan yuza Bracket dan yoʻqolgan." / "Bu birikma ishlatgan oʻq Bracket dan yoʻqolgan." | Detal tahrirlangan. Birikmani olib tashlang va qayta yarating |
| "Oʻq yuza boʻylab ketadi, shuning uchun birikma markazini belgilay olmaydi." | Yuzani kesib oʻtadigan oʻqni tanlang yoki "The face's own origin" (yuzaning oʻz koordinata boshi) |
| "Yigʻma kamida bitta detalni saqlaydi. Uning oʻrniga yoping." | {{ui:Close}} dan foydalaning |

**Detallar birikkan, lekin notoʻgʻri joyda.** Birikmaning ikkala tomoni uchun **Markazlash** ni tekislanishi kerak boʻlgan teshik yoki aylantirish oʻqlariga qoʻying, soʻng **Burchak (°)** va **Ofset (mm)** ni sozlang.

## Sekin ishlaydi

- Modellashtirishda **Egri chiziqlar** ni Normal yoki Coarse ga qoʻying; eksportdan oldin Fine ga oʻting.
- Katta naqsh sonlari (yuzlab nusxalar) har bir oʻzgarishda qayta qurilishni sekinlashtiradi. Boshqa xususiyatlar ustida ishlayotganda naqshni bostiring.
- Clash va harakat tekshiruvi har bir juft detalni solishtiradi; katta yigʻmalar uzoqroq vaqt oladi.
- Boshqa ogʻir yorliqlarni yoping. PartCraft kompyuteringizning protsessori va grafikasida ishlaydi.

## Hali ham muammo

Avval faylingizni saqlang ({{key:Mod+S}}), soʻng sahifani qayta yuklang va uni yana oching. Agar xususiyat hali ham xato bersa, uni tanlang, xabarni oʻqing va oxirgi yaxshi holatga qaytish uchun {{key:Mod+Z}} ni sinab koʻring.
