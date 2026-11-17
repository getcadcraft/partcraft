---
title: Designa ett BimCraft-element och spara tillbaka det
summary: En del som skickats från BimCraft öppnas med byggnaden runt sig, grå och skrivskyddad. Ändra den och spara sedan tillbaka så att BimCraft kan ta emot den nya formen.
keywords: bimcraft, bim, element, skicka, spara tillbaka, länk, byggnad, kontext, grannar, stöd, konsol, ifc, acceptera
from: 0978fe53
---

## Vad du gör

Arbeta med en del som kommer från en BimCraft-modell, på sin plats i byggnaden, och skicka tillbaka den nya formen.

## Steg

1. I BimCraft väljer du ett element och väljer {{ui:Delänkar}} › {{ui:Skicka till PartCraft}}. PartCraft öppnar det som en ny del. Statusfältet säger att det är ett BIM-element.
2. Elementen runt det (inom 3 m) ritas grå. De finns där för att du ska konstruera mot dem. Du kan inte välja eller ändra dem, och de sparas inte i delfilen.
3. Ändra delen som vilken annan del som helst: skär, lägg till, borra, spegla. Dess origo och axlar är elementets egna, så delen går tillbaka till där den stod.
4. Välj {{ui:Fil}} › {{ui:Exportera}} › {{ui:Spara tillbaka till BimCraft}}. Statusfältet säger vilken revision du skickade.
5. I BimCraft visas elementet som ändrat tills personen där accepterar det.

## Vad du bör se

- Delen behåller sin länk i filen. Öppnar du den senare säger statusfältet fortfarande att det är ett BIM-element. Den grå byggnaden kommer tillbaka så länge webbläsaren fortfarande har paketet det skickades med.
- Sparar du tillbaka igen skickas revision 2, 3 och så vidare. BimCraft behåller den senaste.

## Bra att veta

- Formen skickas tillbaka som ett nät i millimeter, i elementets egna axlar. Funktionerna stannar i PartCraft.
- {{ui:Spara tillbaka till BimCraft}} gör ingenting för en del som inte kommit från BimCraft.
- En del utan solid ännu har inget att skicka.
- Båda apparna måste vara öppna i samma webbläsare: inget laddas upp, utan de två sidorna skickar elementet mellan sig.
