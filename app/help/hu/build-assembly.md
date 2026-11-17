---
title: Összeállítás készítése kapcsolatokkal
summary: Indítson összeállítást egy alkatrészből, illesszen be másolatokat és más alkatrészfájlokat, kapcsolja össze őket merev, forgó, csúszó, hengeres, síkbeli, gömb- és csap-horony kapcsolatokkal síklapokon, középpontozza a kapcsolatokat tengelyeken, szerkesszen alkatrészt helyben, és mentse az összeállítást.
keywords: összeállítás, illesztés, illesztések, kapcsolat, hurok, zárt hurok, csuklós mechanizmus, négycsuklós, mechanizmus, merev, forgó, csúszó, hengeres, síkbeli, gömb, golyós kapcsolat, csap horonyban, komponens beillesztése, rögzített, koncentrikus, egybeeső, alkatrész szerkesztése, helyben, partcraft-asm
from: a53bbfef
---

Az összeállítás alkatrészeket illeszt össze. A PartCraftban a **kapcsolatok** helyezik el az alkatrészeket: minden kapcsolat két alkatrész egy-egy síklapján ül, és a két lapot egymással szembe illeszti. A forgókapcsolat az egyik alkatrészt forgatni, a csúszókapcsolat csúsztatni, a merev kapcsolat rögzíteni engedi.

## Összeállítás indítása

1. Készítsen egy alkatrészt testtel (üres alkatrész nem kerülhet összeállításba: „Előbb készítsen testet, majd tegye be az összeállításba.”).
2. Válassza az eszköztáron a {{ui:Összeállítás}} gombot.

Az állapotsor ezt írja: „Összeállítás indítva a Part1 alkatrésszel rögzített alkatrészként. Illesszen be további alkatrészeket ({{ui:Másolat hozzáadása}}, {{ui:Beszúrás}}, vagy {{ui:Szerkesztés}} › {{ui:Kettőzés}}), majd kapcsolja őket össze.” A bal oldali panelen most az **Alkatrészek** és a **Kapcsolatok** szerepel, az eszköztáron pedig az összeállítási eszközök látszanak. A vázlat- és jellemzőeszközök elrejtődnek.

Az első alkatrész **rögzített**: sosem mozdul, minden más hozzá képest kerül elhelyezésre.

## Alkatrészek beillesztése

- A {{ui:Másolat hozzáadása}} a kijelölt alkatrész (vagy az utolsó) újabb másolatát illeszti be. A másolatok egy alkatrészt osztanak meg: ha szerkeszti, minden másolat megváltozik.
- A Szerkesztés csoport {{ui:Kettőzés}} ({{key:Mod+D}}) gombja ugyanezt teszi a kijelölt alkatrésszel. A {{key:Mod+C}} és a {{key:Mod+V}} alkatrészt másol, és a többi mellé illeszti be, ugyanebben vagy egy másik összeállításban; a {{key:Mod+Shift+V}} ugyanarra a helyre illeszti. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).
- A {{ui:Beszúrás}} egy alkatrészt illeszt be a számítógépén lévő `.partcraft.json` fájlból. Az alkatrész az összeállításba másolódik.

Az új alkatrészek a már meglévők jobb oldalán, 20 mm-rel arrébb jelennek meg, és ott is maradnak, amíg egy kapcsolat el nem helyezi őket. Kapcsolat nélküli alkatrész kézzel is mozgatható: megadott értékekkel vagy húzható nyilakkal (lásd: [Alkatrészlista, robbantott nézetek és mozgatható alkatrészek](topic:assembly-bom-explode)).

## Két alkatrész összekapcsolása

1. Válassza a {{ui:Kapcsolat}} gombot, vagy nyomja meg a {{key:J}} billentyűt. A jobb oldali panel **Új kapcsolat** feliratot mutat.
2. Kattintson az első alkatrész egyik síklapjára. A felület kiemelődik.
3. Kattintson a második alkatrész egyik síklapjára.

A második alkatrész odaugrik, így a lapja az első alkatrész lapjának fekszik, azzal szemben. A kapcsolat a **Kapcsolatok** alatt jelenik meg, például „Revolute1” néven, a jobb oldali panel pedig a beállításait mutatja.

- Ha mindkét lapot forgatással készítették, a kapcsolat **forgó** típusként indul; egyébként **merev**. Utána módosíthatja.
- Görbe lap nem választható ki: „Ez a lap görbe. Válasszon síklapot. (Furat vagy forgatás tengelye körüli forgatáshoz a kapcsolatnál utólag válassza ki.)”
- A {{key:Esc}} megszakítja a megkezdett kapcsolatot (vagy kattintson a bal oldali listában egy alkatrészre).

### Kapcsolat beállításai

