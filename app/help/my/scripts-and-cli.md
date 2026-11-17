---
title: Script များနှင့် command line
summary: part တစ်ခုလုံးကို ဖတ်နိုင်သော စာသားအဖြစ် ရေးသည့် PartCraft script format (.pcscript) နှင့် screen မသုံးဘဲ parts များကို တည်ဆောက်၊ ပြောင်းလဲ၊ rollback လုပ်ပြီး စစ်ဆေးသည့် partcraft command line tool။
keywords: script, pcscript, စာသား, command line, cli, terminal, batch, အလိုအလျောက်, check, lint, build, export, version control, diff, parametric script
from: c56df222
---

သေချာ modeling လုပ်ခြင်းသည် ခလုတ်များထက် စည်းကမ်းပိုသက်ဆိုင်သည်။ စာသားအဖြစ် ရေးထားသော part ကို ဖတ်နိုင်၊ သုံးသပ်နိုင်၊ မျဉ်းတစ်ကြောင်းချင်း နှိုင်းယှဉ်နိုင်ပြီး script ဖြင့် ပြန်တည်ဆောက်နိုင်သည်။ PartCraft သည် နှစ်ဖက်စလုံး လုပ်ပေးသည်: part မည်သည့်အရာမဆို script အဖြစ် ရေးနိုင်ပြီး script က part ကို တည်ဆောက်သည်။

## app အတွင်း

**Parameters** tab ၏ **Script** အောက်တွင်:

- {{ui:Save as script}} သည် ဖွင့်ထားသော part ကို `<name>.pcscript` အဖြစ် ဒေါင်းလုဒ်ဆွဲသည်။
- {{ui:Open script}} သည် `.pcscript` ဖိုင်မှ part ကို တည်ဆောက်သည်။ အမှားတစ်ခုဖြစ်လျှင် မျဉ်းနံပါတ်ဖြင့် အစီရင်ခံပြီး ဘာမျှ အစားမထိုးပါ။

## script format

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

စည်းမျဉ်းများ:

- ဘယ်ဘက်အစွန်းရှိ မျဉ်းတစ်ကြောင်းသည် statement တစ်ခုကို စတင်သည်: `pcscript`၊ `part`၊ `param`၊ feature အမျိုးအစား (`sketch`၊ `extrude`၊ `revolve`၊ `hole`၊ `lpattern`၊ `cpattern`၊ `mirror`၊ `fillet`၊ `chamfer`၊ `shell`၊ `import` နှင့် အသစ်များ) နှင့် ၎င်း၏ အမည်၊ သို့မဟုတ် `rollback <feature>`။
- ခွဲထားသော (indent) မျဉ်းများသည် အပေါ်ရှိ statement ၏ ဆက်တင်များ ဖြစ်သည်။ ကိုယ်တိုင်ရပ်တည်သော ဆက်တင် (`through`၊ `reverse`၊ `suppressed`) သည် ဟုတ်ကဲ့ ဟု ဆိုလိုသည်။
- နံပါတ်ဆက်တင်သည် နံပါတ် သို့မဟုတ် `=` နှင့် expression ဖြစ်ပြီး equation ဖြစ်စေသည်: `depth = thick`။
- sketch တွင်: `on` က plane ကို အမည်ပေးသည် (`front`၊ `top`၊ `right`၊ `face Base end`၊ `face Revolve1 side l3`); geometry သည် `point <name> x, y`၊ `line <name> <point> <point>`၊ `circle <name> <centre> <radius>`၊ `arc <name> <centre> <start> <end>` (နာရီလက်တံ၏ ဆန့်ကျင်ဘက်) သို့မဟုတ် `spline <name> fit|control <points>`; relation များသည် ၎င်းတို့၏ အမျိုးအစားနှင့် ချိတ်ဆက်သော အမည်များ ဖြစ်သည် (`O` သည် origin); dimension သည် ၎င်း၏တန်ဖိုး သို့မဟုတ် `= expression` ဖြင့် အဆုံးသတ်သည်။
- geometry သို့မဟုတ် relation မျဉ်း၏ ရွေးချယ်နိုင်သော ဆက်တင်များကို စတုရန်းကွင်းစကွင်းအဆုံးတွင် `;` ဖြင့် ခြားထည့်သည်: `[construction]`၊ `[side -1; label 5, 3]`။
- `#` သည် comment စတင်စေသည် (မျဉ်းအစ သို့မဟုတ် space နောက်တွင်)။ space ပါသော အမည်များကို "double quotes" ထဲတွင် ထည့်ပါ။
- feature id များသည် ရေးသားသည့် အစီအစဉ်အတိုင်း f1 မှ ရေတွက်သည်။ edge နှင့် face ကိုးကားချက်များက ၎င်းတို့ကို သုံးသည်၊ ဥပမာ `edge f2.side:l3 f2.end [at 50, 0, 10]`။
- format က စကားလုံးမရှိသော ဆက်တင်များကို `json` နှင့် တန်ဖိုးဖြင့် ရေးပြီး ထိုအတိုင်း ပြန်ဖတ်သည်။

