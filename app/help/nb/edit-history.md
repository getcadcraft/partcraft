---
title: Endre en del via historikken
summary: Rediger funksjoner og skisser i etterkant, undertrykk, rull tilbake, sett inn funksjoner tidligere, endre rekkefølge, gi nytt navn og slett, og angre alt dette.
keywords: historikk, funksjonstre, konstruksjonstre, rediger funksjon, rediger skisse, undertrykk, opphev undertrykking, tilbakerulling, rull tilbake, rull fremover, endre rekkefølge, flytt funksjon, slett, gi nytt navn, angre, gjør om, bygg på nytt, regenerer, forelder barn, stor del, mange funksjoner, treg ombygging, 750 funksjoner
from: 6f75aef4
---

En PartCraft-del er historikken sin: listen over plan, skisser og funksjoner til venstre. PartCraft bygger volumlegemet på nytt fra toppen av listen hver gang noe endres. Endres et tall tidlig i listen, endres alt som er bygd på det.

## Rediger en funksjon

1. Klikk funksjonen i historikken (eller skissen som er innrykket under den).
2. Endre innstillingene i høyre panel. Hver endring bygger om med én gang.

Det finnes ingen OK eller Avbryt: hver endring tas i bruk. Liker du den ikke, trykk {{key:Mod+Z}}.

## Endre hvilke kanter eller flater en avrunding, fasing eller skall bruker

Dobbeltklikk funksjonen i historikken, eller velg den og velg {{ui:Velg kanter}} (eller {{ui:Velg flater}}). Klikk kanter eller flater for å legge dem til eller fjerne dem, og velg deretter {{ui:Ferdig}} eller {{key:Esc}}. Se [Avrunding, skråkant og hul](topic:fillet-chamfer-shell).

## Rediger en skisse

1. Dobbeltklikk skissen i historikken, eller velg den og velg {{ui:Rediger skisse}} i høyre panel (eller {{ui:Skisse}} i verktøylinjen).
2. Delen går tilbake til slik den var da skissen ble laget. Funksjoner etter den er skjult mens du redigerer.
3. Endre geometrien, relasjonene eller målene.
4. Lukk skissen. Hele delen bygges om med endringen.

For å endre bare en størrelse trenger du ikke åpne skissen. Velg funksjonen eller skissen, og endre tallet under **Skissemål** (eller **Drivende mål**) i høyre panel. Se [Endre størrelser uten å åpne skissen](topic:change-sizes).

## Når en funksjon feiler

Hvis en endring gjør en funksjon umulig, bygger PartCraft alt annet og markerer problemet:

- funksjonen viser **⚠ feil** i historikken, og meldingen står øverst i høyre panel (hold musen over raden for å lese den også);
- funksjoner som trenger den, viser **⚠ ikke bygget ennå**, med «Trenger Extrude2, som feiler.»;
- brikken i statuslinjen sier «1 funksjon feiler».

Rett årsaken (eller angre), så bygges delen igjen. Vanlige meldinger og hva du gjør med dem står i [Feilsøking](topic:troubleshooting).

## Undertrykk en funksjon

Undertrykking slår av en funksjon uten å slette den. Det er nyttig for å prøve en del uten et hull eller et mønster.

1. Velg funksjonen.
2. Velg {{ui:Undertrykk}}. Raden viser **av**. Funksjoner som trenger den, bygges heller ikke.
3. Velg {{ui:Opphev undertrykking}} for å slå den på igjen.

## Rull tilbake

Tilbakerulling bygger delen bare opp til et punkt, slik at du kan se den slik den var, eller legge til en funksjon tidligere i historikken.

1. Velg en funksjon og velg {{ui:Rull tilbake til hit}}. Den funksjonen og alle under den blir gråtonet og bygges ikke. En rad **Tilbakerullingslinje · rull fremover** markerer stedet.
2. En funksjon du legger til nå, settes inn **ved linjen**, før de gråtonede.
3. Klikk **Tilbakerullingslinje · rull fremover** for å bygge alt på nytt.

Tilbakerullingsposisjonen lagres i filen.

## Endre rekkefølge på funksjoner

1. Velg funksjonen.
2. Velg {{ui:Flytt opp}} eller {{ui:Flytt ned}}, eller trykk {{key:Alt+Up}} eller {{key:Alt+Down}} når historikkraden har fokus.

En funksjon kan aldri flyttes over noe den bruker. Knappen er gråtonet. Holder du musen over den (eller prøver tasten), kommer forklaringen, for eksempel «Extrude2 bruker Sketch2, så Sketch2 må komme først.»

Det en funksjon bruker: skissen sin, flaten skissen ligger på, funksjonene et mønster eller speil kopierer, og en skisselinje eller roter-rundt-akse brukt som retning eller akse.

## Slett en funksjon

1. Velg funksjonen og velg {{ui:Slett}} i høyre panel eller verktøylinjen, eller trykk {{key:Delete}}.
2. Hvis andre funksjoner bruker den, spør PartCraft: «Extrude3, Hole1 bruker Extrude1 og slettes også.» Velg {{ui:Slett alle}} eller {{ui:Avbryt}}.

Å slette en funksjon sletter ikke skissen. Skissen vises i visningen som en ubrukt skisse, klar for en annen funksjon. Slett skissen separat hvis du ikke trenger den.

## Gi nytt navn

Velg funksjonen og skriv et nytt **Navn** nederst i høyre panel (opptil 60 tegn). Delens eget navn står i høyre panel når ingenting er valgt.

## Deler med hundrevis av funksjoner

En del med hundrevis av funksjoner testes ved 750. PartCraft beholder volumlegemet det hadde midt i historikken. En endring sent i historikken bygger derfor bare om funksjonene etter den. En endring nær toppen bygger om alt som er bygd på den, og tar lengst tid. Angre og gjør om bygger bare om fra der de to tilstandene er forskjellige. For å jobbe raskere med en stor del, rull tilbake til der du jobber (se Rull tilbake over), eller undertrykk det du ikke trenger akkurat nå. Flere kutt og påbygg som ikke berører hverandre, brukes samlet. En del laget av mange separate hull og påbygg bygges derfor raskere enn antallet funksjoner tilsier.

En stor del bygges om i bakgrunnen. Byggebrikken nederst sier **Bygger om…** med hvor langt den er kommet. Visningen, panelene og menyene fungerer mens den kjører. Delen på skjermen er den sist ferdigbygde til den nye er klar. Endrer du noe igjen mens den bygges om, bygger PartCraft den nyeste versjonen og forkaster den som pågår. En liten del bygges om med én gang.

## Angre og gjør om

- {{key:Mod+Z}} eller {{ui:Angre}} angrer siste endring: en funksjon, en innstilling, en skisseendring eller et dra. Statuslinjen sier hva, for eksempel «Angret endring av mål.»
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} eller {{ui:Gjør om}} gjør den om igjen.
- PartCraft beholder de siste 200 stegene. En del så stor at 200 kopier ville brukt mye minne, beholder færre, men aldri færre enn de nyeste 20. Endringer på tegningsarket (et snitt, et flyttet GD&T-symbol) står i samme liste. Å åpne en fil eller starte en ny del tømmer listen.

:::mac
På en Mac bruker du ⇧⌘Z for å gjøre om. I Safari kan ⌘Y åpne nettleserens historikk i stedet.
:::
