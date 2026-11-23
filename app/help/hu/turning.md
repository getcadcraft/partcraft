---
title: Esztergálás esztergán
summary: Homlokoljon, nagyoljon, simítson, horonyt vágjon, levágjon, meneteljen és fúrjon egy esztergált alkatrészt abból a körvonalból, amelyet az forgás közben ad. Eszterga-szerszámok, fordulatonkénti előtolások, esztergaprogram-utófeldolgozók, és mi nincs bizonyítva.
keywords: esztergálás, eszterga, esztergál, homlokolás, nagyolás, simítás, horony, horonyvágás, levágás, leválasztás, menet, menetvágás, g32, g33, g96, állandó felületi sebesség, css, orrsugár, lapka, rúd, tokmány, átmérő, fordulatonkénti előtolás, g71, g76
from: d8cc53b0
---

A Gyártásban hét művelet van esztergáláshoz. Bármely alkatrészre működnek: amit vágnak, az a **körvonal, amelyet az alkatrész a középpontja körül forogva ad**, így egy nem kerek alkatrész olyan kerek alakra esztergálódik, amely tartja.

**Ezt itt semmi nem futtatta esztergán.** A pályákat a tesztek a geometriához ellenőrzik; a két eszterga-utófeldolgozó a vezérlők dokumentált kódjait követi. A programot a vezérlője saját szimulátorában és előbb levegőben bizonyítsa.

## Beállítás

A **Beállítás** lapon:

- **Szerszámtengely** az orsó tengelye, az eszterga Z-je. Az alkatrész eleje +Z-n van; a tokmány a másik végét fogja.
- **Nyersanyag**: válassza a {{ui:Henger}}t, a rudat. A felső ráhagyása az, amit a homlokolás eltávolít.
- **Munkadarab-nullpont**: egy nyersanyag-felső vagy modell-felső középpont a Z0-t az elülső lapra teszi; ez a szokásos hely.
- **Vezérlő**: {{ui:Fanuc-style lathe (.nc)}} vagy {{ui:LinuxCNC lathe (.ngc)}}. Egy marási utófeldolgozó visszautasít egy esztergaprogramot, és ezt jelzi.
- **Maximális orsófordulatszám**: a határ, amely alatt a felületi sebességet tartja.

A Gyártás eszköztárában a {{ui:Továbbiak}} gomb felsorolja a hét esztergálási műveletet a **Műveletek** lap tetején. Az első, amelyet hozzáad, saját szerszámot hoz: egy **eszterga-lapkát** (orrsugár, lapkaszög, vágóél-szög) vagy egy **horonyvágó pengét** (szélesség, sarokradiusz, milyen mélyre ér). Ezeket a **Szerszámok** lapon módosítsa. Az előtolások fordulatonként értendők, a sebesség pedig m/perc felületi sebesség, amelyet a vezérlő tart, ahogy az átmérő változik; adjon a szerszámnak saját fordulatszámot, ha rögzíteni akarja a sebességet.

## A műveletek

| Művelet | Mit csinál |
|---|---|
| {{ui:Lap}} | Homlokolja a rúd elejét a munkadarabig, lépésenként, külsőtől a középpont kicsit túlig. |
| {{ui:Nagyolás}} | Z mentén menetek egy **vágási mélységnyire** egymástól, a körvonalig plusz a **hagyandó anyag**; majd egyszer a körvonal mentén, a lépcsők lerántásához. A két váll közötti völgybe egy vágási mélységnyi merüléssel lép be. |
| {{ui:Felületkezelés}} | Egy menet a körvonal mentén, a szerszám előtolásának egy töredékével. |
| {{ui:Horony}} | A pengét egymás mellé merítve vág mindenhová, ahol több anyag van, mint amennyit a még meglévő nyersanyag határa enged: azokat a hornyokat, amelyeket a lapka nem ért el. **Ettől / Eddig Z** szűkíti. |
| {{ui:Levágás}} | A hátlap mögött vágja le az alkatrészt, a középpont kicsit túlig, ha beállította, csúcsokkal. |
| {{ui:Menet}} | Külső menet: külső átmérő, menetemelkedés, hossz, menetek száma. A 0 mélység 0,6134 × menetemelkedést jelent (60°-os menet). Minden menet ugyanakkora forgácsterületet vesz le; a rugóként futó menetek az utolsót ismétlik. |
| {{ui:Fúrás}} | Fúró a középvonalon egy mélységig, csúcsokkal. |

## Hogyan tartja a szerszám távol az alkatrésztől

A lapkát abban kezeli, ami: az orrköre, és mögötte a hátsó él, egy egyenes vonal, amelynek szöge 180° mínusz a vágóél-szög és a lapkaszög. Ezt az alakot minden Z menti pontnál a körvonalra engedik le, és a pálya ott van, ahol megáll. Így:

- **Az orrsugár már benne van a pályában.** Az utófeldolgozók nem írnak `G41`-et vagy `G42`-t; a koordináták a szerszám programozott pontja (a négyzet sarka az orr körül).
- A lapka **nem tud követni olyan falat, amely meredekebb a hátsó élénél**. Egy váll mögötti horony érintetlen marad, és a simítási művelet megmondja, mennyi részét nem érte el. A {{ui:Horony}} művelet ezt elvégzi.
- A nyersanyagot Z mentén minden vágás után követik, így a nagyolás nem vág levegőt, a horonyvágás megtalálja, mi maradt, és minden művelet megmutatja, mennyi anyagot vett el, és vágott-e az alkatrészbe.

## Korlátok

- **Csak külső esztergálás**: nincs belső fúró rúd, nincs belső horony vagy menet, nincs homloki horony.
- Egy orsó, az alkatrész −Z-n tartva. Nincs al-orsó, nincs élő szerszám, nincs C vagy Y tengely, nincs állómű- vagy farokpánt-mozgás.
- Az utak egyenes mozgások: a görbék a tűrésen belül rövid egyenesek (nincs `G2`/`G3`), a nagyolás és a menetvágás menetenként íródik (nincs `G71` vagy `G76` ciklus).
- A menetvágás egyenes menetekből áll, egyenes kihúzással a végén; adjon a menetnek kifutóhornyot. A menet nem látszik a nyersanyagon.
- A középre fúrás nem változtatja a nyersanyag-modellt.
- A tartó, a revolver és a tokmány nincs ellenőrizve. Állítsa be a **Z-nél megállás**t, hogy a szerszám távol maradjon a pofáktól.
- Az előtolások és fordulatszámok kezdőértékek, ahogy a marásnál.
