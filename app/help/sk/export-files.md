---
title: Export na tlač, STEP a DXF
summary: Exportujte súčiastku ako STL alebo 3MF na 3D tlač, ako presné teleso STEP pre iné CAD a CAM programy a náčrt alebo rovnú plochu ako DXF na laserové a vodné rezanie.
keywords: export, uložiť ako, ifc, bim, sady vlastností, stl, 3mf, 3D tlač, slicer, step, stp, presné step, b-rep, ap242, ap214, cam, strojárska dielňa, frézovanie, dxf, laser, vodný lúč, cnc, plochý vzor, profil, sieť, fazetovaný
from: e1de71d5
---

Exporty sú kópie v iných formátoch. Súbor `.partcraft.json` si ponechajte tiež: je to jediný súbor, ktorý PartCraft dokáže znova otvoriť a upraviť.

Všetky exporty pracujú so súčiastkou na obrazovke, v milimetroch. V zostave exportujú STL, 3MF, STEP a Výkres (PDF) celú zostavu: pozri [Zoznam dielov, rozložené pohľady a pohyblivé časti](topic:assembly-bom-explode). Ak zatiaľ nie je žiadne teleso: "Na export zatiaľ nie je žiadne teleso."

## Na 3D tlač: STL alebo 3MF

1. Voliteľné: pri hladkých okrúhlych plochách kliknite na prázdne miesto, aby nebolo nič vybraté, a v pravom paneli nastavte **Krivky** na **Jemné (128 na otáčku)** alebo **Veľmi jemné (256 na otáčku)**. STL a 3MF sú vždy zložené z trojuholníkov.
2. Vyberte {{ui:Export}}, potom {{ui:STL, for 3D printing}} alebo {{ui:3MF, for 3D printing}}.
3. Súbor sa stiahne. Stavový riadok napríklad hlási: "Exportované Part1.stl (binárne, mm, Z nahor, 1536 trojuholníkov)."

Obidva formáty sú **Z nahor**, ako to tlačiarne a slicery očakávajú. Vlastný svet PartCraft je Y nahor, takže export súčiastku otočí: čo smeruje nahor v PartCraft (kolmo na rovinu Top), smeruje nahor aj v slicer, a súčiastka nakreslená na rovine Top leží na podložke rovno. Ak je treba, nastavte výslednú orientáciu v slicer.

3MF je novší a menší formát, ktorý slicery čítajú spolu s jednotkami. Ak program 3MF nepodporuje, použite STL.

Ak chcete najprv skontrolovať, či je súčiastka uzavretá, zmestí sa na podložku tlačiarne a stojí na rovnej ploche, použite {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}: pozri [Pripravte súčiastku na 3D tlač](topic:print-3d).

## Pre iné CAD programy: STEP

Vyberte {{ui:Export}}, potom {{ui:STEP AP242 (presné teleso)}}. Súčiastku zapíše ako jedno presné teleso v milimetroch, otočené do Z nahor. Okrúhle plochy sa zapíšu ako skutočné valce, kužele, gule a torusy, s pravými kružnicami ako hranami, takže druhý program môže otvor vybrať ako otvor. Teleso otvorené zo súboru STEP si zachová rovné plochy, valce, kužele, gule a torusy zo súboru, takže sa exportujú tiež presne. Plochy bez takého povrchu (bočná strana splajnu, modelovaný závit, teleso zo siete STL, OBJ alebo 3MF, splajn zo súboru STEP, ťahané a rotačné plochy) zostanú v tom istom telese ako rovné fazety a stavový riadok uvedie ich počet. Stavový riadok napríklad hlási: "Exportované Flange.step (AP242, presné teleso, mm, Z nahor): 14 plôch na ich skutočných povrchoch (10 valcových, 1 kužeľová, 0 guľových, 0 toroidných), 0 prispôsobených hranových kriviek." Obsahuje iba teleso: bez histórie, náčrtov a výkresu. Ak druhý program číta iba AP214, zvoľte {{ui:STEP AP214 (presné teleso)}}: to isté teleso v staršej schéme.

Čo je presné a čo nie:

- Rovné plochy, valce (otvory, výstupky, zaoblenia na priamych hranách), kužele (zápustky, zúženia), gule a torusy sú presné, rovnako ako ich priame, kruhové a eliptické hrany. Nastavenie **Krivky** ich nemení.
- Kde sa dve okrúhle plochy pretínajú (otvor vyvŕtaný cez hriadeľ), je hrana hladká krivka prispôsobená obom plochám s odchýlkou do 0.00001 mm; počíta ju "prispôsobené hranové krivky".
- Uzavretá dutina vnútri súčiastky sa zapíše ako dutina telesa. Viaceré oddelené telesá sa zapíšu ako viaceré telesá.
- Zostava sa zatiaľ nezapisuje ako presný STEP: exportujte každú súčiastku zvlášť.

