---
title: Dőlésszög ellenőrzése formázáshoz és öntéshez
summary: Az alkatrész színezése a dőlésszöge szerint a forma kihúzási irányához képest, annak megtekintése, mely felületek szabadulnak ki, melyek igényelnek több dőlést, és melyek szabadulnak ki a másik félformából, mindegyik felület arányával.
keywords: dőlésszög-elemzés, dőlésszög, kúposság, forma, öntőforma, présöntés, befecskendezéses formázás, húzóirány, osztósík, alámetszés, kiszabadítás, dőlésszög ellenőrzése
from: 6a106f83
---

Formában, présöntő szerszámban vagy homoköntésben készült alkatrészeknek **dőlésszög** kell: a falak kissé megdőlnek, hogy az alkatrész kicsússzon. A **dőlésszög-elemzés** minden felületet színez aszerint, hogy mennyire dől el attól az iránytól, amerre a forma nyílik (a **húzóirány**).

## Bekapcsolás

1. A Tervezés munkaterületen nyissa meg a {{ui:Nézetek}} részt, és válassza a {{ui:Dőlésszög-elemzés}} lehetőséget.
2. Állítsa be a **Húzóirány** értéket: azt az irányt, amerre a forma nyílik, az X, Y vagy Z tengely mentén, bármelyik irányban, vagy a **Merőlegesen egy kiválasztott lapra** értéket: nyomja meg a {{ui:Lap kijelölése}} gombot, és kattintson az alkatrész egyik síklapjára.
3. Állítsa be a **Minimális dőlésszög** értéket fokban: a legkisebb dőlést, amelyre az eljárásának szüksége van (gyakran 1° és 3° között).

Az alkatrész a következőképpen színeződik:

| Szín | Jelentése |
|---|---|
| Zöld: **Pozitív dőlés** | A húzóirány felé legalább a minimum mértékben dől: ebből a formafélből szabadul ki |
| Okker: **Dőlés szükséges** | A minimumon belül dől bármelyik irányba, például egy függőleges fal: itt adjon dőlést |
| Piros: **Negatív dőlés** | A húzóiránytól legalább a minimum mértékben dől el: a másik formafélből szabadul ki, vagy alámetszés, ha az alkatrésznek egy félformából kell kijönnie |

Minden osztály felülete az alkatrész teljes felületéhez viszonyított arányával látszik mellette. A **Húzóirány megfordítása** a forma másik feléből nézi: a zöld és a piros felcserélődik.

A görbe felületeket pontonként értékeli, így a húzóirányra keresztben fekvő henger mentén olyan sáv látszik, amely az oldalain dőlést igényel.

A színek követik az alkatrész változásait. Az {{key:Esc}} vagy a {{ui:Bezárás}} kikapcsolja az elemzést; az alkatrész semmit sem ment el.

:::tip
Dőlés hozzáadásához használja az okker felületeken a {{ui:Dőlésszög}} jellemzőt (lásd [Végigvezetés, áthúzás és dőlésszög](topic:sweep-loft-draft)), majd ellenőrizze újra.
:::
