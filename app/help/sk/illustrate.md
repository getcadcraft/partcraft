---
title: Začnite návod v Ilustrácii
summary: Pracovný priestor Ilustrácia vytvára návody z vášho návrhu: pohľady, rozložené čiarové kresby s bublinami a zoznamom súčiastok, postupné pokyny, animácie a 3D súbor, ktorý môže zákazník otvoriť bez CAD. Návod je samostatný súbor.
keywords: ilustrácia, návod, technická ilustrácia, dokumentácia, rozložený pohľad, kusovník, pokyny, partcraft-manual
from: e447e0ab
---

**Ilustrácia** je pracovný priestor pre dokumenty, ktoré sa potrebujú k návrhu: rozložené pohľady s bublinami a zoznamom súčiastok, čiarové kresby pre návody, postupné pokyny, animácie a 3D súbor, ktorý zákazník otvorí bez CAD. Vyberte {{ui:Ilustrácia}} v prepínači {{ui:Pracovný priestor}} na začiatku panela nástrojov.

Návod je samostatný súbor (`<name>.partcraft-manual.json`). Uchováva kópiu tvaru každej súčiastky, strom produktu, vlastnosti súčiastok a odkaz späť na miesto, odkiaľ pochádzajú, takže na návode môžete pracovať, zatiaľ čo sa návrh ďalej vyvíja. Keď sa návrh zmení, [Aktualizácia z návrhu](topic:illustrate-update) prenesie zmeny.

## Začatie

Kliknite na {{ui:Nový}} v skupine {{ui:Návod}}, potom:

- {{ui:Z otvorenej súčiastky}}: súčiastka otvorená v Návrhu.
- {{ui:Z otvorenej zostavy}}: zobrazí sa namiesto toho, keď je otvorená zostava; jej súčiastky, ich umiestnenia, čísla súčiastok, materiály a rozložené pohľady sa prenesú.
- {{ui:Zo súboru zostavy…}}: uložený `.partcraft-asm.json`; PartCraft najprv vytvorí jej súčiastky.
- {{ui:Z iného súboru…}}: glTF (.glb, .gltf), OBJ, STL alebo 3MF. Strom a názvy zo súboru sa zachovajú a kópie jednej súčiastky (rovnaký tvar umiestnený dvakrát) sa stanú jednou súčiastkou s množstvom. Súbory STL a OBJ neuvádzajú svoju jednotku, preto sa vás na ňu opýta. Súbory STL sa čítajú s osou Z smerujúcou nahor; glTF a 3MF uvádzajú svoju vlastnú.

Kým je návod otvorený, Ilustrácia zobrazuje vlastnú kópiu súčiastok návodu; súčiastka alebo zostava otvorená v Návrhu je skrytá, kým sa nevrátite do Návrhu.

## Uloženie a otvorenie

{{ui:Uložiť}} v skupine {{ui:Návod}} (alebo {{key:Mod+S}}) uloží návod; {{ui:Otvoriť}} otvorí existujúci. Každá zmena v Ilustrácii je jeden krok v histórii návodu: {{ui:Späť}} a {{ui:Znova}} pôsobia na návod, kým je Ilustrácia otvorená.

## Ešte nie je hotové

- Súbory STEP sa v {{ui:Z iného súboru…}} zatiaľ neotvoria. Otvorte STEP v Návrhu (prichádza ako plné teleso: pozri [Otvorenie súboru STEP](topic:import-step)) a začnite návod pomocou {{ui:Z otvorenej súčiastky}}, alebo ho uložte ako glTF, 3MF, OBJ alebo STL.
- ModelCraft a BimCraft zatiaľ nemôžu model odovzdať Ilustrácii priamo: uložte ho ako glTF (.glb) a použite {{ui:Z iného súboru…}}.

Ďalej: [Pohľady a vzhľady](topic:illustrate-views).
