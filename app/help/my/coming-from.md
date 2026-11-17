---
title: အခြား parametric modeler မှ ပြောင်းလာခြင်း
summary: desktop parametric part modelers ၏ အကျင့်များသည် PartCraft သို့ မည်သို့ ပြောင်းလဲ ဆက်စပ်သလဲ၊ ပထမ တစ်နာရီအတွင်း အတွေ့အကြုံရှိသော အသုံးပြုသူများကို လဲစေသော ကွာခြားချက်များ။
keywords: switching, migrate, familiar, feature manager, design tree, smart dimension, boss extrude, cut extrude, hole wizard, mates, interference detection, rollback bar, property manager, mouse, differences
from: fbacaee1
---

SolidWorks ဖြင့် part များ ဒီဇိုင်းလုပ်ပါက PartCraft ၏ အယူအဆအများစု ရင်းနှီးမည်ဖြစ်ပါသည်: Front၊ Top နှင့် Right ပလေန်များပေါ်ရှိ sketches၊ relations နှင့် smart dimensions၊ rollback bar ပါသော feature history နှင့် mates ဖြင့် နေရာချထားသော assemblies။ ၎င်းတို့ကို ရောက်ရှိသည့် နည်းလမ်းမှာ အချို့နေရာတွင် ကွဲပြားပြီး ဤပထမ build သည် ပိုနည်းပါသည်။ ဤစာမျက်နှာသည် သင်၏ အကျင့်များကို မြေပုံဆွဲပြီး အံ့သြစရာများကို ဖော်ပြပါသည်။

## အကျင့်များ၊ မြေပုံဆွဲထားခြင်း