app မှ သိမ်းသော script တွင် ဆက်တင်အားလုံး ပါသောကြောင့် တူညီသော part အဖြစ် ဖွင့်သည်။ app မှ တင်သွင်းထားသော STEP solid ကို app မှ script အတွင်း ရေးပြီး command line မှ `step-file` ဖြင့် အမည်ပေးထားသော သီးခြား `.step` ဖိုင်အဖြစ် ရေးသည်။

## command line tool

tool ကို Node.js 24 ပါသော ကွန်ပျူတာတွင် CadCraft source ၏ မိတ္တူမှ လည်ပတ်သည်: `node tools/partcraft-cli/partcraft.mjs <command>`။ ၎င်းသည် developer tool ဖြစ်ပြီး app နှင့် တူညီသော module များကို သုံးသည်။ Parts များသည် `.partcraft.json` ဖိုင်များ သို့မဟုတ် `.pcscript` scripts များ ဖြစ်သည်။

| Command | ဘာလုပ်သလဲ |
|---|---|
| `info <part>` | Features၊ parameters၊ rollback bar၊ တည်ဆောက်ထားသော solid ၏ ထုထည်နှင့် အရွယ်အစား |
| `params <part>` | parameter နှင့် equation တိုင်းကို တန်ဖိုးနှင့်အတူ |
| `set <part> width=150 Base.depth==thick` | Forward: parameters ပြောင်းရန်၊ နံပါတ်များ ချိတ်ရန် (`==` သို့မဟုတ် expression)၊ ရိုးရိုးနံပါတ်များ သတ်မှတ်ရန် |
| `drive <part> Base.depth=12` | Backward: driven နံပါတ်၏ နောက်ကွယ်ရှိ parameter ကို ဖြေရှင်းရန် (`--prefer width` က တစ်ခုကို ရွေးသည်) |
| `build <part> --out x.step` | `.step`၊ `.stl`၊ `.3mf`၊ `.json`၊ `.pcscript` သို့မဟုတ် macro (`.swb`) ရေးသည် |
| `build <part> --table sizes.csv --out-dir sizes` | design table အတန်းတစ်ခုစီအတွက် ဖိုင်တစ်ခု |
| `variants <part> --out-dir d` သို့မဟုတ် `--zip f.zip` | configuration တိုင်းကို STEP၊ IFC၊ DWG နှင့် preview၊ variants table နှင့် library item အဖြစ် (`--only "A,B"`၊ `--formats step,ifc,dwg,preview`၊ `--no-item`); [variant pack ပြုလုပ်ရန်](topic:variant-pack) ကို ကြည့်ပါ |
| `script <in.pcscript> -o part.json` | Script မှ part |
| `to-script <part> -o part.pcscript` | Part မှ script |
| `rollback <part> [<feature>]`၊ `forward <part> [--end]` | ဖိုင်ထဲရှိ rollback bar ကို ရွှေ့ရန် |
| `check <part> [--strict]` | discipline check (အောက်တွင်) |

`build` သည် `--set name=value` (ဤ build အတွက်သာ) နှင့် `--upto <feature>` ကိုလည်း လက်ခံသည်။ command အားလုံးက `--json` ကို လက်ခံသည်။ exit codes: 0 ကောင်း၊ 1 ပြဿနာတွေ့၊ 2 command ကို မှားရိုက်ထား။ script ကို နေရာတွင် ဘယ်တော့မှ ပြန်မရေးပါ: ပြောင်းလဲထားသော မိတ္တူကို သိမ်းရန် `-o` ပေးပါ။

## check

`check` သည် part ကို နောင်တွင် ပြောင်းရခက်စေသည့်အရာများကို အစီရင်ခံသည်:

| တွေ့ရှိချက် | ရေတွက်ပုံ |
|---|---|
| အလွန်သတ်မှတ်ထားသော sketch (ဆန့်ကျင်သော သို့မဟုတ် ထပ်နေသော relations) | error |
| တည်ဆောက်မရသော feature | error |
| error ရှိသော parameter သို့မဟုတ် equation၊ သို့မဟုတ် အချင်းချင်း သုံးနေသော parameters | error |
| မလုံလောက်စွာ သတ်မှတ်ထားသော sketch၊ degrees of freedom ဖြင့် | warning |
| parameter တစ်ခုက မမောင်းနှင်သော features နှင့် dimensions တွင် တိုက်ရိုက်ရိုက်ထားသော နံပါတ်များ | warning |
| မည်သူမျှ မသုံးသော parameter | warning |
| suppressed feature; rollback bar အဆုံးတွင် မရှိခြင်း | warning |

`--strict` က warning တိုင်းကို error ဖြစ်စေသောကြောင့် build script က အပြည့်အဝ မမောင်းနှင်ထားသော part ကို ငြင်းနိုင်သည်။

:::note
`.swb` macro output သည် အများစု shop များသုံးသော part modeler အတွက်ဖြစ်သည်: ထို program အတွင်း run လျှင် ထို program တွင် part ကို တည်ဆောက်သည်။ ထို program ကို ဤနေရာတွင် မ run ထားပါ (ကျွန်ုပ်တို့ server များတွင် မရနိုင်ပါ) ထို့ကြောင့် စမ်းသပ်မထားသည်အဖြစ် သတ်မှတ်ပါ။
:::
