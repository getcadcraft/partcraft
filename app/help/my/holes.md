---
title: Sketch အမှတ်များတွင် အပေါက်နှင့် counterbore ဖောက်ခြင်း
summary: Sketch ရှိ အမှတ်များကို မျက်နှာတစ်ခုပေါ် ထည့်ပြီး အပေါက်ရိုးရှင်း၊ counterbore၊ countersink သို့မဟုတ် tapped (ISO metric) အပေါက်များကို အမှတ်တိုင်းတွင် ပြုလုပ်ခြင်း၊ အချင်းနှင့် အနက်ကို သတ်မှတ်ခြင်း၊ မှားသော ဦးတည်ချက်ဖြင့် ဖောက်သော အပေါက်များကို ပြင်ခြင်း။
keywords: hole, hole wizard, drill, modelled thread, 3D printing, counterbore, cbore, countersink, csink, tapped hole, thread, tap drill, metric thread, M6, through all, blind hole, bolt hole, points, hole centers, အပေါက်, အပေါက်ဝန်ဘက်, ဖောက်ခြင်း, modelled thread, 3D ပရင့်ထုတ်ခြင်း, counterbore, countersink, tapped hole, ချည်မျှင်, tap drill, metric ချည်မျှင်, M6, အပြည့်ဖောက်, blind hole, bolt အပေါက်, အမှတ်များ, အပေါက်ဗဟို
from: 8e1eef83
---

{{ui:Hole}} သည် sketch ၏ လွတ်သော အမှတ်တစ်ခုစီတွင် အပေါက်တစ်ခုစီ ဖောက်သည်။ လွတ်သော အမှတ်ဆိုသည်မှာ Point tool ဖြင့် ဆွဲထားသော အမှတ်ဖြစ်ပြီး မျဉ်း၏ အဆုံး သို့မဟုတ် စက်ဝိုင်း၏ ဗဟိုမဟုတ်ပါ။

## မျက်နှာတစ်ခုတွင် အပေါက်များ ဖောက်ခြင်း

1. ဖောက်ရမည့် ပြားမျက်နှာကို နှိပ်ပြီး {{ui:Sketch on this face}} ကို ရွေးပါ။
2. {{key:P}} ကို နှိပ်ပြီး အပေါက်တစ်ခုစီ သွားမည့်နေရာကို နှိပ်ပါ။ နေရာသည် အရေးကြီးလျှင် အစွန်းများ သို့မဟုတ် origin မှ အမှတ်များကို အတိုင်းအတာချပါ ([Fully define a sketch](topic:relations-dimensions) ကို ကြည့်ပါ)။
3. {{ui:Exit}} ကို ရွေးပါ။
4. {{ui:Hole}} ကို ရွေးပါ။

အပေါက်များသည် အစိတ်အပိုင်းကို ဖောက်သည်၊ အချင်း 6 mm။ ညာဘက် panel တွင် **Holes** ကို ပြသသည်: ဘယ်လောက် ပြုလုပ်ပြီးပြီလဲ၊ "one per sketch point"။

**အပေါက်တစ်ခု၊ မြန်မြန်:** အပေါက်သွားမည့် ပြားမျက်နှာကို နှိပ်ပြီး ညာဘက် panel တွင် {{ui:Hole here}} ကို ရွေးပါ။ PartCraft က သင်နှိပ်ထားရာ နေရာတွင် အမှတ်တစ်ခုပါသော မျက်နှာပေါ် sketch တစ်ခုနှင့် အစိတ်အပိုင်းကို ဖောက်သော Hole ကို တစ်ဆင့်တည်း ထည့်သည်။ ချက်ချင်း နံပါတ်ရိုက်ပြီး {{key:Enter}} ကို နှိပ်ပါ၊ ၎င်း၏ အချင်းအတွက်။ အတိအကျ နေရာချရန် sketch အသစ်ကို ဖွင့်ပြီး အမှတ်ကို အတိုင်းအတာချပါ။

