---
title: Solid FEM: spennuprófun á einum hlut
summary: Kveiktu á Solid FEM-viðbótinni, möskvaðu hlut, veldu fastar hliðar og álag í þrívíddarsýninni, leystu og lestu færslu og von Mises-spennu á líkaninu.
keywords: solid fem, endanlegt frumefni, fea, spenna, von mises, færsla, föst hlið, álag, þrýstingur, þyngdarafl, eigintíðni, eigin-form, möskvi, viðbót
from: 8b7e6ba2
---

## Það sem þú gerir

Athugaðu einn fastan hlut undir álagi: hvar hann hreyfist og hvar spennan er mest. Rannsóknin er línuleg og teygjanleg, þannig að hún er hjálpartæki við athugun; verkfræðingurinn þinn yfirfer niðurstöðurnar.

## Skref

1. Veldu {{ui:Stillingar}} › {{ui:Viðbætur}} og kveiktu á {{ui:Solid FEM}} (það er slökkt þar til þú gerir það). Opnaðu flipann {{ui:Solid FEM}} í hægra spjaldinu.
2. Undir {{ui:Efni}} veldu eitt, eða {{ui:Sérsniðið}} og sláðu inn Poisson-hlutfall, eðlismassa og flæðispennu.
3. Ýttu á {{ui:Bæta við föstum flötum}}, smelltu á flötina sem eru festir í þrívíddarsýninni, og ýttu síðan á {{ui:Lokið við val}}.
4. Bættu við álagi með {{ui:Bæta við krafti}}, {{ui:Bæta við þrýstingi}} eða {{ui:Bæta við þyngdarafli}} og veldu fletina þess á sama hátt.
5. Ýttu á {{ui:Möskva hlutinn}}, síðan á {{ui:Leysa}}. Veldu {{ui:Eigintíðnir}} undir {{ui:Rannsókn}} fyrst ef þú vilt tíðnir.
6. Lestu {{ui:Niðurstöður}} og {{ui:Viðvaranir}}, ýttu síðan á {{ui:Sýna á líkaninu}} til að teikna von Mises-spennu, færslu eða eigin-form; {{ui:Fjarlægja myndina}} tekur hana burt.

## Athugasemdir

- Síðan leysir upp að ákveðnum fjölda frumefna; stöðulínan segir til um það þegar frumefnastærðin þín er of fín.
- Spenna við föst flatir, álagspunkta og skarp horn vex þegar möskvinn er fínkvarðaður. Fínkvarðaðu og berðu saman áður en þú treystir hámarksgildi.
- Sérhver breyting er eitt afturköllunarskref og stillingarnar vistast í hlutaskránni.
- Fyrir rannsóknir á flæði og snertingu sjá [Athugaðu spennu og beygju](topic:simulation).
