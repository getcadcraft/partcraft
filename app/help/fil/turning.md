---
title: Pag-turn sa lathe
summary: Face, rough, finish, groove, part off, thread at drill sa isang turned na piyesa, mula sa outline na bumubuo sa piyesa kapag umiikot ito. Lathe tool, feed bawat revolution, lathe post, at ano ang hindi pa napatunayan.
keywords: turning, lathe, turn, facing, roughing, finishing, groove, grooving, part off, parting, cut off, thread, threading, g32, g33, g96, pare-parehong surface speed, css, nose radius, insert, bar, chuck, diameter, feed per revolution, g71, g76
from: d8cc53b0
---

May pitong operation ang Manufacture para sa lathe. Gumagana ang mga ito sa anumang piyesa: ang pinuputol ay ang **outline na bumubuo sa piyesa kapag umiikot ito** sa paligid ng gitna ng stock, kaya ang piyesang hindi bilog ay tinuturn pababa sa hugis na bilog na may hawak nito.

**Walang napatakbo rito sa lathe.** Sinusuri ng mga test laban sa geometry ang mga path; sumusunod ang dalawang lathe post sa dokumentadong code ng mga control. Patunayan muna ang program sa sarili mong simulator ng control at sa hangin.

## Set up

Sa **Setup** tab:

- **Tool axis** ay ang axis ng spindle, ang Z ng lathe. Nasa +Z ang harap ng piyesa; ang chuck ang humahawak sa kabilang dulo.
- **Stock**: piliin ang {{ui:Cylinder}}, ang bar. Ang top offset nito ay ang inaalis ng facing cut.
- **Work origin**: ang centre sa stock-top o model-top ay naglalagay ng Z0 sa harap na face, ang karaniwang lugar.
- **Control**: {{ui:Fanuc-style lathe (.nc)}} o {{ui:LinuxCNC lathe (.ngc)}}. Tinatanggihan ng milling post ang turning program at sinasabi ito.
- **Max spindle speed**: ang limit na pinananatili ng surface speed sa ilalim nito.

Ang {{ui:More}} sa Manufacture toolbar ay naglilista ng pitong turning operation sa itaas ng **Operations** tab. Ang unang idadagdag mo ay nagdadala ng sarili nitong tool: isang **turning insert** (nose radius, insert angle, cutting edge angle) o isang **grooving blade** (lapad, corner radius, gaano kalalim ito umaabot). Baguhin ang mga ito sa **Tools** tab. Bawat revolution ang feed, at ang bilis ay isang surface speed sa m/min na pinananatili ng control habang nagbabago ang diameter; magbigay ng sariling rpm sa tool para ayusin ang bilis.

## The operations

| Operation | Ano ang ginagawa |
|---|---|
| {{ui:Face}} | Hinaharap ang harap ng bar pababa sa piyesa, isang stepdown sa bawat pagkakataon, mula sa labas hanggang lampas lang sa sentro. |
| {{ui:Rough}} | Mga pass sa kahabaan ng Z na may **depth of cut** ang pagitan, pababa sa outline plus ang **stock to leave**; pagkatapos ay minsan sa kahabaan ng outline para alisin ang mga hakbang. Ang lambak sa pagitan ng dalawang balikat ay pinapasukan ng plunge na isang depth of cut. |
| {{ui:Finish}} | Isang pass sa kahabaan ng outline sa isang bahagi ng feed ng tool. |
| {{ui:Groove}} | Nagpa-plunge ang blade nang magkatabi kung saan ito makakakuha ng higit sa limitasyon ng stock na naroon pa: ang mga groove na hindi naabot ng turning insert. Pinapaliit ito ng **From / To Z**. |
| {{ui:Part off}} | Pinuputol ang piyesa sa likod lamang ng back face nito, hanggang sa bahagyang lampas sa sentro, na may mga peck kung nagtakda ka nito. |
| {{ui:Thread}} | Isang panlabas na thread: major diameter, pitch, haba, bilang ng pass. Ang depth 0 ay nangangahulugang 0.6134 × pitch (isang 60° na thread). Bawat pass ay kumukuha ng parehong lawak ng chip; inuulit ng spring pass ang huli. |
| {{ui:Drill}} | Drill sa centre line hanggang sa isang lalim, na may mga peck. |

## How the tool is kept off the part

Tinatrato ang insert bilang kung ano talaga ito: ang nose circle nito, at sa likod nito ang trailing edge, isang tuwid na linya na ang anggulo ay 180° na binawasan ng cutting edge angle at ng insert angle. Ibinababa ang hugis na iyon sa outline sa bawat punto sa kahabaan ng Z, at ang path ay ang lugar kung saan ito humihinto. Kaya:

- **Nasa path na ang nose radius.** Hindi nagsusulat ng `G41` o `G42` ang mga post; ang coordinate ay ang programmed point ng tool (ang sulok ng parisukat sa paligid ng nose).
- Hindi **kayang sundan ng insert ang pader na mas matarik kaysa sa trailing edge nito**. Hindi nahahawakan ang groove sa likod ng balikat, at sinasabi ng finishing operation kung gaano karami sa outline ang hindi nito naabot. Kinukuha ito ng {{ui:Groove}} operation.
- Sinusubaybayan ang stock sa kahabaan ng Z pagkatapos ng bawat putol, kaya hindi pumuputol sa hangin ang roughing, hinahanap ng grooving kung ano ang natira, at ipinapakita ng bawat operation ang dami ng inalis nito at kung pumasok ito sa piyesa.

## Limits

- **Panlabas na turning lamang**: walang boring bar, walang panloob na groove o thread, walang face groove.
- Isang spindle, ang piyesa ay hawak sa −Z. Walang sub-spindle, walang live tool, walang C o Y axis, walang steady rest o tailstock move.
- Tuwid na galaw ang mga path: ang mga kurba ay maikling linya sa loob ng tolerance (walang `G2`/`G3`), at ang roughing at threading ay isinusulat pass by pass (walang `G71` o `G76` cycle).
- Tuwid na pass ang threading na may tuwid na pull-out sa dulo; bigyan ang thread ng relief groove. Hindi ipinapakita ang thread sa stock.
- Hindi nagbabago sa modelo ng stock ang drilling sa centre.
- Hindi sinusuri ang holder, turret at chuck. Itakda ang **Stop at Z** para panatilihing malayo ang tool sa mga panga.
- Panimulang halaga ang feed at speed, gaya ng sa milling.
