---
title: Posturi pe care le puteți edita
summary: Un post este un fișier text scurt care transformă traiectoria sculei în G-code pentru comanda mașinii. Copiați unul dintre posturile incluse, modificați liniile necesare (numere de linie, schimbarea sculei, deplasările la origine, codul de sfârșit), vedeți codul G-code pe care îl scrie pe măsură ce tastați și păstrați-l împreună cu piesa.
keywords: post, procesor post, postprocesor, G-code, NC, GRBL, LinuxCNC, editare post, post personalizat, cpost, schimbare sculă, M6, G43, ciclu fix, numere de linie, modal, eveniment, variabilă
from: 36ab8a38
---

Aceeași traiectorie a sculei trebuie scrisă diferit pentru comenzi diferite: cu sau fără numere de linie, `M6` sau o pauză, `G28` sau `G53`, `M30` sau `M2`. Un **post** este textul scurt care spune cum. Cele trei posturi incluse ale PartCraft (în stil Fanuc, GRBL și LinuxCNC) sunt scrise în acest format, deci un post propriu poate porni ca o copie a unuia dintre ele.

Verificați rezultatul în simulatorul mașinii înainte de așchiere și rulați-l mai întâi în aer, deasupra semifabricatului. Posturile incluse scriu exact ceea ce scriau înainte ca acest format să existe (testele compară rezultatul lor octet cu octet pe sute de programe), dar nimic de aici nu a fost dovedit pe mașina respectivă, iar un post modificat trebuie verificat de cel care l-a modificat.

## Creați un post

În Fabricație, la **Post**:

- {{ui:Editează postul…}} pe o comandă inclusă deschide o copie proprie a acesteia. Pe unul dintre posturile proprii deschide acel post.
- {{ui:Post nou…}} pornește de la un post gol și mic, în care apar toate evenimentele.
- {{ui:Importă fișierul de post…}} citește un fișier text `.cpost` (fișierul obținut cu **Salvare ca fișier…** din editor).

Editorul afișează textul, o linie care spune dacă postul se citește corect (și care linie este greșită) și codul G-code pe care îl scrie postul, pe măsură ce tastați. **Previzualizare cu** alege un program mic de probă care rulează toate evenimentele sau programul propriu al acestei piese. {{ui:Salvare}} păstrează postul în fișierul piesei (până la 20 de posturi) și îl setează ca fiind comanda. Posturile se mută odată cu piesa; pentru a folosi unul într-o altă piesă, salvați-l ca fișier și importați-l acolo.

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

Liniile care încep cu `//` și liniile goale sunt ignorate. Sus vin setările; apoi câte un bloc `on <event>` pentru fiecare eveniment, închis cu `end`. Un eveniment omis nu scrie nimic.

| Setare | Înțeles |
|---|---|
| `post <id>` | Identificatorul postului: litere, cifre, `-` și `_` |
| `name <text>` | Ce afișează lista de comenzi |
| `extension <ext>` | Extensia fișierului: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … la fiecare linie `emit`, sau niciun număr |
| `decimal-point yes` / `no` | `10.` în loc de `10` (comentariile nu conțin niciodată punctul) |
| `canned-cycles yes` / `no` | `no`: găurile sunt scrise ca mișcările G0/G1 pe care le reprezintă |
| `modal <group> <words>` | Cuvintele unui grup (`modal motion G0 G1 G2 G3`) care se scriu doar când se schimbă |

## Evenimente

Ele rulează în această ordine pentru un program: `start`; apoi, pentru fiecare operație, `operation`, `tool-change` (când se schimbă scula), `spindle` (când se schimbă turația), `approach` (mișcarea până la primul punct, înainte de primul rapid), `coolant-on`, apoi mișcările sale ca `rapid`, `feed` și `arc`, iar fiecare ciclu fix ca `cycle-start`, câte un `cycle-hole` pentru fiecare gaură și `cycle-end`; la sfârșit, `end`.

Fiecare eveniment poate folosi variabilele tipului său de mișcare, scrise `{name}`: programul (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), semifabricatul (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), scula (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operația (`op.name`, `op.type`), `rpm`, punctul unei mișcări (`x`, `y`, `z`, `f` și `moved`: adevărat când s-a schimbat o axă), arcele (`arc.g` 2 sau 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) și găurile (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Evenimente și variabile** din editor arată ce eveniment vede ce. Stări pe care le puteți citi și seta: `cool`, `offset` și `at.x`, `at.y`, `at.z`, `at.f` (ultimele valori scrise).

## Instrucțiuni

| Instrucțiune | Ce face |
|---|---|
| `raw TEXT` | O linie exact cum este scrisă (fără număr de linie) |
| `comment TEXT` | `(TEXT)`, fără caracterele non-ASCII și fără paranteze |
| `emit WORD WORD …` | O linie de cuvinte; cuvintele care rămân goale sunt omise; fără cuvinte, nicio linie |
| `word WORD …` | Adaugă cuvinte la linia în construcție; un `emit` fără cuvinte o încheie |
| `if EXPR` … `else` … `end` | Condiții: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, altfel b) |
| `for tool in tools` … `end` | O dată pentru fiecare sculă folosită de program |
| `set NAME EXPR` | Reține o valoare (`set offset tool.number`) |
| `reset NAME …` | Uită cuvintele modale (un grup, o literă de adresă ca `Z` sau `at.z`) |
| `do rapid X Y Z` | Rulează evenimentul `rapid` pentru un punct |

Un cuvânt este text tastat cu spații `{variable|filter}`. Filtrele sunt `upper`, `lower`, `pad:N` (completare cu zerouri), `cut:N` (primele N caractere), `safe` (ASCII sigur pentru comentarii) și `int`. Un cuvânt care se termină cu `~` este **modal**: se scrie doar dacă diferă de ce s-a scris ultima dată (`G1~`, `X{x}~`). Un cuvânt care se termină cu `~!` se scrie de fiecare dată și este reținut. Un nume care nu este variabilă este text simplu (`G81`, `mist`). Numerele sunt rotunjite la 0.001 mm și se scriu fără zerouri finale.

## Ce nu poate face un post

Postul decide doar cum sunt scrise mișcările, nimic mai mult. Nu poate modifica o traiectorie, nu poate ordona operațiile, nu poate împărți un arc, nu poate adăuga o axă, nu cunoaște cursa sau cinematica mașinii și nu poate face calcule cu coordonatele (nu există `+`). Sondarea, ciclurile de durată a sculei și cele de subprogram, ieșirea pe axele a 4-a și a 5-a și codurile de strung sunt încă nerealizate. Un fișier de post de tip `.cps` dintr-un alt program nu poate fi încărcat: acesta este un format diferit, mai simplu.
