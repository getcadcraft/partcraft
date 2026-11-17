---
title: ViewCube
summary: Klikk på en flate, kant eller et hjørne på kuben i hjørnet av visningen for å se derfra, dra den for å bane rundt, vri kompassringen, gå rundt en rettvendt visning og gå tilbake til startvisningen.
keywords: viewcube, visningskube, kube, kompass, nord, startvisning, standardvisninger, topp, front, høyre, iso, hjørne, kant, bane rundt, roter visning, aksesymbol, hjørneindikator, navigasjon
from: afc33dc7
---

Kuben står øverst til høyre i 3D-visningen (ikke under skissering eller på tegningsarket). Den roterer med visningen, så den alltid viser hvilken vei du ser: {{ui:Topp}} er delens +Y-side (topplanet), {{ui:Front}} er +Z-siden (frontplanet vender mot deg når du ser på det), og {{ui:Høyre}} er +X-siden. Den er gjennomsiktig til du peker på den.

## Se fra en side, en kant eller et hjørne

1. Pek på kuben. Delen under pekeren lyser opp: midten av en flate, en kant (den lyser på begge flatene som deler den) eller et hjørne (på alle tre flatene).
2. Klikk på den. Visningen dreier for å se derfra, og beholder samme midte og zoom.

Det finnes 26 steder å klikke: 6 flater ({{ui:Topp}}, {{ui:Bunn}}, {{ui:Front}}, {{ui:Tilbake}}, {{ui:Venstre}}, {{ui:Høyre}}), 12 kanter og 8 hjørner. Et hjørne gir den klassiske tre-kvartsvisningen; en kant ser ut midt mellom to flater.

Klikk på {{ui:Front}}, {{ui:Topp}} eller {{ui:Høyre}} gir de samme visningene som {{ui:Visninger}} i verktøylinjen, uten zoom til tilpass.

## Bane rundt ved å dra kuben

Dra kuben for å dreie visningen, det samme som å bane rundt i selve visningen. Et drag blir aldri tatt som et klikk, så du kan ta tak i kuben hvor som helst.

## Kompassringen

Ringen under kuben har N, Ø, S og V.

- **Dra ringen** for å dreie modellen om den vertikale aksen, som om den sto på en dreieskive. Ringen følger pekeren.
- **Klikk på en bokstav** for å se fra den siden, og beholde hvor bratt du ser ned. I en visning rett ovenfra går bokstaven du klikker på, til bunnen av skjermen.

## Rettvendte visninger: piler

Når du ser rett mot en flate, vises små piler rundt kuben:

- De fire **trekantene** bringer flaten på den siden fram til fronten: trekanten over kuben viser flaten som var øverst, og så videre.
- De to **buede pilene** øverst til høyre dreier bildet en kvart omdreining med eller mot klokken, uten å endre hvilken flate du ser på. Bruk dem til å dreie en plan slik at en lang vegg går på tvers av skjermen.

## Hjem

Hus-knappen øverst til venstre på kuben går tilbake til tre-kvartsvisningen og tilpasser delen. {{key:Home}} gjør det samme mens kuben har tastaturfokus.

## Med tastaturet

{{key:Tab}} til kuben, deretter:

| Tast | Gjør |
|---|---|
| {{key:left}} / {{key:right}} | velger en side, kant eller hjørne rundt kuben, i åttendedels trinn (skjermlesere sier hva som er valgt) |
| {{key:up}} / {{key:down}} | velger en høyere eller lavere en, opp til {{ui:Topp}} eller ned til {{ui:Bunn}} |
| {{key:Enter}} eller {{key:Space}} | ser fra den valgte |
| {{key:Shift+left}} / {{key:Shift+right}} | dreier visningen en kvart omdreining om den vertikale aksen |
| {{key:Home}} | startvisningen |
| {{key:Esc}} | forlater kuben |

Tastetrykk på kuben blir værende der: de starter ikke verktøy i PartCraft.

## Aksesymbol eller ingenting i stedet

Åpne {{ui:Innstillinger}} ({{key:Mod+,}}), fanen {{ui:PartCraft}}, og sett **Hjørneindikator** til {{ui:ViewCube}} (standard), {{ui:Akseikon}} (et lite X-, Y-, Z-merke nederst til venstre: X rød, Y grønn, Z blå) eller {{ui:Ingen}}. Denne nettleseren husker valget. Se [Innstillinger for PartCraft](topic:settings#corner-indicator).

:::note
Kuben viser delen slik PartCraft bygger den: Y opp, så kubens {{ui:Topp}} er topplanet. Kompassbokstavene er bare til å dreie med; en del har ingen nord.
:::
