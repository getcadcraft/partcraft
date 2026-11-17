---
title: အပူ၊ thermal stress နှင့် buckling
summary: Fixed temperature၊ heat flux၊ heat power၊ convection နှင့် radiation တို့ဖြင့် ပစ္စည်းထဲရှိ အပူချိန်များကို (တည်ငြိမ် သို့မဟုတ် အချိန်အလိုက်) ရှာပါ၊ အပူချိန် ပြောင်းလဲမှုဖြင့် stress study ကို load လုပ်ပါ၊ ပါးလျသော ပစ္စည်း buckle ဖြစ်သော load ကို ရှာပါ၊ နည်းလမ်းတစ်ခုစီက ဘာကို ပြနိုင်ပြီး ဘာကို မပြနိုင်သည်ကိုလည်း ပါဝင်ပါသည်။
keywords: thermal, heat transfer, အပူ, temperature, conduction, convection, film coefficient, radiation, emissivity, heat flux, heat power, heat generation, heat sink, transient, time, cooling, heating, Crank-Nicolson, implicit Euler, heat balance, thermal stress, thermal stress over time, transient thermal stress, quench, thermal shock, stress history, worst time, thermal expansion, expansion coefficient, buckling, Euler buckling, load factor, critical load, column, slender, eigenvalue
from: 1a1b7545
---

ဤ study များသည် Simulation workspace တွင် static stress နှင့် natural frequencies ဘေးတွင် ရှိပါသည် ([Check stress and deflection](topic:simulation) ကို ကြည့်ပါ)။ panel ရှိ **Type** အကွက်တွင် ရွေးပါ။ ၎င်းတို့သည် တူညီသော cube mesh နှင့် material စာရင်းကို သုံးပါသည်; library material တိုင်းတွင် thermal conductivity၊ specific heat နှင့် expansion coefficient ရှိပြီး (handbook တန်ဖိုးများ၊ **Properties** အောက်တွင် ပြသည်)။

## Thermal: အပူသည် ဘယ်သို့ သွားသလဲ?

1. **Type** အဖြစ် **Thermal (heat transfer)** ကို ရွေးပါ။
2. Panel ရှိ **Add** စာရင်းမှ thermal condition များကို ထည့်ပြီး ၎င်းတို့၏ မျက်နှာများကို နှိပ်ပါ (supports နှင့် loads ကဲ့သို့):
   - **Fixed temperature**: မျက်နှာကို °C ဖြင့် အပူချိန်တစ်ခုတွင် ထိန်းထားသည်။
   - **Heat flux**: မျက်နှာထဲသို့ စီးဝင်သော W/m² (အနုတ်ဆိုလျှင် ထွက်သည်)။ ၎င်းသည် cube များ လှေကားထစ်ပုံ ဖြစ်နေသော်လည်း မျက်နှာ၏ အမှန် ဧရိယာပေါ်တွင် သက်ရောက်သည်။
   - **Heat power**: W ဖြင့် စုစုပေါင်း၊ ရွေးထားသော မျက်နှာများကြား ဧရိယာအလိုက် မျှဝေသည်။ heater သို့မဟုတ် ပါဝါသိရှိသော chip အတွက် သုံးပါ။
   - **Convection**: အပူချိန်ရှိ လေ သို့မဟုတ် အရည်သည် h W/(m²·K) ဖြင့် အပူကို သယ်ဆောင်သည်။ ပုံမှန် h: ငြိမ်သော လေ 5–10၊ ပန်ကာ 25–100၊ ရေ 500–10,000။ PartCraft သည် h ကို တွက်ချက်ခြင်း မရှိပါ- ဤ study တွင် အရည် စီးဆင်းမှု မရှိပါ။
   - **Radiation**: မျက်နှာသည် အပူချိန်ရှိ ပတ်ဝန်းကျင်သို့ ရောင်ခြည်ထုတ်သည်၊ emissivity 0 မှ 1 အထိ။ ၎င်းသည် **linearised** (ရောင်ခြည်ကို အပူချိန်အပေါ် မူတည်သော coefficient အဖြစ် ရေးပြီး ငြိမ်သည်အထိ ထပ်ဖြေသည်) ဖြစ်ပြီး ပတ်ဝန်းကျင်သို့သာ သွားသည်- မျက်နှာများကြား အပူ မလဲလှယ်ပါ။
