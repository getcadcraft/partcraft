---
title: Sheet metal: flange များနှင့် flat pattern
summary: sketch တစ်ခုမှ sheet metal part စတင်ပါ (ပြားသော plate သို့မဟုတ် ကွေးထားသော profile)၊ thickness၊ bend radius နှင့် K-factor ကို တစ်ကြိမ်သတ်မှတ်ပါ၊ bend reliefs ဖြင့် ၎င်း၏ edges မှ flange များကို ထောင်တက်စေပါ၊ ဖြတ်ရန် DXF အဖြစ် ပြားချပါ။
keywords: flat pattern, unfold, development, developed length, bend allowance, bend line, dxf for laser, laser cutting, sheet metal, base flange, edge flange, flange, bend, bend radius, k-factor, k factor, thickness, gauge, relief, bend relief, channel, bracket, enclosure, bent sheet
from: 144bd0f6
---

:::note
**ဤ version တွင် မတည်ဆောက်ရသေးပါ။** Sheet metal သည် တိကျသော geometry kernel လိုအပ်သည်၊ ဤ PartCraft version တွင် ထိုအရာ မရှိပါ: ၎င်းသည် ပါဝင်သော part အားလုံးကို mesh kernel ဖြင့် တည်ဆောက်သည်။ [ဘာကို မတည်ဆောက်ရသေးသလဲ](topic:not-built-yet) က ယခုလုပ်ရမည့်အရာကို ပြောသည်။ ဤစာမျက်နှာ၏ ကျန်အပိုင်းက exact kernel ဖြင့် အလုပ်လုပ်ပုံကို ဖော်ပြသည်။
:::

Sheet metal part များသည် **Base flange** ဖြင့် စတင်သည်။ ၎င်းသည် တစ်ခုလုံး၏ sheet ကို သတ်မှတ်သည်: **thickness**၊ **inside bend radius** နှင့် **K-factor**။ နောက်ပိုင်း **Edge flange** တိုင်းသည် ထိုတူညီသော နံပါတ်များဖြင့် ကွေးသောကြောင့် part သည် ပြန်ဖြန့်နိုင်သော sheet တစ်ခုအဖြစ် ဆက်ရှိနေသည်။ နှစ်ခုလုံးသည် **exact kernel** လိုအပ်သည် ([The mesh kernel](topic:solid-kernels) ကို ကြည့်ပါ)။

## base flange ဖြင့် စတင်ရန်

1. sketch တစ်ခု ဆွဲပါ။ ပြားသော plate အတွက် **ပိတ်ထားသော profile** ကို သုံးပါ (rectangle၊ သို့မဟုတ် အပေါက်များပါသော ပိတ်ထားသော outline မည်သည့်အရာမဆို)။ ကွေးထားသော sheet အတွက် L၊ U သို့မဟုတ် sheet ၏ edge view အဖြစ် ဆွဲထားသော Z ကဲ့သို့ **မျဉ်းများ၏ ပွင့်နေသော ကွင်းဆက်တစ်ခု** ကို သုံးပါ။
2. feature history တွင် sketch ကို ရွေးပါ။
3. Features group ရှိ {{ui:More}} ကို ဖွင့်ပြီး {{ui:Base flange}} ကို ရွေးပါ။

ညာဘက် panel တွင်:

- **Thickness (mm)** သည် sheet ၏ gauge ဖြစ်သည်။
- **Bend radius (mm)** သည် ကွေးတိုင်း၏ inside radius ဖြစ်သည်။ 0 သည် ထက်ထောင့် inside corner ပေးသည်; outside က radius တစ်ခု thickness ဖြင့် ဆက်ကွေးသည်။
- **K-factor** သည် neutral layer သည် sheet အတွင်း မည်သည့်နေရာတွင် ရှိသလဲကို 0 (inside face) မှ 0.5 (အလယ်) အထိ ပြောသည်။ ပြားချထားသည့်အခါ sheet ၏ အလျားကို ဆုံးဖြတ်သည်။ 0.44 သည် default ဖြစ်သည်; သင့် shop သို့မဟုတ် ပစ္စည်းပေးသွင်းသူက ၎င်းတို့၏ကိုယ်ပိုင်တန်ဖိုး ပေးနိုင်သည်။
- **Depth (mm)** သည် ကွေးထားသော profile သည် sketch plane မှ ဘယ်လောက်ထွက်သလဲ ဖြစ်သည်။ plate အတွက် ၎င်းကို လျစ်လျူရှုသည်။
- **ကွေးများ အပြင်ဘက် thickness**: ပွင့်နေသော profile သည် sheet ၏ မျက်နှာတစ်ခုတည်း ဖြစ်သည်။ default အရ thickness သည် ပထမကွေး၏ inside တွင် ရှိပြီး သင်ဆွဲထားသော မျဉ်းများက channel ၏ outside ဖြစ်သည်။ မျဉ်းများကို inside တွင် ထားရန် ရွေးပါ။ အဖြေက ဘယ်အစွန်းမှ ဆွဲသည်ဖြစ်စေ တူညီသည်။

