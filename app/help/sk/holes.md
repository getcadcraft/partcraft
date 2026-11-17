---
title: Vŕtanie otvorov a zapustení v bodoch náčrtu
summary: Umiestnite body v náčrte na plochu, vytvorte jednoduché, zapustené, záhlbené alebo závitové (ISO metrické) otvory pri každom bode, nastavte priemer a hĺbku a opravte otvory, ktoré vŕtajú zlým smerom.
keywords: otvor, sprievodca otvormi, vŕtanie, modelovaný závit, 3D tlač, zapustenie, cbore, záhlbenie, csink, závitový otvor, závit, priemer vrtáka, metrický závit, M6, cez všetko, slepý otvor, skrutkový otvor, body, stredy otvorov
from: 8e1eef83
---

{{ui:Otvor}} vyvŕta jeden otvor pri každom voľnom bode náčrtu. Voľný bod je bod vytvorený nástrojom Bod, nie koniec čiary ani stred kružnice.

## Vŕtanie otvorov do plochy

1. Kliknite na rovnú plochu, do ktorej chcete vŕtať, a potom vyberte {{ui:Náčrt na tejto ploche}}.
2. Stlačte {{key:P}} a kliknite, kam každý otvor patrí. Ak záleží na polohe, okótujte body od hrán alebo začiatku (pozri [Úplne určte náčrt](topic:relations-dimensions)).
3. Vyberte {{ui:Ukončiť}}.
4. Vyberte {{ui:Otvor}}.

Otvory prechádzajú skrz súčiastku, s priemerom 6 mm. Pravý panel zobrazuje **Otvory**: koľko ich bolo vytvorených, „jeden na bod náčrtu“.

**Jeden otvor, rýchlo:** kliknite na rovnú plochu, kam otvor patrí, a na pravom paneli vyberte {{ui:Otvor tu}}. PartCraft na plochu pridá náčrt s jedným bodom tam, kde ste klikli, a otvor cez súčiastku, v jednom kroku. Hneď napíšte číslo a stlačte {{key:Enter}} pre jeho priemer. Ak ho chcete umiestniť presne, otvorte nový náčrt a okótujte bod.

**Ktorý náčrt sa použije:** práve zavretý alebo vybraný náčrt; inak najnovší nepoužitý náčrt, ktorý má voľné body. Ak žiadny nie je: „Najprv vytvorte náčrt s bodmi tam, kde majú byť otvory (Náčrt na ploche, potom Bod).“

## Nastavenia

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| **Typ** | Jednoduchý, Zapustený, Záhlbený, Závitový (ISO metrický) | Jednoduchý |
| **Priemer (mm)** | Priemer otvoru | 6 |
| **Cez všetko** | Označené: úplne skrz súčiastku. Zrušte označenie pre slepý otvor | Označené |
| **Hĺbka (mm)** | Zobrazí sa, keď nie je označené Cez všetko | 10 |
| **Priemer zapustenia ⌀** | Zobrazí sa pri Zapustený: priemer širšieho vybrania | 11 |
| **Hĺbka zapustenia** | Zobrazí sa pri Zapustený | 6 |
| **Obrátiť smer** | Vŕta na druhú stranu roviny náčrtu | Vypnuté |

Otvory vŕtajú do materiálu kolmo na rovinu náčrtu. Hĺbka slepého otvoru sa meria od roviny náčrtu; jeho dno je rovné.

## Zapustený otvor pre skrutku

1. Vytvorte otvory ako vyššie.
2. Nastavte **Typ** na **Zapustený**.
3. Nastavte **Priemer (mm)** na `6.6` (vôľa pre skrutku M6), **Priemer zapustenia ⌀** na `11` a **Hĺbka zapustenia** na `6.5`.

Zapustenie musí byť širšie ako otvor („Zapustenie musí byť širšie ako otvor.“) a pri slepom otvore musí byť menej hlboké ako on („Zapustenie musí byť menej hlboké ako otvor.“).

## Kružnica otvorov

Pre otvory rovnomerne rozmiestnené okolo stredu vytvorte **jeden** otvor a z neho kruhové pole: vyberte prvok Otvor a potom {{ui:Kruhové}} (pozri [Vzory a zrkadlenie](topic:patterns-mirror)). Pole sa prispôsobí, keď zmeníte veľkosť otvoru.

## Keď otvory idú zlým smerom

- „Na tejto strane náčrtu nie je čo vŕtať. Skúste obrátiť smer.“ Náčrt je na vzdialenejšej strane materiálu. Označte **Obrátiť smer**.
- „Umiestnite body náčrtu tam, kde majú byť otvory (nástroj Bod), a potom vytvorte otvor.“ Náčrt nemá voľné body. Koncové body čiar a stredy kružníc sa nepočítajú.
- „Zatiaľ nie je čo vŕtať.“ Otvor potrebuje teleso. Najprv vytvorte výstupok.

## Otvory v zostavách

Každý otvor má os. V zostave môže **Stred na** umiestniť spoj na os otvoru, uvedený ako „Hole1, hole 2“, takže kolík alebo skrutka sa s ním zarovná. Pozri [Zostavenie zostavy](topic:build-assembly).

## Záhlbené otvory

Nastavte **Typ** na **Záhlbený**, potom **Priemer záhlbenia ⌀** (na povrchu) a **Uhol záhlbenia**: 90° (metrické skrutky so zápustnou hlavou ISO) alebo 82° (palcové skrutky). Priemer záhlbenia vezmite z údajov výrobcu skrutiek (o niečo viac ako priemer hlavy skrutky). Plocha kužeľa sa v paneloch nazýva „záhlbenie“.

## Závitové otvory

Nastavte **Typ** na **Závitový (ISO metrický)** a vyberte **Závit**, M2 až M24 hrubý. Otvor sa vyvŕta na veľkosť závitového vrtáka z tabuľky nižšie (menovitý priemer mínus stúpanie, na rad vrtákov, ako uvádza ISO 2306 pre závit 6H); pole **Priemer (mm)** sa nepoužíva. Pri slepom otvore **Hĺbka závitu (mm)** nastaví, ako hlboko závit siaha.

| Závit | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Stúpanie | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Priemer závitového vrtáka ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Závit je zatiaľ len **kozmetický**: model obsahuje vyvŕtaný otvor, pohľad kreslí vonkajší priemer závitu prerušovanými kružnicami a výkres nesie popisku ako poznámku, napríklad „4× M8×1.25 - 6H, závit cez“. STEP exportuje iba vyvŕtaný otvor.

Označte **Modelovaný**, aby sa do otvoru vyrezal skutočný skrutkovicový závit, pre 3D tlač. **Vôľa (mm)** ho o toľko zväčší dookola, aby sa vytlačená skrutka zmestila: 0.1 až 0.2 mm vyhovuje väčšine tlačiarní. Popiska potom končí „(modelovaný)“. Pozri [Závity na hriadeľoch a dierach, nakreslené alebo modelované](topic:threads), kde sa závity umiestňujú aj na hriadele.

:::note
Protivŕtané otvory, palcové závity a rúrkové závity ešte nie sú hotové.
:::
