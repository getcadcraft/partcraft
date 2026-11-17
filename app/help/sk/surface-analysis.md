---
title: Pruhy zebry a zakrivenie
summary: Skontrolujte, ako plynulo na seba nadväzujú plochy ľubovoľnej súčiastky, pomocou zebrovitých pruhov, ktoré sledujú pohľad, alebo farebnej mapy strednej krivosti z ponuky Pohľady.
keywords: zebra, zebrovité pruhy, odrazové čiary, zakrivenie, mapa zakrivenia, stredné zakrivenie, kvalita plochy, spojitosť, dotyčnica, g1, g2, hladký, zlom, zvýrazňovacie čiary
from: 78fed4c3
---

Dva rýchle pohľady na to, ako hladké sú plochy súčiastky, na ľubovoľnej súčiastke v pracovnom priestore Design (pracovný priestor Form má vlastný nástroj pre tvar, ktorý upravujete: pozri [Voľné tvary pomocou Form](topic:form-surfaces)).

## Zebrovité pruhy

Otvorte {{ui:Pohľady}} a vyberte {{ui:Zebrovité pruhy}}. Súčiastka zobrazí odraz pruhovaného svetla, tak ako by ho zobrazila leštená plocha:

- Kde sa dve plochy stýkajú **dotyčnicovo** (zaoblenie na rovine, hladká plocha Gordon), pruhy pokračujú cez spoj s ohybom.
- Kde sa stretávajú v **zlome**, pruhy sa prerušia a skočia.
- Kde sa zhoduje aj zakrivenie (G2), pruhy plynú bez akéhokoľvek zalomenia.

Otáčajte pohľad (potiahnutím alebo stenou kocky pohľadu): pruhy sa prekreslia z nového smeru. **Pruhy** určujú, koľko ich je.

## Zakrivenie

Vyberte {{ui:Zakrivenie}} v tej istej ponuke. Súčiastka je zafarbená podľa **strednej krivosti**: modrá tam, kde je dutá (konkávna), bledá tam, kde je rovná, červená tam, kde je vypuklá (konvexná). Karta uvádza, pri akom zakrivení farby dosiahnu plnú intenzitu, v 1/mm a ako polomer. Ostré hrany sa počítajú ako veľmi zakrivené, preto sa zvýrazňujú silno; pozrite sa na plochy medzi nimi.

## Karta

Obe možnosti otvoria kartu analýzy v ľavom dolnom rohu pohľadu, ktorá obsahuje aj [analýzu úkosu](topic:draft-analysis). Prepínajte medzi nimi pomocou **Zobraziť**. Opätovným výberom otvorenej možnosti v {{ui:Pohľady}}, v {{ui:Zavrieť}} alebo v {{key:Esc}} ju vypnete. Farby sledujú súčiastku pri jej zmenách; nič sa v súčiastke neukladá.
