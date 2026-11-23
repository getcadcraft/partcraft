---
title: 4 és 5 tengelyes megmunkálás
summary: Mondja meg a PartCraftnak, milyen forgótengelyei vannak a gépnek, döntse a szerszámot bármely szokásos műveletnél, simítson felületet golyós véggyalu-marval, amely vágás közben dől, vagy forgassa a munkadarabot a szerszám alatt egy 4. tengelyen. Mi íródik a G-kódba, és mi nem lett bizonyítva.
keywords: 5 tengelyes, öt tengelyes, 4 tengelyes, negyedik tengely, több tengelyes, multiaxis, 3+2, indexelt, pozicionáló, dőlés, döntött szerszám, forgó, bölcső, asztal, fej, a tengely, b tengely, c tengely, tcp, rtcp, szerszámközéppont, g43.4, inverz idő, g93, kinematika, forgáspont, oldalmarás, előre dőlési szög
from: c4f1c491
---

A Gyártás a szerszámot szögben tarthatja, és vágás közben mozgathatja a forgótengelyeket. Három dolog teszi ezt, az egyszerűbbtől a bonyolultabbig.

**Ezt itt semmi nem futtatta gépen.** A pályákat a tesztek a geometriához ellenőrzik, és a G-kód vissza van olvasva, de a beépített utófeldolgozók a vezérlők dokumentált kódjait követik, nem egy előttünk álló gépet. A programot a vezérlője saját szimulátorában és levegőben bizonyítsa, mielőtt fémhez ér.

## A gép forgótengelyei

A **Beállítás** lapon a {{ui:Forgótengelyek}} megmondja, mi van a gépen:

| Választás | A gép |
|---|---|
| Nincs (3 tengely) | Sima marógép. Minden művelet, amelyhez döntött szerszám kell, figyelmeztet, és az utófeldolgozó nem írja ki. |
| A (X körül forog) | Egy forgótengely X mentén: 4. tengelyes asztal vagy indexelő. A szerszám csak az Y–Z síkban dőlhet. |
| B (Y körül forog) | Egy forgótengely Y mentén. A szerszám csak az X–Z síkban dőlhet. |
| A és C | Egy X körüli döntő tengely, amelyet egy Z körüli forgás hordoz, vagy amely hordoz egyet: billentő asztal vagy fej. |
| B és C | Ugyanez, a döntés Y körül. |

Ezután:

- **Hordozza**: {{ui:Az asztal (a munkadarab forog)}} vagy {{ui:A fej (a szerszám forog)}}. Az asztal az ellenkező irányba fordul, hogy ugyanazt a lapot hozza a szerszám alá, így minden szög előjele ebből következik.
- **A vezérlő tartja a szerszámhegyet a pályán (TCP)**: bekapcsolva az X Y Z a programban a szerszámhegy a munkadarab saját koordinátáiban, a vezérlő elvégzi a többit (a beépített Fanuc-típusú és LinuxCNC utófeldolgozók `G43.4`-et írnak a szerszámhosszhoz). Kikapcsolva, asztalos gépen, a PartCraft úgy írja az X Y Z-t, ahogy a forgó asztal viszi a munkadarabot, a megadott **forgásközéphez** képest (munkakoordinátákban; 0, 0, 0, ha a munkadarab-nullpont a középpontban van). Fejes gépnek kell a TCP: enélkül a programnak a gép forgáspont-hosszát kellene tudnia, amelyet a PartCraft nem ismer.
- **Dőlési határ**: milyen messzire megy a dőlő tengely.

A gépek abban különböznek, melyik irányt tekintik pozitívnak. Ha egy tengely rossz irányba fordul az ön gépén, az előjelet az utófeldolgozó egy másolatában változtassa meg ([Szerkeszthető utófeldolgozók](topic:post-processors)).

## Döntött szerszám egy szokásos műveletnél

Minden marási művelet (Lap, Zseb, Adaptív, Kontúr, Fúrás, Letörés, Párhuzamos, Hullámos simítás, 3D nagyolás, Maradék) rendelkezik a **Szerszámdőlés** és a **Dőlés az irányba** beállítással: ez a szerszám iránya csak arra a műveletre, a beállítás szerszámtengelyéhez mérve. Ez 3+2 megmunkálás: a forgótengelyek egy helyzetbe mennek, és ott maradnak, míg három tengely vág.

