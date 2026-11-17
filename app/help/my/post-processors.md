---
title: တည်းဖြတ်နိုင်သော post processor များ
summary: Post ဆိုသည်မှာ toolpath ကို သင့် control အတွက် G-code အဖြစ် ပြောင်းပေးသော စာသားဖိုင်တိုတစ်ခု ဖြစ်သည်။ Built-in post တစ်ခုကို ကူးပြီး လိုအပ်သော စာကြောင်းများ (line number၊ tool change၊ home move၊ end code) ကို ပြောင်းပါ၊ ရိုက်သည်နှင့်အမျှ ရေးမည့် G-code ကို ကြည့်ပါ၊ ၎င်းကို part နှင့်အတူ သိမ်းပါ။
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, edit post, custom post, cpost, tool change, M6, G43, canned cycle, line numbers, modal, event, variable
from: 36ab8a38
---

Toolpath တစ်ခုတည်းကို control မတူညီသည်အလိုက် မတူညီစွာ ရေးရသည်- line number ရှိ သို့မဟုတ် မရှိ၊ `M6` သို့မဟုတ် pause၊ `G28` သို့မဟုတ် `G53`၊ `M30` သို့မဟုတ် `M2`။ **Post** ဆိုသည်မှာ ၎င်းကို ဘယ်လိုရေးရမည်ကို ပြောသော တိုတောင်းသည့် စာသား ဖြစ်သည်။ PartCraft ၏ built-in post သုံးခု (Fanuc-style၊ GRBL နှင့် LinuxCNC) ကို ဤပုံစံဖြင့် ရေးထားသဖြင့် ကိုယ်ပိုင် post ကို ၎င်းတို့ထဲမှ တစ်ခု၏ မိတ္တူဖြင့် စနိုင်သည်။

Cut မလုပ်မီ သင့်စက်၏ ကိုယ်ပိုင် simulator တွင် output ကို စစ်ဆေးပါ၊ ပထမဆုံး ပစ္စည်းအပေါ်တွင် လေထဲ၌ run ကြည့်ပါ။ Built-in post များသည် ဤပုံစံ မရှိမီက ရေးခဲ့သည့်အတိုင်း အတိအကျ ရေးသည် (tests များက program ရာပေါင်းများစွာအတွက် byte အလိုက် နှိုင်းယှဉ်သည်)၊ သို့သော် ဤအရာတွင် သင့်စက်ပေါ်တွင် သက်သေမပြရသေးပါ၊ သင် ပြောင်းလဲသော post သည် သင့်ဘာသာ သက်သေပြရမည်။

## တစ်ခု ဖန်တီးခြင်း

Manufacture ထဲတွင် **Post** အောက်၌-

- Built-in control တစ်ခုပေါ်ရှိ {{ui:Edit post…}} သည် **သင့်ကိုယ်ပိုင် မိတ္တူ** ကို ဖွင့်သည်။ သင့်ကိုယ်ပိုင် post တစ်ခုပေါ်တွင် ၎င်း post ကိုပင် ဖွင့်သည်။
- {{ui:New post…}} သည် event အားလုံး ပါဝင်သော အလွတ် post အသေးတစ်ခုဖြင့် စသည်။
- {{ui:Import post file…}} သည် `.cpost` စာသားဖိုင် (editor ရှိ **ဖိုင်အဖြစ် သိမ်းရန်…** မှ ရရှိသော ဖိုင်) ကို ဖတ်သည်။

Editor တွင် စာသား၊ ဖတ်နိုင်/မနိုင် (နှင့် မှားနေသော စာကြောင်း) ပြသော စာကြောင်း၊ ရိုက်သည်နှင့်အမျှ post ရေးမည့် G-code ကို ပြသည်။ **ဖြင့် အစမ်းကြည့်ရန်** သည် event အားလုံးကို run သော နမူနာ program တစ်ခု သို့မဟုတ် ဤ part ၏ ကိုယ်ပိုင် program ကို ရွေးသည်။ {{ui:Save}} သည် post ကို part ၏ ဖိုင်တွင် သိမ်းသည် (post ၂၀ အထိ) နှင့် control အဖြစ် ရွေးသည်။ Post များသည် part နှင့်အတူ သွားသည်၊ အခြား part တွင် အသုံးပြုရန် ဖိုင်အဖြစ် သိမ်းပြီး ထို part တွင် import လုပ်ပါ။

