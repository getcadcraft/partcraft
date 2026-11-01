---
title: Obrazovka PartCraftu
summary: Prohlídka každého panelu a lišty: panel nástrojů a jak se mění, historie, údaje o dílu, 3D pohled, panel vlastností a stavový řádek.
keywords: obrazovka, rozložení, panel nástrojů, historie, strom prvků, vlastnosti, panel, stavový řádek, rozhraní, ui, prohlídka, celá obrazovka
from: 7394fc49
---

Obrazovka má pět částí: panel nástrojů nahoře, historii vlevo, 3D pohled uprostřed, panel vlastností vpravo a stavový řádek dole. Nad všemi je lišta aplikace CadCraft.

## Lišta aplikace

Tenká lišta úplně nahoře patří webu CadCraft, ne samotnému PartCraftu. Ukazuje název aplikace a kde běží, nabídku verzí, **O aplikaci PartCraft**, tlačítko režimu obrazovky a přepínač motivu Papír / Model.

- **Papír** jsou tmavé čáry na světlém listu. **Model** jsou světlé čáry na tmavém pozadí. Barvy skic se řídí motivem.
- {{ui:Nastavení}} (ozubené kolo, nebo {{key:Mod+,}}) má kartu {{ui:PartCraft}}: které tlačítko myši otáčí pohledem, kolečko myši nebo touchpad a vazby při skicování. Viz [Nastavení PartCraftu](topic:settings).
- Tlačítko režimu obrazovky, nebo {{key:Ctrl+Shift+F}}, prochází normálním režimem, celou obrazovkou a celou obrazovkou se skrytými lištami. Při skrytých lištách přesuňte ukazatel k hornímu okraji (nebo tam klepněte) a lišty se vrátí. {{key:Esc}} se vrátí do normálního režimu. Tato klávesa je {{key:Ctrl+Shift+F}} i na Macu, ne ⌘.

## Panel nástrojů

Panel nástrojů je seskupený. Mění se podle toho, co děláte, takže se vejde do jednoho řádku:

| Skupina | Tlačítka | Zobrazeno |
|---|---|---|
| Soubor | {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Uložit}}, {{ui:Export}} (nabídka) | Vždy |
| Skica | {{ui:Skica}} | Když není otevřená žádná skica |
| Skica | {{ui:Konec}}, {{ui:Úsečka}}, {{ui:Obdélník}}, {{ui:Kružnice}}, {{ui:Oblouk}}, {{ui:Bod}}, {{ui:Osová čára}}, {{ui:Zaoblení}}, {{ui:Kóta}}, {{ui:Konstrukce}} | Jen když je otevřená skica |
| Prvky | {{ui:Vytáhnout}}, {{ui:Vyříznout}}, {{ui:Rotace}}, {{ui:Díra}}, {{ui:Lineární}}, {{ui:Kruhový}}, {{ui:Zrcadlit}}, {{ui:Zaoblení}}, {{ui:Sražení}}, {{ui:Skořepina}}, {{ui:Více}} (nabídka: Rotovaný výřez, Rovina, Osa, Bod, Tažení po dráze, Lofting, Úkos) | Na dílu, ne když je otevřená skica nebo výkres. Zaoblení a sražení fungují na přímých hranách mezi dvěma rovnými plochami; skořepina a úkos na rovných plochách. Tažení po dráze a lofting v této verzi zatím nejsou hotové (potřebují přesné jádro); kliknutí na ně to řekne |
| Prvky | {{ui:Hotovo}} | Jen když vybíráte hrany nebo plochy pro zaoblení, sražení, skořepinu nebo úkos |
| Výkres | {{ui:Výkres}} | Na dílu (použitelné, jakmile má díl těleso) |
| Výkres | {{ui:Vztažný bod}}, {{ui:Rámeček}}, {{ui:Povrch}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Zpět}} | Jen na listu výkresu |
| Sestava | {{ui:Sestava}} | Na dílu (použitelné, jakmile má díl těleso) |
| Sestava | {{ui:Přidat kopii}}, {{ui:Vložit}}, {{ui:Vazba}}, {{ui:Kolize}}, {{ui:Upravit díl}}, {{ui:Zavřít}} | Jen v sestavě |
| Sestava | {{ui:Zpět}} | Když upravujete díl ze sestavy |
| Úpravy | {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Více}} (nabídka: Vyjmout, Kopírovat, Vložit, Vložit na stejné místo, Duplikovat, Smazat, Vybrat vše, Zrušit výběr) | Vždy; každá položka působí na skicu, historii nebo sestavu, ve které jste |
| Pohled | {{ui:Přizpůsobit}}, {{ui:Kolmo k}}, {{ui:Pohledy}} (nabídka: Měřit, Hmotnostní vlastnosti, Řez, Úkos, Zebra, Zakřivení, {{ui:Základní roviny}}, pak Izometrie, Čelní, Zadní, Shora, Zdola, Zprava, Zleva) | Vždy |

