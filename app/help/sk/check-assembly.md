---
title: Kontrola zostavy na kolízie a pohyb
summary: Nájdite prekrývajúce sa súčiastky pomocou Kolízie, sledujte pohyb potiahnutím ľubovoľnej hodnoty kĺbu a prejdite kĺb celým rozsahom, aby ste zistili, kde sa súčiastky zrážajú.
keywords: interferencia, zisťovanie interferencie, kolízia, zrážka, prekrytie, zhoda závitu, nesúlad hĺbky závitu, dotykové plochy, skryť, filter, pohyb, štúdia pohybu, prechod, rozsah pohybu, kontrola
from: 9c98db46
---

Dve kontroly bežia na súčiastkach tak, ako sú umiestnené: **Kolízia** hľadá prekrývajúci sa materiál práve teraz a **kontrola pohybu** prejde jedným kĺbom celým jeho rozsahom a hľadá prekrytia po ceste.

## Kontrola interferencie

1. Otvorte alebo vytvorte zostavu (pozri [Vytvorenie zostavy s kĺbmi](topic:build-assembly)).
2. Vyberte {{ui:Kolízia}}.

Stavový riadok zobrazí výsledok:

- "Žiadna interferencia medzi 3 súčiastkami (… ms)." Nič sa neprekrýva.
- "Interferencia: Flange1 a Flange2: Prekrytie, 2.5 mm³." Každá dvojica, aký druh výsledku to je a objem, ktorý zdieľajú.

Políčko **Zostava** vľavo zobrazí **Interferencia**: "Žiadna", "2 výsledky" (zobrazené), alebo "Neskontrolované". Ak nič nie je vybrané, pravý panel vypíše každý výsledok v časti **Interferencia**.

Výsledok sa vymaže vždy, keď sa zostava zmení. Po presunutí kĺbu spustite {{ui:Kolízia}} znova. Každá dvojica súčiastok sa kontroluje voči každej inej, takže veľké zostavy trvajú dlhšie.

### Druhy výsledkov

| Druh | Význam |
|---|---|
| **Prekrytie** | Súčiastky zdieľajú objem: skutočná kolízia. |
| **Nesúlad hĺbky závitu** | Zdieľaný objem je vo vnútri závitu jednej súčiastky, ale za závitom druhej: skrutka so závitom hlbším ako jej otvor, alebo hladká driekovina v závitovom otvore. |
| **Zhoda závitu (kozmetické závity)** | Zdieľaný objem je vo vnútri závitov oboch súčiastok: skrutka v závitovom otvore. Kozmetické závity sa kreslia v plnej veľkosti závitu, takže sa vždy trochu prekrývajú. |
| **Dotykové plochy** | Žiadny zdieľaný objem, ale plochy sa dotýkajú (do 0.001 mm). |

Modelované závity (pozri [Závity na hriadeľoch a dierach, nakreslené alebo modelované](topic:threads)) sú skutočná geometria: to, čo zdieľajú, je **Prekrytie**.

### Skrytie toho, čo nepotrebujete vidieť

V časti **Interferencia** má **Zobraziť** políčko pre každý druh: zrušte označenie **Zhoda závitu** a **Dotykové plochy**, aby ste videli len kolízie, na ktorých záleží. **Skryť túto dvojicu** vedľa výsledku skryje túto dvojicu súčiastok bez ohľadu na druh. Skryté výsledky sa počítajú ("2 výsledky skryté týmito filtrami") a **Znova zobraziť skryté dvojice** ich vráti. Stavový riadok počíta aj skryté výsledky.

Filtre sa ukladajú so zostavou a každá zmena je jeden krok {{key:Mod+Z}}. **Prechod kĺbom kvôli kolíziám** (nižšie) ich používa tiež. Zostava s filtrami sa ukladá ako verzia 4; staršie verzie PartCraft ju odmietnu otvoriť, namiesto aby stratili filtre.

## Sledovanie pohybu

1. Vyberte kĺb, ktorý sa hýbe (ktorýkoľvek okrem tuhého), v zozname vľavo.
2. Potiahnite posuvník pod jednou z jeho hodnôt, napríklad **Uhol (°)** alebo **Posunutie (mm)**. Súčiastka sa pohybuje spolu s ťahaním.
3. Pustite. Nová poloha sa zachová a dá sa vrátiť pomocou {{key:Mod+Z}}.

Uhol alebo posunutie môžete zadať aj priamo do poľa a stlačiť {{key:Enter}}.

