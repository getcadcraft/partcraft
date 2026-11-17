---
title: Szabad formájú felületek (NURBS)
summary: Sima görbék és felületek az alkatrész mellett – áthúzás, végigvezetés, görbehálózatok, négyélű foltok, átmenetek, vágások –, G0, G1 és G2 folytonosság a pontos felületeken mérve, testek egyesítése, kivonása és metszete az alkatrészbe égetve, zebra- és görbületi nézetek, szkennelt adatokra illesztett felületek a mért hibával, valamint STEP- és IGES-fájlok. Az alkatrészfájlban tárolódik.
keywords: nurbs, szkennelés, visszatervezés, illesztés, háló felületté, pontfelhő, stl, vágás, vágott, furat, kivágás, test, testek, logikai művelet, egyesítés, kivonás, metszet, varrás, zárt, beégetés, szabad forma, b-spline, bspline, görbe, spline, áthúzás, végigvezetés, sín, hálózat, folt, átmenet, folytonosság, g0, g1, g2, érintő, görbület, zebra, vezérlőpontok, csomópontok, fok, step, iges, a osztály, burkoló, simítás
from: 64ed5196
---

A **Felületek** munkaterület terméktestek héjaihoz, autókarosszériákhoz és hajótestekhez használt sima görbéket és felületeket készít: NURBS-t, ugyanazokkal a matematikai eszközökkel, mint más felületmodellezők. Minden mérés a pontos felületeken történik, soha nem a látható háromszögeken. A méretek milliméterben vannak, mint a PartCraft többi részén.

Válassza a **Felületek** lehetőséget a **Munkaterület** mezőben. Az eszköztáron ott van a {{ui:Görbe}}, {{ui:Áthúzás}}, {{ui:Végigvezetés}}, {{ui:Illesztés}} és {{ui:Zebra}}; minden parancs a jobb oldali panelen található. Egy parancs megmondja, mire van még szüksége: kattintson a görbékre vagy felületekre a nézetben (ha szélt vagy végpontot kér, annak közelében), vagy válassza ki őket a listából; írjon be pontokat, vagy kattintson rájuk az alkatrész lapjain (az alkatrészen kívül a földsíkra kerülnek), majd nyomja meg az Entert.

A görbék és felületek a testtel együtt az alkatrészfájlban mentődnek. Nem változtatják meg az alkatrész jellemzőit: a panelnek saját **Visszavonása** és **Ismétlése** van, parancsonként egy lépéssel.

## Görbék

- **Görbe pontokon át** minden kattintott ponton áthalad. A **Görbe vezérlőpontokkal** ehelyett a vezérlőpont-hálót követi.
- **Csomópont beszúrása**, **Fok emelése** és **Fok csökkentése** a görbe leírását változtatja meg anélkül, hogy mozgatná (a csökkentés megtagadja, ha a görbe a tűrésnél többet mozdulna). **Görbe újraépítése** új számú vezérlőpontot ad neki, és megmondja, mennyit mozdult.
- **Görbe illesztése** az egyik görbe végét a másikéhoz illeszti G0 (érintkezés), G1 (azonos irány) vagy G2 (azonos görbület is) folytonossággal. **Görbeátmenet** új görbét ad két vég közé, G1 vagy G2 folytonossággal.

## Felületek

- **Áthúzás** két vagy több görbén át, **Vonalas felület** kettő között, **Görbe kihúzása**, **Görbe forgatása**.
- **Végigvezetés egy sín mentén** úgy viszi végig a profilt egy pályán, hogy nem csavarja; a **Végigvezetés két sín mentén** a profil végeit mindkét sínen tartja. A végigvezetések illesztettek: az eredmény megmondja, mennyire maradt közel a valódi végigvezetéshez.
- **Felület görbehálózatból** görbék rácsán halad át (mindegyik egyszer metszi a többit). **Folt négy élből** négy olyan görbét tölt ki, amelyek a sarkaiknál találkoznak.
- **Felület illesztése** egy felületi élt a szomszédjához illeszt G0, G1 vagy G2 folytonossággal; **Felületátmenet** felületet ad két él közé.
- **Eltolt felület**, **Felület nyújtása** (a felület úgy folytatódik, ahogy haladt), **Felület újraépítése**.

