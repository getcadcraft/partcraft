---
title: Vázlatkényszerek és méretek
summary: A PartCraft-vázlat minden kényszere és mérete, a kijelölendő elemek, a jelük és megoldás közbeni viselkedésük.
keywords: kényszerek, kényszer, egybeesés, vízszintes, függőleges, párhuzamos, merőleges, érintő, egyenlő, koncentrikus, felezőpont, rögzítés, távolság, vízszintes távolság, függőleges távolság, sugár, átmérő, szög, jelek, szimbólumok
from: 9831e7be
---

A kényszerek azt rögzítik, hogyan helyezkedik el a geometria más geometriához képest. A méretek a méreteket rögzítik. Kényszer hozzáadásához jelölje ki az elemeket a Kijelölés eszközzel ({{key:S}}), majd válassza a gombját a jobb oldali panelen; méret hozzáadásához használja a Méretezés eszközt ({{key:D}}) vagy a jobb oldali panel méretgombjait. A használatukról: [Vázlat teljes meghatározása](topic:relations-dimensions).

„Görbe” alatt itt kört vagy ívet értünk. Az origó is pontnak számít.

## Kényszerek

| Gomb | Jel | Kijelölés | Hatás |
|---|---|---|---|
| {{ui:• Egybeeső}} | • (csak kijelöléskor vagy hiba esetén látszik) | Két pont | A pontok találkoznak |
| {{ui:• Egybeeső}} | • | Pont és vonal | A pont a vonalon (vagy annak meghosszabbításán) fekszik |
| {{ui:• Egybeeső}} | • | Pont és görbe | A pont a körön vagy íven fekszik |
| {{ui:H Vízszintes}} | H | Egy vonal vagy két pont | A vonal vízszintes, vagy a két pont azonos magasságban van |
| {{ui:V Függőleges}} | V | Egy vonal vagy két pont | A vonal függőleges, vagy a pontok egymás fölött vannak |
| {{ui:∥ Párhuzamos}} | ∥ | Két vonal | A vonalak azonos irányba futnak |
| {{ui:⊥ Merőleges}} | ⊥ | Két vonal | A vonalak derékszögben találkoznak |
| {{ui:T Érintő}} | T | Egy vonal és egy görbe | A vonal érinti a görbét, anélkül hogy átmetszené |
| {{ui:T Érintő}} | T | Két görbe | Érintik egymást, kívülről vagy belülről, a rajz szerint |
| {{ui:T Érintő}} | T | Egy spline és egy vonal, ív vagy spline, amely a spline egyik végéhez csatlakozik | A spline a végén a másik görbe irányában indul |
| {{ui:= Egyenlő}} | = | Két vonal | Azonos hosszúság |
| {{ui:= Egyenlő}} | = | Két görbe | Azonos sugár |
| {{ui:◎ Koncentrikus}} | ◎ | Két görbe | Azonos középpont |
| {{ui:◎ Koncentrikus}} | ◎ | Pont és görbe | A pont a görbe középpontjában van |
| {{ui:M Felezőpont}} | M | Pont és vonal | A pont a vonal közepén van |
| {{ui:↔ Szimmetrikus}} | ↔ | Két pont és egy vonal | A pontok a vonalra tükörképei (a Tükrözés ezeket adja hozzá) |
| {{ui:⚓ Rögzítés}} | ⚓ | Pont, vonal, görbe vagy spline | Pontosan ott tartja, ahol most van (spline esetén a pontjait) |

A vonalak ide a tengelyvonalakat is értik. A rajzolás néhány kényszert automatikusan hozzáad: pontra illesztve az egybeeső lesz, görbére illesztve a pont rajta lesz, a közel vízszintes vagy függőleges vonalak H vagy V kényszert kapnak, a téglalap pedig sarkainak összekapcsolásával érkezik: két H és két V.

A **Rögzítés** gyorsan megakadályozza egy elem mozgását, de az alkatrész ekkor nem tud követni egy másutt történő méretváltozást. Inkább az origóhoz viszonyított méreteket részesítse előnyben.

## Méretek

