---
title: Szerszámpályák és G-kód készítése (Gyártás)
summary: Állítsa be a nyersanyagot és a munkadarab-nullpontot, válasszon szerszámokat, adjon hozzá lap-, zseb-, kontúr-, fúró- és letörési műveleteket felületek kijelölésével, simítsa a teljes modellt 3D-ben (párhuzamos, hullámos), szimulálja a nyersanyagot a modellhez képest bemarások és ciklusidő szempontjából, és töltse le a G-kódot a három beépített utófeldolgozó egyikéből vagy egy saját szerkesztésűből.
keywords: pontos step, step a műhelynek, munkakoordináták, cam-átadás, párhuzamos, hullámos simítás, 3d simítás, simítás, golyós maró, szerszámkönyvtár, utófeldolgozó szerkesztése, egyéni utófeldolgozó, utófeldolgozó-szerkesztő, adaptív, adaptív kiürítés, állandó bekapcsolódás, trochoidális, hsm, nagysebességű megmunkálás, gyártás, cam, szerszámpálya, g-kód, nc, cnc, marás, zseb, kontúr, profil, homlokolás, fúrás, csúcsos fúrás, g83, g81, g73, letörés, nyersanyag, munkaeltolás, g54, utófeldolgozó, grbl, linuxcnc, előtolás és fordulatszám, szimuláció, bemarás, ciklusidő
from: f8a03be8
---

A Gyártás munkaterület alakítja a munkadarabot szerszámpályákká, és G-kódként írja ki őket. A legtöbb művelet **2,5 tengelyes** marás: a szerszám függőleges marad, a falak egyenesen lefelé, a fenekek síkban vágódnak. A **3D nagyolás** és a **Maradék** 3D-ben üríti ki a görbült munkadarabokat ([3D nagyolás és maradékanyag-megmunkálás](topic:rough-3d)); a **Párhuzamos** és a **Hullámos simítás** simítja ezeket ([3D simítás](topic:finish-3d)). Forgótengelyes gépen bármely művelet használhat döntött szerszámot, két művelet pedig vágás közben mozgatja a forgótengelyeket ([4 és 5 tengelyes megmunkálás](topic:multi-axis)). Vannak esztergálási műveletek ([Esztergálás](topic:turning)) és tapintószondás műveletek is ([Tapintás](topic:probing)). A háló-kernel által a munkadarabnak adott, megnevezett lapokon dolgozik (lásd [A háló-kernel](topic:solid-kernels)).

Laboratóriumi változat: ellenőrizzen minden programot a vezérlője saját szimulátorában, és először a nyersanyag felett, levegőben futtassa.

## Beállítás

1. Válassza a **Gyártás** elemet a munkaterület-váltóban, majd a {{ui:Új felfogás}} gombot.
2. A **Beállítás** lapon adja meg:
   - **Szerszámtengely (+Z)**: melyik irányba mutat a szerszám a munkadarabba. Alapértelmezés a világ +Y (a PartCraft felfelé iránya); ekkor a gép X-e a világ X-e, a gép Y-ja pedig a világ −Z.
   - **Munkadarab-nullpont (G54)**: a nyersanyag sarka vagy középpontja, felső vagy alsó oldala, a modell felső középpontja, vagy a modell nullpontja.
   - **Nyersanyag**: doboz vagy henger, vagy a modell ráhagyással (oldalak, felső, alsó), vagy rögzített méret.
   - **Anyag** (ez adja a kezdő előtolásokat és fordulatszámokat), az **utófeldolgozó** (vezérlő), a gép maximális orsófordulatszáma, gyorsjárati sebessége és szerszámcseréjének ideje, a hűtőfolyadék és a programszám.

## Szerszámok

A **Szerszámok** lap tartalmazza a könyvtárat: lapos, golyós és lekerekített sarkú véggyalu-marók, fúrók, letörő marók és homlokmarók, mindegyiknek T-száma, átmérője, fogszáma és fogmagassága (ahol értelmezhető, a sarokrádiusz, a csúcs- vagy letörési szög is).

