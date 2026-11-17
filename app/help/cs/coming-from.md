---
title: Přechod z jiného parametrického modeláře
summary: Jak návyky z desktopových parametrických modelářů dílů odpovídají PartCraftu a rozdíly, které zkušené uživatele zaskočí v první hodině.
keywords: přechod, migrace, známé, správce prvků, strom návrhu, chytrá kóta, výstupek tažením, výřez tažením, průvodce dírou, vazby, detekce průniku, lišta návratu, panel vlastností, myš, rozdíly
from: fbacaee1
---

Pokud navrhujete díly v SolidWorks, většina nápadů PartCraftu bude známá: skici na rovinách Přední, Horní a Pravé, vazby a chytré kóty, historie prvků s lištou návratu a sestavy spojené vazbami. Způsob, jak se k nim dostanete, se místy liší a tato první verze dělá méně. Tato stránka mapuje vaše návyky a vypisuje překvapení.

## Návyky, namapované

| Jste zvyklí na | V PartCraftu |
|---|---|
| Strom návrhu vlevo | Historie vlevo: roviny, pak prvky, skici odsazené pod prvkem, který je používá |
| Roviny Přední, Horní a Pravá | Stejné tři, procházející počátkem. Přední je rovina XY, Horní je XZ, Pravá je YZ; Y směřuje nahoru |
| Skica na rovině nebo ploše, pak roh potvrzení pro ukončení | {{ui:Skica}} ({{key:S}}) na vybrané rovině nebo rovné ploše; {{ui:Ukončit}} nebo {{key:Esc}}, dokud se nezavře |
| Chytrá kóta | {{ui:Kóta}} ({{key:D}}). Klikněte na jednu nebo dvě položky, pak kam má číslo. Podle místa, kam ji umístíte, se vybere vodorovná, svislá nebo zarovnaná |
| Přidat vazby v panelu vlastností | Vyberte položky, pak tlačítka vazeb na pravém panelu (Koincidence, Vodorovná, Rovnoběžná, Tečna, Rovnost a tak dále) |
| Automatické vazby při skicování | Přichycení přidá koincidentní vazby, vazby bodu na křivce, vodorovné a svislé |
| Modré / černé / červené barvy skic | Stejná myšlenka: modrá nedostatečně určená, černá plně určená, červená přeurčená. Čip ukazuje zbývající stupně volnosti |
| Střednice pro rotace | {{ui:Osová čára}} ({{key:N}}); {{ui:Rotační těleso}} použije první osovou čáru, pokud nevyberete jinou osu |
| Zaoblení skici | {{ui:Zaoblení}} ({{key:F}}) ve skice: klikněte na roh, napište poloměr |
| Přepínač konstrukční geometrie | {{ui:Konstrukce}} ({{key:Q}}) |
| Vytažený výstupek | {{ui:Vytáhnout}}: Slepé, Střední rovina, Až k ploše / další / vrcholu, Odsazení od plochy, druhý směr, zkosení, jeden obrys (Vybrat oblasti) |
| Vytažený výřez | {{ui:Vyjmout}}: začíná jako Skrz vše; přepněte na Slepé pro kapsu |
| Rotovaný výstupek / výřez | {{ui:Rotační těleso}} / {{ui:Více}} › {{ui:Rotovaný výřez}} |
| Referenční rovina / osa / bod | {{ui:Více}} › {{ui:Rovina}}, {{ui:Osa}}, {{ui:Bod}} (viz [Referenční roviny, osy a body](topic:reference-geometry)) |
| Tažený nebo loftovaný výstupek či výřez, úkos | {{ui:Více}} › {{ui:Úkos}} na rovných plochách (viz [Tažení, lofting a úkos](topic:sweep-loft-draft)). {{ui:Tažení po dráze}} a {{ui:Lofting}} zatím v této verzi nejsou hotové (vyžadují přesné jádro) |
| Hole Wizard | {{ui:Díra}} na každém volném bodu skici: jednoduchá, zahloubení, záhlubení (90° / 82°) nebo řezaný závit ISO metrický M2–M24, průchozí nebo slepý |
| Lineární / kruhový vzor, zrcadlo | {{ui:Lineární}}, {{ui:Kruhový}}, {{ui:Zrcadlení}} (prvky nebo celé těleso) |
| Zaoblení a sražení hran | {{ui:Zaoblení}} / {{ui:Sražení hrany}}: klikněte na hranu, {{key:Shift}}+klik pro další, pak tlačítko. Jeden poloměr; sražení rovnoměrné, se dvěma vzdálenostmi, nebo vzdáleností a úhlem. V této verzi jen přímé hrany mezi dvěma rovnými plochami, a zaoblení, která se stýkají v rohu, jsou seříznuta na úkos. Zaoblte nebo zkoste zakřivené hrany ve skice ({{ui:Zaoblení}} ve skice, {{key:F}}) |
| Skořepina | {{ui:Skořepina}}: klikněte na rovné plochy k otevření, pak tlačítko. Jedna tloušťka stěny |
| Otevřít soubor STEP | {{ui:Otevřít}}: čte se jako trojúhelníky, pevné těleso, na kterém lze stavět ([Otevřít soubor STEP](topic:import-step)) |
| Upravit prvek, pak OK | Klikněte na prvek; změňte čísla vpravo; přestaví se, jak píšete. Žádné OK, žádné Zrušit: použijte {{key:Mod+Z}} |
| Upravit skicu | Dvojklik na skicu v historii |
| Přestavba | Automaticky po každé změně. Není žádná klávesa pro přestavbu |
| Potlačit / obnovit | {{ui:Potlačit}} / {{ui:Obnovit}} na pravém panelu |
| Přetáhnout lištu návratu | {{ui:Vrátit zpět sem}} na prvku; klikněte na „Lišta návratu · postup vpřed" pro návrat |
| Přetáhnout prvek ve stromu pro změnu pořadí | {{ui:Posunout nahoru}} / {{ui:Posunout dolů}} nebo {{key:Alt+Up}} / {{key:Alt+Down}}; odmítnuto s důvodem, když by porušilo závislost |
| Upravit kóty dvojklikem na model | Vyberte prvek: kóty jeho skici jsou vypsány na pravém panelu |
| Spojení: koincidence, soustřednost, vzdálenost, úhel | {{ui:Vazba}} ({{key:J}}): vyberte rovnou plochu na každém dílu; vazba je přiloží plochu na plochu. **Střed na** osu se chová jako soustřednost, **Odsazení** jako vzdálenost a **Úhel** jako úhel |
| Pevný komponent | První díl je uzemněný; {{ui:Nastavit jako pevný díl}} to změní |
| Vložit komponent | {{ui:Přidat kopii}} nebo {{ui:Duplikovat}} (další kopie), nebo {{ui:Vložit}} (ze souboru dílu) |
| Upravit díl v sestavě | {{ui:Upravit díl}}, pak {{ui:Zpět}} |
| Detekce průniku | {{ui:Kolize}} |
| Pohyb komponentu pro zobrazení pohybu | Přetáhněte posuvník úhlu nebo odsazení rotační nebo posuvné vazby; {{ui:Zkontrolovat pohyb na kolize}} jej projede. Díl bez vazby: **Přesun ručně** (šipky k tažení, nebo zadané hodnoty) |
| Měřit / Kontrolovat | {{ui:Pohledy}}, pak {{ui:Měřit}} ({{key:M}}): vzdálenosti, úhly, poloměry, plochy; {{ui:Hmotnostní vlastnosti}} |
| Rozložený pohled, kusovník | V sestavě, když nic není vybráno: **Rozložené pohledy** a **Kusovník** na pravém panelu |
| Hmotnostní vlastnosti | Pole **Díl**: objem, povrch a velikost fasetovaného tělesa (u kulatých dílů o něco nízko). Žádná hmotnost, protože materiály zatím nejsou |
| Uložit, Uložit jako STEP | {{ui:Uložit}} stáhne `.partcraft.json`; {{ui:Export}} nabízí STL, 3MF, přesný STEP (AP242 nebo AP214), fasetovaný STEP, DXF a výkres PDF |
| Vytvořit výkres z dílu | {{ui:Výkres}}: automatický list A3 se třemi pohledy, izometrie, jeden řez, jeden detail, referenční body, rámce tolerancí a symboly povrchu. Kótované jsou jen celkové rozměry |
| Prostřední tlačítko pro otočení | **Tažení levým** zde otáčí. Prostředním nebo pravým tažením posouváte. Kolečko přibližuje u ukazovátka |
| Orientace pohledu, Normála k | Nabídka {{ui:Pohledy}}; {{ui:Normála k}} pro vybranou plochu, rovinu nebo skicu |
| Přizpůsobit na obrazovku (F) | {{key:F}}, nebo {{ui:Přizpůsobit}} (ve skice je {{key:F}} nástroj Zaoblení) |
| Kontextové nabídky pravým tlačítkem | Žádné. Pravé tažení posouvá; ve skice pravý klik ukončí řetězec čar |