**အသုံးပြုမည့် sketch:** သင် ယခုပိတ်လိုက်သော သို့မဟုတ် ရွေးထားသော sketch; မဟုတ်လျှင် လွတ်သော အမှတ်များရှိသော နောက်ဆုံး အသုံးမပြုသေးသော sketch။ တစ်ခုမှ မရှိလျှင်: "Make a sketch with points where the holes go first (Sketch on a face, then Point)."

## ဆက်တင်များ

| ဆက်တင် | ရွေးချယ်မှုများ | မူရင်း |
|---|---|---|
| **Type** | Simple၊ Counterbore၊ Countersink၊ Tapped (ISO metric) | Simple |
| **Diameter (mm)** | အပေါက်၏ အချင်း | 6 |
| **Through all** | အမှန်ခြစ်ထားလျှင်: အစိတ်အပိုင်းကို ဖြတ်ဖောက်သည်။ blind အပေါက်အတွက် ဖြုတ်ပါ | အမှန်ခြစ်ထား |
| **Depth (mm)** | Through all ဖြုတ်ထားလျှင် ပြသည် | 10 |
| **Counterbore ⌀** | Counterbore အတွက် ပြသည်: ပိုကျယ်သော recess ၏ အချင်း | 11 |
| **Counterbore depth** | Counterbore အတွက် ပြသည် | 6 |
| **Reverse direction** | sketch ပြား၏ တစ်ဖက်သို့ ဖောက်သည် | ပိတ် |

အပေါက်များသည် ပစ္စည်းထဲသို့ ဖောက်ဝင်ပြီး sketch ပြားနှင့် ထောင့်မှန်ဖြစ်သည်။ blind အပေါက်၏ အနက်ကို sketch ပြားမှ တိုင်းသည်; ၎င်း၏ အောက်ခြေသည် ပြားညီသည်။

## Counterbore ပါသော bolt အပေါက်

1. အထက်ပါအတိုင်း အပေါက်များ ပြုလုပ်ပါ။
2. **Type** ကို **Counterbore** ဟု သတ်မှတ်ပါ။
3. **Diameter (mm)** ကို `6.6` (M6 bolt အတွက် clearance)၊ **Counterbore ⌀** ကို `11` နှင့် **Counterbore depth** ကို `6.5` ဟု သတ်မှတ်ပါ။

counterbore သည် အပေါက်ထက် ပိုကျယ်ရမည် ("The counterbore must be wider than the hole.") နှင့် blind အပေါက်အတွက် ထိုအပေါက်ထက် ပိုတိမ်ရမည် ("The counterbore must be shallower than the hole.")။

## Bolt circle

ဗဟိုတစ်ခုပတ်လည် ညီမျှစွာ နေရာချထားသော အပေါက်များအတွက် **တစ်ခု** ကို ဖောက်ပြီး pattern လုပ်ပါ: Hole အင်္ဂါရပ်ကို ရွေးပြီး {{ui:Circular}} ကို ရွေးပါ ([Pattern and mirror features](topic:patterns-mirror) ကို ကြည့်ပါ)။ အပေါက်၏ အရွယ်အစားကို ပြောင်းလျှင် pattern က လိုက်ပြောင်းသည်။

## အပေါက်များ မှားသော ဦးတည်ချက်သို့ သွားလျှင်

- "There is nothing to drill on that side of the sketch. Try reversing the direction." sketch သည် ပစ္စည်း၏ အဝေးဘက်တွင် ရှိသည်။ **Reverse direction** ကို အမှန်ခြစ်ပါ။
- "Put sketch points where the holes go (Point tool), then make the hole." sketch တွင် လွတ်သော အမှတ် မရှိပါ။ မျဉ်းအဆုံးနှင့် စက်ဝိုင်းဗဟိုများသည် ရေတွက်မည်မဟုတ်ပါ။
- "There is nothing to drill yet." အပေါက် ဖောက်ရန် solid လိုအပ်သည်။ ဦးစွာ boss တစ်ခု ပြုလုပ်ပါ။

