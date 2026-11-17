---
title: Terug- en vooruitrollen door de historie
summary: Zet de terugrolbalk één kenmerk per keer omhoog en omlaag om het onderdeel te zien bouwen, voeg kenmerken in het midden in, en keer terug naar het einde.
keywords: terugrollen, rollback, vooruitrollen, terugrolbalk, door de historie stappen, kenmerk invoegen, bevriezen, historie
from: 9a366cae
---

De terugrolbalk bepaalt hoeveel van de historie er gebouwd wordt. Kenmerken onder de balk zijn grijs en niet gebouwd; nieuwe kenmerken komen bij de balk.

## Één kenmerk per keer stappen

Met het onderdeel op het scherm (geen schets of tekening open):

| Doe | Resultaat |
|---|---|
| {{key:[}} of de pijlknop omhoog naast de naam van het onderdeel | De balk gaat één kenmerk omhoog |
| {{key:]}} of de pijlknop omlaag | De balk gaat één kenmerk omlaag |
| {{key:End}} of de knop om de balk naar het einde te zetten | Elk kenmerk wordt weer gebouwd |

De statusbalk zegt waar de balk staat, bijvoorbeeld "Terugrolbalk na Sketch1: 1 van 2 kenmerken gebouwd". De knoppen zijn uit wanneer de balk niet verder in die richting kan.

U kunt ook {{ui:Terugrollen naar hier}} kiezen bij elk kenmerk, of op **Terugrolbalk · vooruit rollen** klikken in de historie.

## Een kenmerk in het midden invoegen

1. Zet de balk terug tot hij staat waar het nieuwe kenmerk hoort.
2. Voeg het kenmerk toe: het komt bij de balk.
3. Druk op {{key:End}} om de rest van de historie bovenop te bouwen.

Elke verplaatsing van de balk is een stap die u met {{key:Mod+Z}} ongedaan kunt maken. De stand van de balk wordt in het bestand opgeslagen, zodat een onderdeel teruggerold kan worden verstuurd. Het opdrachtregelprogramma verplaatst hem ook: `partcraft rollback part.json` en `partcraft forward part.json --end`.
