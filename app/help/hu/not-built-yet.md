---
title: Még nincs megépítve
summary: Mindaz, amit ez a PartCraft-verzió még nem tud: a csavart végigvezetésektől a hüvelykes megjelenítésig, a rajzméretektől az alösszeszerelésekig, azzal, hogy mit tegyen helyette ma.
keywords: hiányzik, még nem, korlátok, korlátozások, ütemterv, pontos kernel, lekerekítés, letörés, héjazás, végigvezetés, áthúzás, step-import, szimuláció, gyártás, csavart végigvezetés, végérintés áthúzás, lapos lekerekítés, egyenletek, hüvelykes, rajzméretek, alösszeszerelés, felhő, táblagép, telefon
from: 97b10a29
---

PartCraft egy korai változat. Ez a lap felsorolja, mit nem tud még ez a verzió, hogy ne keresse, és mit tegyen helyette ma. Egyiknek sincs határideje.

## Pontos kernelt igényel

Ez a verzió minden munkadarabot a háló-kernellel épít (lásd [A háló-kernel](topic:solid-kernels)). Az alábbiakhoz pontos geometriai kernel kell, amely ebben a verzióban még nincs. Az ilyen funkciókkal mentett munkadarabok megnyithatók: a funkciók megmaradnak az előzményekben, „nincs megépítve” jelöléssel, és mentéskor megőrződnek.

