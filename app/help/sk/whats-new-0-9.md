---
title: Čo je nové vo verzii 0.9 (staršie)
summary: PartCraft 0.9 prináša zaoblenia medzi plochami a zhrubnutie na telesá, zostavy s tisícmi súčiastok, trezor dokumentov s revíziami, doplnok Solid FEM na pevnosť, desať metód oblúka, britské oceľové profily, fázu tlače a doplnky tlače na živicu.
keywords: čo je nové 0.9, staršie vydanie, čo je nové, poznámky k vydaniu, zoznam zmien, 0.9, zaoblenie medzi plochami, kotúľajúca guľa, zaoblenie viacerých hrán, zhrubnutie, teleso z plôch, step škrupina, iges teleso, zaoblenia zo skenu, veľká zostava, odľahčené zobrazenie, 20000 súčiastok, dokumenty, trezor, odhlásenie, revízia, vydanie, kde sa používa, prepojenie s Rhino, grasshopper, 3dm, kurzory, výrobná hala, fronta úloh, solid fem, konečné prvky, von Mises, vlastná frekvencia, metódy oblúka, oblúk tromi bodmi, britské oceľové profily, fáza tlače, živica, goo, ctb, podložka, rozvinúť, čo je nové, zoznam zmien, 0.8, 0.8.1, verzia, nové funkcie, živá analýza, aktualizovať počas úprav, zlomiť to, čo sa zlomí ako prvé, faktor zaťaženia, nelineárne, plastické tečenie, kontakt, calculix, štúdia pohybu, vôľa, plochy, nurbs, vyhladiť, trup, zebra, engineer, generátor, generované teleso, náčrt z fotografie, mierka pre tlač, rozdelenie pre tlač, zmrštenie, rozmiestnené tabule, g-kód, výkres, okótovať otvory, asistent, mcp, jazyky, riadky panela nástrojov
from: 1dafd7c8
---

Toto je to, čo sa zmenilo vo PartCraft 0.9 v porovnaní s 0.8.1. Zakrivené plochy sa teraz uzavrú do telies, zostavy s tisíckami súčiastok zostávajú použiteľné, trezor dokumentov uchováva revízie a doplnok Solid FEM kontroluje pevnosť v súčiastke. Každá položka uvádza, kde ju nájsť.

## Nové vo verzii 0.9.1

