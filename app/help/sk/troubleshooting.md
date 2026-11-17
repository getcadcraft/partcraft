---
title: Riešenie problémov
summary: Problémy, na ktoré môžete narraziť v PartCraft, od nespustenia aplikácie cez zlyhávajúce prvky, náčrty, ktoré sa nedajú vyriešiť, a súbory, ktoré sa nedajú otvoriť, až po spoje, ktoré sa správajú nesprávne, s hláseniami, ktoré uvidíte, a opravou.
keywords: problém, chyba, pomocník, nefunguje, zlyhá, zlyhávajúci, pád, prázdny, webgl, webassembly, jadro, ešte nie je hotové, nadmerne určený, otvorený profil, nedá sa otvoriť, nič sa nestane, zlý smer, pomalý
from: 7728542c
---

Ak niečo nefunguje, najprv si prečítajte **stavový riadok** dole: PartCraft tam uvedie, prečo niečo odmietol alebo čo očakáva ďalej. Zlyhávajúci prvok tiež zobrazí svoje hlásenie hore v pravom paneli a pri prejdení nad jeho riadkom v histórii.

## Aplikácia sa nespustí

### „Tento prehliadač nedokáže zobraziť 3D (WebGL je vypnuté alebo chýba), takže PartCraft tu nemôže bežať.“

**Príčina:** prehliadač má 3D grafiku (WebGL) vypnutú, zablokovanú alebo nepodporovanú grafickým ovládačom.

**Oprava:**

:::chromium
Otvorte `chrome://settings/system` (alebo `edge://settings/system` v Edge) a zapnite „Použiť hardvérovú akceleráciu, ak je k dispozícii“, potom prehliadač reštartujte. Ak je zapnutá, skontrolujte `chrome://gpu` kvôli stavu WebGL a aktualizujte grafický ovládač.
:::

:::firefox
Otvorte `about:support` a pozrite sa na Graphics, WebGL. Ak je zablokované, aktualizujte grafický ovládač. V `about:config` musí byť `webgl.disabled` na `false`.
:::

:::safari
WebGL je v aktuálnom Safari vždy zapnuté. Aktualizujte macOS (Safari sa aktualizuje spolu s ním). Ak zlyháva aj tak, skúste Chrome alebo Firefox na tom istom Macu, aby ste vylúčili grafický hardvér.
:::

Vzdialené plochy a niektoré virtuálne stroje nemajú WebGL. Skúste na samotnom počítači.

### „Jadro pevných telies sa nenačítalo: …“

**Príčina:** geometrické jadro (program WebAssembly) sa nedalo stiahnuť alebo spustiť. Zvyčajne spojenie počas načítavania aplikácie prerušilo, WebAssembly je vypnuté firemnou politikou alebo nastavením bezpečnosti prehliadača, alebo je prehliadač veľmi starý.

**Oprava:** znova načítajte stránku, keď ste online. Ak to stále zlyháva, skúste iný aktuálny prehliadač. Vo Firefoxe musí byť `javascript.options.wasm` v `about:config` na `true`. Offline sa aplikácia a jej jadro načítajú iba vtedy, ak lišta aplikácie hlásila **Pripravené na offline použitie** predtým, než ste stratili spojenie ({{ui:Uložiť na offline použitie}} keď ste online; pozri [Práca offline](common:offline)).

### Tlačidlo offline hlási „Nepodarilo sa uložiť“ alebo „Offline nie je k dispozícii“

**Nepodarilo sa uložiť**: niektoré súbory sa nestiahli. Kliknite na tlačidlo a skúste znova, keď ste online; pomalé alebo spoplatnené spojenie môže potrebovať druhý pokus. **Offline nie je k dispozícii**: toto okno prehliadača nedokáže uchovať offline kópiu (súkromné okná a niektoré spravované počítače to blokujú). Použite bežné okno alebo nechajte kartu otvorenú.

### PartCraft je offline, ale zastaraný

Kliknite na **Pripravené na offline použitie**, keď ste online, a zvoľte {{ui:Uložiť znova (získať najnovšiu verziu)}}.

### „Ťahanie po dráhe: ešte nie je hotové. Potrebuje presné jadro, …“

