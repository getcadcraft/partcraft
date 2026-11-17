---
title: stress နှင့် deflection စစ်ရန် (Simulation)
summary: material ရွေးပါ၊ မျက်နှာများကို ထိန်းထားပါ၊ forces၊ pressures သို့မဟုတ် part ၏ ကိုယ်အလေးချိန်ထည့်ပါ၊ ဖြေရှင်းပါ၊ von Mises stress၊ displacement၊ safety factor၊ reactions နှင့် natural frequencies များကို model ပေါ်တွင် ဖတ်ပါ၊ ထို method ဘာကို ပြောနိုင်/မပြောနိုင်ကိုလည်း သိပါ။
keywords: simulation, FEA, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, plasticity, yielding, plastic strain, bilinear, contact, contact pair, penalty, bonded, frictionless contact, CalculiX, .inp, .frd, finite element, stress, strain, von Mises, displacement, deflection, safety factor, factor of safety, yield, reaction, load, force, pressure, gravity, self weight, fixed, frictionless, support, constraint, material, steel, aluminum, titanium, ABS, PLA, nylon, natural frequency, modal, vibration, mesh, element size, tetrahedral, tetrahedra, tet mesh, voxel, mesh quality, principal stress, equivalent strain, error estimate, curved faces, holes, fillets, adaptive, adaptive refinement, automatic refinement, h-adaptive, convergence, mesh convergence, exact surface, sphere, cone, torus, spline, freeform
from: 6f2fdec1
---

Simulation workspace သည် "ဤ load အောက်တွင် ကောက်ကွေးမလား၊ ပျက်မလား?" ဟု မေးခွန်းကို ဖြေသည်၊ သင် modelling လုပ်နေသော part အတွက်။ ၎င်းသည် **linear static** study (သေးငယ်သော deflections၊ material သည် elastic ဆက်နေသည်) သို့မဟုတ် **natural frequency** study ဖြစ်ပြီး၊ part ၏ မျက်နှာများကို လိုက်သော quadratic tetrahedra mesh (သို့မဟုတ် ရွေးလျှင် တူညီသော သေးငယ်သော cubes) ပေါ်တွင် ဖြေရှင်းသည်။ mesh kernel က part အတွက် ပေးသော အမည်ပေးထားသော မျက်နှာများပေါ်တွင် အလုပ်လုပ်သည် ([The mesh kernel](topic:solid-kernels) ကို ကြည့်ပါ)။

toolbar ၏ ဘယ်ဘက်ရှိ **Workspace** အကွက်တွင် **Simulation** ကို ရွေးပါ။ သင့် part ကို မပြောင်းပါ; study ကို part ဖိုင်ထဲတွင် သိမ်းထားပြီး ၎င်းအပေါ် ပြောင်းလဲမှုတိုင်းကို undo လုပ်နိုင်သည်။

## study တစ်ခု သတ်မှတ်ရန်

1. ညာဘက် panel တွင် **New study** ကို နှိပ်ပါ။
2. **Material** ကို ရွေးပါ။ panel က ၎င်း၏ stiffness (E)၊ Poisson's ratio၊ သိပ်သည်းဆနှင့် yield strength ကို ပြသည်။ တန်ဖိုးများသည် ပုံမှန် handbook ကိန်းဂဏန်းများ ဖြစ်သည်; သင့် supplier ၏ လက်မှတ်ရ တန်ဖိုးများနှင့် ကွဲပြားနိုင်သည်။
3. **Mesh** ကို ရွေးပါ:
   - **Tetrahedral (accurate)**, default: 10-node tetrahedra၊ ၎င်းတို့၏ အပြင်မျက်နှာများသည် part ၏ မျက်နှာများပေါ်တွင် တည်သည်၊ အပေါက်များ၊ fillets နှင့် အခြား အဝိုင်းမျက်နှာများ ပေါ်ရှိ ကွေးသော edges များဖြင့်။ ပြား၊ cylinder၊ cone၊ sphere နှင့် torus မျက်နှာများ၊ revolved နှင့် extruded မျက်နှာများနှင့် freeform (B-spline) မျက်နှာများပေါ်ရှိ nodes များသည် exact surface ပေါ်တွင် ရှိသည်; အခြားအမျိုးအစား မျက်နှာတိုင်းသည် ၎င်း၏ display mesh ကို လိုက်သည်၊ ရလဒ်ဇယားက မျက်နှာ မည်မျှ ရှိသည်ကို ပြောသည်။ mesh သည် ကွေးသော မျက်နှာများ၊ ပါးသော နံရံများနှင့် ထက်မြက်သော edges အနီးတွင် ကိုယ်တိုင် ပို၍ နုပ်စေသည်။
   - **Voxel cubes (fast)**: part ကို တူညီသော cubes ဖြင့် ဖြည့်သည်။ မြန်သော်လည်း ကွေးသော မျက်နှာများက အဆင့်များ ဖြစ်လာသည်။ tetrahedral mesh မရှိမီ သိမ်းထားသော studies များက ၎င်းကို ဆက်သုံးသည်။
