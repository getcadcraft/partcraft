---
title: 4- a 5-osové obrábanie
summary: Povedzte PartCraft, ktoré otočné osi má stroj, nakloňte nástroj pre ľubovoľnú bežnú operáciu, dokončite povrch guľovou frézou, ktorá sa pri rezaní nakláňa, alebo otáčajte súčiastku pod nástrojom na 4. osi. Čo sa zapisuje do G-kódu a čo nebolo overené.
keywords: 5 osí, päť osí, 4 osi, štvrtá os, viacosé, multiaxis, 3+2, indexované, polohové, naklonenie, naklonený nástroj, otočný, výklopný stôl, hlava, os A, os B, os C, TCP, RTCP, stred nástroja, G43.4, inverzný čas, G93, kinematika, pivot, swarf, uhol predsunutia
from: c4f1c491
---

Výroba dokáže držať nástroj pod uhlom a dokáže pohybovať otočnými osami počas rezania. Tri veci to robia, od najjednoduchšej po najzložitejšiu.

**Nič tu nebolo spustené na stroji.** Dráhy sú overené voči geometrii testami a G-kód sa číta späť, ale vstavané postprocesory nasledujú zdokumentované kódy riadiacich systémov, nie žiaden konkrétny stroj. Overte program v simulátore vášho riadiaceho systému a vo vzduchu, skôr než sa dostane ku kovu.

## Otočné osi stroja

Na karte **Nastavenie** hovorí {{ui:Otočné osi}}, čo stroj má:

| Voľba | Stroj |
|---|---|
| Žiadna (3 osi) | Obyčajná fréza. Každá operácia, ktorá potrebuje nástroj naklonený, upozorní a postprocesor ju nezapíše. |
| A (otáča okolo X) | Jedna otočná os pozdĺž X: 4. osový stôl alebo indexátor. Nástroj sa môže nakláňať len v rovine Y–Z. |
| B (otáča okolo Y) | Jedna otočná os pozdĺž Y. Nástroj sa môže nakláňať len v rovine X–Z. |
| A a C | Naklápacia os okolo X nesená, alebo nesúca, otočením okolo Z: výklopný stôl, alebo hlava. |
| B a C | To isté s naklápaním okolo Y. |

Potom:

- **Nesie**: {{ui:Stôl (súčiastka sa otáča)}} alebo {{ui:Hlava (nástroj sa otáča)}}. Stôl sa otáča opačným smerom, aby priviedol tú istú plochu pod nástroj, takže znamienko každého uhla z toho vyplýva.
- **Riadiaci systém udržiava hrot nástroja na dráhe (TCP)**: zapnuté, X Y Z v programe sú hrot nástroja v súradniciach samotnej súčiastky a riadiaci systém urobí zvyšok (vstavané postprocesory štýlu Fanuc a LinuxCNC zapisujú `G43.4` pre dĺžku nástroja). Vypnuté, na stole stroja PartCraft zapisuje X Y Z, keď otočný stôl nesie súčiastku, okolo **otočného stredu**, ktorý zadáte (v pracovných súradniciach; 0, 0, 0, keď je pracovný začiatok na strede). Stroj s hlavou potrebuje TCP zapnuté: bez neho by program potreboval dĺžku pivotu stroja, ktorú PartCraft nepozná.
- **Limit naklonenia**: ako ďaleko ide naklápacia os.

Stroje sa líšia v tom, ktorý smer považujú za kladný. Ak os na vašom stroji otáča zlým smerom, zmeňte znamienko v kópii postprocesora ([Postprocesory, ktoré môžete upraviť](topic:post-processors)).

## Naklonený nástroj pre bežnú operáciu

Každá frézovacia operácia ({{ui:Plocha}}, {{ui:Kapsa}}, {{ui:Adaptívne}}, {{ui:Kontúra}}, {{ui:Vŕtanie}}, {{ui:Skosenie}}, {{ui:Rovnobežnosť}}, {{ui:Hrebienkové}}, {{ui:3D hrubovanie}}, {{ui:Zvyšky}}) má **Naklonenie nástroja** a **Naklonenie smerom k**: smer nástroja pre túto jednu operáciu, merané od osi nástroja nastavenia. Toto je obrábanie 3+2: otočné osi prejdú do polohy a zostanú tam, kým tri osi režú.

