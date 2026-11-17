---
title: Kom i gang med PartCraft
summary: Hva PartCraft gjør i dag, hva nettleseren trenger, og en første del på ti minutter, fra skisse til lagret fil.
keywords: kom i gang, første gang, hurtigstart, introduksjon, veiledning, første del, plate, parametrisk, delmodellerer
from: 7d43283f
---

PartCraft er den parametriske del- og sammenstillingsappen i CadCraft-familien. Du tegner en 2D-skisse, binder den med relasjoner og mål, gjør den om til et volumlegeme med funksjoner som ekstrudering, rotasjon og hull, og endrer ethvert tall senere: delen bygges om fra sin historikk. Deler går deretter inn i sammenstillinger, der ledd plasserer dem og lar deg kontrollere bevegelsen.

Det denne versjonen gjør:

| Oppgave | Hva du får |
|---|---|
| Skisser | Linjer, rektangler, sirkler, buer, punkter og senterlinjer, med relasjoner og mål, og en levende tilstand: underdefinert, fullt definert eller overdefinert |
| Volumfunksjoner | Ekstrudering, kutt, rotasjon, roterende kutt, enkle og forsenkede hull, lineære og sirkulære mønstre, speiling, avrundinger og fasinger på rette kanter mellom plane flater, og skall og trekkvinkler på plane flater. Sveip, lofting og de andre funksjonene som krever en eksakt kjerne, er ikke bygget ennå i denne versjonen: se [Hva som ikke er bygget ennå](topic:not-built-yet) |
| Historikk | Rediger tallene til enhver funksjon, undertrykk, rull tilbake, endre rekkefølge og slett, med angring |
| Sammenstillinger | Deler koblet med stive ledd, dreieledd og glideledd, en kollisjonskontroll og en bevegelseskontroll |
| Tegninger | Et A3-ark med tre visninger, en isometrisk, et snitt, en detaljvisning, totale mål, datumer, rammer for toleranser og symboler for overflatebehandling, eksportert som PDF |
| Filer | Egne del- og sammenstillingsfiler; ut som STL, 3MF, eksakt STEP, DXF og PDF |

Alt kjører i nettleseren, på datamaskinen din. **Ingenting lastes opp.** Se [Filer: åpne, lagre og eksporter](topic:files) for hvor filene havner.

## Hva du trenger

- En oppdatert Chrome, Edge, Firefox eller Safari med **WebGL** (3D-grafikk) og **WebAssembly** slått på. Begge er på som standard. Volumgeometrien bygges av en WebAssembly-nettkjerne som lastes sammen med appen: se [Nettkjernen](topic:solid-kernels).
- En mus er enklest. Styreflate fungerer, og berøringsskjermer fungerer for visning og enkel skissering: se [Styreflate, berøring og små skjermer](topic:trackpad-and-touch).
- En skjerm som er minst 1280 piksler bred viser hele verktøylinjen på én rad. Smalere vinduer lar verktøylinjen rulle sideveis; på en telefon åpnes panelene som ark fra en linje nederst.

Mer om nettlesere og datamaskiner: [Nettlesere og datamaskiner](common:browsers).

:::note
PartCraft kjører i nettleseren, og på skrivebordet inne i CadCraft Studio. Skylagring er ikke tilgjengelig ennå: du åpner deler fra datamaskinen og lagrer dem tilbake dit som filer.
:::

## Åpne PartCraft

1. Åpne PartCraft.
2. Vent mens skjermen sier «Laster volumkjernen…». Dette tar et øyeblikk første gang.
3. Du ser en tom 3D-visning med tre basisplan, historikken til venstre («Part1», deretter Frontplan, Overplan, Høyreplan) og en boks i visningen med overskriften «Start en del».
4. Brikken nær høyre ende av statuslinjen sier «Nettkjerne»: PartCraft bygger hver del med nettkjernen i denne versjonen, så runde flater er flate fasetter. Du kan starte modellering med en gang.

