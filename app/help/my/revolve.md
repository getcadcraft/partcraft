---
title: လှည့်ထားသော အပိုင်းကို revolve လုပ်ခြင်း
summary: Centerline ဘေးရှိ profile တစ်ဝက်ကို ဆွဲပါ၊ ၎င်းကို အပြည့်အဝ ပတ်ထားသော အပိုင်းအဖြစ် revolve လုပ်ပါ၊ ဝင်ရိုးနှင့် angle ကို ရွေးပါ၊ အနက်ကြောင်း (groove) အတွက် revolved cut ကို သုံးပါ။
keywords: revolve, revolved boss, revolved cut, turned part, lathe, shaft, axis, centerline, groove, angle, rev cut
from: 593b6929
---

{{ui:Revolve}} သည် profile တစ်ခုကို axis တစ်ခုပတ်လည် လှည့်သည်၊ lathe ဖြင့် ပြုလုပ်သော အပိုင်းကဲ့သို့- ဝင်ရိုးများ၊ ပုလေများ၊ flange များ၊ ခလုတ်များ။ Revolved cut (Features group ၏ {{ui:More}} menu တွင်) သည် profile တစ်ခုကို လှည့်၍ ပစ္စည်း ဖယ်ထုတ်သည်၊ အနက်ကြောင်းများနှင့် အတွင်းပိုင်းများအတွက်။

## အဆင့်ဆင့် ရှိသော ဝင်ရိုး တစ်ခုကို revolve လုပ်ခြင်း

1. **Front plane** ပေါ်တွင် sketch လုပ်ပါ။
2. {{key:N}} ကို နှိပ်ပြီး {{ui:Centerline}} ကို ရွေးပါ။ Origin မှ စတင်ပြီး ညာဘက်သို့ တည့်တည့် point တစ်ခုကို နှိပ်ပါ၊ ဥပမာ 100 mm။ ၎င်းသည် ဝင်ရိုး ဖြစ်သည်။ ၎င်းသည် အစက်ကြောင်း ဖြစ်သည်- construction geometry သည် profile ၏ အစိတ်အပိုင်း မဟုတ်ပါ။
3. {{key:L}} ကို နှိပ်ပြီး Line ကို ရွေးပါ။ Centerline အထက်တွင် **တစ်ဝက်** profile ကို loop ပိတ်တစ်ခုအဖြစ် ဆွဲပါ- centerline ပေါ်မှ စတင်၊ အပေါ်သို့ သွား၊ အဆင့်ဆင့် ဆွဲ၊ ပြန်ဆင်းပြီး centerline သို့ ရောက်ကာ စတင်ရာ နေရာသို့ ပြန်ကပ်ပါ။ အဆုံးများ ထိရမည်၊ loop သည် ပိတ်ရမည်။
4. အချင်းဝက်များ (centerline အထက်ရှိ အမြင့်များ) နှင့် အလျားများကို dimension ပေးပါ။ Centerline အထက် 10 အမြင့်သည် အချင်း 20 ဖြစ်စေသည်။
5. {{ui:Exit}} ကို ရွေးပါ။
6. {{ui:Revolve}} ကို ရွေးပါ။ ဝင်ရိုး ပေါ်လာပြီး လှည့်ပတ်တစ်ပတ်လုံး ဖြစ်သည်။

Profile သည် ဝင်ရိုး၏ တစ်ဘက်တည်းတွင် ရှိနေရမည်။ ဖြတ်ကျော်ပါက- "The profile crosses the axis. Keep it on one side of the centerline." Profile edge တစ်ခုသည် ဝင်ရိုးပေါ်တွင် ရှိနိုင်သည်။

## ဆက်တင်များ

| Setting | ဘာလုပ်သလဲ | မူလတန်ဖိုး |
|---|---|---|
| **Operation** | Boss (ပစ္စည်းထည့်)၊ Cut (ပစ္စည်းဖယ်)၊ Intersect (ထပ်နေသော အပိုင်းကို ထားသည်) သို့မဟုတ် New body | {{ui:Revolve}} အတွက် Boss၊ {{ui:More}} › {{ui:Revolved cut}} အတွက် Cut |
| **Angle (°)** | ဘယ်လောက် လှည့်မလဲ၊ 0 အထက်ခန့်မှ 360 အထိ | 360 |
| **Axis** | ပထမ centerline၊ သို့မဟုတ် sketch ရှိ မျဉ်း သို့မဟုတ် centerline တစ်ခုခု၊ "Centerline 1 (l1)" သို့မဟုတ် "Line 3 (l3)" ဟု စာရင်းပြုသည် | ပထမ centerline |

