---
title: Alkatrész módosítása az előzményén keresztül
summary: Szerkessze utólag a jellemzőket és a vázlatokat, tiltsa le, görgessen vissza, szúrjon be jellemzőket korábbra, rendezze át, nevezze át és törölje őket, és vonja vissza bármelyiket.
keywords: előzmények, jellemzőfa, tervfa, jellemző szerkesztése, vázlat szerkesztése, letiltás, letiltás megszüntetése, visszagörgetés, előregörgetés, átrendezés, jellemző mozgatása, törlés, átnevezés, visszavonás, ismétlés, újraépítés, újragenerálás, szülő-gyermek, nagy alkatrész, sok jellemző, lassú újraépítés, 750 jellemző
from: 6f75aef4
---

Egy PartCraft-alkatrész az előzménye: a bal oldalon látható síkok, vázlatok és jellemzők listája. A PartCraft minden változáskor a lista tetejétől újraépíti a testet. A lista elején lévő érték módosítása mindent megváltoztat, ami arra épül.

## Jellemző szerkesztése

1. Kattintson a jellemzőre az előzményekben (vagy az alatta behúzott vázlatra).
2. Módosítsa a beállításait a jobb oldali panelen. Minden módosítás azonnal újraépíti az alkatrészt.

Nincs OK vagy Mégse gomb: minden módosítás érvénybe lép. Ha nem tetszik, nyomja meg a {{key:Mod+Z}} billentyűkombinációt.

## Mely éleket vagy lapokat használja a lekerekítés, letörés vagy héjazás

Kattintson duplán a jellemzőre az előzményekben, vagy jelölje ki, és válassza a {{ui:Pick edges}} (vagy a {{ui:Pick faces}}) gombot. Kattintson élekre vagy lapokra, hogy hozzáadja vagy eltávolítsa őket, majd válassza a {{ui:Done}} gombot, vagy nyomja meg az {{key:Esc}} billentyűt. Lásd: [Lekerekítés, letörés és üregesítés](topic:fillet-chamfer-shell).

## Vázlat szerkesztése

1. Kattintson duplán a vázlatra az előzményekben, vagy jelölje ki, majd a jobb oldali panelen válassza a {{ui:Edit sketch}} gombot (vagy az eszköztárban a {{ui:Sketch}} gombot).
2. Az alkatrész visszaáll arra az állapotra, amikor a vázlat készült: a vázlat utáni jellemzők szerkesztés közben rejtve vannak.
3. Módosítsa a geometriát, a kapcsolatokat vagy a méreteket.
4. Zárja be a vázlatot. Az egész alkatrész a módosítással újraépül.

Ha csak egy méretet kell módosítania, nem kell megnyitnia a vázlatot. Jelölje ki a jellemzőt vagy a vázlatot, és a jobb oldali panelen a **Vázlatméretek** (vagy a **Vezérlő méretek**) alatt módosítsa a számot. Lásd: [Méretek módosítása a vázlat megnyitása nélkül](topic:change-sizes).

## Amikor egy jellemző hibás

Ha egy módosítás lehetetlenné teszi a jellemzőt, a PartCraft a többit megépíti, a problémát pedig megjelöli:

- a jellemző **⚠ hiba** jelzést mutat az előzményekben, az üzenete pedig a jobb oldali panel tetején látható (a sorra húzva is olvashatja);
- a jellemzőt igénylő jellemzők **⚠ nincs elkészítve** jelzést kapnak: „Az Extrude2 kell hozzá, és az hibás.”;
- az állapotsor jelzője: „1 hibás jellemző”.

Szüntesse meg az okot (vagy vonja vissza a módosítást), és az alkatrész újra felépül. A gyakori üzenetek és a teendők a [Hibaelhárítás](topic:troubleshooting) témakörben találhatók.

## Jellemző letiltása

A letiltás kikapcsol egy jellemzőt anélkül, hogy törölné: hasznos, ha furat vagy minta nélkül szeretné kipróbálni az alkatrészt.

1. Jelölje ki a jellemzőt.
2. Válassza a {{ui:Suppress}} gombot. A sorában **ki** látszik. Az azt igénylő jellemzők szintén nem épülnek meg.
3. A visszakapcsoláshoz válassza a {{ui:Unsuppress}} gombot.

## Visszagörgetés

A visszagörgetés csak egy pontig építi fel az alkatrészt, így láthatja azt a korábbi állapotában, vagy korábbi helyre adhat hozzá jellemzőt az előzményekben.