| သင် အသုံးပြုထားသည် | PartCraft တွင် |
|---|---|
| ဘယ်ဘက်ရှိ design tree | ဘယ်ဘက်ရှိ history: ပလေန်များ၊ ထို့နောက် features၊ အသုံးပြုသော feature အောက်တွင် indent လုပ်ထားသော sketches |
| Front၊ Top နှင့် Right ပလေန်များ | တူညီသော သုံးခု၊ origin မှတဆင့်။ Front သည် XY ပလေန်၊ Top သည် XZ၊ Right သည် YZ၊ Y သည် အပေါ်သို့ ရှိသည် |
| ပလေန် သို့မဟုတ် မျက်နှာပေါ် sketch၊ ထို့နောက် အတည်ပြုထောင့်ဖြင့် ထွက်ခြင်း | ရွေးထားသော ပလေန် သို့မဟုတ် ပြားသော မျက်နှာပေါ်တွင် {{ui:Sketch}} ({{key:S}}); {{ui:Exit}} သို့မဟုတ် {{key:Esc}} ပိတ်သည်အထိ |
| Smart Dimension | {{ui:Dimension}} ({{key:D}})။ အရာတစ်ခု သို့မဟုတ် နှစ်ခု နှိပ်ပါ၊ ထို့နောက် နံပါတ် ဘယ်မှာ ထားမလဲ။ နေရာချသည့်အရာက ဘေးတိုက်၊ ဒေါင်လိုက် သို့မဟုတ် aligned ကို ရွေးပေးသည် |
| property panel ရှိ Add Relations | အရာများ ရွေး၊ ထို့နောက် ညာဘက်ပြားရှိ relation ခလုတ်များ (Coincident၊ Horizontal၊ Parallel၊ Tangent၊ Equal စသည်) |
| sketch လုပ်စဉ် အလိုအလျောက် relations | Snaps က coincident၊ point-on-curve၊ horizontal နှင့် vertical relations ထည့်သည် |
| အပြာ / အနက် / အနီ sketch အရောင်များ | အယူအဆတူ: အပြာ = under defined၊ မင်အနက် = fully defined၊ အနီ = over defined။ chip က ကျန်ရှိသော degrees of freedom ကို ပြသည် |
| revolves အတွက် Centerline | {{ui:Centerline}} ({{key:N}}); {{ui:Revolve}} သည် အခြား axis မရွေးလျှင် ပထမ centerline ကို သုံးသည် |
| Sketch fillet | sketch ထဲရှိ {{ui:Fillet}} ({{key:F}}): ထောင့်ကို နှိပ်ပြီး radius ရိုက်ပါ |
| Construction geometry toggle | {{ui:Construction}} ({{key:Q}}) |
| Extruded boss | {{ui:Extrude}}: Blind၊ Mid-plane၊ Up to face / next / vertex၊ Offset from face၊ ဒုတိယ ဦးတည်ချက်၊ taper၊ contour တစ်ခု (Pick regions) |
| Extruded cut | {{ui:Cut}}: Through all ဖြင့် စတင်သည်; pocket အတွက် Blind သို့ ပြောင်းပါ |
| Revolved boss / cut | {{ui:Revolve}} / {{ui:More}} › {{ui:Revolved cut}} |
| Reference plane / axis / point | {{ui:More}} › {{ui:Plane}}၊ {{ui:Axis}}၊ {{ui:Point}} ([Reference planes, axes and points](topic:reference-geometry) ကို ကြည့်ပါ) |
| Swept / lofted boss သို့မဟုတ် cut၊ draft | ပြားသော မျက်နှာများပေါ် {{ui:More}} › {{ui:Draft}} ([Sweep, loft and draft](topic:sweep-loft-draft) ကို ကြည့်ပါ)။ {{ui:Sweep}} နှင့် {{ui:Loft}} ကို ဤဗားရှင်းတွင် မတည်ဆောက်ရသေးပါ (exact kernel လိုအပ်သည်) |
| Hole Wizard | {{ui:Hole}} ကို loose sketch point တိုင်းတွင်: simple၊ counterbore၊ countersink (90° / 82°) သို့မဟုတ် tapped ISO metric M2–M24၊ through သို့မဟုတ် blind |
| Linear / circular pattern၊ mirror | {{ui:Linear}}၊ {{ui:Circular}}၊ {{ui:Mirror}} (features သို့မဟုတ် body တစ်ခုလုံး) |
| edges ပေါ် Fillet နှင့် chamfer | {{ui:Fillet}} / {{ui:Chamfer}}: edge တစ်ခုကို နှိပ်၊ နောက်ထပ်အတွက် {{key:Shift}}+နှိပ်၊ ထို့နောက် ခလုတ်။ radius တစ်ခု; equal၊ two-distance သို့မဟုတ် distance-angle chamfers။ ဤဗားရှင်းတွင် flat မျက်နှာနှစ်ခုကြား straight edges သာ၊ ထောင့်တစ်ခုတွင် တွေ့သော rounds များကို mitred လုပ်သည်။ ကွေးသော edges များကို sketch ထဲတွင် ({{ui:Fillet}} sketch ထဲ၊ {{key:F}}) ကွေး သို့မဟုတ် ဘေးဖြတ်ပါ |
| Shell | {{ui:Shell}}: ဖွင့်ရန် ပြားသော မျက်နှာများကို နှိပ်၊ ထို့နောက် ခလုတ်။ နံရံအထူ တစ်ခု |
| STEP ဖိုင် ဖွင့်ခြင်း | {{ui:Open}}: တြိဂံများအဖြစ် ဖတ်သည်၊ တည်ဆောက်ရန် solid body ([Open a STEP file](topic:import-step)) |
| feature တည်းဖြတ်၊ ထို့နောက် OK | feature ကို နှိပ်; ညာဘက်တွင် နံပါတ်များ ပြောင်း; ရိုက်သည်နှင့်အမျှ ပြန်တည်ဆောက်သည်။ OK မရှိ၊ Cancel မရှိ: {{key:Mod+Z}} သုံးပါ |
| sketch တည်းဖြတ်ခြင်း | history ရှိ sketch ကို နှစ်ချက်နှိပ် |
| Rebuild | ပြောင်းလဲမှု တိုင်းနောက်တွင် အလိုအလျောက်။ rebuild ကီး မရှိ |
| Suppress / unsuppress | ညာဘက်ပြားရှိ {{ui:Suppress}} / {{ui:Unsuppress}} |
| rollback bar ကို ဆွဲခြင်း | feature ပေါ်ရှိ {{ui:Roll back to here}}; ပြန်သွားရန် "Rollback bar · roll forward" ကို နှိပ်ပါ |
| tree ထဲ feature ကို ဆွဲ၍ စီခြင်း | {{ui:Move up}} / {{ui:Move down}} သို့မဟုတ် {{key:Alt+Up}} / {{key:Alt+Down}}; dependency ပျက်စီးမည်ဆိုလျှင် အကြောင်းရင်းဖြင့် ငြင်းပါသည် |
| မော်ဒယ်ပေါ်တွင် နှစ်ချက်နှိပ်၍ အတိုင်းအတာ တည်းဖြတ်ခြင်း | feature ကို ရွေးပါ: sketch ၏ အတိုင်းအတာများကို ညာဘက်ပြားတွင် စာရင်းပြုသည် |
| Mates: coincident၊ concentric၊ distance၊ angle | {{ui:Joint}} ({{key:J}}): အစိတ်အပိုင်းတိုင်းတွင် ပြားသော မျက်နှာတစ်ခု ရွေးပါ; joint က မျက်နှာချင်း ဆိုင်စေသည်။ axis ပေါ် **Centre on** သည် concentric ကဲ့သို့၊ **Offset** သည် distance ကဲ့သို့၊ **Angle** သည် angle ကဲ့သို့ |
| Fixed component | ပထမ အစိတ်အပိုင်းသည် grounded; {{ui:Make it the grounded part}} က ပြောင်းသည် |
| Insert component | {{ui:Add copy}} သို့မဟုတ် {{ui:Duplicate}} (မိတ္တူအခြား) သို့မဟုတ် {{ui:Insert}} (part ဖိုင်မှ) |
| assembly ထဲ part တည်းဖြတ်ခြင်း | {{ui:Edit part}}၊ ထို့နောက် {{ui:Back}} |
| Interference detection | {{ui:Clash}} |
| motion ကြည့်ရန် အစိတ်အပိုင်း ရွှေ့ခြင်း | revolute သို့မဟုတ် slider joint ၏ angle သို့မဟုတ် offset slider ကို ဆွဲပါ; {{ui:Check the motion for clashes}} က sweep လုပ်သည်။ joint မရှိသော အစိတ်အပိုင်း: **Move by hand** (ဆွဲရန် မြားများ၊ သို့မဟုတ် ရိုက်ထည့်သော တန်ဖိုးများ) |
| Measure / Inspect | {{ui:Views}}၊ ထို့နောက် {{ui:Measure}} ({{key:M}}): အကွာအဝေးများ၊ ထောင့်များ၊ radius များ၊ ဧရိယာများ၊ {{ui:Mass properties}} |
| Exploded view၊ BOM | assembly တွင် ဘာမျှ မရွေးထားချိန်: ညာဘက်ပြားရှိ **Exploded views** နှင့် **Bill of materials** |
| Mass properties | **Part** အကွက်: ထုထည်၊ မျက်နှာဧရိယာ၊ အရွယ်အစား၊ faceted solid အတွက် (စက်ဝိုင်းပုံ အပိုင်းများတွင် အနည်းငယ် နိမ့်)။ ဒြပ်ထု မရှိ: material မရှိသေး |
| သိမ်း၊ STEP အဖြစ် သိမ်း | {{ui:Save}} က `.partcraft.json` ကို ဒေါင်းလုဒ်ဆွဲသည်; {{ui:Export}} တွင် STL၊ 3MF၊ exact STEP (AP242 သို့မဟုတ် AP214)၊ faceted STEP၊ DXF နှင့် PDF drawing ရှိသည် |
| ပြားဖြင့် part မှ drawing ဖန်တီးခြင်း | {{ui:Drawing}}: အလိုအလျောက် A3 စာရွက် views သုံးခု၊ isometric၊ section တစ်ခု၊ detail တစ်ခု၊ datums၊ feature control frames နှင့် finish symbols။ အရွယ်အစား အပြင်ပိုင်းများကိုသာ အတိုင်းအတာ ပေးသည် |
| Middle-drag ဖြင့် လှည့်ခြင်း | ဤနေရာတွင် **Left-drag** က လှည့်သည်။ Middle- သို့မဟုတ် right-drag က pan လုပ်သည်။ wheel က pointer နေရာတွင် zoom လုပ်သည် |
| View orientation၊ Normal To | {{ui:Views}} မီနူး; ရွေးထားသော မျက်နှာ၊ ပလေန် သို့မဟုတ် sketch အတွက် {{ui:Normal to}} |
| Zoom to fit (F) | {{key:F}}၊ သို့မဟုတ် {{ui:Fit}} (sketch ထဲတွင် {{key:F}} သည် Fillet ကိရိယာ) |
| Right-click မီနူးများ | မရှိ။ Right-drag က pan လုပ်သည်; sketch ထဲတွင် right-click က line chain ကို ပြီးစီးစေသည် |