:::tip
Pokud vaše ruce znají SolidWorks, vyberte styl nabídky {{ui:Strom prvků}} v {{ui:Nastavení}} › {{ui:PartCraft}} › {{ui:Nabídky, klávesy a myš}}: pás karet Prvky, Skica, Plochy, Vyhodnocení, Výkres, Sestava a Pohled. Prostřední tlačítko otáčí, {{key:Shift}} a prostřední tlačítko posouvají a levé tlačítko jen vybírá. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).
:::

## Rozdíly, na které lidé narážejí

**Celá skica je profil.** Vytažení a rotace použijí každou uzavřenou smyčku ve skice. Pro prvek nelze vybrat jednu oblast ani jeden obrys skici. Používejte jednu skicu na prvek.

**Kterou skicu prvek vezme.** Prvek použije skicu, kterou jste právě uzavřeli, nebo tu, která je vybrána v historii. Když nic vybráno není, vezme nejnovější skicu, kterou ještě žádný prvek nepoužívá. Pokud dostanete špatnou, vyberte správnou skicu a prvek zvolte znovu.

**Změny se projevují při psaní.** Neexistuje dialog prvku s OK a Zrušit. Každé číslo přestaví díl okamžitě a cesta zpět je {{key:Mod+Z}}. Seznam zpět pokrývá úpravy skic, prvky i nastavení.

