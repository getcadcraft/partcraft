---
title: Referanseplan, akser og punkter
summary: Lag plan forskjøvet fra en flate, i en vinkel, gjennom tre punkter, midt mellom, tangent til en sylinder, vinkelrett på en kant eller gjennom en kant og et punkt. Lag akser og punkter i kantmidter, kryssinger og planhjørner. Skisser på dem og bruk dem som rotasjonsakser, mønsterretninger og speilplan.
keywords: datum, mellom objekter, midtpunkt, skjæringspunkt, plan gjennom kant og punkt, referanseplan, arbeidsplan, konstruksjonsplan, datumplan, forskjøvet plan, plan i vinkel, midtplan, tangentplan, referanseakse, konstruksjonsakse, datumakse, referansepunkt, arbeidspunkt, skisse på plan
from: e7eb6fc1
---

Referansegeometri er stillaset du bygger funksjoner på: et **plan** å skissere på der ingen flate finnes, en **akse** å rotere eller mønstre rundt, og et **punkt** å stoppe en ekstrudering ved. Den har ikke noe materiale i seg selv. Planene vises i visningen som lyse firkanter, aksene som stiplede linjer og punktene som små kryss. Alle tre er med i historikken og følger det de er laget av når du endrer en størrelse lenger opp.

De ligger i {{ui:Mer}}-menyen i Funksjoner-gruppen: {{ui:Plan}}, {{ui:Akse}}, {{ui:Punkt}}.

## Lag et plan

1. Klikk en flat flate, eller et grunnplan i historikken, for å starte fra den (valgfritt).
2. Velg {{ui:Mer}}, deretter {{ui:Plan}}. Det starter som et forskjøvet plan 20 % av delens størrelse unna det du valgte (eller fra toppplanet).
3. I høyre panel velger du **Type** og referansene:

| Type | Referanser | Tall |
|---|---|---|
| Forskjøvet fra et plan eller en flate | **Fra plan** | **Avstand (mm)**, negativ for den andre siden |
| I en vinkel, gjennom en kant eller akse | **Fra plan**, **Roter om** (en verdensakse, en akse-funksjon eller en valgt rett kant) | **Vinkel (°)** |
| Gjennom tre punkter | **Punkt 1**, **Punkt 2**, **Punkt 3** | — |
| Midtplan mellom to | **Første plan**, **Andre plan** (parallelle: midtveis; møtende: planet som halverer vinkelen) | — |
| Tangent til en sylinder | **Sylinder** (en sylindrisk flate), **Nær punkt** (hvilken side) | — |
| Vinkelrett på en kant, i et punkt | **Kant**, **I punkt** (planet går gjennom kantens punkt nærmest den, og gjennom punktet også) | — |
| Gjennom en kant og et punkt | **Rett kant** (eller en akse), **Gjennom punkt** | — |
| Vinkelrett på en kant i midten | **Kant** (midtveis langs den, vinkelrett der), eller uten kant **Punkt 1** og **Punkt 2** (planet midtveis mellom dem) | — |

Hver referanse har en **Velg**-knapp: velg den, og klikk deretter i visningen. Et planfelt tar et grunnplan, et referanseplan eller en flat flate. Et punktfelt tar enden av en kant (klikk nær den enden), en punktfunksjon eller et sted på en flate. Et kantfelt tar en kant. {{key:Esc}} avbryter et valg. **Snu normalen** snur planet, altså hvilken vei en skisse på det vender.

I denne versjonen svarer et felt som trenger en kant eller en sylinderflate (Tangent til en sylinder, og kantfeltene) «ikke bygget ennå». Bruk punkter eller en akse i stedet.

## Skisser på et plan

Velg planet (i historikken eller ved å klikke firkanten i visningen) og velg {{ui:Skisse}}, eller **Skisser på det** i panelet. Skissen følger planet: endrer du planets avstand, flytter også skissen og alle funksjoner på den seg.

## Akser og punkter

- {{ui:Akse}}: gjennom to punkter, aksen til en sylinder eller kjegle, der to plan møtes, langs en rett kant (eller aksen til en sirkulær kant), eller vinkelrett på en flate gjennom et punkt.
- {{ui:Punkt}}: i koordinater, i et hjørnepunkt eller skissepunkt, eller i midten av en sirkulær kant, pluss punktene «mellom objekter»:

| Punkttype | Referanser |
|---|---|
| Midtpunkt på en kant (eller mellom to punkter) | **Kant** (midtveis langs lengden, også for buer og kurver), eller uten kant **Punkt 1** og **Punkt 2** |
| Der en kant eller akse møter en flate eller et plan | **Kant** (rett eller buet) eller en akse, og **Møter plan** (et plan eller en flat flate) eller **Eller en flate** (en flat flate eller en sylinder). En sirkel krysser et plan to ganger, og en linje går gjennom en sylinder to ganger. **Den andre krysningen** tar den andre |
| Der tre plan møtes | **Første**, **Andre** og **Tredje plan** (plan eller flate flater) |

Hver av dem feiler med en enkel melding når referansene ikke passer: en linje parallell med planet, en linje som bommer på sylinderen, en kant som ikke når planet, tre plan som ikke møtes i ett punkt, eller et punkt på linjen den skulle fiksere et plan med.

Bruk dem i andre funksjoner:

| Hvor | Hvordan |
|---|---|
| Roter rundt akse | **Akse**: velg akse-funksjonen fra listen (den må ligge i skissens plan) |
| Sirkulært mønster | **Akse**: akse-funksjonen |
| Lineært mønster | **Retning**: en akse-funksjon, eller et plan (dets normal) |
| Speil | **Speilplan**: et referanseplan |
| Ekstruder | **Slutt**: Opp til flate eller plan, Opp til hjørnepunkt (en punktfunksjon). Ikke bygget ennå i denne versjonen, siden den trenger en eksakt kjerne |
| Trekkvinkel | **Nøytralt plan** |

## Når en referanse er borte

Et plan laget fra en flate som ikke lenger finnes, feiler med en melding som nevner den, for eksempel «Flaten den ligger på er borte fra Extrude1.» Det flyttes aldri til en annen flate. Skissene og funksjonene på det merkes «ikke bygget ennå» til du velger en ny referanse. Resten av delen står som den var.

:::note
I denne versjonen bygges alle deler med nettkjernen. Den lager plan, akser og punkter fra grunnplan, flate flater laget av en ekstrudering eller roter-rundt-akse, skissepunkter, koordinater og andre referansefunksjoner. Alt som trenger en kant, endepunktet på en kant eller en buet flate, trenger en eksakt kjerne: ikke bygget ennå i denne versjonen («Den bruker en flate eller kant på volumlegemet, som bare en eksakt kjerne kan finne: ikke bygget ennå i denne versjonen.»).
:::