:::tip
သင့်လက်များက SolidWorks ကို သိပါက **Settings** › **PartCraft** › **Menus, keys and mouse** ထဲမှ {{ui:Feature tree}} မီနူး ပုံစံကို ရွေးပါ: Features၊ Sketch၊ Surfaces၊ Evaluate၊ Drawing၊ Assembly နှင့် View tabs ပါသော ribbon၊ အလယ်ခလုတ်က orbit လုပ်သည်၊ {{key:Shift}} နှင့် အလယ်ခလုတ်က pan လုပ်သည်၊ ဘယ်ခလုတ်က ရွေးသည်သာ။ [Menus, keys and mouse](topic:menus-keys-and-mouse) ကို ကြည့်ပါ။
:::

## လူများကို ထိခိုက်စေသော ကွာခြားချက်များ

**sketch တစ်ခုလုံးသည် profile ဖြစ်သည်။** Extrude နှင့် Revolve သည် sketch ရှိ closed loop အားလုံးကို သုံးသည်။ feature တစ်ခုအတွက် sketch ၏ region တစ်ခု သို့မဟုတ် contour တစ်ခုကို ရွေး၍ မရပါ။ feature တစ်ခုလျှင် sketch တစ်ခု သုံးပါ။

**feature က ဘယ် sketch ကို ယူသလဲ။** feature သည် သင်စက်မပိတ်ခင် ပိတ်လိုက်သော sketch သို့မဟုတ် history တွင် ရွေးထားသော sketch ကို အသုံးပြုသည်။ ဘာမျှ မရွေးထားလျှင် မည်သည့် feature မှ မသုံးသေးသော အသစ်ဆုံး sketch ကို ယူသည်။ မှားသည်ဆိုလျှင် မှန်ကန်သော sketch ကို ရွေးပြီး feature ကို ပြန်ရွေးပါ။

