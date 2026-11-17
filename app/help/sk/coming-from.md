---
title: Prechod z iného parametrického modelára
summary: Ako návyky z desktopových parametrických modelárov súčiastok zodpovedajú PartCraft a rozdiely, ktoré prvú hodinu zamieňajú skúsených používateľov.
keywords: prechod, migrácia, známe, správca prvkov, strom návrhu, inteligentná kóta, vytiahnutie výstupku, vytiahnutie vyrezania, sprievodca dierami, väzby, detekcia interferencie, lišta návratu, správca vlastností, myš, rozdiely
from: fbacaee1
---

Ak navrhujete súčiastky v SolidWorks, väčšina nápadov PartCraft bude známa: náčrty na rovinách Predná, Horná a Pravá, väzby a inteligentné kóty, história prvkov s lištou návratu a zostavy umiestnené väzbami. Spôsob, akým sa k nim dostanete, sa miestami líši a táto prvá verzia robí menej. Táto stránka mapuje vaše návyky a vypisuje prekvapenia.

## Návyky, zmapované

| Na čo ste zvyknutí | V PartCraft |
|---|---|
| Strom návrhu vľavo | História vľavo: roviny, potom prvky, náčrty odsadené pod prvkom, ktorý ich používa |
| Predná, Horná a Pravá rovina | Tie isté tri, cez začiatok. Predná je rovina XY, Horná je XZ, Pravá je YZ; Y smeruje nahor |
| Náčrt na rovine alebo ploche, potom potvrdzovací roh na ukončenie | {{ui:Náčrt}} ({{key:S}}) na vybranej rovine alebo rovnej ploche; {{ui:Ukončiť}} alebo {{key:Esc}}, kým sa nezavrie |
| Inteligentná kóta | {{ui:Kóta}} ({{key:D}}). Kliknite na jednu alebo dve položky, potom kam má číslo ísť. Miesto, kam ho umiestnite, určí vodorovnú, zvislú alebo zarovnanú kótu |
| Pridať väzby v paneli vlastností | Vyberte položky, potom tlačidlá väzieb na pravom paneli (Splynutie, Vodorovnosť, Rovnobežnosť, Dotyčnosť, Rovnosť a podobne) |
| Automatické väzby pri kreslení | Prichytávanie pridáva väzby splynutia, bodu na krivke, vodorovnosti a zvislosti |
| Modrá / čierna / červená farba náčrtu | Rovnaký princíp: modrá pri nedourčení, čierna pri úplnom určení, červená pri preurčení. Štítok zobrazuje zostávajúce stupne voľnosti |
| Os pre rotácie | {{ui:Os}} ({{key:N}}); {{ui:Rotácia}} použije prvú os, pokiaľ nevyberiete inú os |
| Zaoblenie náčrtu | {{ui:Zaoblenie}} ({{key:F}}) v náčrte: kliknite na roh, zadajte polomer |
| Prepínač konštrukčnej geometrie | {{ui:Konštrukčná}} ({{key:Q}}) |
| Vytiahnutý výstupok | {{ui:Vytiahnuť}}: Slepé, Stredová rovina, Až po plochu / nasledujúcu / vrchol, Odsadenie od plochy, druhý smer, zúženie, jeden obrys (Vybrať oblasti) |
| Vytiahnuté vyrezanie | {{ui:Vyrezať}}: začína ako Cez všetko; pre kapsu prepnite na Slepé |
| Rotovaný výstupok / vyrezanie | {{ui:Rotácia}} / {{ui:Viac}} › {{ui:Rotačné vyrezanie}} |
| Referenčná rovina / os / bod | {{ui:Viac}} › {{ui:Rovina}}, {{ui:Os}}, {{ui:Bod}} (pozri [Referenčné roviny, osi a body](topic:reference-geometry)) |
| Výstupok alebo vyrezanie ťahom po dráhe alebo loftom, úkos | {{ui:Viac}} › {{ui:Úkos}} na rovných plochách (pozri [Ťahanie po dráhe, loft a úkos](topic:sweep-loft-draft)). {{ui:Ťahanie po dráhe}} a {{ui:Loft}} v tejto verzii ešte nie sú hotové (vyžadujú presné jadro) |
| Sprievodca dierami | {{ui:Otvor}} na každom voľnom bode náčrtu: jednoduchý, zapustený, zahĺbený (90° / 82°) alebo závitový metrický ISO M2–M24, cez všetko alebo slepý |
| Lineárny / kruhový vzor, zrkadlenie | {{ui:Lineárne}}, {{ui:Kruhové}}, {{ui:Zrkadliť}} (prvky alebo celé teleso) |
| Zaoblenie a skosenie hrán | {{ui:Zaoblenie}} / {{ui:Skosenie}}: kliknite na hranu, {{key:Shift}}+kliknutie na ďalšie, potom tlačidlo. Jeden polomer; rovnaké, dvojvzdialenostné alebo vzdialenosť-uhol skosenia. V tejto verzii len rovné hrany medzi dvoma rovnými plochami a zaoblenia, ktoré sa stretnú v rohu, sú zrezané na skos. Zakrivené hrany zaoblite alebo skoste v náčrte ({{ui:Zaoblenie}} v náčrte, {{key:F}}) |
| Škrupina | {{ui:Škrupina}}: kliknite na rovné plochy, ktoré sa majú otvoriť, potom tlačidlo. Jedna hrúbka steny |
| Otvoriť súbor STEP | {{ui:Otvoriť}}: načíta sa ako trojuholníky, teleso, na ktorom možno stavať ([Otvorenie súboru STEP](topic:import-step)) |
| Upraviť prvok, potom OK | Kliknite na prvok; zmeňte čísla vpravo; prestaví sa, ako píšete. Žiadne OK, žiadne Zrušiť: použite {{key:Mod+Z}} |
| Upraviť náčrt | Dvojklik na náčrt v histórii |
| Prestavba | Automatická po každej zmene. Neexistuje kláves na prestavbu |
| Potlačiť / zrušiť potlačenie | {{ui:Potlačiť}} / {{ui:Zrušiť potlačenie}} na pravom paneli |
| Potiahnuť lištu návratu | {{ui:Vrátiť sa sem}} pri prvku; kliknite na "Lišta návratu · posun dopredu" na návrat |
| Presunúť prvok v strome na zmenu poradia | {{ui:Posunúť hore}} / {{ui:Posunúť dole}} alebo {{key:Alt+Up}} / {{key:Alt+Down}}; odmietnuté s uvedením dôvodu, keby to porušilo závislosť |
| Upraviť kóty dvojklikom na model | Vyberte prvok: kóty jeho náčrtu sú vypísané na pravom paneli |
| Väzby: splynutie, sústrednosť, vzdialenosť, uhol | {{ui:Kĺb}} ({{key:J}}): vyberte rovnú plochu na každej súčiastke; kĺb ich priloží plochami k sebe. **Stred na** osi pôsobí ako sústrednosť; **Posunutie** ako vzdialenosť; **Uhol** ako uhol |
| Pevný komponent | Prvá súčiastka je pevná; {{ui:Urobiť z nej pevnú súčiastku}} ju zmení |
| Vložiť komponent | {{ui:Pridať kópiu}} alebo {{ui:Duplikovať}} (ďalšia kópia) alebo {{ui:Vložiť}} (zo súboru súčiastky) |
| Upraviť súčiastku v zostave | {{ui:Upraviť súčiastku}}, potom {{ui:Späť}} |
| Detekcia interferencie | {{ui:Kolízia}} |
| Pohyb komponentu na zobrazenie pohybu | Potiahnite posuvník uhla alebo posunutia rotačného alebo posuvného kĺbu; {{ui:Skontrolovať pohyb na kolízie}} ho prejde. Súčiastka bez kĺbu: **Presunúť rukou** (šípky na ťahanie alebo zadané hodnoty) |
| Merať / kontrolovať | {{ui:Pohľady}}, potom {{ui:Merať}} ({{key:M}}): vzdialenosti, uhly, polomery, plochy; {{ui:Hmotnostné vlastnosti}} |
| Rozložený pohľad, kusovník | V zostave, keď nič nie je vybrané: **Rozložené zobrazenia** a **Kusovník** na pravom paneli |
| Hmotnostné vlastnosti | Políčko **Súčiastka**: objem, povrch, veľkosť fazetovaného telesa (pri guľatých súčiastkach trochu nízko). Žiadna hmotnosť: materiály zatiaľ nie sú |
| Uložiť, Uložiť ako STEP | {{ui:Uložiť}} stiahne `.partcraft.json`; {{ui:Export}} ponúka STL, 3MF, presný STEP (AP242 alebo AP214), fazetovaný STEP, DXF a výkres PDF |
| Vytvoriť výkres zo súčiastky | {{ui:Výkres}}: automatický list A3 s tromi pohľadmi, izometrickým, jedným rezom, jedným detailom, bázami, rámcami tolerancií prvkov a symbolmi úpravy povrchu. Kótované sú len celkové rozmery |
| Potiahnutie stredným tlačidlom na otáčanie | **Potiahnutie ľavým** tu otáča. Stredné alebo pravé potiahnutie posúva. Koliesko priblížuje na mieste ukazovateľa |
| Orientácia pohľadu, Normála k | Ponuka {{ui:Pohľady}}; {{ui:Kolmo na}} pre vybranú plochu, rovinu alebo náčrt |
| Priblížiť na celú veľkosť (F) | {{key:F}}, alebo {{ui:Prispôsobiť}} (v náčrte je {{key:F}} nástroj Zaoblenie) |
| Kontextové ponuky pravým tlačidlom | Žiadne. Potiahnutie pravým posúva; v náčrte pravé kliknutie ukončí reťaz úsečiek |

