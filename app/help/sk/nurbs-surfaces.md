---
title: Voľné plochy (NURBS)
summary: Hladké krivky a plochy vedľa súčiastky — loft, ťahanie, siete kriviek, záplaty zo štyroch hrán, prechody a orezania, spojitosť G0, G1 a G2 meraná na presných plochách, telesá so zjednotením, odčítaním a prienikom zapečené do súčiastky, pohľady zebra a krivosti, plochy prispôsobené skenu s meranou chybou a súbory STEP alebo IGES. Uložené v súbore súčiastky.
keywords: nurbs, sken, reverzné inžinierstvo, prispôsobenie, sieť na plochu, mračno bodov, stl, orezanie, orezaný, diera, rez, teleso, telesá, booleovská operácia, zjednotenie, odčítanie, prienik, rozdiel, zošitie, uzavretý, zapiecť, voľný tvar, freeform, plocha, plochy, b-spline, bspline, krivka, spline, loft, ťahanie, vodiaca krivka, sieť, coons, záplata, prechod, prispôsobiť, spojitosť, g0, g1, g2, dotyčnica, krivosť, zebra, riadiace body, uzlové hodnoty, stupeň, step, iges, trieda A, trup, vyhladenie
from: 64ed5196
---

Pracovný priestor **Plochy** vytvára hladké krivky a plochy, aké sa používajú pri škrupinách výrobkov, karosériách áut a trupoch lodí: NURBS, tá istá matematika, akú používajú ostatné modelárske nástroje pre plochy. Všetko sa meria na presných plochách, nikdy na trojuholníkoch, ktoré vidíte. Veľkosti sú v milimetroch, ako v zvyšku PartCraft.

Vyberte **Plochy** v poli **Pracovný priestor**. Panel nástrojov obsahuje {{ui:Krivka}}, {{ui:Loft}}, {{ui:Ťahanie po dráhe}}, {{ui:Prispôsobiť}} a {{ui:Zebra}}; každý príkaz je na paneli vpravo. Príkaz hovorí, čo ešte potrebuje: kliknite na krivky alebo plochy v pohľade (pri hrane alebo konci, keď to žiada) alebo ich vyberte v zozname; zadajte body alebo ich kliknite na plochy súčiastky (mimo súčiastky dopadnú na základnú rovinu), potom stlačte Enter.

Krivky a plochy sa uložia do súboru súčiastky vedľa telesa. Nemenia prvky súčiastky: panel má vlastné {{ui:Späť}} a {{ui:Znova}}, jeden krok na príkaz.

## Krivky

- **Krivka cez body** prechádza každým bodom, na ktorý kliknete. **Krivka z riadiacich bodov** namiesto toho sleduje klietku bodov.
- **Vložiť uzol**, **Zvýšiť stupeň** a **Znížiť stupeň** menia opis krivky bez jej posunutia (zníženie sa odmietne, keď by sa krivka posunula viac než o toleranciu). **Prepočítať krivku** dá jej nový počet riadiacich bodov a povie, ako ďaleko sa posunula.
- **Prispôsobiť krivku** urobí koniec jednej krivky spojený s koncom druhej v G0 (dotyk), G1 (rovnaký smer) alebo G2 (rovnaká krivosť). **Prechodová krivka** pridá novú krivku medzi dva konce, G1 alebo G2.

## Plochy

- **Loft** cez dve alebo viac kriviek, **Priamková plocha** medzi dvoma, **Vytiahnutie krivky**, **Rotácia krivky**.
- **Ťahanie po jednej vodiacej krivke** prenesie profil pozdĺž dráhy bez krútenia; **Ťahanie po dvoch vodiacich krivkách** udrží konce profilu na oboch vodiacich krivkách. Ťahania sa prispôsobujú: výsledok uvedie, ako blízko zostal skutočnému ťahaniu.
- **Plocha zo siete kriviek** prechádza mriežkou kriviek (každá prechádza každou z ostatných práve raz). **Záplata zo štyroch hrán** vyplní štyri krivky, ktoré sa stretávajú v rohoch.
- **Prispôsobiť plochu** urobí hranu plochy spojenú so susedom v G0, G1 alebo G2; **Prechodová plocha** pridá plochu medzi dve hrany.
- **Odsadená plocha**, **Predĺžiť plochu** (plocha pokračuje tak, ako išla), **Prepočítať plochu**.