4. **Element size** ကို ဗလာထားပါက အလိုအလျောက် အရွယ်အစား (~12,000 tetrahedra၊ သို့မဟုတ် 20,000 cubes) ဖြစ်မည်၊ သို့မဟုတ် mm ဖြင့် တစ်ခု ရိုက်ပါ။ panel က နုပ်သော နေရာများ ထည့်မီ ထိုသည်က ဘယ်လောက် elements ဖြစ်မည်ကို ပြသည်။ tetrahedra ဖြင့် **Smaller elements on curved faces** (default အရ ဖွင့်) က အပေါက်များနှင့် fillets များကို နုပ်စေသည်၊ stress အများအားဖြင့် အမြင့်ဆုံးဖြစ်သည့်နေရာ ဖြစ်သည်။

### အလိုအလျောက် နုပ်ခြင်း

tetrahedra ဖြင့်၊ static သို့မဟုတ် buckling study (thermal load မပါဘဲ)၊ natural-frequency study နှင့် steady thermal study တို့သည် **Refine automatically (adaptive)** ကို ပေးသည်။ ၎င်းကို ဖွင့်ပြီး သတ်မှတ်ပါ:

- **Target error (%)**: ခန့်မှန်းထားသော အမှားသည် ၎င်းအောက်ရောက်သည့်အခါ ဖြေရှင်းခြင်း ရပ်မည် (အစပိုင်းတွင် 1 %)။
- **Most passes**: အများဆုံး ဖြေရှင်းမှု အကြိမ်ရေ (အစပိုင်းတွင် 5၊ အများဆုံး 10)။

pass တစ်ခုစီက ဖြေရှင်းပြီး အမှားအများဆုံး ခန့်မှန်းထားသော elements များကို ရှာ၍ ခွဲပြီး (mesh ကို ပေါင်းထားရန် လိုအပ်သော အနီးကပ် elements အနည်းဆုံးအရေအတွက်ပါ) ထပ်ဖြေရှင်းသည်။ ကွေးသော မျက်နှာများပေါ်ရှိ nodes အသစ်များက exact surface ပေါ်သို့ သွားသည်။ ရလဒ်များက pass တစ်ခုစီအတွက် elements၊ unknowns၊ ခန့်မှန်းထားသော အမှား၊ အမြင့်ဆုံး stress (သို့မဟုတ် temperature) နှင့် displacement (သို့မဟုတ် heat flux) ပါဝင်သော ဇယားနှင့် ဂရပ်ကို ပြပြီး ရပ်ရသည့် အကြောင်းရင်းလိုင်းကို ပြသည်: ပန်းတိုင် ပြည့်မီခဲ့သည်၊ passes ကုန်ခဲ့သည်၊ နောက် mesh သည် ကြီးလွန်းမည်၊ သို့မဟုတ် pass တစ်ခု မအောင်မြင်ခဲ့ (ထိုအခါ နောက်ဆုံး ကောင်းသော pass ကို ပြသည်)။

