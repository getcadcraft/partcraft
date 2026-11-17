---
title: Konfigurácie a návrhové tabuľky
summary: Uchovajte viacero veľkostí a verzií jednej časti ako pomenované konfigurácie uložené v súbore časti, s prvkami zapnutými alebo vypnutými v každej z nich; prepínajte medzi nimi jedným kliknutím, načítajte ich alebo exportujte ako návrhovú tabuľku CSV, alebo ich všetky zostavte z príkazového riadku.
keywords: návrhová tabuľka, konfigurácie, konfigurácia, veľkosti, rodina častí, csv, tabuľkový procesor, varianty, riadené tabuľkou, rodina častí, potlačiť, potlačený, vypnúť prvok, možnosti, s alebo bez, konfigurátor
from: 17249afb
---

**Konfigurácia** je jedna veľkosť časti: pomenovaná množina hodnôt jej parametrov. Časť si uchováva svoje konfigurácie vo vlastnom súbore, takže putujú spolu s ňou. **Návrhová tabuľka** je to isté ako súbor CSV, s jedným riadkom na konfiguráciu.

Konfigurácie nastavujú **parametre**, takže ich najprv pridajte (pozri [Riadenie časti parametrami](topic:parameters)). Konfigurácia ukladá parametre, ktoré sú obyčajnými číslami; parametre vypočítané z iných (napríklad `area = w * d`) nasledujú samé.

## Uloženie konfigurácie

1. Na karte {{ui:Parametre}} nastavte parametre pre jednu veľkosť časti.
2. Pod **Konfigurácie** napíšte názov (napríklad `Veľká`) a stlačte {{ui:Uložiť aktuálne hodnoty}} alebo {{key:Enter}}.

Nová konfigurácia sa označí ako **aktívna**. Ak potom zmeníte parameter, bude tam **aktívna, zmenená od uloženia**, takže viete, že časť sa už s ňou nezhoduje.

## Prepnutie, aktualizácia, premenovanie, zmazanie

- {{ui:Použiť}} nastaví parametre na hodnoty tej konfigurácie a prestaví časť.
- {{ui:Aktualizovať}} uloží aktuálne hodnoty do tejto konfigurácie.
- Ak ju chcete premenovať, napíšte nový názov do jej poľa a stlačte {{key:Enter}}.
- {{ui:Zmazať}} odstráni konfiguráciu. Parametre si ponechajú svoje hodnoty.

Každá z týchto akcií je jeden krok: {{key:Mod+Z}} sa vráti späť. Ak premenujete parameter, každá konfigurácia nasleduje nový názov; ak zmažete jednu, vypadne z nich.

## Zapnutie a vypnutie prvkov v konfigurácii

Konfigurácia tiež uchováva, ktoré prvky sú vypnuté, takže jedna časť môže mať verzie **s** a **bez** niečoho: montážne otvory, zrazenie, výčnelok.

1. Vypnite prvok: kliknite na neho v histórii a potom na {{ui:Potlačiť}} v {{ui:Vlastnosti}}.
2. Uložte konfiguráciu ako obvykle, napríklad `Bez otvorov`. Jej riadok uvádza, čo vypína.
3. Zapnite prvok späť ({{ui:Zrušiť potlačenie}}) a uložte ďalšiu konfiguráciu, napríklad `S otvormi`.

Keď nejaká konfigurácia vypne prvok, použitie konfigurácie vypne jej prvky a **zapne všetky ostatné prvky** spolu s jej hodnotami parametrov, v jednom kroku. Konfigurácia uložená predtým, ako sa v nejakej vypli prvky, sa počíta ako „všetko zapnuté“. {{ui:Aktualizovať}} uloží prvky tak, ako sú teraz, spolu s hodnotami.

Časť, ktorej konfigurácie vypínajú prvky, sa uloží ako novšia verzia súboru: staršie PartCraft oznámi, že súbor je z novšej verzie, namiesto toho, aby ho otvoril bez nich.

:::note
Návrhová tabuľka CSV nesie len hodnoty parametrov. Načítanie tabuľky nad konfiguráciu zmení jej hodnoty a zachová prvky, ktoré vypína; príkaz `--table` v príkazovom riadku zostaví len hodnoty.
:::

Súbor časti sa uloží s konfiguráciami a s tou, ktorá bola aktívna. Časť sa otvorí s hodnotami, s ktorými bola uložená.

## Načítanie alebo export návrhovej tabuľky

Návrhová tabuľka je súbor CSV so stĺpcom pre každý parameter a riadkom pre každú konfiguráciu:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Prvý stĺpec sa môže volať `name`, `config` alebo `configuration`; každý ďalší stĺpec musí byť názvom parametra časti. Bunky sú čísla, s jednotkami, ak chcete (`8in`). Prázdna bunka vynechá ten parameter z riadku.

- {{ui:Importovať CSV}} pridá každý riadok ako konfiguráciu. Riadok s názvom existujúcej konfigurácie ju nahradí. Import je jeden krok.
- {{ui:Exportovať CSV}} zapíše konfigurácie. Ak ešte žiadne nie sú, zapíše jeden riadok aktuálnych hodnôt ako východisko pre tabuľkový procesor.

Názov konfigurácie, ktorý by tabuľkový procesor čítal ako vzorec (začína `=`, `+`, `-` alebo `@`), sa zapíše s úvodným `'`.

## Všetky veľkosti naraz

{{ui:Balík variantov…}} pod **Konfigurácie** zostaví každú konfiguráciu alebo vybrané z nich ako STEP, IFC, DWG a náhľad v jednom zip súbore, s tabuľkou ich parametrov: pozri [Vytvorenie balíka variantov z vašich konfigurácií](topic:variant-pack).

Nástroj príkazového riadku zostaví jeden súbor pre každý riadok návrhovej tabuľky CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Najprv exportujte konfigurácie ako CSV, potom tento súbor odovzdajte cez `--table`. Pozri [Skripty a príkazový riadok](topic:scripts-and-cli). Časť uložená ako skript uchováva svoje konfigurácie v riadku `configs json …`.
