---
title: Szkriptek írása és futtatása (Szkript munkaterület)
summary: A Szkript munkaterület lépésenként: CraftScript- vagy Lua-szkript írása, futtatás az F5-tel, a konzol olvasása, az eredmények megőrzése a változókban a következő szkripthez, hálók, mezők és ábrák megjelenítése, futás leállítása, és szkriptek mentése az alkatrésszel.
keywords: szkript, szkriptelés, szkriptírás modellezés közben, kiemelés, második képernyő, második monitor, param, params, paraméterek szkriptekben, CraftScript, Lua, kód, program, szerkesztő, konzol, REPL, parancssor, futtatás, F5, kijelölés futtatása, leállítás, változók, munkaterület, ábra, mező, háló, jelmagyarázat, alnézet, elemzés, automatizálás, mátrix, numerikus
from: d0003e89
---

**Előzetes verzió.** A szkriptelés új a PartCraft 0.3-ban, és előzetes verzió: a nyelv, a könyvtár és a szkriptek mentésének módja még változhat, ezért a most írt szkriptek később kisebb javítást igényelhetnek. Jelezze, ha valami elromlik.

A Szkript munkaterület a saját számításait futtatja az alkatrész mellett: kis összegeket, teljes elemzéseket vagy az [elemzőkönyvtár](topic:craftscript-library) szkriptjeit. A szkriptek íródhatnak **CraftScriptben** (a MATLAB-hoz hasonló mátrixnyelv, lásd [A CraftScript nyelv](topic:craftscript-language)), **Luában** (lásd [Szkriptek Lua nyelven](topic:craftscript-lua)), vagy **Pythonban** (lásd [Szkriptek Python nyelven](topic:craftscript-python)).

Válassza a **Szkript** elemet az eszköztár bal oldalán lévő **Munkaterület** dobozban. Az alkatrész nem változik. A jobb oldali panel szkriptpanellé válik (a szokásosnál szélesebb; húzza a szélét a méretezéshez, vagy vigye egy második képernyőre a {{ui:⋯}} menüjével, lásd [Panelek elrendezése](common:arrange-panels)).

## Szkript a modellezés közben

Nem kell kilépnie a Tervezés munkaterületről, hogy szkriptet írjon. A Tervezésben a jobb oldali panel {{ui:Szkript}} lapja ugyanazt a szerkesztőt, konzolt, változókat és könyvtárat tartalmazza, ugyanazokkal a szkriptekkel. A jellemzőfa és a nézet továbbra is működik: kattintson egy jellemzőre a kijelöléshez, kattintson duplán egy vázlatra a szerkesztéséhez, forgassa a nézetet, majd térjen vissza a {{ui:Szkript}} lapra, és nyomja meg az {{key:F5}} billentyűt.

Amit a szkript megjelenít (hálók, mezők, ábrák, táblázatok), nem rajzolódik rá a modelljére a Tervezésben: ezt a konzol jelzi, a Szkript munkaterületen pedig minden megjelenik, amikor átvált oda.

A {{ui:Kiemelés}} gomb a {{ui:Futtatás}} mellett a teljes panelt saját ablakba helyezi, például egy második képernyőn, így a szerkesztő és a teljes nézet egymás mellett lehet. A {{ui:Visszatétel}} gomb visszailleszti. Lásd [Panelek elrendezése](common:arrange-panels).

## Az első szkript futtatása

1. Írjon a szerkesztőbe, például:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Nyomja meg az {{key:F5}} billentyűt (vagy a {{ui:Futtatás}} gombot). A szerkesztő alatti konzol mutatja, mit írt ki a szkript, és a „Kész, … s alatt” üzenetet. Az ábra a 3D-s nézet alján lévő **alnézetekben** jelenik meg.
3. A pontosvessző nélküli sor kiírja az értékét, mint a MATLAB-ban: az `a = 3` kiírja, hogy `a = 3`; az `a = 3;` nem ír ki semmit.
4. A szkript egy részének futtatásához jelölje ki a sorokat, és nyomja meg a {{key:Mod+Enter}} billentyűt ({{ui:Kijelölés}}). Kijelölés nélkül a kurzor alatti sort futtatja.
5. A konzol alján lévő sor (a `>>` után) egy utasítást futtat, amikor megnyomja az {{key:Enter}} billentyűt. Az {{key:Up}} és a {{key:Down}} billentyűk a korábbi sorokat hozzák vissza.

