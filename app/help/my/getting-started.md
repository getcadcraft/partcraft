---
title: PartCraft ကို စတင်အသုံးပြုခြင်း
summary: PartCraft ယခုလုပ်ဆောင်နိုင်သည့်အရာများ၊ browser လိုအပ်ချက်များနှင့် မိနစ် ၁၀ အတွင်း ပထမ part တစ်ခု၊ sketch မှ သိမ်းထားသော ဖိုင်အထိ။
keywords: စတင်ခြင်း, ပထမဆုံးအကြိမ်, quick start, မိတ်ဆက်, tutorial, ပထမ part, plate, parametric, part modeler
from: 5f0a668d
---

PartCraft သည် CadCraft မိသားစု၏ parametric part နှင့် assembly app ဖြစ်သည်။ 2D sketch ဆွဲပြီး relations နှင့် dimensions ဖြင့် တင်းကျပ်စေကာ extrude, revolve နှင့် hole ကဲ့သို့ features များဖြင့် solid အဖြစ် ပြောင်းသည်။ နောက်မှ ဂဏန်းတစ်ခုခုကို ပြောင်းလျှင် part သည် ၎င်း၏ history မှ ပြန်တည်ဆောက်သည်။ Parts များကို ထို့နောက် assemblies တွင် ထည့်ပြီး joints ဖြင့် နေရာချကာ motion ကို စစ်ဆေးနိုင်သည်။

ဤ build က လုပ်ဆောင်နိုင်သည်များ:

| အလုပ် | ရရှိမည့်အရာ |
|---|---|
| Sketches | Lines, rectangles, circles, arcs, points နှင့် centerlines၊ relations နှင့် dimensions ပါဝင်ပြီး တိုက်ရိုက် state: under, fully သို့မဟုတ် over defined |
| Solid features | Extrude, cut, revolve, revolved cut၊ simple နှင့် counterbored holes၊ linear နှင့် circular patterns၊ mirror၊ straight edges ကြား flat faces များပေါ်ရှိ fillets နှင့် chamfers၊ flat faces ပေါ်ရှိ shells နှင့် drafts။ Sweeps, lofts နှင့် exact kernel လိုအပ်သော အခြား features များကို ဤ version တွင် မတည်ဆောက်ရသေးပါ: see [ယခုမတည်ဆောက်ရသေးသောအရာများ](topic:not-built-yet) |
| History | Feature တစ်ခုစီ၏ ဂဏန်းများကို တည်းဖြတ်ခြင်း၊ suppress၊ rollback၊ နေရာပြောင်းခြင်းနှင့် ဖျက်ခြင်း၊ undo ဖြင့် |
| Assemblies | Rigid, revolute နှင့် slider joints ဖြင့် ချိတ်ဆက်ထားသော parts၊ clash စစ်ဆေးမှုနှင့် motion စစ်ဆေးမှု |
| Drawings | A3 sheet တွင် views သုံးခု၊ isometric၊ section၊ detail view၊ overall sizes၊ datums၊ feature control frames နှင့် surface finish symbols၊ PDF အဖြစ် ထုတ်ရန် |
| Files | ကိုယ်ပိုင် part နှင့် assembly ဖိုင်များ၊ STL, 3MF, faceted STEP, DXF နှင့် PDF ထုတ်ခြင်း |

အားလုံးသည် browser ထဲတွင်၊ သင့်ကွန်ပျူတာပေါ်တွင် လုပ်ဆောင်သည်။ **တစ်ခုမျှ upload မလုပ်ပါ။** ဖိုင်များ ရောက်ရာနေရာအတွက် see [ဖိုင်များ: ဖွင့်ခြင်း၊ သိမ်းခြင်းနှင့် ထုတ်ခြင်း](topic:files)။

## လိုအပ်သည်များ

- **WebGL** (3D graphics) နှင့် **WebAssembly** ဖွင့်ထားသော လက်ရှိ Chrome, Edge, Firefox သို့မဟုတ် Safari။ နှစ်ခုစလုံး default အနေဖြင့် ဖွင့်ထားသည်။ Solid geometry ကို app နှင့်အတူ ဖွင့်လာသော WebAssembly mesh kernel က တည်ဆောက်သည်: see [The mesh kernel](topic:solid-kernels)။
- Mouse က အလွယ်ဆုံးဖြစ်သည်။ Trackpad အလုပ်လုပ်သည်၊ touch screen သည် ကြည့်ရှုခြင်းနှင့် ရိုးရှင်းသော sketching အတွက် အလုပ်လုပ်သည်: see [Trackpad, touch နှင့် သေးငယ်သော screen များ](topic:trackpad-and-touch)။
- 1280 pixels အနည်းဆုံးကျယ်သော screen တွင် toolbar အပြည့်အစုံကို တစ်တန်းတည်း ပြသည်။ ပိုကျဉ်းသော window များတွင် toolbar ကို ဘေးသို့ scroll လုပ်ရသည်; ဖုန်းတွင် panel များကို အောက်ခြေ bar မှ sheet အဖြစ် ဖွင့်သည်။

