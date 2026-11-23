---
title: Vytvořte dráhy nástroje a G-kód (Výroba)
summary: Nastavte polotovar a počátek obrobku, zvolte nástroje, přidejte operace plochy, kapsy, obrysu, vrtání a sražení hrany výběrem ploch, dokončete celý model ve 3D (rovnoběžně, konstantní převýšení), simulujte polotovar proti modelu kvůli vrypům a času cyklu a stáhněte G-kód z jednoho ze tří vestavěných postprocesorů nebo z vlastního, který upravíte.
keywords: přesný STEP, STEP pro dílnu, souřadnice obrobku, předání CAM, rovnoběžně, konstantní převýšení, 3D dokončování, dokončování, kulová fréza, knihovna nástrojů, upravit postprocesor, vlastní postprocesor, editor postprocesoru, adaptivní, adaptivní obrábění, konstantní záběr, trochoidální, hsm, vysokorychlostní obrábění, výroba, CAM, dráha nástroje, G-kód, NC, CNC, frézka, frézování, kapsa, obrys, profil, čelní frézování, vrtání, peck, G83, G81, G73, sražení hrany, polotovar, posunutí obrobku, G54, postprocesor, GRBL, LinuxCNC, posuvy a otáčky, simulace, vryp, čas cyklu
from: f8a03be8
---

Pracovní prostor Výroba mění díl na dráhy nástroje a zapisuje je jako G-kód. Většina operací je **2,5osé** frézování: nástroj stojí svisle, stěny se řežou přímo dolů a dna jsou rovná. **3D hrubování** a **Zbytky** obrábějí zakřivené díly ve 3D ([3D hrubování a obrábění zbytků](topic:rough-3d)); **Rovnoběžně** a **Konstantní převýšení** je dokončují ([3D dokončování](topic:finish-3d)). Na stroji s rotačními osami může mít libovolná operace nakloněný nástroj a dvě operace pohybují rotačními osami během řezu ([4- a 5osé obrábění](topic:multi-axis)). Pro soustruh existují operace ([Soustružení](topic:turning)) a pro dotykovou sondu ([Snímání](topic:probing)). Pracuje s pojmenovanými plochami, které dílu dává síťové jádro (viz [Síťové jádro](topic:solid-kernels)).

Laboratorní sestavení: zkontrolujte každý program v simulátoru vašeho řídicího systému a nejdřív jej spusťte ve vzduchu nad polotovarem bez řezu.

## Upnutí

1. V přepínači pracovního prostoru zvolte **Výroba**, pak {{ui:Nové upnutí}}.
2. Na kartě **Upnutí** zvolte:
   - **Osa nástroje (+Z)**: kterým směrem nástroj míří do dílu. Výchozí je světové +Y (nahoru v PartCraftu); pak je osa X stroje světová X a osa Y stroje je světová −Z.
   - **Počátek obrobku (G54)**: roh nebo střed polotovaru, horní nebo spodní strana, střed horní strany modelu nebo počátek modelu.
   - **Polotovar**: kvádr nebo válec, buď model plus odsazení (boky, horní a spodní strana), nebo pevná velikost.
   - **Materiál** (nastaví výchozí posuvy a otáčky), **postprocesor** (řídicí systém), maximální otáčky vřetena stroje, rychloposuv a čas výměny nástroje, chlazení a číslo programu.

## Nástroje

Karta **Nástroje** obsahuje knihovnu: ploché, kulové a zaoblené koncové frézy, vrtáky, sražecí frézy a čelní frézy, každá s číslem T, průměrem, počtem zubů a délkou zubů (plus poloměr rohu, úhel hrotu nebo sražení, kde se to uplatní).

Vlastní nástroje lze uložit v prohlížeči a přenést mezi počítači jako soubor: viz [Knihovna nástrojů](topic:tool-library).

Otáčky vřetena a posuv se odvozují z materiálu: n = 1000 × řezná rychlost / (π × průměr), posuv = n × počet zubů × posuv na zub (vrtáky: n × posuv na otáčku). Čísla jsou konzervativní výchozí hodnoty z publikovaných rozsahů, nejsou vyladěna pro váš stroj; zadejte řeznou rychlost, posuv na zub, ot./min nebo posuv od výrobce nástroje a přepište je. Když otáčky překročí maximum stroje, drží se na něm a posuv je následuje, takže posuv na zub zůstává.

## Přidání operací

Každé tlačítko na panelu nástrojů přidá operaci a tam, kde potřebuje geometrii, začne výběr: klikněte na plochy nebo hrany v pohledu (dalším kliknutím výběr zrušíte), pak {{ui:Done picking}} nebo {{key:Esc}}.