## Post ၏ ပုံစံ

```
post mymill
name ကျွန်ုပ်၏ mill (.nc)
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

`//` ဖြင့် စသော စာကြောင်းများနှင့် အလွတ်စာကြောင်းများကို လျစ်လျူရှုသည်။ အပေါ်တွင် settings များ၊ ထို့နောက် event တစ်ခုစီအတွက် `on <event>` block တစ်ခု၊ `end` ဖြင့် ပိတ်သည်။ ချန်ထားသော event သည် ဘာမျှ မရေးပါ။

| Setting | အဓိပ္ပာယ် |
|---|---|
| `post <id>` | Post ၏ id- အက္ခရာများ၊ ဂဏန်းများ၊ `-` နှင့် `_` |
| `name <text>` | Control စာရင်းတွင် ပြသမည့် အရာ |
| `extension <ext>` | ဖိုင် extension- nc၊ ngc၊ tap … |
| `line-numbers 10` / `off` | `emit` စာကြောင်းတိုင်းတွင် `N10`၊ `N20` … သို့မဟုတ် ဘာမျှမရှိ |
| `decimal-point yes` / `no` | `10.` အစား `10` (comment များတွင် point မပါပါ) |
| `canned-cycles yes` / `no` | `no`: hole များကို ၎င်းတို့ကိုယ်စားပြုသော G0/G1 move များအဖြစ် ရေးသည် |
| `modal <group> <words>` | Group ၏ စကားလုံးများ (`modal motion G0 G1 G2 G3`) ကို ပြောင်းသည့်အခါမှသာ ရေးသည် |

## Events

Program တစ်ခုအတွက် ၎င်းတို့ ဤအစဉ်အတိုင်း run သည်- `start`; ထို့နောက် operation တိုင်းအတွက် `operation`၊ `tool-change` (tool ပြောင်းသည့်အခါ)၊ `spindle` (အမြန်နှုန်း ပြောင်းသည့်အခါ)၊ `approach` (ပထမ point သို့ တက်သော move၊ ပထမ rapid မတိုင်မီ)၊ `coolant-on`၊ ထို့နောက် ၎င်း၏ move များကို `rapid`၊ `feed` နှင့် `arc` ဖြင့်၊ canned cycle တစ်ခုစီကို `cycle-start`၊ hole တစ်ခုစီအတွက် `cycle-hole` တစ်ခု နှင့် `cycle-end` ဖြင့်၊ နောက်ဆုံးတွင် `end`။

Event တစ်ခုစီသည် ၎င်း၏ အမျိုးအစား move ၏ variable များကို `{name}` ဟု ရေးပြီး သုံးနိုင်သည်- program (`name`၊ `program`၊ `setup.axis`၊ `setup.origin`၊ `setup.coolant`)၊ stock (`stock.kind`၊ `stock.d`၊ `stock.sx`၊ `stock.sy`၊ `stock.sz`၊ `stock.minx` … `stock.maxz`)၊ tool (`tool.number`၊ `tool.desc`၊ `tool.kind`၊ `tool.d`၊ `tool.flutes`၊ `tool.fluteLen`)၊ operation (`op.name`၊ `op.type`)၊ `rpm`၊ move ၏ point (`x`၊ `y`၊ `z`၊ `f`၊ နှင့် `moved`- axis တစ်ခု ပြောင်းသည့်အခါ true)၊ arc များ (`arc.g` 2 သို့မဟုတ် 3၊ `arc.i`၊ `arc.j`၊ `arc.cx`၊ `arc.cy`) နှင့် hole များ (`hole.x`၊ `hole.y`၊ `hole.z`၊ `hole.r`၊ `hole.q`၊ `hole.return`၊ `hole.first`၊ `cycle.kind`၊ `cycle.init`၊ `feed`)။ Editor ရှိ **Events နှင့် variables** စာရင်းတွင် မည်သည့် event က မည်သည်ကို မြင်သည်ကို ပြသည်။ ဖတ်နိုင်ပြီး သတ်မှတ်နိုင်သော state- `cool`၊ `offset`၊ နှင့် `at.x`၊ `at.y`၊ `at.z`၊ `at.f` (နောက်ဆုံး ရေးထားသော တန်ဖိုးများ)။

