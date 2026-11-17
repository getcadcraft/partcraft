---
title: Mágneses terek 2D-ben (oktatóanyag)
summary: Számítsa ki egy elektromágnes vagy egy állandó mágnes mágneses terét az elemzőkönyvtárral: futtassa a példákat, olvassa le a fluxussűrűséget, a rés terét, az induktivitást és a húzóerőt, módosítsa a tervet, és készítsen saját modellt tekercsekből, mágnesekből és vasból.
keywords: mágneses, magnetosztatika, mágneses tér, fluxussűrűség, tesla, elektromágnes, szolenoid, tekercs, amperfordulat, vasmag, légrés, permeabilitás, induktivitás, mágneses erő, reluktancia, mágneses kör, vektorpotenciál, elektromágnesség, végeselem, fem, motor, működtető, transzformátor, magnetostatic2d, állandó mágnes, neodímium, ndfeb, ferrit, remanencia, munkapont, visszahajlás, szivárgás, tartómágnes
from: 215f6601
---

A PartCraft elemzőkönyvtára 2D-ben ki tudja számítani tekercsek és vas mágneses terét: olyan dolog keresztmetszetét, amely hosszú, és hossza mentén végig azonos, például egy elektromágnes, egy transzformátormag, egy sínrúd vagy egy motor keresztmetszete. Ez az oktatóanyag lefuttatja a könyvtár elektromágnes-példáját, elolvassa, mit mond, módosítja, megmutatja, hogyan modellezhet saját alakzatot, majd hozzáad egy állandó mágnest.

A Szkript munkaterületet és a [elemzőkönyvtárat](topic:craftscript-library) használja. Nem kell ismernie a CraftScript nyelvet, a példa elmondja, mit csinál az egyes sorok.

## Mit modellezünk

Egy C alakú vasmag, külső mérete 100 × 80 mm, vastagsága 20 mm, jobb szárában 2 mm légréssel. A bal szárára 100 menetes tekercs van tekercselve, amelyen 10 A folyik (1000 amperfordulat). Minden hosszú a képernyőből kifelé mutató irányban, ezért az eredmények **mélységi méterre** vonatkoznak: egy valódi mágnesnél szorozza meg a valódi mélységgel.

A könyvtár `magnetostatic2d` függvénye a mágneses vektorpotenciált oldja meg egy 1 mm-es négyzetekből álló rácson, a mágnest körülvevő levegődobozban, majd ebből számítja ki a **B** fluxussűrűséget (tesla egységben).

## A példa futtatása

1. Válassza a **Szkript** lehetőséget az eszköztár bal oldalán lévő **Munkaterület** mezőben.
2. Nyissa meg a szkriptpanel **Könyvtár** lapját, majd a **Példák** › **Elektromágnes: tér, rés, induktivitás** pontot.
3. Kattintson a {{ui:Megnyitás (csak olvasható)}} gombra, majd nyomja meg az {{key:F5}} billentyűt.

Egy-két másodperc múlva a vászon megjeleníti a fluxussűrűséget, a konzol pedig ezt írja ki:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

A vászon alatti ábra a B_y függőleges fluxussűrűséget mutatja a mag középvonala mentén, balról jobbra: a bal szárban körülbelül −0,55 T (a fluxus lefelé halad benne), az ablakban szinte semmi, a jobb szárban és a résen át +0,55 T (a fluxus felfelé tér vissza). Ugyanaz a fluxus halad át a vason és a résen, ezért a két szárban és a résben közel azonos érték látszik.

## Az eredmények olvasása

