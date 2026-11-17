---
title: Návrat zpět a vpřed v historii
summary: Posouvejte lištu návratu nahoru a dolů po jednom prvku, sledujte, jak se díl staví, vkládejte prvky doprostřed a vraťte se na konec.
keywords: návrat, návrat zpět, návrat vpřed, lišta návratu, procházet historii, vložit prvek, zmrazit, historie
from: 9a366cae
---

Lišta návratu určuje, kolik historie je sestaveno. Prvky pod ní jsou našedlé a nesestavené; nové prvky se vkládají na liště.

## Krok po jednom prvku

Když je díl na obrazovce (není otevřená skica ani výkres):

| Akce | Výsledek |
|---|---|
| {{key:[}} nebo tlačítko se šipkou nahoru vedle názvu dílu | Lišta se posune o jeden prvek nahoru |
| {{key:]}} nebo tlačítko se šipkou dolů | Lišta se posune o jeden prvek dolů |
| {{key:End}} nebo tlačítko přesunu lišty na konec | Všechny prvky se znovu sestaví |

Stavový řádek říká, kde lišta je, například „Lišta návratu za Sketch1: sestaveno 1 z dvou prvků“. Tlačítka jsou vypnutá, když se lišta dál tímto směrem posunout nedá.

Také můžete zvolit {{ui:Vrátit zpět sem}} u libovolného prvku, nebo kliknout na **Lišta návratu · vpřed** v historii.

## Vložení prvku doprostřed

1. Posuňte lištu zpět, až bude stát tam, kam nový prvek patří.
2. Přidejte prvek: vloží se na lištu.
3. Stiskněte {{key:End}}, aby se zbytek historie sestavil na něm.

Každý posun lišty je krok, který můžete vrátit pomocí {{key:Mod+Z}}. Místo lišty se ukládá do souboru, takže díl lze poslat vrácený zpět. Nástroj příkazové řádky ji také posouvá: `partcraft rollback part.json` a `partcraft forward part.json --end`.
