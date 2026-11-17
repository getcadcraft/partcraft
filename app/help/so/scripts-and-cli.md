---
title: Qoraallada iyo amarka command-ka
summary: Qaabka qoraalka PartCraft (.pcscript) kaas oo qayb oo dhan u qoro qoraal la akhrin karo, iyo qalabka amarka partcraft ee dhisa, beddela, dib u celiya oo hubiya qaybaha iyada oo aan shaashad la isticmaalin.
keywords: qoraal, pcscript, qoraal-qoraal, amar, command line, cli, terminal, kooxeed, otomaatig, hubin, lint, dhis, dhoof, maareynta noocyada, diff, qoraal parametric
from: c56df222
---

Moodelka taxaddarka leh wuxuu ka badan yahay nidaam ka badan badhamo. Qayb loo qoray qoraal waa la akhrin karaa, la eegi karaa, si toosa ugu barbar dhigi karaa, oo script ayaa dib u dhisi karaa. PartCraft labada jihoodba wuu shaqeeyaa: qayb kasta waxa lagu qori karaa script, script-na wuxuu dhisi karaa qaybta.

## Barnaamijka gudihiisa

Tabka {{ui:Halbeegyada}}, hoosta **Script**:

- {{ui:Kaydi qoraal ahaan}} wuxuu soo dejiyaa qaybta furan sida `<name>.pcscript`.
- {{ui:Fur qoraal}} wuxuu qayb ka dhisaa fayl `.pcscript`. Khalad waxa lagu sheegaa lambarka sadarka, wixna lama beddelo.

## Qaabka qoraalka

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

Xeerarka:

- Sadarka bidix ee xarfaha wuxuu bilaabaa tilmaam: `pcscript`, `part`, `param`, nooca sifada (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` iyo noocyada cusub) oo ay ku xigto magaceeda, ama `rollback <feature>`.
- Sadar-gelinta (indented) lines waa habeynta tilmaamka sare. Habeyn keligiis (`through`, `reverse`, `suppressed`) macnaheedu waa haa.
- Habeynta lambar waa lambar, ama `=` iyo hadal-qaab, taas oo samaysa isle'eg: `depth = thick`.
- Sawir-gacmeed dhexdiisa: `on` wuxuu magacaabaa diyaaradda (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); joogitaanka waa `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (wareeg ka soo horjeeda saacadda) ama `spline <name> fit|control <points>`; xidhiidhadu waa nooceeda iyo magacyada ay isku xidhaan (`O` waa asalka); cabbirku wuxuu ku dhammaadaa qiimaha ama `= expression`.
- Habeynta ikhtiyaarka ah ee joogitaanka ama xidhiidhka waxay gelaan qaansada cad ee dhamaadka, kala kala saaran `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` wuxuu bilaabaa faallo (bilowga sadarka ama ka dib meel bannaan). Magacyada leh meel bannaan waxay gelaan xigasho laba jeer ("...").
- Aqoonsiga sifooyinka waxa loo tiriyaa laga bilaabo f1 by marka loo qoro. Tixraacyada geesaha iyo dusha waxay isticmaalaan, tusaale ahaan `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Habeyn aan ereyo u lahayn qaabka waxa lagu qoraa `json` iyo qiime; waxaa loo akhrin doonaa sida ay yihiin.

Marka barnaamijka laga kaydiyo, qoraalku wuxuu ku jiraa habeyn kasta, sidaas darteed wuxuu furmaa isla qaybtaas. Jidh solid STEP oo la soo dejiyay ayaa lagu qoraa script-ka barnaamijka, iyo fayl `.step` oo gaar ah oo magacyadiisa `step-file` ku bixiyo amarka command-ka.

## Qalabka amarka command-ka

Qalabka wuxuu ku shaqeeyaa kombiyuutar leh Node.js 24, isagoo ka shaqeeya nuqul ka mid ah isha CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Waa qalab injineer horumariye ah oo isticmaala isla moduleyada barnaamijka. Qaybaha waa faylal `.partcraft.json` ama qoraallo `.pcscript`.

| Amarka | Waxa uu sameeyo |
|---|---|
| `info <part>` | Sifooyinka, halbeegyada, bar-ka rollback-ka, mugga iyo cabbirka jidhka la dhisay |
| `params <part>` | Halbeeg kasta iyo isle'eg kasta oo qiimihiisa leh |
| `set <part> width=150 Base.depth==thick` | Hore: beddel halbeegyada, xidh lambarrada (`==` ama hadal-qaab), dej lambarro fudud |
| `drive <part> Base.depth=12` | Dib u noqo: xallii halbeegga ku jira lambar la wadayo (`--prefer width` wuxuu mid dooran) |
| `build <part> --out x.step` | Wuxuu qoraa `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ama macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Hal fayl oo kasta safka miiska naqshadda |
| `variants <part> --out-dir d` ama `--zip f.zip` | Qaabeyn kasta sida STEP, IFC, DWG iyo muuqaal, miiska kala duwanaanta iyo walax maktabad (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); eeg [Samee xirmo kala duwanaan](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script ka qayb |
| `to-script <part> -o part.pcscript` | Qayb ka script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Wareeji bar-ka rollback-ka ee faylka |
| `check <part> [--strict]` | Hubinta nidaamka (hoos) |

`build` wuxuu sidoo kale qaadaa `--set name=value` (dhisidda hal mar kaliya) iyo `--upto <feature>`. Amar kasta wuxuu qaadaa `--json`. Koodhka dhamaadka: 0 waa fiican, 1 waa dhibaato la helay, 2 waa amarka si khaldan loo qoray. Script-ka meeshiisa looma beddelo: bixi `-o` si aad u kaydiso nuqul la beddelay.

## Hubinta

`check` wuxuu sheegaa waxa qaybta ka dhigaya mid adag in dambe la beddelo:

| Natiijo | Waxa loo tiriyaa |
|---|---|
| Sawir-gacmeed aad uga badan qeexan (xidhiidh isku dhaca ama soo noqnoqda) | khalad |
| Sifo aan dhisin | khalad |
| Halbeeg ama isle'eg khalad leh, ama halbeegyo isticmaalaya midba kan kale | khalad |
| Sawir-gacmeed aan dhammaystirnayn, oo leh darajooyinka xorriyadda | digniin |
| Lambarro si toos ah loogu qoray sifooyinka iyo cabbirrada oo aan halbeeg wadin | digniin |
| Halbeeg aan wax isticmaalin | digniin |
| Sifo la joojiyay; bar-ka rollback-ka aan dhamaadka ku jirin | digniin |

`--strict` wuxuu ka dhigaa digniin kasta khalad, sidaas darteed script dhis wuxuu diidi karaa qayb aan si buuxda loo wadin.

:::note
Macro-ka `.swb` waa kan qaybta moodeelka ee dukaamada badan ay isticmaalaan: marka lagu shaqeeyo barnaamijkaas, halkaas ayuu qaybta ka dhisaa. Halkan lama shaqeysiin barnaamijkaas (ma heli karo server-keenna), sidaas darteed u qaado inaysan la tijaabin.
:::