3. **Heat generation** (W/m³) က ပစ္စည်းတစ်ခုလုံးကို အတွင်းမှ အပူပေးသည်၊ ဥပမာ resistive ပစ္စည်း။
4. **Solve** ကို နှိပ်ပါ။ ပစ္စည်းကို အပူချိန်အလိုက် အရောင်ခွဲပါမည်; အပူ စီးဆင်းရာကို ကြည့်ရန် **Show** တွင် **Heat flux** ကို ရွေးပါ။ နှစ်ခုစလုံးကို ဖတ်ရန် ပစ္စည်းပေါ် ညွှန်ပါ။

တည်ငြိမ်သော အပူစီးဆင်းမှုသည် အပူ သွားရာနေရာ လိုအပ်ပါသည်: အနည်းဆုံး fixed temperature၊ convection သို့မဟုတ် radiation တစ်ခု။ အပူ ဝင်သာပြီး ထွက်မသွားသော ပစ္စည်းတွင် တည်ငြိမ်အခြေအနေ မရှိပါ; အစား transient ပြုလုပ်ပါ။

ဇယားသည် အနိမ့်ဆုံးနှင့် အမြင့်ဆုံး အပူချိန်နှင့် နေရာ၊ အကြီးဆုံး heat flux နှင့် **heat balance** ကို ပြသည်: condition တစ်ခုစီမှ ဝင်သော သို့မဟုတ် ထွက်သော အပူ (fixed temperature သည် ထောက်ပံ့ရမည် သို့မဟုတ် စုပ်ယူရမည့် ပမာဏကို ရေတွက်သည်)၊ ထုတ်လုပ်သော အပူ၊ ဝင်/ထွက် စုစုပေါင်းနှင့် **imbalance**။ imbalance သည် ဝင်သော အပူ၏ အနည်းငယ်သာ ဖြစ်သင့်သည်; ကြီးပါက ရလဒ်ကို မယုံကြည်သင့်ပါ။

### အချိန်အလိုက် (transient)

**Transient** ကို အမှန်ခြစ်ပြီး **Start temperature** (ပစ္စည်းတစ်ခုလုံး ထိုအပူချိန်မှ စတင်သည်)၊ **Time span** နှင့် **Time steps** အရေအတွက် ပေးပါ။ **Implicit Euler** သည် တည်ငြိမ်ပြီး **Crank–Nicolson** သည် တူညီသော step များဖြင့် ပိုတိကျသော်လည်း ရုတ်တရက် ပြောင်းလဲပြီးနောက် လှိုင်းလုံး ထနိုင်သည်။ ဖြေပြီးနောက် **Time** slider ကို ဆွဲ၍ အချိန်တိုင်းရှိ အပူချိန်များကို ကြည့်ပါ (အရောင်စကေးသည် အချိန်အားလုံးအတွက် တူညီသည်)။ heat balance တွင် သိုလှောင်ထားသော အပူလည်း ပါဝင်ပါသည်။

## Thermal stress: အပူချိန် ပြောင်းလဲမှုသည် ပစ္စည်းကို ဘာလုပ်သလဲ?

**Static stress** (သို့မဟုတ် **Buckling**) study တွင် **Thermal load** ကို သတ်မှတ်ပါ:

- **Uniform temperature change**: ပစ္စည်းတစ်ခုလုံး ကelvin ဖြင့် နွေး (သို့မဟုတ် အနုတ်ဖြင့် အေး) သည်။
- **Temperatures from thermal conditions**: တူညီသော study သို့ thermal conditions ထည့်ပါ; steady အပူချိန်များကို တူညီသော mesh ပေါ်တွင် ဦးစွာ ဖြေသည်၊ ထို့နောက် ပစ္စည်းသည် α·(T − **stress-free temperature**) အတိုင်း ချဲ့ထွက်သည်။
- **Temperatures over time (transient run)**: thermal conditions ထည့်ပြီး transient thermal study ကဲ့သို့ **Start temperature**၊ **Time span**၊ **Time steps** နှင့် **Time stepping** ကို ပေးပါ။ အပူချိန်များကို တူညီသော mesh (cube သို့မဟုတ် tetrahedra) ပေါ်တွင် အချိန်အလိုက် ဖြေပြီး အချိန်တိုင်း၏ static solve က ထိုအချိန်၏ stress ကို ပေးသည်။ **Stress at**:
  - **The worst time** (စတင်ချိန်): **Stress solves** က run ၏ အချိန်များကို တူညီစွာ ခွဲထားသည် (စတင်ချိန် ပါဝင်၊ ပြောင်းမထားလျှင် 21၊ အများဆုံး 51)။ ရလဒ်များသည် von Mises stress အမြင့်ဆုံး အချိန်တွင် ဖွင့်မည်; ဇယားက ၎င်းကို အမည်ပေးပြီး၊ သေးငယ်သော chart က peak stress ကို အချိန်နှင့် ပြ၊ **Time** slider က ဖြေထားသော အချိန်တိုင်း၏ stress ကို ပြသည် (အရောင်စကေးသည် worst အချိန်၏ စကေးအတိုင်း)။
  - **One chosen time**: အချိန်တစ်ခု၊ သင်ပေးသော **Time (s)** နှင့် အနီးဆုံး time step။ buckling study သည် အမြဲ ရွေးထားသော အချိန်ကို သုံးသည် (မသတ်မှတ်ထားလျှင် run ၏ နောက်ဆုံး)။

