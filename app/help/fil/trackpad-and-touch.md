---
title: Trackpad, touch at maliliit na screen
summary: Paano umikot, mag-pan at mag-zoom gamit ang Mac o laptop trackpad, ano ang gumagana sa touch screen at ano ang kailangan pa rin ng keyboard, at paano nag-aayos ulit ang screen sa phone o makitid na window.
keywords: trackpad, touchpad, magic mouse, mac, touch, tablet, ipad, phone, pinch, dalawang daliri, right click, secondary click, gestures, maliit na screen, mobile
from: 0e764fd8
---

Ginawa ang PartCraft para sa mouse na may wheel at middle button, pero maayos gumana ang trackpad kapag alam mo na ang mga gesture, at gumagana ang touch screen para sa pagtingin ng mga piyesa at simpleng pag-sketch.

## Trackpad

:::mac
| Para sa | Gawin ito |
|---|---|
| I-turn ang piyesa (3D) | I-click at i-drag gamit ang isang daliri (o i-drag gamit ang tatlong daliri, kung naka-on ang three-finger drag) |
| Pan (3D) | Pindutin ang {{key:Shift}} (o ⌘) at i-click-drag, o i-click-drag habang nakadiin ang dalawang daliri (secondary-click drag) |
| I-turn ang piyesa, sa pag-swipe | Mag-swipe gamit ang dalawang daliri; kapag may {{key:Shift}}, nagpa-pan ang swipe. Kailangang nakatakda ang **Scrolling** sa "Work it out" (ang simula) o "Trackpad" |
| Zoom (3D at sketch) | Pinch. Pumupunta ang zoom sa pointer. Kapag nakatakda ang **Scrolling** sa "Mouse wheel", nagza-zoom din ang two-finger scroll |
| Right-click | I-click gamit ang dalawang daliri, o {{key:Ctrl}}+click |
| Pan sa sketch | Mag-swipe gamit ang dalawang daliri ("Work it out" o "Trackpad"), o i-click-drag habang nakadiin ang dalawang daliri. Hindi nagpa-pan ang {{key:Shift}}+drag sa sketch (gumuguhit ito ng selection window) |
| Idagdag sa selection sa sketch | {{key:Shift}}+click o ⌘+click |

I-on ang secondary click sa **System Settings, Trackpad, Point & Click** kung walang nangyayari sa two-finger click.
:::

:::windows linux
| Para sa | Gawin ito |
|---|---|
| I-turn ang piyesa (3D) | Pindutin ang touchpad (o tap at hold) at i-drag |
| Pan (3D) | Pindutin nang matagal ang {{key:Shift}} o {{key:Ctrl}} at i-drag, o i-drag habang nakadiin ang bahagi ng right button |
| I-turn ang piyesa, sa pag-swipe | Mag-swipe gamit ang dalawang daliri; kapag may {{key:Shift}}, nagpa-pan ang swipe. Kailangang nakatakda ang **Scrolling** sa "Work it out" (ang simula) o "Trackpad" |
| Zoom (3D at sketch) | Pinch kung suportado ito ng touchpad. Pumupunta ang zoom sa pointer. Kapag nakatakda ang **Scrolling** sa "Mouse wheel", nagza-zoom ang two-finger scroll |
| Right-click | Two-finger tap, o ang kanang-ibabang sulok ng touchpad |
| Pan sa sketch | Mag-swipe gamit ang dalawang daliri ("Work it out" o "Trackpad"), o i-drag habang nakadiin ang bahagi ng right button. Hindi nagpa-pan sa sketch ang {{key:Shift}}+drag |
| Idagdag sa selection sa sketch | {{key:Shift}}+click o {{key:Ctrl}}+click |
:::

Ang **Scrolling** ay nasa [PartCraft settings](topic:settings): tinatrato ng "Work it out" (ang simula) ang sideways o pinong scrolling bilang trackpad, laging ganoon ang "Trackpad", at hindi kailanman ang "Mouse wheel". Nagza-zoom ang pinch sa lahat ng tatlo.

Ang arrow keys ay nagpapaikot ng 3D view, at ang {{key:Shift}} kasama ang arrows ay nagpa-pan, kapag nakapag-click ka na sa view: maginhawa sa trackpad. Ang {{key:Plus}} at {{key:Minus}} ay nagza-zoom.

## Touch screens

Binabasa ng PartCraft ang touch input, kaya gumagana ang tablet, touch laptop at phone, na may limitasyon.

