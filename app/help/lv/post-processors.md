---
title: Rediģējami postprocesori
summary: Postprocesors ir īss teksta fails, kas instrumenta trajektoriju pārvērš G-kodā jūsu vadībai. Nokopējiet vienu no iebūvētajiem postprocesoriem, mainiet vajadzīgās rindas (rindu numuri, instrumenta maiņa, sākuma kustības, beigu kods), redzat rakstīto G-kodu, kamēr rakstāt, un glabājiet to kopā ar detaļu.
keywords: postprocesors, postprocesors, G-kods, NC, GRBL, LinuxCNC, rediģēt postprocesoru, pielāgots postprocesors, cpost, instrumenta maiņa, M6, G43, gatavais cikls, rindu numuri, modāls, notikums, mainīgais
from: c78d0cae
---

Vienai un tai pašai instrumenta trajektorijai jābūt rakstītai atšķirīgi dažādām vadībām: rindu numuri vai bez tiem, `M6` vai pauze, `G28` vai `G53`, `M30` vai `M2`. **Postprocesors** ir īss teksts, kas nosaka, kā. PartCraft trīs iebūvētie postprocesori (Fanuc tipa, GRBL un LinuxCNC) ir rakstīti šajā formātā, tāpēc jūsu pašu postprocesors var sākties kā viena no tiem kopija.

Pirms griešanas pārbaudiet rezultātu sava iekārtas simulatorā un vispirms palaidiet to gaisā virs zagataves. Iebūvētie postprocesori raksta tieši to, ko rakstīja pirms šā formāta, (testi salīdzina to izvadi baitu pa baitam simtiem programmu), bet nekas šeit nav pārbaudīts uz jūsu iekārtas, un postprocesors, ko mainījāt, ir jūsu pārbaudāms.

## Izveidot vienu

Ražošanā, zem **Postprocesors**:

- {{ui:Rediģēt postprocesoru…}} iebūvētai vadībai atver **jūsu pašu kopiju**. Savā postprocesorā tas atver šo postprocesoru.
- {{ui:Jauns postprocesors…}} sāk no neliela tukša postprocesora ar katru notikumu tajā.
- {{ui:Importēt postprocesora failu…}} nolasa `.cpost` teksta failu (failu, ko iegūstat no **Saglabāt kā failu…** redaktorā).

Redaktors rāda tekstu, rindu, kas norāda, vai tas nolasās (un kura rinda ir nepareiza), un G-kodu, ko postprocesors raksta, kamēr rakstāt. **Priekšskatīt ar** izvēlas nelielu paraugprogrammu, kas izpilda katru notikumu, vai šīs detaļas pašu programmu. {{ui:Saglabāt}} glabā postprocesoru detaļas failā (līdz 20 postprocesoriem) un izvēlas to kā vadību. Postprocesori pārvietojas kopā ar detaļu; lai izmantotu vienu citā detaļā, saglabājiet to kā failu un importējiet tur.

## Kāds izskatās postprocesors

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

Rindas, kas sākas ar `//`, un tukšas rindas tiek ignorētas. Augšā atrodas iestatījumi; pēc tiem katram notikumam ir viens `on <event>` bloks, ko noslēdz `end`. Notikums, ko izlaižat, neko neraksta.

| Iestatījums | Nozīme |
|---|---|
| `post <id>` | Postprocesora id: burti, cipari, `-` un `_` |
| `name <text>` | Ko rāda vadības saraksts |
| `extension <ext>` | Faila paplašinājums: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … katrā `emit` rindā vai nevienā |
| `decimal-point yes` / `no` | `10.` nevis `10` (komentāros punkts nekad nav) |
| `canned-cycles yes` / `no` | `no`: caurumi tiek rakstīti kā G0/G1 kustības, ko tie apzīmē |
| `modal <group> <words>` | Grupas vārdi (`modal motion G0 G1 G2 G3`), kas tiek rakstīti tikai tad, kad mainās |

## Notikumi

Tie darbojas šajā secībā programmai: `start`; tad katrai operācijai `operation`, `tool-change` (kad mainās instruments), `spindle` (kad mainās ātrums), `approach` (kustība līdz pirmajam punktam, pirms pirmās ātrās kustības), `coolant-on`, tad tās kustības kā `rapid`, `feed` un `arc`, un katrs gatavais cikls kā `cycle-start`, viens `cycle-hole` katram caurumam un `cycle-end`; beigās `end`.

