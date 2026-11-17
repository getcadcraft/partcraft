---
title: Billentyűk és egér
summary: Minden billentyűparancs és egérművelet a PartCraftban, aszerint csoportosítva, hogy hol működnek: mindenhol, másolás és beillesztés, az alkatrészen, a 3D nézetben, vázlatban, az előzménylistában és összeállításban.
keywords: billentyűzet, parancsok, gyorsbillentyűk, billentyűk, egér, pálya, forgatás, pásztázás, nagyítás, görgő, jobb klikk, visszavonás, ismétlés, mentés, megnyitás, escape, törlés, Alt nyíl, másolás, beillesztés, kivágás, kettőzés, összes kijelölése, középső gomb
from: 3a59c3a3
---

Amíg egy panel szövegmezőjébe ír, a billentyűk nem működnek, kivéve a {{key:Mod+S}} és a {{key:Mod+O}} billentyűt, amelyek mindig működnek. A betűbillentyűk módosító nélkül is működnek.

Általános tudnivalók a billentyűkről a böngészőben és a funkcióbillentyűk nélküli billentyűzeteken: [Billentyűk, egerek és érintőpadok](common:keys).

## Mindenhol

| Billentyű | Művelet |
|---|---|
| {{key:Mod+S}} | Az alkatrész mentése (összeállításban: az összeállításé). Előbb bezárja a megnyitott vázlatot |
| {{key:Mod+O}} | Alkatrész- vagy összeállítási fájl megnyitása (ha vannak nem mentett módosítások, előbb rákérdez) |
| {{key:Mod+Z}} | Visszavonás |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Ismétlés |
| {{key:F1}} | Ez a súgó megnyitása vagy bezárása (az alkalmazássávon a {{ui:Súgó}} gomb is). Az {{key:Esc}} is bezárja. Sok laptopon és Mac-billentyűzeten tartsa lenyomva az Fn billentyűt |
| {{key:Ctrl+Shift+F}} | Képernyőmód: normál, teljes képernyő, teljes képernyő a sávok elrejtésével. Macen is a Control, nem a ⌘ |
| {{key:Esc}} | Kilépés a teljes képernyőből (ha teljes képernyőn van) |
| {{key:Mod+,}} | Beállítások, többek között a PartCraft lap (lásd: [PartCraft beállításai](topic:settings)) |

Egy panel számmezőjében a {{key:Mod+Z}} a böngésző saját szöveges visszavonása. A vázlatméret feletti számmezőben a PartCraftban visszavon.

## Másolás, beillesztés és kettőzés

Ezek azon dolgoznak, amit éppen szerkeszt: a kijelölt geometrián megnyitott vázlatban, a kijelölt jellemzőn az előzménylistában, vagy a kijelölt alkatrészen összeállításban. Részletek: [Másolás, beillesztés és kettőzés](topic:copy-paste).

| Billentyű | Művelet |
|---|---|
| {{key:Mod+C}} | A kijelölés másolása |
| {{key:Mod+X}} | Kivágás: másolás, majd törlés |
| {{key:Mod+V}} | Beillesztés. Vázlatban a másolat a mutatót követi: kattintson arra a helyre, ahová kerüljön |
| {{key:Mod+Shift+V}} | Beillesztés helyben: ugyanazokkal a koordinátákkal (összeállításban ugyanarra a helyre) |
| {{key:Mod+D}} | Kettőzés: másolás és beillesztés egy lépésben, a vágólap érintetlen marad |
| {{key:Mod+A}} | Összes kijelölése (vázlatban) |
| {{key:Esc}} | Kijelölés megszüntetése (és a mutatót követő beillesztés megszakítása) |

Számmezőben ezek a billentyűk a szokásos módon másolnak és illesztenek be szöveget. A panelben kijelölt szöveget a böngésző másolja.

## Az alkatrészen (nincs megnyitott vázlat)

