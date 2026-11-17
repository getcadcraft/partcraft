---
title: Méretek módosítása a vázlat megnyitása nélkül
summary: Vezérelje az alkatrészt a jobb oldali panel számaiból: vázlatméretek, mélységek, darabszámok és szögek, hogyan tervezzen úgy egy alkatrészt, hogy a megfelelő számok vezéreljék, és hol veszik át a szerepet a paraméterek és az egyenletek.
keywords: paraméterek, vezérlő méretek, tervezési szándék, méretváltoztatás, egyenletek, globális változók, táblázatos tervezés, konfigurációk, átméretezés, méret módosítása
from: c2ae1a32
---

Egy PartCraft-alkatrész minden mérete később módosítható szám: a vázlatainak méretei és a jellemzőinek beállításai. A vázlat megnyitása nélkül is módosíthatja a méreteit.

## Vázlatméret módosítása a panelről

1. Kattintson egy jellemzőre az előzménylistában, például „Extrude1”-re.
2. A kihúzás saját beállításai alatt a **Vázlatméretek (Sketch1)** felsorolja a vázlat minden méretét: „Távolság”, „Átmérő”, „Szög (°)” és így tovább.
3. Írjon új értéket az egyik mezőbe, és nyomja meg az {{key:Enter}} vagy a {{key:Tab}} billentyűt.

A vázlat az új értékkel újraszámolódik, és az egész alkatrész újraépül. Ha magát a vázlatot jelöli ki, ugyanez a lista jelenik meg **Vezérlő méretek** néven.

A sugárnak vagy az átmérőnek nullánál nagyobbnak kell lennie, a szög pedig 0 és 180 fok között lehet; ha nem, az állapotsor ezt jelzi.

:::tip
Melyik mező melyik? A mezők abban a sorrendben szerepelnek, ahogyan a méreteket létrehozták. Ha nem biztos benne, nyissa meg a vázlatot (kattintson rá duplán), kattintson duplán a méretre a rajzfelületen, és ott módosítsa.
:::

## Írja be azonnal a fő számot

Jelöljön ki egy jellemzőt az előzménylistában (vagy csak adja hozzá), és írjon be egy számot: az a jellemző fő mezőjébe kerül, azébe, amelyet a legtöbbször módosít (a kihúzás **Mélysége**, a forgatás **Szöge**, a furat **Átmérője**, a mintázat **Darabszáma**, a lekerekítés **Sugara**, a héjazás fala). Az {{key:Enter}} billentyűvel állítsa be, az {{key:Esc}} billentyűvel a régi értéket tartja meg. Kihúzás hozzáadásakor az állapotsor ezt írja: „Extrude1 hozzáadva. Módosítsa a számait jobbra, vagy írjon be most egy számot a mélységéhez.”

## A szám módosítása az előzménylistában

Az előzménylista minden jellemző sorában a neve mellett látszik a fő száma: „Extrude1 25 mm”, „Hole1 Ø6.6 átmenő”, „Fillet1 R2”, „LPattern1 4 × 20 mm”. Kattintson duplán a számra (vagy jelölje ki a sort, és nyomja meg az {{key:F2}} billentyűt), és ott nyílik meg egy mező. Írja be az új értéket, és nyomja meg az {{key:Enter}} billentyűt; az {{key:Esc}} a régit tartja meg. Pontosan úgy működik, mint a jobb oldali mező: ugyanazok a határok, a `=` jellel egyenlet is írható, például `=width/2`, és egy lépésben visszavonható.

Kihúzásnál, furatnál vagy mintázatnál a sor bármely pontján duplán kattintva megnyílik a mező. Lekerekítésnél, letörésnél, héjazásnál, dőlésszögnél vagy menetnél a névre duplán kattintva továbbra is az élek vagy lapok kiválasztása indul, ezért a számra duplán kattintson. A vázlatoknak nincs száma a sorban: duplán kattintva a vázlat nyílik meg.

## Húzza a nézetben

