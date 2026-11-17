---
title: PartCraft ဆက်တင်များ
summary: view ကို လှည့်ရန် mouse ခလုတ်ကို ရွေးချယ်ပါ၊ trackpad swipe ဖြင့် part ကို လှည့်ပြီး pan လုပ်စေပါ၊ sketch ဆွဲစဉ် အလိုအလျောက် relations ကို ဖွင့်/ပိတ်ပါ၊ simulation solvers အသုံးပြုသော threads အရေအတွက် သတ်မှတ်ပါ။
keywords: ဆက်တင်များ, preferences, options, mouse, middle button, wheel button, orbit, rotate, လှည့်ခြင်း, trackpad, touchpad, scroll, swipe, pinch, relations, constraints, auto constrain, automatic relations, snap, coincident, threads, solver threads, cores, processors, multi-threaded, faster solve, parallel
from: 759edcaf
---

{{ui:Settings}} ကို app bar ရှိ ဂီယာဖြင့် သို့မဟုတ် {{key:Mod+,}} ဖြင့် ဖွင့်ပါ။ ပထမ tab ဖြစ်သော {{ui:PartCraft}} တွင် ဤ app ပိုင်သော ဆက်တင်များ ရှိသည်; {{ui:General}} တွင် CadCraft app အားလုံး မျှဝေသော ဆက်တင်များ (theme၊ toolbar၊ panels) ရှိသည်။ PartCraft ဆက်တင်များသည် app အတွင်းတွင်သာ ရှိသည်: ဤနေရာတွင် ပြောင်းပြီး ဤ browser က မှတ်ထားသည်။ {{ui:Reset PartCraft settings}} သည် အရာအားလုံးကို စတင်ချိန်အတိုင်း ပြန်ထားသည်။

## view လှည့်ခြင်း

- **ဘယ်ခလုတ်** (စတင်ချိန်): ဘယ်ခလုတ်ဖြင့် ဆွဲလျှင် part ကို လှည့်မည်; ညာ သို့မဟုတ် အလယ်ခလုတ်ဖြင့် ဆွဲလျှင် pan လုပ်မည်။
- **အလယ်ခလုတ်**: wheel ကို ဖိပြီး ဆွဲလျှင် part ကို လှည့်မည်; {{key:Shift}} (သို့မဟုတ် {{key:Ctrl}}၊ သို့မဟုတ် ⌘) ကို ဖိထားပြီး အလယ်ခလုတ်ဖြင့် ဆွဲခြင်း၊ သို့မဟုတ် ညာခလုတ်ဖြင့် ဆွဲခြင်းဖြင့် pan လုပ်မည်။ ဘယ်ခလုတ်သည် faces၊ edges နှင့် planes ကိုသာ ရွေးသောကြောင့် အနည်းငယ်သာ ရွေ့သော နှိပ်ခြင်းက part ကို ဘယ်တော့မှ မလှည့်ပါ။ CAD program များစွာက ဤနည်းဖြင့် အလုပ်လုပ်သည်။

wheel သည် မည်သည့်နည်းဖြင့်ဖြစ်စေ pointer ဆီသို့ ဇူးမ်လုပ်သည်။ sketch တွင် ညာနှင့်အလယ်ခလုတ်များသည် ယခင်အတိုင်း pan လုပ်သည်။

## scroll လုပ်ခြင်း: mouse wheel သို့မဟုတ် trackpad

- **ခန့်မှန်းပါ** (စတင်ချိန်): PartCraft က scroll ကို ကြည့်သည်။ trackpad ပို့သော ဘေးသို့ သို့မဟုတ် ကောင်းမွန်သော scroll က part ကို လှည့်သည်; wheel အဆစ်အလိုက် scroll က ဇူးမ်လုပ်သည်။
- **Mouse wheel**: scroll သည် အမြဲ pointer ဆီသို့ ဇူးမ်လုပ်သည်။
- **Trackpad**: လက်ချောင်းနှစ်ချောင်းဖြင့် swipe လုပ်၍ part ကို လှည့်ပါ၊ {{key:Shift}} ကို ဖိပြီး swipe လုပ်၍ pan လုပ်ပါ၊ pinch ဖြင့် ဇူးမ်လုပ်ပါ။ sketch တွင် လက်ချောင်းနှစ်ချောင်း swipe သည် sketch ကို pan လုပ်သည်။

pinch သည် ရွေးချယ်မှု အားလုံးတွင် ဇူးမ်လုပ်သည်။ "ခန့်မှန်းပါ" က သင့် mouse သို့မဟုတ် trackpad အတွက် မှားလျှင် သင်ရှိသည့်တစ်ခုကို ရွေးပါ။ နောက်ထပ်အချက်အလက်များကို [Trackpad၊ touch နှင့် သေးငယ်သော screen များ](topic:trackpad-and-touch) တွင် ကြည့်ပါ။

