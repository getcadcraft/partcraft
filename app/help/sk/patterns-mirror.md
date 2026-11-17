---
title: Vzory a zrkadlenie prvkov
summary: Opakujte prvky v rade pomocou Lineárne, okolo osi pomocou Kruhové a kopírujte prvky alebo celé teleso cez rovinu pomocou Zrkadliť.
keywords: vzor, lineárny vzor, kruhový vzor, polárne pole, pole, zrkadlenie, symetrický, kopírovanie prvkov, roztečná kružnica, zdrojový prvok, zrkadlenie telesa
from: 702e9edb
---

Vzory a zrkadlenia kopírujú prvky, ktoré ste už vytvorili. Kópie sú súčasťou histórie: ak zmeníte pôvodný prvok, kópie ho nasledujú.

Kopíruje sa to, čo prvok robí: vzor výstupku pridáva materiál, vzor vyrezania alebo otvoru materiál odstraňuje. Vzory je možné znova vzorovať a zrkadliť. Importované teleso STEP je možné kopírovať tiež; zaoblenia, skosenia a škrupiny kopírovať nie je možné.

## Lineárny vzor

1. Vyberte prvok na kopírovanie v histórii (napríklad Otvor alebo Vyrezanie). Ak nič nie je vybrané, použije sa posledný plný prvok.
2. Zvoľte {{ui:Linear}}. Pozdĺž osi X sa zobrazia tri kópie vo vzdialenosti 20 mm.
3. V pravom paneli nastavte:

| Nastavenie | Čo to robí | Predvolené |
|---|---|---|
| **Prvky na kopírovanie** | Označte každý prvok na kopírovanie. Zobrazia sa len prvky nad vzorom | Vybraný prvok |
| **Smer** | Os X, os Y, os Z, priamka alebo stredová čiara z ľubovoľného skoršieho náčrtu, os rotácie alebo vybraná hrana | Os X |
| **Rozstup (mm)** | Vzdialenosť medzi susednými prvkami | 20 |
| **Počet** | Celkový počet vrátane pôvodného prvku (1 až 1000) | 3 |
| **Obrátiť smer** | Kópie idú opačným smerom | Vypnuté |

### Použitie hrany ako smeru

1. Kliknite na priamu hranu dielu v pohľade. Pravý panel uvádza **Hrana** a jej dĺžku.
2. Zvoľte {{ui:Linear}}: vzor sa bude šíriť pozdĺž tejto hrany.

Alebo vyberte vzor, zvoľte hranu a v **Smer** vyberte "Vybraná hrana (použiť práve vybranú)". Vybraná hrana je pevná v priestore: nesleduje neskoršie zmeny. Priamka náčrtu sleduje svoj náčrt.

## Kruhový vzor

1. Vyberte prvok na kopírovanie (napríklad jeden otvor pri okraji disku).
2. Zvoľte {{ui:Circular}}. Zobrazí sa šesť kópií rovnomerne rozmiestnených po celom obvode.
3. Nastavte:

| Nastavenie | Čo to robí | Predvolené |
|---|---|---|
| **Prvky na kopírovanie** | Ako pri lineárnom vzore | Vybraný prvok |
| **Os** | Os X, Y alebo Z, čiara náčrtu, os rotácie alebo vybraná hrana | Os rotácie poslednej rotácie, ak existuje, inak os Y |
| **Uhol (°)** | 360 rozmiestni kópie rovnomerne dookola. Menej ich rozloží na tento uhol, prvá a posledná na koncoch | 360 |
| **Počet** | Celkový počet vrátane pôvodného prvku | 6 |
| **Obrátiť smer** | Otočí sa opačným smerom | Vypnuté |

Svetové osi prechádzajú počiatkom. Pre disk, ktorého stred nie je v počiatku, použite stredovú čiaru náčrtu alebo os rotácie.

### Príklad: osem skrutkových otvorov príruby

1. Otočte prírubu (pozri [Rotácia sústruženého dielu](topic:revolve)) okolo osi Y.
2. Nakreslite náčrt na plochú hornú plochu príruby, umiestnite jeden bod na roztečnú kružnicu skrutiek a vytvorte Otvor.
3. S vybraným Otvorom zvoľte {{ui:Circular}}. Os je už "Axis of Revolve1".
4. Nastavte **Počet** na `8`.

## Zrkadlenie

1. Vyberte prvok na zrkadlenie v histórii, alebo nič nevyberajte, ak chcete zrkadliť **celé teleso v doterajšom stave**.
2. Zvoľte {{ui:Mirror}}. Zrkadlí sa cez **Pravú rovinu**.

Ak chcete namiesto toho zrkadliť celé teleso cez plochu dielu, najprv kliknite na túto rovnú plochu a potom zvoľte {{ui:Mirror}}. (Kliknutie na plochu zruší výber v histórii, takže sa vždy zrkadli celé teleso.)

Nastavenia v pravom paneli:

- **Zrkadliť**: označte **Celé teleso (v doterajšom stave)**, alebo zrušte označenie a označte prvky na kopírovanie.
- **Rovina zrkadlenia**: Predná rovina, Horná rovina, Pravá rovina, plocha, ktorú používa teraz ("A face of Extrude1" alebo "A fixed plane"), alebo "Plocha vybraná teraz". Ak chcete zrkadliť vybrané prvky cez plochu: vyberte Zrkadlenie v histórii, kliknite na plochu v pohľade a zvoľte "Plocha vybraná teraz".

Zrkadlenie celého telesa cez plochu zdvojnásobí diel, napríklad polovičný držiak na celý.

## Správy

- "Najprv vytvorte prvok na kopírovanie." alebo "Najprv vytvorte teleso." Zatiaľ nie je čo kopírovať.
- "Vyberte prvky na kopírovanie." Všetky polia **Prvky na kopírovanie** sú vyprázdnené.
- "Extrude2 nemá teleso na kopírovanie." Tento prvok zlyhal alebo je potlačený.
- "Fillet1 mení hrany alebo steny telesa; nedá sa skopírovať. Skopírujte prvky, ktoré vytvárajú telesá (vytiahnutia, rotácie, otvory, importy)." Zaoblenia, skosenia a škrupiny nie je možné vzorovať ani zrkadliť; najprv vytvorte vzor, potom zaoblenie.
- "Zatiaľ nie je žiadne teleso na zrkadlenie."

:::note
Kópie vzoru nie je možné preskočiť jednotlivo a vzor nemôže nasledovať krivku náčrtu. Vzory a zrkadlenia náčrtov ešte nie sú hotové: nakreslite opakujúcu sa geometriu náčrtu ručne alebo pomocou **Pridať podľa súradníc**.
:::