## A minőség ellenőrzése

A **Közös élek** táblázat felsorolja azokat az éleket, amelyeket két felület oszt meg, a résmérettel (mm), a közöttük lévő szöggel (°) és a görbületugrással (1/mm), valamint azzal, hogy ez G0, G1 vagy G2 folytonosságot jelent-e. A kért szintnél rosszabb él a **Problémák** között jelenik meg, egy **Illesztés** javítási lehetőséggel. A **Zebra** csíkok és a görbület színei a pontos felületből származnak: az élen át töretlenül futó csíkok G1-et jelentenek; a szélességüket megtartó csíkok G2-t.

A G0–G2 mérése élenként 33 pontban történik. **A G3 és az „A osztályú” minőség nincs mérve**, és ezekről nem állítunk semmit.

## Felület vágása

A **Vágás** csoport úgy vág felületet, hogy az alakját nem változtatja meg: a felület minden vezérlőpontját megtartja, és csak a körvonalon belüli rész látszik, kerül számításba és íródik ki. A **Téglalapra vágás** és a **Körrel vágás** a felület mindkét irányban vett hányadán (0-tól 1-ig) dolgozik, így nem kell a nézetben kijelölni; a **Görbével vágás** a felületen fekvő zárt görbét fogad (a felületre vetítődik, és ha nyitott vagy a tűrésnél messzebb van, szöveggel visszautasítja). Pipálja be a **Furat vágása** lehetőséget, ha a körvonal belsejét el akarja távolítani; hagyja kikapcsolva, ha csak a belsejét tartja meg. Egy felületnek lehet egy megtartott körvonala és tetszőleges számú furata; a másikat keresztező körvonal visszautasításra kerül. A **Vágás eltávolítása** újra megmutatja az egész felületet. A panel Visszavonása a vágást ugyanúgy visszavonja, mint bármely más lépést.

A STEP a vágást a lap határaként, az IGES vágott felületként (144-es entitás) tárolja; mindkettő vissza is olvassa.

## Testek és logikai műveletek

A **Testek** csoport felületekből zárt testeket készít, és egyesíti őket. Itt a test a panel saját felületeinek olyan halmaza, amely együtt zár le egy térfogatot; lapjai pontos NURBS-felületek maradnak a vágásaikkal együtt.

- **Doboztest**, **Hengertest** és **Gömbtest** beírt méretekből (mm-ben) készít egyet: hat sík lapú dobozt, kerek oldalú hengert két, a körre vágott sík véggel, illetve egyetlen forgatott felületből álló gömböt.
- **Test felületekből** a saját készítésű felületeket csoportosítja. Válassza ki őket, vagy ne válasszon ki semmit, hogy a még testbe nem tartozó összes látható felületet használja. A tűrésen belül össze vannak varrva: ha nem zárulnak, semmi sem változik, és a panel megmondja, hány él marad nyitva, és milyen közel kell találkozniuk.
- **Unió**, **Kivonás** (a második testet elveszi az elsőből) és **Metszet** (csak ami mindkettőben közös) két testet vesz: kattintson mindkettőből egy lapra a nézetben, vagy nyomja meg a **Kiválasztás** gombot a **Testek** listában. Pipálja be az **A két test megtartása** lehetőséget, hogy az eredmény mellett megmaradjanak.

