---
title: Send en tegning til en laser
summary: Velg hva hvert lag gjør (kutt, riss, gravering, fyll, bilde), forhåndsvis hodets bevegelser, lagre G-kode for GRBL laser-modus, eller send den fra nettleseren etter å ha rammet inn jobben.
keywords: laser, laserskjærer, lasergravør, GRBL, G-kode, gravere, fyll, dithering, bildegravering, riss, kutt, Web Serial, Linux, ramme inn jobben, effekt, hastighet, passeringer
from: 327b3c46
---

{{ui:Laser}}-panelet gjør lagene i en tegning om til et program for en laser som kjører GRBL (de fleste hobby- og småverksted-styringer for diode og CO2). I PartCraft velger du {{ui:Eksporter}} › {{ui:Laserprogram…}}, deretter {{ui:Legg til omriss fra en DXF…}}: omrissene og hullene kommer inn på laget CUT. Flate mønstre av platedeler (med bøyelinjene på laget BEND) krever den eksakte kjernen, som denne versjonen ikke har. Innstillingene lagres i del- eller sammenstillingsfilen.

:::warning
Test alle innstillinger på avfall først, bruk vernebriller som passer til laseren din, hold lokket lukket der det finnes et, og la aldri en kjørende laser stå uten tilsyn. Tallene et lag starter med er plassholdere, ikke anbefalinger for noe materiale.
:::

## Velg hva hvert lag gjør

Hvert lag i tegningen er en rad. {{ui:Gjør}} setter den til **Kutt**, **Riss**, **Gravér linjer**, **Fyll former**, **Gravér bilde** eller **Ikke sendt**, med en {{ui:Effekt %}}, en {{ui:Hastighet mm/min}} og et antall {{ui:Passeringer}}.

- **Fyll** brenner innsiden av lukkede former i linjer, {{ui:Linjeavstand}} fra hverandre, i en {{ui:Vinkel}}, i begge retninger eller én, med overskanning slik at hodet har full fart når laseren slår seg på. Kryssskravur legger til en andre passering i 90°. En form med hull forblir åpen ved hullet.
- **Gravér bilde** gjør et bilde om til prikker (Floyd–Steinberg, Atkinson, ordnet, eller ren svart-hvitt ved en terskel) eller, med *Gråtoner*, til variabel effekt.
- Rekkefølge: bilder og fyll først, deretter linjegravering, så riss, så kutt, slik at en utskåret del ikke flytter seg mens den graveres. Innenfor ett lag går banene **innenfra først** (et hull før platen det sitter i), og alltid til nærmeste neste.

## Forhåndsvis, deretter lagre

Forhåndsvisningen tegner hva hodet gjør: brennende linjer i farge, raske bevegelser i grått, og en grønn boks rundt alt som brenner. Under den vises størrelsen, brennlengden og et tidsanslag (uten akselerasjon; en ekte maskin bruker lengre tid). {{ui:Lagre G-kode…}} skriver G-kode i GRBL laser-modus: `$32=1`, `M4` (eller `M3`) med S-verdier, `G0`- og `G1`-bevegelser, og `M5` til slutt. X0 Y0 er jobbens nedre venstre hjørne, med mindre du velger tegningens origo; sett maskinens arbeidsnullpunkt dit. G-koden følger GRBLs dokumenterte laser-modus, og den er ennå ikke prøvd på en ekte laser.

## Send fra nettleseren

I Chrome og Edge ber {{ui:Koble til…}} deg velge laserens USB-port. Ingenting kobles til eller sendes før du trykker en knapp. Trykk først {{ui:Ramme inn jobben}}: hodet tegner boksen rundt jobben med laseren **av** (eller med lav effekt du har satt for en peker), slik at du kan se hvor det vil brenne. Først da blir {{ui:Send jobb}} aktiv, og den slår seg av igjen hvis du endrer noe. {{ui:Pause}} holder hodet, {{ui:Stopp}} holder det også, nullstiller styringen (laseren slås av) og sender `M5`. Der Web Serial mangler (Firefox, Safari og CadCraft Studio, der webvisningen ikke har det ennå), lagre G-koden og send den med laserens eget program.

## Ikke bygget ennå

Andre styringsformater (Ruida, Marlin-lasere, leverandørfiler), faner og inn- og utkjøringsbaner, kerf-forskyvning, materialbibliotek, roterende og Z-akser, kameraplassering.
