---
title: Postprocesoare editabile
summary: Un post este un fișier text scurt care transformă traseul sculei în cod G pentru comanda mașinii. Copiați unul dintre posturile încorporate, modificați liniile necesare (numere de linie, schimbarea sculei, deplasări de referință, cod de sfârșit), vedeți codul G pe care îl scrie pe măsură ce tastați și păstrați-l cu piesa.
keywords: post, postprocesor, cod G, NC, GRBL, LinuxCNC, editare post, post personalizat, cpost, schimbare de sculă, M6, G43, ciclu fix, numere de linie, modal, eveniment, variabilă
from: c78d0cae
---

Același traseu trebuie scris diferit pentru comenzi diferite: numere de linie sau fără, `M6` sau o pauză, `G28` sau `G53`, `M30` sau `M2`. Un **post** este textul scurt care spune cum. Cele trei posturi încorporate ale PartCraft (în stil Fanuc, GRBL și LinuxCNC) sunt scrise în acest format, deci un post propriu poate porni ca o copie a unuia dintre ele.

Verificați rezultatul în simulatorul propriu al mașinii înainte de așchiere și rulați-l mai întâi în aer, deasupra semifabricatului. Posturile încorporate scriu exact ce scriau înainte ca acest format să existe (testele compară rezultatul lor octet cu octet pe sute de programe), dar nimic de aici nu a fost verificat pe o mașină anume, iar un post modificat trebuie verificat de cel care l-a modificat.

## Crearea unui post

În Fabricație, sub **Postprocesor**:

- {{ui:Editează postul…}} pe o comandă încorporată deschide **o copie proprie** a acesteia. Pe unul dintre posturile proprii, deschide acel post.
- {{ui:Post nou…}} pornește de la un post gol, mic, cu fiecare eveniment inclus.
- {{ui:Importă fișierul de post…}} citește un fișier text `.cpost` (fișierul pe care îl obțineți din **Salvare ca fișier…** în editor).

Editorul arată textul, o linie care spune dacă se citește (și care linie este greșită) și codul G pe care îl scrie postul, pe măsură ce tastați. **Previzualizare cu** alege un program mic de probă care rulează fiecare eveniment sau programul propriu al acestei piese. {{ui:Salvare}} păstrează postul în fișierul piesei (până la 20 de posturi) și îl alege ca fiind comanda. Posturile călătoresc cu piesa; ca să-l folosiți într-o altă piesă, salvați-l ca fișier și importați-l acolo.

## Cum arată un post

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

Liniile care încep cu `//` și liniile goale sunt ignorate. La început vin setările; apoi câte un bloc `on <event>` pentru fiecare eveniment, închis cu `end`. Un eveniment pe care îl lăsați afară nu scrie nimic.

| Setare | Înțeles |
|---|---|
| `post <id>` | Identificatorul postului: litere, cifre, `-` și `_` |
| `name <text>` | Ce arată lista comenzilor |
| `extension <ext>` | Extensia fișierului: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … pe fiecare linie `emit`, sau niciunul |
| `decimal-point yes` / `no` | `10.` în loc de `10` (comentariile nu poartă niciodată punctul) |
| `canned-cycles yes` / `no` | `no`: găurile sunt scrise ca deplasările G0/G1 pe care le reprezintă |
| `modal <group> <words>` | Cuvintele unui grup (`modal motion G0 G1 G2 G3`) care se scriu doar când se schimbă |

## Evenimente

Rulează în această ordine pentru un program: `start`; apoi, pentru fiecare operație, `operation`, `tool-change` (când se schimbă scula), `spindle` (când se schimbă turația), `approach` (deplasarea până la primul punct, înainte de prima deplasare rapidă), `coolant-on`, apoi deplasările ei ca `rapid`, `feed` și `arc`, iar fiecare ciclu fix ca `cycle-start`, câte un `cycle-hole` pentru fiecare gaură și `cycle-end`; la urmă, `end`.

Evenimente în plus, pentru ce depășește trei axe (un post fără evenimentul respectiv refuză un asemenea program și numește evenimentul pe care îl lipsește):

