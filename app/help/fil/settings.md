---
title: Mga setting ng PartCraft
summary: Piliin kung aling mouse button ang nagpapaikot sa view, gawing umiikot at pan ang piyesa ng trackpad swipe, i-on o i-off ang awtomatikong relation habang nagsasketch, at itakda kung ilang thread ang gagamitin ng simulation solver.
keywords: mga setting, preferences, options, mouse, middle button, wheel button, orbit, rotate, turn, trackpad, touchpad, scroll, swipe, pinch, relations, constraints, auto constrain, automatic relations, snap, coincident, threads, solver threads, cores, processors, multi-threaded, mas mabilis na solve, parallel
from: 759edcaf
---

Buksan ang {{ui:Settings}} gamit ang gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:PartCraft}}, ay naglalaman ng mga setting na para sa app na ito; ang {{ui:General}} ay naglalaman ng mga setting na pareho sa bawat CadCraft app (theme, toolbar, panels). Umiiral lamang sa app ang mga setting ng PartCraft: babaguhin mo sila rito, at naaalala sila ng browser na ito. Ibinabalik ng {{ui:Reset PartCraft settings}} ang lahat sa simula.

## Pag-ikot ng view

- **Kaliwang button** (ang simula): i-drag gamit ang kaliwang button para paikutin ang piyesa; i-drag gamit ang kanan o gitnang button para mag-pan.
- **Gitnang button**: pindutin ang wheel at i-drag para paikutin ang piyesa; pindutin nang matagal ang {{key:Shift}} (o {{key:Ctrl}}, o ⌘) kasama ang gitnang button, o i-drag gamit ang kanang button, para mag-pan. Pumipili lamang ng face, edge at plane ang kaliwang button, kaya hindi kailanman napapaikot ang piyesa dahil sa click na bahagyang gumalaw. Maraming CAD program ang gumagana nang ganito.

Nag-zoom sa pointer ang wheel sa alinmang paraan. Sa sketch, nagpa-pan pa rin ang kanan at gitnang button gaya ng dati.

## Pag-scroll: mouse wheel o trackpad

- **Alamin ito** (ang simula): binabantayan ng PartCraft ang pag-scroll. Ang pag-scroll na pahalang o pinong-pino, gaya ng ipinapadala ng trackpad, ay nagpapaikot sa piyesa; ang buong notch ng wheel ay nag-zo-zoom.
- **Mouse wheel**: laging nag-zoom patungo sa pointer ang pag-scroll.
- **Trackpad**: mag-swipe gamit ang dalawang daliri para paikutin ang piyesa, pindutin nang matagal ang {{key:Shift}} at mag-swipe para mag-pan, at mag-pinch para mag-zoom. Sa sketch, nagpa-pan ng sketch ang dalawang-daliring swipe.

Nag-zoom ang pinch sa lahat ng pagpipilian. Kung nagkamali ang "Alamin ito" para sa mouse o trackpad mo, piliin ang mayroon ka. Higit pa sa [Trackpad, touch at maliliit na screen](topic:trackpad-and-touch).

## Pag-sketch: magdagdag ng relation habang gumuguhit

**Magdagdag ng relation habang gumuguhit** (naka-on sa simula): ang click na nag-snap sa isang punto ay ginagawang coincident ang bagong punto dito, ang click sa isang curve ay ilalagay ang punto sa curve na iyon, at ang linyang iginuhit na halos pahalang o patayo ay nagiging horizontal o vertical. Tingnan ang [Relations at dimensions](topic:relations-dimensions).

I-off ito kapag gusto mong maglagay ng geometry malapit sa ibang geometry nang hindi ito iniuugnay. Nagsa-snap pa rin ang pointer sa mga punto at curve, pero walang nakakabit: ang mga linyang iginuhit sa chain ay hindi nagbabahagi ng kanilang dulo, kaya maaaring mahila ang mga ito nang magkalayo sa isang drag. Idagdag ang relation na gusto mo nang mano-mano mula sa kanang panel. Gumagana pa rin ang saradong profile sa extrude kapag nagtagpo ang mga dulo nito.

:::note
Binabago lamang ng setting ang idinadagdag ng bagong drawing. Nananatili ang mga relation na nasa sketch na, at ginagawa pa rin ng Fillet tool ang tangent arc at radius nito.
:::

