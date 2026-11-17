---
title: Tvorba drah nástroje a G-kódu (Manufacture)
summary: Nastavte polotovar a počátek obrábění, zvolte nástroje, přidejte operace čela, kapsy, obrysu, vrtání a sražení hrany výběrem ploch, dokončete celý model ve 3D (rovnoběžnost, konstantní převýšení), simulujte polotovar proti modelu kvůli zářezům a době cyklu a stáhněte G-kód z jednoho ze tří vestavěných postprocesorů, nebo z vlastního.
keywords: přesné STEP, step pro dílnu, souřadnice obrobku, předání CAM, rovnoběžnost, konstantní převýšení, 3D dokončování, dokončování, kulová fréza, knihovna nástrojů, upravit postprocesor, vlastní postprocesor, editor postprocesoru, adaptivní, adaptivní obrábění, konstantní záběr, trochoidální, hsm, vysokorychlostní obrábění, manufacture, CAM, dráha nástroje, G-kód, NC, CNC, frézka, frézování, kapsa, obrys, profil, čelní frézování, vrtání, peck, G83, G81, G73, sražení hrany, polotovar, posunutí obrobku, G54, postprocesor, GRBL, LinuxCNC, posuvy a otáčky, simulace, zářez, doba cyklu
from: beeb29aa
---

Pracovní prostor Manufacture převádí díl na dráhy nástroje pro třírozměrnou frézku a zapisuje je jako G-kód. Většina operací je **2.5-osé**: nástroj zůstává svislý, stěny se řežou rovně dolů a dna jsou plochá. **Rovnoběžnost** a **Konstantní převýšení** dokončují zakřivené plochy ve 3D (viz [3D dokončování](topic:finish-3d)); nástroj zůstává svislý (tři osy, bez náklonu). Pracuje na pojmenovaných plochách, které jádro sítě dává dílu (viz [Jádro sítě](topic:solid-kernels)).

Laboratorní verze: zkontrolujte každý program v simulátoru vaší řídicí jednotky a nejprve jej spusťte ve vzduchu nad polotovarem.

## Nastavení

1. V přepínači pracovních prostorů zvolte **Manufacture** a pak {{ui:Nové upnutí}}.
2. Na kartě **Nastavení** zvolte:
   - **Osa nástroje (+Z)**: kterým směrem nástroj míří do dílu. Výchozí je světové +Y (nahoru v PartCraftu); pak je osa X stroje světová X a osa Y stroje je světová −Z.
   - **Počátek obrobku (G54)**: roh nebo střed polotovaru, horní nebo spodní strana, horní střed modelu, nebo počátek modelu.
   - **Polotovar**: kvádr nebo válec, buď model plus odsazení (boky, horní, spodní), nebo pevná velikost.
   - **Materiál** (nastaví počáteční posuvy a otáčky), **postprocesor** (řízení), maximální otáčky vřetena stroje, rychlost rychloposuvu a čas výměny nástroje, chlazení a číslo programu.

## Nástroje

Karta **Nástroje** obsahuje knihovnu: ploché, kulové a frézy s zaoblenou špičkou (bull nose), vrtáky, sražecí frézy a čelní frézy, každá s číslem T, průměrem, počtem břitů a délkou břitu (plus poloměr rohu, úhel hrotu nebo sražení, kde se uplatní).

Vlastní nástroje lze uložit v prohlížeči a přesunout mezi počítači jako soubor: viz [Knihovna nástrojů](topic:tool-library).

Otáčky vřetena a posuv vycházejí z materiálu: n = 1000 × řezná rychlost / (π × průměr), posuv = n × počet břitů × posuv na zub (vrtáky: n × posuv na otáčku). Čísla jsou opatrné počáteční hodnoty z publikovaných rozsahů, nejsou naladěné na váš stroj; chcete-li je přepsat, zadejte řeznou rychlost, posuv na zub, ot./min nebo posuv od výrobce nástroje. Když otáčky přesáhnou maximum stroje, drží se na něm a posuv je následuje, takže zůstane zachován posuv na zub.

## Přidání operací

Každé tlačítko na panelu nástrojů přidá operaci a tam, kde potřebuje geometrii, spustí výběr: klikněte na plochy nebo hrany v pohledu (dalším kliknutím jeden odeberete), pak {{ui:Výběr hotov}} nebo {{key:Esc}}.

