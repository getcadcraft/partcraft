---
title: Ťahanie po dráhe, loft a úkos
summary: Ťahajte uzavretý profil po dráhe zo skíc kriviek alebo hrán modelu, vytvárajte loft cez rezy na rôznych rovinách a pridávajte úkos plochám; s možnosťami, presnými výsledkami a hláseniami.
keywords: ťahanie po dráhe, ťahaný výstupok, ťahaný výrez, rúra, dráha, loft, lofovaný výstupok, prelínanie rezov, priamkový, úkos, uhol úkosu, zužujúce sa plochy, neutrálna rovina, smer vytiahnutia, odlievanie
from: 9d637981
---

:::note
**V tejto verzii** ťahanie po dráhe a loft ešte nie sú hotové: potrebujú presné geometrické jadro, ktorého táto verzia PartCraft nemá. [Čo ešte nie je hotové](topic:not-built-yet) hovorí, čo robiť namiesto toho; sekcie Ťahanie po dráhe a Loft ich popisujú tak, ako fungujú s presným jadrom. **Úkos funguje** na rovných plochách: vytvára ho sieťové jadro s rovnakým výsledkom ako presné jadro.
:::

Všetky tri sú v ponuke {{ui:Viac}} skupiny Prvky (pozri [Sieťové jadro](topic:solid-kernels)). Každý môže pridať materiál, odobrať ho, ponechať iba prienik (**Prienik**) alebo vytvoriť **Nové teleso** (ťahanie po dráhe a loft: **Operácia** v paneli).

## Ťahanie po dráhe

Ťahanie po dráhe presúva uzavretý profil po dráhe: rúry, rukoväte, drôtené pružiny, koľajnice.

1. Nakreslite **dráhu** v jednom náčrte: úsečky a oblúky spojené koniec na koniec (alebo použite hrany modelu, pozri nižšie).
2. Nakreslite **profil** v inom náčrte, ktorého rovina prechádza jedným koncom dráhy, napríklad kružnicu na hornej rovine na začiatku dráhy nakreslenej na prednej rovine.
3. Vyberte náčrt profilu a zvoľte {{ui:Viac}}, potom {{ui:Ťahanie po dráhe}}. Najnovší iný náčrt sa stane dráhou.

V paneli:

| Nastavenie | Čo robí |
|---|---|
| **Dráha** | Označte náčrty, ktoré tvoria dráhu (viac náčrtov sa spojí koniec na koniec do jednej 3D dráhy); **Vybrať hrany modelu** pridá hrany súčiastky |
| **Orientácia** | Nasledovať dráhu (predvolené), Frenet, Pevná (rezy zostávajú rovnobežné s profilom), Zachovať smer, Pozdĺž vodiacej krivky |
| **Koncová mierka** | Profil sa lineárne zväčší alebo zmenší na túto veľkosť na konci (1 = konštantná) |

Ostré rohy na dráhe sa zrezávajú pod uhlom. Kružnica s polomerom 5, ťahaná po úsečke 100 mm, je valec s objemom presne 2500π mm³; pozdĺž štvrťoblúka s polomerom 50 je štvrtinový torus 625π² mm³.

## Loft

Loft prelína cez dva alebo viac rezov na rôznych rovinách.

1. Nakreslite každý rez v jeho vlastnom náčrte (jedna uzavretá slučka), na základných rovinách, referenčných rovinách (pozri [Referenčné roviny, osi a body](topic:reference-geometry)) alebo plochách.
2. Zvoľte {{ui:Viac}}, potom {{ui:Loft}}. Každý nepoužitý náčrt s jednou slučkou sa stane rezom v poradí histórie.

Panel vypisuje rezy v poradí (**Hore** mení poradie, **Odstrániť** jeden zruší); **Pridať náčrt** pridá ďalší, **Vybrať plochu** pridá rovnú plochu súčiastky. **Priamkový** vytvorí rovné plochy medzi rezmi namiesto hladkého prechodu. Medzi dvoma štvorcami sú oba režimy rovnaký zrezaný ihlan (štvorec 40 mm na štvorec 20 mm na dĺžke 30 mm: presne 28000 mm³).

