---
title: Skissebetingelser og mål
summary: Alle betingelser og mål en PartCraft-skisse kan ha, hva som velges for hver, symbolet og hvordan den oppfører seg ved løsning.
keywords: betingelser, begrensninger, sammenfallende, horisontal, vertikal, parallell, vinkelrett, tangent, lik, konsentrisk, midtpunkt, fiksér, avstand, horisontal avstand, vertikal avstand, radius, diameter, vinkel, symboler, glyfer
from: 9831e7be
---

Betingelser låser hvordan geometri ligger i forhold til annen geometri. Mål låser størrelser. For å legge til en betingelse velges elementer med Velg-verktøyet ({{key:S}}) og knappen for den velges i høyre panel; for å legge til et mål brukes Mål-verktøyet ({{key:D}}) eller målknappene i høyre panel. Om bruk: [Fullstendig definering av en skisse](topic:relations-dimensions).

«Kurve» nedenfor betyr en sirkel eller en bue. Origo regnes som et punkt.

## Betingelser

| Knapp | Symbol | Velg | Virkning |
|---|---|---|---|
| {{ui:• Sammenfallende}} | • (vises bare når den er valgt eller det er et problem) | To punkter | Punktene møtes |
| {{ui:• Sammenfallende}} | • | Et punkt og en linje | Punktet ligger på linjen (eller forlengelsen av den) |
| {{ui:• Sammenfallende}} | • | Et punkt og en kurve | Punktet ligger på sirkelen eller buen |
| {{ui:H Horisontal}} | H | En linje, eller to punkter | Linjen er vannrett, eller de to punktene er i samme høyde |
| {{ui:V Vertikal}} | V | En linje, eller to punkter | Linjen står loddrett, eller punktene ligger over hverandre |
| {{ui:∥ Parallell}} | ∥ | To linjer | Linjene går i samme retning |
| {{ui:⊥ Vinkelrett}} | ⊥ | To linjer | Linjene møtes i rett vinkel |
| {{ui:T Tangent}} | T | En linje og en kurve | Linjen berører kurven uten å krysse den |
| {{ui:T Tangent}} | T | To kurver | De berører hverandre, utvendig eller innvendig, slik de er tegnet |
| {{ui:T Tangent}} | T | En spline og en linje, bue eller spline som møter en av endene | Splinen forlater den enden i retning av den andre kurven |
| {{ui:= Lik}} | = | To linjer | Samme lengde |
| {{ui:= Lik}} | = | To kurver | Samme radius |
| {{ui:◎ Konsentrisk}} | ◎ | To kurver | Samme sentrum |
| {{ui:◎ Konsentrisk}} | ◎ | Et punkt og en kurve | Punktet ligger i kurvens sentrum |
| {{ui:M Midtpunkt}} | M | Et punkt og en linje | Punktet ligger midt på linjen |
| {{ui:↔ Symmetrisk}} | ↔ | To punkter og en linje | Punktene er speilbilder om linjen (Speil legger til disse) |
| {{ui:⚓ Fiksér}} | ⚓ | Et punkt, en linje, en kurve eller en spline | Holder den nøyaktig der den er nå (for en spline: punktene) |

Linjer her omfatter midtlinjer. Tegning legger til noen betingelser automatisk: fangst til et punkt gjør det sammenfallende, fangst til en kurve legger punktet på den, linjer som er nesten vannrette eller loddrette får H eller V, og et rektangel kommer med de fire hjørnene forbundet, to H og to V.

**Fiksér** er en rask måte å stoppe noe i å bevege seg, men delen kan da ikke følge en målendring et annet sted. Foretrekk mål til origo.

## Mål

| Knapp | Velg | Måler | Vises som |
|---|---|---|---|
| {{ui:Avstand}} | En linje | Lengden | Avstand 40 |
| {{ui:Avstand}} | To punkter | Den rette avstanden mellom dem | Avstand 40 |
| {{ui:Avstand}} | Et punkt og en linje | Avstanden fra punktet til linjen, vinkelrett på den | Avstand 40 |
| {{ui:Avstand}} | To parallelle linjer | Avstanden mellom dem | Avstand 40 |
| {{ui:Horisontal avstand}} | To punkter, eller en linje | Bare avstanden venstre-høyre | Horisontal avstand 40 |
| {{ui:Vertikal avstand}} | To punkter, eller en linje | Bare avstanden opp-ned | Vertikal avstand 40 |
| {{ui:Radius}} | En sirkel eller bue | Radiusen | Radius R10 |
| {{ui:Diameter}} | En sirkel eller bue | Diameteren | Diameter ⌀20 |
| {{ui:Vinkel}} | To linjer som ikke er parallelle | Vinkelen mellom dem, 0 til 180 grader | Vinkel 30° |

Med Mål-verktøyet velger PartCraft typen ut fra hva som klikkes og hvor tallet plasseres:

| Klikk | Resultat |
|---|---|
| En linje | Lengden; for en skrå linje, horisontal hvis tallet plasseres over eller under den, vertikal hvis det er til siden |
| En sirkel | Diameter |
| En bue | Radius |
| To punkter | Avstand; horisontal eller vertikal som for en skrå linje |
| Et punkt og en linje | Avstand fra punktet til linjen |
| To linjer | Vinkel, eller avstand hvis de er parallelle |
| Et punkt og en sirkel | Ingenting: «Disse elementene kan ikke måles sammen.» Mål i stedet til sirkelens sentrumspunkt |

**Forskyvning** (vises som avstand) lages av Forskyv-verktøyet: den holder en kopiert linje parallell i den avstanden, eller en kopiert bue eller sirkel konsentrisk med en radius som er så mye større eller mindre. De andre delene av samme forskyvning får en **O**-betingelse og følger det ene forskyvningsmålet. Se [Splines, trim, forskyvning og andre skissverktøy](topic:sketch-tools).

Målverdier er millimeter (eller grader) og aldri negative. Radius og diameter må være større enn null. Verdien 0 er tillatt for avstander: to punkter 0 fra hverandre er sammenfallende.

## Slik oppfører løsningen seg

- **Minst mulig bevegelse.** Når en verdi endres, flytter løseren geometrien så lite som mulig. En linje som endrer lengde, vokser likt i begge ender hvis ingen av endene er låst.
- **Ingen snuing.** Avstander fra et punkt til en linje, horisontale og vertikale avstander, vinkler og tangens husker hvilken side de ble laget på. Å endre en verdi snur aldri geometrien til den andre siden.
- **Konflikter lar ting være.** Hvis betingelser motsier hverandre, forblir skissen akkurat som den var, og de motstridende blir røde.
- **Overflødige betingelser** (som allerede er gitt av andre) nevnes i statuslinjen («er allerede gitt av andre. Slett den.») og funksjonen bygges likevel, med en advarsel.
- **Tangentskjøter.** Der en avrundingsbue møter linjene sine i et felles endepunkt, løses tangensen i en form som forblir veldefinert der, slik at skisseavrundinger ikke framstår som overdefinerte.

## Ikke tilgjengelig ennå

Kolineære, koradiale og gjennomstikk-betingelser; et punkt på en spline; styrte (referanse-)mål; ordinatmål og buelengdemål; ligninger mellom mål. Bruk Parallell pluss en avstand på 0 for kolineære linjer.
