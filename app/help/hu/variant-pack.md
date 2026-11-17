---
title: Változatcsomag készítése a konfigurációkból
summary: Egy alkatrész minden konfigurációját, vagy egy kiválasztott részét egyszerre építse meg STEP, IFC, DWG és előnézet formában, paramétereik táblázatával, és az alkatrészt egy könyvtári elemként, a változataival együtt.
keywords: változatcsomag, változatok, konfigurációk, alkatrészcsalád, kötegelt exportálás, minden méret, step, ifc, dwg, előnézet, táblázat, csv, json, könyvtár, konfigurátor, termékkonfigurátor, katalógus, elem json
from: 9a6db99f
---

## Mit fog csinálni

Adja át egyszerre **egy alkatrész minden méretét**: egy STEP-, IFC- és DWG-fájlt és egy képet minden konfigurációhoz, egy táblázatot, amely megmondja, mi melyik, és egy könyvtári elemet, amely mindegyiket egy oldalon mutatja.

Először szüksége van egy alkatrészre **konfigurációkkal** (lásd: [Konfigurációk és tervtáblázatok](topic:design-tables)). Az a konfiguráció, amely kikapcsol egy jellemzőt, például egy lemez furatokkal és furatok nélkül, saját változattá válik.

## Lépések

1. Nyissa meg az alkatrészt. A {{ui:Parameters}} lapon keresse meg a **Konfigurációk** részt.
2. Kattintson a {{ui:Variant pack…}} gombra.
3. Jelölje be az építendő konfigurációkat (mind be van jelölve), és a kiírandó fájlokat: STEP, IFC, DWG, előnézet és a könyvtári elem.
4. Kattintson a {{ui:Make the pack}} gombra. Az állapotsor a változatokat számolja, ahogy épülnek; az alkatrész nem változik.
5. Egy zip-fájl töltődik le: `<part> variants.zip`.

## Mi van a zip-fájlban

| Fájl | Mi ez |
|---|---|
| `<name>.step` | A konfiguráció STEP-testként. |
| `<name>.ifc` | IFC4, egy elem a felépített testtel, és az alkatrész paraméterei tulajdonságként; az érték az adott konfigurációé. |
| `<name>.dwg` | Az elölnézet, a felülnézet, a jobb oldali nézet és az izometrikus nézet rajzlapként, teljes méretben. |
| `<name>.svg` | Egy izometrikus vonalas kép róla. |
| `variants.csv`, `variants.json` | A paramétertáblázat: minden változat azonosítója, neve és minden paraméterének értéke, a jellemzők, amelyeket kikapcsol, a fájljai, térfogata és mérete. |
| `<part>.item.json` | Az alkatrész egy könyvtári elemként a változataival (lásd alább). |
| `README.txt` | Mi készült, az alábbi megjegyzések, és ami nem épült meg. |

A fájlok a konfiguráció nevét kapják. Az a konfiguráció, amely nem épül meg (egy jellemző, amely ezekkel az értékekkel nem készíthető el), kimarad a fájlokból és a táblázatból, a README-ben és a zip mentése után megjelenő üzenetben szerepel; a többi továbbra is kiíródik.

## Jó tudni

- **STEP** akkor pontos, ha a build pontos kernele be van kapcsolva. Enélkül a STEP lapokra bontott (lapos háromszögekből áll), és a README ezt jelzi.
- **A DWG** rajzlap, nem 3D-s modell. Vonalai a hálóból származnak, így egy görbe él sok rövid vonal.
- **A könyvtári elem** változatonként egy testet és egy alaprajzot tartalmaz, a könyvtár saját tengelyeiben: a Z felfelé, az elöl a −Y felé, a beillesztési pont pedig az alsó rész hátsó oldalának közepén van. Az alaprajz minden változat határoló téglalapja. Egy elem legfeljebb 8 MB, így egy nagyon nehéz változat a méretének megfelelő dobozzá válik, a README pedig megmondja, hányról van szó.
- Az alkatrész aktív konfigurációja lesz az elem alapértelmezett változata.
- A csatlakozók (a csővezetékek és légcsatornák csatlakozási pontjai) nincsenek beállítva a PartCraftból.

## A változatok könyvtári oldalon

Töltse fel a `<part>.item.json` fájlt a webhely **Könyvtár › Feltöltés** menüpontjában. Válassza ki a kategóriáját, a licencét és a forrásmegjelölését, és az elem könyvtári elemmé válik a változataival. A BimCraftban az elhelyezés megkérdezi, melyik változat kell, a Csere pedig a többit kínálja. Az az oldal, ahol a látogatók beállításokat választhatnak, megtekinthetik a 3D-s nézetet és letölthetnek egy változatot, egyelőre **munkatársi előnézet**: még nem nyilvános.

## Parancssorból

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

A `--only` a konfigurációkat nevezi meg, a `--formats` a `step`, `ifc`, `dwg`, `preview` közül bármelyiket fogadja, a `--no-item` pedig kihagyja a könyvtári elemet. Mappát, zip-fájlt vagy mindkettőt ír, és 1 értékkel lép ki, ha egy változatot nem lehetett elkészíteni. Lásd: [Szkriptek és a parancssor](topic:scripts-and-cli).
