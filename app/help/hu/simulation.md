---
title: Feszültség és lehajlás vizsgálata (Szimuláció)
summary: Válasszon anyagot, rögzítsen lapokat, adjon hozzá erőket, nyomásokat vagy az alkatrész saját súlyát, oldja meg, és olvassa le a von Mises-feszültséget, az elmozdulást, a biztonsági tényezőt, a reakciókat és a sajátfrekvenciákat a modellen, a módszer lehetőségeivel és korlátaival együtt.
keywords: szimuláció, FEA, élő elemzés, frissítés szerkesztés közben, törés, mi törik el elsőként, terhelési tényező, nemlineáris, képlékenység, folyás, képlékeny alakváltozás, bilineáris, érintkezés, érintkezési pár, büntetés, kötött, súrlódásmentes érintkezés, CalculiX, .inp, .frd, véges elem, feszültség, alakváltozás, von Mises, elmozdulás, lehajlás, biztonsági tényező, folyáshatár, reakció, terhelés, erő, nyomás, gravitáció, saját súly, rögzített, súrlódásmentes, megtámasztás, kényszer, anyag, acél, alumínium, titán, ABS, PLA, nejlon, sajátfrekvencia, módus, rezgés, háló, elemméret, tetraéder, tetraéderes háló, voxel, hálóminőség, főfeszültség, egyenértékű alakváltozás, hibabecslés, görbe lapok, lyukak, lekerekítések, adaptív, adaptív finomítás, automatikus finomítás, h-adaptív, konvergencia, hálókonvergencia, pontos felület, gömb, kúp, tórusz, spline, szabad forma
from: 6f2fdec1
---

A **Szimuláció** munkaterület arra ad választ, hogy „meghajlik vagy eltörik-e ez a terhelés alatt?” az alkatrésszel, amelyet modellez. Ez vagy egy **lineáris statikus** vizsgálat (kis elmozdulások, az anyag rugalmas marad), vagy egy **sajátfrekvencia**-vizsgálat, amely a lapokat követő másodfokú tetraéderek hálóján oldódik meg, vagy ha úgy választja, egyenlő kis kockák hálóján. A pontos geometriai mag által az alkatrészen adott megnevezett lapokon működik (lásd: [A hálós mag](topic:solid-kernels)).

Válassza a **Szimuláció** lehetőséget az eszköztár bal oldalán lévő **Munkaterület** mezőben. Az alkatrész nem változik; a vizsgálat az alkatrészfájlba mentődik, és minden módosítása visszavonható.

## Vizsgálat beállítása

1. Nyomja meg az **Új vizsgálat** gombot a jobb oldali panelen.
2. Válassza ki az **Anyagot**. A panel mutatja a merevségét (E), a Poisson-tényezőt, a sűrűséget és a folyáshatárt. Az értékek jellemző kézikönyvi adatok; a beszállító tanúsított értékei eltérhetnek.
3. Válassza ki a **Hálót**:
   - **Tetraéderes (pontos)**, az alapértelmezés: 10 csomópontú tetraéderek, amelyek külső lapjai az alkatrész lapjain fekszenek, görbe élekkel a lyukakon, lekerekítéseken és más kerek lapokon. A sík, henger-, kúp-, gömb- és tórusz-lapok, a forgatott és húzott lapok, valamint a szabad formájú (B-spline) lapok csomópontjai a pontos felületen ülnek; minden más típusú lap a megjelenítési hálóját követi, az eredménytáblázat pedig megmondja, hány lap ilyen. A háló magától sűrűbb lesz a görbe lapok, vékony falak és éles élek közelében.
   - **Voxelkockák (gyors)**: az alkatrész egyenlő kockákkal kitöltve. Gyors, de a görbe lapok lépcsősek lesznek. A tetraéderes háló előtt mentett vizsgálatok ezt tartják meg.
4. Hagyja az **Elemméret** mezőt üresen az automatikus mérethez (kb. 12 000 tetraéder vagy 20 000 kocka), vagy írjon be egyet milliméterben. A panel megmutatja, nagyjából hány elemet ad ez, mielőtt a finomabb helyek hozzáadódnának. Tetraéderek esetén a **Kisebb elemek görbe lapokon** (alapból bekapcsolva) finomítja a lyukakat és lekerekítéseket, ahol a feszültség általában csúcsosodik.

### Automatikus finomítás

Tetraéderekkel, statikus vagy kihajlási vizsgálatnál (hőterhelés nélkül), sajátfrekvencia-vizsgálatnál és állandósult hővizsgálatnál felkínálja az **Automatikus finomítás (adaptív)** lehetőséget. Jelölje be, és állítsa be:

- **Célhiba (%)**: a megoldás leáll, ha a becsült hiba ez alá csökken (kezdetben 1%).
- **Legtöbb kör**: a legtöbb megoldás, amelyet futtathat (kezdetben 5, legfeljebb 10).

Minden kör megold, megkeresi a legnagyobb becsült hibájú elemeket, felosztja őket (és annyi szomszédot, amennyi szükséges, hogy a háló összefüggő maradjon), majd újra megold. A görbe lapokon az új csomópontok a pontos felületre kerülnek. Az eredmények ezután táblázatot és diagramot mutatnak minden körről: az elemek számát, az ismeretleneket, a becsült hibát, a csúcsfeszültséget (vagy hőmérsékletet) és az elmozdulást (vagy hőáramot), valamint egy sort arról, miért állt le: elérte a célt, elfogytak a körök, a következő háló túl nagy lenne, vagy egy kör nem sikerült (ekkor az utolsó jó kör látszik).

A becslést becslésként kezelje. A Zienkiewicz–Zhu-féle becslés a pontos eredményekkel összevetve a valódi hiba 0,6–0,95 részét adja, és a hibát az **egész alkatrészen** méri. Így egy lyuknál vagy lekerekítésnél lévő csúcsfeszültség általában még kicsit pontatlan, amikor a becslés kicsinek látszik: feszültségkoncentrációnál állítsa a célt 1% alá, és figyelje, hogy a csúcs körről körre stabilizálódik. Éles belső sarokban vagy egy rögzített lap élén a valódi feszültség végtelen, így a becslés sosem éri el: a körök elfogynak.

**Sajátfrekvenciák és kihajlás.** Sajátfrekvencia-vizsgálatnál a becslés minden kért módusra vonatkozik, mindegyiket azonos súllyal számolva; a táblázat és a diagram az első két frekvenciát követi. Csak sík lapokból álló alkatrésznél egy frekvencia körről körre csak csökkenhet (minden háló megtartja az előzőt); a görbe lapok valódi alakjukhoz is közelebb kerülnek, ami a frekvenciát kissé bármelyik irányba eltolhatja. Kihajlásnál a becslés az előfeszítésre és a kihajlási módusokra vonatkozik, a táblázat a terhelési tényezőket követi. Egy 100 × 10 × 10 mm-es acélrúdon ellenőrizve az első frekvencia négy kör alatt 812,4-ről 811,9 Hz-re áll be, ami 0,4%-kal az Euler–Bernoulli-összefüggés alatt van (amely figyelmen kívül hagyja a nyírást), a rúd terhelési tényezője pedig 0,5%-on belül van az Euler-értéktől.

## Rögzítés és terhelés

Minden vizsgálathoz kell legalább egy megtámasztás, feszültségvizsgálathoz pedig egy terhelés.

1. Nyomja meg a {{ui:Rögzített}} gombot az eszköztárban. Az új megtámasztás kijelölődik, és lapokra vár: kattintson azokra a lapokra, amelyek mozdulatlanok (egy lapra újra kattintva elveszi). Befejezéskor nyomja meg a **Kijelölés kész** gombot vagy az {{key:Esc}} billentyűt. Kék kúpok jelzik a rögzített lapokat.
2. Nyomja meg az {{ui:Erő}} gombot, és kattintson azokra a lapokra, amelyekre az erő hat. A panelen írja be a **Teljes erőt** newtonban, és válassza ki az **Irányt**: a lapba, vagy egy tengely mentén. Az erő a kijelölt lapok között területarány szerint oszlik meg. Narancssárga nyilak mutatják.
3. Nyomja meg a {{ui:Nyomás}} gombot a kijelölt lapokba nyomó nyomáshoz MPa-ban (N/mm²); a negatív nyomás húz.

További fajták a panel **Hozzáadás** listájában vannak: egy **súrlódásmentes lap** (a lap eltolódhat önmagán, de nem mozdulhat el tőle — szimmetriasíkokhoz és sima megtámasztásokhoz használja) és a **gravitáció** (az alkatrész saját súlya, 9,81 m/s², a kiválasztott irányban).

Az a megtámasztás, amely az alkatrészt szabadon hagyja csúszni vagy forogni, nem fogadható el; a rendszer megmondja, melyik mozgás maradt szabad.

## Megoldás és az eredmények olvasása

Nyomja meg a {{ui:Megoldás}} gombot. A munka a háttérben fut; a **Leállítás** megszakítja. Ezután:

- Az alkatrész **von Mises-feszültség** szerint színeződik; a **Megjelenítés** mezőben válassza az **Elmozdulást** vagy a **Biztonsági tényezőt**. A jelmagyarázat adja a skálát.
- Vigye a mutatót az alkatrész fölé, hogy lássa a mutató alatti értékeket.
- Jelölje be a **Deformált alak** opciót, hogy lássa az alkatrész meghajlását (a mozgás a **Skála** szerint nagyítva; a valódi a táblázatban látszik).
- A táblázat tartalmazza a legnagyobb feszültséget és helyét, a legnagyobb elmozdulást, a legkisebb **biztonsági tényezőt** (folyáshatár ÷ von Mises-feszültség; 1 alatt az anyag folyik), az alkalmazott terhelést, a megtámasztásoknál a **reakciókat** (ezek kiegyenlítik a terhelést), és a használt hálót.

**Sajátfrekvenciákhoz** válassza ezt a **Típust**, állítsa be a **Módusok** számát, és oldja meg. Minden módus megmutatja a frekvenciáját és alakját (az alakok a legnagyobb mozgásukhoz képest 1-re skálázva).

Ha módosítja az alkatrészt, az eredmények elavultnak jelölődnek: oldja meg újra.

## Folyás és érintkezés (nemlineáris vizsgálatok)

Két további vizsgálattípus túllép azon, hogy „az anyag rugalmas marad”:

- **Nemlineáris (az anyag folyik)** az anyag egyenes szakaszát követi a folyáshatárig, majd egy laposabb meredekséget (**Meredekség folyás után**, ha üresen hagyja, az E 1%-a). A terhelés a **Terhelési lépések** szerint halad; az a lépés, amely nem áll be, magától felezódik. Az eredmények a diagramokhoz hozzáadják a **Képlékeny alakváltozást**, és megmondják, a terhelés mekkora részét viselte. Ha egy lépés még mindig nem áll be, a vizsgálat az utolsó jó lépésnél áll le, és a ⚠ Problémák panel megmondja, hol: az alkatrész ott kifogyott az erőből (összeomlás), vagy a lépések túl nagyok.
- **Érintkezés darabok között** lehetővé teszi, hogy az alkatrész különálló darabjai nyomják egymást. Adjon hozzá egy **érintkezési párt**, jelölje ki az A oldal lapjait (amelyek nyomnak) a {{ui:Lapok kijelölése}} gombbal, majd a B oldal lapjait a {{ui:A B oldal lapjainak kijelölése}} gombbal. A **súrlódásmentes** darabok nyomnak, csúsznak és szétválnak; a **kötött** darabok egymáshoz tapadva maradnak. Minden darab külön van hálózva, így a köztük lévő kis rés rendben van. Az érintkezés büntetéses módszer: a darabok kissé belemerülnek egymásba (a **büntetési tényező** × E ÷ elemméret adja meg az érintkezés merevségét). A táblázat a legmélyebb belemerülést mutatja, a Problémák panel pedig figyelmeztet, ha az meghaladja az elemméret 1%-át: emelje a tényezőt, vagy használjon kisebb elemeket.

Mindkettő tetraéderes hálót használ. A súrlódás, a nagy csúszás és a nagy elfordulás itt nincs megoldva.

## Futtatás CalculiXban

Az **Exportálás › CalculiX-bemenet (.inp)** (vagy a panelen a {{ui:CalculiX-bemenet mentése (.inp)}}) a vizsgálatot CalculiX bemeneti fájlként menti: ugyanazt a hálót, anyagot, megtámasztásokat, terheléseket és érintkezési párokat, mm, N és MPa egységekben. A CalculiX külön program, amelyet külön kell telepíteni és futtatni. Futtassa, majd az **Exportálás › CalculiX-eredmények (.frd)** beolvassa az eredményfájlját ugyanarra a hálóra, és megmutatja az elmozdulást (és a von Mises-feszültséget, ha a fájl tartalmaz feszültségeket). Ha közben módosította az alkatrészt vagy az elemméretet, a háló nem lesz ugyanaz, és a PartCraft ezt jelzi: mentsen új bemenetet.

## Mennyire bízzon benne

A PartCraft a megoldóját kézi képletekkel ellenőrzi (egy konzol végének lehajlása PL³/3EI 1%-on belül, egy rúd megnyúlása PL/AE pontosan, egy konzol első frekvenciája 3%-on belül, a lemezen lévő lyuk körüli feszültség). Mindazonáltal tartsa szem előtt ezeket a korlátokat:

