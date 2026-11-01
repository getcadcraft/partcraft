---
title: Kom i gang med PartCraft
summary: Hva PartCraft gjør i dag, hva nettleseren din trenger, og en første del på ti minutter, fra skisse til lagret fil.
keywords: start, første gang, hurtigstart, introduksjon, veiledning, første del, plate, parametrisk, delmodellerer
from: 5f0a668d
---

PartCraft er den parametriske del- og sammenstillingsappen i CadCraft-familien. Du tegner en 2D-skisse, fester den med betingelser og mål, gjør den til et volumlegeme med funksjoner som ekstruder, roter rundt akse og hull, og endrer et hvilket som helst tall senere: delen bygges på nytt fra historikken. Deler går deretter inn i sammenstillinger, der ledd plasserer dem og lar deg kontrollere bevegelsen.

Hva denne versjonen gjør:

| Oppgave | Hva du får |
|---|---|
| Skisser | Linjer, rektangler, sirkler, buer, punkter og midtlinjer, med betingelser og mål, og en levende tilstand: under-, fullt eller overbestemt |
| Volumfunksjoner | Ekstruder, skjær, roter, roterende skjær, enkle hull og hull med forsenking, lineære og sirkulære mønstre, speil, avrundinger og fasinger på rette kanter mellom plane flater, og skall og trekkvinkler på plane flater. Sveip, loft og de andre funksjonene som trenger en eksakt kjerne, er ikke bygget ennå i denne versjonen: se [Hva som ikke er bygget ennå](topic:not-built-yet) |
| Historikk | Rediger tallene til en hvilken som helst funksjon, undertrykk, rull tilbake, endre rekkefølge og slett, med angre |
| Sammenstillinger | Deler forbundet med stive, roterende og glidende ledd, en kollisjonskontroll og en bevegelseskontroll |
| Tegninger | Et A3-ark med tre visninger, en isometri, et snitt, en detaljvisning, hovedmål, datum, toleranserammer og overflatesymboler, eksportert som PDF |
| Filer | Egne del- og sammenstillingsfiler; STL, 3MF, fasettert STEP, DXF og PDF ut |

Alt kjører i nettleseren din, på datamaskinen din. **Ingenting lastes opp.** Se [Filer: åpne, lagre og eksportere](topic:files) for hvor filer havner.

## Dette trenger du

- En nylig versjon av Chrome, Edge, Firefox eller Safari med **WebGL** (3D-grafikk) og **WebAssembly** slått på. Begge er på som standard. Volumgeometrien bygges av en WebAssembly-nettkjerne som lastes med appen: se [Nettkjernen](topic:solid-kernels).
- En mus er enklest. En pekeplate fungerer, og berøringsskjermer fungerer for visning og enkel skissing: se [Pekeplate, berøring og små skjermer](topic:trackpad-and-touch).
- En skjerm som er minst 1280 piksler bred viser hele verktøylinjen på én rad. Smalere vinduer ruller verktøylinjen sidelengs; på en telefon åpnes panelene som ark fra en linje nederst.

Mer om nettlesere: [Nettlesere og datamaskiner](common:browsers).

:::note
PartCraft kjører i nettleseren, og på skrivebordet inne i CadCraft Studio. Lagring i skyen er ikke tilgjengelig ennå: du åpner deler fra datamaskinen din og lagrer dem tilbake til den som filer.
:::

## Åpne PartCraft

1. Åpne PartCraft.
2. Vent mens skjermen sier «Laster volumkjernen…». Det tar et øyeblikk første gang.
3. Du ser en tom 3D-visning med tre grunnplan, historikken til venstre («Del1», deretter Frontplan, Toppplan, Høyreplan) og en boks i visningen med overskriften «Start en del».
4. Brikken nær høyre ende av statuslinjen sier «Nettkjerne»: PartCraft bygger hver del med nettkjernen i denne versjonen, så runde flater er plane fasetter. Du kan begynne å modellere med en gang.

