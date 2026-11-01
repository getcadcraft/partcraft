---
title: A PartCraft képernyője
summary: Bemutató minden sávról és panelről: az eszköztárról és változásairól, az előzményekről, az alkatrész adatairól, a 3D nézetről, a tulajdonságpanelről és az állapotsorról.
keywords: képernyő, elrendezés, eszköztár, előzmények, jellemzőfa, tulajdonságok, panel, állapotsor, felület, bemutató, teljes képernyő
from: 7394fc49
---

A képernyőnek öt része van: felül az eszköztár, balra az előzmények, középen a 3D nézet, jobbra a tulajdonságpanel, alul pedig az állapotsor. Mindezek felett a CadCraft alkalmazássáv áll.

## Az alkalmazássáv

A legfelső vékony sáv a CadCraft webhelyhez tartozik, nem magához a PartCrafthoz. Mutatja az alkalmazás nevét és azt, hol fut, egy verziómenüt, az **A(z) PartCraft névjegye** elemet, a képernyőmód-gombot és a Papír / Modell témakapcsolót.

- A **Papír** sötét vonalak világos lapon. A **Modell** világos vonalak sötét háttéren. A vázlat színei követik a témát.
- A {{ui:Beállítások}} (a fogaskerék, vagy {{key:Mod+,}}) tartalmaz egy {{ui:PartCraft}} lapot: melyik egérgomb forgatja a nézetet, egérgörgő vagy érintőpad, és a kényszerek vázolás közben. Lásd [A PartCraft beállításai](topic:settings).
- A képernyőmód-gomb, vagy a {{key:Ctrl+Shift+F}}, a normál, a teljes képernyő és az elrejtett sávos teljes képernyő között lép. Elrejtett sávoknál vigye a mutatót a felső szélre (vagy koppintson oda), hogy visszahozza őket. Az {{key:Esc}} visszatér a normál módba. Ez a billentyű Macen is {{key:Ctrl+Shift+F}}, nem ⌘.

## Az eszköztár

Az eszköztár csoportosított. Attól függően változik, mit csinál, hogy elférjen egy sorban:

| Csoport | Gombok | Mikor látható |
|---|---|---|
| Fájl | {{ui:Új}}, {{ui:Megnyitás}}, {{ui:Mentés}}, {{ui:Exportálás}} (menü) | Mindig |
| Vázlat | {{ui:Vázlat}} | Ha nincs megnyitott vázlat |
| Vázlat | {{ui:Kilépés}}, {{ui:Vonal}}, {{ui:Téglalap}}, {{ui:Kör}}, {{ui:Ív}}, {{ui:Pont}}, {{ui:Tengelyvonal}}, {{ui:Lekerekítés}}, {{ui:Méretezés}}, {{ui:Segédgeometria}} | Csak megnyitott vázlatnál |
| Jellemzők | {{ui:Kihúzás}}, {{ui:Kivágás}}, {{ui:Forgatás}}, {{ui:Furat}}, {{ui:Lineáris}}, {{ui:Körkörös}}, {{ui:Tükrözés}}, {{ui:Lekerekítés}}, {{ui:Letörés}}, {{ui:Héjazás}}, {{ui:Továbbiak}} (menü: forgatásos kivágás, sík, tengely, pont, végigvezetés, áthúzás, dőlésszög) | Az alkatrészen, nem megnyitott vázlat vagy rajz közben. A lekerekítés és a letörés két sík lap közötti egyenes éleken működik; a héjazás és a dőlésszög sík lapokon. A végigvezetés és az áthúzás ebben a kiadásban még nincs elkészítve (pontos kernel kell hozzájuk); a kattintás ezt közli |
| Jellemzők | {{ui:Kész}} | Csak amíg éleket vagy lapokat választ lekerekítéshez, letöréshez, héjazáshoz vagy dőlésszöghöz |
| Rajz | {{ui:Rajz}} | Az alkatrészen (akkor használható, ha az alkatrésznek van teste) |
| Rajz | {{ui:Datum}}, {{ui:Keret}}, {{ui:Felületkezelés}}, {{ui:Részlet}}, {{ui:PDF}}, {{ui:Vissza}} | Csak a rajzlapon |
| Összeállítás | {{ui:Összeállítás}} | Az alkatrészen (akkor használható, ha az alkatrésznek van teste) |
| Összeállítás | {{ui:Másolat hozzáadása}}, {{ui:Beszúrás}}, {{ui:Kapcsolat}}, {{ui:Ütközés}}, {{ui:Alkatrész szerkesztése}}, {{ui:Bezárás}} | Csak összeállításban |
| Összeállítás | {{ui:Vissza}} | Amíg egy alkatrészt szerkeszt az összeállításból |
| Szerkesztés | {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Továbbiak}} (menü: kivágás, másolás, beillesztés, beillesztés helyben, kettőzés, törlés, összes kijelölése, kijelölés megszüntetése) | Mindig; minden elem azon a vázlaton, előzményen vagy összeállításon működik, amelyben éppen van |
| Nézet | {{ui:Illesztés}}, {{ui:Merőleges nézet}}, {{ui:Nézetek}} (menü: mérés, tömegjellemzők, metszet, dőlésszög, zebra, görbület, {{ui:Alapsíkok}}, majd izometrikus, elölnézet, hátulnézet, felülnézet, alulnézet, jobb oldal, bal oldal) | Mindig |

