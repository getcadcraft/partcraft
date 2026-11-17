---
title: Sukatin ang distansya, anggulo at mass
summary: I-click ang dalawang bagay sa view para sa pinakamaliit na distansya, anggulo at ΔX ΔY ΔZ; basahin ang haba ng edge, diameter ng hole, lawak ng face o coordinates ng punto; kunin ang volume, mass, center of mass at inertia ng isang piyesa o assembly.
keywords: measure, distance, minimum distance, angle, length, radius, diameter, area, coordinates, delta, inspect, mass properties, mass, weight, center of mass, centre of mass, inertia, moment of inertia, density, material
from: 20bda0b7
---

Gumagana ang **Measure** sa model sa bawat workspace (Design, Form, Simulation, Generative, Manufacture) at sa assembly. Nasa menu na {{ui:Views}} ng pangkat na **View** ito, o pindutin ang {{key:M}}. Bumubukas ang isang card sa itaas-kaliwa ng view.

## Sukatin ang isang bagay

I-click ang vertex, edge o face. Ipinapakita ng card ang:

- **Isang punto** (vertex, midpoint ng edge o center ng bilog): ang X, Y, Z nito.
- **Isang edge**: tuwid, bilog o curve, at ang haba nito; para sa bilog, kasama rin ang radius, diameter at center.
- **Isang face**: flat, cylinder, cone at iba pa, at ang lawak nito; ang normal ng flat na face; ang radius at diameter ng cylinder (laki ng hole). Ang lawak ay ng mga facet na binubuo ng mesh kernel.
- **Ang buong body**: pindutin nang hawak ang {{key:Shift}} at i-click ang piyesa. Makukuha mo ang volume, lawak, mass at inertia nito (tingnan sa ibaba).

Sumasagap ang pointer sa mga vertex, midpoint ng edge at center ng bilog sa loob ng 10 pixel; ipinapakita ng maliit na asul na tuldok ang snap bago ka mag-click. Para pumili ng center ng hole, ituro ang gitna ng hole; para pumili ng gilid nito (ang bilog), ituro ang gilid.

## Sukatin sa pagitan ng dalawang bagay

I-click ang pangalawang item. Nagdaragdag ang card ng:

- **Minimum distance** at ang dalawang pinakamalapit na punto, iginuguhit sa view na may linyang nasa pagitan nila.
- **ΔX, ΔY, ΔZ** mula sa unang pinakamalapit na punto papunta sa ikalawa.
- **Anggulo** sa pagitan ng dalawang flat na face (sa pagitan ng kanilang normal, 0–180°), sa pagitan ng dalawang tuwid na edge o axis (0–90°), o sa pagitan ng isang edge at isang face.
- **Puwang sa pagitan ng mga plane** para sa dalawang parallel na flat face, **Centre to centre** para sa dalawang bilog o hole, **Axis to axis** para sa dalawang parallel na hole o cylinder.

Nagsisimula ng bagong pares ang ikatlong click. Binubura ng {{key:Esc}} ang mga pinili; ang {{key:Esc}} ulit (o ang {{ui:Isara}}) ay nagsasara ng Measure. Inilalagay ng {{ui:Kopyahin}} ang mga resulta sa clipboard bilang tab-separated na text, handa nang i-paste sa spreadsheet.

### Gaano ito katumpak

Binubuo ng PartCraft ang piyesa gamit ang mesh kernel, kaya kinukuwenta ang mga distansya sa mga facet ng mesh at sinasabi ng card na **tinatayang: ayon sa mga facet**: tama para sa flat na face at sa pagitan ng vertex, bahagyang mali para sa mga curved. Mas pinong setting na **Curves** ang nagpapalapit sa mga ito. Ang eksaktong pagsukat sa tunay na surface ay nangangailangan ng exact kernel: hindi pa ito nagagawa sa bersyong ito.

## Mass properties

Pumili ng {{ui:Mass properties}} sa card o sa menu na {{ui:Views}}. Sa piyesa, pumili ng **Material** sa card (steel, aluminum, plastics at iba pa na may karaniwan nilang density). Sa assembly, gumagamit ang bawat piyesa ng materyal na itinakda sa mga property nito (piliin ang piyesa, saka **Material**), at iisa ang resulta para sa lahat ng piyesa.

Ipinapakita ng card ang mass, volume, lawak, centre of mass, ang inertia tensor (Ixx, Iyy, Izz at ang mga produkto na Ixy, Iyz, Ixz, sa kg·mm², tungkol sa centre of mass sa kahabaan ng world axis) at ang principal moments. Kapag walang materyal, ipinapakita nito ang parehong per unit density (mm⁵) at walang mass.

Eksakto ang mga numero para sa tessellated na solid na binubuo ng mesh kernel (ang mga curved na face bilang facet), kaya bahagyang mas mababa ang lumalabas para sa bilog na piyesa, at sinasabi ito ng card. Karaniwang halaga mula sa handbook ang mga density ng materyal; maaaring magkaiba ng ilang porsyento ang tunay na alloy o grade.

## Mga limitasyon

- Maaaring makahanap ng punto ang snap na nakatago sa likod ng ibang geometry; tiyakin na tugma sa gusto mo ang sinasabi ng card.
- Nagsasara ang Measure kapag magbukas ka ng sketch o drawing sheet, o magpalit ng workspace.
