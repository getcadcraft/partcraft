---
title: Mga key at mouse
summary: Bawat keyboard shortcut at aksyon ng mouse sa PartCraft, nakapangkat ayon sa kung saan ito gumagana: kahit saan, copy at paste, sa piyesa, sa 3D view, sa sketch, sa history at sa assembly.
keywords: keyboard, shortcut, hotkey, key, mouse, orbit, rotate, pan, zoom, wheel, right click, undo, redo, save, open, escape, delete, alt arrow, copy, paste, cut, duplicate, select all, middle button
from: 3a59c3a3
---

Hindi gumagana ang mga key habang nagta-type ka sa isang box sa panel, maliban sa {{key:Mod+S}} at {{key:Mod+O}}, na laging gumagana. Gumagana ang mga letter key nang walang modifier.

Pangkalahatang paalala tungkol sa mga key sa browser, at sa mga keyboard na walang function key: [Mga key, mouse at trackpad](common:keys).

## Kahit saan

| Key | Aksyon |
|---|---|
| {{key:Mod+S}} | I-save ang piyesa (sa assembly: ang assembly). Isinasara muna ang bukas na sketch |
| {{key:Mod+O}} | Buksan ang isang piyesa o assembly file (nagtatanong muna kung may hindi pa na-save na pagbabago) |
| {{key:Mod+Z}} | {{ui:I-undo}} |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | {{ui:I-redo}} |
| {{key:F1}} | Buksan o isara ang help na ito (pati ang {{ui:Tulong}} sa app bar). Isinasara rin ito ng {{key:Esc}}. Sa maraming laptop at Mac keyboard, pindutin nang hawak ang Fn |
| {{key:Ctrl+Shift+F}} | Screen mode: normal, full screen, full screen na nakatago ang mga bar. Control din sa Mac, hindi ⌘ |
| {{key:Esc}} | Lumabas sa full screen (kapag nasa full screen) |
| {{key:Mod+,}} | Mga setting, kasama ang PartCraft tab (tingnan ang [Mga setting ng PartCraft](topic:settings)) |

Sa number box ng panel, ang {{key:Mod+Z}} ay ang sariling text undo ng browser. Sa number box sa ibabaw ng sketch dimension, nag-u-undo ito sa PartCraft.

## Kopyahin, i-paste at i-duplicate