| Még nincs megépítve | Helyette, ma |
|---|---|
| {{ui:Lekerekítés}} és {{ui:Letörés}} kerek éleken; sugár az él mentén változó lekerekítések; a találkozásuknál simán összeolvadó lekerekítések (a háló-kernel levágja őket) | A lekerekítés és a letörés egyenes éleken működik, lapos lapok között; más sarkokat vázlatban kerekítsen le, mielőtt kihúzza ({{ui:Lekerekítés}} a vázlatban, {{key:F}}) |
| {{ui:Héjazás}} görbült lapok megnyitásával; különböző vastagságú falak | Nyitott sík lapok; ahol a fal vastagabb legyen, anyagot adjon hozzá kihúzásokkal |
| {{ui:Végigvezetés}}, {{ui:Áthúzás}}, {{ui:Dőlésszög}} görbült lapokon; kihúzás egy lapig, a következő lapig vagy egy csúcsig; kúpos kihúzások | Kihúzás vagy forgatás, szükség szerint lépésekben; kihúzás egy megmért mélységig |
| {{ui:Borda}}, {{ui:Alapperem}}, {{ui:Élperem}} és síkminták | A lemez vagy a borda profiljának kihúzása |
| Felületek: a {{ui:Forma}} beillesztése a munkadarabba, {{ui:Foltozás}}, {{ui:Áthúzott felület}}, {{ui:Gordon-felület}}, {{ui:Összevarrás}}, {{ui:Vastagítás}}, {{ui:Eltolt felület}}, {{ui:Felület nyújtása}}, {{ui:Felület vágása}} | Nem elérhető |
| Több test: {{ui:Egyesítés}}, {{ui:Test mozgatása}}, {{ui:Test méretezése}}, {{ui:Pályamintázás}}, új testet létrehozó funkciók | Egy szilárd test; mintázások és tükrözés másolják a funkciókat |
| Vázlatok, síkok, tengelyek és pontok olyan lapokon, amelyeket csak pontos kernel talál meg (lekerekítéssel készült lap, furatfal, importált test lapja) | Vázlat alapsíkokon, referenciasíkokon, valamint kihúzások és forgatások sík lapjain |
| Generatív tervezési eredmény szerkeszthető alkatrészként megnyitva vagy hozzáadva (importált testté válik) | Az eredmény letöltése STL vagy STEP formátumban |
| Megnyitott STEP-fájl görbült lapjainak szerkesztése pontos felületként; a STEP-fájl spline-, végigvezetett és forgatott lapjainak pontos STEP-kiírása; spline-oldalak, modellezett menetek, STL / OBJ / 3MF testek és szerelvények; STEP más alkatrész-modellezőknek | A {{ui:Megnyitás}} háromszögekként olvassa be a STEP-et, és megtartja a fájl sík lapjait, hengereit, kúpjait, gömbjeit és tóruszait az exporthoz ([STEP-fájl megnyitása](topic:import-step)); az {{ui:Exportálás}} › {{ui:STEP AP242 (pontos test)}} minden analitikus lapot pontosan ír ki, és ezeket fasetta-ként tartja meg ([Exportálás](topic:export-files#for-other-cad-programs-step)); egy másik alkatrész-modellező makrója továbbra is ír |
| Valódi ívek rajznézetekben | A nézeteket és metszeti nézeteket a fasettákból rajzolja |
| Pontos térfogat, terület és távolság | A {{ui:Mérés}} a fasetta-test számait adja, a kerek részeknél kissé alacsonyabban; a finomabb **Görbék** beállítás közelebb hozza őket |

A lenti táblázatok néhány sora ezek közül az egyik funkciót ajánlja megoldásként valami másra. Ezek a javaslatok akkor érvényesek, amikor visszatér a pontos kernel.

## Funkciók

| Még nincs megépítve | Helyette, ma |
|---|---|
| Arcos (felületi) lekerekítések, teljes körös lekerekítések, sugár pontokban beállított lekerekítések élek mentén | Állandó vagy lineárisan változó {{ui:Lekerekítés}}; több lekerekítési funkció |
| Eltérő falvastagságú héjazások | Egy {{ui:Héjazás}} vastagság; ahol a fal vastagabb legyen, anyagot adjon hozzá kihúzásokkal |
| Dőlésszög szabad alakú (spline) lapokon | A {{ui:Dőlésszög}} sík, henger- és kúpfelületen működik |
| Csavart végigvezetések, vékonyfalú és felületi végigvezetések; végérintés az áthúzás funkcióban; egy vezetősínes áthúzás; spline-pályák | {{ui:Végigvezetés}} állandó tájolással vagy végskálával; két vagy több vezetősínes áthúzás: lásd [Végigvezetés, áthúzás és dőlésszög](topic:sweep-loft-draft) |
| Bordák ívekből vagy spline-okból; bordák, amelyek a vázlatra merőlegesen nőnek (felülnézetből); dőlésszög bordákon; több borda egy vázlatból | {{ui:Borda}} egy egyenes vonalláncból a borda saját síkjában: lásd [Bordák és sarokerősítők](topic:rib) |
| „Eddig” egy görbült felületig; „következőig”, amely görbült lapnál áll meg | Sík lapig vagy referenciasíkig |
| Ellenfúrt furatok, colos és csőmenetek, kúpos menetek, menetkifutások és letört menetkezdetek | Kis mélységű süllyesztés; ISO metrikus és trapéz menetek, szimbolikusan vagy modellezve: lásd [Tengelyek és furatok menetei, rajzolva vagy modellezve](topic:threads) |
| Vékonyfalú kihúzások | Rajzolja meg a profil mindkét falát |
| Egyenként kihagyott mintázatmásolatok, kitöltő mintázatok | Használjon külön funkciókat; görbe mentén mintázás: {{ui:Pályamintázás}} |
| Másolt mintázatok, tükrözések, lekerekítések, letörések, héjazások és importált testek | Másolja a vázlatot vagy funkciót, amelyre épülnek, vagy mintázza azt |
| Pontos (G1) érintkezés egy forma rendkívüli pontjaiban; egy forma foltjainak összevonása nagyobb lapokká | Emelje a forma szintjét: a közelítő foltok kisebbek lesznek; lásd [Szabadformák a Formával](topic:form-surfaces) |
| Egy funkcióban több különálló zárt darabból álló forma; formák közötti hidak | Egy zárt darab formánként; összekapcsolás a Csatlakoztatással |
| Felületi testek kiválasztása a nézetben (kivéve a vágási és foltpontokat); felületi lekerekítések; visszavágás; G2-foltok; Gordon-felületek görbült szomszédokhoz érintve (sík és sík lapokhoz érintve kész) | Válassza ki őket név szerint a funkció panelján; előbb vastagítsa, majd kerekítse le a testet |
| Testlista az előzményekben; rejtett testek kihagyása az exportokból | Nevezze át és rejtse el a testeket a panel testlistájában; a test létrehozó funkció törlése vagy letiltása, hogy kimaradjon |
| Nem egyenletes skálázás, amely megtartja a hengereket és kúpokat analitikusnak; nem egyenletes skálázás eltolt felületeken | {{ui:Test méretezése}} görbült lapokat közel B-spline-ná tesz (0,0000004 mm-en belül); az egyenletes skálázás pontos marad |
| Felületi testek egyesítése; Minkowski-összegek | Előbb {{ui:Összevarrás}} vagy {{ui:Vastagítás}}, majd {{ui:Egyesítés}} |
| Tűréselemzés: sarkokon forduló tűréslánc (2D és 3D vektorhurkok), a geometriából számított érzékenységek, Monte Carlo más eloszlásokkal, vázlatméretek méret-tűrései, bónusz tűrés az anyagfeltételből | {{ui:Tűrésláncszámítás}} egy szerelvényben: egy irány, legrosszabb eset és RSS, kézzel beírt tűrések, a címblokk általános tűréséből vagy GD&T-keretekből: lásd [Tűrésláncok](topic:tolerance-stackup) |
| Hálózás (nesting): vágási sorrend és belépések, közös élek egyszeri vágása, együtt tartandó darabok; tekercsek maradékai, projektek közötti közös készlet | {{ui:Síklemez-alkatrészek elhelyezése táblákon…}} távolsággal, szegéllyel, fordulatokkal és száliránnyal: lásd [Síklemez-alkatrészek elhelyezése táblákon](topic:nest-flat-parts); a megmaradt lemezek megmaradnak és elsőként használatosak: lásd [Maradékok megtartása és újrahasználata](topic:nest-offcuts); a vágást a vágógép saját szoftverében tervezze meg |
| Lemezalkatrész: hajtások, lépcsők, ferde és kontúros peremek; peremek görbült éleken vagy hajlított alapperem lapjain; vázlatos hajlítások; sarokzárások; formázó szerszámok; test átalakítása lemezzé; hajlított alapperem síkmintája kivágásokkal; hajlítási táblázatok | {{ui:Alapperem}} (lemez vagy hajlított profil), {{ui:Élperem}} lemez egyenes élein hajlítási kiváltásokkal, és a síkminta K-tényezővel: lásd [Lemezalkatrészek](topic:sheet-metal) |
| Dőlésszög-elemzés szerelvényeken; osztóvonal keresése; falvastagság-elemzés | {{ui:Dőlésszög-elemzés}} a munkadarabon a Tervezésben: lásd [Dőlésszög ellenőrzése öntéshez és formázáshoz](topic:draft-analysis); a szerelvény minden részét külön nyissa meg az ellenőrzéshez |

## Vázlatok

| Még nincs megépítve | Helyette, ma |
|---|---|
| Ellipszisek, érintő ívek, kúpszeletek, spline-ok adott fokszámmal vagy súlyokkal (NURBS) | Köbös spline-ok, ívek és körök érintő kapcsolatokkal |
| Pont egy spline-on (kapcsolat), görbület (G2) kapcsolatok | Helyezze a spline saját pontját oda, ahol át kell mennie |
| Spline-ok eltolt másolatai, amelyek a későbbi változásokat követik; spline-sarkú láncok eltolásai | Változás után tolja el újra; a sarkot előbb kerekítse le |
| Mintázatmásolatok, amelyek az eredetihez kötve maradnak; görbe menti mintázás | Változás után mintázza újra |
| Szabad alakú vagy döntött körélek vetítése; a munkadarabot követő vetített geometria | Egyenes és párhuzamos körélek vetítése, majd méretezés |
| Vezérelt (referencia) méretek | Méretek olvasása a panelről vagy a munkadarab adataiból |
| Collineáris kapcsolatok | Párhuzamos, 0 távolsággal |
| Beillesztés másik programba (a rendszer vágólapja) | Exportálja DXF, STEP, STL vagy 3MF formátumban |
| Ívek beírása, relatív vagy poláris koordináták | Vonalak és körök beírása; ívek rajzolása az Ív eszközzel |
| Geometria kijelölése mutató nélkül | Kattintás vagy érintés szükséges |

## Paraméterek és mértékegységek

| Még nincs megépítve | Helyette, ma |
|---|---|
| Konfigurációk, amelyek anyagokat változtatnak; CSV-tervtábla, amely funkciókat kapcsol ki | A konfigurációk paramétereket állítanak, és funkciókat kapcsolnak be és ki: lásd [Konfigurációk és tervtáblák](topic:design-tables); a `partcraft variants` a mentett konfigurációkat név szerint építi, kikapcsolt funkciókkal együtt: lásd [Változatcsomag készítése a konfigurációkból](topic:variant-pack) |
| Egyenletek a legújabb funkciók saját paneljein (sík, végigvezetés, dőlésszög és hasonlók) | Írja ki szkriptben vagy a `partcraft set` paranccsal ([Szkriptek és parancssor](topic:scripts-and-cli)) |
| Hüvelykes megjelenítésű munkadarab | A méretek milliméterben jelennek meg; írja be a `2in` értéket egy számmezőbe vagy kifejezésbe, és 50,8 lesz |

## Fájlok

| Még nincs megépítve | Helyette, ma |
|---|---|
| Importált STEP-test saját funkcióinak szerkesztése (előzmények nélkül érkezik) | Adjon vagy vágjon anyagot a saját funkcióival |
| Színek, nevek, szerelvény-szerkezet és PMI olvasása STEP-ből | Nem elérhető |
| glTF, OBJ, IGES, Parasolid export; 3D-s alkatrész DWG-je (csak a változatcsomag ír DWG-t: a rajzlapot) | STL vagy 3MF hálókhoz; STEP testekhez; DXF 2D-hez |
| IGES, DXF vagy más programok saját fájljainak megnyitása (a `.3dm` fájlok egy testként nyílnak: [.3dm modell megnyitása testként](topic:open-3dm-files)) | Kérjen STEP-et, vagy zárt STL, OBJ vagy 3MF hálót: [STL, OBJ vagy 3MF megnyitása](topic:open-meshes) |
| Szerelvény-szerkezet (alkatrésznevekkel rendelkező fa) az exportált STEP-ben | Az összeszerelt STEP az elhelyezett testek egy összetett egysége |
| Mentés tetszőleges mappába a böngésző letöltése nélkül | Kapcsolja be a „kérdezze meg, hová mentsen” beállítást a böngésző letöltési beállításaiban |

## Rajzok

| Még nincs megépítve | Helyette, ma |
|---|---|
| Méretek a három összméreten túl (furatméretek, pozíciók, méret-tűrések) | Jelölje meg a PDF-et, vagy exportálja DXF-ként, és méretezze 2D CAD programban |
| Több mint egy metszet vagy részlet; egy vonalban álló, kitört és segédnézetek | Rajzonként egy metszet és egy részlet |
| Szabad szöveg, megjegyzések és táblázatok a lapon (a cím- és revíziós blokkon kívül) | A felületkezelési megjegyzés, vagy PDF-en hozzáadott szöveg |
| Elsőszögű vetítés, mozgatható nézetek, álló lapok | Harmadik szög, automatikus elrendezés, fekvő lapok A4–A0 és ANSI A–E méretben |
| Élő metszeti nézet: több sík vagy egyszerre egy metszeti doboz, körvonal a vágás körül, a metszet mentése a fájlba | Egy sík egyszerre a {{ui:Nézetek}} › {{ui:Metszeti nézet}} menüből; lásd [Belenézés metszeti nézettel](topic:section-view) |
| Szerelvényrajzok több nézettel, méretekkel vagy mozgatható szám-buborékokkal | Egy izometrikus (vagy robbantott) nézet automatikus buborékokkal és az alkatrészlistával |
| GD&T és felületkezelési jelek másolása és beillesztése | Mindegyiket a Datum, Keret vagy Felületkezelés paranccsal helyezze el |
| Kézikönyvek: STEP-fájlok az Illustrate {{ui:Másik fájlból…}} funkciójában, a ModelCraftból vagy BimCraftból közvetlenül átadott modell, képek a sugárkövető minőségében, interaktív 3D PDF-ben | Nyissa meg a STEP-et a Tervezésben, és indítsa a kézikönyvet a {{ui:A megnyitott alkatrészből}} funkcióval; mentse a modellt glTF (.glb) formátumban; PNG-képek a 3D nézetről; az interaktív 3D-s fájl: lásd [Kézikönyv indítása az Illustrate-ben](topic:illustrate) |

## Szerelvények

| Még nincs megépítve | Helyette, ma |
|---|---|
| Fogaskerék-, léc-, bütyök- és csavarkapcsolatok; gömbcsukló kúpra korlátozva; görbült lapokon vagy pontok között lévő kapcsolatok | Merev, forgó, csúszka, henger, sík, gömb és csapos-hornyos kapcsolatok sík lapokon, minden értéknek saját határaival: lásd [Szerelvény összeállítása](topic:build-assembly) |
| Robbantási lépések, amelyek alkatrészeket forgatnak; a kapcsolatok által elhelyezett alkatrészek húzása | Egyenes robbantási lépések; kézzel mozgatáshoz távolítson el egy kapcsolatot |
| Alösszeszerelések | Csak egy szintnyi alkatrész |
| Fogaskerekek, bütyökök, érintkezés | Nem elérhető |

## Gyártás

| Még nincs megépítve | Helyette, ma |
|---|---|
| 3D adaptív kiürítés és eltolt nagyolás 3D-ben; vízszintes (állandó z), ceruza-, sugárirányú és spirális simítás; adaptív menetek ívekként írva | 3D nagyolás egyenes sorokban és maradékanyag-megmunkálás: lásd [3D nagyolás és maradékanyag-megmunkálás](topic:rough-3d); Párhuzamos és Hullámos simítás: lásd [3D simítás](topic:finish-3d); 2,5 tengelyes lap-, zseb-, 2D adaptív, kontúr-, fúrás- és letörési műveletek: lásd [Szerszámpályák és G-kód készítése](topic:manufacture) |
| Oldalmarás (swarf), áramlási vonalas és többtengelyes nagyoló pályák, döntött munkasík-kódok (G68.2), tartó és gép ütközésvizsgálata; 5 tengelyes és forgó vágások szimulációja | Döntött szerszám bármely műveletnél, 5 tengelyes simítás golyós maróval és 4. tengelyes forgó simítás: lásd [4 és 5 tengelyes megmunkálás](topic:multi-axis) |
| Fúrás és belső menet esztergán, G71/G76 ciklusok, ívek esztergapályán, élő szerszámok, al-orsó | Külső esztergálás: homlokolás, nagyolás, simítás, horonyvágás, levágás, menet, fúrás középvonalon: lásd [Esztergálás esztergán](topic:turning) |
| Szög vagy sarok tapintása, szerszámbeállító, méret mérése tűréshez képest | Lap, oldal, furat vagy csap tapintása a munkaeltolás beállításához: lásd [Tapintás](topic:probing) |
| Tartó és szár ütközésvizsgálata | Figyelje a fogmagasság-figyelmeztetéseket, és ellenőrizze a vezérlője szimulátorában |
| Szerszám-élettartam és részprogram-ciklusok az utófeldolgozóban; más programok utófeldolgozó-fájljainak betöltése | Írjon vagy módosítson utófeldolgozót a PartCraft saját formátumában: lásd [Szerkeszthető utófeldolgozók](topic:post-processors) |
| Hüvelykes G-kód (G20) | Csak milliméter (G21) |

## Szimuláció és generatív tervezés

| Még nincs megépítve | Helyette, ma |
|---|---|
| Nemlineáris vizsgálatok: folyás, nagy elhajlások, alkatrészek közötti érintkezés, fáradás | Lineáris statikus és sajátfrekvenciák: lásd [Feszültség és elhajlás ellenőrzése](topic:simulation); a biztonsági tényezőt tartsa jóval 1 felett |
| Nemlineáris kihajlás (tökéletlenségek, kihajlás utáni viselkedés, átugrás) | Lineáris kihajlási teherszorzók nagy ráhagyással: lásd [Hő, hőfeszültség és kihajlás](topic:thermal-and-buckling) |
| Lapok közötti sugárzás (nézeti tényezők), érintkezési ellenállás, hőmérsékletfüggő anyagok, tehetetlenség a hőfeszültségben (hősokk-hullámok) | Sugárzás a környezetbe, állandó vagy kvázi-statikus hőfeszültség idővel, állandó tulajdonságok: lásd [Hő, hőfeszültség és kihajlás](topic:thermal-and-buckling) |
| Tranziens hőátadás és hőterhelésű vizsgálatok automatikus finomítása; háló durvítása, ahol a hiba kicsi; célérték egy helyi mennyiségen (csúcsfeszültség egy ponton) | **Automatikus finomítás** statikus, kihajlási, sajátfrekvencia- és állandósult hővizsgálatoknál, az egész munkadarab hibáján: lásd [Feszültség és elhajlás ellenőrzése](topic:simulation); egyébként csökkentse az elemméretet |
| Csapágy- és csavarterhelések, távoli erők, nyomatékok, rugók, előírt elmozdulások | Erők és nyomások lapokon, gravitáció; rögzített és súrlódásmentes lapok |
| Szerelvények szimulációja; irányfüggő anyagok (nyomtatott rétegek, kompozitok) | Egy alkatrész, egy izotrop anyag |
| Több szálas megoldó tetraéderes vizsgálatokhoz, hőátadáshoz és generatív tervezéshez; szálak olyan oldalon, amely nincs keresztirányban izolálva | A voxel-vizsgálatok, kihajlás, feszültség idővel és lamináris áramlás a szálakat használják, ahol az oldal engedi: lásd [PartCraft beállításai](topic:settings) |
| Tervezési pontosságú turbulens áramlás (a Spalart–Allmaras modell kísérleti: csőellenállás 30–34%-kal magasabb, visszacsatlakozási hossz 21–39%-kal rövidebb; tervezett: finomabb cellák a falak közelében), hőátadás az áramlásban, nem állandósult (időpontos) áramlás, szabad felületek, nem newtoni folyadékok, forgó alkatrészek | Lamináris, állandósult, izotermikus áramlás newtoni folyadékra, vagy a kísérleti turbulens modell minőségi mintákhoz: lásd [Folyadékáramlás szimulálása](topic:flow-simulation); a panel figyelmeztet, ha a Reynolds-szám túllépi a lamináris tartományt |
| Feszültséghatárok és gyártási szabályok (túlnyúlások, marási irányok) generatív tervezésben; több anyag egy formában | Adott térfogatra legmerevebb alak; az eredmény ellenőrzése a Szimulációban: lásd [Alak növesztése terhelésekből](topic:generative-design) |
| Az eredmény szerkeszthető (sima, paraméteres) testként | STL, lapolt STEP, vagy alkatrész az eredménnyel importált lapolt testként |
| Elektromos gép tervezése: forgórész az állórészben forog, nyomaték a szög függvényében, telítődő acél, mágnesek, amelyek a törésponton túl vesztik erejüket, örvényáramok és vas- és rézveszteségek; mágneses terek 3D-ben vagy görbült hálón | Lineáris 2D mágnessztatika rácson az elemzőkönyvtárban: tekercsek, vas, állandó mágnesek a visszahúzási egyenesükön, légrések, induktivitás és vonzás: lásd [Mágneses terek 2D-ben](topic:magnetic-fields-2d) |

## Szkriptek

| Még nincs megépítve | Helyette, ma |
|---|---|
| Súgó lebegtetéskor, töréspontok és léptetés a szkriptszerkesztőben | A keresés, összecsukás és kiegészítés megvan (lásd [Szkriptek írása és futtatása](topic:craftscript)); a többihez a saját szerkesztője: a Szkript csoport {{ui:Mentés}} és {{ui:Megnyitás}} gombjai mozgatják be és ki a szkripteket; a beépített függvények listája a [CraftScript nyelv](topic:craftscript-language) oldalon |
| Töréspontok és léptetés egy szkriptben | `disp` és `fprintf` az útközben; a {{key:Mod+Enter}} egyszerre néhány kijelölt sort futtat |
| Szkript által mutatott mezők és ábrák a Tervezés munkaterületen; szkriptek, amelyek a munkadarab paramétereit változtatják | A Szkript munkaterületen jelennek meg; a szkriptek a `param` függvénnyel olvassák a paramétereket (lásd [Szkriptek írása és futtatása](topic:craftscript)), és a {{ui:Paraméterek}} lapon változtatják őket |
| Képek és táblázatok ábrák mellett; ábra szerkesztése (nagyítás, tengelyhatárok) mentés előtt | Egymás mellett mutatja az ábrákat; mentsen egy ábrát PNG, SVG vagy CSV formátumban, és fejezze be máshol |
| numpy és más Python-csomagok; Python offline; Python hajtogatása a szerkesztőben; Pascal Script | Python standard könyvtára, CraftScript és Lua: lásd [Szkriptek Pythonban](topic:craftscript-python) |
| Lua-függvények átadása beépített függvényeknek; könyvtári függvény hívása Luából olyan névvel, amely futás közben épül | Írja a könyvtári függvény nevét a szkriptbe (`cs.static_tet(…)`), vagy hívja CraftScript szkriptből |

## Az alkalmazás

| Még nincs megépítve | Helyette, ma |
|---|---|
| Felhőbe mentés, megosztás és verziótörténet | Még nem elérhető. Mentse a fájlokat a számítógépére, és tartsa a verziókat névvel |
| PartCraft telepített alkalmazásként iPaden és iPhone-on | Használja a PartCraftot az eszköz böngészőjében; Androidon és asztali gépen a CadCraft Studióban is fut (getcadcraft.com/download) |
| Jobb gombos (környezeti) menük | Eszköztár és jobb oldali panel |
| Teljesen offline működés friss indításkor | Csak akkor, ha az alkalmazást offline használatra mentette: lásd [Offline munka](common:offline) |

Jelentse a legjobban hiányolt dolgokat a webhely támogatási oldalán: ez határozza meg, mi következik.

## Mérnök (generátorok és mezők)

| Még nincs megépítve | Helyette, ma |
|---|---|
| Fejek, csatlakozók és szerelvények a generált hőcserélőn; hőmérsékleti görbék az anyagszilárdsághoz; T-idom-veszteségek az elosztóban | A generátorok a magot és a csöveket építik; a szerelvényeket a Tervezésben adja hozzá; az anyag szobahőmérsékleti értékeit biztonsági tényezővel használja |
| Generátorok hozzáadása a bővítménykönyvtárból egy kattintással | A {{ui:Megnyitás}} a Mérnök munkaterületen egy fájlból ad hozzá generátort |
| Mezőfájl a generátor saját voxelméreténél finomabb; `.vdb` fájlok beolvasása | Finomabb mezőt szkriptből mentsen; a `.vdb` csak íródik, nem olvasódik |
| Nyomástartó-edény számítások szabvány szerint | A tankönyvi vékonyfalú és vastagfalú képletek a választott biztonsági tényezővel; nem szabványos ráhagyás |
| Generátorok más alkalmazásokhoz | Ebben a verzióban csak a PartCraft |
