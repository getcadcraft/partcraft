---
title: 0.8 နှင့် 0.8.1 တွင် အသစ်များ
summary: PartCraft 0.8 သည် တည်းဖြတ်နေစဉ် live analysis၊ What breaks first စစ်ဆေးမှု၊ ပြင်ပ solver အတွက် deck files ပါသော yielding နှင့် contact လေ့လာမှုများ၊ assemblies အတွက် motion လေ့လာမှုများ၊ freeform surfaces အတွက် Surfaces workspace၊ Engineer workspace တွင် physics ဖြင့် အရွယ်အစားသတ်မှတ်ထားသော parts၊ photo-to-sketch၊ printing exports၊ nested sheets to G-code နှင့် အပေါက်များကို အတိုင်းအတာချနိုင်သော drawings တို့ကို ထည့်သွင်းသည်။ 0.8.1 သည် full-screen cursor freeze ကို ပြင်သည်။
keywords: အသစ်များ, what's new, release notes, changelog, ပြောင်းလဲမှုများ, 0.8, 0.8.1, ဗားရှင်း, အင်္ဂါရပ်အသစ်များ, live analysis, တည်းဖြတ်နေစဉ် အပ်ဒိတ်, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, languages, toolbar rows
from: 62e4dce2
---

ဤသည်မှာ PartCraft 0.7 နှင့် နှိုင်းယှဉ်လျှင် 0.8 နှင့် 0.8.1 တွင် ပြောင်းလဲခဲ့သည်များ ဖြစ်သည်။ Simulation သည် သင် တည်းဖြတ်နေစဉ် ဖြေကြားပြီး အရင်ပျက်မည့်အရာကို ပြသည်၊ assemblies များသည် motion လေ့လာမှုများ ရရှိသည်၊ workspace အသစ်များက freeform surfaces နှင့် physics ဖြင့် အရွယ်အစားသတ်မှတ်သော parts များကို ဖန်တီးသည်။ 0.8.1 သည် အသေးစား ပြင်ဆင်မှု release ဖြစ်သည်။

## အသစ်

### Simulation

