---
title: Obrazovka PartCraft
summary: Prehliadka každej lišty a panela: panel nástrojov a jeho zmeny, história, údaje o súčiastke, 3D pohľad, panel vlastností a stavový riadok.
keywords: obrazovka, rozloženie, panel nástrojov, história, strom prvkov, vlastnosti, panel, stavový riadok, rozhranie, ui, prehliadka, celá obrazovka
from: 5b5bb843
---

Obrazovka má päť častí: panel nástrojov naprieč hornou časťou, históriu vľavo, 3D pohľad v strede, panel vlastností vpravo a stavový riadok dole. Nad všetkými je lišta aplikácie CadCraft.

## Lišta aplikácie

Tenká lišta úplne hore patrí webu CadCraft, nie samotnému PartCraft. Zobrazuje názov aplikácie a kde beží, ponuku verzií, **O PartCraft**, tlačidlo režimu obrazovky a prepínač motívu Papier / Model.

- **Papier** sú tmavé čiary na svetlom liste. **Model** sú svetlé čiary na tmavom pozadí. Farby náčrtu sa riadia motívom.
- {{ui:Nastavenia}} (ozubené koliesko alebo {{key:Mod+,}}) má kartu {{ui:PartCraft}}: ktorým tlačidlom myši sa otáča pohľad, koliesko myši alebo touchpad a vzťahy pri kreslení náčrtu. Pozri [Nastavenia PartCraft](topic:settings).
- Tlačidlo režimu obrazovky alebo {{key:Ctrl+Shift+F}} prepína medzi normálnym režimom, celou obrazovkou a celou obrazovkou so skrytými lištami. Keď sú lišty skryté, presuňte ukazovateľ na horný okraj (alebo sa tam dotknite), aby sa vrátili. {{key:Esc}} sa vráti do normálneho režimu. Tento kláves je {{key:Ctrl+Shift+F}} aj na Macu, nie ⌘.

## Panel nástrojov

Panel nástrojov je rozdelený do skupín. Mení sa podľa toho, čo robíte, aby sa zmestil do jedného riadku:

| Skupina | Tlačidlá | Zobrazené |
|---|---|---|
| Súbor | {{ui:Nový}}, {{ui:Otvoriť}}, {{ui:Uložiť}}, {{ui:Export}} (ponuka) | Vždy |
| Náčrt | {{ui:Náčrt}} | Keď nie je otvorený náčrt |
| Náčrt | {{ui:Ukončiť}}, {{ui:Úsečka}}, {{ui:Obdĺžnik}}, {{ui:Kružnica}}, {{ui:Oblúk}}, {{ui:Bod}}, {{ui:Os}}, {{ui:Zaoblenie}}, {{ui:Kóta}}, {{ui:Konštrukčná}} | Len keď je otvorený náčrt |
| Prvky | {{ui:Vytiahnuť}}, {{ui:Vystrihnúť}}, {{ui:Rotácia}}, {{ui:Otvor}}, {{ui:Lineárne}}, {{ui:Kruhové}}, {{ui:Zrkadliť}}, {{ui:Zaoblenie}}, {{ui:Skosenie}}, {{ui:Škrupina}}, {{ui:Viac}} (ponuka: rotačný výrez, Rovina, Os, Bod, Ťahanie po dráhe, Loft, Sklon) | Na súčiastke, nie keď je otvorený náčrt alebo výkres. {{ui:Zaoblenie}} a {{ui:Skosenie}} fungujú na rovných hranách medzi dvoma rovnými plochami; {{ui:Škrupina}} a Sklon na rovných plochách. Ťahanie po dráhe a Loft ešte nie sú v tejto verzii hotové (potrebujú presné jadro); kliknutie na ne to oznámi |
| Prvky | {{ui:Hotovo}} | Len keď vyberáte hrany alebo plochy pre zaoblenie, skosenie, škrupinu alebo sklon |
| Výkres | {{ui:Výkres}} | Na súčiastke (použiteľné, keď má súčiastka teleso) |
| Výkres | {{ui:Základňa}}, {{ui:Rámček}}, {{ui:Povrchová úprava}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Späť}} | Len na výkresovom liste |
| Zostava | {{ui:Zostava}} | Na súčiastke (použiteľné, keď má súčiastka teleso) |
| Zostava | {{ui:Pridať kópiu}}, {{ui:Vložiť}}, {{ui:Kĺb}}, {{ui:Kolízia}}, {{ui:Upraviť súčiastku}}, {{ui:Zavrieť}} | Len v zostave |
| Zostava | {{ui:Späť}} | Keď upravujete súčiastku zo zostavy |
| Úpravy | {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Viac}} (ponuka: Vystrihnúť, Kopírovať, Prilepiť, Prilepiť na rovnaké miesto, Duplikovať, Zmazať, Vybrať všetko, Zrušiť výber) | Vždy; každá položka pracuje s náčrtom, históriou alebo zostavou, v ktorej ste |
| Pohľad | {{ui:Prispôsobiť}}, {{ui:Kolmo na}}, {{ui:Pohľady}} (ponuka: Merať, Vlastnosti hmotnosti, Rez, Sklon, Zebra, {{ui:Zakrivenie}}, {{ui:Základné roviny}}, potom Izometrický, Spredu, Späť, Zhora, Zdola, Sprava, Zľava) | Vždy |