## Kontrola kvality

Tabuľka **Spoločné hrany** uvádza každú hranu, ktorú zdieľajú dve plochy, s medzerou (mm), uhlom medzi nimi (°) a skokom krivosti (1/mm), a hovorí, či je to G0, G1 alebo G2. Hrana, ktorá je horšia, než ste požadovali, sa objaví v **Problémy** s opravou **Prispôsobiť**. Pruhy **Zebra** a farby **krivosti** pochádzajú z presnej plochy: pruhy, ktoré prechádzajú cez hranu bez prerušenia, znamenajú G1; pruhy, ktoré si zachovajú aj šírku, znamenajú G2.

G0–G2 sa merajú v 33 bodoch na hranu. **G3 a kvalita „trieda A“ sa nemerajú** a netvrdia sa.

## Orezanie plochy

Skupina **Orezanie** orezáva plochu bez zmeny jej tvaru: plocha si zachová všetky riadiace body a zobrazí, spočíta a zapíše sa len časť vnútri obrysu. **Orezať na obdĺžnik** a **Orezať kružnicou** pracujú s podielom (0 až 1) plochy v každom smere, takže netreba nič vyberať v pohľade; **Orezať krivkou** vezme uzavretú krivku ležiacu na ploche (premietne sa do plochy a odmietne sa slovami, keď je otvorená alebo ďalej než toleranciu). Označte **Vyrezať dieru**, aby sa odstránilo vnútro obrysu; nechajte ho neoznačený, ak chcete zachovať len vnútro. Plocha môže mať jeden zachovaný obrys a ľubovoľný počet dier; obrys, ktorý kríži iný, sa odmietne. **Odstrániť orezanie** zobrazí celú plochu znovu. {{ui:Späť}} v paneli vráti orezanie späť ako každý iný krok.

STEP nesie orezanie ako hranice plochy a IGES ako orezanú plochu (entita 144); obe formy ho pri čítaní obnovia.

## Telesá a booleovské operácie

Skupina **Telesá** mení plochy na uzavreté telesá a kombinuje ich. Teleso je tu množina plôch z panela, ktoré spolu uzatvárajú objem; jeho plochy zostanú presnými NURBS plochami s orezaniami.

- **Kvádrové teleso**, **Valcové teleso** a **Guľové teleso** vytvoria teleso z ručne zadaných veľkostí (v mm): kváder so šiestimi rovinnými plochami, valec s oblou stenou a dvoma rovinnými koncami orezanými na kružnicu, guľu z jednej rotovanej plochy.
- **Teleso z plôch** zoskupí plochy, ktoré ste vytvorili sami. Vyberte ich, alebo nevyberte nič a použite všetky zobrazené plochy, ktoré ešte nie sú v telese. Zošijú sa v rámci tolerancie: ak sa neuzavrú, nič sa nezmení a panel povie, koľko hrán zostáva otvorených a ako blízko musia byť k sebe.
- **Zjednotenie**, **Odčítanie** (druhé teleso sa odoberie z prvého) a **Prienik** (len to, čo majú obe spoločné) berú dve telesá: kliknite na plochu každého v pohľade alebo stlačte **Vybrať** v zozname **Telesá**. Označte **Ponechať obe telesá**, aby zostali vedľa výsledku.

