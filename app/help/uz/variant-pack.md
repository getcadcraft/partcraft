---
title: Konfiguratsiyalaringizdan variantlar toʻplamini yarating
summary: Detalning barcha konfiguratsiyalarini yoki tanlanganlarini bir vaqtning oʻzida STEP, IFC, DWG va har biriga oldindan koʻrinish sifatida, parametrlar jadvali va variantlari bilan bitta kutubxona elementi sifatida yarating.
keywords: variant toʻplami, variantlar, konfiguratsiyalar, detallar oilasi, ommaviy eksport, har oʻlcham, step, ifc, dwg, oldindan koʻrinish, jadval, csv, json, kutubxona, konfigurator, mahsulot konfiguratori, katalog, element json
from: 9a6db99f
---

## Nima qilasiz

Detalning **barcha oʻlchamlarini bir vaqtda** topshirasiz: har bir konfiguratsiya uchun bitta STEP, IFC va DWG fayl hamda rasm, har birining nimaligini koʻrsatadigan jadval va hammasini bir sahifada joylashtiradigan kutubxona elementi.

Avval **konfiguratsiyali** detal kerak (qarang: [Konfiguratsiyalar va loyiha jadvallari](topic:design-tables)). Elementni oʻchirib qoʻyadigan konfiguratsiya, masalan teshiklari bor va teshiklarsiz plastina, oʻz varianti boʻladi.

## Qadamlar

1. Detalni oching. {{ui:Parametrlar}} yorligʻida **Konfiguratsiyalar** ni toping.
2. {{ui:Variantlar toʻplami…}} tugmasini bosing.
3. Qurish uchun konfiguratsiyalarni (hammasi belgilangan) va yoziladigan fayllarni belgilang: STEP, IFC, DWG, oldindan koʻrinish va kutubxona elementi.
4. {{ui:Toʻplamni yaratish}} tugmasini bosing. Holat qatori variantlar qurilgancha ularni sanaydi; detalingiz oʻzgarmaydi.
5. Bitta zip yuklab olinadi: `<part> variants.zip`.

## Zipda nima bor

| Fayl | Nima |
|---|---|
| `<name>.step` | Konfiguratsiya STEP jism sifatida. |
| `<name>.ifc` | IFC4, qurilgan jism va detal parametrlari xossa sifatida bitta elementda; qiymat shu konfiguratsiyaning oʻziniki. |
| `<name>.dwg` | Old, yuqori, oʻng va izometrik koʻrinishlar toʻliq oʻlchamda chizma varagʻi sifatida. |
| `<name>.svg` | Uning izometrik chiziqli rasmi. |
| `variants.csv`, `variants.json` | Parametrlar jadvali: har bir variantning ID, nomi va har bir parametr qiymati, oʻchirib qoʻyadigan elementlari, fayllari, hajmi va oʻlchami. |
| `<part>.item.json` | Detal variantlari bilan bitta kutubxona elementi sifatida (quyida qarang). |
| `README.txt` | Nima yaratilgani, quyidagi izohlar va qurilmagan narsalar. |

Fayllar konfiguratsiya nomi bilan nomlanadi. Qurilmaydigan konfiguratsiya (ushbu qiymatlar bilan yaratib boʻlmaydigan element) fayllar va jadvaldan chiqarib tashlanadi, README da va zip saqlangandan keyingi xabarda koʻrsatiladi; qolganlari baribir yoziladi.

## Bilib qoʻyish foydali

- **STEP** aniq yadro versiyangizda yoqilgan boʻlsa aniq boʻladi. Yoqilmagan boʻlsa STEP faset boʻladi (tekis uchburchaklar) va README buni aytadi.
- **DWG** 3D model emas, chizma varagʻi. Uning chiziqlari meshdan olinadi, shuning uchun egri qirra koʻp qisqa chiziqlardan iborat boʻladi.
- **Kutubxona elementi** har bir variant uchun bitta jism va bitta asos saqlaydi, kutubxonaning oʻz oʻqlarida: Z yuqoriga, old tomoni −Y tomonga, kiritish nuqtasi esa pastdagi orqa tomonning oʻrtasida. Plan har bir variantning oʻrab turuvchi toʻgʻri toʻrtburchagi. Element 8 MB bilan cheklangan, shuning uchun juda ogʻir variant oʻz oʻlchamidagi qutiga aylanadi va README nechta ekanini aytadi.
- Detalning faol konfiguratsiyasi elementning standart varianti boʻladi.
- Portlar (quvur va havo kanallari uchun ulanish nuqtalari) PartCraft dan belgilanmaydi.

## Variantlarni kutubxona sahifasiga joylashtiring

Saytdagi **Kutubxona › Yuklash** boʻlimida `<part>.item.json` ni yuklang. Uning toifasi, litsenziyasi va muallif yozuvini tanlang, shunda u variantlari bilan Kutubxona elementiga aylanadi. BimCraft da uni joylashtirganda qaysi variant kerakligi soʻraladi va Almashtirish boshqalarini taklif qiladi. Tashrif buyuruvchilar variantlarni tanlaydigan, 3D ni koʻradigan va yuklab oladigan sahifa hozircha **xodimlar uchun oldindan koʻrinish**: u hali ommaga ochiq emas.

## Buyruq satridan

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` konfiguratsiyalar nomini beradi, `--formats` esa `step`, `ifc`, `dwg`, `preview` dan istalganini; `--no-item` kutubxona elementini chiqarib tashlaydi. U jild, zip yoki ikkalasini ham yozadi va variant qurilmasa 1 kodi bilan tugaydi. Qarang: [Skriptlar va buyruq satri](topic:scripts-and-cli).
