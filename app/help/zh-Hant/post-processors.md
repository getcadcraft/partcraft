---
title: 可編輯的後處理器
summary: 後處理器是一個短文字檔，將刀具路徑轉換為控制器所用的 G-code。複製其中一個內建後處理器，修改所需的行（行號、換刀、歸零移動、結束代碼），在輸入時即可看到它寫出的 G-code，並將其與零件一併保存。
keywords: 後處理器, 後處理, G-code, NC, GRBL, LinuxCNC, 編輯後處理器, 自訂後處理器, cpost, 換刀, M6, G43, 固定循環, 行號, 模態, 事件, 變數
from: c78d0cae
---

同一條刀具路徑在不同控制器上必須以不同方式寫出：有無行號、使用 `M6` 或暫停、`G28` 或 `G53`、`M30` 或 `M2`。**後處理器**就是說明這些差異的短文字。PartCraft 的三個內建後處理器（Fanuc式、GRBL 與 LinuxCNC）皆以此格式撰寫，因此你自己的後處理器可以從其中一個的副本開始。

切削前，請在機台自己的模擬器中檢查輸出，並先在毛胚上方的空中執行。內建後處理器寫出的內容，與此格式出現之前所寫的完全相同（測試會逐位元組比對數百個程式的輸出），但這裡的任何內容都未在你的機台上驗證，而你修改的後處理器，由你自己負責驗證。

## 建立後處理器

在加工中，於**後處理器**下：

- 對內建控制器按{{ui:編輯後處理器…}}會開啟**你自己的副本**。對你自己的後處理器按下，則會開啟該後處理器。
- {{ui:新增後處理器…}}從一個包含所有事件的小型空白後處理器開始。
- {{ui:匯入後處理器檔案…}}讀取 `.cpost` 文字檔（即在編輯器中按**另存為檔案…**取得的檔案）。

編輯器會在你輸入時顯示文字、一行說明它是否可讀（以及哪一行有誤），以及後處理器寫出的 G-code。**預覽使用**可選擇一個會執行每個事件的小型範例程式，或是本零件自己的程式。{{ui:儲存}}會將後處理器保存在零件檔案中（最多 20 個），並將其選為控制器。後處理器會隨零件一起移動；若要在另一個零件中使用，請將其另存為檔案，再到該零件中匯入。

## 後處理器的樣子

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

以 `//` 開頭的行與空白行會被忽略。最上方為設定；其後是每個事件各一個 `on <事件>` 區塊，以 `end` 結束。未列出的事件不會寫入任何內容。

| 設定 | 意義 |
|---|---|
| `post <id>` | 後處理器的 id：字母、數字、`-` 與 `_` |
| `name <text>` | 「控制器」清單中所顯示的名稱 |
| `extension <ext>` | 檔案副檔名：nc、ngc、tap 等 |
| `line-numbers 10` / `off` | 每個 `emit` 行上的 `N10`、`N20` …，或不寫行號 |
| `decimal-point yes` / `no` | `10.` 而非 `10`（註解不會帶小數點） |
| `canned-cycles yes` / `no` | `no`：孔會寫成它所代表的 G0/G1 移動 |
| `modal <group> <words>` | 某一群組的字（例如 `modal motion G0 G1 G2 G3`），僅在改變時才寫出 |

## 事件

對一個程式，事件依下列順序執行：`start`；然後對每個操作依序為 `operation`、`tool-change`（刀具變更時）、`spindle`（轉速變更時）、`approach`（移至第一點的移動，在第一個快速移動之前）、`coolant-on`，接著是其移動 `rapid`、`feed` 與 `arc`，每個固定循環則為 `cycle-start`、每個孔一次 `cycle-hole`，最後是 `cycle-end`；最後為 `end`。

超出三軸的更多事件（若後處理器缺少，會拒絕此類程式，並指出缺少的事件）：

| 事件 | 時機 | 其變數 |
|---|---|---|
| `index` | 在刀具方向與上一次不同的操作之前，以及在有旋轉軸的機台上第一個操作之前 | `rot.a`、`rot.b`、`rot.c`（要移至的位置；機台沒有的軸為空）、`first.x`、`first.y`、`first.z` |
| `rapid-rotary`、`feed-rotary` | 切削時旋轉軸移動的操作的移動 | `x`、`y`、`z`、`rot.a`、`rot.b`、`rot.c`、`f`、`rot.moved`、`inverse`（需要逆時間進給時為 yes）、`invf`（1/分鐘） |
| `rotary-end` | 此類操作之後 | |
| `probe-move` | 探針觸發時停止的移動 | `x`、`y`、`z`、`f`、`probe.n`（1 至 4）、`probe.axis`（x、y 或 z）、`probe.k`（1、2 或 3） |
| `probe-set` | 一次探測循環的碰觸之後 | `probe.kind`（`"z"`、`"x"`、`"y"` 或 `centre`）、`probe.action`（`set` 或 `measure`）、`probe.expect`、`probe.cx`、`probe.cy` |
| `thread` | 車床上的螺紋移動 | `x`、`z`、`thread.lead` |

