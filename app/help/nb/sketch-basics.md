---
title: Tegn den første skissen
summary: Åpne en skisse på et plan eller en flat flate, tegn linjer, rektangler, sirkler, buer, punkter og midtlinjer, avrund et hjørne, velg, dra og slett.
keywords: skisse, tegn, linje, rektangel, sirkel, bue, punkt, midtlinje, konstruksjon, avrunding, skisseavrunding, avrunde hjørne, fang, velg, vindu, dra, profil
from: 28be7436
---

Alle volumlegemer starter som en skisse: en flat tegning på et plan. Denne veiledningen dekker tegneverktøyene. Hvordan skissen låses med betingelser og mål er beskrevet i [Fullstendig definering av en skisse](topic:relations-dimensions).

## Start en skisse

Skissering kan gjøres på et grunnplan eller på en hvilken som helst flat flate på delen.

1. Velg hvor skissen skal ligge:
   - et grunnplan: klikk **Forsideplan**, **Toppplan** eller **Høyreplan** i historikken, eller klikk planet i visningen;
   - en flat flate: klikk flaten i visningen. Hele flaten markeres.
2. Velg {{ui:Skisse}} i verktøylinjen eller trykk {{key:S}}. (Med en flate valgt kan {{ui:Skisse på denne flaten}} også velges i høyre panel; med et plan, {{ui:Skisse på det}}.)

Visningen dreies vinkelrett mot planet, skissverktøyene vises i verktøylinjen, og Linje-verktøyet er klart. Hvis {{ui:Skisse}} trykkes uten valg, vises grunnplanene, og statuslinjen sier «Klikk et plan eller en flat flate for å skissere på. Esc stopper.»

:::note
En buet flate kan ikke bære en skisse: «Denne flaten er buet. Velg en flat flate eller et plan å skissere på.»
:::

**En skisse på en flate følger flaten.** Hvis flaten er laget av en skissekant eller av enden på en ekstrudering, flytter den nye skissen seg når funksjonen endres (en dypere utsparing tar skissen på bunnen med seg). Hvis panelet sier at flaten er «Fast der den ble valgt», blir skissen liggende der flaten er nå.

## Tegneverktøyene

Hvert verktøy har en knapp i verktøylinjen og en tast. Velg samme knapp igjen, trykk {{key:S}}, eller trykk {{key:Esc}} for å gå tilbake til Velg.

