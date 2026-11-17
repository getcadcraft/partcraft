---
title: Ilipat ang mga piyesa papunta at mula sa ibang part modeler
summary: Ipadala ang piyesa sa ibang part modeler bilang macro na muling bumubuo nito na may live feature tree. Hindi pa nagagawa sa bersyong ito ang named STEP at ang pagbubukas ng feature list na isinulat ng ibang modeler.
keywords: macro, hindi pa nagagawa, swb, vba, feature tree, round trip, export macro, cadcraft-sw.json, named step, ap214, global variables, equations, native part
from: 97ca61da
---

Nagpapalitan ng piyesa ang PartCraft sa SolidWorks sa magkabilang direksyon, nang walang file format na hindi mababasa ng iba:

- **Palabas:** isang macro (`.swb`, plain text) na pinapatakbo ng SolidWorks para buuin mismo ang piyesa, feature kada isa, kasama ang mga sketch, relation, dimension, global variable at equation nito. Makakakuha ka ng native na piyesa na may live feature tree, hindi patay na solid.
- **Pabalik:** isinusulat ng macro na pinapatakbo mo sa loob ng SolidWorks ang mga feature at equation ng piyesa sa isang `.cadcraft-sw.json` file. Hindi pa nagagawa sa bersyong ito ang pagbubukas ng file na iyon sa PartCraft (kailangan nito ng exact kernel).

:::warning
Wala pa sa mga ito ang nasubukan sa SolidWorks. Tumatakbo lang ang SolidWorks sa Windows na may lisensya, at hindi pa kailanman napatakbo ng PartCraft ang mga macro na ito doon. Isinulat ang mga macro mula sa dokumentasyon ng SolidWorks API at sinuri lang dito ang istruktura. Asahan na mag-uulat ka ng mga problema; sinasabi ng log na isinusulat ng macro kung aling hakbang ang nabigo.
:::

Hindi makasulat ang PartCraft ng `.sldprt` file: sarado ang format na iyon. Ang macro ang paraan para makakuha ng native na piyesa.

## Ipadala ang piyesa bilang macro

1. Buksan ang piyesa.
2. Piliin ang {{ui:Export}}, tapos ang {{ui:Macro para sa SolidWorks (.swb)}}. Dina-download ng PartCraft ang `<part>.swb`; sinasabi ng status bar na "isinulat nang walang exact kernel".
3. Sinasabi ng dialog kung ilang feature, global variable at equation ang bubuuin ng macro, at inililista ang anumang hindi nito isinama. Walang kasamang STEP sa tabi nito sa bersyong ito: gamitin ang {{ui:Export}}, tapos ang {{ui:STEP (faceted, mesh kernel)}} kung kailangan mo ng isa.
4. Sa SolidWorks, piliin ang **Tools > Macro > Run**, piliin ang `.swb` file at maghintay. Gumagawa ito ng bagong piyesa mula sa default part template mo, itinatakda ang millimeter at binubuo ang bawat feature.
5. Sa dulo, sasabihin ng mensahe kung ilang hakbang ang natapos, ilan ang nabigo, at ilan ang tumugma sa body ng PartCraft. Isinusulat ang buong log, `<part> macro log.txt`, sa tabi ng macro.

Ang binubuo ng macro:

| PartCraft | Sa bagong piyesa |
|---|---|
| Sketch sa Front, Top o Right plane | Isang sketch sa plane na iyon, kasama ang mga linya, arko, bilog, punto, relation at dimension nito (pinangalanan gaya sa PartCraft, halimbawa `k7`) |
| Sketch sa face | Isang sketch sa parehong face, pinili sa pamamagitan ng punto dito |
| Sketch sa naka-fix na plane | Isang reference plane na dumaraan sa tatlong punto, at ang sketch dito |
| Extrude, cut (blind, through all, mid-plane, dalawang direksyon, taper) | Boss-extrude o cut-extrude |
| Revolve, revolved cut | Revolve sa parehong centerline |
| Hole (simple, counterbore, countersink, tapped) | Isa o dalawang cut na may sariling sketch (ang tapped hole ay ang tap drill nito; walang thread) |
| Linear at circular pattern, mirror | Linear pattern, circular pattern, mirror (feature o ang body) |
| Fillet, chamfer, shell | Fillet, chamfer at shell sa parehong edge at face, pinili sa pamamagitan ng mga punto |
| Parameters at equation | Global variables at equation sa mga pinalitan ng pangalang dimension |
| Suppressed na feature, ang rollback bar | Sinuppress sa parehong paraan; ang rollback bar ay nasa parehong lugar |

