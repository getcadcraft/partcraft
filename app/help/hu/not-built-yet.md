---
title: Ami még nincs elkészítve
summary: Mindaz, amit ez a PartCraft-verzió még nem tud, a csavart végigvezetéstől a hüvelykes megjelenítésig, a rajzi méretekig és az alösszeállításokig, és hogy addig mit érdemes tenni.
keywords: hiányzó, még nem, korlátok, korlátozások, ütemterv, pontos mag, lekerekítés, letörés, héjazás, végigvezetés, áthúzás, STEP-import, szimuláció, gyártás, csavart végigvezetés, áthúzás végérintő, lapok lekerekítése, egyenletek, hüvelyk, rajzi méretek, alösszeállítások, felhő, táblagép, telefon
from: 9b868162
---

A PartCraft korai verzió. Ez az oldal felsorolja, mit nem tud még, hogy ne keresse, és mit érdemes helyette most csinálni. Egyiknek sincs még határideje.

## Pontos magot igényel

Ez a verzió minden alkatrészt a hálómaggal épít (lásd: [A hálómag](topic:solid-kernels)). Az alább felsoroltak pontos geometriai magot igényelnek, amely ebben a verzióban még nincs meg. Az ilyen jellemzőkkel mentett alkatrészek megnyithatók: a jellemzők az előzményekben maradnak, „Még nincs elkészítve” jelöléssel, és mentéskor megmaradnak.