:::tip
Ak máte SolidWorks v rukách, vyberte štýl ponuky {{ui:Strom prvkov}} v {{ui:Nastavenia}} › {{ui:PartCraft}} › {{ui:Ponuky, klávesy a myš}}: pás kariet Prvky, Náčrt, Plochy, Vyhodnotenie, Výkres, Zostava a Pohľad, stredné tlačidlo obieha, {{key:Shift}} a stredné tlačidlo posúvajú a ľavé tlačidlo len vyberá. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).
:::

## Rozdiely, ktoré ľudí mýlia

**Celý náčrt je profil.** Vytiahnutie a rotácia použijú každú uzavretú slučku v náčrte. Pre prvok nemôžete vybrať jednu oblasť alebo jeden obrys náčrtu. Používajte jeden náčrt na prvok.

**Ktorý náčrt prvok použije.** Prvok použije náčrt, ktorý ste práve zatvorili, alebo ten, ktorý je vybraný v histórii. Ak nič nie je vybrané, zoberie najnovší náčrt, ktorý ešte nepoužíva žiadny prvok. Ak dostanete nesprávny, vyberte správny náčrt a prvok zvoľte znova.

**Zmeny sa uplatňujú počas písania.** Nie je tu dialógové okno prvku s OK a Zrušiť. Každé číslo sa prestaví okamžite a cestou späť je {{key:Mod+Z}}. Zoznam krokov späť zahŕňa úpravy náčrtov, prvky aj nastavenia.