ပွင့်နေသော ကွင်းဆက်၏ ထောင့်တိုင်းသည် ကွေးတစ်ခု ဖြစ်လာသည်။ ၎င်း၏ကွေးများကို မထိန်းနိုင်လောက်အောင် တိုသော မျဉ်းသည် ၎င်းကို ပြောပြပြီး လိုအပ်သော အလျားကို ပြသည်။

## edge flange ကို ကွေးရန်

1. sheet ၏ အပေါ် သို့မဟုတ် အောက်မျက်နှာ၏ ဖောက်မျဉ်း edge တစ်ခုကို နှိပ်ပါ (ရှည်သော edges၊ ပါးသော edges မဟုတ်)။
2. {{ui:More}} › {{ui:Edge flange}} ကို ရွေးပါ။ edge မရွေးထားလျှင် PartCraft က နှိပ်ရန် စောင့်မည်; Esc က ပယ်ဖျက်သည်။

flange သည် ထို edge ၏ မျက်နှာမှ sheet ၏ inside radius ပတ်ပတ်လည်တွင် အပေါ်ဘက်သို့ ကွေးပြီး နောက် ဖောက်မျဉ်းအတိုင်း ဆက်သွားသည်။ panel တွင်:

- **Angle (°)** သည် ဘယ်လောက် ကွေးသလဲ၊ 1 မှ 180 အထိ ဖြစ်သည်။ 90 သည် စတုရန်း flange ဖြစ်သည်။
- **Length (mm)** သည် ကွေးပြီးနောက် ဖောက်ခြေဖြစ်သည်။
- **Bend the other way** က မျက်နှာ၏ တခြားဘက်မှ ကွေးစေသည် (အပေါ်အစား အောက်သို့)။
- **Offset at the start** နှင့် **Offset at the end** က edge ၏ အစွန်းတစ်ဖက်စီမှ flange ကို တိုစေသည်။
- **Bend relief**: အစွန်းတစ်ခုကို offset လုပ်သောအခါ ၎င်းဘေးရှိ sheet တွင် အပေါက်ကြားတစ်ခု ဖြတ်ထားသည်၊ ထို့ကြောင့် ကွေးခြင်းက ထိုနေရာတွင် သတ္တုကို မဆွဲဖြဲစေပါ။ **Relief width** က ၎င်း၏ အကျယ်ကို သတ်မှတ်သည်; အနက်က bend radius နှင့် thickness ပေါင်းဖြစ်သည်။ ထောင့်ကို မဖြတ်စေလိုလျှင် **None** ကို ရွေးပါ။

edge ကို နောက်ပိုင်း ပြောင်းလိုလျှင် panel ရှိ {{ui:Pick}} ကို နှိပ်ပြီး နောက်တစ်ခုကို နှိပ်ပါ။

:::tip
thickness နှင့် radius အတွက် parameters များ သုံးပါ ([Parameters နှင့် equations](topic:parameters) ကို ကြည့်ပါ) ထို့ကြောင့် gauge ပြောင်းလျှင် flange အားလုံး တစ်ပြိုင်နက် အပ်ဒိတ်ဖြစ်မည်။
:::

## ပြားချရန်

panel နှစ်ခုစလုံးသည် **Flat pattern** ဖြင့် အဆုံးသတ်သည်။ {{ui:Lay flat}} ကို နှိပ်ပါ:

- preview တွင် sheet ကို ဖြန့်ထားသည်ကို ပြပြီး ကွေးတိုင်း၏ centre line ကို ပြတ်မျဉ်းဖြင့် ပြသည်။
- **Size** နှင့် **Area** သည် flat blank ၏ တန်ဖိုးများ ဖြစ်သည်။
- ကွေးတိုင်းကို ၎င်း၏ ဦးတည်ချက် (**up** သို့မဟုတ် **down**၊ base flange ၏ sketch ဘက်မှ ကြည့်လျှင်)၊ angle နှင့် inside radius ဖြင့် စာရင်းပြသည်။

