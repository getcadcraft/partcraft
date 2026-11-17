---
title: Splines, trim, forskyvning og andre skissverktøy
summary: Tegn splines med tilpasningspunkter og kontrollpunkter, trim og forleng kurver, forskyv en kjede, speil om en midtlinje, legg til mangekanter og spor, mønster skissegeometri og projiser kanter på modellen.
keywords: spline, tilpasningspunkt, kontrollpunkt, b-spline, nurbs, kurve, trim, forleng, forskyv, speil, symmetrisk, mangekant, sekskant, spor, mønster, lineært mønster, sirkulært mønster, projiser, projiser kant, inkluder, konverter elementer
from: 3ecb166a
---

Disse verktøyene virker i en åpen skisse. {{ui:Spline}} og {{ui:Trim}} finnes i verktøylinjen. De andre ligger under {{ui:Mer}} til slutt i skissverktøyene. Hvert verktøy er ett angretrinn, og {{key:Esc}} stopper det. For grunnleggende tegneverktøy se [Tegn den første skissen](topic:sketch-basics).

## Splines

En spline er en glatt kurve. Det finnes to typer.

| Verktøy | Tast | Tegning |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klikk punktene kurven går gjennom. Avslutt med {{key:Enter}}, {{key:Esc}}, høyreklikk eller dobbeltklikk. Klikk første punkt igjen for å lukke splinen |
| {{ui:Kontrollpunktspline}} (under {{ui:Mer}}) | | Klikk kontrollpunktene. Kurven trekkes mot dem, men berører bare første og siste. Den stiplede kontrollmangekanten vises under tegning og etterpå |

- **Punktene er skissepunkter.** Dra dem, eller gi dem betingelser og mål som ethvert annet punkt. Et splines første punkt kan fanges til en linjes endepunkt, og de forbindes med en sammenfallende betingelse.
- **Tangent i en ende.** Velg en linje, bue eller spline som møter den ene enden av en spline, velg så splinen og velg {{ui:T Tangent}}. Splinens enderetning følger da linjen. En tangent bort fra splinens ender avvises: «En tangent til en spline krever at linjen, buen eller splinen møter en av endene.»
- **Ender.** Uten en tangentbetingelse er endene på en tilpasningspunkt-spline naturlige (ingen krumning helt i enden). Kurven er kubisk og går gjennom alle punktene, og avstandene mellom punktene styrer forløpet.
- **Lukkede splines** danner en profil alene. Åpne splines forbinder linjer og buer til en lukket sløyfe, som enhver annen kurve.
- Å slette et punkt inne i en spline fjerner det punktet og beholder splinen, så lenge den har minst to punkter (tre når den er lukket).

Ekstruder og roter bygger splinen med nettkjernen av korte rette biter (ekte kurver krever en eksakt kjerne: ikke bygget ennå i denne versjonen). DXF-eksport skriver en spline som en polylinje som holder seg innenfor 0.01 mm fra kurven, fordi DXF R12 ikke har et spline-objekt.

## Trim og forleng

| Verktøy | Tast | Slik |
|---|---|---|
| {{ui:Trim}} | {{key:T}} | Pek på en kurve: delen som ville bli fjernet, vises rød, opp til nærmeste krysninger. Klikk for å fjerne den. En kurve som ikke krysser noe, fjernes helt |
| {{ui:Forleng}} (under {{ui:Mer}}) | {{key:E}} | Klikk en linje eller bue nær enden for å forlenge den. Den vokser til neste kurve den møter. «Det er ingenting for den enden å nå.» når ingenting står i veien |

Trim og forleng virker på linjer, buer, sirkler og splines (forleng: linjer og buer).

- En trimmet **sirkel** blir en bue. Dens radius- eller diametermål flyttes til buen.
- Å trimme midten av en linje gir to linjer som ligger på samme rette linje. Å trimme midten av en bue gir to buer med samme sentrum og en lik-betingelse.
- En trimmet **spline** blir en kontrollpunktspline som følger den gamle kurven nøyaktig. En tangentbetingelse ved en ende som beholdes, blir stående.
- Det nye endepunktet legges på kurven som klippet den (på linjen, buen eller sirkelen, eller sammenfallende med endepunktet). Splines kan ikke holde et punkt, så en spline som klipper, legger ikke til noen betingelse.

