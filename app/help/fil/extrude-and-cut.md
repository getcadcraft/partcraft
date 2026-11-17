---
title: I-extrude ang boss at i-cut dito
summary: Gawing solid ang sketch gamit ang Extrude, itakda ang blind, mid-plane, up-to o two-direction na lalim, taper, o isang contour ng sketch, pagkatapos mag-sketch sa face at i-Cut ang pocket o through slot.
keywords: extrude, boss, extruded boss, cut, extruded cut, pocket, through all, blind, mid-plane, reverse, depth, cut-extrude, boss-extrude, pad, up to face, up to next, up to vertex, offset from surface, direction 2, two directions, draft habang nag-e-extrude, taper, contour, region, napiling contour
from: 3b13ff10
---

{{ui:Extrude}} ay itinutulak ang saradong profile ng sketch nang diretso palabas sa eroplano nito para gumawa ng materyal. Ang {{ui:Cut}} ay pareho ang gawa pero nag-aalis ng materyal. Pareho silang feature sa ilalim; maaari mong palitan ang isa sa isa pa mamaya.

## I-extrude ang boss

1. Gumuhit ng saradong profile at isara ang sketch (tingnan ang [Gumuhit ng unang sketch mo](topic:sketch-basics)). Nananatili itong nakapili.
2. Piliin ang {{ui:Extrude}}.

Lumalabas ang 10 mm na solid, idinadagdag ang "Extrude1" sa history na may sketch nito na naka-indent sa ilalim, at sinasabi ng status bar: "Naidagdag ang Extrude1. Baguhin ang mga numero nito sa kanan."

**Aling sketch ang ginagamit:** ang sketch na katatapos mo lang isara, o ang sketch na nakapili sa history. Kung walang nakapili, kukunin ng PartCraft ang pinakabagong sketch na wala pang feature na gumagamit nito. Kung wala, ito ang lalabas: "Gumawa muna ng sketch: pumili ng plane, Sketch, gumuhit ng saradong profile, Lumabas."

### Itakda ang lalim at direksyon

Sa right panel:

| Setting | Pagpipilian | Default |
|---|---|---|
| **Operasyon** | Boss (magdagdag ng materyal), Cut (mag-alis ng materyal), Intersect (panatilihin ang magkapatong), New body (hindi pa nagagawa sa bersyong ito: kailangan nito ng eksaktong kernel) | Boss |
| **End** | Blind (isang lalim), Mid-plane (magkabilang direksyon), Through all, Up to face or plane, Up to next face, Up to vertex, Offset from face | Blind |
| **Depth (mm)** | Anumang laki na higit sa zero (nakikita sa Blind at Mid-plane) | 10 |
| **Reverse direction** | Lumalaki sa kabilang panig ng eroplano ng sketch (hindi nakikita sa Mid-plane) | Off |

Mag-type ng numero at pindutin ang {{key:Enter}} o {{key:Tab}}: agad na muling bubuuin ang piyesa. Ang **Mid-plane** ay naglalagay ng kalahati ng lalim sa magkabilang panig ng sketch.

### Hanggang face, susunod na face, o vertex

Hindi pa nagagawa sa bersyong ito: bawat "up to" na dulo ay nangangailangan ng eksaktong kernel, at sinasabi ng feature: "Ang pag-extrude hanggang face, susunod na face, o vertex: hindi pa nagagawa (kailangan nito ng eksaktong kernel)." Gumamit ng Blind na lalim na sinukat mo. Kapag may eksaktong kernel, ganito gumagana ang mga dulo:

- **Up to face or plane**: Ang **Up to** ay tumatanggap ng flat face (Pick, pagkatapos i-click ito) o reference plane. Ang face na parallel sa sketch ay nagbibigay ng eksaktong lalim; ang nakahilig ay puputol sa dulo sa dalisdis. Kung nasa likod ng sketch ang face: "… Subukan ang Reverse direction."
- **Up to next face**: humihinto sa unang flat face ng katawang tinatamaan ng extrusion (hindi suportado rito ang mga hubog na face: sinasabi ito).
- **Up to vertex**: humihinto nang kapantay ng vertex (i-click malapit sa dulo ng edge) o point feature.
- **Offset from face**: tulad ng Up to face, humihinto nang **Offset (mm)** bago ito (sinusukat nang patayo sa face).

### Dalawang direksyon, taper, isang contour

- **Second direction** (Blind): nag-e-extrude din ng **Second depth (mm)** sa kabilang panig ng sketch.
- **Taper (°)**: ang mga gilid ay humihilig habang tumatagal, gaya ng draft; isang direksyon lang. Hindi pa nagagawa sa bersyong ito (kailangan nito ng eksaktong kernel): iwan sa 0.
- **Regions**: **Pick regions**, pagkatapos i-click sa loob ng mga loop na i-e-extrude; ang mga region lang na iyon ang ginagamit (bilog sa loob ng parisukat: i-click sa loob ng bilog para sa silindro, sa pagitan nila para sa plato na may butas). **All** ay bumabalik sa bawat loop.

