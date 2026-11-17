---
title: 讓 .3dm 模型保持即時連動
summary: 在建立模型的程式中變更模型，PartCraft中的實體會跟著更新。來源可為Rhino 8或Grasshopper定義，其後的特徵會在新形狀上重建。
keywords: rhino, grasshopper, 即時連結, 即時連線, 3dm, NURBS, 參數化, 連結, 同步, 指令稿, 推送, 匯入實體
from: cf4dc9b2
---

在建模的地方繼續塑形，並在此處進行加工、檢查與文件記錄。另一個程式中的每次變更，都會取代PartCraft中一個匯入的實體，其後的特徵會在新形狀上重建。

:::note
此連結需要在同一台電腦上執行CadCraft Studio。瀏覽器分頁無法建立連線。資料不會經過網際網路：指令稿會以本機自身的位址並搭配權杖與Studio通訊。
:::

:::warning
此連結已使用指令稿的檔案寫入器與另一程式的替代元件進行測試，尚未在Rhino或Grasshopper本身中測試。若在該處發生錯誤，請回報其顯示的訊息。
:::

## 設定

1. 在Studio中開啟PartCraft。在{{ui:設定}} › {{ui:PartCraft}} › {{ui:助理}}中，勾選**允許AI助理與指令稿使用PartCraft**，然後按**編輯**。
2. 在Studio中選擇{{ui:連線助理}}。會顯示位址與權杖，供下方貼上。
3. 下載指令稿：[cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py)。

## 從Rhino使用

1. 在Rhino的指令稿編輯器中執行`cadcraft_link.py`（Rhino 8中為Python 3）。
2. 第一次執行時，貼上位址與權杖。它們會存放在使用者資料夾中的`.cadcraft-link.json`，絕不會存在模型中。Studio每次啟動都會產生新的權杖，因此屆時指令稿會再次詢問。

再次執行指令稿即可停止。

## 從Grasshopper使用

請先在Rhino中執行一次指令稿，以便儲存位址與權杖。

1. 新增「指令稿」元件（Python 3），並將整個`cadcraft_link.py`貼入其中。
2. 為其設定以下輸入：`G`（幾何，需啟用清單存取）、`N`（名稱，選填）、`On`（布林切換），以及`Target`（選填：`model`或`part`，於兩個應用程式都開啟時使用）。
3. 將`On`設為true。

每次求解時，都會送出`G`，並取代元件上次送出的內容。

## 運作方式

- **單一實體。**模型中所有可見的內容會成為一個匯入特徵，與[開啟.3dm檔案](topic:open-3dm-files)時相同。
- **必須閉合。**PartCraft會填補小孔與平面開口，並告知另一程式填補的數量。若模型仍未閉合，PartCraft會保留原有的實體，並於狀態列顯示。下一次閉合的變更會更新實體。
- **先完成目前的工作。**在草圖或圖紙中，更新會被拒絕並於稍後重試；回到模型後即會套用。
- **復原。**兩秒內的更新共用同一個復原步驟。
- **儲存。**零件檔案會保留連結。重新開啟後再次執行指令稿，同一特徵便會更新。

**僅單向。**在此所做的變更不會回傳至另一程式。

## 若發生錯誤

- **「沒有ModelCraft或PartCraft視窗允許此操作」：**請執行設定的步驟1。
- **「Studio拒絕了權杖」：**Studio已重新啟動。複製新的權杖並再次執行指令稿。若使用Grasshopper，請先在Rhino中執行。
- **「無法連線至CadCraft Studio」：**Studio未在執行，或位址已變更。