| Beállítás | Mit csinál |
|---|---|
| **Típus** | Az alábbi táblázat egyik kapcsolata |
| **Szög (°)** | Elforgatja a második alkatrészt a kapcsolat tengelye körül (a lapokra merőlegesen) |
| **Eltolás (mm)** | A második alkatrészt a tengely mentén mozgatja a laptól (negatív értéknél a lapba nyomja) |
| **X mentén**, **Y mentén**, **Dőlés X körül**, **Dőlés Y körül**, **Horony mentén**, **Horony iránya** | A többi érték, azoknál a kapcsolatoknál látható, amelyek használják őket |
| **Középpont** (mindkét oldalon) | Hol metszi a kapcsolat tengelye a lapot: „A lap saját origója”, egy forgatás tengelye („Axis of Revolve1”), vagy egy furat tengelye („Hole1, hole 2”) |

Minden érték, amelyet a kapcsolat mozgathat, a doboza alatt húzható csúszkával rendelkezik; a többi egyszer állítható be.

| Kapcsolat | Mi mozog | Egyszer állítható be |
|---|---|---|
| **Merev** | semmi | Szög, Eltolás |
| **Forgó** | Szög (csukló) | Eltolás |
| **Csúszó** | Eltolás (fiók) | Szög |
| **Hengeres** | Szög és Eltolás (tengely sima csapágyban) | |
| **Síkbeli** | X mentén, Y mentén a lapon át, és Szög (asztalon csúszó alkatrész) | |
| **Gömb** | Szög (forgás), valamint Dőlés X és Y körül a kapcsolat középpontja körül (gömbcsukló) | |
| **Csap horonyban** | Horony mentén és Szög (csap egyenes horonyban) | Horony iránya: a horony szöge a lap X tengelyétől |

A lap X és Y iránya az első alkatrész lapjáé; a kapcsolat középpontját a **Középpont** állítja be.

A „lap saját origója” az alkatrész origója a lapra vetítve, ami gyakran nem az a hely, ahol az alkatrészeket egymáshoz igazítani szeretné. Kerek alkatrészeknél és csapoknál állítsa a **Középpontot** mindkét oldalon a forgatás vagy a furat tengelyére: a tengelyek így egybeesnek, mint egy koncentrikus illesztésnél.

### Példa: két karima lapjával szemben csavarozva

1. Nyissa meg a karimaalkatrészt (forgatás körkörös furatmintázattal), és válassza a {{ui:Összeállítás}} gombot.
2. Válassza a {{ui:Másolat hozzáadása}} gombot.
3. Nyomja meg a {{key:J}} billentyűt, kattintson az első karima tárcsájának síklapjára (ahonnan a csavarfuratok indulnak), majd a második karima ugyanazon lapjára. A lapokat forgatás készítette, így a kapcsolat forgó lesz.
4. Állítsa a **Középpont** értékét mindkét oldalon „Axis of Revolve1”-re. A karimák most egy tengelyt osztanak meg.
5. Írja be a `22.5` értéket a **Szög (°)** mezőbe a csavarfuratok egymáshoz igazításához, vagy húzza a csúszkát.

## Zárt hurkok: csuklós mechanizmusok

Gyűrűbe kapcsolt alkatrészek (négycsuklós mechanizmus, forgattyú és csúszka, mindkét oldalon kereszttartós keret) egy **hurkot** alkotnak. A PartCraft minden hurkot úgy old meg, hogy záródjon: a rajta lévő kapcsolatok felveszik azokat az értékeket, amelyek a gyűrűt összekötik, és a kiindulási helyzetüktől a lehető legkevesebbet mozdulnak el.

- A hurkon lévő kapcsolat egy értékét **állítsa be vagy húzza**, és a hurok többi része követi. Négycsuklós mechanizmusnál húzza a forgattyú **Szög** értékét, és a csatlakozó rúd és a billenőkar vele együtt mozog. A beállított érték megmarad; a többit ebből számítja ki.
- A listában a még mozgatható hurkon lévő kapcsolat **kék**: egy másik érték még beállítható. A mozgathatatlan hurok (kereszttartós keret) fekete marad. A be nem záródó hurok **piros**.
- Az **Alkatrész** mező a **Hurkok** értékét mutatja: hány zárt és hány érték mozgatható még, például „1 zárt; 1 érték még mozgatható”.
- A {{ui:A mozgás ütközésvizsgálata}} a hurkon lévő kapcsolatot lépésenként végigjárja úgy, hogy a hurok követi (lásd: [Összeállítás ellenőrzése ütközésekre és mozgásra](topic:check-assembly)).

Lapos rudakból egymásra rakott lapos mechanizmusnak mélységben egyeznie kell: egy gyűrű két oldalán lapjukkal szemben összekapcsolt két alkatrész magasságának mindkét irányban meg kell egyeznie. Ha a rétegek nem adnak egyező összeget, használja a kapcsolat **Eltolás** értékét az alkatrész megemelésére, különben a hurok nem záródik.