- **တည်းဖြတ်နေစဉ် အပ်ဒိတ်လုပ်ရန်။** Solve block ရှိ {{ui:Update while I edit}} ကို အမှန်ခြစ်ပါ၊ အဖြေများသည် သင့်ပြောင်းလဲမှုများကို လိုက်ပါလာမည်။ Dimension, load သို့မဟုတ် material ကို ပြောင်းလျှင် element ၄ ဆကြီးသော အရွယ်ဖြင့် ပြုလုပ်ထားသော အမြန်အဖြေတစ်ခု ချက်ချင်း ပေါ်လာသည်; စက္ကန့်ဝက်ခန့် ရပ်လိုက်သည့်အခါ study ၏ ကိုယ်ပိုင် ပိုတိကျသော အဖြေက ၎င်းကို အစားထိုးသည်။ ရလဒ်များက သင် ကြည့်နေသော အဖြေကို ပြောပြသည်။ အမြို့သော cantilever တွင် အမြန်အဖြေသည် deflection တွင် 1 % အတွင်းနှင့် stress တွင် ခန့်မှန်း 4 % အတွင်း ရှိခဲ့သည်။ See [ဖိအားနှင့် deflection ကို စစ်ဆေးခြင်း](topic:simulation#update-while-you-edit-live)။
- **What breaks first။** Static သို့မဟုတ် buckling study အတွက် **Break it** block ရှိ {{ui:What breaks first?}} သည် part ပျက်သွားသည်အထိ loads များကို စကေးချဲ့သည်။ အဆိုးဆုံးမှ စ၍ yield ဖြစ်မည့် load factor (stress အမြင့်ဆုံးနေရာတွင် အနီရောင် အမှတ်အသားဖြင့်) နှင့် buckling ဖြစ်မည့် load factor ကို စာရင်းပြုသည်။ Factor 1 အောက်ဆိုလျှင် part သည် ဝန်ထည့်ထားချိန်တွင် ပျက်နေပြီဖြစ်ပြီး Problems က error ပြသည်။ Factors များသည် linear study မှ ရသဖြင့် ၎င်း၏ အရည်အသွေးအတိုင်းသာ ရှိသည်။ See [ဖိအားနှင့် deflection ကို စစ်ဆေးခြင်း](topic:simulation#find-out-what-breaks-first-break-it)။
- **Yielding နှင့် contact။** Study အမျိုးအစား နှစ်ခု ထပ်တိုးသည်: material သည် yield stress အထိ မျဉ်းဖြောင့်ကို လိုက်ပြီး ထို့နောက် ပိုပြေလျော့သော စောင်းကို လိုက်သော nonlinear တစ်ခု၊ plastic strain ကို ဆွဲသည်၊ နှင့် အပိုင်းခွဲများ အချင်းချင်း တွန်းသော (ပွတ်တိုက်မှုမရှိ) သို့မဟုတ် ကပ်ထားသော (bonded) contact တစ်ခု။ အဆုံးမသတ်နိုင်သော load step သို့မဟုတ် အလွန်အမင်း ထိုးဝင်သွားသော အပိုင်းများသည် Problems panel တွင် ပြသည်။ ပွတ်တိုက်မှု၊ ကြီးမားသော ဆွဲရွှေ့မှု၊ ကြီးမားသော လည်ပတ်မှု၊ ကြီးမားသော deflection နှင့် fatigue များကို မဖြေရှင်းပါ။ See [ဖိအားနှင့် deflection ကို စစ်ဆေးခြင်း](topic:simulation#yielding-and-contact-nonlinear-studies)။
- **CalculiX အတွက် decks။** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} သည် study ကို CalculiX အတွက် သိမ်းသည်၊ ၎င်းသည် သင် ထည့်သွင်းပြီး ကိုယ်တိုင် run ရမည့် သီးခြား program ဖြစ်သည်။ {{ui:Export}} › {{ui:CalculiX results (.frd)}} သည် ၎င်း၏ result ဖိုင်ကို တူညီသော mesh ပေါ်သို့ ပြန်ဖတ်သည်။ PartCraft သည် ထို program ကို ဘယ်တော့မှ မစတင်ပါ၊ deck သိမ်းပြီးနောက် part ပြောင်းသွားလျှင် ထိုသို့ ပြောပြသည်။

### Assemblies

- **Motion လေ့လာမှုများ။** {{ui:Assembly}} › {{ui:Motion}} သည် joint တစ်ခု၏ တန်ဖိုးကို သင်ပေးသော အချိန်အတွင်း မောင်းသည် (စဉ်ဆက်မပြတ် အမြန်နှုန်း၊ ဖြေးညှင်းသော၊ sine၊ သို့မဟုတ် ထွက်ပြီး ပြန်ဝင်)၊ step တိုင်းတွင် assembly ကို ၎င်း၏ joints နှင့် closed loops ဖြင့် နေရာချပြီး အဘယ်အရာ ထိုးဝင်သလဲ နှင့် ပစ္စည်းများ မည်မျှနီးသလဲ ဟု အစီရင်ခံသည်။ {{ui:Add a point}} သည် အမှတ်တစ်ခု၏ နေရာ၊ အမြန်နှုန်းနှင့် အရှိန်၊ joint ၏ တန်ဖိုးနှင့် clearance ကို အချိန်ကို လိုက်၍ ဆွဲသည်; {{ui:Save CSV}} နှင့် {{ui:Save plot}} က ၎င်းတို့ကို ဖိုင်အဖြစ် ရေးထုတ်သည်။ {{ui:Run}} ပြီးနောက် run bar ရှိ Step မှ assembly ကို အဆင့်မည်သည့်နေရာသို့မဆို ရွှေ့နိုင်သည်။ Study ၏ ဆက်တင်များကို assembly ဖိုင်တွင် သိမ်းသည်။ အမြန်နှုန်းနှင့် အရှိန်ကို မှတ်တမ်းတင်ထားသော နေရာများမှ တွက်ထုတ်သဖြင့်၊ အမြင့်ဆုံး အထွတ်အထိပ်ကို ပိုမှန်ကန်စေချင်လျှင် step ပိုသုံးပါ။ See [assembly တွင် clash နှင့် motion စစ်ဆေးခြင်း](topic:check-assembly#a-motion-study)။

### Surfaces နှင့် physics ဖြင့် parts

- **Surfaces workspace။** Part ဘေးတွင် NURBS curves နှင့် surfaces အတွက် {{ui:Workspace}} ကွက်ထဲရှိ {{ui:Surfaces}} ကို ရွေးပါ: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} နှင့် {{ui:Zebra}}၊ continuity (G0, G1 သို့မဟုတ် G2) ကို တိကျသော surfaces ပေါ်တွင် တိုင်းတာပြီး သင်တောင်းဆိုထားသည်ထက် ညံ့သော edge ကို Match fix ဖြင့် Problems တွင် စာရင်းပြုသည်။ {{ui:Fair}} သည် hull lines များကို inflections နှင့် curvature ခုန်တက်မှုအတွက် တိုင်းတာပြီး သင့် tolerance အတွင်း မညီမျှသောများကို ပြန်တည်ဆောက်သည်။ Surfaces များကို part ဖိုင်တွင် သိမ်းပြီး part ၏ features များကို မပြောင်းပါ။ See [Freeform surfaces (NURBS)](topic:nurbs-surfaces)။
- **Engineer workspace။** Workspace switcher တွင် {{ui:Engineer}} ကို ရွေးပါ၊ generator တစ်ခုကို ရွေးပြီး {{ui:New}} ကို နှိပ်ပါ: script တစ်ခုက part ၏ လုပ်ဆောင်ရမည့်အရာ (အပူပေးရန်၊ စီးဆင်းမှုများ၊ ဖိအား၊ material၊ print process) မှ textbook ပုံသေနည်းများဖြင့် အရွယ်အစားသတ်မှတ်ပြီး တည်ဆောက်သည်၊ ထို့နောက် သုံးခဲ့သော ကိန်းဂဏန်းများကို ၎င်းတို့၏ ရင်းမြစ်များ၊ ၎င်း၏ ထုတ်လုပ်မှု စစ်ဆေးချက်များနှင့် analysis tools များအတွက် ဖိုင်များနှင့်အတူ ပြန်ပေးသည်။ တူညီသော inputs များသည် မည်သည့်ကွန်ပျူတာပေါ်တွင်မဆို တူညီသော part ကို ပေးသည်။ Generator ကို part တွင် ထိန်းသိမ်းထားပြီး part ဖွင့်ခြင်းသည် script ကို ဘယ်တော့မှ မ run ပါ။ See [Physics မှ parts: generators](topic:engineer-generators) နှင့် [Generator ရေးခြင်း](topic:write-a-generator)။

### Sketching, drawings နှင့် making

- **ဓာတ်ပုံမှ sketch။** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} သည် ရိုးရှင်းသော မြေပြင်ပေါ်ရှိ flat part ဓာတ်ပုံ (outline နှင့် အပေါက်များ) သို့မဟုတ် ဘောပင်ဆွဲချက်ကို lines, arcs နှင့် circles အဖြစ် ခြေရာခံသည်။ အရှည်တစ်ခုကို ပေးပြီး preview ကို စစ်ဆေးကာ sketch ကို ပြုလုပ်ပါ။ See [Sketching အခြေခံ](topic:sketch-basics#a-sketch-from-a-photo)။
- **Printing အတွက် အတိုင်းအတာချခြင်းနှင့် ခွဲခြင်း။** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} သည် part ကို မပြောင်းဘဲ axis တစ်ခုချင်းစီအလိုက် စကေးချဲ့/ချုံ့သည်၊ ဥပမာ shrinkage ခွင့်ပြုချက်အတွက်။ {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} သည် သင့် bed အတွက် ကြီးလွန်းသော part ကို နံပါတ်တပ်ထားသော အပိုင်းများအဖြစ် ဖြတ်ပြီး pegs, keys, dovetails, dowel holes သို့မဟုတ် magnet pockets ဖြင့် ချိတ်ဆက်သည်။ See [3D ဖြင့် print ထုတ်ခြင်း](topic:print-3d)။
- **Nested sheets မှ G-code။** {{ui:Export}} › {{ui:Nested sheets to G-code}} သည် nested DXF ကို ဖတ်ပြီး သင်ရွေးသော post မှတစ်ဆင့် sheet တစ်ခုလျှင် program တစ်ခု ထုတ်သည်: အပေါက်များနှင့် cut-outs ကို အရင်၊ outlines ကို နောက်မှ။ Lead-ins၊ ဖြတ်ရမည့် အစဉ်အလာ သို့မဟုတ် ဘုံ edges များကို စီစဉ်ခြင်း မလုပ်ပါ။ See [Flat parts များကို sheets ပေါ်တွင် nest လုပ်ခြင်း](topic:nest-flat-parts#cut-the-sheets-g-code)။
- **ကိုယ်တိုင် အတိုင်းအတာ ပေးသော drawings။** {{ui:Sheet}} › {{ui:Automatic}} သည် views များကို ထည့်နိုင်သော အသေးဆုံး A-size sheet ကို ရွေးပြီး 1:1 အထိ အကြီးဆုံး စံစကေးကို သုံးသည်။ {{ui:Dimension the holes}} သည် အပေါက်တစ်ခုစီတွင် ဗဟိုမှတ်တစ်ခု၊ အရွယ်တစ်ခုလျှင် callout တစ်ခုနှင့် view ၏ ဘယ်ဘက်အောက်ထောင့်မှ ရာထားများကို ထည့်သည်။ See [Drawing ဆွဲခြင်း](topic:drawing-pdf)။

### Apps အားလုံးတွင်

- **ဘာသာစကားများ။** Apps များသည် ဘာသာစကား 54 ခုဖြင့် ရရှိနိုင်သည်။ အင်္ဂလိပ်မှ အပ ဘာသာစကားများသည် မူရင်းပုံစံ ဖတ်ရှုသူ ဖတ်ပြီးမှသာ အသုံးပြုရန် ဖြစ်သည်။
- **Toolbar အတန်းများ။** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} တွင် Wrap (ယခင်အတိုင်း)၊ 2 rows သို့မဟုတ် 1 row ကို ရွေးနိုင်သည်; မကိုက်ညီသော bar သည် ဘေးသို့ scroll လုပ်သည်။ PartCraft ၏ Feature ribbon က အသုံးအများဆုံး tool ကို ကြီးကြီးပြပြီး အပြောင်းအလဲများကို split button အောက်တွင် ဝှက်ထားသည်။
- **သင့် AI ကို ချိတ်ဆက်ခြင်း။** Studio သည် သင့်ကိုယ်ပိုင် assistant ကို apps ရှစ်ခုလုံးသို့ ချိတ်ဆက်သော hub ဖြစ်ပြီး app တစ်ခုချင်းစီအတွက် read only၊ suggest သို့မဟုတ် edit ခွင့်ပြုချက် ရွေးနိုင်သည်။ ချိတ်ဆက်ထားသော assistant သည် "ဝန်တစ်ခုအတွက် bracket" ကဲ့သို့ ဝါကျတစ်ခုမှ part ကို အရွယ်အစားသတ်မှတ်ပြီး အလုပ်ပြသကာ စစ်ဆေးချက်အားလုံးကို ပြသပြီး တည်ဆောက်နိုင်သည်; မစစ်ဆေးရသေးသော အရာများ (stress concentration, fatigue, plastics ရှိ creep) ကိုလည်း အစီရင်ခံသည်။ See [PartCraft ကို AI assistant ဖြင့် သုံးခြင်း](topic:use-with-ai-assistants)။

## 0.8.1 တွင် ပြင်ဆင်ခဲ့သည်များ

- **Full-screen cursor freeze။** Hover pick ကို ယခု throttle လုပ်ထားသည်။ အကြောင်းရင်းသည် ကျွန်ုပ်တို့၏ အကောင်းဆုံး ခန့်မှန်းချက်ဖြစ်ပြီး အစီရင်ခံသူနှင့် အတည်မပြုရသေးပါ။
- **Run time တွင် ဘာသာစကား။** Studio နှင့် packed editions များသည် run နေစဉ် ဘာသာစကား ပြောင်းနိုင်သည်; ယခင်က အင်္ဂလိပ်သာ ရှိခဲ့သည်။ ၎င်းကို platform အားလုံးတွင် မစမ်းသပ်ရသေးပါ: ဘာသာစကား မပြောင်းလျှင် ကျွန်ုပ်တို့ကို အသိပေးပါ။

## ဤ version တွင် မရှိသေးသည်များ

- Connect your AI သည် မပြီးသေးပါ: Studio အတွင်း one-click ချိတ်ဆက်ခြင်း၊ browser AI အတွက် hosted connector၊ Studio အတွင်း သင့်ကိုယ်ပိုင် API key နှင့် ထုတ်ပြန်ပြီးသော MCP package တို့ကို မကတိပေးပါ။ Studio တွင် ကိုယ်ပိုင် AI မရှိပါ။
- Studio ကို code-sign မလုပ်ရသေးပါ: Windows က သတိပေးနိုင်သည်၊ macOS က right-click ပြီး Open ကို တောင်းသည်။ See [ပြဿနာရှာဖွေခြင်း](topic:troubleshooting)။
- Stack-ups များသည် တစ်ဖက်သတ်တည်းသာ ရှိသေးသည်: see [Tolerance stack-ups](topic:tolerance-stackup)။
- ကျန်သည်များကို [ယခုမတည်ဆောက်ရသေးသောအရာများ](topic:not-built-yet) တွင် စာရင်းပြုထားသည်။

ယခင် ပြောင်းလဲမှုများကို [0.7 တွင် အသစ်များ](topic:whats-new-0-7) တွင် ကြည့်ပါ။
