---
title: A PartCraft képernyője
summary: Körséta minden sáv és panel felett: az eszköztár és változásai, az előzmények, az alkatrész adatai, a 3D-nézet, a tulajdonságpanel és az állapotsor.
keywords: képernyő, elrendezés, eszköztár, előzmények, jellemzőfa, tulajdonságok, panel, állapotsor, felület, ui, körséta, teljes képernyő
from: 5b5bb843
---

A képernyő öt részből áll: felül az eszköztár, balra az előzmények, középen a 3D-nézet, jobbra a tulajdonságpanel, alul az állapotsor. Mindezek fölött ül a CadCraft alkalmazássáv.

## Az alkalmazássáv

A legfelső vékony sáv a CadCraft webhelyhez tartozik, nem magához a PartCraft-hoz. Megmutatja az alkalmazás nevét és futási helyét, egy verziómenüt, a **A PartCraftról** gombot, a képernyőmód gombját és a Papír / Modell témakapcsolót.

- A **Papír** sötét vonal világos lapon. A **Modell** világos vonal sötét háttéren. A vázlatok színei a témát követik.
- A {{ui:Settings}} (a fogaskerék vagy {{key:Mod+,}}) rendelkezik egy {{ui:PartCraft}} lappal: melyik egérgomb forgatja a nézetet, egérgörgő vagy érintőpad, és a kapcsolatok vázlatkészítés közben. Lásd: [A PartCraft beállításai](topic:settings).
- A képernyőmód gomb vagy a {{key:Ctrl+Shift+F}} normál, teljes képernyő és a sávok nélküli teljes képernyő között vált. Ha a sávok el vannak rejtve, vigye a mutatót a felső szélre (vagy érintse meg), hogy visszahozza őket. Az {{key:Esc}} visszaállítja a normál nézetet. Ez a billentyű Macen is {{key:Ctrl+Shift+F}}, nem ⌘.

## Az eszköztár

Az eszköztár csoportokba van rendezve. Attól függően változik, mit csinál, hogy egy sorba férjen:

| Csoport | Gombok | Megjelenik |
|---|---|---|
| Fájl | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Export}} (menü) | Mindig |
| Vázlat | {{ui:Sketch}} | Ha nincs vázlat megnyitva |
| Vázlat | {{ui:Exit}}, {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Csak vázlat megnyitása közben |
| Jellemzők | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:More}} (menü: forgatott kivágás, sík, tengely, pont, végigvezetés, áthúzás, dőlés) | Az alkatrészen, nem vázlat vagy a rajz megnyitása közben. A lekerekítés és a letörés két sík lap közötti egyenes éleken működik; a héjazás és a dőlés síklapokon. A végigvezetés és az áthúzás ebben a verzióban még nincs elkészítve (pontos kernel kellene hozzájuk); kattintásra ezt jelzi |
| Jellemzők | {{ui:Done}} | Csak akkor, ha éleket vagy lapokat választ lekerekítéshez, letöréshez, héjazáshoz vagy dőléshez |
| Rajz | {{ui:Drawing}} | Az alkatrészen (miután az alkatrésznek van teste, használható) |
| Rajz | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Back}} | Csak a rajzlapon |
| Összeállítás | {{ui:Assembly}} | Az alkatrészen (miután az alkatrésznek van teste, használható) |
| Összeállítás | {{ui:Add copy}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:Edit part}}, {{ui:Close}} | Csak összeállításban |
| Összeállítás | {{ui:Back}} | Összeállításból szerkesztett alkatrész szerkesztése közben |
| Szerkesztés | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} (menü: Kivágás, Másolás, Beillesztés, Beillesztés helyben, Kettőzés, Törlés, Összes kijelölése, Kijelölés megszüntetése) | Mindig; minden elem az éppen használt vázlaton, előzményen vagy összeállításon dolgozik |
| Nézet | {{ui:Fit}}, {{ui:Normal to}}, {{ui:Views}} (menü: Mérés, Tömegtulajdonságok, Metszet, Dőlés, Zebra, Görbület, {{ui:Base planes}}, majd Izometrikus, Elöl, Vissza, Felül, Alul, Jobbra, Balra) | Mindig |

