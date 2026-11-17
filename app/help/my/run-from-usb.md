---
title: USB ဒရိုက်ဗ်မှ ပြေးရန်
summary: engineering tools များက မည်သည့်အရာကို မည်သည့်နေရာတွင် ရေးသည်ကို ဖော်ပြသည်။ ထို့ကြောင့် CadCraft Studio ကို USB တံ သို့မဟုတ် မည်သည့် folder မှမဆို installer မလိုဘဲ၊ administrator အခွင့်အရေး မလိုဘဲ ပြေးနိုင်သည်: ဆက်တင်များ၊ generators၊ cache များနှင့် part ဖိုင်များ၊ တံပေါ်တွင် ဘာကျန်သည်ကို ဖော်ပြသည်။
keywords: usb, သယ်ဆောင်ရလွယ်, installer မလို, administrator, admin, ဆက်တင်များ, data folder, generators, ဖိုင်ရေးသည့်နေရာ, offline, privacy, host ဝင်ရောက်ခွင့်
from: 263efc79
---

engineering tools များ (generators၊ engineering library၊ checks နှင့် data ဖိုင်များ) သည် **administrator အခွင့်အရေး မလို** ပြီး **installer မလိုပါ**။ ၎င်းတို့သည် ဤနေရာတွင် စာရင်းပြထားသည်များကိုသာ ရေးပြီး အခြားမည်သည့်အရာမှ မရေးပါ။

| အရာ | ဘယ်နေရာတွင် သိမ်းထားသလဲ |
|---|---|
| သင့် parts၊ ၎င်းတို့၏ generated bodies၊ data sheets နှင့် checks | သင်သိမ်းသည့် part ဖိုင် (`.partcraft.json`)၊ သင်သိမ်းသည့်နေရာတွင်။ |
| ဖိုင်များမှ ဖွင့်ထားသော generators | app ၏ကိုယ်ပိုင် storage တွင်: web page တွင် browser ၏ local storage၊ portable Studio တွင် program ၏ဘေးရှိ `data` folder။ အများဆုံး ၂၀။ |
| ဆက်တင်များ (သင်သတ်မှတ်သော voxel sizes၊ solver threads၊ layout) | တူညီသော app storage တွင်။ |
| Data sheets၊ fields၊ meshes | သင်သိမ်းမှသာ: download သည် သင်ရွေးသည့်နေရာသို့ သွားသည်။ |

tools များသည် **ကိုယ်ပိုင် network call မပြုပါ**: ပါဝင်သော generators များသည် app ၏ကိုယ်ပိုင် folder ရှိ ဖိုင်များဖြစ်ပြီး၊ library နှင့် checks များသည် network သို့ မချိတ်ဆက်နိုင်သော worker တွင် သင့်ကွန်ပျူတာပေါ်တွင် အလုပ်လုပ်သည်၊ engineering data (ရေနှင့်လေ၏ ဂုဏ်သတ္တိများ၊ materials) သည် app အတွင်းတွင် ရှိသည်။ သင်ဖွင့်သော generator ဖိုင်ကို သင့်ကွန်ပျူတာပေါ်တွင်သာ ဖတ်ပြီး တခြားနေရာသို့ မသွားပါ။

## portable Windows zip နှင့် Linux

portable Studio for Windows သည် ၎င်း၏ ဆက်တင်များ၊ cache များနှင့် add-ons များကို program ဘေးရှိ `data` folder တွင် သိမ်းသည်။ Linux AppImage သည် `portable` ဟုခေါ်သော ဖိုင်တစ်ခုသည် ၎င်းဘေးတွင် ရှိသောအခါ ၎င်းဘေးတွင်သာ သိမ်းသည်၊ ထိုဖိုင်မရှိပါက သင့် home folder ကို သုံးသည်။ portable Mac ပုံစံ မရှိပါ: ဒေါင်းလုဒ်ဆွဲထားသော app သည် ကိုယ်နားတွင် ရေးခြင်းကို စနစ်က တားသည်။ shell ၏ကိုယ်ပိုင် portable မှတ်စုများ (`Studio` help) တွင် program ရေးသည်များကို စာရင်းပြထားသည်။

## Host ဝင်ရောက်ခွင့်

ဤနေရာတွင် host ဝင်ရောက်ခွင့် မတောင်းပါ။ ပရင်တာများ၊ serial စက်များနှင့် USB စက်ပစ္စည်းများသည် သီးခြားဖြစ်ပြီး job တစ်ခုက လိုအပ်သောအခါ စက်တစ်ခုလျှင် တစ်ကြိမ် မေးသည်။ generators သို့မဟုတ် checks များသည် ၎င်းတို့ကို မထိပါ။
