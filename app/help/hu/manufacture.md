---
title: Szerszámpályák és G-kód készítése (Gyártás)
summary: Állítsa be a nyersanyagot és a munkaorigót, válasszon szerszámokat, adjon hozzá homlokfelület-, zseb-, kontúr-, fúró- és letörési műveleteket lapok kijelölésével, fejezze be a teljes modellt 3D-ben (párhuzamos, hullámos simítás), szimulálja a nyersanyagot a modellel szemben a hibákért és a ciklusidőért, és töltse le a G-kódot az egyik beépített utófeldolgozóból vagy egy saját szerkesztésűből.
keywords: pontos step, step műhelynek, munkakoordináták, CAM-átadás, párhuzamos, hullámos simítás, 3D simítás, simítás, golyós véglapmaró, szerszámkönyvtár, utófeldolgozó szerkesztése, egyedi utófeldolgozó, utófeldolgozó-szerkesztő, adaptív, adaptív nagyolás, állandó szerszámbevágás, trochoidális, hsm, nagysebességű megmunkálás, gyártás, CAM, szerszámpálya, G-kód, NC, CNC, marás, zseb, kontúr, profil, homlokmarás, fúrás, lépcsős fúrás, G83, G81, G73, letörés, nyersanyag, munkaeltolás, G54, utófeldolgozó, GRBL, LinuxCNC, előtolás és fordulatszám, szimuláció, sérülés, ciklusidő
from: beeb29aa
---

A Gyártás munkaterület az alkatrészből 3 tengelyes marógépekhez szerszámpályákat készít, és G-kódként írja ki őket. A legtöbb művelet **2,5 tengelyes**: a szerszám függőleges marad, a falakat egyenesen lefelé, a padlókat vízszintesen munkálja meg. A **Párhuzamos** és a **Hullámos simítás** görbe felületeket munkál meg 3D-ben (lásd: [3D simítás](topic:finish-3d)); a szerszám ilyenkor is függőleges marad (három tengely, döntés nélkül). A háló-kernel által az alkatrészhez adott, elnevezett lapokon dolgozik (lásd: [A háló-kernel](topic:solid-kernels)).

Laborverzió: minden programot ellenőrizzen a vezérlő saját szimulátorában, és először a nyersanyag feletti levegőben futtassa.

## Beállítás

1. Válassza a **Gyártás** lehetőséget a munkaterület-váltóban, majd a {{ui:Új felfogás}} gombot.
2. A **Beállítás** lapon adja meg:
   - **Szerszámtengely (+Z)**: merre mutasson a szerszám az alkatrészbe. Az alapértelmezés a világ +Y (a PartCraft felfelé mutató iránya); ekkor a gép X tengelye a világ X, a gép Y tengelye a világ −Z.
   - **Munkaorigó (G54)**: a nyersanyag sarka vagy közepe, felső vagy alsó oldalon, a modell felső középpontja, vagy a modell origója.
   - **Nyersanyag**: doboz vagy henger, vagy a modell plusz ráhagyás (oldalak, felső, alsó), vagy rögzített méret.
   - **Anyag** (ez adja a kezdő előtolásokat és fordulatszámokat), az **utófeldolgozó** (vezérlő), a gép maximális orsófordulatszáma, a gyorsjárati sebesség és a szerszámcsere ideje, a hűtőfolyadék és a programszám.

## Szerszámok

A **Szerszámok** lap tartalmazza a könyvtárat: sima, golyós és lekerekített sarkú véglapmarók, fúrók, letörőmarók és homlokmarók. Mindegyiknek van T-száma, átmérője, hornyainak száma és horonyhossza (valamint, ahol érvényes, sarokrádiusza, hegyszöge vagy letörési szöge).

A saját szerszámai a böngészőben menthetők, és fájlként számítógépek között áthelyezhetők: lásd: [A szerszámkönyvtár](topic:tool-library).

Az orsó fordulatszámát és az előtolást az anyag adja: n = 1000 × vágósebesség / (π × átmérő), előtolás = n × hornyok száma × forgácsvastagság (fúróknál: n × előtolás fordulatonként). A számok közzétett tartományokból vett óvatos kiindulási értékek, nem az Ön gépére hangolva; a szerszámgyártó vágósebesség-, forgácsvastagság-, fordulatszám- vagy előtolás-adatait beírva felülírhatók. Ha a fordulatszám meghaladja a gép maximumát, ott marad, és az előtolás követi, így a forgácsvastagság megmarad.

## Műveletek hozzáadása

Minden eszköztárgomb hozzáad egy műveletet, és ahol geometria kell, megkezdődik a kijelölés: kattintson lapokra vagy élekre a nézetben (újabb kattintás eltávolítja), majd a {{ui:Kijelölés kész}} gombra vagy az {{key:Esc}} billentyűre.