- **A tér a résben** 0,543 T. A kézi számítás a magot egyetlen mágneses körnek tekinti, B = μ0 N I / (g + l / μr), ahol g a rés, l a vason át vezető út hossza, μr pedig a vas relatív permeabilitása; ez 0,552 T-t ad. A tér kissé kisebb a kézi számításnál, mert a fluxus kidudorodik a rés körül (szóródás), és a fluxus egy része rövidrezár az ablakon át (szivárgás). Kisebb résnél vagy finomabb rácsnál a két érték közelebb kerül egymáshoz.
- **Az induktivitás** a 100 menetes tekercsé mélységi méterenként 0,154 H, a mezőben tárolt energiából. A körképlet kisebbet ad (0,110 H/m), mert csak a résen átmenő fluxust számolja, a mellette szivárgó fluxust nem.
- **A húzóerő**, amely zárja a rést, egy w szélességű résfelületre B² w / (2 μ0): körülbelül 2300 N méterenként, vagy 117 N egy 50 mm mély mágnesre.
- **A csúcs**, 1,97 T, az ablak belső sarkaiban van, ahol a fluxus éles fordulatot tesz. A modell a vasat lineárisnak tekinti; a valódi elektromos acél körülbelül 1,5–2 T-nál telítődik, ezért ennél nagyobb értékeket inkább figyelmeztetésnek, mint válasznak tekintsen.

:::note
A könyvtár saját tesztjei lefuttatják ezt a példát, és minden PartCraft-módosításkor ellenőrzik a résterét a mágneses kör képletével. A módszer, a hivatkozásai és egyéb ellenőrzései (egy hosszú szolenoid, egy vasmagos szolenoid) a `magnetostatic2d` fejlécében találhatók: kattintson rá a könyvtárban.
:::

## A terv módosítása

1. Kattintson a csak olvasható szkript fölötti {{ui:Másolat készítése}} gombra. A másolat az alkatrésszel együtt mentődik.
2. Módosítson egy értéket a tetején, és nyomja meg újra az {{key:F5}} billentyűt. Próbálja ki:
   - `g = 0.001;` — a rés fele: a résben a tér közel duplájára nő, és a húzóerő is (B²-tel arányos).
   - `mur = 200;` — gyengébb mag: több amperfordulat fogy el a vason.
   - `N = 200;` — kétszer annyi menet: kétszeres tér, négyszeres induktivitás.
   - `h = 0.0005;` — finomabb rács: pontosabb eredmények, körülbelül négyszeres idő.

Minden futtatás lecseréli a vásznat. A szkript által létrehozott változók (például `Bgap`, `L`, `F`) a **Változók** listában maradnak a saját számításaihoz.

## Saját alakzat modellezése

A példa mindent három listából épít fel, rácsnégyzetenként egy-egy értékkel; ezeket bármely, a rács mentén egyenes vonalakkal rajzolt alakzathoz elkészítheti:

- **Hol van a vas:** az `iron` igaz értéket kap a mag belsejében lévő négyzeteken. A példa téglalapokból építi fel: a `frame & ~window & ~gap` azt jelenti: „a kereten belül, nem az ablakban, nem a résben”.
- **A permeabilitás:** a `1 + (mur - 1) * iron` levegőben 1, a vasban `mur`. Több anyagnak ugyanígy adhat saját értéket.
- **Az áram:** a `J` az áramsűrűség amper/négyzetméterben, pozitív a képernyőből kifelé, negatív befelé. A tekercsnek két oldala van ellentétes előjellel; a példa úgy számolja ki a `J0`-t, hogy az egyik oldal N I-t vigyen.

Ezután a `r = magnetostatic2d(m, permeability, J)` megoldja a feladatot. Az `r.B` az egyes négyzetekben a fluxussűrűség (két oszlop, x és y), az `r.Bmag` a nagysága, az `r.energy` a mélységi méterenként tárolt energia. A `plot(x, y)` vonalat rajzol.

A könyvtár méterben dolgozik, a nézet milliméterben, ezért a tér változatlanul megjelenítve ezerszer túl kicsinek rajzolódna. A példa a rács milliméteres másolatán jeleníti meg (`mm = quadGrid(…)`, majd `show(field(mm, …))`): másolja ezt a két sort.