## Munka az alkatrészekkel

Kattintson egy alkatrészre a nézetben vagy a listában a kijelöléshez. A jobb oldali panel megmutatja az alkatrész nevét, a másolatok számát, a térfogatát, a kapcsolatait, és azt, hogy rögzített-e, kapcsolatai határozzák-e meg, vagy „Nincs csatlakoztatva: a helyén marad”. Gombok:

- {{ui:Az alkatrész szerkesztése}} (vagy {{ui:Alkatrész szerkesztése}} az eszköztáron, vagy kattintson duplán az alkatrészre a listában): megnyitja az alkatrészt szerkesztésre;
- {{ui:Másolat beszúrása}};
- {{ui:Legyen ez a rögzített alkatrész}};
- {{ui:Eltávolítás}}: a kapcsolatait is eltávolítja, megerősítés után.

Egy összeállításban legalább egy alkatrésznek maradnia kell: „Az összeállításban legalább egy alkatrésznek maradnia kell. Inkább zárja be.”

### Alkatrész szerkesztése helyben

1. Jelöljön ki egy alkatrészt, és válassza a {{ui:Alkatrész szerkesztése}} gombot. Az alkatrész az előzményeivel együtt nyílik meg; a címsor ezt mondja: „Bracket (in Bracket assembly)”.
2. Szerkessze úgy, mint bármely alkatrészt.
3. Válassza az eszköztáron a {{ui:Vissza}} gombot. Az összeállítás frissül: az alkatrész minden másolata megváltozik, a vázlatéleken készült lapokon lévő kapcsolatok pedig követik a változást.

A változás visszavezetése egy lépés az összeállítás visszavonási listájában.

## Visszavonás, mentés és bezárás

- Az összeállításnak saját visszavonási listája van: a {{key:Mod+Z}} és a {{key:Mod+Y}} a kapcsolatokon, beszúrásokon és beállításokon működik.
- A {{ui:Mentés}} vagy a {{key:Mod+S}} letölti a `<assembly name>.partcraft-asm.json` fájlt, benne minden alkatrésszel. Később a {{ui:Megnyitás}} gombbal nyissa meg.
- A {{ui:Bezárás}} bezárja az összeállítást, és visszatér ahhoz az alkatrészhez, ahonnan elindult. Ha az összeállítás nincs mentve, rákérdez: {{ui:Mégse}}, {{ui:Az összeállítás elvetése}} vagy {{ui:Előbb mentés}}.
- Az összeállítás átnevezéséhez kattintson üres területre, hogy ne legyen semmi kijelölve, és módosítsa a **Név** mezőt a jobb oldali panelen.

## Nagy összeállítások

Egy összeállítás néhány alkatrész több ezer másolatát is tartalmazhatja. Egy alkatrész másolatai együtt rajzolódnak ki, az elforgatott kapcsolat csak a mögötte lévő alkatrészeket helyezi újra, az alkatrészlista pedig az első sorait mutatja, alatta egy „Továbbiak megjelenítése” gombbal (a kijelölt alkatrész mindig szerepel a listában).

- Amíg forgatja vagy nagyítja a nézetet, a mintegy 300 000-nél több háromszögből álló összeállítás alkatrészenként egy-egy dobozként rajzolódik ki, majd a megállítás után egy pillanattal teljes részletességgel.
- A {{ui:Nézetek}} › {{ui:Könnyített megjelenítés}} a dobozokat folyamatosan megtartja. Az alkatrészek és a kapcsolatok kiválasztása továbbra is a valódi alkatrészeket használja.
- A forgatás sebessége a grafikus kártyától is függ. A PartCraft által mért számok a kiadási jegyzetekben vannak, azzal a géppel együtt, amelyen mérték őket.

## Kapcsolati problémák

- Az olyan alkatrész, amelyet egyetlen kapcsolat sem ér el, **szabadként** szerepel, a panel pedig ezt írja: „Bracket2 nincs összekapcsolva a rögzített alkatrésszel, ezért a helyén marad.”
- Be nem záródó hurok (a hosszak nem érnek el, egy határ megállít egy kapcsolatot, a lapok mélysége nem egyezik): „Revolute3 olyan hurkot zár, amely nem záródik: 2.000 mm-rel tér el. Ellenőrizze a hurok kapcsolatainak lapjait, eltolásait és határait.” A kapcsolatai pirosra váltanak.
- Ha egy alkatrész szerkesztése után a kapcsolat által használt lap vagy tengely megszűnt: „A kapcsolat által használt lap nincs már meg a Bracketből.” Távolítsa el a kapcsolatot, és hozza létre újra.

Következő: [Összeállítás ellenőrzése ütközésekre és mozgásra](topic:check-assembly).
