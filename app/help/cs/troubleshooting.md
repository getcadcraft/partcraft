---
title: Řešení problémů
summary: Problémy, na které můžete narazit v PartCraftu, od aplikace, která se nespustí, přes selhávající prvky, skici, které nejdou vyřešit, soubory, které nejdou otevřít, a klouby, které se chovají špatně, s hlášením, které uvidíte, a opravou.
keywords: problém, chyba, nápověda, nefunguje, selhává, selhání, pád, prázdný, webgl, webassembly, jádro, není hotovo, přeurčený, otevřený profil, nelze otevřít, nic se nestane, špatný směr, pomalé
from: 7728542c
---

Když něco nefunguje, nejprve přečtěte **stavový řádek** dole: PartCraft tam řekne, proč něco odmítl, nebo co očekává dál. Selhávající prvek také zobrazí své hlášení nahoře v pravém panelu a při najetí na jeho řádek v historii.

## Aplikace se nespustí

### „Tento prohlížeč nemůže zobrazit 3D (WebGL je vypnuto nebo chybí), takže PartCraft zde nemůže běžet.“

**Příčina:** v prohlížeči je 3D grafika (WebGL) vypnutá, zablokovaná nebo nepodporovaná grafickým ovladačem.

**Oprava:**

:::chromium
Otevřete `chrome://settings/system` (nebo `edge://settings/system` v Edge) a zapněte „Používat hardwarovou akceleraci, je-li k dispozici“, pak prohlížeč restartujte. Pokud je to zapnuto, zkontrolujte na `chrome://gpu` stav WebGL a aktualizujte grafický ovladač.
:::

:::firefox
Otevřete `about:support` a podívejte se na Grafika, WebGL. Pokud je zablokováno, aktualizujte grafický ovladač. V `about:config` musí být `webgl.disabled` na `false`.
:::

:::safari
WebGL je v aktuálním Safari vždy zapnuto. Aktualizujte macOS (Safari se aktualizuje spolu s ním). Pokud to stále selhává, zkuste Chrome nebo Firefox na témže Macu, abyste vyloučili grafický hardware.
:::

Vzdálené plochy a některé virtuální stroje nemají WebGL. Zkuste to na samotném počítači.

### „Jádro těles se nenačetlo: …“

**Příčina:** geometrické jádro (program WebAssembly) nešlo stáhnout nebo spustit. Obvykle se spojení přerušilo během načítání aplikace, WebAssembly je vypnuto firemní politikou nebo zabezpečením prohlížeče, nebo je prohlížeč velmi starý.

**Oprava:** znovu načtěte stránku, když jste online. Pokud to stále selhává, zkuste jiný aktuální prohlížeč. Ve Firefoxu musí být `javascript.options.wasm` v `about:config` na `true`. Offline se aplikace a její jádro načtou jen tehdy, když panel aplikace ukazoval **Připraveno offline**, než jste ztratili připojení ({{ui:Uložit pro offline}} když jste online; viz [Práce offline](common:offline)).

### Tlačítko offline říká „Nelze uložit“ nebo „Offline není k dispozici“

**Nelze uložit**: některé soubory se nestáhly. Klikněte na něj znovu, když jste online; pomalé nebo účtované připojení může potřebovat druhý pokus. **Offline není k dispozici**: toto okno prohlížeče nemůže uchovat offline kopii (privátní okna a některé spravované počítače to blokují). Použijte běžné okno, nebo nechte kartu otevřenou.

### PartCraft je offline, ale zastaralý

Klikněte na **Připraveno offline**, když jste online, a zvolte {{ui:Uložit znovu (získat nejnovější verzi)}}.

### „Tažení po dráze: ještě není hotovo. Vyžaduje přesné jádro, …“

