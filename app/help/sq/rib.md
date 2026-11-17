---
title: Nervura dhe mbajtëset
summary: Forco një pjesë me një nervurë të vizatuar si një vijë: mbush nga vija deri te muret, me një trashësi të caktuar përgjatë planit të skicës, në anën që zgjedh ti.
keywords: nervurë, mbajtëse, degë, forcues, mbështetëse, mbajtëse këndi, mur i hollë, forcim
from: 5c218881
---

:::note
**Nuk është ndërtuar ende në këtë version.** Nervura kërkon një bërthamë të saktë gjeometrie, të cilën ky version i PartCraft nuk e ka: ai ndërton çdo pjesë me bërthamën e rrjetës. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) thotë çfarë të bësh në vend të saj. Pjesa tjetër e kësaj faqeje përshkruan si funksionon me një bërthamë të saktë.
:::

Një **nervurë** (ose mbajtëse) është një mur i hollë që forcon një pjesë, si trekëndëshi brenda këndit të një mbajtëse L. Vizaton vetëm skajin e lirë: PartCraft mbush hapësirën midis asaj vije dhe mureve. Kërkon **bërthamën e saktë** (shih [Bërthama e rrjetës](topic:solid-kernels)).

## Shto një nervurë

1. Krijo një plan që kalon përmes mesit të vendit ku shkon nervura (për një mbajtëse L 40 thellë, një plan 20 përpara skicës së saj: shih [Plane referimi, boshte dhe pika](topic:reference-geometry)).
2. Skico mbi të **një vijë** nga muri në mur — ose disa vija skaj më skaj për një skaj nervure të përkulur. Vija mund të ndalet pak larg mureve: skajet e saj vazhdohen derisa t'i takojnë.
3. Përzgjidh skicën dhe zgjidh {{ui:More}} › {{ui:Rib}}.

Nervura mbush nga vija deri te muret në anën drejt mesit të pjesës, kështu që një mbajtëse vendoset në qoshen e brendshme. Nëse ai krah është i hapur dhe tjetri i mbyllur, PartCraft e kthen dhe e thotë.

## Cilësimet

- **Trashësia (mm)** është trashësia e nervurës përgjatë planit të skicës. Mund të drejtohet nga një parametër.
- **Trashësia** (zgjedhja nën të): **I qendruar në planin e skicës**, **Përpara planit** (përgjatë normales së tij) ose **Pas planit**.
- **Kthe** mbush anën tjetër të vijës.

## Mesazhet

- **Në këtë anë skaji i nervurës nuk takon kurrë trupin** — asgjë nuk mbyllet në hapësirën në atë anë: shëno ose hiq shenjën te **Kthe**, ose lëviz vijën që muret ta kufizojnë.
- **Një nervurë kërkon një zinxhir të hapur vijash në skicën e saj** — skica ka një formë të mbyllur, një hark ose një spline, ose vija që nuk bashkohen skaj më skaj.
- **Skaji i nervurës shtrihet brenda trupit aty** — vija shtrihet brenda trupit të ngurtë; vizato në hapësirën e hapur midis mureve.
