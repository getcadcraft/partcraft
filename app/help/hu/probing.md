---
title: Tapintás: a munkadarab megkeresése és a munkaeltolás beállítása
summary: Tapintson meg egy felső lapot, oldalt, furatot vagy csapot tapintóval, és hagyja, hogy a vezérlő a munkaeltolást oda mozgassa, ahol a munkadarab valójában van, vagy csak mérjen. Mit tud az egyes vezérlő, és mi nem lett bizonyítva.
keywords: tapintás, tapintó, tapintószonda, érintő tapintás, munkaeltolás, g54, g31, g38.2, átugrás, viszonyítási alap, középpont keresése, furat, csap, él, nullázás, mérés, ellenőrzés, g10
from: 1f718b82
---

{{ui:Tapintás}} a Gyártásban egy tapintási ciklust ír a programba: a tapintó érinti a munkadarabot, és a vezérlő a munkaeltolást (G54) mozgatja a különbséggel, vagyis a felület talált helye és a modell szerinti helye között. Utána a műveletek ott vágnak, ahol a munkadarab valójában van.

**Ezt itt semmi nem futtatta gépen.** Az érintés előtti mozgások szokásos mozgások: a tapintót csak magának a tapintási mozgásnak az idején figyelik. Lassan futtassa, előbb levegőben, kézzel a takarmány-megállón.

## Használat

1. A **Szerszámok** lapon az első tapintási művelet egy **tapintót** ad hozzá: a golyó átmérőjét és a tapintási előtolást (100 mm/perc, ha nem állít be mást).
2. Nyomja meg a Gyártás eszköztárában a {{ui:Továbbiak}} gombot, majd a {{ui:Tapintás}} gombot, és kattintson arra, amit meg kell érinteni. Minden kijelölés egy ciklus, a kattintás sorrendjében:

| Kijelölés | A ciklus | Mit állít be |
|---|---|---|
| Egy sík lap, amely a szerszámtengely felé néz | Egy érintés lefelé | Z |
| Egy sík oldallap, X-re vagy Y-ra merőlegesen | Egy érintés a lap felé, kissé a teteje alatt | X vagy Y |
| Egy furat vagy csap a szerszámtengely mentén | Négy érintés (+X, −X, +Y, −Y) | X és Y a középpontjánál |

3. **Az eredménnyel**: {{ui:Munkaeltolás beállítása}} vagy {{ui:Csak mérés}}.
4. **Kezdés ennyivel távolabbról** és **Keresés ennyivel a túlnyúlásig** azt adja meg, mennyire a várt felülettől kezdődik a tapintási mozgás, és mennyit mehet túl rajta a tapintó, mielőtt a vezérlő feladja. A **Mélység** az, mennyire megy a golyó a furat, csap vagy oldallap teteje alá.

Tapintási műveletet az első helyre tegyen, mielőtt bármi vág.

## Mit ír az egyes vezérlő

| Vezérlő | Érintés | Eredmény |
|---|---|---|
| Fanuc-típusú | `G31`, a pozíció a `#101`–`#104` változókban | A munkaeltolás változóit (`#5221`–`#5223`) mozgatja a talált − várt különbséggel. Csak mérés: a különbség a `#110`-ben (és `#111`-ben) marad. |
| LinuxCNC | `G38.2`, a pozíció névvel ellátott paraméterekben | `G10 L2 P1` az új eltolással. Csak mérés: egy `(DEBUG, …)` üzenet. |
| GRBL | `G38.2` | Egy érintés beállítja a tengelyt `G10 L20 P1`-gyel. A GRBL-nek nincsenek változói, ezért **nem tud középpontot számolni**: a fájl ezt megjegyzésben mondja, és nem állít be semmit. |

Az aritmetika az utófeldolgozóé, így módosíthatja: az események a `probe-move` és a `probe-set` ([Szerkeszthető utófeldolgozók](topic:post-processors)).

## Korlátok

- Egy munkaeltolás (G54). Csak a tengelyekre merőleges lapok: nincs szög, nincs sarokciklus, nincs munkadarab-forgatás.
- Nincs szerszámbeállító, nincs törött szerszám ellenőrzés, nincs méret mérése tűréshez képest, nincs jelentés.
- A tapintóhoz nem indul az orsó, a hűtőfolyadék pedig ki marad; semmi nem ellenőrzi, hogy az orsóban lévő szerszám tapintó-e.
- A nyersanyag-szimuláció nem futtat tapintási utat.
- A tapintó saját kalibrációja (golyó-eltolás, tűdeformáció, kioldási irány) a vezérlőé.
