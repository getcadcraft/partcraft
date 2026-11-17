---
title: Shaft နှင့် bore များပေါ် Thread များ၊ ရေးဆွဲ သို့မဟုတ် ပုံဖော်ထား
summary: ISO metric သို့မဟုတ် trapezoidal thread ကို မည်သည့် round မျက်နှာ (shaft သို့မဟုတ် bore) ပေါ်တွင်မဆို ထည့်ပါ။ ရေးဆွဲမှုအတွက် cosmetic အဖြစ် ထားနိုင်ပါသည်၊ သို့မဟုတ် 3D printing အတွက် အစစ်အမှန် helical thread ကို ပုံဖော်ပါ၊ printed ပစ္စည်းများ တပ်ဆင်နိုင်ရန် clearance ဖြင့်။
keywords: thread, threads, ပုံဖော်ထားသော thread, helical, helix, ဝက်အူ, bolt, nut, shaft, bore, external thread, internal thread, cosmetic thread, metric thread, trapezoidal, acme, lead screw, Tr16x4, M10, 3D printing, print, clearance, ကိုက်ညီမှု, ဘယ်လက်ကွေ့, tapped
from: 4f6401cc
---

{{ui:Thread}} သည် round မျက်နှာများပေါ်တွင် thread ထည့်ပါသည်: shaft ၏ အပြင်ဘက် (external thread) သို့မဟုတ် bore ၏ အတွင်းဘက် (internal thread)။ PartCraft က မျက်နှာမှ ဘယ်ဟာလဲဆိုတာ ခွဲခြားသိပါသည်။

Thread သည် အစတွင် **cosmetic** ဖြစ်သည်: မျက်နှာ ပြားချပ်ဆဲ၊ view က thread ကို dashed circles ဖြင့် ဆွဲပြီး drawing sheet က "M10×1.5 - 6g, thread 20 long" ကဲ့သို့ မှတ်ချက် ပေးသည်။ **Modelled** ကို အမှန်ခြစ်ပါက 3D printing သို့မဟုတ် ကောင်းမွန်စွာ ပုံပေါ်ရမည့် မော်ဒယ်အတွက် အစစ်အမှန် helical thread ကို ပစ္စည်းထဲ ဖြတ်ထည့်ပါမည်။

## Shaft သို့မဟုတ် bore ကို thread လုပ်ခြင်း

1. Thread အရွယ်အစားအတိုင်း shaft သို့မဟုတ် bore ကို တည်ဆောက်ပါ: M10 bolt အတွက် Ø10 shaft၊ သို့မဟုတ် M10 nut အတွက် Ø8.5 bore (tap drill)။
2. Round မျက်နှာကို နှိပ်ပြီး {{ui:More}} › {{ui:Thread}} ကို ရွေးပါ။ round မျက်နှာ မရွေးထားလျှင် PartCraft က မျက်နှာများကို နှိပ်ပြီး {{ui:Done}} ရန် မေးပါမည်။
3. ညာဘက် panel တွင် **Size** ကို စစ်ပါ။ **Fit to the face** က အရွယ်အစားကို ကိုယ်တိုင် ရွေးပေးသည်: shaft အတွက် major diameter သည် shaft ၏ အချင်းနှင့် ကိုက်သော အရွယ်; bore အတွက် minor diameter သည် bore နှင့် ကိုက်သော အရွယ်။

Thread သည် မျက်နှာ၏ ဖွင့်ထားသော အဆုံးမှ စတင်ပါသည်၊ ပစ္စည်းသည် ဝင်ရိုးတစ်လျှောက် ဆက်မသွားသော နေရာ: shaft ၏ လွတ်သော အဆုံး၊ bore ၏ ပါးစပ်။ **Start at the other end** က ၎င်းကို ပြောင်းပေးသည်။

## ဆက်တင်များ

| ဆက်တင် | ရွေးချယ်စရာများ | မူလ |
|---|---|---|
| **Form** | ISO metric (60°), M1.6 မှ M64 coarse; trapezoidal (Tr, 30°), Tr8×1.5 မှ Tr60×9 | ISO metric |
| **Size** | Fit to the face၊ သို့မဟုတ် စာရင်းမှ အရွယ်တစ်ခု | Fit to the face |
| **The whole face** | ရှင်းပြီး **Length (mm)** ပေးပါ၊ စတင်ချိန်မှ တိုင်းသည် | အမှန်ခြစ်ထား |
| **Start at the other end** | Thread သည် မျက်နှာ၏ အခြားအဆုံးမှ ဆက်သွားသည် | ပိတ် |
| **Hand** | Right hand သို့မဟုတ် left hand | Right hand |
| **Modelled** | အစစ်အမှန် helical thread ကို ဖြတ်ပါ | ပိတ် |
| **Clearance (mm)** | Modelled ကို အမှန်ခြစ်သောအခါ ပြသည်: shaft ၏ thread ကို ပိုသေးစေပြီး bore ၏ thread ကို ပိုကြီးစေသည်၊ ပတ်လည်အနှံ့ | 0.1 |

