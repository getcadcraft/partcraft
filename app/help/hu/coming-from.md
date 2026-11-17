---
title: Átállás másik paraméteres modellezőből
summary: Hogyan feleltethetők meg az asztali paraméteres alkatrész-modellezők szokásai a PartCraftnak, és mely különbségek okoznak gondot a tapasztalt felhasználóknak az első órában.
keywords: átállás, átvitel, ismerős, jellemzőkezelő, tervezési fa, intelligens méretezés, kihúzott főtest, kihúzott kivágás, lyukvarázsló, illesztések, interferenciaészlelés, visszagörgető sáv, tulajdonságpanel, egér, különbségek
from: fbacaee1
---

Ha alkatrészeket a SolidWorks-ben tervez, a PartCraft legtöbb ötlete ismerős lesz: vázlatok az Elülső, Felső és Jobb síkon, kényszerek és intelligens méretek, jellemzőelőzmények visszagörgető sávval, és illesztésekkel elhelyezett összeállítások. Az elérésük helyenként más, és ez az első verzió kevesebbet tud. Ez az oldal leképezi a szokásait, és felsorolja a meglepetéseket.

## Szokások, leképezve

| Ehhez szokott | A PartCraftban |
|---|---|
| A bal oldali tervezési fa | A bal oldali előzménylista: síkok, majd jellemzők; a vázlatok behúzva ahhoz a jellemzőhöz tartoznak, amelyik használja őket |
| Elülső, felső és jobb sík | Ugyanez a három, az origón át. Az Elülső az XY sík, a Felső az XZ, a Jobb az YZ; az Y felfelé mutat |
| Vázlat síkon vagy lapon, majd a megerősítő sarok a kilépéshez | {{ui:Vázlat}} ({{key:S}}) egy kijelölt síkon vagy síklapon; {{ui:Kilépés}} vagy {{key:Esc}}, amíg bezárul |
| Intelligens méretezés | {{ui:Méretezés}} ({{key:D}}). Kattintson egy vagy két elemre, majd arra a helyre, ahová a szám kerül. Az elhelyezés helye dönti el, hogy vízszintes, függőleges vagy párhuzamos méret lesz |
| Kényszerek hozzáadása a tulajdonságpanelen | Jelöljön ki elemeket, majd a jobb oldali panel kényszergombjait (Egybeeső, Vízszintes, Párhuzamos, Érintő, Egyenlő stb.) |
| Automatikus kényszerek vázlatkészítés közben | A fogások egybeeső, görbén lévő pont, vízszintes és függőleges kényszereket adnak hozzá |
| Kék / fekete / piros vázlatszínek | Ugyanaz az elv: kék, ha nincs teljesen meghatározva, fekete, ha teljesen meghatározott, piros, ha túlhatározott. A címke mutatja a fennmaradó szabadsági fokokat |
| Tengelyvonal forgatásokhoz | {{ui:Tengelyvonal}} ({{key:N}}); a {{ui:Forgatás}} az első tengelyvonalat használja, hacsak nem választ másik tengelyt |
| Vázlat lekerekítése | {{ui:Lekerekítés}} ({{key:F}}) vázlatban: kattintson a sarokra, és írja be a sugarat |
| Segédgeometria kapcsoló | {{ui:Segédgeometria}} ({{key:Q}}) |
| Kihúzott főtest | {{ui:Kihúzás}}: Adott mélység, Középsíkig, Lapig / következőig / csúcsig, Eltolás a laptól, második irány, lejtés, egy kontúr (Tartományok kiválasztása) |
| Kihúzott kivágás | {{ui:Kivágás}}: alapból Teljes átmenés; zsebhez váltson Adott mélységre |
| Forgatott főtest / kivágás | {{ui:Forgatás}} / {{ui:Továbbiak}} › {{ui:Forgatott kivágás}} |
| Referenciasík / tengely / pont | {{ui:Továbbiak}} › {{ui:Sík}}, {{ui:Tengely}}, {{ui:Pont}} (lásd: [Referenciasíkok, tengelyek és pontok](topic:reference-geometry)) |
| Végigvezetett / áthúzott főtest vagy kivágás, dőlésszög | {{ui:Továbbiak}} › {{ui:Dőlésszög}} síklapokon (lásd: [Végigvezetés, áthúzás és dőlésszög](topic:sweep-loft-draft)). A {{ui:Végigvezetés}} és az {{ui:Áthúzás}} ebben a verzióban még nincs elkészítve (pontos kernelt igényelnek) |
| Lyukvarázsló | {{ui:Furat}} minden szabad vázlatpontnál: egyszerű, süllyesztett, kúpos süllyesztés (90° / 82°) vagy menetes ISO metrikus M2–M24, átmenő vagy vak |
| Lineáris / körkörös mintázat, tükrözés | {{ui:Lineáris}}, {{ui:Körkörös}}, {{ui:Tükrözés}} (jellemzőkre vagy a teljes testre) |
| Lekerekítés és letörés élekre | {{ui:Lekerekítés}} / {{ui:Letörés}}: kattintson egy élre, majd {{key:Shift}}+kattintással még többre, aztán a gombra. Egy sugár; egyenlő, kétméretű vagy távolság–szög letörés. Ebben a verzióban csak két síklap közötti egyenes élek, és a sarokban találkozó lekerekítések ferdén vágottak. Görbe éleket a vázlatban kerekítsen vagy ferdítsen ({{ui:Lekerekítés}} vázlatban, {{key:F}}) |
| Héjazás | {{ui:Héjazás}}: kattintson a síklapokra a nyitáshoz, majd a gombra. Egy falvastagság |
| STEP-fájl megnyitása | {{ui:Megnyitás}}: háromszögként olvasódik be, testként, amelyre építeni lehet ([STEP-fájl megnyitása](topic:import-step)) |
| Jellemző szerkesztése, majd OK | Kattintson a jellemzőre; módosítsa a számokat a jobb oldalon; gépelés közben újraépül. Nincs OK és nincs Mégse: használja a {{key:Mod+Z}} billentyűt |
| Vázlat szerkesztése | Kattintson duplán a vázlatra az előzményekben |
| Újraépítés | Minden módosítás után automatikus. Nincs újraépítő billentyű |
| Letiltás / letiltás megszüntetése | {{ui:Letiltás}} / {{ui:Letiltás megszüntetése}} a jobb oldali panelen |
| Visszagörgető sáv húzása | {{ui:Visszagörgetés idáig}} egy jellemzőn; a visszatéréshez kattintson a „Visszagörgető sáv · előregörgetés” elemre |
| Jellemző húzása a fában az átrendezéshez | {{ui:Mozgatás felfelé}} / {{ui:Mozgatás lefelé}} vagy {{key:Alt+Up}} / {{key:Alt+Down}}; ha függőséget törne el, az indok megadásával elutasítja |
| Méretek szerkesztése a modellen duplán kattintva | Jelöljön ki egy jellemzőt: a vázlatának méretei a jobb oldali panelen láthatók |
| Illesztések: egybeeső, koncentrikus, távolság, szög | {{ui:Kapcsolat}} ({{key:J}}): válasszon egy síklapot mindkét alkatrészen; a kapcsolat lapjaikat egymással szembe illeszti. Az egy tengelyre állított **Középpont** a koncentrikushoz hasonló; az **Eltolás** a távolsághoz; a **Szög** a szöghöz |
| Rögzített alkatrész | Az első alkatrész rögzített; a {{ui:Legyen ez a rögzített alkatrész}} gomb ezt megváltoztatja |
| Komponens beszúrása | {{ui:Másolat hozzáadása}} vagy {{ui:Kettőzés}} (újabb másolat) vagy {{ui:Beszúrás}} (alkatrészfájlból) |
| Alkatrész szerkesztése az összeállításban | {{ui:Alkatrész szerkesztése}}, majd {{ui:Vissza}} |
| Interferenciaészlelés | {{ui:Ütközés}} |
| Komponens mozgatása a mozgás megfigyeléséhez | Húzza a forgó vagy csúszó kapcsolat szög- vagy eltolás-csúszkáját; a {{ui:A mozgás ütközésvizsgálata}} végigjárja. Kapcsolat nélküli alkatrész: **Mozgatás kézzel** (húzható nyilak vagy beírt értékek) |
| Mérés / ellenőrzés | {{ui:Nézetek}}, majd {{ui:Mérés}} ({{key:M}}): távolságok, szögek, sugarak, területek; {{ui:Tömegtulajdonságok}} |
| Robbantott nézet, anyagjegyzék | Összeállításban, ha semmi nincs kijelölve: a **Robbantott nézetek** és az **Anyagjegyzék** a jobb oldali panelen |
| Tömegtulajdonságok | Az **Alkatrész** mező: térfogat, felületi terület, méret a facetált testről (kerek alkatrészeknél kissé alacsony). Nincs tömeg: még nincsenek anyagok |
| Mentés, mentés STEP-ként | A {{ui:Mentés}} egy `.partcraft.json` fájlt tölt le; az {{ui:Exportálás}} menüben STL, 3MF, pontos STEP (AP242 vagy AP214), facetált STEP, DXF és PDF rajz érhető el |
| Rajz készítése az alkatrészből | {{ui:Rajz}}: automatikus A3-as lap három nézettel, axonometrikussal, egy metszettel, egy részlettel, referenciákkal (datumokkal), jellemzővezérlő keretekkel és felületminőségi jelekkel. Csak az összméretek vannak méretezve |
| Középső gombbal húzva forgatás | Itt a **bal gombbal húzva** forgat. A középső vagy jobb gombbal húzva eltol. A görgő a mutatónál nagyít |
| Nézet tájolása, normálisa | {{ui:Nézetek}} menü; {{ui:Normálisa}} egy kiválasztott lapra, síkra vagy vázlatra |
| Illesztés a képernyőre (F) | {{key:F}}, vagy {{ui:Illesztés}} (vázlatban a {{key:F}} a Lekerekítés eszköz) |
| Jobb gombos menük | Nincs. A jobb gombbal húzva eltol; vázlatban a jobb kattintás lezárja a vonallánc-t |

