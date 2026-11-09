---
title: PartCraft မျက်နှာပြင်
summary: Bar နှင့် panel တိုင်းအကြောင်း အကျဉ်းချုပ်: toolbar နှင့် ၎င်း၏ ပြောင်းလဲပုံ၊ history၊ part facts၊ 3D view၊ properties panel နှင့် status bar။
keywords: မျက်နှာပြင်, layout, toolbar, history, feature tree, properties, panel, status bar, interface, ui, tour, full screen
from: 7394fc49
---

မျက်နှာပြင်တွင် အပိုင်း ငါးပိုင်းရှိသည်: အပေါ်ဘက်ရှိ toolbar၊ ဘယ်ဘက်ရှိ history၊ အလယ်ရှိ 3D view၊ ညာဘက်ရှိ properties panel နှင့် အောက်ခြေရှိ status bar။ ၎င်းတို့အားလုံးအပေါ်တွင် CadCraft app bar ရှိသည်။

## App bar

အပေါ်ဆုံးရှိ ပါးလွှာသော bar သည် PartCraft ကိုယ်တိုင်မဟုတ်ဘဲ CadCraft site နှင့် သက်ဆိုင်သည်။ App အမည်နှင့် အလုပ်လုပ်သည့်နေရာ၊ version menu၊ **About PartCraft**၊ screen-mode ခလုတ်နှင့် Paper / Model theme ခလုတ်ကို ပြသည်။

- **Paper** သည် ဖြူသော စာရွက်ပေါ်ရှိ အမည်းရောင်မျဉ်းများ ဖြစ်သည်။ **Model** သည် မှောင်သော နောက်ခံပေါ်ရှိ အဖြူရောင်မျဉ်းများ ဖြစ်သည်။ Sketch အရောင်များသည် theme ကို လိုက်သည်။
- {{ui:Settings}} (gear သို့မဟုတ် {{key:Mod+,}}) တွင် {{ui:PartCraft}} tab ရှိသည်: view ကို လှည့်သော mouse ခလုတ်၊ mouse wheel သို့မဟုတ် trackpad၊ နှင့် sketching အတွင်း relations။ See [PartCraft ဆက်တင်များ](topic:settings)။
- Screen-mode ခလုတ် သို့မဟုတ် {{key:Ctrl+Shift+F}} သည် ပုံမှန်၊ full screen နှင့် bars ဝှက်ထားသော full screen အကြား ပြောင်းသည်။ Bars ဝှက်ထားချိန်တွင် pointer ကို အပေါ်အစွန်းသို့ ရွှေ့ပါ (သို့မဟုတ် ထိပါ) ၎င်းတို့ ပြန်ပေါ်လာမည်။ {{key:Esc}} က ပုံမှန်သို့ ပြန်သွားသည်။ ဤ key သည် Mac တွင်လည်း {{key:Ctrl+Shift+F}} ဖြစ်ပြီး ⌘ မဟုတ်ပါ။

## Toolbar

Toolbar သည် အုပ်စုဖွဲ့ထားသည်။ သင်လုပ်နေသည့်အရာနှင့်အတူ ပြောင်းလဲပြီး တစ်တန်းတည်းတွင် ကိုက်ညီသည်:

| အုပ်စု | ခလုတ်များ | ပြသချိန် |
|---|---|---|
| File | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Export}} (menu) | အမြဲ |
| Sketch | {{ui:Sketch}} | Sketch ဖွင့်မထားချိန် |
| Sketch | {{ui:Exit}}, {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Sketch ဖွင့်နေချိန်သာ |
| Features | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:More}} (menu: Revolved cut, Plane, Axis, Point, Sweep, Loft, Draft) | Part ပေါ်တွင်၊ sketch သို့မဟုတ် drawing ဖွင့်မထားချိန်တွင်မဟုတ်။ Fillet နှင့် Chamfer သည် flat faces နှစ်ခုကြား straight edges တွင် အလုပ်လုပ်သည်; Shell နှင့် Draft သည် flat faces တွင်။ Sweep နှင့် Loft ကို ဤ version တွင် မတည်ဆောက်ရသေးပါ (exact kernel လိုအပ်သည်); တစ်ခုကို နှိပ်လျှင် ထိုသို့ ပြောပြသည် |
| Features | {{ui:Done}} | Fillet, chamfer, shell သို့မဟုတ် draft အတွက် edges သို့မဟုတ် faces ရွေးနေချိန်သာ |
| Drawing | {{ui:Drawing}} | Part ပေါ်တွင် (part တွင် solid ရှိပြီးနောက် အသုံးပြုနိုင်သည်) |
| Drawing | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Back}} | Drawing sheet ပေါ်တွင်သာ |
| Assembly | {{ui:Assembly}} | Part ပေါ်တွင် (part တွင် solid ရှိပြီးနောက် အသုံးပြုနိုင်သည်) |
| Assembly | {{ui:Add copy}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:Edit part}}, {{ui:Close}} | Assembly တွင်သာ |
| Assembly | {{ui:Back}} | Assembly မှ part ကို တည်းဖြတ်နေချိန် |
| Edit | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} (menu: Cut, Copy, Paste, Paste in place, Duplicate, Delete, Select all, Select none) | အမြဲ; တစ်ခုစီသည် သင်ရှိနေသော sketch၊ history သို့မဟုတ် assembly ပေါ်တွင် အလုပ်လုပ်သည် |
| View | {{ui:Fit}}, {{ui:Normal to}}, {{ui:Views}} (menu: Measure, Mass properties, Section, Draft, Zebra, Curvature, {{ui:Base planes}}, ထို့နောက် Isometric, Front, Back, Top, Bottom, Right, Left) | အမြဲ |

ခလုတ်တစ်ခုပေါ်တွင် hover လုပ်ပါက ၎င်းလုပ်ဆောင်ချက်နှင့် key ကို ပြသည်။ မီးခိုးရောင်ခလုတ်ကို ယခု အသုံးမပြုနိုင်ပါ: ဥပမာ sketch ဖွင့်နေစဉ် feature ခလုတ်များ၊ သို့မဟုတ် assembly တွင် ပစ္စည်းနှစ်ခု မရောက်မချင်း {{ui:Joint}}။

Edit အုပ်စုရှိ {{ui:More}} menu သည် တည်းဖြတ်ခြင်းလုပ်ဆောင်ချက်တစ်ခုစီကို key ဖြင့် စာရင်းပြုသည်။ Copy နှင့် paste က ဘာပေါ်တွင် လုပ်မည်ဆိုသည်မှာ သင်ရှိနေသည့်နေရာကို လိုက်သည်; see [Copy, paste နှင့် duplicate](topic:copy-paste)။ မီးခိုးရောင် item ၏ tooltip က ယခု မလုပ်နိုင်သည့် အကြောင်းကို ပြောပြသည်။

{{ui:Export}} menu တွင် {{ui:STL, for 3D printing}}, {{ui:3MF, for 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF of the sketch or flat face}} နှင့် {{ui:Drawing (PDF): views, section, detail, GD&T}} ရှိသည်။ Exact STEP နှစ်ခုသည် မှိန်ထားသည်: ၎င်းတို့ကို ဤ version တွင် မတည်ဆောက်ရသေးသဖြင့် {{ui:STEP (faceted, mesh kernel)}} ကို သုံးပါ။

## History (ဘယ်ဘက်)

ဘယ်ဘက် panel သည် part ၏ feature history ဖြစ်ပြီး PartCraft က အပေါ်မှ အောက်သို့ ပြန်တည်ဆောက်သော စာရင်းဖြစ်သည်။

