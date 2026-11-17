---
title: ယနေ့ မတည်ဆောက်ရသေးသည်များ
summary: ဤ PartCraft build မလုပ်နိုင်သေးသည်အားလုံး- twist sweep မှ လက်မ ပြသမှု၊ ပုံဆွဲ ဒိုင်မန်ရှင်းနှင့် sub-assembly များအထိ၊ ယခု အစားထိုးလုပ်နိုင်သည်များနှင့်အတူ။
keywords: မရှိသေး, မပြီးသေး, ကန့်သတ်ချက်များ, limits, limitations, roadmap, exact kernel, fillet, chamfer, shell, sweep, loft, step import, simulation, manufacture, twist sweep, loft end tangency, face fillet, equations, inches, drawing dimensions, sub-assemblies, cloud, tablet, phone
from: 9b868162
---

PartCraft သည် အစောပိုင်း build ဖြစ်သည်။ ဤစာမျက်နှာသည် ဤ build မလုပ်နိုင်သေးသည်များကို ဖော်ပြသည်၊ ထို့ကြောင့် ရှာမနေရန်၊ နှင့် ယနေ့ ဘာလုပ်ရမည်ကို ဖော်ပြသည်။ ဤတွင် ရက်စွဲမရှိပါ။

## တိကျသော kernel လိုအပ်သည်