**ပြောင်းလဲမှုများက ရိုက်သည်နှင့် ချက်ချင်း သက်ရောက်သည်။** OK နှင့် Cancel ပါသော feature dialog မရှိပါ။ နံပါတ်တိုင်း ချက်ချင်း ပြန်တည်ဆောက်ပြီး {{key:Mod+Z}} သည် ပြန်သွားရန် နည်းလမ်းဖြစ်သည်။ undo စာရင်းတွင် sketch တည်းဖြတ်မှု၊ features နှင့် ဆက်တင်များ အားလုံး ပါဝင်သည်။

**over defined ကို တိတ်ဆိတ်စွာ ခွင့်မပြုပါ။** driven (reference) အတိုင်းအတာ မရှိပါ။ အခြား relations က ဆုံးဖြတ်ပြီးသား အတိုင်းအတာကို over defined ဟု အစီရင်ခံပါသည် ("is already implied. Delete it.")။ ငြင်းဆန်သော အတိုင်းအတာသည် ဂျီသြမေတြီကို မပြောင်းဘဲ အနီ ဖြစ်သည်။ တစ်ခု ဖျက်ပါ၊ သို့မဟုတ် undo လုပ်ပါ။

**Sweeps နှင့် lofts ကို မတည်ဆောက်ရသေးပါ; fillets၊ chamfers၊ shells နှင့် drafts တွင် ကန့်သတ်ချက်များ ရှိသည်။** ဤ PartCraft ဗားရှင်းသည် အစိတ်အပိုင်းတိုင်းကို mesh kernel ဖြင့် တည်ဆောက်သည်; status bar chip က အမြဲ "Mesh kernel" ဟု ပြသည်။ Fillets နှင့် chamfers များသည် flat မျက်နှာနှစ်ခုကြား straight edges ပေါ်တွင်သာ အလုပ်လုပ်ပြီး rounds များ ထောင့်တွင် တွေ့သောအခါ mitred ဖြစ်သည်၊ blended မဟုတ်ပါ။ Shells များ ဖွင့်သည်၊ drafts များ ထိုးသည်၊ flat မျက်နှာများသာ။ exact kernel လိုအပ်သော features များကို နှိပ်လို့ ရနိုင်သော်လည်း ရွေးလျှင် "not built yet" ဟု ပြောပါသည်။ [The mesh kernel](topic:solid-kernels) နှင့် [What is not built yet](topic:not-built-yet) ကို ကြည့်ပါ။

**Fillet ခလုတ် နှစ်ခု။** sketch ထဲတွင် {{ui:Fillet}} ({{key:F}}) သည် sketch ထောင့်ကို ကွေးစေသည်။ part ပေါ်တွင် Features အုပ်စုရှိ {{ui:Fillet}} သည် solid edges ကို ကွေးစေသည် (ဤဗားရှင်းတွင် flat မျက်နှာနှစ်ခုကြား straight edges)။ ဤဗားရှင်းတွင် sweep သို့မဟုတ် loft မရှိပါ: [What is not built yet](topic:not-built-yet) ကို ကြည့်ပါ။

