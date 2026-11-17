---
title: Újdonságok a 0.9 verzióban
summary: A PartCraft 0.9 bevezeti a lapok közötti lekerekítést és a testté vastagítást, ezres nagyságrendű összeállításokat, egy verziózott Dokumentumtárat, a Solid FEM szilárdsági bővítményt, tíz ívmódszert, brit acélszelvényeket, egy Nyomtatási szakaszt és a gyantanyomtatási bővítményeket.
keywords: újdonságok, release notes, kiadási megjegyzések, változásnapló, 0.9, lekerekítés lapok között, gördülő golyó, több él lekerekítése, vastagítás, test felületekből, step héj, iges test, szkennelés lekerekítései, nagy összeállítás, könnyített megjelenítés, 20000 alkatrész, dokumentumok, tároló, kijelentkezés, revízió, kiadás, hol használják, rhino link, grasshopper, 3dm, kurzorok, gyári padló, munkasor, solid fem, véges elem, von mises, sajátfrekvencia, ívmódszerek, 3 pontos ív, brit acélszelvények, kék könyv, nyomtatási szakasz, gyanta, goo, ctb, ágy, kiterítés, újdonságok, változások, 0.8, 0.8.1, verzió, új funkciók, élő elemzés, frissítés szerkesztés közben, törés, mi törik el először, terhelési tényező, nemlineáris, folyás, képlékeny nyúlás, érintkezés, calculix, mozgásvizsgálat, hézag, felületek, nurbs, simítás, hajótest, zebra, mérnök, generátor, generált test, vázlat fényképből, méretarány nyomtatáshoz, felosztás nyomtatáshoz, zsugorodás, egymásba fészkelt lapok, g-kód, rajz, furatok méretezése, asszisztens, mcp, nyelvek, eszköztársorok
from: 96d9fbfa
---

Ez a PartCraft 0.9 és a 0.8.1 közötti változásainak listája. A szabad formájú felületek most testekké zárulnak, az összeállítások több ezer alkatrésszel is használhatók maradnak, a Dokumentumtár revíziókat tart, a Solid FEM bővítmény pedig egy alkatrész feszültségét ellenőrzi. Minden tétel megmondja, hol találja meg.

## Új a 0.9.1-ben

