---
title: Galing sa ibang parametric modeler
summary: Paano tumutugma ang mga ugali ng desktop parametric part modelers sa PartCraft, at ang mga pagkakaibang nakakalito sa mga bihasang user sa unang oras.
keywords: switching, lumipat, pamilyar, feature manager, design tree, smart dimension, boss extrude, cut extrude, hole wizard, mates, interference detection, rollback bar, property manager, mouse, pagkakaiba
from: fbacaee1
---

Kung nagdidisenyo ka ng piyesa sa SolidWorks, pamilyar sa iyo ang karamihan ng ideya ng PartCraft: mga sketch sa Front, Top at Right planes, relations at smart dimensions, isang feature history na may rollback bar, at mga assembly na inilalagay gamit ang mates. Iba ang paraan ng pag-abot sa mga ito sa ilang bahagi, at mas kaunti ang kayang gawin ng unang build na ito. Minamapa ng pahinang ito ang mga ugali mo at inililista ang mga sorpresa.

## Mga ugali, minapa

| Sanay ka sa | Sa PartCraft |
|---|---|
| The design tree on the left | Ang history sa kaliwa: planes muna, tapos features, na may sketches na naka-indent sa ilalim ng feature na gumagamit sa mga ito |
| Front, Top and Right planes | Ang parehong tatlo, dumadaan sa origin. Ang Front ay XY plane, ang Top ay XZ, ang Right ay YZ; paitaas ang Y |
| Sketch on a plane or face, then the confirmation corner to exit | {{ui:Sketch}} ({{key:S}}) sa napiling plane o flat face; {{ui:Exit}} o {{key:Esc}} hanggang magsara |
| Smart Dimension | {{ui:Dimension}} ({{key:D}}). I-click ang isa o dalawang item, tapos kung saan ilalagay ang numero. Ang lugar kung saan mo ito ilalagay ang pumipili kung horizontal, vertical o aligned |
| Add Relations in the property panel | Pumili ng items, tapos ang relation buttons sa kanang panel (Coincident, Horizontal, Parallel, Tangent, Equal at iba pa) |
| Automatic relations while sketching | Ang snaps ay nagdaragdag ng coincident, point-on-curve, horizontal at vertical relations |
| Blue / black / red sketch colors | Iisa ang ideya: asul kapag under defined, itim kapag fully defined, pula kapag over defined. Ipinapakita ng chip ang natitirang degrees of freedom |
| Centerline for revolves | {{ui:Centerline}} ({{key:N}}); ginagamit ng {{ui:Revolve}} ang unang centerline maliban kung pumili ka ng ibang axis |
| Sketch fillet | {{ui:Fillet}} ({{key:F}}) sa sketch: i-click ang sulok, i-type ang radius |
| Construction geometry toggle | {{ui:Construction}} ({{key:Q}}) |
| Extruded boss | {{ui:Extrude}}: Blind, Mid-plane, Up to face / next / vertex, Offset from face, pangalawang direksyon, taper, isang contour (Pick regions) |
| Extruded cut | {{ui:Cut}}: nagsisimula bilang Through all; lumipat sa Blind para sa pocket |
| Revolved boss / cut | {{ui:Revolve}} / {{ui:Higit pa}} › {{ui:Revolved cut}} |
| Reference plane / axis / point | {{ui:Higit pa}} › {{ui:Plane}}, {{ui:Axis}}, {{ui:Punto}} (tingnan ang [Reference planes, axes at points](topic:reference-geometry)) |
| Swept / lofted boss or cut, draft | {{ui:Higit pa}} › {{ui:Draft}} sa flat faces (tingnan ang [Sweep, loft at draft](topic:sweep-loft-draft)). Hindi pa nagagawa sa bersyong ito ang {{ui:Sweep}} at {{ui:Loft}} (kailangan nila ng exact kernel) |
| Hole Wizard | {{ui:Hole}} sa bawat maluwag na sketch point: simple, counterbore, countersink (90° / 82°) o tapped ISO metric M2–M24, through o blind |
| Linear / circular pattern, mirror | {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}} (features o ang buong body) |
| Fillet and chamfer on edges | {{ui:Fillet}} / {{ui:Chamfer}}: i-click ang edge, {{key:Shift}}+click para sa higit pa, tapos ang button. Isang radius; equal, two-distance o distance-angle chamfers. Sa bersyong ito, tuwid na edges lang sa pagitan ng dalawang flat faces, at ang rounds na nagtatagpo sa sulok ay mitred. Round o bevel ang kurbadong edges sa sketch ({{ui:Fillet}} sa sketch, {{key:F}}) |
| Shell | {{ui:Shell}}: i-click ang mga flat face na bubuksan, tapos ang button. Isang kapal ng wall |
| Open a STEP file | {{ui:Open}}: binabasa bilang triangles, isang solid body na pagbubuan ([Buksan ang STEP file](topic:import-step)) |
| Edit feature, then OK | I-click ang feature; baguhin ang mga numero sa kanan; nire-rebuild ito habang nagta-type ka. Walang OK, walang Cancel: gamitin ang {{key:Mod+Z}} |
| Edit sketch | I-double-click ang sketch sa history |
| Rebuild | Awtomatiko pagkatapos ng bawat pagbabago. Walang rebuild key |
| Suppress / unsuppress | {{ui:Suppress}} / {{ui:Unsuppress}} sa kanang panel |
| Drag the rollback bar | {{ui:Roll back to here}} sa isang feature; i-click ang "Rollback bar · roll forward" para bumalik |
| Drag a feature in the tree to reorder | {{ui:Move up}} / {{ui:Move down}} o {{key:Alt+Up}} / {{key:Alt+Down}}; tinatanggihan kasama ang dahilan kapag masisira nito ang dependency |
| Edit dimensions by double-clicking on the model | Piliin ang feature: nakalista sa kanang panel ang dimensions ng sketch nito |
| Mates: coincident, concentric, distance, angle | {{ui:Joint}} ({{key:J}}): pumili ng flat face sa bawat piyesa; ilalagay ng joint ang mga ito face to face. Ang **Centre on** sa isang axis ay gumagana tulad ng concentric; ang **Offset** tulad ng distance; ang **Angle** tulad ng angle |
| Fixed component | Ang unang piyesa ay naka-ground; binabago ito ng {{ui:Gawing naka-ground na piyesa ito}} |
| Insert component | {{ui:Magdagdag ng kopya}} o {{ui:Duplicate}} (isa pang kopya) o {{ui:Insert}} (mula sa part file) |
| Edit part in the assembly | {{ui:I-edit ang part}}, tapos {{ui:Bumalik}} |
| Interference detection | {{ui:Clash}} |
| Moving a component to see the motion | I-drag ang angle o offset slider ng revolute o slider joint; sinusuyod ito ng {{ui:Suriin ang galaw kung may banggaan}}. Piyesang walang joint: **Ilipat gamit ang kamay** (arrows na i-drag, o mga na-type na value) |
| Measure / Inspect | {{ui:Views}}, tapos {{ui:Measure}} ({{key:M}}): distances, angles, radii, areas; {{ui:Mass properties}} |
| Exploded view, BOM | Sa assembly na walang napili: **Exploded views** at **Bill of materials** sa kanang panel |
| Mass properties | Ang **Part** box: volume, surface area, size, ng faceted solid (bahagyang mababa sa mga bilog na piyesa). Walang mass: wala pang materyal |
| Save, Save As STEP | {{ui:Save}} ay nagda-download ng `.partcraft.json`; ang {{ui:Export}} ay may STL, 3MF, exact STEP (AP242 o AP214), faceted STEP, DXF at PDF drawing |
| Make a drawing from the part | {{ui:Drawing}}: awtomatikong A3 sheet na may tatlong view, isometric, isang section, isang detail, datums, feature control frames at finish symbols. Mga pangkalahatang sukat lang ang dinidimension |
| Middle-drag to rotate | Ang **Left-drag** ay umiikot dito. Ang middle o right-drag ay nagpa-pan. Nag-zo-zoom ang wheel sa lugar ng pointer |
| View orientation, Normal To | Ang {{ui:Views}} menu; {{ui:Normal to}} para sa napiling face, plane o sketch |
| Zoom to fit (F) | {{key:F}}, o {{ui:Fit}} (sa sketch, ang {{key:F}} ay ang Fillet tool) |
| Right-click menus | Wala. Ang right-drag ay nagpa-pan; sa sketch, tinatapos ng right-click ang line chain |

