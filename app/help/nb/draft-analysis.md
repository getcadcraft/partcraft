---
title: Kontroller trekkvinkel for støping og formpressing
summary: Fargelegg delen etter trekkvinkelen mot åpningsretningen til en form, og se hvilke flater som slipper, hvilke som trenger mer trekk og hvilke som slipper fra den andre halvdelen, med hver flates andel av arealet.
keywords: trekkvinkelanalyse, trekkvinkel, konisitet, form, støpeform, trykkstøping, sprøytestøping, trekkretning, skilleflate, undersnitt, slipp, kontroller trekk
from: 6a106f83
---

Deler laget i en form, et stempel eller en sandstøping trenger **trekk**: vegger som er vinklet litt, slik at delen glir ut. **Trekkvinkelanalyse** fargelegger hver flate etter hvor mye den vinkler seg bort fra retningen formen åpnes i (**trekket**).

## Slå den på

1. I Design-arbeidsområdet, åpne {{ui:Visninger}} og velg {{ui:Trekkvinkelanalyse}}.
2. Sett **Trekk**: retningen formen åpnes i, langs X, Y eller Z i begge retninger, eller **Vinkelrett på en valgt flate**: trykk {{ui:Velg en flate}} og klikk på en plan flate på delen.
3. Sett **Minste trekk**, i grader: den minste vinkelen prosessen din trenger (ofte 1° til 3°).

Delen fargelegges slik:

| Farge | Betyr |
|---|---|
| Grønn: **Positivt trekk** | Vinklet mot trekket med minst minimumsverdien: slipper fra denne halvdelen av formen |
| Okker: **Trenger trekk** | Innenfor minimumsverdien i begge retninger, for eksempel en loddrett vegg: legg til trekk her |
| Rød: **Negativt trekk** | Vinklet bort fra trekket med minst minimumsverdien: slipper fra den andre halvdelen, eller er et undersnitt hvis delen skal ut av én halvdel |

Hver klasses andel av delens overflateareal vises ved siden av den. **Reverser trekket** ser fra den andre halvdelen av formen: grønn og rød bytter plass.

Buede flater vurderes punkt for punkt, så en sylinder som ligger tvers over trekket viser et belte som trenger trekk langs sidene.

Fargene følger delen når du endrer den. {{key:Esc}} eller {{ui:Lukk}} slår analysen av; ingenting lagres i delen.

:::tip
For å legge til trekk, bruk funksjonen {{ui:Trekkvinkel}} på de okergule flatene (se [Sveip, loft og trekk](topic:sweep-loft-draft)), og kontroller igjen.
:::