Alapértelmezés szerint a doboz széle a térben tartja a fluxust: nem lép ki belőle. Legyen a doboz legalább a mágnes két-háromszorosa méretű, hogy ez ne szorítsa össze a teret. Szimmetrikus mágnesnél a felét is modellezheti: a `magnetostatic2d` fejléce megmondja, melyik peremfeltételt kell használni a szimmetriavonalon.

## Állandó mágnesek

A második példa, a **Példák** › **Állandó mágnes vasmagban: munkapont, szivárgás, húzóerő**, ugyanaz a mag, a tekercs nélkül, a bal szár 10 mm-es szelete helyett pedig mágnes áll, felfelé mágnesezve. Futtassa az {{key:F5}} billentyűvel. Ez a kiírás:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **A munkapont.** Az állandó mágnest a **remanencia** Br (az a tér, amelyet megtart, ha vas rövidre zárja: körülbelül 1,2 T a szinterezett NdFeB mágnesnél, 0,4 T a ferritnél) és a visszahajlási permeabilitása (körülbelül 1,05, illetve 1,1) jellemzi. A rés megnyitása lenyomja a visszahajlási egyenesén: itt 1,04 T-ra, a mágnesen belül a H ellentétes irányú a B-vel.
- **Szivárgás.** A szivárgás nélküli kézi számítás 0,97 T-t ad a résben; a modell 0,68 T-t. A mágnes rövid szakaszon erős nyomással hajtja a fluxusát, így sok közülük egyenesen visszatér az ablakon át, ahelyett hogy a résen menne át. A szivárgási tényező megmondja, mennyi: itt 1,53. Zárt zárólemezhez állítsa `g = 0;`-ra: ekkor a mágnes fél százalékon belül dolgozik a kézi számítással.
- **Mágnesek a saját modelljében.** Adja meg a `magnetostatic2d` függvénynek a mágneseket `struct('Br', Br)` alakban, ahol a `Br` rácsnégyzetenként egy sort tartalmaz, a remanenciát x és y irányban tesla egységben (a mágneseken kívül nulla), és a permeabilitási listában adja meg a mágnesnégyzetek visszahajlási permeabilitását:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1,2 T felfelé azokon a négyzeteken, ahol a mag igaz
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Szögben mágnesezett mágnesnél írja a `Br·cos(angle)` és a `Br·sin(angle)` értéket a két oszlopba; kifelé mágnesezett gyűrűnél számítsa ki minden négyzet irányát a helyzetéből. Az `r.H` adja az egyes négyzetekben a H térerősséget.

A modell a mágnest mindig egyenes visszahajlási vonalon tartja, bármilyen erősen hajtják. Egy valódi mágnes, amelyet a térdpontján túl hajtanak (nagy rés, erős tekercs vagy hő miatt), véglegesen veszít az erejéből; a munkapontot a gyártó görbéjével ellenőrizze az adott fokozathoz és hőmérséklethez.

A könyvtár tesztjei két kézi eredményhez hasonlítják a mágneseket: egy kör keresztmetszetű mágnes szabad levegőben (belsejében B = Br / (1 + μr)), és egy vas zárólemezzel lezárt mágnes (a mágneses kör). Mindkettő 1%-on belül van.

## Mit nem tud még

- **Telítődés.** A vas lineáris: kétszer annyi áram, kétszeres tér, korlát nélkül.
- **Lemágnesezés.** A mágnesek egyenes visszahajlási vonalukon maradnak (lásd fent).
- **Örvényáramok** és **veszteségek** (vasveszteség, rézveszteség).
- **Mozgó alkatrészek és nyomaték.** Nincs forgó rotor az állórészben, nincs nyomaték szög függvényében.
- **Kerek alakzatok.** A rács egyforma négyzetekből áll, így az ívelt körvonalak lépcsősen jelennek meg.
- **3D.** Minden egy hosszú dolog keresztmetszete.

A motortervezés (forgó rotor, nyomaték és veszteségek 2D-ben) egy későbbi verzióhoz vizsgálat alatt áll. Lásd: [Még nincs elkészítve](topic:not-built-yet).