:::tip
Ha már ismeri a SolidWorks-öt, válassza a {{ui:Jellemzőfa}} menüstílust a {{ui:Beállítások}} › {{ui:PartCraft}} › {{ui:Menük, billentyűk és egér}} részben: szalag a Jellemzők, Vázlat, Felületek, Kiértékelés, Rajz, Összeállítás és Nézet lapokkal; a középső gomb körbeforgat, a {{key:Shift}} és a középső gomb eltol, a bal gomb csak kiválaszt. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).
:::

## Különbségek, amelyek megzavarják az embereket

**Az egész vázlat a profil.** A kihúzás és a forgatás a vázlat minden zárt hurkát felhasználja. Egy jellemzőhöz nem választhat ki egyetlen tartományt vagy kontúrt a vázlatból. Jellemzőnként egy vázlatot használjon.

**Melyik vázlatot veszi a jellemző.** A jellemző azt a vázlatot használja, amelyet most zárt be, vagy amelyet az előzménylistában kijelölt. Ha nincs semmi kijelölve, a legújabb vázlatot veszi, amelyet még egy jellemző sem használ. Ha rossz vázlatot kap, jelölje ki a megfelelőt, és válassza újra a jellemzőt.

**A módosítások gépelés közben érvényesülnek.** Nincs OK és Mégse gombos jellemzőpárbeszédpanel. Minden szám azonnal újraépíti a modellt, a visszaút pedig a {{key:Mod+Z}}. A visszavonási lista a vázlatszerkesztéseket, a jellemzőket és a beállításokat egyaránt lefedi.

