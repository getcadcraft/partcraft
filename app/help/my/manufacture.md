---
title: Toolpath နှင့် G-code ပြုလုပ်ခြင်း (Manufacture)
summary: stock နှင့် work origin ကို သတ်မှတ်ပါ၊ tool များ ရွေးပါ၊ face၊ pocket၊ contour၊ drill နှင့် chamfer operation များကို face များ ရွေးခြင်းဖြင့် ထည့်ပါ၊ မော်ဒယ်တစ်ခုလုံးကို 3D တွင် ပြီးအောင် ပြုလုပ်ပါ (parallel၊ scallop)၊ stock ကို model နှင့် gouge နှင့် cycle time အတွက် simulate လုပ်ပါ၊ built-in post သုံးခုမှ တစ်ခု သို့မဟုတ် သင်ကိုယ်တိုင် တည်းဖြတ်ထားသော post မှ G-code ကို ဒေါင်းလုဒ်ဆွဲပါ။
keywords: exact step, step for the shop, work coordinates, cam handoff, parallel, scallop, 3d finishing, finishing, ball nose, tool library, edit post, custom post, post editor, adaptive, adaptive clearing, constant engagement, trochoidal, hsm, high speed machining, manufacture, CAM, toolpath, G-code, NC, CNC, mill, milling, pocket, contour, profile, facing, drill, peck, G83, G81, G73, chamfer, stock, work offset, G54, post processor, GRBL, LinuxCNC, feeds and speeds, simulation, gouge, cycle time
from: beeb29aa
---

Manufacture workspace သည် part ကို 3-axis milling စက်အတွက် toolpath များအဖြစ် ပြောင်းပြီး G-code အဖြစ် ရေးသည်။ operation အများစုသည် **2.5-axis** ဖြစ်သည်: tool သည် ဒေါင်လိုက်ရပ်နေပြီး နံရံများကို တိုက်ရိုက်ဆင်းဖြတ်ကာ ကြမ်းပြင်များကို ပြားစွာ ဖြတ်သည်။ **Parallel** နှင့် **Scallop** တို့သည် ကွေးသော မျက်နှာပြင်များကို 3D တွင် ပြီးအောင် ပြုလုပ်သည် (see [3D finishing](topic:finish-3d)); tool သည် ဆက်လက် ဒေါင်လိုက်ရပ်နေသည် (axis သုံးခု၊ ကွေးခြင်းမရှိ)။ ၎င်းသည် mesh kernel က part အား ပေးသော အမည်ပေးထားသော face များပေါ်တွင် အလုပ်လုပ်သည် (see [The mesh kernel](topic:solid-kernels))။

Lab build: program တိုင်းကို သင့်ထိန်းချုပ်စက်၏ ကိုယ်ပိုင် simulator တွင် စစ်ဆေးပြီး ပထမဦးဆုံး stock အပေါ် လေထဲတွင် run ပါ။

## ပြင်ဆင်ခြင်း

1. workspace switcher တွင် **Manufacture** ကို ရွေးပြီး {{ui:New setup}} ကို ရွေးပါ။
2. **Setup** tab တွင် ရွေးပါ:
   - **Tool axis (+Z)**: tool သည် part ထဲသို့ မည်သည့်ဘက် ညွှန်သည်။ World +Y (PartCraft ၏ အပေါ်) က မူလ; ထိုအခါ machine X သည် world X ဖြစ်ပြီး machine Y သည် world −Z ဖြစ်သည်။
   - **Work origin (G54)**: stock ၏ ထောင့် သို့မဟုတ် အလယ်၊ အပေါ် သို့မဟုတ် အောက်၊ model ၏ အပေါ်အလယ်၊ သို့မဟုတ် model origin။
   - **Stock**: သေတ္တာ သို့မဟုတ် ဆလင်ဒါ၊ model ပေါင်း offset များ (ဘက်၊ အပေါ်၊ အောက်) သို့မဟုတ် ပုံသေ အရွယ်အစား။
   - **Material** (စတင် feeds and speeds ကို သတ်မှတ်သည်)၊ **post** (ထိန်းချုပ်စက်)၊ စက်၏ spindle speed အများဆုံး၊ rapid rate နှင့် tool change time၊ coolant နှင့် program နံပါတ်။

## Tools

