---
title: Splajny, orezanie, odsadenie a ďalšie nástroje náčrtu
summary: Kreslite splajny s bodmi prechodu a riadiacimi bodmi, orezávajte a predlžujte krivky, odsaďte reťaz, zrkadlite podľa osi, pridávajte mnohouholníky a drážky, vzorujte geometriu náčrtu a premietajte hrany modelu.
keywords: splajn, bod prechodu, riadiaci bod, b-spline, nurbs, krivka, orezať, predĺžiť, odsadenie, zrkadliť, symetria, mnohouholník, šesťuholník, drážka, vzor, lineárne pole, kruhové pole, premietnuť, premietnuť hranu, zahrnúť, previesť entity
from: 3ecb166a
---

Tieto nástroje fungujú v otvorenom náčrte. {{ui:Spline}} a {{ui:Orezať}} sú na paneli nástrojov. Ostatné sú pod {{ui:Viac}} na konci nástrojov náčrtu. Každý nástroj je jeden krok späť a {{key:Esc}} ho zastaví. Základné kresliace nástroje nájdete v [Nakreslite prvý náčrt](topic:sketch-basics).

## Splajny

Splajn je hladká krivka. Existujú dva druhy.

| Nástroj | Klávesa | Ako kresliť |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Kliknite na body, ktorými krivka prechádza. Ukončite stlačením {{key:Enter}}, {{key:Esc}}, pravým tlačidlom alebo dvojklikom. Kliknutím na prvý bod znova splajn uzavriete |
| {{ui:Spline s riadiacimi bodmi}} (pod {{ui:Viac}}) | | Kliknite na riadiace body. Krivka k nim je priťahovaná, ale dotýka sa iba prvého a posledného. Prerušovaný riadiaci mnohouholník sa zobrazí počas kreslenia aj potom |

- **Body sú body náčrtu.** Ťahajte ich alebo im priraďte väzby a kóty ako ktorémukoľvek inému bodu. Prvý bod splajnu sa môže prichytiť ku koncu úsečky, čím sa s ňou spojí väzbou stotožnenia.
- **Dotyčnica na konci.** Vyberte úsečku, oblúk alebo splajn, ktorý sa stretáva s jedným koncom splajnu, a potom splajn a zvoľte {{ui:T Dotyčnica}}. Smer konca splajnu potom nasleduje úsečku. Dotyčnica mimo koncov splajnu sa odmietne: "Dotyčnica k splajnu vyžaduje, aby sa úsečka, oblúk alebo splajn stretal s jedným jeho koncom."
- **Konce.** Bez väzby dotyčnice sú konce splajnu s bodmi prechodu prirodzené (na samom konci žiadne zakrivenie). Krivka je kubická a prechádza každým bodom; jej rozostup určujú vzdialenosti medzi bodmi.
- **Uzavreté splajny** tvoria profil samy. Otvorené splajny spájajú úsečky a oblúky do uzavretej slučky ako každá iná krivka.
- Zmazanie bodu vnútri splajnu odstráni tento bod a splajn zachová, pokiaľ má aspoň dva body (pri uzavretom splajne tri).

Vytiahnutie a rotácia vytvoria splajn sieťovým jadrom z krátkych priamych úsečiek (skutočné krivky vyžadujú presné jadro: v tejto verzii ešte nie je hotové). Export DXF zapíše splajn ako lomenú čiaru, ktorá zostane do 0.01 mm od krivky, pretože DXF R12 nemá entitu splajnu.

## Orezanie a predlžovanie

| Nástroj | Klávesa | Ako |
|---|---|---|
| {{ui:Orezať}} | {{key:T}} | Ukážte na krivku: časť, ktorá by sa odstránila, sa zobrazí červenou až po najbližšie priesečníky. Kliknutím ju odstránite. Krivka, ktorá nikde nepretína, sa odstráni celá |
| {{ui:Predĺžiť}} (pod {{ui:Viac}}) | {{key:E}} | Kliknite na úsečku alebo oblúk blízko konca, ktorý chcete predĺžiť. Predĺži sa k ďalšej krivke, na ktorú narazí. "Tento koniec nemá čo dosiahnuť." sa zobrazí, keď nič nestojí v ceste |

Orezanie a predlžovanie fungujú na úsečkách, oblúkoch, kružniciach a splajnoch (predlžovanie: úsečky a oblúky).

- Orezaná **kružnica** sa stane oblúkom. Jej kóta polomeru alebo priemeru sa presunie na oblúk.
- Orezanie stredu úsečky zanechá dve úsečky, ktoré ostanú na tej istej priamke. Orezanie stredu oblúka zanechá dva oblúky s rovnakým stredom a väzbou rovnosti.
- Orezaný **splajn** sa stane splajnom s riadiacimi bodmi, ktorý presne nasleduje pôvodnú krivku. Väzba dotyčnice na zachovanom konci zostane.
- Nový koniec sa umiestni na krivku, ktorá ho orezala (na úsečku, oblúk alebo kružnicu, alebo sa stotožní s jej koncom). Splajny nemôžu držať bod, takže splajn, ktorý reže, nepridá žiadnu väzbu.

