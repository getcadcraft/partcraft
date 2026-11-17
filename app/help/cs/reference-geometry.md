---
title: Referenční roviny, osy a body
summary: Vytvoření rovin odsazených od plochy, pod úhlem, třemi body, uprostřed, tečných k válci, kolmých k hraně nebo procházejících hranou a bodem; os; bodů uprostřed hran, průsečíků a rohů rovin; skicování na nich a jejich použití jako os rotace, směrů vzorů a rovin zrcadlení.
keywords: datum, mezi objekty, střed, průsečík, rovina hranou a bodem, referenční rovina, pracovní rovina, konstrukční rovina, datová rovina, odsazená rovina, rovina pod úhlem, střední rovina, tečná rovina, referenční osa, konstrukční osa, datová osa, referenční bod, pracovní bod, skica na rovině
from: e7eb6fc1
---

Referenční geometrie je lešení, na kterém stavíte prvky: **rovina**, na kterou skicujete tam, kde žádná plocha není, **osa**, kolem které rotujete nebo vytváříte vzor, a **bod**, kde zastavíte vysunutí. Nemá vlastní materiál. Roviny se v zobrazení ukazují jako bledé čtverce, osy jako čárkované čáry a body jako malé kříže. Všechny tři se zařadí do historie a při změně rozměru výše se řídí tím, z čeho vznikly.

Jsou ve skupině Prvky v nabídce {{ui:Více}}: {{ui:Rovina}}, {{ui:Osa}}, {{ui:Bod}}.

## Vytvoření roviny

1. Klikněte na rovnou plochu nebo na základní rovinu v historii, abyste začali od ní (volitelné).
2. Zvolte {{ui:Více}}, pak {{ui:Rovina}}. Rovina začne jako odsazená o 20 % velikosti dílu od toho, co jste vybrali (nebo od horní roviny).
3. V pravém panelu zvolte **Typ** a jeho odkazy:

| Typ | Odkazy | Čísla |
|---|---|---|
| Odsazení od roviny nebo plochy | **Z roviny** | **Vzdálenost (mm)**, záporná pro druhou stranu |
| Pod úhlem, přes hranu nebo osu | **Z roviny**, **Otočit kolem** (světová osa, prvek osy nebo vybraná přímá hrana) | **Úhel (°)** |
| Přes tři body | **Bod 1**, **Bod 2**, **Bod 3** | — |
| Střední rovina mezi dvěma | **První rovina**, **Druhá rovina** (rovnoběžné: v polovině; protínající se: rovina, která půlí úhel) | — |
| Tečná k válci | **Válec** (válcová plocha), **Blízký bod** (která strana) | — |
| Kolmá k hraně v bodě | **Hrana**, **V bodě** (rovina prochází bodem hrany nejbližším k ní a také tímto bodem) | — |
| Přes hranu a bod | **Přímá hrana** (nebo osa), **Přes bod** | — |
| Kolmá k hraně v jejím středu | **Hrana** (v polovině její délky, kolmo k ní v tom místě), nebo bez hrany **Bod 1** a **Bod 2** (rovina v polovině mezi nimi) | — |

Každý odkaz má tlačítko **Vybrat**: zvolte je a pak klikněte do zobrazení. Pole roviny přijme základní rovinu, referenční rovinu nebo rovnou plochu. Pole bodu přijme konec hrany (klikněte blízko tohoto konce), prvek bodu nebo místo na ploše. Pole hrany přijme hranu. {{key:Esc}} zruší výběr. **Obrátit normálu** otočí rovinu (určuje, kterým směrem na ní skica směřuje).

V této verzi pole, které potřebuje hranu nebo válcovou plochu (Tečná k válci a pole Hrana), odpoví „ještě není hotovo“: použijte místo toho body nebo osu.

## Skicování na rovině

Vyberte rovinu (v historii nebo kliknutím na její čtverec v zobrazení) a zvolte {{ui:Skica}}, nebo **Skicovat na ní** v jejím panelu. Skica se řídí rovinou: změníte-li vzdálenost roviny, pohnou se skica i všechny prvky na ní.

## Osy a body

- {{ui:Osa}}: přes dva body, osa válce nebo kužele, místo, kde se protínají dvě roviny, podél přímé hrany (nebo osa kruhové hrany), nebo kolmo k ploše přes bod.
- {{ui:Bod}}: v souřadnicích, ve vrcholu nebo bodě skici, ve středu kruhové hrany, a také body „mezi objekty“:

| Typ bodu | Odkazy |
|---|---|
| Střed hrany (nebo mezi dvěma body) | **Hrana** (v polovině její délky, i pro oblouky a křivky), nebo bez hrany **Bod 1** a **Bod 2** |
| Kde hrana nebo osa protíná plochu nebo rovinu | **Hrana** (přímá nebo křivá) nebo osa, a **Protíná rovinu** (rovina nebo rovná plocha), nebo **Případně plochu** (rovná plocha nebo válec). Kružnice protne rovinu dvakrát a přímka prochází válcem dvakrát: **Druhý průsečík** vezme druhý |
| Kde se protínají tři roviny | **První**, **Druhá** a **Třetí rovina** (roviny nebo rovné plochy) |

Každý z nich ohlásí jednoduchou zprávu, když jeho odkazy nesedí: přímka rovnoběžná s rovinou, přímka mimo válec, hrana, která nedosáhne roviny, tři roviny, které se neprotínají v jednom bodě, nebo bod na přímce, kterou má určovat rovina.

Použití v jiných prvcích:

| Kde | Jak |
|---|---|
| Rotační těleso | **Osa**: vyberte prvek osy ze seznamu (musí ležet v rovině skici) |
| Kruhový vzor | **Osa**: prvek osy |
| Lineární vzor | **Směr**: prvek osy, nebo rovina (její normála) |
| Zrcadlení | **Rovina zrcadlení**: referenční rovina |
| Vytáhnout | **Konec**: Až k ploše nebo rovině, Až k vrcholu (prvek bodu). V této verzi ještě není hotovo (vyžaduje přesné jádro) |
| Úkos | **Neutrální rovina** |

## Když odkaz zmizí

Rovina vytvořená z plochy, která už neexistuje, selže se zprávou, která ji pojmenuje, například „Plocha, na které leží, zmizela z Extrude1.“ Nikdy se nepřesune na jinou plochu. Skici a prvky na ní jsou označeny „nesestaveno“, dokud nevyberete nový odkaz. Zbytek dílu zůstane beze změny.

:::note
Tato verze sestavuje každý díl se sítovým jádrem, které tvoří roviny, osy a body ze základních rovin, rovných ploch vytvořených vytažením nebo rotací, bodů skic, souřadnic a dalších referenčních prvků. Vše, co potřebuje hranu, konec hrany nebo zakřivenou plochu, vyžaduje přesné jádro: v této verzi ještě není hotovo („Používá plochu nebo hranu tělesa, kterou najde jen přesné jádro: v této verzi ještě není hotovo.“).
:::
