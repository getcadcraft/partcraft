---
title: Avrund, fas og gjør hult med Avrunding, Fasing og Skall
summary: Velg kanter og legg til avrundinger med konstant eller variabel radius og fasinger med lik avstand, to avstander eller avstand og vinkel. Gjør en del hul med Skall ved å velge flatene som skal åpnes, endre hvilke kanter eller flater en funksjon bruker, og fiks de vanlige feilene.
keywords: avrunding, avrund, blanding, fasing, fas, skall, gjør hult, veggtykkelse, kanter, flater, velg kanter, shift-klikk, åpen flate, eksakt kjerne, nettkjerne, ikke bygget
from: e41c1c12
---

:::note
**I denne versjonen** bygger PartCraft avrundinger og fasinger med nettkjernen, og bare på **rette kanter mellom to plane flater**: kanter på boks og de rette kantene på ekstruderinger og utklipp, ytre eller indre hjørner (et indre hjørne får materiale lagt til). Runde kanter, som hullkanter, og en radius som endrer seg langs kanten, er ikke bygget ennå. Der to avrundede kanter møtes i et hjørne, avfases avrundingene (de møtes i en skarp kant), ikke jevnes ut. **Skall** virker også, bygget av nettkjernen: den åpner bare plane flater, skall med ulik veggtykkelse er ikke bygget ennå, og den er treg på deler med mange runde flater. Se [Hva som ikke er bygget ennå](topic:not-built-yet).
:::

{{ui:Avrunding}} runder kanter, {{ui:Fasing}} skråkanter dem og {{ui:Skall}} gjør delen hul. Alle tre virker på volumlegemets kanter og flater og bygges av nettkjernen. Avrundingene er fasettert som alle runde flater (**Kurver** angir hvor fint); de runde flatene er sylindre du kan velge og måle (se [Nettkjernen](topic:solid-kernels)).

## Avrund eller fas kanter

### Velg kantene først

1. Klikk på en kant på delen. Hele kanten markeres, og høyre panel sier **Kant**: typen (Rett, Sirkel eller bue, Kurve), lengde og flatene den ligger mellom.
2. For å legge til flere kanter, {{key:Shift}}+klikk på dem. Hver markeres; {{key:Shift}}+klikk på en markert kant for å fjerne den. Panelets overskrift teller dem («4 kanter»), og statuslinjen forteller at 4 kanter er valgt, og at Avrunding eller Fasing runder dem, at Shift+klikk velger flere, og at Esc fjerner valget.
3. Velg {{ui:Avrunding}} eller {{ui:Fasing}} i verktøylinjen, eller de samme knappene i høyre panel.

Funksjonen legges til med alle de valgte kantene: en 2 mm avrunding, eller en 1 mm fasing. Statuslinjen sier for eksempel at Fillet1 er lagt til med 4 kanter, og at størrelsen endres til høyre, og at Velg kanter endrer hvilke kanter det gjelder.

### Eller legg til funksjonen først

1. Med ingenting valgt, velg {{ui:Avrunding}} eller {{ui:Fasing}}.
2. PartCraft går inn i valgmodus: høyre panels overskrift sier «Fillet1: velger», delen vises slik den var før avrundingen (panelet sier det), og verktøylinjen viser {{ui:Ferdig}}.
3. Klikk på hver kant for å legge den til; klikk den igjen for å fjerne den. Statuslinjen teller dem.
4. Velg {{ui:Ferdig}} (eller {{ui:Ferdig med å velge}} i panelet), eller trykk {{key:Esc}} eller {{key:Enter}}.

### Innstillinger

| Innstilling | Avrunding | Fasing |
|---|---|---|
| Størrelse | **Radius (mm)**, standard 2 | **Avstand (mm)** tilbake fra kanten på begge flater, standard 1 |
| **Kanter** | Hvor mange | Hvor mange |

Listen under navngir hver kant med de to flatene den forbinder, for eksempel «Kant 1: Extrude1-sluttflate × Extrude1-side». **Fjern** fjerner en. {{ui:Velg kanter}} går tilbake til valg. Dobbeltklikk på funksjonen i historikken gjør det samme.

Kanter huskes av de to flatene de forbinder, så de blir på riktig kant når du endrer et mål tidligere i historikken.

### Variable avrundinger og fasingtyper

- **Variabel radius** (avrunding): ikke bygget ennå i denne versjonen. Får du beskjed om at en avrunding der radiusen endrer seg langs kanten ikke er bygget ennå, fordi den trenger en eksakt kjerne, og at den må gis én radius. Med en eksakt kjerne: kryss av og sett **Sluttradius (mm)**. Radiusen endrer seg lineært fra **Radius** i den ene enden av hver kant til **Sluttradius** i den andre; **Bytt endene** snur den.
- **Type** (fasing): **Lik avstand**, **To avstander** (en **Andre avstand** på den andre flaten) eller **Avstand og vinkel** (avstanden på én flate, skråkanten i **Vinkel (°)** til den flaten). **Bytt sider** setter den første avstanden på den andre flaten.

