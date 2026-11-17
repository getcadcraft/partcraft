---
title: Send en tegning til en laser
summary: Vælg, hvad hvert lag gør (skær, ridse, gravér, udfyld, billede), forhåndsvis hovedets bevægelser, gem GRBL-G-kode i laser-tilstand, eller send den fra browseren, efter at du har afgrænset jobbet.
keywords: laser, laserskærer, lasergravør, GRBL, G-kode, gravér, udfyld, dithering, billedgravering, ridse, skær, Web Serial, Linux, afgræns jobbet, effekt, hastighed, gennemløb
from: 327b3c46
---

Panelet {{ui:Laser}} omdanner lagene i en tegning til et program til en laser, der kører GRBL (de fleste hobby- og små værksteds diode- og CO2-styringer). I PartCraft vælger du {{ui:Eksportér}} › {{ui:Laserprogram…}} og derefter {{ui:Tilføj konturer fra en DXF…}}: konturerne og hullerne kommer ind på laget CUT. Fladeudfoldningerne af pladeemne-dele (med deres bøjelinjer på laget BEND) kræver den eksakte kerne, som denne version ikke har. Indstillingerne gemmes i del- eller samlingsfilen.

:::warning
Test alle indstillinger på spildmateriale først, brug øjenbeskyttelse, der passer til din laser, hold låget lukket, hvor der er et, og lad aldrig en kørende laser stå alene. Tallene, et lag starter med, er pladsholdere, ikke anbefalinger for noget materiale.
:::

## Vælg hvad hvert lag gør

Hvert lag i tegningen er en række. {{ui:Gør}} sætter det til **Skær**, **Ridse**, **Gravér linjer**, **Udfyld figurer**, **Gravér billede** eller **Sendes ikke**, med en {{ui:Effekt %}}, en {{ui:Hastighed mm/min}} og et antal {{ui:Gennemløb}}.

- **Udfyld** brænder indersiden af lukkede figurer i linjer, {{ui:Linjeafstand}} fra hinanden, i en {{ui:Vinkel}}, i begge retninger eller i én; med overkørsel, så hovedet kører i fart, når laseren tændes. Krydsskravering tilføjer et ekstra gennemløb i 90°. En figur med et hul forbliver åben ved hullet.
- **Gravér billede** omdanner et billede til prikker (Floyd–Steinberg, Atkinson, ordnet, eller blot sort og hvid ved en grænse) eller, med *Gråtoner*, til variabel effekt.
- Rækkefølge: billeder og udfyldninger først, derefter linjegravering, derefter ridser og til sidst skæringer, så en udskåret del ikke flytter sig, mens den graveres. Inden for ét lag kører banerne **inde-først** (et hul før pladen, det sidder i), og nærmeste næst.

## Forhåndsvis, og gem

Forhåndsvisningen tegner, hvad hovedet gør: brændende linjer i farve, hurtige bevægelser i grå og en grøn boks rundt om alt, der brændes. Under den står størrelsen, brændelængden og et tidsestimat (uden acceleration; en rigtig maskine tager længere tid). {{ui:Gem G-kode…}} skriver GRBL-G-kode i laser-tilstand: `$32=1`, `M4` (eller `M3`) med S-værdier, `G0`- og `G1`-bevægelser, `M5` til sidst. X0 Y0 er jobbets nederste venstre hjørne, medmindre du vælger tegningens nulpunkt: sæt din maskines arbejdsnulpunkt der. G-koden følger GRBLs dokumenterede laser-tilstand; den er endnu ikke prøvet på en rigtig laser.

## Send fra browseren

I Chrome og Edge beder {{ui:Forbind…}} dig vælge laserens USB-port. Intet forbindes eller sendes, før du trykker på en knap. Tryk først på {{ui:Afgræns jobbet}}: hovedet tegner jobbets boks op med laseren **slukket** (eller med den lave effekt, du har valgt til en pegepind), så du kan se, hvor den vil brænde. Først derefter bliver {{ui:Send job}} aktiv, og den slukker igen, hvis du ændrer noget. {{ui:Pause}} holder hovedet, {{ui:Stop}} stopper det, nulstiller styringen (laseren slukkes) og sender `M5`. Hvor Web Serial mangler (Firefox, Safari og CadCraft Studio, hvis webvisning endnu ikke har det), gem G-koden og send den med din lasers eget program.

## Ikke lavet endnu

Andre styringers formater (Ruida, Marlin-lasere, leverandørfiler), tapper og indkørsler, snitbreddeforskydning, materialebiblioteker, rotations- og Z-akser, kameraindretning.