Úplné hlásenie je „<Name>: ešte nie je hotové. Potrebuje presné jadro, ktorého táto verzia PartCraft nemá. Pomocník › Čo ešte nie je hotové hovorí, čo robiť namiesto toho.“ Uvidíte ho, keď zvolíte Ťahanie po dráhe, Loft, Rebro, prírubu plechu, plošný prvok, Spojiť, Presunúť teleso, Škálovať teleso alebo Vzor po dráhe, a pri ďalších veciach, ktoré vyžadujú iba presné jadro. Nič nie je zle s vaším prehliadačom ani súčiastkou: táto verzia PartCraft stavia každú súčiastku sieťovým jadrom. Pozri [Čo ešte nie je hotové](topic:not-built-yet), čo robiť namiesto toho, a [Sieťové jadro](topic:solid-kernels).

### „Načítavanie jadra pevných telies…“ sa nikdy neskončí

Počkajte chvíľu na pomalom spojení: jadro a 3D knižnica sa sťahujú pri prvom spustení. Potom znova načítajte stránku. Ak stránka sama zobrazuje chybu, pozri vyššie.

## Nič sa nestane, keď stlačím kláves

- Klávesy nefungujú, keď je kurzor v poli v paneli. Kliknite do 3D pohľadu alebo stlačte {{key:Esc}} po písaní (alebo {{key:Tab}} na odchod).
- Klávesy so šípkami a {{key:Plus}}/{{key:Minus}} otáčajú a priblížia pohľad, až keď kliknete do pohľadu.
- Otvorený je dialóg: najprv naň odpovedzte.
- V náčrte je {{key:F}} nástroj Zaoblenie, nie Prispôsobiť. Použite tlačidlo {{ui:Prispôsobiť}}.

## Tlačidlo na paneli nástrojov je sivé

- Tlačidlá prvkov sú sivé, kým je náčrt otvorený. Najprv náčrt zavrite.
- Nástroje náčrtu fungujú iba v náčrte.
- {{ui:Späť}} a {{ui:Znova}} sú sivé, keď nie je čo vrátiť alebo zopakovať.
- {{ui:Zostava}} potrebuje súčiastku s telesom. {{ui:Kĺb}} potrebuje dve súčiastky v zostave. {{ui:Upraviť súčiastku}} potrebuje vybratú súčiastku.
- {{ui:STEP AP242 (presné teleso)}} a {{ui:STEP AP214 (presné teleso)}} sú v zostave sivé: exportujte každú súčiastku osobitne. Iný program odmietne presný súbor: skúste {{ui:STEP AP214 (presné teleso)}}, potom {{ui:STEP (fazetovaný, sieťové jadro)}}, a dajte nám vedieť cez {{ui:Pomocník}} › {{ui:Nahlásiť problém}}.
- {{ui:Ťahanie po dráhe}}, {{ui:Loft}} a ďalšie prvky, ktoré potrebujú presné jadro, nie sú sivé: zostávajú klikateľné, ich popisy končia „ešte nie je hotové (potrebuje presné jadro)“ a kliknutie na ne to oznámi v stavovom riadku. Pozri [Čo ešte nie je hotové](topic:not-built-yet).
- {{ui:Výkres}} potrebuje súčiastku s telesom a je sivý, kým je náčrt otvorený.
- Položky ponuky {{ui:Export}} sú v zostave sivé: zostavy sa zatiaľ nedajú exportovať. Zatvorte ju alebo upravte súčiastku, aby ste mohli exportovať.

## Problémy s náčrtom

### Náčrt mi nedovolí pridať vzťah

„Žiadny vzťah nezodpovedá tomuto výberu. Vyberte jednu alebo dve položky (Shift+klik pridá).“ Vzťah potrebuje iný výber. Pozri [Vzťahy a kóty náčrtu](topic:sketch-relations), čo každý potrebuje.

### „Nadmerne určené: … nedajú sa všetky splniť. Vráťte späť alebo zmažte jednu z nich.“

**Príčina:** nový vzťah alebo kóta je v spore s tými, ktoré už existujú. Náčrt sa nepohol.

**Oprava:** {{key:Mod+Z}}, alebo zmažte jednu z červených položiek v zozname pravého panela (vyberte **Zmazať** vedľa nej).

### „Nadmerne určené: … je už vyplývajúce. Zmažte ho.“

