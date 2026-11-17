---
title: Solid FEM: en hållfasthetskontroll av en del
summary: Aktivera tillägget Solid FEM, nätindela en del, välj fasta ytor och en last i 3D-vyn, lös och läs förskjutning och von Mises-spänning på modellen.
keywords: solid fem, finita element, fea, spänning, von mises, förskjutning, fast yta, last, tryck, gravitation, egenfrekvens, egenform, nät, tillägg
from: 8b7e6ba2
---

## Vad du gör

Kontrollera en solid del under en last: var den rör sig och var spänningen är högst. Studien är linjär och elastisk, så den är ett kontrollstöd; din ingenjör granskar resultaten.

## Steg

1. Välj {{ui:Inställningar}} › {{ui:Tillägg}} och slå på {{ui:Solid FEM}} (den är av tills du gör det). Öppna fliken {{ui:Solid FEM}} i högerpanelen.
2. Under {{ui:Material}} väljer du ett, eller {{ui:Eget}} och skriver Poissons tal, densitet och sträckgräns.
3. Tryck på {{ui:Lägg till fasta ytor}}, klicka på ytorna som hålls fast i 3D-vyn och tryck sedan på {{ui:Klar med val}}.
4. Lägg till en last med {{ui:Lägg till kraft}}, {{ui:Lägg till tryck}} eller {{ui:Lägg till gravitation}} och välj dess ytor på samma sätt.
5. Tryck på {{ui:Nätindela delen}} och sedan på {{ui:Lös}}. Välj {{ui:Egenfrekvenser}} under {{ui:Studie}} först om du vill ha frekvenser.
6. Läs {{ui:Resultat}} och {{ui:Varningar}} och tryck sedan på {{ui:Visa på modellen}} för att rita von Mises-spänning, förskjutning eller en egenform; {{ui:Ta bort visningen}} tar bort den.

## Noteringar

- Sidan löser upp till ett fast antal element; statusraden säger när din elementstorlek är för fin.
- Spänningen vid fasta ytor, lastpunkter och skarpa hörn ökar när nätet förfinas. Förfina och jämför innan du litar på en topp.
- Varje ändring är ett ångra-steg, och inställningarna sparas i delfilen.
- För flytning- och kontaktstudier se [Kontrollera spänning och utböjning](topic:simulation).