## Pag-sketch: dimension habang gumuguhit

**Dimension habang gumuguhit** (naka-on sa simula): habang iginuguguhit ang linya, rectangle, bilog o arko, ang pag-type ng numero ay pupuno sa size box sa tabi ng pointer ({{key:Tab}} ay pupunta sa susunod na box), at ang {{key:Enter}} ay gagawa ng hugis sa sukat na iyon, na may driving dimension para sa bawat sukat na na-type mo. Naka-off: ang pag-type ng numero habang gumuguhit ay walang gagawin, at ang mga hugis ay iginuguhit sa pamamagitan lamang ng click. Tingnan ang [I-type ang sukat habang gumuguhit](topic:sketch-basics#type-the-size-as-you-draw).

## Corner indicator

Ang makikita sa sulok ng 3D view: **View cube** (ang simula; sa kanang itaas — i-click ang face, edge o corner para tumingin mula roon, i-drag ito para mag-orbit, i-drag ang compass ring nito para paikutin ang model), **Axis icon** (maliit na marker na X, Y, Z sa kaliwang ibaba na umiikot kasabay ng view: pula ang X, berde ang Y, asul ang Z) o **None**. Wala sa mga ito ang lumalabas habang nagsasketch o sa drawing sheet. Tingnan ang [View cube](topic:view-cube).

## Solver threads

Ilang thread ang maaaring gamitin ng simulation solver. **Automatic** (ang simula) ay gumagamit ng isa kulang sa logical processor ng computer (hanggang 16), para manatiling tumutugon ang page habang nilulutas ang isang study; o pumili ng numero. Ang malalaking voxel study, buckling, stress sa paglipas ng panahon at flow ay mas mabilis malutas sa maraming thread (mga 2× sa 4 na thread para sa 80,000 cube ayon sa aming mga sukat, mas marami sa computer na walang ginagawa); ang mga model na wala pang humigit-kumulang 20,000 unknown ay nananatili sa isang thread, dahil mas malaki ang gastos sa pagsisimula ng mga thread kaysa sa natitipid nila. Ang solve na may thread ay nagbibigay ng parehong sagot gaya ng isang thread (sa pagkakaiba ng rounding lamang: iba ang pagkakasunod ng pagdaragdag ng mga sum). Ang bawat resulta ng study ay naglilista ng **N threads** o **1 thread** kasama ang dahilan sa ilalim ng **Solver**.

Kailangang **cross-origin isolated** ang page para gumamit ng mga thread (tanging doon lamang pinapayagan ng browser ang mga worker na magbahagi ng memory). Ang lab page ay ganyan; kung hindi, sasabihin ito ng setting ("Hindi cross-origin isolated ang page na ito, kaya isang thread lamang ang gagamitin ng solver anuman ang piliin dito.") at isang thread lamang ang gagamitin ng bawat solve. Gumagana nang pareho ang lahat ng iba, at pareho ang mga sagot.

Gumagamit din ng mga thread ang laminar flow study (mga 2.5× sa 4 na thread para sa 54,000 fluid cell, ang parehong sagot hanggang sa huling digit). Ang quadratic-tetrahedron solver at heat transfer ay tumatakbo sa isang thread: ang paggawa nitong threaded ay sinukat na mas mabagal sa aming test computer (limitado ang kanilang solver ng bilis ng memory at ng hakbang na hindi mahahati).

### Sa sarili mong web server

Kung pinapatakbo mo ang PartCraft mula sa sarili mong server, gumagana ito ayon sa pagkaka-serve. Para sa solver threads, ipadala ng server ang dalawang header kasama ng page ng PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sa Apache, sa `.htaccess` ng folder (kailangan ng mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Sa nginx, sa `location` na nagse-serve ng PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

I-reload ang page: ang Settings › Solver threads ay mag-aalok na ng **Automatic** kasama ang bilang ng processor ng computer mo. Pinipigilan ng ikalawang header ang browser sa pagtanggap ng anumang kinukuha ng page mula sa ibang site na hindi ito pinapayagan, na ayos lang para sa PartCraft na mag-isa (kinukuha nito ang lahat mula sa sarili nitong folder).
