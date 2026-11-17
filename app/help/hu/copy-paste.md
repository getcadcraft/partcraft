---
title: Másolás, beillesztés és kettőzés
summary: Vázlatgeometria, jellemzők és összeállítási alkatrészek másolása; beillesztés a kattintás helyére vagy a helyben; kettőzés egy lépésben; és hogy mi kerül át a másolattal, és mi nem.
keywords: másolás, beillesztés, kivágás, kettőzés, vágólap, helyben beillesztés, összes kijelölése, kijelölés megszüntetése, törlés, ctrl c, ctrl v, ctrl d, példány, komponens, vázlat másolása, jellemző másolása, alkatrész másolása
from: 611307d7
---

Az eszköztár {{ui:Szerkesztés}} csoportjában található a {{ui:Visszavonás}}, az {{ui:Ismétlés}}, a {{ui:Másolás}}, a {{ui:Beillesztés}}, valamint a {{ui:Továbbiak}} menü a {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}} és {{ui:Kijelölés megszüntetése}} parancsokkal, mindegyik a hozzá tartozó billentyűvel. Hogy mit másolnak, attól függ, hol tart: nyitott vázlatban a geometriát, az előzménylistában a jellemzőt, az összeállításban az alkatrészt.

A szürkített elem jelenleg nem használható. Vigye rá az egeret: a buborékban megjelenik az ok, például „Előbb jelöljön ki vázlatgeometriát” vagy „A vágólapon Sketch2 és Extrude2 van: a jellemzők az előzménylistába illeszthetők, ezért előbb lépjen ki a vázlatból”.

| Művelet | Billentyű | Vázlatban | Az előzménylistában | Összeállításban |
|---|---|---|---|---|
| Másolás | {{key:Mod+C}} | A kijelölt pontok és görbék | A kijelölt vázlat, kihúzás, forgatás vagy furat (a vázlatával együtt) | A kijelölt alkatrész |
| Kivágás | {{key:Mod+X}} | Másolás, majd törlés | Másolás, majd a jellemző törlése | Másolás, majd az alkatrész eltávolítása |
| Beillesztés | {{key:Mod+V}} | A másolat követi a mutatót; kattintson arra a helyre, ahová kerül | A másolatot az előzménylista végére teszi | Új másolat a többi alkatrész mellé |
| Beillesztés helyben | {{key:Mod+Shift+V}} | Ugyanazokon a koordinátákon | Ugyanaz, mint a Beillesztés | Ugyanarra a helyre, ahol a másolt alkatrész van |
| Kettőzés | {{key:Mod+D}} | Egy lépésben másolja és mozgatja; a vágólap érintetlen marad | Egy második másolat közvetlenül Ön után | Második másolat a többi alkatrész mellé |
| Törlés | {{key:Delete}} | A kijelölés | A jellemző (rákérdez, ha mások használják) | Az alkatrész vagy kapcsolat |
| Összes kijelölése | {{key:Mod+A}} | Minden a vázlatban | Nem elérhető | Nem elérhető |
| Kijelölés megszüntetése | {{key:Esc}} | Törli a kijelölést | Törli a kijelölést és a kiválasztásokat | Törli a kijelölést |

Minden beillesztés, kettőzés és kivágás egy lépés a visszavonási listában: a {{key:Mod+Z}} visszavonja, a {{key:Mod+Y}} visszaállítja.

## Vázlatban

1. Jelölje ki, amit másolni szeretne: kattintson rá, a továbbiakhoz {{key:Shift}}+kattintás, húzzon ablakot, vagy az összeshez nyomja meg a {{key:Mod+A}} billentyűt.
2. Nyomja meg a {{key:Mod+C}} billentyűt vagy válassza a {{ui:Másolás}} gombot. Az állapotsor kiírja, mit másolt.
3. Nyomja meg a {{key:Mod+V}} billentyűt vagy válassza a {{ui:Beillesztés}} gombot. Szaggatott másolat követi a mutatót, a közepénél fogva. Pontokhoz fogódzik: egy másolt kör középpontját úgy helyezheti egy pontra, hogy arra a pontra kattint.
4. Kattintson arra a helyre, ahová kerül. A beillesztett geometria kijelölve marad, így azonnal húzhatja, vagy kényszereket adhat hozzá. Az {{key:Esc}} megszakítja a beillesztést.

Ezek kerülnek át vele:

- Egy másolt vonal, kör vagy ív saját végpontjait és középpontját is magával viszi.
- A **másolt elemek közötti** kényszerek és méretek átkerülnek: a másolt téglalap továbbra is téglalap, a méreteivel együtt.
- A **nem másolt geometriához** és az origóhoz fűződő kényszerek elvesznek. Az állapotsor megszámolja őket: „2 kényszer a másolaton kívüli geometriához nem kerül át”. Így a beillesztett másolat szabadon mozgatható, amíg kényszerekkel vagy méretekkel nem kötik be.
- A rögzített pont rögzített marad, az új helyzetében.