**Holes သည် loose points လိုအပ်သည်။** {{ui:Hole}} သည် Point ကိရိယာဖြင့် ဖန်တီးထားသော point များတွင် တူးသည်။ circle center များနှင့် line အဆုံးများ မရေတွက်ပါ။

**Through all သည် cuts အတွက်သာ။** boss တစ်ခုက depth လိုအပ်သည်။ "up to vertex / surface / next" end conditions မရှိသေးပါ။

**Solid သည် faceted ဖြစ်သည်။** mesh kernel က ကွေးသော မျက်နှာများကို ပြားသော facets ဖြင့် တည်ဆောက်သည်၊ ထို့ကြောင့် view၊ ထုထည်များ၊ STL နှင့် 3MF exports များ အားလုံး ထိုအရာများဖြင့် ပြုလုပ်ထားသည်: part ၏ panel ရှိ **Curves** က ၎င်းတို့ကို ပိုကွဲအောင် ပြုလုပ်သည်။ exact STEP export က မဟုတ်ပါ: ၎င်းသည် ကွေးမျက်နှာများကို မှန်ကန်သော surfaces ပေါ်တွင် ရေးသည်။

**မီလီမီတာသာ။** inch ဆက်တင် မရှိသေးပါ။ inch အရွယ်အစားများကို ရိုက်သောအခါ 25.4 ဖြင့် မြှောက်ပါ။

**Y သည် အပေါ်သို့ ဖြစ်သည်။** Front ပလေန်သည် သင့်ဘက် မျက်နှာမူပြီး Top သည် အပေါ်မှ ကြည့်သည်၊ သင်မျှော်လင့်သည့်အတိုင်း၊ သို့သော် ကမ္ဘာ၏ အပေါ်ဝင်ရိုးသည် Y ဖြစ်သည်။ STL၊ 3MF နှင့် exact STEP exports များကို Z အပေါ်သို့ လှည့်ထားသည်; faceted STEP က Y အပေါ်သို့ ထားသည်။

**Mates သည် ဂျီသြမေတြီ အတွဲများ မဟုတ်ဘဲ မျက်နှာများ ဖြစ်သည်။** joint သည် အမြဲ flat မျက်နှာနှစ်ခု မျက်နှာချင်း ဆိုင်စေခြင်းဖြင့် စတင်သည်။ အပေါက်ထဲ ထိုးထည့်သော တံအတွက် အပေါက်ပတ်လည် ပြားသော မျက်နှာနှင့် တံ၏ ပခုံးကို ရွေးပြီး **Centre on** ကို အပေါက်၏ axis နှင့် တံ၏ revolve axis သို့ သတ်မှတ်ပါ။ joints များက မရောက်သော အစိတ်အပိုင်းများသည် ထည့်ထားသည့်နေရာတွင် ကျန်နေပြီး သင်ဆွဲ၍ မရပါ။ loop ထဲရှိ joints များကို ဖြေရှင်းခြင်း မပြုပါ။

**သိမ်းခြင်းသည် ဒေါင်းလုဒ် ဖြစ်သည်။** အဆက်မပြတ် ထပ်ရေးသော ဖိုင်မရှိပါ။ သိမ်းတိုင်း downloads ဖိုင်တွဲတွင် ဖိုင်အသစ် ဖြစ်သည်။ part ကို ဦးစွာ အမည်ပေးပါ၊ ဖိုင်များကို project ဖိုင်တွဲတွင် ထားပါ။

**context menus မရှိ၊ command manager tabs မရှိ။** အရာအားလုံးက toolbar နှင့် ညာဘက်ပြားတွင် ရှိပြီး toolbar သည် သင်လုပ်နေသည့်အရာနှင့်အတူ ပြောင်းလဲသည်: sketch ကိရိယာများသည် sketch ထဲတွင်သာ၊ assembly ကိရိယာများသည် assembly ထဲတွင်သာ ပေါ်လာသည်။

**sketch အတွင်း ကီးများသည် အက္ခရာတစ်လုံးစီ ဖြစ်သည်။** {{key:L}}၊ {{key:R}}၊ {{key:C}}၊ {{key:A}}၊ {{key:P}}၊ {{key:N}}၊ {{key:F}}၊ {{key:D}}၊ {{key:Q}} နှင့် {{key:S}} သည် modifier မပါဘဲ ကိရိယာများ ရွေးသည်။ [Keys and mouse](topic:keyboard) ကို ကြည့်ပါ။
