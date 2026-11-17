---
title: Menetek tengelyeken és furatokon, rajzolva vagy modellezve
summary: Tegyen ISO metrikus vagy trapézmenetet bármely kerek lapra, tengelyre vagy furatra. Rajzoláshoz tartsa dekoratívan, vagy 3D-nyomtatáshoz modellezze a valódi csavarvonalú menetet, hézaggal, hogy a nyomtatott darabok összeillenek.
keywords: menet, menetek, modellezett menet, helikális, csavarvonal, csavar, csavarkötés, anya, tengely, furat, külső menet, belső menet, dekoratív menet, metrikus menet, trapéz, acme, vezetőorsó, Tr16x4, M10, 3D nyomtatás, nyomtatás, hézag, illesztés, balmenet, menetes furat
from: 4f6401cc
---

{{ui:Menet}} menetet tesz a kerek lapokra: egy tengely külsejére (külső menet) vagy egy furat belsejére (belső menet). A PartCraft a lapról állapítja meg, melyik.

A menet kezdetben **dekoratív**: a lap sima marad, a nézet a menetet szaggatott körökkel rajzolja, a rajzlap pedig megjegyzi, például „M10×1.5 - 6g, menet 20 hosszú”. Jelölje be a **Modellezett** opciót, hogy a valódi csavarvonalú menet a tengelybe vagy furatba vágódjon, 3D nyomtatáshoz vagy olyan modellhez, amelynek helyesen kell kinéznie.

## Tengely vagy furat menetelése

1. Készítse el a tengelyt vagy a furatot a menet méretében: egy Ø10-es tengely egy M10 csavarhoz, vagy egy Ø8,5-ös furat (a menetfúró) egy M10 anyához.
2. Kattintson a kerek lapra, majd válassza a {{ui:Továbbiak}} › {{ui:Menet}} lehetőséget. Ha nincs kerek lap kijelölve, a PartCraft kéri, hogy kattintson a lapokra, majd nyomja meg a {{ui:Kész}} gombot.
3. A jobb oldali panelen ellenőrizze a **Méret**et. Az **Illesztés a lapra** magától választja ki: tengelynél azt a méretet, amelynek külső átmérője a tengelyé; furatnál azt, amelynek belső átmérőjébe a furat illeszkedik.

A menet a lap nyitott végénél indul, ahol az alkatrész nem folytatódik a tengely mentén: a tengely szabad végénél, a furat szájánál. A **Másik végén kezdje** ezt megfordítja.

## Beállítások

| Beállítás | Választható értékek | Alapértelmezés |
|---|---|---|
| **Forma** | ISO metrikus (60°), M1.6-tól M64-ig, durva; trapéz (Tr, 30°), Tr8×1.5-től Tr60×9-ig | ISO metrikus |
| **Méret** | Illesztés a lapra, vagy egy méret a listából | Illesztés a lapra |
| **A teljes lap** | Ha kikapcsolja, megadhat egy **Hossz (mm)**-et, amelyet a kezdettől mérnek | Bejelölve |
| **Másik végén kezdje** | A menet a lap másik végétől fut | Ki |
| **Menetirány** | Jobbmenetes vagy balmenetes | Jobbmenetes |
| **Modellezett** | A valódi csavarvonalú menet kivágása | Ki |
| **Hézag (mm)** | Akkor látszik, ha a Modellezett be van jelölve: mennyivel kisebb egy tengely menete, és mennyivel nagyobb egy furaté, mindenütt | 0,1 |

Egy méret, amely nem illik a lapra, attól még megépül, a lapra vágva, és a panel ezt jelzi, például „Egy Ø12 mm-es tengely nem az M10 Ø10 mm-e.” Több lap is osztozhat egyetlen Menet jellemzőn; az **Illesztés a lapra** beállítással mindegyik a saját méretét kapja.

## Modellezett menetek 3D nyomtatáshoz

A modellezett menet az alapprofilt követi: metrikus menetnél az ISO 68-1 szerint (lapos csúcsok és gyökök, 60°-os oldalak), trapézmenetnél az ISO 2901 szerint (30°-os oldalak). A **Hézag** az egész profilt befelé tolja (tengelynél) vagy kifelé (furatnál), hogy a nyomtatott darabok összecsavarhatók legyenek:

- **0,1–0,2 mm** a legtöbb nyomtatónak megfelel. Először nyomtasson egy próba csavart és anyát.
- **0** a szabványos profil, megmunkált alkatrészekhez vagy illeszkedés ellenőrzéséhez.

Azonos hézagú csavar és anya oldalai sosem érintkeznek: köztük a rés mindenütt a hézag kétszerese.

:::tip
A finom menetlépték gyengén nyomtatódik: az M3 és kisebb, vagy 0,5 mm-nél kisebb menetlépték közel van ahhoz, amit egy 0,4 mm-es fúvóka ki tud rajzolni. Nagyobb menetet modellezzen, a kicsiknél pedig hőre rögzülő betétet vagy menetes furatot használjon.
:::

A modellezett menet a test része: az STL, a 3MF és a STEP exportok tartalmazzák, és a Mérés eszköz is méri. Lassítja az újraépítést: a 20 hosszú M10 menet körülbelül 150 000 háromszög.

## Menetes furatok

A **Menetes (ISO metrikus)** furatnak is van **Modellezett** kapcsolója, ugyanazzal a **Hézaggal**. Lásd [Furatok és süllyesztések fúrása vázlatpontokban](topic:holes).

## Ha a menet nem épül meg

- „A menet kerek lapra (hengerre) kerül: tengelyre vagy furatra.” A kijelölt lap sík, vagy másképp görbült.
- „Nincs szabványos méret, amely illik az Ø0,6 mm-es kerek lapra: válasszon méretet.” Az illesztés a lapra 12%-on belül sem talált méretet. Válasszon **Méret**et, vagy változtassa meg a lapot.
- „Az a lap, amelyen ez a menet volt, nincs meg (…). Jelölje ki újra.” Egy korábbi módosítás eltávolította a lapot. Kattintson a {{ui:Lapok kijelölése}} gombra, és kattintson újra a lapra.

:::note
Még nincs elkészítve: a collos menetek (UNC, UNF), csőmenetek, kúpos menetek, menetkifutások és letört menetkezdések. A pontos kernel a modellezett menetet dekoratívként mutatja.
:::
