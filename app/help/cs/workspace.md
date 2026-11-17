---
title: Obrazovka PartCraftu
summary: Prohlídka každého pruhu a panelu: panel nástrojů a jak se mění, historie, údaje o dílu, 3D pohled, panel vlastností a stavový řádek.
keywords: obrazovka, rozložení, panel nástrojů, historie, strom prvků, vlastnosti, panel, stavový řádek, rozhraní, ui, prohlídka, celá obrazovka
from: 5b5bb843
---

Obrazovka má pět částí: panel nástrojů nahoře, historie vlevo, 3D pohled uprostřed, panel vlastností vpravo a stavový řádek dole. Nad nimi všemi je lišta aplikace CadCraft.

## Lišta aplikace

Tenký pruh úplně nahoře patří webu CadCraft, ne samotnému PartCraftu. Ukazuje název aplikace a kde běží, nabídku verzí, **O PartCraftu**, tlačítko režimu obrazovky a přepínač motivu Papír / Model.

- **Papír** jsou tmavé čáry na světlém listu. **Model** jsou světlé čáry na tmavém pozadí. Barvy skic se řídí motivem.
- {{ui:Nastavení}} (ozubené kolo, nebo {{key:Mod+,}}) má kartu {{ui:PartCraft}}: které tlačítko myši otáčí pohled, kolečko myši nebo touchpad, a vztahy při skicování. Viz [Nastavení PartCraftu](topic:settings).
- Tlačítko režimu obrazovky nebo {{key:Ctrl+Shift+F}} přepíná mezi normálním zobrazením, celou obrazovkou a celou obrazovkou se skrytými lištami. Se skrytými lištami přesuňte kurzor k hornímu okraji (nebo tam klepněte), aby se vrátily. {{key:Esc}} se vrátí do normálu. Tato klávesa je {{key:Ctrl+Shift+F}} i na Macu, ne ⌘.

## Panel nástrojů

Panel nástrojů je rozdělen do skupin. Mění se podle toho, co děláte, aby se vešel do jednoho řádku:

| Skupina | Tlačítka | Zobrazeno |
|---|---|---|
| Soubor | {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Uložit}}, {{ui:Export}} (nabídka) | Vždy |
| Skica | {{ui:Skica}} | Když není otevřena žádná skica |
| Skica | {{ui:Konec}}, {{ui:Úsečka}}, {{ui:Obdélník}}, {{ui:Kružnice}}, {{ui:Oblouk}}, {{ui:Bod}}, {{ui:Osová čára}}, {{ui:Zaoblení}}, {{ui:Kóta}}, {{ui:Konstrukce}} | Jen když je otevřena skica |
| Prvky | {{ui:Vytáhnout}}, {{ui:Vyjmout}}, {{ui:Rotace}}, {{ui:Díra}}, {{ui:Lineární}}, {{ui:Kruhový}}, {{ui:Zrcadlení}}, {{ui:Zaoblení}}, {{ui:Sražení hrany}}, {{ui:Skořepina}}, {{ui:Více}} (nabídka: Rotační výřez, Rovina, Osa, Bod, {{ui:Tažení po dráze}}, {{ui:Lofting}}, Úkos) | Na dílu, ne když je otevřena skica nebo výkres. Zaoblení a Sražení hrany fungují na přímých hranách mezi dvěma rovnými plochami; Skořepina a Úkos na rovných plochách. Tažení po dráze a Lofting zatím ještě nejsou hotové (potřebují přesné jádro); kliknutí na některý to řekne |
| Prvky | {{ui:Hotovo}} | Jen při výběru hran nebo ploch pro zaoblení, sražení, skořepinu nebo úkos |
| Výkres | {{ui:Výkres}} | Na dílu (použitelné, jakmile díl má těleso) |
| Výkres | {{ui:Vztažný bod}}, {{ui:Rámeček}}, {{ui:Povrch}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Zpět}} | Jen na listu výkresu |
| Sestava | {{ui:Sestava}} | Na dílu (použitelné, jakmile díl má těleso) |
| Sestava | {{ui:Přidat kopii}}, {{ui:Vložit}}, {{ui:Vazba}}, {{ui:Kolize}}, {{ui:Upravit díl}}, {{ui:Zavřít}} | Jen v sestavě |
| Sestava | {{ui:Zpět}} | Když upravujete díl ze sestavy |
| Úpravy | {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Více}} (nabídka: Vyjmout, Kopírovat, Vložit, Vložit na stejné místo, Duplikovat, Smazat, Vybrat vše, Zrušit výběr) | Vždy; každá položka působí na skicu, historii nebo sestavu, ve které jste |
| Pohled | {{ui:Přizpůsobit}}, {{ui:Kolmo k}}, {{ui:Pohledy}} (nabídka: Měřit, Vlastnosti hmotnosti, Řez, Úkos, {{ui:Zebra}}, Křivost, {{ui:Základní roviny}}, pak Izometrický, {{ui:Čelní}}, {{ui:Zpět}}, {{ui:Shora}}, {{ui:Zdola}}, {{ui:Zprava}}, {{ui:Zleva}}) | Vždy |

