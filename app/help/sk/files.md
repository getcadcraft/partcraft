---
title: Súbory: otvorenie, uloženie a export
summary: Súbory súčiastok a zostáv, ktoré PartCraft otvára a ukladá, každý formát exportu a to, čo zachováva, kam súbory idú a čo sa mení offline alebo medzi prehliadačmi.
keywords: otvoriť, uložiť, exportovať, stiahnuť, súbor, partcraft.json, súbor zostavy, stl, 3mf, step, dxf, pdf, kde sú moje súbory, offline, uložiť ako
from: e5fbc7e3
---

PartCraft pracuje so súbormi na vašom počítači. Súčiastku nikdy nenahráva a nie je tu účet ani cloudové úložisko. Cloudové ukladanie zatiaľ nie je dostupné.

## Čo PartCraft otvorí

| Súbor | Prípona | Ako |
|---|---|---|
| Súčiastka PartCraft | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, alebo ju pustite do 3D pohľadu |
| Zostava PartCraft | `.partcraft-asm.json` | Rovnako: PartCraft zistí, ktorý druh je |
| Teleso STEP | `.step`, `.stp` | Teleso načítané ako trojuholníky: [Otvorte súbor STEP a stavajte na ňom](topic:import-step) |

Siete STL, OBJ a 3MF sa tiež otvoria ako telesá ([Otvorte STL, OBJ alebo 3MF](topic:open-meshes)), rovnako súbory `.3dm` ([Otvorte model .3dm](topic:open-3dm-files)). DXF, IGES a vlastné súbory súčiastok iných programov sa otvoriť nedajú (pozri [Čo ešte nie je hotové](topic:not-built-yet)).

Pravidlá pri otváraní:

- Názov súboru súčiastky alebo zostavy musí končiť na `.json` a súbor musí byť menší ako 50 MB.
- Súbory sa skontrolujú skôr, ako sa niečo zobrazí. Poškodený alebo upravený súbor sa odmietne s jednoduchým dôvodom, napríklad "Toto nie je súbor PartCraft."
- Súbor uložený novším PartCraft sa odmietne: "Tento súbor bol uložený novším PartCraft (verzia súboru 3); táto verzia číta verziu 2." Staršie súbory sa otvoria.
- Ak súčiastka na obrazovke obsahuje neuložené zmeny, PartCraft sa najprv opýta: {{ui:Cancel}}, {{ui:Discard changes}} alebo {{ui:Save first}}.

## Ukladanie

{{ui:Save}} alebo {{key:Mod+S}} uloží to, čo je na obrazovke:

- Pri súčiastke: `<názov súčiastky>.partcraft.json`, úplná história (náčrty, vzťahy, kóty, prvky, poloha návratu), časti rezu, detailu a poznámky GD&T listu výkresu a celý text každého telesa STEP importovaného v skoršom zostavení. Prvky, ktoré táto verzia nevytvorí, sa uložia späť nezmenené. Samotné teleso sa neukladá; PartCraft ho pri otvorení súboru znovu vytvorí z histórie.
- Pri zostave: `<názov zostavy>.partcraft-asm.json`, s **každou súčiastkou vnútri**. Jeden súbor nesie celú zostavu, takže ju môžete poslať samostatne.

Uloženie je **stiahnutie**. Váš prehliadač uloží súbor do priečinka sťahovania alebo sa opýta, kam ho uložiť, ak ste to tak nastavili. Opätovné uloženie vytvorí nové stiahnutie; prehliadač môže pomenovať súbor `Part1 (1).partcraft.json` namiesto toho, aby nahradil starý. Súbory premenujte alebo presuňte v aplikácii {{pick:mac=Finder|windows=Prieskumník súborov|linux=správca súborov}} podľa potreby.

Názvy súčiastok: znaky okrem písmen, číslic, medzier, `_`, `.` a `-` v názve súčiastky sa v názve súboru zmenia na `_`.

:::tip
Väčšina prehliadačov má nastavenie, ktoré sa pýta, kam uložiť každé stiahnutie. Zapnite ho, ak chcete pri každom ukladaní voľbu "Uložiť ako": v Chrome a Edge je to v nastaveniach pod Stiahnuté súbory; vo Firefox pod Všeobecné, Súbory a aplikácie; v Safari pod Všeobecné, Umiestnenie sťahovania súborov.
:::

Viac o tom, kam idú stiahnuté súbory a ako ich chrániť: [Kde sú vaše súbory](common:your-files).

## Export

Ponuka {{ui:Export}} zapisuje ostatné formáty. Každý je stiahnutie pomenované podľa súčiastky.

| Položka ponuky | Súbor | Obsah |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<názov>.stl` | Binárny STL trojuholníkov telesa, milimetre, **Z nahor** |
| {{ui:3MF, for 3D printing}} | `<názov>.3mf` | 3MF s telesom ako jedným objektom, milimetre, **Z nahor** |
| {{ui:STEP AP242 (presné teleso)}} | `<názov>.step` | Jedno presné teleso, milimetre, Z nahor: okrúhle plochy ako skutočné valce, kužele, gule a torusy. STEP na použitie v iných CAD a CAM programoch |
| {{ui:STEP AP214 (presné teleso)}} | `<názov>.step` | To isté presné teleso v staršej schéme AP214 |
| {{ui:STEP (fazetovaný, sieťové jadro)}} | `<názov>.step` | Teleso z rovných plôch zo siete: **okrúhle povrchy sú veľa malých rovných fazet**. Milimetre, vo vlastných osiach PartCraft (Y nahor). Pre program, ktorý odmieta presný súbor |
| {{ui:DXF náčrtu alebo plochej plochy}} | `<názov> - <náčrt>.dxf` alebo `<názov> - face.dxf` | DXF R12. Náčrt: čiary, oblúky, kružnice a body vo vlastných súradniciach náčrtu, na hladinách PROFILE, CONSTRUCTION a POINTS. Vybratá rovná plocha: jej obrysy ako uzavreté lomené čiary (okrúhle hrany ako ich fazety) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<názov> - drawing.pdf` | List výkresu formátu A3: tri pohľady, izometria, rez a detail, ak sú nastavené, celkové rozmery, symboly GD&T, popisové pole |

