---
title: Splines, trim, offset at iba pang sketch tools
summary: Gumuhit ng fit-point at control-point spline, mag-trim at mag-extend ng kurba, mag-offset ng chain, mag-mirror sa centerline, magdagdag ng polygon at slot, mag-pattern ng sketch geometry, at mag-project ng model edge.
keywords: spline, fit point, control point, b-spline, nurbs, kurba, trim, extend, offset, mirror, symmetric, polygon, hexagon, slot, pattern, linear pattern, circular pattern, project, project edge, isama, convert entities
from: 3ecb166a
---

Gumagana ang mga tool na ito sa bukas na sketch. Nasa toolbar ang {{ui:Spline}} at {{ui:Trim}}. Nasa ilalim ng {{ui:Higit pa}} sa dulo ng sketch tools ang iba. Isang undo step ang bawat tool, at hihinto ito sa {{key:Esc}}. Para sa mga basic na drawing tool, tingnan ang [Gumuhit ng unang sketch mo](topic:sketch-basics).

## Splines

Ang spline ay makinis na kurba. May dalawang uri ito.

| Tool | Key | Paano gumuhit |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | I-click ang mga punto na dadaanan ng kurba. Tapusin gamit ang {{key:Enter}}, {{key:Esc}}, right-click o double-click. I-click ulit ang unang punto para isara ang spline |
| {{ui:Control-point spline}} (sa ilalim ng {{ui:Higit pa}}) | | I-click ang mga control point. Hinihila ang kurba patungo sa mga ito pero dumadampi lang sa una at huli. Lumalabas ang putol-putol na control polygon habang gumuguhit ka at pagkatapos |

- **Sketch points ang mga punto.** I-drag ang mga ito, o bigyan ng relations at dimensions tulad ng ibang punto. Maaaring mag-snap ang unang punto ng spline sa dulo ng linya, at magkakabit sila sa pamamagitan ng coincident relation.
- **Tangent sa dulo.** Piliin ang linya, arko o spline na nagtatagpo sa isang dulo ng spline, tapos ang spline, at piliin ang {{ui:T Tangent}}. Susundan na ng direksyon ng dulo ng spline ang linya. Hindi tinatanggap ang tangent na malayo sa mga dulo ng spline: "Kailangang magtagpo ang linya, arko o spline sa isang dulo ng spline para maging tangent."
- **Mga dulo.** Kung walang tangent relation, natural ang mga dulo ng fit-point spline (walang curvature sa mismong dulo). Cubic ang kurba at dumadaan sa bawat punto, at ang espasyo nito ay itinatakda ng mga distansya sa pagitan ng mga punto.
- **Ang closed spline** ay bumubuo ng sariling profile. Ang open spline ay nagdudugtong ng linya at arko tungo sa saradong loop, tulad ng ibang kurba.
- Ang pagbura ng punto sa loob ng spline ay tatanggalin ang punto at mananatili ang spline, basta't may hindi bababa sa dalawang punto pa ito (tatlo kapag sarado).

Binubuo ng {{ui:Extrude}} at {{ui:Revolve}} ang spline gamit ang mesh kernel mula sa maiikling tuwid na piraso (kailangan ng totoong kurba ng exact kernel: hindi pa ito nagagawa sa bersyong ito). Isinusulat ng DXF export ang spline bilang polyline na nananatili sa loob ng 0.01 mm mula sa kurba, dahil walang spline entity ang DXF R12.

## Trim at extend

| Tool | Key | Paano |
|---|---|---|
| {{ui:Trim}} | {{key:T}} | Ituro ang kurba: ang bahaging tatanggalin ay magiging pula, hanggang sa pinakamalapit na crossing. I-click para alisin ito. Buong tatanggalin ang kurbang walang tumatawid |
| {{ui:Extend}} (sa ilalim ng {{ui:Higit pa}}) | {{key:E}} | I-click ang linya o arko malapit sa dulo para i-extend. Hahaba ito hanggang sa susunod na kurbang matatagpuan nito. "Walang maaabot ang dulong iyon." kapag walang humaharang |

Gumagana ang Trim at Extend sa linya, arko, bilog at spline (Extend: linya at arko lang).

- Ang na-trim na **bilog** ay nagiging arko. Ang radius o diameter dimension nito ay lilipat sa arko.
- Ang pag-trim sa gitna ng linya ay nag-iiwan ng dalawang linyang nananatili sa iisang tuwid na linya. Ang pag-trim sa gitna ng arko ay nag-iiwan ng dalawang arko na may parehong center at equal relation.
- Ang na-trim na **spline** ay nagiging control-point spline na eksaktong sumusunod sa lumang kurba. Nananatili ang tangent relation sa dulong naiwan.
- Ang bagong dulo ay inilalagay sa kurbang pumutol dito (sa linya, arko o bilog, o coincident sa dulo nito). Hindi kayang humawak ng punto ang mga spline, kaya ang spline na pumuputol ay hindi nagdadagdag ng relation.

