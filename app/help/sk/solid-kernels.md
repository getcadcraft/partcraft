---
title: Sieťové jadro
summary: Táto verzia PartCraft vytvára každú súčiastku sieťovým jadrom, ktoré beží vo vašom prehliadači. Čo to znamená pre okrúhle plochy, objemy a súbory, ako zistíte, že funguje, a ktoré prvky čakajú na presné jadro.
keywords: jadro, sieť, manifold, presné, b-rep, fazetované, krivky, opencascade, occt, zaoblenie vyžaduje presné, ešte nie je hotové, offline, webassembly
from: f931645c
---

Geometrické jadro je motor, ktorý mení vašu históriu na teleso. Táto verzia PartCraft má jedno: **sieťové jadro** (manifold-3d). Beží na vašom počítači ako malý program WebAssembly a je pripravené chvíľu po otvorení aplikácie. Nič o vašej súčiastke sa nikam neodosiela.

| | Sieťové jadro |
|---|---|
| Okrúhle tvary | Ploché fazety. **Krivky** na paneli súčiastky nastavujú, aké jemné |
| Objemy a plochy | Fazetovaného telesa, pri okrúhlych častiach o niečo nižšie |
| Náčrty, vytiahnutie, vyrezanie, rotácia, otvory, vzory, zrkadlenie, referenčné roviny | Áno |
| Zaoblenie a Skosenie | Na priamych hranách medzi rovnými plochami; zaoblenia, ktoré sa stretnú, sa spoja na zrez |
| Dutina a Sklon | Dutina otvorí ploché plochy (presná hrúbka steny); Sklon naklápa ploché plochy |
| Exporty | STL, 3MF, STEP (presný: okrúhle plochy zapísané na ich skutočných plochách; alebo fazetovaný), výkres PDF a DXF |
| Pohľady výkresu | Kreslené z faziet, vrátane rezov |
| Plochy a hrany | Pomenované a rozpoznané podľa druhu (rovná, valec, kužeľ, guľa, torus; priama, kružnica), prevzaté z náčrtov: pracovné prostredia Simulácia, Generatívne a Výroba, Merať, výber a tabuľka otvorov ich používajú |

Štítok pri pravom konci stavového riadku zobrazuje **Sieťové jadro**, kým vytvára vašu súčiastku.

## Čo čaká na presné jadro

Presné (B-rep) jadro uchováva skutočné kružnice, valce a kužele, hladké zaoblenia na ľubovoľnej hrane, ťahania po dráhe, lofty, plochy, plechové diely, rebrá, viacero telies a import STEP so zakrivenými plochami zachovanými presne, a práve na ňom sa stavajú. (Presný export STEP na ňom nečaká: sieťové jadro pozná skutočnú plochu každej plochy z náčrtu a export ju zapíše.) Staršie laboratórne zostavy PartCraft na to používali OpenCascade. Jeho licencia (LGPL) sa nehodí k tejto verzii, kde je každá aplikácia pod licenciou Apache-2.0 a používa iba knižnice s povolenou licenciou, preto nie je zahrnutá. Pre tieto veci nie je stanovený žiadny termín.

Dovtedy tieto prvky pri ich zvolení hlásia **Ešte nie je hotové**: stavový riadok uvedie dôvod a popisky ich tlačidiel končia textom "ešte nie je hotové (vyžaduje presné jadro)". [Čo ešte nie je hotové](topic:not-built-yet) uvádza každý z nich s tým, čo robiť namiesto toho.

Súčiastka vytvorená s nimi v staršej zostave sa stále otvorí. Tieto prvky zostanú v histórii označené ako ešte nie je hotové (kurzorom nad jedným zobrazíte dôvod), zvyšok súčiastky sa vytvorí a uložením sa zachovajú bez zmeny.

## Okrúhle plochy a Krivky

Sieťové jadro kreslí kružnicu ako mnohouholník. **Krivky** na paneli súčiastky určujú, koľko strán dostane celá kružnica; viac strán vyzerá hladšie a meria sa bližšie k skutočnej hodnote, ale vytvára sa dlhšie. Objemy, plochy a vzdialenosti z {{ui:Merať}} sú tohto fazetovaného telesa: pri otvore alebo výstupku sú o niečo menšie ako pri okrúhlom tvare.

## Online a offline

Sieťové jadro je súčasťou vlastného stiahnutia aplikácie. Ak chcete pracovať bez pripojenia, uložte PartCraft na offline použitie, keď ste online: zvoľte {{ui:Uložiť na offline použitie}} na paneli aplikácie a počkajte, kým sa zobrazí **Pripravené na offline**. Podrobnosti: [Práca offline](common:offline).
