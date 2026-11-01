---
title: Začíname s PartCraft
summary: Čo PartCraft dnes robí, čo potrebuje Váš prehliadač a prvá súčiastka za desať minút, od náčrtu po uložený súbor.
keywords: začíname, prvé spustenie, rýchly štart, úvod, návod, prvá súčiastka, doska, parametrický, modelár súčiastok
from: 5f0a668d
---

PartCraft je parametrická aplikácia na súčiastky a zostavy z rodiny CadCraft. Nakreslíte 2D náčrt, zafixujete ho väzbami a kótami, premeníte ho na teleso prvkami ako vytiahnutie, rotačné teleso a otvor a ľubovoľné číslo môžete neskôr zmeniť: súčiastka sa prestaví z histórie. Súčiastky potom idú do zostáv, kde ich spoje umiestňujú a umožňujú skontrolovať pohyb.

Čo robí táto zostava:

| Úloha | Čo získate |
|---|---|
| Náčrty | Úsečky, obdĺžniky, kružnice, oblúky, body a osi, s väzbami a kótami, a živý stav: nedostatočne, plne alebo nadmerne definovaný |
| Prvky telies | Vytiahnutie, vyrezanie, rotačné teleso, rotačný výrez, jednoduché otvory a otvory so zahĺbením, lineárne a kruhové polia, zrkadlenie, zaoblenia a skosenia na priamych hranách medzi plochými plochami a škrupiny a úkosy na plochých plochách. Ťahanie po dráhe, loft a ďalšie prvky, ktoré potrebujú presné jadro, zatiaľ v tejto verzii nie sú hotové: pozrite [Čo ešte nie je hotové](topic:not-built-yet) |
| História | Úprava čísel každého prvku, potlačenie, vrátenie, zmena poradia a zmazanie, so späť |
| Zostavy | Súčiastky spojené pevnými, otočnými a posuvnými spojmi, kontrola kolízií a kontrola pohybu |
| Výkresy | List A3 s tromi pohľadmi, izometriou, rezom, detailom, celkovými rozmermi, základňami, rámcami tolerancií a symbolmi drsnosti povrchu, exportovaný ako PDF |
| Súbory | Vlastné súbory súčiastok a zostáv; STL, 3MF, fazetovaný STEP, DXF a PDF na výstupe |

Všetko beží vo Vašom prehliadači, vo Vašom počítači. **Nič sa nenahráva.** Kam súbory idú, pozrite v [Súbory: otvorenie, uloženie a export](topic:files).

## Čo potrebujete

