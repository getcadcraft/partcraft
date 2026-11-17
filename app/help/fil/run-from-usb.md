---
title: Patakbuhin mula sa USB drive
summary: Ano ang isinusulat ng mga engineering tool at saan, para mapatakbo ang CadCraft Studio mula sa USB stick o anumang folder nang walang installer at nang walang administrator rights: mga setting, generator, cache at part file, at kung ano ang nananatili sa stick.
keywords: usb, portable, walang installer, administrator, admin, mga setting, data folder, generators, saan isinusulat ang mga file, offline, privacy, host access
from: 263efc79
---

Ang mga engineering tool (generators, ang engineering library, ang mga check at ang mga data file) ay hindi nangangailangan ng **administrator rights** at hindi nangangailangan ng **installer**. Sumusulat lamang sila ng nakalista rito, at wala nang iba.

| Ano | Saan ito itinatago |
|---|---|
| Ang iyong mga piyesa, kasama ang kanilang nabuong katawan, data sheet at check | Ang part file na sine-save mo (`.partcraft.json`), kung saan mo ito sine-save. |
| Mga generator na binuksan mo mula sa mga file | Sa sariling storage ng app: ang local storage ng browser sa web page, at ang folder na `data` sa tabi ng program sa portable Studio. Hanggang 20 lamang. |
| Mga setting (voxel size na itinakda mo, solver threads, ang layout) | Ang parehong app storage. |
| Data sheet, field, mesh | Lamang kung saan mo ito sine-save: mapupunta ang download sa lugar na pipiliin mo. |

Ang mga tool ay **walang sariling network call**: ang mga generator na kasama ay mga file sa sariling folder ng app, ang library at ang mga check ay tumatakbo sa iyong computer sa isang worker na hindi maabot ang network, at ang engineering data (katangian ng tubig at hangin, materyales) ay nasa loob ng app. Ang generator na binuksan mo mula sa file ay binabasa sa iyong computer at walang napupunta kahit saan.

## Ang portable na Windows zip at Linux

Pinapanatili ng portable Studio para sa Windows ang mga setting, cache at add-on sa folder na `data` sa tabi ng program. Pinapanatili ito ng Linux AppImage sa tabi nito kapag may file na tinatawag na `portable` sa tabi nito; kung wala ang file na iyon, ginagamit nito ang iyong home folder. Walang portable na anyo para sa Mac: pinipigilan ng system ang app na na-download na magsulat sa tabi ng sarili nito. Nakalista sa mga portable note ng shell (help ng `Studio`) kung ano ang isinusulat ng program.

## Host access

Walang hinihinging host access dito. Ang mga printer, serial machine at USB device ay hiwalay: humihingi sila ng pahintulot kapag kailangan ng job ang mga ito, isang beses bawat device, at walang ginagalaw ang mga generator o ang mga check sa mga ito.
