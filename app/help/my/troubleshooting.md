---
title: ပြဿနာ ဖြေရှင်းခြင်း
summary: PartCraft တွင် တွေ့နိုင်သော ပြဿနာများ — app မစတင်ခြင်း၊ feature များ မအောင်မြင်ခြင်း၊ sketch မဖြေခြင်း၊ ဖိုင် မဖွင့်နိုင်ခြင်းနှင့် joint များ မှားယွင်းခြင်း — သင်တွေ့သော message နှင့် ပြုပြင်နည်းနှင့်အတူ။
keywords: ပြဿနာ, အမှား, အကူအညီ, မအလုပ်လုပ်, မအောင်မြင်, failing, crash, အလွတ်, webgl, webassembly, kernel, မတည်ဆောက်ရသေး, over defined, open profile, မဖွင့်နိုင်, ဘာမှ မဖြစ်, မှားသော ဦးတည်ချက်, နှေးကွေး
from: 7728542c
---

Something မအလုပ်လုပ်သောအခါ အောက်ခြေရှိ **status bar** ကို ဦးစွာ ဖတ်ပါ: PartCraft က ဘာကြောင့် ငြင်းသည် သို့မဟုတ် နောက်ဘာ မျှော်လင့်သည်ကို ပြောပါသည်။ မအောင်မြင်သော feature သည် ၎င်း၏ right panel ထိပ်တွင်နှင့် history တွင် row ပေါ် hover လုပ်သောအခါ message ကို ပြသည်။

## App မစတင်ပါ

### "This browser cannot show 3D (WebGL is off or missing), so PartCraft cannot run here."

**အကြောင်းရင်း:** browser ၏ 3D graphics (WebGL) ကို ပိတ်ထား၊ ပိတ်ဆို့ထား သို့မဟုတ် graphics driver က မထောက်ပံ့ပါ။

**ပြုပြင်ရန်:**

:::chromium
`chrome://settings/system` (သို့မဟုတ် Edge တွင် `edge://settings/system`) ကို ဖွင့်ပြီး "Use graphics acceleration when available" ကို ဖွင့်ပါ၊ ထို့နောက် browser ကို ပြန်စပါ။ ဖွင့်ထားပြီးသား ဖြစ်လျှင် `chrome://gpu` တွင် WebGL အခြေအနေကို စစ်ပြီး graphics driver ကို အပ်ဒိတ်လုပ်ပါ။
:::

:::firefox
`about:support` ကို ဖွင့်ပြီး Graphics, WebGL ကို ကြည့်ပါ။ ပိတ်ဆို့ထားလျှင် graphics driver ကို အပ်ဒိတ်လုပ်ပါ။ `about:config` တွင် `webgl.disabled` သည် `false` ဖြစ်ရမည်။
:::

:::safari
လက်ရှိ Safari တွင် WebGL အမြဲဖွင့်ထားသည်။ macOS ကို အပ်ဒိတ်လုပ်ပါ (Safari သည် ၎င်းနှင့်အတူ အပ်ဒိတ်ဖြစ်သည်)။ ဆက်မရလျှင် တူညီသော Mac ပေါ်တွင် Chrome သို့မဟုတ် Firefox ကို စမ်း၍ graphics hardware ကို ဖယ်ထုတ်ပါ။
:::

Remote desktop နှင့် virtual machine အချို့တွင် WebGL မရှိပါ။ ကွန်ပျူတာကိုယ်တိုင်တွင် စမ်းပါ။

### "The solid kernel did not load: …"

**အကြောင်းရင်း:** geometry kernel (WebAssembly program) ကို ဆွဲယူ သို့မဟုတ် စတင်၍ မရပါ။ များသောအားဖြင့် app load ဖြစ်စဉ် ချိတ်ဆက်မှု ပြတ်သွား၊ WebAssembly ကို ကုမ္ပဏီ policy သို့မဟုတ် browser security setting က ပိတ်ထား၊ သို့မဟုတ် browser အလွန်ဟောင်းသည်။

