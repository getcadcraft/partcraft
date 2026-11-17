---
title: PartCraft beállításai
summary: Válassza ki, melyik egérgomb forgatja a nézetet, hogy a touchpad-es csúsztatás forgassa és tolja-e az alkatrészt, be- vagy kikapcsolhatja-e az automatikus kényszereket vázlatrajzolás közben, és beállíthatja, hány szálat használjanak a szimulációs megoldók.
keywords: beállítások, preferenciák, opciók, egér, középső gomb, görgőgomb, forgatás, elforgatás, touchpad, érintőpad, trackpad, görgetés, csúsztatás, csippentés, kényszerek, automatikus kényszerek, automatikus kapcsolatok, fogás, egybeesés, szálak, megoldószálak, magok, processzorok, többszálú, gyorsabb megoldás, párhuzamos
from: 759edcaf
---

A {{ui:Beállítások}} megnyitása az alkalmazássáv fogaskerekével vagy a {{key:Mod+,}} billentyűvel történik. Az első lap, a {{ui:PartCraft}}, ennek az alkalmazásnak a beállításait tartalmazza; a {{ui:Általános}} lap az összes CadCraft-alkalmazás közös beállításait (téma, eszköztár, panelek). A PartCraft beállításai csak az alkalmazásban léteznek: itt módosíthatók, és a böngésző megjegyzi őket. A {{ui:PartCraft-beállítások visszaállítása}} mindent visszaállít a kiindulási állapotra.

## A nézet forgatása

- **Bal gomb** (alapértelmezés): bal gombbal húzva forgatja az alkatrészt; jobb vagy középső gombbal húzva eltolja.
- **Középső gomb**: nyomja le a görgőt és húzzon a forgatáshoz; a {{key:Shift}} (vagy a {{key:Ctrl}}, vagy a ⌘) tartásával a középső gombbal, illetve a jobb gombbal húzva eltol. A bal gomb csak lapokat, éleket és síkokat jelöl ki, így a kis elmozdulással járó kattintás soha nem forgatja az alkatrészt. Sok CAD-program így működik.

A görgő mindkét esetben a mutató helye felé nagyít. Vázlatban a jobb és a középső gomb a megszokott módon tol.

## Görgetés: egérgörgő vagy touchpad

- **Kitalálja** (alapértelmezés): a PartCraft figyeli a görgetést. Az oldalirányú vagy finom görgetés, amilyet a touchpad küld, forgatja az alkatrészt; a teljes görgőkattanások nagyítanak.
- **Egérgörgő**: a görgetés mindig a mutató felé nagyít.
- **Touchpad**: két ujjal húzva forgatja az alkatrészt, a {{key:Shift}} tartásával és húzással eltol, csippentéssel nagyít. Vázlatban a kétujjas húzás a vázlatot tolja el.

A csippentés minden választásnál nagyít. Ha a „Kitalálja” nem a megfelelő eszközt ismeri fel, válassza ki a használt egeret vagy touchpadet. Részletek: [Touchpad, érintés és kis képernyők](topic:trackpad-and-touch).

## Vázlatolás: kapcsolatok hozzáadása rajzolás közben

**Kapcsolatok hozzáadása rajzolás közben** (kezdetben bekapcsolva): ha egy kattintás egy ponthoz illeszkedik, az új pont egybeeső lesz vele; ha egy görbére kattint, a pont arra a görbére kerül; a közel vízszintesen vagy függőlegesen húzott vonal vízszintessé vagy függőlegessé válik. Lásd: [Kényszerek és méretek](topic:relations-dimensions).

Kapcsolja ki, ha a geometriát más geometria közelében szeretné elhelyezni anélkül, hogy összekötné. A mutató továbbra is illeszkedik pontokhoz és görbékhez, de semmi nem kötődik össze: a láncban húzott vonalak nem osztoznak a végpontjaikon, így húzással szét lehet őket húzni. A kívánt kényszereket a jobb oldali panelről adja hozzá. Egy zárt profil a végek találkozásakor is kihúzható.

:::note
A beállítás csak azt változtatja meg, amit az új rajzolás hozzáad. A vázlatban már meglévő kényszerek megmaradnak, a Lekerekítés eszköz pedig továbbra is készíti az érintőíves ívet és a sugarat.
:::