Najeďte na tlačítko, abyste viděli, co dělá, a jeho klávesu. Tlačítko v šedé nelze teď použít: například tlačítka prvků, když je otevřena skica, nebo {{ui:Vazba}}, dokud sestava nemá dva díly.

Nabídka {{ui:Více}} ve skupině Úpravy vypisuje každou úpravu s její klávesou. Co dělají kopírování a vložení, závisí na tom, kde jste; viz [Kopírování, vložení a duplikace](topic:copy-paste). Položka v šedé uvádí v nápovědě, proč teď nemůže působit.

Nabídka {{ui:Export}} obsahuje {{ui:STL, pro 3D tisk}}, {{ui:3MF, pro 3D tisk}}, {{ui:STEP AP242 (přesné těleso)}}, {{ui:STEP AP214 (přesné těleso)}}, {{ui:STEP (fasetovaný, síťové jádro)}}, {{ui:STEP AP214 (fasetovaný, síťové jádro)}}, {{ui:DXF skici nebo rovné plochy}} a {{ui:Výkres (PDF): pohledy, řez, detail, GD&T}}. Položky přesného STEP zapisují kulaté plochy na jejich skutečných plochách; fasetované je zapisují jako ploché fasety.

## Historie (vlevo)

Panel vlevo je historie prvků dílu, seznam, který PartCraft přestavuje shora dolů.

- Nadpis je název dílu („Part1“, dokud ho nepřejmenujete).
- **Čelní rovina**, **Horní rovina** a **Pravá rovina** jsou první. Klikněte na jednu, abyste ji vybrali; zvýrazní se v pohledu.
- Pod nimi jsou vaše prvky v pořadí, v jakém byly vytvořeny. Skica, kterou prvek používá, je odsazena pod tímto prvkem.
- Vpravo na konci řádku je příznak, který říká jeho stav:

| Příznak | Význam |
|---|---|
| (žádný) | Postaveno a skica je plně určena |
| − | Skica, která je nedourčena (ještě se může hýbat) |
| + | Skica, která je přeurčena |
| ⚠ | Postaveno s varováním (najetím přečtete) |
| ⚠ chyba | Prvek selhal. Najetím zjistíte proč, nebo na něj klikněte |
| ⚠ není postaveno | Prvek potřebuje jiný, který selhal nebo je vypnutý |
| vypnuto | Potlačeno |

- Každý prvek ukazuje svou hlavní hodnotu za názvem, například „25 mm“ u Vytažení nebo „Ø6.6 thru“ u díry. Dvojklikem na hodnotu nebo stiskem {{key:F2}} na řádku ji změníte přímo tam. Viz [Změna velikostí](topic:change-sizes).
- Klikněte na prvek, abyste jej upravili vpravo. Dvojklikem na skicu ji otevřete.
- Když se vracíte zpět, v seznamu je řádek **Lišta vrácení · posun vpřed**. Prvky pod ním jsou šedé a nejsou postaveny.
- Když je řádek zaostřen, {{key:Up}} a {{key:Down}} se pohybují mezi řádky a {{key:Alt+Up}} / {{key:Alt+Down}} přesunou samotný prvek, kde to historie dovolí.