**ပြုပြင်ရန်:** အင်တာနက်ရှိစဉ် page ကို reload လုပ်ပါ။ ဆက်ကျရှုံးပါက အခြား လက်ရှိ browser ကို စမ်းပါ။ Firefox တွင် `about:config` ရှိ `javascript.options.wasm` သည် `true` ဖြစ်ရမည်။ အော့ဖ်လိုင်းတွင် app နှင့် kernel သည် ချိတ်ဆက်မှု မပြတ်မီ app bar က **Offline ready** ဟု ပြခဲ့ပါက သာ load ဖြစ်သည် ({{ui:Save for offline}} ကို အင်တာနက်ရှိစဉ် နှိပ်ပါ; [Working offline](common:offline) ကို ကြည့်ပါ)။

### Offline ခလုတ်က "Could not save" သို့မဟုတ် "Offline not available" ဟု ပြသည်

**Could not save**: ဖိုင်အချို့ ဒေါင်းလုဒ်မဖြစ်ပါ။ အင်တာနက်ရှိစဉ် နှိပ်ပြီး ထပ်ကြိုးစားပါ; နှေးသော သို့မဟုတ် metered ချိတ်ဆက်မှုတွင် ဒုတိယအကြိမ် လိုအပ်နိုင်သည်။ **Offline not available**: ဤ browser window သည် အော့ဖ်လိုင်းမိတ္တူ မသိမ်းနိုင်ပါ (private window နှင့် managed ကွန်ပျူတာအချို့က ပိတ်ထားသည်)။ ပုံမှန် window ကို သုံးပါ၊ သို့မဟုတ် tab ကို ဖွင့်ထားပါ။

### PartCraft သည် offline ဖြစ်သော်လည်း ဟောင်းနေသည်

အင်တာနက်ရှိစဉ် **Offline ready** ကို နှိပ်ပြီး {{ui:Save again (get the newest version)}} ကို ရွေးပါ။

### "Sweep: not built yet. It needs an exact kernel, …"

Message အပြည့်အစုံမှာ "<Name>: not built yet. It needs an exact kernel, which this version of PartCraft does not have. Help › What is not built yet says what to do instead." ဖြစ်သည်။ Sweep၊ Loft၊ Rib၊ sheet metal flange၊ surface feature၊ Combine၊ Move body၊ Scale body သို့မဟုတ် Path pattern ကို ရွေးသောအခါ၊ နှင့် exact kernel သာ တည်ဆောက်နိုင်သော အခြားအရာများအတွက် တွေ့ရသည်။ browser သို့မဟုတ် ပစ္စည်းတွင် ပြဿနာ မရှိပါ: ဤ PartCraft ဗားရှင်းသည် ပစ္စည်းအားလုံးကို mesh kernel ဖြင့် တည်ဆောက်သည်။ အစားထိုးလုပ်နည်းအတွက် [What is not built yet](topic:not-built-yet) နှင့် [The mesh kernel](topic:solid-kernels) ကို ကြည့်ပါ။

### "Loading the solid kernel…" မပျောက်သေး

နှေးသော ချိတ်ဆက်မှုတွင် ခဏစောင့်ပါ: kernel နှင့် 3D library ကို ပထမဆုံးအကြိမ် ဒေါင်းလုဒ်လုပ်သည်။ ထို့နောက် reload လုပ်ပါ။ page ကိုယ်တိုင်က error ပြပါက အထက်ကို ကြည့်ပါ။

## Key ကို နှိပ်သော်လည်း ဘာမှ မဖြစ်ပါ

- Cursor သည် panel ရှိ box တစ်ခုအတွင်း ရှိစဉ် key များ အလုပ်မလုပ်ပါ။ 3D view ကို နှိပ်ပါ၊ သို့မဟုတ် စာရိုက်ပြီးနောက် {{key:Esc}} (သို့မဟုတ် {{key:Tab}} ဖြင့် ထွက်) ကို နှိပ်ပါ။
- Arrow keys နှင့် {{key:Plus}}/{{key:Minus}} သည် view ကို လှည့်/zoom လုပ်ရန် view ကို နှိပ်ပြီးမှသာ ဖြစ်သည်။
- Dialog ဖွင့်ထားသည်: ဦးစွာ ဖြေပါ။
- Sketch တွင် {{key:F}} သည် Fillet tool ဖြစ်သည်၊ Fit မဟုတ်ပါ။ {{ui:Fit}} ခလုတ်ကို သုံးပါ။

