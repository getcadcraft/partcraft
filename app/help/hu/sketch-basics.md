---
title: Az első vázlat megrajzolása
summary: Vázlat nyitása síkon vagy sík lapon, vonalak, téglalapok, körök, ívek, pontok és tengelyvonalak rajzolása, sarok lekerekítése, kijelölés, húzás és törlés.
keywords: vázlat, rajzolás, vonal, téglalap, kör, ív, pont, tengelyvonal, segédgeometria, lekerekítés, vázlat lekerekítése, sarok lekerekítése, fogás, kijelölés, ablak, húzás, profil
from: 28be7436
---

Minden test egy vázlattal kezdődik: egy síkon készített lapos rajz. Ez az útmutató a rajzoló eszközöket ismerteti. A vázlat kényszerekkel és méretekkel történő rögzítéséről a [Vázlat teljes meghatározása](topic:relations-dimensions) témakörben olvashat.

## Vázlat indítása

Vázlatot készíthet alapsíkon vagy az alkatrész bármely sík lapján.

1. Válassza ki, hol készítse a vázlatot:
   - alapsík: kattintson az előzményekben a **Elölnézeti sík**, a **Felülnézeti sík** vagy a **Jobb oldali sík** elemre, vagy kattintson a síkra a nézetben;
   - sík lap: kattintson a lapra a nézetben. Az egész lap kiemelődik.
2. Válassza a {{ui:Vázlat}} elemet az eszköztáron, vagy nyomja meg a {{key:S}} billentyűt. (Lap kijelölése esetén a jobb oldali panelen a {{ui:Vázlat ezen a lapon}} is választható; síknál a {{ui:Vázlat rajta}}.)

A nézet merőlegesen fordul a síkra, az eszköztáron megjelennek a vázlateszközök, és a {{ui:Vonal}} eszköz készen áll. Ha a {{ui:Vázlat}} gombot semmi kijelölése nélkül nyomja meg, az alapsíkok megjelennek, és az állapotsor ezt írja: „Kattintson egy síkra vagy sík lapra a vázlatkészítéshez. Az Esc leállítja.”

:::note
Görbe lapon nem lehet vázlat: „Ez a lap görbe. Válasszon sík lapot vagy síkot a vázlathoz.”
:::

**A lapon készült vázlat követi a lapot.** Ha a lapot vázlatél vagy egy kihúzás vége hozta létre, az új vázlat mozog, amikor az elem változik (a mélyebb üreg a fenékén lévő vázlatot is magával viszi). Ha a panel szerint a lap „Kijelöléskor rögzítve”, a vázlat ott marad, ahol a lap most van.

## A rajzoló eszközök

Minden eszköznek van eszköztár-gombja és billentyűparancsa. Az aktív gomb újbóli kiválasztásával, a {{key:S}} billentyű megnyomásával vagy az {{key:Esc}} billentyű megnyomásával visszatérhet a Kijelölés eszközre.

| Eszköz | Billentyű | Rajzolás |
|---|---|---|
| {{ui:Vonal}} | {{key:L}} | Kattintson a kezdőpontra, majd minden következő pontra. A vonalak végükkel egymáshoz láncolódnak. A láncot az {{key:Esc}}, az {{key:Enter}}, a jobb kattintás vagy a dupla kattintás zárja le. Meglévő pont megadása is lezárja |
| {{ui:Téglalap}} | {{key:R}} | Kattintson az egyik sarokra, majd a szemközti sarokra. Négy, sarkaiknál összekapcsolt vonal jön létre: kettő vízszintes és kettő függőleges |
| {{ui:Kör}} | {{key:C}} | Kattintson a középpontra, majd a körvonal egy pontjára |
| {{ui:Ív}} | {{key:A}} | Kattintson a középpontra, majd a kezdőpontra, végül a végpontra. Az ív abban az irányban halad, ahogyan a mutatót a középpont körül mozgatja |
| {{ui:Pont}} | {{key:P}} | Kattintson. Önálló pont jelöli a {{ui:Furat}} középpontját |
| {{ui:Tengelyvonal}} | {{key:N}} | Mint a vonal, egy szakaszonként. Szaggatott vonallal rajzolódik; segédgeometria, forgatási tengelyként vagy hivatkozásként használják |
| {{ui:Lekerekítés}} | {{key:F}} | Kattintson arra a sarokra, ahol két vonal találkozik, adja meg a sugarat, és nyomja meg az {{key:Enter}} billentyűt |
| {{ui:Spline}} | {{key:B}} | Kattintson azokra a pontokra, amelyeken a görbe átmegy; az {{key:Enter}} a befejezés, az első pontra kattintva zárható. Lásd: [Splinek, vágás, párhuzamos eltolás és további vázlateszközök](topic:sketch-tools) |
| {{ui:Vágás}} | {{key:T}} | Kattintson a görbe eltávolítandó szakaszára, a legközelebbi metszéspontokig |
| {{ui:Méretezés}} | {{key:D}} | Lásd: [Vázlat teljes meghatározása](topic:relations-dimensions) |

