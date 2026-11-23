---
title: Újdonságok a 0.9 verzióban (korábbi)
summary: A PartCraft 0.9 lapok közötti lekerekítéseket és szilárd testekké vastagítást, több ezer alkatrészes szerelvényeket, egy Dokumentum-tárolót revíziókkal, a Solid FEM feszültségbővítményt, tíz ívmódszert, brit acélszelvényeket, egy Nyomtatási szakaszt és gyanta-nyomtatási bővítményeket ad hozzá.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, what's new, kiadási jegyzetek, változásnapló, 0.9, lekerekítés lapok között, gördülő golyó, több él lekerekítése, vastagítás, szilárd test felületekből, step-héj, iges-test, szkennelt lekerekítések, nagy szerelvény, könnyített megjelenítés, 20000 alkatrész, dokumentumok, tároló, kivétel, revízió, kiadás, hol használják, rhino-hivatkozás, grasshopper, 3dm, kurzorok, gyártóüzem, feladatsor, solid fem, végeselem, von mises, sajátfrekvencia, ívmódszerek, 3 pontos ív, brit acélszelvények, nyomtatási szakasz, gyanta, goo, ctb, ágy, kiterítés, frissítés szerkesztés közben, legjobb terhelés, nemlineáris, folyás, képlékeny alakváltozás, érintkezés, calculix, mozgásvizsgálat, hézag, felületek, nurbs, simítás, hajó, zebra, mérnök, generátor, generált test, vázlat fényképből, méretezés nyomtatáshoz, zsugorodás, egymásba ágyazott táblák, g-kód, rajz, furatok méretezése, asszisztens, mcp, nyelvek, eszköztársorok
from: 1dafd7c8
---

Ez változott a PartCraft 0.9 verzióban a 0.8.1-hez képest. A szabad felületek most szilárd testekké záródnak, a több ezer alkatrészből álló szerelvények használhatók maradnak, egy Dokumentum-tároló megőrzi a revíziókat, egy Solid FEM bővítmény pedig a feszültséget ellenőrzi egy alkatrészben. Minden elem megmondja, hol találja.

## Új a 0.9.1-ben