:::tip
Kung sanay ang mga kamay mo sa SolidWorks, piliin ang {{ui:Feature tree}} na menu style sa {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}: isang ribbon ng Features, Sketch, Surfaces, Evaluate, Drawing, Assembly at View tabs; ang gitnang button ay umiikot sa paligid, ang {{key:Shift}} at gitnang button ay nagpa-pan, at ang kaliwang button ay pumipili lang. Tingnan ang [Menus, keys at mouse](topic:menus-keys-and-mouse).
:::

## Mga pagkakaibang nakakalito sa mga tao

**Ang buong sketch ang profile.** Ginagamit ng Extrude at Revolve ang bawat saradong loop sa sketch. Hindi ka makapipili ng isang region o isang contour ng sketch para sa isang feature. Gumamit ng isang sketch bawat feature.

**Aling sketch ang kinukuha ng feature.** Ginagamit ng feature ang sketch na kakasara mo lang o ang napili sa history. Kapag walang napili, kinukuha nito ang pinakabagong sketch na wala pang feature na gumagamit. Kung mali ang nakuha mo, piliin ang tamang sketch at piliin ulit ang feature.

**Agad nagbabago ang mga pagbabago habang nagta-type ka.** Walang feature dialog na may OK at Cancel. Bawat numero ay agad nire-rebuild, at ang {{key:Mod+Z}} ang paraan pabalik. Sakop ng undo list ang mga pag-edit ng sketch, feature at setting.