မျက်နှာနှင့် မကိုက်ညီသော အရွယ်အစားကိုလည်း တည်ဆောက်ပြီး မျက်နှာအတိုင်း ဖြတ်ပါသည်၊ panel က ထိုသို့ ပြောပါသည်၊ ဥပမာ "A Ø12 mm shaft is not M10's Ø10 mm"။ Thread feature တစ်ခုတည်းကို မျက်နှာ အများအပြား မျှဝေနိုင်ပြီး **Fit to the face** ဖြင့် မျက်နှာတစ်ခုစီသည် ကိုယ်ပိုင် အရွယ် ရှိပါသည်။

## 3D printing အတွက် ပုံဖော်ထားသော thread များ

Modelled thread သည် စံ basic profile ကို လိုက်ပါသည်: metric အတွက် ISO 68-1 (ပြားချပ် ထိပ်နှင့် အောက်ခြေ၊ 60° flanks)၊ trapezoidal အတွက် ISO 2901 (30° flanks)။ **Clearance** က profile တစ်ခုလုံးကို shaft အတွက် အတွင်းသို့၊ bore အတွက် အပြင်သို့ ရွှေ့ပေးပြီး printed ပစ္စည်းများ ဝက်အူပတ်ပြီး တပ်ဆင်နိုင်စေသည်:

- **0.1 မှ 0.2 mm** printer အများစုအတွက် သင့်တော်သည်။ ရှေ့ဦးစွာ bolt နှင့် nut ကို စမ်းပုံနှိပ်ပါ။
- **0** က စံ profile ဖြစ်ပြီး၊ စက်ဖြင့် လုပ်ထားသော ပစ္စည်းများ သို့မဟုတ် fit စစ်ဆေးရန်အတွက်။

တူညီသော clearance ရှိသော bolt နှင့် nut သည် flanks များတွင် ဘယ်တော့မှ မထိပါ: ၎င်းတို့ကြား ကွာဟချက်သည် clearance ၏ နှစ်ဆ ဖြစ်ပြီး ပတ်လည်အနှံ့ တူညီသည်။

:::tip
ကျဲသော pitch များ ပုံနှိပ်ရန် ခက်သည်: M3 နှင့် ငယ်သော၊ သို့မဟုတ် pitch 0.5 mm အောက်သည် 0.4 mm nozzle ဆွဲနိုင်သည်နှင့် နီးစပ်သည်။ ပိုကြီးသော thread များကို ပုံဖော်ပါ၊ သေးငယ်သော thread များအတွက် heat-set insert သို့မဟုတ် tap လုပ်ထားသော အပေါက်ကို သုံးပါ။
:::

ပုံဖော်ထားသော thread သည် solid ၏ အစိတ်အပိုင်း ဖြစ်သည်: STL၊ 3MF နှင့် STEP export များတွင် ပါဝင်ပြီး Measure က တိုင်းတာသည်။ ပြန်တည်ဆောက်ရန် ပိုလေးသည်: အရှည် 20 ရှိသော M10 thread သည် ~150,000 triangles ခန့် ဖြစ်သည်။

## Tap လုပ်ထားသော အပေါက်များ

**Tapped (ISO metric)** အပေါက်တွင်လည်း တူညီသော **Clearance** ဖြင့် **Modelled** switch ရှိသည်။ [Sketch point များတွင် အပေါက်နှင့် counterbore များ ဖေါက်ခြင်း](topic:holes) ကို ကြည့်ပါ။

## Thread မတည်ဆောက်နိုင်သောအခါ

- "A thread goes on a round face (a cylinder): a shaft or a bore." ရွေးထားသော မျက်နှာသည် ပြားချပ် သို့မဟုတ် အခြားနည်းဖြင့် ကွေးနေသည်။
- "No standard size fits a round face of Ø0.6 mm: choose a size." Fit to the face က မျက်နှာ၏ 12 % အတွင်း စံအရွယ် မတွေ့ပါ။ **Size** ကို ရွေးပါ၊ သို့မဟုတ် မျက်နှာကို ပြောင်းပါ။
- "A face this thread was on is gone (…). Pick it again." အစောပိုင်း ပြောင်းလဲမှုက မျက်နှာကို ဖယ်ရှားခဲ့သည်။ {{ui:Pick faces}} ကို နှိပ်ပြီး မျက်နှာကို ထပ်နှိပ်ပါ။

:::note
လက်မ thread များ (UNC၊ UNF)၊ pipe thread များ၊ tapered thread များ၊ thread run-out များနှင့် chamfered thread အစများကို မတည်ဆောက်ရသေးပါ။ exact kernel က ပုံဖော်ထားသော thread ကို cosmetic အဖြစ် ပြသည်။
:::
