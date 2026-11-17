---
title: Mag-revolve ng turned part
summary: Mag-sketch ng kalahating profile sa tabi ng centerline, i-revolve ito bilang bilog na part, piliin ang axis at anggulo, at gamitin ang revolved cut para sa mga groove.
keywords: revolve, revolved boss, revolved cut, turned part, lathe, shaft, axis, centerline, groove, anggulo, rev cut
from: 593b6929
---

Ang {{ui:Revolve}} ay umiikot sa isang profile sa paligid ng axis, gaya ng part na ginawa sa lathe: shaft, pulley, flange, knob. Ang Revolved cut (nasa menu na {{ui:Higit pa}} ng grupong Features) ay umiikot sa isang profile para mag-alis ng materyal, para sa mga groove at recess.

## Mag-revolve ng stepped shaft

1. Mag-sketch sa **Front plane**.
2. Pindutin ang {{key:N}} para sa {{ui:Centerline}}. Magsimula sa origin at mag-click ng isang point nang diretso sa kanan, halimbawa 100 mm ang layo. Ito ang axis. Putol-putol ito dahil construction geometry ito at hindi bahagi ng profile.
3. Pindutin ang {{key:L}} para sa Line. Iguhit ang **kalahating** profile sa itaas ng centerline bilang isang saradong loop: magsimula sa centerline, umakyat, lumapad, at bumaba pabalik sa centerline, saka dumaan dito pabalik sa simula. Dapat magtagpo ang mga dulo nito: dapat sarado ang loop.
4. Bigyan ng dimension ang mga radius (taas sa itaas ng centerline) at ang mga haba. Ang taas na 10 sa itaas ng centerline ay gumagawa ng diyametrong 20.
5. Piliin ang {{ui:Exit}}.
6. Piliin ang {{ui:Revolve}}. Lilitaw ang shaft, isang buong ikot.

Dapat manatili ang profile sa isang panig ng axis. Kapag tumawid ito: "The profile crosses the axis. Keep it on one side of the centerline." Puwedeng nasa axis ang isang edge ng profile.

## Mga setting

| Setting | Ano ang ginagawa | Default |
|---|---|---|
| **Operation** | Boss (magdagdag ng materyal), Cut (mag-alis ng materyal), Intersect (panatilihin ang magkapatong) o New body | Boss para sa {{ui:Revolve}}, Cut para sa {{ui:Higit pa}} › {{ui:Revolved cut}} |
| **Angle (°)** | Gaano kalayo iikot, mula bahagyang higit sa 0 hanggang 360 | 360 |
| **Axis** | Unang centerline, o alinmang line o centerline sa sketch, nakalista bilang "Centerline 1 (l1)" o "Line 3 (l3)" | Unang centerline |

Ang bahagyang anggulo ay gumagawa ng wedge, na iniikot mula sa sketch plane sa isang direksyon.

Kapag walang centerline ang sketch at nanatili sa Unang centerline ang **Axis**: "Draw a centerline (a construction line) in the sketch to revolve about." Puwede mo ring piliin ang isang solid na line ng profile bilang axis.

## Mag-cut ng groove

1. Kapag nabuo na ang shaft, magbukas ng bagong sketch sa **Front plane** (ang parehong plane ng sketch ng shaft).
2. Gumuhit ng centerline sa parehong axis: simulan ito sa origin at panatilihing pahalang para makakuha ito ng H, o i-type ito gamit ang **Add by coordinates** (halimbawa mula `0, 0` hanggang `100, 0`). Hindi maaaring dumikit ang bagong sketch sa mga line ng ibang sketch.
3. Gumuhit ng maliit na saradong rectangle na nagsasapawan sa gilid ng shaft kung saan pupunta ang groove.
4. Piliin ang {{ui:Exit}}, saka ang {{ui:Higit pa}} › {{ui:Revolved cut}}.

## Mga revolved face sa assembly

May axis ang revolve na magagamit ng ibang feature at ng mga assembly:

- Ang **Circular** pattern ay gumagamit ng axis ng huling revolve bilang default (tingnan ang [Mga pattern at mirror na feature](topic:patterns-mirror));
- Sa isang assembly, ang joint sa pagitan ng mga face na gawa ng revolve ay nagsisimula bilang **revolute** joint, at nag-aalok ang **Centre on** ng "Axis of Revolve1" (tingnan ang [Pagbuo ng assembly](topic:build-assembly)).

## Tunay na kurba at facet

Binubuo ng PartCraft ang revolve gamit ang mesh kernel (ipinapakita ng status bar chip ang "Mesh kernel"): ang mga bilog na hugis ay mga patag na facet, 64 bawat ikot bilang default, at medyo mas mababa sa tunay na halaga ang volume (mga 0.16 % sa 64). Binubuo ng mga facet na iyon ang view, at ang mga export ng STL, 3MF at STEP: itakda ang **Curves** (i-click ang walang lamang espasyo, saka ang right panel) sa Fine (128) o Very fine (256) para mas makinis. Kailangan ng exact kernel ang tunay na cylinder, cone at torus: hindi pa naitatayo sa bersyong ito. Tingnan ang [Ang mesh kernel](topic:solid-kernels).