| Művelet | Kijelölés | Mit csinál |
|---|---|---|
| {{ui:Lap}} | semmi | Cikcakk menetek a teljes nyersanyagon, a szélein túl, a modell tetejéig |
| {{ui:Zseb}} | egy lapos padlólap, egy kerek furat, vagy egy zárt élláncolat | Kitisztítja a területet befelé haladó, eltolt menetekben, minden lépcsőnél; a szigeteket (a padlón felálló lapokat) meghagyja; a mindenhol nyitott padlót (kívül nincs magasabb) a nyersanyag széléig tisztítja ki |
| {{ui:Adaptív}} | ugyanaz, mint a Zseb | Ugyanazt a területet tisztítja olyan menetekben, amelyek mindegyike beállított szélességet vág (**Szerszámbevágás**, az átmérő töredéke), így a szerszám soha nem vág teljes szélességű hornyot, még sarkokban sem; spirálban merül be, és minden szinten befejezi a falakat. A keskeny vágások mélyebb lépést és nagyobb előtolást engednek |
| {{ui:Kontúr}} | egy lapos lap (körvonala), egy kerek lap, vagy élek | A körvonalat követi, a szerszám sugarával eltolva, kívülről vagy belülről, be- és kilépő ívekkel, és opcionálisan fülekkel |
| {{ui:Fúrás}} | furatok (kattintson a furat falára vagy peremére) | Minden furatot fix ciklussal fúr: lépcsős fúrás (G83), fúrás (G81) vagy forgácstörő fúrás (G73); vagy adjon meg egy átmérőt, és az ilyen méretű összes furatot fúrja |
| {{ui:Letörés}} | egy lap körvonala vagy élek | Letörőmarót vezet az él mentén, hogy a beállított szélességet vágja |
| {{ui:Párhuzamos}} | semmi (az egész modell) | 3D simítás párhuzamos vonalakban, bármilyen szögben, a felületet golyós, lekerekített sarkú vagy sima véglapmaróval követve. Lásd: [3D simítás](topic:finish-3d) |
| {{ui:Hullámos simítás}} | semmi (az egész modell) | 3D simítás a felület fölött, beállított távolságra lévő menetekben, így a közöttük maradó gerinc a kért magasságú lesz |

Válasszon egy műveletet a listából, ha meg akarja változtatni a szerszámát, magasságait (biztonsági, visszahúzási, előtolási magasság, felső, alsó), a lépésmélységet, a lépésközt, a meghagyandó ráhagyást, a simítási menetet, a belépést (spirál, rámpa vagy merülés), az egyirányú marást, a füleket vagy a ciklust. A {{ui:Fel}} és a {{ui:Le}} átrendezi, a {{ui:Letiltás}} kihagyja, a {{ui:Törlés}} eltávolítja. Minden a visszavonási előzményekben van, és az alkatrészfájlban mentődik.

A zseb lépésköze legfeljebb a szerszámátmérő fele, így padlójának minden pontja egy szerszámsugáron belül esik valamelyik menethez. A belső sarkok megtartják a szerszám sugarát.

Az **adaptív nagyolás** a szerszám bevágását egy érték közelében tartja. Az átmérő 0,15-ed részének megfelelő bevágás körülbelül 46°-os bevágási szöget jelent: a szerszámél ívét az anyagban. Ezzel szemben az eltolt zseb az első menetben teljes szélességgel vág, és minden belső sarokban tovább fordul körbe. A menetek között a szerszám lent marad, ahol levegőben nem vágott anyagon halad át, máshol pedig a levegőben felemelkedik és leereszkedik. A menetek finom rácson (a cellák a szerszámsugár körülbelül tizenketted részei) a régióra számítódnak, így a bevágás legfeljebb körülbelül egy cellával lehet szélesebb a beállítottnál; a falak pontosan készülnek el. Egy nagy, nyitott terület hosszú programot és sok rövid mozgást ad.

## Szimuláció

A szerszámpályák minden módosítás után újra elkészülnek (az alkatrész is). A {{ui:Szimuláció}} a teljes program után megmaradt nyersanyagot is megmutatja. A panel a következőket mutatja:

- **Ciklusidő**: az előtolásos mozgások az előtolásukkal, a gyorsjáratok egyenes vonalként a beállítás gyorsjárati sebességével, plusz a szerszámcsere ideje. A valódi gépek gyorsulnak, ezért tovább tartanak.
- **Sérülések**: helyek, ahol a szerszám 0,02 mm-nél mélyebbre ment az alkatrész felületénél. A nézetben a piros jelölés mutatja őket.
- **Az alkatrészen maradt nyersanyag**.

A nyersanyag a felső oldal magassági térképe (Z-térkép), ezért nem mutat alávágásokat. Húzza a **Lejátszás** csúszkát, hogy a szerszámot végigmozgassa a programon. A nézetben az előtolásos mozgások folytonosak, a gyorsjáratok szaggatottak, műveletenként egy szín.

