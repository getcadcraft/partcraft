---
title: Solid FEM: 'n spanningstoets van een onderdeel
summary: Skakel die Solid FEM-byvoeging aan, maas 'n onderdeel, kies vaste vlakke en 'n las in die 3D-aansig, los op, en lees verplasing en von Mises-spanning op die model.
keywords: solid fem, eindige element, fea, spanning, von mises, verplasing, vaste vlak, las, druk, swaartekrag, natuurlike frekwensie, modusvorm, maas, byvoeging
from: 8b7e6ba2
---

## Wat jy sal doen

Toets een soliede onderdeel onder 'n las: waar dit beweeg en waar die spanning die hoogste is. Die studie is lineêr en elasties, so dit is 'n nasienhulpmiddel; jou ingenieur hersien die resultate.

## Stappe

1. Kies {{ui:Instellings}} › {{ui:Byvoegings}} en skakel {{ui:Solid FEM}} aan (dit is af totdat jy dit doen). Maak die {{ui:Solid FEM}}-oortjie in die regterpaneel oop.
2. Kies onder {{ui:Materiaal}} een, of {{ui:Pasgemaak}} en tik Poisson-verhouding, digtheid en vloeispanning in.
3. Druk {{ui:Voeg vaste vlakke by}}, klik die vlakke wat in die 3D-aansig vasgehou word, en druk dan {{ui:Klaar kies}}.
4. Voeg 'n las by met {{ui:Voeg krag by}}, {{ui:Voeg druk by}} of {{ui:Voeg swaartekrag by}}, en kies die vlakke daarvan op dieselfde manier.
5. Druk {{ui:Maas die onderdeel}}, dan {{ui:Los op}}. Kies eers {{ui:Natuurlike frekwensies}} onder {{ui:Studie}} as jy frekwensies wil hê.
6. Lees {{ui:Resultate}} en {{ui:Waarskuwings}}, en druk dan {{ui:Wys op die model}} om von Mises-spanning, verplasing of 'n modusvorm te teken; {{ui:Verwyder die plot}} haal dit weg.

## Notas

- Die bladsy los op tot 'n vaste aantal elemente; die statuslyn sê wanneer jou elementgrootte te fyn is.
- Spanning by vaste vlakke, lastpunte en skerp hoeke groei soos die maas verfyn word. Verfyn en vergelyk voordat jy op 'n piek staatmaak.
- Elke verandering is een ontdoen-stap, en die instellings word in die onderdeellêer gestoor.
- Vir vloei- en kontakstudies sien [Toets spanning en buiging](topic:simulation).
