---
title: 3D simítás: párhuzamos és scallop
summary: A modell teljes görbe felületének simítása gömbvégű, lekerekített sarkú vagy lapos végű maróval: párhuzamos vonalak tetszőleges szögben, vagy egymástól megadott távolságra lévő menetekben, hogy a közöttük maradó gerincek a kért magasságot tartsák. Mit garantálnak a pályák, és mit nem.
keywords: 3d simítás, simítás, párhuzamos, raszter, scallop, állandó scallop, gerinc, gömbvégű, lekerekített sarkú, felület, tűrés, lépésköz, lejtő, hagyandó ráhagyás, ejtett szerszám, bemaródás
from: e1587d0a
---

A Gyártás munkaterület két művelete a modell **teljes felületét** vágja, a szerszámot függőlegesen tartva (három tengelyen). Nem kell kijelölni semmit: a felülről látható modell egészén dolgoznak. Először durván munkálja meg az alkatrészt (adaptív vagy zseb); a meg nem munkált alapanyagon végzett simítás figyelmeztet, hogy mélyen vágna.

## Párhuzamos

Egyenes vonalak a modellen át a beállított **szögben**, egymástól a **lépésköz** távolságra (a szerszámátmérő egy része). Minden vonal követi a felületet: a szerszám csúcsa annyira magas, hogy a szerszám egyetlen része se menjen a modell alá, a vonal pedig finomabban vágódik, ahol a felület meghajlik. A **Cikkcakk** bekapcsolva a szerszám a vonalak között ott marad lent, ahol ezt biztonságosan megteheti (a mozgás mentén ellenőrizve); egyébként felemelkedik.

- **Tűrés**: milyen messze lehet egy vonal egyenes szakasza a valódi csúcsmagasságtól (a fele a szakasz közepén határként szolgál). Alapértéke 0,01 mm.
- **Csak ahol a felület legalább … és legfeljebb … (°)**: csak a lapos vagy csak a meredek területeket simítja. Ahol a felület a tartományon kívül esik, a vonal kimarad, és a szerszám felemelkedik.
- **Hagyandó ráhagyás**: a modell ennyivel eltolva (a szerszám ennyivel megnövelve: pontos gömbvégű és lekerekített sarkú szerszámnál; lapos szerszámnál legalább ennyi marad).
- **Alsó szint**: a z ez alatt semmi nem vágódik.

## Scallop

Egymástól állandó távolságra lévő menetek a felületen, így a két szomszédos menet között maradó gerinc (a scallop) a kért **magasságú** lesz. A távolság a magasságból és a golyó sugarából adódik: s = 2·√(2·R·h − h²); például egy Ø6 golyónál és 0,02 mm-es gerincnél a menetek távolsága körülbelül 0,69 mm. A lekerekített sarkú szerszám a sarka sugarát használja. A lapos végű marót nem fogadja el: nincs gerince, amelyet méretezni lehetne.

A menetek a modell széléről, befelé indulnak, vagy a tetejéről, lefelé. Ezek a felület távolságának szintvonalai (nem magassági szintvonalak), ezért lejtőn közel esnek egymáshoz a vetületben, síkon pedig messze vannak egymástól. A távolságot a felületen rácson mérik, és körülbelül 1 %-on belül pontos; a gerinc magassága sík vagy enyhén görbülő felületen pontos, gyorsan hajló felületen közelítő. A **Climb** a felület magasabb oldalát a vágó jobb oldalán tartja.

## Mennyire jók a pályák

Amit a tesztek ellenőriznek, zárt képletekkel vagy a szerszám lábnyomának független, brute-force kereséssel:

- A szerszám alatti csúcsmagasság pontos gömbvégű, lekerekített sarkú és lapos szerszámnál a háló lapjain, éleinél és sarkainál, és sosem a valódi magasság fölött van; a párhuzamos vonalak pályája a tűrésen belül marad, és nincs ennél mélyebb bemaródás.
- A ferde síkon mért pályahosszak megegyeznek a zárt képlettel; a síkon a scallop menetek a kért távolságra vannak, és a köztük maradó gerinc a kért magasságon jön ki.
- Az alapanyag-szimuláció egy menet után nem mutat bemaródást, és megmutatja a megmaradt gerinceket.

Ezek a pályák nem:

Alapvető simítási pályák, nem egy gyártórendszer teljes kínálata.

- Nincs elkészítve: vízvonal (állandó z), ceruzás és sarok-tisztítás, sugaras és spirális menetek, görbe vetítése a felületre, lapos területek felismerése, pihentetett megmunkálás (rest machining), tartó és szár ütközésvizsgálat, valamint a szerszám döntése.
- A szerszám középpontja a modell fölött marad: a pályák a modell szélénél megállnak, nem futnak túl rajta, ezért a szélnél lévő függőleges falat nem simítják a talpáig.
- Az alámetszéseket nem látja: a felület az, amelyet a szerszám felülről ér.
- A modell a kernel hálója, ezért a pályák a hálót követik (annak húrtűrése a rész átlójának körülbelül 0,0002-szerese), nem a pontos felületet.
- Nagy modell finom tűréssel történő simítása hosszú programot ad sok rövid mozgással. Ellenőrizze a kimenetet a gépe saját szimulátorában, mielőtt vág.
