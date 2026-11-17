---
title: Tažení po dráze, lofting a úkos
summary: Protáhněte uzavřený profil po dráze z křivek skic nebo hran modelu, proložte profil řezy na různých rovinách a přidejte plochám úkos; s možnostmi, přesnými výsledky a hlášeními.
keywords: tažení po dráze, protažený výstupek, protažený výřez, trubka, dráha, lofting, lofting výstupek, prolnutí řezů, přímkový, úkos, úhel úkosu, zužující plochy, neutrální rovina, směr tažení, lisování
from: 9d637981
---

:::note
**V této verzi** tažení po dráze a lofting **ještě nejsou hotové**: vyžadují přesné geometrické jádro, které tato verze PartCraftu nemá. [Co ještě není hotovo](topic:not-built-yet) popisuje, co dělat místo toho; oddíly Tažení po dráze a Lofting popisují, jak fungují s přesným jádrem. **Úkos funguje** na rovných plochách: síťové jádro ho vytvoří se stejným výsledkem, jaký dá přesné jádro.
:::

Všechny tři jsou v nabídce {{ui:Více}} ve skupině Prvky (viz [Síťové jádro](topic:solid-kernels)). Každý z nich může přidat materiál, odebrat ho, ponechat jen průnik (**Průnik**) nebo vytvořit **Nové těleso** (u tažení a loftingu: **Operace** v panelu).

## Tažení po dráze

Tažení po dráze posouvá uzavřený profil podél dráhy: trubky, rukojeti, drátěné pružiny, kolejnice.

1. Nakreslete **dráhu** v jedné skice: úsečky a oblouky navazující na konci (nebo použijte hrany modelu, viz níže).
2. Nakreslete **profil** v jiné skice, jejíž rovina prochází jedním koncem dráhy, například kružnici na horní rovině na začátku dráhy nakreslené na přední rovině.
3. Vyberte skicu profilu a zvolte {{ui:Více}}, pak {{ui:Tažení po dráze}}. Nejnovější další skica se stane dráhou.

V panelu:

| Nastavení | Co dělá |
|---|---|
| **Dráha** | Zaškrtněte skici, které tvoří dráhu (několik skic na sebe navazuje v jednu 3D dráhu); **Vybrat hrany modelu** přidá hrany dílu |
| **Orientace** | Sledovat dráhu (výchozí), Frenet, Pevná (řezy zůstávají rovnoběžné s profilem), Zachovat směr, Podél vodicí křivky |
| **Měřítko na konci** | Profil roste nebo se zmenšuje lineárně na tuto velikost na konci (1 = konstantní) |

Ostré rohy dráhy jsou zkoseny na úhel. Kružnice o poloměru 5 protažená podél úsečky 100 mm je válec o objemu přesně 2500π mm³; podél čtvrtkružnice o poloměru 50 je to čtvrtina torusu o objemu 625π² mm³.

## Lofting

Lofting proloží dvěma nebo více řezy ležícími na různých rovinách.

1. Nakreslete každý řez v jeho vlastní skice (každá s jednou uzavřenou smyčkou), na základních rovinách, referenčních rovinách (viz [Referenční roviny, osy a body](topic:reference-geometry)) nebo plochách.
2. Zvolte {{ui:Více}}, pak {{ui:Lofting}}. Každá nepoužitá skica s jednou smyčkou se stane řezem v pořadí historie.

Panel vypisuje řezy v pořadí (**Nahoru** změní pořadí, **Odebrat** jeden zruší); **Přidat skicu** přidá další a **Vybrat plochu** přidá rovnou plochu dílu. **Přímkový** vytvoří rovné plochy mezi řezy místo hladkého přechodu. Mezi dvěma čtverci jsou obě možnosti stejný komolý jehlan (čtverec 40 mm na čtverec 20 mm na délce 30 mm: přesně 28000 mm³).

Řezy s různým počtem stran (čtverec a trojúhelník) páruje OpenCascade, což může boční plochy zkroutit; prvek na to upozorní. Pro nejčistší výsledek kreslete řezy se stejným počtem stran, počínaje odpovídajícími rohy.