## Toolbar ခလုတ် မှိန်နေသည် (grayed)

- Sketch ဖွင့်ထားစဉ် feature ခလုတ်များ grayed ဖြစ်သည်။ Sketch ကို အရင်ပိတ်ပါ။
- Sketch tools များသည် sketch အတွင်းတွင်သာ အလုပ်လုပ်သည်။
- {{ui:Undo}} နှင့် {{ui:Redo}} သည် ပြန်ဖျက်/ပြန်လုပ်စရာ မရှိသောအခါ grayed ဖြစ်သည်။
- {{ui:Assembly}} သည် solid ပါသော part လိုအပ်သည်။ {{ui:Joint}} သည် assembly တွင် part နှစ်ခု လိုအပ်သည်။ {{ui:Edit part}} သည် part တစ်ခု ရွေးထားရန် လိုအပ်သည်။
- {{ui:STEP AP242 (exact solid)}} နှင့် {{ui:STEP AP214 (exact solid)}} သည် assembly တွင် grayed ဖြစ်သည်: part တစ်ခုစီကို export လုပ်ပါ။ အခြား program က exact ဖိုင်ကို ငြင်းပါက {{ui:STEP AP214 (exact solid)}} ကို စမ်းပြီး၊ ထို့နောက် {{ui:STEP (faceted, mesh kernel)}} ကို စမ်းပါ၊ ပြီးလျှင် {{ui:Help}} › {{ui:Report a problem}} မှတဆင့် ကျွန်ုပ်တို့ကို ပြောပါ။
- {{ui:Sweep}}၊ {{ui:Loft}} နှင့် exact kernel လိုအပ်သော အခြား feature များသည် grayed မဖြစ်ပါ: ၎င်းတို့ကို နှိပ်လို့ရနေဆဲ ဖြစ်ပြီး tooltip များသည် "not built yet (needs an exact kernel)" ဖြင့် အဆုံးသတ်ကာ နှိပ်လျှင် status bar တွင် ထိုသို့ ပြောသည်။ [What is not built yet](topic:not-built-yet) ကို ကြည့်ပါ။
- {{ui:Drawing}} သည် solid ပါသော part လိုအပ်ပြီး sketch ဖွင့်ထားစဉ် grayed ဖြစ်သည်။
- {{ui:Export}} ပစ္စည်းများသည် assembly တွင် grayed ဖြစ်သည်: assembly များကို ယခု export မလုပ်နိုင်ပါ။ ပိတ်ပါ၊ သို့မဟုတ် export လုပ်ရန် part ကို တည်းဖြတ်ပါ။

## Sketch ပြဿနာများ

### Sketch က relation ထည့်ခွင့် မပေးပါ

"No relation fits this selection. Select one or two items (Shift+click adds)." ရွေးချယ်မှုက မတူညီသော relation လိုအပ်သည်။ relation တစ်ခုစီ ဘာလိုသည်ကို [Sketch relations and dimensions](topic:sketch-relations) တွင် ကြည့်ပါ။

### "Over defined: … cannot all be met. Undo, or delete one of them."

**အကြောင်းရင်း:** အသစ် relation သို့မဟုတ် dimension သည် ရှိပြီးသားများနှင့် ဆန့်ကျင်သည်။ Sketch မရွေ့ပါ။

**ပြုပြင်ရန်:** {{key:Mod+Z}}၊ သို့မဟုတ် right panel ရှိ စာရင်းမှ အနီရောင် အရာတစ်ခုကို ဖျက်ပါ (ဘေးရှိ **Delete** ကို ရွေးပါ)။

### "Over defined: … is already implied. Delete it."

**အကြောင်းရင်း:** relation သည် ဘာမျှ မထည့်ပါ: အခြားများက ၎င်းကို အတင်းအကျပ် သတ်မှတ်ပြီးသား ဖြစ်သည် (ဥပမာ လေးထောင့်၏ နှစ်ဘက်တွင် Parallel၊ သို့မဟုတ် ပြီးသား ပိတ်ထားသော dimension)။ ဤ build တွင် driven dimension မရှိပါ။

**ပြုပြင်ရန်:** ဖျက်ပါ။ Feature သည် သတိပေးချက်ဖြင့် တည်ဆောက်သည်။