## Keresés, összecsukás és kiegészítés

- **Keresés és csere.** Nyomja meg a {{key:Mod+F}} billentyűt (vagy a {{key:Mod+H}}-t, a cseréhez is). A kód fölött sáv nyílik: írja be, mit keres; a találatok kiemelődnek, a számláló pedig mutatja, hol tart. A doboz melletti gombok a kis- és nagybetűt (**Aa**), a csak teljes szavakat (**W**), és a reguláris kifejezést (**.\***) kapcsolják; a csere mezőben a `$1` visszaadja, amit az első csoport talált. A {{ui:Csere}} a jelenlegi találatot cseréli, a {{ui:Mind}} minden találatot egy lépésben cserél, amelyet a {{key:Mod+Z}} visszavon.
- **Összecsukás.** Kattintson a sorszám melletti ▾ jelre, vagy nyomja meg a {{key:Mod+Shift+[}} billentyűket, amikor a kurzor a `function`, `if`, `for`, `while`, `switch` vagy `try` során áll (Luában: `function`, `do`, `if`, `repeat`), hogy elrejtse a belső sorait; a sor megmutatja, hány sor van benne. A ▸ vagy a {{key:Mod+Shift+]}} újra kinyitja. Az összecsukás csak elrejti a sorokat: a futtatás, a mentés, a másolás és a sorszámok továbbra is minden sort számolnak, és egy összecsukott sorba írás előbb kinyitja azt.
- **Kiegészítések.** Írjon be két betűt egy névből, vagy nyomja meg a {{key:Mod+Space}} billentyűket: lista jelenik meg a változókról, a nyelv függvényeiről (az argumentumaikkal), kulcsszavakról és a szkriptben már szereplő nevekről. Nyilakkal válasszon, és nyomja meg az {{key:Enter}} vagy a {{key:Tab}} billentyűt.

## Ha valami elromlik

- A hiba megnevezi a problémát és a sorát: a sor pirossal jelölődik a szerkesztőben, a konzolban pedig a **n. sor** hivatkozás oda visz.
- Végtelen ciklus esetén nyomja meg a {{ui:Leállítás}} gombot (az eszköztáron vagy a panelen). A szkript azonnal leáll; a változók megtartják az adott futás előtti értékeiket.
- Minden futtatásnak van lépéskerete is (alapértelmezetten 2 milliárd lépés; a panel **Futtatási beállítások** részében módosíthatja). Amelyik futás túllépi, üzenettel leáll.

## A változók átadódnak a szkriptek között

Minden legfelső szintű változó, amelyet egy szkript készít, a **Változók** lapra kerül (név, típus, méret, legkisebb és legnagyobb érték), és ott marad a következő szkriptnek, bármelyik nyelven. Így az egyik szkript hálóz, a következő megold, a harmadik ábrázol.

- Kattintson egy változóra a megjelenítéséhez: a hálók, mezők és modellek a 3D-s nézetben, a tömbök táblázatként az alnézetekben (vektornál vonaldiagram, mátrixnál színtérkép).
- A {{ui:Mentés JSON-ként}}, a {{ui:Mentés CSV-ként}} (számtáblázat) és a {{ui:Mentés HDF5-ként}} letölti; a {{ui:Törlés}} eltávolítja; az {{ui:Összes törlése}} kiüríti a munkaterületet.
- Jelölje be a **Változók mentése az alkatrésszel** lehetőséget, hogy az alkatrészfájlban megmaradjanak (legfeljebb 32 MB; a nagyobbak csak erre a látogatásra maradnak meg). Ilyen alkatrész megnyitásakor a panel felajánlja a betöltésüket.

## Hálók, mezők és ábrák

