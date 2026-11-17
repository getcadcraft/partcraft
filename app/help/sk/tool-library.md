---
title: Knižnica nástrojov
summary: Uložte nástroje, ktoré používate, v prehliadači, aby ich mohla mať každá súčiastka, a presúvajte knižnice nástrojov medzi počítačmi ako súbor JSON.
keywords: knižnica nástrojov, nástroje, export, import, JSON, uložiť nástroje, číslo T, stopková fréza, dielenské nástroje, uložiť, zoznam nástrojov
from: 8b9f2483
---

Karta **Nástroje** v pracovnom priestore Manufacture zobrazuje nástroje súčiastky. V časti **Knižnica nástrojov** si môžete uchovať vlastné nástroje aj mimo jednej súčiastky:

- {{ui:Uložiť tento nástroj}} pridá vybraný nástroj do **Moje uložené nástroje**; {{ui:Uložiť všetky nástroje tejto súčiastky}} pridá všetky. Moje uložené nástroje sa uchovávajú v tomto prehliadači a sú k dispozícii pre každú súčiastku. Nástroj, ktorý ste už uložili (rovnaký druh, veľkosť, drážky a prepísané hodnoty), sa neuloží dvakrát.
- {{ui:Pridať do tejto súčiastky}} vloží zvolený uložený nástroj do súčiastky. Ak jeho číslo T už používa iný nástroj v súčiastke, dostane najbližšie voľné číslo a panel to oznámi. {{ui:Odstrániť z mojej knižnice}} ho zruší v zozname uložených (nie v súčiastkach, ktoré ho už majú).
- {{ui:Exportovať nástroje…}} zapíše nástroje súčiastky ako súbor `.json`; {{ui:Importovať nástroje…}} pridá nástroje z takéhoto súboru do súčiastky, s rovnakými pravidlami (nástroj, ktorý tam už je, sa preskočí; obsadené číslo T sa presunie). Súbor obsahuje veľkosti, drážky, materiály a prepísané posuvy a rezné rýchlosti, ktoré ste zadali; nemá identifikátory. Použite ho na presun nástrojov dielne do iného počítača alebo na ich odovzdanie kolegovi.

Ak prehliadač knižnicu neuchová (úložisko je vypnuté alebo plné), uloženie to oznámi a na zachovanie slúži **Exportovať nástroje**. Súbor musí byť knižnica nástrojov PartCraft tejto verzie alebo staršej, s najviac 500 nástrojmi s platnými veľkosťami; všetko ostatné sa odmietne s uvedením dôvodu.

Rezné rýchlosti a posuvy na zub, ktoré prichádzajú s nástrojom, sú počiatočné hodnoty; pozri [Vytvorenie dráh nástroja a G-kódu](topic:manufacture).