## sketch ဆွဲစဉ် relations ထည့်ခြင်း

**ဆွဲစဉ် relations ထည့်ရန်** (စတင်ချိန်တွင် ဖွင့်): point တစ်ခုသို့ snap ဖြစ်သော နှိပ်ခြင်းက အသစ် point ကို ၎င်းနှင့် coincident ဖြစ်စေသည်၊ curve ပေါ်တွင် နှိပ်ခြင်းက point ကို ထို curve ပေါ်တွင် ထားသည်၊ နီးနီး အလျားလိုက် သို့မဟုတ် ဒေါင်လိုက် ဆွဲထားသော မျဉ်းသည် horizontal သို့မဟုတ် vertical ဖြစ်သည်။ [Relations နှင့် dimensions](topic:relations-dimensions) ကို ကြည့်ပါ။

အခြား geometry နှင့် မချိတ်ဘဲ နီးနီး နေရာချလိုသောအခါ ပိတ်ပါ။ pointer သည် points နှင့် curves သို့ ဆက်လက် snap ဖြစ်သော်လည်း ဘာမျှ မချိတ်ဆက်ပါ: ကွင်းဆက် ဆွဲထားသော မျဉ်းများသည် ၎င်းတို့၏ အဆုံးများကို မမျှဝေသောကြောင့် ဆွဲချခြင်းက ၎င်းတို့ကို ခွဲထုတ်နိုင်သည်။ လိုချင်သော relations များကို ညာဘက်ပန်နယ်မှ ကိုယ်တိုင် ထည့်ပါ။ ပိတ်ထားသော profile သည် ၎င်း၏ အစွန်းများ ထိသည့်အခါ extrude ဖြစ်ဆဲဖြစ်သည်။

:::note
ဤဆက်တင်သည် ဆွဲမှု အသစ်က ထည့်သည့်အရာကိုသာ ပြောင်းသည်။ sketch ထဲရှိ relations များ ကျန်ရစ်သည်၊ Fillet tool သည် ၎င်း၏ tangent arc နှင့် radius ကို ဆက်ဖန်တီးသည်။
:::

## sketch ဆွဲစဉ် dimension ထည့်ခြင်း

