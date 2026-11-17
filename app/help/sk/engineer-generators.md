---
title: Súčiastky z fyziky: generátory
summary: Pracovné prostredie Engineer a prvok Generované teleso: vyberte generátor, nastavte jeho vstupy (prietok, tlak, teploty, materiál, tlačiareň) a získajte súčiastku dimenzovanú podľa učebnicových vzorcov, s jej technickým listom, výrobnými kontrolami a súbormi pre analytické nástroje. Rovnaké vstupy vždy dajú rovnakú súčiastku.
keywords: engineer, generátor, generované teleso, fyzika, pravidlá, výmenník tepla, rozdeľovač, hrdlo, mriežka, gyroid, technický list, vstupy, deterministický, rovnaké vstupy rovnaká súčiastka, výrobné kontroly, 3D tlač, práškové lôžko
from: 5a387dc0
---

**Generátor** je skript, ktorý dimenzuje súčiastku podľa vašich požiadaviek a vytvorí ju. Generátor výmenníka tepla vezme teplo na prenos, dva prietoky a ich teploty, tlak a materiál; vypočíta, aké veľké musí byť jadro a aká hrubá jeho stena, vytvorí ho a povie vám čísla, ktoré použil, a odkiaľ každé pochádza. Zmeňte vstup a súčiastka sa zmení s ním.

Výsledok je bežné teleso v súčiastke: je v zozname prvkov, dá sa vytlačiť a exportovať. Samotný generátor sa uchováva aj v súčiastke, takže súbor sa otvorí na ľubovoľnom počítači bez nainštalovaného generátora, a **otvorenie súčiastky nikdy nespustí skript**.

## Vytvorenie telesa

1. Vyberte pracovné prostredie {{ui:Engineer}} v prepínači.
2. Vyberte generátor v zozname (tie, ktoré sú súčasťou PartCraft, a potom tie, ktoré ste otvorili zo súboru) a kliknite na {{ui:Nový}}.
3. Skript sa spustí. Keď skončí, teleso je v zobrazení a panel zobrazuje jeho vstupy, jeho **technický list** a jeho **kontroly**.

Môžete ho pridať aj z Návrhu: {{ui:Prvky}} › {{ui:Viac}} › {{ui:Generované teleso}}.

## Zmena telesa

Zmeňte ľubovoľný vstup a teleso sa vytvorí znovu chvíľu po tom, ako prestanete písať. Panel hovorí, ktorá z troch vecí platí:

- **Aktuálne**: teleso zodpovedá skriptu a jeho vstupom.
- **Vstupy sa zmenili**: teleso v súčiastke je z predchádzajúcich vstupov; vytvára sa znovu, alebo stlačte {{ui:Spustiť}}.
- **Ešte nespustené** alebo **Posledné spustenie zlyhalo**: zobrazí sa chyba skriptu s jej riadkom.

{{ui:Zastaviť}} ukončí beh, ktorý trvá príliš dlho. Späť ide krok po kroku: beh je jeden krok, vstup je jeden krok.

## Technický list

Každé číslo, ktoré generátor vypočítal, je uvedené s jeho **jednotkou** a **odkiaľ pochádza** (učebnicová rovnica, norma, technický list). Nič nie je skrytá konštanta. List je súčasťou súboru, takže je rovnaký na ďalšom počítači. [Export dát](topic:data-out) vysvetľuje, ako ho uložiť ako JSON alebo PDF.

## Kontroly

Generátor dokáže skontrolovať svoju súčiastku voči výrobnému procesu tlače: steny a medzery tenšie, než proces zvládne, voľné kúsky, dutiny, ktoré zachytia prášok alebo živicu, otvory príliš úzke na jeho vyčistenie a previsy, ktoré potrebujú podporu. Zistenia sú v paneli a v zozname {{ui:Problémy}} (tlačidlo ⚠) a uložia sa so súčiastkou.

Hodnoty procesu sú zaokrúhlené čísla, ktoré verejné konštrukčné príručky uvádzajú pre proces všeobecne (FDM, SLA, SLS, kovové práškové lôžko). **Nie sú to špecifikácie vášho stroja**: pred spoliehaním sa na kontrolu ich nahraďte hodnotami vašej dielne. Kontrola pracuje na mriežke voxelov, takže je presná približne na jeden voxel: stena sa hlási iba vtedy, keď je tenšia než limit o viac ako jeden voxel.

## Čo je súčasťou

| Generátor | Čo vytvára |
|---|---|
| Gyroidný blok | Blok vyplnený gyroidom, Schwarz P alebo diamantovou plochou: najjednoduchšia mriežka |
| Gyroidný výmenník tepla | Jadro dvojtekutinového výmenníka, dimenzované z výkonu metódou účinnosti-NTU, jeho stena podľa tlaku; dokáže skontrolovať tlakovú stratu prúdovou štúdiou jednej bunky |
| Rozvodný rozdeľovač | Hlavný rozvod a odbočky, každá trubica dimenzovaná podľa prietoku, ktorý nesie |
| Gradovaný mriežkový nosník | Mriežka, ktorej stena zhrubne tam, kde topologická optimalizácia uvádza, že je potrebný materiál |

Všetky sú prvé odhady postavené na učebnicových vzorcoch. [Inžinierska knižnica](topic:engineering-library) uvádza vzorce a ich obmedzenia. Pred spoliehaním sa na výsledok spustite na ňom Simuláciu, Tepelnú analýzu alebo Prietok.

## Exportné kontroly

Generátory a technické listy Engineer nesú oznámenie o exportných kontrolách a sankciách. Prečítajte si ho v [Engineer a exportné kontroly](topic:engineer-export-notice); je tiež na konci každého technického listu.

## Ešte nie je hotové

- Hlavy, prípojky a armatúry na jadre výmenníka tepla: je to iba jadro.
- Teplotné krivky pevnosti materiálov: materiály sú pri izbovej teplote.
- Straty v odbočke a delenie prietoku medzi výstupmi rozdeľovača.
- Pridávanie generátorov z adresára doplnkov jedným kliknutím; otvorenie súboru pridá jeden do tohto prehliadača.
- Generátory pre ostatné aplikácie.