| Billentyű | Művelet |
|---|---|
| {{key:S}} | Vázlat a kijelölt síkon vagy sík lapon; ha nincs kijelölés, kattintással választhatja ki a helyet |
| {{key:F}} | Az alkatrész illesztése a nézetbe |
| {{key:M}} | Mérés minden munkaterületen és összeállításban; az {{key:Esc}} törli a kijelöléseket, újabb {{key:Esc}} bezárja (lásd: [Távolságok, szögek és tömeg mérése](topic:measure)) |
| {{key:X}} | Metszeti nézet be- és kikapcsolása minden munkaterületen és összeállításban; az {{key:Esc}} bezárja (lásd: [Belső nézet metszettel](topic:section-view)) |
| {{key:Delete}} | A kijelölt jellemző törlése (rákérdez, ha mások is használják) |
| {{key:0}} … {{key:9}}, {{key:.}} | Kijelölt jellemző esetén: írja be a fő számát (egy kihúzás mélysége, egy furat átmérője, egy minta darabszáma, egy lekerekítés sugara …), majd nyomja meg az {{key:Enter}} billentyűt. Az {{key:Esc}} megtartja a régit |
| {{key:Backspace}} | A kijelölt jellemző törlése, ha van kijelölt jellemző |
| {{key:Esc}} | Vázlatsík-választás megszakítása, vagy a kijelölés törlése (beleértve az {{key:Shift}} billentyűvel kijelölt éleket és lapokat is) |

## A 3D nézetben

Először kattintson a nézetbe, hogy legyen billentyűzet-fókusza.

| Billentyű | Művelet |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | A nézet forgatása 15 fokkal |
| {{key:Shift+Left}} és a többi nyíl | Pásztázás |
| {{key:Plus}} vagy {{key:=}} | Nagyítás |
| {{key:Minus}} | Kicsinyítés |

| Egér | Művelet |
|---|---|
| Húzás a bal gombbal | A nézet körbeforgatása (körpálya) |
| Húzás a jobb vagy a középső gombbal | Pásztázás |
| {{key:Shift}}, {{key:Ctrl}} vagy ⌘ lenyomva tartva húzás a bal gombbal | Pásztázás |
| Görgetés | Nagyítás a mutatónál (a tőle elfelé görgetés nagyít) |
| Kétujjas húzás érintőpadon | A nézet forgatása; {{key:Shift}} mellett pásztázás. A csippentés nagyít. Beállítása a [PartCraft beállításai](topic:settings) között, a **Görgetés** pontban található |

A [PartCraft beállításai](topic:settings) között a **Nézet forgatása: középső gomb** beállítással a középső gomb forgatja a nézetet, a {{key:Shift}} és a középső gomb vagy a jobb gomb pásztáz, a bal gomb csak kijelöl.
| Kattintás | Lap kijelölése (az egész lap kiemelődik), élé vagy síké |
| {{key:Shift}}+kattintás egy élre vagy lapra | Több él vagy lap gyűjtése |
| Kattintás üres térbe | A kijelölés törlése |

## Élek vagy lapok kijelölése lekerekítéshez, letöréshez vagy héjazáshoz

| Billentyű vagy egér | Művelet |
|---|---|
| Kattintás élre vagy lapra | Hozzáadás, vagy eltávolítás, ha már benne van |
| {{key:Esc}} vagy {{key:Enter}} | A kijelölés befejezése (ugyanaz, mint a {{ui:Kész}}) |
| {{key:F}} | Illesztés |
| Nyílbillentyűk, a nézet fókuszában | Forgatás; {{key:Shift}} mellett pásztázás |

## A rajzlapon

| Billentyű | Művelet |
|---|---|
| {{key:F}} | A lap illesztése |
| {{key:Plus}} / {{key:Minus}} | Nagyítás, kicsinyítés (a lap fókuszában) |
| {{key:Shift+Left}} és a többi nyíl | Pásztázás (a lap fókuszában) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | A kijelölt GD&T-jel mozgatása 1 mm-rel |
| {{key:Delete}} vagy {{key:Backspace}} | A kijelölt jel törlése |
| {{key:Esc}} | Jel elhelyezésének megszakítása; különben kijelölés megszüntetése; különben vissza a modellhez |

