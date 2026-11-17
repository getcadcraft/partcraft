---
title: STL, OBJ vagy 3MF megnyitása szilárd testként
summary: Egy szkennerből, egy 3D-nyomtatási oldalról vagy más programból származó hálót szilárd testté alakít, amelyet vághat, amelyhez anyagot adhat és amelyre vázolhat; mit javít a PartCraft közben, és mit nem tud.
keywords: stl, obj, 3mf, háló, háló testté, háló átalakítása, szkennelés, vízzáró, javítás, lyukak, rések, mértékegységek, felfelé irány, importált test, sík lapok
from: 7b948471
---

A PartCraft az STL-, OBJ- és 3MF-hálókat **szilárd testként** nyitja meg. A test úgy működik, mint bármely más szilárd test: vághatja, hozzáadhat anyagot, fúrhat bele, mintázhatja, használhatja összeállításban vagy megmunkáláshoz, és vázolhat a sík lapjaira. Saját előzményei nincsenek: a háló csak háromszögekből áll, így a méretei nem változtathatók, csak anyagot adhat hozzá vagy vághat ki belőle.

## Háló megnyitása

1. Válassza a {{ui:Megnyitás}} lehetőséget, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt, és válassza ki a `.stl`, `.obj` vagy `.3mf` fájlt. Vagy húzza a 3D-nézetre.
2. A PartCraft beolvassa, amit biztonságosan javítani tud, és megmutatja, mit talált: hány háromszög és pont van, minden javítást, és hogy a háló most **zárt-e**.
3. Ellenőrizze a **Mértékegység a fájlban** és a **Felfelé a fájlban** beállítást. Az STL és az OBJ nem mondja meg a mértékegységét, ezért a milliméter a tipp; a 3MF-fájl megadja a sajátját. A **Méret itt** sor a test méretét mutatja a kiválasztott beállítással, így könnyen észrevehető, ha egy alkatrész 25,4-szer túl kicsinek érkezik (hüvelykben volt).
4. Ha a képernyőn lévő alkatrész üres, válassza a {{ui:Megnyitás testként}} lehetőséget. Ha már vannak jellemzői, válassza a **Használja a következőhöz** lehetőséget (hozzáadás az alkatrészhez, kivágás belőle, vagy csak az átfedés megtartása), majd a {{ui:Hozzáadás ehhez az alkatrészhez}} gombot, vagy a {{ui:Új alkatrész}} gombot, hogy a hálóval újrakezdje.

Egy **Imported1** jellemző jelenik meg az előzményekben. Az állapotsor például ezt írja ki: „bracket.stl szilárd test: 15200.512 mm³, 14 sík lap, amelyre vázolni lehet.”

## Mit javít a PartCraft

| Javítás | Mit jelent |
|---|---|
| Duplázott sarkok egyesítése | Az STL minden háromszöghöz megismétli minden sarkát; ezeket egyetlen pontba egyesíti |
| Terület nélküli háromszögek eltávolítása | Csíkok, amelyek sarkai egy egyenesen vannak |
| Duplázott háromszögek eltávolítása | Kétszer írt háromszög egyszer marad meg; két ellentétes irányba néző (belső fal) mindkettő eltávolításra kerül |
| Kis rések zárása | Majdnem találkozó élek egyesülnek (az alkatrész méretének ezredén belül) |
| Lyukak betöltése | Olyan nyílás, amelynek szegélye sík, bármekkora is, betöltődik; a torzulót csak akkor, ha kicsi |
| Háromszögek kifelé fordítása | A rosszul álló háromszögek a szomszédaikhoz igazodva fordulnak, és az egész felület kifelé néz |

## Ha a háló nem zárul

A szilárd testhez nyílásmentes felület kell. Ha a PartCraft nem tud bezárni egyet, a párbeszédpanel megmondja, hány nyílás és nyitott él maradt, és nincs hozzáadható test. Zárja le a nyílásokat abban a programban, amely a hálót készítette, vagy exportálja újra zárt (vízzáró) hálóként, és nyissa meg újra.

A PartCraft nem nyúl a nyíláshoz, ha a betöltése téves lehet: nagy, torzult lyuk, vagy két nyílás ugyanabban a síkban (hiányzó gyűrű alakú lap, ahol minden szegély betöltése elfedné a középső lyukat). Jelentésre kerül az is, ha egy él kettőnél több háromszöghöz tartozik: az ilyen felületnek nincs egyértelmű belseje.

## Vázlat a sík lapjaira

Sok háromszögből álló sík területek egy-egy **sík lappá** olvadnak össze, így rájuk lehet vázolni: kattintson a lapra, és válassza a {{ui:Vázlat ezen a lapon}} lehetőséget. A később vágott vagy hozzáadott lap lap marad. A kerek területek (furat, lekerekítés) háromszögek maradnak: nem választhatók lapként, a nézet a háromszögek közti szögből rajzolja meg a körvonalukat.

## Későbbi módosítás

Válassza ki az **Imported1**-et, hogy lássa, melyik fájlból jött, hány háromszöge van és mit javítottak rajta. A **Mértékegység a fájlban**, a **Felfelé a fájlban** és a **Használja a következőhöz** ott módosítható; minden változtatás egy visszavonási lépés.

## Hol tárolódik

A javított háló a `.partcraft.json` fájlon **belül** tárolódik, így a hálófájlra többé nincs szükség. A hálótestet tartalmazó alkatrészfájl 5-ös verziójú: egy régebbi PartCraft a verziója alapján visszautasítja. Egy 200 000 háromszögű háló körülbelül 1,2 MB-ot ad hozzá.

## Korlátok

- Legfeljebb 3 millió háromszög és 200 MB egy fájlban.
- A hálóból készült testet a hálómag építi fel. Ha a pontos mag be van kapcsolva (csak fejlesztőknek), ezt jelzi, és nem épül fel.
- Az OBJ-anyagok, a textúrakoordináták és a szabad formájú görbék kimaradnak; a 3MF-színek, anyagok és támasztóobjektumok kimaradnak (a párbeszédpanel megmondja, hány objektumot hagytak ki).
- A test olyan finom, mint a háló: egy durva STL durva kerek lapokat ad. Az ide fúrt furatok ugyanolyan kerekek, mint a saját jellemzői.
