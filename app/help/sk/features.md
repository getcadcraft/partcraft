---
title: Prvky a ich možnosti
summary: Každý prvok na paneli nástrojov s nastaveniami, predvolenými hodnotami a limitmi, od vytiahnutia po zaoblenie, škrupinu a importované telesá STEP, akcie spoločné pre všetky prvky a nastavenia súčiastky.
keywords: prvky, nie je hotové, vytiahnutie, vyrezanie, rotácia, rotačné vyrezanie, otvor, zapustenie, lineárne pole, kruhové pole, zrkadlo, zaoblenie, skosenie, škrupina, import, možnosti, predvolené, nastavenia, rozlíšenie, krivky, fazety, potlačiť, návrat
from: ab3a598e
---

Prvky sú v histórii vypísané v poradí, v akom boli vytvorené, a prestavujú sa zhora nadol. Každý je pomenovaný podľa svojho druhu s číslom: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft všetky prvky vytvára sieťovým jadrom. Zaoblenie a skosenie fungujú na rovných hranách medzi dvoma rovnými plochami a Škrupina otvára rovné plochy. Importované telesá potrebujú presné jadro, ktoré táto verzia nemá: nie sú hotové a časť nižšie ich opisuje tak, ako ich zachováva súčiastka vytvorená v skoršom zostavení. Pozri [Sieťové jadro](topic:solid-kernels) a [Čo ešte nie je hotové](topic:not-built-yet).

## Náčrt

| Nastavenie | Poznámky |
|---|---|
| Rovina | Front, Top alebo Right, alebo rovná plocha. Iba zobrazené, nemení sa: ak chcete náčrt presunúť, vytvorte nový |
| Stav | Úplne definovaný, Nedostatočne definovaný (so stupňami voľnosti), Preurčený, alebo Prázdny |
| Geometria, Vzťahy | Koľko kriviek, bodov a vzťahov |
| Riadiace kóty | Každá kóta náčrtu, upraviteľná |

Tlačidlá: {{ui:Edit sketch}}, {{ui:Export as DXF}}.

## Vytiahnutie a vyrezanie

{{ui:Extrude}} a {{ui:Cut}} vytvoria ten istý prvok, ktorý sa začína s inými nastaveniami.

| Nastavenie | Možnosti | Vytiahnutie začína na | Vyrezanie začína na |
|---|---|---|---|
| Operácia | Výstupok (pridať materiál), Vyrezanie (odobrať materiál), Prienik (zachovať prekrytie), Nové teleso (v tejto verzii ešte nie je hotové) | Výstupok | Vyrezanie |
| Koniec | Slepý (hĺbka), Stredová rovina (na obe strany), Naskrz | Slepý | Naskrz |
| Hĺbka (mm) | Nad 0, až do 1,000,000 | 10 | 10 |
| Opačný smer | Vypnuté / zapnuté | Vypnuté | Vypnuté |

- Profil: každá uzavretá slučka plných čiar, kružníc a oblúkov v náčrte. Slučky vnútri slučiek sú diery.
- Naskrz funguje len pre vyrezania. Dosiahne úplne cez súčiastku na zvolenej strane.
- Vyrezanie ide do materiálu, preč od vonkajšej strany roviny náčrtu; Opačný smer ho otočí.

## Rotácia a rotačné vyrezanie

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Operácia | Výstupok, Vyrezanie | Výstupok ({{ui:Revolve}}), Vyrezanie ({{ui:More}} › {{ui:Revolved cut}}) |
| Uhol (°) | Nad 0, až do 360 | 360 |
| Os | Prvá stredová čiara, ľubovoľná čiara alebo stredová čiara náčrtu, alebo prvok osi ležiaci v rovine náčrtu | Prvá stredová čiara |

- Profil musí zostať na jednej strane osi. Smie sa jej dotýkať.
- Os rotácie môžu použiť kruhové polia a spoje v zostave.

## Otvor

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Typ | Jednoduchý, Zapustenie | Jednoduchý |
| Priemer (mm) | Nad 0 | 6 |
| Naskrz | Zap / vyp | Zap |
| Hĺbka (mm) | Keď je Naskrz vypnuté | 10 |
| Priemer zapustenia ⌀ | Širšie ako otvor | 11 |
| Hĺbka zapustenia | Plytšie ako slepý otvor | 6 |
| Opačný smer | Vypnuté / zapnuté | Vypnuté |