- Írja be a két szöget, vagy nyomja meg a {{ui:Szerszám merőlegesen egy felületre}} gombot, és kattintson egy sík lapra: a szerszám egyenesen rá fog mutatni.
- Válassza ki a művelet lapjait és éleit, ahogy szokta. Hogy valami aljzat vagy furat-e, azt a döntött szerszám mentén ítéli meg.
- A nyersanyag az adott irányhoz az a doboz, amely a megforgatott nyersanyagot tartalmazza, így a magasságok és ráhagyások az adott oldalról biztonságosak.

A G-kódban a művelet előtt a szerszám felemelkedik, a forgótengelyek elfordulnak, és a szerszám az első pontja fölé süllyed. Asztalos gépen TCP nélkül az ívek ívek maradnak, és a fix fúrási ciklusok ciklusok maradnak (a kiírt koordináta-rendszer csak Z körül forog). TCP-vel döntött síkban az ívek rövid egyenesekké, a ciklusok pedig az általuk jelentett mozgásokká válnak.

A nyersanyag-szimuláció a döntött irányt **önállóan** futtatja: azt mutatja, mit vág az adott művelet a teljes nyersanyagból az oldaláról nézve, és bemarásokat talál ott, de a más irányokból végzett vágások nem kerülnek át.

## 5 tengelyes simítás

A Gyártás eszköztárának {{ui:Továbbiak}} gombja felsorolja ezt és a következő műveletet a **Műveletek** lap tetején.

{{ui:5 tengely}} a [párhuzamos simítási menet](topic:finish-3d), amelynél a **golyós véggyalu dől, ahogy halad**. A golyó gömbbel vág, és a gömb ugyanolyan, bárhogy dől a szerszám a középpontja körül, így a golyó pontosan azt az utat követi, amelyet a 3 tengelyes menet adna, csak a szerszám iránya változik:

- **A felület felé**: 1 = merőlegesen a felületre, 0 = függőlegesen, a kettő között bármi.
- **Előre dőlés**: fokban a vágás irányában, hogy ne a golyó álló középpontja vágjon.
- **Legnagyobb dőlés**: a szerszám sosem dől ennél jobban a beállítás tengelyétől.

Ahol a szár érintené a modellt, a dőlést addig kell visszavenni, amíg szabad nem lesz, és a művelet jelzi, hány pontnál történt ez. Minden menet egyenes emeléssel lép be és lép ki.

## Forgó simítás (4. tengely)

{{ui:Forgó}} egy munkadarabhoz való, amelyet **munkatengely X** mentén, egy forgótengelyen tartanak. A munkadarab forog, és egy golyós véggyalu, mindig a tengelyre mutatva, követi a felületét:

- **Menetek**: {{ui:A tengely mentén}} (vonalak X mentén, egy oldalirányú lépésnyi fordulattal egymástól) vagy {{ui:A munkadarab körül}} (gyűrűk, egy oldalirányú lépésnyi X-szel egymástól).
- **A tengely Y / Z-nél**: a tengely helye. Üresen a nyersanyag közepét jelenti. Asztalos gépen TCP nélkül ennek a beállítás forgásközéppontjának kell lennie; a művelet figyelmeztet, ha nem az.
- **Ettől / Eddig X** és **Ettől / Eddig szög**: a vágandó hossz- és fordulatrész.

A golyó tengely feletti magassága minden pontnál a gömb pontos ejtése a munkadarab hálóján, az adott oldalról.

## Korlátok

- Az 5 tengelyes és a forgó simítás csak **golyós véggyalut** fogad el. Nincs oldalmarás (a szerszám oldalának vágása egy sima falon), nincs felület saját irányú áramlási vonal, nincs többtengelyes nagyolás, és nincs automatikus dőlésválasztás ütközés elkerülésére.
- Az 5 tengelyes és a forgó pályák **nem futnak a nyersanyag-szimuláción át**, amely magassági térkép, és nem tud dőlő vágást kezelni.
- A szárat az 5 tengelyes simításnál a modell felülnézetéhez ellenőrzik; a tartót, az orsót és magát a gépet sehol nem ellenőrzik.
- A forgó simítás csak azt vágja, amit a szerszám lát, a tengelyre nézve.
- Az 5 tengelyes simítás nagy munkadarabnál egy percnél tovább számol: a szárat minden menet minden pontján ellenőrzi.
- Ha a forgótengelyek a lineárisakkal együtt mozognak, és a TCP ki van kapcsolva, a beépített utófeldolgozók az előtolást inverz időként írják (`G93`), majd visszaállnak `G94`-re.
- Nincs kódolt döntött munkasík (`G68.2` és hasonló), és nincsenek gépspecifikus határok, visszatekerési vagy ütközési zónák ismertek.
