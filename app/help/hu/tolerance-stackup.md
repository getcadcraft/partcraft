---
title: Tűrésláncszámítások
summary: Válasszon egy láncot egy összeállítás alkatrészein keresztül, és lássa, mennyit változhat a rés a végén, legrosszabb esetben és RSS szerint, a legfontosabb méretekkel a lista elején.
keywords: tűréslánc, tűréslánc-számítás, tűrésanalízis, tűrésláncolat, méretlánc, rés, hézag, legrosszabb eset, rss, négyzetes összeg gyöke, statisztikai tűrésezés, hozzájáruló tényezők, érzékenység, gd&t, általános tűrés, iso 2768
from: cbdb3159
---

A **tűréslánc-számítás** egy láncon végighaladó méreteket ad össze, hogy lássuk, mennyire változhat egy eredmény (általában egy rés), amikor minden alkatrész a tűréshatárain belül bárhol készülhet.

## A lánc kijelölése

1. Nyisson meg egy összeállítást, és az **Összeállítás** csoportban válassza a {{ui:Tűrésláncszámítás}} lehetőséget. Egy kártya nyílik a nézet fölött.
2. Válassza ki, hogy a lánc **mentén** mit mérjen: az összeállítás X, Y vagy Z tengelyét, vagy a {{ui:Az első lap normálisa}} értéket.
3. Nyomja meg a {{ui:A lánc kijelölése}} gombot, majd **sorrendben** kattintson azokra a lapokra, amelyeken a lánc áthalad: kezdje a rés egyik oldalán, haladjon át az alkatrészeken, és a rés másik oldalán érjen véget.
4. Nyomja meg a {{ui:Kész}} gombot vagy az {{key:Enter}} billentyűt. A {{key:Backspace}} visszavonja az utolsó kattintást; az {{key:Esc}} megszakít.

Két kattintás ugyanazon az alkatrészen az adott alkatrész méretét adja (a távolságát a láncon). Másik alkatrészre kattintás **csatlakozást** hoz létre a két alkatrész között, ahol érintkeznek; ennek nincs tűrése, hacsak nem ír be egyet. A tagok a lánc irányának megfelelően adnak hozzá vagy vonnak le, és lezárják a hurkot: a névleges rés az, amit a modell mutat.

Kézzel is hozzáadhat tagot a {{ui:Tag hozzáadása}} gombbal, és beírhatja a névleges értékét, a tűrését, valamint azt, hogy hozzáadódik (+) vagy levonódik (−).

## Adja meg az egyes tagok tűrését

Minden tagnak van **felső** és **alsó** eltérése (például +0,1 és −0,05). A **Tűrés forrása** a részből tölti ki őket:

- **Általános tűrés**: az alkatrész címkeblokkjának Tűrés mezője (lásd [Rajz PDF-be](topic:drawing-pdf)), ha ±0.1, +0.2/-0.1 vagy ISO 2768-f, -m, -c vagy -v értéket tartalmaz (ISO 2768-1 lineáris tűrések, a tag mérete szerint). Az alkatrész általános tűrését a lánc kijelölésekor azonnal használja a rendszer.
- **GD&T**: bármely tűrésjellemző-keret az alkatrész rajzán. A pozíció-, profil- és futásköri zónák a tűrés felét adják ±-ben. Az irány- vagy alaktűrés általában már a mérettűrésen belül van: csak ott adja hozzá, ahol a lánc a vezérelt felülethez ér. Ⓜ vagy Ⓛ esetén a zónát a megadott méretében veszik figyelembe; a bónusz tűrés nem számít bele.
- **Beírt**: bármely számok, amelyeket beír.

## Az eredmények olvasása

- **Rés, névleges** és, ha a tűrések nem egyenlők, **Rés, átlagos**: a +0.2/−0 és a +0/−0.1 a tartomány közepét mozgatja.
- **Legrosszabb eset**: minden tűrés egyszerre a határán. A rés soha nem lehet ezen kívül.
- **RSS** (négyzetes összeg gyöke): minden tűrést a normál eloszlás három szórásaként vesz, és a négyzeteik összegének négyzetgyökeként adja össze. A legtöbb összeállítás jóval a legrosszabb eseten belül van; ez a szokásos becslés sorozatgyártott alkatrészekre.
- Adja meg a **Rés legalább** és a **Rés legfeljebb** értéket, hogy lássa, a legrosszabb eset mindig a határokon belül marad-e, és az RSS szerint hány összeszerelés lesz millióból a határon kívül.
- A **#** oszlop a tagokat az RSS-ből való **részesedésük** szerint rangsorolja: szorítsa az első néhányat, hogy a legnagyobb különbséget érje el.

A {{ui:CSV mentése}} a tagokat, a részesedéseiket és az eredményeket írja ki. A tűréslánc-számítások az összeállítási fájlban mentődnek, és minden módosítás egy lépésnek számít, amelyet a {{key:Mod+Z}} billentyűvel vonhat vissza.

:::note
Egy tűréslánc egy irányú. Nem követi a szögeket vagy a fordulókat a lánc mentén, és nem olvassa be a mérettűréseket a vázlatokból: ezeket beírt tűrésként vagy a címkeblokkon keresztül adja meg.
:::
