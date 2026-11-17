---
title: Test kihúzása és átvágása
summary: Alakítson vázlatot testté a Kihúzással, állítsa be a vak, középsíkos, adott pontig vagy kétirányú mélységet, a lejtést vagy a vázlat egy körvonalát, majd rajzoljon vázlatot egy lapra, és vágjon zsebet vagy átmenő hornyot a Kivágással.
keywords: kihúzás, test, kihúzott test, kivágás, kihúzott kivágás, zseb, teljesen átmenő, vak, középsík, megfordítás, mélység, kivágás-kihúzás, test-kihúzás, lemez, lapig, következő lapig, csúcsig, lapról eltolva, irány 2, két irány, lejtés kihúzáskor, lejtés, körvonal, tartomány, kiválasztott körvonalak
from: 3b13ff10
---

A {{ui:Extrude}} a vázlat zárt profilját kitolja a síkjából, így anyagot hoz létre. A {{ui:Cut}} ugyanezt teszi, de anyagot távolít el. Mindkettő ugyanaz a jellemző, később át is válthat az egyikről a másikra.

## Test kihúzása

1. Rajzoljon zárt profilt, és zárja le a vázlatot (lásd [Az első vázlat megrajzolása](topic:sketch-basics)). A vázlat kijelölve marad.
2. Válassza az {{ui:Extrude}} lehetőséget.

Megjelenik egy 10 mm-es test, az „Extrude1” bekerül az előzmények közé a vázlatával behúzva alá, az állapotsor pedig ezt írja: „Az Extrude1 hozzáadva. A számait a jobb oldalon módosíthatja.”

**Melyik vázlat kerül felhasználásra:** az, amelyet most zárt le, vagy az előzményekben kijelölt vázlat. Ha nincs semmi kijelölve, a PartCraft a legutóbbi olyan vázlatot veszi, amelyet még egyetlen jellemző sem használ. Ha nincs ilyen: „Előbb készítsen vázlatot: válasszon síkot, a Vázlat, rajzoljon zárt profilt, majd Kilépés.”

### A mélység és az irány beállítása

A jobb oldali panelen:

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| **Művelet** | Boss (anyag hozzáadása), Kivágás (anyag eltávolítása), Közös rész (az átfedés megtartása), Új test (ebben a verzióban még nincs elkészítve: pontos kernelt igényel) | Boss |
| **Vég** | Vak (adott mélység), Középsík (mindkét irányba), Teljesen átmenő, Lapig vagy síkig, Következő lapig, Csúcsig, Eltolás a laptól | Vak |
| **Mélység (mm)** | Bármely nulla feletti méret (Vak és Középsík esetén látszik) | 10 |
| **Irány megfordítása** | A vázlatsík másik oldalára nő (Középsík esetén nincs megjelenítve) | Ki |

Írjon be egy számot, majd nyomja meg az {{key:Enter}} vagy a {{key:Tab}} billentyűt: az alkatrész azonnal újraépül. A **Középsík** a mélység felét a vázlat mindkét oldalára osztja.

### Lapig, következő lapig vagy csúcsig

Ebben a verzióban még nincs elkészítve: minden „adott pontig” vég pontos kernelt igényel, a jellemző pedig ezt írja: „Kihúzás lapig, következő lapig vagy csúcsig: még nincs elkészítve (pontos kernelt igényel).” Használjon megmért vak mélységet. Pontos kernel esetén a végek így működnek:

- **Lapig vagy síkig**: a **Lapig** egy sík lapot (kijelölés, majd kattintás rá) vagy egy referenciasíkot vesz fel. A vázlattal párhuzamos lap pontos mélységet ad; a ferde lap a lejtőn vágja le a véget. Ha a lap a vázlat mögött van: „… Próbálja az Irány megfordítása beállítást.”
- **Következő lapig**: megáll a kihúzás által érintett test első sík lapjánál (a görbe lapokat itt nem támogatja, ezt jelzi is).
- **Csúcsig**: egy csúcs szintjénél áll meg (kattintson egy él vége közelében) vagy egy pontjellemzőnél.
- **Lapról eltolva**: mint a Lapig, de az **Eltolás (mm)** értékkel a lap előtt áll meg (a lapra merőlegesen mérve).

### Két irány, lejtés, egy körvonal

- **Második irány** (Vak): a vázlat másik oldalára is kihúz a **Második mélység (mm)** értékkel.
- **Lejtés (°)**: az oldalak a haladás irányában befelé dőlnek (negatív érték: kifelé), mint egy húzási szög; csak egy irányban működik. Ebben a verzióban még nincs elkészítve (pontos kernelt igényel): hagyja 0 értéken.
- **Tartományok**: a **Tartományok kijelölése** gombra kattintva, majd a kihúzandó hurkok belsejébe kattintva csak ezek a tartományok kerülnek felhasználásra (egy négyzetbe írt kör esetén a kör belsejébe kattintva henger, a kettő közé kattintva lyukas lemez készül). Az **Összes** visszaállítja az összes hurkot.

