---
title: Díly z fyziky: generátory
summary: Pracovní prostor Engineer a prvek Generované těleso: vyberte generátor, nastavte jeho vstupy (průtok, tlak, teploty, materiál, tiskárnu) a získejte díl dimenzovaný podle učebnicových vzorců, s jeho datovým listem, kontrolami výroby a soubory pro analytické nástroje. Stejné vstupy vždy dají stejný díl.
keywords: engineer, generátor, generované těleso, fyzika, pravidla, výměník tepla, rozdělovač, tryska, mřížka, giroid, datový list, vstupy, deterministický, stejné vstupy stejný díl, kontroly výroby, 3D tisk, práškové lože
from: 5a387dc0
---

**Generátor** je skript, který dimenzuje díl podle vašich požadavků a postaví jej. Generátor výměníku tepla vezme teplo k přenesení, dva průtoky a jejich teploty, tlak a materiál; spočítá, jak velké musí být jádro a jak tlustá jeho stěna, postaví jej a řekne vám čísla, která použil, a odkud každé pochází. Změníte vstup a díl jej následuje.

Výsledkem je běžné těleso v dílu: je v seznamu prvků, tiskne se, exportuje se. Samotný generátor je uložen také v dílu, takže soubor se otevře na libovolném počítači bez nainstalovaného generátoru, a **otevření dílu nikdy nespustí skript**.

## Vytvořte těleso

1. V přepínači pracovních prostorů vyberte {{ui:Engineer}}.
2. Vyberte generátor v seznamu (ty, které se dodávají s PartCraftem, a pak ty, které jste otevřeli ze souboru) a klikněte na {{ui:Nový}}.
3. Skript se spustí. Po dokončení je těleso ve výhledu a panel ukazuje jeho vstupy, jeho **datový list** a jeho **kontroly**.

Můžete jej také přidat z Designu: {{ui:Prvky}} › {{ui:Více}} › {{ui:Generované těleso}}.

## Změňte jej

Změňte jakýkoli vstup a těleso se znovu vytvoří krátce poté, co přestanete psát. Panel říká, která z tří věcí platí:

- **Aktuální**: těleso odpovídá skriptu a jeho vstupům.
- **Vstupy se změnily**: těleso v dílu pochází z předchozích vstupů; vytváří se znovu, nebo stiskněte {{ui:Spustit}}.
- **Ještě nespuštěno** nebo **Poslední spuštění selhalo**: je zobrazena chyba skriptu s jejím řádkem.

{{ui:Zastavit}} ukončí běh, který trvá příliš dlouho. {{ui:Zpět}} vrací krok po kroku: jeden běh je jeden krok, jeden vstup je jeden krok.

## Datový list

Každé číslo, které generátor spočítal, je uvedeno s jeho **jednotkou** a **odkud pochází** (učebnicová rovnice, norma, datový list). Nic není skrytá konstanta. Datový list je součástí souboru, takže je na dalším počítači stejný. [Výstup dat](topic:data-out) popisuje, jak jej uložit jako JSON nebo PDF.

## Kontroly

Generátor může zkontrolovat svůj díl proti výrobnímu procesu tisku: stěny a mezery tenčí, než proces udrží, volné kusy, dutiny, které zachytí prášek nebo pryskyřici, otvory příliš úzké na jejich vyčištění, a převisy, které potřebují podporu. Zjištění jsou v panelu a v seznamu {{ui:Problémy}} (tlačítko ⚠) a jsou uložena s dílem.

Výrobní údaje jsou zaokrouhlené hodnoty, které veřejné návrhové příručky uvádějí pro daný proces obecně (FDM, SLA, SLS, kovové práškové lože). **Nejsou to specifikace vašeho stroje**: před spoléháním na kontrolu je nahraďte údaji vaší dílny. Kontrola pracuje na mřížce voxelů, takže je přesná zhruba na jeden voxel: stěna je hlášena jen tehdy, je-li tenčí než limit o více než jeden voxel.

## Co se dodává

| Generátor | Co vytváří |
|---|---|
| Giroidový blok | Blok vyplněný giroidem, Schwarzovou P nebo diamantovou plochou: nejjednodušší mřížka |
| Giroidní výměník tepla | Jádro výměníku se dvěma kapalinami, dimenzované podle výkonu metodou účinnosti a NTU, jeho stěna podle tlaku; může zkontrolovat tlakovou ztrátu studií proudění na jedné buňce |
| Rozdělovací sběrné potrubí | Hlavní potrubí a odbočky, každá trubka dimenzovaná podle průtoku, který nese |
| Stupňovaný mřížkový nosník | Mřížka, jejíž stěna ztlušťuje tam, kde optimalizace topologie říká, že je třeba materiál |

Všechny jsou první odhady postavené na učebnicových vzorcích. [Inženýrská knihovna](topic:engineering-library) uvádí vzorce a jejich meze. Před spoléháním na výsledek na něm spusťte Simulaci, Tepelnou nebo Průtokovou analýzu.

## Kontroly exportu

Generátory a datové listy Engineeru nesou oznámení o kontrolách exportu a sankcích. Přečtěte si je v [Engineer a kontroly exportu](topic:engineer-export-notice); je také na konci každého datového listu.

## Ještě není hotovo

- Hlavy, přípojky a armatury na jádru výměníku: je to pouze jádro.
- Teplotní křivky pevnosti materiálu: materiály jsou při pokojové teplotě.
- Ztráty v T-kusu a rozdělení průtoku mezi výstupy ve sběrném potrubí.
- Přidání generátorů z adresáře doplňků jedním kliknutím; otevření souboru přidá jeden do tohoto prohlížeče.
- Generátory pro ostatní aplikace.