V sestavě panel místo toho vypisuje **Díly** (první je označen „uzemněn“) a **Vazby**.

### Údaje o dílu

Pod historií je pole **Díl**, které vypisuje **Objem**, **Plochu povrchu**, **Velikost (X × Y × Z)**, **Průchozí díry**, **Tělesa**, **Trojúhelníky**, počet **Prvků** a kolik jich **Selhává**. Objemy a plochy jsou fasetovaného tělesa postaveného síťovým jádrem, o něco méně než skutečná hodnota u kulatých tvarů (viz [Prvky a jejich možnosti](topic:features#curves-resolution)).

V sestavě je pole nadepsáno **Sestava**: Díly, Instance, Vazby, Nespojeno a Překryv.

## 3D pohled (uprostřed)

Pohled ukazuje těleso, základní roviny a každou skicu, kterou prvek ještě nepoužil.

Základní roviny jsou kresleny plně, dokud je díl prázdný. Jakmile má těleso, ustoupí: kreslí se slabě, aby nepřekrývaly díl, a kliknutí jimi projde k dílu. Vrátí se plně, když vybíráte, kde skicovat ({{ui:Skica}} bez výběru), a když vyberete jednu v historii. {{ui:Pohledy}} › {{ui:Základní roviny}} je schová úplně; pořád se zobrazují, když vybíráte, kde skicovat. PartCraft si tuto volbu pamatuje.

- Potáhněte pro otočení dílu, pravým nebo prostředním tlačítkem pro posun, kolečkem pro přiblížení u kurzoru. Podrobnosti v [Klávesy a myš](topic:keyboard).
- Najeďte na stěnu, hranu nebo rovinu, abyste viděli, jak se rozsvítí. Klikněte pro výběr. Plochy se zvýrazňují celé a hrany se kreslí a vybírají celé. {{key:Shift}}+klik sbírá několik hran nebo ploch. Zůstávají označené.
- Kostka pohledu vpravo nahoře se otáčí s dílem: klikněte na stěnu, hranu nebo roh, abyste se podívali odtud, potáhněte ji pro otočení; tlačítko domečku vrátí na začátek. Viz [Kostka pohledu](topic:view-cube).
- Vybraná Vytažení ukazuje oranžovou šipku na své koncové ploše, Rotace zakřivenou šipku na konci svého otočení: potáhněte ji pro změnu hloubky nebo úhlu, nebo napište do pole vedle. Viz [Změna velikostí](topic:change-sizes#drag-it-in-the-view).
- Když je díl prázdný, box s nadpisem **Začít díl** vypisuje první kroky.
- Přetáhněte soubor `.partcraft.json` nebo `.partcraft-asm.json` kamkoli na pohled, abyste jej otevřeli. Soubor `.step`, `.stp`, `.stl`, `.obj`, `.3mf` nebo `.3dm` přetažený tam se otevře jako plné těleso.

### Při výběru hran nebo ploch

Po {{ui:Zaoblení}}, {{ui:Sražení hrany}} nebo {{ui:Skořepina}} bez výběru (nebo {{ui:Vybrat hrany}} u takového prvku) díl ukazuje stav před tím prvkem. Klikněte na hrany nebo plochy, abyste je přidali nebo odebrali; jejich značky ukazují, co je ve výběru. {{ui:Hotovo}} nebo {{key:Esc}} dokončí. Viz [Zaoblení, sražení a skořepina](topic:fillet-chamfer-shell).

### Na listu výkresu

{{ui:Výkres}} nahradí 3D pohled listem výkresu formátu A3. Kolečko přibližuje, pravé nebo prostřední tažení posouvá, {{key:F}} přizpůsobí. Viz [Vytvoření výkresu](topic:drawing-pdf).

### Když je otevřena skica

Pohled se otočí, aby se díval kolmo na rovinu skici, a nahoře se objeví vrstva 2D skici. Díl ukazuje jen prvky vytvořené před touto skicou. Pruh nahoře vlevo ukazuje stavový štítek skici („Plně určeno“, „Nedourčeno · 3 stupně volnosti“ a tak dále) a její název, například „Sketch2 on a face of Extrude1“.

## Panel vlastností (vpravo)

Panel vpravo ukazuje, co je vybráno, a jeho nadpis to pojmenuje:

- **Díl** (nic není vybráno): **Název** dílu a nastavení **Křivky**.
- Rovina: tlačítko {{ui:Skica na ní}}.
- **Plocha**: co je zač (Rovná plocha, Válec s poloměrem a osou, Kužel, Koule nebo Torus), její plocha, který prvek ji vytvořil, a u rovné plochy {{ui:Skica na této ploše}}, {{ui:Kolmo k}}, {{ui:Exportovat plochu jako DXF}}, {{ui:Vytáhnout z ní}}, {{ui:Vyříznout do ní}} a {{ui:Díra tady}} (viz [Vytažení nebo zatlačení celé plochy](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Hrana**: její druh (přímá, kružnice se středem a poloměrem, nebo křivka), délka a dvě plochy, mezi nimiž leží (například „Extrude1 end face and Extrude1 side“), s tlačítky {{ui:Zaoblení}} a {{ui:Sražení hrany}}.
- Několik hran nebo ploch vybraných s {{key:Shift}}: kolik jich je, s {{ui:Zaoblení}} a {{ui:Sražení hrany}} pro hrany, a {{ui:Vymazat}}.
- **Prvek**: jeho čísla a možnosti, kóty jeho skici, pak {{ui:Potlačit}}, {{ui:Vrátit zpět sem}}, {{ui:Posunout nahoru}}, {{ui:Posunout dolů}}, {{ui:Smazat}} a jeho **Název**.
- **Otevřená skica**: její stav, vztahy, které můžete přidat k výběru, seznam vztahů a kót, **Přidat podle souřadnic**, a {{ui:Ukončit skicu}}, {{ui:Přizpůsobit}} a {{ui:Exportovat jako DXF}}.
- **Na listu výkresu**: nastavení řezů a detailů, nebo vybraný symbol GD&T.
- **V sestavě**: sestava, vybraný díl, nebo vybraná vazba.

Každé pole s číslem se projeví, když stisknete {{key:Enter}} nebo {{key:Tab}}, nebo když kliknete mimo něj. Díl se hned přestaví; tlačítko OK není. K návratu použijte {{key:Mod+Z}}.

## Stavový řádek (dole)

- Vlevo souřadnice kurzoru ve skice (jen když je otevřena skica).
- Uprostřed zprávy: co dělat dál a proč bylo něco odmítnuto. Čtěte ho, když se nezdá, že by se něco dělo.
- Blízko vpravo čip jádra: v této verzi vždy „Síťové jádro“. Najetím zjistíte, co to znamená. Viz [Síťové jádro](topic:solid-kernels).
- Vpravo čip: „Přestavuje se…“, když se díl přestavuje, pak „Přestavěno za … ms“, když je vše v pořádku, nebo „1 prvek selhává“. V sestavě říká „Umístěno za … ms“ nebo počítá problémy s vazbami.

Viz také [Začněte návod v Illustrate](topic:illustrate): pracovní prostor, který z vašich dílů a sestav vytváří návody sestav.

## Na úzké obrazovce

Do šířky 760 pixelů, například na telefonu, pohled šetří místo: panel nástrojů je jeden řádek, který se posouvá do strany, a panely se otevírají jako listy z lišty dole. {{ui:Nástroje}} schová panel nástrojů a {{ui:Přesun}} jej dá dolů. Viz [Trackpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
