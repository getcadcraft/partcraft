---
title: Likninger begge veier
summary: Endre en parameter, så følger delen med. Skriv inn en ny størrelse i et drevet tall, så finner PartCraft ut parameteren bak det, og spør hvilken som skal endres når flere kan endres.
keywords: likninger, løs baklengs, drevet mål, begge veier, omvendt, målsøk, parametere, koblede verdier, hvilken parameter
from: 82dc0269
---

En likning som **Extrude1 dybde = thick + extra** fungerer begge veier.

## Forover: endre parameteren

På fanen {{ui:Parametere}} endrer du `thick` fra 20 til 30. Dybden til Extrude1 blir 30 + extra, og delen bygges på nytt.

## Baklengs: endre det drevne tallet

1. Klikk på "Extrude1" i historikken. Boksen **Dybde (mm)** viser **ƒ**: en likning driver den.
2. Skriv inn størrelsen du vil ha, for eksempel `40`, og trykk {{key:Enter}}.

PartCraft løser for parameteren bak likningen, gjennom så mange steg det tar (`depth = hub_h`, `hub_h = disc_t + 50`: skriver du inn en høyde, endres `disc_t`). Statuslinjen sier hva som ble endret, for eksempel at extra gikk fra 5 til 15.

Når to eller flere parametere driver tallet, spør en boks **Hvilken parameter skal endres?** og lister dem. Klikk på en; de andre beholder verdiene sine. {{ui:Avbryt}} endrer ingenting.

Det samme virker i en skisse: dobbeltklikk på et drevet mål, skriv inn en verdi og trykk {{key:Enter}}. Det virker også i kolonnen **Verdi** i parametertabellen, for en parameter som selv er et uttrykk.

## Når det ikke kan

- Et tall som må være heltall (et antall i et mønster) eller holde seg innenfor et område (en vinkel opptil 360°), avvises før noe endres.
- En likning med bare faste tall (`=40`) har ingen parameter å endre: tallet du skriver inn, erstatter den.
- Hvis ingen verdi av parameteren gir størrelsen du skrev inn, sier statuslinjen det, og ingenting endres.
- En skisse som ikke kan løses med den nye verdien, beholder sine tidligere verdier, og statuslinjen nevner skissen.

Hver endring, i begge retninger, er ett steg for {{key:Mod+Z}} og {{key:Mod+Y}}.