- Jeden otvor pri každom voľnom bode náčrtu (body vytvorené nástrojom Bod). Panel ukazuje ich počet.
- Otvory sa vŕtajú kolmo na rovinu náčrtu, do materiálu.
- Os každého otvoru môžu použiť spoje v zostave ("Hole1, otvor 2").

## Lineárne pole

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Prvky na kopírovanie | Ľubovoľné prvky telesa nad ním | Vybraný prvok, inak posledný prvok telesa |
| Smer | Os X, Os Y, Os Z; čiara skoršieho náčrtu; os rotácie; vybratá hrana | Os X (alebo hrana vybratá pri pridávaní) |
| Rozstup (mm) | Ľubovoľné číslo | 20 |
| Počet | 1 až 1000, vrátane pôvodného | 3 |
| Opačný smer | Vypnuté / zapnuté | Vypnuté |

## Kruhové pole

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Prvky na kopírovanie | Ako pri lineárnom | Ako pri lineárnom |
| Os | Ako Smer vyššie | Os rotácie naposledy, inak os Y (alebo vybratá hrana) |
| Uhol (°) | Nad 0, až do 360. 360 rozmiestni kópie rovnomerne dokola; menej ich rozprestrie cez uhol | 360 |
| Počet | 1 až 1000, vrátane pôvodného | 6 |
| Opačný smer | Vypnuté / zapnuté | Vypnuté |

## Zrkadlo

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Zrkadlo | Celé teleso (ako je doteraz vytvorené), alebo vybrané prvky | Vybraný prvok, inak celé teleso |
| Zrkadlová rovina | Front, Top alebo Right; rovná plocha | Right, alebo rovná plocha vybratá pri pridávaní |

## Zaoblenie a skosenie

V tejto verzii sieťové jadro vytvorí zaoblenia a skosenia na rovných hranách medzi dvoma rovnými plochami (vonkajšie alebo vnútorné rohy) s jedným polomerom. Okrúhla hrana hlási: "Zaoblenie: v tejto verzii len rovné hrany medzi dvoma rovnými plochami (vytvorí ich sieťové jadro). Zaoblite alebo zrazte zakrivené hrany v náčrte."; tam, kde sa zaoblené hrany stretnú v rohu, sú zrezané na zlom, a prvok varuje: "Zaoblenie sieťovým jadrom: kde sa zaoblené hrany stretnú, sú zrezané na zlom, nie spojené." Všetky typy skosenia (rovnaká vzdialenosť, dve vzdialenosti, vzdialenosť a uhol, s **Prehodiť strany**) fungujú. Pozri [Zaoblenie, skosenie a vyhĺbenie](topic:fillet-chamfer-shell).

| Nastavenie | Zaoblenie | Skosenie |
|---|---|---|
| Veľkosť | **Polomer (mm)**, predvolene 2 | **Vzdialenosť (mm)** od hrany na oboch plochách, predvolene 1 |
| **Hrany** | Vybraté hrany, každá vypísaná podľa dvoch plôch, ktoré spája ("Extrude1 koncová plocha × Extrude1 bočná"), s **Odstrániť** | Vybraté hrany, rovnako ako pri zaoblení |

- Hrany vyberte pred zvolením tlačidla ({{key:Shift}}+kliknutie pre viac), alebo tlačidlo zvoľte bez výberu a potom kliknite na hrany.
- {{ui:Pick edges}} (alebo dvojklik na prvok) mení hrany.
- Hrany sa pamätajú podľa dvoch plôch, ktoré spájajú, takže sa zachovajú pri zmene veľkostí vyššie v histórii.

## Škrupina

Vytvára ju sieťové jadro. Otvárať sa dajú len rovné plochy ("Škrupina: v tejto verzii otvára iba rovné plochy (vytvorí ju sieťové jadro)."); steny rôznych hrúbok ešte nie sú hotové. Pozri [Zaoblenie, skosenie a vyhĺbenie](topic:fillet-chamfer-shell).

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Stena (mm) | Nad 0 | 2 |
| Steny rastú smerom von (plochy zostanú vnútri) | Vypnuté: steny idú dovnútra. Zapnuté: steny idú von | Vypnuté |
| Otvorené plochy | Odstránené plochy, aspoň jedna, s **Odstrániť** | Plochy vybraté pri pridávaní |

{{ui:Pick faces}} mení otvorené plochy.

## Importované teleso

