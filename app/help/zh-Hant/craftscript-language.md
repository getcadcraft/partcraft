---
title: CraftScript 語言
summary: CraftScript 單頁概覽：矩陣、範圍與索引、運算子、流程控制、函式、結構與儲存格、註解、輸出、錯誤與步數預算，以及與 MATLAB 的差異。
keywords: CraftScript, 語言, 語法, 矩陣, 陣列, 向量, 張量, 索引, end, 冒號, 範圍, 運算子, 逐元素, 轉置, if, for, while, switch, try, catch, 函式, 匿名函式, 結構, 儲存格, 註解, echo, 分號, MATLAB, Octave, 移植
from: d072b7d5
---

CraftScript 是一種矩陣語言，寫法像 MATLAB，因此大多數經典數值程式碼（例如 88 行的拓撲最佳化程式碼）只需稍作修改即可執行。它在 [指令稿工作區](topic:craftscript) 中執行，也可從指令列執行。

## 值

| 類型 | 範例 | 說明 |
|---|---|---|
| 數值、陣列 | `a = 3`、`v = [1 2 3]`、`A = [1 2; 3 4]` | 每個數值都是陣列（1×1 的陣列）。陣列以欄為順序儲存，最多 8 個維度 |
| 邏輯值 | `A > 2`、`true` | true/false 的陣列；可作為索引 |
| 文字 | `'beam'`、`"beam"` | |
| 稀疏矩陣 | `sparse(i, j, v, n, n)` | 用於剛度矩陣 |
| 網格、場、模型 | `hexGrid(…)`、`part()`、`load('part.stl')` | `show` 所繪製的內容 |
| 結構 | `s.E = 210e3` | 具名欄位 |
| 儲存格 | `c = {1, 'two', [3 4]}` | 任意值的清單 |
| 函式控制代碼 | `f = @(x) x.^2` | |

## 陣列與索引

- 範圍：`1:5`、`0:0.1:1`。`linspace(a, b, n)`、`zeros(n, m)`、`ones`、`eye`、`rand`。
- 索引從 1 開始：`A(2, 3)`、`v(end)`、`A(:, 1)`（整欄）、`A(:)`（全部排成一欄）、`v(v > 0)`（邏輯索引）。
- 超出結尾的賦值會擴增陣列，與 MATLAB 相同：`v(10) = 1`。

## 運算子

- `+ - * / \ ^` 為矩陣運算（`A \ b` 求解）；`.* ./ .^` 逐元素運算。`'` 為轉置。
- 比較：`== ~= < <= > >=`；邏輯：`& | ~`（逐元素）與 `&& ||`（短路）。

## 流程控制與函式

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

函式寫在指令稿中所有指令之後，或放在以函式名稱命名的獨立指令稿標籤中：

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

名稱的查找順序為：變數、此零件中同名的指令稿、程式庫函式、內建函式。

## 回顯、註解、輸出

- 不加 `;` 的陳述式會印出其值；加上 `;` 則保持安靜。
- `%` 開始註解；單獨一行的 `%{` 與 `%}` 會將其間的行註解掉。
- `disp(x)`、`fprintf('%g\n', x)` 與 `display(x)` 會印到主控台。

## 錯誤與限制

- 錯誤會以淺白的文字說明問題，並標示行號（以及函式呼叫鏈）。
- 每次執行都有步數預算（在面板的執行選項中設定）；無窮迴圈會以訊息停止，或按 {{ui:停止}}。
- 每個陣列最多可容納 1.34 億個值。

## 與 MATLAB 不同之處

- 繪圖指令會將其選項放在呼叫中：`plot(x, y, 'title', 'Error', 'xlabel', 'Step')`。`figure`、`hold`、`axis`、`title(…)` 等指令會被接受，但不做任何事。
- `input` 與 `keyboard` 不受支援：指令稿無法停下來提問。
- 沒有工具箱；可用的是 [分析程式庫](topic:craftscript-library) 與內建函式。