**Príčina:** vzťah nič nepridáva: ostatné ho už vynucujú (napríklad Rovnobežnosť na dvoch stranách obdĺžnika, alebo kóta, ktorá je už pevná). V tejto verzii nie sú riadené kóty.

**Oprava:** zmažte ho. Prvok sa aj tak vytvorí, s varovaním.

### „Tieto položky sa nedajú okótovať spolu.“

Kliknuli ste napríklad na bod a kružnicu. Okótujte namiesto toho na stred kružnice.

### „Zaoblenie potrebuje roh, kde sa stretávajú presne dve čiary.“ / „Tento polomer je pre tieto čiary príliš veľký.“

Kliknite presne na rohový bod dvoch pevných čiar. Použite menší polomer, než dovoľuje kratšia čiara.

### Geometria skočí späť, keď ju ťaháte

Ťahanie by porušilo vzťah alebo kótu, takže PartCraft ju vráti späť. Pohnúť sa dá iba modrá (nedourčená) geometria.

### „Tento náčrt sa nedá otvoriť: Potrebuje Extrude2, ktorý zlyháva.“

Náčrt leží na ploche prvku, ktorý nie je vytvorený. Najprv opravte ten prvok, alebo zrušte jeho potlačenie, alebo posuňte históriu vpred.

## Problémy s prvkami

