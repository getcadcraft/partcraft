---
title: Tahlil kutubxonasi
summary: Skript ishchi maydonidagi oʻqish uchun qulay tahlil skriptlari kutubxonasi: har bir guruhda nima borligi, funksiyani faqat oʻqish rejimida ochish, uning sarlavhasi (usul, manbalar va tekshiruv), oʻz nusxangizni yaratish va nusxa kutubxona funksiyasini qanday almashtirishi.
keywords: kutubxona, craftlib, tahlil, elektromagnit, statik, modal, issiqlik, topologik optimallashtirish, top88, SIMP, elektromagnetika, elektrostatika, magnitostatika, suyuqlik, panjarali Boltzmann, LBM, toʻr, voksel, tetraedrlar, manbalar, tekshiruv, verifikatsiya, nusxa, soya
from: bf993859
---

Tahlil kutubxonasi — har biri yuqoridan pastga oʻqish mumkin boʻlgan funksiya bo'lgan skriptlar toʻplami: bikrlik matritsasi qanday yigʻilishi, chegaraviy shartlar qayerga qoʻyilishi, qaysi yechuvchi ishlashi va natijalar qanday hisoblanishi. Uning ichida hech narsa qora quti ichiga yashirilmagan; faqat tez ichki sikllar (element matritsalari, siyrak yechuvchilar, toʻrlash) oʻrnatilgan.

## Misol bilan boshlang

**Misollar** guruhida kutubxonadan boshidan oxirigacha foydalanadigan beshta qisqa skript bor. Birini tanlang, soʻng {{ui:Ochish (faqat oʻqish)}} tugmasini va {{key:F5}} ni bosing: har biri koʻrinishni tozalaydi, kanvada natijani va qoʻshimcha displeylarda grafikni koʻrsatadi.

| Misol | Nimani koʻrsatadi |
|---|---|
| Konsol kuchlanishi | 100 × 10 × 10 mm oʻlchamli poʻlat tayoqcha 100 N uchidagi yuk ostida: deformatsiyalangan tayoqchada fon Mises kuchlanishi va uchining egilishi nazariya bilan toʻrt xil element oʻlchamida solishtirilgan (grafikda) |
| MBB balka topologiyasi | Klassik 60 × 20 topologik optimallashtirish: loyihaning shakllanishi, egiluvchanlikning pasayishi, yakuniy tuzilma (94 iteratsiya, egiluvchanlik 203.19) |
| Kondensator maydoni | 4 mm kenglikdagi, bir-biridan 1 mm masofadagi ikki plastina: potensial va maydon, chetga tarqalish bilan sigʻim ideal qiymat va Palmer formulasi bilan solishtirilgan |
| Kanal oqimi | Kanalda ustun atrofidagi panjarali Boltzmann oqimi: tezlik maydoni va yaqinlashish tarixi |
| Elektromagnit | Havo boʻshligʻi va gʻaltakli C-shaklidagi temir oʻzak: magnit induksiyasi, boʻshliqdagi maydon magnit zanjir formulasi bilan solishtirilgan, induktivlik va boʻshliq boʻylab tortish kuchi. Batafsil: [2-D magnit maydonlari](topic:magnetic-fields-2d) |
| Doimiy magnit | Gʻaltak oʻrniga doimiy magnit bilan bir xil oʻzak: magnitning ishchi nuqtasi, boʻshliqdagi maydon magnit zanjir bilan solishtirilgan, qancha oqim oqib ketishi va tortish kuchi. [2-D magnit maydonlari](topic:magnetic-fields-2d#permanent-magnets) da |

## Guruhlar

| Guruh | Funksiyalar | Nima qiladi |
|---|---|---|
| Toʻrlash | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Qutilar va silindrlar geksaedr, kub yoki tetraedr shaklida; istalgan modelning (detal, jism, yuklangan STL) kublari yoki tetraedrlari; element hajmlari va sifati; tekislik yoki yuzada tugunlarni tanlash |
| Statik kuchlanish | `static_voxel`, `static_tet` | Kublarda yoki 10 tugunli tetraedrlarda chiziqli statik kuchlanish: siljishlar, kuchlanishlar, fon Mises, reaksiyalar |
| Ramkalar | `frame3d` | Balka, ustun va tiragichlardan iborat 3D ramkalar toʻgʻridan-toʻgʻri bikrlik usuli bilan: element uchlarining boʻshatilishi, tayanchlar va prujinalar, elementlar boʻylab yuklar; siljishlar, reaksiyalar, element uchidagi kuchlar. DetailCraft va BimCraft ning {{ui:CraftScript sifatida eksport}} tugmasi butun modelni shu uchun yozadi. Tahlil yordamchisi, kod tekshiruvi emas |
| Tebranish | `modal_tet` | Tabiiy chastotalar va tebranish shakllari |
| Issiqlik | `heat_steady`, `heat_transient`, `heat_system` | Doimiy va oʻtuvchi issiqlik oʻtkazuvchanligi: doimiy harorat, issiqlik kiritish, hosil boʻlish, oqim va konveksiya bilan |
| Topologik optimallashtirish | `top88`, `top99`, `topopt3d` | Nashr etilgan 88 va 99 qatorli 2-D kodlar hamda kublarda 3-D dagi shu usul |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potensial, maydon, sigʻim, zaryad) va magnitostatika (vektor potensiali, magnit induksiyasi, doimiy magnitlar) |
| Suyuqlik oqimi | `lbm2d`, `lbm3d` | Panjarali Boltzmann oqimi: 2-D skriptning oʻzida yozilgan, 3-D PartCraft ning oʻz oqim yadrosida |

