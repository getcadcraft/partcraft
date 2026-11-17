---
title: I-save, buksan ulit at ituloy ang trabaho
summary: I-save ang mga piyesa at assembly sa iyong computer, pangalanan ang mga ito, buksan ulit sa pamamagitan ng button, key o drag, panatilihin ang mga bersyon, at iwasang mawala ang trabaho sa browser tab.
keywords: i-save, buksan, buksan ulit, load, download, bersyon, backup, palitan ang pangalan, pangalan ng file, nawalang trabaho, umalis sa site, partcraft.json, partcraft-asm.json, bagong piyesa
from: c18a5abc
---

Walang iniimbak ang PartCraft sa pagitan ng mga pagbisita. Nananatili ang iyong piyesa sa browser tab hanggang i-save mo ito bilang file, at babalik ito kapag binuksan mo ang file na iyon.

## I-save ang piyesa

1. Pangalanan ang piyesa: i-click ang bakanteng espasyo sa view para walang napiling anuman, pagkatapos i-type ang **Name** sa kanang panel at pindutin ang {{key:Enter}}. Magbabago ang history heading para tumugma.
2. Pindutin ang {{key:Mod+S}} o piliin ang {{ui:Save}}.
3. Magda-download ang browser ng `<name>.partcraft.json`. Sasabihin ng status bar ang "Na-save ang Bracket.partcraft.json (buong history; buksan ulit dito para magpatuloy sa pag-edit)."

Kapag bukas ang sketch, isasara muna ito ng pag-save.

Nakalagay sa file ang bawat sketch, relation, dimension at feature, pati ang mga suppressed feature, ang rollback position, ang mga setting ng drawing sheet at ang mga GD&T note, at ang buong teksto ng anumang na-import na STEP solid. Hindi nase-save ang undo list mo.

## I-save ang assembly

Sa assembly, ang parehong {{ui:Save}} o {{key:Mod+S}} ay nagda-download ng `<assembly name>.partcraft-asm.json`. Nakaimbak sa loob nito ang bawat piyesa: hindi mo kailangan ng hiwalay na part file para mabuksan ulit ito.

Habang ine-edit mo ang piyesa mula sa loob ng assembly, sine-save ng {{key:Mod+S}} ang piyesang iyon nang mag-isa bilang `.partcraft.json`. Piliin muna ang {{ui:Back}}, pagkatapos i-save, para ma-save ang buong assembly.

## Buksan ulit

Alinman sa mga ito:

- piliin ang {{ui:Open}} o pindutin ang {{key:Mod+O}}, pagkatapos piliin ang file;
- i-drag ang file mula sa {{pick:mac=Finder|windows=File Explorer|linux=ang iyong file manager}} papunta sa 3D view (lalabas ang "I-drop ang PartCraft part para buksan ito").

Nalalaman ng PartCraft kung piyesa o assembly ang isang file ayon sa laman nito, kaya pareho silang nabubuksan sa parehong paraan. Ang file na `.step` o `.stp` ay nabubuksan bilang na-import na solid: tingnan ang [Buksan ang STEP file at magtayo mula rito](topic:import-step). Kinukumpirma ng status bar: "Binuksan ang Bracket.partcraft.json: 7 features." o "Binuksan ang Hinge.partcraft-asm.json: 3 parts, 2 joints."

Kung may hindi pa na-save na pagbabago ang piyesang nasa screen, unang magtatanong ang PartCraft: {{ui:Cancel}}, {{ui:Discard changes}} o {{ui:Save first}}.

:::warning
Isara ang assembly ({{ui:Close}}) bago buksan ang part file. Kapag nagbukas ka ng piyesa habang may assembly sa screen, mai-load ang piyesa sa likod ng assembly at makikita mo lang ito pagkatapos isara ang assembly. Ang pagbukas ng assembly file ay papalitan din ang hindi pa na-save na assembly nang hindi nagtatanong, kaya i-save muna ito.
:::

## Magsimulang muli

{{ui:New}} ay nagsisimula ng bagong walang laman na "Part1". Nagtatanong muna ito kung may hindi pa na-save na pagbabago, at isasara nito ang bukas na assembly (magtatanong kung hindi pa ito na-save).

## Panatilihin ang mga bersyon

Bagong download ang bawat pag-save, kaya maaari mong panatilihin ang mga bersyon sa pamamagitan lamang ng pag-iingat ng mga file:

- Maglagay ng bersyon o petsa sa pangalan bago i-save: "Bracket rev B".
- Maaaring magdagdag ang browser ng " (1)", " (2)" kapag may file na may parehong pangalan na sa downloads folder na. Ang pinakabago ay ang may pinakamataas na numero, o tingnan ang petsa sa {{pick:mac=Finder|windows=File Explorer|linux=ang iyong file manager}}.
- Ilipat ang mga tapos nang file mula sa downloads folder papunta sa project folder mo.

Tingnan ang [Saan pumupunta ang iyong mga file](common:your-files) para sa lugar ng mga download sa bawat sistema.

## Huwag mawalan ng trabaho

- I-save bago isara ang tab, i-reload, o hayaang matulog nang matagal ang computer. Magtatanong ang browser ng "Leave site?" kung susubukan mong isara na may hindi pa na-save na pagbabago, pero walang babala ang crash o nakasarang laptop.
- Gumagana ang private o incognito window, pero walang ibang pagkakaiba: ang file pa rin ang tanging kopya.
- Hindi pa available ang cloud saving at version history.
