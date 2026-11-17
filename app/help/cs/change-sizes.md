---
title: Změna velikostí bez otevření skici
summary: Řiďte díl čísly na pravém panelu: kóty skic, hloubky, počty a úhly, jak naplánovat díl tak, aby jej řídila správná čísla, a kde převezmou řízení parametry a rovnice.
keywords: parametry, řídicí kóty, záměr návrhu, změna velikosti, rovnice, globální proměnné, tabulka návrhů, konfigurace, přeřazení velikosti, upravit kótu
from: c2ae1a32
---

Každá velikost v dílu PartCraftu je číslo, které můžete později změnit: kóty v jeho skicách a nastavení jeho prvků. Nemusíte otevírat skicu, abyste změnili její kóty.

## Změna kóty skici z panelu

1. Klikněte na prvek v historii, například „Extrude1".
2. Pod vlastním nastavením vytažení **Kóty skici (Sketch1)** vypisuje každou kótu jeho skici: „Vzdálenost", „Průměr", „Úhel (°)" a tak dále.
3. Zadejte novou hodnotu do jednoho pole a stiskněte {{key:Enter}} nebo {{key:Tab}}.

Skica se přepočítá s novou hodnotou a celý díl se přestaví. Výběr samotné skici ukazuje stejný seznam jako **Řídicí kóty**.

Poloměr nebo průměr musí být větší než nula a úhel je mezi 0 a 180 stupni. Stavový řádek to řekne, když není.

:::tip
Které pole je které? Pole jsou vypsána v pořadí, v jakém byly kóty vytvořeny. Pokud si nejste jisti, otevřete skicu (dvojklikem na ni), dvojklikněte na kótu na plátně a změňte ji tam.
:::

## Zadejte hlavní číslo hned

Vyberte prvek v historii (nebo jej právě přidejte) a napište číslo: jde do hlavního pole prvku, které měníte nejčastěji (**Hloubka** vytažení, **Úhel** rotace, **Průměr** díry, **Počet** vzoru, **Poloměr** zaoblení, stěnu skořepiny). Stiskněte {{key:Enter}} pro nastavení, nebo {{key:Esc}} pro zachování staré hodnoty. Přidání vytažení to řekne na stavovém řádku: „Extrude1 přidáno. Změňte jeho čísla vpravo, nebo teď napište číslo pro jeho hloubku."

## Změna čísla v historii

Řádek každého prvku v historii ukazuje jeho hlavní číslo vedle názvu: „Extrude1 25 mm", „Hole1 Ø6.6 thru", „Fillet1 R2", „LPattern1 4 × 20 mm". Dvojklikněte na číslo (nebo vyberte řádek a stiskněte {{key:F2}}) a otevře se pole přímo tam. Napište novou hodnotu a stiskněte {{key:Enter}}; {{key:Esc}} ponechá starou. Funguje přesně jako pole prvku vpravo: stejné meze, `=` pro zadání rovnice jako `=width/2` a jeden krok zpět.

U vytažení, díry nebo vzoru otevře dvojklik kamkoli na řádku pole. U zaoblení, sražení, skořepiny, úkosu nebo závitu vede dvojklik na název k výběru hran nebo ploch, takže dvojklikněte na samotné číslo. Skici nemají číslo v řádku: dvojklik je otevře.

## Přetažení v pohledu

Vyberte vytažení v historii (nebo na něj klikněte v pohledu a pak na jeho řádek) a na jeho koncové ploše stojí oranžová šipka s hloubkou v poli vedle. Přetáhněte šipku: díl sleduje tažení a puštění nastaví novou hloubku jako jeden krok ({{key:Mod+Z}} ji vrátí). Stiskněte {{key:Esc}} během tažení pro návrat na výchozí místo. Hloubka se mění po krocích o desetinu své velikosti: 1 mm u vytažení 25 mm, 0.1 mm u vytažení 3 mm.

Rotace dostane zakřivenou šipku na konci svého oblouku: přetažením kolem osy změníte úhel po celých stupních od 1° do 360°.

Nebo klikněte do pole vedle šipky, napište hodnotu (nebo `=` a rovnici) a stiskněte {{key:Enter}}. U vytažení, které jde **Skrz vše** nebo až k ploše, nebo u hodnoty řízené rovnicí, šipka není: měňte je vpravo.

## Čísla, která řídí díl

| Kde | Co můžete změnit |
|---|---|
| Skica | Každou kótu: délky, vzdálenosti, poloměry, průměry, úhly |
| Vytažení a Výřez | Hloubku, koncovou podmínku, směr, výstupek nebo výřez |
| Rotační těleso a rotační výřez | Úhel, osu, výstupek nebo výřez |
| Díra | Průměr, hloubku, skrz vše, průměr a hloubku zahloubení |
| Zaoblení, sražení, skořepina | Poloměr, vzdálenost, tloušťku stěny a směr, a které hrany nebo plochy |
| Lineární a kruhový | Počet, rozestup nebo úhel, směr nebo osu |
| Díl | Křivky (jak jemně se kulaté tvary fasetují) |
| Výkres | Kde řez prochází, velikost a měřítko detailu, hodnoty GD&T |

## Plánujte díl tak, aby jej řídila správná čísla

Čísla, která zadáte, jsou ta, která můžete měnit. Několik návyků zajistí, že se pozdější změny chovají správně:

- **Kótujte, co na práci záleží.** Pokud musí být díra 15 mm od hrany, okótujte ji od této hrany, ne od počátku.
- **Plně určujte skici.** Pak změna pohne jen tím, čím má (viz [Plně určete skicu](topic:relations-dimensions)).
- **Používejte vazby pro záměr.** Rovnost u dvou děr znamená, že jeden průměr řídí obě. U symetrických tvarů dejte počátek na střednici, nebo použijte Střed.
- **Skicujte na plochách vytvořených prvky.** Skica na koncové ploše vytažení se pohne, když se změní hloubka.
- **Vzorujte místo kopírování.** Jedna díra vzorovaná osmkrát má jeden průměr ke změně.

## Za hranicí jednotlivých čísel

- **Jedno číslo řídí několik věcí:** použijte parametry a rovnice: [Řiďte díl pomocí parametrů](topic:parameters).
- **Několik velikostí jednoho dílu:** uložte každou jako [konfiguraci](topic:design-tables). Jsou uloženy v souboru dílu.
- **Aritmetika v poli čísla:** napište `=40/2` nebo `=width / 2`. To vytvoří rovnici; viz [Rovnice oběma směry](topic:equations-two-way).
- **Palcové jednotky:** díl zobrazuje milimetry. V poli čísla s `=`, nebo v parametru, se `2in` převede na 50.8.

Viz [Co zatím není hotovo](topic:not-built-yet).
