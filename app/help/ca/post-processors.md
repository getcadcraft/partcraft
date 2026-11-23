---
title: Postprocessadors que podeu editar
summary: Un postprocessador és un fitxer de text curt que converteix la trajectòria en G-code per al vostre control. Copieu un dels integrats, canvieu les línies que necessiteu (números de línia, canvi d'eina, moviments de referència, codi final), veieu el G-code que escriu a mesura que escriviu i guardeu-lo amb la peça.
keywords: postprocessador, post, G-code, NC, GRBL, LinuxCNC, edita el post, postprocessador personalitzat, cpost, canvi d'eina, M6, G43, cicle fix, números de línia, modal, esdeveniment, variable
from: c78d0cae
---

La mateixa trajectòria s'ha d'escriure de manera diferent segons el control: números de línia o cap, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **post** és el text curt que indica com. Els tres postprocessadors integrats del PartCraft (estil Fanuc, GRBL i LinuxCNC) estan escrits en aquest format, de manera que un postprocessador propi pot començar com una còpia d'un d'ells.

Comproveu la sortida amb el simulador de la vostra màquina abans de tallar, i executeu-la primer a l'aire, per sobre del material en brut. Els postprocessadors integrats escriuen exactament el que escrivien abans que existís aquest format (les proves comparen la seva sortida byte a byte en centenars de programes), però res d'això no s'ha provat a la vostra màquina, i un postprocessador que canvieu és responsabilitat vostra de provar.

## Crear-ne un

A Fabricació, sota **Postprocessador**:

- {{ui:Edita el post…}} en un control integrat obre **una còpia pròpia** seva. En un dels vostres postprocessadors, obre aquest postprocessador.
- {{ui:Post nou…}} comença amb un postprocessador petit en blanc que conté tots els esdeveniments.
- {{ui:Importa un fitxer de post…}} llegeix un fitxer de text `.cpost` (el fitxer que obteniu amb **Desa com a fitxer…** a l'editor).

L'editor mostra el text, una línia que indica si es llegeix (i quina línia és incorrecta) i el G-code que escriu el postprocessador, mentre escriviu. **Previsualitza amb** tria un petit programa d'exemple que executa tots els esdeveniments, o el programa propi d'aquesta peça. {{ui:Desa}} conserva el postprocessador al fitxer de la peça (fins a 20 postprocessadors) i el tria com a control. Els postprocessadors viatgen amb la peça; per usar-ne un en una altra peça, deseu-lo com a fitxer i importeu-lo allà.

## Com és un postprocessador

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

Les línies que comencen amb `//` i les línies buides s'ignoren. A dalt hi ha la configuració; després, un bloc `on <event>` per a cada esdeveniment, tancat amb `end`. Un esdeveniment que deixeu fora no escriu res.

| Configuració | Significat |
|---|---|
| `post <id>` | L'identificador del postprocessador: lletres, dígits, `-` i `_` |
| `name <text>` | El que mostra la llista de Control |
| `extension <ext>` | L'extensió del fitxer: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … a cada línia de `emit`, o cap |
| `decimal-point yes` / `no` | `10.` en lloc de `10` (els comentaris mai no porten el punt) |
| `canned-cycles yes` / `no` | `no`: els forats s'escriuen com els moviments G0/G1 que representen |
| `modal <group> <words>` | Paraules d'un grup (`modal motion G0 G1 G2 G3`) que s'escriuen només quan canvien |

## Esdeveniments

S'executen en aquest ordre per a un programa: `start`; després, per a cada operació, `operation`, `tool-change` (quan canvia l'eina), `spindle` (quan canvia la velocitat), `approach` (el moviment fins al primer punt, abans del primer ràpid), `coolant-on`, i després els seus moviments com a `rapid`, `feed` i `arc`, i cada cicle fix com a `cycle-start`, un `cycle-hole` per a cada forat i `cycle-end`; al final, `end`.

Més esdeveniments, per al que va més enllà de tres eixos (un postprocessador sense l'esdeveniment rebutja aquest programa i en diu quin li falta):

| Esdeveniment | Quan | Les seves variables |
|---|---|---|
| `index` | Abans d'una operació amb una direcció d'eina diferent de l'anterior, i abans de la primera operació en una màquina amb eixos rotatius | `rot.a`, `rot.b`, `rot.c` (les posicions on anar; buit per a un eix que la màquina no té), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Els moviments d'una operació en què els eixos rotatius es mouen mentre talla | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes quan l'avanç ha de ser de temps invers), `invf` (1/minuts) |
| `rotary-end` | Després d'una operació així | |
| `probe-move` | Un moviment que s'atura quan salta el palpador | `x`, `y`, `z`, `f`, `probe.n` (1 a 4), `probe.axis` (x, y o z), `probe.k` (1, 2 o 3) |
| `probe-set` | Després dels tocs d'un cicle de palpació | `probe.kind` (`"z"`, `"x"`, `"y"` o `centre`), `probe.action` (`set` o `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Un moviment de rosca en un torn | `x`, `z`, `thread.lead` |

A més, per a cada esdeveniment: `kin` (none, a, b, ac, bc), `rotary` i `tcp` (yes o no, segons la màquina de Preparació), `pivot.x`, `pivot.y`, `pivot.z`, els `op.tilt` i `op.turn` de l'operació i, en un torn, `spin.mode` (css o rpm), `spin.css`, `spin.max` i `tool.nose`. Una paraula amb lletra el valor de la qual és buit, com `A{rot.a}` en una màquina sense eix A, se'n treu de la línia. Compareu amb x, y i z com a text entre cometes (`if probe.kind == "z"`): sense cometes, són les coordenades del moviment.

Dues línies més a dalt d'un postprocessador el fan un postprocessador de torn: `machine lathe` (aleshores només escriu X i Z, i rebutja les trajectòries de fresatge tal com un postprocessador de fresatge rebutja les de torn) i `lathe-x diameter` o `lathe-x radius`.

Cada esdeveniment pot usar les variables del seu propi tipus de moviment, escrites `{name}`: el programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), el material en brut (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), l'eina (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), l'operació (`op.name`, `op.type`), `rpm`, el punt d'un moviment (`x`, `y`, `z`, `f`, i `moved`: `true` quan ha canviat un eix), els arcs (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i els forats (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La llista **Esdeveniments i variables** de l'editor mostra quin esdeveniment veu cada cosa. Estat que podeu llegir i fixar: `cool`, `offset`, i `at.x`, `at.y`, `at.z`, `at.f` (els últims valors escrits).

## Instruccions

| Instrucció | Què fa |
|---|---|
| `raw TEXT` | Una línia exactament com s'escriu (sense número de línia) |
| `comment TEXT` | `(TEXT)` sense caràcters no ASCII ni parèntesis |
| `emit WORD WORD …` | Una línia de paraules; les paraules que surten buides se n'ometen; sense paraules, sense línia |
| `word WORD …` | Afegeix paraules a la línia que es construeix; un `emit` sol la tanca |
| `if EXPR` … `else` … `end` | Condicions: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, si no b) |
| `for tool in tools` … `end` | Una vegada per a cada eina que usa el programa |
| `set NAME EXPR` | Recorda un valor (`set offset tool.number`) |
| `reset NAME …` | Oblida les paraules modals (un grup, una lletra d'adreça com `Z`, o `at.z`) |
| `do rapid X Y Z` | Executa l'esdeveniment `rapid` per a un punt |

Una paraula és text escrit amb forats `{variable|filter}`. Els filtres són `upper`, `lower`, `pad:N` (ompliment amb zeros), `cut:N` (primers N caràcters), `safe` (ASCII segur per a comentaris) i `int`. Una paraula que acaba en `~` és **modal**: s'escriu només quan difereix de l'última escrita (`G1~`, `X{x}~`). Una paraula que acaba en `~!` s'escriu cada vegada i també es recorda. Un nom que no és una variable és text pla (`G81`, `mist`). Els números s'arrodoneixen a 0.001 mm i s'escriuen sense zeros finals.

## Què no pot fer un postprocessador

Decideix només com s'escriuen els moviments, res més. No pot canviar una trajectòria, ordenar operacions, partir un arc, afegir un eix, conèixer el recorregut o la cinemàtica de la màquina, ni fer càlculs amb coordenades (no hi ha `+`). Les posicions rotatives les dona la màquina descrita a Preparació, no el postprocessador: un postprocessador pot canviar-ne el signe o les lletres, però no la cinemàtica. Els cicles de vida d'eina i de subprogrames no estan implementats. No es pot carregar un fitxer de postprocessador d'estil `.cps` d'un altre programa: aquest és un format diferent i més senzill.