**Tools** tab တွင် စာကြည့်တိုက် ရှိသည်: flat၊ ball နှင့် bull nose end mill များ၊ drill များ၊ chamfer mill များနှင့် face mill များ၊ တစ်ခုစီတွင် T နံပါတ်၊ အချင်း၊ flute အရေအတွက်နှင့် flute အရှည် (လျှော့ထားသော ထောင့် radius၊ point သို့မဟုတ် chamfer ထောင့် လိုအပ်သည့်နေရာတွင် ထပ်ထည့်)။

ကျွန်ုပ်၏ tool များကို browser တွင် သိမ်းနိုင်ပြီး ဖိုင်အဖြစ် ကွန်ပျူတာများကြား ရွှေ့နိုင်သည်: see [The tool library](topic:tool-library)။

Spindle speed နှင့် feed ကို material မှ ရသည်: n = 1000 × cutting speed / (π × diameter)၊ feed = n × flutes × chip load (drill များ: n × feed per rev)။ ဂဏန်းများသည် ထုတ်ပြန်ထားသော အကွာအဝေးမှ ရှေ့ပိုင်း ကန့်သတ်တန်ဖိုးများဖြစ်ပြီး သင့်စက်အတွက် မချိန်ညှိထားပါ; သင့် tool ထုတ်လုပ်သူ၏ cutting speed၊ chip load၊ rpm သို့မဟုတ် feed ကို ရိုက်ထည့်၍ ကျော်ပါ။ speed သည် စက်၏ အများဆုံးကို ကျော်သွားသောအခါ ၎င်းကို ထိုနေရာတွင် ထိန်းထားပြီး feed က လိုက်ကာ chip load ကို ထိန်းသည်။

## Operation များ ထည့်ခြင်း

toolbar ခလုတ်တိုင်းက operation တစ်ခု ထည့်ပြီး geometry လိုအပ်သည့်နေရာတွင် ရွေးချယ်ခြင်းကို စတင်သည်: view ရှိ face သို့မဟုတ် edge များကို click လုပ်ပါ (တစ်ခုကို ဖယ်ရန် ထပ်နှိပ်ပါ)၊ ထို့နောက် {{ui:Done picking}} သို့မဟုတ် {{key:Esc}}။

| Operation | ရွေးရန် | လုပ်ဆောင်ချက် |
|---|---|---|
| {{ui:Face}} | ဘာမှမရွေး | stock တစ်ခုလုံးပေါ်တွင်၊ ၎င်း၏ အစွန်းများကို ကျော်၍၊ model ၏ အပေါ်ထိ zig-zag pass များ |
| {{ui:Pocket}} | ပြားသော ကြမ်းပြင် face၊ လုံးအပေါက်၊ သို့မဟုတ် ပိတ်ထားသော edge chain | offset pass များဖြင့် အတွင်းမှအပြင်သို့ နေရာကို ရှင်းသည်၊ step-down တိုင်း၊ islands (ကြမ်းပြင်အတွင်း မတ်ထားသော face များ) ကို ထားခဲ့သည်; ပတ်ပတ်လည်ပွင့်နေသော ကြမ်းပြင် (ပြင်ပတွင် မြင့်သည်ဟူ၍ မရှိ) ကို stock အစွန်းအထိ ရှင်းသည် |
| {{ui:Adaptive}} | Pocket နှင့် တူသည် | နေရာတူကို pass များဖြင့် ရှင်းပြီး အပြည့်အစုံ slot ကို tool မှ ဘယ်တော့မှ မဖြတ်ဘဲ၊ ထောင့်များတွင်ပင် (ပမာဏ သတ်မှတ်ထားသော အနံ၊ **Engagement** သည် အချင်း၏ အစိတ်အပိုင်း) ဖြစ်သည်; helix ဖြင့် ဝင်ပြီး နံရံများကို အဆင့်တစ်ခုစီတွင် ပြီးစီးသည်။ ကျဉ်းသော ဖြတ်မှုများက step-down ပိုနက်ပြီး feed ပိုမြင့်ခွင့်ပြုသည် |
| {{ui:Contour}} | ပြားသော face (၎င်း၏ outline)၊ လုံး face၊ သို့မဟုတ် edge များ | tool radius ဖြင့် offset လုပ်ထားသော outline ကို အပြင် သို့မဟုတ် အတွင်းသို့၊ lead-in နှင့် lead-out arc များနှင့် ရွေးချယ်နိုင်သော tab များဖြင့် လိုက်သည် |
| {{ui:Drill}} | အပေါက်များ (အပေါက်၏ နံရံ သို့မဟုတ် အစွန်းကို click လုပ်ပါ) | canned cycle ဖြင့် အပေါက်တိုင်းကို ထွင်းသည်: peck (G83)၊ drill (G81) သို့မဟုတ် chip break (G73); သို့မဟုတ် ထိုအရွယ်အစား အပေါက်အားလုံးကို အချင်းပေးပြီး ထွင်းပါ |
| {{ui:Chamfer}} | face ၏ outline သို့မဟုတ် edge များ | chamfer mill ကို edge တစ်လျှောက် run ပြီး သင်သတ်မှတ်ထားသော အနံကို ဖြတ်စေသည် |
| {{ui:Parallel}} | ဘာမှမရွေး (model တစ်ခုလုံး) | မည်သည့်ထောင့်တွင်မဆို မျဉ်းပြိုင်များဖြင့် 3D ပြီးအောင်ပြုလုပ်ခြင်း၊ ball၊ bull-nose သို့မဟုတ် flat end mill ဖြင့် မျက်နှာပြင်ကို လိုက်သည်။ See [3D finishing](topic:finish-3d) |
| {{ui:Scallop}} | ဘာမှမရွေး (model တစ်ခုလုံး) | မျက်နှာပြင်ပေါ်တွင် သတ်မှတ်ထားသော အကွာအဝေး ခွဲထားသော pass များဖြင့် 3D ပြီးအောင်ပြုလုပ်ခြင်း၊ ထို့ကြောင့် ၎င်းတို့ကြားရှိ အမြိုင်း၏ အမြင့်သည် သင်တောင်းသည့်အတိုင်း ဖြစ်သည် |

