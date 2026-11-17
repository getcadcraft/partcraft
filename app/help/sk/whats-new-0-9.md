---
title: Čo je nové vo verzii 0.9
summary: PartCraft 0.9 pridáva zaoblenia medzi plochami a zhrubnutie na telesá, zostavy s tisíckami súčiastok, trezor dokumentov s revíziami, doplnok Solid FEM na kontrolu pevnosti, desať spôsobov oblúka, britské oceľové profily, fázu tlače a doplnky pre tlač na živicu.
keywords: čo je nové, poznámky k vydaniu, zoznam zmien, 0.9, zaoblenie medzi plochami, rolovacia guľa, zaoblenie viacerých hrán, zhrubnutie, teleso z plôch, step shell, iges teleso, zaoblenia zo skenov, veľká zostava, odľahčené zobrazenie, 20000 súčiastok, dokumenty, trezor, vybrať na úpravu, revízia, vydanie, kde sa používa, rhino link, grasshopper, 3dm, kurzory, výrobná hala, rad úloh, solid fem, konečné prvky, von mises, vlastná frekvencia, metódy oblúka, britské oceľové profily, blue book, fáza tlače, živica, goo, ctb, lôžko, rozvinúť, verzia, nové funkcie, analýza naživo, aktualizovať počas úprav, čo sa rozbije, faktor zaťaženia, nelineárny, medza klzu, plastická deformácia, kontakt, calculix, štúdia pohybu, vôľa, plochy, nurbs, vyhladiť, trup, zebra, inžinier, generátor, vygenerované teleso, náčrt z fotografie, mierka pre tlač, rozdeliť pre tlač, zmrštenie, rozmiestnené plechy, g-kód, výkres, okótovať otvory, asistent, mcp, jazyky, riadky panela nástrojov
from: 96d9fbfa
---

Toto je zmena vo verzii PartCraft 0.9 oproti 0.8.1. Voľné plochy sa teraz uzatvárajú do telies, zostavy s tisíckami súčiastok zostávajú použiteľné, trezor dokumentov uchováva revízie a doplnok Solid FEM kontroluje pevnosť v súčiastke. Každá položka hovorí, kde ju nájdete.

## Nové vo verzii 0.9.1

