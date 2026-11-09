---
title: ဖိုင်များ: ဖွင့်ခြင်း၊ သိမ်းခြင်းနှင့် ထုတ်ခြင်း
summary: PartCraft ဖွင့်နိုင်သော၊ သိမ်းနိုင်သော part နှင့် assembly ဖိုင်များ၊ export format အားလုံးနှင့် ၎င်းတို့တွင် ပါဝင်သည့်အရာများ၊ ဖိုင်များ သွားရောက်ရာနေရာနှင့် offline သို့မဟုတ် browser အလိုက် ပြောင်းလဲမှုများ။
keywords: ဖွင့်ရန်, သိမ်းရန်, ထုတ်ရန်, download, ဖိုင်, partcraft.json, assembly ဖိုင်, stl, 3mf, step, dxf, pdf, ဖိုင်များ ရောက်ရာနေရာ, offline, အမည်ပြောင်း၍ သိမ်းရန်
from: c15c2c48
---

PartCraft သည် သင့်ကွန်ပျူတာပေါ်ရှိ ဖိုင်များပေါ်တွင် အလုပ်လုပ်သည်။ Part ကို ဘယ်တော့မှ upload မလုပ်ပါ၊ account သို့မဟုတ် cloud storage လည်း မပါဝင်ပါ။ Cloud saving ကို ယခုအချိန်တွင် မရနိုင်သေးပါ။

## PartCraft ဖွင့်နိုင်သောအရာများ

| ဖိုင် | Extension | နည်းလမ်း |
|---|---|---|
| PartCraft part | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, သို့မဟုတ် 3D view ပေါ်သို့ ချထားပါ |
| PartCraft assembly | `.partcraft-asm.json` | အတူတူပင်။ PartCraft က မည်သည့်အမျိုးအစားဖြစ်သည်ကို သိသည် |
| STEP solid | `.step`, `.stp` | Triangles အဖြစ် ဖတ်ထားသော solid body: [STEP ဖိုင်ကို ဖွင့်ပြီး ဆက်တည်ဆောက်ရန်](topic:import-step) |

STL, OBJ နှင့် 3MF mesh များကိုလည်း solid body အဖြစ် ဖွင့်နိုင်သည် ([STL, OBJ သို့မဟုတ် 3MF ဖွင့်ရန်](topic:open-meshes))၊ `.3dm` ဖိုင်များကိုလည်း ဖွင့်နိုင်သည် ([.3dm model ဖွင့်ရန်](topic:open-3dm-files))။ DXF, IGES နှင့် အခြား program များ၏ ကိုယ်ပိုင် part ဖိုင်များကို ဖွင့်၍ မရပါ (see [ယခုမတည်ဆောက်ရသေးသောအရာများ](topic:not-built-yet))။

ဖွင့်သည့်အခါ စည်းမျဉ်းများ:

- Part သို့မဟုတ် assembly ဖိုင်အမည်သည် `.json` ဖြင့် အဆုံးသတ်ရမည်ဖြစ်ပြီး ဖိုင်သည် 50 MB အောက် ဖြစ်ရမည်။
- ဖိုင်များကို မပြသမီး စစ်ဆေးသည်။ ပျက်စီးနေသော သို့မဟုတ် ပြင်ထားသော ဖိုင်ကို ရှင်းလင်းသော အကြောင်းပြချက်ဖြင့် ငြင်းပယ်သည်၊ ဥပမာ "ဤဖိုင်သည် PartCraft ဖိုင် မဟုတ်ပါ။"
- PartCraft အသစ်ဖြင့် သိမ်းထားသော ဖိုင်ကို ငြင်းပယ်သည်: "ဤဖိုင်ကို PartCraft အသစ်ဖြင့် သိမ်းထားသည် (file version 3); ဤဗားရှင်းက version 2 ကို ဖတ်နိုင်သည်။" အဟောင်းဖိုင်များ ဖွင့်နိုင်သည်။
- ဖန်သားပြင်ပေါ်ရှိ part တွင် မသိမ်းရသေးသော ပြောင်းလဲမှုများ ရှိလျှင် PartCraft က အရင်မေးသည်: {{ui:Cancel}}, {{ui:Discard changes}} သို့မဟုတ် {{ui:Save first}}။

## သိမ်းခြင်း

