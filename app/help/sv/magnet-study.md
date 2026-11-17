---
title: Magnetstudie av en skiss
summary: Gör de slutna profilerna i dina skisser till en platt magnetmodell (järn, magneter, spolar), se fältet och läs kraften och vridmomentet på en kropp.
keywords: magnet, magnetisk, magnetostatisk, fält, flödestäthet, kraft, vridmoment, spole, järnok, järn, B-H-kurva, permanentmagnet, ställdon, motor, solenoid, maxwell
from: 604efc3b
---

Använd {{ui:Mer}} i verktygsfältet Funktioner › {{ui:Magnetstudie av skisser…}} på en del som har skisser. Varje sluten form i de skisser du bockar i är en region i en platt modell; studien räknar ut det magnetiska fältet B, kraften och vridmomentet på en kropp du väljer.

## Steg

1. Rita kropparna som slutna former i skisser: en järnok, en magnet, en spole. Kroppar som rör vid varandra delar en kant, så lägg dem i olika skisser; kroppar som står fristående, eller sitter inuti varandra (ett fönster i en järnok), kan dela en. Håll skisserna i samma plan.
2. Öppna studien och bocka i de skisser som ska användas. Varje sluten profil får en numrerad rad. Ange vad den är: {{ui:Luft}}, {{ui:Järn}} (en permeabilitet, eller en B–H-kurva skriven som par av B i tesla och H i A/m), en {{ui:Permanentmagnet}} (Br i tesla, dess riktning som en vinkel från skissens x-axel, och dess återgångspermeabilitet) eller en {{ui:Spole}} (den totala strömmen genom dess profil, varv gånger ampere; tecknet säger vilket håll den går).
3. Bocka i {{ui:Kraft och moment på den här kroppen}} för de kroppar du vill ha dem på. Ange delens djup utanför skissen.
4. Välj nätet och luften runt modellen, och tryck sedan på {{ui:Kör}}.

## Vad du bör se

- Flödestätheten |B| över modellen, mörkblått lågt till rött högt, med profilerna numrerade.
- Det starkaste fältet och var det finns, antalet trianglar, och för varje kropp du bockade i kraften längs x och y samt vridmomentet kring dess mitt, för det djup du angav.
- {{ui:Spara resultat (CSV)}} skriver siffrorna.

## Bra att veta

- Det är en platt, stationär modell: allt gäller per meter djup, utan virvelströmmar och utan hysteres, och en magnet är en rak återgångslinje (den kan inte avmagnetiseras).
- Modellen sitter i en låda av luft vars kant är en vägg. Jämför två storlekar på luftlådan och näten Normalt och Fint: en kraft som tas från fältet runt en kropp är bara så bra som nätet där.
- Järn med bara en permeabilitet mättas aldrig. När fältet passerar 2 T höjer studien ett ⚠ i listan Problem: ge järnet en B–H-kurva. Siffrorna i en ny rad är exempel (järn μr 2000, en magnet på 1,2 T), inte ett materials datablad.
- En kropp behöver utrymme runt sig för att ta upp kraften: om en annan kropp är för nära säger studien det.
- Ett ritningshjälpmedel, inte ett tekniskt godkännande.

## Nästa

- [Magnetfält i 2D (handledning)](topic:magnetic-fields-2d)