:::touch
**Touch keys**

Kapag hinawakan mo ang screen, may lalabas na maliit na bar sa kanang-ibabang bahagi ng view na may mga key na wala sa daliri. Nawawala ito kapag gumamit ka ng mouse.

- {{ui:Esc}}: ang Esc key. Kinakansela nito ang sinimulan mo o bumabalik ng isang hakbang, eksaktong gaya ng key.
- {{ui:Add}} (sa sketch, kasama ang Select): habang naka-on ito, bawat tap ay nagdaragdag ng item sa selection o inaalis ito, gaya ng {{key:Shift}}+click. I-tap ulit para bumalik sa isang item sa bawat pagkakataon.
- {{ui:Done}} (habang gumuguhit ng line chain, spline o polygon): tinatapos ito, gaya ng right-click.

Ang pagpapahinto ng daliri nang mga kalahating segundo ay gumagawa ng parehong bagay para sa isang tap: sa drawing tool, tinatapos nito ang iginuguhit mo, at sa Select, idinaragdag o inaalis nito sa selection ang item sa ilalim ng daliri. Mas madaling tamaan ng daliri ang mga punto at linya: humahanap ang PartCraft ng halos doble ang layo sa paligid ng tap kumpara sa click.

**Sa 3D view**

- Isang daliri: i-turn ang piyesa.
- Dalawang daliri: pinch para mag-zoom, sabay na galaw para mag-pan.
- Tap: pumili ng face, edge o plane. Walang hover highlight bago ka mag-tap.

**Sa sketch**

- I-tap gamit ang drawing tool para ilagay ang bawat punto: i-tap ang simula, saka i-tap ang dulo. Nangyayari ang snapping sa pag-angat ng daliri.
- Nagpi-pinch at nagpa-pan ang dalawang daliri. Kapag nagdikit ka ng pangalawang daliri, kinakansela nito ang drag na sinimulan ng una.
- Para tapusin ang line chain, i-tap ang {{ui:Done}}, pahintuin ang daliri, o i-tap muli ang {{ui:Line}} (o ibang tool) sa toolbar.
- Sa Select, i-tap para pumili; i-drag ang punto o linya para ilipat ito; i-drag sa walang laman na espasyo para sa window. Papalitan ng pangalawang tap ang selection maliban kung naka-on ang {{ui:Add}} (o pahintuin mo ang daliri sa pangalawang item).
- Para baguhin ang dimensyon, gamitin ang **Edit** sa tabi nito sa kanang panel.

**Ang drawing sheet**

I-tap para ilagay at piliin ang mga simbolo, at i-drag ang simbolo para ilipat ito. Pinch para mag-zoom, galawin ang dalawang daliri para mag-pan, o i-drag ang isang daliri sa walang lamang papel. Hihinto ang pangalawang daliri sa simbolong dina-drag mo, at babalik ito.

**Ano ang kailangan pa rin ng keyboard**

- Pag-type ng numero: lalabas ang on-screen keyboard sa mga number box at dimension field.
- Keyboard shortcuts para sa mga tool: gamitin ang toolbar.
:::

## Maliliit na screen at phone

- Sa 1280 pixels pataas, nagkakasya sa isang hilera ang toolbar.
- Sa pagitan ng humigit-kumulang 760 at 1100 pixels, lumiliit ang mga side panel.
- Sa ibaba ng humigit-kumulang 760 pixels (phone, o makitid na window), nagsasalansan ang screen: toolbar (mag-swipe sa gilid para sa mas maraming button), ang 3D view, ang status bar, saka ang properties panel at history. I-scroll ang page para maabot ang mga panel.
- Ang mga menu ({{ui:Export}}, {{ui:Views}}) ay bumubukas sa buong lapad ng screen.

:::note
Sa iPhone walang full screen mode sa browser; ang {{key:Ctrl+Shift+F}} at ang screen-mode button ay lumilipat lang sa pagitan ng normal at nakatagong bar.
:::

Maayos ang phone para magbukas ng piyesa, paikutin ito at suriin ang mga datos nito. Kailangan ng mas malaking screen at mouse o trackpad ang totoong modelling.

## Browsers

Ang kasalukuyang Chrome, Edge, Firefox at Safari ay nagpapatakbo ng PartCraft sa Windows, macOS at Linux, at sa tablet at phone, basta available ang WebGL at WebAssembly. Tingnan ang [Browsers and computers](common:browsers).
