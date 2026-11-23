---
title: Kontroller denne rammen
summary: Ta de rette stålkomponentene i en sveiset konstruksjon (en kjelke, et stativ, en ramme av rør og profiler), sett utstyret på føttene og opplagrene i gulvet, og se hvor mye av hver komponent og hver sveis som er utnyttet etter AISC 360-16 eller EN 1993. Et hjelpemiddel til en ingeniør har gjennomgått det.
keywords: ramme, sveiset konstruksjon, kjelke, pumpekjelke, konstruksjonsdel, sveis, sveiser, kontroll, AISC 360, EN 1993, utnyttelse, opplager, utstyr, last, hult profil, HSS, RHS, CHS, ingeniør

from: 032e34ee
---

{{ui:Check this frame}} tar de rette stålkomponentene i en sveiset konstruksjon, bygger en ramme av dem, løser den under vekten av stålet og av utstyret du setter på den, og tester hver komponent og hver sveis der komponentene møtes. Én kjøring, én tabell.

:::warning
Det er et **hjelpemiddel til en ingeniør har gjennomgått det**. Det er ikke en godkjenning, og en bestått kontroll er ikke en konstruksjon. Det bruker komponentenes senterlinjer slik de er tegnet, regner hver skjøt som sveiset rundt hele profilet, tar sveisens kateter fra profilets vegg (opptil 8 mm) med mindre du setter det, og kontrollerer ikke bolter, plater, fundamentplater, forankringer, opplegg, blokkskjær, utmatting eller løfting.
:::

## Kjør den

1. Tegn komponentene med {{ui:Structural member}} (profilene kommer fra profiltabellen).
2. Åpne {{ui:Views}} › {{ui:Check this frame}}. Si hvor rammen står (et **opplager** ved hver fot: fast, innspent eller rulle; {{ui:Pinned supports at the feet}} setter ett ved hver laveste komponentende) og hva som står på den (**utstyr**: masse, tyngdepunkt, punktene der det er boltet fast, og en valgfri horisontal skyvkraft).
3. Velg normen: **ASCE 7 + AISC 360-16** eller **EN 1990 + EN 1993**. Sett stålkvaliteten og, for AISC, styrken på sveisemetallet (482.6 MPa er E70).
4. Trykk {{ui:Check}}. {{ui:Save the report as CSV}} skriver alle tabellene, med linjen om at det ikke er gjennomgått først.

Rammen leses i millimeter med delens vertikale akse opp. Opplager og utstyrspunkter skrives inn som x y z i samme ramme, med z som høyden.

En komponentende som lander midt på en annen komponent, deler den der, det samme gjør en fot eller et festepunkt på en komponents linje. En vekt fordeles på festepunktene som et stivt legeme; et tyngdepunkt utenfor føttene, eller en løftekraft i en fot, blir sagt, aldri skjult.

## Hva du får

- Det mest brukte elementet og om noe svikter. Elementer kontrollen ikke kan bedømme (et profil som ikke står i tabellen, et stål uten faktor i normen) telles og nevnes, og telles aldri som bestått.
- En rad per komponent og per sveisegruppe: hvor mye som er utnyttet, den styrende kontrollen og klausulen, og lastkombinasjonen som styrte.
- De samme tabellene i rapporten.

## Hva som kontrolleres

Hule profiler (RHS, SHS, CHS, rør) og I-profiler for strekk, trykk, bøying, skjær og deres samvirke; kilsveiser og fullgjennomsveisede sveiser etter den elastiske vektormetoden. Kompakte vegger i bøying bare for hule profiler; slanke vegger sies som ikke kontrollert. Noen konstanter er skrevet fra normene og ikke sammenlignet med en trykt utgave ennå; rapporten lister hver kilde.

Se [Rammer av stålprofiler](topic:structural-members) for å tegne komponentene og deres kappliste.
