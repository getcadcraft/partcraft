---
title: Pattern နှင့် mirror feature များ
summary: Linear ဖြင့် feature များကို တန်းတစ်ခုအဖြစ် ထပ်ပွားပါ၊ Circular ဖြင့် axis တစ်ခုပတ်လည် ပတ်ပွားပါ၊ Mirror ဖြင့် plane တစ်ခုဖြတ်၍ feature များ သို့မဟုတ် body တစ်ခုလုံးကို ကူးပါ။
keywords: pattern, linear pattern, circular pattern, polar array, array, mirror, symmetric, copy features, bolt circle, seed, mirror body
from: 702e9edb
---

Pattern နှင့် mirror များသည် သင် ယခင်က တည်ဆောက်ပြီးသား feature များကို ကူးယူသည်။ ကူးထားသော မိတ္တူများသည် history ၏ အစိတ်အပိုင်း ဖြစ်သည်- မူရင်းကို ပြောင်းလျှင် မိတ္တူများလည်း လိုက်ပြောင်းသည်။

ကူးယူသည့်အရာမှာ feature ၏ လုပ်ဆောင်ချက်ပင် ဖြစ်သည်- boss pattern သည် ပစ္စည်း ထပ်ထည့်သည်၊ cut သို့မဟုတ် hole pattern သည် ပစ္စည်း ဖယ်ထုတ်သည်။ Pattern ကို ထပ်မံ pattern လုပ်နိုင်ပြီး mirror လည်း လုပ်နိုင်သည်။ တင်သွင်းထားသော STEP solid ကိုလည်း ကူးနိုင်သော်လည်း fillet၊ chamfer နှင့် shell များကို မကူးနိုင်ပါ။

## မျဉ်းဖြောင့် pattern

1. History ထဲတွင် ကူးမည့် feature ကို ရွေးပါ (ဥပမာ Hole သို့မဟုတ် Cut)။ မည်သည်ကိုမျှ မရွေးထားပါက နောက်ဆုံး solid feature ကို အသုံးပြုသည်။
2. {{ui:Linear}} ကို ရွေးပါ။ X ဝင်ရိုးတစ်လျှောက် 20 mm ခြားပြီး မိတ္တူ သုံးခု ပေါ်လာမည်။
3. ညာဘက် panel တွင် အောက်ပါအတိုင်း သတ်မှတ်ပါ-

| သတ်မှတ်ချက် | ဘာလုပ်သလဲ | မူလတန်ဖိုး |
|---|---|---|
| **Features to copy** | ကူးမည့် feature တိုင်းကို အမှန်ခြစ်ပါ။ Pattern အထက်ရှိ feature များသာ ပြသည် | ရွေးထားသော feature |
| **Direction** | X ဝင်ရိုး၊ Y ဝင်ရိုး၊ Z ဝင်ရိုး၊ အစောပိုင်း sketch မှ မျဉ်း သို့မဟုတ် centerline၊ revolve ၏ ဝင်ရိုး သို့မဟုတ် ရွေးထားသော edge | X ဝင်ရိုး |
| **Spacing (mm)** | အနီးရှိ မိတ္တူများကြား အကွာအဝေး | 20 |
| **Count** | စုစုပေါင်း အရေအတွက်၊ **မူရင်းအပါအဝင်** (1 မှ 1000) | 3 |
| **Reverse direction** | မိတ္တူများ ဆန့်ကျင်ဘက်သို့ သွားသည် | ပိတ် |

### Edge ကို direction အဖြစ် အသုံးပြုခြင်း

1. View ထဲတွင် ပုံစံ၏ ဖြောင့်သော edge တစ်ခုကို နှိပ်ပါ။ ညာဘက် panel တွင် **Edge** ဟု ပြပြီး ၎င်း၏ အလျားကို ပြသည်။
2. {{ui:Linear}} ကို ရွေးပါ- pattern သည် ထို edge တစ်လျှောက် သွားမည်။

သို့မဟုတ် pattern ကို ရွေး၊ edge တစ်ခု ရွေးပြီး **Direction** တွင် "Picked edge (use the one picked now)" ကို ရွေးပါ။ ရွေးထားသော edge သည် နေရာတွင် ပုံသေ ဖြစ်ပြီး နောက်ပိုင်း ပြောင်းလဲမှုများကို မလိုက်ပါ။ Sketch မျဉ်းကမူ ၎င်း sketch ကို လိုက်သည်။

## စက်ဝိုင်း pattern

1. ကူးမည့် feature ကို ရွေးပါ (ဥပမာ disc ၏ အစွန်းနားရှိ hole တစ်ခု)။
2. {{ui:Circular}} ကို ရွေးပါ။ အပတ်တစ်ပတ်လုံး ညီမျှစွာ ခွဲထားသော မိတ္တူ ခြောက်ခု ပေါ်လာမည်။
3. သတ်မှတ်ပါ-