Úplná zpráva zní „<Name>: ještě není hotovo. Vyžaduje přesné jádro, které tato verze PartCraftu nemá. Nápověda › Co ještě není hotovo říká, co dělat místo toho.“ Uvidíte ji, když zvolíte Tažení po dráze, Lofting, Žebro, přírubu plechu, plošný prvek, Sloučit, Přesunout těleso, Měřítko tělesa nebo Vzor po dráze, a u dalších věcí, které dokáže jen přesné jádro. Ve vašem prohlížeči ani v dílu nic není v nepořádku: tato verze PartCraftu staví každý díl síťovým jádrem. Viz [Co ještě není hotovo](topic:not-built-yet) pro to, co dělat místo toho, a [Síťové jádro](topic:solid-kernels).

### „Načítání jádra těles…“ nikdy nezmizí

Počkejte chvíli na pomalém připojení: jádro a 3D knihovna se stahují poprvé. Pak stránku znovu načtěte. Pokud sama stránka ukazuje chybu, viz výše.

## Nic se nestane, když stisknu klávesu

- Klávesy nefungují, když je kurzor v poli v panelu. Klikněte do 3D pohledu, nebo stiskněte {{key:Esc}} po psaní (nebo {{key:Tab}} pro odchod).
- Šipky a {{key:Plus}}/{{key:Minus}} otáčejí a přibližují pohled, až poté, co jste klikli do pohledu.
- Je otevřený dialog: nejprve na něj odpovězte.
- Ve skice je {{key:F}} nástroj Zaoblení, ne Přizpůsobit. Použijte tlačítko {{ui:Přizpůsobit}}.

## Tlačítko na panelu nástrojů je šedé

- Tlačítka prvků jsou šedá, když je otevřena skica. Nejprve skicu zavřete.
- Nástroje skic fungují jen uvnitř skici.
- {{ui:Zpět}} a {{ui:Znovu}} jsou šedé, když není co vrátit nebo zopakovat.
- {{ui:Sestava}} potřebuje díl s tělesem. {{ui:Vazba}} potřebuje dva díly v sestavě. {{ui:Upravit díl}} potřebuje vybraný díl.
- {{ui:STEP AP242 (přesné těleso)}} a {{ui:STEP AP214 (přesné těleso)}} jsou v sestavě šedé: exportujte každý díl zvlášť. Jiný program přesný soubor odmítne: zkuste {{ui:STEP AP214 (přesné těleso)}}, pak {{ui:STEP (fasetovaný, síťové jádro)}}, a dejte nám vědět přes {{ui:Nápověda}} › {{ui:Nahlásit problém}}.
- {{ui:Tažení po dráze}}, {{ui:Lofting}} a ostatní prvky, které potřebují přesné jádro, šedé nejsou: zůstávají klikatelné, jejich nápovědy končí „ještě není hotovo (vyžaduje přesné jádro)“ a kliknutí na ně to řekne ve stavovém řádku. Viz [Co ještě není hotovo](topic:not-built-yet).
- {{ui:Výkres}} potřebuje díl s tělesem a je šedý, když je otevřena skica.
- Položky {{ui:Export}} jsou v sestavě šedé: sestavy zatím nelze exportovat. Zavřete ji, nebo upravte díl, abyste mohli exportovat.

## Problémy se skicou

### Skica mi nedovolí přidat vazbu

„Žádná vazba nesedí na tento výběr. Vyberte jednu nebo dvě položky (Shift+klik přidá).“ Vazba potřebuje jiný výběr. Viz [Vazby a kóty skic](topic:sketch-relations), co potřebuje každá.

### „Přeurčeno: … nelze splnit všechny. Vraťte zpět, nebo smažte jednu z nich.“

**Příčina:** nová vazba nebo kóta si odporuje s těmi, které tam už jsou. Skica se nepohnula.

**Oprava:** {{key:Mod+Z}}, nebo smažte jednu z červených položek v seznamu v pravém panelu (vyberte **Smazat** vedle ní).

### „Přeurčeno: … je už implikováno. Smažte ji.“

