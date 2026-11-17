---
title: Összeállítás ellenőrzése ütközésekre és mozgásra
summary: Keressen egymásba lógó alkatrészeket az Ütközés paranccsal, húzza bármely kapcsolat értékeit a mozgás megfigyeléséhez, és járja végig egy kapcsolat tartományát, hogy megtalálja, hol ütköznek az alkatrészek.
keywords: interferencia, interferenciaészlelés, ütközés, ütközésvizsgálat, átfedés, menetillesztés, menetmélység-eltérés, érintkező lapok, elrejtés, szűrő, mozgás, mozgásvizsgálat, végigjárás, mozgástartomány, ellenőrzés
from: 9c98db46
---

Két ellenőrzés fut az elhelyezett alkatrészeken: az **Ütközés** a jelenleg átfedő anyagot keresi, a **mozgásellenőrzés** pedig egy kapcsolatot végigmozgat a tartományán, és közben keresi az átfedéseket.

## Interferencia ellenőrzése

1. Nyisson meg vagy készítsen egy összeállítást (lásd: [Összeállítás készítése](topic:build-assembly)).
2. Válassza az {{ui:Ütközés}} gombot.

Az állapotsor jelzi az eredményt:

- „Nincs interferencia 3 alkatrész között (… ms).” Semmi nem fedi egymást.
- „Interferencia: Flange1 és Flange2: Átfedés, 2.5 mm³.” Minden pár, az eredmény fajtája és a közös térfogatuk.

A bal oldali **Összeállítás** mező az **Interferencia** részt mutatja: „Nincs”, „2 eredmény” (a megjelenítettek) vagy „Nincs ellenőrizve”. Ha semmi nincs kijelölve, a jobb oldali panel minden eredményt felsorol az **Interferencia** alatt.

Az eredmény minden változásnál törlődik. Kapcsolat mozgatása után futtassa újra az {{ui:Ütközés}} parancsot. Minden alkatrészpárt mindegyik többivel összevet, ezért a nagy összeállítások tovább tartanak.

### Eredmények típusai

| Típus | Jelentése |
|---|---|
| **Átfedés** | Az alkatrészek közös térfogattal rendelkeznek: valódi ütközés. |
| **Menetmélység-eltérés** | A közös térfogat az egyik alkatrész menetén belül, a másiké után van: egy csavar mélyebben van menetezve, mint a furata, vagy egy sima szár menetes furatban. |
| **Menetillesztés (díszmenetek)** | A közös térfogat mindkét alkatrész menetén belül van: csavar menetes furatban. A díszmenetek a menet teljes méretében rajzolódnak, ezért mindig kissé átfedést mutatnak. |
| **Érintkező lapok** | Nincs közös térfogat, de a lapok érintkeznek (0,001 mm-en belül). |

A modellezett menetek (lásd: [Menetek tengelyeken és furatokon, rajzolt vagy modellezett](topic:threads)) valódi geometriát jelentenek: amit közösen használnak, az **Átfedés**.

### Rejtse el, amit nem kell látnia

Az **Interferencia** alatt a **Megjelenítés** minden típushoz egy jelölőnégyzetet kínál: törölje a **Menetillesztés** és az **Érintkező lapok** jelölését, hogy csak a számottevő ütközéseket lássa. Az eredmény melletti **Pár elrejtése** az adott alkatrészpárt elrejti, bármilyen típusú is. Az elrejtett eredmények számlálódnak („2 eredmény rejtve ezek a szűrők miatt”), a **A rejtett párok újbóli megjelenítése** pedig visszahozza a párokat. Az állapotsor az elrejtett eredményeket is számolja.

A szűrők az összeállítással együtt mentődnek, minden módosítás egy {{key:Mod+Z}} lépés. A **Kapcsolat átvizsgálása ütközésekre** (lent) is ezeket használja. A szűrőkkel rendelkező összeállítás 4-es verzióként mentődik, amelyet a PartCraft korábbi verziói nem nyitnak meg, ahelyett hogy elveszítenék a szűrőket.

## A mozgás megfigyelése

1. Jelöljön ki egy mozgó kapcsolatot (bármelyik a merev kivételével) a bal oldali listában.
2. Húzza a csúszkát az egyik értéke alatt, például a **Szög (°)** vagy az **Eltolás (mm)** alatt. Az alkatrész húzás közben mozog.
3. Engedje el. Az új helyzet megmarad, és a {{key:Mod+Z}} billentyűvel visszavonható.

Szöget vagy eltolást a mezőbe is beírhat, majd nyomja meg az {{key:Enter}} billentyűt.

