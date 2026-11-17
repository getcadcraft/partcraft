---
title: Styr en del med parametere
summary: Gi navn til størrelsene som betyr noe (bredde, tykkelse, boltstørrelse), koble ethvert funksjonstall eller skissemål til dem med =, og endre hele delen fra én tabell.
keywords: parametere, hvor brukt, brukt av, globale variabler, variabler, ligninger, konstruksjonshensikt, styremål, kobling, uttrykk, formel, gi navn til et mål, koblede verdier
from: 58c646ea
---

En parameter er et navngitt tall, for eksempel `width = 120` eller `margin = bolt * 1.5`. Koble et dybde-, hullstørrelse-, mønsterantall- eller skissemål til den, og når du endrer parameteren, endres alle i ett steg. Slik beholder du konstruksjonshensikten i delen i stedet for i hodet ditt.

## Legg til parametere

1. I høyre panel klikker du på fanen {{ui:Parametere}}.
2. Under **Variabler** skriver du et navn i «navn»-boksen, for eksempel `width`.
3. Skriv verdien i neste boks, for eksempel `120`, og trykk {{key:Enter}} (eller klikk {{ui:Legg til}}).

En verdi kan være et tall eller et uttrykk av andre parametere: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolonnen **Verdi** viser hva den regnes ut til. Et navn begynner med en bokstav eller `_` og har bare bokstaver, sifre og `_`; navn på funksjoner og enheter (`sin`, `mm`, `pi`) nektes, og det samme gjelder en løkke som `a = b` med `b = a`.

## Koble et tall til en parameter

1. Klikk på en funksjon i historikken, for eksempel «Extrude1». Innstillingene vises på fanen {{ui:Egenskaper}}.
2. I en tallboks, for eksempel **Dybde (mm)**, skriv `=` og et uttrykk: `=thick` eller `=width / 4`.
3. Trykk {{key:Enter}}.

Boksen viser nå resultatet, og en **ƒ**-knapp vises ved siden av etiketten. Hold musepekeren over den for å se ligningen. Skissemål fungerer på samme måte, både i listen **Skissemål** for en funksjon og i målboksen til en åpen skisse (dobbeltklikk et mål, skriv `=width`, trykk {{key:Enter}}).

Tall du kan koble: ekstruderingsdybde, rotasjonsvinkel, hulldiameter, dybde og undersenkingsstørrelser, mønsterantall, avstand og vinkel, avrundingsradius, fasingsavstand, skalltykkelse, hvert skissemål, og størrelsene til de nyere funksjonene (andre dybde, konisitet, forsenking, avstand til referanseplan, trekkvinkel og andre).

## Endre en parameter

På fanen {{ui:Parametere}} skriver du en ny verdi eller et nytt uttrykk i kolonnen **Uttrykk** og trykker {{key:Enter}}. Alt koblet til den endres, og delen bygges på nytt, som ett steg: {{key:Mod+Z}} angrer det.

For å endre et tall fra den andre enden, se [Ligninger begge veier](topic:equations-two-way).

## Se hvor en parameter brukes

Under hver parameter på fanen {{ui:Parametere}} står en linje som sier hva som bruker den:

- tallene den styrer, for eksempel **Extrude1 depth** eller **Sketch1 D2 (distance)**. Klikk på et for å velge funksjonen og vise egenskapene;
- tallene den styrer **gjennom** andre parametere, for eksempel **Hole1 diameter (through h, d)** når `d = h + 2` og `h = w / 2`;
- **parameterne** hvis uttrykk bruker den, **konfigurasjonene** som setter den, og **skriptene** som leser den (se [Skriv og kjør skript](topic:craftscript)).

«Not used yet.» betyr at ingenting bruker den: du kan slette den uten å spørre. Det står «Ikke brukt ennå.» i programmet.

## Løsne, gi nytt navn, slett

- **Løsne et tall:** klikk på knappen **ƒ**, eller {{ui:Løsne}} i listen **Ligninger**. Det beholder sin nåværende verdi, og ingen parameter endrer den lenger.
- **Gi en parameter nytt navn:** skriv et nytt navn i boksen **Navn**. Hvert uttrykk som bruker den, skrives om.
- **Slett en parameter:** klikk × på raden. Hvis noe bruker den, spør PartCraft om den først skal skrive nåværende verdi inn i disse uttrykkene.
- **Å slette en funksjon** fjerner ligningene for tallene dens; statuslinjen sier hvilke.

:::note
Parametere lagres i `.partcraft.json`-filen (som filversjon 3). En del uten parametere lagres akkurat som før.
:::

## Uttrykk

| Skriv | Betyr |
|---|---|
| `120`, `12.5`, `1e3` | et tall (millimeter, eller grader for en vinkel) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | en lengde i andre enheter, gjort om til millimeter |
| `30deg`, `0.5rad` | en vinkel, gjort om til grader |
| `+ - * / %` og `^` | aritmetikk; `^` er en potens, `-2^2` er −4 |
| `sin cos tan asin acos atan atan2` | trigonometri i grader |
| `sqrt pow exp ln log abs sign` | andre funksjoner |
| `ceil floor int round(x, digits) min max` | avrunding og grenser |
| `if(test, a, b)` med `< <= > >= == !=` | et valg: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Navn skiller mellom store og små bokstaver: `Width` og `width` er to parametere.

Se også [Konfigurasjoner og designtabeller](topic:design-tables) og [Skript og kommandolinjen](topic:scripts-and-cli).
