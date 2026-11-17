---
title: Začíname s PartCraft
summary: Čo PartCraft dnes robí, čo potrebuje váš prehliadač a prvá súčiastka za desať minút, od náčrtu po uložený súbor.
keywords: začíname, prvé spustenie, rýchly štart, úvod, výukový návod, prvá súčiastka, doska, parametrický, modelár súčiastok
from: 7d43283f
---

PartCraft je aplikácia pre parametrické súčiastky a zostavy v rodine CadCraft. Nakreslíte 2D náčrt, zafixujete ho vzťahmi a kótami, premeníte ho na teleso pomocou prvkov ako vytiahnutie, rotačné teleso a otvor a neskôr zmeníte ľubovoľné číslo: súčiastka sa prestaví podľa svojej histórie. Súčiastky potom vstupujú do zostáv, kde ich spoje umiestnia a umožnia skontrolovať pohyb.

Čo táto verzia robí:

| Úloha | Čo získate |
|---|---|
| Náčrty | Úsečky, obdĺžniky, kružnice, oblúky, body a osové čiary, so vzťahmi a kótami a živým stavom: nedourčený, úplne dourčený alebo preurčený |
| Prvky telesa | Vytiahnutie, vyrezanie, rotačné teleso, rotačné vyrezanie, jednoduché a zapustené otvory, lineárne a kruhové polia, zrkadlenie, zaoblenia a zrazenia na priamych hranách medzi rovinnými plochami, a škrupiny a sklony na rovinných plochách. Ťahanie po dráhe, lofty a ďalšie prvky, ktoré vyžadujú presné jadro, zatiaľ nie sú v tejto verzii hotové: pozri [Čo ešte nie je hotové](topic:not-built-yet) |
| História | Upravíte čísla ľubovoľného prvku, dočasne ho vypnete (potlačíte), vrátite históriu späť, zmeníte poradie a zmažete ho, s možnosťou späť |
| Zostavy | Súčiastky spojené tuhými, rotačnými a posuvnými spojmi, kontrola kolízií a kontrola pohybu |
| Výkresy | List A3 s tromi pohľadmi, izometriou, rezom, detailným pohľadom, celkovými rozmermi, referenčnými základňami, rámami tolerancií prvkov a symbolmi drsnosti povrchu, exportovaný ako PDF |
| Súbory | Vlastné súbory súčiastok a zostáv; výstup STL, 3MF, presný STEP, DXF a PDF |

Všetko beží vo vašom prehliadači, na vašom počítači. **Nič sa nenahráva.** Pozri [Súbory: otvorenie, uloženie a export](topic:files), kam sa súbory ukladajú.

## Čo potrebujete

