---
title: Az elemzőkönyvtár
summary: Az elemzőkönyvtár olvasható elemzőszkriptjei a Szkript munkaterületen: mi van az egyes csoportokban, függvény megnyitása csak olvasásra, a fejléce a módszerrel, hivatkozásokkal és ellenőrzéssel, saját másolat készítése, és hogyan veszi át a másolat a könyvtári függvény helyét.
keywords: könyvtár, craftlib, elemzés, elektromágnes, statikus, modális, hő, topológia-optimalizálás, top88, SIMP, elektromágnesesség, elektrosztatika, magnetosztatika, folyadék, rácsos Boltzmann, LBM, háló, voxel, tetraéderek, hivatkozások, ellenőrzés, verifikáció, másolat, árnyék
from: bf993859
---

Az elemzőkönyvtár szkriptek gyűjteménye; mindegyik egy olyan függvény, amelyet felülről lefelé el lehet olvasni: hogyan épül fel a merevségi mátrix, hova kerülnek a peremfeltételek, melyik megoldó fut, és hogyan számítódnak ki az eredmények. Semmi sincs benne fekete dobozba zárva; csak a gyors belső ciklusok (elemmátrixok, ritka megoldók, hálózás) beépítettek.

## Kezdjen egy példával

A **Példák** csoport öt rövid szkriptet tartalmaz, amelyek a könyvtárat elejétől a végéig használják. Kattintson egyre, nyomja meg a {{ui:Megnyitás (csak olvasható)}} gombot, majd az {{key:F5}} billentyűt: mindegyik törli a nézetet, az eredményt a vásznon, az ábrát pedig az alnézetekben mutatja.