A logikai művelet minden lapot a saját pontos felületén tart, és a metszésvonal mentén új vágási körvonalakkal vágja. Az eredménysor a mért számokat adja: mennyit kellett mozdulniuk a testmotor pontjainak, hogy a pontos felületeken üljenek (sosem többet a tűrésnél), milyen közel vannak a metszéspontok mindkét felülethez (általában néhány milliomod milliméter), a térfogatot, és hogy az új lapok újra zárulnak-e, ha a pontos felületükről újra összevarrják őket. A térfogatot a tűrésen belüli háromszögeken mérjük (0,05 mm, hacsak nem állított be másikat), így egy gömb vagy henger térfogata kicsit a pontos alatt jelenik meg: kisebb tűrés közelebb hoz. A logikai művelet, amelyet tisztán nem lehet elvégezni (a testeknek nincs közös részük, a körvonal keresztezné önmagát), szöveggel visszautasításra kerül, és semmit nem változtat. Egy logikai művelet a panel **Visszavonásának** egy lépése.

A **Testek** listában a **Csoport bontása** a lapokat egyszerű felületként tartja meg; a kuka törli a testet és a lapjait.

## Lekerekítések és vastagítás

A **Lekerekítés lapok között** azt az élt kerekíti le, ahol egy test két lapja találkozik: válassza ki a két lapot (a nézetben, vagy a listában a **Kiválasztás** gombbal), írja be a **sugarat**, és az él mentén változó sugárnál a **sugarat a végén** (0 esetén egy sugár marad). A megadott sugarú golyót végiggurítják az élen úgy, hogy mindkét lapot érintse; a lekerekítés az egyes pontokon keletkező pontos körív, egy felületté összefűzve, a két lap pedig ott van levágva, ahol a golyó érinti őket. Egy külső él anyagot veszít, egy belső sarok nyer. Az eredménysor megmondja, mit mértek: milyen messze van a lekerekítő felület a gurító golyótól az illesztett pontok között (a pontokat addig adják hozzá, míg a tűrés negyedén belül nem lesz), a legnagyobb szöget a lekerekítés és az egyes lapok között az érintővonalak mentén, és ugyanazokat a számokat, mint az Unió esetén. Ha a sugár nem illeszkedik (a golyó elhagyná a lapot, vagy egy lap szorosabban görbül, mint a sugár), visszautasítják, megnevezve a lapot, és semmi sem változik.

A **Több él lekerekítése** egy lépésben sok élt kerekít le: először az első él két lapját, aztán a következő élét, és így tovább (egy lap több párban is szerepelhet, például a doboz felső lapja négyben); minden él a beírt sugarat kapja. Minden lekerekítést a test eredeti állapotán számítanak ki, majd egymás után vágják be, így a sorrend nem számít. Ahol két lekerekített él találkozik olyan sarokban, amelyen a többi él éles marad, a két lekerekítés a metszésgörbéjük mentén összefut (gerinc). Ahol három lapos lap három egymásra merőleges lekerekített külső éle egyetlen sugárral találkozik, a sarok egyetlen **gömbfolt** lesz, amely mindhárom lekerekítést érinti (a **Sarkok** kikapcsolásával a gerinces sarkot kapja); egy élnek legalább kétszer akkora hosszúnak kell lennie, ahol mindkét vége ilyen sarok. Az eredménysor megmondja, hány élt kerekítettek le és hogyan sikerültek a sarkok. A belső éleket is lehet együtt lekerekíteni, de az olyan eredményt, amely nem záródik újra, csak jelzik (a sor ezt mondja), ezért ellenőrizze.

A **Vastagítás testté** vastagságot ad egy felületnek: válassza ki, írja be a **vastagságot**, és pipálja be a **Másik oldal** lehetőséget, hogy a másik irányba nőjön. Az eltolt lap a felülethez illeszkedik, és ahhoz képest mérik (az eredménysor adja a vastagságtól való legnagyobb eltérést); a falak minden élt és minden vágási körvonalat követnek. Ha a felület ezen az oldalon szorosabban görbül, mint a vastagság, vagy egy másik része a vastagságnál közelebb fekszik, a műveletet a felület és a hely megnevezésével visszautasítják, és semmi sem változik.

## Test beégetése az alkatrészbe