### "Those items cannot be dimensioned together."

သင်သည် ဥပမာ point တစ်ခုနှင့် စက်ဝိုင်းတစ်ခု နှိပ်ခဲ့သည်။ စက်ဝိုင်း၏ center point သို့ dimension ပေးပါ။

### "A fillet needs a corner where exactly two lines meet." / "That radius is too big for these lines."

ပြတ်သား မျဉ်းနှစ်ခု တွေ့ဆုံသော ထောင့်အမှတ်ကို တိတိကျကျ နှိပ်ပါ။ တိုသော မျဉ်းက ခွင့်ပြုသည်ထက် ပိုသေးသော radius ကို သုံးပါ။

### ဆွဲသောအခါ geometry ပြန်ခုန်သွားသည်

ဆွဲခြင်းက relation သို့မဟုတ် dimension ကို ချိုးဖောက်မည်ဖြစ်သောကြောင့် PartCraft က ပြန်ထားသည်။ အပြာရောင် (under defined) geometry သာ ရွေ့နိုင်သည်။

### "This sketch cannot open: Needs Extrude2, which is failing."

Sketch သည် မတည်ဆောက်ရသေးသော feature ၏ မျက်နှာပေါ် ရှိသည်။ ထို feature ကို ဦးစွာ ပြင်ပါ၊ unsuppress လုပ်ပါ၊ သို့မဟုတ် roll forward လုပ်ပါ။

## Feature ပြဿနာများ

