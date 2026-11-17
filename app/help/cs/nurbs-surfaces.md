---
title: Volné plochy (NURBS)
summary: Hladké křivky a plochy vedle dílu — lofting, tažení, sítě křivek, záplaty ze čtyř hran, přechody, ořezy — se spojitostí G0, G1 a G2 měřenou na přesných plochách, tělesa se sjednocením, odečtením a průnikem zapečená do dílu, zobrazení zebra a křivosti, plochy přizpůsobené skenu s měřenou chybou a soubory STEP nebo IGES. Uloženo v souboru dílu.
keywords: nurbs, sken, reverzní inženýrství, přizpůsobit, síť na plochu, mračno bodů, stl, ořez, oříznutý, díra, řez, těleso, tělesa, booleovské, sjednotit, odečíst, průnik, rozdíl, sešít, uzavřený, zapéct, volný tvar, plocha, plochy, b-spline, bspline, křivka, spline, lofting, tažení, kolejnice, síť, záplata, přechod, shoda, spojitost, g0, g1, g2, tečna, křivost, zebra, řídicí body, uzly, stupeň, step, iges, třída A, trup, vyhlazení
from: 64ed5196
---

Pracovní prostor **Plochy** vytváří hladké křivky a plochy takového druhu, jaký se používá pro skořepiny výrobků, karoserie aut a trupy lodí: NURBS, tatáž matematika, jakou používají ostatní modeláře ploch. Vše se měří na přesných plochách, nikdy na trojúhelnících, které vidíte. Velikosti jsou v milimetrech, jako v zbytku PartCraft.

Vyberte **Plochy** v poli **Pracovní prostor**. Panel nástrojů má {{ui:Křivka}}, {{ui:Lofting}}, {{ui:Tažení po dráze}}, {{ui:Přizpůsobit}} a {{ui:Zebra}}; každý příkaz je v panelu vpravo. Příkaz říká, co ještě potřebuje: klikněte na křivky nebo plochy v pohledu (u hrany nebo konce, když to vyžaduje) nebo je vyberte v seznamu; zadejte body, nebo na ně klikněte na plochách dílu (mimo díl dopadnou na zemní rovinu), a potvrďte klávesou Enter.

Křivky a plochy se ukládají do souboru dílu vedle tělesa. Nemění prvky dílu: panel má vlastní {{ui:Zpět}} a {{ui:Znovu}}, jeden krok na příkaz.

## Křivky

- **Křivka procházející body** prochází každým bodem, na který kliknete. **Křivka podle řídicích bodů** místo toho sleduje klec bodů.
- **Vložit uzel**, **Zvýšit stupeň** a **Snížit stupeň** mění popis křivky, aniž by ji posunuly (snížení se odmítne, pokud by se křivka posunula víc než o toleranci). **Přepočítat křivku** jí dá nový počet řídicích bodů a řekne, o kolik se posunula.
- **Přizpůsobit křivku** spojí konec jedné křivky s jinou pomocí G0 (dotyk), G1 (stejný směr) nebo G2 (i stejná křivost).
  **Přechodová křivka** přidá novou křivku mezi dva konce, G1 nebo G2.

## Plochy

- **Lofting** přes dvě nebo více křivek, **Přímková plocha** mezi dvěma, **Vytáhnout křivku**, **Rotovat křivku**.
- **Tažení podél jedné kolejnice** veze profil po dráze bez kroucení; **Tažení podél dvou kolejnic** udržuje konce profilu na obou kolejnicích. Tažení se přizpůsobuje: výsledek říká, jak těsně zůstal u skutečného tažení.
- **Plocha ze sítě křivek** prochází mřížkou křivek (každá kříží každou z ostatních jednou).
  **Záplata ze čtyř hran** vyplní čtyři křivky, které se stýkají v rozích.
- **Přizpůsobit plochu** přivede hranu plochy k sousedovi s G0, G1 nebo G2; **Přechodová plocha** přidá plochu mezi dvě hrany.
- **Odsazená plocha**, **Prodloužit plochu** (plocha pokračuje, jak směřovala), **Přepočítat plochu**.

## Kontrola kvality

Tabulka **Sdílené hrany** uvádí každou hranu, kterou sdílejí dvě plochy, s mezerou (mm), úhlem mezi nimi (°) a skokem křivosti (1/mm), a zda to dává G0, G1 nebo G2. Hrana, která je horší, než jste požadovali, se objeví v **Problémech** s opravou **Přizpůsobit**.
Pruhy **Zebra** a barvy **křivosti** pocházejí z přesné plochy: pruhy, které přes hranu běží bez přerušení, znamenají G1; pruhy, které si zachovají i šířku, znamenají G2.