list ရှိ operation တစ်ခုကို ရွေးပြီး ၎င်း၏ tool၊ အမြင့်များ (clearance၊ retract၊ feed height၊ top၊ bottom)၊ step-down၊ stepover၊ ထားရစ်သော stock၊ finishing pass၊ entry (helix၊ ramp သို့မဟုတ် plunge)၊ climb milling၊ tab များ သို့မဟုတ် cycle ကို ပြောင်းနိုင်သည်။ {{ui:Up}} နှင့် {{ui:Down}} က ပြန်စီသည်၊ {{ui:Suppress}} က ထားမထားပါ၊ {{ui:Delete}} က ဖယ်သည်။ အရာအားလုံးသည် undo history တွင် ရှိပြီး part ဖိုင်တွင် သိမ်းထားသည်။

pocket ၏ stepover သည် tool အချင်း၏ ထက်ဝက်အများဆုံးဖြစ်သဖြင့် ကြမ်းပြင်၏ အမှတ်တိုင်းသည် pass တစ်ခုစီ၏ tool radius တစ်ခုအတွင်း ရှိသည်။ အတွင်းထောင့်များတွင် tool radius ကို ထိန်းထားသည်။

**Adaptive clearing** သည် cutter ၏ engagement ကို တန်ဖိုးတစ်ခုအနီးတွင် ထိန်းထားသည်။ အချင်း၏ 0.15 engagement သည် engagement angle ~46° ဖြစ်ပြီး ၎င်းသည် cutter ၏ edge ၏ arc ပစ္စည်းထဲတွင် ဖြစ်သည်။ offset pocket ကမူ ပထမ pass တွင် အပြည့်အနံ ဖြတ်ပြီး ပတ်ပတ်လည် ထောင့်တိုင်းတွင် ပိုလည်သည်။ pass များကြားတွင် tool သည် ဖြတ်ပြီးသား လေထဲ ရွေ့သည့်နေရာတွင် ဆင်းနေ၍၊ အခြားနေရာများတွင် ဖြတ်ပြီးသား လေထဲတွင် မြင့်တက်ပြီး ပြန်ဆင်းသည်။ pass များကို နေရာပေါ်ရှိ နှစ်သက်ဖွယ် grid (cell များ tool radius ၏ တစ်ဆယ့်နှစ်ပုံတစ်ပုံ ခန့်) ပေါ်တွင် တွက်ထားသဖြင့် engagement သည် သတ်မှတ်ထားသည်ထက် cell တစ်ခုခန့် ပိုကျယ်သွားနိုင်သည်; နံရံများကို အတိအကျ ပြီးစီးသည်။ နေရာကြီးကျယ်ပြီး ဖွင့်ထားပါက လှုပ်ရှားမှု တိုတိုများစွာဖြင့် program ရှည်လျားလာမည်။

## Simulate

Toolpath များကို ပြောင်းလဲမှုတိုင်းနောက်တွင် ပြန်ပြုလုပ်သည် (part ပြောင်းလဲမှုလည်း ပါသည်)။ {{ui:Simulate}} က program တစ်ခုလုံးပြီးနောက် ကျန်ရှိသော stock ကိုလည်း ပြသည်။ panel တွင်:

