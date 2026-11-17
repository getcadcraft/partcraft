---
title: Ganap na tukuyin ang sketch gamit ang relations at dimensions
summary: Magdagdag ng relations mula sa kanang panel at dimensions gamit ang Dimension tool, basahin ang kulay ng under, fully at over defined, at ayusin ang sketch na sobra ang tukoy.
keywords: relations, constraints, dimensions, smart dimension, fully defined, under defined, over defined, degrees of freedom, coincident, horizontal, vertical, parallel, perpendicular, tangent, equal, concentric, midpoint, ayusin, salungatan, redundant, kulang ang tukoy, sobra ang tukoy, ganap na tinukoy
from: e76d047a
---

Ang sketch ay **Ganap na tinukoy** kapag naayos na ng relations at dimensions ang bawat punto at sukat. Nagbabago lang ang ganap na tinukoy na sketch kapag binago mo ang numero, kaya predictable ang kilos ng part kapag ine-edit mo ito sa susunod. Hindi pinipilit ng PartCraft na gawing ganap na tinukoy ang sketch, pero palagi nitong ipinapakita kung gaano ka na kalapit dito.

## Basahin ang estado ng sketch

Ipinapakita ang estado sa tatlong lugar: ang chip sa kaliwang itaas ng view, ang mensahe sa itaas ng kanang panel, at ang flag sa history.

| Estado | Chip | Kulay ng geometry | Ibig sabihin |
|---|---|---|---|
| Kulang ang tukoy | "Kulang ang tukoy · 3 degrees of freedom" | Asul | May geometry pa na maaaring gumalaw. I-drag ang asul na geometry para makita kung saang direksyon |
| Ganap na tinukoy | "Ganap na tinukoy" | Tinta (itim sa Paper, maliwanag sa Model) | Naayos na ang bawat punto at sukat |
| Sobra ang tukoy | "Sobra ang tukoy" | Pula sa mga kasangkot na relation | May ilang relation na nagkakasalungatan, o may isa nang hinango mula sa iba |

Laging gray at putol-putol ang construction geometry, anuman ang estado nito. Kulay orange ang mga napiling item. Ang "degree of freedom" ay isang direksyon kung saan maaari pa ring gumalaw ang isang bagay: ang malayang punto ay may dalawa (kaliwa-kanan at taas-baba), ang malayang bilog ay may tatlo (ang center at ang radius nito).

Inuulit ng legend sa ilalim ng mensahe sa kanang panel ang mga kulay.

## Magdagdag ng dimension

1. Pindutin ang {{key:D}} o piliin ang {{ui:Dimension}}.
2. I-click ang susukatin:
   - **isang linya**: haba nito;
   - **isang bilog**: diyametro nito; **isang arko**: radius nito;
   - **dalawang punto** (dulong punto, center, maluwag na punto o origin): distansya sa pagitan nila;
   - **isang punto at isang linya**: distansya mula sa punto hanggang sa linya;
   - **dalawang parallel na linya**: distansya sa pagitan nila; **dalawang linyang nakaanggulo**: anggulo sa pagitan nila.
3. Pagkatapos ng isang item, sinasabi ng status bar: "I-click ang pangalawang item, o i-click kung saan ilalagay ang dimension." I-click ang pangalawang item, o i-click sa bakanteng espasyo kung saan mo gustong ilagay ang numero.
4. Lalabas ang kahon ng numero na may kasalukuyang halaga. I-type ang sukat at pindutin ang {{key:Enter}}. Pinananatili ng {{key:Esc}} ang nasukat na halaga.

**Kung saan mo ilalagay ang numero ang nagtatakda ng uri** para sa hilig na linya o dalawang punto: ilagay ito sa itaas o ibaba para makuha ang horizontal distance, sa kaliwa o kanan para makuha ang vertical distance, at sa ibang lugar para sa totoong (aligned) na distansya.

Tumatanggap ang kahon ng payak na numero sa millimetro o digri, gaya ng `25`, `12.5` o `1e3`. Hindi pinapansin ang nangunguna at `⌀`, `Ø` o `R`, o ang nakasunod na `mm` o `°`. Mula 0 hanggang 180 digri ang mga anggulo. Hindi tinatanggap ang aritmetika gaya ng `20+5`; para i-link ang sukat sa variable o formula, simulan ito sa `=`.

Para baguhin ang dimension sa susunod, i-double-click ang numero nito sa sketch, o piliin ang **Edit** sa tabi nito sa listahan sa kanang panel.

:::tip
Maaari mo ring piliin muna ang geometry (Piliin tool) at piliin ang isang dimension button sa kanang panel: {{ui:Distance}}, {{ui:Horizontal distance}}, {{ui:Vertical distance}}, {{ui:Radius}}, {{ui:Diameter}} o {{ui:Angle}}. Tanging ang mga akma sa pinili ang ipinapakita. Ito ang paraan para bigyan ang bilog ng radius sa halip na diameter.
:::

## Magdagdag ng relation

Idinadagdag ang relations mula sa kanang panel, hindi gamit ang tool.

1. Pindutin ang {{key:S}} para sa Piliin.
2. I-click ang isang item, saka {{key:Shift}}+click ang pangalawa kung kailangan ng relation ang dalawa. Maaari ring piliin ang origin.
3. Sinasabi ng kanang panel na "Selected: line l3, point p1" at nagpapakita ng button para sa bawat relation na akma, gaya ng {{ui:∥ Parallel}} o {{ui:• Coincident}}.
4. Piliin ang button. Agad na nilulutas ang sketch.