:::note
{{ui:STEP AP242 (presné teleso)}} zapíše diery, výstupky, zaoblenia, kužele, gule a torusy na ich skutočných povrchoch, takže iný program môže vybrať otvor ako valec; **Krivky** to nemení. Bočné strany splajnov, modelované závity a importované siete nemajú presný povrch a zostávajú rovnými fazetami v tom istom telese; stavový riadok uvedie, koľko ich je. {{ui:STEP (fazetovaný, sieťové jadro)}} zapíše každú okrúhlu plochu ako fazety.
:::

- Exporty sa týkajú súčiastky na obrazovke. Export je v zostave vypnutý; exportovanie zostavy zatiaľ nie je.
- STL, 3MF, fazetovaný STEP a DXF plochy sú vždy zložené z fazet. Nastavenie **Krivky** (v pravom paneli, keď nič nie je vybraté) určuje ich jemnosť, od 32 do 256 fazet na otáčku. Pred exportom STL alebo 3MF pre hladkú tlač zvoľte Jemné alebo Veľmi jemné.
- Výkres PDF používa vstavané písmo Helvetica čitateľa. Znaky, ktoré nevie zobraziť, sa vytlačia ako "?".

Krok za krokom: [Export na tlač, STEP a DXF](topic:export-files) a [Vytvorte výkresový list](topic:drawing-pdf).

## Neuložená práca

- PartCraft drží záložnú kópiu otvorenej súčiastky alebo zostavy v tomto prehliadači chvíľu po každej zmene, takže pád alebo zatvorená karta neprinesú stratu: pri ďalšom otvorení PartCraft sa spýta: "Obnoviť prácu?". Nie je to uloženie: uložte do súboru, aby ste si prácu ponechali. Pozri [Obnovenie neuloženej práce](common:recover).
- Ak sa pokúsite zavrieť kartu alebo znovu načítať stránku s neuloženými zmenami, prehliadač sa opýta: "Opustiť stránku?". To je okno samotného prehliadača; PartCraft jeho text nezmení.
- {{ui:New}}, {{ui:Open}} a zatvorenie zostavy sa pred zahodením neuložených zmien opýtajú.

## Online a offline

Všetko sa deje na vašom počítači: sieťové jadro (program WebAssembly) sa stiahne spolu s aplikáciou a geometriu vytvára lokálne a súbory sa čítajú a zapisujú na disk. Žiadne údaje o súčiastke nejdú cez sieť. Pozri [Sieťové jadro](topic:solid-kernels).

Aby ste mohli pracovať bez pripojenia, uložte PartCraft na offline použitie, keď ste online: v paneli aplikácie zvoľte {{ui:Save for offline}} a počkajte, kým počíta ("Ukladá sa 40 z 212"), kým nebude hlásiť **Pripravené na offline použitie**. Uložená kópia obsahuje 3D knižnicu a sieťové jadro, takže potom fungujú modelovanie, ukladanie, každý export aj výkresy offline. Ak hlási **Nepodarilo sa uložiť**, kliknite na ňu a skúste znova, keď ste online; **Offline nie je k dispozícii** znamená, že toto okno prehliadača nemôže uchovať kópiu (súkromné okná a niektoré spravované počítače). Keď je kópia uložená, kliknutím na **Pripravené na offline použitie** sa ponúknu {{ui:Save again (get the newest version)}} a {{ui:Remove the offline copy}}. Podrobnosti: [Práca offline](common:offline).

:::online
Ste online. Aj bez uloženia na offline použitie, keď sa PartCraft načíta a čip na stavovom riadku hlási "sieťové jadro", môžete pokračovať, ak sa spojenie preruší. Len nenačítavajte stránku, kým nebudete znova online.
:::

:::offline
Ste offline. Ak je PartCraft už otvorený, pokračujte v práci; ukladanie a exporty stále fungujú. Ak panel aplikácie hlási **Pripravené na offline použitie**, PartCraft sa otvorí aj od začiatku bez pripojenia; inak tento panel znova nenačítavajte.
:::

## Rozdiely medzi prehliadačmi

- **Sťahovanie.** Každý prehliadač má vlastný priečinok sťahovania a vlastný spôsob pýtania sa. Ak sa prehliadač pýta, či tento web smie sťahovať súbory, povoľte to, inak ukladanie a exporty nebudú fungovať.
- **Presúvanie súboru** do pohľadu funguje v Chrome, Edge, Firefox a Safari.
- **Súbory z telefónu alebo tabletu.** Na iPhone a iPad Otvoriť zobrazí aplikáciu Files; uložené súbory idú do Files, Downloads. V Androide idú do priečinka Downloads.

Obsah súborov sa medzi prehliadačmi ani operačnými systémami nelíši.
