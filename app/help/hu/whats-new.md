---
title: Újdonságok a 0.8 és 0.8.1 verzióban
summary: A PartCraft 0.8 élő elemzést ad szerkesztés közben, egy „Mi törik el először?” ellenőrzést, folyás- és érintkezésvizsgálatokat külső megoldóhoz készített bemeneti fájlokkal, mozgásvizsgálatokat összeállításokhoz, egy Felületek munkaterületet szabad formájú felületekhez, fizikából méretezett alkatrészeket a Mérnök munkaterületen, fényképből készített vázlatot, nyomtatási exportokat, elhelyezett táblák G-kódját és olyan rajzokat, amelyek maguk méretezik a furataikat. A 0.8.1 egy teljes képernyős kurzorberagadást javít.
keywords: újdonságok, kiadási megjegyzések, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, élő elemzés, frissítés szerkesztés közben, törésvizsgálat, mi törik el először, terhelési tényező, nemlineáris, folyás, képlékeny alakváltozás, érintkezés, CalculiX, mozgásvizsgálat, hézag, felületek, NURBS, simítás, hajóvonal, zebra, mérnök, generátor, generált test, vázlat fényképből, léptékezés nyomtatáshoz, szétvágás nyomtatáshoz, zsugorodás, elhelyezett táblák, G-kód, rajz, furatok méretezése, asszisztens, MCP, nyelvek, eszköztársorok
from: 62e4dce2
---

Ez változott a PartCraft 0.8 és 0.8.1 verzióban a 0.7-hez képest. A szimuláció szerkesztés közben válaszol, és megmondja, mi törik el először, az összeállításokhoz mozgásvizsgálatok készülnek, az új munkaterületeken pedig szabad formájú felületek és fizikából méretezett alkatrészek hozhatók létre. A 0.8.1 egy kisebb javítókiadás.

## Új

### Szimuláció

