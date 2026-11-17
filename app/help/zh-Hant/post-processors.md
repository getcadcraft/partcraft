---
title: 可編輯的後處理器
summary: 後處理器是一個簡短的文字檔，可將刀具路徑轉換為控制器所用的G-code。複製內建的後處理器，修改所需的行（行號、換刀、歸位移動、結束碼），在輸入時查看其寫出的G-code，並與零件一起儲存。
keywords: 後處理器, G-code, NC, GRBL, LinuxCNC, 編輯後處理器, 自訂後處理器, cpost, 換刀, M6, G43, 固定循環, 行號, 模態, 事件, 變數
from: 36ab8a38
---

同一條刀具路徑必須以不同方式寫入不同的控制器：有無行號、`M6`或暫停、`G28`或`G53`、`M30`或`M2`。**後處理器**是說明寫法的簡短文字。PartCraft內建的三個後處理器（Fanuc風格、GRBL與LinuxCNC）皆以此格式撰寫，因此你自己的後處理器可以從複製其中一個開始。

切削前，請先在你的機器本身的模擬器中檢查輸出，並先讓刀具在毛胚上方空走一次。內建後處理器寫出的內容，與此格式出現前完全相同（測試會逐位元組比對數百個程式的輸出），但這裡的任何內容都尚未在你的機器上驗證；你修改的後處理器，則須由你自行驗證。

## 建立後處理器

在製造中，於**後處理器**下：

- 在內建控制器上選擇{{ui:編輯後處理器…}}，會開啟其**你自己的副本**。在你自己的後處理器上選擇，則會開啟該後處理器。
- {{ui:新增後處理器…}}會從一個含有所有事件的小型空白後處理器開始。
- {{ui:匯入後處理器檔案…}}會讀取`.cpost`文字檔（即你在編輯器中透過**另存為檔案…**取得的檔案）。

編輯器會在你輸入時顯示文字、一行說明該後處理器是否可讀取（以及哪一行有誤），以及該後處理器寫出的G-code。**預覽使用**可選擇一個會執行所有事件的小型範例程式，或此零件本身的程式。{{ui:儲存}}會將後處理器存入零件檔案中（最多20個後處理器），並將其設為控制器。後處理器會隨零件一起移動；若要在另一個零件中使用，請將其儲存為檔案，再於該零件中匯入。

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

以`//`開頭的行與空白行會被忽略。最上方為設定；接著每個事件各有一個`on <event>`區塊，並以`end`結束。省略的事件不會寫出任何內容。

| 設定項目 | 意義 |
|---|---|
| `post <id>` | 後處理器的id：字母、數字、`-`與`_` |
| `name <text>` | 控制器清單中顯示的名稱 |
| `extension <ext>` | 檔案副檔名：nc、ngc、tap … |
| `line-numbers 10` / `off` | 每個`emit`行加上`N10`、`N20`…，或不加行號 |
| `decimal-point yes` / `no` | 以`10.`取代`10`（註解永遠不會帶小數點） |
| `canned-cycles yes` / `no` | `no`：孔會以其所代表的G0/G1移動寫出 |
| `modal <group> <words>` | 某群組的字詞（`modal motion G0 G1 G2 G3`），僅在變更時才寫出 |

## 事件

對於一個程式，事件依下列順序執行：`start`；接著每個作業時執行`operation`，換刀時（`tool-change`）、轉速變更時（`spindle`）、移至第一個點的移動（位於第一次快速移動之前）執行`approach`，然後是`coolant-on`，接著其移動為`rapid`、`feed`與`arc`，每個固定循環則為`cycle-start`，每個孔一次`cycle-hole`，最後為`cycle-end`；最後是`end`。

每個事件可使用其所屬移動類型的變數，寫法為`{name}`：程式（`name`、`program`、`setup.axis`、`setup.origin`、`setup.coolant`）、毛胚（`stock.kind`、`stock.d`、`stock.sx`、`stock.sy`、`stock.sz`、`stock.minx` … `stock.maxz`）、刀具（`tool.number`、`tool.desc`、`tool.kind`、`tool.d`、`tool.flutes`、`tool.fluteLen`）、作業（`op.name`、`op.type`）、`rpm`、移動的點（`x`、`y`、`z`、`f`，以及當某軸變更時為true的`moved`）、圓弧（`arc.g`為2或3、`arc.i`、`arc.j`、`arc.cx`、`arc.cy`）與孔（`hole.x`、`hole.y`、`hole.z`、`hole.r`、`hole.q`、`hole.return`、`hole.first`、`cycle.kind`、`cycle.init`、`feed`）。編輯器中的**事件與變數**清單會顯示各事件可見的變數。可讀取與設定的狀態有：`cool`、`offset`，以及`at.x`、`at.y`、`at.z`、`at.f`（最後寫出的值）。

## 語句

| 語句 | 功能 |
|---|---|
| `raw TEXT` | 原樣寫出的一行（不加行號） |
| `comment TEXT` | `(TEXT)`，並移除非ASCII字元與括號 |
| `emit WORD WORD …` | 一行字詞；輸出為空的字詞會略去；若無字詞，則不寫出該行 |
| `word WORD …` | 將字詞加入正在建立的行；單獨的`emit`會結束該行 |
| `if EXPR` … `else` … `end` | 條件：`a == b`、`a != b`、`not a`、`a and b`、`a or b`、`a??b`（a，否則為b） |
| `for tool in tools` … `end` | 對程式所用的每把刀具執行一次 |
| `set NAME EXPR` | 記住一個值（`set offset tool.number`） |
| `reset NAME …` | 清除模態字詞（一個群組、如`Z`的位址字母，或`at.z`） |
| `do rapid X Y Z` | 對一個點執行`rapid`事件 |

字詞是帶有`{variable|filter}`空位的文字。篩選器包括`upper`、`lower`、`pad:N`（補零）、`cut:N`（前N個字元）、`safe`（註解安全的ASCII）與`int`。結尾為`~`的字詞為**模態**：只有當其與上次寫出的內容不同時才會寫出（`G1~`、`X{x}~`）。結尾為`~!`的字詞每次都會寫出，且仍會被記住。不是變數的名稱即為純文字（`G81`、`mist`）。數值會四捨五入至0.001 mm，且不寫出末尾的零。

## 後處理器無法做到的事

後處理器只決定移動如何寫出，僅此而已。它無法變更刀具路徑、調整作業順序、分割圓弧、新增軸、得知機器的行程或運動學，也無法對座標進行運算（沒有`+`）。探測、刀具壽命與子程式循環、第4軸與第5軸輸出，以及車床程式碼尚未實作。來自其他程式、「.cps」格式的後處理器檔案無法載入：這是另一種更簡單的格式。
