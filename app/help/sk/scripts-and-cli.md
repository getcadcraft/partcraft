---
title: Skripty a príkazový riadok
summary: Formát skriptov PartCraft (.pcscript), ktorý zapíše celú súčiastku ako čitateľný text, a nástroj príkazového riadka partcraft, ktorý bez obrazovky buduje, mení, vracia späť a kontroluje súčiastky.
keywords: skript, pcscript, text, príkazový riadok, cli, terminál, dávka, automatizovať, kontrola, lint, build, export, správa verzií, diff, parametrický skript
from: c56df222
---

Pri modelovaní ide skôr o disciplínu než o tlačidlá. Súčiastka napísaná ako text sa dá čítať, kontrolovať a porovnávať riadok po riadku a znova zostaviť skriptom. PartCraft funguje oboma smermi: ľubovoľnú súčiastku možno zapísať ako skript a skript súčiastku zostaví.

## V aplikácii

Na karte {{ui:Parametre}}, v časti **Skript**:

- {{ui:Uložiť ako skript}} stiahne otvorenú súčiastku ako `<name>.pcscript`.
- {{ui:Otvoriť skript}} zostaví súčiastku zo súboru `.pcscript`. Chyba sa nahlási s číslom riadku a nič sa nenahradí.

## Formát skriptu

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Pravidlá:

- Riadok začínajúci na ľavom okraji začína príkaz: `pcscript`, `part`, `param`, typ prvku (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` a novšie typy), za ktorým nasleduje jeho názov, alebo `rollback <prvok>`.
- Odsadené riadky sú nastavenia príkazu nad nimi. Nastavenie stojace samo osebe (`through`, `reverse`, `suppressed`) znamená áno.
- Číselné nastavenie je číslo, alebo `=` a výraz, ktorý vytvorí rovnicu: `depth = thick`.
- V náčrte: `on` určuje rovinu (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometria je `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (proti smeru hodinových ručičiek) alebo `spline <name> fit|control <points>`; väzby sú ich typ a názvy, ktoré spájajú (`O` je počiatok); kóta končí hodnotou alebo `= výraz`.
- Voliteľné nastavenia riadku geometrie alebo väzby sa píšu na konci do hranatých zátvoriek oddelených `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` začína komentár (na začiatku riadku alebo za medzerou). Názvy s medzerami sa píšu do dvojitých úvodzoviek.
- ID prvkov sa počítajú od f1 v poradí zápisu. Odkazy na hrany a plochy ich používajú, napríklad `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Nastavenia, pre ktoré formát nemá slová, sa zapíšu ako `json` a hodnota; načítajú sa tak, ako sú.

Skript uložený z aplikácie obsahuje každé nastavenie, takže sa otvorí ako tá istá súčiastka. Importované teleso STEP sa zapíše do skriptu z aplikácie a z príkazového riadka ako samostatný súbor `.step`, pomenovaný podľa `step-file`.

## Nástroj príkazového riadka

Nástroj beží na počítači s Node.js 24, z kópie zdrojového kódu CadCraft: `node tools/partcraft-cli/partcraft.mjs <príkaz>`. Je to nástroj pre vývojárov a používa rovnaké moduly ako aplikácia. Súčiastky sú súbory `.partcraft.json` alebo skripty `.pcscript`.

| Príkaz | Čo robí |
|---|---|
| `info <part>` | Prvky, parametre, lišta návratu, objem a veľkosť zostaveného telesa |
| `params <part>` | Každý parameter a rovnica s hodnotou |
| `set <part> width=150 Base.depth==thick` | Dopredu: zmena parametrov, prepojenie čísel (`==` alebo výraz), nastavenie obyčajných čísel |
| `drive <part> Base.depth=12` | Dozadu: vyrieši parameter za riadeným číslom (`--prefer width` vyberie jeden) |
| `build <part> --out x.step` | Zapíše `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` alebo makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Jeden súbor pre každý riadok tabuľky návrhu |
| `variants <part> --out-dir d` alebo `--zip f.zip` | Každá konfigurácia ako STEP, IFC, DWG a náhľad, tabuľka variantov a položka knižnice (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); pozri [Vytvorenie balíka variantov](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript na súčiastku |
| `to-script <part> -o part.pcscript` | Súčiastka na skript |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Posunie lištu návratu v súbore |
| `check <part> [--strict]` | Kontrola disciplíny (nižšie) |

`build` tiež prijíma `--set name=value` (iba pre toto zostavenie) a `--upto <feature>`. Každý príkaz prijíma `--json`. Návratové kódy: 0 v poriadku, 1 našiel sa problém, 2 príkaz bol zadaný nesprávne. Skript sa nikdy neprepisuje na mieste: na uloženie zmenenej kópie použite `-o`.

## Kontrola

`check` hlási, čo sťažuje neskoršie zmeny súčiastky:

| Zistenie | Počíta sa ako |
|---|---|
| Náčrt, ktorý je preurčený (protichodné alebo opakované väzby) | chyba |
| Prvok, ktorý sa nezostaví | chyba |
| Parameter alebo rovnica s chybou, alebo parametre, ktoré sa navzájom používajú | chyba |
| Náčrt, ktorý je nedourčený, s jeho stupňami voľnosti | upozornenie |
| Čísla napísané priamo do prvkov a kót, ktoré žiadny parameter neriadi | upozornenie |
| Parameter, ktorý nič nepoužíva | upozornenie |
| Potlačený prvok; lišta návratu nie je na konci | upozornenie |

`--strict` premení každé upozornenie na chybu, takže skript zostavenia môže odmietnuť súčiastku, ktorá nie je úplne riadená parametrami.

:::note
Výstup makra `.swb` je určený pre modelovací program, ktorý používa väčšina dielní: spustený v ňom zostaví súčiastku priamo tam. Tu sa v ňom nespúšťal (nie je dostupný na našich serveroch), takže ho považujte za neotestovaný.
:::
