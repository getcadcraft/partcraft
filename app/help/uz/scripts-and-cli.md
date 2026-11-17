---
title: Skriptlar va buyruq satri
summary: PartCraft skript formati (.pcscript) butun detalni oʻqilishi oson matn sifatida yozadi, partcraft buyruq satri vositasi esa detallarni ekransiz quradi, oʻzgartiradi, qaytaradi va tekshiradi.
keywords: skript, pcscript, matn, buyruq satri, cli, terminal, paketli, avtomatlashtirish, tekshirish, lint, qurish, eksport, versiyalarni boshqarish, diff, parametrik skript
from: c56df222
---

Ehtiyotkor modellashtirish tugmalardan koʻra intizomga koʻproq bogʻliq. Matn sifatida yozilgan detalni oʻqish, koʻrib chiqish, qator-qator solishtirish va skript orqali qayta qurish mumkin. PartCraft ikki tomonlama ishlaydi: istalgan detalni skript sifatida yozish mumkin va skript detalni quradi.

## Ilovada

{{ui:Parametrlar}} yorligʻida, **Skript** boʻlimi ostida:

- {{ui:Skript sifatida saqlash}} ochiq detalni `<nom>.pcscript` sifatida yuklab oladi.
- {{ui:Skriptni ochish}} `.pcscript` faylidan detal quradi. Xato qator raqami bilan koʻrsatiladi va hech narsa almashtirilmaydi.

## Skript formati

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Qoidalar:

- Chap chetdagi qator bayonot boshlaydi: `pcscript`, `part`, `param`, xususiyat turi (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` va yangiroq turlar), undan keyin uning nomi, yoki `rollback <xususiyat>`.
- Chetga surilgan qatorlar yuqoridagi bayonotning sozlamalari. Oʻz holicha turgan sozlama (`through`, `reverse`, `suppressed`) "ha" degani.
- Son sozlamasi son, yoki `=` va ifoda boʻladi, bu tenglama hosil qiladi: `depth = thick`.
- Eskizda `on` tekislikni nomlaydi (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometriya `point <nom> x, y`, `line <nom> <nuqta> <nuqta>`, `circle <nom> <markaz> <radius>`, `arc <nom> <markaz> <boshlanish> <tugash>` (soat strelkasiga teskari) yoki `spline <nom> fit|control <nuqtalar>`; bogʻlanishlar esa turi va ularni bogʻlaydigan nomlar (`O` koordinata boshi); oʻlcham qiymat yoki `= ifoda` bilan tugaydi.
- Geometriya yoki bogʻlanish qatorining ixtiyoriy sozlamalari oxirida kvadrat qavsda, `;` bilan ajratilgan holda yoziladi: `[construction]`, `[side -1; label 5, 3]`.
- `#` izoh boshlaydi (qator boshida yoki boʻshliqdan keyin). Boʻshliqli nomlar "qoʻshtirnoq" ichiga olinadi.
- Xususiyat identifikatorlari yozilgan tartibda f1 dan sanaladi. Qirra va yuzaga havolalar ularni ishlatadi, masalan `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Format soʻzlari boʻlmagan sozlamalar `json` va qiymat sifatida yoziladi; ular oʻz holicha qayta oʻqiladi.

Ilovadan saqlangan skript barcha sozlamalarni oʻz ichiga oladi, shuning uchun u xuddi shu detal sifatida ochiladi. Ilovadan saqlangan import qilingan STEP jismi skript ichiga yoziladi, buyruq satridan esa `step-file` bilan nomlangan alohida `.step` fayl sifatida yoziladi.

## Buyruq satri vositasi

Vosita Node.js 24 oʻrnatilgan kompyuterda, CadCraft manba nusxasidan ishlaydi: `node tools/partcraft-cli/partcraft.mjs <buyruq>`. Bu dasturchilar vositasi, u ilova bilan bir xil modullardan foydalanadi. Detallar `.partcraft.json` fayllari yoki `.pcscript` skriptlaridir.

| Buyruq | Nima qiladi |
|---|---|
| `info <part>` | Xususiyatlar, parametrlar, qaytarish paneli, qurilgan jismning hajmi va oʻlchami |
| `params <part>` | Har bir parametr va tenglama, qiymati bilan |
| `set <part> width=150 Base.depth==thick` | Toʻgʻri yoʻnalish: parametrlarni oʻzgartirish, sonlarni bogʻlash (`==` yoki ifoda), oddiy sonlarni oʻrnatish |
| `drive <part> Base.depth=12` | Teskari yoʻnalish: boshqariladigan son ortidagi parametrni yechish (`--prefer width` birini tanlaydi) |
| `build <part> --out x.step` | `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` yoki makros (`.swb`) yozadi |
| `build <part> --table sizes.csv --out-dir sizes` | Dizayn jadvalining har bir qatori uchun bitta fayl |
| `variants <part> --out-dir d` yoki `--zip f.zip` | Har bir konfiguratsiya STEP, IFC, DWG va oldindan koʻrish, variantlar jadvali hamda kutubxona elementi sifatida (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); qarang [Variantlar toʻplamini tayyorlash](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skriptdan detalga |
| `to-script <part> -o part.pcscript` | Detaldan skriptga |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Faylda qaytarish panelini siljitish |
| `check <part> [--strict]` | Intizom tekshiruvi (quyida) |

`build` shuningdek `--set name=value` (faqat shu qurish uchun) va `--upto <feature>` ni qabul qiladi. Har bir buyruq `--json` ni qabul qiladi. Chiqish kodlari: 0 — hammasi yaxshi, 1 — muammo topildi, 2 — buyruq notoʻgʻri yozilgan. Skript hech qachon joyida qayta yozilmaydi: oʻzgartirilgan nusxani saqlash uchun `-o` bering.

## Tekshiruv

`check` detalni keyinchalik oʻzgartirishni qiyinlashtiradigan narsalarni xabar qiladi:

| Topilma | Hisoblanadi |
|---|---|
| Ortiqcha aniqlangan eskiz (ziddiyatli yoki takrorlangan bogʻlanishlar) | xato |
| Qurilmaydigan xususiyat | xato |
| Xatoli parametr yoki tenglama, yoki bir-birini ishlatadigan parametrlar | xato |
| Kam aniqlangan eskiz, erkinlik darajalari bilan | ogohlantirish |
| Parametr boshqarmaydigan xususiyat va oʻlchamlarga toʻgʻridan-toʻgʻri kiritilgan sonlar | ogohlantirish |
| Hech kim ishlatmaydigan parametr | ogohlantirish |
| Vaqtincha oʻchirilgan xususiyat; qaytarish paneli oxirida emas | ogohlantirish |

`--strict` har bir ogohlantirishni xatoga aylantiradi, shuning uchun qurish skripti toʻliq boshqarilmagan detalni rad etishi mumkin.

:::note
`.swb` makrosi chiqishi koʻpchilik sexlar ishlatadigan detal modellash dasturi uchun: oʻsha dasturda ishga tushirilganda detalni u yerda quradi. U bu yerda oʻsha dasturda ishga tushirilmagan (u bizning serverlarimizda mavjud emas), shuning uchun uni sinalmagan deb hisoblang.
:::
