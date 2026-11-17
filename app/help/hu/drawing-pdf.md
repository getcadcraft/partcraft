---
title: Rajz készítése nézetekkel, metszettel és GD&T-vel
summary: Nyissa meg a rajzlapot, adjon hozzá metszetet és részletnézetet, helyezzen el adatsíkokat, illesztési keretet és felületi érdesség jeleket, válassza ki a lap méretét, töltse ki a rajzfejet és a revíziókat, majd exportálja a lapot PDF-ként.
keywords: furattáblázat, furatlista, furatpozíciók, címkék, rajz, 2D rajz, rajzlap, lapméret, a4, a3, a2, a1, a0, ansi, rajzfej, revízió, revíziófej, rajzszám, anyag, pdf, nézetek, merőleges vetület, harmadik szögű vetület, axonometria, metszeti nézet, részletnézet, gd&t, adatsík, illesztési keret, tűrés, pozíció, síkság, felületi érdesség, érdesség, rajzfej, nyomtatás
from: 39e944c0
---

A PartCraft az alkatrészből rajzlapot készít: elölnézet, felülnézet és jobb oldali nézet harmadik szögű vetítésben, egy axonometrikus nézet, befoglaló méretek és rajzfej A4-től A0-ig vagy ANSI A-tól E-ig terjedő lapon. Ezen felül hozzáadhat metszetet, részletnézetet és GD&T jeleket. A lap követi az alkatrész változásait, a beállításai pedig az alkatrész fájlban mentődnek.

## Rajzlap megnyitása

1. Építse meg az alkatrészt. (Ha nincs felépítve semmi: „Előbb építsen testet, majd készítse el a rajzát.”)
2. Válassza a {{ui:Rajz}} lehetőséget az eszköztárban.

A 3D nézet helyére a lap kerül. Az eszköztárban a {{ui:Datum}}, {{ui:Keret}}, {{ui:Felületkezelés}}, {{ui:Részlet}}, {{ui:PDF}} és {{ui:Vissza}} gombok láthatók, a jobb oldali panel fejléce pedig **Rajz**. Az állapotsor megmondja, hogyan készültek a nézetek: „Rajz (a görbék szakaszokból vannak rajzolva). A Datum, a Keret és a Felületkezelés GD&T jelet helyez el nézeten; a panel metszetet és részletnézetet állít be.” A nézetek a hálómag felületeiből készülnek, így a lekerekített élek rövid egyenes szakaszok; a valódi ívekhez pontos mag kell, amely ebben a verzióban nincs.

A lapon így mozoghat: görgetéssel nagyít, a jobb vagy a középső gombbal húzva mozgat, az {{key:F}} megnyomásával a lapot illeszti. Ha a lap fókuszban van, a {{key:Plus}} és a {{key:Minus}} nagyít és kicsinyít, a {{key:Shift}} a nyilakkal pedig mozgat.

A {{ui:Vissza}}, a {{ui:Vissza a modellhez}} vagy az {{key:Esc}} megnyomása (ha nincs kijelölés és nincs aktív eszköz) visszaviszi a 3D modellre.

## Mi van a lapon

- **Az Ön által választott lap**, fekvő tájolásban (ha nem választ mást, A3), kerettel és **rajzfejjel**: cím, cég, rajzszám, revízió, anyag, rajzolta / ellenőrizte / jóváhagyta, dátum, léptékarány, lapméret, „Mértékegység: milliméter · Harmadik szögű vetítés”, és az, hogy a nézetek pontosak vagy szakaszosak-e.
- Egy **revíziófej** a jobb felső sarokban, amint felvesz revíziót.
- **Elölnézet, felülnézet és jobb oldali nézet**: a felülnézet az elölnézet fölött, a jobb oldali nézet annak jobb oldalán. A takart élek szaggatottak.
- Egy **axonometrikus nézet**, ahol van rá hely.
- **Befoglaló méretek**: szélesség és magasság az elölnézeten, mélység a felülnézeten.
- Egy **léptékarány** a fő nézetekhez az ISO-sorozatból (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), úgy választva, hogy a nézetek elférjenek.

## A lap méretének kiválasztása

A rajzlapon, kijelölés nélkül, a jobb oldali panelen válassza a {{ui:Lap}} részt: **A4, A3, A2, A1, A0** (ISO 216) vagy **ANSI A, B, C, D, E** (11 × 8,5 és 44 × 34 hüvelyk között). A nézetek a legnagyobb olyan ISO-léptékben rendeződnek újra, amely elfér, így egy nagyobb lapon az alkatrész nagyobban látszhat.

## A rajzfej kitöltése