Browser အကြောင်းပိုမိုသိရန်: [Browsers နှင့် computers](common:browsers)။

:::note
PartCraft သည် browser ထဲတွင် အလုပ်လုပ်ပြီး desktop တွင် CadCraft Studio အတွင်း ဖွင့်နိုင်သည်။ Cloud saving ကို ယခုအချိန်တွင် မရနိုင်သေးပါ: သင့်ကွန်ပျူတာမှ parts များကို ဖွင့်ပြီး ဖိုင်များအဖြစ် ပြန်သိမ်းရသည်။
:::

## PartCraft ကို ဖွင့်ခြင်း

1. PartCraft ကို ဖွင့်ပါ။
2. Screen က "Loading the solid kernel…" ဟု ပြသည်အထိ စောင့်ပါ။ ပထမအကြိမ်တွင် အချိန်အနည်းငယ် ကြာသည်။
3. Empty 3D view တစ်ခု၊ base planes သုံးခု၊ ဘယ်ဘက်တွင် history ("Part1" ပြီးနောက် ရှေ့ plane, အပေါ် plane, ညာဘက် plane) နှင့် view ထဲတွင် "Start a part" ခေါင်းစဉ်ရှိ box တစ်ခုကို တွေ့ရမည်။
4. Status bar ညာဘက်ဆုံးအနားရှိ chip က "Mesh kernel" ဟု ပြသည်: ဤ version တွင် PartCraft သည် part တိုင်းကို mesh kernel ဖြင့် တည်ဆောက်သဖြင့် လုံးဝန်းသော မျက်နှာပြင်များသည် flat facets ဖြစ်သည်။ ချက်ချင်း modeling စတင်နိုင်သည်။

