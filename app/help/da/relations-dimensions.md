---
title: Definér en skitse fuldt med relationer og målsætninger
summary: Tilføj relationer fra højre panel og målsætninger med målsætningsværktøjet, læs farverne under defineret, fuldt defineret og over defineret, og ret en skitse, der er over defineret.
keywords: relationer, begrænsninger, målsætninger, smart målsætning, fuldt defineret, under defineret, over defineret, frihedsgrader, sammenfaldende, vandret, lodret, parallel, vinkelret, tangent, lig med, koncentrisk, midtpunkt, fastlås, konflikt, overflødig
from: e76d047a
---

En skitse er **fuldt defineret**, når hvert punkt og hver størrelse er fastlagt af relationer og målsætninger. En fuldt defineret skitse ændrer sig kun, når du ændrer et tal, så delen opfører sig forudsigeligt, når du redigerer den senere. PartCraft tvinger dig ikke til at definere en skitse fuldt, men viser altid, hvor tæt du er.

## Læs skitsens tilstand

Tilstanden vises de tre steder: chippen øverst til venstre i visningen, meddelelsen øverst i højre panel og flaget i historikken.

| Tilstand | Chip | Geometriens farve | Hvad det betyder |
|---|---|---|---|
| Under defineret | »Under defineret · 3 frihedsgrader« | Blå | Noget geometri kan stadig flyttes. Træk i blå geometri for at se, hvilken vej |
| Fuldt defineret | »Fuldt defineret« | Sort (sort på Papir, lys på Model) | Hvert punkt og hver størrelse er fastlagt |
| Over defineret | »Over defineret« | Rød på de involverede relationer | Nogle relationer strider mod hinanden, eller en er allerede givet af de andre |

Konstruktionsgeometri er grå og stiplet uanset tilstand. Valgte elementer er orange. En frihedsgrad er én måde, noget stadig kan bevæge sig på: et frit punkt har to (venstre-højre og op-ned), en fri cirkel har tre (sit centrum og sin radius).

Forklaringen under meddelelsen i højre panel gentager farverne.

## Tilføj en målsætning

1. Tryk {{key:D}} eller vælg {{ui:Mål}}.
2. Klik på det, der skal måles:
   - **én linje**: dens længde;
   - **én cirkel**: dens diameter; **én bue**: dens radius;
   - **to punkter** (et endepunkt, et centrum, et løst punkt eller origo): afstanden mellem dem;
   - **et punkt og en linje**: afstanden fra punktet til linjen;
   - **to parallelle linjer**: afstanden mellem dem; **to linjer i en vinkel**: vinklen mellem dem.
3. Efter ét element siger statuslinjen »Klik på et andet element, eller klik der, hvor målsætningen skal stå.« Klik på et andet element, eller klik i det tomme rum, hvor du vil have tallet.
4. En talboks åbner med den aktuelle værdi. Skriv størrelsen og tryk {{key:Enter}}. {{key:Esc}} beholder den målte værdi.

**Hvor du placerer tallet, afgør typen** for en skrå linje eller to punkter: placér det over eller under for en vandret afstand, til venstre eller højre for en lodret afstand, og andre steder for den sande (justerede) afstand.

Talboksen accepterer almindelige tal i millimeter eller grader, for eksempel `25`, `12.5` eller `1e3`. Et indledende `⌀`, `Ø` eller `R`, eller et efterstillet `mm` eller `°`, ignoreres. Vinkler er 0 til 180 grader. Regneudtryk som `20+5` accepteres ikke. For at knytte en størrelse til en variabel eller formel, start den med `=`.

Vil du ændre en målsætning senere, dobbeltklik på dens tal i skitsen, eller vælg **Rediger** ved siden af den på listen i højre panel.

:::tip
Du kan også vælge geometri først (Vælg-værktøjet) og vælge en målsætningsknap i højre panel: {{ui:Afstand}}, {{ui:Vandret afstand}}, {{ui:Lodret afstand}}, {{ui:Radius}}, {{ui:Diameter}} eller {{ui:Vinkel}}. Kun de knapper, der passer til valget, vises. Det er måden at give en cirkel en radius i stedet for en diameter.
:::

## Tilføj en relation

Relationer tilføjes fra højre panel, ikke med et værktøj.

1. Tryk {{key:S}} for Vælg.
2. Klik på ét element, og derefter {{key:Shift}}+klik på et andet, hvis relationen kræver to. Origo kan også vælges.
3. Højre panel siger »Valgt: linje l3, punkt p1« og viser en knap for hver relation, der passer, for eksempel {{ui:∥ Parallel}} eller {{ui:• Sammenfaldende}}.
4. Vælg knappen. Skitsen løses med det samme.