Vzniká otvorením súboru STEP, STL, OBJ alebo 3MF: teleso z trojuholníkov bez vlastnej histórie ([Otvorte súbor STEP](topic:import-step), [Otvorte STL, OBJ alebo 3MF](topic:open-meshes)). Zobrazí, z ktorého súboru pochádza a čo import opravil; **Jednotky v súbore**, **Smer nahor v súbore** a **Použiť na** zostávajú upraviteľné. Teleso STEP importované staršou verziou s presným jadrom zostane v histórii označené ako nie je hotové; otvorte súbor STEP znova, aby sa importoval ako trojuholníky.

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| Smer nahor v súbore | Z nahor (väčšina CAD), Y nahor | Z nahor |

Polia a zrkadlá môžu kopírovať importované teleso, ale nie zaoblenie, skosenie ani škrupinu.

## Čo má každý prvok

Na spodku panela každého prvku:

| Tlačidlo | Robí |
|---|---|
| {{ui:Suppress}} / {{ui:Unsuppress}} | Vypne ho alebo zapne. Prvky, ktoré to potrebujú, sa pri vypnutí nevytvoria |
| {{ui:Roll back to here}} | Vytvorí len prvky nad týmto. Nové prvky sa pridajú na lištu návratu |
| {{ui:Move up}} / {{ui:Move down}} | Zmení poradie, ak by nič, čo prvok používa, neskončilo pod ním. Inak je sivé s dôvodom |
| {{ui:Delete}} | Odstráni ho a (po otázke) každý prvok, ktorý ho používa |
| Názov | Premenuje ho (až 60 znakov) |

Prvky s náčrtom tiež uvádzajú **Riadiace kóty**, upraviteľné na mieste.

## Stavy v histórii

| Stav | Zobrazenie | Význam |
|---|---|---|
| Vytvorený | Normálne | Všetko v poriadku |
| Upozornenie | ⚠ | Vytvorený, ale treba niečo skontrolovať: "Preurčený: 1 vzťah nie je potrebný." alebo "Po tomto nezostalo nič zo súčiastky." |
| Chyba | ⚠ chyba, červene | Nedá sa vytvoriť; hlásenie uvedie prečo |
| Nie je vytvorený | ⚠ nie je vytvorený | Potrebuje prvok, ktorý zlyhal, je potlačený alebo vrátený, alebo potrebuje presné jadro, ktoré táto verzia nemá ("Ťahanie po dráhe: ešte nie je hotové. …") |
| Potlačený | vypnutý | Vypnutý |
| Vrátený | sivo, pod lištou návratu | Nevytvorí sa, kým nepostúpite vpred |

## Nastavenia súčiastky

Kliknite na prázdne miesto, aby nič nebolo vybraté. Pravý panel zobrazí **Súčiastka**:

- **Názov**: názov súčiastky, používaný pre názvy súborov a popisové pole výkresu (až 120 znakov).
- **Krivky**: pozri nižšie.

### Rozlíšenie kriviek

Sieťové jadro vytvorí teleso samo z rovných fazet, takže pohľad, STL, 3MF, fazetovaný STEP, objem aj pohľady výkresu sa všetky riadia nastavením **Krivky**: koľko fazet na plnú otáčku.

| Nastavenie | Fazety na otáčku | Objem okrúhleho tvaru |
|---|---|---|
| Hrubé (32 na otáčku) | 32 | Asi o 0.64 % pod skutočnou hodnotou |
| Normálne (64 na otáčku) | 64 | Asi o 0.16 % pod (predvolené) |
| Jemné (128 na otáčku) | 128 | Asi o 0.04 % pod |
| Veľmi jemné (256 na otáčku) | 256 | Asi o 0.01 % pod |

Jemnejšie krivky dajú hladšie exporty a pohľady, a pomalšie prestavovanie. Nastavenie sa uloží do súboru súčiastky.

## Čo ešte nie je hotové

Zaoblenia s premenlivým polomerom, zaoblenia a skosenia na okrúhlych hranách, škrupiny otvárajúce zakrivené plochy, sklon na zakrivených plochách, ťahanie po dráhe, loft, rebro, telesá STEP s presnými zakrivenými plochami, nové telesá, zúženia, "po" plochu alebo vrchol a odkazy na plochy a hrany telesa potrebujú presné jadro, ktoré táto verzia nemá. Tiež nie sú hotové závitové otvory a otvory so zápustkou. Pozri [Čo ešte nie je hotové](topic:not-built-yet).