| Hlásenie | Príčina | Oprava |
|---|---|---|
| „Najprv vytvorte náčrt: vyberte rovinu, Náčrt, nakreslite uzavretý profil, Ukončiť.“ | Nie je nepoužitý náčrt s krivkami a žiaden nie je vybraný | Nakreslite náčrt, alebo vyberte náčrt na použitie v histórii |
| „Náčrt nemá uzavretý profil na vytiahnutie.“ (alebo „na otočenie“) | Žiadna uzavretá slučka z plných čiar | Uzavrite medzery; vráťte konštrukčné čiary späť klávesom {{key:Q}} |
| „Profil je otvorený: koniec v (x, y) nie je nikam pripojený.“ | Medzera v tomto bode | Otvorte náčrt, pretiahnite koniec na susedný tak, aby zapadol |
| „Profil sa vetví v (x, y): tam sa stretávajú viac ako dva konce.“ | Tri alebo viac čiar sa stretáva v jednom bode | Zmažte prebytočnú čiaru, alebo ju prepnite na konštrukčnú |
| „Uzavretá slučka potrebuje aspoň tri strany alebo krivku.“ | Dve čiary tam a späť | Nakreslite slučku znova |
| „Cez všetko je pre výrezy. Pre výstupok použite hĺbku.“ | Výstupok nastavený na Cez všetko | Nastavte Koniec na Slepý alebo Stred roviny |
| „Na tej strane náčrtu nie je čo vyrezať. Skúste opačný smer.“ | Výrez smeruje od materiálu | Zaškrtnite Obrátiť smer |
| „Ešte nie je čo vyrezať.“ / „Ešte nie je čo vŕtať.“ | Pred týmto prvkom nie je teleso | Najprv vytvorte výstupok, alebo presuňte prvok nižšie |
| „Nakreslite os (konštrukčnú čiaru) v náčrte, okolo ktorej sa má otočiť.“ | Otočenie bez osi | Pridajte os, alebo zvoľte čiaru v Osi |
| „Profil pretína os. Nechajte ho na jednej strane osi.“ | Profil na oboch stranách osi | Nakreslite znova polovicu profilu |
| „Umiestnite body náčrtu tam, kde majú byť diery (nástroj Bod), potom vytvorte dieru.“ | V náčrte nie sú voľné body | Pridajte body klávesom {{key:P}} |
| „Zahĺbenie musí byť širšie než diera.“ | Ø zahĺbenia nie je väčšie než Priemer | Urobte zahĺbenie širšie |
| „Zahĺbenie musí byť plytšie než diera.“ | Zahĺbenie je hlbšie než slepá diera | Urobte ho plytšie, alebo dieru hlbšiu |
| „Vyberte prvky na skopírovanie.“ | Vzor alebo zrkadlo bez zaškrtnutia | Zaškrtnite prvok pod Prvky na kopírovanie |
| „Extrude2 nemá teleso na skopírovanie.“ | Skopírovaný prvok zlyhal alebo je vypnutý | Opravte ho alebo zrušte jeho potlačenie |
| „Potrebuje Sketch3, ktorý zlyháva.“ | Prvok, od ktorého závisí, nie je vytvorený | Opravte prvok, ktorý uvádza |
| „Plocha, na ktorej leží, zmizla (Extrude1 nie je vytvorený).“ | Plocha náčrtu už neexistuje | Opravte ten prvok, alebo zmažte náčrt a nakreslite ho znova |
| „Po tomto nezostalo nič z časti.“ | Výrez odstránil všetok materiál | Skontrolujte veľkosť a smer výrezu |
| „Jadro pevných telies to nemohlo vytvoriť (…).“ alebo „Jadro pevných telies to nemohlo spojiť s telesom.“ | Jadro odmietlo geometriu | Vráťte späť, alebo mierne zmeňte veľkosti; dotýkajúce sa plochy to môžu spôsobiť |
| „Ťahanie po dráhe: ešte nie je hotové. Potrebuje presné jadro, ktorého táto verzia PartCraft nemá.“ (aj Loft, Rebro a ďalšie) | Prvok vytvorený v staršom zostavení, ktoré dokáže vytvoriť iba presné jadro. Zostane v histórii a uloží sa späť nezmenený | Potlačte ho alebo zmažte; pozri [Čo ešte nie je hotové](topic:not-built-yet), čo robiť namiesto toho |
| „Zaoblenie 5 mm sa tu nevojde (…).“ / „Skosenie 2 mm …“ | Veľkosť je pre plochu vedľa hrany príliš veľká, alebo roh sa nedá zaoblit | Menšia veľkosť, alebo menej hrán na prvok |
| „Zaoblenie: v tejto verzii iba rovné hrany medzi dvoma rovinnými plochami (vytvára ich sieťové jadro). Zaoblite alebo zrezajte zakrivené hrany v náčrte.“ (aj Skosenie) | Vybraná hrana je okrúhla, napríklad okraj diery, alebo leží na zakrivenej ploche | {{ui:Vybrať hrany}} a odstráňte ju; zaoblite alebo zrezajte ten roh namiesto toho v náčrte |
| „Zaoblenie s polomerom meniacim sa pozdĺž hrany: ešte nie je hotové (potrebuje presné jadro). Zadajte jeden polomer.“ | Je zaškrtnuté **Premenlivý polomer** | Odškrtnite ho a zadajte jeden polomer |
| „Zaoblenie sieťovým jadrom: kde sa zaoblené hrany stretajú, sú zrezané pod uhlom, nie zlúčené.“ (⚠, varovanie) | Vybrané hrany sa stretávajú v rohu; zaoblenia sa tam stretnú v ostrom zlome | Nič na opravu: súčiastka je vytvorená. Zaoblite menej hrán, ak na zlome záleží |
| „Hrana, ktorú zaoblenie zaoblí, zmizla: hrana medzi Extrude1 a Cut2.“ | Predchádzajúca zmena hranu odstránila | {{ui:Vybrať hrany}}, odstráňte červenú hranu a vyberte novú |
| „Vyberte hrany v pohľade, potom ich pridajte.“ | Zaoblenie alebo skosenie nemá hrany | {{ui:Vybrať hrany}} |
| „Vyberte plochy na odstránenie (otvorené), potom vydutie.“ | Vydutie nemá otvorené plochy | {{ui:Vybrať plochy}} |
| „Vydutie sa nedalo vytvoriť s touto hrúbkou (…).“ | Stena je hrubšia než tenká časť modelu alebo polomer zaoblenia | Tenšia stena, alebo väčšie zaoblenia |
| „Vydutie: v tejto verzii otvára iba rovné plochy (vytvára ho sieťové jadro).“ | Otvorená plocha je zakrivená | {{ui:Vybrať plochy}} a odstráňte ju; otvárajte iba rovné plochy |
| „Úkos: v tejto verzii iba rovné plochy (vytvára ho sieťové jadro).“ | Skosená plocha je valec, kužeľ alebo voľná plocha | Odstráňte ju; skosujte iba rovné plochy |
| „Plocha, ktorú otvára, zmizla (…).“ | Predchádzajúca zmena plochu odstránila | Znova {{ui:Vybrať plochy}} |
| „Zaoblenie1 mení hrany alebo steny telesa; nedá sa skopírovať. …“ | Vzor alebo zrkadlo kopíruje zaoblenie, skosenie alebo vydutie | Odškrtnite ho; najprv vzorujte výrezy, potom zaoblite |
| „Leží na ploche, ktorú nájde iba presné jadro: v tejto verzii ešte nie je hotové.“ | Náčrt na ploche, ktorú sieťové jadro nenájde, napríklad ktorá vznikla v staršom zostavení | Nakreslite na základnej rovine alebo na rovnej ploche vytiahnutia a umiestnite ho kótami |
| „Používa plochu alebo hranu telesa, ktorú nájde iba presné jadro: v tejto verzii ešte nie je hotové.“ | Referenčná rovina, os alebo bod na ploche alebo hrane telesa | Vytvorte ich zo základných rovín, bodov náčrtu alebo súradníc |
| „Vytiahnutie po plochu, ďalšiu plochu alebo vrchol: ešte nie je hotové (potrebuje presné jadro).“ / „Zúženie: ešte nie je hotové (potrebuje presné jadro).“ | Koncová podmienka alebo zúženie, ktoré buduje iba presné jadro | Použite hĺbku Slepý alebo Stred roviny, ktorú odmeriate; nechajte Zúženie na 0 |