Hvis visningen sier at nettleseren ikke kan vise 3D, eller at kjernen ikke ble lastet, se [Feilsøking](topic:troubleshooting#the-app-does-not-start).

## Din første del: en plate med et hull

Du skal lage en plate på 60 × 40 mm, 10 mm tykk, med et 6 mm hull gjennom seg. Enhetene er millimeter.

### Skisser omrisset

1. Klikk **Frontplan** i historikken til venstre. Planet markeres i visningen.
2. Velg {{ui:Skisse}} i verktøylinjen, eller trykk {{key:S}}. Visningen vender rett mot planet, og linjeverktøyet er aktivt.
3. Trykk {{key:R}} for rektangelverktøyet.
4. Flytt pekeren over origo (den lille røde sirkelen med et kryss). En liten firkant viser at den fester seg. Klikk.
5. Flytt opp og til høyre og klikk igjen. Du har et rektangel. Linjene er blå: blått betyr at de fortsatt kan flyttes.

### Gi det mål

1. Trykk {{key:D}} for målverktøyet.
2. Klikk på den øverste linjen, og klikk deretter litt over den. En tallboks åpnes med den gjeldende lengden.
3. Skriv `60` og trykk {{key:Enter}}. Rektangelet endrer seg til 60 mm bredt.
4. Klikk på den venstre linjen, og klikk deretter litt til venstre for den. Skriv `40` og trykk {{key:Enter}}.

Brikken øverst til venstre i visningen sier nå **Fullt definert**, og linjene blir blekk (svart på Papir-temaet, lys på Modell-temaet). Alle punkter og mål er låst.

:::tip
Hvis du startet rektangelet borte fra origo, sier brikken fortsatt «Underdefinert · 2 frihetsgrader». Trykk {{key:S}} for Velg, klikk ett hjørne, {{key:Shift}}+klikk origo, og velg deretter {{ui:• Sammenfallende}} i panelet til høyre.
:::

### Ekstruder den

1. Velg {{ui:Avslutt}} i verktøylinjen, eller trykk {{key:Esc}} til skissen lukkes (vanligvis to ganger).
2. Velg {{ui:Ekstruder}}. Et 10 mm volumlegeme vises. «Extrude1» legges til i historikken, med «Sketch1» rykket inn under den.
3. Panelet til høyre viser innstillingene for ekstruderingen. For å endre tykkelsen skriver du et nytt tall i **Dybde (mm)** og trykker {{key:Enter}} eller {{key:Tab}}. Delen bygges om med en gang.

### Legg til hullet

1. Klikk den store flate flaten foran på platen (enden av ekstruderingen). Hele flaten markeres, og panelet til høyre sier **Flate**.
2. Velg {{ui:Skisse på denne flaten}} i panelet til høyre.
3. Trykk {{key:P}} for punktverktøyet og klikk nær midten av flaten.
4. Velg {{ui:Avslutt}}.
5. Velg {{ui:Hull}}. Et 6 mm hull går gjennom platen. Endre **Diameter (mm)** i panelet til høyre om du vil.

Boksen **Del** nederst til venstre viser nå et volum, et overflateareal, størrelsen (60 × 40 × 10 mm) og «Gjennomgående hull: 1».

### Lagre den

1. Trykk {{key:Mod+S}} eller velg {{ui:Lagre}}.
2. Nettleseren laster ned `Part1.partcraft.json` til nedlastingsmappen. Filen inneholder hele historikken: åpne den igjen med {{ui:Åpne}} for å fortsette å redigere.

For å gi delen nytt navn først, klikk på tomt rom i visningen slik at ingenting er valgt, og skriv et nytt **Navn** i panelet til høyre.

## Hvor du går videre

- [Tegn den første skissen](topic:sketch-basics) og [Gi en skisse full definisjon](topic:relations-dimensions) forklarer skissereren ordentlig.
- [Endre en del gjennom historikken](topic:edit-history) viser hvordan du redigerer det du bygde.
- [Avrund, fas og hul ut](topic:fillet-chamfer-shell) og [Lag en tegning](topic:drawing-pdf) fullfører delen. [Hva som ikke er bygget ennå](topic:not-built-yet) lister opp det denne versjonen ikke gjør, for eksempel sveip og lofting.
- [Fra en annen parametrisk modellerer](topic:coming-from) lister opp vanene som fungerer annerledes her.
- [Taster og mus](topic:keyboard) er den fulle listen over snarveier.
- [Bruke denne hjelpen](common:help).