**Preurčenie sa nikdy nesmie nechať potichu.** Nie sú tu riadené (referenčné) kóty. Kóta, ktorú už ostatné väzby určujú, sa hlási ako preurčená ("je už určená. Odstráňte ju."). Konfliktná kóta nechá geometriu nedotknutú a zčervenie. Odstráňte jednu, alebo použite krok späť.

**Ťahanie po dráhe a lofty ešte nie sú hotové; zaoblenia, skosenia, škrupiny a úkosy majú obmedzenia.** Táto verzia PartCraft vytvára každú súčiastku sieťovým jadrom; štítok v stavovom riadku vždy hovorí "Mesh kernel". Zaoblenia a skosenia fungujú na rovných hranách medzi dvoma rovnými plochami a tam, kde sa zaoblenia stretnú v rohu, sú zrezané na skos, nie zlievané. Škrupiny sa otvárajú a úkosy len naklápajú rovné plochy. Prvky, ktoré potrebujú presné jadro, zostávajú klikateľné, ale pri výbere hlásia "ešte nie je hotové". Pozri [Sieťové jadro](topic:solid-kernels) a [Čo ešte nie je hotové](topic:not-built-yet).

**Dve tlačidlá Zaoblenie.** V náčrte {{ui:Zaoblenie}} ({{key:F}}) zaoblí roh náčrtu. Na súčiastke {{ui:Zaoblenie}} v skupine Prvky zaoblí hrany telesa (v tejto verzii rovné hrany medzi rovnými plochami). Ťahanie po dráhe ani loft v tejto verzii nie sú: pozri [Čo ešte nie je hotové](topic:not-built-yet).

**Otvory potrebujú voľné body.** {{ui:Otvor}} vŕta v bodoch vytvorených nástrojom Bod. Stredy kružníc a konce úsečiek sa nepočítajú.

**Cez všetko je len pre vyrezania.** Výstupok potrebuje hĺbku. Zatiaľ nie sú podmienky ukončenia "až po vrchol / plochu / nasledujúcu".

**Teleso je fazetované.** Sieťové jadro vytvára guľaté plochy z rovných fazet, takže pohľad, objemy a exporty STL a 3MF sú z nich zložené: **Krivky** na paneli súčiastky ich zjemnia. Presný export STEP nie je taký: zapisuje guľaté plochy na ich skutočných povrchoch.

**Len milimetre.** Nastavenie palcov zatiaľ nie je. Pri zadávaní rozmerov v palcoch ich vynásobte číslom 25.4.

**Y smeruje nahor.** Predná rovina smeruje k vám a Horná sa pozerá na súčiastku zhora, ako očakávate, ale hlavná zvislá os sveta je Y. Exporty STL, 3MF a presný STEP sa otočia tak, aby Z smerovalo nahor; fazetovaný STEP zachováva Y nahor.

**Väzby sú plochy, nie dvojice geometrie.** Kĺb vždy začína dvoma rovnými plochami priloženými k sebe. Pre kolík v diere vyberte rovnú plochu okolo diery a plochu ramena kolíka, potom nastavte **Stred na** na os diery a os rotácie kolíka. Súčiastky, ktoré kĺby nedosiahnu, zostávajú tam, kde boli vložené; nemôžete ich potiahnuť. Kĺby v slučke sa neriešia.

**Uloženie je stiahnutie.** Neexistuje súbor, ktorý by ste stále prepisovali. Každé uloženie je nový súbor v priečinku na stiahnuté súbory. Súčiastku najprv pomenujte a súbory uchovávajte v priečinku projektu.

**Žiadne kontextové ponuky, žiadne karty správcu príkazov.** Všetko je na paneli nástrojov a na pravom paneli a panel nástrojov sa mení podľa toho, čo robíte: nástroje náčrtu sa zobrazia len v náčrte, nástroje zostavy len v zostave.

**Klávesy sú jednotlivé písmená v náčrte.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} a {{key:S}} vyberajú nástroje bez modifikátora. Pozri [Klávesy a myš](topic:keyboard).