Rajzolás közben a mutató mellett egy kis mező mutatja a hosszt, a méretet, az átmérőt vagy a sugarat.

### Méret megadása rajzolás közben

Egy vonal, téglalap, kör vagy ív első kattintása után a méretet a kattintás helyett be is gépelheti. Számot begépelve a mutató melletti mező megnyílik, és a szám már benne van:

| Eszköz | Mezők ({{key:Tab}}: a következőre lép) | Mi történik az {{key:Enter}} hatására |
|---|---|---|
| {{ui:Vonal}}, {{ui:Tengelyvonal}} | Hossz, majd a vázlat X tengelyétől mért szög (°) | A vonal ekkora hosszúságban rajzolódik meg, a mutató felé vagy a megadott szögben; a lánc a végéről folytatódik |
| {{ui:Téglalap}} | Szélesség, majd magasság | A téglalap az első sarokból a mutató felé rajzolódik; a be nem gépelt méret a mutató helyzetéből adódik |
| {{ui:Kör}} | Átmérő | A kör ekkora átmérővel rajzolódik meg |
| {{ui:Ív}} | Sugár a középpont után, majd ívszög (°) a kezdőpont után | A kezdőpont ennyire van a középponttól; az ív ennyit fut körbe, abban az irányban, ahogyan a mutatót mozgatta |

Minden begépelt méret ugyanabban a lépésben **vezérlő méretté** válik, így a vázlat méretezett lesz: a {{key:Mod+Z}} az alakzatot és a méreteit együtt távolítja el. Ha az {{key:Enter}} megnyomása helyett kattint, a begépelt érték megmarad, a többit pedig a kattintás határozza meg. Az {{key:Esc}} bezárja a mezőt, és visszatér a mutatóhoz.

Ha csak kattintással szeretne rajzolni, ezt kikapcsolhatja a {{ui:Beállítások}} › {{ui:PartCraft}} › **Méretezés rajzolás közben** menüpontban. Lásd: [PartCraft-beállítások](topic:settings).

A vázlateszközök végén lévő {{ui:Továbbiak}} alatt található a kontrollpontos spline, a {{ui:Nyújtás}}, a {{ui:Párhuzamos}}, a {{ui:Tükrözés}}, a {{ui:Sokszög}}, a {{ui:Horony}}, a vázlatmintázatok és az {{ui:Él vetítése}}: lásd [Splinek, vágás, párhuzamos eltolás és további vázlateszközök](topic:sketch-tools).

### Fogás (snap)

A fogás automatikusan kényszereket ad hozzá, így a vázlat mozgatáskor összekapcsolt marad:

- **Végponton vagy origón** kis négyzet jelenik meg. Az új pont ezzel egybeesővé válik.
- **Vonalon, körön vagy íven** kis kereszt jelenik meg. Az új pont erre a görbére kerül.
- A vízszintestől vagy függőlegestől 3 foknál kisebb eltérésű vonal ehhez igazodik, és vízszintes vagy függőleges kényszert kap. A címke „H” vagy „V” betűt mutat.

A fogás elkerüléséhez nagyítson be, hogy távolabb kattinthasson a ponttól vagy görbétől.

## Sarok lekerekítése

1. Nyomja meg az {{key:F}} billentyűt, vagy válassza a {{ui:Lekerekítés}} elemet.
2. Kattintson arra a sarokpontra, ahol két vonal találkozik.
3. Megnyílik egy mező a javasolt sugárral. Írja be a sugarat, és nyomja meg az {{key:Enter}} billentyűt.

Mindkét vonal levágódik, és egy érintő íven, sugármérettel kapcsolódik össze. Előfordulható üzenetek: „A lekerekítéshez olyan sarok kell, ahol pontosan két vonal találkozik.” és „Ez a sugár túl nagy ehhez a vonalakhoz.”

:::tip
A vázlat-lekerekítés a profil egy sarkát kerekíti, így a kihúzás lekerekített függőleges éleket kap. A test saját éleinek lekerekítéséhez (például egy lemez felső éleihez) az alkatrészen használja a {{ui:Lekerekítés}} jellemzőt: lásd [Lekerekítés, letörés és üregezés](topic:fillet-chamfer-shell). Vázlatban az eszköztár Lekerekítése a vázlateszköz; az alkatrészen ez a jellemző.
:::