A jobb oldali panel **Rajzfej** mezői közvetlenül a lapra kerülnek: {{ui:Cím}}, {{ui:Rajzszám}}, {{ui:Revízió}}, {{ui:Cég}}, {{ui:Rajzolta}}, {{ui:Ellenőrizte}}, {{ui:Jóváhagyta}}, {{ui:Dátum}} (év-hónap-nap), {{ui:Általános tűrés}} és {{ui:Felületkezelés}} (az utolsó kettő közvetlenül a rajzfej fölött nyomtatódik). Írjon egy mezőbe, és nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshova. Az üres mező üresen hagyja a cellát, kivéve:

- A **Cím** az alkatrész nevét mutatja, amíg nem ír be másikat.
- A **Dátum** a mai napot mutatja, amíg nem ír be másikat.
- A **Revízió** a listában lévő legújabb revíziót mutatja, amíg nem ír be másikat.

Az **anyag** az alkatrészből jön: kattintson a modell üres részére, majd a Alkatrész panelen válassza az {{ui:Anyag}} lehetőséget. Ugyanaz az anyag adja a Mérés tömegtulajdonságainak sűrűségét.

## Revíziók hozzáadása

A **Revíziók** részben kattintson a {{ui:Revízió hozzáadása}} gombra. Minden új sor a következő betűt kapja (A, B, C …, Z után AA), és a mai dátumot. Írja be, mi változott, és ki végezte a változtatást. A {{ui:Törlés}} eltávolítja a sort. A lap jobb felső sarkában lévő revíziófej legfeljebb 20 revíziót sorol fel, a legrégebbitől a legújabbig.

A lapméret, a rajzfej, a revíziók és az anyag az alkatrész fájlban mentődnek, és minden változtatás a {{ui:Visszavonás}} egy lépése.

## Metszeti nézet hozzáadása

Az alkatrészt egy sík metszi, a metszet pedig sraffozott. A többi nézethez hasonlóan a metszet is a felületekből készül, így a lekerekített élek rövid egyenes szakaszok.

1. A jobb oldali panelen állítsa a **Metszet A-A** értékét **Az elölnézetből**, **A felülnézetből** vagy **A jobb oldali nézetből** értékre.
2. A metszet megjelenik a lapon, sraffozva ott, ahol a vágás anyagon halad át, a vágóvonallal és az „A” nyilakkal azon a nézeten, ahonnan készült.
3. A **Vágás helye (mm)** beállításával mozgassa a vágósíkot. Kezdetben az alkatrész közepén halad át.

A metszet eltávolításához állítsa a **Metszet A-A** értékét **Nincs** értékre.

## Részletnézet hozzáadása

1. Állítsa a **Részlet B** értékét a nagyítandó nézetre (vagy válassza az eszköztár {{ui:Részlet}} gombját).
2. Kattintson a nagyítandó terület közepére azon a nézeten. Egy „B” feliratú kör jelöli, a nagyított **Részlet B** pedig a lapon jelenik meg a saját léptékével, például „Részlet B (2:1)”.
3. Állítsa be a **Részlet sugara (mm)** értéket a kör méretéhez, és a **Részlet léptéke** értéket a nagyításhoz: a lap 2, 4, 5 vagy 10 szerese.

A részlet az elölnézetről, a felülnézetről, a jobb oldali nézetről vagy a metszetről vehető, az axonometrikus nézetről nem. Ha nincs hely minden nézetnek, a panel ezt írja: „Nincs hely a lapon a következőnek: részlet. Készítse kisebbre a részletet, vagy hagyjon el egy nézetet.”

## Furattáblázat hozzáadása

A furattáblázat felsorolja az alkatrész furatait a helyzetükkel együtt, fúráshoz vagy CNC-hez: a panelen válassza a **Furattáblázat** › **A felülnézetből** (vagy elölnézet, jobb oldali nézet) lehetőséget.

- Minden olyan furat, amely abban a nézetben élére merőlegesen látszik, a mellette lévő címkét kap: **A1**, **A2** … az első mérethez, **B1** … a következőhöz.
- A táblázat felsorolja minden címkét, annak **X** és **Y** értékét milliméterben, valamint a méretét: „Ø14 ÁTMENŐ”, „Ø6.6 × 10 MÉLY”, egy süllyesztett furat vagy egy menetes furat menetjelölése.
- Az X és Y a nézet körvonalának bal alsó sarkától mérődik, amelyet a lapon **X0 Y0** jelöl.
- A mintákkal létrehozott furatok is szerepelnek. Azok a furatok, amelyek nem merőlegesek a nézetre, a panelen megszámlálódnak, és kimaradnak a táblázatból.

A táblázat a lap egy szabad területére és a PDF-be kerül.

## GD&T és felületi érdesség jelek elhelyezése

1. Válassza a {{ui:Datum}}, a {{ui:Keret}} (egy illesztési keret) vagy a {{ui:Felületkezelés}} (egy felületi érdesség jel) lehetőséget.
2. Kattintson arra a pontra a nézeten, ahol csatlakoznia kell. 2,5 mm-en belül a legközelebbi rajzolt vonalhoz illeszkedik.
3. A jel vezetővonallal jelenik meg, kijelölve, a jobb oldali panel pedig megmutatja a beállításait.