**Příčina:** vazba nic nepřidává: ostatní ji už vynucují (například Rovnoběžnost na dvou stranách obdélníku, nebo kóta, která je už pevná). V této verzi nejsou žádné řízené kóty.

**Oprava:** smažte ji. Prvek se vytvoří i tak, s varováním.

### „Tyto položky nelze kótovat společně.“

Kliknuli jste například na bod a kružnici. Okótujte místo toho na střed kružnice.

### „Zaoblení potřebuje roh, kde se stýkají přesně dvě čáry.“ / „Ten poloměr je pro tyto čáry příliš velký.“

Klikněte přesně na rohový bod dvou plných čar. Použijte menší poloměr, než dovolí kratší čára.

### Geometrie při tažení skočí zpět

Tažení by porušilo vazbu nebo kótu, takže ji PartCraft vrátí. Pohnout lze jen geometrii modrou (nedourčenou).

### „Tato skica nejde otevřít: Potřebuje Extrude2, které selhává.“

Skica leží na ploše prvku, který není hotový. Nejprve opravte ten prvek, zrušte jeho potlačení, nebo posuňte historii dopředu.

## Problémy s prvky

| Hlášení | Příčina | Oprava |
|---|---|---|
| „Nejprve vytvořte skicu: vyberte rovinu, Skica, nakreslete uzavřený profil, Ukončit.“ | Žádná nepoužitá skica s křivkami a žádná není vybrána | Nakreslete skicu, nebo vyberte skicu k použití v historii |
| „Skica nemá žádný uzavřený profil k vytažení.“ (nebo „k rotaci“) | Žádná uzavřená smyčka plných čar | Uzavřete mezery; vraťte konstrukční čáry zpět klávesou {{key:Q}} |
| „Profil je otevřený: konec v (x, y) není na nic připojen.“ | Mezera v tomto bodě | Otevřete skicu, přetáhněte konec na jeho soused, aby přichytil |
| „Profil se větví v (x, y): tam se setkávají více než dva konce.“ | Tři nebo více čar v jednom bodě | Smažte přebytečnou čáru, nebo ji přepněte na konstrukční |
| „Uzavřená smyčka potřebuje alespoň tři strany nebo křivku.“ | Dvě čáry tam a zpět | Nakreslete smyčku znovu |
| „Skrz vše je pro výřezy. Pro výstupek použijte hloubku.“ | Výstupek nastavený na Skrz vše | Nastavte Konec na Slepý nebo Střed roviny |
| „Na této straně skici není co řezat. Zkuste opačný směr.“ | Řez směřuje od materiálu | Zaškrtněte Obrátit směr |
| „Není co řezat.“ / „Není co vrtat.“ | Před tímto prvkem není těleso | Nejprve vytvořte výstupek, nebo přesuňte prvek níž |
| „Nakreslete středovou čáru (konstrukční čáru), kolem které se má rotovat.“ | Rotace bez osy | Přidejte středovou čáru, nebo zvolte čáru v Ose |
| „Profil protíná osu. Držte jej na jedné straně středové čáry.“ | Profil na obou stranách osy | Nakreslete polovinu profilu znovu |
| „Umístěte body skici tam, kam mají jít díry (nástroj Bod), pak vytvořte díru.“ | Ve skice nejsou volné body | Přidejte body klávesou {{key:P}} |
| „Zápustná díra musí být širší než díra.“ | Ø zápustné díry není větší než Průměr | Udělejte zápustnou díru širší |
| „Zápustná díra musí být mělčí než díra.“ | Zápustná hlubší než slepá díra | Udělejte ji mělčí, nebo díru hlubší |
| „Vyberte prvky ke kopírování.“ | Vzor nebo zrcadlení bez zaškrtnutí | Zaškrtněte prvek pod Prvky ke kopírování |
| „Extrude2 nemá těleso ke kopírování.“ | Kopírovaný prvek selhal nebo je vypnutý | Opravte ho, nebo zrušte jeho potlačení |
| „Potřebuje Sketch3, které selhává.“ | Prvek, na kterém závisí, není hotový | Opravte prvek, který je uveden |
| „Plocha, na které leží, je pryč (Extrude1 není hotové).“ | Plocha skici už neexistuje | Opravte ten prvek, nebo smažte skicu a nakreslete ji znovu |
| „Po tomto nezbylo nic z dílu.“ | Řez odstranil veškerý materiál | Zkontrolujte velikost a směr řezu |
| „Jádro těles tohle nemohlo vytvořit (…).“ nebo „Jádro těles tohle nemohlo spojit s tělesem.“ | Jádro odmítlo geometrii | Vraťte zpět, nebo mírně změňte velikosti; přesně se dotýkající plochy to mohou způsobit |
| „Tažení po dráze: ještě není hotovo. Vyžaduje přesné jádro, které tato verze PartCraftu nemá.“ (také Lofting, Žebro a ostatní) | Prvek vytvořený v dřívější verzi, který dokáže postavit jen přesné jádro. Zůstane v historii a uloží se zpět beze změny | Potlačte ho nebo smažte; viz [Co ještě není hotovo](topic:not-built-yet), co dělat místo toho |
| „5 mm zaoblení se sem nevejde (…).“ / „Sražení 2 mm …“ | Velikost je příliš velká pro plochu vedle hrany, nebo roh nelze zaoblit | Menší velikost, nebo méně hran na prvek |
| „Zaoblení: v této verzi jen přímé hrany mezi dvěma rovnými plochami (síťové jádro je vytvoří). Zakřivené hrany zaoblete nebo zkoste ve skice.“ (také Sražení) | Vybraná hrana je zaoblená, jako okraj díry, nebo leží na zakřivené ploše | {{ui:Vybrat hrany}} a odeberte ji; místo toho zaoblete nebo zkoste ten roh ve skice |
| „Zaoblení s poloměrem proměnlivým podél hrany: ještě není hotovo (vyžaduje přesné jádro). Zadejte jeden poloměr.“ | Zaškrtnut **Proměnlivý poloměr** | Odškrtněte a zadejte jeden poloměr |
| „Zaoblení síťovým jádrem: kde se zaoblené hrany stýkají, jsou seříznuty na úhel, ne prolnuty.“ (⚠, varování) | Vybrané hrany se stýkají v rohu; zaoblení se tam setkají v ostrém zlomu | Nic k opravě: díl je vytvořen. Zaoblete méně hran, pokud na zlomu záleží |
| „Hrana, kterou zaoblujete, je pryč: hrana mezi Extrude1 a Cut2.“ | Dřívější změna hranu odstranila | {{ui:Vybrat hrany}}, odeberte červenou hranu, vyberte novou |
| „Vyberte hrany v pohledu, pak je přidejte.“ | Zaoblení nebo sražení nemá hrany | {{ui:Vybrat hrany}} |
| „Vyberte plochy k odstranění (otevřené), pak vydlabejte.“ | Vydlabání nemá otevřené plochy | {{ui:Vybrat plochy}} |
| „Vydlabání nelze vytvořit s touto tloušťkou (…).“ | Stěna je silnější než tenká část modelu nebo poloměr zaoblení | Tenčí stěna, nebo větší zaoblení |
| „Vydlabání: v této verzi otevírá jen rovné plochy (síťové jádro je vytvoří).“ | Otevřená plocha je zakřivená | {{ui:Vybrat plochy}} a odeberte ji; otevírejte jen rovné plochy |
| „Úkos: v této verzi jen rovné plochy (síťové jádro ho vytvoří).“ | Úkosovaná plocha je válec, kužel nebo tvarovaná plocha | Odeberte ji; úkos používejte jen na rovné plochy |
| „Plocha, kterou otevírá, je pryč (…).“ | Dřívější změna plochu odstranila | Znovu {{ui:Vybrat plochy}} |
| „Zaoblení1 mění hrany nebo stěny tělesa; nelze je zkopírovat. …“ | Vzor nebo zrcadlení kopíruje zaoblení, sražení nebo vydlabání | Odškrtněte je; nejprve vzorujte řezy, pak zaoblení |
| „Je na ploše, kterou dokáže najít jen přesné jádro: v této verzi ještě není hotovo.“ | Skica na ploše, kterou síťové jádro nenajde, například vytvořená v dřívější verzi | Kreslete na základní rovině nebo rovné ploše výtažku a umístěte ji kótami |
| „Používá plochu nebo hranu tělesa, kterou dokáže najít jen přesné jádro: v této verzi ještě není hotovo.“ | Referenční rovina, osa nebo bod na ploše nebo hraně tělesa | Vytvořte je ze základních rovin, bodů skicy nebo souřadnic |
| „Vytažení až k ploše, k další ploše nebo k vrcholu: ještě není hotovo (vyžaduje přesné jádro).“ / „Zkosení: ještě není hotovo (vyžaduje přesné jádro).“ | Koncová podmínka nebo zkosení, které staví jen přesné jádro | Použijte hloubku Slepá nebo Střed roviny, kterou změříte; nechte Zkosení na 0 |