Kĺb na uzavretej slučke (mechanizme) posúva celú slučku: hodnota, ktorú potiahnete, sa zachová a ostatné kĺby slučky ju nasledujú (pozri [Uzavreté slučky](topic:build-assembly#closed-loops-linkages)).

## Prechod kĺbom kvôli kolíziám

1. Vyberte kĺb, ktorý sa hýbe.
2. Pri kĺbe s viacerými hodnotami (valcový, rovinný, guľový, kolík v drážke) vyberte v **Kontrola pohybov** tú, ktorú chcete prejsť.
3. Vyberte {{ui:Skontrolovať pohyb na kolízie}}.

PartCraft posunie túto hodnotu cez 25 polôh v 24 rovnakých krokoch, ostatné ostanú nezmenené: uhol od −180° do 180° (náklon od −90° do 90°), dĺžka od mínusu do plusu veľkosti najväčšej súčiastky. Oznámi:

- "Nikde nie je kolízia pre Uhol (°) od -180 do 180 (skontrolovaných 25 polôh)."
- "6 z 25 polôh má kolíziu, prvá pri Uhol (°) 45 (12.4 mm³)." Prvá poloha s kolíziou a prekrytie v nej.

Tlačidlo je pri tuhých kĺboch sivé, pretože sa nehýbu. Prechod kontroluje len polohy, nie cestu medzi nimi: tenká súčiastka by mohla medzi dvoma krokmi preniknúť cez inú.

:::note
Kontakt a gravitácia zatiaľ nie sú hotové. Bez limitov prechod pokrýva celý rozsah; ak hodnote priradíte **Limity** (pozri [Zoznam súčiastok, rozložené zobrazenia a pohyb súčiastok](topic:assembly-bom-explode)), prechod pokryje len tento rozsah, takže pánt, ktorý sa otvára o 90°, sa kontroluje na 90°.
:::

## Štúdia pohybu

**Zostava › Pohyb** poháňa hodnotu jedného kĺbu od začiatku do konca v čase, ktorý zadáte (konštantná rýchlosť, plynulá, sínusová alebo tam a späť), umiestňuje zostavu v každom kroku s jej kĺbmi a uzavretými slučkami a hlási, aké kolízie nastanú a ako blízko sa súčiastky dostanú. **Pridať bod** sleduje stred súčiastky alebo bod, na ktorý kliknete, a karta vykreslí jeho polohu, rýchlosť a zrýchlenie, hodnotu kĺbu a vôľu v čase; **Uložiť CSV** a **Uložiť graf** ich zapíšu. Rýchlosť a zrýchlenie sa počítajú zo zaznamenaných polôh, takže ostrý vrchol medzi krokmi sa zobrazí ako nízky: použite viac krokov.

Po **Spustiť** lišta **Prechádzať behom** presunie zostavu na ľubovoľný krok (čas, hodnota a to, či sa tam súčiastky zrážajú, sú zobrazené vedľa nej); kĺb si ponechá svoju hodnotu a **Späť na model** vráti zostavu na miesto. Nastavenia štúdie sa ukladajú v súbore zostavy; jej výsledky znova vytvorí **Spustiť**.

## Štúdia kontaktu

**Zostava › Kontakt** ukazuje, ako zostava prenáša zaťaženie tam, kde súčiastky na seba tlačia. Každá súčiastka prináša svoje podpery, zaťaženia a materiál z vlastnej štúdie **Simulácia** (pevná plocha na jednej súčiastke, sila na inej); tu vyberiete dvojice. **Pridať dvojicu**, potom **Vybrať stranu A** a kliknite na plochy jednej súčiastky, **Vybrať stranu B** a kliknite na plochy inej súčiastky (kliknutie na vybranú plochu ju odoberie; Esc alebo **Hotovo** ukončí výber). Dvojica je **Bez trenia** (súčiastky tlačia, ale kĺzu) alebo **Spojená** (zostávajú spolu); faktor tuhosti určuje, ako silno kontakt odolá vnáraniu (20 je rozumný začiatok, 1000 pre tuhý oceľový zväzok).

**Riešiť** spustí zaťaženie po krokoch a zobrazí kontaktnú silu, najväčšie vnorenie, najväčší posun a najväčšie napätie. Súčiastka bez dvojice sa vynechá a karta to oznámi. Kontakt bez trenia nedrží súčiastku do strany: každej súčiastke dajte podperu vo vlastnej štúdii Simulácia, alebo ju spojte, inak sa kroky nemusia ustáliť. Dvojice a nastavenia sa ukladajú v súbore zostavy.

**Exportovať vstupný balík CalculiX** zapíše rovnaký model ako vstupný súbor CalculiX (.inp). CalculiX je samostatný program, ktorý nainštalujete a spustíte sami; **Čítať výsledky CalculiX (.frd)** potom načíta posuny späť na sieť tejto zostavy a odmietne súbor vytvorený pre inú sieť. Riešič tu podporuje plastické správanie, ale nie explicitnú dynamiku, a žiadna tu uvedená analýza nie je certifikovaná: nech inžinier overí všetko dôležité.
