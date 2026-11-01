---
title: Súbory: otvorenie, uloženie a export
summary: Súbory súčiastok a zostáv, ktoré PartCraft otvára a ukladá, každý exportný formát a čo uchová, kam súbory idú a čo sa mení offline alebo medzi prehliadačmi.
keywords: otvoriť, uložiť, export, stiahnuť, súbor, partcraft.json, súbor zostavy, stl, 3mf, step, dxf, pdf, kde sú moje súbory, offline, uložiť ako
from: c15c2c48
---

PartCraft pracuje so súbormi vo Vašom počítači. Nikdy nenahráva súčiastku a nepoužíva účet ani cloudové úložisko. Ukladanie do cloudu zatiaľ nie je k dispozícii.

## Čo PartCraft otvára

| Súbor | Prípona | Ako |
|---|---|---|
| Súčiastka PartCraft | `.partcraft.json` | {{ui:Otvoriť}}, {{key:Mod+O}} alebo pustenie na 3D pohľad |
| Zostava PartCraft | `.partcraft-asm.json` | To isté: PartCraft rozozná, o aký druh ide |
| Teleso STEP | `.step`, `.stp` | Plné teleso prečítané ako trojuholníky: [Otvorenie súboru STEP a stavba na ňom](topic:import-step) |

Siete STL, OBJ a 3MF sa otvárajú tiež ako plné telesá ([Otvorenie STL, OBJ alebo 3MF](topic:open-meshes)) a rovnako súbory `.3dm` ([Otvorenie modelu .3dm](topic:open-3dm-files)). DXF, IGES a vlastné súbory súčiastok iných programov sa otvoriť nedajú (pozrite [Čo ešte nie je hotové](topic:not-built-yet)).

Pravidlá pri otváraní:

- Názov súboru súčiastky alebo zostavy musí končiť na `.json` a súbor musí mať menej ako 50 MB.
- Súbory sa pred zobrazením kontrolujú. Poškodený alebo upravený súbor sa odmietne s jasným dôvodom, napríklad „Toto nie je súbor PartCraft.“
- Súbor uložený novšou verziou PartCraft sa odmietne: „Tento súbor uložila novšia verzia PartCraft (verzia súboru 3); táto číta verziu 2.“ Staršie súbory sa otvoria.
- Ak súčiastka na obrazovke obsahuje neuložené zmeny, PartCraft sa najprv opýta: {{ui:Zrušiť}}, {{ui:Zahodiť zmeny}} alebo {{ui:Najprv uložiť}}.

## Ukladanie

{{ui:Uložiť}} alebo {{key:Mod+S}} uloží to, čo je na obrazovke:

- Pri súčiastke: `<názov súčiastky>.partcraft.json`, úplná história (náčrty, väzby, kóty, prvky, poloha vrátenia), časť výkresového listu s rezom, detailom a poznámkami GD&T a celý text každého telesa STEP importovaného v staršej zostave. Prvky, ktoré táto verzia nevie vytvoriť, sa uložia späť nezmenené. Samotné teleso sa neukladá; PartCraft ho pri otvorení súboru znova vytvorí z histórie.
- V zostave: `<názov zostavy>.partcraft-asm.json` s **každou súčiastkou vnútri**. Jeden súbor nesie celú zostavu, takže ho môžete poslať samostatne.

Ukladanie je **stiahnutie**. Prehliadač uloží súbor do priečinka so stiahnutými súbormi alebo sa opýta, kam ho dať, ak ste to tak nastavili. Opätovné uloženie vytvorí nové stiahnutie; prehliadač ho môže pomenovať `Part1 (1).partcraft.json` namiesto nahradenia starého. Súbory premenúvajte alebo presúvajte v {{pick:mac=Finderi|windows=Prieskumníkovi|linux=Vašom správcovi súborov}} podľa potreby.

Znaky iné ako písmená, číslice, medzery, `_`, `.` a `-` v názve súčiastky sa v názve súboru zmenia na `_`.

:::tip
Väčšina prehliadačov má nastavenie, aby sa pri každom stiahnutí pýtali, kam súbor uložiť. Zapnite ho, ak chcete mať možnosť „Uložiť ako“ zakaždým: v Chrome a Edge je v nastaveniach v časti Stiahnuté súbory; vo Firefoxe v časti Všeobecné, Súbory a aplikácie; v Safari v časti Všeobecné, Umiestnenie sťahovaných súborov.
:::

Viac o tom, kam idú stiahnuté súbory a ako ich udržať v bezpečí: [Kam idú Vaše súbory](common:your-files).

## Export

Ponuka {{ui:Export}} zapisuje ďalšie formáty. Každý je stiahnutie pomenované podľa súčiastky.

| Položka ponuky | Súbor | Čo obsahuje |
|---|---|---|
| {{ui:STL, pre 3D tlač}} | `<názov>.stl` | Binárny STL trojuholníkov telesa, milimetre, **Z nahor** |
| {{ui:3MF, pre 3D tlač}} | `<názov>.3mf` | 3MF s telesom ako jedným objektom, milimetre, **Z nahor** |
| {{ui:STEP AP242 (presné teleso)}} | `<názov>.step` | V tejto verzii zatiaľ nie je hotové (sivé): potrebuje presné jadro |
| {{ui:STEP AP214 (presné teleso)}} | `<názov>.step` | V tejto verzii zatiaľ nie je hotové (sivé) |
| {{ui:STEP (fazetovaný, sieťové jadro)}} | `<názov>.step` | Teleso zložené z plochých plôch zo siete: **okrúhle povrchy sú veľa malých plochých fazet**. Milimetre, vo vlastných osiach PartCraft (Y nahor). STEP, ktorý sa v tejto verzii používa pre iné programy CAD |
| {{ui:DXF náčrtu alebo plochej plochy}} | `<názov> - <náčrt>.dxf` alebo `<názov> - face.dxf` | DXF R12. Náčrt: úsečky, oblúky, kružnice a body vo vlastných súradniciach náčrtu, na hladinách PROFILE, CONSTRUCTION a POINTS. Vybraná plochá plocha: jej obrysy ako uzavreté lomené čiary (okrúhle hrany ako ich fazety) |
| {{ui:Výkres (PDF): pohľady, rez, detail, GD&T}} | `<názov> - drawing.pdf` | Výkresový list A3: tri pohľady, izometria, rez a detail, ak sú nastavené, celkové rozmery, symboly GD&T, popisové pole |