## Problémy s výběrem

- „Ta plocha je zakřivená. Vyberte rovnou plochu, nebo rovinu pro skicu.“ Skicy potřebují rovnou plochu. Nakreslete skicu na základní rovinu a umístěte ji kótami.
- Plocha říká „Pevná v místě výběru“: nevznikla z hrany skicy (například plocha kopie vzoru), takže skica na ní zůstane na místě, až se díl změní.
- Hrany se těžko trefují: přibližte. Hrana vyhraje nad plochou vedle ní, když je ukazatel přesně na ní.

## Problémy se soubory

| Hlášení | Oprava |
|---|---|
| 'PartCraft otevírá své soubory .partcraft.json, exportuje z makra CadCraft pro SolidWorks (.cadcraft-sw.json) a soubory STEP. "bracket.igs" není žádný z nich.' | Rozpoznávají se jen tyto soubory (a sítě STL, OBJ a 3MF a soubory `.3dm`) |
| '"part.stp" není soubor STEP (nezačíná ISO-10303-21).' | Soubor není textový STEP |
| „Tento soubor STEP je příliš velký (přes 60 MB) na import zde.“ | Zjednodušte ho u zdroje |
| „Tento soubor je příliš velký na to, aby byl dílem PartCraftu.“ u vlastního uloženého dílu | Velké těleso STEP importované v dřívější verzi zvětšilo soubor dílu přes 50 MB. Použijte dřívější kopii bez něj |
| „Tento soubor je příliš velký na to, aby byl dílem PartCraftu.“ | Soubor má přes 50 MB; není to soubor PartCraftu |
| „Toto není soubor PartCraftu (není to JSON).“ / „Toto není soubor PartCraftu.“ | Soubor je poškozen, nebo patří jinému programu |
| „Tento soubor uložil novější PartCraft (verze souboru …); tento čte verzi …“ | Otevřete ho v novějším PartCraftu |
| „Extrude2: hloubka je špatná.“ (nebo jiná hodnota) | Soubor byl upraven ručně nebo poškozen. Použijte dřívější kopii |
| Vložení v sestavě hlásí „Part1.partcraft.json nemá těleso k vložení.“ | Soubor dílu nemá těleso. Otevřete ho, vytvořte těleso, uložte a vložte znovu |