| Egér | Művelet |
|---|---|
| Kattintás egy nézetre, ha az Adatsík, Keret, Felületi minőség vagy Részlet van kiválasztva | Elhelyezés ott (a legközelebbi vonalhoz illeszkedik) |
| Kattintás egy jelre | Kijelölés |
| Húzás egy jelen | Mozgatás (a vezetővonal a pontján marad) |
| Görgetés | Nagyítás a mutatónál |
| Húzás a jobb vagy a középső gombbal | Pásztázás |

## Vázlatban

| Billentyű | Művelet |
|---|---|
| {{key:L}} | Vonal |
| {{key:R}} | Téglalap |
| {{key:C}} | Kör |
| {{key:A}} | Ív (középpont, kezdőpont, végpont) |
| {{key:P}} | Pont |
| {{key:N}} | Középvonal |
| {{key:F}} | Sarok lekerekítése |
| {{key:D}} | Méretezés |
| {{key:B}} | Spline (illesztőpontokkal) |
| {{key:T}} | Vágás |
| {{key:E}} | Nyújtás |
| {{key:O}} | Eltolás párhuzamosan ({{key:B}} eltolás közben: mindkét oldalra) |
| {{key:M}} | Tükrözés |
| {{key:S}} | Kijelölés |
| {{key:Q}} | A kijelölt görbék váltása konstrukciósra és vissza |
| {{key:Enter}} | Vonallánc vagy spline befejezése |
| {{key:Delete}} vagy {{key:Backspace}} | A kijelölés törlése |
| {{key:Mod+A}} | Összes kijelölése a vázlatban |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Geometria másolása, kivágása, beillesztése (a beillesztés a mutatót követi) |
| {{key:Mod+Shift+V}} | Beillesztés ugyanazokkal a koordinátákkal |
| {{key:Mod+D}} | A kijelölés kettőzése, és elhelyezése kattintással |
| {{key:Esc}} | Lépés vissza: a számmező vagy a beillesztés megszakítása, a vonallánc befejezése, vissza a Kijelöléshez, a kijelölés törlése, majd a vázlat bezárása |

| Egér | Művelet |
|---|---|
| Kattintás | Pontok elhelyezése rajzolóeszközzel; kijelölés a Kijelöléssel |
| {{key:Shift}}+kattintás | Hozzáadás a kijelöléshez vagy elvétel belőle ({{key:Ctrl}}+kattintás Windowson és Linuxon, ⌘+kattintás Macen ugyanezt teszi) |
| Húzás üres területen (Kijelölés) | Ablak: teljesen a területen belül lévő mindent kijelöli |
| Pont, vonal vagy kör élének húzása (Kijelölés) | Mozgatás; a kapcsolatok megmaradnak |
| Méretezés számának húzása (Kijelölés) | A felirat mozgatása |
| Dupla kattintás a méretezésen | Értékének módosítása |
| Dupla kattintás vagy jobb kattintás vonalrajzolás közben | A vonallánc befejezése |
| Húzás jobb vagy középső gombbal | Pásztázás |
| Görgetés | Nagyítás a mutatónál |

### A számmezőben

| Billentyű | Művelet |
|---|---|
| {{key:Enter}} | Az érték alkalmazása |
| {{key:Esc}} | Bezárás módosítás nélkül |

A számmezőn kívülre kattintva is alkalmazza az értéket.

## Az előzménylistában

| Billentyű | Művelet |
|---|---|
| {{key:Tab}} | Eljutás a listába |
| {{key:Up}} / {{key:Down}} | Mozgás a sorok között |
| {{key:Enter}} vagy {{key:Space}} | A sor kijelölése |
| {{key:Alt+Up}} / {{key:Alt+Down}} | A kijelölt jellemző fel vagy le mozgatása, ahol az előzmény engedi |
| {{key:F2}} | A jellemző fő számának módosítása a sorában; az {{key:Enter}} beállítja, az {{key:Esc}} megtartja a régit |

| Egér | Művelet |
|---|---|
| Kattintás | Sík vagy jellemző kijelölése |
| Dupla kattintás egy vázlaton | Megnyitás |
| Dupla kattintás a jellemző számán | Módosítás a sorban |

## Összeállításban

