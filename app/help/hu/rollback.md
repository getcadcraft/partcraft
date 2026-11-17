---
title: Visszagörgetés és előregörgetés az előzményekben
summary: Mozgassa a visszagörgetési sávot egy jellemzővel egyszerre felfelé és lefelé, hogy lássa az alkatrész felépülését, szúrjon be jellemzőket a közepébe, és térjen vissza a végére.
keywords: visszagörgetés, visszagörgetési sáv, előregörgetés, előzmények léptetése, előzmények, jellemző beszúrása, befagyasztás
from: 9a366cae
---

A visszagörgetési sáv határozza meg, hogy az előzmények mekkora része épül fel. A sáv alatti jellemzők szürkék, és nincsenek felépítve; az új jellemzők a sávnál kerülnek be.

## Egy jellemző lépésenként

Ha az alkatrész látszik a képernyőn (nincs nyitva vázlat vagy rajz):

| Művelet | Eredmény |
|---|---|
| {{key:[}} vagy a felfelé nyíl gomb az alkatrész neve mellett | A sáv egy jellemzővel feljebb lép |
| {{key:]}} vagy a lefelé nyíl gomb | A sáv egy jellemzővel lejjebb lép |
| {{key:End}} vagy a sáv a végére gomb | Minden jellemző újra felépül |

Az állapotsor megmutatja, hol van a sáv, például: „Visszagörgetési sáv a Sketch1 után: 2 jellemzőből 1 épült fel.” A gombok ki vannak kapcsolva, ha a sáv arra az irányba nem mozdulhat tovább.

Ezt úgy is megteheti, hogy bármely jellemzőn kiválasztja a {{ui:Visszagörgetés idáig}} parancsot, vagy az előzményekben a **Visszagörgetési sáv · előregörgetés** elemre kattint.

## Jellemző beszúrása a közepébe

1. Lépésenként húzza vissza a sávot addig, amíg oda nem kerül, ahová az új jellemző tartozik.
2. Adja hozzá a jellemzőt: a sávnál kerül be.
3. Nyomja meg az {{key:End}} gombot, hogy az előzmények többi részét az új jellemzőre építse.

A sáv minden mozdulata egy lépés, amelyet a {{key:Mod+Z}} gombbal visszavonhat. A sáv helye mentésre kerül a fájlban, így az alkatrész visszagörgetett állapotban is elküldhető. A parancssori eszköz is mozgatja: `partcraft rollback part.json` és `partcraft forward part.json --end`.
