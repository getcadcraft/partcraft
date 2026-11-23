---
title: 3D nagyolás és maradékanyag-megmunkálás
summary: Távolítsa el a nyersanyagot a teljes modell körül, szintenként, lapos, lekerekített sarkú vagy golyós véggyalu-maróval, a simításra hagyott anyaggal, majd hagyja, hogy egy kisebb szerszám csak ott vágjon, ahol az első nem hagyott anyagot. Mit garantálnak a pályák, és mit nem.
keywords: 3d nagyolás, nagyolás, nagyolás, maradékanyag-megmunkálás, maradékanyag-nagyolás, megmaradt nyersanyag, hagyandó anyag, mélységi lépés, szintek, z-szint, vízszintes, rámpa, merülés, bemarás, kisebb szerszám
from: 29ddc266
---

A Gyártásban két művelet, amelyek a {{ui:Továbbiak}} gomb alatt vannak az eszköztárban, a nyersanyagot a **teljes modell** körül távolítja el 3D-ben, a szerszámot függőlegesen tartva (vagy a művelet saját [szerszámirányában](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). Nincs kijelölésük.

## 3D nagyolás

{{ui:3D nagyolás}} a nyersanyag tetejétől lefelé dolgozik, egy **mélységi lépéssel** egyszerre. Minden szinten mindent eltávolít, amit a szerszám el tud érni anélkül, hogy a modellhez érne: egyenes sorok **oldalirányú lépéssel** egymástól (az átmérő törtrésze), majd egyszer körbe az elérhető terület szélén, így a falak követve vannak, és nem maradnak lépcsőként a síkrajzon.

- **Hagyandó anyag**: mennyire marad a szerszám mindenhol a modelltől a simítási menethez (alapértelmezés 0,5 mm).
- **Szint minden lapnál**: extra szint minden sík lap magasságánál (plusz a hagyandó anyag), hogy egy fenék ne maradjon majdnem egy egész mélységi lépésnyire.
- **Ettől vékonyabb nyersanyag figyelmen kívül**: az ennél vékonyabb anyag, felfelé vagy oldalra, nem ér meg menetet (0,05 mm nagyolásnál, 0,5 mm maradékanyag-megmunkálásnál, hogy a falak mentén maradt hajszál ne küldje körbe a kisebb szerszámot minden falon).
- **Alsó határ**: ennél alacsonyabb magasságban semmi sem vágódik. Üresen a modell alja.

A nyersanyagot **ahogy az előtte lévő műveletek hagyták** veszi kiindulásul: egy homlokolási menet után nem vágja a levegőt, ahol a homlokmaró már járt.

Lejutáskor: ahol a szerszám lefelé menet nyersanyagba ütközne, a saját útján **rámpával** halad a **rámpaszögnél**, előre-hátra legfeljebb két szerszámátmérő szélességben. Ha egy menet ehhez túl rövid, egyenesen lefelé merül a merülési előtolással; a művelet ezeket megszámolja és figyelmeztet, mert egy szerszám, amely a középpontján nem vág, nem tehet ilyet.

## Maradékanyag-megmunkálás

{{ui:Maradék}} ugyanaz a stratégia **egy nagyobb szerszám után egy kisebb szerszámra**. A szimulált nyersanyagot olvassa, és csak ott vág, ahol még áll anyag: a belső sarkokban, ahová a nagyobb szerszám nem fért be, a hornyokban, amelyekbe nem fért bele, és a lejtőkön hagyott lépcsőkben. Máshol nem tesz semmit, így pályája kis része annak, amit ugyanaz a szerszám friss nyersanyagon venne fel.

Tegye a nagyolási művelet után, és a kisebb szerszámot válassza. A munkaterület mindig futtatja azt a nyersanyag-szimulációt, amelyre szüksége van, az előtte lévő műveletekből.

## A pályák minősége

- **Nincs bemarás.** A szerszám pozícióit egy rácson számolják, a szerszámot kicsit nagyobbnak véve (1,4 rácscellával oldalirányban, és a hagyandó anyaggal), így bárhol áll, tiszta a modelltől. A tesztek minden vágási pontot a pontos szerszámmal ellenőriznek a pontos hálón, a nyersanyag-szimuláció pedig minden futás után: nincs bemarás, nincs gyorsjárat anyagon át.
- **Az ára**: a falak a hagyandó anyagnál valamivel többet hagynak, legfeljebb a műveleten „Extra nyersanyag falakon” néven látszó értékig (kb. 0,5 mm egy Ø6-os szerszámnál, kisebbnél kevesebb). A simítási menet ezt elviszi.

Amit ezek a pályák nem jelentenek:

- A sorok egyenes vonalak, nem a munkadarab alakjának eltolásai vagy állandó bekapcsolódású görbék. Több emelés és levegőben futás van, mint egy eltolt vagy adaptív stratégiánál, és minden szint első sora a szerszám teljes szélességén vág. Lapos fenekű zsebekhez az [Adaptív](topic:manufacture) a jobb nagyolás.
- A szerszám szárát és tartóját nem ellenőrzik. Figyelmeztetés jelzi, ha a vágás mélyebb a fogmagasságnál.
- Alámetszéseket nem látnak: a modell az, amit a szerszám a tengelyén lefelé jövet elér. Egy oldal nagyolásához adjon egy második műveletet [döntött szerszámiránnyal](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- A maradékanyag-megmunkálás a nyersanyagot csak annyira ismeri, amennyire a szimuláció rácsa (0,1–2 mm-es cellák, a munkadarab mérete szerint).
- Nagy munkadarabnál a program hosszú (200 mm-es peremnél Ø6-os szerszámmal több mint 100 000 mozgás), és kb. egy percig számol; minden változtatás a munkaterületen újraszámolja az egész programot. Nagyoláshoz a legnagyobb szerszámot használja, amely belefér.
- Ellenőrizze a kimenetet a gépe saját szimulátorában, mielőtt vágna.
