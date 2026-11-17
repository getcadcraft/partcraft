---
title: Ang screen ng PartCraft
summary: Paglilibot sa bawat bar at panel: ang toolbar at kung paano ito nagbabago, ang history, ang part facts, ang 3D view, ang properties panel at ang status bar.
keywords: screen, layout, toolbar, history, feature tree, properties, panel, status bar, interface, ui, paglilibot, full screen
from: 5b5bb843
---

Ang screen ay may limang bahagi: ang toolbar sa itaas, ang history sa kaliwa, ang 3D view sa gitna, ang properties panel sa kanan at ang status bar sa ibaba. Nasa itaas nilang lahat ang CadCraft app bar.

## Ang app bar

Ang manipis na bar sa pinakataas ay pag-aari ng CadCraft site, hindi ng PartCraft mismo. Ipinapakita nito ang pangalan ng app at kung saan ito tumatakbo, isang version menu, **About PartCraft**, ang screen-mode button at ang Paper / Model theme switch.

- **Paper** ay madilim na linya sa maliwanag na sheet. **Model** ay maliwanag na linya sa madilim na background. Sumusunod sa theme ang mga kulay ng sketch.
- Ang {{ui:Mga setting}} (ang gear, o {{key:Mod+,}}) ay may tab na {{ui:PartCraft}}: aling mouse button ang nagpapaikot ng view, mouse wheel o trackpad, at mga relasyon habang nagsa-sketch. Tingnan ang [Mga setting ng PartCraft](topic:settings).
- Ang screen-mode button, o {{key:Ctrl+Shift+F}}, ay nagpapalipat-lipat sa normal, full screen, at full screen na nakatago ang mga bar. Kapag nakatago ang mga bar, ilapit ang pointer sa itaas na gilid (o i-tap doon) para ibalik ang mga ito. Ibinabalik ng {{key:Esc}} sa normal. Ang susi ay {{key:Ctrl+Shift+F}} din sa Mac, hindi ⌘.

## Ang toolbar

Nakapangkat ang toolbar. Nagbabago ito ayon sa ginagawa mo, para kasya sa isang hilera:

| Grupo | Mga button | Ipinapakita |
|---|---|---|
| File | {{ui:Bago}}, {{ui:Buksan}}, {{ui:I-save}}, {{ui:Export}} (isang menu) | Palagi |
| Sketch | {{ui:Sketch}} | Kapag walang bukas na sketch |
| Sketch | {{ui:Lumabas}}, {{ui:Linya}}, {{ui:Rectangle}}, {{ui:Bilog}}, {{ui:Arko}}, {{ui:Punto}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Kapag may bukas na sketch lang |
| Features | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Higit pa}} (isang menu: Revolved cut, Plane, Axis, Punto, Sweep, Loft, Draft) | Sa part, hindi habang bukas ang sketch o drawing. Gumagana ang Fillet at Chamfer sa tuwid na edge sa pagitan ng dalawang flat face; ang Shell at Draft sa flat face. Hindi pa nabubuo ang Sweep at Loft sa bersyong ito (kailangan nila ng exact kernel); sinasabi ng pag-click sa isa sa mga ito iyon |
| Features | {{ui:Tapos}} | Kapag pumipili ka lang ng edge o face para sa fillet, chamfer, shell o draft |
| Drawing | {{ui:Drawing}} | Sa part (magagamit kapag may solid na ang part) |
| Drawing | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Bumalik}} | Sa drawing sheet lang |
| Assembly | {{ui:Assembly}} | Sa part (magagamit kapag may solid na ang part) |
| Assembly | {{ui:Magdagdag ng kopya}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:I-edit ang part}}, {{ui:Isara}} | Sa assembly lang |
| Assembly | {{ui:Bumalik}} | Habang nine-edit mo ang part mula sa assembly |
| Edit | {{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}}, {{ui:I-paste}}, {{ui:Higit pa}} (isang menu: Cut, Kopyahin, I-paste, I-paste sa lugar, Duplicate, Burahin, Piliin lahat, Huwag piliin ang alinman) | Palagi; bawat item ay gumagana sa sketch, history o assembly na kinaroroonan mo |
| View | {{ui:Fit}}, {{ui:Normal sa}}, {{ui:Views}} (isang menu: Measure, Mass properties, Section, Draft, Zebra, Curvature, {{ui:Base planes}}, pagkatapos Isometric, Front, Bumalik, Itaas, Ibaba, Kanan, Kaliwa) | Palagi |