| မက်ဆေ့ချ် | အကြောင်းရင်း | ပြုပြင်ရန် |
|---|---|---|
| "Make a sketch first: pick a plane, Sketch, draw a closed profile, Exit." | Sketch curves ပါသော အသုံးမပြုသေး sketch မရှိ၊ ရွေးထားခြင်းလည်း မရှိ | Sketch တစ်ခု ဆွဲပါ၊ သို့မဟုတ် history တွင် သုံးမည့် sketch ကို ရွေးပါ |
| "The sketch has no closed profile to extrude." (သို့မဟုတ် "to revolve") | Solid မျဉ်းများ closed loop မရှိ | ကွက်လပ်များကို ပိတ်ပါ; construction မျဉ်းများကို {{key:Q}} ဖြင့် ပြန်ပြောင်းပါ |
| "The profile is open: an end at (x, y) is not joined to anything." | ထိုအမှတ်တွင် ကွက်လပ် | Sketch ကို ဖွင့်ပြီး အဆုံးကို အနီးဆုံး အမှတ်သို့ ဆွဲ၍ snap ဖြစ်စေပါ |
| "The profile branches at (x, y): more than two ends meet there." | မျဉ်းသုံးကြောင်း သို့မဟုတ် ထို့ထက်ပို အဆုံးများ အမှတ်တစ်ခုတွင် တွေ့ဆုံ | အပို မျဉ်းကို ဖျက်ပါ၊ သို့မဟုတ် construction သို့ ပြောင်းပါ |
| "A closed loop needs at least three sides or a curve." | မျဉ်းနှစ်ခု ပြန်လှန် | Loop ကို ပြန်ဆွဲပါ |
| "Through all is for cuts. Use a depth for a boss." | Boss ကို Through all ထားသည် | End ကို Blind သို့မဟုတ် Mid-plane သို့ သတ်မှတ်ပါ |
| "There is nothing to cut on that side of the sketch. Try the other direction." | ဖြတ်မည့်အရာက material မှ ဆန့်ကျင်ဘက် ညွှန်သည် | Reverse direction ကို အမှန်ခြစ်ပါ |
| "There is nothing to cut yet." / "There is nothing to drill yet." | ဤ feature မတိုင်မီ solid မရှိ | Boss ကို အရင်ပြုလုပ်ပါ၊ သို့မဟုတ် feature ကို အောက်သို့ ရွှေ့ပါ |
| "Draw a centerline (a construction line) in the sketch to revolve about." | ဝင်ရိုးမရှိဘဲ revolve | Centerline ထည့်ပါ၊ သို့မဟုတ် Axis တွင် မျဉ်းကို ရွေးပါ |
| "The profile crosses the axis. Keep it on one side of the centerline." | Profile သည် ဝင်ရိုး၏ နှစ်ဖက်စလုံးတွင် | Profile ၏ တစ်ဝက်ကို ပြန်ဆွဲပါ |
| "Put sketch points where the holes go (Point tool), then make the hole." | Sketch တွင် point မရှိ | {{key:P}} ဖြင့် point ထည့်ပါ |
| "The counterbore must be wider than the hole." | Counterbore ⌀ သည် Diameter ထက် မကြီး | Counterbore ကို ပိုကျယ်အောင် ပြုလုပ်ပါ |
| "The counterbore must be shallower than the hole." | Blind hole ထက် counterbore နက်သည် | ပိုတိမ်အောင်လုပ်ပါ၊ သို့မဟုတ် အပေါက်ကို ပိုနက်အောင် လုပ်ပါ |
| "Choose the features to copy." | Pattern သို့မဟုတ် mirror တွင် ဘာမျှ အမှန်မခြစ်ထား | Features အောက်တွင် feature တစ်ခုကို အမှန်ခြစ်ပါ |
| "Extrude2 has no solid to copy." | ကူးမည့် feature မအောင်မြင်/ပိတ်ထား | ပြင်ပါ သို့မဟုတ် unsuppress လုပ်ပါ |
| "Needs Sketch3, which is failing." | မှီခိုသော feature မတည်ဆောက်ရသေး | Feature ကို ပြင်ပါ |
| "The face it sits on is gone (Extrude1 is not built)." | Sketch ၏ မျက်နှာ မရှိတော့ | ထို feature ကို ပြင်ပါ၊ သို့မဟုတ် sketch ကို ဖျက်ပြီး ပြန်ဆွဲပါ |
| "Nothing is left of the part after this." | ဖြတ်ခြင်းက material အားလုံး ဖယ်ရှား | ဖြတ်ချက်၏ အရွယ်အစားနှင့် ဦးတည်ချက်ကို စစ်ပါ |
| "The solid kernel could not build this (…)." သို့မဟုတ် "The solid kernel could not combine this with the body." | Kernel က geometry ကို ငြင်းသည် | Undo လုပ်ပါ၊ သို့မဟုတ် အရွယ်အစား အနည်းငယ် ပြောင်းပါ; တိတိကျကျ ထိနေသော မျက်နှာများက ဖြစ်စေနိုင်သည် |
| "Sweep: not built yet. It needs an exact kernel, which this version of PartCraft does not have." (Loft၊ Rib နှင့် အခြားများလည်း) | အစောပိုင်း build တွင် ပြုလုပ်ထားပြီး exact kernel သာ တည်ဆောက်နိုင်သော feature။ History တွင် ရှိနေပြီး မပြောင်းလဲဘဲ ပြန်သိမ်းသည် | Suppress သို့မဟုတ် ဖျက်ပါ; အစားထိုးလုပ်နည်းအတွက် [What is not built yet](topic:not-built-yet) ကို ကြည့်ပါ |
| "A 5 mm round does not fit here (…)." / "A 2 mm chamfer …" | အရွယ်အစားက edge ဘေးရှိ မျက်နှာအတွက် ကြီးလွန်း သို့မဟုတ် ထောင့်ကို blend မလုပ်နိုင် | အရွယ် သေးအောင်လုပ်ပါ၊ သို့မဟုတ် feature တစ်ခုလျှင် edge နည်းအောင် လုပ်ပါ |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (Chamfer လည်း) | ရွေးထားသော edge သည် စက်ဝိုင်း (ဥပမာ အပေါက်နှုတ်ခမ်း) သို့မဟုတ် ကွေးသော မျက်နှာပေါ် | {{ui:Pick edges}} ကို နှိပ်ပြီး ဖယ်ရှားပါ; ထိုထောင့်ကို sketch တွင် ဝိုင်းပါ သို့မဟုတ် bevel လုပ်ပါ |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | **Variable radius** ကို အမှန်ခြစ်ထား | ဖယ်ပြီး radius တစ်ခု ပေးပါ |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠၊ သတိပေးချက်) | ရွေးထားသော edge များ ထောင့်တွင် တွေ့ဆုံ၊ ဝိုင်းများသည် sharp crease တွင် တွေ့သည် | ပြင်စရာမလို၊ ပစ္စည်း တည်ဆောက်ပြီးပြီ။ crease အရေးကြီးပါက fillet edge နည်းနည်းသာ လုပ်ပါ |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | အစောပိုင်း ပြောင်းလဲမှုက edge ကို ဖယ်ရှား | {{ui:Pick edges}}၊ အနီ edge ကို ဖယ်ရှား၊ အသစ်ကို ရွေးပါ |
| "Pick the edges in the view, then add them." | Fillet သို့မဟုတ် chamfer တွင် edge မရှိ | {{ui:Pick edges}} |
| "Pick the faces to remove (open), then shell." | Shell တွင် ဖွင့်ရန် မျက်နှာ မရှိ | {{ui:Pick faces}} |
| "The shell could not be made with this thickness (…)." | နံရံသည် ပစ္စည်း၏ ပါးလွှာသော အပိုင်း သို့မဟုတ် fillet radius ထက် ထူ | နံရံ ပိုပါးအောင်၊ သို့မဟုတ် fillet ပိုကြီးအောင် လုပ်ပါ |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | ဖွင့်မည့် မျက်နှာ ကွေးနေသည် | {{ui:Pick faces}} ကို နှိပ်ပြီး ဖယ်ရှားပါ; flat မျက်နှာများကိုသာ ဖွင့်ပါ |
| "Draft: in this version flat faces only (the mesh kernel builds it)." | Draft လုပ်သော မျက်နှာသည် cylinder၊ cone သို့မဟုတ် freeform | ဖယ်ရှားပါ; flat မျက်နှာများကိုသာ draft လုပ်ပါ |
| "A face it opens is gone (…)." | အစောပိုင်း ပြောင်းလဲမှုက မျက်နှာ ဖယ်ရှား | {{ui:Pick faces}} ကို ထပ်ရွေးပါ |
| "Fillet1 changes the body's edges or walls; it cannot be copied. …" | Pattern သို့မဟုတ် mirror က fillet၊ chamfer သို့မဟုတ် shell ကို ကူးသည် | ဖယ်ပါ; cuts များကို အရင် pattern လုပ်ပြီး နောက်မှ fillet လုပ်ပါ |
| "It sits on a face only an exact kernel can find: not built yet in this version." | Mesh kernel မတွေ့နိုင်သော မျက်နှာပေါ် sketch (အစောပိုင်း build မှ) | Base plane သို့မဟုတ် extrude ၏ flat မျက်နှာပေါ် sketch လုပ်ပြီး dimension ဖြင့် နေရာချပါ |
| "It uses a face or edge of the solid, which only an exact kernel can find: not built yet in this version." | ပစ္စည်း၏ မျက်နှာ သို့မဟုတ် edge ပေါ်ရှိ reference plane၊ axis သို့မဟုတ် point | Base planes၊ sketch points သို့မဟုတ် coordinates ဖြင့် အစားထိုး ပြုလုပ်ပါ |
| "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." / "A taper: not built yet (it needs an exact kernel)." | Exact kernel သာ တည်ဆောက်နိုင်သော end condition သို့မဟုတ် taper | Blind သို့မဟုတ် Mid-plane အတိုင်း တိုင်းထားသော အနက် သုံးပါ; Taper ကို 0 ထားပါ |

