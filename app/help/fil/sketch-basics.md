---
title: Gumuhit ng unang sketch mo
summary: Magbukas ng sketch sa plane o flat face, gumuhit ng linya, rectangle, bilog, arko, punto at centerline, bilugan ang sulok, pumili, i-drag at burahin.
keywords: sketch, gumuhit, linya, rectangle, bilog, arko, punto, centerline, construction, fillet, sketch fillet, bilugang sulok, snap, piliin, window, drag, profile
from: 28be7436
---

Ang bawat solid ay nagsisimula bilang sketch: isang flat na drawing sa isang plane. Tinatalakay ng walkthrough na ito ang mga drawing tool. Ang pag-ayos ng sketch gamit ang relations at dimensions ay nasa [Buuin nang ganap ang sketch](topic:relations-dimensions).

## Simulan ang sketch

Puwede kang mag-sketch sa base plane o sa anumang flat face ng piyesa.

1. Pumili kung saan mag-sketch:
   - isang base plane: i-click ang **Front plane**, **Top plane** o **Right plane** sa history, o i-click ang plane sa view;
   - isang flat face: i-click ang face sa view. Mag-highlight ang buong face.
2. Piliin ang {{ui:Sketch}} sa toolbar o pindutin ang {{key:S}}. (Kung may napiling face, puwede mo ring piliin ang {{ui:Sketch sa face na ito}} sa right panel; kung plane, {{ui:Sketch dito}}.)

Ang view ay magiging square sa plane, lalabas ang sketch tools sa toolbar, at handa na ang Linya tool. Kapag pinindot mo ang {{ui:Sketch}} nang walang napili, lalabas ang mga base plane at sasabihin ng status bar: "I-click ang plane o flat face para mag-sketch. Esc para huminto."

:::note
Hindi kayang hawakan ng curved face ang sketch: "Curved ang face na iyon. Pumili ng flat face o plane para mag-sketch."
:::

**Sumusunod ang sketch sa face nito.** Kung ang face ay ginawa ng sketch edge o dulo ng extrude, gumagalaw ang bagong sketch kapag nagbago ang feature (kasama nitong gumagalaw ang sketch sa sahig ng mas malalim na pocket). Kung sinasabi ng panel na "Fixed where picked" ang face, mananatili ang sketch sa kinaroroonan ng face ngayon.

## Ang mga drawing tool

May toolbar button at key ang bawat tool. Piliin ulit ang parehong button, pindutin ang {{key:S}}, o pindutin ang {{key:Esc}} para bumalik sa {{ui:Piliin}}.