- ခေါင်းစဉ်သည် part ၏ အမည်ဖြစ်သည် ("Part1" ဖြစ်ပြီး အမည်မပြောင်းမချင်း)။
- **ရှေ့ plane**, **အပေါ် plane** နှင့် **ညာဘက် plane** က ပထမဆုံး ရှိသည်။ တစ်ခုကို နှိပ်ပြီး ရွေးပါ; view တွင် မီးထိုးပြသည်။
- ၎င်းတို့အောက်တွင် သင်ဆောက်ခဲ့သော features များကို ပြုလုပ်ခဲ့သည့် အစဉ်အတိုင်း ပြသည်။ Feature တစ်ခုက သုံးသော sketch ကို ထို feature အောက်တွင် indent ဖြင့် ပြသည်။
- Row ၏ ညာဘက်အဆုံးရှိ အမှတ်အသားသည် ၎င်း၏ အခြေအနေကို ပြောပြသည်:

| အမှတ်အသား | အဓိပ္ပာယ် |
|---|---|
| (မရှိ) | တည်ဆောက်ပြီး sketch သည် အပြည့်အစုံ သတ်မှတ်ပြီး |
| − | အပြည့်အစုံ မသတ်မှတ်ရသေးသော sketch (ရွေ့နိုင်ဆဲ) |
| + | လွန်ကဲနေသော sketch |
| ⚠ | တည်ဆောက်ပြီး သတိပေးချက်ရှိ (ဖတ်ရန် hover လုပ်ပါ) |
| ⚠ error | Feature မအောင်မြင်ပါ။ အကြောင်းရင်းကို ကြည့်ရန် hover သို့မဟုတ် နှိပ်ပါ |
| ⚠ not built | အခြား feature တစ်ခုကို လိုအပ်ပြီး ထို feature မအောင်မြင်ခြင်း သို့မဟုတ် ပိတ်ထားခြင်း |
| off | Suppress လုပ်ထားသည် |

- Feature တစ်ခုစီသည် ၎င်း၏ အမည်နောက်တွင် အဓိက ဂဏန်းကို ပြသည်၊ ဥပမာ Extrude အတွက် "25 mm" သို့မဟုတ် အပေါက်အတွက် "Ø6.6 thru"။ ဂဏန်းကို နှစ်ချက်နှိပ်ပါ၊ သို့မဟုတ် row ပေါ်တွင် {{key:F2}} ကို နှိပ်ပြီး ထို နေရာတွင် ပြောင်းပါ။ See [အရွယ်အစားများ ပြောင်းခြင်း](topic:change-sizes)။
- Feature ကို နှိပ်လျှင် ညာဘက်တွင် တည်းဖြတ်နိုင်သည်။ Sketch ကို နှစ်ချက်နှိပ်လျှင် ဖွင့်သည်။
- Rollback လုပ်သောအခါ **Rollback bar · roll forward** row သည် စာရင်းတွင် ပေါ်လာသည်။ ၎င်းအောက်ရှိ features များသည် မီးခိုးရောင်ဖြစ်ပြီး မတည်ဆောက်ရသေးပါ။
- Row တစ်ခုကို focus ထားစဉ် {{key:Up}} နှင့် {{key:Down}} ဖြင့် row များကြား ရွှေ့ပြီး {{key:Alt+Up}} / {{key:Alt+Down}} ဖြင့် history ခွင့်ပြုသလို feature ကိုယ်တိုင်ကို ရွှေ့နိုင်သည်။

Assembly တွင် ဤ panel သည် **Parts** (ပထမတစ်ခုကို "grounded" ဟု အမှတ်အသားပြုသည်) နှင့် **Joints** ကို ပြသည်။

### Part facts