Pagkatapos ng bawat solid feature, ikinukumpara ng macro ang volume at laki ng body sa sa PartCraft. Kapag magkaiba ang mga ito, ibinabaligtad nito minsan ang direksyon ng feature na iyon at chine-check ulit; kung hindi ito mas maganda, ibinabalik nito at isinusulat ang "Check" sa log.

### Ano ang hindi isinama

Nakalista sa dialog at sa itaas ng macro ang lahat ng hindi naisalin, kasama ang dahilan. Sa ngayon, kabilang dito ang mga na-import na solid (ipasok na lang ang STEP), sweep, loft, draft, reference axes at points, "up to" na end condition, pag-extrude ng ilang contour lang, at anumang nakadepende sa mga ito. Nagiging curve na dumadaan sa kanilang mga punto ang mga spline. Walang exact kernel ang bersyong ito, kaya kasama ring hindi isinama ang mga sketch sa face at ang mga feature na pumipili ng edge o face.

## Ipadala ang named STEP

Hindi pa nagagawa sa bersyong ito: {{ui:STEP para sa SolidWorks (named, AP214)}} ay nangangailangan ng exact kernel, at kapag pinili ito, sasabihing "STEP para sa SolidWorks: hindi pa nagagawa. …". Sa exact kernel, dala ng file ang pangalan ng piyesa, millimeter at kulay ng piyesa, at nakatayo ang Y pataas, gaya ng pagpapakita ng SolidWorks sa mga piyesa (ang simpleng {{ui:STEP AP214 (exact solid)}} export ay nakatayo ang Z pataas). Nawawala ang mga tuldik sa pangalan, at ang ibang karakter na wala sa plain ASCII ay nagiging `_`.

## Ibalik ang piyesa

Hindi pa nagagawa sa bersyong ito ang pagbubukas ng file sa PartCraft (hakbang 3): sinasabi nito ang "Pagbubukas ng SolidWorks export: hindi pa nagagawa. …". Binubuksan pa rin ng CadCraft drafting app ang file at kinukuha ang mga sketch nito.

1. Piliin ang {{ui:File}} > {{ui:Export}} > {{ui:I-export ang macro para maibalik ang mga part (.swb)}} para i-download ang `CadCraftExport.swb`, at ilagay ito sa tabi ng mga piyesa mo.
2. Sa SolidWorks, buksan ang piyesa, piliin ang **Tools > Macro > Run** at piliin ang `CadCraftExport.swb`. Isinusulat nito ang `<part>.cadcraft-sw.json` sa tabi ng piyesa at walang binabago sa loob nito.
3. Sa PartCraft, piliin ang {{ui:Buksan}} at piliin ang file na iyon, o i-drop ito sa 3D view.
4. Gamit ang exact kernel, muling bubuuin ng PartCraft ang piyesa feature kada feature at ipapakita kung ano ang ginawa nito: halimbawa "5 sa 5 feature ang naidala mula sa SolidWorks (Flange.SLDPRT)", bawat feature na hindi nito nadala ("Hindi nadala: Sweep1 (Sweep)."), at kung tumutugma ang volume sa isinulat ng SolidWorks.
5. I-save ito bilang piyesa ng PartCraft gamit ang {{ui:I-save}}.

Napupunta ang mga sketch sa base plane kapag nasa isa ito, sa katugmang flat na face ng piyesa kapag may ganoon (para masundan nila ang mga susunod na edit), at sa naka-fix na plane kung hindi. Ang edge at face ng fillet, chamfer at shell ay hinahanap mula sa mga punto at pinananatili bilang named reference. Nagiging parameter ang global variable (ang mga pangalang may espasyo ay ginagawang underscore: "Bolt count" ay nagiging `Bolt_count`) at nagiging equation sa parehong dimension ang mga equation. Walang hinuhulaan: nakalista ang walang katapat.

Binubuksan ng CadCraft drafting app ang parehong file at kinukuha ang mga sketch nito.

:::note
Ang format ay `cadcraft-sw-export` bersyon 1, plain JSON sa millimeter at degree. Tinatanggihan ang file mula sa mas bagong macro, o ang hindi wasto, kasama ang dahilan.
:::
