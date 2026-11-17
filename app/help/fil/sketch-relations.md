---
title: Sketch relations at dimensions
summary: Bawat relation at dimension na mayroon ang PartCraft sketch, ano ang pipiliin para sa bawat isa, ang symbol nito, at kung paano ito kumikilos kapag nagso-solve.
keywords: relations, constraints, coincident, horizontal, vertical, parallel, perpendicular, tangent, equal, concentric, midpoint, ayusin, distansya, horizontal distance, vertical distance, radius, diyametro, anggulo, simbolo, glyphs
from: 9831e7be
---

Inaayos ng relations kung paano nakapuwesto ang geometry kaugnay ng ibang geometry. Inaayos ng dimensions ang mga sukat. Para magdagdag ng relation, piliin ang mga item gamit ang {{ui:Piliin}} tool ({{key:S}}) at piliin ang button nito sa right panel; para magdagdag ng dimension, gamitin ang {{ui:Dimension}} tool ({{key:D}}) o ang mga dimension button sa right panel. Paano ito gamitin: [Buuin nang ganap ang sketch](topic:relations-dimensions).

Ang "curve" sa ibaba ay tumutukoy sa bilog o arko. Binibilang na punto ang origin.

## Relations

| Button | Symbol | Piliin | Epekto |
|---|---|---|---|
| {{ui:• Coincident}} | • (lumalabas lang kapag napili o may problema) | Dalawang punto | Nagtatagpo ang mga punto |
| {{ui:• Coincident}} | • | Isang punto at isang linya | Nasa linya (o sa extension nito) ang punto |
| {{ui:• Coincident}} | • | Isang punto at isang curve | Nasa bilog o arko ang punto |
| {{ui:H Horizontal}} | H | Isang linya, o dalawang punto | Pahalang ang linya, o magkasing-taas ang dalawang punto |
| {{ui:V Vertical}} | V | Isang linya, o dalawang punto | Patayo ang linya, o nasa itaas-at-ibaba ang mga punto |
| {{ui:∥ Parallel}} | ∥ | Dalawang linya | Pareho ang direksyon ng mga linya |
| {{ui:⊥ Perpendicular}} | ⊥ | Dalawang linya | Nagtatagpo ang mga linya sa tamang anggulo |
| {{ui:T Tangent}} | T | Isang linya at isang curve | Dumadampi ang linya sa curve nang hindi tumatawid |
| {{ui:T Tangent}} | T | Dalawang curve | Nagdadampi sila, sa labas o sa loob, ayon sa pagkaguhit |
| {{ui:T Tangent}} | T | Isang spline at isang linya, arko o spline na nagtatagpo sa isa sa mga dulo nito | Umaalis ang spline sa dulong iyon sa direksyon ng kabilang curve |
| {{ui:= Equal}} | = | Dalawang linya | Parehong haba |
| {{ui:= Equal}} | = | Dalawang curve | Parehong radius |
| {{ui:◎ Concentric}} | ◎ | Dalawang curve | Parehong center |
| {{ui:◎ Concentric}} | ◎ | Isang punto at isang curve | Nasa center ng curve ang punto |
| {{ui:M Midpoint}} | M | Isang punto at isang linya | Nasa gitna ng linya ang punto |
| {{ui:↔ Symmetric}} | ↔ | Dalawang punto at isang linya | Magkasalamin ang mga punto sa linya (idinaragdag ito ng {{ui:Mirror}}) |
| {{ui:⚓ Fix}} | ⚓ | Isang punto, linya, curve o spline | Pinapanatili ito nang eksakto sa kinaroroonan nito ngayon (spline: ang mga punto nito) |

Kasama sa mga linya rito ang centerline. Nagdadagdag ang pagguhit ng ilang relation para sa iyo: ang pag-snap sa punto ay ginagawa itong coincident, ang pag-snap sa curve ay inilalagay ang punto dito, ang halos pahalang o patayong linya ay nakakakuha ng H o V, at ang rectangle ay may apat na sulok na nakakabit, dalawang H at dalawang V.

Mabilis na paraan ang **Fix** para pigilan ang paggalaw ng isang bagay, pero hindi na masusundan ng piyesa ang pagbabago ng dimension sa ibang lugar. Mas piliin ang dimensions papunta sa origin.

## Dimensions

