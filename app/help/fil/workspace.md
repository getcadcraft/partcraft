---
title: Ang screen ng PartCraft
summary: Isang paglilibot sa bawat bar at panel: ang toolbar at kung paano ito nagbabago, ang history, ang part facts, ang 3D view, ang properties panel at ang status bar.
keywords: screen, layout, toolbar, history, feature tree, properties, panel, status bar, interface, ui, paglilibot, full screen
from: 7394fc49
---

Limang bahagi ang screen: ang toolbar sa itaas, ang history sa kaliwa, ang 3D view sa gitna, ang properties panel sa kanan at ang status bar sa ilalim. Nasa itaas nilang lahat ang CadCraft app bar.

## Ang app bar

Ang manipis na bar sa pinakatuktok ay pag-aari ng site ng CadCraft, hindi ng PartCraft mismo. Ipinapakita nito ang pangalan ng app at kung saan ito tumatakbo, isang version menu, **About PartCraft**, ang button ng screen mode at ang switch ng theme na Paper / Model.

- **Paper** ay madilim na linya sa maliwanag na sheet. **Model** ay maliwanag na linya sa madilim na background. Sumusunod ang kulay ng sketch sa theme.
- {{ui:Mga setting}} (ang gear, o {{key:Mod+,}}) ay may tab na {{ui:PartCraft}}: aling mouse button ang nagpapaikot sa view, mouse wheel o trackpad, at ang relation habang nagsa-sketch. Tingnan ang [Mga setting ng PartCraft](topic:settings).
- Ang button ng screen mode, o {{key:Ctrl+Shift+F}}, ay nagpapalipat-lipat sa normal, full screen, at full screen na nakatago ang mga bar. Kapag nakatago ang mga bar, ilipat ang pointer sa itaas na gilid (o i-tap doon) para ibalik ang mga ito. Ibinabalik ng {{key:Esc}} sa normal. Ang key na ito ay {{key:Ctrl+Shift+F}} din sa Mac, hindi ⌘.

## Ang toolbar

Naka-grupo ang toolbar. Nagbabago ito ayon sa ginagawa mo, para magkasya sa isang hanay:

| Grupo | Mga button | Ipinapakita |
|---|---|---|
| File | {{ui:Bago}}, {{ui:Buksan}}, {{ui:I-save}}, {{ui:Export}} (isang menu) | Palagi |
| Sketch | {{ui:Sketch}} | Kapag walang bukas na sketch |
| Sketch | {{ui:Lumabas}}, {{ui:Linya}}, {{ui:Rectangle}}, {{ui:Bilog}}, {{ui:Arko}}, {{ui:Punto}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Habang bukas ang sketch lang |
| Features | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Higit pa}} (isang menu: Revolved cut, Plane, Axis, Punto, Sweep, Loft, Draft) | Sa piyesa, hindi habang bukas ang sketch o drawing. Gumagana ang Fillet at Chamfer sa mga tuwid na edge sa pagitan ng dalawang flat face; ang Shell at Draft sa flat face. Hindi pa nagagawa sa bersyong ito ang Sweep at Loft (kailangan ng exact kernel); kapag na-click, sinasabi ito |
| Features | {{ui:Tapos}} | Habang pumipili ka ng edge o face para sa fillet, chamfer, shell o draft lang |
| Drawing | {{ui:Drawing}} | Sa piyesa (magagamit kapag may solid na ang piyesa) |
| Drawing | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Bumalik}} | Sa drawing sheet lang |
| Assembly | {{ui:Assembly}} | Sa piyesa (magagamit kapag may solid na ang piyesa) |
| Assembly | {{ui:Magdagdag ng kopya}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:I-edit ang part}}, {{ui:Isara}} | Sa assembly lang |
| Assembly | {{ui:Bumalik}} | Habang nine-edit mo ang piyesa mula sa assembly |
| Edit | {{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}}, {{ui:I-paste}}, {{ui:Higit pa}} (isang menu: Cut, Copy, Paste, Paste in place, Duplicate, Delete, Select all, Select none) | Palagi; bawat item ay gumagana sa sketch, history o assembly na kinaroroonan mo |
| View | {{ui:Fit}}, {{ui:Normal sa}}, {{ui:Views}} (isang menu: Measure, Mass properties, Section, Draft, Zebra, Curvature, {{ui:Base planes}}, pagkatapos Isometric, Front, Back, Top, Bottom, Right, Left) | Palagi |