## Gjør en del hul med Skall

1. Klikk på den plane flaten som skal stå åpen, for eksempel toppen av en boks. Eller {{key:Shift}}+klikk flere flater.
2. Velg {{ui:Skall}} i verktøylinjen, eller {{ui:Skall, åpner denne flaten}} i flatens panel.

Delen blir en 2 mm vegg med de valgte flatene åpne. Innstillinger:

| Innstilling | Hva den gjør | Standard |
|---|---|---|
| **Vegg (mm)** | Veggtykkelsen | 2 |
| **Vegger vokser utover (flatene forblir inni)** | Krysset av: veggene legges til utenfor, så innsiden beholder delens størrelse | Av: veggene går innover, og utsiden beholder størrelsen |
| **Åpne flater** | Hvor mange flater som fjernes | |

Innover er veggene nøyaktig veggtykkelsen: ytre hjørner forblir skarpe, indre hjørner blir avrundet (radius = veggen), og et hull gjennom delen får et rør med vegg rundt seg. Utover legges veggene til utenfor den opprinnelige overflaten, som blir hulrommet, og de ytre kantene blir avrundet. De indre flatene navngis etter flatene de forskyves fra, slik at de kan velges.

Bare plane flater kan åpnes. Velger du en buet flate, får du beskjed om at skall i denne versjonen bare åpner plane flater, fordi nettkjernen bygger den. Et skall er tregt på deler med mange runde flater (flere sekunder per tusen trekanter): bruk en grovere innstilling for **Kurver** mens designet utvikles.

{{ui:Velg flater}} endrer hvilke flater som er åpne, på samme måte som å velge kanter. Listen navngir hver, for eksempel «Flate 1: Extrude1-sluttflate». Et skall uten åpne flater er ikke tillatt: velg flatene som skal fjernes (åpnes), og skall deretter.

## Rekkefølgen betyr noe

Funksjoner bygges fra topp til bunn. En avrunding før et skall skalles sammen med delen, så innsiden får også avrundede hjørner. En avrunding etter et skall runder bare kantene som velges. Flytt funksjoner med {{ui:Flytt opp}} og {{ui:Flytt ned}} (se [Endre en del via historikken](topic:edit-history)).

Mønstre og speil kan ikke kopiere en avrunding, fasing eller et skall: Fillet1 endrer legemets kanter eller vegger og kan ikke kopieres. Kopier funksjonene som lager volumlegemer (ekstruderinger, rotasjoner, hull, importer). Mønstre hullene eller utklippene først, og avrund deretter alle kopienes kanter i én avrunding.

## Når det feiler

| Melding | Hva å gjøre |
|---|---|
| En avrunding på 5 mm passer ikke her: den er for stor for en flate ved siden av en av kantene, eller kantene møtes i et hjørne kjernen ikke kan jevne ut. | Bruk en mindre radius, eller avrund færre kanter om gangen (flere avrundingsfunksjoner, den minste sist) |
| En kant den runder er borte: kanten mellom Extrude1 og Cut2. | En tidligere endring fjernet den kanten. Velg {{ui:Velg kanter}}, fjern den røde kanten og velg den nye |
| Skallet kunne ikke lages med denne tykkelsen. | Veggen er tykkere enn en smal del av modellen, eller enn radiusen til en avrunding. Gjør veggen tynnere, eller avrundingene større enn veggen |
| Flaten har ikke et navn historikken kan følge; velg en annen. | Velg en flate laget av en funksjon (de fleste flatene er det) |
| Avrunding: i denne versjonen bare rette kanter mellom to plane flater (nettkjernen bygger dem). Avrund eller fas buede kanter i skissen. (Også for Fasing.) | En valgt kant er rund, for eksempel en hullkant, eller ligger på en buet flate. Fjern den med {{ui:Velg kanter}}, og avrund eller fas det hjørnet i skissen i stedet |
| En avrunding der radiusen endrer seg langs kanten er ikke bygget ennå. Gi den én radius. | Fjern haken for **Variabel radius** |
| Avrunding av nettkjernen: der avrundede kanter møtes, avfases de, ikke jevnes ut. (⚠ i historikken) | En advarsel, ikke en feil: delen er bygget. Valgte kanter møtes i et hjørne, og avrundingene møtes der i en skarp kant. Avrund færre kanter, eller godta kanten |
| Skall: i denne versjonen åpnes bare plane flater (nettkjernen bygger den). | En åpen flate er buet. Velg {{ui:Velg flater}} og fjern den; åpne bare plane flater |

## Begrensninger

I denne versjonen virker avrundinger og fasinger bare på rette kanter mellom to plane flater, med én radius, og avrundinger som møtes i et hjørne avfases. Skall åpner bare plane flater. Med en eksakt kjerne endrer en variabel avrunding seg lineært langs hver kant (én lov per funksjon; ingen radius satt i punkter langs den). Flateavrundinger, helrunde avrundinger og skall med ulik veggtykkelse er ikke bygget ennå.
