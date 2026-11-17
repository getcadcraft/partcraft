---
title: Ændr en del via dens historik
summary: Rediger features og skitser bagefter, undertryk, rul tilbage, indsæt features tidligere, omarrangér, omdøb og slet, og fortryd hvad som helst af det.
keywords: historik, featuretræ, designtræ, rediger feature, rediger skitse, undertryk, ophæv undertrykkelse, rul tilbage, rulning tilbage, rul frem, omarrangér, flyt feature, slet, omdøb, fortryd, gentag, genopbyg, regenerér, forælder barn, stor del, mange features, langsom genopbygning, 750 features
from: 6f75aef4
---

En PartCraft-del er sin historik: listen over plan, skitser og features til venstre. PartCraft genopbygger det massive legeme fra toppen af listen, hver gang noget ændres. Ændrer du et tal tidligt i listen, ændres alt, der er bygget på det.

## Rediger en feature

1. Klik på featuren i historikken (eller skitsen indrykket under den).
2. Ændr dens indstillinger i højre panel. Hver ændring genopbygges med det samme.

Der er ingen OK eller Annuller: hver ændring anvendes. Hvis du ikke bryder dig om den, tryk {{key:Mod+Z}}.

## Ændr hvilke kanter eller flader en afrunding, affasning eller skal bruger

Dobbeltklik på featuren i historikken, eller vælg den og vælg {{ui:Vælg kanter}} (eller {{ui:Vælg flader}}). Klik på kanter eller flader for at tilføje eller fjerne dem, og klik derefter på {{ui:Færdig}} eller tryk {{key:Esc}}. Se [Afrund, affas og skal](topic:fillet-chamfer-shell).

## Rediger en skitse

1. Dobbeltklik på skitsen i historikken, eller vælg den og vælg {{ui:Rediger skitse}} i højre panel (eller {{ui:Skitse}} i værktøjslinjen).
2. Delen går tilbage til, som den var, da skitsen blev lavet: features efter den er skjult, mens du redigerer.
3. Ændr geometrien, relationerne eller målene.
4. Luk skitsen. Hele delen genopbygges med ændringen.

Hvis du kun vil ændre en størrelse, behøver du ikke åbne skitsen. Vælg featuren eller skitsen, og ændr tallet under **Skitsemål** (eller **Drivende mål**) i højre panel. Se [Ændr mål uden at åbne skitsen](topic:change-sizes).

## Når en feature fejler

Hvis en ændring gør en feature umulig, bygger PartCraft alt andet og markerer problemet:

- featuren viser **⚠ fejl** i historikken, og dens besked står øverst i dens højre panel (hold musen over rækken for også at læse den);
- features, der har brug for den, viser **⚠ ikke lavet**, med »Kræver Extrude2, som fejler.«;
- statuslinjens chip siger »1 feature fejler«.

Ret årsagen (eller fortryd), så bygger delen igen. Almindelige meddelelser og hvad du gør ved dem står i [Fejlfinding](topic:troubleshooting).

## Undertryk en feature

Undertrykning slukker en feature uden at slette den: nyttigt til at prøve en del uden et hul eller et mønster.

1. Vælg featuren.
2. Vælg {{ui:Undertryk}}. Dens række viser **slukket**. Features, der har brug for den, bygges heller ikke.
3. Vælg {{ui:Ophæv undertrykkelse}} for at tænde den igen.

## Rul tilbage

Ved at rulle tilbage bygges delen kun op til et bestemt punkt, så du kan se den, som den var, eller tilføje en feature tidligere i historikken.

1. Vælg en feature og vælg {{ui:Rul tilbage hertil}}. Den feature og alle under den bliver gråtonede og bygges ikke. En række **Rul tilbage-bjælke · rul frem** markerer stedet.
2. Enhver feature, du tilføjer nu, placeres **ved bjælken**, før de gråtonede.
3. Klik på **Rul tilbage-bjælke · rul frem** for at bygge alt igen.

Rulle-tilbage-positionen gemmes i filen.

## Omarrangér features

1. Vælg featuren.
2. Vælg {{ui:Flyt op}} eller {{ui:Flyt ned}}, eller tryk {{key:Alt+Up}} eller {{key:Alt+Down}}, når dens historikrække er i fokus.

En feature kan aldrig flyttes op over noget, den bruger. Knappen er gråtonet, og hvis du holder musen over den (eller prøver tasten), får du en forklaring, for eksempel »Extrude2 bruger Sketch2, så Sketch2 skal komme først.«

Det en feature bruger: sin skitse; fladen skitsen sidder på; de features et mønster eller en spejling kopierer; en skitselinje eller en omdrejning brugt som retning eller akse.

## Slet en feature

1. Vælg featuren og vælg {{ui:Slet}} i højre panel eller værktøjslinjen, eller tryk {{key:Delete}}.
2. Hvis andre features bruger den, spørger PartCraft: »Extrude3, Hole1 bruger Extrude1 og slettes også.« Vælg {{ui:Slet alle}} eller {{ui:Annuller}}.

Sletning af en feature sletter ikke dens skitse: skitsen dukker op i visningen som en ubrugt skitse, klar til en anden feature. Slet skitsen separat, hvis du ikke har brug for den.

## Omdøb

Vælg featuren og skriv et nyt **Navn** nederst i højre panel (op til 60 tegn). Delens eget navn står i højre panel, når intet er valgt.

## Dele med hundredvis af features

En del med hundredvis af features testes ved 750. PartCraft gemmer det massive legeme, det havde midtvejs i historikken, så en ændring sent i historikken kun genopbygger features efter den. En ændring nær toppen genopbygger alt, der er bygget på den, og det tager længst tid. Fortryd og gentag genopbygger kun fra det sted, hvor de to tilstande adskiller sig. For at arbejde hurtigere på en stor del, rul tilbage til det sted, hvor du arbejder (se Rul tilbage ovenfor), eller undertryk det, du ikke har brug for lige nu. Flere udskæringer og udhævninger, der ikke rører hinanden, anvendes samlet, så en del med mange separate huller og udhævninger bygges hurtigere, end antallet af features antyder.

En stor del genopbygges i baggrunden: byggechippen nederst siger **Genopbygger…** med, hvor langt den er nået, og visningen, panelerne og menuerne fungerer stadig, mens den kører. Delen på skærmen er den sidst byggede, indtil den nye er klar. Hvis du ændrer noget igen, mens den genopbygges, bygger PartCraft den nyeste version og kasserer den, der er i gang. En lille del genopbygges med det samme.

## Fortryd og gentag

- {{key:Mod+Z}} eller {{ui:Fortryd}} fortryder den sidste ændring: en feature, en indstilling, en skitseredigering, et træk. Statuslinjen siger hvad, for eksempel »Fortrudt ændring: målsætning.«
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} eller {{ui:Gentag}} gentager den.
- PartCraft gemmer de sidste 200 trin. En del så stor, at 200 kopier ville bruge meget hukommelse, gemmer færre, men aldrig færre end de nyeste 20. Ændringer på tegningsarket (et snit, et flyttet GD&T-symbol) er på samme liste. Åbning af en fil eller start af en ny del rydder den.

:::mac
På en Mac bruger du ⇧⌘Z til at gentage. I Safari kan ⌘Y åbne browserens historik i stedet.
:::
