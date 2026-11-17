---
title: Skripty a příkazový řádek
summary: Formát skriptu PartCraft (.pcscript), který zapisuje celý díl jako čitelný text, a nástroj příkazového řádku partcraft, který staví, mění, vrací zpět a kontroluje díly bez obrazovky.
keywords: skript, pcscript, text, příkazový řádek, cli, terminál, dávka, automatizace, kontrola, lint, vytvořit, export, správa verzí, diff, parametrický skript
from: c56df222
---

Pečlivé modelování je spíš otázka disciplíny než tlačítek. Díl zapsaný jako text lze číst, posuzovat, porovnávat řádek po řádku a znovu vytvořit skriptem. PartCraft umí obojí: každý díl lze zapsat jako skript a skript vytvoří díl.

## V aplikaci

Na kartě {{ui:Parametry}}, pod **Skript**:

- {{ui:Uložit jako skript}} stáhne otevřený díl jako `<název>.pcscript`.
- {{ui:Otevřít skript}} vytvoří díl ze souboru `.pcscript`. Chyba se nahlásí s číslem řádku a nic se nenahradí.

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

Pravidla:

- Řádek u levého okraje začíná příkazem: `pcscript`, `part`, `param`, typem prvku (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` a novějšími typy), za kterým následuje jeho název, nebo `rollback <feature>`.
- Odsazené řádky jsou nastavení příkazu nad nimi. Nastavení samo o sobě (`through`, `reverse`, `suppressed`) znamená ano.
- Číselné nastavení je číslo, nebo `=` a výraz, což vytvoří rovnici: `depth = thick`.
- Ve skice: `on` pojmenuje rovinu (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrie je `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (proti směru hodinových ručiček) nebo `spline <name> fit|control <points>`; vazby jsou jejich typ a názvy, které spojují (`O` je počátek); kóta končí svou hodnotou nebo `= expression`.
- Volitelná nastavení řádku geometrie nebo vazby se píší na konec do hranatých závorek, oddělená `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` začíná komentář (na začátku řádku nebo za mezerou). Názvy s mezerami se píší do "dvojitých uvozovek".
- Identifikátory prvků se počítají od f1 v pořadí zápisu. Odkazy na hrany a plochy je používají, například `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Nastavení, pro která formát nemá slova, se zapisují jako `json` a hodnota; načtou se zpět beze změny.

Skript uložený z aplikace obsahuje každé nastavení, takže se otevře jako stejný díl. Importované těleso STEP se z aplikace zapíše uvnitř skriptu a z příkazového řádku jako samostatný soubor `.step` pojmenovaný podle `step-file`.

## Nástroj příkazového řádku

Nástroj běží na počítači s Node.js 24, z kopie zdrojového kódu CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Je to nástroj pro vývojáře a používá stejné moduly jako aplikace. Díly jsou soubory `.partcraft.json` nebo skripty `.pcscript`.

| Příkaz | Co dělá |
|---|---|
| `info <part>` | Prvky, parametry, lišta návratu, objem a velikost vytvořeného tělesa |
| `params <part>` | Každý parametr a rovnice s hodnotou |
| `set <part> width=150 Base.depth==thick` | Dopředu: změní parametry, propojí čísla (`==` nebo výraz), nastaví prosté hodnoty |
| `drive <part> Base.depth=12` | Zpětně: vyřeší parametr za řízeným číslem (`--prefer width` vybere jeden) |
| `build <part> --out x.step` | Zapíše `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` nebo makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Jeden soubor pro každý řádek tabulky návrhu |
| `variants <part> --out-dir d` nebo `--zip f.zip` | Každou konfiguraci jako STEP, IFC, DWG a náhled, tabulku variant a položku knihovny (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); viz [Vytvoření balíčku variant](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript na díl |
| `to-script <part> -o part.pcscript` | Díl na skript |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Posune lištu návratu v souboru |
| `check <part> [--strict]` | Kontrola disciplíny (níže) |

`build` také přijímá `--set name=value` (jen pro toto sestavení) a `--upto <feature>`. Každý příkaz přijímá `--json`. Návratové kódy: 0 v pořádku, 1 byl nalezen problém, 2 příkaz byl napsán špatně. Skript se nikdy nepřepisuje na místě: pro uložení změněné kopie zadejte `-o`.

## Kontrola

`check` hlásí, co způsobí, že se díl bude později těžko měnit:

| Zjištění | Počítá se jako |
|---|---|
| Skica, která je přeurčená (protichůdné nebo opakované vazby) | chyba |
| Prvek, který se nevytvoří | chyba |
| Parametr nebo rovnice s chybou, nebo parametry, které se navzájem využívají | chyba |
| Skica, která je nedourčená, s počtem jejích stupňů volnosti | varování |
| Čísla zadaná přímo do prvků a kót, která žádný parametr neřídí | varování |
| Parametr, který nic nepoužívá | varování |
| Potlačený prvek; lišta návratu není na konci | varování |

`--strict` změní každé varování na chybu, takže sestavovací skript může odmítnout díl, který není plně řízen.

:::note
Výstup makra `.swb` je určen pro modelář dílů, který používá většina dílen: spuštěný uvnitř tohoto programu v něm díl vytvoří. Zde nebyl v tomto programu spuštěn (na našich serverech není k dispozici), proto ho berte jako netestovaný.
:::