| သတ်မှတ်ချက် | ဘာလုပ်သလဲ | မူလတန်ဖိုး |
|---|---|---|
| **Features to copy** | Linear နှင့် အတူတူ | ရွေးထားသော feature |
| **Axis** | X၊ Y သို့မဟုတ် Z ဝင်ရိုး၊ sketch မျဉ်း၊ revolve ၏ ဝင်ရိုး သို့မဟုတ် ရွေးထားသော edge | ရှိပါက နောက်ဆုံး revolve ၏ ဝင်ရိုး၊ မဟုတ်လျှင် Y ဝင်ရိုး |
| **Angle (°)** | 360 သည် မိတ္တူများကို အပတ်တစ်ပတ်လုံး ညီမျှစွာ ခွဲသည်။ ထို့ထက်နည်းပါက ထောင့်အတွင်း ခွဲပြီး ပထမနှင့် နောက်ဆုံးမှာ အစွန်းများတွင် ရှိသည် | 360 |
| **Count** | စုစုပေါင်း အရေအတွက်၊ မူရင်းအပါအဝင် | 6 |
| **Reverse direction** | ဆန့်ကျင်ဘက်သို့ လှည့်သည် | ပိတ် |

World axis များသည် origin ကို ဖြတ်သည်။ Origin နှင့် မဗဟိုကျသော disc အတွက် sketch centerline သို့မဟုတ် revolve ၏ ဝင်ရိုးကို အသုံးပြုပါ။

### ဥပမာ- flange ၏ bolt hole ရှစ်ခု

1. Flange ကို Y ဝင်ရိုးပတ်လည် [လှည့်ထားသော အပိုင်းကို revolve လုပ်ခြင်း](topic:revolve) အတိုင်း revolve လုပ်ပါ။
2. Flange ၏ ပြားသော အပေါ်မျက်နှာပေါ်တွင် sketch လုပ်ပြီး bolt စက်ဝိုင်းပေါ်တွင် point တစ်ခု ထားကာ Hole လုပ်ပါ။
3. Hole ကို ရွေးထားစဉ် {{ui:Circular}} ကို ရွေးပါ။ Axis မှာ "Axis of Revolve1" ဖြစ်ပြီးသားဖြစ်သည်။
4. **Count** ကို `8` ဟု သတ်မှတ်ပါ။

## Mirror

1. History ထဲတွင် mirror လုပ်မည့် feature ကို ရွေးပါ၊ သို့မဟုတ် ယခုအထိ တည်ဆောက်ထားသော **body တစ်ခုလုံး** ကို mirror လုပ်ရန် မည်သည်ကိုမျှ မရွေးပါနှင့်။
2. {{ui:Mirror}} ကို ရွေးပါ။ **Right plane** ကို ဖြတ်၍ mirror လုပ်မည်။

Body တစ်ခုလုံးကို ပုံစံ၏ မျက်နှာတစ်ခုဖြင့် mirror လုပ်လိုပါက ထို ပြားသော မျက်နှာကို ဦးစွာ နှိပ်ပါ၊ ထို့နောက် {{ui:Mirror}} ကို ရွေးပါ။ (မျက်နှာကို နှိပ်လျှင် history ရွေးချယ်မှု ရှင်းသွားသောကြောင့် ဤနည်းသည် အမြဲ body တစ်ခုလုံးကို mirror လုပ်သည်။)

ညာဘက် panel ရှိ သတ်မှတ်ချက်များ-

- **Mirror**: **The whole body (as built so far)** ကို အမှန်ခြစ်ပါ၊ သို့မဟုတ် ဖယ်ပြီး ကူးမည့် feature များကို အမှန်ခြစ်ပါ။
- **Mirror plane**: Front plane၊ Top plane၊ Right plane၊ ယခု အသုံးပြုနေသော မျက်နှာ ("A face of Extrude1" သို့မဟုတ် "A fixed plane")၊ သို့မဟုတ် "The face picked now"။ ရွေးထားသော feature များကို မျက်နှာတစ်ခုဖြင့် mirror လုပ်ရန်- history တွင် Mirror ကို ရွေး၊ view တွင် မျက်နှာကို နှိပ်ပြီး "The face picked now" ကို ရွေးပါ။

Body တစ်ခုလုံးကို မျက်နှာတစ်ခုဖြင့် mirror လုပ်လျှင် ပုံစံ နှစ်ဆ ဖြစ်သည်၊ ဥပမာ half bracket ကို full bracket ဖြစ်အောင်။

## စာတန်းများ

- "Build a feature to copy first." သို့မဟုတ် "Build a solid first." ကူးရန် solid မရှိသေးပါ။
- "Choose the features to copy." **Features to copy** အကွက်အားလုံး ရှင်းထားသည်။
- "Extrude2 has no solid to copy." ထို feature မအောင်မြင်ခဲ့ သို့မဟုတ် ဖိနှိပ်ထားသည်။
- "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." Fillet၊ chamfer နှင့် shell များကို pattern သို့မဟုတ် mirror မလုပ်နိုင်ပါ၊ pattern ကို ဦးစွာ လုပ်ပြီးမှ fillet လုပ်ပါ။
- "There is no body to mirror yet." Mirror လုပ်ရန် body မရှိသေးပါ။

:::note
Pattern မိတ္တူများကို တစ်ခုချင်း ကျော်၍ မရနိုင်ပါ၊ pattern သည် sketch curve ကို မလိုက်နိုင်ပါ။ Sketch pattern နှင့် mirror များကိုလည်း ယခုထိ မတည်ဆောက်ရသေးပါ- ထပ်ခါတလဲလဲ sketch ဂျီသြမေတြီကို လက်ဖြင့် ဆွဲပါ သို့မဟုတ် **coordinates ဖြင့် ထည့်ရန်** ကို အသုံးပြုပါ။
:::
