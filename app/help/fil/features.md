---
title: Mga feature at ang mga opsyon ng mga ito
summary: Bawat feature sa toolbar kasama ang mga setting, default at limitasyon nito, mula extrude hanggang fillet, shell at mga na-import na STEP solid, ang mga aksyong ibinabahagi ng bawat feature, at ang mga setting ng piyesa.
keywords: mga feature, hindi pa nagagawa, extrude, cut, revolve, revolved cut, hole, counterbore, linear pattern, circular pattern, mirror, fillet, chamfer, shell, import, opsyon, default, setting, resolution, curves, facets, suppress, rollback
from: ab3a598e
---

Nakalista ang mga feature sa history ayon sa pagkakagawa ng mga ito, at binubuo mula itaas pababa. Ipinapangalan ang bawat isa ayon sa uri nito na may numero: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

Binubuo ng PartCraft ang bawat feature gamit ang mesh kernel. Gumagana ang Fillet at Chamfer sa tuwid na edge sa pagitan ng dalawang flat face, at ang Shell ay nagbubukas ng flat face. Ang mga na-import na solid ay nangangailangan ng eksaktong kernel, na wala sa bersyong ito: hindi pa sila nabubuo, at inilalarawan ng seksyon sa ibaba na ang bahaging ginawa sa mas naunang build ang nagpapanatili sa mga ito. Tingnan ang [The mesh kernel](topic:solid-kernels) at [Ano ang hindi pa nagagawa](topic:not-built-yet).

## Sketch

| Setting | Mga tala |
|---|---|
| Plane | Front, Top o Right plane, o flat face. Ipinapakita lang, hindi binabago: para ilipat ang sketch, gumawa ng bago |
| State | Fully defined, Under defined (kasama ang degrees of freedom), Over defined, o Empty |
| Geometry, Relations | Ilang curve, punto at relasyon |
| Driving dimensions | Bawat dimension ng sketch, maaaring i-edit |

Mga button: {{ui:Edit sketch}}, {{ui:Export as DXF}}.

## Extrude at Cut

{{ui:Extrude}} at {{ui:Cut}} ay gumagawa ng parehong feature, nagsisimula sa magkaibang setting.

| Setting | Pagpipilian | Nagsisimula sa Extrude | Nagsisimula sa Cut |
|---|---|---|---|
| Operasyon | Boss (magdagdag ng materyal), Cut (mag-alis ng materyal), Intersect (panatilihin ang magkapatong), New body (hindi pa nagagawa sa bersyong ito) | Boss | Cut |
| End | Blind (isang lalim), Mid-plane (magkabilang direksyon), Through all | Blind | Through all |
| Depth (mm) | Higit sa 0, hanggang 1,000,000 | 10 | 10 |
| Reverse direction | Off / on | Off | Off |

- Profile: bawat saradong loop ng solid na linya, bilog at arko sa sketch. Ang loop sa loob ng loop ay butas.
- Gumagana lang ang Through all para sa cut. Umaabot ito hanggang sa dulo ng piyesa sa napiling panig.
- Pumapasok ang cut sa materyal, palayo sa labas na panig ng eroplano ng sketch; binabaligtad ito ng Reverse.

## Revolve at revolved cut

| Setting | Pagpipilian | Default |
|---|---|---|
| Operasyon | Boss, Cut | Boss ({{ui:Revolve}}), Cut ({{ui:More}} › {{ui:Revolved cut}}) |
| Angle (°) | Higit sa 0, hanggang 360 | 360 |
| Axis | Unang centerline, anumang linya o centerline ng sketch, o axis feature na nasa eroplano ng sketch | Unang centerline |

- Dapat manatili ang profile sa isang panig ng axis. Maaari itong dumampi dito.
- Ang axis ng revolve ay magagamit ng Circular pattern at ng assembly joint.

## Hole

| Setting | Pagpipilian | Default |
|---|---|---|
| Type | Simple, Counterbore | Simple |
| Diameter (mm) | Higit sa 0 | 6 |
| Through all | On / off | On |
| Depth (mm) | Kapag naka-off ang Through all | 10 |
| Counterbore ⌀ | Mas malapad kaysa butas | 11 |
| Counterbore depth | Mas mababaw kaysa blind hole | 6 |
| Reverse direction | Off / on | Off |

- Isang butas sa bawat hiwalay na punto ng sketch (mga punto na ginawa gamit ang Point tool). Ipinapakita ng panel kung ilan.
- Binubutas ang mga butas nang patayo sa eroplano ng sketch, papasok sa materyal.
- Magagamit ng assembly joint ang axis ng bawat butas ("Hole1, hole 2").