- **Cycle time**: feed လှုပ်ရှားမှုများကို ၎င်းတို့၏ feed ဖြင့်၊ rapid များကို setup ၏ rapid rate ဖြင့် မျဉ်းဖြောင့်များအဖြစ်၊ နှင့် tool change time ပေါင်း။ အမှန်စက်များ အရှိန်မြှင့်သဖြင့် ပိုကြာသည်။
- **Gouge များ**: tool သည် part ၏ မျက်နှာပြင်အောက် 0.02 mm ထက်ပို ရောက်သွားသည့် နေရာများ။ အနီရောင် အမှတ်များက view ထဲတွင် ပြသသည်။
- **Part ပေါ်ကျန်ရှိသော stock**။

stock သည် အပေါ်ပိုင်း၏ height map (Z-map) ဖြစ်သဖြင့် undercut များကို မပြနိုင်ပါ။ **Playback** ကို ဆွဲ၍ tool ကို program တစ်လျှောက် ရွှေ့ပါ။ view တွင် feed လှုပ်ရှားမှုများသည် တည်ငြိမ်ပြီး rapid များသည် အစက်စက်ဖြစ်ပြီး operation တစ်ခုစီတွင် အရောင်တစ်ခု ရှိသည်။

**Show the simulated stock** ကို ဖွင့်ထားပါက stock ကို model နှင့် ဆဲလ်တစ်ခုစီအလိုက် နှိုင်းယှဉ်၍ အရောင်ခြယ်သည်: **အစိမ်းရောင်** သည် model ပေါ်တွင် (0.02 mm အတွင်း)၊ **အနီရောင်** သည် tool က model ထဲ ဖြတ်ဝင်သည့်နေရာ၊ နှင့် model ပေါ်တွင် stock ကျန်နေသည့်နေရာတွင် ပါးလွှာသော အရေအလွှာအတွက် **အဝါရောင်**၊ ပို၍ များလျှင် **လိမ္မော်ရောင်**၊ 1 mm သို့မဟုတ် ပိုသည့်အခါ မဖြတ်ရသေးသော stock ၏ **မီးခိုးရောင်** အထိ မှေးမှိန်သွားသည်။ အရောင်များကို ပြောင်းလဲမှုတိုင်းနှင့်အတူ ပြန်ပြုလုပ်သည်၊ panel ရှိ ဂဏန်းများနှင့် တူညီသော height map မှ၊ ထို့ကြောင့် အစိမ်းနှင့် အနီက Gouges လိုင်းနှင့် ကိုက်ညီသည်။ chamfer သည် model ထဲသို့ ရည်ရွယ်ချက်ဖြင့် ဖြတ်ဝင်သဖြင့် ၎င်း၏ edge တစ်လျှောက် အနီရောင်ပြသည်။

## G-code ထုတ်ပါ

**Post** အောက်တွင် ထိန်းချုပ်စက်ကို ရွေးပြီး {{ui:Download G-code}} (သို့မဟုတ် toolbar ရှိ {{ui:Post}}) ကို နှိပ်ပါ:

| ထိန်းချုပ်စက် | ဖိုင် | မှတ်ချက် |
|---|---|---|
| Fanuc-style ISO | .nc | %, O နံပါတ်၊ လိုင်းနံပါတ်များ၊ T M6 နှင့် G43 H၊ canned cycle များ |
| GRBL | .nc | tool changer သို့မဟုတ် canned cycle မရှိ: tool change တွင် M0 ဖြင့် ခဏရပ်သည်၊ drilling ကို ရိုးရိုး move များအဖြစ် ရေးသည် |
| LinuxCNC | .ngc | T M6 နှင့် G43 H၊ canned cycle များ၊ M2 |
| သင်ကိုယ်တိုင် | မည်သည်ဖြစ်စေ | သင်ရေးထားသော သို့မဟုတ် ပြောင်းထားသော post: {{ui:Edit post…}}၊ {{ui:New post…}}၊ {{ui:Import post file…}} |

ဖိုင်တိုင်းသည် program၊ stock၊ work offset နှင့် tool များအတွက် မှတ်ချက်များဖြင့် စသည်။ သြဒိနိတ်များသည် မီလီမီတာဖြင့် ဒဿမ 3 နေရာဖြင့်။ {{ui:Toolpath CSV}} နှင့် {{ui:Toolpath JSON}} က လှုပ်ရှားမှုများကို ပို့ထုတ်သည်။