Tartsa a mutatót egy gomb fölött, hogy lássa, mit csinál, és mi a billentyűje. A szürkített gomb most nem használható: például a jellemzőgombok megnyitott vázlatnál, vagy a {{ui:Kapcsolat}}, amíg az összeállításban nincs két alkatrész.

A Szerkesztés csoport {{ui:Továbbiak}} menüje minden szerkesztési műveletet a billentyűjével együtt felsorol. Hogy a másolás és beillesztés mire hat, az attól függ, hol áll; lásd [Másolás, beillesztés és kettőzés](topic:copy-paste). A szürkített elem súgószövege megmondja, miért nem használható most.

Az {{ui:Exportálás}} menüben van: {{ui:STL, 3D-nyomtatáshoz}}, {{ui:3MF, 3D-nyomtatáshoz}}, {{ui:STEP AP242 (pontos test)}}, {{ui:STEP AP214 (pontos test)}}, {{ui:STEP (lapokra bontott, hálókernel)}}, {{ui:STEP AP214 (lapokra bontott, hálókernel)}}, {{ui:DXF a vázlatról vagy sík lapról}} és {{ui:Rajz (PDF): nézetek, metszet, részlet, GD&T}}. A két pontos STEP-elem szürkített: ebben a kiadásban még nincsenek elkészítve, ezért használja a {{ui:STEP (lapokra bontott, hálókernel)}} elemet.

## Az előzmények (balra)

A bal oldali panel az alkatrész jellemzőelőzménye, az a lista, amelyből a PartCraft fentről lefelé újraépíti.

- A címsor az alkatrész neve („Part1”, amíg át nem nevezi).
- Elsőként az **Elülső sík**, a **Felső sík** és a **Jobb oldali sík** áll. Kattintson egyre a kijelöléséhez; kiemelődik a nézetben.
- Alattuk a jellemzői állnak a készítésük sorrendjében. Az a vázlat, amelyet egy jellemző használ, behúzva áll a jellemző alatt.
- A sor jobb végén lévő jelző mondja meg az állapotát:

| Jelző | Jelentés |
|---|---|
| (nincs) | Felépítve, és a vázlat teljesen meghatározott |
| − | Alulhatározott vázlat (még mozoghat) |
| + | Túlhatározott vázlat |
| ⚠ | Felépítve, figyelmeztetéssel (tartsa fölötte a mutatót az elolvasásához) |
| ⚠ hiba | A jellemző meghiúsult. Tartsa fölötte a mutatót az okért, vagy kattintson rá |
| ⚠ nincs felépítve | A jellemzőnek szüksége van egy másikra, amely meghiúsult vagy ki van kapcsolva |
| ki | Letiltva |

- Minden jellemző a neve után mutatja a fő számát, például „25 mm” egy kihúzásnál vagy „Ø6.6 thru” egy furatnál. Kattintson duplán a számra, vagy nyomja meg az {{key:F2}} billentyűt a soron, hogy helyben módosítsa. Lásd [Méretek módosítása](topic:change-sizes).
- Kattintson egy jellemzőre, hogy jobbra szerkessze. Kattintson duplán egy vázlatra a megnyitásához.
- Visszagörgetéskor egy **Visszagörgetősáv · előregörgetés** sor kerül a listába. Az alatta lévő jellemzők szürkék, és nincsenek felépítve.
- Fókuszált soron a {{key:Up}} és a {{key:Down}} sorok között lép, az {{key:Alt+Up}} / {{key:Alt+Down}} pedig magát a jellemzőt mozgatja, ahol az előzmények engedik.