## Linear pattern

| Setting | Pagpipilian | Default |
|---|---|---|
| Features to copy | Anumang solid feature sa itaas nito | Ang napiling feature, kung wala ang huling solid feature |
| Direction | X axis, Y axis, Z axis; isang linya ng naunang sketch; ang axis ng revolve; isang napiling edge | X axis (o ang edge na napili nang idinagdag ito) |
| Spacing (mm) | Anumang numero | 20 |
| Count | 1 hanggang 1000, kasama ang orihinal | 3 |
| Reverse direction | Off / on | Off |

## Circular pattern

| Setting | Pagpipilian | Default |
|---|---|---|
| Features to copy | Gaya ng Linear | Gaya ng Linear |
| Axis | Gaya ng Direction sa itaas | Ang axis ng huling revolve, kung wala ang Y axis (o ang edge na napili) |
| Angle (°) | Higit sa 0, hanggang 360. Ang 360 ay naglalagay ng pantay na distansya ng mga kopya sa buong paligid; mas mababa ay ikinakalat ang mga ito sa anggulo | 360 |
| Count | 1 hanggang 1000, kasama ang orihinal | 6 |
| Reverse direction | Off / on | Off |

## Mirror

| Setting | Pagpipilian | Default |
|---|---|---|
| Mirror | Ang buong katawan (gaya ng nabuo hanggang ngayon), o napiling feature | Ang napiling feature, kung wala ang buong katawan |
| Mirror plane | Front, Top o Right plane; flat face | Right plane, o ang flat face na napili nang idinagdag ito |

## Fillet at Chamfer

Sa bersyong ito, ginagawa ng mesh kernel ang mga ito sa tuwid na edge sa pagitan ng dalawang flat face (panlabas o panloob na sulok), na may iisang radius. Ang bilog na edge ay nagsasabing: "Fillet: sa bersyong ito, tuwid na edge lang sa pagitan ng dalawang flat face (ginagawa ito ng mesh kernel). Bilugan o pahiwain ang mga hubog na edge sa sketch."; kung saan nagtatagpo ang mga bilog na edge sa sulok, nagiging mitred ang mga ito, at nagbababala ang feature: "Fillet ng mesh kernel: kung saan nagtatagpo ang mga bilog na edge, mitred ang mga ito, hindi pinaghalo." Gumagana ang lahat ng uri ng chamfer (pantay na distansya, dalawang distansya, distansya at anggulo, kasama ang **Flip sides**). Tingnan ang [Bilugan, pahiwain at gawing guwang](topic:fillet-chamfer-shell).

| Setting | Pagpipilian | Default |
|---|---|---|
| Radius (mm) (Fillet) | Higit sa 0 | 2 |
| Distance (mm) (Chamfer) | Higit sa 0, pareho sa parehong face | 1 |
| Edges | Ang mga napiling edge, bawat isa ay nakalista ayon sa dalawang face na nagdurugtong nito ("Extrude1 end face × Extrude1 side"), kasama ang **Remove** | Ang mga edge na napili nang idinagdag ito |

- Pumili ng edge bago piliin ang button ({{key:Shift}}+click para sa ilan), o piliin ito nang walang napili at i-click ang mga edge pagkatapos.
- {{ui:Pick edges}} (o i-double-click ang feature) ay binabago ang mga edge.
- Naaalala ang mga edge ayon sa dalawang face na nagdurugtong sa mga ito, kaya nananatili ang mga ito kapag binago ang laki sa itaas.

## Shell

Ginagawa ito ng mesh kernel. Mga flat face lang ang maaaring buksan ("Shell: sa bersyong ito, flat face lang ang nabubuksan (ginagawa ito ng mesh kernel)."); hindi pa nagagawa ang mga pader na magkakaiba ang kapal. Tingnan ang [Bilugan, pahiwain at gawing guwang](topic:fillet-chamfer-shell).

| Setting | Pagpipilian | Default |
|---|---|---|
| Wall (mm) | Higit sa 0 | 2 |
| Walls grow outward (the faces stay inside) | Off: papasok ang mga pader. On: palabas ang mga pader | Off |
| Open faces | Ang mga face na aalisin, kahit isa, kasama ang **Remove** | Ang mga face na napili nang idinagdag ito |

{{ui:Pick faces}} ay binabago ang mga bukas na face.

## Na-import na solid