{{ui:Save}} သို့မဟုတ် {{key:Mod+S}} သည် ဖန်သားပြင်ပေါ်ရှိအရာကို သိမ်းသည်:

- Part အတွက်: `<part name>.partcraft.json`။ History အပြည့်အစုံ (sketches, relations, dimensions, features, rollback နေရာ)၊ drawing sheet ၏ section, detail နှင့် GD&T မှတ်စုများ၊ ယခင် build တွင် import လုပ်ခဲ့သော STEP solid ၏ စာသားအပြည့်အစုံ။ ဤ version က တည်ဆောက်၍ မရသော features များကို မပြောင်းဘဲ ပြန်သိမ်းသည်။ Solid ကိုယ်တိုင်ကို မသိမ်းပါ; ဖိုင်ဖွင့်သောအခါ PartCraft က history မှ ပြန်တည်ဆောက်သည်။
- Assembly အတွင်း: `<assembly name>.partcraft-asm.json`၊ **အတွင်းရှိ part အားလုံး** ပါဝင်သည်။ ဖိုင်တစ်ခုတည်းတွင် assembly တစ်ခုလုံး ပါဝင်သဖြင့် ၎င်းကို သီးခြား ပို့နိုင်သည်။

သိမ်းခြင်းသည် **download** ဖြစ်သည်။ Browser က ဖိုင်ကို ၎င်း၏ downloads folder ထဲသို့ ထည့်သည်၊ သို့မဟုတ် နေရာရွေးရန် မေးနိုင်သည်။ ထပ်သိမ်းသည့်အခါ ဖိုင်အသစ် ဖန်တီးသည်; browser က `Part1 (1).partcraft.json` ဟု အမည်ပေးနိုင်ပြီး အဟောင်းကို အစားမထိုးပါ။ ဖိုင်များကို {{pick:mac=Finder|windows=File Explorer|linux=သင်၏ ဖိုင်မန်နေဂျာ}} တွင် နှစ်သက်သလို အမည်ပြောင်းခြင်း သို့မဟုတ် ရွှေ့ခြင်း ပြုလုပ်နိုင်သည်။

Part အမည်ရှိ အက္ခရာများ၊ ဂဏန်းများ၊ space များ၊ `_`, `.` နှင့် `-` မဟုတ်သော characters များကို ဖိုင်အမည်တွင် `_` ဖြင့် အစားထိုးသည်။

:::tip
Browser အများစုတွင် download တစ်ခုစီအတွက် နေရာမေးရန် ဆက်တင် ရှိသည်။ "Save as" ရွေးချယ်မှုကို အမြဲလိုချင်လျှင် ဖွင့်ပါ: Chrome နှင့် Edge တွင် settings အတွင်း Downloads အောက်၊ Firefox တွင် General, Files and Applications အောက်၊ Safari တွင် General, File download location အောက်။
:::

Download များ ရောက်ရာနေရာနှင့် ဖိုင်များကို ဘေးကင်းစွာ ထားနည်း: [ဖိုင်များ ရောက်ရာနေရာ](common:your-files)။

## ထုတ်ခြင်း

{{ui:Export}} menu သည် အခြား format များကို ရေးထုတ်သည်။ တစ်ခုစီသည် download ဖြစ်ပြီး part အမည်ဖြင့် အမည်ပေးသည်။

