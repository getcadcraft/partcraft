---
title: Skitserelationer og mål
summary: Alle relationer og mål en PartCraft-skitse har, hvad du vælger for hver, dens symbol, og hvordan det opfører sig, når det løses.
keywords: relationer, begrænsninger, sammenfaldende, vandret, lodret, parallel, vinkelret, tangent, lig med, koncentrisk, midtpunkt, fastlås, afstand, vandret afstand, lodret afstand, radius, diameter, vinkel, symboler, glyffer
from: 9831e7be
---

Relationer fastlægger, hvordan geometri ligger i forhold til anden geometri. Mål fastlægger størrelser. For at tilføje en relation vælger du elementer med {{ui:Vælg}}-værktøjet ({{key:S}}) og vælger dens knap i højre panel; for at tilføje et mål bruger du {{ui:Mål}}-værktøjet ({{key:D}}) eller målknapperne i højre panel. Sådan arbejder du med dem: [Fastlæg en skitse fuldt](topic:relations-dimensions).

»Kurve« nedenfor betyder en cirkel eller en bue. Origo tæller som et punkt.

## Relationer

| Knap | Symbol | Vælg | Effekt |
|---|---|---|---|
| {{ui:• Sammenfaldende}} | • (vises kun når valgt eller i problemer) | To punkter | Punkterne mødes |
| {{ui:• Sammenfaldende}} | • | Et punkt og en linje | Punktet ligger på linjen (eller dens forlængelse) |
| {{ui:• Sammenfaldende}} | • | Et punkt og en kurve | Punktet ligger på cirklen eller buen |
| {{ui:H Vandret}} | H | En linje, eller to punkter | Linjen er vandret, eller de to punkter er i samme højde |
| {{ui:V Lodret}} | V | En linje, eller to punkter | Linjen er lodret, eller punkterne står over hinanden |
| {{ui:∥ Parallel}} | ∥ | To linjer | Linjerne løber samme vej |
| {{ui:⊥ Vinkelret}} | ⊥ | To linjer | Linjerne mødes i en ret vinkel |
| {{ui:T Tangent}} | T | En linje og en kurve | Linjen rører kurven uden at krydse den |
| {{ui:T Tangent}} | T | To kurver | De rører hinanden, udvendigt eller indvendigt, som tegnet |
| {{ui:T Tangent}} | T | En spline og en linje, bue eller spline, der møder en af dens ender | Splinen forlader den ende i den anden kurves retning |
| {{ui:= Lig med}} | = | To linjer | Samme længde |
| {{ui:= Lig med}} | = | To kurver | Samme radius |
| {{ui:◎ Koncentrisk}} | ◎ | To kurver | Samme centrum |
| {{ui:◎ Koncentrisk}} | ◎ | Et punkt og en kurve | Punktet ligger i kurvens centrum |
| {{ui:M Midtpunkt}} | M | Et punkt og en linje | Punktet ligger midt på linjen |
| {{ui:↔ Symmetrisk}} | ↔ | To punkter og en linje | Punkterne er spejlbilleder om linjen (Spejl tilføjer disse) |
| {{ui:⚓ Fastlås}} | ⚓ | Et punkt, en linje, en kurve eller en spline | Holder det præcis, hvor det er nu (en spline: dens punkter) |

Linjer her omfatter midterlinjer. Tegning tilføjer nogle relationer for dig: fangning til et punkt gør det sammenfaldende, fangning til en kurve placerer punktet på den, næsten vandrette eller lodrette linjer får H eller V, og et rektangel kommer med sine fire hjørner forbundet, to H og to V.

**Fastlås** er en hurtig måde at stoppe noget i at bevæge sig, men delen kan så ikke følge en målændring et andet sted. Foretræk mål til origo.

## Mål

| Knap | Vælg | Måler | Vises som |
|---|---|---|---|
| {{ui:Afstand}} | En linje | Dens længde | Afstand 40 |
| {{ui:Afstand}} | To punkter | Den lige afstand mellem dem | Afstand 40 |
| {{ui:Afstand}} | Et punkt og en linje | Afstanden fra punktet til linjen, vinkelret på den | Afstand 40 |
| {{ui:Afstand}} | To parallelle linjer | Mellemrummet mellem dem | Afstand 40 |
| {{ui:Vandret afstand}} | To punkter, eller en linje | Kun afstanden venstre-højre | Vandret afstand 40 |
| {{ui:Lodret afstand}} | To punkter, eller en linje | Kun afstanden op-ned | Lodret afstand 40 |
| {{ui:Radius}} | En cirkel eller bue | Dens radius | Radius R10 |
| {{ui:Diameter}} | En cirkel eller bue | Dens diameter | Diameter ⌀20 |
| {{ui:Vinkel}} | To linjer, der ikke er parallelle | Vinklen mellem dem, 0 til 180 grader | Vinkel 30° |

Med {{ui:Mål}}-værktøjet vælger PartCraft typen ud fra, hvad du klikker, og hvor du placerer tallet:

| Du klikker | Du får |
|---|---|
| En linje | Dens længde; for en skrå linje, vandret hvis tallet står over eller under den, lodret hvis det står ved siden af |
| En cirkel | Diameter |
| En bue | Radius |
| To punkter | Afstand; vandret eller lodret som for en skrå linje |
| Et punkt og en linje | Afstand fra punktet til linjen |
| To linjer | Vinkel, eller afstanden hvis de er parallelle |
| Et punkt og en cirkel | Intet: »Disse elementer kan ikke måles sammen.« Mål i stedet til cirklens centrumpunkt |

**Forskydning** (vist som afstanden) laves af {{ui:Forskyd}}-værktøjet: det holder en kopieret linje parallel i den afstand, eller en kopieret bue eller cirkel koncentrisk med en radius, der er lige så meget større eller mindre. De øvrige dele af samme forskydning har en **O**-relation og følger det ene forskydningsmål. Se [Splines, beskær, forskyd og andre skitseværktøjer](topic:sketch-tools).

Målværdier er millimeter (eller grader) og aldrig negative. Radius og diameter skal være større end nul. Værdien 0 er tilladt for afstande: to punkter 0 fra hinanden er sammenfaldende.

## Sådan opfører løsning sig

- **Mindst mulig bevægelse.** Når en værdi ændres, flytter løseren geometrien så lidt som muligt. En linje, hvis længde ændres, vokser lige meget i begge ender, hvis ingen af dem holdes fast.
- **Ingen vending.** Afstande fra et punkt til en linje, vandrette og lodrette afstande, vinkler og tangens husker, hvilken side de blev lavet på. En ændring af en værdi vender aldrig geometrien over til den anden side.
- **Konflikter lader ting være.** Hvis relationer modsiger hinanden, forbliver skitsen præcis som den var, og de modstridende bliver røde.
- **Overflødige relationer** (allerede givet af andre) angives i statuslinjen (»er allerede givet. Slet den.«), og featuren bygges stadig, med en advarsel.
- **Tangentsamlinger.** Hvor en afrundingsbue møder sine linjer i et fælles endepunkt, løses tangens i en form, der forbliver veldefineret der, så skitseafrundinger ikke fremstår som overdefinerede.

## Ikke tilgængeligt endnu

Kollineære, koradiale og gennemstik-relationer; et punkt på en spline; styrede (reference-) mål; koordinat- og buelængdemål; ligninger mellem mål. Brug Parallel og en afstand på 0 for kollineære linjer.
