---
title: ယခုအထိ မတည်ဆောက်ရသေးသော အရာများ
summary: ဤ PartCraft build မလုပ်နိုင်သေးသော အရာအားလုံး၊ twist sweep မှ inch ပြသမှု၊ ဒီဇိုင်းပုံဆွဲ အတိုင်းအတာနှင့် sub-assembly များအထိ၊ ယနေ့ အစားထိုးလုပ်ရန်အတွက် အရာများနှင့်အတူ။
keywords: မရှိသေး, မပြီးသေး, ကန့်သတ်ချက်များ, limitations, roadmap, exact kernel, fillet, chamfer, shell, sweep, loft, step import, simulation, manufacture, twist sweep, loft end tangency, face fillet, equations, inches, drawing dimensions, sub-assemblies, cloud, tablet, phone
from: 97b10a29
---

PartCraft သည် အစောပိုင်း build ဖြစ်သည်။ ဤစာမျက်နှာသည် ၎င်း မလုပ်နိုင်သေးသော အရာများကို ဖော်ပြသည်၊ ထို့ကြောင့် သင် ရှာဖွေစရာ မလိုပါ၊ နှင့် ယနေ့ ဘာလုပ်ရမလဲဆိုသည်ကို ဖော်ပြသည်။ ဤအရာတွင် ရက်စွဲ မရှိပါ။

## Exact kernel လိုအပ်သည်