| Operace | Výběr | Co dělá |
|---|---|---|
| {{ui:Plocha}} | nic | Cik-cak průchody přes celý polotovar, za jeho hranami, dolů k horní straně modelu |
| {{ui:Kapsa}} | plochou podlahu, kulatou díru, nebo uzavřený řetěz hran | Vyčistí oblast odsazenými průchody zevnitř ven, v každém kroku hloubky; ostrůvky (plochy vyčnívající nahoru uvnitř podlahy) zůstanou; podlaha otevřená dokola (nic vyššího vně) se vyčistí až k hraně polotovaru |
| {{ui:Adaptivní}} | stejné jako Kapsa | Vyčistí stejnou oblast průchody, které každý řežou nastavenou šířku (**Záběr**, zlomek průměru), takže fréza nikdy nezabere plnou šířku drážky, ani v rozích; zapíchne se po šroubovici a na každé úrovni dokončí stěny. Úzké řezy dovolí hlubší krok a vyšší posuv |
| {{ui:Obrys}} | plochou plochu (její obrys), kulatou plochu, nebo hrany | Jde po obrysu odsazeném o poloměr nástroje, zvenku nebo zevnitř, s náběžnými a výběžnými oblouky a volitelnými můstky |
| {{ui:Vrtání}} | díry (klikněte na stěnu díry nebo na její okraj) | Vyvrtá každou díru pevným cyklem: peck (G83), vrtání (G81) nebo lámání třísky (G73); nebo zadejte průměr a vyvrtejte každou díru té velikosti |
| {{ui:Sražení hrany}} | obrys plochy nebo hrany | Přejede sražecí frézou podél hrany tak, aby řezala šířku, kterou nastavíte |
| {{ui:Rovnoběžnost}} | nic (celý model) | 3D dokončování rovnoběžnými čarami pod libovolným úhlem, sledující plochu kulovou, bull nose nebo plochou frézou. Viz [3D dokončování](topic:finish-3d) |
| {{ui:Konstantní převýšení}} | nic (celý model) | 3D dokončování průchody v nastavené vzdálenosti přes plochu, takže hřbet mezi nimi má výšku, kterou požadujete |

Operaci v seznamu vyberte a změňte její nástroj, výšky (bezpečná, zdvih, výška posuvu, horní, spodní), krok hloubky, krokování, přídavek, dokončovací průchod, najetí (šroubovicí, rampou nebo kolmým zapíchnutím), frézování sousledně, můstky nebo cyklus. {{ui:Nahoru}} a {{ui:Dolů}} mění pořadí, {{ui:Potlačit}} ji vynechá, {{ui:Smazat}} ji odstraní. Vše je v historii zpět a uloženo v souboru dílu.

Krokování kapsy je nejvýše polovina průměru nástroje, takže každý bod jejího dna leží do jednoho poloměru nástroje od některého průchodu. Vnitřní rohy si zachovávají poloměr nástroje.

**Adaptivní obrábění** drží záběr frézy blízko jedné hodnoty. Záběr 0.15 průměru odpovídá úhlu záběru asi 46°: oblouku hrany frézy v materiálu. Odsazená kapsa naopak řeže na prvním průchodu plnou šířku a v každém vnitřním rohu se obtáčí dál. Mezi průchody zůstává nástroj dole tam, kde se pohybuje řezaným vzduchem, a jinde se zvedá a zase klesá v řezaném vzduchu. Průchody se počítají na jemné síti přes oblast (buňky asi dvanáctina poloměru nástroje), takže záběr může být až o buňku širší, než je nastaveno; stěny se dokončí přesně. Velká otevřená oblast dává dlouhý program s mnoha krátkými pohyby.

## Simulace

Dráhy nástroje se po každé změně přepočítají (i dílu). {{ui:Simulovat}} také ukáže polotovar zbylý po celém programu. Panel zobrazuje:

- **Doba cyklu**: posuvové pohyby rychlostí posuvu, rychloposuvy jako přímky rychlostí rychloposuvu z nastavení, plus čas výměny nástroje. Skutečné stroje zrychlují, takže trvají déle.
- **Zářezy**: místa, kam nástroj zajel více než 0.02 mm pod povrch dílu. Červené značky je ukazují v pohledu.
- **Přídavek zbylý na dílu**.

Polotovar je výškové pole horní strany (Z-mapa), takže nemůže ukázat podřezání. Přetažením **Přehrávání** posunete nástroj po programu. V pohledu jsou posuvové pohyby plné a rychloposuvy čárkované, jedna barva na operaci.

