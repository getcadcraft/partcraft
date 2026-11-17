---
title: configurations မှ variant pack ဖန်တီးရန်
summary: အစိတ်အပိုင်း၏ configurations အားလုံး သို့မဟုတ် ရွေးထားသည့် အချို့ကို တစ်ကြိမ်တည်းဖြင့် STEP, IFC, DWG နှင့် preview တစ်ခုစီအဖြစ် တည်ဆောက်ပါ၊ parameters ဇယားနှင့်အတူ၊ အစိတ်အပိုင်းကို variants များနှင့်အတူ library item တစ်ခုအဖြစ် ထားပါ။
keywords: variant pack, variants, configurations, အစိတ်အပိုင်းမိသားစု, batch export, အရွယ်အစားအားလုံး, step, ifc, dwg, preview, ဇယား, csv, json, library, configurator, product configurator, catalog, item json
from: 9a6db99f
---

## သင် လုပ်မည့်အရာ

**အစိတ်အပိုင်း၏ အရွယ်အစားအားလုံးကို တစ်ကြိမ်တည်း** ပေးပါ: STEP, IFC နှင့် DWG ဖိုင် တစ်ခုစီနှင့် configuration တစ်ခုစီအတွက် ပုံတစ်ပုံ၊ တစ်ခုစီ ဘာဖြစ်သည်ကို ပြသသော ဇယား၊ နှင့် အားလုံးကို စာမျက်နှာတစ်ခုတည်းတွင် ထားသော library item။

ပထမဦးစွာ **configurations** ပါသော အစိတ်အပိုင်း လိုအပ်သည် ([Configurations နှင့် ဒီဇိုင်းဇယားများ](topic:design-tables) ကို ကြည့်ပါ)။ feature တစ်ခုကို ပိတ်သော configuration (ဥပမာ အပေါက်ပါသော နှင့် မပါသော ပြားတစ်ခု) သည် သီးခြား variant ဖြစ်လာသည်။

## အဆင့်များ

1. အစိတ်အပိုင်းကို ဖွင့်ပါ။ {{ui:ပါရာမီတာများ}} tab တွင် **Configurations** ကို ရှာပါ။
2. {{ui:Variant pack…}} ကို နှိပ်ပါ။
3. တည်ဆောက်မည့် configurations (အားလုံး အမှန်ခြစ်ပြီးဖြစ်သည်) နှင့် ရေးမည့် ဖိုင်များ: STEP, IFC, DWG, preview နှင့် library item ကို အမှန်ခြစ်ပါ။
4. {{ui:Pack ဖန်တီးရန်}} ကို နှိပ်ပါ။ အခြေအနေစာကြောင်းက variant များ တည်ဆောက်သည်နှင့်အမျှ ရေတွက်သည်; သင့်အစိတ်အပိုင်း မပြောင်းလဲပါ။
5. zip ဖိုင် တစ်ခု ဒေါင်းလုဒ်လုပ်သည်: `<part> variants.zip`။

## zip ထဲရှိအရာ

| ဖိုင် | ဘာဖြစ်သလဲ |
|---|---|
| `<name>.step` | configuration ကို STEP solid အဖြစ်။ |
| `<name>.ifc` | IFC4၊ တည်ဆောက်ထားသော ကိုယ်ထည်နှင့် အစိတ်အပိုင်း၏ parameters ကို property အဖြစ် ပါသော element တစ်ခု; တန်ဖိုးသည် ထို configuration ၏ ကိုယ်ပိုင် ဖြစ်သည်။ |
| `<name>.dwg` | ရှေ့၊ အပေါ်၊ ညာနှင့် isometric မြင်ကွင်းများကို အရွယ်အစားအပြည့်ဖြင့် ပုံဆွဲစာရွက်အဖြစ်။ |
| `<name>.svg` | ၎င်း၏ isometric မျဉ်းပုံ။ |
| `variants.csv`, `variants.json` | parameter ဇယား: variant တစ်ခုစီ၏ id၊ အမည်နှင့် parameter တိုင်း၏ တန်ဖိုး၊ ပိတ်သော features၊ ၎င်း၏ ဖိုင်များ၊ ထုထည်နှင့် အရွယ်အစား။ |
| `<part>.item.json` | အစိတ်အပိုင်းကို variants များနှင့်အတူ library item တစ်ခုအဖြစ် (အောက်တွင် ကြည့်ပါ)။ |
| `README.txt` | ဘာတည်ဆောက်ခဲ့သလဲ၊ အောက်ပါ မှတ်စုများနှင့် မတည်ဆောက်နိုင်ခဲ့သော အရာမှန်သမျှ။ |