History အောက်တွင် **Part** box က solid ၏ **Volume** (ထုထည်), **Surface area** (မျက်နှာပြင် ဧရိယာ), **Size (X × Y × Z)** (အရွယ်အစား), **Through holes** (ဖောက်ထားသော အပေါက်များ), **Bodies** (ပစ္စည်းခန္ဓာများ), **Triangles** (တြိဂံများ), **Features** အရေအတွက်နှင့် **Failing** (ပျက်နေသော အရေအတွက်) ကို စာရင်းပြုသည်။ ထုထည်နှင့် ဧရိယာသည် mesh kernel က တည်ဆောက်သော faceted solid ၏ ဖြစ်ပြီး လုံးဝန်းသော ပုံသဏ္ဌာန်များအတွက် အမှန်တန်ဖိုးထက် အနည်းငယ်နည်းသည် (see [Features နှင့် ၎င်းတို့၏ ရွေးချယ်စရာများ](topic:features#curves-resolution))။

Assembly တွင် box ခေါင်းစဉ်သည် **Assembly** ဖြစ်ပြီး Parts, Instances, Joints, Not joined နှင့် Interference ကို ပြသည်။

## 3D view (အလယ်)

View တွင် solid, base planes နှင့် feature မသုံးရသေးသော sketch ကို ပြသည်။

Part ထဲတွင် solid မရှိသေးချိန်တွင် base planes ကို အပြည့်ဆွဲသည်။ Solid ရှိပြီးနောက် ၎င်းတို့သည် နောက်သို့ ဆုတ်သည်: မှိန်စွာ ဆွဲထားသဖြင့် part ကို မဖုံးပါ၊ နှိပ်ချက်များသည် ၎င်းတို့ကို ဖြတ်ပြီး part သို့ ရောက်သည်။ Sketch ဘယ်မှာ ဆွဲမည်ကို ရွေးနေချိန် ({{ui:Sketch}} ကို ဘာမျှမရွေးဘဲ) နှင့် history တွင် တစ်ခုကို ရွေးချိန်တွင် ၎င်းတို့ အပြည့်ပြန်ပေါ်လာသည်။ {{ui:Views}} › {{ui:Base planes}} သည် ၎င်းတို့ကို လုံးဝဝှက်သည်; ဘယ်မှာ sketch ဆွဲမည်ကို ရွေးနေစဉ် ၎င်းတို့ ဆက်ပေါ်နေသည်။ PartCraft သည် ဤရွေးချယ်မှုကို မှတ်ထားသည်။

- Part ကို လှည့်ရန် ဆွဲပါ၊ view ကို ရွှေ့ရန် right-drag သို့မဟုတ် middle-drag လုပ်ပါ၊ zoom လုပ်ရန် wheel ကို pointer ပေါ်တွင် လှည့်ပါ။ အသေးစိတ်ကို [Keys နှင့် mouse](topic:keyboard) တွင် ကြည့်ပါ။
- Face, edge သို့မဟုတ် plane ပေါ်တွင် hover လုပ်လျှင် မီးထိုးပြသည်။ နှိပ်ပြီး ရွေးပါ။ Faces များကို တစ်ခုလုံး မီးထိုးပြပြီး edges များကို တစ်ခုလုံး ဆွဲပြီး ရွေးသည်။ {{key:Shift}}+နှိပ်ခြင်းဖြင့် edges သို့မဟုတ် faces အများအပြား စုဆောင်းနိုင်သည်။ ၎င်းတို့ အမှတ်အသား ပါနေဆဲ ဖြစ်သည်။
- ညာဘက်အပေါ်ရှိ view cube သည် part နှင့်အတူ လှည့်သည်: face, edge သို့မဟုတ် corner ကို နှိပ်ပြီး ထိုနေရာမှ ကြည့်ပါ၊ လှည့်ရန် ဆွဲပါ၊ house ခလုတ်က စတင်သည့်နေရာသို့ ပြန်သွားသည်။ See [View cube](topic:view-cube)။
- ရွေးထားသော Extrude သည် ၎င်း၏ အဆုံး face ပေါ်တွင် လိမ်းသော အဝါရောင် မြား ပြသည်၊ Revolve တွင် လှည့်သည့်အဆုံးတွင် ကွေးသော မြား ပြသည်: နက်ရှိုင်းမှု သို့မဟုတ် ထောင့်ကို ပြောင်းရန် ဆွဲပါ၊ သို့မဟုတ် ၎င်းဘေးရှိ ကွက်ထဲတွင် ရိုက်ပါ။ See [အရွယ်အစားများ ပြောင်းခြင်း](topic:change-sizes#drag-it-in-the-view)။
- Part ကို အလွတ်ဖြစ်နေချိန်တွင် **Start a part** ခေါင်းစဉ်ရှိ box က ပထမဆုံး အဆင့်များကို စာရင်းပြုသည်။
- `.partcraft.json` သို့မဟုတ် `.partcraft-asm.json` ဖိုင်ကို view ၏ နေရာတစ်ခုရာတွင် ချပြီး ဖွင့်ပါ။ `.step`, `.stp`, `.stl`, `.obj`, `.3mf` သို့မဟုတ် `.3dm` ဖိုင်ကို ထိုနေရာတွင် ချလျှင် solid body အဖြစ် ဖွင့်သည်။

### Edges သို့မဟုတ် faces ရွေးနေစဉ်

Fillet, Chamfer သို့မဟုတ် Shell ကို ဘာမျှမရွေးဘဲ ရွေးလျှင် (သို့မဟုတ် ထို feature ပေါ်ရှိ {{ui:Pick edges}}) part သည် ထို feature မတိုင်မီ ပုံစံအတိုင်း ပြသည်။ Edges သို့မဟုတ် faces များကို နှိပ်ပြီး ထည့်ခြင်း သို့မဟုတ် ဖယ်ခြင်း ပြုလုပ်ပါ; ၎င်းတို့၏ အမှတ်အသားက ဘာပါနေသလဲ ပြသည်။ {{ui:Done}} သို့မဟုတ် {{key:Esc}} က ပြီးဆုံးစေသည်။ See [Round, bevel နှင့် hollow](topic:fillet-chamfer-shell)။

### Drawing sheet ပေါ်တွင်

{{ui:Drawing}} သည် 3D view ကို A3 drawing sheet ဖြင့် အစားထိုးသည်။ Wheel ဖြင့် zoom လုပ်၊ right သို့မဟုတ် middle drag ဖြင့် pan လုပ်၊ {{key:F}} က fit လုပ်သည်။ See [Drawing ဆွဲခြင်း](topic:drawing-pdf)။

### Sketch ဖွင့်နေစဉ်

View သည် sketch plane ကို တိုက်ရိုက်ကြည့်ရန် လှည့်ပြီး 2D sketch layer တစ်ခု အပေါ်တွင် ပေါ်လာသည်။ Part က ဤ sketch မတိုင်မီ ဆောက်ထားသော features များကိုသာ ပြသည်။ ဘယ်ဘက်အပေါ်ရှိ strip က sketch ၏ state chip ("အပြည့်အစုံ သတ်မှတ်ပြီး", "မပြည့်စုံသေး · 3 degrees of freedom" စသည်) နှင့် "Sketch2 on a face of Extrude1" ကဲ့သို့ အမည်ကို ပြသည်။

## Properties panel (ညာ)

ညာဘက် panel သည် ရွေးထားသည့်အရာကို ပြသပြီး ၎င်း၏ ခေါင်းစဉ်က အမည်ပေးသည်:

- **Part** (ဘာမျှမရွေးထား): part ၏ **Name** နှင့် **Curves** ဆက်တင်။
- Plane: {{ui:Sketch on it}} ခလုတ်။
- **Face**: အမျိုးအစား (Flat face, Cylinder ၏ radius နှင့် axis, Cone, Sphere သို့မဟုတ် Torus)၊ ဧရိယာ၊ မည်သည့် feature က ဖန်တီးခဲ့သလဲ၊ နှင့် flat face အတွက် {{ui:Sketch on this face}}, {{ui:Normal to}}, {{ui:Export face as DXF}}, {{ui:Extrude from it}}, {{ui:Cut into it}} နှင့် {{ui:Hole here}} (see [face တစ်ခုလုံးကို ဆွဲ သို့မဟုတ် တွန်းခြင်း](topic:extrude-and-cut#pull-or-push-a-whole-face))။
- **Edge**: အမျိုးအစား (straight, ဗဟိုနှင့် radius ပါသော စက်ဝိုင်း သို့မဟုတ် curve), အရှည်နှင့် ၎င်းနှစ်ဖက်ကြားရှိ faces နှစ်ခု (ဥပမာ "Extrude1 end face and Extrude1 side"), နှင့် {{ui:Fillet}} နှင့် {{ui:Chamfer}} ခလုတ်များ။
- {{key:Shift}} ဖြင့် edges သို့မဟုတ် faces အများအပြား ရွေးထားသည်: အရေအတွက်၊ edges အတွက် {{ui:Fillet}} နှင့် {{ui:Chamfer}}၊ နှင့် {{ui:Clear}}။
- Feature: ၎င်း၏ ဂဏန်းများနှင့် ရွေးချယ်စရာများ၊ sketch ၏ အရွယ်အစားများ၊ ထို့နောက် {{ui:Suppress}}, {{ui:Roll back to here}}, {{ui:Move up}}, {{ui:Move down}}, {{ui:Delete}} နှင့် ၎င်း၏ **Name**။
- ဖွင့်ထားသော sketch: ၎င်း၏ state၊ ရွေးထားသည်များသို့ ထည့်နိုင်သော relations၊ relations နှင့် dimensions စာရင်း၊ **Add by coordinates** နှင့် {{ui:Exit sketch}}, {{ui:Fit}} နှင့် {{ui:Export as DXF}}။
- Drawing sheet ပေါ်တွင်: section နှင့် detail ဆက်တင်များ သို့မဟုတ် ရွေးထားသော GD&T သင်္ကေတ။
- Assembly တွင်: assembly, ရွေးထားသော part သို့မဟုတ် ရွေးထားသော joint။

အရွယ်အစား ဂဏန်းကွက်တိုင်းသည် {{key:Enter}} သို့မဟုတ် {{key:Tab}} ကို နှိပ်လျှင်၊ သို့မဟုတ် အပြင်သို့ နှိပ်လျှင် ထိရောက်သည်။ Part ချက်ချင်း ပြန်တည်ဆောက်သည်; OK ခလုတ် မရှိပါ။ နောက်ပြန်သွားရန် {{key:Mod+Z}} ကို သုံးပါ။

## Status bar (အောက်ခြေ)

- ဘယ်ဘက်တွင် sketch အတွင်း pointer ၏ coordinates (sketch ဖွင့်နေချိန်သာ)။
- အလယ်တွင် message များ: နောက်ဆက်တွဲ လုပ်ရမည်များနှင့် ဘာကြောင့် ငြင်းပယ်ခံရသလဲ။ ဘာမျှ မဖြစ်သလိုရှိလျှင် ဖတ်ပါ။
- ညာဘက်နားတွင် kernel chip: ဤ version တွင် အမြဲ "Mesh kernel"။ ၎င်းအဓိပ္ပာယ်ကို hover လုပ်ကြည့်ပါ။ See [Mesh kernel](topic:solid-kernels)။
- ညာဘက်တွင် chip: part ပြန်တည်ဆောက်နေစဉ် "Rebuilding…" ဖြစ်ပြီး၊ အားလုံးကောင်းလျှင် "… ms အတွင်း ပြန်တည်ဆောက်ပြီး" သို့မဟုတ် "1 feature failing"။ Assembly တွင် "… ms အတွင်း နေရာချပြီး" ဟု ပြသည် သို့မဟုတ် joint ပြဿနာများကို ရေတွက်သည်။

ထို့အပြင် [Illustrate တွင် manual စတင်ခြင်း](topic:illustrate) ကို ကြည့်ပါ: သင့် parts နှင့် assemblies မှ assembly manuals ဖန်တီးသော workspace ဖြစ်သည်။

## ကျဉ်းသော screen တွင်

760 pixels အထိ ကျယ်သော screen (ဥပမာ ဖုန်း) တွင် view သည် screen ကို ထိန်းထားသည်: toolbar သည် ဘေးသို့ scroll လုပ်သော တစ်တန်းတည်း ဖြစ်ပြီး panels များသည် အောက်ခြေ bar မှ sheet အဖြစ် ဖွင့်သည်။ {{ui:Tools}} သည် toolbar ကို ဝှက်ပြီး {{ui:Move}} သည် ၎င်းကို အောက်ခြေသို့ ရွှေ့သည်။ See [Trackpad, touch နှင့် သေးငယ်သော screen များ](topic:trackpad-and-touch)။