I-hover ang button para makita kung ano ang ginagawa nito at ang key nito. Ang button na naka-gray ay hindi magamit sa ngayon: halimbawa ang mga feature button habang bukas ang sketch, o ang {{ui:Joint}} bago magkaroon ng dalawang piyesa ang assembly.

Inililista ng menu na {{ui:Higit pa}} sa grupong Edit ang bawat aksyon sa pag-edit kasama ang key nito. Nakadepende sa kinaroroonan mo kung ano ang ina-apply ng copy at paste; tingnan ang [Copy, paste at duplicate](topic:copy-paste). Sinasabi ng tooltip ng naka-gray na item kung bakit hindi ito kayang gumana sa ngayon.

Nasa menu na {{ui:Export}} ang {{ui:STL, para sa 3D printing}}, {{ui:3MF, para sa 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF ng sketch o flat face}} at {{ui:Drawing (PDF): mga view, section, detail, GD&T}}. Naka-gray ang dalawang exact STEP na item: hindi pa sila nagagawa sa bersyong ito, kaya gamitin ang {{ui:STEP (faceted, mesh kernel)}}.

## Ang history (kaliwa)

Ang panel sa kaliwa ay ang feature history ng piyesa, ang listahang binubuo ng PartCraft mula taas hanggang ibaba.

- Ang heading ay ang pangalan ng piyesa ("Part1" hanggang palitan mo ito).
- **Front plane**, **Top plane** at **Right plane** ang nauuna. I-click ang isa para piliin ito; naka-highlight ito sa view.
- Sa ibaba nila ang mga feature mo sa pagkakasunod ng pagkakagawa. Naka-indent sa ilalim ng feature na gumagamit nito ang sketch na ginagamit ng isang feature.
- May flag sa dulong kanan ng bawat row na nagsasabi ng estado nito:

| Flag | Kahulugan |
|---|---|
| (wala) | Built, at ganap na tinukoy ang sketch |
| − | Sketch na under defined (puwede pa itong gumalaw) |
| + | Sketch na over defined |
| ⚠ | Built, may babala (i-hover para mabasa) |
| ⚠ error | Nabigo ang feature. I-hover para mabasa kung bakit, o i-click |
| ⚠ not built | Kailangan ng feature ang isa pang nabigo o naka-off |
| off | Na-suppress |

- Ipinapakita ng bawat feature ang pangunahing numero nito pagkatapos ng pangalan, gaya ng "25 mm" para sa Extrude o "Ø6.6 thru" para sa butas. I-double-click ang numero, o pindutin ang {{key:F2}} sa row, para baguhin ito roon mismo. Tingnan ang [Baguhin ang mga sukat](topic:change-sizes).
- I-click ang feature para i-edit ito sa kanan. I-double-click ang sketch para buksan ito.
- Kapag nag-roll back ka, may row na **Rollback bar · roll forward** sa listahan. Naka-gray at hindi built ang mga feature sa ibaba nito.
- Kapag may naka-focus na row, ginagamit ang {{key:Up}} at {{key:Down}} para lumipat sa pagitan ng mga row, at ang {{key:Alt+Up}} / {{key:Alt+Down}} para ilipat ang mismong feature, kung pinapayagan ito ng history.

Sa assembly, ang parehong panel ay naglilista ng **Mga piyesa** (ang una ay minarkahang "naka-ground") at **Mga joint** sa halip.

### Mga katangian ng piyesa