**A túlhatározottság soha nem maradhat észrevétlenül.** Nincsenek vezérelt (referencia) méretek. Ha egy méretet a többi kényszer már rögzít, túlhatározottként jelöli („már következik. Törölje.”). Az ütköző méret a geometriát érintetlenül hagyja, és pirosra vált. Törölje az egyiket, vagy vonja vissza.

**A végigvezetés és az áthúzás még nincs elkészítve; a lekerekítésnek, letörésnek, héjazásnak és dőlésszögnek vannak korlátai.** A PartCraft ezen verziója minden alkatrészt háló-kernellel épít; az állapotsor jelzője mindig „Háló-kernel”. A lekerekítések és letörések két síklap közötti egyenes élekre működnek, és ahol a lekerekítések sarokban találkoznak, ferdén vágottak, nem simítottak. A héjazás nyit, a dőlésszög csak síklapokat dönt meg. A pontos kernelt igénylő jellemzők kattinthatók maradnak, de kiválasztáskor a „még nincs elkészítve” üzenetet adják. Lásd: [A háló-kernel](topic:solid-kernels) és [Ami még nincs elkészítve](topic:not-built-yet).

**Két Lekerekítés nevű gomb van.** A vázlatban a {{ui:Lekerekítés}} ({{key:F}}) egy vázlatsarkot kerekít. Az alkatrészen a Jellemzők csoport {{ui:Lekerekítés}} gombja a test éleit kerekíti (ebben a verzióban a síklapok közötti egyenes éleket). Ebben a verzióban nincs végigvezetés vagy áthúzás: lásd: [Ami még nincs elkészítve](topic:not-built-yet).