Kumikilos ang mga ito sa kung ano ang ginagawa mo: ang napiling geometry sa bukas na sketch, ang napiling feature sa history, o ang napiling piyesa sa assembly. Mga detalye sa [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

| Key | Aksyon |
|---|---|
| {{key:Mod+C}} | Kopyahin ang napili |
| {{key:Mod+X}} | Cut: kopyahin, saka burahin |
| {{key:Mod+V}} | {{ui:I-paste}}. Sa sketch, sumusunod ang kopya sa pointer: i-click kung saan ito ilalagay |
| {{key:Mod+Shift+V}} | I-paste sa mismong lugar: parehong coordinates (sa assembly, parehong lugar) |
| {{key:Mod+D}} | Duplicate: kopyahin at i-paste sa isang hakbang, hindi ginagalaw ang clipboard |
| {{key:Mod+A}} | {{ui:Piliin lahat}} (sa sketch) |
| {{key:Esc}} | Walang piliin (at kanselahin ang paste na sumusunod sa pointer) |

Sa number box, kinokopya at ina-paste ng mga key na ito ang text gaya ng karaniwan. Kinokopya ng browser ang napiling text sa panel.

## Sa piyesa (walang bukas na sketch)

| Key | Aksyon |
|---|---|
| {{key:S}} | Gumawa ng sketch sa napiling plane o flat face; kapag walang napili, pumili ng lugar sa pamamagitan ng pag-click |
| {{key:F}} | I-fit ang piyesa sa view |
| {{key:M}} | Measure, sa bawat workspace at sa assembly; binubura ng {{key:Esc}} ang mga pinili, isinasara ito ng {{key:Esc}} ulit (tingnan ang [Sukatin ang distansya, anggulo at mass](topic:measure)) |
| {{key:X}} | I-on o i-off ang section view, sa bawat workspace at sa assembly; isinasara ito ng {{key:Esc}} (tingnan ang [Silipin ang loob gamit ang section view](topic:section-view)) |
| {{key:Delete}} | Burahin ang napiling feature (nagtatanong kung may gumagamit nito) |
| {{key:0}} … {{key:9}}, {{key:.}} | Kapag may napiling feature: i-type ang pangunahing numero nito (lalim ng Extrude, diameter ng hole, bilang ng pattern, radius ng fillet …), saka {{key:Enter}}. Nananatili ang lumang numero kapag {{key:Esc}} |
| {{key:Backspace}} | Burahin ang napiling feature, kapag may napili |
| {{key:Esc}} | Ihinto ang pagpili ng sketch plane, o burahin ang pinili (kasama ang mga edge o face na pinili gamit ang {{key:Shift}}) |

## Sa 3D view

I-click muna sa view para ito ang may focus ng keyboard.

| Key | Aksyon |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | I-ikot ang view ng 15 degrees |
| {{key:Shift+Left}} at ang iba pang arrow | Pan |
| {{key:Plus}} o {{key:=}} | Zoom in |
| {{key:Minus}} | Zoom out |

| Mouse | Aksyon |
|---|---|
| I-drag gamit ang kaliwang button | I-orbit (ikutin) ang view |
| I-drag gamit ang kanan o middle button | Pan |
| {{key:Shift}}, {{key:Ctrl}} o ⌘ habang nagda-drag gamit ang kaliwang button | Pan |
| I-roll ang wheel | Zoom sa pointer (palayo sa iyo ay nag-zoom in) |
| Two-finger swipe sa trackpad | I-ikot ang view; kasama ang {{key:Shift}}, pan. Pinch ang zoom. Itinatakda ng **Pag-scroll** sa [Mga setting ng PartCraft](topic:settings) |

Kapag naka-**Pag-ikot ng view: Middle button** sa [Mga setting ng PartCraft](topic:settings), iikutin ng middle button ang view, pan ang {{key:Shift}} kasama ang middle button o ang kanang button, at pipili lang ang kaliwang button.
| Click | Pumili ng face (buong naka-highlight), edge o plane |
| {{key:Shift}}+click sa edge o face | Mangolekta ng ilang edge o face |
| Click sa bakanteng espasyo | Burahin ang pinili |

## Habang pumipili ng edge o face para sa fillet, chamfer o shell

| Key o mouse | Aksyon |
|---|---|
| I-click ang edge o face | Idagdag ito, o alisin kung nandoon na |
| {{key:Esc}} o {{key:Enter}} | Tapusin ang pagpili (katulad ng {{ui:Tapos}}) |
| {{key:F}} | Fit |
| Arrow key, kapag naka-focus ang view | I-ikot; kasama ang {{key:Shift}}, pan |

## Sa drawing sheet

| Key | Aksyon |
|---|---|
| {{key:F}} | I-fit ang sheet |
| {{key:Plus}} / {{key:Minus}} | Zoom (kapag naka-focus ang sheet) |
| {{key:Shift+Left}} at ang iba pang arrow | Pan (kapag naka-focus ang sheet) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | I-nudge ang napiling GD&T symbol ng 1 mm |
| {{key:Delete}} o {{key:Backspace}} | Burahin ang napiling symbol |
| {{key:Esc}} | Ihinto ang paglalagay ng symbol; kung wala, i-deselect; kung wala rin, bumalik sa model |

| Mouse | Aksyon |
|---|---|
| I-click ang view, kapag napili ang Datum, Frame, Finish o Detail | Ilagay ito doon (sumasagap sa pinakamalapit na linya) |
| I-click ang symbol | Piliin ito |
| I-drag ang symbol | Ilipat ito (nananatili sa punto nito ang leader) |
| I-roll ang wheel | Zoom sa pointer |
| I-drag gamit ang kanan o middle button | Pan |

## Sa sketch

| Key | Aksyon |
|---|---|
| {{key:L}} | Linya |
| {{key:R}} | Rectangle |
| {{key:C}} | Bilog |
| {{key:A}} | Arko (center, start, end) |
| {{key:P}} | Punto |
| {{key:N}} | Centerline |
| {{key:F}} | Fillet ang sulok |
| {{key:D}} | Dimension |
| {{key:B}} | Spline (fit points) |
| {{key:T}} | Trim |
| {{key:E}} | Extend |
| {{key:O}} | Offset ({{key:B}} habang nag-o-offset: magkabilang panig) |
| {{key:M}} | Mirror |
| {{key:S}} | {{ui:Piliin}} |
| {{key:Q}} | Palitan ang napiling curve sa construction at pabalik |
| {{key:Enter}} | Tapusin ang line chain o spline |
| {{key:Delete}} o {{key:Backspace}} | Burahin ang pinili |
| {{key:Mod+A}} | Piliin ang lahat sa sketch |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopyahin, cut, i-paste ang geometry (sumusunod sa pointer ang paste) |
| {{key:Mod+Shift+V}} | I-paste sa parehong coordinates |
| {{key:Mod+D}} | I-duplicate ang pinili at ilagay ito sa pamamagitan ng click |
| {{key:Esc}} | Bumalik ng isang hakbang: kanselahin ang number box o paste, tapusin ang line chain, bumalik sa Select, burahin ang pinili, saka isara ang sketch |

| Mouse | Aksyon |
|---|---|
| Click | Maglagay ng punto gamit ang drawing tool; pumili gamit ang Select |
| {{key:Shift}}+click | Idagdag o alisin sa pinili ({{key:Ctrl}}+click sa Windows at Linux, ⌘+click sa Mac, pareho ang gawa) |
| I-drag sa bakanteng espasyo (Select) | Window: pumipili ng lahat na buong nasa loob |
| I-drag ang point, linya o gilid ng bilog (Select) | Ilipat ito; nananatili ang mga relation |
| I-drag ang numero ng dimension (Select) | Ilipat ang label |
| Double-click ang dimension | Baguhin ang value nito |
| Double-click o right-click habang gumuguhit ng linya | Tapusin ang chain |
| I-drag gamit ang kanan o middle button | Pan |
| I-roll ang wheel | Zoom sa pointer |

### Sa number box

| Key | Aksyon |
|---|---|
| {{key:Enter}} | Ilapat ang value |
| {{key:Esc}} | Isara nang walang pagbabago |

Ang pag-click sa labas ay naglalapat din ng value.

## Sa history list

| Key | Aksyon |
|---|---|
| {{key:Tab}} | Abutin ang list |
| {{key:Up}} / {{key:Down}} | Lumipat sa pagitan ng mga row |
| {{key:Enter}} o {{key:Space}} | Piliin ang row |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Ilipat pataas o pababa ang napiling feature, kung pinapayagan ng history |
| {{key:F2}} | Baguhin ang pangunahing numero ng feature sa row nito; itinatakda ito ng {{key:Enter}}, nananatili ang luma kapag {{key:Esc}} |

| Mouse | Aksyon |
|---|---|
| Click | Piliin ang plane o feature |
| Double-click ang sketch | Buksan ito |
| Double-click ang numero ng feature | Baguhin ito sa row |

## Sa assembly

| Key | Aksyon |
|---|---|
| {{key:J}} | Magsimula ng joint: pagkatapos, i-click ang flat face sa bawat isa sa dalawang piyesa |
| {{key:F}} | Fit |
| {{key:Esc}} | Kanselahin ang joint na sinimulan mo, o burahin ang pinili |
| {{key:Delete}} | Alisin ang napiling piyesa o joint |
| {{key:Backspace}} | Alisin ang napiling piyesa o joint |
| {{key:Mod+Z}} / {{key:Mod+Y}} | I-undo at i-redo sa sariling listahan ng assembly |
| {{key:Mod+D}} | I-duplicate ang napiling piyesa (parehong piyesa, katabi ng iba) |
| {{key:Mod+C}}, saka {{key:Mod+V}} o {{key:Mod+Shift+V}} | Kopyahin ang piyesa, i-paste ito sa tabi ng iba o sa parehong lugar |

Mouse sa view: gaya ng sa 3D view sa itaas. I-click ang piyesa para piliin ito. I-double-click ang piyesa sa list para i-edit ito.

## Sa Script workspace

| Key | Aksyon |
|---|---|
| {{key:F5}} | I-run ang script (sa editor, sa panel o sa view) |
| {{key:Mod+Enter}} | I-run ang mga napiling linya, o ang linyang kinaroroonan ng cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | I-indent / i-outdent ang mga napiling linya. Para lumabas sa editor gamit ang keyboard, pindutin ang {{key:Esc}}, saka {{key:Tab}} |
| {{key:Mod+/}} | I-comment out ang mga napiling linya, o ibalik ang mga ito |
| {{key:Mod+F}} / {{key:Mod+H}} | Find / find at replace sa script; {{key:Enter}} o {{key:F3}} para sa susunod na match, {{key:Shift+Enter}} o {{key:Shift+F3}} para sa nauna, isinasara ito ng {{key:Esc}} |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | I-fold / i-unfold ang block na kinaroroonan ng cursor (function, if, for, while … end) |
| {{key:Mod+Space}} | Ilista ang completions para sa pangalang tina-type mo (lumalabas din ito pagkatapos ng dalawang letra); pumili gamit ang {{key:Up}} / {{key:Down}}, kunin ang isa gamit ang {{key:Enter}} o {{key:Tab}}, isinasara ito ng {{key:Esc}} |
| {{key:Enter}} sa linyang nasa ilalim ng console | I-run ang statement na iyon; ibinabalik ng {{key:Up}} at {{key:Down}} ang mga naunang statement |
| {{key:F}} | I-fit ang view sa ipinapakita ng mga script |

Tingnan ang [Sumulat at mag-run ng mga script](topic:craftscript).

## Mga shortcut na maaaring kunin ng browser

- {{key:Mod+Y}} sa Safari ay maaaring magbukas ng history: gamitin ang {{key:Mod+Shift+Z}} para mag-redo.
- {{key:Mod+D}} ang bookmark key ng browser: kinukuha ito ng PartCraft habang may focus ang app, at hindi ginagalaw habang nagta-type ka sa box.
- {{key:F11}} at {{key:Mod+Plus}} / {{key:Mod+Minus}} ay para sa full screen at page zoom ng browser, hindi sa PartCraft. Gamitin ang {{key:Ctrl+Shift+F}} para sa full screen at ang wheel para sa model.
- Kailangan ng maraming laptop at Mac ang Fn key para sa function key: pindutin ang Fn+{{key:F1}} para sa help, o gamitin ang button na {{ui:Tulong}}.

Galaw ng touch at trackpad: [Trackpad, touch at maliliit na screen](topic:trackpad-and-touch).

## Nasaan ang Move

Nasa pangkat na {{ui:Features}}, sa menu na {{ui:Higit pa}}, ang Move bilang {{ui:Move body}}; nasa kahong {{ui:Move}} kung saan mo tina-type ang ΔX, ΔY at ΔZ; at bilang mga arrow na {{ui:I-drag para ilipat}} sa piyesa.