Jelöljön ki egy kihúzást az előzménylistában (vagy kattintson rá a nézetben, majd a sorában), és egy narancssárga nyíl jelenik meg a végfelületén, mellette a mélység mezővel. Húzza a nyilat: az alkatrész követi a húzást, az elengedés pedig az új mélységet egy lépésben állítja be ({{key:Mod+Z}} visszaállítja). Húzás közben az {{key:Esc}} billentyűvel visszatérhet a kiindulási helyzetre. A mélység a méretének tized részével változik: 25 mm-es kihúzásnál 1 mm, 3 mm-esnél 0,1 mm lépésekben.

A forgatásnál a forgatás végén ív alakú nyíl jelenik meg: húzza a tengely körül a szög módosításához, egész fokokban, 1° és 360° között.

Vagy kattintson a nyíl melletti mezőbe, írjon be egy értéket (vagy `=` jellel egyenletet), és nyomja meg az {{key:Enter}} billentyűt. Nincs nyíl azon a kihúzáson, amely **Teljes átmenéssel** vagy egy felületig megy, sem egy egyenlet által vezérelt értéknél: ezeket a jobb oldalon módosítsa.

## Az alkatrészt vezérlő számok

| Hol | Mit módosíthat |
|---|---|
| Vázlat | Minden méret: hosszúságok, távolságok, sugarak, átmérők, szögek |
| Kihúzás és kivágás | Mélység, véghelyzet, irány, főtest vagy kivágás |
| Forgatás és forgatott kivágás | Szög, tengely, főtest vagy kivágás |
| Furat | Átmérő, mélység, teljes átmenés, süllyesztés átmérője és mélysége |
| Lekerekítés, letörés, héjazás | Sugár, távolság, fal vastagsága és iránya, valamint az élek vagy lapok |
| Lineáris és körkörös | Darabszám, távolság vagy szög, irány vagy tengely |
| Alkatrész | Görbék (mennyire finoman legyenek facetálva a kerek alakok) |
| Rajz | Hol metsz a metszet, a részlet mérete és léptéke, GD&T-értékek |

## Tervezze meg az alkatrészt úgy, hogy a megfelelő számok vezéreljék

Az Ön által megadott számok azok, amelyeket később módosíthat. Néhány szokás segít abban, hogy a későbbi változtatások a kívánt módon viselkedjenek:

- **Méretezze azt, ami a feladat szempontjából fontos.** Ha egy furatnak 15 mm-re kell maradnia egy széltől, az adott széltől méretezze, ne az origótól.
- **Határozza meg teljesen a vázlatokat.** Így a változás csak azt mozgatja, amit kell (lásd: [A vázlat teljes meghatározása](topic:relations-dimensions)).
- **Használjon kényszereket a szándékhoz.** Két furaton az Egyenlő azt jelenti, hogy egy átmérő vezérli mindkettőt. Szimmetrikus alakoknál tegye az origót a középvonalra, vagy használja a Felezőpontot.
- **Jellemzők által készített lapokra rajzoljon vázlatot.** A kihúzás végfelületén lévő vázlat elmozdul, ha változik a mélység.
- **Mintázzon, ne másoljon.** Egy furat nyolcszor mintázva csak egy átmérőt tartalmaz, amelyet módosítani kell.

## Egynél több számon túl

- **Egy szám több másikat vezérel:** használjon paramétereket és egyenleteket: [Alkatrész vezérlése paraméterekkel](topic:parameters).
- **Egy alkatrész több mérete:** mentse mindegyiket külön [konfigurációként](topic:design-tables); ezek az alkatrészfájlban maradnak meg.
- **Számítás egy számmezőben:** írja be a `=40/2` vagy a `=width / 2` kifejezést. Ez egyenletet hoz létre; lásd: [Egyenletek mindkét irányban](topic:equations-two-way).
- **Hüvelykmértékek:** az alkatrész milliméterben jelenít meg. Egy `=` jellel kezdődő számmezőben vagy paraméterben a `2in` 50,8 értékké alakul.

Lásd: [Ami még nincs elkészítve](topic:not-built-yet).