- A `show(m)` hálót rajzol; a `show(f)` a mezőt színezi a hálóján, jelmagyarázattal. A nézet bal felső részén lévő **Megjelenítettek** lista minden elemet elrejt ({{ui:szem}}) vagy eltávolít, és az alkatrészt magát is el- vagy megjeleníti. A jelmagyarázat alatt írjon be tartományt (**-tól**, **-ig**), vagy nyomja meg az {{ui:Automatikus}} gombot; a vektor- vagy feszültségmező is felkínálja, melyik összetevőt mutassa.
- A `show(f, 'deform', u, 'scale', 50)` a hálót a `u` elmozdulásmezővel eltolva rajzolja, 50-szeresére nagyítva (a `scale` nélkül a modell méretének körülbelül 8%-a).
- Kattintson a megjelenített hálóra: a legközelebbi csomópont, az elem és a mezőértékek megjelennek az alnézetekben (**Kiválasztott**).
- A `plot`, az `imagesc` és a `table` vonaldiagramot, egy 2D-s tömb színtérképét vagy egy táblázatot tesz az alnézetekbe. Az azonos `'id'`-vel (vagy címmel) rendelkező ábra felülírja a korábbit, így egy ciklus frissíthet egyetlen konvergenciaábrát; a `'append', true` görbét ad hozzá. A {{ui:Törlés}} kiüríti az alnézeteket; a nyíl összecsukja őket.
- Két vagy több ábra esetén a {{ui:Egymás mellett}} mindet egyszerre mutatja (a legújabb hatot); egy táblázat vagy kép lapjára kattintva ismét csak az látszik.
- Minden ábra alatt ott van a {{ui:PNG}}, a {{ui:SVG}} és a {{ui:CSV}}. A PNG és az SVG fehér alapon, a papírszínekkel nyomtatja, a témától függetlenül (a PNG 1600 × 1000 pixel; az SVG élesen skálázódik); a CSV minden számjegyével tartalmazza az adatokat: egy x-oszlopot és oszlopot görbénként, ha a görbék közös x-et használnak, különben pontonként egy sort a görbe nevével.
- Az {{key:F}} vagy az {{ui:Illesztés}} a nézetet a megjelenítetthez illeszti.

## Fájlok

- A {{ui:Megnyitás}} a Szkript csoportban (vagy fájlok húzása a nézetre vagy a panelre): a `.craft`, `.lua` és `.py` fájlok új szkriptként nyílnak meg (nem futnak le); az adatfájlok (STL, OBJ, CSV, JSON, NPY, HDF5) a fájlnevük alatt töltődnek be a változókba.
- A {{ui:Mentés}} a Szkript csoportban letölti az aktuális szkriptet fájlként.
- Az {{ui:Új}} a Szkript csoportban (vagy a lapok melletti {{ui:+}}) új szkriptet kezd. Kattintson duplán egy lapra az átnevezéséhez; a {{ui:×}} eltávolítja (ezt vissza lehet vonni).

## Az alkatrész paramétereinek olvasása

Egy szkript az alkatrész paramétereit (lásd [Paraméterekkel vezérelje az alkatrészt](topic:parameters)) a nevükön olvassa:

```
w = param('width');     % egy paraméter értéke mm-ben (vagy fokban, vagy egyszerű számként)
p = params();           % mind, struktúraként: p.width, p.height
```

Lua- és Python-szkriptben ezek a `cs.param('width')` és a `cs.params()`. A szkriptek csak olvassák a paramétereket: a {{ui:Paraméterek}} lapon módosítsa őket. A szkript lapja alatt egy sor felsorolja a `param('…')`-tal olvasott paramétereket, és megjelöli azokat, amelyek az alkatrészben nincsenek; a {{ui:Paraméterek}} lap minden paraméter alatt felsorolja a szkriptet. A futás közben összerakott név, például a `param(name)`, nem kerül a listára.

## A szkriptek az alkatrészben mentődnek

Minden lapon lévő szkript az alkatrészben marad, így a **Fájl** csoport {{ui:Mentés}} gombja mindet menti vele, és a rajtuk tett változtatások visszavonhatók. Egy alkatrész megnyitása **soha nem futtatja a szkriptjeit**: a konzol kiírja, hány van benne, és csak a Futtatás megnyomására futnak le. Más által készített alkatrész bármilyen szkriptet tartalmazhat: olvassa el, mielőtt futtatja. A szkriptek háttérben futnak ezen a számítógépen, hálózat nélkül, és nem érik el az oldalt.

## Kapcsolódó

- [A CraftScript nyelv](topic:craftscript-language)
- [Szkriptek Lua nyelven](topic:craftscript-lua)
- [Szkriptek Python nyelven](topic:craftscript-python)
- [Az elemzőkönyvtár](topic:craftscript-library)
- [Saját elemzés írása](topic:craftscript-own-analysis)