G0–G2 se měří v 33 bodech na hranu. **G3 a kvalita „třídy A“ se neměří** a netvrdí se.

## Ořez plochy

Skupina **Ořez** řeže plochu, aniž by změnila její tvar: plocha si ponechá všechny řídicí body a zobrazí, počítá a zapíše se jen část uvnitř obrysu. **Ořez na obdélník** a **Ořez kružnicí** pracují s podílem (0 až 1) plochy v každém směru, takže nepotřebují výběr v pohledu; **Ořez křivkou** vezme uzavřenou křivku ležící na ploše (promítne se do plochy a při otevřené křivce nebo vzdálenosti větší než tolerance se slovně odmítne). Zaškrtněte **Vyříznout díru**, chcete-li odstranit vnitřek obrysu; nechte nezaškrtnuté, chcete-li ponechat jen vnitřek. Plocha může mít jeden ponechaný obrys a libovolný počet děr; obrys, který jiný překříží, se odmítne. **Odstranit ořez** ukáže celou plochu znovu. Panel {{ui:Zpět}} vrátí ořez zpět jako každý jiný krok.

STEP nese ořez jako hranice plochy a IGES jako oříznutou plochu (entita 144); oba ho načtou zpět.

## Tělesa a Booleovy operace

Skupina **Tělesa** mění plochy na uzavřená tělesa a kombinuje je. Těleso je zde množina ploch panelu, které dohromady uzavírají objem; jeho plochy zůstávají přesnými plochami NURBS s ořezy.

- **Krabice těleso**, **Válec těleso** a **Koule těleso** vytvoří jedno z zadaných rozměrů (v mm): krabici se šesti rovinnými stěnami, válec s kulatým pláštěm a dvěma rovinnými konci oříznutými na kružnici, kouli z jedné rotační plochy.
- **Těleso z ploch** seskupí plochy, které jste vytvořili sami. Vyberte je, nebo nevyberte žádnou, pak se použijí všechny zobrazené plochy, které ještě nejsou v tělese. Sešijí se v rámci tolerance: nebudou-li uzavřené, nic se nezmění a panel řekne, kolik hran zůstává otevřených a jak blízko se musí setkat.
- **Sjednocení**, **Odečtení** (druhé těleso se odečte od prvního) a **Průnik** (jen to, co oba sdílejí) berou dvě tělesa: klikněte na plochu každého v pohledu, nebo stiskněte **Vybrat** v seznamu **Tělesa**. Zaškrtněte **Ponechat obě tělesa**, chcete-li je ponechat vedle výsledku.

Booleovská operace nechá každou plochu na její přesné ploše a ořeže ji novými obrysy podél průniku. Řádek výsledku uvádí naměřené hodnoty: o kolik museli body tělesového jádra posunout, aby seděly na přesných plochách (nejvýš o toleranci), jak blízko jsou body průniku k oběma plochám (obvykle několik milionťin milimetru), objem a zda se nové plochy po sešití z přesných ploch opět uzavírají. Objemy se měří na trojúhelnících v toleranci (0,05 mm, pokud nenastavíte jinou), takže objem koule nebo válce vychází mírně pod přesnou hodnotou: menší tolerance se přiblíží. Booleovská operace, kterou nelze provést čistě (tělesa nesdílejí nic, obrys by se křížil sám se sebou), se slovně odmítne a nic nezmění. Jedna booleovská operace je jeden krok {{ui:Zpět}} panelu.

V seznamu **Tělesa** **Rozdělit** ponechá plochy jako prosté plochy; ikona koše odstraní těleso i jeho plochy.

## Zaoblení a ztloustnutí

**Zaoblení mezi plochami** zaoblí hranu, kde se stýkají dvě plochy jednoho tělesa: vyberte dvě plochy (v pohledu, nebo pomocí **Vybrat** v seznamu), zadejte **poloměr** a pro poloměr, který se mění podél hrany, **poloměr na konci** (0 ponechá jeden poloměr). Kulička tohoto poloměru se valí po hraně a dotýká se obou ploch; zaoblení je přesný kruhový oblouk, který v každém bodě zůstane, spojený do jedné plochy, a obě plochy se oříznou tam, kde se kulička dotýká. Vnější hrana ztrácí materiál, vnitřní roh materiál získává. Řádek výsledku uvádí, co bylo změřeno: jak daleko je plocha zaoblení od valící se kuličky mezi body, z nichž byla vytvořena (body se přidávají, dokud není odchylka do čtvrtiny tolerance), největší úhel mezi zaoblením a každou plochou podél dotykových čar a stejná čísla jako u sjednocení. Poloměr, který se nevejde (kulička by opustila plochu nebo plocha se zakřivuje těsněji než poloměr), se odmítne s uvedením plochy a nic se nezmění.

