---
title: Uloženie, opätovné otvorenie a práca ďalej
summary: Uložte súčiastky a zostavy do počítača, pomenujte ich, otvorte ich znova tlačidlom, klávesom alebo presunutím, uchovávajte verzie a nestrácajte prácu v karte prehliadača.
keywords: uložiť, otvoriť, znova otvoriť, načítať, stiahnuť, verzie, záloha, premenovať, názov súboru, stratená práca, opustiť stránku, partcraft.json, partcraft-asm.json, nová súčiastka
from: c18a5abc
---

PartCraft nič neuchováva medzi návštevami. Vaša súčiastka žije v karte prehliadača, kým ju neuložíte ako súbor, a vráti sa, keď tento súbor otvoríte.

## Uložiť súčiastku

1. Pomenujte súčiastku: kliknite na prázdne miesto v zobrazení, aby nebolo nič vybrané, potom napíšte **Názov** v pravom paneli a stlačte {{key:Enter}}. Nadpis histórie sa podľa toho zmení.
2. Stlačte {{key:Mod+S}} alebo zvoľte {{ui:Uložiť}}.
3. Prehliadač stiahne `<name>.partcraft.json`. Stavový riadok hlási: "Súbor Bracket.partcraft.json bol uložený (celá história; otvorte ho tu, ak chcete pokračovať v úpravách)."

Ak je otvorený náčrt, uložením sa najprv zavrie.

Súbor obsahuje každý náčrt, väzbu, kótu a prvok, potlačené prvky, pozíciu lišty návratu (rollback), nastavenia listu výkresu a poznámky GD&T a celý text každého importovaného telesa STEP. Zoznam späť sa neukladá.

## Uložiť zostavu

V zostave tlačidlo {{ui:Uložiť}} alebo {{key:Mod+S}} stiahne súbor `<názov zostavy>.partcraft-asm.json`. Každá súčiastka je v ňom uložená: na opätovné otvorenie nepotrebujete samostatné súbory súčiastok.

Keď upravujete súčiastku zo zostavy, {{key:Mod+S}} uloží túto súčiastku samostatne ako `.partcraft.json`. Ak chcete uložiť celú zostavu, najprv zvoľte {{ui:Späť}} a potom uložte.

## Opätovné otvorenie

Ktorákoľvek z týchto možností:

- zvoľte {{ui:Otvoriť}} alebo stlačte {{key:Mod+O}} a vyberte súbor;
- presuňte súbor z {{pick:mac=Finder|windows=Prieskumníka súborov|linux=váš správca súborov}} do 3D zobrazenia (zobrazí sa "Presunutím súčiastky PartCraft ju otvoríte").

PartCraft rozpozná súčiastky od zostáv podľa obsahu, takže sa obe otvárajú rovnako. Súbor `.step` alebo `.stp` sa otvorí ako importované teleso: pozri [Otvorenie súboru STEP a práca na ňom](topic:import-step). Stavový riadok potvrdí: "Otvorené: Bracket.partcraft.json, 7 prvkov." alebo "Otvorené: Hinge.partcraft-asm.json, 3 súčiastky, 2 spoje."

Ak súčiastka na obrazovke má neuložené zmeny, PartCraft sa najprv opýta: {{ui:Zrušiť}}, {{ui:Zahodiť zmeny}} alebo {{ui:Najprv uložiť}}.

:::warning
Pred otvorením súboru súčiastky zavrite zostavu ({{ui:Zavrieť}}). Ak otvoríte súčiastku, kým je na obrazovke zostava, súčiastka sa načíta za zostavou a uvidíte ju až po zavretí zostavy. Otvorenie súboru zostavy tiež nahradí neuloženú zostavu bez opýtania, takže ju najprv uložte.
:::

## Začať od začiatku

{{ui:Nový}} vytvorí prázdnu súčiastku "Part1". Ak sú neuložené zmeny, najprv sa opýta, a zavrie otvorenú zostavu (ak je neuložená, opýta sa aj na ňu).

## Uchovávanie verzií

Každé uloženie je nové stiahnutie, takže verzie môžete uchovávať jednoducho tak, že si necháte súbory:

- Pred uložením dajte do názvu verziu alebo dátum: "Bracket rev B".
- Prehliadač môže pridať " (1)", " (2)", keď súbor s rovnakým názvom už je v priečinku na stiahnutie. Najnovší je ten s najvyšším číslom, alebo skontrolujte dátum v {{pick:mac=Finder|windows=Prieskumníkovi súborov|linux=váš správca súborov}}.
- Hotové súbory presuňte z priečinka na stiahnutie do priečinka projektu.

Pozri [Kde sú vaše súbory](common:your-files), kde sa stiahnuté súbory ukladajú v jednotlivých systémoch.

## Neprísť o prácu

- Uložte pred zavretím karty, obnovením stránky alebo ak necháte počítač dlho spať. Prehliadač sa pri pokuse o zavretie s neuloženými zmenami opýta "Opustiť stránku?", ale pri páde alebo zatvorenom notebooku nedostanete žiadne upozornenie.
- Súkromné alebo inkognito okná fungujú, ale nič iné sa nemení: súbor je stále jedinou kópiou.
- Ukladanie do cloudu a história verzií zatiaľ nie sú k dispozícii.
