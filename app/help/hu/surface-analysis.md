---
title: Zebracsíkok és görbület
summary: Ellenőrizze, mennyire simán csatlakoznak egy alkatrész lapjai: a zebracsíkok a nézetet követik, a görbület pedig az átlagos görbület színskáláját mutatja, a Nézetek menüből.
keywords: zebra, zebracsíkok, tükröződési vonalak, görbület, görbületi térkép, átlagos görbület, felületminőség, folytonosság, érintő, g1, g2, sima, élhajlás, kiemelő vonalak
from: 78fed4c3
---

Két gyors nézet annak megállapítására, mennyire simák egy alkatrész lapjai. Bármely alkatrészen használható a Design munkaterületen (a Form munkaterületnek saját eszköze van a szerkesztett formához: lásd [Szabad formájú alakzatok (Form)](topic:form-surfaces)).

## Zebracsíkok

Nyissa meg a {{ui:Nézetek}} menüt, és válassza a {{ui:Zebracsíkok}} lehetőséget. Az alkatrész egy csíkos fény tükröződését mutatja, ahogy egy polírozott felület tenné:

- Ahol két lap **érintőlegesen** csatlakozik (például lekerekítés egy síkon, egy sima Gordon-felület), a csíkok átfutnak a csatlakozáson, enyhe töréssel.
- Ahol **élhajlásnál** találkoznak, a csíkok megszakadnak és elugranak.
- Ahol a görbület is egyezik (G2), a csíkok törés nélkül, folytonosan futnak tovább.

Forgassa a nézetet (húzással vagy a nézetkocka egyik lapjával): a csíkok az új irányból újra rajzolódnak. A **Csíkok** beállítja, hány csík legyen.

## Görbület

Válassza ugyanebben a menüben a {{ui:Görbület}} lehetőséget. Az alkatrész az **átlagos görbülete** szerint színeződik: kék ahol homorú (konkáv), halvány ahol sík, piros ahol domború (konvex). A kártya megmondja, mekkora görbületnél érik el a színek a teljes erősséget, 1/mm-ben és sugárként is. Az éles élek nagyon görbültnek számítanak, ezért erősen látszanak; a köztük lévő lapokat nézze meg.

## A kártya

Mindkettő megnyitja az elemzési kártyát a nézet bal alsó sarkában, amely a [dőlésszög-elemzést](topic:draft-analysis) is tartalmazza. Váltson közöttük a **Megjelenítés** gombbal. A nyitott elem újbóli kiválasztása a {{ui:Nézetek}} menüben, a {{ui:Bezárás}} gombbal vagy az {{key:Esc}} billentyűvel kikapcsolja. A színek követik az alkatrész változásait; semmi nem mentődik az alkatrészbe.
