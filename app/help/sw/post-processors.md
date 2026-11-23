---
title: Vichakataji vya post unavyoweza kuhariri
summary: Post ni faili fupi ya maandishi inayogeuza njia ya zana kuwa G-code kwa kidhibiti chako. Nakili mojawapo ya posts zilizojengwa ndani, badilisha mistari unayohitaji (nambari za mistari, kubadilisha zana, mienendo ya kurudi nyumbani, msimbo wa mwisho), ona G-code inayoandika unapoandika, na uihifadhi pamoja na sehemu.
keywords: post, kichakataji cha post, postprocessor, G-code, NC, GRBL, LinuxCNC, hariri post, post maalum, cpost, kubadilisha zana, M6, G43, mzunguko ulioandaliwa, nambari za mistari, modal, tukio, kigezo
from: c78d0cae
---

Njia ile ile ya zana lazima iandikwe kwa njia tofauti kwa vidhibiti tofauti: nambari za mistari au bila, `M6` au kusitisha, `G28` au `G53`, `M30` au `M2`. **Post** ni maandishi mafupi yanayosema jinsi. Posts tatu zilizojengwa ndani za PartCraft (mtindo wa Fanuc, GRBL na LinuxCNC) zimeandikwa kwenye muundo huu, kwa hiyo post yako mwenyewe inaweza kuanza kama nakala ya mojawapo yao.

Kagua matokeo kwenye kiigaji cha mashine yako kabla ya kukata, na uiendeshe hewani juu ya malighafi kwanza. Posts zilizojengwa ndani zinaandika hasa kile zilichoandika kabla muundo huu haujakuwepo (majaribio yanalinganisha matokeo yao baiti kwa baiti kwenye programu mamia), lakini hakuna kitu hapa kilichothibitishwa kwenye mashine yako, na post unayoibadilisha ni yako kuithibitisha.

## Tengeneza moja

Kwenye Utengenezaji, chini ya **Kichakataji**:

- {{ui:Hariri post…}} kwenye kidhibiti kilichojengwa ndani hufungua **nakala yako mwenyewe** yake. Kwenye post yako mwenyewe, inafungua post hiyo.
- {{ui:Post mpya…}} inaanza kutoka post tupu ndogo yenye kila tukio ndani yake.
- {{ui:Ingiza faili ya post…}} inasoma faili ya maandishi ya `.cpost` (faili unayopata kutoka **Hifadhi kama faili…** kwenye mhariri).

Mhariri unaonyesha maandishi, mstari unaosema kama yanasomeka (na mstari upi una kosa), na G-code ambayo post inaandika unapoandika. **Onyesho la awali kwa** huchagua programu ndogo ya sampuli inayoendesha kila tukio, au programu ya sehemu hii yenyewe. {{ui:Hifadhi}} huweka post kwenye faili ya sehemu (hadi posts 20) na kuichagua kama kidhibiti. Posts husafiri pamoja na sehemu; ili kuitumia kwenye sehemu nyingine, ihifadhi kama faili na uiingize huko.

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

Mistari unaoanza na `//` na mistari tupu hupuuzwa. Juu huja mipangilio; kisha kizuizi kimoja cha `on <event>` kwa kila tukio, kimefungwa kwa `end`. Tukio usilolijumuisha halaandiki chochote.

| Mpangilio | Maana |
|---|---|
| `post <id>` | Kitambulisho cha post: herufi, tarakimu, `-` na `_` |
| `name <text>` | Kinachoonyeshwa kwenye orodha ya Kidhibiti |
| `extension <ext>` | Kiendelezi cha faili: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … kwenye kila mstari wa `emit`, au hakuna |
| `decimal-point yes` / `no` | `10.` badala ya `10` (maoni hayabebi nukta kamwe) |
| `canned-cycles yes` / `no` | `no`: matundu yanaandikwa kama mienendo ya G0/G1 inayowakilisha |
| `modal <group> <words>` | Maneno ya kundi (`modal motion G0 G1 G2 G3`) yanayoandikwa tu yanapobadilika |

## Matukio

Yanaendeshwa kwa mpangilio huu kwa programu: `start`; kisha kwa kila shughuli `operation`, `tool-change` (zana inapobadilika), `spindle` (kasi inapobadilika), `approach` (mwendo hadi nukta ya kwanza, kabla ya rapid ya kwanza), `coolant-on`, kisha mienendo yake kama `rapid`, `feed` na `arc`, na kila mzunguko ulioandaliwa kama `cycle-start`, `cycle-hole` moja kwa kila tundu na `cycle-end`; mwishowe `end`.

Matukio zaidi, kwa kile kinachopita mihimili mitatu (post isiyo na tukio hukataa programu kama hiyo na kutaja tukio inalokosa):

