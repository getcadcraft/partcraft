---
title: ဂျင်နရေတာ ရေးရန်
summary: ဂျင်နရေတာသည် input များကို ကြေညာသည့် မှတ်ချက်စာကြောင်းများပါသော CraftScript၊ Lua သို့မဟုတ် Python script ဖြစ်သည်။ input များ ဖောင်ဖြစ်လာပုံ၊ script က နောက်တွင် ထားရမည့်အရာများ (body၊ sheet၊ problems)၊ ပြည့်စုံသော ဥပမာငယ်တစ်ခုနှင့် သင့် script ကို ဂျင်နရေတာအဖြစ် ဖွင့်ပုံတို့ ပါဝင်သည်။
keywords: ဂျင်နရေတာ, ရေးရန်, script, craftscript, ခေါင်းစီး, input, @input, @generator, body, sheet, problems, to_body, mfg_check, ဒေတာစာရွက်, ဥပမာ, lattice, field
from: ed8a5ed8
---

ဂျင်နရေတာသည် ထိပ်ဆုံးတွင် မှတ်ချက်စာကြောင်းအနည်းငယ်ပါသော ပုံမှန် script တစ်ခု ([CraftScript](topic:craftscript)၊ Lua သို့မဟုတ် Python) ဖြစ်သည်။ PartCraft က မှတ်ချက်များကို ဖတ်ပြီး ဖောင်ကို ဖန်တီးသည်၊ သင့် script က သတ်မှတ်ပြီးသား variable များအဖြစ် input များကို ဖတ်သည်။

## ခေါင်းစီး

ဤတို့ကို မှတ်ချက်စာကြောင်းများတွင် ထည့်ပါ (CraftScript တွင် `%`၊ Lua တွင် `--`၊ Python တွင် `#`):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

input တစ်ခုသည် `name: unit = default` ပုံစံဖြစ်ပြီး၊ ရွေးချယ်စရာအနေဖြင့် အပိုင်းအခြား `[min .. max]` (ဂဏန်းများသည် ၎င်းအတွင်း ရှိနေသည်)၊ ရွေးချယ်စရာစာရင်း `{a, b, c}` နှင့် ကိုးကားချက်အတွင်းရှိ label တို့ ပါနိုင်သည်။ unit သည် ဖောင်အတွက် label သာ ဖြစ်သည်- **တန်ဖိုးသည် ထို unit ဖြင့် ရောက်လာသည်**။ ထို့ကြောင့် SI လိုချင်သော script က ပြောင်းလဲရမည်၊ `to_si(value, 'kg/s', 'kg/s')` က unit သင်ထင်သည့်အတိုင်း ဖြစ်မဖြစ် စစ်ဆေးပေးသည်။ အမည်တွင် အက္ခရာများ၊ ဂဏန်းများနှင့် underscore သာ ပါနိုင်သည်၊ `body`၊ `sheet` နှင့် `problems` တို့ကို သီးသန့်သုံးထားပြီး ဖြစ်သည်။

## script က နောက်တွင် ထားရမည့်အရာများ

| Variable | အကြောင်းအရာ |
|---|---|
| `body` | **လိုအပ်သည်။** မျက်နှာပြင် mesh၊ များသောအားဖြင့် `[body, info] = to_body(field, h)` မှ။ run ပြီးဆုံးသည့်အခါ ပြင်ဆင်ပြီး စစ်ဆေးသည်။ |
| `sheet` | ရွေးချယ်စရာ။ struct တစ်ခု- field တစ်ခုစီသည် ဂဏန်း သို့မဟုတ် စာသား၊ သို့မဟုတ် `value`၊ `unit`၊ `ref` နှင့် `note` ပါသော struct ဖြစ်သည်။ ဒေတာစာရွက် ဖြစ်လာသည်။ |
| `problems` | ရွေးချယ်စရာ။ `mfg_check(field, 'sls', struct(), h)` မှ `problems` cell၊ သို့မဟုတ် သင့်ကိုယ်ပိုင် entry များ။ ၎င်းတို့သည် စစ်ဆေးမှုများနှင့် Problems စာရင်းသို့ ရောက်သွားသည်။ |

## ပြည့်စုံသော ဥပမာငယ်တစ်ခု

