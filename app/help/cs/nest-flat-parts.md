---
title: Rozmístění plochých dílů na listy
summary: Rozložené díly rozmístěte na deskách nebo svitku s co nejmenším odpadem, který PartCraft najde, nikdy blíž než zadaný rozestup, a rozložení uložte jako DXF pro laser, plazmu, vodní paprsek nebo router.
keywords: rozmísťování, rozmístění, list, deska, svitek, laser, plazma, vodní paprsek, router, řezání, využití materiálu, odpad, rozestup, šířka řezu, směr zrna, směr válcování, dxf, rozvinutí, obrysy
from: 8dcce1a6
---

**Rozmísťování (nesting)** umístí mnoho plochých dílů na list tak, aby z materiálu zůstalo co nejméně. PartCraft pokládá díly jeden po druhém, vždy tam, kde se zkrátí použitá délka listu, zkouší několik pořadí a otočení a výpočet trvá během několika sekund; nechá si nejlepší výsledek. Díly mohou ležet v otvorech jiných dílů i ve vnitřku tvaru L nebo U.

## Otevření

- {{ui:Export}} › {{ui:Rozmístit ploché díly na listy…}} ji otevře s rozvinutím dílu nebo — v sestavě — s rozvinutím každého plechového dílu, tolikrát, kolik je kopií.
- U plechového dílu {{ui:Rozložit do roviny}} a poté {{ui:Rozmístit na listy…}} pod rozvinutím.
- {{ui:Přidat obrysy z DXF…}} přidá každý uzavřený obrys v souboru DXF jako díl: výkres z CadCraft uložený jako DXF nebo soubor z vlastního softwaru vaší řezačky. Obrys uvnitř jiného je v něm otvor. Čáry a oblouky, které na sebe navazují konec ke konci, se počítají jako jeden obrys. Soubory v palcích, centimetrech nebo metrech se převedou na milimetry.

:::note
Rozložení plechu vyžaduje přesné geometrické jádro (viz [Plechy](topic:sheet-metal)). Obrysy z DXF souboru fungují vždy.
:::

## Nastavení

Pro každý díl zadejte **kolik kusů** potřebujete a jeho **směr zrna**: {{ui:Libovolný směr}}, {{ui:Podél listu (jak je nakresleno)}} u kartáčovaného nebo válcovaného plechu, který musí běžet jedním směrem, nebo {{ui:Napříč listem}}.

Pod **Listy**:

- **Zásoby**: {{ui:Desky}} zadané délky a šířky (a kolik jich máte; 0 = tolik, kolik je potřeba), nebo {{ui:Svitek}} zadané šířky, dlouhý podle potřeby.
- **Okraj** zůstává volný na každé hraně listu (pro upínky nebo nerovnou hranu).
- **Rozestup mezi díly** je nejmenší vzdálenost mezi dvěma řeznými čarami: nejméně šířka řezu vašeho stroje plus to, co materiál vyžaduje.
- **Otočení**: úhly, o které lze díl otočit, standardně po 90°. Méně otočení běží rychleji; více může list využít lépe.
- **Díly lze převrátit** umožní položit díl vzhůru nohama. U plechu to vypněte: rozvinutí položené převrácené se ohýbá opačným směrem.

Stiskněte {{ui:Rozmístit}}. Náhled ukazuje každý list; údaje uvádějí, kolik desek (nebo jakou část svitku) to zabralo a kolik materiálu díly zabírají. Cokoli, co se nevešlo, je pojmenováno.

## Uložení

{{ui:Uložit DXF}} zapíše rozložení jako DXF (R12, milimetry), jeden list pod druhým: obrysy listů na vrstvě SHEET, díly na PARTS (oblouky zůstanou oblouky), název každého dílu na LABELS.

:::tip
Smíchání více dílů obvykle rozmístí lépe než mnoho kopií jednoho: malé díly vyplní mezery mezi velkými.
:::

## Řezání listů (G-code)

**Export › Rozmístěné listy do G-code** načte rozmístěné DXF (to, nebo listy doplňku Cabinets v CadCraft) a vytvoří jeden program na list přes postprocesor, který zvolíte: nejdřív otvory a výřezy, pak obrysy; každý řez je o poloměr nástroje vně dílu, skrz list a o 1 mm dál, případně s držáky, pokud je vyžádáte. Seznam postprocesorů tvoří vestavěné postprocesory a postprocesory vaší studie Manufacture. Každý program zkontrolujte v simulátoru, než ho spustíte: vrtání a kapsy se nevytvářejí.

## Co zkontrolovat

PartCraft znovu zkontroluje každé rozložení na skutečných tvarech (ne na mřížce, kterou prohledával): žádné dva díly blíž než rozestup, nic v okrajích. Řez neplánuje: náběhy, pořadí řezání, jednorázové řezání společných hran a ponechání zbylého listu je úkol softwaru vaší řezačky. Zkontrolujte tam DXF před řezáním.
