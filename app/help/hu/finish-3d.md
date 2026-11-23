---
title: 3D simítás: párhuzamos és hullámos simítás
summary: A teljes modell görbült felületét golyós, lekerekített sarkú vagy lapos véggyalu-maróval simítsa, párhuzamos vonalakban bármilyen szögben, vagy egymástól megadott távolságra lévő menetekben, hogy a köztük maradó gerincek a kért magasságot tartsák. Mit garantálnak a pályák, és mit nem.
keywords: 3d simítás, simítás, párhuzamos, raszter, hullámos simítás, állandó hullámmagasság, gerinc, golyós maró, lekerekített sarkú maró, felület, tűrés, lépésköz, lejtés, hagyandó anyag, leesőmaró, bemarás
from: 942d2341
---

A Gyártás két művelete a **teljes modell felületét** vágja, a szerszámot függőlegesen tartva (három tengely). Nincs szükségük kijelölésre: a modell minden olyan részével dolgoznak, amely felülről látszik. Előbb nagyolja ki a munkadarabot (adaptív vagy zseb), mert a nem vágott nyersanyagon végzett simítási menet figyelmeztet, hogy mélyen vágna.

## Párhuzamos

Egyenes vonalak a modell felett, a beállított **szögben**, egymástól **lépésköz** távolságra (a szerszám átmérőjének törtrésze). Minden vonal követi a felületet: a szerszámhegy annyira magas, amennyire szükséges ahhoz, hogy a vágó egyetlen része se menjen a modell alá, és a vonal finomabban vágódik ott, ahol a felület meghajlik. Ha a **Cikkcakk** be van kapcsolva, a szerszám a vonalak között ott marad a felületen, ahol ezt biztonságosan megteheti (a mozgás mentén ellenőrizve); egyébként felemelkedik.

- **Tűrés**: milyen messze lehet a vonal egyenes szakasza a valódi szerszámhegy-magasságtól (a fele a határ az egyes szakaszok közepén). Alapértelmezés 0,01 mm.
- **Csak ahol a felület legalább … és legfeljebb … (°)**: csak a lapos vagy csak a meredek részeket simítja. Ahol a felület a tartományon kívül esik, a vonal kimarad, és a szerszám felemelkedik.
- **Hagyandó anyag**: a modell ennyivel eltolva (a vágó ennyivel megnövelve: pontos golyós és lekerekített sarkú szerszámnál; lapos szerszámnál legalább ennyi marad).
- **Alsó határ**: ennél alacsonyabb z-nél semmi sem vágódik.

## Hullámos simítás

Egymástól állandó távolságra lévő menetek a felületen, így a két szomszédos menet között maradó gerinc (a hullám) a kért **magasságú** lesz. A távolság a magasságból és a golyó sugarából adódik: s = 2·√(2·R·h − h²). Például egy Ø6-os golyónál és 0,02 mm-es gerincnél a menetek távolsága körülbelül 0,69 mm. Lekerekített sarkú szerszám a sarokrádiuszát használja. Lapos véggyalut nem fogad el: nincs olyan gerinc, amelyet méretezni lehetne.

A menetek a modell **széléről befelé haladva**, vagy a **tetejéről lefelé haladva** indulnak. Ezek a felületen mért távolság szintvonalai (nem magasságé), ezért lejtőn közel esnek egymáshoz a síkrajzon, síkon pedig messze. A távolságot a felületen mért rácson határozzuk meg, és körülbelül 1%-os pontosságú; a gerincmagasság pontos ott, ahol a felület sík vagy enyhén görbül, és közelítő ott, ahol gyorsan görbül. Az **egyirányú marás** a felület magasabb oldalát a vágó jobb oldalán tartja.

## A pályák minősége

Amit a tesztek ellenőriznek, zárt képletekkel vagy a szerszám lábnyomának független, szisztematikus keresésével:

- A szerszám alatti hegymagasság pontos golyós, lekerekített sarkú és lapos szerszámnál a háló lapjain, éleinél és sarkainál, és soha nem magasabb a valódi magasságnál; párhuzamos vonalaknál a pálya ezen tűrésen belül marad, bemarás nem mélyebb ennél.
- A dőlt síkon mért pályahosszak egyeznek a zárt képlettel; a síkon lévő hullámos menetek a kért távolságra vannak, és a köztük maradó gerinc a kért magasságban jön ki.
- A nyersanyag-szimuláció egy menet után nem mutat bemarást, és megmutatja a megmaradt gerinceket.

Amit ezek a pályák nem jelentenek: alapvető simítási menetek, nem a gyártósor teljes kínálata.

- **Nincs megépítve**: vízszintes (állandó z) simítás, ceruzás és sarok-tisztítás, sugárirányú és spirális menetek, görbe vetítése a felületre, sík területek felismerése, tartó- és szárütközés-ellenőrzés. A nagyolás és a maradékanyag-megmunkálás saját művelet: [3D nagyolás és maradékanyag-megmunkálás](topic:rough-3d). A döntött szerszám az [5 tengelyes simítás](topic:multi-axis#5-axis-finishing).
- A szerszámközéppont a modell felett marad: a pályák a modell szélénél megállnak, nem futnak túl rajta, ezért a szélen lévő, függőleges fal talpig nincs simítva.
- Alámetszéseket nem látnak: a felület az, amit a szerszám felülről talál.
- A modell a kernelből származó háló, ezért a pályák a hálót követik (annak húrtűrése a munkadarab átlójának körülbelül 0,0002-szerese), nem a pontos felületet.
- Nagy modell finom tűréssel történő simítása hosszú programot ad, sok rövid mozgással. Vágás előtt ellenőrizze a kimenetet a gépe saját szimulátorában.