## Assembly များတွင် အပေါက်များ

အပေါက်တိုင်းတွင် ဝင်ရိုးရှိသည်။ assembly တွင် **Centre on** က joint ကို အပေါက်၏ ဝင်ရိုးပေါ်တွင် ထားနိုင်သည်၊ "Hole1, hole 2" ဟု စာရင်းပြုစုသည်၊ ထို့ကြောင့် ဝက်သံ သို့မဟုတ် bolt အစိတ်အပိုင်းသည် ၎င်းနှင့် ကိုက်ညီသည်။ [Build an assembly](topic:build-assembly) ကို ကြည့်ပါ။

## Countersink အပေါက်များ

**Type** ကို **Countersink** ဟု သတ်မှတ်ပြီး **Countersink ⌀** (မျက်နှာပြင်တွင်) နှင့် **Countersink angle** ကို သတ်မှတ်ပါ: 90° (ISO metric flat-head screw များ) သို့မဟုတ် 82° (လက်မ screw များ)။ countersink အချင်းကို screw ထုတ်လုပ်သူ၏ဒေတာမှ ယူပါ (screw ဦးထုပ်၏ အချင်းထက် အနည်းငယ်ပိုသည်)။ ကုန်းကောက်၏ မျက်နှာကို panel များတွင် "countersink" ဟု အမည်ပေးသည်။

## Tapped အပေါက်များ

**Type** ကို **Tapped (ISO metric)** ဟု သတ်မှတ်ပြီး **Thread** ကို ရွေးပါ၊ M2 မှ M24 coarse။ အပေါက်ကို အောက်ပါဇယားမှ tap drill အရွယ်အစားဖြင့် ဖောက်သည် (အမည်ပေးထားသော အချင်းနှုတ် pitch၊ ISO 2306 က 6H ချည်မျှင်အတွက် စာရင်းပြုစုသည့်အတိုင်း drill စီးရီးသို့); **Diameter (mm)** အကွက်ကို မသုံးပါ။ blind အပေါက်အတွက် **Thread depth (mm)** က ချည်မျှင်အနက်ကို သတ်မှတ်သည်။

| Thread | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pitch | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Tap drill ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

ချည်မျှင်သည် အစပိုင်းတွင် **cosmetic** ဖြစ်သည်: မော်ဒယ်တွင် ဖောက်ထားသော အပေါက်ရှိပြီး view က ချည်မျှင်၏ major အချင်းကို ဖြတ်စီးသော စက်ဝိုင်းများအဖြစ် ဆွဲသည်၊ ပုံစာရွက်က မှတ်ချက်အဖြစ် ခေါ်ဆိုချက်ကို ထည့်သည်၊ ဥပမာ "4× M8×1.25 - 6H, thread through"။ STEP က ဖောက်ထားသော အပေါက်ကိုသာ export လုပ်သည်။

3D printing အတွက် အမှန်တကယ် helical ချည်မျှင်ကို အပေါက်ထဲ ဖြတ်ရန် **Modelled** ကို အမှန်ခြစ်ပါ။ **Clearance (mm)** က အားလုံးပတ်လည် ထိုမျှ ပိုကြီးစေသည်၊ ထို့ကြောင့် ပရင့်ထုတ်ထားသော bolt ဝင်သည်; 0.1 မှ 0.2 mm က ပရင်တာအများစုအတွက် သင့်တော်သည်။ ခေါ်ဆိုချက်သည် ထို့နောက် "(modelled)" ဖြင့် အဆုံးသတ်သည်။ [Threads on shafts and bores, drawn or modelled](topic:threads) ကို ကြည့်ပါ၊ ၎င်းက ရိုးတံများပေါ်တွင်လည်း ချည်မျှင်ထည့်ပေးသည်။

:::note
Counterdrilled အပေါက်များ၊ လက်မ ချည်မျှင်များနှင့် ပိုက် ချည်မျှင်များကို ယခုမတည်ဆောက်ရသေးပါ။
:::
