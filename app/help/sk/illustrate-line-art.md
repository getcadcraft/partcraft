---
title: Technické ilustrácie: čiarové kresby, obrázky a listy
summary: Exportujte ľubovoľný pohľad ako vektorovú čiarovú kresbu (SVG alebo PDF) s tromi hrúbkami čiar, skrytými čiarami prerušovanými alebo vynechanými, šrafovanými rezovými plochami a voliteľnými výplňami, alebo ako PNG; umiestnite viacero pohľadov na jeden list.
keywords: ilustrácia, čiarová kresba, technická ilustrácia, svg, pdf, png, skryté čiary, obrys, šrafovanie, list, export
from: 0e9bea63
---

{{ui:Export}} v skupine {{ui:Výstup}} otvorí dialóg exportu:

- {{ui:Čo}}: scéna v jej aktuálnom stave, jeden pohľad alebo všetky pohľady.
- {{ui:Ako}}: **PDF** alebo **SVG** (vektorová čiarová kresba; oba sa tvoria z tej istej kresby), **PNG čiarovej kresby** alebo **PNG obrázok 3D pohľadu** (široký až 4096 pixelov), a [interaktívny 3D súbor](topic:illustrate-interactive).
- {{ui:Strany}}: jeden pohľad na stranu, alebo všetky pohľady na jednom liste s názvom pod ním. {{ui:Papier}}: A4, A3, Letter alebo Tabloid.
- {{ui:Skryté čiary}}: prerušované alebo vynechané. {{ui:Výplne}}: ako pohľad vyzerá, žiadne, ploché farby alebo tieňované. {{ui:Kresliť aj jemné hrany}} pridá podrobné čiary.

Čiarová kresba má tri hrúbky: obrysy (siluety, otvorené hrany a obrysy rezov), ostré hrany a podrobné čiary. Rezné plochy rezu alebo výrezu kvádrom sú šrafované. Rozložené pohľady dostanú čerchované stopy od miesta, kde každá súčiastka sedí; kreslia sa aj bubliny, poznámky, zoznam súčiastok a lupa.

Čiarová kresba sa vypočíta z tvarov súčiastok metódou sietí (rovnakou, akú používa výkres listu v PartCraft bez presného jadra), takže zakrivené plochy sa kreslia ako plôšky, tak, ako ich model drží.

## Ešte nie je hotové

- Obrázky v kvalite sledovania lúčov (rendereru ModelCraft) tu nie sú ponúkané; PNG obrázky majú vlastný vzhľad 3D pohľadu.