| Billentyű | Művelet |
|---|---|
| {{key:J}} | Kapcsolat indítása: ezután kattintson egy-egy lapra két alkatrészen |
| {{key:F}} | Illesztés |
| {{key:Esc}} | Az elkezdett kapcsolat megszakítása, vagy a kijelölés törlése |
| {{key:Delete}} | A kijelölt alkatrész vagy kapcsolat eltávolítása |
| {{key:Backspace}} | A kijelölt alkatrész vagy kapcsolat eltávolítása |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Visszavonás és ismétlés az összeállítás saját listájában |
| {{key:Mod+D}} | A kijelölt alkatrész kettőzése (ugyanaz az alkatrész, a többi mellé) |
| {{key:Mod+C}}, majd {{key:Mod+V}} vagy {{key:Mod+Shift+V}} | Alkatrész másolása, beillesztése a többi mellé vagy ugyanarra a helyre |

A nézetben az egér ugyanúgy működik, mint a fenti 3D nézetben. Kattintson egy alkatrészre a kijelöléséhez. Kattintson duplán a listában lévő alkatrészre a szerkesztéséhez.

## A Szkript munkaterületen

| Billentyű | Művelet |
|---|---|
| {{key:F5}} | A szkript futtatása (a szerkesztőben, a panelen vagy a nézetben) |
| {{key:Mod+Enter}} | A kijelölt sorok, vagy a kurzor alatti sor futtatása |
| {{key:Tab}} / {{key:Shift+Tab}} | A kijelölt sorok behúzása / kihúzása. A szerkesztő billentyűzettel való elhagyásához nyomja meg az {{key:Esc}}, majd a {{key:Tab}} billentyűt |
| {{key:Mod+/}} | A kijelölt sorok kommentbe tétele, vagy visszaállítása |
| {{key:Mod+F}} / {{key:Mod+H}} | Keresés / keresés és csere a szkriptben; az {{key:Enter}} vagy {{key:F3}} a következő találat, a {{key:Shift+Enter}} vagy {{key:Shift+F3}} az előző, az {{key:Esc}} bezár |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | A kurzor alatti blokk összecsukása / kibontása (függvény, if, for, while … end) |
| {{key:Mod+Space}} | A beírt névhez kiegészítési javaslatok (két betű után is megnyílik); {{key:Up}} / {{key:Down}} választ, {{key:Enter}} vagy {{key:Tab}} elfogad egyet, {{key:Esc}} bezár |
| {{key:Enter}} a konzol alatti sorban | Az adott utasítás futtatása; {{key:Up}} és {{key:Down}} a korábbiakat hozza vissza |
| {{key:F}} | A nézet illesztése arra, amit a szkriptek megjelenítenek |

Lásd: [Szkriptek írása és futtatása](topic:craftscript).

## A böngésző által esetleg átvett parancsok

- A {{key:Mod+Y}} Safariban megnyithatja az előzményeket: az ismétléshez használja a {{key:Mod+Shift+Z}} billentyűt.
- A {{key:Mod+D}} a böngésző könyvjelző billentyűje: a PartCraft az alkalmazás fókuszában átveszi, szövegmezőbe íráskor viszont nem.
- Az {{key:F11}} és a {{key:Mod+Plus}} / {{key:Mod+Minus}} a böngésző teljes képernyője és oldalnagyítása, nem a PartCraftéi. A teljes képernyőhöz használja a {{key:Ctrl+Shift+F}} billentyűt, a modellhez a görgőt.
- A funkcióbillentyűkhöz sok laptopon és Macen az Fn billentyű kell: a súgóhoz nyomja meg az Fn+{{key:F1}} billentyűt, vagy használja a {{ui:Súgó}} gombot.

Érintés- és érintőpad-gesztusok: [Érintőpad, érintés és kis képernyők](topic:trackpad-and-touch).

## Hol van a Mozgatás

A **Mozgatás** a Jellemzők csoport {{ui:Továbbiak}} menüjében található, {{ui:Test mozgatása}} néven, a {{ui:Mozgatás}} mezőben, ahol ΔX, ΔY és ΔZ értéket ír be, és a {{ui:Húzás a mozgatáshoz}} nyilakként az alkatrészen.
