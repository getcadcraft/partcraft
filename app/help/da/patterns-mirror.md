---
title: Mønstre og spejlinger
summary: Gentag features i en række med Lineær, drej dem om en akse med Cirkulær, og kopiér features eller hele legemet over et plan med Spejl.
keywords: mønster, lineært mønster, cirkulært mønster, polar array, array, spejl, symmetrisk, kopiér features, boltecirkel, frø, spejl legeme
from: 702e9edb
---

Mønstre og spejlinger kopierer features, du allerede har bygget. Kopierne er en del af historikken: ændrer du originalen, følger kopierne med.

Det, der kopieres, er det feature gør: et boss-mønster tilføjer materiale, et skær- eller hulmønster fjerner det. Mønstre kan mønstres og spejles igen. Et importeret STEP-legeme kan også kopieres; afrundinger, affasninger og skaller kan ikke.

## Lineært mønster

1. Vælg den feature, der skal kopieres, i historikken (fx et Hul eller et Skær). Uden valg bruges det sidste massive feature.
2. Vælg {{ui:Lineær}}. Tre kopier vises med 20 mm mellemrum langs X.
3. Sæt i højre panel:

| Indstilling | Hvad den gør | Standard |
|---|---|---|
| **Features der skal kopieres** | Sæt flueben ved hver feature, der skal kopieres. Kun features over mønstret vises | Den valgte feature |
| **Retning** | X-akse, Y-akse, Z-akse, en linje eller midterlinje fra en tidligere skitse, drejningens akse eller en valgt kant | X-akse |
| **Afstand (mm)** | Afstand mellem naboer | 20 |
| **Antal** | Samlet antal, **inklusive originalen** (1 til 1000) | 3 |
| **Vend retning** | Kopierne går den anden vej | Fra |

### Brug en kant som retning

1. Klik på en lige kant af emnet i visningen. Højre panel siger **Kant** og viser dens længde.
2. Vælg {{ui:Lineær}}: mønstret løber langs den kant.

Eller vælg mønstret, vælg en kant, og vælg »Valgt kant (brug den, der er valgt nu)« under **Retning**. En valgt kant er fast i rummet: den følger ikke senere ændringer. En skitselinje følger sin skitse.

## Cirkulært mønster

1. Vælg den feature, der skal kopieres (fx ét hul tæt på kanten af en skive).
2. Vælg {{ui:Cirkulær}}. Seks kopier vises jævnt fordelt hele vejen rundt.
3. Sæt:

| Indstilling | Hvad den gør | Standard |
|---|---|---|
| **Features der skal kopieres** | Som ved Lineær | Den valgte feature |
| **Akse** | X-, Y- eller Z-akse, en skitselinje, drejningens akse eller en valgt kant | Drejningens sidste akse, hvis der er en, ellers Y-aksen |
| **Vinkel (°)** | 360 fordeler kopierne jævnt hele vejen rundt. Mindre spreder dem over den vinkel, med første og sidste i enderne | 360 |
| **Antal** | Samlet antal, inklusive originalen | 6 |
| **Vend retning** | Drejer den anden vej | Fra |

Verdensakserne går gennem origo. For en skive, der ikke er centreret i origo, brug en skitses midterlinje eller en drejnings akse.

### Eksempel: de otte boltehuller i en flange

1. Drej flangen om Y-aksen (se [Drej en drejet del](topic:revolve)).
2. Skitsér på flangens flade overside, sæt ét punkt på boltecirklen, og lav et hul.
3. Med hullet valgt, vælg {{ui:Cirkulær}}. Aksen er allerede »Akse for Revolve1«.
4. Sæt **Antal** til `8`.

## Spejl

1. Vælg den feature, der skal spejles, i historikken, eller vælg intet for at spejle **hele legemet, som det er bygget indtil nu**.
2. Vælg {{ui:Spejl}}. Det spejler over **Højre plan**.

For i stedet at spejle hele legemet over en flade af emnet: klik først på den flade, og vælg derefter {{ui:Spejl}}. (Klik på en flade fjerner valget i historikken, så der altid spejles hele legemet.)

Indstillinger i højre panel:

- **Spejl**: sæt flueben ved **Hele legemet (som bygget indtil nu)**, eller fjern det og sæt flueben ved de features, der skal kopieres.
- **Spejlplan**: Forplan, Overplan, Højre plan, fladen den bruger nu (»En flade af Extrude1« eller »Et fast plan«), eller »Fladen valgt nu«. For at spejle valgte features over en flade: vælg Spejl i historikken, klik på fladen i visningen, og vælg »Fladen valgt nu«.

Spejling af hele legemet over en flade fordobler emnet, fx et halvt beslag til et helt.

## Meddelelser

- »Byg en feature, der skal kopieres, først.« eller »Byg et massivt legeme først.« Der er endnu intet massivt at kopiere.
- »Vælg de features, der skal kopieres.« Alle felterne **Features der skal kopieres** er tomme.
- »Extrude2 har intet legeme at kopiere.« Det feature fejlede eller er undertrykt.
- »Fillet1 ændrer legemets kanter eller vægge; det kan ikke kopieres. Kopiér de features, der laver massive legemer (ekstruderinger, drejninger, huller, importer).« Afrundinger, affasninger og skaller kan ikke mønstres eller spejles; lav mønstret først, og lav derefter afrundingen.
- »Der er endnu intet legeme at spejle.«

:::note
Mønsterkopier kan ikke springes over enkeltvis, og et mønster kan ikke følge en skitsekurve. Skitsemønstre og skitsespejlinger er heller ikke bygget endnu: tegn gentaget skitsegeometri i hånden eller med **Tilføj efter koordinater**.
:::
