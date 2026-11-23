---
title: Probing: hanapin ang piyesa at itakda ang work offset
summary: Hawakan ang top face, gilid, butas o boss gamit ang probe at hayaang ilipat ng control ang work offset sa kinaroroonan ng piyesa, o sukatin lang. Ano ang kaya ng bawat control, at ano ang hindi pa napatunayan.
keywords: probe, probing, touch probe, touch off, work offset, g54, g31, g38.2, skip, datum, hanapin ang centre, bore, boss, edge, itakda ang zero, measure, inspection, g10
from: 1f718b82
---

{{ui:Probe}} sa Manufacture ay nagsusulat ng probing cycle sa program: hinahawakan ng probe ang piyesa, at inililipat ng control ang work offset (G54) ayon sa pagkakaiba ng nahanap na surface at ng kinaroroonang sinasabi ng model. Pagkatapos, sa tamang lugar na talaga ng piyesa pumuputol ang mga susunod na operation.

**Walang napatakbo rito sa makina.** Ang mga galaw bago ang touch ay ordinaryong galaw: hindi binabantayan ang probe hanggang sa mismong probing move. Patakbuhin ito nang mabagal, sa hangin muna, na nakahawak ang kamay sa feed hold.

## Use it

1. Sa **Tools** tab, ang unang probe operation ay nagdaragdag ng **touch probe**: ang diameter ng bola nito, at ang probing feed (100 mm/min maliban kung magtatakda ka ng iba).
2. Pindutin ang {{ui:More}} sa Manufacture toolbar, pagkatapos ay {{ui:Probe}}, at i-click kung ano ang hahawakan. Bawat pili ay isang cycle, ayon sa pagkakasunod ng pag-click mo:

| Pili | Ang cycle | Ano ang itinatakda |
|---|---|---|
| Isang patag na face na nakaharap pataas sa tool axis | Isang touch pababa | Z |
| Isang patag na gilid na patayo sa X o sa Y | Isang touch papunta sa face, bahagyang nasa ibaba ng tuktok nito | X o Y |
| Isang butas o boss sa kahabaan ng tool axis | Apat na touch (+X, −X, +Y, −Y) | X at Y ng sentro nito |

3. **Sa resulta**: {{ui:Set the work offset}} o {{ui:Measure only}}.
4. **Start this far away** at **Search this far past** ay kung gaano kalayo sa inaasahang surface nagsisimula ang probing move, at kung gaano kalayo lampas doon maaaring maglakbay ang probe bago sumuko ang control. **Depth** ay kung gaano kalalim sa ibaba ng tuktok ng butas, boss o side face aabot ang bola.

Ilagay ang probe operation muna, bago ang anumang pumuputol.

## What each control writes

| Control | Touch | Resulta |
|---|---|---|
| Fanuc-style | `G31`, ang posisyon ay nakatago sa `#101` hanggang `#104` | Inililipat ang offset variable (`#5221` hanggang `#5223`) ayon sa nahanap − inaasahan. Measure only: ang pagkakaiba ay naiiwan sa `#110` (at `#111`). |
| LinuxCNC | `G38.2`, ang posisyon ay nakatago sa mga named parameter | `G10 L2 P1` na may bagong offset. Measure only: isang mensaheng `(DEBUG, …)`. |
| GRBL | `G38.2` | Itinatakda ng isang touch ang axis gamit ang `G10 L20 P1`. Walang variable ang GRBL, kaya **hindi nito kayang kuwentahin ang isang sentro**: sinasabi ito ng file sa isang komento at walang itinatakda. |

Nasa post ang aritmetika, kaya puwede mo itong baguhin: ang mga event ay `probe-move` at `probe-set` ([Post processors you can edit](topic:post-processors)).

## Limits

- Isang work offset (G54). Mga face na patayo lamang sa mga axis: walang anggulo, walang corner cycle, walang pag-ikot ng work.
- Walang tool setter, walang broken-tool check, walang pagsukat ng laki laban sa tolerance, walang report.
- Hindi sinisimulan ang spindle para sa probe at nananatiling naka-off ang coolant; walang nagsusuri kung probe nga ang tool sa spindle.
- Hindi pinapatakbo ng stock simulation ang probing path.
- Sa control ang sariling calibration ng probe (ball offset, stylus deflection, trigger direction).