| Példa | Mit mutat |
|---|---|
| Befalazott tartó feszültsége | Egy 100 × 10 × 10 mm-es acélrúd 100 N-os csúcsterhelés alatt: a von Mises-feszültség a deformálódott rúdon, és a csúcs lehajlása a gerendaelmélethez képest négy elemméretnél (ábrázolva) |
| MBB-gerenda topológiája | Az ismert 60 × 20-as topológia-optimalizálás: a kialakuló szerkezet, a hajlékonyság csökkenése, a végső elrendezés (94 iteráció, hajlékonyság 203,19) |
| Kondenzátortér | Két, 4 mm széles, 1 mm távolságra lévő lemez: a potenciál és a térerősség, a kapacitás élhatással az ideális értékhez és Palmer-képlethez képest |
| Csatornaáramlás | Rácsos Boltzmann-áramlás egy oszlop körül egy csatornában: a sebességmező és a konvergencia története |
| Elektromágnes | C alakú vasmag légréssel és tekercsel: a fluxussűrűség, a térerősség a légrésben a mágneses körre vonatkozó képlettel összevetve, az induktivitás és a vonzóerő a légrésen át. Végigvezetés a [Mágneses terek kétdimenzióban](topic:magnetic-fields-2d) témakörben |
| Állandó mágnes | Ugyanaz a vasmag tekercs helyett állandó mágnessel: a mágnes munkapontja, a térerősség a légrésben a mágneses körrel összevetve, mennyi fluxus szivárog ki, a vonzóerő. A [Mágneses terek kétdimenzióban](topic:magnetic-fields-2d#permanent-magnets) témakörben |

## Csoportok

| Csoport | Függvények | Mit csinálnak |
|---|---|---|
| Hálózás | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Dobozok és hengerek hexaéderként, kockákként vagy tetraéderekként; bármely modell (az alkatrész, egy test, egy betöltött STL) kockáiból vagy tetraédereiből; elemtérfogatok és minőség; csomópontok kiválasztása egy síkon vagy lapon |
| Statikus feszültség | `static_voxel`, `static_tet` | Lineáris statikus feszültség kockákon vagy 10 csomópontú tetraédereken: elmozdulások, feszültségek, von Mises, reakciók |
| Keretszerkezetek | `frame3d` | 3D-s keretszerkezetek gerendákból, oszlopokból és merevítőkből a közvetlen merevségi módszerrel: rúdvégi kioldások, támaszok és rugók, terhelések a rudakon; elmozdulások, reakciók, rúdvégi erők. A DetailCraft és a BimCraft {{ui:Exportálás CraftScript-ként}} funkciója egész modellt ír ki hozzá. Elemzési segédeszköz, nem szabványellenőrzés |
| Rezgés | `modal_tet` | Sajátfrekvenciák és sajátalakok |
| Hő | `heat_steady`, `heat_transient`, `heat_system` | Állandósult és időfüggő hővezetés rögzített hőmérsékletekkel, hőbevitellel, hőtermeléssel, hőárammal és konvekcióval |
| Topológia-optimalizálás | `top88`, `top99`, `topopt3d` | A közölt 88 és 99 soros 2D-s kódok, és ugyanez a módszer 3D-ben, kockákon |
| Elektromágnesesség | `poisson2d`, `magnetostatic2d` | 2D-s elektrosztatika (potenciál, térerősség, kapacitás, töltés) és magnetosztatika (vektorpotenciál, fluxussűrűség, állandó mágnesek) |
| Folyadékáramlás | `lbm2d`, `lbm3d` | Rácsos Boltzmann-áramlás: a 2D változat kiírva a szkriptben, a 3D a PartCraft saját áramlási magján |

Minden függvény fejléce megadja a pontos argumentumokat. A mértékegységek a PartCraft vizsgálatainak mértékegységei, hacsak a fejléc másként nem mondja: milliméter, newton, megapascal, sűrűségnél tonna/köbmilliméter, hőnél watt és kelvin. Az elektromágneses és a rácsos Boltzmann-függvények bármely következetes mértékegységgel dolgoznak; fejlécük megmondja, hogyan.

## Hogyan van ellenőrizve a könyvtár

Minden függvény fejlécének végén van egy **ellenőrzés**: egy kis eset ismert eredménnyel. A PartCraft tesztjei mindegyiket lefuttatják, és ahol a PartCraftnak van saját vizsgálata ugyanarra a feladatra, a szkript eredményét ugyanazon a hálón összehasonlítják azzal:

- a befalazott tartó csúcslehajlása a gerendaelmélettel összevetve (kockákkal 0,2%-on belül, tetraéderekkel 0,05%-on belül), és a **Szimuláció** munkaterület megoldóival összevetve, ugyanazon a hálón (sok tizedesjegyig megegyezik);
- a befalazott tartó első frekvenciája a gerendaelmélettel összevetve (0,24%-kal alacsonyabb, ahogy egy rövid gerendánál várható), és a **Szimuláció** modális megoldójával összevetve;
- hő: egy fűtött síkfal pontosan, egy kis test hűlése a tömbös kapacitás képlete szerint, egy lemez hőmérsékletének lecsengése az elmélet szerint;
- topológia-optimalizálás: a `top88` visszaadja a közlemény 94 iterációját és 203,1925 hajlékonyságát (és 218,8032-t a sűrűségszűrővel); a `topopt3d` ugyanazzal a hajlékonysággal végez, mint a **Generatív** munkaterület ugyanazokkal a beállításokkal;
- a kondenzátor kapacitása és egy hosszú szolenoid tere a tankönyvi értékekhez, az elektromágnes légrésbeli tere a mágneses körre vonatkozó képlethez, az állandó mágnesek pedig egy levegőben lévő kör alakú mágneshez és egy vasdarabbal zárt mágneshez képest;
- csatornaáramlás a pontos parabolikus profilhoz képest.

## Egy függvény elolvasása

1. Nyissa meg a szkriptpanel **Könyvtár** lapját.
2. Kattintson egy függvényre. A fejléc megmutatja: mit számol, a módszert, a mértékegységeket, feltételezéseket és korlátokat, a **hivatkozásokat** (könyv vagy közlemény, egyenletszámokkal), és egy **ellenőrzést** — egy kis esetet ismert eredménnyel, amelyet a PartCraft saját tesztjei futtatnak.
3. A {{ui:Megnyitás (csak olvasható)}} megnyitja a teljes szkriptet egy szaggatott szegélyű lapon. Futtathatja, kijelölhet és futtathat belőle részeket, de nem módosíthatja.

## Egy függvény módosítása

Nyomja meg a {{ui:Másolat készítése}} gombot (vagy a csak olvasható lap fölötti **Másolat készítése szerkesztéshez** gombot). A másolat egy szkript az alkatrészben, ugyanazzal a névvel, így az alkatrésszel együtt mentődik, és **az adott függvény minden hívása most a másolatot használja** — a szerkesztő ezt a szkript fölött jelzi. Nevezze át a másolatot, ha mindkettőt meg akarja tartani.

## Egy függvény használata

Könyvtári függvényt bármely szkriptből a nevével hívhat, mint egy beépített függvényt:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Az eredmények értékként jönnek vissza a munkaterületre; az általa megjelenített ábrák és mezők a nézetben és az alnézetekben jelennek meg.

A megnyitott alkatrész statikus elemzése például néhány sort vesz igénybe:

```
v = voxel_mesh(part(), 2);                   % 2 mm-es kockák
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % az alját rögzíti
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N lefelé a tetején
r = static_voxel(v, 210000, 0.3, bc);       % acél
```

Az `r` tartalmazza az elmozdulásokat, feszültségeket és reakciókat; a von Mises-feszültség a deformált alkatrészen jelenik meg. Görbült alkatrészekhez a `tet_mesh` és a `static_tet` használható, amelyek egész lapokat is tudnak terhelni és rögzíteni (`face_nodes`).

:::note
A könyvtári függvények CraftScriptben íródtak, a Lua-szkript pedig a beépített függvényekhez hasonlóan a `cs` táblán keresztül hívja őket: `cs.static_tet(t, 200000, 0.3, bc)` (lásd [Szkriptek Lua nyelven](topic:craftscript-lua)). Minden függvény egy anyagot és egy terhelési esetet old meg; a fejlécek felsorolják, mi nincs lefedve.
:::
