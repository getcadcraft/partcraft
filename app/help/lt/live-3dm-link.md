---
title: Laikyti .3dm modelį gyvą
summary: Keiskite modelį programoje, kuri jį sukūrė, ir stebėkite, kaip PartCraft kūnas seka: iš Rhino 8 ar Grasshopper apibrėžimo, o jūsų elementai perkuriami ant naujos formos.
keywords: rhino, grasshopper, gyvas ryšys, gyva jungtis, 3dm, nurbs, parametrinis, ryšys, sinchronizavimas, scenarijus, siuntimas, importuotas kūnas
from: cf4dc9b2
---

Toliau formuokite modelį ten, kur jį modeliuojate, o gamybą, tikrinimą ir dokumentaciją tvarkykite čia. Kiekvienas pakeitimas kitoje programoje pakeičia vieną importuotą kūną PartCraft, o po jo esantys elementai perkuriami ant naujos formos.

:::note
Ryšiui reikia **CadCraft Studio** tame pačiame kompiuteryje. Naršyklės skirtukas negali užmegzti ryšio. Niekas nesiunčiama internetu: scenarijus kalba su Studio šio kompiuterio adresu, naudodamas prieigos raktą.
:::

:::warning
Šis ryšys išbandytas su scenarijaus failų rašytuvu ir pakaitine kita programa, dar ne pačiame Rhino ar Grasshopper. Jei ten kas nors nepavyks, pasakykite mums, ką rodė pranešimas.
:::

## Nustatymas

1. Studio programoje atidarykite PartCraft. {{ui:Parametrai}} › {{ui:PartCraft}} › {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti PartCraft**, tada **Redaguoti**.
2. Studio programoje pasirinkite {{ui:Prijungti asistentą}}. Ji parodys adresą ir prieigos raktą, kurį įklijuosite žemiau.
3. Atsisiųskite scenarijų: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iš Rhino

1. Paleiskite `cadcraft_link.py` Rhino scenarijų redaktoriuje (Python 3 Rhino 8).
2. Pirmą kartą įklijuokite adresą ir prieigos raktą. Jie saugomi faile `.cadcraft-link.json` jūsų namų aplanke, niekada modelyje. Studio kiekvieną kartą paleidžiant sukuria naują raktą, todėl tada scenarijus klaus iš naujo.

Norėdami sustabdyti, paleiskite scenarijų dar kartą.

## Iš Grasshopper

Pirmiausia vieną kartą paleiskite scenarijų Rhino, kad adresas ir raktas būtų įrašyti.

1. Pridėkite Script komponentą (Python 3) ir įklijuokite į jį visą `cadcraft_link.py`.
2. Nustatykite šiuos įėjimus: `G` (geometrija, su sąrašo prieiga), `N` (pavadinimas, neprivaloma), `On` (loginis perjungiklis) ir `Target` (neprivaloma: `model` arba `part`, jei abi programos atidarytos).
3. Nustatykite `On` į true.

Kiekvienas skaičiavimas siunčia `G` ir pakeičia tai, ką komponentas siuntė paskutinį kartą.

## Kaip čia veikia

- **Vienas kūnas.** Viskas, kas matoma modelyje, tampa vienu importuotu elementu, kaip [atidarant .3dm failą](topic:open-3dm-files).
- **Jis turi užsidaryti.** PartCraft užpildo mažas skyles ir plokščias angas, o kita programa apie tai informuojama skaičiumi. Jei modelis vis tiek neužsidaro, PartCraft palieka turėtą kūną, o būsenos juostoje tai nurodoma. Kitas pakeitimas, kuris užsidaro, jį atnaujina.
- **Baikite, ką darote.** Eskize ar brėžinyje atnaujinimai atmetami ir bandomi iš naujo; jie atkeliauja, kai grįžtate į modelį.
- **Anuliavimas.** Atnaujinimai, sekantys vienas kitą per dvi sekundes, sudaro vieną anuliavimo žingsnį.
- **Įrašymas.** Detalės failas išsaugo ryšį. Po atidarymo iš naujo paleiskite scenarijų, ir tas pats elementas atsinaujins.

**Tik viena kryptimi.** Pakeitimai čia į kitą programą negrįžta.

## Jei kas nors nepavyksta

- **„Nėra ModelCraft ar PartCraft lango, kuris tai leistų“:** atlikite 1 nustatymo žingsnį.
- **„Studio atmetė raktą“:** Studio buvo paleistas iš naujo. Nukopijuokite naują raktą ir paleiskite scenarijų dar kartą. Grasshopper atveju pirmiausia paleiskite jį Rhino.
- **„Nepavyksta pasiekti CadCraft Studio“:** Studio nevykdomas arba adresas pasikeitė.
