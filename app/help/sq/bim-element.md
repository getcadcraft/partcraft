---
title: Projekto një element BimCraft dhe ruaje mbrapa
summary: Një pjesë e dërguar nga BimCraft hapet me ndërtesën përreth, gri dhe vetëm për lexim. Ndryshoje, pastaj ruaje mbrapa që BimCraft të mund ta pranojë formën e re.
keywords: bimcraft, bim, element, dërgo, ruaj mbrapa, lidhje, ndërtesë, kontekst, fqinjë, mbështetje, mbajtëse, ifc, prano
from: 0978fe53
---

## Çfarë do të bësh

Punon me një pjesë që vjen nga një model BimCraft, në vendin e saj në ndërtesë, dhe e dërgon formën e re mbrapa.

## Hapat

1. Në BimCraft përzgjidh një element dhe zgjidh {{ui:Lidhjet e pjesës}} › {{ui:Dërgo te PartCraft}}. PartCraft e hap si pjesë të re. Shiriti i gjendjes thotë se është element BIM.
2. Elementët përreth (brenda 3 m) vizatohen me gri. Ata janë aty për t'u projektuar sipas tyre. Nuk mund t'i përzgjedhësh ose ndryshosh, dhe nuk ruhen në skedarin e pjesës.
3. Ndrysho pjesën si çdo tjetër: prerje, shtesë, shpim, pasqyrim. Origjina dhe boshtet e saj janë të vetë elementit, kështu që pjesa kthehet aty ku ishte.
4. Zgjidh {{ui:Skedari}} › {{ui:Eksporto}} › {{ui:Ruaj mbrapa te BimCraft}}. Shiriti i gjendjes thotë cilin revizion dërgove.
5. Në BimCraft elementi shfaqet si i ndryshuar derisa personi atje ta pranojë.

## Çfarë duhet të shohësh

- Pjesa e mban lidhjen e saj në skedar. Hape më vonë dhe shiriti i gjendjes ende thotë se është element BIM. Ndërtesa gri kthehet ndërsa shfletuesi ende mban paketën me të cilën u dërgua.
- Ruajtja mbrapa sërish dërgon revizionin 2, 3 e kështu me radhë. BimCraft e mban më të riun.

## E dobishme të dish

- Forma kthehet si rrjetë në milimetra, në boshtet e vetë elementit. Veçoritë qëndrojnë në PartCraft.
- {{ui:Ruaj mbrapa te BimCraft}} nuk bën asgjë për një pjesë që nuk erdhi nga BimCraft.
- Një pjesë pa trup të ngurtë ende nuk ka asgjë për të dërguar.
- Të dy aplikacionet duhet të jenë hapur në të njëjtin shfletues: asgjë nuk ngarkohet; dy faqet e kalojnë elementin mes tyre.