**Hindi pinapayagang manatiling over defined nang tahimik.** Walang driven (reference) dimensions. Ang dimension na naayos na ng ibang relations ay iniuulat bilang over defined ("is already implied. Delete it." -> "ay naipahiwatig na. Burahin ito."). Ang salungat na dimension ay hindi ginagalaw ang geometry at nagiging pula. Burahin ang isa, o i-undo.

**Hindi pa nagagawa ang sweeps at lofts; may limitasyon ang fillets, chamfers, shells at drafts.** Binubuo ng bersyong ito ng PartCraft ang bawat piyesa gamit ang mesh kernel; laging sinasabi ng status bar chip ang "Mesh kernel". Gumagana ang fillets at chamfers sa tuwid na edges sa pagitan ng dalawang flat faces, at kapag nagtatagpo ang rounds sa sulok, mitred ang mga ito, hindi blended. Nagbubukas ang shells, at ang drafts ay nagtitilt, flat faces lang. Nananatiling clickable ang mga feature na nangangailangan ng exact kernel, pero sinasabing "not built yet" kapag pinili. Tingnan ang [Ang mesh kernel](topic:solid-kernels) at [Ano ang hindi pa nagagawa](topic:not-built-yet).

**Dalawang button na tinatawag na Fillet.** Sa sketch, ang {{ui:Fillet}} ({{key:F}}) ay nagbi-round ng sulok ng sketch. Sa piyesa, ang {{ui:Fillet}} sa Features group ay nagbi-round ng solid edges (tuwid na edges sa pagitan ng flat faces sa bersyong ito). Walang sweep o loft sa bersyong ito: tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).

**Kailangan ng Hole ng loose points.** Ang {{ui:Hole}} ay nagbu-drill sa mga point na ginawa gamit ang Punto tool. Hindi binibilang ang mga circle center at dulo ng linya.

**Through all ay para sa cuts lang.** Kailangan ng boss ng lalim. Wala pang "up to vertex / surface / next" na end conditions.

**Faceted ang solid.** Binubuo ng mesh kernel ang bilog na face mula sa flat facets, kaya gawa sa mga ito ang view, volumes, STL at 3MF exports: ang **Curves** sa panel ng piyesa ang gumagawa sa mga ito na mas pino. Hindi ito ang exact STEP export: isinusulat nito ang bilog na face sa totoong surface nila.

**Millimeters lang.** Wala pang inch setting. I-multiply sa 25.4 ang mga sukat na inch kapag tina-type mo ang mga ito.

**Paitaas ang Y.** Nakaharap sa iyo ang Front plane at tumitingin pababa sa piyesa ang Top, gaya ng inaasahan mo, pero ang up axis ng mundo ay Y. Naka-turn sa Z up ang STL, 3MF at exact STEP exports; pinananatili ng faceted STEP ang Y up.

**Mates ay mga face, hindi geometry pairs.** Laging nagsisimula ang joint sa dalawang flat face na pinagdikit nang face to face. Para sa pin sa hole, piliin ang flat face sa paligid ng hole at ang shoulder ng pin, tapos itakda ang **Centre on** sa axis ng hole at sa revolve axis ng pin. Ang mga piyesang hindi naaabot ng joints ay nananatili kung saan sila inilagay; hindi mo sila mai-drag. Hindi nasosolusyunan ang mga joint sa loop.

**Ang pag-save ay isang download.** Walang file na patuloy mong ino-overwrite. Ang bawat save ay isang bagong file sa downloads folder mo. Pangalanan muna ang piyesa, at panatilihin ang mga file sa project folder.

**Walang context menus, walang command manager tabs.** Lahat ay nasa toolbar at kanang panel, at nagbabago ang toolbar ayon sa ginagawa mo: lumalabas ang sketch tools sa sketch lang, at ang assembly tools sa assembly lang.

**Single letters ang keys sa loob ng sketch.** Ang {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} at {{key:S}} ay pumipili ng tools nang walang modifier. Tingnan ang [Keys at mouse](topic:keyboard).
