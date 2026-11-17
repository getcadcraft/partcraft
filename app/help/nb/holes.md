---
title: Bor hull og forsenkinger i skissepunkter
summary: Sett punkter i en skisse på en flate, lag enkle, forsenkede, nedsenkede eller gjengede (ISO-metriske) hull i hvert punkt, angi diameter og dybde, og rett opp hull som bores feil vei.
keywords: hull, hullveiviser, bore, modellert gjenge, 3D-printing, forsenkning, cbore, nedsenking, csink, gjenget hull, gjenge, borediameter, gjennomgående, blindhull, boltehull, punkter, hullsentre
from: 8e1eef83
---

{{ui:Hull}} borer ett hull i hvert løse punkt i en skisse. Et løst punkt er et laget med punktverktøyet, ikke enden av en linje eller sentrum av en sirkel.

## Bor hull i en flate

1. Klikk på flaten som skal bores inn i, og velg deretter {{ui:Skisse på denne flaten}}.
2. Trykk {{key:P}} og klikk der hvert hull skal være. Mål punktene fra kantene eller origo hvis posisjonen betyr noe (se [Gi en skisse full definisjon](topic:relations-dimensions)).
3. Velg {{ui:Avslutt}}.
4. Velg {{ui:Hull}}.

Hullene går gjennom delen, 6 mm på tvers. Den høyre panelet viser **Hull**: hvor mange som ble laget, «ett per skissepunkt».

**Ett hull, raskt:** klikk på flaten der hullet skal være, og velg {{ui:Hull her}} i panelet til høyre. PartCraft legger til en skisse på flaten med ett punkt der du klikket, og et Hull gjennom delen, i ett steg. Skriv inn et tall med en gang og trykk {{key:Enter}} for diameteren. For å plassere det nøyaktig, åpne den nye skissen og mål punktet.

**Hvilken skisse som brukes:** skissen du nettopp lukket, eller den valgte; ellers den nyeste ubrukte skissen som har løse punkter. Finnes det ingen, står det: «Lag først en skisse med punkter der hullene skal være (Skisse på en flate, deretter Punkt).»

## Innstillinger

| Innstilling | Valg | Standard |
|---|---|---|
| **Type** | Enkel, Forsenkning, Nedsenkning, Gjenget (ISO-metrisk) | Enkel |
| **Diameter (mm)** | Hullets diameter | 6 |
| **Gjennom alt** | Avkrysset: rett gjennom delen. Fjern krysset for et blindhull | Avkrysset |
| **Dybde (mm)** | Vises når Gjennom alt er fjernet | 10 |
| **Forsenkning ⌀** | Vises for Forsenkning: diameteren på den bredere utsparingen | 11 |
| **Forsenkningsdybde** | Vises for Forsenkning | 6 |
| **Omvendt retning** | Borer til andre siden av skissplanet | Av |

Hull bores inn i materialet, rett på skissplanet. Et blindhulls dybde måles fra skissplanet; bunnen er flat.

## Et forsenket boltehull

1. Lag hullene som over.
2. Sett **Type** til **Forsenkning**.
3. Sett **Diameter (mm)** til `6.6` (klaring for en M6-bolt), **Forsenkning ⌀** til `11` og **Forsenkningsdybde** til `6.5`.

Forsenkningen må være bredere enn hullet («Forsenkningen må være bredere enn hullet.») og, for et blindhull, grunnere enn det («Forsenkningen må være grunnere enn hullet.»).

## En boltesirkel

For hull som er jevnt fordelt rundt et senter, lag **ett** hull og mønstre det: velg Hull-funksjonen, og velg deretter {{ui:Sirkulært}} (se [Mønster- og speilfunksjoner](topic:patterns-mirror)). Mønsteret følger når du endrer hullets størrelse.

## Når hull går feil vei

- «Det er ingenting å bore på den siden av skissen. Prøv å reversere retningen.» Skissen ligger på den fjerne siden av materialet. Kryss av for **Omvendt retning**.
- «Sett skissepunkter der hullene skal være (punktverktøyet), og lag deretter hullet.» Skissen har ingen løse punkter. Linjeender og sirkelsentre teller ikke.
- «Det er ennå ingenting å bore i.» Et hull trenger et volumlegeme. Lag en utbulning først.

## Hull i sammenstillinger

Hvert hull har en akse. I en sammenstilling kan **Sentrer på** plassere et ledd på et hulls akse, listet som «Hull1, hull 2», slik at en stift- eller boltdel flukter med det. Se [Bygg en sammenstilling](topic:build-assembly).

## Forsenkede hull

Sett **Type** til **Nedsenkning**, deretter **Nedsenkningsdiameter ⌀** (ved overflaten) og **Nedsenkningsvinkel**: 90° (ISO-metriske skruer med flat hode) eller 82° (tommeskruer). Ta nedsenkningsdiameteren fra skruprodusentens data (litt mer enn skruehodets diameter). Konusens flate kalles «nedsenkning» i panelene.

## Gjengede hull

Sett **Type** til **Gjenget (ISO-metrisk)** og velg **Gjenge**, M2 til M24 grov. Hullet bores til gjengeboret størrelse fra tabellen nedenfor (nominell diameter minus stigning, til borserien, slik ISO 2306 viser for en 6H-gjenge); boksen **Diameter (mm)** brukes ikke. For et blindhull setter **Gjengedybde (mm)** hvor dypt gjengen går.

| Gjenge | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Stigning | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Gjengebor ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Gjengen er først **kosmetisk**: modellen har det borede hullet, visningen tegner gjengens ytre diameter som stiplede sirkler, og tegningsarket bærer merknaden som en note, for eksempel «4× M8×1.25 - 6H, gjennomgående gjenge». STEP eksporterer bare det borede hullet.

Huk av for **Modellert** for å skjære den virkelige spiralgjengen inn i hullet, for 3D-printing. **Klaring (mm)** gjør det like mye større rundt om, slik at en printet bolt passer: 0,1 til 0,2 mm passer for de fleste skrivere. Merknaden ender da med «(modellert)». Se [Gjenger på aksler og boringer, tegnet eller modellert](topic:threads), som også legger gjenger på aksler.

:::note
Motborede hull, tommegjenger og rørgjenger er ikke bygget ennå.
:::