- Aktuálny Chrome, Edge, Firefox alebo Safari so zapnutým **WebGL** (3D grafika) a **WebAssembly**. Obe sú predvolene zapnuté. Geometriu telies vytvára sieťové jadro vo WebAssembly, ktoré sa načíta s aplikáciou: pozrite [Sieťové jadro](topic:solid-kernels).
- Najjednoduchšia je myš. Funguje touchpad a dotykové obrazovky fungujú na prezeranie a jednoduché náčrty: pozrite [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
- Obrazovka široká aspoň 1280 pixelov ukazuje celý panel nástrojov v jednom riadku. Užšie okná posúvajú panel nástrojov do strán; na telefóne sa panely otvárajú ako listy z panela dole.

Viac o prehliadačoch: [Prehliadače a počítače](common:browsers).

:::note
PartCraft beží v prehliadači a na počítači v CadCraft Studio. Ukladanie do cloudu zatiaľ nie je k dispozícii: súčiastky otvárate zo svojho počítača a ukladáte ich naň späť ako súbory.
:::

## Otvorenie PartCraft

1. Otvorte PartCraft.
2. Počkajte, kým obrazovka hlási „Načítava sa jadro telies…“. Prvýkrát to chvíľu trvá.
3. Uvidíte prázdny 3D pohľad s tromi základnými rovinami, históriu vľavo („Súčiastka1“, potom Predná rovina, Horná rovina, Pravá rovina) a pole v pohľade s nadpisom „Začnite súčiastku“.
4. Čip blízko pravého konca stavového riadka hlási „Sieťové jadro“: PartCraft v tejto verzii vytvára každú súčiastku sieťovým jadrom, takže okrúhle plochy sú ploché fazety. Modelovať môžete hneď.

Ak pohľad hlási, že prehliadač nevie zobraziť 3D, alebo že sa jadro nenačítalo, pozrite [Riešenie problémov](topic:troubleshooting#the-app-does-not-start).

## Vaša prvá súčiastka: doska s otvorom

Vytvoríte dosku 60 × 40 mm, hrubú 10 mm, so skrz prechádzajúcim otvorom 6 mm. Jednotky sú milimetre.

### Nakreslenie obrysu

1. Kliknite na **Predná rovina** v histórii vľavo. Rovina sa v pohľade zvýrazní.
2. Vyberte {{ui:Náčrt}} na paneli nástrojov alebo stlačte {{key:S}}. Pohľad sa otočí priamo na rovinu a nástroj Úsečka je aktívny.
3. Stlačte {{key:R}} pre nástroj Obdĺžnik.
4. Presuňte ukazovateľ na počiatok (malý červený kruh s krížikom). Malý štvorec ukazuje, že sa prichytáva. Kliknite.
5. Presuňte sa nahor a doprava a kliknite znova. Máte obdĺžnik. Jeho čiary sú modré: modrá znamená, že sa ešte môžu pohybovať.

### Zadanie rozmerov

1. Stlačte {{key:D}} pre nástroj Kóta.
2. Kliknite na hornú čiaru, potom kliknite kúsok nad ňu. Otvorí sa pole s číslom s aktuálnou dĺžkou.
3. Napíšte `60` a stlačte {{key:Enter}}. Obdĺžnik sa zmení na 60 mm široký.
4. Kliknite na ľavú čiaru, potom kúsok vľavo od nej. Napíšte `40` a stlačte {{key:Enter}}.

Čip vľavo hore v pohľade teraz hlási **Plne definovaný** a čiary zčernejú (čierne v motíve Papier, svetlé v motíve Model). Každý bod a rozmer je pevný.

:::tip
Ak ste obdĺžnik začali mimo počiatku, čip stále hlási „Nedostatočne definovaný (2 stupňov voľnosti)“. Stlačte {{key:S}} pre Vybrať, kliknite na jeden roh, {{key:Shift}}+kliknite na počiatok, potom vyberte {{ui:• Zhodnosť}} v pravom paneli.
:::

### Vytiahnutie

1. Vyberte {{ui:Ukončiť}} na paneli nástrojov alebo stláčajte {{key:Esc}}, kým sa náčrt nezavrie (zvyčajne dvakrát).
2. Vyberte {{ui:Vytiahnuť}}. Objaví sa 10 mm teleso. „Extrude1“ sa pridá do histórie, s „Sketch1“ odsadeným pod ním.
3. Pravý panel ukazuje nastavenia vytiahnutia. Ak chcete zmeniť hrúbku, napíšte nové číslo do **Hĺbka (mm)** a stlačte {{key:Enter}} alebo {{key:Tab}}. Súčiastka sa okamžite prestaví.

### Pridanie otvoru

1. Kliknite na veľkú plochú plochu v prednej časti dosky (koniec vytiahnutia). Celá plocha sa zvýrazní a pravý panel hlási **Plocha**.
2. Vyberte {{ui:Náčrt na tejto ploche}} v pravom paneli.
3. Stlačte {{key:P}} pre nástroj Bod a kliknite blízko stredu plochy.
4. Vyberte {{ui:Ukončiť}}.
5. Vyberte {{ui:Otvor}}. Doskou prejde otvor 6 mm. Ak chcete, zmeňte **Priemer (mm)** v pravom paneli.

Pole **Súčiastka** vľavo dole teraz ukazuje objem, povrchovú plochu, rozmer (60 × 40 × 10 mm) a „Priechodné otvory: 1“.

### Uloženie

1. Stlačte {{key:Mod+S}} alebo vyberte {{ui:Uložiť}}.
2. Prehliadač stiahne `Part1.partcraft.json` do priečinka so stiahnutými súbormi. Súbor obsahuje celú históriu: znova ho otvorte pomocou {{ui:Otvoriť}} a pokračujte v úpravách.

Ak chcete súčiastku najprv premenovať, kliknite na prázdne miesto v pohľade, aby nebolo nič vybrané, a napíšte nový **Názov** v pravom paneli.

## Kam ďalej

- [Nakreslenie prvého náčrtu](topic:sketch-basics) a [Plné definovanie náčrtu](topic:relations-dimensions) vysvetľujú náčrtník poriadne.
- [Zmena súčiastky cez jej históriu](topic:edit-history) ukazuje, ako upravovať to, čo ste vytvorili.
- [Zaoblenie, skosenie a vydlabanie](topic:fillet-chamfer-shell) a [Vytvorenie výkresu](topic:drawing-pdf) súčiastku dokončia. [Čo ešte nie je hotové](topic:not-built-yet) uvádza, čo táto verzia nerobí, napríklad ťahanie po dráhe a loft.
- [Ak prichádzate z iného parametrického modelára](topic:coming-from) uvádza návyky, ktoré tu fungujú inak.
- [Klávesy a myš](topic:keyboard) je úplný zoznam skratiek.
- [Používanie tohto pomocníka](common:help).
