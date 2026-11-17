---
title: Python ဖြင့် script များ
summary: Python 3 ဖြင့် Script workspace script များ ရေးခြင်း: built-in function များ၏ cs object၊ numpy ကဲ့သို့ တန်ဖိုးများအဖြစ် array များ (0-based index)၊ မျှဝေသော workspace၊ ပုံနှိပ်ခြင်း၊ ရှိမနေသေးသည်များ၊ နှင့် CraftScript နှင့် Lua ကဲ့သို့ Python ကို ပိတ်ထားပုံ။
keywords: Python, Python 3, CPython, WebAssembly, sealed, safe, script, ဘာသာစကား, cs, ws, workspace, numpy, array, matrix, indexing, print, display, trust
from: 66eab56d
---

Python သည် [Script workspace](topic:craftscript) ၏ တတိယ ဘာသာစကား ဖြစ်သည်။ editor အပေါ်ရှိ ဘာသာစကား box တွင် **Python** ကို ရွေးပါ (`.py` ဖိုင်သည် Python ဖြင့် အလိုအလျောက် ဖွင့်သည်)။ Python၊ Lua နှင့် CraftScript တို့သည် တူညီသော variable များနှင့် တူညီသော built-in function များကို မျှဝေသဖြင့် Python script က CraftScript script ဖန်တီးထားသည်များကို အသုံးပြုနိုင်ပြီး ပြောင်းပြန်လည်း ဖြစ်သည်။

ဝင်ရောက်ကြည့်ရှုမှုတစ်ခုတွင် ပထမ Python run သည် Python ကိုယ်တိုင် (CPython 3.14၊ 7 MB ခန့်) ကို ဤဆိုက်မှ load လုပ်သည်၊ ၎င်းသည် စက္ကန့်အနည်းငယ် ကြာသည်။ Python သည် {{ui:Save for offline}} ၏ အစိတ်အပိုင်း မဖြစ်သေးပါ: အော့ဖ်လိုင်းမတိုင်မီ အွန်လိုင်းတွင် Python script တစ်ခုကို အရင် run ပါ။

## Python ကို ပိတ်ထားသည်

Python script များသည် CraftScript နှင့် Lua script များကဲ့သို့ ပိတ်ထားသည်: part၊ variable များနှင့် built-in function များကိုသာ ရောက်ရှိနိုင်ပြီး အခြားမည်သည့်အရာမျှ မဟုတ်ပါ။ Run တိုင်းတွင် ကိုယ်ပိုင် sandbox ရှိ မှတ်ဉာဏ်ထဲတွင် ဖိုင်သစ်ပင်ငယ်တစ်ခု (၎င်း၏ standard library နှင့် run ပြီးနောက် ပျောက်သွားသော `/tmp` folder) ပါသော Python အသစ်တစ်ခုဖြစ်သည်။ Browser နှင့် command line နှစ်ခုလုံးတွင် network၊ သင့်ဖိုင်များ သို့မဟုတ် page ၏ ကျန်အပိုင်းကို ရောက်ရှိနိုင်ခြင်း မရှိပါ။ အခြားသူထံမှ script တစ်ခုသည် အချိန်နှင့် memory အများအပြား သုံးနိုင်သေးသည်: {{ui:Stop}} က ၎င်းကို ရပ်စေသည်။

## အခြေခံများ

```
A = cs.magic(3)              # built-in function တိုင်းသည် cs.<name> ဖြစ်သည်
B = A @ A.T                  # @ က matrix product ဖြစ်ပြီး .T က transpose
C = A * 2 + 1                # + - * / ** တို့သည် elementwise ဖြစ်သည်၊ numpy ကဲ့သို့
print(A[0, 1], A[-1, -1])    # 0-based; အနုတ်သည် အဆုံးမှ ရေသည်
row = A[1]                   # matrix တွင် index တစ်ခု: row တစ်ခု
big = A[A > 4]               # logical mask က element များကို ရွေးသည်
A[0, 0] = -5                 # array ထဲသို့ assign ပြုခြင်း
V, D = cs.call('eig', 2, A)  # ရလဒ်များစွာ: cs.call(name, ဘယ်နှစ်ခု, …)
```