| Operace | Výběr | Co dělá |
|---|---|---|
| {{ui:Face}} | nic | Cik-cak průchody přes celý polotovar, za jeho hranami, dolů až k horní straně modelu |
| {{ui:Pocket}} | rovnou plochu dna, kulatý otvor nebo uzavřený řetěz hran | Vyčistí oblast ofsetovými průchody zevnitř ven, při každém zanoření; ostrůvky (plochy vystupující nad dnem uvnitř) zůstanou; dno otevřené ze všech stran (nic výše mimo něj) se vyčistí až k hraně polotovaru |
| {{ui:Adaptive}} | totéž jako Kapsa | Vyčistí stejnou oblast průchody, z nichž každý řeže nastavenou šířku (**Záběr**, zlomek průměru), takže nástroj nikdy neřeže plnou šířku drážky, ani v rozích; vjíždí šroubovicí a dokončuje stěny na každé úrovni. Úzké řezy dovolují hlubší přísuv a vyšší posuv |
| {{ui:Contour}} | rovnou plochu (její obrys), kulatou plochu nebo hrany | Sleduje obrys odsazený o poloměr nástroje, zvenku nebo zevnitř, s najížděcími a vyjíždějícími oblouky a volitelnými můstky |
| {{ui:Drill}} | otvory (klikněte na stěnu nebo okraj otvoru) | Vrtá každý otvor pevným cyklem: peck (G83), vrtání (G81) nebo zlomení třísky (G73); nebo zadejte průměr a vyvrtejte každý otvor té velikosti |
| {{ui:Chamfer}} | obrys nebo hrany plochy | Vede sražecí frézu podél hrany tak, aby řezala šířku, kterou nastavíte |
| {{ui:Parallel}} | nic (celý model) | 3D dokončování rovnoběžnými čarami pod libovolným úhlem, sledující plochu kulovou, zaoblenou nebo plochou koncovou frézou. Viz [3D dokončování](topic:finish-3d) |
| {{ui:Scallop}} | nic (celý model) | 3D dokončování průchody ve vzdálenosti nastavené po ploše, takže hřbet mezi nimi má výšku, kterou požadujete |

Vyberte operaci v seznamu a změňte její nástroj, výšky (bezpečná vzdálenost, zdvih, výška posuvu, horní a spodní hrana), hloubku přísuvu, posun mezi drahami, ponechaný přídavek, dokončovací průchod, najetí (šroubovice, nájezd nebo zanoření), sousledné frézování, můstky nebo cyklus. {{ui:Up}} a {{ui:Down}} změní pořadí, {{ui:Suppress}} operaci vynechá a {{ui:Delete}} ji odstraní. Vše je v historii zpět a uloženo v souboru dílu.

Posun mezi drahami kapsy je nejvýše polovina průměru nástroje, takže každý bod jejího dna leží v jednom poloměru nástroje od některé dráhy. Vnitřní rohy si zachovávají poloměr nástroje.

**Adaptivní obrábění** udržuje záběr nástroje blízko jedné hodnoty. Záběr 0,15 průměru odpovídá úhlu záběru asi 46°: oblouku hrany nástroje v materiálu. Ofsetová kapsa naproti tomu řeže na prvním průchodu plnou šířku a v každém vnitřním rohu se dále obtáčí. Mezi průchody zůstává nástroj v záběru tam, kde se pohybuje řezaným vzduchem, a jinde se zvedne a zase klesne v řezaném vzduchu. Průchody se počítají na jemné mřížce přes oblast (buňky asi dvanáctina poloměru nástroje), takže záběr může být až asi o jednu buňku širší, než je nastaveno; stěny jsou dokončeny přesně. Velká otevřená oblast dává dlouhý program s mnoha krátkými pohyby.

## Simulace

Dráhy se po každé změně přepočítají (i díl). {{ui:Simulate}} také ukáže polotovar zbývající po celém programu. Panel ukazuje:

- **Čas cyklu**: posuvové pohyby při svém posuvu, rychloposuvy jako přímky při rychlosti rychloposuvu nastavené v upnutí, plus čas výměny nástroje. Skutečné stroje zrychlují, takže trvají déle.
- **Vrypy**: místa, kde nástroj klesl více než 0,02 mm pod povrch dílu. Červené značky je ukazují v pohledu.
- **Polotovar zbývající na dílu**.

Polotovar je výšková mapa shora (Z-mapa), takže nemůže ukázat podříznutí. Přetažením **Přehrávání** posunete nástroj podél programu. V pohledu jsou posuvové pohyby plné a rychloposuvy čárkované, jedna barva na operaci.