| Menu item | ဖိုင် | အတွင်းပါဝင်မှု |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | Solid ၏ triangles များ၏ binary STL၊ millimeters၊ **Z up** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF၊ solid ကို object တစ်ခုအဖြစ်၊ millimeters၊ **Z up** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | ဤ version တွင် မတည်ဆောက်ရသေးပါ (မှိန်ထားသည်): exact kernel လိုအပ်သည် |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | ဤ version တွင် မတည်ဆောက်ရသေးပါ (မှိန်ထားသည်) |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Mesh မှ flat faces ဖြင့် ဖွဲ့ထားသော solid: **လုံးဝန်းသော မျက်နှာပြင်များသည် flat facet အသေးများစွာ ဖြစ်သည်**။ Millimeters၊ PartCraft ၏ ကိုယ်ပိုင် axes (Y up)။ ဤ version တွင် အခြား CAD program များအတွက် သုံးရမည့် STEP |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` သို့မဟုတ် `<name> - face.dxf` | DXF R12။ Sketch: lines, arcs, circles နှင့် points များကို sketch ၏ ကိုယ်ပိုင် coordinates ဖြင့်၊ PROFILE, CONSTRUCTION နှင့် POINTS layers များပေါ်တွင်။ ရွေးထားသော flat face: ၎င်း၏ outline များကို closed polylines အဖြစ် (လုံးဝန်းသော edges များကို facets ဖြင့်) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | A3 drawing sheet: views သုံးခု၊ isometric၊ section နှင့် detail (သတ်မှတ်ထားလျှင်)၊ overall sizes၊ GD&T symbols၊ title block |

:::note
{{ui:STEP AP242 (exact solid)}} နှင့် {{ui:STEP AP214 (exact solid)}} ကို ဤ version တွင် မတည်ဆောက်ရသေးပါ: {{ui:STEP (faceted, mesh kernel)}} ကို သုံးပါ။ ပုံသဏ္ဌာန်နှင့် ထုထည် မှန်ကန်သော်လည်း လုံးဝန်းသော မျက်နှာပြင်တိုင်းသည် flat facet အများအပြား ဖြစ်သဖြင့် အခြား program များက အပေါက်ကို cylinder အဖြစ် ရွေးချယ်၍ မရပါ။ အရေးကြီးပါက **Curves** ကို အရင် ပိုသေးအောင် သတ်မှတ်ပါ။
:::

- Export များသည် ဖန်သားပြင်ပေါ်ရှိ part ၏ ဖြစ်သည်။ Assembly တွင် Export ကို ပိတ်ထားသည်; assembly export ကို ယခုအချိန်တွင် မရှိသေးပါ။
- STL, 3MF, faceted STEP နှင့် face DXF သည် အမြဲ facets ဖြင့် ဖွဲ့ထားသည်။ **Curves** ဆက်တင် (ဘာမှ မရွေးထားသောအခါ right panel တွင်) က တစ်လှည့်လျှင် facets 32 မှ 256 အထိ သတ်မှတ်သည်။ ချောမွေ့သော print အတွက် STL သို့မဟုတ် 3MF မထုတ်မီ Fine သို့မဟုတ် Very fine ကို ရွေးပါ။
- PDF drawing သည် reader ၏ built-in Helvetica font ကို သုံးသည်။ ပြ၍မရသော characters များကို "?" ဟု ပရင့်ထုတ်သည်။

အဆင့်ဆင့် လမ်းညွှန်: [Printing, STEP နှင့် DXF အတွက် Export](topic:export-files) နှင့် [Drawing sheet ဆွဲရန်](topic:drawing-pdf)။

## မသိမ်းရသေးသော အလုပ်

- PartCraft သည် ပြောင်းလဲမှုတိုင်းပြီးနောက် ခဏအကြာတွင် ဖွင့်ထားသော part သို့မဟုတ် assembly ၏ recovery မိတ္တူကို ဤ browser တွင် ထားသည်။ Crash သို့မဟုတ် tab ပိတ်သွားလျှင်လည်း မပျောက်ပါ: နောက်တစ်ကြိမ် PartCraft ဖွင့်သည့်အခါ "Recover your work?" ဟု မေးသည်။ ၎င်းသည် save မဟုတ်ပါ: ဖိုင်သို့ သိမ်းမှသာ အလုပ်ကို ထိန်းသိမ်းနိုင်သည်။ See [မသိမ်းရသေးသော အလုပ်ကို ပြန်ယူရန်](common:recover)။
- သိမ်းရန်မကျန်သော ပြောင်းလဲမှုများ ရှိစဉ် tab ကို ပိတ်ခြင်း သို့မဟုတ် reload လုပ်ရန် ကြိုးစားလျှင် browser က "Leave site?" ဟု မေးသည်။ ၎င်းသည် browser ၏ ကိုယ်ပိုင် box ဖြစ်ပြီး PartCraft က စာသားကို ပြောင်း၍ မရပါ။
- {{ui:New}}, {{ui:Open}} နှင့် assembly ကို ပိတ်ခြင်းတို့က သိမ်းရန်မကျန်သော ပြောင်းလဲမှုများကို ဖျက်မီ မေးသည်။

## Online နှင့် offline

အားလုံးသည် သင့်ကွန်ပျူတာပေါ်တွင် ဖြစ်ပျက်သည်: mesh kernel (WebAssembly program) ကို app နှင့်အတူ download လုပ်ပြီး geometry ကို local တွင် တည်ဆောက်သည်၊ ဖိုင်များကို disk မှ ဖတ်ပြီး disk သို့ ရေးသည်။ Part data သည် network မှ မသွားပါ။ See [The mesh kernel](topic:solid-kernels)။

ချိတ်ဆက်မှု လုံးဝမရှိဘဲ အလုပ်လုပ်ရန် online ရှိစဉ် offline အသုံးပြုရန် သိမ်းပါ: app bar ရှိ {{ui:Save for offline}} ကို ရွေးပြီး "Saving 40 of 212" ဟု ရေတွက်နေသည့်အတိုင်း စောင့်ပါ၊ **Offline ready** ဟု ပြသည်အထိ။ သိမ်းထားသော မိတ္တူတွင် 3D library နှင့် mesh kernel ပါဝင်သဖြင့် နောက်ပိုင်း modeling၊ သိမ်းခြင်း၊ export အားလုံးနှင့် drawings များ offline တွင် အလုပ်လုပ်သည်။ **Could not save** ဟု ပြလျှင် online ရှိစဉ် ထပ်စမ်းရန် နှိပ်ပါ; **Offline not available** ဆိုသည်မှာ ဤ browser window က မိတ္တူကို ထိန်းသိမ်းနိုင်ခြင်း မရှိပါ (private windows နှင့် အချို့ managed computers)။ မိတ္တူ သိမ်းပြီးသောအခါ **Offline ready** ကို နှိပ်လျှင် {{ui:Save again (get the newest version)}} နှင့် {{ui:Remove the offline copy}} ကို ပေးသည်။ အသေးစိတ်: [Offline တွင် အလုပ်လုပ်ခြင်း](common:offline)။

:::online
သင် online ရှိသည်။ Offline အသုံးပြုရန် မသိမ်းထားလျှင်ပင်၊ PartCraft ဖွင့်ပြီး status bar chip က "Mesh kernel" ဟု ပြပြီးသည်နောက် ချိတ်ဆက်မှု ပြတ်လျှင်လည်း ဆက်လုပ်နိုင်သည်။ ချိတ်ဆက်မှု ပြန်ရသည်အထိ page ကို reload မလုပ်ပါနှင့်။
:::

:::offline
သင် offline ဖြစ်သည်။ PartCraft ဖွင့်ပြီးသားဆိုလျှင် ဆက်လုပ်နိုင်သည်; သိမ်းခြင်းနှင့် export လုပ်ခြင်းလည်း အလုပ်လုပ်သည်။ App bar တွင် **Offline ready** ဟု ပြလျှင် PartCraft သည် ချိတ်ဆက်မှုမရှိဘဲ အစမှ ဖွင့်နိုင်သည်; မဟုတ်လျှင် ဤ tab ကို reload မလုပ်ပါနှင့်။
:::

## Browser များအကြား ကွာခြားချက်

- **Downloads။** Browser တစ်ခုစီတွင် ကိုယ်ပိုင် downloads folder နှင့် မေးသည့်နည်းလမ်း ရှိသည်။ Browser က ဤ site က ဖိုင်ဒေါင်းလုဒ်ခွင့် တောင်းလျှင် ခွင့်ပြုပါ၊ မဟုတ်လျှင် သိမ်းခြင်းနှင့် export လုပ်ခြင်း မလုပ်နိုင်ပါ။
- **Drag and drop**: ဖိုင်ကို view ပေါ်သို့ ဆွဲချခြင်းသည် Chrome, Edge, Firefox နှင့် Safari တွင် အလုပ်လုပ်သည်။
- **ဖုန်း သို့မဟုတ် tablet မှ ဖိုင်များ။** iPhone နှင့် iPad တွင် Open က Files app ကို ပြသည်; သိမ်းထားသော ဖိုင်များသည် Files, Downloads သို့ သွားသည်။ Android တွင် Downloads folder သို့ သွားသည်။

ဖိုင်များ၏ အကြောင်းအရာသည် browser သို့မဟုတ် operating system အလိုက် ကွာခြားခြင်း မရှိပါ။
