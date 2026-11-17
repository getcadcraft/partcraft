---
title: Gumawa ng drawing na may mga view, section, at GD&T
summary: Buksan ang drawing sheet, magdagdag ng section at detail view, maglagay ng datum, feature control frame, at surface finish symbol, piliin ang laki ng sheet, punan ang title block at mga revision, at i-export ang sheet bilang PDF.
keywords: hole table, hole chart, hole positions, tags, drawing, 2d drawing, sheet, laki ng sheet, a4, a3, a2, a1, a0, ansi, title block, revision, revision block, numero ng drawing, materyal, pdf, views, orthographic, third angle, isometric, section view, detail view, gd&t, datum, feature control frame, tolerance, position, flatness, surface finish, roughness, print
from: 39e944c0
---

Gumagawa ang PartCraft ng drawing sheet mula sa piyesa: front, top, at right view sa third-angle projection, isometric view, kabuuang sukat, at title block sa sheet mula A4 hanggang A0 o ANSI A hanggang E. Dagdag pa rito, maaari kang magdagdag ng section, detail view, at GD&T symbol. Nag-a-update ang sheet kapag nagbago ang piyesa, at nase-save ang mga setting nito sa piyesang file.

## Buksan ang drawing sheet

1. Buuin ang piyesa. (Kung walang nabuo: "Gumawa muna ng solid, saka gawin ang drawing nito.")
2. Piliin ang {{ui:Drawing}} sa toolbar.

Napapalitan ng sheet ang 3D view. Ipinapakita ng toolbar ang {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} at {{ui:Bumalik}}, at ang kanang panel ay may heading na **Drawing**. Sinasabi ng status bar kung paano ginawa ang mga view: "Drawing (ang mga curve ay iginuhit bilang facet). Inilalagay ng Datum, Frame, at Finish ang GD&T sa isang view; itinatakda ng panel ang section at detail view." Iginuhit ang mga view mula sa facet ng mesh kernel, kaya maiikling tuwid na piraso ang mga bilugang gilid; kailangan ng tunay na arko ang exact kernel, na wala sa bersyong ito.

Gumalaw sa sheet: i-roll ang wheel para mag-zoom, i-drag gamit ang kanan o gitnang button para mag-pan, pindutin ang {{key:F}} para magkasya ang sheet. Kapag naka-focus ang sheet, nag-zo-zoom ang {{key:Plus}} at {{key:Minus}}, at ang {{key:Shift}} kasama ng arrow keys ay nag-pa-pan.

Piliin ang {{ui:Bumalik}}, {{ui:Bumalik sa model}}, o pindutin ang {{key:Esc}} (kapag walang napili at walang aktibong tool) para bumalik sa 3D model.

## Ano ang nasa sheet

- **Ang sheet na pipiliin mo**, landscape (A3 maliban kung ibang pipiliin mo), may border at **title block**: title, kompanya, numero ng drawing, revision, materyal, iginuhit / chineck / inaprubahan ni, petsa, scale, laki ng sheet, "Units: millimetres · Third-angle projection", at kung exact o faceted ang mga view.
- Isang **revision block** sa kanang sulok sa itaas kapag nakapagdagdag ka na ng revision.
- **Front, top, at right view**: ang top view sa itaas ng front view, ang right view sa kanan nito. Naka-dashed ang mga nakatagong gilid.
- Isang **isometric view** kung may espasyo.
- **Kabuuang sukat**: lapad at taas sa front view, lalim sa top view.
- Isang **scale** para sa pangunahing mga view mula sa ISO series (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), pinili para magkasya.

## Piliin ang laki ng sheet

Sa drawing sheet, kapag walang napili, piliin ang {{ui:Sheet}} sa kanang panel: **A4, A3, A2, A1, A0** (ISO 216) o **ANSI A, B, C, D, E** (11 × 8.5 hanggang 44 × 34 in). Muling ilalatag ang mga view sa pinakamalaking ISO scale na kasya, kaya maaaring mas malaki ang ipakita ng piyesa sa mas malaking sheet.

## Punan ang title block

Direktang napupunta sa sheet ang mga field ng **Title block** sa kanang panel: {{ui:Title}}, {{ui:Numero ng drawing}}, {{ui:Revision}}, {{ui:Kompanya}}, {{ui:Iginuhit ni}}, {{ui:Chineck ni}}, {{ui:Inaprubahan ni}}, {{ui:Petsa}} (taon-buwan-araw), {{ui:General tolerance}} at {{ui:Finish}} (ang huling dalawa ay lumalabas sa itaas mismo ng title block). I-type sa kahon at pindutin ang {{key:Enter}} o mag-click sa ibang lugar. Ang walang lamang kahon ay nag-iiwan ng blangkong cell, maliban sa:

- **Title** ay nagpapakita ng pangalan ng piyesa hanggang mag-type ka ng isa.
- **Petsa** ay nagpapakita ng ngayon hanggang mag-type ka ng isa.
- **Revision** ay nagpapakita ng pinakabagong revision sa listahan hanggang mag-type ka ng isa.

Ang **Materyal** ay galing sa piyesa: i-click ang bakanteng espasyo sa model, saka piliin ang {{ui:Materyal}} sa panel ng Piyesa. Ang parehong materyal ang nagbibigay ng density sa mass properties ng Measure.

## Magdagdag ng revision

Sa ilalim ng **Mga revision**, i-click ang {{ui:Magdagdag ng revision}}. Bawat bagong row ay kumukuha ng susunod na letra (A, B, C …, pagkatapos ng Z ay AA) at ang petsa ngayon. I-type kung ano ang nagbago at kung sino ang gumawa ng pagbabago. Inaalis ng {{ui:Burahin}} ang isang row. Ipinapakita ng revision block sa kanang sulok sa itaas ng sheet ang mga ito, mula sa pinakaluma, hanggang 20.

Nase-save ang sheet size, title block, revisions, at materyal sa piyesang file, at bawat pagbabago ay isang hakbang ng {{ui:I-undo}}.

## Magdagdag ng section view

Pinuputol ng eroplano ang piyesa at hinahatch ang hiwa. Gaya ng iba pang view, iginuhit ang section mula sa facet, kaya maiikling tuwid na piraso ang mga bilugang gilid.

1. Sa kanang panel, itakda ang **Section A-A** sa **Of the front view**, **Of the top view**, o **Of the right view**.
2. Lalabas ang section sa sheet, may hatch kung saan dumadaan ang hiwa sa materyal, kasama ang cutting line at ang mga "A" arrow sa view na kinuhanan nito.
3. Itakda ang **Cut at (mm)** para ilipat ang cutting plane. Nagsisimula ito sa gitna ng piyesa.

Itakda ang **Section A-A** pabalik sa **None** para alisin ito.

## Magdagdag ng detail view

1. Itakda ang **Detail B** sa view na palalakihin (o piliin ang {{ui:Detail}} sa toolbar).
2. I-click ang gitna ng lugar na palalakihin, sa view na iyon. May bilog na may label na "B" na nagmamarka nito, at lalabas ang pinalaking "Detail B" sa sheet na may sariling scale, halimbawa "Detail B (2:1)".
3. Itakda ang **Detail radius (mm)** para sa laki ng bilog at ang **Detail scale** para sa pagpapalaki: 2, 4, 5, o 10 × ng sheet.

Maaaring kunin ang detail mula sa front, top, right, o section view, hindi mula sa isometric. Kung walang espasyo para sa lahat ng view, sinasabi ng panel na "Walang espasyo sa sheet para sa: detail. Paliitin ang detail o alisin ang isang view."

## Magdagdag ng hole table

Inililista ng hole table ang mga hole ng piyesa kasama ang posisyon nila, para sa drilling o CNC: piliin ang **Hole table** › **Of the top view** (o front, o right) sa panel.

- Bawat hole na nakikita nang end-on sa view na iyon ay may tag sa tabi nito: **A1**, **A2** … para sa unang laki, **B1** … para sa susunod.
- Inililista ng table ang bawat tag, ang **X** at **Y** nito sa millimetro, at ang laki nito: "Ø14 THRU", "Ø6.6 × 10 DEEP", counterbore o countersink, o ang thread callout ng tapped hole.
- Sinusukat ang X at Y mula sa kaliwang ibabang sulok ng outline ng view, na minarkahan ng **X0 Y0** sa sheet.
- Kasama ang mga hole na gawa ng pattern. Ang mga hole na hindi patayo sa view ay binibilang sa panel at hindi isinasama sa table.

Nasa libreng espasyo ng sheet at sa PDF ang table.

## Maglagay ng GD&T at surface finish symbols

1. Piliin ang {{ui:Datum}}, {{ui:Frame}} (isang feature control frame), o {{ui:Finish}} (isang surface finish symbol).
2. I-click ang punto sa isang view kung saan ito kakabit. Nagsa-snap ito sa pinakamalapit na iginuhit na linya sa loob ng 2.5 mm.
3. Lalabas ang symbol na may leader, napili, at ipinapakita ng kanang panel ang mga setting nito.

