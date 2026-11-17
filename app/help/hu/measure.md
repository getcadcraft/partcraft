---
title: Távolságok, szögek és tömeg mérése
summary: Kattintson két elemre a nézetben a legkisebb távolságért, szögért és ΔX, ΔY, ΔZ értékekért; olvassa le egy él hosszát, egy furat átmérőjét, egy lap területét vagy egy pont koordinátáit; kérje le egy alkatrész vagy összeállítás térfogatát, tömegét, tömegközéppontját és tehetetlenségi nyomatékát.
keywords: mérés, távolság, legkisebb távolság, szög, hossz, sugár, átmérő, terület, koordináták, delta, vizsgálat, tömegtulajdonságok, tömeg, súly, tömegközéppont, tehetetlenségi nyomaték, sűrűség, anyag
from: 20bda0b7
---

A **Mérés** minden munkaterületen működik (Tervezés, Forma, Szimuláció, Generatív, Gyártás), és összeállításban is. A **Nézet** csoport {{ui:Nézetek}} menüjében található, vagy nyomja meg az {{key:M}} billentyűt. Egy kártya nyílik meg a nézet bal felső sarkában.

## Egy elem mérése

Kattintson egy csúcsra, élre vagy lapra. A kártya a következőket mutatja:

- **Pont** (csúcs, élfelezőpont vagy körközéppont): X, Y, Z értéke.
- **Él**: egyenes, kör vagy görbe, és a hossza; körnél még a sugár, az átmérő és a középpont.
- **Lap**: sík, henger, kúp stb., és a területe; sík lapnál a normálisa; hengernél a sugara és az átmérője (egy furat mérete). A területek a háló-kernel által készített facetekből (lapocskákból) számítódnak.
- **Az egész test**: tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson az alkatrészre. Megkapja a térfogatát, a területét, a tömegét és a tehetetlenségi nyomatékát (lásd lent).

A mutató 10 képponton belül rátapad a csúcsokra, élfelezőpontokra és körközéppontokra; egy kis kék pont mutatja a rátapadást kattintás előtt. Egy furat középpontjának kijelöléséhez a furat közepére mutasson; a peremének (a körnek) kijelöléséhez a peremre.

## Két elem közötti mérés

Kattintson egy második elemre. A kártya hozzáadja:

- **Legkisebb távolság** és a két legközelebbi pont, a nézetben ezek közötti vonallal.
- **ΔX, ΔY, ΔZ** az első legközelebbi ponttól a másodikig.
- **Szög** két sík lap között (normálisaik között, 0–180°), két egyenes él vagy tengely között (0–90°), vagy egy él és egy lap között.
- **Síkok közötti távolság** két párhuzamos sík lapnál, **Középpont–középpont** két körnél vagy furatnál, **Tengely–tengely** két párhuzamos furatnál vagy hengernél.

A harmadik kattintás új párt kezd. Az {{key:Esc}} törli a kijelöléseket; újabb {{key:Esc}} (vagy a {{ui:Bezárás}}) bezárja a Mérést. A {{ui:Másolás}} az eredményeket tabulátorral elválasztott szövegként a vágólapra teszi, táblázatba illeszthetően.

### Mennyire pontos

A PartCraft a háló-kernellel készíti az alkatrészt, így a távolságokat a háló facetjein számítja, és a kártya **közelítő: a facetekből**-et ír. Síkoknál és csúcsok között pontos, az ívelteknél kissé eltér. A finomabb **Görbék** beállítás közelebb hozza őket. Pontos mérés a valódi felületeken pontos kernelt igényel: ebben a verzióban még nincs elkészítve.

## Tömegtulajdonságok

Válassza a {{ui:Tömegtulajdonságok}} lehetőséget a kártyában vagy a {{ui:Nézetek}} menüben. Alkatrésznél válasszon **Anyagot** a kártyában (acél, alumínium, műanyagok és mások a szokásos sűrűségükkel). Összeállításban minden alkatrész a saját tulajdonságaiban beállított anyagot használja (jelölje ki az alkatrészt, majd az **Anyag** pontot), és az eredmény az összes alkatrészre együtt szól.

A kártya megmutatja a tömeget, a térfogatot, a területet, a tömegközéppontot, a tehetetlenségi tenzort (Ixx, Iyy, Izz, valamint a szorzatokat: Ixy, Iyz, Ixz, kg·mm² egységben, a tömegközéppont körül a világtengelyek mentén) és a főnyomatékokat. Anyag nélkül ugyanazt mutatja egységnyi sűrűségre (mm⁵), tömeg nélkül.

A számok pontosak a háló-kernel által épített háromszögelt testre (az ívelt lapok facetekként), ezért egy kerek alkatrész kissé alacsonyabbnak adódik, és a kártya ezt ki is mondja. Az anyagsűrűségek tipikus kézikönyvi értékek; egy valódi ötvözet vagy fokozat néhány százalékkal eltérhet.

## Korlátok

- A rátapadás olyan pontot is találhat, amely más geometria mögött rejtőzik; ellenőrizze, hogy a kártya azt mutatja-e, amit szánt.
- A Mérés bezáródik, ha vázlatot vagy rajzlapot nyit meg, vagy munkaterületet vált.