Booleovská operácia ponechá každú plochu na jej presnej ploche a orezie ju novými obrysmi pozdĺž prieniku. Riadok výsledku uvádza namerané čísla: o koľko museli body telesového jadra posunúť, aby ležali na presných plochách (nikdy viac než tolerancia), aké blízko sú body prieniku k obom plochám (zvyčajne niekoľko milióntin milimetra), objem a či sa nové plochy znovu uzavrú, keď sa zošijú nanovo z ich presných plôch. Objemy sa merajú na trojuholníkoch v rámci tolerancie (0,05 mm, pokiaľ nenastavíte inú), takže objem gule alebo valca vyjde mierne pod presný; menšia tolerancia sa priblíži. Booleovská operácia, ktorú nemožno urobiť čisto (telesá nemajú nič spoločné, obrys by sa križoval sám so sebou), sa odmietne slovami a nič nezmení. Jedna booleovská operácia je jeden krok {{ui:Späť}} v paneli.

V zozname **Telesá** **Zrušiť zoskupenie** ponechá plochy ako obyčajné plochy; kôš odstráni teleso aj jeho plochy.

## Zaoblenia a zhrubnutie

**Zaoblenie medzi plochami** zaoblí hranu, kde sa stretnú dve plochy jedného telesa: vyberte dve plochy (v pohľade alebo cez **Vybrať** v zozname), zadajte **polomer** a pre polomer, ktorý sa mení pozdĺž hrany, **polomer na konci** (0 zachová jeden polomer). Guľa tohto polomeru sa kotúľa pozdĺž hrany a dotýka sa oboch plôch; zaoblenie je presný kruhový oblúk, ktorý v každom bode zostane, spojený do jednej plochy, a dve plochy sú orezané tam, kde sa ich guľa dotýka. Vonkajšia hrana stráca materiál, vnútorný roh ho získava. Riadok výsledku uvádza, čo sa namerali: ako ďaleko je plocha zaoblenia od kotúľajúcej sa gule medzi bodmi, z ktorých bola vytvorená (body sa pridávajú, kým nie je v rámci štvrtiny tolerancie), najväčší uhol medzi zaoblením a každou plochou pozdĺž dotykových čiar a rovnaké čísla ako pri Zjednotení. Polomer, ktorý nevyhovuje (guľa by opustila plochu alebo plocha by sa zakrivila tesnejšie než polomer), sa odmietne s uvedením plochy a nič sa nezmení.

**Zaoblenie viacerých hrán** zaoblí naraz mnoho hrán: vyberte dve plochy prvej hrany, potom dve plochy ďalšej a tak ďalej (plocha môže byť vo viacerých dvojiciach, napríklad horná plocha kvádra v štyroch z nich); všetky hrany dostanú polomer, ktorý zadáte. Každé zaoblenie sa vypočíta na telese v pôvodnom stave, potom sa rezy vykonajú jeden po druhom, takže poradie nezáleží. Tam, kde sa dve zaoblené hrany stretnú v rohu, ktorého ostatné hrany zostávajú ostré, sa dve zaoblenia pretnú pozdĺž svojej krivky prieniku (hrana). Tam, kde sa tri zaoblené vonkajšie hrany troch rovinných plôch, ktoré sú na seba kolmé, stretnú s jedným polomerom, roh je jedna **guľová záplata** dotyčná ku všetkým trom zaobleniam (zrušte **Rohy**, ak chcete namiesto toho hranatý roh); hrana musí byť aspoň dvojnásobne dlhá ako polomer, kde sú oba jej konce takéto rohy. Riadok výsledku uvedie, koľko hrán sa zaoblilo a ako dopadli rohy. Vnútorné hrany sa dajú zaobliť tiež, ale výsledok, ktorý sa znovu neuzavrie, sa iba nahlási (riadok to povie), preto ho skontrolujte.

**Zhrubnúť na teleso** dá ploche hrúbku: vyberte ju, zadajte **hrúbku** a označte **Druhá strana**, aby narástla opačným smerom. Odsadená plocha sa prispôsobí ploche a porovná sa s ňou (riadok výsledku uvádza najväčší rozdiel od hrúbky); steny sledujú každú hranu a každý obrys orezania. Ak plocha ohýba na tej strane tesnejšie než hrúbka alebo iná časť plochy leží bližšie než hrúbka, odmietne sa s uvedením plochy a miesta a nič sa nezmení.