ကွေးတစ်ခုစီသည် ၎င်းကို ဖြတ်သန်းသော sheet ၏ neutral layer အလျားကို ယူသည်၊ **bend allowance**: angle (radians ဖြင့်) × (inside radius + K-factor × thickness)။ ထို့ကြောင့် 2 mm sheet ၏ 90° ကွေးတစ်ခုသည် 2 mm radius နှင့် K-factor 0.44 ဖြင့် flat sheet 4.52 mm ထပ်ထည့်သည်။

ပြားသော plate တွင် အပေါက်များ၊ ဖြတ်ချက်များနှင့် bend reliefs များသည် ၎င်းတို့ တကယ်ရှိသည့်နေရာတွင် flat ပေါ်တွင် ပြသည်၊ flange မှ ဖောက်ထားသော အပေါက်များအပါအဝင်။

အများအပြား ဖြတ်ရန် flat pattern အောက်ရှိ {{ui:Nest on sheets…}} ကို နှိပ်ပါ: [Flat parts များကို sheets ပေါ်တွင် nest လုပ်ရန်](topic:nest-flat-parts) ကို ကြည့်ပါ။ ကွေးထားသော base flange သည် စတုဂံ တစ်ခုအဖြစ် ပြားချသည်: ၎င်း၏ ဖွံ့ဖြိုးထားသော အလျား × depth၊ ထောင့်တစ်ခုစီအတွက် bend line ပါသည်။

{{ui:Save DXF}} သည် laser၊ punch သို့မဟုတ် waterjet အတွက် flat pattern ကို မီလီမီတာဖြင့် သိမ်းသည်:

- **OUTLINE** layer ရှိ outline၊ lines၊ arcs နှင့် circles အဖြစ်;
- **BEND** layer ရှိ bend lines၊ ပြတ်မျဉ်းဖြင့်;
- **BEND_NOTES** layer ရှိ ကွေးတိုင်းအတွက် မှတ်စု၊ ဥပမာ "UP 90° R2"။

တစ်ခုခု ပြောင်းလျှင် flat ပျက်သွားမည်; အသစ်အတွက် {{ui:Lay flat}} ကို ထပ်နှိပ်ပါ။

:::note
ဖြတ်မီ သင့် shop နှင့် K-factor ကို စစ်ပါ: flat ၏ အလျားက ၎င်းပေါ်တွင် မူတည်ပြီး ပစ္စည်း၊ thickness နှင့် tooling အလိုက် ကွဲပြားသည်။
:::

## မက်ဆေ့ချ်များ

- **Sheet metal သည် ၎င်းမတိုင်မီ base flange လိုအပ်သည်** — base flange မရှိမီ edge flange ထည့်ခဲ့သည်။ ၎င်းကို base flange အောက်သို့ ရွှေ့ပါ၊ သို့မဟုတ် base flange ကို အရင်ထည့်ပါ။
- **Edge flange သည် ဖောက်မျဉ်း edge လိုအပ်သည်** — flanges များသည် မျဉ်းများအတိုင်းသာ ကွေးသည်; ကွေးသော edges များကို ယခုအချိန်တွင် မလက်ခံနိုင်သေးပါ။
- **ထို edge သည် sheet ၏ thickness ၏ မျက်နှာတစ်ခုပေါ် မရှိပါ** — edge သည် sheet ၏ အပေါ် သို့မဟုတ် အောက်မဟုတ်သော မျက်နှာတစ်ခုနှင့် သက်ဆိုင်သည် (ဥပမာ အပေါက်၏ နံရံ)။ အပေါ် သို့မဟုတ် အောက်မျက်နှာ၏ edge တစ်ခုကို ရွေးပါ။
- **Offsets များက edge ၏ ဘာမျှ မကျန်တော့ပါ** — offset နှစ်ခု ပေါင်းသည် edge တစ်ခုလုံး သို့မဟုတ် ပိုသည်။
- **ကွေးထားသော base flange ပေါ်ရှိ edge flanges များကို ယခုအချိန်တွင် ပြားချ၍ မရသေးပါ** — ပြားသော plate မှ စတင်ပြီး edge flanges ဖြင့် အားလုံးကို ကွေးတက်စေပါ၊ ၎င်းတို့ ပြန်ဖြန့်သည်။
- **ကွေးထားသော base flange ပြီးနောက် ပြုလုပ်ထားသော ဖြတ်ချက်များနှင့် အပေါက်များကို ၎င်း၏ flat တွင် ယခုအချိန်တွင် မပြပါ** — ကွေးထားသော profile ၏ flat သည် ၎င်း၏ ဖွံ့ဖြိုးထားသော စတုဂံသာ ဖြစ်သည်။