Podržte ukazovateľ nad tlačidlom, aby ste videli, čo robí, a jeho klávesovú skratku. Sivé tlačidlo sa teraz nedá použiť: napríklad tlačidlá prvkov, keď je otvorený náčrt, alebo {{ui:Kĺb}}, kým zostava nemá dve súčiastky.

Ponuka {{ui:Viac}} v skupine Úpravy uvádza každú úpravu s jej klávesou. Na čo pôsobí kopírovanie a prilepenie, závisí od toho, kde ste; pozri [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste). Bublinová nápoveda sivej položky vysvetlí, prečo teraz nemôže konať.

Ponuka {{ui:Export}} obsahuje {{ui:STL, pre 3D tlač}}, {{ui:3MF, pre 3D tlač}}, {{ui:STEP AP242 (presné teleso)}}, {{ui:STEP AP214 (presné teleso)}}, {{ui:STEP (fazetovaný, sieťové jadro)}}, {{ui:STEP AP214 (fazetovaný, sieťové jadro)}}, {{ui:DXF náčrtu alebo plochej plochy}} a {{ui:Výkres (PDF): pohľady, rez, detail, GD&T}}. Presné položky STEP zapisujú okrúhle plochy na ich skutočných plochách; fazetované ich zapisujú ako ploché fazety.

## História (vľavo)

Panel vľavo je história prvkov súčiastky, zoznam, ktorý PartCraft prepočíta zhora nadol.

- Nadpis je názov súčiastky („Part1“, kým ho nepremenujete).
- Najprv sú **rovina Spredu**, **rovina Zhora** a **rovina Sprava**. Kliknite na jednu, aby ste ju vybrali; v pohľade sa zvýrazní.
- Pod nimi sú vaše prvky v poradí, v akom boli vytvorené. Náčrt, ktorý prvok používa, je odsadený pod týmto prvkom.
- Príznak na pravom konci riadka hovorí o jeho stave:

| Príznak | Význam |
|---|---|
| (žiadny) | Zostavené a náčrt je plne určený |
| − | Náčrt, ktorý nie je úplne určený (ešte sa môže hýbať) |
| + | Náčrt, ktorý je preurčený |
| ⚠ | Zostavené s upozornením (podržte ukazovateľ a prečítajte si ho) |
| ⚠ chyba | Prvok zlyhal. Podržte ukazovateľ a prečítajte si prečo, alebo naň kliknite |
| ⚠ nezostavené | Prvok potrebuje iný, ktorý zlyhal alebo je vypnutý |
| vypnuté | Potlačené |

- Každý prvok zobrazuje svoje hlavné číslo za názvom, napríklad „25 mm“ pri vytiahnutí alebo „Ø6.6 thru“ pri otvore. Dvojitým kliknutím na číslo alebo stlačením {{key:F2}} na riadku ho zmeníte priamo tam. Pozri [Zmena rozmerov](topic:change-sizes).
- Kliknutím na prvok ho upravíte vpravo. Dvojitým kliknutím na náčrt ho otvoríte.
- Keď sa vrátite späť, v zozname je riadok **lišta návratu · posunúť dopredu**. Prvky pod ním sú sivé a nezostavené.
- Keď je riadok zameraný, {{key:Up}} a {{key:Down}} sa presúvajú medzi riadkami a {{key:Alt+Up}} / {{key:Alt+Down}} presúvajú samotný prvok, kde to história dovolí.