| Eveniment | Când | Variabilele sale |
|---|---|---|
| `index` | Înainte de o operație a cărei direcție a sculei diferă de cea anterioară și înainte de prima operație pe o mașină cu axe rotative | `rot.a`, `rot.b`, `rot.c` (pozițiile la care se merge; goale pentru o axă pe care mașina nu o are), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Deplasările unei operații ale cărei axe rotative se mișcă în timpul așchierii | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (da când avansul trebuie să fie timp invers), `invf` (1/minute) |
| `rotary-end` | După o asemenea operație | |
| `probe-move` | O deplasare care se oprește când palpatorul se declanșează | `x`, `y`, `z`, `f`, `probe.n` (1 până la 4), `probe.axis` (x, y sau z), `probe.k` (1, 2 sau 3) |
| `probe-set` | După atingerile unui ciclu de palpare | `probe.kind` (`"z"`, `"x"`, `"y"` sau `centre`), `probe.action` (`set` sau `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | O deplasare de filetare la strung | `x`, `z`, `thread.lead` |

Tot pentru fiecare eveniment: `kin` (none, a, b, ac, bc), `rotary` și `tcp` (yes sau no, de la mașina din Configurare), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` și `op.turn` ale operației și, pe un strung, `spin.mode` (css sau rpm), `spin.css`, `spin.max` și `tool.nose`. Un cuvânt cu literă a cărui valoare este goală, cum este `A{rot.a}` pe o mașină fără axă A, se omite din linie. Comparați cu x, y și z ca text între ghilimele (`if probe.kind == "z"`): fără ghilimele, sunt coordonatele deplasării.

Două linii în plus la începutul unui post îl fac post de strung: `machine lathe` (scrie atunci doar X și Z și refuză traseele de frezare, așa cum un post de frezare refuză traseele de strunjire) și `lathe-x diameter` sau `lathe-x radius`.

Fiecare eveniment poate folosi variabilele propriului tip de deplasare, scrise `{nume}`: programul (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), semifabricatul (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), scula (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operația (`op.name`, `op.type`), `rpm`, punctul unei deplasări (`x`, `y`, `z`, `f`, și `moved`: adevărat când s-a schimbat o axă), arcele (`arc.g` 2 sau 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) și găurile (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Evenimente și variabile** din editor arată ce vede fiecare eveniment. Stare care se poate citi și seta: `cool`, `offset`, și `at.x`, `at.y`, `at.z`, `at.f` (ultimele valori scrise).

## Instrucțiuni

| Instrucțiune | Ce face |
|---|---|
| `raw TEXT` | O linie exact cum este scrisă (fără număr de linie) |
| `comment TEXT` | `(TEXT)` cu caracterele non-ASCII și parantezele scoase |
| `emit WORD WORD …` | O linie de cuvinte; cuvintele care ies goale sunt omise; fără cuvinte, nicio linie |
| `word WORD …` | Adaugă cuvinte la linia în construcție; un `emit` gol o încheie |
| `if EXPR` … `else` … `end` | Condiții: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, altfel b) |
| `for tool in tools` … `end` | O dată pentru fiecare sculă folosită de program |
| `set NAME EXPR` | Reține o valoare (`set offset tool.number`) |
| `reset NAME …` | Uită cuvintele modale (un grup, o literă de adresă ca `Z` sau `at.z`) |
| `do rapid X Y Z` | Rulează evenimentul `rapid` pentru un punct |

Un cuvânt este text tastat cu spații pentru variabile `{variabilă|filtru}`. Filtrele sunt `upper`, `lower`, `pad:N` (umplere cu zerouri), `cut:N` (primele N caractere), `safe` (ASCII sigur pentru comentarii) și `int`. Un cuvânt care se termină cu `~` este **modal**: se scrie doar când diferă de ce a fost scris ultima dată (`G1~`, `X{x}~`). Un cuvânt care se termină cu `~!` se scrie de fiecare dată și este reținut. Un nume care nu este variabilă este text simplu (`G81`, `mist`). Numerele sunt rotunjite la 0.001 mm și scrise fără zerouri de la coadă.

## Ce nu poate face un post

Decide doar cum sunt scrise deplasările, nimic mai mult. Nu poate schimba un traseu de sculă, nu poate ordona operațiile, nu poate împărți un arc, nu poate adăuga o axă, nu cunoaște cursa și cinematica mașinii și nu poate face aritmetică pe coordonate (nu există `+`). Pozițiile rotative vin de la mașina descrisă în Configurare, nu de la post: un post poate schimba semnul sau literele lor, nu cinematica. Ciclurile de durată de viață a sculei și de subprogram nu sunt realizate. Un fișier de post în stilul `.cps` de la alt program nu poate fi încărcat: acesta este un format diferit, mai simplu.
