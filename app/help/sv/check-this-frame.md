---
title: Kontrollera den här ramen
summary: Ta stålprofilerna i en svetsad konstruktion (en skid, ett stativ, en ram av rör och profiler), ställ utrustningen på fötterna och stöden på golvet och se hur mycket av varje profil och varje svets som används enligt AISC 360-16 eller EN 1993. Ett hjälpmedel tills en ingenjör har granskat den.
keywords: ram, svetsad konstruktion, skid, pumpskid, profilstång, svets, svetsar, kontroll, AISC 360, EN 1993, utnyttjande, utnyttjandegrad, stöd, utrustning, last, ihåligt profil, HSS, RHS, CHS, ingenjör
from: 032e34ee
---

{{ui:Check this frame}} tar de raka stålprofilerna i en svetsad konstruktion, bygger en ram av dem, löser den under vikten av stålet och av utrustningen du placerar på den, och prövar varje profil och varje svets där profiler möts. En körning, en tabell.

:::warning
Det är ett **hjälpmedel tills en ingenjör har granskat det**. Det är inget godkännande, och ett godkänt resultat är ingen konstruktion. Det använder profilernas mittlinjer så som de ritats, behandlar varje skarv som svetsad runt hela profilen, tar filens ben från profilens vägg (upp till 8 mm) om du inte anger något annat, och kontrollerar inte bultar, plåtar, bottenplattor, ankare, bärighet, blockskjuvning, utmattning eller lyft.
:::

## Kör det

1. Rita profilerna med {{ui:Structural member}} (profilerna kommer från profiltabellen).
2. Öppna {{ui:Views}} › {{ui:Check this frame}}. Ange var ramen står (ett **stöd** vid varje fot: ledad, fast eller rulle; {{ui:Pinned supports at the feet}} sätter ett vid varje lägsta profilände) och vad som står på den (**utrustning**: massa, tyngdpunkt, punkterna där den bultas fast, och en valfri horisontell tryckkraft).
3. Välj koden: **ASCE 7 + AISC 360-16** eller **EN 1990 + EN 1993**. Ange stålsort och, för AISC, svetsmetallens hållfasthet (482.6 MPa är E70).
4. Tryck {{ui:Check}}. {{ui:Save the report as CSV}} skriver varje tabell, med raden om att den inte granskats överst.

Ramen läses i millimeter med delens vertikala axel uppåt. Stöd- och utrustningspunkter skrivs som x y z i samma koordinatsystem, med z som höjd.

En profilände som hamnar mitt på en annan profil delar den där, liksom en fot eller en bultpunkt på en profils linje. En vikt fördelas över bultpunkterna som en stel kropp; en tyngdpunkt utanför fötterna, eller en lyftkraft i en fot, anges och döljs aldrig.

## Vad du får

- Det mest utnyttjade objektet och om något fallerar. Objekt som kontrollen inte kan bedöma (en profil som inte finns i tabellen, ett stål utan faktor i koden) räknas och namnges, aldrig som godkända.
- En rad per profil och per svetsgrupp: hur mycket som används, den styrande kontrollen och klausulen, och lastkombinationen som styrde.
- Samma tabeller i rapporten.

## Vad som kontrolleras

Ihåliga profiler (RHS, SHS, CHS, rör) och I-profiler för drag, tryck, böjning, skjuvning och deras samverkan; fil- och genomsvetsar med den elastiska vektormetoden. Kompakta väggar kontrolleras vid böjning endast för ihåliga profiler; slanka väggar anges som ej kontrollerade. Vissa konstanter har skrivits av standarderna och ännu inte jämförts med en tryckt kopia; rapporten anger varje källa.

Se [Ramar av stålprofiler](topic:structural-members) för att rita profilerna och deras kapplista.
