---
title: CraftScript ဘာသာစကား
summary: CraftScript တစ်မျက်နှာတည်းတွင်: matrix များ၊ range နှင့် index ပြုခြင်း၊ operator များ၊ control flow၊ function များ၊ struct နှင့် cell များ၊ comment များ၊ echo၊ error နှင့် step budget၊ MATLAB နှင့် ကွာခြားပုံ။
keywords: CraftScript, ဘာသာစကား, ဝါကျဖွဲ့စည်းပုံ, matrix, array, vector, tensor, index, end, colon, range, operator, element-wise, transpose, if, for, while, switch, try, catch, function, အမည်မဲ့ function, struct, cell, comment, echo, semicolon, MATLAB, Octave, ပြောင်းလဲအသုံးပြုခြင်း
from: d072b7d5
---

CraftScript သည် MATLAB နှင့် ဆင်တူစွာ ဖတ်ရန် ရေးထားသော matrix ဘာသာစကားဖြစ်သဖြင့် ဂဏန်းတွက်ချက်မှု ကုဒ်ဟောင်းအများစု (ဥပမာ လိုင်း 88 ကြောင်းရှိ topology optimization ကုဒ်) ကို အပြောင်းအလဲ အနည်းငယ်ဖြင့် run နိုင်ပါသည်။ ၎င်းကို [Script workspace](topic:craftscript) တွင်နှင့် command line မှ run နိုင်ပါသည်။

## တန်ဖိုးများ

| အမျိုးအစား | ဥပမာ | မှတ်ချက် |
|---|---|---|
| ဂဏန်း၊ array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | ဂဏန်းတိုင်းသည် array တစ်ခု ဖြစ်သည် (1×1 array)။ Array များကို column တစ်ခုချင်းစီအလိုက် သိမ်းထားပြီး dimension 8 အထိ ရှိနိုင်သည် |
| Logical | `A > 2`, `true` | true/false array များ ဖြစ်ပြီး index အဖြစ် အသုံးပြုနိုင်သည် |
| စာသား | `'beam'`, `"beam"` | |
| Sparse matrix | `sparse(i, j, v, n, n)` | Stiffness matrix များအတွက် |
| Mesh၊ field၊ model | `hexGrid(…)`, `part()`, `load('part.stl')` | `show` ဆွဲပေးသည့်အရာ |
| Struct | `s.E = 210e3` | အမည်ရှိ field များ |
| Cell | `c = {1, 'two', [3 4]}` | တန်ဖိုးမည်သည့်အမျိုးအစားမဆို စာရင်း |
| Function handle | `f = @(x) x.^2` | |

## Array များနှင့် index ပြုခြင်း

- Range များ: `1:5`, `0:0.1:1`။ `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`။
- Index သည် 1 မှ စသည်: `A(2, 3)`, `v(end)`, `A(:, 1)` (column တစ်ခုလုံး), `A(:)` (အားလုံးကို column တစ်ခုတည်းအဖြစ်), `v(v > 0)` (logical indexing)။
- MATLAB ကဲ့သို့ အဆုံးထက်ကျော်ပြီး assign လုပ်ပါက array ကြီးလာသည်: `v(10) = 1`။

## Operator များ

- `+ - * / \ ^` တို့သည် matrix operation များ ဖြစ်သည် (`A \ b` က ဖြေရှင်းသည်); `.* ./ .^` တို့သည် element တစ်ခုချင်းစီအလိုက် အလုပ်လုပ်သည်။ `'` က transpose ပြုလုပ်သည်။
- နှိုင်းယှဉ်မှုများ `== ~= < <= > >=`; logic `& | ~` (element တစ်ခုချင်းစီအလိုက်) နှင့် `&& ||` (short-circuit)။

## Control flow နှင့် function များ

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Function များကို script ၏ command များနောက်တွင် ထည့်နိုင်သည် သို့မဟုတ် function နာမည်ဖြင့် သီးခြား script tab တွင် ထည့်နိုင်သည်:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

နာမည်ကို အောက်ပါအစဉ်အတိုင်း ရှာသည်: variable, ထို part အတွင်းရှိ ထိုနာမည်ဖြင့် script, library function, built-in function။

## Echo၊ comment နှင့် output

- `;` မပါသော statement သည် တန်ဖိုးကို ပုံနှိပ်ပြသည်; `;` ပါပါက တိတ်ဆိတ်စွာ ထားသည်။
- `%` က comment စတင်သည်; သီးခြားလိုင်းများပေါ်ရှိ `%{` နှင့် `%}` က ၎င်းတို့ကြားရှိ လိုင်းများကို comment ပြုလုပ်သည်။
- `disp(x)`, `fprintf('%g\n', x)` နှင့် `display(x)` တို့သည် console သို့ ပုံနှိပ်သည်။

## Error နှင့် ကန့်သတ်ချက်များ

- Error များက ဘာမှားနေသည်ကို ရိုးရိုးစကားဖြင့် ပြောပြပြီး လိုင်း (နှင့် function call ကွင်းဆက်) ကို ပြသည်။
- run တိုင်းတွင် step budget ရှိသည် (panel ရှိ Run options); အဆုံးမဲ့ loop သည် မက်ဆေ့ဂျ်ဖြင့် ရပ်သွားသည် သို့မဟုတ် ရပ်ရန် ကို နှိပ်ပါ။
- Array တစ်ခုစီတွင် တန်ဖိုး 134 သန်းအထိ ထည့်နိုင်သည်။

## MATLAB နှင့် မတူသည်များ

- Plot command များသည် ၎င်းတို့၏ ရွေးချယ်စရာများကို call အတွင်းတွင် ထည့်သည်: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`။ `figure`, `hold`, `axis`, `title(…)` နှင့် ဆင်တူသော function များကို လက်ခံသော်လည်း ဘာမှမလုပ်ပါ။
- `input` နှင့် `keyboard` ကို မပံ့ပိုးပါ: script သည် မေးခွန်းမေးရန် ရပ်ထားနိုင်ခြင်း မရှိပါ။
- Toolbox များ မရှိပါ; [ခွဲခြမ်းစိတ်ဖြာမှု စာကြည့်တိုက်](topic:craftscript-library) နှင့် built-in function များသာ ရှိပါသည်။