## ရွေးချယ်ခြင်း ပြဿနာများ

- "That face is curved. Pick a flat face or a plane to sketch on." Sketch ဆွဲရန် ပြားချပ် မျက်နှာ လိုအပ်သည်။ Base plane ပေါ်တွင် sketch ဆွဲပြီး dimension ဖြင့် နေရာချပါ။
- "Fixed where picked" ဟု ပြသော မျက်နှာ: ၎င်းကို sketch edge ဖြင့် မဖန်တီးထား (ဥပမာ pattern copy ၏ မျက်နှာ) ဖြစ်သောကြောင့် ပစ္စည်း ပြောင်းသည့်အခါ ထိုမျက်နှာပေါ် sketch သည် နေရာ မပြောင်းပါ။
- Edge ထိရန် ခက်သည်: zoom in လုပ်ပါ။ Pointer သည် edge ပေါ်တွင် မှန်ကန်စွာ ရှိသောအခါ edge သည် ဘေးရှိ မျက်နှာထက် အနိုင်ရသည်။

## ဖိုင် ပြဿနာများ

| မက်ဆေ့ချ် | ပြုပြင်ရန် |
|---|---|
| 'PartCraft opens its own .partcraft.json files, exports from the CadCraft macro for SolidWorks (.cadcraft-sw.json) and STEP files. "bracket.igs" is none of these.' | ထိုဖိုင်များကိုသာ အသိအမှတ်ပြုသည် (STL၊ OBJ နှင့် 3MF mesh များနှင့် `.3dm` ဖိုင်များ အပါအဝင်) |
| '"part.stp" is not a STEP file (it does not start with ISO-10303-21).' | ဖိုင်သည် STEP စာသား မဟုတ်ပါ |
| "That STEP file is too big (over 60 MB) to import here." | မူရင်းဆီတွင် ရိုးရှင်းအောင် လုပ်ပါ |
| သင့်ကိုယ်တိုင် သိမ်းထားသော part တွင် "That file is too big to be a PartCraft part." | အစောပိုင်း build တွင် STEP solid ကြီးတစ်ခု import လုပ်ခဲ့သဖြင့် part ဖိုင်သည် 50 MB ကျော်သွားသည်။ ထို solid မပါသော အစောပိုင်း မိတ္တူကို သုံးပါ |
| "That file is too big to be a PartCraft part." | ဖိုင်သည် 50 MB ကျော်; PartCraft ဖိုင် မဟုတ်ပါ |
| "This is not a PartCraft file (it is not JSON)." / "This is not a PartCraft file." | ဖိုင် ပျက်စီးနေသည် သို့မဟုတ် အခြား program ၏ ဖိုင် |
| "This file was saved by a newer PartCraft (file version …); this one reads version …" | ပိုသစ်သော PartCraft ဖြင့် ဖွင့်ပါ |
| "Extrude2: the depth is bad." (သို့မဟုတ် တန်ဖိုးအခြား) | ဖိုင်ကို လက်ဖြင့် ပြင်ထား သို့မဟုတ် ပျက်စီးသည်။ အစောပိုင်း မိတ္တူကို သုံးပါ |
| Assembly ထဲ insert လုပ်ခြင်းတွင် "Part1.partcraft.json has no solid to insert." | Part ဖိုင်တွင် solid မရှိ။ ဖွင့်ပြီး solid တည်ဆောက်ကာ သိမ်းပြီး ထပ် insert လုပ်ပါ |

