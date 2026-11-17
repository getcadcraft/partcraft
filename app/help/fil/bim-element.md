---
title: Idisenyo ang elemento ng BimCraft at i-save pabalik
summary: Ang part na galing sa BimCraft ay magbubukas kasama ang gusaling nakapalibot dito, kulay abo at read-only. Baguhin ito, saka i-save pabalik para matanggap ng BimCraft ang bagong hugis.
keywords: bimcraft, bim, elemento, ipadala, i-save pabalik, link, gusali, konteksto, kapitbahay, suporta, bracket, ifc, tanggapin
from: 0978fe53
---

## Ang gagawin mo

Gumawa sa part na galing sa modelo ng BimCraft, sa lugar nito sa gusali, at ipadala pabalik ang bagong hugis.

## Mga hakbang

1. Sa BimCraft, pumili ng elemento at piliin ang {{ui:Mga part link}} › {{ui:Ipadala sa PartCraft}}. Magbubukas ito sa PartCraft bilang bagong part. Sinasabi ng status bar na BIM element ito.
2. Naka-grey ang mga elementong nasa paligid nito (sa loob ng 3 m). Nandiyan sila para pagbatayan ng disenyo. Hindi mo sila mapipili o mababago, at hindi sila sine-save sa part file.
3. Baguhin ang part gaya ng dati: putulin, dagdagan, butasan, i-mirror. Ang origin at axes nito ay sa mismong elemento, kaya babalik ang part sa dating puwesto nito.
4. Piliin ang {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}}. Sinasabi ng status bar kung aling revision ang ipinadala mo.
5. Sa BimCraft, lalabas na may pagbabago ang elemento hanggang tanggapin ito ng taong nandoon.

## Ang makikita mo

- Nananatili ang link ng part sa file. Kapag binuksan mo ito sa susunod, sasabihin pa rin ng status bar na BIM element ito. Babalik ang grey na gusali habang hawak pa ng browser ang package na ipinadala rito.
- Kapag nag-save ulit pabalik, ipapadala ang revision 2, 3 at iba pa. Ang pinakabago ang pinananatili ng BimCraft.

## Magandang malaman

- Ibinabalik ang hugis bilang mesh sa mm, sa sariling axes ng elemento. Nananatili sa PartCraft ang mga feature.
- Walang epekto ang {{ui:Save back to BimCraft}} sa part na hindi galing sa BimCraft.
- Walang maipapadala ang part na wala pang solid.
- Dapat parehong bukas ang dalawang app sa iisang browser: walang na-upload, ipinapasa lang ng dalawang pahina ang elemento sa isa't isa.
