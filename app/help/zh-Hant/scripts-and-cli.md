---
title: 指令稿與指令列
summary: PartCraft指令稿格式（.pcscript），可將整個零件寫成可讀的文字；另有partcraft指令列工具，可在不使用螢幕的情況下建構、變更、回溯與檢查零件。
keywords: 指令稿，pcscript，文字，指令列，cli，終端機，批次，自動化，檢查，lint，建構，匯出，版本控制，差異，參數化指令稿
from: c56df222
---

謹慎建模，更多取決於紀律，而非按鈕。以文字寫成的零件可以被閱讀、審查、逐行比較，並可由指令稿重新建構。PartCraft支援雙向轉換：任何零件都可以寫成指令稿，而指令稿也能建構出零件。

## 在應用程式中

在{{ui:參數}}索引標籤的**指令稿**下：

- {{ui:存成腳本}}會將開啟的零件下載為 `<name>.pcscript`。
- {{ui:開啟腳本}}會從 `.pcscript` 檔案建構零件。若有錯誤，會以行號回報，且不會取代任何內容。

## 指令稿格式

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

規則如下：

- 位於最左側的行會開始一個陳述式：`pcscript`、`part`、`param`、特徵類型（`sketch`、`extrude`、`revolve`、`hole`、`lpattern`、`cpattern`、`mirror`、`fillet`、`chamfer`、`shell`、`import` 及較新的類型），後面接其名稱；或為 `rollback <feature>`。
- 縮排的行是上一個陳述式的設定。單獨一個設定（`through`、`reverse`、`suppressed`）表示「是」。
- 數值設定可以是數字，或以 `=` 加上運算式，形成方程式：`depth = thick`。
- 在草圖中：`on` 用來指定平面（`front`、`top`、`right`、`face Base end`、`face Revolve1 side l3`）；幾何為 `point <name> x, y`、`line <name> <point> <point>`、`circle <name> <centre> <radius>`、`arc <name> <centre> <start> <end>`（逆時針）或 `spline <name> fit|control <points>`；關係由其類型及所連接的名稱組成（`O` 為原點）；標註以其數值或 `= expression` 結尾。
- 幾何或關係行的選用設定，放在行尾的方括號內，以 `;` 分隔：`[construction]`、`[side -1; label 5, 3]`。
- `#` 開始註解（位於行首或空格之後）。含空格的名稱須放在 "雙引號" 內。
- 特徵編號依寫入順序從 f1 開始計算。邊與面的參照會使用這些編號，例如 `edge f2.side:l3 f2.end [at 50, 0, 10]`。
- 格式中沒有對應文字的設定，以 `json` 加上數值寫入；讀回時會原樣保留。

從應用程式儲存的指令稿會包含所有設定，因此開啟後會是同一個零件。匯入的STEP實體會從應用程式寫入指令稿內；而從指令列建立時，則會寫成由 `step-file` 指定名稱的獨立 `.step` 檔案。

## 指令列工具

此工具在安裝Node.js 24的電腦上執行，需從CadCraft原始碼的副本執行：`node tools/partcraft-cli/partcraft.mjs <command>`。它是開發人員工具，使用與應用程式相同的模組。零件為 `.partcraft.json` 檔或 `.pcscript` 指令稿。

| 指令 | 功能 |
|---|---|
| `info <part>` | 特徵、參數、回溯列，以及已建構實體的體積與尺寸 |
| `params <part>` | 每個參數與方程式及其數值 |
| `set <part> width=150 Base.depth==thick` | 正向：變更參數、連結數值（`==` 或運算式）、設定一般數字 |
| `drive <part> Base.depth=12` | 反向：求解被驅動數值背後的參數（`--prefer width` 可指定其一） |
| `build <part> --out x.step` | 寫出 `.step`、`.stl`、`.3mf`、`.json`、`.pcscript` 或巨集（`.swb`） |
| `build <part> --table sizes.csv --out-dir sizes` | 設計表每列各寫出一個檔案 |
| `variants <part> --out-dir d` 或 `--zip f.zip` | 將每個組態以STEP、IFC、DWG與預覽圖、變體表及程式庫項目的形式輸出（`--only "A,B"`、`--formats step,ifc,dwg,preview`、`--no-item`）；請參閱[製作變體套件](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | 指令稿轉為零件 |
| `to-script <part> -o part.pcscript` | 零件轉為指令稿 |
| `rollback <part> [<feature>]`、`forward <part> [--end]` | 移動檔案中的回溯列 |
| `check <part> [--strict]` | 規範檢查（見下方） |

`build` 還可接受 `--set name=value`（僅適用於此次建構）與 `--upto <feature>`。所有指令都可使用 `--json`。結束代碼：0表示正常，1表示發現問題，2表示指令輸入錯誤。指令稿絕不會原地改寫：若要儲存變更後的副本，請使用 `-o`。

## 檢查

`check` 會回報哪些因素會讓零件日後難以變更：

| 發現項目 | 計為 |
|---|---|
| 草圖過度定義（關係互相衝突或重複） | 錯誤 |
| 無法建構的特徵 | 錯誤 |
| 含有錯誤的參數或方程式，或彼此相依的參數 | 錯誤 |
| 草圖定義不足（附其自由度） | 警告 |
| 直接輸入於特徵與標註中、未由任何參數驅動的數字 | 警告 |
| 未被使用的參數 | 警告 |
| 被壓縮的特徵；回溯列不在結尾 | 警告 |

`--strict` 會將所有警告視為錯誤，讓建構指令稿能拒絕未完全驅動的零件。

:::note
`.swb` 巨集輸出是供多數工坊使用的零件建模程式所用：在該程式內執行時，會在該程式中建構零件。本處並未在該程式中執行過（我們的伺服器上沒有該程式），因此請視為未經測試。
:::