- 1 × 1 array တစ်ခုသည် ရိုးရိုး ဂဏန်းတစ်ခုအဖြစ် ရောက်ရှိသည်; အခြား array များ၊ sparse matrix များ၊ mesh များ၊ field များနှင့် model များသည် **Value** များ ဖြစ်သည်။
- Value တစ်ခုတွင် `shape` (tuple)၊ `T`၊ `type`၊ `numel()`၊ `copy()`၊ `tolist()`၊ `len()` (၎င်း၏ row များ) နှင့် element တစ်ခုအတွက် `float()`၊ `int()` နှင့် `bool()` ရှိသည်။
- နှိုင်းယှဉ်မှုများ (`<`, `==`, …) သည် numpy ကဲ့သို့ elementwise ဖြစ်သည်: ၎င်းတို့သည် logical Value ပေးသည်။
- Built-in function သို့ ပေးပို့သော ဂဏန်းများ၏ စာရင်းများသည် array ဖြစ်လာသည်: `cs.sum([1, 2, 3])`။ `cs.tensor([[1, 2], [3, 4]])` သည် matrix တစ်ခု ပြုလုပ်သည်။
- Dict သည် struct ဖြစ်လာပြီး အရာရောများစွာပါသော list သည် cell ဖြစ်လာသည်၊ ပြန်လည်လည်း ဖြစ်သည်။

သင့် script ဖန်တီးသော global တိုင်း (ဂဏန်း၊ Value၊ dict၊ list…) သည် error ဖြစ်ပြီးနောက်ပင် run ပြီးဆုံးသည့်အခါ **Variables** tab သို့ ရောက်သည်။ `_` ဖြင့် စသော အမည်များ၊ function များ၊ class များနှင့် module များသည် Python တွင် ကျန်ရစ်သည်။ `ws.name` သည် variable ကို တိုက်ရိုက် ဖတ်သည် သို့မဟုတ် သတ်မှတ်သည်၊ `ws_names()` က ၎င်းတို့ကို စာရင်းပြုစုသည်။

`print(…)` သည် console သို့ ရေးသည်။ `display(…)` (သို့မဟုတ် `cs.display`) သည် CraftScript ကဲ့သို့ mesh၊ field သို့မဟုတ် plot ကို ပြသသည်။

## ခွဲခြမ်းစိတ်ဖြာမှု စာကြည့်တိုက်ကို ခေါ်ခြင်း

Library function များကို built-in များကဲ့သို့ ခေါ်သည်: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`။ နာမည်ကို script ထဲတွင် ဖြစ်သည့်အတိုင်း ရေးပါ: PartCraft က run မီ script သုံးသော library function များကို ရှာတွေ့သည်။

## ရှိမနေသေးသည်များ

- numpy၊ scipy နှင့် အခြား package များ: Python ၏ ကိုယ်ပိုင် standard library (`math`, `json`, `itertools`, `decimal`, `statistics`…) သာ ရှိသည်၊ ၎င်း၏ window၊ terminal နှင့် database အပိုင်းများ (`tkinter`, `curses`, `sqlite3`) မပါဝင်ပါ။
- Socket နှင့် အပြင်သို့ ရောက်သွားမည့် မည်သည့်အရာမဆို: ဤနေရာတွင် Python တွင် network မရှိပါ။
- `time.sleep` သည် ချက်ချင်း ပြန်လာသည်။
- Editor တွင် folding နှင့် CraftScript script မှ Python function ကို ခေါ်ခြင်း။
- Run တစ်ခုသည် instruction budget နှင့် Stop ကို လိုင်း 1000 တိုင်း စစ်ဆေးသည်; built-in function တစ်ခုအတွင်း ရှည်ကြာသော တွက်ချက်မှုသည် ပထမ ပြီးဆုံးရမည်။