A saját szerszámait a böngészőben menthetők, és fájlként átvihetők számítógépek között: lásd [A szerszámkönyvtár](topic:tool-library).

Az orsófordulatszámot és az előtolást az anyag adja: n = 1000 × vágósebesség / (π × átmérő), előtolás = n × fogszám × forgácsvastagság (fúrónál: n × fordulatonkénti előtolás). A számok közzétett tartományokból vett óvatos kezdőértékek, nem az ön gépéhez hangolták; a szerszámgyártó vágósebességét, forgácsvastagságát, fordulatszámát (rpm) vagy előtolását beírva felülbírálhatja őket. Ha a sebesség túllépi a gép maximumát, ott marad, és az előtolás követi, így a forgácsvastagság megmarad.

## Műveletek hozzáadása

Az eszköztár minden gombja egy műveletet ad hozzá, és ahol geometria kell, kijelölést indít: kattintson a lapokra vagy élekre a nézetben (az ismételt kattintás eltávolítja), majd {{ui:Kijelölés kész}} vagy {{key:Esc}}.

| Művelet | Kijelölés | Mit csinál |
|---|---|---|
| {{ui:Lap}} | nincs | Cikkcakk menetek a teljes nyersanyagon, annak szélein túl, a modell felső lapjáig |
| {{ui:Zseb}} | egy lapos aljzatlap, egy kerek furat, vagy egy zárt élsor | Befelé haladó, eltolt menetekkel üríti ki a tartományt, minden mélységi lépésnél; a szigetek (a fenéken belül felálló lapok) megmaradnak; a teljes körben nyitott fenék (kívül nincs magasabb rész) a nyersanyag széléig ki lesz ürítve |
| {{ui:Adaptív}} | ugyanaz, mint a Zseb | Ugyanazt a tartományt üríti ki olyan menetekben, amelyek mindegyike egy beállított szélességet vág (**Bekapcsolódás**, az átmérő törtrésze), így a szerszám soha nem vág teljes szélességű hornyot, még sarkokban sem; spirálisan lép be, és minden szinten befejezi a falakat. Keskeny vágásnál mélyebb lépés és nagyobb előtolás engedhető meg |
| {{ui:Kontúr}} | egy lapos felület (körvonala), egy kerek felület, vagy élek | A körvonalat követi, a szerszám sugarával eltolva, kívül vagy belül, be- és kilépő ívekkel, és választható fülekkel |
| {{ui:Fúrás}} | furatok (kattintson a furat falára vagy peremére) | Minden furatot fix ciklussal fúr: csúcsos (G83), fúrás (G81) vagy forgácstörés (G73); vagy adjon meg átmérőt, hogy az adott méretű összes furatot fúrja |
| {{ui:Letörés}} | egy lap körvonala vagy élek | Letörő marót futtat az él mentén, így a beállított szélességet vágja |
| {{ui:Párhuzamos}} | nincs (a teljes modell) | 3D simítás párhuzamos vonalakban bármilyen szögben, a felületet követve golyós, lekerekített sarkú vagy lapos véggyalu-maróval. Lásd [3D simítás](topic:finish-3d) |
| {{ui:Hullámos simítás}} | nincs (a teljes modell) | 3D simítás egymástól beállított távolságra lévő menetekben a felületen, így a köztük lévő gerinc a kért magasságot kapja |

Válasszon ki egy műveletet a listából, ha meg akarja változtatni a szerszámát, a magasságait (biztonsági távolság, visszahúzás, előtolási magasság, felső és alsó határ), a mélységi lépését, az oldalirányú lépését, a hagyandó anyagot, a simítási menetet, a belépést (spirál, rámpa vagy merülés), az egyirányú marást, a füleket vagy a ciklust. A {{ui:Fel}} és a {{ui:Le}} átrendezi, a {{ui:Letiltás}} kihagyja, a {{ui:Törlés}} eltávolítja. Minden a visszavonási előzményekben van, és a munkadarab-fájlban mentődik.

