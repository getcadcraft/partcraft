---
title: Postprocessadors que pots editar
summary: Un post és un fitxer de text curt que converteix la trajectòria d'eina en G-code per al teu control. Copia un dels posts integrats, canvia les línies que necessitis (números de línia, canvi d'eina, moviments d'origen, codi final), mira el G-code que escriu mentre escrius i guarda'l amb la peça.
keywords: post, postprocessador, post processor, G-code, NC, GRBL, LinuxCNC, edita el post, post personalitzat, cpost, canvi d'eina, M6, G43, cicle fix, números de línia, modal, esdeveniment, variable
from: 36ab8a38
---

La mateixa trajectòria d'eina s'ha d'escriure de manera diferent segons el control: números de línia o cap, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **post** és el text curt que indica com. Els tres posts integrats de PartCraft (estil Fanuc, GRBL i LinuxCNC) estan escrits en aquest format, així que un post propi pot començar com una còpia d'un d'ells.

Comprova la sortida al simulador de la teva màquina abans de tallar, i executa-la a l'aire sobre el material primer. Els posts integrats escriuen exactament el que escrivien abans que existís aquest format (les proves comparen la seva sortida byte a byte en centenars de programes), però res d'això no s'ha demostrat a la teva màquina, i un post que canvies és responsabilitat teva de demostrar.

## Crea'n un

A Fabricació, sota **Post**:

- {{ui:Edita el post…}} sobre un control integrat obre **la teva pròpia còpia**. Sobre un dels teus posts, obre aquest post.
- {{ui:Post nou…}} comença amb un post buit i petit que conté tots els esdeveniments.
- {{ui:Importa un fitxer de post…}} llegeix un fitxer de text `.cpost` (el fitxer que obtens amb **Anomena i desa com a fitxer…** a l'editor).

L'editor mostra el text, una línia que indica si es llegeix bé (i quina línia és incorrecta), i el G-code que escriu el post, mentre escrius. **Previsualitza amb** tria un programa petit d'exemple que executa tots els esdeveniments, o el programa de la mateixa peça. {{ui:Desa}} guarda el post al fitxer de la peça (fins a 20 posts) i el tria com a control. Els posts viatgen amb la peça; per usar-ne un en una altra peça, desa'l com a fitxer i importa'l allà.

## Com és un post

```
post mymill
name La meva fresadora (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Programa {program}: {name}
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

Les línies que comencen amb `//` i les línies en blanc s'ignoren. A dalt hi ha la configuració; després, un bloc `on <esdeveniment>` per a cada esdeveniment, tancat amb `end`. Un esdeveniment que no hi poses no escriu res.

| Configuració | Significat |
|---|---|
| `post <id>` | L'identificador del post: lletres, dígits, `-` i `_` |
| `name <text>` | El que mostra la llista de Controls |
| `extension <ext>` | L'extensió del fitxer: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … a cada línia `emit`, o cap |
| `decimal-point yes` / `no` | `10.` en lloc de `10` (els comentaris mai porten el punt) |
| `canned-cycles yes` / `no` | `no`: els forats s'escriuen com els moviments G0/G1 que representen |
| `modal <grup> <paraules>` | Paraules d'un grup (`modal motion G0 G1 G2 G3`) que només s'escriuen quan canvien |

## Esdeveniments

S'executen en aquest ordre per a un programa: `start`; després, per a cada operació, `operation`, `tool-change` (quan canvia l'eina), `spindle` (quan canvia la velocitat), `approach` (el moviment fins al primer punt, abans del primer ràpid), `coolant-on`, i després els seus moviments com a `rapid`, `feed` i `arc`, i cada cicle fix com a `cycle-start`, un `cycle-hole` per a cada forat i `cycle-end`; finalment, `end`.

Cada esdeveniment pot usar les variables del seu propi tipus de moviment, escrites com `{name}`: el programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), el material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), l'eina (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), l'operació (`op.name`, `op.type`), `rpm`, el punt d'un moviment (`x`, `y`, `z`, `f`, i `moved`: cert quan ha canviat un eix), els arcs (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i els forats (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La llista **Esdeveniments i variables** de l'editor mostra quin esdeveniment veu cada cosa. Estat que pots llegir i establir: `cool`, `offset`, i `at.x`, `at.y`, `at.z`, `at.f` (els últims valors escrits).

## Instruccions

| Instrucció | Què fa |
|---|---|
| `raw TEXT` | Una línia exactament com s'escriu (sense número de línia) |
| `comment TEXT` | `(TEXT)` amb els caràcters no ASCII i els parèntesis eliminats |
| `emit WORD WORD …` | Una línia de paraules; les paraules que queden buides se n'treuen; sense paraules, no hi ha línia |
| `word WORD …` | Afegeix paraules a la línia que s'està construint; un `emit` sol la tanca |
| `if EXPR` … `else` … `end` | Condicions: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, si no b) |
| `for tool in tools` … `end` | Una vegada per a cada eina que usa el programa |
| `set NAME EXPR` | Recorda un valor (`set offset tool.number`) |
| `reset NAME …` | Oblida paraules modals (un grup, una lletra d'adreça com `Z`, o `at.z`) |
| `do rapid X Y Z` | Executa l'esdeveniment `rapid` per a un punt |

Una paraula és text escrit amb forats `{variable|filter}`. Els filtres són `upper`, `lower`, `pad:N` (emplena amb zeros), `cut:N` (primers N caràcters), `safe` (ASCII segur per als comentaris) i `int`. Una paraula que acaba en `~` és **modal**: només s'escriu quan és diferent de l'últim valor escrit (`G1~`, `X{x}~`). Una paraula que acaba en `~!` s'escriu cada vegada i també es recorda. Un nom que no és una variable és text pla (`G81`, `mist`). Els números s'arrodoneixen a 0,001 mm i s'escriuen sense zeros finals.

## Què no pot fer un post

Decideix només com s'escriuen els moviments, res més. No pot canviar una trajectòria d'eina, ordenar operacions, dividir un arc, afegir un eix, conèixer el recorregut o la cinemàtica de la teva màquina, ni fer aritmètica amb coordenades (no hi ha `+`). El sondatge, la vida de l'eina i els cicles de subprogrames, la sortida del 4t i 5è eix i els codis de torn encara no estan implementats. Un fitxer de post d'estil `.cps` d'un altre programa no es pot carregar: és un format diferent i més senzill.