## Zapiecť teleso do súčiastky

**Zapiecť** (na paneli Plochy) alebo **Zapiecť do súčiastky** v zozname **Telesá** urobí teleso telesom súčiastky, rovnako ako sa otvorený STL stáva jedným: vyberte teleso, či sa má **pridať** k súčiastke, **odobrať** z nej alebo **prieniknúť** s ňou, a toleranciu (ako ďaleko môžu byť trojuholníky od presných plôch). Je to jeden krok {{ui:Späť}} súčiastky a v zozname prvkov sa objaví ako import pomenovaný podľa telesa. Súčiastka si uchová trojuholníky, takže sa otvorí a prebuduje bez plôch; presné teleso zostane v Plochách, takže ho môžete po zmene zapiecť znovu.

## Súbory

Exportujte **STEP** (AP242) alebo **IGES** s krivkami a plochami presne tak, ako sú (B-spline krivky a plochy, nič sa nepremení na trojuholníky). Každá plocha je vlastná plocha so svojím orezaním; teleso sa zapíše ako jedna uzavretá škrupina, každá hrana zdieľaná dvoma plochami, ako to očakávajú iné CAD programy (stavový riadok uvedie, koľko telies takto odišlo). V IGES je to isté teleso jeden B-rep plné teleso (entita 186 nad uzavretou škrupinou 514, plochy 510, slučky 508, jeden zoznam hrán 504 a jeden zoznam vrcholov 502); teleso, ktorého plochy sa nepárujú hrana po hrane, sa zapíše ako samostatné plochy a riadok to povie. **Import…** načíta takéto teleso späť ako teleso, zo STEP aj z IGES.

## Hydrostatické čiary trupu

**Vyhladiť** (na paneli Plochy) zmeria každú krivku na jej presnom tvare — inflexie (kde sa mení ohyb z jedného smeru na druhý), najväčšiu krivosť, skoky krivosti v jej uzlových hodnotách a jej drsnosť — a prebuduje tie s inflexiou alebo skokom s najmenším počtom riadiacich bodov, ktoré zostanú v tolerancii, ktorú zadáte, a nepridajú inflexiu. Nakreslite stanice, vodné čiary a bokorysy ako krivky, vyhlaďte ich, potom **Loft** trup cez stanice a skontrolujte ho pomocou **Zebra**. Nevyhladené krivky sa tiež objavia v **Problémy** s opravou **Vyhladiť túto krivku**. Čiara, ktorá má meniť smer (S-tvarový rez), si zachová tú jednu inflexiu. Výtlak trupu, ťažiská a ramená vzpriamenia pochádzajú z telesovej súčiastky: pozri nástroj hydrostatiky.

## Plochy zo skenu (reverzné inžinierstvo)

Otvorte súčiastku, ktorá obsahuje naskenovanú sieť (otvorený STL alebo zapečené teleso), vyberte **Plochy** v poli **Pracovný priestor** a v skupine **Sken** vyberte **Prispôsobiť plochy skenu**; sieť súčiastky je sken. Nástroj hľadá **roviny**, **valce**, **gule** a **kužele** (presné plochy, z ktorých je obrobená súčiastka; každý riadok ukáže polomer alebo polovičný uhol, ktorý našiel), nachádza **zaoblenia** (zaoblené hrany a rohy: malý valec alebo guľa, ktorá dotyčne prechádza do dvoch alebo viacerých ďalších plôch, zobrazená s polomerom a plochami, ktoré spája), **okrajové zaoblenia** (tór: zaoblená hrana, kde rovinná plocha stretáva valec alebo kužeľ, zobrazená s polomerom a polomerom prstenca) a **premenlivé zaoblenia** (zaoblená hrana, ktorej polomer sa mení pozdĺž nej, zobrazená s polomerom na každom konci), prispôsobí **jednu voľnú záplatu** hladkému, mierne zakrivenému kusu a každú plochu orezáva na obrys časti skenu, z ktorej pochádza, takže diery a rohy zostanú. Možnosti: **tolerancia** (ako ďaleko v mm môže bod skenu byť od roviny alebo valca a stále k nej patriť, a cieľ pre voľnú záplatu), **najmenší kus** (podiel plochy povrchu) a **najviac plôch**. Rovnaký sken a rovnaké možnosti vždy dajú rovnaké plochy.