Ha a **Szimulált nyersanyag megjelenítése** be van kapcsolva, a nyersanyag a modellhez képest, cellánként színeződik: **zöld** ott, ahol a modellen van (0,02 mm-en belül), **piros** ahol a szerszám belevágott a modellbe, és ahol a modellen nyersanyag maradt, **sárga** vékony rétegnél, **narancs** többnél, és 1 mm vagy több esetén elhalványul a nem munkált nyersanyag **szürkéjébe**. A színek minden módosításnál újra készülnek, ugyanabból a magassági térképből, mint a panel számai, így a zöld és a piros egyezik a Sérülések sorral. Egy letörés szándékosan vág a modellbe, és az élén pirosat mutat.

## G-kód utófeldolgozása

Válassza ki a vezérlőt az **Utófeldolgozó** alatt, és nyomja meg a {{ui:G-kód letöltése}} gombot (vagy az eszköztáron az {{ui:Utófeldolgozó}} gombot):

| Vezérlő | Fájl | Megjegyzések |
|---|---|---|
| Fanuc-jellegű ISO | .nc | %, O-szám, sorszámok, T M6 G43 H-val, fix ciklusok |
| GRBL | .nc | Nincs szerszámváltó vagy fix ciklus: a szerszámcsere M0-val megáll, a fúrás sima mozgásokként íródik |
| LinuxCNC | .ngc | T M6 G43 H-val, fix ciklusok, M2 |
| Saját | bármi | Saját vagy módosított utófeldolgozó: {{ui:Utófeldolgozó szerkesztése…}}, {{ui:Új utófeldolgozó…}}, {{ui:Utófeldolgozó fájl importálása…}} |

Minden fájl megjegyzésekkel kezdődik a programról, a nyersanyagról, a munkaeltolásról és a szerszámokról. A koordináták milliméterben vannak, 3 tizedesjeggyel. A {{ui:Szerszámpálya CSV}} és a {{ui:Szerszámpálya JSON}} magukat a mozgásokat exportálja.

**A kimenetet a gépe saját szimulátorában ellenőrizze vágás előtt, és először a nyersanyag feletti levegőben futtassa.** A három beépített utófeldolgozó kiindulópont, amely a vezérlők dokumentált viselkedését követi; egyik sem lett bizonyítva egyetlen konkrét gépen sem. Az Ön által módosított utófeldolgozót Önnek kell bizonyítania. Hogyan írjon egyet: [Utófeldolgozók](topic:post-processors).

## Pontos STEP a műhelynek

A **Műveletek** lap G-kód-gombjai alatt a {{ui:Pontos STEP (munkakoordináták)}} letölti a `<part>-work.step` fájlt: az alkatrész pontos testként (valódi hengerek a furatokhoz és csapokhoz, valódi körök az éleikhez), origója a beállítás munkaorigójában, a Z pedig a szerszámtengely mentén. Ezek a koordináták, amelyeket a G-kód használ, így egy műhely saját CAM-programja vagy ellenőrzője a modellt mozgatás nélkül a programhoz igazítja. A fájl csak az alkatrészt tartalmazza, a nyersanyagot és a szerszámpályákat nem.

A {{ui:Exportálás}} › {{ui:STEP AP242 (pontos test)}} ugyanezt a testet írja ki az alkatrész saját helyzetében (Z felfelé): lásd: [Exportálás nyomtatáshoz, STEP és DXF](topic:export-files#for-other-cad-programs-step).

## Korlátok

- A zsebek, kontúrok, fúrások és letörések 2,5 tengelyesek. Az ívelt lapok 3D-ben befejezhetők ([párhuzamos és hullámos simítás](topic:finish-3d)), de 3D-ben nem nagyolhatók (a kúp lépcsőkként marad, amíg nem fejezi be), és nincs maradékmegmunkálás. Az adaptív nagyolás 2D (sima padlók).
- Csak három tengely: nincs döntés, nincs esztergálás, nincs ellenőrzés.
- A tartók és szárak ütközését nem ellenőrzi; figyelmeztetés jelenik meg, ha a vágás mélyebb a horonyhossznál.
- Az előtolások és fordulatszámok kiindulási értékek. Az utófeldolgozó szerkeszthető szöveg, de csak azt határozza meg, hogyan íródnak a mozgások; nem tudja megváltoztatni a szerszámpályát, tengelyeket hozzáadni, vagy ismerni a gépet ([Utófeldolgozók](topic:post-processors) felsorolja, mit nem tud).

## A program elküldése gépnek

Az asztali CadCraft Studio-ban, ha a Studióban be van állítva egy gép, a **Küldés gépre…** a **G-kód letöltése** mellett jelenik meg, és ugyanazt a programot feltölti a hálózatán lévő gépre. A PartCraftból sosem indul el: indítsa a gépnél, amikor tiszta a helyzet. Böngészőben a gomb nem látszik (egy weboldal nem éri el a hálózatán lévő gépet): töltse le helyette a programot.
