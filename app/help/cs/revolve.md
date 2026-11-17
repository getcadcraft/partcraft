---
title: Rotace soustruženého dílu
summary: Nakreslete polovinu profilu vedle osové čáry, otočte ji do kulatého dílu, zvolte osu a úhel a pro drážky použijte rotovaný výřez.
keywords: rotace, rotovaný výstupek, rotovaný výřez, soustružený díl, soustruh, hřídel, osa, osová čára, drážka, úhel, rotační výřez
from: 593b6929
---

{{ui:Rotace}} otáčí profil kolem osy, jako díl vyrobený na soustruhu: hřídele, kladky, příruby, knoflíky. {{ui:Rotovaný výřez}} (v nabídce {{ui:Více}} skupiny Prvky) otáčí profil, aby odebral materiál, například pro drážky a výklenky.

## Rotace stupňovaného hřídele

1. Skicujte na **Přední rovině**.
2. Stiskněte {{key:N}} pro {{ui:Osová čára}}. Začněte v počátku a klikněte na bod přímo vpravo, například 100 mm daleko. Tohle je osa. Je čárkovaná: konstrukční geometrie není součástí profilu.
3. Stiskněte {{key:L}} pro Úsečku. Nakreslete **polovinu** profilu nad osovou čárou jako jednu uzavřenou smyčku: začněte na osové čáře, jděte nahoru, udělejte schod a vraťte se dolů na osovou čáru, potom podél ní zpět na začátek. Konce se musí setkat: smyčka musí být uzavřená.
4. Okótujte poloměry (výšky nad osovou čárou) a délky. Výška 10 nad osovou čárou dá průměr 20.
5. Zvolte {{ui:Konec}}.
6. Zvolte {{ui:Rotace}}. Hřídel se objeví, celé otočení.

Profil musí zůstat na jedné straně osy. Pokud ji protne: „Profil protíná osu. Ponechte jej na jedné straně osové čáry.“ Hrana profilu smí ležet na ose.

## Nastavení

| Volba | Co dělá | Výchozí |
|---|---|---|
| **Operace** | Výstupek (přidá materiál), Výřez (odebere materiál), Průnik (ponechá překryv) nebo Nové těleso | Výstupek pro {{ui:Rotace}}, Výřez pro {{ui:Více}} › {{ui:Rotovaný výřez}} |
| **Úhel (°)** | Jak daleko otáčet, od těsně nad 0 až do 360 | 360 |
| **Osa** | První osová čára, nebo libovolná přímka nebo osová čára ve skice, uvedená jako „Osová čára 1 (l1)“ nebo „Úsečka 3 (l3)“ | První osová čára |

Částečný úhel vytvoří klín, který se točí od roviny skici jedním směrem.

Pokud skica nemá osovou čáru a necháte **Osa** na První osové čáře: „Nakreslete ve skice osovou čáru (konstrukční čáru), kolem které se má rotovat.“ Jako osu můžete také zvolit plnou čáru profilu.

## Výřez drážky

1. Když je hřídel vytvořena, otevřete novou skicu na **Přední rovině** (stejná rovina jako skica hřídele).
2. Nakreslete osovou čáru na stejné ose: začněte ji v počátku a držte ji vodorovně, aby dostala H, nebo ji zadejte pomocí **Přidat podle souřadnic** (například od `0, 0` do `100, 0`). Nová skica se nemůže přichytit k úsečkám jiné skici.
3. Nakreslete malý uzavřený obdélník, který přesahuje hranu hřídele tam, kde má drážka být.
4. Zvolte {{ui:Konec}}, potom {{ui:Více}} › {{ui:Rotovaný výřez}}.

## Rotované plochy v sestavách

Rotace má osu, kterou mohou používat jiné prvky a sestavy:

- **Kruhové** pole ve výchozím stavu používá osu poslední rotace (viz [Pole a zrcadlení prvků](topic:patterns-mirror));
- v sestavě je spoj mezi plochami vytvořenými rotacemi zpočátku **rotační** spoj a **Střed na** nabízí „Osa prvku Revolve1“ (viz [Sestavení sestavy](topic:build-assembly)).

## Skutečné křivky a fazety

PartCraft staví rotaci jádrem sítě (stavový řádek ukazuje štítek „Jádro sítě“): kulaté tvary jsou ploché fazety, ve výchozím stavu 64 na otáčku, a objemy jsou o něco menší než skutečná hodnota (asi 0,16 % při 64). Pohled, exporty STL, 3MF a STEP jsou z těchto fazet: nastavte **Křivky** (klikněte do prázdného prostoru, potom v pravém panelu) na Jemné (128) nebo Velmi jemné (256) pro hladší výsledek. Skutečné válce, kužele a torusy vyžadují přesné jádro: zatím není hotovo v této verzi. Viz [Jádro sítě](topic:solid-kernels).
