---
title: Tilføj skitsegeometri ved at skrive koordinater
summary: Brug Tilføj efter koordinater i skitsepanelet til at placere linjer, centerlinjer, rektangler, cirkler og punkter på præcise positioner, kun med tastaturet.
keywords: koordinater, indtastet input, tastaturindtastning, numerisk indtastning, præcis position, x y, absolutte koordinater, tilgængelighed, ingen mus
from: 5e6c1656
---

Når du kender tallene, er det hurtigere at skrive dem end at klikke og angive mål. **Tilføj efter koordinater** findes i højre panel, når en skitse er åben. Du kan også bygge en skitse helt uden markør.

Koordinater angives i millimeter, i skitsens egne akser: x mod højre og y opad, når du ser på skitsen, med (0, 0) i origo (den røde cirkel med et kryds).

## Tilføj en form

1. Åbn en skitse (se [Tegn din første skitse](topic:sketch-basics)).
2. I højre panel skal du rulle hen til **Tilføj efter koordinater**.
3. Vælg formen under **Tilføj**: Linje, Centerlinje, Rektangel, Cirkel eller Punkt.
4. Udfyld felterne:

| Form | Felter |
|---|---|
| Linje | **Fra x, y** og **Til x, y** |
| Centerlinje | **Fra x, y** og **Til x, y** |
| Rektangel | **Hjørne x, y** og **Modsatte hjørne x, y** |
| Cirkel | **Centrum x, y** og **Radius** |
| Punkt | **Ved x, y** |

5. Vælg {{ui:Tilføj}}, eller tryk {{key:Enter}} i et vilkårligt felt.

Formen vises, og statuslinjen siger fx "Rektangel tilføjet." Felterne tømmes, klar til den næste. Hver tilføjelse er ét trin i fortryd.

Skriv et par som to tal adskilt af et komma eller et mellemrum: `0, 0`, `25 -10` eller `12.5,40`. Negative tal og decimaltal er i orden. En radius skal være større end nul. Hvis noget ikke kan læses som et tal, siger statuslinjen: 'Skriv koordinater som "x, y" og en radius over nul.'

## Eksempel: konturen af en plade med spor, indtastet

1. Åbn en skitse på **Front-plan**.
2. **Tilføj**: Rektangel. **Hjørne x, y**: `-50, -30`. **Modsatte hjørne x, y**: `50, 30`. {{key:Enter}}.
3. **Tilføj**: Cirkel. **Centrum x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Centrum x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Vælg {{ui:Afslut skitse}}, og vælg derefter {{ui:Ekstruder}}: en 100 × 60 plade med to 10 mm huller.

## Indtastet geometri placeres, men er ikke fastlåst

Indtastede koordinater placerer geometrien det rigtige sted, men de er **ikke relationer**. Formerne forbliver blå (underdefineret) og kan flytte sig, hvis du trækker i dem eller ændrer et andet mål:

- et indtastet rektangel får sine egne hjørne-, vandrette og lodrette relationer, ligesom et tegnet et, men intet fastlåser det til origo;
- en indtastet linje har ingen vandret eller lodret relation, også selv om du har skrevet en vandret linje;
- en indtastet cirkels centrum er frit.

For at gøre skitsen fuldt defineret kan du bagefter tilføje mål og relationer (se [Definér en skitse fuldt](topic:relations-dimensions)). Vælg fx et rektangels hjørne og origo, og vælg {{ui:• Sammenfaldende}}, eller angiv mål til cirklernes centrum fra origo.

:::note
Uden markør kan du nå så langt: flyt til en planrække i historikken med {{key:Tab}} og piletasterne, tryk {{key:Enter}} for at vælge den, tryk {{key:S}} for at lave en skitse, tilføj former her, og nå frem til **Rediger** ved siden af hvert mål og {{ui:Afslut skitse}} med {{key:Tab}}. At vælge geometri, og dermed tilføje relationer eller nye mål, kræver stadig et klik eller et tryk i denne version.
:::

## Begrænsninger

- Buer kan endnu ikke indtastes. Tegn dem med buevværktøjet, eller indtast en cirkel og brug relationer.
- Der findes ikke relative koordinater (fra det sidste punkt) eller polære koordinater (længde og vinkel) i dette felt.
- Indtastet geometri hægter sig ikke på eksisterende punkter. Skriv de samme koordinater som et eksisterende punkt, og tilføj derefter en {{ui:• Sammenfaldende}}-relation mellem dem, hvis de skal forblive forbundne.
