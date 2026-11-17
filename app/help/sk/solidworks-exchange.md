---
title: Prenos súčiastok do iných modelárov a späť
summary: Pošlite súčiastku inému modelárovi súčiastok ako makro, ktoré ju znovu vytvorí so živým stromom prvkov. Pomenovaný STEP a otváranie zoznamu prvkov, ktorý zapísal iný modelár, zatiaľ nie sú v tejto verzii hotové.
keywords: makro, ešte nie je hotové, swb, vba, strom prvkov, obojsmerný prenos, exportovať makro, cadcraft-sw.json, pomenovaný step, ap214, globálne premenné, rovnice, natívna súčiastka
from: 97ca61da
---

PartCraft si s SolidWorks vymieňa súčiastky v oboch smeroch, bez súborového formátu, ktorý by nikto iný nečítal:

- **Von:** makro (`.swb`, čistý text), ktoré SolidWorks spustí, aby súčiastku vytvoril sám, prvok po prvku, s jej náčrtmi, väzbami, kótami, globálnymi premennými a rovnicami. Dostanete natívnu súčiastku so živým stromom prvkov, nie mŕtve teleso.
- **Späť:** makro, ktoré spustíte v SolidWorks, zapíše prvky súčiastky a rovnice do súboru `.cadcraft-sw.json`. Otvorenie tohto súboru v PartCraft zatiaľ nie je v tejto verzii hotové (vyžaduje presné jadro).

:::warning
Nič z toho zatiaľ nebolo otestované v SolidWorks. SolidWorks beží iba vo Windows s licenciou a PartCraft tieto makrá v ňom nikdy nespustil. Makrá boli napísané podľa dokumentácie API SolidWorks a tu skontrolované iba štruktúrou. Počítajte s tým, že budete hlásiť problémy; protokol, ktorý makro zapíše, uvádza, ktorý krok zlyhal.
:::

PartCraft nevie zapísať súbor `.sldprt`: tento formát je uzavretý. Makro je spôsob, ako získať natívnu súčiastku.

## Odoslanie súčiastky ako makra

1. Otvorte súčiastku.
2. Zvoľte {{ui:Export}} a potom {{ui:Makro pre SolidWorks (.swb)}}. PartCraft stiahne `<part>.swb`; stavový riadok uvedie, že bol "zapísaný bez presného jadra".
3. Dialógové okno uvedie, koľko prvkov, globálnych premenných a rovníc makro vytvorí, a vypíše všetko, čo vynecháva. Spolu s ním sa v tejto verzii nezapisuje STEP: ak ho potrebujete, použite {{ui:Export}} a potom {{ui:STEP (fazetovaný, sieťové jadro)}}.
4. V SolidWorks zvoľte **Tools > Macro > Run**, vyberte súbor `.swb` a počkajte. Vytvorí novú súčiastku z vašej predvolenej šablóny, nastaví milimetre a vytvorí každý prvok.
5. Na konci správa uvedie, koľko krokov bolo dokončených, koľko zlyhalo a koľko sa zhodovalo s telesom PartCraft. Úplný protokol `<part> macro log.txt` sa zapíše vedľa makra.

Čo makro vytvorí:

| PartCraft | V novej súčiastke |
|---|---|
| Náčrt na Prednej, Hornej alebo Pravej rovine | Náčrt na tejto rovine s jeho úsečkami, oblúkmi, kružnicami, bodmi, väzbami a kótami (pomenovanými ako v PartCraft, napríklad `k7`) |
| Náčrt na ploche | Náčrt na tej istej ploche, vybranej podľa bodu na nej |
| Náčrt na pevnej rovine | Referenčná rovina cez tri body a náčrt na nej |
| Vytiahnutie, vyrezanie (slepé, cez všetko, do stredu roviny, v dvoch smeroch, zúženie) | Boss-extrude alebo cut-extrude |
| Rotácia, rotačné vyrezanie | Rotácia okolo tej istej osi |
| Otvor (jednoduchý, zapustený, záhlbný, závitový) | Jedno alebo dve vyrezania s vlastnými náčrtmi (závitový otvor je ako jeho vŕtací priemer; bez závitu) |
| Lineárne a kruhové pole, zrkadlenie | Lineárne pole, kruhové pole, zrkadlenie (prvky alebo teleso) |
| Zaoblenie, skosenie, dutina | Zaoblenie, skosenie a dutina na tých istých hranách a plochách, vybraných podľa bodov |
| Parametre a rovnice | Globálne premenné a rovnice na premenovaných kótach |
| Potlačené prvky, lišta návratu | Potlačené rovnakým spôsobom; lišta návratu na tom istom mieste |