### Vodicí křivky

Vodicí křivky jsou křivky, podle kterých musí boky loftingu sledovat od prvního řezu k poslednímu, například pro vyboulení, zúžení nebo rozšíření, které nakreslíte sami.

1. Nakreslete dvě nebo více vodicích křivek: otevřené křivky (úsečky, oblouky, spline), které vedou od prvního řezu k poslednímu a protínají každý řez jednou. Jedna skica může obsahovat několik vodicích křivek: každý samostatný řetěz v ní je vlastní vodicí křivkou. Nakreslete vodicí křivku tak, aby se skutečně setkávala s každým řezem: přichyťte její konce k bodům řezů.
2. V panelu Lofting, pod **Vodicí křivky**, zaškrtněte skici, které je obsahují, nebo klikněte na {{ui:Vybrat hrany modelu jako vodicí křivky}} a klikněte na hrany dílu (Esc ukončí).

S vodicími křivkami je lofting Gordonova plocha procházející řezy a vodicími křivkami (viz [Plochy procházející sítí křivek](topic:gordon-surfaces)), na koncích zakrytá rovně do tělesa. Panel uvádí, jak přesně je sleduje. Každý řez musí být tehdy skica (bod ani plocha nemohou vodicí křivku přijmout) a **Přímkový** se neuplatní. Vodicí křivka, která mine řez o více než 0,01 mm, je odmítnuta s uvedením mezery.

Ověřeno: dvě kružnice (20 mm a 10 mm v průměru, vzdálené 40 mm) se čtyřmi přímými vodicími křivkami dávají objem komolého kužele s odchylkou do 0,000002 %; oblouky vyklenuté o 5 mm dají sud, který sleduje každou vodicí křivku s odchylkou do 0,00001 mm.

## Úkos

Úkos naklání plochy, aby se díl dal vyjmout z formy.

1. Zvolte {{ui:Více}}, pak {{ui:Úkos}} (nebo nejprve podržte {{key:Shift}} a klikněte na plochy). Pokud nic nevyberete, jste v režimu výběru: klikněte na každou plochu k naklonění a pak na {{ui:Hotovo}}.
2. Nastavte **Úhel (°)**, **Neutrální rovinu** (kde plochy zachovávají svou velikost) a **Směr tažení** (výchozí je normála neutrální roviny).

Kladný úhel naklání plochu dovnitř podél tažení a odebírá materiál; záporný ho přidává. Neutrální rovina je zpočátku horní rovina. V této verzi lze úkosem upravit jen rovné plochy: u válce, kužele nebo tvarované plochy se zobrazí: „Úkos: v této verzi jen rovné plochy (síťové jádro ho vytvoří).“ Čtyři strany bloku 100 × 100 × 50 zkosené o 5° kolem jeho spodku se stanou komolým jehlanem o objemu přesně h/3·(a² + b² + ab), kde b = a − 2h·tan 5°.

## Hlášení

| Hlášení | Co dělat |
|---|---|
| „Rovina profilu musí procházet jedním koncem dráhy …“ | Přesuňte skicu profilu na začátek (nebo konec) dráhy |
| „Dráha má mezeru: její křivky na koncích nenavazují …“ | Spojte křivky dráhy; v oddělených skicách se jejich konce musí přesně setkat |
| „Řez loftingu potřebuje přesně jednu uzavřenou smyčku“ | Rozdělte skicu, nebo odstraňte přebytečnou smyčku |
| „… nelze zkosit kolem této neutrální roviny …“ | Plocha je rovnoběžná s neutrální rovinou nebo ji neprotíná |
| „Úkos: v této verzi jen rovné plochy (síťové jádro ho vytvoří).“ | Vybraná plocha je zakřivená. Odeberte ji; úkos používejte jen na rovné plochy |

:::note
Ještě není hotovo: zkrucující tažení, tažení tenkostěnné a plošné, vodicí křivky loftingu a tečnost na koncích, úkos na válcích, kuželech a tvarovaných plochách.
:::
