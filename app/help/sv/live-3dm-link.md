---
title: Håll en .3dm-modell levande
summary: Ändra en modell i programmet som gjorde den och se PartCraft:s kropp följa med, från Rhino 8 eller en Grasshopper-definition, med dina funktioner ombyggda på den nya formen.
keywords: rhino, grasshopper, live-länk, live-anslutning, 3dm, nurbs, parametrisk, länk, synkronisering, skript, skicka, importerad kropp
from: cf4dc9b2
---

Fortsätt forma modellen där du modellerar den, och tillverka, kontrollera och dokumentera den här. Varje ändring i det andra programmet ersätter en importerad kropp i PartCraft, och funktionerna efter den bygger om sig på den nya formen.

:::note
Länken kräver **CadCraft Studio** på samma dator. En webbläsarflik kan inte ta emot anslutningen. Ingenting skickas över internet: skriptet pratar med Studio på datorns egen adress, med en token.
:::

:::warning
Den här länken har testats med skriptets filskrivare och en ersättning för det andra programmet, ännu inte inne i Rhino eller Grasshopper själva. Om något misslyckas där, berätta vad felet sa.
:::

## Ställ in

1. I Studio, öppna PartCraft. I {{ui:Inställningar}} › {{ui:PartCraft}} › {{ui:Assistenter}}, bocka i **Låt AI-assistenter och skript använda PartCraft**, och sedan **Redigera**.
2. I Studio, välj {{ui:Anslut en assistent}}. Den visar adressen och token som du klistrar in nedan.
3. Ladda ner skriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Från Rhino

1. Kör `cadcraft_link.py` i Rhinos skriptredigerare (Python 3 i Rhino 8).
2. Första gången, klistra in adressen och token. De sparas i `.cadcraft-link.json` i din hemmapp, aldrig i modellen. Studio skapar en ny token varje gång den startar, så skriptet frågar igen då.

Kör skriptet igen för att stoppa.

## Från Grasshopper

Kör skriptet en gång i Rhino först, så att adressen och token sparas.

1. Lägg till en skriptkomponent (Python 3) och klistra in hela `cadcraft_link.py` i den.
2. Ge den dessa indata: `G` (geometrin, med liståtkomst), `N` (ett namn, valfritt), `On` (en boolesk omkopplare), och `Target` (valfritt: `model` eller `part`, om båda apparna är öppna).
3. Sätt `On` till sant.

Varje beräkning skickar `G` och ersätter det komponenten skickade förra gången.

## Så fungerar det här

- **En kropp.** Allt synligt i modellen blir en importerad funktion, som när du [öppnar en .3dm-fil](topic:open-3dm-files).
- **Den måste vara sluten.** PartCraft fyller små hål och platta öppningar, och det andra programmet får veta hur många. Om modellen fortfarande inte är sluten behåller PartCraft kroppen den hade, och statusfältet säger det. Nästa ändring som sluts uppdaterar den.
- **Slutför det du gör.** I en skiss eller på ett ritningsblad nekas uppdateringar och görs om senare; de kommer när du är tillbaka i modellen.
- **Ångra.** Uppdateringar som ligger inom två sekunder från varandra delar ett ångrasteg.
- **Spara.** Delfilen behåller länken. Kör skriptet igen efter att du öppnat den, så uppdateras samma funktion.

**Bara en riktning.** Ändringar här går inte tillbaka till det andra programmet.

## Om något går fel

- **"No ModelCraft or PartCraft window allows it":** gör steg 1 i installationen.
- **"Studio refused the token":** Studio har startat om. Kopiera den nya token och kör skriptet igen. För Grasshopper, kör det i Rhino först.
- **"Cannot reach CadCraft Studio":** Studio körs inte, eller adressen har ändrats.