**ဆွဲစဉ် dimension ထည့်ရန်** (စတင်ချိန်တွင် ဖွင့်): မျဉ်း၊ rectangle၊ circle သို့မဟုတ် arc ဆွဲနေစဉ် နံပါတ်ရိုက်လျှင် pointer ဘေးရှိ size box ကို ဖြည့်မည် ({{key:Tab}} က နောက် box သို့ သွားသည်) နှင့် {{key:Enter}} က ထိုအရွယ်အစားဖြင့် ပုံကို ဆွဲမည်၊ ရိုက်ထားသော size တိုင်းအတွက် driving dimension ပါမည်။ ပိတ်ထားလျှင် ဆွဲစဉ် နံပါတ်ရိုက်ခြင်းက ဘာမျှ မလုပ်ပါ၊ ပုံများကို နှိပ်ခြင်းဖြင့်သာ ဆွဲမည်။ [ဆွဲစဉ် အရွယ်အစား ရိုက်ရန်](topic:sketch-basics#type-the-size-as-you-draw) ကို ကြည့်ပါ။

## corner indicator

3D view ၏ ထောင့်တွင် ပြသသည့်အရာ: **View cube** (စတင်ချိန်; ညာဘက်အပေါ်; မျက်နှာ၊ edge သို့မဟုတ် ထောင့်ကို နှိပ်ပါက ထိုနေရာမှ ကြည့်မည်၊ ဆွဲလျှင် orbit လုပ်မည်၊ compass ring ကို ဆွဲလျှင် model ကို လှည့်မည်), **Axis icon** (ဘယ်အောက်ထောင့်ရှိ သေးငယ်သော X၊ Y၊ Z အမှတ်အသား၊ view နှင့်အတူ လှည့်သည်: X အနီ၊ Y အစိမ်း၊ Z အပြာ) သို့မဟုတ် **None**။ sketch ဆွဲနေစဉ် သို့မဟုတ် drawing sheet တွင် ၎င်းတို့ နှစ်ခုလုံး မပြပါ။ [View cube](topic:view-cube) ကို ကြည့်ပါ။

## Solver threads

simulation solvers များ အသုံးပြုနိုင်သော threads အရေအတွက်။ **Automatic** (စတင်ချိန်) သည် ကွန်ပျူတာ၏ logical processors အရေအတွက်ထက် တစ်ခုလျှော့ (အများဆုံး ၁၆) ယူသည်၊ ထို့ကြောင့် study ဖြေရှင်းနေစဉ် page သည် တုံ့ပြန်နိုင်ဆဲ ဖြစ်သည်; သို့မဟုတ် နံပါတ်တစ်ခု ရွေးပါ။ voxel study ကြီးများ၊ buckling၊ အချိန်ကြာလာသော stress နှင့် flow တို့သည် threads အများအပြားဖြင့် ပို၍ မြန်စွာ ဖြေရှင်းသည် (ကျွန်ုပ်တို့၏ တိုင်းတာချက်များအရ 80,000 cubes အတွက် threads 4 ခုဖြင့် ~2×၊ အလုပ်မလုပ်သော ကွန်ပျူတာတွင် ပို၍); ~20,000 unknowns အောက် မော်ဒယ်များသည် thread တစ်ခုတည်းတွင် ရှိနေသည်၊ ထို့ကြောင့် threads စတင်ခြင်းက သိမ်းဆည်းသည်ထက် ပိုကုန်သည်။ threaded solve က thread တစ်ခုနဲ့ တူညီသော အဖြေကို ပေးသည် (ဂဏန်းပြတ်ခြင်းအထိ: ပေါင်းလဒ်များကို မတူညီသော အစီအစဉ်ဖြင့် ပေါင်းသည်)။ study တစ်ခုစီ၏ ရလဒ်များက **N threads** သို့မဟုတ် **1 thread** ကို အကြောင်းရင်းနှင့်အတူ **Solver** အောက်တွင် ပြသည်။

threads များသည် page သည် **cross-origin isolated** ဖြစ်ရန် လိုအပ်သည် (browser က ထိုအခါမှသာ workers များက memory မျှဝေခွင့်ပေးသည်)။ lab page သည် ဖြစ်သည်; မဟုတ်လျှင် ဆက်တင်က ထိုအကြောင်း ပြောသည် ("ဤ page သည် cross-origin isolated မဟုတ်သောကြောင့် ဤနေရာတွင် ရွေးသည်များ မည်သို့ပင်ဖြစ်စေ solvers များက thread တစ်ခုတည်းတွင် ရှိနေမည်။") နှင့် solve တိုင်းက thread တစ်ခုသာ သုံးမည်။ အခြားအရာများက အလားတူ အလုပ်လုပ်ပြီး အဖြေများလည်း တူညီသည်။

Laminar flow studies များလည်း threads ကို သုံးသည် (ကျွန်ုပ်တို့၏ စမ်းသပ်ကွန်ပျူတာတွင် 54,000 fluid cells အတွက် threads 4 ခုဖြင့် ~2.5×၊ နောက်ဆုံးဂဏန်းအထိ တူညီသောအဖြေ)။ quadratic-tetrahedron solver နှင့် heat transfer တို့သည် thread တစ်ခုတည်းတွင် လည်ပတ်သည်: ၎င်းတို့ကို threads ဖြင့် ခွဲခြင်းကို ကျွန်ုပ်တို့၏ စမ်းသပ်ကွန်ပျူတာတွင် ပိုနှေးကြောင်း တိုင်းတာခဲ့သည် (၎င်းတို့သည် memory အမြန်နှုန်းနှင့် ခွဲ၍မရသော အဆင့်ဖြင့် ကန့်သတ်ထားသည်)။

### သင့်ကိုယ်ပိုင် web server တွင်

PartCraft ကို သင့်ကိုယ်ပိုင် server မှ လည်ပတ်လျှင် ၎င်းသည် ပေးထားသည့်အတိုင်း အလုပ်လုပ်သည်။ solver threads အတွက် server က PartCraft ၏ page ဖြင့် headers နှစ်ခု ပို့ပါ:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache တွင်၊ folder ၏ `.htaccess` ထဲတွင် (mod_headers လိုအပ်သည်):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx တွင်၊ PartCraft ကို ပေးသော `location` ထဲတွင်:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

page ကို ပြန်ဖွင့်ပါ: Settings › Solver threads တွင် သင့်ကွန်ပျူတာ၏ အရေအတွက်ဖြင့် **Automatic** ကို ပေးမည်။ ဒုတိယ header က page မှ တခြား site မှ load လုပ်သည်များကို ခွင့်မပြုသော browser ကို ငြင်းစေသည်၊ PartCraft ကိုယ်တိုင် အတွက် ဤသည် သင့်တော်သည် (၎င်းသည် ၎င်း၏ ကိုယ်ပိုင် folder မှ အရာအားလုံးကို load လုပ်သည်)။
