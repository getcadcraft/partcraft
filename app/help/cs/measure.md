---
title: Měření vzdáleností, úhlů a hmotnosti
summary: Klikněte na dvě věci v pohledu pro nejmenší vzdálenost, úhel a ΔX ΔY ΔZ; přečtěte délku hrany, průměr díry, plochu plochy nebo souřadnice bodu; zjistěte objem, hmotnost, těžiště a setrvačnost dílu nebo sestavy.
keywords: měření, vzdálenost, nejmenší vzdálenost, úhel, délka, poloměr, průměr, plocha, souřadnice, delta, kontrola, hmotnostní vlastnosti, hmotnost, váha, těžiště, setrvačnost, moment setrvačnosti, hustota, materiál
from: 20bda0b7
---

**Měřit** funguje na modelu ve všech pracovních prostorech (Design, Form, Simulation, Generative, Manufacture) a v sestavě. Je v nabídce {{ui:Pohledy}} ve skupině **Pohled**, nebo stiskněte {{key:M}}. Karta se otevře přes levý horní roh pohledu.

## Měření jedné věci

Klikněte na vrchol, hranu nebo plochu. Karta zobrazí:

- **Bod** (vrchol, střed hrany nebo střed kružnice): jeho X, Y, Z.
- **Hrana**: přímka, kružnice nebo křivka a její délka; u kružnice také poloměr, průměr a střed.
- **Plocha**: rovina, válec, kužel a podobně, a její obsah; normála ploché plochy; poloměr a průměr válce (velikost díry). Plochy se počítají z fasetů, které jádro sítě vytváří.
- **Celé těleso**: podržte {{key:Shift}} a klikněte na díl. Dostanete jeho objem, plochu, hmotnost a setrvačnost (viz níže).

Ukazatel se přichytí k vrcholům, středům hran a středům kružnic do 10 pixelů; malá modrá tečka ukáže přichycení, než kliknete. Chcete-li vybrat střed díry, ukažte doprostřed díry; chcete-li vybrat její okraj (kružnici), ukažte na okraj.

## Měření mezi dvěma věcmi

Klikněte na druhou položku. Karta přidá:

- **Nejmenší vzdálenost** a dva nejbližší body, nakreslené v pohledu s čárou mezi nimi.
- **ΔX, ΔY, ΔZ** od prvního nejbližšího bodu k druhému.
- **Úhel** mezi dvěma plochými plochami (mezi jejich normálami, 0–180°), mezi dvěma přímými hranami nebo osami (0–90°), nebo mezi hranou a plochou.
- **Mezera mezi rovinami** pro dvě rovnoběžné ploché plochy, **Střed na střed** pro dvě kružnice nebo díry, **Osa na osu** pro dvě rovnoběžné díry nebo válce.

Třetí kliknutí zahájí nový pár. {{key:Esc}} zruší výběr; dalším {{key:Esc}} (nebo {{ui:Zavřít}}) zavřete Měřit. {{ui:Kopírovat}} vloží výsledky do schránky jako text oddělený tabulátory, připravený pro vložení do tabulky.

### Jak přesné to je

PartCraft staví díl jádrem sítě, takže vzdálenosti se počítají na fasetách sítě a karta říká **přibližně: z fasetů**: správně pro ploché plochy a mezi vrcholy, mírně nepřesně pro zakřivené. Jemnější nastavení **Křivky** je přiblíží. Přesné měření na skutečných plochách potřebuje přesné jádro: v této verzi ještě není hotovo.

## Hmotnostní vlastnosti

Zvolte {{ui:Hmotnostní vlastnosti}} na kartě nebo v nabídce {{ui:Pohledy}}. U dílu vyberte **Materiál** na kartě (ocel, hliník, plasty a další s jejich obvyklými hustotami). V sestavě používá každý díl materiál nastavený v jeho vlastnostech (vyberte díl, pak **Materiál**) a výsledek platí pro všechny díly dohromady.

Karta ukazuje hmotnost, objem, plochu, těžiště, tenzor setrvačnosti (Ixx, Iyy, Izz a součiny Ixy, Iyz, Ixz, v kg·mm², kolem těžiště podél světových os) a hlavní momenty. Bez materiálu ukazuje totéž na jednotku hustoty (mm⁵) a žádnou hmotnost.

Čísla jsou přesná pro tesselované těleso, které jádro sítě vytváří (zakřivené plochy jako fasety), takže kulatý díl vyjde o něco nízko, a karta to říká. Hustoty materiálů jsou typické tabulkové hodnoty; skutečná slitina nebo jakost se může lišit o několik procent.

## Omezení

- Přichycení může najít bod skrytý za jinou geometrií; zkontrolujte, zda karta ukazuje, co jste chtěli.
- Měřit se zavře, když otevřete skicu nebo list výkresu, nebo přepnete pracovní prostor.