**Väzby, ktoré už nesedia, sa odstránia**, a stavový riadok uvedie koľko. Napríklad kóta dĺžky na orezanej úsečke sa odstráni, ale vodorovné alebo rovnobežné väzby ostanú.

## Odsadenie

1. Zvoľte {{ui:Odsadenie}} pod {{ui:Viac}} alebo stlačte {{key:O}}.
2. Kliknite na úsečku, oblúk, kružnicu alebo splajn. Zvýrazní sa celá jej reťaz: všetky krivky spojené koniec na koniec, až po bod, kde sa stretávajú tri alebo viac. Ak chcete odsadiť iba časť reťaze, najprv vyberte tieto krivky, potom zvoľte Odsadenie a kliknite na jednu z nich.
3. Presuňte kurzor na stranu, kam kópia pôjde. Sleduje ho prerušovaný náhľad. Stlačením {{key:B}} získate obe strany.
4. Kliknite, zadajte vzdialenosť a stlačte {{key:Enter}}.

Úsečky a oblúky sa odsadzujú presne. Rohy sa predlžujú alebo orezávajú, kým sa nespoja. Kópia má jednu kótu **Odsadenie** a ostatné časti ju nasledujú: dvojklikom na kótu zmeníte celú kópiu. Vzdialenosť, ktorá je pre reťaz príliš veľká, sa odmietne, napríklad: "Táto vzdialenosť je pre túto reťaz príliš veľká: jedna strana by sa vyvrátila naruby."

**Splajn** sa odsadí novým splajnom s bodmi prechodu do 0.001 mm od skutočného odsadenia. Táto kópia je pevná: nenasleduje neskoršie zmeny a nemá kótu Odsadenie. Splajn v reťazi potrebuje na svojich koncoch hladké (dotyčnicové) spoje.

## Zrkadliť

1. Nástrojom Vybrať vyberte, čo chcete zrkadliť.
2. Zvoľte {{ui:Zrkadliť}} pod {{ui:Viac}} alebo stlačte {{key:M}}.
3. Kliknite na úsečku alebo os, podľa ktorej chcete zrkadliť.

Každý zrkadlený bod dostane väzbu **Symetria** s pôvodným bodom, takže kópia nasleduje pri zmene originálu. Body ležiace na osi zrkadlenia sa zdieľajú a zrkadlené kružnice dostanú väzbu Rovnosť. Ak nič nebolo vybraté, kliknite na položky na zrkadlenie, stlačte {{key:Enter}} a potom kliknite na os zrkadlenia.

## Mnohouholníky a drážky

| Nástroj | Ako |
|---|---|
| {{ui:Mnohouholník}} | Kliknite na stred, potom na roh, potom zadajte počet strán (3 až 64). Strany sú rovnaké a rohy ležia na konštrukčnej kružnici. Okótujte kružnicu, aby ste určili veľkosť mnohouholníka |
| {{ui:Drážka}} | Kliknite na stred jedného konca, potom na stred druhého konca, potom kliknutím nastavte šírku. Dve úsečky dotýkajúce sa dvoch rovnakých polkružníc |

## Vzory náčrtu

Najprv vyberte geometriu, potom:

- {{ui:Lineárne pole}}: kliknite na začiatočný bod, potom na miesto prvej kópie, potom zadajte počet kópií (vrátane originálu).
- {{ui:Kruhové pole}}: kliknite na stred, potom zadajte počet kópií rovnomerne rozložených na celú otáčku.

Kópie si so sebou prinesú väzby medzi vybranou geometriou (kruhové pole vynecháva vodorovné a zvislé väzby). Kópie nie sú prepojené s originálom: zmeníte jednu a ostatné zostanú, aké sú.

## Premietnutie hrán súčiastky

1. Zvoľte {{ui:Premietnuť hranu}} pod {{ui:Viac}}.
2. Kliknite na priamu alebo kruhovú hranu súčiastky za náčrtom.

Hrana sa presne skopíruje do roviny náčrtu a zafixuje (väzba Pevný). Nenasleduje neskoršie zmeny súčiastky. Stlačením {{key:Q}} z nej urobíte konštrukčnú geometriu. Kružnica naklonená k rovine náčrtu by sa premietla do elipsy, preto sa odmietne. Rovnako sa odmietnu voľné hrany a hrany, ktoré smerujú priamo von z náčrtu. Premietanie vyžaduje presné jadro: v tejto verzii ešte nie je hotové.
