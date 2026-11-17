---
title: 搭配 AI 助理使用 PartCraft
summary: 讓自己的 AI 助理或指令稿處理目前開啟的零件：讀取其特徵、參數與質量，變更參數並重建，執行指令稿，匯出與儲存。開啟前預設為關閉。
keywords: ai, 助理, 代理, mcp, 模型情境協定, 指令稿, 自動化, 參數, 質量特性, stl, step, 3mf, 權限, 中斷連線, 活動, 資料夾
from: e66d3470
---

## 學習內容

如何讓 AI 助理（或自行撰寫的指令稿）查看目前開啟的零件、變更其參數、執行指令稿並匯出，以及如何決定它可以存取的範圍。

PartCraft **本身沒有 AI**，也不會將任何資料傳送到別處。助理需自行準備：任何支援模型情境協定（MCP）的程式皆可。PartCraft 只提供工具，並可選擇開放哪些工具。

## 開啟方式

1. 開啟 {{ui:設定}}（應用程式列中的齒輪，或 {{key:Mod+,}}），然後切換到 {{ui:PartCraft}} 索引標籤。
2. 在 {{ui:助理}} 下，勾選 **允許 AI 助理與指令稿使用 PartCraft**。在勾選之前，此功能預設為關閉。
3. 選擇其可執行的操作。**讀取** 預設已勾選；其他項目僅在需要時才勾選。
4. 若要允許它匯出並儲存至某個資料夾，請在 **可使用的資料夾** 下選擇 {{ui:新增資料夾…}}，然後在 Studio 的對話方塊中選取該資料夾。

助理透過電腦上的 **CadCraft Studio** 連線：Studio 會顯示地址與權杖，供貼入助理中。瀏覽器分頁無法為助理建立連線。

## 助理可以要求的操作

| 工具 | 權限 | 說明 |
|---|---|---|
| `part_describe`, `features_list` | 讀取 | 依順序列出特徵，包括哪些已成功建立、哪些失敗，以及材料、實體的體積與尺寸 |
| `params_list` | 讀取 | 列出參數，以及所有可由方程式驅動的數值及其值 |
| `mass_properties` | 讀取 | 體積、面積、質心、其慣性；零件有材料時的質量 |
| `param_set` | 編輯 | 設定參數或特徵的數值並重建。為一個可復原的步驟 |
| `script_run` | 編輯 | 以 {{ui:腳本}} 工作區的方式執行 CraftScript、Lua 或 Python 指令稿：在沙箱中執行，無檔案與網路存取。零件不會變更 |
| `part_export` | 匯出 | STL、3MF、STEP 或 OpenUSD（.usdz、.usda、.usdc），與 {{ui:檔案}} › {{ui:匯出}} 所寫出的格式相同 |
| `link_push` | 編輯 | 更新從其他程式連結的模型（請參閱[保持 .3dm 模型即時同步](topic:live-3dm-link)） |
| `link_status` | 讀取 | 說明連結的模型是否仍存在，以及最後一次更新的時間 |
| `part_save` | 儲存 | PartCraft 自身的 {{ui:儲存}} |
| `illustrate_export` | 匯出 | 來自 {{ui:圖解}} 工作區的手冊，可匯出為 PDF 或 SVG 線稿（其視圖）、互動式 3D 檔案，或其說明書為 PDF 或網頁，與該工作區的 {{ui:匯出}} 與 {{ui:說明書}} 選單寫出的方式相同（[手冊](topic:illustrate)） |

:::note
此版本使用網格核心：體積由三角形計算（略低於真正的曲面實體），STEP 以多面體寫出，使用三角形而非精確曲面。
:::

## 由您掌控

- **每次變更都是一個復原步驟**，並會標示為助理所做，例如 "Assistant: set l = 45"。按 {{key:Mod+Z}} 即可復原。
- **隨時知道是否已連線。** 連線期間，應用程式列中的按鈕會顯示助理名稱。按一下即可查看其可執行的操作，或**中斷連線**。
- **活動。** {{ui:設定}} › {{ui:PartCraft}} › {{ui:助理}} › {{ui:活動}} 會列出每一次呼叫；{{ui:儲存紀錄}} 會保存一份副本。
- **資料夾。** 助理只會讀寫已新增之資料夾中的檔案；按 {{ui:移除}} 即可立即收回存取權。

## 不開啟 PartCraft

供助理使用的 CadCraft 檔案伺服器（`npx @getcadcraft/mcp`）與 `cadcraft` 指令列，無需開啟視窗即可以 PartCraft 本身的程式碼與網格核心開啟 `.partcraft.json` 零件：提供相同的讀取工具、設定參數、CraftScript 指令稿、匯出（亦包含 OpenUSD）與儲存。`cadcraft convert bracket.partcraft.json bracket.stl` 會從指令列建立零件並寫出。手冊（`.partcraft-manual.json`）也可在此匯出：`illustrate_export`，或 `cadcraft convert linkage.partcraft-manual.json linkage.pdf`（加上 `--instructions` 可匯出說明書）。

## 若無法正常運作

- **"needs the edit permission":** 在 {{ui:助理}} 下勾選 **編輯**，然後再次要求。
- **"driven by the equation":** 此數值會隨某個參數變化；請改為要求助理設定該參數。
- **變更有誤：** 按 {{key:Mod+Z}}。

## 另請參閱

- [AI 助理操作範例](common:assistants-recipes)：附有實例，每個範例都列出其呼叫的工具。
