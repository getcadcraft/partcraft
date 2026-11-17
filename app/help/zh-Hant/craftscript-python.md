---
title: 以 Python 撰寫指令稿
summary: 以 Python 3 撰寫指令稿工作區的指令稿：類似 numpy 的值、從 0 開始的索引、共用工作區、列印、尚未提供的功能，以及 Python 如何像 CraftScript 與 Lua 一樣採封閉隔離。
keywords: Python, Python 3, CPython, WebAssembly, 封閉, 安全, 指令稿, 語言, cs, ws, 工作區, numpy, 陣列, 矩陣, 索引, print, display, 信任
from: 66eab56d
---

Python 是 [指令稿工作區](topic:craftscript) 的第三種語言。在編輯器上方的語言方塊中選擇 **Python**（`.py` 檔案會自動以 Python 開啟）。Python、Lua 與 CraftScript 共用相同的變數與內建函式，因此 Python 指令稿可以使用 CraftScript 指令稿所建立的內容，反之亦然。

每次造訪後的第一次 Python 執行，會從本網站載入 Python 本身（CPython 3.14，約 7 MB），需要數秒。Python 尚未包含在 {{ui:儲存供離線使用}} 中：請先在線上執行一次 Python 指令稿。

## Python 採封閉隔離

Python 指令稿與 CraftScript、Lua 指令稿一樣採封閉隔離：它們只能存取零件、變數與內建函式，其餘皆無法存取。每次執行都是在自己的沙箱中全新啟動的 Python，沙箱內有一個記憶體中的小型檔案樹（其標準程式庫，以及執行後即被清除的 `/tmp` 資料夾）。無論在瀏覽器或指令列中，它都無法存取網路、你的檔案或網頁的其他部分。他人提供的指令稿仍可能耗用大量時間或記憶體：按 {{ui:停止}} 即可結束。

## 基本要點

```
A = cs.magic(3)              # 每個內建函式都是 cs.<name>
B = A @ A.T                  # @ 為矩陣乘積，.T 為轉置
C = A * 2 + 1                # + - * / ** 逐元素運算，與 numpy 相同
print(A[0, 1], A[-1, -1])    # 從 0 開始；負數從結尾算起
row = A[1]                   # 矩陣上的單一索引：一列
big = A[A > 4]               # 邏輯遮罩選取元素
A[0, 0] = -5                 # 寫入陣列
V, D = cs.call('eig', 2, A)  # 多個結果：cs.call(名稱, 數量, …)
```

- 1 × 1 的陣列會以一般數字傳回；其他陣列、稀疏矩陣、網格、場與模型都是**值**。
- 值具有 `shape`（元組）、`T`、`type`、`numel()`、`copy()`、`tolist()`、`len()`（其列數），以及用於單一元素的 `float()`、`int()` 與 `bool()`。
- 比較運算（`<`、`==` 等）為逐元素，與 numpy 相同：會產生邏輯值。
- 傳入內建函式的數字清單會變成陣列：`cs.sum([1, 2, 3])`。`cs.tensor([[1, 2], [3, 4]])` 會建立矩陣。
- 字典會變成結構，混合型清單會變成儲存格，反之亦然。

指令稿建立的每一個全域變數（數字、值、字典、清單……），在執行結束時（即使發生錯誤後）都會出現在 **變數** 索引標籤中。以 `_` 開頭的名稱、函式、類別與模組則保留在 Python 中。`ws.name` 可直接讀取或設定變數，`ws_names()` 會列出它們。

`print(…)` 寫入主控台。`display(…)`（或 `cs.display`）會顯示網格、場或圖表，與 CraftScript 相同。

## 呼叫分析程式庫

程式庫函式的呼叫方式與內建函式相同：`cs.box_mesh(20, 10, 10, 5, 'hex')`、`cs.call('modal_tet', 2, …)`。請在指令稿中原樣寫出名稱：PartCraft 會在執行前找出指令稿所使用的程式庫函式。

## 尚未提供的功能

- numpy、scipy 及其他套件：此處只提供 Python 自身的標準程式庫（`math`、`json`、`itertools`、`decimal`、`statistics`……），但不包含其視窗、終端機與資料庫部分（`tkinter`、`curses`、`sqlite3`）。
- 通訊端與其他可能連到外部的功能：此處的 Python 無法連接網路。
- `time.sleep` 會立即返回。
- 編輯器中的程式碼摺疊，以及從 CraftScript 指令稿呼叫 Python 函式。
- 執行過程每 1000 行檢查一次指令預算與停止要求；單一內建函式內部的長時間運算會先完成。