Sa ilalim ng mga ito, inililista ng **Sketch dimensions** ang mga driving dimension ng sketch, para mabago mo ang mga sukat ng profile nang hindi binubuksan ang sketch.

:::note
**Through all ay para lang sa cut.** Kapag naka-Through all ang boss, mabibigo ito: "Through all is for cuts. Use a depth for a boss." Kapag inilipat mo ang feature mula Cut pabalik sa Boss, awtomatikong nagiging Blind ang Through all.
:::

## Mag-cut ng pocket

1. I-click ang flat face na gusto mong putulin. Mai-highlight ito, at sasabihin ng right panel ang **Face**.
2. Piliin ang {{ui:Sketch on this face}} (o ang {{ui:Sketch}} sa toolbar).
3. Gumuhit ng outline ng pocket, halimbawa isang parihaba, at lagyan ito ng dimension.
4. Piliin ang {{ui:Exit}}.
5. Piliin ang {{ui:Cut}}. Nagsisimula ito bilang **Through all**: nag-aalis ito ng materyal sa buong piyesa.
6. Para sa pocket, itakda ang **End** sa **Blind (a depth)** at i-type ang **Depth (mm)**.

Pumapasok ang cut sa materyal, palayo sa face na pinagsketchan mo. Kung sinasabi ng status bar: "Walang mapuputol sa panig na iyon ng sketch. Subukan ang kabilang direksyon.", lagyan ng tsek ang **Reverse direction**.

Ang sketch sa sahig ng pocket ay sumusunod sa sahig: baguhin ang lalim ng pocket at gumagalaw ang sketch kasama nito.

## Itulak o hilahin ang buong face

Para gawing mas lumabas o lumubog ang isang face, hindi mo kailangang gumuhit ng outline nito. I-click ang flat face, pagkatapos sa right panel:

- {{ui:Extrude from it}} ay hinihila palabas ang face: nagdaragdag ang PartCraft ng sketch sa face na may outline nito (ang mga butas sa face ay nananatiling butas) at isang Extrude na 10 mm.
- {{ui:Cut into it}} ay itinutulak papasok ang face: ang parehong sketch at isang Cut na hanggang kalahati ng piyesa.

Isang hakbang lang ang dalawa: binabawi ng {{key:Mod+Z}} ang sketch at ang feature nang sabay. Napili ang bagong feature, kaya agad mag-type ng numero at pindutin ang {{key:Enter}} para sa lalim nito. Kinokopya ang outline bilang nakapirming linya at arko: hindi nito sinusundan ang mga susunod na pagbabago sa face. Kung hindi makopya ang bahagi ng outline (free-form na curve), bubukas ang sketch na may kung ano ang nakopya; tapusin ito, pagkatapos piliin ang {{ui:Exit}} at {{ui:Extrude}} o {{ui:Cut}}.

## Mga profile na may island

Ang isang sketch ay maaaring may ilang saradong loop. Ang mga loop na magkatabi ay nagiging hiwalay na boss (o cut); ang loop na nasa loob ng isa pa ay nagiging butas sa boss. Halimbawa, ang parihabang may dalawang bilog sa loob ay nag-e-extrude bilang plato na may dalawang butas.

Para gumamit lang ng ilang loop, piliin ang mga ito gamit ang **Regions** (sa itaas); maaaring gamitin ng ibang feature ang iba pang loop ng parehong sketch.

## I-edit ito sa ibang pagkakataon

- I-click ang "Extrude1" sa history para ibalik ang mga setting nito.
- I-double-click ang sketch nito (naka-indent sa ilalim nito) para buksan ang sketch; isara ito para muling buuin.
- Tingnan ang [Baguhin ang piyesa sa pamamagitan ng history nito](topic:edit-history) para sa pag-suppress, rollback, muling pag-ayos at pagbura.

## Karaniwang mensahe

| Mensahe | Ano ang gagawin |
|---|---|
| "Walang saradong profile na pwedeng i-extrude ang sketch." | Walang saradong loop ng solid na linya ang sketch. Isara ang mga puwang, o ibalik ang construction line gamit ang {{key:Q}} |
| "Bukas ang profile: ang dulo sa (x, y) ay hindi nakakabit sa anuman." | Buksan ang sketch at ikabit ang dulong iyon sa susunod na linya |
| "Wala pang mapuputol." | Kailangan ng cut ng solid na puputulan. Gumawa muna ng boss |
| "Wala nang natira sa piyesa pagkatapos nito." | Inalis ng cut ang lahat. Suriin ang laki at direksyon nito |

Higit pa sa [Troubleshooting](topic:troubleshooting).