Rezy s rôznym počtom strán (štvorec a trojuholník) sa spárujú pomocou OpenCascade, čo môže prekrútiť bočné plochy; prvok na to upozorní. Kreslite rezy s rovnakým počtom strán, začínajúc od zodpovedajúcich rohov, pre najčistejší výsledok.

### Vodiace koľajnice

Vodiace koľajnice sú krivky, ktoré musia bočné plochy lofu nasledovať od prvého rezu k poslednému, pre výduť, zúženie alebo rozšírenie, ktoré nakreslíte sami.

1. Nakreslite dve alebo viac koľajníc: otvorené krivky (úsečky, oblúky, spline), ktoré idú od prvého rezu k poslednému a pretnú každý rez raz. V jednom náčrte môže byť viac koľajníc: každý samostatný reťazec je vlastnou koľajnicou. Nakreslite koľajnicu tak, aby sa skutočne stretla s každým rezom: priľnite jej konce k bodom rezov.
2. V paneli Loft pod **Vodiace koľajnice** označte náčrty, ktoré ich obsahujú, alebo kliknite na {{ui:Vybrať hrany modelu ako vodiace krivky}} a kliknite na hrany súčiastky ({{key:Esc}} ukončí výber).

S koľajnicami je loft plochou Gordon cez rezy a koľajnice (pozri [Plochy cez sieť kriviek](topic:gordon-surfaces)), na koncoch zakončenou rovinne v teleso. Panel uvádza, ako presne ich nasleduje. Každý rez musí byť potom náčrt (bod ani plocha nemôžu niesť koľajnicu) a **Priamkový** sa neuplatňuje. Koľajnica, ktorá mine rez o viac ako 0.01 mm, sa odmietne s uvedením medzery.

Overené: dve kružnice (priemer 20 mm a 10 mm vo vzdialenosti 40 mm) so štyrmi priamymi koľajnicami dajú objem zrezaného kužeľa s odchýlkou do 0.000002 %; oblúky vyklenuté o 5 mm dajú sud, ktorý nasleduje každú koľajnicu do 0.00001 mm.

## Úkos

Úkos naklápa plochy, aby sa súčiastka dala vybrať z formy.

1. Zvoľte {{ui:Viac}}, potom {{ui:Úkos}} (alebo najprv {{key:Shift}}+klik na plochy). Ak nič nie je vybrané, ste v režime výberu: kliknite na každú plochu, ktorú chcete naklopiť, a potom {{ui:Hotovo}}.
2. Nastavte **Uhol (°)**, **Neutrálnu rovinu** (kde plochy zachovávajú svoju veľkosť) a **Smer vytiahnutia** (predvolene normála neutrálnej roviny).

Kladný uhol nakloní plochu dovnútra pozdĺž vytiahnutia a odoberie materiál; záporný ho pridá. Neutrálna rovina je spočiatku horná rovina. V tejto verzii sa dajú skosiť iba rovné plochy: valec, kužeľ alebo voľná plocha hlási „Úkos: v tejto verzii iba rovné plochy (vytvára ho sieťové jadro).“ Štyri strany bloku 100 × 100 × 50, skosené o 5° okolo spodku, sa stanú zrezaným ihlanom s presným objemom h/3·(a² + b² + ab), kde b = a − 2h·tan 5°.

## Hlásenia

| Hlásenie | Čo robiť |
|---|---|
| „Rovina profilu musí prechádzať jedným koncom dráhy …“ | Presuňte náčrt profilu na začiatok (alebo koniec) dráhy |
| „Dráha má medzeru: jej krivky sa nespájajú koniec na koniec …“ | Spojte krivky dráhy; v oddelených náčrtoch sa ich konce musia presne stretnúť |
| „Rez lofu potrebuje presne jednu uzavretú slučku“ | Rozdeľte náčrt alebo odstráňte prebytočnú slučku |
| „… nemožno skosiť okolo tejto neutrálnej roviny …“ | Plocha je rovnobežná s neutrálnou rovinou alebo ju nepretína |
| „Úkos: v tejto verzii iba rovné plochy (vytvára ho sieťové jadro).“ | Vybraná plocha je zakrivená. Odstráňte ju; skoste iba rovné plochy |

:::note
Ešte nie je hotové: krútené ťahanie po dráhe, ťahanie tenkých stien a plôch, koľajnice lofu a dotyčnicová väzba na konci, úkos na valcoch, kužeľoch a voľných plochách.
:::