Podržením ukazatele nad tlačítkem uvidíte, co dělá, a jeho klávesu. Zašedlé tlačítko teď nelze použít: například tlačítka prvků, když je otevřená skica, nebo {{ui:Vazba}}, dokud sestava nemá dva díly.

Nabídka {{ui:Více}} ve skupině Úpravy uvádí každou úpravu s její klávesou. Na co kopírování a vkládání působí, závisí na tom, kde jste; viz [Kopírování, vkládání a duplikování](topic:copy-paste). Bublina zašedlé položky říká, proč teď nemůže působit.

Nabídka {{ui:Export}} obsahuje {{ui:STL, pro 3D tisk}}, {{ui:3MF, pro 3D tisk}}, {{ui:STEP AP242 (přesné těleso)}}, {{ui:STEP AP214 (přesné těleso)}}, {{ui:STEP (fasetovaný, síťové jádro)}}, {{ui:STEP AP214 (fasetovaný, síťové jádro)}}, {{ui:DXF skici nebo rovné plochy}} a {{ui:Výkres (PDF): pohledy, řez, detail, GD&T}}. Dvě položky přesného STEP jsou zašedlé: v této verzi zatím nejsou hotové, použijte tedy {{ui:STEP (fasetovaný, síťové jádro)}}.

## Historie (vlevo)

Panel vlevo je historie prvků dílu, seznam, ze kterého PartCraft sestavuje shora dolů.

- Nadpis je název dílu („Part1“, dokud jej nepřejmenujete).
- **Čelní rovina**, **Rovina půdorysu** a **Boční rovina** jsou první. Kliknutím jednu vyberete; v pohledu se zvýrazní.
- Pod nimi jsou vaše prvky v pořadí, v jakém vznikly. Skica, kterou prvek používá, je odsazena pod tímto prvkem.
- Značka na pravém konci řádku říká jeho stav:

| Značka | Význam |
|---|---|
| (žádná) | Sestaveno a skica je plně určena |
| − | Skica, která je nedourčená (ještě se může pohybovat) |
| + | Skica, která je přeurčená |
| ⚠ | Sestaveno, s varováním (přejetím ukazatele si je přečtete) |
| ⚠ chyba | Prvek selhal. Přejetím ukazatele zjistíte proč, nebo na něj klikněte |
| ⚠ nesestaveno | Prvek potřebuje jiný, který selhal nebo je vypnutý |
| vypnuto | Potlačeno |

- Každý prvek ukazuje za svým názvem hlavní číslo, například „25 mm“ u vytažení nebo „Ø6.6 thru“ u díry. Dvojitým kliknutím na číslo, nebo stisknutím {{key:F2}} na řádku, jej změníte přímo tam. Viz [Změna rozměrů](topic:change-sizes).
- Kliknutím na prvek jej upravíte vpravo. Dvojitým kliknutím na skicu ji otevřete.
- Když se vrátíte zpět, v seznamu je řádek **Lišta vrácení · dopředu**. Prvky pod ním jsou zašedlé a nesestavené.
- S fokusem na řádku mezi řádky přecházíte {{key:Up}} a {{key:Down}} a {{key:Alt+Up}} / {{key:Alt+Down}} přesouvá samotný prvek, kde to historie dovolí.

