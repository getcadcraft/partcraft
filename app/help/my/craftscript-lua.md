---
title: Lua ဖြင့် script များ
summary: Lua 5.4 ဖြင့် Script workspace script များ ရေးခြင်း: built-in function များ၏ cs table၊ index နှင့် arithmetic ပါသော တန်ဖိုးများအဖြစ် array များ၊ မျှဝေသော ws workspace၊ ရလဒ်များ ပုံနှိပ်ခြင်းနှင့် ပြသခြင်း၊ နှင့် ပိတ်ထားသည်များ။
keywords: Lua, Lua 5.4, script, ဘာသာစကား, cs table, ws, workspace, userdata, tensor, array, matrix, print, display, sandbox
from: 82c668b3
---

Lua သည် [Script workspace](topic:craftscript) ၏ ဒုတိယ ဘာသာစကား ဖြစ်သည်။ editor အပေါ်ရှိ ဘာသာစကား box တွင် **Lua** ကို ရွေးပါ (`.lua` ဖိုင်သည် Lua ဖြင့် အလိုအလျောက် ဖွင့်သည်)။ Lua နှင့် CraftScript တို့သည် တူညီသော variable များနှင့် တူညီသော built-in function များကို မျှဝေသဖြင့် Lua script က CraftScript script ဖန်တီးထားသည်များကို အသုံးပြုနိုင်ပြီး ပြောင်းပြန်လည်း ဖြစ်သည်။

## အခြေခံများ

```
-- built-in function တိုင်းသည် cs table ထဲတွင် ရှိသည်
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-based, CraftScript နှင့် တူညီသည်
print(K(1, 1), #K)             -- element တစ်ခု; element အရေအတွက်

-- workspace: script တိုင်းမြင်သော တူညီသည့် variable များ
ws.total = K(1, 1) * 2
print(ws.total)

-- function တစ်ခုမှ ရလဒ်များစွာ
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` သည် built-in function မည်သည့်အရာကိုမဆို ခေါ်ပြီး ပထမရလဒ်ကို ပြန်ပေးသည်; `cs.call(name, n, …)` သည် ရလဒ် `n` ခုကို ပြန်ပေးသည်။
- `cs.tensor({1, 2, 3})` သည် row တစ်ခု ပြုလုပ်သည်၊ `cs.tensor({{1, 2}, {3, 4}})` သည် matrix တစ်ခု ပြုလုပ်သည်။
- Array များ၊ sparse matrix များ၊ mesh များနှင့် field များသည် method များပါဝင်သော တန်ဖိုးများ ဖြစ်သည်: `t(i, j)` သို့မဟုတ် `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpose), `t:totable()`။ `+ - * / ^` တို့သည် CraftScript တွင် ဆိုလိုသည့်အတိုင်း ဆိုလိုသည် (`*` သည် matrix product ဖြစ်သည်); `t:times(u)` သည် element တစ်ခုချင်းစီကို မြှောက်သည်။
- 1×1 array တစ်ခုက ရိုးရိုး Lua ဂဏန်းတစ်ခုအဖြစ် ရောက်ရှိသည်။
- `ws.name` သည် မျှဝေသော workspace ကို ဖတ်ပြီး ရေးသည်။ သင့် script က ကျန်ခဲ့သော global variable များသည် script ပြီးဆုံးသည့်အခါ ထိုနေရာသို့ ရောက်သည်။
- `print(…)` သည် console သို့ ရေးသည်; `cs.show(f)`, `cs.plot(y)` နှင့် အခြား display function များသည် CraftScript ကဲ့သို့ အလုပ်လုပ်သည်။

## ခွဲခြမ်းစိတ်ဖြာမှု စာကြည့်တိုက်ကို ခေါ်ခြင်း

ခွဲခြမ်းစိတ်ဖြာမှု စာကြည့်တိုက်၏ function များ (Library tab) နှင့် သင့် part ၏ ကိုယ်ပိုင် script များက သတ်မှတ်ထားသော CraftScript function များကိုလည်း `cs` မှတစ်ဆင့် ရောက်ရှိနိုင်သည်:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- ရလဒ်နှစ်ခု
```

၎င်းတို့ကို script မစတင်မီ ရှာတွေ့ထားသည်၊ ထို့ကြောင့် နာမည်ကို script ထဲတွင် ရေးပါ: `cs.static_tet(` သို့မဟုတ် `cs.call('static_tet', …)`။ Script run နေစဉ် တည်ဆောက်ထားသော နာမည်သည် built-in function များကိုသာ ရောက်ရှိသည်။ `cs.struct({ … })` ဖြင့် တည်ဆောက်ထားသော struct သည် CraftScript struct ဖြစ်ပြီး ၎င်းတို့၏ Lua စာရင်း (`{ cs.struct(…), … }`) သည် cell ဖြစ်သည်၊ ၎င်းသည် စာကြည့်တိုက်၏ setting များ လိုအပ်သောအရာ ဖြစ်သည်။ Library function အတွင်း တစ်ခုခု မှားပါက စာတန်းတွင် function နာမည်နှင့် ၎င်း၏ လိုင်းကို ပြပြီး ထို function ကို ခေါ်သော သင့်လိုင်းကို ညွှန်ပြသည်။

## ပိတ်ထားသည်များ

Script များသည် ဖိုင်များ၊ network သို့မဟုတ် page ကို ရောက်ရှိနိုင်ခြင်း မရှိပါ: `io`, `os` (နာရီမှလွဲ၍), `require`, `dofile`, `loadfile` နှင့် `debug` တို့ကို ဖယ်ရှားထားသည်။ ဒေတာကို ယူလာရန် Script workspace ၏ Open နှင့် variable များကို အသုံးပြုပါ။ Step budget နှင့် ရပ်ရန် တို့သည် CraftScript နှင့် တူညီစွာ အလုပ်လုပ်သည်။