**ဖြတ်မီ သင့်စက်၏ ကိုယ်ပိုင် simulator တွင် output ကို စစ်ဆေးပြီး ပထမဦးဆုံး stock အပေါ် လေထဲတွင် run ပါ။** built-in post သုံးခုသည် ထိန်းချုပ်စက်များ၏ မှတ်တမ်းတင်ထားသော အပြုအမူကို လိုက်နာသော စတင်အမှတ်များဖြစ်ပြီး အထူးစက်တစ်ခုတွင် သက်သေမပြရသေးပါ။ သင်ပြောင်းသော post သည် သင်၏ တာဝန်ဖြစ်ပြီး သင်သက်သေပြရမည်။ ၎င်းကို မည်သို့ရေးရမည်: [Post processors](topic:post-processors)။

## Shop အတွက် Exact STEP

**Operations** tab ရှိ G-code ခလုတ်များအောက်တွင် {{ui:Exact STEP (work coordinates)}} က `<part>-work.step` ကို ဒေါင်းလုဒ်ဆွဲသည်: part ကို exact solid အဖြစ် (အပေါက်နှင့် boss များအတွက် အမှန်ဆလင်ဒါများ၊ ၎င်းတို့၏ edge များအတွက် အမှန်စက်ဝိုင်းများ) ဤ setup ၏ work origin တွင် origin နှင့် Z သည် tool axis ဖြင့်။ ထိုသြဒိနိတ်များသည် G-code သုံးသောအရာဖြစ်သဖြင့် shop ၏ ကိုယ်ပိုင် CAM program သို့မဟုတ် checker သည် model ကို program နှင့် မရွှေ့ဘဲ ကိုက်ညီစေသည်။ ဖိုင်တွင် part သာပါပြီး stock သို့မဟုတ် toolpath မပါပါ။

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} သည် solid တူတူကို part ၏ ကိုယ်ပိုင်နေရာ (Z အပေါ်) တွင် ရေးသည်: see [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step)။

## ကန့်သတ်ချက်များ

- Pocket၊ contour၊ drilling နှင့် chamfer များသည် 2.5-axis ဖြစ်သည်။ ကွေးသော face များကို 3D ဖြင့် ပြီးအောင် ပြုလုပ်နိုင်သည် ([parallel and scallop](topic:finish-3d)) သို့သော် 3D ဖြင့် ကြမ်းကြမ်း မဖြတ်နိုင် (ကုန်းမြင့်သည် သင်ပြီးအောင်မလုပ်မချင်း အဆင့်အဆင့်ကျန်သည်)၊ rest machining လည်း မရှိပါ။ Adaptive clearing သည် 2D (ပြားသော ကြမ်းပြင်များ)။
- axis သုံးခုသာ: tilt မရှိ၊ turning မရှိ၊ inspection မရှိ။
- holder နှင့် shank များကို collision အတွက် မစစ်ပါ; ဖြတ်မှု flute အရှည်ထက်ပို နက်သည့်အခါ သတိပေးချက် ပေါ်သည်။
- feeds and speeds များသည် စတင်တန်ဖိုးများဖြစ်သည်။ post သည် တည်းဖြတ်နိုင်သော စာသားဖြစ်သော်လည်း လှုပ်ရှားမှုများကို ဘယ်လိုရေးမည်ကိုသာ ဆုံးဖြတ်ပြီး toolpath ကို ပြောင်းနိုင်ခြင်း၊ axis ထည့်ခြင်း သို့မဟုတ် သင့်စက်ကို သိခြင်း မရှိပါ ([Post processors](topic:post-processors) တွင် မလုပ်နိုင်သည့်အရာများကို ကြည့်ပါ)။

## Program ကို စက်သို့ ပို့ပါ

desktop ရှိ CadCraft Studio တွင်၊ Studio တွင် စက်တစ်ခု သတ်မှတ်ထားပါက **Download G-code** ၏ ဘေးတွင် **Send to a machine…** ပေါ်လာပြီး တူညီသော program ကို သင့်ကွန်ရက်ရှိ စက်သို့ တင်သည်။ PartCraft မှ ဘယ်တော့မှ မစတင်ပါ: ရှင်းလင်းသည့်အခါ စက်တွင်သာ စတင်ပါ။ browser တွင် ခလုတ်ကို မပြပါ (web page သည် သင့်ကွန်ရက်ရှိ စက်ကို မဝင်နိုင်ပါ): ထို့အစား program ကို ဒေါင်းလုဒ်ဆွဲပါ။
