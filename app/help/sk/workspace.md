---
title: Obrazovka PartCraft
summary: Prehliadka každého panela a panelu: panel nástrojov a ako sa mení, história, údaje o súčiastke, 3D pohľad, panel vlastností a stavový riadok.
keywords: obrazovka, rozloženie, panel nástrojov, história, strom prvkov, vlastnosti, panel, stavový riadok, rozhranie, ui, prehliadka, celá obrazovka
from: 7394fc49
---

Obrazovka má päť častí: panel nástrojov hore, históriu vľavo, 3D pohľad v strede, panel vlastností vpravo a stavový riadok dole. Nad všetkým je panel aplikácie CadCraft.

## Panel aplikácie

Tenký panel úplne hore patrí webu CadCraft, nie samotnému PartCraft. Ukazuje názov aplikácie a kde beží, ponuku verzií, **O aplikácii PartCraft**, tlačidlo režimu obrazovky a prepínač motívu Papier / Model.

- **Papier** sú tmavé čiary na svetlom liste. **Model** sú svetlé čiary na tmavom pozadí. Farby náčrtov sa riadia motívom.
- {{ui:Nastavenia}} (ozubené koliesko, alebo {{key:Mod+,}}) majú kartu {{ui:PartCraft}}: ktoré tlačidlo myši otáča pohľad, koliesko myši alebo touchpad a väzby pri kreslení náčrtu. Pozrite [Nastavenia PartCraft](topic:settings).
- Tlačidlo režimu obrazovky, alebo {{key:Ctrl+Shift+F}}, prepína normálny režim, celú obrazovku a celú obrazovku so skrytými panelmi. So skrytými panelmi presuňte ukazovateľ k hornému okraju (alebo tam ťuknite) a vrátia sa. {{key:Esc}} vráti normálny režim. Tento kláves je {{key:Ctrl+Shift+F}} aj na Macu, nie ⌘.

## Panel nástrojov

Panel nástrojov je zoskupený. Mení sa podľa toho, čo robíte, takže sa zmestí do jedného riadka:

| Skupina | Tlačidlá | Zobrazené |
|---|---|---|
| Súbor | {{ui:Nový}}, {{ui:Otvoriť}}, {{ui:Uložiť}}, {{ui:Export}} (ponuka) | Vždy |
| Náčrt | {{ui:Náčrt}} | Keď nie je otvorený žiadny náčrt |
| Náčrt | {{ui:Ukončiť}}, {{ui:Úsečka}}, {{ui:Obdĺžnik}}, {{ui:Kružnica}}, {{ui:Oblúk}}, {{ui:Bod}}, {{ui:Os}}, {{ui:Zaoblenie}}, {{ui:Kóta}}, {{ui:Konštrukčná}} | Len keď je náčrt otvorený |
| Prvky | {{ui:Vytiahnuť}}, {{ui:Vyrezať}}, {{ui:Rotácia}}, {{ui:Otvor}}, {{ui:Lineárne}}, {{ui:Kruhové}}, {{ui:Zrkadliť}}, {{ui:Zaoblenie}}, {{ui:Skosenie}}, {{ui:Škrupina}}, {{ui:Viac}} (ponuka: Rotačné vyrezanie, Rovina, Os, Bod, Ťahanie, Loft, Úkos) | Na súčiastke, nie pri otvorenom náčrte alebo výkrese. Zaoblenie a skosenie fungujú na priamych hranách medzi dvoma plochými plochami; škrupina a úkos na plochých plochách. Ťahanie a loft zatiaľ v tejto verzii nie sú hotové (potrebujú presné jadro); kliknutie na ne to povie |
| Prvky | {{ui:Hotovo}} | Len keď vyberáte hrany alebo plochy pre zaoblenie, skosenie, škrupinu alebo úkos |
| Výkres | {{ui:Výkres}} | Na súčiastke (použiteľné, keď súčiastka má teleso) |
| Výkres | {{ui:Základňa}}, {{ui:Rámček}}, {{ui:Povrch}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Späť}} | Len na výkresovom liste |
| Zostava | {{ui:Zostava}} | Na súčiastke (použiteľné, keď súčiastka má teleso) |
| Zostava | {{ui:Pridať kópiu}}, {{ui:Vložiť}}, {{ui:Kĺb}}, {{ui:Kolízia}}, {{ui:Upraviť súčiastku}}, {{ui:Zavrieť}} | Len v zostave |
| Zostava | {{ui:Späť}} | Keď upravujete súčiastku zo zostavy |
| Úpravy | {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Viac}} (ponuka: Vystrihnúť, Kopírovať, Prilepiť, Prilepiť na rovnaké miesto, Duplikovať, Zmazať, Vybrať všetko, Zrušiť výber) | Vždy; každá položka pôsobí na náčrt, históriu alebo zostavu, v ktorej ste |
| Zobrazenie | {{ui:Prispôsobiť}}, {{ui:Kolmo na}}, {{ui:Pohľady}} (ponuka: Merať, Hmotnostné vlastnosti, Rez, Úkos, Zebra, Zakrivenie, {{ui:Základné roviny}}, potom Izometria, Spredu, Zozadu, Zhora, Zdola, Sprava, Zľava) | Vždy |