V zostave ten istý panel namiesto toho uvádza **Súčiastky** (prvá je označená „uzemnená“) a **Kĺby**.

### Údaje o súčiastke

Pod históriou políčko **Súčiastka** uvádza **Objem**, **Plocha povrchu**, **Veľkosť (X × Y × Z)**, **Priechodné otvory**, **Telesá**, **Trojuholníky**, počet **Prvkov** a koľko z nich **Zlyháva**. Objemy a plochy sú fazetovaného telesa zostaveného sieťovým jadrom, o niečo menšie než skutočná hodnota pri okrúhlych tvaroch (pozri [Prvky a ich možnosti](topic:features#curves-resolution)).

V zostave má políčko nadpis **Zostava**: Súčiastky, Inštancie, Kĺby, Nespojené a Interferencia.

## 3D pohľad (uprostred)

Pohľad zobrazuje teleso, základné roviny a každý náčrt, ktorý ešte nepoužíva žiadny prvok.

Základné roviny sa kreslia celé, kým je súčiastka prázdna. Keď má teleso, ustúpia do pozadia: kreslia sa slabo, aby nezakrývali súčiastku, a kliknutia idú cez ne na súčiastku. Vrátia sa plné, keď vyberáte, kde kresliť náčrt ({{ui:Náčrt}} bez výberu), a keď ich vyberiete v histórii. {{ui:Pohľady}} › {{ui:Základné roviny}} ich úplne skryje; stále sa zobrazia, keď vyberáte, kde kresliť náčrt. PartCraft si túto voľbu pamätá.

- Potiahnutím otočíte súčiastku, potiahnutím pravým alebo prostredným tlačidlom posuniete pohľad, otáčaním kolieska priblížite na mieste ukazovateľa. Podrobnosti v [Klávesy a myš](topic:keyboard).
- Podržte ukazovateľ nad plochou, hranou alebo rovinou, aby sa rozsvietila. Kliknutím ju vyberte. Plochy sa zvýrazňujú celé a hrany sa kreslia a vyberajú celé. {{key:Shift}}+klik zbiera viac hrán alebo plôch. Zostávajú označené.
- Kocka pohľadu vpravo hore sa otáča spolu so súčiastkou: kliknutím na plochu, hranu alebo roh sa pozriete odtiaľ, potiahnutím ju otočíte, tlačidlo domu vás vráti na začiatok. Pozri [Kocka pohľadu](topic:view-cube).
- Vybraný prvok {{ui:Vytiahnuť}} zobrazuje oranžovú šípku na svojej koncovej ploche, prvok {{ui:Rotácia}} zakrivenú šípku na konci otáčania: potiahnutím zmeníte hĺbku alebo uhol, alebo napíšte hodnotu do políčka vedľa nej. Pozri [Zmena rozmerov](topic:change-sizes#drag-it-in-the-view).
- Keď je súčiastka prázdna, políčko s nadpisom **Začať súčiastku** uvádza prvé kroky.
- Pretiahnutím súboru `.partcraft.json` alebo `.partcraft-asm.json` kamkoľvek na pohľad ho otvoríte. Súbor `.step`, `.stp`, `.stl`, `.obj`, `.3mf` alebo `.3dm` pustený tam sa otvorí ako plné teleso.

### Pri výbere hrán alebo plôch

Po {{ui:Zaoblenie}}, {{ui:Skosenie}} alebo {{ui:Škrupina}} bez výberu (alebo {{ui:Vybrať hrany}} pri takom prvku) sa súčiastka zobrazí tak, ako bola pred týmto prvkom. Kliknutím na hrany alebo plochy ich pridáte alebo odoberiete; ich značky ukazujú, čo je zahrnuté. {{ui:Hotovo}} alebo {{key:Esc}} výber ukončí. Pozri [Zaoblenie, skosenie a vyhĺbenie](topic:fillet-chamfer-shell).

### Na výkresovom liste

{{ui:Výkres}} nahradí 3D pohľad výkresovým listom A3. Koliesko priblíži, potiahnutie pravým alebo prostredným tlačidlom posúva, {{key:F}} prispôsobí. Pozri [Vytvorenie výkresu](topic:drawing-pdf).

### Keď je náčrt otvorený

Pohľad sa otočí, aby sa pozeral priamo na rovinu náčrtu, a navrchu sa objaví dvojrozmerná vrstva náčrtu. Súčiastka zobrazuje iba prvky vytvorené pred týmto náčrtom. Pás vľavo hore ukazuje štítok stavu náčrtu („Plne určený“, „Nedourčený · 3 stupne voľnosti“ a podobne) a jeho názov, napríklad „Sketch2 na ploche prvku Extrude1“.

## Panel vlastností (vpravo)

Panel vpravo zobrazuje to, čo je vybraté, a jeho nadpis to pomenuje:

- **Súčiastka** (nič nie je vybrané): **Názov** súčiastky a nastavenie **Krivky**.
- Rovina: tlačidlo {{ui:Náčrt na nej}}.
- **Plocha**: aký druh je (rovná plocha, valec s jeho polomerom a osou, kužeľ, guľa alebo torus), jej plocha, ktorý prvok ju vytvoril, a pre rovnú plochu {{ui:Náčrt na tejto ploche}}, {{ui:Kolmo na}}, {{ui:Exportovať plochu ako DXF}}, {{ui:Vytiahnuť z nej}}, {{ui:Vyrezať do nej}} a {{ui:Otvor tu}} (pozri [Vytiahnutie alebo zatlačenie celej plochy](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Hrana**: jej druh (priama, kružnica so stredom a polomerom, alebo krivka), jej dĺžka a dve plochy, medzi ktorými leží (napríklad „Extrude1 koncová plocha a Extrude1 bočná strana“), s tlačidlami {{ui:Zaoblenie}} a {{ui:Skosenie}}.
- Viac hrán alebo plôch vybraných s {{key:Shift}}: koľko, s {{ui:Zaoblenie}} a {{ui:Skosenie}} pre hrany a {{ui:Vymazať}}.
- Prvok: jeho čísla a možnosti, kóty jeho náčrtu, potom {{ui:Potlačiť}}, {{ui:Vrátiť sa sem}}, {{ui:Posunúť hore}}, {{ui:Posunúť dole}}, {{ui:Zmazať}} a jeho **Názov**.
- Otvorený náčrt: jeho stav, vzťahy, ktoré môžete pridať k výberu, zoznam vzťahov a kót, **Pridať súradnicami**, a {{ui:Ukončiť náčrt}}, {{ui:Prispôsobiť}} a {{ui:Exportovať ako DXF}}.
- Na výkresovom liste: nastavenia rezu a detailu alebo vybraný symbol GD&T.
- V zostave: zostava, vybraná súčiastka alebo vybraný kĺb.

Každé políčko s číslom sa uplatní, keď stlačíte {{key:Enter}} alebo {{key:Tab}}, alebo kliknete mimo. Súčiastka sa hneď prepočíta; tlačidlo OK tu nie je. Na návrat použite {{key:Mod+Z}}.

## Stavový riadok (dole)

- Vľavo súradnice ukazovateľa v náčrte (len keď je náčrt otvorený).
- Uprostred správy: čo robiť ďalej a prečo bolo niečo odmietnuté. Prečítajte si ho, keď sa zdá, že sa nič nedeje.
- Vpravo čip jadra: v tejto verzii vždy „Sieťové jadro“. Podržte nad ním ukazovateľ, aby ste videli, čo to znamená. Pozri [Sieťové jadro](topic:solid-kernels).
- Vpravo čip: „Prepočítava sa…“, kým sa súčiastka prepočíta, potom „Prepočítané za … ms“, keď je všetko v poriadku, alebo „1 prvok zlyháva“. V zostave to hovorí „Umiestnené za … ms“ alebo spočíta problémy s kĺbmi.

Pozri tiež [Spustenie návodu v Ilustrácii](topic:illustrate): pracovný priestor, ktorý vytvára návody zostáv zo svojich súčiastok a zostáv.

## Na úzkej obrazovke

Do šírky 760 pixelov, napríklad na telefóne, pohľad zostáva na obrazovke: panel nástrojov je jeden riadok, ktorý sa posúva do strán, a panely sa otvárajú ako hárky z lišty dole. {{ui:Nástroje}} skryje panel nástrojov a {{ui:Presun}} ho dá dole. Pozri [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