Vairāk notikumu tam, kas iet ārpus trim asīm (postprocesors bez notikuma noraida šādu programmu un nosauc notikumu, kas tam trūkst):

| Notikums | Kad | Tā mainīgie |
|---|---|---|
| `index` | Pirms operācijas, kuras instrumenta virziens atšķiras no pēdējā, un pirms pirmās operācijas mašīnā ar rotācijas asīm | `rot.a`, `rot.b`, `rot.c` (pozīcijas, uz kurām iet; tukšs asij, kuras iekārtai nav), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Operācijas kustības, kad tās rotācijas asis kustas, griežot | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes, kad padevei jābūt apgrieztam laikam), `invf` (1/minūtēs) |
| `rotary-end` | Pēc tādas operācijas | |
| `probe-move` | Kustība, kas apstājas, kad zonde reaģē | `x`, `y`, `z`, `f`, `probe.n` (1 līdz 4), `probe.axis` (x, y vai z), `probe.k` (1, 2 vai 3) |
| `probe-set` | Pēc zondēšanas cikla pieskārieniem | `probe.kind` (`"z"`, `"x"`, `"y"` vai `centre`), `probe.action` (`set` vai `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Vītnēšanas kustība virpā | `x`, `z`, `thread.lead` |

Katrs notikums var izmantot savas kustības veida mainīgos, rakstītus kā `{name}`: programmu (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), zagatavi (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), instrumentu (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operāciju (`op.name`, `op.type`), `rpm`, kustības punktu (`x`, `y`, `z`, `f`, un `moved`: true, kad ass mainījās), lokus (`arc.g` 2 vai 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) un caurumus (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktora saraksts **Notikumi un mainīgie** rāda, kurš notikums ko redz. Stāvoklis, ko var nolasīt un iestatīt: `cool`, `offset`, un `at.x`, `at.y`, `at.z`, `at.f` (pēdējās rakstītās vērtības).

## Paziņojumi

| Paziņojums | Ko tas dara |
|---|---|
| `raw TEXT` | Rinda tieši kā rakstīta (bez rindas numura) |
| `comment TEXT` | `(TEXT)` bez ne-ASCII un iekavām |
| `emit WORD WORD …` | Vārdu rinda; vārdi, kas izrādās tukši, tiek izlaisti; nav vārdu, nav rindas |
| `word WORD …` | Pievieno vārdus rindai, kas tiek veidota; tukšs `emit` to beidz |
| `if EXPR` … `else` … `end` | Nosacījumi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, citādi b) |
| `for tool in tools` … `end` | Vienreiz katram programmā izmantotajam instrumentam |
| `set NAME EXPR` | Atcerēties vērtību (`set offset tool.number`) |
| `reset NAME …` | Aizmirst modālos vārdus (grupu, adreses burtu, piemēram, `Z`, vai `at.z`) |
| `do rapid X Y Z` | Izpildīt `rapid` notikumu punktam |

Vārds ir rakstīts teksts ar `{variable|filter}` caurumiem. Filtri ir `upper`, `lower`, `pad:N` (aizpildīšana ar nullēm), `cut:N` (pirmās N rakstzīmes), `safe` (ASCII, drošs komentāram) un `int`. Vārds, kas beidzas ar `~`, ir **modāls**: tas tiek rakstīts tikai tad, kad atšķiras no pēdējā rakstītā (`G1~`, `X{x}~`). Vārds, kas beidzas ar `~!`, tiek rakstīts katru reizi un tomēr atceras. Nosaukums, kas nav mainīgais, ir vienkāršs teksts (`G81`, `mist`). Skaitļi tiek noapaļoti līdz 0,001 mm un rakstīti bez beigu nullēm.

## Ko postprocesors nevar

Tas nosaka, kā kustības tiek rakstītas, nekas vairāk. Tas nevar mainīt instrumenta trajektoriju, pārkārtot operācijas, sadalīt loku, pievienot asi, zināt jūsu iekārtas gājienu vai kinemātiku, vai veikt aritmētiku ar koordinātēm (nav `+`). Rotācijas pozīcijas pašas nāk no iekārtas, kas aprakstīta Iestatīšanā, nevis no postprocesora: postprocesors var mainīt to zīmi vai burtus, nevis kinemātiku. Instrumenta darbmūža un apakšprogrammu cikli nav izveidoti. Cita programmas `.cps` stila postprocesora fails nevar tikt ielādēts: šis ir cits, vienkāršāks formāts.