A {{ui:Beillesztés helyben}} a másolatot pontosan az eredeti koordinátáira helyezi, ugyanebbe vagy másik vázlatba: hasznos, ha egy profilt át kell vinni egyik vázlatból a másikba. Ugyanabban a vázlatban a másolat az eredeti tetején lesz; húzza félre.

A {{ui:Kettőzés}} ({{key:Mod+D}}) lemásolja a kijelölést, és azonnal elkezdi elhelyezni, a vágólap tartalmát érintetlenül hagyva.

:::tip
Ha egy furat középpontját vagy egy hornyot többször szeretne megismételni, egyszer másolja, és többször illessze be: minden {{key:Mod+V}} új másolatot indít, amely követi a mutatót.
:::

## Az előzménylistában

1. Kattintson egy vázlatra, kihúzásra, forgatásra vagy furatra az előzménylistában.
2. A {{key:Mod+C}} lemásolja. A vázlatalapú jellemzőt a vázlatával együtt másolja.
3. A {{key:Mod+V}} a másolatot az előzménylista végére teszi (visszagörgetett állapotban a visszagörgető sávnál), új nevekkel, például Sketch3 és Extrude2.

A másolat ugyanazon a síkon vagy lapon van, mint az eredeti, így rá épül, és az alkatrész ugyanúgy néz ki. A másolat mozgatásához jelölje ki az új vázlatot, és módosítsa a síkját a jobb oldali panelen, vagy nyissa meg, és húzza vagy méretezze át a profilt.

- Beillesztés **másik alkatrészbe**: nyissa meg azt az alkatrészt, és nyomja meg a {{key:Mod+V}} billentyűt. Ha a másolat vázlata olyan lapon volt, amely az adott alkatrésznek nincs meg, az Elülső síkra kerül, és az állapotsor ezt jelzi.
- A {{ui:Kettőzés}} egy lépésben másol és illeszt be, ugyanazon az alkatrészen belül.
- A {{ui:Kivágás}} lemásolja a jellemzőt, majd törli (előbb rákérdez, ha más jellemzők használják).

Mintázatok, tükrözések, lekerekítések, letörések, héjazások és importált testek nem másolhatók: élekhez, lapokhoz vagy az adott alkatrészen kiválasztott jellemzőkhöz kötődnek. Ehelyett a vázlatot vagy az alapjukat képező jellemzőt másolja, vagy mintázza a {{ui:Lineáris}} vagy {{ui:Körkörös}} paranccsal.

## Összeállításban

1. Kattintson egy alkatrészre a nézetben vagy a bal oldali listában.
2. Válassza a {{ui:Kettőzés}} ({{key:Mod+D}}) gombot, vagy a {{key:Mod+C}}, majd a {{key:Mod+V}} billentyűket.

Az új másolat **ugyanaz az alkatrész**: ha az egyiket szerkeszti, minden másolat megváltozik. Az összeállításban már meglévő mindenhez képest 20 mm-rel jobbra jelenik meg, ugyanúgy elforgatva, mint a másolt alkatrész, és ott marad, amíg egy kapcsolat el nem helyezi. A {{ui:Beillesztés helyben}} ({{key:Mod+Shift+V}}) pontosan oda teszi, ahol a másolt alkatrész van; kapcsolja össze, ha mozgatni szeretné (a csúszókapcsolat eltolása tolja tovább).

Másik összeállításból másolt alkatrész beillesztése magával hozza az alkatrészt, akárcsak a {{ui:Beszúrás}} a fájljából. Az Összeállítás csoport {{ui:Másolat hozzáadása}} gombja ugyanazt teszi, mint a {{ui:Kettőzés}}, és kijelölés nélkül is működik (az utolsó alkatrészt másolja).

## A vágólap

- Ez a PartCraft saját vágólapja, nem a számítógépé: PartCraft-geometriát nem illeszthet be másik programba, és szöveget sem a PartCraft nézeteibe.
- Ebben a böngészőben tárolódik, így egy másik PartCraft-lap is beillesztheti, amit másolt. Megnyitott fájlhoz hasonlóan újraolvasódik és ellenőrződik; a sérült vagy más verziójú tartalmat elutasítja.
- Egy nagy importált STEP-fájllal rendelkező alkatrész túl nagy lehet ahhoz, hogy a böngésző megőrizze: ilyenkor csak ebben a lapon illeszthető be.
- Számmezőben vagy a súgó keresőjében a {{key:Mod+C}} és a {{key:Mod+V}} a szokásos módon másol és illeszt be szöveget.

A rajzlapon a másolás és beillesztés még nem érhető el; a {{ui:Törlés}} és a {{ui:Kijelölés megszüntetése}} a kijelölt jelképen működik. Lásd: [Ami még nincs elkészítve](topic:not-built-yet).