ဤဗားရှင်းသည် အစိတ်အပိုင်းအားလုံးကို mesh kernel ဖြင့် တည်ဆောက်သည် (ကြည့်ရန် [The mesh kernel](topic:solid-kernels))။ အောက်ပါအရာအားလုံးသည် တိကျသော geometry kernel လိုအပ်ပြီး ဤဗားရှင်းတွင် ယခုမရှိသေးပါ။ ဤ feature များဖြင့် သိမ်းထားသော အစိတ်အပိုင်းများသည် ဆက်ဖွင့်နိုင်သည်- feature များသည် history တွင် ရှိနေပြီး မတည်ဆောက်ရသေးဟု အမှတ်အသားပြုထားပြီး သိမ်းသည့်အခါ ထိန်းသိမ်းထားသည်။

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| {{ui:Fillet}} နှင့် {{ui:Chamfer}} ကို စက်ဝိုင်းအစွန်းများတွင်; အစွန်းတစ်လျှောက် အချင်းဝက် ပြောင်းလဲသော fillet များ; ထိတွေ့သည့်နေရာတွင် ညင်သာစွာ ပေါင်းသော rounds (mesh kernel က ထောင့်ဖြတ်ပေးသည်) | Fillet နှင့် Chamfer ကို ပြား မျက်နှာများကြား တည့်သော အစွန်းများတွင် အလုပ်လုပ်သည်; အခြား ထောင့်များကို extrude မတိုင်မီ ပုံဆွဲချက်တွင် အပြင်ဘက်ကွေး ပြုပါ ({{ui:Fillet}} ပုံဆွဲချက်တွင်၊ {{key:F}}) |
| {{ui:Shell}} သည် ကွေးသော မျက်နှာများကို ဖွင့်ခြင်း; အထူမတူညီသော နံရံများ | ပြား မျက်နှာများကို ဖွင့်ပါ; နံရံ ထူရမည့်နေရာတွင် extrude ဖြင့် ပစ္စည်းထပ်ထည့်ပါ |
| ကွေးသော မျက်နှာများပေါ် {{ui:Sweep}}၊ {{ui:Loft}}၊ {{ui:Draft}}; မျက်နှာ၊ နောက်မျက်နှာ သို့မဟုတ် vertex အထိ extrude; ကျဉ်းလာသော extrude များ | Extrude သို့မဟုတ် revolve လုပ်ပါ၊ လိုအပ်ရင် အဆင့်ဆင့်; သင် တိုင်းထားသော အနက်အထိ extrude လုပ်ပါ |
| {{ui:Rib}}၊ {{ui:Base flange}}၊ {{ui:Edge flange}} နှင့် အပြားပုံစံများ | ပြားကို သို့မဟုတ် rib ၏ ပရိုဖိုင်ကို extrude လုပ်ပါ |
| မျက်နှာပြင်များ- {{ui:Form}} ကို အစိတ်အပိုင်းထဲ ပြီးအောင်လုပ်ခြင်း၊ {{ui:Patch}}၊ {{ui:Loft surface}}၊ {{ui:Gordon surface}}၊ {{ui:Stitch}}၊ {{ui:Thicken}}၊ {{ui:Offset surface}}၊ {{ui:Extend surface}}၊ {{ui:Trim surface}} | မရနိုင်ပါ |
| အစိတ်အပိုင်းများစွာ- {{ui:Combine}}၊ {{ui:Move body}}၊ {{ui:Scale body}}၊ {{ui:Path pattern}}၊ body အသစ်ဖန်တီးသော feature များ | solid တစ်ခု; pattern နှင့် mirror မိတ္တူ feature များ |
| တိကျသော kernel ကသာ ရှာနိုင်သော မျက်နှာများပေါ် ပုံဆွဲချက်၊ ပလိန်း၊ ဝင်ရိုးနှင့် အမှတ်များ (fillet ဖြင့်ဖန်တီးသော မျက်နှာ၊ အပေါက်နံရံ၊ တင်သွင်းထားသော solid ၏ မျက်နှာ) | အခြေခံပလိန်း၊ ရည်ညွှန်းပလိန်းနှင့် extrude နှင့် revolve ၏ ပြား မျက်နှာများပေါ် ပုံဆွဲပါ |
| generative design ရလဒ်ကို အစိတ်အပိုင်းအဖြစ် ဖွင့်ခြင်း သို့မဟုတ် ထိုသို့ ထည့်ခြင်း (တင်သွင်းထားသော solid ဖြစ်လာသည်) | ရလဒ်ကို STL သို့မဟုတ် STEP အဖြစ် ဒေါင်းလုဒ်ဆွဲပါ |
| ဖွင့်ထားသော STEP ဖိုင်၏ ကွေးမျက်နှာများကို တိကျသော မျက်နှာပြင်အဖြစ် တည်းဖြတ်ခြင်း; STEP ဖိုင်မှ spline၊ swept နှင့် revolved မျက်နှာများ၏ တိကျသော STEP၊ spline ဘေးများ၊ ပုံစံထုတ်ထားသော ချည်များ၊ STL / OBJ / 3MF ခန္ဒာများနှင့် assembly များ၊ အခြား part modeler များအတွက် STEP | {{ui:ဖွင့်ရန်}} သည် STEP ကို တြိဂံများအဖြစ် ဖတ်ပြီး ဖိုင်၏ ပြား မျက်နှာများ၊ ဘီလံများ၊ ကုန်းများ၊ စက်ဝိုင်းများနှင့် တိုရပ်စ်များကို export အတွက် ထိန်းသည် ([Open a STEP file](topic:import-step)); {{ui:ထုတ်ရန်}} › {{ui:STEP AP242 (တိကျသော solid)}} သည် analytic မျက်နှာတိုင်းကို တိကျစွာ ရေးပြီး ထိုအရာများကို facet အဖြစ် ထိန်းသည် ([Export](topic:export-files#for-other-cad-programs-step)); အခြား part modeler အတွက် macro သည် ဆက်ရေးနေဆဲ |
| ပုံဆွဲချက်ဝင်းဒိုးများရှိ မျဉ်းကွေးအမှန် | မြင်ကွင်းများနှင့် section view များကို facet များမှ ဆွဲသည် |
| တိကျသော ထုထည်၊ ဧရိယာနှင့် အကွာအဝေးများ | {{ui:တိုင်းတာ}} သည် facet solid ၏ ကိန်းဂဏန်းများကို ပေးသည်၊ ပတ်လည်ပုံများတွင် အနည်းငယ် နိမ့်သည်; **Curves** ဆက်တင်ကို ပိုသေးစေလျှင် ပိုနီးစပ်လာသည် |

ထို့အပြင် အောက်ပါ table များက တစ်ခုခုကို ဆောင်ရွက်ရန် နည်းလမ်းအဖြစ် အကြံပြုသော အတန်းများရှိသည်။ ထိုအကြံပြုချက်များသည် တိကျသော kernel ပြန်ရောက်လာသည့်အခါမှသာ အကျုံးဝင်သည်။

## Features

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| မျက်နှာ fillet များ၊ အပြည့် round fillet များ၊ အစွန်းတစ်လျှောက် အမှတ်များတွင် အချင်းဝက်သတ်မှတ်ထားသော fillet များ | ကိန်းသေ သို့မဟုတ် မျဉ်းဖြောင့် ပြောင်းလဲနိုင်သော {{ui:Fillet}}; fillet feature အများအပြား |
| နံရံအထူ မတူသော Shell များ | {{ui:Shell}} အထူတစ်ခုတည်း; နံရံ ထူရမည့်နေရာတွင် extrude ဖြင့် ပစ္စည်းထပ်ထည့်ပါ |
| ပုံစံလွတ် (spline) မျက်နှာများပေါ် Draft | {{ui:Draft}} သည် ပြား၊ ဝိုင်းကျင်း နှင့် ကွန်ကျယ် မျက်နှာများပေါ် အလုပ်လုပ်သည် |
| လှည့်သော sweep များ၊ နံရံပါးသော နှင့် မျက်နှာ sweep များ; {{ui:Loft}} feature ပေါ် အဆုံး tangency; guide rail တစ်ခုတည်းဖြင့် loft; spline လမ်းကြောင်းများ | ပုံသေ ဦးတည်ချက် သို့မဟုတ် အဆုံး scale ဖြင့် {{ui:Sweep}}; guide rail နှစ်ခု သို့မဟုတ် ပိုသော loft: ကြည့်ရန် [Sweep, loft and draft](topic:sweep-loft-draft) |
| arc သို့မဟုတ် spline မှ rib များ; ပုံဆွဲချက်နှင့် အလျားလိုက် ထောင့်ဖြင့် ကွက်ညီ rib များ (top view မှ); rib ပေါ် draft; ပုံဆွဲချက်တစ်ခုမှ rib များစွာ | rib ၏ ကိုယ်ပိုင်ပလိန်းတွင် မျဉ်းများ၏ ချိတ်ဆက်မှုတစ်ခုမှ {{ui:Rib}}: ကြည့်ရန် [Ribs and gussets](topic:rib) |
| ကွေးသော မျက်နှာအထိ "Up to"၊ ကွေးမျက်နှာတွင် ရပ်သော "up to next" | ပြား မျက်နှာ သို့မဟုတ် ရည်ညွှန်းပလိန်းအထိ |
| နောက်ကျောဖောက်ထားသော အပေါက်များ၊ လက်မနှင့် ပိုက် ချည်များ၊ ကျဉ်းလာသော ချည်များ၊ ချည်ပြတ်နေရာများနှင့် ချည်စတင်ရာ ထောင့်ဖြတ်ထားခြင်း | ငယ်သော အနက်ဖြင့် Counterbore; ISO မက်ထရစ်နှင့် trapezoidal ချည်များ၊ cosmetic သို့မဟုတ် ပုံစံထုတ်ထားသော: ကြည့်ရန် [Threads on shafts and bores, drawn or modelled](topic:threads) |
| ပါးလွှာသော feature extrude | ပရိုဖိုင်၏ နံရံနှစ်ခုလုံးကို ဆွဲပါ |
| ပုံစံမိတ္တူများကို တစ်ခုချင်း ကျော်ခြင်း၊ ဖြည့်သော pattern များ | feature ခွဲများကို သုံးပါ; မျဉ်းကွေးတစ်လျှောက် pattern များ: {{ui:Path pattern}} |
| Pattern မိတ္တူများ၊ mirror များ၊ fillet များ၊ chamfer များ၊ shell များနှင့် တင်သွင်းထားသော solid များကို ကူးခြင်း | ၎င်းတို့ တည်ဆောက်ထားသော ပုံဆွဲချက် သို့မဟုတ် feature ကို ကူးပါ၊ သို့မဟုတ် pattern လုပ်ပါ |
| Form ၏ အမှတ်အထူးများတွင် တိကျသော (G1) tangency; Form ၏ patch များကို ကြီးသော မျက်နှာများအဖြစ် ပေါင်းခြင်း | Form ၏ Level ကို တိုးပါ- ခန့်မှန်းထားသော patch များ ပိုသေးလာသည်; ကြည့်ရန် [Freeform shapes with Form](topic:form-surfaces) |
| Form တစ်ခုတည်းဖြင့် ပိတ်ထားသော အစိတ်အပိုင်းများစွာ; Form များကြား တံတားများ | Form feature တစ်ခုလျှင် ပိတ်ထားသော အစိတ်အပိုင်းတစ်ခု; Join ဖြင့် ပေါင်းပါ |
| မြင်ကွင်းတွင် surface body များကို ရွေးခြင်း (trim နှင့် patch အမှတ်များမှလွဲ၍); surface fillet များ; untrim; G2 patch များ; ကွေးသော အိမ်နီးချင်းများနှင့် tangent Gordon မျက်နှာများ (ပလိန်းနှင့် ပြား မျက်နှာများနှင့် tangent ကို ပြုလုပ်ထားသည်) | feature ၏ panel တွင် နာမည်ဖြင့် ရွေးပါ; ပထမ thicken လုပ်ပြီး solid ကို fillet လုပ်ပါ |
| history တွင် body စာရင်း; ဝှက်ထားသော body များကို export မှ ချန်ထားခြင်း | အစိတ်အပိုင်း panel ရှိ body စာရင်းတွင် body များကို အမည်ပြောင်း၍ ဝှက်ပါ; body ကို ပြုလုပ်သော feature ကို ဖျက်ပါ သို့မဟုတ် ဖိနှိပ်ပါ |
| cylinder နှင့် cone ကို analytic ထားသော မညီသော scale; offset မျက်နှာများ၏ မညီသော scale | {{ui:Scale body}} သည် ကွေးမျက်နှာများကို ပိတ်ထားသော B-spline များ ပြုလုပ်သည် (0.0000004 mm အတွင်း); တူညီသော scale သည် တိကျစွာ ရှိနေသည် |
| မျက်နှာပြင် solid များကို ပေါင်းခြင်း; Minkowski ပေါင်းခြင်းများ | {{ui:Stitch}} သို့မဟုတ် {{ui:Thicken}} ကို ဦးစွာ၊ ထို့နောက် {{ui:Combine}} |
| Tolerance ခွဲခြမ်းစိတ်ဖြာမှု: ထောင့်ကွေးသော stack-up များ (2D နှင့် 3D vector loop များ)၊ ပုံဆွဲချက်မှ တွက်ချက်သော sensitivity များ၊ အခြား ဖြန့်ဝေမှုများဖြင့် Monte Carlo၊ sketch dimension ပေါ် size tolerance များ၊ material condition မှ bonus tolerance | assembly ရှိ {{ui:Stack-up}}: ဦးတည်ချက်တစ်ခု၊ worst case နှင့် RSS၊ ရိုက်ထည့်သော tolerance များ၊ title block ၏ general tolerance သို့မဟုတ် GD&T frame မှ: ကြည့်ရန် [Tolerance stack-ups](topic:tolerance-stackup) |
| Nesting: ဖြတ်အစီအစဉ်နှင့် lead-in များ၊ ဘောင်ဘေးတူ အစွန်းများကို တစ်ကြိမ်ဖြတ်ခြင်း၊ အတူတကွ ထားရမည့် အစိတ်အပိုင်းများ; ရိုးမှ ပစ္စည်းကျန်များ၊ ပရောဂျက်များကြား မျှဝေသော stock | {{ui:အပြား အစိတ်အပိုင်းများကို စာရွက်များပေါ် စီစဉ်ရန်…}} နှင့် အကွာအဝေး၊ အနားအကွာ၊ လှည့်ခြင်းနှင့် အမျှင်: ကြည့်ရန် [Nest flat parts on sheets](topic:nest-flat-parts); ကျန်ပြားများကို သိမ်းပြီး ဦးစွာ သုံးသည်: ကြည့်ရန် [Keep and reuse offcuts](topic:nest-offcuts); ဖြတ်ခြင်းကို သင့်ဖြတ်စက်၏ ကိုယ်ပိုင်ဆော့ဖ်ဝဲတွင် စီစဉ်ပါ |
| Sheet metal: hem များ၊ jog များ၊ miter နှင့် contour flange များ; ကွေးသော အစွန်းများပေါ် သို့မဟုတ် ကွေးထားသော base flange ၏ မျက်နှာများပေါ် flange များ; ပုံဆွဲထားသော ကွေးများ; corner ပိတ်ခြင်းများ; ပုံသွင်းကိရိယာများ; solid ကို sheet metal သို့ ပြောင်းခြင်း; ဖြတ်ထားသော ကွေး base flange ၏ အပြား; ကွေးဇယားများ | {{ui:Base flange}} (ပြား သို့မဟုတ် ကွေးထားသော ပရိုဖိုင်)၊ ပြား၏ ဖြောင့်သော အစွန်းများပေါ် {{ui:Edge flange}} bend reliefs ဖြင့်၊ နှင့် K-factor ဖြင့် အပြားပုံစံ: ကြည့်ရန် [Sheet metal](topic:sheet-metal) |
| assembly ပေါ် Draft analysis; parting line ရှာခြင်း; နံရံအထူ ခွဲခြမ်းစိတ်ဖြာခြင်း | Design ရှိ အစိတ်အပိုင်းပေါ် {{ui:Draft analysis}}: ကြည့်ရန် [Check draft for moulding and casting](topic:draft-analysis); assembly ၏ အစိတ်အပိုင်းတိုင်းကို ဖွင့်ပြီး စစ်ဆေးပါ |

## ပုံဆွဲချက်များ

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| အဓိကအရွယ်အစား သုံးခုအပြင် ဒိုင်မန်ရှင်းများ (အပေါက်အရွယ်များ၊ နေရာများ၊ အရွယ်အစားပေါ် tolerance များ) | PDF ပေါ် မှတ်သားပါ သို့မဟုတ် DXF export လုပ်ပြီး 2D CAD ပရိုဂရမ်တွင် ဒိုင်မန်ရှင်းပါ |
| section သို့မဟုတ် detail တစ်ခုထက်ပို; ကိုက်ညီ၊ ဖြတ်ထုတ်ထားသော နှင့် အထောက်အကူ view များ | ပုံဆွဲချက်တစ်ခုလျှင် section တစ်ခုနှင့် detail တစ်ခု |
| စာရွက်ပေါ် စာသား၊ မှတ်ချက်များနှင့် ဇယားများ (ခေါင်းစဉ်နှင့် revision block မှလွဲ၍) | finish မှတ်ချက်၊ သို့မဟုတ် PDF ပေါ် ထည့်သော စာသား |
| ပထမထောင့် projection၊ ရွေ့နိုင်သော view များ၊ portrait စာရွက်များ | တတိယထောင့်၊ အလိုအလျောက် အပြင်အဆင်၊ landscape စာရွက် A4–A0 နှင့် ANSI A–E |
| Live section view: ပလိန်းများစွာ သို့မဟုတ် section box တစ်ခုတည်း၊ ဖြတ်ထားသောနေရာ၏ outline၊ section ကို ဖိုင်တွင် သိမ်းခြင်း | တစ်ကြိမ်တစ်ပလိန်းကို {{ui:Views}} › {{ui:Section view}} မှ; ကြည့်ရန် [Look inside with a section view](topic:section-view) |
| ရွှေ့နိုင်သော အခြား more views၊ dimension သို့မဟုတ် balloon ပါသော assembly ပုံဆွဲချက်များ | အလိုအလျောက် balloon များနှင့် parts list ပါသော isometric (သို့မဟုတ် exploded) view တစ်ခု |
| GD&T နှင့် finish သင်္ကေတများကို copy နှင့် paste လုပ်ခြင်း | Datum၊ Frame သို့မဟုတ် Finish ဖြင့် တစ်ခုချင်း နေရာချပါ |
| Manuals: Illustrate ရှိ {{ui:အခြားဖိုင်မှ…}} STEP ဖိုင်များ၊ ModelCraft သို့မဟုတ် BimCraft မှ တိုက်ရိုက်ပို့သော မော်ဒယ်၊ path tracer ၏ အရည်အသွေးဖြင့် ပုံများ၊ PDF အတွင်း interactive 3D | Design တွင် STEP ကိုဖွင့်ပြီး manual ကို {{ui:ဖွင့်ထားသော အစိတ်အပိုင်းမှ}} စတင်ပါ; မော်ဒယ်ကို glTF (.glb) အဖြစ် သိမ်းပါ; 3D view ၏ PNG ပုံများ; interactive 3D ဖိုင်: ကြည့်ရန် [Start a manual in Illustrate](topic:illustrate) |

## Assemblies

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| Gear၊ rack၊ cam နှင့် screw joint များ; cone သို့ ကန့်သတ်ထားသော ball joint; ကွေးမျက်နှာများပေါ် သို့မဟုတ် အမှတ်များကြား joint များ | ပြား မျက်နှာများပေါ် rigid၊ revolute၊ slider၊ cylindrical၊ planar၊ ball နှင့် pin-in-slot joint များ၊ တန်ဖိုးတစ်ခုစီ၏ ကိုယ်ပိုင် ကန့်သတ်ချက်များဖြင့်: ကြည့်ရန် [Build an assembly](topic:build-assembly) |
| အစိတ်အပိုင်းများကို လှည့်သော exploded အဆင့်များ၊ joint များ နေရာချထားသော အစိတ်အပိုင်းများကို ဆွဲခြင်း | ဖြောင့်သော explode အဆင့်များ; အစိတ်အပိုင်းကို လက်ဖြင့် ရွှေ့ရန် joint ကို ဖယ်ပါ |
| Sub-assembly များ | အစိတ်အပိုင်းအဆင့် တစ်ခုတည်း |
| Gear များ၊ cam များ၊ contact | မရနိုင်ပါ |

## Manufacture

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| ကွေးမျက်နှာများ၏ 3D roughing၊ 3D adaptive clearing၊ rest machining; waterline၊ pencil၊ radial နှင့် spiral finishing; arc အဖြစ် ရေးသော adaptive pass များ | 2.5-axis face၊ pocket၊ 2D adaptive၊ contour၊ drill နှင့် chamfer: ကြည့်ရန် [Make toolpaths and G-code](topic:manufacture); မော်ဒယ်တစ်ခုလုံး၏ Parallel နှင့် Scallop finishing: ကြည့်ရန် [3D finishing](topic:finish-3d) |
| 4- နှင့် 5-axis toolpath များ၊ turning၊ probing | Tool axis ကို Setup tab တွင် သတ်မှတ်ပြီး တစ်ဖက်စီ တစ်ကြိမ်တည်း |
| Holder နှင့် shank collision စစ်ဆေးမှုများ | flute-length သတိပေးချက်များကို ကြည့်ပြီး သင်၏ control ၏ simulator တွင် စစ်ဆေးပါ |
| Probing၊ tool-life နှင့် subprogram cycle များ၊ post ရှိ 4th- နှင့် 5th-axis နှင့် lathe code များ; အခြား ပရိုဂရမ်များ၏ post ဖိုင်များ တင်ခြင်း | PartCraft ၏ ကိုယ်ပိုင်ပုံစံဖြင့် post ရေးပါ သို့မဟုတ် ပြောင်းပါ: ကြည့်ရန် [Post processors you can edit](topic:post-processors) |
| Inch G-code (G20) | မီလီမီတာ (G21) သာ |

## Simulation နှင့် generative design

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| Nonlinear လေ့လာမှုများ- yielding၊ ကြီးမားသော deflection၊ အစိတ်အပိုင်းများကြား contact၊ fatigue | Linear static နှင့် natural frequency: ကြည့်ရန် [Check stress and deflection](topic:simulation); safety factor ကို 1 ထက် သိသိသာသာ ထားပါ |
| Nonlinear buckling (imperfection၊ post-buckling၊ snap-through) | Buckling load factor အနည်းဆုံး ကျယ်ပြန့်သော margin ဖြင့်: ကြည့်ရန် [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| မျက်နှာများကြား ရောင်ခြည် (view factor)၊ contact resistance၊ အပူချိန်ပေါ် မူတည်သော ပစ္စည်းများ၊ thermal stress ထဲ inertia (thermal shock wave များ) | ပတ်ဝန်းကျင်သို့ ရောင်ခြည်၊ အချိန်အလိုက် steady သို့မဟုတ် quasi-static thermal stress၊ ကိန်းသေ property များ: ကြည့်ရန် [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| transient heat နှင့် thermal load ပါသော လေ့လာမှုများအတွက် အလိုအလျောက် ပိုသေးငယ်အောင် ခွဲခြင်း; mesh ကို အမှားနည်းသည့်နေရာတွင် ပိုကြမ်းအောင်လုပ်ခြင်း; local ပမာဏ (တစ်နေရာ၏ အမြင့်ဆုံး stress) အတွက် ပစ်မှတ် | **အလိုအလျောက် ပိုသေးငယ်အောင် ခွဲရန်** ကို static၊ buckling၊ natural-frequency နှင့် steady thermal လေ့လာမှုများအတွက် အစိတ်အပိုင်းတစ်ခုလုံး၏ အမှားပေါ် ခွဲသည်: ကြည့်ရန် [Check stress and deflection](topic:simulation); မဟုတ်ပါက element size ကို လျှော့ပါ |
| Bearing နှင့် bolt load များ၊ remote force များ၊ moment များ၊ spring များ၊ သတ်မှတ်ထားသော displacement များ | မျက်နှာများပေါ် force နှင့် pressure၊ gravity; ပိတ်ထားသော နှင့် ပွတ်တိုက်မှုမရှိသော မျက်နှာများ |
| Assembly များ၏ simulation; ဦးတည်ချက်ပေါ် မူတည်၍ ကွဲပြားသော ပစ္စည်းများ (print layer များ၊ composite များ) | အစိတ်အပိုင်းတစ်ခု၊ ပစ္စည်းတစ်မျိုး isotropic |
| tetrahedral လေ့လာမှုများ၊ heat transfer နှင့် generative design အတွက် solver thread အများအပြား; cross-origin isolated မဟုတ်သော စာမျက်နှာပေါ်ရှိ thread များ | Voxel လေ့လာမှုများ၊ buckling၊ အချိန်အလိုက် stress နှင့် laminar flow သည် စာမျက်နှာ ခွင့်ပြုသည့်အခါ thread များကို သုံးသည်: ကြည့်ရန် [PartCraft settings](topic:settings) |
| Design တိကျမှုဖြင့် Turbulent flow (Spalart–Allmaras မော်ဒယ်သည် experimental အဖြစ်ရှိ: ပိုက်ပွတ်တိုက်မှု 30 မှ 34 % မြင့်၊ backward-step reattachment 21 မှ 39 % နည်း; စီစဉ်ထား: နံရံများအနီး ပိုသေးသော cell များ)၊ flow ထဲ အပူ၊ unsteady (time-accurate) flow၊ free surface များ၊ non-Newtonian fluid များ၊ လည်ပတ်သော အစိတ်အပိုင်းများ | Laminar၊ steady၊ isothermal flow၊ Newtonian fluid၊ သို့မဟုတ် qualitative ပုံစံများအတွက် experimental turbulent မော်ဒယ်: ကြည့်ရန် [Simulate fluid flow](topic:flow-simulation); Reynolds number laminar ကျော်လွန်လျှင် panel က သတိပေးသည် |
| generative design တွင် stress ကန့်သတ်ချက်များနှင့် ထုတ်လုပ်မှုစည်းမျဉ်းများ (overhang၊ milling ဦးတည်ချက်များ); ပုံသဏ္ဍာန်တစ်ခုတည်းတွင် ပစ္စည်းများစွာ | ပမာဏတစ်ခုအတွက် တင်းမာဆုံး ပုံသဏ္ဍာန်; ရလဒ်ကို Simulation တွင် စစ်ဆေးပါ: ကြည့်ရန် [Grow a shape from loads](topic:generative-design) |
| ရလဒ်ကို တည်းဖြတ်နိုင်သော (ချောမွေ့၊ parametric) solid အဖြစ် | STL၊ faceted STEP သို့မဟုတ် ရလဒ်ကို faceted solid အဖြစ် တင်ထားသော အစိတ်အပိုင် |
| လျှပ်စစ်စက် ဒီဇိုင်း: stator ထဲ လည်ပတ်သော rotor၊ angle ဆန့်ကျင်ဘက် torque၊ ရွေ့သော သံမဏိ၊ ၎င်းတို့၏ ကွေးကောက်မှုကျော်လွန်လျှင် အားလျော့သော သံလိုက်များ၊ eddy current နှင့် သံ နှင့် ကြေးနီဆုံးရှုံးမှုများ; 3-D သို့မဟုတ် ကွေးသော mesh ပေါ် သံလိုက်စက်ကွင်းများ | analysis library ရှိ grid ပေါ် linear 2-D magnetostatic: coil များ၊ သံ၊ သံလိုက် မြဲများ ၎င်းတို့၏ recoil လိုင်းပေါ်၊ ကွာဟချက်များ၊ inductance နှင့် ဆွဲအား: ကြည့်ရန် [Magnetic fields in 2-D](topic:magnetic-fields-2d) |

## Scripts

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| script တည်းဖြတ်ရာတွင် hover အကူအညီ၊ breakpoint များနှင့် step ခြင်း | ရှာခြင်း၊ ခေါက်ခြင်းနှင့် ဖြည့်ခြင်း ရှိပြီးသား ([Write and run scripts](topic:craftscript) ကို ကြည့်ပါ); အကျန်အတွက် သင့်ကိုယ်ပိုင် editor: Script အုပ်စုရှိ {{ui:သိမ်းရန်}} နှင့် {{ui:ဖွင့်ရန်}} က script များကို ထဲထွက် ရွှေ့သည်; built-in function များကို [The CraftScript language](topic:craftscript-language) တွင် ဖော်ပြထား |
| Breakpoint များနှင့် script ကို step ခြင်း | လမ်းတလျှောက် `disp` နှင့် `fprintf`; {{key:Mod+Enter}} က ရွေးထားသော လိုင်းအနည်းငယ်ကို တစ်ကြိမ် run သည် |
| script ပြသော ဒေတာနှင့် plot များကို Design workspace တွင် ဆွဲခြင်း; script များက အစိတ်အပိုင်း၏ parameter များကို ပြောင်းခြင်း | Script workspace တွင် ပြသည်; script များသည် `param` ဖြင့် parameter ကို ဖတ်သည် ([Write and run scripts](topic:craftscript) ကို ကြည့်ပါ)၊ ၎င်းတို့ကို {{ui:ပါရာမီတာများ}} tab တွင် ပြောင်းပါ |
| plot များနှင့်အတူ ပုံများနှင့် ဇယားများ; သိမ်းမီ plot ကို တည်းဖြတ်ခြင်း (zoom၊ axis ကန့်သတ်ချက်များ) | Side by side က plot များကို ပြသည်; plot ကို PNG၊ SVG သို့မဟုတ် CSV အဖြစ် သိမ်းပြီး အခြားနေရာတွင် ပြီးအောင်လုပ်ပါ |
| numpy နှင့် အခြား Python package များ; Python offline; editor တွင် Python ခေါက်ခြင်း; Pascal Script | Python ၏ standard library၊ CraftScript နှင့် Lua: ကြည့်ရန် [Scripts in Python](topic:craftscript-python) |
| Lua function များကို built-in function များသို့ ပေးခြင်း; script run နေစဉ် တည်ဆောက်ထားသော နာမည်ဖြင့် Lua မှ library function ခေါ်ခြင်း | library function ၏ နာမည်ကို script တွင် ရေးပါ (`cs.static_tet(…)`)၊ သို့မဟုတ် CraftScript script မှ ခေါ်ပါ |

## အက်ပ်

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| Cloud သိမ်းခြင်း၊ မျှဝေခြင်းနှင့် ဗားရှင်း history | ယခုမရနိုင်သေးပါ။ ဖိုင်များကို သင့်ကွန်ပျူတာတွင် သိမ်းပြီး ဗားရှင်းကို အမည်ဖြင့် ထိန်းပါ |
| iPad နှင့် iPhone တွင် ထည့်သွင်းထားသော app အဖြစ် PartCraft | စက်၏ browser တွင် PartCraft ကို သုံးပါ; Android နှင့် desktop တွင် CadCraft Studio (getcadcraft.com/download) တွင်လည်း အလုပ်လုပ်သည် |
| Context (right-click) menu များ | Toolbar နှင့် ညာဘက် panel |
| အစမှ အပြည့်အဝ offline အလုပ်လုပ်ခြင်း | အက်ပ်ကို offline အသုံးပြုရန် သိမ်းထားသည့်အခါသာ: ကြည့်ရန် [Working offline](common:offline) |

အဓိက လွဲချော်နေသည့်အရာကို ဆိုက်၏ support စာမျက်နှာမှ အစီရင်ခံပါ- ၎င်းက နောက်တစ်ခုကို ပုံဖော်သည်။

## Engineer (generator နှင့် field များ)

| ယခုမရှိသေးသည် | ယခု အစားထိုးနည်း |
|---|---|
| ထုတ်လုပ်ထားသော အပူလဲလှယ်ကိရိယာပေါ် header များ၊ port များနှင့် fitting များ; ပစ္စည်းခွန်အား အတွက် အပူချိန်ကွေးများ; manifold ရှိ tee ဆုံးရှုံးမှု | generator များက core နှင့် ပိုက်များကို တည်ဆောက်သည်; Design တွင် fitting များ ထည့်ပါ; ပစ္စည်း၏ အခန်းအပူချိန် တန်ဖိုးများကို safety factor နှင့်အတူ သုံးပါ |
| add-on directory မှ generator များကို တစ်ချက်နှိပ်ဖြင့် ထည့်ခြင်း | Engineer workspace ရှိ {{ui:ဖွင့်ရန်}} က ဖိုင်မှ generator တစ်ခု ထည့်သည် |
| generator ၏ voxel အရွယ်ထက် ပိုသေးသော field ဖိုင်; `.vdb` ဖိုင်များကို ဖတ်ခြင်း | script မှ ပိုသေးသော field ကို သိမ်းပါ; `.vdb` ကို ရေးသည်၊ ဖတ်ခြင်း မဟုတ်ပါ |
| pressure-vessel ကုဒ် တွက်ချက်မှုများ | သင်ရွေးသော safety factor ဖြင့် စာအုပ်ပါ thin-wall နှင့် thick-wall ဖော်မြူလာများ; ကုဒ် margin မဟုတ်ပါ |
| အခြား အက်ပ်များအတွက် generator များ | ဤဗားရှင်းတွင် PartCraft သာ |