**A furatokhoz szabad pontok kellenek.** A {{ui:Furat}} a Pont eszközzel készített pontoknál fúr. A körök középpontjai és a vonalvégek nem számítanak.

**A Teljes átmenés csak kivágásoknál használható.** A főtesthez mélység kell. Egyelőre nincsenek „csúcsig / felületig / következőig” véghelyzetek.

**A test facetált.** A háló-kernel a kerek felületeket síklapokból építi, ezért a nézet, a térfogatok, az STL- és 3MF-exportok mind ezekből állnak: az alkatrész panelének **Görbék** beállítása finomabbá teszi őket. A pontos STEP-export nem ilyen: a kerek felületeket valódi felületükön írja ki.

**Csak milliméter.** Hüvelykbeállítás még nincs. Hüvelykméreteket beírás előtt szorozzon 25,4-gyel.

**Az Y felfelé mutat.** Az Elülső sík Önre néz, a Felső pedig felülről tekint az alkatrészre, ahogy várja, de a világ felfelé mutató tengelye az Y. Az STL-, 3MF- és pontos STEP-exportok Z felfelé fordulnak; a facetált STEP megtartja az Y felfelé állást.

**Az illesztések lapok, nem geometriapárok.** A kapcsolat mindig két síklap egymással szembe illesztésével indul. Csapnak a furatban: válassza ki a furat körüli síklapot és a csap vállát, majd állítsa a **Középpont** értékét a furat tengelyére és a csap forgatási tengelyére. A kapcsolatok által el nem ért alkatrészek ott maradnak, ahová beillesztették; húzni nem lehet őket. A hurokban lévő kapcsolatokat nem oldja meg.

**A mentés letöltés.** Nincs olyan fájl, amelyet folyamatosan felülírna. Minden mentés új fájl a letöltések mappájában. Először nevezze el az alkatrészt, és a fájljait tartsa egy projektmappában.

**Nincsenek helyi menük, nincsenek parancskezelő lapok.** Minden az eszköztáron és a jobb oldali panelen van, az eszköztár pedig a tevékenységhez igazodik: a vázlateszközök csak vázlatban, az összeállítási eszközök csak összeállításban jelennek meg.

**A billentyűk vázlatban egybetűsek.** A {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} és {{key:S}} módosító nélkül választanak eszközt. Lásd: [Billentyűk és egér](topic:keyboard).
