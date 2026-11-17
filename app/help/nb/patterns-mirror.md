---
title: Mønster- og speilfunksjoner
summary: Gjenta funksjoner på rad med Lineært, rundt en akse med Sirkulært, og kopier funksjoner eller hele legemet over et plan med Speil.
keywords: mønster, lineært mønster, sirkulært mønster, polar matrise, matrise, speil, symmetrisk, kopier funksjoner, hullsirkel, frø, speil legeme
from: 702e9edb
---

Mønstre og speil kopierer funksjoner du allerede har bygget. Kopiene er en del av historikken: endrer du originalen, følger kopiene etter.

Det som kopieres er det funksjonen gjør: et tappmønster legger til materiale, et mønster av kutt eller hull fjerner det. Mønstre kan mønstres og speiles igjen. Et importert STEP-volumlegeme kan også kopieres; avrundinger, fasinger og skall kan ikke.

## Lineært mønster

1. Velg funksjonen som skal kopieres i historikken (for eksempel et Hull eller et Kutt). Uten noe valgt brukes den siste volumfunksjonen.
2. Velg {{ui:Lineært}}. Tre kopier vises med 20 mm avstand langs X.
3. I høyre panel angi:

| Innstilling | Hva den gjør | Standard |
|---|---|---|
| **Funksjoner å kopiere** | Kryss av for hver funksjon som skal kopieres. Bare funksjoner over mønsteret vises | Den valgte funksjonen |
| **Retning** | X-akse, Y-akse, Z-akse, en linje eller midtlinje fra en tidligere skisse, aksen til en rotasjon, eller en valgt kant | X-akse |
| **Avstand (mm)** | Avstand mellom naboer | 20 |
| **Antall** | Totalt antall, **inkludert originalen** (1 til 1000) | 3 |
| **Snu retning** | Kopiene går den andre veien | Av |

### Bruk en kant som retning

1. Klikk på en rett kant på emnet i visningen. Høyre panel sier **Kant** og viser lengden.
2. Velg {{ui:Lineært}}: mønsteret går langs den kanten.

Eller velg mønsteret, velg en kant, og velg «Valgt kant (bruk den som nettopp er valgt)» under **Retning**. En valgt kant er låst i rommet: den følger ikke senere endringer. En skisselinje følger sin skisse.

## Sirkulært mønster

1. Velg funksjonen som skal kopieres (for eksempel ett hull nær kanten på en skive).
2. Velg {{ui:Sirkulært}}. Seks kopier vises jevnt fordelt hele veien rundt.
3. Angi:

| Innstilling | Hva den gjør | Standard |
|---|---|---|
| **Funksjoner å kopiere** | Som for Lineært | Den valgte funksjonen |
| **Akse** | X-, Y- eller Z-akse, en skisselinje, aksen til en rotasjon, eller en valgt kant | Aksen til den siste rotasjonen hvis det finnes en, ellers Y-aksen |
| **Vinkel (°)** | 360 fordeler kopiene jevnt rundt. Mindre sprer dem over den vinkelen, første og siste ved endene | 360 |
| **Antall** | Totalt antall, inkludert originalen | 6 |
| **Snu retning** | Går den andre veien | Av |

Verdensaksene (VKS) går gjennom origo. For en skive som ikke er sentrert på origo, bruk en midtlinje i skissen eller aksen til en rotasjon.

### Eksempel: de åtte boltehullene i en flens

1. Roter flensen (se [Roter et dreid emne](topic:revolve)) rundt Y-aksen.
2. Skisser på flensens flate toppflate, sett ett punkt på boltesirkelen, og lag et Hull.
3. Med Hull valgt, velg {{ui:Sirkulært}}. Aksen er allerede «Axis of Revolve1».
4. Sett **Antall** til `8`.

## Speil

1. Velg funksjonen som skal speiles i historikken, eller velg ingenting for å speile **hele legemet slik det er bygget så langt**.
2. Velg {{ui:Speil}}. Det speiles over **Høyreplan**.

For å speile hele legemet over en flate på emnet i stedet, klikk først på den flaten, og velg så {{ui:Speil}}. (Å klikke på en flate tømmer valget i historikken, så dette speiler alltid hele legemet.)

Innstillinger i høyre panel:

- **Speil**: kryss av for **Hele legemet (slik det er bygget så langt)**, eller fjern krysset og kryss av for funksjonene som skal kopieres.
- **Speilplan**: Frontplan, Topplan, Høyreplan, flaten den bruker nå («En flate på Extrude1» eller «Et fast plan»), eller «Flaten som er valgt nå». For å speile valgte funksjoner over en flate: velg Speil i historikken, klikk på flaten i visningen, og velg «Flaten som er valgt nå».

Speiling av hele legemet over en flate dobler emnet, for eksempel blir et halvt vinkelbeslag et helt.

## Meldinger

- «Bygg en funksjon å kopiere først.» eller «Bygg et volumlegeme først.» Det finnes ikke noe volumlegeme å kopiere ennå.
- «Velg funksjonene som skal kopieres.» Alle avkrysningsbokser under **Funksjoner å kopiere** er tømt.
- «Extrude2 har ikke noe volumlegeme å kopiere.» Den funksjonen feilet eller er undertrykt.
- «Fillet1 endrer kanter eller vegger på legemet; den kan ikke kopieres. Kopier funksjonene som lager volumlegemer (ekstruderinger, rotasjoner, hull, importer).» Avrundinger, fasinger og skall kan ikke mønstres eller speiles; lag mønsteret først, og så avrundingen.
- «Det finnes ikke noe legeme å speile ennå.»

:::note
Mønsterkopier kan ikke hoppes over én og én, og et mønster kan ikke følge en skissekurve. Skissemønstre og skissespeil er heller ikke bygget ennå: tegn gjentatt skissegeometri for hånd, eller med **Legg til etter koordinater**.
:::