**Můj uložený soubor není tam, kde jsem čekal.** Uložení je stažení: podívejte se do složky stažených souborů prohlížeče nebo otevřete seznam stažení na panelu nástrojů prohlížeče. Viz [Kam chodí vaše soubory](common:your-files).

**Díl jsem otevřel, ale sestava je stále na obrazovce.** Díl se načetl za sestavou. Zvolte {{ui:Zavřít}}, abyste sestavu zavřeli a viděli díl. Zavřete sestavy dříve, než otevřete soubory dílů.

## Problémy s výkresy

| Hlášení | Oprava |
|---|---|
| „Nejprve vytvořte těleso, pak jeho výkres.“ | Nejprve vytvořte díl |
| „Na listu není místo pro: detail. Zmenšete detail, nebo vynechte pohled.“ | Menší **Poloměr detailu** nebo **Měřítko detailu**, nebo odeberte řez |
| „Detail se bere z pohledu zepředu, shora, zprava nebo z řezu.“ | Klikněte na jeden z těchto pohledů |
| „Klikněte na jeden z pohledů.“ | Klik byl na prázdný papír |
| „Pozice potřebuje alespoň jednu referenci báze.“ a další hlášení rámečku | Nastavte báze, které panel žádá, nebo zvolte jinou charakteristiku |
| „Pohledy výkresu nelze vytvořit: …“ | Vraťte poslední změnu zpět. Pokud se to opakuje, uložte, znovu načtěte a znovu otevřete díl |