Vigye a mutatót egy gomb fölé, hogy lássa, mit csinál és mi a billentyűje. Egy szürkített gomb jelenleg nem használható: például a jellemzőgombok vázlat megnyitása közben, vagy a {{ui:Joint}} addig, amíg az összeállításnak nincs két alkatrésze.

A Szerkesztés csoport {{ui:More}} menüje minden szerkesztési műveletet felsorol a billentyűjével. Hogy a másolás és beillesztés mire vonatkozik, attól függ, hol tart; lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste). Egy szürkített elem súgócímkéje megmondja, miért nem használható most.

Az {{ui:Export}} menü a következőket tartalmazza: {{ui:STL, for 3D printing}}, {{ui:3MF, for 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF of the sketch or flat face}} és {{ui:Drawing (PDF): views, section, detail, GD&T}}. A pontos STEP-elemek a kerek lapokat valódi felületükön írják; a lapokra bontott elemek síklapokként.

## Az előzmények (bal oldal)

A bal oldali panel az alkatrész jellemzőelőzménye, a lista, amelyet a PartCraft felülről lefelé újraépít.

- A fejléc az alkatrész neve („Part1”, amíg át nem nevezi).
- Először a **Elülső sík**, a **Felső sík** és a **Jobb oldali sík** jön. Kattintson egyre a kijelöléséhez; a nézetben kiemelkedik.
- Alattuk vannak a jellemzői abban a sorrendben, ahogy készültek. Az a vázlat, amelyet egy jellemző használ, az adott jellemző alá van behúzva.
- A sor jobb végén lévő jelző mutatja az állapotát:

| Jelző | Jelentés |
|---|---|
| (nincs) | Elkészült, és a vázlat teljesen meghatározott |
| − | Nem teljesen meghatározott vázlat (még mozoghat) |
| + | Túlhatározott vázlat |
| ⚠ | Elkészült, figyelmeztetéssel (a figyelmeztetés olvasásához vigye rá a mutatót) |
| ⚠ hiba | A jellemző hibás. Vigye rá a mutatót az okért, vagy kattintson rá |
| ⚠ nincs elkészítve | A jellemzőhöz egy másik kell, amely hibás vagy ki van kapcsolva |
| ki | Letiltva |

- Minden jellemző a neve után mutatja a fő számát, például „25 mm” a kihúzásnál vagy „Ø6.6 thru” egy furatnál. Kattintson duplán a számra, vagy nyomja meg az {{key:F2}} billentyűt a soron, hogy ott helyben módosítsa. Lásd: [Méretek módosítása](topic:change-sizes).
- Kattintson egy jellemzőre, hogy a jobb oldalon szerkessze. Kattintson duplán egy vázlatra a megnyitásához.
- Visszagörgetéskor a listában egy **Visszagörgetési sáv · előregörgetés** sor jelenik meg. Az alatta lévő jellemzők szürkék és nincsenek elkészítve.
- Ha egy sor fókuszban van, az {{key:Up}} és {{key:Down}} billentyűkkel lehet sorok között lépni, a {{key:Alt+Up}} / {{key:Alt+Down}} billentyűkkel pedig maga a jellemző mozgatható, ahol az előzmény engedi.

Összeállításban ugyanez a panel helyette az **Alkatrészek** (az első „rögzítve” jelöléssel) és a **Kapcsolatok** listáját mutatja.

### Az alkatrész adatai

