---
title: Vázlat teljes definiálása kapcsolatokkal és méretekkel
summary: Kapcsolatok hozzáadása a jobb oldali panelről, méretek a Méretezés eszközzel, az alulhatározott, teljesen definiált és túlhatározott színek olvasása, és a túlhatározott vázlat javítása.
keywords: kapcsolatok, kényszerek, méretek, intelligens méret, teljesen definiált, alulhatározott, túlhatározott, szabadsági fok, egybeeső, vízszintes, függőleges, párhuzamos, merőleges, érintő, egyenlő, koncentrikus, felezőpont, rögzítés, ütközés, felesleges
from: e76d047a
---

Egy vázlat akkor **teljesen definiált**, ha minden pontját és méretét kapcsolatok és méretek rögzítik. Egy teljesen definiált vázlat csak akkor változik, ha módosít egy számot, így az alkatrész később is kiszámíthatóan viselkedik szerkesztéskor. A PartCraft nem kényszeríti ki a teljes definiálást, de mindig megmutatja, milyen közel van hozzá.

## A vázlat állapotának olvasása

Az állapot három helyen látszik: a nézet bal felső részén lévő jelzőn, a jobb oldali panel tetején lévő üzenetben és az előzményekben lévő jelölőn.

| Állapot | Jelző | Geometria színe | Jelentése |
|---|---|---|---|
| Alulhatározott | „Alulhatározott · 3 szabadsági fok” | Kék | Egyes geometriák még mozoghatnak. Húzza a kék geometriát, és lássa, merre |
| Teljesen definiált | „Teljesen definiált” | Tintaszín (fekete a Papír, világos a Modell témában) | Minden pont és méret rögzített |
| Túlhatározott | „Túlhatározott” | Piros az érintett kapcsolatokon | Egyes kapcsolatok ellentmondanak egymásnak, vagy egyik már következik a többiből |

A segédgeometria állapotától függetlenül szürke és szaggatott. A kijelölt elemek narancssárgák. A „szabadsági fok” az egyik mód, ahogyan valami még mozoghat: egy szabad pontnak kettő van (balra-jobbra és fel-le), egy szabad körnek három (a középpontja és a sugara).

A jobb oldali panelen az üzenet alatti jelmagyarázat megismétli a színeket.

## Méret hozzáadása

1. Nyomja meg a {{key:D}} billentyűt, vagy válassza a {{ui:Dimension}} gombot.
2. Kattintson arra, amit mérni szeretne:
   - **egy vonal**: a hossza;
   - **egy kör**: az átmérője; **egy ív**: a sugara;
   - **két pont** (végpont, középpont, szabad pont vagy az origó): a köztük lévő távolság;
   - **egy pont és egy egyenes**: a pont távolsága az egyenestől;
   - **két párhuzamos egyenes**: a köztük lévő távolság; **két szöget bezáró egyenes**: a köztük lévő szög.
3. Egy elem után az állapotsor ezt írja: „Kattintson egy második elemre, vagy kattintson oda, ahová a méret kerül.” Kattintson egy második elemre, vagy üres területre, ahová a számot szeretné.
4. Megnyílik egy számmező az aktuális értékkel. Írja be a méretet, és nyomja meg az {{key:Enter}} billentyűt. Az {{key:Esc}} megtartja a mért értéket.

Ferde vonalnál vagy két pontnál a szám elhelyezése dönti el a típust: fent vagy lent elhelyezve vízszintes távolságot, balra vagy jobbra elhelyezve függőleges távolságot, máshol pedig a valódi (párhuzamos méret) távolságot kapja.

A mező milliméterben vagy fokban megadott egyszerű számokat fogad el, például `25`, `12.5` vagy `1e3`. A vezető `⌀`, `Ø` vagy `R` jel, illetve a záró `mm` vagy `°` figyelmen kívül marad. A szögek 0 és 180 fok közöttiek. Az olyan számítás, mint a `20+5`, nem fogadható el; ha méretet változóhoz vagy képlethez szeretne kapcsolni, kezdje `=` jellel.

Méret későbbi módosításához kattintson duplán a számára a vázlatban, vagy válassza a **Szerkesztés** gombot a jobb oldali panel listájában, mellette.

:::tip
Azt is megteheti, hogy előbb geometriát jelöl ki (Kijelölés eszköz), majd a jobb oldali panelen választ egy méretgombot: {{ui:Distance}}, {{ui:Horizontal distance}}, {{ui:Vertical distance}}, {{ui:Radius}}, {{ui:Diameter}} vagy {{ui:Angle}}. Csak azok jelennek meg, amelyek a kijelöléshez illenek. Így adhat egy körnek sugarat átmérő helyett.
:::

## Kapcsolat hozzáadása

A kapcsolatokat a jobb oldali panelről adja hozzá, nem eszközzel.

1. Nyomja meg az {{key:S}} billentyűt a Kijelöléshez.
2. Kattintson egy elemre, majd tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson egy másodikra, ha a kapcsolathoz kettő kell. Az origó is kijelölhető.
3. A jobb oldali panel ezt írja: „Kijelölve: vonal l3, pont p1”, és minden illő kapcsolathoz egy gombot mutat, például {{ui:∥ Párhuzamos}} vagy {{ui:• Egybeeső}}.
4. Válassza a gombot. A vázlat azonnal megoldódik.

Ha egy kapcsolat sem illik, a panel ezt írja: „Egyik kapcsolat sem illik ehhez a kijelöléshez. Jelöljön ki egy vagy két elemet (a Shift+kattintás hozzáad).”

