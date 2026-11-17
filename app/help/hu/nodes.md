---
title: Csomópontok: modell felépítése összekötéssel
summary: Kössön számokat pontokhoz, pontokat görbékhez, görbéket felületekhez. Ha egy számot megváltoztat, minden utána következő újraépül. Minden csomópont egy CraftScript-sor is, és a gráf a fájlban mentődik.
keywords: csomópontok, csomópontszerkesztő, vizuális szkriptelés, paraméteres, gráf, vezetékek, portok, szabad forma, nurbs, áthúzás, kihúzás, forgatás, kör, görbe, felület, sorozat, tartomány, véletlen, lista, szkript, craftscript, grasshopper
from: 3a4625de
---

A **Csomópontok** szerkesztő dobozok összekötésével épít geometriát. Minden doboz (csomópont) egy kis feladatot végez: szám, pont, kör vagy áthúzás előállítása. Egyik eredményét a következő bemenetéhez köti, és a modell követi, ha az elején egy számot megváltoztat.

Nyissa meg a munkaterület listájából: {{ui:Csomópontok}}. Megnyílik a szerkesztőablak. Az alkatrész, amelynek már van gráfja, a munkaterület megnyitásakor megjeleníti azt. Ez a 3D-nézet fölé nyíló ablak: a címsorát húzva mozgathatja, a sarkát húzva átméretezheti.

## Összekötés

1. Válasszon csomópontot a bal oldali listából (a keresőmezőbe írva szűkítheti, a <kbd>Enter</kbd> az első találatot adja hozzá). A vászon közepén jelenik meg.
2. Húzza az egyik csomópont jobb oldalán lévő kör alakú **kimeneti** pontjától a másik csomópont bal oldalán lévő kör alakú **bemeneti** pontig. A pont zöld lesz, ha illeszkedik, és piros, ha nem; az okának megtekintéséhez vigye rá az egeret.
3. Ha egy bemenet nincs összekötve, egy beírható értékmező jelenik meg. Írjon be egy számot, és nyomja meg a <kbd>Tab</kbd> billentyűt: az eredmény újraépül.
4. A csomópont címsorában lévő kis kör a **szeme**. A bekapcsolt szemű csomópont megjelenik a 3D-nézetben: a görbék vonalként, a felületek árnyékolva, a pontok pöttyként.

A csomópontot a címsoránál fogva húzza. A háttér húzásával mozgathatja a vásznat, a görgővel nagyíthat. A <kbd>Delete</kbd> törli a kijelölt csomópontot. A {{ui:Rendezés}} oszlopokba rendezi a csomópontokat, az {{ui:Illesztés}} mindet a látótérbe hozza, az {{ui:Visszavonás}} és az {{ui:Ismétlés}} lépésenként végigmegy a módosításain.

## Típusok és mértékegységek

A portoknak típusa van: szám, igen/nem, pont, vektor, görbe, felület, háló, test, vagy „geometria” az ezek bármelyikére. Pont vezethet vektor-bemenetre és vissza is. A számokhoz mértékegység tartozik: a **hossz** milliméterben, a **szög** fokban van megadva. Hossz nem vezethet szögbe, és hossz szorozva hosszal (terület) nem engedélyezett, így a hibás vezetéket a kötés pillanatában megállítja.

A négyzet alakú pont egy **lista**. Ha egy lista egyetlen értékű bemenetre érkezik, a csomópont minden elemre egyszer lefut, és az eredménye lista lesz. A rövidebb lista az utolsó elemét ismétli. Például a magasságok **Sorozatát** a **Mozgatás** csomópontba kötve a példányok egymásra rakott halmazát kapjuk.

## Testek és logikai műveletek csomópontként

A **Testek** csoport a Felületek panel pontos felületeiből zárt testeket készít: **Doboztest**, **Hengertest** és **Gömbtest** (méretek mm-ben), **Unió**, **Kivonás** és **Metszet** (a második test az elsőből származik; a tűrés azt adja meg, mennyire térhetnek el a testmotor háromszögei a pontos felületektől), **Lekerekítés lapok között** (a lapok a testen belüli számukkal, az elsőé 1; egy sugár és – 0-nál nagyobb esetén – egy sugár a végén), **Test térfogata** (mm³) és **Test hálóvá** (a megtekintéshez vagy a beégetéshez). A testnek saját portípusa van: pont vagy szám nem köthető test-bemenetre, és a pont piros marad. A logikai műveletek és a lekerekítés csomópontjai a program saját testmotorját használják, amely a szerkesztő első megnyitásakor töltődik be.

## Hibák

Ha egy csomópont nem tudja elvégezni a feladatát, a neve alatt pirosan megmondja az okát („A sugárnak nullánál nagyobbnak kell lennie.”), és az utána következő csomópontok várakoznak. Ugyanez az üzenet megjelenik a Problémák panelen mint probléma, így onnan is megtalálhatja.

## Minden csomópont egy szkriptsor

Nyomja meg a {{ui:Szkript}} gombot, hogy a gráfot CraftScript-ként lássa: csomópontonként egy sor, például `n3 = nd_circle(n2, n1, [0 0 1]);`. Szerkessze a szöveget, és nyomja meg a {{ui:Gráf készítése ebből a szkriptből}} gombot, hogy visszaalakítsa gráffá. Ugyanezek az `nd_` függvények működnek a PartCraft CraftScript-jében is, így a gráf ott is futtatható, ciklusba fűzhető vagy tesztelhető. A véletlen számok mindig **magszámot** (seed) kapnak, így ugyanaz a gráf minden számítógépen ugyanazt az eredményt adja.

## Mentés a fájllal

A gráf az alkatrészfájlban mentődik (nem az előzményekben, így a szerkesztő Visszavonása önálló). A csomópontok a testen kívül görbéket, felületeket és hálókat készítenek: nem változtatják meg az alkatrész jellemzőit.
