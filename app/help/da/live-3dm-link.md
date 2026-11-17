---
title: Hold en .3dm-model levende
summary: Ændr en model i det program, der lavede den, og se PartCraft-legemet følge med, fra Rhino 8 eller en Grasshopper-definition, med dine features genopbygget på den nye form.
keywords: rhino, grasshopper, live-link, live-forbindelse, 3dm, nurbs, parametrisk, link, synk, script, push, importeret legeme
from: cf4dc9b2
---

Bliv ved med at forme modellen der, hvor du modellerer den, og bearbejd, kontrollér og dokumentér den her. Hver ændring i det andet program erstatter ét importeret legeme i PartCraft, og de features, der kommer efter det, genopbygges på den nye form.

:::note
Forbindelsen kræver **CadCraft Studio** på den samme computer. En browserfane kan ikke oprette forbindelsen. Intet sendes over internettet: scriptet taler med Studio på denne computers egen adresse, med et token.
:::

:::warning
Denne forbindelse er testet med scriptets filskriver og en stedfortræder for det andet program, endnu ikke inde i Rhino eller Grasshopper selv. Hvis noget fejler der, så fortæl os, hvad der stod.
:::

## Opsæt den

1. I Studio, åbn PartCraft. Under {{ui:Indstillinger}} › {{ui:PartCraft}} › {{ui:Assistenter}} sætter du flueben i **Tillad AI-assistenter og scripts at bruge PartCraft**, og klikker derefter på **Rediger**.
2. I Studio vælger du {{ui:Forbind en assistent}}. Den viser adressen og tokenet, du indsætter nedenfor.
3. Download scriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Fra Rhino

1. Kør `cadcraft_link.py` i Rhinos scripteditor (Python 3 i Rhino 8).
2. Første gang indsætter du adressen og tokenet. De gemmes i `.cadcraft-link.json` i din hjemmemappe, aldrig i modellen. Studio laver et nyt token, hver gang det starter, så scriptet spørger igen dengang.

Kør scriptet igen for at stoppe.

## Fra Grasshopper

Kør scriptet én gang i Rhino først, så adressen og tokenet gemmes.

1. Tilføj en Script-komponent (Python 3), og indsæt hele `cadcraft_link.py` i den.
2. Giv den disse input: `G` (geometrien, med listeadgang), `N` (et navn, valgfrit), `On` (en boolesk kontakt) og `Target` (valgfrit: `model` eller `part`, hvis begge programmer er åbne).
3. Sæt `On` til sand.

Hver gang komponenten beregnes, sendes `G` over og erstatter det, komponenten sendte sidst.

## Sådan virker det her

- **Ét legeme.** Alt, der er synligt i modellen, bliver ét importeret feature, ligesom når du [åbner en .3dm-fil](topic:open-3dm-files).
- **Det skal lukke sig.** PartCraft udfylder små huller og flade åbninger, og det andet program får at vide, hvor mange. Hvis modellen stadig ikke lukker, beholder PartCraft det legeme, den havde, og statuslinjen siger det. Den næste ændring, der lukker sig, opdaterer det.
- **Afslut det, du laver.** I en skitse eller en tegning afvises opdateringer og forsøges igen; de kommer, når du er tilbage i modellen.
- **Fortryd.** Opdateringer, der ligger mindre end to sekunder fra hinanden, deler ét fortrydelsestrin.
- **Gem.** Delfilen gemmer forbindelsen. Kør scriptet igen, efter du har åbnet den, og det samme feature opdateres.

**Kun én vej.** Ændringer her sendes ikke tilbage til det andet program.

## Hvis noget går galt

- **»Ingen ModelCraft- eller PartCraft-vindue tillader det«:** udfør trin 1 i opsætningen.
- **»Studio afviste tokenet«:** Studio er blevet genstartet. Kopiér det nye token, og kør scriptet igen. Til Grasshopper: kør det i Rhino først.
- **»Kan ikke nå CadCraft Studio«:** Studio kører ikke, eller adressen er ændret.