Quench (ပူနေသော အရာကို အေးသော အရည်ထဲ နှစ်ခြင်း) သို့မဟုတ် ရုတ်တရက် အပူပေးသော ပစ္စည်းသည် အတွင်းနှင့် မျက်နှာ ကွာခြားမှု အများဆုံးရှိစဉ် stress အများဆုံး ခံရပြီး၊ မကြာခဏ စတင်ချိန်တွင် ဖြစ်ပါသည်။ ထိန်းထားသော အပူချိန်သည် ပထမ အခိုက်အတန့်မှ ရုတ်တရက် ပြောင်းလဲမှုအဖြစ် သက်ရောက်သောကြောင့် အစောဆုံး stress သည် element အရွယ်အစားပေါ် မူတည်သည် (element အနည်းငယ်သာ ပြောင်းလဲမှုကို မြင်သည်)။ ၎င်းကို "အလွန်မြင့်" ဟု ဖတ်ပါ၊ နောက် slider အချိန်များက mesh ဖြေနိုင်သော တန်ဖိုးများကို ကြည့်ပါ။ Stress သည် quasi-static ဖြစ်သည်: inertia မရှိ၊ ရုတ်တရက် ပြောင်းလဲမှုမှ တုန်ခါမှု မရှိပါ။

ပစ္စည်းသည် ကြီးထွားရန် လွတ်လပ်နေလျှင် thermal stress မရှိပါ: ရွေ့မသွားစေရန် လုံလောက်စွာသာ ထိန်းထားပါ (ဥပမာ ထောင့်မှန် မျက်နှာသုံးခု၊ ပွတ်တိုက်မှု မရှိ)။ နံရံနှစ်ခုကြား ညှစ်ခံရလျှင် ပိုမို stress ဖြစ်ပါသည်: rigid နံရံနှစ်ခုကြား 50 K နွေးသော သံမဏိ ဘားသည် ~117 MPa ခန့် ခံရသည်။ thermal loads များသည် ကိုယ်တိုင် ဟန်ချက်ညီသောကြောင့် reactions များသည် mechanical loads ကိုသာ ဟန်ချက်ညီစေသည်။

## Buckling: ပါးလျသော ပစ္စည်း ဘယ်အချိန် ပြိုကျသလဲ?

1. **Type** အဖြစ် **Buckling (linear)** ကို ရွေးပြီး static study ကဲ့သို့ supports နှင့် loads ထည့်ပါ။
2. **Load factors to find** (buckling mode ဘယ်နှစ်ခု) ကို သတ်မှတ်ပါ။
3. **Solve** ကို နှိပ်ပါ။ mode တစ်ခုစီတွင် **load factor** ရှိသည်: သင့် load များ၏ မြှောက်ဆ ဖြစ်ပြီး စံပြပစ္စည်း buckle ဖြစ်သော အချက်။ load factor 3 ဆိုသည်မှာ သင့် load ၏ သုံးဆ; **load factor 1 အောက်ဆိုလျှင် ၎င်းသည် သင်ထည့်ထားသော load အောက်တွင် buckle ဖြစ်သည်**။ ဇယားက factor တစ်ခုစီ၏ စုစုပေါင်း load ကိုလည်း ပေးသည်။ mode shape က ဘယ်လို buckle ဖြစ်မည်ကို ပြသည် (ပမာဏသည် အဓိပ္ပာယ်မရှိပါ)။

