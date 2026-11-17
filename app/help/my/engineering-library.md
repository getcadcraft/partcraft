---
title: အင်ဂျင်နီယာ စာကြည့်တိုက်
summary: စာအုပ် ပုံသေနည်းများကို ဖတ်နိုင်သော script များအဖြစ်၊ SI ယူနစ်ဖြင့်၊ ရလဒ်တိုင်းကို ၎င်း၏ရင်းမြစ်နှင့်အတူ: pipe နှင့် channel flow၊ အပူလွှဲပြောင်းမှုနှင့် heat exchanger များ၊ pressure ပစ္စည်းများ၊ gas dynamics၊ ရေနှင့် လေ၏ ဂုဏ်သတ္တိများ၊ ပစ္စည်းများနှင့် စစ်ဆေးထားသော ယူနစ်များ။ အတွက်အဘယ်ကောင်းသလဲနှင့် ဘယ်နေရာတွင် ရပ်သလဲ။
keywords: engineering, library, units, Darcy-Weisbach, Colebrook, Reynolds, friction factor, Dittus-Boelter, Gnielinski, NTU, effectiveness, LMTD, fin, Barlow, Lame, nozzle, isentropic, Mach, choked flow, water, air, properties, material, sources, စာကြည့်တိုက်, ယူနစ်, ရင်းမြစ်
from: 786ef967
---

အင်ဂျင်နီယာ စာကြည့်တိုက်သည် Script workspace ၏ စာကြည့်တိုက် (`craftlib/eng`) ရှိ script အစုအဝေးဖြစ်သည်။ Script တစ်ခုစီသည် ထိပ်မှအောက်သို့ ဖတ်နိုင်သော function တစ်ခု ဖြစ်ပြီး ၎င်း၏ **နည်းလမ်း**၊ **ယူနစ်များ**၊ **ကန့်သတ်ချက်များ**၊ **ကိုးကားချက်များ** နှင့် အလုပ်လုပ်သော နံပါတ်ဖြင့် **စစ်ဆေးချက်** ပါသော header ရှိသည်။ ၎င်းတို့သည် SI ယူနစ်ကို အမြဲသုံးပြီး **ယူနစ်** နှင့် **ရင်းမြစ်** ပါသော ပမာဏများကို ပြန်ပေးသဖြင့် data sheet က နံပါတ်တိုင်း ဘယ်ကရလာသလဲ ပရင့်ထုတ်နိုင်သည်။

## စစ်ဆေးထားသော ယူနစ်များ

`to_si(10, 'bar', 'Pa')` သည် တန်ဖိုးကို ပြောင်းပေးပြီး အခြားအရာကို တိုင်းသော ယူနစ် (pressure မျှော်လင့်ထားစဉ် အရှည်) ကို ငြင်းသည်။ `from_si`၊ `unit_convert(1, 'bar', 'psi')` နှင့် `unit_kind('W/(m K)')` ("thermal conductivity") တို့သည် အလားတူ လုပ်ဆောင်သည်။ `temp_k(25, 'C')` နှင့် `temp_from_k` သည် အပူချိန်များကို ပြောင်းပေးသည် (အပူချိန်များတွင် offset ရှိသည်)။

## ဂုဏ်သတ္တိများ

- `fluid('water', T)` နှင့် `fluid('air', T, p)`: သိပ်သည်းဆ၊ viscosity၊ conductivity၊ specific heat၊ Prandtl number။ ရေ 0 မှ 100 °C၊ လေ 250 မှ 600 K; ထိုအပြင်တွင် extrapolate မလုပ်ဘဲ ရပ်သည်။
- `material('ss304')`: Young's modulus၊ Poisson's ratio၊ သိပ်သည်းဆ၊ yield၊ conductivity၊ specific heat၊ expansion: Simulation နှင့် တူညီသော data sheet များမှ အခန်းအပူချိန်တန်ဖိုးများ။ အမှန်တကယ် ဒီဇိုင်းတွင် supplier ၏ လက်မှတ်ရေးထိုးထားသော ကိန်းဂဏန်းများကို သုံးပါ။ အပူချိန် ကွေးများ မတည်ဆောက်ရသေးပါ။