Zárt hurokon (mechanizmusban) lévő kapcsolat az egész hurkot mozgatja: a húzott érték megmarad, a hurok többi kapcsolata pedig követi (lásd: [Zárt hurkok](topic:build-assembly#closed-loops-linkages)).

## Kapcsolat átvizsgálása ütközésekre

1. Jelöljön ki egy mozgó kapcsolatot.
2. Több értékkel rendelkező kapcsolatnál (hengeres, síkbeli, gömb, csap horonyban) a **Mozgások ellenőrzése** részben válassza ki, melyik értéket járja végig.
3. Válassza az {{ui:A mozgás ütközésvizsgálata}} gombot.

A PartCraft az adott értéket 25 helyzeten át mozgatja, 24 egyenlő lépésben, a többi érték változatlanul marad: a szög −180° és 180° között (a dőlés −90° és 90° között), a hossz mínusztól pluszig, a legnagyobb alkatrész méretének megfelelően. Az eredmény:

- „Sehol nincs ütközés a Szög (°) értékre −180 és 180 között (25 helyzet ellenőrizve).”
- „25 helyzetből 6 ütközik, először a Szög (°) 45 értéknél (12.4 mm³).” Az első ütköző helyzet és az ott lévő átfedés.

A gomb merev kapcsolatoknál szürke, mert azok nem mozognak. Az átvizsgálás csak a helyzeteket ellenőrzi, a köztük lévő utat nem: egy vékony alkatrész két lépés között átmehet egy másikon.

:::note
Érintkezés és gravitáció nincs még elkészítve. Határok nélkül az átvizsgálás a teljes tartományt lefedi; ha az értékhez **Határokat** ad meg (lásd: [Alkatrészlista, robbantott nézetek és mozgatható alkatrészek](topic:assembly-bom-explode)), az átvizsgálás csak azokat fedi le, így egy 90°-ban nyíló zsanért 90° felett ellenőriz.
:::

## Mozgásvizsgálat

Az **Összeállítás › Mozgás** egy kapcsolat értékét egy kezdettől egy végig vezeti a megadott idő alatt (állandó sebesség, lassított, szinusz vagy ki-és-vissza), minden lépésben a kapcsolataival és zárt hurkaival elhelyezi az összeállítást, és jelenti, mely alkatrészek ütköznek, és milyen közel kerülnek egymáshoz. A **Pont hozzáadása** egy alkatrész közepét vagy az arra kattintott pontot követi, a kártya pedig a helyzetét, sebességét és gyorsulását, a kapcsolat értékét és a hézagot ábrázolja az idő függvényében; a **CSV mentése** és a **Diagram mentése** kiírja őket. A sebesség és a gyorsulás a rögzített helyzetekből számítódik, ezért a lépések közötti éles csúcs alacsonynak látszik: használjon több lépést.

A **Futtatás** után a **Lépésenkénti bejárás** sáv az összeállítást bármely lépésre mozgatja (az idő, az érték, valamint az, hogy az adott helyen ütköznek-e az alkatrészek, a sáv mellett látszik). A kapcsolat megtartja a saját értékét, a **Vissza a modellhez** gomb pedig visszaállítja az összeállítást. A vizsgálat beállításai az összeállítási fájlban mentődnek; az eredményeit a **Futtatás** újra elkészíti.

## Érintkezésvizsgálat

Az **Összeállítás › Érintkezés** azt mutatja, hogyan viszi át az összeállítás a terheléseket ott, ahol az alkatrészek egymást nyomják. Minden alkatrész a saját **Szimuláció** vizsgálatából hozza a saját megtámasztásait, terheléseit és anyagát (például egy rögzített lap az egyik alkatrészen, egy erő a másikon); itt a párokat Ön választja ki. Válassza a **Pár hozzáadása**, majd az **A oldal kiválasztása** lehetőséget, és kattintson egy alkatrész lapjaira, majd a **B oldal kiválasztása** lehetőséget, és kattintson egy másik alkatrész lapjaira (a kiválasztott lapra kattintva az lekerül; az {{key:Esc}} vagy a **Kész** befejezi a kiválasztást). A pár lehet **Súrlódásmentes** (az alkatrészek nyomódnak, de csúsznak) vagy **Kötött** (együtt maradnak); a merevségi tényező azt szabja meg, mennyire ellenáll az érintkezés a besüllyedésnek (a 20 jó kiindulópont, az 1000 merev acélkészletnél).

A **Megoldás** lépésenként futtatja a terhelést, és megmutatja az érintkezési erőt, a legmélyebb besüllyedést, a legnagyobb elmozdulást és a legnagyobb feszültséget. Az olyan alkatrész, amelynek nincs párja, kimarad, és a kártya ezt jelzi. A súrlódásmentes érintkezés nem tartja oldalirányban az alkatrészt: adjon minden alkatrésznek megtámasztást a saját Szimuláció vizsgálatában, vagy kösse hozzá, különben a lépések nem biztos, hogy stabilizálódnak. A párok és a beállítások az összeállítási fájlban mentődnek.

A **CalculiX-leírás exportálása** parancs ugyanezt a modellt CalculiX bemeneti fájlként (.inp) írja ki. A CalculiX külön program, amelyet Ön telepít és futtat; a **CalculiX-eredmények beolvasása (.frd)** ezután visszaolvassa az elmozdulásokat ennek az összeállításnak a hálóján, és elutasít egy másik hálóhoz készült fájlt. Az itteni megoldó képes képlékeny viselkedésre, de nem explicit dinamika, és semmi itt nem minősített számítás: a lényeges dolgokat mindig ellenőriztesse mérnökkel.
