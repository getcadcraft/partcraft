---
title: ကိုယ်ပိုင် ခွဲခြမ်းစိတ်ဖြာမှု ရေးခြင်း
summary: Script workspace ရှိ script များအဖြစ် ခွဲခြမ်းစိတ်ဖြာမှု တည်ဆောက်ခြင်း: part ကို mesh ပြုလုပ်ခြင်း၊ assemble နှင့် solve ပြုခြင်း၊ field နှင့် convergence plot ပြသခြင်း၊ လက်ဖြင့်တွက်ချက်မှုဖြင့် ရလဒ်ကို စစ်ဆေးခြင်း၊ နှင့် ပြောင်းလဲမှုများ မျှဝေသည့် သီးခြား script များအဖြစ် အဆင့်များကို သိမ်းခြင်း။
keywords: ကိုယ်ပိုင် ခွဲခြမ်းစိတ်ဖြာမှု, custom analysis, FEA script, finite element, assemble, stiffness, boundary conditions, solve, pcg, sparse, field, post-process, convergence, verification, လက်ဖြင့်တွက်ချက်ခြင်း, check, workflow
from: 0f471a8e
---

Script workspace ရှိ ခွဲခြမ်းစိတ်ဖြာမှုသည် variable များကို အချင်းချင်း ပေးပို့သည့် script တိုတိုအနည်းငယ် ဖြစ်သည်။ လိုအပ်ချက်နှင့် နီးစပ်သော [စာကြည့်တိုက်](topic:craftscript-library) function တစ်ခုမှ စတင်ပြီး မိတ္တူပွားကာ ပြောင်းလဲပါ; သို့မဟုတ် အောက်တွင်ပြသထားသည့်အတိုင်း တည်ဆောက်ပါ။

## 1. Mesh

```
model = part();                  % သင်မော်ဒယ်လုပ်နေသော part ကို model အဖြစ်
m = tetmesh(model, 4);           % အကျယ် 4 mm ခန့် tetrahedra
show(m)
```

ဆက်သွားမီ view တွင် mesh ကို စစ်ပါ: {{key:F}} က ၎င်းကို ကိုက်ညီအောင်လုပ်သည်၊ **Shown** ရှိ {{ui:eye}} က part ကို ဝှက်သည်။

## 2. Assemble နှင့် solve

Element loop ကို script ထဲတွင် ရေးပါ (ကျောင်းစာအုပ်နှင့် ဆင်တူသည်)၊ ပြီးလျှင် လေးလံသော အပိုင်းများကို built-in function များအတွက် ထားပါ: element matrix များ၊ triplet များမှ sparse assembly၊ နှင့် preconditioner ပါသော conjugate gradient solver။ `static_tet` ကဲ့သို့ စာကြည့်တိုက် function (စာကြည့်တိုက်တွင် ရှိပြီးနောက်) သည် ကူးယူရန် ပြည့်စုံသော ဥပမာ ဖြစ်သည်။

## 3. ရလဒ်ကို ပြသခြင်း

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % node တစ်ခုလျှင် တန်ဖိုးတစ်ခု
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Legend ၏ range ကို ရိုက်ထည့်နိုင်သည် သို့မဟုတ် {{ui:Auto}} သို့ ပြန်သတ်မှတ်နိုင်သည်။
- Node တစ်ခုရှိ တန်ဖိုးများကို ဖတ်ရန် mesh ကို နှိပ်ပါ။
- တူညီသော `'id'` ရှိသော plot ကို နေရာတွင်ပင် အပ်ဒိတ်လုပ်သည်၊ ထို့ကြောင့် convergence ကို ကြည့်ရန် loop အတွင်း print နှင့် plot ပြုလုပ်ပါ။

## 4. စစ်ဆေးပါ

သင်သိသော တစ်ခုနှင့် နှိုင်းယှဉ်ပါ: cantilever ၏ ထိပ်ဖျား ပြိုဆင်းမှုကို PL³/3EI နှင့်၊ အပေါက်ပါသော ပြားကို ၎င်း၏ ဖိအား concentration factor နှင့်၊ reaction များကို load များနှင့်။ စစ်ဆေးမှုကို သီးခြား script အဖြစ် ရေးပါ၊ ထို့ကြောင့် ပြောင်းလဲတိုင်း ထပ်မံ run သည်:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. သိမ်းထားခြင်း

- အဆင့်တစ်ခုစီသည် ကိုယ်ပိုင် script tab ဖြစ်နိုင်သည်: ၎င်းတို့သည် variable များကို မျှဝေသဖြင့် တစ်ခုပြီးတစ်ခု run ပါ။
- Script များကို part ထဲတွင် သိမ်းသည်။ ရလဒ်များကိုလည်း သိမ်းလိုပါက Variables tab ရှိ **ပြောင်းလဲမှုများကို part နှင့်အတူ သိမ်းရန်** ကို အမှန်ခြစ်ပါ (32 MB အထိ)။
- Script ကို မျှဝေရန် download ပြုလုပ်ရန် Script အုပ်စုရှိ {{ui:Save}} ကို နှိပ်ပါ; ယူလာရန် {{ui:Open}} ကို နှိပ်ပါ။
