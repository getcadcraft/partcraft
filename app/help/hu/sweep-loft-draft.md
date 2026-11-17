---
title: Végigvezetés, áthúzás és dőlésszög
summary: Vigyen végig egy zárt profilt vázlatgörbékből vagy modellélekből álló pályán, húzzon át szakaszokat különböző síkokon, és adjon dőlésszöget a lapokhoz; a beállításokkal, a pontos eredményekkel és az üzenetekkel.
keywords: végigvezetés, végigvezetett kiemelés, végigvezetett kivágás, cső, pálya, áthúzás, áthúzott kiemelés, keverési szakaszok, egyenes, dőlésszög, lapok kúposítása, semleges sík, húzási irány, öntés
from: 9d637981
---

:::note
**Ebben a verzióban** a végigvezetés és az áthúzás még nincs elkészítve: pontos geometriai kernelt igényelnek, amellyel ez a PartCraft-verzió nem rendelkezik. A [Mi még nincs elkészítve](topic:not-built-yet) leírja, mit tegyen helyette; a Végigvezetés és az Áthúzás szakaszok azt írják le, hogyan működnek pontos kernellel. A **Dőlésszög** sík lapokon működik: a háló-kernel építi meg, ugyanazzal az eredménnyel, amelyet a pontos kernel adna.
:::

Mindhárom a Jellemzők csoport {{ui:Továbbiak}} menüjében található (lásd [A háló-kernel](topic:solid-kernels)). Mindegyik hozzáadhat anyagot, kivághat belőle, megtarthatja csak az átfedést (**Metszet**), vagy új testet hozhat létre (**Új test**; végigvezetés és áthúzás esetén a **Művelet** a panelen).

## Végigvezetés

A végigvezetés egy zárt profilt mozgat egy pálya mentén: csöveket, fogantyúkat, drótrugókat, síneket.

1. Rajzolja meg a **pályát** egy vázlatban: egymás végére illesztett egyenesek és ívek (vagy használjon modellélt, lásd lent).
2. Rajzolja meg a **profilt** egy másik vázlatban, amelynek síkja átmegy a pálya egyik végpontján. Például egy kör a felső síkon a pálya kezdőpontjánál, amely az elülső síkon van.
3. Jelölje ki a profilvázlatot, majd válassza a {{ui:Továbbiak}}, azután a {{ui:Végigvezetés}} lehetőséget. A legutóbbi másik vázlat lesz a pálya.

A panelen:

| Beállítás | Mit csinál |
|---|---|
| **Pálya** | Jelölje be a pályát alkotó vázlatokat (több vázlat végpontjaiknál fogva egy 3D-s pályává áll össze); a **Modellélek kijelölése** a pályához az alkatrész széleit adja hozzá |
| **Tájolás** | Kövesse a pályát (alapértelmezés), Frenet, Rögzített (a keresztmetszetek párhuzamosak maradnak a profillal), Irány megtartása, Vezetőgörbe mentén |
| **Végső léptékezés** | A profil lineárisan ehhez a méretre nő vagy zsugorodik a végén (1 = állandó) |

A pálya éles sarkai gérvágással készülnek. Az 5 sugarú kör egy 100 mm-es egyenes mentén végigvezetve pontosan 2500π mm³ térfogatú henger; egy 50 sugarú negyedív mentén egy 625π² mm³ térfogatú negyedtórusz.

## Áthúzás

Az áthúzás két vagy több, különböző síkon lévő szakasz között simít.

1. Rajzolja meg minden keresztmetszetet a saját vázlatában (egy-egy zárt hurok), alapsíkokon, referenciasíkokon (lásd [Referenciasíkok, tengelyek és pontok](topic:reference-geometry)) vagy lapokon.
2. Válassza a {{ui:Továbbiak}}, majd az {{ui:Áthúzás}} lehetőséget. Minden nem használt, egyhurkos vázlat keresztmetszetté válik, az előzmények sorrendjében.

A panelen a keresztmetszetek sorrendben vannak felsorolva (a **Fel** átrendezi, az **Eltávolítás** töröl egyet); a **Vázlat hozzáadása** újabb vázlatot ad hozzá, a **Lap kijelölése** pedig az alkatrész egy sík lapját. Az **Egyenes** lapokat készít a keresztmetszetek között a sima átmenet helyett. Két négyzet között mindkettő ugyanaz a csonkakúp: egy 40 mm-es négyzet 20 mm-es négyzetig, 30 mm magasságon pontosan 28000 mm³.