## Problémy s výberom

- „Táto plocha je zakrivená. Vyberte rovnú plochu alebo rovinu, na ktorú môžete kresliť.“ Náčrty potrebujú rovnú plochu. Kreslite na základnú rovinu a umiestnite náčrt kótami.
- Plocha hlási „Pevná na mieste výberu“: nebola vytvorená hranou náčrtu (napríklad plocha kópie vzoru), takže náčrt na nej zostane na mieste, keď sa súčiastka zmení.
- Hrany sa ťažko trafia: priblížte. Hrana vyhrá nad susednou plochou, keď je ukazovateľ presne na nej.

## Problémy so súbormi

| Hlásenie | Oprava |
|---|---|
| 'PartCraft otvára vlastné súbory .partcraft.json, exporty z makra CadCraft pre SolidWorks (.cadcraft-sw.json) a súbory STEP. „bracket.igs“ nie je ani jeden z nich.' | Rozpoznávajú sa iba tieto súbory (a siete STL, OBJ a 3MF a súbory `.3dm`) |
| '„part.stp“ nie je súbor STEP (nezačína sa ISO-10303-21).' | Súbor nie je textový STEP |
| „Tento súbor STEP je príliš veľký (nad 60 MB) na import tu.“ | Zjednodušte ho pri zdroji |
| „Tento súbor je príliš veľký na to, aby bol súčiastkou PartCraft.“ pri vašej vlastnej uloženej súčiastke | Veľké teleso STEP importované v staršom zostavení urobilo súbor súčiastky väčší než 50 MB. Použite staršiu kópiu bez neho |
| „Tento súbor je príliš veľký na to, aby bol súčiastkou PartCraft.“ | Súbor má viac než 50 MB; nie je to súbor PartCraft |
| „Toto nie je súbor PartCraft (nie je to JSON).“ / „Toto nie je súbor PartCraft.“ | Súbor je poškodený alebo patrí inému programu |
| „Tento súbor uložil novší PartCraft (verzia súboru …); tento číta verziu …“ | Otvorte ho v novšom PartCraft |
| „Extrude2: hĺbka je chybná.“ (alebo iná hodnota) | Súbor bol upravený ručne alebo poškodený. Použite staršiu kópiu |
| Vloženie v zostave hlási „Part1.partcraft.json nemá teleso na vloženie.“ | Súbor súčiastky nemá teleso. Otvorte ho, vytvorte teleso, uložte a vložte znova |

**Môj uložený súbor nie je tam, kde som čakal.** Uloženie je sťahovanie: pozrite sa do priečinka sťahovaní prehliadača alebo otvorte zoznam sťahovaní z panela prehliadača. Pozri [Kde sa ukladajú vaše súbory](common:your-files).

