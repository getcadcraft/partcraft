---
title: Åbn en STL, OBJ eller 3MF som massivt legeme
summary: Gør et net fra en scanner, et 3D-printsted eller et andet program til et massivt legeme, du kan skære i, tilføje til og skitsere på; hvad PartCraft reparerer undervejs, og hvad det ikke kan.
keywords: stl, obj, 3mf, net, net til massivt legeme, konverter net, scanning, vandtæt, reparation, huller, mellemrum, enheder, op-akse, importeret legeme, flade flader
from: 7b948471
---

PartCraft åbner STL-, OBJ- og 3MF-net som **massive legemer**. Legemet virker som ethvert andet massivt legeme: skær i det, tilføj til det, bor i det, lav mønstre af det, brug det i en samling eller til bearbejdning, og skitsér på dets flade flader. Det har ingen historik af sin egen: et net er kun trekanter, så dets størrelser kan ikke ændres, kun tilføjes til eller skæres fra.

## Åbn et net

1. Vælg {{ui:Åbn}} eller tryk {{key:Mod+O}}, og vælg `.stl`-, `.obj`- eller `.3mf`-filen. Eller slip den på 3D-visningen.
2. PartCraft læser den, reparerer det, den sikkert kan, og viser, hvad den fandt: hvor mange trekanter og punkter, hver reparation, og om nettet nu **lukker**.
3. Kontrollér **Enheder i filen** og **Op i filen**. STL og OBJ angiver ikke deres enheder, så millimeter er et gæt; en 3MF-fil angiver sine egne. Linjen **Størrelse her** viser legemets størrelse med dit valg, så en del, der kommer ind 25,4 gange for lille, er let at se (den var i tommer).
4. Hvis delen på skærmen er tom, vælg {{ui:Åbn som legeme}}. Hvis den allerede har features, vælg **Brug til** (føj til delen, skær fra den, eller behold kun overlappet), og derefter {{ui:Føj til denne del}}, eller {{ui:Ny del}} for at starte forfra med nettet.

En **Imported1**-feature vises i historikken. Statuslinjen siger for eksempel »bracket.stl er et massivt legeme: 15200.512 mm³, 14 flade flader at skitsere på.«

## Hvad PartCraft reparerer

| Reparation | Hvad det betyder |
|---|---|
| Dobbelte hjørner samlet | En STL gentager hvert hjørne for hver af sine trekanter; de samles til ét punkt |
| Trekanter uden areal fjernet | Slivers, hvis hjørner ligger på én linje |
| Dobbelte trekanter fjernet | En trekant skrevet to gange gemmes én gang; to, der vender modsat vej (en indre væg), fjernes begge |
| Små mellemrum lukket | Kanter, der næsten mødes (inden for en tusindedel af delens størrelse), samles |
| Huller fyldt | En åbning, hvis kant ligger fladt, fyldes uanset størrelse; en skæv en kun når den er lille |
| Trekanter vendt til at vende udad | Trekanter, der vender forkert, vendes, så de passer til deres naboer, og hele fladen vender udad |

## Når et net ikke lukker

Et massivt legeme kræver en flade uden åbninger. Når PartCraft ikke kan lukke den, siger dialogen, hvor mange åbninger og åbne kanter der er tilbage, og der er intet legeme at tilføje. Luk åbningerne i det program, der lavede nettet, eller eksportér det igen som et lukket (vandtæt) net, og åbn det igen.

PartCraft lader en åbning være, når det at fylde den kunne gætte forkert: et stort skævt hul eller to åbninger i samme plan (en ringformet flade, der mangler, hvor fyldning af hver kant ville dække hullet i midten). En kant, der deles af mere end to trekanter, rapporteres også: sådan en flade har ingen tydelig inderside.

## Skitsér på dens flade flader

Flade områder lavet af mange trekanter samles til ét **fladt flade** hver, så en skitse kan ligge på dem: klik på fladen og vælg {{ui:Skitsér på denne flade}}. En flade, der senere skæres i eller tilføjes til, forbliver en flade. Runde områder (et hul, en afrunding) forbliver trekanter: de er ikke flader, du kan vælge, og visningen tegner deres kontur ud fra vinklen mellem trekanterne.

## Ændr det senere

Vælg **Imported1** for at se filen, det kom fra, hvor mange trekanter det har, og hvad der blev repareret. **Enheder i filen**, **Op i filen** og **Brug til** kan ændres der; hver ændring er ét fortrydelsestrin.

## Hvor det gemmes

Det reparerede net gemmes **inde i** `.partcraft.json`-filen, så du ikke har brug for netfilen igen. En delfil med et netlegeme er version 5: en ældre PartCraft afviser den på dens version. Et net på 200.000 trekanter lægger omkring 1,2 MB til.

## Grænser

- Højst 3 millioner trekanter og 200 MB i én fil.
- Et legeme lavet af et net bygges af netkernen. Med den eksakte kerne slået til (kun for udviklere) siger det det og bygges ikke.
- OBJ-materialer, teksturkoordinater og frie kurver udelades; 3MF-farver, -materialer og støtteobjekter udelades (dialogen siger, hvor mange objekter der blev sprunget over).
- Legemet er så fint som nettet: et groft STL giver grove runde flader. Huller, du borer i det, er lige så runde som dine egne features.