A különböző oldalszámú keresztmetszeteket (négyzet és háromszög) az OpenCascade párosítja, ez csavarhatja az oldallapokat; a funkció figyelmeztet. A legtisztább eredményért azonos oldalszámú keresztmetszeteket rajzoljon, az egyező sarkoktól indulva.

### Vezetősínek

A vezetősínek azok a görbék, amelyeket az áthúzás oldalainak az első keresztmetszettől az utolsóig követniük kell, egy saját rajzolt púposodáshoz, szűkítéshez vagy kiszélesedéshez.

1. Rajzoljon két vagy több sínt: nyitott görbéket (egyenes, ív, spline), amelyek az első keresztmetszettől az utolsóig futnak, és minden keresztmetszetet pontosan egyszer metszenek. Egy vázlatban több sín is lehet: minden különálló lánc külön sín. Úgy rajzolja a sínt, hogy valóban találkozzon minden keresztmetszettel: fogassa a végpontjait a keresztmetszetek pontjaihoz.
2. Az Áthúzás panel **Vezetősínek** részében jelölje be a síneket tartalmazó vázlatokat, vagy kattintson a {{ui:Modellélek kijelölése sínként}} gombra, és kattintson az alkatrész széleire (az {{key:Esc}} befejezi).

Sínekkel az áthúzás a keresztmetszeteken és a síneken átmenő Gordon-felület (lásd [Felületek görbehálón keresztül](topic:gordon-surfaces)), amelyet a két végén lapos fedéllel zárnak testté. A panel megmutatja, mennyire pontosan követi őket. Ilyenkor minden keresztmetszetnek vázlatnak kell lennie (pont vagy lap nem vehet fel sínt), és az **Egyenes** nem alkalmazható. Az a sín, amely egy keresztmetszettől több mint 0,01 mm-rel tér el, visszautasításra kerül, a rést megjelölve.

Ellenőrizve: két kör (20 mm és 10 mm átmérővel, 40 mm távolságra) négy egyenes sínnel a csonkakúp térfogatát 0,000002%-on belül adja; 5 mm-rel kidudorodó ívek olyan hordót adnak, amely minden sínt 0,00001 mm-en belül követ.

## Dőlésszög

A dőlésszög megdönti a lapokat, hogy az alkatrész kijöjjön az öntőformából.

1. Válassza a {{ui:Továbbiak}}, majd a {{ui:Dőlésszög}} lehetőséget (vagy előbb jelöljön ki lapokat a {{key:Shift}}+kattintással). Ha nincs kijelölés, kijelölési módban van: kattintson minden megdöntendő lapra, majd nyomja meg a {{ui:Kész}} gombot.
2. Adja meg a **Szög (°)** értékét, a **Semleges sík** beállítását (ahol a lapok megtartják a méretüket) és a **Húzási irány** beállítását (alapértelmezés: a semleges sík normálisa).

A pozitív szög a lapot a húzási irány mentén befelé dönti, és anyagot távolít el; a negatív hozzáad. A semleges sík kezdetben a Felső sík. Ebben a verzióban csak sík lapok dönthetők meg: a henger, a kúp vagy a szabad formájú lap ezt írja: „Dőlésszög: ebben a verzióban csak sík lapok (a háló-kernel építi meg).” A 100 × 100 × 50-es tömb alja körül 5°-kal megdöntött négy oldala pontosan h/3·(a² + b² + ab) térfogatú csonkakúpot ad, ahol b = a − 2h·tan 5°.

## Üzenetek

| Üzenet | Teendő |
|---|---|
| „A profil síkjának át kell mennie a pálya egyik végpontján …” | Mozgassa a profilvázlatot a pálya kezdő (vagy végső) pontjára |
| „A pálya hiányos: görbéi nem illeszkednek egymás végére …” | Illessze össze a pálya görbéit; külön vázlatokban a végpontjaiknak pontosan találkozniuk kell |
| „Az áthúzási szakasznak pontosan egy zárt hurok kell” | Ossza fel a vázlatot, vagy távolítsa el a plusz hurkot |
| „… nem dönthető meg ehhez a semleges síkhoz …” | A lap párhuzamos a semleges síkkal, vagy nem metszi azt |
| „Dőlésszög: ebben a verzióban csak sík lapok (a háló-kernel építi meg).” | A kijelölt lap görbe. Távolítsa el, és csak sík lapot döntsön meg |

:::note
Még nincs elkészítve: csavarodó végigvezetések, vékonyfalú és felületi végigvezetések, az áthúzás vezetősínjei és végérintő-folytonossága, dőlésszög hengeren, kúpon és szabad formájú lapokon.
:::