View က browser သည် 3D ကို မပြနိုင်ဟု ပြလျှင်၊ သို့မဟုတ် kernel မ load ဖြစ်လျှင် see [ပြဿနာရှာဖွေခြင်း](topic:troubleshooting#the-app-does-not-start)။

## ပထမ part: အပေါက်ပါသော plate

60 × 40 mm ဖြစ်ပြီး အထူ 10 mm၊ အပေါက် 6 mm ဖောက်ထားသော plate တစ်ခု ဖန်တီးပါမည်။ ယူနစ်များသည် millimeters ဖြစ်သည်။

### Outline ကို sketch ဆွဲခြင်း

1. ဘယ်ဘက် history ရှိ **ရှေ့ plane** ကို နှိပ်ပါ။ Plane သည် view တွင် မီးထိုးပြသည်။
2. Toolbar တွင် {{ui:Sketch}} ကို ရွေးပါ၊ သို့မဟုတ် {{key:S}} ကို နှိပ်ပါ။ View သည် plane ကို တိုက်ရိုက်ကြည့်ရန် လှည့်သွားပြီး Line tool ဖွင့်ထားသည်။
3. Rectangle tool အတွက် {{key:R}} ကို နှိပ်ပါ။
4. Pointer ကို origin (အနီရောင် အမှတ်ပါ သေးငယ်သော စက်ဝိုင်း) ပေါ်သို့ ရွှေ့ပါ။ သေးငယ်သော စတုရန်းတစ်ခုက snap ဖြစ်ကြောင်း ပြသည်။ နှိပ်ပါ။
5. အပေါ်သို့ နှင့် ညာဘက်သို့ ရွှေ့ပြီး ထပ်နှိပ်ပါ။ ထောင့်မှန်တစ်ခု ရရှိသည်။ မျဉ်းများသည် အပြာရောင်ဖြစ်သည်: အပြာဆိုသည်မှာ ၎င်းတို့ ရွေ့နိုင်ဆဲဖြစ်သည်။

### အရွယ်အစား သတ်မှတ်ခြင်း

1. Dimension tool အတွက် {{key:D}} ကို နှိပ်ပါ။
2. အပေါ်ဘက် မျဉ်းကို နှိပ်ပြီး ၎င်းအပေါ် အနည်းငယ် နှိပ်ပါ။ လက်ရှိ အရှည်ပါသော ဂဏန်းကွက် ဖွင့်လာသည်။
3. `60` ဟု ရိုက်ပြီး {{key:Enter}} ကို နှိပ်ပါ။ ထောင့်မှန်သည် 60 mm ကျယ်သို့ ပြောင်းသည်။
4. ဘယ်ဘက် မျဉ်းကို နှိပ်ပြီး ၎င်း၏ ဘယ်ဘက်အနည်းငယ်ကို နှိပ်ပါ။ `40` ဟု ရိုက်ပြီး {{key:Enter}} ကို နှိပ်ပါ။

View ၏ ဘယ်ဘက်အပေါ်ထောင့်ရှိ chip သည် ယခု **အပြည့်အစုံ သတ်မှတ်ပြီး** ဟု ပြပြီး မျဉ်းများသည် မည်းရောင်သို့ ပြောင်းသည် (Paper theme တွင် အနက်၊ Model theme တွင် အဖြူ)။ အမှတ်နှင့် အရွယ်အစား အားလုံး ပြီးသတ်ပြီဖြစ်သည်။

:::tip
Rectangle ကို origin မှ ဝေးသည့်နေရာတွင် စတင်ခဲ့လျှင် chip က "မပြည့်စုံသေး · 2 degrees of freedom" ဟုသာ ပြဦးမည်။ {{key:S}} ကို နှိပ်ပြီး Select ရွေးကာ ထောင့်တစ်ခုကို နှိပ်ပါ၊ {{key:Shift}}+နှိပ်ပြီး origin ကို နှိပ်ပါ၊ ထို့နောက် ညာဘက် panel တွင် {{ui:• Coincident}} ကို ရွေးပါ။
:::

### Extrude လုပ်ခြင်း

1. Toolbar တွင် {{ui:Exit}} ကို ရွေးပါ၊ သို့မဟုတ် sketch ပိတ်သွားသည်အထိ {{key:Esc}} ကို နှိပ်ပါ (များသောအားဖြင့် နှစ်ကြိမ်)။
2. {{ui:Extrude}} ကို ရွေးပါ။ 10 mm solid ပေါ်လာသည်။ History တွင် "Extrude1" ထည့်ပြီး "Sketch1" သည် ၎င်းအောက်တွင် indent ဖြင့် ပြသည်။
3. ညာဘက် panel တွင် extrude ၏ ဆက်တင်များကို ပြသည်။ အထူပြောင်းရန် **Depth (mm)** တွင် ဂဏန်းအသစ် ရိုက်ပြီး {{key:Enter}} သို့မဟုတ် {{key:Tab}} ကို နှိပ်ပါ။ Part သည် ချက်ချင်း ပြန်တည်ဆောက်သည်။

### အပေါက် ထည့်ခြင်း

1. Plate ရှေ့ရှိ ကြီးမားသော flat face (extrusion ၏ အဆုံး) ကို နှိပ်ပါ။ Face တစ်ခုလုံး မီးထိုးပြပြီး ညာဘက် panel တွင် **Face** ဟု ပြသည်။
2. ညာဘက် panel တွင် {{ui:Sketch on this face}} ကို ရွေးပါ။
3. Point tool အတွက် {{key:P}} ကို နှိပ်ပြီး face ၏ အလယ်အနီးတွင် နှိပ်ပါ။
4. {{ui:Exit}} ကို ရွေးပါ။
5. {{ui:Hole}} ကို ရွေးပါ။ Plate ကို ဖောက်ထားသော 6 mm အပေါက် ရရှိသည်။ လိုအပ်လျှင် ညာဘက် panel ရှိ **Diameter (mm)** ကို ပြောင်းပါ။

ဘယ်ဘက်အောက်ခြေရှိ **Part** box တွင် ယခု ထုထည်၊ မျက်နှာပြင် ဧရိယာ၊ အရွယ်အစား (60 × 40 × 10 mm) နှင့် "Through holes: 1" ကို ပြသည်။

### သိမ်းခြင်း

1. {{key:Mod+S}} ကို နှိပ်ပါ သို့မဟုတ် {{ui:Save}} ကို ရွေးပါ။
2. Browser က `Part1.partcraft.json` ကို downloads folder သို့ ဒေါင်းလုဒ်ဆွဲသည်။ ဖိုင်တွင် history အပြည့်အစုံ ပါဝင်သည်: ဆက်တည်းတည်းဖြတ်ရန် {{ui:Open}} ဖြင့် ပြန်ဖွင့်ပါ။

Part ကို အရင်အမည်ပြောင်းလိုလျှင် view ရှိ အလွတ်နေရာကို နှိပ်ပြီး ဘာမျှ မရွေးထားစေဘဲ ညာဘက် panel တွင် **Name** အသစ်ကို ရိုက်ပါ။

## နောက်တစ်ဆင့်

- [ပထမ sketch ဆွဲခြင်း](topic:sketch-basics) နှင့် [Sketch ကို အပြည့်အစုံ သတ်မှတ်ခြင်း](topic:relations-dimensions) တို့က sketcher ကို အသေးစိတ် ရှင်းပြသည်။
- [History မှတစ်ဆင့် part ကို ပြောင်းခြင်း](topic:edit-history) က ဆောက်ထားသည်များကို တည်းဖြတ်ပုံ ပြသည်။
- [Round, bevel နှင့် hollow](topic:fillet-chamfer-shell) နှင့် [Drawing ဆွဲခြင်း](topic:drawing-pdf) တို့က part ကို ပြီးအောင် လုပ်သည်။ [ယခုမတည်ဆောက်ရသေးသောအရာများ](topic:not-built-yet) တွင် sweeps နှင့် lofts ကဲ့သို့ ဤ version မလုပ်နိုင်သည်များကို စာရင်းပြုထားသည်။
- [အခြား parametric modeler မှ လာခြင်း](topic:coming-from) တွင် ဤနေရာတွင် ကွာခြားစွာ အလုပ်လုပ်သော အကျင့်များကို စာရင်းပြုထားသည်။
- [Keys နှင့် mouse](topic:keyboard) တွင် shortcut အပြည့်အစုံ ရှိသည်။
- [ဤ help ကို သုံးခြင်း](common:help)။