**ကျွန်ုပ်သိမ်းထားသော ဖိုင် မျှော်လင့်သောနေရာတွင် မရှိပါ။** သိမ်းခြင်းသည် ဒေါင်းလုဒ် ဖြစ်သည်: browser ၏ downloads ဖိုလ်ဒါ သို့မဟုတ် browser toolbar မှ downloads စာရင်းကို ကြည့်ပါ။ [Where your files go](common:your-files) ကို ကြည့်ပါ။

**Part ကို ဖွင့်သော်လည်း assembly ကို ဆက်ပြနေသည်။** Part က assembly နောက်ကွယ်တွင် load ဖြစ်သည်။ {{ui:Close}} ကို ရွေးပြီး assembly ကို ပိတ်ပါ။ Part ဖိုင်များ မဖွင့်မီ assembly များကို ပိတ်ပါ။

## ပုံဆွဲ ပြဿနာများ

| မက်ဆေ့ချ် | ပြုပြင်ရန် |
|---|---|
| "Build a solid first, then make its drawing." | Part ကို ဦးစွာ တည်ဆောက်ပါ |
| "No room on the sheet for: detail. Make the detail smaller or drop a view." | **Detail radius** သို့မဟုတ် **Detail scale** ကို သေးအောင် လုပ်ပါ၊ သို့မဟုတ် section ကို ဖယ်ပါ |
| "A detail is taken from the front, top, right or section view." | ထို view များထဲမှ တစ်ခုပေါ် နှိပ်ပါ |
| "Click on one of the views." | နှိပ်မှုသည် ဗလာ စာရွက်ပေါ် ဖြစ်သည် |
| "Position needs at least one datum reference." နှင့် အခြား frame message များ | Panel မေးသော datums ကို သတ်မှတ်ပါ၊ သို့မဟုတ် အခြား characteristic ကို ရွေးပါ |
| "The drawing views could not be made: …" | နောက်ဆုံး ပြောင်းလဲမှုကို Undo လုပ်ပါ။ ဆက်ဖြစ်ပါက သိမ်း၊ reload လုပ်ပြီး part ကို ပြန်ဖွင့်ပါ |

