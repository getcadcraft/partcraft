---
title: Ekuacionet në të dyja drejtimet
summary: Ndrysho një parametër dhe pjesa ndjek; shkruaj një madhësi të re në një numër të drejtuar dhe PartCraft llogarit parametrin pas tij, duke pyetur cili prej tyre kur mund të ndryshojnë disa.
keywords: ekuacione, zgjidh prapa, përmasë e drejtuar, dy drejtime, e kundërt, goal seek, parametra, vlera të lidhura, cili parametër
from: 82dc0269
---

Një ekuacion si **Extrude1 depth = thick + extra** punon në të dy drejtimet.

## Përpara: ndrysho parametrin

Në skedën {{ui:Parametrat}}, ndrysho `thick` nga 20 në 30. Thellësia e Extrude1 bëhet 30 + extra, dhe pjesa rindërtohet.

## Prapa: ndrysho numrin e drejtuar

1. Kliko "Extrude1" në historik. Kutia e saj **Thellësia (mm)** shfaq **ƒ**: një ekuacion e drejton.
2. Shkruaj madhësinë që dëshiron, për shembull `40`, dhe shtyp {{key:Enter}}.

PartCraft zgjidh për parametrin pas ekuacionit, përmes sa hapash të duhen (`depth = hub_h`, `hub_h = disc_t + 50`: shkruarja e një lartësie ndryshon `disc_t`). Shiriti i gjendjes thotë çfarë ndryshoi, për shembull që extra shkoi nga 5 në 15.

Kur dy ose më shumë parametra drejtojnë numrin, një kuti pyet **Cili parametër duhet të ndryshojë?** dhe i liston. Kliko një; të tjerët mbajnë vlerat e tyre. {{ui:Anulo}} nuk ndryshon asgjë.

Të njëjtën gjë bën edhe një skicë: kliko dy herë një përmasë të drejtuar, shkruaj një vlerë, shtyp {{key:Enter}}. Punon edhe në kolonën **Vlera** të tabelës së parametrave, për një parametër që është vetë një shprehje.

## Kur nuk mundet

- Një numër që duhet të jetë i plotë (numri i një modeli) ose të qëndrojë brenda intervalit (një kënd deri 360°) refuzohet para se të ndryshojë diçka.
- Një ekuacion me vetëm numra fiksë (`=40`) nuk ka parametër për të ndryshuar: numri që shkruan zëvendëson atë.
- Nëse asnjë vlerë e parametrit nuk jep madhësinë që shkrove, shiriti i gjendjes e thotë dhe asgjë nuk ndryshon.
- Një skicë që nuk mund të zgjidhet me vlerën e re mban vlerat e mëparshme, dhe shiriti i gjendjes emëron skicën.

Çdo ndryshim, në njërin drejtim ose tjetrin, është një hap për {{key:Mod+Z}} dhe {{key:Mod+Y}}.
