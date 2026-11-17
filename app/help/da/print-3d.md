---
title: Gør en del klar til 3D-print
summary: Kontrollér, at en del eller samling er lukket, passer i din printer og står på et fundament, og hent den derefter som STL eller 3MF til din slicer.
keywords: 3D-print, 3D-printning, printer, print, slicer, stl, 3mf, vandtæt, lukket, manifold, printbord, printbordets størrelse, printplade, overhæng, understøtninger, fod, millimeter, eksport, gevind, frigang
from: 90d81dff
---

En slicer har brug for en lukket form: ingen huller, alle flader vender udad, og intet går gennem sig selv. Dele, som PartCraft bygger, er lukkede ved konstruktion, så kontrollen fortæller mest om størrelsen, om emnet passer på din printers printbord, om det står på en flad flade, og hvor meget af det der hænger ud.

## Kontrollér og hent

1. Valgfrit, én gang: sæt din printers printbord under {{ui:Indstillinger}} › PartCraft › **3D-printer**: bredde, dybde og højde i millimeter. Lad dem stå tomme for at springe den kontrol over.
2. Vælg {{ui:Eksportér}}, og derefter {{ui:Kontrol til 3D-print (STL eller 3MF)…}}.

   Dialogen siger »Klar til print« eller »Ikke klar til print«, lister alt, der er galt, og angiver størrelsen på printbordet (X × Y × Z, i millimeter), volumen og antal trekanter.

3. Klik på {{ui:Download 3MF}} eller {{ui:Download STL}}. Filen er den samme som {{ui:Eksportér}} › {{ui:3MF, til 3D-print}} eller {{ui:STL, til 3D-print}}.

I en samling tager kontrollen og filerne hele samlingen, hver kopi der, hvor den er placeret.

Emnet kontrolleres stående, som eksporten skriver det: det, der peger op i PartCraft (vinkelret på Overplan), peger op på printbordet. En del skitseret på Overplan ligger fladt.

## Hvad dialogen kan melde

**Ikke klar til print** (en slicer kan afvise den eller printe den forkert): huller (kanter med en flade på kun den ene side), kanter delt af tre eller flere flader, flader, der vender modsat vej, et legeme vendt forkert, eller et legeme, der går gennem sig selv. En del bygget i PartCraft bør aldrig vise disse; hvis den gør, se [Fejlfinding](topic:troubleshooting).

**Advarsler** (den printer, men kig først):

- **Større end printerens printbord**, selv drejet 90° på det.
- **Intet ligger fladt i bunden**: drej emnet i din slicer, så en flade hviler på printbordet, ellers skal det bruge understøtninger eller en raft.
- **Hælder mere end 45° fra lodret**: de flader skal have understøtning, stående som det er. En anden vej op kan kræve mindre.
- **Adskilte legemer overlapper** eller **mødes flade mod flade**: slicere flettes normalt sammen. {{ui:Kombinér}} under Features › {{ui:Mere}} samler dem til ét legeme. Se [Legemer](topic:bodies).
- **Under 1 mm på tværs**: kontrollér emnets mål.

## Gevind, der kan printes

Et modelleret gevind printes som et rigtigt gevind. Giv det noget **Frigang**, så en printet bolt går i en printet møtrik: se [Gevind](topic:threads).

## Glatte runde flader

STL og 3MF består af trekanter. For glattere runde flader: klik i tomt rum, så intet er valgt, og sæt **Kurver** til **Fin (128 pr. omgang)** eller **Meget fin (256 pr. omgang)** i højre panel, før du eksporterer. Flere trekanter giver større filer.

## Større, mindre eller i dele

- **Eksport › Skalér til print (STL eller 3MF)…** gemmer emnet skaleret pr. akse uden at ændre det: en **krympetilladelse** i procent (størrelse × (1 + s), eller den præcise størrelse ÷ (1 − s)) til et støbemønster, eller simple faktorer, om midten, det nederste hjørne, midten af bunden eller origo.
- **Eksport › Del til print (en zip med dele)…** skærer et emne, der er for stort til din printer, i dele, der hver passer på det printbord, du angiver, forbundet med tappe, nøgler, svalehaler, dyvelhuller eller magnetlommer (med den frigang, du har sat). Hver del og samling nummereres, og delene gemmes som STL eller 3MF i en zip med et samlingsark. Selve emnet ændres ikke.

## Ikke kontrolleret

Vægtykkelse, detaljer, der er mindre end din dyse kan tegne, og hvordan slicer placerer understøtninger. Din slicer viser dem.
