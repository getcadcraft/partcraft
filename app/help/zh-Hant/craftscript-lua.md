---
title: 以 Lua 撰寫指令稿
summary: 以 Lua 5.4 撰寫指令稿工作區的指令稿：cs 內建函式表、以值形式使用並支援索引與運算的陣列、共用的 ws 工作區、列印與顯示結果，以及被停用的功能。
keywords: Lua, Lua 5.4, 指令稿, 語言, cs 表, ws, 工作區, userdata, 張量, 陣列, 矩陣, print, display, 沙箱
from: 82c668b3
---

Lua 是 [指令稿工作區](topic:craftscript) 的第二種語言。在編輯器上方的語言方塊中選擇 **Lua**（`.lua` 檔案會自動以 Lua 開啟）。Lua 與 CraftScript 共用相同的變數與內建函式，因此 Lua 指令稿可以使用 CraftScript 指令稿所建立的內容，反之亦然。

## 基本要點

```
-- 每個內建函式都在 cs 表中
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 從 1 開始計數，與 CraftScript 相同
print(K(1, 1), #K)             -- 一個元素；元素的數量

-- 工作區：所有指令稿都看得到的相同變數
ws.total = K(1, 1) * 2
print(ws.total)

-- 同一函式的多個結果
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` 會呼叫任何內建函式並回傳其第一個結果；`cs.call(name, n, …)` 會回傳 `n` 個結果。
- `cs.tensor({1, 2, 3})` 建立一列，`cs.tensor({{1, 2}, {3, 4}})` 建立一個矩陣。
- 陣列、稀疏矩陣、網格與場都是具有方法的值：`t(i, j)` 或 `t:get(i, j)`、`t:set(i, j, v)`、`t:shape()`、`#t`、`t:T()`（轉置）、`t:totable()`。`+ - * / ^` 的意義與 CraftScript 中相同（`*` 為矩陣乘積）；`t:times(u)` 逐元素相乘。
- 1×1 的陣列會以一般的 Lua 數值傳回。
- `ws.name` 讀寫共用工作區。全域變數若在指令稿結束時仍存在，也會存入工作區。
- `print(…)` 寫入主控台；`cs.show(f)`、`cs.plot(y)` 及其他顯示函式的用法與 CraftScript 相同。

## 呼叫分析程式庫

分析程式庫的函式（程式庫索引標籤）以及零件自身指令稿所定義的 CraftScript 函式，同樣可透過 `cs` 存取：

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- 兩個輸出
```

這些函式會在指令稿啟動前就被找到，因此請在指令稿中直接寫出名稱：`cs.static_tet(` 或 `cs.call('static_tet', …)`。在指令稿執行時才組合出的名稱，只能存取內建函式。以 `cs.struct({ … })` 建立的結構是 CraftScript 結構；由它們組成的 Lua 清單（`{ cs.struct(…), … }`）則是儲存格，也正是程式庫設定所需要的格式。若程式庫函式內發生錯誤，訊息會指出該函式與其行號，並指向呼叫它的你的程式行。

## 已停用的功能

指令稿無法存取檔案、網路或網頁：`io`、`os`（時鐘除外）、`require`、`dofile`、`loadfile` 與 `debug` 已被移除。如需匯入資料，請使用指令稿工作區的開啟功能與變數。步數預算與停止的運作方式與 CraftScript 相同。
