---
title: Mesh kernel
summary: ဤ version PartCraft သည် browser အတွင်း အလုပ်လုပ်သော mesh kernel ဖြင့် part တိုင်းကို တည်ဆောက်သည်။ ၎င်းသည် လုံးဝန်းသော မျက်နှာပြင်များ၊ ထုထည်များနှင့် ဖိုင်များအတွက် ဘာကိုဆိုလိုသလဲ၊ အလုပ်လုပ်နေကြောင်း ဘယ်လိုသိရမလဲ၊ exact kernel ကို စောင့်နေရသည့် features များ။
keywords: kernel, mesh, manifold, exact, b-rep, faceted, curves, opencascade, occt, fillet needs exact, not built, offline, webassembly
from: 68d32d16
---

Geometry kernel ဆိုသည်မှာ သင်၏ history ကို solid အဖြစ် ပြောင်းပေးသော အင်ဂျင်ဖြစ်သည်။ ဤ version PartCraft တွင် **mesh kernel** (manifold-3d) တစ်ခုရှိသည်။ ၎င်းသည် သင့်ကွန်ပျူတာပေါ်တွင် WebAssembly program ငယ်တစ်ခုအဖြစ် အလုပ်လုပ်ပြီး app ဖွင့်ပြီးနောက် အချိန်တိုအတွင်း အသင့်ဖြစ်သည်။ သင့် part အကြောင်း တစ်စုံတစ်ရာကိုမျှ ဘယ်နေရာသို့မျှ မပို့ပါ။

| | Mesh kernel |
|---|---|
| လုံးဝန်းသော ပုံသဏ္ဌာန်များ | Flat facets။ Part panel ရှိ **Curves** က ၎င်း၏ ကြေညက်မှုကို သတ်မှတ်သည် |
| ထုထည်နှင့် ဧရိယာ | Faceted solid အပေါ်တွင်ဖြစ်ပြီး လုံးဝန်းသော part များတွင် အနည်းငယ်နိမ့်သည် |
| Sketches, extrude, cut, revolve, holes, patterns, mirror, reference planes | ရသည် |
| Fillet နှင့် Chamfer | Flat faces ကြား straight edges တွင်; ထိတွေ့သော rounds များကို mitred ဖြင့် ပြုလုပ်သည် |
| Shell နှင့် Draft | Shell သည် flat faces များကို ဖွင့်သည် (တိကျသော wall thickness); Draft သည် flat faces များကို စောင်းစေသည် |
| Exports | STL, 3MF, STEP (faceted), drawing PDF နှင့် DXF |
| Drawing views | Facets မှ ဆွဲထားပြီး section views များ အပါအဝင် |
| Faces နှင့် edges | အမျိုးအစားအလိုက် အမည်ပေးထားပြီး သိထားသည် (flat, cylinder, cone, sphere, torus; straight, circle)၊ sketches မှ ယူသည်: Simulation, Generative နှင့် Manufacture workspaces, Measure, picking နှင့် hole table တို့က ၎င်းတို့ကို သုံးသည် |

Status bar ညာဘက်အနားရှိ chip သည် သင့် part ကို တည်ဆောက်နေစဉ် **Mesh kernel** ဟု ပြသည်။

## Exact kernel ကို စောင့်နေရသော အရာများ

Exact (B-rep) kernel သည် အမှန်အကန် စက်ဝိုင်းများ၊ cylinders နှင့် cones များ၊ မည်သည့် edge ပေါ်တွင်မဆို ချောမွေ့သော fillets၊ sweeps၊ lofts၊ surfaces၊ sheet metal၊ ribs၊ parts အများအပြား၊ STEP import နှင့် တိကျသော STEP export တို့ကို ထိန်းသိမ်းသည်။ ၎င်းတို့ကို ထို kernel ပေါ်တွင် တည်ဆောက်ထားသည်။ PartCraft ၏ ယခင် lab builds များက ၎င်းအတွက် OpenCascade ကို သုံးခဲ့သည်။ ၎င်း၏ လိုင်စင် (LGPL) သည် ဤ release နှင့် မကိုက်ညီပါ။ ဤ release ရှိ app တိုင်းသည် Apache-2.0 ဖြစ်ပြီး permissively licensed libraries များကိုသာ သုံးသည်၊ ထို့ကြောင့် ၎င်းကို မထည့်ထားပါ။ ဤအတွက် ရက်စွဲ မသတ်မှတ်ရသေးပါ။

ထိုအချိန်အထိ ထို features များကို ရွေးချယ်လိုက်သည့်အခါ **Not built yet** ဟု ပြသည်: status bar က အကြောင်းပြချက်ကို ပေးပြီး ၎င်းတို့၏ button tooltip များသည် "not built yet (needs an exact kernel)" ဖြင့် အဆုံးသတ်သည်။ [ယခုမတည်ဆောက်ရသေးသောအရာများ](topic:not-built-yet) တွင် တစ်ခုချင်းစီကို အစားထိုးနည်းနှင့်အတူ စာရင်းပြုထားသည်။

ယခင် build တွင် ထို features များဖြင့် ပြုလုပ်ထားသော part သည် ဖွင့်နိုင်ဆဲဖြစ်သည်။ ထို features များသည် history တွင် not built ဟု အမှတ်အသားပြုပြီး ကျန်သော part သည် တည်ဆောက်သည်၊ သိမ်းခြင်းက ၎င်းတို့ကို မပြောင်းလဲဘဲ ထိန်းသိမ်းသည် (အကြောင်းပြချက်ကို မြင်ရန် hover လုပ်ပါ)။

## လုံးဝန်းသော မျက်နှာပြင်များနှင့် Curves

Mesh kernel သည် စက်ဝိုင်းတစ်ခုကို polygon အဖြစ် ဆွဲသည်။ Part panel ရှိ **Curves** က စက်ဝိုင်းအပြည့်တွင် အစွန်းမည်မျှ ရှိမည်ကို သတ်မှတ်သည်; အစွန်းများ ပိုများလျှင် ပိုချောမွေ့ပြီး အမှန်တန်ဖိုးနှင့် ပိုနီးစပ်သော်လည်း တည်ဆောက်ရန် ပိုကြာသည်။ {{ui:Measure}} မှ ထုထည်များ၊ ဧရိယာများနှင့် အကွာအဝေးများသည် ဤ faceted solid အပေါ်တွင်ဖြစ်သည်: အပေါက် သို့မဟုတ် boss တစ်ခုအတွက် ၎င်းတို့သည် လုံးဝန်းသော ပုံသဏ္ဌာန်ထက် အနည်းငယ် သေးသည်။

## Online နှင့် offline

Mesh kernel သည် app ၏ ကိုယ်ပိုင် download ၏ အစိတ်အပိုင်းဖြစ်သည်။ ချိတ်ဆက်မှု လုံးဝမရှိဘဲ အလုပ်လုပ်ရန် online ရှိစဉ် offline အသုံးပြုရန် သိမ်းပါ: app bar ရှိ {{ui:Save for offline}} ကို ရွေးပြီး **Offline ready** ဟု ပြသည်အထိ စောင့်ပါ။ အသေးစိတ်: [Offline တွင် အလုပ်လုပ်ခြင်း](common:offline)။
