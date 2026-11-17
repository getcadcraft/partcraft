---
title: ခွဲခြမ်းစိတ်ဖြာမှု စာကြည့်တိုက်
summary: Script workspace ရှိ ဖတ်ရလွယ်သော ခွဲခြမ်းစိတ်ဖြာမှု script များ၏ စာကြည့်တိုက်: အုပ်စုတစ်ခုစီတွင် ပါဝင်သည့်အရာများ၊ function ကို read-only ဖြင့် ဖွင့်ခြင်း၊ method၊ references နှင့် check ပါဝင်သော header၊ ကိုယ်ပိုင်မိတ္တူ ပြုလုပ်ခြင်း၊ နှင့် မိတ္တူက library function ကို ဘယ်လို အစားထိုးသည်။
keywords: စာကြည့်တိုက်, craftlib, ခွဲခြမ်းစိတ်ဖြာမှု, electromagnet, static, modal, thermal, topology optimization, top88, SIMP, electromagnetics, electrostatics, magnetostatics, fluid, lattice Boltzmann, LBM, mesh, voxel, tetrahedra, references, check, verification, မိတ္တူ, အရိပ်
from: bf993859
---

ခွဲခြမ်းစိတ်ဖြာမှု စာကြည့်တိုက်သည် script များစုစည်းမှု ဖြစ်ပြီး တစ်ခုစီသည် အပေါ်မှအောက်သို့ ဖတ်နိုင်သော function တစ်ခု ဖြစ်သည်: stiffness matrix ကို မည်သို့ စုဆောင်းသည်၊ boundary condition များကို မည်သည့်နေရာတွင် ထည့်သည်၊ solver မည်သည်ကို run သည်၊ ရလဒ်များကို မည်သို့ တွက်ချက်သည်။ ၎င်းအတွင်းရှိ မည်သည့်အရာမျှ ဝှက်ထားခြင်း မရှိပါ; မြန်နှုန်းမြင့် အတွင်းပိုင်း loop များ (element matrix၊ sparse solver၊ meshing) တို့သာ built-in ဖြစ်သည်။

## ဥပမာတစ်ခုဖြင့် စတင်ပါ

**ဥပမာများ** အုပ်စုတွင် စာကြည့်တိုက်ကို အစမှအဆုံး အသုံးပြုသည့် script တိုတိုငါးခု ရှိသည်။ တစ်ခုကို နှိပ်ပြီး {{ui:Open (read-only)}} ကို နှိပ်ပါ၊ ထို့နောက် {{key:F5}}: တစ်ခုစီသည် view ကို ရှင်းပြီး canvas ပေါ်တွင် ရလဒ်တစ်ခုနှင့် အောက်ခြေ ပြသမှုများတွင် plot တစ်ခုကို ပြသသည်။