Hvis ingen relation passer, siger panelet: »Ingen relation passer til dette valg. Vælg ét eller to elementer (Shift+klik tilføjer).«

Hele listen over relationer, hvad hver kræver, og hvad den gør, står i [Skitserelationer og målsætninger](topic:sketch-relations).

Relationer vises i skitsen som små symboler ved siden af geometrien (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Sammenfaldende-prikker er skjult, medmindre geometrien er valgt, eller relationen er i problemer. Klik på et symbol for at vælge relationen.

## Et arbejdseksempel: en L-formet profil

1. Skitsér på **Frontplan**. Med linjeværktøjet starter du i origo, klikker på seks hjørner af et L og slutter igen i origo. Kæden slutter af sig selv, når du klikker på det første punkt.
2. Linjer tegnet tæt på vandrette eller lodrette har allerede H- og V-relationer, undtagen den sidste: en linje, der slutter i et eksisterende punkt, får ingen automatisk relation. Tryk {{key:S}}, klik på den sidste linje og vælg {{ui:V Lodret}} i højre panel. Chippen siger »Under defineret · 4 frihedsgrader«.
3. Tryk {{key:D}}. Klik på bundlinjen, klik under den, skriv `80` og tryk {{key:Enter}}.
4. Klik på venstre linje, klik til venstre for den, skriv `60` og tryk {{key:Enter}}.
5. Mål den øverste korte linje til `20` og den indre lodrette linje til `45` på samme måde.
6. Chippen siger nu **Fuldt defineret**, og hele L bliver sort.

## Ret en over defineret skitse

Når en ny relation eller målsætning strider mod de andre, flytter PartCraft ikke noget. Geometrien bliver præcis, som den var, de involverede relationer bliver røde, og statuslinjen navngiver dem:

- »Over defineret: Vandret, Afstand 40 kan ikke opfyldes samtidigt. Fortryd, eller slet en af dem.« Relationerne er i konflikt.
- »Over defineret: Parallel er allerede givet. Slet den.« Relationen tilføjer intet: de andre tvinger den allerede. (En rektangels sider er for eksempel allerede parallelle.)

Sådan retter du det:

1. Tryk {{key:Mod+Z}} for at fortryde den sidste ændring, eller
2. Find det røde element i listen **Relationer og målsætninger** i højre panel (en gruppe, der indeholder det, er åben og rød), og vælg **Slet** ved siden af det. Du kan også klikke på dets symbol eller tal i skitsen og trykke {{key:Delete}}.

:::note
Der er ingen styrede (referencemålsætninger) i denne version. En målsætning, der kun ville vise en størrelse, de andre relationer allerede fastlægger, behandles som over defineret. Læs i stedet størrelserne i panelet: vælg en linje og se på målsætningsknapperne, eller kontrollér delens fakta, efter du har ekstruderet.
:::

En over defineret skitse med en reel konflikt får featuren, der bruger den, til at fejle (»Over defineret: 1 relation kan ikke opfyldes.«), og historikken markerer den **⚠ fejl**. En skitse, der kun er overflødig, bygges stadig, med en ⚠ advarsel.

## Træk for at finde det frie

I Vælg kan du trække i et blåt punkt eller en blå linje. Løseren flytter den så lidt som muligt, mens den holder alle relationer. Hvis et træk ville bryde en relation, springer geometrien tilbage. Det er den hurtigste måde at se, hvilken målsætning der stadig mangler.

## Relationslisten

Når intet er valgt, viser højre panel **Relationer og målsætninger**. Hver række har:

- **Rediger** (kun målsætninger): åbner talboksen;
- **Vælg**: vælger den i skitsen;
- **Slet**: fjerner den.

Relationer af samme type, der optræder mere end én gang, deler én række, for eksempel »Sammenfaldende × 5« for et rektangel knyttet til origo. Klik på rækken for at åbne den. Hver relation står opført efter, hvad den binder (»punkt p2, punkt p4«), med sin egen **Vælg** og **Slet**. Selve rækken har:

- **Vælg**: vælger dem alle i skitsen;
- **Slet alle**: fjerner dem alle i ét trin ({{key:Mod+Z}} bringer dem tilbage).

En gruppe, der indeholder en over defineret relation, åbner sig selv, med sit navn i rødt. Målsætninger står altid én pr. række, med deres værdier.

Med geometri valgt viser listen kun **Relationer på valget**.
