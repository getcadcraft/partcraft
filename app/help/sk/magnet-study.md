---
title: Magnetická štúdia náčrtu
summary: Premeňte uzavreté profily vašich náčrtov na rovinný magnetický model (železo, magnety, cievky), pozrite si pole a prečítajte silu a moment na telese.
keywords: magnet, magnetický, magnetostatický, pole, hustota toku, sila, moment, cievka, jarmo, železo, krivka B–H, trvalý magnet, aktuátor, motor, solenoid, maxwell
from: 604efc3b
---

Na súčiastke, ktorá má náčrty, použite {{ui:Viac}} na paneli Prvky › {{ui:Magnetická štúdia náčrtov…}}. Každý uzavretý tvar v náčrtoch, ktoré označíte, je jedna oblasť rovinného modelu; štúdia vypočíta magnetické pole B, silu a moment na telese, ktoré zvolíte.

## Postup

1. Nakreslite telesá ako uzavreté tvary v náčrtoch: železné jarmo, magnet, cievku. Telesá, ktoré sa dotýkajú, zdieľajú hranu, takže ich dajte do rôznych náčrtov; telesá, ktoré stoja osobitne, alebo sú vnútri seba (okno v jarme), môžu byť v jednom. Náčrty nechajte na tej istej rovine.
2. Otvorte štúdiu a označte náčrty, ktoré sa majú použiť. Každý uzavretý profil dostane očíslovaný riadok. Určte, čo to je: {{ui:Vzduch}}, {{ui:Železo}} (permeabilita, alebo krivka B–H zadaná ako dvojice B v teslách a H v A/m), {{ui:Trvalý magnet}} (Br v teslách, jeho smer ako uhol od osi x náčrtu a jeho spätná permeabilita), alebo {{ui:Cievka}} (celkový prúd cez jej profil, počet závitov krát ampéry; znamienko hovorí, ktorým smerom tečie).
3. Označte {{ui:Sila a moment na tomto telese}} pre telesá, na ktorých ich chcete. Zadajte hĺbku súčiastky mimo náčrtu.
4. Zvoľte sieť a vzduch okolo modelu, potom {{ui:Spustiť}}.

## Čo uvidíte

- Hustotu toku |B| nad modelom, od tmavomodrej pri nízkej po červenú pri vysokej, s očíslovanými profilmi.
- Najsilnejšie pole a kde je, počet trojuholníkov a pre každé označené teleso silu pozdĺž x a y a moment okolo jeho stredu, pre hĺbku, ktorú ste zadali.
- {{ui:Uložiť výsledky (CSV)}} zapíše čísla.

## Dobré vedieť

- Je to plochý, ustálený model: všetko je na meter hĺbky, bez vírivých prúdov a bez hysterézy; magnet je priama spätná čiara (nedá sa odmagnetizovať).
- Model je v boxe vzduchu, ktorého hrana je stena. Porovnajte dve veľkosti vzduchového boxu a siete Normálna a Jemná: sila odvodená z poľa okolo telesa je taká dobrá, ako je tam sieť.
- Železo len s permeabilitou nikdy nesaturuje. Keď pole prekročí 2 T, štúdia zobrazí ⚠ v zozname Problémy: zadajte železu krivku B–H. Čísla v novom riadku sú príklady (železo μr 2000, magnet 1.2 T), nie údaje z katalógu materiálu.
- Teleso potrebuje okolo seba priestor, aby prevzalo silu: ak je iné teleso príliš blízko, štúdia to oznámi.
- Pomôcka pri kreslení, nie inžinierske schválenie.

## Ďalej

- [Magnetické polia v 2D (návod)](topic:magnetic-fields-2d)