## Assembly ပြဿနာများ

| မက်ဆေ့ချ် | ပြုပြင်ရန် |
|---|---|
| "Build a solid first, then put it into an assembly." | Part တွင် solid မရှိသေး |
| "Insert a second part first (Add copy, Insert, or Edit › Duplicate)." | Joint အတွက် part နှစ်ခု လိုသည် |
| "Pick a face on a different part." | Joint ၏ မျက်နှာနှစ်ခု ကွဲပြားသော part များပေါ်တွင် ရှိရမည် |
| "That face is curved. Pick a flat face …" | Joint များသည် flat မျက်နှာမှ စတင်သည်။ Hole သို့မဟုတ် revolve axis အတွက် **Centre on** ကို သုံးပါ |
| "Bracket2 is not joined to the grounded part, so it stays where it was put." | နေရာချထားသော part သို့ joint ထည့်ပါ |
| "Revolute3 closes a loop that cannot close: it is off by 2.000 mm. …" | Part များ အားလုံး မတွေ့နိုင်: အရှည်၊ joint တစ်ခုစီ သုံးသော မျက်နှာများ၊ offsets (မျက်နှာချင်း ပုံ့ထားသော part များသည် အနက်တွင် သဘောတူရမည်) နှင့် limits ကို စစ်ပါ၊ သို့မဟုတ် loop ၏ joint တစ်ခုကို ဖယ်ပါ |
| "The face this joint uses is gone from Bracket." / "The axis this joint uses is gone from Bracket." | Part ကို ပြင်ထားသည်။ Joint ကို ဖယ်ပြီး ပြန်ပြုလုပ်ပါ |
| "The axis runs along the face, so it cannot set the joint's centre." | ထိုမျက်နှာကို ဖြတ်သော axis ကို ရွေးပါ၊ သို့မဟုတ် "The face's own origin" ကို ရွေးပါ |
| "An assembly keeps at least one part. Close it instead." | {{ui:Close}} ကို သုံးပါ |

**Part များ ချိတ်ဆက်ထားသော်လည်း နေရာမှားနေသည်။** Joint ၏ နှစ်ဖက်စလုံးအတွက် **Centre on** ကို တန်းညီရမည့် hole သို့မဟုတ် revolve axes သို့ သတ်မှတ်ပြီး **Angle (°)** နှင့် **Offset (mm)** ကို ညှိပါ။

## နှေးနေသည်

- မော်ဒယ်ပြုလုပ်နေစဉ် **Curves** ကို Normal သို့မဟုတ် Coarse သို့ သတ်မှတ်ပါ; export မလုပ်မီ Fine သို့ ပြောင်းပါ။
- Pattern အရေအတွက် ကြီးများ (ရာပေါင်းများစွာ မိတ္တူ) သည် ပြောင်းလဲမှုတိုင်း ပြန်တည်ဆောက်ရာတွင် အချိန်ယူသည်။ အခြား feature များပေါ်တွင် အလုပ်လုပ်စဉ် pattern ကို suppress လုပ်ပါ။
- Clash နှင့် motion check သည် part တိုင်းကို နှိုင်းယှဉ်သည်; assembly ကြီးများက ပိုကြာသည်။
- အခြား ပူသော tab များကို ပိတ်ပါ။ PartCraft သည် သင့်ကွန်ပျူတာ၏ processor နှင့် graphics ပေါ်တွင် run သည်။

## ဆက်ပြီး မရှင်းသေး

ဖိုင်ကို ဦးစွာ သိမ်းပါ ({{key:Mod+S}}), ထို့နောက် page ကို reload လုပ်ပြီး ပြန်ဖွင့်ပါ။ Feature ဆက်မအောင်မြင်ပါက ရွေးပြီး message ကို ဖတ်ပါ၊ နှင့် {{key:Mod+Z}} ဖြင့် နောက်ဆုံး ကောင်းသော အခြေအနေသို့ ပြန်သွားကြည့်ပါ။
