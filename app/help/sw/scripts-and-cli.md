---
title: Hati na mstari wa amri
summary: Muundo wa hati za PartCraft (.pcscript) unaoandika sehemu nzima kama maandishi yanayosomeka, na zana ya mstari wa amri ya partcraft inayojenga, kubadilisha, kurudisha nyuma na kukagua sehemu bila skrini.
keywords: hati, pcscript, maandishi, mstari wa amri, cli, terminal, kundi, otomatiki, ukaguzi, lint, jenga, hamisha, udhibiti wa toleo, diff, hati ya parametric
from: c56df222
---

Kumodeli kwa uangalifu ni zaidi kuhusu nidhamu kuliko vitufe. Sehemu iliyoandikwa kama maandishi inaweza kusomwa, kukaguliwa, kulinganishwa mstari kwa mstari na kujengwa upya na hati. PartCraft inaenda pande zote mbili: sehemu yoyote inaweza kuandikwa kama hati, na hati hujenga sehemu.

## Ndani ya programu

Kwenye kichupo cha {{ui:Parameters}}, chini ya **Hati**:

- {{ui:Save as script}} hupakua sehemu iliyo wazi kama `<jina>.pcscript`.
- {{ui:Open script}} hujenga sehemu kutoka faili ya `.pcscript`. Kosa huripotiwa pamoja na namba ya mstari wake, na hakuna kitu kinachobadilishwa.

## Muundo wa hati

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

Kanuni:

- Mstari unaoanzia ukingo wa kushoto huanza kauli: `pcscript`, `part`, `param`, aina ya kipengele (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` na aina mpya zaidi) ikifuatiwa na jina lake, au `rollback <feature>`.
- Mistari iliyoingizwa ni mipangilio ya kauli iliyo juu yake. Mpangilio unaosimama peke yake (`through`, `reverse`, `suppressed`) unamaanisha ndiyo.
- Mpangilio wa namba ni namba, au `=` na msemo, ambao huunda mlinganyo: `depth = thick`.
- Katika mchoro wa awali: `on` hutaja ndege (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); jiometri ni `point <jina> x, y`, `line <jina> <nukta> <nukta>`, `circle <jina> <kituo> <radius>`, `arc <jina> <kituo> <mwanzo> <mwisho>` (kinyume cha saa) au `spline <jina> fit|control <nukta>`; uhusiano ni aina yake pamoja na majina yanayounganisha (`O` ni asili); kipimo huishia na thamani yake au `= msemo`.
- Mipangilio ya hiari ya mstari wa jiometri au uhusiano huwekwa kwenye mabano ya mraba mwishoni, ikitenganishwa na `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` huanzisha maoni (mwanzoni mwa mstari au baada ya nafasi). Majina yenye nafasi huwekwa kwenye "nukuu mbili".
- Namba za vitambulisho vya vipengele huhesabiwa kutoka f1 kwa mpangilio wa kuandikwa. Marejeo ya ukingo na uso huzitumia, kwa mfano `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Mipangilio ambayo muundo hauna maneno yake huandikwa `json` pamoja na thamani; husomwa tena jinsi zilivyo.

Ikihifadhiwa kutoka kwenye programu, hati inajumuisha kila mpangilio, kwa hiyo hufunguka kama sehemu ile ile. Kigumu cha STEP kilichoingizwa huandikwa ndani ya hati kutoka kwenye programu, na kama faili tofauti ya `.step` kinachotajwa na `step-file` kutoka mstari wa amri.

## Zana ya mstari wa amri

Zana hii huendeshwa kwenye kompyuta yenye Node.js 24, kutoka nakala ya msimbo chanzo wa CadCraft: `node tools/partcraft-cli/partcraft.mjs <amri>`. Ni zana ya msanidi na hutumia moduli zilezile za programu. Sehemu ni faili `.partcraft.json` au hati `.pcscript`.

| Amri | Kazi yake |
|---|---|
| `info <part>` | Vipengele vya muundo, vigezo, upau wa rollback, na kigumu kilichojengwa pamoja na ujazo wake na ukubwa |
| `params <part>` | Kila kigezo na kila mlinganyo pamoja na thamani yake |
| `set <part> width=150 Base.depth==thick` | Mbele: badilisha vigezo, unganisha namba (`==` au msemo), weka namba za kawaida |
| `drive <part> Base.depth=12` | Nyuma: tatua kigezo kilicho nyuma ya namba inayoendeshwa (`--prefer width` huchagua moja) |
| `build <part> --out x.step` | Huandika `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` au macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Faili moja kwa kila safu ya jedwali la muundo |
| `variants <part> --out-dir d` au `--zip f.zip` | Kila usanidi kama STEP, IFC, DWG na onyesho la kuona, jedwali la vibadala na kipengee cha maktaba (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); angalia [Tengeneza kifurushi cha vibadala](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Hati hadi sehemu |
| `to-script <part> -o part.pcscript` | Sehemu hadi hati |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Sogeza upau wa rollback kwenye faili |
| `check <part> [--strict]` | Ukaguzi wa nidhamu (hapa chini) |

`build` pia inachukua `--set name=value` (kwa ujenzi huu tu) na `--upto <feature>`. Kila amri inachukua `--json`. Misimbo ya kutoka: 0 sawa, 1 kimepatikana tatizo, 2 amri imeandikwa vibaya. Hati haibadilishwi mahali pake kamwe: toa `-o` ili kuhifadhi nakala iliyobadilishwa.

## Ukaguzi

`check` huripoti kile kinachofanya sehemu iwe ngumu kubadilisha baadaye:

| Kilichopatikana | Huhesabiwa kama |
|---|---|
| Mchoro wa awali uliojaa kupita kiasi (uhusiano unaogongana au kurudiwa) | hitilafu |
| Kipengele cha muundo kisichojengeka | hitilafu |
| Kigezo au mlinganyo wenye hitilafu, au vigezo vinavyotegemeana | hitilafu |
| Mchoro wa awali usiofungwa vya kutosha, pamoja na shahada zake za uhuru | onyo |
| Namba zilizoandikwa moja kwa moja kwenye vipengele na vipimo ambavyo hakuna kigezo kinachoviendesha | onyo |
| Kigezo ambacho hakuna kinachokitumia | onyo |
| Kipengele kilichozimwa; upau wa rollback usipokuwa mwishoni | onyo |

`--strict` hubadilisha kila onyo kuwa hitilafu, ili hati ya ujenzi ikatae sehemu isiyoendeshwa kikamilifu.

:::note
Matokeo ya macro ya `.swb` ni kwa programu ya modeli ya sehemu ambayo maduka mengi hutumia: ikiendeshwa ndani ya programu hiyo, hujenga sehemu huko. Haijaendeshwa katika programu hiyo hapa (haipatikani kwenye seva zetu), kwa hiyo ichukulie kama haijajaribiwa.
:::