Har bir funksiya sarlavhasida aniq argumentlari koʻrsatilgan. Birliklar sarlavhada boshqacha aytilmagan boʻlsa, PartCraft tadqiqotlaridagidek boʻladi: mm, N, MPa, zichlik uchun tonna/mm³, issiqlik uchun W va K. Elektromagnit va panjarali Boltzmann funksiyalari istalgan izchil birliklarda ishlaydi; ularning sarlavhalarida qanday ekani yozilgan.

## Kutubxona qanday tekshiriladi

Har bir funksiya sarlavhasi **tekshiruv** bilan tugaydi: maʼlum javobli kichik holat. PartCraft testlari ularning hammasini ishga tushiradi; PartCraft oʻsha ish uchun oʻz tadqiqotiga ega boʻlsa, skript javobi oʻsha toʻrdagi tadqiqot bilan solishtiriladi:

- konsolning uchidagi egilishi nazariya bilan solishtiriladi (kublarda 0.2 % ichida, tetraedrlarda 0.05 % ichida) va **Simulation** ishchi maydonining yechuvchilari bilan bir xil toʻrda (bir necha raqamgacha bir xil);
- konsolning birinchi chastotasi nazariya bilan solishtiriladi (0.24 % past, qisqa balka uchun kutilganidek) va **Simulation** ning modal yechuvchisi bilan;
- issiqlik: qizigan tekis devor aniq holda, kichik jismning sovishi toʻplangan sigʻim formulasi boʻyicha, plitaning harorati nazariya aytganidek soʻnishi;
- topologik optimallashtirish: `top88` nashrdagi 94 iteratsiya va egiluvchanlik 203.1925 ni takrorlaydi (zichlik filtri bilan 218.8032); `topopt3d` bir xil sozlamalarda **Generative** ishchi maydonidagi bilan bir xil egiluvchanlikda yakunlanadi;
- kondensator sigʻimi va uzun solenoid maydoni darslikdagi qiymatlar bilan, elektromagnit boʻshligʻidagi maydon magnit zanjir formulasi bilan, doimiy magnitlar esa havodagi dumaloq magnit va temir tutqich bilan yopilgan magnit bilan solishtiriladi;
- kanal oqimi aniq parabolik profil bilan solishtiriladi.

## Funksiyani oʻqish

1. Skript panelining **Kutubxona** yorligʻini oching.
2. Funksiyani bosing. Uning sarlavhasida koʻrsatiladi: nima hisoblanishi, usul, birliklar, taxminlar va cheklovlar, **manbalar** (kitob yoki maqola, tenglama raqamlari bilan) va **tekshiruv** — PartCraft ning oʻz testlari ishga tushiradigan, maʼlum javobli kichik holat.
3. {{ui:Ochish (faqat oʻqish)}} butun skriptni shtrixli chegarali yorliqda ochadi. Uni ishga tushirish va qismlarini tanlab ishga tushirish mumkin, lekin oʻzgartirib boʻlmaydi.

## Birini oʻzgartirish

{{ui:Nusxasini yaratish}} tugmasini bosing (yoki faqat oʻqish yorligʻi ustidagi **Tahrirlash uchun nusxasini yaratish**). Nusxa detalingizdagi xuddi shu nomli skript boʻladi, shuning uchun u detal bilan birga saqlanadi va **shu funksiyaga qilingan har bir chaqiruv endi sizning nusxangizdan foydalanadi** — tahrirlovchi buni skript ustida koʻrsatadi. Ikkalasini saqlash uchun nusxani qayta nomlang.

## Foydalanish

Kutubxona funksiyasini istalgan skriptdan oʻz nomi bilan chaqiring, oʻrnatilgan funksiya kabi:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Natijalar ish maydonida qiymatlar sifatida qaytadi; u koʻrsatgan grafiklar va maydonlar koʻrinishda hamda qoʻshimcha displeylarda paydo boʻladi.

Ochiq detalning statik tahlili, masalan, bir necha qatorni oladi:

```
v = voxel_mesh(part(), 2);                   % 2 mm kublar
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % pastini mahkamlash
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % yuqorida 500 N pastga
r = static_voxel(v, 210000, 0.3, bc);       % poʻlat
```

`r` siljishlar, kuchlanishlar va reaksiyalarni saqlaydi; fon Mises kuchlanishi deformatsiyalangan detalda chiziladi. Egri detallar uchun `tet_mesh` va `static_tet` ishlating; ular butun yuzlarni ham yuklashi va ushlab turishi mumkin (`face_nodes`).

:::note
Kutubxona funksiyalari CraftScript da yozilgan, Lua skripti esa ularni oʻrnatilgan funksiyalar kabi `cs` orqali chaqiradi: `cs.static_tet(t, 200000, 0.3, bc)` (qarang: [Lua skriptlari](topic:craftscript-lua)). Har bir funksiya bitta materialni va bitta yuklash holatini yechadi; sarlavhalarda nima qamrab olinmagani sanab oʻtilgan.
:::