**Zaoblit více hran** zaoblí mnoho hran v jednom kroku: vyberte dvě plochy první hrany, pak dvě plochy další a tak dál (plocha může být v několika dvojicích, například horní plocha krabice ve čtyřech z nich); všechny hrany dostanou zadaný poloměr. Každé zaoblení se počítá na tělese tak, jak bylo, pak se řežou jedno za druhým, takže pořadí nezáleží. Kde se dvě zaoblené hrany setkají v rohu, jehož ostatní hrany zůstávají ostré, dva zaoblení se prolnou podél své průnikové křivky (hřbet). Kde se tři zaoblené vnější hrany tří rovinných ploch, které jsou na sebe kolmé, setkají se stejným poloměrem, roh je jedna **kulová záplata** tečná ke všem třem zaoblením (zrušte **Rohy**, chcete-li místo ní hřbetový roh); hrana musí být alespoň dvojnásobek poloměru dlouhá, když jsou na obou koncích takové rohy. Řádek výsledku říká, kolik hran se zaoblilo a jak dopadly rohy. Vnitřní hrany lze zaoblit také, ale výsledek, který se znovu neuzavře, se jen oznámí (řádek to uvede), takže jej zkontrolujte.

**Ztloustnit na těleso** dá ploše tloušťku: vyberte ji, zadejte **tloušťku** a zaškrtněte **Druhou stranu**, chcete-li ji narůst na opačnou stranu. Odsazená plocha se přizpůsobí původní ploše a měří se proti ní (řádek výsledku uvádí největší rozdíl od tloušťky); stěny sledují každou hranu a každý obrys ořezu. Pokud se plocha na této straně zakřivuje těsněji než tloušťka, nebo jiná její část leží blíž než tloušťka, odmítne se s uvedením plochy a místa a nic se nezmění.

## Zapečení tělesa do dílu

**Zapéct** (v panelu Plochy) nebo **Zapéct do dílu** v seznamu **Tělesa** udělá z tělesa těleso dílu, stejně jako se z otevřeného STL stane těleso: vyberte těleso, zda se **přidá** k dílu, **odečte** od něj, nebo s ním bude **průnik**, a toleranci (jak daleko smějí být trojúhelníky od přesných ploch). Je to jeden krok {{ui:Zpět}} dílu a v seznamu prvků se objeví jako import pojmenovaný podle tělesa. Díl si ponechá trojúhelníky, takže se otevře a přestaví bez ploch; přesné těleso zůstane v Plochách, takže jej po změně můžete zapéct znovu.

## Soubory

Exportujte **STEP** (AP242) nebo **IGES** s křivkami a plochami přesně tak, jak jsou (B-splajnové křivky a plochy, nic nepřevedeno na trojúhelníky). Každá plocha je vlastní plocha se svým ořezem; těleso se zapíše jako jeden uzavřený plášť, každá hrana sdílená dvěma plochami, jak to očekávají ostatní CAD programy (stavový řádek říká, kolik těles tak odešlo). V IGES je totéž těleso jednou varietou plného tělesa B-rep (entita 186 nad uzavřeným pláštěm 514, plochy 510, smyčky 508, jeden seznam hran 504 a jeden seznam vrcholů 502); těleso, jehož plochy se nespárují hrana po hraně, se zapíše jako samostatné plochy a řádek to řekne. **Import…** takový soubor načte zpět jako těleso, ze STEP i z IGES.

## Vyhlazení trupových čar

**Vyhladit** (v panelu Plochy) změří každou křivku na jejím přesném tvaru — inflexe (místa, kde přechází z ohybu jedním směrem do ohybu opačným), největší křivost, skoky křivosti v jejích uzlech a její drsnost — a přepočítá ty, které mají inflexi nebo skok, s nejmenším počtem řídicích bodů, který zůstane v toleranci, kterou zadáte, a nepřidá žádnou inflexi. Nakreslete spanty, vodní čáry a buttocks jako křivky, vyhlaďte je, pak trup **Loftujte** přes spanty a zkontrolujte jej pomocí **Zebra**. Nevyhlazené křivky se také objeví v **Problémech** s opravou **Vyhladit tuto křivku**. Čára, která má změnit směr (sekce ve tvaru S), si zachová tu jednu inflexi. Výtlak trupu, těžiště a rameno vzpřímení pocházejí z plného dílu: viz nástroj hydrostatiky.