| Verktøy | Tast | Tegning |
|---|---|---|
| {{ui:Linje}} | {{key:L}} | Klikk startpunktet, og klikk deretter hvert neste punkt. Linjer henger sammen ende mot ende. Avslutt kjeden med {{key:Esc}}, {{key:Enter}}, høyreklikk eller dobbeltklikk. Å klikke på et eksisterende punkt avslutter også kjeden |
| {{ui:Rektangel}} | {{key:R}} | Klikk ett hjørne, og deretter det motsatte hjørnet. Det gir fire linjer som møtes i hjørnene, to horisontale og to vertikale |
| {{ui:Sirkel}} | {{key:C}} | Klikk midtpunktet, og deretter et punkt på sirkelen |
| {{ui:Bue}} | {{key:A}} | Klikk sentrum, deretter starten, og så slutten. Buen går i samme retning som pekeren beveges rundt sentrum |
| {{ui:Punkt}} | {{key:P}} | Klikk. Et punkt alene markerer et hullsenter for {{ui:Hull}} |
| {{ui:Midtlinje}} | {{key:N}} | Som en linje, ett segment om gangen. Tegnes stiplet; det er konstruksjonsgeometri, brukt som rotasjonsakse eller referanse |
| {{ui:Avrunding}} | {{key:F}} | Klikk et hjørne der to linjer møtes, skriv inn radius, trykk {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klikk punktene kurven går gjennom; {{key:Enter}} avslutter, et klikk på første punkt lukker den. Se [Splines, trim, forskyvning og andre skissverktøy](topic:sketch-tools) |
| {{ui:Trim}} | {{key:T}} | Klikk delen av en kurve som skal fjernes, opp til nærmeste kryssing |
| {{ui:Mål}} | {{key:D}} | Se [Fullstendig definering av en skisse](topic:relations-dimensions) |

Mens tegning pågår, viser en liten boks ved pekeren lengden, størrelsen, diameteren eller radius.

### Skriv inn størrelse under tegning

Etter første klikk på en linje, et rektangel, en sirkel eller en bue kan størrelsen skrives inn i stedet for å klikkes. Når et tall skrives, åpnes boksen ved pekeren med tallet i:

| Verktøy | Bokser ({{key:Tab}} flytter til neste) | Hva skjer ved {{key:Enter}} |
|---|---|---|
| {{ui:Linje}}, {{ui:Midtlinje}} | Lengde, deretter Vinkel (°) fra skissens X-akse | Linjen tegnes så lang, mot pekeren eller i den angitte vinkelen; kjeden fortsetter fra enden |
| {{ui:Rektangel}} | Bredde, deretter Høyde | Rektangelet tegnes fra første hjørne mot pekeren; en størrelse som ikke er skrevet inn, hentes fra pekeren |
| {{ui:Sirkel}} | Diameter | Sirkelen tegnes med den diameteren |
| {{ui:Bue}} | Radius etter sentrum, deretter Buevinkel (°) etter starten | Starten legges så langt fra sentrum; deretter går buen så langt rundt, i samme retning som pekeren ble beveget |

Hver størrelse som skrives inn, blir et **styrende mål** i samme trinn, slik at skissen får mål. {{key:Mod+Z}} fjerner formen og målene sammen. Klikk i stedet for å trykke {{key:Enter}} beholder det som er skrevet inn, og henter resten fra klikket. {{key:Esc}} lukker boksen og går tilbake til pekeren.

Slå av dette under {{ui:Innstillinger}} › {{ui:PartCraft}} › **Sett mål mens du tegner** hvis det bare skal tegnes med klikk. Se [PartCraft-innstillinger](topic:settings).

{{ui:Mer}}, til slutt i skissverktøyene, inneholder kontrollpunktspline, {{ui:Forleng}}, {{ui:Forskyv}}, {{ui:Speil}}, {{ui:Mangekant}}, {{ui:Spor}}, skissemønstrene og {{ui:Projiser kant}}: se [Splines, trim, forskyvning og andre skissverktøy](topic:sketch-tools).

### Fangst

Fangst legger til betingelser automatisk, slik at skissen holder seg sammenhengende når den flyttes:

- På et **endepunkt eller origo** vises en liten firkant. Det nye punktet gjøres sammenfallende med det.
- På en **linje, sirkel eller bue** vises et lite kryss. Det nye punktet legges på kurven.
- En linje innenfor 3 grader av horisontal eller vertikal fanges til den og får en horisontal eller vertikal betingelse. Merket viser «H» eller «V».

For å unngå fangst zoomes det inn, slik at klikket blir lenger fra punktet eller kurven.

## Avrund et hjørne

1. Trykk {{key:F}} eller velg {{ui:Avrunding}}.
2. Klikk hjørnepunktet der to linjer møtes.
3. En boks åpnes med en foreslått radius. Skriv inn radiusen og trykk {{key:Enter}}.

Begge linjene trimmes og forbindes med en tangentbue med et radiusmål. Meldinger du kan se: «En avrunding krever et hjørne der nøyaktig to linjer møtes.» og «Den radiusen er for stor for disse linjene.»

:::tip
En skisseavrunding runder et hjørne i profilen, slik at ekstruderingen får avrundede vertikale kanter. For å runde kanter på selve volumlegemet (for eksempel øverste kanter på en plate), bruk i stedet funksjonen {{ui:Avrunding}} på delen: se [Avrunding, fasing og skall](topic:fillet-chamfer-shell). I en skisse er verktøylinjens Avrunding skissverktøyet; på delen er det funksjonen.
:::

## Konstruksjonsgeometri

Konstruksjonslinjer, -sirkler og -buer er stiplet og grå. De styrer skissen, men er ikke en del av profilen som ekstruderes eller roteres.

1. Velg linjene, sirklene eller buene.
2. Trykk {{key:Q}} eller velg {{ui:Konstruksjon}}. Trykk igjen for å gå tilbake.

## Velg, dra og slett

Trykk {{key:S}} (eller {{key:Esc}} til ingen verktøy er aktivt) for Velg.

- Klikk et punkt, en linje, sirkel, bue, betingelsessymbol eller mål for å velge det. {{key:Shift}}+klikk legger til i utvalget eller tar bort. På Windows og Linux gjør {{key:Ctrl}}+klikk det samme; på Mac, ⌘+klikk.
- Dra på tomt område for å tegne et vindu: alt som ligger helt innenfor, velges.
- Dra et punkt eller en linje for å flytte den. Løseren beholder alle betingelser og mål når den flyttes, så bare fri geometri beveges. Dra kanten på en sirkel for å endre radiusen.
- Dra målets tall for å flytte etiketten.
- Trykk {{key:Delete}} eller {{key:Backspace}}, eller velg {{ui:Slett}} i høyre panel, for å slette utvalget. Når geometri slettes, slettes også betingelsene på den.

## Zoom og panorer i skissen

- Rull hjulet for å zoome ved pekeren.
- Dra med midtknappen eller høyreknappen for å panorere.
- {{ui:Tilpass}} i verktøylinjen eller i høyre panel tilpasser skissen til visningen. I en skisse er tasten {{key:F}} Avrunding-verktøyet, ikke Tilpass.

## Lukk skissen

Velg {{ui:Avslutt}} i verktøylinjen eller {{ui:Avslutt skisse}} i høyre panel, eller trykk {{key:Esc}} til skissen lukkes. Hver {{key:Esc}} avbryter først det som pågår, går så tilbake til Velg, deretter fjerner utvalget, og den neste lukker skissen.

Skissen forblir valgt, så neste {{ui:Ekstruder}} eller {{ui:Roter}} bruker den.

## Hva som gir en god profil

{{ui:Ekstruder}} og {{ui:Roter}} bruker **hver lukket sløyfe** i skissen av linjer, sirkler, buer og splines som ikke er konstruksjon. Sløyfer inne i sløyfer blir hull.

- Hver ende må møte nøyaktig én annen ende. «Profilen er åpen: en ende ved (12.5, 40) er ikke koblet til noe.» peker ut stedet.
- Ingen tre ender må møtes i ett punkt: «Profilen forgrener seg ved (0, 20): mer enn to ender møtes der.»
- Punkter og konstruksjonsgeometri ignoreres av profilen.

Neste: [Fullstendig definering av en skisse med betingelser og mål](topic:relations-dimensions).

## En skisse fra et bilde

**Funksjoner › Mer › Skisse fra foto…** (eller skissegruppen i funksjonstre-båndet) sporer et bilde av en flat del på en jevn bakgrunn — dens omriss og hull — eller en penntegning, til en skisse av linjer, buer og sirkler. Oppgi én lengde (bredden, høyden eller den lengste siden) slik at skissen får riktig størrelse, kontroller hva som ble funnet i forhåndsvisningen, og velg **Lag skissen**; den kan også ekstruderes, i samme angretrinn. Det sporeres på denne datamaskinen. Hjørneradier kommer tilbake innenfor ca. 5 %, detaljer på en eller to piksler går tapt, og et bilde tatt på skrå eller med skygger over delen blir ikke rettet opp: fotografer delen rett forfra, med jevnt lys.
