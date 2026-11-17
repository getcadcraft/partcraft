---
title: Szabad alakzatok a Form-mal, és felületi jellemzők
summary: Tolja és húzza a sima vezérlőketrecet a Form munkaterületen, élesítsen éleket, használjon szimmetriát, majd ellenőrizze és fejezze be pontos testté vagy felületté. A Tervezésben foltozzon, áthúzzon, varrjon össze, vastagítson, ofszetteljen, hosszabbítson és vágjon felületeket. Mi pontos és mi közelítő.
keywords: form, szabad alak, t-spline, felosztásos felület, catmull-clark, ketrec, quadball, élesítés, szimmetria, zebra, görbület, felület, folt, kitöltés, áthúzott felület, varrás, vastagítás, ofszet felület, hosszabbítás, vágás
from: 0d326ef4
---

:::note
**Ebben a verzióban még nincs elkészítve.** A forma alkatrészbe véglegesítése és a felületi jellemzők pontos geometriai magot igényelnek, amely ebben a PartCraft-verzióban nincs meg: minden alkatrészt a hálómaggal épít. [Mi még nincs elkészítve](topic:not-built-yet) leírja, mit tegyen helyette. A többi rész azt írja le, hogyan működik pontos maggal.
:::

A **Form** munkaterület szerves alakzatokat készít. Egy **ketrecet** szerkeszt, ami sarkokból, élekből és lapokból álló, durva háló. Az alakzat az a sima felület, amelyet a ketrec irányít (a Catmull–Clark-határfelület), így egy sarok mozgatása finoman meghajlítja a felületet körülötte. Ha jó, a **Felületkezelés** a *Form* jellemzőként hozzáadja az alkatrész előzményeihez, a pontos mag pedig valódi B-spline-felületekké alakítja. Ezután lekerekíthető, levágható, más jellemzőkhöz csatlakoztatható, és STEP-ként exportálható.

Válassza a **Form** elemet a **Munkaterület** listából az eszköztár bal oldalán.

## Ketrec indítása

1. Állítsa be a **Méret** és a **Felosztás** értékét a jobb oldali panelen. A felosztás azt adja meg, hány lapra oszlik minden oldal.
2. Kattintson az eszköztár {{ui:Doboz}}, {{ui:Négyszöggömb}} vagy {{ui:Sík}} gombjára. A panelen ezenkívül van a **Henger**, a **Tórusz** és a **Lapok kattintással**.

- A **Négyszöggömb** egy dobozszerű ketrec, amelynek sarokpontjai egy gömbön fekszenek. Ezek között a felület kicsit a gömbön belül van: kb. 0,4%-kal kisebb térfogat 2 felosztásnál.
- A **Sík** nyitott, ezért felületi testté válik (lásd lent: „Felületi jellemzők a Tervezésben”).
- **Lapok kattintással**: kattintson 4 pontot a felső (talaj) síkon vagy a ketrec sarkain, hogy egy lapot hozzon létre. A közös sarkokkal rendelkező lapok összekapcsolódnak. 3 pont után nyomja meg az {{key:Enter}} billentyűt háromszöghöz, vagy az {{key:Esc}} billentyűt a befejezéshez.

A befejezetlen ketrec az alkatrészfájllal együtt mentődik, így bezárhatja a fájlt, és később folytathatja.

## Kijelölés és mozgatás

- Kattintson a ketrec egyik sarkára, élére vagy lapjára. A {{key:Shift}}+kattintás hozzáad vagy elvesz elemeket. Az {{key:Esc}} törli a kijelölést.
- A kijelölés közepén gizmo jelenik meg. Húzzon egy nyilat az irányába mozgatáshoz, vagy egy négyzetet a síkban mozgatáshoz. Nyomja meg a {{key:W}} billentyűt a mozgatáshoz, az {{key:E}}-t a forgatáshoz és az {{key:R}}-t a méretezéshez, vagy használja a panel gombjait. A {{ui:Gizmo}} gomb az eszköztárban ezek között lépeget.
- A **Puha átmenet** (mm) a megadott távolságon belüli sarkokat is húzza, és a távolság szélén simán nullára csökken.
- Minden húzás egy visszavonási lépés: a {{key:Ctrl+Z}} és a {{key:Ctrl+Y}} a szokásos módon működik.

## A ketrec módosítása

A panel **Módosítás** gombjai a kijelölésen működnek:

| Gomb | Mit csinál |
|---|---|
| {{ui:Kihúzás}} | A kijelölt lapok a **Kihúzási távolság** mértékkel kimozdulnak a normálisaik irányában, új oldallapokkal. A kijelölt nyitott élek kifelé új lapokat húznak. |
| {{ui:Élhurok}} / Élhurok beszúrása | Felosztja a négyszög lapok gyűrűjét, amely a kijelölt élt keresztezi, felénél. Több hurok szorosabb ívet ad. |
| Pont beszúrása | Sarkot ad a kijelölt él közepéhez. |
| Felosztás | Minden kijelölt lapot négy négyszög lapra oszt a közepe körül. |
| Híd | Két kijelölt lapot vagy két nyílást (egy-egy nyitott él kijelölésével) köt össze lapokból álló csővel. Mindkettőnek ugyanannyi éle kell legyen. |
| Lyuk betöltése | Lezárja a kijelölt nyitott élen át a nyílást egy lappal. |
| Összevonás | A kijelölt sarkokat egybeolvasztja a középpontjukban. |
| Laposítás | A kijelölt sarkokat a rájuk legjobban illeszkedő síkra mozgatja. |
| Törlés | Eltávolítja a kijelölt lapokat, éleket (két lap összeolvad) vagy sarkokat. |