- **Pontos STEP-export.** A {{ui:Exportálás}} › {{ui:STEP AP242 (pontos test)}} és a {{ui:STEP AP214 (pontos test)}} most működik. A furatok, csapok, lekerekítések, kúpok, gömbök és tóruszok valódi felületükön íródnak, valódi körökkel élekként, így egy másik CAD- vagy CAM-program furatként tudja kiválasztani. A spline-oldalak, a modellezett menetek és az importált hálók sík fasettaként maradnak ugyanabban a testben. Lásd [Exportálás nyomtatáshoz, STEP és DXF](topic:export-files#for-other-cad-programs-step).
- **STEP be, pontos STEP ki.** A megnyitott STEP-fájl megtartja saját sík lapjait, hengereit, kúpjait, gömbjeit és tóruszait, így a {{ui:Exportálás}} › {{ui:STEP AP242 (pontos test)}} valódi felületekként írja vissza őket, nem fasettaként: egy szállító csavarfuratos gerendája ugyanazokkal a felületekkel jön ki, amelyekkel bejött, plusz mindaz, amit belevágott. A fájl spline-, végigvezetett és forgatott lapjai fasettaként maradnak, ugyanígy az STL-, OBJ- és 3MF-testek. Egy korábban mentett alkatrészhez nyissa meg újra a STEP-fájlt. Lásd [STEP-fájl megnyitása és építés rá](topic:import-step).
- **Valódi körök a DXF-ben.** A {{ui:Exportálás}} › {{ui:Vázlat vagy sík lap DXF-je}} egy kijelölt sík lappal a kerek furatokat körökként írja, a furat saját középpontjával és sugarával, lézeres, plazmás vagy vízsugaras asztalhoz. Más kerek élek továbbra is fasetták.
- **Pontos STEP a műhelynek.** A Gyártásban a {{ui:Pontos STEP (munkakoordináták)}} a munkadarabot a beállítás munkadarab-nullpontjával írja, Z-vel a szerszámtengely mentén, vagyis a G-kód koordinátáival. Lásd [Szerszámpályák és G-kód készítése](topic:manufacture#exact-step-for-the-shop).

## Újdonságok

### Felületek és testek

- **Lekerekítés lapok között.** Válassza a {{ui:Felületek}} elemet a {{ui:Munkaterület}} mezőben, majd a {{ui:Lekerekítés lapok között}} gombot. Válassza ki egy test két lapját, és írja be a sugarat (az élen változó sugárhoz a {{ui:Sugár a végén (mm, 0 = ugyanaz)}} értéket is). Az eredménysor megmondja, mennyire tér el a lekerekítés az ideális gördülő golyótól, az illeszkedni nem tudó sugarat pedig a lap megnevezésével elutasítja. A {{ui:Több él lekerekítése}} egy lépésben sok élt kerekít; jelölje be a {{ui:Sarkok (gömbfolt, ahol három találkozik)}} lehetőséget gömbsarokhoz, ahol három lekerekített sík-lap él találkozik. Lásd [Szabad felületek (NURBS)](topic:nurbs-surfaces).
- **Vastagítás szilárd testté.** A {{ui:Vastagítás szilárd testté}} ugyanebben a munkaterületen vastagságot ad egy felületnek; a {{ui:Másik oldal}} a másik irányba növeli. Hajtást vagy önmagát metsző felületet az érintett felület és hely megnevezésével elutasít.
- **Szilárd testek felületekből.** A levágott felületek egyesíthetők, kivonhatók és metszhetők, és egy visszavonási lépésként beépülnek az alkatrészbe. A STEP zárt héjként írja ki a szilárd testet, az IGES egy testként; mindkettő szilárd testként olvasódik vissza. Ha a lapok élről élre nem párosodnak, a fájl külön lapokat kap, és az állapotsor ezt jelzi. Szilárd testek a csomóponti szerkesztőben is készíthetők; lásd [Csomóponti szerkesztő](topic:nodes).
- **Perem- és változó sugarú lekerekítések szkennelésekben.** Ha felületeket illeszt egy szkennelésre, a perem-lekerekítéseket (tóruszok) és a viszonylag egyenes élen változó sugarú lekerekítéseket is keresi, és a sugárral együtt felsorolja. Csak kitalált szkenneléseken tesztelték.

### Szerelvények, dokumentumok és hivatkozások

- **Nagy szerelvények.** Az alkatrészek, amelyek másolatok, egy hálót osztanak meg, és a {{ui:Nézetek}} › {{ui:Könnyített megjelenítés}} dobozokat rajzol, így a nézet folyamatosan mozog (nagyon nagy szerelvényeknél magától bekapcsol; a kijelölés és az illesztések továbbra is a valódi alkatrészeket használják). Az alkatrészfa az első sorait mutatja, a többihez egy {{ui:További 700 megjelenítése}} gombbal. A szerelvény-fájlok legfeljebb 50 000 példányt és 100 000 illesztést tartalmazhatnak. Lásd [Szerelvény összeállítása](topic:build-assembly).
- **Dokumentumok.** A **Fájl** csoportban a {{ui:Dokumentumok…}} egy párbeszédpanelt nyit egy projektmappa fölött: kivétel és visszaírás, revízió-betűk, állapotok (munkában, véleményezésre, kiadva, elavult), előzmények, hol használják és darabjegyzék. Lásd [Dokumentumok és revíziók (tároló)](topic:documents-walkthrough).
- **Élő Rhino-hivatkozás.** Egy szkript, a `cadcraft_link.py`, figyeli a Rhino- vagy Grasshopper-dokumentumot, és csak a változásokat küldi a PartCraftba, ahol az importált funkció az új alakra épül újra. Egyirányú, és a Studio kell hozzá. Lásd [Élő .3dm-hivatkozás](topic:live-3dm-link).
- **Egymás kurzorainak látása.** Egy megosztott munkamenetben mindenki kurzora a nevével és a kijelölt funkciójával látszik. Lásd [Együttes munka másokkal](topic:work-live).
- **Gyártóüzem.** Kapcsolja be a Gyártóüzem bővítményt a {{ui:Beállítások}} › {{ui:Bővítmények}} alatt. Miután egy programot elküldött a {{ui:Gyártás}}ban, annak lapja hozzáadhatja a {{ui:Hozzáadás a gyári feladatsorhoz}} parancsot, vagy menthet {{ui:Mentés feladatfájlként}} fájlt. Soha nem küld és nem indít gépet.

### Elemzés és alkatrészek

- **Solid FEM bővítmény.** Kapcsolja be a {{ui:Solid FEM}} lehetőséget a {{ui:Beállítások}} › {{ui:Bővítmények}} alatt (addig ki van kapcsolva), és megjelenik egy {{ui:Solid FEM}} lap a jobb oldali panelen. Adja meg a {{ui:A test hálózása}} műveletet, válasszon rögzített lapokat és terheléseket a 3D nézetben, nyomja meg a {{ui:Megoldás}} gombot, majd az elmozdulást, a von Mises-feszültséget vagy egy sajátalakot a {{ui:Megjelenítés a modellen}} gombbal rajzoltathatja ki. Lásd [Solid FEM: feszültségellenőrzés](topic:solid-fem-check).
- **Ív vázlatokban, tízféleképpen.** A {{ui:Ív}} melletti nyíl a vázlat eszköztárán felsorolja: 3 pont; kezdet–középpont–vég; kezdet–középpont–szög; kezdet–középpont–hossz; kezdet–vég–szög; kezdet–vég–irány; kezdet–vég–sugár; középpont–kezdet–vég; középpont–kezdet–szög; középpont–kezdet–hossz; és folytatás. Lásd [Ív rajzolása tíz módszerrel](topic:sketch-arc-methods).
- **Brit acélméretek.** A hegesztett szerkezetek 976 brit szelvényt használhatnak (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); írjon be egy méretet, például `305x165x40 UB`. Lásd [Szerkezeti elemek](topic:structural-members).

### Nyomtatás

- **Nyomtatási szakasz.** A {{ui:Nyomtatási szakasz}} gomb az eszköztáron (a 3D Print bővítmény, alapból be) a munkadarab testeit egy szaggatott ágyra teszi: {{ui:Kiterítés}}, {{ui:Forgatás 90°-kal}}, {{ui:Elrendezés a nyomtatóágyon}}, {{ui:Mind illesztése a nyomtatóágyra}}, {{ui:Rétegek előnézete}}, majd {{ui:Küldés 3D-nyomtatónak}} USB-n, Klipperen (Moonraker), OctoPrinten vagy PrusaLinken át. Semmi nem megy ki, amíg nem erősíti meg, és az alkatrész soha nem változik. STL- vagy 3MF-fájlhoz lásd [Alkatrész felkészítése 3D nyomtatáshoz](topic:print-3d).
- **Gyanta-nyomtatás.** Bővítmények a {{ui:Beállítások}} › {{ui:Bővítmények}} alatt, mindegyik alapból kikapcsolva: egy gyanta-szeletelő, egy expozíciós teszt, és az Elegoo GOO, SL1, Chitubox CBDDLP/CTB és Anycubic fájlformátumok. A szeletelés munkaszálon fut, így az oldal reagál.

## Minden alkalmazásban

- Minden lebegő súgó Bootstrap-eszköztipp.
- A kezdő tipp bezáró gombbal rendelkezik; zárva marad.
- A panel fülsora, ha nem fér ki, oldalra görgethető, nem vágódik le.
- A böngésző fülén az aktív dokumentum neve jelenik meg a PartCraft | CadCraft előtt.
- A {{ui:Beállítások}} a munkaterület {{ui:Elrendezés}}ét legördülő választásként mutatja, a nyelvválasztó pedig minden olyan nyelvet listáz, amely a buildben van.
- A Súly és a Hőmérséklet mértékegység-típus a Mértékegységek beállításokban.

## Javítva

- A vázlat Ív menüje most minden módszert felsorol.
- Az eszköztár és a böngészőfül címe 2026. november 9-én javítva lett.

## Őszinte korlátok

- A pontos STEP-et OpenCascade-ben visszaolvasták (érvényes testek, térfogatok egyeznek a kézzel kiszámítottakkal). Még nem nyílt meg minden CAD- vagy CAM-programban, és a szerelvény nem íródik pontos STEP-ként.
- Nem nyomtattak még valódi nyomtatón. A szeletelés, a G-kód és a gyanta-fájlok a saját programjainkkal vagy egy helyettesítő nyomtatóval lettek visszaolvasva; egyik gyanta-formátumot sem töltötték be nyomtatón, és a nyomtatóméretek és expozíciók kiindulópontok.
- A Solid FEM lineáris, izotrop és rugalmas, egy anyag alkatrészenként, érintkezés, folyás vagy kihajlás nélkül. A rögzített lapoknál és éles sarkoknál a feszültség a hálótól függ. Ez ellenőrző segéd, nem mérnök által átnézett.
- A nagy szerelvények időmérései GPU nélküli szerverről származnak; 20 000 alkatrész teljes részletességű képkockája ott is másodpercekig tart.
- A lekerekítések lappárokon működnek; nincs általános csúcs-összeolvasztás, és nincs lekerekítés olyan lapok között, amelyek nem érintkeznek.
- A Rhino-hivatkozást soha nem futtatták valódi Rhinóban vagy Grasshopperben. A Dokumentumokat két program próbálta ki egy mappán, nem két ember hálózati megosztáson.
- Egy valódi szkenneléshez illesztett felületeket még nem ellenőriztek kézzel. Az angolon kívüli nyelvek gépi vázlatok.
- A Windows-telepítők nincsenek kódaláírva, a macOS lemezkép nincs notarizálva. Lásd [Hibaelhárítás](topic:troubleshooting).

A korábbi változások: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).

## Korábban: 0.8 és 0.8.1

Ez változott a PartCraft 0.8 és 0.8.1 verzióban a 0.7-hez képest. A szimuláció szerkesztés közben válaszol, és megmondja, mi törik el először; a szerelvények mozgásvizsgálatot kapnak; és új munkaterületek készítik a szabad felületeket és a fizikából méretezett alkatrészeket. A 0.8.1 kisebb javító kiadás.

### Új

**Szimuláció**

- **Frissítés szerkesztés közben.** Jelölje be a {{ui:Frissítés szerkesztés közben}} lehetőséget a Megoldás blokkban, és a válaszok követik a szerkesztéseit. Változtasson méretet, terhelést vagy anyagot, és egy gyors válasz, amelyet négyszer nagyobb elemekkel készítettek, azonnal megjelenik; ha körülbelül egy másodpercig vár, a vizsgálat saját finomított válasza váltja fel. Az eredmények megmondják, melyiket nézi. Egy acél konzolon a gyors válasz az elmozdulásnál 1%-on belül, a feszültségnél kb. 4%-on belül volt a finomítotthoz képest. Lásd [Feszültség és elhajlás ellenőrzése](topic:simulation#update-while-you-edit-live).
- **Mi törik el először.** Egy statikus vagy kihajlási vizsgálatnál a **Törés** blokk {{ui:Mi törik el először?}} gombja a terheléseket addig skálázza, amíg a munkadarab enged. Legrosszabbtól kezdve listázza az első folyáshoz tartozó teherszorzót (piros jelölővel, ahol a feszültség csúcsosodik) és a kihajláshoz tartozót. Az 1 alatti tényező azt jelenti, hogy a munkadarab már így terhelve enged, és a Problémák panelen hiba jelenik meg. A tényezők lineáris vizsgálatból származnak, így csak annyira jók, amennyire az. Lásd [Feszültség és elhajlás ellenőrzése](topic:simulation#find-out-what-breaks-first-break-it).
- **Folyás és érintkezés.** Két további vizsgálattípus: egy nemlineáris, ahol az anyag az egyenesét követi a folyási feszültségig, majd laposabb egyenesen, képlékeny alakváltozás megrajzolva; és egy érintkezési, ahol külön darabok egymást nyomják (súrlódásmentesen) vagy ragadnak (kötve). Egy terhelés-lépés, amely nem áll be, vagy darabok, amelyek túlságosan belemélyednek egymásba, a Problémák panelen jelennek meg. Súrlódás, nagy csúszás, nagy forgások, nagy elhajlások és fáradás nincs megoldva. Lásd [Feszültség és elhajlás ellenőrzése](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX-fájlok.** A {{ui:Exportálás}} › {{ui:CalculiX-fájl (.inp)}} elmenti a vizsgálatot a CalculiX-nek, egy különálló programnak, amelyet ön telepít és futtat; a {{ui:Exportálás}} › {{ui:CalculiX-eredmények (.frd)}} visszaolvassa az eredményfájlt ugyanarra a hálóra. A PartCraft soha nem indítja el ezt a programot, és jelzi, ha az alkatrész változott a fájl mentése óta.

**Szerelvények**

- **Mozgásvizsgálatok.** A {{ui:Szerelvény}} › {{ui:Mozgás}} egy illesztés értékét hajtja egy megadott időn át (állandó sebesség, lassított, szinuszos vagy ki-és-vissza), és minden lépésnél az illesztéseivel és zárt hurkaival elhelyezi a szerelvényt, jelentve, mi ütközik és mennyire közelednek az alkatrészek. A {{ui:Pont hozzáadása}} egy pont helyzetét, sebességét és gyorsulását, az illesztés értékét és a hézagot ábrázolja az idő függvényében; a {{ui:CSV mentése}} és a {{ui:Ábra mentése}} kiírja őket. A {{ui:Futtatás}} után a Lépés a futási sávban bármely lépésbe viszi a szerelvényt. A vizsgálat beállításai a szerelvény-fájlban mentődnek. A sebesség és a gyorsulás a rögzített helyzetekből számítódik, így ha egy éles csúcs alacsonynak látszik, több lépést használjon. Lásd [Ütközések és mozgás ellenőrzése a szerelvényen](topic:check-assembly#a-motion-study).

**Felületek és alkatrészek fizikából**

- **Felületek munkaterület.** Válassza a {{ui:Felületek}} elemet a {{ui:Munkaterület}} mezőben a NURBS-görbékhez és felületekhez az alkatrész mellett: {{ui:Görbe}}, {{ui:Áthúzás}}, {{ui:Végigvezetés}}, {{ui:Illesztés}} és {{ui:Zebra}}, folytonossággal (G0, G1 vagy G2), amelyet a pontos felületeken mérnek. A kértnél rosszabb élek a Problémák listában, Illesztési javítással jelennek meg. A {{ui:Simítás}} a hajóvonalakon méri az inflexiókat és görbületugrásokat, és a nem simákat a tűrésén belül újraépíti. A felületek a munkadarab-fájlba mentődnek, és nem változtatják meg az alkatrész funkcióit. Lásd [Szabad felületek (NURBS)](topic:nurbs-surfaces).
- **A Mérnök munkaterület.** Válassza a {{ui:Mérnök}} munkaterületet a munkaterület-váltóban, válasszon egy generátort, és kattintson a {{ui:Új}} gombra: egy szkript a feladatból méretezi az alkatrészt (hő mozgatásához, áramlásokhoz, nyomáshoz, anyaghoz, nyomtatási eljáráshoz) tankönyvi képletekkel, megépíti, majd visszaadja a felhasznált számokat a forrásukkal, a gyártási ellenőrzéseit és fájlokat elemzőeszközökhöz. Ugyanazok a bemenetek ugyanazt az alkatrészt adják bármely számítógépen. A generátor az alkatrészben marad, és egy alkatrész megnyitása soha nem futtat szkriptet. Lásd [Alkatrészek fizikából: generátorok](topic:engineer-generators) és [Generátor írása](topic:write-a-generator).

**Vázlat, rajz és készítés**

- **Vázlat fényképből.** A {{ui:Jellemzők}} › {{ui:Továbbiak}} › {{ui:Vázlat fényképből…}} egy sík alkatrész képét egy egyszerű alapon (körvonal és furatok) vagy egy tollrajzot vonalakká, ívekké és körökké követ. Megad egy hosszúságot, ellenőrzi az előnézetet, és elkészíti a vázlatot. Lásd [Vázlatkészítés alapjai](topic:sketch-basics#a-sketch-from-a-photo).
- **Léptékezés és szétvágás nyomtatáshoz.** A {{ui:Exportálás}} › {{ui:Léptékezés nyomtatáshoz (STL vagy 3MF)…}} tengelyenként skáláz, a munkadarabot nem változtatva, például zsugorodási ráhagyással. A {{ui:Exportálás}} › {{ui:Szétvágás nyomtatáshoz (darabok zip-je)…}} a nyomtatóágynál nagyobb alkatrészt számozott darabokra vágja, csapokkal, gyűrűkkel, galambfarkakkal, csapfuratokkal vagy mágnes-zsebekkel összekötve. Lásd [3D nyomtatás](topic:print-3d).
- **Elhelyezett táblák G-kódba.** Az {{ui:Exportálás}} › {{ui:Elhelyezett táblák G-kódba}} beolvas egy egymásba ágyazott DXF-et, és táblánként egy programot készít a kiválasztott utófeldolgozón át: előbb a lyukak és kivágások, azután a körvonalak. Nem tervez belépéseket, vágási sorrendet vagy közös éleket. Lásd [Síklemez-alkatrészek elhelyezése táblákon](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rajzok, amelyek többet maguk csinálnak.** A {{ui:Rajzlap}} › {{ui:Automatikus}} kiválasztja a legkisebb A-méretű lapot, amely befogadja a nézeteket a legnagyobb szabványos, 1:1-ig terjedő léptékben. Az {{ui:A furatok méretezése}} középjelet tesz minden furatra, egy kiemelést méretenként, és a helyzeteket a nézet bal alsó sarkától adja meg. Lásd [Rajz készítése](topic:drawing-pdf).

**Minden alkalmazásban**

- **Nyelvek.** Az alkalmazások 54 nyelven érhetők el. Az angolon kívüliek gépi vázlatok, amíg egy anyanyelvi beszélő át nem nézi.
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt választhatja a tördelést (mint eddig), 2 sort vagy 1 sort; a nem férő sáv oldalra görgethető. A PartCraft Jellemzők szalagja a legtöbbet használt eszközt nagyban mutatja, a változatokat egy osztott gomb mögé rejti.
- **Csatlakoztassa az MI-jét.** A Studio a központ, ahol mind a nyolc alkalmazáshoz saját MI-asszisztenst köthet, alkalmazásonként csak olvasási, javaslati vagy szerkesztési jogosultsággal. Egy csatlakoztatott asszisztens egy mondatból is méretezhet alkatrészt (például egy konzolt egy terhelésre), megmutatja a számításait és minden ellenőrzését, és megépíti; jelenti, mit nem ellenőrzött (feszültségkoncentráció, fáradás, kúszás műanyagokban). Lásd [PartCraft használata MI-asszisztenssel](topic:use-with-ai-assistants).

### Javítva a 0.8.1-ben

- **Teljes képernyős kurzor-befagyás.** A kijelölés lebegése most le van fojtva. Az okot a legjobb olvasatunk adja, és nem erősítettük meg azzal, aki jelentette.
- **Nyelv futásidőben.** A Studio és a csomagolt kiadások futás közben tudnak nyelvet váltani; korábban csak angol volt. Ezt nem tesztelték minden platformon: jelezzék, ha a nyelv nem változik.

### Még nincs ebben a verzióban

- A MI-csatlakoztatás még nincs kész: az egykattintásos csatlakozás a Studión belül, a böngészős MI hostolt összekötője, a saját API-kulcs a Studióban és a közzétett MCP-csomag nem ígérhető. A Studiónak nincs saját MI-je.
- A Studio nincs kódaláírva: a Windows figyelmeztethet, a macOS jobb gombos megnyitást kér. Lásd [Hibaelhárítás](topic:troubleshooting).
- A tűrésláncok továbbra is egy irányúak: lásd [Tűrésláncok](topic:tolerance-stackup).
- A többit a [Még nincs megépítve](topic:not-built-yet) sorolja fel.

A korábbi változások: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
