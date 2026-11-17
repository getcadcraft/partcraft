---
title: 撰寫產生器
summary: 產生器是帶有註解行的 CraftScript、Lua 或 Python 指令稿，註解行宣告其輸入。說明輸入如何變成表單、指令稿必須留下什麼（body、sheet、problems）、一個完整的小範例，以及如何將指令稿開啟為產生器。
keywords: 產生器, 撰寫, 指令稿, CraftScript, 標頭, 輸入, @input, @generator, body, sheet, problems, to_body, mfg_check, 資料表, 範例, 晶格, 場
from: ed8a5ed8
---

產生器是一般的指令稿（[CraftScript](topic:craftscript)、Lua 或 Python），開頭有幾行註解。PartCraft 會讀取這些註解並建立表單；指令稿會以已設定好的變數讀取輸入值。

## 標頭

將以下內容放在註解行中（CraftScript 用 `%`、Lua 用 `--`、Python 用 `#`）：

```
% @generator 熱交換器
% @input mdot: kg/s = 0.2 [0.01 .. 10] "質量流量"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "曲面"
% @input solid: = true
% @input note: = "text"
```

輸入的格式為 `name: unit = default`，之後可選擇加上範圍 `[min .. max]`（數值會落在此範圍內）、選項清單 `{a, b, c}`，以及引號中的標籤。單位只是表單上的標示：**傳入的值就是該單位的值**，因此想使用 SI 的指令稿必須自行換算；`to_si(value, 'kg/s', 'kg/s')` 也會檢查單位是否符合預期。名稱由英文字母、數字與底線組成；`body`、`sheet` 與 `problems` 為保留字。

## 指令稿留下的內容

| 變數 | 內容 |
|---|---|
| `body` | **必要。** 表面網格，通常來自 `[body, info] = to_body(field, h)`。執行結束時會被修復並檢查。 |
| `sheet` | 選用。結構，每個欄位為數字或文字，或為含 `value`、`unit`、`ref` 與 `note` 的結構。會成為資料表。 |
| `problems` | 選用。來自 `mfg_check(field, 'sls', struct(), h)` 的 `problems` 儲存格，或自行建立的項目。會送往檢查，並列在問題清單中。 |

## 完整的小範例

```
% 空心立方體，帶一道壁。
% @generator 空心立方體
% @input side: mm = 12 [4 .. 40] "邊長"
% @input wall: mm = 1.5 [0.5 .. 5] "壁厚"
% @input h: mm = 0.5 [0.25 .. 2] "體素大小"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', '網格的');
```

這會產生一個封閉的方塊，而檢查會將其內部的密封回報為粉末製程的錯誤。將體素大小 `h` 設為你想要的最薄壁厚的至多三分之一：低於約三個體素時，壁面就不可靠。

## 場

可用的函式包括 `field_sphere`、`field_box`、`field_capsule`、`field_cylinder`、`field_torus`、`field_revolve`（由剖面產生的旋轉實體）、`tpms`（陀螺面、Schwarz P 與鑽石曲面，可指定晶胞大小，且壁厚可在零件中變化）、`lattice` 與 `lattice_beams`、`along`（沿路徑的圓形通道）、布林運算 `field_union`、`field_intersect`、`field_subtract`、平滑的 `field_blend`，以及 `field_offset`、`field_shell`、`field_move`、`field_rotate`、`field_scale`。`sample(f, points)` 會回傳各點的帶號距離（內部為負值），`field_voxel` 會為求解器提供體素。[場](topic:fields)說明其定義。

值得留意的限制：薄板壁厚超過晶胞約四分之一時會封閉通道；比約三個體素更細的特徵可能會夾縮；`along` 會以圓錐相接，因此半徑快速變化時會留下凸起（若需要剖面，請使用 `field_revolve`）。

## 將指令稿開啟為產生器

在 {{ui:Engineer}} 工作區中點選 {{ui:Open}} 並選擇檔案。沒有 `@generator` 或 `@input` 行的指令稿會被拒絕，因為沒有任何可設定的項目。產生器會保存在此瀏覽器中（最多 20 個），{{ui:Remove}} 會將其刪除。由產生器開始的實體會附帶指令稿的副本，因此零件不依賴該檔案。

一個檔案也可以包含多個產生器，即 JSON 套件 `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`。