:::note
{{ui:STEP AP242 (presné teleso)}} a {{ui:STEP AP214 (presné teleso)}} zatiaľ nie sú v tejto verzii hotové: použite {{ui:STEP (fazetovaný, sieťové jadro)}}. Má správny tvar a objem, ale každá okrúhla plocha je veľa plochých fazet, takže iné programy nemôžu vybrať otvor ako valec. Ak na tom záleží, najprv nastavte **Krivky** jemnejšie.
:::

- Exporty sú zo súčiastky na obrazovke. V zostave je export vypnutý; export zostavy zatiaľ nie je.
- STL, 3MF, fazetovaný STEP a DXF plochy sú vždy zložené z fazet. Nastavenie **Krivky** (v pravom paneli, keď nie je nič vybrané) určuje ich jemnosť, od 32 do 256 fazet na otáčku. Pred exportom STL alebo 3MF pre hladkú tlač vyberte Jemné alebo Veľmi jemné.
- Výkres PDF používa vstavané písmo Helvetica čítačky. Znaky, ktoré nevie zobraziť, sa vytlačia ako „?“.

Krok za krokom: [Export pre tlač, STEP a DXF](topic:export-files) a [Vytvorenie výkresového listu](topic:drawing-pdf).

## Neuložená práca

- PartCraft uchováva záchrannú kópiu otvorenej súčiastky alebo zostavy v tomto prehliadači chvíľu po každej zmene, takže pád alebo zatvorená karta o ňu nepripravia: pri ďalšom otvorení PartCraft sa opýta „Obnoviť prácu?“. Nie je to uloženie: ak chcete prácu zachovať, uložte ju do súboru. Pozrite [Obnovenie neuloženej práce](common:recover).
- Ak sa pokúsite zavrieť kartu alebo obnoviť stránku s neuloženými zmenami, prehliadač sa opýta „Opustiť stránku?“. To je vlastné okno prehliadača; PartCraft nemôže zmeniť jeho znenie.
- {{ui:Nový}}, {{ui:Otvoriť}} a zatvorenie zostavy sa pred zahodením neuložených zmien opýtajú.

## Online a offline

Všetko prebieha vo Vašom počítači: sieťové jadro (program WebAssembly) sa sťahuje s aplikáciou a vytvára geometriu lokálne a súbory sa čítajú z disku a zapisujú na disk. Cez sieť neprechádzajú žiadne údaje súčiastok. Pozrite [Sieťové jadro](topic:solid-kernels).

Ak chcete pracovať úplne bez pripojenia, uložte PartCraft na offline použitie, kým ste online: vyberte {{ui:Uložiť na offline použitie}} v paneli aplikácie a počkajte, kým počíta („Ukladá sa 40 z 212“) a nahlási **Pripravené offline**. Uložená kópia obsahuje 3D knižnicu a sieťové jadro, takže potom fungujú modelovanie, ukladanie, každý export aj výkresy offline. Ak hlási **Nepodarilo sa uložiť**, kliknite naň a skúste to znova, kým ste online; **Offline nie je k dispozícii** znamená, že toto okno prehliadača nemôže uchovať kópiu (súkromné okná a niektoré spravované počítače). S uloženou kópiou kliknutie na **Pripravené offline** ponúka {{ui:Uložiť znova (získať najnovšiu verziu)}} a {{ui:Odstrániť offline kópiu}}. Podrobnosti: [Práca offline](common:offline).

:::online
Ste online. Aj bez uloženia na offline použitie, keď sa PartCraft raz načíta a čip v stavovom riadku hlási „Sieťové jadro“, môžete pokračovať v práci, ak sa pripojenie preruší. Len stránku neobnovujte, kým nebudete znova online.
:::

:::offline
Ste offline. Ak je PartCraft už otvorený, pracujte ďalej; ukladanie a export stále fungujú. Ak panel aplikácie hlási **Pripravené offline**, PartCraft sa dá otvoriť od začiatku aj bez pripojenia; inak túto kartu neobnovujte.
:::

## Rozdiely medzi prehliadačmi

- **Stiahnuté súbory.** Každý prehliadač má vlastný priečinok so stiahnutými súbormi a vlastný spôsob, ako sa pýta. Ak sa prehliadač opýta, či táto stránka smie sťahovať súbory, povoľte to, inak ukladanie a export nemôžu fungovať.
- **Pretiahnutie** súboru na pohľad funguje v Chrome, Edge, Firefoxe a Safari.
- **Súbory z telefónu alebo tabletu.** Na iPhone a iPade Otvoriť zobrazí aplikáciu Súbory; uložené súbory idú do Súbory, Stiahnuté. Na Androide idú do priečinka Stiahnuté.

Obsah súborov sa medzi prehliadačmi ani operačnými systémami nelíši.