| Tukio | Wakati | Vigezo vyake |
|---|---|---|
| `index` | Kabla ya shughuli ambayo mwelekeo wa zana ni tofauti na wa mwisho, na kabla ya shughuli ya kwanza kwenye mashine yenye shoka za mzunguko | `rot.a`, `rot.b`, `rot.c` (nafasi za kwenda; tupu kwa shoka ambalo mashine haina), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Mienendo ya shughuli ambayo shoka zake za mzunguko husogea wakati inakata | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ndiyo wakati malisho lazima yawe wakati wa kinyume), `invf` (1/dakika) |
| `rotary-end` | Baada ya shughuli kama hiyo | |
| `probe-move` | Mwendo unaosimama kichunguzi kinapogusa | `x`, `y`, `z`, `f`, `probe.n` (1 hadi 4), `probe.axis` (x, y au z), `probe.k` (1, 2 au 3) |
| `probe-set` | Baada ya miguso ya mzunguko mmoja wa kuchunguza | `probe.kind` (`"z"`, `"x"`, `"y"` au `centre`), `probe.action` (`set` au `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Mwendo wa kuchonga uzi kwenye lathe | `x`, `z`, `thread.lead` |

Pia kwa kila tukio: `kin` (hakuna, a, b, ac, bc), `rotary` na `tcp` (ndiyo au hapana, kutoka mashine kwenye Mpangilio), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` na `op.turn` za shughuli, na kwenye lathe `spin.mode` (css au rpm), `spin.css`, `spin.max` na `tool.nose`. Neno la herufi ambalo thamani yake ni tupu, kama `A{rot.a}` kwenye mashine isiyo na shoka A, linaachwa nje ya mstari. Linganisha na x, y na z kama maandishi kwenye nukuu (`if probe.kind == "z"`): bila nukuu, ni kuratibu za mwendo.

Mistari miwili zaidi juu ya post huifanya kuwa post ya lathe: `machine lathe` (kisha inaandika X na Z pekee, na inakataa njia za kusaga kama post ya kusaga inavyokataa njia za kugeuza) na `lathe-x diameter` au `lathe-x radius`.

Kila tukio linaweza kutumia vigezo vya aina yake ya mwendo, vilivyoandikwa `{name}`: programu (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), malighafi (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), zana (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), shughuli (`op.name`, `op.type`), `rpm`, nukta ya mwendo (`x`, `y`, `z`, `f`, na `moved`: kweli wakati mhimili umebadilika), matao (`arc.g` 2 au 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) na matundu (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Orodha ya **Matukio na vigezo** ya mhariri inaonyesha ni tukio lipi linaona lipi. Hali unayoweza kusoma na kuweka: `cool`, `offset`, na `at.x`, `at.y`, `at.z`, `at.f` (thamani za mwisho zilizoandikwa).

## Taarifa

| Taarifa | Inachofanya |
|---|---|
| `raw TEXT` | Mstari kama ulivyoandika (bila nambari ya mstari) |
| `comment TEXT` | `(TEXT)` bila herufi zisizo za ASCII na mabano |
| `emit WORD WORD …` | Mstari wa maneno; maneno yanayotoka tupu yanaachwa; hakuna maneno, hakuna mstari |
| `word WORD …` | Ongeza maneno kwenye mstari unaojengwa; `emit` tupu inaumaliza |
| `if EXPR` … `else` … `end` | Masharti: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, vinginevyo b) |
| `for tool in tools` … `end` | Mara moja kwa kila zana programu inayotumia |
| `set NAME EXPR` | Kumbuka thamani (`set offset tool.number`) |
| `reset NAME …` | Sahau maneno ya modal (kundi, herufi ya anwani kama `Z`, au `at.z`) |
| `do rapid X Y Z` | Endesha tukio la `rapid` kwa nukta |

Neno ni maandishi yaliyoandikwa yenye mashimo ya `{variable|filter}`. Vichujio ni `upper`, `lower`, `pad:N` (kujaza sifuri), `cut:N` (herufi N za kwanza), `safe` (ASCII salama kwa maoni) na `int`. Neno linalomalizika kwa `~` ni **modal**: linaandikwa tu linapotofautiana na lililoandikwa mwisho (`G1~`, `X{x}~`). Neno linalomalizika kwa `~!` linaandikwa kila mara na bado linakumbukwa. Jina ambalo si kigezo ni maandishi ya kawaida (`G81`, `mist`). Namba zinazungushwa hadi 0.001 mm na kuandikwa bila sifuri za mwisho.

## Post isichoweza kufanya

Inaamua tu jinsi mienendo inavyoandikwa, si zaidi. Haiwezi kubadilisha njia ya zana, kupanga upya shughuli, kugawanya upinde, kuongeza mhimili, kujua mwendo au kinematiki za mashine yako, wala kufanya hesabu kwenye kuratibu (hakuna `+`). Nafasi za mzunguko zenyewe zinatoka kwenye mashine iliyoelezwa kwenye Mpangilio, si kwenye post: post inaweza kubadilisha ishara yake au herufi zake, si kinematiki. Mizunguko ya maisha ya zana na ya subprogram haijajengwa. Faili ya post ya mtindo wa `.cps` kutoka programu nyingine haiwezi kupakiwa: huu ni muundo tofauti, rahisi zaidi.