A zseb oldalirányú lépése legfeljebb a szerszám átmérőjének fele, így a fenék minden pontja egy szerszámsugáron belül van valamelyik menettől. A belső sarkok megtartják a szerszám sugarát.

Az **adaptív kiürítés** a vágó bekapcsolódását egy érték közelében tartja. Az átmérő 0,15-szörösének megfelelő bekapcsolódás körülbelül 46°-os bekapcsolódási szögnek felel meg: ez a vágóél íve az anyagban. Egy eltolt zseb ezzel szemben első menetében teljes szélességgel vág, és minden belső sarokban tovább fordul. A menetek között a szerszám ott marad lent, ahol vágatlan levegőn mozog, és máshol vágatlan levegőn emelkedik és süllyed. A menetek a tartomány finom rácsán készülnek (cellák kb. a szerszámsugár egytizenketted része), így a bekapcsolódás legfeljebb egy cellányival lehet szélesebb a beállítottnál; a falak pontosan készülnek. Nagy nyitott tartomány hosszú programot ad, sok rövid mozgással.

## Szimuláció

A szerszámpályák minden módosítás után újra készülnek (a munkadarabé is). A {{ui:Szimuláció}} a teljes program után megmaradt nyersanyagot is megmutatja. A panel a következőket mutatja:

- **Ciklusidő**: az előtolásos mozgások az előtolásukkal, a gyorsjáratok egyenes vonalként a beállítás gyorsjárati sebességével, plusz a szerszámcsere ideje. A valódi gépek gyorsítanak, ezért tovább tartanak.
- **Bemarások**: helyek, ahol a szerszám 0,02 mm-nél mélyebbre ment a munkadarab felülete alá. A nézetben piros jelölés mutatja őket.
- **A munkadarabon maradt nyersanyag**.

A nyersanyag a felső oldal magassági térképe (Z-térkép), ezért nem mutat alámetszéseket. Húzza a **Lejátszás** csúszkát, hogy a szerszámot végigmozgassa a programon. A nézetben az előtolásos mozgások folytonos, a gyorsjáratok szaggatott vonallal jelennek meg, műveletenként egy színnel.

Ha a **Szimulált nyersanyag megjelenítése** be van kapcsolva, a nyersanyag cellánként a modellhez képest van színezve: **zöld**, ahol a modellen van (0,02 mm-en belül); **piros**, ahol a szerszám a modellbe vágott; és ahol nyersanyag marad a modellen: **sárga** egy vékony rétegnél, **narancs** többnél, és 1 mm vagy több esetén a meg nem munkált nyersanyag **szürkéjébe** halványodik. A színek minden módosítás után újra készülnek, ugyanabból a magassági térképből, mint a panel számai, így a zöld és a piros egyezik a Bemarások sorral. A letörés szándékosan vág a modellbe, és a széle mentén piros jelenik meg.

## G-kód utófeldolgozása

Válassza ki a vezérlőt az **Utófeldolgozó** alatt, és nyomja meg a {{ui:G-kód letöltése}} gombot (vagy az eszköztáron a {{ui:Utófeldolgozó}} gombot):

| Vezérlő | Fájl | Megjegyzések |
|---|---|---|
| Fanuc-style ISO | .nc | %, O-szám, sorszámok, T M6 G43 H-val, fix ciklusok |
| GRBL | .nc | Nincs szerszámtár vagy fix ciklus: a szerszámcsere M0-val megáll, a fúrás sima mozgásokként íródik |
| LinuxCNC | .ngc | T M6 G43 H-val, fix ciklusok, M2 |
| Fanuc-style lathe | .nc | Esztergaprogramokhoz: X átmérőként, fordulatonkénti előtolás, G96 G50-es határ alatt, G32 menetvágás |
| LinuxCNC lathe | .ngc | Esztergaprogramokhoz: G7 átmérők, G95, G96, G33 menetvágás; nem ír referenciapont-felvételi mozgást |
| Saját utófeldolgozó | bármely | Ön által írt vagy módosított utófeldolgozó: {{ui:Utófeldolgozó szerkesztése…}}, {{ui:Új utófeldolgozó…}}, {{ui:Utófeldolgozó fájl importálása…}} |