```
% နံရံပါသော အလွတ်ကုဗတစ်ခု။
% @generator အလွတ်ကုဗ
% @input side: mm = 12 [4 .. 40] "အနား"
% @input wall: mm = 1.5 [0.5 .. 5] "နံရံ"
% @input h: mm = 0.5 [0.25 .. 2] "Voxel အရွယ်အစား"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

ဤသည် ပိတ်ထားသော အကွက်တစ်ခု ဖန်တီးသည်၊ ၎င်း၏ ပိတ်ထားသော အတွင်းပိုင်းကို powder လုပ်ငန်းအတွက် စစ်ဆေးမှုက အမှားအဖြစ် တင်ပြသည်။ voxel အရွယ်အစား `h` ကို သင်လိုချင်သော အပါးဆုံးနံရံ၏ သုံးပုံတစ်ပုံ အထိ ထားပါ၊ voxel သုံးခုခန့်ထက် နည်းလျှင် နံရံသည် ယုံကြည်စိတ်ချရမည် မဟုတ်ပါ။

## Field များ

`field_sphere`၊ `field_box`၊ `field_capsule`၊ `field_cylinder`၊ `field_torus`၊ `field_revolve` (ပရိုဖိုင်မှ လှည့်ပတ်ထုထည်)၊ `tpms` (gyroid၊ Schwarz P နှင့် diamond မျက်နှာပြင်များ၊ အပိုင်းတစ်ခုလုံးတွင် ပြောင်းလဲနိုင်သော cell အရွယ်အစားနှင့် နံရံ ပါသည်)၊ `lattice` နှင့် `lattice_beams`၊ `along` (လမ်းကြောင်းတစ်လျှောက် အဝိုင်းပုံ လမ်းကြောင်း)၊ ဘူလီယံများ `field_union`၊ `field_intersect`၊ `field_subtract`၊ ချောမွေ့သော `field_blend`၊ နှင့် `field_offset`၊ `field_shell`၊ `field_move`၊ `field_rotate`၊ `field_scale`။ `sample(f, points)` က point များတွင် signed distance ကို ပေးသည် (အတွင်းတွင် negative)၊ `field_voxel` က solver များအတွက် voxel များ ပေးသည်။ [Fields](topic:fields) တွင် ၎င်းတို့ ဘာလဲ ရှင်းပြထားသည်။

သိထားသင့်သော ကန့်သတ်ချက်များ- cell ၏ လေးပုံတစ်ပုံ ခန့်ထက် ထူသော sheet နံရံသည် လမ်းကြောင်းများကို ပိတ်သည်၊ voxel သုံးခုခန့်ထက် ပါးသော အင်္ဂါရပ်သည် ညှစ်ခံရနိုင်သည်၊ `along` သည် အဝိုင်းကွန်းများကို ချိတ်ဆက်သဖြင့် အချင်းဝက် မြန်မြန်ပြောင်းလဲလျှင် ဖောင်းကြွမှု ကျန်ခဲ့သည် (ပရိုဖိုင်အတွက် `field_revolve` ကို သုံးပါ)။

## script ကို ဂျင်နရေတာအဖြစ် ဖွင့်ရန်

{{ui:အင်ဂျင်နီယာ}} workspace တွင် {{ui:ဖွင့်ရန်}} ကို နှိပ်ပြီး ဖိုင်ကို ရွေးပါ။ `@generator` သို့မဟုတ် `@input` စာကြောင်း မပါသော script ကို လက်မခံပါ၊ သတ်မှတ်စရာ မရှိမည် ဖြစ်သည်။ ဂျင်နရေတာကို ဤဘရောက်ဇာတွင် သိမ်းထားသည် (အများဆုံး 20 ခု) နှင့် {{ui:ဖယ်ရန်}} က ဖျက်ပေးသည်။ ၎င်းမှ စတင်သော body တွင် script ၏ မိတ္တူ ပါဝင်သဖြင့် အစိတ်အပိုင်းသည် ၎င်းပေါ် မမှီခိုပါ။

ဖိုင်တစ်ခုတွင် ဂျင်နရေတာ အများအပြား ထည့်ထားနိုင်သည်- JSON bundle `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`။