Výsledok je tabuľka, jeden riadok na plochu: jej druh, koľko trojuholníkov z nej pochádza a chyba **nameraná od skenu k ploche** (rms, najväčšia a podiel bodov v rámci tolerancie). Merajú sa vrcholy skenu a stred každého trojuholníka. Chyba sa nemeria opačným smerom (od plochy ku skenu), takže plocha, ktorá presahuje sken, by sa neukázala. Poznámka pod tabuľkou tiež uvádza, koľko plochy bolo príliš malé na prispôsobenie. V pohľade sú body skenu zafarbené podľa svojej **mapy odchýlok**: modrá na ploche, zelená v polovici k tolerancii, červená na tolerancii alebo nad ňou (zrušte **Zobraziť mapu odchýlok**, ak ju chcete skryť). Kusy, ktoré sa vracajú sami do seba (napríklad uzavretá trubica prispôsobená voľnými záplatami), sa uvedú ako nenaprispôsobené, nikdy sa nenútia do jednej plochy.

**Zošiť plochy do telesa** zošije každú zobrazenú plochu, ktorá nie je v telese, do jedného uzavretého telesa. Plochy skenu sa stretávajú len v rámci vlastnej chyby skenu, preto skúša najmenšiu vzdialenosť spojenia, ktorá uzavrie (nikdy viac než **vzdialenosť zošitia**, ktorú nastavíte), a odmietne slovami, keď sa plochy neuzavrú. Nikdy nezakrýva medzeru. Škatuľa so zaoblenými hranami sa zošije, keď sa jej zaoblenia našli ako vlastné plochy; vzdialenosť spojenia, ktorá uzavrela, je vo výsledku. Teleso potom funguje so Zjednotením, Odčítaním, Prienikom a **Zapiecť do súčiastky**.

Čo nerobí: **okrajové zaoblenie** (tór) sa hľadá len okolo osi valca alebo kužeľa, ktorý sa už našiel, a **premenlivé zaoblenie** len pozdĺž takmer rovnej hrany (jeho rezy sú štvorcovo orezané k jednému smeru); inde vyjdú ako voľné záplaty, keď sú dostatočne hladké, a inak sa vynechajú; gule, kužele a zaoblenia sa hľadajú náhodným vzorkovaním, takže veľmi malý (niekoľko trojuholníkov) sa môže minúť; mapa odchýlok ukazuje vzdialenosť od skenu k plochám, nie naopak; veľmi veľké sken (nad 300 000 trojuholníkov) sa tu odmietne. Plochy celého otočeného valca sa orezávajú okolo dier, so švom umiestneným tam, kde nie je diera. Pred spoliehaním skontrolujte každú plochu voči svojmu skenu.

## Ešte nie je hotové

Zaokrúhľovanie hrán, ktoré sa stretajú v rohu zakrivených plôch alebo s rôznymi polomermi (prechod vrcholu), zaoblenie medzi plochami, ktoré sa nestretajú, vnútorné zaoblenie, ktoré končí na šikmej alebo zakrivenej ploche, booleovské operácie a zaoblenia počítané na plochách bez trojuholníkov (tu telesové jadro pracuje na trojuholníkoch v rámci tolerancie a každý bod sa potom vráti na presné plochy), zapečené teleso, ktoré sleduje plochy, keď sa zmenia, orezanie plochy inou plochou mimo Booleovskej operácie, vypĺňanie dier s viac než štyrmi stranami, premietanie kriviek na plochy.