## Segédgeometria

A segédvonalak, körök és ívek szaggatottak és szürkék. A vázlatot segítik, de nem részei a kihúzott vagy forgatott profilnak.

1. Jelölje ki a vonalakat, köröket vagy íveket.
2. Nyomja meg a {{key:Q}} billentyűt, vagy válassza a {{ui:Segédgeometria}} elemet. Újbóli megnyomással visszakapcsolhatja őket.

## Kijelölés, húzás és törlés

A kijelöléshez nyomja meg az {{key:S}} billentyűt (vagy az {{key:Esc}} billentyűt addig, amíg nincs aktív eszköz).

- A kijelöléshez kattintson pontra, vonalra, körre, ívre, kényszerjelre vagy méretre. A {{key:Shift}}+kattintás hozzáad a kijelöléshez vagy elvesz belőle. Windows és Linux rendszeren a {{key:Ctrl}}+kattintás ugyanezt teszi; Mac gépen a ⌘+kattintás.
- Üres területen húzással ablakot rajzolhat: a teljesen benne lévő minden elem kijelölődik.
- Pont vagy vonal húzásával mozgathatja. A megoldó mozgatás közben megtartja az összes kényszert és méretet, így csak a szabad geometria mozdul el. Kör szélének húzásával a sugara módosítható.
- A méret számának húzásával a címke mozgatható.
- A kijelölés törléséhez nyomja meg a {{key:Delete}} vagy a {{key:Backspace}} billentyűt, vagy válassza a jobb oldali panel {{ui:Törlés}} elemét. A geometria törlésekor a rajta lévő kényszerek is törlődnek.

## Nagyítás és eltolás a vázlatban

- Az egérgörgővel a mutató helyén nagyíthat.
- Középső vagy jobb gombbal húzva eltolhatja a nézetet.
- Az eszköztár vagy a jobb oldali panel {{ui:Illesztés}} gombja a vázlatot a nézethez illeszti. Vázlatban az {{key:F}} billentyű a Lekerekítés eszköz, nem az Illesztés.

## A vázlat bezárása

Válassza az eszköztár {{ui:Kilépés}} elemét vagy a jobb oldali panel {{ui:Kilépés a vázlatból}} elemét, vagy nyomja az {{key:Esc}} billentyűt, amíg a vázlat be nem záródik. Minden {{key:Esc}} először a folyamatban lévő műveletet szakítja meg, majd visszatér a Kijelöléshez, azután törli a kijelölést, a következő pedig bezárja a vázlatot.

A vázlat kijelölve marad, így a következő {{ui:Kihúzás}} vagy {{ui:Forgatás}} ezt használja.

## Mi tesz jó profilt

A {{ui:Kihúzás}} és a {{ui:Forgatás}} a vázlat **minden zárt hurkát** használja a test (nem segédgeometria) vonalaiból, köreiből, íveiből és splinejeiből. A hurkon belüli hurkok furatokká válnak.

- Minden végpontnak pontosan egy másik végponttal kell találkoznia. „A profil nyitott: a (12.5, 40) pontban lévő vég semmihez sincs kapcsolva.” Ez megnevezi a helyet.
- Egy pontban legfeljebb két végpont találkozhat: „A profil elágazik a (0, 20) pontnál: ott kettőnél több vég találkozik.”
- A pontokat és a segédgeometriát a profil figyelmen kívül hagyja.

Következő: [Vázlat teljes meghatározása kényszerekkel és méretekkel](topic:relations-dimensions).

## Vázlat fényképből

**Jellemzők › Továbbiak › Vázlat fényképből…** (vagy a Vázlat csoport a Jellemzőfa szalagján) egy sima alapon fekvő lapos alkatrész képét – a körvonalát és a furatait – vagy egy tollrajzot vonalak, ívek és körök vázlatává követ. Adjon meg egy hosszúságot (a szélességet, a magasságot vagy a leghosszabb oldalt), hogy a vázlat megfelelő méretű legyen, ellenőrizze az előnézetben a talált elemeket, és válassza a **Vázlat készítése** lehetőséget; ugyanabban a visszavonási lépésben ki is húzhatja. A feldolgozás ezen a számítógépen történik. A saroksugarak körülbelül 5%-on belül jönnek vissza, egy-két képpontnyi részletek elvesznek, és a ferdén vagy árnyékkal készült fénykép nem egyenesedik ki: az alkatrészt szemből, egyenletes fényben fotózza.