Húzza a jelet a mozgatáshoz; vezetővonala továbbra is a pontra mutat. Kijelölt jel esetén a nyilakkal 1 mm-t mozdíthatja. A {{key:Delete}} vagy a {{key:Backspace}} (vagy a panelen a {{ui:Törlés}}) eltávolítja; a {{ui:Kész}} vagy az {{key:Esc}} megszünteti a kijelölést. Minden változtatás a visszavonási listában van.

### Datum

**Betű**: A-tól Z-ig, az I, O és Q nélkül (ezek 1-hez, 0-hoz és O-hoz hasonlítanak). Minden új adatsík a következő szabad betűt kapja.

### Illesztési keret

| Beállítás | Választható értékek |
|---|---|
| **Tűrés** | Egyenesség, Síkság, Körkörösség, Hengeresség, Vonal profilja, Felület profilja, Merőlegesség, Szögeltérés, Párhuzamosság, Pozíció, Koncentrikusság és Szimmetria (mindkettő törölve az Y14.5-2018-ban, és ezt jelölve), Körkifutás, Teljes kifutás |
| **Zóna (mm)** | A tűrés értéke, alapértelmezés 0,1 |
| **Átmérőzóna (⌀)** | Hengeres zónával rendelkező jellemzőknél; a Pozíciónál alapból bekapcsolva |
| **Anyag** | RFS (nincs), MMC (Ⓜ), LMC (Ⓛ), ahol a jellemző megengedi |
| **Elsődleges / Másodlagos / Harmadik adatsík** | Legfeljebb három adatsíkbetű, mindegyikhez egy **… módosító** (MMB, LMB), ahol megengedett |

A PartCraft az ASME Y14.5 szabályai szerint ellenőrzi a keretet, és a panel tetején megmondja, mi a hiba, például: „A síkság alaki tűrés: nem tartalmaz adatsík-hivatkozást.” vagy „A pozícióhoz legalább egy adatsík-hivatkozás szükséges.” A **Olvasat** sor leírja a keretet.

### Felületkezelés

| Beállítás | Választható értékek | Alapértelmezés |
|---|---|---|
| **Ra (µm)** | Átlagos érdesség | 1,6 |
| **Eljárás** | bármely eljárás, megmunkált, nincs anyageltávolítás | megmunkált |
| **Megjegyzés** | Legfeljebb 40 karakter, például irányítás vagy eljárás | |

Kijelölés nélkül a panel felsorolja a **Megjegyzések a lapon** részt, mindegyik **Kijelölés** gombbal.

## PDF exportálása

Válassza az eszköztár {{ui:PDF}} gombját, a panelen a {{ui:PDF exportálása}} gombot, vagy az {{ui:Exportálás}} gombot, majd a modellből a {{ui:Rajz (PDF): nézetek, metszet, részlet, GD&T}} lehetőséget. A PDF `<alkatrész neve> - drawing.pdf` néven töltődik le, az állapotsor pedig felsorolja, mi van rajta.

„Valódi méret” beállítással nyomtassa ki a lap méretének megfelelő papírra, hogy a lépték helyes maradjon.

## Korlátok

| Még nincs elkészítve | Mit tegyen most |
|---|---|
| A három befoglaló méreten kívüli méretek | Adja hozzá a PDF-re egy jelölő alkalmazással, vagy exportálja a vázlatot vagy a felületet DXF-ként, és méretezze egy 2D CAD programban |
| Több mint egy metszet vagy részlet; kitört, segéd- és vetített nézetek | Nem elérhető |
| Első szögű vetítés, mozgatható nézetek, álló lapok | Harmadik szög, automatikus elrendezés, fekvő tájolás |
| Szabad szöveges megjegyzések és táblázatok a lapon (a cím- és revíziófejen kívül) | Használja a felületkezelési megjegyzést, vagy adjon szöveget a PDF-hez |
| Összeállítások rajzai | Nem elérhető |

A Nyugat-európai készleten kívüli karakterek „?” jelként nyomtatódnak (a PDF az olvasó beépített Helvetica betűtípusát használja). A GD&T jelek vonalakból készülnek, így minden olvasóban nyomtathatók.

## Hagyja, hogy a lap elvégezze

- A **Lap › Automatikus** kiválasztja Ön helyett a papírt: a legnagyobb szabványos léptéket 1:1-ig, a legkisebb A-méretű lapon, amely ezen a léptéken elfér (a lista megmutatja, melyiket választotta).
- A **Furatok méretezése** a furatokat méretezi azon a nézeten, amelyen a legtöbb furat élére merőlegesen látszik: minden furathoz középjel, méretenként egy hivatkozás („2× Ø6 ÁTMENŐ” vezetővonallal), és a helyzetük a nézet bal alsó sarkától mérve. A teljes szélesség, magasság és mélység mindig megjelenik.
