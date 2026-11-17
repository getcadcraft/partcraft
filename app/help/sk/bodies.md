---
title: Spájanie, presun a mierka telies; vzory po dráhe
summary: Vytvorte samostatné telesá a potom ich spojte, vyrežte alebo prienik, presuňte, otočte, zarovnajte alebo skopírujte, zmeňte mierku rovnomerne alebo podľa X, Y a Z a kopírujte prvky alebo telesá pozdĺž krivky.
keywords: teleso, telesá, viacteleso, nové teleso, spojiť, bulovská operácia, spojenie, vyrezanie, prienik, odčítanie, zjednotenie, ponechať nástroje, presun telesa, kopírovanie telesa, otočenie telesa, zarovnanie, posun, mierka, nerovnomerná mierka, natiahnutie, afinná, vzor po dráhe, vzor pozdĺž krivky, pole pozdĺž dráhy, vzor riadený krivkou
from: 6b1ea820
---

:::note
**Zatiaľ nie je hotové v tejto verzii.** Práca s viacerými telesami vyžaduje presné geometrické jadro, ktoré táto verzia PartCraft nemá: každú súčiastku vytvára sieťovým jadrom. [Čo ešte nie je hotové](topic:not-built-yet) hovorí, čo robiť namiesto toho. Zvyšok tejto stránky popisuje, ako to funguje s presným jadrom.
:::

Súčiastka môže obsahovať viac než jedno teleso. Každé samostatné teleso je **teleso**. Väčšina prvkov pridáva alebo odoberá z každého telesa, ktorého sa dotýkajú; nástroje na tejto stránke pracujú s celými telesami, ktoré vyberiete. Nachádzajú sa v ponuke {{ui:Viac}} skupiny Prvky: {{ui:Spojiť}}, {{ui:Presun telesa}}, {{ui:Mierka telesa}} a {{ui:Vzor po dráhe}}. Všetky vyžadujú presné jadro (OpenCascade).

## Vytvorenie samostatného telesa

Nastavte **Operáciu** vytiahnutia alebo rotácie na **Nové teleso** na ich pravom paneli (ťahanie po dráhe a lofty to tiež majú). Nové teleso zostane oddelené, aj tam, kde sa prekrýva s ostatnými. **Prienik** ponechá len prienik nového tvaru s tým, čo tam je.

Telesá sa volajú podľa prvku, ktorý ich začal: "Extrude2". Kópia sa volá podľa originálu a prvku, ktorý ju skopíroval: "Extrude2, copy 1 of Move1". Názvy sa nemenia, keď zmeníte rozmery vyššie v histórii, takže prvky, ktoré telesá používajú, ich stále nájdu. Ak sú dve alebo viac telies, panel súčiastky (kliknite na prázdne miesto) ich vypíše s ich objemami.

## Premenovanie alebo skrytie telesa

Kliknite na prázdne miesto v pohľade a zobrazí sa panel súčiastky. Jej zoznam telies (zobrazený, keď má súčiastka dve alebo viac telies) má na každom riadku pole na názov a tlačidlo {{ui:Skryť}}.

- **Premenovanie:** zadajte nový názov do poľa a stlačte {{key:Enter}} alebo kliknite mimo. Každý panel ho potom používa: Spojiť, Presun telesa, vzory. Vymažte pole, aby ste sa vrátili k názvu z prvku, ktorý teleso vytvoril.
- **Skrytie:** kliknite na {{ui:Skryť}} na jeho riadku. Teleso zmizne z pohľadu a kliknutia cez neho prechádzajú, takže môžete vybrať plochy za ním. {{ui:Zobraziť}} ho vráti; {{ui:Zobraziť všetky}} vráti všetky skryté telesá.

Skrytie mení len pohľad. Skryté teleso sa stále vytvára, započítava sa do objemu a meraní a ukladá sa do exportov STL, 3MF a STEP. Názvy a skryté telesá sa ukladajú v súbore súčiastky a každá zmena je jeden krok {{ui:Späť}}.

## Spojenie telies

1. Shift+kliknite na plochu **cieľového** telesa, potom na plochu každého **nástrojového** telesa.
2. Vyberte {{ui:Viac}}, potom {{ui:Spojiť}}.
3. Na pravom paneli vyberte **Operáciu**:

| Operácia | Výsledok |
|---|---|
| Spojiť | Cieľ a nástroje sa stanú jedným telesom |
| Vyrezať | Nástroje sa odoberú z cieľa |
| Prienik | Zostane len to, čo majú spoločné cieľ a každý nástroj |