Minden fájl megjegyzésekkel kezdődik a programról, a nyersanyagról, a munkaeltolásról és a szerszámokról. A koordináták milliméterben, 3 tizedesjegyig vannak. A {{ui:Toolpath CSV}} és a {{ui:Toolpath JSON}} magukat a mozgásokat exportálja.

**Vágás előtt ellenőrizze a kimenetet a gépe saját szimulátorában, és először a nyersanyag felett, levegőben futtassa.** A három beépített utófeldolgozó kiindulópont, amely a vezérlők dokumentált működését követi; egyetlen konkrét gépen sem lett bizonyítva. Az ön által módosított utófeldolgozót ön igazolja. Hogyan írjon ilyet: [Szerkeszthető utófeldolgozók](topic:post-processors).

## Pontos STEP a műhelynek

A **Műveletek** lap G-kód gombjai alatt a {{ui:Pontos STEP (munkakoordináták)}} letölti a `<part>-work.step` fájlt: a munkadarabot pontos testként (valódi hengerek a furatoknak és csapoknak, valódi körök az éleiknek), origója ennek a beállításnak a munkadarab-nullpontjában, Z-je a szerszámtengely mentén. Ezek azok a koordináták, amelyeket a G-kód használ, így a műhely saját CAM-programja vagy ellenőrzője a modellt mozgatás nélkül a programhoz igazítja. A fájl csak a munkadarabot tartalmazza, nem a nyersanyagot vagy a szerszámpályákat.

A {{ui:Exportálás}} › {{ui:STEP AP242 (pontos test)}} ugyanazt a testet írja ki a munkadarab saját helyzetében (Z felfelé): lásd [Exportálás nyomtatáshoz, STEP és DXF](topic:export-files#for-other-cad-programs-step).

## Korlátok

- A zsebek, kontúrok, fúrások és letörések 2,5 tengelyesek. A görbült munkadarabokat a saját műveleteik nagyolják és simítják 3D-ben ([3D nagyolás és maradékanyag-megmunkálás](topic:rough-3d), [3D simítás](topic:finish-3d)). Az adaptív kiürítés 2D (sík fenekek).
- A döntött szerszámok, az 5 tengelyes és a 4. tengelyes simítás, az esztergálás és a tapintás megvannak, mindegyiknek saját korlátjai vannak, és **egyiket sem futtatták még gépen**: lásd [4 és 5 tengelyes megmunkálás](topic:multi-axis), [Esztergálás](topic:turning) és [Tapintás](topic:probing).
- A szerszámtartók és szárak ütközését nem ellenőrzik; figyelmeztetés jelenik meg, ha a vágás mélyebb a fogmagasságnál.
- Az előtolások és fordulatszámok kezdőértékek. Az utófeldolgozó szerkeszthető szöveg, de csak azt dönti el, hogyan íródnak ki a mozgások; nem tudja megváltoztatni a szerszámpályát, új tengelyeket adni, vagy ismerni a gépét ([Szerkeszthető utófeldolgozók](topic:post-processors) felsorolja, mire nem képes).

## A program küldése géphez

Az asztali CadCraft Studióban, ha a Studióban géphez van állítva, a **Küldés gépre…** a {{ui:G-kód letöltése}} mellett jelenik meg, és ugyanazt a programot a hálózatán lévő gépre tölti fel. A PartCraftból soha nem indul: a gépnél indítsa el, amikor minden tiszta. Böngészőben a gomb nem látszik (egy weboldal nem éri el a hálózatán lévő gépet): töltse le helyette a programot.
