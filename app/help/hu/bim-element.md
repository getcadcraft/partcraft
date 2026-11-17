---
title: BimCraft-elem tervezése és visszamentése
summary: A BimCraft-ból küldött alkatrész a körülötte lévő épülettel, szürkén és csak olvashatóan nyílik meg. Módosítsa, majd mentse vissza, hogy a BimCraft elfogadhassa az új alakot.
keywords: bimcraft, bim, elem, küldés, visszamentés, hivatkozás, épület, környezet, szomszédok, megtámasztás, konzol, ifc, elfogadás
from: 0978fe53
---

## Mit fog csinálni

Dolgozzon egy BimCraft-modellből származó alkatrészen, annak helyén az épületben, és küldje vissza az új alakot.

## Lépések

1. A BimCraft-ban jelöljön ki egy elemet, majd válassza a {{ui:Part links}} › {{ui:Send to PartCraft}} menüpontot. A PartCraft új alkatrészként nyitja meg. Az állapotsor azt jelzi, hogy ez BIM-elem.
2. A környező elemek (3 m-en belül) szürkén jelennek meg. Ezekhez igazodva tervezhet. Nem jelölheti ki vagy módosíthatja őket, és nem mentődnek el az alkatrészfájlba.
3. Módosítsa az alkatrészt a szokásos módon (vágás, hozzáadás, fúrás, tükrözés). Origója és tengelyei az elemé, így az alkatrész oda kerül vissza, ahol eredetileg állt.
4. Válassza a {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}} menüpontot. Az állapotsor jelzi, melyik revíziót küldte el.
5. A BimCraft-ban az elem módosultként jelenik meg, amíg azt el nem fogadják.

## Amit látnia kell

- Az alkatrész megtartja a hivatkozását a fájlban. Ha később megnyitja, az állapotsor továbbra is jelzi, hogy BIM-elem. A szürke épület akkor jelenik meg újra, amíg a böngésző őrzi a csomagot, amellyel elküldték.
- Újabb visszamentéskor a 2., a 3. stb. revízió kerül elküldésre. A BimCraft a legújabbat tartja meg.

## Jó tudni

- A forma hálóként, milliméterben, az elem saját tengelyeiben kerül vissza. A jellemzők a PartCraft-ban maradnak.
- A {{ui:Save back to BimCraft}} nem tesz semmit olyan alkatrésznél, amely nem a BimCraft-ból származik.
- Szilárdtest nélküli alkatrész nem küldhető el.
- Mindkét alkalmazásnak ugyanabban a böngészőben kell nyitva lennie: semmi nem töltődik fel, a két oldal adja át egymásnak az elemet.