I-hover ang button para makita kung ano ang ginagawa nito at ang susi nito. Ang button na naka-gray ay hindi magagamit sa ngayon: halimbawa ang mga feature button habang bukas ang sketch, o ang {{ui:Joint}} bago magkaroon ng dalawang part ang assembly.

Nakalista sa {{ui:Higit pa}} menu ng pangkat na Edit ang bawat aksyon sa pag-edit kasama ang susi nito. Kung saan gagana ang copy at paste ay nakasalalay sa kinaroroonan mo; tingnan ang [Kopyahin, i-paste at duplicate](topic:copy-paste). Sinasabi ng tooltip ng naka-gray na item kung bakit hindi ito makakilos ngayon.

Nasa {{ui:Export}} menu ang {{ui:STL, para sa 3D printing}}, {{ui:3MF, para sa 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF ng sketch o flat face}} at {{ui:Drawing (PDF): mga view, section, detail, GD&T}}. Isinusulat ng mga exact STEP item ang mga bilog na face sa tunay nilang surface; isinusulat ng mga faceted ang mga ito bilang flat facet.

## Ang history (kaliwa)

Ang panel sa kaliwa ay ang feature history ng part, ang listahang binubuo ng PartCraft mula taas hanggang baba.

- Ang heading ay ang pangalan ng part ("Part1" hanggang palitan mo ito).
- Nauuna ang **Front plane**, **Top plane** at **Right plane**. I-click ang isa para piliin ito; nagha-highlight ito sa view.
- Sa ilalim nila ang mga feature mo ayon sa pagkakagawa. Ang sketch na ginagamit ng isang feature ay naka-indent sa ilalim ng feature na iyon.
- Ang flag sa kanang dulo ng isang hilera ay nagsasabi ng estado nito:

| Flag | Ibig sabihin |
|---|---|
| (wala) | Nabuo na, at buo ang sketch |
| − | Sketch na under defined (maaari pa itong gumalaw) |
| + | Sketch na over defined |
| ⚠ | Nabuo na, may babala (ituro para mabasa) |
| ⚠ error | Pumalya ang feature. Ituro para mabasa kung bakit, o i-click |
| ⚠ not built | Kailangan ng feature ang isa pang pumalya o naka-off |
| off | Suppressed |

- Ipinapakita ng bawat feature ang pangunahing numero nito pagkatapos ng pangalan, gaya ng "25 mm" para sa Extrude o "Ø6.6 thru" para sa butas. I-double-click ang numero, o pindutin ang {{key:F2}} sa hilera, para baguhin ito roon mismo. Tingnan ang [Pagbabago ng sukat](topic:change-sizes).
- I-click ang feature para i-edit ito sa kanan. I-double-click ang sketch para buksan ito.
- Kapag nag-roll back ka, may hilera na **Rollback bar · roll forward** sa listahan. Naka-gray at hindi nabubuo ang mga feature sa ilalim nito.
- Kapag may nakatutok na hilera, lumilipat ang {{key:Up}} at {{key:Down}} sa pagitan ng mga hilera, at inililipat ng {{key:Alt+Up}} / {{key:Alt+Down}} ang mismong feature, kung pinapayagan ng history.

Sa assembly, ang parehong panel ay naglilista ng **Parts** (ang una ay may markang "grounded") at **Joints** sa halip.

### Mga detalye ng part