Nagagawa sa pamamagitan ng pagbubukas ng STEP, STL, OBJ o 3MF na file: isang solid na katawan ng triangle na walang sariling history ([Magbukas ng STEP file](topic:import-step), [Magbukas ng STL, OBJ o 3MF](topic:open-meshes)). Ipinapakita nito ang file na pinanggalingan nito at kung ano ang inayos ng import; nananatiling mae-edit ang **Units in the file**, **Up in the file** at **Use it to**. Ang STEP solid na in-import ng mas lumang build na may eksaktong kernel ay nananatili sa history na minarkahang hindi pa nagagawa; buksan ulit ang STEP file para i-import ito bilang triangle.

| Setting | Pagpipilian | Default |
|---|---|---|
| Up in the file | Z up (karamihan sa CAD), Y up | Z up |

Kayang kopyahin ng pattern at mirror ang na-import na solid, pero hindi ang fillet, chamfer o shell.

## Ang bawat feature ay mayroon nito

Sa ibaba ng panel ng bawat feature:

| Button | Ginagawa |
|---|---|
| {{ui:Suppress}} / {{ui:Unsuppress}} | Ipinapatay o ibinubukas ito. Ang mga feature na nangangailangan nito ay hindi nabubuo habang naka-off ito |
| {{ui:Roll back to here}} | Bubuuin lang ang mga feature sa itaas nito. Ilalagay ang mga bagong feature sa rollback bar |
| {{ui:Move up}} / {{ui:Move down}} | Muling ayusin, kapag walang gagamitin nitong mapupunta sa ibaba. Kulay abo na may dahilan kung hindi |
| {{ui:Delete}} | Burahin ito, at (pagkatapos magtanong) bawat feature na gumagamit nito |
| Name | Palitan ang pangalan (hanggang 60 karakter) |

Ang mga feature na may sketch ay naglilista rin ng **Sketch dimensions**, na maaaring i-edit sa lugar.

## Mga estado sa history

| Estado | Ipinapakita bilang | Ibig sabihin |
|---|---|---|
| Built | Normal | Maayos ang lahat |
| Warning | ⚠ | Nabuo na, may dapat suriin: "Over defined: 1 relasyon ang hindi kailangan." o "Wala nang natira sa piyesa pagkatapos nito." |
| Error | ⚠ error, pula | Hindi nabuo; sinasabi ng mensahe kung bakit |
| Not built | ⚠ hindi pa nabubuo | Nangangailangan ng feature na pumalya, naka-suppress o naka-rollback, o nangangailangan ng eksaktong kernel, na wala sa bersyong ito ("Sweep: hindi pa nagagawa. …") |
| Suppressed | off | Naka-off |
| Rolled back | kulay abo, sa ibaba ng rollback bar | Hindi pa nabubuo hangga't hindi ka nag-roll forward |

## Mga setting ng piyesa

I-click ang walang lamang espasyo para walang napili. Ipinapakita ng right panel ang **Part**:

- **Name**: pangalan ng piyesa, ginagamit para sa mga pangalan ng file at sa title block ng drawing (hanggang 120 karakter).
- **Curves**: tingnan sa ibaba.

### Resolution ng curve

Binubuo ng mesh kernel mismo ang solid mula sa flat facet, kaya ang view, STL, 3MF, ang faceted STEP, ang volume at ang mga view ng drawing ay sumusunod lahat sa **Curves**: ilang facet bawat buong ikot.

| Setting | Facet bawat ikot | Volume ng bilog na hugis |
|---|---|---|
| Coarse (32 bawat ikot) | 32 | Mga 0.64 % na mas mababa sa tunay na halaga |
| Normal (64 bawat ikot) | 64 | Mga 0.16 % na mas mababa (ang default) |
| Fine (128 bawat ikot) | 128 | Mga 0.04 % na mas mababa |
| Very fine (256 bawat ikot) | 256 | Mga 0.01 % na mas mababa |

Mas pinong curve ay nagbibigay ng mas makinis na export at view, at mas mabagal na rebuild. Naka-save sa file ng piyesa ang setting.

## Hindi pa nagagawa

Ang variable-radius fillet, fillet at chamfer sa bilog na edge, shell na nagbubukas ng hubog na face, draft sa hubog na face, sweep, loft, rib, STEP solid na may eksaktong hubog na face, bagong katawan, taper, "up to" na face o vertex, at mga reference sa face at edge ng solid ay nangangailangan ng eksaktong kernel, na wala sa bersyong ito. Hindi pa rin nagagawa ang mga tapped at countersunk na butas. Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
