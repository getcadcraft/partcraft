---
title: Ekvationer åt båda hållen
summary: Ändra en parameter och delen följer; skriv en ny storlek i ett styrt tal och PartCraft räknar ut parametern bakom det, och frågar vilken när flera kan ändras.
keywords: ekvationer, lös bakåt, styrt mått, åt båda hållen, omvänd, målsökning, parametrar, länkade värden, vilken parameter
from: 82dc0269
---

En ekvation som **Extrude1 depth = thick + extra** fungerar åt båda hållen.

## Framåt: ändra parametern

På fliken {{ui:Parametrar}} ändrar du `thick` från 20 till 30. Extrude1:s djup blir 30 + extra, och delen byggs om.

## Bakåt: ändra det styrda talet

1. Klicka på "Extrude1" i historiken. Dess ruta **Djup (mm)** visar **ƒ**: en ekvation styr den.
2. Skriv den storlek du vill ha, till exempel `40`, och tryck {{key:Enter}}.

PartCraft löser för parametern bakom ekvationen, genom så många steg som det tar (`depth = hub_h`, `hub_h = disc_t + 50`: att skriva en höjd ändrar `disc_t`). Statusfältet visar vad som ändrades, till exempel att extra gick från 5 till 15.

När två eller flera parametrar styr talet frågar en ruta **Vilken parameter ska ändras?** och listar dem. Klicka på en; de andra behåller sina värden. {{ui:Avbryt}} ändrar ingenting.

Samma sak fungerar i en skiss: dubbelklicka på ett styrt mått, skriv ett värde och tryck {{key:Enter}}. Det fungerar också i kolumnen **Värde** i parametertabellen, för en parameter som i sig är ett uttryck.

## När det inte går

- Ett tal som måste vara heltal (ett mönsters antal) eller ligga inom ett intervall (en vinkel upp till 360°) avvisas innan något ändras.
- En ekvation med enbart fasta tal (`=40`) har ingen parameter att ändra: talet du skriver ersätter den.
- Om inget värde på parametern ger den storlek du skrev säger statusfältet det, och inget ändras.
- En skiss som inte kan lösas med det nya värdet behåller sina tidigare värden, och statusfältet anger skissen.

Varje ändring, åt vilket håll som helst, är ett steg för {{key:Mod+Z}} och {{key:Mod+Y}}.