| ဥပမာ | ပြသသည့်အရာ |
|---|---|
| Cantilever ဖိအား | 100 × 10 × 10 mm သံမဏိ ဘားတစ်ခုကို ထိပ်ဖျား 100 N load ဖြင့် ဖိထားသည်: ပုံပျက်သွားသော ဘားပေါ်ရှိ von Mises ဖိအား၊ နှင့် element အရွယ်အစား လေးမျိုးတွင် beam theory နှင့် နှိုင်းယှဉ်သော ထိပ်ဖျား ပြိုဆင်းမှု (plot ဖြင့်) |
| MBB beam topology | ကလासစ် 60 × 20 topology optimization: ဒီဇိုင်း ဖွဲ့စည်းလာပုံ၊ compliance ကျဆင်းပုံ၊ နောက်ဆုံး layout (iteration 94၊ compliance 203.19) |
| Capacitor field | အကျယ် 4 mm၊ အကွာအဝေး 1 mm ရှိ ပြားနှစ်ခု: potential နှင့် field၊ fringing ပါသော capacitance နှင့် စံ တန်ဖိုး နှင့် Palmer ဖော်မြူလာ |
| Channel flow | Channel ထဲရှိ တိုင်တစ်ခုကို ဖြတ်သွားသည့် Lattice Boltzmann စီးဆင်းမှု: velocity field နှင့် convergence သမိုင်း |
| Electromagnet | လေကွာဟချက်နှင့် ဝါယာအတောင့်ပါသော C ပုံ သံဓာတ်ကျောက်အိမ်: flux density၊ လေကွာဟချက်ရှိ field ကို magnetic-circuit ဖော်မြူလာနှင့် နှိုင်းယှဉ်ခြင်း၊ inductance နှင့် လေကွာဟချက်ဖြတ်၍ ဆွဲအား။ [Magnetic fields in 2-D](topic:magnetic-fields-2d) တွင် လမ်းညွှန်ထားသည် |
| Permanent magnet | ဝါယာအတောင့်အစား အမြဲတမ်းသံလိုက်ပါသော တူညီသည့် core: သံလိုက်၏ working point၊ magnetic circuit နှင့် နှိုင်းယှဉ်သော လေကွာဟချက်ရှိ field၊ ဘယ်လောက် flux ယိုထွက်သည်၊ ဆွဲအား။ [Magnetic fields in 2-D](topic:magnetic-fields-2d#permanent-magnets) တွင် |

## အုပ်စုများ

| အုပ်စု | Function များ | ၎င်းတို့ လုပ်ဆောင်ပုံ |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | ဘောက်စ်နှင့် ဘူးများကို hexahedra၊ cube သို့မဟုတ် tetrahedra အဖြစ် ပြုလုပ်သည်; မည်သည့် model (part၊ body၊ loaded STL) ၏ cube သို့မဟုတ် tetrahedra; element volume နှင့် quality; plane သို့မဟုတ် face ပေါ်ရှိ node များကို ရွေးချယ်ခြင်း |
| Static ဖိအား | `static_voxel`, `static_tet` | Cube များ သို့မဟုတ် 10-node tetrahedra များပေါ်ရှိ linear static ဖိအား: displacement၊ ဖိအား၊ von Mises၊ reaction |
| Frames | `frame3d` | Direct stiffness method ဖြင့် beam၊ column နှင့် brace များ၏ 3D frame: end release၊ support နှင့် spring၊ member ပေါ်ရှိ load များ; displacement၊ reaction၊ member end force။ DetailCraft နှင့် BimCraft ၏ {{ui:Export as CraftScript}} သည် ၎င်းအတွက် model တစ်ခုလုံးကို ရေးပေးသည်။ ခွဲခြမ်းစိတ်ဖြာ အကူအညီသာ ဖြစ်ပြီး code စစ်ဆေးမှု မဟုတ်ပါ |
| တုန်ခါမှု | `modal_tet` | သဘာဝ frequency များနှင့် mode shape များ |
| အပူ | `heat_steady`, `heat_transient`, `heat_system` | Fixed temperature၊ heat input၊ generation၊ flux နှင့် convection ဖြင့် steady နှင့် transient conduction |
| Topology optimization | `top88`, `top99`, `topopt3d` | ထုတ်ဝေထားသော 88 နှင့် 99 လိုင်း 2-D ကုဒ်များ၊ နှင့် cube များပေါ်ရှိ 3-D ဖြင့် တူညီသော နည်းလမ်း |
| လျှပ်သံလိုက်ဗေဒ | `poisson2d`, `magnetostatic2d` | 2-D electrostatics (potential၊ field၊ capacitance၊ charge) နှင့် magnetostatics (vector potential၊ flux density၊ အမြဲတမ်းသံလိုက်များ) |
| အရည်စီးဆင်းမှု | `lbm2d`, `lbm3d` | Lattice Boltzmann စီးဆင်းမှု: 2-D ကို script ထဲတွင် ရေးထားပြီး 3-D ကို PartCraft ၏ ကိုယ်ပိုင် flow kernel ဖြင့် run သည် |

Function တိုင်း၏ header က ၎င်း၏ argument အတိအကျကို ပေးသည်။ Unit များသည် header က အခြားပြောထားခြင်း မရှိလျှင် PartCraft ၏ study များ၏ unit များ ဖြစ်သည်: millimetre၊ newton၊ megapascal၊ density အတွက် ကုဗ millimetre တစ်ခုလျှင် tonne၊ အပူအတွက် watt နှင့် kelvin။ လျှပ်သံလိုက်နှင့် lattice Boltzmann function များသည် မည်သည့် ကိုက်ညီသော unit ဖြင့်မဆို အလုပ်လုပ်သည်; ၎င်းတို့ header တွင် မည်သို့ဟု ပြောထားသည်။

## စာကြည့်တိုက်ကို စစ်ဆေးပုံ

Function တိုင်း၏ header သည် **check** ဖြင့် အဆုံးသတ်သည်: အဖြေသိရှိထားသော အသေးစား case တစ်ခု။ PartCraft ၏ စမ်းသပ်မှုများက ၎င်းတို့အားလုံးကို run ပြီး PartCraft တွင် တူညီသော အလုပ်အတွက် ၎င်းတို့၏ study ရှိလျှင် script ၏ အဖြေကို ထို mesh တစ်ခုတည်းပေါ်ရှိ study နှင့် နှိုင်းယှဉ်သည်:

- Cantilever ၏ ထိပ်ဖျား ပြိုဆင်းမှုကို beam theory နှင့် (cube များဖြင့် 0.2 % အတွင်း၊ tetrahedra များဖြင့် 0.05 % အတွင်း) နှင့် တူညီသော mesh ပေါ်ရှိ **Simulation** workspace ၏ solver များနှင့် (သိသာသော ဂဏန်းများစွာအထိ တူညီသည်)။
- Cantilever ၏ ပထမ frequency ကို beam theory နှင့် (တိုသော beam အတွက် မျှော်လင့်ထားသည့်အတိုင်း 0.24 % နိမ့်သည်) နှင့် **Simulation** ၏ modal solver နှင့်။
- အပူ: အပူပေးထားသော ပြား နံရံကို အတိအကျ၊ lumped-capacity ဖော်မြူလာအတိုင်း အေးသွားသော သေးငယ်သည့် body၊ နှင့် slab ၏ အပူချိန် သီအိုရီအတိုင်း ပျောက်ကွယ်သွားပုံ။
- Topology optimization: `top88` သည် စာတမ်း၏ iteration 94 နှင့် compliance 203.1925 (density filter ဖြင့် 218.8032) ကို ပြန်ထုတ်ပေးသည်; `topopt3d` သည် တူညီသော setting များဖြင့် **Generative** workspace နှင့် တူညီသော compliance တွင် ပြီးဆုံးသည်။
- Capacitor ၏ capacitance နှင့် ရှည်သော solenoid ၏ field ကို ၎င်းတို့၏ စာအုပ်တန်ဖိုးများနှင့်၊ electromagnet ၏ လေကွာဟချက် field ကို magnetic-circuit ဖော်မြူလာနှင့်၊ အမြဲတမ်းသံလိုက်များကို လေထဲရှိ ဝိုင်းသံလိုက်နှင့် iron keeper ဖြင့် ပိတ်ထားသော သံလိုက်တို့နှင့် နှိုင်းယှဉ်ခြင်း။
- Channel စီးဆင်းမှုကို အတိအကျ parabolic ပရိုဖိုင်နှင့် နှိုင်းယှဉ်ခြင်း။

## Function တစ်ခု ဖတ်ပုံ

1. Script panel ၏ **Library** tab ကို ဖွင့်ပါ။
2. Function တစ်ခုကို နှိပ်ပါ။ ၎င်း၏ header တွင် ပြသသည်များ: ၎င်းတွက်ချက်သည့်အရာ၊ နည်းလမ်း၊ unit များ၊ ယူဆချက်များနှင့် ကန့်သတ်ချက်များ၊ **references** (စာအုပ် သို့မဟုတ် စာတမ်း၊ equation နံပါတ်များဖြင့်) နှင့် **check** — PartCraft ၏ ကိုယ်ပိုင် စမ်းသပ်မှုများက run သည့် အဖြေသိရှိထားသော အသေးစား case။
3. {{ui:Open (read-only)}} သည် script တစ်ခုလုံးကို နယ်နိမိတ် အစက်စက်ရှိ tab တစ်ခုတွင် ဖွင့်သည်။ ၎င်းကို run နိုင်သည်၊ အစိတ်အပိုင်းများကို ရွေးပြီး run နိုင်သည်၊ သို့သော် ပြင်၍ မရပါ။

## တစ်ခုကို ပြင်ပုံ

{{ui:Make a copy}} ကို နှိပ် (သို့မဟုတ် read-only tab ၏ အထက်ရှိ **ပြင်ရန် မိတ္တူပွားရန်** ကို နှိပ်ပါ)။ မိတ္တူသည် သင့် part ထဲရှိ နာမည်တူ script တစ်ခု ဖြစ်သဖြင့် part နှင့်အတူ သိမ်းဆည်းသည်၊ ထို့ကြောင့် **ထို function ကို ခေါ်သော call တိုင်းသည် ယခု သင့်မိတ္တူကို အသုံးပြုသည်** — editor က ၎င်းကို script ၏ အထက်တွင် ပြောပြသည်။ နှစ်ခုလုံးကို ထားရန် မိတ္တူကို အမည်ပြောင်းပါ။

## တစ်ခုကို အသုံးပြုပုံ

မည်သည့် script မှမဆို library function ကို built-in function ကဲ့သို့ ၎င်း၏ နာမည်ဖြင့် ခေါ်ပါ:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

ရလဒ်များသည် workspace ထဲတွင် တန်ဖိုးများအဖြစ် ပြန်လာသည်; ၎င်းပြသသော plot များနှင့် field များသည် view နှင့် sub-display များတွင် ပေါ်လာသည်။

ဥပမာ ဖွင့်ထားသော part ၏ static ခွဲခြမ်းစိတ်ဖြာမှုသည် စာကြောင်းအနည်းငယ်ဖြင့် ရေးနိုင်သည်:

```
v = voxel_mesh(part(), 2);                   % 2 mm cubes
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hold the bottom
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N down on the top
r = static_voxel(v, 210000, 0.3, bc);       % steel
```

`r` တွင် displacement၊ ဖိအားနှင့် reaction များ ပါဝင်သည်; von Mises ဖိအားကို ပုံပျက်သွားသော part ပေါ်တွင် ဆွဲသည်။ ကွေးသော part များအတွက် `tet_mesh` နှင့် `static_tet` ကို အသုံးပြုပါ၊ ၎င်းတို့က မျက်နှာပြင်တစ်ခုလုံးကို load နှင့် hold လုပ်နိုင်သည် (`face_nodes`)။

:::note
စာကြည့်တိုက်၏ function များကို CraftScript ဖြင့် ရေးထားပြီး Lua script က ၎င်းတို့ကို built-in function များကဲ့သို့ `cs` မှတစ်ဆင့် ခေါ်သည်: `cs.static_tet(t, 200000, 0.3, bc)` ([Lua scripts](topic:craftscript-lua) ကို ကြည့်ပါ)။ Function တစ်ခုစီသည် material တစ်ခုနှင့် load case တစ်ခုကိုသာ ဖြေရှင်းသည်; ခေါင်းစီးများတွင် မပါဝင်သည်များကို ဖော်ပြထားသည်။
:::
