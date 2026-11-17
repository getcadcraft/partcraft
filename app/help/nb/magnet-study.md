---
title: Magnetstudie av en skisse
summary: Gjør de lukkede profilene i skissene dine om til en flat magnetisk modell (jern, magneter, spoler), se feltet, og les kraften og dreiemomentet på et legeme.
keywords: magnet, magnetisk, magnetostatisk, felt, fluxtetthet, kraft, dreiemoment, spole, åk, jern, B-H-kurve, permanentmagnet, aktuator, motor, solenoide, maxwell
from: 604efc3b
---

Bruk {{ui:Mer}} i verktøylinjen Funksjoner › {{ui:Magnetstudie av skisser…}} på en del som har skisser. Hver lukket form i skissene du krysser av, er ett område i en flat modell. Studien regner ut det magnetiske feltet B, og kraften og dreiemomentet på et legeme du velger.

## Steg

1. Tegn legemene som lukkede former i skisser: et jernåk, en magnet, en spole. Legemer som berører hverandre deler en kant, så legg dem i ulike skisser. Legemer som står fra hverandre, eller ligger inni hverandre (et vindu i et åk), kan dele én skisse. Hold skissene på samme plan.
2. Åpne studien og kryss av skissene du vil bruke. Hver lukket profil får en nummerert rad. Si hva den er: {{ui:Luft}}, {{ui:Jern}} (en permeabilitet, eller en B–H-kurve skrevet som par av B i tesla og H i A/m), en {{ui:Permanentmagnet}} (Br i tesla, retningen som en vinkel fra skissens x-akse, og dens tilbakegangspermeabilitet) eller en {{ui:Spole}} (den totale strømmen gjennom profilen, vindinger ganger ampere; fortegnet sier hvilken vei den går).
3. Kryss av {{ui:Kraft og dreiemoment på dette legemet}} for legemene du vil ha dem på. Oppgi dybden på delen ut av skissen.
4. Velg nettet og luften rundt modellen, og trykk deretter {{ui:Kjør}}.

## Hva du bør se

- Fluxtettheten |B| over modellen, fra mørkeblått lavt til rødt høyt, med profilene nummerert.
- Det sterkeste feltet og hvor det er, antall trekanter, og for hvert legeme du krysset av: kraften langs x og y og dreiemomentet om midten, for dybden du oppga.
- {{ui:Lagre resultater (CSV)}} skriver tallene.

## Greit å vite

- Det er en flat, stasjonær modell: alt er per meter dybde, uten virvelstrømmer og uten hysterese, og en magnet er en rett tilbakegangslinje (den kan ikke avmagnetiseres).
- Modellen står i en boks med luft, der kanten er en vegg. Sammenlign to størrelser på luftboksen, og de normale og fine nettene: en kraft hentet fra feltet rundt et legeme er bare så god som nettet der.
- Jern med bare en permeabilitet metter seg aldri. Når feltet passerer 2 T, setter studien et ⚠ i Problemer-listen: gi jernet en B–H-kurve. Tallene i en ny rad er eksempler (jern μr 2000, en magnet på 1.2 T), ikke et materiales datablad.
- Et legeme trenger rom rundt seg for å ta kraften: hvis et annet legeme står for nær, sier studien fra om det.
- Et hjelpemiddel for tegning, ikke en konstruksjonsgodkjenning.

## Neste

- [Magnetiske felt i 2D (veiledning)](topic:magnetic-fields-2d)