Podržte ukazovateľ nad tlačidlom a uvidíte, čo robí, a jeho kláves. Sivé tlačidlo sa teraz nedá použiť: napríklad tlačidlá prvkov pri otvorenom náčrte, alebo {{ui:Kĺb}}, kým zostava nemá dve súčiastky.

Ponuka {{ui:Viac}} v skupine Úpravy uvádza každú akciu úprav s jej klávesom. Na čo kopírovanie a prilepenie pôsobia, závisí od toho, kde ste; pozrite [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste). Popis sivej položky hovorí, prečo teraz nemôže pôsobiť.

Ponuka {{ui:Export}} obsahuje {{ui:STL, pre 3D tlač}}, {{ui:3MF, pre 3D tlač}}, {{ui:STEP AP242 (presné teleso)}}, {{ui:STEP AP214 (presné teleso)}}, {{ui:STEP (fazetovaný, sieťové jadro)}}, {{ui:STEP AP214 (fazetovaný, sieťové jadro)}}, {{ui:DXF náčrtu alebo plochej plochy}} a {{ui:Výkres (PDF): pohľady, rez, detail, GD&T}}. Dve položky presného STEP sú sivé: v tejto verzii zatiaľ nie sú hotové, preto použite {{ui:STEP (fazetovaný, sieťové jadro)}}.

## História (vľavo)

Panel vľavo je história prvkov súčiastky, zoznam, z ktorého PartCraft prestavuje súčiastku zhora nadol.

- Nadpis je názov súčiastky („Súčiastka1“, kým ju nepremenujete).
- **Predná rovina**, **Horná rovina** a **Pravá rovina** sú prvé. Kliknutím jednu vyberiete; v pohľade sa zvýrazní.
- Pod nimi sú Vaše prvky v poradí, v akom boli vytvorené. Náčrt, ktorý prvok používa, je pod ním odsadený.
- Značka na pravom konci riadka hovorí o jeho stave:

| Značka | Význam |
|---|---|
| (žiadna) | Vytvorené a náčrt je plne definovaný |
| − | Náčrt, ktorý je nedostatočne definovaný (ešte sa môže pohybovať) |
| + | Náčrt, ktorý je nadmerne definovaný |
| ⚠ | Vytvorené, s upozornením (podržte ukazovateľ a prečítajte si ho) |
| ⚠ chyba | Prvok zlyhal. Podržte ukazovateľ pre dôvod, alebo naň kliknite |
| ⚠ nie je hotové | Prvok potrebuje iný, ktorý zlyhal alebo je vypnutý |
| vypnuté | Potlačené |

- Každý prvok ukazuje za svojím názvom hlavné číslo, napríklad „25 mm“ pri vytiahnutí alebo „Ø6.6 thru“ pri otvore. Dvojitým kliknutím na číslo alebo stlačením {{key:F2}} na riadku ho zmeníte priamo tam. Pozrite [Zmena rozmerov](topic:change-sizes).
- Kliknutím na prvok ho upravíte vpravo. Dvojitým kliknutím na náčrt ho otvoríte.
- Keď sa vrátite, v zozname je riadok **Lišta návratu · posunúť dopredu**. Prvky pod ňou sú sivé a nevytvorené.
- Pri zameranom riadku {{key:Up}} a {{key:Down}} presúvajú medzi riadkami a {{key:Alt+Up}} / {{key:Alt+Down}} presúvajú samotný prvok, kde to história dovoľuje.