ထောင့်တစ်စိတ်တစ်ပိုင်းသည် wedge ဖြစ်စေပြီး sketch plane မှ တစ်ဘက်တည်းသို့ လှည့်သည်။

Sketch တွင် centerline မရှိဘဲ **Axis** ကို First centerline ပေါ် ထားပါက- "Draw a centerline (a construction line) in the sketch to revolve about." သင် profile ရှိ ပစ္စည်းမျဉ်း တစ်ခုကို ဝင်ရိုးအဖြစ် ရွေးနိုင်သည်။

## အနက်ကြောင်း ဖြတ်ခြင်း

1. Shaft တည်ဆောက်ပြီးနောက် **Front plane** ပေါ်တွင် sketch အသစ် ဖွင့်ပါ (shaft ၏ sketch နှင့် plane တူညီသည်)။
2. ထိုဝင်ရိုးတစ်လျှောက် centerline ဆွဲပါ- origin မှ စတင်ပြီး ညီညီ ထားပါ၊ H ရရန်၊ သို့မဟုတ် **coordinates ဖြင့် ထည့်ရန်** ဖြင့် ရိုက်ပါ (ဥပမာ `0, 0` မှ `100, 0` အထိ)။ Sketch အသစ်သည် အခြား sketch ၏ မျဉ်းများနှင့် ကပ်ရန် မဖြစ်နိုင်ပါ။
3. အနက်ကြောင်း သွားမည့် shaft ၏ အစွန်းနှင့် ထပ်နေသော သေးငယ်သော ပိတ်သော ထောင့်မှန်စတုဂံ ဆွဲပါ။
4. {{ui:Exit}} ကို ရွေးပြီး {{ui:More}} › {{ui:Revolved cut}} ကို ရွေးပါ။

## Assembly များရှိ revolve မျက်နှာများ

Revolve တွင် အခြား feature များနှင့် assembly များ အသုံးပြုနိုင်သော ဝင်ရိုး ရှိသည်-

- **Circular** pattern သည် နောက်ဆုံး revolve ၏ ဝင်ရိုးကို မူလအတိုင်း သုံးသည် ([Pattern နှင့် mirror feature များ](topic:patterns-mirror) ကို ကြည့်ပါ);
- Assembly တွင် revolve မှ ပြုလုပ်ထားသော မျက်နှာများကြား joint သည် **revolute** joint အဖြစ် စတင်ပြီး **Centre on** က "Axis of Revolve1" ကို ပေးသည် ([Assembly တည်ဆောက်ခြင်း](topic:build-assembly) ကို ကြည့်ပါ)။

## မှန်ကန်သော curve များနှင့် facet များ

PartCraft သည် revolve ကို mesh kernel ဖြင့် တည်ဆောက်သည် (status bar chip က "Mesh kernel" ဟု ပြသည်)- ပတ်ပတ်လည် ပုံသဏ္ဍာန်များသည် flat facet များဖြစ်ပြီး မူလအားဖြင့် ပတ်တစ်ခုလျှင် 64 ဖြစ်သည်၊ ထုထည်များသည် မှန်ကန်သော တန်ဖိုးထက် အနည်းငယ် ငယ်သည် (64 တွင် ခန့်မှန်း 0.16 %)။ View၊ STL၊ 3MF နှင့် STEP export များသည် ထို facet များဖြင့် ဖွဲ့စည်းထားသည်- ပိုချောစေရန် **Curves** (ဘာမျှမရွေးဘဲ နေရာကို နှိပ်ပြီး ညာဘက် panel) ကို Fine (128) သို့မဟုတ် Very fine (256) သို့ သတ်မှတ်ပါ။ အမှန်ကန်သော cylinder၊ cone နှင့် torus များသည် exact kernel လိုအပ်သည်- ဤ version တွင် မတည်ဆောက်ရသေးပါ။ [Mesh kernel](topic:solid-kernels) ကို ကြည့်ပါ။