- Aktuálny Chrome, Edge, Firefox alebo Safari so zapnutým **WebGL** (3D grafika) a **WebAssembly**. Obe sú štandardne zapnuté. Geometriu telies zostavuje jadro siete WebAssembly, ktoré sa načíta spolu s aplikáciou: pozri [Jadro siete](topic:solid-kernels).
- Najjednoduchšia je myš. Touchpad funguje a dotykové obrazovky fungujú na prezeranie a jednoduché náčrty: pozri [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
- Obrazovka široká aspoň 1280 pixelov zobrazí celý panel nástrojov v jednom riadku. Užšie okná posúvajú panel nástrojov do strany; na telefóne sa panely otvárajú ako listy z lišty dole.

Viac o prehliadačoch: [Prehliadače a počítače](common:browsers).

:::note
PartCraft beží v prehliadači a na počítači vnútri CadCraft Studio. Ukladanie do cloudu zatiaľ nie je dostupné: súčiastky otvárate z počítača a ukladáte ich späť ako súbory.
:::

## Otvorenie PartCraft

1. Otvorte PartCraft.
2. Počkajte, kým obrazovka zobrazí „Načítavanie jadra telies…“. Prvýkrát to chvíľu trvá.
3. Uvidíte prázdny 3D pohľad s tromi základnými rovinami, históriu vľavo („Part1“, potom Predná rovina, Horná rovina, Pravá rovina) a kváder v pohľade s nadpisom „Začnite súčiastku“.
4. Čip na pravom konci stavového riadku hovorí „Jadro siete“: PartCraft v tejto verzii zostavuje každú súčiastku s jadrom siete, takže okrúhle plochy sú ploché fasety. Môžete hneď začať modelovať.

Ak pohľad hovorí, že prehliadač nedokáže zobraziť 3D, alebo sa jadro nenačítalo, pozri [Riešenie problémov](topic:troubleshooting#the-app-does-not-start).

## Vaša prvá súčiastka: doska s otvorom

Vytvoríte dosku 60 × 40 mm, hrubú 10 mm, so 6 mm otvorom skrz ňu. Jednotky sú milimetre.

### Nakreslite obrys

1. Kliknite na **Predná rovina** v histórii vľavo. Rovina sa v pohľade zvýrazní.
2. Vyberte {{ui:Náčrt}} na paneli nástrojov alebo stlačte {{key:S}}. Pohľad sa otočí priamo na rovinu a aktívny je nástroj Úsečka.
3. Stlačte {{key:R}} pre nástroj Obdĺžnik.
4. Presuňte ukazovateľ na začiatok (malý červený kruh s krížom). Malý štvorček ukáže, že sa prichytáva. Kliknite.
5. Presuňte nahor a doprava a znova kliknite. Máte obdĺžnik. Jeho čiary sú modré: modrá znamená, že sa ešte môžu pohybovať.

### Dajte mu rozmery

1. Stlačte {{key:D}} pre nástroj Kótovanie.
2. Kliknite na hornú čiaru a potom kliknite o kúsok nad ňou. Otvorí sa okno s číslom s aktuálnou dĺžkou.
3. Napíšte `60` a stlačte {{key:Enter}}. Obdĺžnik sa zmení na šírku 60 mm.
4. Kliknite na ľavú čiaru a potom kliknite o kúsok vľavo od nej. Napíšte `40` a stlačte {{key:Enter}}.

Čip v ľavom hornom rohu pohľadu teraz hovorí **Úplne určený** a čiary sa zmenia na tušovú farbu (čierna na motíve Papier, svetlá na motíve Model). Každý bod a rozmer je pevný.

:::tip
Ak ste obdĺžnik začali mimo začiatku, čip stále hovorí „Nedourčený · 2 stupne voľnosti“. Stlačte {{key:S}} pre Výber, kliknite na jeden roh, {{key:Shift}}+klik na začiatok a potom na pravom paneli zvoľte {{ui:• Splývanie}}.
:::

### Vytiahnite ho

1. Vyberte {{ui:Ukončiť}} na paneli nástrojov alebo stláčajte {{key:Esc}}, kým sa náčrt nezavrie (zvyčajne dvakrát).
2. Vyberte {{ui:Vytiahnuť}}. Objaví sa teleso hrubé 10 mm. Do histórie sa pridá „Extrude1“ a pod ňou odsadený „Sketch1“.
3. Na pravom paneli sa zobrazia nastavenia vytiahnutia. Ak chcete zmeniť hrúbku, zadajte nové číslo do poľa **Hĺbka (mm)** a stlačte {{key:Enter}} alebo {{key:Tab}}. Súčiastka sa okamžite prestaví.

### Pridajte otvor

1. Kliknite na veľkú rovnú plochu na prednej strane dosky (koniec vytiahnutia). Celá plocha sa zvýrazní a na pravom paneli sa zobrazí **Plocha**.
2. Na pravom paneli vyberte {{ui:Náčrt na tejto ploche}}.
3. Stlačte {{key:P}} pre nástroj Bod a kliknite blízko stredu plochy.
4. Vyberte {{ui:Ukončiť}}.
5. Vyberte {{ui:Otvor}}. Cez dosku prejde otvor 6 mm. Ak chcete, zmeňte **Priemer (mm)** na pravom paneli.

Pole **Súčiastka** vľavo dole teraz zobrazuje objem, povrch, rozmery (60 × 40 × 10 mm) a „Priechodné otvory: 1“.

### Uložte ju

1. Stlačte {{key:Mod+S}} alebo vyberte {{ui:Uložiť}}.
2. Váš prehliadač stiahne `Part1.partcraft.json` do priečinka sťahovania. Súbor obsahuje celú históriu: otvorte ho znova pomocou {{ui:Otvoriť}}, aby ste mohli pokračovať v úpravách.

Ak chcete súčiastku najprv premenovať, kliknite na prázdne miesto v pohľade, aby nič nebolo vybrané, a na pravom paneli zadajte nový **Názov**.

## Kde pokračovať ďalej

- [Nakreslite prvý náčrt](topic:sketch-basics) a [Úplne určte náčrt](topic:relations-dimensions) podrobne vysvetľujú editor náčrtov.
- [Zmena súčiastky cez jej históriu](topic:edit-history) ukazuje, ako upraviť to, čo ste vytvorili.
- [Zaoblenie, zrazenie a škrupina](topic:fillet-chamfer-shell) a [Vytvorenie výkresu](topic:drawing-pdf) súčiastku dokončia. [Čo ešte nie je hotové](topic:not-built-yet) uvádza, čo táto verzia nerobí, napríklad ťahanie po dráhe a lofty.
- [Prechod z iného parametrického modelára](topic:coming-from) uvádza zvyky, ktoré tu fungujú inak.
- [Klávesy a myš](topic:keyboard) je úplný zoznam skratiek.
- [Používanie tohto pomocníka](common:help).