**Betingelser som ikke passer lenger, fjernes**, og statuslinjen sier hvor mange. For eksempel fjernes et lengdemål på en trimmet linje, men horisontale eller parallelle betingelser blir stående.

## Forskyv

1. Velg {{ui:Forskyv}} under {{ui:Mer}} eller trykk {{key:O}}.
2. Klikk en linje, bue, sirkel eller spline. Hele kjeden markeres: alle kurvene som er forbundet ende mot ende, opp til et punkt der tre eller flere møtes. For å forskyve bare en del av en kjede, velg først de kurvene, velg så Forskyv og klikk på en av dem.
3. Flytt pekeren til siden kopien skal gå. En stiplet forhåndsvisning følger. Trykk {{key:B}} for begge sider.
4. Klikk, skriv inn avstanden, og trykk {{key:Enter}}.

Linjer og buer forskyves nøyaktig. Hjørner forlenges eller trimmes til de møtes. Kopien har ett **Forskyv**-mål, og de andre delene følger det: dobbeltklikk målet for å endre hele kopien. En avstand som er for stor for kjeden, avvises, for eksempel «Den avstanden er for stor for denne kjeden: en side ville snudd seg innover.»

En **spline** forskyves med en ny tilpasningspunkt-spline innenfor 0.001 mm fra den sanne forskyvningen. Denne kopien er fast: den følger ikke senere endringer, og har ikke noe forskyvningsmål. En spline i en kjede krever glatte (tangente) skjøter i endene.

## Speil

1. Med Velg, velg det som skal speiles.
2. Velg {{ui:Speil}} under {{ui:Mer}} eller trykk {{key:M}}.
3. Klikk linjen eller midtlinjen å speile om.

Hvert speilet punkt får en **Symmetrisk**-betingelse med originalen, slik at kopien følger når originalen endres. Punkter som ligger på speillinjen deles, og speilede sirkler får en Lik-betingelse. Hvis ingenting var valgt, klikk elementene som skal speiles, trykk {{key:Enter}}, og klikk deretter speillinjen.

## Mangekanter og spor

| Verktøy | Slik |
|---|---|
| {{ui:Mangekant}} | Klikk midtpunktet, deretter et hjørne, og skriv inn antall sider (3 til 64). Sidene er like, og hjørnene ligger på en konstruksjonssirkel. Mål sirkelen for å bestemme størrelsen på mangekanten |
| {{ui:Spor}} | Klikk midtpunktet i den ene enden, deretter midtpunktet i den andre, og klikk så for å sette bredden. To linjer, som tangerer to like halvsirkler |

## Skissemønstre

Velg geometrien først, og velg så:

- {{ui:Lineært mønster}}: klikk et startpunkt, deretter hvor den første kopien skal, og skriv inn antall kopier (inkludert originalen).
- {{ui:Sirkulært mønster}}: klikk sentrum, skriv inn antall kopier, jevnt fordelt over en full omdreining.

Kopiene tar med seg betingelsene mellom den valgte geometrien (et sirkulært mønster utelater horisontale og vertikale). Kopiene er ikke koblet til originalen: endres én, blir de andre som de er.

## Projiser kanter fra delen

1. Velg {{ui:Projiser kant}} under {{ui:Mer}}.
2. Klikk en rett eller sirkulær kant på delen bak skissen.

Kanten kopieres nøyaktig over til skisseplanet og låses (Fiksér-betingelse). Den følger ikke senere endringer i delen. Trykk {{key:Q}} for å gjøre den til konstruksjonsgeometri. En sirkel som står skrått på skisseplanet ville blitt projisert som en ellipse, så den avvises. Det samme gjelder frie kurvekanter og kanter som peker rett ut av skissen. Projisering krever en eksakt kjerne: ikke bygget ennå i denne versjonen.