ခန့်မှန်းချက်ကို ခန့်မှန်းချက်အဖြစ် ဖတ်ပါ။ ၎င်း (Zienkiewicz–Zhu၊ တိကျသော အဖြေများနှင့် နှိုင်းယှဉ်လျှင် အမှန်တကယ် အမှား၏ ~0.6 မှ 0.95 ကို ဖတ်သည်) သည် **part တစ်ခုလုံး** ၏ အမှားကို တိုင်းသောကြောင့်၊ အပေါက် သို့မဟုတ် fillet တွင် အမြင့်ဆုံး stress သည် ခန့်မှန်းချက် သေးငယ်နေစဉ်တွင်လည်း အနည်းငယ် မမှန်သေးနိုင်သည်: stress concentration အတွက် target ကို 1 % အောက် သတ်မှတ်ပြီး pass မှ pass သို့ အမြင့်ဆုံး တည်ငြိမ်သွားသည်ကို ကြည့်ပါ။ ထက်မြက်သော အတွင်းထောင့် သို့မဟုတ် fixed မျက်နှာ၏ edge တွင် အမှန်တကယ် stress သည် အဆုံးမရှိ ဖြစ်သည်၊ ထို့ကြောင့် ခန့်မှန်းချက်က ဘယ်တော့မှ မရောက်နိုင်: passes များ ကုန်သွားမည်။

**Natural frequencies နှင့် buckling။** natural-frequency study အတွက် ခန့်မှန်းချက်က သင်တောင်းသော mode တိုင်းကို ဖုံးလွှမ်းသည်၊ တူညီစွာ ရေတွက်သည်; ဇယားနှင့် ဂရပ်က ပထမ frequencies နှစ်ခုကို လိုက်သည်။ flat မျက်နှာများသာ ပါသော part တွင် frequency သည် pass မှ pass သို့ လျော့ရုံသာ လျော့နိုင်သည် (mesh တစ်ခုစီက ယခင်ကို ကိုင်ထားသည်); ကွေးသော မျက်နှာများက ၎င်းတို့၏ အမှန်ပုံသဏ္ဌာန်နှင့် ပို၍ နီးကပ်လာသည်၊ ၎င်းက frequency ကို နည်းနည်း တစ်ဖက်တစ်ချက် ရွှေ့နိုင်သည်။ buckling အတွက် ခန့်မှန်းချက်က pre-stress နှင့် buckling modes များကို ဖုံးလွှမ်းပြီး ဇယားက load factors များကို လိုက်သည်။ 100 × 10 × 10 mm steel bar ပေါ်တွင် စစ်ဆေးထားသည်: ပထမ frequency သည် passes လေးခုအတွင်း 812.4 မှ 811.9 Hz သို့ တည်ငြိမ်သည်၊ Euler–Bernoulli (shear ကို လျစ်လျူရှုသည်) ထက် 0.4 % အောက်၊ ကော်လံ၏ load factor သည် Euler ထက် 0.5 % အတွင်း။

## ထိန်းပြီး load ထည့်ရန်

study တိုင်း အနည်းဆုံး support တစ်ခု ရှိရမည်၊ stress အတွက် load တစ်ခု ရှိရမည်။

1. toolbar ရှိ {{ui:Fixed}} ကို နှိပ်ပါ။ support အသစ်ကို ရွေးထားပြီး မျက်နှာများကို စောင့်နေသည်: ငြိမ်ထားသော မျက်နှာများကို နှိပ်ပါ (မျက်နှာတစ်ခုကို ထပ်နှိပ်လျှင် ဖယ်သည်)။ ပြီးသောအခါ **Done picking** သို့မဟုတ် {{key:Esc}} ကို နှိပ်ပါ။ ပြာရောင် cones များက ထိန်းထားသော မျက်နှာများကို အမှတ်အသားပြုသည်။
2. {{ui:Force}} ကို နှိပ်ပြီး force ၏ ထိသော မျက်နှာများကို နှိပ်ပါ။ panel တွင် **Total force** ကို နယူတန်ဖြင့် ရိုက်ပြီး **Direction** ကို ရွေးပါ: မျက်နှာထဲသို့၊ သို့မဟုတ် axis တစ်ခုအတိုင်း။ force သည် ရွေးထားသော မျက်နှာများပေါ်တွင် ဧရိယာအလိုက် ခွဲဝေသည်။ လိမ္မော်ရောင် မြား များက ပြသည်။
3. ရွေးထားသော မျက်နှာများထဲသို့ တွန်းသော MPa (N/mm²) ဖိအားအတွက် {{ui:Pressure}} ကို နှိပ်ပါ; အနုတ်ဖိအားက ဆွဲသည်။