| Tool | Key | Paano gumuhit |
|---|---|---|
| {{ui:Linya}} | {{key:L}} | I-click ang simula, tapos i-click ang bawat susunod na punto. Nag-uugnay ang mga linya nang dulo-sa-dulo. Tapusin ang chain gamit ang {{key:Esc}}, {{key:Enter}}, right-click o double-click. Natatapos din ito kapag nag-click sa umiiral na punto |
| {{ui:Rectangle}} | {{key:R}} | I-click ang isang sulok, tapos ang kabilang sulok. Makakakuha ka ng apat na linyang magkakabit sa mga sulok, dalawang pahalang at dalawang patayo |
| {{ui:Bilog}} | {{key:C}} | I-click ang center, tapos isang punto sa bilog |
| {{ui:Arko}} | {{key:A}} | I-click ang center, tapos ang simula, tapos ang dulo. Tatakbo ang arko ayon sa paggalaw ng pointer sa paligid ng center |
| {{ui:Punto}} | {{key:P}} | I-click. Ang punto na mag-isa ay nagmamarka ng hole center para sa {{ui:Hole}} |
| {{ui:Centerline}} | {{key:N}} | Tulad ng linya, isang segment sa bawat pagkakataon. Iginuguhit na putol-putol; construction geometry ito, ginagamit bilang revolve axis o reference |
| {{ui:Fillet}} | {{key:F}} | I-click ang sulok kung saan nagtatagpo ang dalawang linya, i-type ang radius, pindutin ang {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | I-click ang mga puntong dadaanan ng kurba; tinatapos ito ng {{key:Enter}}, at isinasara ito ng click sa unang punto. Tingnan ang [Splines, trim, offset at iba pang sketch tools](topic:sketch-tools) |
| {{ui:Trim}} | {{key:T}} | I-click ang bahagi ng kurba na aalisin, hanggang sa pinakamalapit na crossing |
| {{ui:Dimension}} | {{key:D}} | Tingnan ang [Buuin nang ganap ang sketch](topic:relations-dimensions) |

Habang gumuguhit ka, may maliit na kahon sa tabi ng pointer na nagpapakita ng haba, laki, diyametro o radius.

### I-type ang laki habang gumuguhit

Pagkatapos ng unang click ng linya, rectangle, bilog o arko, puwede mong i-type ang laki sa halip na i-click ito. Ang pag-type ng numero ay magbubukas ng kahon sa tabi ng pointer na may laman na numerong iyon:

| Tool | Mga kahon ({{key:Tab}} ang lilipat sa susunod) | Ano ang mangyayari sa {{key:Enter}} |
|---|---|---|
| {{ui:Linya}}, {{ui:Centerline}} | Haba, tapos Anggulo (°) mula sa X axis ng sketch | Iguguhit ang linya sa haba na iyon, patungo sa pointer o sa na-type na anggulo; magpapatuloy ang chain mula sa dulo nito |
| {{ui:Rectangle}} | Lapad, tapos Taas | Iguguhit ang rectangle mula sa unang sulok patungo sa pointer; ang laking hindi mo na-type ay kukunin sa pointer |
| {{ui:Bilog}} | Diyametro | Iguguhit ang bilog sa diyametrong iyon |
| {{ui:Arko}} | Radius pagkatapos ng center, tapos Anggulo ng arko (°) pagkatapos ng simula | Ang simula ay nasa layong iyon mula sa center; tapos iikot ang arko nang ganoon kalayo, ayon sa paggalaw ng pointer |

Ang bawat laking na-type mo ay nagiging **driving dimension** sa parehong hakbang, kaya lumalabas na may tamang sukat ang sketch: tinatanggal ng {{key:Mod+Z}} ang hugis at ang mga dimension nito nang magkasama. Ang pag-click sa halip na pagpindot ng {{key:Enter}} ay pinananatili ang na-type mo at kinukuha ang natitira mula sa click. Isinasara ng {{key:Esc}} ang kahon at bumabalik sa pointer.

I-off ito sa {{ui:Mga setting}} › {{ui:PartCraft}} › **Dimension habang gumuguhit** kung mga click lang ang gusto mong gamitin sa pagguhit. Tingnan ang [PartCraft settings](topic:settings).

Nasa dulo ng sketch tools ang {{ui:Higit pa}}, na naglalaman ng control-point spline, Extend, Offset, Mirror, Polygon, Slot, ang mga sketch pattern at Project edge: tingnan ang [Splines, trim, offset at iba pang sketch tools](topic:sketch-tools).

### Pag-snap

Awtomatikong nagdadagdag ng relations ang snapping, para manatiling magkakabit ang sketch kapag gumalaw ito:

- Kapag nasa **end point o origin**, lalabas ang maliit na parisukat. Ang bagong punto ay gagawing coincident dito.
- Kapag nasa **linya, bilog o arko**, lalabas ang maliit na krus. Ilalagay ang bagong punto sa kurbang iyon.
- Ang linyang nasa loob ng 3 degree mula sa pahalang o patayo ay nag-snap dito at nakakakuha ng horizontal o vertical relation. Ipinapakita ng label ang "H" o "V".

Para maiwasan ang snap, mag-zoom in para mas malayo ang iyong click sa punto o kurba.

## Bilugan ang sulok

1. Pindutin ang {{key:F}} o piliin ang {{ui:Fillet}}.
2. I-click ang punto ng sulok kung saan nagtatagpo ang dalawang linya.
3. Magbubukas ang kahon na may iminungkahing radius. I-type ang radius at pindutin ang {{key:Enter}}.

Pinuputol at pinagdudugtong ang dalawang linya sa pamamagitan ng tangent arc na may radius dimension. Mga mensaheng maaaring makita mo: "Kailangan ng fillet ng sulok kung saan eksaktong dalawang linya ang nagtatagpo." at "Masyadong malaki ang radius na iyan para sa mga linyang ito."

:::tip
Binibilog ng sketch fillet ang sulok ng profile, kaya may bilugang vertical edge ang extrude. Para bilugan ang mga edge ng mismong solid (halimbawa, ang itaas na edge ng plate), gamitin ang feature na {{ui:Fillet}} sa piyesa: tingnan ang [Bilugan, bevel at hollow](topic:fillet-chamfer-shell). Sa sketch, ang Fillet sa toolbar ay sketch tool; sa piyesa, ito ay feature.
:::

## Construction geometry

Putol-putol at kulay abuhin ang construction na linya, bilog at arko. Ginagabayan nila ang sketch pero hindi bahagi ng profile na ie-extrude o irerevolve.

1. Piliin ang mga linya, bilog o arko.
2. Pindutin ang {{key:Q}} o piliin ang {{ui:Construction}}. Pindutin ulit para ibalik sa dati.

## Piliin, i-drag at burahin

Pindutin ang {{key:S}} (o {{key:Esc}} hanggang walang aktibong tool) para sa {{ui:Piliin}}.

- I-click ang punto, linya, bilog, arko, relation symbol o dimension para mapili ito. Ang {{key:Shift}}+click ay nagdadagdag sa napili o nag-aalis. Sa Windows at Linux, pareho ang ginagawa ng {{key:Ctrl}}+click; sa Mac, ⌘+click.
- I-drag sa bakanteng espasyo para gumuhit ng window: lahat ng nasa loob nito nang buo ay mapipili.
- I-drag ang punto o linya para galawin ito. Pinapanatili ng solver ang bawat relation at dimension habang gumagalaw, kaya tanging malayang geometry lang ang gumagalaw. I-drag ang gilid ng bilog para baguhin ang radius nito.
- I-drag ang numero ng dimension para ilipat ang label.
- Pindutin ang {{key:Delete}} o {{key:Backspace}}, o piliin ang {{ui:Burahin}} sa right panel, para burahin ang napili. Ang pagbura ng geometry ay nagbubura rin ng mga relation dito.

## Zoom at pan sa sketch

- Igulong ang wheel para mag-zoom sa pointer.
- I-drag gamit ang middle o right button para mag-pan.
- Ang {{ui:Fit}} sa toolbar o right panel ay ina-akma ang sketch sa view. Sa sketch, ang {{key:F}} na key ay Fillet tool, hindi Fit.

## Isara ang sketch

Piliin ang {{ui:Lumabas}} sa toolbar o {{ui:Lumabas sa sketch}} sa right panel, o pindutin ang {{key:Esc}} hanggang magsara ang sketch. Ang bawat {{key:Esc}} ay unang kakanselahin ang kasalukuyang ginagawa, tapos babalik sa Piliin, tapos aalisin ang pagpili, at ang susunod ay magsasara ng sketch.

Nananatiling napili ang sketch, kaya gagamitin ito ng susunod na {{ui:Extrude}} o {{ui:Revolve}}.

## Ano ang bumubuo ng magandang profile

Ginagamit ng {{ui:Extrude}} at {{ui:Revolve}} ang **bawat saradong loop** ng mga linya, bilog, arko at spline ng sketch na hindi construction. Ang loop sa loob ng loop ay nagiging hole.

- Ang bawat dulo ay dapat magtagpo sa eksaktong isa pang dulo. "Bukas ang profile: ang dulo sa (12.5, 40) ay hindi nakakabit sa anuman." ang nagsasabi kung saan.
- Hindi dapat magtagpo ang tatlong dulo sa iisang punto: "Nagsasanga ang profile sa (0, 20): higit sa dalawang dulo ang nagtatagpo doon."
- Hindi isinasama ng profile ang mga punto at construction geometry.

Susunod: [Buuin nang ganap ang sketch gamit ang relations at dimensions](topic:relations-dimensions).

## Sketch mula sa larawan

**Features › Higit pa › Sketch from a photo…** (o ang Sketch group sa Feature tree ribbon) ay sinusundan ang larawan ng isang flat na piyesa sa simpleng ibabaw (ang outline at mga hole nito), o isang pen drawing, at ginagawang sketch ng mga linya, arko at bilog. Sabihin ang isang haba (ang lapad, ang taas o ang pinakamahabang side) para tama ang laki ng sketch, tingnan ang nahanap sa preview, at piliin ang **Gawin ang sketch**; maaari rin itong i-extrude, sa parehong undo step. Sa computer na ito sinusundan ang larawan. Nananatili sa humigit-kumulang 5 % ang corner radii, nawawala ang mga detalyeng isang o dalawang pixel, at ang larawang kuha nang nakahilig o may anino sa piyesa ay hindi itinutuwid: kunan ang piyesa nang tuwid sa harap, na may pantay na ilaw.
