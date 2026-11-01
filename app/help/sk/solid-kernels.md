---
title: Sieťové jadro
summary: Táto verzia PartCraft vytvára každú súčiastku sieťovým jadrom, ktoré beží vo Vašom prehliadači. Čo to znamená pre okrúhle plochy, objemy a súbory, ako spoznať, že funguje, a ktoré prvky čakajú na presné jadro.
keywords: jadro, sieť, manifold, presné, b-rep, fazetovaný, krivky, opencascade, occt, zaoblenie potrebuje presné, nie je hotové, offline, webassembly
from: 68d32d16
---

Geometrické jadro je motor, ktorý mení Vašu históriu na teleso. Táto verzia PartCraft má jedno: **sieťové jadro** (manifold-3d). Beží vo Vašom počítači ako malý program WebAssembly a je pripravené chvíľu po otvorení aplikácie. Nič z Vašej súčiastky sa nikam neposiela.

| | Sieťové jadro |
|---|---|
| Okrúhle tvary | Ploché fazety. **Krivky** v paneli súčiastky určujú jemnosť |
| Objemy a plochy | Fazetovaného telesa, na okrúhlych súčiastkach o trochu nižšie |
| Náčrty, vytiahnutie, výrez, rotačné teleso, otvory, polia, zrkadlenie, referenčné roviny | Áno |
| Zaoblenie a skosenie | Na priamych hranách medzi plochými plochami; zbiehajúce sa zaoblenia sú zrezané na gérung |
| Škrupina a úkos | Škrupina otvorí ploché plochy (presná hrúbka steny); úkos nakloní ploché plochy |
| Exporty | STL, 3MF, STEP (fazetovaný), výkres PDF a DXF |
| Pohľady výkresu | Kreslené z fazet, vrátane rezov |
| Plochy a hrany | Pomenované a známe podľa druhu (plochá, valec, kužeľ, guľa, torus; priama, kružnica), prevzaté z náčrtov: využívajú ich pracovné priestory Simulácia, Generatívny a Výroba, Meranie, výber a tabuľka otvorov |

Čip blízko pravého konca stavového riadka hlási **Sieťové jadro**, kým vytvára Vašu súčiastku.

## Čo čaká na presné jadro

Na presnom jadre (B-rep) stoja skutočné kružnice, valce a kužele a hladké zaoblenia na ľubovoľnej hrane, ťahanie po dráhe, loft, plochy, plechové diely, rebrá, viac telies, import STEP a presný export STEP. Skoršie laboratórne zostavy PartCraft na to používali OpenCascade. Jeho licencia (LGPL) do tohto vydania nepasuje, v ktorom je každá aplikácia pod Apache-2.0 a používa len knižnice s liberálnymi licenciami, takže nie je zahrnutý. Nič z toho nemá dátum.

Dovtedy tieto prvky pri výbere hlásia **Ešte nie je hotové**: stavový riadok uvedie dôvod a popisy ich tlačidiel končia „ešte nie je hotové (potrebuje presné jadro)“. [Čo ešte nie je hotové](topic:not-built-yet) uvádza každý z nich a čo urobiť namiesto toho.

Súčiastka vytvorená s nimi v staršej zostave sa stále otvorí. Tieto prvky zostanú v histórii označené ako nehotové (podržte nad jedným ukazovateľ pre dôvod), zvyšok súčiastky sa vytvorí a uloženie ich ponechá nezmenené.

## Okrúhle plochy a Krivky

Sieťové jadro kreslí kružnicu ako mnohouholník. **Krivky** v paneli súčiastky určujú, koľko strán dostane celá kružnica; viac strán vyzerá hladšie a meria bližšie k skutočnej hodnote, ale vytváranie trvá dlhšie. Objemy, plochy a vzdialenosti z {{ui:Meranie}} sú z tohto fazetovaného telesa: pri otvore alebo výstupku sú o trochu menšie než pri okrúhlom tvare.

## Online a offline

Sieťové jadro je súčasťou sťahovania samotnej aplikácie. Ak chcete pracovať bez pripojenia, uložte PartCraft na offline použitie, kým ste online: vyberte {{ui:Uložiť na offline použitie}} v paneli aplikácie a počkajte, kým nahlási **Pripravené offline**. Podrobnosti: [Práca offline](common:offline).
