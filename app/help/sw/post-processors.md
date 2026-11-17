---
title: Post unazoweza kuhariri
summary: Post ni faili fupi la maandishi linalogeuza njia ya zana kuwa G-code kwa mdhibiti wako. Nakili mojawapo ya post zilizojengwa ndani, badilisha mistari unayohitaji (nambari za mistari, ubadilishaji wa zana, miendo ya nyumbani, msimbo wa mwisho), tazama G-code inayoandika unapoandika, na uihifadhi pamoja na sehemu.
keywords: post, kichakataji cha post, postprocessor, G-code, NC, GRBL, LinuxCNC, hariri post, post maalum, cpost, ubadilishaji wa zana, M6, G43, mzunguko uliowekwa, nambari za mistari, modal, tukio, kigezo
from: 36ab8a38
---

Njia ile ile ya zana inapaswa kuandikwa kwa njia tofauti kwa mdhibiti tofauti: nambari za mistari au hakuna, `M6` au kusimama kwa muda, `G28` au `G53`, `M30` au `M2`. **Post** ni maandishi mafupi yanayosema jinsi. Post tatu zilizojengwa ndani za PartCraft (za mtindo wa Fanuc, GRBL na LinuxCNC) zimeandikwa katika muundo huu, kwa hiyo post yako mwenyewe inaweza kuanza kama nakala ya mojawapo yake.

Angalia matokeo kwenye kiigaji cha mashine yako kabla ya kukata, na uiendeshe hewani juu ya malighafi kwanza. Post zilizojengwa ndani huandika hasa kile zilichoandika kabla muundo huu haujakuwepo (majaribio hulinganisha matokeo yao baiti kwa baiti kwenye programu mamia), lakini hakuna hapa kilichothibitishwa kwenye mashine yako, na post utakayobadilisha ni yako kuthibitisha.

## Tengeneza moja

Katika Manufacture, chini ya **Post**:

- {{ui:Hariri post…}} kwenye mdhibiti uliojengwa ndani hufungua **nakala yako mwenyewe** yake. Kwenye post yako mwenyewe, hufungua post hiyo.
- {{ui:Post mpya…}} huanza kutoka post tupu dogo lenye kila tukio ndani yake.
- {{ui:Ingiza faili ya post…}} husoma faili la maandishi la `.cpost` (faili unalopata kutoka **Hifadhi kama faili…** kwenye mhariri).

Mhariri unaonyesha maandishi, mstari unaosema kama unasomeka (na ni mstari upi una hitilafu), na G-code ambayo post inaandika unapoandika. **Hakiki kwa** huchagua programu ndogo ya sampuli inayoendesha kila tukio, au programu ya sehemu hii yenyewe. {{ui:Hifadhi}} huweka post kwenye faili la sehemu (hadi post 20) na kuichagua kama mdhibiti. Post husafiri pamoja na sehemu; ili kuitumia kwenye sehemu nyingine, ihifadhi kama faili kisha uiingize huko.

## Post inavyoonekana

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

Mistari inayoanza na `//` na mistari tupu hupuuzwa. Mwanzoni huja mipangilio; kisha block moja ya `on <event>` kwa kila tukio, lililofungwa kwa `end`. Tukio usilolijumuisha haliandiki chochote.

| Mpangilio | Maana |
|---|---|
| `post <id>` | Kitambulisho cha post: herufi, tarakimu, `-` na `_` |
| `name <text>` | Kinachoonyeshwa kwenye orodha ya mdhibiti |
| `extension <ext>` | Kiambishi cha faili: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … kwenye kila mstari wa `emit`, au hakuna |
| `decimal-point yes` / `no` | `10.` badala ya `10` (maoni hayabebi nukta kamwe) |
| `canned-cycles yes` / `no` | `no`: matundu huandikwa kama miendo ya G0/G1 wanayowakilisha |
| `modal <group> <words>` | Maneno ya kundi (`modal motion G0 G1 G2 G3`) yanayoandikwa tu yanapobadilika |

## Matukio

Yanaendeshwa kwa mpangilio huu kwa programu: `start`; kisha kwa kila operesheni `operation`, `tool-change` (zana inapobadilika), `spindle` (kasi inapobadilika), `approach` (mwendo wa kwenda juu hadi nukta ya kwanza, kabla ya rapid ya kwanza), `coolant-on`, kisha miendo yake kama `rapid`, `feed` na `arc`, na kila mzunguko uliowekwa kama `cycle-start`, `cycle-hole` moja kwa kila tundu na `cycle-end`; mwishowe `end`.

Kila tukio linaweza kutumia vigezo vya aina yake ya mwendo, vinavyoandikwa `{name}`: vya programu (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), vya malighafi (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), vya zana (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), vya operesheni (`op.name`, `op.type`), `rpm`, nukta ya mwendo (`x`, `y`, `z`, `f`, na `moved`: kweli wakati mhimili umebadilika), arcs (`arc.g` 2 au 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) na matundu (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Orodha ya **Matukio na vigezo** ya mhariri inaonyesha ni tukio lipi linaona nini. Hali unayoweza kusoma na kuweka: `cool`, `offset`, na `at.x`, `at.y`, `at.z`, `at.f` (thamani za mwisho zilizoandikwa).

## Taarifa

| Taarifa | Inafanya nini |
|---|---|
| `raw TEXT` | Mstari kama ulivyoandika (bila nambari ya mstari) |
| `comment TEXT` | `(TEXT)` bila herufi zisizo za ASCII na mabano |
| `emit WORD WORD …` | Mstari wa maneno; maneno yanayotoka tupu huachwa; hakuna maneno, hakuna mstari |
| `word WORD …` | Ongeza maneno kwenye mstari unaojengwa; `emit` tupu huumaliza |
| `if EXPR` … `else` … `end` | Masharti: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, la sivyo b) |
| `for tool in tools` … `end` | Mara moja kwa kila zana ambayo programu inatumia |
| `set NAME EXPR` | Kumbuka thamani (`set offset tool.number`) |
| `reset NAME …` | Sahau maneno ya modal (kundi, herufi ya anwani kama `Z`, au `at.z`) |
| `do rapid X Y Z` | Endesha tukio la `rapid` kwa nukta |

Neno ni maandishi yaliyoandikwa yenye mashimo ya `{variable|filter}`. Vichujio ni `upper`, `lower`, `pad:N` (kujaza sifuri), `cut:N` (herufi N za kwanza), `safe` (ASCII salama kwa maoni) na `int`. Neno linalomalizika kwa `~` ni **modal**: huandikwa tu linapotofautiana na lililoandikwa mwisho (`G1~`, `X{x}~`). Neno linalomalizika kwa `~!` huandikwa kila mara na bado linakumbukwa. Jina lisilo kigezo ni maandishi ya kawaida (`G81`, `mist`). Namba hupunguzwa hadi 0.001 mm na huandikwa bila sufuri za mwishoni.

## Post haiwezi kufanya nini

Huamua tu jinsi miendo inavyoandikwa, si zaidi. Haiwezi kubadilisha njia ya zana, kupanga upya operesheni, kugawanya arc, kuongeza mhimili, kujua mwendo wa mashine yako wala kinematiki, au kufanya hesabu kwenye viwianishi (hakuna `+`). Probing, mizunguko ya maisha ya zana na ya programu ndogo, matokeo ya mhimili wa 4 na 5, na misimbo ya lathe havijajengwa. Faili la post la mtindo wa `.cps` kutoka programu nyingine haliwezi kupakiwa: hii ni muundo tofauti, rahisi zaidi.