I-drag ang symbol para ilipat ito; mananatili ang leader nito sa punto. Kapag may napiling symbol, ginagalaw ito ng arrow keys nang 1 mm. Inaalis ito ng {{key:Delete}} o {{key:Backspace}} (o ng {{ui:Burahin}} sa panel); ang {{ui:Tapos}} o {{key:Esc}} ay nag-aalis ng pagkakapili. Nasa undo list ang bawat pagbabago.

### Datum

**Letter**: A hanggang Z, nang walang I, O, at Q (magmumukhang 1, 0, at O ang mga ito). Bawat bagong datum ay kumukuha ng susunod na bakanteng letra.

### Feature control frame

| Setting | Mga pagpipilian |
|---|---|
| **Tolerance** | Straightness, Flatness, Circularity, Cylindricity, Profile of a line, Profile of a surface, Perpendicularity, Angularity, Parallelism, Position, Concentricity and Symmetry (parehong tinanggal sa Y14.5-2018 at minarkahan bilang ganoon), Circular runout, Total runout |
| **Zone (mm)** | Ang halaga ng tolerance, default 0.1 |
| **Diameter zone (⌀)** | Para sa mga characteristic na may cylindrical zone; naka-on bilang default para sa Position |
| **Material** | RFS (wala), MMC (Ⓜ), LMC (Ⓛ), kung pinapayagan ng characteristic |
| **Primary / Secondary / Tertiary datum** | Hanggang tatlong datum letter, bawat isa ay may **… modifier** (MMB, LMB) kung pinapayagan |

Sinusuri ng PartCraft ang frame ayon sa mga panuntunan ng ASME Y14.5 at sinasabi sa itaas ng panel kung ano ang mali, halimbawa "Ang Flatness ay form tolerance: walang datum reference ito." o "Kailangan ng Position ng kahit isang datum reference." Inilalatag ng linyang **Basa** ang frame sa salita.

### Surface finish

| Setting | Mga pagpipilian | Default |
|---|---|---|
| **Ra (µm)** | Roughness average | 1.6 |
| **Process** | anumang proseso, machined, walang tinanggal na materyal | machined |
| **Note** | Hanggang 40 karakter, gaya ng lay o proseso | |

Kapag walang napili, inililista ng panel ang **Mga note sa sheet**, bawat isa ay may **Piliin**.

## I-export ang PDF

Piliin ang {{ui:PDF}} sa toolbar, ang {{ui:I-export ang PDF}} sa panel, o ang {{ui:Export}}, saka ang {{ui:Drawing (PDF): mga view, section, detail, GD&T}} mula sa model. Dina-download ang PDF bilang `<part name> - drawing.pdf`, at inililista ng status bar kung ano ang nasa PDF.

I-print ito sa "Actual size" sa papel na kapareho ng laki ng sheet para manatiling totoo ang scale.

## Mga limitasyon

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Mga dimension maliban sa tatlong kabuuang sukat | Idagdag ang mga ito sa PDF gamit ang markup app, o i-export ang sketch o face bilang DXF at i-dimension sa 2D CAD program |
| Higit sa isang section o detail; broken-out, auxiliary, at projected na view | Hindi available |
| First-angle projection, gumagalaw na view, portrait na sheet | Third angle, automatic layout, landscape |
| Malayang text note at table sa sheet (maliban sa title at revision block) | Gamitin ang finish note, o magdagdag ng text sa PDF |
| Mga drawing ng assembly | Hindi available |

Lumalabas na "?" ang mga karakter sa labas ng Western European set (ginagamit ng PDF ang built-in na Helvetica ng reader). Iginuguhit bilang linya ang mga GD&T symbol, kaya lumalabas ang mga ito sa anumang reader.

## Hayaan ang sheet ang gumawa

- **Sheet › Automatic** ang pumipili ng papel: ang pinakamalaking standard scale hanggang 1:1, sa pinakamaliit na A-size sheet na kasya ang mga view sa scale na iyon (ipinapakita ng listahan kung alin ang kinuha).
- **I-dimension ang mga hole** ay nag-dimension sa mga hole sa view na pinakamaraming nakikitang end-on: may centre mark ang bawat isa, isang callout bawat laki ("2× Ø6 THRU" na may leader), at ang kanilang mga posisyon na sinusukat mula sa kaliwang ibabang sulok ng view. Palaging naroon ang kabuuang lapad, taas, at lalim.
