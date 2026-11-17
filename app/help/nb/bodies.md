---
title: Kombiner, flytt og skaler legemer; banemønstre
summary: Lag separate legemer, og slå dem sammen, kutt dem eller skjær dem etterpå; flytt, drei, rett inn eller kopier dem; skaler jevnt eller etter X, Y og Z; og kopier funksjoner eller legemer langs en kurve.
keywords: legeme, legemer, flere legemer, nytt legeme, kombiner, boolsk, slå sammen, kutt, skjæring, trekk fra, forening, behold verktøy, flytt legeme, kopier legeme, roter legeme, rett inn, forskyv, skaler, ikke-uniform skalering, strekk, affin, banemønster, mønster langs kurve, matrise langs bane, kurvestyrt mønster
from: 6b1ea820
---

:::note
**Ikke bygget ennå i denne versjonen.** Arbeid med flere legemer krever en eksakt geometrikjerne, som denne versjonen av PartCraft ikke har: den bygger alle deler med nettkjernen. [Hva som ikke er bygget ennå](topic:not-built-yet) forteller hva du skal gjøre i stedet. Resten av siden beskriver hvordan det fungerer med en eksakt kjerne.
:::

En del kan inneholde mer enn ett volumlegeme. Hvert separate volumlegeme er et **legeme**. De fleste funksjoner legger til eller kutter fra alle legemene de berører. Verktøyene på denne siden arbeider med hele legemer du velger. De finnes i menyen {{ui:Mer}} i gruppen Funksjoner: {{ui:Kombiner}}, {{ui:Flytt legeme}}, {{ui:Skaler legeme}} og {{ui:Banemønster}}. Alle krever den eksakte kjernen (OpenCascade).

## Lag et eget legeme

Sett en ekstrudering eller rotasjons **Operasjon** til **Nytt legeme** i høyre panel. Sveip og loft har det også. Det nye volumlegemet forblir separat, også der det overlapper de andre. **Skjæring** beholder bare overlappet mellom den nye formen og det som finnes der fra før.

Legemer får navn etter funksjonen som startet dem: «Ekstruder2». En kopi får navnet etter originalen og funksjonen som kopierte den: «Ekstruder2, kopi 1 av Flytt1». Navnene forblir de samme når du endrer størrelser tidligere i historikken, slik at funksjonene som bruker et legeme fortsetter å finne det. Med to eller flere legemer viser delpanelet (klikk på et tomt område) dem med volumene sine.

## Gi nytt navn til eller skjul et legeme

Klikk på et tomt område i visningen for å se delpanelet. Listen over legemer (vises når delen har to eller flere legemer) har en navneboks og en {{ui:Skjul}}-knapp på hver rad.

- **Gi nytt navn:** skriv et nytt navn i boksen og trykk {{key:Enter}}, eller klikk utenfor. Alle paneler bruker det da: Kombiner, Flytt legeme og mønstrene. Tøm boksen for å gå tilbake til navnet fra funksjonen som laget legemet.
- **Skjul:** klikk {{ui:Skjul}} på raden. Legemet forsvinner fra visningen og klikk går gjennom det, slik at du kan velge flater bak det. {{ui:Vis}} henter det tilbake. {{ui:Vis alle}} henter tilbake alle skjulte legemer.

Skjuling endrer bare visningen. Et skjult legeme bygges fortsatt, telles med i volumet og målingene, og lagres i STL-, 3MF- og STEP-eksporter. Navn og skjulte legemer lagres i delfilen, og hver endring er ett steg å {{ui:Angre}}.

## Kombiner legemer

1. Shift+klikk en flate på **målegemet**, og deretter en flate på hvert **verktøylegeme**.
2. Velg {{ui:Mer}}, og deretter {{ui:Kombiner}}.
3. I høyre panel velger du **Operasjon**:

| Operasjon | Resultat |
|---|---|
| Slå sammen | Målegemet og verktøylegemene blir ett legeme |
| Kutt | Verktøylegemene fjernes fra målegemet |
| Skjæring | Bare det som målegemet og alle verktøylegemene har felles, beholdes |

