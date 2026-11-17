---
title: Solid FEM: en spændingskontrol af én del
summary: Slå add-on'et Solid FEM til, lav net af en del, vælg fastholdte flader og en last i 3D-visningen, løs, og læs flytning og von Mises-spænding på modellen.
keywords: solid fem, finite element, fea, spænding, von mises, flytning, fastholdt flade, last, tryk, tyngdekraft, egenfrekvens, egensvingningsform, net, add-on
from: 8b7e6ba2
---

## Hvad du gør

Kontrollér én massiv del under en last: hvor den flytter sig, og hvor spændingen er størst. Undersøgelsen er lineær og elastisk, så den er et kontrolhjælpemiddel; din ingeniør gennemgår resultaterne.

## Trin

1. Vælg {{ui:Indstillinger}} › {{ui:Add-ons}} og slå {{ui:Solid FEM}} til (den er slået fra, indtil du gør det). Åbn fanen {{ui:Solid FEM}} i højre panel.
2. Under {{ui:Materiale}} vælg et, eller {{ui:Brugerdefineret}} og skriv Poissons tal, densitet og flydespænding.
3. Tryk {{ui:Tilføj fastholdte flader}}, klik på de flader, der holdes fast i 3D-visningen, og tryk derefter {{ui:Færdig med at vælge}}.
4. Tilføj en last med {{ui:Tilføj kraft}}, {{ui:Tilføj tryk}} eller {{ui:Tilføj tyngdekraft}}, og vælg dens flader på samme måde.
5. Tryk {{ui:Lav net af delen}}, og derefter {{ui:Løs}}. Vælg {{ui:Egenfrekvenser}} under {{ui:Undersøgelse}} først, hvis du vil have frekvenser.
6. Læs {{ui:Resultater}} og {{ui:Advarsler}}, og tryk derefter {{ui:Vis på modellen}} for at tegne von Mises-spænding, flytning eller en egensvingningsform; {{ui:Fjern plottet}} fjerner det.

## Noter

- Siden løser op til et fast antal elementer; statuslinjen siger, når din elementstørrelse er for fin.
- Spænding ved fastholdte flader, lastpunkter og skarpe hjørner vokser, når nettet forfines. Forfin og sammenlign, før du stoler på en toppunktsværdi.
- Hver ændring er ét fortrydelsestrin, og indstillingerne gemmes i delfilen.
- For flydning og kontaktundersøgelser, se [Kontrollér spænding og udbøjning](topic:simulation).
