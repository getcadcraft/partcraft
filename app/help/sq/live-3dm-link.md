---
title: Mbaj një model .3dm të gjallë
summary: Ndrysho një model në programin që e bëri dhe shiko trupin e PartCraft ta ndjekë, nga Rhino 8 ose një përkufizim Grasshopper, me veçoritë e tua të ri-ndërtuara mbi formën e re.
keywords: rhino, grasshopper, lidhje e gjallë, lidhje e drejtpërdrejtë, 3dm, nurbs, parametrik, lidhje, sinkronizim, skript, shtyj, trup i importuar
from: cf4dc9b2
---

Vazhdo të modelosh aty ku modelon, dhe bëj makinerinë, kontrollin dhe dokumentimin këtu. Çdo ndryshim në programin tjetër zëvendëson një trup të importuar në PartCraft, dhe veçoritë pas tij ri-ndërtohen mbi formën e re.

:::note
Lidhja ka nevojë për **CadCraft Studio** në të njëjtin kompjuter. Një skedë shfletuesi nuk mund ta marrë lidhjen. Asgjë nuk del në internet: skripti flet me Studio-n në adresën e vetë këtij kompjuteri, me një shenjë (token).
:::

:::warning
Kjo lidhje është provuar me shkruesin e skedarëve të skriptit dhe me një zëvendësues të programit tjetër, jo ende brenda vetë Rhino ose Grasshopper. Nëse diçka dështon atje, na tregoni çfarë tha.
:::

## Konfiguroje

1. Në Studio, hap PartCraft. Te {{ui:Cilësimet}} › {{ui:PartCraft}} › {{ui:Asistentët}}, vendos shenjën te **Lejo asistentët AI dhe skriptet të përdorin PartCraft**, pastaj **Redakto**.
2. Në Studio, zgjidh {{ui:Lidh një asistent}}. Ai shfaq adresën dhe shenjën që do të ngjitësh më poshtë.
3. Shkarko skriptin: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Nga Rhino

1. Ekzekuto `cadcraft_link.py` në redaktorin e skripteve të Rhino (Python 3 në Rhino 8).
2. Herën e parë, ngjit adresën dhe shenjën. Ato ruhen në `.cadcraft-link.json` në dosjen tënde shtëpi, kurrë në model. Studio krijon një shenjë të re çdo herë që nis, prandaj skripti pyet përsëri atëherë.

Ekzekuto skriptin përsëri për ta ndaluar.

## Nga Grasshopper

Ekzekuto skriptin një herë në Rhino së pari, që adresa dhe shenja të ruhen.

1. Shto një komponent Script (Python 3) dhe ngjit tërë `cadcraft_link.py` brenda tij.
2. Jepi këto hyrje: `G` (gjeometrinë, me qasje listë), `N` (një emër, opsional), `On` (një ndërprerës booleani), dhe `Target` (opsional: `model` ose `part`, nëse të dy aplikacionet janë hapur).
3. Vendos `On` në true.

Çdo llogaritje dërgon `G` dhe zëvendëson atë që komponenti dërgoi herën e fundit.

## Si funksionon këtu

- **Një trup.** Gjithçka e dukshme në model bëhet një veçori e vetme e importuar, si kur [hap një skedar .3dm](topic:open-3dm-files).
- **Duhet të mbyllet.** PartCraft mbush vrimat e vogla dhe hapjet e sheshta, dhe programit tjetër i thuhet sa janë. Nëse modeli ende nuk mbyllet, PartCraft mban trupin që kishte dhe shiriti i gjendjes e thotë këtë. Ndryshimi tjetër që mbyll e përditëson.
- **Përfundo atë që po bën.** Në një skicë ose vizatim, përditësimet refuzohen dhe provohen përsëri; mbërrijnë sapo të kthehesh te modeli.
- **Zhbëj.** Përditësimet brenda dy sekondash nga njëra-tjetra ndajnë një hap zhbërjeje.
- **Ruaj.** Skedari i pjesës e mban lidhjen. Ekzekuto skriptin përsëri pasi ta rihapësh, dhe e njëjta veçori përditësohet.

**Vetëm një drejtim.** Ndryshimet këtu nuk kthehen te programi tjetër.

## Nëse diçka shkon keq

- **"Asnjë dritare ModelCraft ose PartCraft nuk e lejon":** bëj hapin 1 të konfigurimit.
- **"Studio e refuzoi shenjën":** Studio u rinis. Kopjo shenjën e re dhe ekzekuto skriptin përsëri. Për Grasshopper, ekzekuto së pari në Rhino.
- **"Nuk mund të lidhet me CadCraft Studio":** Studio nuk është duke punuar, ose adresa ka ndryshuar.