Sa ilalim ng history, inililista ng kahon na **Part** ang **Volume**, **Lawak ng surface**, **Laki (X × Y × Z)**, **Through holes**, **Body**, **Triangle**, ang bilang ng **Feature** at kung ilan ang **Pumapalya**. Ang volume at lawak ay mula sa faceted solid na binuo ng mesh kernel, bahagyang mas maliit kaysa sa totoong halaga para sa mga bilog na hugis (tingnan ang [Mga feature at ang mga opsyon nito](topic:features#curves-resolution)).

Sa assembly, ang kahon ay may heading na **Assembly**: Parts, Instances, Joints, Hindi naka-join at Interference.

## Ang 3D view (gitna)

Ipinapakita ng view ang solid, ang mga base plane at anumang sketch na hindi pa ginagamit ng feature.

Iginuguhit nang buo ang mga base plane habang walang laman ang part. Kapag may solid na ito, umuurong sila: iginuguhit nang mahina para hindi nila matakpan ang part, at dumadaan sa kanila ang click papunta sa part. Bumabalik silang buo habang pumipili ka kung saan magsa-sketch ({{ui:Sketch}} nang walang napili) at kapag pumili ka ng isa sa history. Itinatago sila nang tuluyan ng {{ui:Views}} › {{ui:Base planes}}; lumalabas pa rin sila habang pumipili ka kung saan magsa-sketch. Naaalala ng PartCraft ang pagpiling iyon.

- I-drag para paikutin ang part, right-drag o middle-drag para mag-pan, i-roll ang wheel para mag-zoom sa pointer. Detalye sa [Mga susi at mouse](topic:keyboard).
- I-hover ang face, edge o plane para makitang umiilaw ito. I-click para piliin. Buong nagha-highlight ang mga face, at buo ring iginuguhit at napipili ang mga edge. Ang {{key:Shift}}+click ay nagkakalap ng ilang edge o face. Nananatili silang may marka.
- Ang view cube sa kanang itaas ay umiikot kasama ng part: i-click ang face, edge o corner para tumingin mula roon, i-drag para paikutin; ibinabalik ng house button sa simula. Tingnan ang [Ang view cube](topic:view-cube).
- Ang napiling Extrude ay nagpapakita ng orange na arrow sa end face nito, ang Revolve ay may curved arrow sa dulo ng pag-ikot nito: i-drag ito para baguhin ang lalim o anggulo, o mag-type sa kahon sa tabi nito. Tingnan ang [Pagbabago ng sukat](topic:change-sizes#drag-it-in-the-view).
- Kapag walang laman ang part, may kahong may heading na **Start a part** na naglilista ng mga unang hakbang.
- I-drop ang file na `.partcraft.json` o `.partcraft-asm.json` kahit saan sa view para buksan ito. Ang file na `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` na i-drop doon ay bubukas bilang solid body.

### Habang pumipili ka ng edge o face

Pagkatapos ng {{ui:Fillet}}, {{ui:Chamfer}} o {{ui:Shell}} na walang napili (o {{ui:Pumili ng mga edge}} sa ganoong feature), ipinapakita ang part gaya ng bago ang feature na iyon. I-click ang mga edge o face para idagdag o alisin ang mga ito; ipinapakita ng kanilang mga marka kung ano ang nasa loob. Ang {{ui:Tapos}} o {{key:Esc}} ang tatapos. Tingnan ang [Round, bevel at hollow](topic:fillet-chamfer-shell).

### Sa drawing sheet

Pinapalitan ng {{ui:Drawing}} ang 3D view ng A3 drawing sheet. Nagza-zoom ang wheel, nagpa-pan ang right o middle drag, at kinakasya ng {{key:F}} ang view. Tingnan ang [Gumawa ng drawing](topic:drawing-pdf).

### Habang bukas ang sketch

Lumiliko ang view para tumingin nang diretso sa sketch plane, at may 2D sketch layer na lumalabas sa ibabaw. Ipinapakita lang ng part ang mga feature na nagawa bago ang sketch na ito. Ipinapakita ng strip sa kaliwang itaas ang state chip ng sketch ("Fully defined", "Under defined · 3 degrees of freedom" at iba pa) at ang pangalan nito, gaya ng "Sketch2 on a face of Extrude1".

## Ang properties panel (kanan)

Ipinapakita ng panel sa kanan ang anumang napili, at ang heading nito ang nagpapangalan dito:

- **Part** (walang napili): ang **Pangalan** ng part at ang setting na **Curves**.
- Isang plane: isang button na {{ui:Sketch dito}}.
- Isang **Face**: kung anong uri ito (Flat face, Cylinder kasama ang radius at axis nito, Cone, Sphere o Torus), ang area nito, aling feature ang gumawa nito, at para sa flat face: {{ui:Sketch sa face na ito}}, {{ui:Normal sa}}, {{ui:I-export ang face bilang DXF}}, {{ui:I-extrude mula dito}}, {{ui:I-cut papasok dito}} at {{ui:Butas dito}} (tingnan ang [Hilahin o itulak ang buong face](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Isang **Edge**: ang uri nito (tuwid, bilog na may center at radius nito, o curve), ang haba nito at ang dalawang face na nasa pagitan nito (gaya ng "Extrude1 end face and Extrude1 side"), kasama ang mga button na {{ui:Fillet}} at {{ui:Chamfer}}.
- Ilang edge o face na pinili gamit ang {{key:Shift}}: ilan ang mga ito, kasama ang {{ui:Fillet}} at {{ui:Chamfer}} para sa mga edge, at {{ui:Clear}}.
- Isang feature: ang mga numero at opsyon nito, ang mga dimension ng sketch nito, pagkatapos ang {{ui:Suppress}}, {{ui:Roll back to here}}, {{ui:Move up}}, {{ui:Move down}}, {{ui:Burahin}} at ang **Pangalan** nito.
- Isang bukas na sketch: ang estado nito, ang mga relasyong maidadagdag sa napili, ang listahan ng mga relasyon at dimension, **Idagdag ayon sa coordinates**, at {{ui:Lumabas sa sketch}}, {{ui:Fit}} at {{ui:Export as DXF}}.
- Sa drawing sheet: ang section at detail settings, o ang napiling GD&T symbol.
- Sa assembly: ang assembly, ang napiling part, o ang napiling joint.

Nagkakabisa ang bawat number box kapag pinindot mo ang {{key:Enter}} o {{key:Tab}}, o nag-click ka sa labas. Agad nire-rebuild ang part; walang OK button. Gamitin ang {{key:Mod+Z}} para bumalik.

## Ang status bar (ibaba)

- Sa kaliwa, ang coordinates ng pointer sa sketch (habang bukas lang ang sketch).
- Sa gitna, mga mensahe: kung ano ang gagawin sa susunod, at kung bakit tinanggihan ang isang bagay. Basahin ito kapag parang walang nangyayari.
- Malapit sa kanan, ang kernel chip: palaging "Mesh kernel" sa bersyong ito. I-hover ito para malaman kung ano ang ibig sabihin niyon. Tingnan ang [Ang mesh kernel](topic:solid-kernels).
- Sa kanan, isang chip: "Rebuilding…" habang nire-rebuild ang part, pagkatapos "Rebuilt in … ms" kapag maayos ang lahat, o "1 feature failing". Sa assembly, sinasabi nitong "Placed in … ms" o binibilang ang mga problema sa joint.

Tingnan din ang [Magsimula ng manual sa Illustrate](topic:illustrate): ang workspace na gumagawa ng mga manual ng assembly mula sa mga part at assembly mo.

## Sa makitid na screen

Hanggang 760 pixel ang lapad, gaya ng phone, pinananatili ng view ang screen: ang toolbar ay isang hilera na nagsa-scroll sa gilid, at ang mga panel ay bumubukas bilang sheet mula sa bar sa ibaba. Itinatago ng {{ui:Mga tool}} ang toolbar, at inilalagay ito ng {{ui:Move}} sa ibaba. Tingnan ang [Trackpad, touch at maliliit na screen](topic:trackpad-and-touch).
