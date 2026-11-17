---
title: Legg til skissegeometri ved å skrive inn koordinater
summary: Bruk Legg til etter koordinater i skissepanelet for å plassere linjer, midtlinjer, rektangler, sirkler og punkter på nøyaktige posisjoner, kun med tastaturet.
keywords: koordinater, skrevet inndata, tastaturinnskriving, numerisk innskriving, nøyaktig posisjon, x y, absolutte koordinater, tilgjengelighet, ingen mus
from: 5e6c1656
---

Når du kjenner tallene, er det raskere å skrive dem inn enn å klikke og sette mål. **Legg til etter koordinater** står i høyre panel når en skisse er åpen. Du kan også bygge en skisse uten peker i det hele tatt.

Koordinatene er i millimeter, i skissens egne akser: x mot høyre og y opp når du ser på skissen, med (0, 0) i origo (den røde sirkelen med et kryss).

## Legg til en form

1. Åpne en skisse (se [Tegn din første skisse](topic:sketch-basics)).
2. I høyre panel blar du ned til **Legg til etter koordinater**.
3. Velg formen i **Legg til**: Linje, Midtlinje, Rektangel, Sirkel eller Punkt.
4. Fyll inn feltene:

| Form | Felt |
|---|---|
| Linje | **Fra x, y** og **Til x, y** |
| Midtlinje | **Fra x, y** og **Til x, y** |
| Rektangel | **Hjørne x, y** og **Motsatt hjørne x, y** |
| Sirkel | **Sentrum x, y** og **Radius** |
| Punkt | **Ved x, y** |

5. Velg {{ui:Legg til}}, eller trykk {{key:Enter}} i et hvilket som helst felt.

Formen vises, og statuslinjen sier for eksempel «Et rektangel er lagt til.» Feltene tømmes, klare for neste. Hver tilleggelse er ett steg å angre.

Skriv et par som to tall skilt med komma eller mellomrom: `0, 0`, `25 -10` eller `12.5,40`. Negative tall og desimaltall går fint. En radius må være større enn null. Hvis noe ikke kan leses som et tall, viser statuslinjen: «Skriv koordinater som "x, y" og en radius over null.»

## Eksempel: en platekontur, skrevet inn

1. Åpne en skisse på **Front-plan**.
2. **Legg til**: Rektangel. **Hjørne x, y**: `-50, -30`. **Motsatt hjørne x, y**: `50, 30`. {{key:Enter}}.
3. **Legg til**: Sirkel. **Sentrum x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Sentrum x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Velg {{ui:Avslutt skisse}}, deretter {{ui:Ekstruder}}: en plate på 100 × 60 med to hull på 10 mm.

## Skrevet geometri plasseres, men låses ikke

Koordinatene plasserer geometrien riktig, men de er **ikke relasjoner**. Formene forblir blå (underdefinert) og kan flytte seg hvis du drar dem eller endrer et annet mål:

- en skrevet rektangel får egne hjørne-, horisontal- og vertikalrelasjoner, som en tegnet, men ingenting knytter den til origo;
- en skrevet linje har ingen horisontal eller vertikal relasjon, selv om du skrev inn en horisontal linje;
- en skrevet sirkels sentrum er fritt.

For å gjøre skissen fullt definert, legg til mål og relasjoner etterpå (se [Fullt definer en skisse](topic:relations-dimensions)). For eksempel: velg et rektanghjørne og origo, og velg {{ui:• Sammenfallende}}, eller sett mål fra origo til sirkelsentrene.

:::note
Uten peker kan du komme så langt: flytt til en planrad i historikken med {{key:Tab}} og piltastene, trykk {{key:Enter}} for å velge den, trykk {{key:S}} for å skisse, legg til former her, og nå **Rediger** ved siden av hvert mål og {{ui:Avslutt skisse}} med {{key:Tab}}. I denne versjonen krever det fortsatt et klikk eller et trykk å velge geometri, og dermed å legge til relasjoner eller nye mål.
:::

## Begrensninger

- Buer kan ikke skrives inn ennå. Tegn dem med Bue-verktøyet, eller skriv inn en sirkel og bruk relasjoner.
- Det finnes ingen relative koordinater (fra siste punkt) eller polarkoordinater (lengde og vinkel) i denne boksen.
- Skrevet geometri fester seg ikke til eksisterende punkter. Skriv inn de samme koordinatene som et eksisterende punkt, og legg deretter til en {{ui:• Sammenfallende}}-relasjon mellom dem hvis de må forbli sammenkoblet.