- **Export presného STEP.** {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} a {{ui:STEP AP214 (presné teleso)}} teraz fungujú. Otvory, výstupky, zaoblenia, kužele, gule a torusy sa zapisujú na svojich skutočných plochách, s kružnicami ako hranami, takže iný CAD alebo CAM program dokáže otvor rozpoznať ako otvor. Splajnové strany, modelované závity a importované siete zostávajú v tom istom telese ako ploché facety. Pozri [Export na tlač, STEP a DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dnu, presný STEP von.** Súbor STEP, ktorý otvoríte, si zachová svoje rovné plochy, valce, kužele, gule a torusy, takže {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} ich zapíše späť ako skutočné plochy, nie ako facety: nosník dodávateľa s otvormi na skrutky odchádza s tými istými plochami, s ktorými prišiel, plus čímkoľvek, čo ste doň vyrezali. Splajnové, zametané a otáčané plochy súboru zostávajú facetmi, rovnako ako telesá z STL, OBJ a 3MF. Súbor STEP znovu otvorte pre súčiastku uloženú skôr. Pozri [Otvoriť súbor STEP a stavať na ňom](topic:import-step).
- **Skutočné kružnice v DXF plôch.** {{ui:Export}} › {{ui:DXF náčrtu alebo plochej plochy}} s vybranou rovnou plochou teraz zapíše okrúhle otvory ako kružnice, s vlastným stredom a polomerom otvoru, pre laserový, plazmový alebo vodnodryskový stôl. Ostatné okrúhle hrany zostávajú facetmi.
- **Presný STEP pre dielňu.** Vo {{ui:Výroba}} {{ui:Presný STEP (pracovné súradnice)}} zapíše súčiastku s počiatkom v pracovnom začiatku nastavenia a Z pozdĺž osi nástroja, teda v súradniciach, ktoré G-kód používa. Pozri [Vytvoriť dráhy nástroja a G-kód](topic:manufacture#exact-step-for-the-shop).

## Nové

### Plochy a telesá

- **Zaoblenie medzi plochami.** Vyberte {{ui:Plochy}} v rámiku {{ui:Pracovný priestor}}, potom {{ui:Zaoblenie medzi plochami}}. Vyberte dve plochy jedného telesa, zadajte polomer (a {{ui:Polomer na konci (mm, 0 = rovnaký)}} pre polomer, ktorý sa mení pozdĺž hrany). Výsledkový riadok hovorí, ako ďaleko je zaoblenie od ideálnej kotúľajúcej sa gule, a polomer, ktorý nesedí, sa odmietne s menovanou plochou. {{ui:Zaoblenie viacerých hrán}} zaoblí mnoho hrán v jednom kroku; zaškrtnite {{ui:Rohy (guľová záplata, kde sa stretnú tri)}} pre guľový roh, kde sa stretnú tri zaoblené hrany rovných plôch. Pozri [Voľné plochy (NURBS)](topic:nurbs-surfaces).
- **Zhrubnutie na teleso.** {{ui:Zhrúbnutie na teleso}} v tom istom pracovnom priestore dá ploche hrúbku; {{ui:Druhá strana}} ju rozšíri na druhú stranu. Zlom alebo samoprekríženie sa odmietne s menovanou plochou a miestom.
- **Telesá z plôch.** Orezané plochy sa dajú spojiť zjednotením, odčítaním a prienikom a zapečú sa do súčiastky ako jeden krok späť. STEP zapíše teleso ako jednu uzavretú škrupinu a IGES ako jedno teleso; oba sa pri načítaní vrátia ako teleso. Ak sa plochy nespárujú hranu po hrane, súbor dostane oddelené plochy a stavový riadok to uvedie. Telesá sa dajú vytvárať aj v editore uzlov; pozri [Editor uzlov](topic:nodes).
- **Zaoblenia v okraji a premenné zaoblenia v skenoch.** Pri prispôsobovaní plôch skenu sa hľadajú aj okrajové zaoblenia (torusy) a zaoblenia s premenným polomerom pozdĺž pomerne rovnej hrany a uvedú sa s ich polomerom. Overené je to len na vymyslených skenoch.

### Zostavy, dokumenty a prepojenia

- **Veľké zostavy.** Súčiastky, ktoré sú kópiami, zdieľajú jednu sieť a {{ui:Pohľady}} › {{ui:Odľahčené zobrazenie}} kreslí škatule, takže pohľad sa stále hýbe (zapína sa sám pri veľmi veľkých zostavách; výber a spoje stále používajú skutočné súčiastky). Strom súčiastok ukazuje prvé riadky a tlačidlo {{ui:Zobraziť ďalších 700}} pre zvyšok. Súbory zostáv môžu obsahovať až 50 000 inštancií a 100 000 spojov. Pozri [Zostavenie](topic:build-assembly).
- **Dokumenty.** {{ui:Dokumenty…}} v skupine **Súbor** otvorí dialóg nad priečinkom projektu: odhlásenie a prihlásenie, písmenové revízie, stavy (rozpracované, na kontrolu, vydané, zastarané), história, kde sa používa a kusovník. Pozri [Dokumenty a revízie (trezor)](topic:documents-walkthrough).
- **Živé prepojenie s Rhino.** Jeden skript, `cadcraft_link.py`, sleduje dokument Rhino alebo Grasshopper a posiela do PartCraft len to, čo sa zmenilo; importovaný prvok sa potom prestaví na nový tvar. Je to jednosmerné a potrebuje Studio. Pozri [Živé prepojenie .3dm](topic:live-3dm-link).
- **Vidieť kurzory ostatných.** V spoločnej relácii je kurzor každej osoby zobrazený s jej menom a prvkom, ktorý má vybraný. Pozri [Pracovať naživo s ostatnými](topic:work-live).
- **Výrobná hala.** Zapnite doplnok Výrobná hala v {{ui:Nastavenia}} › {{ui:Doplnky}}. Po odoslaní programu vo {{ui:Výroba}} môže jeho karta {{ui:Pridať do fronty úloh výrobnej haly}} alebo {{ui:Uložiť ako súbor úlohy}}. Nikdy neposiela a nespúšťa stroj.

### Analýza a súčiastky

- **Doplnok Solid FEM.** Zapnite {{ui:Solid FEM}} v {{ui:Nastavenia}} › {{ui:Doplnky}} (je vypnutý, kým ho nezapnete) a v pravom paneli sa objaví karta {{ui:Solid FEM}}. {{ui:Vytvoriť sieť súčiastky}}, vyberte pevné plochy a zaťaženia v 3D pohľade, {{ui:Vyriešiť}}, a nakreslite posunutie, napätie podľa von Mises alebo tvar kmitu pomocou {{ui:Zobraziť na modeli}}. Pozri [Solid FEM: kontrola pevnosti](topic:solid-fem-check).
- **Oblúk v náčrtoch, desiatimi spôsobmi.** Šípka vedľa {{ui:Oblúk}} na paneli náčrtu ponúka: 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length a Continue. Pozri [Nakresliť oblúk desiatimi metódami](topic:sketch-arc-methods).
- **Britské oceľové profily.** Zvárané konštrukcie môžu používať 976 britských profilov (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); napíšte veľkosť, napríklad `305x165x40 UB`. Pozri [Konštrukčné prvky](topic:structural-members).

### Tlač

- **Fáza tlače.** Tlačidlo {{ui:Fáza tlače}} na paneli nástrojov (doplnok 3D tlač, predvolene zapnutý) položí telesá súčiastky na prerušovanú podložku: {{ui:Rozvinúť}}, {{ui:Otočiť o 90°}}, {{ui:Usporiadať na podložku}}, {{ui:Umiestniť všetko na podložku}}, {{ui:Náhľad vrstiev}}, potom {{ui:Odoslať na 3D tlačiareň}} cez USB, Klipper (Moonraker), OctoPrint alebo PrusaLink. Nič sa neodošle, kým nepotvrdíte, a vaša súčiastka sa nikdy nezmení. Pre súbor STL alebo 3MF pozri [Pripraviť súčiastku na 3D tlač](topic:print-3d).
- **Tlač na živicu.** Doplnky v {{ui:Nastavenia}} › {{ui:Doplnky}}, všetky vypnuté, kým ich nezapnete: slicer pre živicu, test expozície a formáty súborov Elegoo GOO, SL1, Chitubox CBDDLP/CTB a Anycubic. Rezanie beží na pracovnom vlákne, takže stránka zostáva citlivá.

## Vo všetkých aplikáciách

- Každá nápoveda pri prejdení myšou je bootstrap bublina.
- Úvodný tip má tlačidlo zavrieť; zostane zatvorený.
- Riadok kariet panela, ktorý sa nezmestí, sa posúva do strán namiesto toho, aby bol orezaný.
- Názov na karte prehliadača ukazuje názov otvoreného dokumentu pred PartCraft | CadCraft.
- {{ui:Nastavenia}} zobrazuje {{ui:Rozloženie}} pracovného priestoru ako rozbaľovací zoznam možností a políčko jazyka vypisuje všetky jazyky, ktoré build obsahuje.
- Hmotnosť a teplota sú druhy jednotiek v nastaveniach jednotiek.

## Opravené

- Ponuka oblúka v náčrte teraz vypisuje každú metódu.
- Panel doplnkov a názov karty prehliadača boli opravené 2026-11-09.

## Úprimné obmedzenia

- Presný STEP bol načítaný späť v OpenCascade (platné telesá, objemy rovnaké ako tie, čo sa vypočítali ručne). Ešte nebol otvorený v každom CAD alebo CAM programe a zostava sa nezapisuje ako presný STEP.
- Nič nebolo vytlačené na skutočnej tlačiarni. Rezanie, G-kód a súbory na živicu boli načítané späť našimi vlastnými programami alebo náhradnou tlačiarňou; žiadny formát živice nebol nahraný na tlačiareň a veľkosti tlačiarní a expozície sú východiskové hodnoty.
- Solid FEM je lineárny, izotropný a pružný, jeden materiál na súčiastku, bez kontaktu, plastického tečenia alebo vzperu. Napätie pri pevných plochách a ostrých rohoch závisí od siete. Je to pomôcka na kontrolu, ktorú neskontroloval inžinier.
- Časy veľkých zostáv pochádzajú zo servera bez GPU; plný detail rámca 20 000 súčiastok tam stále trvá sekundy.
- Zaoblenia fungujú na dvojiciach plôch; neexistuje všeobecný splývajúci vrchol ani zaoblenie medzi plochami, ktoré sa nestretávajú.
- Prepojenie s Rhino nikdy nebežalo v skutočnom Rhino alebo Grasshopper. Dokumenty skúšali dva programy na jednom priečinku, nie dvaja ľudia na sieťovom úložisku.
- Prispôsobovanie plôch skutočnému skenu nebolo ručne overené. Jazyky okrem angličtiny sú strojové koncepty.
- Inštalátory pre Windows nie sú podpísané kódom a obraz disku pre macOS nie je notarizovaný. Pozri [Riešenie problémov](topic:troubleshooting).

Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).

## Staršie: 0.8 a 0.8.1

Toto je to, čo sa zmenilo vo PartCraft 0.8 a 0.8.1 v porovnaní s 0.7. Simulácia odpovedá počas úprav a hovorí, čo sa zlomí ako prvé, zostavy dostávajú štúdie pohybu a nové pracovné priestory tvoria voľné plochy a súčiastky dimenzované podľa fyziky. 0.8.1 je malé opravné vydanie.

### Nové

**Simulácia**

- **Aktualizovať počas úprav.** Zaškrtnite {{ui:Aktualizovať počas úprav}} v bloku Vyriešiť a odpovede budú nasledovať vaše úpravy. Zmeňte kótu, zaťaženie alebo materiál a rýchla odpoveď, urobená s prvkami štvornásobne väčšími, sa objaví okamžite; keď prestanete asi na sekundu, vlastná spresnená odpoveď štúdie ju nahradí. Výsledky hovoria, ktorú z nich vidíte. Na oceľovej konzole bola rýchla odpoveď v rámci 1 % pri priehybe a asi 4 % pri napätí voči spresnenej. Pozri [Kontrola napätia a priehybu](topic:simulation#update-while-you-edit-live).
- **Čo sa zlomí ako prvé.** Pri statickej alebo vzpernej štúdii {{ui:Čo sa zlomí ako prvé?}} v bloku **Zlomiť to** zvyšuje zaťaženie, kým súčiastka nepovolí. Zoznam od najhoršieho hovorí faktor zaťaženia do prvej medze klzu (s červenou značkou tam, kde napätie vrcholí) a faktor zaťaženia do vzperu. Faktor pod 1 znamená, že súčiastka už povoľuje pri zaťažení, a panel Problémy zobrazí chybu. Faktory pochádzajú z lineárnej štúdie, takže sú len tak dobré, ako ona. Pozri [Kontrola napätia a priehybu](topic:simulation#find-out-what-breaks-first-break-it).
- **Klzenie a kontakt.** Dva ďalšie typy štúdií: nelineárna, kde materiál ide po svojej priamke až po medzu klzu a potom po plochejšom sklone, s vykresleným plastickým tečením; a kontaktná, kde sa oddelené kusy tlačia na seba (bez trenia) alebo sa držia (spojené). Krok zaťaženia, ktorý sa neusadí, alebo kusy, ktoré sa do seba prepadnú príliš hlboko, sa zobrazia v paneli Problémy. Trenie, veľké kĺzanie, veľké otáčania, veľké priehyby a únava sa neriešia. Pozri [Kontrola napätia a priehybu](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Súbory pre CalculiX.** {{ui:Export}} › {{ui:Vstupný súbor CalculiX (.inp)}} uloží štúdiu pre CalculiX, samostatný program, ktorý nainštalujete a spustíte sami; {{ui:Export}} › {{ui:Výsledky CalculiX (.frd)}} prečíta jeho výsledkový súbor späť na tú istú sieť. PartCraft ten program nikdy nespúšťa a povie, ak sa súčiastka zmenila od uloženia súboru.

**Zostavy**

- **Štúdie pohybu.** {{ui:Zostava}} › {{ui:Pohyb}} riadi hodnotu jedného spoja počas času, ktorý zadáte (konštantná rýchlosť, zjemnená, sínusová, alebo tam a späť), umiestni zostavu v každom kroku s jej spojmi a uzavretými slučkami a hlási, čo sa zráža a ako blízko sa súčiastky dostanú. {{ui:Pridať bod}} vykreslí polohu, rýchlosť a zrýchlenie bodu, hodnotu spoja a vôľu v čase; {{ui:Uložiť CSV}} a {{ui:Uložiť graf}} ich zapíšu. Po {{ui:Spustiť}} posúva lišta Krok cez beh zostavu na ľubovoľný krok. Nastavenia štúdie sa ukladajú do súboru zostavy. Rýchlosť a zrýchlenie sa počítajú z zaznamenaných polôh, takže použite viac krokov, ak ostrý vrchol vyjde nízko. Pozri [Kontrola zostavy na kolízie a pohyb](topic:check-assembly#a-motion-study).

**Plochy a súčiastky z fyziky**

- **Pracovný priestor Plochy.** Vyberte {{ui:Plochy}} v rámiku {{ui:Pracovný priestor}} pre krivky a voľné plochy NURBS vedľa súčiastky: {{ui:Krivka}}, {{ui:Loft}}, {{ui:Ťahanie po dráhe}}, {{ui:Prispôsobiť}} a {{ui:Zebra}}, so spojitosťou (G0, G1 alebo G2) meranou na presných plochách a hranou horšou, než ste žiadali, uvedenou v Problémoch s opravou Match. {{ui:Vyhladiť}} meria hydrostatické čiary na inflexie a skoky krivosti a prestaví nehladké v rámci vašej tolerancie. Plochy sa ukladajú do súboru súčiastky a nemenia prvky súčiastky. Pozri [Voľné plochy (NURBS)](topic:nurbs-surfaces).
- **Pracovný priestor Engineer.** Vyberte {{ui:Engineer}} v prepínači pracovného priestoru, zvoľte generátor a kliknite na {{ui:Nový}}: skript dimenzuje súčiastku podľa toho, čo musí robiť (teplo na presun, prúdy, tlak, materiál, proces tlače) pomocou učebnicových vzorcov a postaví ju, potom vráti použité čísla s ich zdrojmi, svoje výrobné kontroly a súbory pre analytické nástroje. Rovnaké vstupy dajú rovnakú súčiastku na ktoromkoľvek počítači. Generátor sa uchováva v súčiastke a otvorenie súčiastky nikdy nespúšťa skript. Pozri [Súčiastky z fyziky: generátory](topic:engineer-generators) a [Napísať generátor](topic:write-a-generator).

**Náčrty, výkresy a tvorba**

- **Náčrt z fotografie.** {{ui:Prvky}} › {{ui:Viac}} › {{ui:Náčrt z fotografie…}} obkreslí obrázok plochej súčiastky na jednoduchom podklade (obrys a otvory) alebo kresbu perom na čiary, oblúky a kružnice. Zadáte jednu dĺžku, skontrolujete náhľad a vytvoríte náčrt. Pozri [Základy náčrtu](topic:sketch-basics#a-sketch-from-a-photo).
- **Mierka a rozdelenie pre tlač.** {{ui:Export}} › {{ui:Mierka pre tlač (STL alebo 3MF)…}} mení mierku po osiach bez zmeny súčiastky, napríklad o prídavok na zmrštenie. {{ui:Export}} › {{ui:Rozdeliť pre tlač (zip kusov)…}} rozreže súčiastku, ktorá je pre vašu podložku príliš veľká, na očíslované kusy spojené kolíkmi, perami, rybinami, dierami pre kolíky alebo magnetickými kapsami. Pozri [Tlač v 3D](topic:print-3d).
- **Rozmiestnené tabule do G-kódu.** {{ui:Export}} › {{ui:Rozmiestnené tabule do G-kódu}} načíta rozmiestnený DXF a vytvorí jeden program na tabuľu cez postprocesor, ktorý zvolíte: najprv otvory a výrezy, potom obrysy. Neplánuje zavedenie, poradie rezania ani spoločné hrany. Pozri [Rozmiestniť ploché súčiastky na tabule](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Výkresy, ktoré robia viac samy.** {{ui:List}} › {{ui:Automaticky}} vyberie najmenší list formátu A, ktorý pojme pohľady pri najväčšej štandardnej mierke až do 1:1. {{ui:Okótovať otvory}} dá značku stredu na každý otvor, jednu vynášaciu kótu na veľkosť a polohy od ľavého dolného rohu pohľadu. Pozri [Vytvoriť výkres](topic:drawing-pdf).

**Vo všetkých aplikáciách**

- **Jazyky.** Aplikácie sú v 54 jazykoch. Tie okrem angličtiny sú strojové koncepty, kým ich neprečíta native hovorca.
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} vyberie Zalamovať (ako predtým), 2 riadky alebo 1 riadok; panel, ktorý sa nezmestí, sa posúva do strán. Pás Prvky vo PartCraft ukazuje najpoužívanejší nástroj veľký a varianty ukrýva za rozdeleným tlačidlom.
- **Pripojte svoju AI.** Studio je centrum pre pripojenie vlastného asistenta ku všetkým ôsmim aplikáciám, s oprávnením iba na čítanie, na návrhy alebo na úpravy pre každú aplikáciu. Pripojený asistent dokáže dimenzovať súčiastku z jednej vety, napríklad konzolu pre zaťaženie, ukázať svoj postup a každú kontrolu a postaviť ju; hlási, čo nekontroloval (koncentráciu napätia, únavu, dopady v plastoch). Pozri [Použiť PartCraft s AI asistentom](topic:use-with-ai-assistants).

### Opravené v 0.8.1

- **Zamrznutie kurzora na celej obrazovke.** Výber pri prejdení myšou je teraz obmedzený. Príčina je naša najlepšia interpretácia a nebola potvrdená s osobou, ktorá to nahlásila.
- **Jazyk počas behu.** Studio a zabalené vydania môžu za behu prepnúť jazyk; predtým boli len v angličtine. Nie je to ešte overené na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.

### Ešte nie je v tejto verzii

- Pripojiť AI nie je hotové: pripojenie jedným kliknutím v Studiu, hostovaný konektor pre AI v prehliadači, váš vlastný API kľúč v Studiu a zverejnený balík MCP nie sú sľúbené. Studio nemá vlastnú AI.
- Studio nie je podpísané kódom: Windows môže varovať a macOS žiada pravé tlačidlo, potom Otvoriť. Pozri [Riešenie problémov](topic:troubleshooting).
- Reťazce tolerancií sú stále jednosmerné: pozri [Reťazce tolerancií](topic:tolerance-stackup).
- Zvyšok je uvedený v [Čo ešte nie je hotové](topic:not-built-yet).

Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