1. Jelöljön ki egy jellemzőt, és válassza a {{ui:Roll back to here}} gombot. Az a jellemző és minden alatta lévő szürkére vált, és nem épül meg. Egy **Visszagörgetési sáv · előregörgetés** sor jelöli a helyet.
2. Az most hozzáadott jellemző a **sávnál** kerül be, a szürke jellemzők elé.
3. Kattintson a **Visszagörgetési sáv · előregörgetés** sorra, hogy újra felépítse az egészet.

A visszagörgetés helye elmentődik a fájlba.

## Jellemzők átrendezése

1. Jelölje ki a jellemzőt.
2. Válassza a {{ui:Move up}} vagy a {{ui:Move down}} gombot, vagy ha a sora fókuszban van az előzményekben, nyomja meg az {{key:Alt+Up}} vagy az {{key:Alt+Down}} billentyűt.

Egy jellemző soha nem kerülhet olyan fölé, amit használ. A gomb szürke, és ha fölé viszi az egeret (vagy megpróbálja a billentyűt), megjelenik az ok, például: „Az Extrude2 a Sketch2-t használja, ezért a Sketch2-nek előbb kell szerepelnie.”

Amit egy jellemző használ: a vázlatát; azt a lapot, amelyen a vázlata ül; azokat a jellemzőket, amelyeket egy minta vagy tükrözés másol; továbbá egy vázlatvonalat vagy forgatást, ha irányként vagy tengelyként használja.

## Jellemző törlése

1. Jelölje ki a jellemzőt, és a jobb oldali panelen vagy az eszköztárban válassza a {{ui:Delete}} gombot, vagy nyomja meg a {{key:Delete}} billentyűt.
2. Ha más jellemzők használják, a PartCraft megkérdezi: „Az Extrude3 és a Hole1 az Extrude1-et használja, ezért azok is törlődnek.” Válassza az {{ui:Delete all}} vagy a {{ui:Cancel}} gombot.

A jellemző törlése nem törli a vázlatát: a vázlat használaton kívüli vázlatként újra megjelenik a nézetben, és egy másik jellemzőhöz felhasználható. Ha nincs rá szüksége, külön törölje a vázlatot.

## Átnevezés

Jelölje ki a jellemzőt, majd a jobb oldali panel alján írjon be új **Nevet** (legfeljebb 60 karakter). Ha nincs semmi kijelölve, az alkatrész saját neve a jobb oldali panelen látható.

## Több száz jellemzős alkatrészek

A több száz jellemzős alkatrészeket 750 jellemzőig teszteljük. A PartCraft megőrzi a test állapotát az előzmények közepén, így az előzmények végén történő módosítás csak az utána következő jellemzőket építi újra; a lista eleji módosítás viszont újraépíti mindazt, ami arra épül, és ez tart a legtovább. A visszavonás és az ismétlés csak attól a ponttól építi újra, ahol a két állapot eltér. Nagy alkatrésznél gyorsabb munkához görgessen vissza ahhoz a ponthoz, ahol dolgozik (lásd fent: Visszagörgetés), vagy tiltsa le azt, amire most nincs szüksége. Több, egymást nem érintő kivágást és kiemelést együtt alkalmaz a PartCraft, így az olyan alkatrész, amely sok különálló furatból és kiemelésből áll, gyorsabban épül fel, mint ahogy a jellemzők száma sugallja.

Egy nagy alkatrész a háttérben épül újra: az alsó építési jelző **Újraépítés…** feliratot mutat, és jelzi, meddig jutott; a nézet, a panelek és a menük közben is működnek. A képernyőn a legutóbb elkészült állapot látszik, amíg az új el nem készül. Ha az újraépítés közben újra módosít valamit, a PartCraft a legújabb változatot építi fel, és az éppen készülőt eldobja. Egy kis alkatrész továbbra is azonnal újraépül.

## Visszavonás és ismétlés

- {{key:Mod+Z}} vagy {{ui:Undo}} visszavonja az utolsó módosítást: egy jellemzőt, egy beállítást, egy vázlatszerkesztést, egy húzást. Az állapotsor megmondja, mit, például: „Visszavonva: méret módosítása.”
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} vagy {{ui:Redo}} ismétli.
- A PartCraft az utolsó 200 lépést tárolja (ha az alkatrész olyan nagy, hogy 200 másolat sok memóriát foglalna, kevesebbet, de legalább az utolsó 20-at). A rajzlapon végzett módosítások (egy metszet, egy áthelyezett GD&T-jel) ugyanebben a listában vannak. Fájl megnyitása vagy új alkatrész kezdése törli.

:::mac
Mac-en az ismétléshez a ⇧⌘Z billentyűt használja. Safari-ban a ⌘Y a böngésző előzményeit nyithatja meg.
:::