Az előzmények alatt az **Alkatrész** doboz felsorolja a test **Térfogatát**, **Felületét**, **Méretét (X × Y × Z)**, az **Átmenő furatokat**, a **Testeket**, a **Háromszögeket**, a **Jellemzők** számát és azt, hány van **Hibásan**. A térfogatok és felületek a hálókernel által épített lapokra bontott testé, kerek alakoknál valamivel a valódi érték alatt (lásd: [Jellemzők és beállításaik](topic:features#curves-resolution)).

Összeállításban a doboz fejléce **Összeállítás**: Alkatrészek, Példányok, Kapcsolatok, Nincs összekötve és Interferencia.

## A 3D-nézet (középen)

A nézet mutatja a testet, az alapsíkokat és minden olyan vázlatot, amelyet még nem használ jellemző.

Az alapsíkok teljesen láthatók, amíg az alkatrész üres. Amint van teste, hátrébb lépnek: halványan rajzolódnak, hogy ne takarják az alkatrészt, a kattintások pedig rajtuk át az alkatrészre érnek. Teljesen újra megjelennek, amíg kiválasztja, hol vázlatozzon ({{ui:Sketch}}, semmi kijelölése nélkül), és amikor az előzményekben kiválaszt egyet. A {{ui:Views}} › {{ui:Base planes}} teljesen elrejti őket; vázlat helyének kiválasztása közben ettől még látszanak. A PartCraft megjegyzi ezt a választást.

- Húzással forgassa az alkatrészt, jobb gombbal vagy középső gombbal húzva mozgassa a képet, a görgővel a mutató helyén nagyítson. Részletek: [Billentyűk és egér](topic:keyboard).
- Vigye a mutatót egy lap, él vagy sík fölé, hogy kigyulladjon. Kattintással válassza ki. A lapok egészben emelkednek ki, az élek egészben rajzolódnak és választódnak ki. A {{key:Shift}}+kattintás több élt vagy lapot gyűjt össze. Megjelölve maradnak.
- A jobb felső sarokban lévő nézetkocka az alkatrésszel együtt fordul: kattintson egy lapra, élre vagy sarokra, hogy onnan nézzen, húzza a forgatáshoz, a házgomb visszaviszi a kezdőnézetbe. Lásd: [A nézetkocka](topic:view-cube).
- Egy kijelölt kihúzás narancssárga nyilat mutat a végső lapján, egy forgatás pedig ívelt nyilat a fordulatának végén: húzza a mélység vagy a szög módosításához, vagy írjon be egy értéket a mellette lévő mezőbe. Lásd: [Méretek módosítása](topic:change-sizes#drag-it-in-the-view).
- Ha az alkatrész üres, a **Alkatrész indítása** fejlécű doboz felsorolja az első lépéseket.
- Húzzon egy `.partcraft.json` vagy `.partcraft-asm.json` fájlt bárhova a nézetre a megnyitásához. Az oda húzott `.step`, `.stp`, `.stl`, `.obj`, `.3mf` vagy `.3dm` fájl szilárd testként nyílik meg.

### Élek vagy lapok kiválasztása közben

A {{ui:Fillet}}, {{ui:Chamfer}} vagy {{ui:Shell}} gomb után, amikor még nincs kiválasztva semmi (vagy egy ilyen jellemzőn a {{ui:Pick edges}}), az alkatrész úgy látszik, mint a jellemző előtt. Kattintson élekre vagy lapokra a hozzáadáshoz vagy eltávolításhoz; a jelölésük mutatja, mi van benne. A {{ui:Done}} gomb vagy az {{key:Esc}} befejezi. Lásd: [Lekerekítés, letörés és üreges kialakítás](topic:fillet-chamfer-shell).

### A rajzlapon

A {{ui:Drawing}} az A3-as rajzlapra cseréli a 3D-nézetet. A görgő nagyít, jobb vagy közép gombbal húzva mozgat, az {{key:F}} illeszt. Lásd: [Rajz készítése](topic:drawing-pdf).

### Vázlat megnyitása közben

A nézet egyenesen a vázlatsíkra fordul, és egy 2D-s vázlatréteg jelenik meg felül. Az alkatrész csak az ezen vázlat előtt készült jellemzőket mutatja. A bal felső sávban látszik a vázlat állapotcímkéje („Teljesen meghatározott”, „Nem teljesen meghatározott · 3 szabadságfok” stb.) és a neve, például „Sketch2, az Extrude1 egyik lapján”.

## A tulajdonságpanel (jobb oldal)

A jobb oldali panel a kijelölt elemet mutatja, a fejléce pedig megnevezi:

- **Alkatrész** (nincs kijelölés): az alkatrész **Neve** és a **Görbék** beállítása.
- Egy sík: egy {{ui:Sketch on it}} gomb.
- Egy **lap**: milyen típusú (síklap, henger a sugarával és tengelyével, kúp, gömb vagy tórusz), a területe, melyik jellemző hozta létre, és síklap esetén ezek a gombok: {{ui:Sketch on this face}}, {{ui:Normal to}}, {{ui:Export face as DXF}}, {{ui:Extrude from it}}, {{ui:Cut into it}} és {{ui:Hole here}} (lásd: [Egy teljes lap húzása vagy tolása](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Egy **él**: típusa (egyenes, kör a középpontjával és sugarával, vagy görbe), hossza és a két lap, amely között fekszik (például „az Extrude1 végső lapja és az Extrude1 oldala”), valamint a {{ui:Fillet}} és {{ui:Chamfer}} gombok.
- Több él vagy lap kijelölése {{key:Shift}}-tel: hányan, élek esetén a {{ui:Fillet}} és {{ui:Chamfer}} gombokkal, valamint a {{ui:Clear}} gombbal.
- Egy jellemző: a számai és beállításai, a vázlatának méretei, majd a {{ui:Suppress}}, {{ui:Roll back to here}}, {{ui:Move up}}, {{ui:Move down}}, {{ui:Delete}} gombok és a **Neve**.
- Egy megnyitott vázlat: állapota, a kijelöléshez adható kapcsolatok, a kapcsolatok és méretek listája, a **Hozzáadás koordinátákkal**, valamint a {{ui:Exit sketch}}, {{ui:Fit}} és {{ui:Export as DXF}} gombok.
- A rajzlapon: a metszet- és részletbeállítások, vagy a kijelölt GD&T-jel.
- Összeállításban: az összeállítás, a kijelölt alkatrész vagy a kijelölt kapcsolat.

Minden számmező a {{key:Enter}} vagy a {{key:Tab}} lenyomásakor, vagy a mezőn kívüli kattintásra érvényesül. Az alkatrész azonnal újraépül; nincs OK gomb. A visszalépéshez használja a {{key:Mod+Z}} billentyűt.

## Az állapotsor (alul)

- Balra a mutató koordinátái a vázlatban (csak vázlat megnyitása közben).
- Középen az üzenetek: mit tegyen ezután, és miért lett valami elutasítva. Olvassa el, ha úgy tűnik, nem történik semmi.
- A jobb oldalhoz közel a kernelcímke: ebben a verzióban mindig „Hálókernel”. Vigye rá a mutatót, hogy megtudja, mit jelent. Lásd: [A hálókernel](topic:solid-kernels).
- Jobbra egy címke: „Újraépítés…”, amíg az alkatrész újraépül, majd „Újraépítve … ms alatt”, ha minden rendben van, vagy „1 jellemző hibás”. Összeállításban „Elhelyezve … ms alatt” áll, vagy megszámolja a kapcsolati hibákat.

Lásd még: [Kézikönyv indítása az Illusztrálás munkaterületen](topic:illustrate): az a munkaterület, amely az alkatrészeiből és összeállításaiból összeállítási kézikönyveket készít.

## Keskeny képernyőn

760 képpontig széles, például telefonon, a nézet megtartja a képernyőt: az eszköztár egy sor, amely oldalra görgethető, a panelek pedig lapokként nyílnak az alsó sávból. A {{ui:Tools}} elrejti az eszköztárat, a {{ui:Move}} alulra helyezi. Lásd: [Érintőpad, érintés és kis képernyők](topic:trackpad-and-touch).
