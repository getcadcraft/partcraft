---
title: Konfigurációk és tervtáblázatok
summary: Egy alkatrész több méretét és változatát nevesített konfigurációkként tartsa meg az alkatrészfájlban, minden konfigurációban bekapcsolt vagy kikapcsolt jellemzőkkel; egy kattintással váltson közöttük, vigye be vagy ki CSV-tervtáblázatként, vagy építse mindet parancssorból.
keywords: tervtáblázat, konfigurációk, konfiguráció, méretek, alkatrészcsalád, csv, táblázat, változatok, táblázatvezérelt, letiltás, letiltott, jellemző kikapcsolása, opciók, van vagy nincs, konfigurátor
from: 17249afb
---

A **konfiguráció** az alkatrész egy mérete: a paramétereinek nevesített értékkészlete. Az alkatrész a konfigurációit a saját fájljában tartja, így velük együtt utazik. A **tervtáblázat** ugyanez CSV-fájlként, soronként egy konfigurációval.

A konfigurációk **paramétereket** állítanak be, ezért ezeket adja hozzá először (lásd [Paraméterekkel vezérelje az alkatrészt](topic:parameters)). A konfiguráció azokat a paramétereket tárolja, amelyek egyszerű számok; más paraméterekből kiszámítottak (például `area = w * d`) maguktól követik őket.

## Konfiguráció mentése

1. A {{ui:Paraméterek}} lapon állítsa be az alkatrész egy méretének paramétereit.
2. A **Konfigurációk** alatt írjon be egy nevet (például `Nagy`), és nyomja meg a {{ui:Jelenlegi értékek mentése}} gombot vagy az {{key:Enter}} billentyűt.

Az új konfiguráció **aktívként** jelölődik. Ha utána módosít egy paramétert, az **aktív, azóta módosítva** feliratot kap, így tudja, hogy az alkatrész már nem egyezik vele.

## Váltás, frissítés, átnevezés, törlés

- Az {{ui:Alkalmazás}} a paramétereket az adott konfiguráció értékeire állítja, és újraépíti az alkatrészt.
- Az {{ui:Frissítés}} a jelenlegi értékeket menti az adott konfigurációba.
- Az átnevezéshez írja be az új nevet a mezőjébe, és nyomja meg az {{key:Enter}} billentyűt.
- Az {{ui:Törlés}} eltávolítja a konfigurációt. A paraméterek megtartják az értéküket.

Mindegyik egy lépés: a {{key:Mod+Z}} visszavisz. Ha átnevez egy paramétert, minden konfiguráció követi az új nevet; ha töröl egyet, az kiesik a konfigurációkból.

## Jellemzők be- és kikapcsolása konfigurációban

Egy konfiguráció azt is tárolja, mely jellemzők vannak kikapcsolva, így egy alkatrésznek lehet olyan változata, **amelyben van**, és **amelyben nincs** valami: szerelőfuratok, letörés, kiemelkedés.

1. Kapcsolja ki a jellemzőt: kattintson rá az előzményekben, majd a **Tulajdonságok** alatt az {{ui:Letiltás}} gombra.
2. Mentse a konfigurációt a szokásos módon, például `Furatok nélkül` néven. A sora felsorolja, mit kapcsol ki.
3. Kapcsolja vissza a jellemzőt ({{ui:Letiltás megszüntetése}}), és mentsen egy másik konfigurációt, például `Furatokkal` néven.

Miután valamelyik konfiguráció kikapcsol egy jellemzőt, egy konfiguráció alkalmazása egy lépésben kikapcsolja a saját jellemzőit, minden más jellemzőt pedig bekapcsolja, a paraméterértékeivel együtt. Az olyan konfiguráció, amelyet azelőtt mentettek, hogy bármelyik jellemzőt kikapcsolták volna, „minden bekapcsolva” állapotúnak számít. Az {{ui:Frissítés}} a jellemzőket a jelenlegi állapotukban, az értékekkel együtt menti.

Az olyan alkatrészt, amelynek konfigurációi jellemzőket kapcsolnak ki, újabb fájlverzióként menti: egy régebbi PartCraft azt írja, hogy a fájl újabb verziójú, ahelyett, hogy jellemzők nélkül megnyitná.

:::note
A CSV-tervtáblázat csak a paraméterértékeket tartalmazza. Táblázat importálása egy konfiguráció fölé megváltoztatja annak értékeit, és megtartja a kikapcsolt jellemzőit; a parancssori `--table` csak az értékeket építi.
:::

Az alkatrészfájl a konfigurációkkal és azzal együtt mentődik, amelyik éppen aktív volt. Az alkatrész a mentett értékekkel nyílik meg.

## Tervtáblázat be- és kivitele

A tervtáblázat olyan CSV-fájl, amelyben minden paraméternek oszlopa, minden konfigurációnak sora van:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Az első oszlop neve lehet `name`, `config` vagy `configuration`; minden más oszlopnak az alkatrész egy paraméterének nevét kell viselnie. A cellák számok, ha akarja, mértékegységgel (`8in`). Az üres cella kihagyja a paramétert a sorból.

- Az {{ui:CSV importálása}} minden sort konfigurációként ad hozzá. A létező konfiguráció nevével rendelkező sor felülírja azt. Az importálás egy lépés.
- Az {{ui:CSV exportálása}} kiírja a konfigurációkat. Ha még nincs egy sem, a jelenlegi értékekből ír egy sort, kiindulópontként egy táblázatkezelőhöz.

A táblázatkezelő képletként olvasna egy konfigurációnevet, ha `=`, `+`, `-` vagy `@` jellel kezdődik; az ilyen nevet vezető `'` jellel írja ki.

## Minden méret egyszerre

A **Konfigurációk** alatti {{ui:Változatcsomag…}} gomb minden konfigurációt, vagy egy kiválasztott részüket STEP-, IFC-, DWG- és előnézeti formátumban egy zipbe építi, a paramétereik táblázatával: lásd [Változatcsomag készítése a konfigurációkból](topic:variant-pack).

A parancssori eszköz egy fájlt épít a CSV-tervtáblázat minden sorához:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Először exportálja a konfigurációkat CSV-be, majd adja át a fájlt a `--table` kapcsolóval. Lásd [Szkriptek és a parancssor](topic:scripts-and-cli). A szkriptként mentett alkatrész a konfigurációit egy `configs json …` sorban tartja.
