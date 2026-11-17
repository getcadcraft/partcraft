---
title: PartCraft-innstillinger
summary: Velg hvilken musknapp som dreier visningen, la et sveip på styreflaten dreie og panorere delen, slå automatiske relasjoner under skissering på eller av, og velg hvor mange tråder simuleringsløserne bruker.
keywords: innstillinger, valg, alternativer, mus, midtknapp, hjulknapp, bane, rotere, dreie, styreflate, touchpad, rulling, sveip, klype, relasjoner, begrensninger, automatiske relasjoner, auto-begrensning, fangst, sammenfallende, tråder, løsertråder, kjerner, prosessorer, flertråd, raskere løsning, parallell
from: 759edcaf
---

Åpne {{ui:Innstillinger}} med tannhjulet øverst i appen, eller {{key:Mod+,}}. Den første fanen, {{ui:PartCraft}}, inneholder innstillingene som hører til denne appen; {{ui:Generelt}} inneholder dem alle CadCraft-appene deler (tema, verktøylinje, paneler). PartCraft-innstillingene finnes bare i appen: du endrer dem her, og denne nettleseren husker dem. {{ui:Tilbakestill PartCraft-innstillinger}} setter alt tilbake til start.

## Dreie visningen

- **Venstre knapp** (standard): dra med venstre knapp for å dreie delen; dra med høyre eller midtre knapp for å panorere.
- **Midtknapp**: trykk på hjulet og dra for å dreie delen; hold {{key:Shift}} (eller {{key:Ctrl}}, eller ⌘) med midtknappen, eller dra med høyre knapp, for å panorere. Venstre knapp velger bare flater, kanter og plan, så et klikk som beveger seg litt, dreier aldri delen. Mange CAD-programmer fungerer slik.

Hjulet zoomer ved pekeren uansett. I en skisse panorerer høyre og midtre knapp som før.

## Rulling: museshjul eller styreflate

- **Finn ut selv** (standard): PartCraft følger rullingen. Sidelengs eller fintfordelt rulling, slik en styreflate sender, dreier delen; hele hjulhakk zoomer.
- **Museshjul**: rulling zoomer alltid mot pekeren.
- **Styreflate**: sveip med to fingre for å dreie delen, hold {{key:Shift}} og sveip for å panorere, klyp for å zoome. I en skisse panorerer et sveip med to fingre skissen.

En klyping zoomer i alle valg. Hvis «Finn ut selv» gjetter feil for musen eller styreflaten din, velg den du har. Mer i [Styreflate, berøring og små skjermer](topic:trackpad-and-touch).

## Skissering: legg til relasjoner mens du tegner

**Legg til relasjoner mens du tegner** (på fra start): et klikk som fanger et punkt, gjør det nye punktet sammenfallende med det, et klikk på en kurve plasserer punktet på kurven, og en linje tegnet nesten vannrett eller loddrett blir vannrett eller loddrett. Se [Relasjoner og mål](topic:relations-dimensions).

Slå det av når du vil plassere geometri nær annen geometri uten å knytte den til den. Pekeren fanger fortsatt punkter og kurver, men ingenting blir forbundet: linjer tegnet i en kjede deler ikke endene sine, så et dra kan trekke dem fra hverandre. Legg til relasjonene du vil ha selv fra høyre panel. En lukket profil blir fortsatt ekstrudert når endene møtes.

:::note
Innstillingen endrer bare det nye tegningen legger til. Relasjoner som allerede finnes i en skisse, blir værende, og Avrund-verktøyet lager fortsatt sin tangentbue og radius.
:::

## Skissering: mål mens du tegner

**Mål mens du tegner** (på fra start): mens en linje, et rektangel, en sirkel eller en bue tegnes, fyller et tall inn størrelsesboksen ved siden av pekeren ({{key:Tab}} går til neste boks), og {{key:Enter}} tegner formen i den størrelsen, med et drivende mål for hver størrelse du skrev inn. Av: å skrive et tall mens du tegner, gjør ingenting, og former tegnes bare med klikk. Se [Skriv inn størrelsen mens du tegner](topic:sketch-basics#type-the-size-as-you-draw).

## Hjørneindikator

Hva som vises i hjørnet av 3D-visningen: **ViewCube** (standard; øverst til høyre — klikk en flate, kant eller hjørne for å se derfra, dra den for å bane rundt, dra kompassringen for å dreie modellen), **Aksesymbol** (en liten X-, Y-, Z-markør nederst til venstre som dreier med visningen: X rød, Y grønn, Z blå) eller **Ingen**. Ingen av dem vises mens du skisserer eller på tegningsarket. Se [ViewCube](topic:view-cube).

## Løsertråder

Hvor mange tråder simuleringsløserne kan bruke. **Automatisk** (standard) tar én færre enn datamaskinens logiske prosessorer (høyst 16), slik at siden forblir responsiv mens en studie løser seg; eller velg et tall. Store voxel-studier, knekking, spenning over tid og strømning løses raskere på flere tråder (omtrent 2× på 4 tråder for 80 000 kuber i våre tider, mer på en inaktiv datamaskin). Modeller under omtrent 20 000 ukjente blir på én tråd, fordi det koster mer å starte trådene enn de sparer. En flertrådet løsning gir samme svar som én tråd (opp til avrunding: summene legges sammen i en annen rekkefølge). Resultatene for hver studie viser **N tråder** eller **1 tråd**, med grunnen under **Løser**.

Trådene krever at siden er **kryssopprinnelsesisolert** (nettleseren lar arbeidsprosesser dele minne bare da). Laboratoriesiden er det; der den ikke er det, sier innstillingen det («Denne siden er ikke kryssopprinnelsesisolert, så løserne kjører på én tråd uansett hva som er valgt her.»), og hver løsning bruker én tråd. Alt annet fungerer likt, og svarene er de samme.

Laminære strømningsstudier bruker trådene også (omtrent 2,5× på 4 tråder for 54 000 væskeceller, samme svar til siste siffer). Den kvadratiske tetraederløseren og varmeoverføring kjører på én tråd: å gjøre dem flertrådet ble målt som tregere på testdatamaskinen vår, fordi løserne er begrenset av minnehastighet og av et steg som ikke kan deles.

### På egen webserver

Hvis du kjører PartCraft fra din egen server, fungerer den slik den serveres. For løsertrådene, la serveren sende to headere med PartCraft-siden:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

På Apache, i mappens `.htaccess` (krever mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

På nginx, i `location` som serverer PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Last inn siden på nytt: Innstillinger › Løsertråder tilbyr da **Automatisk** med datamaskinens antall. Den andre headeren gjør at nettleseren avviser alt siden laster fra et annet nettsted som ikke tillater det, noe som er greit for PartCraft alene (den laster alt fra sin egen mappe).