A kapcsolatok teljes listája, azok, hogy mire van szükség hozzájuk és mit csinálnak, a [Vázlatkapcsolatok és méretek](topic:sketch-relations) témakörben található.

A kapcsolatok a vázlatban kis jelekként láthatók a geometria mellett (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Az egybeesési pontok rejtve vannak, hacsak a geometria nincs kijelölve, vagy a kapcsolattal baj nincs. Kattintson egy jelre a kapcsolat kijelöléséhez.

## Példa: L alakú konzolprofil

1. Vázlatot készítsen a **Elülső sík** síkján. A Vonal eszközzel kezdjen az origón, kattintson egy L hat sarkára, és az origóra visszatérve fejezze be. A lánc a végén magától lezárul, amikor az első pontra kattint.
2. A vízszintesnek vagy függőlegesnek közel húzott vonalak már kapnak H és V kapcsolatot, kivéve az utolsót: a meglévő pontra végződő vonal nem kap automatikus kapcsolatot. Nyomja meg az {{key:S}} billentyűt, kattintson az utolsó vonalra, és a jobb oldali panelen válassza a {{ui:V Függőleges}} gombot. A jelző ezt mutatja: „Alulhatározott · 4 szabadsági fok”.
3. Nyomja meg a {{key:D}} billentyűt. Kattintson az alsó vonalra, kattintson alá, írja be a `80` értéket, majd nyomja meg az {{key:Enter}} billentyűt.
4. Kattintson a bal oldali vonalra, kattintson a bal oldalára, írja be a `60` értéket, majd nyomja meg az {{key:Enter}} billentyűt.
5. A felső rövid vonalat `20`, a belső függőleges vonalat `45` értékkel méretezze ugyanígy.
6. A jelző most **Teljesen definiált**, és az egész L tintaszínű lesz.

## Túlhatározott vázlat javítása

Ha egy új kapcsolat vagy méret ellentmond a többinek, a PartCraft semmit nem mozgat. A geometria pontosan úgy marad, ahogy volt, az érintett kapcsolatok pirosra váltanak, az állapotsor pedig megnevezi őket:

- „Túlhatározott: Vízszintes, Távolság 40 nem teljesíthető egyszerre. Vonja vissza, vagy törölje az egyiket.” A kapcsolatok ütköznek.
- „Túlhatározott: a Párhuzamos már következik. Törölje.” A kapcsolat nem ad hozzá semmit: a többi már kikényszeríti. (Egy téglalap oldalai például már eleve párhuzamosak.)

A javításhoz:

1. Nyomja meg a {{key:Mod+Z}} billentyűt az utolsó módosítás visszavonásához, vagy
2. Keresse meg a piros elemet a jobb oldali panel **Kapcsolatok és méretek** listájában (az azt tartalmazó csoport nyitva van, és a neve piros), és válassza a mellette lévő **Törlés** gombot. Az elemre a vázlatban is rákattintva, annak jelére vagy számára, kiválaszthatja, majd megnyomhatja a {{key:Delete}} billentyűt.

:::note
Ebben a verzióban nincsenek „vezérelt” (referencia) méretek. Az a méret, amely csak olyan értéket jelezne, amelyet a többi kapcsolat már rögzít, túlhatározottnak számít. Inkább a panelen olvassa a méreteket: jelöljön ki egy vonalat, és nézze meg a Méretezés gombokat, vagy a kihúzás után ellenőrizze az alkatrész adatait.
:::

Valódi ütközéssel rendelkező túlhatározott vázlat miatt az azt használó jellemző hibásra vált („Túlhatározott: 1 kapcsolat nem teljesíthető egyszerre.”), az előzményekben pedig **⚠ hiba** jelzés jelenik meg. Az csak felesleges kapcsolatot tartalmazó vázlat továbbra is felépül, **⚠ figyelmeztetéssel**.

## Húzással a szabad elemek megtalálása

A Kijelölésben húzzon bármely kék pontot vagy vonalat. A megoldó a lehető legkevesebbet mozgatja, miközben minden kapcsolatot megtart. Ha a húzás megtörne egy kapcsolatot, a geometria visszaugrik. Ez a leggyorsabb módja annak, hogy lássa, melyik méret hiányzik még.

## A kapcsolatok listája

Ha semmi nincs kijelölve, a jobb oldali panel a **Kapcsolatok és méretek** listát mutatja. Minden sorban van:

- **Szerkesztés** (csak méreteknél): megnyitja a számmezőt;
- **Kijelölés**: kijelöli a vázlatban;
- **Törlés**: eltávolítja.

Az azonos fajtájú, többször szereplő kapcsolatok egy sorban vannak, például „Egybeeső × 5” egy téglalapnál, amely az origóhoz van kötve. A sor megnyitásához kattintson rá: minden kapcsolat fel van sorolva aszerint, mit köt össze („pont p2, pont p4”), a saját **Kijelölés** és **Törlés** gombjával. Maga a sor ezeket tartalmazza:

- **Kijelölés**: mindet kijelöli a vázlatban;
- **Összes törlése**: mindet egy lépésben eltávolítja ({{key:Mod+Z}} visszahozza őket).

A túlhatározott kapcsolatot tartalmazó csoport magától megnyílik, a neve pirossal. A méretek mindig soronként, az értékükkel együtt vannak felsorolva.

Ha geometria van kijelölve, a lista csak a **kijelölés kapcsolatait** mutatja.