**Inaalis ang mga relation na hindi na akma**, at sinasabi ng status bar kung ilan. Halimbawa, inaalis ang length dimension sa na-trim na linya, pero nananatili ang horizontal o parallel na relation.

## Offset

1. Piliin ang {{ui:Offset}} sa ilalim ng {{ui:Higit pa}} o pindutin ang {{key:O}}.
2. I-click ang linya, arko, bilog o spline. Mag-highlight ang buong chain nito: lahat ng kurbang nakakabit dulo-sa-dulo, hanggang sa punto kung saan nagtatagpo ang tatlo o higit pa. Para mag-offset lang ng bahagi ng chain, piliin muna ang mga kurbang iyon, tapos piliin ang Offset at i-click ang isa sa mga ito.
3. Igalaw ang pointer sa panig kung saan pupunta ang kopya. Susunod ang putol-putol na preview. Pindutin ang {{key:B}} para sa parehong panig.
4. I-click, i-type ang distansya, at pindutin ang {{key:Enter}}.

Eksaktong ino-offset ang mga linya at arko. Ina-extend o pinuputol ang mga sulok hanggang magtagpo. May isang **Offset** dimension ang kopya, at sumusunod dito ang iba pang bahagi: i-double-click ang dimension para baguhin ang buong kopya. Hindi tinatanggap ang distansyang masyadong malaki para sa chain, halimbawa: "Masyadong malaki ang distansyang iyan para sa chain na ito: mababaligtad ang isang panig."

Ang **spline** ay ino-offset ng bagong fit-point spline na nasa loob ng 0.001 mm mula sa tunay na offset. Nakapirmi ang kopyang ito: hindi ito sumusunod sa mga susunod na pagbabago, at wala itong Offset dimension. Ang spline sa chain ay nangangailangan ng makinis (tangent) na pagdudugtong sa mga dulo nito.

## Mirror

1. Gamit ang {{ui:Piliin}}, piliin kung ano ang i-mi-mirror.
2. Piliin ang {{ui:Mirror}} sa ilalim ng {{ui:Higit pa}} o pindutin ang {{key:M}}.
3. I-click ang linya o centerline na pagmi-mirror-an.

Bawat na-mirror na punto ay nakakakuha ng **Symmetric** relation sa orihinal nito, kaya sumusunod ang kopya kapag nagbago ang orihinal. Ibinabahagi ang mga punto na nasa mirror line, at ang na-mirror na bilog ay nakakakuha ng Equal relation. Kung walang napili, i-click ang mga item na i-mi-mirror, pindutin ang {{key:Enter}}, tapos i-click ang mirror line.

## Polygon at slot

| Tool | Paano |
|---|---|
| {{ui:Polygon}} | I-click ang center, tapos isang sulok, tapos i-type ang bilang ng side (3 hanggang 64). Pantay ang mga side at nasa construction circle ang mga sulok. I-dimension ang bilog para itakda ang laki ng polygon |
| {{ui:Slot}} | I-click ang center ng isang dulo, tapos ang center ng kabilang dulo, tapos i-click para itakda ang lapad. Dalawang linya, tangent sa dalawang magkapantay na kalahating bilog |

## Sketch pattern

Piliin muna ang geometry, tapos:

- {{ui:Linear pattern}}: i-click ang start point, tapos kung saan pupunta ang unang kopya, tapos i-type ang bilang ng kopya (kasama ang orihinal).
- {{ui:Circular pattern}}: i-click ang center, tapos i-type ang bilang ng kopya, pantay na ikakalat sa buong ikot.

Dala ng mga kopya ang mga relation sa pagitan ng napiling geometry (hindi kasama sa circular pattern ang horizontal at vertical). Hindi naka-link ang mga kopya sa orihinal: baguhin ang isa, at mananatili ang iba kung ano sila.

## Project edge ng piyesa

1. Piliin ang {{ui:Project edge}} sa ilalim ng {{ui:Higit pa}}.
2. I-click ang tuwid o pabilog na edge ng piyesa sa likod ng sketch.

Eksaktong kinokopya sa sketch plane ang edge at naka-fix ito (Fix relation). Hindi ito sumusunod sa mga susunod na pagbabago sa piyesa. Pindutin ang {{key:Q}} para gawin itong construction geometry. Hindi tinatanggap ang bilog na nakahilig sa sketch plane dahil magiging ellipse ang projection nito. Ganoon din sa free-form na edge at sa mga edge na tuwid na lumalabas mula sa sketch. Kailangan ng projection ng exact kernel: hindi pa ito nagagawa sa bersyong ito.