Při zapnutém **Zobrazit simulovaný polotovar** je polotovar obarven proti modelu buňka po buňce: **zeleně** tam, kde je na modelu (do 0,02 mm), **červeně** tam, kde nástroj zařízl do modelu, a tam, kde na modelu zůstává polotovar, **žlutě** pro tenkou vrstvu, **oranžově** pro více, plynule přecházející do **šedé** neobrobeného polotovaru od 1 mm výše. Barvy se přepočítají při každé změně ze stejné výškové mapy jako čísla v panelu, takže zelená a červená souhlasí s řádkem Vrypy. Sražení hrany řeže do modelu záměrně a podél své hrany ukáže červeně.

## Postprocesor G-kódu

Zvolte řídicí systém pod **Postprocesor** a stiskněte {{ui:Download G-code}} (nebo {{ui:Post}} na panelu nástrojů):

| Řídicí systém | Soubor | Poznámky |
|---|---|---|
| Fanuc-style ISO | .nc | %, číslo O, čísla řádků, T M6 s G43 H, pevné cykly |
| GRBL | .nc | Bez výměníku nástrojů a pevných cyklů: výměna nástroje pozastaví program pomocí M0, vrtání je zapsáno jako prosté pohyby |
| LinuxCNC | .ngc | T M6 s G43 H, pevné cykly, M2 |
| Fanuc-style lathe | .nc | Pro soustružnické programy: X jako průměr, posuv na otáčku, G96 pod limitem G50, závitování G32 |
| LinuxCNC lathe | .ngc | Pro soustružnické programy: průměry G7, G95, G96, závitování G33; nezapisuje pohyb na referenční bod |
| Vlastní | libovolný | Postprocesor, který jste napsali nebo změnili: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Každý soubor začíná komentáři k programu, polotovaru, posunutí obrobku a nástrojům. Souřadnice jsou v milimetrech s 3 desetinnými místy. {{ui:Toolpath CSV}} a {{ui:Toolpath JSON}} exportují samotné pohyby.

**Před řezáním zkontrolujte výstup v simulátoru vašeho stroje a nejdřív jej spusťte ve vzduchu nad polotovarem.** Tři vestavěné postprocesory jsou výchozí body, které se řídí zdokumentovaným chováním řídicích systémů; nebyly ověřeny na žádném konkrétním stroji. Postprocesor, který změníte, musíte ověřit sami. Jak jeden napsat: [Upravitelné postprocesory](topic:post-processors).

## Přesný STEP pro dílnu

Pod tlačítky G-kódu na kartě **Operace** stáhne {{ui:Exact STEP (work coordinates)}} soubor `<part>-work.step`: díl jako přesné těleso (skutečné válce pro otvory a čepy, skutečné kružnice pro jejich hrany) s počátkem v počátku obrobku tohoto upnutí a Z podél osy nástroje. Jsou to souřadnice, které G-kód používá, takže vlastní CAM program nebo kontrolní nástroj dílny srovná model s programem bez jeho přesouvání. Soubor obsahuje jen díl, ne polotovar ani dráhy nástroje.

{{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} zapíše totéž těleso ve vlastní poloze (Z nahoru): viz [Export pro tisk, STEP a DXF](topic:export-files#for-other-cad-programs-step).

## Omezení

- Kapsy, obrysy, vrtání a sražení hran jsou 2,5osé. Zakřivené díly se hrubují a dokončují ve 3D vlastními operacemi ([3D hrubování a obrábění zbytků](topic:rough-3d), [3D dokončování](topic:finish-3d)). Adaptivní obrábění je 2D (ploché dno).
- Nakloněné nástroje, 5osé a 4osé dokončování, soustružení a snímání existují, každé s vlastními omezeními, a **žádné z nich nebylo spuštěno na stroji**: viz [4- a 5osé obrábění](topic:multi-axis), [Soustružení](topic:turning) a [Snímání](topic:probing).
- Držáky a stopky se na kolize nekontrolují; varování se objeví, když je řez hlubší než délka zubů.
- Posuvy a otáčky jsou výchozí hodnoty. Postprocesor je upravitelný text, ale určuje jen, jak se pohyby zapisují; nemůže změnit dráhu nástroje, přidat osy ani znát váš stroj ([Postprocesory](topic:post-processors) uvádí, co neumí).

## Odeslání programu na stroj

V CadCraft Studiu na počítači, s nastaveným strojem ve Studiu, se vedle **Stáhnout G-kód** objeví **Odeslat na stroj…**, které nahraje stejný program na stroj ve vaší síti. Nikdy se nespouští z PartCraftu: spusťte jej na stroji, až bude jasno. V prohlížeči se tlačítko nezobrazuje (webová stránka nemůže dosáhnout na stroj ve vaší síti): místo toho program stáhněte.