Kung walang akmang relation, sasabihin ng panel: "Walang akmang relation sa piniling ito. Pumili ng isa o dalawang item (dinadagdag ng Shift+click)."

Ang buong listahan ng relations, kung ano ang kailangan ng bawat isa at ang ginagawa nito, ay nasa [Sketch relations at dimensions](topic:sketch-relations).

Lumalabas ang relations sa sketch bilang maliliit na simbolo sa tabi ng geometry (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Nakatago ang mga coincident dot maliban kung napili ang geometry o may problema ang relation. I-click ang simbolo para mapili ang relation.

## Halimbawa: profile ng L-shaped na bracket

1. Mag-sketch sa **Front plane**. Gamit ang Linya tool, magsimula sa origin at i-click ang anim na sulok ng L, tapusin sa origin muli. Awtomatikong nagtatapos ang chain kapag na-click mo ang unang punto.
2. Ang mga linyang halos pahalang o patayo ay may H at V na relation na awtomatiko na, maliban sa huli: ang linyang nagtatapos sa umiiral na punto ay walang awtomatikong relation. Pindutin ang {{key:S}}, i-click ang huling linyang iyon at piliin ang {{ui:V Vertical}} sa kanang panel. Sasabihin ng chip: "Kulang ang tukoy · 4 degrees of freedom".
3. Pindutin ang {{key:D}}. I-click ang ilalim na linya, i-click sa ibaba nito, i-type ang `80`, {{key:Enter}}.
4. I-click ang kaliwang linya, i-click sa kaliwa nito, i-type ang `60`, {{key:Enter}}.
5. Lagyan ng sukat ang maikling itaas na linya ng `20` at ang panloob na patayong linya ng `45` sa parehong paraan.
6. Ang chip ay magsasabing **Ganap na tinukoy** at magiging tinta ang buong L.

## Ayusin ang sketch na sobra ang tukoy

Kapag ang bagong relation o dimension ay sumasalungat sa iba, hindi gumagalaw ang PartCraft ng anuman. Nananatili ang geometry kung paano ito dati, nagiging pula ang mga kasangkot na relation, at pinapangalanan ng status bar ang mga ito:

- "Sobra ang tukoy: Hindi kayang matugunan nang sabay ang Horizontal, Distance 40. I-undo, o burahin ang isa sa mga ito." Nagkakasalungatan ang mga relation.
- "Sobra ang tukoy: Naipahihiwatig na ang Parallel. Burahin ito." Walang naidadagdag ang relation: pinipilit na ito ng iba. (Halimbawa, parallel na ang mga gilid ng rectangle.)

Para ayusin ito:

1. Pindutin ang {{key:Mod+Z}} para i-undo ang huling pagbabago, o
2. Hanapin ang pulang item sa listahan ng **Relations and dimensions** sa kanang panel (bukas at pula ang grupong naglalaman nito) at piliin ang **Delete** sa tabi nito. Maaari mo ring i-click ang simbolo o numero nito sa sketch at pindutin ang {{key:Delete}}.

:::note
Walang "driven" (reference) na dimension sa build na ito. Ang dimension na magpapakita lamang ng sukat na naayos na ng ibang relation ay ituturing na sobra ang tukoy. Basahin ang mga sukat sa panel sa halip: piliin ang linya at tingnan ang mga Dimension button, o suriin ang part facts pagkatapos mag-extrude.
:::

Ang sketch na sobra ang tukoy at may tunay na salungatan ay nagpapabigo sa feature na gumagamit nito ("Sobra ang tukoy: 1 relation ang hindi kayang matugunan nang sabay."), at minamarkahan ito ng history bilang **⚠ error**. Ang sketch na sobra lang ang relation ay bumubuo pa rin, na may ⚠ warning.

## I-drag para hanapin kung ano ang malaya

Sa Piliin, i-drag ang kahit anong asul na punto o linya. Pinakakaunti ang galaw na ginagawa ng solver habang pinananatili ang bawat relation. Kung masisira ng pag-drag ang isang relation, babalik sa dating puwesto ang geometry. Ito ang pinakamabilis na paraan para makita kung aling dimension ang kulang pa.

## Ang listahan ng relations

Kapag walang napili, inilalista ng kanang panel ang **Relations and dimensions**. May mga ito ang bawat row:

- **Edit** (dimensions lang): binubuksan ang kahon ng numero;
- **Select**: pinipili ito sa sketch;
- **Delete**: binubura ito.

Ang mga relation ng iisang uri na lumalabas nang higit sa isang beses ay nasa iisang row, gaya ng "Coincident × 5" para sa rectangle na nakakabit sa origin. I-click ang row para buksan ito: nakalista ang bawat relation ayon sa mga tinatalian nito ("point p2, point p4") na may sariling **Select** at **Delete**. Ang mismong row ay may:

- **Select**: pinipili silang lahat sa sketch;
- **Delete all**: binubura silang lahat nang sabay ({{key:Mod+Z}} ang nagbabalik sa mga ito).

Kusang bumubukas ang grupong may relation na sobra ang tukoy, at pula ang pangalan nito. Laging nakalista ang dimensions na isa kada row, kasama ang kanilang halaga.

Kapag may napiling geometry, tanging ang **Relations on the selection** ang ipinapakita ng listahan.