A **Beégetés** (a Felületek eszköztárában), vagy a **Beégetés az alkatrészbe** a **Testek** listában a testet az alkatrész egy testévé teszi, ahogy a megnyitott STL is azzá válik: válassza ki a testet, hogy **hozzáadódjon** az alkatrészhez, abból **kivágódjon**, vagy **metszetként** legyen vele, valamint a tűrést (milyen messze lehetnek a háromszögek a pontos felületektől). Ez az alkatrész Visszavonásának egy lépése, és a jellemzőlistában a testről elnevezett importként jelenik meg. Az alkatrész a háromszögeket megtartja, így a felületek nélkül is megnyílik és újraépül; a pontos test a Felületekben marad, így változtatás után újra beégethető.

## Fájlok

Exportálja a **STEP**-et (AP242) vagy az **IGES**-t a görbékkel és felületekkel pontosan úgy, ahogy vannak (B-spline görbék és felületek, semmi nem alakul háromszögekké). Minden felület saját lap a vágásával; a test egy zárt héjként íródik, minden élet a két lapja osztja meg, ahogy más CAD-programok várják (az állapotsor megmondja, hány test ment így ki). Az IGES-ben ugyanez a test egyetlen zárt, sokaságszerű szilárd B-rep (186-os entitás a 514-es zárt héjon, 510-es lapok, 508-as hurkok, egy 504-es élista és egy 502-es csúcslista); az a test, amelynek lapjai nem párosodnak élről élre, külön lapokként íródik, és a sor ezt jelzi. Az **Importálás…** ilyen testet STEP-ből és IGES-ből is testként olvas vissza.

## Hajóvonalak simítása

A **Simítás** (a Felületek eszköztárában) minden görbét a pontos alakján mér – inflexiók (ahol egyik irányból a másikba hajlik), a legnagyobb görbület, a csomópontoknál lévő görbületugrások és a simaságtalanság –, és azokat újraépíti, amelyeknek van inflexiójuk vagy ugrásuk, a lehető legkevesebb vezérlőponttal, amely a megadott tűrésen belül marad, és nem ad új inflexiót. Rajzolja meg a keresztmetszeteket, a vízvonalakat és a hosszvonalakat görbékként, simítsa őket, majd a **Áthúzás** paranccsal húzza át a hajótestet a keresztmetszeteken, és ellenőrizze a **Zebra** segítségével. A nem sima görbék a **Problémák** között is megjelennek, egy **Görbe simítása** javítással. Az olyan vonal, amelynek irányt kell váltania (S alakú szelvény), megtartja ezt az egy inflexiót. A hajótest vízkiszorítását, súlypontjait és visszaállító karjait a szilárd alkatrész adja: lásd a hidrosztatikai eszközt.

## Felületek szkennelt adatokból (visszatervezés)

Nyissa meg azt az alkatrészt, amely a szkennelt hálót tartalmazza (egy megnyitott STL-t vagy beégetett testet), válassza a **Felületek** lehetőséget a **Munkaterület** mezőben, és a **Szkennelés** csoportban válassza a **Felületek illesztése a szkennhez** lehetőséget; az alkatrész felépített hálója lesz a szkenn. Az eszköz **síkokat**, **hengereket**, **gömböket** és **kúpokat** keres (azokat a pontos felületeket, amelyekből egy megmunkált alkatrész áll; minden sor megmutatja a megtalált sugarat vagy félszöget), **lekerekítéseket** keres (kerek élek és sarkok: egy kis henger vagy gömb, amely érintőlegesen fut két vagy több másik lapba, a sugarával és az összekötött lapokkal együtt), **peremlekerekítéseket** (torusz: az a kerek él, ahol egy sík lap hengerrel vagy kúppal találkozik, a sugarával és a gyűrű sugarával együtt) és **változó lekerekítéseket** (olyan kerek él, amelynek sugara az él mentén változik, mindkét végén mutatott sugárral), egy **szabad formájú foltot** illeszt egy sima, enyhén görbülő darabra, és minden lapot ahhoz a szkenn-részhez tartozó körvonalra vág, amelyből származik, így a furatok és sarkok megmaradnak. Beállítások: a **tűrés** (mm-ben, milyen messze lehet egy szkennelt pont egy síktól vagy hengertől, és még hozzá tartozik, valamint a szabad formájú folt célértéke), a **legkisebb darab** (a felületterület hányada) és a **legtöbb lap**. Ugyanaz a szkenn és ugyanezek a beállítások mindig ugyanazokat a lapokat adják.

