---
title: Zebra stripes at curvature
summary: Suriin kung gaano kakinis ang pagdugtong ng mga face ng anumang piyesa, gamit ang zebra stripes na sumusunod sa view o color map ng mean curvature, mula sa menu na Views.
keywords: zebra, zebra stripes, linya ng repleksyon, curvature, curvature map, mean curvature, kalidad ng surface, continuity, tangent, g1, g2, makinis, crease, highlight lines
from: 78fed4c3
---

Dalawang mabilis na pagtingin kung gaano kakinis ang mga face ng isang piyesa, sa anumang piyesa sa Design workspace (ang Form workspace ay may sarili, para sa form na iniedit mo: tingnan ang [Freeform shapes with Form](topic:form-surfaces)).

## Zebra stripes

Buksan ang {{ui:Views}} at piliin ang {{ui:Zebra stripes}}. Ipinapakita ng piyesa ang repleksyon ng guhit-guhit na ilaw, gaya ng isang makintab na surface:

- Kung saan nagdurugtong ang dalawang face nang **tangentially** (isang fillet sa patag na face, isang makinis na Gordon surface), tuloy ang mga guhit sa pagdugtong, may baluktot.
- Kung saan sila nagtatagpo sa isang **crease**, nababali at tumatalon ang mga guhit.
- Kung pareho rin ang curvature (G2), dumadaloy ang mga guhit nang walang kahit kaunting kink.

Paikutin ang view (i-drag, o gamitin ang face ng view-cube): iginuguhit ulit ang mga guhit mula sa bagong direksyon. Itinatakda ng **Stripes** kung ilan ang mga ito.

## Curvature

Piliin ang {{ui:Curvature}} sa parehong menu. Kinukulayan ang piyesa ayon sa **mean curvature** nito: asul kung saan ito guwang (concave), maputla kung saan ito patag, pula kung saan ito umuumbok (convex). Sinasabi ng card kung anong curvature ang inaabot ng mga kulay sa buong tindi, sa 1/mm at bilang radius. Itinuturing na sobrang curved ang matatalas na gilid, kaya malakas ang ipinapakita nila; tingnan ang mga face sa pagitan nila.

## Ang card

Parehong nagbubukas ng analysis card sa kaliwang ibaba ng view, na naglalaman din ng [draft analysis](topic:draft-analysis). Lumipat sa pagitan nila gamit ang **Show**. Ang muling pagpili sa nakabukas na isa sa {{ui:Views}}, {{ui:Close}} o {{key:Esc}} ang nagpapatay nito. Sumusunod ang mga kulay sa piyesa habang binabago mo ito; walang nase-save sa piyesa.