Při zapnutém **Zobrazit simulovaný polotovar** se polotovar barví vůči modelu buňku po buňce: **zeleně** tam, kde je na modelu (do 0.02 mm), **červeně** tam, kde nástroj zařezal do modelu, a kde na modelu zůstává přídavek, **žlutě** pro tenkou vrstvu, **oranžově** pro více, přecházející do **šedé** nedořezaného polotovaru při 1 mm a více. Barvy se při každé změně přepočítají ze stejného výškového pole jako čísla v panelu, takže zelená a červená souhlasí s řádkem Zářezy. Sražení hrany záměrně zařezává do modelu a podél své hrany se ukáže červeně.

## Export G-kódu

Zvolte řídicí systém u **Postprocesor** a stiskněte {{ui:Stáhnout G-kód}} (nebo {{ui:Postprocesor}} na panelu nástrojů):

| Řízení | Soubor | Poznámky |
|---|---|---|
| ISO ve stylu Fanuc | .nc | %, číslo O, čísla řádků, T M6 s G43 H, pevné cykly |
| GRBL | .nc | Bez výměníku nástrojů a pevných cyklů: výměna nástroje se zastaví pomocí M0, vrtání se zapisuje jako prosté pohyby |
| LinuxCNC | .ngc | T M6 s G43 H, pevné cykly, M2 |
| Vlastní | libovolný | Postprocesor, který jste napsali nebo změnili: {{ui:Upravit postprocesor…}}, {{ui:Nový postprocesor…}}, {{ui:Importovat soubor postprocesoru…}} |

Každý soubor začíná komentáři k programu, polotovaru, posunutí obrobku a nástrojům. Souřadnice jsou v milimetrech s 3 desetinnými místy. {{ui:CSV drah nástroje}} a {{ui:JSON drah nástroje}} exportují samotné pohyby.

**Výstup zkontrolujte v simulátoru vašeho stroje před řezáním a nejprve jej spusťte ve vzduchu nad polotovarem.** Tři vestavěné postprocesory jsou výchozí body, které se řídí zdokumentovaným chováním řízení; nebyly ověřeny na žádném konkrétním stroji. Postprocesor, který změníte, je vaším úkolem ověřit. Jak napsat vlastní: [Postprocesory](topic:post-processors).

## Přesné STEP pro dílnu

Pod tlačítky G-kódu na kartě **Operace** stáhne {{ui:Přesné STEP (souřadnice obrobku)}} soubor `<part>-work.step`: díl jako přesné těleso (skutečné válce pro díry a výstupky, skutečné kružnice pro jejich hrany) s počátkem v počátku obrobku tohoto nastavení a Z podél osy nástroje. To jsou souřadnice, které G-kód používá, takže vlastní CAM program nebo kontrolor dílny srovná model s programem bez jeho posunutí. Soubor obsahuje jen díl, ne polotovar ani dráhy nástroje.

{{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} zapíše totéž těleso v původní poloze dílu (Z nahoru): viz [Export pro tisk, STEP a DXF](topic:export-files#for-other-cad-programs-step).

## Omezení

- Kapsy, obrysy, vrtání a sražení hran jsou 2.5osé. Zakřivené plochy lze dokončit ve 3D ([rovnoběžnost a konstantní převýšení](topic:finish-3d)), ale ne hrubovat ve 3D (kužel zůstane jako schody, dokud jej nedokončíte), a chybí obrábění zbytků. Adaptivní obrábění je 2D (plochá dna).
- Pouze tři osy: žádný náklon, žádné soustružení, žádná kontrola.
- Držáky a stopky se nekontrolují na kolize; když je řez hlubší než délka břitu, objeví se varování.
- Posuvy a otáčky jsou počáteční hodnoty. Postprocesor je text, který můžete upravit, ale rozhoduje jen o tom, jak se pohyby zapisují; nemůže změnit dráhu nástroje, přidat osy ani znát váš stroj ([Postprocesory](topic:post-processors) uvádí, co neumí).

## Odeslání programu na stroj

V CadCraft Studio na počítači, s strojem nastaveným ve Studiu, se vedle {{ui:Stáhnout G-kód}} objeví **Odeslat na stroj…** a nahraje stejný program na stroj ve vaší síti. Nikdy se nespouští z PartCraftu: spusťte jej u stroje, až je volno. V prohlížeči se tlačítko nezobrazuje (webová stránka nedosáhne na stroj ve vaší síti): místo toho program stáhněte.