Összeállításban ugyanez a panel az **Alkatrészeket** (az elsőt „rögzített”-ként jelölve) és a **Kapcsolatokat** listázza.

### Az alkatrész adatai

Az előzmények alatt az **Alkatrész** doboz felsorolja a test **Térfogat**át, **Felszín**ét, **Méret (X × Y × Z)** értékét, az **Átmenő furatokat**, a **Testeket**, a **Háromszögeket**, a **Jellemzők** számát és azt, hányan **Hibásak**. A térfogatok és felszínek a hálókernel által épített lapokra bontott testre vonatkoznak, kerek alakzatoknál kicsit a valódi érték alatt (lásd [Jellemzők és beállításaik](topic:features#curves-resolution)).

Összeállításban a doboz címsora **Összeállítás**: Alkatrészek, Példányok, Kapcsolatok, Nem összekötött és Interferencia.

## A 3D nézet (középen)

A nézet a testet, az alapsíkokat és a még jellemző által nem használt vázlatot mutatja.

Az alapsíkok teljes egészében látszanak, amíg az alkatrész üres. Ha már van teste, háttérbe lépnek: halványan rajzolódnak, hogy ne takarják az alkatrészt, és a kattintások átmennek rajtuk az alkatrészre. Teljes egészében visszatérnek, amíg a vázlat helyét választja ({{ui:Vázlat}} kijelölés nélkül), és amikor kijelöl egyet az előzményekben. A {{ui:Nézetek}} › {{ui:Alapsíkok}} teljesen elrejti őket; a vázlat helyének kiválasztása közben még látszanak. A PartCraft megjegyzi ezt a választást.

- Húzással forgathatja az alkatrészt, jobb vagy középső húzással eltolhatja, a görgővel a mutatónál nagyíthat. A részletek a [Billentyűk és egér](topic:keyboard) témakörben vannak.
- Tartsa a mutatót egy lap, él vagy sík fölött, hogy lássa kivilágosodni. Kattintson a kijelöléséhez. A lapok egészben emelődnek ki, az élek egészben rajzolódnak és választhatók. A {{key:Shift}}+kattintás több élt vagy lapot gyűjt. Megjelölve maradnak.
- A jobb felső sarokban lévő nézetkocka az alkatrésszel együtt fordul: kattintson egy lapra, élre vagy sarokra, hogy onnan nézzen, húzza a forgatáshoz, a ház gomb visszatér az elejére. Lásd [A nézetkocka](topic:view-cube).
- A kijelölt kihúzás narancssárga nyilat mutat a végső lapján, a forgatás ívelt nyilat a fordulata végén: húzza a mélység vagy a szög módosításához, vagy írjon a mellette lévő mezőbe. Lásd [Méretek módosítása](topic:change-sizes#drag-it-in-the-view).
- Ha az alkatrész üres, egy **Alkatrész indítása** című doboz felsorolja az első lépéseket.
- Húzzon egy `.partcraft.json` vagy `.partcraft-asm.json` fájlt a nézet bármelyik pontjára a megnyitásához. Egy oda húzott `.step`, `.stp`, `.stl`, `.obj`, `.3mf` vagy `.3dm` fájl szilárd testként nyílik meg.

### Élek vagy lapok választása közben

A {{ui:Lekerekítés}}, a {{ui:Letörés}} vagy a {{ui:Héjazás}} után kijelölés nélkül (vagy az {{ui:Élek kijelölése}} egy ilyen jellemzőn) az alkatrész úgy látszik, ahogy a jellemző előtt volt. Kattintson élekre vagy lapokra a hozzáadásukhoz vagy elvetésükhöz; a jelölésük mutatja, mi van benne. A {{ui:Kész}} vagy az {{key:Esc}} befejezi. Lásd [Lekerekítés, letörés és kiüregelés](topic:fillet-chamfer-shell).

### A rajzlapon

A {{ui:Rajz}} a 3D nézetet az A3-as rajzlapra cseréli. A görgő nagyít, a jobb vagy középső húzás eltol, az {{key:F}} illeszt. Lásd [Rajz készítése](topic:drawing-pdf).

### Megnyitott vázlat közben

A nézet egyenesen a vázlatsíkra fordul, és felül megjelenik egy 2D vázlatréteg. Az alkatrész csak a vázlat előtt készült jellemzőket mutatja. A bal felső sarokban egy sáv mutatja a vázlat állapotjelvényét („Teljesen meghatározott”, „Alulhatározott · 3 szabadságfok” és így tovább) és a nevét, például „Sketch2 az Extrude1 egy lapján”.

## A tulajdonságpanel (jobbra)

A jobb oldali panel azt mutatja, ami ki van jelölve, és a címsora megnevezi:

- **Alkatrész** (nincs kijelölve semmi): az alkatrész **Neve** és a **Görbék** beállítás.
- Egy sík: egy {{ui:Vázlat rajta}} gomb.
- Egy **Lap**: milyen fajta (sík lap, henger a sugarával és tengelyével, kúp, gömb vagy tórusz), a területe, melyik jellemző készítette, sík lapnál pedig a {{ui:Vázlat ezen a lapon}}, a {{ui:Merőleges nézet}}, a {{ui:Lap exportálása DXF-ként}}, a {{ui:Kihúzás belőle}}, a {{ui:Bevágás}} és a {{ui:Furat itt}} (lásd [Teljes lap húzása vagy nyomása](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Egy **Él**: a fajtája (egyenes, kör a középpontjával és sugarával, vagy görbe), a hossza és a két lap, amely között fekszik (például „Extrude1 végső lapja és Extrude1 oldala”), {{ui:Lekerekítés}} és {{ui:Letörés}} gombokkal.
- A {{key:Shift}} lenyomásával kijelölt több él vagy lap: hány van, az éleknél {{ui:Lekerekítés}} és {{ui:Letörés}} gombbal, valamint {{ui:Törlés}}.
- Egy jellemző: a számai és beállításai, a vázlatának méretei, majd {{ui:Letiltás}}, {{ui:Visszagörgetés idáig}}, {{ui:Mozgatás felfelé}}, {{ui:Mozgatás lefelé}}, {{ui:Törlés}} és a **Neve**.
- Egy megnyitott vázlat: az állapota, a kijelöléshez hozzáadható kényszerek, a kényszerek és méretek listája, a **Hozzáadás koordinátákkal**, valamint a {{ui:Kilépés a vázlatból}}, az {{ui:Illesztés}} és az {{ui:Exportálás DXF-ként}}.
- A rajzlapon: a metszet- és részletbeállítások, vagy a kijelölt GD&T-jel.
- Összeállításban: az összeállítás, a kijelölt alkatrész vagy a kijelölt kapcsolat.

Minden számmező az {{key:Enter}} vagy a {{key:Tab}} billentyű megnyomásakor, vagy a mezőn kívüli kattintáskor lép érvénybe. Az alkatrész azonnal újraépül; nincs OK gomb. A visszalépéshez használja a {{key:Mod+Z}} billentyűt.

## Az állapotsor (alul)

- Balra a mutató koordinátái a vázlatban (csak megnyitott vázlatnál).
- Középen az üzenetek: mit tegyen következőnek, és miért utasítottak el valamit. Olvassa el, ha úgy tűnik, nem történik semmi.
- Jobbra közel a kernel jelvénye: ebben a kiadásban mindig „Hálókernel”. Tartsa fölötte a mutatót, hogy lássa, mit jelent. Lásd [A hálókernel](topic:solid-kernels).
- Jobb szélen egy jelvény: „Újraépítés…”, amíg az alkatrész újraépül, majd „Újraépítve … ms alatt”, ha minden rendben, vagy „1 jellemző hibás”. Összeállításban ezt írja: „Elhelyezve … ms alatt”, vagy megszámolja a kapcsolatproblémákat.

Lásd még: [Kézikönyv indítása az Illusztrálásban](topic:illustrate): az a munkaterület, amely az alkatrészeiből és összeállításaiból összeállítási kézikönyveket készít.

## Keskeny képernyőn

760 képpont szélességig, például telefonon, a nézet kapja a képernyőt: az eszköztár egyetlen, oldalra görgethető sor, a panelek pedig lapokként nyílnak az alsó sávból. Az {{ui:Eszközök}} elrejti az eszköztárat, a {{ui:Mozgatás}} pedig alulra teszi. Lásd [Érintőpad, érintés és kis képernyők](topic:trackpad-and-touch).