| Gomb | Kijelölés | Mér | Megjelenítés |
|---|---|---|---|
| {{ui:Távolság}} | Egy vonal | Hossza | Távolság 40 |
| {{ui:Távolság}} | Két pont | A közöttük lévő egyenes távolság | Távolság 40 |
| {{ui:Távolság}} | Pont és vonal | A pont és a vonal távolsága, a vonalra merőlegesen | Távolság 40 |
| {{ui:Távolság}} | Két párhuzamos vonal | A köztük lévő távolság | Távolság 40 |
| {{ui:Vízszintes távolság}} | Két pont vagy egy vonal | Csak a bal-jobb távolság | Vízszintes távolság 40 |
| {{ui:Függőleges távolság}} | Két pont vagy egy vonal | Csak a fel-le távolság | Függőleges távolság 40 |
| {{ui:Sugár}} | Kör vagy ív | Sugara | Sugár R10 |
| {{ui:Átmérő}} | Kör vagy ív | Átmérője | Átmérő ⌀20 |
| {{ui:Szög}} | Két, nem párhuzamos vonal | A köztük lévő szög, 0-tól 180 fokig | Szög 30° |

A Méretezés eszközzel a PartCraft a típust a kattintás és a szám elhelyezése alapján választja ki:

| Amire kattint | Ezt kapja |
|---|---|
| Egy vonal | Hossza; ferde vonal esetén vízszintes, ha a szám a vonal fölé vagy alá kerül, függőleges, ha oldalra |
| Egy kör | Átmérő |
| Egy ív | Sugár |
| Két pont | Távolság; vízszintes vagy függőleges, mint ferde vonal esetén |
| Egy pont és egy vonal | A pont és a vonal távolsága |
| Két vonal | Szög, vagy a távolság, ha párhuzamosak |
| Egy pont és egy kör | Semmi: „Ezeket az elemeket nem lehet együtt méretezni.” Helyette a kör középpontjához méretezzen |

A **Párhuzamos** (távolságként megjelenítve) a Párhuzamos eszközzel készül: a másolt vonalat ezen a távolságon párhuzamosan tartja, vagy a másolt ívet vagy kört ennyivel nagyobb vagy kisebb sugarú koncentrikus helyzetben. Az ugyanazon eltolás többi darabja **O** kényszert kap, és az egy Párhuzamos méretet követi. Lásd: [Splinek, vágás, párhuzamos eltolás és további vázlateszközök](topic:sketch-tools).

A méretértékek milliméterben (vagy fokban) értendők, soha nem lehetnek negatívak. A sugárnak és az átmérőnek nullánál nagyobbnak kell lennie. Távolságnál a 0 érték megengedett: két, 0 távolságra lévő pont egybeesik.

## A megoldás működése

- **Legkisebb mozgás.** Ha egy érték változik, a megoldó a lehető legkevesebbet mozgatja a geometriát. Ha hosszváltozású vonal egyik végét sem tartja semmi, mindkét végén egyenlő mértékben nő.
- **Nincs átfordulás.** A pont és vonal közötti távolságok, a vízszintes és függőleges távolságok, a szögek és az érintés emlékeznek arra, melyik oldalon jöttek létre. Érték módosításakor a geometria soha nem fordul át a másik oldalra.
- **Az ütközések nem bántják az elemeket.** Ha a kényszerek ellentmondanak egymásnak, a vázlat pontosan olyan marad, amilyen volt, az ütköző kényszerek pedig pirosra váltanak.
- **Fölösleges kényszerek** (amelyeket mások már magukban foglalnak) az állapotsorban megnevezésre kerülnek („már következik. Törölje.”), a jellemző pedig figyelmeztetéssel együtt is elkészül.
- **Érintő csatlakozások.** Ahol egy lekerekítő ív közös végpontban találkozik a vonalaival, az érintést olyan alakban oldja meg, amely ott jól meghatározott marad, így a vázlat-lekerekítések nem jelennek meg túlhatározottként.

## Még nem elérhető

Kollineáris, koradiális és átszúrási kényszerek; pont spline-on; vezérelt (hivatkozási) méretek; koordináta- és ívhossz-méretek; méretek közötti egyenletek. Kollineáris vonalakhoz használja a Párhuzamos kényszert 0 távolsággal.