Sa ilalim ng history, inililista ng kahon na **Part** ang **Volume**, **Lawak ng surface**, **Sukat (X × Y × Z)**, **Through holes**, **Bodies**, **Triangles**, ang bilang ng **Features** at kung ilan ang **Failing**. Ang volume at area ay mula sa faceted na solid na binuo ng mesh kernel, bahagyang mas mababa kaysa tunay na halaga para sa mga bilog na hugis (tingnan ang [Features at ang mga opsyon nito](topic:features#curves-resolution)).

Sa assembly, ang kahon ay may heading na **Assembly**: Mga piyesa, Mga instance, Mga joint, Hindi pa naka-joint at Interference.

## Ang 3D view (gitna)

Ipinapakita ng view ang solid, ang mga base plane at anumang sketch na hindi pa ginagamit ng feature.

Iginuguhit nang buo ang mga base plane habang walang laman ang piyesa. Kapag may solid na, humahakbang ang mga ito paatras: iginuguhit nang malabo, para hindi tabunan ang piyesa, at dumadaan ang mga click sa mga ito papunta sa piyesa. Bumabalik silang buo habang pumipili ka kung saan magsa-sketch ({{ui:Sketch}} na walang napiling ibang bagay) at kapag pumili ka ng isa sa history. Itinatago ng {{ui:Views}} › {{ui:Base planes}} ang lahat ng ito; nananatili silang nakikita habang pumipili ka kung saan magsa-sketch. Tandaan ng PartCraft ang pinili mong ito.

- I-drag para paikutin ang piyesa, i-right-drag o middle-drag para mag-pan, i-roll ang wheel para mag-zoom sa kinaroroonan ng pointer. Detalye sa [Mga key at mouse](topic:keyboard).
- I-hover ang face, edge o plane para makitang umiilaw ito. I-click para piliin. Buong naka-highlight ang mga face, at buong iginuguhit at napipili ang mga edge. Ang {{key:Shift}}+click ay nagko-collect ng ilang edge o face. Nananatili silang minarkahan.
- Umiikot kasama ng piyesa ang view cube sa itaas-kanan: i-click ang face, edge o sulok para tumingin mula roon, i-drag para paikutin, ibinabalik ng house button sa simula. Tingnan ang [Ang view cube](topic:view-cube).
- Kapag napili ang Extrude, may kulay-kahel na arrow sa dulong face nito, at ang Revolve ay may kurbadong arrow sa dulo ng ikot nito: i-drag ito para baguhin ang lalim o anggulo, o mag-type sa kahon sa tabi nito. Tingnan ang [Baguhin ang mga sukat](topic:change-sizes#drag-it-in-the-view).
- Kapag walang laman ang piyesa, may kahong may heading na **Start a part** na naglilista ng mga unang hakbang.
- I-drop ang `.partcraft.json` o `.partcraft-asm.json` na file kahit saan sa view para buksan ito. Ang file na `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` na i-drop doon ay nabubuksan bilang solid body.

### Habang pumipili ka ng edge o face

Pagkatapos ng {{ui:Fillet}}, {{ui:Chamfer}} o {{ui:Shell}} na walang napiling bagay (o {{ui:Pumili ng mga edge}} sa ganoong feature), ipinapakita ng piyesa ang anyo nito bago ang feature na iyon. I-click ang mga edge o face para idagdag o alisin ang mga ito; ipinapakita ng mga marka nila kung ano ang nasa loob. Tinatapos ito ng {{ui:Tapos}} o {{key:Esc}}. Tingnan ang [Bilugin, bevel at gawing guwang](topic:fillet-chamfer-shell).

### Sa drawing sheet

Pinapalitan ng {{ui:Drawing}} ang 3D view ng A3 drawing sheet. Nagzo-zoom ang wheel, nagpa-pan ang right o middle drag, at ang {{key:F}} ay nagfi-fit. Tingnan ang [Gumawa ng drawing](topic:drawing-pdf).

### Habang bukas ang sketch

Umiikot ang view para diretsong tumingin sa sketch plane, at lumilitaw sa ibabaw ang 2D sketch layer. Ang piyesa ay nagpapakita lamang ng mga feature na nagawa bago ang sketch na ito. Ipinapakita ng strip sa itaas-kaliwa ang state chip ng sketch ("Fully defined", "Under defined · 3 degrees of freedom" at iba pa) at ang pangalan nito, gaya ng "Sketch2 on a face of Extrude1".

## Ang properties panel (kanan)

Ipinapakita ng panel sa kanan ang anumang napili, at ang heading nito ang nagpapangalan dito:

- **Part** (walang napili): ang **Name** ng piyesa at ang setting na **Curves**.
- Isang plane: isang button na {{ui:Sketch dito}}.
- Isang **Face**: anong uri ito (Flat face, Cylinder na may radius at axis nito, Cone, Sphere o Torus), ang area nito, aling feature ang gumawa nito, at para sa flat face, ang {{ui:Sketch sa face na ito}}, {{ui:Normal sa}}, {{ui:I-export ang face bilang DXF}}, {{ui:I-extrude mula dito}}, {{ui:I-cut papasok dito}} at {{ui:Butas dito}} (tingnan ang [Hilahin o itulak ang buong face](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Isang **Edge**: ang uri nito (tuwid, bilog na may center at radius nito, o curve), ang haba nito at ang dalawang face na nasa pagitan nito (gaya ng "Extrude1 end face and Extrude1 side"), kasama ang mga button na {{ui:Fillet}} at {{ui:Chamfer}}.
- Ilang edge o face na napili gamit ang {{key:Shift}}: ilan sila, kasama ang {{ui:Fillet}} at {{ui:Chamfer}} para sa edge, at {{ui:Linisin}}.
- Isang feature: ang mga numero at opsyon nito, ang mga dimension ng sketch nito, pagkatapos ang {{ui:I-suppress}}, {{ui:Ibalik dito}}, {{ui:Ilipat pataas}}, {{ui:Ilipat pababa}}, {{ui:Burahin}} at ang **Name** nito.
- Isang bukas na sketch: ang estado nito, ang mga relation na maidadagdag sa napili, ang listahan ng mga relation at dimension, ang **Add by coordinates**, at ang {{ui:Lumabas sa sketch}}, {{ui:Fit}} at {{ui:I-export bilang DXF}}.
- Sa drawing sheet: ang mga setting ng section at detail, o ang napiling GD&T symbol.
- Sa assembly: ang assembly, ang napiling piyesa, o ang napiling joint.

Nagkakabisa ang bawat number box kapag pinindot mo ang {{key:Enter}} o {{key:Tab}}, o kapag nag-click ka sa labas. Agad na nire-rebuild ang piyesa; walang OK button. Gamitin ang {{key:Mod+Z}} para bumalik.

## Ang status bar (ibaba)

- Sa kaliwa, ang coordinates ng pointer sa sketch (habang bukas lamang ang sketch).
- Sa gitna, mga mensahe: kung ano ang susunod na gagawin, at kung bakit may tinanggihan. Basahin ito kapag parang walang nangyayari.
- Malapit sa kanan, ang kernel chip: laging "Mesh kernel" sa bersyong ito. I-hover para malaman kung ano iyon. Tingnan ang [Ang mesh kernel](topic:solid-kernels).
- Sa kanan, isang chip: "Rebuilding…" habang nire-rebuild ang piyesa, pagkatapos "Rebuilt in … ms" kapag maayos ang lahat, o "1 feature ang nag-fail". Sa assembly, nagsasabi ito ng "Placed in … ms" o binibilang ang mga problema sa joint.

Tingnan din ang [Magsimula ng manual sa Illustrate](topic:illustrate): ang workspace na gumagawa ng manual ng assembly mula sa mga piyesa at assembly mo.

## Sa makitid na screen

Hanggang 760 pixels ang lapad, gaya ng phone, pinapanatili ng view ang screen: ang toolbar ay isang hanay na nagsa-scroll pagilid, at ang mga panel ay bumubukas bilang sheet mula sa bar sa ibaba. Itinatago ng {{ui:Mga tool}} ang toolbar at inilalagay ito ng {{ui:Move}} sa ibaba. Tingnan ang [Trackpad, touch at maliliit na screen](topic:trackpad-and-touch).
