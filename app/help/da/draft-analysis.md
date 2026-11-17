---
title: Kontrollér udtræksvinkel til støbning
summary: Farvelæg delen efter dens udtræksvinkel i forhold til trækretningen for en støbeform, og se hvilke flader der slipper, hvilke der har brug for mere udtræk, og hvilke der slipper fra den anden halvdel, med hver enkelt andel af arealet.
keywords: udtræksanalyse, udtræk, konicitet, støbeform, sprøjtestøbning, trykstøbning, trækretning, delelinje, undersnit, slip, kontrollér udtræk
from: 6a106f83
---

Dele, der laves i en støbeform, i et værktøj til trykstøbning eller i en sandstøbning, har brug for **udtræk**: vægge, der er vippet en smule, så delen glider ud. **Udtræksanalyse** farvelægger hver flade efter, hvor meget den hælder væk fra den retning, formen åbnes i (**trækretningen**).

## Tænd for den

1. I Design-arbejdsområdet åbnes {{ui:Views}} og vælges {{ui:Draft analysis}}.
2. Angiv **Trækretning**: den retning, formen åbnes i, langs X, Y eller Z i begge retninger, eller **Vinkelret på en valgt flade**: tryk {{ui:Pick a face}} og klik på en plan flade på delen.
3. Angiv **Mindste udtræk** i grader: den mindste hældning din proces kræver (ofte 1° til 3°).

Delen farvelægges:

| Farve | Betyder |
|---|---|
| Grøn: **Positivt udtræk** | Hældet mod trækretningen med mindst minimum: slipper fra denne halvdel af formen |
| Okker: **Kræver udtræk** | Inden for minimum i begge retninger, fx en lodret væg: tilføj udtræk her |
| Rød: **Negativt udtræk** | Hældet væk fra trækretningen med mindst minimum: slipper fra den anden halvdel, eller er et undersnit, hvis delen skal ud af én halvdel |

Hver klasses andel af delens overfladeareal vises ved siden af den. **Vend trækretningen** ser fra den anden halvdel af formen: grøn og rød bytter plads.

Buede flader vurderes punkt for punkt, så en cylinder, der ligger på tværs af trækretningen, viser et bånd langs siderne, der kræver udtræk.

Farverne følger delen, når du ændrer den. {{key:Esc}} eller {{ui:Close}} slukker analysen; intet gemmes i delen.

:::tip
For at tilføje udtræk bruger du featuren {{ui:Draft}} på de okker flader (se [Sweep, loft og udtræksvinkel](topic:sweep-loft-draft)), og kontrollerer derefter igen.
:::
