---
title: Návrat a posun vpred v histórii
summary: Posúvajte lištu návratu po jednom prvku nahor a nadol, sledujte stavbu dielu, vkladajte prvky do stredu histórie a vráťte sa na koniec.
keywords: návrat, vrátiť, posunúť vpred, lišta návratu, prechod históriou, vložiť prvok, zmraziť, história
from: 9a366cae
---

Lišta návratu určuje, koľko histórie sa vytvorí. Prvky pod ňou sú sivé a nevytvorené; nové prvky sa vkladajú pri lište.

## Krok po jednom prvku

Pri zobrazenom diele (žiadny náčrt ani výkres nie je otvorený):

| Akcia | Výsledok |
|---|---|
| {{key:[}} alebo tlačidlo šípky nahor vedľa názvu dielu | Lišta sa posunie o jeden prvok nahor |
| {{key:]}} alebo tlačidlo šípky nadol | Lišta sa posunie o jeden prvok nadol |
| {{key:End}} alebo tlačidlo lišty na koniec | Všetky prvky sa znova vytvoria |

Stavový riadok hovorí, kde lišta je, napríklad "Lišta návratu za Náčrt1: 1 z 2 prvkov vytvorených". Tlačidlá sú vypnuté, keď sa lišta ďalej tým smerom nedá posunúť.

Môžete tiež zvoliť {{ui:Roll back to here}} pri ľubovoľnom prvku, alebo kliknúť na **Lišta návratu · posunúť vpred** v histórii.

## Vloženie prvku do stredu

1. Posúvajte lištu späť, kým nebude stáť tam, kam patrí nový prvok.
2. Pridajte prvok: vloží sa pri lište.
3. Stlačte {{key:End}}, aby sa zvyšok histórie vytvoril nad ním.

Každý posun lišty je krok, ktorý môžete vrátiť klávesom {{key:Mod+Z}}. Miesto lišty sa uloží do súboru, takže diel možno poslať v stave vrátenia. Nástroj na príkazovom riadku ju tiež posúva: `partcraft rollback part.json` a `partcraft forward part.json --end`.
