---
title: Rediģējami postprocesori
summary: Postprocesors ir īss teksta fails, kas instrumenta trajektoriju pārvērš G-code jūsu vadībai. Kopējiet vienu no iebūvētajiem postprocesoriem, mainiet vajadzīgās rindas (rindu numurus, instrumenta maiņu, sākuma kustības, beigu kodu), skatiet G-code, ko tas raksta, kamēr rakstāt, un glabājiet to kopā ar detaļu.
keywords: postprocesors, postprocesora fails, G-code, NC, GRBL, LinuxCNC, rediģēt postprocesoru, pielāgots postprocesors, cpost, instrumenta maiņa, M6, G43, fiksētais cikls, rindu numuri, modāls, notikums, mainīgais
from: 36ab8a38
---

Vienai un tai pašai instrumenta trajektorijai jābūt rakstītai atšķirīgi dažādām vadībām: ar rindu numuriem vai bez, `M6` vai pauze, `G28` vai `G53`, `M30` vai `M2`. **Postprocesors** ir īss teksts, kas nosaka, kā. PartCraft trīs iebūvētie postprocesori (Fanuc stila, GRBL un LinuxCNC) ir rakstīti šajā formātā, tāpēc jūsu pašu postprocesors var sākties kā kāda no tiem kopija.

Pārbaudiet izvadi savas mašīnas simulatorā pirms griešanas un vispirms izpildiet to gaisā virs materiāla. Iebūvētie postprocesori raksta tieši to, ko rakstīja pirms šī formāta pastāvēšanas (testi salīdzina to izvadi baitu pa baitam simtiem programmu), taču nekas šeit nav pierādīts jūsu mašīnā, un postprocesors, ko mainīsiet, ir jūsu pašu pierādāms.

## Izveidot vienu

Sadaļā Ražošana, zem **Postprocesors**:

- {{ui:Rediģēt postprocesoru…}} iebūvētai vadībai atver **jūsu pašu kopiju**. Kādā no jūsu pašu postprocesoriem tas atver šo postprocesoru.
- {{ui:Jauns postprocesors…}} sāk no neliela tukša postprocesora ar katru notikumu.
- {{ui:Importēt postprocesora failu…}} nolasa `.cpost` teksta failu (failu, ko iegūstat ar **Saglabāt kā failu…** redaktorā).

Redaktors rāda tekstu, rindu, kas norāda, vai tas nolasīsies (un kura rinda ir kļūdaina), un G-code, ko postprocesors raksta, kamēr rakstāt. **Priekšskatīt ar** izvēlas mazu paraugprogrammu, kas izpilda katru notikumu, vai šīs detaļas pašas programmu. {{ui:Saglabāt}} glabā postprocesoru detaļas failā (līdz 20 postprocesoriem) un izvēlas to kā vadību. Postprocesori pārvietojas kopā ar detaļu; lai izmantotu vienu citā detaļā, saglabājiet to kā failu un importējiet tur.

## Kā izskatās postprocesors

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Rindas, kas sākas ar `//`, un tukšas rindas tiek ignorētas. Augšā ir iestatījumi; tad seko viens bloks `on <notikums>` katram notikumam, ko noslēdz `end`. Notikums, ko izlaižat, neko neraksta.

| Iestatījums | Nozīme |
|---|---|
| `post <id>` | Postprocesora id: burti, cipari, `-` un `_` |
| `name <text>` | Ko rāda Vadības saraksts |
| `extension <ext>` | Faila paplašinājums: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … katrā `emit` rindā vai nevienā |
| `decimal-point yes` / `no` | `10.` vai `10` (komentāros punkts nekad netiek rakstīts) |
| `canned-cycles yes` / `no` | `no`: urbumi tiek rakstīti kā G0/G1 kustības, ko tie pārstāv |
| `modal <group> <words>` | Grupas vārdi (`modal motion G0 G1 G2 G3`), kas tiek rakstīti tikai tad, kad mainās |

## Notikumi

Tie darbojas programmai šādā secībā: `start`; tad katrai darbībai `operation`, `tool-change` (kad mainās instruments), `spindle` (kad mainās ātrums), `approach` (kustība līdz pirmajam punktam, pirms pirmās ātrās kustības), `coolant-on`, tad tās kustības kā `rapid`, `feed` un `arc`, un katrs fiksētais cikls kā `cycle-start`, viens `cycle-hole` katram urbumam un `cycle-end`; visbeidzot `end`.

Katrs notikums var izmantot savas kustības veida mainīgos, rakstītus `{name}`: programmas (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), materiāla (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), instrumenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), darbības (`op.name`, `op.type`), `rpm`, kustības punkta (`x`, `y`, `z`, `f` un `moved`: true, ja kāda ass mainījās), loku (`arc.g` 2 vai 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) un urbumu (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktora saraksts **Notikumi un mainīgie** rāda, kurš notikums ko redz. Stāvoklis, ko var lasīt un iestatīt: `cool`, `offset` un `at.x`, `at.y`, `at.z`, `at.f` (pēdējās rakstītās vērtības).

## Priekšraksti

| Priekšraksts | Ko tas dara |
|---|---|
| `raw TEXT` | Rinda tieši tā, kā ierakstīta (bez rindas numura) |
| `comment TEXT` | `(TEXT)` bez ne-ASCII rakstzīmēm un iekavām |
| `emit WORD WORD …` | Vārdu rinda; tukšie vārdi tiek izlaisti; nav vārdu, nav rindas |
| `word WORD …` | Pievieno vārdus rindai, kas tiek veidota; tukšs `emit` to beidz |
| `if EXPR` … `else` … `end` | Nosacījumi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, citādi b) |
| `for tool in tools` … `end` | Vienreiz katram instrumentam, ko programma izmanto |
| `set NAME EXPR` | Atceras vērtību (`set offset tool.number`) |
| `reset NAME …` | Aizmirst modālos vārdus (grupu, adreses burtu, piemēram, `Z`, vai `at.z`) |
| `do rapid X Y Z` | Izpilda `rapid` notikumu punktam |

Vārds ir rakstīts teksts ar `{variable|filter}` caurumiem. Filtri ir `upper`, `lower`, `pad:N` (nulles aizpildījums), `cut:N` (pirmās N rakstzīmes), `safe` (ASCII, drošs komentāriem) un `int`. Vārds, kas beidzas ar `~`, ir **modāls**: tas tiek rakstīts tikai tad, ja atšķiras no pēdējā uzrakstītā (`G1~`, `X{x}~`). Vārds, kas beidzas ar `~!`, tiek rakstīts katru reizi un tomēr tiek atcerēts. Nosaukums, kas nav mainīgais, ir vienkāršs teksts (`G81`, `mist`). Skaitļi tiek noapaļoti līdz 0.001 mm un rakstīti bez beigu nullēm.

## Ko postprocesors nevar darīt

Tas nosaka tikai to, kā kustības tiek rakstītas, nekas vairāk. Tas nevar mainīt instrumenta trajektoriju, pārkārtot darbības, sadalīt loku, pievienot asi, zināt jūsu mašīnas gājienu vai kinemātiku, vai veikt aritmētiku ar koordinātēm (nav `+`). Zondēšana, instrumenta darbmūža un apakšprogrammu cikli, 4. un 5. ass izvade un virpas kodi nav izveidoti. `.cps` tipa postprocesora fails no citas programmas nevar tikt ielādēts: šis ir cits, vienkāršāks formāts.