- **Frissítés szerkesztés közben.** Jelölje be a {{ui:Frissítés szerkesztés közben}} lehetőséget a Megoldás blokkban, és a válaszok követik a módosításokat. Ha megváltoztat egy méretet, egy terhelést vagy az anyagot, azonnal megjelenik egy gyors válasz, amelyet négyszer nagyobb elemekkel számítottak; ha körülbelül egy másodpercig nem módosít, a vizsgálat saját, finomított válasza váltja fel. Az eredmények jelzik, hogy melyiket látja. Egy acél konzolon a gyors válasz az elhajlásnál 1%-on belül, a feszültségnél körülbelül 4%-on belül volt a finomított eredményhez képest. Lásd: [Feszültség és elhajlás ellenőrzése](topic:simulation#update-while-you-edit-live).
- **Mi törik el először.** Statikus vagy kihajlási vizsgálatnál a **Töréspróba** blokkban a {{ui:Mi törik el először?}} lehetőség a terheléseket addig skálázza, amíg az alkatrész meg nem adja magát. A legrosszabbtól a legjobbig listázza a terhelési tényezőt a első folyásig (piros jelöléssel ott, ahol a feszültség csúcsosodik), és a terhelési tényezőt a kihajlásig. Az 1 alatti tényező azt jelenti, hogy az alkatrész a megadott terhelésnél már megadja magát, és a Problémák hibát jelez. A tényezők lineáris vizsgálatból származnak, ezért pontosságuk is csak ennyi. Lásd: [Feszültség és elhajlás ellenőrzése](topic:simulation#find-out-what-breaks-first-break-it).
- **Folyás és érintkezés.** Két újabb vizsgálattípus: egy nemlineáris, amelyben az anyag a folyási feszültségig az egyenes szakaszát követi, utána pedig laposabb meredekséget, a képlékeny alakváltozás ábrázolásával; és egy érintkezési vizsgálat, amelyben különálló testek egymásra nyomnak (súrlódásmentesen), vagy tapadnak (kötötten). A terhelési lépés, amely nem áll be, vagy a darabok, amelyek túlságosan áthatolnak egymásba, a Problémák panelen jelennek meg. A súrlódás, a nagy csúszás, a nagy elfordulás, a nagy elhajlás és a fáradás számítása nincs kész. Lásd: [Feszültség és elhajlás ellenőrzése](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Bemeneti fájlok a CalculiX-hez.** Az {{ui:Exportálás}} › {{ui:CalculiX-bemenet (.inp)}} a vizsgálatot a CalculiX programhoz menti; ez egy külön program, amelyet maga kell telepíteni és futtatni. Az {{ui:Exportálás}} › {{ui:CalculiX-eredmények (.frd)}} visszaolvassa az eredményfájlt ugyanarra a hálóra. A PartCraft soha nem indítja el ezt a programot, és jelzi, ha az alkatrész a bemenet mentése óta változott.

### Összeállítások

- **Mozgásvizsgálatok.** Az {{ui:Összeállítás}} › {{ui:Mozgás}} egy kapcsolat értékét adott idő alatt hajtja (állandó sebesség, lágyított, szinusz vagy ki és vissza), minden lépésben elhelyezi az összeállítást a kapcsolataival és zárt láncaival, és jelenti, mi ütközik, illetve milyen közel kerülnek egymáshoz az alkatrészek. Az {{ui:Pont hozzáadása}} ábrázolja a pont helyzetét, sebességét és gyorsulását, a kapcsolat értékét és a hézagot az idő függvényében; a {{ui:CSV mentése}} és az {{ui:Ábra mentése}} ezeket kiírja. A {{ui:Futtatás}} után a futtatássáv lépésenkénti léptetője bármelyik lépésre mozgatja az összeállítást. A vizsgálat beállításai az összeállítási fájlba mentődnek. A sebesség és a gyorsulás a rögzített helyzetekből számítódik, ezért ha egy éles csúcs alacsonynak látszik, használjon több lépést. Lásd: [Összeállítás ellenőrzése ütközésre és mozgásra](topic:check-assembly#a-motion-study).

### Felületek és fizikából készült alkatrészek

- **A Felületek munkaterület.** A {{ui:Munkaterület}} mezőben válassza a {{ui:Felületek}} lehetőséget a NURBS-görbékhez és -felületekhez az alkatrész mellett: {{ui:Görbe}}, {{ui:Áthúzás}}, {{ui:Végigvezetés}}, {{ui:Illesztés}} és {{ui:Zebra}}, a folytonosságot (G0, G1 vagy G2) a pontos felületeken mérve. A kért értéknél rosszabb élek a Problémák között, illesztési javítással jelennek meg. A {{ui:Simítás}} a hajóvonalakat méri inflexiók és görbületugrások szempontjából, és a nem sima részeket a megadott tűrésen belül újraépíti. A felületek az alkatrészfájlba mentődnek, és nem változtatják meg az alkatrész jellemzőit. Lásd: [Szabad formájú felületek (NURBS)](topic:nurbs-surfaces).
- **A Mérnök munkaterület.** A munkaterület-váltóban válassza a {{ui:Mérnök}} lehetőséget, válasszon egy generátort, majd nyomja meg a {{ui:Új}} gombot: egy szkript a feladatból méretezi az alkatrészt (hőátvitel, áramlások, nyomás, anyag, nyomtatási eljárás) tankönyvi képletekkel, megépíti, majd visszaadja a felhasznált számokat a forrásukkal, a gyártási ellenőrzéseit és az elemzőeszközök számára készült fájlokat. Ugyanazok a bemenetek bármelyik számítógépen ugyanazt az alkatrészt adják. A generátor az alkatrészben marad, és alkatrész megnyitásakor soha nem fut le szkript. Lásd: [Alkatrészek a fizikából: generátorok](topic:engineer-generators) és [Generátor írása](topic:write-a-generator).

### Vázlatok, rajzok és gyártás

- **Vázlat fényképből.** A {{ui:Jellemzők}} › {{ui:Továbbiak}} › {{ui:Vázlat fényképből…}} parancs egy lapos alkatrész képét (körvonal és furatok) egyszínű háttéren, vagy egy tollrajzot vonalakra, ívekre és körökre követ le. Adjon meg egy hosszúságot, ellenőrizze az előnézetet, és készítse el a vázlatot. Lásd: [Vázlatkészítés alapjai](topic:sketch-basics#a-sketch-from-a-photo).
- **Léptékezés és szétvágás nyomtatáshoz.** Az {{ui:Exportálás}} › {{ui:Léptékezés nyomtatáshoz (STL vagy 3MF)…}} tengelyenként léptékez úgy, hogy az alkatrész nem változik, például zsugorodási ráhagyással. Az {{ui:Exportálás}} › {{ui:Szétvágás nyomtatáshoz (darabok zip-je)…}} a nyomtatóágyhoz túl nagy alkatrészt számozott darabokra vág, amelyek csapokkal, ékekkel, fecskefarkakkal, csapfuratokkal vagy mágneses zsebekkel illeszkednek. Lásd: [Nyomtatás 3D-ben](topic:print-3d).
- **Elhelyezett táblák G-kódba.** Az {{ui:Exportálás}} › {{ui:Elhelyezett táblák G-kódba}} beolvas egy elhelyezett DXF-fájlt, és táblánként egy programot készít a kiválasztott utófeldolgozón keresztül: előbb a furatokat és a kivágásokat, utána a körvonalakat. Nem tervezi meg a behúzásokat, a vágási sorrendet vagy a közös éleket. Lásd: [Lapos alkatrészek elhelyezése táblákon](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rajzok, amelyek többet maguk csinálnak.** A {{ui:Rajzlap}} › {{ui:Automatikus}} a legkisebb A-méretű lapot választja, amelyre a nézetek ráférnek, a legnagyobb szabványos méretarányban, legfeljebb 1:1-ig. Az {{ui:A furatok méretezése}} középjelet tesz minden furatra, méretenként egy kiemelést, és a helyzeteket a nézet bal alsó sarkától adja meg. Lásd: [Rajz készítése](topic:drawing-pdf).

### Minden alkalmazásban

- **Nyelvek.** Az alkalmazások 54 nyelven érhetők el. Az angolon kívüliek gépi piszkozatok, amíg anyanyelvi beszélő el nem olvassa őket.
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} lehetőséggel a Tördelés (mint korábban), 2 sor vagy 1 sor között választhat; a nem férő eszköztár vízszintesen görgethető. A PartCraft Jellemzők szalagján a leggyakrabban használt eszköz nagyban jelenik meg, a változatok pedig egy osztott gomb mögé kerülnek.
- **AI csatlakoztatása.** A Studio a központ, ahová a saját asszisztense csatlakoztatható mind a nyolc alkalmazáshoz, alkalmazásonként csak olvasási, javaslattételi vagy szerkesztési jogosultsággal. A csatlakoztatott asszisztens egy mondatból is méretezhet alkatrészt, például terhelésre szánt konzolt, megmutatja a számítását és minden ellenőrzését, és megépíti; jelzi, mit nem ellenőrzött (feszültségcsúcs, fáradás, műanyagok kúszása). Lásd: [PartCraft használata AI-asszisztenssel](topic:use-with-ai-assistants).

## A 0.8.1 verzióban javítva

- **Teljes képernyős kurzorberagadás.** Az egérrámutatás-választás most korlátozott. Az okot a legjobb becslésünk szerint azonosítottuk, a bejelentőtől nem erősítették meg.
- **Nyelv futás közben.** A Studio és a csomagolt kiadások futás közben is válthatnak nyelvet; korábban csak angolul működtek. Ezt még nem minden platformon teszteltük: jelezze nekünk, ha a nyelv nem változik.

## Még nincs ebben a verzióban

- Az AI csatlakoztatása még nincs kész: a Studion belüli egykattintásos csatlakozás, a böngészőben futó AI számára készült kiszolgált csatlakozó, a Studion belüli saját API-kulcs és a közzétett MCP-csomag nincs ígérve. A Studiónak nincs saját AI-ja.
- A Studio nincs kódaláírással ellátva: a Windows figyelmeztethet, a macOS pedig jobb gombos kattintást, majd Megnyitást kér. Lásd: [Hibaelhárítás](topic:troubleshooting).
- A tűrésláncok továbbra is egyirányúak: lásd: [Tűrésláncok](topic:tolerance-stackup).
- A többi itt olvasható: [Még nincs elkészítve](topic:not-built-yet).

A korábbi változások itt találhatók: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).
