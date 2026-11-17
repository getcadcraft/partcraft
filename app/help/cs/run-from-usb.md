---
title: Spuštění z USB disku
summary: Co inženýrské nástroje zapisují a kam, aby mohla CadCraft Studio běžet z USB flash disku nebo z libovolné složky bez instalátoru a bez práv správce: nastavení, generátory, mezipaměti a soubory dílů a co zůstane na disku.
keywords: usb, přenosné, bez instalátoru, správce, administrátor, nastavení, datová složka, generátory, kde se zapisují soubory, offline, soukromí, přístup k hostiteli
from: 263efc79
---

Inženýrské nástroje (generátory, inženýrská knihovna, kontroly a datové soubory) nepotřebují **práva správce** ani **instalátor**. Zapisují pouze to, co je uvedeno zde, a nic dalšího.

| Co | Kde se uchovává |
|---|---|
| Vaše díly, s vygenerovanými tělesy, datovými listy a kontrolami | Soubor dílu (`.partcraft.json`), tam, kam ho uložíte. |
| Generátory, které jste otevřeli ze souborů | V úložišti samotné aplikace: místní úložiště prohlížeče na webové stránce a složka `data` vedle programu v přenosném Studiu. Nejvýše 20. |
| Nastavení (velikosti voxelů, která jste nastavili, vlákna řešiče, rozvržení) | Ve stejném úložišti aplikace. |
| Datové listy, pole, sítě | Pouze tam, kam je uložíte: stažený soubor skončí, kam zvolíte. |

Nástroje nemají **žádná vlastní síťová volání**: generátory, které se dodávají, jsou soubory ve složce aplikace; knihovna a kontroly běží na vašem počítači ve workeru, který se k síti nedostane, a inženýrská data (vlastnosti vody a vzduchu, materiály) jsou uvnitř aplikace. Generátor, který otevřete ze souboru, se čte na vašem počítači a nikam neodchází.

## Přenosný zip pro Windows a Linux

Přenosné Studio pro Windows uchovává nastavení, mezipaměti a doplňky ve složce `data` vedle programu. AppImage pro Linux je ukládá vedle sebe, pokud vedle něj leží soubor jmenující se `portable`; bez tohoto souboru používá vaši domovskou složku. Přenosná verze pro Mac neexistuje: systém nedovolí aplikaci staženému z internetu zapisovat vedle sebe. Vlastní poznámky k přenosnosti shellu (nápověda `Studio`) uvádějí, co program zapisuje.

## Přístup k hostiteli

Zde se nic nezeptá na přístup k hostiteli. Tiskárny, sériové stroje a USB zařízení jsou oddělená: ptají se, když je úloha potřebuje, a to jednou pro každé zařízení; generátory ani kontroly se jich nedotýkají.