每個事件都可使用：`kin`（none、a、b、ac、bc）、`rotary` 與 `tcp`（yes 或 no，取自設定中的機台）、`pivot.x`、`pivot.y`、`pivot.z`、操作的 `op.tilt` 與 `op.turn`，以及車床上的 `spin.mode`（css 或 rpm）、`spin.css`、`spin.max` 與 `tool.nose`。數值為空的字母詞（例如沒有 A 軸的機台上的 `A{rot.a}`）會從該行中省略。與 x、y、z 比較時請以文字加引號進行（`if probe.kind == "z"`）：若不加引號，它們是移動的座標。

後處理器頂部另外兩行可使其成為車床後處理器：`machine lathe`（之後僅寫出 X 與 Z，並像銑床後處理器拒絕車削路徑那樣拒絕銑削路徑），以及 `lathe-x diameter` 或 `lathe-x radius`。

每個事件都可使用其自身移動類型的變數，寫作 `{name}`：程式（`name`、`program`、`setup.axis`、`setup.origin`、`setup.coolant`）、毛胚（`stock.kind`、`stock.d`、`stock.sx`、`stock.sy`、`stock.sz`、`stock.minx` … `stock.maxz`）、刀具（`tool.number`、`tool.desc`、`tool.kind`、`tool.d`、`tool.flutes`、`tool.fluteLen`）、操作（`op.name`、`op.type`）、`rpm`、移動的點（`x`、`y`、`z`、`f`，以及 `moved`：有軸改變時為 true）、圓弧（`arc.g` 為 2 或 3、`arc.i`、`arc.j`、`arc.cx`、`arc.cy`），以及孔（`hole.x`、`hole.y`、`hole.z`、`hole.r`、`hole.q`、`hole.return`、`hole.first`、`cycle.kind`、`cycle.init`、`feed`）。編輯器中的**事件與變數**清單顯示每個事件可見的變數。可讀取與設定的狀態：`cool`、`offset`，以及 `at.x`、`at.y`、`at.z`、`at.f`（最後寫出的值）。

## 陳述式

| 陳述式 | 作用 |
|---|---|
| `raw TEXT` | 原樣寫出的一行（不加行號） |
| `comment TEXT` | `(TEXT)`，其中的非 ASCII 字元與括號會被移除 |
| `emit WORD WORD …` | 一行字詞；結果為空的字會被省略；沒有字詞則不寫出該行 |
| `word WORD …` | 將字詞加入正在建立的行；單獨的 `emit` 會結束該行 |
| `if EXPR` … `else` … `end` | 條件：`a == b`、`a != b`、`not a`、`a and b`、`a or b`、`a??b`（a，否則為 b） |
| `for tool in tools` … `end` | 對程式所用的每把刀具執行一次 |
| `set NAME EXPR` | 記住一個值（`set offset tool.number`） |
| `reset NAME …` | 忘記模態字（某一群組、位址字母如 `Z`，或 `at.z`） |
| `do rapid X Y Z` | 對一點執行 `rapid` 事件 |

字詞是帶有 `{variable|filter}` 空位的文字。篩選器有 `upper`、`lower`、`pad:N`（以零補足）、`cut:N`（前 N 個字元）、`safe`（註解安全的 ASCII）與 `int`。結尾為 `~` 的字詞是**模態**：只有當它與上次寫出的內容不同時才寫出（`G1~`、`X{x}~`）。結尾為 `~!` 的字詞每次都寫出，且仍會被記住。不是變數的名稱為純文字（`G81`、`mist`）。數值會四捨五入到 0.001 mm，並省去末尾的零。

## 後處理器無法做到的事

它只決定移動如何寫出，除此之外別無其他。它無法更改刀具路徑、重新排序操作、分割圓弧、增加軸、了解你機台的行程或運動學，也無法對座標做運算（沒有 `+`）。旋轉位置本身來自設定中描述的機台，而非後處理器：後處理器可以更改其正負號或字母，但不能更改運動學。刀具壽命與子程式循環尚未實作。來自其他程式的 `.cps` 式後處理器檔案無法載入：這是一種不同、更簡單的格式。