- **Presný STEP na export.** {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} a {{ui:STEP AP214 (presné teleso)}} teraz fungujú. Otvory, výstupky, zaoblenia, kužele, gule a torusy sa zapisujú na ich skutočných plochách so skutočnými kružnicami ako hranami, takže iný CAD alebo CAM program môže rozpoznať otvor ako otvor. Spline strany, modelované závity a importované siete zostávajú v tom istom telese ploché fazety. Pozri [Export pre tlač, STEP a DXF](topic:export-files#for-other-cad-programs-step).
- **STEP na vstupe, presný STEP na výstupe.** Súbor STEP, ktorý otvoríte, si zachová svoje rovné plochy, valce, kužele, gule a torusy, takže {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} ich zapíše späť ako skutočné plochy namiesto faziet: nosník dodávateľa so skrutkovými otvormi sa vyexportuje s rovnakými plochami, s ktorými prišiel, plus čokoľvek do neho vyrežete. Spline, ťahané a rotované plochy zo súboru zostávajú fazetami, rovnako ako telesá zo STL, OBJ a 3MF. Súbor STEP znovu otvorte pre súčiastku uloženú skôr. Pozri [Otvorenie súboru STEP a stavba na ňom](topic:import-step).
- **Skutočné kružnice v DXF plochy.** {{ui:Export}} › {{ui:DXF náčrtu alebo plochej plochy}} s vybranou rovnou plochou teraz zapíše okrúhle otvory ako kružnice, so stredom a polomerom samotného otvoru, pre laser, plazmu alebo vodný lúč. Ostatné okrúhle hrany sú stále fazety.
- **Presný STEP pre dielňu.** V {{ui:Výroba}} zapíše {{ui:Presný STEP (pracovné súradnice)}} súčiastku s počiatkom v pracovnom počiatku nastavenia a osou Z pozdĺž osi nástroja, v súradniciach, ktoré používa G-kód. Pozri [Vytvorenie dráh nástroja a G-kódu](topic:manufacture#exact-step-for-the-shop).

## Nové

### Plochy a telesá

- **Zaoblenie medzi plochami.** Vyberte {{ui:Plochy}} v políčku {{ui:Pracovný priestor}}, potom {{ui:Zaoblenie medzi plochami}}. Vyberte dve plochy jedného telesa, zadajte polomer (a {{ui:Polomer na konci (mm, 0 = rovnaký)}} pre polomer, ktorý sa mení pozdĺž hrany). Riadok výsledku hovorí, ako ďaleko je zaoblenie od ideálnej rolovacej gule, a polomer, ktorý nesedí, sa odmietne s uvedením plochy. {{ui:Zaoblenie viacerých hrán}} zaoblí viac hrán naraz; zaškrtnite {{ui:Rohy (guľová záplata, kde sa stretnú tri)}} pre guľový roh, kde sa stretnú tri zaoblené hrany rovných plôch. Pozri [Voľné plochy (NURBS)](topic:nurbs-surfaces).
- **Zhrubnutie na teleso.** {{ui:Zhrúbnutie na teleso}} v rovnakom pracovnom priestore dá ploche hrúbku; {{ui:Druhá strana}} ju rozšíri opačne. Zlom alebo sebapretnutie sa odmietne s uvedením plochy a miesta.
- **Telesá z plôch.** Orezané plochy sa dajú spojiť zjednotením, odčítaním a prienikom a zapísať do súčiastky ako jeden krok späť. STEP zapisuje teleso ako jednu uzavretú škrupinu a IGES ako jedno teleso; obe sa pri čítaní načítajú ako teleso. Ak sa plochy nespárujú hrana po hrane, súbor dostane oddelené plochy a stavový riadok to uvedie. Telesá sa dajú vytvoriť aj v editore uzlov; pozri [Editor uzlov](topic:nodes).
- **Okrajové a premenlivé zaoblenia v skenoch.** Keď prispôsobujete plochy skenu, hľadajú sa aj okrajové zaoblenia (torusy) a zaoblenia s premenlivým polomerom pozdĺž pomerne priamej hrany, a uvádzajú sa s ich polomerom. Bolo to skúšané iba na vymyslených skenoch.

### Zostavy, dokumenty a prepojenia

- **Veľké zostavy.** Súčiastky, ktoré sú kópiami, zdieľajú jednu sieť, a {{ui:Pohľady}} › {{ui:Odľahčené zobrazenie}} kreslí škatule, aby sa pohľad stále hýbal (zapína sa sám pri veľmi veľkých zostavách; výber a kĺby stále používajú skutočné súčiastky). Strom súčiastok ukazuje svoje prvé riadky a tlačidlo {{ui:Zobraziť ďalších 700}} pre zvyšok. Súbory zostáv môžu obsahovať až 50 000 inštancií a 100 000 kĺbov. Pozri [Zostavenie zostavy](topic:build-assembly).
- **Dokumenty.** {{ui:Dokumenty…}} v skupine **Súbor** otvorí dialógové okno nad priečinkom projektu: vybrať na úpravu a vrátiť, písmená revízií, stavy (rozpracované, na kontrolu, uvoľnené, zastarané), história, kde sa používa a kusovník. Pozri [Dokumenty a revízie (trezor)](topic:documents-walkthrough).
- **Živé prepojenie s Rhino.** Jeden skript, `cadcraft_link.py`, sleduje dokument Rhino alebo Grasshopper a posiela do PartCraft iba to, čo sa zmenilo; tam sa importovaný prvok prepočíta na nový tvar. Je to jednosmerné a potrebuje Studio. Pozri [Živé prepojenie .3dm](topic:live-3dm-link).
- **Vidieť kurzory ostatných.** V spoločnej relácii sa kurzor každej osoby zobrazuje s jej menom a prvkom, ktorý vybrala. Pozri [Práca naživo s inými](topic:work-live).
- **Výrobná hala.** Zapnite doplnok Výrobná hala v {{ui:Nastavenia}} › {{ui:Doplnky}}. Po odoslaní programu vo {{ui:Výroba}} môže jeho karta {{ui:Pridať do radu úloh výrobnej haly}} alebo {{ui:Uložiť ako súbor úlohy}}. Nikdy neposiela ani nespúšťa stroj.

### Analýza a súčiastky

- **Doplnok Solid FEM.** Zapnite {{ui:Solid FEM}} v {{ui:Nastavenia}} › {{ui:Doplnky}} (kým to neurobíte, je vypnutý) a v pravom paneli sa objaví karta {{ui:Solid FEM}}. {{ui:Vytvoriť sieť súčiastky}}, vyberte pevné plochy a zaťaženia v 3D pohľade, {{ui:Vyriešiť}} a nakreslite posunutie, napätie podľa von Mises alebo tvar kmitania s {{ui:Zobraziť na modeli}}. Pozri [Solid FEM: kontrola napätia](topic:solid-fem-check).
- **Oblúk v náčrtoch, desiatimi spôsobmi.** Šípka vedľa {{ui:Oblúk}} na paneli nástrojov náčrtu uvádza: 3 body, Začiatok Stred Koniec, Začiatok Stred Uhol, Začiatok Stred Dĺžka, Začiatok Koniec Uhol, Začiatok Koniec Smer, Začiatok Koniec Polomer, Stred Začiatok Koniec, Stred Začiatok Uhol, Stred Začiatok Dĺžka a Pokračovanie. Pozri [Nakreslenie oblúka desiatimi spôsobmi](topic:sketch-arc-methods).
- **Britské oceľové profily.** Zváraný celok môže použiť 976 britských profilov (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); zadajte rozmer, napríklad `305x165x40 UB`. Pozri [Konštrukčné prvky](topic:structural-members).

### Tlač

- **Fáza tlače.** Tlačidlo {{ui:Fáza tlače}} na paneli nástrojov (doplnok 3D Print, predvolene zapnutý) položí telesá súčiastky na prerušované lôžko: {{ui:Rozvinúť}}, {{ui:Otočiť o 90°}}, {{ui:Rozmiestniť na lôžko}}, {{ui:Prispôsobiť všetko na lôžko}}, {{ui:Náhľad vrstiev}}, potom {{ui:Odoslať na 3D tlačiareň}} cez USB, Klipper (Moonraker), OctoPrint alebo PrusaLink. Nič sa neodošle, kým nepotvrdíte, a vaša súčiastka sa nikdy nemení. Pre súbor STL alebo 3MF pozri [Pripravte súčiastku na 3D tlač](topic:print-3d).
- **Tlač na živicu.** Doplnky v {{ui:Nastavenia}} › {{ui:Doplnky}}, všetky vypnuté, kým ich nezapnete: slicer pre živicu, test expozície a formáty súborov Elegoo GOO, SL1, Chitubox CBDDLP/CTB a Anycubic. Rezanie na vrstvy beží vo vlákne na pozadí, takže stránka zostáva odozvná.

## Vo všetkých aplikáciách

- Každá nápoveda pri podržaní ukazovateľa je bublinová nápoveda Bootstrap.
- Úvodný tip má tlačidlo zavrieť; zostáva zatvorený.
- Riadok kariet panela, ktorý sa nezmestí, sa posúva do strán namiesto odrezania.
- Karta prehliadača ukazuje názov otvoreného dokumentu pred PartCraft | CadCraft.
- {{ui:Nastavenia}} zobrazuje {{ui:Rozloženie}} pracovného priestoru ako rozbaľovací zoznam možností a políčko jazyka uvádza každý jazyk, ktorý táto verzia obsahuje.
- Hmotnosť a Teplota sú druhy jednotiek v nastaveniach {{ui:Jednotky}}.

## Opravené

- Ponuka Oblúk v náčrte teraz uvádza každú metódu.
- Panel nástrojov doplnkov a názov karty prehliadača boli opravené 2026-11-09.

## Úprimné obmedzenia

- Presný STEP bol načítaný späť v OpenCascade (platné telesá, objemy rovnaké ako tie, čo sa vypočítali ručne). Ešte nebol otvorený v každom CAD alebo CAM programe a zostava sa nezapisuje ako presný STEP.
- Nič sa netlačilo na skutočnej tlačiarni. Rezanie na vrstvy, G-kód a súbory živice boli načítané späť našimi vlastnými programami alebo náhradnou tlačiarňou; žiadny z formátov živice sa nenahral do tlačiarne a veľkosti tlačiarne a expozície sú iba východiskové hodnoty.
- Solid FEM je lineárny, izotropný a pružný, s jedným materiálom na súčiastku, bez kontaktu, plastického tečenia alebo vzperu. Napätie na pevných plochách a ostrých rohoch závisí od siete. Je to pomôcka na kontrolu, ktorú neskontroloval inžinier.
- Časy veľkých zostáv pochádzajú zo servera bez GPU; rámec plnej podrobnosti pri 20 000 súčiastkach tam stále trvá sekundy.
- Zaoblenia fungujú na dvojiciach plôch; nie je tu všeobecné prechodové zaoblenie vrcholu ani zaoblenie medzi plochami, ktoré sa nestretávajú.
- Prepojenie s Rhino nikdy nebežalo v skutočnom Rhino ani Grasshopper. Dokumenty boli vyskúšané dvoma programami na jednom priečinku, nie dvoma ľuďmi na sieťovom úložisku.
- Prispôsobovanie plôch skutočnému skenu nebolo ručne overené. Jazyky okrem angličtiny sú strojové koncepty.
- Inštalátory pre Windows nie sú podpísané kódom a obraz disku pre macOS nie je notarizovaný. Pozri [Riešenie problémov](topic:troubleshooting).

Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).

## Staršie: 0.8 a 0.8.1

Toto je zmena vo verziách PartCraft 0.8 a 0.8.1 oproti 0.7. Simulácia odpovedá počas úprav a hovorí, čo sa rozbije ako prvé, zostavy dostávajú štúdie pohybu a nové pracovné priestory robia voľné plochy a súčiastky dimenzované podľa fyziky. 0.8.1 je malé opravné vydanie.

### Nové

**Simulácia**

- **Aktualizovať počas úprav.** Zaškrtnite {{ui:Aktualizovať počas úprav}} v bloku Vyriešiť a odpovede budú nasledovať vaše úpravy. Zmeňte rozmer, zaťaženie alebo materiál a rýchla odpoveď, urobená s prvkami štyrikrát väčšími, sa objaví hneď; keď prestanete asi na sekundu, vlastná spresnená odpoveď štúdie ju nahradí. Výsledky hovoria, na ktorú sa pozeráte. Na oceľovej konzole bola rýchla odpoveď v rámci 1 % pri priehybe a asi 4 % pri napätí oproti spresnenej. Pozri [Kontrola napätia a priehybu](topic:simulation#update-while-you-edit-live).
- **Čo sa rozbije ako prvé.** Pri statickej alebo vzperovej štúdii {{ui:Čo sa rozbije ako prvé?}} v bloku **Rozbi ho** škáluje zaťaženia, kým súčiastka nepovolí. Uvádza, od najhoršieho, faktor zaťaženia k prvému tečeniu (s červenou značkou tam, kde napätie vrcholí) a faktor zaťaženia k vzperu. Faktor pod 1 znamená, že súčiastka už pri zaťažení povoľuje, a Problémy zobrazia chybu. Faktory pochádzajú z lineárnej štúdie, takže sú takie dobré, aká je ona. Pozri [Kontrola napätia a priehybu](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenie a kontakt.** Dva ďalšie typy štúdií: nelineárny, kde materiál ide po svojej priamke až k medzi klzu a potom po ploššom sklone, s vykreslenou plastickou deformáciou, a kontaktný, kde sa oddelené kusy tlačia jeden na druhého (bez trenia) alebo zostávajú zalepené (spojené). Krok zaťaženia, ktorý sa neustáli, alebo kusy, ktoré do seba zapadnú príliš hlboko, sa zobrazia v paneli Problémy. Trenie, veľké kĺzanie, veľké otáčania, veľké priehyby a únava sa neriešia. Pozri [Kontrola napätia a priehybu](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Balíky pre CalculiX.** {{ui:Export}} › {{ui:Balík CalculiX (.inp)}} uloží štúdiu pre CalculiX, samostatný program, ktorý si nainštalujete a spustíte sami; {{ui:Export}} › {{ui:Výsledky CalculiX (.frd)}} načíta jeho výsledkový súbor späť na tú istú sieť. PartCraft ten program nikdy nespúšťa a povie to, ak sa súčiastka zmenila od uloženia balíka.

**Zostavy**

- **Štúdie pohybu.** {{ui:Zostava}} › {{ui:Pohyb}} riadi hodnotu jedného kĺbu v čase, ktorý zadáte (konštantná rýchlosť, zmäkčená, sínusová, alebo tam a späť), umiestňuje zostavu v každom kroku s jej kĺbmi a uzavretými slučkami a hlási, čo sa zráža a aké blízko sa súčiastky dostanú. Pridať bod vykreslí polohu bodu, rýchlosť a zrýchlenie, hodnotu kĺbu a vôľu v čase; {{ui:Uložiť CSV}} a {{ui:Uložiť graf}} ich zapíšu. Po {{ui:Spustiť}} sa krok cez lištu behu presunie zostavu na ľubovoľný krok. Nastavenia štúdie sa uložia v súbore zostavy. Rýchlosť a zrýchlenie sa počítajú zo zaznamenaných polôh, takže ak ostrý vrchol vychádza nízko, použite viac krokov. Pozri [Kontrola zostavy na kolízie a pohyb](topic:check-assembly#a-motion-study).

**Plochy a súčiastky podľa fyziky**

- **Pracovný priestor Plochy.** Vyberte {{ui:Plochy}} v políčku {{ui:Pracovný priestor}} pre krivky a plochy NURBS vedľa súčiastky: {{ui:Krivka}}, {{ui:Loft}}, {{ui:Ťahanie po dráhe}}, {{ui:Prispôsobiť}} a {{ui:Zebra}}, so spojitosťou (G0, G1 alebo G2) meranou na presných plochách a hranou, ktorá je horšia, než ste žiadali, uvedenou v Problémoch s opravou Prispôsobiť. {{ui:Vyhladiť}} meria línie trupu na inflexie a skoky zakrivenia a prepočíta nerovnomerné v rámci vašej tolerancie. Plochy sa ukladajú do súboru súčiastky a nemenia prvky súčiastky. Pozri [Voľné plochy (NURBS)](topic:nurbs-surfaces).
- **Pracovný priestor Inžinier.** Vyberte {{ui:Inžinier}} v prepínači pracovného priestoru, zvoľte generátor a kliknite na {{ui:Nový}}: skript dimenzuje súčiastku podľa toho, čo musí robiť (prenos tepla, prietoky, tlak, materiál, proces tlače), s učebnicovými vzorcami a postaví ju, potom vráti čísla, ktoré použil, s ich zdrojmi, svoje výrobné kontroly a súbory pre analytické nástroje. Rovnaké vstupy dajú rovnakú súčiastku na ľubovoľnom počítači. Generátor sa uchováva v súčiastke a otvorenie súčiastky nikdy nespúšťa skript. Pozri [Súčiastky z fyziky: generátory](topic:engineer-generators) a [Napíšte generátor](topic:write-a-generator).

**Náčrty, výkresy a výroba**

- **Náčrt z fotografie.** {{ui:Prvky}} › {{ui:Viac}} › {{ui:Náčrt z fotografie…}} obkreslí obrázok rovnej súčiastky na jednofarebnom podklade (obrys a otvory) alebo perokresbu na čiary, oblúky a kružnice. Zadáte jednu dĺžku, skontrolujete náhľad a vytvoríte náčrt. Pozri [Základy náčrtu](topic:sketch-basics#a-sketch-from-a-photo).
- **Mierka a rozdelenie pre tlač.** {{ui:Export}} › {{ui:Mierka pre tlač (STL alebo 3MF)…}} škáluje podľa osí bez zmeny súčiastky, napríklad s prídavkom na zmrštenie. {{ui:Export}} › {{ui:Rozdeliť pre tlač (zip kusov)…}} rozreže súčiastku, ktorá je na vaše lôžko príliš veľká, na očíslované kusy spojené kolíkmi, kľúčmi, lastovičími chvostmi, dierami na kolíky alebo kapsami na magnety. Pozri [3D tlač](topic:print-3d).
- **Rozmiestnené plechy do G-kódu.** {{ui:Export}} › {{ui:Rozmiestnené tabule do G-kódu}} načíta rozmiestnený DXF a vytvorí jeden program na plech cez postprocesor, ktorý zvolíte: najprv otvory a výrezy, potom obrysy. Neplánuje nábehy, poradie rezania ani spoločné hrany. Pozri [Rozmiestnenie rovných súčiastok na plechy](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Výkresy, ktoré robia viac samy.** {{ui:List}} › {{ui:Automaticky}} vyberie najmenší list formátu A, ktorý pojme pohľady pri najväčšej štandardnej mierke až do 1:1. {{ui:Okótovať otvory}} dá stredovú značku na každý otvor, jeden popis na veľkosť a polohy od ľavého dolného rohu pohľadu. Pozri [Vytvorenie výkresu](topic:drawing-pdf).

**Vo všetkých aplikáciách**

- **Jazyky.** Aplikácie sú v 54 jazykoch. Tie okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovoriaci.
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} vyberá zalomenie (ako predtým), 2 riadky alebo 1 riadok; lišta, ktorá sa nezmestí, sa posúva do strán. Pás Prvky v PartCraft zobrazuje najpoužívanejší nástroj veľký a varianty ukrýva za rozdelené tlačidlo.
- **Pripojte svoju AI.** Studio je centrum pre pripojenie vlastného asistenta ku všetkým ôsmim aplikáciám, s oprávnením iba na čítanie, navrhovanie alebo úpravu pre každú aplikáciu. Pripojený asistent dokáže dimenzovať súčiastku podľa vety, napríklad držiak pre zaťaženie, ukázať svoj postup a každú kontrolu a postaviť ju; hlási, čo nekontroloval (koncentrácia napätia, únava, dotvarovanie plastov). Pozri [Použite PartCraft s AI asistentom](topic:use-with-ai-assistants).

### Opravené vo verzii 0.8.1

- **Zamrznutie kurzora na celej obrazovke.** Výber pri podržaní ukazovateľa je teraz obmedzený. Príčina je naša najlepšia interpretácia a nebola potvrdená s osobou, ktorá to nahlásila.
- **Jazyk za behu.** Studio a balené vydania môžu prepínať jazyk za behu; predtým boli iba v angličtine. Ešte to nie je otestované na každej platforme: dajte nám vedieť, ak sa jazyk nemení.

### Ešte nie je v tejto verzii

- Pripojenie AI nie je dokončené: pripojenie jedným kliknutím v Studiu, hostovaný konektor pre AI v prehliadači, vlastný API kľúč v Studiu a zverejnený balík MCP nie sú sľúbené. Studio nemá vlastnú AI.
- Studio nie je podpísané kódom: Windows môže upozorniť a macOS žiada pravé kliknutie a potom Otvoriť. Pozri [Riešenie problémov](topic:troubleshooting).
- Tolerančné reťazce sú stále jednosmerné: pozri [Tolerančné reťazce](topic:tolerance-stackup).
- Zvyšok je uvedený v [Čo ešte nie je hotové](topic:not-built-yet).

Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
