---
title: Kaders van staalprofielen
summary: Plaats staalprofielen langs de lijnen van een of meer schetsen om een gelast kader te maken: verstek- of stompe hoeken, staven op maat gesneden waar ze samenkomen, eindkappen, knoopplaten en een snijlijst met lengtes en eindhoeken.
keywords: lasconstructie, constructief element, kader, staalkader, buis, vierkante buis, hss, rhs, shs, pijp, chs, breedflens, i-profiel, w-profiel, ipe, hea, heb, u-profiel, upn, hoekprofiel, verstek, stompe verbinding, coping, eindkap, knoopplaat, snijlijst
from: 59071e5a
---

Een **Constructief element** plaatst een staalprofiel langs elke lijn van de schetsen die u kiest. Teken het kader als lijnen (elke lijn is één element), kies daarna het profiel: de elementen worden gebouwd, hun hoeken worden bijgesneden en verlengd, en een snijlijst zegt hoe lang elk stuk moet zijn en onder welke hoek het moet worden gesneden.

## Een kader maken

1. Teken het kader als lijnen in een schets, bijvoorbeeld een rechthoek op het bovenaanzichtvlak. Lijnen die als hulpgeometrie zijn gemarkeerd, worden weggelaten.
2. Met de schets geselecteerd, kiest u {{ui:Meer}} › {{ui:Constructief element}}. Elke lijn van de schets krijgt een element.
3. Kies in het paneel de **Familie** en het **Formaat** van het profiel. De families zijn de AISC-tabellen (W, S, C, L, HSS-buizen, Pijp) en EN 10365 (IPE, HEA, HEB, UPN).

### Een kader in 3D

Lijnen uit meerdere schetsen vormen samen één kader: een bovenrechthoek die op een vlak erboven is getekend en de poten die op rechtopstaande vlakken zijn getekend, komen in 3D aan hun uiteinden samen. Zet onder **Langs de lijnen van** in het paneel een vinkje bij elke schets wiens lijnen de elementen volgen. Uiteinden die binnen een micrometer samenkomen, worden verbonden.

## Het profiel op zijn lijn zetten

- **Draaien (°)** draait het profiel om zijn lijn. Een balk staat met zijn hoogte rechtop (bij een verticaal element wijst de hoogte naar voren).
- **Op de lijn** kiest welk punt van het profiel op de lijn ligt: het midden, of een hoek of het midden van een zijde van de omtrek van het profiel. "Onderste midden" zet een kader bovenop het schetsvlak in plaats van er doorheen.

## Hoeken en verbindingen

| Waar elementen samenkomen | Wat er gebeurt |
|---|---|
| Twee elementen eind-op-eind, **Hoeken: Verstek** | Beide worden op het vlak halverwege tussen hen gesneden, zoals bij een schilderijlijst |
| Twee elementen eind-op-eind, **Hoeken: Stomp** | Het eerste element loopt door tot het verre vlak van het tweede; het tweede wordt recht gesneden op het nabije vlak van het eerste |
| Een element eindigt op het midden van een ander (een T) | Het wordt op maat gesneden tegen de buitenkant van het andere element |
| Drie of meer eindigen in één punt | Het eerste loopt recht door voorbij de anderen; de anderen worden op maat gesneden tegen dat element |

Het eerste element is het element waarvan de lijn het eerst komt: lijnen behouden de volgorde waarin ze zijn getekend, schets voor schets, in de volgorde waarin de schetsen zijn aangevinkt.

## Eindkappen en knoopplaten

- **Eindkappen** sluiten elk vrij uiteinde met een plaat van de omtrek van het profiel, met de dikte die u instelt, buiten het uiteinde.
- **Knoopplaten** zetten een driehoekige plaat in elke hoek waar twee elementen onder een hoek samenkomen: **Knoopplaatmaat** langs elk element vanaf de hoek, **Knoopplaatdikte** dwars erop, gecentreerd op het vlak van de hoek.

## De snijlijst

Het paneel toont elk stuk, met identieke stukken gegroepeerd: het profiel, de lengte (van lang punt tot lang punt, zoals u het op de zaag afmeet), hoe elk uiteinde is gesneden (recht, een hoek ten opzichte van recht, of op maat gesneden), en welke elementen het zijn. Eindkappen en knoopplaten staan erin met hun maten. {{ui:De snijlijst opslaan (CSV)}} slaat die op voor een spreadsheet.

Een element dat op maat is gesneden tegen een buis met afgeronde hoeken, reikt een beetje in de hoekstraal van die buis, dus de lengte tot het lange punt is een paar millimeter meer dan de tussenruimte tussen de vlakken.

## Beperkingen

- Elementen volgen alleen rechte lijnen; bogen en splines in de schets worden weggelaten.
- De verbindingen zijn gesneden, niet gelast: er worden geen lasnaden getekend, en het kader is één volume.
- De profielen worden getekend uit de maten van de tabel: W-profielen met hun wortelafronding, S-profielen en U-profielen met evenwijdige flenzen, buizen met hoekstralen. Gaten, uiteindevoorbereidingen en lasopeningen worden niet voor u gemaakt.
- Constructieve elementen worden gebouwd door de meshkernel. Met de exacte kernel aan (alleen voor ontwikkelaars) melden ze dat en worden ze niet gebouwd.