ထပ်ရှိသော အမျိုးအစားများကို panel ရှိ **Add** စာရင်းတွင် တွေ့နိုင်သည်: **Frictionless face** (မျက်နှာသည် ကိုယ်တိုင်အတိုင်း ပွတ်ဆွဲနိုင်သော်လည်း ၎င်းမှ မခွာနိုင် — symmetry planes နှင့် ချောမွေ့သော supports အတွက် သုံးပါ) နှင့် **Gravity** (part ၏ ကိုယ်အလေးချိန်၊ 9.81 m/s²၊ သင်ရွေးသော ဦးတည်ချက်ဖြင့်)။

part ကို ဆွဲရွှေ့ခွင့် သို့မဟုတ် လည်ခွင့် ကျန်သော support ကို ငြင်းမည်၊ ကျန်နေသော လှုပ်ရှားမှုကို ပြောပြသည်။

## ဖြေရှင်းပြီး ရလဒ်များ ဖတ်ရန်

{{ui:Solve}} ကို နှိပ်ပါ။ အလုပ်သည် နောက်ကွယ်တွင် လည်ပတ်သည်; **Stop** က ပယ်ဖျက်သည်။ ထို့နောက်:

- part ကို **von Mises stress** ဖြင့် အရောင်ခြယ်သည်; **Show** တွင် **Displacement** သို့မဟုတ် **Safety factor** ကို ရွေးပါ။ legend က scale ကို ပေးသည်။
- တန်ဖိုးများကို pointer အောက်ရှိ အရာကို ညွှန်ပြ၍ ဖတ်နိုင်သည်။
- **Deformed shape** ကို အမှန်ခြစ်လျှင် part ကောက်ကွေးနေသည်ကို မြင်ရမည် (လှုပ်ရှားမှုကို **Scale** ဖြင့် ချဲ့ထားသည်; အမှန်ကို ဇယားတွင် ကြည့်ပါ)။
- ဇယားက အမြင့်ဆုံး stress နှင့် ၎င်းရှိနေရာ၊ အမြင့်ဆုံး displacement၊ အနည်းဆုံး **safety factor** (yield strength ÷ von Mises stress; 1 အောက်ဆိုလျှင် material သည် yield ဖြစ်သည်)၊ သက်ရောက်သော load နှင့် supports တွင် **reactions** (load ကို ညီမျှစေသည်) နှင့် အသုံးပြုသော mesh ကို ပြသည်။

**natural frequencies** အတွက် ထို **Type** ကို ရွေးပါ၊ **Modes** အရေအတွက် သတ်မှတ်ပြီး ဖြေရှင်းပါ။ mode တိုင်းက ၎င်း၏ frequency နှင့် ပုံသဏ္ဌာန်ကို ပြသည် (ပုံသဏ္ဌာန်များကို အကြီးဆုံး လှုပ်ရှားမှုတွင် 1 သို့ scale လုပ်ထားသည်)။

part ကို ပြောင်းလျှင် ရလဒ်များကို ခေတ်မမီတော့ဟု အမှတ်အသားပြုမည်: ပြန်ဖြေရှင်းပါ။

## yield နှင့် contact (nonlinear studies)

"material သည် elastic ဆက်နေသည်" ထက် ကျော်သော study အမျိုးအစား နှစ်ခု ထပ်ရှိသည်:

- **Nonlinear (material yields)** သည် material ၏ မျဉ်းဖြောင့်ကို ၎င်း၏ yield stress အထိ လိုက်ပြီး ထို့နောက် ပို၍ ပြားသော slope (**Slope after yield**၊ ဗလာထားလျှင် E ၏ 1 %) ကို လိုက်သည်။ load သည် **Load steps** တွင် ဆက်သွားသည်; မတည်ငြိမ်သော step ကို ၎င်းကိုယ်တိုင် တစ်ဝက်လျှော့သည်။ ရလဒ်များက ဂရပ်များတွင် **Plastic strain** ကို ထည့်ပြီး load မည်မျှ ထိန်းထားနိုင်သလဲ ပြောသည်။ step တစ်ခုက မတည်ငြိမ်သေးလျှင် study သည် နောက်ဆုံး ကောင်းသော step တွင် ရပ်ပြီး ⚠ ပြဿနာများ အကန့်က ဘယ်နေရာလဲ ပြောသည်: ထိုနေရာတွင် part သည် အားကုန်သွားပြီ (collapse)၊ သို့မဟုတ် steps များ ကြီးလွန်းသည်။
- **Contact between pieces** သည် part ၏ သီးခြား အပိုင်းများက အချင်းချင်း တွန်းနိုင်စေသည်။ **Contact pair** ထည့်ပြီး {{ui:Pick faces}} ဖြင့် A ဘက်၏ မျက်နှာများ (တွန်းသော မျက်နှာများ) ကို ရွေးပါ၊ ထို့နောက် {{ui:Pick side B faces}} ဖြင့် B ဘက်ကို ရွေးပါ။ **Frictionless** အပိုင်းများသည် တွန်း၊ ပွတ်ဆွဲ၊ ခွာနိုင်သည်; **bonded** အပိုင်းများသည် ကပ်ရှိနေသည်။ အပိုင်းတစ်ခုစီကို သီးခြား mesh လုပ်သောကြောင့် ၎င်းတို့ကြား အနည်းငယ် ကွာဟချက်ရှိလျှင် ရပါသည်။ Contact သည် penalty method ဖြစ်ပြီး အပိုင်းများက အချင်းချင်း အနည်းငယ် နစ်ဝင်သည် (**penalty factor** × E ÷ element size က contact ၏ တင်းမာမှုကို သတ်မှတ်သည်)။ ဇယားက အနက်ဆုံး နစ်ဝင်မှုကို ပြပြီး ပြဿနာများ အကန့်က element size ၏ 1 % ထက် ပိုလျှင် သတိပေးသည်: penalty factor ကို မြှင့်ပါ သို့မဟုတ် element သေးငယ်များ သုံးပါ။

နှစ်ခုစလုံးက tetrahedral mesh ကို သုံးသည်။ Friction၊ large sliding နှင့် large rotations ကို ဤနေရာတွင် မဖြေရှင်းပါ။

## CalculiX ဖြင့် လည်ပတ်ရန်

**Export › CalculiX deck (.inp)** (သို့မဟုတ် panel ရှိ {{ui:Save a CalculiX deck (.inp)}}) သည် study ကို CalculiX အတွက် input deck အဖြစ် သိမ်းသည်၊ CalculiX သည် သင် ကိုယ်တိုင် ထည့်သွင်းပြီး လည်ပတ်ရသော သီးခြား program ဖြစ်သည်: mesh၊ material၊ supports၊ loads နှင့် contact pairs အတူတူ၊ mm၊ N နှင့် MPa ဖြင့်။ ၎င်းကို run ပြီးနောက် **Export › CalculiX results (.frd)** က ၎င်း၏ result ဖိုင်ကို တူညီသော mesh ပေါ်သို့ ပြန်ဖတ်ပြီး displacement (နှင့် ဖိုင်တွင် stress ရှိလျှင် von Mises stress) ကို ပြသည်။ ကြားကာလတွင် part သို့မဟုတ် element size ကို ပြောင်းခဲ့လျှင် mesh သည် တူညီမည်မဟုတ်ဟု PartCraft က ပြောမည်: deck အသစ် သိမ်းပါ။

## ယုံကြည်ရမည့် အတိုင်းအတာ

PartCraft သည် ၎င်း၏ solver ကို လက်ဖြင့် ဖော်မြူလာများနှင့် စစ်ဆေးထားသည် (cantilever ၏ ထိပ်ဖျားကောက်ကွေးမှု PL³/3EI 1 % အတွင်း၊ bar ၏ ဆွဲဆန့်မှု PL/AE တိကျစွာ၊ cantilever ၏ ပထမ frequency 3 % အတွင်း၊ plate ရှိ အပေါက်ပတ်ပတ်လည်ရှိ stress)။ သို့သော် အောက်ပါကန့်သတ်ချက်များကို မှတ်ထားပါ:

- **Mesh။** tetrahedra ဖြင့် PartCraft သည် cantilever ၏ ကောက်ကွေးမှုနှင့် bending stress (0.3 % အတွင်း)၊ plate ရှိ အပေါက်ရှိ stress (Kt၊ ~1 % အတွင်း)၊ ဖိအားအောက်ရှိ ထူသော ပိုက် (Lamé၊ 0.3 % အတွင်း) နှင့် ပထမ frequency (0.4 % အတွင်း) ကို စစ်ဆေးသည်။ ဇယားက **mesh quality** (element မျက်နှာများကြား အသေးဆုံးနှင့် အကြီးဆုံး ထောင့်များ; 10° အောက်ဆိုလျှင် element သည် ညံ့သည်) နှင့် **estimated stress error** ကို ပြသည်: ၎င်းသည် ရာခိုင်နှုန်း အနည်းငယ်ထက် ပိုလျှင် element size သေးငယ်သော်လည်း ပြန်ဖြေရှင်းပါ၊ သို့မဟုတ် **Refine automatically** ကို ပေးပါ။ အပေါက်ပါသော plate နှင့် edge notches နှစ်ခုပါသော bar တွင် အလိုအလျောက် နုပ်ခြင်းက textbook Kt ၏ 1 % အတွင်း ရောက်သည်၊ mesh တစ်ခုလုံးကို နုပ်ရန် လိုအပ်သော unknowns ၏ ခြောက်ပုံတစ်ပုံခန့်ဖြင့်။ voxel cubes ဖြင့် အပေါက် သို့မဟုတ် fillet သည် cube size တွင် ထစ်များ ဖြစ်သောကြောင့် ထိုနေရာရှိ stress သည် ခပ်ကြမ်းသည်။
- **ထက်မြက်သော အတွင်းထောင့်များနှင့် fixed မျက်နှာ၏ edges တွင် အမှန်တကယ် အမြင့်ဆုံး stress မရှိပါ။** ထိုနေရာရှိ တန်ဖိုးက elements များ သေးလာသည်နှင့်အမျှ ဆက်တိုးနေသည်။ ထိုနေရာများမှ အနည်းငယ် ဝေးသော stress ကို ဖတ်ပါ၊ သို့မဟုတ် မော်ဒယ်တွင် ထောင့်ကို ပုံဖော်ပါ။
- **ဖတ်ရမည့် ရလဒ်များ။** von Mises stress၊ displacement နှင့် safety factor အပြင် tetrahedral study သည် **maximum နှင့် minimum principal stress** (ဆွဲဆန့်မှုနှင့် ဖိသိပ်မှု) နှင့် **equivalent strain** ကို ပြသည်။ elements များကို ကြည့်ရန် **Show mesh** ကို အမှန်ခြစ်ပါ။
- **Static studies များသည် linear နှင့် elastic ဖြစ်သည်။** yield နှင့် contact အတွက် အထက်ပါ nonlinear study အမျိုးအစားများကို သုံးပါ; ကြီးမားသော deflections နှင့် fatigue ကို မဖြေရှင်းပါ။ Heat၊ thermal stress နှင့် linear buckling တို့သည် သီးခြား study အမျိုးအစားများ ဖြစ်သည်: [Heat၊ thermal stress နှင့် buckling](topic:thermal-and-buckling) ကို ကြည့်ပါ။
- **Material တိုင်းသည် ဦးတည်ချက်အားလုံးတွင် တူညီသည်။** 3D-printed plastics များသည် ၎င်းတို့၏ အလွှာများကို ဖြတ်ကျော်၍ ပိုအားနည်းသည်၊ မကြာခဏ သုံးပုံတစ်ပုံ သို့မဟုတ် ပိုများသည်။
- ဤသည်မှာ lab build ဖြစ်သည်: အရေးကြီးသော part များကို အခြားနည်းဖြင့် စစ်ပါ။

## ပြင်နေစဉ် အပ်ဒိတ်လုပ်ခြင်း (Live)