ဤဗားရှင်းသည် ပစ္စည်းအားလုံးကို mesh kernel ဖြင့် တည်ဆောက်သည် ([The mesh kernel](topic:solid-kernels) ကို ကြည့်ပါ)။ အောက်ပါအရာအားလုံးသည် exact geometry kernel လိုအပ်ပြီး ဤဗားရှင်းတွင် ယခုမရှိသေးပါ။ ဤ feature များဖြင့် သိမ်းထားသော ပစ္စည်းများသည် ဖွင့်လို့ရနေဆဲ ဖြစ်သည်: feature များသည် history တွင် ရှိနေပြီး မတည်ဆောက်ရသေးဟု အမှတ်အသားပြုထားပြီး သိမ်းသည့်အခါ ထိန်းထားသည်။

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| {{ui:Fillet}} နှင့် {{ui:Chamfer}} ကို အဝိုင်းအစွန်းများတွင်; အစွန်းတစ်လျှောက် ပြောင်းလဲသော ရေဒီယပ်ရှိ fillet များ; တွေ့ဆုံသည့်နေရာတွင် ညီညာစွာ ပေါင်းထားသော rounds (mesh kernel က ၎င်းတို့ကို mitre လုပ်သည်) | Fillet နှင့် Chamfer သည် ပြားသော မျက်နှာများကြား ဖြောင့်သော အစွန်းများတွင် အလုပ်လုပ်သည်; အခြား ထောင့်များကို extrude မလုပ်မီ sketch တွင် round လုပ်ပါ ({{ui:Fillet}} sketch တွင်၊ {{key:F}}) |
| {{ui:Shell}} သည် ကွေးသော မျက်နှာများကို ဖွင့်သည်; နံရံ အထူ မတူညီခြင်း | ပြားသော မျက်နှာများကို ဖွင့်ပါ; နံရံ ပိုထူရမည့်နေရာတွင် extrude ဖြင့် ပစ္စည်း ထပ်ထည့်ပါ |
| {{ui:Sweep}}၊ {{ui:Loft}}၊ {{ui:Draft}} ကို ကွေးသော မျက်နှာများပေါ်တွင်; မျက်နှာ၊ နောက်မျက်နှာ သို့မဟုတ် vertex အထိ extrude လုပ်ခြင်း; tapered extrude များ | Extrude သို့မဟုတ် revolve ကို လိုအပ်သည့်အဆင့်များဖြင့်; သင်တိုင်းတာထားသော အနက်အထိ extrude လုပ်ပါ |
| {{ui:Rib}}၊ {{ui:Base flange}}၊ {{ui:Edge flange}} နှင့် flat patterns | ပြားကို သို့မဟုတ် rib ၏ ပရိုဖိုင်ကို extrude လုပ်ပါ |
| မျက်နှာပြင်များ: {{ui:Form}} ကို ပစ္စည်းထဲသို့ အချောသတ်ခြင်း၊ {{ui:Patch}}၊ {{ui:Loft surface}}၊ {{ui:Gordon surface}}၊ {{ui:Stitch}}၊ {{ui:Thicken}}၊ {{ui:Offset surface}}၊ {{ui:Extend surface}}၊ {{ui:Trim surface}} | မရရှိနိုင်ပါ |
| Body များစွာ: {{ui:Combine}}၊ {{ui:Move body}}၊ {{ui:Scale body}}၊ {{ui:Path pattern}}၊ body အသစ်ဖန်တီးသော feature များ | Solid တစ်ခု; patterns နှင့် mirror က feature များကို ကူးသည် |
| Sketch များ၊ planes၊ axes နှင့် points များကို exact kernel သာ ရှာနိုင်သော မျက်နှာများပေါ် (fillet ဖြင့်ဖန်တီးထားသော မျက်နှာ၊ အပေါက်နံရံ၊ တင်သွင်းထားသော solid ၏ မျက်နှာ) | Base planes၊ reference planes နှင့် extrude နှင့် revolve များ၏ ပြားသော မျက်နှာများပေါ်တွင် sketch လုပ်ပါ |
| Generative design ရလဒ်ကို ပစ္စည်းအဖြစ် ဖွင့်ခြင်း သို့မဟုတ် ထိုသို့ ထည့်ခြင်း (တင်သွင်းထားသော solid ဖြစ်လာသည်) | ရလဒ်ကို STL သို့မဟုတ် STEP အဖြစ် ဒေါင်းလုဒ်လုပ်ပါ |
| ဖွင့်ထားသော STEP ဖိုင်၏ ကွေးမျက်နှာများကို exact မျက်နှာများအဖြစ် တည်း‌ဖြတ်ခြင်း; STEP ဖိုင်မှ spline၊ swept နှင့် revolved မျက်နှာများ၏ exact STEP၊ spline ဘေးများ၊ ပုံဖော်ထားသော threads၊ STL / OBJ / 3MF bodies နှင့် assemblies; အခြား part modeler များအတွက် STEP | {{ui:Open}} က STEP ကို တြိဂံများအဖြစ် ဖတ်ပြီး ဖိုင်၏ ပြားသော မျက်နှာများ၊ ဆလင်ဒါများ၊ ကွန်းများ၊ စက်ဝိုင်းများနှင့် torus များကို export အတွက် ထိန်းထားသည် ([STEP ဖိုင် ဖွင့်ခြင်း](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (တိကျသော solid)}} က analytic မျက်နှာတိုင်းကို တိကျစွာ ရေးပြီး ၎င်းတို့ကို facet များအဖြစ် ထိန်းထားသည် ([Export](topic:export-files#for-other-cad-programs-step)); အခြား part modeler အတွက် macro က ရေးနေဆဲ |
| Drawing views ရှိ အစစ်အမှန် arcs | Views နှင့် section views ကို facets မှ ဆွဲသည် |
| တိကျသော ထုထည်များ၊ ဧရိယာများနှင့် အကွာအဝေးများ | {{ui:Measure}} က facet solid ၏ ဂဏန်းများကို ပေးသည်၊ ကွေးသော အပိုင်းများတွင် အနည်းငယ် နိမ့်သည်; **Curves** ဆက်တင်ကို ပိုကောင်းအောင် ပြင်ပါက ပိုနီးသည် |

အောက်ပါ ဇယားအချို့သည် ဤ feature များထဲမှ တစ်ခုကို အခြားအရာကို ဖြေရှင်းသည့်နည်းအဖြစ် အကြံပြုသည်။ ထိုအကြံပြုချက်များသည် exact kernel ပြန်ရှိလာသည့်အခါမှ သက်ဆိုင်သည်။

## Features

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| မျက်နှာ fillet များ၊ အပြည့် round fillet များ၊ အစွန်းတစ်လျှောက် အချက်များတွင် သတ်မှတ်ထားသော radii ရှိ fillet များ | ကိန်းသေ သို့မဟုတ် ဖြောင့်ပြောင်းလဲသော variable {{ui:Fillet}}; feature fillet များစွာ |
| နံရံ အထူ မတူညီသော shell များ | တစ်ခု {{ui:Shell}} အထူ; နံရံ ပိုထူရမည့်နေရာတွင် extrude ဖြင့် ပစ္စည်း ထပ်ထည့်ပါ |
| Freeform (spline) မျက်နှာများပေါ်ရှိ draft | {{ui:Draft}} သည် ပြား၊ ဆလင်ဒါနှင့် ကွန်းမျက်နှာများပေါ်တွင် အလုပ်လုပ်သည် |
| Twisting sweep များ၊ thin-wall နှင့် surface sweep များ; Loft feature ပေါ်ရှိ end tangency; guide rail တစ်ခုတည်းဖြင့် loft; spline လမ်းကြောင်းများ | ပုံသေ orientation သို့မဟုတ် end scale ဖြင့် {{ui:Sweep}}; guide rail နှစ်ခု သို့မဟုတ် ပိုပါသော loft: [Sweep, loft နှင့် draft](topic:sweep-loft-draft) ကို ကြည့်ပါ |
| Arcs သို့မဟုတ် splines မှ rib များ; sketch သို့ စတုရန်းပုံ ကြီးထွားသော rib များ (အထက်မြင်ကွင်းမှ); rib ပေါ်ရှိ draft; sketch တစ်ခုမှ rib များစွာ | rib ၏ ကိုယ်ပိုင် plane ရှိ မျဉ်းကြိုးတစ်ခုမှ {{ui:Rib}}: [Ribs နှင့် gussets](topic:rib) ကို ကြည့်ပါ |
| ကွေးသော မျက်နှာတစ်ခုအထိ "Up to"၊ ကွေးသော မျက်နှာတွင် ရပ်သော "up to next" | ပြားသော မျက်နှာ သို့မဟုတ် reference plane အထိ Up to |
| Counterdrilled အပေါက်များ၊ inch နှင့် pipe threads၊ tapered threads၊ thread run-out များနှင့် chamfered thread စတင်မှုများ | အနက်ငယ်ငယ်ဖြင့် Counterbore; ISO metric နှင့် trapezoidal threads၊ cosmetic သို့မဟုတ် modelled: [ပုံဆွဲထားသော သို့မဟုတ် modelled threads](topic:threads) ကို ကြည့်ပါ |
| Thin-feature extrude များ | Profile ၏ နံရံနှစ်ခုလုံးကို ဆွဲပါ |
| Pattern ကူးယူချက်များကို တစ်ခုချင်း ကျော်ခြင်း၊ fill patterns | သီးခြား feature များကို သုံးပါ; ကွေးတစ်လျှောက် patterns: {{ui:Path pattern}} |
| Copying patterns၊ mirrors၊ fillets၊ chamfers၊ shells နှင့် တင်သွင်းထားသော solids | ၎င်းတို့ တည်ဆောက်ထားသော sketch သို့မဟုတ် feature ကို ကူးပါ သို့မဟုတ် pattern လုပ်ပါ |
| Form ၏ extraordinary points တွင် exact (G1) tangency; form ၏ patches များကို ပိုကြီးသော မျက်နှာများအဖြစ် ပေါင်းခြင်း | Form ၏ Level ကို မြှင့်ပါ: ချဉ်းကပ်ထားသော patches များ ပိုသေးသည်; [Form ဖြင့် ပုံသဏ္ဍာန်လွတ်လပ်သော](topic:form-surfaces) ကို ကြည့်ပါ |
| Feature တစ်ခုတည်းတွင် ဆက်စပ်မပါသော ပိတ်ထားသော အပိုင်းများစွာပါသော form; forms များကြား တံတားများ | Form feature တစ်ခုတွင် ပိတ်ထားသော အပိုင်းတစ်ခု; Join ဖြင့် ပေါင်းပါ |
| View ထဲတွင် surface bodies ကို ရွေးခြင်း (trim နှင့် patch points မှလွဲ၍); surface fillets; untrim; G2 patches; ကွေးသော အိမ်နီးချင်းများနှင့် tangent Gordon surfaces (ပြားများနှင့် ပြားသော မျက်နှာများနှင့် tangent ကို တည်ဆောက်ပြီး) | Feature ၏ panel တွင် အမည်ဖြင့် ရွေးပါ; အရင် thicken လုပ်ပြီး ထို့နောက် solid ကို fillet လုပ်ပါ |
| History ရှိ body စာရင်း; export များမှ ဖုံးထားသော bodies များကို ချန်ခြင်း | Part panel ရှိ body စာရင်းတွင် body များကို အမည်ပြောင်း၊ ဖုံးထား; body ကို ပြုလုပ်သော feature ကို ဖျက်ခြင်း သို့မဟုတ် ဖိနှိပ်ခြင်းဖြင့် ချန်ထားပါ |
| ဆလင်ဒါနှင့် ကွန်းများကို analytic ထားသော non-uniform scale; offset surfaces ၏ non-uniform scaling | {{ui:Scale body}} က ကွေးမျက်နှာများကို ပိတ်သော B-splines ဖြစ်စေသည် (0.0000004 mm အတွင်း); uniform scale က တိကျစွာ ထိန်းထားသည် |
| Surface bodies ကို ပေါင်းခြင်း; Minkowski sums | အရင် {{ui:Stitch}} သို့မဟုတ် {{ui:Thicken}}၊ ထို့နောက် {{ui:Combine}} |
| Tolerance analysis: ထောင့်များကို လှည့်သော stack-ups (2D နှင့် 3D vector loops)၊ geometry မှ တွက်ထားသော sensitivities၊ အခြား distributions ဖြင့် Monte Carlo၊ sketch dimensions ပေါ်ရှိ size tolerances၊ material condition မှ bonus tolerance | Assembly ထဲရှိ {{ui:Stack-up}}: တစ်ဘက်လမ်း၊ worst case နှင့် RSS၊ tolerances ကို ရိုက်ထည့်၊ title block ၏ general tolerance သို့မဟုတ် GD&T frames မှ: [Tolerance stack-ups](topic:tolerance-stackup) ကို ကြည့်ပါ |
| Nesting: ဖြတ်ခြင်းအစဉ်နှင့် lead-ins၊ ဘေးချင်းဆက်သော အစွန်းများကို တစ်ကြိမ်ဖြတ်ခြင်း၊ အတူတကွ ထားရမည့် ပစ္စည်းများ; roll ၏ remnants၊ ပရောဂျက်များကြား ဝေမျှထားသော ကုန်ကြမ်း | spacing၊ margins၊ turns နှင့် grain ဖြင့် {{ui:အပြား အစိတ်အပိုင်းများကို စာရွက်များပေါ် စီစဉ်ရန်…}}: [အပြား အစိတ်အပိုင်းများကို စာရွက်ပေါ် စီစဉ်ခြင်း](topic:nest-flat-parts) ကို ကြည့်ပါ; ကျန်ရှိသော ပြားများကို သိမ်းပြီး အရင်သုံးသည်: [အကြွင်းအကျန် သိမ်းခြင်းနှင့် ပြန်သုံးခြင်း](topic:nest-offcuts) ကို ကြည့်ပါ; ဖြတ်ခြင်းကို သင့်ဖြတ်စက်၏ ကိုယ်ပိုင် software တွင် စီစဉ်ပါ |
| Sheet metal: hems၊ jogs၊ miter နှင့် contour flanges; ကွေးသော အစွန်းများ သို့မဟုတ် ကွေးနေသော base flange ၏ မျက်နှာများပေါ်ရှိ flanges; sketched bends; corner closures; forming tools; solid ကို sheet metal သို့ ပြောင်းခြင်း; ဖြတ်ထားသော ကွေး base flange ၏ flat; bend tables | {{ui:Base flange}} (ပြား သို့မဟုတ် ကွေးထားသော ပရိုဖိုင်)၊ ပြား၏ ဖြောင့်သော အစွန်းများပေါ်ရှိ {{ui:Edge flange}} နှင့် bend reliefs၊ K-factor ဖြင့် flat pattern: [Sheet metal](topic:sheet-metal) ကို ကြည့်ပါ |
| Assemblies ပေါ်ရှိ draft analysis; parting line ရှာခြင်း; wall-thickness analysis | Design ရှိ ပစ္စည်းပေါ်တွင် {{ui:Draft analysis}}: [Moulding နှင့် casting အတွက် draft စစ်ဆေးခြင်း](topic:draft-analysis); assembly ၏ ပစ္စည်းတစ်ခုစီကို စစ်ဆေးရန် ဖွင့်ပါ |

## Sketches

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| Ellipses၊ tangent arcs၊ conics၊ သတ်မှတ်ထားသော degree သို့မဟုတ် weights ရှိ splines (NURBS) | Splines (cubic)၊ arcs နှင့် circles ကို Tangent relations ဖြင့် |
| Spline ပေါ်ရှိ အမှတ် (relation)၊ curvature (G2) relations | Spline ၏ ကိုယ်ပိုင် အမှတ်ကို ဖြတ်သန်းရမည့်နေရာတွင် ထားပါ |
| ပြောင်းလဲမှု နောက်ပိုင်းကို လိုက်သော spline ၏ offset မိတ္တူများ; spline ထောင့်ထက်ထက်ရှိ chains ၏ offsets | ပြောင်းလဲပြီးနောက် ထပ် offset လုပ်ပါ; ထောင့်ကို အရင် round လုပ်ပါ |
| မူရင်းနှင့် ဆက်စပ်နေသော pattern မိတ္တူများ; ကွေးတစ်လျှောက် patterns | ပြောင်းလဲပြီးနောက် ထပ် pattern လုပ်ပါ |
| Free-form သို့မဟုတ် tilted စက်ဝိုင်း အစွန်းများကို project လုပ်ခြင်း၊ ပစ္စည်းကို လိုက်သော projected geometry | ဖြောင့်ပြီး ညီမျှသော စက်ဝိုင်း အစွန်းများကို project လုပ်ပြီး ထို့နောက် dimension ပေးပါ |
| Driven (reference) dimensions | Panel သို့မဟုတ် part facts မှ အရွယ်အစားများကို ဖတ်ပါ |
| Collinear relations | 0 အကွာအဝေးဖြင့် Parallel |
| အခြား program သို့ ကူးထည့်ခြင်း (system clipboard) | DXF၊ STEP၊ STL သို့မဟုတ် 3MF ကို export လုပ်ပါ |
| Arcs၊ relative သို့မဟုတ် polar coordinates ရိုက်ထည့်ခြင်း | မျဉ်းများနှင့် စက်ဝိုင်းများကို ရိုက်ထည့်ပါ; arcs ကို Arc tool ဖြင့် ဆွဲပါ |
| Pointer မသုံးဘဲ geometry ရွေးခြင်း | Click သို့မဟုတ် tap လိုအပ်သည် |

## Parameters နှင့် units

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| ပစ္စည်းများ ပြောင်းသော configurations; feature များ ပိတ်သော CSV design table | Configurations က parameters ကို သတ်မှတ်ပြီး features များကို ဖွင့်/ပိတ်သည်: [Configurations နှင့် design tables](topic:design-tables) ကို ကြည့်ပါ; `partcraft variants` က သိမ်းထားသော configurations များကို အမည်ဖြင့် တည်ဆောက်သည်၊ ပိတ်ထားသော features များပါ: [Configurations မှ variant pack ပြုလုပ်ခြင်း](topic:variant-pack) ကို ကြည့်ပါ |
| အသစ်ဆုံး feature များ၏ ကိုယ်ပိုင် panel များ (plane၊ sweep၊ draft နှင့် ဆင်တူသော) ရှိ နံပါတ်များပေါ်ရှိ equations | script တွင် ရေးပါ သို့မဟုတ် `partcraft set` ဖြင့် ([Scripts နှင့် command line](topic:scripts-and-cli)) |
| ပစ္စည်းကို inch ဖြင့် ပြခြင်း | အရွယ်အစားများကို မီလီမီတာဖြင့် ပြသည်; နံပါတ်အကွက်ထဲ `2in` ဟု ရိုက်ပါက 50.8 ဖြစ်လာသည် |

## ဖိုင်များ

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| တင်သွင်းထားသော STEP solid ၏ ကိုယ်ပိုင် features ကို တည်းဖြတ်ခြင်း (history မပါဘဲ ရောက်လာသည်) | သင်ကိုယ်တိုင် feature များဖြင့် ပစ္စည်း ထည့်ခြင်း သို့မဟုတ် ဖြတ်ခြင်း |
| STEP မှ အရောင်များ၊ အမည်များ၊ assembly ဖွဲ့စည်းပုံနှင့် PMI ကို ဖတ်ခြင်း | မရရှိနိုင်ပါ |
| glTF၊ OBJ၊ IGES၊ Parasolid export; 3D ပစ္စည်း၏ DWG (variant pack သာ DWG ရေးသည်: drawing sheet) | Mesh များအတွက် STL သို့မဟုတ် 3MF; solid များအတွက် STEP; 2D အတွက် DXF |
| IGES၊ DXF သို့မဟုတ် အခြား program များ၏ ကိုယ်ပိုင်ဖိုင်များကို ဖွင့်ခြင်း (`.3dm` ဖိုင်များသည် body တစ်ခုအဖြစ် ဖွင့်သည်: [.3dm model ကို solid body အဖြစ် ဖွင့်ခြင်း](topic:open-3dm-files)) | STEP ကို မေးပါ သို့မဟုတ် ပိတ်ထားသော STL၊ OBJ သို့မဟုတ် 3MF mesh: [STL၊ OBJ သို့မဟုတ် 3MF ဖွင့်ခြင်း](topic:open-meshes) |
| Exported STEP ရှိ assembly ဖွဲ့စည်းပုံ (အပိုင်းအမည်များပါသော သစ်ပင်) | Assembly STEP သည် နေရာချထားသော solids များ၏ compound တစ်ခု |
| Browser ၏ download မပါဘဲ သင်ရွေးသော folder သို့ သိမ်းခြင်း | Browser ၏ download settings တွင် "ask where to save" ကို ဖွင့်ပါ |

## ပုံဆွဲများ

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| အရွယ်အစား သုံးခုထက်ပိုသော dimensions (အပေါက်အရွယ်များ၊ တည်နေရာများ၊ အရွယ်အစားများပေါ်ရှိ tolerances) | PDF ကို မှတ်သားပါ၊ သို့မဟုတ် DXF export လုပ်ပြီး 2D CAD program တွင် dimension ပေးပါ |
| Section တစ်ခုထက်ပို သို့မဟုတ် detail တစ်ခုထက်ပို; aligned၊ broken-out နှင့် auxiliary views | ပုံဆွဲတစ်ခုလျှင် section တစ်ခုနှင့် detail တစ်ခု |
| စာရွက်ပေါ်ရှိ free text၊ မှတ်ချက်များနှင့် ဇယားများ (title နှင့် revision blocks မှလွဲ၍) | Finish မှတ်ချက်၊ သို့မဟုတ် PDF ပေါ်တွင် ထည့်သော စာသား |
| First-angle projection၊ ရွေ့လျားသော views၊ portrait စာရွက်များ | Third angle၊ အလိုအလျောက် layout၊ landscape စာရွက် A4–A0 နှင့် ANSI A–E |
| Live section view: အမျိုးမျိုးသော planes သို့မဟုတ် section box တစ်ပြိုင်နက်၊ ဖြတ်ထားသော အပိုင်းပတ်လည် outline၊ ဖိုင်တွင် section သိမ်းခြင်း | {{ui:Views}} › {{ui:Section view}} မှ plane တစ်ခုချင်း; [Section view ဖြင့် အတွင်းကို ကြည့်ခြင်း](topic:section-view) ကို ကြည့်ပါ |
| Assembly drawings တွင် ပိုသော views၊ dimensions သို့မဟုတ် ရွှေ့နိုင်သော balloons | တစ်ခုတည်း isometric (သို့မဟုတ် exploded) view နှင့် အလိုအလျောက် balloons နှင့် parts list |
| GD&T နှင့် finish symbols ကို ကူးခြင်းနှင့် ကူးထည့်ခြင်း | တစ်ခုချင်းစီကို {{ui:Datum}}၊ {{ui:Frame}} သို့မဟုတ် {{ui:Finish}} ဖြင့် နေရာချပါ |
| Manuals: Illustrate ၏ {{ui:From another file…}} ရှိ STEP ဖိုင်များ၊ ModelCraft သို့မဟုတ် BimCraft မှ တိုက်ရိုက်ပို့ထားသော မော်ဒယ်၊ path tracer ၏ အရည်အသွေးရှိ ပုံများ၊ PDF အတွင်း interactive 3D | Design တွင် STEP ကိုဖွင့်ပြီး manual ကို {{ui:From the open part}} ဖြင့် စတင်ပါ; မော်ဒယ်ကို glTF (.glb) အဖြစ် သိမ်းပါ; 3D view ၏ PNG ပုံများ; interactive 3D ဖိုင်: [Illustrate တွင် manual စတင်ခြင်း](topic:illustrate) ကို ကြည့်ပါ |

## Assemblies

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| Gear၊ rack၊ cam နှင့် screw joints; cone သို့ ကန့်သတ်ထားသော ball joint; ကွေးသော မျက်နှာများ သို့မဟုတ် အမှတ်များကြား joints | Flat မျက်နှာများပေါ်ရှိ rigid၊ revolute၊ slider၊ cylindrical၊ planar၊ ball နှင့် pin-in-slot joints၊ တန်ဖိုးတစ်ခုစီ၏ ကိုယ်ပိုင်ကန့်သတ်ချက်များဖြင့်: [Assembly တည်ဆောက်ခြင်း](topic:build-assembly) ကို ကြည့်ပါ |
| Joints က နေရာချသော ပစ္စည်းများကို လှည့်သော exploded steps နှင့် ဆွဲခြင်း | ဖြောင့်သော explode steps; ပစ္စည်းကို လက်ဖြင့် ရွှေ့ရန် joint ကို ဖယ်ရှားပါ |
| Sub-assemblies | ပစ္စည်းအဆင့် တစ်ခုတည်းသာ |
| Gears၊ cams၊ contact | မရရှိနိုင်ပါ |

## Manufacture

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| 3D adaptive clearing နှင့် 3D တွင် offset roughing; waterline၊ pencil၊ radial နှင့် spiral အချောသတ်; arcs အဖြစ် ရေးသော adaptive pass များ | ဖြောင့်သော အတန်းများဖြင့် 3D roughing နှင့် rest machining: [3D ကြမ်းဖြတ်ခြင်းနှင့် rest machining](topic:rough-3d); Parallel နှင့် Scallop အချောသတ်: [3D အချောသတ်](topic:finish-3d); 2.5-axis face၊ pocket၊ 2D adaptive၊ contour၊ drill နှင့် chamfer: [လမ်းကြောင်းနှင့် G-code ပြုလုပ်ခြင်း](topic:manufacture) |
| Swarf cutting၊ flow-line နှင့် multi-axis roughing လမ်းကြောင်းများ၊ tilted work plane codes (G68.2)၊ holder နှင့် စက်၏ collision စစ်ဆေးခြင်း; 5-axis နှင့် rotary ဖြတ်မှု၏ simulation | လုပ်ဆောင်ချက်တိုင်းအတွက် tilted ကိရိယာ၊ ball end mill ဖြင့် 5-axis အချောသတ်နှင့် 4th-axis rotary အချောသတ်: [4- နှင့် 5-axis machining](topic:multi-axis) |
| Lathe ပေါ်ရှိ boring နှင့် အတွင်း threads၊ G71/G76 cycles၊ turning လမ်းကြောင်းများရှိ arcs၊ live tools၊ sub-spindle | အပြင်ဘက် turning: face၊ rough၊ finish၊ groove၊ part off၊ thread၊ drill on centre: [Lathe ပေါ်ရှိ turning](topic:turning) |
| Angle သို့မဟုတ် corner ကို probe လုပ်ခြင်း၊ tool setter၊ size ကို tolerance နှင့် တိုင်းတာခြင်း | Work offset သတ်မှတ်ရန် မျက်နှာ၊ ဘေး၊ အပေါက် သို့မဟုတ် boss ကို probe လုပ်ခြင်း: [Probing](topic:probing) |
| Holder နှင့် shank collision စစ်ဆေးခြင်း | Flute-length သတိပေးချက်များကို ကြည့်ပြီး သင့်ထိန်းချုပ်ကိရိယာ၏ simulator တွင် စစ်ဆေးပါ |
| Post ရှိ tool-life နှင့် subprogram cycles; အခြား program များ၏ post ဖိုင်များကို တင်ခြင်း | PartCraft ၏ ကိုယ်ပိုင် format ဖြင့် post ရေးပါ သို့မဟုတ် ပြောင်းပါ: [ပြင်ဆင်နိုင်သော post processors](topic:post-processors) ကို ကြည့်ပါ |
| Inch G-code (G20) | မီလီမီတာ (G21) သာ |

## Simulation နှင့် generative design

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| Nonlinear လေ့လာမှုများ: yielding၊ large deflections၊ ပစ္စည်းများကြား contact၊ fatigue | Linear static နှင့် natural frequencies: [Stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation); safety factor ကို 1 ထက် အများကြီး ထားပါ |
| Nonlinear buckling (imperfections၊ post-buckling၊ snap-through) | Margin ကြီးမားသော linear buckling load factors: [Heat၊ thermal stress နှင့် buckling](topic:thermal-and-buckling) |
| မျက်နှာများကြား radiation (view factors)၊ contact resistance၊ အပူချိန်အပေါ် မူတည်သော ပစ္စည်းများ၊ thermal stress ရှိ inertia (thermal shock waves) | ပတ်ဝန်းကျင်သို့ radiation၊ အချိန်အလိုက် steady သို့မဟုတ် quasi-static thermal stress၊ ကိန်းသေ ဂုဏ်သတ္တိများ: [Heat၊ thermal stress နှင့် buckling](topic:thermal-and-buckling) |
| Transient heat နှင့် thermal load ပါ လေ့လာမှုများအတွက် အလိုအလျောက် refinement; error သေးသောနေရာတွင် mesh ကို ပိုကြမ်းအောင်လုပ်ခြင်း; ဒေသဆိုင်ရာ quantity ပေါ်ရှိ ပစ်မှတ် (အမှတ်တစ်ခုရှိ peak stress) | Static၊ buckling၊ natural-frequency နှင့် steady thermal လေ့လာမှုများအတွက် **Refine automatically**၊ အစိတ်အပိုင်းတစ်ခုလုံးပေါ် error ပေါ်တွင်: [Stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation) ကို ကြည့်ပါ; မဟုတ်ပါက element size ကို လျှော့ပါ |
| Bearing နှင့် bolt loads၊ remote forces၊ moments၊ springs၊ prescribed displacements | မျက်နှာများပေါ် force နှင့် pressure၊ gravity; ပိတ်ထားသော နှင့် ပွတ်တိုက်မှု မရှိသော မျက်နှာများ |
| Assemblies ၏ simulation; ဦးတည်ချက်အလိုက် ကွဲပြားသော ပစ္စည်းများ (print layers၊ composites) | Part တစ်ခု၊ isotropic ပစ္စည်းတစ်ခု |
| Tetrahedral လေ့လာမှုများအတွက် solver threads အများအပြား၊ heat transfer နှင့် generative design; cross-origin isolated မဟုတ်သော စာမျက်နှာတွင် threads | Voxel လေ့လာမှုများ၊ buckling၊ အချိန်အလိုက် stress နှင့် laminar flow သည် စာမျက်နှာ ခွင့်ပြုသည့်နေရာတွင် threads ကို သုံးသည်: [PartCraft settings](topic:settings) ကို ကြည့်ပါ |
| Turbulent flow ကို design accuracy ဖြင့် (Spalart–Allmaras မော်ဒယ်ကို experimental အဖြစ် ထည့်ထားပြီး pipe friction 30 မှ 34 % မြင့်၊ backward-step reattachment 21 မှ 39 % တို; စီစဉ်ထား: နံရံအနီး ပိုသေးသော cells)၊ flow ထဲ အပူ၊ unsteady (time-accurate) flow၊ free surfaces၊ non-Newtonian fluids၊ လည်ပတ်သော ပစ္စည်းများ | Laminar၊ steady၊ isothermal Newtonian fluid ၏ flow၊ သို့မဟုတ် qualitative patterns အတွက် experimental turbulent မော်ဒယ်: [Fluid flow simulate](topic:flow-simulation) ကို ကြည့်ပါ; Reynolds number laminar ကျော်သွားလျှင် panel က သတိပေးသည် |
| Generative design ရှိ stress ကန့်သတ်ချက်များနှင့် manufacturing rules (overhangs၊ milling directions); ပုံသဏ္ဍာန်တစ်ခုတွင် ပစ္စည်းများစွာ | ထုထည်အတွက် အတောင့်ဆုံး ပုံသဏ္ဍာန်; ရလဒ်ကို Simulation တွင် စစ်ဆေးပါ: [Loads မှ ပုံသဏ္ဍာန် ကြီးထွားခြင်း](topic:generative-design) ကို ကြည့်ပါ |
| ရလဒ်ကို တည်းဖြတ်နိုင်သော (ချောမွေ့၊ parametric) solid အဖြစ် | STL၊ faceted STEP သို့မဟုတ် ရလဒ်ကို တင်သွင်းထားသော faceted solid အဖြစ် ထားသော ပစ္စည်း |
| လျှပ်စစ်စက် ဒီဇိုင်း: stator အတွင်း လည်ပတ်သော rotor၊ angle နှင့် torque၊ ရေဝင်ပြည့်သော သံ၊ knee ကျော်လျှင် အား ဆုံးရှုံးသော သံလိုက်များ၊ eddy currents နှင့် သံနှင့် ကြေးနီဆုံးရှုံးမှုများ; 3-D သို့မဟုတ် ကွေးသော meshes ပေါ်ရှိ သံလိုက်စက်ကွင်းများ | Grid ပေါ် linear 2-D magnetostatics ကို analysis library တွင်: coils၊ သံ၊ ၎င်းတို့၏ recoil line ပေါ်ရှိ permanent magnets၊ gaps၊ inductance နှင့် pull: [2-D သံလိုက်စက်ကွင်းများ](topic:magnetic-fields-2d) ကို ကြည့်ပါ |

## Scripts

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| Script editor ရှိ hover help၊ breakpoints နှင့် stepping | Find၊ fold နှင့် complete ရှိပြီး ([Scripts ရေးပြီး run ခြင်း](topic:craftscript) ကို ကြည့်ပါ); ကျန်သည်များအတွက် သင့်ကိုယ်ပိုင် editor: Script group ရှိ {{ui:Save}} နှင့် {{ui:Open}} က scripts များကို ထည့်/ထုတ်ပေးသည်; built-in functions ကို [CraftScript ဘာသာစကား](topic:craftscript-language) တွင် စာရင်းပြုထားသည် |
| Breakpoints နှင့် script တစ်လျှောက် stepping | လမ်းတလျှောက် `disp` နှင့် `fprintf`; {{key:Mod+Enter}} က ရွေးထားသော လိုင်းအနည်းငယ်ကို တစ်ကြိမ် run သည် |
| Script ပြသော fields နှင့် plots ကို Design workspace တွင် ဆွဲခြင်း; script များက part ၏ parameters ကို ပြောင်းခြင်း | Script workspace တွင် ပြသည်; scripts များက `param` ဖြင့် parameters ကို ဖတ်သည် ([Scripts ရေးပြီး run ခြင်း](topic:craftscript)); {{ui:Parameters}} tab တွင် ပြောင်းပါ |
| Plots နှင့် ယှဉ်၍ ပုံများနှင့် ဇယားများ; သိမ်းမီ plot ကို တည်းဖြတ်ခြင်း (zoom၊ axis limits) | Side by side က plots များကို ပြသည်; plot ကို PNG၊ SVG သို့မဟုတ် CSV အဖြစ် သိမ်းပြီး အခြားနေရာတွင် ပြီးအောင် လုပ်ပါ |
| numpy နှင့် အခြား Python packages; Python offline; editor တွင် Python ကို fold လုပ်ခြင်း; Pascal Script | Python ၏ standard library၊ CraftScript နှင့် Lua: [Python ဖြင့် scripts](topic:craftscript-python) ကို ကြည့်ပါ |
| Built-in functions သို့ Lua functions ကို ပေးခြင်း; script run နေစဉ် တည်ဆောက်သော အမည်ဖြင့် library function ကို Lua မှ ခေါ်ခြင်း | Library function ၏ အမည်ကို script တွင် ရေးပါ (`cs.static_tet(…)`), သို့မဟုတ် CraftScript script မှ ခေါ်ပါ |

## အက်ပ်

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| Cloud သိမ်းခြင်း၊ မျှဝေခြင်းနှင့် version history | ယခုမရရှိသေးပါ။ ဖိုင်များကို သင့်ကွန်ပျူတာတွင် သိမ်းပြီး versions ကို အမည်ဖြင့် ထိန်းပါ |
| iPad နှင့် iPhone တွင် installed app အဖြစ် PartCraft | စက်၏ browser တွင် PartCraft ကို သုံးပါ; Android နှင့် desktop တွင် CadCraft Studio (getcadcraft.com/download) တွင်လည်း run နိုင်သည် |
| Context (right-click) menus | Toolbar နှင့် right panel |
| Fresh start မှ အပြည့်အဝ offline အလုပ်လုပ်ခြင်း | အက်ပ်ကို offline အသုံးပြုရန် သိမ်းထားမှသာ: [Offline အလုပ်လုပ်ခြင်း](common:offline) ကို ကြည့်ပါ |

သင်အလွန်လိုအပ်သည့်အရာကို ဆိုက်၏ support စာမျက်နှာမှတစ်ဆင့် အစီရင်ခံပါ: ၎င်းက နောက်တစ်ဆင့်ကို ပုံဖော်သည်။

## Engineer (generators နှင့် fields)

| ယခုအထိ မတည်ဆောက်ရသေးသော အရာ | ယနေ့ အစားထိုးရန် |
|---|---|
| ထုတ်လုပ်ထားသော heat exchanger ပေါ်ရှိ headers၊ ports နှင့် fittings; ပစ္စည်းခိုင်ခံမှုအတွက် အပူချိန်ကွေး; manifold ရှိ tee ဆုံးရှုံးမှုများ | Generators များက core နှင့် tubes ကို တည်ဆောက်သည်; Design တွင် fittings ထည့်ပါ; ပစ္စည်း၏ အခန်းအပူချိန် တန်ဖိုးများကို safety factor နှင့် သုံးပါ |
| Add-on directory မှ generators များကို တစ်ချက်နှိပ်ဖြင့် ထည့်ခြင်း | Engineer workspace ရှိ {{ui:Open}} က ဖိုင်မှ generator တစ်ခု ထည့်သည် |
| Generator ၏ voxel size ထက် ပိုသေးသော field ဖိုင်; `.vdb` ဖိုင်များကို ဖတ်ခြင်း | Script မှ ပိုသေးသော field ကို သိမ်းပါ; `.vdb` ကို ရေးသည်၊ ဖတ်ခြင်း မရှိ |
| ဖိအားဖိထားသော ဗူးယာဉ် code တွက်ချက်မှုများ | စာအုပ်ပါ thin-wall နှင့် thick-wall ပုံသေနည်းများ၊ သင်ရွေးသော safety factor ဖြင့်; code margin မဟုတ် |
| အခြား apps အတွက် generators | ဤဗားရှင်းတွင် PartCraft သာ |
