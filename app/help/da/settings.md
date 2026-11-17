---
title: PartCraft-indstillinger
summary: Vælg hvilken museknap der drejer visningen, lad et trackpad-swipe dreje og panorere delen, slå automatiske relationer under skitsering til eller fra, og angiv hvor mange tråde simuleringsløserne bruger.
keywords: indstillinger, præferencer, valg, mus, midterknap, hjulknap, kredsbevægelse, rotér, drej, trackpad, touchpad, rul, swipe, pinch, relationer, begrænsninger, automatisk begrænsning, automatiske relationer, fangning, sammenfaldende, tråde, løsertråde, kerner, processorer, flertrådet, hurtigere løsning, parallel
from: 759edcaf
---

Åbn {{ui:Indstillinger}} med tandhjulet i app-linjen eller {{key:Mod+,}}. Den første fane, {{ui:PartCraft}}, rummer indstillingerne for denne app. {{ui:Generelt}} rummer dem, alle CadCraft-apps deler (tema, værktøjslinje, paneler). PartCraft-indstillingerne findes kun i appen: du ændrer dem her, og denne browser husker dem. {{ui:Nulstil PartCraft-indstillinger}} sætter alt tilbage til start.

## Drejning af visningen

- **Venstre knap** (start): træk med venstre knap for at dreje delen; træk med højre eller midterste knap for at panorere.
- **Midterknap**: tryk på hjulet og træk for at dreje delen. Hold {{key:Shift}} (eller {{key:Ctrl}}, eller ⌘) med midterknappen, eller træk med højre knap, for at panorere. Venstre knap vælger kun flader, kanter og planer, så et klik, der flytter sig lidt, aldrig drejer delen. Mange CAD-programmer virker sådan.

Hjulet zoomer ved markøren uanset valg. I en skitse panorerer højre og midterste knap som før.

## Rulning: museviser eller trackpad

- **Find ud af det** (start): PartCraft følger rulningen. Sidelæns eller fin rulning, som en trackpad sender, drejer delen; hele hjulklik zoomer.
- **Museviser**: rulning zoomer altid mod markøren.
- **Trackpad**: swipe med to fingre for at dreje delen, hold {{key:Shift}} og swipe for at panorere, pinch for at zoome. I en skitse panorerer et to-fingerswipe skitsen.

Pinch zoomer i alle valg. Gætter "Find ud af det" forkert for din mus eller trackpad, så vælg den, du har. Mere i [Trackpad, touch og små skærme](topic:trackpad-and-touch).

## Skitsering: tilføj relationer under tegning

**Tilføj relationer under tegning** (tændt ved start): et klik, der fanger et punkt, gør det nye punkt sammenfaldende med det. Et klik på en kurve lægger punktet på kurven, og en linje, der tegnes næsten vandret eller lodret, bliver vandret eller lodret. Se [Relationer og mål](topic:relations-dimensions).

Slå det fra, når du vil placere geometri tæt på anden geometri uden at binde den til den. Markøren fanger stadig punkter og kurver, men intet forbindes: linjer tegnet i en kæde deler ikke deres ender, så et træk kan trække dem fra hinanden. Tilføj de relationer, du vil have, selv fra det højre panel. En lukket profil kan stadig ekstruderes, når dens ender mødes.

:::note
Indstillingen ændrer kun det, ny tegning tilføjer. Relationer, der allerede er i en skitse, bliver, og værktøjet Afrund laver stadig sin tangentbue og radius.
:::

## Skitsering: mål under tegning

**Mål under tegning** (tændt ved start): mens en linje, et rektangel, en cirkel eller en bue tegnes, fylder skrivning af et tal størrelsesboksen ved siden af markøren ({{key:Tab}} går til næste boks), og {{key:Enter}} tegner formen i den størrelse med et styrende mål for hver størrelse, du skrev. Slukket: at skrive et tal under tegning gør ingenting, og former tegnes kun med klik. Se [Skriv størrelsen, mens du tegner](topic:sketch-basics#type-the-size-as-you-draw).

## Hjørneindikator

Det, der vises i hjørnet af 3D-visningen: **ViewCube** (start; øverst til højre, klik på en flade, kant eller et hjørne for at kigge derfra, træk for at kredse, træk i kompasringen for at dreje modellen), **Aksemærke** (et lille X-, Y-, Z-mærke nederst til venstre, der drejer med visningen: X rød, Y grøn, Z blå) eller **Ingen**. Ingen af dem vises, mens du skitserer, eller på tegningsarket. Se [ViewCube](topic:view-cube).

## Løsertråde

Hvor mange tråde simuleringsløserne må bruge. **Automatisk** (start) tager én færre end computerens logiske processorer (højst 16), så siden forbliver responsiv, mens et studie løses. Eller vælg et tal. Store voxel-studier, knækning, spænding over tid og strømning løses hurtigere på flere tråde (ca. 2× på 4 tråde for 80,000 kuber i vores målinger, mere på en inaktiv computer). Modeller under ca. 20,000 ukendte bliver på én tråd, fordi opstart af trådene koster mere, end de sparer. En trådet løsning giver samme svar som én tråd (til afrunding: summerne lægges sammen i en anden rækkefølge). Hvert studies resultater viser **N tråde** eller **1 tråd** med årsagen under **Løser**.

Trådene kræver, at siden er **krydsoprindelsesisoleret** (browseren lader kun workers dele hukommelse da). Labsiden er det. Hvor den ikke er, siger indstillingen det: »Denne side er ikke krydsoprindelsesisoleret, så løsere kører på én tråd, uanset hvad der vælges her.« Så bruger hver løsning én tråd. Alt andet virker på samme måde, og svarene er de samme.

Laminære strømningsstudier bruger også trådene (ca. 2.5× på 4 tråde for 54,000 væskeceller, det samme svar til sidste decimal). Den kvadratiske tetraeder-løser og varmeoverførsel kører på én tråd: trådning af dem blev målt langsommere på vores testcomputer, fordi deres løsere er begrænset af hukommelseshastighed og af et trin, der ikke kan deles.

### På din egen webserver

Kører du PartCraft fra din egen server, virker den, som den serveres. Til løsertrådene skal serveren sende to headere med PartCraft-siden:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

På Apache, i mappens `.htaccess` (kræver mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

På nginx, i `location`, der serverer PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Genindlæs siden: Indstillinger › Løsertråde tilbyder så **Automatisk** med din computers antal. Den anden header får browseren til at afvise alt, siden henter fra et andet site, der ikke tillader det. Det er fint for PartCraft alene, fordi den henter alt fra sin egen mappe.
