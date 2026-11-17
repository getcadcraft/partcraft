---
title: I-roll back at i-roll forward sa history
summary: Itaas at ibaba ang rollback bar nang isang feature sa bawat pagkakataon para makita ang pagbuo ng part, magpasok ng mga feature sa gitna, at bumalik sa dulo.
keywords: rollback, roll back, roll forward, rollback bar, hakbang sa history, insert feature, freeze, history
from: 9a366cae
---

Tinutukoy ng rollback bar kung gaano karami ng history ang nabubuo. Kulay abo at hindi nabubuo ang mga feature sa ibaba nito; sa bar pumapasok ang mga bagong feature.

## Hakbang-hakbang, isang feature sa bawat pagkakataon

Kapag nasa screen ang part (walang bukas na sketch o drawing):

| Gawin | Resulta |
|---|---|
| {{key:[}} o ang pataas na arrow button sa tabi ng pangalan ng part | Umaakyat ang bar nang isang feature |
| {{key:]}} o ang pababang arrow button | Bumababa ang bar nang isang feature |
| {{key:End}} o ang button na nagdadala ng bar sa dulo | Muling nabubuo ang bawat feature |

Sinasabi ng status bar kung nasaan ang bar, halimbawa "Rollback bar after Sketch1: 1 of 2 features built". Naka-off ang mga button kapag hindi na maaaring gumalaw ang bar sa direksyong iyon.

Puwede mo ring piliin ang {{ui:Ibalik dito}} sa alinmang feature, o i-click ang **Rollback bar · roll forward** sa history.

## Magpasok ng feature sa gitna

1. Ibalik ang bar hanggang sa nasa lugar kung saan dapat mapunta ang bagong feature.
2. Idagdag ang feature: mapupunta ito sa bar.
3. Pindutin ang {{key:End}} para buuin ang natitirang history sa ibabaw nito.

Bawat galaw ng bar ay hakbang na maaari mong i-undo gamit ang {{key:Mod+Z}}. Naka-save sa file ang kinalalagyan ng bar, kaya maaaring ipadala ang part na naka-roll back. Ginagalaw din ito ng command line tool: `partcraft rollback part.json` at `partcraft forward part.json --end`.
