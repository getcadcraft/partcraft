---
title: Solid FEM: en spenningskontroll av én del
summary: Slå på tillegget Solid FEM, lag nett for en del, velg fastholdte flater og en last i 3D-visningen, løs, og les forskyvning og von Mises-spenning på modellen.
keywords: solid fem, endelig element, fea, spenning, von mises, forskyvning, fastholdt flate, last, trykk, tyngdekraft, egenfrekvens, svingeform, nett, tillegg
from: 8b7e6ba2
---

## Hva oppgaven går ut på

Kontroller én volumdel under en last: hvor den beveger seg, og hvor spenningen er høyest. Studien er lineær og elastisk, så den er et kontrollhjelpemiddel; en ingeniør gjennomgår resultatene.

## Steg

1. Velg {{ui:Innstillinger}} › {{ui:Tillegg}} og slå på {{ui:Solid FEM}} (den er av inntil det slås på). Åpne fanen {{ui:Solid FEM}} i høyre panel.
2. Under {{ui:Materiale}} velg ett, eller {{ui:Egendefinert}} og skriv inn Poissons tall, tetthet og flytegrense.
3. Trykk {{ui:Legg til fastholdte flater}}, klikk flatene som holdes fast i 3D-visningen, og trykk deretter {{ui:Ferdig med å velge}}.
4. Legg til en last med {{ui:Legg til kraft}}, {{ui:Legg til trykk}} eller {{ui:Legg til tyngdekraft}}, og velg flatene for den på samme måte.
5. Trykk {{ui:Lag nett for delen}}, og deretter {{ui:Løs}}. Velg {{ui:Egenfrekvenser}} under {{ui:Studie}} først hvis frekvenser ønskes.
6. Les {{ui:Resultater}} og {{ui:Advarsler}}, og trykk deretter {{ui:Vis på modellen}} for å tegne von Mises-spenning, forskyvning eller en svingeform; {{ui:Fjern plottet}} fjerner det.

## Merknader

- Siden løser opp til et fast antall elementer; statuslinjen sier fra når elementstørrelsen er for fin.
- Spenning ved fastholdte flater, lastpunkter og skarpe hjørner øker når nettet forfines. Forfin og sammenlign før en topp brukes.
- Hver endring er ett angretrinn, og innstillingene lagres i delfilen.
- For flyt- og kontaktstudier, se [Kontroller spenning og utbøyning](topic:simulation).