## Statement များ

| Statement | ဘာလုပ်သလဲ |
|---|---|
| `raw TEXT` | ရိုက်ထားသည့်အတိုင်း စာကြောင်းတစ်ခု (line number မပါ) |
| `comment TEXT` | `(TEXT)`၊ ASCII မဟုတ်သော စာလုံးနှင့် bracket များကို ဖယ်ထုတ်ထား |
| `emit WORD WORD …` | Word များပါသော စာကြောင်းတစ်ခု၊ ဗလာဖြစ်သော word များကို ချန်သည်၊ word မရှိလျှင် စာကြောင်း မရှိ |
| `word WORD …` | တည်ဆောက်နေသော စာကြောင်းသို့ word ထည့်သည်၊ `emit` ချည်းသက်သက်သည် စာကြောင်းကို ပိတ်သည် |
| `if EXPR` … `else` … `end` | အခြေအနေများ- `a == b`၊ `a != b`၊ `not a`၊ `a and b`၊ `a or b`၊ `a??b` (a၊ မဟုတ်လျှင် b) |
| `for tool in tools` … `end` | Program က သုံးသော tool တစ်ခုစီအတွက် တစ်ကြိမ်စီ |
| `set NAME EXPR` | တန်ဖိုးကို မှတ်ထားသည် (`set offset tool.number`) |
| `reset NAME …` | Modal word များကို မေ့သည် (group၊ `Z` ကဲ့သို့ address အက္ခရာ၊ သို့မဟုတ် `at.z`) |
| `do rapid X Y Z` | Point တစ်ခုအတွက် `rapid` event ကို run သည် |

Word တစ်ခုသည် `{variable|filter}` အပေါက်များပါသော ရိုက်ထားသော စာသား ဖြစ်သည်။ Filter များမှာ `upper`၊ `lower`၊ `pad:N` (သုညဖြည့်)၊ `cut:N` (ပထမ N လုံး)၊ `safe` (comment-safe ASCII) နှင့် `int` ဖြစ်သည်။ `~` ဖြင့် အဆုံးသတ်သော word သည် **modal** ဖြစ်သည်- နောက်ဆုံး ရေးထားသည်နှင့် ကွဲပြားမှသာ ရေးသည် (`G1~`၊ `X{x}~`)။ `~!` ဖြင့် အဆုံးသတ်သော word သည် အချိန်တိုင်း ရေးပြီး မှတ်ထားဆဲ ဖြစ်သည်။ Variable မဟုတ်သော အမည်သည် ရိုးရိုးစာသား ဖြစ်သည် (`G81`၊ `mist`)။ ဂဏန်းများကို 0.001 mm သို့ ပတ်ပြီး နောက်ဆုံး သုညများ မပါဘဲ ရေးသည်။

## Post မလုပ်နိုင်သည်များ

Post သည် move များကို မည်သို့ ရေးမည်ကိုသာ ဆုံးဖြတ်သည်၊ ထို့ထက်မပို။ Toolpath ကို ပြောင်းခြင်း၊ operation များကို စီခြင်း၊ arc ကို ခွဲခြင်း၊ axis ထည့်ခြင်း၊ သင့်စက်၏ travel သို့မဟုတ် kinematics ကို သိခြင်း၊ သို့မဟုတ် coordinate များပေါ် arithmetic လုပ်ခြင်း (`+` မရှိ) တို့ကို မလုပ်နိုင်ပါ။ Probing၊ tool-life နှင့် subprogram cycle များ၊ 4th- နှင့် 5th-axis output နှင့် lathe code များကို မတည်ဆောက်ရသေးပါ။ အခြား program မှ `.cps`-ပုံစံ post ဖိုင်ကို မတင်နိုင်ပါ- ဤသည်မှာ မတူညီသော၊ ရိုးရှင်းသော ပုံစံ ဖြစ်သည်။
