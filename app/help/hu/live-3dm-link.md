---
title: A .3dm modell élő kapcsolatban tartása
summary: Módosítsa a modellt abban a programban, amelyben készült, és kövesse a PartCraft testét egy Rhino 8 modellből vagy egy Grasshopper-definícióból, az új alakra újraépülő jellemzőkkel.
keywords: rhino, grasshopper, élő kapcsolat, élő összeköttetés, 3dm, nurbs, paraméteres, kapcsolat, szinkronizálás, szkript, küldés, importált test
from: cf4dc9b2
---

A modellt továbbra is ott alakítsa, ahol modellezi, a megmunkálást, az ellenőrzést és a dokumentálást pedig itt végezze. A másik programban végrehajtott minden módosítás egy importált testet cserél le a PartCraftban, az utánuk következő jellemzők pedig újraépülnek az új alakzaton.

:::note
A kapcsolathoz ugyanazon a számítógépen **CadCraft Studio** szükséges. Böngészőlap nem tud csatlakozni. Semmi nem megy át az interneten: a szkript a Studióval ennek a számítógépnek a saját címén, tokennel beszél.
:::

:::warning
Ezt a kapcsolatot a szkript fájlírójával és a másik program helyettesítőjével tesztelték, még nem magában a Rhino és a Grasshopper programban. Ha ott bármi hibázik, írja meg, mit mondott a hibaüzenet.
:::

## Beállítás

1. A Studióban nyissa meg a PartCraftot. A {{ui:Beállítások}} › {{ui:PartCraft}} › {{ui:Asszisztensek}} részben jelölje be a **Mesterséges intelligencia-asszisztensek és szkriptek használhatják a PartCraftot** lehetőséget, majd kattintson a **Szerkesztés** gombra.
2. A Studióban válassza az {{ui:Asszisztens csatlakoztatása}} lehetőséget. Megjeleníti a címet és a tokent, amelyet lent be fog illeszteni.
3. Töltse le a szkriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## A modellező programból

1. Futtassa a `cadcraft_link.py` fájlt a Rhino szkriptszerkesztőjében (Python 3 a Rhino 8-ban).
2. Először illessze be a címet és a tokent. Ezek a kezdőmappájában lévő `.cadcraft-link.json` fájlban maradnak, sosem a modellben. A Studio minden indításkor új tokent készít, így a szkript akkor újra kérdez.

A leállításhoz futtassa újra a szkriptet.

## A definíciós szerkesztőből

Előbb egyszer futtassa a szkriptet a Rhino programban, hogy a cím és a token mentődjön.

1. Adjon hozzá egy Script komponenst (Python 3), és illessze bele a `cadcraft_link.py` teljes tartalmát.
2. Adja meg ezeket a bemeneteket: `G` (a geometria, listahozzáféréssel), `N` (név, nem kötelező), `On` (logikai kapcsoló) és `Target` (nem kötelező: `model` vagy `part`, ha mindkét alkalmazás nyitva van).
3. Állítsa az `On` értékét igazra.

Minden számítás elküldi a `G`-t, és lecseréli azt, amit a komponens legutóbb küldött.

## Hogyan működik itt

- **Egy test.** A modell minden látható eleme egyetlen importált jellemzővé válik, akárcsak a [.3dm fájl megnyitásakor](topic:open-3dm-files).
- **Zárnia kell.** A PartCraft kitölti a kis lyukakat és a sík nyílásokat, és a másik programnak megmondja, hány van. Ha a modell még így sem zár, a PartCraft megtartja az addigi testet, és az állapotsorban ez látszik. A következő, zárt módosítás frissíti.
- **Fejezze be, amit csinál.** Vázlatban vagy rajzon a frissítések elutasításra kerülnek, és újra megpróbálkoznak; a modellbe való visszatéréskor érkeznek meg.
- **Visszavonás.** A két másodpercen belüli frissítések egyetlen visszavonási lépést alkotnak.
- **Mentés.** Az alkatrészfájl megőrzi a kapcsolatot. Megnyitás után futtassa újra a szkriptet, és ugyanaz a jellemző frissül.

**Csak egy irány.** Az itt végzett módosítások nem jutnak vissza a másik programba.

## Ha valami hiba történik

- **„Egyik ModelCraft- vagy PartCraft-ablak sem engedélyezi”:** végezze el a beállítás 1. lépését.
- **„A Studio elutasította a tokent”:** a Studio újraindult. Másolja ki az új tokent, és futtassa újra a szkriptet. A Grasshopperhez előbb a Rhino programban futtassa.
- **„Nem érhető el a CadCraft Studio”:** a Studio nem fut, vagy a cím megváltozott.
