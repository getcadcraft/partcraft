---
title: Rotácia sústruženého dielu
summary: Nakreslite polovicu profilu vedľa stredovej čiary, otočte ho na okrúhly diel, zvoľte os a uhol a na drážky použite Rotačné vyrezanie.
keywords: rotácia, rotačný výstupok, rotačné vyrezanie, sústružený diel, sústruh, hriadeľ, os, stredová čiara, drážka, uhol, rotačný rez
from: 593b6929
---

{{ui:Revolve}} otáča profil okolo osi, ako diel vyrobený na sústruhu: hriadele, remenice, príruby, gombíky. {{ui:Revolved cut}} (v ponuke {{ui:More}} skupiny Prvky) otočí profil, aby odstránil materiál, na drážky a výrezy.

## Rotácia stupňovitého hriadeľa

1. Nakreslite na **Prednú rovinu**.
2. Stlačte {{key:N}} pre {{ui:Centerline}}. Začnite v počiatku a kliknite na bod priamo vpravo, napríklad 100 mm ďalej. Toto je os. Je prerušovaná: konštrukčná geometria nie je súčasťou profilu.
3. Stlačte {{key:L}} pre Čiara. Nakreslite **polovicu** profilu nad stredovou čiarou ako jednu uzavretú slučku: začnite na stredovej čiare, choďte hore, urobte krok a vráťte sa dole na stredovú čiaru, potom po nej späť na začiatok. Konce sa musia stretnúť: slučka musí byť uzavretá.
4. Okótujte polomery (výšky nad stredovou čiarou) a dĺžky. Výška 10 nad stredovou čiarou dáva priemer 20.
5. Zvoľte {{ui:Exit}}.
6. Zvoľte {{ui:Revolve}}. Hriadeľ sa zobrazí, celá otáčka.

Profil musí zostať na jednej strane osi. Ak ju pretína: "Profil pretína os. Nechajte ho na jednej strane stredovej čiary." Okraj profilu môže ležať na osi.

## Nastavenia

| Nastavenie | Čo to robí | Predvolené |
|---|---|---|
| **Operácia** | Výstupok (pridá materiál), Vyrezanie (odstráni materiál), Prienik (zachová prekrytie) alebo Nové teleso | Výstupok pre {{ui:Revolve}}, Vyrezanie pre {{ui:More}} › {{ui:Revolved cut}} |
| **Uhol (°)** | Ako ďaleko sa otáča, od tesne nad 0 až po 360 | 360 |
| **Os** | Prvá stredová čiara, alebo ľubovoľná čiara či stredová čiara v náčrte, uvedená ako "Centerline 1 (l1)" alebo "Line 3 (l3)" | Prvá stredová čiara |

Pri čiastočnom uhle vznikne klin, otočený od roviny náčrtu jedným smerom.

Ak náčrt nemá stredovú čiaru a necháte **Os** na Prvej stredovej čiare: "Nakreslite stredovú čiaru (konštrukčnú čiaru) v náčrte, okolo ktorej sa má rotovať." Môžete tiež vybrať plnú čiaru profilu ako os.

## Vyrezanie drážky

1. Keď je hriadeľ vytvorený, otvorte nový náčrt na **Prednej rovine** (rovnaká rovina ako náčrt hriadeľa).
2. Nakreslite stredovú čiaru pozdĺž tej istej osi: začnite ju v počiatku a držte ju vodorovne, aby dostala H, alebo ju zadajte pomocou **Pridať podľa súradníc** (napríklad od `0, 0` do `100, 0`). Nový náčrt sa nemôže prichytávať k čiaram iného náčrtu.
3. Nakreslite malý uzavretý obdĺžnik, ktorý sa prekrýva s hranou hriadeľa tam, kde má byť drážka.
4. Zvoľte {{ui:Exit}}, potom {{ui:More}} › {{ui:Revolved cut}}.

## Rotačné plochy v zostavách

Rotácia má os, ktorú môžu používať iné prvky a zostavy:

- **Kruhový** vzor štandardne používa os poslednej rotácie (pozri [Vzory a zrkadlenie prvkov](topic:patterns-mirror));
- v zostave spoj medzi plochami vytvorenými rotáciami začína ako **rotačný** spoj a **Stred na** ponúka "Axis of Revolve1" (pozri [Vytvorenie zostavy](topic:build-assembly)).

## Skutočné krivky a fasety

PartCraft vytvára rotáciu jadrom siete (stavový riadok ukazuje "Jadro siete (mesh)"): okrúhle tvary sú ploché fasety, štandardne 64 na otáčku, a objemy sú o niečo menšie ako skutočná hodnota (asi o 0.16 % pri 64). Pohľad a exporty STL, 3MF a STEP sa skladajú z týchto faset. Pre hladšie nastavte **Krivky** (kliknite do prázdneho priestoru, potom pravý panel) na Jemné (128) alebo Veľmi jemné (256). Skutočné valce, kužele a torusy vyžadujú presné jadro: zatiaľ nie je hotové v tejto verzii. Pozri [Jadrá telies](topic:solid-kernels).