Ezek alatt a **Vázlatméretek** a vázlat vezérlő méreteit sorolja fel, így a profil méreteit a vázlat megnyitása nélkül is módosíthatja.

:::note
**A Teljesen átmenő csak kivágásnál használható.** Ha egy boss-jellemzőt Teljesen átmenőre állít, a következő hibaüzenet jelenik meg: „A Teljesen átmenő kivágáshoz való. Bossnál adjon meg mélységet.” Ha a jellemzőt Kivágásról vissza Bossra állítja, a Teljesen átmenő automatikusan Vakra változik.
:::

## Zseb kivágása

1. Kattintson arra a sík lapra, amelybe vágni szeretne. A lap kiemelkedik, a jobb oldali panel pedig **Lap** feliratot mutat.
2. Válassza az {{ui:Sketch on this face}} lehetőséget (vagy az eszköztár {{ui:Vázlat}} gombját).
3. Rajzolja meg a zseb körvonalát, például egy téglalapot, és adja meg a méreteit.
4. Válassza az {{ui:Exit}} lehetőséget (Kilépés).
5. Válassza a {{ui:Cut}} lehetőséget. Kezdetben **Teljesen átmenő** értéken áll: az alkatrészen keresztül teljesen eltávolít anyagot.
6. Zsebhez állítsa az **Vég** beállítást **Vak (adott mélység)** értékre, és írja be a **Mélység (mm)** értékét.

A kivágás az anyagba megy, a vázlatozott laptól elfelé. Ha az állapotsor ezt írja: „Ezen a vázlatoldalon nincs mit kivágni. Próbálja a másik irányt.”, jelölje be az **Irány megfordítása** beállítást.

A zseb aljára rajzolt vázlat követi az aljat: ha módosítja a zseb mélységét, a vázlat vele mozog.

## Egy teljes lap kihúzása vagy benyomása

Ha egy lapot ki akar emelni vagy be akar süllyeszteni, nem kell a körvonalát megrajzolnia. Kattintson a sík lapra, majd a jobb oldali panelen:

- Az {{ui:Extrude from it}} kihúzza a lapot: a PartCraft vázlatot ad a lapra a körvonalával (a lapon lévő furatok furatok maradnak), és 10 mm-es Kihúzást.
- Az {{ui:Cut into it}} benyomja a lapot: ugyanez a vázlat és egy kivágás, amely a test felébe nyúlik.

Mindkettő egy lépésben történik: a {{key:Mod+Z}} egyszerre visszavonja a vázlatot és a jellemzőt. Az új jellemző kijelölt, így azonnal írhat be számot, és az {{key:Enter}} billentyűvel megadhatja a mélységét. A körvonal rögzített vonalakként és ívekként másolódik: nem követi a lap későbbi módosításait. Ha a körvonal egy része nem másolható (szabad görbe), a vázlat a másolható részekkel nyílik meg; fejezze be, majd válassza az {{ui:Exit}} lehetőséget, és az {{ui:Extrude}} vagy {{ui:Cut}} gombot.

## Szigetes profilok

Egy vázlat több zárt hurkot is tartalmazhat. Egymás melletti hurkok külön testeket (vagy kivágásokat) hoznak létre; egy másik hurkon belül lévő hurok furatot képez a testen át. Például egy téglalap két benne lévő körrel lyukas lemezként húzódik ki két furattal.

Ha csak néhány hurkot akar felhasználni, válassza ki őket a **Tartományok** segítségével (lásd fent); egy másik jellemző ugyanannak a vázlatnak a többi hurkját használhatja.

## Utólagos szerkesztés

- Kattintson az előzményekben az „Extrude1” elemre, hogy visszahozza a beállításait.
- Kattintson duplán a hozzá tartozó vázlatra (a név alatt behúzva), hogy megnyissa a vázlatot; a bezárás után újraépül.
- A kikapcsoláshoz, visszagörgetéshez, átrendezéshez és törléshez lásd: [Az alkatrész módosítása az előzményeken keresztül](topic:edit-history).

## Gyakori üzenetek

| Üzenet | Teendő |
|---|---|
| „A vázlatban nincs kihúzható zárt profil.” | A vázlatban nincs zárt hurok tömör vonalakból. Zárja be a réseket, vagy állítsa vissza a szerkesztési vonalakat a {{key:Q}} billentyűvel |
| „A profil nyitott: egy vége ((x, y)) nincs semmihez csatlakoztatva.” | Nyissa meg a vázlatot, és kösse össze azt a véget a következő vonallal |
| „Még nincs mit kivágni.” | Kivágáshoz kell egy test, amelyből vágni lehet. Készítsen előbb egy Boss-jellemzőt |
| „Ezután már nem maradt semmi az alkatrészből.” | A kivágás mindent eltávolított. Ellenőrizze a méretét és az irányát |

További információ: [Hibaelhárítás](topic:troubleshooting).