Az eredmény egy táblázat, soronként egy lap: a fajtája, hány háromszögből származik, és a hiba, amelyet **a szkenntől a lapig mérnek** (négyzetes közép (rms), a legnagyobb, és a tűrésen belüli pontok aránya). A mért pontok a szkenn csúcspontjai és minden háromszög közepe. A hibát fordítva (lap a szkennig) nem mérik, így az a lap, amely a szkennen túlnyúlik, nem látszana. A táblázat alatti megjegyzés azt is mondja, mekkora terület volt túl kicsi az illesztéshez. A nézetben a szkennpontokat az **eltérési térképük** színezi: kék a lapon, zöld a tűrés felénél, piros a tűrésnél vagy nagyobbnál (az **Eltérési térkép mutatása** kikapcsolásával elrejthető). Azok a darabok, amelyek önmagukba hajlanak (például egy zárt cső szabad formájú foltokkal), illesztetlenként szerepelnek, és soha nem kényszerítik egyetlen felületbe.

A **Felületek összevarrása testté** minden látható, testbe még nem tartozó felületet egyetlen zárt testté varr össze. A szkenn-lapok csak a szkenn saját hibáján belül találkoznak, ezért a legkisebb illesztési távolságot próbálja ki, amely zár (sosem nagyobbat, mint a beállított **varrási távolság**), és szöveggel visszautasítja, ha a lapok nem zárnak. Soha nem fed be rést. A lekerekített élű doboz akkor varrható össze, ha lekerekítései külön lapként lettek megtalálva; a zárt illesztési távolság az eredményben szerepel. A test ezután működik az Unióval, Kivonással, Metszettel és a **Beégetés az alkatrészbe** funkcióval.

Amit nem tesz meg: a **peremlekerekítést** (torusz) csak egy már megtalált henger vagy kúp tengelye körül keresi, a **változó lekerekítést** pedig csak elég egyenes él mentén (szelvényei egy irányra merőlegesen vannak vágva); máshol, ha elég sima, szabad formájú foltként jelennek meg, egyébként kimaradnak; a gömböket, kúpokat és lekerekítéseket véletlen mintavétellel keresi, így egy nagyon kicsi (néhány háromszögnyi) elemet elszalaszthat; az eltérési térkép a szkenntől a lapokig mért távolságot mutatja, nem fordítva; a nagyon nagy szkenneket (300 000 háromszögnél többet) itt visszautasítja. Egy teljes körű henger lapjai a furatok körül vannak vágva, a varrat ott van, ahol nincs furat. Mielőtt rájuk hagyatkozna, minden lapot ellenőrizzen a szkenn alapján.

## Még nincs elkészítve

Olyan élek lekerekítése, amelyek görbe lapok sarkában vagy eltérő sugarakkal találkoznak (csúcsátmenet), két olyan lap közötti lekerekítés, amelyek nem érintkeznek, ferde vagy görbe lapon végződő belső lekerekítés, logikai műveletek és lekerekítések, amelyeket háromszögek nélkül, magukon a felületeken számítanak ki (itt a testmotor tűrésen belüli háromszögeken dolgozik, és minden pontot utána visszaillesztenek a pontos felületekre), olyan beégetett test, amely követi a felületeket, ha azok változnak, egy felület vágása egy másik felülettel logikai művelet nélkül, több mint négy oldalú lyukak betöltése, görbék vetítése felületekre.