Overené čítaním súborov v OpenCascade, ktorý hlási platné telesá s objemami vypočítanými ručne. Ešte nebol otvorený v každom CAD alebo CAM programe; ak niektorý program súbor odmietne, {{ui:STEP (fazetovaný, sieťové jadro)}} zapíše ten istý tvar ako rovné plochy (v osiach PartCraft, Y nahor). Dajte nám vedieť cez {{ui:Help}} › {{ui:Report a problem}}.

Pracovné prostredie Manufacture zapíše presné teleso aj v pracovných súradniciach nastavenia: pozri [Vytvorte dráhy nástroja a G-kód](topic:manufacture#exact-step-for-the-shop).

## Pre BIM programy: IFC so všetkými vlastnosťami

Vyberte {{ui:Export}}, potom {{ui:IFC 4 (so všetkými vlastnosťami)}}. Súčiastku zapíše ako prvok IFC 4 pre modely budov a zariadení, jej tvar ako trojuholníky (Z nahor, milimetre) a to, čo o nej PartCraft vie, ako sady vlastností:

| Sada vlastností | Obsahuje |
|---|---|
| **PartCraft_Part** | Názov, materiál a jeho hustotu, aktívnu konfiguráciu, počet telies; v zostave aj číslo a popis súčiastky |
| **PartCraft_Parameters** | Každý parameter súčiastky s jeho hodnotou; výraz vzorca a poznámka sú v popise vlastnosti |
| **PartCraft_TitleBlock** | Polia popisového poľa výkresu, ktoré ste vyplnili (názov, číslo výkresu, revízia, firma, kreslil, kontroloval a schválil, dátum, povrchová úprava, všeobecná tolerancia), a formát listu |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Objem, povrchová plocha, hmotnosť (s materiálom) a celkový rozmer |

Materiál sa pripojí ako materiál IFC a číslo výkresu je značkou prvku. V zostave je každá súčiastka zapísaná raz ako typ s vlastnosťami a každá kópia je umiestnená tam, kam ju zostava dala, so svojimi hodnotami v **PartCraft_Instance**: jej názov, jej položkové číslo v kusovníku a to, či ide o pevne ukotvenú súčiastku.

## Pre laserové, vodné alebo CNC profily: DXF

Dva druhy DXF, obidva vo verzii R12, ktorú otvorí každý CAD a CAM program:

### Náčrt

1. Vyberte náčrt v histórii (alebo ho mať otvorený).
2. Vyberte {{ui:Export}}, potom {{ui:DXF náčrtu alebo plochej plochy}}. (Pravý panel náčrtu má tiež {{ui:Export as DXF}}.)

Dostanete `<part> - <sketch>.dxf` v súradniciach samotného náčrtu: čiary, pravé oblúky a kružnice na hladine **PROFILE**, konštrukčná geometria na **CONSTRUCTION**, samostatné body na **POINTS**.

### Rovná plocha telesa

1. Kliknite na rovnú plochu v pohľade (napríklad na hornú stranu platne s otvormi).
2. Vyberte {{ui:Export face as DXF}} v pravom paneli, alebo {{ui:Export}}, potom {{ui:DXF náčrtu alebo plochej plochy}}.

Dostanete `<part> - face.dxf`: obrys plochy a každý otvor v nej. Okrúhly otvor (celá kružnica tam, kde valec pretína plochu: vyvŕtaný otvor, alebo otvor z otvoreného súboru STEP) sa zapíše ako pravá kružnica so svojím stredom a polomerom. Každý ďalší obrys je uzavretá lomená čiara a jeho okrúhle hrany (rohy zaoblení, drážky, oblúky) sú fazety, takže ak ich rezačka presne sleduje, najprv nastavte **Krivky** na Jemné. Stavový riadok hlási počet obrysov, koľko z nich sú pravé kružnice, a plochu plochy.

Ak nie je vybraný ani náčrt, ani rovná plocha: "Otvorte alebo vyberte náčrt, prípadne vyberte rovnú plochu, aby sa dal exportovať DXF."

## Výkres

Výkres PDF má vlastný postup: [Vytvorte výkresový list](topic:drawing-pdf).

## Nedostupné formáty

glTF, OBJ, IGES a Parasolid sa v tejto verzii neexportujú. DWG zapíše iba [balík variantov](topic:variant-pack), ako výkresový list každej konfigurácie. Pozri [Formáty súborov](topic:file-formats).