| Button | Piliin | Sinusukat | Ipinapakita bilang |
|---|---|---|---|
| {{ui:Distansya}} | Isang linya | Haba nito | Distansya 40 |
| {{ui:Distansya}} | Dalawang punto | Tuwid na distansya sa pagitan nila | Distansya 40 |
| {{ui:Distansya}} | Isang punto at isang linya | Distansya mula sa punto papunta sa linya, patayo dito | Distansya 40 |
| {{ui:Distansya}} | Dalawang parallel na linya | Ang agwat sa pagitan nila | Distansya 40 |
| {{ui:Horizontal distance}} | Dalawang punto, o isang linya | Kaliwa-kanang distansya lang | Horizontal distance 40 |
| {{ui:Vertical distance}} | Dalawang punto, o isang linya | Taas-baba na distansya lang | Vertical distance 40 |
| {{ui:Radius}} | Isang bilog o arko | Ang radius nito | Radius R10 |
| {{ui:Diyametro}} | Isang bilog o arko | Ang diyametro nito | Diyametro ⌀20 |
| {{ui:Anggulo}} | Dalawang linyang hindi parallel | Ang anggulo sa pagitan nila, 0 hanggang 180 degree | Anggulo 30° |

Gamit ang {{ui:Dimension}} tool, pinipili ng PartCraft ang uri batay sa iyong i-click at kung saan mo ilalagay ang numero:

| Ang iyong i-click | Ang makukuha mo |
|---|---|
| Isang linya | Haba nito; para sa hilig na linya, horizontal kung nasa itaas o ibaba ang numero, vertical kung nasa gilid |
| Isang bilog | Diyametro |
| Isang arko | Radius |
| Dalawang punto | Distansya; horizontal o vertical gaya ng sa hilig na linya |
| Isang punto at isang linya | Distansya mula sa punto papunta sa linya |
| Dalawang linya | Anggulo, o distansya kung parallel sila |
| Isang punto at isang bilog | Wala: "Hindi maaaring i-dimension nang sabay ang mga item na iyon." I-dimension na lang papunta sa center point ng bilog |

Ang **Offset** (ipinapakita bilang distansya) ay ginagawa ng {{ui:Offset}} tool: pinananatili nito ang kopyang linya na parallel sa layong iyon, o ang kopyang arko o bilog na concentric na may radius na ganoon kalaki o kaliit. Ang iba pang bahagi ng parehong offset ay may **O** relation at sumusunod sa iisang Offset dimension. Tingnan ang [Splines, trim, offset at iba pang sketch tools](topic:sketch-tools).

Ang halaga ng dimension ay nasa millimeter (o degree), hindi kailanman negatibo. Dapat higit sa zero ang radius at diyametro. Pinapayagan ang halagang 0 para sa distansya: ang dalawang punto na 0 ang layo ay coincident.

## Paano kumikilos ang pag-solve

- **Pinakakaunting galaw.** Kapag nagbago ang halaga, ginagalaw ng solver ang geometry nang pinakakaunti hangga't maaari. Ang linyang nagbabago ang haba ay humahaba nang pantay sa magkabilang dulo kung walang humahawak sa alinman.
- **Walang pagbaligtad.** Naaalala ng mga distansya mula punto papunta sa linya, horizontal at vertical na distansya, anggulo at tangency kung aling panig ang pinagawaan nila. Hindi kailanman binabaligtad ng pagbabago ng halaga ang geometry papunta sa kabilang panig.
- **Hindi ginagalaw ang mga sumasalungat.** Kung nagkakasalungatan ang relations, mananatiling eksakto ang sketch at magiging pula ang mga sumasalungat.
- **Redundant relations** (naipahiwatig na ng iba) ay ipinapakita sa status bar ("Naipahiwatig na ito ng iba. Burahin ito.") at nabubuo pa rin ang feature, na may babala.
- **Tangent joints.** Kapag nagtagpo ang fillet arc at ang mga linya nito sa iisang dulong punto, nilulutas ang tangency sa anyong nananatiling malinaw doon, kaya hindi binabasang over defined ang mga sketch fillet.

## Hindi pa available

Collinear, coradial at pierce relations; punto sa spline; driven (reference) dimensions; ordinate at arc-length dimensions; equation sa pagitan ng dimensions. Gamitin ang Parallel at distansyang 0 para sa collinear na linya.