ဖိုင်များကို configuration ဖြင့် အမည်ပေးသည်။ တည်ဆောက်မရသော configuration (ထို တန်ဖိုးများဖြင့် မဖြစ်နိုင်သော feature) ကို ဖိုင်များနှင့် ဇယားမှ ချန်ထားပြီး zip သိမ်းပြီးနောက် README နှင့် စာတွင် စာရင်းပြုသည်; အခြားများကို ဆက်ရေးသည်။

## သိထားရန်

- **STEP** သည် သင့် build တွင် exact kernel ဖွင့်ထားသည့်အခါ တိကျသည်။ မဖွင့်ပါက STEP သည် faceted (ပြား တြိဂံများ) ဖြစ်ပြီး README က ထိုသို့ ပြောသည်။
- **DWG** သည် ပုံဆွဲစာရွက်ဖြစ်ပြီး 3D မော်ဒယ် မဟုတ်ပါ။ ၎င်း၏ မျဉ်းများသည် mesh မှ ရသဖြင့် မျဉ်းကွေးအစွန်းသည် တိုတောင်းသော မျဉ်းများစွာ ဖြစ်သည်။
- **Library item** တွင် variant တစ်ခုစီအတွက် ကိုယ်ထည်တစ်ခုနှင့် ခြေရာတစ်ခု ပါသည်၊ library ၏ ကိုယ်ပိုင် ဝင်ရိုးများဖြင့်: Z အပေါ်၊ ရှေ့သည် −Y ဘက်၊ နှင့် ထည့်သွင်းသည့်အမှတ်သည် အောက်ခြေ နောက်ဘက်အလယ်တွင်။ အစီအစဉ်သည် variant တစ်ခုစီ၏ bounding rectangle ဖြစ်သည်။ item သည် 8 MB ကန့်သတ်ထားသဖြင့် အလွန်လေးသော variant သည် ၎င်း၏ အရွယ်အစားရှိသော ဘောက်စ်တစ်ခု ဖြစ်လာပြီး README က မည်မျှ ဖြစ်သည်ကို ပြောသည်။
- အစိတ်အပိုင်း၏ လက်ရှိ configuration သည် item ၏ မူလ variant ဖြစ်သည်။
- Ports (ပိုက်နှင့် လေပိုက်များအတွက် ချိတ်ဆက်မှတ်များ) ကို PartCraft မှ သတ်မှတ်ခြင်း မရှိပါ။

## variants များကို library စာမျက်နှာတွင် ထားရန်

site ရှိ **Library › Upload** တွင် `<part>.item.json` ကို တင်ပါ။ ၎င်း၏ အမျိုးအစား၊ လိုင်စင်နှင့် သင့် credit စာကြောင်းကို ရွေးပါ၊ ထို့နောက် variants ပါသော Library item ဖြစ်လာသည်။ BimCraft တွင် ထားသည့်အခါ မည်သည့် variant ဟု မေးပြီး {{ui:လဲရန်}} က အခြားများကို ပေးသည်။ ဧည့်သည်များ ရွေးချယ်ခွင့်၊ 3D ကြည့်ခွင့်နှင့် variant ဒေါင်းလုဒ်လုပ်ခွင့်ရှိသော စာမျက်နှာသည် ယခုအချိန်တွင် **ဝန်ထမ်း အစမ်းကြည့်ရှုမှု** ဖြစ်သည်: အများပြည်သူအတွက် မဖွင့်ရသေးပါ။

## command line မှ

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` သည် configurations များကို အမည်ပေးသည်၊ `--formats` သည် `step`, `ifc`, `dwg`, `preview` အနက် မည်သည်ကိုမဆို ယူသည်၊ `--no-item` သည် library item ကို ချန်ထားသည်။ ဖိုဒါ၊ zip သို့မဟုတ် နှစ်ခုလုံး ရေးသည်နှင့် variant တည်ဆောက်မရသည့်အခါ 1 ဖြင့် ထွက်သည်။ [Scripts နှင့် command line](topic:scripts-and-cli) ကို ကြည့်ပါ။