**Linear buckling သည် အမှန်တကယ် buckling load ကို အလွန်ခန့်မှန်းသည်။** ၎င်းသည် စံပြပစ္စည်းကို ယူဆသည်: ပြီးပြည့်စုံ ဖောင်း၊ residual stress မရှိ၊ elastic။ အမှန်ပစ္စည်းများတွင် သေးငယ်သော imperfections ရှိပြီး ပထမ yield ဖြစ်နိုင်၊ ပါးလွှာသော shell များသည် linear တန်ဖိုး၏ အစိတ်အပိုင်းတစ်ခုတွင် buckle ဖြစ်နိုင်သည်။ ရက်ရက်ရောရောရှိသော margin ကို သုံးပါ၊ ပါးလွှာသော shell အတွက် load factor သည် 3 အနီး သို့မဟုတ် အောက်ဖြစ်ပါက သတိပေးချက်အဖြစ် သတ်မှတ်ပါ။

## မည်မျှ ယုံကြည်နိုင်သလဲ

PartCraft သည် ဤ solver များကို လက်ဖြင့် formula များနှင့် စစ်ဆေးထားပါသည်: နှစ်ဖက် အပူချိန်ကြား ဘား (တိကျ)၊ cooling fin (0.3 K အတွင်း)၊ ကိုယ်တိုင် အပူပေးသော slab (တိကျ)၊ Crank–Nicolson ဖြင့် အချိန်အလိုက် အေးသော cube (0.1 % အတွင်း)၊ တစ်ဖက်စွန်း ရုတ်တရက် နွေးသော ဘား၊ လွတ်လပ်စွာ နွေးသော ဘား (stress မရှိ၊ ΔL = αLΔT)၊ နံရံကြား ထိန်းထားသော ဘား (σ = −EαΔT)၊ classic series solution နှင့် အချိန်အလိုက် quenched plate (cube များပေါ် 1 % အတွင်း၊ tetrahedra တွင် plate ၏ အလယ်ဗဟို 2.1 %; မျက်နှာတွင် 0.5 %)၊ ရှည်သော run ၏ နောက်ဆုံး အချိန်သည် steady thermal stress နှင့် (သန်းတစ်ခု၏ တစ်ခုအတွင်း တူညီ)၊ နှင့် Euler columns (fixed–free 1 % အတွင်း၊ pinned–pinned 1.5 %)။ အောက်ပါကို မှတ်ထားပါ:

- **ကိန်းသေ material တန်ဖိုးများ။** Conductivity၊ specific heat နှင့် expansion သည် ဤနေရာတွင် အပူချိန်နှင့်အတူ မပြောင်းပါ; ရာဂဏန်း အပူချိန်တွင် 10–30 % ပြောင်းနိုင်သည်။ Stiffness လည်း မပြောင်းပါ။
- **အချိန်အလိုက် stress သည် quasi-static နှင့် elastic**: အချိန်တိုင်းသည် static solve ဖြစ်ပြီး (inertia မရှိ)၊ yield မရှိ၊ ထို့ကြောင့် မျက်နှာကို yield ဖြစ်စေမည့် quench သည် yield ထက် ကြီးသော stress ကို ပြမည်။
- **Convection coefficient များသည် သင့် input ဖြစ်သည်**၊ လေ သို့မဟုတ် ရေ စီးဆင်းမှုမှ တွက်ထားခြင်း မဟုတ်ပါ။
- **Contact resistance မရှိပါ**: ပစ္စည်းသည် solid တစ်ခုတည်း ဖြစ်သည်။
- **Linear buckling သာ**: imperfections မရှိ၊ yield မရှိ၊ buckling ပြီးနောက် အပြုအမူ မရှိ။
- Cube staircase နှင့် ထက်မြက်သော အတွင်းထောင့်များသည် အခြား stress များကဲ့သို့ thermal stress ကို သက်ရောက်သည် ([Check stress and deflection](topic:simulation) ကို ကြည့်ပါ)။
- ဤသည်မှာ lab build ဖြစ်သည်: အရေးကြီးသော ပစ္စည်းများကို အခြားနည်းဖြင့် စစ်ဆေးပါ။

## ဆက်စပ်

- [Check stress and deflection (Simulation)](topic:simulation)
- [What is not built yet](topic:not-built-yet)