- **A háló.** Tetraéderekkel a PartCraft ellenőriz egy konzol lehajlását és hajlítófeszültségét (0,3%-on belül), a lyuk körüli feszültséget egy lemezben (Kt, kb. 1%-on belül), egy vastag, nyomás alatt álló csövet (Lamé, 0,3%-on belül) és az első frekvenciát (0,4%-on belül). A táblázat a **hálóminőséget** mutatja (a legkisebb és a legnagyobb szög az elemlapok között; kb. 10° alatt az elem gyenge), és egy **becsült feszültséghibát**: ha az több százaléknál nagyobb, oldja meg újra kisebb elemmérettel, vagy hagyja, hogy az **Automatikus finomítás** ezt megtegye. Egy lyukas lemezen és két élbevágású rúdon az automatikus finomítás a tankönyvi Kt-n belül, 1%-on belül jutott el úgy, hogy az egész háló finomításához szükséges ismeretleneknek kb. egyhatodával dolgozott. Voxelkockákkal egy lyuk vagy lekerekítés lépcsőzetes a kockamérettől, így a feszültség ott durva.
- **Éles belső sarkoknál és rögzített lapok éleinél nincs valódi csúcsfeszültség.** Az ottani érték nő, ahogy az elemek kisebbek lesznek. A feszültségeket az ilyen helyektől kissé távolabb olvassa le, vagy kerekítse le a sarkot a modellben.
- **Olvasandó eredmények.** A von Mises-feszültségen, az elmozduláson és a biztonsági tényezőn túl egy tetraéderes vizsgálat megmutatja a **legnagyobb és legkisebb főfeszültséget** (húzás és nyomás) és az **egyenértékű alakváltozást**. Jelölje be a **Háló megjelenítése** opciót az elemek megtekintéséhez.
- **A statikus vizsgálatok lineárisak és rugalmasak.** Folyáshoz és érintkezéshez használja a fenti nemlineáris vizsgálattípusokat; a nagy lehajlások és a fáradás nincsenek megoldva. A hő, a hőfeszültség és a lineáris kihajlás saját vizsgálattípusok: lásd [Hő, hőfeszültség és kihajlás](topic:thermal-and-buckling).
- **Minden anyag ugyanaz minden irányban.** A 3D-nyomtatott műanyagok rétegeik irányában gyengébbek, gyakran egyharmaddal vagy annál is többel.
- Ez egy laboratóriumi változat: a fontos alkatrészeket ellenőrizze más módon is.

## Frissítés szerkesztés közben (Élő)

Jelölje be a **Frissítés szerkesztés közben** opciót a Megoldás blokkban, és a Szimuláció válaszai követik a szerkesztéseit. Módosítson egy méretet, egy terhelést, az anyagot vagy a környezetet, és azonnal megjelenik egy **gyors válasz**, a vizsgálat elemeinek négyszer nagyobbakkal készítve; ha egy pillanatra megáll (kb. egy másodpercig), a vizsgálat saját **finomított válasza** váltja fel. Az eredmények megmondják, melyiket látja („Gyors válasz” vagy „Finomított válasz”), és az elemméretet. A gyors válasz irányra és méretre jó: egy acél konzolon a lehajlásban 1%-on, a feszültségben kb. 4%-on belül volt a finomítotthoz képest. A számokhoz, amelyeket fel akar használni, a finomított választ tekintse mérvadónak. A statikus, sajátfrekvencia-, hő- és kihajlási vizsgálatok így működnek; az Élő csak nézetbeállítás, és nem mentődik az alkatrészbe. A Megoldás gombbal indított megoldás a következő szerkesztésig megmarad.

## Megtudni, mi törik el elsőként (Törés)

Statikus vagy kihajlási vizsgálatnál nyomja meg a **Mi törik el elsőként?** gombot a **Törés** blokkban. A PartCraft arányosan növeli a vizsgálat terheléseit (erőket, nyomásokat és súlyt együtt), amíg az alkatrész enged, és egy listában, a legrosszabbtól kezdve megmutatja a **folyáshoz tartozó terhelési tényezőt** (a mai terhelések tényezője, amelynél a legnagyobb von Mises-feszültség eléri az anyag folyáshatárát; a piros jel mutatja, hol) és ugyanazon megtámasztások és terhelések **kihajláshoz tartozó terhelési tényezőjét**. A 4,3-as tényező azt jelenti, hogy az alkatrész 4,3-szoros terhelést visel el, mielőtt folyik; **az 1 alatti tényező azt jelenti, hogy terhelve már enged**, és ez a Problémák listában hibaként jelenik meg (a legkisebb megállapítás akkor is megjelenik figyelmeztetésként, ha minden rendben van). A tényezők a tetraédereken, az elemméretnél futtatott lineáris vizsgálatból származnak, így annyira pontosak, amennyire az a vizsgálat; egy rögzített lapnál vagy éles sarokban a feszültségnek nincs valódi csúcsa (lásd fent), és a folyási tényező ott óvatos oldalon lesz. Az asszisztens ugyanezt az ellenőrzést futtathatja a `break_run` eszközzel.

## Kapcsolódók

- [Hő, hőfeszültség és kihajlás](topic:thermal-and-buckling)
- [Terhelésekből alakot növeszteni (Generatív)](topic:generative-design)
- [Távolságok, szögek és tömeg mérése](topic:measure)
- [Mi még nincs elkészítve](topic:not-built-yet)