**Målegeme** er det som beholder navnet sitt. Kryss av eller av i **Verktøylegemer**, eller bruk **Velg i visningen** og klikk på flatene deres. **Behold verktøylegemene** lar verktøylegemene stå på plass også (nyttig for en form og dens kjerne). Hvis et verktøylegeme allerede er brukt opp av en tidligere kombinering, sier panelet fra om det i stedet for å velge et annet legeme.

## Flytt eller kopier et legeme

1. Velg {{ui:Mer}}, og deretter {{ui:Flytt legeme}}. Det nyeste legemet er krysset av. Kryss av de du vil flytte.
2. Velg **Flytt**-typen:

| Flytt | Det du angir |
|---|---|
| Forskyv | **ΔX**, **ΔY**, **ΔZ** i millimeter |
| Punkt til punkt | **Fra** og **Til**: klikk nær enden av en kant, et punkt-element eller et sted på en flate |
| Roter om en akse | **Akse** (X, Y, Z, et akse-element, eller **Velg**: en rett kant, en sirkel eller en sylinder) og **Vinkel (°)** |
| Rett inn en flate mot en flate eller et plan | **Flate som flyttes** (en plan flate på legemet), **Mot** (en plan flate eller et plan) |

Rett inn snur legemet slik at flaten ligger mot den andre flaten, flate mot flate, og skyver det deretter bare langs normalen til den flaten. **Samme retning** snur det den andre veien. **Kopier** beholder originalen og legger den flyttede kopien til som et nytt legeme.

## Skaler et legeme

1. Velg {{ui:Mer}}, og deretter {{ui:Skaler legeme}}, og kryss av legemene.
2. Skriv inn en **Skala**, eller fjern krysset for **Uniform** og skriv inn **Skala X**, **Skala Y** og **Skala Z** (langs verdensaksene).
3. **Om** er punktet som står stille: midten av legemenes boks, eller et punkt du velger.

En jevn skalering er eksakt. En ikke-uniform skalering gjør sirkler til ellipser: en sylinder blir en elliptisk sylinder, som ingen analytisk flate kan holde. Buede flater blir derfor B-spline-flater som holder seg innenfor 0.0000004 mm fra den eksakte formen. Flate flater og rette kanter forblir eksakte. Panelet sier hva som skjedde. Skaleringsfaktorer må være større enn null (bruk {{ui:Speil}} for speiling).

## Kopier langs en bane

1. Velg funksjonen du vil kopiere i historikken, eller la være å velge noe for å kopiere det nyeste legemet.
2. Velg {{ui:Mer}}, og deretter {{ui:Banemønster}}. Den nyeste ubrukte skissen tas som bane.
3. I høyre panel angir du:

| Innstilling | Hva den gjør |
|---|---|
| **Kopier** | Legemer (hver kopi blir et nytt legeme) eller Funksjoner (sammenslått eller kuttet som originalen) |
| **Bane** | Kryss av skisser, eller **Velg modellkanter**. Delene må henge sammen ende mot ende |
| **Antall** | Totalt antall, inkludert originalen |
| **Avstand** | Lik (fordelt til enden av en åpen bane, eller rundt hele en lukket) eller en fast avstand |
| **Retning** | Følg banen (hver kopi dreier med den) eller Fast (kopiene forblir parallelle) |
| **Omvendt retning** | Gå den andre veien langs banen |

Kopiene starter der banen går nærmest originalen, og de plasseres med lengde langs kurven.

Lineære og sirkulære mønstre kan kopiere legemer også: kryss av **Kopier legemer** i panelet deres og velg legemene. Hver kopi blir et nytt legeme.

## Begrensninger

- Legemer krever den eksakte kjernen. Nettkjernen beholder ett volumlegeme og sier fra om det.
- En ikke-uniform skalering gjør buede flater til nære B-spline-tilnærminger (se over), ikke eksakte sylindre eller kjegler. Forskjøvne flater kan ikke skaleres på den måten ennå.
- Å følge banen på en vridd 3D-kurve tar kopien med uten å vri den. På flate baner er svingen eksakt.
- Kombiner virker bare på volumlegemer. Overflatelegemer slås sammen med {{ui:Sy sammen}}.

Se også [Referanseplan, akser og punkter](topic:reference-geometry) for punkter og plan «mellom objekter», og [Mønster- og speilfunksjoner](topic:patterns-mirror).