## ပိုက်နှင့် channel များတွင် flow

`reynolds`၊ `hydraulic_diameter`၊ `friction_factor` (laminar ပြီးနောက် turbulent flow အတွက် Colebrook ညီမျှခြင်း; 2300 မှ 4000 အကွာအဝေးတွင် ယုံကြည်ရသော ပုံသေနည်း မရှိပြီး ထိုသို့ ပြောသည်)၊ `darcy_weisbach`၊ `minor_loss`၊ `pipe_flow` (ပတ်ပိုက်၊ အားလုံးတစ်ပြိုင်တည်း) နှင့် `rect_channel` (Shah and London fit ဖြင့် laminar ထောင့်မှန်ဆိုင်ရာ duct များ)။

## အပူလွှဲပြောင်းမှု

`nusselt_dittus_boelter`၊ `nusselt_gnielinski`၊ `nusselt_tube` (laminar သို့မဟုတ် turbulent ကို ရွေးပြီး correlation ကို အမည်ပေးသည်)၊ `htc`၊ `fin_efficiency`၊ `lmtd`၊ `effectiveness` နှင့် `ntu_for` (counterflow၊ parallel၊ shell-and-tube၊ crossflow နှင့် ပြောင်းလဲသော stream တစ်ခုအတွက် effectiveness-NTU ဆက်စပ်မှုများ) နှင့် `hx_size` (duty လိုအပ်သော UA အရွယ်; duty မပြည့်မီနိုင်လျှင် ဘယ်လောက်ဖြစ်နိုင်သလဲ ပြောသည်)။

## Pressure ပစ္စည်းများ

`allowable_stress` (safety factor ဖြင့် yield ကို ခွဲခြားသည်)၊ `wall_thin_cylinder`၊ `barlow`၊ `wall_thick_cylinder` (Lamé၊ hoop သို့မဟုတ် shear criterion ဖြင့်) နှင့် `wall_sphere`။ ၎င်းတို့သည် စာအုပ် margin များ ဖြစ်ပြီး **pressure-vessel code တွက်ချက်မှု မဟုတ်ပါ**: corrosion allowance၊ joint efficiency သို့မဟုတ် code factor မပါပါ။

## Gas dynamics

`isentropic` (Mach နံပါတ်တစ်ခုတွင် အချိုးများ)၊ `mach_from_area`၊ `choked_flow`၊ `throat_area` နှင့် `exit_mach`၊ ပွတ်တိုက်မှု၊ အပူ သို့မဟုတ် shock မပါသော perfect gas အတွက်။

## ရလဒ်ကို စစ်ဆေးခြင်း

`check_stress`၊ `check_thermal` နှင့် `check_flow` တို့သည် script မှ ဖန်တီးထားသော အစိတ်အပိုင်းပေါ်တွင် PartCraft ၏ ကိုယ်ပိုင် stress၊ conduction နှင့် flow solver များကို run ပြီး အများဆုံး stress နှင့် displacement၊ အပူချိန်နှင့် အပူစီးဆင်းမှု၊ နှင့် channel network ၏ permeability ကို ပြန်ဖတ်သည်။ ၎င်းတို့သည် solver များကို ဘာမျှ မပြောင်းပါ။ Stress နှင့် အပူချိန် စစ်ဆေးချက်များသည် voxel သုံးသဖြင့် ကွေးသော မျက်နှာသည် အဆင့်ဆင့် ပုံစံဖြစ်ပြီး ထောင့်ချိုးမြင့် အတွင်းထောင့် သို့မဟုတ် အမှတ်တစ်ခုတည်း load အောက်ရှိ stress သည် voxel အရွယ်အပေါ် မူတည်သည်။