## Plochy ze skenu (reverzní inženýrství)

Otevřete díl, který obsahuje naskenovanou síť (otevřený STL nebo zapečené těleso), vyberte **Plochy** v poli **Pracovní prostor** a ve skupině **Sken** zvolte **Přizpůsobit plochy skenu**; vytvořená síť dílu je sken. Nástroj hledá **roviny**, **válce**, **koule** a **kužele** (přesné plochy, z nichž se obrobený díl skládá; každý řádek ukazuje poloměr nebo poloviční úhel, který našel), hledá **zaoblení** (zaoblené hrany a rohy: malý válec nebo koule, která běží tečně do dvou nebo více dalších ploch, s uvedeným poloměrem a plochami, které spojuje), **zaoblení okrajů** (torus: zaoblená hrana, kde rovinná plocha přechází do válce nebo kužele, s uvedeným poloměrem a poloměrem prstence) a **proměnná zaoblení** (zaoblená hrana, jejíž poloměr se podél ní mění, s poloměrem na každém konci), přizpůsobí **jednu volnou záplatu** hladkému, mírně zakřivenému kusu a ořeže každou plochu podle obrysu části skenu, odkud pochází, takže díry a rohy zůstanou. Možnosti: **tolerance** (jak daleko v mm smí bod skenu být od roviny nebo válce a stále k nim patřit, a cíl pro volnou záplatu), **nejmenší kus** (podíl plochy povrchu) a **nejvíce ploch**. Stejný sken a stejné možnosti vždy dají tytéž plochy.

Výsledkem je tabulka, jeden řádek na plochu: její druh, kolik trojúhelníků z ní pochází, a chyba **měřená od skenu k ploše** (střední kvadratická, největší a podíl bodů v toleranci). Měřené body jsou vrcholy skenu a středy každého trojúhelníku. Chyba se neměří opačným směrem (plocha ke skenu), takže plocha, která sahá za sken, by se neukázala. Poznámka pod tabulkou také říká, jaká část plochy byla příliš malá na přizpůsobení. V pohledu se body skenu obarví podle **mapy odchylek**: modře na ploše, zeleně v polovině tolerance, červeně na toleranci nebo výše (zrušte **Zobrazit mapu odchylek**, chcete-li ji skrýt). Kusy, které se samy prohnou (uzavřená trubka přizpůsobená volnými záplatami, například), se uvedou jako nepřizpůsobené a nikdy se nevtlačí do jedné plochy.

**Sešít plochy do tělesa** sešije každou zobrazenou plochu, která není v tělese, do jednoho uzavřeného tělesa. Plochy skenu se stýkají jen v rámci vlastní chyby skenu, takže nástroj zkusí nejmenší spojovací vzdálenost, která uzavře (nikdy větší než **vzdálenost sešití**, kterou nastavíte), a slovně se odmítne, když se plochy neuzavřou. Nikdy nepřekrývá mezeru. Krabice se zaoblenými hranami se sešije, když byla její zaoblení nalezena jako vlastní plochy; spojovací vzdálenost, která uzavřela, je ve výsledku. Těleso pak funguje se sjednocením, odečtením, průnikem a **Zapéct do dílu**.

Co nedělá: **zaoblení okrajů** (torus) se hledá jen kolem osy již nalezeného válce nebo kužele a **proměnné zaoblení** jen podél docela přímé hrany (její řezy jsou řezány kolmo k jednomu směru); jinde vyjdou jako volné záplaty, je-li dost hladké, a jinak se vynechají; koule, kužele a zaoblení se hledají náhodným vzorkováním, takže velmi malé (několik trojúhelníků) mohou uniknout; mapa odchylek ukazuje vzdálenost od skenu k plochám, ne opačně; velmi velké sken (přes 300 000 trojúhelníků) se zde odmítnou. Plochy válce s plným otáčením se řežou kolem děr a šev se umístí tam, kde žádná díra není. Každou plochu zkontrolujte proti skenu, než se na ni spolehnete.

## Ještě není hotovo

Zaoblení hran, které se stýkají v rohu zakřivených ploch nebo s různými poloměry (vrcholový přechod), zaoblení mezi plochami, které se nestýkají, vnitřní zaoblení končící na šikmé nebo zakřivené ploše, booleovské operace a zaoblení počítané na plochách bez trojúhelníků (zde tělesové jádro pracuje na trojúhelnících v toleranci a každý bod se pak vrátí na přesné plochy), zapečené těleso, které sleduje plochy, když se změní, ořez plochy jinou plochou mimo booleovskou operaci, vyplňování děr s více než čtyřmi stranami, promítání křivek na plochy.