- **Pontos STEP-export.** Az {{ui:Export}} › {{ui:STEP AP242 (pontos test)}} és {{ui:STEP AP214 (pontos test)}} most működik. A furatok, kiemelkedések, lekerekítések, kúpok, gömbök és tórusz valódi felületükön íródnak, valódi körökkel élekként, így egy másik CAD- vagy CAM-program furatként ismeri fel őket. A spline oldalak, a modellezett menetek és az importált hálók ugyanabban a testben síkba bontott facetek maradnak. Lásd: [Exportálás nyomtatáshoz, STEP és DXF](topic:export-files#for-other-cad-programs-step).
- **STEP be, pontos STEP ki.** A megnyitott STEP-fájl megtartja saját síklapjait, hengereit, kúpjait, gömbjeit és tóruszait, így az {{ui:Export}} › {{ui:STEP AP242 (pontos test)}} valódi felületekként írja vissza őket, nem facetekként: egy beszállító csavarlyukas gerendája ugyanazokkal a lapokkal távozik, amelyekkel érkezett, plusz minden, amit bevágott. A fájl spline-, söprött és forgatott lapjai facetek maradnak, ahogy az STL-, OBJ- és 3MF-testek is. Egy korábban mentett alkatrésznél nyissa meg újra a STEP-fájlt. Lásd: [STEP-fájl megnyitása és építés rá](topic:import-step).
- **Valódi körök a lap DXF-ben.** Az {{ui:Export}} › {{ui:DXF a vázlatról vagy sík lapról}} egy kiválasztott síklappal a kerek furatokat most körökként írja, a furat saját középpontjával és sugarával, lézeres, plazmás vagy vízsugaras asztalhoz. A többi kerek él továbbra is facet. 
- **Pontos STEP a műhelynek.** A {{ui:Manufacture}} menüben a {{ui:Pontos STEP (munkakoordináták)}} az alkatrészt úgy írja, hogy a kezdőpontja a beállítás munkakezdőpontja, a Z pedig a szerszámtengely mentén fut, azok a koordináták, amelyeket a G-kód használ. Lásd: [Szerszámpályák és G-kód készítése](topic:manufacture#exact-step-for-the-shop).

## Új

### Felületek és testek

- **Lekerekítés lapok között.** Válassza a {{ui:Surfaces}} lehetőséget a {{ui:Workspace}} dobozban, majd a {{ui:Fillet between faces}} gombot. Válassza ki egy test két lapját, írja be a sugarat ({{ui:Radius at the end (mm, 0 = the same)}} a sugárhoz, amely az él mentén változik). Az eredménysor megmondja, mennyire tér el a lekerekítés az ideális gördülő golyótól, a nem illeszkedő sugarat pedig a lap megnevezésével elutasítja. A {{ui:Fillet several edges}} egy lépésben sok élt kerekít; jelölje be a {{ui:Corners (sphere patch where three meet)}} lehetőséget egy gömbös sarokhoz, ahol három lekerekített él találkozik síklapokon. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).
- **Vastagítás testté.** A {{ui:Thicken into a solid}} ugyanabban a munkaterületen vastagságot ad egy felületnek; a {{ui:Other side}} a másik irányba növeli. Hajtást vagy önmagát metsző részt a felület és a hely megnevezésével elutasít.
- **Testek felületekből.** A levágott felületek egyesíthetők, kivonhatók és metszhetők, és egy visszavonási lépésként az alkatrészbe építhetők. A STEP egy testet egy zárt héjként, az IGES egy testként írja; mindkettő testként olvasódik vissza. Ha a lapok nem párosodnak élről élre, a fájl külön lapokat kap, és az állapotsor ezt jelzi. Testek a Csomóponti szerkesztőben is készíthetők; lásd: [Csomóponti szerkesztő](topic:nodes).
- **Peremi és változó lekerekítések szkennelésben.** Ha felületeket illeszt egy szkennelésre, a peremi lekerekítéseket (tóruszokat) és a viszonylag egyenes él mentén változó sugarú lekerekítéseket is keresi, és a sugarukkal együtt listázza. Csak kitalált szkenneléseken tesztelték.

### Összeállítások, dokumentumok és csatolások

- **Nagy összeállítások.** Az azonos példányok egy hálót osztoznak, és a {{ui:Views}} › {{ui:Lightweight display}} dobozokként rajzolja ki őket, így a nézet mozog (nagyon nagy összeállításokon magától bekapcsol; a kiválasztás és a kapcsolatok továbbra is az valódi alkatrészeket használják). Az alkatrészfa az első sorait mutatja, és egy {{ui:További 700 megjelenítése}} gombot a többihez. Az összeállítási fájlok legfeljebb 50 000 példányt és 100 000 kapcsolatot tartalmazhatnak. Lásd: [Összeállítás építése](topic:build-assembly).
- **Dokumentumok.** A **Fájl** csoport {{ui:Dokumentumok…}} gombja egy párbeszédpanelt nyit egy projektmappán: kijelölés és visszaadás, revíziós betűk, állapotok (munka folyamatban, átnézésre, kiadva, elavult), előzmények, hol használják és az anyagjegyzék. Lásd: [Dokumentumok és revíziók (a tároló)](topic:documents-walkthrough).
- **Élő Rhino-csatolás.** Egy szkript, a `cadcraft_link.py` figyeli a Rhino- vagy Grasshopper-dokumentumot, és csak a változottakat tolja a PartCraftba, ahol a behozott jellemző az új alakra épül újra. Egyirányú, és a Studio kell hozzá. Lásd: [Élő .3dm-csatolás](topic:live-3dm-link).
- **Egymás kurzorainak látása.** Egy közös munkamenetben mindenki kurzora a nevével és a kijelölt jellemzőjével látszik. Lásd: [Közös munka másokkal élőben](topic:work-live).
- **Gyári padló.** Kapcsolja be a Gyári padló bővítményt a {{ui:Settings}} › {{ui:Add-ons}} alatt. Miután egy programot elküld a {{ui:Manufacture}} menüben, annak lapja hozzáadhatja a {{ui:Hozzáadás a gyári munkasorhoz}} vagy a {{ui:Mentés munkafájlként}} lehetőségekhez. Soha nem küld és nem indít gépet.

### Elemzés és alkatrészek

- **Solid FEM bővítmény.** Kapcsolja be a {{ui:Solid FEM}} bővítményt a {{ui:Settings}} › {{ui:Add-ons}} alatt (addig ki van kapcsolva), és a jobb panelen megjelenik egy {{ui:Solid FEM}} lap. {{ui:Mesh the part}} (az alkatrész hálózása), válasszon rögzített lapokat és terheléseket a 3D-nézetben, {{ui:Solve}} (Megoldás), és rajzolja ki az elmozdulást, a von Mises feszültséget vagy egy módusalakot a {{ui:Show on the model}} (Megjelenítés a modellen) gombbal. Lásd: [Solid FEM: feszültségellenőrzés](topic:solid-fem-check).
- **Ív vázlatokban, tízféleképpen.** A vázlateszköztárban az {{ui:Arc}} (Ív) mellett lévő nyíl felsorolja: 3 pont, Kezdőpont Középpont Végpont, Kezdőpont Középpont Szög, Kezdőpont Középpont Hossz, Kezdőpont Végpont Szög, Kezdőpont Végpont Irány, Kezdőpont Végpont Sugár, Középpont Kezdőpont Végpont, Középpont Kezdőpont Szög, Középpont Kezdőpont Hossz és Folytatás. Lásd: [Ív rajzolása tízféle módszerrel](topic:sketch-arc-methods).
- **Brit acélméretek.** A tartószerkezetek 976 brit szelvényt használhatnak (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); írjon be egy méretet, például `305x165x40 UB`. Lásd: [Tartószerkezeti elemek](topic:structural-members).

### Nyomtatás

- **Nyomtatási szakasz.** A {{ui:Print stage}} gomb az eszköztárban (3D Print bővítmény, alapértelmezetten bekapcsolva) az alkatrész testeit egy szaggatott ágyra helyezi: {{ui:Lay flat}} (Kiterítés), {{ui:Turn 90°}} (Forgatás 90°-kal), {{ui:Arrange on the bed}} (Elrendezés az ágyon), {{ui:Fit all on the bed}} (Minden illesztése az ágyra), {{ui:Preview layers}} (Rétegek előnézete), majd {{ui:Send to 3D printer}} (Küldés 3D-nyomtatóra) USB-n, Klipperen (Moonraker), OctoPrinten vagy PrusaLinken át. Semmi sem küldődik, amíg meg nem erősíti, és az alkatrésze soha nem változik. STL- vagy 3MF-fájlhoz lásd: [Alkatrész felkészítése 3D-nyomtatásra](topic:print-3d).
- **Gyantanyomtatás.** Bővítmények a {{ui:Settings}} › {{ui:Add-ons}} alatt, mindegyik ki van kapcsolva, amíg be nem kapcsolja: egy gyanta-szeletelő, egy expozíciós teszt, és a fájlformátumok: Elegoo GOO, SL1, Chitubox CBDDLP/CTB és Anycubic. A szeletelés egy munkaszálon fut, így az oldal reagál.

## Minden alkalmazásban

- Minden súgócímke Bootstrap-tooltip.
- Az indítótippnek van bezáró gombja; zárva marad.
- A panelek fülsora, amely nem fér ki, oldalra görgethető, nem vágódik le.
- A böngészőlap a megnyitott dokumentum nevét mutatja a PartCraft | CadCraft előtt.
- A {{ui:Settings}} a munkaterület {{ui:Layout}} (Elrendezés) beállítását legördülő listaként mutatja, a nyelvválasztó pedig a buildben elérhető összes nyelvet listázza.
- A tömeg és a hőmérséklet mértékegység-típus a Mértékegység beállításokban.

## Javítva

- A vázlat Ív menüje most minden módszert felsorol.
- Az add-on eszköztár és a böngészőlap címe 2026. november 9-én lett javítva.

## Őszinte korlátok

- A pontos STEP-et OpenCascade-ben olvasták vissza (érvényes testek, térfogatok, amelyek megegyeznek a kézzel kiszámítottakkal). Még nem nyílt meg minden CAD- vagy CAM-programban, és az összeállítás nem íródik pontos STEP-ként.
- Még semmit nem nyomtattak valódi nyomtatón. A szeletelést, a G-kódot és a gyantafájlokat saját programjaink vagy egy helyettesítő nyomtató olvasta vissza; egyik gyantaformátumot sem töltötték be nyomtatóba, a nyomtatóméretek és az expozíciók pedig kiindulópontok.
- A Solid FEM lineáris, izotrop és rugalmas, alkatrészenként egy anyaggal, érintkezés, folyás és kihajlás nélkül. A rögzített lapoknál és éles sarkoknál a feszültség a hálótól függ. Ellenőrző segéd, mérnök nem vizsgálta felül.
- A nagy összeállítások időmérései GPU nélküli szerverről származnak; egy 20 000 alkatrészes, teljes részletességű kép ott is másodpercekig tart.
- A lekerekítések lappárokon működnek; nincs általános csúcsátmenet, és nincs lekerekítés olyan lapok között, amelyek nem találkoznak.
- A Rhino-csatolás soha nem futott valódi Rhinóban vagy Grasshopperben. A Dokumentumokat két program próbálta ki egy mappán, nem két ember hálózati megosztáson.
- Valódi szkennelés felületeinek illesztését még nem ellenőrizte kézzel senki. Az angoltól eltérő nyelvek gépi piszkozatok.
- A Windows-telepítők nincsenek kódaláírva, a macOS lemezkép pedig nincs notarizálva. Lásd: [Hibaelhárítás](topic:troubleshooting).

A korábbi változások a [Újdonságok a 0.7 verzióban](topic:whats-new-0-7) oldalon vannak.

## Korábbi: 0.8 és 0.8.1

Ez a PartCraft 0.8 és 0.8.1 és a 0.7 közötti változásainak listája. A szimuláció a szerkesztés közben válaszol, és megmondja, mi törik el először; az összeállítások mozgásvizsgálatot kapnak; az új munkaterületek szabad formájú felületeket és fizikából méretezett alkatrészeket készítenek. A 0.8.1 kisebb javítókiadás.

### Új

**Szimuláció**

- **Frissítés szerkesztés közben.** Jelölje be a {{ui:Update while I edit}} (Frissítés szerkesztés közben) lehetőséget a Megoldás blokkban, és a válaszok követik a szerkesztéseit. Módosítson egy méretet, terhelést vagy az anyagot, és egy gyors válasz, négyszer nagyobb elemekkel, azonnal megjelenik; amikor kb. egy másodpercre megáll, a vizsgálat saját finomított válasza váltja fel. Az eredmények megmondják, melyiket nézi. Egy acél konzolon a gyors válasz az elhajlásban 1 %-on, a feszültségben kb. 4 %-on belül volt a finomítottól. Lásd: [Feszültség és elhajlás ellenőrzése](topic:simulation#update-while-you-edit-live).
- **Mi törik el először.** Statikus vagy kihajlási vizsgálatnál a **Törés** blokk {{ui:What breaks first?}} (Mi törik el először?) gombja addig skálázza a terheléseket, amíg az alkatrész enged. Legrosszabbtól a jobbig listázza a terhelési tényezőt a folyási határig (piros jelölővel, ahol a feszültség tetőzik) és a kihajlási tényezőt. Az egynél kisebb tényező azt jelenti, hogy az alkatrész terhelve már enged, és a Problémák panel hibát mutat. A tényezőket lineáris vizsgálatból kapjuk, így csak annyira jók, amennyire az. Lásd: [Feszültség és elhajlás ellenőrzése](topic:simulation#find-out-what-breaks-first-break-it).
- **Folyás és érintkezés.** Két további vizsgálattípus: egy nemlineáris, ahol az anyag az egyenes szakaszát követi a folyási feszültségig, majd laposabb meredekséggel, képlékeny nyúlással ábrázolva; és egy érintkezési típus, ahol különálló darabok nyomják egymást (súrlódásmentesen) vagy megtapadnak (kötve). A be nem álló terhelési lépés, vagy a túlságosan egymásba nyomódó darabok a Problémák panelben jelennek meg. A súrlódás, a nagy csúszás, a nagy forgások, a nagy elhajlások és a fáradás nincs megoldva. Lásd: [Feszültség és elhajlás ellenőrzése](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Döntések CalculiX-hez.** Az {{ui:Export}} › {{ui:CalculiX deck (.inp)}} elmenti a vizsgálatot a CalculiX-nek, egy külön programnak, amelyet Ön telepít és futtat; az {{ui:Export}} › {{ui:CalculiX results (.frd)}} visszaolvassa az eredményfájlt ugyanarra a hálóra. A PartCraft soha nem indítja el ezt a programot, és jelzi, ha az alkatrész a deck mentése óta változott.

**Összeállítások**

- **Mozgásvizsgálatok.** Az {{ui:Assembly}} › {{ui:Motion}} (Mozgás) egy kapcsolat értékét hajtja a megadott idő alatt (állandó sebesség, lassítva-gyorsítva, szinusz, vagy ki és vissza), és minden lépésnél a kapcsolataival és zárt hurkaival együtt helyezi el az összeállítást, és jelenti, mi ütközik és milyen közel jönnek az alkatrészek. A {{ui:Add a point}} egy pont helyzetét, sebességét és gyorsulását, a kapcsolat értékét és a hézagot rajzolja az idő függvényében; a {{ui:Save CSV}} (CSV mentése) és a {{ui:Save plot}} (Ábra mentése) kiírja őket. A {{ui:Run}} (Futtatás) után a futtatási sáv Lépésen át gombja az összeállítást bármely lépésre mozgatja. A vizsgálat beállításai az összeállítási fájlban mentődnek. A sebesség és a gyorsulás a rögzített pozíciókból jön, így éles csúcs esetén több lépést használjon, ha a csúcs alacsonynak látszik. Lásd: [Összeállítás ütközésre és mozgásra ellenőrzése](topic:check-assembly#a-motion-study).

**Felületek és fizikából készült alkatrészek**

- **Felületek munkaterület.** Válassza a {{ui:Surfaces}} lehetőséget a {{ui:Workspace}} dobozban a NURBS-görbékhez és -felületekhez az alkatrész mellett: {{ui:Curve}} (Görbe), {{ui:Loft}} (Áthúzás), {{ui:Sweep}} (Végigvezetés), {{ui:Match}} (Illesztés) és {{ui:Zebra}}, a folytonosságot (G0, G1 vagy G2) a pontos felületeken mérve, és a kért értéknél rosszabb élet a Problémák panelben a Match javítással listázza. A {{ui:Fair}} (Simítás) a hajtóvonalakon keresi a inflexiókat és görbületi ugrásokat, és a nem simákat a tűrésen belül újraépíti. A felületek az alkatrészfájlban mentődnek, és nem változtatják meg az alkatrész jellemzőit. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).
- **A Mérnök munkaterület.** Válassza a {{ui:Engineer}} lehetőséget a munkaterület-váltóban, válasszon egy generátort, és kattintson a {{ui:New}} (Új) gombra: egy szkript a feladatából méretezi az alkatrészt (hő mozgatása, áramlások, nyomás, anyag, nyomtatási eljárás) szakkönyvi képletekkel, majd felépíti, és visszaadja a használt számokat a forrásaikkal, a gyártási ellenőrzéseit és a fájlokat elemző eszközökhöz. Ugyanazok a bemenetek bármely számítógépen ugyanazt az alkatrészt adják. A generátor az alkatrészben marad, és az alkatrész megnyitása soha nem futtat szkriptet. Lásd: [Alkatrészek fizikából: generátorok](topic:engineer-generators) és [Generátor írása](topic:write-a-generator).

**Vázlat, rajzok és gyártás**

- **Vázlat fényképből.** A {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} egy sík alkatrész képét (körvonal és furatok egyszerű alapon) vagy egy tollrajzot vonalakká, ívekké és körökké követ. Megad egy hosszúságot, ellenőrzi az előnézetet, és elkészíti a vázlatot. Lásd: [Vázlatkészítés alapjai](topic:sketch-basics#a-sketch-from-a-photo).
- **Méretezés és felosztás nyomtatáshoz.** Az {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} tengelyenként skáláz az alkatrész megváltoztatása nélkül, például egy zsugorodási ráhagyással. Az {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} egy, az ágyához túl nagy alkatrészt számozott darabokra vág, amelyeket csapok, kulcsok, galambfarkak, csapfuratok vagy mágneszsebek kötnek össze. Lásd: [Nyomtatás 3D-ben](topic:print-3d).
- **Egymásba fészkelt lapok G-kódhoz.** Az {{ui:Export}} › {{ui:Nested sheets to G-code}} egy egymásba fészkelt DXF-et olvas, és táblánként egy programot készít a kiválasztott utófeldolgozón át: előbb a furatok és kivágások, aztán a körvonalak. Nem tervez bevezető vonalakat, vágási sorrendet vagy közös éleket. Lásd: [Lapos alkatrészek elhelyezése táblákon](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rajzok, amelyek több munkát végeznek.** A {{ui:Sheet}} › {{ui:Automatic}} (Automatikus) a legkisebb A-méretű lapot választja, amely befogadja a nézeteket a legnagyobb szabványos méretarányban, legfeljebb 1:1. A {{ui:Dimension the holes}} (A furatok méretezése) minden furatra középjelet tesz, egy feliratot méretenként, és a helyzeteket a nézet bal alsó sarkától. Lásd: [Rajz készítése](topic:drawing-pdf).

**Minden alkalmazásban**

- **Nyelvek.** Az alkalmazások 54 nyelven érhetők el. Az angolon kívüliek gépi piszkozatok, amíg anyanyelvi beszélő át nem nézi.
- **Eszköztársorok.** A {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} a Tördelést (mint korábban), 2 sort vagy 1 sort választ; a nem férő sáv oldalra görgethető. A PartCraft Jellemző szalagja a leggyakrabban használt eszközt nagyban mutatja, a változatokat egy osztott gomb mögé rejti.
- **Csatlakoztassa az AI-ját.** A Studio a központ, ahová a saját asszisztenst mind a nyolc alkalmazáshoz csatlakoztatja, alkalmazásonként csak olvasási, javaslattevő vagy szerkesztési engedéllyel. Egy csatlakoztatott asszisztens egy mondatból is méretezhet egy alkatrészt, például egy konzolt egy terhelésre, megmutatja a munkamenetét és minden ellenőrzését, majd megépíti; jelenti, mit nem ellenőrzött (feszültségkoncentráció, fáradás, műanyagok kúszása). Lásd: [PartCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

### Javítva a 0.8.1-ben

- **Teljes képernyős kurzorfagyás.** A lebegő kiválasztás mostantól fojtott. Az okot a legjobb olvasatunk szerint adjuk meg, és nem erősítette meg a hibát jelentő személy.
- **Nyelv futás közben.** A Studio és a csomagolt kiadások futás közben váltanak nyelvet; korábban csak angol volt. Ezt még nem tesztelték minden platformon: jelezze, ha a nyelv nem változik.

### Még nincs ebben a verzióban

- A Connect your AI (Csatlakoztassa az AI-t) még nincs kész: a Studio-n belüli egykattintásos csatlakozás, a böngészős AI-hoz készült hosztolt összekötő, a Studio-n belüli saját API-kulcs és a közzétett MCP-csomag nincs ígérve. A Studio-nak nincs saját AI-ja.
- A Studio nincs kódaláírva: a Windows figyelmeztethet, a macOS jobb kattintást és Megnyitást kér. Lásd: [Hibaelhárítás](topic:troubleshooting).
- A kötegek egyirányúak maradnak: lásd: [Tolerancia-láncok](topic:tolerance-stackup).
- A többi a [Még nincs elkészítve](topic:not-built-yet) oldalon van.

A korábbi változások a [Újdonságok a 0.7 verzióban](topic:whats-new-0-7) oldalon vannak.