V zostave ten istý panel namiesto toho vypisuje **Súčiastky** (prvá je označená „pevná“) a **Kĺby**.

### Údaje o súčiastke

Pod históriou pole **Súčiastka** uvádza **Objem**, **Povrchovú plochu**, **Rozmer (X × Y × Z)**, **Priechodné otvory**, **Telesá**, **Trojuholníky**, počet **Prvkov** a koľko je **Zlyhávajúcich**. Objemy a plochy sú fazetovaného telesa vytvoreného sieťovým jadrom, o trochu pod skutočnou hodnotou pri okrúhlych tvaroch (pozrite [Prvky a ich možnosti](topic:features#curves-resolution)).

V zostave má pole nadpis **Zostava**: Súčiastky, Inštancie, Kĺby, Nespojené a Interferencia.

## 3D pohľad (v strede)

Pohľad ukazuje teleso, základné roviny a každý náčrt, ktorý ešte nepoužíva žiadny prvok.

Základné roviny sú vykreslené celé, kým je súčiastka prázdna. Keď má teleso, ustúpia: kreslia sa slabo, aby neprekrývali súčiastku, a kliknutia idú cez ne na súčiastku. Vrátia sa celé, keď vyberáte, kam kresliť náčrt ({{ui:Náčrt}} bez výberu) a keď vyberiete jednu v histórii. {{ui:Pohľady}} › {{ui:Základné roviny}} ich skryje úplne; pri výbere miesta pre náčrt sa stále zobrazia. PartCraft si túto voľbu pamätá.

- Ťahaním súčiastku otáčate, ťahaním pravým alebo stredným tlačidlom posúvate, kolieskom zväčšujete pri ukazovateli. Podrobnosti v [Klávesy a myš](topic:keyboard).
- Podržte ukazovateľ nad plochou, hranou alebo rovinou a uvidíte, ako sa rozsvieti. Kliknutím ju vyberiete. Plochy sa zvýrazňujú celé a hrany sa kreslia a vyberajú celé. {{key:Shift}}+kliknutie zhromažďuje viac hrán alebo plôch. Zostávajú označené.
- Kocka pohľadu vpravo hore sa otáča so súčiastkou: kliknutím na plochu, hranu alebo roh sa pozriete odtiaľ, ťahaním ju otáčate, tlačidlo domčeka vráti na začiatok. Pozrite [Kocka pohľadu](topic:view-cube).
- Vybrané vytiahnutie ukazuje oranžovú šípku na čelnej ploche, rotácia zakrivenú šípku na konci otáčky: potiahnutím zmeníte hĺbku alebo uhol, alebo píšte do poľa vedľa nej. Pozrite [Zmena rozmerov](topic:change-sizes#drag-it-in-the-view).
- Keď je súčiastka prázdna, pole s nadpisom **Začnite súčiastku** uvádza prvé kroky.
- Súbor `.partcraft.json` alebo `.partcraft-asm.json` pustený kamkoľvek na pohľad sa otvorí. Súbor `.step`, `.stp`, `.stl`, `.obj`, `.3mf` alebo `.3dm` pustený tam sa otvorí ako plné teleso.

### Pri výbere hrán alebo plôch

Po {{ui:Zaoblenie}}, {{ui:Skosenie}} alebo {{ui:Škrupina}} bez výberu (alebo {{ui:Vybrať hrany}} na takom prvku) súčiastka vyzerá tak, ako pred týmto prvkom. Kliknutím pridávate alebo odoberáte hrany alebo plochy; ich značky ukazujú, čo je vybrané. {{ui:Hotovo}} alebo {{key:Esc}} dokončí. Pozrite [Zaoblenie, skosenie a vydlabanie](topic:fillet-chamfer-shell).

### Na výkresovom liste

{{ui:Výkres}} nahradí 3D pohľad výkresovým listom A3. Koliesko zväčšuje, ťahanie pravým alebo stredným tlačidlom posúva, {{key:F}} prispôsobí. Pozrite [Vytvorenie výkresu](topic:drawing-pdf).

### Pri otvorenom náčrte

Pohľad sa otočí priamo na rovinu náčrtu a hore sa objaví vrstva 2D náčrtu. Súčiastka ukazuje len prvky vytvorené pred týmto náčrtom. Pruh vľavo hore ukazuje čip stavu náčrtu („Plne definovaný“, „Nedostatočne definovaný (3 stupňov voľnosti)“ a podobne) a jeho názov, napríklad „Sketch2 on a face of Extrude1“.

## Panel vlastností (vpravo)

Panel vpravo ukazuje, čo je vybrané, a jeho nadpis to pomenúva:

- **Súčiastka** (nič nie je vybrané): **Názov** súčiastky a nastavenie **Krivky**.
- Rovina: tlačidlo {{ui:Náčrt na nej}}.
- **Plocha**: aký druh to je (Plochá plocha, Valec s polomerom a osou, Kužeľ, Guľa alebo Torus), jej obsah, ktorý prvok ju vytvoril, a pri plochej ploche {{ui:Náčrt na tejto ploche}}, {{ui:Kolmo na}}, {{ui:Exportovať plochu ako DXF}}, {{ui:Vytiahnuť z nej}}, {{ui:Vyrezať do nej}} a {{ui:Otvor tu}} (pozrite [Ťah alebo tlak celej plochy](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Hrana**: jej druh (priama, kružnica so stredom a polomerom, alebo krivka), jej dĺžka a dve plochy, medzi ktorými leží (napríklad „Extrude1 end face and Extrude1 side“), s tlačidlami {{ui:Zaoblenie}} a {{ui:Skosenie}}.
- Viac hrán alebo plôch vybraných pomocou {{key:Shift}}: koľko, s {{ui:Zaoblenie}} a {{ui:Skosenie}} pre hrany a {{ui:Vymazať}}.
- Prvok: jeho čísla a možnosti, kóty jeho náčrtu, potom {{ui:Potlačiť}}, {{ui:Vrátiť sa sem}}, {{ui:Posunúť hore}}, {{ui:Posunúť dole}}, {{ui:Zmazať}} a jeho **Názov**.
- Otvorený náčrt: jeho stav, väzby, ktoré môžete pridať k výberu, zoznam väzieb a kót, **Pridať podľa súradníc** a {{ui:Ukončiť náčrt}}, {{ui:Prispôsobiť}} a {{ui:Exportovať ako DXF}}.
- Na výkresovom liste: nastavenia rezu a detailu, alebo vybraný symbol GD&T.
- V zostave: zostava, vybraná súčiastka alebo vybraný kĺb.

Každé pole s číslom sa prejaví, keď stlačíte {{key:Enter}} alebo {{key:Tab}}, alebo kliknete inam. Súčiastka sa prestaví okamžite; nie je tlačidlo OK. Späť sa vrátite pomocou {{key:Mod+Z}}.

## Stavový riadok (dole)

- Vľavo súradnice ukazovateľa v náčrte (len pri otvorenom náčrte).
- V strede hlásenia: čo robiť ďalej a prečo sa niečo odmietlo. Prečítajte si ho, keď sa zdá, že sa nič nedeje.
- Blízko vpravo čip jadra: v tejto verzii vždy „Sieťové jadro“. Podržte nad ním ukazovateľ pre vysvetlenie. Pozrite [Sieťové jadro](topic:solid-kernels).
- Vpravo čip: „Prebudováva sa…“, kým sa súčiastka prestavuje, potom „Prebudované za … ms“, keď je všetko v poriadku, alebo „1 prvok zlyháva“. V zostave hlási „Umiestnené za … ms“ alebo počíta problémy so spojmi.

Pozrite aj [Začiatok návodu v Ilustrácii](topic:illustrate): pracovný priestor, ktorý vytvára návody na zostavenie z Vašich súčiastok a zostáv.

## Na úzkej obrazovke

Do šírky 760 pixelov, napríklad na telefóne, si pohľad ponecháva obrazovku: panel nástrojov je jeden riadok, ktorý sa posúva do strán, a panely sa otvárajú ako listy z panela dole. {{ui:Nástroje}} skryje panel nástrojov a {{ui:Presunúť}} ho dá dole. Pozrite [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