**Cieľové teleso** je to, ktoré si ponechá svoj názov. Označte alebo odznačte **Nástrojové telesá**, alebo použite **Vybrať v pohľade** a kliknite na ich plochy. **Ponechať nástrojové telesá** ponechá nástroje na mieste (užitočné pre formu a jej jadro). Ak bolo nástrojové teleso už použité pri predchádzajúcom Spojiť, panel to oznámi namiesto výberu iného telesa.

## Presun alebo kopírovanie telesa

1. Vyberte {{ui:Viac}}, potom {{ui:Presun telesa}}. Najnovšie teleso je označené; označte tie, ktoré chcete presunúť.
2. Vyberte typ **Presunu**:

| Presun | Čo nastavíte |
|---|---|
| Posun | **ΔX**, **ΔY**, **ΔZ** v milimetroch |
| Bod do bodu | **Od** a **Do**: kliknite blízko konca hrany, na bodový prvok alebo na miesto na ploche |
| Otočenie okolo osi | **Os** (X, Y, Z, prvok osi alebo **Vybrať**: priama hrana, kružnica alebo valec) a **Uhol (°)** |
| Zarovnanie plochy na plochu alebo rovinu | **Plocha na presun** (rovná plocha telesa), **Na** (rovná plocha alebo rovina) |

Zarovnanie otočí teleso tak, aby jeho plocha ležala na druhej ploche, plocha na plochu, potom ho posunie len pozdĺž normály tejto plochy. **Rovnaký smer** ho otočí opačne. **Kopírovať** ponechá originál a pridá presunutú kópiu ako nové teleso.

## Zmena mierky telesa

1. Vyberte {{ui:Viac}}, potom {{ui:Mierka telesa}}, a označte telesá.
2. Zadajte **Mierku**, alebo zrušte označenie **Rovnomerne** a zadajte **Mierku X**, **Mierku Y** a **Mierku Z** (pozdĺž osí sveta).
3. **Okolo** je bod, ktorý ostáva na mieste: stred škatule telies, alebo bod, ktorý vyberiete.

Rovnomerná mierka je presná. Nerovnomerná mierka mení kružnice na elipsy: valec sa stane eliptickým valcom, ktorý žiadna analytická plocha nedrží, takže zakrivené plochy sa stanú plochami typu B-spline, ktoré zostávajú do 0.0000004 mm od presného tvaru; rovné plochy a rovné hrany zostávajú presné. Panel oznámi, čo sa stalo. Faktory mierky musia byť väčšie ako nula (na zrkadlenie použite {{ui:Zrkadliť}}).

## Kopírovanie pozdĺž dráhy

1. Vyberte prvok na kopírovanie v histórii, alebo nič nevyberajte, aby sa skopírovalo najnovšie teleso.
2. Vyberte {{ui:Viac}}, potom {{ui:Vzor po dráhe}}. Najnovší nepoužitý náčrt sa zoberie ako dráha.
3. Na pravom paneli nastavte:

| Nastavenie | Čo robí |
|---|---|
| **Kopírovať** | Telesá (každá kópia je nové teleso) alebo Prvky (spojené alebo vyrezané ako originál) |
| **Dráha** | Označte náčrty, alebo **Vybrať hrany modelu**; kusy musia na seba nadväzovať koncami |
| **Počet** | Celkový počet vrátane originálu |
| **Rozostup** | Rovnaký (rozložený po koniec otvorenej dráhy, alebo okolo celej uzavretej) alebo nastavená vzdialenosť |
| **Orientácia** | Nasledovať dráhu (každá kópia sa s ňou otáča) alebo Pevná (kópie zostanú rovnobežné) |
| **Obrátiť smer** | Ísť opačným smerom po dráhe |

Kópie začínajú tam, kde dráha prechádza najbližšie k originálu, a sú rozmiestnené podľa dĺžky pozdĺž krivky.

Lineárne a kruhové vzory môžu kopírovať aj telesá: označte **Kopírovať telesá** na ich paneli a vyberte telesá; každá kópia je nové teleso.

## Obmedzenia

- Telesá vyžadujú presné jadro; sieťové jadro zachová jedno teleso a oznámi to.
- Nerovnomerná mierka mení zakrivené plochy na presné aproximácie typu B-spline (pozri vyššie), nie na presné valce alebo kužele; ofsetové plochy sa takto zatiaľ nedajú zmeniť.
- Pri sledovaní dráhy na krútenej 3D krivke sa kópia prenesie bez skrútenia; na rovných dráhach je otočenie presné.
- Spájanie funguje len na telesách. Plošné telesá sa spájajú pomocou {{ui:Stiahnuť}}.

Pozri aj [Referenčné roviny, osi a body](topic:reference-geometry) pre body a roviny "medzi objektmi" a [Vzorové a zrkadlové prvky](topic:patterns-mirror).
