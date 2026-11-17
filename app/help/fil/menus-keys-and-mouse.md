---
title: Mga menu, key at mouse
summary: Pumili ng menu style na tugma sa paraan ng pagtatrabaho mo, bigyan ng sariling key ang anumang command, ilipat ang mga command sa pagitan ng ribbon tab, at itakda ang gawain ng wheel at ng bawat mouse button sa 3D view.
keywords: menu style, menu, ribbon, toolbar, feature tree, keyboard shortcut, hotkey, key, i-customize, remap, rebind, mouse, wheel, i-invert, direksyon ng zoom, middle button, orbit, pan, export, import, pagpapalit, pamilyar
from: 8445b06c
---

Pareho ang mga command ng PartCraft anuman ang paraan ng pag-abot mo sa mga ito. Ang **menu style** ay nagpapasya lamang kung saan sila nakalagay sa screen, kung ano ang tawag sa mga ito roon, at kung aling mga key ang nagpapatakbo sa mga ito. Pumili ng isa sa {{ui:Mga setting}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Mga menu, key at mouse}}; agad ang pagbabago, at natatandaan ito ng browser na ito.

## Ang dalawang style

| Style | Ang makukuha mo |
|---|---|
| {{ui:PartCraft}} | Sariling toolbar ng PartCraft: ang workspace switcher, File, Sketch, Features, Drawing, Assembly, Edit at View. Mga key na {{key:S}} sketch, {{key:F}} fit, {{key:M}} measure, {{key:X}} section view. Ang panimulang style. |
| {{ui:Feature tree}} | Ribbon na nakaayos gaya ng pag-aayos ng mga feature-based na mechanical CAD program ng sarili nila: isang menu na {{ui:File}} (kasama ang lahat ng export), mga mabilisang button, at ang mga tab na {{ui:Features}}, {{ui:Sketch}}, {{ui:Mga surface}}, {{ui:Evaluate}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Studies}} (ang mga workspace at ang kanilang mga tool), {{ui:Illustrate}} (ang mga manual na tool ng Illustrate workspace; lumilipat muna sa Illustrate ang mga tool nito) at {{ui:View}}. Nagsisimula ang {{ui:Features}} sa {{ui:Sketch}}, dahil nagsisimula ang piyesa sa isang sketch. Karagdagang key: {{key:E}} extrude, {{key:H}} hole, at {{key:V}} saka isang letra para sa view: {{key:V}} {{key:F}} harap, {{key:V}} {{key:B}} likod, {{key:V}} {{key:T}} itaas, {{key:V}} {{key:O}} ibaba, {{key:V}} {{key:R}} kanan, {{key:V}} {{key:L}} kaliwa, {{key:V}} {{key:I}} isometric, {{key:V}} {{key:N}} normal sa. Sa 3D view, ang middle button ang nag-o-orbit, ang {{key:Shift}} at middle button ang nag-pa-pan, ang kanang button ang nag-pa-pan, at ang kaliwang button ay pumipili lamang. |

Pinananatili ng bawat style ang {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} at {{key:Mod+A}}.

Lumilipat muna sa workspace nito ang tool ng ibang workspace; bumabalik muna sa Design ang Design tool na napili sa ibang workspace. Naghihintay ng sketch ang mga Sketch tool, ng drawing sheet ang mga drawing tool, ng assembly ang mga assembly tool: sinasabi ng status bar kung ano ang unang gagawin.

:::tip
Sa loob ng sketch, sa drawing sheet, sa assembly at sa iba pang workspace, nananatili ang kahulugan ng mga letra roon ({{key:L}} linya, {{key:R}} rectangle, {{key:J}} joint …) sa bawat style. Nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at ng mga arrow. Walang epekto ang key ng sariling layout ng PartCraft na ibinigay ng style mo sa ibang command, at sinasabi ng status bar kung saan napunta ang command nito.
:::

## Gawin itong sa iyo

1. Piliin ang style na pinakamalapit sa gusto mo, saka i-click ang {{ui:I-customize…}}.
2. Sa {{ui:Mga key at menu}}, hanapin ang isang command (nakakatulong ang search box). I-click ang {{ui:Magdagdag ng key}} at pindutin ang key, o dalawang key nang sunud-sunod. I-click ang key para alisin ito.
3. Sa ribbon, inililipat ng {{ui:Kung saan ito nakalagay}} ang command sa ibang tab at panel, sa menu na {{ui:File}}, o sa {{ui:Keys lamang}}.
4. Sa {{ui:Mouse}}, itakda ang wheel, ang mga button na nagpa-pan ng sketch, at kung ano ang ginagawa ng bawat button sa 3D view.
5. Bigyan ito ng pangalan at i-click ang {{ui:I-save}}.

Ang pag-save ng built-in na style ay gumagawa ng sarili mong kopya ("Ang aking Feature tree"); hindi kailanman nagbabago ang built-in. Ang key na ibinigay sa dalawang command, o ang key na tatakbo bago pa ma-type ang dalawang-letrang key, ay ipinapakita sa pula at kailangang ayusin bago ka makapag-save.

## Mouse

- **Mouse wheel**: {{ui:Ang pag-scroll pataas ay nag-zoom in}} (ang panimula) o {{ui:Ang pag-scroll pataas ay nag-zoom out}}, at kung gaano kabilis. Laging nag-zo-zoom ang trackpad pinch ayon sa galaw ng daliri mo.
- **Pan ang sketch gamit ang**: ang middle button, ang kanang button, o pareho. Tinatapos pa rin ng right click sa sketch ang hakbang ng tool.
- **I-drag sa 3D view**: Pinananatili ng {{ui:Sariling setting ng bawat view}} ang setting ng PartCraft ({{ui:Mga setting}} › {{ui:PartCraft}}: kaliwa ang nag-o-orbit, o middle ang nag-o-orbit). O itakda ang bawat button sa orbit, pan, zoom o wala; ang {{key:Shift}} kasama ng orbit button ay nag-pa-pan. Pumipili pa rin ang click na walang drag.

## Dalhin ito kasama mo

Sine-save ng {{ui:Export}} ang style na ginagamit bilang maliit na `.ccinput.json` file; nagdaragdag ang {{ui:Import…}} ng isa, mula sa ibang computer o katrabaho. Ang na-import na file ay maaari lamang tumuro sa sariling command ng PartCraft: anumang iba pa rito ay tinatanggal at binibilang sa status bar. Inaalis ng {{ui:Burahin ang istilong ito}} ang isa sa sarili mong style.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Gamitin ang istilong ito sa bawat app}} sa ilalim ng mga style card ay nagpapabukas sa bawat app sa tugmang style nito (sariling toolbar nito, o isang ribbon), kasama ang mga pagbabagong ginawa mo sa bawat app. Ang pagpili ng ibang style sa isang app ay nagbabago lamang sa app na iyon.
:::

Kaugnay: [Mga key at mouse](topic:keyboard) · [Mga setting ng PartCraft](topic:settings) · [Galing sa ibang parametric modeler](topic:coming-from)