## Éles élek, szimmetria és megjelenítés

- {{ui:Élesítés}} élesíti a kijelölt éleket. Az **Élesítési súly** 10 teljesen éles. Kisebb súly ennyi finomítási lépésig éles marad, majd lágyul, ami szoros kerekítést ad kemény hajtás helyett. Az **Élesítés visszavonása** simára teszi őket újra. Az **Éles csúcs** rögzít egy sarkot, így a felület egy ponttal megy át rajta.
- A **Szimmetria** tükrözi a ketrecet az X, Y vagy Z = 0 síkon át. Megtartja a pozitív oldalt, tükrözi, és összeilleszti a két felet. Ezután bármelyik oldalon végzett szerkesztés mindkét oldalon megtörténik. A tükörsíkon lévő sarkok rajta maradnak.
- {{ui:Megjelenítés}} vált a **Sima** (az a felület, amely a jellemző lesz) és a **Doboz** (maga a ketrec lapjai) között.
- **Elemzés**: a **Zebra-csíkok** egy csíkos fényt tükröznek az aktuális nézetből. Sima felületen simán hajlanak, élnél megtörnek. Az **Átlagos görbület** a domború területeket pirosra, a homorúakat kékre, a síkokat fehérre színezi. Az értéket a megjelenített hálón, kotangens-képlettel mérik, ezért útmutató, nem mérés.

## Ellenőrzés és befejezés

- A **Pontos ellenőrzés** átalakítja a ketrecet a pontos magban, az alkatrész változtatása nélkül. Megmondja, hány B-spline-foltot alkot a ketrec, hányan pontosak, és zárt, érvényes test-e, valamint mekkora a térfogata.
- {{ui:Felületkezelés}} hozzáadja a *Form* jellemzőt az előzményekhez, vagy frissíti a szerkesztett formát, és visszaviszi a Tervezésbe. Egy zárt ketrec testté válik. Ennek **Művelet** beállítása a Tervezés panelen Új test, Egyesítés, Vágás vagy Metszet lehet. Egy nyitott ketrec felületi testté válik.
- Ha később módosítani szeretne egy formát, jelölje ki az előzményekben, és kattintson a **Szerkesztés a Form-ban** gombra. Szerkesztés közben a felépített test el van rejtve.
- Az **Elvetés** eldobja a ketrecet az előzmények érintése nélkül.

## Mi pontos és mi közelítő

A ketrec minden négyszög lapja – szükség esetén finomítva – egy bikubikus B-spline-foltot ad.

- Ahol egy lap minden sarka *szabályos* (négy él találkozik a felületen belül, vagy három nyitott élen vagy hajlat mentén), a folt **pontosan** a felosztásos felület. A tesztek ezt 1e-9 mm-ig ellenőrzik.
- Egy **rendkívüli pont** körül (három, öt vagy több él találkozik, egy három- vagy ötoldalú lap sarka, vagy egy hajlat vége) nincs pontos polinomfolt. Ott a folt a pontos pontot és érintősíkot veszi fel abban a sarokban, valamint a szomszédok élgörbéit, így a foltok rés nélkül találkoznak. A pont körüli élek érintőfolytonossága közelítő. A Form panel és a jellemző panelje adja meg a legnagyobb szöget, jellemzően 2° alatt. A jellemző panelén a magasabb **Szint** kisebbé és közelebbivé teszi ezeket a foltokat.
- Az éles hajlatok a test valódi élei, így lekerekíthetők.
- Minden folt saját lap, így egy formának sok lapja van, és a foltok között vonalak rajzolódnak.

## Felületi jellemzők a Tervezésben

A felületparancsok a Tervezés {{ui:Továbbiak}} menüjében vannak, a jellemzők alatt. Pontos mag kell hozzájuk. A felületi testek kékkel, áttetszően rajzolódnak. Nem részei a tömör testnek, amíg nem vastagítja vagy varrja őket.

| Parancs | Mit csinál |
|---|---|
| Folt | Egy zárt élhurkot tölt ki. Előbb jelölje ki a test éleit {{key:Shift}}+kattintással, vagy jelöljön ki egy felületi testet a nyílása kitöltéséhez. A **Érintő (G1)** a foltot simán ahhoz a felülethez illeszti. |
| Áthúzott felület | Egy felület egy vázlatonként egy láncon (nyitott vagy zárt) halad át, az előzményi sorrendben. |
| {{ui:Összevarrás}} | Felületi testeket varr össze a közös éleik mentén. Ha zárulnak, az eredmény tömör test, a többi jellemzőhöz hasonló **Művelettel**. |
| {{ui:Vastagítás}} | Felületi testnek vastagságot ad: a normálisa mentén, azzal szemben, vagy mindkét irányba felét. Az eredmény tömör test. |
| Ofszet felület | Felületi test másolata, amelyet a normálisai mentén mozgattak. Az eredeti megmarad. |
| Felület meghosszabbítása | Egy egylapú felületet a kiválasztott élek túl nő. |
| {{ui:Felület vágása}} | Levág egy felületi testet ott, ahol egy másik felületi test vagy a tömör test átmetszi. Kattintson a **Pont kiválasztása a darabon** gombra, hogy kiválassza, melyik darabot tartsa meg, vagy tartson meg mindent mást. |

A varrás, a vastagítás, a meghosszabbítás és a vágás felhasználja a kiindulási felületi testet. A későbbi jellemzők az újat használják.

Jelenlegi korlátok: több különálló zárt darabból álló forma nem alakul egy tömör testté; a szabályos területek nem olvadnak össze nagyobb felületekké; és lásd: [Mi még nincs elkészítve](topic:not-built-yet).