Po každom plnom prvku makro porovná objem a veľkosť telesa s PartCraft. Ak sa líšia, raz otočí smer tohto prvku a skontroluje znova; ak to nie je lepšie, otočí ho späť a v protokole zapíše "Check".

### Čo sa vynecháva

Dialógové okno a začiatok makra vypisujú všetko, čo sa neprenieslo, s dôvodom. Dnes sú to: importované telesá (namiesto nich vložte STEP), ťahania po dráhe, lofty, sklony, referenčné osi a body, koncové podmienky "až do", vytiahnutie iba niektorých kontúr a všetko, čo od nich závisí. Splajny sa zmenia na krivky cez svoje body. Táto verzia nemá presné jadro, takže sa vynechávajú aj náčrty na plochách a prvky, ktoré vyberajú hrany alebo plochy.

## Odoslanie pomenovaného STEP

Zatiaľ nie je v tejto verzii hotové: {{ui:STEP pre SolidWorks (pomenovaný, AP214)}} vyžaduje presné jadro a jeho zvolenie hlási "STEP pre SolidWorks: ešte nie je hotové. …". S presným jadrom súbor nesie názov súčiastky, milimetre a farbu súčiastky a postaví Y nahor, ako SolidWorks zobrazuje súčiastky (obyčajný export {{ui:STEP AP214 (presné teleso)}} postaví Z nahor). V názve sa písmená s diakritikou zbavia diakritiky, iné znaky mimo čistého ASCII sa zmenia na `_`.

## Prenos súčiastky späť

Otvorenie súboru v PartCraft (krok 3) v tejto verzii ešte nie je hotové: hlási "Otvorenie exportu SolidWorks: ešte nie je hotové. …". Aplikácia na kreslenie CadCraft súbor stále otvorí a prevezme jeho náčrty.

1. Zvoľte {{ui:Súbor}} > {{ui:Export}} > {{ui:Exportovať makro na prenos súčiastok späť (.swb)}}, aby ste stiahli `CadCraftExport.swb`, a uložte ho vedľa svojich súčiastok.
2. V SolidWorks otvorte súčiastku, zvoľte **Tools > Macro > Run** a vyberte `CadCraftExport.swb`. Zapíše `<part>.cadcraft-sw.json` vedľa súčiastky a nič v nej nezmení.
3. V PartCraft zvoľte {{ui:Otvoriť}} a vyberte tento súbor, alebo ho pustite na 3D pohľad.
4. S presným jadrom PartCraft súčiastku prebuduje prvok po prvku a ukáže, čo urobil: napríklad "5 z 5 prvkov prevzatých zo SolidWorks (Flange.SLDPRT)", každý prvok, ktorý nemohol prevziať ("Neprevzaté: Sweep1 (Sweep)."), a či objem zodpovedá tomu, ktorý zapísal SolidWorks.
5. Uložte ho ako súčiastku PartCraft pomocou {{ui:Uložiť}}.

Náčrty skončia na základnej rovine, ak na nej ležia, na zodpovedajúcej rovnej ploche súčiastky, ak tam nejaká je (takže nasledujú neskoršie úpravy), a inak na pevnej rovine. Hrany a plochy zaoblení, skosení a dutín sa nájdu z bodov a uchovajú sa ako pomenované referencie. Globálne premenné sa stanú parametrami (názvy s medzerami dostanú podčiarkovníky: "Bolt count" sa zmení na `Bolt_count`) a rovnice sa stanú rovnicami na tých istých kótach. Nič sa neodhaduje: čo nemá protiklad, sa vypíše.

Aplikácia na kreslenie CadCraft otvorí ten istý súbor a prevezme jeho náčrty.

:::note
Formát je `cadcraft-sw-export` verzia 1, čistý JSON v milimetroch a stupňoch. Súbor z novšieho makra alebo súbor, ktorý nie je platný, sa odmietne s uvedením dôvodu.
:::