## Vázlatolás: méretezés rajzolás közben

**Méretezés rajzolás közben** (kezdetben bekapcsolva): vonal, téglalap, kör vagy ív rajzolása közben a szám beírása kitölti a mutató mellett lévő méretmezőt ({{key:Tab}} a következő mezőre ugrik), az {{key:Enter}} pedig a megadott méretben rajzolja meg az alakzatot, minden beírt mérethez egy hajtó méretet hozzáadva. Kikapcsolva a rajzolás közben beírt szám nem tesz semmit, az alakzatokat csak kattintással lehet rajzolni. Lásd: [Méret megadása rajzolás közben](topic:sketch-basics#type-the-size-as-you-draw).

## Sarokjelző

A 3D-nézet sarkában látható, mi: **Nézetkocka** (alapértelmezés; jobb felül — kattintson egy lapra, élre vagy sarokra, hogy onnan nézze; húzza a körbeforgatáshoz; a körgyűrűjét húzva forgassa a modellt), **Tengelyjel** (kis X, Y, Z jelölő a bal alsó sarokban, amely a nézettel együtt fordul: X piros, Y zöld, Z kék) vagy **Nincs**. Vázlatolás vagy a rajzlap közben egyik sem látszik. Lásd: [A nézetkocka](topic:view-cube).

## Megoldószálak

Hány szálat használhatnak a szimulációs megoldók. Az **Automatikus** (alapértelmezés) a számítógép logikai processzorainak számánál eggyel kevesebbet vesz igénybe (legfeljebb 16), hogy a lap a megoldás alatt is reagáljon; vagy válasszon egy számot. A nagy voxeles vizsgálatok, a kihajlás, a feszültség időbeli változása és az áramlás több szálon gyorsabban oldódnak meg (a méréseink szerint kb. 2× gyorsabban 4 szálon 80 000 kockánál; üresjáratban lévő számítógépen még többet). A körülbelül 20 000 ismeretlen alatti modellek egy szálon maradnak, mert a szálak indítása több időbe kerül, mint amennyit megtakarítanak. A többszálú megoldás ugyanazt az eredményt adja, mint az egy szálú (kerekítésig: az összegek más sorrendben adódnak össze). Minden vizsgálat eredménylistája a **Megoldó** alatt, az okkal együtt mutatja a **N szál** vagy **1 szál** értéket.

A szálakhoz a lapnak **keresztirányban izoláltnak** kell lennie (a böngésző csak ekkor engedi a munkafolyamatoknak a memória megosztását). A laboratóriumi oldal ilyen; ahol nem az, a beállítás jelzi („Ez az oldal nincs keresztirányban izolálva, ezért a megoldók itt bármi legyen is beállítva egy szálon futnak.”), és minden megoldás egy szálon fut. Minden más ugyanúgy működik, az eredmények ugyanazok.

A lamináris áramlási vizsgálatok is használják a szálakat (kb. 2,5× 4 szálon 54 000 folyadékcellánál, ugyanaz az eredmény az utolsó jegyig). A másodfokú tetraéder-megoldó és a hőátadás egy szálon fut: a mi tesztgépünkön ezek többszálúsítása lassabbnak bizonyult, mert megoldóikat a memória sebessége és egy nem felbontható lépés korlátozza.

### Saját webkiszolgálón

Ha a PartCraftot saját kiszolgálóról futtatja, az úgy működik, ahogy ki van szolgálva. A megoldószálakhoz a kiszolgálónak két fejlécet kell küldenie a PartCraft oldalával:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache esetén a mappa `.htaccess` fájljában (a mod_headers modul kell hozzá):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx esetén a PartCraftot kiszolgáló `location` blokkban:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Töltse újra az oldalt: a Beállítások › Megoldószálak alatt ekkor megjelenik az **Automatikus** a számítógép processzorszámával. A második fejléc azt eredményezi, hogy a böngésző visszautasít minden olyan, más webhelyről betöltött tartalmat, amely ezt nem engedi; a PartCraft ezzel nem kerül gondba, mert mindent a saját mappájából tölt be.