V sestavě stejný panel místo toho uvádí **Díly** (první je označen jako „pevný“) a **Vazby**.

### Údaje o dílu

Pod historií rámeček **Díl** uvádí **Objem** tělesa, **Povrchovou plochu**, **Rozměr (X × Y × Z)**, **Průchozí díry**, **Tělesa**, **Trojúhelníky**, počet **Prvků** a kolik z nich je **Selhávajících**. Objemy a plochy jsou fasetovaného tělesa vytvořeného síťovým jádrem, u kulatých tvarů o něco pod skutečnou hodnotou (viz [Prvky a jejich možnosti](topic:features#curves-resolution)).

V sestavě má rámeček nadpis **Sestava**: Díly, Výskyty, Vazby, Nespojeno a Kolize.

## 3D pohled (uprostřed)

Pohled ukazuje těleso, základní roviny a každou skicu, kterou prvek ještě nepoužil.

Základní roviny jsou plně nakresleny, dokud je díl prázdný. Jakmile má těleso, ustoupí: jsou kresleny slabě, aby nezakrývaly díl, a kliknutí jimi prochází k dílu. Plně se vrátí, když vybíráte, kam skicovat ({{ui:Skica}} bez vybrané věci), a když v historii jednu vyberete. {{ui:Pohledy}} › {{ui:Základní roviny}} je skryje úplně; stále se zobrazí, když vybíráte, kam skicovat. PartCraft si tuto volbu pamatuje.

- Tažením díl otáčíte, tažením pravým nebo prostředním tlačítkem posouváte a kolečkem přibližujete u ukazatele. Podrobnosti v [Klávesy a myš](topic:keyboard).
- Podržením ukazatele nad plochou, hranou nebo rovinou ji uvidíte zvýrazněnou. Kliknutím ji vyberete. Plochy se zvýrazňují celé a hrany se kreslí a vybírají celé. {{key:Shift}}+klik shromažďuje několik hran nebo ploch. Zůstanou označeny.
- Kostka pohledu vpravo nahoře se otáčí s dílem: kliknutím na plochu, hranu nebo roh se podíváte odtamtud, tažením ji otočíte, tlačítko domku vrací na začátek. Viz [Kostka pohledu](topic:view-cube).
- Vybrané vytažení ukazuje oranžovou šipku na své koncové ploše, rotace zakřivenou šipku na konci svého otočení: jejím tažením změníte hloubku nebo úhel, nebo napište do pole vedle ní. Viz [Změna rozměrů](topic:change-sizes#drag-it-in-the-view).
- Když je díl prázdný, rámeček s nadpisem **Začněte díl** uvádí první kroky.
- Soubor `.partcraft.json` nebo `.partcraft-asm.json` pusťte kamkoli na pohled a otevře se. Soubor `.step`, `.stp`, `.stl`, `.obj`, `.3mf` nebo `.3dm` tam pustěný se otevře jako těleso.

### Při výběru hran nebo ploch

Po {{ui:Zaoblení}}, {{ui:Sražení}} nebo {{ui:Skořepina}} bez vybrané věci (nebo {{ui:Vybrat hrany}} u takového prvku) díl vypadá, jak vypadal před tímto prvkem. Kliknutím hrany nebo plochy přidáte či odeberete; jejich značky ukazují, co je zahrnuto. {{ui:Hotovo}} nebo {{key:Esc}} to ukončí. Viz [Zaoblení, sražení a skořepina](topic:fillet-chamfer-shell).

### Na listu výkresu

{{ui:Výkres}} nahradí 3D pohled listem výkresu A3. Kolečko přibližuje, tažení pravým nebo prostředním tlačítkem posouvá, {{key:F}} přizpůsobí. Viz [Vytvoření výkresu](topic:drawing-pdf).

### Když je otevřená skica

Pohled se otočí, aby se díval přímo na rovinu skici, a nahoře se objeví vrstva 2D skici. Díl ukazuje jen prvky vytvořené před touto skicou. Pruh vlevo nahoře ukazuje čip stavu skici („Plně určeno“, „Nedourčeno · 3 stupně volnosti“ atd.) a její název, například „Sketch2 on a face of Extrude1“.

## Panel vlastností (vpravo)

Panel vpravo ukazuje to, co je vybráno, a jeho nadpis to pojmenovává:

- **Díl** (nic nevybráno): **Název** dílu a nastavení **Křivky**.
- Rovina: tlačítko {{ui:Skica na ní}}.
- **Plocha**: jaký druh to je (Rovná plocha, Válec s poloměrem a osou, Kužel, Koule nebo Torus), její obsah, který prvek ji vytvořil, a u rovné plochy {{ui:Skica na této ploše}}, {{ui:Kolmo k}}, {{ui:Exportovat plochu jako DXF}}, {{ui:Vytáhnout z ní}}, {{ui:Vyříznout do ní}} a {{ui:Díra tady}} (viz [Tažení nebo tlačení celé plochy](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Hrana**: její druh (přímá, kružnice se středem a poloměrem, nebo křivka), její délka a dvě plochy, mezi kterými leží (například „Extrude1 end face and Extrude1 side“), s tlačítky {{ui:Zaoblení}} a {{ui:Sražení}}.
- Několik hran nebo ploch vybraných s {{key:Shift}}: kolik jich je, s {{ui:Zaoblení}} a {{ui:Sražení}} pro hrany a {{ui:Vymazat}}.
- Prvek: jeho čísla a možnosti, kóty jeho skici, pak {{ui:Potlačit}}, {{ui:Vrátit zpět sem}}, {{ui:Přesunout nahoru}}, {{ui:Přesunout dolů}}, {{ui:Smazat}} a jeho **Název**.
- Otevřená skica: její stav, vazby, které můžete přidat k výběru, seznam vazeb a kót, **Přidat podle souřadnic** a {{ui:Ukončit skicu}}, {{ui:Přizpůsobit}} a {{ui:Exportovat jako DXF}}.
- Na listu výkresu: nastavení řezu a detailu, nebo vybraný symbol GD&T.
- V sestavě: sestava, vybraný díl nebo vybraná vazba.

Každé číselné pole nabude účinnosti, když stisknete {{key:Enter}} nebo {{key:Tab}}, nebo kliknete jinam. Díl se okamžitě znovu sestaví; není tu žádné tlačítko OK. Použijte {{key:Mod+Z}} pro návrat.

## Stavový řádek (dole)

- Vlevo souřadnice ukazatele ve skice (jen když je otevřená skica).
- Uprostřed zprávy: co dělat dál a proč bylo něco odmítnuto. Čtěte jej, když se zdá, že se nic neděje.
- Blíže vpravo čip jádra: v této verzi vždy „Síťové jádro“. Přejetím ukazatele zjistíte, co to znamená. Viz [Síťové jádro](topic:solid-kernels).
- Vpravo čip: „Přestavování…“, dokud se díl znovu sestavuje, pak „Přestavěno za … ms“, když je vše v pořádku, nebo „1 prvek selhává“. V sestavě říká „Umístěno za … ms“ nebo počítá problémy s vazbami.

Viz také [Začátek návodu v Illustrate](topic:illustrate): pracovní prostor, který vytváří návody k sestavám z vašich dílů a sestav.

## Na úzké obrazovce

Do šířky 760 pixelů, například na telefonu, si pohled ponechá obrazovku: panel nástrojů je jeden řádek, který se posouvá do stran, a panely se otevírají jako listy z lišty dole. {{ui:Nástroje}} skryje panel nástrojů a {{ui:Přesunout}} jej dá dolů. Viz [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
