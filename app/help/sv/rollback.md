---
title: Rulla tillbaka och fram genom historiken
summary: Flytta återrullningsfältet upp och ner en funktion i taget för att se delen byggas, infoga funktioner mitt i och gå tillbaka till slutet.
keywords: återrullning, rulla tillbaka, rulla fram, återrullningsfält, stega genom historiken, infoga funktion, frys, historik
from: 9a366cae
---

Återrullningsfältet avgör hur mycket av historiken som byggs. Funktioner under det är gråtonade och inte byggda; nya funktioner läggs in vid fältet.

## Stega en funktion i taget

Med delen på skärmen (ingen skiss eller ritning öppen):

| Gör | Resultat |
|---|---|
| {{key:[}} eller uppåtpilsknappen bredvid delens namn | Fältet flyttas upp en funktion |
| {{key:]}} eller nedåtpilsknappen | Fältet flyttas ner en funktion |
| {{key:End}} eller knappen för att flytta fältet till slutet | Varje funktion byggs igen |

Statusfältet anger var fältet står, till exempel ”Återrullningsfält efter Sketch1: 1 av 2 funktioner byggda”. Knapparna är avstängda när fältet inte kan flyttas längre åt det hållet.

Du kan också välja {{ui:Rulla tillbaka hit}} på valfri funktion, eller klicka på **Återrullningsfält · rulla fram** i historiken.

## Infoga en funktion mitt i

1. Flytta fältet bakåt tills det står där den nya funktionen hör hemma.
2. Lägg till funktionen: den läggs in vid fältet.
3. Tryck {{key:End}} för att bygga resten av historiken ovanpå den.

Varje flytt av fältet är ett steg du kan ångra med {{key:Mod+Z}}. Fältets plats sparas i filen, så en del kan skickas tillbakarullad. Kommandoradsverktyget flyttar det också: `partcraft rollback part.json` och `partcraft forward part.json --end`.
