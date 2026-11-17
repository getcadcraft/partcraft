---
title: Rozmiestniť ploché súčiastky na tabule
summary: Rozložte ploché súčiastky na tabule alebo kotúč s čo najmenším odpadom, aký PartCraft dokáže nájsť, nikdy nie bližšie než medzera, ktorú zadáte, a uložte rozloženie ako DXF pre laser, plazmu, vodný lúč alebo frézku.
keywords: rozmiestňovanie, rozmiestniť, tabuľa, kotúč, laser, plazma, vodný lúč, frézka, rezanie, výťažnosť, využitie materiálu, odpad, zvyšky, rozostup, šírka rezu, smer zrna, dxf, rozvinutý tvar, obrysy
from: 8dcce1a6
---

**Rozmiestňovanie** umiestni na tabuľu veľa plochých súčiastok tak, aby zostalo čo najmenej materiálu. PartCraft ukladá súčiastky jednu po druhej, každú tam, kde sa najkratšia použitá dĺžka tabule zachová, skúša niekoľko poradí, výpočet trvá niekoľko sekúnd a ponechá najlepší výsledok. Súčiastky môžu zapadnúť do dier iných súčiastok aj do dutiny tvaru L alebo U.

## Otvorenie

- {{ui:Export}} › {{ui:Rozmiestniť ploché súčiastky na tabule…}} otvorí rozmiestnenie s rozvinutým tvarom súčiastky alebo — v zostave — s rozvinutými tvarmi všetkých plechových súčiastok, toľkokrát, koľko je kópií.
- Pri plechovej súčiastke {{ui:Rozvinúť}} a potom {{ui:Rozmiestniť na tabule…}} pod rozvinutým tvarom.
- {{ui:Pridať obrysy z DXF…}} pridá každý uzavretý obrys v súbore DXF ako súčiastku: výkres z CadCraft uložený ako DXF alebo súbor zo softvéru vašej rezačky. Obrys vnútri iného obrysu je v ňom diera. Čiary a oblúky, ktoré na seba priamo nadväzujú, sa počítajú ako jeden obrys. Súbory v palcoch, centimetroch alebo metroch sa prepočítajú na milimetre.

:::note
Rozvinutie plechových dielov vyžaduje presné geometrické jadro (pozri [Plechové diely](topic:sheet-metal)). Obrysy zo súboru DXF fungujú vždy.
:::

## Nastavenie

Pri každej súčiastke zadajte **koľko** kusov potrebujete a jej **smer zrna**: {{ui:Ľubovoľný smer}}, {{ui:Pozdĺž tabule (ako nakreslené)}} pre brúsený alebo valcovaný plech, ktorý musí ísť jedným smerom, alebo {{ui:Naprieč tabule}}.

V časti **Tabule**:

- **Zásoba**: {{ui:Tabule}} zadanej dĺžky a šírky (a koľko ich máte; 0 = toľko, koľko treba), alebo {{ui:Kotúč}} zadanej šírky, dlhý podľa potreby.
- **Okraj** zostáva voľný na každom okraji tabule (pre svorky alebo nerovný okraj).
- **Medzera medzi súčiastkami** je najmenšia vzdialenosť medzi dvoma rezovými čiarami: aspoň šírka rezu vašej rezačky plus to, čo materiál potrebuje.
- **Otočenia**: uhly, o ktoré sa súčiastka môže otočiť, štandardne každých 90°. Menej otočení beží rýchlejšie; viac ich môže tabuľu využiť lepšie.
- **Prevrátenie súčiastok** umožní položiť súčiastku hore nohami. Pri plechu ho vypnite: rozvinutý tvar položený naopak sa ohne opačným smerom.

Stlačte {{ui:Rozmiestniť}}. Náhľad zobrazí každú tabuľu; údaje povedia, koľko tabúľ (alebo koľko kotúča) sa použilo a koľko materiálu zaberajú súčiastky. Čokoľvek, čo sa nezmestilo, je pomenované.

## Uloženie

{{ui:Uložiť DXF}} zapíše rozloženie ako DXF (R12, milimetre), jednu tabuľu pod druhou: obrysy tabúľ na hladine SHEET, súčiastky na hladine PARTS (oblúky zostanú oblúkmi), názov každej súčiastky na hladine LABELS.

:::tip
Kombinácia viacerých súčiastok zvyčajne rozmiestni lepšie než veľa kópií jednej: malé súčiastky vyplnia medzery medzi veľkými.
:::

## Rezanie tabúľ (G-kód)

**Export › Tabule rozmiestnené do G-kódu** načíta rozmiestnený DXF (tento alebo tabule doplnku Cabinets v CadCraft) a pre každú tabuľu vytvorí jeden program cez postprocesor, ktorý zvolíte: najprv diery a výrezy, potom obrysy, pričom každý rez ide o polomer nástroja mimo súčiastky, cez tabuľu a ešte 1 mm navyše, s držiakmi, ak ich požadujete. Zoznam postprocesorov tvoria vstavané postprocesory a postprocesory vašej štúdie Manufacture. Každý program skontrolujte v simulátore pred spustením: vŕtanie a vyhĺbenia sa nevytvárajú.

## Čo skontrolovať

PartCraft znovu skontroluje každé rozloženie na skutočných tvaroch (nie na mriežke, ktorú pri hľadaní použil): žiadne dve súčiastky nie sú bližšie než medzera a nič nezasahuje do okrajov. Rez neplánuje: nábehy, poradie rezania, rezanie spoločných hrán raz a zachovanie zvyškovej tabule zabezpečuje softvér vašej rezačky. DXF tam skontrolujte pred rezaním.
