---
title: Rrotullo një pjesë të tornuar
summary: Skico gjysmën e një profili pranë një vije qendrore, rrotullo në një pjesë të rrumbullakët, zgjidh boshtin dhe këndin, dhe përdor një prerje të rrotulluar për vargje.
keywords: rrotullim, bllok i rrotulluar, prerje e rrotulluar, pjesë e tornuar, torno, bosht transmisioni, boshti, vijë qendrore, varg, kënd, prerje rrotullimi
from: 593b6929
---

{{ui:Revolve}} rrotullon një profil rreth një boshti, si një pjesë e bërë në torno: bosht transmisioni, rrip, flanxhë, dorezë. **Prerje e rrotulluar** (në menunë {{ui:More}} të grupit Veçori) rrotullon një profil për të hequr material, për vargje dhe mbrojtje.

## Rrotullo një bosht me shkallë

1. Skico mbi **Planin e përparmë**.
2. Shtyp {{key:N}} për {{ui:Centerline}}. Fillo në origjinë dhe kliko një pikë drejt e djathtas, për shembull 100 mm larg. Ky është boshti. Është me vija të ndërprera: gjeometria e ndërtimit nuk është pjesë e profilit.
3. Shtyp {{key:L}} për Vijë. Vizato profilin **gjysmë** mbi vijën qendrore si një unazë të mbyllur: fillo në vijën qendrore, shko lart, hap përpara, dhe kthehu poshtë në vijën qendrore, pastaj përgjatë saj deri te fillimi. Skajet e saj duhet të takohen: unaza duhet të jetë e mbyllur.
4. Përmaso rrezet (lartësitë mbi vijën qendrore) dhe gjatësitë. Një lartësi 10 mbi vijën qendrore bën një diametër 20.
5. Zgjidh {{ui:Exit}}.
6. Zgjidh {{ui:Revolve}}. Boshti shfaqet, një rrotullim i plotë.

Profili duhet të qëndrojë në një anë të boshtit. Nëse kryqëzon: "Profili kryqëzon boshtin. Mbaje në një anë të vijës qendrore." Një skaj profili mund të shtrihet mbi boshtin.

## Cilësimet

| Cilësimi | Çfarë bën | Parazgjedhja |
|---|---|---|
| **Operacioni** | Shtesë (shton material), Prerje (heq material), Prerje e përbashkët (mban mbivendosjen) ose Trup i ri | Shtesë për {{ui:Revolve}}, Prerje për {{ui:More}} › {{ui:Revolved cut}} |
| **Këndi (°)** | Sa rrotullohet, nga pak mbi 0 deri në 360 | 360 |
| **Boshti** | Vija e parë qendrore, ose çdo vijë ose vijë qendrore në skicë, e listuar si "Centerline 1 (l1)" ose "Line 3 (l3)" | Vija e parë qendrore |

Një kënd i pjesshëm bën një copë në formë kunje, e rrotulluar nga plani i skicës në një drejtim.

Nëse skica nuk ka vijë qendrore dhe ti e le **Boshtin** në Vija e parë qendrore: "Vizato një vijë qendrore (një vijë ndërtimi) në skicë për të rrotulluar rreth saj." Mund edhe të zgjedhësh një vijë të ngurtë të profilit si bosht.

## Prerje vargu

1. Me bllokun e ndërtuar, hap një skicë të re mbi **Planin e përparmë** (i njëjti plan me skicën e boshtit).
2. Vizato një vijë qendrore përgjatë të njëjtit bosht: fillo nga origjina dhe mbaje të drejtë që të marrë një H, ose shkruaje me **Shto sipas koordinatave** (për shembull nga `0, 0` te `100, 0`). Një skicë e re nuk mund të ngjitet te vijat e një skice tjetër.
3. Vizato një drejtkëndësh të vogël të mbyllur që mbivendoset me skajin e boshtit aty ku shkon vargu.
4. Zgjidh {{ui:Exit}}, pastaj {{ui:More}} › {{ui:Revolved cut}}.

## Faqe të rrotulluara në montime

Një rrotullim ka një bosht që veçori të tjera dhe montimet mund ta përdorin:

- një përsëritje **Rrethore** përdor si parazgjedhje boshtin e rrotullimit të fundit (shih [Përsëritje dhe pasqyrime të veçorive](topic:patterns-mirror));
- në një montim, një lidhje midis faqesh të bëra nga rrotullime fillon si një lidhje **e rrotullueshme**, dhe **Qendro mbi** ofron "Axis of Revolve1" (shih [Ndërto një montim](topic:build-assembly)).

## Kurba të vërteta dhe fasetat

PartCraft ndërton një rrotullim me bërthamën e rrjetës (vargu i statusit thotë "Bërthamë rrjete"): format e rrumbullakëta janë fasetë të sheshta, 64 për rrotullim si parazgjedhje, dhe vëllimet janë pak nën vlerën e vërtetë (rreth 0.16 % në 64). Pamja, eksportet STL, 3MF dhe STEP bëhen nga ato fasetë: cakto **Kurbat** (kliko hapësirë bosh, pastaj paneli i djathtë) në Të imëta (128) ose Shumë të imëta (256) për të lëmuara. Cilindrat, konet dhe torët e vërtetë kërkojnë një bërthamë të saktë: nuk janë ndërtuar ende në këtë version. Shih [Bërthama e rrjetës](topic:solid-kernels).