**Otvoril som súčiastku, ale zostava je stále na obrazovke.** Súčiastka sa načítala za zostavou. Zvoľte {{ui:Zavrieť}}, aby ste zatvorili zostavu a uvideli súčiastku. Zatvorte zostavy pred otvorením súborov súčiastok.

## Problémy s výkresom

| Hlásenie | Oprava |
|---|---|
| „Najprv vytvorte teleso, potom jeho výkres.“ | Najprv vytvorte súčiastku |
| „Na list nie je miesto pre: detail. Zmenšite detail alebo vynechajte pohľad.“ | Menší **Polomer detailu** alebo **Mierka detailu**, alebo odstráňte rez |
| „Detail sa berie z pohľadu spredu, zhora, sprava alebo rezu.“ | Kliknite na jeden z týchto pohľadov |
| „Kliknite na jeden z pohľadov.“ | Kliknutie bolo na prázdny papier |
| „Pozícia potrebuje aspoň jednu referenciu bázy.“ a ďalšie hlásenia rámčeka | Nastavte bázy, o ktoré panel žiada, alebo vyberte inú charakteristiku |
| „Pohľady výkresu sa nedali vytvoriť: …“ | Vráťte späť poslednú zmenu. Ak sa to opakuje, uložte, znova načítajte a znova otvorte súčiastku |

## Problémy so zostavou

| Hlásenie | Oprava |
|---|---|
| „Najprv vytvorte teleso, potom ho vložte do zostavy.“ | Súčiastka ešte nemá teleso |
| „Najprv vložte druhú súčiastku (Pridať kópiu, Vložiť, alebo Upraviť › Duplikovať).“ | Kĺb potrebuje dve súčiastky |
| „Vyberte plochu na inej súčiastke.“ | Obe plochy kĺbu musia byť na rôznych súčiastkach |
| „Táto plocha je zakrivená. Vyberte rovnú plochu …“ | Kĺby začínajú na rovných plochách. Potom použite **Stred na** pre dieru alebo os otočenia |
| „Bracket2 nie je spojená s uzemnenou súčiastkou, takže zostane tam, kde bola umiestnená.“ | Pridajte kĺb z nej k súčiastke, ktorá je umiestnená |
| „Revolute3 uzatvára slučku, ktorá sa nedá uzavrieť: je mimo o 2.000 mm. Skontrolujte plochy, odsadenia a limity kĺbov slučky.“ | Súčiastky sa nedajú všetky spojiť: skontrolujte dĺžky, plochy, ktoré každý kĺb používa, odsadenia (súčiastky naložené plochou na plochu musia súhlasiť v hĺbke) a limity; alebo odstráňte jeden kĺb zo slučky |
| „Plocha, ktorú tento kĺb používa, zmizla z Bracket.“ / „Os, ktorú tento kĺb používa, zmizla z Bracket.“ | Súčiastka bola upravená. Odstráňte kĺb a vytvorte ho znova |
| „Os leží pozdĺž plochy, takže nemôže nastaviť stred kĺbu.“ | Zvoľte os, ktorá pretína plochu, alebo „Vlastný začiatok plochy“ |
| „Zostava si ponechá aspoň jednu súčiastku. Zatvorte ju namiesto toho.“ | Použite {{ui:Zavrieť}} |

**Súčiastky sú spojené, ale na nesprávnom mieste.** Nastavte **Stred na** pre obe strany kĺbu na dierach alebo osiach otočenia, ktoré sa majú zarovnať, potom upravte **Uhol (°)** a **Odsadenie (mm)**.

## Je to pomalé

- Nastavte **Krivky** na Normálne alebo Hrubé počas modelovania; pred exportom prepnite na Jemné.
- Veľké počty vzorov (stovky kópií) trvajú pri každej zmene dlho. Potlačte vzor, kým pracujete na iných prvkoch.
- Kontrola kolízií a kontrola pohybu porovnávajú každý pár súčiastok; veľké zostavy trvajú dlhšie.
- Zatvorte ďalšie náročné karty. PartCraft beží na procesore a grafike vášho počítača.

## Stále to nejde

Najprv uložte súbor ({{key:Mod+S}}), potom znova načítajte stránku a otvorte ho znova. Ak prvok stále zlyháva, vyberte ho, prečítajte si jeho hlásenie a skúste {{key:Mod+Z}} späť k poslednému dobrému stavu.