- Zadajte dva uhly, alebo stlačte {{ui:Nástroj kolmo na plochu}} a kliknite na rovnú plochu: nástroj bude mieriť priamo na ňu.
- Vyberte plochy a hrany operácie ako obvykle. Čo sa počíta ako dno alebo otvor, sa posudzuje pozdĺž naklonenej osi nástroja.
- Polotovar pre tento smer je kváder, ktorý obsahuje otáčaný polotovar, takže výšky a odstupy sú bezpečné z tej strany.

V G-kóde sa pred operáciou nástroj zdvihne, otočné osi sa otočia a nástroj zostúpi nad svoj prvý bod. Na stole stroja bez TCP ostávajú oblúky oblúkmi a pevné cykly vŕtania cyklami (zapísaný rámec je otočený len okolo Z). S TCP v naklonenej rovine sa oblúky zmenia na krátke čiary a cykly na pohyby, ktoré predstavujú.

Simulácia polotovaru spúšťa naklonený smer **samostatne**: ukazuje, čo táto operácia reže z celého polotovaru pozorovaného z jej strany, a nájde tam zarezania, ale rezy urobené z iných smerov sa neprenášajú.

## 5-osové dokončovanie

{{ui:Viac}} na paneli Výroba uvádza túto operáciu a nasledujúcu na vrchu karty **Operácie**.

{{ui:5-osové}} je [rovnobežný dokončovací prechod](topic:finish-3d) s **guľovou frézou, ktorá sa pri pohybe nakláňa**. Guľa reže guľovým povrchom a ten je rovnaký, nech sa nástroj nakláňa okolo svojho stredu akokoľvek, takže guľa presne nasleduje dráhu, ktorú by dal trojosový prechod, a mení sa len smer nástroja:

- **Smerom k povrchu**: 1 = kolmo na povrch, 0 = zvisle, čokoľvek medzi tým.
- **Naklonenie dopredu**: stupne v smere rezu, aby nerezal nehybný stred gule.
- **Najväčšie naklonenie**: nástroj sa nikdy nenakloní ďalej než toto od osi nastavenia.

Kde by stopka dotýkala model, naklonenie sa zníži, až kým nie je voľná, a operácia povie, v koľkých bodoch to bolo. Každý prechod sa vstupuje a opúšťa priamym zdvihom.

## Dokončovanie otočnou osou (4. os)

{{ui:Otočné}} slúži pre súčiastku upnutú pozdĺž **pracovnej X** na otočnej osi. Súčiastka sa otáča a guľová fréza, vždy mieriaca na os, nasleduje jej povrch:

- **Prechody**: {{ui:Pozdĺž osi}} (čiary pozdĺž X, jeden priečny krok otáčania od seba) alebo {{ui:Okolo súčiastky}} (kruhy, jeden priečny krok X od seba).
- **Os pri Y / Z**: kde os je. Prázdne znamená stred polotovaru. Na stole stroja bez TCP musí byť toto otočný stred v Nastavení; operácia upozorní, keď nie je.
- **Od / Do X** a **Od / Do uhla**: časť dĺžky a otočenia, ktorá sa má rezať.

Výška gule nad osou v každom bode je presný pokles gule na sieti súčiastky z tej strany.

## Obmedzenia

- 5-osové a otočné dokončovanie berie len **guľovú frézu**. Nie je tu rezanie swarf (bok nástroja na priamkovej stene), žiadne prúdové čiary pozdĺž vlastných smerov plochy, žiadne viacosé hrubovanie a žiadna automatická voľba naklonenia na zabránenie kolízii.
- Dráhy 5-osové a otočné sa nespúšťajú cez simuláciu polotovaru, ktorá je výškovou mapou a nedokáže zobraziť nakláňaný rez.
- Stopka sa pri 5-osovom dokončovaní kontroluje voči modelu pozorovanému zhora; držiak, vreteno a sám stroj sa nikde nekontrolujú.
- Otočné dokončovanie reže len to, čo nástroj vidí pri pohľade na os.
- 5-osové dokončovanie sa na veľkej súčiastke počíta minútu alebo viac: stopka sa kontroluje v každom bode každého prechodu.
- Keď sa otočné osi pohybujú spolu s lineárnymi a TCP je vypnuté, vstavané postprocesory zapíšu posuv ako inverzný čas (`G93`) a potom sa vrátia na `G94`.
- Nezapisuje sa kód naklonenej pracovnej roviny (`G68.2` a podobne) a nie sú známe obmedzenia špecifické pre stroj, odvíjanie ani zóny kolízií.