| Még nincs elkészítve | Helyette, ma |
|---|---|
| {{ui:Lekerekítés}} és {{ui:Letörés}} kerek éleken; a sugár az él mentén változó lekerekítések; a találkozásnál simán összekevert lekerekítések (a hálómag ferdén vágja le őket) | A lekerekítés és letörés egyenes éleken működik, sík lapok között; más sarkokat a vázlatban kerekítsen le, mielőtt kihúzza ({{ui:Lekerekítés}} vázlatban, {{key:F}}) |
| {{ui:Héjazás}} görbe lapok nyitásával; különböző vastagságú falak | Nyisson meg sík lapokat; ahol a fal vastagabb legyen, kihúzásokkal adjon hozzá anyagot |
| {{ui:Végigvezetés}}, {{ui:Áthúzás}}, {{ui:Dőlésszög}} görbe lapokon; kihúzás egy lapig, a következő lapig vagy egy csúcsig; kúpos kihúzások | Kihúzás vagy forgatás, szükség esetén lépésekben; húzzon ki egy mért mélységig |
| {{ui:Borda}}, {{ui:Alapperem}}, {{ui:Élperem}} és síkminták | Húzza ki a lemezt vagy a borda profilját |
| Felületek: egy {{ui:Forma}} befejezése az alkatrészbe, {{ui:Foltozás}}, {{ui:Áthúzott felület}}, {{ui:Gordon-felület}}, {{ui:Összevarrás}}, {{ui:Vastagítás}}, {{ui:Eltolt felület}}, {{ui:Felület nyújtása}}, {{ui:Felület vágása}} | Nem érhető el |
| Több test: {{ui:Egyesítés}}, {{ui:Test mozgatása}}, {{ui:Test méretezése}}, {{ui:Pályamintázás}}, új testet létrehozó jellemzők | Egy test; a minták és a tükrözés jellemzőket másol |
| Vázlatok, síkok, tengelyek és pontok olyan lapokon, amelyeket csak pontos mag talál meg (lekerekítéssel készült lap, furatfal, egy importált test lapja) | Vázlatot alapsíkokon, segédsíkokon és kihúzások és forgatások sík lapjain készítsen |
| Generatív tervezés eredménye alkatrészként megnyitva vagy hozzáadva (importált testként jelenik meg) | Töltse le az eredményt STL vagy STEP formátumban |
| Megnyitott STEP-fájl görbe lapjainak szerkesztése pontos felületként; pontos STEP spline, végigvezetett és forgatott lapokhoz egy STEP-fájlból, spline-oldalak, modellezett menetek, STL / OBJ / 3MF testek és összeállítások; STEP más alkatrész-modellezőknek | A {{ui:Megnyitás}} a STEP-et háromszögekként olvassa be, és megtartja a fájl sík lapjait, hengereit, kúpjait, gömbjeit és tóruszait az exporthoz ([STEP-fájl megnyitása](topic:import-step)); az {{ui:Exportálás}} › {{ui:STEP AP242 (pontos test)}} minden analitikus lapot pontosan ír ki, és ezeket facettákként tartja meg ([Exportálás](topic:export-files#for-other-cad-programs-step)); a más alkatrész-modellezőnek szóló makró továbbra is ír |
| Valódi ívek a rajznézetekben | A nézetek és a metszeti nézetek a facettákból készülnek |
| Pontos térfogatok, területek és távolságok | A {{ui:Mérés}} a facetált test értékeit adja, kerek részeknél kicsit alacsonyabbakat; a finomabb **Görbék** beállítás közelebb hozza őket |

Az alábbi táblázatok egyes sorai ezen funkciók egyikét javasolják más problémák megkerülésére. Ezek a javaslatok akkor érvényesek, amint a pontos mag visszatér.

## Jellemzők

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Lapok lekerekítése, teljes körű lekerekítés, sugár-pontok szerint változó lekerekítések az él mentén | Állandó vagy lineárisan változó {{ui:Lekerekítés}}; több lekerekítési jellemző |
| Különböző falvastagságú héjak | Egy {{ui:Héjazás}} vastagság; ahol a fal vastagabb legyen, kihúzásokkal adjon hozzá anyagot |
| Dőlésszög szabad formájú (spline) lapokon | A {{ui:Dőlésszög}} sík, henger- és kúpfelületeken működik |
| Csavaró végigvezetések, vékonyfalú és felületi végigvezetések; végérintő az Áthúzás jellemzőn; egy vezetősínnel készült áthúzás; spline-pályák | {{ui:Végigvezetés}} rögzített tájolással vagy végi méretezéssel; két vagy több vezetősínnel készült áthúzás: lásd [Végigvezetés, áthúzás és dőlésszög](topic:sweep-loft-draft) |
| Bordák ívekből vagy splinekből; a vázlatra derékszögben növesztett bordák (felülnézetből); dőlésszög bordákon; több borda egy vázlatból | {{ui:Borda}} egy vonalláncból, a borda saját síkjában: lásd [Bordák és sarokerősítők](topic:rib) |
| „Eddig” görbe felületig, „Következőig” görbe lapon megállva | Sík lapig vagy segédsíkig |
| Ellenfúrt furatok, hüvelykes és csőmenetek, kúpos menetek, menetkifutások és letörölt menetkezdetek | Kis mélységű süllyesztés; ISO metrikus és trapézmenetek, rajzolt (kozmetikus) vagy modellezett: lásd [Menetek tengelyeken és furatokon, rajzolva vagy modellezve](topic:threads) |
| Vékony jellemzők kihúzása | Rajzolja meg a profil mindkét falát |
| Mintamásolatok egyenkénti kihagyása, kitöltési minták | Használjon külön jellemzőket; görbe menti minták: {{ui:Pályamintázás}} |
| Minták, tükrözések, lekerekítések, letörések, héjak és importált testek másolása | Másolja a vázlatot vagy a jellemzőt, amelyekre épülnek, vagy mintázza azt |
| Pontos (G1) érintőség egy forma rendhagyó pontjain; egy forma foltjainak összevonása nagyobb lapokká | Emelje a forma szintjét: a közelített foltok kisebbek lesznek; lásd [Szabad formák a Formával](topic:form-surfaces) |
| Egy formából több, egymástól külön zárt darab egy jellemzőben; formák közötti hidak | Egy zárt darab jellemzőnként (Forma jellemző); csatlakoztassa őket a Csatlakoztatás paranccsal |
| Felülettestek kiválasztása a nézetben (a vágás- és foltpontok kivételével); felületek lekerekítése; vágás visszavonása; G2-foltok; görbe szomszédokhoz érintő Gordon-felületek (síkokhoz és sík lapokhoz érintő készül) | Válassza ki őket névvel a jellemző panelen; először vastagítsa meg, majd kerekítse le a testet |
| Testlista az előzményekben; rejtett testek kihagyása exportáláskor | Nevezze át és rejtse el a testeket az alkatrészpanel testlistájában; egy test kihagyásához törölje vagy letiltsa a létrehozó jellemzőt |
| Nem egyenletes méretezés, amely a hengereket és kúpokat analitikusan tartja; eltolt felületek nem egyenletes méretezése | A {{ui:Test méretezése}} a görbe lapokat zárt B-spline-okká alakítja (0,0000004 mm-en belül); az egyenletes méretezés pontos marad |
| Felületi testek egyesítése; Minkowski-összegek | Először {{ui:Összevarrás}} vagy {{ui:Vastagítás}}, majd {{ui:Egyesítés}} |
| Tűréselemzés: sarkon forduló tűrésláncok (2D és 3D vektorhurkok), a geometriából számított érzékenységek, Monte Carlo más eloszlásokkal, méretűrések vázlatméreteken, bónusz tűrés az anyagállapotból | A {{ui:Tűrésláncszámítás}} összeállításban: egy irány, legrosszabb eset és RSS, beírt tűrések, a rajzfej általános tűrésétől vagy GD&T-keretekből: lásd [Tűrésláncok](topic:tolerance-stackup) |
| Elhelyezés: vágási sorrend és bevezetések, közös élek egyszeri vágása, együtt tartandó alkatrészek; tekercsek maradékai, projektek közötti közös készlet | {{ui:Síklemez-alkatrészek elhelyezése táblákon…}} távolsággal, margókkal, forgatásokkal és száliránnyal: lásd [Síklemez-alkatrészek elhelyezése táblákon](topic:nest-flat-parts); a maradék táblák megmaradnak és előbb használódnak: lásd [Vágási maradékok megtartása és újrahasználata](topic:nest-offcuts); a vágást a vágógép saját szoftverében tervezze meg |
| Lemez: szegélyek, lépcsők, gérvágású és kontúros peremek; peremek görbe éleken vagy hajlított alapperem lapjain; vázolt hajlítások; sarokzárások; alakítószerszámok; test lemezzé alakítása; vágásokkal rendelkező hajlított alapperem síkja; hajlítási táblázatok | {{ui:Alapperem}} (lemez vagy hajlított szelvény), {{ui:Élperem}} lemez egyenes élein hajlítási kiváltásokkal, és a síkminta K-tényezővel: lásd [Lemez](topic:sheet-metal) |
| Dőlésszög-elemzés összeállításokon; osztósík keresése; falvastagság-elemzés | A {{ui:Dőlésszög-elemzés}} az alkatrészen a Tervezésben: lásd [Dőlésszög ellenőrzése fröccsöntéshez és öntéshez](topic:draft-analysis); összeállítás minden alkatrészét egyenként nyissa meg az ellenőrzéshez |

## Vázlatok

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Ellipszisek, érintő ívek, kúpszeletek, rögzített fokszámú vagy súlyozott (NURBS) splinek | Splinek (köbös), ívek és körök érintő kapcsolatokkal |
| Pont egy splinen (kapcsolat), görbületi (G2) kapcsolatok | Tegye a spline saját pontját oda, ahol át kell mennie |
| Splinek eltolt másolatai, amelyek később követik a változásokat; éllánc eltolása éles spline-sarkokkal | Változtatás után ismételje meg az eltolást; előbb kerekítse le a sarkot |
| Mintamásolatok, amelyek az eredetihez kötve maradnak; görbe menti minták | Változtatás után ismételje meg a mintázást |
| Szabad formájú vagy döntött körélek vetítése, az alkatrészt követő vetített geometria | Egyenes és párhuzamos körélek vetítése, majd méretezés |
| Vezérelt (referencia-) méretek | Méreteket a panelről vagy az alkatrész adataiból olvasson ki |
| Kollineáris kapcsolatok | Párhuzamos 0 távolsággal |
| Beillesztés más programba (a rendszer vágólapja) | Exportálja DXF, STEP, STL vagy 3MF formátumban |
| Ívek, relatív vagy poláris koordináták beírása | Írja be a vonalakat és köröket; ívet az Ív eszközzel rajzoljon |
| Geometria kijelölése mutatóeszköz nélkül | Kattintás vagy koppintás szükséges |

## Paraméterek és mértékegységek

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Konfigurációk, amelyek anyagokat változtatnak; CSV-tervtábla, amely jellemzőket kapcsol ki | A konfigurációk paramétereket állítanak be, és jellemzőket kapcsolnak be és ki: lásd [Konfigurációk és tervtáblák](topic:design-tables); a `partcraft variants` név szerint építi a mentett konfigurációkat, a kikapcsolt jellemzőkkel együtt: lásd [Változatcsomag készítése a konfigurációkból](topic:variant-pack) |
| Egyenletek a legújabb jellemzők saját paneljeinek számain (sík, végigvezetés, dőlésszög és hasonlók) | Írja meg őket szkriptben vagy a `partcraft set` paranccsal ([Szkriptek és parancssor](topic:scripts-and-cli)) |
| Hüvelykben megjelenített alkatrész | A méretek milliméterben jelennek meg; a `2in` beírása egy számmezőbe vagy kifejezésbe 50,8-at ad |

## Fájlok

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Egy importált STEP-test saját jellemzőinek szerkesztése (előzmények nélkül érkezik) | Anyagot adjon hozzá vagy vágjon ki saját jellemzőkkel |
| Színek, nevek, összeállítási szerkezet és PMI olvasása STEP-ből | Nem érhető el |
| glTF, OBJ, IGES, Parasolid export; 3D-s alkatrész DWG-je (csak a változatcsomag ír DWG-t: a rajzlapot) | Hálókhoz STL vagy 3MF; testekhez STEP; 2D-hez DXF |
| IGES, DXF vagy más programok saját fájljainak megnyitása (a `.3dm` fájlok egy testként nyílnak meg: [Egy .3dm-modell megnyitása szilárd testként](topic:open-3dm-files)) | Kérjen STEP-et, vagy zárt STL, OBJ vagy 3MF hálót: [STL, OBJ vagy 3MF megnyitása](topic:open-meshes) |
| Összeállítási szerkezet (fa az alkatrészneveivel) az exportált STEP-ben | Az összeállítási STEP az elhelyezett testekből álló egyetlen összetett elem |
| Mentés a választott mappába a böngésző letöltése nélkül | Kapcsolja be a böngésző letöltési beállításai között a „Mentés helyének kérdezése” lehetőséget |

## Rajzok

| Még nincs elkészítve | Helyette, ma |
|---|---|
| A három összméreten túli méretek (furatméretek, helyzetek, méret-tűrések) | Jelölje meg a PDF-et, vagy exportálja DXF-ként, és méretezze egy 2D-s CAD-programban |
| Egynél több metszet vagy részlet; igazított, kihagyásos és segédnézetek | Rajzonként egy metszet és egy részlet |
| Szabad szöveg, megjegyzések és táblázatok a lapon (a rajzfejen és a revíziós blokkon kívül) | A felületkezelési megjegyzés, vagy a PDF-en hozzáadott szöveg |
| Elsőszögű vetítés, mozgatható nézetek, álló lapok | Harmadik szögű vetítés, automatikus elrendezés, fekvő lapok A4–A0 és ANSI A–E |
| Élő metszeti nézet: több sík vagy metszeti doboz egyszerre, körvonal a vágás körül, a metszet mentése a fájlba | Egyszerre egy sík az {{ui:Nézetek}} › {{ui:Metszeti nézet}} menüből; lásd [Belenézés metszeti nézettel](topic:section-view) |
| Összeállítási rajzok több, mozgatható nézettel, mérettel vagy jelölőkörrel | Egy izometrikus (vagy szétszedett) nézet automatikus jelölőkörökkel és alkatrészlistával |
| GD&T- és felületi jelek másolása és beillesztése | Mindegyiket a Datum, a Keret vagy a Felületi jel eszközzel helyezze el |
| Kézikönyvek: STEP-fájlok az Illustrate {{ui:Másik fájlból…}} menüpontjában, közvetlenül a ModelCraftból vagy BimCraftból átadott modell, képek az útkövető (path tracer) minőségében, interaktív 3D a PDF-ben | Nyissa meg a STEP-et a Tervezésben, és indítsa el a kézikönyvet a {{ui:A megnyitott alkatrészből}} menüponttal; mentse a modellt glTF (.glb) formátumban; PNG-képek a 3D-nézetről; az interaktív 3D-fájl: lásd [Kézikönyv indítása az Illustrate-ben](topic:illustrate) |

## Összeállítások

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Fogaskerék-, fogasléc-, bütyök- és csavarkapcsolatok; kúpra korlátozott gömbcsukló; görbe lapokon vagy pontok között létrejövő kapcsolatok | Merev, forgó, csúszó, hengeres, síkbeli, gömb- és csap-horony kapcsolatok sík lapokon, mindegyik értéke a saját határaival: lásd [Összeállítás készítése](topic:build-assembly) |
| Szétszedési lépések, amelyek forgatják az alkatrészeket, és kapcsolatok által elhelyezett alkatrészek húzása | Egyenes szétszedési lépések; kapcsolat eltávolításával kézzel mozgassa az alkatrészt |
| Alösszeállítások | Csak egyetlen alkatrészszint |
| Fogaskerekek, bütyökök, érintkezés | Nem érhető el |

## Gyártás

| Még nincs elkészítve | Helyette, ma |
|---|---|
| 3D-s nagyolás görbe lapokon, 3D-s adaptív megmunkálás, maradékmegmunkálás; vízvonalas, ceruza-, radiális és spirális simítás; adaptív menetek ívekként írva | 2,5 tengelyes felület-, zseb-, 2D-s adaptív, kontúr-, fúró- és letörési megmunkálás: lásd [Szerszámpályák és G-kód készítése](topic:manufacture); az egész modell Párhuzamos és Scallop simítása: lásd [3D-s simítás](topic:finish-3d) |
| 4 és 5 tengelyes szerszámpályák, esztergálás, tapintás | Egyszerre egy oldalt állítson be, a szerszámtengelyt a Beállítás lapon |
| Tartó és szerszámszár ütközésének ellenőrzése | Figyelje a hornyok hosszára vonatkozó figyelmeztetéseket, és ellenőrizze a vezérlő szimulátorában |
| Tapintás, szerszámélettartam- és alprogram-ciklusok, 4. és 5. tengelyes és eszterga-kódok egy utófeldolgozóban; más programok utófeldolgozó-fájljainak betöltése | Utófeldolgozót a PartCraft saját formátumában írjon vagy módosítson: lásd [Szerkeszthető utófeldolgozók](topic:post-processors) |
| Hüvelykes G-kód (G20) | Csak milliméter (G21) |

## Szimuláció és generatív tervezés

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Nemlineáris vizsgálatok: folyás, nagy elhajlások, alkatrészek közötti érintkezés, fáradás | Lineáris statikus és sajátfrekvenciák: lásd [Feszültség és elhajlás ellenőrzése](topic:simulation); a biztonsági tényezőt tartsa jóval 1 felett |
| Nemlineáris kihajlás (tökéletlenségek, utókihajlás, átugrás) | Lineáris kihajlási terhelési tényezők bő ráhagyással: lásd [Hő, hőfeszültség és kihajlás](topic:thermal-and-buckling) |
| Sugárzás lapok között (nézetfaktorok), érintkezési ellenállás, hőmérsékletfüggő anyagok, tehetetlenség a hőfeszültségben (hőlökéshullámok) | Sugárzás a környezet felé, állandó vagy kvázistatikus hőfeszültség az idő függvényében, állandó tulajdonságok: lásd [Hő, hőfeszültség és kihajlás](topic:thermal-and-buckling) |
| Automatikus finomítás tranziens hőre és hőterhelésű vizsgálatokhoz; a háló ritkítása, ahol a hiba kicsi; célérték egy helyi mennyiségre (a csúcsfeszültség egy ponton) | **Automatikus finomítás** statikus, kihajlási, sajátfrekvencia- és állandósult hővizsgálatokhoz, a teljes alkatrész hibáján: lásd [Feszültség és elhajlás ellenőrzése](topic:simulation); egyébként csökkentse az elemméretet |
| Csapágy- és csavarterhelések, távoli erők, nyomatékok, rugók, előírt elmozdulások | Erők és nyomások lapokon, gravitáció; rögzített és súrlódásmentes lapok |
| Összeállítások szimulációja; irányfüggő anyagok (nyomtatott rétegek, kompozitok) | Egy alkatrész, egy izotrop anyag |
| Több megoldószál tetraéderes vizsgálatokhoz, hőátadáshoz és generatív tervezéshez; minden szál egy olyan oldalon, amelyen nincs cross-origin izoláció | Voxel-vizsgálatok, kihajlás, feszültség az időben és lamináris áramlás ott használják a szálakat, ahol az oldal engedi: lásd [A PartCraft beállításai](topic:settings) |
| Turbulens áramlás tervezési pontossággal (a Spalart–Allmaras-modell kísérleti jelleggel benne van: a csőellenállás 30–34%-kal magasabb, a visszalépő lépcső újracsatlakozása 21–39%-kal rövidebb; tervben: finomabb cellák a falak közelében), hőátadás az áramlásban, nem állandósult (időpontos) áramlás, szabad felületek, nem newtoni folyadékok, forgó alkatrészek | Laminárisan, állandósult, izoterm áramlás newtoni folyadékra, vagy a kísérleti turbulens modell minőségi mintázatokhoz: lásd [Folyadékáramlás szimulálása](topic:flow-simulation); a panel figyelmeztet, ha a Reynolds-szám a lamináris tartomány fölé kerül |
| Feszültséghatárok és gyártási szabályok (túlnyúlások, marási irányok) a generatív tervezésben; több anyag egy formában | A legmerevebb forma egy térfogatra; az eredményt a Szimulációban ellenőrizze: lásd [Alak növesztése terhelésekből](topic:generative-design) |
| Az eredmény szerkeszthető (sima, paraméteres) testként | STL, facetált STEP, vagy alkatrész az eredménnyel importált facetált testként |
| Villamosgép-tervezés: forgórész az állórészben forog, nyomaték a szög függvényében, telítődő acél, térdpontjukon túl erejüket vesztő mágnesek, örvényáramok, vas- és rézveszteségek; mágneses terek 3D-ben vagy görbe hálókon | Lineáris 2D-s magnetosztatika rácson az elemzési könyvtárban: tekercsek, vas, állandó mágnesek a visszahúzási egyenesükön, légrések, induktivitás és vonzóerő: lásd [Mágneses terek 2D-ben](topic:magnetic-fields-2d) |

## Szkriptek

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Súgó rámutatásnál, töréspontok és léptetés a szkriptszerkesztőben | A keresés, az összecsukás és a kiegészítés már megvan (lásd [Szkriptek írása és futtatása](topic:craftscript)); a többihez használja a saját szerkesztőjét: a Szkript csoport {{ui:Mentés}} és {{ui:Megnyitás}} gombjai be- és kiviszik a szkripteket; a beépített függvényeket a [CraftScript nyelv](topic:craftscript-language) sorolja fel |
| Töréspontok és lépésenkénti futtatás egy szkriptben | A `disp` és az `fprintf` útközben; a {{key:Mod+Enter}} egyszerre néhány kijelölt sort futtat |
| Mezők és diagramok, amelyeket a szkript megjelenít, a Tervezés munkaterületén rajzolódnak ki; szkriptek, amelyek az alkatrész paramétereit változtatják | A Szkript munkaterületen jelennek meg; a szkriptek a `param` függvénnyel olvassák a paramétereket (lásd [Szkriptek írása és futtatása](topic:craftscript)), a {{ui:Paraméterek}} lapon pedig lehet őket módosítani |
| Képek és táblázatok diagramok mellett; diagram szerkesztése (nagyítás, tengelyhatárok) mentés előtt | Egymás mellett a diagramok jelennek meg; mentse a diagramot PNG, SVG vagy CSV formátumban, és fejezze be máshol |
| numpy és más Python-csomagok; offline Python; Python-kód összecsukása a szerkesztőben; Pascal Script | A Python szabványos könyvtára, a CraftScript és a Lua: lásd [Szkriptek Pythonban](topic:craftscript-python) |
| Lua-függvények átadása beépített függvényeknek; könyvtári függvény hívása Lua-ból olyan névvel, amelyet a szkript futása közben állítanak elő | Írja a könyvtári függvény nevét a szkriptbe (`cs.static_tet(…)`), vagy hívja meg egy CraftScript-szkriptből |

## Az alkalmazás

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Felhőbe mentés, megosztás és verziótörténet | Még nem érhető el. Mentse a fájlokat a számítógépére, és tartsa meg a verziókat névvel |
| PartCraft telepített alkalmazásként iPaden és iPhone-on | Használja a PartCraftot az eszköz böngészőjében; Androidon és asztali gépen a CadCraft Studióban is fut (getcadcraft.com/download) |
| Helyi (jobb egérgombos) menük | Eszköztár és jobb oldali panel |
| Teljesen offline munka friss indítástól | Csak akkor, ha az alkalmazás offline használatra van mentve: lásd [Offline munka](common:offline) |

Jelezze az oldal támogatási oldalán keresztül, mit hiányol a legjobban: ez alakítja, mi jön ezután.

## Engineer (generátorok és mezők)

| Még nincs elkészítve | Helyette, ma |
|---|---|
| Fejrészek, csonkok és csatlakozók a generált hőcserélőn; hőmérséklet-görbék az anyagszilárdsághoz; T-elágazás veszteségei az elosztóban | A generátorok a magot és a csöveket építik; a csatlakozókat a Tervezésben adja hozzá; az anyag szobahőmérsékleti értékeit használja biztonsági tényezővel |
| Nyomástartó edények szabványos számításai | A tankönyvi vékonyfalú és vastagfalú képletek a választott biztonsági tényezővel; nem szabványi ráhagyás |
| Generátorok hozzáadása a bővítménykönyvtárból egy kattintással | A {{ui:Megnyitás}} az Engineer munkaterületen fájlból ad hozzá generátort |
| Mezőfájl, amely finomabb a generátor saját voxelméreténél; `.vdb` fájlok beolvasása | Finomabb mezőt szkriptből mentsen; a `.vdb` íródik, nem olvasódik |
| Generátorok a többi alkalmazáshoz | Ebben a verzióban csak a PartCraft |