**Přeurčení se nikdy nesmí tiše zachovat.** Nejsou zde řízené (referenční) kóty. Kóta, kterou už ostatní vazby určují, je hlášena jako přeurčená („je již implicitně určena. Smažte ji."). Konfliktní kóta nechá geometrii nedotčenou a zčervená. Smažte jednu, nebo použijte zpět.

**Tažení po dráze a lofting zatím nejsou hotové. Zaoblení, sražení, skořepiny a úkosy mají omezení.** Tato verze PartCraftu staví každý díl mesh jádrem; čip na stavovém řádku vždy říká „Mesh jádro". Zaoblení a sražení fungují na přímých hranách mezi dvěma rovnými plochami, a kde se zaoblení stýká v rohu, jsou seříznuta na úkos, ne spojena. Skořepiny se otevírají a úkosy naklánějí jen rovné plochy. Prvky, které potřebují přesné jádro, zůstávají klikatelné, ale při výběru říkají „zatím není hotovo". Viz [Mesh jádro](topic:solid-kernels) a [Co zatím není hotovo](topic:not-built-yet).

**Dvě tlačítka Zaoblení.** Ve skice {{ui:Zaoblení}} ({{key:F}}) zaoblí roh skici. Na dílu {{ui:Zaoblení}} ve skupině Prvky zaoblí hrany těles (v této verzi přímé hrany mezi rovnými plochami). Tažení po dráze ani lofting v této verzi nejsou: viz [Co zatím není hotovo](topic:not-built-yet).

**Díry potřebují volné body.** {{ui:Díra}} vrtá v bodech vytvořených nástrojem Bod. Středy kružnic a koncové body čar se nepočítají.

**Průchozí vše je jen pro výřezy.** Výstupek potřebuje hloubku. Koncové podmínky „až k vrcholu / ploše / další" zatím nejsou.

**Těleso je fasetované.** Mesh jádro vytváří kulaté plochy z rovných fasetek, takže pohled, objemy a exporty STL a 3MF jsou z nich. **Křivky** v panelu dílu je zjemní. Přesný export STEP to nedělá: zapisuje kulaté plochy na jejich skutečných površích.

**Jen milimetry.** Nastavení palců zatím není. Při psaní palcových velikostí je vynásobte 25.4.

**Y směřuje nahoru.** Přední rovina je k vám čelem a Horní se dívá na díl shora, jak čekáte, ale osa nahoru ve světě je Y. Exporty STL, 3MF a přesného STEP jsou otočené na Z nahoru; fasetovaný STEP ponechá Y nahoru.

**Vazby jsou plochy, ne dvojice geometrie.** Vazba vždy začíná dvěma rovnými plochami přiloženými plochu na plochu. Pro kolík v díře vyberte rovnou plochu kolem díry a rameno kolíku, pak nastavte **Střed na** na osu díry a osu rotace kolíku. Díly, kterých se vazby nedotknou, zůstávají tam, kam byly vloženy; nelze je tažením přesunout. Vazby v smyčce se neřeší.

**Ukládání je stažení.** Neexistuje soubor, který by se stále přepisoval. Každé uložení je nový soubor ve složce stažených souborů. Nejdřív pojmenujte díl a soubory držte ve složce projektu.

**Žádné kontextové nabídky, žádné karty správce příkazů.** Vše je na panelu nástrojů a pravém panelu a panel nástrojů se mění podle toho, co děláte: nástroje skic se objeví jen ve skice, nástroje sestavy jen v sestavě.

**Klávesy jsou jednotlivá písmena uvnitř skici.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} a {{key:S}} vybírají nástroje bez modifikátoru. Viz [Klávesy a myš](topic:keyboard).