Hvis visningen sier at nettleseren ikke kan vise 3D, eller at kjernen ikke ble lastet, se [Feilsøking](topic:troubleshooting#the-app-does-not-start).

## Din første del: en plate med et hull

Du skal lage en plate på 60 × 40 mm, 10 mm tykk, med et hull på 6 mm gjennom den. Enhetene er millimeter.

### Skisser omrisset

1. Klikk **Frontplan** i historikken til venstre. Planet utheves i visningen.
2. Velg {{ui:Skisse}} i verktøylinjen, eller trykk {{key:S}}. Visningen dreier seg for å se rett på planet, og verktøyet Linje er aktivt.
3. Trykk {{key:R}} for verktøyet Rektangel.
4. Flytt pekeren til origo (den lille røde sirkelen med et kryss). En liten firkant viser at den fanger. Klikk.
5. Flytt opp og til høyre og klikk igjen. Du har et rektangel. Linjene er blå: blå betyr at de fortsatt kan flyttes.

### Gi det størrelser

1. Trykk {{key:D}} for verktøyet Mål.
2. Klikk på den øverste linjen, og klikk deretter et lite stykke over den. En tallboks åpnes med gjeldende lengde.
3. Skriv `60` og trykk {{key:Enter}}. Rektangelet endres til 60 mm bredt.
4. Klikk på den venstre linjen, og klikk deretter et lite stykke til venstre for den. Skriv `40` og trykk {{key:Enter}}.

Brikken øverst til venstre i visningen sier nå **Fullt bestemt**, og linjene blir til blekk (svart på temaet Papir, lyst på temaet Modell). Hvert punkt og hver størrelse er låst.

:::tip
Hvis du startet rektangelet borte fra origo, sier brikken fortsatt «Underbestemt · 2 frihetsgrader». Trykk {{key:S}} for Velg, klikk på ett hjørne, {{key:Shift}}+klikk på origo, og velg deretter {{ui:• Sammenfallende}} i høyre panel.
:::

### Ekstruder det

1. Velg {{ui:Avslutt}} i verktøylinjen, eller trykk {{key:Esc}} til skissen lukkes (vanligvis to ganger).
2. Velg {{ui:Ekstruder}}. Et volumlegeme på 10 mm vises. «Ekstruder1» legges til i historikken, med «Skisse1» innrykket under.
3. Høyre panel viser innstillingene til ekstruderingen. For å endre tykkelsen skriver du et nytt tall i **Dybde (mm)** og trykker {{key:Enter}} eller {{key:Tab}}. Delen bygges på nytt med en gang.

### Legg til hullet

1. Klikk på den store plane flaten foran på platen (enden av ekstruderingen). Hele flaten utheves, og høyre panel sier **Flate**.
2. Velg {{ui:Skisse på denne flaten}} i høyre panel.
3. Trykk {{key:P}} for verktøyet Punkt og klikk nær midten av flaten.
4. Velg {{ui:Avslutt}}.
5. Velg {{ui:Hull}}. Et hull på 6 mm går gjennom platen. Endre **Diameter (mm)** i høyre panel hvis du vil.

Boksen **Del** nederst til venstre viser nå et volum, et overflateareal, størrelsen (60 × 40 × 10 mm) og «Gjennomgående hull: 1».

### Lagre den

1. Trykk {{key:Mod+S}} eller velg {{ui:Lagre}}.
2. Nettleseren laster ned `Part1.partcraft.json` til nedlastingsmappen sin. Filen inneholder hele historikken: åpne den igjen med {{ui:Åpne}} for å fortsette å redigere.

For å gi delen nytt navn først klikker du på tomt rom i visningen slik at ingenting er valgt, og skriver et nytt **Navn** i høyre panel.

## Hvor du går videre

- [Tegn din første skisse](topic:sketch-basics) og [Bestem en skisse fullt ut](topic:relations-dimensions) forklarer skissereren ordentlig.
- [Endre en del gjennom historikken](topic:edit-history) viser hvordan du redigerer det du har bygget.
- [Avrund, fas og hul ut](topic:fillet-chamfer-shell) og [Lag en tegning](topic:drawing-pdf) fullfører delen. [Hva som ikke er bygget ennå](topic:not-built-yet) lister hva denne versjonen ikke gjør, for eksempel sveip og loft.
- [Hvis du kommer fra en annen parametrisk modellerer](topic:coming-from) lister vanene som fungerer annerledes her.
- [Taster og mus](topic:keyboard) er den fullstendige listen over snarveier.
- [Bruke denne hjelpen](common:help).