## Problémy se sestavou

| Hlášení | Oprava |
|---|---|
| „Nejprve vytvořte těleso, pak ho vložte do sestavy.“ | Díl zatím nemá těleso |
| „Nejprve vložte druhý díl (Přidat kopii, Vložit, nebo Úpravy › Duplikovat).“ | Vazba potřebuje dva díly |
| „Vyberte plochu na jiném dílu.“ | Obě plochy vazby musí být na různých dílech |
| „Ta plocha je zakřivená. Vyberte rovnou plochu …“ | Vazby začínají od rovných ploch. Pro díru nebo osu rotace pak použijte **Vycentrovat na** |
| „Bracket2 není spojen se zafixovaným dílem, takže zůstane tam, kam byl umístěn.“ | Přidejte vazbu z něj k dílu, který je umístěn |
| „Revolute3 uzavírá smyčku, která se nemůže uzavřít: je mimo o 2.000 mm. Zkontrolujte plochy, odsazení a limity vazeb smyčky.“ | Díly se nemohou všechny setkat: zkontrolujte délky, plochy, které každá vazba používá, odsazení (díly naskládané plochou na plochu musí souhlasit v hloubce) a limity; nebo odeberte jednu vazbu ze smyčky |
| „Plocha, kterou tato vazba používá, je pryč z Bracket.“ / „Osa, kterou tato vazba používá, je pryč z Bracket.“ | Díl byl upraven. Odeberte vazbu a vytvořte ji znovu |
| „Osa vede podél plochy, takže nemůže nastavit střed vazby.“ | Zvolte osu, která plochu protíná, nebo „Vlastní počátek plochy“ |
| „Sestava udržuje alespoň jeden díl. Zavřete ji místo toho.“ | Použijte {{ui:Zavřít}} |

**Díly jsou spojeny, ale na špatném místě.** Nastavte **Vycentrovat na** pro obě strany vazby na díru nebo osy rotace, které mají být zarovnány, pak upravte **Úhel (°)** a **Odsazení (mm)**.

## Je to pomalé

- Nastavte **Křivky** na Normální nebo Hrubé při modelování; před exportem přepněte na Jemné.
- Velký počet kopií ve vzoru (stovky kopií) trvá při každé změně déle. Potlačte vzor, když pracujete na jiných prvcích.
- Kontrola kolizí a pohybu porovnává každou dvojici dílů; u velkých sestav to trvá déle.
- Zavřete jiné náročné karty. PartCraft běží na procesoru a grafice vašeho počítače.

## Stále se nedaří

Nejprve uložte soubor ({{key:Mod+S}}), pak stránku znovu načtěte a soubor otevřete. Pokud prvek stále selhává, vyberte ho, přečtěte jeho hlášení a zkuste {{key:Mod+Z}} zpět k poslednímu dobrému stavu.