Solve block ရှိ **Update while I edit** ကို အမှန်ခြစ်လျှင် Simulation ၏ အဖြေများက သင့်ပြောင်းလဲမှုများကို လိုက်သည်။ dimension၊ load၊ material သို့မဟုတ် environment ကို ပြောင်းလျှင် **quick answer** ကို ချက်ချင်း ပြသည်၊ study ၏ elements ထက် လေးဆကြီးသော elements များဖြင့် ပြုလုပ်ထားသည်; ခဏရပ်လျှင် (တစ်စက္ကန့်ခန့်) study ၏ ကိုယ်ပိုင် **refined answer** က ၎င်းကို အစားထိုးသည်။ ရလဒ်များက မည်သည့်အဖြေကို ကြည့်နေသလဲ ("Quick answer" သို့မဟုတ် "Refined answer") နှင့် element size ကို ပြောသည်။ quick answer သည် ဦးတည်ချက်နှင့် အရွယ်အစားအတွက် ကောင်းသည်: steel cantilever တွင် ကောက်ကွေးမှု၏ refined ထက် 1 % အတွင်းနှင့် stress ၏ ~4 % အတွင်း ရောက်သည်။ သင်အသုံးပြုမည့် နံပါတ်များအတွက် refined ကို ယုံပါ။ Static၊ natural-frequency၊ thermal နှင့် buckling studies များသည် ဤနည်းဖြင့် အလုပ်လုပ်သည်; Live သည် view ဆက်တင်တစ်ခုဖြစ်ပြီး part တွင် မသိမ်းပါ။ သင်ကိုယ်တိုင် နှိပ်သော Solve သည် နောက်တစ်ကြိမ် ပြင်ဆင်မှုအထိ ရှိနေသည်။

## အရင်ဆုံး ဘာ ပျက်မလဲ ရှာရန် (Break it)

static သို့မဟုတ် buckling study အတွက် **Break it** block ရှိ **What breaks first?** ကို နှိပ်ပါ။ PartCraft က study ၏ loads (forces၊ pressures နှင့် ကိုယ်အလေးချိန် အတူတကွ) ကို part ပျက်သည်အထိ scale လုပ်ပြီး အဆိုးဆုံးကို ရှေ့ဆုံးထား၍ စာရင်းပြသည်: **load factor to first yield** (ယနေ့ loads ပေါ်တွင် အမြင့်ဆုံး von Mises stress သည် material ၏ yield သို့ ရောက်သော factor၊ ဘယ်နေရာတွင် ဖြစ်သလဲ အနီရောင် အမှတ်အသားဖြင့်) နှင့် **load factor to buckling** အတူတူ supports နှင့် loads အတွက်။ factor 4.3 ဆိုလျှင် part သည် yield မတိုင်မီ ၎င်း၏ load ၄.၃ ဆ ခံနိုင်သည်; **1 အောက် factor သည် ယခု load ဖြင့် ပျက်နေပြီဖြစ်သည်ဟု ဆိုလိုသည်**၊ ထိုအရာက Problems စာရင်းတွင် error အဖြစ် ပေါ်မည် (အညံ့ဆုံး တွေ့ရှိချက်ကို မှတ်ချက်အဖြစ် ပြသည်၊ အရာအားလုံး ကောင်းသည့်အခါတွင်ပင်)။ factor များသည် သင်၏ element size ဖြင့် tetrahedra ပေါ်ရှိ linear study မှ ထွက်သည်၊ ထို့ကြောင့် ထို study ကောင်းသလောက် ကောင်းသည်: fixed မျက်နှာ သို့မဟုတ် ထက်မြက်သော ထောင့်ရှိ stress တွင် အမှန်တကယ် အမြင့်ဆုံးမရှိ (အောက်တွင် ကြည့်ပါ)၊ ထို့ကြောင့် ထိုနေရာတွင် yield factor သည် ကြိုတင်ကာကွယ်သော ဘက်ဆီ ရောက်မည်။ သင့် assistant က `break_run` tool ဖြင့် တူညီသော စစ်ဆေးမှုကို လည်ပတ်နိုင်သည်။

## ဆက်စပ်

- [Heat၊ thermal stress နှင့် buckling](topic:thermal-and-buckling)
- [Loads မှ ပုံသဏ္ဌာန်ကြီးထွားစေရန် (Generative)](topic:generative-design)
- [အကွာအဝေး၊ ထောင့်များနှင့် mass တိုင်းတာရန်](topic:measure)
- [ဘာကို မတည်ဆောက်ရသေးသလဲ](topic:not-built-yet)
